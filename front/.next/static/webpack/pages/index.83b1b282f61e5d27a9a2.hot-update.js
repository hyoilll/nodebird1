webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CommentForm.js":
/*!***********************************!*\
  !*** ./components/CommentForm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "E:\\web\\nodebrid1\\front\\components\\CommentForm.js",
  _this = undefined,
  _s = $RefreshSig$();






var CommentForm = function CommentForm(_ref) {
  _s();
  var post = _ref.post;
  var id = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    var _state$user$me;
    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  });
  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_2__["default"])(""),
    _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
    commentText = _useInput2[0],
    onChangeCommentText = _useInput2[1];
  var onSubmitComment = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function () {
    console.log(post.id, commentText);
  }, [commentText]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onFinish: onSubmitComment,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].TextArea, {
        value: commentText,
        onChange: onChangeCommentText,
        rows: 4
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        type: "primary",
        htmlType: "submit",
        style: {
          position: "absolute",
          bottom: "-40%",
          right: "0%"
        },
        children: "Upload"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, _this);
};
_s(CommentForm, "PptqMkMnW7reCXQEE7qotaIWwp0=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_2__["default"]];
});
_c = CommentForm;
CommentForm.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CommentForm);
var _c;
$RefreshReg$(_c, "CommentForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50Rm9ybS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJDb21tZW50Rm9ybSIsIl9yZWYiLCJfcyIsInBvc3QiLCJpZCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJfc3RhdGUkdXNlciRtZSIsInVzZXIiLCJtZSIsIl91c2VJbnB1dCIsInVzZUlucHV0IiwiX3VzZUlucHV0MiIsIl9zbGljZWRUb0FycmF5IiwiY29tbWVudFRleHQiLCJvbkNoYW5nZUNvbW1lbnRUZXh0Iiwib25TdWJtaXRDb21tZW50IiwidXNlQ2FsbGJhY2siLCJjb25zb2xlIiwibG9nIiwiX2pzeERFViIsIkZvcm0iLCJvbkZpbmlzaCIsImNoaWxkcmVuIiwiSXRlbSIsIklucHV0IiwiVGV4dEFyZWEiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwicm93cyIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIl90aGlzIiwiQnV0dG9uIiwidHlwZSIsImh0bWxUeXBlIiwic3R5bGUiLCJwb3NpdGlvbiIsImJvdHRvbSIsInJpZ2h0IiwiX2MiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiJFJlZnJlc2hSZWckIiwiUG9zdENhcmQiLCJfdXNlU2VsZWN0b3IiLCJfdXNlU3RhdGUiLCJ1c2VTdGF0ZSIsImxpa2VkIiwic2V0TGlrZWQiLCJfdXNlU3RhdGUyIiwiY29ubW1lbnRGb3JtT3BlbmVkIiwic2V0Q29tbWVudEZvcm1PcGVuZWQiLCJvblRvZ2dsZUxpa2UiLCJlIiwicHJldiIsIm9uVG9nZ2xlQ29tbWVudCIsIm1hcmdpbkJvdHRvbSIsIkNhcmQiLCJjb3ZlciIsIkltYWdlcyIsIlBvc3RJbWFnZXMiLCJpbWFnZXMiLCJhY3Rpb25zIiwiUmV0d2VldE91dGxpbmVkIiwiSGVhcnRUd29Ub25lIiwidHdvVG9uZUNvbG9yIiwib25DbGljayIsIkhlYXJ0T3V0bGluZWQiLCJNZXNzYWdlT3V0bGluZWQiLCJQb3BvdmVyIiwiY29udGVudCIsIkdyb3VwIiwiVXNlciIsIl9GcmFnbWVudCIsIkVsbGlwc2lzT3V0bGluZWQiLCJNZXRhIiwiYXZhdGFyIiwiQXZhdGFyIiwibmlja25hbWUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiTGlzdCIsImhlYWRlciIsImNvbmNhdCIsIkNvbW1lbnRzIiwibGVuZ3RoIiwiaXRlbUxheW91dCIsImRhdGFTb3VyY2UiLCJyZW5kZXJJdGVtIiwiaXRlbSIsIlByb3B0eXBlcyIsInNoYXBlIiwibnVtYmVyIiwic3RyaW5nIiwiYXJyYXlPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEyQztBQUNGO0FBQ047QUFDTztBQUNOO0FBQUE7QUFFcEMsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUFDLElBQUEsRUFBaUI7RUFBQUMsRUFBQTtFQUFBLElBQVhDLElBQUksR0FBQUYsSUFBQSxDQUFKRSxJQUFJO0VBQ3pCLElBQU1DLEVBQUUsR0FBR0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFLO0lBQUEsSUFBQUMsY0FBQTtJQUFBLFFBQUFBLGNBQUEsR0FBS0QsS0FBSyxDQUFDRSxJQUFJLENBQUNDLEVBQUUsY0FBQUYsY0FBQSx1QkFBYkEsY0FBQSxDQUFlSCxFQUFFO0VBQUEsRUFBQztFQUNwRCxJQUFBTSxTQUFBLEdBQTJDQywrREFBUSxDQUFDLEVBQUUsQ0FBQztJQUFBQyxVQUFBLEdBQUFDLHdGQUFBLENBQUFILFNBQUE7SUFBaERJLFdBQVcsR0FBQUYsVUFBQTtJQUFFRyxtQkFBbUIsR0FBQUgsVUFBQTtFQUN2QyxJQUFNSSxlQUFlLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtJQUN4Q0MsT0FBTyxDQUFDQyxHQUFHLENBQUNoQixJQUFJLENBQUNDLEVBQUUsRUFBRVUsV0FBVyxDQUFDO0VBQ25DLENBQUMsRUFBRSxDQUFDQSxXQUFX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LEVBQUFDLFlBQUE7Y0FBQUMsVUFBQTtjQUFBQyxZQUFBO1lBQUEsR0FBQUMsS0FBQTtVQUNKO1lBQUFKLFFBQUEsRUFBQUMsWUFBQTtZQUFBQyxVQUFBO1lBQUFDLFlBQUE7VUFBQSxHQUFBQyxLQUFBLENBQ1I7UUFFaEI7TUFBRTtRQUFBSixRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsR0FBQUMsS0FBQSxDQUNJO0lBQUE7TUFBQUosUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLEdBQUFDLEtBQUEsQ0FFWDtFQUFBO0lBQUFKLFFBQUEsRUFBQUMsWUFBQTtJQUFBQyxVQUFBO0lBQUFDLFlBQUE7RUFBQSxHQUFBQyxLQUFBLENBQ0c7QUFFVixDQUFDO0FBQUNoQyxFQUFBLENBeEZJOEMsUUFBUTtFQUFBLFFBQ0czQyx1REFBVztBQUFBO0FBQUFxQyxFQUFBLEdBRHRCTSxRQUFRO0FBMEZkQSxRQUFRLENBQUNMLFNBQVMsR0FBRztFQUNuQnhDLElBQUksRUFBRTRGLGlEQUFTLENBQUNDLEtBQUssQ0FBQztJQUNwQjVGLEVBQUUsRUFBRTJGLGlEQUFTLENBQUNFLE1BQU07SUFDcEJwQixJQUFJLEVBQUVrQixpREFBUyxDQUFDbEQsTUFBTTtJQUN0QjhCLE9BQU8sRUFBRW9CLGlEQUFTLENBQUNHLE1BQU07SUFDekJsQyxNQUFNLEVBQUUrQixpREFBUyxDQUFDSSxPQUFPLENBQUNKLGlEQUFTLENBQUNsRCxNQUFNLENBQUM7SUFDM0M0QyxRQUFRLEVBQUVNLGlEQUFTLENBQUNJLE9BQU8sQ0FBQ0osaURBQVMsQ0FBQ2xELE1BQU07RUFDOUMsQ0FBQyxDQUFDLENBQUNDO0FBQ0wsQ0FBQztBQUVjRSx1RUFBUSxFQUFDO0FBQUEsSUFBQU4sRUFBQTtBQUFBSyxZQUFBLENBQUFMLEVBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODNiMWIyODJmNjFlNWQyN2E5YTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiwgRm9ybSwgSW5wdXQgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSBcIi4uL2hvb2tzL3VzZUlucHV0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IENvbW1lbnRGb3JtID0gKHsgcG9zdCB9KSA9PiB7XHJcbiAgY29uc3QgaWQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIubWU/LmlkKTtcclxuICBjb25zdCBbY29tbWVudFRleHQsIG9uQ2hhbmdlQ29tbWVudFRleHRdID0gdXNlSW5wdXQoXCJcIik7XHJcbiAgY29uc3Qgb25TdWJtaXRDb21tZW50ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2cocG9zdC5pZCwgY29tbWVudFRleHQpO1xyXG4gIH0sIFtjb21tZW50VGV4dF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm0gb25GaW5pc2g9e29uU3VibWl0Q29tbWVudH0+XHJcbiAgICAgIDxGb3JtLkl0ZW0+XHJcbiAgICAgICAgPElucHV0LlRleHRBcmVhXHJcbiAgICAgICAgICB2YWx1ZT17Y29tbWVudFRleHR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VDb21tZW50VGV4dH1cclxuICAgICAgICAgIHJvd3M9ezR9XHJcbiAgICAgICAgPjwvSW5wdXQuVGV4dEFyZWE+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgaHRtbFR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgYm90dG9tOiBcIi00MCVcIiwgcmlnaHQ6IFwiMCVcIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIFVwbG9hZFxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L0Zvcm0uSXRlbT5cclxuICAgIDwvRm9ybT5cclxuICApO1xyXG59O1xyXG5cclxuQ29tbWVudEZvcm0ucHJvcFR5cGVzID0ge1xyXG4gIHBvc3Q6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRGb3JtO1xyXG4iLCJpbXBvcnQgeyBBdmF0YXIsIEJ1dHRvbiwgQ2FyZCwgTGlzdCwgUG9wb3ZlciwgQ29tbWVudCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7XHJcbiAgRWxsaXBzaXNPdXRsaW5lZCxcclxuICBIZWFydE91dGxpbmVkLFxyXG4gIEhlYXJ0VHdvVG9uZSxcclxuICBNZXNzYWdlT3V0bGluZWQsXHJcbiAgUmV0d2VldE91dGxpbmVkLFxyXG59IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgUHJvcHR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBQb3N0SW1hZ2VzIGZyb20gXCIuL1Bvc3RJbWFnZXNcIjtcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDb21tZW50Rm9ybSBmcm9tIFwiLi9Db21tZW50Rm9ybVwiO1xyXG5cclxuY29uc3QgUG9zdENhcmQgPSAoeyBwb3N0IH0pID0+IHtcclxuICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gIGNvbnN0IGlkID0gbWUgJiYgbWUuaWQ7XHJcbiAgLy8gPSBjb25zdCBpZCA9IG1lPy5pZDsgPT4gb3B0aW9uYWwgY2hhaW5pbmcgb3BlcmF0aW9uXHJcblxyXG4gIGNvbnN0IFtsaWtlZCwgc2V0TGlrZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtjb25tbWVudEZvcm1PcGVuZWQsIHNldENvbW1lbnRGb3JtT3BlbmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgb25Ub2dnbGVMaWtlID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIC8vIGlmIChsaWtlZCA9PT0gdHJ1ZSkge1xyXG4gICAgLy8gICBzZXRMaWtlZChmYWxzZSk7XHJcbiAgICAvLyB9IGVsc2Uge1xyXG4gICAgLy8gICBzZXRMaWtlZCh0cnVlKTtcclxuICAgIC8vIH1cclxuICAgIHNldExpa2VkKChwcmV2KSA9PiAhcHJldik7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvblRvZ2dsZUNvbW1lbnQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgc2V0Q29tbWVudEZvcm1PcGVuZWQoKHByZXYpID0+ICFwcmV2KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIyMHB4XCIgfX0+XHJcbiAgICAgIDxDYXJkXHJcbiAgICAgICAgY292ZXI9e3Bvc3QuSW1hZ2VzWzBdICYmIDxQb3N0SW1hZ2VzIGltYWdlcz17cG9zdC5JbWFnZXN9PjwvUG9zdEltYWdlcz59XHJcbiAgICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgICAgLy9hY3Rpb27jga9BcnJheeOBoOOBi+OCiUtleeOBjOW/heimgeOBq+OBquOCi1xyXG4gICAgICAgICAgPFJldHdlZXRPdXRsaW5lZCBrZXk9XCJyZXR3ZWV0XCI+PC9SZXR3ZWV0T3V0bGluZWQ+LFxyXG4gICAgICAgICAgbGlrZWQgPyAoXHJcbiAgICAgICAgICAgIDxIZWFydFR3b1RvbmVcclxuICAgICAgICAgICAgICB0d29Ub25lQ29sb3I9XCIjZWIyZjk2XCJcclxuICAgICAgICAgICAgICBrZXk9XCJoZWFydFwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17b25Ub2dnbGVMaWtlfVxyXG4gICAgICAgICAgICA+PC9IZWFydFR3b1RvbmU+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8SGVhcnRPdXRsaW5lZCBrZXk9XCJoZWFydFwiIG9uQ2xpY2s9e29uVG9nZ2xlTGlrZX0+PC9IZWFydE91dGxpbmVkPlxyXG4gICAgICAgICAgKSxcclxuICAgICAgICAgIDxNZXNzYWdlT3V0bGluZWRcclxuICAgICAgICAgICAga2V5PVwiY29tbWVudFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uVG9nZ2xlQ29tbWVudH1cclxuICAgICAgICAgID48L01lc3NhZ2VPdXRsaW5lZD4sXHJcbiAgICAgICAgICA8UG9wb3ZlclxyXG4gICAgICAgICAgICBrZXk9XCJtb3JlXCJcclxuICAgICAgICAgICAgY29udGVudD17W1xyXG4gICAgICAgICAgICAgIDxCdXR0b24uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICB7aWQgJiYgcG9zdC5Vc2VyLmlkID09PSBpZCA/IChcclxuICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPlVwZGF0ZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cImRhbmdlclwiPkRlbGV0ZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24+UmVwb3J0PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uLkdyb3VwPixcclxuICAgICAgICAgICAgXX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEVsbGlwc2lzT3V0bGluZWQ+PC9FbGxpcHNpc091dGxpbmVkPlxyXG4gICAgICAgICAgPC9Qb3BvdmVyPixcclxuICAgICAgICBdfVxyXG4gICAgICA+XHJcbiAgICAgICAgPENhcmQuTWV0YVxyXG4gICAgICAgICAgYXZhdGFyPXs8QXZhdGFyPntwb3N0LlVzZXIubmlja25hbWVbMF19PC9BdmF0YXI+fVxyXG4gICAgICAgICAgdGl0bGU9e3Bvc3QuVXNlci5uaWNrbmFtZX1cclxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtwb3N0LmNvbnRlbnR9XHJcbiAgICAgICAgPjwvQ2FyZC5NZXRhPlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICAgIHtjb25tbWVudEZvcm1PcGVuZWQgJiYgKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8Q29tbWVudEZvcm0gcG9zdD17cG9zdH0+PC9Db21tZW50Rm9ybT5cclxuICAgICAgICAgIDxMaXN0XHJcbiAgICAgICAgICAgIGhlYWRlcj17YCR7cG9zdC5Db21tZW50cy5sZW5ndGh95YCL44Gu44Kz44Oh44Oz44OIYH1cclxuICAgICAgICAgICAgaXRlbUxheW91dD1cImhvcml6b250YWxcIlxyXG4gICAgICAgICAgICBkYXRhU291cmNlPXtwb3N0LkNvbW1lbnRzfVxyXG4gICAgICAgICAgICByZW5kZXJJdGVtPXsoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8TGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtLk1ldGFcclxuICAgICAgICAgICAgICAgICAgICBhdmF0YXI9ezxBdmF0YXI+e2l0ZW0uVXNlci5uaWNrbmFtZVswXX08L0F2YXRhcj59XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0uY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgPjwvTGlzdC5JdGVtLk1ldGE+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvTGlzdD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5Qb3N0Q2FyZC5wcm9wVHlwZXMgPSB7XHJcbiAgcG9zdDogUHJvcHR5cGVzLnNoYXBlKHtcclxuICAgIGlkOiBQcm9wdHlwZXMubnVtYmVyLFxyXG4gICAgVXNlcjogUHJvcHR5cGVzLm9iamVjdCxcclxuICAgIGNvbnRlbnQ6IFByb3B0eXBlcy5zdHJpbmcsXHJcbiAgICBJbWFnZXM6IFByb3B0eXBlcy5hcnJheU9mKFByb3B0eXBlcy5vYmplY3QpLFxyXG4gICAgQ29tbWVudHM6IFByb3B0eXBlcy5hcnJheU9mKFByb3B0eXBlcy5vYmplY3QpLFxyXG4gIH0pLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==