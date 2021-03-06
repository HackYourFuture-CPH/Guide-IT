import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Elevator.styles.css';
import Pagination from '../Pagination/Pagination.component';
import RoboModal from '../RoboModal/RoboModal.component';

const elevatorSpeechArray = [
  {
    header: 'PRESENTING YOURSELF',
  },
  {
    header: 'PRESENTING YOURSELF',
  },
  {
    header: 'PRESENTING YOURSELF',
  },
  {
    header: 'PRESENTING YOURSELF',
  },
  {
    header: 'EXAMPLES',
  },
  {
    header: 'KEY TAKEAWAYS',
  },
];

const ElevatorContent = ({ floor }) => {
  if (floor === 0) {
    return (
      <>
        <p>
          This speech is all about YOU: who you are, what you do, and what you
          want to do!
        </p>{' '}
        <h3>Steps:</h3>{' '}
        <ol>
          <li>Start by introducing yourself</li>
          <li>Provide a summary of what you do</li>
          <li>Explain what you want</li>
          <li>Finish with a call to action</li>
        </ol>
      </>
    );
  }
  if (floor === 1) {
    return (
      <>
        <h3>What to say?</h3>
        <ul>
          <li>Your elevator speech should be brief (1-minute speech).</li>
          <li>
            Share your skills! Explain who you are and what qualifications and
            skills you have.
          </li>
          <li>This is your chance to brag a bit(but not too much!).</li>
          <li>Be positive and flexible.</li>
          <li>
            Don&apos;t start with the stuff you&apos;d rather not be doing.
          </li>
        </ul>
      </>
    );
  }
  if (floor === 2) {
    return (
      <>
        <h3>Craft your pitch</h3>
        <p>
          <span />
          Hello, my name is ____________ and I am completing a ____________
          degree in ____________ at XYZ school.
        </p>
        <p>
          I am interested in a career in (or position as a) ____________ in the
          ____________ field (industry).
        </p>
        <p>I have involved (during college or previous job) in ____________.</p>
        <p>
          And developed skills in ____________. I have also had an internship
          position (employment) as a ____________ with ____________ and
          discovered that I really enjoy ____________.
        </p>
        <p>Could you tell me more about ____________?</p>
      </>
    );
  }
  if (floor === 3) {
    return (
      <>
        <h5>Avoid:</h5>
        <p>Speaking too fast.</p>
        <p>
          Rambling (It&lsquo;s so important to practice your elevator speech.)
        </p>
        <p>
          Don&lsquo;t frown, or speak in a monotone way. Here&lsquo;s one of the
          downsides to rehearsing: it can leave you more focused on remembering
          the exact words you want to use, and less on how you&lsquo;re carrying
          yourself. Keep your energy level high, confident, and enthusiastic.
        </p>
      </>
    );
  }
  if (floor === 4) {
    return (
      <>
        <p>
          I recently graduated from college with a degree in communications. I
          worked on the college newspaper as a reporter, and eventually, as the
          editor of the arts section. I&lsquo;m looking for a job that will put
          my skills as a journalist to work.
        </p>
        <p>
          I create illustrations for websites and brands. My passion is coming
          up with creative ways to express a message, and drawing illustrations
          that people share on social media.
        </p>
      </>
    );
  }
  if (floor === 5) {
    return (
      <>
        <h4>Keep it short and sweet:</h4>
        <p>
          Your elevator speech is a sales pitch. Be sure you can deliver your
          message in 60 seconds or less.
        </p>
        <h4>Focus on the essentials:</h4>
        <p>Say who you are, what you do, and what you want to achieve.</p>
        <h4>Be positive:</h4>
        <p>
          Your time is limited. Focus on what you want to do, not what you
          do&lsquo;t want to do. Be upbeat and flexible.
        </p>
        <h4>Practice, practice, practice:</h4>
        <p>
          Deliver your speech to a friend or record it, so that you can be sure
          that your message is clear.
        </p>
      </>
    );
  }
  return <></>;
};

const ElevatorLevel = ({ header, floor, onClickPrev, onClickNext }) => {
  return (
    <div className="elevator-level">
      <h3 className="elevator-heading">{header}</h3>
      <div className="elevator-content">
        <ElevatorContent floor={floor} />
      </div>
      {floor >= 0 && floor < 5 ? (
        <div
          onClick={onClickNext}
          aria-hidden="true"
          className="elevator-arrow elevator-up"
        />
      ) : (
        <div />
      )}
      {floor > 0 && floor <= 5 ? (
        <div
          onClick={onClickPrev}
          aria-hidden="true"
          className="elevator-arrow elevator-down"
        />
      ) : (
        <div />
      )}
    </div>
  );
};

function Elevator({ level }) {
  const [floor, setFloor] = useState(level);
  const handleClickPrev = (e) => {
    e.preventDefault();
    setFloor((prev) => prev - 1);
  };
  const handleClickNext = (e) => {
    e.preventDefault();
    setFloor((prev) => prev + 1);
  };
  const handleClickPagination = (item) => {
    setFloor(item);
  };

  return (
    <>
      <div className="elevator-component">
        <Pagination
          floor={floor}
          handleClickPagination={handleClickPagination}
        />
        <ElevatorLevel
          header={elevatorSpeechArray[floor].header}
          floor={floor}
          onClickPrev={handleClickPrev}
          onClickNext={handleClickNext}
        />
      </div>
      <RoboModal floor={floor} onClick={handleClickNext} />
    </>
  );
}

export default Elevator;

Elevator.propTypes = {
  level: PropTypes.number.isRequired,
};

ElevatorLevel.propTypes = {
  header: PropTypes.string.isRequired,
  floor: PropTypes.number.isRequired,
  onClickPrev: PropTypes.func.isRequired,
  onClickNext: PropTypes.func.isRequired,
};

ElevatorContent.propTypes = {
  floor: PropTypes.number.isRequired,
};
