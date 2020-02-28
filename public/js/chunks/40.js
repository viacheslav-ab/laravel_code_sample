(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

/***/ "./resources/js/components/Charts/StackedBarChart.js":
/*!***********************************************************!*\
  !*** ./resources/js/components/Charts/StackedBarChart.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BarChart; });
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
 * Overall Traffic Stats
 * Stacked Bar CHart Component
 */

 // chart config


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
    const options = {
      legend: {
        display: false
      },
      layout: {
        padding: {
          left: 20,
          right: 20,
          top: 20,
          bottom: 20
        }
      },
      scales: {
        xAxes: [{
          gridLines: {
            color: Constants_chart_config__WEBPACK_IMPORTED_MODULE_2__["default"].chartGridColor
          },
          ticks: {
            fontColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_2__["default"].axesColor
          },
          display: true
        }],
        yAxes: [{
          gridLines: {
            color: Constants_chart_config__WEBPACK_IMPORTED_MODULE_2__["default"].chartGridColor
          },
          ticks: {
            fontColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_2__["default"].axesColor
          }
        }]
      }
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Bar"], {
      data: data,
      options: options,
      height: 150
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

  reactHotLoader.register(BarChart, "BarChart", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Charts\\StackedBarChart.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/js/components/Widgets/OverallTrafficStatus.js":
/*!*****************************************************************!*\
  !*** ./resources/js/components/Widgets/OverallTrafficStatus.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OverallTrafficStatus; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var Components_Charts_StackedBarChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Components/Charts/StackedBarChart */ "./resources/js/components/Charts/StackedBarChart.js");
/* harmony import */ var Util_IntlMessages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Util/IntlMessages */ "./resources/js/util/IntlMessages.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Overall Traffic Status Widget
 */
 // chart

 // intl messages


class OverallTrafficStatus extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      chartLabels,
      chartDatasets,
      onlineSources,
      today,
      lastMonth
    } = this.props.chartData;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "p-40 display-n"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-xl-4 col-md-4 col-sm-4"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "text-muted mb-5 d-block"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_2__["default"], {
      id: "widgets.onlineSources"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex justify-content-between"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "text-muted mb-0"
    }, onlineSources), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "ti-arrow-up text-info font-lg"
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-xl-4 col-md-4 col-sm-4"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "text-muted mb-5 d-block"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_2__["default"], {
      id: "widgets.today"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex justify-content-between"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "text-muted mb-0"
    }, today, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "ti-arrow-up text-info font-lg"
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-xl-4 col-md-4 col-sm-4"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "text-muted mb-5 d-block"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_2__["default"], {
      id: "widgets.lastMonth"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex justify-content-between"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "text-muted mb-0"
    }, lastMonth, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "ti-arrow-down text-pink font-lg"
    }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Charts_StackedBarChart__WEBPACK_IMPORTED_MODULE_1__["default"], {
      labels: chartLabels,
      datasets: chartDatasets
    }));
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

  reactHotLoader.register(OverallTrafficStatus, "OverallTrafficStatus", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\OverallTrafficStatus.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);