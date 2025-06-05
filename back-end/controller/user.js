const userModel = require('../models/user')
const bycrypt = require("bcrypt");
const { log } = require('console');
const jwt = require('jsonwebtoken')

exports.createUser = async (req, res) => {

    const filename = req?.file?.filename || null;
    const { firstname, lastname, email, password, image } = await req.body

    const isUserExist = await userModel.findOne({ email })

    if (isUserExist) {
        return res.status(409).json({
            message: "user is exist"
        })
    }

    const hashPassword = bycrypt.hashSync(password, 12)

    const user = await userModel.create({ firstname, lastname, email, password: hashPassword, image: filename ? `http://localhost:4000/uploads/${filename}` : "http://localhost:4000/uploads/1.jpg" })

    const token = jwt.sign({ id: user._id, email }, process.env.JWT_SECRET)

    res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        maxAge: 1000 * 60 * 60 * 24 * 365,


    })

    return res.json({ message: "User Created", token })

}

exports.getUserInformation = async (req, res) => {

    const { id } = req.params

    return res.status(200).json({ message: id })

}

exports.loginUser = async (req, res) => {


    const { identifier, password } = req.body


    const isUserAvailable = await userModel.findOne({ email: identifier.trim() })

    if (!isUserAvailable) {
        return res.status(401).json({ message: "password or email is not correct" })
    }

    const checkPassword = bycrypt.compareSync(password, isUserAvailable.password)

    if (!checkPassword) {
        return res.status(401).json({ message: "password or email is not correct " })
    }

    const token = jwt.sign({ id: isUserAvailable._id, email: identifier }, process.env.JWT_SECRET)

    res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        maxAge: 1000 * 60 * 60 * 24 * 365,

    })

    res.status(200).json({ message: "login successfully", token })

}

exports.getToken = async (req, res) => {

    

    if (req.cookies.token === undefined) {
        return res.status(404).json({ message: "please login first" })
    }

    const token = req.cookies.token

   
    

    if (!token) {
        return res.status(401).json({ message: "token is invalid" })
    }

    const verfiyToken = jwt.verify(token, process.env.JWT_SECRET)

    const user = await userModel.findById(verfiyToken.id).select("-password -__v")


    return res.status(200).json({ verfiyToken,user })

}


exports.logOut = async (req, res) => {



    for (let property in req.cookies) {
        res.clearCookie(property)
    }


    return res.status(200).json({ message: "user is log out" })

}