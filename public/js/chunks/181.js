(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[181],{

/***/ "./resources/js/components/Widgets/RecentOrders.js":
/*!*********************************************************!*\
  !*** ./resources/js/components/Widgets/RecentOrders.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var Api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Api */ "./resources/js/api/index.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Recent Orders
 */
 // api



class RecentOrders extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      recentOrders: null
    };
  }

  componentDidMount() {
    this.getRecentOrders();
  } // recent orders


  getRecentOrders() {
    Api__WEBPACK_IMPORTED_MODULE_1__["default"].get('recentOrders.js').then(response => {
      this.setState({
        recentOrders: response.data
      });
    }).catch(error => {// error hanlding
    });
  }

  render() {
    const {
      recentOrders
    } = this.state;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "table-responsive"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
      className: "table table-hover mb-0"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Order ID"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Invoice"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Customer Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Profitment"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Status"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, recentOrders && recentOrders.map((order, key) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: key
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, order.id), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, order.invoice), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "d-block fw-normal"
    }, order.customerName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "fs-12"
    }, order.customerEmail)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "$", order.amount), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: `badge ${order.labelClass}`
    }, order.status)))))));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

const _default = RecentOrders;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(RecentOrders, "RecentOrders", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\RecentOrders.js");
  reactHotLoader.register(_default, "default", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\RecentOrders.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);