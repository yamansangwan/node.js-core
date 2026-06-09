const mongoose = require("mongoose");

async function connectDb (){

    await mongoose.connect("mongodb+srv://superadmin:superadmin123@backend-db.f2tspsz.mongodb.net/newDB?appName=backend-db")
    console.log("Connected to DB");
    
}

module.exports = connectDb