import mongoose, { Schema } from "mongoose";

const AttendanceSchema = new Schema({
    classId: {
        type: Schema.Types.ObjectId,
        ref:"Class"
    },
    studentId: {
        type: Schema.Types.ObjectId,
        ref:"User"
    },
    status: {
        type: String,
        enum:["present", "absent"]
    }
})

export const AttendanceModel = mongoose.model("Attendance",AttendanceSchema )