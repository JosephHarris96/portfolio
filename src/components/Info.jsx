import { useEffect } from "react";

function Info() {
  useEffect(() => {
    const infoSection = document.getElementById('infoSection');
    if (infoSection) {
      infoSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
  return (
    <div className="infoContainer" id="infoSection">
    <div className="infoBorder">  
      <h2>Hi! I m Joseph Harris, a Front End Junior Software Developer who specialises in JavaScript and React</h2>
      <p>Have a browse through my work and Linkedin!</p>
      <div className="buttons">
        <a href="https://github.com/JosephHarris96" target="_blank" rel="noopener noreferrer">
      <button className="gitBtn">GitHub</button>
      </a>
      <a href="https://www.linkedin.com/in/joseph-harris-7a97a41aa/" target="_blank" rel="noopener noreferrer">
      <button className="linkedinBtn">Linkedin</button>
      </a>
      </div>
    </div>
    </div>
  )
}

export default Info
