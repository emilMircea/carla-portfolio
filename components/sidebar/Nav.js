import React from "react";
import { withRouter } from "next/router";

import Link from "next/link";

const Nav = props => (
  <ul className="nav">
    <li>
      <Link prefetch href="/">
        <a className={`${props.path === "/" ? "active" : null}`}>About me</a>
      </Link>
    </li>
    <li>
      <Link prefetch href="/experience">
        <a className={`${props.path === "/experience" ? "active" : null}`}>
          Experience
        </a>
      </Link>
    </li>
    <li>
      <Link prefetch href="/education">
        <a className={`${props.path === "/education" ? "active" : null}`}>
          Education
        </a>
      </Link>
    </li>
    <li>
      <Link prefetch href="/publications">
        <a className={`${props.path === "/publications" ? "active" : null}`}>
          Publications
        </a>
      </Link>
    </li>
  </ul>
);

export default Nav;
