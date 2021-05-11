import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './Modal.styles.css';

export default function Modal({
  id, // id of element that will be hvoer to show Modal
  isModalOpen,
  width, // width of modal in number (1-100) percent
  backgroundColor,
  fontFamily,
  closeModal,
  children,
}) {
  function closeModalonMouseLeave(event) {
    // get coordinates of element that has to hvoer over.
    const elementToHover = document.getElementById(id);
    const minY = elementToHover.offsetTop;
    const maxY = elementToHover.offsetHeight + elementToHover.offsetTop;
    const minX = elementToHover.offsetLeft;
    const maxX = elementToHover.offsetLeft + elementToHover.offsetWidth;

    const x = event.clientX; // Get the horizontal coordinate of mouse
    const y = event.clientY; // Get the vertical coordinate of mouse
    // if mouse left the element that has to hvoer over then remove the Modal.
    if (x < minX || x > maxX || minY > y || maxY < y) closeModal();
  }
  const customStyles = {
    width: `${width}%`,
    backgroundColor: `${backgroundColor}`,
    fontFamily: `${fontFamily}`,
  };

  return ReactDOM.createPortal(
    <>
      <div
        className={`modal ${isModalOpen ? 'show' : ''}`}
        onMouseMove={closeModalonMouseLeave}
      >
        <div className="modal-content" style={customStyles}>
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
