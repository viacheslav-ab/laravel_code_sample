(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./resources/js/assets/img/user-1.jpg":
/*!********************************************!*\
  !*** ./resources/js/assets/img/user-1.jpg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/user-1.jpg?6137d13faeb9010ddc32fa87f00ff06f";

/***/ }),

/***/ "./resources/js/assets/img/user-2.jpg":
/*!********************************************!*\
  !*** ./resources/js/assets/img/user-2.jpg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/user-2.jpg?2ac74301c8a3d5417e4cdd56c4ec2f8a";

/***/ }),

/***/ "./resources/js/assets/img/user-3.jpg":
/*!********************************************!*\
  !*** ./resources/js/assets/img/user-3.jpg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/user-3.jpg?9697f0003ec71ec1161516c525f77640";

/***/ }),

/***/ "./resources/js/assets/img/user-4.jpg":
/*!********************************************!*\
  !*** ./resources/js/assets/img/user-4.jpg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/user-4.jpg?f52ddb15f97f3525a37c4cfbf8a75757";

/***/ }),

/***/ "./resources/js/components/Widgets/TopAuthors.js":
/*!*******************************************************!*\
  !*** ./resources/js/components/Widgets/TopAuthors.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TopAuthors; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

//Top Authors widget


const topAuthors = [{
  id: 1,
  name: "Natasha Knight",
  avatarSrc: __webpack_require__(/*! Assets/img/user-1.jpg */ "./resources/js/assets/img/user-1.jpg"),
  phone: "+01 2345 67890",
  email: "natasha@example.com",
  address: "E-51 Phase-1 Mohali",
  articles: 200,
  followers: 1400,
  likes: 580
}, {
  id: 2,
  name: "Lisa Roy",
  avatarSrc: __webpack_require__(/*! Assets/img/user-2.jpg */ "./resources/js/assets/img/user-2.jpg"),
  phone: "+01 2345 67890",
  email: "lisa@example.com",
  address: "London United Kingdom",
  articles: 50,
  followers: 400,
  likes: 200
}, {
  id: 3,
  name: "Andre Hicks",
  avatarSrc: __webpack_require__(/*! Assets/img/user-3.jpg */ "./resources/js/assets/img/user-3.jpg"),
  phone: "+01 2345 67890",
  email: "hicksandre@example.com",
  address: "778 Nicole Station Suite 903",
  articles: 75,
  followers: 1700,
  likes: 2000
}, {
  id: 4,
  name: "Jhon Smith",
  avatarSrc: __webpack_require__(/*! Assets/img/user-4.jpg */ "./resources/js/assets/img/user-4.jpg"),
  phone: "+01 2345 67890",
  email: "jhon@example.com",
  address: "E-51 Phase-1 Mohali",
  articles: 175,
  followers: 1200,
  likes: 1800
}];
class TopAuthors extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "top-author-wrap rct-block"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "bg-primary text-white pt-4 rounded-top"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "mb-0 text-center"
    }, "Top Authors")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, settings, topAuthors && topAuthors.map((author, key) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: author.id,
      className: "author-detail-wrap d-flex justify-content-between flex-column"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "author-avatar bg-primary overlay-wrap mb-5"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "avatar-img"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: author.avatarSrc,
      width: "80",
      height: "80",
      className: "img-fluid mx-auto rounded-circle",
      alt: "avtar"
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "p-3 authors-info"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, author.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "list-unstyled author-contact-info mb-2"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "mr-3"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "zmdi zmdi-phone-msg"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "tel:123456",
      className: "font-xs text-muted"
    }, author.phone)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "mr-3"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "zmdi zmdi-email"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "mailto:joan_parisian@gmail.com",
      className: "font-xs text-muted"
    }, author.email)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "mr-3"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "zmdi zmdi-pin"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "font-xs text-muted"
    }, author.address))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "d-flex social-info list-unstyled"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "facebook",
      href: "#",
      onClick: e => e.preventDefault()
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "zmdi zmdi-facebook-box"
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "twitter",
      href: "#",
      onClick: e => e.preventDefault()
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "zmdi zmdi-twitter-box"
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "linkedin",
      href: "#",
      onClick: e => e.preventDefault()
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "zmdi zmdi-linkedin-box"
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "instagram",
      href: "#",
      onClick: e => e.preventDefault()
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "zmdi zmdi-instagram"
    }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "d-flex list-unstyled footer-content text-center w-100 border-top mb-0"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
      className: "mb-0"
    }, author.articles), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "font-xs text-muted"
    }, "Articles")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
      className: "mb-0"
    }, author.followers), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "font-xs text-muted"
    }, "Followers")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
      className: "mb-0"
    }, author.likes), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "font-xs text-muted"
    }, "Likes")))))));
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

  reactHotLoader.register(topAuthors, "topAuthors", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\TopAuthors.js");
  reactHotLoader.register(TopAuthors, "TopAuthors", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\TopAuthors.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);