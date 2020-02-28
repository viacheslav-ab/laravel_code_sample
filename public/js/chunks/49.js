(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49],{

/***/ "./resources/js/components/CountDown/CountDown.js":
/*!********************************************************!*\
  !*** ./resources/js/components/CountDown/CountDown.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CountDownTimer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Countdown Timer
 */

class CountDownTimer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      time: {},
      seconds: props.time ? props.time : 3600
    };
    this.timer = 0;
    this.countDown = this.countDown.bind(this);
  }

  secondsToTime(secs) {
    let hours = Math.floor(secs / (60 * 60));
    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);
    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);
    let obj = {
      h: hours,
      m: minutes,
      s: seconds
    };
    return obj;
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({
      time: timeLeftVar
    });
    this.startTimer();
  }

  startTimer() {
    if (this.timer === 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds
    }); // Check if we're at zero.

    if (seconds == 0) {
      clearInterval(this.timer);
    }
  }

  render() {
    const {
      m,
      s
    } = this.state.time;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, m, " : ", s < 10 ? `0${s}` : s);
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

  reactHotLoader.register(CountDownTimer, "CountDownTimer", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\CountDown\\CountDown.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/js/components/Widgets/NewOrderCountdown.js":
/*!**************************************************************!*\
  !*** ./resources/js/components/Widgets/NewOrderCountdown.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NewOrderCountdown; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var Components_CountDown_CountDown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Components/CountDown/CountDown */ "./resources/js/components/CountDown/CountDown.js");
/* harmony import */ var Util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Util/IntlMessages */ "./resources/js/util/IntlMessages.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * New Order Countdown Widget
 */


 // components

 // intl messages


class NewOrderCountdown extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      className: "rct-block"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], {
      className: "d-flex"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "d-flex justify-content-center align-items-center rounded-circle bg-warning p-15 mr-15"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "zmdi zmdi-notifications-active zmdi-hc-lg text-white"
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "fs-14 fw-bold mb-5"
    }, "New order from John"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "fs-12 mb-20 d-block text-muted"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "widgets.AcceptorrRejectWithin"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      className: "border py-5 px-15 d-inline-block mr-20"
    }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_CountDown_CountDown__WEBPACK_IMPORTED_MODULE_3__["default"], {
      time: 500000
    }), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-inline-block"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "mr-10",
      "aria-label": "check"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "zmdi zmdi-check"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      "aria-label": "close"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "zmdi zmdi-close"
    }))))));
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

  reactHotLoader.register(NewOrderCountdown, "NewOrderCountdown", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\NewOrderCountdown.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);