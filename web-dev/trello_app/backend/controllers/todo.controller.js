

//{
// id:1 ,
// title: "",
// boardId : 2,
// state: "NEXT_UP" | "PROGRESS" | "DONE" | "ARCHIVE"
//}
//

import { DB_ISSUE } from "../config/constants.js"
import { getTable, saveTable } from "../utils/readAndWriteFile.js"

export const createIssue = async (req, res) => {
  const { title, boardId } = req.body

  if (!title) {
    return res.status(400).json({ message: "invalid input" })
  }

  const Issue = await getTable(DB_ISSUE)

  const newIssue = {
    id: Issue.length > 0 ? Issue[Issue.length - 1].id + 1 : 1,
    title,
    state: "NEXT_UP",
    boardId
  }

  Issue.push(newIssue)
  await saveTable(DB_ISSUE, newIssue)

  res.status(201).json({ message: "new issue created", issue: newIssue })
}

export const getIssues = async (req, res) => {
  const boardId = parseInt(req.query.boardId)

  const Issue = await getTable(DB_ISSUE)


  const existIssue = Issue.find(i => i.boardId === boardId)

  if (!existIssue) {
    return res.status(400).json({ message: "this issue does not exist" })
  }

  res.status(200).json(existIssue)
}

export const updateIssues = async (req, res) => {

}
