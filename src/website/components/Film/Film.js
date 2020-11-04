import React from 'react';

import './Film.css';
import outofafricacircle from '../../images/cards/outofafricacircle.png';
import atmiddletoncircle from '../../images/cards/atmiddletoncircle.png';
import manhattancircle from '../../images/cards/manhattancircle.png';
import burnyourmapscircle from '../../images/cards/burnyourmapscircle.png';
import hideouskinkycircle from '../../images/cards/hideouskinkycircle.png';
import secretgardencircle from '../../images/cards/secretgardencircle.png';
import blackswancircle from '../../images/cards/blackswancircle.png';


const Film  = () => {

    return (
        <>
        <div className="film">
        <div className="filmmm">
          <h3>Film</h3>
        </div>
        <br />
        <div className="filmtext">
          <p>I'm a huge fan of films and enjoy most genres, whether that be romantic comedy, historical drama, horror, indie, romantic epics or thriller.<br />
          I greatly admire the work and talent of actors, actresses and directors such as <strong>Meryl Streep, Dustin Hoffman, Vera Farmiga, and Woody Allen</strong>.<br />
          A few favourites - from left to right: Meryl Streep and Robert Redford in <strong>Out of Africa</strong>, Andy Garcia and Vera Farmiga in 
        <strong> At Middleton</strong>, Natalie Portman in <strong>Black Swan</strong>, Carrie Mullan, Kate Winslet and Bella Riza in <strong>Hideous Kinky</strong>, Diane Keaton and Woody Allen in Allen's <strong>Manhattan</strong>, 
        Jacob Tremblay in <strong>Burn Your </strong>, Andrew Knott, Heydon Prowse and Kate Maberly in <strong>The Secret Garden.</strong></p>
        </div>
        <div className="filmstrip">
        <img src={outofafricacircle} className="outofafricacircle" />
        <img src={atmiddletoncircle} className="atmiddletoncircle" />
        <img src={blackswancircle} className="blackswancircle" />
        <img src={hideouskinkycircle} className="hideouskinkycircle" />
        <img src={manhattancircle} className="manhattancircle" />
        <img src={burnyourmapscircle} className="burnyourmapscircle" />
        <img src={secretgardencircle} className="secretgardencircle" />
        <br />
        <br />
        <br />
        </div>
        </div>
        </>
    )
}



export default Film;