(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "./resources/js/components/Charts/DoughnutChart.js":
/*!*********************************************************!*\
  !*** ./resources/js/components/Charts/DoughnutChart.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DoughnutChart; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var Constants_chart_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Constants/chart-config */ "./resources/js/constants/chart-config.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};




const data = {
  labels: ['Total Request', 'New', 'Pending'],
  datasets: [{
    data: [250, 25, 125],
    backgroundColor: [Constants_chart_config__WEBPACK_IMPORTED_MODULE_2__["default"].color.primary, Constants_chart_config__WEBPACK_IMPORTED_MODULE_2__["default"].color.warning, Constants_chart_config__WEBPACK_IMPORTED_MODULE_2__["default"].color.info],
    hoverBackgroundColor: [Constants_chart_config__WEBPACK_IMPORTED_MODULE_2__["default"].color.primary, Constants_chart_config__WEBPACK_IMPORTED_MODULE_2__["default"].color.warning, Constants_chart_config__WEBPACK_IMPORTED_MODULE_2__["default"].color.info]
  }]
};
const options = {
  legend: {
    display: false,
    labels: {
      fontColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_2__["default"].legendFontColor
    }
  },
  cutoutPercentage: 50
};
class DoughnutChart extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Doughnut"], {
      data: data,
      options: options,
      height: 100
    });
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

  reactHotLoader.register(data, "data", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Charts\\DoughnutChart.js");
  reactHotLoader.register(options, "options", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Charts\\DoughnutChart.js");
  reactHotLoader.register(DoughnutChart, "DoughnutChart", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Charts\\DoughnutChart.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/js/components/Widgets/SupportRequest.js":
/*!***********************************************************!*\
  !*** ./resources/js/components/Widgets/SupportRequest.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var Components_RctCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Components/RctCard */ "./resources/js/components/RctCard/index.js");
/* harmony import */ var Components_Charts_DoughnutChart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Components/Charts/DoughnutChart */ "./resources/js/components/Charts/DoughnutChart.js");
/* harmony import */ var Util_IntlMessages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Util/IntlMessages */ "./resources/js/util/IntlMessages.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Support Request
 */





 // card component

 //chart component

 // intl messagess



class SupportRequest extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "support-widget-wrap"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text-center py-10"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Charts_DoughnutChart__WEBPACK_IMPORTED_MODULE_7__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "list-unstyled p-0"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "bg-light px-15 py-0 d-flex justify-content-between align-content-center"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "mb-0 content-title"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
      id: "widgets.totalRequest"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
      color: "primary",
      className: "px-4"
    }, "250"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
      color: "default"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "ti-eye"
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "px-15 py-0 d-flex justify-content-between align-content-center"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "mb-0 content-title"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
      id: "widgets.new"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
      color: "warning",
      className: "px-4"
    }, "25"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
      color: "default"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "ti-eye"
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "bg-light px-15 py-0 d-flex justify-content-between align-content-center"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "mb-0 content-title"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
      id: "widgets.pending"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
      color: "info",
      className: "px-4"
    }, "125"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
      color: "default"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "ti-eye"
    })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCard__WEBPACK_IMPORTED_MODULE_6__["RctCardFooter"], {
      customClasses: "d-flex justify-content-between border-0 align-items-center"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "fs-12 mb-0 text-base"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "mr-5 zmdi zmdi-refresh"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
      id: "widgets.updated10Minago"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
      variant: "contained",
      color: "primary",
      className: "btn-xs text-white"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
      id: "button.assignNow"
    }))));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

const _default = SupportRequest;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SupportRequest, "SupportRequest", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\SupportRequest.js");
  reactHotLoader.register(_default, "default", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\SupportRequest.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);