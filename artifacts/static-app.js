(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(11);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _requireUniversalModule = __webpack_require__(33);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(35);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks)["default"];
  }
});
exports["default"] = universal;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(14);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(15);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _vm = __webpack_require__(36);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(12);

var _helpers = __webpack_require__(37);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var renderFunc = userRender || (0, _utils.createDefaultRender)(Loading, Err);
  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, [{
      key: 'requireAsyncInner',
      value: function requireAsyncInner(requireAsync, props, state, context, isMount) {
        var _this2 = this;

        if (!state.mod && loadingTransition) {
          this.update({
            mod: null,
            props: props
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();
        requireAsync(props, context).then(function (mod) {
          var state = {
            mod: mod,
            props: props,
            context: context
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this2.update(state, isMount);
            }, extraDelay);
          }

          _this2.update(state, isMount);
        })["catch"](function (error) {
          return _this2.update({
            error: error,
            props: props,
            context: context
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      } // $FlowFixMe

    }, {
      key: 'init',
      value: function init(props, context) {
        var _req = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            addModule = _req.addModule,
            requireSync = _req.requireSync,
            requireAsync = _req.requireAsync,
            asyncOnly = _req.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return (0, _helpers.__update)(props, {
            error: error,
            props: props,
            context: context
          }, this._initialized);
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(props); // record the module for SSR flushing :)

        if (context.report) {
          context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          return (0, _helpers.__update)(props, {
            asyncOnly: asyncOnly,
            props: props,
            mod: mod,
            context: context
          }, this._initialized, true, true, _utils.isServer);
        }

        this.handleBefore(true, false);
        this.requireAsyncInner(requireAsync, props, {
          props: props,
          asyncOnly: asyncOnly,
          mod: mod,
          context: context
        }, context, true);
        return {
          mod: mod,
          asyncOnly: asyncOnly,
          context: context,
          props: props
        };
      }
    }], [{
      key: 'preload',

      /* eslint-enable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req2 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireAsync = _req2.requireAsync,
            requireSync = _req2.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props, context);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req3 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireSync = _req3.requireSync;

        var mod = requireSync(props, context);

        if (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._initialized) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = _this.init(_this.props, _this.context); // $FlowFixMe

      _this.state.error = null;
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._initialized = true;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2["default"])(asyncModule, options, this.props, prevProps),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(this.props, prevProps)) {
            var mod = void 0;

            try {
              mod = requireSync(this.props, this.context);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsyncInner(requireAsync, this.props, {
                mod: mod
              });
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this3.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._initialized = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return renderFunc(props, mod, isLoading, userError || error);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, currentState) {
        var _req5 = (0, _requireUniversalModule2["default"])(asyncModule, options, nextProps, currentState.props),
            requireSync = _req5.requireSync,
            shouldUpdate = _req5.shouldUpdate;

        if (isHMR() && shouldUpdate(currentState.props, nextProps)) {
          var mod = requireSync(nextProps, currentState.context);
          return _extends({}, currentState, {
            mod: mod
          });
        }

        return null;
      }
    }]);

    return UniversalComponent;
  }(_react2["default"].Component), _class.contextTypes = {
    store: _propTypes2["default"].object,
    report: _propTypes2["default"].func
  }, _temp;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(32)(module)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _reach_router__WEBPACK_IMPORTED_MODULE_0__["Link"]; });



/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(12);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(34)("" + id);
  }

  return __webpack_require__('' + id);
};

exports["default"] = requireById;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(9);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(4);

// EXTERNAL MODULE: external "@reach/router"
var router_ = __webpack_require__(5);

// CONCATENATED MODULE: /Users/jeffreychou/Desktop/jchou-web-v7/src/containers/Dynamic.js

/* harmony default export */ var Dynamic = (function () {
  return /*#__PURE__*/external_react_default.a.createElement("div", null, "This is a dynamic page! It will not be statically exported, but is available at runtime");
});
// EXTERNAL MODULE: external "react-helmet"
var external_react_helmet_ = __webpack_require__(26);

// EXTERNAL MODULE: /Users/jeffreychou/Desktop/jchou-web-v7/src/app.css
var app = __webpack_require__(46);

// CONCATENATED MODULE: /Users/jeffreychou/Desktop/jchou-web-v7/src/components/ScrollToTop.js

var ScrollToTop_ScrollToTop = function ScrollToTop(_ref) {
  var children = _ref.children,
      location = _ref.location;
  external_react_default.a.useEffect(function () {
    return window.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};
// CONCATENATED MODULE: /Users/jeffreychou/Desktop/jchou-web-v7/src/App.js







 // Any routes that start with 'dynamic' will be treated as non-static routes

Object(external_react_static_["addPrefetchExcludes"])(['dynamic']);

function App() {
  return /*#__PURE__*/external_react_default.a.createElement(external_react_static_["Root"], null, /*#__PURE__*/external_react_default.a.createElement(external_react_helmet_["Helmet"], null, /*#__PURE__*/external_react_default.a.createElement("meta", {
    charSet: "utf-8"
  }), /*#__PURE__*/external_react_default.a.createElement("title", null, "Chou"), /*#__PURE__*/external_react_default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: __webpack_require__(88)
  }), /*#__PURE__*/external_react_default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: __webpack_require__(89)
  }), /*#__PURE__*/external_react_default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: __webpack_require__(90)
  }), /*#__PURE__*/external_react_default.a.createElement("link", {
    rel: "manifest",
    href: __webpack_require__(91)
  }), /*#__PURE__*/external_react_default.a.createElement("link", {
    rel: "mask-icon",
    href: __webpack_require__(92),
    color: "#cf8000"
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    name: "msapplication-TileColor",
    content: "#ffc40d"
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    name: "theme-color",
    content: "#ffde7d"
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    name: "description",
    content: "Student at Cornell University studying Computer Science and Physics. My interests include software / fullstack dev, and data science. Built from scratch with React :O."
  })), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "content"
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Suspense, {
    fallback: /*#__PURE__*/external_react_default.a.createElement("div", null)
  }, /*#__PURE__*/external_react_default.a.createElement(router_["Router"], {
    primary: false
  }, /*#__PURE__*/external_react_default.a.createElement(ScrollToTop_ScrollToTop, {
    path: "/"
  }, /*#__PURE__*/external_react_default.a.createElement(Dynamic, {
    path: "dynamic"
  }), /*#__PURE__*/external_react_default.a.createElement(external_react_static_["Routes"], {
    path: "*"
  }))))));
}

/* harmony default export */ var src_App = __webpack_exports__["a"] = (App);

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(11);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(7);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod["default"] : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2["default"])(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props, context);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("/Users/jeffreychou/Desktop/jchou-web-v7/node_modules/react-static/lib/browser");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "404 - Oh no's! We couldn't find that page :("));
});

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _css_about_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93);
/* harmony import */ var _css_about_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_about_css__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Hey, my name is", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Jeffrey Chou"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "My name is Jeffrey Chou."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "I\u2019m a student at Cornell University studying Computer Science and Physics. I grew up in the Bay Area, CA and am passionate about learning new technologies and frameworks. As such, This website was built with React and GraphQL! Please feel free to reach out!"));
});

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_2__);




