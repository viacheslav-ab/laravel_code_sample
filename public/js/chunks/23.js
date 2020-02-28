(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./resources/js/assets/img/device-1.jpg":
/*!**********************************************!*\
  !*** ./resources/js/assets/img/device-1.jpg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/device-1.jpg?efb63154de5c9fd949e609f396d25889";

/***/ }),

/***/ "./resources/js/assets/img/device-2.jpg":
/*!**********************************************!*\
  !*** ./resources/js/assets/img/device-2.jpg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/device-2.jpg?129c1b8204203e8dbd7fbfcef1f519fd";

/***/ }),

/***/ "./resources/js/assets/img/device-3.jpg":
/*!**********************************************!*\
  !*** ./resources/js/assets/img/device-3.jpg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/device-3.jpg?ff127b233f0b439f6f6353e5d42dff1a";

/***/ }),

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

/***/ }),

/***/ "./resources/js/routes/widgets/data.js":
/*!*********************************************!*\
  !*** ./resources/js/routes/widgets/data.js ***!
  \*********************************************/
/*! exports provided: dailySales, spaceUsed, trafficChannel, topSellingProducts, siteVisitors, visitorsData, salesData, ordersData, emailStatisticsData, dataUsed, productStats, emailStatisticsV2Data, totalRevenue, onlineVisitorsData, trafficSources, totalEarnsV2, trafficStatus, totalEarns, totalSales, netProfit, taxStats, expenses, projectTaskData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dailySales", function() { return dailySales; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spaceUsed", function() { return spaceUsed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trafficChannel", function() { return trafficChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "topSellingProducts", function() { return topSellingProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siteVisitors", function() { return siteVisitors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visitorsData", function() { return visitorsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "salesData", function() { return salesData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ordersData", function() { return ordersData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailStatisticsData", function() { return emailStatisticsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataUsed", function() { return dataUsed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productStats", function() { return productStats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailStatisticsV2Data", function() { return emailStatisticsV2Data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "totalRevenue", function() { return totalRevenue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onlineVisitorsData", function() { return onlineVisitorsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trafficSources", function() { return trafficSources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "totalEarnsV2", function() { return totalEarnsV2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trafficStatus", function() { return trafficStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "totalEarns", function() { return totalEarns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "totalSales", function() { return totalSales; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "netProfit", function() { return netProfit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taxStats", function() { return taxStats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expenses", function() { return expenses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectTaskData", function() { return projectTaskData; });
/* harmony import */ var Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Constants/chart-config */ "./resources/js/constants/chart-config.js");
/* harmony import */ var Helpers_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Helpers/helpers */ "./resources/js/helpers/helpers.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// widgets data
 // helpers

 // Daily Sales

const dailySales = {
  label: 'Daily Sales',
  chartdata: [100, 200, 125, 250, 200, 150, 200],
  labels: ['9', '10', '11', '12', '13', '14', '15']
}; // Space Used

const spaceUsed = {
  chartData: {
    labels: ['Space Used', 'Space Left'],
    datasets: [{
      data: [275, 100],
      backgroundColor: [Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.primary, Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.info],
      hoverBackgroundColor: [Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.primary, Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.info]
    }]
  }
}; //Traffic Channel

const trafficChannel = {
  label: 'Direct User',
  labels: ['Direct User', 'Referral', 'Facebook', 'Google', 'Instagram'],
  chartdata: [8.5, 6.75, 5.5, 7, 4.75]
}; // top selling products

const topSellingProducts = {
  totalSales: '12,550',
  earning: '$35,000',
  products: [{
    id: 1,
    productName: 'HD Classic Gold Headphone',
    price: '300',
    productImage: __webpack_require__(/*! Assets/img/device-1.jpg */ "./resources/js/assets/img/device-1.jpg")
  }, {
    id: 2,
    productName: 'HD Classic Gold Headphone',
    price: '300',
    productImage: __webpack_require__(/*! Assets/img/device-2.jpg */ "./resources/js/assets/img/device-2.jpg")
  }, {
    id: 3,
    productName: 'HD Classic Gold Headphone',
    price: '300',
    productImage: __webpack_require__(/*! Assets/img/device-3.jpg */ "./resources/js/assets/img/device-3.jpg")
  }]
}; // site visitors

