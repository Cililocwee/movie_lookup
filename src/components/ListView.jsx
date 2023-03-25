import React, { useState } from "react";
import TableRow from "./TableRow";

export default function ListView({ items }) {
  const [data, setData] = useState(items);
  function compareBy(key) {
    return function (a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  }

  function sortBy(key) {
    let arrayCopy = [...items];
    arrayCopy.sort(compareBy(key));
    setData(arrayCopy);
  }

  return (
    <div className="table">
      <div className="header">
        <div onClick={() => sortBy("title")}>Title</div>
        <div onClick={() => sortBy("release_date")}>Released</div>
        <div onClick={() => sortBy("overview")}>Description</div>
      </div>
      <div className="body">
        {data.map((movie, k) => (
          <TableRow
            key={k}
            title={movie.title}
            image_url={movie.poster_path}
            trailer={"https://www.youtube.com/"}
            year={movie.release_date.split("-")[0]}
          />
        ))}
      </div>
    </div>
  );
}
