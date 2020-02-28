(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./resources/js/assets/img/news-slide-1.jpg":
/*!**************************************************!*\
  !*** ./resources/js/assets/img/news-slide-1.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/news-slide-1.jpg?c1d0ed523fb74d03e9d8cb0dbaf3431f";

/***/ }),

/***/ "./resources/js/assets/img/news-slide-2.jpg":
/*!**************************************************!*\
  !*** ./resources/js/assets/img/news-slide-2.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/news-slide-2.jpg?a78d469c64da922db31520a457431052";

/***/ }),

/***/ "./resources/js/assets/img/news-slide-3.jpg":
/*!**************************************************!*\
  !*** ./resources/js/assets/img/news-slide-3.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/news-slide-3.jpg?0b00764b530dd0025c94d4af4d4e7735";

/***/ }),

/***/ "./resources/js/assets/img/news-slide-4.jpg":
/*!**************************************************!*\
  !*** ./resources/js/assets/img/news-slide-4.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/news-slide-4.jpg?7136482d98d9306548c43b61b629642f";

/***/ }),

/***/ "./resources/js/assets/img/news-slide-5.jpg":
/*!**************************************************!*\
  !*** ./resources/js/assets/img/news-slide-5.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/news-slide-5.jpg?36abf59f3cf7900ad0aee872a27b81ee";

/***/ }),

/***/ "./resources/js/components/Widgets/TopNews.js":
/*!****************************************************!*\
  !*** ./resources/js/components/Widgets/TopNews.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TopNews; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var Helpers_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Helpers/helpers */ "./resources/js/helpers/helpers.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

//Top News Widget

 //Helper


const newsData = [{
  id: 1,
  newsSrc: __webpack_require__(/*! Assets/img/news-slide-1.jpg */ "./resources/js/assets/img/news-slide-1.jpg"),
  newsTitle: "#WorldPopulationDay: India Likely to Overtake China by 2022",
  newsContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  likes: "1k",
  views: "3k",
  comments: "200"
}, {
  id: 2,
  newsSrc: __webpack_require__(/*! Assets/img/news-slide-2.jpg */ "./resources/js/assets/img/news-slide-2.jpg"),
  newsTitle: "Check status of Mumbai local, long-distance trains as rains continue",
  newsContent: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
  likes: "2k",
  views: "5k",
  comments: "600"
}, {
  id: 3,
  newsSrc: __webpack_require__(/*! Assets/img/news-slide-3.jpg */ "./resources/js/assets/img/news-slide-3.jpg"),
  newsTitle: "Croatia lowest ranked team in history to reach World Cup final",
  newsContent: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, ",
  likes: "500",
  views: "1k",
  comments: "300"
}, {
  id: 4,
  newsSrc: __webpack_require__(/*! Assets/img/news-slide-4.jpg */ "./resources/js/assets/img/news-slide-4.jpg"),
  newsTitle: "Telecom Commission approves net neutrality, new telecom policy",
  newsContent: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
  likes: "4k",
  views: "8k",
  comments: "1k"
}, {
  id: 5,
  newsSrc: __webpack_require__(/*! Assets/img/news-slide-5.jpg */ "./resources/js/assets/img/news-slide-5.jpg"),
  newsTitle: "Vistara orders Boeing, Airbus jets worth $3.1 billion",
  newsContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  likes: "100",
  views: "500",
  comments: "50"
}];
class TopNews extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      settings1: undefined,
      settings2: undefined
    };
  }

  componentDidMount() {
    this.setState({
      settings1: this.settings1,
      settings2: this.settings2
    });
  }

  render() {
    const settings1 = {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      adaptiveHeight: true,
      ref: slider => this.settings1 = slider,
      asNavFor: this.state.settings2
    };
    const settings2 = {
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      autoplay: true,
      speed: 2000,
      infinite: true,
      cssEase: "linear",
      focusOnSelect: true,
      ref: slider => this.settings2 = slider,
      asNavFor: this.state.settings1,
      rtl: false,
      adaptiveHeight: true,
      responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      }]
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "top-news-wrap rct-block"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({}, settings1, {
      className: "main-slider-wrap"
    }), newsData && newsData.map((news, key) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: news.id,
      className: "main-slider-item overlay-wrap"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: news.newsSrc,
      alt: "top-news",
      height: "300",
      width: "700",
      className: "img-fluid  rounded-top"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "overlay-content d-flex justify-content-end align-items-end rounded-top"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "overlay-holder p-3 mb-50 w-50"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "mb-2 text-white"
    }, news.newsTitle), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "meta-info d-flex align-items-center font-xs text-white"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "mx-2"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "zmdi zmdi-thumb-up mr-2"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, news.likes)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "mx-2"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "zmdi zmdi-eye mr-2"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, news.views)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "mx-2"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "zmdi zmdi-comment-text mr-2"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, news.comments))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "mb-0 mt-2 font-xs text-white"
    }, Object(Helpers_helpers__WEBPACK_IMPORTED_MODULE_2__["textTruncate"])(news.newsContent, 100))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({}, settings2, {
      className: "slider-btn-wrap"
    }), newsData && newsData.map((news, key) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: news.id,
      className: "slider-btn my-2"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: news.newsSrc,
      alt: "top-news",
      height: "90",
      width: "175",
      className: "img-fluid mx-auto"
    })))));
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

  reactHotLoader.register(newsData, "newsData", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\TopNews.js");
  reactHotLoader.register(TopNews, "TopNews", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\TopNews.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);