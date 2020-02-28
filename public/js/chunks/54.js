(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[54],{

/***/ "./resources/js/assets/img/coupon.png":
/*!********************************************!*\
  !*** ./resources/js/assets/img/coupon.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/coupon.png?75eeddce3118b831df0caa599ac8f9aa";

/***/ }),

/***/ "./resources/js/components/Widgets/PromoCoupons.js":
/*!*********************************************************!*\
  !*** ./resources/js/components/Widgets/PromoCoupons.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PromoCoupons; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var Util_IntlMessages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Util/IntlMessages */ "./resources/js/util/IntlMessages.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Promo Coupon Widget
 */

 // intl messages


class PromoCoupons extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex justify-content-between bg-info rct-block py-25 px-30 promo-coupon"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mb-20"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "text-white mb-10"
    }, "UP TO 50% OFF"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "mb-10 text-white"
    }, "Last chance to save upto 50% off the orignal price on all gadgets and electronics!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
      variant: "contained",
      color: "primary"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_2__["default"], {
      id: "button.saveNow"
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "mb-10 text-white"
    }, "*Offer valid through February 15. While supplies last.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "img-fluid d-xs-none",
      alt: "share",
      width: "210",
      height: "210",
      src: __webpack_require__(/*! Assets/img/coupon.png */ "./resources/js/assets/img/coupon.png")
    }));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}
;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(PromoCoupons, "PromoCoupons", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\PromoCoupons.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);