const siteVisitors = [{
  name: 'Page A',
  uv: 4000,
  pv: 2400
}, {
  name: 'Page B',
  uv: 3000,
  pv: 1398
}, {
  name: 'Page C',
  uv: 2000,
  pv: 9800
}, {
  name: 'Page D',
  uv: 2780,
  pv: 3908
}, {
  name: 'Page E',
  uv: 1890,
  pv: 4800
}, {
  name: 'Page F',
  uv: 2390,
  pv: 3800
}, {
  name: 'Page G',
  uv: 3490,
  pv: 4300
}]; // visitors data

const visitorsData = {
  chartData: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    data: [600, 500, 650, 470, 520, 700, 500, 650, 580, 500, 650, 700]
  },
  monthly: 7233,
  weekly: 5529
}; // sales data

const salesData = {
  chartData: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    data: [600, 500, 650, 470, 520, 700, 500, 650, 580, 500, 650, 700]
  },
  today: 6544,
  totalRevenue: 9125
}; // orders data

const ordersData = {
  chartData: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    data: [600, 500, 650, 470, 520, 700, 500, 650, 580, 500, 650, 700]
  },
  today: 5652,
  totalRevenue: 8520
}; // email statistics Data

const emailStatisticsData = {
  labels: ['Opened', 'Bounced', 'Spam', 'Unsent'],
  datasets: [{
    label: 'Series A',
    backgroundColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.white,
    borderColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.primary,
    borderWidth: 0,
    hoverBackgroundColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.white,
    hoverBorderColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.white,
    data: [53, 15, 30, 7]
  }]
}; // data use

const dataUsed = {
  labels: ['0.00', '1.0', '2.0', '3.0', '4.0', '5.0', '6.0', '7.0', '8.0', '9.0', '10.0', '11.0', '12.0', '13.0', '14.0', '15.0'],
  datasets: [{
    label: 'Series A',
    backgroundColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.white,
    borderColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.white,
    borderWidth: 4,
    hoverBackgroundColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.white,
    hoverBorderColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.white,
    data: [65, 59, 80, 81, 56, 55, 40, 45, 35, 45, 65, 70, 75, 80, 30, 45]
  }],
  totalUsed: '200 GB'
}; // product stats

const productStats = {
  labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],
  datasets: [{
    label: 'Series A',
    fill: false,
    tension: 0,
    backgroundColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.primary,
    borderColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.primary,
    borderWidth: 4,
    hoverBackgroundColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.primary,
    hoverBorderColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.primary,
    data: [2500, 900, 400, 1100, 1250, 900, 2100, 3400, 1950, 2000, 700, 740]
  }, {
    label: 'Series B',
    fill: false,
    tension: 0,
    backgroundColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.info,
    borderColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.info,
    borderWidth: 4,
    hoverBackgroundColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.info,
    hoverBorderColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.info,
    data: [3800, 3300, 2300, 3500, 2800, 3200, 3100, 4100, 3500, 3000, 2500, 2300]
  }],
  customLegends: [{
    name: 'Admin Theme',
    class: 'badge-primary'
  }, {
    name: 'Wordpress Theme',
    class: 'badge-info'
  }]
}; // email statistics

const emailStatisticsV2Data = {
  chartData: {
    open: {
      data: [80, 180, 165, 220, 130, 255, 245, 325],
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug']
    },
    bounce: {
      data: [275, 215, 235, 120, 190, 145, 170, 90],
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug']
    },
    unsubscribe: {
      data: [275, 215, 235, 120, 190, 145, 170, 90],
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug']
    }
  }
}; // total revenue

const totalRevenue = {
  chartData: {
    labels: ['Last Week', 'Target'],
    datasets: [{
      data: [100, 260],
      backgroundColor: [Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.info, Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.primary],
      hoverBackgroundColor: [Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.info, Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.primary]
    }]
  },
  target: '$566',
  lastWeek: '$100'
}; // online visitors data

