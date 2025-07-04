import { model } from "mongoose";
import holdingSchema from "../schema/HoldingsSchema.js";

const Holdings = model("Holdings", holdingSchema);
export default Holdings;
