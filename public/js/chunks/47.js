(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[47],{

/***/ "./resources/js/components/Charts/TinyLineChart.js":
/*!*********************************************************!*\
  !*** ./resources/js/components/Charts/TinyLineChart.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TinyLineChart; });
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
 * Tiny Line Chart Component
 */

 // chart config file

 // Main Component

class TinyLineChart extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      labels,
      label,
      borderColor,
      chartdata,
      pointBackgroundColor,
      height,
      pointBorderColor,
      borderWidth,
      xAxes
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
          pointBorderWidth: borderWidth,
          pointHoverBackgroundColor: pointBackgroundColor,
          pointHoverBorderColor: pointBorderColor,
          pointHoverBorderWidth: borderWidth,
          pointRadius: 1,
          pointHitRadius: 10,
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
          display: xAxes,
          ticks: {
            min: 0
          },
          gridLines: {
            display: false
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

  reactHotLoader.register(TinyLineChart, "TinyLineChart", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Charts\\TinyLineChart.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/js/components/Widgets/TotalSales.js":
/*!*******************************************************!*\
  !*** ./resources/js/components/Widgets/TotalSales.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-countup */ "./node_modules/react-countup/build/index.js");
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var Components_Charts_TinyLineChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Components/Charts/TinyLineChart */ "./resources/js/components/Charts/TinyLineChart.js");
/* harmony import */ var Constants_chart_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Constants/chart-config */ "./resources/js/constants/chart-config.js");
/* harmony import */ var Util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Util/IntlMessages */ "./resources/js/util/IntlMessages.js");
/* harmony import */ var Components_RctCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Components/RctCard */ "./resources/js/components/RctCard/index.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Total Sales Widget
 */

 // chart

 // constants

 // intl messages

 // rct card box



const TotalSales = ({
  label,
  chartdata,
  labels
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCard__WEBPACK_IMPORTED_MODULE_5__["RctCard"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "rct-block-title d-flex justify-content-between"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "d-flex align-items-start"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
  id: "widgets.totalSales"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "align-items-end"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: "d-block text-muted counter-point"
}, "$", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_countup__WEBPACK_IMPORTED_MODULE_1___default.a, {
  start: 0,
  end: 1435,
  duration: 3,
  useEasing: true
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  className: "text-right mb-0 text-muted"
}, "+54%"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCard__WEBPACK_IMPORTED_MODULE_5__["RctCardContent"], {
  noPadding: true
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Charts_TinyLineChart__WEBPACK_IMPORTED_MODULE_2__["default"], {
  label: label,
  chartdata: chartdata,
  labels: labels,
  borderColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_3__["default"].color.purple,
  pointBackgroundColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_3__["default"].color.purple,
  height: 100,
  pointBorderColor: "#FFFFFF",
  borderWidth: 4
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCard__WEBPACK_IMPORTED_MODULE_5__["RctCardFooter"], {
  customClasses: "d-flex justify-content-between"
}, labels && labels.map((label, key) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: "fs-12 text-muted",
  key: key
}, label))));

const _default = TotalSales;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TotalSales, "TotalSales", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\TotalSales.js");
  reactHotLoader.register(_default, "default", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\TotalSales.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);