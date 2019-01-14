import React from 'react'
import PropTypes from "prop-types";
import 'animate.css/animate.min.css';

const Publication = ({ children, paperTitle, paperUrl }) => (
  <li className='animated fadeIn'>
    {children}
    <i>. {paperTitle}</i>
    {paperUrl ? <a href={paperUrl}>. DOI</a> : null}
  </li>
);


Publication.propTypes = {
  paperTitle: PropTypes.string.isRequired,
  paperUrl: PropTypes.string
}

export default Publication
