import React from "react";
import "./index.css";
import Sidebar from "../components/sidebar/Sidebar";
import Content from "../components/Content";

const Education = () => {
  return (
    <div className="grid-container">
      <div className="sidebar-wrapper">
        <Sidebar />
      </div>
      <div className="Content">
        <Content>some specific text for the Education page!</Content>
      </div>
    </div>
  );
};

export default Education;
