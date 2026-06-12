import React from 'react'

const CreatePost = () => {
       return (

        <section className="form-container">

        <form> 
           <input type="file" className = 'uploadImage' name="image" accept="image/*" />  
            <input type="text" placeholder="enter caption" Required />
            <button type="submit"> SUMBIT </button>
        </form>

        </section>
        
       )
}

export default CreatePost

