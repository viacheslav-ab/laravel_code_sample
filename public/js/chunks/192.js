(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[192],{

/***/ "./resources/js/components/Widgets/TodayOrdersStats.js":
/*!*************************************************************!*\
  !*** ./resources/js/components/Widgets/TodayOrdersStats.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-countup */ "./node_modules/react-countup/build/index.js");
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var Util_IntlMessages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Util/IntlMessages */ "./resources/js/util/IntlMessages.js");
/* harmony import */ var Components_RctCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Components/RctCard */ "./resources/js/components/RctCard/index.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Today Orders Stats
 */

 // intl messages

 // rct card box



const TotalOrderStats = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "current-widget bg-primary"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCard__WEBPACK_IMPORTED_MODULE_3__["RctCardContent"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "d-flex justify-content-between"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "align-items-start"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
  className: "mb-10"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_2__["default"], {
  id: "widgets.todayOrders"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
  className: "mb-0"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_countup__WEBPACK_IMPORTED_MODULE_1___default.a, {
  start: 0,
  end: 14255
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "align-items-end"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
  className: "zmdi zmdi-time"
})))));

const _default = TotalOrderStats;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TotalOrderStats, "TotalOrderStats", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\TodayOrdersStats.js");
  reactHotLoader.register(_default, "default", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\TodayOrdersStats.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);