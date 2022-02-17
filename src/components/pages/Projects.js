import React from 'react';
import './Projects.css'

export default function Projects() {
  return (
    <>

    <div className='projects'>
      <h1>Projects</h1>
      <div className='flex-container'>
            <div className="card" id='crypto-card'>  
            <h4>Crypto Cosmos</h4>
            <p>A dashboard to monitor cryptocurrency and their shifting values so that you can manage your crypto assets. Our project includes graphs designed to display the top 7 markets total value of cryptocurrency. We also provide a search feature that allows you to choose from the top 20 crypto currencies and compare them. Our site also provides real time news on crypto currency and related stock market information.</p>
            <p>HTML, CSS, JavaScript</p>
            <br></br>
            <a href='https://cole-cochran.github.io/Crypto-Cosmos/' className="crypto-cosmos" target="_blank" rel="noreferrer"> view app</a> <br></br>
            <a href='https://github.com/cole-cochran/Crypto-Cosmos' className="crypto-cosmos" target="_blank" rel="noreferrer"> view repo</a>
            </div>
            <div className="card" id='script-card'>
                <h4>Script Doctors</h4>
                <p>As a user looking to schedule an appointment with a chiropractor our website allows the user to create an account that gives them access to schedule. After creating the account the user will be presented with our appointments page where they can easily choose the date, time, location, and doctor they wish to see. As a user they also have the ability to write a description of their issue for the doctor they will be seeing. When the user is done scheduling they can logout. </p>
                <p>HTML, CSS, JavaScript, <br></br>Express, Node.js, Sequelize</p>
                <br></br>
            <a href='https://project2-group8.herokuapp.com/login' className="script-doctors" target="_blank" rel="noreferrer">view app</a> <br></br>
            <a href='https://github.com/samkilpatrick903/Full-Stack-Appointment-App' className="script-doctors" target="_blank" rel="noreferrer">view repo</a>
            </div>
            <div className="card" id='planthub-card'>
                <h4>Planthub</h4>
                <p>PlantHub is an application designed to help you keep track of all your plants. On PlantHub you will be able to sign up for an account and get access to creating a garden for your plants. The garden is created by entering your your plants name, nick name, water consumption.. etc As a user you will also be able to view your profile that displays your username, location, date joined, the number of plants in your garden, and short bio.</p>
                <p>MERN Stack</p>
                <br></br>
            <a href='https://planth.herokuapp.com/' className='planthub'  target="_blank" rel="noreferrer" >view app</a> <br></br>
            <a href='https://github.com/nicoledodge/PlantHub' className='planthub'  target="_blank" rel="noreferrer" >view repo</a>
            </div>
        </div>
    </div>
    <footer className='footer'>
      <h5 className='center-text'> Copyright &copy; 2021 Ismeny Saguilan</h5>
    </footer>
  </>
  );
}
