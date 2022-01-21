import { Router } from "express";
import issueController from "./issue";

const router = Router();

router.route("/").get(issueController.getIssues);

router.route("/:id").get(issueController.getIssueById);

router.route("/createIssue").post(issueController.createIssue);

router.route("/updateIssue").put(issueController.updateIssue);

router.route("/deleteIssue/:id").put(issueController.deleteIssue);

export default router;
