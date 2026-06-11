const mongoose = require("mongoose")

const newSchema = new mongoose.Schema ({
    image : String,
    genre : String
})

const newModel = mongoose.model("post" , newSchema)

module.exports = newModel