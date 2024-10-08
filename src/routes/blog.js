const express = require("express");
const {body} = require("express-validator");

const router = express.Router();

const blogController = require("../controllers/blog")

// [POST] : /v1/blog/post
router.post("/post", 
[
    body("title").isLength({min: 5}).withMessage("input title tidak sesuai"),
    body("body").isLength({min: 5}).withMessage("body tidak sesuai")
],
blogController.createBlogPost);

// GET
router.get("/posts", blogController.getAllBlogPost);
router.get("/post/:postId", blogController.getBlogPostById);

// UPDATE
router.put("/post/:postId", 
[
    body("title").isLength({min: 5}).withMessage("input title tidak sesuai"),
    body("body").isLength({min: 5}).withMessage("body tidak sesuai")
],
blogController.updateBlogPost);

// DELETE
router.delete("/post/:postId", blogController.deleteBlogPost);

module.exports = router;