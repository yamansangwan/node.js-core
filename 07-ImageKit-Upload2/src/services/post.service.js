const imagekit = require("imagekit")

const imagekitKey = new imagekit({
    publicKey : "None",
    privateKey : process.env.PRIVATE_KEY,
    urlEndpoint : "None"
})

// here i just forgot everything 
// i know i need a function to upload the buffer to image kit by changing its format to string base 64 variant

async function uploadBuffer(buffer) {
    const response = await imagekitKey.upload({
        file : buffer.toString("base64"),
       fileName : "image.jpg" 
    }
    )
    return response
    
}

module.exports = uploadBuffer
