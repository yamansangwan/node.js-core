const fs = require("fs").promises

// fs.writeFile("user.txt","\n USING WRITE BY FS MODULE" , (err)=>{
//     if (err){
//         console.log(err);
        
//     } console.log("WRITTEN");
    
// })



// fs.appendFile("user.txt" , "\n THIS IS A NEW LINE USING APPEND" , (err) => {
//     if(err){
//         console.log("ERROR");
//         return;
//     }
//     console.log("APPEND DONE");
    
// })





// fs.readFile("user.txt" , "utf-8" , (err,data) => {
//         console.log(data);
//         console.log(" reading done");     
// })







// conversion of above into async await (promise style)

// async function run(){

// await fs.writeFile(
//     "user.txt","\n USING WRITE BY FS MODULE" 
// )

// await fs.appendFile(
//     "user.txt" , "\n THIS IS A NEW LINE USING APPEND" 
// )


// const data = await fs.readFile("user.txt" , "utf-8")

// console.log(data);

// }

// run()






// async await with promise style with error handling

async function run(){

    try {
        await fs.writeFile(
    "user.txt","\n USING WRITE BY FS MODULE" 
)

await fs.appendFile(
    "user.txt" , "\n THIS IS A NEW LINE USING APPEND" 
)


const data = await fs.readFile("user.txt" , "utf-8")

console.log(data);
    } catch(err) {
        console.log(err);
        
    }

}

run()

