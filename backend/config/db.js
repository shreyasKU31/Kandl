import mongoose from "mongoose";
import "dotenv/config";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Database is connectd");
  } catch (error) {
    alert(error.message);
  }
};

export default connectDB;
