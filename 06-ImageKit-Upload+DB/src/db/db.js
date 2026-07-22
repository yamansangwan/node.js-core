const mongoose = require("mongoose")

async function connectDB() {
    await mongoose.connect("mongodb+srv://test:test123@backend-db.f2tspsz.mongodb.net/winpostDB")
}

module.exports = connectDB
