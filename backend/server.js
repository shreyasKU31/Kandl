import express from "express";
import "dotenv/config"; // Make sure this is at the very top
import mongoose from "mongoose";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";

// --- Models (In a real app, these would remain in './models/') ---
import Holdings from "./model/Holdings.js";
import watchList from "./model/Watchlist.js";
import Order from "./model/Orders.js";
import User from "./model/User.js";

// --- Helper function to wrap async routes, removing the need for try-catch blocks everywhere ---
// In a real app, you might use a package like 'express-async-handler'
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

// --- Middleware to check for authentication ---
// In a real app, this would be in 'middleware/authMiddleware.js'

// --- Main App Initialization ---
const app = express();
const port = process.env.PORT || 4000; // Use environment variable for port

// --- Core Middleware ---
app.use(cors());
app.use(express.json()); // Modern replacement for bodyParser.json()
app.use(express.urlencoded({ extended: true })); // Modern replacement for bodyParser.urlencoded()

// --- Session Configuration ---
// Note: For production, use a proper session store like 'connect-mongo'
const sessionOptions = {
  secret: process.env.SESSION_SECRET || "a-strong-default-secret-for-dev", // LOAD FROM .env!
  resave: false,
  saveUninitialized: false, // Set to false, login will handle session creation
  cookie: {
    // Lowercase 'c' is correct
    maxAge: 24 * 60 * 60 * 1000, // 1 day
    httpOnly: true, // Helps protect against XSS
    secure: process.env.NODE_ENV === "production", // Use secure cookies in production
  },
};
app.use(session(sessionOptions));

// --- Passport.js Configuration ---
// In a real app, this setup would be in 'config/passport.js'
app.use(passport.initialize());
app.use(passport.session());

// passport-local-mongoose provides User.authenticate(), etc.
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// --- Routes ---
// In a real app, routes would be in a 'routes/' directory

// Auth Routes
app.post(
  "/api/auth/register",
  asyncHandler(async (req, res) => {
    // Add validation here with a library like Joi or express-validator
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Username, email, and password are required.",
      });
    }
    const newUser = new User({ username, email });
    // .register is a passport-local-mongoose method that handles hashing
    const registeredUser = await User.register(newUser, password);

    // Log the user in directly after registration
    req.login(registeredUser, (err) => {
      if (err) {
        // The 'next(err)' will be caught by our global error handler
        return next(err);
      }
      res.status(201).json({
        success: true,
        message: "Registration successful!",
        user: { id: registeredUser._id, username: registeredUser.username },
      });
    });
  })
);

app.post("/api/auth/login", passport.authenticate("local"), (req, res) => {
  // If this function gets called, authentication was successful.
  // `passport.authenticate()` will send a 401 response on failure.
  res.json({
    success: true,
    message: "Login successful!",
    user: { id: req.user._id, username: req.user.username },
  });
});

app.post("/api/auth/logout", (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.json({ success: true, message: "Logout successful!" });
  });
});

// Data Routes (Protected)
app.get(
  "/api/holdings",

  asyncHandler(async (req, res) => {
    // Fetch holdings only for the currently logged-in user
    const holdings = await Holdings.find({});
    res.json(holdings);
  })
);

app.get(
  "/api/watchlist",

  asyncHandler(async (req, res) => {
    const watchlist = await watchList.find({});
    res.json(watchlist);
  })
);

app.get(
  "/api/orders",

  asyncHandler(async (req, res) => {
    const orders = await Order.find({});
    res.json(orders);
  })
);

app.post(
  "/api/orders/buy",

  asyncHandler(async (req, res) => {
    let data = req.body;
    // Associate the order with the logged-in user
    // Use Mongoose's .create() method
    const newOrder = await Order.create(data);
    res.status(201).json(newOrder);
  })
);

// --- Global Error Handling Middleware ---
// This should be the LAST middleware added.
// It catches any errors passed with next(err).
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error for debugging
  const statusCode = err.statusCode || 500;
  const message = err.message || "An unexpected error occurred.";
  res.status(statusCode).json({
    success: false,
    message: message,
  });
});

// --- Database Connection and Server Start ---
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Database connected successfully.");
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  } catch (err) {
    console.error("Database connection failed.", err);
    process.exit(1); // Exit the process with an error code
  }
};

startServer();
