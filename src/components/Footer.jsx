import React from "react";
import GHIcon from "../assets/github.svg";
import LIIcon from "../assets/linkedin.svg";
import GMIcon from "../assets/gmail.svg";

export default function Footer() {
  return (
    <footer>
      <p>
        ©2023 <a href="https://corrie-stroup.web.app">Corrie Stroup</a>
      </p>
      <br />
      <p>Feel free to reach out!</p>
      <div>
        <a href="https://github.com/Cililocwee">
          <img className="connect-icon" src={GHIcon} alt="github profile" />
        </a>
        <a href="https://www.linkedin.com/in/corriestroup/">
          <img className="connect-icon" src={LIIcon} alt="linkedin profile" />
        </a>
        <a href="mailto:corrie.stroup@gmail.com">
          <img
            className="connect-icon"
            src={GMIcon}
            alt="email: corrie.stroup@gmail.com"
          />
        </a>
      </div>
    </footer>
  );
}
