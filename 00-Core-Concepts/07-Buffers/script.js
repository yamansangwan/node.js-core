const fs = require('fs');
const { buffer } = require('stream/consumers');

const image = fs.readFileSync('./assets/images/WIN_20260619_22_43_44_Pro.jpg')

console.log(image.toString("base64"));

