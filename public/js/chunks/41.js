(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[41],{

/***/ "./resources/js/components/Charts/StackedLineChart.js":
/*!************************************************************!*\
  !*** ./resources/js/components/Charts/StackedLineChart.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
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
 * Stacked Line Chart
 */




 // chart options

const options = {
  legend: {
    display: true
  },
  scales: {
    xAxes: [{
      display: true
    }],
    yAxes: [{
      display: true,
      gridLines: {
        display: false
      }
    }]
  }
}; // Main Component

class StackedLineChart extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      darkMode
    } = this.props;

    const data = canvas => {
      const ctx = canvas.getContext("2d");
      var gradientFill1 = ctx.createLinearGradient(0, 0, 0, 350);
      var gradientFill2 = ctx.createLinearGradient(0, 0, 0, 325);
      gradientFill1.addColorStop(0, Object(Helpers_helpers__WEBPACK_IMPORTED_MODULE_4__["hexToRgbA"])(Constants_chart_config__WEBPACK_IMPORTED_MODULE_3__["default"].color.info, 1));
      gradientFill1.addColorStop(1, darkMode ? "#2c3644" : "#FFFFFF");
      gradientFill2.addColorStop(0, Object(Helpers_helpers__WEBPACK_IMPORTED_MODULE_4__["hexToRgbA"])(Constants_chart_config__WEBPACK_IMPORTED_MODULE_3__["default"].color.primary, 1));
      gradientFill2.addColorStop(1, darkMode ? "#000000" : "#FFFFFF");
      return {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
          label: 'Campaign 1',
          lineTension: 0,
          backgroundColor: gradientFill1,
          borderColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_3__["default"].color.info,
          borderWidth: 3,
          pointBorderWidth: 0,
          pointRadius: 0,
          data: [50, 45, 22, 18, 25, 5, 35, 20, 45, 22, 30, 70, 40]
        }, {
          label: 'Campaign 2',
          lineTension: 0,
          backgroundColor: gradientFill2,
          borderColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_3__["default"].color.primary,
          borderWidth: 3,
          pointBorderWidth: 0,
          pointRadius: 0,
          data: [40, 30, 60, 30, 35, 50, 10, 30, 25, 28, 55, 65, 80]
        }]
      };
    };

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Line"], {
      data: data,
      options: options,
      height: 200
    });
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

const mapStateToProps = ({
  settings
}) => {
  const {
    darkMode
  } = settings;
  return {
    darkMode
  };
};

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(StackedLineChart);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(options, "options", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Charts\\StackedLineChart.js");
  reactHotLoader.register(StackedLineChart, "StackedLineChart", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Charts\\StackedLineChart.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Charts\\StackedLineChart.js");
  reactHotLoader.register(_default, "default", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Charts\\StackedLineChart.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/js/components/Widgets/NewslaterCampaign.js":
/*!**************************************************************!*\
  !*** ./resources/js/components/Widgets/NewslaterCampaign.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NewslaterCampaign; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var Components_Charts_StackedLineChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Components/Charts/StackedLineChart */ "./resources/js/components/Charts/StackedLineChart.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

//Newslater widget
 // chart


class NewslaterCampaign extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Charts_StackedLineChart__WEBPACK_IMPORTED_MODULE_1__["default"], null));
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

  reactHotLoader.register(NewslaterCampaign, "NewslaterCampaign", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\NewslaterCampaign.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);