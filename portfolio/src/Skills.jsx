import { useEffect, useState } from "react";
import BootstrapImage from "./assets/images/bootstrap.png";
import HtmlImage from "./assets/images/html5.png";
import JavascriptImage from "./assets/images/javascript.png";
import ReactImage from "./assets/images/react.png";
import TypescriptImage from "./assets/images/typescript.png";
import { Link } from "react-router-dom";
import SocialMediaLinks from "./components/SocialMediaLinks";


function Skills() {
  return (
    <div>
      <h1>Skills</h1>
      <Link to="/homepage">
        <p>Home</p>
      </Link>
      <SocialMediaLinks/>
      <div className="skillsLogo">
        <div className="iconElement1">
          <img src={BootstrapImage}></img>
          <p>Bootstrap</p>
        </div>
        <div className="iconElement2">
          <img src={HtmlImage}></img>
          <p>HTML5</p>
        </div>
        <div className="iconElement3">
          <img src={JavascriptImage}></img>
          <p>JavaScript</p>
        </div>
        <div className="iconElement4">
          <img src={ReactImage}></img>
          <p>React</p>
        </div>
        <div className="iconElement5">
          <img src={TypescriptImage}></img>
          <p>TypeScript</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
