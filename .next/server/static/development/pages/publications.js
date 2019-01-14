module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Content.js":
/*!*******************************!*\
  !*** ./components/Content.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ethernum/Desktop/programming/carla/v2-carla-port/components/Content.js";


var Content = function Content(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Content",
    style: {
      margin: '3rem',
      padding: '1rem 1rem 0 1rem',
      lineHeight: '2rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (Content);

/***/ }),

/***/ "./components/PageTitle.js":
/*!*********************************!*\
  !*** ./components/PageTitle.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/ethernum/Desktop/programming/carla/v2-carla-port/components/PageTitle.js";



var Title = function Title(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    style: {
      marginLeft: "-1.15rem",
      zIndex: "1",
      marginTop: '2.5rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, children);
};

var PageTitle = function PageTitle(_ref2) {
  var imagePath = _ref2.imagePath,
      title = _ref2.title;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: "flex"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: imagePath,
    style: {
      zIndex: "10"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), title ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, title) : null);
};

PageTitle.propTypes = {
  imagePath: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PageTitle);

/***/ }),

/***/ "./components/publications/Publication.js":
/*!************************************************!*\
  !*** ./components/publications/Publication.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var animate_css_animate_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! animate.css/animate.min.css */ "./node_modules/animate.css/animate.min.css");
/* harmony import */ var animate_css_animate_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(animate_css_animate_min_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/ethernum/Desktop/programming/carla/v2-carla-port/components/publications/Publication.js";




var Publication = function Publication(_ref) {
  var children = _ref.children,
      paperTitle = _ref.paperTitle,
      paperUrl = _ref.paperUrl;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "animated fadeIn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, ". ", paperTitle), paperUrl ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: paperUrl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, ". DOI") : null);
};

Publication.propTypes = {
  paperTitle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  paperUrl: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Publication);

/***/ }),

/***/ "./components/sidebar/Initials.js":
/*!****************************************!*\
  !*** ./components/sidebar/Initials.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var animate_css_animate_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! animate.css/animate.min.css */ "./node_modules/animate.css/animate.min.css");
/* harmony import */ var animate_css_animate_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(animate_css_animate_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/ethernum/Desktop/programming/carla/v2-carla-port/components/sidebar/Initials.js";




var Initials = function Initials(_ref) {
  var initials = _ref.initials,
      left = _ref.left;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "animated slideInLeft",
    style: {
      backgroundImage: "url(../static/".concat(initials, ".svg)"),
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      width: "100%",
      height: "150px",
      position: "relative",
      left: "".concat(left ? "-".concat(left, "rem") : "-1.6rem"),
      animationDuration: ".5s"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  });
};

Initials.propTypes = {
  initials: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  left: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Initials);

/***/ }),

/***/ "./components/sidebar/Nav.js":
/*!***********************************!*\
  !*** ./components/sidebar/Nav.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nav_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav.css */ "./components/sidebar/nav.css");
/* harmony import */ var _nav_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nav_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var animate_css_animate_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! animate.css/animate.min.css */ "./node_modules/animate.css/animate.min.css");
/* harmony import */ var animate_css_animate_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(animate_css_animate_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/ethernum/Desktop/programming/carla/v2-carla-port/components/sidebar/Nav.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var LinkWrap = function LinkWrap(_ref) {
  var children = _ref.children,
      setFirstLoad = _ref.setFirstLoad;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    onClick: setFirstLoad,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, children);
};

