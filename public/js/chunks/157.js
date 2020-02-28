(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[157],{

/***/ "./resources/js/components/Widgets/EmployeePayroll.js":
/*!************************************************************!*\
  !*** ./resources/js/components/Widgets/EmployeePayroll.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_addons_update__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-addons-update */ "./node_modules/react-addons-update/index.js");
/* harmony import */ var react_addons_update__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_addons_update__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var Api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Api */ "./resources/js/api/index.js");
/* harmony import */ var Components_RctSectionLoader_RctSectionLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Components/RctSectionLoader/RctSectionLoader */ "./resources/js/components/RctSectionLoader/RctSectionLoader.js");
/* harmony import */ var Util_IntlMessages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Util/IntlMessages */ "./resources/js/util/IntlMessages.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Employ Payroll
 */


 // api

 // rct section loader

 // intl messages



class EmployPayroll extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      employPayrollReload: false,
      employeePayroll: null
    };
  }

  componentDidMount() {
    this.getEmployeePayrolls();
  } // get employee payrols


  getEmployeePayrolls() {
    Api__WEBPACK_IMPORTED_MODULE_3__["default"].get('employeePayrols.js').then(response => {
      this.setState({
        employeePayroll: response.data
      });
    }).catch(error => {
      console.log(error);
    });
  } // delete employee payroll


  deleteEmployePayroll(e, employee) {
    e.preventDefault();
    this.setState({
      employPayrollReload: true
    });
    let index = this.state.employeePayroll.indexOf(employee);
    setTimeout(() => this.setState(prevState => ({
      employeePayroll: react_addons_update__WEBPACK_IMPORTED_MODULE_1___default()(prevState.employeePayroll, {
        $splice: [[index, 1]]
      }),
      employPayrollReload: false
    })), 1500);
  } // on check box click


  onCheckBoxClick(e, employee) {
    e.preventDefault();
    let index = this.state.employeePayroll.indexOf(employee);
    this.setState({
      employeePayroll: react_addons_update__WEBPACK_IMPORTED_MODULE_1___default()(this.state.employeePayroll, {
        [index]: {
          status: {
            $set: 1
          }
        }
      })
    });
  }

  render() {
    const {
      employeePayroll,
      employPayrollReload
    } = this.state;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, employPayrollReload && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctSectionLoader_RctSectionLoader__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "table-responsive"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
      className: "table table-hover table-middle mb-0"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Designation"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Salary"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Status"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Action"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, employeePayroll && employeePayroll.map((employee, key) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: key
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "media"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "media-left media-middle mr-15"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: employee.employeeAvatar,
      alt: "user profile",
      className: "media-object rounded-circle",
      width: "35",
      height: "35"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "media-body pt-10"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
      className: "m-0 fw-bold text-dark"
    }, employee.employeeName)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, employee.designation), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "$", employee.salary), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, employee.status === 1 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Badge"], {
      color: "primary"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_5__["default"], {
      id: "widgets.done"
    })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Badge"], {
      color: "warning"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_5__["default"], {
      id: "widgets.pending"
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "table-action"
    }, employee.status === 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      onClick: e => this.onCheckBoxClick(e, employee)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "ti-check"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      onClick: e => this.deleteEmployePayroll(e, employee)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "ti-close"
    })))))))));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

const _default = EmployPayroll;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(EmployPayroll, "EmployPayroll", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\EmployeePayroll.js");
  reactHotLoader.register(_default, "default", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\EmployeePayroll.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);