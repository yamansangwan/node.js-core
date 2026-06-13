import React from 'react'
import axios from "axios"

function CreatePost() {

async function handleSubmit(e) {
  e.preventDefault()

  const formData = new FormData(e.target)

  const response = await axios.post(
  "http://localhost:3000/creating-a-post",
  formData
)

console.log(response.data)

}

  return (
    <section className='container'>
            <form onSubmit={handleSubmit} >
                <input className='imageUploader' type="file" name="image" id = "image" accept = "image/*" alt="this is a example image" />
                <input type="text" name="caption" id="text" placeholder="" />
                <button type="submit">UPLOAD POST</button>
            </form>
        </section>
  )
}

export default CreatePost