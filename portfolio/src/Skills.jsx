import BootstrapImage from "./assets/images/bootstrap.png";
import HtmlImage from "./assets/images/html5.png";
import JavascriptImage from "./assets/images/javascript.png";
import ReactImage from "./assets/images/react.png";
import TypescriptImage from "./assets/images/typescript.png";

function Skills() {
  return (
    <div>
      <h1>Skills</h1>
      <div className="skillsLogo">
        <div>
          <img src={BootstrapImage}></img>
          <p>Bootsrap</p>
        </div>
        <div>
          <img src={HtmlImage}></img>
          <p>HTML5</p>
        </div>
        <div>
          <img src={JavascriptImage}></img>
          <p>JavaScript</p>
        </div>
        <div>
          <img src={ReactImage}></img>
          <p>React</p>
        </div>
        <div>
          <img src={TypescriptImage}></img>
          <p>TypeScript</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
