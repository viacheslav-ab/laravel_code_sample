(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

/***/ "./resources/js/components/Charts/SalesChart.js":
/*!******************************************************!*\
  !*** ./resources/js/components/Charts/SalesChart.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SalesChart; });
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
 * Sales Chart Component
 */

 // chart config file

 // Main Component

class SalesChart extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      labels,
      label,
      borderColor,
      chartdata,
      pointBackgroundColor,
      height,
      pointBorderColor,
      borderWidth
    } = this.props;

    const data = canvas => {
      const ctx = canvas.getContext("2d");
      const _stroke = ctx.stroke;

      ctx.stroke = function () {
        ctx.save();
        ctx.shadowColor = Constants_chart_config__WEBPACK_IMPORTED_MODULE_2__["default"].shadowColor;
        ctx.shadowBlur = 13;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 12;

        _stroke.apply(this, arguments);

        ctx.restore();
      };

      return {
        labels: labels,
        datasets: [{
          label: label,
          fill: false,
          lineTension: 0,
          fillOpacity: 0.3,
          borderColor: borderColor,
          borderWidth: borderWidth,
          pointBorderColor: pointBorderColor,
          pointBackgroundColor: pointBackgroundColor,
          pointBorderWidth: 3,
          pointRadius: 6,
          pointHoverBackgroundColor: pointBackgroundColor,
          pointHoverBorderColor: pointBorderColor,
          pointHoverBorderWidth: 4,
          pointHoverRadius: 7,
          data: chartdata
        }]
      };
    }; // chart options


    const options = {
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          display: true,
          ticks: {
            min: 0
          },
          gridLines: {
            display: true,
            drawBorder: false
          }
        }],
        yAxes: [{
          display: false,
          ticks: {
            suggestedMin: 0,
            beginAtZero: true
          }
        }]
      }
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Line"], {
      data: data,
      options: options,
      height: height
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

  reactHotLoader.register(SalesChart, "SalesChart", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Charts\\SalesChart.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/js/components/Widgets/DailySales.js":
/*!*******************************************************!*\
  !*** ./resources/js/components/Widgets/DailySales.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var Components_Charts_SalesChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Components/Charts/SalesChart */ "./resources/js/components/Charts/SalesChart.js");
/* harmony import */ var Components_RctCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Components/RctCard */ "./resources/js/components/RctCard/index.js");
/* harmony import */ var Constants_chart_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Constants/chart-config */ "./resources/js/constants/chart-config.js");
/* harmony import */ var Util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Util/IntlMessages */ "./resources/js/util/IntlMessages.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Daily Sales Widget
 */
 // chart

 // card component

 // constants

 // intl messages



const DailySales = ({
  label,
  chartdata,
  labels
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "p-20"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "mb-20 d-flex"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
  className: "mr-15 ti-arrow-up text-success font-lg"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
  className: "mb-5"
}, "12,255 Today"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  className: "mb-0"
}, "10% increase from yesterday"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Charts_SalesChart__WEBPACK_IMPORTED_MODULE_1__["default"], {
  label: label,
  chartdata: chartdata,
  labels: labels,
  borderColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_3__["default"].color.info,
  pointBackgroundColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_3__["default"].color.info,
  height: 125,
  pointBorderColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_3__["default"].color.white,
  borderWidth: 4
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCard__WEBPACK_IMPORTED_MODULE_2__["RctCardFooter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: "fs-12 text-base"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
  className: "mr-5 zmdi zmdi-refresh"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
  id: "widgets.updated10Minago"
}))));

const _default = DailySales;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(DailySales, "DailySales", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\DailySales.js");
  reactHotLoader.register(_default, "default", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\DailySales.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);