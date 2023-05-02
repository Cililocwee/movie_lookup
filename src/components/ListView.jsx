import React, { useState } from "react";
import TableRow from "./TableRow";

export default function ListView({ items }) {
  const [data, setData] = useState(items);
  // TODO title and released need separate sort values
  // TODO when one is clicked, the other needs to be cleared
  // TODO Right now they just toggle together (ew)
  const [sortValue, setSortValue] = useState(true);

  const ascending = <span>&#x25B4;</span>;
  const descending = <span>&#x25BE;</span>;

  function compareBy(key, sortOrder) {
    if (sortOrder === true) {
      console.log("Ascending");
      return function (a, b) {
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
        return 0;
      };
    } else {
      console.log("Descending");
      return function (a, b) {
        if (a[key] < b[key]) return 1;
        if (a[key] > b[key]) return -1;
        return 0;
      };
    }
  }

  function sortBy(key, sortOrder) {
    let arrayCopy = [...items];
    arrayCopy.sort(compareBy(key, sortOrder));
    setData(arrayCopy);
  }

  return (
    <div className="table">
      <div className="header">
        <div
          onClick={() => {
            setSortValue(!sortValue);
            sortBy("title", sortValue);
          }}
        >
          Title {sortValue ? ascending : descending}
        </div>
        <div
          onClick={() => {
            setSortValue(!sortValue);
            sortBy("release_date", sortValue);
          }}
        >
          Released {sortValue ? ascending : descending}
        </div>
        <div>Description</div>
      </div>
      <div className="body">
        {data.map((movie, k) => (
          <TableRow
            key={k}
            title={movie.title}
            image_url={movie.poster_path}
            overview={movie.overview}
            year={movie.release_date.split("-")[0]}
          />
        ))}
      </div>
    </div>
  );
}
