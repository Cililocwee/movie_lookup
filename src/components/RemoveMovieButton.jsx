import React from "react";

export default function RemoveMovieButton({ title, update }) {
  function handleClick() {
    let parsedList = JSON.parse(localStorage.getItem("MovieHoundWatchList"));
    let filteredList = parsedList.filter((movie) => {
      if (movie[0] != title) {
        return movie;
      }
    });
    localStorage.setItem("MovieHoundWatchList", JSON.stringify(filteredList));
    update(filteredList);
  }

  return <button onClick={handleClick}>×</button>;
}
