import { ClassModel } from "../models/class.model.js";
import { AttendanceSchema } from "../schema/schema.js";
import { ErrorResponse } from "../utility/Apiresponse.js";

// Global inmemory attendance session
let activeSession = null;

export const getActiveSession = (teacherId = null) => {
  if (!activeSession) return null;
  // If teacherId provided, check ownership
  if (teacherId && activeSession.teacherId !== teacherId) return null;
  return activeSession;
};

export const clearActiveSession = () => {
  activeSession = null;
};

export const startAttendance = async (req, res) => {
  const parsedData = AttendanceSchema.safeParse(req.body);

  if (!parsedData.success) {
    return res.status(400).json(ErrorResponse("Invalid request schema"));
  }

    const { classId } = parsedData.data;
   

  // Find the class
  const existclass = await ClassModel.findById(classId);

  if (!existclass) {
    return res.status(404).json(ErrorResponse("Class not found"));
  }

  // Check if teacher owns the class
  if (existclass.teacherId.toString() !== req.userId) {
    return res.status(403).json(ErrorResponse("Forbidden, not class teacher"));
  }

  // Start new session (replaces any existing session)
  activeSession = {
    classId: classId,
    teacherId: req.userId,
    startedAt: new Date().toISOString(),
    attendance: {},
  };

   return res.status(200).json({
     success: true,
     data: {
       classId: activeSession.classId,
       startedAt: activeSession.startedAt,
     },
   });
};;