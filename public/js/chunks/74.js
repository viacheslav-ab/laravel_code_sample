(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[74],{

/***/ "./resources/js/components/Widgets/Notifications.js":
/*!**********************************************************!*\
  !*** ./resources/js/components/Widgets/Notifications.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-swipeable-views */ "./node_modules/react-swipeable-views/lib/index.js");
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_views__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Tabs */ "./node_modules/@material-ui/core/esm/Tabs/index.js");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Tab */ "./node_modules/@material-ui/core/esm/Tab/index.js");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-custom-scrollbars */ "./node_modules/react-custom-scrollbars/lib/index.js");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var Api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Api */ "./resources/js/api/index.js");
/* harmony import */ var Util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! Util/IntlMessages */ "./resources/js/util/IntlMessages.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Notifications Widget
 */







 // api

 // intl messages



function TabContainer({
  children,
  dir
}) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
    component: "div",
    dir: dir,
    style: {
      padding: 8 * 3
    }
  }, children);
}

class Notifications extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      value: 0,
      messages: null,
      notificationTypes: null,
      notifications: null
    };

    this.handleChange = (event, value) => {
      this.setState({
        value
      });
    };

    this.handleChangeIndex = index => {
      this.setState({
        value: index
      });
    };
  }

  componentDidMount() {
    this.getMessages();
    this.getNotificationTypes();
    this.getNotifications();
  } // get messages


  getMessages() {
    Api__WEBPACK_IMPORTED_MODULE_8__["default"].get('messages.js').then(response => {
      this.setState({
        messages: response.data
      });
    }).catch(error => {
      console.log(error);
    });
  } // get notification types


  getNotificationTypes() {
    Api__WEBPACK_IMPORTED_MODULE_8__["default"].get('notificationTypes.js').then(response => {
      this.setState({
        notificationTypes: response.data
      });
    }).catch(error => {
      console.log(error);
    });
  } // get notifications


  getNotifications() {
    Api__WEBPACK_IMPORTED_MODULE_8__["default"].get('notifications.js').then(response => {
      this.setState({
        notifications: response.data
      });
    }).catch(error => {
      console.log(error);
    });
  }

  /**
   * Function to return notification name
   */
  getNotificationName(notificationId) {
    const {
      notificationTypes
    } = this.state;

    if (notificationTypes) {
      for (const notificationType of notificationTypes) {
        if (notificationId === notificationType.id) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: `text-${notificationType.class} mr-5`
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
            className: `zmdi zmdi-${notificationType.icon}`
          }), " ", notificationType.Name);
        }
      }
    }
  }

  render() {
    const {
      theme
    } = this.props;
    const {
      messages,
      notifications
    } = this.state;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
      position: "static",
      color: "default"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_4__["default"], {
      value: this.state.value,
      onChange: this.handleChange,
      indicatorColor: "primary",
      textColor: "primary",
      variant: "fullWidth"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
        id: "widgets.recentNotifications"
      })
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
        id: "widgets.messages"
      })
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_6__["Scrollbars"], {
      className: "rct-scroll",
      autoHeight: true,
      autoHeightMin: 100,
      autoHeightMax: 375,
      autoHide: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_swipeable_views__WEBPACK_IMPORTED_MODULE_2___default.a, {
      axis: theme.direction === 'rtl' ? 'x-reverse' : 'x',
      index: this.state.value,
      onChangeIndex: this.handleChangeIndex
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card mb-0 notification-box"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabContainer, {
      dir: theme.direction
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "list-inline mb-0"
    }, notifications && notifications.map((notification, key) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "d-flex justify-content-between",
      key: key
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "align-items-start"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "mb-5 message-head"
    }, this.getNotificationName(notification.notificationId), notification.date), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
      className: "mb-5"
    }, notification.userName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "mb-0 text-muted"
    }, notification.notification)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "align-items-end notify-user"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: notification.userAvatar,
      alt: "notify user",
      className: "rounded-circle",
      width: "50",
      height: "50"
    }))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card mb-0 notification-box"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabContainer, {
      dir: theme.direction
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "list-inline mb-0"
    }, messages && messages.map((message, key) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "d-flex justify-content-between",
      key: key
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "align-items-start"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "mb-5 message-head"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "text-primary mr-5"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "zmdi zmdi-comment-alt-text"
    }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
      id: "widgets.messages"
    })), " ", message.date), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
      className: "mb-5"
    }, message.from.userName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "mb-0 text-muted"
    }, message.message)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "align-items-end notify-user"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: message.from.userAvatar,
      alt: "notify user",
      className: "rounded-circle",
      width: "50",
      height: "50"
    }))))))))));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

const _default = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(null, {
  withTheme: true
})(Notifications);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TabContainer, "TabContainer", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\Notifications.js");
  reactHotLoader.register(Notifications, "Notifications", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\Notifications.js");
  reactHotLoader.register(_default, "default", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\Notifications.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);