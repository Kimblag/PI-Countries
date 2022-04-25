import React from "react";

import "./Pagination.css";

const Pagination = ({
  countriesPerPage,
  totalCountries,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination__container">
    <div className="pagination__buttons">

      {currentPage !== 1 ? (
        <button className="page-btn" onClick={() => paginate(currentPage - 1)}>Prev</button>
      ) : null}
      <p className="pagination__numberPage">{currentPage}</p>
      {currentPage !== pageNumbers.length ? (
        <button className="page-btn" onClick={() => paginate(currentPage + 1)}>Next</button>
      ) : null}
    </div>

      {/* {pageNumbers && currentPage === 1
        ? pageNumbers
            .map((number) => {
              return (
                <button
                  className="page-btn"
                  key={number}
                  onClick={() => paginate(number)}
                >
                  {number}
                </button>
              );
            })
            .slice(0, 25)
        : pageNumbers.map((number) => {
            return (
              <button
                className="page-btn"
                key={number}
                onClick={() => paginate(number)}
              >
                {number}
              </button>
            );
          })} */}
    </div>
  );
};

export default Pagination;
