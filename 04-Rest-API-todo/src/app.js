const express = require("express");

const app = express();

app.use(express.json())

const toDos = []; 


app.post( "/todo/today" , ( req , res ) => {
    toDos.push(req.body)
    res.status(201,res.json({ taskAdded : " DONE " })
    )
} )


app.get( "/todo/today" , (req ,res) => {
    res.status(200 , res.json({
           todo : toDos
    })
)})


app.delete( "/todo/today/:index" , (req ,res) => {

    const idx = req.params.index;
    toDos.splice(idx,1)
    res.status(200 , res.json({ deleteTask : " DONE "}))

} )



app.patch( "/todo/today/:index" , (req , res) => {

    const idx = req.params.index;
    const cObj = toDos[idx];
    const updatedTasks = req.body
    const uObj = { 
        ...cObj,
        ...updatedTasks
     }
    toDos[idx] = uObj
    res.status(200).json({ updatedTasks : " DONE " })
    

    //  const idx =  req.params.index;
    //  toDos[ idx ] = req.body;
    //  res.status(200 , res.json({ updatedTask : "DONE" }))

} )


module.exports = app;









const oldTodo = {
   city:"Delhi",
   age:20
}

const update = {
   age:21
}

const updatedObject = {
    ...oldTodo,
    update
}

console.log(updatedObject);
