import React from "react";
import Slider from "react-slick";

import './CarouselTravel2.css';
import nice from './images/cards/nice.png';
import brecht from './images/cards/brecht.png';
import chopin from './images/cards/chopin.png';
import mozart from './images/cards/mozart.png';
import alpine from './images/cards/alpine.png';
import disney from './images/cards/disney1.png';
import amsterdam from './images/cards/amsterdam.png';
import berlin from './images/cards/berlin.png';
import neuschwanstein3 from './images/cards/neuschwanstein.png';
import eiffel from './images/cards/eiffel.png';
import artnouveau from './images/cards/artnouveau.png';
import baudelaire from './images/cards/baudelaire.png';
import paris from './images/cards/paris.png';
import venice from './images/cards/venice.png';
import mucha from './images/cards/mucha.png';
import berlinmemorial from './images/cards/berlinmemorial.png';
import rome from './images/cards/rome.png';
import hd from './images/cards/hd.png';
import travel from './images/cards/travel.png';

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div>
            <img src={travel} />
          </div>
          <div>
            <img src={mozart} />
          </div>
          <div>
            <img src={paris} />
          </div>
          <div>
            <img src={neuschwanstein3} />
          </div>
          <div>
            <img src={berlin} />
          </div>
          <div>
            <img src={hd} />
          </div>
          <div>
            <img src={venice} />
          </div>
          <div>
            <img src={rome} />
          </div>
          <div>
            <img src={rome} />
          </div>
          <div>
            <img src={rome} />
          </div>
          <div>
            <img src={rome} />
          </div>
          <div>
            <img src={rome} />
          </div>
          <div>
            <img src={rome} />
          </div>
    </Slider>
  );
}