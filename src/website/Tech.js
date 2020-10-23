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
  FaGem,
  FaReact,
} from 'react-icons/fa';


const Tech = () =>  (
    <>
  <div className="technologies">
    <div className="technologiesContainer">
      <FaGem className="ruby" />
      <p>
        Ruby
      </p>
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
        <img className="js" src={js} />
        <p>JavaScript</p>
    </div>
    </div>
  
    <div className="technologies2">
    <div className="technologiesContainer">
      <img className="sql" src={database} />
      <p>SQL</p>
    </div>

    <div className="technologiesContainer">
      <img className="html" src={html} />
      <p>HTML5</p>
    </div>

    <div className="technologiesContainer">
      <img className="css" src={css} />
      <p>CSS3</p>
    </div>

    <div className="technologiesContainer">
      <img className="materialui"  src={materialui} />
      <p>MaterialUI</p>
    </div>
   
    <div className="technologiesContainer">
        <img className="sinatra" src={sinatra} />
      <p className="sinatratext">Sinatra</p>
    </div>
    </div>
    <div className="technologies3">

    <div className="technologiesContainer">
        <img className="node2" src={node} />
        <p>Node</p>
    </div>

    <div className="technologiesContainer">
        <img className="jasmine2" src={jasmine} />
        <p>Jasmine</p>
    </div>

    <div className="technologiesContainer">
    <img className="rspec" src={rspec} />
        <p>RSpec</p>
    </div>

    <div className="technologiesContainer">
        <img className="postgres" src={postgres} />
        <p className="postgrestext">PostgreSQL</p>
     
    </div>
    <div className="technologiesContainer">
        <img className="tdd" src={tdd} />
        <p className="tddtext">TDD</p>
     
    </div>
    </div>
    <div className="technologies4">
    <div className="technologiesContainer">
        <img className="chai" src={chai} />
        <p>Chai</p> 
    </div>

    <div className="technologiesContainer">
        <img className="mocha" src={mocha} />
        <p className="mochatext">Mocha</p>
    </div>

    <div className="technologiesContainer">
        <img className="jest" src={jest} />
        <p className="jesttext">Jest</p> 
    </div>

    <div className="technologiesContainer">
        <img className="enzyme2" src={enzyme} />
        <p className="enzymetext">Enzyme</p>
    </div>
    <br />
    <div className="technologiesContainer">
        <img className="capybara2" src={capybara} />
        <p className="capybaratext">Capybara</p>
    </div>
    </div>
 
  
  
  </>
)

export default Tech;