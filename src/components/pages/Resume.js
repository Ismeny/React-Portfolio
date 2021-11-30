import React from 'react';
import './Resume.css'
import resume from '../pages/docs/tech-resume.pdf'


export default function Resume() {
  return (
    <>
    <div className='resume'>
      <h1 className='h1'>Resume</h1>
      <a href={resume} target="_blank" rel="noreferrer"> Click to view resume</a>
    </div>
    <footer>
      <h5 class='center-text'> Copyright &copy; 2021 Ismeny Saguilan</h5>
    </footer>
    </>
  );
}
