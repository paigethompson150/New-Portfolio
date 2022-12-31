import React, {Component} from "react";
import '../styles/App.css'
//Import components from react-router-dom package
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
//Import sound components
import Sound from 'react-sound';

import Intro from './Intro';
import Home from './Home';
import Contact from './Contact';
import Error from './Error';
import GhostRide from '../music/Crumb - Ghostride.mp3';
import {Howl, Howler} from 'howler';

const music = [
  {sound: GhostRide, label: 'GhostRide'}
]

class App extends Component {

  render() {
  
    return (
      <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="Home" element={<Home />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="*" element={<Error/>} />
        </Routes>
        </BrowserRouter> 
       
      </div>
      
    )
  }
}
export default App;

