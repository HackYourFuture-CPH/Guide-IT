import React, { useState, useRef, useEffect } from 'react';
import './Pagination.styles.css';

function Pagination({ num }) {
  const [floor, setFloor] = useState(num);
  const level0 = useRef();
  const level1 = useRef();
  const level2 = useRef();
  const level3 = useRef();
  const level4 = useRef();
  const level5 = useRef();

  const arr = [level0, level1, level2, level3, level4, level5];

  const handleClick = (number) => {
    arr.forEach((item) => {
      if (item.current.style.border) {
        /* eslint no-param-reassign: "error" */
        item.current.style.border = 'none';
      }
    });
    setFloor(number);
  };

  useEffect(() => {
    if (floor !== undefined) {
      arr[floor].current.style.border = '1px solid #F0F0F0';
    }
  }, [floor, arr]);

  return (
    <div className="pagination-box">
      <div className="pagination-numbers">
        <button type="button" ref={level0} onClick={() => handleClick(0)}>
          0
        </button>
        <button type="button" ref={level1} onClick={() => handleClick(1)}>
          1
        </button>
        <button type="button" ref={level2} onClick={() => handleClick(2)}>
          2
        </button>
        <button type="button" ref={level3} onClick={() => handleClick(3)}>
          3
        </button>
        <button type="button" ref={level4} onClick={() => handleClick(4)}>
          4
        </button>
        <button type="button" ref={level5} onClick={() => handleClick(5)}>
          5
        </button>
      </div>
    </div>
  );
}

export default Pagination;
