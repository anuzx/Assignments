import "dotenv/config"

import express from "express"

const app = express()

app.use(express.json())

import authRouter from "./routes/auth.route.js"
import contestRouter from "./routes/contest.route.js"
import problemRouter from "./routes/problem.route.js"

app.use("/api/auth", authRouter)
app.use("/api/contests", contestRouter)
app.use("/api/problems" , problemRouter)

app.listen(3000 , ()=>{console.log("serever started at 3000");
})

