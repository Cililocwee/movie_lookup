import React, { useState } from "react";
import SunSVG from "../assets/sun.svg";
import MoonSVG from "../assets/moon.svg";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  function handleToggle() {
    setDarkMode(!darkMode);
  }

  return (
    <div onClick={handleToggle} id="theme-toggle">
      {darkMode ? <img src={MoonSVG} alt="" /> : <img src={SunSVG} alt="" />}
    </div>
  );
}
