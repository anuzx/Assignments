import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "./db.js";

const app = express();

app.use(express.json());

import userRouter from "./routes/user.route.js";
import classRouter from "./routes/class.route.js";


app.use("/auth", userRouter);
app.use("/class", classRouter);

connectDB().then(() => {
  app.listen(3000, () => console.log("server started at 3000"));
});
