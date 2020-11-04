import React from 'react';

import './TechLove.css';
import nodecircle from './images/cards/nodecircle.png';
import javacircle from './images/cards/javacircle.png';
import railscircle from './images/cards/railscircle.png';
import twittercircle from './images/cards/twittercircle.png';
import athenacircle from './images/cards/athenacircle.png';
import googlecircle from './images/cards/googlecircle.png';


const TechLove = () => {


    return (
        <>
        <div className="techie">
        <br />
        <h3>Tech</h3>
        <br />
        <p className="techtext">As a developer I am, naturally, interested in all-things tech. I strive to keep up-to-date with the latest news and trends through various means such as reading <strong>TechCrunch,
        TechRadar, Wired</strong>, by listening to podcasts such as the <strong>LadyBug</strong> podcast, and simply by being part of the developer community on Twitter.<br />
        I also try to attend tech meetups when I can such as 
        (from left to right): <strong>Node Girls London</strong> at Financial Times, an android development workshop,
        organised by Codebar and hosted by <strong>Trainline</strong>, a Women in Tech event at <strong>Twitter</strong>, a Codebar workshop hosted by Google, <strong>AthenaHack</strong>- an all-female
        hackathon and event hosted by Queen Mary, University of London, Rails Girls London hosted by <strong>Deliveroo.</strong>
        </p>
        <div className="techimages">
        <div className="tech">
        <img className="nodecircle" src={nodecircle} alt="nodegirlslondon" />
        <br />
        <img className="javacircle" src={javacircle} alt="codebarandroiddevelopment" />
        <img className="twittercircle" src={twittercircle} alt="twitter" />
        <br />
        <br />
        <br />
        </div>
        <div className="tech2">
        <img className="googlecircle" src={googlecircle} alt="googlecodebar" />
        <img className="athenacircle" src={athenacircle} alt="athenahack" />
        <img className="railscircle" src={railscircle} alt="railsgirlslondon" />
        </div>
        </div>
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
    </div>
        </>
    )
}



export default TechLove;