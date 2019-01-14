import React from "react";
import PropTypes from "prop-types";
import 'animate.css/animate.min.css'

const ParagComponent = ({lang, translation}) => {
  return (
    <div className='animated fadeIn'>
      {lang === "en"
        ? Object.values(translation.en.about).map((p, index) => (
            <p style={{letterSpacing: '.1rem'}} key={index}>{p}</p>
          ))
        : Object.values(translation.es.about).map((p, index) => (
          <p style={{ letterSpacing: '.1rem' }} key={index}>{p}</p>
          ))}
    </div>
  );
};

ParagComponent.propTypes = {
  translation: PropTypes.object.isRequired,
  lang: PropTypes.string,
};

export default ParagComponent;
