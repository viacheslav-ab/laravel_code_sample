(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[204],{

/***/ "./resources/js/routes/crm/project-detail/index.js":
/*!*********************************************************!*\
  !*** ./resources/js/routes/crm/project-detail/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectDetail; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var Components_PageTitleBar_PageTitleBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Components/PageTitleBar/PageTitleBar */ "./resources/js/components/PageTitleBar/PageTitleBar.js");
/* harmony import */ var Components_RctCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Components/RctCard */ "./resources/js/components/RctCard/index.js");
/* harmony import */ var Util_IntlMessages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Util/IntlMessages */ "./resources/js/util/IntlMessages.js");
/* harmony import */ var Components_Widgets__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Components/Widgets */ "./resources/js/components/Widgets/index.js");
/* harmony import */ var _projects_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../projects/data */ "./resources/js/routes/crm/projects/data.js");
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-content-loader */ "./node_modules/react-content-loader/dist/react-content-loader.es.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Project detail Page
 */

/* eslint-disable */




 // page title bar

 // rct card box

 // intl messages

 // widgets

 // widgets data



class ProjectDetail extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      projectData: _projects_data__WEBPACK_IMPORTED_MODULE_9__["projectData"],
      productId: parseInt(this.props.match.params.id),
      currentDataItem: null
    };
  }

  componentDidMount() {
    this.getProductItem();
  } // get product items


  getProductItem() {
    let {
      productId,
      projectData
    } = this.state;

    if (projectData && projectData.length > 0) {
      for (let Item of projectData) {
        if (Item.id === productId) {
          this.setState({
            currentDataItem: Item
          });
        }
      }
    }
  } //convert html


  createMarkup(value) {
    return {
      __html: value
    };
  }

  render() {
    const {
      currentDataItem
    } = this.state;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, this.state.currentDataItem !== null ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "project-detail-wrapper"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Project Detail"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
      name: "description",
      content: "Reactify Blank Page"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_PageTitleBar_PageTitleBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_7__["default"], {
        id: "sidebar.projectDetail"
      }),
      match: this.props.match
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-sm-12 col-md-12 col-lg-8"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "project-title mb-30"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, currentDataItem.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCard__WEBPACK_IMPORTED_MODULE_6__["RctCard"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCard__WEBPACK_IMPORTED_MODULE_6__["RctCardContent"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "basic-info"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      dangerouslySetInnerHTML: this.createMarkup(currentDataItem.full_desc)
    })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCard__WEBPACK_IMPORTED_MODULE_6__["RctCard"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "pb-20"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "p-20"
    }, "Files Uploaded"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "list-unstyled p-0"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "border-bottom pl-30 d-flex justify-content-start align-content-center"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "material-icons"
    }, "picture_as_pdf")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "pl-15"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
      className: "fw-normal mb-5"
    }, "AX_Report.pdf "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "mb-0 fs-12"
    }, "12/May/2019"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "border-bottom pl-30 d-flex justify-content-start align-content-center"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "material-icons"
    }, "image")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "pl-15"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
      className: "fw-normal mb-5"
    }, "Blueprint.jpg "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "mb-0 fs-12"
    }, "08/May/2019")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Widgets__WEBPACK_IMPORTED_MODULE_8__["ProjectStatsChart"], {
      data: currentDataItem.stats_data,
      labels: currentDataItem.stats_labels
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-sm-12 col-md-12 col-lg-4"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCard__WEBPACK_IMPORTED_MODULE_6__["RctCard"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCard__WEBPACK_IMPORTED_MODULE_6__["RctCardContent"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "list-unstyled p-0 detail-list-wrap"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "border-bottom d-flex justify-content-between align-content-center"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "fw-light text-capitalize fs-14 pr-10"
    }, "budget :"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "fw-semi-bold text-capitalize fs-14"
    }, currentDataItem.budget)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "border-bottom d-flex justify-content-between align-content-center"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "fw-light text-capitalize fs-14 pr-10"
    }, "Client :"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "fw-semi-bold text-capitalize fs-14"
    }, currentDataItem.client)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "border-bottom d-flex justify-content-between align-content-center"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "fw-light text-capitalize fs-14 pr-10"
    }, "Department :"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "fw-semi-bold text-capitalize fs-14"
    }, currentDataItem.dept)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "border-bottom d-flex justify-content-between align-content-center"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "fw-light text-capitalize fs-14 pr-10"
    }, "Duration :"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "fw-semi-bold text-capitalize fs-14"
    }, currentDataItem.duration)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "border-bottom d-flex justify-content-between align-content-center"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "fw-light text-capitalize fs-14 pr-10"
    }, "Project Manager :"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "fw-semi-bold text-capitalize fs-14"
    }, currentDataItem.project_manager)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "border-bottom d-flex justify-content-between align-content-center"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "fw-light text-capitalize fs-14 pr-10"
    }, "Team :"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "fw-semi-bold text-capitalize fs-14"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "team-img-wrap"
    }, currentDataItem.team_image.map((image, index) => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        key: index,
        src: __webpack_require__("./resources/js/assets/avatars sync recursive ^\\.\\/.*$")(`./${image}`),
        alt: "team",
        className: "ml-5",
        width: "30",
        height: "30"
      });
    })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "border-bottom d-flex justify-content-between align-content-center"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "fw-light text-capitalize fs-14 pr-10"
    }, "Status :"), currentDataItem.status === true ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "fw-semi-bold text-capitalize fs-14 text-success"
    }, "Active") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "fw-semi-bold text-capitalize fs-14 text-danger"
    }, "InActive")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "border-bottom d-flex justify-content-between align-content-center"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "fw-light text-capitalize fs-14 pr-10"
    }, "Deadline :"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "fw-semi-bold text-capitalize fs-14"
    }, currentDataItem.deadline))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCard__WEBPACK_IMPORTED_MODULE_6__["RctCard"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCard__WEBPACK_IMPORTED_MODULE_6__["RctCardContent"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "progress-wrap mb-15"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
      className: "mb-0"
    }, "Progress : ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "text-primary"
    }, currentDataItem.progress, "%")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Progress"], {
      color: "primary",
      className: "my-15 progress-xs",
      value: currentDataItem.progress
    })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Widgets__WEBPACK_IMPORTED_MODULE_8__["ProjectGallery"], {
      slides: currentDataItem.project_gallery
    }))))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_content_loader__WEBPACK_IMPORTED_MODULE_10__["default"], null));
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

  reactHotLoader.register(ProjectDetail, "ProjectDetail", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\routes\\crm\\project-detail\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);