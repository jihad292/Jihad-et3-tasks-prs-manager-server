import { issueController } from "../controllers/issue-controller";
import { Router } from "express";
const router = Router();

export const getAllIssuesRoute = router.route("/").get(issueController.getAllIssues);

export const getIssueById = router.route("/:id").get(issueController.getIssueById);


