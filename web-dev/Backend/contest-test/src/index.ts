import express from "express"

const app = express()

app.use(express.json())

app.use("/api/auth")

app.listen(3000 , ()=>{console.log("serever started at 3000");
})

