webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/cart */ "./components/cart.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _components_restaurantList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/restaurantList */ "./components/restaurantList.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
var _jsxFileName = "C:\\MIT Files\\Week 28\\deliveroo-clone-tutorial\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function Home() {
  _s();

  var API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"; // console.log(`URL: ${API_URL}`)

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      query = _useState[0],
      setQuery = _useState[1];

  var link = new _apollo_client__WEBPACK_IMPORTED_MODULE_2__["HttpLink"]({
    uri: "".concat(API_URL, "/graphql")
  });
  var cache = new _apollo_client__WEBPACK_IMPORTED_MODULE_2__["InMemoryCache"]();
  var client = new _apollo_client__WEBPACK_IMPORTED_MODULE_2__["ApolloClient"]({
    link: link,
    cache: cache
  });
  return __jsx(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["ApolloProvider"], {
    client: client,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "search",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 15
    }
  }, " Local Restaurants"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroupAddon"], {
    addonType: "append",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, " Search "), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    onChange: function onChange(e) {
      setQuery(e.target.value.toLocaleLowerCase());
    },
    value: query,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  })), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 30
    }
  })), __jsx(_components_restaurantList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    search: query,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }), __jsx(_components_cart__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, " "));
}

_s(Home, "HYX2QbDDdTtlu7GfoQbAPZOIM6k=");

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsIkFQSV9VUkwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsInVzZVN0YXRlIiwicXVlcnkiLCJzZXRRdWVyeSIsImxpbmsiLCJIdHRwTGluayIsInVyaSIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsImNsaWVudCIsIkFwb2xsb0NsaWVudCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRvTG9jYWxlTG93ZXJDYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUlBLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFDWixNQUFNQyxPQUFPLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxtQkFBWixJQUFtQyx1QkFBbkQsQ0FEWSxDQUVaOztBQUZZLGtCQUdjQyxzREFBUSxDQUFDLEVBQUQsQ0FIdEI7QUFBQSxNQUdMQyxLQUhLO0FBQUEsTUFHRUMsUUFIRjs7QUFJWixNQUFNQyxJQUFJLEdBQUcsSUFBSUMsdURBQUosQ0FBYTtBQUFFQyxPQUFHLFlBQUtULE9BQUw7QUFBTCxHQUFiLENBQWI7QUFDQSxNQUFNVSxLQUFLLEdBQUcsSUFBSUMsNERBQUosRUFBZDtBQUNBLE1BQU1DLE1BQU0sR0FBRyxJQUFJQywyREFBSixDQUFpQjtBQUFDTixRQUFJLEVBQUpBLElBQUQ7QUFBTUcsU0FBSyxFQUFMQTtBQUFOLEdBQWpCLENBQWY7QUFHQSxTQUNJLE1BQUMsNkRBQUQ7QUFBZ0IsVUFBTSxFQUFFRSxNQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFESixFQUVNLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMsMERBQUQ7QUFBaUIsYUFBUyxFQUFDLFFBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREEsRUFFQSxNQUFDLGdEQUFEO0FBQ0ksWUFBUSxFQUFFLGtCQUFDRSxDQUFELEVBQU07QUFDWlIsY0FBUSxDQUFDUSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVCxDQUFlQyxpQkFBZixFQUFELENBQVI7QUFDSCxLQUhMO0FBS0ksU0FBSyxFQUFFWixLQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGQSxDQUZOLEVBV21CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYbkIsQ0FERixFQWNJLE1BQUMsa0VBQUQ7QUFBZ0IsVUFBTSxFQUFFQSxLQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZEosRUFlSSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FmSixDQURKO0FBbUJEOztHQTVCTU4sSTs7S0FBQUEsSTtBQTZCUUEsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguN2QzYTJkMjdmYTI2M2VmYWFhNjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENhcnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY2FydFwiXG5pbXBvcnQge0Fwb2xsb1Byb3ZpZGVyLEFwb2xsb0NsaWVudCxIdHRwTGluaywgSW5NZW1vcnlDYWNoZX0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IFJlc3RhdXJhbnRMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvcmVzdGF1cmFudExpc3QnO1xuaW1wb3J0IHsgSW5wdXRHcm91cCwgSW5wdXRHcm91cEFkZG9uLElucHV0fSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuXG5cblxuZnVuY3Rpb24gSG9tZSgpIHtcbiAgICBjb25zdCBBUElfVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCB8fCBcImh0dHA6Ly9sb2NhbGhvc3Q6MTMzN1wiO1xuICAgIC8vIGNvbnNvbGUubG9nKGBVUkw6ICR7QVBJX1VSTH1gKVxuICAgIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgbGluayA9IG5ldyBIdHRwTGluayh7IHVyaTogYCR7QVBJX1VSTH0vZ3JhcGhxbGB9KVxuICAgIGNvbnN0IGNhY2hlID0gbmV3IEluTWVtb3J5Q2FjaGUoKVxuICAgIGNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe2xpbmssY2FjaGV9KTtcbiBcbiAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17Y2xpZW50fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaFwiPlxuICAgICAgICAgICAgICA8aDI+IExvY2FsIFJlc3RhdXJhbnRzPC9oMj5cbiAgICAgICAgICAgICAgICA8SW5wdXRHcm91cCA+XG4gICAgICAgICAgICAgICAgPElucHV0R3JvdXBBZGRvbiBhZGRvblR5cGU9XCJhcHBlbmRcIj4gU2VhcmNoIDwvSW5wdXRHcm91cEFkZG9uPlxuICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UXVlcnkoZS50YXJnZXQudmFsdWUudG9Mb2NhbGVMb3dlckNhc2UoKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cXVlcnl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+PGJyPjwvYnI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxSZXN0YXVyYW50TGlzdCBzZWFyY2g9e3F1ZXJ5fSAvPlxuICAgICAgICAgICAgPENhcnQ+IDwvQ2FydD5cbiAgICAgICAgPC9BcG9sbG9Qcm92aWRlcj5cbiAgICApO1xuICB9XG4gIGV4cG9ydCBkZWZhdWx0IEhvbWU7XG4gICJdLCJzb3VyY2VSb290IjoiIn0=