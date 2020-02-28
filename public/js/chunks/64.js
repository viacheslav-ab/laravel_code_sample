(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[64],{

/***/ "./resources/js/components/Widgets/CurrentTimeLocation.js":
/*!****************************************************************!*\
  !*** ./resources/js/components/Widgets/CurrentTimeLocation.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var Util_IntlMessages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Util/IntlMessages */ "./resources/js/util/IntlMessages.js");
/* harmony import */ var Components_RctCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Components/RctCard */ "./resources/js/components/RctCard/index.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Current Date/Time Location Widget
 */
 // intl messages

 // rct card box



function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }

  ; // add zero in front of numbers < 10

  return i;
}

class CurrentTimeLocation extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      currentTime: {
        hours: '',
        minutes: '',
        seconds: ''
      }
    };
  }

  UNSAFE_componentWillMount() {
    let self = this;
    this.timer = setInterval(() => {
      self.startTime();
    }, 500);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  startTime() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    let time = {
      hours: h,
      minutes: m,
      seconds: s
    };
    this.setState({
      currentTime: time
    });
  }

  render() {
    const {
      hours,
      minutes,
      seconds
    } = this.state.currentTime;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "current-widget bg-info"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCard__WEBPACK_IMPORTED_MODULE_2__["RctCardContent"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex justify-content-between"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "align-items-start"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "mb-10"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_1__["default"], {
      id: "widgets.currentTime"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "mb-0"
    }, `${hours} : ${minutes} : ${seconds}`)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "align-items-end"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "zmdi zmdi-time"
    })))));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

const _default = CurrentTimeLocation;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(checkTime, "checkTime", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\CurrentTimeLocation.js");
  reactHotLoader.register(CurrentTimeLocation, "CurrentTimeLocation", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\CurrentTimeLocation.js");
  reactHotLoader.register(_default, "default", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\CurrentTimeLocation.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);