const express = require("express")
const multer = require("multer")
const newModel = require("./models/winpost.model")

const app = express()

const bufferCollect = require("./services/storage.service")
app.use(express.json())

const imageUpload = multer({storage: multer.memoryStorage()})


app.post( "/post-it" , imageUpload.single("image"), async(req , res) => {

    const result = await bufferCollect(req.file.buffer)
    const post = await newModel.create({
        image : result.url,
        genre : req.body.genre
    })
    res.status(200).json("uploaded successfully")
    
} )


app.get("/fetch-it" , async (req, res) => {
    const posts = await newModel.find()
    res.status(200).json({
        status : "fetched successfully",
        posts
    })
})


module.exports = app