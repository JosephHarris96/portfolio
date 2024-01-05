import { Link } from 'react-router-dom'; 



function Navbar() {
  return (


    <div className="custom-navbar">
      <ul className="homepageNavbar">
     
        <li><Link to="/projects"><span className="boldOnHover" id="projects">Projects</span></Link></li> 
        <li><Link to="/info"><span className="boldOnHover" id="info">Info</span></Link></li> 
        <li><Link to="/contact"><span className="boldOnHover">Contact</span></Link></li>
        <li><Link to="/skills"><span className="boldOnHover">Skills</span></Link></li>
      </ul>
    </div>
  );
}

export default Navbar;