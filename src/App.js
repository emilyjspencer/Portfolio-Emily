import React from 'react';
import './App.css';
import NavBar from './shared/components/Navigation/NavBar';
import Main from './website/components/Main/Main';
import Footer from './website/components/UI/Footer/Footer';



const App = ()  => {
  return (
    <div className="App">
      <NavBar />
      <br />
      <Main />
    </div>
  );
}

export default App;
