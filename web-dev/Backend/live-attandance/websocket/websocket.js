import { WebSocketServer } from "ws";
import jwt from "jsonwebtoken"
import url from "url"
import {
  getActiveSession,
  clearActiveSession,
} from "../controllers/attandance.controller.js";
import { ClassModel } from "../models/class.model.js";
import {AttendanceModel} from "../models/attendance.model.js"

class AttendanceSocket {
  constructor(server) {
    this.wss = new WebSocketServer({ server, path: "/ws" });
    this.init();
  }

  init() {
    this.wss.on("connection", (ws, req) => this.handleConnection(ws, req));
  }

  // Broadcast to all connected clients
  broadcast(data) {
    const message = JSON.stringify(data);
      
    this.wss.clients.forEach((client) => {
      if (client.readyState === 1) {
        client.send(message);
      }
    });
  }

  // Send to specific client
  sendToClient(ws, data) {
    if (ws.readyState === 1) {
      ws.send(JSON.stringify(data));
    }
  }

  // Send error to client
  sendError(ws, message) {
    this.sendToClient(ws, {
      event: "ERROR",
      data: { message },
    });
  }

  handleConnection(ws, req) {
    const parsedUrl = url.parse(req.url, true);
    const token = parsedUrl.query.token;

    if (!token) {
      this.sendError(ws, "Unauthorized or invalid token");
      ws.close();
      return;
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      ws.user = {
        userId: decoded.id,
        role: decoded.role,
      };
    } catch (error) {
      this.sendError(ws, "Unauthorized or invalid token");
      ws.close();
      return;
    }

    ws.on("message", (message) => this.handleMessage(ws, message));
    ws.on("close", () => {});
    ws.on("error", () => {});
  }

  async handleMessage(ws, message) {
    try {
      const parsed = JSON.parse(message.toString());
      const { event, data } = parsed;

      switch (event) {
        case "ATTENDANCE_MARKED":
          await this.handleAttendanceMarked(ws, data);
          break;
        case "TODAY_SUMMARY":
          await this.handleTodaySummary(ws);
          break;
        case "MY_ATTENDANCE":
          await this.handleMyAttendance(ws);
          break;
        case "DONE":
          await this.handleDone(ws);
          break;
        default:
          this.sendError(ws, "Unknown event");
      }
    } catch (error) {
      this.sendError(ws, "Invalid message format");
    }
  }

  // Event: ATTENDANCE_MARKED (Teacher only)
  async handleAttendanceMarked(ws, data) {
    if (ws.user.role !== "teacher") {
      this.sendError(ws, "Forbidden, teacher event only");
      return;
    }

    const activeSession = getActiveSession(ws.user.userId);
    if (!activeSession) {
      this.sendError(ws, "No active attendance session");
      return;
    }

    const { studentId, status } = data;
    activeSession.attendance[studentId] = status;

    this.broadcast({
      event: "ATTENDANCE_MARKED",
      data: { studentId, status },
    });
  }

  // Event: TODAY_SUMMARY (Teacher only)
  async handleTodaySummary(ws) {
    if (ws.user.role !== "teacher") {
      this.sendError(ws, "Forbidden, teacher event only");
      return;
    }

    const activeSession = getActiveSession(ws.user.userId);
    if (!activeSession) {
      this.sendError(ws, "No active attendance session");
      return;
    }

    const attendanceValues = Object.values(activeSession.attendance);
    const present = attendanceValues.filter((s) => s === "present").length;
    const absent = attendanceValues.filter((s) => s === "absent").length;
    const total = attendanceValues.length;

    this.broadcast({
      event: "TODAY_SUMMARY",
      data: { present, absent, total },
    });
  }

  // Event: MY_ATTENDANCE (Student only)
  async handleMyAttendance(ws) {
    if (ws.user.role !== "student") {
      this.sendError(ws, "Forbidden, student event only");
      return;
    }

    const activeSession = getActiveSession();
    if (!activeSession) {
      this.sendError(ws, "No active attendance session");
      return;
    }

    // Check if student is enrolled in the active session's class
    const classDoc = await ClassModel.findById(activeSession.classId);
    if (
      !classDoc ||
      !classDoc.studentIds.some((id) => id.toString() === ws.user.userId)
    ) {
      this.sendError(ws, "No active attendance session");
      return;
    }

    const status =
      activeSession.attendance[ws.user.userId] || "not yet updated";

    this.sendToClient(ws, {
      event: "MY_ATTENDANCE",
      data: { status },
    });
  }

  // Event: DONE (Teacher only)
  async handleDone(ws) {
    if (ws.user.role !== "teacher") {
      this.sendError(ws, "Forbidden, teacher event only");
      return;
    }

    const activeSession = getActiveSession(ws.user.userId);
    if (!activeSession) {
      this.sendError(ws, "No active attendance session");
      return;
    }

    try {
      const classDoc = await ClassModel.findById(activeSession.classId);
      if (!classDoc) {
        this.sendError(ws, "Class not found");
        return;
      }

      // Mark absent students (not yet marked)
      classDoc.studentIds.forEach((studentId) => {
        const studentIdStr = studentId.toString();
        if (!activeSession.attendance[studentIdStr]) {
          activeSession.attendance[studentIdStr] = "absent";
        }
      });

      // Persist to MongoDB
      const attendanceRecords = Object.entries(activeSession.attendance).map(
        ([studentId, status]) => ({
          classId: activeSession.classId,
          studentId,
          status,
        }),
      );

      if (attendanceRecords.length > 0) {
        await AttendanceModel.bulkWrite(
          attendanceRecords.map((record) => ({
            updateOne: {
              filter: { classId: record.classId, studentId: record.studentId },
              update: { $set: record },
              upsert: true,
            },
          })),
        );
      }

      // Calculate final summary
      const attendanceValues = Object.values(activeSession.attendance);
      const present = attendanceValues.filter((s) => s === "present").length;
      const absent = attendanceValues.filter((s) => s === "absent").length;
      const total = attendanceValues.length;

      // Broadcast final message
      this.broadcast({
        event: "DONE",
        data: {
          message: "Attendance persisted",
          present,
          absent,
          total,
        },
      });

      // Clear memory
        clearActiveSession();
        
    } catch (error) {
      this.sendError(ws, "Failed to persist attendance");
    }
  }
}


export {AttendanceSocket}