import express from "express";
import "dotenv/config";

import cors from "cors";
import bodyParser from "body-parser";
import passport from "passport";
import session from "express-session";
import LocalStrategy from "passport-local";

import User from "./model/User.js";
import connectDB from "./config/db.js";

const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json());

// passport
app.use(passport.initialize());
app.use(passport.session());

const sessionOptions = {
  secret: "kandl",
  resave: false,
  saveUninitialized: true,
  Cookie: {
    expires: Date.now() * 24 * 60 * 60 * 1000,
    maxAge: 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};
app.use(session(sessionOptions));

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

connectDB();

// --- Global Error Handling Middleware ---
// This should be the LAST middleware added.
// It catches any errors passed with next(err).
app.use((err, req, res, next) => {
  res.send("Error occured");
});

app.listen(port, () => {
  console.log("Server running at ", port);
});
