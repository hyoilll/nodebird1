webpackHotUpdate_N_E("pages/index",{

/***/ "./components/LoginForm.js":
/*!*********************************!*\
  !*** ./components/LoginForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "E:\\web\\nodebrid1\\front\\components\\LoginForm.js",
  _templateObject,
  _this = undefined,
  _s = $RefreshSig$();






var ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-top: 10px;\n"])));
_c = ButtonWrapper;
var LoginForm = function LoginForm(_ref) {
  _s();
  var setIsLoggedIn = _ref.setIsLoggedIn;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
    id = _useState[0],
    setId = _useState[1];
  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
    pw = _useState2[0],
    setPw = _useState2[1];

  //useMemo：値cache
  //useCallback：コンポネントにPropsとして渡す関数はuseCallbackを使うことで最適化される、関数cache
  var onChangeId = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (e) {
    setId(e.target.value);
  }, []);
  var onChangePw = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (e) {
    setPw(e.target.value);
  }, []);
  var onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function () {
    console.log(id, pw);
  }, [id, pw]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      onFinish: onSubmitForm,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("label", {
          htmlFor: "user-id",
          children: "ID"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
          name: "user-id",
          value: id,
          onChange: onChangeId,
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("label", {
          htmlFor: "user-pw",
          children: "Password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
          name: "user-pw",
          value: pw,
          onChange: onChangePw,
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(ButtonWrapper, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          type: "primary",
          htmlType: "submit",
          loading: false,
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/signup",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
              children: "SignUp"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};
_s(LoginForm, "cdyLrA6juktyv9JEO/w/0ppih2I=");
_c2 = LoginForm;
/* harmony default export */ __webpack_exports__["default"] = (LoginForm);
var _c, _c2;
$RefreshReg$(_c, "ButtonWrapper");
$RefreshReg$(_c2, "LoginForm");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiXSwibmFtZXMiOlsiQnV0dG9uV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIl90ZW1wbGF0ZU9iamVjdCIsIl90YWdnZWRUZW1wbGF0ZUxpdGVyYWwiLCJfYyIsIkxvZ2luRm9ybSIsIl9yZWYiLCJfcyIsInNldElzTG9nZ2VkSW4iLCJfdXNlU3RhdGUiLCJ1c2VTdGF0ZSIsImlkIiwic2V0SWQiLCJfdXNlU3RhdGUyIiwicHciLCJzZXRQdyIsIm9uQ2hhbmdlSWQiLCJ1c2VDYWxsYmFjayIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlUHciLCJvblN1Ym1pdEZvcm0iLCJjb25zb2xlIiwibG9nIiwiX2pzeERFViIsIl9GcmFnbWVudCIsImNoaWxkcmVuIiwiRm9ybSIsIm9uRmluaXNoIiwiaHRtbEZvciIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIl90aGlzIiwiSW5wdXQiLCJuYW1lIiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsIkJ1dHRvbiIsInR5cGUiLCJodG1sVHlwZSIsImxvYWRpbmciLCJMaW5rIiwiaHJlZiIsIl9jMiIsIiRSZWZyZXNoUmVnJCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEyQztBQUNkO0FBQ2lCO0FBQ1A7QUFBQTtBQUFBO0FBRXZDLElBQU1BLGFBQWEsR0FBR0MseURBQU0sQ0FBQ0MsR0FBRyxDQUFBQyxlQUFBLEtBQUFBLGVBQUEsR0FBQUMsZ0dBQUEsK0JBRS9CO0FBQUNDLEVBQUEsR0FGSUwsYUFBYTtBQUluQixJQUFNTSxTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBQUMsSUFBQSxFQUEwQjtFQUFBQyxFQUFBO0VBQUEsSUFBcEJDLGFBQWEsR0FBQUYsSUFBQSxDQUFiRSxhQUFhO0VBQ2hDLElBQUFDLFNBQUEsR0FBb0JDLHNEQUFRLENBQUMsRUFBRSxDQUFD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RUFBQyxTQUFTO1VBQUFsQixRQUFBLGVBQ2xCRixvRUFBQTtZQUFBRSxRQUFBLGVBQ0VGLG9FQUFBLENBQUNlLDJDQUFNO2NBQUFiLFFBQUE7WUFBQTtjQUFBSSxRQUFBLEVBQUFDLFlBQUE7Y0FBQUMsVUFBQTtjQUFBQyxZQUFBO1lBQUEsR0FBQUMsS0FBQTtVQUFnQjtZQUFBSixRQUFBLEVBQUFDLFlBQUE7WUFBQUMsVUFBQTtZQUFBQyxZQUFBO1VBQUEsR0FBQUMsS0FBQTtRQUNyQjtVQUFBSixRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUEsR0FBQUMsS0FBQSxDQUNDO01BQUE7UUFBQUosUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLEdBQUFDLEtBQUEsQ0FDTztJQUFBO01BQUFKLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxHQUFBQyxLQUFBO0VBQ1gsaUJBQ047QUFFUCxDQUFDO0FBQUM1QixFQUFBLENBM0RJRixTQUFTO0FBQUF5QyxHQUFBLEdBQVR6QyxTQUFTO0FBNkRBQSx3RUFBUyxFQUFDO0FBQUEsSUFBQUQsRUFBQSxFQUFBMEMsR0FBQTtBQUFBQyxZQUFBLENBQUEzQyxFQUFBO0FBQUEyQyxZQUFBLENBQUFELEdBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTJmZjcxZDM5YzkxYmZlZWIyNzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiwgRm9ybSwgSW5wdXQgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgQnV0dG9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuYDtcclxuXHJcbmNvbnN0IExvZ2luRm9ybSA9ICh7IHNldElzTG9nZ2VkSW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtpZCwgc2V0SWRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3B3LCBzZXRQd10gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgLy91c2VNZW1v77ya5YCkY2FjaGVcclxuICAvL3VzZUNhbGxiYWNr77ya44Kz44Oz44Od44ON44Oz44OI44GrUHJvcHPjgajjgZfjgabmuKHjgZnplqLmlbDjga91c2VDYWxsYmFja+OCkuS9v+OBhuOBk+OBqOOBp+acgOmBqeWMluOBleOCjOOCi+OAgemWouaVsGNhY2hlXHJcbiAgY29uc3Qgb25DaGFuZ2VJZCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBzZXRJZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvbkNoYW5nZVB3ID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIHNldFB3KGUudGFyZ2V0LnZhbHVlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0Rm9ybSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGlkLCBwdyk7XHJcbiAgfSwgW2lkLCBwd10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgey8qIG9uRmluaXNo44Gr44GvZS5wcmV2ZW50ZGVmYXVsdOOBjOaXouOBq+mBqeeUqOOBleOCjOOBpuOBhOOCiyAqL31cclxuICAgICAgPEZvcm0gb25GaW5pc2g9e29uU3VibWl0Rm9ybX0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlci1pZFwiPklEPC9sYWJlbD5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIG5hbWU9XCJ1c2VyLWlkXCJcclxuICAgICAgICAgICAgdmFsdWU9e2lkfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VJZH1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgID48L0lucHV0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXItcHdcIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICBuYW1lPVwidXNlci1wd1wiXHJcbiAgICAgICAgICAgIHZhbHVlPXtwd31cclxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUHd9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICA+PC9JbnB1dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7Lyog44Kz44Oz44Od44ON44Oz44OI44Gu5Lit44Gr44Kq44OW44K444Kn44Kv44OI44KS5YWl44KM44KL44Go5q+O5ZuecmVyZW5kZXJpbmfjgZXjgozjgovjgZ/jgoHjgIHlhaXjgozjgabjga/jg4Djg6EgLT4gc3R5bGVkIGNvbXBvbmVudOOCkuS9v+eUqCovfVxyXG4gICAgICAgIHsvKiByZXJlbmRlcmluZ+WOu+OCjOOCi+evhOWbsuOBr+OCs+ODs+ODneODjeODs+ODiOWFqOmgmOWfn+OBoOOBjOOAgeWun+mam+OBq+aPj+OBjeebtOOBmeOBqOOBk+OCjeOBr3ZpcnR1YWxET03jga7liY3lm57jgajmr5TjgbnjgablpInjgo/jgaPjgZ/jgajjgZPjgo3jga7jgb/jgIHjgaDjgYvjgokgKi99XHJcbiAgICAgICAgey8qIHVzZU1lbW/jgajjgYtzdHlsZWQgY29tcG9uZW5044KS5Yip55So44GX44Gm5o+P44GN55u044GV44KM44KL44GT44Go44KS6Ziy5q2i44GZ44KLICovfVxyXG4gICAgICAgIHsvKiA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCIxMHB4XCIgfX0+ICovfVxyXG4gICAgICAgIDxCdXR0b25XcmFwcGVyPlxyXG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCIgbG9hZGluZz17ZmFsc2V9PlxyXG4gICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ251cFwiPlxyXG4gICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICA8QnV0dG9uPlNpZ25VcDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9CdXR0b25XcmFwcGVyPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9