import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
  deleteActivity,
  emptyCountryDetail,
  getCountryDetails,
} from "../../redux/actions";

import Navbar from "../Navbar/Navbar";

import "./CountryDetail.css";

const CountryDetail = ({ match }) => {
  const id = match.params.id;
  const dispatch = useDispatch();
  const country = useSelector((state) => state.countryDetails);

  const history = useHistory();

  useEffect(() => {
    dispatch(getCountryDetails(id));
    return function cleanUp() {
      dispatch(emptyCountryDetail());
    };
  }, [dispatch, id]);

  const handleDelete = (activity) => {
    if (window.confirm("Are you sure you want to delete this activity?")) {
      dispatch(deleteActivity({ activity, id }));
    }
  };

  return (
    <div datatest-id="detail">
      <Navbar />
      <main className="main">
        <div className="CountryDetail_container">
          <div className="Container_row">
            <div className="Card">
              <h1 className="Card_title">{country.name}</h1>
              <img src={country.flag} alt="flag" className="Country_flag" />
              <div className="Country_details">
                <p>
                  <strong>Country ID:</strong> {country.id}{" "}
                </p>
                <p>
                  {" "}
                  <strong>Capital:</strong> {country.capital}{" "}
                </p>
                <p>
                  <strong>Continent:</strong> {country.continent}{" "}
                </p>
                <p>
                  <strong>Subregion:</strong> {country.subregion}{" "}
                </p>
                <p>
                  <strong>Area: </strong>{" "}
                  {new Intl.NumberFormat().format(country.area)} million Km
                  <sup>2</sup>{" "}
                </p>
                <p>
                  <strong>Population: </strong>{" "}
                  {new Intl.NumberFormat().format(country.population)} million{" "}
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "inherit",
                }}
              >
                <ul className="Country_activities">
                  <h2 style={{ marginTop: "10px" }}>Activities</h2>
                  {!country.Activities
                    ? null
                    : country.Activities.map((activity) => (
                        <li
                          key={activity.id}
                          style={{ borderTop: "1px solid gray" }}
                        >
                          <h3>{activity.name}</h3>
                          <p>
                            <i>Season: </i>
                            {activity.season}
                          </p>
                          <p>
                            <i>Difficulty: </i> {activity.difficulty}
                          </p>
                          <p>
                            <i>Duration: </i> {activity.duration}
                          </p>
                          <button className="btn-delete" onClick={() => handleDelete(activity.id)}>
                            Delete
                          </button>{" "}
                          <button
                          className="btn-edit"
                            onClick={() =>
                              history.push(
                                `/activity/edit-activity/${activity.id}`
                              )
                            }
                          >
                            Edit
                          </button>
                        </li>
                      ))}
                </ul>
              </div>
              <Link to="/home" style={{ textDecoration: "none" }}>
                <button className="Back_Button">
                  <svg
                    height="16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    viewBox="0 0 1024 1024"
                  >
                    <path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path>
                  </svg>
                  <span>Back</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CountryDetail;
