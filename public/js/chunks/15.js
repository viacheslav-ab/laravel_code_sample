(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/exenv/index.js":
/*!*************************************!*\
  !*** ./node_modules/exenv/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
/* global define */

(function () {
	'use strict';

	var canUseDOM = !!(
		typeof window !== 'undefined' &&
		window.document &&
		window.document.createElement
	);

	var ExecutionEnvironment = {

		canUseDOM: canUseDOM,

		canUseWorkers: typeof Worker !== 'undefined',

		canUseEventListeners:
			canUseDOM && !!(window.addEventListener || window.attachEvent),

		canUseViewport: canUseDOM && !!window.screen

	};

	if (true) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return ExecutionEnvironment;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}());


/***/ }),

/***/ "./node_modules/lodash/cloneDeep.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/cloneDeep.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseClone = __webpack_require__(/*! ./_baseClone */ "./node_modules/lodash/_baseClone.js");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}

module.exports = cloneDeep;


/***/ }),

/***/ "./node_modules/react-twitter-widgets/dist/components/AbstractWidget.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-twitter-widgets/dist/components/AbstractWidget.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractWidget = function (_React$Component) {
  _inherits(AbstractWidget, _React$Component);

  function AbstractWidget() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AbstractWidget);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AbstractWidget.__proto__ || Object.getPrototypeOf(AbstractWidget)).call.apply(_ref, [this].concat(args))), _this), _this.loadWidget = function () {
      var $script = __webpack_require__(/*! scriptjs */ "./node_modules/scriptjs/dist/script.js"); // eslint-disable-line global-require

      $script.ready('twitter-widgets', function () {
        if (!window.twttr) {
          // If the script tag fails to load, scriptjs.ready() will still trigger.
          // Let's avoid the JS exceptions when that happens.
          console.error('Failure to load window.twttr, aborting load.'); // eslint-disable-line no-console
          return;
        }

        // Delete existing
        AbstractWidget.removeChildren(_this.widgetWrapper);

        // Create widget
        _this.props.ready(window.twttr, _this.widgetWrapper, _this.done);
      });
    }, _this.done = function () {
      if (_this.willUnmount) {
        AbstractWidget.removeChildrenExceptLast(_this.widgetWrapper);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AbstractWidget, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.willUnmount = false;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.loadWidget();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.loadWidget();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.willUnmount = true;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('div', {
        ref: function ref(c) {
          _this2.widgetWrapper = c;
        }
      });
    }
  }], [{
    key: 'removeChildren',
    value: function removeChildren(node) {
      if (node) {
        while (node.firstChild) {
          node.removeChild(node.firstChild);
        }
      }
    }
  }, {
    key: 'removeChildrenExceptLast',
    value: function removeChildrenExceptLast(node) {
      if (node) {
        while (node.childNodes.length > 1) {
          node.removeChild(node.firstChild);
        }
      }
    }
  }]);

  return AbstractWidget;
}(_react2.default.Component);

AbstractWidget.propTypes = {
  ready: _propTypes2.default.func.isRequired
};
exports.default = AbstractWidget;

/***/ }),

/***/ "./node_modules/react-twitter-widgets/dist/components/Follow.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-twitter-widgets/dist/components/Follow.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _isEqual = __webpack_require__(/*! lodash/isEqual */ "./node_modules/lodash/isEqual.js");

var _isEqual2 = _interopRequireDefault(_isEqual);

var _cloneDeep = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");

var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

var _AbstractWidget = __webpack_require__(/*! ./AbstractWidget */ "./node_modules/react-twitter-widgets/dist/components/AbstractWidget.js");

