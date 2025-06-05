const express = require('express')
require('./config/db')
const cookieParser = require("cookie-parser")
const userRouter = require("./routes/user")
const blogRouter = require('./routes/blogs')
const cors = require("cors")
const uploader = require('./middleware/multer')
require('dotenv').config()
const app = express()


app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))
app.use(express.json({ limit: '50mb' }));  // default is 100kb!
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use('/uploads', express.static('uploads'))

app.get('/', async (req, res) => {


    return res.json({ message: "API is Working" })
})


app.post('/', uploader.single("image"), async (req, res) => {

   

    const { filename, path } = req.file

    console.log(filename, path);

    return res.json({ msessage: "fsfsf" })
})

app.use("/api/user", userRouter)
app.use('/api/blogs', blogRouter)


app.listen(process.env.PORT || 4000, () => {

    console.log("Server is running at 4000 port");

})