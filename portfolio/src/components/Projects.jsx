import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="project-heading">
      <h1>Projects</h1>
      <Link to="/homepage">
        <p>Home</p>
      </Link>
      <div className="projectList">
        <div>
          <a className="projectItem">Bancone</a>
        </div>
        <div className="banconeProject">
          <p>2023 / The Jumpfff</p>
        </div>
        <div>
          <a className="projectItem">Weather App</a>
        </div>
        <div className="weatherAppProject">
          <p>2023 / The Jump</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