var _AbstractWidget2 = _interopRequireDefault(_AbstractWidget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Follow = function (_React$Component) {
  _inherits(Follow, _React$Component);

  function Follow() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Follow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Follow.__proto__ || Object.getPrototypeOf(Follow)).call.apply(_ref, [this].concat(args))), _this), _this.ready = function (tw, element, done) {
      var _this$props = _this.props,
          username = _this$props.username,
          options = _this$props.options,
          onLoad = _this$props.onLoad;

      // Options must be cloned since Twitter Widgets modifies it directly

      tw.widgets.createFollowButton(username, element, (0, _cloneDeep2.default)(options)).then(function () {
        // Widget is loaded
        done();
        onLoad();
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Follow, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var _this2 = this;

      var changed = function changed(name) {
        return !(0, _isEqual2.default)(_this2.props[name], nextProps[name]);
      };
      return changed('username') || changed('options');
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_AbstractWidget2.default, { ready: this.ready });
    }
  }]);

  return Follow;
}(_react2.default.Component);

Follow.propTypes = {
  username: _propTypes2.default.string.isRequired,
  options: _propTypes2.default.object,
  onLoad: _propTypes2.default.func
};
Follow.defaultProps = {
  options: {},
  onLoad: function onLoad() {}
};
exports.default = Follow;

/***/ }),

/***/ "./node_modules/react-twitter-widgets/dist/components/Hashtag.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-twitter-widgets/dist/components/Hashtag.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _isEqual = __webpack_require__(/*! lodash/isEqual */ "./node_modules/lodash/isEqual.js");

var _isEqual2 = _interopRequireDefault(_isEqual);

var _cloneDeep = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");

var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

var _AbstractWidget = __webpack_require__(/*! ./AbstractWidget */ "./node_modules/react-twitter-widgets/dist/components/AbstractWidget.js");

var _AbstractWidget2 = _interopRequireDefault(_AbstractWidget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Hashtag = function (_React$Component) {
  _inherits(Hashtag, _React$Component);

  function Hashtag() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Hashtag);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Hashtag.__proto__ || Object.getPrototypeOf(Hashtag)).call.apply(_ref, [this].concat(args))), _this), _this.ready = function (tw, element, done) {
      var _this$props = _this.props,
          hashtag = _this$props.hashtag,
          options = _this$props.options,
          onLoad = _this$props.onLoad;

      // Options must be cloned since Twitter Widgets modifies it directly

      tw.widgets.createHashtagButton(hashtag, element, (0, _cloneDeep2.default)(options)).then(function () {
        // Widget is loaded
        done();
        onLoad();
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Hashtag, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var _this2 = this;

      var changed = function changed(name) {
        return !(0, _isEqual2.default)(_this2.props[name], nextProps[name]);
      };
      return changed('hashtag') || changed('options');
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_AbstractWidget2.default, { ready: this.ready });
    }
  }]);

  return Hashtag;
}(_react2.default.Component);

Hashtag.propTypes = {
  hashtag: _propTypes2.default.string.isRequired,
  options: _propTypes2.default.object,
  onLoad: _propTypes2.default.func
};
Hashtag.defaultProps = {
  options: {},
  onLoad: function onLoad() {}
};
exports.default = Hashtag;

/***/ }),

/***/ "./node_modules/react-twitter-widgets/dist/components/Mention.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-twitter-widgets/dist/components/Mention.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _isEqual = __webpack_require__(/*! lodash/isEqual */ "./node_modules/lodash/isEqual.js");

var _isEqual2 = _interopRequireDefault(_isEqual);

var _cloneDeep = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");

var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

var _AbstractWidget = __webpack_require__(/*! ./AbstractWidget */ "./node_modules/react-twitter-widgets/dist/components/AbstractWidget.js");

var _AbstractWidget2 = _interopRequireDefault(_AbstractWidget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mention = function (_React$Component) {
  _inherits(Mention, _React$Component);

  function Mention() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Mention);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Mention.__proto__ || Object.getPrototypeOf(Mention)).call.apply(_ref, [this].concat(args))), _this), _this.ready = function (tw, element, done) {
      var _this$props = _this.props,
          username = _this$props.username,
          options = _this$props.options,
          onLoad = _this$props.onLoad;

      // Options must be cloned since Twitter Widgets modifies it directly

      tw.widgets.createMentionButton(username, element, (0, _cloneDeep2.default)(options)).then(function () {
        // Widget is loaded
        done();
        onLoad();
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Mention, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var _this2 = this;

      var changed = function changed(name) {
        return !(0, _isEqual2.default)(_this2.props[name], nextProps[name]);
      };
      return changed('username') || changed('options');
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_AbstractWidget2.default, { ready: this.ready });
    }
  }]);

  return Mention;
}(_react2.default.Component);

