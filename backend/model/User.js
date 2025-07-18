import mongoose from "mongoose";
import userSchema from "../schema/userSchema.js";

const User = mongoose.model("user", userSchema);

export default User;
