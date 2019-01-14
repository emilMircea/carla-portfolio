import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./nav.css";
import "animate.css/animate.min.css";
import Link from "next/link";

const LinkWrap = ({children, setFirstLoad}) => (
  <li onClick={setFirstLoad}>
    {children}
  </li>
)

class Nav extends PureComponent {
  state = {
    firstLoad: true
  }


  render() {
    const { setFirstLoad } = this;
    const { path } = this.props;
    const { firstLoad } = this.state;
    
    return <ul style={{animationDuration: '.4s'}} className={`nav ${firstLoad ? "animated fadeInRight" : ""}`}>
        <LinkWrap setFirstLoad={setFirstLoad}>
          <Link prefetch href="/">
            <a className={`${path === "/" ? "active" : null}`}>Sobre Mi</a>
          </Link>
        </LinkWrap>
        <LinkWrap setFirstLoad={setFirstLoad}>
          <Link prefetch href="/experience">
            <a className={`${path === "/experience" ? "active" : null}`}>
              Experiencia
            </a>
          </Link>
        </LinkWrap>
        <li>
          <Link prefetch href="/education">
            <a className={`${path === "/education" ? "active" : null}`}>
              Educación
            </a>
          </Link>
        </li>
        <li>
          <Link prefetch href="/publications">
            <a className={`${path === "/publications" ? "active" : null}`}>
              Publicationes
            </a>
          </Link>
        </li>
      </ul>;
  }
}

Nav.propTypes = {
  path: PropTypes.string.isRequired
};

export default Nav;
