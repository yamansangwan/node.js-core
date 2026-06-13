import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CreatePost from '../pages/CreatePost'
import FetchPosts from '../pages/FetchPosts'

function App() {
  return (

 <Router>
  <Routes>
    <Route path='/' element={<h1>WORKING</h1>} />
     <Route path='/create-post' element={<CreatePost />} />
     <Route path='/fetch-posts'  element={<FetchPosts />}/>
  </Routes>
 </Router>

    
  )
}

export default App