var Nav =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Nav, _PureComponent);

  function Nav() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Nav);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Nav)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      firstLoad: true
    });

    return _this;
  }

  _createClass(Nav, [{
    key: "render",
    value: function render() {
      var setFirstLoad = this.setFirstLoad;
      var path = this.props.path;
      var firstLoad = this.state.firstLoad;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        style: {
          animationDuration: '.4s'
        },
        className: "nav ".concat(firstLoad ? "animated fadeInRight" : ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LinkWrap, {
        setFirstLoad: setFirstLoad,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        prefetch: true,
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "".concat(path === "/" ? "active" : null),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Sobre Mi"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LinkWrap, {
        setFirstLoad: setFirstLoad,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        prefetch: true,
        href: "/experience",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "".concat(path === "/experience" ? "active" : null),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "Experiencia"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        prefetch: true,
        href: "/education",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "".concat(path === "/education" ? "active" : null),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "Educaci\xF3n"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        prefetch: true,
        href: "/publications",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "".concat(path === "/publications" ? "active" : null),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Publicationes"))));
    }
  }]);

  return Nav;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

Nav.propTypes = {
  path: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./components/sidebar/Sidebar.js":
/*!***************************************!*\
  !*** ./components/sidebar/Sidebar.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sidebar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nav */ "./components/sidebar/Nav.js");
/* harmony import */ var _Initials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Initials */ "./components/sidebar/Initials.js");
/* harmony import */ var _sidebar_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar.css */ "./components/sidebar/sidebar.css");
/* harmony import */ var _sidebar_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sidebar_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var animate_css_animate_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! animate.css/animate.min.css */ "./node_modules/animate.css/animate.min.css");
/* harmony import */ var animate_css_animate_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(animate_css_animate_min_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/ethernum/Desktop/programming/carla/v2-carla-port/components/sidebar/Sidebar.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var Sidebar =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Sidebar, _PureComponent);

  function Sidebar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Sidebar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Sidebar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      firstImage: "header",
      secondImage: "ex",
      thirdImage: "ed",
      fourthImage: "pub"
    });

    return _this;
  }

  _createClass(Sidebar, [{
    key: "render",
    value: function render() {
      var path = this.props.path;
      var imagePath = "../../static";
      var bg = this.props.bg;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Sidebar animated fadeIn",
        style: {
          backgroundImage: "url(".concat(imagePath, "/").concat(bg ? bg : null, ".png)")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Nav__WEBPACK_IMPORTED_MODULE_1__["default"], {
        path: path,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "first-col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, path === "/" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "".concat(imagePath, "/carla-avatar.png"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "second-col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, path === "/" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Initials__WEBPACK_IMPORTED_MODULE_2__["default"], {
        initials: "CL",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }) : null, path === "/experience" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Initials__WEBPACK_IMPORTED_MODULE_2__["default"], {
        initials: "EX",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }) : null, path === "/education" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Initials__WEBPACK_IMPORTED_MODULE_2__["default"], {
        initials: "ED",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }) : null, path === "/publications" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Initials__WEBPACK_IMPORTED_MODULE_2__["default"], {
        initials: "PB",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }) : null));
    }
  }]);

  return Sidebar;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);



/***/ }),

/***/ "./components/sidebar/nav.css":
/*!************************************!*\
  !*** ./components/sidebar/nav.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/sidebar/sidebar.css":
/*!****************************************!*\
  !*** ./components/sidebar/sidebar.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/animate.css/animate.min.css":
/*!**************************************************!*\
  !*** ./node_modules/animate.css/animate.min.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/PageLayout.js":
/*!*****************************!*\
  !*** ./pages/PageLayout.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/sidebar/Sidebar */ "./components/sidebar/Sidebar.js");
/* harmony import */ var _layout_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout.css */ "./pages/layout.css");
/* harmony import */ var _layout_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_layout_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/ethernum/Desktop/programming/carla/v2-carla-port/pages/PageLayout.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var PageLayout =
/*#__PURE__*/
function (_Component) {
  _inherits(PageLayout, _Component);

  function PageLayout() {
    _classCallCheck(this, PageLayout);

    return _possibleConstructorReturn(this, _getPrototypeOf(PageLayout).apply(this, arguments));
  }

  _createClass(PageLayout, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "grid-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, this.props.children);
    }
  }]);

  return PageLayout;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PageLayout);

/***/ }),

/***/ "./pages/index.css":
/*!*************************!*\
  !*** ./pages/index.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/layout.css":
/*!**************************!*\
  !*** ./pages/layout.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/publications.js":
/*!*******************************!*\
  !*** ./pages/publications.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PageLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageLayout */ "./pages/PageLayout.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./pages/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/sidebar/Sidebar */ "./components/sidebar/Sidebar.js");
/* harmony import */ var _components_Content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Content */ "./components/Content.js");
/* harmony import */ var _components_publications_Publication__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/publications/Publication */ "./components/publications/Publication.js");
/* harmony import */ var _components_PageTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PageTitle */ "./components/PageTitle.js");
/* harmony import */ var _static_pLetter_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../static/pLetter.svg */ "./static/pLetter.svg");
/* harmony import */ var _static_pLetter_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_static_pLetter_svg__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/ethernum/Desktop/programming/carla/v2-carla-port/pages/publications.js";









var tranformNamesToArray = function tranformNamesToArray(stringOfNames) {
  var allNames = stringOfNames.split(";");
  return allNames;
};

