const app = require("./src/app")

const connectDB = require("./src/db/db")

connectDB()

const newModel = require("./src/models/todo.model")

app.listen(3000,() => console.log("server is running"))