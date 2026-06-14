import React, { useState } from 'react'

function UpdateMovie() {
  const [movieId, setMovieId] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData(e.target)

    if (!movieId) {
      alert('Enter movie id')
      return
    }

    fetch(`http://localhost:3000/update-movie/${movieId}`, {
      method: 'PATCH',
      body: formData,
    })
      .then(() => alert('Movie updated'))
      .catch(() => alert('Could not update movie'))
  }

  return (
    <section className="page-shell">
      <h1>Update Movie</h1>
      <form onSubmit={handleSubmit} className="page-form">
        <input
          className="text-field"
          type='text'
          value={movieId}
          onChange={(e) => setMovieId(e.target.value)}
          placeholder='Enter movie id'
          required
        />
        <input className="text-field" type='text' name='title' placeholder='New title' />
        <input className="text-field" type='file' name='poster' accept='image/*' />
        <input className="text-field" type='text' name='genre' placeholder='New genre' />
        <input className="text-field" type='text' name='rating' placeholder='New rating or comment' />
        <input className="text-field" type='text' name='mixOf' placeholder='New mixture text' />
        <button className="form-button" type='submit'>Update</button>
      </form>
    </section>
  )
}

export default UpdateMovie
