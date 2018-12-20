import React from "react";
import "./index.css";
import Sidebar from "../components/sidebar/Sidebar";
import Content from "../components/Content";

const Education = (props) => {
  return (
    <div className="grid-container">
      <Sidebar path={props.url.pathname} />
      <div className="sidebar-wrapper">
      </div>
      <div className="Content">
        <Content>
          <h1>EDUCATION</h1>
          <ul style={{ lineHeight: "2rem" }}>
            <li>
              September 2008 – June 2012 PhD in Biomedical Research, Pompeu
              Fabra University, Barcelona (Spain). <a href='#nowhere'>See the thesis here.</a>
            </li>
            <li>
              September 2007 – August 2008 Master in Biomedical Research, Pompeu
              Fabra University, Barcelona (Spain).
            </li>
            <li>
              September 2005 – August 2007 Bachelor’s Degree in Biochemistry,
              Autonomous University of Barcelona, Barcelona (Spain).
            </li>
            <li>
              September 2002 – August 2006 Bachelor’s Degree in Biology,
              Autonomous University of Barcelona, Barcelona (Spain).
            </li>
            <li>
              September 2000 – July 2002 High School in Biological Sciences,
              Lestonnac, Barcelona (Spain).
            </li>
          </ul>
        </Content>
      </div>
    </div>
  );
};

export default Education;