const onlineVisitorsData = {
  markers: [{
    latLng: [41.90, 12.45],
    name: 'Vatican City'
  }, {
    latLng: [43.73, 7.41],
    name: 'Monaco'
  }, {
    latLng: [-0.52, 166.93],
    name: 'Nauru'
  }, {
    latLng: [-8.51, 179.21],
    name: 'Tuvalu'
  }, {
    latLng: [43.93, 12.46],
    name: 'San Marino'
  }, {
    latLng: [47.14, 9.52],
    name: 'Liechtenstein'
  }, {
    latLng: [7.11, 171.06],
    name: 'Marshall Islands'
  }, {
    latLng: [17.3, -62.73],
    name: 'Saint Kitts and Nevis'
  }, {
    latLng: [3.2, 73.22],
    name: 'Maldives'
  }, {
    latLng: [35.88, 14.5],
    name: 'Malta'
  }, {
    latLng: [12.05, -61.75],
    name: 'Grenada'
  }, {
    latLng: [13.16, -61.23],
    name: 'Saint Vincent and the Grenadines'
  }, {
    latLng: [13.16, -59.55],
    name: 'Barbados'
  }, {
    latLng: [17.11, -61.85],
    name: 'Antigua and Barbuda'
  }, {
    latLng: [-4.61, 55.45],
    name: 'Seychelles'
  }, {
    latLng: [7.35, 134.46],
    name: 'Palau'
  }, {
    latLng: [42.5, 1.51],
    name: 'Andorra'
  }, {
    latLng: [14.01, -60.98],
    name: 'Saint Lucia'
  }, {
    latLng: [6.91, 158.18],
    name: 'Federated States of Micronesia'
  }, {
    latLng: [1.3, 103.8],
    name: 'Singapore'
  }, {
    latLng: [1.46, 173.03],
    name: 'Kiribati'
  }, {
    latLng: [-21.13, -175.2],
    name: 'Tonga'
  }, {
    latLng: [15.3, -61.38],
    name: 'Dominica'
  }, {
    latLng: [-20.2, 57.5],
    name: 'Mauritius'
  }, {
    latLng: [26.02, 50.55],
    name: 'Bahrain'
  }, {
    latLng: [0.33, 6.73],
    name: 'São Tomé and Príncipe'
  }],
  totalVisitors: '1655+'
}; // traffic sources

const trafficSources = {
  totalActiveUsers: '359,234',
  chartData: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    data: [40, 30, 85, 50, 90, 45, 55, 45, 80, 72, 78, 63]
  }
}; // total earns v2

const totalEarnsV2 = {
  chartData: {
    labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
    data: [10, 120, 50, 150, 120, 70, 140, 150, 110, 130, 180, 85],
    label: 'Earns'
  },
  legend: {
    name: 'Total Earns',
    class: 'badge-primary'
  }
}; // traffic Status

const trafficStatus = {
  chartLabels: ['0.00', '1.0', '2.0', '3.0', '4.0', '5.0', '6.0'],
  chartDatasets: [{
    barPercentage: 20.0,
    categoryPercentage: 0.03,
    label: 'Series A',
    backgroundColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.primary,
    borderColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.primary,
    borderWidth: 1,
    hoverBackgroundColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.primary,
    hoverBorderColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.primary,
    data: [65, 59, 80, 81, 56, 55, 40]
  }, {
    barPercentage: 20.0,
    categoryPercentage: 0.05,
    label: 'Series B',
    backgroundColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.default,
    borderColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.default,
    borderWidth: 1,
    hoverBackgroundColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.default,
    hoverBorderColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.default,
    data: [45, 39, 40, 60, 35, 25, 60]
  }],
  onlineSources: '3500',
  today: '17,020',
  lastMonth: '20.30%'
}; // total earns

