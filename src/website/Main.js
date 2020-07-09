import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Homepage from './Homepage';
import About from './About';
import Portfolio from './Portfolio';
import CV from './CV';



const Main = () => (
  <BrowserRouter>
  <Switch>
    <Route exact path="/" component={Homepage} />
    <About exact path="/about" component={About} />
    <Portfolio exact path="/portfolio" component={Portfolio} />
    <CV exact path="/cv" component={CV} />
  </Switch>
  </BrowserRouter>
)

export default Main;