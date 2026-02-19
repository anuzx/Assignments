import "dotenv/config";
import express from "express";

const app = express();

app.use(express.json())


import authRouter from "./routes/auth.route";
import bookingsRouter from "./routes/bookings.route";
import hotelsRouter from "./routes/hotels.route";
import reviewRouter from "./routes/reviews.route"

app.use("/api/auth" ,authRouter)
app.use("/api/hotels" ,hotelsRouter)
app.use("/api/bookings", bookingsRouter );
app.use("/api/reviews", reviewRouter)


app.listen(3000 , ()=> console.log("server started at 3000"))