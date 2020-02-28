(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[143],{

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

/***/ }),

/***/ "./resources/js/routes/dashboard/agency/index.js":
/*!*******************************************************!*\
  !*** ./resources/js/routes/dashboard/agency/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AgencyDashboard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var Components_RctCollapsibleCard_RctCollapsibleCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Components/RctCollapsibleCard/RctCollapsibleCard */ "./resources/js/components/RctCollapsibleCard/RctCollapsibleCard.js");
/* harmony import */ var Util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Util/IntlMessages */ "./resources/js/util/IntlMessages.js");
/* harmony import */ var Components_Widgets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Components/Widgets */ "./resources/js/components/Widgets/index.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data */ "./resources/js/routes/dashboard/agency/data.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Agency Dashboard
 */

 // rct collapsible card

 // intl messages

 //Widgets

 // widgets data


class AgencyDashboard extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "agency-dashboard-wrapper"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Agency Dashboard"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
      name: "description",
      content: "Reactify Agency Dashboard"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Widgets__WEBPACK_IMPORTED_MODULE_4__["AgencyWelcomeBlock"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCollapsibleCard_RctCollapsibleCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      heading: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "widgets.totalEarns"
      }),
      collapsible: true,
      reloadable: true,
      closeable: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Widgets__WEBPACK_IMPORTED_MODULE_4__["TotalEarnsWithAreaChartWidget"], {
      chartData: _data__WEBPACK_IMPORTED_MODULE_5__["totalEarns"]
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCollapsibleCard_RctCollapsibleCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      customClasses: "overflow-hidden",
      colClasses: "col-sm-6 col-md-6 col-lg-4",
      heading: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "widgets.dailySales"
      }),
      badge: {
        name: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
          id: "widgets.today"
        }),
        class: 'danger'
      },
      collapsible: true,
      reloadable: true,
      closeable: true,
      fullBlock: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Widgets__WEBPACK_IMPORTED_MODULE_4__["DailySales"], {
      label: _data__WEBPACK_IMPORTED_MODULE_5__["dailySales"].label,
      chartdata: _data__WEBPACK_IMPORTED_MODULE_5__["dailySales"].chartdata,
      labels: _data__WEBPACK_IMPORTED_MODULE_5__["dailySales"].labels
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCollapsibleCard_RctCollapsibleCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      heading: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "widgets.trafficChannel"
      }),
      customClasses: "overflow-hidden",
      colClasses: "col-sm-6 col-md-6 col-lg-4",
      badge: {
        name: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
          id: "widgets.today"
        }),
        class: 'danger'
      },
      collapsible: true,
      reloadable: true,
      closeable: true,
      fullBlock: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Widgets__WEBPACK_IMPORTED_MODULE_4__["TrafficChannel"], {
      label: _data__WEBPACK_IMPORTED_MODULE_5__["trafficChannel"].label,
      chartdata: _data__WEBPACK_IMPORTED_MODULE_5__["trafficChannel"].chartdata,
      labels: _data__WEBPACK_IMPORTED_MODULE_5__["trafficChannel"].labels
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCollapsibleCard_RctCollapsibleCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      heading: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "widgets.campaignPerformance"
      }),
      colClasses: "col-sm-12 col-md-6 col-lg-4",
      collapsible: true,
      reloadable: true,
      closeable: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Widgets__WEBPACK_IMPORTED_MODULE_4__["CampaignPerformance"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCollapsibleCard_RctCollapsibleCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      customClasses: "to-do-list",
      colClasses: "col-sm-6 col-md-6 col-lg-4",
      heading: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "widgets.toDoList"
      }),
      collapsible: true,
      reloadable: true,
      closeable: true,
      fullBlock: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Widgets__WEBPACK_IMPORTED_MODULE_4__["ToDoListWidget"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCollapsibleCard_RctCollapsibleCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      colClasses: "col-sm-6 col-md-6 col-lg-4",
      heading: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "widgets.newCustomers"
      }),
      collapsible: true,
      reloadable: true,
      closeable: true,
      fullBlock: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Widgets__WEBPACK_IMPORTED_MODULE_4__["NewCustomersWidget"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCollapsibleCard_RctCollapsibleCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      colClasses: "col-sm-12 col-md-6 col-lg-4",
      fullBlock: true,
      customClasses: "overflow-hidden bg-light-yellow"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Widgets__WEBPACK_IMPORTED_MODULE_4__["PersonalSchedule"], null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCollapsibleCard_RctCollapsibleCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      colClasses: "col-sm-12 col-md-7 col-xl-7 b-100 w-xs-full",
      heading: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "widgets.newEmails"
      }),
      collapsible: true,
      reloadable: true,
      closeable: true,
      fullBlock: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Widgets__WEBPACK_IMPORTED_MODULE_4__["NewEmailsWidget"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCollapsibleCard_RctCollapsibleCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      colClasses: "col-sm-12 col-md-5 col-xl-5 b-100 w-xs-full",
      heading: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "widgets.employeePayroll"
      }),
      collapsible: true,
      reloadable: true,
      closeable: true,
      fullBlock: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Widgets__WEBPACK_IMPORTED_MODULE_4__["EmployeePayrollWidget"], null))));
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

  reactHotLoader.register(AgencyDashboard, "AgencyDashboard", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\routes\\dashboard\\agency\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);