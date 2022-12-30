import { Link } from "react-router-dom";
import '../styles/intro.css';

const Intro = () => {
  return(
    <section className="intro-section buttons">
      <Link to="Home">
        <button className="blob-btn">
          Press Me
        </button> 
       </Link>
    </section>
  )
}

export default Intro;