import jwt from "jsonwebtoken"
import { getTable, saveTable } from "../utils/readAndWriteFile.js"
import { DB_USER } from "../config/constants.js"

//[{
// id : 1,
// name: "icarus",
// email: "icarus117@gmail.com",
// password: "lifeisunfair""
//},{
// id :2,
// name: "igris",
// email:"souldev@gmail.com",
// password:"qwerty"
//}]

export const handleSignup = async (req, res) => {
  const { name, email, password } = req.body

  if (!name || !email || !password) {
    return res.status(400).json({ message: "inavlid request" })
  }

  const users = await getTable(DB_USER)

  if (users.find(u => u.email === email)) {
    return res.status(400).json({ message: "email already exists" })
  }

  const newUser = {
    id: users.length > 0 ? users[users.length - 1].id + 1 : 1,
    name,
    email,
    password
  }

  users.push(newUser)

  await saveTable(DB_USER, users)

  res.status(201).json({ message: `user creared with id: ${newUser.id}` })
}

export const handleLogin = async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {

    return res.status(400).json({ message: "inavlid request" })
  }

  const Users = await getTable(DB_USER)
  const user = Users.find(u => u.email === email && u.password === password)

  if (!user) {
    return res.status(400).json({ message: "no such user exists" })
  }

  const token = jwt.sign({ sub: user.id }, "secret123")

  res.status(200).json({ token })
}
