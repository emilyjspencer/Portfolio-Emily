import React from 'react';
import './Tech.css';

import rails from './images/cards/rails.png';
import jest from './images/cards/jest.png';
import rspec from './images/cards/rspec.png';
import enzyme from './images/cards/enzyme2.png';
import jasmine from './images/cards/jasmine2.png';
import chai from './images/cards/chai.png';
import mocha from './images/cards/mocha.png';
import capybara from './images/cards/capybara2.png';
import ruby from './images/cards/ruby.png';
import react from './images/cards/react2.png';
import python from './images/cards/python.png';
import postgres from './images/cards/postgres.png';
import node from './images/cards/node.png';
import sinatra from './images/cards/sinatra.png';
import tdd from './images/cards/tdd.png';
import js from './images/cards/js.png';
import database from './images/cards/database.png';
import html from './images/cards/html.png';
import css from './images/cards/css.png';
import materialui from './images/cards/materialui.png';

import {
    DiPython
} from 'react-icons/di';
import {
  GiJasmine,
  GiRecycle
} from 'react-icons/gi';
import {
  FaGem,
  FaReact,
  FaNode,
} from 'react-icons/fa';
import  {
SiJavascript,
SiPostgresql,
SiJest,
SiMaterialUi,
SiMongodb,
SiMocha,
SiHtml5,
} from 'react-icons/si';


const Tech = () =>  (
    <>
  <div className="technologies1">
    <div className="technologiesContainer">
      <FaGem className="ruby" />
      <p>Ruby</p>
    </div>
    <div className="technologiesContainer">
        <img className="rails" src={rails} />
      <p>Rails</p>
    </div>

    <div className="technologiesContainer">
      <FaReact className="react" />
      <p>React</p>
    </div>

    <div className="technologiesContainer">
        <DiPython className="python" />
        <p>Python</p>
    </div>


    <div className="technologiesContainer">
        <SiJavascript className="javascript" />
        <p>JavaScript</p>
    </div>
    </div>
   
   <div className="technologies2">
    <div className="technologiesContainer">
      <SiPostgresql className="postgres"/>
      <p>PostgreSQL</p>
    </div>

    <div className="technologiesContainer">
      <SiMongodb className="mongodb" />
      <p>MongoDB</p>
    </div>

    <div className="technologiesContainer">
      <SiHtml5 className="html"/>
      <p>HTML5</p>
    </div>

    <div className="technologiesContainer">
      <img className="css" src={css} />
      <p>CSS3</p>
    </div>

    <div className="technologiesContainer">
      <SiMaterialUi className="materialui"  />
      <p>MaterialUi</p>
     
    </div>
    </div>
    <br />
    <br />
    <div className="technologies3">
   

    <div className="technologiesContainer">
        <GiJasmine className="jasmine2" />
        <p>Jasmine</p>
    </div>

    <div className="technologiesContainer">
        <FaNode className="node2" />
    </div>

    <div className="technologiesContainer">
        <GiRecycle className="tdd" />
         <p>TDD</p>  
    </div>
  
    <div className="technologiesContainer">
        <SiMocha className="mocha"/>
        <p>Mocha</p>
    </div>

    <div className="technologiesContainer">
        <SiJest className="jest"/> 
        <p>Jest</p>
    </div>
   <div>
     <br />
     <br />
     <div className="technologies4">
  <p>Capybara. Enzyme. Chai. Sinatra. RSpec. Express</p>
  </div>
 
</div>
</div>

</>
)

export default Tech;