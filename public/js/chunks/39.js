(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "./resources/js/components/Charts/StackedAreaChart.js":
/*!************************************************************!*\
  !*** ./resources/js/components/Charts/StackedAreaChart.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StackedAreaChartComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var Constants_chart_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Constants/chart-config */ "./resources/js/constants/chart-config.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Stacked Area Chart
 */



const options = {
  legend: {
    display: false,
    labels: {
      fontColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_2__["default"].legendFontColor,
      usePointStyle: true
    }
  },
  scales: {
    xAxes: [{
      gridLines: {
        color: Constants_chart_config__WEBPACK_IMPORTED_MODULE_2__["default"].chartGridColor,
        display: false
      },
      ticks: {
        fontColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_2__["default"].axesColor
      }
    }],
    yAxes: [{
      gridLines: {
        color: Constants_chart_config__WEBPACK_IMPORTED_MODULE_2__["default"].chartGridColor
      },
      ticks: {
        fontColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_2__["default"].axesColor,
        min: 100,
        max: 800
      }
    }]
  }
}; // Main Component

class StackedAreaChartComponent extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      labels,
      datasets
    } = this.props;
    const data = {
      labels,
      datasets
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Line"], {
      data: data,
      options: options,
      height: 60
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

  reactHotLoader.register(options, "options", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Charts\\StackedAreaChart.js");
  reactHotLoader.register(StackedAreaChartComponent, "StackedAreaChartComponent", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Charts\\StackedAreaChart.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/js/components/Widgets/TotalEarnsWithAreaChart.js":
/*!********************************************************************!*\
  !*** ./resources/js/components/Widgets/TotalEarnsWithAreaChart.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var Components_Charts_StackedAreaChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Components/Charts/StackedAreaChart */ "./resources/js/components/Charts/StackedAreaChart.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Total Earns With Area Chart
 */

 // chart



class TotalEarnsWithAreaChart extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      datasets,
      labels
    } = this.props.chartData;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "chart-top total-earn-chart d-flex justify-content-between mb-50"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex align-items-end"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "badge-primary badge-sm"
    }, "\xA0"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "fs-12"
    }, "Sales"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "badge-warning badge-sm"
    }, "\xA0"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "fs-12"
    }, "Visitors")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex align-items-start display-n"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ButtonGroup"], {
      className: "default-btn-group"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      className: "btn-sm"
    }, "Week"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      className: "btn-sm active"
    }, "Month"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      className: "btn-sm"
    }, "Year"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      className: "btn-sm"
    }, "Today")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Charts_StackedAreaChart__WEBPACK_IMPORTED_MODULE_2__["default"], {
      labels: labels,
      datasets: datasets
    }));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

const _default = TotalEarnsWithAreaChart;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TotalEarnsWithAreaChart, "TotalEarnsWithAreaChart", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\TotalEarnsWithAreaChart.js");
  reactHotLoader.register(_default, "default", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\TotalEarnsWithAreaChart.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);