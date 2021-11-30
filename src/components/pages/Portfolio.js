import React from 'react';
import './Portfolio.css'

export default function Portfolio() {
  return (
    <>

    <div className='portfolio'>
      <h1>Portfolio</h1>
      <div className='flex-container'>
            <div className="card">  
            <h4>Crypto Cosmos</h4>
            <p>HTML, CSS, JavaScript</p>
            <br></br>
            <a href='https://cole-cochran.github.io/crypto-cosmos/' className="crypto-cosmos" target="_blank" rel="noreferrer">Click to view</a>
            </div>
            <div className="card">
                <h4>Script Doctors</h4>
                <p>HTML, CSS, JavaScript, <br></br>Express, Node.js, Sequelize</p>
                <br></br>
            <a href='https://project2-group8.herokuapp.com/login' className="script-doctors" target="_blank" rel="noreferrer">Click to view</a>
            </div>
            <div className="card">
                <h4>COMING SOON</h4>
                <p>MERN Stack</p>
                <br></br>
            <a href='#'  target="_blank"rel="noreferrer" >Click to view</a>
            </div>
        </div>
    </div>
   
   
   
  </>
  );
}
