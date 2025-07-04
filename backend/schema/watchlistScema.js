import { Schema } from "mongoose";

const watchlistSchema = new Schema({
  name: String,
  price: Number,
  percent: String,
  isDown: Boolean,
});

export default watchlistSchema;
