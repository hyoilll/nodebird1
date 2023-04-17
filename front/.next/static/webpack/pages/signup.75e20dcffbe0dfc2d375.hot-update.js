webpackHotUpdate_N_E("pages/signup",{

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
  _templateObject2,
  _this = undefined,
  _s = $RefreshSig$();






var ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-top: 10px;\n"])));
_c = ButtonWrapper;
var FormWrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(antd__WEBPACK_IMPORTED_MODULE_1__["Form"])(_templateObject2 || (_templateObject2 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 10px;\n"])));
_c2 = FormWrapper;
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
    setIsLoggedIn(true);
  }, [id, pw]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(FormWrapper, {
      onFinish: onSubmitForm,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("label", {
          htmlFor: "user-id",
          children: "ID"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
          name: "user-id",
          value: id,
          onChange: onChangeId,
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("label", {
          htmlFor: "user-pw",
          children: "Password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
          name: "user-pw",
          value: pw,
          onChange: onChangePw,
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(ButtonWrapper, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          type: "primary",
          htmlType: "submit",
          loading: false,
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/signup",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
              children: "SignUp"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};
_s(LoginForm, "cdyLrA6juktyv9JEO/w/0ppih2I=");
_c3 = LoginForm;
/* harmony default export */ __webpack_exports__["default"] = (LoginForm);
var _c, _c2, _c3;
$RefreshReg$(_c, "ButtonWrapper");
$RefreshReg$(_c2, "FormWrapper");
$RefreshReg$(_c3, "LoginForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiXSwibmFtZXMiOlsiQnV0dG9uV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIl90ZW1wbGF0ZU9iamVjdCIsIl90YWdnZWRUZW1wbGF0ZUxpdGVyYWwiLCJfYyIsIkZvcm1XcmFwcGVyIiwiRm9ybSIsIl90ZW1wbGF0ZU9iamVjdDIiLCJfYzIiLCJMb2dpbkZvcm0iLCJfcmVmIiwiX3MiLCJzZXRJc0xvZ2dlZEluIiwiX3VzZVN0YXRlIiwidXNlU3RhdGUiLCJpZCIsInNldElkIiwiX3VzZVN0YXRlMiIsInB3Iiwic2V0UHciLCJvbkNoYW5nZUlkIiwidXNlQ2FsbGJhY2siLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJvbkNoYW5nZVB3Iiwib25TdWJtaXRGb3JtIiwiY29uc29sZSIsImxvZyIsIl9qc3hERVYiLCJfRnJhZ21lbnQiLCJjaGlsZHJlbiIsIm9uRmluaXNoIiwiaHRtbEZvciIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIl90aGlzIiwiSW5wdXQiLCJuYW1lIiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsIkJ1dHRvbiIsInR5cGUiLCJodG1sVHlwZSIsImxvYWRpbmciLCJMaW5rIiwiaHJlZiIsIl9jMyIsIiRSZWZyZXNoUmVnJCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7QUFDZDtBQUNpQjtBQUNQO0FBQUE7QUFBQTtBQUV2QyxJQUFNQSxhQUFhLEdBQUdDLHlEQUFNLENBQUNDLEdBQUcsQ0FBQUMsZUFBQSxLQUFBQSxlQUFBLEdBQUFDLGdHQUFBLCtCQUUvQjtBQUFDQyxFQUFBLEdBRklMLGFBQWE7QUFJbkIsSUFBTU0sV0FBVyxHQUFHTCxpRUFBTSxDQUFDTSx5Q0FBSSxDQUFDLENBQUFDLGdCQUFBLEtBQUFBLGdCQUFBLEdBQUFKLGdHQUFBLDRCQUUvQjtBQUFDSyxHQUFBLEdBRklI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Q0MsSUFBSSxFQUFDLFNBQVM7VUFBQ0MsUUFBUSxFQUFDLFFBQVE7VUFBQ0MsT0FBTyxFQUFFLEtBQU07VUFBQWYsUUFBQTtRQUFBO1VBQUFHLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxHQUFBQyxLQUFBLENBRS9DLGVBQ1RULG9FQUFBLENBQUNrQixnREFBSTtVQUFDQyxJQUFJLEVBQUMsU0FBUztVQUFBakIsUUFBQSxlQUNsQkYsb0VBQUE7WUFBQUUsUUFBQSxlQUNFRixvRUFBQSxDQUFDYywyQ0FBTTtjQUFBWixRQUFBO1lBQUE7Y0FBQUcsUUFBQSxFQUFBQyxZQUFBO2NBQUFDLFVBQUE7Y0FBQUMsWUFBQTtZQUFBLEdBQUFDLEtBQUE7VUFBZ0I7WUFBQUosUUFBQSxFQUFBQyxZQUFBO1lBQUFDLFVBQUE7WUFBQUMsWUFBQTtVQUFBLEdBQUFDLEtBQUE7UUFDckI7VUFBQUosUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLEdBQUFDLEtBQUEsQ0FDQztNQUFBO1FBQUFKLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQSxHQUFBQyxLQUFBLENBQ087SUFBQTtNQUFBSixRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsR0FBQUMsS0FBQTtFQUNKLGlCQUNiO0FBRVAsQ0FBQztBQUFDM0IsRUFBQSxDQTVESUYsU0FBUztBQUFBd0MsR0FBQSxHQUFUeEMsU0FBUztBQThEQUEsd0VBQVMsRUFBQztBQUFBLElBQUFMLEVBQUEsRUFBQUksR0FBQSxFQUFBeUMsR0FBQTtBQUFBQyxZQUFBLENBQUE5QyxFQUFBO0FBQUE4QyxZQUFBLENBQUExQyxHQUFBO0FBQUEwQyxZQUFBLENBQUFELEdBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbnVwLjc1ZTIwZGNmZmJlMGRmYzJkMzc1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24sIEZvcm0sIElucHV0IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IEJ1dHRvbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBGb3JtV3JhcHBlciA9IHN0eWxlZChGb3JtKWBcclxuICBwYWRkaW5nOiAxMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgTG9naW5Gb3JtID0gKHsgc2V0SXNMb2dnZWRJbiB9KSA9PiB7XHJcbiAgY29uc3QgW2lkLCBzZXRJZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcHcsIHNldFB3XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAvL3VzZU1lbW/vvJrlgKRjYWNoZVxyXG4gIC8vdXNlQ2FsbGJhY2vvvJrjgrPjg7Pjg53jg43jg7Pjg4jjgatQcm9wc+OBqOOBl+OBpua4oeOBmemWouaVsOOBr3VzZUNhbGxiYWNr44KS5L2/44GG44GT44Go44Gn5pyA6YGp5YyW44GV44KM44KL44CB6Zai5pWwY2FjaGVcclxuICBjb25zdCBvbkNoYW5nZUlkID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIHNldElkKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlUHcgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgc2V0UHcoZS50YXJnZXQudmFsdWUpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXRGb3JtID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coaWQsIHB3KTtcclxuICAgIHNldElzTG9nZ2VkSW4odHJ1ZSk7XHJcbiAgfSwgW2lkLCBwd10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgey8qIG9uRmluaXNo44Gr44GvZS5wcmV2ZW50ZGVmYXVsdOOBjOaXouOBq+mBqeeUqOOBleOCjOOBpuOBhOOCiyAqL31cclxuICAgICAgPEZvcm1XcmFwcGVyIG9uRmluaXNoPXtvblN1Ym1pdEZvcm19PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXItaWRcIj5JRDwvbGFiZWw+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICBuYW1lPVwidXNlci1pZFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtpZH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlSWR9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICA+PC9JbnB1dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VyLXB3XCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgbmFtZT1cInVzZXItcHdcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cHd9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVB3fVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgPjwvSW5wdXQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIOOCs+ODs+ODneODjeODs+ODiOOBruS4reOBq+OCquODluOCuOOCp+OCr+ODiOOCkuWFpeOCjOOCi+OBqOavjuWbnnJlcmVuZGVyaW5n44GV44KM44KL44Gf44KB44CB5YWl44KM44Gm44Gv44OA44OhIC0+IHN0eWxlZCBjb21wb25lbnTjgpLkvb/nlKgqL31cclxuICAgICAgICB7LyogcmVyZW5kZXJpbmfljrvjgozjgovnr4Tlm7Ljga/jgrPjg7Pjg53jg43jg7Pjg4jlhajpoJjln5/jgaDjgYzjgIHlrp/pmpvjgavmj4/jgY3nm7TjgZnjgajjgZPjgo3jga92aXJ0dWFsRE9N44Gu5YmN5Zue44Go5q+U44G544Gm5aSJ44KP44Gj44Gf44Go44GT44KN44Gu44G/44CB44Gg44GL44KJICovfVxyXG4gICAgICAgIHsvKiB1c2VNZW1v44Go44GLc3R5bGVkIGNvbXBvbmVudOOCkuWIqeeUqOOBl+OBpuaPj+OBjeebtOOBleOCjOOCi+OBk+OBqOOCkumYsuatouOBmeOCiyAqL31cclxuICAgICAgICB7LyogPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTBweFwiIH19PiAqL31cclxuICAgICAgICA8QnV0dG9uV3JhcHBlcj5cclxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiIGxvYWRpbmc9e2ZhbHNlfT5cclxuICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWdudXBcIj5cclxuICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbj5TaWduVXA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvQnV0dG9uV3JhcHBlcj5cclxuICAgICAgPC9Gb3JtV3JhcHBlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=