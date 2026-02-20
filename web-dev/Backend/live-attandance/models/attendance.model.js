import mongoose, { Schema } from "mongoose";

const AttendanceSchema = Schema({
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

export const Attendance = mongoose.model("Attendance",AttendanceSchema )