var ReactMarkdown = __webpack_require__(19);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useRouteData = Object(react_static__WEBPACK_IMPORTED_MODULE_2__["useRouteData"])(),
      posts = _useRouteData.posts;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_1__[/* Link */ "a"], {
    to: "/",
    className: "back"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    "fill-rule": "evenodd"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    transform: "rotate(45 4.001 12.985)",
    d: "M5.364 -0.236H7.364V15.764H5.364z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    transform: "scale(1 -1) rotate(45 54.613 2.021)",
    d: "M5.364 9.764H7.364V25.764H5.364z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M2 14H26V16H2z",
    transform: "translate(3 1)"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Blogs"), posts.map(function (post) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_1__[/* Link */ "a"], {
      key: post.id,
      to: "/blog/".concat(post.id),
      className: "post"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, post.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ReactMarkdown, {
      source: post.content,
      escapeHtml: false
    })));
  })));
});

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Contact Me"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "You can find me at these following links :)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/JChouCode"
  }, "Github")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.linkedin.com/in/jeffreychoucu/"
  }, "LinkedIn")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com"
  }, "Download Resume"))));
});

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94);
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_index_css__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "index"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "welcome"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    "data-text": "chou",
    id: "logo"
  }, "chou")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "blue-back"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "logo"
  }, "chou"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "contact"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "mailto: jc2573@cornell.edu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    role: "img",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Gmail icon"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.649 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068C.7 3.16 1.076 3 1.5 3H2l10 7.25L22 3h.5c.425 0 .8.162 1.069.432.27.268.431.643.431 1.068z"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.linkedin.com/in/jeffreychoucu/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    role: "img",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "LinkedIn icon"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/JChouCode"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    role: "img",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "GitHub icon"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "greeting"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Hi, my name is Jeffrey"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Current CS Major at Cornell University"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/JChouCode",
    id: "go-git"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Check out my projects"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    role: "img",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "GitHub icon"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "intern-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "intern-blue-back"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "intern"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Past internships"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "intern-table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    className: "border"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    rowspan: "2"
  }, "Company"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Position"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Date"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    className: "intern-head"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "ServiceNow"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Software Engineer Intern"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "5/20-8/20")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    className: "border intern-desc"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    colSpan: "3"
  }, "- Platform Evolution Intern")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    className: "intern-head"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "IoTeX"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Software Engineer Intern"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "6/19-9/19")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    className: "border intern-desc"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    colSpan: "3"
  }, "- Independently developed ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://codelabs.iotex.io"
  }, "https://codelabs.iotex.io"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "- Built full stack decentralized applications on blockchain")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    "class": "intern-head"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "NASA Ames"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Planetary Science Intern"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "7/16-8/18")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    className: "border intern-desc"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    colSpan: "3"
  }, "- Coauthored \u201CMars as a Remnant Planetary Embryo", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "that survived the Giant Impact Phase\u201D", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "- Developed key figures using Matplotlib in Python")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "projects"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Featured Projects"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "projects-flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "work-flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(95)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title"
  }, "Mario 3 Typescript"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Recreation of Super Mario Bros 3 using Phaser 3 in Typescript"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/JChouCode/mario3-ts"
  }, "View Source")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "work-flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(96)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title"
  }, " IoTeX Codelabs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Hosted coding tutorials for IoTeX blockchain developers"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/iotexproject/codelabs"
  }, "View Source")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "work-flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(97)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title"
  }, " RPS Bot"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Bet against this web bot for a chance to win crypto!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/JChouCode/iotex-rps"
  }, "View Source")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer-flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "logo"
  }, "chou"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "copyright"
  }, "\xA9 2019")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "contact"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "mailto: jc2573@cornell.edu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    role: "img",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Gmail icon"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.649 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068C.7 3.16 1.076 3 1.5 3H2l10 7.25L22 3h.5c.425 0 .8.162 1.069.432.27.268.431.643.431 1.068z"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.linkedin.com/in/jeffreychoucu/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    role: "img",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "LinkedIn icon"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/JChouCode"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    role: "img",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "GitHub icon"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
  })))))));
});

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _css_work_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98);
/* harmony import */ var _css_work_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_work_css__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_1__[/* Link */ "a"], {
    to: "/",
    className: "back"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    "fill-rule": "evenodd"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    transform: "rotate(45 4.001 12.985)",
    d: "M5.364 -0.236H7.364V15.764H5.364z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    transform: "scale(1 -1) rotate(45 54.613 2.021)",
    d: "M5.364 9.764H7.364V25.764H5.364z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M2 14H26V16H2z",
    transform: "translate(3 1)"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Work"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    id: "experience"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "IoTeX: Software Engineer Intern"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "I spent my last summer interning at IoTeX, an IoT blockchain startup. There, I created and solely managed codelabs.iotex.io, a community hub for IoTeX developers. I also implemented the backend GraphQL api for IoPay discovery feed and feature flag manager using MongoDB and React. Additionally, I developed decentralized apps on their blockchain with Solidity and React, such as IoTeX RPS, to demonstrate the useability of IoTeX antenna-sdk.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "NASA: Planetary Science Intern"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Coauthored \"Mars as a Remnant Planetary Embryo that Survived the Giant Impact Phase\". Performed data analysis on planet formation simulations with Matplotlib in Python. Operated Mercury v6, hybrid symplectic integrator."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Languages"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    id: "languages"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Python"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Javascript"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Typescript"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Java"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Golang"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Solidity"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "OCaml")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Frameworks"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    id: "frameworks"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "React"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "GraphQL"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Node"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Webpack"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Truffle"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "MongoDB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "PostgreSQL")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_1__[/* Link */ "a"], {
    to: "/",
    className: "back-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    "fill-rule": "evenodd"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    transform: "rotate(45 4.001 12.985)",
    d: "M5.364 -0.236H7.364V15.764H5.364z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    transform: "scale(1 -1) rotate(45 54.613 2.021)",
    d: "M5.364 9.764H7.364V25.764H5.364z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M2 14H26V16H2z",
    transform: "translate(3 1)"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Home"))));
});

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_2__);


 // import CodeBlock from "./../syntax/codeblock"

var ReactMarkdown = __webpack_require__(19);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useRouteData = Object(react_static__WEBPACK_IMPORTED_MODULE_1__["useRouteData"])(),
      post = _useRouteData.post;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, post.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/blog",
    className: "back"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Back"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    id: "rightAlign",
    x: "100%",
    y: "0",
    width: "100%",
    height: "100%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    x1: "-5",
    y1: "20%",
    x2: "0",
    y2: "50%",
    strokeWidth: "2",
    markerEnd: "url(#m)",
    stroke: "black",
    strokeLinecap: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    x1: "-5",
    y1: "80%",
    x2: "0",
    y2: "50%",
    strokeWidth: "2",
    markerEnd: "url(#m)",
    stroke: "black",
    strokeLinecap: "round"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    x1: "0",
    y1: "50%",
    x2: "100%",
    y2: "50%",
    strokeWidth: "2",
    markerEnd: "url(#m)",
    stroke: "black"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ReactMarkdown, {
    source: post.content,
    escapeHtml: false
  }));
});

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactStatic = __webpack_require__(4);

