// crypto.createHash("sha256")  -- creates a hash machine
// .update is used for the input data

const crypto = require('crypto');

const a = "hello there"
console.log(crypto.createHash("sha256")
.update(a)
.digest("hex"));



// hexa decimal random bytes|

const bytes = crypto.randomBytes(16)
console.log(bytes.toString("hex"));


// another example

const pass = crypto.createHash("sha256")
              .update("NodeJS")
              .update("Backend")
              .digest("hex")

              console.log("This is the hashed password : ", pass);

console.log("This is a random 8 bytes token : ", crypto.randomBytes(8).toString("hex"));
              
              

