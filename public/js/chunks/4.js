(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

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

/***/ "./resources/js/routes/Profile/Profile.js":
/*!************************************************!*\
  !*** ./resources/js/routes/Profile/Profile.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var Components_PageTitleBar_PageTitleBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Components/PageTitleBar/PageTitleBar */ "./resources/js/components/PageTitleBar/PageTitleBar.js");
/* harmony import */ var Components_RctCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Components/RctCard */ "./resources/js/components/RctCard/index.js");
/* harmony import */ var Util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Util/IntlMessages */ "./resources/js/util/IntlMessages.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var Actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! Actions */ "./resources/js/actions/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
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
 * Sign Up With Laravel
 */

 // page title bar

 // rct card box

 // intl messages






 // redux

 // redux action



const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__["makeStyles"])({
  label: {
    backgroundColor: 'rgba(101, 14, 141, .9)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    width: 200,
    height: 30,
    marginTop: 20,
    padding: 8,
    boxShadow: '0 1px 0 2px rgba(71, 9, 101, .3)',
    '&:hover': {
      backgroundColor: 'rgba(101, 14, 141, 1)',
      cursor: 'pointer'
    }
  }
});
const ERROR_PROPS = {
  error: true
};
const VALIDE_PROPS = {
  error: false
};

const Profile = ({
  location,
  history,
  match,
  authUser
}) => {
  const [name, setName] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [nameHelperText, setNameHelperText] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [nameHelperProps, setNameHelperProps] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(VALIDE_PROPS);
  const [email, setEmail] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [emailHelperText, setEmailHelperText] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [emailHelperProps, setEmailHelperProps] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(VALIDE_PROPS);
  const [password, setPassword] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [passwordHelperText, setPasswordHelperText] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [passwordHelperProps, setPasswordHelperProps] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(VALIDE_PROPS);
  const [isShowPassword, setIsShowPassword] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [imgFile, setImgFile] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [imgSrc, setImgSrc] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const [imgValidInfo, setImgValidInfo] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("nothing selected");
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    console.log("=== profile useEffect ==", authUser);
    setName(authUser.name);
    setEmail(authUser.email);
    setImgSrc(authUser.imgUrl);
  }, [authUser]);

  const handleNameChange = e => {
    var value = e.target.value;
    setName(value);
    validateName(value);
  };

  const validateName = value => {
    if (value === "") {
      setNameHelperText("Name is required!");
      setNameHelperProps(ERROR_PROPS);
      return false;
    } else {
      setNameHelperText(null);
      setNameHelperProps(VALIDE_PROPS);
      return true;
    }
  };

  const handleEmailChange = e => {
    var value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };

  const validateEmail = value => {
    if (value.length === 0) {
      setEmailHelperText("Email is required!");
      setEmailHelperProps(ERROR_PROPS);
      return false;
    } else if (!validateEmailFormat(value)) {
      setEmailHelperText("Email Format Error");
      setEmailHelperProps(ERROR_PROPS);
      return false;
    } else {
      setEmailHelperText(null);
      setEmailHelperProps(VALIDE_PROPS);
      return true;
    }
  };

  const validateEmailFormat = email => {
    return new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(email);
  };

  const handlePasswordChange = e => {
    var value = e.target.value;
    setPassword(value);
    validatePassword(value);
  };

  const validatePassword = value => {
    if (value.length === 0) {
      setPasswordHelperText("Password is required!");
      setPasswordHelperProps(ERROR_PROPS);
      return false;
    } else if (value.length < 6) {
      setPasswordHelperText("Password must be over 6 charecter!");
      setPasswordHelperProps(ERROR_PROPS);
      return false;
    } else {
      setPasswordHelperText(null);
      setPasswordHelperProps(VALIDE_PROPS);
      return true;
    }
  };

  const onTogglePassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const onClickUpdate = () => {
    var isValidate = true;

    if (!validateName(name)) {
      isValidate = false;
    }

    if (!validateEmail(email)) {
      isValidate = false;
    }

    if (!validatePassword(password)) {
      isValidate = false;
    }

    if (!isValidate) return;
    setIsShowPassword(false);
    alert("ok"); // let userInfo = new FormData()
    // userInfo.append('name', name)
    // userInfo.append('email', email)
    // userInfo.append('password', password)
    // userInfo.append('imgFile', imgFile)
    // action_signup_user(userInfo, history)
  };

  const onSelectImage = e => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.type !== "image/png" && file.type !== "image/jpg" && file.type !== "image/jpeg") {
      setImgValidInfo("invalid");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      setImgFile(file);
      setImgSrc(reader.result);
      setImgValidInfo(null);
    };

    reader.readAsDataURL(file);
  };

  const onDeleteImage = () => {
    setImgSrc(null);
    setImgFile('');
    setImgValidInfo("nothing selected");
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user-profile-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "User Profile"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "description",
    content: "User Profile"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_PageTitleBar_PageTitleBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "userProfile",
    match: match
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCard__WEBPACK_IMPORTED_MODULE_3__["RctCard"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "profile-top"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! Assets/img/profile-banner.jpg */ "./resources/js/assets/img/profile-banner.jpg"),
    alt: "profile banner",
    width: "1920",
    height: "200"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "profile-bottom"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user-image text-center mb-30"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: imgSrc ? imgSrc : __webpack_require__(/*! Assets/avatars/profile.jpg */ "./resources/js/assets/avatars/profile.jpg"),
    className: "img-fluid rounded-circle rct-notify mx-auto",
    alt: "user images",
    width: "150",
    height: "150"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user-list-content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "fw-bold"
  }, authUser.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Web & Mobile Developer")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-6 col-md-6 col-lg-6"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    container: true,
    spacing: 2
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    item: true,
    xs: 12
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    autoComplete: "name",
    name: "name",
    required: true,
    autoFocus: true,
    fullWidth: true,
    id: "name",
    variant: "outlined",
    label: "Enter Your Name",
    type: "text",
    value: name ? name : '',
    helperText: nameHelperText,
    FormHelperTextProps: nameHelperProps,
    InputLabelProps: nameHelperProps,
    InputProps: _objectSpread({}, nameHelperProps, {
      endAdornment: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["InputAdornment"], {
        position: "end"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_9__["Person"], null))
    }),
    onChange: handleNameChange
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    item: true,
    xs: 12
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    autoComplete: "email",
    name: "email",
    required: true,
    fullWidth: true,
    id: "email",
    variant: "outlined",
    label: "Email Address",
    type: "email",
    value: email ? email : '',
    helperText: emailHelperText,
    FormHelperTextProps: emailHelperProps,
    InputLabelProps: emailHelperProps,
    InputProps: _objectSpread({}, emailHelperProps, {
      endAdornment: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["InputAdornment"], {
        position: "end"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_9__["Email"], null))
    }),
    onChange: handleEmailChange
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    item: true,
    xs: 12
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    autoComplete: "password",
    name: "password",
    required: true,
    fullWidth: true,
    id: "password",
    variant: "outlined",
    label: "password",
    type: isShowPassword ? "text" : "password",
    value: password,
    helperText: passwordHelperText,
    FormHelperTextProps: passwordHelperProps,
    InputLabelProps: passwordHelperProps,
    InputProps: _objectSpread({}, passwordHelperProps, {
      endAdornment: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["InputAdornment"], {
        position: "end"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["IconButton"], {
        "aria-label": "toggle password visibility",
        edge: "end",
        onClick: onTogglePassword
      }, isShowPassword ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_9__["Visibility"], null) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_9__["VisibilityOff"], null)))
    }),
    onChange: handlePasswordChange
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "btn-block text-white btn-block w-100",
    color: "primary",
    variant: "contained",
    size: "large",
    style: {
      marginTop: 20,
      marginBottom: 30
    },
    onClick: onClickUpdate
  }, "Update Profile"))))));
}; // map state to props


