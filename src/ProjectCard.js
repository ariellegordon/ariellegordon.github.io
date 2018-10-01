import React, { Component } from "react";
import "./Project.scss";

const ProjectCard = props => {
  const { project } = props;
  return (
    <div className="project-card">
      <div className="project-inner">
        <div>
          <a href={project.link}>
            <h2>{project.name}</h2>
          </a>
          <a href={project.link}>
            <div className="project-image">
              <img src={project.image} />
            </div>
          </a>
          <p>{project.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
