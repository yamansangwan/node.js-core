const imagekit = require("imagekit")

const imagekitKey = new imagekit ( {

    privateKey : process.env.PRIVATE_KEY,
    publicKey :process.env.PUBLIC_KEY,
    urlEndpoint : process.env.URL_END_POINT

})

async function uploadBuffer(buffer) {

    const result = await imagekitKey.upload({
        file : buffer.toString("base64"),
        fileName : "image.jpg"
    })
    
    console.log("BUFFER UPLOADED");
    return result
    
}

module.exports = uploadBuffer