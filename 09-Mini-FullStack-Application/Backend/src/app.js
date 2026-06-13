const express = require("express")
const multer = require("multer")
const uploadBuffer = require("./services/post.service")
const postModel = require("./models/post.model")
const cors = require("cors")

const app = express()

app.use(express.json())

app.use(cors())

const Multer = new multer( { storage : multer.memoryStorage() } )

app.post("/creating-a-post" , Multer.single("image") , async( req , res ) => {

    const response = await uploadBuffer(req.file.buffer)

    // console.log(req.body);
    // console.log(req.file);   

    // const data = {

    // }

    await postModel.create({
        image : response.url,
        caption : req.body.caption

    })

    res.status(201).json("created successfully")

} )


app.get("/fetch-all-posts" , async (req, res) => {

    const posts = await postModel.find()
    res.status(200).json({
        status : "records found",
        posts : posts

    })
})

module.exports = app