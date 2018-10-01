import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";
import Header from "./Header";
import About from "./About";
import Home from "./Home";
import Projects from "./Projects";
import Experience from "./Experience";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/experience" component={Experience} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
