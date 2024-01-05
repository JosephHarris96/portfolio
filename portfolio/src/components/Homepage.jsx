import Navbar from "./Navbar";
import SocialMediaLinks from "./SocialMediaLinks";
import Projects from "./Projects";
import BootstrapImage from "../assets/images/bootstrap.png"
import Html5Image from "../assets/images/html5.png"
import JavascriptImage from "../assets/images/javascript.png"
import ReactImage from "../assets/images/react.png"
import TypescriptImage from "../assets/images/typescript.png"
import PostgresqlImage from "../assets/images/database.png"
import GitHubImage from "../assets/images/github.png"
import MongoDbImage from "../assets/images/mongodb.png"
import NodeJsImage from "../assets/images/nodejs.png"
import Footer from "./Footer";
import Info from "./Info";




function Homepage() {  
  return (
    <div className="pageContainer" style={{ border: '2px solid #ccc', padding: '10px', margin: '20px' }}>
      <section>
        <div className="title">
          <div className="mainTitle">
          <h1>Joseph Harris</h1>
          </div>
          <h2>Software Developer who specializes in JavaScript and React</h2>
          <p style={{ transform: 'rotate(-90deg)', transformOrigin: 'left bottom', position: 'fixed', left: '28px', bottom: '65%', whiteSpace: 'nowrap', fontSize: '25px'}}>
            Joseph Harris' Portfolio
          </p>
          
          <SocialMediaLinks />
          <Navbar />
          <Info />
        </div>
      </section>
      <section>
      <section>
  <div className="skillsHeading">
    <h1>Skills</h1>
  </div>
  <div className="skillsImages">
    <div>
    <img className="skillImage" src={BootstrapImage} alt="Bootstrap" />
    <p>Bootstrap</p>
    </div>
    <div>
    <img className="skillImage" src={Html5Image} alt="HTML5" />
    <p>HTML5</p>
    </div>
    <div>
    <img className="skillImage" src={JavascriptImage} alt="JavaScript" />
    <p>JavaScript</p>
    </div>
    <div>
    <img className="skillImage" src={ReactImage} alt="React" />
    <p>React</p>
    </div>
    <div>
    <img className="skillImage" src={TypescriptImage} alt="TypeScript" />
    <p>TypeScript</p>
    </div>
    <div>
    <img className="skillImage" src={PostgresqlImage} alt="Postgresql" />
    <p>PostgreSQL</p>
    </div>
    <div>
      <img className="skillImage" src={GitHubImage} alt="GitHub" />
      <p>GitHub</p>
    </div>
    <div>
      <img className="skillImage" src={MongoDbImage} alt="MongoDB" />
      <p>MongoDB</p>
    </div>
    <div>
      <img className="skillImage" src={NodeJsImage} alt="NodeJS" />
      <p>Node.JS</p>
    </div>
  </div>
</section>

        <Projects/>
      </section>
      <section>
      </section>
      <Footer/>
    </div>
  );
}

export default Homepage;
