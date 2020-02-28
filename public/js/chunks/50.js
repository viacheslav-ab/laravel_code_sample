(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[50],{

/***/ "./resources/js/components/DeleteConfirmationDialog/DeleteConfirmationDialog.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/DeleteConfirmationDialog/DeleteConfirmationDialog.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ "./node_modules/@material-ui/core/esm/DialogContentText/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Delete Confirmation Dialog
 */








class DeleteConfirmationDialog extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      open: false
    };
  }

  // open dialog
  open() {
    this.setState({
      open: true
    });
  } // close dialog


  close() {
    this.setState({
      open: false
    });
  }

  render() {
    const {
      title,
      message,
      onConfirm
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_1__["default"], {
      open: this.state.open,
      onClose: () => this.close(),
      "aria-labelledby": "alert-dialog-title",
      "aria-describedby": "alert-dialog-description"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_5__["default"], {
      id: "alert-dialog-title"
    }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "alert-dialog-description"
    }, message)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onClick: () => this.close(),
      className: "btn-danger text-white"
    }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onClick: onConfirm,
      className: "btn-primary text-white",
      autoFocus: true
    }, "Yes")));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

const _default = DeleteConfirmationDialog;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(DeleteConfirmationDialog, "DeleteConfirmationDialog", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\DeleteConfirmationDialog\\DeleteConfirmationDialog.js");
  reactHotLoader.register(_default, "default", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\DeleteConfirmationDialog\\DeleteConfirmationDialog.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/js/components/Widgets/NewCustomers.js":
/*!*********************************************************!*\
  !*** ./resources/js/components/Widgets/NewCustomers.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_addons_update__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-addons-update */ "./node_modules/react-addons-update/index.js");
/* harmony import */ var react_addons_update__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_addons_update__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "./node_modules/@material-ui/core/esm/Snackbar/index.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-custom-scrollbars */ "./node_modules/react-custom-scrollbars/lib/index.js");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var Api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Api */ "./resources/js/api/index.js");
/* harmony import */ var Util_IntlMessages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Util/IntlMessages */ "./resources/js/util/IntlMessages.js");
/* harmony import */ var Components_RctSectionLoader_RctSectionLoader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! Components/RctSectionLoader/RctSectionLoader */ "./resources/js/components/RctSectionLoader/RctSectionLoader.js");
/* harmony import */ var Components_DeleteConfirmationDialog_DeleteConfirmationDialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! Components/DeleteConfirmationDialog/DeleteConfirmationDialog */ "./resources/js/components/DeleteConfirmationDialog/DeleteConfirmationDialog.js");
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
 * New Customers Widget
 */






 // api

 // intl messages

 // rct section loader




