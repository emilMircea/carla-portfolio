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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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

/***/ "./components/experience/ExperienceParag.js":
/*!**************************************************!*\
  !*** ./components/experience/ExperienceParag.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var animate_css_animate_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! animate.css/animate.css */ "./node_modules/animate.css/animate.css");
/* harmony import */ var animate_css_animate_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(animate_css_animate_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/ethernum/Desktop/programming/carla/v2-carla-port/components/experience/ExperienceParag.js";




var ExperienceParag = function ExperienceParag(_ref) {
  var date = _ref.date,
      position = _ref.position,
      companyName = _ref.companyName,
      companyUrl = _ref.companyUrl,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "animated fadeIn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: "flex"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    style: {
      marginRight: "1rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, date), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    style: {
      marginRight: "1rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, position), companyName && companyUrl ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: companyUrl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "@", companyName) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, companyName)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, children));
};

ExperienceParag.propTypes = {
  companyUrl: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  companyName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  date: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  position: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ExperienceParag);

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

/***/ "./data/translation.js":
/*!*****************************!*\
  !*** ./data/translation.js ***!
  \*****************************/
/*! exports provided: translation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translation", function() { return translation; });
var aboutEnglish = {
  first: "I am medical/scientific advisor with experience both in and outside academia. \n    Some of my achievements on my current work include \n    performing key changes in the products I am responsible of, \n    improving their interpretation and the acceptation of the clients. \n    I have represented the company national and internationally, \n    both in trainings to the sales reps and participating in congresses.\uD83D\uDE04",
  second: "Thanks to my previous experience in the research field, \n    I have been involved in research projects of the company, \n    including the phases of design, \n    analysis and interpretation of results. \n    I am familiarized with management activities \n    and I am capable of working\n    on several related and unrelated tasks contemporaneously. \n    I also created my own company, \n    with the aim to perform genetic analyses \n    on different diseases for research investigators \n    and to perform trainings on the genetic field.\u26FD\uFE0F"
};
var experience = {
  shionogi: "I work as Medical Specialist Liason in the area of gynecology and infectious diseases and haepatology.",
  ferrer: "\n    I have represented the company national and internationally, both in trainings to the sales reps and participating in congresses.\n    Thanks to my previous experience in the research field, I have been involved in research projects of the company, including the phases of design, analysis and interpretation of results.",
  clearGenetics: "\n    I performed the trainings to hospitals together with all management duties, including from data management of the projects, to interaction with the clients and agencies, or managing the economic side of the company.\n    Clear Genetics was a company focused on facilitating the application of genetics to clinical research, including research and training activities.\n  ",
  imimPostdoc: "\n    The two main areas of investigation during the postdoctoral period in the Cardiovascular epidemiology and genetics group (Roberto Elosua) were:\n    to evaluate the role of genetic variants associated with cardiovascular diseases and its risk factors and to evaluate the role of epigenetics (methylation) in cardiovascular risk.\n  ",
  acellera: "\n    During my stay in Acellera I was the responsible of some of the non-scientific tasks, including contact with public institutions, fellowship applications, or events organisation.\n    Acellera is a company focused on providing new technologies for the study of biophysical phenomena. Acellera\u2019s R&D programme has focused on developing software and hardware solutions that optimize the efficiency and throughput of molecular dynamics simulations.\n    ",
  imimPredoc: "\n    The doctoral thesis performed at at Cardiovascular epidemiology and genetics group (Roberto Elosua), entitled \u201CGenetic factors associated with coronary heart disease and analysis of their predictive capacity\u201D intended to answer two main questions: the first one was to evaluate if genetic variants in the estrogen receptor alpha gene confere an increased risk of suffering myocardial infarction, and the second one evaluated the predictive capacity of genetic variants known to be associated with cardiovascular disease.\n  "
};
var en = {
  about: aboutEnglish,
  experience: experience
};
var sobreMi = {
  first: "Soy asesor m\xE9dico / cient\xEDfico con experiencia tanto dentro como fuera de la academia.\n     Algunos de mis logros en mi trabajo actual incluyen \n     realizar cambios clave en los productos de los que soy responsable, \n     mejorar su interpretaci\xF3n y la aceptaci\xF3n de los clientes. \n     He representado a la empresa nacional e internacional, \n     tanto en capacitaciones a los representantes de ventas como en congresos ",
  second: "Gracias a mi experiencia previa en el campo de la investigaci\xF3n, \n    he participado en proyectos de investigaci\xF3n de la empresa, \n    incluidas las fases de dise\xF1o, an\xE1lisis e interpretaci\xF3n de los resultados. \n    Estoy familiarizado con las actividades de gesti\xF3n y\n    soy capaz de trabajar en varias Tareas no relacionadas al mismo tiempo.\n    Tambi\xE9n cre\xE9 mi propia empresa, con el objetivo de realizar an\xE1lisis gen\xE9ticos \n    sobre diferentes enfermedades para investigadores investigadores y \n    realizar capacitaciones en el campo gen\xE9tico"
};
var experiencia = {
  shionogi: "Trabajo como m\xE9dico especialista en Liason en el \xE1rea de ginecolog\xEDa, enfermedades infecciosas y haepatolog\xEDa.",
  ferrer: "\n    He representado a la compa\xF1\xEDa a nivel nacional e internacional, tanto en capacitaciones a representantes de ventas como en congresos.\n    Gracias a mi experiencia previa en el campo de la investigaci\xF3n, he participado en proyectos de investigaci\xF3n de la empresa, incluidas las fases de dise\xF1o, an\xE1lisis e interpretaci\xF3n de resultados.\n  ",
  clearGenetics: "\n    Realic\xE9 los entrenamientos a hospitales junto con todas las tareas de gesti\xF3n, incluida la gesti\xF3n de datos de los proyectos, la interacci\xF3n con los clientes y las agencias, o la gesti\xF3n del aspecto econ\xF3mico de la empresa.\n    Clear Genetics era una compa\xF1\xEDa enfocada en facilitar la aplicaci\xF3n de la gen\xE9tica a la investigaci\xF3n cl\xEDnica, incluidas las actividades de investigaci\xF3n y capacitaci\xF3n.\n  ",
  imimPostdoc: "\n    Las dos \xE1reas principales de investigaci\xF3n durante el per\xEDodo postdoctora en el grupo de epidemiolog\xEDa y gen\xE9tica cardiovascular (Roberto Elosua) fueron:\n\xA0\xA0\xA0\xA0para evaluar el papel de las variantes gen\xE9ticas asociadas con las enfermedades cardiovasculares y sus factores de riesgo y para evaluar el papel de la epigen\xE9tica (metilaci\xF3n) en el riesgo cardiovascular.\n  ",
  acellera: "\n    Durante mi estad\xEDa en Acellera, fui responsable de algunas de las tareas no cient\xEDficas, incluido el contacto con instituciones p\xFAblicas, solicitudes de becas u organizaci\xF3n de eventos.\n\xA0\xA0\xA0\xA0Acellera es una empresa enfocada en proporcionar nuevas tecnolog\xEDas para el estudio de los fen\xF3menos biof\xEDsicos. El programa de I + D de Acellera se ha centrado en desarrollar soluciones de software y hardware que optimicen la eficiencia y el rendimiento de las simulaciones de din\xE1mica molecular.\n  ",
  imimPredoc: "\n    La tesis doctoral realizada en el grupo de Epidemiolog\xEDa y Gen\xE9tica Cardiovascular (Roberto Elosua), titulada \"Factores gen\xE9ticos asociados con la enfermedad coronaria y an\xE1lisis de su capacidad predictiva\" pretend\xEDa responder dos preguntas principales: la primera era evaluar si las variantes gen\xE9ticas en el El gen alfa del receptor de estr\xF3geno confiere un mayor riesgo de sufrir un infarto de miocardio, y el segundo evalu\xF3 la capacidad predictiva de las variantes gen\xE9ticas que se sabe est\xE1n asociadas con la enfermedad cardiovascular.\n  "
};
var es = {
  about: sobreMi,
  experience: experiencia
};
var translation = {
  en: en,
  es: es
};

/***/ }),

