const { ifError } = require('assert');
const fs = require('fs');
const path = require('path');

// const file = require('./notes.txt');

const filepath = path.join(__dirname,"notes3.txt")
const folderpath = path.join(__dirname,"FS Test")
const nestedfolderpath = path.join(`${__dirname}/Notes/CS`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
// const newfilepath = path.join(__dirname,"notes2.txt")


// deleting the file

// fs.unlink(filepath,(err)=>{
//     if(err) console.error(err)
//     console.log("Deleted Successfully");
// })


// creating a dir/folder

fs.mkdir(folderpath,(err)=> {
    if(err) console.log(err)
    console.log("Folder Created");
})


// recursive nested folders

fs.mkdir(nestedfolderpath,{recursive : true},(err)=>{
    if(err) console.error(err)
    console.log("created");
    
})


// reading directory

fs.readdir(__dirname,(err,files)=>{
    if(err) console.error(err)
    console.log(files);
})



