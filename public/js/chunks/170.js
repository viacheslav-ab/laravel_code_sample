(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[170],{

/***/ "./resources/js/components/Widgets/OurLocations.js":
/*!*********************************************************!*\
  !*** ./resources/js/components/Widgets/OurLocations.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-swipeable-views */ "./node_modules/react-swipeable-views/lib/index.js");
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_views__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Tabs */ "./node_modules/@material-ui/core/esm/Tabs/index.js");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Tab */ "./node_modules/@material-ui/core/esm/Tab/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Our Loactions Widget
 */







const ourlocationsData = [{
  locationId: 1,
  sales: '+ 01 123 456 7890, info@sales.com',
  support: 'info@support.com',
  phone: '12002342345656',
  fax: '+011234567890',
  address: 'E - 51m, Industrial area, Phase 2, Mohali, Punjab, India.'
}, {
  locationId: 2,
  sales: '+91123456789, info@example.com',
  support: 'support@info.com',
  phone: '+91123456789',
  fax: '+123456789564',
  address: ''
}, {
  locationId: 3,
  sales: '',
  support: 'example@info.com',
  phone: '+39209424892346',
  fax: '+56837653878756',
  address: 'E - 51m, Industrial area, Phase 2, Mohali, Punjab, India.'
}];
const locations = [{
  id: 1,
  name: 'USA'
}, {
  id: 2,
  name: 'India'
}, {
  id: 3,
  name: 'UK'
}];

function TabContainer({
  children
}) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    component: "div"
  }, children);
}

const ShowLocation = ({
  data
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_5__["default"], {
  className: "p-0 border-top"
}, data.sales !== '' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
  className: "d-flex align-items-center border-bottom py-15"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: "w-25"
}, "Sales"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  className: "w-75 mb-0"
}, data.sales)), data.support !== '' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
  className: "d-flex align-items-center border-bottom py-15"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: "w-25"
}, "Support"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: `mailto: ${data.support}`,
  className: "d-block w-75 text-dark"
}, data.support)), data.phone !== '' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
  className: "d-flex align-items-center border-bottom py-15 "
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: "w-25"
}, "Phone"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: `tel:${data.phone}`,
  className: "w-75 d-block text-dark"
}, data.phone)), data.fax !== '' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
  className: "d-flex align-items-center border-bottom py-15"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: "w-25"
}, "Fax"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  className: "w-75 mb-0"
}, data.fax)), data.address !== '' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
  className: "d-flex align-items-center py-15"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: "w-25"
}, "Address"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "w-75"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("address", {
  className: "mb-0"
}, data.address), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "#",
  onClick: e => e.preventDefault(),
  className: "text-danger d-block"
}, "Get Direction"))));

class OurLocations extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      value: 0
    };

    this.handleChange = (event, value) => {
      this.setState({
        value
      });
    };

    this.handleChangeIndex = index => {
      this.setState({
        value: index
      });
    };
  }

  getCountryName(locationId) {
    for (const location of locations) {
      if (location.id === locationId) {
        return location.name;
      }
    }
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "location-wrap"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_2__["default"], {
      value: this.state.value,
      onChange: this.handleChange,
      indicatorColor: "primary",
      textColor: "primary",
      variant: "fullWidth",
      variant: "scrollable",
      scrollButtons: "off"
    }, ourlocationsData.map((location, key) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: this.getCountryName(location.locationId),
      key: key
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_swipeable_views__WEBPACK_IMPORTED_MODULE_1___default.a, {
      index: this.state.value,
      onChangeIndex: this.handleChangeIndex
    }, ourlocationsData.map((location, key) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabContainer, {
      key: key
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ShowLocation, {
      data: location
    })))));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

const _default = OurLocations;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ourlocationsData, "ourlocationsData", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\OurLocations.js");
  reactHotLoader.register(locations, "locations", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\OurLocations.js");
  reactHotLoader.register(TabContainer, "TabContainer", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\OurLocations.js");
  reactHotLoader.register(ShowLocation, "ShowLocation", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\OurLocations.js");
  reactHotLoader.register(OurLocations, "OurLocations", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\OurLocations.js");
  reactHotLoader.register(_default, "default", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\OurLocations.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);