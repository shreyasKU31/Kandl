import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
const app = express();
const port = 4000;

const connectDB = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/kandl");
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

app.listen(port, () => {
  console.log("Server running at ", port);
});
