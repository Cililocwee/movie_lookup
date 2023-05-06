import React, { useEffect, useState } from "react";
import RemoveMovieButton from "./RemoveMovieButton";

export default function ShowWatchListButton() {
  const [currentWatchList, setCurrentWatchList] = useState([]);

  function handleClick() {
    setCurrentWatchList(
      JSON.parse(localStorage.getItem("MovieHoundWatchList"))
    );
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
            <div id="watch-list-modal-buttons">
              <button id="watch-list-modal-close">Close</button>
              <button id="watch-list-clear" onClick={handleRemoveAll}>
                Clear List
              </button>
            </div>

            {currentWatchList?.length > 0 ? (
              currentWatchList.map((item, k) => (
                <div className="watch-list-mini-card" key={k}>
                  <RemoveMovieButton
                    title={item[0]}
                    year={item[1]}
                    overview={item[2]}
                    update={removeFromWatchList}
                  />
                  <div>
                    <p>
                      {item[0]} ({item[1]})
                    </p>
                  </div>
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
