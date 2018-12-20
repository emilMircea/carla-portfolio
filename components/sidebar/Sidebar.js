import React from "react";
import Nav from './Nav'
import "./sidebar.css";



const Sidebar = (props) => {
  return (
    <div className='Sidebar'>
      <Nav />
      <div className="first-col"></div>
      <div className="second-col">01</div>
    </div>
  );
};

export default Sidebar;
