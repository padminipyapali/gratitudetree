"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s2, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s2 = _i.next()).done); _n = true){\n            _arr.push(_s2.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nvar ConnectorComponent = function() {\n    var _this1 = _this;\n    _s();\n    var ref = _slicedToArray((0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useConnect)(), 2), ref1 = ref[0], connectData = ref1.data, connectError = ref1.error, connect = ref[1];\n    var ref2;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            connectData.connectors.map(function(x) {\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().cta),\n                    disabled: !x.ready,\n                    onClick: function() {\n                        return connect(x);\n                    },\n                    children: [\n                        x.name,\n                        !x.ready && \" (unsupported)\"\n                    ]\n                }, x.id, true, {\n                    fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, _this1);\n            }),\n            connectError && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: (ref2 = connectError === null || connectError === void 0 ? void 0 : connectError.message) !== null && ref2 !== void 0 ? ref2 : \"Failed to connect\"\n            }, void 0, false, {\n                fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n                lineNumber: 25,\n                columnNumber: 24\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, _this));\n};\n_s(ConnectorComponent, \"GMIMsvNoan8pRUTNsMt7X8vJJl0=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_3__.useConnect\n    ];\n});\n_c = ConnectorComponent;\nvar Home = function() {\n    _s1();\n    var ref = _slicedToArray((0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useConnect)(), 2), ref3 = ref[0], connectData = ref3.data, connectError = ref3.error, connect = ref[1];\n    var ref4 = _slicedToArray((0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useAccount)(), 2), ref5 = ref4[0], data = ref5.data, error = ref5.error, loading = ref5.loading, disconnect = ref4[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),\n                        children: \"Welcome to your new DApp\"\n                    }, void 0, false, {\n                        fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ConnectorComponent, {}, void 0, false, {\n                        fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().footer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\",\n                    target: \"_blank\",\n                    rel: \"noopener noreferrer\",\n                    children: [\n                        \"Powered by\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().logo),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: \"/vercel.svg\",\n                                alt: \"Vercel Logo\",\n                                width: 72,\n                                height: 16\n                            }, void 0, false, {\n                                fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, _this));\n};\n_s1(Home, \"9NYJRAnJZ9Yy/Y6Pd6Jk6SuBPlY=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_3__.useConnect,\n        wagmi__WEBPACK_IMPORTED_MODULE_3__.useAccount\n    ];\n});\n_c1 = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c, _c1;\n$RefreshReg$(_c, \"ConnectorComponent\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTVFLENBQUM7SUEvQktwQixJQUFJOztRQUNzRHZCLDZDQUFVO1FBQ3pCQyw2Q0FBVTs7O01BRnJEc0IsSUFBSTtBQWlDViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUNvbm5lY3QsIHVzZUFjY291bnQsIENvbm5lY3RvciB9IGZyb20gXCJ3YWdtaVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuXG5jb25zdCBDb25uZWN0b3JDb21wb25lbnQ6IENvbXBvbmVudCA9ICgpID0+IHtcbiAgY29uc3QgW3sgZGF0YTogY29ubmVjdERhdGEsIGVycm9yOiBjb25uZWN0RXJyb3IgfSwgY29ubmVjdF0gPSB1c2VDb25uZWN0KCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge2Nvbm5lY3REYXRhLmNvbm5lY3RvcnMubWFwKCh4KSA9PiAoXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jdGF9XG4gICAgICAgICAgZGlzYWJsZWQ9eyF4LnJlYWR5fVxuICAgICAgICAgIGtleT17eC5pZH1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjb25uZWN0KHgpfVxuICAgICAgICA+XG4gICAgICAgICAge3gubmFtZX1cbiAgICAgICAgICB7IXgucmVhZHkgJiYgXCIgKHVuc3VwcG9ydGVkKVwifVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICkpfVxuXG4gICAgICB7Y29ubmVjdEVycm9yICYmIDxwPntjb25uZWN0RXJyb3I/Lm1lc3NhZ2UgPz8gXCJGYWlsZWQgdG8gY29ubmVjdFwifTwvcD59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW3sgZGF0YTogY29ubmVjdERhdGEsIGVycm9yOiBjb25uZWN0RXJyb3IgfSwgY29ubmVjdF0gPSB1c2VDb25uZWN0KCk7XG4gIGNvbnN0IFt7IGRhdGEsIGVycm9yLCBsb2FkaW5nIH0sIGRpc2Nvbm5lY3RdID0gdXNlQWNjb3VudCgpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+V2VsY29tZSB0byB5b3VyIG5ldyBEQXBwPC9oMT5cbiAgICAgICAgPENvbm5lY3RvckNvbXBvbmVudCAvPlxuICAgICAgPC9tYWluPlxuXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbT91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIFBvd2VyZWQgYnl7XCIgXCJ9XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubG9nb30+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL3ZlcmNlbC5zdmdcIiBhbHQ9XCJWZXJjZWwgTG9nb1wiIHdpZHRoPXs3Mn0gaGVpZ2h0PXsxNn0gLz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJ1c2VDb25uZWN0IiwidXNlQWNjb3VudCIsInN0eWxlcyIsIkNvbm5lY3RvckNvbXBvbmVudCIsImNvbm5lY3REYXRhIiwiZGF0YSIsImNvbm5lY3RFcnJvciIsImVycm9yIiwiY29ubmVjdCIsImRpdiIsImNvbm5lY3RvcnMiLCJtYXAiLCJ4IiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwiY3RhIiwiZGlzYWJsZWQiLCJyZWFkeSIsIm9uQ2xpY2siLCJuYW1lIiwiaWQiLCJwIiwibWVzc2FnZSIsIkhvbWUiLCJsb2FkaW5nIiwiZGlzY29ubmVjdCIsImNvbnRhaW5lciIsInRpdGxlIiwibWV0YSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJoMSIsImZvb3RlciIsImEiLCJ0YXJnZXQiLCJzcGFuIiwibG9nbyIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});