(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[116],{

/***/ "./resources/js/components/PageTitleBar/PageTitleBar.js":
/*!**************************************************************!*\
  !*** ./resources/js/components/PageTitleBar/PageTitleBar.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var Util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Util/IntlMessages */ "./resources/js/util/IntlMessages.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Page Title Bar Component
 * Used To Display Page Title & Breadcrumbs
 */


 // intl messages

 // get display string

const getDisplayString = sub => {
  const arr = sub.split("-");

  if (arr.length > 1) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: `sidebar.${arr[0].charAt(0) + arr[0].slice(1) + arr[1].charAt(0).toUpperCase() + arr[1].slice(1)}`
    });
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: `sidebar.${sub.charAt(0) + sub.slice(1)}`
    });
  }
}; // get url string


const getUrlString = (path, sub, index) => {
  if (index === 0) {
    return '/';
  } else {
    return '/' + path.split(sub)[0] + sub;
  }
};

const PageTitleBar = ({
  title,
  match,
  enableBreadCrumb
}) => {
  const path = match.path.substr(1);
  const subPath = path.split('/');
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "page-title d-flex justify-content-between align-items-center"
  }, title && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "page-title-wrap"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "ti-angle-left"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: ""
  }, title)), enableBreadCrumb && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Breadcrumb"], {
    className: "mb-0 tour-step-7",
    tag: "nav"
  }, subPath.map((sub, index) => {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbItem"], {
      active: subPath.length === index + 1,
      tag: subPath.length === index + 1 ? "span" : react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
      key: index,
      to: getUrlString(path, sub, index)
    }, getDisplayString(sub));
  })));
}; // default props value


PageTitleBar.defaultProps = {
  enableBreadCrumb: true
};
const _default = PageTitleBar;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getDisplayString, "getDisplayString", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\PageTitleBar\\PageTitleBar.js");
  reactHotLoader.register(getUrlString, "getUrlString", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\PageTitleBar\\PageTitleBar.js");
  reactHotLoader.register(PageTitleBar, "PageTitleBar", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\PageTitleBar\\PageTitleBar.js");
  reactHotLoader.register(_default, "default", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\PageTitleBar\\PageTitleBar.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/js/routes/drag-drop/react-dnd/index.js":
/*!**********************************************************!*\
  !*** ./resources/js/routes/drag-drop/react-dnd/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ReactDND; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var Components_PageTitleBar_PageTitleBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Components/PageTitleBar/PageTitleBar */ "./resources/js/components/PageTitleBar/PageTitleBar.js");
/* harmony import */ var Util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Util/IntlMessages */ "./resources/js/util/IntlMessages.js");
/* harmony import */ var Components_RctCollapsibleCard_RctCollapsibleCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Components/RctCollapsibleCard/RctCollapsibleCard */ "./resources/js/components/RctCollapsibleCard/RctCollapsibleCard.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * React Dnd
 */

 // page title bar

 // intl messages

 // rct card box

 // fake data generator

const getItems = count => Array.from({
  length: count
}, (v, k) => k).map(k => ({
  id: `This is draggable item ${k}`,
  content: `This is draggable item ${k}`
})); // a little function to help us with reordering the result


const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
}; // const grid = 8;


const getItemStyle = (isDragging, draggableStyle) => _objectSpread({}, draggableStyle);

const getListStyle = isDraggingOver => ({});

class ReactDND extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      items: getItems(10)
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(this.state.items, result.source.index, result.destination.index);
    this.setState({
      items
    });
  } // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity


  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "dragula-wrapper"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_PageTitleBar_PageTitleBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "sidebar.reactDnd"
      }),
      match: this.props.match
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCollapsibleCard_RctCollapsibleCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      heading: "React DND"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_1__["DragDropContext"], {
      onDragEnd: this.onDragEnd
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_1__["Droppable"], {
      droppableId: "droppable"
    }, (provided, snapshot) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "list-unstyled list-group drag-list-wrapper",
      ref: provided.innerRef,
      style: getListStyle(snapshot.isDraggingOver)
    }, this.state.items.map((item, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_1__["Draggable"], {
      key: item.id,
      draggableId: item.id,
      index: index
    }, (provided, snapshot) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "list-group-item"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({
      ref: provided.innerRef
    }, provided.draggableProps, provided.dragHandleProps, {
      className: "drag-list",
      style: getItemStyle(snapshot.isDragging, provided.draggableProps.style)
    }), item.content), provided.placeholder))), provided.placeholder)))));
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

  reactHotLoader.register(getItems, "getItems", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\routes\\drag-drop\\react-dnd\\index.js");
  reactHotLoader.register(reorder, "reorder", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\routes\\drag-drop\\react-dnd\\index.js");
  reactHotLoader.register(getItemStyle, "getItemStyle", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\routes\\drag-drop\\react-dnd\\index.js");
  reactHotLoader.register(getListStyle, "getListStyle", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\routes\\drag-drop\\react-dnd\\index.js");
  reactHotLoader.register(ReactDND, "ReactDND", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\routes\\drag-drop\\react-dnd\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);