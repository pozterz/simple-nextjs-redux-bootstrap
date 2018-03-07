module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_navigation_json__ = __webpack_require__("./config/navigation.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_navigation_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__config_navigation_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__("./config/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_reactstrap__);
var _jsxFileName = 'C:\\Users\\Pozterz\\Desktop\\Workspace\\ecomnext\\components\\Header.js',
    _this = this;







var Header = function Header() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'header',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_4_reactstrap__["Navbar"],
      { className: 'navbar-expand-sm navbar-inverse', __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4_reactstrap__["NavbarBrand"],
        { to: '/', __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          }
        },
        __WEBPACK_IMPORTED_MODULE_3__config__["a" /* config */].appName
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_reactstrap__["NavbarToggler"], { onClick: _this.toggle, __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4_reactstrap__["Collapse"],
        { isOpen: true, navbar: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4_reactstrap__["Nav"],
          { navbar: true, __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            }
          },
          __WEBPACK_IMPORTED_MODULE_2__config_navigation_json___default.a.Menu.map(function (menu) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_4_reactstrap__["NavItem"],
              { key: menu.label, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 15
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
                { href: menu.link, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_4_reactstrap__["NavLink"],
                  { href: '#', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 17
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 18
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: '' + menu.icon, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 19
                      }
                    }),
                    '  ',
                    menu.label
                  )
                )
              )
            );
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_reactstrap__["Nav"], { className: 'ml-auto', navbar: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          }
        })
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__("./config/index.js");
var _jsxFileName = 'C:\\Users\\Pozterz\\Desktop\\Workspace\\ecomnext\\components\\Layout.js';





var Layout = function Layout(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_next_head___default.a,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'title',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          }
        },
        __WEBPACK_IMPORTED_MODULE_3__config__["a" /* config */].appName
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { href: 'https://use.fontawesome.com/releases/v5.0.8/css/all.css', rel: 'stylesheet', __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Header__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'mt-5 container', __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          }
        },
        props.children
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./config/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config; });
var config = {
  appName: 'Nextjs-Redux'
};

/***/ }),

/***/ "./config/navigation.json":
/***/ (function(module, exports) {

module.exports = {"Menu":[{"icon":"fa fa-home","label":"Home","link":"/","view":"EnterHome"},{"icon":"fa fa-user","label":"About","link":"/about","view":"EnterAbout"}]}

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_redux_wrapper__ = __webpack_require__("next-redux-wrapper");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_redux_wrapper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_redux_wrapper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__redux_makeStore__ = __webpack_require__("./redux/makeStore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__redux_actions_products__ = __webpack_require__("./redux/actions/products.js");
var _jsxFileName = 'C:\\Users\\Pozterz\\Desktop\\Workspace\\ecomnext\\pages\\index.js';







var Index = function Index(_ref) {
  var products = _ref.products;

  console.log(products);
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */],
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    },
    products.data.map(function (product) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        },
        product.name
      );
    })
  );
};

Index.getInitialProps = function (_ref2) {
  var store = _ref2.store,
      isServer = _ref2.isServer,
      pathname = _ref2.pathname,
      query = _ref2.query;

  store.dispatch(__WEBPACK_IMPORTED_MODULE_5__redux_actions_products__["a" /* getProducts */]());
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    products: state.products
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(__WEBPACK_IMPORTED_MODULE_3_redux__["bindActionCreators"])({});
};

Index = __WEBPACK_IMPORTED_MODULE_2_next_redux_wrapper___default()(__WEBPACK_IMPORTED_MODULE_4__redux_makeStore__["a" /* default */], mapStateToProps, mapDispatchToProps)(Index);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./redux/actions/products.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getProducts;
function getProducts() {
  return {
    type: 'GET_PRODUCT',
    payload: [{ id: 1, name: "test" }, { id: 2, name: "test2" }]
  };
}

/***/ }),

/***/ "./redux/makeStore.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_devtools_extension__ = __webpack_require__("redux-devtools-extension");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_devtools_extension___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_devtools_extension__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_thunk__ = __webpack_require__("redux-thunk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reducer_reducer__ = __webpack_require__("./redux/reducer/reducer.js");






var enhancer = Object(__WEBPACK_IMPORTED_MODULE_2_redux_devtools_extension__["composeWithDevTools"])(Object(__WEBPACK_IMPORTED_MODULE_1_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_3_redux_thunk___default.a));

// create a store creator
var makeStore = function makeStore(initialState) {
  return Object(__WEBPACK_IMPORTED_MODULE_1_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_4__reducer_reducer__["a" /* default */], initialState, enhancer);
};
/* harmony default export */ __webpack_exports__["a"] = (makeStore);

/***/ }),

/***/ "./redux/reducer/products.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var initialState = {
  data: []
};

/* harmony default export */ __webpack_exports__["a"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case 'GET_PRODUCT':
      return _extends({}, state, {
        data: action.payload
      });
    default:
      return state;
  }
});

/***/ }),

/***/ "./redux/reducer/reducer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export reducers */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__products__ = __webpack_require__("./redux/reducer/products.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




var reducers = {
  products: __WEBPACK_IMPORTED_MODULE_1__products__["a" /* default */]
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])(_extends({}, reducers)));

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "next-redux-wrapper":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "reactstrap":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "redux":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map