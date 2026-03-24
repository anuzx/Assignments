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


  organization.members.push(member.id)
  await saveTable(DB_ORG, Org)

  res.status(201).json({ message: "member created" })
}

export const getMember = async (req, res) => {
  const organizationId = parseInt(req.query.organizationId)



}

export const delMember = async (req, res) => {

}