/***/ "./node_modules/animate.css/animate.css":
/*!**********************************************!*\
  !*** ./node_modules/animate.css/animate.css ***!
  \**********************************************/
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

/***/ "./pages/experience.js":
/*!*****************************!*\
  !*** ./pages/experience.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PageLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageLayout */ "./pages/PageLayout.js");
/* harmony import */ var _components_sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/sidebar/Sidebar */ "./components/sidebar/Sidebar.js");
/* harmony import */ var _components_Content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Content */ "./components/Content.js");
/* harmony import */ var _components_experience_ExperienceParag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/experience/ExperienceParag */ "./components/experience/ExperienceParag.js");
/* harmony import */ var _components_PageTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PageTitle */ "./components/PageTitle.js");
/* harmony import */ var _data_translation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/translation */ "./data/translation.js");
/* harmony import */ var _static_letter_e_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../static/letter_e.svg */ "./static/letter_e.svg");
/* harmony import */ var _static_letter_e_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_static_letter_e_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index.css */ "./pages/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var animate_css_animate_min_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! animate.css/animate.min.css */ "./node_modules/animate.css/animate.min.css");
/* harmony import */ var animate_css_animate_min_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(animate_css_animate_min_css__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/Users/ethernum/Desktop/programming/carla/v2-carla-port/pages/experience.js";

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












var Experience =
/*#__PURE__*/
function (_Component) {
  _inherits(Experience, _Component);

  function Experience() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Experience);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Experience)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      es: true
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "changeLang", function () {
      _this.setState({
        es: !_this.state.es
      });
    });

    return _this;
  }

  _createClass(Experience, [{
    key: "render",
    value: function render() {
      var es = this.state.es;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PageLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "sidebar-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_2__["default"], {
        path: this.props.url.pathname,
        bg: "experience",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Content__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "translation-link",
        onClick: this.changeLang,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, es ? "Read in English" : "Lee en Espanol"), es ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PageTitle__WEBPACK_IMPORTED_MODULE_5__["default"], {
        imagePath: _static_letter_e_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
        title: "Experiencia",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PageTitle__WEBPACK_IMPORTED_MODULE_5__["default"], {
        imagePath: _static_letter_e_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
        title: "Experience",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_experience_ExperienceParag__WEBPACK_IMPORTED_MODULE_4__["default"], {
        date: "06/2017 - Present",
        companyName: "Shionogi",
        companyUrl: "https://www.shionogi.com/",
        position: "MSL",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, es ? _data_translation__WEBPACK_IMPORTED_MODULE_6__["translation"].es.experience.shionogi : _data_translation__WEBPACK_IMPORTED_MODULE_6__["translation"].en.experience.shionogi), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_experience_ExperienceParag__WEBPACK_IMPORTED_MODULE_4__["default"], {
        date: "2015-2017",
        companyName: "Ferrer InCode SL",
        position: "Scientific Product Specialist",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, es ? _data_translation__WEBPACK_IMPORTED_MODULE_6__["translation"].es.experience.ferrer : _data_translation__WEBPACK_IMPORTED_MODULE_6__["translation"].en.experience.ferrer), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_experience_ExperienceParag__WEBPACK_IMPORTED_MODULE_4__["default"], {
        date: "2013-2016",
        companyName: "Clear Genetics SL",
        position: "Cofounder & formation director",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, es ? _data_translation__WEBPACK_IMPORTED_MODULE_6__["translation"].es.experience.clearGenetics : _data_translation__WEBPACK_IMPORTED_MODULE_6__["translation"].en.experience.clearGenetics), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_experience_ExperienceParag__WEBPACK_IMPORTED_MODULE_4__["default"], {
        date: "2012-2014",
        companyName: "Fundaci\xF3 IMIM",
        companyUrl: "https://www.imim.es/",
        position: "Post-doctoral researcher",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, es ? _data_translation__WEBPACK_IMPORTED_MODULE_6__["translation"].es.experience.imimPostdoc : _data_translation__WEBPACK_IMPORTED_MODULE_6__["translation"].en.experience.imimPostdoc), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_experience_ExperienceParag__WEBPACK_IMPORTED_MODULE_4__["default"], {
        date: "2012-2014",
        companyName: "Acellera Labs SL",
        companyUrl: "https://www.acellera.com/",
        position: "Operations manager",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, es ? _data_translation__WEBPACK_IMPORTED_MODULE_6__["translation"].es.experience.acellera : _data_translation__WEBPACK_IMPORTED_MODULE_6__["translation"].en.experience.acellera), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_experience_ExperienceParag__WEBPACK_IMPORTED_MODULE_4__["default"], {
        date: "2008-2012",
        companyName: "Fundaci\xF3 IMIM",
        companyUrl: "https://www.imim.es/",
        position: "Pre-doctoral researcher",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, es ? _data_translation__WEBPACK_IMPORTED_MODULE_6__["translation"].es.experience.imimPredoc : _data_translation__WEBPACK_IMPORTED_MODULE_6__["translation"].en.experience.imimPredoc), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_experience_ExperienceParag__WEBPACK_IMPORTED_MODULE_4__["default"], {
        date: "2006-2012",
        position: "Private teacher",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "I have been giving private sciences lessons, specially maths, physics and chemistry to students from 16 years old to university."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_experience_ExperienceParag__WEBPACK_IMPORTED_MODULE_4__["default"], {
        date: "2000-2002, 2005-2006",
        position: "Traineeships",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, "Traineeships at", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://wwws.echevarne.com/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "Laboratorio de an\xE1lisis cl\xEDnicos Dr. Echevarne"), ",", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "http://www.insvallhebron.cat/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, "Institut Universitari Vall d\u2019Hebron"), " ", "and ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://www.imim.es/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, "Fundaci\xF3 IMIM")))));
    }
  }]);

  return Experience;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Experience);

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

/***/ "./static/letter_e.svg":
/*!*****************************!*\
  !*** ./static/letter_e.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzEiIGhlaWdodD0iODUiIHZpZXdCb3g9IjAgMCA3MSA4NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjcwIiBoZWlnaHQ9Ijg1IiByeD0iNSIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTM0LjcgMTguNUwzNC41OCAxNS4yQzM0LjU4IDE0LjkyIDM0LjY2IDE0Ljc4IDM0LjgyIDE0Ljc4QzM0Ljg2IDE0Ljc4IDM0LjkyIDE0Ljg4IDM1IDE1LjA4QzM1LjI0IDE2LjQ4IDM1LjM2IDE3LjggMzUuMzYgMTkuMDRDMzUuMzYgMjAuMjQgMzUuMzYgMjEuMSAzNS4zNiAyMS42MkMzOC43NiAyMi4xIDQyLjEyIDIyLjcgNDUuNDQgMjMuNDJDNDguNjggMTkuMjIgNTEuODYgMTcuMTIgNTQuOTggMTcuMTJDNTguMTQgMTcuMTIgNTkuNzIgMTguMzQgNTkuNzIgMjAuNzhDNTkuNzIgMjEuMjIgNTkuNjIgMjEuNDQgNTkuNDIgMjEuNDRDNTkuMjYgMjEuNDQgNTkuMTggMjEuMjYgNTkuMTggMjAuOUM1OS4xOCAxOS45NCA1OC44IDE5LjI2IDU4LjA0IDE4Ljg2QzU3LjQgMTguNDYgNTYuNiAxOC4yNiA1NS42NCAxOC4yNkM1My4wOCAxOC4yNiA1MC41MiAyMC4xMiA0Ny45NiAyMy44NEM1NC45NiAyNS4yNCA1OS42IDI1Ljk0IDYxLjg4IDI1Ljk0QzY2LjggMjUuOTQgNjkuMjYgMjQuODggNjkuMjYgMjIuNzZDNjkuMjYgMjIuNCA2OS4xOCAyMi4xMiA2OS4wMiAyMS45MkM2OC45IDIxLjYgNjguODQgMjEuNDIgNjguODQgMjEuMzhDNjguODQgMjEuMyA2OC44OCAyMS4yNiA2OC45NiAyMS4yNkM2OS4zMiAyMS4yNiA2OS42IDIxLjYgNjkuOCAyMi4yOEM3MCAyMi45MiA3MC4xIDIzLjQyIDcwLjEgMjMuNzhDNzAuMSAyNi41NCA2Ny44OCAyNy45MiA2My40NCAyNy45MkM2MC45MiAyNy45MiA1NS40OCAyNyA0Ny4xMiAyNS4xNkM0NS43NiAyNy40NCA0My4yOCAzMi4zIDM5LjY4IDM5Ljc0QzQxLjMyIDM5LjIyIDQ0LjA0IDM4Ljk2IDQ3Ljg0IDM4Ljk2QzUxLjY0IDM4Ljk2IDU0Ljg4IDM5LjQyIDU3LjU2IDQwLjM0QzU3Ljc2IDQwLjQyIDU3Ljg2IDQwLjUyIDU3Ljg2IDQwLjY0QzU3Ljg2IDQwLjcyIDU3Ljc2IDQwLjc2IDU3LjU2IDQwLjc2TDUzLjI0IDQwLjQ2QzQ5Ljg0IDQwLjQ2IDQ2Ljk0IDQwLjcgNDQuNTQgNDEuMThDNDAuMTggNDEuOTQgMzggNDMuMjggMzggNDUuMkMzOCA0NS40NCAzOC4xIDQ1LjgyIDM4LjMgNDYuMzRWNDYuNEMzNy44NiA0Ni40IDM3LjQ0IDQ1LjkyIDM3LjA0IDQ0Ljk2QzM0LjcyIDQ5LjMyIDMyLjQyIDUyLjgyIDMwLjE0IDU1LjQ2QzM0LjY2IDU2LjgyIDM5IDU4LjEgNDMuMTYgNTkuM0M0Ny4zNiA2MC41IDUwLjggNjEuMSA1My40OCA2MS4xQzU2LjIgNjEuMSA1OC4zIDYwLjc2IDU5Ljc4IDYwLjA4QzYxLjgyIDU5LjIgNjIuODQgNTcuODQgNjIuODQgNTZDNjIuODQgNTQuNjQgNjIuMjQgNTIuOTggNjEuMDQgNTEuMDJMNTkuMyA0OC4xNEM1OS4zIDQ4LjEgNTkuMzQgNDguMDggNTkuNDIgNDguMDhDNTkuNTQgNDguMDggNTkuNzQgNDguMjIgNjAuMDIgNDguNUM2Mi41IDUwLjU0IDYzLjc0IDUyLjkgNjMuNzQgNTUuNThDNjMuNzQgNTguMjYgNjIuOCA2MC4zNCA2MC45MiA2MS44MkM1OS4wOCA2My4zNCA1Ni44IDY0LjEgNTQuMDggNjQuMUM1MS4zNiA2NC4xIDQ3LjI2IDYzLjA0IDQxLjc4IDYwLjkyQzM2LjM0IDU4Ljg0IDMyLjIyIDU3LjI4IDI5LjQyIDU2LjI0QzI1LjQyIDYwLjYgMjAuOTYgNjIuNzggMTYuMDQgNjIuNzhDMTQuNDQgNjIuNzggMTIuNzggNjIuMyAxMS4wNiA2MS4zNEM5LjM0IDYwLjQyIDguNDggNTkuMSA4LjQ4IDU3LjM4QzguNDggNTUuNjYgOS4zNCA1NC4zOCAxMS4wNiA1My41NEMxMi43OCA1Mi43IDE0LjU4IDUyLjI4IDE2LjQ2IDUyLjI4QzE4LjM4IDUyLjI4IDIwLjcyIDUyLjcgMjMuNDggNTMuNTRDMjYuNDggNTAuMTQgMjguOTYgNDUuNSAzMC45MiAzOS42MkMzMi45MiAzMy43IDM0LjEyIDI4LjA2IDM0LjUyIDIyLjdDMzEuNzYgMjIuMzggMjkuNTQgMjIuMjIgMjcuODYgMjIuMjJDMjAuNjIgMjIuMjIgMTcgMjQuNyAxNyAyOS42NkMxNyAzMi45NCAxOC44OCAzNS45IDIyLjY0IDM4LjU0QzIyLjg0IDM4LjYyIDIyLjk0IDM4LjcyIDIyLjk0IDM4Ljg0QzIyLjk0IDM4Ljk2IDIyLjg4IDM5LjAyIDIyLjc2IDM5LjAyQzIyLjY0IDM5LjAyIDIyLjUgMzguOTggMjIuMzQgMzguOUMxNy4zIDM2LjAyIDE0Ljc4IDMyLjU4IDE0Ljc4IDI4LjU4QzE0Ljc4IDI2LjM0IDE1LjcyIDI0LjU0IDE3LjYgMjMuMThDMTkuNiAyMS42NiAyMi42NiAyMC45IDI2Ljc4IDIwLjlDMjguNTggMjAuOSAzMS4xOCAyMS4xIDM0LjU4IDIxLjVDMzQuNjYgMjAuMTQgMzQuNyAxOS4xNCAzNC43IDE4LjVaTTQ0LjU0IDI0LjYyQzQxLjg2IDI0LjAyIDM4Ljc4IDIzLjQyIDM1LjMgMjIuODJDMzUuMDIgMjguMDYgMzMuOTQgMzMuNjQgMzIuMDYgMzkuNTZDMzAuMTggNDUuNDQgMjcuNjggNTAuMjIgMjQuNTYgNTMuOUwyNy4xNCA1NC42OEMyOC45OCA1Mi44NCAzMS4zMiA0OS4wOCAzNC4xNiA0My40QzM0LjU2IDQyLjYgMzUuMyA0MS4xIDM2LjM4IDM4LjlDMzkuNTggMzIuMzggNDIuMyAyNy42MiA0NC41NCAyNC42MlpNMTUuMjYgNTkuMTJDMTQuNSA1OS4xMiAxNC4xMiA1OC45OCAxNC4xMiA1OC43QzE0LjEyIDU4LjUgMTQuNDYgNTguNCAxNS4xNCA1OC40QzE3Ljc0IDU4LjQgMjAuMzQgNTcgMjIuOTQgNTQuMkMyMC43OCA1My41MiAxOC43OCA1My4xOCAxNi45NCA1My4xOEMxNS4xNCA1My4xOCAxMy42MiA1My40NiAxMi4zOCA1NC4wMkMxMC43IDU0Ljc4IDkuODYgNTUuODggOS44NiA1Ny4zMkM5Ljg2IDU4Ljc2IDEwLjUgNTkuODQgMTEuNzggNjAuNTZDMTIuOSA2MS4yNCAxNC4yOCA2MS41OCAxNS45MiA2MS41OEMxNy41NiA2MS41OCAxOS40OCA2MC45NCAyMS42OCA1OS42NkMyMy44OCA1OC4zOCAyNS41OCA1Ni45NiAyNi43OCA1NS40TDI0LjAyIDU0LjVDMjEuMjIgNTcuNTggMTguMyA1OS4xMiAxNS4yNiA1OS4xMloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="

/***/ }),

/***/ 4:
/*!***********************************!*\
  !*** multi ./pages/experience.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/experience.js */"./pages/experience.js");


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
//# sourceMappingURL=experience.js.map