__signature__(Profile, "useState{[name, setName](\"\")}\nuseState{[nameHelperText, setNameHelperText](null)}\nuseState{[nameHelperProps, setNameHelperProps](VALIDE_PROPS)}\nuseState{[email, setEmail](\"\")}\nuseState{[emailHelperText, setEmailHelperText](null)}\nuseState{[emailHelperProps, setEmailHelperProps](VALIDE_PROPS)}\nuseState{[password, setPassword](\"\")}\nuseState{[passwordHelperText, setPasswordHelperText](null)}\nuseState{[passwordHelperProps, setPasswordHelperProps](VALIDE_PROPS)}\nuseState{[isShowPassword, setIsShowPassword](false)}\nuseState{[imgFile, setImgFile]('')}\nuseState{[imgSrc, setImgSrc]}\nuseState{[imgValidInfo, setImgValidInfo](\"nothing selected\")}\nuseEffect{}");

const mapStateToProps = ({
  authUser
}) => {
  return {
    authUser
  };
};

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps)(Profile);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(useStyles, "useStyles", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\routes\\Profile\\Profile.js");
  reactHotLoader.register(ERROR_PROPS, "ERROR_PROPS", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\routes\\Profile\\Profile.js");
  reactHotLoader.register(VALIDE_PROPS, "VALIDE_PROPS", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\routes\\Profile\\Profile.js");
  reactHotLoader.register(Profile, "Profile", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\routes\\Profile\\Profile.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\routes\\Profile\\Profile.js");
  reactHotLoader.register(_default, "default", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\routes\\Profile\\Profile.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);