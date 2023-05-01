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
        console.log(data.results);
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
        <div className="input-group">
          <input
            type="text"
            name="movie"
            id="movie"
            value={movie}
            onChange={handleChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                queryMovie(movie);
              }
            }}
          />
          <div className="nice-backdrop"></div>
        </div>

        <button onClick={() => queryMovie(movie)}>Fetch my movie!</button>
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
              stars={movie.vote_average}
            />
          ))
        ) : (
          <ListView items={movieDisplay} />
        )}
      </div>
    </div>
  );
}
