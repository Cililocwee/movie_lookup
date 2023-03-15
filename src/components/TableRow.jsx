import React from "react";

export default function TableRow({ title, year, description }) {
  return (
    <div className="row">
      <div>{title}</div>
      <div>{year}</div>
      <div>[See more]</div>
    </div>
  );
}
