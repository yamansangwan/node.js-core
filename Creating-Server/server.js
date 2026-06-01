// asking for express from the npm express packages using require keword
const express = require('express')

// stores teh express in app
const app = express()  // server instance creation

// programming a server to send response on "/" api using app.get()
// conatins -> request , response
// sends response on the basis of request

app.get("/" , (req, res) => {
    res.send("Hello, This is a response")
})


// if someone request to "/games" API

app.get("/games", (req,res) => { res.send("This is Games Section") })

// if someone request to "/about"

app.get("/about",(req,res)=> { res.send("This is about section") }) 

// programming for response 
// port : 3000 of our local host
app.listen(3000)  // to start the server


// data from frontend to backend is "request"
// data from backend to frontend is "response"