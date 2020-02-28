(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[84],{

/***/ "./resources/js/components/Widgets/ProjectStatsChart.js":
/*!**************************************************************!*\
  !*** ./resources/js/components/Widgets/ProjectStatsChart.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectStatsChart; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var Components_RctCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Components/RctCard */ "./resources/js/components/RctCard/index.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * project statatics chart
 */

 // rct card box

 // visitor chart data

const options = {
  //responsive: true,
  legend: false,
  scales: {
    xAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Time',
        fontSize: 14
      },
      gridLines: {
        display: false
      },
      ticks: {
        display: true //this will remove only the label

      }
    }],
    yAxes: [{
      gridLines: {
        drawBorder: false
      },
      scaleLabel: {
        display: true,
        labelString: 'Cost',
        fontSize: 14
      },
      ticks: {
        padding: 5
      }
    }]
  }
};
class ProjectStatsChart extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const data = {
      labels: this.props.labels,
      datasets: [{
        fill: false,
        lineTension: 0.4,
        borderColor: "#5D92F4",
        borderWidth: 3,
        pointBorderColor: "#5D92F4",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 2,
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#5D92F4",
        pointHoverBorderWidth: 3,
        pointRadius: 6,
        data: this.props.data
      }]
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCard__WEBPACK_IMPORTED_MODULE_2__["RctCard"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCard__WEBPACK_IMPORTED_MODULE_2__["RctCardContent"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "mb-15"
    }, "Statistics"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "chart-wrap"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Line"], {
      ref: "chart",
      data: data,
      options: options
    }))));
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

  reactHotLoader.register(options, "options", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\ProjectStatsChart.js");
  reactHotLoader.register(ProjectStatsChart, "ProjectStatsChart", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\ProjectStatsChart.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);