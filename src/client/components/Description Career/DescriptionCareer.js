import React from 'react';
import PropTypes from 'prop-types';
import './descriptioncareer.css';

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

const arr = [
  {
    title: 'CAREER PATH ',
    content:
      'Curious about the possibilities within the IT-industry and want to know how to fit in job market?',
    content2: 'Then try out the quiz and see the answers.',
    duration: 3,
  },
  {
    title: 'PRESENT YOURSELF',
    content:
      'Interested in tips and advices that will help you grow professionally?',
    content2: 'Then climb up those professional stairs with our elevator.',
    duration: 5,
  },
];

export const Description = () => (
  <div className="innerDiv">
    {arr.map((item) => (
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

DescriptionCareer.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  content2: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
};

export default DescriptionCareer;
