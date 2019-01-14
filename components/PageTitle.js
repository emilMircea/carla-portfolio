import React from "react";
import PropTypes from "prop-types";

const Title = ({ children }) => (
  <h1 style={{ marginLeft: "-1.15rem", zIndex: "1", marginTop: '2.5rem' }}>{children}</h1>
);

const PageTitle = ({ imagePath, title }) => (
  <div style={{ display: "flex" }}>
    <img src={imagePath} style={{ zIndex: "10" }} />
    {title ? <Title>{title}</Title> : null}
  </div>
);

PageTitle.propTypes = {
  imagePath: PropTypes.string.isRequired
};

export default PageTitle;
