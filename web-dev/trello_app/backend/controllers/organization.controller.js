
//[
//{
// id: 1 ,
// title: "",
// description: "",
// adminId: 1,
// members: [1,2,3]
//}
//]

import { DB_ORG, DB_USER } from "../config/constants.js"
import { getTable, saveTable } from "../utils/readAndWriteFile.js"

export const createOrganization = async (req, res) => {
  const { title, description } = req.body
  const userId = req.user

  if (!title || !description) {
    return res.status(400).json({ message: "invalid input" })
  }

  const Orgs = await getTable(DB_ORG)

  if (Orgs.find(o => o.title === title)) {
    return res.status(400).json({ message: "organization already exists" })
  }

  const newOrg = {
    id: Orgs.length > 0 ? Orgs[Orgs.length - 1].id + 1 : 1,
    title,
    description,
    adminId: userId,
    members: []
  }

  Orgs.push(newOrg);
  await saveTable(DB_ORG, Orgs)

  res.status(201).json({ message: `organization created with Id: ${newOrg.id}` })

}


export const getOrganization = async (req, res) => {
  const userId = req.user

  const orgId = parseInt(req.query.organizationId)

  const Org = await getTable(DB_ORG)

  const existOrg = Org.find(o => o.id === orgId)

  if (!existOrg || !existOrg.adminId === userId) {
    return res.status(404).json({ message: "organization not found" })
  }

  //we have to return organization details with all the members

  const Users = await getTable(DB_USER)

  const result = {
    organization: {
      ...existOrg,
      members: existOrg.members.map(memberId => {
        const user = Users.find(u => u.id === memberId)
        return {
          id: user.id,
          username: user.username
        }
      })
    }
  }
  res.status(200).json(result)

}
