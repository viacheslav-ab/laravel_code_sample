(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[83],{

/***/ "./resources/js/components/Widgets/ProjectManagement.js":
/*!**************************************************************!*\
  !*** ./resources/js/components/Widgets/ProjectManagement.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectManagement; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-custom-scrollbars */ "./node_modules/react-custom-scrollbars/lib/index.js");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "./node_modules/@material-ui/core/esm/Tooltip/index.js");
/* harmony import */ var Api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Api */ "./resources/js/api/index.js");
/* harmony import */ var Components_RctCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Components/RctCard */ "./resources/js/components/RctCard/index.js");
/* harmony import */ var Components_RctSectionLoader_RctSectionLoader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Components/RctSectionLoader/RctSectionLoader */ "./resources/js/components/RctSectionLoader/RctSectionLoader.js");
/* harmony import */ var Helpers_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! Helpers/helpers */ "./resources/js/helpers/helpers.js");
/* harmony import */ var Util_IntlMessages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! Util/IntlMessages */ "./resources/js/util/IntlMessages.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Project Management Widget
 */





 // api

 // card component

 // rct section loader

 //Helper

 // intl messages



class ProjectItem extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false
    };
  } //On collapse project description


  OnCollapseProject() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  render() {
    const {
      data
    } = this.props;
    const {
      collapse
    } = this.state;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, data.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, Object(Helpers_helpers__WEBPACK_IMPORTED_MODULE_9__["getTheDate"])(data.date, 'DD MMM YYYY')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      color: data.progress.color,
      className: "mt-10 w-90",
      value: data.progress.value
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "mb-0 fs-12 text-muted"
    }, data.status)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "d-flex justify-content-between"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "team-avatar w-100"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "mb-0 list-inline"
    }, data.team.map((member, subkey) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "list-inline-item",
      key: subkey
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_5__["default"], {
      id: "tooltip-top",
      title: member.name,
      placement: "top"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      alt: "user 4",
      src: member.avatar,
      alt: "avatar",
      className: "rounded-circle"
    })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onClick: () => this.OnCollapseProject()
    }, collapse ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "material-icons"
    }, "remove_circle") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "material-icons"
    }, "add_circle")))), collapse && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      colSpan: "4"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Collapse"], {
      isOpen: collapse
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "p-10"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
      id: "widgets.description"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, data.description))))));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

class ProjectManagement extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      projectListData: null,
      sectionReload: false
    };
  }

  componentDidMount() {
    this.getProjectData();
  } // Project Data


  getProjectData() {
    this.setState({
      sectionReload: true
    });
    Api__WEBPACK_IMPORTED_MODULE_6__["default"].get('ProjectData.js').then(response => {
      this.setState({
        projectListData: response.data,
        sectionReload: false
      });
    }).catch(error => {
      this.setState({
        projectListData: null,
        sectionReload: false
      });
    });
  }

  render() {
    const {
      projectListData
    } = this.state;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "project-managemnet-wrapper"
    }, this.state.sectionReload && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctSectionLoader_RctSectionLoader__WEBPACK_IMPORTED_MODULE_8__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_4__["Scrollbars"], {
      className: "rct-scroll",
      autoHeight: true,
      autoHeightMin: 100,
      autoHeightMax: 620,
      autoHide: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Table"], {
      hover: true,
      className: "mb-0",
      responsive: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
      id: "components.projectName"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
      id: "widgets.deadline"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
      id: "widgets.status"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
      id: "widgets.team"
    })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, projectListData && projectListData.map((data, key) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProjectItem, {
      key: key,
      data: data
    }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCard__WEBPACK_IMPORTED_MODULE_7__["RctCardFooter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "fs-12 text-base"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "mr-15 zmdi zmdi-refresh"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
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

  reactHotLoader.register(ProjectItem, "ProjectItem", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\ProjectManagement.js");
  reactHotLoader.register(ProjectManagement, "ProjectManagement", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\ProjectManagement.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);