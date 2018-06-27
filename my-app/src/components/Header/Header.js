import React from "react";
import "./Header.css";

const Header = props => (
  <div className="header row align-middle">
    <div className="col-sm-4 text-center">
      <h1>Clicky Kitty Game!</h1>
    </div>
    <div className="col-sm-4 text-center">
      <h1>Click a kitty to begin!</h1>
    </div>
    <div className="score-container col-sm-4 text-center">
      <h2>Score: {props.currentScore} | Highest Score: {props.highestScore}</h2>
    </div>
  </div>
);

export default Header;