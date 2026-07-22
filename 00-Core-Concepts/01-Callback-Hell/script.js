const fs = require("fs").promises;


// callback hell ::: 
// fs.readFile("user1.txt","utf-8", (err,data) => {

//     if(err) return console.error(err);
//     fs.readFile("user2.txt","utf-8", (err,data1)=> {
//         if(err) return console.error(err);
//         console.log(data);
//         console.log(data1);
            
//     })
    
// })



async function readFiles (){
    try{
        // console.log(process.cwd()); // checking directory
        const d1 = await fs.readFile("user1.txt","utf-8")
        const d2 = await fs.readFile("user2.txt","utf-8")
        console.log(d1, d2);
        

} catch(error){
    console.log(error);
    
}
}  readFiles();




{

    // fetch and promise relation with .then

fetch("https://jsonplaceholder.typicode.com/users/2")
.then((response) => {
    console.log("done");
    
})


}



// promises , then , connection , flow , Practice]
// _______________________________________________




{

// promises

const promise = new Promise((res,rej) => {
    let s = true
    if(s){
        res("Success")
    } else {
        rej("rejected")
    }
})

promise
.then((result) => {
    console.log(result)
})
.then((result2) => {
    console.log(result2)
})
.catch((error)=>{
    console.log(error);
    
})


}
     

{

// age 18+ promise

const exPro = new Promise ((res,rej) => {
    let age = 19
    if (age > 18) res("allowed")
        else rej("not allowed")
})

exPro.then((data) => {
    console.log(data);
    return data
}).then((data) => {
    console.log(`you had ${18 - data} years in adulthood`); // will not work need object 
}).catch((err) => console.log(err))

}




{

// doing using object response

const exPro = new Promise ((res,rej) => {
    let age = 19
    if (age > 18) res({
        status : "allowed",
        age : age })

    else rej("not allowed")
})

exPro.then((data) => {
    console.log(data);
    return data
}).then((data) => {
    console.log(`you had ${data.age - 18} years in adulthood`);
}).catch((err) => console.log(err))



}