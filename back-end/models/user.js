const mongoose = require("mongoose")


const schema = mongoose.Schema({

    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default : "http://localhost:4000/uploads/1.jpg"

    },
    role: {
        type: String,
        enum: ["ADMIN", "USER"],
        default: "USER"
    }


}, { timestamps: true })


const model = mongoose.models.User || mongoose.model("User", schema)


module.exports = model