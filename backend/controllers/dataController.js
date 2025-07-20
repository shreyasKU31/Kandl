import Holdings from "../model/Holdings.js";
import Order from "../model/Orders.js";
import WatchList from "../model/Watchlist.js";
import wrapAsync from "../errors/wrapAsync.js";

export const getHoldings = async (req, res) => {
  const holdings = await Holdings.find({});
  res.status(200).json(holdings);
};

export const getOrders = wrapAsync(async (req, res) => {
  const order = await Order.find({});
  res.send(order);
});

export const getWatchList = wrapAsync(async (req, res) => {
  const watchlist = await WatchList.find({});
  res.json(watchlist);
});

export const buyStock = wrapAsync(async (req, res) => {
  let data = req.body;
  await Order.insertOne(data);
});
