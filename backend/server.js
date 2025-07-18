import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import Holdings from "./model/Holdings.js";
const app = express();
const port = 4000;
import cors from "cors";
import bodyParser from "body-parser";
import watchList from "./model/Watchlist.js";
import Order from "./model/Orders.js";
import passport from "passport";
import User from "./model/User.js";

app.use(cors());
app.use(bodyParser.json());

// passport
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

const connectDB = async () => {
  await mongoose.connect(process.env.MONGODB_URL);
};
connectDB()
  .then(() => {
    console.log("Database is Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Server");
});

app.get("/holdings", async (req, res) => {
  const holdings = await Holdings.find({});
  res.send(holdings);
});
app.get("/watchlist", async (req, res) => {
  const watchlist = await watchList.find({});
  res.send(watchlist);
});
app.get("/order", async (req, res) => {
  const order = await Order.find({});
  res.send(order);
});

app.post("/buy", async (req, res) => {
  let data = req.body;
  await Order.insertOne(data);
});

app.post("/register", async (req, res) => {
  try {
    const { username, email } = req.body;
    const newUser = new User({ username, email });
    const registerUser = await User.register(newUser, password);
    res.redirect("/holdings");
  } catch (err) {
    res.send("Some error : ", err.message);
  }
});

app.listen(port, () => {
  console.log("Server running at ", port);
});
