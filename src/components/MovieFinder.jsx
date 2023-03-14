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
        console.log(data.results);
      })
      .catch((error) => console.error(error));
  }

  function handleChange(e) {
    setMovie(e.target.value);
  }
  return (
    <div className="movie-wrapper">
      <div className="query-container">
        <input
          type="text"
          name="movie"
          id="movie"
          value={movie}
          onChange={handleChange}
        />
        <button onClick={() => example(movie)}>Find my movie!</button>
      </div>
      <div className="card-container">
        {movieDisplay.map((movie, k) => (
          <MovieCard
            key={k}
            title={movie.title}
            image_url={movie.poster_path}
            description={movie.overview}
            year={movie.release_date.split("-")[0]}
          />
        ))}
      </div>
    </div>
  );
}
