"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.jsx":
/*!**********************!*\
  !*** ./app/page.jsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_forms_Checkbox_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/forms/Checkbox.jsx */ \"(app-pages-browser)/./app/components/forms/Checkbox.jsx\");\n/* harmony import */ var _components_forms_Input_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/forms/Input.jsx */ \"(app-pages-browser)/./app/components/forms/Input.jsx\");\n/* harmony import */ var _components_forms_InputRange_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/forms/InputRange.jsx */ \"(app-pages-browser)/./app/components/forms/InputRange.jsx\");\n/* harmony import */ var _components_products_productCategoryRow_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/products/productCategoryRow.jsx */ \"(app-pages-browser)/./app/components/products/productCategoryRow.jsx\");\n/* harmony import */ var _components_products_productRow_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/products/productRow.jsx */ \"(app-pages-browser)/./app/components/products/productRow.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst products = [\n    {\n        category: \"Fruits\",\n        price: \"$1\",\n        stocked: true,\n        name: \"Apple\"\n    },\n    {\n        category: \"Fruits\",\n        price: \"$1\",\n        stocked: true,\n        name: \"Dragonfruit\"\n    },\n    {\n        category: \"Fruits\",\n        price: \"$2\",\n        stocked: false,\n        name: \"Passionfruit\"\n    },\n    {\n        category: \"Vegetables\",\n        price: \"$2\",\n        stocked: true,\n        name: \"Spinach\"\n    },\n    {\n        category: \"Vegetables\",\n        price: \"$4\",\n        stocked: false,\n        name: \"Pumpkin\"\n    },\n    {\n        category: \"Vegetables\",\n        price: \"$1\",\n        stocked: true,\n        name: \"Peas\"\n    }\n];\nfunction HomePage() {\n    _s();\n    const [showStockedOnly, setShowStockedOnly] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [priceRange, setPriceRange] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(10);\n    const visibleProducts = products.filter((product)=>{\n        if (showStockedOnly && !product.stocked) {\n            return false;\n        }\n        if (search && !product.name.toLowerCase().includes(search)) {\n            return false;\n        }\n        return true;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"root\",\n        className: \"d-flex justify-content-center align-items-center vh-100\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"d-flex flex-column vw-20\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SearchBar, {\n                    search: search,\n                    onSearchChange: setSearch,\n                    showStockedOnly: showStockedOnly,\n                    onStockedOnlyChange: setShowStockedOnly\n                }, void 0, false, {\n                    fileName: \"/home/val/public_html/test-nextjs/app/page.jsx\",\n                    lineNumber: 38,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductTable, {\n                    products: visibleProducts\n                }, void 0, false, {\n                    fileName: \"/home/val/public_html/test-nextjs/app/page.jsx\",\n                    lineNumber: 45,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/val/public_html/test-nextjs/app/page.jsx\",\n            lineNumber: 37,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/val/public_html/test-nextjs/app/page.jsx\",\n        lineNumber: 36,\n        columnNumber: 3\n    }, this);\n}\n_s(HomePage, \"D3GVS/qZDt5VbjzeqClf30CC27A=\");\n_c = HomePage;\nfunction SearchBar(param) {\n    let { search, onSearchChange, priceRange, onChangePriceRange, showStockedOnly, onStockedOnlyChange } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_forms_Input_jsx__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                value: search,\n                onChange: onSearchChange,\n                placeholder: \"Rechercher\"\n            }, void 0, false, {\n                fileName: \"/home/val/public_html/test-nextjs/app/page.jsx\",\n                lineNumber: 54,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_forms_InputRange_jsx__WEBPACK_IMPORTED_MODULE_4__.InputRange, {\n                id: \"priceRange\",\n                value: priceRange,\n                onChange: onChangePriceRange,\n                label: \"Rechercher les produits compris entre 0 et \" + \"\"\n            }, void 0, false, {\n                fileName: \"/home/val/public_html/test-nextjs/app/page.jsx\",\n                lineNumber: 55,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_forms_Checkbox_jsx__WEBPACK_IMPORTED_MODULE_2__.CheckBox, {\n                id: \"stock\",\n                checked: showStockedOnly,\n                onChange: onStockedOnlyChange,\n                label: \"N'afficher que les produits disponibles\"\n            }, void 0, false, {\n                fileName: \"/home/val/public_html/test-nextjs/app/page.jsx\",\n                lineNumber: 59,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/val/public_html/test-nextjs/app/page.jsx\",\n        lineNumber: 53,\n        columnNumber: 3\n    }, this);\n}\n_c1 = SearchBar;\nfunction ProductTable(param) {\n    let { products } = param;\n    const rows = [];\n    let lastCategory;\n    for (let product of products){\n        if (product.category !== lastCategory) {\n            rows.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_products_productCategoryRow_jsx__WEBPACK_IMPORTED_MODULE_5__.ProductCategoryRow, {\n                categoryName: product.category\n            }, product.category, false, {\n                fileName: \"/home/val/public_html/test-nextjs/app/page.jsx\",\n                lineNumber: 73,\n                columnNumber: 14\n            }, this));\n            lastCategory = product.category;\n        }\n        rows.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_products_productRow_jsx__WEBPACK_IMPORTED_MODULE_6__.ProductRow, {\n            product: product\n        }, product.name, false, {\n            fileName: \"/home/val/public_html/test-nextjs/app/page.jsx\",\n            lineNumber: 76,\n            columnNumber: 13\n        }, this));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n        className: \"table align-middle mt-2 table-striped\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            children: \"Name\"\n                        }, void 0, false, {\n                            fileName: \"/home/val/public_html/test-nextjs/app/page.jsx\",\n                            lineNumber: 83,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            children: \"Price\"\n                        }, void 0, false, {\n                            fileName: \"/home/val/public_html/test-nextjs/app/page.jsx\",\n                            lineNumber: 84,\n                            columnNumber: 6\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/val/public_html/test-nextjs/app/page.jsx\",\n                    lineNumber: 82,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/val/public_html/test-nextjs/app/page.jsx\",\n                lineNumber: 81,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                children: rows\n            }, void 0, false, {\n                fileName: \"/home/val/public_html/test-nextjs/app/page.jsx\",\n                lineNumber: 87,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/val/public_html/test-nextjs/app/page.jsx\",\n        lineNumber: 80,\n        columnNumber: 3\n    }, this);\n}\n_c2 = ProductTable;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"HomePage\");\n$RefreshReg$(_c1, \"SearchBar\");\n$RefreshReg$(_c2, \"ProductTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDhEQUFDZ0I7MEJBQ0EsNEVBQUNDOztzQ0FDQSw4REFBQ0M7c0NBQUc7Ozs7OztzQ0FDSiw4REFBQ0E7c0NBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUdOLDhEQUFDQzswQkFDQ1I7Ozs7Ozs7Ozs7OztBQUlMO01BekJTUCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS5qc3g/NmU0MSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDaGVja0JveCB9IGZyb20gXCIuL2NvbXBvbmVudHMvZm9ybXMvQ2hlY2tib3guanN4XCI7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCIuL2NvbXBvbmVudHMvZm9ybXMvSW5wdXQuanN4XCI7XG5pbXBvcnQgeyBJbnB1dFJhbmdlIH0gZnJvbSBcIi4vY29tcG9uZW50cy9mb3Jtcy9JbnB1dFJhbmdlLmpzeFwiO1xuaW1wb3J0IHsgUHJvZHVjdENhdGVnb3J5Um93IH0gZnJvbSBcIi4vY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0Q2F0ZWdvcnlSb3cuanN4XCI7XG5pbXBvcnQgeyBQcm9kdWN0Um93IH0gZnJvbSBcIi4vY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0Um93LmpzeFwiO1xuXG5jb25zdCBwcm9kdWN0cyA9IFtcblx0eyBjYXRlZ29yeTogXCJGcnVpdHNcIiwgcHJpY2U6IFwiJDFcIiwgc3RvY2tlZDogdHJ1ZSwgbmFtZTogXCJBcHBsZVwiIH0sXG5cdHsgY2F0ZWdvcnk6IFwiRnJ1aXRzXCIsIHByaWNlOiBcIiQxXCIsIHN0b2NrZWQ6IHRydWUsIG5hbWU6IFwiRHJhZ29uZnJ1aXRcIiB9LFxuXHR7IGNhdGVnb3J5OiBcIkZydWl0c1wiLCBwcmljZTogXCIkMlwiLCBzdG9ja2VkOiBmYWxzZSwgbmFtZTogXCJQYXNzaW9uZnJ1aXRcIiB9LFxuXHR7IGNhdGVnb3J5OiBcIlZlZ2V0YWJsZXNcIiwgcHJpY2U6IFwiJDJcIiwgc3RvY2tlZDogdHJ1ZSwgbmFtZTogXCJTcGluYWNoXCIgfSxcblx0eyBjYXRlZ29yeTogXCJWZWdldGFibGVzXCIsIHByaWNlOiBcIiQ0XCIsIHN0b2NrZWQ6IGZhbHNlLCBuYW1lOiBcIlB1bXBraW5cIiB9LFxuXHR7IGNhdGVnb3J5OiBcIlZlZ2V0YWJsZXNcIiwgcHJpY2U6IFwiJDFcIiwgc3RvY2tlZDogdHJ1ZSwgbmFtZTogXCJQZWFzXCIgfVxuXVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSgpIHtcblx0Y29uc3QgW3Nob3dTdG9ja2VkT25seSwgc2V0U2hvd1N0b2NrZWRPbmx5XSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKCcnKTtcblx0Y29uc3QgW3ByaWNlUmFuZ2UsIHNldFByaWNlUmFuZ2VdID0gdXNlU3RhdGUoMTApO1xuXG5cdGNvbnN0IHZpc2libGVQcm9kdWN0cyA9IHByb2R1Y3RzLmZpbHRlcihwcm9kdWN0ID0+IHtcblx0XHRpZiAoc2hvd1N0b2NrZWRPbmx5ICYmICFwcm9kdWN0LnN0b2NrZWQpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiAoc2VhcmNoICYmICFwcm9kdWN0Lm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0pXG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGlkPVwicm9vdFwiIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciB2aC0xMDBcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIHZ3LTIwXCI+XG5cdFx0XHRcdDxTZWFyY2hCYXIgXG5cdFx0XHRcdFx0c2VhcmNoPXtzZWFyY2h9XG5cdFx0XHRcdFx0b25TZWFyY2hDaGFuZ2U9e3NldFNlYXJjaH1cblx0XHRcdFx0XHRzaG93U3RvY2tlZE9ubHk9e3Nob3dTdG9ja2VkT25seX0gXG5cdFx0XHRcdFx0b25TdG9ja2VkT25seUNoYW5nZT17c2V0U2hvd1N0b2NrZWRPbmx5fSBcblx0XHRcdFx0Lz5cblxuXHRcdFx0XHQ8UHJvZHVjdFRhYmxlIHByb2R1Y3RzPXt2aXNpYmxlUHJvZHVjdHN9IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuZnVuY3Rpb24gU2VhcmNoQmFyKHsgc2VhcmNoLCBvblNlYXJjaENoYW5nZSwgcHJpY2VSYW5nZSwgb25DaGFuZ2VQcmljZVJhbmdlLCBzaG93U3RvY2tlZE9ubHksIG9uU3RvY2tlZE9ubHlDaGFuZ2UgfSkge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8SW5wdXQgdmFsdWU9e3NlYXJjaH0gb25DaGFuZ2U9e29uU2VhcmNoQ2hhbmdlfSBwbGFjZWhvbGRlcj1cIlJlY2hlcmNoZXJcIiAvPlxuXHRcdFx0PElucHV0UmFuZ2UgaWQ9XCJwcmljZVJhbmdlXCJcblx0XHRcdFx0XHRcdHZhbHVlPXtwcmljZVJhbmdlfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e29uQ2hhbmdlUHJpY2VSYW5nZX1cblx0XHRcdFx0XHRcdGxhYmVsPXsnUmVjaGVyY2hlciBsZXMgcHJvZHVpdHMgY29tcHJpcyBlbnRyZSAwIGV0ICcgKyAnJ30gLz5cblx0XHRcdDxDaGVja0JveCBpZD1cInN0b2NrXCIgXG5cdFx0XHRcdFx0ICBjaGVja2VkPXtzaG93U3RvY2tlZE9ubHl9IFxuXHRcdFx0XHRcdCAgb25DaGFuZ2U9e29uU3RvY2tlZE9ubHlDaGFuZ2V9IFxuXHRcdFx0XHRcdCAgbGFiZWw9XCJOJ2FmZmljaGVyIHF1ZSBsZXMgcHJvZHVpdHMgZGlzcG9uaWJsZXNcIiAvPlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG5mdW5jdGlvbiBQcm9kdWN0VGFibGUoeyBwcm9kdWN0cyB9KSB7XG5cdGNvbnN0IHJvd3MgPSBbXTtcblx0bGV0IGxhc3RDYXRlZ29yeTtcblxuXHRmb3IgKGxldCBwcm9kdWN0IG9mIHByb2R1Y3RzKSB7XG5cdFx0aWYgKHByb2R1Y3QuY2F0ZWdvcnkgIT09IGxhc3RDYXRlZ29yeSkge1xuXHRcdFx0cm93cy5wdXNoKDxQcm9kdWN0Q2F0ZWdvcnlSb3cga2V5PXtwcm9kdWN0LmNhdGVnb3J5fSBjYXRlZ29yeU5hbWU9e3Byb2R1Y3QuY2F0ZWdvcnl9IC8+KVxuXHRcdFx0bGFzdENhdGVnb3J5ID0gcHJvZHVjdC5jYXRlZ29yeTtcblx0XHR9XG5cdFx0cm93cy5wdXNoKDxQcm9kdWN0Um93IGtleT17cHJvZHVjdC5uYW1lfSBwcm9kdWN0PXtwcm9kdWN0fSAvPilcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIGFsaWduLW1pZGRsZSBtdC0yIHRhYmxlLXN0cmlwZWRcIj5cblx0XHRcdDx0aGVhZD5cblx0XHRcdFx0PHRyPlxuXHRcdFx0XHRcdDx0aD5OYW1lPC90aD5cblx0XHRcdFx0XHQ8dGg+UHJpY2U8L3RoPlxuXHRcdFx0XHQ8L3RyPlxuXHRcdFx0PC90aGVhZD5cblx0XHRcdDx0Ym9keT5cblx0XHRcdFx0e3Jvd3N9XG5cdFx0XHQ8L3Rib2R5PlxuXHRcdDwvdGFibGU+XG5cdCk7XG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQ2hlY2tCb3giLCJJbnB1dCIsIklucHV0UmFuZ2UiLCJQcm9kdWN0Q2F0ZWdvcnlSb3ciLCJQcm9kdWN0Um93IiwicHJvZHVjdHMiLCJjYXRlZ29yeSIsInByaWNlIiwic3RvY2tlZCIsIm5hbWUiLCJIb21lUGFnZSIsInNob3dTdG9ja2VkT25seSIsInNldFNob3dTdG9ja2VkT25seSIsInNlYXJjaCIsInNldFNlYXJjaCIsInByaWNlUmFuZ2UiLCJzZXRQcmljZVJhbmdlIiwidmlzaWJsZVByb2R1Y3RzIiwiZmlsdGVyIiwicHJvZHVjdCIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJkaXYiLCJpZCIsImNsYXNzTmFtZSIsIlNlYXJjaEJhciIsIm9uU2VhcmNoQ2hhbmdlIiwib25TdG9ja2VkT25seUNoYW5nZSIsIlByb2R1Y3RUYWJsZSIsIm9uQ2hhbmdlUHJpY2VSYW5nZSIsInZhbHVlIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsImxhYmVsIiwiY2hlY2tlZCIsInJvd3MiLCJsYXN0Q2F0ZWdvcnkiLCJwdXNoIiwiY2F0ZWdvcnlOYW1lIiwidGFibGUiLCJ0aGVhZCIsInRyIiwidGgiLCJ0Ym9keSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.jsx\n"));

/***/ })

});