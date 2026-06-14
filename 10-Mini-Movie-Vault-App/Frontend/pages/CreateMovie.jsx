import React from "react";

function CreateMovie() {
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    fetch("http://localhost:3000/create-movie", {
      method: "POST",
      body: formData,
    })
      .then(() => alert("Movie created."))
      .catch(() => alert("Could not create movie."));
  }

  return (
    <section className="page-shell">
      <h1>Create Movie</h1>
      <form onSubmit={handleSubmit} className="page-form">
        <input className="text-field" type="text" name="title" placeholder="Enter movie title" required />
        <input className="text-field" type="file" name="poster" accept="image/*" required />
        <input className="text-field" type="text" name="genre" placeholder="Genre" required />
        <input className="text-field" type="text" name="rating" placeholder="Rating or comment" required />
        <input className="text-field" type="text" name="mixOf" placeholder="Mixture of movies" required />
        <button className="form-button" type="submit">Create</button>
      </form>
    </section>
  );
}

export default CreateMovie;
