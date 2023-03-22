import React, { useEffect, useState } from "react";
import ListStyleToggle from "./ListStyleToggle";
import ListView from "./ListView";
import MovieCard from "./MovieCard";
const api_key = import.meta.env.VITE_API_KEY;
const movie_id = "550"; // The movie ID for "Fight Club"
const url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${api_key}`;

export default function MovieFinder() {
  const [movie, setMovie] = useState("");
  const [movieDisplay, setMovieDisplay] = useState([]);
  const [listStyle, setListStyle] = useState(true);

  async function queryMovie(target) {
    await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${target}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieDisplay(data.results);
        setListStyle(true);
        document.getElementById("status").checked = false;
      })
      .catch((error) => console.error(error));
  }

  function handleChange(e) {
    setMovie(e.target.value);
  }

  function toggleStyle() {
    setListStyle(!listStyle);
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
          onKeyDown={(e) => {
            console.log(e.key);
            if (e.key === "Enter") {
              queryMovie(movie);
            }
          }}
        />
        <button onClick={() => queryMovie(movie)}>Find my movie!</button>
        <ListStyleToggle listStyle={toggleStyle} />
      </div>
      <div className="card-container">
        {listStyle ? (
          movieDisplay.map((movie, k) => (
            <MovieCard
              key={k}
              title={movie.title}
              image_url={movie.poster_path}
              description={movie.overview}
              year={movie.release_date.split("-")[0]}
            />
          ))
        ) : (
          <ListView items={movieDisplay} />
        )}
      </div>
    </div>
  );
}
