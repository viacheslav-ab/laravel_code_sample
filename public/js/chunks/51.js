(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[51],{

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

/***/ "./resources/js/routes/tables/data-table/index.js":
/*!********************************************************!*\
  !*** ./resources/js/routes/tables/data-table/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mui_datatables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mui-datatables */ "./node_modules/mui-datatables/dist/index.js");
/* harmony import */ var mui_datatables__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mui_datatables__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var Components_PageTitleBar_PageTitleBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Components/PageTitleBar/PageTitleBar */ "./resources/js/components/PageTitleBar/PageTitleBar.js");
/* harmony import */ var Components_RctCollapsibleCard_RctCollapsibleCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Components/RctCollapsibleCard/RctCollapsibleCard */ "./resources/js/components/RctCollapsibleCard/RctCollapsibleCard.js");
/* harmony import */ var Util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Util/IntlMessages */ "./resources/js/util/IntlMessages.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Data Table
 */

 // page title bar

 // rct card box

 // intl messages



class DataTable extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const columns = ["Name", "Title", "Location", "Age", "Salary"];
    const data = [["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000"], ["Aiden Lloyd", "Business Consultant", "Dallas", 55, "$200,000"], ["Jaden Collins", "Attorney", "Santa Ana", 27, "$500,000"], ["Franky Rees", "Business Analyst", "St. Petersburg", 22, "$50,000"], ["Aaren Rose", "Business Consultant", "Toledo", 28, "$75,000"], ["Blake Duncan", "Business Management Analyst", "San Diego", 65, "$94,000"], ["Frankie Parry", "Agency Legal Counsel", "Jacksonville", 71, "$210,000"], ["Lane Wilson", "Commercial Specialist", "Omaha", 19, "$65,000"], ["Robin Duncan", "Business Analyst", "Los Angeles", 20, "$77,000"], ["Mel Brooks", "Business Consultant", "Oklahoma City", 37, "$135,000"], ["Harper White", "Attorney", "Pittsburgh", 52, "$420,000"], ["Kris Humphrey", "Agency Legal Counsel", "Laredo", 30, "$150,000"], ["Frankie Long", "Industrial Analyst", "Austin", 31, "$170,000"], ["Brynn Robbins", "Business Analyst", "Norfolk", 22, "$90,000"], ["Justice Mann", "Business Consultant", "Chicago", 24, "$133,000"], ["Addison Navarro", "Business Management Analyst", "New York", 50, "$295,000"], ["Jesse Welch", "Agency Legal Counsel", "Seattle", 28, "$200,000"], ["Eli Mejia", "Commercial Specialist", "Long Beach", 65, "$400,000"], ["Gene Leblanc", "Industrial Analyst", "Hartford", 34, "$110,000"], ["Danny Leon", "Computer Scientist", "Newark", 60, "$220,000"], ["Lane Lee", "Corporate Counselor", "Cincinnati", 52, "$180,000"], ["Jesse Hall", "Business Analyst", "Baltimore", 44, "$99,000"], ["Danni Hudson", "Agency Legal Counsel", "Tampa", 37, "$90,000"], ["Terry Macdonald", "Commercial Specialist", "Miami", 39, "$140,000"], ["Justice Mccarthy", "Attorney", "Tucson", 26, "$330,000"], ["Silver Carey", "Computer Scientist", "Memphis", 47, "$250,000"], ["Franky Miles", "Industrial Analyst", "Buffalo", 49, "$190,000"], ["Glen Nixon", "Corporate Counselor", "Arlington", 44, "$80,000"], ["Gabby Strickland", "Business Process Consultant", "Scottsdale", 26, "$45,000"], ["Mason Ray", "Computer Scientist", "San Francisco", 39, "$142,000"]];
    const options = {
      filterType: 'dropdown',
      responsive: 'stacked'
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "data-table-wrapper"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_PageTitleBar_PageTitleBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
        id: "sidebar.dataTable"
      }),
      match: this.props.match
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "alert alert-info"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "MUI-Datatables is a data tables component built on Material-UI V1. It comes with features like filtering, view/hide columns, search, export to CSV download, printing, pagination, and sorting. On top of the ability to customize styling on most views, there are two responsive modes \"stacked\" and \"scroll\" for mobile/tablet devices. If you want more customize option please ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "https://github.com/gregnb/mui-datatables",
      className: "btn btn-danger btn-small mx-10"
    }, "Click "), " here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCollapsibleCard_RctCollapsibleCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
      heading: "Data Table",
      fullBlock: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mui_datatables__WEBPACK_IMPORTED_MODULE_1___default.a, {
      title: "Employee list",
      data: data,
      columns: columns,
      options: options
    })));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

const _default = DataTable;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(DataTable, "DataTable", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\routes\\tables\\data-table\\index.js");
  reactHotLoader.register(_default, "default", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\routes\\tables\\data-table\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);