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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s2, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s2 = _i.next()).done); _n = true){\n            _arr.push(_s2.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nvar ConnectorComponent = function() {\n    var _this1 = _this;\n    _s();\n    var ref = _slicedToArray((0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useConnect)(), 2), ref1 = ref[0], data = ref1.data, error = ref1.error, connect = ref[1];\n    var ref2;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().connectorContainer),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().containerPadding),\n            children: [\n                data.connectors.map(function(x) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().connectorButton),\n                        disabled: !x.ready,\n                        onClick: function() {\n                            return connect(x);\n                        },\n                        children: [\n                            x.name,\n                            !x.ready && \" (unsupported)\"\n                        ]\n                    }, x.id, true, {\n                        fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 11\n                    }, _this1);\n                }),\n                error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: (ref2 = error === null || error === void 0 ? void 0 : error.message) !== null && ref2 !== void 0 ? ref2 : \"Failed to connect\"\n                }, void 0, false, {\n                    fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 19\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, _this));\n};\n_s(ConnectorComponent, \"TTOe8+Eu0FX5Uq9y85tvYLg7iCY=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_3__.useConnect\n    ];\n});\n_c = ConnectorComponent;\n//@ts-ignore\nvar AccountComponent = function(param) {\n    var accountData = param.accountData, error = param.error, loading = param.loading, disconnect = param.disconnect;\n    var ref, ref3;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            ((ref = accountData.ens) === null || ref === void 0 ? void 0 : ref.name) ? \"\".concat((ref3 = accountData.ens) === null || ref3 === void 0 ? void 0 : ref3.name, \" (\").concat(accountData.address, \")\") : accountData.address,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Connected to \",\n                    accountData.connector.name\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().cta),\n                onClick: function() {\n                    disconnect();\n                },\n                children: \"Disconnect\"\n            }, void 0, false, {\n                fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, _this));\n};\n_c1 = AccountComponent;\nvar Home = function() {\n    _s1();\n    var ref = _slicedToArray((0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useAccount)({\n        fetchEns: true\n    }), 2), ref4 = ref[0], accountData = ref4.data, error = ref4.error, loading = ref4.loading, disconnect = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),\n                        children: \"Welcome to your new DApp\"\n                    }, void 0, false, {\n                        fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, _this),\n                    accountData ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AccountComponent, {\n                        accountData: accountData,\n                        error: error,\n                        loading: loading,\n                        disconnect: disconnect\n                    }, void 0, false, {\n                        fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 11\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ConnectorComponent, {}, void 0, false, {\n                        fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().footer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\",\n                    target: \"_blank\",\n                    rel: \"noopener noreferrer\",\n                    children: [\n                        \"Powered by\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().logo),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: \"/vercel.svg\",\n                                alt: \"Vercel Logo\",\n                                width: 72,\n                                height: 16\n                            }, void 0, false, {\n                                fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, _this));\n};\n_s1(Home, \"RaKew+MwruJrzAFO9GSWC+GaSiI=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_3__.useAccount\n    ];\n});\n_c2 = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"ConnectorComponent\");\n$RefreshReg$(_c1, \"AccountComponent\");\n$RefreshReg$(_c2, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NkNBQVU7OztNQURsRThCLElBQUk7QUEyQ1YsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdHlwZSB9IGZyb20gXCJvc1wiO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VDb25uZWN0LCB1c2VBY2NvdW50LCBDb25uZWN0b3IgfSBmcm9tIFwid2FnbWlcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcblxuY29uc3QgQ29ubmVjdG9yQ29tcG9uZW50ID0gKCkgPT4ge1xuICBjb25zdCBbeyBkYXRhLCBlcnJvciB9LCBjb25uZWN0XSA9IHVzZUNvbm5lY3QoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29ubmVjdG9yQ29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyUGFkZGluZ30+XG4gICAgICAgIHtkYXRhLmNvbm5lY3RvcnMubWFwKCh4KSA9PiAoXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29ubmVjdG9yQnV0dG9ufVxuICAgICAgICAgICAgZGlzYWJsZWQ9eyF4LnJlYWR5fVxuICAgICAgICAgICAga2V5PXt4LmlkfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY29ubmVjdCh4KX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7eC5uYW1lfVxuICAgICAgICAgICAgeyF4LnJlYWR5ICYmIFwiICh1bnN1cHBvcnRlZClcIn1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKSl9XG5cbiAgICAgICAge2Vycm9yICYmIDxwPntlcnJvcj8ubWVzc2FnZSA/PyBcIkZhaWxlZCB0byBjb25uZWN0XCJ9PC9wPn1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbi8vQHRzLWlnbm9yZVxuY29uc3QgQWNjb3VudENvbXBvbmVudCA9ICh7IGFjY291bnREYXRhLCBlcnJvciwgbG9hZGluZywgZGlzY29ubmVjdCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHthY2NvdW50RGF0YS5lbnM/Lm5hbWVcbiAgICAgICAgPyBgJHthY2NvdW50RGF0YS5lbnM/Lm5hbWV9ICgke2FjY291bnREYXRhLmFkZHJlc3N9KWBcbiAgICAgICAgOiBhY2NvdW50RGF0YS5hZGRyZXNzfVxuICAgICAgPHA+Q29ubmVjdGVkIHRvIHthY2NvdW50RGF0YS5jb25uZWN0b3IubmFtZX08L3A+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmN0YX1cbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIGRpc2Nvbm5lY3QoKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgRGlzY29ubmVjdFxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW3sgZGF0YTogYWNjb3VudERhdGEsIGVycm9yLCBsb2FkaW5nIH0sIGRpc2Nvbm5lY3RdID0gdXNlQWNjb3VudCh7XG4gICAgZmV0Y2hFbnM6IHRydWUsXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+V2VsY29tZSB0byB5b3VyIG5ldyBEQXBwPC9oMT5cbiAgICAgICAge2FjY291bnREYXRhID8gKFxuICAgICAgICAgIDxBY2NvdW50Q29tcG9uZW50XG4gICAgICAgICAgICBhY2NvdW50RGF0YT17YWNjb3VudERhdGF9XG4gICAgICAgICAgICBlcnJvcj17ZXJyb3J9XG4gICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgICAgICAgZGlzY29ubmVjdD17ZGlzY29ubmVjdH1cbiAgICAgICAgICAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxDb25uZWN0b3JDb21wb25lbnQgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3ZlcmNlbC5jb20/dXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1kZWZhdWx0LXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgID5cbiAgICAgICAgICBQb3dlcmVkIGJ5e1wiIFwifVxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299PlxuICAgICAgICAgICAgPEltYWdlIHNyYz1cIi92ZXJjZWwuc3ZnXCIgYWx0PVwiVmVyY2VsIExvZ29cIiB3aWR0aD17NzJ9IGhlaWdodD17MTZ9IC8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2E+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsiSGVhZCIsIkltYWdlIiwidXNlQ29ubmVjdCIsInVzZUFjY291bnQiLCJzdHlsZXMiLCJDb25uZWN0b3JDb21wb25lbnQiLCJkYXRhIiwiZXJyb3IiLCJjb25uZWN0IiwiZGl2IiwiY2xhc3NOYW1lIiwiY29ubmVjdG9yQ29udGFpbmVyIiwiY29udGFpbmVyUGFkZGluZyIsImNvbm5lY3RvcnMiLCJtYXAiLCJ4IiwiYnV0dG9uIiwiY29ubmVjdG9yQnV0dG9uIiwiZGlzYWJsZWQiLCJyZWFkeSIsIm9uQ2xpY2siLCJuYW1lIiwiaWQiLCJwIiwibWVzc2FnZSIsIkFjY291bnRDb21wb25lbnQiLCJhY2NvdW50RGF0YSIsImxvYWRpbmciLCJkaXNjb25uZWN0IiwiZW5zIiwiYWRkcmVzcyIsImNvbm5lY3RvciIsImN0YSIsIkhvbWUiLCJmZXRjaEVucyIsImNvbnRhaW5lciIsInRpdGxlIiwibWV0YSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJoMSIsImZvb3RlciIsImEiLCJ0YXJnZXQiLCJzcGFuIiwibG9nbyIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});