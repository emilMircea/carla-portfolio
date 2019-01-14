import React from "react";
import "animate.css/animate.min.css";
import PropTypes from "prop-types";

const Initials = ({ initials, left }) => (
  <div
    className="animated slideInLeft"
    style={{
      backgroundImage: `url(../static/${initials}.svg)`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      width: "100%",
      height: "150px",
      position: "relative",
      left: `${left ? `-${left}rem` : "-1.6rem"}`,
      animationDuration: ".5s"
    }}
  />
);

Initials.propTypes = {
  initials: PropTypes.string.isRequired,
  left: PropTypes.string
};

export default Initials;
