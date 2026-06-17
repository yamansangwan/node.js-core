const express = require("express")
const { post } = require("./auth.routes")
const jwt = require("jsonwebtoken")
const postRoute = express.Router()



postRoute.post("/create", (req, res) => {

const token = req.cookies.token

if(!token){
    return res.status(409).json({ message : "Invalid Token" })
}

try {
    const decoded = jwt.verify(token,process.env.SECRET_KEY)
    console.log(decoded)
    res.status(200).json("done")

} catch(error) {
    res.status(401).json("Invalid Token")
}

   
 
})

module.exports = postRoute