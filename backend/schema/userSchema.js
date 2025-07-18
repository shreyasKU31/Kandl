import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const userSchema = mongoose.Schema({
  username: String,
  email: String,
});
userSchema.plugin(passportLocalMongoose);

export default userSchema;
