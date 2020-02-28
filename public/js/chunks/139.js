(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[139],{

/***/ "./resources/js/assets/avatars/user-8.jpg":
/*!************************************************!*\
  !*** ./resources/js/assets/avatars/user-8.jpg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/user-8.jpg?4740d9e17a99f5b766db7ca2b92623bf";

/***/ }),

/***/ "./resources/js/components/Widgets/ContactRequest.js":
/*!***********************************************************!*\
  !*** ./resources/js/components/Widgets/ContactRequest.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var react_bootstrap_sweetalert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap-sweetalert */ "./node_modules/react-bootstrap-sweetalert/dist/index.js");
/* harmony import */ var react_bootstrap_sweetalert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_sweetalert__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var Util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Util/IntlMessages */ "./resources/js/util/IntlMessages.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Contact Request Widget
 */


 // intl messages



class ContactRequestWidget extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      successAlert: false
    };
  }

  onAccept() {
    this.setState({
      successAlert: true
    });
  }

  onReject() {
    this.setState({
      successAlert: false
    });
  }

  onConfirm() {
    this.setState({
      successAlert: false
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "lazy-up"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card pt-30"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "media"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "media-left mr-25"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: __webpack_require__(/*! Assets/avatars/user-8.jpg */ "./resources/js/assets/avatars/user-8.jpg"),
      className: "img-fluid rounded-circle",
      alt: "user profile",
      width: "90",
      height: "90"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "media-body"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "mb-5 text-pink fs-14 d-block"
    }, "Contact Request"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "mb-5"
    }, "Andre Hicks"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "text-muted fs-14 mb-15 d-block"
    }, "Sr. Develoepr @Oracle"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-foot d-flex align-self-end"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
      variant: "contained",
      size: "small",
      onClick: () => this.onAccept(),
      className: "btn-primary mr-5 mb-10 text-white"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: "button.accept"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
      variant: "contained",
      size: "small",
      onClick: () => this.onReject(),
      className: "btn-warning mb-10 text-white"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: "button.reject"
    })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_sweetalert__WEBPACK_IMPORTED_MODULE_2___default.a, {
      success: true,
      show: this.state.successAlert,
      title: "Contact Request Accecpted",
      onConfirm: () => this.onConfirm('success')
    }, "You clicked the button!"));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

const _default = ContactRequestWidget;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ContactRequestWidget, "ContactRequestWidget", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\ContactRequest.js");
  reactHotLoader.register(_default, "default", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\ContactRequest.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);