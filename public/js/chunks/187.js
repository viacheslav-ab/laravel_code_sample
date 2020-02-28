(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[187],{

/***/ "./resources/js/components/Widgets/SocialCompanies.js":
/*!************************************************************!*\
  !*** ./resources/js/components/Widgets/SocialCompanies.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-custom-scrollbars */ "./node_modules/react-custom-scrollbars/lib/index.js");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var Api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Api */ "./resources/js/api/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Social Companines
 */



 // api




class SocialCompanines extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      socialCompanies: null
    };
  }

  componentDidMount() {
    this.getSocialCompanies();
  } // get social companies


  getSocialCompanies() {
    Api__WEBPACK_IMPORTED_MODULE_4__["default"].get('socialCompanies.js').then(response => {
      this.setState({
        socialCompanies: response.data
      });
    }).catch(error => {// error handling
    });
  }

  render() {
    const {
      socialCompanies
    } = this.state;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3__["Scrollbars"], {
      className: "rct-scroll",
      autoHeight: true,
      autoHeightMin: 100,
      autoHeightMax: 400,
      autoHide: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "table-responsive"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
      className: "table table-hover table-middle"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Media"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Likes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Comemnts"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Share"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Members"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, socialCompanies && socialCompanies.map((data, key) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: key
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Fab"], {
      variant: "round",
      size: "small",
      className: `btn-${data.icon} mr-15 mb-10 text-white`
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: `zmdi zmdi-${data.icon}`
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "d-block"
    }, data.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      onClick: e => e.preventDefault(),
      className: "text-blue"
    }, data.url)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, data.likes), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, data.comments), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, data.share), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Badge"], {
      color: "primary",
      className: "badge-pill badge-lg"
    }, data.members))))))));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

const _default = SocialCompanines;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SocialCompanines, "SocialCompanines", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\SocialCompanies.js");
  reactHotLoader.register(_default, "default", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\SocialCompanies.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);