(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[148],{

/***/ "./resources/js/components/Widgets/ActivityBoard.js":
/*!**********************************************************!*\
  !*** ./resources/js/components/Widgets/ActivityBoard.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ActivityBoard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/index.js");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-custom-scrollbars */ "./node_modules/react-custom-scrollbars/lib/index.js");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_addons_update__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-addons-update */ "./node_modules/react-addons-update/index.js");
/* harmony import */ var react_addons_update__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_addons_update__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var Api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! Api */ "./resources/js/api/index.js");
/* harmony import */ var Components_RctCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! Components/RctCard */ "./resources/js/components/RctCard/index.js");
/* harmony import */ var Util_IntlMessages__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! Util/IntlMessages */ "./resources/js/util/IntlMessages.js");
/* harmony import */ var Components_RctSectionLoader_RctSectionLoader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! Components/RctSectionLoader/RctSectionLoader */ "./resources/js/components/RctSectionLoader/RctSectionLoader.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Activity Board
 */









 // api

 // card component

 // intl messages

 // rct section loader


class ActivityBoard extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      activityData: null,
      sectionReload: false,
      assetsData: null
    };
  }

  componentDidMount() {
    this.getAssetstData();
    this.getChecklistData();
  } // assets Data


  getAssetstData() {
    this.setState({
      sectionReload: true
    });
    Api__WEBPACK_IMPORTED_MODULE_10__["default"].get('galleryImages.js').then(response => {
      this.setState({
        assetsData: response.data,
        sectionReload: false
      });
    }).catch(error => {
      this.setState({
        assetsData: null,
        sectionReload: false
      });
    });
  } // Checklist Data


  getChecklistData() {
    this.setState({
      sectionReload: true
    });
    Api__WEBPACK_IMPORTED_MODULE_10__["default"].get('ActivityBoardData.js').then(response => {
      this.setState({
        activityData: response.data,
        sectionReload: false
      });
    }).catch(error => {
      this.setState({
        activityData: null,
        sectionReload: false
      });
    });
  } // on handle change task


  handleChange(value, task) {
    let selectedTaskIndex = this.state.activityData.indexOf(task);
    let newState = react_addons_update__WEBPACK_IMPORTED_MODULE_7___default()(this.state, {
      activityData: {
        [selectedTaskIndex]: {
          completed: {
            $set: value
          }
        }
      }
    });
    this.setState({
      sectionReload: true
    });
    let self = this;
    setTimeout(() => {
      self.setState({
        activityData: newState.activityData,
        sectionReload: false
      });
    }, 1500);
  }

  render() {
    const {
      activityData,
      assetsData
    } = this.state;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "activity-board-wrapper"
    }, this.state.sectionReload && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctSectionLoader_RctSectionLoader__WEBPACK_IMPORTED_MODULE_13__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_4__["Scrollbars"], {
      className: "rct-scroll",
      autoHeight: true,
      autoHeightMin: 100,
      autoHeightMax: 600,
      autoHide: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "mb-0 list-unstyled"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "border-bottom"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "activity-heading d-flex p-4 border-bottom"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "mb-0"
    }, "Reactify Redesign")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "activity-description p-4"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "mb-4"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_12__["default"], {
      id: "widgets.description"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "comment-box mb-4"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "small-text"
    }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "mb-4"
    }, "Reactify Redesign Assets"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "mb-0 list-inline attachment-wrap"
    }, assetsData && assetsData.map((data, key) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: key,
      className: "list-inline-item overlay-wrap overflow-hidden rounded"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: data.imageUrl,
      className: "size-120 rounded img-fluid",
      alt: "img"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "overlay-content"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      onClick: e => e.preventDefault(),
      className: "d-flex align-items-center justify-content-center h-100 font-2x text-white"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "zmdi zmdi-download"
    })))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "activity-heading d-flex p-4 border-bottom"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "mb-0"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_12__["default"], {
      id: "widgets.checklist"
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "p-4"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
      color: "primary",
      className: "mb-3",
      value: "80"
    }, "80% Completed"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_8__["default"], {
      className: "p-0"
    }, activityData && activityData.map((task, key) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
      key: key,
      onClick: e => this.handleChange(!task.completed, task),
      button: true,
      className: "p-0"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()('d-flex  align-items-center', {
        'strike': task.completed
      })
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_3__["default"], {
      color: "primary",
      checked: task.completed,
      className: "mr-20 ",
      onChange: e => this.handleChange(e.target.checked, task)
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "mb-0"
    }, task.title))))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCard__WEBPACK_IMPORTED_MODULE_11__["RctCardFooter"], {
      className: "bg-light"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "fs-12 text-base"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "mr-15 zmdi zmdi-refresh"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_12__["default"], {
      id: "widgets.updated10Minago"
    }))));
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

  reactHotLoader.register(ActivityBoard, "ActivityBoard", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\ActivityBoard.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);