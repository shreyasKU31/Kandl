import mongoose from "mongoose";
import watchlistSchema from "../schema/watchlistScema";

const watchList = new mongoose.model("watchlist", watchlistSchema);

export default watchList;
