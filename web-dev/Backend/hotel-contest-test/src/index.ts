import "dotenv/config"
import express from "express";

const app = express();

app.use(express.json())


import authRouter from "./routes/auth.route"
import hotelsRouter from "./routes/hotels.route"
import bookingsRouter from "./routes/bookings.route"
import { VerifyUser, AccessibleOnlyTo } from "./middleware/auth.middleware";

app.use("/api/auth" ,authRouter)
app.use("/api/hotels" ,hotelsRouter)
app.use("/api/bookings", bookingsRouter );

app.post(
  "/api/reviews",
  VerifyUser,
  AccessibleOnlyTo(["customer"]),
  (req, res) => {},
);

app.listen(3000 , ()=> console.log("server started at 3000"))