const totalEarns = {
  labels: ['Jan 1', 'Jan 7', 'Jan 14', 'Jan 21', 'Jan 28', 'Feb 4', 'Feb 11', 'Feb 18', 'Feb 25', 'Feb 28', 'Mar 2', 'Mar 6'],
  datasets: [{
    label: 'Sales',
    fill: true,
    lineTension: 0,
    fillOpacity: 0.5,
    backgroundColor: Object(Helpers_helpers__WEBPACK_IMPORTED_MODULE_1__["hexToRgbA"])(Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.primary, 0.8),
    borderColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.primary,
    pointBorderColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.white,
    pointBackgroundColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.white,
    pointBorderWidth: 0,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: Object(Helpers_helpers__WEBPACK_IMPORTED_MODULE_1__["hexToRgbA"])(Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.primary, 1),
    pointHoverBorderColor: Object(Helpers_helpers__WEBPACK_IMPORTED_MODULE_1__["hexToRgbA"])(Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.primary, 1),
    pointHoverBorderWidth: 8,
    pointRadius: 0,
    pointHitRadius: 10,
    data: [250, 350, 270, 420, 380, 220, 400, 550, 480, 190, 390, 380]
  }, {
    label: 'Visitors',
    fill: true,
    lineTension: 0,
    fillOpacity: 0.5,
    backgroundColor: Object(Helpers_helpers__WEBPACK_IMPORTED_MODULE_1__["hexToRgbA"])(Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.warning, 0.4),
    borderColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.warning,
    pointBorderColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.white,
    pointBackgroundColor: Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.white,
    pointBorderWidth: 0,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: Object(Helpers_helpers__WEBPACK_IMPORTED_MODULE_1__["hexToRgbA"])(Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.warning, 1),
    pointHoverBorderColor: Object(Helpers_helpers__WEBPACK_IMPORTED_MODULE_1__["hexToRgbA"])(Constants_chart_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.warning, 1),
    pointHoverBorderWidth: 8,
    pointRadius: 0,
    pointHitRadius: 10,
    data: [600, 400, 500, 350, 650, 630, 450, 480, 650, 500, 530, 550]
  }]
}; // total sales

const totalSales = {
  label: 'Sales',
  chartdata: [250, 310, 150, 420, 250, 450],
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June']
}; // net profit

const netProfit = {
  label: 'Net Profit',
  chartdata: [250, 310, 150, 420, 250, 450],
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June']
}; // tax stats

const taxStats = {
  label: 'Tax',
  chartdata: [250, 310, 150, 420, 250, 450],
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June']
}; // expenses stats

const expenses = {
  label: 'Expenses',
  chartdata: [250, 310, 150, 420, 250, 450],
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June']
}; //Project Task Management

