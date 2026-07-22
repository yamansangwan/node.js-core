console.log(process.argv);

// cutting doen node info from array
console.log(process.argv.slice(2));

{

// const args = process.argv.slice(2);

// console.log("Hello", args[1]);

}



{

const args = process.argv.slice(2);

const a = Number(args[0]);
const b = Number(args[1]);

console.log(a + b);

}


{
// pid ?? - unique id assigned to a perticular process by os

console.log("YOUR PROCESS ID IS :: " , process.pid);

}


{
// process exit make the node exit the process

// process.exit(0) // number of errors

}


{

// process on takes 1 even and callback

process.on("exit" , () => console.log("Exited Successfully"))

console.log("Exiting....");

process.exit()





}





