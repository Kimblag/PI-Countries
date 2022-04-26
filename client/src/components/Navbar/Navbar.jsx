import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getCountriesByName } from "../../redux/actions/index.js";

import "./Navbar.css";

const Navbar = ({setCurrentPage}) => {
  const [showLinks, setShowLinks] = useState(false);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      dispatch(getCountriesByName(input));
      setInput("");
      setCurrentPage(1);
    } else {
      alert("Please enter a country name");
    }
  };


  return (
    <div className="Navbar">
      <div className="leftSide">
        <Link to="/home" style={{ textDecoration: "none" }}>
          <h1>Countries App</h1>
        </Link>

        <div className="links" id={showLinks ? "hidden" : ""}>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <span>Home</span>
          </Link>

          <Link
            to="/activity/create-activity"
            style={{ textDecoration: "none" }}
          >
            <span>Add Activity</span>
          </Link>
        </div>

        <button
          onClick={() => setShowLinks(!showLinks)}
          className="btnMedia"
        ></button>
      </div>

      {!location.pathname.match("/home") ? null : (
        <div className="rightSide">
          <div className="search-box">
            <form onSubmit={(e) => handleSubmit(e)}>
              <input
                className="InputSearch"
                type="text"
                value={input}
                placeholder="Search country..."
                onChange={(e) => handleChange(e)}
              />
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
