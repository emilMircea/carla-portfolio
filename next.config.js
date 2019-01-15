// next.config.js
const withImages = require("next-images");
const withCSS = require("@zeit/next-css");
const withFonts = require("next-fonts");
// const withSass = require("@zeit/next-sass");
module.exports = withFonts(withImages(withCSS()));
