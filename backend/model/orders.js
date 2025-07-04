import mongoose from "mongoose";
import orderScema from "../schema/ordersSchema";

const order = new mongoose.model("order", orderScema);

export default order;
