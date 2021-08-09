/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/bakery.jpg */ \"./src/images/bakery.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html,\\nbody,\\ndiv,\\nspan,\\napplet,\\nobject,\\niframe,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\np,\\nblockquote,\\npre,\\na,\\nabbr,\\nacronym,\\naddress,\\nbig,\\ncite,\\ncode,\\ndel,\\ndfn,\\nem,\\nimg,\\nins,\\nkbd,\\nq,\\ns,\\nsamp,\\nsmall,\\nstrike,\\nstrong,\\nsub,\\nsup,\\ntt,\\nvar,\\nb,\\nu,\\ni,\\ncenter,\\ndl,\\ndt,\\ndd,\\nol,\\nul,\\nli,\\nfieldset,\\nform,\\nlabel,\\nlegend,\\ntable,\\ncaption,\\ntbody,\\ntfoot,\\nthead,\\ntr,\\nth,\\ntd,\\narticle,\\naside,\\ncanvas,\\ndetails,\\nembed,\\nfigure,\\nfigcaption,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\noutput,\\nruby,\\nsection,\\nsummary,\\ntime,\\nmark,\\naudio,\\nvideo {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n}\\n/* HTML5 display-role reset for older browsers */\\narticle,\\naside,\\ndetails,\\nfigcaption,\\nfigure,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\nsection {\\n  display: block;\\n}\\nbody {\\n  line-height: 1;\\n}\\nol,\\nul {\\n  list-style: none;\\n}\\nblockquote,\\nq {\\n  quotes: none;\\n}\\nblockquote:before,\\nblockquote:after,\\nq:before,\\nq:after {\\n  content: \\\"\\\";\\n  content: none;\\n}\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n/*================= start ==================*/\\nbody {\\n  font-family: Arial, Helvetica, sans-serif;\\n  background-color: #fff;\\n  line-height: 1.5;\\n  color: #272a2e;\\n  display: flex;\\n  flex-direction: column;\\n  min-height: 100%;\\n  /* height: 100vh; */\\n}\\n\\nheader {\\n  border-bottom: 1px solid #000;\\n  background-color: #fff;\\n  color: #000;\\n}\\n\\nnav {\\n  margin: 0 auto;\\n  position: relative;\\n  background-color: #aaa;\\n  width: 500px;\\n}\\n\\nnav ul {\\n  display: flex;\\n}\\n\\n/* nav li */\\n.tab {\\n  border-top: 1px solid rgb(200, 200, 200);\\n  border-left: 1px solid rgb(200, 200, 200);\\n  border-right: 1px solid rgb(200, 200, 200);\\n  border-radius: 2px;\\n  cursor: pointer;\\n  padding-top: 0.5rem;\\n  padding-bottom: 0.5rem;\\n  font-family: sans-serif;\\n  font-weight: 500;\\n  font-size: 1.2rem;\\n  text-decoration: none;\\n  position: relative;\\n  flex: 1;\\n}\\n\\n\\n\\n.showing {\\n   background-color: #272a2e;\\n   color: #fff;\\n}\\n\\n.tab:hover::before {\\n  content: \\\"\\\";\\n  position: absolute;\\n  top: 2.01rem;\\n  background: gold;\\n  width: 0.5rem;\\n  height: 0.5rem;\\n  border-radius: 100%;\\n  left: calc(49%);\\n}\\n\\n#content {\\n   height: calc(100vh - 45px);\\n}\\n\\nh1 {\\n  text-align: center;\\n  font-size: 2rem;\\n  margin-bottom: 2rem;\\n}\\n\\nli {\\n  text-align: center;\\n}\\n\\np {\\n  text-align: center;\\n  display: block;\\n  margin-bottom: 1rem;\\n}\\n\\nimg {\\n  height: 100vh;\\n}\\n\\n#homeDiv,\\n#menudiv,\\n#contactDiv {\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  background-color: rgb(145, 215, 155);\\n  color: #fff;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\n.homeDiv {\\n   height: 90vh;\\n   padding: 15px;\\n}\\n.homeDiv p {\\n   padding: 10px 40px;\\n}\\n\\n#homeImg {\\n   height: calc(100vh - 45px);\\n   width: 100vw;\\n   background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n   background-repeat: no-repeat;\\n   background-size: cover;\\n   background-position: center center;\\n}\\n\\n#homeContainer {\\n   color: #fff;\\n   height: calc(100vh - 45px);\\n   width: 100vw;\\n   background-color: #272a2e;\\n}\\n\\n#homeContainer h1 {\\n   margin: 2rem;\\n}\\n\\n#homeContainer p {\\n   padding: 10px 10vw;\\n   margin-bottom: 45px;\\n}\\n\\n.menu-section-header h2 {\\n  font-size: 2rem;\\n  font-weight: 400;\\n  line-height: 1.5;\\n  text-align: center;\\n}\\n\\n.menu-section p {\\n  margin-bottom: 0.4rem;\\n}\\n.menu-section li:last-child {\\n  margin-bottom: 3.5rem;\\n}\\n.menu-section-header {\\n  margin-bottom: 1rem;\\n  margin-top: 2.5rem;\\n}\\n#menuContainer {\\n  background-color: #272a2e;\\n  margin: 0 auto;\\n  margin-top: 1.5rem;\\n  margin-bottom: 1.5rem;\\n  width: 80%;\\n  border: 10px double#fff;\\n  border-radius: 5px;\\n  border-width: 9px;\\n}\\n\\n\\n#contactDiv {\\n  height: calc(100vh - 45px);\\n  flex-direction: row;\\n}\\n#containerDiv {\\n  background-color:#272a2e;\\n  margin: 10px;\\n  border: 10px double #fff;\\n  border-radius: 5px;\\n  padding: 5vw;\\n  align-items: normal;\\n}\\n#contactDiv h1 {\\n  padding: 5px;\\n}\\n#contactDiv p {\\n  padding: 10px;\\n}\\n#contactDiv img {\\n   height: calc(100vh - 45px);\\n}\\n\\n\\nfooter {\\n  height: 25px;\\n  width: 100vw;\\n  padding: 10px;\\n  background-color: #fff;\\n  color: #000;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://restaurant/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contactPage)\n/* harmony export */ });\nfunction contactPage() {\n  const contactDiv = document.createElement(\"div\");\n  contactDiv.setAttribute(\"id\", \"contactDiv\");\n\n  const contactContainer = document.createElement(\"div\");\n  contactContainer.setAttribute(\"id\", \"containerDiv\");\n\n  const imageContainer = document.createElement(\"div\");\n  imageContainer.setAttribute(\"id\", \"imageDiv\");\n\n  const banner = document.createElement(\"h1\");\n  banner.textContent = \"Contact Us\";\n\n  const streetAddress = document.createElement(\"p\");\n  streetAddress.textContent = \"2049 Fillmore St San Francisco, CA 94115\";\n\n  const phoneNumber = document.createElement(\"p\");\n  phoneNumber.textContent = \"(222)-888 5555\";\n\n  const frontImage = document.createElement(\"img\");\n  frontImage.src = \"../src/images/churros.jpg\";\n  frontImage.alt = \"Churros\";\n\n  contactContainer.appendChild(banner);\n  contactContainer.appendChild(streetAddress);\n  contactContainer.appendChild(phoneNumber);\n  imageContainer.appendChild(frontImage);\n  contactDiv.appendChild(contactContainer);\n  contactDiv.appendChild(imageContainer);\n\n  return contactDiv;\n}\n\n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createFooter)\n/* harmony export */ });\n\nfunction createFooter() {\n   const footer = document.createElement('footer');\n   let footerText = document.createElement('p')\n   footerText.textContent = \"Antonio Melena\";\n   footer.appendChild(footerText);\n   return footer;\n};\n\n//# sourceURL=webpack://restaurant/./src/footer.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeNavBar\": () => (/* binding */ makeNavBar),\n/* harmony export */   \"pageLoad\": () => (/* binding */ pageLoad)\n/* harmony export */ });\nfunction createHtmlElement(type, content) {\n  const element = document.createElement(type);\n  if (content) {\n    element.innerText = content;\n    element.setAttribute(\"id\", content);\n  }\n  return element;\n}\n\nfunction makeNavBar() {\n  const header = document.createElement(\"HEADER\");\n  const nav = document.createElement(\"nav\");\n  const navItems = [\"home\", \"menu\", \"contact\"];\n  const unorderedList = document.createElement(\"ul\");\n\n  navItems.forEach((item) => {\n    const listTags = document.createElement(\"li\");\n    listTags.setAttribute(\"id\", `#${item}ListItem`);\n    listTags.setAttribute(\"class\", \"tab\");\n    const element = createHtmlElement(\"a\", item);\n    listTags.appendChild(element);\n    unorderedList.appendChild(listTags);\n  });\n  nav.appendChild(unorderedList);\n  header.appendChild(nav);\n\n  return header;\n}\n\nfunction pageLoad() {\n  const homeDiv = document.createElement(\"div\");\n  homeDiv.setAttribute(\"id\", \"homeDiv\");\n\n  const homeImg = document.createElement(\"div\");\n  homeImg.setAttribute(\"id\", \"homeImg\");\n  const homeContainer = document.createElement(\"div\");\n  homeContainer.setAttribute(\"id\", 'homeContainer');\n  const banner = document.createElement(\"h1\");\n  banner.textContent = \"Vesuvio\";\n  const restaurantReview = document.createElement(\"p\");\n  const moreAbout = document.createElement(\"p\");\n  restaurantReview.textContent =\n    \"Lorem ipsum dolor sit amet consectetur adipisicing elit Evnirepudiandae totam enim dicta vitae animi asperiores? Aut voluptatum cum   dicta officiis, eligendi consectetur mollitia, natus eaque ad nemo eiuneque. Lorem ipsum dolor sit amet consectetur adipisicing elit Evnirepudiandae totam enim dicta vitae animi asperiores? Aut voluptatum cum   dicta officiis, eligendi consectetur mollitia, natus eaque ad nemo eiuneque. Lorem ipsum dolor sit amet consectetur adipisicing elit Evnirepudiandae totam enim dicta vitae animi asperiores? Aut voluptatum cum   dicta officiis, eligendi consectetur mollitia, natus eaque ad nemo eiuneque.\";\n  moreAbout.textContent =\n    \"Driving down High Street it's a bit odd to come upon a vintage relic of a building in a funky little neighborhood. For almost 100 years High Street Market and Deli has been serving the city of San Luis Obispo. Built in 1927, High Street Market and Deli carried everything from milk, butter, chewing tobacco and fishing gear. The area was known as the railroad district and housed many of the workers and their families. When High Street was still a dirt road, those workers would stop in to get a pint of milk, cigarettes and a deli sandwich on the way to and from the railroad station. Throughout a century High Street Market and Deli has been a lot of people's corner store but in the recent years, it's become San Luis Obispo's original sandwich joint.\";\n//   const frontImage = document.createElement(\"img\");\n//   frontImage.src = \"./images/churros.jpg\";\n//   frontImage.alt = \"Churros\";\n\n  homeContainer.appendChild(banner);\n  homeContainer.appendChild(restaurantReview);\n  homeContainer.appendChild(moreAbout);\n//   homeDiv.appendChild(frontImage);\n  homeDiv.appendChild(homeImg)\n  homeDiv.appendChild(homeContainer);\n\n  return homeDiv;\n}\n\n\n//# sourceURL=webpack://restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n\nconst container = document.getElementById(\"content\");\nconst nav = (0,_home__WEBPACK_IMPORTED_MODULE_0__.makeNavBar)();\ndocument.body.insertBefore(nav, document.body.firstChild);\nconst home = (0,_home__WEBPACK_IMPORTED_MODULE_0__.pageLoad)();\ncontainer.appendChild(home);\nconst footer = (0,_footer__WEBPACK_IMPORTED_MODULE_3__.default)();\ncontainer.appendChild(footer);\n\nconst homeTab = document.querySelector(\"#home\");\nhomeTab.parentElement.classList.add('showing')\nconst menuTab = document.querySelector(\"#menu\");\nconst contactTab = document.querySelector(\"#contact\");\n\nhomeTab.addEventListener(\"click\", () => {\n  container.textContent = \"\";\n  container.appendChild(home);\n  container.appendChild(footer);\n  menuTab.parentElement.classList.remove('showing');\n  contactTab.parentElement.classList.remove('showing');\n  homeTab.parentElement.classList.add('showing')\n});\n\nmenuTab.addEventListener(\"click\", () => {\n  container.textContent = \"\";\n  const menu = (0,_menu__WEBPACK_IMPORTED_MODULE_2__.default)();\n  container.appendChild(menu);\n  container.appendChild(footer);\n  homeTab.parentElement.classList.remove('showing');\n  contactTab.parentElement.classList.remove('showing');\n  menuTab.parentElement.classList.add('showing');\n});\n\ncontactTab.addEventListener(\"click\", () => {\n  container.textContent = \"\";\n  const contact = (0,_contact__WEBPACK_IMPORTED_MODULE_1__.default)();\n  container.appendChild(contact);\n  container.appendChild(footer);\n  contactTab.parentElement.classList.add('showing');\n  menuTab.parentElement.classList.remove('showing');\n  homeTab.parentElement.classList.remove('showing');\n});\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menuPage)\n/* harmony export */ });\nfunction createMenuSection(headerTitle) {\n  const menuSection = document.createElement(\"section\");\n  menuSection.classList.add(\"menu-section\");\n\n  const menuHeader = document.createElement(\"div\");\n  menuHeader.classList.add(\"menu-section-header\");\n\n  const menuHeaderTitle = document.createElement(\"h2\");\n  menuHeaderTitle.textContent = headerTitle;\n\n  menuHeader.appendChild(menuHeaderTitle);\n  menuSection.appendChild(menuHeader);\n  return menuSection;\n}\n\nfunction createMenuItem(itemName, itemPrice, itemInfo) {\n  const menuItem = document.createElement(\"li\");\n  const menuItemHeading = document.createElement(\"p\");\n  menuItemHeading.textContent = itemName;\n\n  const menuItemPrice = document.createElement(\"p\");\n  menuItemPrice.textContent = itemPrice;\n\n  const menuItemInfo = document.createElement(\"p\");\n  menuItemInfo.textContent = itemInfo;\n\n  menuItem.appendChild(menuItemHeading);\n  menuItem.appendChild(menuItemPrice);\n  menuItem.appendChild(menuItemInfo);\n  return menuItem;\n}\n\nfunction menuPage() {\n  const menuDiv = document.createElement(\"div\");\n  menuDiv.setAttribute(\"id\", \"menuDiv\");\n\n  const banner = document.createElement(\"h1\");\n  banner.textContent = \"Menu\";\n\n  const menuContainer = document.createElement(\"div\");\n  menuContainer.setAttribute(\"id\", \"menuContainer\");\n\n  const gShots = createMenuSection(\"GOLGAPPA SHOTS\");\n  const menuListOne = document.createElement(\"ul\");\n  const cjp = createMenuItem(\"CLASSIC JALJEERA & POTATO (EACH)\", 4, \"vegan\");\n  const spa = createMenuItem(\n    \"SPICED TEQUILA & AVOCADO (EACH)\",\n    6,\n    \"vegetarian\"\n  );\n  const vpp = createMenuItem(\n    \"VODKA PAANI & PICKLED BEETS (EACH)\",\n    6,\n    \"vegetarian\"\n  );\n  menuListOne.appendChild(cjp);\n  menuListOne.appendChild(spa);\n  menuListOne.appendChild(vpp);\n  gShots.appendChild(menuListOne);\n\n  const sPlates = createMenuSection(\"SMALL PLATES\");\n  const menuListTwo = document.createElement(\"ul\");\n  const gtc = createMenuItem(\"GOAT CHEESE & SPINACH SAMOSA\", 14, \"vegetarian\");\n  const rsk = createMenuItem(\"ROCK SHRIMP KOLIWADA\", 14, \"gluten free\");\n  const ogr = createMenuItem(\"OCTOPUS GHEE ROAST\", 14, \"gluten free\");\n  menuListTwo.appendChild(gtc);\n  menuListTwo.appendChild(rsk);\n  menuListTwo.appendChild(ogr);\n  sPlates.appendChild(menuListTwo);\n\n  menuContainer.appendChild(banner);\n  menuContainer.appendChild(gShots);\n  menuContainer.appendChild(sPlates);\n  menuDiv.appendChild(menuContainer);\n\n  return menuDiv;\n}\n\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/images/bakery.jpg":
/*!*******************************!*\
  !*** ./src/images/bakery.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c30fa45a4adda7cd1d81.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/images/bakery.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;