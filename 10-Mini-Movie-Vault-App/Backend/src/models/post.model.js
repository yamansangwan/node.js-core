const mongoose = require('mongoose');

const vaultSchema = new mongoose.Schema({
    title : String,
    poster: String,
    genre : String,
    rating : Number,
    mixOf : String
})

const vaultModel = mongoose.model("post" , vaultSchema)

module.exports = vaultModel