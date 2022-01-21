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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s2, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s2 = _i.next()).done); _n = true){\n            _arr.push(_s2.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nvar ConnectorComponent = function() {\n    var _this1 = _this;\n    _s();\n    var ref = _slicedToArray((0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useConnect)(), 2), ref1 = ref[0], data = ref1.data, error = ref1.error, connect = ref[1];\n    var ref2;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().connectorContainer),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().containerPadding),\n            children: [\n                data.connectors.map(function(x) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().connectorButton),\n                        disabled: !x.ready,\n                        onClick: function() {\n                            return connect(x);\n                        },\n                        children: [\n                            x.name,\n                            !x.ready && \" (unsupported)\"\n                        ]\n                    }, x.id, true, {\n                        fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 11\n                    }, _this1);\n                }),\n                error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: (ref2 = error === null || error === void 0 ? void 0 : error.message) !== null && ref2 !== void 0 ? ref2 : \"Failed to connect\"\n                }, void 0, false, {\n                    fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 19\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, _this));\n};\n_s(ConnectorComponent, \"TTOe8+Eu0FX5Uq9y85tvYLg7iCY=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_3__.useConnect\n    ];\n});\n_c = ConnectorComponent;\nvar AccountComponent = function(param) {\n    var accountData = param.accountData, disconnect = param.disconnect;\n    var ref, ref3, ref4;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: (ref = accountData.ens) === null || ref === void 0 ? void 0 : ref.avatar,\n                alt: \"ENS Avatar\"\n            }, void 0, false, {\n                fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    ((ref3 = accountData.ens) === null || ref3 === void 0 ? void 0 : ref3.name) ? \"\".concat((ref4 = accountData.ens) === null || ref4 === void 0 ? void 0 : ref4.name, \" \").concat(accountData.address) : accountData.address,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Connected to \",\n                            accountData.connector.name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().cta),\n                        onClick: function() {\n                            disconnect();\n                        },\n                        children: \"Disconnect\"\n                    }, void 0, false, {\n                        fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, _this));\n};\n_c1 = AccountComponent;\nvar Home = function() {\n    _s1();\n    var ref = _slicedToArray((0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useAccount)({\n        fetchEns: true\n    }), 2), ref5 = ref[0], accountData = ref5.data, error = ref5.error, loading = ref5.loading, disconnect = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),\n                        children: \"Welcome to your new DApp\"\n                    }, void 0, false, {\n                        fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, _this),\n                    accountData ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AccountComponent, {\n                        accountData: accountData,\n                        disconnect: disconnect\n                    }, void 0, false, {\n                        fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 11\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ConnectorComponent, {}, void 0, false, {\n                        fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().footer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\",\n                    target: \"_blank\",\n                    rel: \"noopener noreferrer\",\n                    children: [\n                        \"Powered by\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().logo),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: \"/vercel.svg\",\n                                alt: \"Vercel Logo\",\n                                width: 72,\n                                height: 16\n                            }, void 0, false, {\n                                fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, _this));\n};\n_s1(Home, \"RaKew+MwruJrzAFO9GSWC+GaSiI=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_3__.useAccount\n    ];\n});\n_c2 = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"ConnectorComponent\");\n$RefreshReg$(_c1, \"AccountComponent\");\n$RefreshReg$(_c2, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQyxNQUFNLEVBQUUsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU01RSxDQUFDO0lBcENLbEIsSUFBSTs7UUFDb0RqQyw2Q0FBVTs7O01BRGxFaUMsSUFBSTtBQXNDViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUNvbm5lY3QsIHVzZUFjY291bnQsIENvbm5lY3RvciB9IGZyb20gXCJ3YWdtaVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuXG5jb25zdCBDb25uZWN0b3JDb21wb25lbnQgPSAoKSA9PiB7XG4gIGNvbnN0IFt7IGRhdGEsIGVycm9yIH0sIGNvbm5lY3RdID0gdXNlQ29ubmVjdCgpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb25uZWN0b3JDb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJQYWRkaW5nfT5cbiAgICAgICAge2RhdGEuY29ubmVjdG9ycy5tYXAoKHgpID0+IChcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb25uZWN0b3JCdXR0b259XG4gICAgICAgICAgICBkaXNhYmxlZD17IXgucmVhZHl9XG4gICAgICAgICAgICBrZXk9e3guaWR9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjb25uZWN0KHgpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt4Lm5hbWV9XG4gICAgICAgICAgICB7IXgucmVhZHkgJiYgXCIgKHVuc3VwcG9ydGVkKVwifVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApKX1cblxuICAgICAgICB7ZXJyb3IgJiYgPHA+e2Vycm9yPy5tZXNzYWdlID8/IFwiRmFpbGVkIHRvIGNvbm5lY3RcIn08L3A+fVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBBY2NvdW50Q29tcG9uZW50ID0gKHsgYWNjb3VudERhdGEsIGRpc2Nvbm5lY3QgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aW1nIHNyYz17YWNjb3VudERhdGEuZW5zPy5hdmF0YXJ9IGFsdD1cIkVOUyBBdmF0YXJcIiAvPlxuICAgICAgPGRpdj5cbiAgICAgICAge2FjY291bnREYXRhLmVucz8ubmFtZVxuICAgICAgICAgID8gYCR7YWNjb3VudERhdGEuZW5zPy5uYW1lfSAke2FjY291bnREYXRhLmFkZHJlc3N9YFxuICAgICAgICAgIDogYWNjb3VudERhdGEuYWRkcmVzc31cbiAgICAgICAgPHA+Q29ubmVjdGVkIHRvIHthY2NvdW50RGF0YS5jb25uZWN0b3IubmFtZX08L3A+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jdGF9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgZGlzY29ubmVjdCgpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBEaXNjb25uZWN0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW3sgZGF0YTogYWNjb3VudERhdGEsIGVycm9yLCBsb2FkaW5nIH0sIGRpc2Nvbm5lY3RdID0gdXNlQWNjb3VudCh7XG4gICAgZmV0Y2hFbnM6IHRydWUsXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+V2VsY29tZSB0byB5b3VyIG5ldyBEQXBwPC9oMT5cbiAgICAgICAge2FjY291bnREYXRhID8gKFxuICAgICAgICAgIDxBY2NvdW50Q29tcG9uZW50IGFjY291bnREYXRhPXthY2NvdW50RGF0YX0gZGlzY29ubmVjdD17ZGlzY29ubmVjdH0gLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8Q29ubmVjdG9yQ29tcG9uZW50IC8+XG4gICAgICAgICl9XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly92ZXJjZWwuY29tP3V0bV9zb3VyY2U9Y3JlYXRlLW5leHQtYXBwJnV0bV9tZWRpdW09ZGVmYXVsdC10ZW1wbGF0ZSZ1dG1fY2FtcGFpZ249Y3JlYXRlLW5leHQtYXBwXCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgUG93ZXJlZCBieXtcIiBcIn1cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfT5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvdmVyY2VsLnN2Z1wiIGFsdD1cIlZlcmNlbCBMb2dvXCIgd2lkdGg9ezcyfSBoZWlnaHQ9ezE2fSAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9hPlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsInVzZUNvbm5lY3QiLCJ1c2VBY2NvdW50Iiwic3R5bGVzIiwiQ29ubmVjdG9yQ29tcG9uZW50IiwiZGF0YSIsImVycm9yIiwiY29ubmVjdCIsImRpdiIsImNsYXNzTmFtZSIsImNvbm5lY3RvckNvbnRhaW5lciIsImNvbnRhaW5lclBhZGRpbmciLCJjb25uZWN0b3JzIiwibWFwIiwieCIsImJ1dHRvbiIsImNvbm5lY3RvckJ1dHRvbiIsImRpc2FibGVkIiwicmVhZHkiLCJvbkNsaWNrIiwibmFtZSIsImlkIiwicCIsIm1lc3NhZ2UiLCJBY2NvdW50Q29tcG9uZW50IiwiYWNjb3VudERhdGEiLCJkaXNjb25uZWN0IiwiaW1nIiwic3JjIiwiZW5zIiwiYXZhdGFyIiwiYWx0IiwiYWRkcmVzcyIsImNvbm5lY3RvciIsImN0YSIsIkhvbWUiLCJmZXRjaEVucyIsImxvYWRpbmciLCJjb250YWluZXIiLCJ0aXRsZSIsIm1ldGEiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiaDEiLCJmb290ZXIiLCJhIiwidGFyZ2V0Iiwic3BhbiIsImxvZ28iLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});