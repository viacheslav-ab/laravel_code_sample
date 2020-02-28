(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[152],{

/***/ "./resources/js/components/Widgets/Comments.js":
/*!*****************************************************!*\
  !*** ./resources/js/components/Widgets/Comments.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Comments; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-custom-scrollbars */ "./node_modules/react-custom-scrollbars/lib/index.js");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var Api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Api */ "./resources/js/api/index.js");
/* harmony import */ var Util_IntlMessages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Util/IntlMessages */ "./resources/js/util/IntlMessages.js");
/* harmony import */ var Components_RctCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Components/RctCard */ "./resources/js/components/RctCard/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Comments Component
 */




 // Api

 // intl messages

 // card component



class Comments extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      comments: null
    };
  }

  componentDidMount() {
    this.getComments();
  } // get comments


  getComments() {
    Api__WEBPACK_IMPORTED_MODULE_5__["default"].get('comments.js').then(response => {
      this.setState({
        comments: response.data
      });
    }).catch(error => {// error hanlding
    });
  }

  render() {
    const {
      comments
    } = this.state;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_1__["Scrollbars"], {
      className: "rct-scroll",
      autoHeight: true,
      autoHeightMin: 100,
      autoHeightMax: 424,
      autoHide: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "list-group aqua-ripple p-0"
    }, comments && comments.map(comment => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "d-flex px-20 py-3 align-items-start",
      key: comment.id,
      button: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "avatar-wrap mr-15"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: comment.userAvatar,
      alt: "project logo",
      className: "rounded-circle",
      width: "40",
      height: "40"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "comment-wrap"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
      className: "mb-0"
    }, comment.userName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "font-xs"
    }, "commented on", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "text-primary"
    }, " ", comment.commentTitle)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "mb-0 font-xs"
    }, comment.comment)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "comment-action w-20 text-right"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "font-xs text-muted font-weight-light d-block comment-date"
    }, comment.date), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "hover-action d-flex align-items-center"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Fab"], {
      variant: "round",
      size: "small",
      color: "primary",
      className: "btn-sm mx-1 bg-primary"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "zmdi zmdi-check"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Fab"], {
      variant: "round",
      size: "small",
      className: "bg-danger text-white btn-sm mx-1"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "zmdi zmdi-delete"
    })))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCard__WEBPACK_IMPORTED_MODULE_7__["RctCardFooter"], {
      customClasses: "d-flex justify-content-between align-items-center rounded-bottom"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
      variant: "contained",
      color: "primary",
      className: "px-3 btn-xs bg-primary"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_6__["default"], {
      id: "button.viewAll"
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

  reactHotLoader.register(Comments, "Comments", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\Comments.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);