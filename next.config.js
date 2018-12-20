// next.config.js
const withImages = require("next-images");
const withCSS = require("@zeit/next-css");
const withFonts = require("next-fonts");
module.exports = withFonts(withImages(withCSS()));
