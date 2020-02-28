(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./resources/js/assets/img/logo-a.png":
/*!********************************************!*\
  !*** ./resources/js/assets/img/logo-a.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/logo-a.png?7d0b7b640d61e3d0928c5da34334be4d";

/***/ }),

/***/ "./resources/js/assets/img/logo-b.png":
/*!********************************************!*\
  !*** ./resources/js/assets/img/logo-b.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/logo-b.png?31ca0ff1fddeb561e5dbb68ec7da8425";

/***/ }),

/***/ "./resources/js/assets/img/logo-c.png":
/*!********************************************!*\
  !*** ./resources/js/assets/img/logo-c.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/logo-c.png?2aee4efb141eb057bf7bbfb1f4543093";

/***/ }),

/***/ "./resources/js/assets/img/logo-d.png":
/*!********************************************!*\
  !*** ./resources/js/assets/img/logo-d.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/logo-d.png?0235204689bd0f319d35555865016ff8";

/***/ }),

/***/ "./resources/js/components/Widgets/ProjectStatusChart.js":
/*!***************************************************************!*\
  !*** ./resources/js/components/Widgets/ProjectStatusChart.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectStatusChart; });
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
 * Project Status chart
 */

/* amChart Imports */




_amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_3__["default"]); // rct card box


class ProjectStatusChart extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    let chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["create"]("chartdiv", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["XYChart"]);
    chart.paddingRight = 0;
    let data = [];
    let visits = 10;

    for (let i = 1; i < 366; i++) {
      visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
      data.push({
        date: new Date(2018, 0, i),
        name: "name" + i,
        value: visits
      });
    }

    chart.data = [{
      "name": "Project 1",
      "points": 35654,
      "color": chart.colors.next(),
      "bullet": __webpack_require__(/*! Assets/img/logo-a.png */ "./resources/js/assets/img/logo-a.png")
    }, {
      "name": "Project 2",
      "points": 65456,
      "color": chart.colors.next(),
      "bullet": __webpack_require__(/*! Assets/img/logo-b.png */ "./resources/js/assets/img/logo-b.png")
    }, {
      "name": "Project 3",
      "points": 45724,
      "color": chart.colors.next(),
      "bullet": __webpack_require__(/*! Assets/img/logo-c.png */ "./resources/js/assets/img/logo-c.png")
    }, {
      "name": "Project 4",
      "points": 13654,
      "color": chart.colors.next(),
      "bullet": __webpack_require__(/*! Assets/img/logo-d.png */ "./resources/js/assets/img/logo-d.png")
    }]; // Create axes

    let categoryAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["CategoryAxis"]());
    categoryAxis.dataFields.category = "name";
    categoryAxis.renderer.grid.template.disabled = true;
    categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.renderer.inside = true;
    categoryAxis.renderer.labels.template.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]("#fff");
    categoryAxis.renderer.labels.template.fontSize = 20;
    let valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["ValueAxis"]());
    valueAxis.renderer.grid.template.strokeDasharray = "4,4";
    valueAxis.renderer.labels.template.disabled = true;
    valueAxis.min = 0; // Do not crop bullets

    chart.maskBullets = false; // Remove padding

    chart.paddingBottom = 0; // Create series

    let series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["ColumnSeries"]());
    series.dataFields.valueY = "points";
    series.dataFields.categoryX = "name";
    series.columns.template.propertyFields.fill = "color";
    series.columns.template.propertyFields.stroke = "color";
    series.columns.template.column.cornerRadiusTopLeft = 15;
    series.columns.template.column.cornerRadiusTopRight = 15;
    series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/b]"; // Add bullets

    let bullet = series.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["Bullet"]());
    let image = bullet.createChild(_amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["Image"]);
    image.horizontalCenter = "middle";
    image.verticalCenter = "bottom";
    image.dy = 20;
    image.y = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["percent"](100);
    image.propertyFields.href = "bullet";
    image.tooltipText = series.columns.template.tooltipText;
    image.propertyFields.fill = "color";
    image.filters.push(new _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["DropShadowFilter"]());
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCard__WEBPACK_IMPORTED_MODULE_4__["RctCardContent"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "chartdiv",
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

  reactHotLoader.register(ProjectStatusChart, "ProjectStatusChart", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\ProjectStatusChart.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);