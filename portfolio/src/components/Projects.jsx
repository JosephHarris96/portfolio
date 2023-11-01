import Navbar from "./Navbar";

function Projects() {
  return (
    <div className="project-heading">
      <h1>Projects</h1>

      <Navbar />
      <div className="projectList">
        <div>
        <a className="projectItem">Bancone</a>
        </div>
        <div className="banconeProject">
        <p>2023 / The Jump</p>
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
