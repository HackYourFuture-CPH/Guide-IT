import React, { useState, useRef } from 'react';
import './ResultJobFeatures.styles.css';
import PropTypes from 'prop-types';

// import the 2 needed logos
import hyfLogo from '../../assets/images/hyf-logo.png';
import rediLogo from '../../assets/images/redi-logo.png';

/*
How it works?
When this component is called, is called with one prop, the branchTitle,
it filters the array and returns the called branch name then store it in 'result'
to later display it depending of hte clicked bullet point
*/
export default function ResultJobFeatures({ branchTitle }) {
  // States that store the Bullet points content
  const [firstStyle, setFirstStyle] = useState('none');
  const [secondStyle, setSecondStyle] = useState('none');
  const [thirdStyle, setThirdStyle] = useState('none');
  // refs to store the reference to the each bullet point content
  const firstRef = useRef();
  const secondRef = useRef();
  const thirdRef = useRef();

  // State for the left arrow, to rotate down or to its inicial direction when clicked
  const [firstRotate, setFirstRotate] = useState('0deg');
  const [secondRotate, setSecondRotate] = useState('0deg');
  const [thirdRotate, setThirdRotate] = useState('0deg');

  // Information of each job branch stored in this array
  const array = [
    {
      jobTitle: 'Full stack developer',
      branch: 'Full stack development',
      school: 'HYF school',
      webSite: 'https://www.hackyourfuture.dk/',
      logoPath: hyfLogo,
      links: ['https://www.youtube.com/watch?v=9GHtSbRX3dY'],
      skills: {
        title: 'Full stack developer needs to have a following skill set:',
        ts: {
          title: '-Technical skills',
          skills:
            '(HTML/CSS;Javascript;Git;Backend Languages:C#,Python,Ruby;Web Architecture;Databases)',
        },
        ss: {
          title: '-Soft skills',
          skills: '(critical thinking, detailed analysis, creativity)',
        },
      },
    },
    {
      jobTitle: 'Data analyst',
      branch: 'Data analysis',
      school: 'ReDI school',
      webSite: 'https://www.redi-school.org/',
      logoPath: rediLogo,
      links: ['https://www.youtube.com/watch?v=EeSvvtwdyDo'],
      skills: {
        title: 'Data analyst needs to have a following skill set:',
        ts: {
          title: '-Technical skills',
          skills:
            '(high level of mathematical ability;the ability to analyze, model and interpret data;accuracy and attention to detail)',
        },
        ss: {
          title: '-Soft skills',
          skills: '(critical thinking, communication and teamwork)',
        },
      },
    },
    {
      jobTitle: 'UX designer',
      branch: 'UX design',
      school: 'ReDI school',
      webSite: 'https://www.redi-school.org/',
      logoPath: rediLogo,
      links: [
        'https://www.youtube.com/watch?v=O3EtKPG4OWE',
        'https://www.youtube.com/watch?v=ORZlHuD22UQ',
      ],
      skills: {
        title: 'UX designers need to have a very diverse skill set:',
        ts: {
          title: '-Technical and design skills',
          skills: '(wireframing, prototyping, interpreting data)',
        },
        ss: {
          title: '-Soft skills',
          skills: '(adaptability, communication, empathy and teamwork)',
        },
      },
    },
  ];
  // Result will store the filtered object that contains job branch info.
  let result = [];
  const selectedObject = array.filter(
    (item) => item.branch.toLowerCase() === branchTitle.toLowerCase(),
  );
  if (selectedObject.length >= 1) {
    [result] = selectedObject;
  } else {
    [result] = array;
  }

  const { jobTitle, branch, school, logoPath, links, skills, webSite } = result;

  // Hanles click on first bullet point
  const handleFirstClick = () => {
    setFirstStyle(firstStyle === 'none' ? 'block' : 'none');
    setSecondStyle('none');
    setThirdStyle('none');
    setFirstRotate(firstRotate === '0deg' ? '90deg' : '0deg');
    setSecondRotate('0deg');
    setThirdRotate('0deg');
  };
  // Hanles click on  second bullet point
  const handleSecondClick = () => {
    setSecondStyle(secondStyle === 'none' ? 'block' : 'none');
    setFirstStyle('none');
    setThirdStyle('none');
    setSecondRotate(secondRotate === '0deg' ? '90deg' : '0deg');
    setFirstRotate('0deg');
    setThirdRotate('0deg');
  };
  // Hanles click on  third bullet point
  const handleThirdClick = () => {
    setThirdStyle(thirdStyle === 'none' ? 'block' : 'none');
    setFirstStyle('none');
    setSecondStyle('none');
    setThirdRotate(thirdRotate === '0deg' ? '90deg' : '0deg');
    setSecondRotate('0deg');
    setFirstRotate('0deg');
  };

  return (
    <ul className="job-features-container">
      {/* First bullet point */}
      <li>
        <div className="bullet-point">
          <div
            className="left-triangle"
            style={{ transform: `rotate(${firstRotate})` }}
          />
          <div
            className="job-features-title"
            role="button"
            tabIndex={0}
            onClick={() => handleFirstClick(firstRef)}
            onKeyDown={() => handleFirstClick(firstRef)}
          >{`Become a ${jobTitle}`}</div>
        </div>

        <div
          className="job-features-description"
          ref={firstRef}
          style={{ display: firstStyle }}
        >
          <p>{`${school} offers a course where you can learn basics of ${branch}.`}</p>
          <div className="description-click-here">
            <p>Click here:</p>
            <div className="job-features-logo-container">
              <a href={webSite} target="_blank" rel="noopener noreferrer">
                <img src={logoPath} alt={`${school} logo`} />
              </a>
            </div>
          </div>
        </div>
      </li>

      {/* Second bullet point */}
      <li>
        <div className="bullet-point">
          <div
            className="left-triangle"
            style={{ transform: `rotate(${secondRotate})` }}
          />
          <div
            className="job-features-title"
            role="button"
            tabIndex={0}
            onClick={() => handleSecondClick(secondRef)}
            onKeyDown={() => handleSecondClick(secondRef)}
          >{`A day in the life of a ${jobTitle}`}</div>
        </div>
        <div
          className="job-features-description"
          ref={secondRef}
          style={{ display: secondStyle }}
        >
          <p>{`Interested in finding our what a ${jobTitle} does and how it looks like to be one?`}</p>

          <div className="links-container">
            {links.map((link) => (
              <a href={link}>{link}</a>
            ))}
          </div>
        </div>
      </li>

      {/* Third bullet point */}
      <li>
        <div className="bullet-point">
          <div
            className="left-triangle"
            style={{ transform: `rotate(${thirdRotate})` }}
          />
          <div
            className="job-features-title"
            role="button"
            tabIndex={0}
            onClick={() => handleThirdClick(thirdRef)}
            onKeyDown={() => handleThirdClick(thirdRef)}
          >
            Skills needed
          </div>
        </div>
        <div
          className="skills-container"
          ref={thirdRef}
          style={{ display: thirdStyle }}
        >
          <ul>
            <li>
              <p>{`${skills.title}`}</p>
            </li>
            <li>
              <b>{skills.ts.title} </b>
              {skills.ts.skills}
            </li>
            <li>
              <b>{skills.ss.title} </b>
              {skills.ss.skills}
            </li>
          </ul>
        </div>
      </li>
    </ul>
  );
}

ResultJobFeatures.propTypes = {
  branchTitle: PropTypes.string.isRequired,
};
