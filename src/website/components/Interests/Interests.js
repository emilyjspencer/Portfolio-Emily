import React from 'react';
import CarouselTravel from '../Carousel/CarouselTravel';
import Header from '../UI/Header/Header';
import Header3 from '../UI/Header/Header3';
import Performing from '../Performing/Performing';
import TechLove from '../Technology/TechLove';
import Books from '../Books/Books';
import LangTravel from '../LangTravel/LangTravel';
import Film from '../Film/Film';
import Photography from '../Photography/Photography';


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