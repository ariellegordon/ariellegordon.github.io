import React, { Component } from "react";
import experience from "./experience-list";
import ExperienceCard from "./ExperienceCard";
import "./Experience.scss";
import "./About.scss";

class Experience extends Component {
  constructor() {
    super();
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }
  handleMouseOver() {
    let route1 = document.querySelector("#route1");
    let route2 = document.querySelector("#route2");
    let route3 = document.querySelector("#route3");
    [route1, route2, route3].forEach(elem => elem.classList.remove("visible"));
  }
  render() {
    return (
      <div className="Experience-page" onMouseOver={this.handleMouseOver}>
        <h1>Skills</h1>
        <p>
          <strong>Front-end:</strong> JavaScript, React, React-Native, Redux,
          CSS3, HTML5
        </p>
        <p>
          <strong>Back-end:</strong> Node.js, Express, Firebase, PostGresQL
        </p>
        <h1>Work Experience</h1>
        <div className="experience-cards">
          {experience.map(exp => (
            <ExperienceCard experience={exp} />
          ))}
        </div>
      </div>
    );
  }
}

export default Experience;
