import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import About from '../About/About';
import Portfolio2 from '../Portfolio/Portfolio2';
import CV from '../CV/CV';
import ContactForm from '../Contact/ContactForm';
import Interests from '../Interests/Interests';


const Main = () => (
  <div>
  <BrowserRouter>
  <Switch>
    <Route exact path="/" component={About} />
    <Route exact path="/about" component={About} />
    <Portfolio2 exact path="/portfolio" component={Portfolio2} />
    <CV exact path="/cv" component={CV} />
    <ContactForm exact path="/contact" component={ContactForm} />
    <Interests exact path="/interests" component={Interests} />
  </Switch>
  </BrowserRouter>
  </div>
)

export default Main;