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
    <div className="pagination__buttons">
      {pageNumbers && currentPage === 1
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
          })}
    </div>
  );
};

export default Pagination;
