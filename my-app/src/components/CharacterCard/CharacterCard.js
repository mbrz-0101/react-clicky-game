import React from "react";
import "./CharacterCard.css";

const CharacterCard = props => (
  <div className="card" id={props.id}>
    <div className="img-container">
      <img alt="cat" src={props.image} onClick={() => props.onKittyClicked(props.id)} />
    </div>
  </div>
);

export default CharacterCard;
