import { DB_ORG, DB_USER } from "../config/constants.js"
import { getTable, saveTable } from "../utils/readAndWriteFile.js"


export const createMember = async (req, res) => {
  const adminId = req.user

  const { memberemail, organizationId } = req.body

  const Org = await getTable(DB_ORG)

  const organization = Org.find(o => o.id === organizationId)

  if (!organization || !organization.adminId === adminId) {
    return res.status(404).json({ message: "organization not found" })
  }
  const User = await getTable(DB_USER)
  const member = User.find(u => u.email === memberemail)

  if (!member) {
    return res.status(400).json({ message: "no such user exists" })
  }

  const existingMember = organization.members.includes(member.id);

  if (existingMember) {
    return res.status(400).json({ message: "this member already exists" })
  }


  organization.members.push({ id: member.id })
  await saveTable(DB_ORG, Org)

  res.status(201).json({ message: "member created" })
}

//get all the users which are member of a specific organization
export const getMember = async (req, res) => {
  const organizationId = parseInt(req.query.organizationId)

  if (!organizationId) {
    return res.status(400).json({ message: "Invalid organizationId" })
  }

  const User = await getTable(DB_USER)

  const Org = await getTable(DB_ORG)

  const organization = Org.find(o => o.id === organizationId)

  if (!organization) {
    return res.status(400).json({ message: "organization doesn't exist" })
  }

  const allMembers = organization.members

  const users = User.filter(e => allMembers.includes(e.id)).map(e => e.email)

  res.status(200).json({ members: users })

}

export const delMember = async (req, res) => {
  const { organizationId, memberemail } = req.body
  const userId = req.user

  if (!organizationId || !memberemail) {
    return res.status(400).json({ message: "invalid request" })
  }
  const Org = await getTable(DB_ORG)

  const organization = Org.find(o => o.id === organizationId)

  if (!organization) {
    return res.status(404).json({ message: "organization not found" })
  }

  if (organization.adminId !== userId) {
    return res.status(403).json({ message: "not authorized" })
  }
  const User = await getTable(DB_USER)

  const userToRemove = User.find(u => u.email === memberemail)

  if (!userToRemove) {
    return res.status(404).json({ message: "user not found" })
  }

  organization.members = organization.members.filter(user => user.id !== userToRemove.id)
  await saveTable(DB_ORG, Org)

  res.status(200).json({ message: "member deleted" })
}
