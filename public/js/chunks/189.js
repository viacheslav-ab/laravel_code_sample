(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[189],{

/***/ "./resources/js/components/Widgets/StockExchange.js":
/*!**********************************************************!*\
  !*** ./resources/js/components/Widgets/StockExchange.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var Components_RctSectionLoader_RctSectionLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Components/RctSectionLoader/RctSectionLoader */ "./resources/js/components/RctSectionLoader/RctSectionLoader.js");
/* harmony import */ var Components_RctCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Components/RctCard */ "./resources/js/components/RctCard/index.js");
/* harmony import */ var Util_IntlMessages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Util/IntlMessages */ "./resources/js/util/IntlMessages.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Stock Exchange Widget
 */



 // section loader

 // rct card footer




class StockExchange extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      ratesData: null,
      loading: false
    };
  }

  componentDidMount() {
    this.setState({
      loading: true
    });
    this.getCurrencyRates();
  } // get currency rates


  getCurrencyRates() {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('https://data.fixer.io/api/latest?access_key=4e83fa57182d17c76a14535831d547c6').then(response => {
      this.setState({
        loading: false,
        ratesData: response.data
      });
    }).catch(error => {
      console.log(error);
      this.setState({
        loading: false
      });
    });
  }

  render() {
    const {
      ratesData,
      loading
    } = this.state;

    if (loading) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctSectionLoader_RctSectionLoader__WEBPACK_IMPORTED_MODULE_4__["default"], null);
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "stock-exchange"
    }, ratesData !== null && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "list-unstyled p-0"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: __webpack_require__(/*! Assets/flag-icons/icons8-canada.png */ "./resources/js/assets/flag-icons/icons8-canada.png"),
      className: "img-fluid mr-10",
      alt: "cad"
    }), " CAD (Canadian Dollar)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "ti-arrow-up text-success"
    }), " ", ratesData.rates ? ratesData.rates.CAD.toFixed(2) : 0)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: __webpack_require__(/*! Assets/flag-icons/icons8-germany.png */ "./resources/js/assets/flag-icons/icons8-germany.png"),
      className: "img-fluid mr-10",
      alt: "eur"
    }), " EUR (Euro)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "ti-arrow-down text-danger"
    }), " ", ratesData.rates ? ratesData.rates.EUR.toFixed(2) : 0)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: __webpack_require__(/*! Assets/flag-icons/icons8-south_korea.png */ "./resources/js/assets/flag-icons/icons8-south_korea.png"),
      className: "img-fluid mr-10",
      alt: "krw"
    }), " KRW (Korea)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "ti-arrow-down text-danger"
    }), " ", ratesData.rates ? ratesData.rates.NZD.toFixed(2) : 0)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: __webpack_require__(/*! Assets/flag-icons/icons8-india.png */ "./resources/js/assets/flag-icons/icons8-india.png"),
      className: "img-fluid mr-10",
      alt: "inr"
    }), " INR (Indian Rupees)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "ti-arrow-up text-success"
    }), " ", ratesData.rates ? ratesData.rates.INR.toFixed(2) : 0)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: __webpack_require__(/*! Assets/flag-icons/icons8-singapore.png */ "./resources/js/assets/flag-icons/icons8-singapore.png"),
      className: "img-fluid mr-10",
      alt: "sgd"
    }), " SGD (Singapore Dollar)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "ti-arrow-down text-danger"
    }), " ", ratesData.rates ? ratesData.rates.SGD.toFixed(2) : 0))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCard__WEBPACK_IMPORTED_MODULE_5__["RctCardFooter"], {
      customClasses: "border-0 fs-12 text-base"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "mr-5 zmdi zmdi-refresh"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_6__["default"], {
      id: "widgets.updated10Minago"
    })));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

const _default = StockExchange;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(StockExchange, "StockExchange", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\StockExchange.js");
  reactHotLoader.register(_default, "default", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\StockExchange.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);