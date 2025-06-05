const mongoose = require("mongoose")

const schema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    writer: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required : true
    },
    image : {
        type: String,
        required : true
    }
})

schema.virtual("comments", {

    ref: "Comment",
    localField: "_id",
    foreignField: "course"

})


const model = mongoose.models.Blogs || mongoose.model("Blog", schema)

module.exports = model