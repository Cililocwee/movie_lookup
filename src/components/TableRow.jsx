import React from "react";

export default function TableRow({ title, year, trailer }) {
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
      </div>
    </div>
  );
}
