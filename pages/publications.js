import React from "react";
import "./index.css";
import Sidebar from "../components/sidebar/Sidebar";
import Content from "../components/Content";

const Publication = () => (
  <li>
    Subirana, I.; Lucas, G.; Esnaola, M.; Lluís-Ganella, C.; Elosua, R.;
    Gonzalez, JR. Exact distribution of genetic risk score at the population
    level. Submitted.
  </li>
);

const Publications = (props) => {
  return <div className="grid-container">
      <div className="sidebar-wrapper">
      <Sidebar path={props.url.pathname} />
      </div>
      <div className="Content">
        <Content>
          <h1>Publications</h1>
          <Publication />
          </Content>
      </div>
    </div>;
};

export default Publications;
