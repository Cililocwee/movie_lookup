import React from "react";
import TableRow from "./TableRow";

export default function ListView({ items }) {
  return (
    <div className="table">
      <div className="header">
        <div>Title</div>
        <div>Released</div>
        <div>Description</div>
      </div>
      <div className="body">
        {items.map((movie, k) => (
          <TableRow
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
