const path = require('path');

// used to decide correct seperator
const file1 = "projects/node/app.js"
const file2 = "projects2/node2"
const fullpath = path.join(file1,file2)

// parse give multiple info at once
console.log(path.parse(file1));
console.log(path.parse(file2));

// is absolute or relative ?
console.log(path.isAbsolute(file1));

const anPath = path.resolve(file1)
console.log(anPath);

console.log(path.isAbsolute(anPath));

console.log(fullpath);
