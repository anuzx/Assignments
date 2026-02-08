import express from "express"

const app = express()

app.use(express.json())


import UserRouter from "./routes/auth.route"
import courseRouter from "./routes/courses.route"

app.use("/auth" ,UserRouter)
app.use("/courses" ,courseRouter)

//lesson endpoint
app.post("/lessons", (req, res) => {
    
})

//purchase endpoints
app.post("/purchases", (req, res) => { });

app.get("/users/:id/purchases", (req, res) => {});

app.listen(3000 , ()=>console.log("server started at port 3000")
)