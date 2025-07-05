import mongoose from "mongoose";
import watchlistSchema from "../schema/watchlistScema.js";

const watchList = mongoose.model("watchlist", watchlistSchema);

export default watchList;
