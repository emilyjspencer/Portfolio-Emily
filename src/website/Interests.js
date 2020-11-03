import React from 'react';
import CarouselTravel from './CarouselTravel';
import Header2 from './Header2';
import Header from './Header';
import Header3 from './Header3';
import Performing from './Performing';
import TechLove from './TechLove';
import Books from './Books';
import LangTravel from './LangTravel';
import Film from './Film';
import Photography from './Photography';


import './Header2.css';

import rose from './images/cards/rose.svg';
import deer from './images/cards/lake.jpg';
import piano from './images/cards/pianocircle.png';
import physical from './images/cards/physicalcircle.png';
import ballet from './images/cards/dancecircle.png';
import spines2 from './images/cards/spines7.png';
import nodecircle from './images/cards/nodecircle.png';
import javacircle from './images/cards/javacircle.png';
import railscircle from './images/cards/railscircle.png';
import twittercircle from './images/cards/twittercircle.png';
import athenacircle from './images/cards/athenacircle.png';
import googlecircle from './images/cards/googlecircle.png';
import outofafricacircle from './images/cards/outofafricacircle.png';
import atmiddletoncircle from './images/cards/atmiddletoncircle.png';
import manhattancircle from './images/cards/manhattancircle.png';
import burnyourmapscircle from './images/cards/burnyourmapscircle.png';
import hideouskinkycircle from './images/cards/hideouskinkycircle.png';
import secretgardencircle from './images/cards/secretgardencircle.png';
import blackswancircle from './images/cards/blackswancircle.png';


const Interests = () => {
    const flickrHandler = (url) => {
        window.open(url, "_blank");
      };
    return (
        <>
          <Header />
      
            <Performing />
            <Books />
            <TechLove />
            <Photography />
            <Film />
            <LangTravel />
        
        </>
    )
}

export default Interests;