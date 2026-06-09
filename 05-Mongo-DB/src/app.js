const express = require("express")

const app = express()

const newModel = require("./models/todo.model")

app.use(express.json());

app.post("/todo" , async (req , res) => {
    const data = newModel(req.body)
    await data.save()
    res.status(201).json({status : "Added Task Successfully"})
})


app.get("/todo" , async (req , res) => {
    const todos = await newModel.find()
    res.status(200).json({ 
        ToDOs : todos
     })
})

app.delete("/todo/:id" , async (req , res) => {
      const id = req.params.id
     
      await newModel.findByIdAndDelete(id)
      res.status(200).json("Successfully Deleted")
})


app.patch("/todo/:id" , async (req , res) => {
      const id = req.params.id
      await newModel.findByIdAndUpdate(id , req.body)
      res.status(200).json("Successfully Updated")
})


module.exports = app

