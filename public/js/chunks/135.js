(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[135],{

/***/ "./resources/js/components/PageTitleBar/PageTitleBar.js":
/*!**************************************************************!*\
  !*** ./resources/js/components/PageTitleBar/PageTitleBar.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var Util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Util/IntlMessages */ "./resources/js/util/IntlMessages.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Page Title Bar Component
 * Used To Display Page Title & Breadcrumbs
 */


 // intl messages

 // get display string

const getDisplayString = sub => {
  const arr = sub.split("-");

  if (arr.length > 1) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: `sidebar.${arr[0].charAt(0) + arr[0].slice(1) + arr[1].charAt(0).toUpperCase() + arr[1].slice(1)}`
    });
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: `sidebar.${sub.charAt(0) + sub.slice(1)}`
    });
  }
}; // get url string


const getUrlString = (path, sub, index) => {
  if (index === 0) {
    return '/';
  } else {
    return '/' + path.split(sub)[0] + sub;
  }
};

const PageTitleBar = ({
  title,
  match,
  enableBreadCrumb
}) => {
  const path = match.path.substr(1);
  const subPath = path.split('/');
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "page-title d-flex justify-content-between align-items-center"
  }, title && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "page-title-wrap"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "ti-angle-left"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: ""
  }, title)), enableBreadCrumb && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Breadcrumb"], {
    className: "mb-0 tour-step-7",
    tag: "nav"
  }, subPath.map((sub, index) => {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbItem"], {
      active: subPath.length === index + 1,
      tag: subPath.length === index + 1 ? "span" : react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
      key: index,
      to: getUrlString(path, sub, index)
    }, getDisplayString(sub));
  })));
}; // default props value


PageTitleBar.defaultProps = {
  enableBreadCrumb: true
};
const _default = PageTitleBar;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getDisplayString, "getDisplayString", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\PageTitleBar\\PageTitleBar.js");
  reactHotLoader.register(getUrlString, "getUrlString", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\PageTitleBar\\PageTitleBar.js");
  reactHotLoader.register(PageTitleBar, "PageTitleBar", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\PageTitleBar\\PageTitleBar.js");
  reactHotLoader.register(_default, "default", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\PageTitleBar\\PageTitleBar.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/js/routes/widgets/charts-widgets/index.js":
/*!*************************************************************!*\
  !*** ./resources/js/routes/widgets/charts-widgets/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChartsWidgets; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var Components_Widgets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Components/Widgets */ "./resources/js/components/Widgets/index.js");
/* harmony import */ var Components_PageTitleBar_PageTitleBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Components/PageTitleBar/PageTitleBar */ "./resources/js/components/PageTitleBar/PageTitleBar.js");
/* harmony import */ var Util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Util/IntlMessages */ "./resources/js/util/IntlMessages.js");
/* harmony import */ var Components_RctCollapsibleCard_RctCollapsibleCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Components/RctCollapsibleCard/RctCollapsibleCard */ "./resources/js/components/RctCollapsibleCard/RctCollapsibleCard.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data */ "./resources/js/routes/widgets/data.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Charts Widgets Page
 */

 // page title bar

 // intl messages

 // rct collapsible card

 // widgets data


