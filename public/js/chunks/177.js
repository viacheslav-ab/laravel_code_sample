(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[177],{

/***/ "./resources/js/components/Widgets/ProjectTaskManagement.js":
/*!******************************************************************!*\
  !*** ./resources/js/components/Widgets/ProjectTaskManagement.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectTaskManagement; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-custom-scrollbars */ "./node_modules/react-custom-scrollbars/lib/index.js");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "./node_modules/@material-ui/core/esm/Tooltip/index.js");
/* harmony import */ var Routes_widgets_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! Routes/widgets/data */ "./resources/js/routes/widgets/data.js");
/* harmony import */ var Components_RctSectionLoader_RctSectionLoader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! Components/RctSectionLoader/RctSectionLoader */ "./resources/js/components/RctSectionLoader/RctSectionLoader.js");
/* harmony import */ var Components_RctCard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! Components/RctCard */ "./resources/js/components/RctCard/index.js");
/* harmony import */ var Helpers_helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! Helpers/helpers */ "./resources/js/helpers/helpers.js");
/* harmony import */ var Util_IntlMessages__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! Util/IntlMessages */ "./resources/js/util/IntlMessages.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Project Task Management
 */









 //Data File

 // rct section loader

 // card component

 //Helper

 // intl messages


class ProjectTaskManagement extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      sectionReload: false,
      projectTaskData: Routes_widgets_data__WEBPACK_IMPORTED_MODULE_10__["projectTaskData"],
      projectData: Routes_widgets_data__WEBPACK_IMPORTED_MODULE_10__["projectTaskData"],
      collapse: false,
      selectedProject: null,
      newTask: {
        taskTitle: "",
        taskDate: null,
        status: "",
        color: "",
        completed: false,
        team: null
      }
    };
  } //Close New Task


  closeForm(key) {
    this.setState({
      selectedProject: key,
      collapse: false
    });
  } //Open New Task


  openForm(key) {
    this.setState({
      selectedProject: key,
      collapse: true
    });
  } // on change schedule


  onChangeDueDate(e) {
    let timestamp = Object(Helpers_helpers__WEBPACK_IMPORTED_MODULE_13__["convertDateToTimeStamp"])(e.target.value);
    this.setState({
      newTask: _objectSpread({}, this.state.newTask, {
        taskDate: timestamp
      })
    });
  } //Add New Task


  addNewTask(key) {
    const {
      taskTitle,
      taskDate
    } = this.state.newTask;

    if (taskTitle !== '' && taskDate) {
      let newTask = {
        title: taskTitle,
        date: taskDate,
        status: "Planning",
        color: "primary",
        team: [{
          id: 1,
          name: "Lucile",
          avatar: "https://reactify.theironnetwork.org/data/images/user-1.jpg"
        }]
      };
      this.setState({
        sectionReload: true,
        collapse: false
      });
      let self = this;
      setTimeout(() => {
        let projects = this.state.projectData;
        projects[key].push(newTask);
        self.setState({
          projectData: projects,
          collapse: false,
          sectionReload: false,
          newTask: {
            taskTitle: "",
            taskDate: null
          }
        });
      }, 1500);
    }
  }

  render() {
    const {
      projectData,
      collapse,
      selectedProject
    } = this.state;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "task-management-wrapper"
    }, this.state.sectionReload && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctSectionLoader_RctSectionLoader__WEBPACK_IMPORTED_MODULE_11__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_7__["Scrollbars"], {
      className: "rct-scroll",
      autoHeight: true,
      autoHeightMin: 100,
      autoHeightMax: 600,
      autoHide: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "mb-0"
    }, Object.keys(projectData).map((project, key) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: key
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "project-heading d-flex justify-content-between align-items-center border-bottom"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "fw-semi-bold mb-0"
    }, project), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
      onClick: () => this.openForm(project)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "material-icons"
    }, "add_circle"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "p-0"
    }, projectData && projectData[project].map((data, subKey) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
      button: true,
      className: "justify-content-between align-items-center border-bottom post-item",
      key: subKey
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "task-title pr-3"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "mb-5"
    }, data.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "fs-12 text-base"
    }, Object(Helpers_helpers__WEBPACK_IMPORTED_MODULE_13__["getTheDate"])(data.date, 'DD MMM YYYY'))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "w-40 d-flex justify-content-between"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Badge"], {
      color: data.color
    }, data.status)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "team-avatar"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "m-0 list-inline"
    }, data.team.map((member, nestedSubkey) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "list-inline-item",
      key: nestedSubkey
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_9__["default"], {
      id: "tooltip-top",
      title: member.name,
      placement: "top"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_6__["default"], {
      src: member.avatar,
      alt: "avatar",
      className: "rounded-circle"
    })))))))))), selectedProject === project && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Collapse"], {
      isOpen: collapse
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex p-4 form-wrap border-bottom justify-content-between"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mr-10"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__["default"], {
      id: "taskName",
      onChange: e => this.setState({
        newTask: _objectSpread({}, this.state.newTask, {
          taskTitle: e.target.value
        })
      }),
      value: this.state.newTask.taskTitle,
      label: "Task Name",
      type: "text",
      fullWidth: true,
      className: "mx-5 mb-30"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__["default"], {
      id: "date",
      label: "Due Date",
      type: "date",
      InputLabelProps: {
        shrink: true
      },
      fullWidth: true,
      onChange: e => this.onChangeDueDate(e),
      className: "mx-5"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "align-self-end d-flex flex-column text-center"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
      variant: "contained",
      color: "primary",
      className: "mb-30 text-white  btn-xs",
      onClick: () => this.addNewTask(project)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_14__["default"], {
      id: "button.add"
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
      variant: "contained",
      onClick: () => this.closeForm(project),
      className: "btn-xs btn-danger text-white"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_14__["default"], {
      id: "button.cancel"
    })))))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCard__WEBPACK_IMPORTED_MODULE_12__["RctCardFooter"], {
      customClasses: " d-flex justify-content-between align-items-center"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex w-40 align-items-center justify-content-between"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "fs-12 w-50 text-base"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_14__["default"], {
      id: "widgets.selectProject"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "app-selectbox-sm"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
      className: "mb-0"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
      type: "select",
      className: "fs-12",
      name: "select",
      id: "projectSelect"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      disabled: true
    }, "Select Project"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "all"
    }, "all"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "BookingKoala"
    }, "BookingKoala"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Reactify"
    }, "Reactify"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Adminify"
    }, "Adminify"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "fs-12 text-base"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "mr-15 zmdi zmdi-refresh"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_14__["default"], {
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

  reactHotLoader.register(ProjectTaskManagement, "ProjectTaskManagement", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\ProjectTaskManagement.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);