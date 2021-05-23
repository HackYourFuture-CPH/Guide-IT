import React, { useState } from 'react';
import robot from '../../assets/images/robot_logo.png';
import Modal from '../Modal/Modal.component';
import upArrow from '../../assets/images/up_arrow.png';
import vectorMan from '../../assets/images/elevator_man.png';
import PropTypes from 'prop-types';
import './RoboModal.styles.css';

const modalDetails = [
  {
    rcontent: 'HOVER OVER FOR MORE TIPS',
    modalcontent:
      '<h6>When to use it</h6><ul><li>At job fairs, career expos or job interviews</li><li>To present yourself at networking events and online as your LinkedIn summary!</li></ul>',
  },
  {
    rcontent: 'HOVER OVER FOR MORE TIPS',
    modalcontent:
      '<p>Mention your goals.Remember to say what you`re looking for. For instance, you might say: "a role in designing" or "an opportunity to apply my sales skills to a new market".</p><p>Have your CV ready.A copy of your resume will demonstrate your enthusiasm and preparedness.</p>',
  },
  {
    rcontent: 'HOVER OVER FOR MORE TIPS',
    modalcontent:
      '<p>Practice giving your speech to a friend or recording it. This will help you know whether you`re keeping within the time limit and giving a coherent message.</p>',
  },
  {
    rcontent: 'HOVER OVER FOR MORE TIPS',
    modalcontent:
      '<p>Modulate your voice to keep listeners interested, keep your facial expression friendly, and smile.</p>',
  },
  {
    rcontent: 'HOVER OVER FOR MORE EXAMPLES',
    modalcontent:
      "<p>'I'm an R& D Scientist who helps companies use their existing patents and technologies to develop new skincare products.Right now at Johnson & Johnson I'm finishing a successful project for an antibacterial cream and I'm looking for my next challenge.Do you know any companies that are involved in discovering and developing new skincare products ? '</p>",
  },
  {
    rcontent: '<a href="/next-steps">CLICK FOR NEXT STEPS</a>',
  },
];

function RoboModal({ floor, onClick }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  function openModal() {
    setIsModalOpen(true);
  }
  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      {floor === 0 && (
        <div className="elevator-ride-text">
          <p>Elevator ride starts here</p>
          <p>
            Let`s go up (
            <img
              src={upArrow}
              alt="up-arrow"
              className="up-arrow"
              onClick={onClick}
              aria-hidden="true"
            />
            )
            <img src={vectorMan} className="vector-man" alt="vector-man" />
          </p>
        </div>
      )}
      <div
        id="hover-to-show-modal"
        onMouseEnter={openModal}
        className="robot-circle-container"
      >
        <img src={robot} alt="Robot" />
        {/* eslint-disable-next-line  */}
        <p dangerouslySetInnerHTML={{ __html: modalDetails[floor].rcontent }} />
      </div>
      {floor !== 5 && (
        <Modal
          id="hover-to-show-modal"
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          backgroundColor="#FBFF4A"
        >
          {/* eslint-disable-next-line  */}
          <div
            dangerouslySetInnerHTML={{
              __html: modalDetails[floor].modalcontent,
            }}
            className="modal-box-contents"
          />
        </Modal>
      )}
    </>
  );
}
export default RoboModal;
RoboModal.propTypes = {
  floor: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
