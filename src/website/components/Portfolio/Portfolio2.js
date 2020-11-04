import React from 'react';
import CardProject from '../Cards/Cards2';
import Cards2 from '../Cards/Cards2';
import Header from '../UI/Header/Header';
import Header3 from '../UI/Header/Header3';


import './Portfolio2.css';


const Portfolio2 = () => {
    return (
        <>
            <Header3/>
            <div className="main2">
            <div className="strip"></div>
            <p className="work">Portfolio</p>
            <p id="click">Click on each card to find out more about the projects</p>
            <br />
            <CardProject/>
            </div>
        </>
    )
}

export default Portfolio2;