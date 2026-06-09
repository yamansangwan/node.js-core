const mongoose = require("mongoose")

const newSchema = new mongoose.Schema ({
    task : String,
    task_completed : Boolean,
})

const newModel = mongoose.model("task", newSchema)

module.exports = newModel