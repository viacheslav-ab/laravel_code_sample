(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[191],{

/***/ "./resources/js/components/Widgets/ToDoList.js":
/*!*****************************************************!*\
  !*** ./resources/js/components/Widgets/ToDoList.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TodoListWidget; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var react_addons_update__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-addons-update */ "./node_modules/react-addons-update/index.js");
/* harmony import */ var react_addons_update__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_addons_update__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ "./node_modules/@material-ui/core/esm/DialogContentText/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-custom-scrollbars */ "./node_modules/react-custom-scrollbars/lib/index.js");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "./node_modules/@material-ui/core/esm/Snackbar/index.js");
/* harmony import */ var Api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! Api */ "./resources/js/api/index.js");
/* harmony import */ var Util_IntlMessages__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! Util/IntlMessages */ "./resources/js/util/IntlMessages.js");
/* harmony import */ var Components_RctSectionLoader_RctSectionLoader__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! Components/RctSectionLoader/RctSectionLoader */ "./resources/js/components/RctSectionLoader/RctSectionLoader.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
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
 * Todo List Widget
 */















 // api

 // intl messages

 // rct section loader



class TodoListWidget extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      toDoListData: null,
      sectionReload: false,
      addNewTodoDialog: false,
      newTodo: {
        todoTitle: '',
        time: null,
        date: ''
      },
      snackbar: false,
      snackbarMessage: ''
    };

    this.handleClose = () => {
      this.setState({
        addNewTodoDialog: false
      });
    };

    this.addNewTodo = () => {
      if (this.state.newTodo.todoTitle !== '' && this.state.newTodo.date) {
        let todos = this.state.toDoListData;
        let newTodo = {
          title: this.state.newTodo.todoTitle,
          date: this.state.newTodo.date,
          completed: false
        };
        this.setState({
          sectionReload: true,
          addNewTodoDialog: false
        });
        let self = this;
        setTimeout(() => {
          todos.push(newTodo);
          self.setState({
            toDoListData: todos,
            addNewTodoDialog: false,
            sectionReload: false,
            snackbar: true,
            snackbarMessage: 'Todo Added Successfully!'
          });
        }, 1500);
      }
    };
  }

  componentDidMount() {
    this.getTodo();
  } // get todo


  getTodo() {
    this.setState({
      sectionReload: true
    });
    Api__WEBPACK_IMPORTED_MODULE_16__["default"].get('todo.js').then(response => {
      this.setState({
        toDoListData: response.data,
        sectionReload: false
      });
    }).catch(error => {
      this.setState({
        toDoListData: null,
        sectionReload: false
      });
    });
  }
  /**
   * On Delete Task
   */


  onDeleteTask(e, task) {
    e.stopPropagation();
    this.setState({
      sectionReload: true
    });
    let todos = this.state.toDoListData;
    let index = todos.indexOf(task);
    let self = this;
    setTimeout(() => {
      todos.splice(index, 1);
      self.setState({
        toDoListData: todos,
        sectionReload: false,
        snackbar: true,
        snackbarMessage: 'Todo Deleted Successfully'
      });
    }, 1500);
  } // on change task status


  handleChange(value, data) {
    let selectedTodoIndex = this.state.toDoListData.indexOf(data);
    let newState = react_addons_update__WEBPACK_IMPORTED_MODULE_5___default()(this.state, {
      toDoListData: {
        [selectedTodoIndex]: {
          completed: {
            $set: value
          }
        }
      }
    });
    this.setState({
      sectionReload: true
    });
    let self = this;
    setTimeout(() => {
      self.setState({
        toDoListData: newState.toDoListData,
        sectionReload: false,
        snackbar: true,
        snackbarMessage: 'Todo Updated'
      });
    }, 1500);
  } // open add new todo dialog


  opnAddNewTodoDialog() {
    this.setState({
      addNewTodoDialog: true
    });
  } // handle close add new todo dailog


  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, this.state.sectionReload && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctSectionLoader_RctSectionLoader__WEBPACK_IMPORTED_MODULE_18__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_14__["Scrollbars"], {
      className: "rct-scroll",
      autoHeight: true,
      autoHeightMin: 100,
      autoHeightMax: 420,
      autoHide: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "p-0"
    }, this.state.toDoListData && this.state.toDoListData.map((data, key) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "border-bottom",
      button: true,
      key: key,
      onClick: () => this.handleChange(!data.completed, data)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()('d-flex justify-content-between align-items-center w-100', {
        'strike': data.completed
      })
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex align-items-center clearfix"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "float-left"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_1__["default"], {
      className: "mb-0",
      control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_2__["default"], {
        checked: data.completed,
        color: "primary",
        onChange: event => this.handleChange(event.target.checked, data)
      })
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "float-left"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "mb-0"
    }, data.title), data.date && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "d-block fs-12 text-muted"
    }, data.date))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "hover-action"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["Fab"], {
      variant: "round",
      size: "small",
      className: "btn-danger text-white",
      onClick: e => this.onDeleteTask(e, data)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "zmdi zmdi-delete"
    })))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex p-3"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
      variant: "contained",
      color: "primary",
      className: "text-white",
      onClick: () => this.opnAddNewTodoDialog()
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_17__["default"], {
      id: "widgets.addNew"
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_9__["default"], {
      open: this.state.addNewTodoDialog,
      onClose: this.handleClose,
      "aria-labelledby": "form-dialog-title"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_13__["default"], {
      id: "form-dialog-title"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_17__["default"], {
      id: "components.addNewTasks"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_11__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_12__["default"], null, "Add New Todo. Add Todo Title And Select Time For Todo."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__["default"], {
      margin: "dense",
      id: "name",
      onChange: e => this.setState({
        newTodo: _objectSpread({}, this.state.newTodo, {
          todoTitle: e.target.value
        })
      }),
      label: "Todo Title",
      type: "text",
      fullWidth: true,
      value: this.state.newTodo.todoTitle
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__["default"], {
      id: "date",
      label: "Schedule Date",
      type: "date",
      InputLabelProps: {
        shrink: true
      },
      fullWidth: true,
      onChange: e => this.setState({
        newTodo: _objectSpread({}, this.state.newTodo, {
          date: e.target.value
        })
      })
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_10__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
      variant: "contained",
      onClick: this.handleClose,
      className: "btn-danger text-white"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_17__["default"], {
      id: "button.cancel"
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
      variant: "contained",
      onClick: this.addNewTodo,
      color: "primary",
      className: "text-white"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_17__["default"], {
      id: "button.add"
    }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_15__["default"], {
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
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TodoListWidget, "TodoListWidget", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\ToDoList.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);