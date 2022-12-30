import { Link } from "react-router-dom";
import '../styles/intro.css';

const Intro = () => {
  return(
    <div className="container">
      <div className="button-container">
        <span className="mask">HOVER</span>
        <Link to="Home">
          <button type="button" name="Hover">HOVER</button>
        </Link>
      </div>
    </div>
    /*<section className="intro-section buttons">
      <Link to="Home">
        <button className="blob-btn">
          Press Me
        </button> 
       </Link>
    </section>
    */
    
  )
}

export default Intro;