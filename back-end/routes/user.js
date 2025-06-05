const express = require("express")
const userController = require("../controller/user")
const authMiddleware = require("../middleware/authentication")
const uploader = require('../middleware/multer')

const router = express.Router()


router.post("/register", uploader.single("image"), userController.createUser)
router.post('/login', userController.loginUser)
router.route('/')
    .get( userController.getToken)
    .delete(authMiddleware, userController.logOut)



module.exports = router