const express = require("express");
const multer = require("multer");
const uploadBuffer = require("./services/post.service");
const vaultModel = require("./models/post.model");
const cors = require("cors")

const app = express();

app.use(express.json());

app.use(cors())

// middle ware for images
const upload = new multer({ storage: multer.memoryStorage() });

app.post("/create-movie", upload.single("poster"), async (req, res) => {

    const response = await uploadBuffer(req.file.buffer);
    // console.log(req.body);
    // console.log(response.url);

    const movie = await vaultModel.create({

        title: req.body.title,
        poster: response.url,
        genre: req.body.genre,
        rating: req.body.rating,
        mixOf: req.body.mixOf

    });

    res.status(200).json(movie);
});

app.get("/find-movies" , async (req, res) => {

    const data = await vaultModel.find()
    res.status(200).json({
        DATA : "all movies",
        Movies : data
    })
    
})

app.patch("/update-movie/:id", upload.single("poster") , async (req, res) => {
    const id = req.params.id
    // const updatedData = req.body
    const response = await uploadBuffer(req.file.buffer)
    
    await vaultModel.findByIdAndUpdate(id , {
        ...req.body,
        poster : response.url
    })
    res.status(200).json("updated data")

} )

app.delete("/delete-movie/:id" , async (req, res) => {
    const id = req.params.id
    await vaultModel.findByIdAndDelete(id)
    res.status(200).json("Movie Deleted")
})

app.get("/find-movie-by-name/:title" , async (req, res) => {
    const title = req.params.title
    const movie = await vaultModel.find({title})
    res.status(200).json(movie)
})

module.exports = app;
