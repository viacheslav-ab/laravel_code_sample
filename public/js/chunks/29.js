(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./resources/js/components/Charts/CampaignBarChart.js":
/*!************************************************************!*\
  !*** ./resources/js/components/Charts/CampaignBarChart.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");
/* harmony import */ var Constants_chart_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Constants/chart-config */ "./resources/js/constants/chart-config.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};





class SimpleBarChartComponent extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["ResponsiveContainer"], {
      width: "100%",
      height: 250
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["BarChart"], {
      data: this.props.data,
      barGap: 0,
      barSize: 20,
      margin: {
        top: 10,
        right: 5,
        bottom: 10,
        left: 15
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["XAxis"], {
      dataKey: "name",
      stroke: Constants_chart_config__WEBPACK_IMPORTED_MODULE_2__["default"].axesColor,
      tickLine: false
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["YAxis"], {
      stroke: Constants_chart_config__WEBPACK_IMPORTED_MODULE_2__["default"].axesColor,
      domain: [0, 1000],
      minTickGap: 0,
      tickLine: false,
      width: 30,
      interval: 0,
      axisLine: false
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["CartesianGrid"], {
      vertical: false,
      stroke: Constants_chart_config__WEBPACK_IMPORTED_MODULE_2__["default"].chartGridColor
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Bar"], {
      dataKey: "websiteViews",
      fill: Constants_chart_config__WEBPACK_IMPORTED_MODULE_2__["default"].color.info
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Bar"], {
      dataKey: "emailSubscription",
      fill: Constants_chart_config__WEBPACK_IMPORTED_MODULE_2__["default"].color.primary
    })));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

const _default = SimpleBarChartComponent;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SimpleBarChartComponent, "SimpleBarChartComponent", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Charts\\CampaignBarChart.js");
  reactHotLoader.register(_default, "default", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Charts\\CampaignBarChart.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/js/components/Widgets/CampaignPerformance.js":
/*!****************************************************************!*\
  !*** ./resources/js/components/Widgets/CampaignPerformance.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CampaignPerformance; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var Constants_chart_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Constants/chart-config */ "./resources/js/constants/chart-config.js");
/* harmony import */ var Components_Charts_CampaignBarChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Components/Charts/CampaignBarChart */ "./resources/js/components/Charts/CampaignBarChart.js");
/* harmony import */ var Util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Util/IntlMessages */ "./resources/js/util/IntlMessages.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Campaign Performance Widget
 */


 // chart

 // intl messages


const campaigns = {
  yesterday: [{
    name: '12:00 AM',
    websiteViews: 600,
    emailSubscription: 400
  }, {
    name: '4:00 AM',
    websiteViews: 900,
    emailSubscription: 550
  }, {
    name: '8:00 AM',
    websiteViews: 660,
    emailSubscription: 400
  }, {
    name: '12:00 PM',
    websiteViews: 750,
    emailSubscription: 400
  }, {
    name: '16:00 PM',
    websiteViews: 800,
    emailSubscription: 450
  }],
  last5Days: [{
    name: 'Mon',
    websiteViews: 600,
    emailSubscription: 400
  }, {
    name: 'Tue',
    websiteViews: 900,
    emailSubscription: 700
  }, {
    name: 'Wed',
    websiteViews: 725,
    emailSubscription: 500
  }, {
    name: 'Thu',
    websiteViews: 900,
    emailSubscription: 625
  }, {
    name: 'Fri',
    websiteViews: 460,
    emailSubscription: 400
  }],
  last1Month: [{
    name: '1-5',
    websiteViews: 800,
    emailSubscription: 700
  }, {
    name: '6-10',
    websiteViews: 700,
    emailSubscription: 600
  }, {
    name: '11-15',
    websiteViews: 725,
    emailSubscription: 400
  }, {
    name: '16-20',
    websiteViews: 600,
    emailSubscription: 400
  }, {
    name: '21-25',
    websiteViews: 900,
    emailSubscription: 500
  }],
  last5Months: [{
    name: 'Jan',
    websiteViews: 900,
    emailSubscription: 800
  }, {
    name: 'Feb',
    websiteViews: 700,
    emailSubscription: 450
  }, {
    name: 'Mar',
    websiteViews: 725,
    emailSubscription: 550
  }, {
    name: 'Apr',
    websiteViews: 625,
    emailSubscription: 500
  }, {
    name: 'May',
    websiteViews: 600,
    emailSubscription: 450
  }]
};
class CampaignPerformance extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      selectedCamapign: campaigns['last5Days'],
      campaigns,
      selected: 'last5Days'
    };
  }

  // get random property of object
  pickRandomProperty(obj) {
    var result;
    var count = 0;

    for (var prop in obj) if (Math.random() < 1 / ++count) result = prop;

    return result;
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      let randomDataKey = this.pickRandomProperty(this.state.campaigns);
      this.setState({
        selectedCamapign: campaigns[randomDataKey],
        selected: randomDataKey
      });
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const {
      selectedCamapign
    } = this.state;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Charts_CampaignBarChart__WEBPACK_IMPORTED_MODULE_3__["default"], {
      data: selectedCamapign
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex justify-content-between align-items-center mt-15"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "app-selectbox-sm w-30"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
      className: "mb-0"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      type: "select",
      className: "fs-12",
      name: "select",
      id: "exampleSelect",
      onChange: e => this.setState({
        selectedCamapign: this.state.campaigns[e.target.value]
      }),
      value: this.state.selected
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      disabled: true
    }, "Select Campaign"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "last5Days"
    }, "Last 5 Days"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "yesterday"
    }, "Yesterday"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "last1Month"
    }, "Last 1 Month"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "last5Months"
    }, "Last 5 Months")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "fs-12 text-base"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "mr-5 zmdi zmdi-refresh"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "widgets.updated10Minago"
    }))));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}
;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(campaigns, "campaigns", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\CampaignPerformance.js");
  reactHotLoader.register(CampaignPerformance, "CampaignPerformance", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\CampaignPerformance.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);