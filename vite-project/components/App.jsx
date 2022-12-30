import '../styles/App.css'
//Import components from react-router-dom package
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';

import Intro from './Intro';
import Home from './Home';
import Contact from './Contact';
import Error from './Error';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="Home" element={<Home />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </BrowserRouter> 
  )
}


