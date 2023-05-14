import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddToWatchButton({ movieBundle }) {
  const notify = () =>
    toast.success(
      `${movieBundle[0]} (${movieBundle[1]}) added to Watch List!`,
      {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      }
    );

  function saveToList() {
    checkLocalStorage();
    let tempList = JSON.parse(localStorage.getItem("MovieHoundWatchList"));
    tempList.push(movieBundle);
    localStorage.setItem("MovieHoundWatchList", JSON.stringify(tempList));
    notify();
  }

  function checkLocalStorage() {
    if (!localStorage.getItem("MovieHoundWatchList")) {
      localStorage.setItem("MovieHoundWatchList", [JSON.stringify([])]);
    }
  }
  return (
    <div>
      <button
        className="add-to-watchlist-button animated-button"
        onClick={() => saveToList()}
      ></button>
    </div>
  );
}
