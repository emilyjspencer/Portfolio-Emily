import React from 'react';
import { Animated } from "react-animated-css";

import Tech from './Tech';
import Header from './Header';
import Header3 from './Header3';
import Form from './Form';
import Footer from './Footer';
import logo8 from './images/cards/logo8.png';
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
          <h2 className="fullstack">Full Stack<span>Developer</span></h2>
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
           <div class="body2">
           <br />
           <br />
           <p id="technologiesheader"><strong>My Toolkit</strong></p>
           <br />
           <Tech />
           <div className="hiddenlist">
           <ul>
            <li>Ruby</li>
            <li>JavaScript</li>
            <li>Python</li>
            <li>Node</li>
            <li>RSpec</li>
            <li>Jasmine</li>
            <li>Mocha</li>
            <li>Chai</li>
            <li>Jest</li>
            <li>Enzyme</li>
            <li>SQL</li>
            <li>React</li>
            <li>jQuery</li>
            <li>Express</li>
            <li>Sinatra</li>
            <li>MongoDB</li>
            <li>Bootstrap</li>
            <li>Material UI</li>
          </ul>
          </div>
          <div className="container4">
            <p>I also have experience with Node, Enzyme, Chai, Capybara, RSpec, Express, Sinatra, as well as with
            pair-programming and Git.</p>  
          </div>
          </div>
          </div>
          <br />
          <br />
         </>
        )
     }

export default About;