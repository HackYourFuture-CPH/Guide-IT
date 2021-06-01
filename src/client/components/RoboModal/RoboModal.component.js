import React, { useState } from 'react';
import robot from '../../assets/images/robot_logo.png';
import Modal from '../Modal/Modal.component';
import vectorMan from '../../assets/images/elevator_man.png';
import PropTypes from 'prop-types';
import './RoboModal.styles.css';

const RoboContent = ({ floor }) => {
  if (floor === 5) {
    return (
      <p>
        <a href="/next-steps">CLICK FOR NEXT STEPS</a>
      </p>
    );
  }
  if (floor === 4) {
    return <p>HOVER OVER FOR MORE EXAMPLES</p>;
  }
  return <p>HOVER OVER FOR MORE TIPS</p>;
};

const RoboModalContent = ({ floor }) => {
  if (floor === 0) {
    return (
      <>
        <h6>When to use it</h6>
        <ul>
          <li>At job fairs, career expos or job interviews</li>
          <li>
            To present yourself at networking events and online as your LinkedIn
            summary!
          </li>
        </ul>
      </>
    );
  }
  if (floor === 1) {
    return (
      <>
        <p>
          Mention your goals.Remember to say what you`re looking for. For
          instance, you might say: &quot;a role in designing&quot; or &quot;an
          opportunity to apply my sales skills to a new market&quot;.
        </p>
        <p>
          Have your CV ready.A copy of your resume will demonstrate your
          enthusiasm and preparedness.
        </p>
      </>
    );
  }
  if (floor === 2) {
    return (
      <>
        <p>
          Practice giving your speech to a friend or recording it. This will
          help you know whether you&apos;re keeping within the time limit and
          giving a coherent message.
        </p>
      </>
    );
  }
  if (floor === 3) {
    return (
      <>
        <p>
          Modulate your voice to keep listeners interested, keep your facial
          expression friendly, and smile.
        </p>
      </>
    );
  }
  if (floor === 4) {
    return (
      <>
        <p>
          &ldquo;I&lsquo;m an R&D Scientist who helps companies use their
          existing patents and technologies to develop new skincare
          products.Right now at Johnson & Johnson I&lsquo;m finishing a
          successful project for an antibacterial cream and I&lsquo;m looking
          for my next challenge.Do you know any companies that are involved in
          discovering and developing new skincare products?&rdquo;
        </p>
      </>
    );
  }
  return <> </>;
};

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
            <span
              onClick={onClick}
              aria-hidden="true"
              className="robo-up-arrow elevator-up"
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
        <RoboContent floor={floor} />
      </div>
      {floor !== 5 && (
        <Modal
          id="hover-to-show-modal"
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          backgroundColor="#FBFF4A"
        >
          <div className="modal-box-contents">
            <RoboModalContent floor={floor} />
          </div>
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
RoboContent.propTypes = {
  floor: PropTypes.number.isRequired,
};
RoboModalContent.propTypes = {
  floor: PropTypes.number.isRequired,
};
