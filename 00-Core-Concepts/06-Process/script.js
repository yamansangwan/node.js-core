const dotenv = require('dotenv');
dotenv.config()

// object with much process info
console.log(process);

console.log(process.env.URL);

console.log(process.env.NAME);

console.log("__dirname:", __dirname);
console.log("process.cwd():", process.cwd());

