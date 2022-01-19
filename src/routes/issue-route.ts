import { issueController } from "../controllers/issue-controller";
import { Router } from "express";
const router = Router();

router.route("/").get(issueController.getAllIssues);

router.route("/:id").get(issueController.getIssueById);

router.route("/createIssue").post(issueController.createIssue);

router.route("/updateIssue").put(issueController.updateIssue);

router.route("/deleteIssue").put(issueController.deleteIssue);

export default router;
