import { AttendanceModel } from "../models/attendance.model.js";
import { ClassModel } from "../models/class.model.js";
import { UserModel } from "../models/user.model.js";
import { ClassSchema, StudentSchema } from "../schema/schema.js";
import { ErrorResponse, SuccessResponse } from "../utility/Apiresponse.js";

export const createClass = async (req, res) => {
  const teacherId = req.userId;
  const parsedData = ClassSchema.safeParse(req.body);

  if (!parsedData.success) {
    return res.status(400).json(ErrorResponse("Invalid request schema"));
  }

  const { className } = parsedData.data;

  try {
    const newclass = await ClassModel.create({
      className,
      teacherId,
      studentIds: [],
    });

    return res.status(201).json(SuccessResponse(newclass));
  } catch (error) {
    console.error(error);
    res.status(500).json(ErrorResponse("server error"));
  }
};

export const addStudent = async (req, res) => {
  const teacherId = req.params.id;
  const parsedData = StudentSchema.safeParse(req.body);

  if (!parsedData.success) {
    return res.status(400).json(ErrorResponse("Invalid request schema"));
  }

  const { studentId } = parsedData.data;

  //first check if class exist or not
  const Class = await ClassModel.findById(teacherId);

  if (!Class) {
    return res.status(404).json(ErrorResponse("Class not found"));
  }

  //check if teacher owns the class
  if (Class.teacherId.toString() !== req.userId) {
    return res.status(403).json(ErrorResponse("Forbidden, not class teacher"));
  }

  //check if student already exist
  const student = await UserModel.findById(studentId);
  if (!student || student.role !== "student") {
    return res.status(404).json(ErrorResponse("Student not found"));
  }

  //now add student if not already in class
  if (!Class.studentIds.includes(studentId)) {
    Class.studentIds.push(studentId);
    await Class.save();
  }

  return res.status(200).json(SuccessResponse(Class));
};

export const getClass = async (req, res) => {
  const classId = req.params.id;

  //class exist or not
  const existClass = await ClassModel.findById(classId).populate({
    path: "studentIds",
    select: "_id name email",
  });

  if (!existClass) {
    return res.status(404).json(ErrorResponse("Class not found"));
  }

  // Check access (teacher who owns OR student enrolled)
  const isTeacher =
    req.role === "teacher" && existClass.teacherId.toString() === req.userId;
  const isEnrolledStudent =
    req.role === "student" &&
    existClass.studentIds.some((s) => s._id.toString() === req.userId);

  if (!isTeacher && !isEnrolledStudent) {
    return res.status(403).json(ErrorResponse("Forbidden, not class teacher"));
  }

  return res.status(200).json({
    success: true,
    data: {
      _id: existClass._id,
      className: existClass.className,
      teacherId: existClass.teacherId,
      students: existClass.studentIds.map((s) => ({
        _id: s._id,
        name: s.name,
        email: s.email,
      })),
    },
  });
};

export const myAttendance = async (req, res) => {
  const classId = req.params.id;

  const existclass = await ClassModel.findById(classId);

  if (!existclass) {
   return res.status(404).json(ErrorResponse("Class not found"));
  }

 const isEnrolled = existclass.studentIds.some(
   (s) => s.toString() === req.userId,
 );

 if (!isEnrolled) {
   return res
     .status(403)
     .json(ErrorResponse("Forbidden, not enrolled in class"));
 }

  // Check MongoDB for persisted attendance
  const attendanceRecord = await AttendanceModel.findOne({
    classId,
    studentId: req.userId,
  });

  return res.status(200).json({
    success: true,
    data: {
      classId: classId,
      status: attendanceRecord ? attendanceRecord.status : null,
    },
  });
};

export const getStudent = async (req, res) => {

    const students = await UserModel.find({ role: "student" }).select("_id name email")
    
    
   return res.status(200).json(SuccessResponse(students))
}