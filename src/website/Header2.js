import React from 'react';
import { Animated } from "react-animated-css";

import './Header2.css';
import banner from './banner.png'

const Header2 = () => {

    return (
        <Animated animationInDuration="4000" animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
        <div className="container">
        <img className="banner" src={banner} alt="banner"  />
        </div>
        </Animated>

    )
}
    


export default Header2;