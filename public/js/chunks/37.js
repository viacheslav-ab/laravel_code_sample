(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

/***/ "./resources/js/components/Charts/SimpleBarChart.js":
/*!**********************************************************!*\
  !*** ./resources/js/components/Charts/SimpleBarChart.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BarChart; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Simple Bar Chart Component
 */


const options = {
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      display: false
    }],
    yAxes: [{
      display: false,
      ticks: {
        beginAtZero: true
      }
    }]
  }
};
class BarChart extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      labels,
      datasets
    } = this.props;
    const data = {
      labels,
      datasets
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Bar"], {
      data: data,
      options: options,
      height: 80
    });
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

  reactHotLoader.register(options, "options", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Charts\\SimpleBarChart.js");
  reactHotLoader.register(BarChart, "BarChart", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Charts\\SimpleBarChart.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/js/components/Widgets/BandWidthUsageBarChart.js":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Widgets/BandWidthUsageBarChart.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var Components_Charts_SimpleBarChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Components/Charts/SimpleBarChart */ "./resources/js/components/Charts/SimpleBarChart.js");
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
 * BandWidth Usage Bar Chart
 */
 // chart

 // intl messages

 // rct card box



const BandWidthUsageBarChart = ({
  data
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCard__WEBPACK_IMPORTED_MODULE_3__["RctCard"], {
  customClasses: "gradient-success overflow-hidden"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "p-20 text-white"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_2__["default"], {
  id: "widgets.dataUse"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, data.totalUsed)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCard__WEBPACK_IMPORTED_MODULE_3__["RctCardContent"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Charts_SimpleBarChart__WEBPACK_IMPORTED_MODULE_1__["default"], {
  labels: data.labels,
  datasets: data.datasets
})));

const _default = BandWidthUsageBarChart;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(BandWidthUsageBarChart, "BandWidthUsageBarChart", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\BandWidthUsageBarChart.js");
  reactHotLoader.register(_default, "default", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\BandWidthUsageBarChart.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);