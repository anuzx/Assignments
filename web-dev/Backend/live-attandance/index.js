import dotenv from "dotenv";
import express from "express";
import http from "http"
dotenv.config();

const app = express();
const server = http.createServer(app);
app.use(express.json());



import connectDB from "./db.js";
import classRouter from "./routes/class.route.js";
import userRouter from "./routes/user.route.js";
import studentRouter from "./routes/students.route.js"
import attendanceRouter from "./routes/attendance.route.js"
import { AttendanceSocket } from "./websocket/websocket.js";


app.use("/auth", userRouter);
app.use("/class", classRouter);
app.use("/students" , studentRouter)
app.use("/attendance", attendanceRouter)

new AttendanceSocket(server);

connectDB().then(() => {
  server.listen(3000, () =>
  {
  console.log("server started at 3000");
  console.log("ws server running on 3000")}
  );

});

export {app,server}