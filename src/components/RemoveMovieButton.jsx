import React from "react";

export default function RemoveMovieButton({ title, update, year, overview }) {
  // Removes movies based on DESCRIPTION to avoid removing all of the same name
  function handleClick() {
    let confirmation = confirm(
      `Remove '${title} (${year})' from your Watch List?`
    );

    if (confirmation) {
      let parsedList = JSON.parse(localStorage.getItem("MovieHoundWatchList"));
      let filteredList = parsedList.filter((movie) => {
        if (movie[2] != overview) {
          return movie;
        }
      });
      localStorage.setItem("MovieHoundWatchList", JSON.stringify(filteredList));
      update(filteredList);
    }
  }

  return (
    <button className={"remove-from-list-button"} onClick={handleClick}>
      <p>×</p>
    </button>
  );
}
