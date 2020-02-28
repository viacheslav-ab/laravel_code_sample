(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ "./resources/js/components/Charts/HorizontalBarChart.js":
/*!**************************************************************!*\
  !*** ./resources/js/components/Charts/HorizontalBarChart.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HorizontalBarChart; });
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
 * Horizontal Bar Chart
 */


 // Main Component

class HorizontalBarChart extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      labels,
      label,
      chartdata,
      height
    } = this.props;

    const data = () => {
      return {
        labels: labels,
        datasets: [{
          barPercentage: 1.0,
          categoryPercentage: 0.45,
          label: label,
          backgroundColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_2__["default"].color.info,
          borderColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_2__["default"].color.info,
          borderWidth: 1,
          hoverBackgroundColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_2__["default"].color.info,
          hoverBorderColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_2__["default"].color.info,
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
          gridLines: {
            color: Constants_chart_config__WEBPACK_IMPORTED_MODULE_2__["default"].chartGridColor,
            drawBorder: false
          },
          ticks: {
            fontColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_2__["default"].axesColor,
            min: 1,
            max: 9
          }
        }],
        yAxes: [{
          gridLines: {
            display: false
          },
          ticks: {
            fontColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_2__["default"].axesColor
          }
        }]
      }
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["HorizontalBar"], {
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

  reactHotLoader.register(HorizontalBarChart, "HorizontalBarChart", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Charts\\HorizontalBarChart.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/js/components/Widgets/TrafficChannel.js":
/*!***********************************************************!*\
  !*** ./resources/js/components/Widgets/TrafficChannel.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var Components_RctCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Components/RctCard */ "./resources/js/components/RctCard/index.js");
/* harmony import */ var Components_Charts_HorizontalBarChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Components/Charts/HorizontalBarChart */ "./resources/js/components/Charts/HorizontalBarChart.js");
/* harmony import */ var Util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Util/IntlMessages */ "./resources/js/util/IntlMessages.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Traffic Sales Widget
 */

 // card component

 // chart

 // intl messages



const TrafficChannel = ({
  label,
  chartdata,
  labels
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "sales-chart-wrap"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "p-15"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Charts_HorizontalBarChart__WEBPACK_IMPORTED_MODULE_3__["default"], {
  label: label,
  chartdata: chartdata,
  labels: labels,
  height: 168
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCard__WEBPACK_IMPORTED_MODULE_2__["RctCardFooter"], {
  customClasses: "d-flex justify-content-between align-items-center"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
  size: "small",
  variant: "contained",
  color: "primary",
  className: "text-white"
}, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
  id: "button.goToCampaign"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  className: "fs-12 mb-0 text-base"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
  className: "mr-5 zmdi zmdi-refresh"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
  id: "widgets.updated10Minago"
}))));

const _default = TrafficChannel;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TrafficChannel, "TrafficChannel", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\TrafficChannel.js");
  reactHotLoader.register(_default, "default", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\TrafficChannel.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);