(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[109],{

/***/ "./resources/js/components/Widgets/VisitorAreaChart.js":
/*!*************************************************************!*\
  !*** ./resources/js/components/Widgets/VisitorAreaChart.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-countup */ "./node_modules/react-countup/build/index.js");
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var Components_Charts_TinyAreaChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Components/Charts/TinyAreaChart */ "./resources/js/components/Charts/TinyAreaChart.js");
/* harmony import */ var Util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Util/IntlMessages */ "./resources/js/util/IntlMessages.js");
/* harmony import */ var Components_RctCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Components/RctCard */ "./resources/js/components/RctCard/index.js");
/* harmony import */ var Constants_chart_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Constants/chart-config */ "./resources/js/constants/chart-config.js");
/* harmony import */ var Helpers_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Helpers/helpers */ "./resources/js/helpers/helpers.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Visitor Area Chart Widget
 */

 // chart

 // intl messages

 // rct card box

 // chart config

 // helpers



const VisitorAreaChart = ({
  data
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCard__WEBPACK_IMPORTED_MODULE_4__["RctCard"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCard__WEBPACK_IMPORTED_MODULE_4__["RctCardContent"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "clearfix"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "float-left"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
  className: "mb-15 fw-semi-bold"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
  id: "widgets.visitors"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "d-flex"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "mr-50"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: "fs-14 d-block"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
  id: "widgets.weekly"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_countup__WEBPACK_IMPORTED_MODULE_1___default.a, {
  separator: ",",
  className: "counter-point",
  start: 0,
  end: data.weekly,
  duration: 5,
  useEasing: true
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: ""
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: "fs-14 d-block"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
  id: "widgets.monthly"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_countup__WEBPACK_IMPORTED_MODULE_1___default.a, {
  separator: ",",
  className: "counter-point",
  start: 0,
  end: data.monthly,
  duration: 5,
  useEasing: true
})))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "float-right hidden-md-down"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "featured-section-icon"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
  className: "zmdi zmdi-globe-alt"
}))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Charts_TinyAreaChart__WEBPACK_IMPORTED_MODULE_2__["default"], {
  label: "Visitors",
  chartdata: data.chartData.data,
  labels: data.chartData.labels,
  backgroundColor: Object(Helpers_helpers__WEBPACK_IMPORTED_MODULE_6__["hexToRgbA"])(Constants_chart_config__WEBPACK_IMPORTED_MODULE_5__["default"].color.primary, 0.1),
  borderColor: Object(Helpers_helpers__WEBPACK_IMPORTED_MODULE_6__["hexToRgbA"])(Constants_chart_config__WEBPACK_IMPORTED_MODULE_5__["default"].color.primary, 3),
  lineTension: "0",
  height: 70,
  gradient: true,
  hideDots: true
}));

const _default = VisitorAreaChart;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(VisitorAreaChart, "VisitorAreaChart", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\VisitorAreaChart.js");
  reactHotLoader.register(_default, "default", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\VisitorAreaChart.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);