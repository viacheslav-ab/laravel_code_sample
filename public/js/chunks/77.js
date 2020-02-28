(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[77],{

/***/ "./resources/js/components/Widgets/OrderStatus.js":
/*!********************************************************!*\
  !*** ./resources/js/components/Widgets/OrderStatus.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OrderStatus; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
 * Order Status Widget
 */
 // api


class OrderStatus extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      ordersStatus: null
    };
  }

  componentDidMount() {
    this.getOrdersStatus();
  } // get orders status


  getOrdersStatus() {
    Api__WEBPACK_IMPORTED_MODULE_1__["default"].get('ordersStatus.js').then(response => {
      this.setState({
        ordersStatus: response.data
      });
    }).catch(error => {
      console.log(error);
    });
  }

  render() {
    const {
      ordersStatus
    } = this.state;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "table-responsive"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
      className: "table table-hover"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Invoice"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "User"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Order date"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Amount ($)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Status"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Tracking Number"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, ordersStatus && ordersStatus.map((order, key) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: key
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, order.invoice), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "media"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "media-left mr-15"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: order.userAvatar,
      className: "rounded-circle",
      alt: "user profile",
      width: "50",
      height: "50"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "media-body pt-15"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, order.userName)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, order.orderDate), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, order.amount), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: `badge badge-${order.badgeClass}`
    }, order.status)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, order.trackingNumber))))));
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

  reactHotLoader.register(OrderStatus, "OrderStatus", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\OrderStatus.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);