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



const Interests = () => {
   
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