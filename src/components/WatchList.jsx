import React, { useEffect, useState } from "react";

export default function WatchList() {
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

  function removeFromWatchList(title, year, overview) {
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
      setCurrentWatchList(filteredList);
    }
  }

  useEffect(() => {
    const openButton = document.querySelector("#watch-list-button");
    const closeButton = document.querySelector("#watch-list-modal-close");
    const modal = document.querySelector("#watch-list-modal");

    setCurrentWatchList(
      JSON.parse(localStorage.getItem("MovieHoundWatchList"))
    );

    openButton.addEventListener("click", () => {
      // TODO Dirty, needs better implementation, double opening because of strictmode
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
              <button id="watch-list-modal-close" className="animated-button">
                Close
              </button>
              <button
                id="watch-list-clear"
                className="animated-button"
                onClick={handleRemoveAll}
              >
                Clear List
              </button>
            </div>

            {currentWatchList?.length > 0 ? (
              currentWatchList.map((item, k) => (
                <div
                  className="watch-list-mini-card"
                  key={k}
                  onClick={() => removeFromWatchList(item[0], item[1], item[2])}
                >
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
      <button
        id="watch-list-button"
        className="animated-button"
        onClick={handleClick}
      >
        Watch List
      </button>
    </div>
  );
}
