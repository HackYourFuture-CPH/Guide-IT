import React, { useState, useEffect } from 'react';
import './Pagination.styles.css';

function Pagination({ num }) {
  const [floor, setFloor] = useState(num);
  const [elements, setElements] = useState();

  const floorArray = [0, 1, 2, 3, 4, 5];

  const renderFloors = () => {
    return floorArray.map((item) => {
      return item === floor ? (
        <button
          type="button"
          key={item}
          className="chosen-floor"
          onClick={() => setFloor(item)}
        >
          {item}
        </button>
      ) : (
        <button
          type="button"
          key={item}
          className="unchosen-floor"
          onClick={() => setFloor(item)}
        >
          {item}
        </button>
      );
    });
  };

  useEffect(() => {
    setElements(renderFloors);
    // eslint-disable-next-line
  }, [floor]);

  return (
    <div className="pagination-box">
      <div className="pagination-numbers">{elements}</div>
    </div>
  );
}

export default Pagination;
