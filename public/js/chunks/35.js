(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "./resources/js/components/Charts/ProductStatsChart.js":
/*!*************************************************************!*\
  !*** ./resources/js/components/Charts/ProductStatsChart.js ***!
  \*************************************************************/
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
 * Product Stats Chart
 */

 // chart config

 // options

const options = {
  elements: {
    point: {
      radius: 0
    }
  },
  legend: {
    display: false,
    labels: {
      fontColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_2__["default"].legendFontColor
    }
  },
  scales: {
    xAxes: [{
      gridLines: {
        offsetGridLines: true,
        display: false
      },
      ticks: {
        fontColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_2__["default"].axesColor
      }
    }],
    yAxes: [{
      gridLines: {
        drawBorder: false,
        zeroLineColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_2__["default"].chartGridColor
      },
      ticks: {
        fontColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_2__["default"].axesColor,
        stepSize: 1000,
        beginAtZero: true,
        padding: 40
      }
    }]
  }
};

class ProductStatsChart extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      labels,
      datasets
    } = this.props;

    const data = canvas => {
      const ctx = canvas.getContext("2d");
      const _stroke = ctx.stroke;

      ctx.stroke = function () {
        ctx.save();
        ctx.shadowColor = 'rgba(0,0,0,0.5)';
        ctx.shadowBlur = 13;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 12;

        _stroke.apply(this, arguments);

        ctx.restore();
      };

      return {
        labels,
        datasets
      };
    };

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Line"], {
      data: data,
      options: options,
      height: 95
    });
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

const _default = ProductStatsChart;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(options, "options", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Charts\\ProductStatsChart.js");
  reactHotLoader.register(ProductStatsChart, "ProductStatsChart", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Charts\\ProductStatsChart.js");
  reactHotLoader.register(_default, "default", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Charts\\ProductStatsChart.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/js/components/Widgets/ProductStats.js":
/*!*********************************************************!*\
  !*** ./resources/js/components/Widgets/ProductStats.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var Components_Charts_ProductStatsChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Components/Charts/ProductStatsChart */ "./resources/js/components/Charts/ProductStatsChart.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Product Stats Widget
 */
 // chart



class ProductStats extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      data
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "chart-top mb-4"
    }, data.customLegends.map((legend, key) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: key
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: `${legend.class} ladgend mr-10`
    }, "\xA0"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "fs-12 mr-10"
    }, legend.name)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Charts_ProductStatsChart__WEBPACK_IMPORTED_MODULE_1__["default"], {
      labels: data.labels,
      datasets: data.datasets
    }));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

const _default = ProductStats;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ProductStats, "ProductStats", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\ProductStats.js");
  reactHotLoader.register(_default, "default", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\ProductStats.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);