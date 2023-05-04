import React, { useEffect, useState } from "react";
import RemoveMovieButton from "./RemoveMovieButton";

export default function ShowWatchListButton() {
  const [currentWatchList, setCurrentWatchList] = useState([]);

  function handleClick() {
    setCurrentWatchList(
      JSON.parse(localStorage.getItem("MovieHoundWatchList"))
    );
    // console.log(JSON.parse(localStorage.getItem("MovieHoundWatchList")));
  }

  function handleRemoveAll() {
    let result = confirm("Remove all movies from your list?");

    if (result) {
      localStorage.setItem("MovieHoundWatchList", JSON.stringify([]));
      setCurrentWatchList([]);
    }
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
        <div id="watch-list-background">
          <div id="watch-list-body">
            <button id="watch-list-modal-close">Close</button>
            <button id="watch-list-clear" onClick={handleRemoveAll}>
              Clear List
            </button>
            {currentWatchList.length > 0 ? (
              currentWatchList.map((item) => (
                <div className="watch-list-mini-card">
                  <RemoveMovieButton
                    title={item[0]}
                    update={removeFromWatchList}
                  />{" "}
                  <p>{item[0]}</p>
                </div>
              ))
            ) : (
              <p>
                <strong>There are no movies on your Watch List :(</strong>
              </p>
            )}
          </div>
        </div>
      </dialog>
      <button id="watch-list-button" onClick={handleClick}>
        Watch List
      </button>
    </div>
  );
}
