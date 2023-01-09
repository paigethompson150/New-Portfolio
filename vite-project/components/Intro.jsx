import { Link } from "react-router-dom";
import '../styles/intro.css';

const Intro = () => {
  let audio = new Audio('../music/Crumb - Ghostride.mp3')
    const start = () => {
      audio.play()
    }

  return(
    <div className="container">
      <div className="button-container">
        <span className="mask">Enter</span>
        <Link to="About">
          <button onClick={start} type="button" name="Hover">Enter</button>
        </Link>
      </div>
    </div>   
  )
}

export default Intro;