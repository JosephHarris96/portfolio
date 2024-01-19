// import { Link } from 'react-router-dom'; 
import {Link} from 'react-scroll'



function Navbar() {
  return (


    <div className="custom-navbar">
      <ul className="homepageNavbar">
     
        <li><Link smooth={true} duration={150} to="projects"><span className="boldOnHover" id="projects">Projects</span></Link></li> 
        <li><Link smooth={true} duration={150} to="info"><span className="boldOnHover" id="info">Info</span></Link></li> 
        <li><Link to="/contact"><span className="boldOnHover">Contact</span></Link></li>
        <li><Link smooth={true} duration={150} to="skills"><span className="boldOnHover">Skills</span></Link></li>
      </ul>
    </div>
  );
}

export default Navbar;