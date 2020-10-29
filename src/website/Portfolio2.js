import React from 'react';
import CardProject from './Cards2';
import Cards2 from './Cards2';


import Header from './Header';


import './Portfolio2.css';


const Portfolio2 = () => {
    return (
        <>
            <Header />
            <div className="body">
            <p className="work">Portfolio</p>
            <CardProject />
            </div>
        </>
    )
}

export default Portfolio2;