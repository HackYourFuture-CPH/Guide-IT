import React from 'react';
import PropTypes from 'prop-types';
import './Pagination.styles.css';

// Floor and setFloor states will be passed to us as props from the parent container
function Pagination({ floor, handleClickPagination }) {
  // Floor array is an array that doesn't change or mutate and it will always has the same values, the number of floors.
  const floorArray = [0, 1, 2, 3, 4, 5];

  return (
    <div className="pagination-box">
      <div className="pagination-numbers">
        {/* we loop through the items (floors) and for each one we check if it's the floor that we are in, ad if it is we give
          it a className of the chosen floor and using css to give it a border and if it is not we give it a className of
         unchosen-floor and there will be no border to it. */}
        {floorArray.map((item) => {
          return item === floor ? (
            <button
              type="button"
              key={item}
              className="chosen-floor"
              onClick={() => handleClickPagination(item)}
            >
              {item}
            </button>
          ) : (
            <button
              type="button"
              key={item}
              className="unchosen-floor"
              onClick={() => handleClickPagination(item)}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Pagination;

Pagination.propTypes = {
  floor: PropTypes.number.isRequired,
  handleClickPagination: PropTypes.func.isRequired,
};
