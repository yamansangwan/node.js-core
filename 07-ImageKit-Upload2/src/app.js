const express = require("express")
const postModel = require("./models/post.model")
const uploadBuffer = require("./services/post.service")
const multer = require("multer")
const app = express()
app.use(express.json())

// this line i dont remembe ri just know multer is used for reading image and getting the buffer afterwards
const upload = multer({ storage : multer.memoryStorage()})

app.post("/create-a-post" , upload.single("image") , async (req , res) => {
         const response = await uploadBuffer(req.file.buffer)
         postModel.create({
            image : response.url,
            caption : req.body.caption
         })
         console.log(response.url);
         console.log(req.body.caption);
         res.status(201).json("post created successfully")
         
         
})

app.get("/fetch-all-posts" , async (req, res) =>{
        const data = await postModel.find()
        res.status(200).json(data)
        
})



module.exports = app