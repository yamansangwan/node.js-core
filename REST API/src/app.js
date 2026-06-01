// used to create the server

const exp = require("express");

const app = exp();

app.post("/notes" , (req,res) => {
    console.log(req.body)
})

module.exports = app;