(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./resources/js/assets/img/agency-welcome.png":
/*!****************************************************!*\
  !*** ./resources/js/assets/img/agency-welcome.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/agency-welcome.png?b1d9fa69e7076b9bc8b055b1bee7de51";

/***/ }),

/***/ "./resources/js/components/Charts/AgencyWelcomeBarChart.js":
/*!*****************************************************************!*\
  !*** ./resources/js/components/Charts/AgencyWelcomeBarChart.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AgencyWelcomeBarChart; });
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




const options = {
  legend: {
    display: false
  },
  tooltips: {
    titleSpacing: 6,
    cornerRadius: 5
  },
  scales: {
    xAxes: [{
      gridLines: {
        display: false,
        color: Constants_chart_config__WEBPACK_IMPORTED_MODULE_2__["default"].chartGridColor,
        drawBorder: false
      },
      ticks: {
        fontColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_2__["default"].axesColor
      },
      display: false
    }],
    yAxes: [{
      gridLines: {
        display: false,
        color: Constants_chart_config__WEBPACK_IMPORTED_MODULE_2__["default"].chartGridColor,
        drawBorder: false
      },
      ticks: {
        fontColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_2__["default"].axesColor
      },
      display: false
    }]
  }
};
class AgencyWelcomeBarChart extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      labels,
      color
    } = this.props;
    const data = {
      labels: labels,
      datasets: [{
        barPercentage: 2,
        categoryPercentage: 0.275,
        backgroundColor: color,
        borderColor: color,
        borderWidth: 1,
        hoverBackgroundColor: color,
        hoverBorderColor: color,
        data: this.props.data
      }]
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Bar"], {
      data: data,
      options: options,
      height: 80
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

  reactHotLoader.register(options, "options", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Charts\\AgencyWelcomeBarChart.js");
  reactHotLoader.register(AgencyWelcomeBarChart, "AgencyWelcomeBarChart", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Charts\\AgencyWelcomeBarChart.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/js/components/Widgets/AgencyWelcomeBlock.js":
/*!***************************************************************!*\
  !*** ./resources/js/components/Widgets/AgencyWelcomeBlock.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AgencyWelcomeBlock; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var Components_Charts_AgencyWelcomeBarChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Components/Charts/AgencyWelcomeBarChart */ "./resources/js/components/Charts/AgencyWelcomeBarChart.js");
/* harmony import */ var _routes_dashboard_agency_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../routes/dashboard/agency/data */ "./resources/js/routes/dashboard/agency/data.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Agency Welcome Block
 */


 //Charts

 //Chart Data

 // function to get today weather icon

function getIcon(id) {
  if (id >= 200 && id < 300) {
    return 'wi wi-night-showers';
  } else if (id >= 300 && id < 500) {
    return 'wi day-sleet';
  } else if (id >= 500 && id < 600) {
    return 'wi wi-night-showers';
  } else if (id >= 600 && id < 700) {
    return 'wi wi-day-snow';
  } else if (id >= 700 && id < 800) {
    return 'wi wi-day-fog';
  } else if (id === 800) {
    return 'wi wi-day-sunny';
  } else if (id >= 801 && id < 803) {
    return 'wi wi-night-partly-cloudy';
  } else if (id >= 802 && id < 900) {
    return 'wi wi-day-cloudy';
  } else if (id === 905 || id >= 951 && id <= 956) {
    return 'wi wi-day-windy';
  } else if (id >= 900 && id < 1000) {
    return 'wi wi-night-showers';
  }
}

