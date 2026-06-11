const imageKit = require("imagekit")

const imagekit  = new imageKit({
    publicKey : "dumb",
    privateKey : "private_hoQrd2qUnzgHPaBjpjvkkSWd2tE=",
    urlEndpoint : "dumb"
})

async function bufferCollect(buffer) {
    const result = await imagekit.upload({
         file : buffer.toString("base64"),
         fileName : "image.jpg",
})
return result
console.log(result);

} 

module.exports = bufferCollect