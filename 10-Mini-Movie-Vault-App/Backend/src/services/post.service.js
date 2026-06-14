const imagekit = require("imagekit")

const imgKey = new imagekit({
    privateKey : process.env.PRIVATE_KEY,
    publicKey : process.env.PUBLIC_KEY,
    urlEndpoint : process.env.URL_END_POINT
})

async function uploadBuffer(buffer){
    const result = await imgKey.upload(
        {
            file: buffer.toString("base64"),
            fileName : "poster.jpg"
        }
    )
    
    console.log("File Uploaded To ImageKit");
    return result
    
    
}

module.exports = uploadBuffer