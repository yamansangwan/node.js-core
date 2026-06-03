// used to create the server

const express = require("express")

const app = express()

app.use(express.json())

let tweets = [];



// posting the tweets
app.post("/tweets" , (req,res) => {
    tweets.push(req.body)
    res.status(201).json({msg : "Success Tweet Generated"})
})




// getting the tweets 
app.get("/tweets" , (req,res) => {
    res.status(200).json({
        tweets : tweets
    })
})



// deleting a tweet
app.delete("/tweets/:index", (req,res) => {
    const index = req.params.index;
    tweets.splice(index,1);
    res.status(200).json({
        msg : "deleted successfully"
    })
})



// updating a tweet
app.patch("/tweets/:index" , (req,res) => {
    const index = req.params.index;
    const tweet = req.body.tweet;
    tweets[index].tweet = tweet;

    res.status(200).json({
        msg : "updated successfully"
    })
})


module.exports = app;
