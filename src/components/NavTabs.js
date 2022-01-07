import React from 'react';
import './NavTabs.css';
import portfolioPic from '../images/portfolio-pic.jpeg';
import logo from '../images/logo.png';
// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names



function NavTabs({ currentPage, handlePageChange }) {
  return (
    <>
   
    <div className="sidenav">
    <div>
        <img className='profile-pic' src={portfolioPic} alt='profile pic' ></img>
      </div>
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
        <a
          href="#projects"
          onClick={() => handlePageChange('Projects')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
        >
          Projects
        </a>
        <a href="#resume"  
          onClick={() => handlePageChange('Resume')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
        <div>
        <img className='logo' id='#logo' alt='my-logo' src={logo}/>
        </div>
    </div>
    </>
  );
}

export default NavTabs;


