import { Link } from 'react-router-dom'; 

function Navbar() {
  return (


    <div className="custom-navbar">
      <ul className="homepageNavbar">
     
        <li><Link to="/projects"><span className="boldOnHover">Projects</span></Link></li> 
        <li><Link to="/info"><span className="boldOnHover">Info</span></Link></li> 
        <li><Link to="/contact"><span className="boldOnHover">Contact</span></Link></li>
      </ul>
    </div>
  );
}

export default Navbar;