import React from 'react';
import './Tech.css';

import rails from '../../images/cards/rails.png';

import css from '../../images/cards/css.png';
import materialui from '../../images/cards/materialui.png';

import {
    DiPython,
    DiJqueryLogo
} from 'react-icons/di';
import {
  GiJasmine,
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
        <td><FaGem className="ruby" /></td>
        <td>Ruby</td>
        <td><SiJavascript className="javascript" /></td>
        <td>JavaScript</td>
        <td><DiPython className="python" /></td>
        <td>Python</td>
      </tr>
      </table>
     <br />
      <table>
        <tr>
        <td> <img className="rails" src={rails} /></td>
        <td>Rails</td>
        </tr>
      </table>
      <br />
      <table>
        <tr>
        <td><DiJqueryLogo className="jquery" /></td>
        <td>jQuery</td>
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
        <td><SiPostgresql className="postgres"/></td>
        <td>PostgreSQL</td>
        <td><SiMongodb className="mongodb" />   </td>
        <td>MongoDB</td>
        </tr>
        <br />
        <br />
      </table>
      <br />
      <table> 
        <tr>
        <td> <SiMaterialUi className="materialui"  /></td>
        <td>Material UI</td>
        <td><SiHtml5 className="html"/></td>
        <td>HTML5</td>
        <td><img className="css" src={css} /></td>
        <td>CSS3</td>
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
        <td> <GiJasmine className="jasmine2" /></td>
        <td>Jasmine</td>
        <td><SiJest className="jest"/></td>
        <td>Jest</td>
        <td><SiMocha className="mocha"/></td>
        <td>Mocha</td>
        <td><FaReact className="react" /></td>
        <td>React</td>
        <td><SiBootstrap className="bootstrap" /></td>
        <td>Bootstrap</td>
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