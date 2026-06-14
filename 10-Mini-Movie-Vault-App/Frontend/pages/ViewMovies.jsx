import React, { useEffect, useState } from 'react'

function ViewMovies() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:3000/find-movies')
      .then((res) => res.json())
      .then((data) => setMovies(data.Movies || []))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section className="page-shell page-shell-wide">
      <h1>View Movies</h1>

      {loading ? (
        <p className="page-message">Loading...</p>
      ) : movies.length === 0 ? (
        <p className="page-message">No movies found.</p>
      ) : (
        <div className="movie-grid">
          {movies.map((movie) => (
            <div key={movie._id} className="movie-card">
              {movie.poster && <img className="movie-card-image" src={movie.poster} alt={movie.title} />}
              <div className="movie-card-body">
                <h2>{movie.title}</h2>
                <p>{movie.genre}</p>
                <p>{movie.rating}</p>
                <p>{movie.mixOf}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default ViewMovies
