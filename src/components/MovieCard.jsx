import React from "react";
import AddToWatchButton from "./AddToWatchButton";

export default function MovieCard({
  title,
  year,
  description,
  image_url,
  stars,
}) {
  const imageString =
    `https://image.tmdb.org/t/p/w600_and_h900_bestv2` + image_url;

  const trailerString = `https://www.youtube.com/results?search_query=${title}+trailer+${year}`;

  function getStarRating(rating) {
    const fullStars = Math.floor(Math.min(Math.max(rating, 0), 10) / 2);
    const emptyStars = 5 - fullStars;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push("★");
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push("☆");
    }

    return stars.join("");
  }

  return (
    <div className="movie-card">
      <img className="card-img-top" src={imageString} alt="movie poster" />
      <div className="card-body">
        <div className="card-body-top">
          <h5 className="card-title">{title}</h5>
          <small className="card-year">{year}</small>
          <small className="card-rating">{getStarRating(stars)}</small>
        </div>
        <div className="card-body-bottom">
          <p className="card-description">{description}</p>
          <div>
            <a
              className="trailer-link"
              href={trailerString}
              target="_blank"
              rel="noopener noreferrer"
            >
              Trailer 🔗
            </a>
            <br />
            <AddToWatchButton
              movieBundle={[
                title,
                year,
                description,
                imageString,
                trailerString,
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
