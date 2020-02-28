(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

/***/ "./resources/js/components/Charts/EmailStatistic.js":
/*!**********************************************************!*\
  !*** ./resources/js/components/Charts/EmailStatistic.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
 * Email Statistics Bar Chart
 */



const options = {
  legend: {
    display: false,
    labels: {
      fontColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_2__["default"].legendFontColor
    }
  },
  scales: {
    xAxes: [{
      gridLines: {
        display: false
      },
      ticks: {
        fontColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_2__["default"].color.white,
        fontSize: 14,
        beginAtZero: true
      }
    }],
    yAxes: [{
      gridLines: {
        drawBorder: false,
        zeroLineColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_2__["default"].axesColor,
        color: Constants_chart_config__WEBPACK_IMPORTED_MODULE_2__["default"].axesColor
      },
      ticks: {
        fontColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_2__["default"].axesColor,
        stepSize: 10,
        display: false,
        beginAtZero: true
      }
    }]
  }
};

const EmailStatistic = ({
  datasets,
  labels
}) => {
  const data = {
    labels,
    datasets
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Bar"], {
    height: 240,
    data: data,
    options: options
  });
};

const _default = EmailStatistic;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(options, "options", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Charts\\EmailStatistic.js");
  reactHotLoader.register(EmailStatistic, "EmailStatistic", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Charts\\EmailStatistic.js");
  reactHotLoader.register(_default, "default", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Charts\\EmailStatistic.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/js/components/Widgets/EmailStatisticsVersion2.js":
/*!********************************************************************!*\
  !*** ./resources/js/components/Widgets/EmailStatisticsVersion2.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var Components_Charts_EmailStatistic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Components/Charts/EmailStatistic */ "./resources/js/components/Charts/EmailStatistic.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Email Statistics V2
 */
 // chart



class EmailStatisticsVersion2 extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      data
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Charts_EmailStatistic__WEBPACK_IMPORTED_MODULE_1__["default"], {
      labels: data.labels,
      datasets: data.datasets
    });
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

const _default = EmailStatisticsVersion2;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(EmailStatisticsVersion2, "EmailStatisticsVersion2", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\EmailStatisticsVersion2.js");
  reactHotLoader.register(_default, "default", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\EmailStatisticsVersion2.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);