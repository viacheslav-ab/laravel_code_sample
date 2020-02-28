(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[111],{

/***/ "./resources/js/components/Widgets/WeatherV2.js":
/*!******************************************************!*\
  !*** ./resources/js/components/Widgets/WeatherV2.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WeatherWidgets; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Weather V2 Widget
 */


 // function to get today weather icon

function getIcon(id) {
  switch (id) {
    case id >= 200 && id < 300:
      return 'wi wi-night-showers';

    case id >= 300 && id < 500:
      return 'wi day-sleet';

    case id >= 500 && id < 600:
      return 'wi wi-night-showers';

    case id >= 600 && id < 700:
      return 'wi wi-day-snow';

    case id >= 700 && id < 800:
      return 'wi wi-day-fog';

    case id === 800:
      return 'wi wi-day-sunny';

    case id >= 801 && id < 803:
      return 'wi wi-night-partly-cloudy';

    case id >= 802 && id < 900:
      return 'wi wi-day-cloudy';

    case id === 905 || id >= 951 && id <= 956:
      return 'wi wi-day-windy';

    case id >= 900 && id < 1000:
      return 'wi wi-night-showers';

    default:
      break;
  }
} // Main component


class WeatherWidgets extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      weatherData: null,
      city: this.props.city ? this.props.city : 'New York'
    };
  }

  componentDidMount() {
    var appid = 'b1b15e88fa797225412429c1c50c122a1'; // Your api id

    var apikey = '69b72ed255ce5efad910bd946685883a'; //Your apikey

    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('https://api.openweathermap.org/data/2.5/forecast/daily?q=' + this.state.city + '&cnt=5&units=metric&mode=json&appid=' + appid + '&apikey=' + apikey).then(response => {
      this.setState({
        weatherData: response.data
      });
    }).catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  renderFiveDayForecast() {
    const {
      weatherData
    } = this.state;
    let elements = [];

    if (weatherData) {
      for (let i = 1; i < weatherData.list.length; i++) {
        const weather = weatherData.list[i];
        let ele = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          className: "d-flex justify-content-between align-items-center",
          key: weather.dt
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "w-50"
        }, this.state.city, ", ", moment__WEBPACK_IMPORTED_MODULE_1___default()(weather.dt * 1000).format('ddd DD MMMM')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "w-icon"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: getIcon(weather.weather[0].id)
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "d-block"
        }, weather.temp.max, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("sup", null, "\xB0C")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "d-block"
        }, weather.weather[0].main));
        elements.push(ele);
      }
    }

    return elements;
  }

  render() {
    const {
      weatherData
    } = this.state;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "weather-top rct-weather-widget overflow-hidden rounded-top"
    }, weatherData !== null && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "black-overlay weather-over py-20"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "weather-head mb-20 d-flex justify-content-between"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "align-items-start"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, weatherData.city.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, moment__WEBPACK_IMPORTED_MODULE_1___default()().format('ddd, HH:mm A'))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: getIcon(weatherData.list[0].weather[0].id)
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "weather-temp"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, weatherData.list[0].temp.day, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("sup", null, "\xB0C"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "weather-bottom"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "list-inline mb-0"
    }, this.renderFiveDayForecast())));
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

  reactHotLoader.register(getIcon, "getIcon", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\WeatherV2.js");
  reactHotLoader.register(WeatherWidgets, "WeatherWidgets", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\WeatherV2.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);