import Navbar from "./Navbar";
import Linkedin from "../assets/images/linkedin.png";
import Instagram from "../assets/images/instagram.png";

function Homepage() {
  return (
    <div className="pageContainer">
      <div className="title">
          <h1>Joseph Harris</h1>
          <h2>Software Developer who specialises in JavaScript and React</h2>
          <div className="logos">
            <a
              href="https://www.linkedin.com/feed/?trk=homepage-basic_sign-in-submit"
              alt="Linkedin Logo"
            >
              <img src={Linkedin} alt="Linkedin Logo"></img>
            </a>
            <a href="https://www.instagram.com/">
              <img src={Instagram} alt="Instagram Logo"></img>
            </a>
          </div>
          <Navbar />
        </div>
      </div>
  );
}

export default Homepage;
