import { Link } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
  return (
    <div>
      <section className="home-section">
        <h1>Home</h1>
        <Link to="Contact">
          <h1>
            Contact
          </h1>
        </Link>
      </section>
    </div>
  )
}

export default Home;