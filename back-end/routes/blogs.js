const express = require("express")
const blogController = require("./../controller/blog")
const router = express.Router()
const authMiddleware = require("../middleware/authentication")
const uploader = require("../middleware/multer")


router.post("/create", authMiddleware, uploader.single("image"), blogController.createBlog)

router.get('/', blogController.getBlog)

router.get("/:id", blogController.getSingleBlogs)


module.exports = router