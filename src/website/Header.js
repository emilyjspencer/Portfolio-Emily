import React from 'react';
import {Animated} from "react-animated-css";
import cherryblossom from './images/cards/cherryblossom2.png';
import flowers8 from './images/cards/flowers8.png';
import flowers7 from './images/cards/flowers7.png';
import banner from './images/cards/newbanner.png';
import newbanner from './images/cards/newbanner2.png';
import pinkbanner from './images/cards/pinkbanner.png';
import lightpinkbanner from './images/cards/lightpinkbanner.png';
import darkpinkbanner from './images/cards/darkpinkbanner.png';
import palepinkbanner from './images/cards/palepinkbanner.png';
import lightbanner from './images/cards/lightbanner.png';
import greybanner from './images/cards/greybanner.png';
import greybanner2 from './images/cards/greybanner2.png';
import greybanner3 from './images/cards/greybanner3.png';
import greybanner4 from './images/cards/greybanner4.png';
import greybanner10 from './images/cards/greybanner10.png';
import greybanner11 from './images/cards/greybanner11.png';
import greybanner12 from './images/cards/greybanner12.png';

import './Header.css';

const Header = () => {

    return (
        <Animated animationInDuration="3000" animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
        <div className="header">
            <br />
            <img className="cherryblossom" src={greybanner12} alt="banner" />
        </div>
        <div className="greystripabove"></div>
      
        </Animated> 
    )
}

export default Header;