var _router = __webpack_require__(5);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _default = function _default(_ref) {
  var _ref$RouterProps = _ref.RouterProps,
      userRouterProps = _ref$RouterProps === void 0 ? {} : _ref$RouterProps;
  return {
    Root: function Root(PreviousRoot) {
      return function (_ref2) {
        var children = _ref2.children,
            rest = _objectWithoutProperties(_ref2, ["children"]);

        var basepath = (0, _reactStatic.useBasepath)();
        var staticInfo = (0, _reactStatic.useStaticInfo)();

        var RouteHandler = function RouteHandler(props) {
          return _react["default"].createElement(PreviousRoot, _extends({}, rest, props), children);
        };

        var renderedChildren = // Place a top-level router inside the root
        // This will give proper context to Link and other reach components
        _react["default"].createElement(_router.Router, _extends({}, basepath ? {
          basepath: basepath
        } : {}, userRouterProps), _react["default"].createElement(RouteHandler, {
          path: "/*"
        })); // If we're in SSR, use a manual server location


        return typeof document === 'undefined' ? _react["default"].createElement(_router.ServerLocation, {
          url: (0, _reactStatic.makePathAbsolute)(staticInfo.path)
        }, renderedChildren) : renderedChildren;
      };
    },
    Routes: function Routes(PreviousRoutes) {
      return function (props) {
        return (// Wrap Routes in location
          _react["default"].createElement(_router.Location, null, function (location) {
            return _react["default"].createElement(PreviousRoutes, _extends({
              path: "/*"
            }, props, {
              location: location
            }));
          })
        );
      };
    }
  };
};

exports["default"] = _default;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(28);
__webpack_require__(30);
module.exports = __webpack_require__(38);


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(29)["default"];

var _require = __webpack_require__(13),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (false) {}

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports
 // Plugins

var plugins = [{
  location: "__react_static_root__/node_modules/react-static-plugin-source-filesystem",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-reach-router",
  plugins: [],
  hooks: _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default()({})
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-sitemap/dist",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/",
  plugins: [],
  hooks: {}
}]; // Export em!

/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(13),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(31),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (false) {}

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_universal_component__WEBPACK_IMPORTED_MODULE_3__);
















Object(react_universal_component__WEBPACK_IMPORTED_MODULE_3__["setHasBabelPlugin"])();
var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "An error occurred loading this page's template. More information is available in the console.");
  },
  ignoreBabelRename: true
};
var t_0 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/404.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/404 */).then(__webpack_require__.bind(null, 16))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/404.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(16);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/404";
  }
}), universalOptions);
t_0.template = '__react_static_root__/src/pages/404.js';
var t_1 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/about.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/about */).then(__webpack_require__.bind(null, 17))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/about.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(17);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/about";
  }
}), universalOptions);
t_1.template = '__react_static_root__/src/pages/about.js';
var t_2 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/blog.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/blog */).then(__webpack_require__.bind(null, 18))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/blog.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(18);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/blog";
  }
}), universalOptions);
t_2.template = '__react_static_root__/src/pages/blog.js';
var t_3 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/contact.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/contact */).then(__webpack_require__.bind(null, 20))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/contact.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(20);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/contact";
  }
}), universalOptions);
t_3.template = '__react_static_root__/src/pages/contact.js';
var t_4 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/index.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/index */).then(__webpack_require__.bind(null, 21))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/index.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(21);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/index";
  }
}), universalOptions);
t_4.template = '__react_static_root__/src/pages/index.js';
var t_5 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/work.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/work */).then(__webpack_require__.bind(null, 22))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/work.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(22);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/work";
  }
}), universalOptions);
t_5.template = '__react_static_root__/src/pages/work.js';
var t_6 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/templates/post",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/templates/post */).then(__webpack_require__.bind(null, 23))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/templates/post');
  },
  resolve: function resolve() {
    return /*require.resolve*/(23);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/templates/post";
  }
}), universalOptions);
t_6.template = '__react_static_root__/src/templates/post'; // Template Map

/* harmony default export */ __webpack_exports__["default"] = ({
  '__react_static_root__/src/pages/404.js': t_0,
  '__react_static_root__/src/pages/about.js': t_1,
  '__react_static_root__/src/pages/blog.js': t_2,
  '__react_static_root__/src/pages/contact.js': t_3,
  '__react_static_root__/src/pages/index.js': t_4,
  '__react_static_root__/src/pages/work.js': t_5,
  '__react_static_root__/src/templates/post': t_6
}); // Not Found Template

var notFoundTemplate = "__react_static_root__/src/pages/404.js";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports["default"] = requireUniversalModule;

var _utils = __webpack_require__(12);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve)["catch"](reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load,
    ignoreBabelRename: true
  };
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 7,
	"./": 7,
	"./index": 7,
	"./index.js": 7
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 34;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(11);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(14);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2["default"].Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2["default"].Component);

ReportChunks.propTypes = {
  report: _propTypes2["default"].func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2["default"].func.isRequired
};
exports["default"] = ReportChunks;

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("vm");

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;

var _hoistNonReactStatics = __webpack_require__(15);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _index = __webpack_require__(3);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var __update = exports.__update = function __update(props, state, isInitialized) {
  var isMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isSync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var isServer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!isInitialized) return state;

  if (!state.error) {
    state.error = null;
  }

  return __handleAfter(props, state, isMount, isSync, isServer);
};
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */


var __handleAfter = exports.__handleAfter = function __handleAfter(props, state, isMount, isSync, isServer) {
  var mod = state.mod,
      error = state.error;

  if (mod && !error) {
    (0, _hoistNonReactStatics2["default"])(_index2["default"], mod, {
      preload: true,
      preloadWeak: true
    });

    if (props.onAfter) {
      var onAfter = props.onAfter;
      var info = {
        isMount: isMount,
        isSync: isSync,
        isServer: isServer
      };
      onAfter(info, mod);
    }
  } else if (error && props.onError) {
    props.onError(error);
  }

  return state;
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(39);

var _interopRequireDefault = __webpack_require__(40);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(41));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(42));

var React = _interopRequireWildcard(__webpack_require__(0));

var _useStaticInfo = __webpack_require__(43);
/* eslint-disable import/no-dynamic-require */


var OriginalSuspense = React.Suspense;

function Suspense(_ref) {
  var key = _ref.key,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? React.createElement(OriginalSuspense, (0, _extends2["default"])({
    key: key
  }, rest), children) : React.createElement(React.Fragment, {
    key: key
  }, children);
} // Override the suspense module to be our own


React.Suspense = Suspense;
React["default"].Suspense = Suspense;

var App = __webpack_require__(44)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, React.createElement(App, props));
  };
};

exports["default"] = _default;

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("/Users/jeffreychou/Desktop/jchou-web-v7/node_modules/react-static/lib/browser/hooks/useStaticInfo");

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);


 // Your top level component

 // Export your top level component as JSX (for static rendering)

/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Render your app

