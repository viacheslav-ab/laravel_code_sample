(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[52],{

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

/***/ "./resources/js/routes/tables/responsive/index.js":
/*!********************************************************!*\
  !*** ./resources/js/routes/tables/responsive/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var Components_PageTitleBar_PageTitleBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Components/PageTitleBar/PageTitleBar */ "./resources/js/components/PageTitleBar/PageTitleBar.js");
/* harmony import */ var Util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Util/IntlMessages */ "./resources/js/util/IntlMessages.js");
/* harmony import */ var Components_RctCollapsibleCard_RctCollapsibleCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Components/RctCollapsibleCard/RctCollapsibleCard */ "./resources/js/components/RctCollapsibleCard/RctCollapsibleCard.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Responsive
 */

 // page title bar

 // intl messages

 // rct card box



const ResponsiveTable = ({
  match
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "responsive-table-wrapper"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_PageTitleBar_PageTitleBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
  title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "sidebar.responsive"
  }),
  match: match
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCollapsibleCard_RctCollapsibleCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
  heading: "Responsive Table"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "table-responsive"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "unseen"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Table"], {
  hover: true,
  bordered: true,
  striped: true
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
  className: "bg-primary text-white"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Codes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Company"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Price"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Change"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Change %"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Open"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "High"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Low"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Volume"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "AAC"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "AUSTRALIAN AGRICULTURAL COMPANY LIMITED."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "$1.38"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "-0.01"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "-0.36%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "$1.39"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "$1.39"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "$1.38"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "9,395")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "AAD"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "ARDENT LEISURE GROUP"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "$1.15"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, " +0.02"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "1.32%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "$1.14"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "$1.15"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "$1.13"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "56,431")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "AAX"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "AUSENCO LIMITED"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "$4.00"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "-0.04"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "-0.99%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "$4.01"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "$4.05"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "$4.00"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "90,641")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "ABC"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "ADELAIDE BRIGHTON LIMITED"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "$3.00"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, " +0.06"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "2.04%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "$2.98"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "$3.00"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "$2.96"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "862,518")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "ABP"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "ABACUS PROPERTY GROUP"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "$1.91"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "0.00"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "0.00%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "$1.92"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "$1.93"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "$1.90"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "595,701")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "ABY"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "ADITYA BIRLA MINERALS LIMITED"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "$0.77"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, " +0.02"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "2.00%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "$0.76"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "$0.77"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "$0.76"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "54,567")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "ACR"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "ACRUX LIMITED"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "$3.71"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, " +0.01"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "0.14%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "$3.70"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "$3.72"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "$3.68"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "191,373")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "ADU"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "ADAMUS RESOURCES LIMITED"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "$0.72"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "0.00"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "0.00%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "$0.73"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "$0.74"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "$0.72"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "8,602,291"))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCollapsibleCard_RctCollapsibleCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
  heading: "Responsive Filp Table"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "table-responsive"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "flip-scroll"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
  className: "table table-bordered table-striped flip-content"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
  className: "bg-success"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, " Code "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, " Company "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
  className: "numeric"
}, " Price "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
  className: "numeric"
}, " Change "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
  className: "numeric"
}, " Change % "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
  className: "numeric"
}, " Open "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
  className: "numeric"
}, " High "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
  className: "numeric"
}, " Low "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
  className: "numeric"
}, " Volume "))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, " AAC "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, " AUSTRALIAN AGRICULTURAL COMPANY LIMITED. "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: "numeric"
}, " \xA0 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: "numeric"
}, " -0.01 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: "numeric"
}, " -0.36% "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: "numeric"
}, " $1.39 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: "numeric"
}, " $1.39 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: "numeric"
}, " \xA0 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: "numeric"
}, " 9,395 ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, " AAD "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, " ARDENT LEISURE GROUP "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: "numeric"
}, " $1.15 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: "numeric"
}, " +0.02 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: "numeric"
}, " 1.32% "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: "numeric"
}, " $1.14 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: "numeric"
}, " $1.15 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: "numeric"
}, " $1.13 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: "numeric"
}, " 56,431 ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, " AAX "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, " AUSENCO LIMITED "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: "numeric"
}, " $4.00 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: "numeric"
}, " -0.04 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: "numeric"
}, " -0.99% "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: "numeric"
}, " $4.01 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: "numeric"
}, " $4.05 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: "numeric"
}, " $4.00 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: "numeric"
}, " 90,641 ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, " ABC "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, " ADELAIDE BRIGHTON LIMITED "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: "numeric"
}, " $3.00 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: "numeric"
}, " +0.06 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: "numeric"
}, " 2.04% "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: "numeric"
}, " $2.98 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: "numeric"
}, " $3.00 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: "numeric"
}, " $2.96 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: "numeric"
}, " 862,518 ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, " ABP "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, " ABACUS PROPERTY GROUP "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: "numeric"
}, " $1.91 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: "numeric"
}, " 0.00 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: "numeric"
}, " 0.00% "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: "numeric"
}, " $1.92 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: "numeric"
}, " $1.93 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: "numeric"
}, " $1.90 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: "numeric"
}, " 595,701 ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, " ABY "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, " ADITYA BIRLA MINERALS LIMITED "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: "numeric"
}, " $0.77 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: "numeric"
}, " +0.02 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: "numeric"
}, " 2.00% "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: "numeric"
}, " $0.76 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: "numeric"
}, " $0.77 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: "numeric"
}, " $0.76 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: "numeric"
}, " 54,567 ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, " ACR "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, " ACRUX LIMITED "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: "numeric"
}, " $3.71 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: "numeric"
}, " +0.01 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: "numeric"
}, " 0.14% "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: "numeric"
}, " $3.70 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: "numeric"
}, " $3.72 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: "numeric"
}, " $3.68 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: "numeric"
}, " 191,373 ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, " ADU "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, " ADAMUS RESOURCES LIMITED "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: "numeric"
}, " $0.72 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: "numeric"
}, " 0.00 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: "numeric"
}, " 0.00% "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: "numeric"
}, " $0.73 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: "numeric"
}, " $0.74 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: "numeric"
}, " $0.72 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: "numeric"
}, " 8,602,291 ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, " AGG "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, " ANGLOGOLD ASHANTI LIMITED "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: "numeric"
}, " $7.81 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: "numeric"
}, " -0.22 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: "numeric"
}, " -2.74% "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: "numeric"
}, " $7.82 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: "numeric"
}, " $7.82 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: "numeric"
}, " $7.81 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: "numeric"
}, " 148 "))))))));

const _default = ResponsiveTable;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ResponsiveTable, "ResponsiveTable", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\routes\\tables\\responsive\\index.js");
  reactHotLoader.register(_default, "default", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\routes\\tables\\responsive\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);