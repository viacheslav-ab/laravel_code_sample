(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./resources/js/assets/img/user-1.jpg":
/*!********************************************!*\
  !*** ./resources/js/assets/img/user-1.jpg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/user-1.jpg?6137d13faeb9010ddc32fa87f00ff06f";

/***/ }),

/***/ "./resources/js/assets/img/user-2.jpg":
/*!********************************************!*\
  !*** ./resources/js/assets/img/user-2.jpg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/user-2.jpg?2ac74301c8a3d5417e4cdd56c4ec2f8a";

/***/ }),

/***/ "./resources/js/assets/img/user-3.jpg":
/*!********************************************!*\
  !*** ./resources/js/assets/img/user-3.jpg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/user-3.jpg?9697f0003ec71ec1161516c525f77640";

/***/ }),

/***/ "./resources/js/components/Widgets/TwitterFeedsV2.js":
/*!***********************************************************!*\
  !*** ./resources/js/components/Widgets/TwitterFeedsV2.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TwitterFeedsV2; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

//Twitter Feeds v2 widget



const twitterFeeds = [{
  id: 1,
  userAvatar: __webpack_require__(/*! Assets/img/user-1.jpg */ "./resources/js/assets/img/user-1.jpg"),
  tweets: "Contrary to popular belief,<a href=\"javascript:void(0)\">#LoremIpsum<\/a> is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney <a href=\"javascript:void(0)\">t.co/Milksed/t.co/43jffse3<\/a>"
}, {
  id: 2,
  userAvatar: __webpack_require__(/*! Assets/img/user-2.jpg */ "./resources/js/assets/img/user-2.jpg"),
  tweets: "Contrary to popular belief,<a href=\"javascript:void(0)\">#LoremIpsum<\/a> is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney <a href=\"javascript:void(0)\">t.co/Milksed/t.co/43jffse3<\/a>"
}, {
  id: 3,
  userAvatar: __webpack_require__(/*! Assets/img/user-3.jpg */ "./resources/js/assets/img/user-3.jpg"),
  tweets: "Contrary to popular belief,<a href=\"javascript:void(0)\">#LoremIpsum<\/a> is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney <a href=\"javascript:void(0)\">t.co/Milksed/t.co/43jffse3<\/a>"
}];
class TwitterFeedsV2 extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, settings, twitterFeeds && twitterFeeds.map((twitter, key) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "twitter-content",
      key: twitter.id
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "avatar-wrap d-flex align-itmes-start justify-content-center"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "overlay-wrap"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: twitter.userAvatar,
      alt: "user-avatar",
      height: "80",
      width: "80",
      className: "img-fluid rounded-circle"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "overlay-content"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
      color: "primary",
      className: "p-0 rounded-circle d-flex align-items-center justify-content-center"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "zmdi zmdi-twitter"
    }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text-center px-20"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "mb-0",
      dangerouslySetInnerHTML: {
        __html: twitter.tweets
      }
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

  reactHotLoader.register(twitterFeeds, "twitterFeeds", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\TwitterFeedsV2.js");
  reactHotLoader.register(TwitterFeedsV2, "TwitterFeedsV2", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\TwitterFeedsV2.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);