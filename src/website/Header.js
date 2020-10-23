import React from 'react';
import {Animated} from "react-animated-css";
import cherryblossom from './images/cards/cherryblossom2.png';
import flowers8 from './images/cards/flowers8.png';
import flowers7 from './images/cards/flowers7.png';
import banner from './banner.png';
import './Header.css';

const Header = () => {

    return (
        <Animated animationInDuration="3000" animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
        <div className="header">
            <br />
            <img className="cherryblossom" src={banner} alt="banner" />
        </div>
        </Animated> 
    )
}

export default Header;