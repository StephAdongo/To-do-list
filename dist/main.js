/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --main-clr: #EEEDEB;
    --secondaray-clr: #E0CCBE;
    --tertairy-clr: #747264;
    --last-clr: #3C3633;
  }
  
  body {
    display: flex;
    flex-direction: column;
    justify-content: start;
    font-family: "Poppins", sans-serif;
    margin: 0;
    background-color: var(--main-clr);
    color: var(--last-clr);
  }
  
  .addTask,
  .addProject,
  .task,
  span {
    cursor: pointer;
  }
  
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  
  span {
    margin-right: 4px;
    font-size: 1.5rem;
  }
  
  li {
    margin: 0.5rem 0;
    gap: 1rem;
    list-style: none;
  
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  svg {
    width: 24px;
    height: 24px;
  
    cursor: pointer;
    fill: var(--tertairy-clr);
  }
  
  h3,
  p {
    margin: 0;
  }
  
  
  dialog {
    margin: 5rem auto auto auto;
    border: 2px solid var(--last-clr);
    background-color: var(--main-clr);
    border-radius: 36px;
  }
  
  
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  
    color: var(--last-clr);
    /* font-weight: bold; */
  
    font-size: 1.2rem;
    gap: 12px;
  }
  
  form > button {
    padding: 8px;
    width: 30%;
  
    font-size: 1rem;
    /* font-weight: bold; */
    background-color: var(--secondaray-clr);
    color: var(--main-clr);
    border: 1px solid var(--last-clr);
    border-radius: 36px;
    cursor: pointer;
  }
  
  textarea {
    padding: 0.5rem;
    resize: none;
    width: 80%;
  
    color: var(--last-clr);
  }
  
  form > input {
    padding: 0.5rem;
    width: 80%;
    color: var(--last-clr);
  }
  
  select {
    padding: 4px;
  }
  
  header {
    background-color: var(--secondaray-clr);
  }
  
  header > h3 {
    color: var(--last-clr);
    padding: 1.5rem 1.5rem 1.5rem 1rem;
    font-size: 2rem;
  }
  
  .container {
    display: flex;
  }
  
  .addProject {
    font-size: 1.3rem;
    /* font-weight: 500; */
  
  }
  
  .projectsContainer {
    display: flex;
    flex-direction: column;
    align-items: start;
    
    width: 20%;
    gap: 1rem;
    height: 100vh;
    border-right: 4px solid var(--secondaray-clr);
    padding: 1rem 5rem 1rem 1rem;
  }
  
  .tasksContainer {
    flex-basis: 100%;
    padding: 5rem 5rem;
  }
  
  .addTask {
    font-size: 1.3rem;
    /* font-weight: 500; */
  }
  
  .task {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    border-bottom: 1px solid var(--secondaray-clr);
    padding: 1rem 0;
  }
  
  .tasks {
    margin: 2rem 0;
  }
  
  .checkBox {
    margin: 0 4px 0 0;
    border-radius: 100px;
    
    background-color: var(--secondaray-clr);
  }
  
  
  .editTask {
    margin-left: auto;
    margin-right: 8px;
  }
  
  .taskDetails {
    display: flex;
    flex-direction: column;
    align-items: start;
  
    gap: 8px;
  }
  
  .closeModal {
    margin-left: auto;
  }`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB,yBAAyB;IACzB,uBAAuB;IACvB,mBAAmB;EACrB;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,sBAAsB;IACtB,kCAAkC;IAClC,SAAS;IACT,iCAAiC;IACjC,sBAAsB;EACxB;;EAEA;;;;IAIE,eAAe;EACjB;;EAEA;IACE,SAAS;IACT,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,QAAQ;EACV;;EAEA;IACE,iBAAiB;IACjB,iBAAiB;EACnB;;EAEA;IACE,gBAAgB;IAChB,SAAS;IACT,gBAAgB;;IAEhB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;EACrB;;EAEA;IACE,WAAW;IACX,YAAY;;IAEZ,eAAe;IACf,yBAAyB;EAC3B;;EAEA;;IAEE,SAAS;EACX;;;EAGA;IACE,2BAA2B;IAC3B,iCAAiC;IACjC,iCAAiC;IACjC,mBAAmB;EACrB;;;EAGA;IACE,aAAa;IACb,sBAAsB;IACtB,mBAAmB;;IAEnB,sBAAsB;IACtB,uBAAuB;;IAEvB,iBAAiB;IACjB,SAAS;EACX;;EAEA;IACE,YAAY;IACZ,UAAU;;IAEV,eAAe;IACf,uBAAuB;IACvB,uCAAuC;IACvC,sBAAsB;IACtB,iCAAiC;IACjC,mBAAmB;IACnB,eAAe;EACjB;;EAEA;IACE,eAAe;IACf,YAAY;IACZ,UAAU;;IAEV,sBAAsB;EACxB;;EAEA;IACE,eAAe;IACf,UAAU;IACV,sBAAsB;EACxB;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,uCAAuC;EACzC;;EAEA;IACE,sBAAsB;IACtB,kCAAkC;IAClC,eAAe;EACjB;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,iBAAiB;IACjB,sBAAsB;;EAExB;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,kBAAkB;;IAElB,UAAU;IACV,SAAS;IACT,aAAa;IACb,6CAA6C;IAC7C,4BAA4B;EAC9B;;EAEA;IACE,gBAAgB;IAChB,kBAAkB;EACpB;;EAEA;IACE,iBAAiB;IACjB,sBAAsB;EACxB;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,8CAA8C;IAC9C,eAAe;EACjB;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,iBAAiB;IACjB,oBAAoB;;IAEpB,uCAAuC;EACzC;;;EAGA;IACE,iBAAiB;IACjB,iBAAiB;EACnB;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,kBAAkB;;IAElB,QAAQ;EACV;;EAEA;IACE,iBAAiB;EACnB","sourcesContent":[":root {\n    --main-clr: #EEEDEB;\n    --secondaray-clr: #E0CCBE;\n    --tertairy-clr: #747264;\n    --last-clr: #3C3633;\n  }\n  \n  body {\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    font-family: \"Poppins\", sans-serif;\n    margin: 0;\n    background-color: var(--main-clr);\n    color: var(--last-clr);\n  }\n  \n  .addTask,\n  .addProject,\n  .task,\n  span {\n    cursor: pointer;\n  }\n  \n  ul {\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n  }\n  \n  span {\n    margin-right: 4px;\n    font-size: 1.5rem;\n  }\n  \n  li {\n    margin: 0.5rem 0;\n    gap: 1rem;\n    list-style: none;\n  \n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n  \n  svg {\n    width: 24px;\n    height: 24px;\n  \n    cursor: pointer;\n    fill: var(--tertairy-clr);\n  }\n  \n  h3,\n  p {\n    margin: 0;\n  }\n  \n  \n  dialog {\n    margin: 5rem auto auto auto;\n    border: 2px solid var(--last-clr);\n    background-color: var(--main-clr);\n    border-radius: 36px;\n  }\n  \n  \n  form {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  \n    color: var(--last-clr);\n    /* font-weight: bold; */\n  \n    font-size: 1.2rem;\n    gap: 12px;\n  }\n  \n  form > button {\n    padding: 8px;\n    width: 30%;\n  \n    font-size: 1rem;\n    /* font-weight: bold; */\n    background-color: var(--secondaray-clr);\n    color: var(--main-clr);\n    border: 1px solid var(--last-clr);\n    border-radius: 36px;\n    cursor: pointer;\n  }\n  \n  textarea {\n    padding: 0.5rem;\n    resize: none;\n    width: 80%;\n  \n    color: var(--last-clr);\n  }\n  \n  form > input {\n    padding: 0.5rem;\n    width: 80%;\n    color: var(--last-clr);\n  }\n  \n  select {\n    padding: 4px;\n  }\n  \n  header {\n    background-color: var(--secondaray-clr);\n  }\n  \n  header > h3 {\n    color: var(--last-clr);\n    padding: 1.5rem 1.5rem 1.5rem 1rem;\n    font-size: 2rem;\n  }\n  \n  .container {\n    display: flex;\n  }\n  \n  .addProject {\n    font-size: 1.3rem;\n    /* font-weight: 500; */\n  \n  }\n  \n  .projectsContainer {\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n    \n    width: 20%;\n    gap: 1rem;\n    height: 100vh;\n    border-right: 4px solid var(--secondaray-clr);\n    padding: 1rem 5rem 1rem 1rem;\n  }\n  \n  .tasksContainer {\n    flex-basis: 100%;\n    padding: 5rem 5rem;\n  }\n  \n  .addTask {\n    font-size: 1.3rem;\n    /* font-weight: 500; */\n  }\n  \n  .task {\n    display: flex;\n    align-items: center;\n    margin-bottom: 1rem;\n    border-bottom: 1px solid var(--secondaray-clr);\n    padding: 1rem 0;\n  }\n  \n  .tasks {\n    margin: 2rem 0;\n  }\n  \n  .checkBox {\n    margin: 0 4px 0 0;\n    border-radius: 100px;\n    \n    background-color: var(--secondaray-clr);\n  }\n  \n  \n  .editTask {\n    margin-left: auto;\n    margin-right: 8px;\n  }\n  \n  .taskDetails {\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n  \n    gap: 8px;\n  }\n  \n  .closeModal {\n    margin-left: auto;\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/createTodo.js":
/*!***************************!*\
  !*** ./src/createTodo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTodo)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");




function createTodo() {
  // Dynamically create the form
  (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.createForm)();

  const addTaskForm = document.querySelector("form");
  const modal = document.querySelector("dialog");
  const taskContainer = document.querySelector('.tasks');


  // Open the form's modal
  (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.openModal)(modal);


  // Add Event Listener to form upon submit
  addTaskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    // Save the form input from user and store in variables
    const elements = addTaskForm.elements;
    
    const taskTitle = elements.taskTitle.value;
    const taskDescription = elements.taskDescription.value;
    const taskDueDate = elements.taskDueDate.value;
    const taskPriority = parseInt(elements.taskPriority.value);

    // Create task based on user input
    const newTask = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(taskTitle, taskDescription, taskDueDate, taskPriority, _dom_js__WEBPACK_IMPORTED_MODULE_1__.taskCounter.getCount());

    (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.createTask)(taskContainer, newTask, newTask.getTaskNumber());

    _dom_js__WEBPACK_IMPORTED_MODULE_1__.taskCounter.increaseCount();

    // Add the newly create task to its corresponding project
    _projects_js__WEBPACK_IMPORTED_MODULE_2__.projectsFactory.addTaskToProject(_projects_js__WEBPACK_IMPORTED_MODULE_2__.projectsFactory.getProjectNumber(), _projects_js__WEBPACK_IMPORTED_MODULE_2__.projectsFactory.getCurrentProjectName(), newTask);

    // Close form
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.closeModal)(modal);
  
    // Remove the Form 
    addTaskForm.remove();
    modal.remove();
  });
}

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTaskButton: () => (/* binding */ addTaskButton),
/* harmony export */   closeModal: () => (/* binding */ closeModal),
/* harmony export */   createAddProjectForm: () => (/* binding */ createAddProjectForm),
/* harmony export */   createForm: () => (/* binding */ createForm),
/* harmony export */   createTask: () => (/* binding */ createTask),
/* harmony export */   displayProjects: () => (/* binding */ displayProjects),
/* harmony export */   editTaskDom: () => (/* binding */ editTaskDom),
/* harmony export */   openModal: () => (/* binding */ openModal),
/* harmony export */   taskCounter: () => (/* binding */ taskCounter),
/* harmony export */   tasksDom: () => (/* binding */ tasksDom)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _editTodo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editTodo.js */ "./src/editTodo.js");
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");
/* harmony import */ var _createTodo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createTodo.js */ "./src/createTodo.js");







function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

function createForm() {
  const form = document.createElement("form");
  const modal = document.createElement("dialog");

  // Add a close button to close modal
  const closeBtn = document.createElement("a");
  const closeSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const closePath = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  );
  const svgTitle = document.createElement('title');
  svgTitle.textContent = "close-circle-outline";
  closeSvg.setAttribute('viewBox', '0 0 24 24');
  closePath.setAttribute('d', "M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M14.59,8L12,10.59L9.41,8L8,9.41L10.59,12L8,14.59L9.41,16L12,13.41L14.59,16L16,14.59L13.41,12L16,9.41L14.59,8Z")
  closeSvg.appendChild(svgTitle);
  closeSvg.appendChild(closePath);
  closeBtn.appendChild(closeSvg);

  closeBtn.classList.add("closeModal");
  modal.setAttribute('data-modal', "");
  closeBtn.addEventListener('click', () => {
    closeModal(modal);
    modal.remove();
    form.remove();
  });
  form.appendChild(closeBtn);

  // Create input for task title
  const titleAttributes = {
    'type': 'text',
    'id': 'taskTitle',
    'name': 'taskTitle',
    'required': ''
  }
  const titleLabel = document.createElement("label");
  titleLabel.setAttribute("for", "taskTitle");
  titleLabel.textContent = "Title";

  const titleInput = document.createElement("input");
  setAttributes(titleInput, titleAttributes);
  form.appendChild(titleLabel);
  form.appendChild(titleInput);

  // Create input for task description
  const descriptionAttributes = {
    'id': 'taskDescription',
    'name': 'taskDescription',
    'rows': 10,
    'cols': 50
  }
  const descriptionLabel = document.createElement("label");
  descriptionLabel.setAttribute("for", "taskDescription");
  descriptionLabel.textContent = "Description";

  const descriptionInput = document.createElement("textArea");
  setAttributes(descriptionInput, descriptionAttributes);
  form.appendChild(descriptionLabel);
  form.appendChild(descriptionInput);

  // Create input for task due date
  const dueDateAttributes = {
    'type': 'datetime-local',
    'id': 'taskDueDate',
    'name': 'taskDueDate',
  }
  const dueDateLabel = document.createElement("label");
  dueDateLabel.setAttribute("for", "taskDueDate");
  dueDateLabel.textContent = "Due Date";

  const dueDateInput = document.createElement("input");
  setAttributes(dueDateInput, dueDateAttributes);
  form.appendChild(dueDateLabel);
  form.appendChild(dueDateInput);

  // Create input for task priority
  const priorities = ["None", "Low", "Medium", "High"];

  const selectPriorityLabel = document.createElement('label');
  selectPriorityLabel.setAttribute('for', 'taskPriority');
  selectPriorityLabel.textContent = "Priority";

  const selectPriority = document.createElement('select');
  const selectPriorityAttributes = {'id': 'taskPriority', 'name': 'taskPriority'};
  setAttributes(selectPriority, selectPriorityAttributes);

  for (let i = 0; i < priorities.length; i++) {
    const priorityOptions = document.createElement("option");
    priorityOptions.setAttribute("value", i);
    priorityOptions.textContent = priorities[i];
    selectPriority.appendChild(priorityOptions);
  }
  form.appendChild(selectPriorityLabel);
  form.appendChild(selectPriority); 

  // Create submit button
  const submitBtn = document.createElement("button");
  submitBtn.setAttribute("type", "submit")
  submitBtn.textContent = "Submit";
  form.appendChild(submitBtn);

  form.action = "#";

  modal.appendChild(form);
  document.body.appendChild(modal);
} 

function createAddProjectForm() {
  const form = document.createElement("form");
  const modal = document.createElement("dialog");

  // Add a close button to close modal
  const closeBtn = document.createElement("a");
  const closeSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const closePath = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  );
  const svgTitle = document.createElement('title');
  svgTitle.textContent = "close-circle-outline";
  closeSvg.setAttribute('viewBox', '0 0 24 24');
  closePath.setAttribute('d', "M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M14.59,8L12,10.59L9.41,8L8,9.41L10.59,12L8,14.59L9.41,16L12,13.41L14.59,16L16,14.59L13.41,12L16,9.41L14.59,8Z")
  closeSvg.appendChild(svgTitle);
  closeSvg.appendChild(closePath);
  closeBtn.appendChild(closeSvg);

  closeBtn.classList.add("closeModal");
  modal.setAttribute('data-modal', "");
  closeBtn.addEventListener('click', () => {
    closeModal(modal);
    modal.remove();
    form.remove();
  });
  form.appendChild(closeBtn);

  modal.setAttribute('data-modal', '');
  form.setAttribute('action', '#');
  modal.appendChild(form);

  // Create form label for project name
  const projectName = document.createElement("label");
  projectName.textContent = "Project Name";
  projectName.setAttribute("name", "projectName");

  const projectNameInput = document.createElement('input');
  const projectNameAttributes = {
    // Create form input
    'name': 'projectName',
    'id': 'projectName',
    'required': ''
  };

  const submitBtn = document.createElement("button");
  submitBtn.textContent = "Submit";
  submitBtn.setAttribute("type", "submit");

  form.appendChild(projectName);
  form.appendChild(projectNameInput);
  form.appendChild(submitBtn);
  
  setAttributes(projectNameInput, projectNameAttributes);

  document.body.appendChild(modal);
}

function openModal(modal) {
  modal.showModal();
}

function closeModal(modal) {
  modal.close();
}

const taskCounter = (() => {
  let count = 0;

  function getCount() {
    return count;
  }

  function increaseCount() {
    count++;
    (0,_storage_js__WEBPACK_IMPORTED_MODULE_3__.storeToLocalStorage)("taskCounter", {count: count})
  }

  function resetCount() {
    count = 0;
  }

  function updateCount(newCount) {
    count = newCount
  }

  return { updateCount, getCount, increaseCount, resetCount }
})()

const tasksDom = (() => {
  let tasks = {
    "taskInDisplay": [],
  };

  function pushToTaskDom(task) {
    tasks["taskInDisplay"].push(task);
    getTasksDomArr()
    ;(0,_storage_js__WEBPACK_IMPORTED_MODULE_3__.storeToLocalStorage)("tasksDom", tasks);
  }

  function resetTasks() {
    tasks = {
      "taskInDisplay": [],
    };
  }

  function getTasksDomArr() {
    return tasks;
  }

  function editTask(taskNumber, newTask) {
    tasks["taskInDisplay"].forEach(task => {
      if (task.taskNumber === parseInt(taskNumber)) {
        const index = tasks["taskInDisplay"].indexOf(task);
        tasks["taskInDisplay"].splice(index, 1);
        tasks["taskInDisplay"].splice(index, 0, newTask);
      }
    })
    localStorage.removeItem("tasksDom");
    localStorage.setItem("tasksDom", JSON.stringify(tasks));
  }

  function deleteTask(taskNumber) { 
    tasks["taskInDisplay"].forEach(task => {
      if (task.taskNumber === parseInt(taskNumber)) {
        const index = tasks["taskInDisplay"].indexOf(task);
        tasks["taskInDisplay"].splice(index, 1);
      }
    })
    localStorage.removeItem("tasksDom");
    localStorage.setItem("tasksDom", JSON.stringify(tasks));
  }

  return { pushToTaskDom, resetTasks, getTasksDomArr, deleteTask, editTask }
})()

function createTask(container, task, taskNumber) {
  const taskContainer = document.createElement("div");
  const taskDetails = document.createElement("div");
  taskDetails.classList.add(`taskDetails${taskNumber}`);
  taskDetails.classList.add('taskDetails');
  taskContainer.classList.add("task");
  taskContainer.dataset.taskNumber = taskNumber;
 
  
  const checkButton = document.createElement('input');
  checkButton.classList.add('checkBox');
  checkButton.type = "checkbox";
  taskContainer.appendChild(checkButton);

  checkButton.addEventListener('click', () => {
    setTimeout(() => {
      deleteTaskFromObject(_projects_js__WEBPACK_IMPORTED_MODULE_2__.projectsFactory.getProjects(), _projects_js__WEBPACK_IMPORTED_MODULE_2__.projectsFactory.getCurrentProjectName(), deleteBtn.dataset.deleteBtnNumber);
      taskContainer.remove();
    }, 1000);
  })

  const taskTitleDom = document.createElement("h3");
  taskTitleDom.classList.add(`taskTitle${taskNumber}`);
  taskTitleDom.textContent = task.title;
  taskDetails.appendChild(taskTitleDom);
  
  if (task.description !== "") {
    const taskDescriptionDom = document.createElement("p");
    taskDescriptionDom.classList.add(`taskDescription${taskNumber}`);
    taskDescriptionDom.textContent = task.description;
    taskDetails.appendChild(taskDescriptionDom);
  }
  
  if (task.dueDate !== "") {
    const taskDueDateDom = document.createElement("p");
    taskDueDateDom.classList.add(`taskDueDate${taskNumber}`);
    taskDueDateDom.textContent = `Due on ${format(task.dueDate, "PPPPpppp")}`;
    taskDetails.appendChild(taskDueDateDom);
  }

  taskContainer.appendChild(taskDetails);

  // add an edit button for a task
  const editBtn = document.createElement('a');
  const editSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const editPath = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  );
  const svgTitle = document.createElement('title');
  svgTitle.textContent = "pencil";
  editSvg.setAttribute('viewBox', '0 0 24 24');
  editPath.setAttribute('d', "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z")
  editSvg.appendChild(svgTitle);
  editSvg.appendChild(editPath);
  editBtn.appendChild(editSvg);
  editBtn.classList.add("editTask");

  taskContainer.appendChild(editBtn);

  // add a delete button for a task
  const deleteBtn = document.createElement('a');
  deleteBtn.classList.add("deleteTask");
  deleteBtn.dataset.deleteBtnNumber = taskNumber;
  const deleteSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const deletePath = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  );
  const deleteSvgTitle = document.createElement('title');
  deleteSvgTitle.textContent = "delete";
  deleteSvg.setAttribute('viewBox', '0 0 24 24');
  deletePath.setAttribute('d', "M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" )
  deleteSvg.appendChild(svgTitle);
  deleteSvg.appendChild(deletePath);
  deleteBtn.appendChild(deleteSvg);

  // delete corresponding task from dom and object when clicked
  deleteBtn.addEventListener('click', () => {
    deleteTaskFromObject(_projects_js__WEBPACK_IMPORTED_MODULE_2__.projectsFactory.getProjects(), _projects_js__WEBPACK_IMPORTED_MODULE_2__.projectsFactory.getCurrentProjectName(), deleteBtn.dataset.deleteBtnNumber);
    taskContainer.remove();
  })
  taskContainer.appendChild(deleteBtn);
  container.appendChild(taskContainer);
  (0,_editTodo_js__WEBPACK_IMPORTED_MODULE_1__["default"])(editBtn, taskNumber); 
  tasksDom.pushToTaskDom(task);
}

function editTaskDom(taskToEdit, taskToEditDiv, taskNumber, task) {
  const taskTitleDom = document.querySelector(`.taskTitle${taskNumber}`);
  taskTitleDom.textContent = task.title;

  if (task.description !== "") {
    const taskDescriptionDom = document.querySelector(`.taskDescription${taskNumber}`);
    if (taskDescriptionDom === null) {
      const newTaskDescriptionDom = document.createElement("p");
      newTaskDescriptionDom.classList.add(`taskDescription${taskNumber}`)
      newTaskDescriptionDom.textContent = task.description;
      taskToEditDiv.appendChild(newTaskDescriptionDom);
    } else {
      taskDescriptionDom.textContent = task.description;
    }
  } else {
    const taskDescriptionDom = document.querySelector(`.taskDescription${taskNumber}`);
    if (taskDescriptionDom !== null) {
      taskDescriptionDom.remove();
    }
  }

  if (task.dueDate !== "") {
    const taskDueDateDom = document.querySelector(`.taskDueDate${taskNumber}`);
    if (taskDueDateDom === null) {
      const newTaskDueDateDom = document.createElement("p");
      newTaskDueDateDom.classList.add(`taskDueDate${taskNumber}`);
      newTaskDueDateDom.textContent = `Due on ${format(task.dueDate, "PPPPpppp")}`;
      taskToEditDiv.appendChild(newTaskDueDateDom);
    } else {
      taskDueDateDom.textContent = `Due on ${format(task.dueDate, "PPPPpppp")}`;
    }
  } else {
    const taskDueDateDom = document.querySelector(`.taskDueDate${taskNumber}`);
    if (taskDueDateDom !== null) {
      taskDueDateDom.remove();
    }
  }
  console.log(_projects_js__WEBPACK_IMPORTED_MODULE_2__.projectsFactory.getProjects())

  editTaskObject(_projects_js__WEBPACK_IMPORTED_MODULE_2__.projectsFactory.getProjects(), _projects_js__WEBPACK_IMPORTED_MODULE_2__.projectsFactory.getCurrentProjectName(), taskNumber, task)
}

// let bucket = 0
function displayProjects(bucket, projectTitleName) {
  const projectContainer = document.querySelector("ul");
  const project = document.createElement("li");

  const projectTitleHolder = document.createElement("span");

  projectTitleHolder.textContent = projectTitleName;
  project.setAttribute('data-project-number', bucket);
  project.appendChild(projectTitleHolder);
  projectContainer.appendChild(project);

  const deleteBtn = document.createElement('a');
  const deleteSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const deletePath = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  );
  const svgTitle = document.createElement('title');
  svgTitle.textContent = "delete";
  deleteSvg.setAttribute('viewBox', '0 0 24 24');
  deletePath.setAttribute('d', "M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" )
  deleteSvg.appendChild(svgTitle);
  deleteSvg.appendChild(deletePath);
  deleteBtn.appendChild(deleteSvg);

  deleteBtn.classList.add("deleteProject");
  deleteBtn.dataset.deleteBtnNumber = bucket;
  project.appendChild(deleteBtn);

  // delete corresponding task from dom and object when clicked
  deleteBtn.addEventListener('click', () => {
      Object.keys(_projects_js__WEBPACK_IMPORTED_MODULE_2__.projectsFactory.getProjects()).forEach(projects => {
        if (projects === deleteBtn.getAttribute('data-delete-btn-number')) {
          delete _projects_js__WEBPACK_IMPORTED_MODULE_2__.projectsFactory.getProjects()[projects];
          (0,_storage_js__WEBPACK_IMPORTED_MODULE_3__.deleteProjectProperty)(deleteBtn.getAttribute('data-delete-btn-number'))
          console.log(_projects_js__WEBPACK_IMPORTED_MODULE_2__.projectsFactory.getProjectNumber());
          // delete tasks in dom if tasks in display is from project to be deleted
          if (parseInt(_projects_js__WEBPACK_IMPORTED_MODULE_2__.projectsFactory.getProjectNumber()) === parseInt(deleteBtn.getAttribute('data-delete-btn-number'))) {
            const tasks = document.querySelectorAll('.task');
            const addTaskBtn = document.querySelector('.addTask');
            (0,_storage_js__WEBPACK_IMPORTED_MODULE_3__.resetTasksDomContent)();
            [...tasks].forEach(task => {
              task.remove();
            })
            localStorage.removeItem("tasksDom");
            addTaskBtn.remove();
          }
          project.remove();
        } 
      })
    })
  _projects_js__WEBPACK_IMPORTED_MODULE_2__.projectsFactory.setProjectNumber(project, projectTitleName, projectTitleHolder);
}

function editTaskObject(object, projectName, taskNumber, newTask) {
  let keysArr = Object.keys(object);

  keysArr.forEach(keys => {
    Object.keys(object[keys]).forEach(key => {
      if (projectName === key) {
        object[keys][key].forEach(task => {
          if (task.taskNumber === parseInt(taskNumber)) {
            const index = object[keys][key].indexOf(task);
            object[keys][key].splice(index, 1);
            object[keys][key].splice(index, 0, newTask);
          }
        })
      }
    })
  })
  localStorage.removeItem("projects");
  localStorage.setItem("projects", JSON.stringify(object));
  tasksDom.editTask(taskNumber, newTask);
}

// algorithm to delete a specific element from the array values of each object properties
function deleteTaskFromObject(object, projectName, deleteBtnNumber) {   
  let keysArr = Object.keys(object);
  keysArr.forEach(keys => {
    Object.keys(object[keys]).forEach(key => {
      if (projectName === key) {
        object[keys][key].forEach(task => {
          if (task.taskNumber === parseInt(deleteBtnNumber)) {
            const index = object[keys][key].indexOf(task);
            object[keys][key].splice(index, 1);
          }
        })
      }
    })
  })
  localStorage.removeItem("projects");
  localStorage.setItem("projects", JSON.stringify(object));
  tasksDom.deleteTask(deleteBtnNumber);
}

function addTaskButton() {
  const addTaskBtnNew = document.createElement('a');
  const tasksContainer = document.querySelector(".tasksContainer");
  addTaskBtnNew.addEventListener("click", _createTodo_js__WEBPACK_IMPORTED_MODULE_4__["default"]);  
  addTaskBtnNew.textContent = "Add Task";
  addTaskBtnNew.classList.add('addTask');
  tasksContainer.appendChild(addTaskBtnNew);
}



/***/ }),

/***/ "./src/editTodo.js":
/*!*************************!*\
  !*** ./src/editTodo.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ editTask)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");




function editTask(taskEditBtn, taskNumber) {
  // add event listener to the taskEditBtn to open the form
  if (!taskEditBtn.dataset.listenerAdded) {
    taskEditBtn.addEventListener('click', () => {
      // create and open the form
      (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.createForm)();
    
      const editTaskForm = document.querySelector('form');
      const modal = document.querySelector('dialog');
      const taskToEdit = document.querySelector(`[data-task-number="${String(taskNumber)}"]`);
      const taskToEditDiv = document.querySelector(`.taskDetails${taskNumber}`);
      console.log(taskToEditDiv);
      (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.openModal)(modal);

      // add event listener to form upon submit
      editTaskForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // get the values that user inputs
        const elements = editTaskForm.elements;

        const taskTitle = elements.taskTitle.value;
        const taskDescription = elements.taskDescription.value;
        const taskDueDate = elements.taskDueDate.value;
        const taskPriority = parseInt(elements.taskPriority.value);

        // edit the taskEditBtn's details
        const newTask = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(taskTitle, taskDescription, taskDueDate, taskPriority, taskNumber);

        // remove the form and modal
        editTaskForm.remove();
        modal.remove();

        (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.editTaskDom)(taskToEdit, taskToEditDiv, taskNumber, newTask);

        _dom_js__WEBPACK_IMPORTED_MODULE_0__.taskCounter.increaseCount();
      })
    })
  }
  taskEditBtn.dataset.listenerAdded = true;
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ task)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _createTodo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTodo.js */ "./src/createTodo.js");
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");






function task(title, description, dueDate, priority, taskNumber) {
  let newTitle = "";
  
  if (priority === 3) {
    newTitle += `!!! ${title}` // High
  } else if (priority === 2) {  
    newTitle += `!! ${title}` // Medium Priority
  } else if (priority === 1 ) {
    newTitle += `! ${title}` // Low Priority
  } else {
    return { title, description, dueDate, priority, taskNumber, getTaskNumber }
  }
  title = newTitle;

  function getTaskNumber() {
    return taskNumber
  }

  return { title, description, dueDate, priority, taskNumber, getTaskNumber }
}

document.addEventListener('DOMContentLoaded', () => { 
  if (localStorage.getItem("currentProjName")) {
    _projects_js__WEBPACK_IMPORTED_MODULE_2__.projectsFactory.updateCurrentProjectName(JSON.parse(localStorage.getItem("currentProjName")).name)
  }

  if (localStorage.getItem("totalProjectsTracker")) {
    _projects_js__WEBPACK_IMPORTED_MODULE_2__.projectsFactory.updateProjectCounter(JSON.parse(localStorage.getItem("totalProjectsTracker")).total);
  }

  if (localStorage.getItem("taskCounter")) {
    _dom_js__WEBPACK_IMPORTED_MODULE_4__.taskCounter.updateCount(JSON.parse(localStorage.getItem("taskCounter")).count)
  }
  
  // render projects if it exists in local storage
  if (localStorage.getItem("projects")) {
    let counterProj = JSON.parse(localStorage.getItem("projects"));
    if (counterProj.currentProjNumberTracker) {
      _projects_js__WEBPACK_IMPORTED_MODULE_2__.projectsFactory.updateProjectNumber(JSON.parse(localStorage.getItem("projects")).currentProjNumberTracker);
    } 

    if (Object.keys(JSON.parse(localStorage.getItem("projects"))).length !== 1) {
      (0,_dom_js__WEBPACK_IMPORTED_MODULE_4__.addTaskButton)();
      let newProjects = JSON.parse(localStorage.getItem("projects"));
      _projects_js__WEBPACK_IMPORTED_MODULE_2__.projectsFactory.updateProjects(newProjects);
      (0,_storage_js__WEBPACK_IMPORTED_MODULE_3__.renderStoredProjectsContent)();

    }
  } else {
      (0,_dom_js__WEBPACK_IMPORTED_MODULE_4__.addTaskButton)();
      (0,_dom_js__WEBPACK_IMPORTED_MODULE_4__.displayProjects)(_projects_js__WEBPACK_IMPORTED_MODULE_2__.projectsFactory.getProjectNumber(), "My Day");
      _projects_js__WEBPACK_IMPORTED_MODULE_2__.projectsFactory.projectCounterIncrease();
      (0,_storage_js__WEBPACK_IMPORTED_MODULE_3__.storeToLocalStorage)("projects", _projects_js__WEBPACK_IMPORTED_MODULE_2__.projectsFactory.getProjects());
  }

  // load the tasks in display if it exists in local storage
  if (localStorage.getItem("tasksDom")) {
    (0,_storage_js__WEBPACK_IMPORTED_MODULE_3__.renderStoredTaskContent)();
  }

  const addProjBtn = document.querySelector('.addProject');
  addProjBtn.addEventListener('click', _projects_js__WEBPACK_IMPORTED_MODULE_2__.createProject);
})

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   projectsFactory: () => (/* binding */ projectsFactory)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _createTodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTodo */ "./src/createTodo.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ "./src/storage.js");




// Create a projects factory
const projectsFactory = (() => {
  let projectCount = 0;

  let projects = {
    "0": {"My Day": []},
    "currentProjNumberTracker": 0,
  };

  
  let projectNumber = "0";
  

  let currentProjName = "My Day";
  
  function addTaskToProject(projectNum, projectName, task) {
    console.log(projectName);
    if (projectNum) {
      projects[projectNum][projectName].push(task);
      (0,_storage__WEBPACK_IMPORTED_MODULE_2__.addNewTaskLocalStorage)(projectNum, projectName, task);
    }
  }
  
  function addProject(projectNum, projectName) {
    console.log(projectNum);
    projects[projectNum] = {[projectName]: []};
    (0,_storage__WEBPACK_IMPORTED_MODULE_2__.storeToLocalStorage)("projects", projects);
  }

  function updateCurrentProjectName(newName) {
    currentProjName = newName;
  }

  // when a user clicks on a project, update the current project number
  // and also update the display of tasks matching that specific project's 
  //tasks
  function setProjectNumber(project, projectTitleName, projectClickHolder) {
    projectClickHolder.addEventListener('click', () => {
      projectNumber = project.getAttribute('data-project-number');
      currentProjName = projectTitleName;
      (0,_storage__WEBPACK_IMPORTED_MODULE_2__.storeToLocalStorage)("currentProjName", {name: projectTitleName})

      projects.currentProjNumberTracker = parseInt(projectNumber);
      localStorage.removeItem("projects");
      localStorage.setItem("projects", JSON.stringify(projects));
      // remove the current tasks 
      const tasks = document.querySelectorAll('.task');
      const tasksContainer = document.querySelector('.tasks');
      const addTaskBtn = document.querySelector('.addTask');
      
      
      (0,_storage__WEBPACK_IMPORTED_MODULE_2__.resetTasksDomContent)();
      
      _dom__WEBPACK_IMPORTED_MODULE_0__.tasksDom.resetTasks();
      [...tasks].forEach(task => {
        task.remove();
      })
      
      console.log(projects);
      projects[projectNumber][projectTitleName].forEach(task => {
        (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createTask)(tasksContainer, task, task.taskNumber);
      })

      if (addTaskBtn === null) {
        (0,_dom__WEBPACK_IMPORTED_MODULE_0__.addTaskButton)();
      }
    })
  }

  function getProjectNumber() {
    return projectNumber;
  }

  function getProjects() {
    return projects;
  }

  function getProjectCount() {
    return projectCount;
  }
  function updateProjectNumber(newNum) {
    projectNumber = newNum;
  }

  function projectCounterIncrease() {
    projectCount++;
    (0,_storage__WEBPACK_IMPORTED_MODULE_2__.storeToLocalStorage)("totalProjectsTracker", {total: projectCount});
  }

  function updateProjectCounter(num) {
    projectCount = num;
  }

  function getCurrentProjectName() {
    return currentProjName;
  }

  function updateProjects(newProj) {
    projects = newProj;
  }

  return { updateProjectCounter, updateCurrentProjectName, updateProjectNumber,  getCurrentProjectName, updateProjects, addTaskToProject, addProject, getProjects, getProjectCount, projectCounterIncrease, setProjectNumber, getProjectNumber }; 
})()

// Make a function to add a project
function createProject() {
  ;(0,_dom__WEBPACK_IMPORTED_MODULE_0__.createAddProjectForm)();
  const form = document.querySelector('form');
  const modal = document.querySelector('dialog');

  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.openModal)(modal);

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formElements = form.elements;

    const projectTitleName = formElements.projectName.value;

    // create and append the project to the container;
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.displayProjects)(projectsFactory.getProjectCount(), projectTitleName);

    // Add newly created object to the projects object in the project factory
    projectsFactory.addProject(String(projectsFactory.getProjectCount()), projectTitleName);

    projectsFactory.projectCounterIncrease();
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.closeModal)(modal);
    form.remove();
    modal.remove();
  });
}

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addNewProjectLocalStorage: () => (/* binding */ addNewProjectLocalStorage),
/* harmony export */   addNewTaskLocalStorage: () => (/* binding */ addNewTaskLocalStorage),
/* harmony export */   deleteProjectProperty: () => (/* binding */ deleteProjectProperty),
/* harmony export */   renderStoredProjectsContent: () => (/* binding */ renderStoredProjectsContent),
/* harmony export */   renderStoredTaskContent: () => (/* binding */ renderStoredTaskContent),
/* harmony export */   resetTasksDomContent: () => (/* binding */ resetTasksDomContent),
/* harmony export */   storeToLocalStorage: () => (/* binding */ storeToLocalStorage)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");



// function to save  to local storage after new project is made
function storeToLocalStorage(propertyName, object) {
  const serialized = JSON.stringify(object);
  localStorage.setItem(propertyName, serialized);
}

function addNewProjectLocalStorage(projectNum, projectObj) {
  let deserialized = JSON.parse(projectObj);
  deserialized[projectNum] = [];
  
  localStorage.removeItem(projectObj)
  const serialized = JSON.stringify(deserialized);
  localStorage.setItem("projects", serialized)
} 

// save task to local storage after new task is made
function addNewTaskLocalStorage(projectNumber, projectName, task) {
  // get the projects obj in local storage
  const obj = localStorage.getItem("projects");

  if (obj === null) {
    let projects = {
      "0": {"My Day": []}
    }
    let projectsStringified = JSON.stringify(projects);
    localStorage.setItem("projects", projectsStringified);
  }

  const newObj = localStorage.getItem("projects");
  const newObjParsed = JSON.parse(newObj);

  // convert to object in js and add task
  newObjParsed[projectNumber][projectName].push(task); 

  // convert back to string and put it back in local storage
  const serialized = JSON.stringify(newObjParsed);
  localStorage.removeItem(newObj);
  localStorage.setItem("projects", serialized);
}

function deleteProjectProperty(projectNumber) {
  let obj = localStorage.getItem("projects");

  let deserialized = JSON.parse(obj);

  console.log(_projects__WEBPACK_IMPORTED_MODULE_1__.projectsFactory.getProjectNumber());

  if (deserialized) {
    Object.keys(deserialized).forEach(projects => {
      if (projects === projectNumber) {
        delete deserialized[projectNumber];
      }
    })
  }
    
  let serialized = JSON.stringify(deserialized);

  localStorage.removeItem(obj);

  localStorage.setItem("projects", serialized);
}

function renderStoredTaskContent() {
  const tasks = localStorage.getItem("tasksDom");
  const tasksParsed = JSON.parse(tasks);
  const taskContainer = document.querySelector('.tasks');
  
  tasksParsed["taskInDisplay"].forEach(task => {
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createTask)(taskContainer, task, task.taskNumber);
  })
}

function renderStoredProjectsContent() {
  const projects = localStorage.getItem("projects");
  const projectsParsed = JSON.parse(projects);

  const projectsDom = document.querySelectorAll("li");

  [...projectsDom].forEach(project => {
    project.remove();
  })

  Object.keys(projectsParsed).forEach(projectsKey => {
    Object.keys(projectsParsed[projectsKey]).forEach(key => {
      ;(0,_dom__WEBPACK_IMPORTED_MODULE_0__.displayProjects)(projectsKey, key);
    })
  })

}

function resetTasksDomContent() {
  let tasksDom = localStorage.getItem("tasksDom");
  localStorage.removeItem(tasksDom);

  let tasks = {
    "taskInDisplay": [],
  }

  let tasksSerialized = JSON.stringify(tasks);
  localStorage.setItem("tasksDom", tasksSerialized);
}


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLE9BQU8saUZBQWlGLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxRQUFRLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxXQUFXLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxRQUFRLEtBQUssVUFBVSxZQUFZLGNBQWMsYUFBYSxjQUFjLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksY0FBYyxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksY0FBYyxhQUFhLFFBQVEsS0FBSyxZQUFZLGFBQWEsT0FBTyxL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QUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUNxQztBQUNBO0FBQ1c7QUFDc0Y7QUFDN0Y7OztBQUd6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0M7QUFDcEM7O0FBRUEsa0JBQWtCLHVCQUF1QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxnRUFBbUIsaUJBQWlCLGFBQWE7QUFDckQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlFQUFtQjtBQUN2Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsV0FBVztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQix5REFBZSxnQkFBZ0IseURBQWU7QUFDekU7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBLHlDQUF5QyxXQUFXO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsV0FBVztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsV0FBVztBQUMxRCwyQ0FBMkMsaUNBQWlDO0FBQzVFO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIseURBQWUsZ0JBQWdCLHlEQUFlO0FBQ3ZFO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxFQUFFLHdEQUFRO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBLDJEQUEyRCxXQUFXO0FBQ3RFOztBQUVBO0FBQ0EseUVBQXlFLFdBQVc7QUFDcEY7QUFDQTtBQUNBLDREQUE0RCxXQUFXO0FBQ3ZFO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLElBQUk7QUFDSix5RUFBeUUsV0FBVztBQUNwRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlFQUFpRSxXQUFXO0FBQzVFO0FBQ0E7QUFDQSxvREFBb0QsV0FBVztBQUMvRCxnREFBZ0QsaUNBQWlDO0FBQ2pGO0FBQ0EsTUFBTTtBQUNOLDZDQUE2QyxpQ0FBaUM7QUFDOUU7QUFDQSxJQUFJO0FBQ0osaUVBQWlFLFdBQVc7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHlEQUFlOztBQUU3QixpQkFBaUIseURBQWUsZ0JBQWdCLHlEQUFlO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLHlEQUFlO0FBQ2pDO0FBQ0EsaUJBQWlCLHlEQUFlO0FBQ2hDLFVBQVUsa0VBQXFCO0FBQy9CLHNCQUFzQix5REFBZTtBQUNyQztBQUNBLHVCQUF1Qix5REFBZTtBQUN0QztBQUNBO0FBQ0EsWUFBWSxpRUFBb0I7QUFDaEM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTCxFQUFFLHlEQUFlO0FBQ2pCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsc0RBQVU7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6ZTJFO0FBQ3RDO0FBQ1c7O0FBRWpDO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLG1EQUFVO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRSxtQkFBbUI7QUFDekYsa0VBQWtFLFdBQVc7QUFDN0U7QUFDQSxNQUFNLGtEQUFTOztBQUVmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLHFEQUFXOztBQUVuQztBQUNBO0FBQ0E7O0FBRUEsUUFBUSxvREFBVzs7QUFFbkIsUUFBUSxnREFBVztBQUNuQixPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVDc0I7QUFDbUI7QUFDc0I7QUFDdUY7QUFDbEU7O0FBRXJFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLE1BQU07QUFDN0IsSUFBSTtBQUNKLHNCQUFzQixNQUFNO0FBQzVCLElBQUk7QUFDSixxQkFBcUIsTUFBTTtBQUMzQixJQUFJO0FBQ0osYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0EsSUFBSSx5REFBZTtBQUNuQjs7QUFFQTtBQUNBLElBQUkseURBQWU7QUFDbkI7O0FBRUE7QUFDQSxJQUFJLGdEQUFXO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSx5REFBZTtBQUNyQjs7QUFFQTtBQUNBLE1BQU0sc0RBQWE7QUFDbkI7QUFDQSxNQUFNLHlEQUFlO0FBQ3JCLE1BQU0sd0VBQTJCOztBQUVqQztBQUNBLElBQUk7QUFDSixNQUFNLHNEQUFhO0FBQ25CLE1BQU0sd0RBQWUsQ0FBQyx5REFBZTtBQUNyQyxNQUFNLHlEQUFlO0FBQ3JCLE1BQU0sZ0VBQW1CLGFBQWEseURBQWU7QUFDckQ7O0FBRUE7QUFDQTtBQUNBLElBQUksb0VBQXVCO0FBQzNCOztBQUVBO0FBQ0EsdUNBQXVDLHVEQUFhO0FBQ3BELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BFbUo7QUFDOUc7QUFDbUc7O0FBRXpJO0FBQ087QUFDUDs7QUFFQTtBQUNBLFVBQVUsYUFBYTtBQUN2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGdFQUFzQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLElBQUksNkRBQW1CO0FBQ3ZCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sNkRBQW1CLHFCQUFxQix1QkFBdUI7O0FBRXJFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sOERBQW9CO0FBQzFCO0FBQ0EsTUFBTSwwQ0FBUTtBQUNkO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsUUFBUSxnREFBVTtBQUNsQixPQUFPOztBQUVQO0FBQ0EsUUFBUSxtREFBYTtBQUNyQjtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSw2REFBbUIsMEJBQTBCLG9CQUFvQjtBQUNyRTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFRDtBQUNPO0FBQ1AsRUFBRSwyREFBb0I7QUFDdEI7QUFDQTs7QUFFQSxFQUFFLCtDQUFTOztBQUVYO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLHFEQUFlOztBQUVuQjtBQUNBOztBQUVBO0FBQ0EsSUFBSSxnREFBVTtBQUNkO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0SXdGO0FBQzNDOztBQUU3QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLGNBQWMsc0RBQWU7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxnREFBVTtBQUNkLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLE1BQU0sc0RBQWU7QUFDckIsS0FBSztBQUNMLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7VUN2R0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jcmVhdGVUb2RvLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZWRpdFRvZG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICAtLW1haW4tY2xyOiAjRUVFREVCO1xuICAgIC0tc2Vjb25kYXJheS1jbHI6ICNFMENDQkU7XG4gICAgLS10ZXJ0YWlyeS1jbHI6ICM3NDcyNjQ7XG4gICAgLS1sYXN0LWNscjogIzNDMzYzMztcbiAgfVxuICBcbiAgYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICAgIG1hcmdpbjogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNscik7XG4gICAgY29sb3I6IHZhcigtLWxhc3QtY2xyKTtcbiAgfVxuICBcbiAgLmFkZFRhc2ssXG4gIC5hZGRQcm9qZWN0LFxuICAudGFzayxcbiAgc3BhbiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuICB1bCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogOHB4O1xuICB9XG4gIFxuICBzcGFuIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxuICBcbiAgbGkge1xuICAgIG1hcmdpbjogMC41cmVtIDA7XG4gICAgZ2FwOiAxcmVtO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgXG4gIHN2ZyB7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICBcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZmlsbDogdmFyKC0tdGVydGFpcnktY2xyKTtcbiAgfVxuICBcbiAgaDMsXG4gIHAge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICBcbiAgXG4gIGRpYWxvZyB7XG4gICAgbWFyZ2luOiA1cmVtIGF1dG8gYXV0byBhdXRvO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWxhc3QtY2xyKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNscik7XG4gICAgYm9yZGVyLXJhZGl1czogMzZweDtcbiAgfVxuICBcbiAgXG4gIGZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBcbiAgICBjb2xvcjogdmFyKC0tbGFzdC1jbHIpO1xuICAgIC8qIGZvbnQtd2VpZ2h0OiBib2xkOyAqL1xuICBcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBnYXA6IDEycHg7XG4gIH1cbiAgXG4gIGZvcm0gPiBidXR0b24ge1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICB3aWR0aDogMzAlO1xuICBcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgLyogZm9udC13ZWlnaHQ6IGJvbGQ7ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJheS1jbHIpO1xuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNscik7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGFzdC1jbHIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDM2cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuICB0ZXh0YXJlYSB7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIHJlc2l6ZTogbm9uZTtcbiAgICB3aWR0aDogODAlO1xuICBcbiAgICBjb2xvcjogdmFyKC0tbGFzdC1jbHIpO1xuICB9XG4gIFxuICBmb3JtID4gaW5wdXQge1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICB3aWR0aDogODAlO1xuICAgIGNvbG9yOiB2YXIoLS1sYXN0LWNscik7XG4gIH1cbiAgXG4gIHNlbGVjdCB7XG4gICAgcGFkZGluZzogNHB4O1xuICB9XG4gIFxuICBoZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyYXktY2xyKTtcbiAgfVxuICBcbiAgaGVhZGVyID4gaDMge1xuICAgIGNvbG9yOiB2YXIoLS1sYXN0LWNscik7XG4gICAgcGFkZGluZzogMS41cmVtIDEuNXJlbSAxLjVyZW0gMXJlbTtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cbiAgXG4gIC5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgXG4gIC5hZGRQcm9qZWN0IHtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAvKiBmb250LXdlaWdodDogNTAwOyAqL1xuICBcbiAgfVxuICBcbiAgLnByb2plY3RzQ29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICAgIFxuICAgIHdpZHRoOiAyMCU7XG4gICAgZ2FwOiAxcmVtO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgdmFyKC0tc2Vjb25kYXJheS1jbHIpO1xuICAgIHBhZGRpbmc6IDFyZW0gNXJlbSAxcmVtIDFyZW07XG4gIH1cbiAgXG4gIC50YXNrc0NvbnRhaW5lciB7XG4gICAgZmxleC1iYXNpczogMTAwJTtcbiAgICBwYWRkaW5nOiA1cmVtIDVyZW07XG4gIH1cbiAgXG4gIC5hZGRUYXNrIHtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAvKiBmb250LXdlaWdodDogNTAwOyAqL1xuICB9XG4gIFxuICAudGFzayB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyYXktY2xyKTtcbiAgICBwYWRkaW5nOiAxcmVtIDA7XG4gIH1cbiAgXG4gIC50YXNrcyB7XG4gICAgbWFyZ2luOiAycmVtIDA7XG4gIH1cbiAgXG4gIC5jaGVja0JveCB7XG4gICAgbWFyZ2luOiAwIDRweCAwIDA7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJheS1jbHIpO1xuICB9XG4gIFxuICBcbiAgLmVkaXRUYXNrIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgfVxuICBcbiAgLnRhc2tEZXRhaWxzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICBcbiAgICBnYXA6IDhweDtcbiAgfVxuICBcbiAgLmNsb3NlTW9kYWwge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICB9YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLGtDQUFrQztJQUNsQyxTQUFTO0lBQ1QsaUNBQWlDO0lBQ2pDLHNCQUFzQjtFQUN4Qjs7RUFFQTs7OztJQUlFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxTQUFTO0lBQ1QsVUFBVTtJQUNWLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtFQUNWOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsZ0JBQWdCOztJQUVoQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZOztJQUVaLGVBQWU7SUFDZix5QkFBeUI7RUFDM0I7O0VBRUE7O0lBRUUsU0FBUztFQUNYOzs7RUFHQTtJQUNFLDJCQUEyQjtJQUMzQixpQ0FBaUM7SUFDakMsaUNBQWlDO0lBQ2pDLG1CQUFtQjtFQUNyQjs7O0VBR0E7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjs7SUFFbkIsc0JBQXNCO0lBQ3RCLHVCQUF1Qjs7SUFFdkIsaUJBQWlCO0lBQ2pCLFNBQVM7RUFDWDs7RUFFQTtJQUNFLFlBQVk7SUFDWixVQUFVOztJQUVWLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsdUNBQXVDO0lBQ3ZDLHNCQUFzQjtJQUN0QixpQ0FBaUM7SUFDakMsbUJBQW1CO0lBQ25CLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFVBQVU7O0lBRVYsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLFVBQVU7SUFDVixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSx1Q0FBdUM7RUFDekM7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsa0NBQWtDO0lBQ2xDLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsc0JBQXNCOztFQUV4Qjs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCOztJQUVsQixVQUFVO0lBQ1YsU0FBUztJQUNULGFBQWE7SUFDYiw2Q0FBNkM7SUFDN0MsNEJBQTRCO0VBQzlCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQiw4Q0FBOEM7SUFDOUMsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsb0JBQW9COztJQUVwQix1Q0FBdUM7RUFDekM7OztFQUdBO0lBQ0UsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCOztJQUVsQixRQUFRO0VBQ1Y7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLW1haW4tY2xyOiAjRUVFREVCO1xcbiAgICAtLXNlY29uZGFyYXktY2xyOiAjRTBDQ0JFO1xcbiAgICAtLXRlcnRhaXJ5LWNscjogIzc0NzI2NDtcXG4gICAgLS1sYXN0LWNscjogIzNDMzYzMztcXG4gIH1cXG4gIFxcbiAgYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jbHIpO1xcbiAgICBjb2xvcjogdmFyKC0tbGFzdC1jbHIpO1xcbiAgfVxcbiAgXFxuICAuYWRkVGFzayxcXG4gIC5hZGRQcm9qZWN0LFxcbiAgLnRhc2ssXFxuICBzcGFuIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbiAgXFxuICB1bCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA4cHg7XFxuICB9XFxuICBcXG4gIHNwYW4ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICB9XFxuICBcXG4gIGxpIHtcXG4gICAgbWFyZ2luOiAwLjVyZW0gMDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG4gIFxcbiAgc3ZnIHtcXG4gICAgd2lkdGg6IDI0cHg7XFxuICAgIGhlaWdodDogMjRweDtcXG4gIFxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZpbGw6IHZhcigtLXRlcnRhaXJ5LWNscik7XFxuICB9XFxuICBcXG4gIGgzLFxcbiAgcCB7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG4gIFxcbiAgXFxuICBkaWFsb2cge1xcbiAgICBtYXJnaW46IDVyZW0gYXV0byBhdXRvIGF1dG87XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWxhc3QtY2xyKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jbHIpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzNnB4O1xcbiAgfVxcbiAgXFxuICBcXG4gIGZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgXFxuICAgIGNvbG9yOiB2YXIoLS1sYXN0LWNscik7XFxuICAgIC8qIGZvbnQtd2VpZ2h0OiBib2xkOyAqL1xcbiAgXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBnYXA6IDEycHg7XFxuICB9XFxuICBcXG4gIGZvcm0gPiBidXR0b24ge1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIHdpZHRoOiAzMCU7XFxuICBcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAvKiBmb250LXdlaWdodDogYm9sZDsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJheS1jbHIpO1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jbHIpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1sYXN0LWNscik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDM2cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG4gIFxcbiAgdGV4dGFyZWEge1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgd2lkdGg6IDgwJTtcXG4gIFxcbiAgICBjb2xvcjogdmFyKC0tbGFzdC1jbHIpO1xcbiAgfVxcbiAgXFxuICBmb3JtID4gaW5wdXQge1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGNvbG9yOiB2YXIoLS1sYXN0LWNscik7XFxuICB9XFxuICBcXG4gIHNlbGVjdCB7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gIH1cXG4gIFxcbiAgaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJheS1jbHIpO1xcbiAgfVxcbiAgXFxuICBoZWFkZXIgPiBoMyB7XFxuICAgIGNvbG9yOiB2YXIoLS1sYXN0LWNscik7XFxuICAgIHBhZGRpbmc6IDEuNXJlbSAxLjVyZW0gMS41cmVtIDFyZW07XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gIH1cXG4gIFxcbiAgLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICB9XFxuICBcXG4gIC5hZGRQcm9qZWN0IHtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIC8qIGZvbnQtd2VpZ2h0OiA1MDA7ICovXFxuICBcXG4gIH1cXG4gIFxcbiAgLnByb2plY3RzQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgICBcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCB2YXIoLS1zZWNvbmRhcmF5LWNscik7XFxuICAgIHBhZGRpbmc6IDFyZW0gNXJlbSAxcmVtIDFyZW07XFxuICB9XFxuICBcXG4gIC50YXNrc0NvbnRhaW5lciB7XFxuICAgIGZsZXgtYmFzaXM6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDVyZW0gNXJlbTtcXG4gIH1cXG4gIFxcbiAgLmFkZFRhc2sge1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgLyogZm9udC13ZWlnaHQ6IDUwMDsgKi9cXG4gIH1cXG4gIFxcbiAgLnRhc2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tc2Vjb25kYXJheS1jbHIpO1xcbiAgICBwYWRkaW5nOiAxcmVtIDA7XFxuICB9XFxuICBcXG4gIC50YXNrcyB7XFxuICAgIG1hcmdpbjogMnJlbSAwO1xcbiAgfVxcbiAgXFxuICAuY2hlY2tCb3gge1xcbiAgICBtYXJnaW46IDAgNHB4IDAgMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICAgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcmF5LWNscik7XFxuICB9XFxuICBcXG4gIFxcbiAgLmVkaXRUYXNrIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xcbiAgfVxcbiAgXFxuICAudGFza0RldGFpbHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICBcXG4gICAgZ2FwOiA4cHg7XFxuICB9XFxuICBcXG4gIC5jbG9zZU1vZGFsIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB0YXNrRmFjdG9yeSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IHsgb3Blbk1vZGFsLCBjbG9zZU1vZGFsLCBjcmVhdGVUYXNrLCBjcmVhdGVGb3JtLCB0YXNrQ291bnRlciwgZGVsZXRlT2JqZWN0IH0gZnJvbSBcIi4vZG9tLmpzXCI7XG5pbXBvcnQgeyBwcm9qZWN0c0ZhY3RvcnkgfSBmcm9tIFwiLi9wcm9qZWN0cy5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUb2RvKCkge1xuICAvLyBEeW5hbWljYWxseSBjcmVhdGUgdGhlIGZvcm1cbiAgY3JlYXRlRm9ybSgpO1xuXG4gIGNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpYWxvZ1wiKTtcbiAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpO1xuXG5cbiAgLy8gT3BlbiB0aGUgZm9ybSdzIG1vZGFsXG4gIG9wZW5Nb2RhbChtb2RhbCk7XG5cblxuICAvLyBBZGQgRXZlbnQgTGlzdGVuZXIgdG8gZm9ybSB1cG9uIHN1Ym1pdFxuICBhZGRUYXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIFxuICAgIC8vIFNhdmUgdGhlIGZvcm0gaW5wdXQgZnJvbSB1c2VyIGFuZCBzdG9yZSBpbiB2YXJpYWJsZXNcbiAgICBjb25zdCBlbGVtZW50cyA9IGFkZFRhc2tGb3JtLmVsZW1lbnRzO1xuICAgIFxuICAgIGNvbnN0IHRhc2tUaXRsZSA9IGVsZW1lbnRzLnRhc2tUaXRsZS52YWx1ZTtcbiAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBlbGVtZW50cy50YXNrRGVzY3JpcHRpb24udmFsdWU7XG4gICAgY29uc3QgdGFza0R1ZURhdGUgPSBlbGVtZW50cy50YXNrRHVlRGF0ZS52YWx1ZTtcbiAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBwYXJzZUludChlbGVtZW50cy50YXNrUHJpb3JpdHkudmFsdWUpO1xuXG4gICAgLy8gQ3JlYXRlIHRhc2sgYmFzZWQgb24gdXNlciBpbnB1dFxuICAgIGNvbnN0IG5ld1Rhc2sgPSB0YXNrRmFjdG9yeSh0YXNrVGl0bGUsIHRhc2tEZXNjcmlwdGlvbiwgdGFza0R1ZURhdGUsIHRhc2tQcmlvcml0eSwgdGFza0NvdW50ZXIuZ2V0Q291bnQoKSk7XG5cbiAgICBjcmVhdGVUYXNrKHRhc2tDb250YWluZXIsIG5ld1Rhc2ssIG5ld1Rhc2suZ2V0VGFza051bWJlcigpKTtcblxuICAgIHRhc2tDb3VudGVyLmluY3JlYXNlQ291bnQoKTtcblxuICAgIC8vIEFkZCB0aGUgbmV3bHkgY3JlYXRlIHRhc2sgdG8gaXRzIGNvcnJlc3BvbmRpbmcgcHJvamVjdFxuICAgIHByb2plY3RzRmFjdG9yeS5hZGRUYXNrVG9Qcm9qZWN0KHByb2plY3RzRmFjdG9yeS5nZXRQcm9qZWN0TnVtYmVyKCksIHByb2plY3RzRmFjdG9yeS5nZXRDdXJyZW50UHJvamVjdE5hbWUoKSwgbmV3VGFzayk7XG5cbiAgICAvLyBDbG9zZSBmb3JtXG4gICAgY2xvc2VNb2RhbChtb2RhbCk7XG4gIFxuICAgIC8vIFJlbW92ZSB0aGUgRm9ybSBcbiAgICBhZGRUYXNrRm9ybS5yZW1vdmUoKTtcbiAgICBtb2RhbC5yZW1vdmUoKTtcbiAgfSk7XG59IiwiaW1wb3J0IHRhc2tGYWN0b3J5IGZyb20gJy4vaW5kZXguanMnO1xuaW1wb3J0IGVkaXRUYXNrIGZyb20gJy4vZWRpdFRvZG8uanMnO1xuaW1wb3J0IHsgcHJvamVjdHNGYWN0b3J5IH0gZnJvbSAnLi9wcm9qZWN0cy5qcyc7XG5pbXBvcnQgeyBkZWxldGVQcm9qZWN0UHJvcGVydHksIHN0b3JlVGFza3NEb21Db250ZW50LCBzdG9yZVRvTG9jYWxTdG9yYWdlLCByZXNldFRhc2tzRG9tQ29udGVudCwgZGVmYXVsdENvdW50ZXIgfSBmcm9tICcuL3N0b3JhZ2UuanMnO1xuaW1wb3J0IGNyZWF0ZVRvZG8gZnJvbSAnLi9jcmVhdGVUb2RvLmpzJztcblxuXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIGF0dHJpYnV0ZXMpIHtcbiAgZm9yIChjb25zdCBrZXkgaW4gYXR0cmlidXRlcykge1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVGb3JtKCkge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpYWxvZ1wiKTtcblxuICAvLyBBZGQgYSBjbG9zZSBidXR0b24gdG8gY2xvc2UgbW9kYWxcbiAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgY29uc3QgY2xvc2VTdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICBjb25zdCBjbG9zZVBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXG4gICAgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyxcbiAgICAncGF0aCdcbiAgKTtcbiAgY29uc3Qgc3ZnVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aXRsZScpO1xuICBzdmdUaXRsZS50ZXh0Q29udGVudCA9IFwiY2xvc2UtY2lyY2xlLW91dGxpbmVcIjtcbiAgY2xvc2VTdmcuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgJzAgMCAyNCAyNCcpO1xuICBjbG9zZVBhdGguc2V0QXR0cmlidXRlKCdkJywgXCJNMTIsMjBDNy41OSwyMCA0LDE2LjQxIDQsMTJDNCw3LjU5IDcuNTksNCAxMiw0QzE2LjQxLDQgMjAsNy41OSAyMCwxMkMyMCwxNi40MSAxNi40MSwyMCAxMiwyME0xMiwyQzYuNDcsMiAyLDYuNDcgMiwxMkMyLDE3LjUzIDYuNDcsMjIgMTIsMjJDMTcuNTMsMjIgMjIsMTcuNTMgMjIsMTJDMjIsNi40NyAxNy41MywyIDEyLDJNMTQuNTksOEwxMiwxMC41OUw5LjQxLDhMOCw5LjQxTDEwLjU5LDEyTDgsMTQuNTlMOS40MSwxNkwxMiwxMy40MUwxNC41OSwxNkwxNiwxNC41OUwxMy40MSwxMkwxNiw5LjQxTDE0LjU5LDhaXCIpXG4gIGNsb3NlU3ZnLmFwcGVuZENoaWxkKHN2Z1RpdGxlKTtcbiAgY2xvc2VTdmcuYXBwZW5kQ2hpbGQoY2xvc2VQYXRoKTtcbiAgY2xvc2VCdG4uYXBwZW5kQ2hpbGQoY2xvc2VTdmcpO1xuXG4gIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoXCJjbG9zZU1vZGFsXCIpO1xuICBtb2RhbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbW9kYWwnLCBcIlwiKTtcbiAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2xvc2VNb2RhbChtb2RhbCk7XG4gICAgbW9kYWwucmVtb3ZlKCk7XG4gICAgZm9ybS5yZW1vdmUoKTtcbiAgfSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoY2xvc2VCdG4pO1xuXG4gIC8vIENyZWF0ZSBpbnB1dCBmb3IgdGFzayB0aXRsZVxuICBjb25zdCB0aXRsZUF0dHJpYnV0ZXMgPSB7XG4gICAgJ3R5cGUnOiAndGV4dCcsXG4gICAgJ2lkJzogJ3Rhc2tUaXRsZScsXG4gICAgJ25hbWUnOiAndGFza1RpdGxlJyxcbiAgICAncmVxdWlyZWQnOiAnJ1xuICB9XG4gIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIHRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGFza1RpdGxlXCIpO1xuICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gXCJUaXRsZVwiO1xuXG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHNldEF0dHJpYnV0ZXModGl0bGVJbnB1dCwgdGl0bGVBdHRyaWJ1dGVzKTtcbiAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcbiAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcblxuICAvLyBDcmVhdGUgaW5wdXQgZm9yIHRhc2sgZGVzY3JpcHRpb25cbiAgY29uc3QgZGVzY3JpcHRpb25BdHRyaWJ1dGVzID0ge1xuICAgICdpZCc6ICd0YXNrRGVzY3JpcHRpb24nLFxuICAgICduYW1lJzogJ3Rhc2tEZXNjcmlwdGlvbicsXG4gICAgJ3Jvd3MnOiAxMCxcbiAgICAnY29scyc6IDUwXG4gIH1cbiAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgZGVzY3JpcHRpb25MYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0YXNrRGVzY3JpcHRpb25cIik7XG4gIGRlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uXCI7XG5cbiAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0QXJlYVwiKTtcbiAgc2V0QXR0cmlidXRlcyhkZXNjcmlwdGlvbklucHV0LCBkZXNjcmlwdGlvbkF0dHJpYnV0ZXMpO1xuICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWwpO1xuICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpO1xuXG4gIC8vIENyZWF0ZSBpbnB1dCBmb3IgdGFzayBkdWUgZGF0ZVxuICBjb25zdCBkdWVEYXRlQXR0cmlidXRlcyA9IHtcbiAgICAndHlwZSc6ICdkYXRldGltZS1sb2NhbCcsXG4gICAgJ2lkJzogJ3Rhc2tEdWVEYXRlJyxcbiAgICAnbmFtZSc6ICd0YXNrRHVlRGF0ZScsXG4gIH1cbiAgY29uc3QgZHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBkdWVEYXRlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGFza0R1ZURhdGVcIik7XG4gIGR1ZURhdGVMYWJlbC50ZXh0Q29udGVudCA9IFwiRHVlIERhdGVcIjtcblxuICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHNldEF0dHJpYnV0ZXMoZHVlRGF0ZUlucHV0LCBkdWVEYXRlQXR0cmlidXRlcyk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZUxhYmVsKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlSW5wdXQpO1xuXG4gIC8vIENyZWF0ZSBpbnB1dCBmb3IgdGFzayBwcmlvcml0eVxuICBjb25zdCBwcmlvcml0aWVzID0gW1wiTm9uZVwiLCBcIkxvd1wiLCBcIk1lZGl1bVwiLCBcIkhpZ2hcIl07XG5cbiAgY29uc3Qgc2VsZWN0UHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIHNlbGVjdFByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndGFza1ByaW9yaXR5Jyk7XG4gIHNlbGVjdFByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5XCI7XG5cbiAgY29uc3Qgc2VsZWN0UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgY29uc3Qgc2VsZWN0UHJpb3JpdHlBdHRyaWJ1dGVzID0geydpZCc6ICd0YXNrUHJpb3JpdHknLCAnbmFtZSc6ICd0YXNrUHJpb3JpdHknfTtcbiAgc2V0QXR0cmlidXRlcyhzZWxlY3RQcmlvcml0eSwgc2VsZWN0UHJpb3JpdHlBdHRyaWJ1dGVzKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByaW9yaXRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBwcmlvcml0eU9wdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIHByaW9yaXR5T3B0aW9ucy5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBpKTtcbiAgICBwcmlvcml0eU9wdGlvbnMudGV4dENvbnRlbnQgPSBwcmlvcml0aWVzW2ldO1xuICAgIHNlbGVjdFByaW9yaXR5LmFwcGVuZENoaWxkKHByaW9yaXR5T3B0aW9ucyk7XG4gIH1cbiAgZm9ybS5hcHBlbmRDaGlsZChzZWxlY3RQcmlvcml0eUxhYmVsKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChzZWxlY3RQcmlvcml0eSk7IFxuXG4gIC8vIENyZWF0ZSBzdWJtaXQgYnV0dG9uXG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpXG4gIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcblxuICBmb3JtLmFjdGlvbiA9IFwiI1wiO1xuXG4gIG1vZGFsLmFwcGVuZENoaWxkKGZvcm0pO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsKTtcbn0gXG5cbmZ1bmN0aW9uIGNyZWF0ZUFkZFByb2plY3RGb3JtKCkge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpYWxvZ1wiKTtcblxuICAvLyBBZGQgYSBjbG9zZSBidXR0b24gdG8gY2xvc2UgbW9kYWxcbiAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgY29uc3QgY2xvc2VTdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICBjb25zdCBjbG9zZVBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXG4gICAgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyxcbiAgICAncGF0aCdcbiAgKTtcbiAgY29uc3Qgc3ZnVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aXRsZScpO1xuICBzdmdUaXRsZS50ZXh0Q29udGVudCA9IFwiY2xvc2UtY2lyY2xlLW91dGxpbmVcIjtcbiAgY2xvc2VTdmcuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgJzAgMCAyNCAyNCcpO1xuICBjbG9zZVBhdGguc2V0QXR0cmlidXRlKCdkJywgXCJNMTIsMjBDNy41OSwyMCA0LDE2LjQxIDQsMTJDNCw3LjU5IDcuNTksNCAxMiw0QzE2LjQxLDQgMjAsNy41OSAyMCwxMkMyMCwxNi40MSAxNi40MSwyMCAxMiwyME0xMiwyQzYuNDcsMiAyLDYuNDcgMiwxMkMyLDE3LjUzIDYuNDcsMjIgMTIsMjJDMTcuNTMsMjIgMjIsMTcuNTMgMjIsMTJDMjIsNi40NyAxNy41MywyIDEyLDJNMTQuNTksOEwxMiwxMC41OUw5LjQxLDhMOCw5LjQxTDEwLjU5LDEyTDgsMTQuNTlMOS40MSwxNkwxMiwxMy40MUwxNC41OSwxNkwxNiwxNC41OUwxMy40MSwxMkwxNiw5LjQxTDE0LjU5LDhaXCIpXG4gIGNsb3NlU3ZnLmFwcGVuZENoaWxkKHN2Z1RpdGxlKTtcbiAgY2xvc2VTdmcuYXBwZW5kQ2hpbGQoY2xvc2VQYXRoKTtcbiAgY2xvc2VCdG4uYXBwZW5kQ2hpbGQoY2xvc2VTdmcpO1xuXG4gIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoXCJjbG9zZU1vZGFsXCIpO1xuICBtb2RhbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbW9kYWwnLCBcIlwiKTtcbiAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2xvc2VNb2RhbChtb2RhbCk7XG4gICAgbW9kYWwucmVtb3ZlKCk7XG4gICAgZm9ybS5yZW1vdmUoKTtcbiAgfSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoY2xvc2VCdG4pO1xuXG4gIG1vZGFsLnNldEF0dHJpYnV0ZSgnZGF0YS1tb2RhbCcsICcnKTtcbiAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2FjdGlvbicsICcjJyk7XG4gIG1vZGFsLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gIC8vIENyZWF0ZSBmb3JtIGxhYmVsIGZvciBwcm9qZWN0IG5hbWVcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gXCJQcm9qZWN0IE5hbWVcIjtcbiAgcHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByb2plY3ROYW1lXCIpO1xuXG4gIGNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjb25zdCBwcm9qZWN0TmFtZUF0dHJpYnV0ZXMgPSB7XG4gICAgLy8gQ3JlYXRlIGZvcm0gaW5wdXRcbiAgICAnbmFtZSc6ICdwcm9qZWN0TmFtZScsXG4gICAgJ2lkJzogJ3Byb2plY3ROYW1lJyxcbiAgICAncmVxdWlyZWQnOiAnJ1xuICB9O1xuXG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG4gIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuXG4gIGZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuICBmb3JtLmFwcGVuZENoaWxkKHByb2plY3ROYW1lSW5wdXQpO1xuICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG4gIFxuICBzZXRBdHRyaWJ1dGVzKHByb2plY3ROYW1lSW5wdXQsIHByb2plY3ROYW1lQXR0cmlidXRlcyk7XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtb2RhbCk7XG59XG5cbmZ1bmN0aW9uIG9wZW5Nb2RhbChtb2RhbCkge1xuICBtb2RhbC5zaG93TW9kYWwoKTtcbn1cblxuZnVuY3Rpb24gY2xvc2VNb2RhbChtb2RhbCkge1xuICBtb2RhbC5jbG9zZSgpO1xufVxuXG5jb25zdCB0YXNrQ291bnRlciA9ICgoKSA9PiB7XG4gIGxldCBjb3VudCA9IDA7XG5cbiAgZnVuY3Rpb24gZ2V0Q291bnQoKSB7XG4gICAgcmV0dXJuIGNvdW50O1xuICB9XG5cbiAgZnVuY3Rpb24gaW5jcmVhc2VDb3VudCgpIHtcbiAgICBjb3VudCsrO1xuICAgIHN0b3JlVG9Mb2NhbFN0b3JhZ2UoXCJ0YXNrQ291bnRlclwiLCB7Y291bnQ6IGNvdW50fSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0Q291bnQoKSB7XG4gICAgY291bnQgPSAwO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlQ291bnQobmV3Q291bnQpIHtcbiAgICBjb3VudCA9IG5ld0NvdW50XG4gIH1cblxuICByZXR1cm4geyB1cGRhdGVDb3VudCwgZ2V0Q291bnQsIGluY3JlYXNlQ291bnQsIHJlc2V0Q291bnQgfVxufSkoKVxuXG5jb25zdCB0YXNrc0RvbSA9ICgoKSA9PiB7XG4gIGxldCB0YXNrcyA9IHtcbiAgICBcInRhc2tJbkRpc3BsYXlcIjogW10sXG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRvVGFza0RvbSh0YXNrKSB7XG4gICAgdGFza3NbXCJ0YXNrSW5EaXNwbGF5XCJdLnB1c2godGFzayk7XG4gICAgZ2V0VGFza3NEb21BcnIoKVxuICAgIHN0b3JlVG9Mb2NhbFN0b3JhZ2UoXCJ0YXNrc0RvbVwiLCB0YXNrcyk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRhc2tzKCkge1xuICAgIHRhc2tzID0ge1xuICAgICAgXCJ0YXNrSW5EaXNwbGF5XCI6IFtdLFxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBnZXRUYXNrc0RvbUFycigpIHtcbiAgICByZXR1cm4gdGFza3M7XG4gIH1cblxuICBmdW5jdGlvbiBlZGl0VGFzayh0YXNrTnVtYmVyLCBuZXdUYXNrKSB7XG4gICAgdGFza3NbXCJ0YXNrSW5EaXNwbGF5XCJdLmZvckVhY2godGFzayA9PiB7XG4gICAgICBpZiAodGFzay50YXNrTnVtYmVyID09PSBwYXJzZUludCh0YXNrTnVtYmVyKSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRhc2tzW1widGFza0luRGlzcGxheVwiXS5pbmRleE9mKHRhc2spO1xuICAgICAgICB0YXNrc1tcInRhc2tJbkRpc3BsYXlcIl0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgdGFza3NbXCJ0YXNrSW5EaXNwbGF5XCJdLnNwbGljZShpbmRleCwgMCwgbmV3VGFzayk7XG4gICAgICB9XG4gICAgfSlcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInRhc2tzRG9tXCIpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NEb21cIiwgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlbGV0ZVRhc2sodGFza051bWJlcikgeyBcbiAgICB0YXNrc1tcInRhc2tJbkRpc3BsYXlcIl0uZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgIGlmICh0YXNrLnRhc2tOdW1iZXIgPT09IHBhcnNlSW50KHRhc2tOdW1iZXIpKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGFza3NbXCJ0YXNrSW5EaXNwbGF5XCJdLmluZGV4T2YodGFzayk7XG4gICAgICAgIHRhc2tzW1widGFza0luRGlzcGxheVwiXS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH0pXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ0YXNrc0RvbVwiKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzRG9tXCIsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XG4gIH1cblxuICByZXR1cm4geyBwdXNoVG9UYXNrRG9tLCByZXNldFRhc2tzLCBnZXRUYXNrc0RvbUFyciwgZGVsZXRlVGFzaywgZWRpdFRhc2sgfVxufSkoKVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrKGNvbnRhaW5lciwgdGFzaywgdGFza051bWJlcikge1xuICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGFza0RldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXNrRGV0YWlscy5jbGFzc0xpc3QuYWRkKGB0YXNrRGV0YWlscyR7dGFza051bWJlcn1gKTtcbiAgdGFza0RldGFpbHMuY2xhc3NMaXN0LmFkZCgndGFza0RldGFpbHMnKTtcbiAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcbiAgdGFza0NvbnRhaW5lci5kYXRhc2V0LnRhc2tOdW1iZXIgPSB0YXNrTnVtYmVyO1xuIFxuICBcbiAgY29uc3QgY2hlY2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjaGVja0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdjaGVja0JveCcpO1xuICBjaGVja0J1dHRvbi50eXBlID0gXCJjaGVja2JveFwiO1xuICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrQnV0dG9uKTtcblxuICBjaGVja0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGRlbGV0ZVRhc2tGcm9tT2JqZWN0KHByb2plY3RzRmFjdG9yeS5nZXRQcm9qZWN0cygpLCBwcm9qZWN0c0ZhY3RvcnkuZ2V0Q3VycmVudFByb2plY3ROYW1lKCksIGRlbGV0ZUJ0bi5kYXRhc2V0LmRlbGV0ZUJ0bk51bWJlcik7XG4gICAgICB0YXNrQ29udGFpbmVyLnJlbW92ZSgpO1xuICAgIH0sIDEwMDApO1xuICB9KVxuXG4gIGNvbnN0IHRhc2tUaXRsZURvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgdGFza1RpdGxlRG9tLmNsYXNzTGlzdC5hZGQoYHRhc2tUaXRsZSR7dGFza051bWJlcn1gKTtcbiAgdGFza1RpdGxlRG9tLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcbiAgdGFza0RldGFpbHMuYXBwZW5kQ2hpbGQodGFza1RpdGxlRG9tKTtcbiAgXG4gIGlmICh0YXNrLmRlc2NyaXB0aW9uICE9PSBcIlwiKSB7XG4gICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uRG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGFza0Rlc2NyaXB0aW9uRG9tLmNsYXNzTGlzdC5hZGQoYHRhc2tEZXNjcmlwdGlvbiR7dGFza051bWJlcn1gKTtcbiAgICB0YXNrRGVzY3JpcHRpb25Eb20udGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICAgIHRhc2tEZXRhaWxzLmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbkRvbSk7XG4gIH1cbiAgXG4gIGlmICh0YXNrLmR1ZURhdGUgIT09IFwiXCIpIHtcbiAgICBjb25zdCB0YXNrRHVlRGF0ZURvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRhc2tEdWVEYXRlRG9tLmNsYXNzTGlzdC5hZGQoYHRhc2tEdWVEYXRlJHt0YXNrTnVtYmVyfWApO1xuICAgIHRhc2tEdWVEYXRlRG9tLnRleHRDb250ZW50ID0gYER1ZSBvbiAke2Zvcm1hdCh0YXNrLmR1ZURhdGUsIFwiUFBQUHBwcHBcIil9YDtcbiAgICB0YXNrRGV0YWlscy5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZURvbSk7XG4gIH1cblxuICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEZXRhaWxzKTtcblxuICAvLyBhZGQgYW4gZWRpdCBidXR0b24gZm9yIGEgdGFza1xuICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBjb25zdCBlZGl0U3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgY29uc3QgZWRpdFBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXG4gICAgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyxcbiAgICAncGF0aCdcbiAgKTtcbiAgY29uc3Qgc3ZnVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aXRsZScpO1xuICBzdmdUaXRsZS50ZXh0Q29udGVudCA9IFwicGVuY2lsXCI7XG4gIGVkaXRTdmcuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgJzAgMCAyNCAyNCcpO1xuICBlZGl0UGF0aC5zZXRBdHRyaWJ1dGUoJ2QnLCBcIk0yMC43MSw3LjA0QzIxLjEsNi42NSAyMS4xLDYgMjAuNzEsNS42M0wxOC4zNywzLjI5QzE4LDIuOSAxNy4zNSwyLjkgMTYuOTYsMy4yOUwxNS4xMiw1LjEyTDE4Ljg3LDguODdNMywxNy4yNVYyMUg2Ljc1TDE3LjgxLDkuOTNMMTQuMDYsNi4xOEwzLDE3LjI1WlwiKVxuICBlZGl0U3ZnLmFwcGVuZENoaWxkKHN2Z1RpdGxlKTtcbiAgZWRpdFN2Zy5hcHBlbmRDaGlsZChlZGl0UGF0aCk7XG4gIGVkaXRCdG4uYXBwZW5kQ2hpbGQoZWRpdFN2Zyk7XG4gIGVkaXRCdG4uY2xhc3NMaXN0LmFkZChcImVkaXRUYXNrXCIpO1xuXG4gIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG5cbiAgLy8gYWRkIGEgZGVsZXRlIGJ1dHRvbiBmb3IgYSB0YXNrXG4gIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJkZWxldGVUYXNrXCIpO1xuICBkZWxldGVCdG4uZGF0YXNldC5kZWxldGVCdG5OdW1iZXIgPSB0YXNrTnVtYmVyO1xuICBjb25zdCBkZWxldGVTdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICBjb25zdCBkZWxldGVQYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxuICAgICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsXG4gICAgJ3BhdGgnXG4gICk7XG4gIGNvbnN0IGRlbGV0ZVN2Z1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGl0bGUnKTtcbiAgZGVsZXRlU3ZnVGl0bGUudGV4dENvbnRlbnQgPSBcImRlbGV0ZVwiO1xuICBkZWxldGVTdmcuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgJzAgMCAyNCAyNCcpO1xuICBkZWxldGVQYXRoLnNldEF0dHJpYnV0ZSgnZCcsIFwiTTE5LDRIMTUuNUwxNC41LDNIOS41TDguNSw0SDVWNkgxOU02LDE5QTIsMiAwIDAsMCA4LDIxSDE2QTIsMiAwIDAsMCAxOCwxOVY3SDZWMTlaXCIgKVxuICBkZWxldGVTdmcuYXBwZW5kQ2hpbGQoc3ZnVGl0bGUpO1xuICBkZWxldGVTdmcuYXBwZW5kQ2hpbGQoZGVsZXRlUGF0aCk7XG4gIGRlbGV0ZUJ0bi5hcHBlbmRDaGlsZChkZWxldGVTdmcpO1xuXG4gIC8vIGRlbGV0ZSBjb3JyZXNwb25kaW5nIHRhc2sgZnJvbSBkb20gYW5kIG9iamVjdCB3aGVuIGNsaWNrZWRcbiAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRlbGV0ZVRhc2tGcm9tT2JqZWN0KHByb2plY3RzRmFjdG9yeS5nZXRQcm9qZWN0cygpLCBwcm9qZWN0c0ZhY3RvcnkuZ2V0Q3VycmVudFByb2plY3ROYW1lKCksIGRlbGV0ZUJ0bi5kYXRhc2V0LmRlbGV0ZUJ0bk51bWJlcik7XG4gICAgdGFza0NvbnRhaW5lci5yZW1vdmUoKTtcbiAgfSlcbiAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XG4gIGVkaXRUYXNrKGVkaXRCdG4sIHRhc2tOdW1iZXIpOyBcbiAgdGFza3NEb20ucHVzaFRvVGFza0RvbSh0YXNrKTtcbn1cblxuZnVuY3Rpb24gZWRpdFRhc2tEb20odGFza1RvRWRpdCwgdGFza1RvRWRpdERpdiwgdGFza051bWJlciwgdGFzaykge1xuICBjb25zdCB0YXNrVGl0bGVEb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudGFza1RpdGxlJHt0YXNrTnVtYmVyfWApO1xuICB0YXNrVGl0bGVEb20udGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuXG4gIGlmICh0YXNrLmRlc2NyaXB0aW9uICE9PSBcIlwiKSB7XG4gICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uRG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRhc2tEZXNjcmlwdGlvbiR7dGFza051bWJlcn1gKTtcbiAgICBpZiAodGFza0Rlc2NyaXB0aW9uRG9tID09PSBudWxsKSB7XG4gICAgICBjb25zdCBuZXdUYXNrRGVzY3JpcHRpb25Eb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIG5ld1Rhc2tEZXNjcmlwdGlvbkRvbS5jbGFzc0xpc3QuYWRkKGB0YXNrRGVzY3JpcHRpb24ke3Rhc2tOdW1iZXJ9YClcbiAgICAgIG5ld1Rhc2tEZXNjcmlwdGlvbkRvbS50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XG4gICAgICB0YXNrVG9FZGl0RGl2LmFwcGVuZENoaWxkKG5ld1Rhc2tEZXNjcmlwdGlvbkRvbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhc2tEZXNjcmlwdGlvbkRvbS50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbkRvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50YXNrRGVzY3JpcHRpb24ke3Rhc2tOdW1iZXJ9YCk7XG4gICAgaWYgKHRhc2tEZXNjcmlwdGlvbkRvbSAhPT0gbnVsbCkge1xuICAgICAgdGFza0Rlc2NyaXB0aW9uRG9tLnJlbW92ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0YXNrLmR1ZURhdGUgIT09IFwiXCIpIHtcbiAgICBjb25zdCB0YXNrRHVlRGF0ZURvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50YXNrRHVlRGF0ZSR7dGFza051bWJlcn1gKTtcbiAgICBpZiAodGFza0R1ZURhdGVEb20gPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5ld1Rhc2tEdWVEYXRlRG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICBuZXdUYXNrRHVlRGF0ZURvbS5jbGFzc0xpc3QuYWRkKGB0YXNrRHVlRGF0ZSR7dGFza051bWJlcn1gKTtcbiAgICAgIG5ld1Rhc2tEdWVEYXRlRG9tLnRleHRDb250ZW50ID0gYER1ZSBvbiAke2Zvcm1hdCh0YXNrLmR1ZURhdGUsIFwiUFBQUHBwcHBcIil9YDtcbiAgICAgIHRhc2tUb0VkaXREaXYuYXBwZW5kQ2hpbGQobmV3VGFza0R1ZURhdGVEb20pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXNrRHVlRGF0ZURvbS50ZXh0Q29udGVudCA9IGBEdWUgb24gJHtmb3JtYXQodGFzay5kdWVEYXRlLCBcIlBQUFBwcHBwXCIpfWA7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHRhc2tEdWVEYXRlRG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRhc2tEdWVEYXRlJHt0YXNrTnVtYmVyfWApO1xuICAgIGlmICh0YXNrRHVlRGF0ZURvbSAhPT0gbnVsbCkge1xuICAgICAgdGFza0R1ZURhdGVEb20ucmVtb3ZlKCk7XG4gICAgfVxuICB9XG4gIGNvbnNvbGUubG9nKHByb2plY3RzRmFjdG9yeS5nZXRQcm9qZWN0cygpKVxuXG4gIGVkaXRUYXNrT2JqZWN0KHByb2plY3RzRmFjdG9yeS5nZXRQcm9qZWN0cygpLCBwcm9qZWN0c0ZhY3RvcnkuZ2V0Q3VycmVudFByb2plY3ROYW1lKCksIHRhc2tOdW1iZXIsIHRhc2spXG59XG5cbi8vIGxldCBidWNrZXQgPSAwXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdHMoYnVja2V0LCBwcm9qZWN0VGl0bGVOYW1lKSB7XG4gIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidWxcIik7XG4gIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cbiAgY29uc3QgcHJvamVjdFRpdGxlSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cbiAgcHJvamVjdFRpdGxlSG9sZGVyLnRleHRDb250ZW50ID0gcHJvamVjdFRpdGxlTmFtZTtcbiAgcHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdC1udW1iZXInLCBidWNrZXQpO1xuICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RUaXRsZUhvbGRlcik7XG4gIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdCk7XG5cbiAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBjb25zdCBkZWxldGVTdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICBjb25zdCBkZWxldGVQYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxuICAgICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsXG4gICAgJ3BhdGgnXG4gICk7XG4gIGNvbnN0IHN2Z1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGl0bGUnKTtcbiAgc3ZnVGl0bGUudGV4dENvbnRlbnQgPSBcImRlbGV0ZVwiO1xuICBkZWxldGVTdmcuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgJzAgMCAyNCAyNCcpO1xuICBkZWxldGVQYXRoLnNldEF0dHJpYnV0ZSgnZCcsIFwiTTE5LDRIMTUuNUwxNC41LDNIOS41TDguNSw0SDVWNkgxOU02LDE5QTIsMiAwIDAsMCA4LDIxSDE2QTIsMiAwIDAsMCAxOCwxOVY3SDZWMTlaXCIgKVxuICBkZWxldGVTdmcuYXBwZW5kQ2hpbGQoc3ZnVGl0bGUpO1xuICBkZWxldGVTdmcuYXBwZW5kQ2hpbGQoZGVsZXRlUGF0aCk7XG4gIGRlbGV0ZUJ0bi5hcHBlbmRDaGlsZChkZWxldGVTdmcpO1xuXG4gIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlUHJvamVjdFwiKTtcbiAgZGVsZXRlQnRuLmRhdGFzZXQuZGVsZXRlQnRuTnVtYmVyID0gYnVja2V0O1xuICBwcm9qZWN0LmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG5cbiAgLy8gZGVsZXRlIGNvcnJlc3BvbmRpbmcgdGFzayBmcm9tIGRvbSBhbmQgb2JqZWN0IHdoZW4gY2xpY2tlZFxuICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBPYmplY3Qua2V5cyhwcm9qZWN0c0ZhY3RvcnkuZ2V0UHJvamVjdHMoKSkuZm9yRWFjaChwcm9qZWN0cyA9PiB7XG4gICAgICAgIGlmIChwcm9qZWN0cyA9PT0gZGVsZXRlQnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1kZWxldGUtYnRuLW51bWJlcicpKSB7XG4gICAgICAgICAgZGVsZXRlIHByb2plY3RzRmFjdG9yeS5nZXRQcm9qZWN0cygpW3Byb2plY3RzXTtcbiAgICAgICAgICBkZWxldGVQcm9qZWN0UHJvcGVydHkoZGVsZXRlQnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1kZWxldGUtYnRuLW51bWJlcicpKVxuICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzRmFjdG9yeS5nZXRQcm9qZWN0TnVtYmVyKCkpO1xuICAgICAgICAgIC8vIGRlbGV0ZSB0YXNrcyBpbiBkb20gaWYgdGFza3MgaW4gZGlzcGxheSBpcyBmcm9tIHByb2plY3QgdG8gYmUgZGVsZXRlZFxuICAgICAgICAgIGlmIChwYXJzZUludChwcm9qZWN0c0ZhY3RvcnkuZ2V0UHJvamVjdE51bWJlcigpKSA9PT0gcGFyc2VJbnQoZGVsZXRlQnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1kZWxldGUtYnRuLW51bWJlcicpKSkge1xuICAgICAgICAgICAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzaycpO1xuICAgICAgICAgICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRUYXNrJyk7XG4gICAgICAgICAgICByZXNldFRhc2tzRG9tQ29udGVudCgpO1xuICAgICAgICAgICAgWy4uLnRhc2tzXS5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgICB0YXNrLnJlbW92ZSgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidGFza3NEb21cIik7XG4gICAgICAgICAgICBhZGRUYXNrQnRuLnJlbW92ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwcm9qZWN0LnJlbW92ZSgpO1xuICAgICAgICB9IFxuICAgICAgfSlcbiAgICB9KVxuICBwcm9qZWN0c0ZhY3Rvcnkuc2V0UHJvamVjdE51bWJlcihwcm9qZWN0LCBwcm9qZWN0VGl0bGVOYW1lLCBwcm9qZWN0VGl0bGVIb2xkZXIpO1xufVxuXG5mdW5jdGlvbiBlZGl0VGFza09iamVjdChvYmplY3QsIHByb2plY3ROYW1lLCB0YXNrTnVtYmVyLCBuZXdUYXNrKSB7XG4gIGxldCBrZXlzQXJyID0gT2JqZWN0LmtleXMob2JqZWN0KTtcblxuICBrZXlzQXJyLmZvckVhY2goa2V5cyA9PiB7XG4gICAgT2JqZWN0LmtleXMob2JqZWN0W2tleXNdKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBpZiAocHJvamVjdE5hbWUgPT09IGtleSkge1xuICAgICAgICBvYmplY3Rba2V5c11ba2V5XS5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgIGlmICh0YXNrLnRhc2tOdW1iZXIgPT09IHBhcnNlSW50KHRhc2tOdW1iZXIpKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IG9iamVjdFtrZXlzXVtrZXldLmluZGV4T2YodGFzayk7XG4gICAgICAgICAgICBvYmplY3Rba2V5c11ba2V5XS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgb2JqZWN0W2tleXNdW2tleV0uc3BsaWNlKGluZGV4LCAwLCBuZXdUYXNrKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfSlcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJwcm9qZWN0c1wiKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShvYmplY3QpKTtcbiAgdGFza3NEb20uZWRpdFRhc2sodGFza051bWJlciwgbmV3VGFzayk7XG59XG5cbi8vIGFsZ29yaXRobSB0byBkZWxldGUgYSBzcGVjaWZpYyBlbGVtZW50IGZyb20gdGhlIGFycmF5IHZhbHVlcyBvZiBlYWNoIG9iamVjdCBwcm9wZXJ0aWVzXG5mdW5jdGlvbiBkZWxldGVUYXNrRnJvbU9iamVjdChvYmplY3QsIHByb2plY3ROYW1lLCBkZWxldGVCdG5OdW1iZXIpIHsgICBcbiAgbGV0IGtleXNBcnIgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuICBrZXlzQXJyLmZvckVhY2goa2V5cyA9PiB7XG4gICAgT2JqZWN0LmtleXMob2JqZWN0W2tleXNdKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBpZiAocHJvamVjdE5hbWUgPT09IGtleSkge1xuICAgICAgICBvYmplY3Rba2V5c11ba2V5XS5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgIGlmICh0YXNrLnRhc2tOdW1iZXIgPT09IHBhcnNlSW50KGRlbGV0ZUJ0bk51bWJlcikpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gb2JqZWN0W2tleXNdW2tleV0uaW5kZXhPZih0YXNrKTtcbiAgICAgICAgICAgIG9iamVjdFtrZXlzXVtrZXldLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwicHJvamVjdHNcIik7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkob2JqZWN0KSk7XG4gIHRhc2tzRG9tLmRlbGV0ZVRhc2soZGVsZXRlQnRuTnVtYmVyKTtcbn1cblxuZnVuY3Rpb24gYWRkVGFza0J1dHRvbigpIHtcbiAgY29uc3QgYWRkVGFza0J0bk5ldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgY29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzQ29udGFpbmVyXCIpO1xuICBhZGRUYXNrQnRuTmV3LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjcmVhdGVUb2RvKTsgIFxuICBhZGRUYXNrQnRuTmV3LnRleHRDb250ZW50ID0gXCJBZGQgVGFza1wiO1xuICBhZGRUYXNrQnRuTmV3LmNsYXNzTGlzdC5hZGQoJ2FkZFRhc2snKTtcbiAgdGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0J0bk5ldyk7XG59XG5cbmV4cG9ydCB7IGFkZFRhc2tCdXR0b24sdGFza0NvdW50ZXIsIGNyZWF0ZUZvcm0sIG9wZW5Nb2RhbCwgY2xvc2VNb2RhbCwgY3JlYXRlVGFzaywgZWRpdFRhc2tEb20sIGNyZWF0ZUFkZFByb2plY3RGb3JtLCBkaXNwbGF5UHJvamVjdHMsIHRhc2tzRG9tIH0iLCJpbXBvcnQgeyBvcGVuTW9kYWwsIGNyZWF0ZUZvcm0sIGVkaXRUYXNrRG9tLCB0YXNrQ291bnRlciB9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB0YXNrRmFjdG9yeSBmcm9tICcuL2luZGV4LmpzJztcbmltcG9ydCB7IHByb2plY3RzRmFjdG9yeSB9IGZyb20gJy4vcHJvamVjdHMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlZGl0VGFzayh0YXNrRWRpdEJ0biwgdGFza051bWJlcikge1xuICAvLyBhZGQgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIHRhc2tFZGl0QnRuIHRvIG9wZW4gdGhlIGZvcm1cbiAgaWYgKCF0YXNrRWRpdEJ0bi5kYXRhc2V0Lmxpc3RlbmVyQWRkZWQpIHtcbiAgICB0YXNrRWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIC8vIGNyZWF0ZSBhbmQgb3BlbiB0aGUgZm9ybVxuICAgICAgY3JlYXRlRm9ybSgpO1xuICAgIFxuICAgICAgY29uc3QgZWRpdFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaWFsb2cnKTtcbiAgICAgIGNvbnN0IHRhc2tUb0VkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10YXNrLW51bWJlcj1cIiR7U3RyaW5nKHRhc2tOdW1iZXIpfVwiXWApO1xuICAgICAgY29uc3QgdGFza1RvRWRpdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50YXNrRGV0YWlscyR7dGFza051bWJlcn1gKTtcbiAgICAgIGNvbnNvbGUubG9nKHRhc2tUb0VkaXREaXYpO1xuICAgICAgb3Blbk1vZGFsKG1vZGFsKTtcblxuICAgICAgLy8gYWRkIGV2ZW50IGxpc3RlbmVyIHRvIGZvcm0gdXBvbiBzdWJtaXRcbiAgICAgIGVkaXRUYXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAvLyBnZXQgdGhlIHZhbHVlcyB0aGF0IHVzZXIgaW5wdXRzXG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZWRpdFRhc2tGb3JtLmVsZW1lbnRzO1xuXG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGVsZW1lbnRzLnRhc2tUaXRsZS52YWx1ZTtcbiAgICAgICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZWxlbWVudHMudGFza0Rlc2NyaXB0aW9uLnZhbHVlO1xuICAgICAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGVsZW1lbnRzLnRhc2tEdWVEYXRlLnZhbHVlO1xuICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBwYXJzZUludChlbGVtZW50cy50YXNrUHJpb3JpdHkudmFsdWUpO1xuXG4gICAgICAgIC8vIGVkaXQgdGhlIHRhc2tFZGl0QnRuJ3MgZGV0YWlsc1xuICAgICAgICBjb25zdCBuZXdUYXNrID0gdGFza0ZhY3RvcnkodGFza1RpdGxlLCB0YXNrRGVzY3JpcHRpb24sIHRhc2tEdWVEYXRlLCB0YXNrUHJpb3JpdHksIHRhc2tOdW1iZXIpO1xuXG4gICAgICAgIC8vIHJlbW92ZSB0aGUgZm9ybSBhbmQgbW9kYWxcbiAgICAgICAgZWRpdFRhc2tGb3JtLnJlbW92ZSgpO1xuICAgICAgICBtb2RhbC5yZW1vdmUoKTtcblxuICAgICAgICBlZGl0VGFza0RvbSh0YXNrVG9FZGl0LCB0YXNrVG9FZGl0RGl2LCB0YXNrTnVtYmVyLCBuZXdUYXNrKTtcblxuICAgICAgICB0YXNrQ291bnRlci5pbmNyZWFzZUNvdW50KCk7XG4gICAgICB9KVxuICAgIH0pXG4gIH1cbiAgdGFza0VkaXRCdG4uZGF0YXNldC5saXN0ZW5lckFkZGVkID0gdHJ1ZTtcbn0iLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgY3JlYXRlVG9kbyBmcm9tICcuL2NyZWF0ZVRvZG8uanMnO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdCwgcHJvamVjdHNGYWN0b3J5IH0gZnJvbSAnLi9wcm9qZWN0cy5qcyc7XG5pbXBvcnQgeyBkZWxldGVQcm9qZWN0UHJvcGVydHksIHJlbmRlclN0b3JlZFRhc2tDb250ZW50LCByZXNldFRhc2tzRG9tQ29udGVudCwgcmVuZGVyU3RvcmVkUHJvamVjdHNDb250ZW50LCBzdG9yZVRvTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9zdG9yYWdlLmpzJztcbmltcG9ydCB7IGRpc3BsYXlQcm9qZWN0cywgcHJvamVjdHNEb20sIGFkZFRhc2tCdXR0b24sIHRhc2tDb3VudGVyIH0gZnJvbSAnLi9kb20uanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0YXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHRhc2tOdW1iZXIpIHtcbiAgbGV0IG5ld1RpdGxlID0gXCJcIjtcbiAgXG4gIGlmIChwcmlvcml0eSA9PT0gMykge1xuICAgIG5ld1RpdGxlICs9IGAhISEgJHt0aXRsZX1gIC8vIEhpZ2hcbiAgfSBlbHNlIGlmIChwcmlvcml0eSA9PT0gMikgeyAgXG4gICAgbmV3VGl0bGUgKz0gYCEhICR7dGl0bGV9YCAvLyBNZWRpdW0gUHJpb3JpdHlcbiAgfSBlbHNlIGlmIChwcmlvcml0eSA9PT0gMSApIHtcbiAgICBuZXdUaXRsZSArPSBgISAke3RpdGxlfWAgLy8gTG93IFByaW9yaXR5XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgdGFza051bWJlciwgZ2V0VGFza051bWJlciB9XG4gIH1cbiAgdGl0bGUgPSBuZXdUaXRsZTtcblxuICBmdW5jdGlvbiBnZXRUYXNrTnVtYmVyKCkge1xuICAgIHJldHVybiB0YXNrTnVtYmVyXG4gIH1cblxuICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCB0YXNrTnVtYmVyLCBnZXRUYXNrTnVtYmVyIH1cbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHsgXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnRQcm9qTmFtZVwiKSkge1xuICAgIHByb2plY3RzRmFjdG9yeS51cGRhdGVDdXJyZW50UHJvamVjdE5hbWUoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnRQcm9qTmFtZVwiKSkubmFtZSlcbiAgfVxuXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvdGFsUHJvamVjdHNUcmFja2VyXCIpKSB7XG4gICAgcHJvamVjdHNGYWN0b3J5LnVwZGF0ZVByb2plY3RDb3VudGVyKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b3RhbFByb2plY3RzVHJhY2tlclwiKSkudG90YWwpO1xuICB9XG5cbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza0NvdW50ZXJcIikpIHtcbiAgICB0YXNrQ291bnRlci51cGRhdGVDb3VudChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza0NvdW50ZXJcIikpLmNvdW50KVxuICB9XG4gIFxuICAvLyByZW5kZXIgcHJvamVjdHMgaWYgaXQgZXhpc3RzIGluIGxvY2FsIHN0b3JhZ2VcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIHtcbiAgICBsZXQgY291bnRlclByb2ogPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xuICAgIGlmIChjb3VudGVyUHJvai5jdXJyZW50UHJvak51bWJlclRyYWNrZXIpIHtcbiAgICAgIHByb2plY3RzRmFjdG9yeS51cGRhdGVQcm9qZWN0TnVtYmVyKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSkuY3VycmVudFByb2pOdW1iZXJUcmFja2VyKTtcbiAgICB9IFxuXG4gICAgaWYgKE9iamVjdC5rZXlzKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSkpLmxlbmd0aCAhPT0gMSkge1xuICAgICAgYWRkVGFza0J1dHRvbigpO1xuICAgICAgbGV0IG5ld1Byb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKTtcbiAgICAgIHByb2plY3RzRmFjdG9yeS51cGRhdGVQcm9qZWN0cyhuZXdQcm9qZWN0cyk7XG4gICAgICByZW5kZXJTdG9yZWRQcm9qZWN0c0NvbnRlbnQoKTtcblxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAgIGFkZFRhc2tCdXR0b24oKTtcbiAgICAgIGRpc3BsYXlQcm9qZWN0cyhwcm9qZWN0c0ZhY3RvcnkuZ2V0UHJvamVjdE51bWJlcigpLCBcIk15IERheVwiKTtcbiAgICAgIHByb2plY3RzRmFjdG9yeS5wcm9qZWN0Q291bnRlckluY3JlYXNlKCk7XG4gICAgICBzdG9yZVRvTG9jYWxTdG9yYWdlKFwicHJvamVjdHNcIiwgcHJvamVjdHNGYWN0b3J5LmdldFByb2plY3RzKCkpO1xuICB9XG5cbiAgLy8gbG9hZCB0aGUgdGFza3MgaW4gZGlzcGxheSBpZiBpdCBleGlzdHMgaW4gbG9jYWwgc3RvcmFnZVxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc0RvbVwiKSkge1xuICAgIHJlbmRlclN0b3JlZFRhc2tDb250ZW50KCk7XG4gIH1cblxuICBjb25zdCBhZGRQcm9qQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFByb2plY3QnKTtcbiAgYWRkUHJvakJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZVByb2plY3QpO1xufSkiLCJpbXBvcnQgeyBjcmVhdGVBZGRQcm9qZWN0Rm9ybSwgb3Blbk1vZGFsLCBjbG9zZU1vZGFsLCBkaXNwbGF5UHJvamVjdHMsIGNyZWF0ZVRhc2ssIHRhc2tzRG9tLCBwcm9qZWN0c0RvbSwgdGFza0NvdW50ZXIsIGFkZFRhc2tCdXR0b24gfSBmcm9tIFwiLi9kb21cIjtcbmltcG9ydCBjcmVhdGVUb2RvIGZyb20gXCIuL2NyZWF0ZVRvZG9cIjtcbmltcG9ydCB7IHN0b3JlVG9Mb2NhbFN0b3JhZ2UsIGFkZE5ld1Rhc2tMb2NhbFN0b3JhZ2UsIGFkZE5ld1Byb2plY3RMb2NhbFN0b3JhZ2UsIHJlc2V0VGFza3NEb21Db250ZW50LCBkZWZhdWx0Q291bnRlciB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcblxuLy8gQ3JlYXRlIGEgcHJvamVjdHMgZmFjdG9yeVxuZXhwb3J0IGNvbnN0IHByb2plY3RzRmFjdG9yeSA9ICgoKSA9PiB7XG4gIGxldCBwcm9qZWN0Q291bnQgPSAwO1xuXG4gIGxldCBwcm9qZWN0cyA9IHtcbiAgICBcIjBcIjoge1wiTXkgRGF5XCI6IFtdfSxcbiAgICBcImN1cnJlbnRQcm9qTnVtYmVyVHJhY2tlclwiOiAwLFxuICB9O1xuXG4gIFxuICBsZXQgcHJvamVjdE51bWJlciA9IFwiMFwiO1xuICBcblxuICBsZXQgY3VycmVudFByb2pOYW1lID0gXCJNeSBEYXlcIjtcbiAgXG4gIGZ1bmN0aW9uIGFkZFRhc2tUb1Byb2plY3QocHJvamVjdE51bSwgcHJvamVjdE5hbWUsIHRhc2spIHtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0TmFtZSk7XG4gICAgaWYgKHByb2plY3ROdW0pIHtcbiAgICAgIHByb2plY3RzW3Byb2plY3ROdW1dW3Byb2plY3ROYW1lXS5wdXNoKHRhc2spO1xuICAgICAgYWRkTmV3VGFza0xvY2FsU3RvcmFnZShwcm9qZWN0TnVtLCBwcm9qZWN0TmFtZSwgdGFzayk7XG4gICAgfVxuICB9XG4gIFxuICBmdW5jdGlvbiBhZGRQcm9qZWN0KHByb2plY3ROdW0sIHByb2plY3ROYW1lKSB7XG4gICAgY29uc29sZS5sb2cocHJvamVjdE51bSk7XG4gICAgcHJvamVjdHNbcHJvamVjdE51bV0gPSB7W3Byb2plY3ROYW1lXTogW119O1xuICAgIHN0b3JlVG9Mb2NhbFN0b3JhZ2UoXCJwcm9qZWN0c1wiLCBwcm9qZWN0cyk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVDdXJyZW50UHJvamVjdE5hbWUobmV3TmFtZSkge1xuICAgIGN1cnJlbnRQcm9qTmFtZSA9IG5ld05hbWU7XG4gIH1cblxuICAvLyB3aGVuIGEgdXNlciBjbGlja3Mgb24gYSBwcm9qZWN0LCB1cGRhdGUgdGhlIGN1cnJlbnQgcHJvamVjdCBudW1iZXJcbiAgLy8gYW5kIGFsc28gdXBkYXRlIHRoZSBkaXNwbGF5IG9mIHRhc2tzIG1hdGNoaW5nIHRoYXQgc3BlY2lmaWMgcHJvamVjdCdzIFxuICAvL3Rhc2tzXG4gIGZ1bmN0aW9uIHNldFByb2plY3ROdW1iZXIocHJvamVjdCwgcHJvamVjdFRpdGxlTmFtZSwgcHJvamVjdENsaWNrSG9sZGVyKSB7XG4gICAgcHJvamVjdENsaWNrSG9sZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcHJvamVjdE51bWJlciA9IHByb2plY3QuZ2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QtbnVtYmVyJyk7XG4gICAgICBjdXJyZW50UHJvak5hbWUgPSBwcm9qZWN0VGl0bGVOYW1lO1xuICAgICAgc3RvcmVUb0xvY2FsU3RvcmFnZShcImN1cnJlbnRQcm9qTmFtZVwiLCB7bmFtZTogcHJvamVjdFRpdGxlTmFtZX0pXG5cbiAgICAgIHByb2plY3RzLmN1cnJlbnRQcm9qTnVtYmVyVHJhY2tlciA9IHBhcnNlSW50KHByb2plY3ROdW1iZXIpO1xuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJwcm9qZWN0c1wiKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbiAgICAgIC8vIHJlbW92ZSB0aGUgY3VycmVudCB0YXNrcyBcbiAgICAgIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2snKTtcbiAgICAgIGNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJyk7XG4gICAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFRhc2snKTtcbiAgICAgIFxuICAgICAgXG4gICAgICByZXNldFRhc2tzRG9tQ29udGVudCgpO1xuICAgICAgXG4gICAgICB0YXNrc0RvbS5yZXNldFRhc2tzKCk7XG4gICAgICBbLi4udGFza3NdLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIHRhc2sucmVtb3ZlKCk7XG4gICAgICB9KVxuICAgICAgXG4gICAgICBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XG4gICAgICBwcm9qZWN0c1twcm9qZWN0TnVtYmVyXVtwcm9qZWN0VGl0bGVOYW1lXS5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICBjcmVhdGVUYXNrKHRhc2tzQ29udGFpbmVyLCB0YXNrLCB0YXNrLnRhc2tOdW1iZXIpO1xuICAgICAgfSlcblxuICAgICAgaWYgKGFkZFRhc2tCdG4gPT09IG51bGwpIHtcbiAgICAgICAgYWRkVGFza0J1dHRvbigpO1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBnZXRQcm9qZWN0TnVtYmVyKCkge1xuICAgIHJldHVybiBwcm9qZWN0TnVtYmVyO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UHJvamVjdHMoKSB7XG4gICAgcmV0dXJuIHByb2plY3RzO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UHJvamVjdENvdW50KCkge1xuICAgIHJldHVybiBwcm9qZWN0Q291bnQ7XG4gIH1cbiAgZnVuY3Rpb24gdXBkYXRlUHJvamVjdE51bWJlcihuZXdOdW0pIHtcbiAgICBwcm9qZWN0TnVtYmVyID0gbmV3TnVtO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvamVjdENvdW50ZXJJbmNyZWFzZSgpIHtcbiAgICBwcm9qZWN0Q291bnQrKztcbiAgICBzdG9yZVRvTG9jYWxTdG9yYWdlKFwidG90YWxQcm9qZWN0c1RyYWNrZXJcIiwge3RvdGFsOiBwcm9qZWN0Q291bnR9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVByb2plY3RDb3VudGVyKG51bSkge1xuICAgIHByb2plY3RDb3VudCA9IG51bTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEN1cnJlbnRQcm9qZWN0TmFtZSgpIHtcbiAgICByZXR1cm4gY3VycmVudFByb2pOYW1lO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlUHJvamVjdHMobmV3UHJvaikge1xuICAgIHByb2plY3RzID0gbmV3UHJvajtcbiAgfVxuXG4gIHJldHVybiB7IHVwZGF0ZVByb2plY3RDb3VudGVyLCB1cGRhdGVDdXJyZW50UHJvamVjdE5hbWUsIHVwZGF0ZVByb2plY3ROdW1iZXIsICBnZXRDdXJyZW50UHJvamVjdE5hbWUsIHVwZGF0ZVByb2plY3RzLCBhZGRUYXNrVG9Qcm9qZWN0LCBhZGRQcm9qZWN0LCBnZXRQcm9qZWN0cywgZ2V0UHJvamVjdENvdW50LCBwcm9qZWN0Q291bnRlckluY3JlYXNlLCBzZXRQcm9qZWN0TnVtYmVyLCBnZXRQcm9qZWN0TnVtYmVyIH07IFxufSkoKVxuXG4vLyBNYWtlIGEgZnVuY3Rpb24gdG8gYWRkIGEgcHJvamVjdFxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoKSB7XG4gIGNyZWF0ZUFkZFByb2plY3RGb3JtKCk7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGlhbG9nJyk7XG5cbiAgb3Blbk1vZGFsKG1vZGFsKTtcblxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBmb3JtRWxlbWVudHMgPSBmb3JtLmVsZW1lbnRzO1xuXG4gICAgY29uc3QgcHJvamVjdFRpdGxlTmFtZSA9IGZvcm1FbGVtZW50cy5wcm9qZWN0TmFtZS52YWx1ZTtcblxuICAgIC8vIGNyZWF0ZSBhbmQgYXBwZW5kIHRoZSBwcm9qZWN0IHRvIHRoZSBjb250YWluZXI7XG4gICAgZGlzcGxheVByb2plY3RzKHByb2plY3RzRmFjdG9yeS5nZXRQcm9qZWN0Q291bnQoKSwgcHJvamVjdFRpdGxlTmFtZSk7XG5cbiAgICAvLyBBZGQgbmV3bHkgY3JlYXRlZCBvYmplY3QgdG8gdGhlIHByb2plY3RzIG9iamVjdCBpbiB0aGUgcHJvamVjdCBmYWN0b3J5XG4gICAgcHJvamVjdHNGYWN0b3J5LmFkZFByb2plY3QoU3RyaW5nKHByb2plY3RzRmFjdG9yeS5nZXRQcm9qZWN0Q291bnQoKSksIHByb2plY3RUaXRsZU5hbWUpO1xuXG4gICAgcHJvamVjdHNGYWN0b3J5LnByb2plY3RDb3VudGVySW5jcmVhc2UoKTtcbiAgICBjbG9zZU1vZGFsKG1vZGFsKTtcbiAgICBmb3JtLnJlbW92ZSgpO1xuICAgIG1vZGFsLnJlbW92ZSgpO1xuICB9KTtcbn0iLCJpbXBvcnQgeyBjcmVhdGVUYXNrLCB0YXNrc0RvbSwgcHJvamVjdHNEb20sIHRhc2tDb3VudGVyLCBkaXNwbGF5UHJvamVjdHMgfSBmcm9tIFwiLi9kb21cIjtcbmltcG9ydCB7IHByb2plY3RzRmFjdG9yeSB9IGZyb20gXCIuL3Byb2plY3RzXCI7XG5cbi8vIGZ1bmN0aW9uIHRvIHNhdmUgIHRvIGxvY2FsIHN0b3JhZ2UgYWZ0ZXIgbmV3IHByb2plY3QgaXMgbWFkZVxuZnVuY3Rpb24gc3RvcmVUb0xvY2FsU3RvcmFnZShwcm9wZXJ0eU5hbWUsIG9iamVjdCkge1xuICBjb25zdCBzZXJpYWxpemVkID0gSlNPTi5zdHJpbmdpZnkob2JqZWN0KTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0ocHJvcGVydHlOYW1lLCBzZXJpYWxpemVkKTtcbn1cblxuZnVuY3Rpb24gYWRkTmV3UHJvamVjdExvY2FsU3RvcmFnZShwcm9qZWN0TnVtLCBwcm9qZWN0T2JqKSB7XG4gIGxldCBkZXNlcmlhbGl6ZWQgPSBKU09OLnBhcnNlKHByb2plY3RPYmopO1xuICBkZXNlcmlhbGl6ZWRbcHJvamVjdE51bV0gPSBbXTtcbiAgXG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHByb2plY3RPYmopXG4gIGNvbnN0IHNlcmlhbGl6ZWQgPSBKU09OLnN0cmluZ2lmeShkZXNlcmlhbGl6ZWQpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIHNlcmlhbGl6ZWQpXG59IFxuXG4vLyBzYXZlIHRhc2sgdG8gbG9jYWwgc3RvcmFnZSBhZnRlciBuZXcgdGFzayBpcyBtYWRlXG5mdW5jdGlvbiBhZGROZXdUYXNrTG9jYWxTdG9yYWdlKHByb2plY3ROdW1iZXIsIHByb2plY3ROYW1lLCB0YXNrKSB7XG4gIC8vIGdldCB0aGUgcHJvamVjdHMgb2JqIGluIGxvY2FsIHN0b3JhZ2VcbiAgY29uc3Qgb2JqID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKTtcblxuICBpZiAob2JqID09PSBudWxsKSB7XG4gICAgbGV0IHByb2plY3RzID0ge1xuICAgICAgXCIwXCI6IHtcIk15IERheVwiOiBbXX1cbiAgICB9XG4gICAgbGV0IHByb2plY3RzU3RyaW5naWZpZWQgPSBKU09OLnN0cmluZ2lmeShwcm9qZWN0cyk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBwcm9qZWN0c1N0cmluZ2lmaWVkKTtcbiAgfVxuXG4gIGNvbnN0IG5ld09iaiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIik7XG4gIGNvbnN0IG5ld09ialBhcnNlZCA9IEpTT04ucGFyc2UobmV3T2JqKTtcblxuICAvLyBjb252ZXJ0IHRvIG9iamVjdCBpbiBqcyBhbmQgYWRkIHRhc2tcbiAgbmV3T2JqUGFyc2VkW3Byb2plY3ROdW1iZXJdW3Byb2plY3ROYW1lXS5wdXNoKHRhc2spOyBcblxuICAvLyBjb252ZXJ0IGJhY2sgdG8gc3RyaW5nIGFuZCBwdXQgaXQgYmFjayBpbiBsb2NhbCBzdG9yYWdlXG4gIGNvbnN0IHNlcmlhbGl6ZWQgPSBKU09OLnN0cmluZ2lmeShuZXdPYmpQYXJzZWQpO1xuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShuZXdPYmopO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIHNlcmlhbGl6ZWQpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0UHJvcGVydHkocHJvamVjdE51bWJlcikge1xuICBsZXQgb2JqID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKTtcblxuICBsZXQgZGVzZXJpYWxpemVkID0gSlNPTi5wYXJzZShvYmopO1xuXG4gIGNvbnNvbGUubG9nKHByb2plY3RzRmFjdG9yeS5nZXRQcm9qZWN0TnVtYmVyKCkpO1xuXG4gIGlmIChkZXNlcmlhbGl6ZWQpIHtcbiAgICBPYmplY3Qua2V5cyhkZXNlcmlhbGl6ZWQpLmZvckVhY2gocHJvamVjdHMgPT4ge1xuICAgICAgaWYgKHByb2plY3RzID09PSBwcm9qZWN0TnVtYmVyKSB7XG4gICAgICAgIGRlbGV0ZSBkZXNlcmlhbGl6ZWRbcHJvamVjdE51bWJlcl07XG4gICAgICB9XG4gICAgfSlcbiAgfVxuICAgIFxuICBsZXQgc2VyaWFsaXplZCA9IEpTT04uc3RyaW5naWZ5KGRlc2VyaWFsaXplZCk7XG5cbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0ob2JqKTtcblxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIHNlcmlhbGl6ZWQpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJTdG9yZWRUYXNrQ29udGVudCgpIHtcbiAgY29uc3QgdGFza3MgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzRG9tXCIpO1xuICBjb25zdCB0YXNrc1BhcnNlZCA9IEpTT04ucGFyc2UodGFza3MpO1xuICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJyk7XG4gIFxuICB0YXNrc1BhcnNlZFtcInRhc2tJbkRpc3BsYXlcIl0uZm9yRWFjaCh0YXNrID0+IHtcbiAgICBjcmVhdGVUYXNrKHRhc2tDb250YWluZXIsIHRhc2ssIHRhc2sudGFza051bWJlcik7XG4gIH0pXG59XG5cbmZ1bmN0aW9uIHJlbmRlclN0b3JlZFByb2plY3RzQ29udGVudCgpIHtcbiAgY29uc3QgcHJvamVjdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpO1xuICBjb25zdCBwcm9qZWN0c1BhcnNlZCA9IEpTT04ucGFyc2UocHJvamVjdHMpO1xuXG4gIGNvbnN0IHByb2plY3RzRG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImxpXCIpO1xuXG4gIFsuLi5wcm9qZWN0c0RvbV0uZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICBwcm9qZWN0LnJlbW92ZSgpO1xuICB9KVxuXG4gIE9iamVjdC5rZXlzKHByb2plY3RzUGFyc2VkKS5mb3JFYWNoKHByb2plY3RzS2V5ID0+IHtcbiAgICBPYmplY3Qua2V5cyhwcm9qZWN0c1BhcnNlZFtwcm9qZWN0c0tleV0pLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGRpc3BsYXlQcm9qZWN0cyhwcm9qZWN0c0tleSwga2V5KTtcbiAgICB9KVxuICB9KVxuXG59XG5cbmZ1bmN0aW9uIHJlc2V0VGFza3NEb21Db250ZW50KCkge1xuICBsZXQgdGFza3NEb20gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzRG9tXCIpO1xuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0YXNrc0RvbSk7XG5cbiAgbGV0IHRhc2tzID0ge1xuICAgIFwidGFza0luRGlzcGxheVwiOiBbXSxcbiAgfVxuXG4gIGxldCB0YXNrc1NlcmlhbGl6ZWQgPSBKU09OLnN0cmluZ2lmeSh0YXNrcyk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NEb21cIiwgdGFza3NTZXJpYWxpemVkKTtcbn1cbmV4cG9ydCB7IHJlc2V0VGFza3NEb21Db250ZW50LCBkZWxldGVQcm9qZWN0UHJvcGVydHksIHN0b3JlVG9Mb2NhbFN0b3JhZ2UsIGFkZE5ld1Rhc2tMb2NhbFN0b3JhZ2UsIGFkZE5ld1Byb2plY3RMb2NhbFN0b3JhZ2UsIHJlbmRlclN0b3JlZFRhc2tDb250ZW50LCByZW5kZXJTdG9yZWRQcm9qZWN0c0NvbnRlbnQgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==