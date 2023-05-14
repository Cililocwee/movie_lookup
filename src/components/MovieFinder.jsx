import React, { useEffect, useState } from "react";
import ListStyleToggle from "./ListStyleToggle";
import ListView from "./ListView";
import MovieCard from "./MovieCard";
import ShowWatchListButton from "./ShowWatchListButton";
const api_key = import.meta.env.VITE_API_KEY;
import Loading from "../assets/loading.svg";

export default function MovieFinder() {
  const [movie, setMovie] = useState("");
  const [movieDisplay, setMovieDisplay] = useState([]);
  const [listStyle, setListStyle] = useState(true);
  const [loading, setLoading] = useState(false);

  async function queryMovie(target) {
    setMovieDisplay([]);
    setLoading(true);

    await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${target}`
    )
      .then((response) => response.json())
      .then((data) => {
        let genreArr = [];
        data.results.forEach((movie) => {
          genreArr.push(movie.genre_ids);
          console.log(movie.genre_ids);
        });

        setMovieDisplay(data.results);
        setListStyle(true);
        document.getElementById("status").checked = false;
        setMovie("");
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    console.log("Intersect Observer");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
  }, [movieDisplay, listStyle]);

  function handleChange(e) {
    setMovie(e.target.value);
  }

  function toggleStyle() {
    setListStyle(!listStyle);
    setMovieDisplay(movieDisplay);
  }

  return (
    <div className="movie-wrapper">
      <ShowWatchListButton />
      <div className="query-container">
        <div className="input-group">
          <input
            placeholder="Search for a movie!"
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

        <button
          className="fetch-movie-button animated-button"
          onClick={() => queryMovie(movie)}
        >
          Fetch my movie!
        </button>
        <ListStyleToggle listStyle={toggleStyle} />
      </div>
      <div className="card-container">
        {loading && <img src={Loading} alt="" />}

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
