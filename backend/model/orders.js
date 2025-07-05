import mongoose from "mongoose";
import orderScema from "../schema/ordersSchema.js";

const Order = mongoose.model("order", orderScema);

export default Order;
