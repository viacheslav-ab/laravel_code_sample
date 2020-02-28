(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[82],{

/***/ "./resources/js/components/Widgets/ProductReports.js":
/*!***********************************************************!*\
  !*** ./resources/js/components/Widgets/ProductReports.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-custom-scrollbars */ "./node_modules/react-custom-scrollbars/lib/index.js");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var Api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Api */ "./resources/js/api/index.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Product Report Widget
 */


 // api



class ProductReportsWidget extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      products: null
    };
  }

  componentDidMount() {
    this.getProductsReports();
  } // get products reports


  getProductsReports() {
    Api__WEBPACK_IMPORTED_MODULE_3__["default"].get('productsReports.js').then(response => {
      this.setState({
        products: response.data
      });
    }).catch(error => {// error handling
    });
  }

  render() {
    const {
      products
    } = this.state;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2__["Scrollbars"], {
      className: "rct-scroll",
      autoHeight: true,
      autoHeightMin: 100,
      autoHeightMax: 410,
      autoHide: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "list-group ie-flex"
    }, products && products.map((product, key) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "list-group-item d-flex justify-content-between border-0",
      key: key
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "media"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "media-left mr-15"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: product.photoUrl,
      alt: "project logo",
      className: "media-object",
      width: "40",
      height: "40"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "media-body"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "d-block fs-14 fw-semi-bold"
    }, product.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "d-block fs-12 text-muted"
    }, product.date))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
      color: "primary",
      className: "import-report"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "ti-import"
    }))))));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

const _default = ProductReportsWidget;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ProductReportsWidget, "ProductReportsWidget", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\ProductReports.js");
  reactHotLoader.register(_default, "default", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\ProductReports.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);