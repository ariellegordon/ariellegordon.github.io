import React, { Component } from "react";
import "./About.css";
import "./Project.scss";
import ProjectCard from "./ProjectCard";
import projects from "./project-list";

class Projects extends Component {
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
      <div className="About-page" onMouseOver={this.handleMouseOver}>
        <div className="project-list">
          {projects.map(project => (
            <ProjectCard project={project} key={project.name} />
          ))}
        </div>
      </div>
    );
  }
}

export default Projects;
