(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[85],{

/***/ "./resources/js/components/Widgets/ProjectStatus.js":
/*!**********************************************************!*\
  !*** ./resources/js/components/Widgets/ProjectStatus.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var Components_RctCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Components/RctCard */ "./resources/js/components/RctCard/index.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Project Status
*/

 // rct card box



class ProjectStatus extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCard__WEBPACK_IMPORTED_MODULE_2__["RctCardContent"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "project-status-wrap"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "progress-wrap mb-25"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex justify-content-between align-items-center"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "mb-0"
    }, "Project 1"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
      color: "success",
      className: "text-capitalize",
      pill: true
    }, "completed")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      color: "primary",
      className: "my-15 progress-xs",
      value: 70
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "progress-wrap mb-25"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex justify-content-between align-items-center"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "mb-0"
    }, "Project 2"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
      color: "danger",
      className: "text-capitalize",
      pill: true
    }, "pending")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      color: "primary",
      className: "my-15 progress-xs",
      value: 70
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "progress-wrap mb-25"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex justify-content-between align-items-center"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "mb-0"
    }, "Project 3"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
      color: "info",
      className: "text-capitalize",
      pill: true
    }, "ongoing")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      color: "primary",
      className: "my-15 progress-xs",
      value: 70
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "progress-wrap mb-25"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex justify-content-between align-items-center"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "mb-0"
    }, "Project 4"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
      color: "success",
      className: "text-capitalize",
      pill: true
    }, "completed")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      color: "primary",
      className: "my-15 progress-xs",
      value: 70
    }))));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

const _default = ProjectStatus;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ProjectStatus, "ProjectStatus", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\ProjectStatus.js");
  reactHotLoader.register(_default, "default", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\ProjectStatus.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);