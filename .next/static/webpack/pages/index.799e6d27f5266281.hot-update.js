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

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.jsx\");\n/* harmony import */ var _components_Article__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Article */ \"./components/Article.jsx\");\n/* harmony import */ var _components_Headline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Headline */ \"./components/Headline.jsx\");\n/* harmony import */ var _components_Featured__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Featured */ \"./components/Featured.jsx\");\n/* harmony import */ var _components_Trending__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Trending */ \"./components/Trending.jsx\");\n/* harmony import */ var _components_Spotlight__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Spotlight */ \"./components/Spotlight.jsx\");\n/* harmony import */ var _helper_getArticleData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helper/getArticleData */ \"./pages/helper/getArticleData.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Divider */ \"./node_modules/@mui/material/Divider/index.js\");\n/* __next_internal_client_entry_do_not_use__ getStaticProps,default auto */ \n\n\n\n\n\n\n\n\n\n\nconst Home = (props)=>{\n    // const [windowWidth, setWindowWidth] = useState(window.innerWidth);\n    // useEffect(() => {\n    console.log(\"object\");\n    //   if (typeof window !== 'undefined') {\n    //     setWindowWidth(window.innerWidth);\n    //   }\n    //   const handleResize = () => setWindowWidth(window.innerWidth);\n    //   window.addEventListener('resize', handleResize);\n    //   return () => window.removeEventListener('resize', handleResize);\n    // }, []);\n    // const isWideViewport = windowWidth > 740;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().body),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().header)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\oracl\\\\Documents\\\\repos\\\\test-projects\\\\temecula-tribune\\\\pages\\\\index.jsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                style: {\n                    marginBottom: \"1px\"\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\oracl\\\\Documents\\\\repos\\\\test-projects\\\\temecula-tribune\\\\pages\\\\index.jsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\oracl\\\\Documents\\\\repos\\\\test-projects\\\\temecula-tribune\\\\pages\\\\index.jsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().containerMain),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().containerHeadline),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Headline__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().headline),\n                            data: (0,_helper_getArticleData__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(\"headline\", props.data)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\oracl\\\\Documents\\\\repos\\\\test-projects\\\\temecula-tribune\\\\pages\\\\index.jsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\oracl\\\\Documents\\\\repos\\\\test-projects\\\\temecula-tribune\\\\pages\\\\index.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                        orientation: \"vertical\",\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().vDivider)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\oracl\\\\Documents\\\\repos\\\\test-projects\\\\temecula-tribune\\\\pages\\\\index.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().containerFeatured),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().topTitle),\n                                children: \"Top Headlines\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\oracl\\\\Documents\\\\repos\\\\test-projects\\\\temecula-tribune\\\\pages\\\\index.jsx\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Featured__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().featured1),\n                                data: (0,_helper_getArticleData__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(\"featured1\", props.data)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\oracl\\\\Documents\\\\repos\\\\test-projects\\\\temecula-tribune\\\\pages\\\\index.jsx\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Featured__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().featured2),\n                                data: (0,_helper_getArticleData__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(\"featured2\", props.data)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\oracl\\\\Documents\\\\repos\\\\test-projects\\\\temecula-tribune\\\\pages\\\\index.jsx\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Featured__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().featured3),\n                                data: (0,_helper_getArticleData__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(\"featured3\", props.data)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\oracl\\\\Documents\\\\repos\\\\test-projects\\\\temecula-tribune\\\\pages\\\\index.jsx\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Featured__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().featured4),\n                                data: (0,_helper_getArticleData__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(\"featured4\", props.data)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\oracl\\\\Documents\\\\repos\\\\test-projects\\\\temecula-tribune\\\\pages\\\\index.jsx\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, undefined),\n                            \" :\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Article__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().featured4),\n                                data: (0,_helper_getArticleData__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(\"featured4\", props.data)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\oracl\\\\Documents\\\\repos\\\\test-projects\\\\temecula-tribune\\\\pages\\\\index.jsx\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Featured__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().featured5),\n                                data: (0,_helper_getArticleData__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(\"featured5\", props.data)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\oracl\\\\Documents\\\\repos\\\\test-projects\\\\temecula-tribune\\\\pages\\\\index.jsx\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\oracl\\\\Documents\\\\repos\\\\test-projects\\\\temecula-tribune\\\\pages\\\\index.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().containerTrending),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().trendingTitle),\n                                children: \"Trending\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\oracl\\\\Documents\\\\repos\\\\test-projects\\\\temecula-tribune\\\\pages\\\\index.jsx\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Trending__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().trending1),\n                                data: (0,_helper_getArticleData__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(\"trending1\", props.data)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\oracl\\\\Documents\\\\repos\\\\test-projects\\\\temecula-tribune\\\\pages\\\\index.jsx\",\n                                lineNumber: 60,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Trending__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().trending2),\n                                data: (0,_helper_getArticleData__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(\"trending2\", props.data)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\oracl\\\\Documents\\\\repos\\\\test-projects\\\\temecula-tribune\\\\pages\\\\index.jsx\",\n                                lineNumber: 61,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Trending__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().trending3),\n                                data: (0,_helper_getArticleData__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(\"trending3\", props.data)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\oracl\\\\Documents\\\\repos\\\\test-projects\\\\temecula-tribune\\\\pages\\\\index.jsx\",\n                                lineNumber: 64,\n                                columnNumber: 9\n                            }, undefined),\n                            \" :\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Article__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().trending3),\n                                data: (0,_helper_getArticleData__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(\"trending3\", props.data)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\oracl\\\\Documents\\\\repos\\\\test-projects\\\\temecula-tribune\\\\pages\\\\index.jsx\",\n                                lineNumber: 65,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Trending__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().trending4),\n                                data: (0,_helper_getArticleData__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(\"trending4\", props.data)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\oracl\\\\Documents\\\\repos\\\\test-projects\\\\temecula-tribune\\\\pages\\\\index.jsx\",\n                                lineNumber: 69,\n                                columnNumber: 9\n                            }, undefined),\n                            \" :\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Article__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().trending4),\n                                data: (0,_helper_getArticleData__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(\"trending4\", props.data)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\oracl\\\\Documents\\\\repos\\\\test-projects\\\\temecula-tribune\\\\pages\\\\index.jsx\",\n                                lineNumber: 70,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Trending__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().trending5),\n                                data: (0,_helper_getArticleData__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(\"trending5\", props.data)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\oracl\\\\Documents\\\\repos\\\\test-projects\\\\temecula-tribune\\\\pages\\\\index.jsx\",\n                                lineNumber: 73,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Trending__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().trending6),\n                                data: (0,_helper_getArticleData__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(\"trending6\", props.data)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\oracl\\\\Documents\\\\repos\\\\test-projects\\\\temecula-tribune\\\\pages\\\\index.jsx\",\n                                lineNumber: 76,\n                                columnNumber: 9\n                            }, undefined),\n                            \" :\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Article__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().trending6),\n                                data: (0,_helper_getArticleData__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(\"trending6\", props.data)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\oracl\\\\Documents\\\\repos\\\\test-projects\\\\temecula-tribune\\\\pages\\\\index.jsx\",\n                                lineNumber: 77,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\oracl\\\\Documents\\\\repos\\\\test-projects\\\\temecula-tribune\\\\pages\\\\index.jsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\oracl\\\\Documents\\\\repos\\\\test-projects\\\\temecula-tribune\\\\pages\\\\index.jsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\oracl\\\\Documents\\\\repos\\\\test-projects\\\\temecula-tribune\\\\pages\\\\index.jsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Home;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU1oQixrRUFBY0EsQ0FBQyxhQUFhSSxNQUFNWSxJQUFJOzs7Ozs7NEJBQUs7MENBQ3hGLDhEQUFDckIsMkRBQU9BO2dDQUFDYSxXQUFXUCwwRUFBZ0I7Z0NBQUVlLE1BQU1oQixrRUFBY0EsQ0FBQyxhQUFhSSxNQUFNWSxJQUFJOzs7Ozs7MENBR2xGLDhEQUFDbEIsNERBQVFBO2dDQUFDVSxXQUFXUCwwRUFBZ0I7Z0NBQUVlLE1BQU1oQixrRUFBY0EsQ0FBQyxhQUFhSSxNQUFNWSxJQUFJOzs7Ozs7MENBR25GLDhEQUFDbEIsNERBQVFBO2dDQUFDVSxXQUFXUCwwRUFBZ0I7Z0NBQUVlLE1BQU1oQixrRUFBY0EsQ0FBQyxhQUFhSSxNQUFNWSxJQUFJOzs7Ozs7NEJBQUs7MENBQ3hGLDhEQUFDckIsMkRBQU9BO2dDQUFDYSxXQUFXUCwwRUFBZ0I7Z0NBQUVlLE1BQU1oQixrRUFBY0EsQ0FBQyxhQUFhSSxNQUFNWSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhMUY7S0EzRU1iOztBQWdHTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qc3g/N2ZmZCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcclxuaW1wb3J0IEFydGljbGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXJ0aWNsZVwiO1xyXG5pbXBvcnQgSGVhZGxpbmUgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGxpbmVcIjtcclxuaW1wb3J0IEZlYXR1cmVkIGZyb20gXCIuLi9jb21wb25lbnRzL0ZlYXR1cmVkXCI7XHJcbmltcG9ydCBUcmVuZGluZyBmcm9tIFwiLi4vY29tcG9uZW50cy9UcmVuZGluZ1wiO1xyXG5pbXBvcnQgU3BvdGxpZ2h0IGZyb20gXCIuLi9jb21wb25lbnRzL1Nwb3RsaWdodFwiXHJcbmltcG9ydCBmZXRjaERhdGEgZnJvbSBcIi4vYXBpL2ZldGNoRGF0YVwiO1xyXG5pbXBvcnQgZ2V0QXJ0aWNsZURhdGEgZnJvbSBcIi4vaGVscGVyL2dldEFydGljbGVEYXRhXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9EaXZpZGVyJztcclxuXHJcbmNvbnN0IEhvbWUgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgLy8gY29uc3QgW3dpbmRvd1dpZHRoLCBzZXRXaW5kb3dXaWR0aF0gPSB1c2VTdGF0ZSh3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHR5cGVvZiB3aW5kb3cpXHJcbiAgLy8gICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAvLyAgICAgc2V0V2luZG93V2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xyXG4gIC8vICAgfVxyXG4gIC8vICAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4gc2V0V2luZG93V2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xyXG4gIC8vICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XHJcblxyXG4gIC8vICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xyXG4gIC8vIH0sIFtdKTtcclxuXHJcbiAgLy8gY29uc3QgaXNXaWRlVmlld3BvcnQgPSB3aW5kb3dXaWR0aCA+IDc0MDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm9keX0+XHJcbiAgICAgIDxIZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfSAvPlxyXG4gICAgICA8RGl2aWRlciBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcxcHgnIH19IC8+XHJcbiAgICAgIDxEaXZpZGVyLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJNYWlufT5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJIZWFkbGluZX0+XHJcbiAgICAgICAgICA8SGVhZGxpbmUgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGxpbmV9IGRhdGE9e2dldEFydGljbGVEYXRhKFwiaGVhZGxpbmVcIiwgcHJvcHMuZGF0YSl9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxEaXZpZGVyIG9yaWVudGF0aW9uPVwidmVydGljYWxcIiBjbGFzc05hbWU9e3N0eWxlcy52RGl2aWRlcn0vPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lckZlYXR1cmVkfT5cclxuICAgICAgICAgIDxoNCBjbGFzc05hbWU9e3N0eWxlcy50b3BUaXRsZX0+VG9wIEhlYWRsaW5lczwvaDQ+XHJcbiAgICAgICAgICA8RmVhdHVyZWQgY2xhc3NOYW1lPXtzdHlsZXMuZmVhdHVyZWQxfSBkYXRhPXtnZXRBcnRpY2xlRGF0YShcImZlYXR1cmVkMVwiLCBwcm9wcy5kYXRhKX0gLz5cclxuICAgICAgICAgIDxGZWF0dXJlZCBjbGFzc05hbWU9e3N0eWxlcy5mZWF0dXJlZDJ9IGRhdGE9e2dldEFydGljbGVEYXRhKFwiZmVhdHVyZWQyXCIsIHByb3BzLmRhdGEpfSAvPlxyXG4gICAgICAgICAgPEZlYXR1cmVkIGNsYXNzTmFtZT17c3R5bGVzLmZlYXR1cmVkM30gZGF0YT17Z2V0QXJ0aWNsZURhdGEoXCJmZWF0dXJlZDNcIiwgcHJvcHMuZGF0YSl9IC8+XHJcbiAgICAgICAgICB7Lyoge2lzV2lkZVZpZXdwb3J0ID8gICovfVxyXG4gICAgICAgICAgPEZlYXR1cmVkIGNsYXNzTmFtZT17c3R5bGVzLmZlYXR1cmVkNH0gZGF0YT17Z2V0QXJ0aWNsZURhdGEoXCJmZWF0dXJlZDRcIiwgcHJvcHMuZGF0YSl9IC8+IDpcclxuICAgICAgICAgIDxBcnRpY2xlIGNsYXNzTmFtZT17c3R5bGVzLmZlYXR1cmVkNH0gZGF0YT17Z2V0QXJ0aWNsZURhdGEoXCJmZWF0dXJlZDRcIiwgcHJvcHMuZGF0YSl9IC8+XHJcbiAgICAgICAgey8qIH0gKi99XHJcbiAgICAgICAgICA8RmVhdHVyZWQgY2xhc3NOYW1lPXtzdHlsZXMuZmVhdHVyZWQ1fSBkYXRhPXtnZXRBcnRpY2xlRGF0YShcImZlYXR1cmVkNVwiLCBwcm9wcy5kYXRhKX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lclRyZW5kaW5nfT5cclxuXHJcbiAgICAgICAgICA8aDQgY2xhc3NOYW1lPXtzdHlsZXMudHJlbmRpbmdUaXRsZX0+VHJlbmRpbmc8L2g0PlxyXG5cclxuICAgICAgICA8VHJlbmRpbmcgY2xhc3NOYW1lPXtzdHlsZXMudHJlbmRpbmcxfSBkYXRhPXtnZXRBcnRpY2xlRGF0YShcInRyZW5kaW5nMVwiLCBwcm9wcy5kYXRhKX0gLz5cclxuICAgICAgICA8VHJlbmRpbmcgY2xhc3NOYW1lPXtzdHlsZXMudHJlbmRpbmcyfSBkYXRhPXtnZXRBcnRpY2xlRGF0YShcInRyZW5kaW5nMlwiLCBwcm9wcy5kYXRhKX0gLz5cclxuXHJcbiAgICAgICAgey8qIHtpc1dpZGVWaWV3cG9ydCA/ICAqL31cclxuICAgICAgICA8VHJlbmRpbmcgY2xhc3NOYW1lPXtzdHlsZXMudHJlbmRpbmczfSBkYXRhPXtnZXRBcnRpY2xlRGF0YShcInRyZW5kaW5nM1wiLCBwcm9wcy5kYXRhKX0gLz4gOlxyXG4gICAgICAgIDxBcnRpY2xlIGNsYXNzTmFtZT17c3R5bGVzLnRyZW5kaW5nM30gZGF0YT17Z2V0QXJ0aWNsZURhdGEoXCJ0cmVuZGluZzNcIiwgcHJvcHMuZGF0YSl9IC8+XHJcbiAgICAgICAgey8qIH0gKi99XHJcblxyXG4gICAgICAgIHsvKiB7aXNXaWRlVmlld3BvcnQgPyAgKi99XHJcbiAgICAgICAgPFRyZW5kaW5nIGNsYXNzTmFtZT17c3R5bGVzLnRyZW5kaW5nNH0gZGF0YT17Z2V0QXJ0aWNsZURhdGEoXCJ0cmVuZGluZzRcIiwgcHJvcHMuZGF0YSl9IC8+IDpcclxuICAgICAgICA8QXJ0aWNsZSBjbGFzc05hbWU9e3N0eWxlcy50cmVuZGluZzR9IGRhdGE9e2dldEFydGljbGVEYXRhKFwidHJlbmRpbmc0XCIsIHByb3BzLmRhdGEpfSAvPlxyXG4gICAgICAgIHsvKiB9ICovfVxyXG5cclxuICAgICAgICA8VHJlbmRpbmcgY2xhc3NOYW1lPXtzdHlsZXMudHJlbmRpbmc1fSBkYXRhPXtnZXRBcnRpY2xlRGF0YShcInRyZW5kaW5nNVwiLCBwcm9wcy5kYXRhKX0gLz5cclxuXHJcbiAgICAgICAgey8qIHtpc1dpZGVWaWV3cG9ydCA/ICAqL31cclxuICAgICAgICA8VHJlbmRpbmcgY2xhc3NOYW1lPXtzdHlsZXMudHJlbmRpbmc2fSBkYXRhPXtnZXRBcnRpY2xlRGF0YShcInRyZW5kaW5nNlwiLCBwcm9wcy5kYXRhKX0gLz4gOlxyXG4gICAgICAgIDxBcnRpY2xlIGNsYXNzTmFtZT17c3R5bGVzLnRyZW5kaW5nNn0gZGF0YT17Z2V0QXJ0aWNsZURhdGEoXCJ0cmVuZGluZzZcIiwgcHJvcHMuZGF0YSl9IC8+XHJcbiAgICAgICAgey8qIH0gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJTcG90bGlnaHR9PlxyXG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT17c3R5bGVzLnNwb3RsaWdodFRpdGxlfT5TcG90bGlnaHQ8L2g0PlxyXG4gICAgICAgICAgPFNwb3RsaWdodCBjbGFzc05hbWU9e3N0eWxlcy5zcG90bGlnaHQxfSAgZGF0YT17Z2V0QXJ0aWNsZURhdGEoXCJzcG90bGlnaHQxXCIsIHByb3BzLmRhdGEpfS8+XHJcbiAgICAgICAgICA8U3BvdGxpZ2h0IGNsYXNzTmFtZT17c3R5bGVzLnNwb3RsaWdodDJ9ICBkYXRhPXtnZXRBcnRpY2xlRGF0YShcInNwb3RsaWdodDJcIiwgcHJvcHMuZGF0YSl9Lz5cclxuICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoRGF0YSgpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgZGF0YSxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBpbiBnZXRTdGF0aWNQcm9wczpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHtcclxuICAgICAgICBkYXRhOiBudWxsLCAvLyBvciBoYW5kbGUgZXJyb3Igc3RhdGUgYXMgbmVlZGVkXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSGVhZGVyIiwiQXJ0aWNsZSIsIkhlYWRsaW5lIiwiRmVhdHVyZWQiLCJUcmVuZGluZyIsIlNwb3RsaWdodCIsImdldEFydGljbGVEYXRhIiwic3R5bGVzIiwiRGl2aWRlciIsIkhvbWUiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJib2R5IiwiaGVhZGVyIiwic3R5bGUiLCJtYXJnaW5Cb3R0b20iLCJjb250YWluZXJNYWluIiwiY29udGFpbmVySGVhZGxpbmUiLCJoZWFkbGluZSIsImRhdGEiLCJvcmllbnRhdGlvbiIsInZEaXZpZGVyIiwiY29udGFpbmVyRmVhdHVyZWQiLCJoNCIsInRvcFRpdGxlIiwiZmVhdHVyZWQxIiwiZmVhdHVyZWQyIiwiZmVhdHVyZWQzIiwiZmVhdHVyZWQ0IiwiZmVhdHVyZWQ1IiwiY29udGFpbmVyVHJlbmRpbmciLCJ0cmVuZGluZ1RpdGxlIiwidHJlbmRpbmcxIiwidHJlbmRpbmcyIiwidHJlbmRpbmczIiwidHJlbmRpbmc0IiwidHJlbmRpbmc1IiwidHJlbmRpbmc2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});