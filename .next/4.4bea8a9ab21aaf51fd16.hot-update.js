webpackHotUpdate(4,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_redux_wrapper__ = __webpack_require__("./node_modules/next-redux-wrapper/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_redux_wrapper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_redux_wrapper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux__ = __webpack_require__("../../../node_modules/redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__redux_makeStore__ = __webpack_require__("./redux/makeStore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__redux_actions_products__ = __webpack_require__("./redux/actions/products.js");
var _jsxFileName = 'C:\\Users\\Pozterz\\Desktop\\Workspace\\ecomnext\\pages\\index.js';


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();







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

var _default = Index;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Index, 'Index', 'C:/Users/Pozterz/Desktop/Workspace/ecomnext/pages/index.js');
  reactHotLoader.register(mapStateToProps, 'mapStateToProps', 'C:/Users/Pozterz/Desktop/Workspace/ecomnext/pages/index.js');
  reactHotLoader.register(mapDispatchToProps, 'mapDispatchToProps', 'C:/Users/Pozterz/Desktop/Workspace/ecomnext/pages/index.js');
  reactHotLoader.register(_default, 'default', 'C:/Users/Pozterz/Desktop/Workspace/ecomnext/pages/index.js');
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.4bea8a9ab21aaf51fd16.hot-update.js.map