Mention.propTypes = {
  username: _propTypes2.default.string.isRequired,
  options: _propTypes2.default.object,
  onLoad: _propTypes2.default.func
};
Mention.defaultProps = {
  options: {},
  onLoad: function onLoad() {}
};
exports.default = Mention;

/***/ }),

/***/ "./node_modules/react-twitter-widgets/dist/components/Share.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-twitter-widgets/dist/components/Share.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _isEqual = __webpack_require__(/*! lodash/isEqual */ "./node_modules/lodash/isEqual.js");

var _isEqual2 = _interopRequireDefault(_isEqual);

var _cloneDeep = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");

var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

var _AbstractWidget = __webpack_require__(/*! ./AbstractWidget */ "./node_modules/react-twitter-widgets/dist/components/AbstractWidget.js");

var _AbstractWidget2 = _interopRequireDefault(_AbstractWidget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Share = function (_React$Component) {
  _inherits(Share, _React$Component);

  function Share() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Share);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Share.__proto__ || Object.getPrototypeOf(Share)).call.apply(_ref, [this].concat(args))), _this), _this.ready = function (tw, element, done) {
      var _this$props = _this.props,
          url = _this$props.url,
          options = _this$props.options,
          onLoad = _this$props.onLoad;

      // Options must be cloned since Twitter Widgets modifies it directly

      tw.widgets.createShareButton(url, element, (0, _cloneDeep2.default)(options)).then(function () {
        // Widget is loaded
        done();
        onLoad();
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Share, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var _this2 = this;

      var changed = function changed(name) {
        return !(0, _isEqual2.default)(_this2.props[name], nextProps[name]);
      };
      return changed('url') || changed('options');
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_AbstractWidget2.default, { ready: this.ready });
    }
  }]);

  return Share;
}(_react2.default.Component);

Share.propTypes = {
  url: _propTypes2.default.string.isRequired,
  options: _propTypes2.default.object,
  onLoad: _propTypes2.default.func
};
Share.defaultProps = {
  options: {},
  onLoad: function onLoad() {}
};
exports.default = Share;

/***/ }),

/***/ "./node_modules/react-twitter-widgets/dist/components/Timeline.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-twitter-widgets/dist/components/Timeline.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _isEqual = __webpack_require__(/*! lodash/isEqual */ "./node_modules/lodash/isEqual.js");

var _isEqual2 = _interopRequireDefault(_isEqual);

var _cloneDeep = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");

var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

var _AbstractWidget = __webpack_require__(/*! ./AbstractWidget */ "./node_modules/react-twitter-widgets/dist/components/AbstractWidget.js");

var _AbstractWidget2 = _interopRequireDefault(_AbstractWidget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Timeline = function (_React$Component) {
  _inherits(Timeline, _React$Component);

  function Timeline() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Timeline);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Timeline.__proto__ || Object.getPrototypeOf(Timeline)).call.apply(_ref, [this].concat(args))), _this), _this.ready = function (tw, element, done) {
      var _this$props = _this.props,
          dataSource = _this$props.dataSource,
          options = _this$props.options,
          onLoad = _this$props.onLoad;

      // Options and dataSource must be cloned since Twitter Widgets modifies it directly

      tw.widgets.createTimeline((0, _cloneDeep2.default)(dataSource), element, (0, _cloneDeep2.default)(options)).then(function () {
        // Widget is loaded
        done();
        onLoad();
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Timeline, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var _this2 = this;

      var changed = function changed(name) {
        return !(0, _isEqual2.default)(_this2.props[name], nextProps[name]);
      };
      return changed('dataSource') || changed('options');
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_AbstractWidget2.default, { ready: this.ready });
    }
  }]);

  return Timeline;
}(_react2.default.Component);

