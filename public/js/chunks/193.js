(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[193],{

/***/ "./resources/js/components/Widgets/TopSelling.js":
/*!*******************************************************!*\
  !*** ./resources/js/components/Widgets/TopSelling.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TopSellingWidget; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var Api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Api */ "./resources/js/api/index.js");
/* harmony import */ var Util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Util/IntlMessages */ "./resources/js/util/IntlMessages.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Top Selling Widget
 */

 // api

 // intl messages


class TopSellingWidget extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      products: null
    };
  }

  componentDidMount() {
    Api__WEBPACK_IMPORTED_MODULE_2__["default"].get('topSellingProducts.js').then(response => {
      this.setState({
        products: response.data
      });
    }).catch(error => {// error handling
    });
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
      rtl: false
    };
    const {
      products
    } = this.state;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, settings, products && products.map((product, key) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: key
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "top-selling"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-img mb-20"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: product.thumbnail,
      width: "600",
      alt: "headphone device",
      className: "img-fluid d-block"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-content text-center"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, product.productName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "text-pink"
    }, product.sellingPrice))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "rct-block-footer clearfix"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "float-left"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: "widgets.totalSales"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, product.totalSales)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "float-right"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Earning"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, product.earning)))))));
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

  reactHotLoader.register(TopSellingWidget, "TopSellingWidget", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\TopSelling.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);