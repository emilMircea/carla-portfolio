import React from "react";
import PropTypes from "prop-types";

const Title = ({ children }) => (
  <h1 
    className='page-title'
  >
    {children}
  </h1>
);

const PageTitle = ({ imagePath, title }) => (
  <div style={{ display: "flex" }}>
    <img src={imagePath} style={{ zIndex: "10" }} />
    {title ? <Title>{title}</Title> : null}
  </div>
);

PageTitle.propTypes = {
  imagePath: PropTypes.string.isRequired,
  title: PropTypes.string
};

export default PageTitle;
