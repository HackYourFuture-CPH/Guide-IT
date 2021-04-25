import React from 'react';
import PropTypes from 'prop-types';
import './DescriptionCareer.css';

function DescriptionCareer({ title, content, content2, time }) {
  return (
    <div className="descriptioncareer">
      <h3 className="title">{title}</h3>
      <h3 className="content">{content}</h3>
      <h3 className="content2">{content2}</h3>
      <h3 className="time">(Estimated time: {time} minutes)</h3>
    </div>
  );
}

export const Description = ({ exams }) => (
  <div className="innerDiv">
    {exams.map((item) => (
      <div key={item.duration}>
        <DescriptionCareer
          title={item.title}
          content={item.content}
          content2={item.content2}
          time={item.duration}
        />
      </div>
    ))}
  </div>
);

Description.propTypes = {
  exams: PropTypes.arrayOf([PropTypes.object]),
};

Description.defaultProps = { exams: [] };

DescriptionCareer.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  content2: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
};

export default DescriptionCareer;
