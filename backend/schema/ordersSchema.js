import { Schema } from "mongoose";

const orderScema = new Schema({
  name: String,
  qty: Number,
  price: Number,
  type: String,
});

export default orderScema;
