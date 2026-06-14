import React, { useState } from 'react'

function DeleteMovie() {
  const [movieId, setMovieId] = useState('')

  function handleDelete(e) {
    e.preventDefault()

    if (!movieId) {
      alert('Enter movie id')
      return
    }

    fetch(`http://localhost:3000/delete-movie/${movieId}`, {
      method: 'DELETE',
    })
      .then(() => alert('Movie deleted'))
      .catch(() => alert('Could not delete movie'))
  }

  return (
    <section className="page-shell">
      <h1>Delete Movie</h1>
      <form onSubmit={handleDelete} className="page-form">
        <input
          className="text-field"
          type='text'
          value={movieId}
          onChange={(e) => setMovieId(e.target.value)}
          placeholder='Enter movie id'
          required
        />
        <button className="form-button" type='submit'>Delete</button>
      </form>
    </section>
  )
}

export default DeleteMovie
