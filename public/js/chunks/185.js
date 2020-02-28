(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[185],{

/***/ "./resources/js/components/Widgets/SessionSlider.js":
/*!**********************************************************!*\
  !*** ./resources/js/components/Widgets/SessionSlider.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SessionSlider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var Api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Api */ "./resources/js/api/index.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
** Session Slider
**/

 // api


class SessionSlider extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      sessionUsersData: null
    };
  }

  componentDidMount() {
    this.getSessionUsersData();
  } // session users data


  getSessionUsersData() {
    Api__WEBPACK_IMPORTED_MODULE_2__["default"].get('testimonials.js').then(response => {
      console.log(response);
      this.setState({
        sessionUsersData: response.data
      });
    }).catch(error => {// error handling
    });
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      swipe: true,
      touchMove: true,
      swipeToSlide: true,
      draggable: true
    };
    const {
      sessionUsersData
    } = this.state;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "session-slider"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, settings, sessionUsersData && sessionUsersData !== null && sessionUsersData.map((data, key) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: key
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: data.profile,
      alt: "session-slider",
      className: "img-fluid",
      width: "377",
      height: "588"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "rct-img-overlay"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
      className: "client-name"
    }, data.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, data.designation), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "mb-0 fs-14"
    }, data.body))))));
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

  reactHotLoader.register(SessionSlider, "SessionSlider", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\SessionSlider.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);