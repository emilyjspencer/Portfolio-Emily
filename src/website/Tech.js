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
    DiPython,
    DiJqueryLogo
} from 'react-icons/di';
import {
  GiJasmine,
  GiRecycle,
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
SiBootstrap,
SiHtml5,
} from 'react-icons/si';


const Tech = () =>  (
    <>
  <div className="both">
  <div className="container1">
    <table>
      <tr>
        <td><FaGem className="ruby" /><p>Ruby</p></td>
        <td> <SiJavascript className="javascript" /><p>JavaScript</p></td>
        <td> <DiPython className="python" /><p>Python</p></td>
      </tr>
      </table>
     <br />
      <table>
        <tr>
        <td> <img className="rails" src={rails} />
      <p>Rails</p></td>
        </tr>
      </table>
      <br />
      <table>
        <tr>
        <td><DiJqueryLogo className="jquery" /><p>jQuery</p></td>
        </tr>
      </table>
      <br />
      <br />
      <br />
      <br />
      </div>
      <br />
      <div className="container2">
      <table>
        <tr>
        <td><SiPostgresql className="postgres"/>
        <p>PostgreSQL</p></td>
        <td><SiMongodb className="mongodb" />
        <p>MongoDB</p></td>
        </tr>
        <br />
        <br />
      </table>
      <br />
      <table> 
        <tr>
        <td> <SiMaterialUi className="materialui"  />
        <p>MaterialUi</p></td>
        <td><SiHtml5 className="html"/>
        <p>HTML5</p></td>
        <td> <img className="css" src={css} />
      <p>CSS3</p></td>
        </tr>
        <br />
        <br />
      </table>
      <br />
      <br />
      <br />
      <br />
      </div>
      <div className="container3">
      <table>
        <tr>
        <td> <GiJasmine className="jasmine2" />
        <p>Jasmine</p></td>
        <td><SiJest className="jest"/> 
        <p>Jest</p></td>
        <td> <SiMocha className="mocha"/>
        <p>Mocha</p></td>
        <td> <FaReact className="react" />
      <p>React</p></td>
      <td><SiBootstrap className="bootstrap" /><p>Bootstrap</p></td>
        </tr>
      </table>
      <br />
      <br />
      <br />
      <br />
      </div>
      <br />
      <br />
      </div>

  
  
 


</>
)

export default Tech;