import React from "react";
import AddToWatchButton from "./AddToWatchButton";

export default function TableRow({ title, year, overview, image_url }) {
  const trailerString = `https://www.youtube.com/results?search_query=${title}+trailer+${year}`;
  const imageString = `https://image.tmdb.org/t/p/w600_and_h900_bestv2${image_url}`;
  return (
    <div className="row">
      <div>
        <p>{title}</p>
      </div>
      <div>
        <p>{year}</p>
      </div>
      <div>
        <a
          className="trailer-link"
          href={trailerString}
          target="_blank"
          rel="noopener noreferrer"
        >
          Trailer 🔗
        </a>
        <AddToWatchButton
          movieBundle={[title, year, overview, imageString, trailerString]}
        />
      </div>
    </div>
  );
}
