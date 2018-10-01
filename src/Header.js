import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.scss";
class Header extends Component {
  constructor() {
    super();
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }
  handleMouseOver() {
    let route1 = document.querySelector("#route1");
    let route2 = document.querySelector("#route2");
    let route3 = document.querySelector("#route3");
    [route1, route2, route3].forEach(elem => elem.classList.add("visible"));
  }
  render() {
    return (
      <div className="Header-Container" onMouseOver={this.handleMouseOver}>
        <div className="App-container" id="myHeader">
          <div className="info-container">
            <Link to="/" id="pinky">
              Arielle Gordon
            </Link>
          </div>

          <div className="contact-info">
            <h3 id="desc" className="contact">
              Software Engineer
            </h3>

            <div className="contact-inner" id="contact-inner">
              <h3 className="contact">
                <a href="mailto:ariellelindsaygordon@gmail.com" target="_blank">
                  Email
                </a>
              </h3>
              <h3 className="contact">
                <a
                  href="https://www.linkedin.com/in/ariellegordon/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </h3>
              <h3 className="contact">
                <a href="https://github.com/ariellegordon" target="_blank">
                  GitHub
                </a>
              </h3>
            </div>
            <div className="contact-inner" id="route-inner">
              <div className="contact" id="route1">
                <Link to="/about">About</Link>
              </div>
              <div className="contact" id="route2">
                <Link to="/projects">Projects</Link>
              </div>
              <div className="contact" id="route3">
                <Link to="/experience">Experience</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
