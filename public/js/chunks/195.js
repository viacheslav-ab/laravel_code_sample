(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[195],{

/***/ "./resources/js/components/Widgets/TrafficSources.js":
/*!***********************************************************!*\
  !*** ./resources/js/components/Widgets/TrafficSources.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var Util_IntlMessages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Util/IntlMessages */ "./resources/js/util/IntlMessages.js");
/* harmony import */ var Constants_chart_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Constants/chart-config */ "./resources/js/constants/chart-config.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Traffic Sources Widget
 */

 // intl messages

 // chart config file


const options = {
  elements: {
    point: {
      radius: 0
    }
  },
  legend: {
    display: false,
    labels: {
      fontColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_3__["default"].legendFontColor
    }
  },
  scales: {
    xAxes: [{
      gridLines: {
        offsetGridLines: true,
        drawBorder: false
      },
      ticks: {
        fontColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_3__["default"].axesColor,
        display: false
      }
    }],
    yAxes: [{
      gridLines: {
        drawBorder: false,
        zeroLineColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_3__["default"].chartGridColor,
        display: false
      },
      ticks: {
        fontColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_3__["default"].axesColor,
        display: false,
        stepSize: 60,
        beginAtZero: true,
        padding: 40
      }
    }]
  }
};

class TrafficSourcesWidget extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const data = canvas => {
      const ctx = canvas.getContext("2d");
      const _stroke = ctx.stroke;

      ctx.stroke = function () {
        ctx.save();
        ctx.shadowColor = Constants_chart_config__WEBPACK_IMPORTED_MODULE_3__["default"].shadowColor;
        ctx.shadowBlur = 13;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 12;

        _stroke.apply(this, arguments);

        ctx.restore();
      };

      return {
        labels: this.props.data.chartData.labels,
        datasets: [{
          label: 'Traffic',
          fill: false,
          tension: 0,
          backgroundColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_3__["default"].color.info,
          borderColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_3__["default"].color.info,
          borderWidth: 3,
          pointBorderWidth: 0,
          hoverBackgroundColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_3__["default"].color.info,
          hoverBorderColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_3__["default"].color.info,
          data: this.props.data.chartData.data
        }]
      };
    };

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card resource-mh"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "card-title"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_2__["default"], {
      id: "widgets.trafficSources"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "fs-14 mb-4"
    }, this.props.data.totalActiveUsers, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_2__["default"], {
      id: "widgets.totalActiveUsers"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Line"], {
      data: data,
      options: options,
      height: 110
    }));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

const _default = TrafficSourcesWidget;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(options, "options", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\TrafficSources.js");
  reactHotLoader.register(TrafficSourcesWidget, "TrafficSourcesWidget", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\TrafficSources.js");
  reactHotLoader.register(_default, "default", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\TrafficSources.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);