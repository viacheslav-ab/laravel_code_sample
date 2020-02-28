(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[55],{

/***/ "./resources/js/assets/img/share.png":
/*!*******************************************!*\
  !*** ./resources/js/assets/img/share.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/share.png?7033a9b80d0ab2782cd81edd88bccc07";

/***/ }),

/***/ "./resources/js/components/Widgets/ShareFriends.js":
/*!*********************************************************!*\
  !*** ./resources/js/components/Widgets/ShareFriends.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShareFriends; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var Util_IntlMessages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Util/IntlMessages */ "./resources/js/util/IntlMessages.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Social Share Widget
 */
 // inlt messages


class ShareFriends extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "share-friend d-flex justify-content-between bg-dark rct-block py-40 px-30"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "w-70"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "text-white border-0 mb-3"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_1__["default"], {
      id: "widgets.ShareWithFriends"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "mb-3 text-white"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_1__["default"], {
      id: "widgets.helpToShareText"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "social-share list-inline"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "list-inline-item"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      onClick: e => e.preventDefault(),
      className: "bg-facebook"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "ti-facebook"
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "list-inline-item"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      onClick: e => e.preventDefault(),
      className: "bg-twitter"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "ti-twitter-alt"
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "list-inline-item"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      onClick: e => e.preventDefault(),
      className: "bg-instagram"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "ti-instagram"
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "list-inline-item"
    }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      onClick: e => e.preventDefault(),
      className: "bg-google"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "ti-google"
    }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "py-20 d-xs-none"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "img-fluid",
      alt: "share",
      src: __webpack_require__(/*! Assets/img/share.png */ "./resources/js/assets/img/share.png")
    })));
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

  reactHotLoader.register(ShareFriends, "ShareFriends", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\ShareFriends.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);