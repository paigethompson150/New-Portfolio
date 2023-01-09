import { Link } from 'react-router-dom';
import '../styles/nav.css'

const NavBar = () => {
  return (
    <div>
      <section className="navBar">
        <ul>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Projects">Projects</Link>
          </li>
          <li>
          <Link to="/Contact">Contact</Link>
          </li>
        </ul>
        
        
      </section>
    </div>
  )
}

export default NavBar;