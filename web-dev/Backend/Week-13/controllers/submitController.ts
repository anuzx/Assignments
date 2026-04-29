import type { Request, Response } from "express";
import { pool } from "../config/db";

/**
 * Submit a problem & update progress (transactional)
 */

export const submitProblem = async (req: Request, res: Response) => {
  const { user_id, problem_id } = req.body

  if (!user_id || !problem_id) {
    return res.status(400).json({ message: "invalid input" })
  }

  const client = await pool.connect()

  try {
    await client.query('BEGIN')

    //submission of problem
    await client.query(`INSERT INTO submissions(user_id , problem_id) VALUES($1,$2)`, [user_id, problem_id])

    //get course_id for this problem 
    const courseResult = await client.query(
      `SELECT course_id FROM problems WHERE id = $1`,
      [problem_id]
    )

    const course_id = courseResult.rows[0].course_id

    //total problems in this course
    const totalResult = await client.query(
      `SELECT COUNT(*) as total FROM problems WHERE course_id = $1`,
      [course_id]
    )
    const total = parseInt(totalResult.rows[0].total)

    //SOLVED PROBLEMS
    const solvedResult = await client.query(
      `SELECT COUNT(*) as solved 
       FROM submissions s
       JOIN problems p ON s.problem_id = p.id
       WHERE s.user_id = $1 AND p.course_id = $2`,
      [user_id, course_id]
    )
    const solved = parseInt(solvedResult.rows[0].solved)


    //calculate percentage
    const percentage = ((solved / total) * 100).toFixed(2)

    //upsert into progress
    await client.query(
      `INSERT INTO progress (user_id, course_id, completion_percentage)
       VALUES ($1, $2, $3)
       ON CONFLICT (user_id, course_id)
       DO UPDATE SET completion_percentage = EXCLUDED.completion_percentage`,
      [user_id, course_id, percentage]
    )
    await client.query('COMMIT')

  } catch (error) {

    await client.query('ROLLBACK')
    res.status(500).json({ message: "submission failed", error })
  } finally {

    client.release()

  }


}
