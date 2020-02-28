(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[92],{

/***/ "./resources/js/components/Widgets/SalesDoughnutChart.js":
/*!***************************************************************!*\
  !*** ./resources/js/components/Widgets/SalesDoughnutChart.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SalesDoughnutChart; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "./node_modules/@amcharts/amcharts4/core.js");
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "./node_modules/@amcharts/amcharts4/charts.js");
/* harmony import */ var _amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @amcharts/amcharts4/themes/animated */ "./node_modules/@amcharts/amcharts4/themes/animated.js");
/* harmony import */ var Components_RctCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Components/RctCard */ "./resources/js/components/RctCard/index.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Sales doughnut chart
*/

/* amChart Imports */




_amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_3__["default"]); // rct card box


class SalesDoughnutChart extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["create"]("chartsales", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["PieChart"]); // Add and configure Series

    let pieSeries = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["PieSeries"]());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country"; // Let's cut a hole in our Pie chart the size of 30% the radius

    chart.innerRadius = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["percent"](30); // Put a thick white border around each Slice

    pieSeries.slices.template.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;
    pieSeries.slices.template // change the cursor on hover to make it apparent the object can be interacted with
    .cursorOverStyle = [{
      "property": "cursor",
      "value": "pointer"
    }];
    pieSeries.alignLabels = false;
    pieSeries.labels.template.bent = true;
    pieSeries.labels.template.radius = 3;
    pieSeries.labels.template.padding(0, 0, 0, 0);
    pieSeries.ticks.template.disabled = true; // Create a base filter effect (as if it's not there) for the hover to return to

    let shadow = pieSeries.slices.template.filters.push(new _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["DropShadowFilter"]());
    shadow.opacity = 0; // Create hover state

    let hoverState = pieSeries.slices.template.states.getKey("hover"); // normally we have to create the hover state, in this case it already exists
    // Slightly shift the shadow and make it more prominent on hover

    let hoverShadow = hoverState.filters.push(new _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["DropShadowFilter"]());
    hoverShadow.opacity = 0.7;
    hoverShadow.blur = 5; // Add a legend

    chart.legend = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["Legend"]();
    chart.data = [{
      "country": "Product 1",
      "litres": 351.9
    }, {
      "country": "Product 2",
      "litres": 165.8
    }, {
      "country": "Product 3",
      "litres": 139.9
    }, {
      "country": "Product 4",
      "litres": 128.3
    }];
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCard__WEBPACK_IMPORTED_MODULE_4__["RctCardContent"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "chartsales",
      style: {
        width: "100%",
        height: "500px"
      }
    }));
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

  reactHotLoader.register(SalesDoughnutChart, "SalesDoughnutChart", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\SalesDoughnutChart.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);