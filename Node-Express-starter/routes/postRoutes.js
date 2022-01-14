const express = require("express");
const postControllers = require("../controllers/postControllers");
const router = express.Router();

// @route GET && POST - /posts/
router
  .route("/")
  .get(postControllers.getAllPosts)
  .post(postControllers.createNewPost);

//if i want to get a post by his id
router.route("/:id").get(postControllers.getPostById);

module.exports = router;
