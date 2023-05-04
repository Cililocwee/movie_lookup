import React, { useEffect, useState } from "react";
import RemoveMovieButton from "./RemoveMovieButton";

export default function ShowWatchListButton() {
  const [currentWatchList, setCurrentWatchList] = useState([]);

  function handleClick() {
    setCurrentWatchList(
      JSON.parse(localStorage.getItem("MovieHoundWatchList"))
    );
    console.log(JSON.parse(localStorage.getItem("MovieHoundWatchList")));
  }

  function removeFromWatchList(updatedList) {
    setCurrentWatchList(updatedList);
  }

  useEffect(() => {
    const openButton = document.querySelector("#watch-list-button");
    const closeButton = document.querySelector("#watch-list-modal-close");
    const modal = document.querySelector("#watch-list-modal");

    setCurrentWatchList(
      JSON.parse(localStorage.getItem("MovieHoundWatchList"))
    );

    openButton.addEventListener("click", () => {
      // Dirty, needs better implementation, double opening because of strictmode
      modal.removeAttribute("open");
      modal.showModal();
    });

    closeButton.addEventListener("click", () => {
      modal.close();
    });
  }, []);

  return (
    <div>
      <dialog id="watch-list-modal">
        {currentWatchList?.map((item) => (
          <div>
            <RemoveMovieButton title={item[0]} update={removeFromWatchList} />{" "}
            {item[0]}
          </div>
        ))}
        <button id="watch-list-modal-close">Close</button>
      </dialog>
      <button id="watch-list-button" onClick={handleClick}>
        Watch List
      </button>
    </div>
  );
}
