import BootstrapImage from "./assets/images/bootstrap.png";
import HtmlImage from "./assets/images/html5.png";
import JavascriptImage from "./assets/images/javascript.png";
import ReactImage from "./assets/images/react.png";
import TypescriptImage from "./assets/images/typescript.png";
import PostgresqlImage from "./assets/images/database.png"
import GitHubImage from "./assets/images/github.png"


  function Skills() {
  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '30px'}} className="skillsLogo">
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
        <div className="iconElement6">
          <img src={PostgresqlImage} alt="postgresql image"></img>
          <p>PostgreSQL</p>
        </div>
        <div className="iconElement7">
          <img src={GitHubImage} alt="github image"></img>
          <p>GitHub</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
