(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[156],{

/***/ "./resources/js/components/Widgets/DiscoverPeoples.js":
/*!************************************************************!*\
  !*** ./resources/js/components/Widgets/DiscoverPeoples.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var Api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Api */ "./resources/js/api/index.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Discover Peoples
 */



 // api



class DiscoverPeoplesWidget extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      people: null
    };
  }

  componentDidMount() {
    this.getDiscoverPeoples();
  } // get discover peoples


  getDiscoverPeoples() {
    Api__WEBPACK_IMPORTED_MODULE_4__["default"].get('discoverPeoples.js').then(response => {
      this.setState({
        people: response.data
      });
    }).catch(error => {// error handling
    });
  }
  /**
   * Function to follow and unfolow people
   * @param {object} data
   */


  togglePeopleFollow(key) {
    let people = this.state.people;
    people[key].status = !people[key].status;
    this.setState({
      people
    });
  }

  render() {
    const {
      people
    } = this.state;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "discover-list-wrap"
    }, people && people.map((data, key) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      button: true,
      key: key,
      onClick: () => this.togglePeopleFollow(key)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex justify-content-between w-100"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex align-items-center"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "media"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "media-left mr-20"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: data.photo_url,
      alt: "user profile",
      className: "rounded-circle img-fluid",
      width: "55",
      height: "55"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "media-body pt-15"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "mb-0 text-muted"
    }, data.name)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex align-items-center"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('badge badge-pill badge-lg', {
        'badge-info': data.status,
        'badge-dark': !data.status
      })
    }, data.status ? 'Following' : 'Follow'))))));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

const _default = DiscoverPeoplesWidget;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(DiscoverPeoplesWidget, "DiscoverPeoplesWidget", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\DiscoverPeoples.js");
  reactHotLoader.register(_default, "default", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\DiscoverPeoples.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);