import fs from "fs/promises"


// helper to read db 
export const getTable = async (DB_PATH) => {
  const data = await fs.readFile(DB_PATH, "utf-8")
  return JSON.parse(data)
}

// helper to save db entries 
export const saveTable = async (DB_PATH, table) => {
  await fs.writeFile(DB_PATH, JSON.stringify(table, null, 2))
}
