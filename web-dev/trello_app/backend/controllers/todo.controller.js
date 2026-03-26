//{
// id:1 ,
// title: "",
// boardId : 2,
// state: "NEXT_UP" | "PROGRESS" | "DONE" | "ARCHIVE"
//}
//

import { DB_BOARD, DB_ISSUE } from "../config/constants.js"
import { getTable, saveTable } from "../utils/readAndWriteFile.js"

export const createIssue = async (req, res) => {
  const { title, boardId } = req.body

  if (!title) {
    return res.status(400).json({ message: "invalid input" })
  }

  const Board = await getTable(DB_BOARD)

  const existBoard = Board.find(b => b.id === boardId)

  if (!existBoard) {
    return res.status(400).json({ message: "invalid baord id" })
  }
  const Issue = await getTable(DB_ISSUE)

  const newIssue = {
    id: Issue.length > 0 ? Issue[Issue.length - 1].id + 1 : 1,
    title,
    state: "NEXT_UP",
    boardId
  }

  Issue.push(newIssue)
  await saveTable(DB_ISSUE, Issue)

  res.status(201).json({ message: "new issue created", issue: newIssue })
}

export const getIssues = async (req, res) => {
  const boardId = parseInt(req.query.boardId)

  const Issue = await getTable(DB_ISSUE)


  const existIssue = Issue.filter(i => i.boardId === boardId)

  if (!existIssue) {
    return res.status(400).json({ message: "this issue does not exist" })
  }

  res.status(200).json(existIssue)
}

export const updateIssues = async (req, res) => {
  const { issueId, title, state } = req.body
  if (!issueId) {
    return res.status(400).json({ message: "issueId is required" })
  }

  const Issue = await getTable(DB_ISSUE)

  const issue = Issue.find(i => i.id === issueId)

  if (!issue) {
    return res.status(404).json({ message: "issue not found" })
  }

  // validate state
  const validStates = ["NEXT_UP", "PROGRESS", "DONE", "ARCHIVE"]

  if (state && !validStates.includes(state)) {
    return res.status(400).json({ message: "invalid state value" })
  }

  // update fields (only if provided)
  if (title) issue.title = title
  if (state) issue.state = state

  await saveTable(DB_ISSUE, Issue)

  res.status(200).json({
    message: "issue updated successfully",
    issue
  })
}
