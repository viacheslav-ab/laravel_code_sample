(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[86],{

/***/ "./resources/js/components/Widgets/QuoteOfTheDay.js":
/*!**********************************************************!*\
  !*** ./resources/js/components/Widgets/QuoteOfTheDay.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Quotes Of The Day
 */


const quotes = [{
  id: 1,
  author: 'John Doe',
  avatar: __webpack_require__(/*! Assets/avatars/user-1.jpg */ "./resources/js/assets/avatars/user-1.jpg"),
  date: 'Yesterday',
  body: 'Watching the news the other day, it occurred to me that people who have “words to live by” often begin to attack and even kill others. I thought back to my own angry youth, when I could easily use words to justify violent thoughts which might have become violent actions.Watching the news the other day, it occurred to me that people who have “words to live by” often begin to attack and even kill others. '
}, {
  id: 2,
  author: 'Shelby Caldwell',
  avatar: __webpack_require__(/*! Assets/avatars/user-2.jpg */ "./resources/js/assets/avatars/user-2.jpg"),
  date: '10 min ago',
  body: 'Watching the news the other day, it occurred to me that people who have “words to live by” often begin to attack and even kill others. I thought back to my own angry youth, when I could easily use words to justify violent thoughts which might have become violent actions.Watching the news the other day, it occurred to me that people who have “words to live by” often begin to attack and even kill others. '
}, {
  id: 3,
  author: 'Beau Salinas',
  avatar: __webpack_require__(/*! Assets/avatars/user-3.jpg */ "./resources/js/assets/avatars/user-3.jpg"),
  date: 'Yesterday',
  body: 'Watching the news the other day, it occurred to me that people who have “words to live by” often begin to attack and even kill others. I thought back to my own angry youth, when I could easily use words to justify violent thoughts which might have become violent actions. Watching the news the other day, it occurred to me that people who have “words to live by” often begin to attack and even kill others.'
}, {
  id: 4,
  author: 'Kelsey Beck',
  avatar: __webpack_require__(/*! Assets/avatars/user-3.jpg */ "./resources/js/assets/avatars/user-3.jpg"),
  date: 'Yesterday',
  body: 'Watching the news the other day, it occurred to me that people who have “words to live by” often begin to attack and even kill others. I thought back to my own angry youth, when I could easily use words to justify violent thoughts which might have become violent actions.Watching the news the other day, it occurred to me that people who have “words to live by” often begin to attack and even kill others. '
}];

class QuoteOfTheDay extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, settings, quotes && quotes.map((quote, key) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: key,
      className: "pb-20"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex mb-25 align-items-center"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "user-img mr-25"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: quote.avatar,
      alt: "reviewer profile",
      className: "d-inline-block img-fluid rounded-circle",
      width: "60",
      height: "60"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
      className: "mb-0"
    }, quote.author), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "fs-12"
    }, quote.date))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "mb-20 text-justify"
    }, quote.body)))));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

const _default = QuoteOfTheDay;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(quotes, "quotes", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\QuoteOfTheDay.js");
  reactHotLoader.register(QuoteOfTheDay, "QuoteOfTheDay", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\QuoteOfTheDay.js");
  reactHotLoader.register(_default, "default", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\QuoteOfTheDay.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);