class NewCustomers extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      sectionReload: false,
      newCustomers: null,
      selectedDeletedCustomer: null,
      editCustomerModal: false,
      editCustomer: null,
      snackbar: false,
      successMessage: '',
      addNewCustomerForm: false,
      addNewCustomerDetails: {
        customer_email: '',
        customer_name: '',
        id: '',
        photo_url: ''
      }
    };

    this.toggleEditCustomerModal = () => {
      this.setState({
        editCustomerModal: !this.state.editCustomerModal
      });
    };
  }

  componentDidMount() {
    this.getNewCustomers();
  } // get new customers


  getNewCustomers() {
    this.setState({
      sectionReload: true
    });
    Api__WEBPACK_IMPORTED_MODULE_7__["default"].get('newCustomers.js').then(response => {
      this.setState({
        newCustomers: response.data,
        sectionReload: false
      });
    }).catch(error => {
      this.setState({
        newCustomers: null,
        sectionReload: false
      });
    });
  } // on delete customer


  onDeleteCustomer(customer) {
    this.refs.deleteConfirmationDialog.open();
    this.setState({
      selectedDeletedCustomer: customer
    });
  } // delete customer


  deleteCustomer() {
    this.refs.deleteConfirmationDialog.close();
    this.setState({
      sectionReload: true
    });
    let newCustomers = this.state.newCustomers;
    let index = newCustomers.indexOf(this.state.selectedDeletedCustomer);
    setTimeout(() => {
      newCustomers.splice(index, 1);
      this.setState({
        newCustomers,
        snackbar: true,
        successMessage: 'Customer Deleted Successfully',
        sectionReload: false
      });
    }, 1500);
  } // edit customer


  onEditCustomer(customer) {
    this.setState({
      editCustomerModal: true,
      editCustomer: customer,
      addNewCustomerForm: false
    });
  } // toggle edit customer modal


  // submit customer edit form
  onSubmitCustomerEditDetailForm() {
    const {
      editCustomer,
      newCustomers
    } = this.state;

    if (editCustomer.customer_name !== '' && editCustomer.customer_email !== '') {
      this.setState({
        editCustomerModal: false,
        sectionReload: true
      });
      let indexOfCustomer;

      for (let i = 0; i < newCustomers.length; i++) {
        const customer = newCustomers[i];

        if (customer.customer_id === editCustomer.customer_id) {
          indexOfCustomer = i;
        }
      }

      let self = this;
      setTimeout(() => {
        self.setState({
          sectionReload: false,
          snackbar: true,
          successMessage: 'Customer Updated Success'
        });
        self.setState({
          newCustomers: react_addons_update__WEBPACK_IMPORTED_MODULE_1___default()(newCustomers, {
            [indexOfCustomer]: {
              $set: editCustomer
            }
          })
        });
      }, 1500);
    }
  } // on change customer details


  onChangeCustomerDetails(key, value) {
    this.setState({
      editCustomer: _objectSpread({}, this.state.editCustomer, {
        [key]: value
      })
    });
  } // add new customer


  addNewCustomer() {
    this.setState({
      editCustomerModal: true,
      addNewCustomerForm: true,
      editCustomer: null,
      addNewCustomerDetails: {
        customer_email: '',
        customer_name: '',
        id: '',
        photo_url: ''
      }
    });
  } // on change customer add new form value


  onChangeCustomerAddNewForm(key, value) {
    this.setState({
      addNewCustomerDetails: _objectSpread({}, this.state.addNewCustomerDetails, {
        [key]: value
      })
    });
  } // on submit add new customer form


  onSubmitAddNewCustomerForm() {
    const {
      addNewCustomerDetails
    } = this.state;

    if (addNewCustomerDetails.customer_name !== '' && addNewCustomerDetails.customer_email !== '') {
      this.setState({
        editCustomerModal: false,
        sectionReload: true
      });
      let newCustomer = addNewCustomerDetails;
      newCustomer.id = new Date().getTime(), newCustomer.photo_url = '';
      let newCustomers = this.state.newCustomers;
      let self = this;
      setTimeout(() => {
        newCustomers.push(newCustomer);
        self.setState({
          newCustomers,
          sectionReload: false,
          snackbar: true,
          successMessage: 'Customer Added Successfully'
        });
      }, 1500);
    }
  }

  render() {
    const {
      newCustomers,
      sectionReload,
      editCustomerModal,
      addNewCustomerForm,
      editCustomer,
      snackbar,
      successMessage,
      addNewCustomerDetails
    } = this.state;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, sectionReload && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctSectionLoader_RctSectionLoader__WEBPACK_IMPORTED_MODULE_9__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_6__["Scrollbars"], {
      className: "rct-scroll",
      autoHeight: true,
      autoHeightMin: 100,
      autoHeightMax: 290,
      autoHide: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "list-group new-customer-list"
    }, newCustomers && newCustomers.map((customer, key) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "list-group-item d-flex justify-content-between",
      key: key
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex align-items-start"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "media"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "media-left mr-15"
    }, customer.photo_url === '' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_5__["default"], null, customer.customer_name.charAt(0)) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: customer.photo_url,
      alt: "project logo",
      className: "media-object rounded-circle",
      width: "40",
      height: "40"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "media-body"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "d-block fs-14"
    }, customer.customer_name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "d-block fs-12 text-muted"
    }, customer.customer_email)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex align-items-end"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "button",
      className: "text-primary",
      onClick: () => this.onEditCustomer(customer)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "zmdi zmdi-edit"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "button",
      className: "text-danger",
      onClick: () => this.onDeleteCustomer(customer)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "zmdi zmdi-close"
    }))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex p-3"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
      variant: "contained",
      color: "primary",
      className: "text-white",
      onClick: () => this.addNewCustomer()
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
      id: "widgets.addNew"
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_DeleteConfirmationDialog_DeleteConfirmationDialog__WEBPACK_IMPORTED_MODULE_10__["default"], {
      ref: "deleteConfirmationDialog",
      title: "Are You Sure Want To Delete?",
      message: "Are You Sure Want To Delete Permanently This Customer.",
      onConfirm: () => this.deleteCustomer()
    }), editCustomerModal && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
      isOpen: editCustomerModal,
      toggle: this.toggleEditCustomerModal
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ModalHeader"], {
      toggle: this.toggleEditCustomerModal
    }, addNewCustomerForm ? 'Add New Customer' : 'Edit Customer'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ModalBody"], null, addNewCustomerForm ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
      for: "customerName"
    }, "Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
      type: "text",
      name: "name",
      id: "customerName",
      value: addNewCustomerDetails.customer_name,
      onChange: e => this.onChangeCustomerAddNewForm('customer_name', e.target.value)
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
      for: "customerEmail"
    }, "Email"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
      type: "email",
      name: "email",
      id: "customerEmail",
      value: addNewCustomerDetails.customer_email,
      onChange: e => this.onChangeCustomerAddNewForm('customer_email', e.target.value)
    }))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
      for: "customerId"
    }, "Id"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
      type: "text",
      name: "name",
      id: "customerId",
      defaultValue: editCustomer.customer_id,
      readOnly: true
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
      for: "customerName"
    }, "Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
      type: "text",
      name: "name",
      id: "customerName",
      value: editCustomer.customer_name,
      onChange: e => this.onChangeCustomerDetails('customer_name', e.target.value)
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
      for: "customerEmail"
    }, "Email"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
      type: "email",
      name: "email",
      id: "customerEmail",
      value: editCustomer.customer_email,
      onChange: e => this.onChangeCustomerDetails('customer_email', e.target.value)
    })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ModalFooter"], null, addNewCustomerForm ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
      variant: "contained",
      color: "primary",
      className: "text-white",
      onClick: () => this.onSubmitAddNewCustomerForm()
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
      id: "button.add"
    })), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
      variant: "contained",
      className: "btn-danger text-white",
      onClick: this.toggleEditCustomerModal
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
      id: "button.cancel"
    }))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
      variant: "contained",
      color: "primary",
      className: "text-white",
      onClick: () => this.onSubmitCustomerEditDetailForm()
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
      id: "button.update"
    })), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
      variant: "contained",
      className: "btn-danger text-white",
      onClick: this.toggleEditCustomerModal
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
      id: "button.cancel"
    }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'center'
      },
      open: snackbar,
      onClose: () => this.setState({
        snackbar: false
      }),
      autoHideDuration: 2000,
      message: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        id: "message-id"
      }, successMessage)
    }));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

const _default = NewCustomers;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(NewCustomers, "NewCustomers", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\NewCustomers.js");
  reactHotLoader.register(_default, "default", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\NewCustomers.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);