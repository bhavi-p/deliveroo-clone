webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/firebase.js":
/*!********************************!*\
  !*** ./components/firebase.js ***!
  \********************************/
/*! exports provided: auth, signInWithGoogle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signInWithGoogle", function() { return signInWithGoogle; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/compat/app */ "./node_modules/firebase/compat/app/dist/index.esm.js");
/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/compat/auth */ "./node_modules/firebase/compat/auth/dist/index.esm.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);









var API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";
var firebaseConfig = {
  apiKey: "AIzaSyDkm97VBg-lGsqwbfAyATcuRn22PDPhSsY",
  authDomain: "goog-auth-5adb0.firebaseapp.com",
  projectId: "goog-auth-5adb0",
  storageBucket: "goog-auth-5adb0.appspot.com",
  messagingSenderId: "808254345195",
  appId: "1:808254345195:web:6e53ff5b0625454bbad3ae"
}; // Initialize Firebase 

firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__["default"].initializeApp(firebaseConfig);
var auth = firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__["default"].auth();
var provider = new firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__["default"].auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});
var googleEmail = '';
var googleUID = '';
var googleToken = '';
var signInWithGoogle = /*#__PURE__*/function () {
  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var res, googleAccess;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return auth.signInWithPopup(provider);

          case 2:
            res = _context.sent;
            googleEmail = res.user.email;
            googleUID = res.user.uid;
            googleToken = res.credential.accessToken;
            googleAccess = {
              googleToken: googleToken
            };

            if (true) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("return");

          case 9:
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              console.log('EMAIL: ', googleEmail);
              console.log('UID ', res.user.uid);
              console.log('DISPLAY NAME ', res.user.displayName);
              axios__WEBPACK_IMPORTED_MODULE_8___default.a.post("".concat(API_URL, "/auth/local/register"), {
                username: googleDis,
                email: googleEmail,
                password: googleUID
              }) // .post(`${API_URL}/api/google/login/`, {identifier: googleEmail, password: googleUID })
              // .post(`${API_URL}/api/auth/google/login/`, { googleAccess })
              .then(function (response) {
                //set token response from Strapi for server validation
                js_cookie__WEBPACK_IMPORTED_MODULE_7___default.a.set("token", response.data.jwt); //resolve the promise to set loading to false in SignUp form

                resolve(response); //redirect back to home page for restaurance selection

                next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push("/");
                console.log("Google Login Success");
              })["catch"](function (error) {
                //reject the promise and pass the error object back to the form
                // reject(error);
                console.log("Google Login Fail");
              });
            }));

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function signInWithGoogle() {
    return _ref.apply(this, arguments);
  };
}(); // export const googleLogin = (identifier, password) => {
//   //prevent function from being ran on the server
//   if (typeof window === "undefined") {
//     return;
//   }
//   return new Promise((resolve, reject) => {
//     axios
//       .post(`${API_URL}/auth/local/`, { identifier, password })
//       .then((res) => {
//         //set token response from Strapi for server validation
//         Cookie.set("token", res.data.jwt);
//         //resolve the promise to set loading to false in SignUp form
//         resolve(res);
//         //redirect back to home page for restaurance selection
//         Router.push("/");
//         console.log("Google Login")
//       })
//       .catch((error) => {
//         //reject the promise and pass the error object back to the form
//         reject(error);
//         console.log("Google Login: ", identifier)
//       });
//   });
// };

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9maXJlYmFzZS5qcyJdLCJuYW1lcyI6WyJBUElfVVJMIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsImZpcmViYXNlIiwiaW5pdGlhbGl6ZUFwcCIsImF1dGgiLCJwcm92aWRlciIsIkdvb2dsZUF1dGhQcm92aWRlciIsInNldEN1c3RvbVBhcmFtZXRlcnMiLCJwcm9tcHQiLCJnb29nbGVFbWFpbCIsImdvb2dsZVVJRCIsImdvb2dsZVRva2VuIiwic2lnbkluV2l0aEdvb2dsZSIsInNpZ25JbldpdGhQb3B1cCIsInJlcyIsInVzZXIiLCJlbWFpbCIsInVpZCIsImNyZWRlbnRpYWwiLCJhY2Nlc3NUb2tlbiIsImdvb2dsZUFjY2VzcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiY29uc29sZSIsImxvZyIsImRpc3BsYXlOYW1lIiwiYXhpb3MiLCJwb3N0IiwidXNlcm5hbWUiLCJnb29nbGVEaXMiLCJwYXNzd29yZCIsInRoZW4iLCJyZXNwb25zZSIsIkNvb2tpZSIsInNldCIsImRhdGEiLCJqd3QiLCJSb3V0ZXIiLCJwdXNoIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxPQUFPLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxtQkFBWixJQUFtQyx1QkFBbkQ7QUFHQSxJQUFNQyxjQUFjLEdBQUc7QUFDbkJDLFFBQU0sRUFBRSx5Q0FEVztBQUVuQkMsWUFBVSxFQUFFLGlDQUZPO0FBR25CQyxXQUFTLEVBQUUsaUJBSFE7QUFJbkJDLGVBQWEsRUFBRSw2QkFKSTtBQUtuQkMsbUJBQWlCLEVBQUUsY0FMQTtBQU1uQkMsT0FBSyxFQUFFO0FBTlksQ0FBdkIsQyxDQVNBOztBQUNBQywyREFBUSxDQUFDQyxhQUFULENBQXVCUixjQUF2QjtBQUVPLElBQU1TLElBQUksR0FBR0YsMkRBQVEsQ0FBQ0UsSUFBVCxFQUFiO0FBR1AsSUFBTUMsUUFBUSxHQUFHLElBQUlILDJEQUFRLENBQUNFLElBQVQsQ0FBY0Usa0JBQWxCLEVBQWpCO0FBQ0FELFFBQVEsQ0FBQ0UsbUJBQVQsQ0FBNkI7QUFBRUMsUUFBTSxFQUFFO0FBQVYsQ0FBN0I7QUFFQSxJQUFJQyxXQUFXLEdBQUcsRUFBbEI7QUFDQSxJQUFJQyxTQUFTLEdBQUcsRUFBaEI7QUFDQSxJQUFJQyxXQUFXLEdBQUcsRUFBbEI7QUFDTyxJQUFNQyxnQkFBZ0I7QUFBQSw4TEFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUVWUixJQUFJLENBQUNTLGVBQUwsQ0FBcUJSLFFBQXJCLENBRlU7O0FBQUE7QUFFdEJTLGVBRnNCO0FBRzVCTCx1QkFBVyxHQUFHSyxHQUFHLENBQUNDLElBQUosQ0FBU0MsS0FBdkI7QUFDQU4scUJBQVMsR0FBR0ksR0FBRyxDQUFDQyxJQUFKLENBQVNFLEdBQXJCO0FBQ0FOLHVCQUFXLEdBQUdHLEdBQUcsQ0FBQ0ksVUFBSixDQUFlQyxXQUE3QjtBQUNNQyx3QkFOc0IsR0FNUDtBQUFDVCx5QkFBVyxFQUFYQTtBQUFELGFBTk87O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQSw2Q0FhckIsSUFBSVUsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Q0MscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBdUJoQixXQUF2QjtBQUNBZSxxQkFBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFvQlgsR0FBRyxDQUFDQyxJQUFKLENBQVNFLEdBQTdCO0FBQ0FPLHFCQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaLEVBQTZCWCxHQUFHLENBQUNDLElBQUosQ0FBU1csV0FBdEM7QUFDQUMsMERBQUssQ0FDRkMsSUFESCxXQUNXckMsT0FEWCwyQkFDMEM7QUFBQ3NDLHdCQUFRLEVBQUVDLFNBQVg7QUFBc0JkLHFCQUFLLEVBQUVQLFdBQTdCO0FBQTBDc0Isd0JBQVEsRUFBRXJCO0FBQXBELGVBRDFDLEVBRUU7QUFDQTtBQUhGLGVBSUdzQixJQUpILENBSVEsVUFBQ0MsUUFBRCxFQUFjO0FBQ2xCO0FBQ0FDLGdFQUFNLENBQUNDLEdBQVAsQ0FBVyxPQUFYLEVBQW9CRixRQUFRLENBQUNHLElBQVQsQ0FBY0MsR0FBbEMsRUFGa0IsQ0FJbEI7O0FBQ0FmLHVCQUFPLENBQUNXLFFBQUQsQ0FBUCxDQUxrQixDQU1sQjs7QUFDQUssa0VBQU0sQ0FBQ0MsSUFBUCxDQUFZLEdBQVo7QUFDQWYsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZLHNCQUFaO0FBQ0QsZUFiSCxXQWNTLFVBQUNlLEtBQUQsRUFBVztBQUNoQjtBQUNBO0FBQ0FoQix1QkFBTyxDQUFDQyxHQUFSLENBQVksbUJBQVo7QUFDRCxlQWxCSDtBQW1CRCxhQXZCTSxDQWJxQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFoQmIsZ0JBQWdCO0FBQUE7QUFBQTtBQUFBLEdBQXRCLEMsQ0F3Q1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNWY3NWQ1YzUxYmUxNmY1NGRkOWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvY29tcGF0L2FwcFwiO1xyXG5pbXBvcnQgJ2ZpcmViYXNlL2NvbXBhdC9hdXRoJztcclxuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBDb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBBUElfVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCB8fCBcImh0dHA6Ly9sb2NhbGhvc3Q6MTMzN1wiO1xyXG5cclxuXHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gICAgYXBpS2V5OiBcIkFJemFTeURrbTk3VkJnLWxHc3F3YmZBeUFUY3VSbjIyUERQaFNzWVwiLFxyXG4gICAgYXV0aERvbWFpbjogXCJnb29nLWF1dGgtNWFkYjAuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgICBwcm9qZWN0SWQ6IFwiZ29vZy1hdXRoLTVhZGIwXCIsXHJcbiAgICBzdG9yYWdlQnVja2V0OiBcImdvb2ctYXV0aC01YWRiMC5hcHBzcG90LmNvbVwiLFxyXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiODA4MjU0MzQ1MTk1XCIsXHJcbiAgICBhcHBJZDogXCIxOjgwODI1NDM0NTE5NTp3ZWI6NmU1M2ZmNWIwNjI1NDU0YmJhZDNhZVwiXHJcbiAgfTtcclxuXHJcbi8vIEluaXRpYWxpemUgRmlyZWJhc2UgXHJcbmZpcmViYXNlLmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGggPSBmaXJlYmFzZS5hdXRoKCk7XHJcblxyXG5cclxuY29uc3QgcHJvdmlkZXIgPSBuZXcgZmlyZWJhc2UuYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXIoKTtcclxucHJvdmlkZXIuc2V0Q3VzdG9tUGFyYW1ldGVycyh7IHByb21wdDogJ3NlbGVjdF9hY2NvdW50JyB9KTtcclxuXHJcbmxldCBnb29nbGVFbWFpbCA9ICcnO1xyXG5sZXQgZ29vZ2xlVUlEID0gJyc7XHJcbmxldCBnb29nbGVUb2tlbiA9ICcnO1xyXG5leHBvcnQgY29uc3Qgc2lnbkluV2l0aEdvb2dsZSA9IGFzeW5jICgpID0+IHtcclxuICBcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF1dGguc2lnbkluV2l0aFBvcHVwKHByb3ZpZGVyKVxyXG4gICAgZ29vZ2xlRW1haWwgPSByZXMudXNlci5lbWFpbDtcclxuICAgIGdvb2dsZVVJRCA9IHJlcy51c2VyLnVpZDtcclxuICAgIGdvb2dsZVRva2VuID0gcmVzLmNyZWRlbnRpYWwuYWNjZXNzVG9rZW47XHJcbiAgICBjb25zdCBnb29nbGVBY2Nlc3MgPSB7Z29vZ2xlVG9rZW59XHJcbiAgICBcclxuXHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnRU1BSUw6ICcsIGdvb2dsZUVtYWlsKVxyXG4gICAgICBjb25zb2xlLmxvZygnVUlEICcsIHJlcy51c2VyLnVpZClcclxuICAgICAgY29uc29sZS5sb2coJ0RJU1BMQVkgTkFNRSAnLCByZXMudXNlci5kaXNwbGF5TmFtZSlcclxuICAgICAgYXhpb3NcclxuICAgICAgICAucG9zdChgJHtBUElfVVJMfS9hdXRoL2xvY2FsL3JlZ2lzdGVyYCwge3VzZXJuYW1lOiBnb29nbGVEaXMsIGVtYWlsOiBnb29nbGVFbWFpbCwgcGFzc3dvcmQ6IGdvb2dsZVVJRCB9KVxyXG4gICAgICAgIC8vIC5wb3N0KGAke0FQSV9VUkx9L2FwaS9nb29nbGUvbG9naW4vYCwge2lkZW50aWZpZXI6IGdvb2dsZUVtYWlsLCBwYXNzd29yZDogZ29vZ2xlVUlEIH0pXHJcbiAgICAgICAgLy8gLnBvc3QoYCR7QVBJX1VSTH0vYXBpL2F1dGgvZ29vZ2xlL2xvZ2luL2AsIHsgZ29vZ2xlQWNjZXNzIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAvL3NldCB0b2tlbiByZXNwb25zZSBmcm9tIFN0cmFwaSBmb3Igc2VydmVyIHZhbGlkYXRpb25cclxuICAgICAgICAgIENvb2tpZS5zZXQoXCJ0b2tlblwiLCByZXNwb25zZS5kYXRhLmp3dCk7XHJcbiAgXHJcbiAgICAgICAgICAvL3Jlc29sdmUgdGhlIHByb21pc2UgdG8gc2V0IGxvYWRpbmcgdG8gZmFsc2UgaW4gU2lnblVwIGZvcm1cclxuICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xyXG4gICAgICAgICAgLy9yZWRpcmVjdCBiYWNrIHRvIGhvbWUgcGFnZSBmb3IgcmVzdGF1cmFuY2Ugc2VsZWN0aW9uXHJcbiAgICAgICAgICBSb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkdvb2dsZSBMb2dpbiBTdWNjZXNzXCIpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAvL3JlamVjdCB0aGUgcHJvbWlzZSBhbmQgcGFzcyB0aGUgZXJyb3Igb2JqZWN0IGJhY2sgdG8gdGhlIGZvcm1cclxuICAgICAgICAgIC8vIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkdvb2dsZSBMb2dpbiBGYWlsXCIpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIFxyXG59O1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGdvb2dsZUxvZ2luID0gKGlkZW50aWZpZXIsIHBhc3N3b3JkKSA9PiB7XHJcbi8vICAgLy9wcmV2ZW50IGZ1bmN0aW9uIGZyb20gYmVpbmcgcmFuIG9uIHRoZSBzZXJ2ZXJcclxuLy8gICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4vLyAgICAgcmV0dXJuO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuLy8gICAgIGF4aW9zXHJcbi8vICAgICAgIC5wb3N0KGAke0FQSV9VUkx9L2F1dGgvbG9jYWwvYCwgeyBpZGVudGlmaWVyLCBwYXNzd29yZCB9KVxyXG4vLyAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbi8vICAgICAgICAgLy9zZXQgdG9rZW4gcmVzcG9uc2UgZnJvbSBTdHJhcGkgZm9yIHNlcnZlciB2YWxpZGF0aW9uXHJcbi8vICAgICAgICAgQ29va2llLnNldChcInRva2VuXCIsIHJlcy5kYXRhLmp3dCk7XHJcblxyXG4vLyAgICAgICAgIC8vcmVzb2x2ZSB0aGUgcHJvbWlzZSB0byBzZXQgbG9hZGluZyB0byBmYWxzZSBpbiBTaWduVXAgZm9ybVxyXG4vLyAgICAgICAgIHJlc29sdmUocmVzKTtcclxuLy8gICAgICAgICAvL3JlZGlyZWN0IGJhY2sgdG8gaG9tZSBwYWdlIGZvciByZXN0YXVyYW5jZSBzZWxlY3Rpb25cclxuLy8gICAgICAgICBSb3V0ZXIucHVzaChcIi9cIik7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coXCJHb29nbGUgTG9naW5cIilcclxuLy8gICAgICAgfSlcclxuLy8gICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4vLyAgICAgICAgIC8vcmVqZWN0IHRoZSBwcm9taXNlIGFuZCBwYXNzIHRoZSBlcnJvciBvYmplY3QgYmFjayB0byB0aGUgZm9ybVxyXG4vLyAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coXCJHb29nbGUgTG9naW46IFwiLCBpZGVudGlmaWVyKVxyXG4vLyAgICAgICB9KTtcclxuLy8gICB9KTtcclxuLy8gfTtcclxuXHJcblxyXG5cclxuICAgICJdLCJzb3VyY2VSb290IjoiIn0=