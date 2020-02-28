(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[43],{

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

/***/ "./resources/js/components/Widgets/EmailStatics.js":
/*!*********************************************************!*\
  !*** ./resources/js/components/Widgets/EmailStatics.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EmailStatics; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var Components_Charts_TinyLineChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Components/Charts/TinyLineChart */ "./resources/js/components/Charts/TinyLineChart.js");
/* harmony import */ var Components_Charts_TinyAreaChart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Components/Charts/TinyAreaChart */ "./resources/js/components/Charts/TinyAreaChart.js");
/* harmony import */ var Util_IntlMessages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Util/IntlMessages */ "./resources/js/util/IntlMessages.js");
/* harmony import */ var Constants_chart_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Constants/chart-config */ "./resources/js/constants/chart-config.js");
/* harmony import */ var Helpers_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Helpers/helpers */ "./resources/js/helpers/helpers.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Email Statics Widget
 */


 // chart component


 // intl messages

 // chart config

 // helpers


class EmailStatics extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      activeTabForTableSection: '1'
    };

    this.toggleTableTabs = tab => {
      if (this.state.activeTab !== tab) {
        this.setState({
          activeTabForTableSection: tab
        });
      }
    };
  }

  render() {
    const {
      openChartData,
      bounceChartData,
      unsubscribeData
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
      tabs: true,
      className: "custom-tabs p-10"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
        active: this.state.activeTabForTableSection === '1'
      }),
      onClick: () => {
        this.toggleTableTabs('1');
      }
    }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_5__["default"], {
      id: "widgets.open"
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
        active: this.state.activeTabForTableSection === '2'
      }),
      onClick: () => {
        this.toggleTableTabs('2');
      }
    }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_5__["default"], {
      id: "widgets.bounced"
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
        active: this.state.activeTabForTableSection === '3'
      }),
      onClick: () => {
        this.toggleTableTabs('3');
      }
    }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_5__["default"], {
      id: "widgets.unsubscribe"
    })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["TabContent"], {
      className: "tiny-line-chart",
      activeTab: this.state.activeTabForTableSection
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["TabPane"], {
      tabId: "1"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Charts_TinyLineChart__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: "Open",
      chartdata: openChartData.data,
      labels: openChartData.labels,
      borderColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_6__["default"].color.white,
      pointBackgroundColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_6__["default"].color.dark,
      height: 170,
      pointBorderColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_6__["default"].color.white,
      borderWidth: 3
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex justify-content-between p-20"
    }, openChartData.labels.map((label, key) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "fs-12",
      key: key
    }, label)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["TabPane"], {
      tabId: "2"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Charts_TinyAreaChart__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: "Bounced",
      chartdata: bounceChartData.data,
      labels: bounceChartData.labels,
      backgroundColor: Object(Helpers_helpers__WEBPACK_IMPORTED_MODULE_7__["hexToRgbA"])(Constants_chart_config__WEBPACK_IMPORTED_MODULE_6__["default"].color.white, 0.5),
      borderColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_6__["default"].color.white,
      lineTension: "0.4",
      height: 150,
      gradient: true
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex justify-content-between p-20"
    }, bounceChartData.labels.map((label, key) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "fs-12",
      key: key
    }, label)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["TabPane"], {
      tabId: "3"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Charts_TinyLineChart__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: "Unsubscribe",
      chartdata: unsubscribeData.data,
      labels: unsubscribeData.labels,
      borderColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_6__["default"].color.white,
      pointBackgroundColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_6__["default"].color.dark,
      pointBorderColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_6__["default"].color.white,
      height: 190,
      borderWidth: 3,
      xAxes: false
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex justify-content-between p-20"
    }, unsubscribeData.labels.map((label, key) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "fs-12",
      key: key
    }, label))))));
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

  reactHotLoader.register(EmailStatics, "EmailStatics", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\EmailStatics.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);