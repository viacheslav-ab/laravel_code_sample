(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[142],{

/***/ "./resources/js/routes/crm/projects/component/ProjectListing.js":
/*!**********************************************************************!*\
  !*** ./resources/js/routes/crm/projects/component/ProjectListing.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-table */ "./node_modules/react-table/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var Components_RctCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Components/RctCard */ "./resources/js/components/RctCard/index.js");
/* harmony import */ var Helpers_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Helpers/helpers */ "./resources/js/helpers/helpers.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Project Listing layout
 */

/* eslint-disable */



 // rct card box

 // helpers



class ProjectListing extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      selected: null,
      detail: null
    };
  }

  // get file id
  getFile(Id) {
    this.setState({
      detail: Id
    });
  }

  render() {
    const {
      data
    } = this.props;
    const {
      detail
    } = this.state;

    if (detail !== null) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
        to: `/${Object(Helpers_helpers__WEBPACK_IMPORTED_MODULE_5__["getAppLayout"])(location)}/crm/Project-detail/${detail}`
      });
    }

    const columns = [{
      maxWidth: 75,
      Header: 'id',
      accessor: 'id'
    }, {
      maxWidth: 220,
      Header: 'projectName',
      accessor: 'title'
    }, {
      Header: 'budget',
      accessor: 'budget'
    }, {
      Header: 'duration',
      accessor: 'duration'
    }, {
      Header: 'client',
      accessor: 'client'
    }, {
      Header: 'team',
      accessor: 'team_image',
      Cell: props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, props.value.map((image, index) => {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          key: index,
          src: __webpack_require__("./resources/js/assets/avatars sync recursive ^\\.\\/.*$")(`./${image}`),
          alt: "team",
          className: "rounded-circle",
          width: "20",
          height: "20"
        });
      }))
    }, {
      Header: 'status',
      accessor: 'status',
      Cell: props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, props.value === true ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Badge"], {
        color: "primary"
      }, "Active") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Badge"], {
        color: "danger"
      }, "InActive"))
    }, {
      Header: 'deadline',
      accessor: 'deadline'
    }];
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCard__WEBPACK_IMPORTED_MODULE_4__["RctCard"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCard__WEBPACK_IMPORTED_MODULE_4__["RctCardContent"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_table__WEBPACK_IMPORTED_MODULE_2__["default"], {
      data: data,
      columns: columns,
      minRows: 10,
      getTrProps: (state, rowInfo) => {
        if (rowInfo.row) {
          return {
            onClick: e => {
              this.setState({
                selected: rowInfo.index
              });
              this.getFile(rowInfo.original.id);
            }
          };
        }
      }
    })));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

const _default = ProjectListing;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ProjectListing, "ProjectListing", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\routes\\crm\\projects\\component\\ProjectListing.js");
  reactHotLoader.register(_default, "default", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\routes\\crm\\projects\\component\\ProjectListing.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/js/routes/crm/projects/index.js":
/*!***************************************************!*\
  !*** ./resources/js/routes/crm/projects/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Projects; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var Components_PageTitleBar_PageTitleBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Components/PageTitleBar/PageTitleBar */ "./resources/js/components/PageTitleBar/PageTitleBar.js");
/* harmony import */ var Components_RctCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Components/RctCard */ "./resources/js/components/RctCard/index.js");
/* harmony import */ var Util_IntlMessages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Util/IntlMessages */ "./resources/js/util/IntlMessages.js");
/* harmony import */ var Components_RctCollapsibleCard_RctCollapsibleCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Components/RctCollapsibleCard/RctCollapsibleCard */ "./resources/js/components/RctCollapsibleCard/RctCollapsibleCard.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./data */ "./resources/js/routes/crm/projects/data.js");
/* harmony import */ var Helpers_helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! Helpers/helpers */ "./resources/js/helpers/helpers.js");
/* harmony import */ var _component_ProjectListing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/ProjectListing */ "./resources/js/routes/crm/projects/component/ProjectListing.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Projects Page
*/

