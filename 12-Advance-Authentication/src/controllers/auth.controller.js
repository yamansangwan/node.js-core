const userModel = require("../models/user.model")

const jwt = require("jsonwebtoken")

async function registerUser(req,res) {
    const { username, email, password } = req.body

    const isEmailExists = await userModel.findOne({
        email
    })
    
    if(isEmailExists) {
        return res.status(401).json("UNAUTHORIZED")
    }
    
    const user = await userModel.create({
        username,
        email,
        password
    })

    
    // jwt.sign({load},key)
    const token = jwt.sign(
        {id : user._id},
        process.env.SECRET_KEY
    
    )

    res.cookie("token",token)

    console.log("User Created") 
    
    // json() -> returns on ly one item ,
    // json({}) -> for many
    res.status(201).json(
        {
        message: "user created",
        user
        }  
    )

    
}

module.exports = { registerUser }

