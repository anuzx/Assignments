import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
    role: {
    type: String,
    enum: ["teacher", "student"],
  },
});

export const UserModel = mongoose.model("User", userSchema);