if (typeof document !== 'undefined') {
  var target = document.getElementById('root');
  var renderMethod = target.hasChildNodes() ? react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render;

  var render = function render(Comp) {
    renderMethod( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__["AppContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, null)), target);
  }; // Render!


  render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Hot Module Replacement

  if (module && module.hot) {
    module.hot.accept('./App', function () {
      render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(45)(module)))

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// Imports
var urlEscape = __webpack_require__(47);
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(48));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(49));
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(50));
var ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(51));
var ___CSS_LOADER_URL___4___ = urlEscape(__webpack_require__(52));
var ___CSS_LOADER_URL___5___ = urlEscape(__webpack_require__(53));
var ___CSS_LOADER_URL___6___ = urlEscape(__webpack_require__(54));
var ___CSS_LOADER_URL___7___ = urlEscape(__webpack_require__(55));
var ___CSS_LOADER_URL___8___ = urlEscape(__webpack_require__(56));
var ___CSS_LOADER_URL___9___ = urlEscape(__webpack_require__(57));
var ___CSS_LOADER_URL___10___ = urlEscape(__webpack_require__(58));
var ___CSS_LOADER_URL___11___ = urlEscape(__webpack_require__(59));
var ___CSS_LOADER_URL___12___ = urlEscape(__webpack_require__(60));
var ___CSS_LOADER_URL___13___ = urlEscape(__webpack_require__(61));
var ___CSS_LOADER_URL___14___ = urlEscape(__webpack_require__(62));
var ___CSS_LOADER_URL___15___ = urlEscape(__webpack_require__(63));
var ___CSS_LOADER_URL___16___ = urlEscape(__webpack_require__(64));
var ___CSS_LOADER_URL___17___ = urlEscape(__webpack_require__(65));
var ___CSS_LOADER_URL___18___ = urlEscape(__webpack_require__(66));
var ___CSS_LOADER_URL___19___ = urlEscape(__webpack_require__(67));
var ___CSS_LOADER_URL___20___ = urlEscape(__webpack_require__(68));
var ___CSS_LOADER_URL___21___ = urlEscape(__webpack_require__(69));
var ___CSS_LOADER_URL___22___ = urlEscape(__webpack_require__(70));
var ___CSS_LOADER_URL___23___ = urlEscape(__webpack_require__(71));
var ___CSS_LOADER_URL___24___ = urlEscape(__webpack_require__(72));
var ___CSS_LOADER_URL___25___ = urlEscape(__webpack_require__(73));
var ___CSS_LOADER_URL___26___ = urlEscape(__webpack_require__(74));
var ___CSS_LOADER_URL___27___ = urlEscape(__webpack_require__(75));
var ___CSS_LOADER_URL___28___ = urlEscape(__webpack_require__(76));
var ___CSS_LOADER_URL___29___ = urlEscape(__webpack_require__(77));
var ___CSS_LOADER_URL___30___ = urlEscape(__webpack_require__(78));
var ___CSS_LOADER_URL___31___ = urlEscape(__webpack_require__(79));
var ___CSS_LOADER_URL___32___ = urlEscape(__webpack_require__(80));
var ___CSS_LOADER_URL___33___ = urlEscape(__webpack_require__(81));
var ___CSS_LOADER_URL___34___ = urlEscape(__webpack_require__(82));
var ___CSS_LOADER_URL___35___ = urlEscape(__webpack_require__(83));
var ___CSS_LOADER_URL___36___ = urlEscape(__webpack_require__(84));
var ___CSS_LOADER_URL___37___ = urlEscape(__webpack_require__(85));
var ___CSS_LOADER_URL___38___ = urlEscape(__webpack_require__(86));
var ___CSS_LOADER_URL___39___ = urlEscape(__webpack_require__(87));

// Module
exports.push([module.i, "* {\n  scroll-behavior: smooth;\n}\n\nbody {\n  font-family: Graphik, system-ui, -apple-system, BlinkMacSystemFont, \"Helvetica Neue\",\n    \"Lucida Grande\", \"Segoe UI\";\n  font-weight: normal;\n  font-size: 16px;\n  color: white;\n  margin: 0;\n  padding: 0;\n}\n\n#loading {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 50px;\n  font-weight: bold;\n  text-align: center;\n  color: white;\n}\n\n#loading #eyes {\n  display: inline-block;\n  -webkit-animation: hover 250ms infinite;\n          animation: hover 250ms infinite;\n}\n\n@font-face {\n  font-family: 'Ubuntu';\n  src: url(" + ___CSS_LOADER_URL___0___ + ") format('woff2'),\n    url(" + ___CSS_LOADER_URL___1___ + ") format('woff');\n  font-weight: bold;\n  font-style: italic;\n}\n\n@font-face {\n  font-family: 'Ubuntu';\n  src: url(" + ___CSS_LOADER_URL___2___ + ") format('woff2'),\n    url(" + ___CSS_LOADER_URL___3___ + ") format('woff');\n  font-weight: 300;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Ubuntu';\n  src: url(" + ___CSS_LOADER_URL___4___ + ") format('woff2'),\n    url(" + ___CSS_LOADER_URL___5___ + ") format('woff');\n  font-weight: normal;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Ubuntu';\n  src: url(" + ___CSS_LOADER_URL___6___ + ") format('woff2'),\n    url(" + ___CSS_LOADER_URL___7___ + ") format('woff');\n  font-weight: 300;\n  font-style: italic;\n}\n\n@font-face {\n  font-family: 'Ubuntu';\n  src: url(" + ___CSS_LOADER_URL___8___ + ") format('woff2'),\n    url(" + ___CSS_LOADER_URL___9___ + ") format('woff');\n  font-weight: bold;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Ubuntu';\n  src: url(" + ___CSS_LOADER_URL___10___ + ") format('woff2'),\n    url(" + ___CSS_LOADER_URL___11___ + ") format('woff');\n  font-weight: 500;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Ubuntu';\n  src: url(" + ___CSS_LOADER_URL___12___ + ") format('woff2'),\n    url(" + ___CSS_LOADER_URL___13___ + ") format('woff');\n  font-weight: normal;\n  font-style: italic;\n}\n\n@font-face {\n  font-family: 'Ubuntu';\n  src: url(" + ___CSS_LOADER_URL___14___ + ") format('woff2'),\n    url(" + ___CSS_LOADER_URL___15___ + ") format('woff');\n  font-weight: 500;\n  font-style: italic;\n}\n\n\n@font-face {\n  font-family: 'Graphik';\n  src: url(" + ___CSS_LOADER_URL___16___ + ") format('woff2'),\n    url(" + ___CSS_LOADER_URL___17___ + ") format('woff');\n  font-weight: 200;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Graphik';\n  src: url(" + ___CSS_LOADER_URL___18___ + ") format('woff2'),\n    url(" + ___CSS_LOADER_URL___19___ + ") format('woff');\n  font-weight: 300;\n  font-style: italic;\n}\n\n@font-face {\n  font-family: 'Graphik';\n  src: url(" + ___CSS_LOADER_URL___20___ + ") format('woff2'),\n    url(" + ___CSS_LOADER_URL___21___ + ") format('woff');\n  font-weight: 500;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Graphik';\n  src: url(" + ___CSS_LOADER_URL___22___ + ") format('woff2'),\n    url(" + ___CSS_LOADER_URL___23___ + ") format('woff');\n  font-weight: 100;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Graphik';\n  src: url(" + ___CSS_LOADER_URL___24___ + ") format('woff2'),\n    url(" + ___CSS_LOADER_URL___25___ + ") format('woff');\n  font-weight: 300;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Graphik';\n  src: url(" + ___CSS_LOADER_URL___26___ + ") format('woff2'),\n    url(" + ___CSS_LOADER_URL___27___ + ") format('woff');\n  font-weight: 200;\n  font-style: italic;\n}\n\n@font-face {\n  font-family: 'Graphik';\n  src: url(" + ___CSS_LOADER_URL___28___ + ") format('woff2'),\n    url(" + ___CSS_LOADER_URL___29___ + ") format('woff');\n  font-weight: 100;\n  font-style: italic;\n}\n\n@font-face {\n  font-family: 'Graphik';\n  src: url(" + ___CSS_LOADER_URL___30___ + ") format('woff2'),\n    url(" + ___CSS_LOADER_URL___31___ + ") format('woff');\n  font-weight: 500;\n  font-style: italic;\n}\n\n@font-face {\n  font-family: 'Graphik';\n  src: url(" + ___CSS_LOADER_URL___32___ + ") format('woff2'),\n    url(" + ___CSS_LOADER_URL___33___ + ") format('woff');\n  font-weight: 600;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Graphik';\n  src: url(" + ___CSS_LOADER_URL___34___ + ") format('woff2'),\n    url(" + ___CSS_LOADER_URL___35___ + ") format('woff');\n  font-weight: 600;\n  font-style: italic;\n}\n\n@font-face {\n  font-family: 'Graphik';\n  src: url(" + ___CSS_LOADER_URL___36___ + ") format('woff2'),\n    url(" + ___CSS_LOADER_URL___37___ + ") format('woff');\n  font-weight: normal;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Graphik';\n  src: url(" + ___CSS_LOADER_URL___38___ + ") format('woff2'),\n    url(" + ___CSS_LOADER_URL___39___ + ") format('woff');\n  font-weight: normal;\n  font-style: italic;\n}\n\n\n\n\n@-webkit-keyframes hover {\n  0% {\n    transform: translateY(0);\n  }\n\n  50% {\n    transform: translateY(-4px);\n  }\n\n  100% {\n    transform: translateY(0);\n  }\n}\n\n\n\n\n@keyframes hover {\n  0% {\n    transform: translateY(0);\n  }\n\n  50% {\n    transform: translateY(-4px);\n  }\n\n  100% {\n    transform: translateY(0);\n  }\n}", ""]);



