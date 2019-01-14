import React from 'react';
import PropTypes from "prop-types";
import 'animate.css/animate.css';

const ExperienceParag = ({
  date,
  position,
  companyName,
  companyUrl,
  children
}) => (
  <li className="animated fadeIn">
    <div style={{ display: "flex" }}>
      <i style={{ marginRight: "1rem" }}>{date}</i>
      <b style={{ marginRight: "1rem" }}>{position}</b>
      {companyName && companyUrl ? (
        <a href={companyUrl}>@{companyName}</a>
      ) : (
        <span>{companyName}</span>
      )}
    </div>
    <p>{children}</p>
  </li>
);

ExperienceParag.propTypes = {
  companyUrl: PropTypes.string,
  companyName: PropTypes.string,
  date: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired
};


export default ExperienceParag
