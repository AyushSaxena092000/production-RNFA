const express = require("express");
const { requireSignIn } = require("../controllers/userController");
const {
  createPostController,
  getAllPostsController,
  getUserPostsController,
  deletePostController,
  updatePostController,
} = require("../controllers/postController");

// router object

const router = express.Router();

// Create Post || Post

router.post("/create-post", requireSignIn, createPostController);

// Get All Posts
router.get("/get-all-post", getAllPostsController);

//GET USER POSTs
router.get("/get-user-post", requireSignIn, getUserPostsController);

// Delete Post

router.delete("/delete-post/:id", requireSignIn, deletePostController);

// UPDATE POST
router.put("/update-post/:id", requireSignIn, updatePostController)

// export

module.exports = router;
