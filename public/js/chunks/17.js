(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./resources/js/assets/img/gallery-1.jpg":
/*!***********************************************!*\
  !*** ./resources/js/assets/img/gallery-1.jpg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/gallery-1.jpg?8d5e7897a3e1649c1fbb80fb3bc56c17";

/***/ }),

/***/ "./resources/js/assets/img/gallery-2.jpg":
/*!***********************************************!*\
  !*** ./resources/js/assets/img/gallery-2.jpg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/gallery-2.jpg?d6755aa94354b18eabe9381bd5ed6b60";

/***/ }),

/***/ "./resources/js/assets/img/gallery-3.jpg":
/*!***********************************************!*\
  !*** ./resources/js/assets/img/gallery-3.jpg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/gallery-3.jpg?eb0b1ceeeb865fcb133d6c93f081b4fb";

/***/ }),

/***/ "./resources/js/assets/img/gallery-4.jpg":
/*!***********************************************!*\
  !*** ./resources/js/assets/img/gallery-4.jpg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/gallery-4.jpg?d8bf3100837347f7b2e799306c785e01";

/***/ }),

/***/ "./resources/js/assets/img/gallery-5.jpg":
/*!***********************************************!*\
  !*** ./resources/js/assets/img/gallery-5.jpg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/gallery-5.jpg?2dc79122ed025f152c3e5416b26380bf";

/***/ }),

/***/ "./resources/js/components/Widgets/TopHeadlines.js":
/*!*********************************************************!*\
  !*** ./resources/js/components/Widgets/TopHeadlines.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TopHeadlines; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-custom-scrollbars */ "./node_modules/react-custom-scrollbars/lib/index.js");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var Util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Util/IntlMessages */ "./resources/js/util/IntlMessages.js");
/* harmony import */ var Components_RctCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Components/RctCard */ "./resources/js/components/RctCard/index.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

//Top Headlines widget



 // intl messages

 // card component

 //Data

const headlinesData = [{
  id: 1,
  title: "Telecom Commission approves net neutrality, new telecom policy",
  place: "New Delhi",
  category: "Technology",
  badgeColor: "danger",
  imgUrl: __webpack_require__(/*! Assets/img/gallery-1.jpg */ "./resources/js/assets/img/gallery-1.jpg"),
  time: "4 Hours Ago",
  date: "July 11 2018"
}, {
  id: 2,
  title: "Check status of Mumbai local, long-distance trains as rains continue",
  place: "Mumbai",
  category: "Weather",
  badgeColor: "info",
  imgUrl: __webpack_require__(/*! Assets/img/gallery-2.jpg */ "./resources/js/assets/img/gallery-2.jpg"),
  time: "6 Hours Ago",
  date: "July 11 2018"
}, {
  id: 3,
  title: "Croatia lowest ranked team in history to reach World Cup final",
  place: "Croatia",
  category: "Sports",
  badgeColor: "primary",
  imgUrl: __webpack_require__(/*! Assets/img/gallery-3.jpg */ "./resources/js/assets/img/gallery-3.jpg"),
  time: "12 Hours Ago",
  date: "July 11 2018"
}, {
  id: 4,
  title: "Vistara orders Boeing, Airbus jets worth $3.1 billion",
  place: "USA",
  category: "World",
  badgeColor: "success",
  imgUrl: __webpack_require__(/*! Assets/img/gallery-4.jpg */ "./resources/js/assets/img/gallery-4.jpg"),
  time: "Yesterday",
  date: "July 10 2018"
}, {
  id: 5,
  title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  place: "India",
  category: "Entertainment",
  badgeColor: "warning",
  imgUrl: __webpack_require__(/*! Assets/img/gallery-5.jpg */ "./resources/js/assets/img/gallery-5.jpg"),
  time: "1 hour ago",
  date: "July 11 2018"
}];
class TopHeadlines extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3__["Scrollbars"], {
      className: "rct-scroll",
      autoHeight: true,
      autoHeightMin: 100,
      autoHeightMax: 571,
      autoHide: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "top-headlines-widget list-unstyled mb-0"
    }, headlinesData && headlinesData.map((headline, key) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "d-flex align-items-center justify-content-between p-20 border-bottom",
      key: headline.id
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "news-content d-flex"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "img-wrap mr-3"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: headline.imgUrl,
      alt: "headlines",
      height: "80",
      width: "80",
      className: "img-fluid"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text-content"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
      color: headline.badgeColor,
      className: "mb-2 d-inline-block"
    }, headline.category), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
      className: "mb-2"
    }, headline.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex font-xs fw-light text-muted"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "mx-1"
    }, headline.place), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "mx-1"
    }, headline.date)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "news-time w-10 text-right"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "text-muted font-xs"
    }, headline.time)))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCard__WEBPACK_IMPORTED_MODULE_5__["RctCardFooter"], {
      customClasses: "d-flex justify-content-between align-items-center rounded-bottom"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
      variant: "contained",
      className: "text-white bg-success px-3 btn-xs"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "widgets.addNew"
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

  reactHotLoader.register(headlinesData, "headlinesData", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\TopHeadlines.js");
  reactHotLoader.register(TopHeadlines, "TopHeadlines", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\TopHeadlines.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);