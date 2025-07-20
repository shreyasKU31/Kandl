import express from "express";
import {
  buyStock,
  getHoldings,
  getOrders,
  getWatchList,
} from "../controllers/dataController";
import isLoggedIn from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/holdings", isLoggedIn, getHoldings);
router.get("/watchlist", isLoggedIn, getWatchList);
router.get("/order", isLoggedIn, getOrders);

router.post("/buy", isLoggedIn, buyStock);
