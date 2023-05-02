import React from "react";
import AddToWatchButton from "./AddToWatchButton";

export default function TableRow({ currentList, title, year, overview }) {
  const trailerString = `https://www.youtube.com/results?search_query=${title}+trailer+${year}`;

  return (
    <div className="row">
      <div>{title}</div>
      <div>{year}</div>
      <div>
        <a
          className="trailer-link"
          href={trailerString}
          target="_blank"
          rel="noopener noreferrer"
        >
          Trailer 🔗
        </a>
        <AddToWatchButton movieBundle={[title, year, overview]} />
      </div>
    </div>
  );
}