var Publications = function Publications(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PageLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sidebar-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    path: props.url.pathname,
    bg: "publications",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Content__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PageTitle__WEBPACK_IMPORTED_MODULE_6__["default"], {
    imagePath: _static_pLetter_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
    title: "Publicationes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_publications_Publication__WEBPACK_IMPORTED_MODULE_5__["default"], {
    paperTitle: "Exact distribution of genetic risk score at the population level",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Subirana, I.; Lucas, G.; Esnaola, M.; ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Llu\xEDs-Ganella, C."), "; Elosua, R.; Gonzalez, JR"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_publications_Publication__WEBPACK_IMPORTED_MODULE_5__["default"], {
    paperTitle: "Genetic profile of the SCN5A gene in Brugada Syndrome",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Coll, M.; Allegue, C.; P\xE9rez-Serra, A.; Pic\xF3, F.; Mademont-Soler, I.; ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Llu\xEDs-Ganella, C."), "; Elosua, R.; Campuzano, O.; Oliva, A.; Partemi, S.; Iglesias, A.; Brugada, R."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_publications_Publication__WEBPACK_IMPORTED_MODULE_5__["default"], {
    paperTitle: "Evaluation of the role of a genetic risk score for blood pressure on risk of ischemic stroke subtypes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Lucas, G.; Subirana, I.; ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Llu\xEDs-Ganella, C"), ".; Domingues-Montanari, S.; Roquer, J.; Rabionet, R.; Obach, V.; Krupinski, J.; Iniesta, JA.; Mart\xED-F\xE0bregas, J.; Goyenechea, E.; Jimenez, J.; Elosua, E.;"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_publications_Publication__WEBPACK_IMPORTED_MODULE_5__["default"], {
    paperTitle: "Prevalence of genetically confirmed familial hypercholesterolemia in patients with acute coronary syndromes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Amor-Salamanca, A.; Castillo, S.; Gonzalez-Vioque, E.; Dominguez, F.; Quintana, L.; ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Llu\xEDs-Ganella, C."), "; Escudier, J.M.; Ortega, J.; Lara-Pezzi, E.; Alonso-Pulpon, L.; Garcia-Pavia, P"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_publications_Publication__WEBPACK_IMPORTED_MODULE_5__["default"], {
    paperTitle: "DNA methylation and obesity traits: An epigenome-wide association study. The REGICOR study. Epigenetics. 2017 Nov",
    paperUrl: "http://www.tandfonline.com/doi/citedby/10.1080/15592294.2017.1363951?scroll=top&needAccess=true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Sayols-Baixeras, S.; Subirana, I.; Fern\xE1ndez-Sanl\xE9s, A.; Sent\xED, M.;", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Llu\xEDs-Ganella, C."), "; Marrugat, J.; Elosua, R."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_publications_Publication__WEBPACK_IMPORTED_MODULE_5__["default"], {
    paperTitle: "Identification and validation of seven new loci showing differential DNA methylation related to serum lipid profile: an epigenome-wide approach.",
    paperUrl: "http://www.ncbi.nlm.nih.gov/pubmed/28173150",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Sayols-Baixeras, S.; Subirana, I.; ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Llu\xEDs-Ganella, C."), "; Civeira, F.; Roquer, J.; Do, A.N.; Absher, D.; Cenarro, A.; Mu\xF1oz, D.; Soriano-T\xE1rraga, C.; Jim\xE9nez-Conde, J.; Ordovas, J.M.; Senti, M.; Aslibekyan, S.; Marrugat, J.; Arnett, D.K.; Elosua, R."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_publications_Publication__WEBPACK_IMPORTED_MODULE_5__["default"], {
    paperTitle: "DNA Methylation and High-Density Lipoprotein Functionality-Brief Report: The REGICOR Study. Arterioscler Thromb Vasc Biol. 2017",
    paperUrl: "http://www.ncbi.nlm.nih.gov/pubmed/28062490",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Sayols-Baixeras, S.; Hernaez, A.; Subirana, I.;", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Llu\xEDs-Ganella, C."), "; Mu\xF1oz, D.; Fit\xF3, M.; Marrugat, J.; Elosua, R."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_publications_Publication__WEBPACK_IMPORTED_MODULE_5__["default"], {
    paperTitle: "Clinical Utility of Multi-marker Genetic Risk Scores for Prediction of Incident Coronary Heart Disease. A Cohort Study among over 51 Thousand Individuals of European Ancestry. Circ Cardiovasc Genet. 2016",
    paperUrl: "http://www.ncbi.nlm.nih.gov/pubmed/27780846",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Iribarren, C.; Lu, M.; Jorgenson, E.; Martinez, M.; Llu\xEDs-Ganella, C.; Subirana, I.; Salas, E.; Elosua, R."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_publications_Publication__WEBPACK_IMPORTED_MODULE_5__["default"], {
    paperTitle: "Identification and validation of seven new loci showing differential DNA methylation related to serum lipid profile: an epigenome-wide approach. The REGICOR study. Hum Mol Genet. 2016",
    paperUrl: "http://www.ncbi.nlm.nih.gov/pubmed/27634649",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "ayols-Baixeras, S.; Subirana, I.; Llu\xEDs-Ganella, C. ; Civeira, F.; Roquer, J.; Do, A.N.; Absher, D.; Cenarro, A.; Mu\xF1oz, D.; Soriano-T\xE1rraga, C.; Jim\xE9nez-Conde, J.; Ordovas, J.M.; Senti, M.; Aslibekyan, S.; Marrugat, J.; Arnett, D.K.; Elosua, R."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_publications_Publication__WEBPACK_IMPORTED_MODULE_5__["default"], {
    paperTitle: "Identification of a new locus and validation of previously reported loci showing differential methylation associated with smoking. The REGICOR study. Epigenetics. 2015",
    paperUrl: "http://www.ncbi.nlm.nih.gov/pubmed/26829059",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "Sayols-Baixeras, S.; ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Llu\xEDs-Ganella, C."), "; Subirana, I.; Salas, L.A.; Vilahur, N.; Corella, D.; Mu\xF1oz, D.; Segura, A.; Jimenez-Conde, J.; Moran, S.; Soriano-T\xE1rraga, C.; Roquer, J.; Lopez-Farr\xE9, A.; Marrugat, J.; Fit\xF3 M.; Elosua, R."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_publications_Publication__WEBPACK_IMPORTED_MODULE_5__["default"], {
    paperTitle: "Cardiovascular Risk Factors and Ischemic Heart Disease: Is the Confluence of Risk Factors Greater Than the Parts? A Genetic Approach. Circ Cardiovasc Genet. 2016",
    paperUrl: "http://www.ncbi.nlm.nih.gov/pubmed/27103211",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "Elosua, R.; ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "Llu\xEDs-Ganella, C."), "; Subirana, I.; Havulinna, A.; L\xE4ll, K.; Lucas, G.; Sayols-Baixeras, S.; Pietil\xE4, A.; Alver, M.; Cabrera,A.; Sent\xED, M.; Siscovick, D.; Mellander, O.; Fischer, K.; Salomaa, V.; Marrugat, M."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_publications_Publication__WEBPACK_IMPORTED_MODULE_5__["default"], {
    paperTitle: "Association Between Coronary Artery Disease Genetic Variants and Subclinical Atherosclerosis: An Association Study and Meta-analysis. Rev Esp Cardiol. 2015",
    paperUrl: "http://www.ncbi.nlm.nih.gov/pubmed/25804320",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "Zabalza, M.; Subirana, I.; ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "Llu\xEDs-Ganella, C."), "; Sayols-Baixeras, S.; de Groot, E.; Arnold, R.; Cenarro, A.; Ramos, R.; Marrugat, J.; Elosua, R."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_publications_Publication__WEBPACK_IMPORTED_MODULE_5__["default"], {
    paperTitle: "Risk Haplotype Predisposes to Acute Coronary Syndrome. Circ Cardiovasc Genet. 2015",
    paperUrl: "http://www.ncbi.nlm.nih.gov/pubmed/26679868",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, "Sinisalo, J.; Vlachopoulou, E.; Marchesani, M.; Nokelainen, J.; M\xE4yr\xE4np\xE4\xE4, MI.; Lappalainen, J.; Paakkanen, R.; Wennerstr\xF6m, A.; Salli, K.; Niemi, HJ.; M\xE4nnist\xF6, S.; Salo, P. ; Junttila, J.; Eskola, M.; Nikus, K.; Arstila, TP.; Perola, M.; Huikuri, H.; Karhunen, PJ.; Kovanen, PT.; Palotie, A.; Havulinna, AS.;", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, "Llu\xEDs-Ganella, C."), "; Marrugat, J.; Elosua, R.; Salomaa, V.; Nieminen, MS.; Lokki, ML."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_publications_Publication__WEBPACK_IMPORTED_MODULE_5__["default"], {
    paperTitle: "Analysis of gene-gene interactions among common variants in candidate cardiovascular genes in coronary artery disease. PLoS one.",
    paperUrl: "http://www.ncbi.nlm.nih.gov/pubmed/25658981",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, "Musameh, M.; Wang, W.; Nelson, C.; ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, "Llu\xEDs-Ganella, C."), "; Subirana, I.; Elosua, R.; Hall, A.; Kathiresan, S.; Samani, N.; Tomaszewski, M."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_publications_Publication__WEBPACK_IMPORTED_MODULE_5__["default"], {
    paperTitle: "Gene-Age Interactions in Blood Pressure Regulation: A Large-Scale Investigation with the CHARGE, Global BPgen, and ICBP Consortia. Am J Hum Genet. 2014. ",
    paperUrl: "http://www.ncbi.nlm.nih.gov/pubmed/24954895",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "Simino, J.; Shi, G.; Bis, JC.; Chasman, DI.; Ehret, GB.; Gu, X.; Guo, X.; Hwang, SJ.; Sijbrands, E.; Smith, AV.; Verwoert, GC.; Bragg-Gresham, JL.; Cadby, G.; Chen, P.; Cheng, CY.; Corre, T.; de, Boer, RA.; Goel, A.; Johnson, T.; Khor, CC.; LifeLines Cohort Study;", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, "Llu\xEDs-Ganella, C."), "; Luan, J.; Lyytik\xE4inen, LP.; Nolte, IM.; Sim, X.; S\xF5ber, S.; van, der, Most, PJ.; Verweij, N.; Zhao, JH.; Amin, N.; Boerwinkle, E.; Bouchard, C.; Dehghan, A.; Eiriksdottir, G.; Elosua, R.; Franco, OH.; Gieger, C.; Harris, TB.; Hercberg, S.; Hofman, A.; James, AL.; Johnson, AD.; K\xE4h\xF6nen, M.; Khaw, KT.; Kutalik, Z.; Larson, MG.; Launer, LJ.; Li, G.; Liu, J.; Liu, K.; Morrison, AC.; Navis, G.; Ong, RT.; Papanicolau, GJ.; Penninx, BW.; Psaty, BM.; Raffel, LJ.; Raitakari, OT.; Rice, K.; Rivadeneira, F.; Rose, LM.; Sanna, S.; Scott, RA.; Siscovick, DS.; Stolk, RP.; Uitterlinden, AG.; Vaidya, D.; van, der, Klauw, MM.; Vasan, RS.; Vithana, EN.; V\xF6lker, U.; V\xF6lzke, H.; Watkins, H.; Young, TL.; Aung, T.; Bochud, M.; Farrall, M.; Hartman, CA.; Laan, M.; Lakatta, EG.; Lehtim\xE4ki, T.; Loos, RJ.; Lucas, G.; Meneton, P.; Palmer, LJ.; Rettig, R.; Snieder, H.; Tai, ES.; Teo, YY.; van, der, Harst, P.; Wareham, NJ.; Wijmenga, C.; Wong, TY.; Fornage, M.; Gudnason, V.; Levy, D.; Palmas, W.; Ridker, PM.; Rotter, JI.; van, Duijn, CM.; Witteman, JC.; Chakravarti, A.; Rao, DC."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_publications_Publication__WEBPACK_IMPORTED_MODULE_5__["default"], {
    paperTitle: "Association Between Genetic Variants and Atrial Fibrillation in the Spanish Population, and Metanalysis of Previous Studies. Rev Esp Cardiol. 2014",
    paperUrl: "http://www.ncbi.nlm.nih.gov/pubmed/25262128",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, "Ferran, A.; Alegret, JM.; Subirana, I.; Aragon\xE8s, G.; Llu\xEDs-Ganella, C.; Romero-Menor, C.; Planas, F.; Joven, J.; Elosua, R"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_publications_Publication__WEBPACK_IMPORTED_MODULE_5__["default"], {
    paperTitle: "Hypothesis-based Analysis of Gene-Gene Interactions and Risk of Myocardial Infarction. PLoS One. 2012",
    paperUrl: "http://www.ncbi.nlm.nih.gov/pubmed/22876292",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, "Lucas, G.; ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, "Llu\xEDs-Ganella, C."), "; Subirana, I.; Musameh, MD.; Gonzalez, JR.; Nelson, CP.; Sent\xED, M.; The Myocardial Infarction Genetics Consortium; The Wellcome Trust Case Control Consortium; Schwartz, SM.; Siscovick, D.; O\u2019Donnell, CJ.; Melander, O.; Salomaa, V.; Purcell, S.; Altshuler, D.; Samani, NJ.; Kathiresan, S.; Elosua, R."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_publications_Publication__WEBPACK_IMPORTED_MODULE_5__["default"], {
    paperTitle: "Assessment of the value of a genetic risk score in improving the estimation of coronary risk. Atherosclerosis. 2012;",
    paperUrl: "http://www.ncbi.nlm.nih.gov/pubmed/22521901",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, "Llu\xEDs-Ganella, C."), "; Subirana, I.; Lucas, G.; Tom\xE1s, M.; Mu\xF1oz, D.; Sent\xED, M.; Salas, E.; Sala, J.; Ramos, R.; Ordovas, JM.; Marrugat, J.; Elosua, R"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_publications_Publication__WEBPACK_IMPORTED_MODULE_5__["default"], {
    paperTitle: "Post-Genomic Update on a Classical Candidate Gene for Coronary Artery Disease: ESR1. Circ Cardiovasc Genet. 2011",
    paperUrl: "http://www.ncbi.nlm.nih.gov/pubmed/21984528",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, "Lucas, G.; ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, "Llu\xEDs-Ganella, C."), "; Subirana, I.; Sent\xED, M.; Willenborg, C.; Musameh, MD.; Schwartz, SM.; O\u2019Donnell, CJ.; Melander, O.; Salomaa, V.; Elosua, R."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_publications_Publication__WEBPACK_IMPORTED_MODULE_5__["default"], {
    paperTitle: "Meta-analyses of the association between cytochrome CYP2C19 loss- and gain-of-function polymorphisms and cardiovascular outcomes in patients with coronary artery disease treated with clopidogrel. Heart. 2012",
    paperUrl: "http://www.ncbi.nlm.nih.gov/pubmed/21693476",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, "Zabalza, M.; Subirana, I.; Sala, J.; ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, "Llu\xEDs-Ganella, C."), "; Lucas, G.; Tom\xE1s, M.; Masi\xE1, R.; Marrugat, J.; Brugada, R.; Elosua, R"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_publications_Publication__WEBPACK_IMPORTED_MODULE_5__["default"], {
    paperTitle: "Additive Effect of Multiple Genetic Variants on the Risk of Coronary Artery Disease. Rev Esp Cardiol. 2010",
    paperUrl: "http://www.ncbi.nlm.nih.gov/pubmed/20738937",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, "Lluis-Ganella, C.; Lucas, G.; Subirana, I.; Senti, M.; Jimenez-Conde, J.; Marrugat, J.; Tomas, M.; Elosua, R."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_publications_Publication__WEBPACK_IMPORTED_MODULE_5__["default"], {
    paperTitle: "Qualitative assessment of previous evidence and an updated meta-analysis confirms lack of association between the ESR1 rs2234693 (PvuII) variant and coronary heart disease in men and women. Atherosclerosis 2009",
    paperUrl: "http://www.ncbi.nlm.nih.gov/pubmed/19608186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, "Llu\xEDs-Ganella, C."), "; Lucas, G.; Subirana, I.; Escurriol, V.; Tomas, M.; Senti, M.; Sala, J.; Marrugat, J.; Elosua, R."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, "BOOK CHAPTERS & INVITED REVIEWS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_publications_Publication__WEBPACK_IMPORTED_MODULE_5__["default"], {
    paperTitle: "What is a genetic test and which tipe of information can it provide? ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }, "Llu\xEDs-Ganella, C."), "; Marrugat, J.; Elosua, R"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_publications_Publication__WEBPACK_IMPORTED_MODULE_5__["default"], {
    paperTitle: "Update in Cardiology: Vascular Risk and Cardiac Rehabilitation. Rev Esp Cardiol. 2014.",
    paperUrl: "http://www.ncbi.nlm.nih.gov/pubmed/24486082",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, "Galve, E.; Alegria, E.; Cordero, A.; Facila, L.; Fernandez de Bobadilla, J.; ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, "Llu\xEDs-Ganella, C."), "; Mazon, P.; Zarzosa, CP.; Gonzalez-Juanatey, JR."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_publications_Publication__WEBPACK_IMPORTED_MODULE_5__["default"], {
    paperTitle: " Pathogenesis of coronary artery disease: focus on genetic risk factors and identification of genetic variants. The Application of Clinical Genetics. 2014",
    paperUrl: "http://www.ncbi.nlm.nih.gov/pubmed/24520200",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }, "Sayols-Baixeras, S.; ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }, "Llu\xEDs-Ganella, C."), "; Lucas, G; Elosua, R"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_publications_Publication__WEBPACK_IMPORTED_MODULE_5__["default"], {
    paperTitle: "Papel de los factores gen\xE9ticos y otros biomarcadores en la estimaci\xF3n del riesgo y la prevenci\xF3n cardiovascular. Book chapter of \u201CRetos actuales en el diagn\xF3stico y manejo del SCA en Espa\xF1a\u201D. Sociedad Espa\xF1ola de Cardiolog\xEDa 2013.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: this
  }, "Elosua, R.; ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }, "Llu\xEDs-Ganella, C."), "; Fit\xF3, M"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_publications_Publication__WEBPACK_IMPORTED_MODULE_5__["default"], {
    paperTitle: "Research Into the Genetic Component of Heart Disease: From Linkage Studies to Genome-Wide Genotyping. Rev Esp Cardiol Supl. 9(supl.B) 2009.",
    paperUrl: "http://www.revespcardiol.org/en/research-into-the-genetic-component/articulo/13146058/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  }, "Elosua, R.; ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: this
  }, "Llu\xEDs-Ganella, C."), "; Lucas, G."))));
};

