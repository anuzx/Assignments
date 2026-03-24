import express from "express"


const app = express()

app.use(express.json())

import authRoute from "./routes/auth.route.js"
import todoRoute from "./routes/todo.route.js"
import organizationRoute from "./routes/organization.route.js"
import boardRoute from "./routes/boards.route.js"
import memberRoute from "./routes/member.route.js"

app.use("/api/auth", authRoute)
app.use("/api/todos", todoRoute)
app.use("/api/organization", organizationRoute)
app.use("/api/boards", boardRoute)
app.use("/api/members", memberRoute)

app.listen(3000, () => console.log("server at running at port 3000 ...."))
