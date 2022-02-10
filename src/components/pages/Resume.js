import React from 'react';
import './Resume.css'
import resume from '../pages/docs/tech-resume.pdf'


export default function Resume() {
  return (
    <>
    <div className='resume'>
      <h1 className='h1'>Resume</h1>
      <div className='resume-skills'>
        <h3>Front-end Proficiencies</h3>
        <ul className="skills">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Responsive Design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
        <h3>Back-end Proficiencies</h3>
        <ul className="skills">
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL</li>
          <li>Sequelize</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
        </div>
        <button>
    <a className= 'resume-link'href={resume} target="_blank" rel="noreferrer"> Download Resume</a>
    </button>
    </div>
    <footer className='footer'>
      <h5 className='center-text'> Copyright &copy; 2021 Ismeny Saguilan</h5>
    </footer>
    </>
  );
}
