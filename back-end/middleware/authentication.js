const jwt = require("jsonwebtoken")
const userModel = require('../models/user')




module.exports = async (req, res, next) => {

    if (req.cookies.token === undefined) {
        return res.status(401).json({ message: 'please login first' })
    }


    try {

        const token = req.cookies.token
        const verfiyToken = jwt.verify(token, process.env.JWT_SECRET)

        const user = await userModel.findById(verfiyToken.id).select('-password').lean()

        req.user = user
        next()
    } catch (error) {
        return res.status(404).json({ error })
    }





}