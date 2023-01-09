import React, {Component} from "react";
import '../styles/App.css'
//Import components from react-router-dom package
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
//Import sound components
import Sound from 'react-sound';

import Intro from './Intro';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import GhostRide from '../music/Crumb - Ghostride.mp3';
import {Howl, Howler} from 'howler';
import Projects from './Projects';

const music = [
  {sound: GhostRide, label: 'GhostRide'}
]

class App extends Component {

  render() {
  
    return (
      <div>
        <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Intro />} />
          <Route exact path="About" element={<About />} />
          <Route exact path="Projects" element={<Projects />} />
          <Route exact path="Contact" element={<Contact />} />
          <Route exact path="*" element={<Error/>} />
        </Routes>
        </BrowserRouter> 
       
      </div>
      
    )
  }
}
export default App;

