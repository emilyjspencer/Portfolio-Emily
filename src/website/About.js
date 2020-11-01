import React from 'react';
import { Animated } from "react-animated-css";

import Tech from './Tech';
import Header from './Header';
import Header3 from './Header3';
import Form from './Form';
import Footer from './Footer';
import logo from './images/cards/logo.png';
import logoreal from './images/cards/logoreal.png';
import me2 from './images/cards/me2.png';
import me3 from './images/cards/me3.png';
import logo6 from './images/cards/logo6.png';
import logo7 from './images/cards/logo7.png';
import logo8 from './images/cards/logo8.png';
import binary from './images/cards/binary.svg';
import laptop from './images/cards/laptop.svg';
import laptopcoffee from './images/cards/laptopcoffee.svg';
import './About.css';


const About = () => {
  return (
    <>
   <Header3 />
    <div className="body">
    <div className="strip"></div>
        <div className="welcome" id="home">
          <div className="container">
        <Animated animationInDuration="4000" animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
           <img className="me3" src={logo8} />
          </Animated>
          <h2>Full Stack<span>Developer</span></h2>
          </div>
          <br />
          <br />
          <div className="text">
            <br />
           <p>I'm a full stack developer and graduate of <strong>Makers Academy</strong> and the <strong>University of Sheffield's School of Languages and
           Cultures.</strong></p>
           <p>I've spent the majority of my working life in the education sector during which time I discovered
           the wonders of coding.</p>
           <p>Starting out with <strong>HTML, CSS</strong> and <strong>JavaScript</strong>, I built on this learning at Makers where I gained a solid understanding of object-oriented programming principles,
            test-driven development, front-and-backend development, agile methodologies and object-oriented design.</p>
            <br />
            <br /> 
            <p id="portfolio"><strong>Please consult my portfolio for examples of my work</strong></p>  
            <br />
      </div>
      </div>
   <div className="strip4"></div>
      <div class="body2">
      <div>
        <br />
        <br />
      <Tech />
      <p id="technologiesheader"><strong>My Toolkit</strong></p>
      <br />
      <div className="container4">
          I also have experience with Node.js, Enzyme, Chai, Capybara, RSpec, Express, Sinatra, as well as with
          pair-programming and git.   
      </div>
      </div>
      </div>
      <br />
      </div>
      <br />
    </>
  )
}

export default About;