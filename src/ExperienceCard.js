import React, { Component } from "react";
import "./Experience.scss";

class ExperienceCard extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let dropdown = document.querySelector(".experience-dropdown-content");
    dropdown.classList.toggle("visible");
  }
  render() {
    const { experience } = this.props;
    return (
      <div key={experience.name}>
        <h2>{experience.name}</h2>
        <h3 onClick={this.handleClick}>{experience.title}</h3>
        <p>{experience.years}</p>
        <ul>
          {experience.description.map(desc => (
            <li className="experience-item" key={desc.slice(5)}>
              {desc}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ExperienceCard;
