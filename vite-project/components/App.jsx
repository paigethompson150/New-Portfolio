import '../styles/App.css'
//importing components from react-router-dom package
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';

//Import Intro Component
import Intro from './Intro';

//Import Home Component
import Home from './Home';

//Import Contact
import Contact from './Contact';



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />}></Route>
        <Route path="/Home" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
    
  )
}