/* eslint-disable */




 // page title bar

 // rct card box

 // intl messages

 // rct collapsible card

 // widgets data

 // helpers

 //component


class Projects extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      gridlayout: true
    };

    this.listLayout = () => {
      this.setState({
        gridlayout: false
      });
    };

    this.gridLayout = () => {
      this.setState({
        gridlayout: true
      });
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "projects-wrapper"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Projects"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
      name: "description",
      content: "Reactify Blank Page"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_PageTitleBar_PageTitleBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_7__["default"], {
        id: "sidebar.projects"
      }),
      match: this.props.match
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "search-bar-wrap"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCard__WEBPACK_IMPORTED_MODULE_6__["RctCard"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCard__WEBPACK_IMPORTED_MODULE_6__["RctCardContent"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-sm-12 col-md-3 col-lg-3 align-items-center mb-10 mb-sm-0"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "mb-0 text-capitalize"
    }, "search")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-sm-12 col-md-9 col-lg-9"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-sm-flex"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "search-bar"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
      id: "standard-with-placeholder",
      placeholder: "Search Projects"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
      variant: "contained",
      color: "primary",
      className: "mx-sm-15"
    }, "Search")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "add-project-wrap"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
      variant: "contained",
      color: "primary"
    }, "Add", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "material-icons pl-10"
    }, "add"))))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex justify-content-between align-items-center mt-15 mb-30"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "text-capitalize mb-0"
    }, this.state.gridlayout === true ? 'project grid' : 'project list'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "projects-icon"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "btn-icon",
      onClick: () => this.gridLayout()
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "material-icons"
    }, "apps")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "btn-icon",
      onClick: () => this.listLayout()
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "material-icons"
    }, "list")))), this.state.gridlayout && this.state.gridlayout === true ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, _data__WEBPACK_IMPORTED_MODULE_9__["projectData"].map((dataItem, index) => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCollapsibleCard_RctCollapsibleCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
        key: index,
        customClasses: "",
        colClasses: "col-sm-12 col-md-6 col-lg-4 w-xs-full",
        heading: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: `/${Object(Helpers_helpers__WEBPACK_IMPORTED_MODULE_10__["getAppLayout"])(location)}/crm/Project-detail/${dataItem.id}`
        }, dataItem.title),
        collapsible: true,
        reloadable: true,
        closeable: true,
        fullBlock: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCard__WEBPACK_IMPORTED_MODULE_6__["RctCardContent"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "desc-wrap"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Description :"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, dataItem.desc)), dataItem.team_image && dataItem.team_image !== null ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "project-team mb-15"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        className: "mb-15"
      }, "Team Members : "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "team-img-wrap"
      }, dataItem.team_image.map((image, index) => {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          key: index,
          src: __webpack_require__("./resources/js/assets/avatars sync recursive ^\\.\\/.*$")(`./${image}`),
          alt: "team",
          className: "mr-2",
          width: "30",
          height: "30"
        });
      }))) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "deadline-info mrgn-b-md"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Deadline : "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, dataItem.deadline)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress-wrap mb-15"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "d-flex justify-content-between align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        className: "mb-0"
      }, "Progress : ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-primary"
      }, dataItem.progress, "%"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Progress"], {
        color: "primary",
        className: "my-15 progress-xs",
        value: dataItem.progress
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-right"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: `/${Object(Helpers_helpers__WEBPACK_IMPORTED_MODULE_10__["getAppLayout"])(location)}/crm/Project-detail/${dataItem.id}`,
        className: "text-primary text-capitalize fs-14"
      }, "learn more"))));
    })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-sm-12 col-md-12 col-lg-12"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_ProjectListing__WEBPACK_IMPORTED_MODULE_11__["default"], {
      data: _data__WEBPACK_IMPORTED_MODULE_9__["projectData"]
    })))));
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

  reactHotLoader.register(Projects, "Projects", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\routes\\crm\\projects\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);