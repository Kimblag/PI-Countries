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
          <button
            className="page-btn"
            onClick={() => paginate(currentPage - 1)}
          >
            Prev
          </button>
        ) : null}

        <p className="pagination__numberPage" style={{ fontWeight: "600" }}>
          {currentPage}
        </p>

        {currentPage !== pageNumbers.length ? (
          <button
            className="page-btn"
            onClick={() => paginate(currentPage + 1)}
          >
            Next
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Pagination;
