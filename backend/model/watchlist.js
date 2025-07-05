import mongoose from "mongoose";
import watchlistSchema from "../schema/watchlistScema.js";

const WatchList = mongoose.model("watchlist", watchlistSchema);

export default WatchList;
