import React from "react";

export default function RemoveMovieButton({ title, update }) {
  function handleClick() {
    let confirmation = confirm(`Remove '${title}' from your Watch List?`);

    if (confirmation) {
      let parsedList = JSON.parse(localStorage.getItem("MovieHoundWatchList"));
      let filteredList = parsedList.filter((movie) => {
        if (movie[0] != title) {
          return movie;
        }
      });
      localStorage.setItem("MovieHoundWatchList", JSON.stringify(filteredList));
      update(filteredList);
    }
  }

  return (
    <button class={"remove-from-list-button"} onClick={handleClick}>
      <p>×</p>
    </button>
  );
}
