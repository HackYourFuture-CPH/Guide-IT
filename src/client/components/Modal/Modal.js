import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './Modal.css';

export default function Modal({
  id, // id of element that will be hvoer to show Modal
  isModalOpen,
  width, // width of modal in number (1-100) percent
  backgroundColor,
  fontFamily,
  closeModal,
  children,
}) {
  useEffect(() => {
    // get coordinates of element that has to hvoer over.
    const elementToHover = document.getElementById(id);
    const minY = elementToHover.offsetTop;
    const maxY = elementToHover.offsetHeight + elementToHover.offsetTop;
    const minX = elementToHover.offsetLeft;
    const maxX = elementToHover.offsetLeft + elementToHover.offsetWidth;

    function tryToCloseModal(event) {
      const x = event.clientX; // Get the horizontal coordinate of mouse
      const y = event.clientY; // Get the vertical coordinate of mouse
      // if mouse left the element that has to hvoer over then remove the Modal.
      if (x < minX || x > maxX || minY > y || maxY < y) closeModal();
    }
    document.addEventListener('mousemove', tryToCloseModal);

    return () => {
      document.removeEventListener('mousemove', tryToCloseModal);
    };
  }, []);
  const customStyles = {
    width: `${width}%`,
    backgroundColor: `${backgroundColor}`,
    fontFamily: `${fontFamily}`,
  };

  return ReactDOM.createPortal(
    <>
      <div
        className={`modal ${isModalOpen ? 'show' : ''}`}
        onClick={closeModal}
      >
        <div
          className="modal-content"
          style={customStyles}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </>,
    document.getElementById('root'),
  );
}

Modal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  width: PropTypes.number,
  backgroundColor: PropTypes.string,
  fontFamily: PropTypes.oneOf(['Roboto', 'Roboto Mono']),
  children: PropTypes.element,
};
Modal.defaultProps = {
  width: 17,
  backgroundColor: '#FBFF4A',
  fontFamily: 'Roboto',
};
