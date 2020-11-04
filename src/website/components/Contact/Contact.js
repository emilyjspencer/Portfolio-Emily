import React from 'react';

import Form from './Form';
import { Animated } from "react-animated-css";

import Header from './Header';
import Footer from './Footer';
import './Form.css';

import './Contact.css';

import flowers7grey from './images/cards/flowers7grey.png';


const Contact = () => {

  return (
    <>
  <Header />
  <div className="contact" >
      <h1>Contact me</h1>
   
      <Form />
     
      </div>
      <Footer />
      </>
    )

 
 }

 export default Contact;
   
     
   