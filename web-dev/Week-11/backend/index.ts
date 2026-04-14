import express from "express"

const app = express()

app.use(express.json())

import userRouter from "./routes/user.ts"
import accountRouter from "./routes/account.ts"

app.use("/api/v1/user", userRouter)
app.use("/api/v1/account", accountRouter)

app.listen(3000, () => console.log("server running at port 3000..."))
