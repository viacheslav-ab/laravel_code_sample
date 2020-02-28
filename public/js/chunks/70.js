(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[70],{

/***/ "./resources/js/components/Widgets/LineChart.js":
/*!******************************************************!*\
  !*** ./resources/js/components/Widgets/LineChart.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LineChart; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var Components_RctCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Components/RctCard */ "./resources/js/components/RctCard/index.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Line chart widget
 */

 // rct card box


class LineChart extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      data,
      options,
      bgColor,
      icon,
      title,
      total,
      trade
    } = this.props.data;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: `bg-color ${bgColor}`
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCard__WEBPACK_IMPORTED_MODULE_2__["RctCard"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCard__WEBPACK_IMPORTED_MODULE_2__["RctCardContent"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "chart-title d-flex justify-content-start align-items-center"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "material-icons mr-10"
    }, icon), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "fw-normal text-capitalize"
    }, title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "chart-wrap"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Line"], {
      ref: "chart",
      data: data,
      options: options,
      height: 75
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "chart-content d-flex justify-content-between align-items-center"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "+", total), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "text-capitalize"
    }, "trade:", trade, "%"))))));
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

  reactHotLoader.register(LineChart, "LineChart", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\LineChart.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);