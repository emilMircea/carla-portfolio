import React, { PureComponent } from "react";
import Nav from "./Nav";
import Initials from "./Initials";
import "./sidebar.css";
import "animate.css/animate.min.css";

export default class Sidebar extends PureComponent {

  render() {
    const { path } = this.props;
    const imagePath = "../../static";
    const { bg } = this.props;

    return (
      <div
        className="Sidebar"
        style={{
          backgroundImage: `url(${imagePath}/${bg}.png)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      >
        <Nav path={path} />
        <div className="first-col">
          {path === "/" ? (
            <img src={`${imagePath}/carla-avatar.png`} />
          ) : (
            <div style={{background: 'transparent'}} />
          )}
        </div>
        <div className="second-col">
          {path === "/" ? (
            <Initials initials="CL" />
          ) : (
            <Initials />
          )}
          {path === "/experience" ? (
            <Initials initials="EX" />
          ) : (
              <Initials />
          )}
          {path === "/education" ? (
            <Initials initials="ED" />
          ) : (
              <Initials />
          )}
          {path === "/publications" ? (
            <Initials initials="PB" />
          ) : (
              <Initials />
          )}
        </div>
      </div>
    );
  }
}
