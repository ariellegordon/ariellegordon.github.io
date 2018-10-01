import React, { Component } from "react";
import "./About.scss";
import personalPhoto from "./personal-photo.jpeg";

class About extends Component {
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
        <div className="About-container">
          <div className="About-text-photo">
            <div className="About-inner">
              <h3>About</h3>
              <p>
                Arielle is a software engineer, writer, and occasional comedian
                living in Brooklyn, New York. She's especially interested in{" "}
                <strong>
                  data visualization, front-end performance, and test driven
                  development
                </strong>
                . When she's not helping students learn full-stack JavaScript at
                Grace Hopper, she is most likely writing about music. Before all
                that, she was a student at Northwestern University, where she
                studied film and political science.
              </p>
            </div>
            <div className="personal-photo">
              <img src={personalPhoto} className="responsive" />
              <figcaption>Wearing many hats at SXSW 2018</figcaption>
            </div>
          </div>
          <h3>Published work</h3>
          <div className="publications">
            <div>
              <p>
                <strong>Spin</strong>
              </p>
              <div className="published-work">
                <a href="https://www.spin.com/2018/06/snail-mail-lush-review/">
                  Review: Snail Mail, <em>Lush</em>
                </a>
                <a href="https://www.spin.com/2018/05/dj-koze-knock-knock-review/">
                  Review: DJ Koze, <em>Knock Knock</em>
                </a>
                <a href="https://www.spin.com/2018/04/hop-along-bark-your-head-off-dog-review/">
                  Review: Hop Along, <em>Bark Your Head Off, Dog</em>
                </a>
                <a href="https://www.spin.com/2018/03/ed-schraders-music-beats-riddles-album-review/">
                  Review: Ed Schrader's Music Beat, <em>Riddles</em>
                </a>
                <a href="https://www.spin.com/2018/01/fall-out-boy-wilson-expensive-mistakes-track-review/">
                  Track Review: Fall Out Boy, "Wilson (Expensive Mistakes)"
                </a>
                <a href="https://www.spin.com/2018/01/superchunk-erasure-track-review/">
                  Track Review: Superchunk, "Erasure"
                </a>
                <a href="https://www.spin.com/2017/11/fever-ray-plunge-review/">
                  Review: Fever Ray, <em>Plunge</em>
                </a>
                <a href="https://www.spin.com/2017/10/weezer-pacific-daydream-review/">
                  Review: Weezer, <em>Pacific Daydream</em>
                </a>
              </div>
            </div>
            <div>
              <p>
                <strong>Invisible Oranges</strong>
              </p>
              <div className="published-work">
                <a href="http://www.invisibleoranges.com/uniform-interview/">
                  Profile: NYC noise outfit Uniform on their new album{" "}
                  <em>The Long Walk</em>
                </a>
                <a href="http://www.invisibleoranges.com/integrity-krieg/">
                  Review: Integrity and Krieg, Split EP
                </a>
                <a href="http://www.invisibleoranges.com/deafheaven-review-2018/">
                  Review: Deafheaven, <em>Ordinary Corrupt Human Love</em>
                </a>
              </div>
            </div>
            <div>
              <p>
                <strong>Resident Advisor</strong>
              </p>
              <div className="published-work">
                <a href="https://www.residentadvisor.net/reviews/23059">
                  Review: Paradise Garage Reunion
                </a>
              </div>
              <div>
                <p>
                  <strong>Pitchfork</strong>
                </p>
                <div className="published-work">
                  <a href="https://pitchfork.com/thepitch/1054-how-vampire-weekend-ended-up-playing-a-bernie-sanders-rally-at-a-stoner-frat/">
                    Feature: How Vampire Weekend Ended Up Playing a Bernie
                    Sanders Rally at a Stoner Frat
                  </a>
                </div>
                <div className="published-work">
                  <a href="https://pitchfork.com/reviews/albums/mutual-benefit-thunder-follows-the-light/">
                    Review: Mutual Benefit, <em>Thunder Follows the Light</em>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
