import React from 'react';
import { FaGithub } from "react-icons/fa";

import './Footer.css';


const Footer = () => {

  const githubHandler = (url) => {
    window.open(url, "_blank");
  };

return (
    <div className="footer">
        <br />
        <br />
        <br />
        <br />
        <FaGithub
           className="githubicon"
           onClick={() =>
           githubHandler("https://github.com/emilyjspencer")
         }
          title="github.com/emilyjspencer"
          />
        <br />
        <br /> 
    </div>
  )

}

export default Footer;