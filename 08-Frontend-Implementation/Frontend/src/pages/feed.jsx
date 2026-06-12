import React, { useState } from "react"

const Feed = () => {
    const [posts, setPosts] = useState([
        {
            _id: 1,
            image:
                "https://images.unsplash.com/photo-1773332585760-8b5dc6079a74?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            caption: "SPLASH IMAGES",
        },
    ])

    return (
        <section className="feed-container">
            {posts.map((post) => (
                <section key={post._id} className="post-card">
                    <p>{post._id}</p>
                    <img src={post.image} alt={post.caption} />
                    <p>{post.caption}</p>
                </section>
            ))}
        </section>
    )
}

export default Feed