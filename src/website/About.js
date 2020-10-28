import React from 'react';
import { Animated } from "react-animated-css";

import Tech from './Tech';
import Header from './Header';
import Form from './Form';

import logo from './images/cards/logo.png';
import logoreal from './images/cards/logoreal.png';
import me2 from './images/cards/me2.png';
import me3 from './images/cards/me3.png';
import './About.css';


const About = () => {
  return (
    <>
    <Header />
    <div className="body">
        <div className="welcome" id="home">
          <div className="container">
        <Animated animationInDuration="4000" animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
           <img className="me3" src={logoreal} />
          </Animated>
          <h2>Full Stack<span>Developer</span></h2>
          </div>
          <br />
          <br />
          <div className="text">
            <br />
            <br />
           <p>I'm a full stack developer and graduate of both <strong>Makers Academy</strong> and the <strong>University of Sheffield's School of Languages and
           Cultures.</strong></p>
           <p>I've spent the majority of my working life in the education sector during which time I discovered
           the wonders of coding.</p>
           <p>Starting out with <strong>HTML, CSS</strong> and <strong>JavaScript</strong>, I built on this learning at Makers where I gained a solid understanding of object-oriented programming principles,
            test-driven development, front-and-backend development, agile methodologies and object-oriented design.</p>
            <br />
          <p className="portfolio"><strong>Consult my portfolio for examples of my work</strong></p>  
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        <br />
        <br />
        <br />
      <div className="white">
      <Tech />
      <p id="technologiesheader"><strong>Technologies with which I'm familiar</strong></p>
      <br />
      <br />
      <div className="container4">
      
           +   Enzyme, Chai, Capybara, RSpec, Express, Sinatra   
     
      </div>
      </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2>Contact Me</h2>
      <Form />
      </div>
      </div>
    </>
  )
}

export default About;