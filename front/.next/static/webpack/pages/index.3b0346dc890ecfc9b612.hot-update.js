webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CommentForm.js":
/*!***********************************!*\
  !*** ./components/CommentForm.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./components/PostCard.js":
/*!********************************!*\
  !*** ./components/PostCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _PostImages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PostImages */ "./components/PostImages.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CommentForm */ "./components/CommentForm.js");
/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_CommentForm__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "E:\\web\\nodebrid1\\front\\components\\PostCard.js",
  _this = undefined,
  _s = $RefreshSig$();









var PostCard = function PostCard(_ref) {
  _s();
  var post = _ref.post;
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
      return state.user;
    }),
    me = _useSelector.me;
  var id = me && me.id;
  // = const id = me?.id; => optional chaining operation

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
    liked = _useState[0],
    setLiked = _useState[1];
  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
    conmmentFormOpened = _useState2[0],
    setCommentFormOpened = _useState2[1];
  var onToggleLike = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (e) {
    // if (liked === true) {
    //   setLiked(false);
    // } else {
    //   setLiked(true);
    // }
    setLiked(function (prev) {
      return !prev;
    });
  }, []);
  var onToggleComment = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (e) {
    setCommentFormOpened(function (prev) {
      return !prev;
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
    style: {
      marginBottom: "20px"
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Card"], {
      cover: post.Images[0] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_PostImages__WEBPACK_IMPORTED_MODULE_4__["default"], {
        images: post.Images
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 34
      }, _this),
      actions: [
      /*#__PURE__*/
      //actionはArrayだからKeyが必要になる
      Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["RetweetOutlined"], {}, "retweet", false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 11
      }, _this), liked ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["HeartTwoTone"], {
        twoToneColor: "#eb2f96",
        onClick: onToggleLike
      }, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["HeartOutlined"], {
        onClick: onToggleLike
      }, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["MessageOutlined"], {
        onClick: onToggleComment
      }, "comment", false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Popover"], {
        content: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Button"].Group, {
          children: id && post.User.id === id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
              children: "Update"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 21
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
              type: "danger",
              children: "Delete"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 21
            }, _this)]
          }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
            children: "Report"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 19
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 15
        }, _this)],
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["EllipsisOutlined"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 13
        }, _this)
      }, "more", false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 11
      }, _this)],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Card"].Meta, {
        avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
          children: post.User.nickname[0]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 19
        }, _this),
        title: post.User.nickname,
        description: post.content
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, _this), conmmentFormOpened && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_CommentForm__WEBPACK_IMPORTED_MODULE_6___default.a, {
        post: post
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["List"], {
        header: "".concat(post.Comments.length, "\u500B\u306E\u30B3\u30E1\u30F3\u30C8"),
        itemLayout: "horizontal",
        dataSource: post.Comments,
        renderItem: function renderItem(item) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["List"].Item, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["List"].Item.Meta, {
              avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
                children: item.User.nickname[0]
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 29
              }, _this),
              title: item.content
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 19
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 17
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, _this);
};
_s(PostCard, "T99IGgkU29ifaQsedIW086S/Bxc=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});
_c = PostCard;
PostCard.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
    User: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
    content: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    Images: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object),
    Comments: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object)
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostCard);
var _c;
$RefreshReg$(_c, "PostCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJQb3N0Q2FyZCIsIl9yZWYiLCJfcyIsInBvc3QiLCJfdXNlU2VsZWN0b3IiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwiaWQiLCJfdXNlU3RhdGUiLCJ1c2VTdGF0ZSIsImxpa2VkIiwic2V0TGlrZWQiLCJfdXNlU3RhdGUyIiwiY29ubW1lbnRGb3JtT3BlbmVkIiwic2V0Q29tbWVudEZvcm1PcGVuZWQiLCJvblRvZ2dsZUxpa2UiLCJ1c2VDYWxsYmFjayIsImUiLCJwcmV2Iiwib25Ub2dnbGVDb21tZW50IiwiX2pzeERFViIsInN0eWxlIiwibWFyZ2luQm90dG9tIiwiY2hpbGRyZW4iLCJDYXJkIiwiY292ZXIiLCJJbWFnZXMiLCJQb3N0SW1hZ2VzIiwiaW1hZ2VzIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiX3RoaXMiLCJhY3Rpb25zIiwiUmV0d2VldE91dGxpbmVkIiwiSGVhcnRUd29Ub25lIiwidHdvVG9uZUNvbG9yIiwib25DbGljayIsIkhlYXJ0T3V0bGluZWQiLCJNZXNzYWdlT3V0bGluZWQiLCJQb3BvdmVyIiwiY29udGVudCIsIkJ1dHRvbiIsIkdyb3VwIiwiVXNlciIsIl9GcmFnbWVudCIsInR5cGUiLCJFbGxpcHNpc091dGxpbmVkIiwiTWV0YSIsImF2YXRhciIsIkF2YXRhciIsIm5pY2tuYW1lIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIkNvbW1lbnRGb3JtIiwiTGlzdCIsImhlYWRlciIsImNvbmNhdCIsIkNvbW1lbnRzIiwibGVuZ3RoIiwiaXRlbUxheW91dCIsImRhdGFTb3VyY2UiLCJyZW5kZXJJdGVtIiwiaXRlbSIsIkl0ZW0iLCJfYyIsInByb3BUeXBlcyIsIlByb3B0eXBlcyIsInNoYXBlIiwibnVtYmVyIiwib2JqZWN0Iiwic3RyaW5nIiwiYXJyYXlPZiIsImlz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dXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXZhdGFyLCBCdXR0b24sIENhcmQsIExpc3QsIFBvcG92ZXIsIENvbW1lbnQgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQge1xyXG4gIEVsbGlwc2lzT3V0bGluZWQsXHJcbiAgSGVhcnRPdXRsaW5lZCxcclxuICBIZWFydFR3b1RvbmUsXHJcbiAgTWVzc2FnZU91dGxpbmVkLFxyXG4gIFJldHdlZXRPdXRsaW5lZCxcclxufSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IFByb3B0eXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgUG9zdEltYWdlcyBmcm9tIFwiLi9Qb3N0SW1hZ2VzXCI7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ29tbWVudEZvcm0gZnJvbSBcIi4vQ29tbWVudEZvcm1cIjtcclxuXHJcbmNvbnN0IFBvc3RDYXJkID0gKHsgcG9zdCB9KSA9PiB7XHJcbiAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICBjb25zdCBpZCA9IG1lICYmIG1lLmlkO1xyXG4gIC8vID0gY29uc3QgaWQgPSBtZT8uaWQ7ID0+IG9wdGlvbmFsIGNoYWluaW5nIG9wZXJhdGlvblxyXG5cclxuICBjb25zdCBbbGlrZWQsIHNldExpa2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY29ubW1lbnRGb3JtT3BlbmVkLCBzZXRDb21tZW50Rm9ybU9wZW5lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IG9uVG9nZ2xlTGlrZSA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICAvLyBpZiAobGlrZWQgPT09IHRydWUpIHtcclxuICAgIC8vICAgc2V0TGlrZWQoZmFsc2UpO1xyXG4gICAgLy8gfSBlbHNlIHtcclxuICAgIC8vICAgc2V0TGlrZWQodHJ1ZSk7XHJcbiAgICAvLyB9XHJcbiAgICBzZXRMaWtlZCgocHJldikgPT4gIXByZXYpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb25Ub2dnbGVDb21tZW50ID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIHNldENvbW1lbnRGb3JtT3BlbmVkKChwcmV2KSA9PiAhcHJldik7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMjBweFwiIH19PlxyXG4gICAgICA8Q2FyZFxyXG4gICAgICAgIGNvdmVyPXtwb3N0LkltYWdlc1swXSAmJiA8UG9zdEltYWdlcyBpbWFnZXM9e3Bvc3QuSW1hZ2VzfT48L1Bvc3RJbWFnZXM+fVxyXG4gICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgIC8vYWN0aW9u44GvQXJyYXnjgaDjgYvjgolLZXnjgYzlv4XopoHjgavjgarjgotcclxuICAgICAgICAgIDxSZXR3ZWV0T3V0bGluZWQga2V5PVwicmV0d2VldFwiPjwvUmV0d2VldE91dGxpbmVkPixcclxuICAgICAgICAgIGxpa2VkID8gKFxyXG4gICAgICAgICAgICA8SGVhcnRUd29Ub25lXHJcbiAgICAgICAgICAgICAgdHdvVG9uZUNvbG9yPVwiI2ViMmY5NlwiXHJcbiAgICAgICAgICAgICAga2V5PVwiaGVhcnRcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e29uVG9nZ2xlTGlrZX1cclxuICAgICAgICAgICAgPjwvSGVhcnRUd29Ub25lPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPEhlYXJ0T3V0bGluZWQga2V5PVwiaGVhcnRcIiBvbkNsaWNrPXtvblRvZ2dsZUxpa2V9PjwvSGVhcnRPdXRsaW5lZD5cclxuICAgICAgICAgICksXHJcbiAgICAgICAgICA8TWVzc2FnZU91dGxpbmVkXHJcbiAgICAgICAgICAgIGtleT1cImNvbW1lbnRcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtvblRvZ2dsZUNvbW1lbnR9XHJcbiAgICAgICAgICA+PC9NZXNzYWdlT3V0bGluZWQ+LFxyXG4gICAgICAgICAgPFBvcG92ZXJcclxuICAgICAgICAgICAga2V5PVwibW9yZVwiXHJcbiAgICAgICAgICAgIGNvbnRlbnQ9e1tcclxuICAgICAgICAgICAgICA8QnV0dG9uLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAge2lkICYmIHBvc3QuVXNlci5pZCA9PT0gaWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj5VcGRhdGU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJkYW5nZXJcIj5EZWxldGU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uPlJlcG9ydDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L0J1dHRvbi5Hcm91cD4sXHJcbiAgICAgICAgICAgIF19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxFbGxpcHNpc091dGxpbmVkPjwvRWxsaXBzaXNPdXRsaW5lZD5cclxuICAgICAgICAgIDwvUG9wb3Zlcj4sXHJcbiAgICAgICAgXX1cclxuICAgICAgPlxyXG4gICAgICAgIDxDYXJkLk1ldGFcclxuICAgICAgICAgIGF2YXRhcj17PEF2YXRhcj57cG9zdC5Vc2VyLm5pY2tuYW1lWzBdfTwvQXZhdGFyPn1cclxuICAgICAgICAgIHRpdGxlPXtwb3N0LlVzZXIubmlja25hbWV9XHJcbiAgICAgICAgICBkZXNjcmlwdGlvbj17cG9zdC5jb250ZW50fVxyXG4gICAgICAgID48L0NhcmQuTWV0YT5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgICB7Y29ubW1lbnRGb3JtT3BlbmVkICYmIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPENvbW1lbnRGb3JtIHBvc3Q9e3Bvc3R9PjwvQ29tbWVudEZvcm0+XHJcbiAgICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgICBoZWFkZXI9e2Ake3Bvc3QuQ29tbWVudHMubGVuZ3RofeWAi+OBruOCs+ODoeODs+ODiGB9XHJcbiAgICAgICAgICAgIGl0ZW1MYXlvdXQ9XCJob3Jpem9udGFsXCJcclxuICAgICAgICAgICAgZGF0YVNvdXJjZT17cG9zdC5Db21tZW50c31cclxuICAgICAgICAgICAgcmVuZGVySXRlbT17KGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPExpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbS5NZXRhXHJcbiAgICAgICAgICAgICAgICAgICAgYXZhdGFyPXs8QXZhdGFyPntpdGVtLlVzZXIubmlja25hbWVbMF19PC9BdmF0YXI+fVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgID48L0xpc3QuSXRlbS5NZXRhPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID48L0xpc3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuUG9zdENhcmQucHJvcFR5cGVzID0ge1xyXG4gIHBvc3Q6IFByb3B0eXBlcy5zaGFwZSh7XHJcbiAgICBpZDogUHJvcHR5cGVzLm51bWJlcixcclxuICAgIFVzZXI6IFByb3B0eXBlcy5vYmplY3QsXHJcbiAgICBjb250ZW50OiBQcm9wdHlwZXMuc3RyaW5nLFxyXG4gICAgSW1hZ2VzOiBQcm9wdHlwZXMuYXJyYXlPZihQcm9wdHlwZXMub2JqZWN0KSxcclxuICAgIENvbW1lbnRzOiBQcm9wdHlwZXMuYXJyYXlPZihQcm9wdHlwZXMub2JqZWN0KSxcclxuICB9KS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdENhcmQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=