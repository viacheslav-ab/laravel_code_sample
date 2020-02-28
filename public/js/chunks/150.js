(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[150],{

/***/ "./resources/js/components/Widgets/BandwidthUsage.js":
/*!***********************************************************!*\
  !*** ./resources/js/components/Widgets/BandwidthUsage.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_d3_speedometer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-d3-speedometer */ "./node_modules/react-d3-speedometer/dist/index.js");
/* harmony import */ var react_d3_speedometer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_d3_speedometer__WEBPACK_IMPORTED_MODULE_1__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Bandwidth Usage Widget
 */



class BandwidthUsageWidget extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      bandwidthUsage: 200
    };
  }

  componentDidMount() {
    let self = this;
    this.timerHandle = setInterval(() => {
      self.setState({
        bandwidthUsage: Math.floor(Math.random() * 1000) + 1
      });
    }, 1500);
  }

  componentWillUnmount() {
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
    }
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_d3_speedometer__WEBPACK_IMPORTED_MODULE_1___default.a, {
      value: this.state.bandwidthUsage,
      startColor: "red",
      endColor: "green",
      needleColor: "steelblue",
      height: 200,
      ringWidth: 40,
      needleColor: "#895DFF",
      currentValueText: "Bandwidth Usage: ${value} Kb"
    }));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

const _default = BandwidthUsageWidget;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(BandwidthUsageWidget, "BandwidthUsageWidget", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\BandwidthUsage.js");
  reactHotLoader.register(_default, "default", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\BandwidthUsage.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);