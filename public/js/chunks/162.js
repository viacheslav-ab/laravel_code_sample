(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[162],{

/***/ "./resources/js/components/Widgets/NewEmails.js":
/*!******************************************************!*\
  !*** ./resources/js/components/Widgets/NewEmails.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ "./node_modules/@material-ui/core/esm/DialogContentText/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "./node_modules/@material-ui/core/esm/Snackbar/index.js");
/* harmony import */ var react_addons_update__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-addons-update */ "./node_modules/react-addons-update/index.js");
/* harmony import */ var react_addons_update__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_addons_update__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-custom-scrollbars */ "./node_modules/react-custom-scrollbars/lib/index.js");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var Api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! Api */ "./resources/js/api/index.js");
/* harmony import */ var Util_IntlMessages__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! Util/IntlMessages */ "./resources/js/util/IntlMessages.js");
/* harmony import */ var Components_RctSectionLoader_RctSectionLoader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! Components/RctSectionLoader/RctSectionLoader */ "./resources/js/components/RctSectionLoader/RctSectionLoader.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * New Emails Widget
 */














 // api

 // intl messages

 // rct section loader



class NewEmails extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      sectionReload: false,
      newEmails: null,
      openConfirmationAlert: false,
      selectedDeletedEmail: null,
      snackbar: false,
      snackbarMessage: '',
      replyTextBox: false,
      selectedEmail: null,
      viewEmailDialog: false
    };

    this.handleCloseConfirmationAlert = () => {
      this.setState({
        openConfirmationAlert: false,
        viewEmailDialog: false
      });
    };
  }

  componentDidMount() {
    Api__WEBPACK_IMPORTED_MODULE_14__["default"].get('newEmails.js').then(response => {
      this.setState({
        newEmails: response.data
      });
    }).catch(error => {
      console.log(error);
    });
  } // on delete email open confirmation


  onDeleteEmail(email) {
    this.setState({
      openConfirmationAlert: true,
      selectedDeletedEmail: email
    });
  } // close confirmation dailog


  // delete email if confirmation true
  deleteEmail() {
    this.setState({
      openConfirmationAlert: false,
      sectionReload: true
    });
    let emails = this.state.newEmails;
    let deletedEmailIndex = emails.indexOf(this.state.selectedDeletedEmail);
    emails.splice(deletedEmailIndex, 1);
    let self = this;
    setTimeout(() => {
      self.setState({
        sectionReload: false,
        newEmails: emails,
        snackbar: true,
        snackbarMessage: 'Email Deleted Successfully!'
      });
    }, 1500);
  } // show reply text box


  showReplyTextBox(email) {
    let indexOfEmail = this.state.newEmails.indexOf(email);
    this.setState({
      newEmails: react_addons_update__WEBPACK_IMPORTED_MODULE_9___default()(this.state.newEmails, {
        [indexOfEmail]: {
          replyTextBox: {
            $set: true
          }
        }
      })
    });
  } // reply email


  replyEmail(email) {
    let indexOfEmail = this.state.newEmails.indexOf(email);
    this.setState({
      sectionReload: true
    });
    this.setState({
      newEmails: react_addons_update__WEBPACK_IMPORTED_MODULE_9___default()(this.state.newEmails, {
        [indexOfEmail]: {
          replyTextBox: {
            $set: false
          }
        }
      })
    });
    let self = this;
    setTimeout(() => {
      self.setState({
        sectionReload: false,
        snackbar: true,
        snackbarMessage: 'Reply Sent Successfully!'
      });
    }, 1500);
  }
  /**
   * On View Email
   */


  onViewEmal(email) {
    this.setState({
      selectedEmail: email,
      viewEmailDialog: true
    });
  }

  render() {
    const {
      newEmails,
      selectedEmail,
      sectionReload
    } = this.state;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, sectionReload && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctSectionLoader_RctSectionLoader__WEBPACK_IMPORTED_MODULE_16__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_10__["Scrollbars"], {
      className: "rct-scroll",
      autoHeight: true,
      autoHeightMin: 100,
      autoHeightMax: 400,
      autoHide: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "new-mail mb-0 list-unstyled"
    }, newEmails && newEmails.map((email, key) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: key
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex justify-content-between"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
      className: "mb-10"
    }, email.sender_avatar === '' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_11__["default"], {
      className: "mr-15"
    }, email.sender_name.charAt(0)) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
      object: true,
      src: email.sender_avatar,
      alt: "User Profile 1",
      className: "rounded-circle mr-15",
      width: "40",
      height: "40"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
      body: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
      className: "m-0 pt-5 fs-14"
    }, email.sender_name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "fs-12 align-self-center"
    }, email.from))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "small align-self-center"
    }, "19 Mar 2017")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex justify-content-between"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text-justify"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "subject"
    }, email.subject), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "message"
    }, email.message), email.replyTextBox && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "task-foot d-flex justify-content-between"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroupAddon"], {
      addonType: "append"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
      variant: "contained",
      color: "primary",
      className: "text-white",
      onClick: () => this.replyEmail(email)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_15__["default"], {
      id: "button.reply"
    })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "hover-action text-right w-25 align-self-center"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Fab"], {
      variant: "round",
      size: "small",
      color: "primary",
      className: "text-white mr-5 mb-5",
      onClick: () => this.onViewEmal(email)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "zmdi zmdi-eye"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Fab"], {
      variant: "round",
      size: "small",
      className: "btn-danger text-white mr-5 mb-5",
      onClick: () => this.onDeleteEmail(email)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "zmdi zmdi-delete"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Fab"], {
      variant: "round",
      size: "small",
      className: "btn-success text-white mr-5 mb-5",
      onClick: () => this.showReplyTextBox(email)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "zmdi zmdi-mail-reply"
    })))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__["default"], {
      open: this.state.openConfirmationAlert,
      onClose: this.handleCloseConfirmationAlert,
      "aria-labelledby": "alert-dialog-title",
      "aria-describedby": "alert-dialog-description"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7__["default"], {
      id: "alert-dialog-title"
    }, "Are You Sure Want To Delete?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_6__["default"], {
      id: "alert-dialog-description"
    }, "This will delete the email permanently from your emails.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
      variant: "contained",
      className: "btn-danger text-white",
      onClick: this.handleCloseConfirmationAlert
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_15__["default"], {
      id: "button.cancel"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
      variant: "contained",
      color: "primary",
      className: "text-white",
      onClick: () => this.deleteEmail()
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_15__["default"], {
      id: "button.delete"
    })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__["default"], {
      open: this.state.viewEmailDialog,
      onClose: this.handleCloseConfirmationAlert,
      "aria-labelledby": "alert-dialog-title",
      "aria-describedby": "alert-dialog-description"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5__["default"], null, selectedEmail !== null && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex justify-content-between"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
      className: "mb-10"
    }, selectedEmail.sender_avatar === '' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_11__["default"], {
      className: "mr-15"
    }, selectedEmail.sender_name.charAt(0)) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
      object: true,
      src: selectedEmail.sender_avatar,
      alt: "User Profile 1",
      className: "rounded-circle mr-15",
      width: "40",
      height: "40"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
      body: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
      className: "m-0 pt-5 fs-14"
    }, selectedEmail.sender_name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "fs-12 align-self-center"
    }, selectedEmail.from))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "small align-self-center"
    }, "19 Mar 2017")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex justify-content-between"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text-justify"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "subject"
    }, selectedEmail.subject), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "message"
    }, selectedEmail.message)))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_8__["default"], {
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'center'
      },
      open: this.state.snackbar,
      onClose: () => this.setState({
        snackbar: false
      }),
      autoHideDuration: 2000,
      snackbarcontentprops: {
        'aria-describedby': 'message-id'
      },
      message: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        id: "message-id"
      }, this.state.snackbarMessage)
    }));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

const _default = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["withRouter"])(NewEmails);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(NewEmails, "NewEmails", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\NewEmails.js");
  reactHotLoader.register(_default, "default", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\NewEmails.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);