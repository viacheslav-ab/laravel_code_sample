(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[194],{

/***/ "./resources/js/components/Widgets/TotalEarnsChart.js":
/*!************************************************************!*\
  !*** ./resources/js/components/Widgets/TotalEarnsChart.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var Constants_chart_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Constants/chart-config */ "./resources/js/constants/chart-config.js");
/* harmony import */ var Helpers_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Helpers/helpers */ "./resources/js/helpers/helpers.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Total Earns Chart Widget
 */


 // chart config


 // chart options

const options = {
  layout: {
    padding: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }
  },
  legend: {
    display: false
  },
  maintainAspectRatio: true,
  scales: {
    yAxes: [{
      ticks: {
        fontColor: Object(Helpers_helpers__WEBPACK_IMPORTED_MODULE_4__["hexToRgbA"])(Constants_chart_config__WEBPACK_IMPORTED_MODULE_3__["default"].color.dark, 0.4),
        fontStyle: "light",
        beginAtZero: true,
        maxTicksLimit: 5,
        padding: 10
      },
      gridLines: {
        drawTicks: true,
        drawBorder: false,
        display: true,
        color: Object(Helpers_helpers__WEBPACK_IMPORTED_MODULE_4__["hexToRgbA"])(Constants_chart_config__WEBPACK_IMPORTED_MODULE_3__["default"].color.dark, 0.1),
        zeroLineColor: "transparent"
      }
    }],
    xAxes: [{
      gridLines: {
        display: true,
        color: Object(Helpers_helpers__WEBPACK_IMPORTED_MODULE_4__["hexToRgbA"])(Constants_chart_config__WEBPACK_IMPORTED_MODULE_3__["default"].color.dark, 0.1)
      },
      ticks: {
        padding: 20,
        fontColor: Object(Helpers_helpers__WEBPACK_IMPORTED_MODULE_4__["hexToRgbA"])(Constants_chart_config__WEBPACK_IMPORTED_MODULE_3__["default"].color.dark, 0.4),
        fontStyle: "light"
      }
    }]
  }
};

class TotalEarnsChart extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      data
    } = this.props; // chart data

    const dashboardPanelChart = {
      data: canvas => {
        const ctx = canvas.getContext("2d");
        var chartColor = Object(Helpers_helpers__WEBPACK_IMPORTED_MODULE_4__["hexToRgbA"])(Constants_chart_config__WEBPACK_IMPORTED_MODULE_3__["default"].color.primary, 1);
        var gradientFill = ctx.createLinearGradient(0, 230, 0, 60);
        gradientFill.addColorStop(0, "rgba(255, 255, 255, 0)");
        gradientFill.addColorStop(1, Object(Helpers_helpers__WEBPACK_IMPORTED_MODULE_4__["hexToRgbA"])(Constants_chart_config__WEBPACK_IMPORTED_MODULE_3__["default"].color.primary, 0.8));
        return {
          labels: data.chartData.labels,
          datasets: [{
            label: data.chartData.label,
            borderColor: chartColor,
            pointBorderColor: Object(Helpers_helpers__WEBPACK_IMPORTED_MODULE_4__["hexToRgbA"])(Constants_chart_config__WEBPACK_IMPORTED_MODULE_3__["default"].color.white, 1),
            pointBackgroundColor: Object(Helpers_helpers__WEBPACK_IMPORTED_MODULE_4__["hexToRgbA"])(Constants_chart_config__WEBPACK_IMPORTED_MODULE_3__["default"].color.primary, 1),
            pointHoverBackgroundColor: Object(Helpers_helpers__WEBPACK_IMPORTED_MODULE_4__["hexToRgbA"])(Constants_chart_config__WEBPACK_IMPORTED_MODULE_3__["default"].color.primary, 1),
            pointHoverBorderColor: Object(Helpers_helpers__WEBPACK_IMPORTED_MODULE_4__["hexToRgbA"])(Constants_chart_config__WEBPACK_IMPORTED_MODULE_3__["default"].color.white, 1),
            pointBorderWidth: 2,
            pointHoverRadius: 7,
            pointHoverBorderWidth: 2,
            pointRadius: 7,
            fill: true,
            backgroundColor: gradientFill,
            borderWidth: 2,
            data: data.chartData.data
          }]
        };
      }
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "chart-top d-flex justify-content-between display-n p-20"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex align-items-start"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ButtonGroup"], {
      className: "default-btn-group"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      className: "btn-sm"
    }, "Week"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      className: "btn-sm active"
    }, "Month"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      className: "btn-sm"
    }, "Year"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      className: "btn-sm"
    }, "Today"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex align-items-end"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: `${data.legend.class} badge-sm`
    }, "\xA0"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "fs-12"
    }, data.legend.name))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Line"], {
      data: dashboardPanelChart.data,
      options: options,
      height: 100
    }));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

const _default = TotalEarnsChart;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(options, "options", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\TotalEarnsChart.js");
  reactHotLoader.register(TotalEarnsChart, "TotalEarnsChart", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\TotalEarnsChart.js");
  reactHotLoader.register(_default, "default", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\TotalEarnsChart.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);