Timeline.propTypes = {
  dataSource: _propTypes2.default.object.isRequired,
  options: _propTypes2.default.object,
  onLoad: _propTypes2.default.func
};
Timeline.defaultProps = {
  options: {},
  onLoad: function onLoad() {}
};
exports.default = Timeline;

/***/ }),

/***/ "./node_modules/react-twitter-widgets/dist/components/Tweet.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-twitter-widgets/dist/components/Tweet.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _isEqual = __webpack_require__(/*! lodash/isEqual */ "./node_modules/lodash/isEqual.js");

var _isEqual2 = _interopRequireDefault(_isEqual);

var _cloneDeep = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");

var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

var _AbstractWidget = __webpack_require__(/*! ./AbstractWidget */ "./node_modules/react-twitter-widgets/dist/components/AbstractWidget.js");

var _AbstractWidget2 = _interopRequireDefault(_AbstractWidget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tweet = function (_React$Component) {
  _inherits(Tweet, _React$Component);

  function Tweet() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Tweet);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tweet.__proto__ || Object.getPrototypeOf(Tweet)).call.apply(_ref, [this].concat(args))), _this), _this.ready = function (tw, element, done) {
      var _this$props = _this.props,
          tweetId = _this$props.tweetId,
          options = _this$props.options,
          onLoad = _this$props.onLoad;

      // Options must be cloned since Twitter Widgets modifies it directly

      tw.widgets.createTweet(tweetId, element, (0, _cloneDeep2.default)(options)).then(function () {
        // Widget is loaded
        done();
        onLoad();
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Tweet, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var _this2 = this;

      var changed = function changed(name) {
        return !(0, _isEqual2.default)(_this2.props[name], nextProps[name]);
      };
      return changed('tweetId') || changed('options');
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_AbstractWidget2.default, { ready: this.ready });
    }
  }]);

  return Tweet;
}(_react2.default.Component);

Tweet.propTypes = {
  tweetId: _propTypes2.default.string.isRequired,
  options: _propTypes2.default.object,
  onLoad: _propTypes2.default.func
};
Tweet.defaultProps = {
  options: {},
  onLoad: function onLoad() {}
};
exports.default = Tweet;

/***/ }),

/***/ "./node_modules/react-twitter-widgets/dist/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-twitter-widgets/dist/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tweet = exports.Timeline = exports.Share = exports.Mention = exports.Hashtag = exports.Follow = undefined;

var _exenv = __webpack_require__(/*! exenv */ "./node_modules/exenv/index.js");

var _Follow2 = __webpack_require__(/*! ./components/Follow */ "./node_modules/react-twitter-widgets/dist/components/Follow.js");

var _Follow3 = _interopRequireDefault(_Follow2);

var _Hashtag2 = __webpack_require__(/*! ./components/Hashtag */ "./node_modules/react-twitter-widgets/dist/components/Hashtag.js");

var _Hashtag3 = _interopRequireDefault(_Hashtag2);

var _Mention2 = __webpack_require__(/*! ./components/Mention */ "./node_modules/react-twitter-widgets/dist/components/Mention.js");

var _Mention3 = _interopRequireDefault(_Mention2);

var _Share2 = __webpack_require__(/*! ./components/Share */ "./node_modules/react-twitter-widgets/dist/components/Share.js");

var _Share3 = _interopRequireDefault(_Share2);

var _Timeline2 = __webpack_require__(/*! ./components/Timeline */ "./node_modules/react-twitter-widgets/dist/components/Timeline.js");

var _Timeline3 = _interopRequireDefault(_Timeline2);

var _Tweet2 = __webpack_require__(/*! ./components/Tweet */ "./node_modules/react-twitter-widgets/dist/components/Tweet.js");

