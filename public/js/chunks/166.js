(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[166],{

/***/ "./resources/js/components/Widgets/OngoingProjects.js":
/*!************************************************************!*\
  !*** ./resources/js/components/Widgets/OngoingProjects.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var Components_RctCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Components/RctCard */ "./resources/js/components/RctCard/index.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Ongoing Project
 */



 // rct card box



class OngoingProjects extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCard__WEBPACK_IMPORTED_MODULE_4__["RctCardContent"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "ongoing-projects-wrap"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "mb-15"
    }, "Project 1"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "project-list list-unstyled p-0 "
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "p-0 d-flex justify-content-start align-content-center"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "w-50 d-flex fw-semi-bold "
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "material-icons mr-10 "
    }, "account_circle"), "supervisor :"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "w-50 text-truncate"
    }, "john Gena")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "p-0 d-flex justify-content-start align-content-center"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "w-50 d-flex fw-semi-bold "
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "material-icons mr-10 "
    }, "schedule"), "duration :"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "w-50 text-truncate"
    }, "3 Weeks")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "p-0 d-flex justify-content-start align-content-center"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "w-50 d-flex fw-semi-bold "
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "material-icons mr-10 "
    }, "monetization_on"), "net worth :"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "w-50 text-truncate"
    }, "$ 2364378")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "p-0 d-flex justify-content-start align-content-center"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "w-50 d-flex fw-semi-bold "
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "material-icons mr-10 "
    }, "mail_outline"), "email :"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "w-50 text-truncate"
    }, "support@theironnetwork.org")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "p-0 d-flex justify-content-start align-content-center"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "w-50 d-flex fw-semi-bold "
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "material-icons mr-10 "
    }, "phone"), "phone :"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "w-50 text-truncate"
    }, "+01 3456 25378"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "progress-wrap pt-20"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex justify-content-between align-items-center mb-10"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "fw-semi-bold text-capitalize"
    }, "progress :"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "30%")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      color: "primary",
      className: "mt-10 progress-xs",
      value: 70
    }))));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

const _default = OngoingProjects;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(OngoingProjects, "OngoingProjects", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\OngoingProjects.js");
  reactHotLoader.register(_default, "default", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\OngoingProjects.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);