import React, { Component } from "react";
import Nav from "./Nav";
import "./sidebar.css";

export default class Sidebar extends Component {
  render() {
    const { path } = this.props;
    return (
      <div className="Sidebar">
        <Nav path={path} />
        <div className="first-col" />
        <div className="second-col">
          <p className="main-number">
            0{path === "/" ? <span className="slide-top">1</span> : null}
            {path === "/experience" ? (
              <span className="slide-top">2</span>
            ) : null}
            {path === "/education" ? (
              <span className="slide-top">3</span>
            ) : null}
            {path === "/publications" ? (
              <span className="slide-top">4</span>
            ) : null}
          </p>
        </div>
      </div>
    );
  }
}
