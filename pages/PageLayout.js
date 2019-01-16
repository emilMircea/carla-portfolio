import React, { PureComponent, Component } from "react";
import PropTypes from "prop-types";
import Sidebar from "../components/sidebar/Sidebar";
import Head from "next/head";
import "./layout.css";

const PageLayout = ({ children }) => (
  <div className="grid-container">
    <Head>
      <title>Carla Lluis Portfolio</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {children}
  </div>
);

export default PageLayout;