const projectTaskData = {
  'BookingKoala': [{
    id: 1,
    title: "Wireframing for dashboard sidebar and topbar",
    date: 1528368468,
    status: "Planning",
    color: "primary",
    team: [{
      id: 1,
      name: "Maggie",
      avatar: "https://reactify.theironnetwork.org/data/images/user-1.jpg"
    }, {
      id: 2,
      name: "Lisa",
      avatar: "https://reactify.theironnetwork.org/data/images/user-2.jpg"
    }, {
      id: 3,
      name: "Lucile",
      avatar: "https://reactify.theironnetwork.org/data/images/user-3.jpg"
    }]
  }, {
    id: 2,
    title: "Wireframing for dashboard sidebar and topbar",
    date: 1529346600,
    status: "In Progress",
    color: "success",
    team: [{
      id: 1,
      name: "Maggie",
      avatar: "https://reactify.theironnetwork.org/data/images/user-1.jpg"
    }, {
      id: 2,
      name: "Lisa",
      avatar: "https://reactify.theironnetwork.org/data/images/user-2.jpg"
    }, {
      id: 3,
      name: "Lucile",
      avatar: "https://reactify.theironnetwork.org/data/images/user-3.jpg"
    }]
  }],
  'Reactify': [{
    id: 1,
    title: "Create video placeholder for website",
    date: 1529951400,
    status: "In Progress",
    color: "success",
    team: [{
      id: 1,
      name: "Maggie",
      avatar: "https://reactify.theironnetwork.org/data/images/user-1.jpg"
    }, {
      id: 2,
      name: "Lisa",
      avatar: "https://reactify.theironnetwork.org/data/images/user-2.jpg"
    }, {
      id: 3,
      name: "Lucile",
      avatar: "https://reactify.theironnetwork.org/data/images/user-3.jpg"
    }]
  }, {
    id: 2,
    title: "Social media ads banner for launching",
    date: 1531161000,
    status: "On Hold",
    color: "success",
    team: [{
      id: 1,
      name: "Maggie",
      avatar: "https://reactify.theironnetwork.org/data/images/user-1.jpg"
    }, {
      id: 2,
      name: "Lisa",
      avatar: "https://reactify.theironnetwork.org/data/images/user-2.jpg"
    }, {
      id: 3,
      name: "Lucile",
      avatar: "https://reactify.theironnetwork.org/data/images/user-3.jpg"
    }]
  }],
  'Adminify': [{
    id: 1,
    title: "Create new design for frontend website",
    date: 1530729000,
    status: "Completed",
    color: "danger",
    team: [{
      id: 1,
      name: "Maggie",
      avatar: "https://reactify.theironnetwork.org/data/images/user-1.jpg"
    }, {
      id: 2,
      name: "Lisa",
      avatar: "https://reactify.theironnetwork.org/data/images/user-2.jpg"
    }, {
      id: 3,
      name: "Lucile",
      avatar: "https://reactify.theironnetwork.org/data/images/user-3.jpg"
    }]
  }, {
    id: 2,
    title: "Update new logo everywhere",
    date: 1532716200,
    status: "Completed",
    color: "danger",
    team: [{
      id: 1,
      name: "Maggie",
      avatar: "https://reactify.theironnetwork.org/data/images/user-1.jpg"
    }, {
      id: 2,
      name: "Lisa",
      avatar: "https://reactify.theironnetwork.org/data/images/user-2.jpg"
    }, {
      id: 3,
      name: "Lucile",
      avatar: "https://reactify.theironnetwork.org/data/images/user-3.jpg"
    }]
  }]
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(dailySales, "dailySales", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\routes\\widgets\\data.js");
  reactHotLoader.register(spaceUsed, "spaceUsed", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\routes\\widgets\\data.js");
  reactHotLoader.register(trafficChannel, "trafficChannel", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\routes\\widgets\\data.js");
  reactHotLoader.register(topSellingProducts, "topSellingProducts", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\routes\\widgets\\data.js");
  reactHotLoader.register(siteVisitors, "siteVisitors", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\routes\\widgets\\data.js");
  reactHotLoader.register(visitorsData, "visitorsData", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\routes\\widgets\\data.js");
  reactHotLoader.register(salesData, "salesData", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\routes\\widgets\\data.js");
  reactHotLoader.register(ordersData, "ordersData", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\routes\\widgets\\data.js");
  reactHotLoader.register(emailStatisticsData, "emailStatisticsData", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\routes\\widgets\\data.js");
  reactHotLoader.register(dataUsed, "dataUsed", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\routes\\widgets\\data.js");
  reactHotLoader.register(productStats, "productStats", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\routes\\widgets\\data.js");
  reactHotLoader.register(emailStatisticsV2Data, "emailStatisticsV2Data", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\routes\\widgets\\data.js");
  reactHotLoader.register(totalRevenue, "totalRevenue", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\routes\\widgets\\data.js");
  reactHotLoader.register(onlineVisitorsData, "onlineVisitorsData", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\routes\\widgets\\data.js");
  reactHotLoader.register(trafficSources, "trafficSources", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\routes\\widgets\\data.js");
  reactHotLoader.register(totalEarnsV2, "totalEarnsV2", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\routes\\widgets\\data.js");
  reactHotLoader.register(trafficStatus, "trafficStatus", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\routes\\widgets\\data.js");
  reactHotLoader.register(totalEarns, "totalEarns", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\routes\\widgets\\data.js");
  reactHotLoader.register(totalSales, "totalSales", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\routes\\widgets\\data.js");
  reactHotLoader.register(netProfit, "netProfit", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\routes\\widgets\\data.js");
  reactHotLoader.register(taxStats, "taxStats", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\routes\\widgets\\data.js");
  reactHotLoader.register(expenses, "expenses", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\routes\\widgets\\data.js");
  reactHotLoader.register(projectTaskData, "projectTaskData", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\routes\\widgets\\data.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);