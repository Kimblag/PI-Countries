import React from "react";
import { useSelector } from "react-redux";

import "./SelectedCountries.css";

const SelectedCountries = ({ countriesSelect, handleClick }) => {
  const countries = useSelector((state) => state.countries);
  return (
    <div className="SelectedFilter">
      {countriesSelect.countries.length > 0 &&
        countries
          .filter((country) => countriesSelect.countries.includes(country.id))
          .map((country) => {
            return (
              <button
                className="countries_button"
                key={country.id}
                value={country.id}
                onClick={(e) => handleClick(e)}
              >
                {country.name} - x
              </button>
            );
          })}
    </div>
  );
};

export default SelectedCountries;
