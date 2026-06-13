import React, { useEffect, useState } from "react"
import axios from "axios"

function FetchPosts(){
    const [posts , setPosts] = useState([
        {
            _id : 1,
            image : "https://images.unsplash.com/photo-1773332585760-8b5dc6079a74?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            caption : "TEST CAPTION"
        }, 
        {
            _id : 1,
            image : "https://ik.imagekit.io/plcrzi8ki/image_3je69SL7C.jpg?updatedAt=1781324266389",
            caption : "TEST CAPTION"
        }
    ])

    useEffect(()=>{

        axios.get("http://localhost:3000/fetch-all-posts")
        .then((res) => { 
            console.log(res.data)
            setPosts(res.data.posts)
    
    })
    } , [] )


    return (
        <section className="outer-container">
            {posts.map((post) => (
                <section className="card" key={post._id}>
                    {/* <p>{post._id}</p> */}
                    <img src={post.image} alt={post.caption} />
                    <p>{post.caption}</p>
                </section>
            ))}
        </section>
    )
}

export default FetchPosts