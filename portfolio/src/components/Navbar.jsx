import React from 'react';
import { Link } from 'react-router-dom'; 

function Navbar() {
  return (
    <div className="custom-navbar">
      <ul className="homepageNavbar">
        <li><Link to="/projects">Projects</Link></li> 
        <li><Link to="/about">About Me</Link></li> 
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;