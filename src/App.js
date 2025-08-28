import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';

import Rooms from './components/Rooms';
import Amenities from './components/Amenities';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />
        
        <Rooms />
        <Amenities />
        <Gallery />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
