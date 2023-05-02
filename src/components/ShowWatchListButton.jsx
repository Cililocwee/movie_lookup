import React, { useState } from "react";

export default function ShowWatchListButton() {
  function handleClick() {
    console.log(JSON.parse(localStorage.getItem("MovieHoundWatchList")));
  }
  return (
    <button id="watch-list-button" onClick={handleClick}>
      Watch List
    </button>
  );
}
