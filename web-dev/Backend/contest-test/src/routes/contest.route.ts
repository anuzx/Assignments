import Router from "express"
import { addDsaQues, addMcq, createContest, getContestDetails, getContestLeaderboard, submitMcq } from "../controllers/contest.controller.js"
import { AccessibleBy, VerifyUser } from "../middleware/auth.middleware.js"

const router = Router()


router.post("/" ,VerifyUser , AccessibleBy(["creator"]), createContest)

router.get("/:contestId" ,VerifyUser ,getContestDetails)

router.post("/:contestId/mcq", VerifyUser, AccessibleBy(["creator"]), addMcq);

router.post(
  "/:contestId/mcq/:questionId/submit",
  VerifyUser,
  submitMcq,
);

router.post("/:contestId/dsa", VerifyUser, AccessibleBy(["creator"]), addDsaQues)

router.get("/:contestId/leaderboard" ,VerifyUser ,getContestLeaderboard);

export default router