/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Ubuntu-BoldItalic.180d4bba.woff2";

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Ubuntu-BoldItalic.c424fe8f.woff";

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Ubuntu-Light.7f2b2adb.woff2";

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Ubuntu-Light.620afaea.woff";

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Ubuntu.426be866.woff2";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Ubuntu.0fb2fa83.woff";

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Ubuntu-LightItalic.2444b176.woff2";

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Ubuntu-LightItalic.da2d38e7.woff";

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Ubuntu-Bold.62701b5c.woff2";

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Ubuntu-Bold.4044a3c1.woff";

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Ubuntu-Medium.45d7e58b.woff2";

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Ubuntu-Medium.27205ded.woff";

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Ubuntu-Italic.ee5c86c9.woff2";

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Ubuntu-Italic.a0ea00aa.woff";

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Ubuntu-MediumItalic.55359415.woff2";

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Ubuntu-MediumItalic.4ef2bf5c.woff";

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Graphik-Extralight.bb232df2.woff2";

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Graphik-Extralight.6b319c6c.woff";

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Graphik-LightItalic.5d038a8a.woff2";

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Graphik-LightItalic.fef68480.woff";

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Graphik-Medium.d92a58e9.woff2";

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Graphik-Medium.320dfef1.woff";

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Graphik-Thin.d4b25fe4.woff2";

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Graphik-Thin.a1738728.woff";

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Graphik-Light.51daf1e0.woff2";

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Graphik-Light.6dfde0e1.woff";

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Graphik-ExtralightItalic.bf101a55.woff2";

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Graphik-ExtralightItalic.50e465dd.woff";

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Graphik-ThinItalic.e79f0c52.woff2";

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Graphik-ThinItalic.5528414e.woff";

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Graphik-MediumItalic.83cdbcab.woff2";

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Graphik-MediumItalic.6959e616.woff";

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Graphik-Semibold.1c8df452.woff2";

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Graphik-Semibold.1b205519.woff";

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Graphik-SemiboldItalic.b80f4c8d.woff2";

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Graphik-SemiboldItalic.befa974b.woff";

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Graphik-Regular.13c6337c.woff2";

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Graphik-Regular.475fb1f8.woff";

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Graphik-RegularItalic.4595d07b.woff2";

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Graphik-RegularItalic.fea48e83.woff";

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABgFBMVEUAAAD///9BLBWocje1ejwGBAIAAAAAAAAAAAAAAAAAAAAqHA1eQCBtTChYPB0gFQoAAAAAAAAAAAAfFQp4UyloRiIUDQYAAAAbFQ47Lx8iGxIAAAA5JhImGQw8MR9xWzuLcEhhTjIAAAAAAAA8KBMoGgxbSi86Lh4BAAA8KBNSNhoTDAYEAgElHhOIbkdwVjRlRCGcaTNlRCEFAwIAAAACAgFELhYCAQABAQAnGgxsSSOPYC8YEAgAAAAAAAATDQYlGQwcEwl4USjLiUS4fD2dazS+gT/JiEPGhkLHh0K0ejtDLRXRnVvsuXPGklO2hk2ph1fRqW6kf0+jcjvQnl69mWOujFrHoGe9jFFuWTnnunjTqW3UoF+ig1VbSjC4lF/LllbIoWiYe0/KjkvMmlu0iFDQnFvKjEiyeDtINyBYQCOcaTTGhkKxeDuAViqQYjCxeTyGWy2QYTDKiUOocTepcjiJXS5XOx2TYzFdPx9IMBhlRCKncTjHh0LIh0P///8Uc9DrAAAATHRSTlMAAAAAAAAEHiIbAljZ5c5BBQMBVeXVPUSbgZoXsY/1/PzlPgqxkP3bXtLGVQbO/vvn/u9qMdrRJ3Xj/f3KBzKEioqKioqKioqKioqN/4DaxwAAAAFiS0dEAf8CLd4AAAAHdElNRQfjChwVLSQKv+yvAAAAoklEQVQY02NgIBawsXNwciHxubh5ePn4GcFsAUEBIUZhER9fP1ExJiBfXEJSSlpQxj8gMChYlhkoICevoKikrBISGhYeocoCFIiMilZT19CMiY2LT9DS1mFl0NVLTNI3MExOSU1LzzAyFmQwMc3Mys7JzcsvKCwqLjEzZxCwsLQqLSuvqKyqrqmts7ZhYLC1s3dwdHJ2cXVz9/D08ibaK3gAAGGsH48cho11AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTEwLTI4VDIxOjQ1OjM2KzAxOjAwKbHZkwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0xMC0yOFQyMTo0NTozNiswMTowMFjsYS8AAABXelRYdFJhdyBwcm9maWxlIHR5cGUgaXB0YwAAeJzj8gwIcVYoKMpPy8xJ5VIAAyMLLmMLEyMTS5MUAxMgRIA0w2QDI7NUIMvY1MjEzMQcxAfLgEigSi4A6hcRdPJCNZUAAAAASUVORK5CYII="

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = "data:application/manifest+json;base64,ewogICAgIm5hbWUiOiAiamNob3UuZGV2IiwKICAgICJzaG9ydF9uYW1lIjogImpjaG91LmRldiIsCiAgICAiaWNvbnMiOiBbCiAgICAgICAgewogICAgICAgICAgICAic3JjIjogIi9hbmRyb2lkLWNocm9tZS0xOTJ4MTkyLnBuZyIsCiAgICAgICAgICAgICJzaXplcyI6ICIxOTJ4MTkyIiwKICAgICAgICAgICAgInR5cGUiOiAiaW1hZ2UvcG5nIgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgICAic3JjIjogIi9hbmRyb2lkLWNocm9tZS0zODR4Mzg0LnBuZyIsCiAgICAgICAgICAgICJzaXplcyI6ICIzODR4Mzg0IiwKICAgICAgICAgICAgInR5cGUiOiAiaW1hZ2UvcG5nIgogICAgICAgIH0KICAgIF0sCiAgICAidGhlbWVfY29sb3IiOiAiI2ZmZGU3ZCIsCiAgICAiYmFja2dyb3VuZF9jb2xvciI6ICIjZmZkZTdkIiwKICAgICJkaXNwbGF5IjogInN0YW5kYWxvbmUiCn0K"

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiB3aWR0aD0iNDY3LjAwMDAwMHB0IiBoZWlnaHQ9IjQ2Ny4wMDAwMDBwdCIgdmlld0JveD0iMCAwIDQ2Ny4wMDAwMDAgNDY3LjAwMDAwMCIKIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiPgo8bWV0YWRhdGE+CkNyZWF0ZWQgYnkgcG90cmFjZSAxLjExLCB3cml0dGVuIGJ5IFBldGVyIFNlbGluZ2VyIDIwMDEtMjAxMwo8L21ldGFkYXRhPgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCw0NjcuMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDApIgpmaWxsPSIjMDAwMDAwIiBzdHJva2U9Im5vbmUiPgo8cGF0aCBkPSJNMjMzMCAzNzIwIGwwIC04MCAtODAgMCAtODAgMCAwIC04NSAwIC04NSAtODUgMCAtODUgMCAwIC04NSAwIC04NQotODUgMCAtODUgMCAwIC00MTUgMCAtNDE1IC04MCAwIC04MCAwIDAgLTg1IDAgLTg1IC04NSAwIC04NSAwIDAgMTcwIDAgMTcwCi0xNjUgMCAtMTY1IDAgMCAyNTAgMCAyNTAgLTE3MCAwIC0xNzAgMCAwIC04NSAwIC04NSAtODAgMCAtODAgMCAwIDg1IDAgODUKLTE3MCAwIC0xNzAgMCAwIC04NSAwIC04NSAtMTY1IDAgLTE2NSAwIDAgLTQxNSAwIC00MTUgODUgMCA4NSAwIDAgLTg1IDAgLTg1CjgwIDAgODAgMCAwIC0xNjUgMCAtMTY1IDg1IDAgODUgMCAwIC04NSAwIC04NSAxNjUgMCAxNjUgMCAwIC04NSAwIC04NSA1MDAgMAo1MDAgMCAwIDg1IDAgODUgODUgMCA4NSAwIDAgMTY1IDAgMTY1IC04NSAwIC04NSAwIDAgLTgwIDAgLTgwIC04MCAwIC04MCAwIDAKLTg1IDAgLTg1IC0yNTAgMCAtMjUwIDAgMCA4NSAwIDg1IC04NSAwIC04NSAwIDAgODAgMCA4MCA4NSAwIDg1IDAgMCA4NSAwIDg1CjgwIDAgODAgMCAwIDg1IDAgODUgMzM1IDAgMzM1IDAgMCA1MDAgMCA1MDAgODUgMCA4NSAwIDAgODAgMCA4MCA4MCAwIDgwIDAgMAo4NSAwIDg1IDg1IDAgODUgMCAwIDg1IDAgODUgMjUwIDAgMjUwIDAgMCAtODUgMCAtODUgODUgMCA4NSAwIDAgLTg1IDAgLTg1CjgwIDAgODAgMCAwIC04MCAwIC04MCA4NSAwIDg1IDAgMCAtNDIwIDAgLTQyMCAxNjUgMCAxNjUgMCAwIC0xNjUgMCAtMTY1IDg1CjAgODUgMCAwIC04NSAwIC04NSA4NSAwIDg1IDAgMCAtMTY1IDAgLTE2NSA4MCAwIDgwIDAgMCAtODUgMCAtODUgMTcwIDAgMTcwCjAgMCAxNzAgMCAxNzAgLTg1IDAgLTg1IDAgMCA4MCAwIDgwIC04NSAwIC04NSAwIDAgMTcwIDAgMTcwIC04MCAwIC04MCAwIDAKODAgMCA4MCAtODUgMCAtODUgMCAwIDg1IDAgODUgLTE2NSAwIC0xNjUgMCAwIDQxNSAwIDQxNSAtODUgMCAtODUgMCAwIDg1IDAKODUgLTg1IDAgLTg1IDAgMCA4NSAwIDg1IC04MCAwIC04MCAwIDAgODAgMCA4MCAtNDIwIDAgLTQyMCAwIDAgLTgweiBtLTE2NjAKLTkxNSBsMCAtMTY1IDgwIDAgODAgMCAwIDE2NSAwIDE2NSA4NSAwIDg1IDAgMCAtMjUwIDAgLTI1MCAtODUgMCAtODUgMCAwCi04NSAwIC04NSAxNzAgMCAxNzAgMCAwIDg1IDAgODUgODAgMCA4MCAwIDAgLTE2NSAwIC0xNjUgLTE2NSAwIC0xNjUgMCAwIC04NQowIC04NSAtMTY1IDAgLTE2NSAwIDAgODUgMCA4NSAtMTcwIDAgLTE3MCAwIDAgODAgMCA4MCAtODAgMCAtODAgMCAwIDI1MCAwCjI1MCA4MCAwIDgwIDAgMCAtODAgMCAtODAgODUgMCA4NSAwIDAgMTY1IDAgMTY1IDg1IDAgODUgMCAwIC0xNjV6Ii8+CjxwYXRoIGQ9Ik0yMzMwIDMwNTUgbDAgLTg1IDg1IDAgODUgMCAwIC04NSAwIC04NSA4NSAwIDg1IDAgMCA4NSAwIDg1IC04NSAwCi04NSAwIDAgODUgMCA4NSAtODUgMCAtODUgMCAwIC04NXoiLz4KPHBhdGggZD0iTTMwMDAgMzA1NSBsMCAtODUgLTg1IDAgLTg1IDAgMCAtODUgMCAtODUgODUgMCA4NSAwIDAgODUgMCA4NSA4NSAwCjg1IDAgMCA4NSAwIDg1IC04NSAwIC04NSAwIDAgLTg1eiIvPgo8cGF0aCBkPSJNMjUwMCAyNDcwIGwwIC0xNzAgMjUwIDAgMjUwIDAgMCAxNzAgMCAxNzAgLTg1IDAgLTg1IDAgMCAtODUgMCAtODUKLTgwIDAgLTgwIDAgMCA4NSAwIDg1IC04NSAwIC04NSAwIDAgLTE3MHoiLz4KPHBhdGggZD0iTTIxNzAgMTgwNSBsMCAtMTY1IDE2NSAwIDE2NSAwIDAgLTg1IDAgLTg1IDI1MCAwIDI1MCAwIDAgODUgMCA4NQoxNjUgMCAxNjUgMCAwIDE2NSAwIDE2NSAtODAgMCAtODAgMCAwIC04NSAwIC04NSAtMTcwIDAgLTE3MCAwIDAgLTgwIDAgLTgwCi04MCAwIC04MCAwIDAgODAgMCA4MCAtMTcwIDAgLTE3MCAwIDAgODUgMCA4NSAtODAgMCAtODAgMCAwIC0xNjV6Ii8+CjwvZz4KPC9zdmc+Cg=="

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// Module
exports.push([module.i, ".header-wrapper {\n  color: white;\n}", ""]);



