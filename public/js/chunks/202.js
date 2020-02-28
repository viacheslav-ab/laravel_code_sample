(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[202],{

/***/ "./resources/js/components/Widgets/Weather.js":
/*!****************************************************!*\
  !*** ./resources/js/components/Widgets/Weather.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WeatherWidget; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};




 // function to get today weather icon

function getIcon(id) {
  if (id >= 200 && id < 300) {
    return 'wi wi-night-showers';
  } else if (id >= 300 && id < 500) {
    return 'wi day-sleet';
  } else if (id >= 500 && id < 600) {
    return 'wi wi-night-showers';
  } else if (id >= 600 && id < 700) {
    return 'wi wi-day-snow';
  } else if (id >= 700 && id < 800) {
    return 'wi wi-day-fog';
  } else if (id === 800) {
    return 'wi wi-day-sunny';
  } else if (id >= 801 && id < 803) {
    return 'wi wi-night-partly-cloudy';
  } else if (id >= 802 && id < 900) {
    return 'wi wi-day-cloudy';
  } else if (id === 905 || id >= 951 && id <= 956) {
    return 'wi wi-day-windy';
  } else if (id >= 900 && id < 1000) {
    return 'wi wi-night-showers';
  }
} // Main component


class WeatherWidget extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      city: false,
      countryCode: false,
      todayTemp: false,
      todayTempText: false,
      todayWeatherIcon: '',
      currentTime: moment__WEBPACK_IMPORTED_MODULE_2___default()().format('hh:mm A')
    };
  }

  componentDidMount() {
    var appid = 'b1b15e88fa797225412429c1c50c122a1'; // Your api id

    var apikey = '69b72ed255ce5efad910bd946685883a'; //Your apikey

    var city = 'Mohali'; // city name

    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('https://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&cnt=6&units=metric&mode=json&appid=' + appid + '&apikey=' + apikey).then(response => {
      this.setState({
        city: response.data.city.name,
        countryCode: response.data.city.country,
        todayTemp: response.data.list[0].temp.max,
        todayTempText: response.data.list[0].weather[0].main,
        todayDayName: moment__WEBPACK_IMPORTED_MODULE_2___default()().format('dddd'),
        todayWeatherIcon: getIcon(response.data.list[0].weather[0].id)
      });
    }).catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card rct-weather-widget text-white text-center p-0"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "black-overlay p-20 align-items-center d-flex justify-content-center"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex justify-content-start"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(this.state.todayWeatherIcon, 'font-4x mr-20')
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "weather-content"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "mb-5"
    }, this.state.city, " (", this.state.countryCode, ")"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "mb-5 dayTime"
    }, this.state.todayDayName, " ", this.state.currentTime), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, this.state.todayTemp, " ", this.state.todayTempText)))));
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

  reactHotLoader.register(getIcon, "getIcon", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\Weather.js");
  reactHotLoader.register(WeatherWidget, "WeatherWidget", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\Weather.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);