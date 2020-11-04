import React from 'react';

import './Performing.css'
import piano from '../../images/cards/pianocircle.png';
import physical from '../../images/cards/physicalcircle.png';
import ballet from '../../images/cards/dancecircle.png';


const Performing = () => {

    return (
        <>
          <div className="performingarts">
          <h2 className="performingtitle">The Performing Arts</h2>
          <div className="performingimages">
            <img className="physical" src={physical} alt="physicaltheatre" />
            <img className="dance" src={ballet} alt="an early dance exam" />
            <img className="piano" src={piano} alt="piano" />
            </div>
            <br />
            <p className="performingtext">Having grown up taking ballet, tap, modern dance, piano, violin and speech & drama lessons, I have
              a deep appreciation for all aspects of the performing arts. 
              Taking examinations in these areas on a yearly basis meant that I spent many an hour honing these skills,
              competing in competitions, performing at concerts, including local <strong>Young Musician concerts</strong>, <strong>ABRSM High Scorers Concerts</strong>, and other concerts.
              I've also performed in various dance shows and musicals, including a performance at the <strong>John Smith's Stadium</strong> in Huddersfield.</p>
            </div>
            </>
        )
}


export default Performing;