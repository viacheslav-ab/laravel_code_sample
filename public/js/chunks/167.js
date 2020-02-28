(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[167],{

/***/ "./resources/js/components/Widgets/OnlineVisitors.js":
/*!***********************************************************!*\
  !*** ./resources/js/components/Widgets/OnlineVisitors.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jvectormap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jvectormap */ "./node_modules/react-jvectormap/build/index.js");
/* harmony import */ var react_jvectormap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jvectormap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var Util_IntlMessages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Util/IntlMessages */ "./resources/js/util/IntlMessages.js");
/* harmony import */ var Constants_chart_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Constants/chart-config */ "./resources/js/constants/chart-config.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Online Visitor
 */

 // intl messages

 // chart config



const OnlineVisitorsWidget = ({
  data
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "card"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
  className: "card-title"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: "text-info"
}, data.totalVisitors, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_2__["default"], {
  id: "widgets.onlineVistors"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  style: {
    width: '100%',
    height: 170
  }
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_jvectormap__WEBPACK_IMPORTED_MODULE_1__["VectorMap"], {
  map: 'world_mill',
  backgroundColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_3__["default"].color.white,
  containerStyle: {
    width: '100%',
    height: '100%'
  },
  regionStyle: {
    initial: {
      fill: Constants_chart_config__WEBPACK_IMPORTED_MODULE_3__["default"].color.default
    }
  },
  markerStyle: {
    initial: {
      fill: Constants_chart_config__WEBPACK_IMPORTED_MODULE_3__["default"].color.info,
      stroke: Constants_chart_config__WEBPACK_IMPORTED_MODULE_3__["default"].color.white
    }
  },
  zoomButtons: false,
  zoomOnScroll: false,
  containerClassName: "map",
  markers: data.markers
})));

const _default = OnlineVisitorsWidget;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(OnlineVisitorsWidget, "OnlineVisitorsWidget", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\OnlineVisitors.js");
  reactHotLoader.register(_default, "default", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\OnlineVisitors.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);