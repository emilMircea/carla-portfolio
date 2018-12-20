import React from "react";
import "./index.css";
import Sidebar from "../components/sidebar/Sidebar";
import Content from "../components/Content";

const DateCompany = props => (
  <li style={{ display: "flex" }}>
    <i style={{ marginRight: "1rem" }}>{props.date}</i>
    <b>{props.company}</b>
  </li>
);

const Responsibilities = props => <p>{props.children}</p>;

const Experience = (props) => {
  return <div className="grid-container">
      <div className="sidebar-wrapper">
        <Sidebar path={props.url.pathname} />
      </div>
      <div className="Content">
        <Content>
          <h1>Experience</h1>
          <DateCompany date="06 / 2017 – Present" company="MSL @ Shionogi" />
          <Responsibilities>
            I have represented the company national and internationally, both
            in trainings to the sales reps and participating in congresses.
            Thanks to my previous experience in the research field, I have
            been involved in research projects of the company, including the
            phases of design, analysis and interpretation of results.
          </Responsibilities>
        </Content>
      </div>
    </div>;
};

export default Experience;
