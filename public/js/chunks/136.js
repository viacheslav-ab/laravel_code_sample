(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[136],{

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

/***/ "./resources/js/routes/widgets/general-widgets/index.js":
/*!**************************************************************!*\
  !*** ./resources/js/routes/widgets/general-widgets/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GeneralWidgets; });
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
 * Miscellaneous Widgets Page
 */

 // page title bar

 // intl messages

 // rct collapsible card



class GeneralWidgets extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "general-widgets-wrapper"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_PageTitleBar_PageTitleBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "sidebar.general"
      }),
      match: this.props.match
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "dash-cards"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-xs-12 col-sm-6 col-md-3 col-xl-3 w-xs-half-block"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Widgets__WEBPACK_IMPORTED_MODULE_1__["Reminders"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-xs-12 col-sm-6 col-md-3 col-xl-3 w-xs-half-block"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Widgets__WEBPACK_IMPORTED_MODULE_1__["ContactRequestWidget"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-xs-12 col-sm-6 col-md-3 col-xl-3 w-xs-half-block"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Widgets__WEBPACK_IMPORTED_MODULE_1__["Space"], {
      data: _data__WEBPACK_IMPORTED_MODULE_5__["spaceUsed"]
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-xs-12 col-sm-6 col-md-3 col-xl-3 w-xs-half-block"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Widgets__WEBPACK_IMPORTED_MODULE_1__["WeatherWidget"], null)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "social-card-wrapper"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-sm-6 col-md-3 col-lg-3 w-xs-half-block"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Widgets__WEBPACK_IMPORTED_MODULE_1__["SocialFeedsWidget"], {
      type: "facebook",
      friendsCount: "89k",
      icon: "ti-facebook",
      feedsCount: "459"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-sm-6 col-md-3 col-lg-3 w-xs-half-block"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Widgets__WEBPACK_IMPORTED_MODULE_1__["SocialFeedsWidget"], {
      type: "twitter",
      friendsCount: "89k",
      feedsCount: "459",
      icon: "ti-twitter"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-sm-6 col-md-3 col-lg-3 w-xs-half-block"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Widgets__WEBPACK_IMPORTED_MODULE_1__["SocialFeedsWidget"], {
      type: "linkedin",
      friendsCount: "89k",
      feedsCount: "459",
      icon: "ti-linkedin"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-sm-6 col-md-3 col-lg-3 w-xs-half-block"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Widgets__WEBPACK_IMPORTED_MODULE_1__["SocialFeedsWidget"], {
      type: "google",
      friendsCount: "89k",
      feedsCount: "459",
      icon: "ti-google"
    })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCollapsibleCard_RctCollapsibleCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      colClasses: "col-sm-12 col-md-7 col-xl-7 b-100 w-xs-full",
      heading: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "widgets.newEmails"
      }),
      collapsible: true,
      reloadable: true,
      closeable: true,
      fullBlock: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Widgets__WEBPACK_IMPORTED_MODULE_1__["NewEmailsWidget"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCollapsibleCard_RctCollapsibleCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      colClasses: "col-sm-12 col-md-5 col-xl-5 b-100 w-xs-full",
      heading: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "widgets.employeePayroll"
      }),
      collapsible: true,
      reloadable: true,
      closeable: true,
      fullBlock: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Widgets__WEBPACK_IMPORTED_MODULE_1__["EmployeePayrollWidget"], null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCollapsibleCard_RctCollapsibleCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      heading: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "widgets.orderStatus"
      }),
      collapsible: true,
      reloadable: true,
      closeable: true,
      fullBlock: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Widgets__WEBPACK_IMPORTED_MODULE_1__["OrderStatusWidget"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCollapsibleCard_RctCollapsibleCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      colClasses: "col-sm-6 col-md-4 col-lg-4 w-xs-half-block",
      heading: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "widgets.discoverPeople"
      }),
      collapsible: true,
      reloadable: true,
      closeable: true,
      fullBlock: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Widgets__WEBPACK_IMPORTED_MODULE_1__["DiscoverPeoplesWidget"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCollapsibleCard_RctCollapsibleCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      colClasses: "col-sm-6 col-md-4 col-lg-4 w-xs-half-block",
      heading: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "widgets.productReports"
      }),
      collapsible: true,
      reloadable: true,
      closeable: true,
      fullBlock: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Widgets__WEBPACK_IMPORTED_MODULE_1__["ProductReportsWidget"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCollapsibleCard_RctCollapsibleCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      colClasses: "col-sm-12 col-md-4 col-lg-4 w-xs-full",
      heading: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "widgets.recentActivities"
      }),
      collapsible: true,
      reloadable: true,
      closeable: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Widgets__WEBPACK_IMPORTED_MODULE_1__["RecentActivity"], null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCollapsibleCard_RctCollapsibleCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      colClasses: "col-sm-12 col-md-8 w-xs-full",
      heading: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "widgets.ComposeEmail"
      }),
      collapsible: true,
      reloadable: true,
      closeable: true,
      fullBlock: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Widgets__WEBPACK_IMPORTED_MODULE_1__["ComposeEmailWidget"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-sm-12 col-md-4 w-xs-full"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Widgets__WEBPACK_IMPORTED_MODULE_1__["CurrentTimeLocation"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Widgets__WEBPACK_IMPORTED_MODULE_1__["CurrentDateWidget"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Widgets__WEBPACK_IMPORTED_MODULE_1__["TodayOrdersStatsWidget"], null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-sm-6 col-md-4 col-lg-4 w-8-half-block"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Widgets__WEBPACK_IMPORTED_MODULE_1__["BlogLayoutOne"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-sm-6 col-md-4 col-lg-4 w-8-half-block"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Widgets__WEBPACK_IMPORTED_MODULE_1__["BlogLayoutTwo"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-sm-6 col-md-4 col-lg-4 w-8-full"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Widgets__WEBPACK_IMPORTED_MODULE_1__["BlogLayoutThree"], null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCollapsibleCard_RctCollapsibleCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      colClasses: "col-sm-12 col-md-6 w-xs-full",
      fullBlock: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Widgets__WEBPACK_IMPORTED_MODULE_1__["WeatherWidgetV2"], {
      city: "Chandigarh"
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

  reactHotLoader.register(GeneralWidgets, "GeneralWidgets", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\routes\\widgets\\general-widgets\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);