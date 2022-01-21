import { Router } from "express";
import issueController from "./issue";

const router = Router();

router.route('/').get(issueController.getIssues);

export default router;