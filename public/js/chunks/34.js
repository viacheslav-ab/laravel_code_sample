(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ "./resources/js/components/Charts/NewsVisitorsChart.js":
/*!*************************************************************!*\
  !*** ./resources/js/components/Charts/NewsVisitorsChart.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StackedBarChart; });
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
 *News Visitors Chart
 * Stacked Bar CHart Component
 */

 // chart config


class StackedBarChart extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      labels,
      datasets
    } = this.props;
    const data = {
      labels,
      datasets
    };
    const options = {
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          gridLines: {
            color: Constants_chart_config__WEBPACK_IMPORTED_MODULE_2__["default"].chartGridColor
          },
          ticks: {
            fontColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_2__["default"].axesColor
          },
          display: false
        }],
        yAxes: [{
          gridLines: {
            color: Constants_chart_config__WEBPACK_IMPORTED_MODULE_2__["default"].chartGridColor
          },
          ticks: {
            fontColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_2__["default"].axesColor
          },
          display: false
        }]
      }
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Bar"], {
      data: data,
      options: options,
      height: 130
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

  reactHotLoader.register(StackedBarChart, "StackedBarChart", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Charts\\NewsVisitorsChart.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/js/components/Widgets/Visitors.js":
/*!*****************************************************!*\
  !*** ./resources/js/components/Widgets/Visitors.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Visitors; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-countup */ "./node_modules/react-countup/build/index.js");
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var Components_Charts_NewsVisitorsChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Components/Charts/NewsVisitorsChart */ "./resources/js/components/Charts/NewsVisitorsChart.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

//Visitors Widget

 // chart


class Visitors extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      chartLabels,
      chartDatasets
    } = this.props.chartData;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "top-content mb-3"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_countup__WEBPACK_IMPORTED_MODULE_1___default.a, {
      separator: ",",
      className: "count-value",
      start: 0,
      end: 12500,
      duration: 5,
      useEasing: true
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: ""
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "text-success"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "zmdi zmdi-long-arrow-up zmdi-hc-lg mr-2"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "font-xs"
    }, "+24% ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "font-xs text-muted"
    }, "From Last Month"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "chart-wrap"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Charts_NewsVisitorsChart__WEBPACK_IMPORTED_MODULE_2__["default"], {
      labels: chartLabels,
      datasets: chartDatasets
    })));
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

  reactHotLoader.register(Visitors, "Visitors", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\Visitors.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);