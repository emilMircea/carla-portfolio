import React from "react";
import Link from "next/link";

const Nav = () => (
  <ul className="nav">
    <li>
      <Link prefetch href="/about">
        <a>About me</a>
      </Link>
    </li>
    <li>
      <Link prefetch href="/experience">
        <a>Experience</a>
      </Link>
    </li>
    <li>
      <Link prefetch href="/education">
        <a>Education</a>
      </Link>
    </li>
    <li>
      <Link prefetch href="/publications">
        <a>Publications</a>
      </Link>
    </li>
  </ul>
);

export default Nav;
