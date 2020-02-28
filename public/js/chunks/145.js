(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[145],{

/***/ "./resources/js/routes/pages/faq/components/SearchIdeas.js":
/*!*****************************************************************!*\
  !*** ./resources/js/routes/pages/faq/components/SearchIdeas.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var Actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Actions */ "./resources/js/actions/index.js");
/* harmony import */ var Components_RctCollapsibleCard_RctCollapsibleCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Components/RctCollapsibleCard/RctCollapsibleCard */ "./resources/js/components/RctCollapsibleCard/RctCollapsibleCard.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Search Ideas
 */



 // actions

 // rct card



class SearchIdeas extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  /**
   * On Search Idea
   */
  onUpdateSearchIdeas(e) {
    this.props.updateSearchIdeas(e.target.value);
  }
  /**
   * On Search Ideas
   */


  onSearchIdeas() {
    this.props.showFeedbackLoadingIndicator();
    const {
      searchIdeaText
    } = this.props;
    let self = this;
    setTimeout(() => {
      self.props.onSearchIdeas(searchIdeaText);
    }, 1500);
  }

  render() {
    const {
      searchIdeaText
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCollapsibleCard_RctCollapsibleCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      customClasses: "search-filter"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "heading mb-30"
    }, "Type Your Question"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
      className: "mb-0 w-40"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      type: "text",
      name: "search",
      onChange: e => this.onUpdateSearchIdeas(e),
      value: searchIdeaText
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
      variant: "contained",
      color: "primary",
      className: "text-white",
      onClick: () => this.onSearchIdeas()
    }, "Search")));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

} // map state to props


const mapStateToProps = ({
  feedback
}) => {
  return feedback;
};

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, {
  updateSearchIdeas: Actions__WEBPACK_IMPORTED_MODULE_4__["updateSearchIdeas"],
  onSearchIdeas: Actions__WEBPACK_IMPORTED_MODULE_4__["onSearchIdeas"],
  showFeedbackLoadingIndicator: Actions__WEBPACK_IMPORTED_MODULE_4__["showFeedbackLoadingIndicator"]
})(SearchIdeas);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SearchIdeas, "SearchIdeas", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\routes\\pages\\faq\\components\\SearchIdeas.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\routes\\pages\\faq\\components\\SearchIdeas.js");
  reactHotLoader.register(_default, "default", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\routes\\pages\\faq\\components\\SearchIdeas.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/js/routes/pages/faq/index.js":
/*!************************************************!*\
  !*** ./resources/js/routes/pages/faq/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/ExpansionPanel */ "./node_modules/@material-ui/core/esm/ExpansionPanel/index.js");
/* harmony import */ var _material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/ExpansionPanelDetails */ "./node_modules/@material-ui/core/esm/ExpansionPanelDetails/index.js");
/* harmony import */ var _material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ExpansionPanelSummary */ "./node_modules/@material-ui/core/esm/ExpansionPanelSummary/index.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var Api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Api */ "./resources/js/api/index.js");
/* harmony import */ var _components_SearchIdeas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/SearchIdeas */ "./resources/js/routes/pages/faq/components/SearchIdeas.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Faq Page
 */




 // api

 //Components



class Faq extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      faqs: null
    };
  }

  componentDidMount() {
    this.getFaqs();
  } // get faqs


  getFaqs() {
    Api__WEBPACK_IMPORTED_MODULE_5__["default"].get('faqs.js').then(response => {
      this.setState({
        faqs: response.data
      });
    }).catch(error => {// error handling
    });
  }

  render() {
    const {
      faqs
    } = this.state;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "faq-page-wrapper"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_4__["Helmet"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Faqs"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
      name: "description",
      content: "Reactify Faqs Page"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SearchIdeas__WEBPACK_IMPORTED_MODULE_6__["default"], null), faqs && faqs.map((faq, key) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: key,
      className: "mb-30 panel",
      defaultExpanded: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_3__["default"], {
      expandIcon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "zmdi zmdi-chevron-down"
      }),
      className: "m-0 panel-heading"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, faq.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, faq.content)))));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

const _default = Faq;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Faq, "Faq", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\routes\\pages\\faq\\index.js");
  reactHotLoader.register(_default, "default", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\routes\\pages\\faq\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);