import React from 'react';
import './Contact.css'

export default function Contact() {
  return (
    <>
    <div className='contact'>
      <h1>Contact Page</h1>
    <p className='contact-font'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
    </p>
    <div>
    <ul className='flex-container'>
            <li><a href='https://www.linkedin.com/in/ismeny-saguilan-b8b32821b/' className="linkedin" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href='https://github.com/Ismeny' className="github" target="_blank" rel="noreferrer">Github</a></li>
            <li><a href='https://twitter.com/IsmenySaguilan' className="twitter" target="_blank" rel="noreferrer">Twitter</a></li>
            <li><a href="mailto:menysag2@gmail.com">Email Me</a></li>
        </ul>
    </div>
  
    </div>
    <footer className='footer'>
    <h5 className='center-text'> Copyright &copy; 2021 Ismeny Saguilan</h5>
  </footer>
  </>
  );
}