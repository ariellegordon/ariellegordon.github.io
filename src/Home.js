import React, { Component } from "react";
import "./About.scss";
import data from "./data";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      inspiration: {}
    };
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }

  handleMouseOver() {
    let route1 = document.querySelector("#route1");
    let route2 = document.querySelector("#route2");
    let route3 = document.querySelector("#route3");
    [route1, route2, route3].forEach(elem => elem.classList.remove("visible"));
  }

  componentDidMount() {
    const random = Math.floor(Math.random() * data.length);
    const inspo = data[random];
    this.setState({ inspiration: inspo });
  }

  render() {
    const { inspiration } = this.state;
    return (
      <div className="About-page" onMouseOver={this.handleMouseOver}>
        <h3>Welcome to my website.</h3>
        <p>
          As a developer, I take inspiration from a wide range of philosophers,
          mathematicians, artists, and otherwise great thinkers.
        </p>
        <p>Today, my inspiration is {inspiration.name}.</p>
        <div className="About-image">
          <img src={inspiration.image} />
        </div>
      </div>
    );
  }
}

export default Home;
