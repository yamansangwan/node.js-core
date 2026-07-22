const fs = require('fs');
const path = require('path');

// const file = require('./notes.txt');

const filepath = path.join(__dirname,"notes.txt")
const newfilepath = path.join(__dirname,"notes2.txt")


// renaming it

fs.rename(filepath,newfilepath,(err)=>{
    if (err) console.log(err)
    console.log("renamed");
    
})


fs.readFile(newfilepath,'utf-8',(err,data)=>{

if(err){
    console.error(err);
    return;
} 
console.log(data);

});


// fs.writeFile(filepath,"This is totally Written by writeFile fuction",(err)=>{
//     if (err) console.error(err)
//     console.log("Writing Completed");
// })


fs.appendFile(newfilepath,"\nThis is written using append function 2",(err) => {
    if(err) console.error(err)
    console.log("Updating Completed");
    
})



