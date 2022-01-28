import React from 'react';
import './Resume.css'
import resume from '../pages/docs/tech-resume.pdf'


export default function Resume() {
  return (
    <>
    <div className='resume'>
      <h1 className='h1'>Resume</h1>
      <a className= 'resume-link'href={resume} target="_blank" rel="noreferrer"> Click to view resume</a>
    </div>
    <footer className='footer'>
      <h5 className='center-text'> Copyright &copy; 2021 Ismeny Saguilan</h5>
    </footer>
    </>
  );
}
