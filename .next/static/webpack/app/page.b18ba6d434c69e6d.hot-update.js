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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_forms_Checkbox_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/forms/Checkbox.jsx */ \"(app-pages-browser)/./app/components/forms/Checkbox.jsx\");\n/* harmony import */ var _components_forms_Input_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/forms/Input.jsx */ \"(app-pages-browser)/./app/components/forms/Input.jsx\");\n/* harmony import */ var _components_forms_InputRange_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/forms/InputRange.jsx */ \"(app-pages-browser)/./app/components/forms/InputRange.jsx\");\n/* harmony import */ var _components_products_productCategoryRow_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/products/productCategoryRow.jsx */ \"(app-pages-browser)/./app/components/products/productCategoryRow.jsx\");\n/* harmony import */ var _components_products_productRow_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/products/productRow.jsx */ \"(app-pages-browser)/./app/components/products/productRow.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst products = [\n    {\n        category: \"Fruits\",\n        price: \"$1\",\n        stocked: true,\n        name: \"Apple\"\n    },\n    {\n        category: \"Fruits\",\n        price: \"$1\",\n        stocked: true,\n        name: \"Dragonfruit\"\n    },\n    {\n        category: \"Fruits\",\n        price: \"$2\",\n        stocked: false,\n        name: \"Passionfruit\"\n    },\n    {\n        category: \"Vegetables\",\n        price: \"$2\",\n        stocked: true,\n        name: \"Spinach\"\n    },\n    {\n        category: \"Vegetables\",\n        price: \"$4\",\n        stocked: false,\n        name: \"Pumpkin\"\n    },\n    {\n        category: \"Vegetables\",\n        price: \"$1\",\n        stocked: true,\n        name: \"Peas\"\n    }\n];\nfunction HomePage() {\n    _s();\n    const [showStockedOnly, setShowStockedOnly] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [priceRange, setPriceRange] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(10);\n    const visibleProducts = products.filter((product)=>{\n        if (showStockedOnly && !product.stocked) {\n            return false;\n        }\n        if (search && !product.name.toLowerCase().includes(search)) {\n            return false;\n        }\n        console.log(product.price);\n        if (product.price > priceRange) {\n            return false;\n        }\n        return true;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"root\",\n        className: \"d-flex justify-content-center align-items-center vh-100\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"d-flex flex-column vw-20\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SearchBar, {\n                    search: search,\n                    onSearchChange: setSearch,\n                    priceRange: priceRange,\n                    onPriceRangeChange: setPriceRange,\n                    showStockedOnly: showStockedOnly,\n                    onStockedOnlyChange: setShowStockedOnly\n                }, void 0, false, {\n                    fileName: \"/home/val/public_html/test-nextjs/app/page.jsx\",\n                    lineNumber: 43,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductTable, {\n                    products: visibleProducts\n                }, void 0, false, {\n                    fileName: \"/home/val/public_html/test-nextjs/app/page.jsx\",\n                    lineNumber: 52,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/val/public_html/test-nextjs/app/page.jsx\",\n            lineNumber: 42,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/val/public_html/test-nextjs/app/page.jsx\",\n        lineNumber: 41,\n        columnNumber: 3\n    }, this);\n}\n_s(HomePage, \"D3GVS/qZDt5VbjzeqClf30CC27A=\");\n_c = HomePage;\nfunction SearchBar(param) {\n    let { search, onSearchChange, priceRange, onPriceRangeChange, showStockedOnly, onStockedOnlyChange } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_forms_Input_jsx__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                value: search,\n                onChange: onSearchChange,\n                placeholder: \"Rechercher\"\n            }, void 0, false, {\n                fileName: \"/home/val/public_html/test-nextjs/app/page.jsx\",\n                lineNumber: 61,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_forms_InputRange_jsx__WEBPACK_IMPORTED_MODULE_4__.InputRange, {\n                id: \"priceRange\",\n                value: priceRange,\n                onChange: onPriceRangeChange,\n                label: \"Rechercher les produits compris entre 0 et \" + priceRange + \"$\"\n            }, void 0, false, {\n                fileName: \"/home/val/public_html/test-nextjs/app/page.jsx\",\n                lineNumber: 62,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_forms_Checkbox_jsx__WEBPACK_IMPORTED_MODULE_2__.CheckBox, {\n                id: \"stock\",\n                checked: showStockedOnly,\n                onChange: onStockedOnlyChange,\n                label: \"N'afficher que les produits disponibles\"\n            }, void 0, false, {\n                fileName: \"/home/val/public_html/test-nextjs/app/page.jsx\",\n                lineNumber: 66,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/val/public_html/test-nextjs/app/page.jsx\",\n        lineNumber: 60,\n        columnNumber: 3\n    }, this);\n}\n_c1 = SearchBar;\nfunction ProductTable(param) {\n    let { products } = param;\n    const rows = [];\n    let lastCategory;\n    for (let product of products){\n        if (product.category !== lastCategory) {\n            rows.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_products_productCategoryRow_jsx__WEBPACK_IMPORTED_MODULE_5__.ProductCategoryRow, {\n                categoryName: product.category\n            }, product.category, false, {\n                fileName: \"/home/val/public_html/test-nextjs/app/page.jsx\",\n                lineNumber: 80,\n                columnNumber: 14\n            }, this));\n            lastCategory = product.category;\n        }\n        rows.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_products_productRow_jsx__WEBPACK_IMPORTED_MODULE_6__.ProductRow, {\n            product: product\n        }, product.name, false, {\n            fileName: \"/home/val/public_html/test-nextjs/app/page.jsx\",\n            lineNumber: 83,\n            columnNumber: 13\n        }, this));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n        className: \"table align-middle mt-2 table-striped\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            children: \"Name\"\n                        }, void 0, false, {\n                            fileName: \"/home/val/public_html/test-nextjs/app/page.jsx\",\n                            lineNumber: 90,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            children: \"Price\"\n                        }, void 0, false, {\n                            fileName: \"/home/val/public_html/test-nextjs/app/page.jsx\",\n                            lineNumber: 91,\n                            columnNumber: 6\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/val/public_html/test-nextjs/app/page.jsx\",\n                    lineNumber: 89,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/val/public_html/test-nextjs/app/page.jsx\",\n                lineNumber: 88,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                children: rows\n            }, void 0, false, {\n                fileName: \"/home/val/public_html/test-nextjs/app/page.jsx\",\n                lineNumber: 94,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/val/public_html/test-nextjs/app/page.jsx\",\n        lineNumber: 87,\n        columnNumber: 3\n    }, this);\n}\n_c2 = ProductTable;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"HomePage\");\n$RefreshReg$(_c1, \"SearchBar\");\n$RefreshReg$(_c2, \"ProductTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFDaEM7UUFDQStCLEtBQUtFLElBQUksZUFBQyw4REFBQ25DLDJFQUFVQTtZQUFvQmUsU0FBU0E7V0FBdkJBLFFBQVFWLElBQUk7Ozs7O0lBQ3hDO0lBRUEscUJBQ0MsOERBQUNnQztRQUFNZixXQUFVOzswQkFDaEIsOERBQUNnQjswQkFDQSw0RUFBQ0M7O3NDQUNBLDhEQUFDQztzQ0FBRzs7Ozs7O3NDQUNKLDhEQUFDQTtzQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR04sOERBQUNDOzBCQUNDUjs7Ozs7Ozs7Ozs7O0FBSUw7TUF6QlNOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLmpzeD82ZTQxIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENoZWNrQm94IH0gZnJvbSBcIi4vY29tcG9uZW50cy9mb3Jtcy9DaGVja2JveC5qc3hcIjtcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIi4vY29tcG9uZW50cy9mb3Jtcy9JbnB1dC5qc3hcIjtcbmltcG9ydCB7IElucHV0UmFuZ2UgfSBmcm9tIFwiLi9jb21wb25lbnRzL2Zvcm1zL0lucHV0UmFuZ2UuanN4XCI7XG5pbXBvcnQgeyBQcm9kdWN0Q2F0ZWdvcnlSb3cgfSBmcm9tIFwiLi9jb21wb25lbnRzL3Byb2R1Y3RzL3Byb2R1Y3RDYXRlZ29yeVJvdy5qc3hcIjtcbmltcG9ydCB7IFByb2R1Y3RSb3cgfSBmcm9tIFwiLi9jb21wb25lbnRzL3Byb2R1Y3RzL3Byb2R1Y3RSb3cuanN4XCI7XG5cbmNvbnN0IHByb2R1Y3RzID0gW1xuXHR7IGNhdGVnb3J5OiBcIkZydWl0c1wiLCBwcmljZTogXCIkMVwiLCBzdG9ja2VkOiB0cnVlLCBuYW1lOiBcIkFwcGxlXCIgfSxcblx0eyBjYXRlZ29yeTogXCJGcnVpdHNcIiwgcHJpY2U6IFwiJDFcIiwgc3RvY2tlZDogdHJ1ZSwgbmFtZTogXCJEcmFnb25mcnVpdFwiIH0sXG5cdHsgY2F0ZWdvcnk6IFwiRnJ1aXRzXCIsIHByaWNlOiBcIiQyXCIsIHN0b2NrZWQ6IGZhbHNlLCBuYW1lOiBcIlBhc3Npb25mcnVpdFwiIH0sXG5cdHsgY2F0ZWdvcnk6IFwiVmVnZXRhYmxlc1wiLCBwcmljZTogXCIkMlwiLCBzdG9ja2VkOiB0cnVlLCBuYW1lOiBcIlNwaW5hY2hcIiB9LFxuXHR7IGNhdGVnb3J5OiBcIlZlZ2V0YWJsZXNcIiwgcHJpY2U6IFwiJDRcIiwgc3RvY2tlZDogZmFsc2UsIG5hbWU6IFwiUHVtcGtpblwiIH0sXG5cdHsgY2F0ZWdvcnk6IFwiVmVnZXRhYmxlc1wiLCBwcmljZTogXCIkMVwiLCBzdG9ja2VkOiB0cnVlLCBuYW1lOiBcIlBlYXNcIiB9XG5dXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKCkge1xuXHRjb25zdCBbc2hvd1N0b2NrZWRPbmx5LCBzZXRTaG93U3RvY2tlZE9ubHldID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoJycpO1xuXHRjb25zdCBbcHJpY2VSYW5nZSwgc2V0UHJpY2VSYW5nZV0gPSB1c2VTdGF0ZSgxMCk7XG5cblx0Y29uc3QgdmlzaWJsZVByb2R1Y3RzID0gcHJvZHVjdHMuZmlsdGVyKHByb2R1Y3QgPT4ge1xuXHRcdGlmIChzaG93U3RvY2tlZE9ubHkgJiYgIXByb2R1Y3Quc3RvY2tlZCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmIChzZWFyY2ggJiYgIXByb2R1Y3QubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaCkpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRjb25zb2xlLmxvZyhwcm9kdWN0LnByaWNlKVxuXHRcdGlmIChwcm9kdWN0LnByaWNlID4gcHJpY2VSYW5nZSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9KVxuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBpZD1cInJvb3RcIiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgdmgtMTAwXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiB2dy0yMFwiPlxuXHRcdFx0XHQ8U2VhcmNoQmFyIFxuXHRcdFx0XHRcdHNlYXJjaD17c2VhcmNofVxuXHRcdFx0XHRcdG9uU2VhcmNoQ2hhbmdlPXtzZXRTZWFyY2h9XG5cdFx0XHRcdFx0cHJpY2VSYW5nZT17cHJpY2VSYW5nZX1cblx0XHRcdFx0XHRvblByaWNlUmFuZ2VDaGFuZ2U9e3NldFByaWNlUmFuZ2V9XG5cdFx0XHRcdFx0c2hvd1N0b2NrZWRPbmx5PXtzaG93U3RvY2tlZE9ubHl9IFxuXHRcdFx0XHRcdG9uU3RvY2tlZE9ubHlDaGFuZ2U9e3NldFNob3dTdG9ja2VkT25seX0gXG5cdFx0XHRcdC8+XG5cblx0XHRcdFx0PFByb2R1Y3RUYWJsZSBwcm9kdWN0cz17dmlzaWJsZVByb2R1Y3RzfSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG5cbmZ1bmN0aW9uIFNlYXJjaEJhcih7IHNlYXJjaCwgb25TZWFyY2hDaGFuZ2UsIHByaWNlUmFuZ2UsIG9uUHJpY2VSYW5nZUNoYW5nZSwgc2hvd1N0b2NrZWRPbmx5LCBvblN0b2NrZWRPbmx5Q2hhbmdlIH0pIHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2PlxuXHRcdFx0PElucHV0IHZhbHVlPXtzZWFyY2h9IG9uQ2hhbmdlPXtvblNlYXJjaENoYW5nZX0gcGxhY2Vob2xkZXI9XCJSZWNoZXJjaGVyXCIgLz5cblx0XHRcdDxJbnB1dFJhbmdlIGlkPVwicHJpY2VSYW5nZVwiXG5cdFx0XHRcdFx0XHR2YWx1ZT17cHJpY2VSYW5nZX1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtvblByaWNlUmFuZ2VDaGFuZ2V9XG5cdFx0XHRcdFx0XHRsYWJlbD17J1JlY2hlcmNoZXIgbGVzIHByb2R1aXRzIGNvbXByaXMgZW50cmUgMCBldCAnICsgcHJpY2VSYW5nZSArICckJ30gLz5cblx0XHRcdDxDaGVja0JveCBpZD1cInN0b2NrXCIgXG5cdFx0XHRcdFx0ICBjaGVja2VkPXtzaG93U3RvY2tlZE9ubHl9IFxuXHRcdFx0XHRcdCAgb25DaGFuZ2U9e29uU3RvY2tlZE9ubHlDaGFuZ2V9IFxuXHRcdFx0XHRcdCAgbGFiZWw9XCJOJ2FmZmljaGVyIHF1ZSBsZXMgcHJvZHVpdHMgZGlzcG9uaWJsZXNcIiAvPlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG5mdW5jdGlvbiBQcm9kdWN0VGFibGUoeyBwcm9kdWN0cyB9KSB7XG5cdGNvbnN0IHJvd3MgPSBbXTtcblx0bGV0IGxhc3RDYXRlZ29yeTtcblxuXHRmb3IgKGxldCBwcm9kdWN0IG9mIHByb2R1Y3RzKSB7XG5cdFx0aWYgKHByb2R1Y3QuY2F0ZWdvcnkgIT09IGxhc3RDYXRlZ29yeSkge1xuXHRcdFx0cm93cy5wdXNoKDxQcm9kdWN0Q2F0ZWdvcnlSb3cga2V5PXtwcm9kdWN0LmNhdGVnb3J5fSBjYXRlZ29yeU5hbWU9e3Byb2R1Y3QuY2F0ZWdvcnl9IC8+KVxuXHRcdFx0bGFzdENhdGVnb3J5ID0gcHJvZHVjdC5jYXRlZ29yeTtcblx0XHR9XG5cdFx0cm93cy5wdXNoKDxQcm9kdWN0Um93IGtleT17cHJvZHVjdC5uYW1lfSBwcm9kdWN0PXtwcm9kdWN0fSAvPilcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIGFsaWduLW1pZGRsZSBtdC0yIHRhYmxlLXN0cmlwZWRcIj5cblx0XHRcdDx0aGVhZD5cblx0XHRcdFx0PHRyPlxuXHRcdFx0XHRcdDx0aD5OYW1lPC90aD5cblx0XHRcdFx0XHQ8dGg+UHJpY2U8L3RoPlxuXHRcdFx0XHQ8L3RyPlxuXHRcdFx0PC90aGVhZD5cblx0XHRcdDx0Ym9keT5cblx0XHRcdFx0e3Jvd3N9XG5cdFx0XHQ8L3Rib2R5PlxuXHRcdDwvdGFibGU+XG5cdCk7XG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQ2hlY2tCb3giLCJJbnB1dCIsIklucHV0UmFuZ2UiLCJQcm9kdWN0Q2F0ZWdvcnlSb3ciLCJQcm9kdWN0Um93IiwicHJvZHVjdHMiLCJjYXRlZ29yeSIsInByaWNlIiwic3RvY2tlZCIsIm5hbWUiLCJIb21lUGFnZSIsInNob3dTdG9ja2VkT25seSIsInNldFNob3dTdG9ja2VkT25seSIsInNlYXJjaCIsInNldFNlYXJjaCIsInByaWNlUmFuZ2UiLCJzZXRQcmljZVJhbmdlIiwidmlzaWJsZVByb2R1Y3RzIiwiZmlsdGVyIiwicHJvZHVjdCIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiaWQiLCJjbGFzc05hbWUiLCJTZWFyY2hCYXIiLCJvblNlYXJjaENoYW5nZSIsIm9uUHJpY2VSYW5nZUNoYW5nZSIsIm9uU3RvY2tlZE9ubHlDaGFuZ2UiLCJQcm9kdWN0VGFibGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJsYWJlbCIsImNoZWNrZWQiLCJyb3dzIiwibGFzdENhdGVnb3J5IiwicHVzaCIsImNhdGVnb3J5TmFtZSIsInRhYmxlIiwidGhlYWQiLCJ0ciIsInRoIiwidGJvZHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.jsx\n"));

/***/ })

});