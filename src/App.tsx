import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Nav from './components/Nav';
import Splash from './components/Splash';
import About from './components/About';
import Work from './components/Work';
import Toolkit from './components/Toolkit';
import Repos from './components/Repos';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      {/* Overlay */}
      <div className="textured-overlay"></div>
      {/* Container */}
      <div className="container">
        <Nav />
        <Splash />
        <About />
        <Work />
        <Toolkit />
        <Repos />
      </div>
      <Footer />
    </div>
  );
}

export default App;
