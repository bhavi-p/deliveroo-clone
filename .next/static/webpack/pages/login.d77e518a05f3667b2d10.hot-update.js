webpackHotUpdate_N_E("pages/login",{

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
var googleDis = '';
var signInWithGoogle = /*#__PURE__*/function () {
  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var res;
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
            googleDis = res.user.displayName;

            if (true) {
              _context.next = 8;
              break;
            }

            return _context.abrupt("return");

          case 8:
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

          case 9:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9maXJlYmFzZS5qcyJdLCJuYW1lcyI6WyJBUElfVVJMIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsImZpcmViYXNlIiwiaW5pdGlhbGl6ZUFwcCIsImF1dGgiLCJwcm92aWRlciIsIkdvb2dsZUF1dGhQcm92aWRlciIsInNldEN1c3RvbVBhcmFtZXRlcnMiLCJwcm9tcHQiLCJnb29nbGVFbWFpbCIsImdvb2dsZVVJRCIsImdvb2dsZURpcyIsInNpZ25JbldpdGhHb29nbGUiLCJzaWduSW5XaXRoUG9wdXAiLCJyZXMiLCJ1c2VyIiwiZW1haWwiLCJ1aWQiLCJkaXNwbGF5TmFtZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiY29uc29sZSIsImxvZyIsImF4aW9zIiwicG9zdCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJ0aGVuIiwicmVzcG9uc2UiLCJDb29raWUiLCJzZXQiLCJkYXRhIiwiand0IiwiUm91dGVyIiwicHVzaCIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsbUJBQVosSUFBbUMsdUJBQW5EO0FBR0EsSUFBTUMsY0FBYyxHQUFHO0FBQ25CQyxRQUFNLEVBQUUseUNBRFc7QUFFbkJDLFlBQVUsRUFBRSxpQ0FGTztBQUduQkMsV0FBUyxFQUFFLGlCQUhRO0FBSW5CQyxlQUFhLEVBQUUsNkJBSkk7QUFLbkJDLG1CQUFpQixFQUFFLGNBTEE7QUFNbkJDLE9BQUssRUFBRTtBQU5ZLENBQXZCLEMsQ0FTQTs7QUFDQUMsMkRBQVEsQ0FBQ0MsYUFBVCxDQUF1QlIsY0FBdkI7QUFFTyxJQUFNUyxJQUFJLEdBQUdGLDJEQUFRLENBQUNFLElBQVQsRUFBYjtBQUdQLElBQU1DLFFBQVEsR0FBRyxJQUFJSCwyREFBUSxDQUFDRSxJQUFULENBQWNFLGtCQUFsQixFQUFqQjtBQUNBRCxRQUFRLENBQUNFLG1CQUFULENBQTZCO0FBQUVDLFFBQU0sRUFBRTtBQUFWLENBQTdCO0FBRUEsSUFBSUMsV0FBVyxHQUFHLEVBQWxCO0FBQ0EsSUFBSUMsU0FBUyxHQUFHLEVBQWhCO0FBQ0EsSUFBSUMsU0FBUyxHQUFHLEVBQWhCO0FBQ08sSUFBTUMsZ0JBQWdCO0FBQUEsOExBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFFVlIsSUFBSSxDQUFDUyxlQUFMLENBQXFCUixRQUFyQixDQUZVOztBQUFBO0FBRXRCUyxlQUZzQjtBQUc1QkwsdUJBQVcsR0FBR0ssR0FBRyxDQUFDQyxJQUFKLENBQVNDLEtBQXZCO0FBQ0FOLHFCQUFTLEdBQUdJLEdBQUcsQ0FBQ0MsSUFBSixDQUFTRSxHQUFyQjtBQUNBTixxQkFBUyxHQUFHRyxHQUFHLENBQUNDLElBQUosQ0FBU0csV0FBckI7O0FBTDRCO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUEsNkNBWXJCLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdENDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCZCxXQUF2QjtBQUNBYSxxQkFBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFvQlQsR0FBRyxDQUFDQyxJQUFKLENBQVNFLEdBQTdCO0FBQ0FLLHFCQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaLEVBQTZCVCxHQUFHLENBQUNDLElBQUosQ0FBU0csV0FBdEM7QUFDQU0sMERBQUssQ0FDRkMsSUFESCxXQUNXbEMsT0FEWCwyQkFDMEM7QUFBQ21DLHdCQUFRLEVBQUVmLFNBQVg7QUFBc0JLLHFCQUFLLEVBQUVQLFdBQTdCO0FBQTBDa0Isd0JBQVEsRUFBRWpCO0FBQXBELGVBRDFDLEVBRUU7QUFDQTtBQUhGLGVBSUdrQixJQUpILENBSVEsVUFBQ0MsUUFBRCxFQUFjO0FBQ2xCO0FBQ0FDLGdFQUFNLENBQUNDLEdBQVAsQ0FBVyxPQUFYLEVBQW9CRixRQUFRLENBQUNHLElBQVQsQ0FBY0MsR0FBbEMsRUFGa0IsQ0FJbEI7O0FBQ0FiLHVCQUFPLENBQUNTLFFBQUQsQ0FBUCxDQUxrQixDQU1sQjs7QUFDQUssa0VBQU0sQ0FBQ0MsSUFBUCxDQUFZLEdBQVo7QUFDQWIsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZLHNCQUFaO0FBQ0QsZUFiSCxXQWNTLFVBQUNhLEtBQUQsRUFBVztBQUNoQjtBQUNBO0FBQ0FkLHVCQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWjtBQUNELGVBbEJIO0FBbUJELGFBdkJNLENBWnFCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWhCWCxnQkFBZ0I7QUFBQTtBQUFBO0FBQUEsR0FBdEIsQyxDQXVDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uZDc3ZTUxOGEwNWYzNjY3YjJkMTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvY29tcGF0L2FwcFwiO1xyXG5pbXBvcnQgJ2ZpcmViYXNlL2NvbXBhdC9hdXRoJztcclxuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBDb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBBUElfVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCB8fCBcImh0dHA6Ly9sb2NhbGhvc3Q6MTMzN1wiO1xyXG5cclxuXHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gICAgYXBpS2V5OiBcIkFJemFTeURrbTk3VkJnLWxHc3F3YmZBeUFUY3VSbjIyUERQaFNzWVwiLFxyXG4gICAgYXV0aERvbWFpbjogXCJnb29nLWF1dGgtNWFkYjAuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgICBwcm9qZWN0SWQ6IFwiZ29vZy1hdXRoLTVhZGIwXCIsXHJcbiAgICBzdG9yYWdlQnVja2V0OiBcImdvb2ctYXV0aC01YWRiMC5hcHBzcG90LmNvbVwiLFxyXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiODA4MjU0MzQ1MTk1XCIsXHJcbiAgICBhcHBJZDogXCIxOjgwODI1NDM0NTE5NTp3ZWI6NmU1M2ZmNWIwNjI1NDU0YmJhZDNhZVwiXHJcbiAgfTtcclxuXHJcbi8vIEluaXRpYWxpemUgRmlyZWJhc2UgXHJcbmZpcmViYXNlLmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGggPSBmaXJlYmFzZS5hdXRoKCk7XHJcblxyXG5cclxuY29uc3QgcHJvdmlkZXIgPSBuZXcgZmlyZWJhc2UuYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXIoKTtcclxucHJvdmlkZXIuc2V0Q3VzdG9tUGFyYW1ldGVycyh7IHByb21wdDogJ3NlbGVjdF9hY2NvdW50JyB9KTtcclxuXHJcbmxldCBnb29nbGVFbWFpbCA9ICcnO1xyXG5sZXQgZ29vZ2xlVUlEID0gJyc7XHJcbmxldCBnb29nbGVEaXMgPSAnJztcclxuZXhwb3J0IGNvbnN0IHNpZ25JbldpdGhHb29nbGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBhdXRoLnNpZ25JbldpdGhQb3B1cChwcm92aWRlcilcclxuICAgIGdvb2dsZUVtYWlsID0gcmVzLnVzZXIuZW1haWw7XHJcbiAgICBnb29nbGVVSUQgPSByZXMudXNlci51aWQ7XHJcbiAgICBnb29nbGVEaXMgPSByZXMudXNlci5kaXNwbGF5TmFtZVxyXG4gICAgXHJcblxyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ0VNQUlMOiAnLCBnb29nbGVFbWFpbClcclxuICAgICAgY29uc29sZS5sb2coJ1VJRCAnLCByZXMudXNlci51aWQpXHJcbiAgICAgIGNvbnNvbGUubG9nKCdESVNQTEFZIE5BTUUgJywgcmVzLnVzZXIuZGlzcGxheU5hbWUpXHJcbiAgICAgIGF4aW9zXHJcbiAgICAgICAgLnBvc3QoYCR7QVBJX1VSTH0vYXV0aC9sb2NhbC9yZWdpc3RlcmAsIHt1c2VybmFtZTogZ29vZ2xlRGlzLCBlbWFpbDogZ29vZ2xlRW1haWwsIHBhc3N3b3JkOiBnb29nbGVVSUQgfSlcclxuICAgICAgICAvLyAucG9zdChgJHtBUElfVVJMfS9hcGkvZ29vZ2xlL2xvZ2luL2AsIHtpZGVudGlmaWVyOiBnb29nbGVFbWFpbCwgcGFzc3dvcmQ6IGdvb2dsZVVJRCB9KVxyXG4gICAgICAgIC8vIC5wb3N0KGAke0FQSV9VUkx9L2FwaS9hdXRoL2dvb2dsZS9sb2dpbi9gLCB7IGdvb2dsZUFjY2VzcyB9KVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgLy9zZXQgdG9rZW4gcmVzcG9uc2UgZnJvbSBTdHJhcGkgZm9yIHNlcnZlciB2YWxpZGF0aW9uXHJcbiAgICAgICAgICBDb29raWUuc2V0KFwidG9rZW5cIiwgcmVzcG9uc2UuZGF0YS5qd3QpO1xyXG4gIFxyXG4gICAgICAgICAgLy9yZXNvbHZlIHRoZSBwcm9taXNlIHRvIHNldCBsb2FkaW5nIHRvIGZhbHNlIGluIFNpZ25VcCBmb3JtXHJcbiAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcclxuICAgICAgICAgIC8vcmVkaXJlY3QgYmFjayB0byBob21lIHBhZ2UgZm9yIHJlc3RhdXJhbmNlIHNlbGVjdGlvblxyXG4gICAgICAgICAgUm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJHb29nbGUgTG9naW4gU3VjY2Vzc1wiKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgLy9yZWplY3QgdGhlIHByb21pc2UgYW5kIHBhc3MgdGhlIGVycm9yIG9iamVjdCBiYWNrIHRvIHRoZSBmb3JtXHJcbiAgICAgICAgICAvLyByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJHb29nbGUgTG9naW4gRmFpbFwiKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBcclxufTtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBnb29nbGVMb2dpbiA9IChpZGVudGlmaWVyLCBwYXNzd29yZCkgPT4ge1xyXG4vLyAgIC8vcHJldmVudCBmdW5jdGlvbiBmcm9tIGJlaW5nIHJhbiBvbiB0aGUgc2VydmVyXHJcbi8vICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuLy8gICAgIHJldHVybjtcclxuLy8gICB9XHJcblxyXG4vLyAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbi8vICAgICBheGlvc1xyXG4vLyAgICAgICAucG9zdChgJHtBUElfVVJMfS9hdXRoL2xvY2FsL2AsIHsgaWRlbnRpZmllciwgcGFzc3dvcmQgfSlcclxuLy8gICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4vLyAgICAgICAgIC8vc2V0IHRva2VuIHJlc3BvbnNlIGZyb20gU3RyYXBpIGZvciBzZXJ2ZXIgdmFsaWRhdGlvblxyXG4vLyAgICAgICAgIENvb2tpZS5zZXQoXCJ0b2tlblwiLCByZXMuZGF0YS5qd3QpO1xyXG5cclxuLy8gICAgICAgICAvL3Jlc29sdmUgdGhlIHByb21pc2UgdG8gc2V0IGxvYWRpbmcgdG8gZmFsc2UgaW4gU2lnblVwIGZvcm1cclxuLy8gICAgICAgICByZXNvbHZlKHJlcyk7XHJcbi8vICAgICAgICAgLy9yZWRpcmVjdCBiYWNrIHRvIGhvbWUgcGFnZSBmb3IgcmVzdGF1cmFuY2Ugc2VsZWN0aW9uXHJcbi8vICAgICAgICAgUm91dGVyLnB1c2goXCIvXCIpO1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKFwiR29vZ2xlIExvZ2luXCIpXHJcbi8vICAgICAgIH0pXHJcbi8vICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuLy8gICAgICAgICAvL3JlamVjdCB0aGUgcHJvbWlzZSBhbmQgcGFzcyB0aGUgZXJyb3Igb2JqZWN0IGJhY2sgdG8gdGhlIGZvcm1cclxuLy8gICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKFwiR29vZ2xlIExvZ2luOiBcIiwgaWRlbnRpZmllcilcclxuLy8gICAgICAgfSk7XHJcbi8vICAgfSk7XHJcbi8vIH07XHJcblxyXG5cclxuXHJcbiAgICAiXSwic291cmNlUm9vdCI6IiJ9