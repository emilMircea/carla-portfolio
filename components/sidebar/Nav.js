import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./nav.css";
import "animate.css/animate.min.css";
import Link from "next/link";

class Nav extends PureComponent {
  render() {
    const { path } = this.props;

    return (
      <ul
        style={{ animationDuration: ".2s" }}
        className="nav animated fadeInRight"
      >
        <li>
          <Link prefetch href="/">
            <a className={`${path === "/" ? "active" : ""}`}>Sobre Mi</a>
          </Link>
        </li>
        <li>
          <Link prefetch href="/experience">
            <a className={`${path === "/experience" ? "active" : ""}`}>
              Experiencia
            </a>
          </Link>
        </li>
        <li>
          <Link prefetch href="/education">
            <a className={`${path === "/education" ? "active" : ""}`}>
              Educación
            </a>
          </Link>
        </li>
        <li>
          <Link prefetch href="/publications">
            <a className={`${path === "/publications" ? "active" : ""}`}>
              Publicationes
            </a>
          </Link>
        </li>
      </ul>
    );
  }
}

Nav.propTypes = {
  path: PropTypes.string.isRequired
};

export default Nav;
