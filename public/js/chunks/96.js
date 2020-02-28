(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[96],{

/***/ "./resources/js/components/Widgets/SocialFeeds.js":
/*!********************************************************!*\
  !*** ./resources/js/components/Widgets/SocialFeeds.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Social Feeds Widget
 */


const SocialFeedsWidget = ({
  type,
  friendsCount,
  feedsCount,
  icon
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "social-card"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: `rounded-circle social-icon ${type}`
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
  className: `${type} ${icon}`
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: "font-weight-bold"
}, friendsCount), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: "fs-14"
}, "Friends")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: "font-weight-bold"
}, feedsCount), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: "fs-14"
}, "Feeds")));

const _default = SocialFeedsWidget;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SocialFeedsWidget, "SocialFeedsWidget", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\SocialFeeds.js");
  reactHotLoader.register(_default, "default", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\SocialFeeds.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);