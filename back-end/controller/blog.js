const blogModel = require("./../models/blog")
const mongoose = require("mongoose")

exports.createBlog = async (req, res) => {

   

    

    const { title, body } = req.body

    if (!req.user) {
        return res.status(404).json({ message: "user is not found" })
    }

    const blog = await blogModel.create({
        title,
        body,
        writer: req.user._id,
        image: `http://localhost:4000/uploads/${req.file.filename}`
    })

    return res.status(201).json({ blog })

}


exports.getBlog = async (req, res) => {

    const getBlog = await blogModel.find().populate('writer', '-password -__v').select('-__v')

    return res.status(200).json({ getBlog })
}

exports.getSingleBlogs = async (req, res) => {

    const { id } = req.params

    const isIdValid = await mongoose.isValidObjectId(id)

    if (!isIdValid) {
        return res.status(404).json({ message: "blog is not founded!!" })
    }

    const blog = await blogModel.findById(id).populate("writer", "-password -__v").select("-__v")



    return res.status(200).json(blog)

}