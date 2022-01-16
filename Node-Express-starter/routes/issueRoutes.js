const express = require("express");
const issueControllers = require("../controllers/issueControllers");
const router = express.Router();

// @route GET && POST - /issues/
router
  .route("/")
  .get(issueControllers.getAllIssues)
  .post(issueControllers.createNewIssue)
  .put(issueControllers.updateIssue);

//if i want to get a issue by his id
router.route("/:id").get(issueControllers.getIssueById);
router.route("/delete/:id").delete(issueControllers.deleteIssueById);

module.exports = router;
