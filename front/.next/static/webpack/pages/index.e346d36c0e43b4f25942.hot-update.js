webpackHotUpdate_N_E("pages/index",{

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
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_CommentForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
        post: post
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["List"], {
        header: "".concat(post.Comments.length, "\u500B\u306E\u30B3\u30E1\u30F3\u30C8"),
        itemLayout: "horizontal",
        style: {
          position: "relative",
          top: "-23px"
        },
        dataSource: post.Comments,
        renderItem: function renderItem(item) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["List"].Item, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["List"].Item.Meta, {
              avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
                children: item.User.nickname[0]
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 29
              }, _this),
              title: item.content
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 19
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJQb3N0Q2FyZCIsIl9yZWYiLCJfcyIsInBvc3QiLCJfdXNlU2VsZWN0b3IiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwiaWQiLCJfdXNlU3RhdGUiLCJ1c2VTdGF0ZSIsImxpa2VkIiwic2V0TGlrZWQiLCJfdXNlU3RhdGUyIiwiY29ubW1lbnRGb3JtT3BlbmVkIiwic2V0Q29tbWVudEZvcm1PcGVuZWQiLCJvblRvZ2dsZUxpa2UiLCJ1c2VDYWxsYmFjayIsImUiLCJwcmV2Iiwib25Ub2dnbGVDb21tZW50IiwiX2pzeERFViIsInN0eWxlIiwibWFyZ2luQm90dG9tIiwiY2hpbGRyZW4iLCJDYXJkIiwiY292ZXIiLCJJbWFnZXMiLCJQb3N0SW1hZ2VzIiwiaW1hZ2VzIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiX3RoaXMiLCJhY3Rpb25zIiwiUmV0d2VldE91dGxpbmVkIiwiSGVhcnRUd29Ub25lIiwidHdvVG9uZUNvbG9yIiwib25DbGljayIsIkhlYXJ0T3V0bGluZWQiLCJNZXNzYWdlT3V0bGluZWQiLCJQb3BvdmVyIiwiY29udGVudCIsIkJ1dHRvbiIsIkdyb3VwIiwiVXNlciIsIl9GcmFnbWVudCIsInR5cGUiLCJFbGxpcHNpc091dGxpbmVkIiwiTWV0YSIsImF2YXRhciIsIkF2YXRhciIsIm5pY2tuYW1lIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIkNvbW1lbnRGb3JtIiwiTGlzdCIsImhlYWRlciIsImNvbmNhdCIsIkNvbW1lbnRzIiwibGVuZ3RoIiwiaXRlbUxheW91dCIsInBvc2l0aW9uIiwidG9wIiwiZGF0YVNvdXJjZSIsInJlbmRlckl0ZW0iLCJpdGVtIiwiSXRlbSIsIl9jIiwicHJvcFR5cGVzIiwiUHJvcHR5cGVzIiwic2hhcGUiLCJudW1iZXIiLCJvYmplY3QiLCJzdHJp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M2I0ZjI1OTQyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdmF0YXIsIEJ1dHRvbiwgQ2FyZCwgTGlzdCwgUG9wb3ZlciwgQ29tbWVudCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7XHJcbiAgRWxsaXBzaXNPdXRsaW5lZCxcclxuICBIZWFydE91dGxpbmVkLFxyXG4gIEhlYXJ0VHdvVG9uZSxcclxuICBNZXNzYWdlT3V0bGluZWQsXHJcbiAgUmV0d2VldE91dGxpbmVkLFxyXG59IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgUHJvcHR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBQb3N0SW1hZ2VzIGZyb20gXCIuL1Bvc3RJbWFnZXNcIjtcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDb21tZW50Rm9ybSBmcm9tIFwiLi9Db21tZW50Rm9ybVwiO1xyXG5cclxuY29uc3QgUG9zdENhcmQgPSAoeyBwb3N0IH0pID0+IHtcclxuICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gIGNvbnN0IGlkID0gbWUgJiYgbWUuaWQ7XHJcbiAgLy8gPSBjb25zdCBpZCA9IG1lPy5pZDsgPT4gb3B0aW9uYWwgY2hhaW5pbmcgb3BlcmF0aW9uXHJcblxyXG4gIGNvbnN0IFtsaWtlZCwgc2V0TGlrZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtjb25tbWVudEZvcm1PcGVuZWQsIHNldENvbW1lbnRGb3JtT3BlbmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgb25Ub2dnbGVMaWtlID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIC8vIGlmIChsaWtlZCA9PT0gdHJ1ZSkge1xyXG4gICAgLy8gICBzZXRMaWtlZChmYWxzZSk7XHJcbiAgICAvLyB9IGVsc2Uge1xyXG4gICAgLy8gICBzZXRMaWtlZCh0cnVlKTtcclxuICAgIC8vIH1cclxuICAgIHNldExpa2VkKChwcmV2KSA9PiAhcHJldik7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvblRvZ2dsZUNvbW1lbnQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgc2V0Q29tbWVudEZvcm1PcGVuZWQoKHByZXYpID0+ICFwcmV2KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIyMHB4XCIgfX0+XHJcbiAgICAgIDxDYXJkXHJcbiAgICAgICAgY292ZXI9e3Bvc3QuSW1hZ2VzWzBdICYmIDxQb3N0SW1hZ2VzIGltYWdlcz17cG9zdC5JbWFnZXN9PjwvUG9zdEltYWdlcz59XHJcbiAgICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgICAgLy9hY3Rpb27jga9BcnJheeOBoOOBi+OCiUtleeOBjOW/heimgeOBq+OBquOCi1xyXG4gICAgICAgICAgPFJldHdlZXRPdXRsaW5lZCBrZXk9XCJyZXR3ZWV0XCI+PC9SZXR3ZWV0T3V0bGluZWQ+LFxyXG4gICAgICAgICAgbGlrZWQgPyAoXHJcbiAgICAgICAgICAgIDxIZWFydFR3b1RvbmVcclxuICAgICAgICAgICAgICB0d29Ub25lQ29sb3I9XCIjZWIyZjk2XCJcclxuICAgICAgICAgICAgICBrZXk9XCJoZWFydFwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17b25Ub2dnbGVMaWtlfVxyXG4gICAgICAgICAgICA+PC9IZWFydFR3b1RvbmU+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8SGVhcnRPdXRsaW5lZCBrZXk9XCJoZWFydFwiIG9uQ2xpY2s9e29uVG9nZ2xlTGlrZX0+PC9IZWFydE91dGxpbmVkPlxyXG4gICAgICAgICAgKSxcclxuICAgICAgICAgIDxNZXNzYWdlT3V0bGluZWRcclxuICAgICAgICAgICAga2V5PVwiY29tbWVudFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uVG9nZ2xlQ29tbWVudH1cclxuICAgICAgICAgID48L01lc3NhZ2VPdXRsaW5lZD4sXHJcbiAgICAgICAgICA8UG9wb3ZlclxyXG4gICAgICAgICAgICBrZXk9XCJtb3JlXCJcclxuICAgICAgICAgICAgY29udGVudD17W1xyXG4gICAgICAgICAgICAgIDxCdXR0b24uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICB7aWQgJiYgcG9zdC5Vc2VyLmlkID09PSBpZCA/IChcclxuICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPlVwZGF0ZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cImRhbmdlclwiPkRlbGV0ZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24+UmVwb3J0PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uLkdyb3VwPixcclxuICAgICAgICAgICAgXX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEVsbGlwc2lzT3V0bGluZWQ+PC9FbGxpcHNpc091dGxpbmVkPlxyXG4gICAgICAgICAgPC9Qb3BvdmVyPixcclxuICAgICAgICBdfVxyXG4gICAgICA+XHJcbiAgICAgICAgPENhcmQuTWV0YVxyXG4gICAgICAgICAgYXZhdGFyPXs8QXZhdGFyPntwb3N0LlVzZXIubmlja25hbWVbMF19PC9BdmF0YXI+fVxyXG4gICAgICAgICAgdGl0bGU9e3Bvc3QuVXNlci5uaWNrbmFtZX1cclxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtwb3N0LmNvbnRlbnR9XHJcbiAgICAgICAgPjwvQ2FyZC5NZXRhPlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICAgIHtjb25tbWVudEZvcm1PcGVuZWQgJiYgKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8Q29tbWVudEZvcm0gcG9zdD17cG9zdH0+PC9Db21tZW50Rm9ybT5cclxuICAgICAgICAgIDxMaXN0XHJcbiAgICAgICAgICAgIGhlYWRlcj17YCR7cG9zdC5Db21tZW50cy5sZW5ndGh95YCL44Gu44Kz44Oh44Oz44OIYH1cclxuICAgICAgICAgICAgaXRlbUxheW91dD1cImhvcml6b250YWxcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCB0b3A6IFwiLTIzcHhcIiB9fVxyXG4gICAgICAgICAgICBkYXRhU291cmNlPXtwb3N0LkNvbW1lbnRzfVxyXG4gICAgICAgICAgICByZW5kZXJJdGVtPXsoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8TGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtLk1ldGFcclxuICAgICAgICAgICAgICAgICAgICBhdmF0YXI9ezxBdmF0YXI+e2l0ZW0uVXNlci5uaWNrbmFtZVswXX08L0F2YXRhcj59XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0uY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgPjwvTGlzdC5JdGVtLk1ldGE+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvTGlzdD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5Qb3N0Q2FyZC5wcm9wVHlwZXMgPSB7XHJcbiAgcG9zdDogUHJvcHR5cGVzLnNoYXBlKHtcclxuICAgIGlkOiBQcm9wdHlwZXMubnVtYmVyLFxyXG4gICAgVXNlcjogUHJvcHR5cGVzLm9iamVjdCxcclxuICAgIGNvbnRlbnQ6IFByb3B0eXBlcy5zdHJpbmcsXHJcbiAgICBJbWFnZXM6IFByb3B0eXBlcy5hcnJheU9mKFByb3B0eXBlcy5vYmplY3QpLFxyXG4gICAgQ29tbWVudHM6IFByb3B0eXBlcy5hcnJheU9mKFByb3B0eXBlcy5vYmplY3QpLFxyXG4gIH0pLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==