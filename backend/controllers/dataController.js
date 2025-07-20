import Holdings from "../model/Holdings";
import Order from "../model/Orders";
import WatchList from "../model/Watchlist";
import wrapAsync from "../errors/wrapAsync.js";

export const getHoldings = wrapAsync(async (req, res) => {
  const holdings = await Holdings.find({});
  res.send(holdings);
});

export const getOrders = wrapAsync(async (req, res) => {
  const order = await Order.find({});
  res.send(order);
});

export const getWatchList = wrapAsync(async (req, res) => {
  const watchlist = await WatchList.find({});
  res.send(watchlist);
});

export const buyStock = wrapAsync(async (req, res) => {
  let data = req.body;
  await Order.insertOne(data);
});
