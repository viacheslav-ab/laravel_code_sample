(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[144],{

/***/ "./resources/js/routes/dashboard/news/data.js":
/*!****************************************************!*\
  !*** ./resources/js/routes/dashboard/news/data.js ***!
  \****************************************************/
/*! exports provided: newsVisitorsData, newslaterCampaignData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newsVisitorsData", function() { return newsVisitorsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newslaterCampaignData", function() { return newslaterCampaignData; });
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
// chart config

 // News Visitor Data

const newsVisitorsData = {
  chartLabels: ['0', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  chartDatasets: [{
    label: 'Series A',
    backgroundColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.primary,
    borderColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.primary,
    borderWidth: 1,
    hoverBackgroundColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.primary,
    hoverBorderColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.primary,
    data: [5, 20, 40, 15, 8, 50, 30, 20, 35, 30, 30, 50]
  }, {
    label: 'Series B',
    backgroundColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.default,
    borderColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.default,
    borderWidth: 1,
    hoverBackgroundColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.default,
    hoverBorderColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.default,
    data: [20, 70, 60, 50, 10, 55, 65, 60, 65, 40, 67, 60]
  }]
}; //Newslater campaign Data

const newslaterCampaignData = {
  chartLabels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  chartDatasets: [{
    label: 'Campaign 1',
    lineTension: 0,
    backgroundColor: Object(Helpers_helpers__WEBPACK_IMPORTED_MODULE_1__["hexToRgbA"])(Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.default, 0.4),
    borderColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.info,
    borderWidth: 3,
    pointBorderWidth: 0,
    pointRadius: 0,
    data: [50, 45, 22, 18, 25, 5, 35, 20, 45, 22, 30, 70, 40]
  }, {
    label: 'Campaign 2',
    lineTension: 0,
    backgroundColor: Object(Helpers_helpers__WEBPACK_IMPORTED_MODULE_1__["hexToRgbA"])(Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.primary, 0.4),
    borderColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.primary,
    borderWidth: 3,
    pointBorderWidth: 0,
    pointRadius: 0,
    data: [40, 30, 60, 30, 35, 50, 10, 30, 25, 28, 55, 65, 80]
  }]
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(newsVisitorsData, "newsVisitorsData", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\routes\\dashboard\\news\\data.js");
  reactHotLoader.register(newslaterCampaignData, "newslaterCampaignData", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\routes\\dashboard\\news\\data.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/js/routes/dashboard/news/index.js":
/*!*****************************************************!*\
  !*** ./resources/js/routes/dashboard/news/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NewsDashboard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var Components_RctCollapsibleCard_RctCollapsibleCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Components/RctCollapsibleCard/RctCollapsibleCard */ "./resources/js/components/RctCollapsibleCard/RctCollapsibleCard.js");
/* harmony import */ var Components_Widgets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Components/Widgets */ "./resources/js/components/Widgets/index.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data */ "./resources/js/routes/dashboard/news/data.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * News Dashboard
 */

 // rct collapsible card

 //Widgets

 // widgets data


class NewsDashboard extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "news-dashboard-wrapper"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "News Dashboard"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
      name: "description",
      content: "Reactify News Dashboard"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Widgets__WEBPACK_IMPORTED_MODULE_3__["TrendingNews"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCollapsibleCard_RctCollapsibleCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      heading: "Top Headlines",
      colClasses: "col-sm-12 col-md-12 col-lg-8",
      collapsible: true,
      reloadable: true,
      closeable: true,
      fullBlock: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Widgets__WEBPACK_IMPORTED_MODULE_3__["TopHeadlines"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-sm-12 col-md-12 col-lg-4"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCollapsibleCard_RctCollapsibleCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      heading: "Visitors",
      colClasses: "col-sm-6 col-md-6 col-lg-12",
      customClasses: "visitors-widget flex-chart",
      contentCustomClasses: "justify-space-between"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Widgets__WEBPACK_IMPORTED_MODULE_3__["Visitors"], {
      chartData: _data__WEBPACK_IMPORTED_MODULE_4__["newsVisitorsData"]
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCollapsibleCard_RctCollapsibleCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      heading: "Subscribers",
      colClasses: "col-sm-6 col-md-6 col-lg-12",
      customClasses: "subscribers-widget flex-chart",
      contentCustomClasses: "justify-content-end"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Widgets__WEBPACK_IMPORTED_MODULE_3__["Subscribers"], null))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCollapsibleCard_RctCollapsibleCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      heading: "Newslater Campaign",
      colClasses: "col-sm-12 col-md-12 col-lg-6",
      customClasses: "flex-chart newslater-widget",
      contentCustomClasses: "justify-content-end"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Widgets__WEBPACK_IMPORTED_MODULE_3__["NewslaterCampaign"], {
      chartData: _data__WEBPACK_IMPORTED_MODULE_4__["newslaterCampaignData"]
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCollapsibleCard_RctCollapsibleCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      heading: "Recent Comments",
      colClasses: "col-sm-12 col-md-12 col-lg-6",
      contentCustomClasses: "comment-section",
      collapsible: true,
      reloadable: true,
      closeable: true,
      fullBlock: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Widgets__WEBPACK_IMPORTED_MODULE_3__["CommentsWidget"], null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-sm-6 col-md-6 col-lg-3"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Widgets__WEBPACK_IMPORTED_MODULE_3__["SocialFeedsWidget"], {
      type: "facebook",
      friendsCount: "89k",
      icon: "zmdi zmdi-facebook",
      feedsCount: "459"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-sm-6 col-md-6 col-lg-3"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Widgets__WEBPACK_IMPORTED_MODULE_3__["SocialFeedsWidget"], {
      type: "twitter",
      friendsCount: "89k",
      feedsCount: "459",
      icon: "zmdi zmdi-twitter"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-sm-6 col-md-6 col-lg-3"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Widgets__WEBPACK_IMPORTED_MODULE_3__["SocialFeedsWidget"], {
      type: "linkedin",
      friendsCount: "89k",
      feedsCount: "459",
      icon: "zmdi zmdi-linkedin"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-sm-6 col-md-6 col-lg-3"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Widgets__WEBPACK_IMPORTED_MODULE_3__["SocialFeedsWidget"], {
      type: "google",
      friendsCount: "89k",
      feedsCount: "459",
      icon: "zmdi zmdi-google"
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCollapsibleCard_RctCollapsibleCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      heading: "Recent Activity",
      colClasses: "col-sm-12 col-md-12 col-lg-4"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Widgets__WEBPACK_IMPORTED_MODULE_3__["RecentActivity"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-sm-12 col-md-12 col-lg-8"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Widgets__WEBPACK_IMPORTED_MODULE_3__["TopNews"], null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-sm-6 col-md-6 col-lg-4"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Widgets__WEBPACK_IMPORTED_MODULE_3__["TopAuthors"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCollapsibleCard_RctCollapsibleCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      heading: "Twitter Feeds",
      colClasses: "col-sm-6 col-md-6 col-lg-4",
      customClasses: "twitter-feeds-widget"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Widgets__WEBPACK_IMPORTED_MODULE_3__["TwitterFeedsV2"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCollapsibleCard_RctCollapsibleCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      colClasses: "col-sm-12 col-md-12 col-lg-4",
      fullBlock: true,
      customClasses: "overflow-hidden"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Widgets__WEBPACK_IMPORTED_MODULE_3__["Notifications"], null))));
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

  reactHotLoader.register(NewsDashboard, "NewsDashboard", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\routes\\dashboard\\news\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);