class AgencyWelcomeBlock extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      city: false,
      countryCode: false,
      todayTemp: false,
      todayTempText: false,
      todayWeatherIcon: ''
    };
  }

  componentDidMount() {
    var appid = 'b1b15e88fa797225412429c1c50c122a1'; // Your api id

    var apikey = '69b72ed255ce5efad910bd946685883a'; //Your apikey

    var city = 'Mohali'; // city name

    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('https://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&cnt=6&units=metric&mode=json&appid=' + appid + '&apikey=' + apikey).then(response => {
      this.setState({
        city: response.data.city.name,
        countryCode: response.data.city.country,
        todayTemp: response.data.list[0].temp.max,
        todayTempText: response.data.list[0].weather[0].main,
        todayWeatherIcon: getIcon(response.data.list[0].weather[0].id)
      });
    }).catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "agency-welcome-block p-10 mb-30"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-lg-6 col-md-12"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex weather-wrap mb-20"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(this.state.todayWeatherIcon, 'font-3x mr-20')
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "weather-content"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "mb-5 fs-12 d-block"
    }, this.state.city, " (", this.state.countryCode, ")"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "font-weight-light"
    }, this.state.todayTemp, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("sup", null, "o"), " ", this.state.todayTempText))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "welcome-message mb-30"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "fw-semi-bold"
    }, "Good morning, Jacqueline."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Here\u2019s what\u2019s happening with your store this week.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "welcome-chart row"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-lg-6 col-sm-6 mb-30 mb-sm-0"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "fw-semi-bold font-lg d-block mb-5"
    }, "$21,349.29"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "d-block fs-12 mb-3"
    }, "Earned Today"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Charts_AgencyWelcomeBarChart__WEBPACK_IMPORTED_MODULE_3__["default"], {
      data: _routes_dashboard_agency_data__WEBPACK_IMPORTED_MODULE_4__["WelcomeBarChart1"].data,
      labels: _routes_dashboard_agency_data__WEBPACK_IMPORTED_MODULE_4__["WelcomeBarChart1"].labels,
      color: _routes_dashboard_agency_data__WEBPACK_IMPORTED_MODULE_4__["WelcomeBarChart1"].color
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-lg-6 col-sm-6"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "fw-semi-bold font-lg d-block mb-5"
    }, "15,800"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "d-block fs-12 mb-3"
    }, "Items Sold"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Charts_AgencyWelcomeBarChart__WEBPACK_IMPORTED_MODULE_3__["default"], {
      data: _routes_dashboard_agency_data__WEBPACK_IMPORTED_MODULE_4__["WelcomeBarChart2"].data,
      labels: _routes_dashboard_agency_data__WEBPACK_IMPORTED_MODULE_4__["WelcomeBarChart2"].labels,
      color: _routes_dashboard_agency_data__WEBPACK_IMPORTED_MODULE_4__["WelcomeBarChart2"].color
    })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-lg-6 d-lg-block d-none"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex align-items-center justify-content-center"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      alt: "agency block",
      src: __webpack_require__(/*! Assets/img/agency-welcome.png */ "./resources/js/assets/img/agency-welcome.png"),
      className: "img-fluid"
    })))));
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

  reactHotLoader.register(getIcon, "getIcon", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\AgencyWelcomeBlock.js");
  reactHotLoader.register(AgencyWelcomeBlock, "AgencyWelcomeBlock", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\AgencyWelcomeBlock.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/js/routes/dashboard/agency/data.js":
/*!******************************************************!*\
  !*** ./resources/js/routes/dashboard/agency/data.js ***!
  \******************************************************/
/*! exports provided: WelcomeBarChart1, WelcomeBarChart2, trafficStatus, totalEarns, dailySales, trafficChannel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeBarChart1", function() { return WelcomeBarChart1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeBarChart2", function() { return WelcomeBarChart2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trafficStatus", function() { return trafficStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "totalEarns", function() { return totalEarns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dailySales", function() { return dailySales; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trafficChannel", function() { return trafficChannel; });
/* harmony import */ var Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Constants/chart-config */ "./resources/js/constants/chart-config.js");
/* harmony import */ var Helpers_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Helpers/helpers */ "./resources/js/helpers/helpers.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

//Agency Data
 // helpers

 //Welcome bar chart 1 data

const WelcomeBarChart1 = {
  labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'],
  data: [75, 60, 50, 35, 90, 35, 75, 20, 10, 20, 40, 5, 30, 75, 40, 90, 35, 20, 40, 30, 50, 35, 20, 75],
  color: Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.primary
}; //Welcome bar chart 2 data

const WelcomeBarChart2 = {
  labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'],
  data: [75, 60, 50, 35, 90, 35, 75, 20, 10, 20, 40, 5, 30, 75, 40, 90, 35, 20, 40, 30, 50, 35, 20, 75],
  color: Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.info
}; // traffic Status

const trafficStatus = {
  chartLabels: ['0.00', '1.0', '2.0', '3.0', '4.0', '5.0', '6.0'],
  chartDatasets: [{
    label: 'Series A',
    backgroundColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.primary,
    borderColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.primary,
    borderWidth: 1,
    hoverBackgroundColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.primary,
    hoverBorderColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.primary,
    data: [65, 59, 80, 81, 56, 55, 40]
  }, {
    label: 'Series B',
    backgroundColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.default,
    borderColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.default,
    borderWidth: 1,
    hoverBackgroundColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.default,
    hoverBorderColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.default,
    data: [45, 39, 40, 60, 35, 25, 60]
  }],
  onlineSources: '3500',
  today: '17,020',
  lastMonth: '20.30%'
}; // total earns

const totalEarns = {
  labels: ['Jan 1', 'Jan 7', 'Jan 14', 'Jan 21', 'Jan 28', 'Feb 4', 'Feb 11', 'Feb 18', 'Feb 25', 'Feb 28', 'Mar 2', 'Mar 6'],
  datasets: [{
    label: 'Sales',
    fill: true,
    lineTension: 0,
    fillOpacity: 0.5,
    backgroundColor: Object(Helpers_helpers__WEBPACK_IMPORTED_MODULE_1__["hexToRgbA"])(Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.primary, 0.8),
    borderColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.primary,
    pointBorderColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.white,
    pointBackgroundColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.white,
    pointBorderWidth: 0,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: Object(Helpers_helpers__WEBPACK_IMPORTED_MODULE_1__["hexToRgbA"])(Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.primary, 1),
    pointHoverBorderColor: Object(Helpers_helpers__WEBPACK_IMPORTED_MODULE_1__["hexToRgbA"])(Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.primary, 1),
    pointHoverBorderWidth: 8,
    pointRadius: 0,
    pointHitRadius: 10,
    data: [250, 350, 270, 420, 380, 220, 400, 550, 480, 190, 390, 380]
  }, {
    label: 'Visitors',
    fill: true,
    lineTension: 0,
    fillOpacity: 0.5,
    backgroundColor: Object(Helpers_helpers__WEBPACK_IMPORTED_MODULE_1__["hexToRgbA"])(Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.warning, 0.4),
    borderColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.warning,
    pointBorderColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.white,
    pointBackgroundColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.white,
    pointBorderWidth: 0,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: Object(Helpers_helpers__WEBPACK_IMPORTED_MODULE_1__["hexToRgbA"])(Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.warning, 1),
    pointHoverBorderColor: Object(Helpers_helpers__WEBPACK_IMPORTED_MODULE_1__["hexToRgbA"])(Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.warning, 1),
    pointHoverBorderWidth: 8,
    pointRadius: 0,
    pointHitRadius: 10,
    data: [600, 400, 500, 350, 650, 630, 450, 480, 650, 500, 530, 550]
  }]
}; // Daily Sales

const dailySales = {
  label: 'Daily Sales',
  chartdata: [100, 200, 125, 250, 200, 150, 200],
  labels: ['9', '10', '11', '12', '13', '14', '15']
}; //Traffic Channel

const trafficChannel = {
  label: 'Direct User',
  labels: ['Direct User', 'Referral', 'Facebook', 'Google', 'Instagram'],
  chartdata: [8.5, 6.75, 5.5, 7, 4.75]
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(WelcomeBarChart1, "WelcomeBarChart1", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\routes\\dashboard\\agency\\data.js");
  reactHotLoader.register(WelcomeBarChart2, "WelcomeBarChart2", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\routes\\dashboard\\agency\\data.js");
  reactHotLoader.register(trafficStatus, "trafficStatus", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\routes\\dashboard\\agency\\data.js");
  reactHotLoader.register(totalEarns, "totalEarns", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\routes\\dashboard\\agency\\data.js");
  reactHotLoader.register(dailySales, "dailySales", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\routes\\dashboard\\agency\\data.js");
  reactHotLoader.register(trafficChannel, "trafficChannel", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\routes\\dashboard\\agency\\data.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);