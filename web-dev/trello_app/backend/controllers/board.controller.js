import { DB_BOARD, DB_ORG } from "../config/constants.js"
import { getTable, saveTable } from "../utils/readAndWriteFile.js"

//{
// id: 1,
// title: "",
// organizationId: 2
//}
//
//

export const createBoard = async (req, res) => {
  const { title, organizationId } = req.body

  if (!title) {
    return res.status(400).json({ message: "invalid input" })
  }

  const Board = await getTable(DB_BOARD)

  const Org = await getTable(DB_ORG)

  const organization = Org.find(o => o.id === organizationId)

  if (!organization) {
    return res.status(400).json({ message: "couldn't find the organization" })
  }

  const newBoard = {
    id: Board.length > 0 ? Board[Board.length - 1].id + 1 : 1,
    title,
    organizationId
  }
  Board.push(newBoard)
  await saveTable(Board)

  res.status(201).json({ message: "board created" })
}


export const getBoards = async (req, res) => {
  const organizationId = parseInt(req.query.organizationId)


  const Board = await getTable(DB_BOARD)
  const existOrg = Board.find(o => o.organizationId === organizationId)

  if (!existOrg) {
    return res.status(404).json({ message: "this organization might not exist" })
  }

  res.status(200).json(existOrg)


}
