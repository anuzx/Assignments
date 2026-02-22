import mongoose, { Schema } from "mongoose";

const ClassSchema = new Schema({
  className: {
    type: String,
  },
  teacherId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  studentIds: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ],
});

export const ClassModel = mongoose.model("Class" , ClassSchema)