class ChartsWidgets extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "charts-widgets-wrapper"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_PageTitleBar_PageTitleBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "sidebar.charts"
      }),
      match: this.props.match
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCollapsibleCard_RctCollapsibleCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      heading: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "widgets.totalEarns"
      }),
      collapsible: true,
      reloadable: true,
      closeable: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Widgets__WEBPACK_IMPORTED_MODULE_1__["TotalEarnsWithAreaChartWidget"], {
      chartData: _data__WEBPACK_IMPORTED_MODULE_5__["totalEarns"]
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCollapsibleCard_RctCollapsibleCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      customClasses: "overflow-hidden",
      colClasses: "col-sm-6 col-md-4 w-xs-half-block",
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
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Widgets__WEBPACK_IMPORTED_MODULE_1__["DailySales"], {
      label: _data__WEBPACK_IMPORTED_MODULE_5__["dailySales"].label,
      chartdata: _data__WEBPACK_IMPORTED_MODULE_5__["dailySales"].chartdata,
      labels: _data__WEBPACK_IMPORTED_MODULE_5__["dailySales"].labels
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCollapsibleCard_RctCollapsibleCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      heading: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "widgets.trafficChannel"
      }),
      customClasses: "overflow-hidden",
      colClasses: "col-sm-6 col-md-4 w-xs-half-block",
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
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Widgets__WEBPACK_IMPORTED_MODULE_1__["TrafficChannel"], {
      label: _data__WEBPACK_IMPORTED_MODULE_5__["trafficChannel"].label,
      chartdata: _data__WEBPACK_IMPORTED_MODULE_5__["trafficChannel"].chartdata,
      labels: _data__WEBPACK_IMPORTED_MODULE_5__["trafficChannel"].labels
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCollapsibleCard_RctCollapsibleCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      heading: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "widgets.campaignPerformance"
      }),
      colClasses: "col-sm-6 col-md-4 w-xs-full",
      collapsible: true,
      reloadable: true,
      closeable: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Widgets__WEBPACK_IMPORTED_MODULE_1__["CampaignPerformance"], null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "dash-cards-lg"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-sm-6 col-md-3 col-xl-3 w-xs-half-block"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Widgets__WEBPACK_IMPORTED_MODULE_1__["RevenueWidget"], {
      data: _data__WEBPACK_IMPORTED_MODULE_5__["totalRevenue"]
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-sm-6 col-md-3 col-xl-3 w-xs-half-block"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Widgets__WEBPACK_IMPORTED_MODULE_1__["OnlineVisitorsWidget"], {
      data: _data__WEBPACK_IMPORTED_MODULE_5__["onlineVisitorsData"]
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-sm-6 col-md-3 col-xl-3 w-xs-half-block"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Widgets__WEBPACK_IMPORTED_MODULE_1__["TrafficSourcesWidget"], {
      data: _data__WEBPACK_IMPORTED_MODULE_5__["trafficSources"]
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-sm-6 col-md-3 col-xl-3 w-xs-half-block"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Widgets__WEBPACK_IMPORTED_MODULE_1__["BandwidthUsageWidget"], null)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCollapsibleCard_RctCollapsibleCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      colClasses: "col-sm-12 col-md-5 col-lg-5 col-xl-4 w-8-full",
      heading: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "widgets.emailsStatistics"
      }),
      customClasses: "gradient-primary",
      collapsible: true,
      reloadable: true,
      closeable: true,
      fullBlock: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Widgets__WEBPACK_IMPORTED_MODULE_1__["EmailStatisticsVersion2Widget"], {
      data: _data__WEBPACK_IMPORTED_MODULE_5__["emailStatisticsData"]
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCollapsibleCard_RctCollapsibleCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      colClasses: "col-sm-12 col-md-7 col-lg-7 col-xl-8 w-8-full",
      heading: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "widgets.totalEarns"
      }),
      collapsible: true,
      fullBlock: true,
      reloadable: true,
      closeable: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Widgets__WEBPACK_IMPORTED_MODULE_1__["TotalEarnsChartWidget"], {
      data: _data__WEBPACK_IMPORTED_MODULE_5__["totalEarnsV2"]
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-sm-12 col-md-6"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Widgets__WEBPACK_IMPORTED_MODULE_1__["BandWidthAreaChartWidget"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-sm-12 col-md-6"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Widgets__WEBPACK_IMPORTED_MODULE_1__["BandWidthUsageBarChartWidget"], {
      data: _data__WEBPACK_IMPORTED_MODULE_5__["dataUsed"]
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCollapsibleCard_RctCollapsibleCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      colClasses: "col-md-7 col-xl-8 w-xs-half-block w-8-full",
      heading: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "widgets.productStats"
      }),
      collapsible: true,
      reloadable: true,
      closeable: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Widgets__WEBPACK_IMPORTED_MODULE_1__["ProductStatsWidget"], {
      data: _data__WEBPACK_IMPORTED_MODULE_5__["productStats"]
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCollapsibleCard_RctCollapsibleCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      customClasses: "gradient-primary",
      colClasses: "col-md-5 col-xl-4 w-xs-half-block w-8-full",
      heading: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "widgets.emailsStatistics"
      }),
      collapsible: true,
      reloadable: true,
      closeable: true,
      fullBlock: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Widgets__WEBPACK_IMPORTED_MODULE_1__["EmailStaticsWidget"], {
      openChartData: _data__WEBPACK_IMPORTED_MODULE_5__["emailStatisticsV2Data"].chartData.open,
      bounceChartData: _data__WEBPACK_IMPORTED_MODULE_5__["emailStatisticsV2Data"].chartData.bounce,
      unsubscribeData: _data__WEBPACK_IMPORTED_MODULE_5__["emailStatisticsV2Data"].chartData.unsubscribe
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCollapsibleCard_RctCollapsibleCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      colClasses: "col-sm-12 col-md-6 w-xs-full",
      heading: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "widgets.siteVisitors"
      }),
      collapsible: true,
      reloadable: true,
      closeable: true,
      fullBlock: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Widgets__WEBPACK_IMPORTED_MODULE_1__["SiteVisitorChartWidget"], {
      data: _data__WEBPACK_IMPORTED_MODULE_5__["siteVisitors"]
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

  reactHotLoader.register(ChartsWidgets, "ChartsWidgets", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\routes\\widgets\\charts-widgets\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);