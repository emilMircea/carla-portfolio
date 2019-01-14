import React, { PureComponent } from "react";
import Nav from "./Nav";
import Initials from "./Initials";
import "./sidebar.css";
import "animate.css/animate.min.css";

export default class Sidebar extends PureComponent {
  state = {
    firstImage: "header",
    secondImage: "ex",
    thirdImage: "ed",
    fourthImage: "pub"
  };


  render() {
    const { path } = this.props;
    const imagePath = "../../static";
    const { bg } = this.props;

    return (
      <div
        className="Sidebar animated fadeIn"
        style={{ backgroundImage: `url(${imagePath}/${bg ? bg : null}.png)` }}
      >
        <Nav path={path} />
        <div className="first-col">
          {path === "/" ? <img src={`${imagePath}/carla-avatar.png`} /> : null}
        </div>
        <div className="second-col">
          {path === "/" ? <Initials initials="CL" /> : null}
          {path === "/experience" ? <Initials initials="EX" /> : null}
          {path === "/education" ? <Initials initials="ED" /> : null}
          {path === "/publications" ? <Initials initials="PB" /> : null}
        </div>
      </div>
    );
  }
}
