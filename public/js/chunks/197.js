(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[197],{

/***/ "./resources/js/components/Widgets/TrendingNews.js":
/*!*********************************************************!*\
  !*** ./resources/js/components/Widgets/TrendingNews.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TrendingNews; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

//Trending News Widget


const trendingData = [{
  id: 1,
  date: "01",
  month: "July",
  title: "Telecom Commission approved new telecom policy.",
  body: "Dolor sit amet,consectetuer edipiscing elit,sed diam nonummy nibh euismod tinciduntut laoreet doloremagna aliquam erat…"
}, {
  id: 2,
  date: "05",
  month: "July",
  title: "Telecom Commission ",
  body: "Dolor sit amet,consectetuer edipiscing elit"
}, {
  id: 3,
  date: "07",
  month: "July",
  title: "Approved new telecom policy.",
  body: "Sed diam nonummy nibh euismod tinciduntut laoreet doloremagna aliquam erat…"
}, {
  id: 4,
  date: "10",
  month: "July",
  title: "Telecom Commission approved new telecom policy.",
  body: "Dolor sit amet,consectetuer edipiscing elit,sed diam nonummy nibh euismod tinciduntut laoreet doloremagna aliquam erat…"
}, {
  id: 5,
  date: "12",
  month: "July",
  title: "Telecom Commission ",
  body: "Dolor sit amet,consectetuer edipiscing elit"
}];
class TrendingNews extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      vertical: true,
      responsive: [{
        breakpoint: 600,
        settings: {
          arrows: false
        }
      }]
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "trending-news-widegt d-flex align-items-center"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex align-items-center trending-block"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "mb-0 text-white"
    }, "Trending"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "zmdi zmdi-flash ml-3 zmdi-hc-2x text-white"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({}, settings, {
      className: "p-4"
    }), trendingData && trendingData.map((news, key) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "slider-content",
      key: news.id
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex align-items-center "
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "month-wrap text-white mr-4 text-center"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "date d-block font-2x fw-bold"
    }, news.date), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "month font-xs d-block"
    }, news.month)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "slider-text-wrap"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "mb-0 text-white"
    }, news.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "mb-0 font-xs text-white"
    }, news.body)))))));
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

  reactHotLoader.register(trendingData, "trendingData", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\TrendingNews.js");
  reactHotLoader.register(TrendingNews, "TrendingNews", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\TrendingNews.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);