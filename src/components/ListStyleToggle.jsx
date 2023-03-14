import React from "react";

export default function ListStyleToggle({ listStyle }) {
  function handleChange(e) {
    console.log(e.target.checked);
    listStyle();
  }

  return (
    <div className="custom-checkbox">
      <input
        id="status"
        type="checkbox"
        name="status"
        onChange={handleChange}
      />
      <label htmlFor="status">
        <div
          className="status-switch"
          data-unchecked="Posters"
          data-checked="List"
        ></div>
      </label>
    </div>
  );
}
