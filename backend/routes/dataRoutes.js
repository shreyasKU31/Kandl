import express from "express";
import {
  buyStock,
  getHoldings,
  getOrders,
  getWatchList,
} from "../controllers/dataController.js";

const router = express.Router();

router.get("/holdings", getHoldings);
router.get("/watchlist", getWatchList);
router.get("/order", getOrders);

router.post("/buy", buyStock);

export default router;
