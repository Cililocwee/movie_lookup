import React from "react";

export default function MovieCard({ title, year, description, image_url }) {
  const poster_path =
    `https://image.tmdb.org/t/p/w600_and_h900_bestv2` + image_url;

  return (
    <div className="movie-card">
      <img className="card-img-top" src={poster_path} alt="movie poster" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">
          <small className="text-muted">{year}</small>
        </p>
      </div>
    </div>
  );
}
