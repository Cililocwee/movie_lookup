import React, { useState } from "react";
import MovieCard from "./MovieCard";
const api_key = import.meta.env.VITE_API_KEY;
const movie_id = "550"; // The movie ID for "Fight Club"
const url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${api_key}`;

export default function MovieFinder() {
  const [movie, setMovie] = useState("");
  const [movieDisplay, setMovieDisplay] = useState([]);

  async function example(target) {
    await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${target}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieDisplay(data.results);
        console.log(data);
      })
      .then(() => console.log(movieDisplay))
      .catch((error) => console.error(error));
  }

  function handleChange(e) {
    setMovie(e.target.value);
  }
  return (
    <div className="movie-wrapper">
      <input
        type="text"
        name="movie"
        id="movie"
        value={movie}
        onChange={handleChange}
      />
      <button onClick={() => example(movie)}>Click</button>
      {movieDisplay.map((movie) => (
        <MovieCard
          title={movie.title}
          image_url={movie.poster_path}
          description={movie.overview}
        />
      ))}
    </div>
  );
}