var _Tweet3 = _interopRequireDefault(_Tweet2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (_exenv.canUseDOM) {
  var $script = __webpack_require__(/*! scriptjs */ "./node_modules/scriptjs/dist/script.js"); // eslint-disable-line global-require
  $script('https://platform.twitter.com/widgets.js', 'twitter-widgets');
}

exports.Follow = _Follow3.default;
exports.Hashtag = _Hashtag3.default;
exports.Mention = _Mention3.default;
exports.Share = _Share3.default;
exports.Timeline = _Timeline3.default;
exports.Tweet = _Tweet3.default;

/***/ }),

/***/ "./node_modules/scriptjs/dist/script.js":
/*!**********************************************!*\
  !*** ./node_modules/scriptjs/dist/script.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  * $script.js JS loader & dependency manager
  * https://github.com/ded/script.js
  * (c) Dustin Diaz 2014 | License MIT
  */

(function (name, definition) {
  if ( true && module.exports) module.exports = definition()
  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  else {}
})('$script', function () {
  var doc = document
    , head = doc.getElementsByTagName('head')[0]
    , s = 'string'
    , f = false
    , push = 'push'
    , readyState = 'readyState'
    , onreadystatechange = 'onreadystatechange'
    , list = {}
    , ids = {}
    , delay = {}
    , scripts = {}
    , scriptpath
    , urlArgs

  function every(ar, fn) {
    for (var i = 0, j = ar.length; i < j; ++i) if (!fn(ar[i])) return f
    return 1
  }
  function each(ar, fn) {
    every(ar, function (el) {
      fn(el)
      return 1
    })
  }

  function $script(paths, idOrDone, optDone) {
    paths = paths[push] ? paths : [paths]
    var idOrDoneIsDone = idOrDone && idOrDone.call
      , done = idOrDoneIsDone ? idOrDone : optDone
      , id = idOrDoneIsDone ? paths.join('') : idOrDone
      , queue = paths.length
    function loopFn(item) {
      return item.call ? item() : list[item]
    }
    function callback() {
      if (!--queue) {
        list[id] = 1
        done && done()
        for (var dset in delay) {
          every(dset.split('|'), loopFn) && !each(delay[dset], loopFn) && (delay[dset] = [])
        }
      }
    }
    setTimeout(function () {
      each(paths, function loading(path, force) {
        if (path === null) return callback()
        
        if (!force && !/^https?:\/\//.test(path) && scriptpath) {
          path = (path.indexOf('.js') === -1) ? scriptpath + path + '.js' : scriptpath + path;
        }
        
        if (scripts[path]) {
          if (id) ids[id] = 1
          return (scripts[path] == 2) ? callback() : setTimeout(function () { loading(path, true) }, 0)
        }

        scripts[path] = 1
        if (id) ids[id] = 1
        create(path, callback)
      })
    }, 0)
    return $script
  }

  function create(path, fn) {
    var el = doc.createElement('script'), loaded
    el.onload = el.onerror = el[onreadystatechange] = function () {
      if ((el[readyState] && !(/^c|loade/.test(el[readyState]))) || loaded) return;
      el.onload = el[onreadystatechange] = null
      loaded = 1
      scripts[path] = 2
      fn()
    }
    el.async = 1
    el.src = urlArgs ? path + (path.indexOf('?') === -1 ? '?' : '&') + urlArgs : path;
    head.insertBefore(el, head.lastChild)
  }

  $script.get = create

  $script.order = function (scripts, id, done) {
    (function callback(s) {
      s = scripts.shift()
      !scripts.length ? $script(s, id, done) : $script(s, callback)
    }())
  }

  $script.path = function (p) {
    scriptpath = p
  }
  $script.urlArgs = function (str) {
    urlArgs = str;
  }
  $script.ready = function (deps, ready, req) {
    deps = deps[push] ? deps : [deps]
    var missing = [];
    !each(deps, function (dep) {
      list[dep] || missing[push](dep);
    }) && every(deps, function (dep) {return list[dep]}) ?
      ready() : !function (key) {
      delay[key] = delay[key] || []
      delay[key][push](ready)
      req && req(missing)
    }(deps.join('|'))
    return $script
  }

  $script.done = function (idOrDone) {
    $script([null], idOrDone)
  }

  return $script
});


/***/ })

}]);