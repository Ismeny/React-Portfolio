import React from 'react';
import './Contact.css'

export default function Contact() {
  return (
    <>
    <div className='contact'>
      <h1>Contact Me</h1>
      <form className='contact-font'>
        <label for ='full-name'> Name:</label>
        <input type ='text' id = 'full-name' name= 'full-name'></input>
        <label for ='email'> Email:</label>
        <input type ='text' id = 'email' name= 'email'></input>
        <label for ='message'> Message:</label>
        <textarea className='message' type ='text' id = 'message' name= 'message'></textarea>
        <input type = 'submit' value= 'Submit'></input>
      </form>
    <div>
    <ul className='flex-container'>
            <li><a href='https://www.linkedin.com/in/ismeny-castro-b8b32821b/' className="linkedin" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href='https://github.com/Ismeny' className="github" target="_blank" rel="noreferrer">Github</a></li>
            <li><a href='https://twitter.com/IsmenyCastro' className="twitter" target="_blank" rel="noreferrer">Twitter</a></li>
            <li><a href="mailto:menysag2@gmail.com">Email Me</a></li>
        </ul>
    </div>
        <a href='https://www.linkedin.com/in/ismeny-castro-b8b32821b/' target='_blank' rel='noreferrer'><i className="fab fa-linkedin footer-icons"></i></a>
          <a href='https://github.com/Ismeny' target='_blank' rel="noreferrer"><i className="fab fa-github footer-icons"></i></a>
          <a href='mailto:menysag2@gmail.com' rel="noreferrer"><i className="fas fa-envelope footer-icons"></i></a> 
    </div>
    <footer className='footer'>
    <h5 className='center-text'> Copyright &copy; 2021 Ismeny Saguilan</h5>
  </footer>
  </>
  );
}