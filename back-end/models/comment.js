const mongoose = require("mongoose")



const schema = mongoose.Schema({
    body: {
        type: String,
        required: true
    },
    blog: {
        type: mongoose.Types.ObjectId,
        ref: "Blog",
        required: true,
    },
    writer: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },
   

}, { timestamps: true })


const model = mongoose.model("Comment", schema)

module.exports = model