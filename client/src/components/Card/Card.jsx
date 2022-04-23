import React from "react";
import { Link } from "react-router-dom";

import "./Card.css";

const Card = ({ id, name, continent, flag }) => {
  return (
    <div data-testid="card-1" className="Card__Container">
      <div className="card">
        <img className="flag" src={flag} alt="flag" />
        <h4>{name}</h4>
        <p>{continent}</p>
        <Link to={`/country/${id}`}>
          <button className="Card__button">Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
