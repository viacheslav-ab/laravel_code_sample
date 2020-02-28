(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[48],{

/***/ "./resources/js/components/Charts/TinyPieChart.js":
/*!********************************************************!*\
  !*** ./resources/js/components/Charts/TinyPieChart.js ***!
  \********************************************************/
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
 * Tiny Pie Chart
 */

 // chart congig


const options = {
  legend: {
    display: false,
    labels: {
      fontColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_2__["default"].legendFontColor
    }
  }
};

const TinyPieChart = ({
  labels,
  datasets,
  width,
  height
}) => {
  const data = {
    labels,
    datasets
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Pie"], {
    height: height,
    width: width,
    data: data,
    options: options
  });
};

const _default = TinyPieChart;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(options, "options", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Charts\\TinyPieChart.js");
  reactHotLoader.register(TinyPieChart, "TinyPieChart", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Charts\\TinyPieChart.js");
  reactHotLoader.register(_default, "default", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Charts\\TinyPieChart.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/js/components/Widgets/Revenue.js":
/*!****************************************************!*\
  !*** ./resources/js/components/Widgets/Revenue.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Revenue; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var Util_IntlMessages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Util/IntlMessages */ "./resources/js/util/IntlMessages.js");
/* harmony import */ var Components_Charts_TinyPieChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Components/Charts/TinyPieChart */ "./resources/js/components/Charts/TinyPieChart.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Revenue Widget
 */
 // intl messages

 // chart component


class Revenue extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      data
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "card-title"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_1__["default"], {
      id: "widgets.totalRevenue"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-sm-6 col-md-6 w-40 mx-auto"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Charts_TinyPieChart__WEBPACK_IMPORTED_MODULE_2__["default"], {
      labels: data.chartData.labels,
      datasets: data.chartData.datasets,
      height: 110,
      width: 100
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-sm-6 align-self-center display-n"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "clearfix mb-15"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "float-left"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "badge-primary ladgend"
    }, "\xA0")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "float-left"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "mb-0"
    }, data.target), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "text-dark fs-14"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_1__["default"], {
      id: "widgets.target"
    })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "clearfix mb-15"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "float-left"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "badge-info ladgend"
    }, "\xA0")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "float-left"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "mb-0"
    }, data.lastWeek), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "text-dark fs-14"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_1__["default"], {
      id: "widgets.monthly"
    })))))));
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

  reactHotLoader.register(Revenue, "Revenue", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\Revenue.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);