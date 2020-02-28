(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[147],{

/***/ "./resources/js/components/Widgets/ActiveUser.js":
/*!*******************************************************!*\
  !*** ./resources/js/components/Widgets/ActiveUser.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ActiveUser; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-custom-scrollbars */ "./node_modules/react-custom-scrollbars/lib/index.js");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var Util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Util/IntlMessages */ "./resources/js/util/IntlMessages.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Active User Component
 */



 // intl messages


const data = [{
  id: 1,
  flag: 'icons8-usa',
  countryName: 'United States',
  userCount: 150,
  userPercent: 20,
  status: 1
}, {
  id: 2,
  flag: 'icons8-hungary',
  countryName: 'Hungary',
  userCount: 180,
  userPercent: -5,
  status: 0
}, {
  id: 3,
  flag: 'icons8-france',
  countryName: 'France',
  userCount: 86,
  userPercent: 20,
  status: 1
}, {
  id: 4,
  flag: 'icons8-japan',
  countryName: 'Japan',
  userCount: 243,
  userPercent: 20,
  status: 1
}, {
  id: 5,
  flag: 'icons8-china',
  countryName: 'China',
  userCount: 155,
  userPercent: 20,
  status: 0
}, {
  id: 6,
  flag: 'ru',
  countryName: 'Russia',
  userCount: 155,
  userPercent: 20,
  status: 0
}];
class ActiveUser extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "rct-block-title border-0 text-white bg-primary"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "d-flex justify-content-between mb-0 font-weight-light"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "widgets.activeUsers"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "250")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "fs-12 mb-0 font-weight-light"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "widgets.updated10Minago"
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3__["Scrollbars"], {
      className: "rct-scroll",
      autoHeight: true,
      autoHeightMin: 100,
      autoHeightMax: 380,
      autoHide: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_1__["default"], {
      className: "list-unstyled p-0"
    }, data && data.length > 0 && data.map((data, key) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: key,
      className: "border-bottom d-flex justify-content-between align-items-center p-20"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "w-60 d-flex"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "flag-img mr-30"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: __webpack_require__("./resources/js/assets/flag-icons sync recursive ^\\.\\/.*\\.png$")(`./${data.flag}.png`),
      alt: "flag-img",
      className: "img-fluid",
      width: "44",
      height: "30"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, data.countryName)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "w-40 d-flex justify-content-between"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, data.userCount), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, data.status === 1 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "ti-arrow-up mr-10 text-success"
    }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "ti-arrow-down mr-10 text-danger"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, data.userPercent, "%"))))))));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(data, "data", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\ActiveUser.js");
  reactHotLoader.register(ActiveUser, "ActiveUser", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\ActiveUser.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);