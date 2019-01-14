import React from "react";
import PropTypes from "prop-types";

const TranslationLink = ({ lang, changeLang }) => (
  <a 
    className='translation-link' 
    onClick={changeLang}
    style={{
      border: "none",
      color: "rgba(21, 199, 252, 1)",
      position: "absolute",
      top: "2rem",
      left: "4rem",
      cursor: 'pointer',
      textDecoration: 'underline',
      fontSize: '.8rem'
    }}
    >
    {lang ? "Read in English" : "Lee en Español"}
  </a>
)

TranslationLink.propTypes = {
  lang: PropTypes.bool.isRequired,
  changeLang: PropTypes.func.isRequired
};

export default TranslationLink;