/* harmony default export */ __webpack_exports__["default"] = (Publications);

/***/ }),

/***/ "./static/pLetter.svg":
/*!****************************!*\
  !*** ./static/pLetter.svg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzAiIGhlaWdodD0iODUiIHZpZXdCb3g9IjAgMCA3MCA4NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjcwIiBoZWlnaHQ9Ijg1IiByeD0iNSIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTIyLjM0IDQ0LjlDMjEuOTggNDMuNDYgMjAuOTggNDIuNzQgMTkuMzQgNDIuNzRDMTYuNSA0Mi43NCAxNC4yMiA0NC4xNiAxMi41IDQ3QzEwLjk0IDQ5LjQ4IDEwLjE2IDUyLjA4IDEwLjE2IDU0LjhDMTAuMTYgNTcuNTIgMTAuNzYgNTkuNjYgMTEuOTYgNjEuMjJDMTMuMiA2My4wMiAxNS4wOCA2My45MiAxNy42IDYzLjkyQzIyLjMyIDYzLjkyIDI2LjkgNjAuNzQgMzEuMzQgNTQuMzhDMzcuMjIgNDUuNzQgNDEuMDYgMzcuMiA0Mi44NiAyOC43NkM0Mi45IDI4LjYgNDMgMjguMTYgNDMuMTYgMjcuNDRDNDMuMzIgMjYuNzIgNDMuNDYgMjYuMSA0My41OCAyNS41OEM0My44NiAyNC4zOCA0NC42NCAyMy43OCA0NS45MiAyMy43OEM0Ni42NCAyMy43OCA0NyAyNC4wOCA0NyAyNC42OEM0NyAyNS4xMiA0Ni44NiAyNS45MiA0Ni41OCAyNy4wOEM0NS41IDMyLjMyIDQzLjYyIDM3Ljc2IDQwLjk0IDQzLjRINDEuOUM0NS4xOCA0My40IDQ4Ljg4IDQyLjgyIDUzIDQxLjY2QzU5Ljg0IDM5LjcgNjMuMjYgMzYuNCA2My4yNiAzMS43NkM2My4yNiAyOC45MiA2MS45NCAyNi40MiA1OS4zIDI0LjI2QzU3LjM4IDIyLjU4IDU0Ljc2IDIxLjI2IDUxLjQ0IDIwLjNDNDguNTYgMTkuNTQgNDUuNTQgMTkuMTYgNDIuMzggMTkuMTZINDEuMjRDNDAuOTYgMjMuMzYgMzkuOTQgMjguMTIgMzguMTggMzMuNDRDMzYuMyAzOC44NCAzNC4xMiA0My42NiAzMS42NCA0Ny45QzI4LjQgNTMuNjYgMjUuMTIgNTcuNzIgMjEuOCA2MC4wOEMxOS44OCA2MS40NCAxOC4yOCA2Mi4xMiAxNyA2Mi4xMkMxNi42NCA2Mi4xMiAxNi40NiA2MS45OCAxNi40NiA2MS43QzE2LjQ2IDYxLjQ2IDE2LjYyIDYxLjMyIDE2Ljk0IDYxLjI4QzE4LjE4IDYxLjA4IDE5LjA4IDYwLjg0IDE5LjY0IDYwLjU2QzIzLjMyIDU4Ljc2IDI3LjA4IDU0LjU2IDMwLjkyIDQ3Ljk2QzMzLjc2IDQyLjk2IDM2IDM3LjkgMzcuNjQgMzIuNzhDMzkuMjggMjcuNjIgNDAuMjIgMjMuMSA0MC40NiAxOS4yMkMzNi44NiAxOS4zOCAzMy4yMiAyMC4wNCAyOS41NCAyMS4yQzI1LjkgMjIuMzYgMjIuOTIgMjQuMTQgMjAuNiAyNi41NEMxOS4wOCAyOC4wNiAxOC4zMiAyOS43IDE4LjMyIDMxLjQ2QzE4LjMyIDMzLjIyIDE4Ljg0IDM0LjcgMTkuODggMzUuOUMyMC43NiAzNy4wNiAyMS45NiAzNy45IDIzLjQ4IDM4LjQyQzI0LjE2IDM4LjY2IDI0Ljc2IDM4Ljg2IDI1LjI4IDM5LjAyQzI1Ljg0IDM5LjE0IDI2LjEyIDM5LjI2IDI2LjEyIDM5LjM4QzI2LjEyIDM5LjU4IDI1Ljk2IDM5LjY0IDI1LjY0IDM5LjU2SDI1LjU4QzIzLjE0IDM5LjIgMjAuODYgMzguMTYgMTguNzQgMzYuNDRDMTYuNjIgMzQuNzIgMTUuNTYgMzIuNyAxNS41NiAzMC4zOEMxNS41NiAyOC43IDE2LjI2IDI3LjE2IDE3LjY2IDI1Ljc2QzIwLjAyIDIzLjM2IDIzLjM0IDIxLjU2IDI3LjYyIDIwLjM2QzMxLjkgMTkuMTYgMzYuMjIgMTguNDYgNDAuNTggMTguMjZWMTQuNDJDNDAuNTggMTQuMSA0MC43IDEzLjk0IDQwLjk0IDEzLjk0QzQxLjE4IDEzLjk0IDQxLjMgMTQuNTggNDEuMyAxNS44NkM0MS4zIDE3LjE0IDQxLjMgMTcuOTIgNDEuMyAxOC4ySDQ0QzQ2Ljg4IDE4LjIgNDkuODggMTguNSA1MyAxOS4xQzU2LjU2IDE5LjkgNTkuNDYgMjEuMDggNjEuNyAyMi42NEM2NC43NCAyNC43NiA2Ni4yNiAyNy4zNCA2Ni4yNiAzMC4zOEM2Ni4yNiAzMy4zOCA2NC44IDM2LjA0IDYxLjg4IDM4LjM2QzU5LjY0IDQwLjIgNTYuNzQgNDEuNjYgNTMuMTggNDIuNzRDNDkuNjIgNDMuNzggNDUuOCA0NC4zIDQxLjcyIDQ0LjNDNDEuMzIgNDQuMyA0MC45MiA0NC4zIDQwLjUyIDQ0LjNDMzMuOTYgNTcuODIgMjYuMzggNjQuNTggMTcuNzggNjQuNThDMTQuODIgNjQuNTggMTIuNDYgNjMuNjIgMTAuNyA2MS43QzguOTQgNTkuODIgOC4wNiA1Ny4zIDguMDYgNTQuMTRDOC4wNiA1MC45NCA5LjA0IDQ4LjA2IDExIDQ1LjVDMTMgNDIuOTQgMTUuNTggNDEuNjYgMTguNzQgNDEuNjZDMTkuNjYgNDEuNjYgMjAuNSA0MS45MiAyMS4yNiA0Mi40NEMyMi4xIDQyLjg4IDIyLjUyIDQzLjU2IDIyLjUyIDQ0LjQ4QzIyLjUyIDQ0LjcyIDIyLjQ2IDQ0Ljg2IDIyLjM0IDQ0LjlaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"

/***/ }),

/***/ 6:
/*!*************************************!*\
  !*** multi ./pages/publications.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/publications.js */"./pages/publications.js");


/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=publications.js.map