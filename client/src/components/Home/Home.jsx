import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCountries,
  filterByName,
  filterByPopulation,
  filterByContinent,
  filterBySeason,
  filterByActivity,
  filterByDifficulty,
} from "../../redux/actions";
import {
  season,
  continents,
  difficulty,
  countryName,
  populationSort,
} from "../../helpers/Mock_activities";

import Cards from "../Cards/Cards";
import Navbar from "../Navbar/Navbar";
import Pagination from "../Pagination/Pagination";

import "./Home.css";
import { Filter } from "../Filter/Filter";

const Home = () => {
  const dispatch = useDispatch();
  const filteredCountries = useSelector((state) => state.filteredCountries);

  const countries = useSelector((state) => state.countries);
  const activities = countries.map((country) => country.Activities)
  const activitiesNames = Array.from(new Set(activities.map(act => act.length > 0 ? act[0].name : "")));
  // const activitiesNames = [];
  // activities
  //   .map((activity) => (activity.length > 0 ? activity[0].name : null))
  //   .forEach((name) =>
  //     !activitiesNames.includes(name) && name !== null
  //       ? activitiesNames.push(name)
  //       : null
  //   );


  const [loading, setLoading] = useState(false);
  const [showFilters, setShowFilters] = useState(true);

  useEffect(() => {
    setLoading(true);
    dispatch(getAllCountries());
    setLoading(false);
  }, [dispatch]);

  //* Pagination States
  const [currentPage, setCurrentPage] = useState(1);

  const countriesPerPage = currentPage === 1 ? 9 : 10;
  const indexOfLastCountry = currentPage * countriesPerPage; // 1 * 9 -> 9 countries that i've seen
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = filteredCountries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //* Handlers
  const handleFilterByContinent = (event) => {
    dispatch(filterByContinent(event.target.value));
    setCurrentPage(1);
  };

  // eslint-disable-next-line
  const [sort, setSort] = useState("");

  const handleFilterByName = (event) => {
    if (filteredCountries.length > 0) {
      dispatch(filterByName(event.target.value));
      setSort(event.target.value);
      setCurrentPage(1);
    }
  };

  // eslint-disable-next-line
  const [population, setPopulation] = useState("");
  const handleFilterByPopulation = (event) => {
    dispatch(filterByPopulation(event.target.value));
    setPopulation(event.target.value);
    setCurrentPage(1);
  };

  const handleFilterBySeason = (event) => {
    dispatch(filterBySeason(event.target.value));
    setCurrentPage(1);
  };

  // eslint-disable-next-line
  const [difficultyFilter, setDifficultyFilter] = useState("");
  const handleFilterByDifficulty = (event) => {
    dispatch(filterByDifficulty(event.target.value));
    setDifficultyFilter(event.target.value);
    setCurrentPage(1);
  };

  const handleFilterByActivity = (event) => {
    dispatch(filterByActivity(event.target.value));
    setCurrentPage(1);
  };

  //* Reset filters
  const resetFilters = () => {
    dispatch(getAllCountries());
    setCurrentPage(1);
    document.getElementById("byName").value = "all";
    document.getElementById("byContinent").value = "all";
    document.getElementById("bySeason").value = "all";
    document.getElementById("byActivity").value = "all";
    document.getElementById("byPopulation").value = "all";
    document.getElementById("byDifficulty").value = "all";
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* filters */}
      <section className="Filter__Container">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="Filter__button"
        >
          <span>Filters</span>
          <svg viewBox="0 0 13 10" height="10px" width="15px">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </button>

        <div className="Show_Filter" id={showFilters ? "hidden" : ""}>
          {/* BY NAME */}
          <span className="filters">
            <Filter
              className="Home__select"
              id="byName"
              name="sortName"
              defaultValue={"all"}
              onChange={(e) => handleFilterByName(e)}
              optionTitle="Sort by name"
              mockData={countryName}
            />
          </span>

          {/* BY POPULATION */}
          <span className="filters">
            <Filter
              className="Home__select"
              id="byPopulation"
              name="sortPopulation"
              defaultValue={"all"}
              onChange={(e) => handleFilterByPopulation(e)}
              optionTitle="Sort by Population"
              mockData={populationSort}
            />
          </span>

          {/* BY CONTINENT */}
          <span className="filters">
            <Filter
              className="Home__select"
              id="byContinent"
              name="sortContinent"
              defaultValue={"all"}
              onChange={(e) => handleFilterByContinent(e)}
              optionTitle="Sort by Continent"
              mockData={continents}
            />
          </span>

          {/* BY SEASON */}
          <span className="filters">
            <Filter
              className="Home__select"
              id="bySeason"
              name="sortSeason"
              defaultValue={"all"}
              onChange={(e) => handleFilterBySeason(e)}
              optionTitle="Sort Activities by Season"
              mockData={season}
            />
          </span>

          {/* by difficulty */}
          <span className="filters">
            <Filter
              className="Home__select"
              id="byDifficulty"
              name="sortDifficulty"
              defaultValue={"all"}
              onChange={(e) => handleFilterByDifficulty(e)}
              optionTitle="Sort Activities by difficulty"
              mockData={difficulty}
            />
          </span>

          {/* BY ACTIVITY */}
          <span className="filters">
            <select
              className="Home__select"
              id="byActivity"
              name="sortActivity"
              defaultValue={"all"}
              onChange={(e) => handleFilterByActivity(e)}
            >
              <option value="all" disabled="disabled">
                Sort by Activity
              </option>
              {activitiesNames.map((activity) =>
                activity.length > 0 ? (
                  <option value={activity} key={activity}>
                    {activity}
                  </option>
                ) : null
              )}
            </select>
          </span>

          <button className="Filter__reset" type="reset" onClick={resetFilters}>
            All Countries
          </button>
        </div>
      </section>

      {/* Cards Container */}
      {filteredCountries.length > 0 ? (
        <Cards countries={currentCountries} loading={loading} />
      ) : (
        <Cards loading={true} />
      )}

      {/* Pagination */}
      <Pagination
        countriesPerPage={countriesPerPage}
        totalCountries={filteredCountries.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Home;
