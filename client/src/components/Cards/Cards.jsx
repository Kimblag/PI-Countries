import React from "react";
import Card from "../Card/Card";

import "./Cards.css";

const Cards = ({ countries, loading }) => {
  if (loading) {
    return (
      <div className="spinner">
        <div className="loader l1"></div>
        <div className="loader l2"></div>
      </div>
    );
  }
  return (
    <div className="Cards__Container_grid">
      {countries.length > 0 &&
        countries.map((country) => (
          <Card
            key={country.id}
            id={country.id}
            name={country.name}
            flag={country.flag}
            continent={country.continent}
          />
        ))}
    </div>
  );
};

export default Cards;
