import React from 'react'
import './pages.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CreateMovie from '../pages/CreateMovie'
import UpdateMovie from '../pages/UpdateMovie'
import DeleteMovie from '../pages/DeleteMovie'
import ViewMovies from '../pages/ViewMovies'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/create-movie" element={<CreateMovie />} />
        <Route path="/view-movies" element={<ViewMovies />} />
        <Route path="/delete-movie" element={<DeleteMovie />} />
        <Route path="/update-movie" element={<UpdateMovie />} />
      </Routes>
    </Router>
  )
}

export default App
