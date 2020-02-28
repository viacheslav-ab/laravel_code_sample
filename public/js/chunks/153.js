(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[153],{

/***/ "./resources/js/components/Widgets/ComposeEmail.js":
/*!*********************************************************!*\
  !*** ./resources/js/components/Widgets/ComposeEmail.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_quill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-quill */ "./node_modules/react-quill/lib/index.js");
/* harmony import */ var react_quill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_quill__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-notifications */ "./node_modules/react-notifications/lib/index.js");
/* harmony import */ var react_notifications__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_notifications__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-quill/dist/quill.snow.css */ "./node_modules/react-quill/dist/quill.snow.css");
/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var Components_RctCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Components/RctCard */ "./resources/js/components/RctCard/index.js");
/* harmony import */ var Util_IntlMessages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Util/IntlMessages */ "./resources/js/util/IntlMessages.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Compose Email Widget
 */




 // rct card box

 // intl messages


const modules = {
  toolbar: [[{
    'header': [1, 2, 3, 4, 5, 6, false]
  }], [{
    'font': []
  }], ['bold', 'italic', 'underline', 'strike', 'blockquote'], [{
    'list': 'ordered'
  }, {
    'list': 'bullet'
  }, {
    'indent': '-1'
  }, {
    'indent': '+1'
  }], ['link', 'image'], ['clean'], [{
    'align': []
  }], ['code-block']]
};
const formats = ['header', 'font', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent', 'link', 'image', 'align', 'code-block'];

class ComposeEmailWidget extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      text: ''
    };
  }

  // on click send
  onClickSend() {
    this.setState({
      composeEmailReload: true
    });
    setTimeout(() => {
      this.setState({
        composeEmailReload: false
      });
      react_notifications__WEBPACK_IMPORTED_MODULE_3__["NotificationManager"].success('Email has been sent successfully!');
    }, 3000);
  } // on click save to draft


  onClickSaveToDraft() {
    this.setState({
      composeEmailReload: true
    });
    setTimeout(() => {
      this.setState({
        composeEmailReload: false
      });
      react_notifications__WEBPACK_IMPORTED_MODULE_3__["NotificationManager"].success('Email Saved!');
    }, 3000);
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], {
      className: "editor"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-wrap row no-gutters"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
      for: "exampleEmail",
      sm: 2
    }, "To :"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      sm: 10
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
      type: "email",
      name: "email",
      id: "exampleEmail"
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-wrap row no-gutters"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
      for: "exampleEmail",
      sm: 2
    }, "Subject :"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      sm: 10
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
      type: "text",
      name: "text",
      id: "exampleText"
    })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_quill__WEBPACK_IMPORTED_MODULE_1___default.a, {
      modules: modules,
      formats: formats,
      placeholder: "Enter Your Message.."
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCard__WEBPACK_IMPORTED_MODULE_5__["RctCardFooter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "button",
      onClick: () => this.onClickSend(),
      className: "btn btn-success btn-sm mr-10"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_6__["default"], {
      id: "widgets.send"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "button",
      onClick: () => this.onClickSaveToDraft(),
      className: "btn btn-secondary btn-sm mr-10"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_6__["default"], {
      id: "widgets.saveAsDrafts"
    }))));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

const _default = ComposeEmailWidget;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(modules, "modules", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\ComposeEmail.js");
  reactHotLoader.register(formats, "formats", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\ComposeEmail.js");
  reactHotLoader.register(ComposeEmailWidget, "ComposeEmailWidget", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\ComposeEmail.js");
  reactHotLoader.register(_default, "default", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\ComposeEmail.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);