/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// Module
exports.push([module.i, ".index {\n  position: relative;\n  min-height: 100vh;\n  background: white;\n  color: rgb(5, 15, 25);\n}\n\n.welcome {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: #1652F0;\n  z-index: 100;\n  opacity: 0;\n  visibility: hidden;\n  -webkit-animation: 1s delay-fadeout cubic-bezier(0.23, 1, 0.320, 1);\n          animation: 1s delay-fadeout cubic-bezier(0.23, 1, 0.320, 1);\n}\n\n.welcome #logo {\n  position: absolute;\n  color: rgba(0, 0, 0, .3);\n  top: 50vh;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.welcome #logo:before {\n  content: attr(data-text);\n  position: absolute;\n  overflow: hidden;\n  max-width: 7em;\n  white-space: nowrap;\n  color: #fff;\n  -webkit-animation: loading 3s linear;\n          animation: loading 3s linear;\n}\n\n@-webkit-keyframes loading {\n  0% {\n    max-width: 0;\n  }\n}\n\n@keyframes loading {\n  0% {\n    max-width: 0;\n  }\n}\n\n.blue-back {\n  background-color: #1652F0;\n  color: white;\n  padding-bottom: 50px;\n  margin: 0;\n}\n\n.top {\n  margin-left: 20%;\n  margin-right: 20%;\n  margin-bottom: 5%;\n  padding-top: 2rem;\n  display: flex;\n  justify-content: space-between;\n  align-content: center;\n  align-items: center;\n}\n\n#logo {\n  font-size: 30px;\n  font-family: Ubuntu\n}\n\n.contact {\n  display: flex;\n  align-content: center;\n  align-items: center;\n}\n\n.contact a svg {\n  fill: white;\n  height: 25px;\n  margin-left: 1rem;\n}\n\nsvg {\n  transition: 1s all cubic-bezier(0.075, 0.82, 0.165, 1)\n}\n\n.contact a:hover svg {\n  opacity: 0.7\n}\n\nh1 {\n  font-size: 40px;\n  font-weight: 500;\n  margin-bottom: 1rem;\n}\n\nh2 {\n  font-weight: 400;\n  font-size: 19px;\n}\n\nh3 {\n  margin-top: 0;\n  margin-bottom: 16px;\n  color: white;\n  font-weight: 500;\n  font-size: 22px;\n}\n\nh4 {\n  font-size: 27px;\n}\n\n.intern-blue-back {\n  z-index: 1;\n  position: absolute;\n  top: 0px;\n  background-color: rgb(22, 82, 240);\n  height: 200px;\n  width: 100%;\n}\n\n.intern-wrapper {\n  margin: 0;\n  position: relative;\n}\n\n.intern {\n  z-index: 2;\n  position: relative;\n  width: 60%;\n  max-width: 700px;\n  margin: auto;\n  flex-shrink: 0;\n  flex-direction: column;\n  padding: 0px;\n\n}\n\n.projects {\n  position: relative;\n  width: 80%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 100px;\n  margin-bottom: 150px;\n  text-align: center;\n}\n\n.projects-flex {\n  display: flex;\n  margin-top: 60px;\n  max-width: 900px;\n  margin-left: auto;\n  margin-right: auto;\n  justify-content: space-between;\n}\n\n\n\n.work-flex .icon {\n  position: relative;\n  height: 70px;\n  width: 70px;\n  border-radius: 9px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 25px;\n  box-shadow:\n    rgba(17, 51, 83, 0.137) 4px 4px 12px 4px;\n}\n\n.icon img {\n  margin: 0;\n  position: absolute;\n  width: 50%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.work-flex .title {\n  font-weight: 500;\n  font-size: 17px;\n}\n\n.work-flex p {\n  margin-top: 10px;\n  margin-bottom: 7px;\n  font-size: 13px;\n  color: #898989;\n  font-weight: 400;\n  max-width: 262px;\n}\n\n.work-flex a {\n  text-decoration: none;\n  font-size: 13px;\n  color: #1652F0;\n  font-weight: 500;\n  transition: 1s all cubic-bezier(0.23, 1, 0.320, 1);\n}\n\n.work-flex a:hover {\n  opacity: 0.7;\n}\n\n.intern-table {\n  width: 100%;\n  background-color: white;\n  margin: 0px auto;\n  border-spacing: 0px;\n  border-collapse: separate;\n  caption-side: top;\n  flex-shrink: 0;\n  flex-direction: column;\n  border-radius: 4px;\n  box-shadow:\n    rgba(17, 51, 83, 0.068) 4px 4px 12px 4px;\n}\n\n.intern-table thead tr th:nth-child(1) {\n  padding-left: 32px;\n}\n\n\n\nthead {\n  display: table-header-group\n}\n\nth {\n  font-size: 14px;\n  font-weight: 400;\n  color: #898989;\n  padding: 16px 16px 16px 0px\n}\n\ntr.border td,\nth {\n  border-bottom: 1px solid rgb(236, 239, 241);\n}\n\n.border {\n  width: 100%;\n  border-bottom: 1px solid rgb(236, 239, 241);\n}\n\n.intern-desc td {\n  font-size: 14px;\n  color: #898989;\n  margin: 0;\n  padding: 0px 0px px 0px;\n}\n\n.intern-desc a {\n  color: #898989;\n  text-decoration: none;\n  transition: 1s all cubic-bezier();\n}\n\n\n\nth {\n  text-align: left;\n}\n\ntd:first-child {\n  padding-left: 32px;\n}\n\ntd {\n  text-align: left;\n  padding: 14px 48px 14px 0px;\n}\n\n.intern-head td {\n  padding-bottom: 0px;\n  font-size: 16px;\n}\n\n.intern-head td:first-child {\n  font-weight: 400;\n}\n\n#go-git {\n  background-color: #05B169;\n  display: inline-flex;\n  align-content: center;\n  align-items: center;\n  border-radius: 5px;\n  margin-top: 1.1rem;\n  justify-content: space-around;\n  color: white;\n  text-decoration: none;\n  padding: 0.8rem;\n  padding-left: 1.2rem;\n  padding-right: 1.2rem;\n  transition: 1s all cubic-bezier(0.23, 1, 0.320, 1)\n}\n\n#go-git:hover {\n  background-color: rgb(0, 155, 90);\n}\n\n#go-git div {\n  display: inline-block;\n  font-size: 1rem;\n}\n\n#go-git svg {\n  margin-left: 0.5rem;\n  display: inline-block;\n  fill: white;\n  height: 1.5rem;\n}\n\n.greeting {\n  text-align: center;\n}\n\n.footer {\n  margin-top: 90px;\n  padding-top: 40px;\n  padding-bottom: 40px;\n  padding-left: 20%;\n  padding-right: 20%;\n  background-color: #E9F6FF;\n}\n\n.footer #copyright {\n  font-size: 12px;\n}\n\n.footer-flex {\n  display: flex;\n  justify-content: space-between;\n  align-content: center;\n  align-items: center;\n}\n\n.footer-flex .contact svg {\n  fill: #020001;\n}\n\n@-webkit-keyframes marquee {\n  0% {\n    transform: translate(0, 0);\n  }\n\n  100% {\n    transform: translate(-150%, 0);\n  }\n}\n\n@keyframes marquee {\n  0% {\n    transform: translate(0, 0);\n  }\n\n  100% {\n    transform: translate(-150%, 0);\n  }\n}\n\n@-webkit-keyframes bounceL {\n  0% {\n    transform: translateX(0);\n  }\n\n  50% {\n    transform: translateX(-1%);\n  }\n\n  100% {\n    transform: translateX(0);\n  }\n}\n\n@keyframes bounceL {\n  0% {\n    transform: translateX(0);\n  }\n\n  50% {\n    transform: translateX(-1%);\n  }\n\n  100% {\n    transform: translateX(0);\n  }\n}\n\n@-webkit-keyframes bounceR {\n  0% {\n    transform: translateX(-1%);\n  }\n\n  50% {\n    transform: translateX(0);\n  }\n\n  100% {\n    transform: translateX(-1%);\n  }\n\n}\n\n@keyframes bounceR {\n  0% {\n    transform: translateX(-1%);\n  }\n\n  50% {\n    transform: translateX(0);\n  }\n\n  100% {\n    transform: translateX(-1%);\n  }\n\n}\n\n@-webkit-keyframes left-right {\n\n  50% {\n    transform: translate3d(50%, 0, 0);\n  }\n\n  100% {\n    transform: none\n  }\n}\n\n@keyframes left-right {\n\n  50% {\n    transform: translate3d(50%, 0, 0);\n  }\n\n  100% {\n    transform: none\n  }\n}\n\n@-webkit-keyframes right-left {\n  50% {\n    transform: translate3d(-50%, 0, 0);\n  }\n\n  100% {\n    transform: none;\n  }\n}\n\n@keyframes right-left {\n  50% {\n    transform: translate3d(-50%, 0, 0);\n  }\n\n  100% {\n    transform: none;\n  }\n}\n\n@-webkit-keyframes movej {\n  0% {\n    transform: none;\n  }\n\n  80% {\n    transform: none;\n  }\n\n  100% {\n    transform: translateX(6.65em);\n  }\n}\n\n@keyframes movej {\n  0% {\n    transform: none;\n  }\n\n  80% {\n    transform: none;\n  }\n\n  100% {\n    transform: translateX(6.65em);\n  }\n}\n\n@-webkit-keyframes fadein {\n  0% {\n    opacity: 0\n  }\n\n  50% {\n    opacity: 0\n  }\n\n  100% {\n    opacity: 1\n  }\n}\n\n@keyframes fadein {\n  0% {\n    opacity: 0\n  }\n\n  50% {\n    opacity: 0\n  }\n\n  100% {\n    opacity: 1\n  }\n}\n\n\n@-webkit-keyframes hover {\n  0% {\n    transform: translateY(0);\n  }\n\n  50% {\n    transform: translateY(-4px);\n  }\n\n  100% {\n    transform: translateY(0);\n  }\n}\n\n\n@keyframes hover {\n  0% {\n    transform: translateY(0);\n  }\n\n  50% {\n    transform: translateY(-4px);\n  }\n\n  100% {\n    transform: translateY(0);\n  }\n}\n\n@-webkit-keyframes fadeout {\n  0% {\n    opacity: 1;\n    display: block;\n  }\n\n  100% {\n    opacity: 0;\n    display: none;\n    visibility: hidden;\n  }\n}\n\n@keyframes fadeout {\n  0% {\n    opacity: 1;\n    display: block;\n  }\n\n  100% {\n    opacity: 0;\n    display: none;\n    visibility: hidden;\n  }\n}\n\n@-webkit-keyframes delay-fadeout {\n  0% {\n    opacity: 1;\n    visibility: visible;\n  }\n\n  80% {\n    opacity: 1;\n    visibility: visible;\n  }\n\n  100% {\n    opacity: 0;\n    visibility: hidden;\n  }\n}\n\n@keyframes delay-fadeout {\n  0% {\n    opacity: 1;\n    visibility: visible;\n  }\n\n  80% {\n    opacity: 1;\n    visibility: visible;\n  }\n\n  100% {\n    opacity: 0;\n    visibility: hidden;\n  }\n}\n\n@-webkit-keyframes introtext {\n  0% {\n    transform: translate3D(0, 180%, 0);\n  }\n\n  100% {\n    transform: translate3D(0, 0, 0);\n  }\n}\n\n@keyframes introtext {\n  0% {\n    transform: translate3D(0, 180%, 0);\n  }\n\n  100% {\n    transform: translate3D(0, 0, 0);\n  }\n}\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-text-stroke: 2px #edeae3;\n    -ms-text-stroke: 2px #edeae3;\n    color:\n      #020001;\n    transform: rotate(0deg);\n  }\n\n  25% {\n    -webkit-text-stroke: none;\n    -ms-text-stroke: none;\n    color:\n      #edeae3;\n    transform: rotate(90deg);\n  }\n\n  50% {\n    -webkit-text-stroke: 2px #edeae3;\n    color:\n      #020001;\n    transform: rotate(180deg);\n  }\n\n  75% {\n    -webkit-text-stroke: none;\n    color:\n      #edeae3;\n    transform: rotate(270deg);\n  }\n\n  100% {\n    -webkit-text-stroke: 2px #edeae3;\n    color:\n      #020001;\n    transform: rotate(1turn);\n  }\n}\n\n@keyframes spin {\n  0% {\n    -webkit-text-stroke: 2px #edeae3;\n    -ms-text-stroke: 2px #edeae3;\n    color:\n      #020001;\n    transform: rotate(0deg);\n  }\n\n  25% {\n    -webkit-text-stroke: none;\n    -ms-text-stroke: none;\n    color:\n      #edeae3;\n    transform: rotate(90deg);\n  }\n\n  50% {\n    -webkit-text-stroke: 2px #edeae3;\n    color:\n      #020001;\n    transform: rotate(180deg);\n  }\n\n  75% {\n    -webkit-text-stroke: none;\n    color:\n      #edeae3;\n    transform: rotate(270deg);\n  }\n\n  100% {\n    -webkit-text-stroke: 2px #edeae3;\n    color:\n      #020001;\n    transform: rotate(1turn);\n  }\n}\n\n@media only screen and (max-width: 600px) {\n  h1 {\n    font-size: 30px;\n  }\n\n  h2 {\n    font-size: 15px;\n  }\n\n  .intern {\n    width: 95%;\n  }\n}", ""]);



/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/mario.c141d92f.png";

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/iotex.6f5bd3f1.png";

/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// Module
exports.push([module.i, "", ""]);



/***/ })
/******/ ]);
});