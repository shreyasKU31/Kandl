import express from "express";
import "dotenv/config";
const app = express();
import mongoose from "mongoose";
import Holdings from "../model/Holdings.js";
import watchList from "../model/watchlist.js";

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

app.get("/demo", (req, res) => {
  const holdings = [
    {
      name: "COLPAL",
      qty: 3,
      avg: 2250.0,
      price: 2348.5,
      net: "+4.37",
      day: "+0.29",
    },
    {
      name: "ABB",
      qty: 5,
      avg: 5100.0,
      price: 4960.0,
      net: "-2.75",
      day: "-1.09",
      isLoss: true,
    },
    {
      name: "DABUR",
      qty: 10,
      avg: 540.0,
      price: 563.3,
      net: "+4.31",
      day: "+0.16",
    },
    {
      name: "TECHM",
      qty: 4,
      avg: 1290.0,
      price: 1338.75,
      net: "+3.78",
      day: "-0.25",
      isLoss: true,
    },
    {
      name: "PIDILITIND",
      qty: 2,
      avg: 2800.0,
      price: 2875.2,
      net: "+2.68",
      day: "+1.01",
    },
    {
      name: "AMBUJACEM",
      qty: 15,
      avg: 495.0,
      price: 507.9,
      net: "+2.61",
      day: "+0.62",
    },
    {
      name: "SIEMENS",
      qty: 1,
      avg: 6400.0,
      price: 6588.65,
      net: "+2.94",
      day: "+1.43",
    },
    {
      name: "DIVISLAB",
      qty: 2,
      avg: 3880.0,
      price: 3782.4,
      net: "-2.51",
      day: "-0.11",
      isLoss: true,
    },
    {
      name: "INDIGO",
      qty: 1,
      avg: 3300.0,
      price: 3480.0,
      net: "+5.45",
      day: "+0.82",
    },
  ];
  const watchlistData = [
    {
      name: "DMART",
      price: 3820.75,
      percent: "+0.64",
      isDown: false,
    },
    {
      name: "SUNPHARMA",
      price: 1145.5,
      percent: "-0.31",
      isDown: true,
    },
    {
      name: "NTPC",
      price: 384.25,
      percent: "+0.90",
      isDown: false,
    },
    {
      name: "TITAN",
      price: 3421.1,
      percent: "-1.20",
      isDown: true,
    },
    {
      name: "HCLTECH",
      price: 1532.4,
      percent: "+1.17",
      isDown: false,
    },
    {
      name: "ULTRACEMCO",
      price: 8992.85,
      percent: "-0.08",
      isDown: true,
    },
    {
      name: "POWERGRID",
      price: 311.6,
      percent: "+0.42",
      isDown: false,
    },
    {
      name: "BRITANNIA",
      price: 5048.5,
      percent: "-0.18",
      isDown: true,
    },
    {
      name: "EICHERMOT",
      price: 3910.0,
      percent: "+2.35",
      isDown: false,
    },
  ];

  holdings.forEach((holding) => {
    let newHolding = new Holdings({
      name: holding.name,
      qty: holding.qty,
      avg: holding.avg,
      price: holding.price,
      net: holding.net,
      day: holding.day,
    });

    newHolding
      .save()
      .then(() => {
        console.log("Holding saved successfully.");
      })
      .catch((err) => {
        console.log(err);
      });
  });

  watchlistData.forEach((watch) => {
    let newWatch = new watchList({
      name: watch.name,
      qty: watch.qty,
      percent: watch.percent,
      isDown: watch.isDown,
    });

    newWatch
      .save()
      .then(() => {
        console.log("Watchlist item saved successfully.");
      })
      .catch((err) => {
        console.log(err);
      });
  });

  res.send(`${process.env.MONGODB_URL}`);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
