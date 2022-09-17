/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./titleFont.ttf */ "./src/titleFont.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./mainFont.ttf */ "./src/mainFont.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: titleFont;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@font-face {\n    font-family: mainFont;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\nbody {\n    padding: 0px;\n    margin: 0px;\n    font-family: 'mainFont';\n}\n\nheader {\n    height: 80px;\n    background-color: #388087;\n    font-family: 'titleFont';\n    font-size: 3em;\n    display: flex;\n    align-items: center;\n    padding-left: 15px;\n}\n\nbutton {\n    border: none;\n    height: 30px;\n}\n\n#centre {\n    display: flex;\n    height: 100%;\n    background-color: #F6F6F2;\n}\n\n#sidebar {\n    width: 330px;\n    background-color: #bbe1ea;\n    height: max(calc(100vh - 120px), 530px);\n    padding: 10px;\n}\n\n#main {\n    padding: 20px;\n    overflow: scroll;\n}\n\n#pTitle {\n    width: 10px;\n}\n\nfooter {\n    height: 20px;\n    background-color: #388087\n}\n\n#headers,\n.toDo,\n#row {\n    display: flex;\n    width: calc(100vw - 465px);\n    min-width: 700px;\n    border-bottom-style: solid;\n    border-color: #888;\n}\n\n#headers,\n#row {\n    width: calc(100vw - 458px);\n}\n\n#row {\n    background-color: #eeeee3;\n    height: 35px;\n    display: flex;\n    flex-shrink: 0;\n}\n\nselect {\n    background-color: #F6F6F2;\n    border-radius: 4px;\n}\n\n.toDo {\n    background-color: #eeeee3;\n    padding: 4px;\n    flex-shrink: 0;\n}\n\n.toDo > div {\n    margin: 2px;\n    border-right-style: solid;\n    border-color: #888;\n}\n\n#writeToDoButton {\n    margin-left: auto;\n    margin-right: 4px;\n    margin-top: 2px;\n    height: 30px;\n}\n\ninput[type=\"checkbox\"] {\n    appearance: none;\n    position: relative;\n    height: 24px;\n    width: 24px;\n    min-width: 24px;\n    border-width: 2px;\n    border-style: solid;\n    border-radius: 2px;\n    border-color: #888;\n    color: #000000;\n}\n\ninput[type=\"checkbox\"]::before {\n    content: \"✔\";\n    position: absolute;\n    font-size: 1.3em;\n    right: 1px;\n    top: -1px;\n    visibility: hidden;\n  }\n\n  input[type=\"checkbox\"]:hover::before {\n    visibility: visible;\n    color: #888;\n    opacity: 0.5;\n}\n\n  input[type=\"checkbox\"]:checked::before {\n    visibility: visible;\n}\n\n#title,\n#description,\n#dueDate,\n#priority {\n    border-style: none;\n    background-color: #eeeee3;\n    height: 30px;\n    margin: 2px;\n    font-size: 1em;\n    font-family: mainFont;\n}\n\n.toDoTitle,\n#titleHeader,\n#title {\n    width: 15vw;\n    min-width: 100px;\n}\n\n#titleHeader {\n    margin: 4px;\n    margin-left: 37px;\n}\n\n#title {\n    margin-left: 30px;\n}\n\n.toDoDescription,\n#descriptionHeader,\n#description {\n    width: 35vw;\n    min-width: 180px;\n}\n\n#dueHeader {\n    margin: 4px;\n}\n\n.toDoDue,\n#dueHeader,\n#dueDate {\n    width: 8vw;\n    min-width: 90px;\n}\n\n#priorityHeader {\n    margin-right: 57px;\n    margin-left: auto;\n}\n\n.toDoPriority {\n    margin-left: auto;\n}\n\n#newProject:hover {\n    fill: grey;\n}\n\n#projectFields {\n    display: flex;\n    border-radius: 5px;\n    overflow: clip;\n    border-style: solid;\n    border-width: 2px;\n    border-color: #888;\n    margin-top: 5px;\n}\n\n#projectFields > input {\n    background-color: #96c7d4;\n    border-style: none;\n    border-right-style: solid;\n    border-width: 2px;\n    border-color: #76979f;\n    height: 20px;\n    padding: 5px;\n}\n\n#pTitle {\n    width: 6em;\n}\n\n#pDescription {\n    width: 12em\n}\n\n#defaultProjects,\n#writtenProjects {\n    background-color: #93bcc6;\n    border-radius: 22px;\n    padding: 15px;\n    border-width: 2px;\n    border-style: solid;\n    border-color: #888;\n    margin-bottom: 10px;\n}\n\n#defaultProjects > .project {\n    padding: 10px;\n    font-size: 1.2em;\n}\n\n#writtenProjects {\n    height: max(calc(100vh - 450px), 200px);\n    overflow: scroll;\n}\n.project {\n    background-color: #93bcc6;\n    border-width: 2px;\n    display: flex;\n    font-size: 1.1em;\n    padding: 10px;\n    margin-right: -15px;\n    display: flex;\n    justify-content: space-between;\n}\n\n.project:hover {\n    background-color: #76979f;\n}\n\n#projectsTitle {\n    display: flex;\n    justify-content: center;\n    font-size: 1.5em;\n    background-color: #93bcc6;\n}\n \n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: #eeeee3; /* 15% from the top and centered */\n    padding: 20px;\n    border: 2px solid #888;\n    border-radius: 20px;\n    width: 400px;\n    height: 350px\n}\n\n.close {\n    color: #aaa;\n    float: right;\n    font-size: 28px;\n    font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n    color: black;\n    text-decoration: none;\n    cursor: pointer;\n}\n\n.modalTitle,\n.modalDescription,\n.modalNotes,\n.modalDueDate,\n.modalPriority,\n.editTitle,\n.editDescription,\n.editNotes,\n.editDue,\n.editPriority {\n    border: 2px solid #888;\n    border-radius: 5px;\n    margin: 2px;\n    padding: 2px;\n}\n\n.modalTitle,\n.editTitle {\n    width: 300px;\n}\n\n.modalNotes,\n.editNotes {\n    height: 100px;\n    overflow: auto;\n}\n\n.modalDueDate,\n.editDue {\n    width: 120px;\n}\n\n.modalPriority,\n.editPriority {\n    width: 90px;\n}\n\n.editButton {\n    margin-left: 380px;\n}\n\n.editTitle,\n.editDescription,\n.editNotes,\n.editDue,\n.editPriority {\n    font-size: 1em;\n    font-family: mainFont;\n    background-color: #eeeee3;\n}\n\n.editDescription,\n.editNotes {\n    width: calc(100% - 12px);\n}\n\n.editNotes {\n    margin-bottom: 0px;\n}\n\n.save {\n    float: right;\n    margin-top: 25px;\n}\n\n.newToDo {\n    height: 20px;\n    margin-left: 5px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: titleFont;\n    src: url('./titleFont.ttf');\n}\n\n@font-face {\n    font-family: mainFont;\n    src: url('./mainFont.ttf');\n}\n\nbody {\n    padding: 0px;\n    margin: 0px;\n    font-family: 'mainFont';\n}\n\nheader {\n    height: 80px;\n    background-color: #388087;\n    font-family: 'titleFont';\n    font-size: 3em;\n    display: flex;\n    align-items: center;\n    padding-left: 15px;\n}\n\nbutton {\n    border: none;\n    height: 30px;\n}\n\n#centre {\n    display: flex;\n    height: 100%;\n    background-color: #F6F6F2;\n}\n\n#sidebar {\n    width: 330px;\n    background-color: #bbe1ea;\n    height: max(calc(100vh - 120px), 530px);\n    padding: 10px;\n}\n\n#main {\n    padding: 20px;\n    overflow: scroll;\n}\n\n#pTitle {\n    width: 10px;\n}\n\nfooter {\n    height: 20px;\n    background-color: #388087\n}\n\n#headers,\n.toDo,\n#row {\n    display: flex;\n    width: calc(100vw - 465px);\n    min-width: 700px;\n    border-bottom-style: solid;\n    border-color: #888;\n}\n\n#headers,\n#row {\n    width: calc(100vw - 458px);\n}\n\n#row {\n    background-color: #eeeee3;\n    height: 35px;\n    display: flex;\n    flex-shrink: 0;\n}\n\nselect {\n    background-color: #F6F6F2;\n    border-radius: 4px;\n}\n\n.toDo {\n    background-color: #eeeee3;\n    padding: 4px;\n    flex-shrink: 0;\n}\n\n.toDo > div {\n    margin: 2px;\n    border-right-style: solid;\n    border-color: #888;\n}\n\n#writeToDoButton {\n    margin-left: auto;\n    margin-right: 4px;\n    margin-top: 2px;\n    height: 30px;\n}\n\ninput[type=\"checkbox\"] {\n    appearance: none;\n    position: relative;\n    height: 24px;\n    width: 24px;\n    min-width: 24px;\n    border-width: 2px;\n    border-style: solid;\n    border-radius: 2px;\n    border-color: #888;\n    color: #000000;\n}\n\ninput[type=\"checkbox\"]::before {\n    content: \"✔\";\n    position: absolute;\n    font-size: 1.3em;\n    right: 1px;\n    top: -1px;\n    visibility: hidden;\n  }\n\n  input[type=\"checkbox\"]:hover::before {\n    visibility: visible;\n    color: #888;\n    opacity: 0.5;\n}\n\n  input[type=\"checkbox\"]:checked::before {\n    visibility: visible;\n}\n\n#title,\n#description,\n#dueDate,\n#priority {\n    border-style: none;\n    background-color: #eeeee3;\n    height: 30px;\n    margin: 2px;\n    font-size: 1em;\n    font-family: mainFont;\n}\n\n.toDoTitle,\n#titleHeader,\n#title {\n    width: 15vw;\n    min-width: 100px;\n}\n\n#titleHeader {\n    margin: 4px;\n    margin-left: 37px;\n}\n\n#title {\n    margin-left: 30px;\n}\n\n.toDoDescription,\n#descriptionHeader,\n#description {\n    width: 35vw;\n    min-width: 180px;\n}\n\n#dueHeader {\n    margin: 4px;\n}\n\n.toDoDue,\n#dueHeader,\n#dueDate {\n    width: 8vw;\n    min-width: 90px;\n}\n\n#priorityHeader {\n    margin-right: 57px;\n    margin-left: auto;\n}\n\n.toDoPriority {\n    margin-left: auto;\n}\n\n#newProject:hover {\n    fill: grey;\n}\n\n#projectFields {\n    display: flex;\n    border-radius: 5px;\n    overflow: clip;\n    border-style: solid;\n    border-width: 2px;\n    border-color: #888;\n    margin-top: 5px;\n}\n\n#projectFields > input {\n    background-color: #96c7d4;\n    border-style: none;\n    border-right-style: solid;\n    border-width: 2px;\n    border-color: #76979f;\n    height: 20px;\n    padding: 5px;\n}\n\n#pTitle {\n    width: 6em;\n}\n\n#pDescription {\n    width: 12em\n}\n\n#defaultProjects,\n#writtenProjects {\n    background-color: #93bcc6;\n    border-radius: 22px;\n    padding: 15px;\n    border-width: 2px;\n    border-style: solid;\n    border-color: #888;\n    margin-bottom: 10px;\n}\n\n#defaultProjects > .project {\n    padding: 10px;\n    font-size: 1.2em;\n}\n\n#writtenProjects {\n    height: max(calc(100vh - 450px), 200px);\n    overflow: scroll;\n}\n.project {\n    background-color: #93bcc6;\n    border-width: 2px;\n    display: flex;\n    font-size: 1.1em;\n    padding: 10px;\n    margin-right: -15px;\n    display: flex;\n    justify-content: space-between;\n}\n\n.project:hover {\n    background-color: #76979f;\n}\n\n#projectsTitle {\n    display: flex;\n    justify-content: center;\n    font-size: 1.5em;\n    background-color: #93bcc6;\n}\n \n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: #eeeee3; /* 15% from the top and centered */\n    padding: 20px;\n    border: 2px solid #888;\n    border-radius: 20px;\n    width: 400px;\n    height: 350px\n}\n\n.close {\n    color: #aaa;\n    float: right;\n    font-size: 28px;\n    font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n    color: black;\n    text-decoration: none;\n    cursor: pointer;\n}\n\n.modalTitle,\n.modalDescription,\n.modalNotes,\n.modalDueDate,\n.modalPriority,\n.editTitle,\n.editDescription,\n.editNotes,\n.editDue,\n.editPriority {\n    border: 2px solid #888;\n    border-radius: 5px;\n    margin: 2px;\n    padding: 2px;\n}\n\n.modalTitle,\n.editTitle {\n    width: 300px;\n}\n\n.modalNotes,\n.editNotes {\n    height: 100px;\n    overflow: auto;\n}\n\n.modalDueDate,\n.editDue {\n    width: 120px;\n}\n\n.modalPriority,\n.editPriority {\n    width: 90px;\n}\n\n.editButton {\n    margin-left: 380px;\n}\n\n.editTitle,\n.editDescription,\n.editNotes,\n.editDue,\n.editPriority {\n    font-size: 1em;\n    font-family: mainFont;\n    background-color: #eeeee3;\n}\n\n.editDescription,\n.editNotes {\n    width: calc(100% - 12px);\n}\n\n.editNotes {\n    margin-bottom: 0px;\n}\n\n.save {\n    float: right;\n    margin-top: 25px;\n}\n\n.newToDo {\n    height: 20px;\n    margin-left: 5px;\n}"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultOptions": () => (/* binding */ getDefaultOptions),
/* harmony export */   "setDefaultOptions": () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/roundingMethods/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/roundingMethods/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRoundingMethod": () => (/* binding */ getRoundingMethod)
/* harmony export */ });
var roundingMap = {
  ceil: Math.ceil,
  round: Math.round,
  floor: Math.floor,
  trunc: function (value) {
    return value < 0 ? Math.ceil(value) : Math.floor(value);
  } // Math.trunc is not supported by IE

};
var defaultRoundingMethod = 'trunc';
function getRoundingMethod(method) {
  return method ? roundingMap[method] : roundingMap[defaultRoundingMethod];
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */

function addDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  date.setDate(date.getDate() + amount);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/constants/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "daysInWeek": () => (/* binding */ daysInWeek),
/* harmony export */   "daysInYear": () => (/* binding */ daysInYear),
/* harmony export */   "maxTime": () => (/* binding */ maxTime),
/* harmony export */   "millisecondsInHour": () => (/* binding */ millisecondsInHour),
/* harmony export */   "millisecondsInMinute": () => (/* binding */ millisecondsInMinute),
/* harmony export */   "millisecondsInSecond": () => (/* binding */ millisecondsInSecond),
/* harmony export */   "minTime": () => (/* binding */ minTime),
/* harmony export */   "minutesInHour": () => (/* binding */ minutesInHour),
/* harmony export */   "monthsInQuarter": () => (/* binding */ monthsInQuarter),
/* harmony export */   "monthsInYear": () => (/* binding */ monthsInYear),
/* harmony export */   "quartersInYear": () => (/* binding */ quartersInYear),
/* harmony export */   "secondsInDay": () => (/* binding */ secondsInDay),
/* harmony export */   "secondsInHour": () => (/* binding */ secondsInHour),
/* harmony export */   "secondsInMinute": () => (/* binding */ secondsInMinute),
/* harmony export */   "secondsInMonth": () => (/* binding */ secondsInMonth),
/* harmony export */   "secondsInQuarter": () => (/* binding */ secondsInQuarter),
/* harmony export */   "secondsInWeek": () => (/* binding */ secondsInWeek),
/* harmony export */   "secondsInYear": () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */
var daysInWeek = 7;
/**
 * Days in 1 year
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 *
 * @name daysInYear
 * @constant
 * @type {number}
 * @default
 */

var daysInYear = 365.2425;
/**
 * Maximum allowed time.
 *
 * @name maxTime
 * @constant
 * @type {number}
 * @default
 */

var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;
/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInMinute = 60000;
/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInHour = 3600000;
/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInSecond = 1000;
/**
 * Minimum allowed time.
 *
 * @name minTime
 * @constant
 * @type {number}
 * @default
 */

var minTime = -maxTime;
/**
 * Minutes in 1 hour
 *
 * @name minutesInHour
 * @constant
 * @type {number}
 * @default
 */

var minutesInHour = 60;
/**
 * Months in 1 quarter
 *
 * @name monthsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var monthsInQuarter = 3;
/**
 * Months in 1 year
 *
 * @name monthsInYear
 * @constant
 * @type {number}
 * @default
 */

var monthsInYear = 12;
/**
 * Quarters in 1 year
 *
 * @name quartersInYear
 * @constant
 * @type {number}
 * @default
 */

var quartersInYear = 4;
/**
 * Seconds in 1 hour
 *
 * @name secondsInHour
 * @constant
 * @type {number}
 * @default
 */

var secondsInHour = 3600;
/**
 * Seconds in 1 minute
 *
 * @name secondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var secondsInMinute = 60;
/**
 * Seconds in 1 day
 *
 * @name secondsInDay
 * @constant
 * @type {number}
 * @default
 */

var secondsInDay = secondsInHour * 24;
/**
 * Seconds in 1 week
 *
 * @name secondsInWeek
 * @constant
 * @type {number}
 * @default
 */

var secondsInWeek = secondsInDay * 7;
/**
 * Seconds in 1 year
 *
 * @name secondsInYear
 * @constant
 * @type {number}
 * @default
 */

var secondsInYear = secondsInDay * daysInYear;
/**
 * Seconds in 1 month
 *
 * @name secondsInMonth
 * @constant
 * @type {number}
 * @default
 */

var secondsInMonth = secondsInYear / 12;
/**
 * Seconds in 1 quarter
 *
 * @name secondsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var secondsInQuarter = secondsInMonth * 3;

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInCalendarDays/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInCalendarDays/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInCalendarDays)
/* harmony export */ });
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



var MILLISECONDS_IN_DAY = 86400000;
/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar days
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */

function differenceInCalendarDays(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var startOfDayLeft = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var startOfDayRight = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var timestampLeft = startOfDayLeft.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(startOfDayLeft);
  var timestampRight = startOfDayRight.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(startOfDayRight); // Round the number of days to the nearest integer
  // because the number of milliseconds in a day is not constant
  // (e.g. it's different in the day of the daylight saving time clock shift)

  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInCalendarMonths/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInCalendarMonths/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInCalendarMonths)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name differenceInCalendarMonths
 * @category Month Helpers
 * @summary Get the number of calendar months between the given dates.
 *
 * @description
 * Get the number of calendar months between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar months
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInCalendarMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 8
 */

function differenceInCalendarMonths(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();
  var monthDiff = dateLeft.getMonth() - dateRight.getMonth();
  return yearDiff * 12 + monthDiff;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInCalendarQuarters/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInCalendarQuarters/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInCalendarQuarters)
/* harmony export */ });
/* harmony import */ var _getQuarter_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../getQuarter/index.js */ "./node_modules/date-fns/esm/getQuarter/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name differenceInCalendarQuarters
 * @category Quarter Helpers
 * @summary Get the number of calendar quarters between the given dates.
 *
 * @description
 * Get the number of calendar quarters between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar quarters
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar quarters are between 31 December 2013 and 2 July 2014?
 * const result = differenceInCalendarQuarters(
 *   new Date(2014, 6, 2),
 *   new Date(2013, 11, 31)
 * )
 * //=> 3
 */

function differenceInCalendarQuarters(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();
  var quarterDiff = (0,_getQuarter_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dateLeft) - (0,_getQuarter_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dateRight);
  return yearDiff * 4 + quarterDiff;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInCalendarWeeks/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInCalendarWeeks/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInCalendarWeeks)
/* harmony export */ });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



var MILLISECONDS_IN_WEEK = 604800000;
/**
 * @name differenceInCalendarWeeks
 * @category Week Helpers
 * @summary Get the number of calendar weeks between the given dates.
 *
 * @description
 * Get the number of calendar weeks between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Number} the number of calendar weeks
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // How many calendar weeks are between 5 July 2014 and 20 July 2014?
 * const result = differenceInCalendarWeeks(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 6, 5)
 * )
 * //=> 3
 *
 * @example
 * // If the week starts on Monday,
 * // how many calendar weeks are between 5 July 2014 and 20 July 2014?
 * const result = differenceInCalendarWeeks(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 6, 5),
 *   { weekStartsOn: 1 }
 * )
 * //=> 2
 */

function differenceInCalendarWeeks(dirtyDateLeft, dirtyDateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var startOfWeekLeft = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft, options);
  var startOfWeekRight = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight, options);
  var timestampLeft = startOfWeekLeft.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(startOfWeekLeft);
  var timestampRight = startOfWeekRight.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(startOfWeekRight); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_WEEK);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInCalendarYears/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInCalendarYears/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInCalendarYears)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name differenceInCalendarYears
 * @category Year Helpers
 * @summary Get the number of calendar years between the given dates.
 *
 * @description
 * Get the number of calendar years between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar years
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar years are between 31 December 2013 and 11 February 2015?
 * const result = differenceInCalendarYears(
 *   new Date(2015, 1, 11),
 *   new Date(2013, 11, 31)
 * )
 * //=> 2
 */

function differenceInCalendarYears(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeft.getFullYear() - dateRight.getFullYear();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInHours/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInHours/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInHours)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ "./node_modules/date-fns/esm/constants/index.js");
/* harmony import */ var _differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../differenceInMilliseconds/index.js */ "./node_modules/date-fns/esm/differenceInMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/roundingMethods/index.js */ "./node_modules/date-fns/esm/_lib/roundingMethods/index.js");




/**
 * @name differenceInHours
 * @category Hour Helpers
 * @summary Get the number of hours between the given dates.
 *
 * @description
 * Get the number of hours between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @param {Object} [options] - an object with options.
 * @param {String} [options.roundingMethod='trunc'] - a rounding method (`ceil`, `floor`, `round` or `trunc`)
 * @returns {Number} the number of hours
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many hours are between 2 July 2014 06:50:00 and 2 July 2014 19:00:00?
 * const result = differenceInHours(
 *   new Date(2014, 6, 2, 19, 0),
 *   new Date(2014, 6, 2, 6, 50)
 * )
 * //=> 12
 */

function differenceInHours(dateLeft, dateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var diff = (0,_differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateLeft, dateRight) / _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour;
  return (0,_lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_3__.getRoundingMethod)(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInMilliseconds/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInMilliseconds/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInMilliseconds)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name differenceInMilliseconds
 * @category Millisecond Helpers
 * @summary Get the number of milliseconds between the given dates.
 *
 * @description
 * Get the number of milliseconds between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of milliseconds
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many milliseconds are between
 * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
 * const result = differenceInMilliseconds(
 *   new Date(2014, 6, 2, 12, 30, 21, 700),
 *   new Date(2014, 6, 2, 12, 30, 20, 600)
 * )
 * //=> 1100
 */

function differenceInMilliseconds(dateLeft, dateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateLeft).getTime() - (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateRight).getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInMinutes/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInMinutes/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInMinutes)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ "./node_modules/date-fns/esm/constants/index.js");
/* harmony import */ var _differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../differenceInMilliseconds/index.js */ "./node_modules/date-fns/esm/differenceInMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/roundingMethods/index.js */ "./node_modules/date-fns/esm/_lib/roundingMethods/index.js");




/**
 * @name differenceInMinutes
 * @category Minute Helpers
 * @summary Get the number of minutes between the given dates.
 *
 * @description
 * Get the signed number of full (rounded towards 0) minutes between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @param {Object} [options] - an object with options.
 * @param {String} [options.roundingMethod='trunc'] - a rounding method (`ceil`, `floor`, `round` or `trunc`)
 * @returns {Number} the number of minutes
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many minutes are between 2 July 2014 12:07:59 and 2 July 2014 12:20:00?
 * const result = differenceInMinutes(
 *   new Date(2014, 6, 2, 12, 20, 0),
 *   new Date(2014, 6, 2, 12, 7, 59)
 * )
 * //=> 12
 *
 * @example
 * // How many minutes are between 10:01:59 and 10:00:00
 * const result = differenceInMinutes(
 *   new Date(2000, 0, 1, 10, 0, 0),
 *   new Date(2000, 0, 1, 10, 1, 59)
 * )
 * //=> -1
 */

function differenceInMinutes(dateLeft, dateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var diff = (0,_differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateLeft, dateRight) / _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute;
  return (0,_lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_3__.getRoundingMethod)(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInSeconds/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInSeconds/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInSeconds)
/* harmony export */ });
/* harmony import */ var _differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../differenceInMilliseconds/index.js */ "./node_modules/date-fns/esm/differenceInMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/roundingMethods/index.js */ "./node_modules/date-fns/esm/_lib/roundingMethods/index.js");



/**
 * @name differenceInSeconds
 * @category Second Helpers
 * @summary Get the number of seconds between the given dates.
 *
 * @description
 * Get the number of seconds between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @param {Object} [options] - an object with options.
 * @param {String} [options.roundingMethod='trunc'] - a rounding method (`ceil`, `floor`, `round` or `trunc`)
 * @returns {Number} the number of seconds
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many seconds are between
 * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
 * const result = differenceInSeconds(
 *   new Date(2014, 6, 2, 12, 30, 20, 0),
 *   new Date(2014, 6, 2, 12, 30, 7, 999)
 * )
 * //=> 12
 */

function differenceInSeconds(dateLeft, dateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var diff = (0,_differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateLeft, dateRight) / 1000;
  return (0,_lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_2__.getRoundingMethod)(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/endOfDay/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfDay/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ endOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name endOfDay
 * @category Day Helpers
 * @summary Return the end of a day for the given date.
 *
 * @description
 * Return the end of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a day for 2 September 2014 11:55:00:
 * const result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 23:59:59.999
 */

function endOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/endOfToday/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfToday/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ endOfToday)
/* harmony export */ });
/* harmony import */ var _endOfDay_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../endOfDay/index.js */ "./node_modules/date-fns/esm/endOfDay/index.js");

/**
 * @name endOfToday
 * @category Day Helpers
 * @summary Return the end of today.
 * @pure false
 *
 * @description
 * Return the end of today.
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @returns {Date} the end of today
 *
 * @example
 * // If today is 6 October 2014:
 * const result = endOfToday()
 * //=> Mon Oct 6 2014 23:59:59.999
 */

function endOfToday() {
  return (0,_endOfDay_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/getQuarter/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/getQuarter/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getQuarter)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name getQuarter
 * @category Quarter Helpers
 * @summary Get the year quarter of the given date.
 *
 * @description
 * Get the year quarter of the given date.
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the quarter
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which quarter is 2 July 2014?
 * const result = getQuarter(new Date(2014, 6, 2))
 * //=> 3
 */

function getQuarter(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var quarter = Math.floor(date.getMonth() / 3) + 1;
  return quarter;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/intlFormatDistance/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/intlFormatDistance/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ intlFormatDistance)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/index.js */ "./node_modules/date-fns/esm/constants/index.js");
/* harmony import */ var _differenceInCalendarDays_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../differenceInCalendarDays/index.js */ "./node_modules/date-fns/esm/differenceInCalendarDays/index.js");
/* harmony import */ var _differenceInCalendarMonths_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../differenceInCalendarMonths/index.js */ "./node_modules/date-fns/esm/differenceInCalendarMonths/index.js");
/* harmony import */ var _differenceInCalendarQuarters_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../differenceInCalendarQuarters/index.js */ "./node_modules/date-fns/esm/differenceInCalendarQuarters/index.js");
/* harmony import */ var _differenceInCalendarWeeks_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../differenceInCalendarWeeks/index.js */ "./node_modules/date-fns/esm/differenceInCalendarWeeks/index.js");
/* harmony import */ var _differenceInCalendarYears_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../differenceInCalendarYears/index.js */ "./node_modules/date-fns/esm/differenceInCalendarYears/index.js");
/* harmony import */ var _differenceInHours_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../differenceInHours/index.js */ "./node_modules/date-fns/esm/differenceInHours/index.js");
/* harmony import */ var _differenceInMinutes_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../differenceInMinutes/index.js */ "./node_modules/date-fns/esm/differenceInMinutes/index.js");
/* harmony import */ var _differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../differenceInSeconds/index.js */ "./node_modules/date-fns/esm/differenceInSeconds/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");












/**
 * @name intlFormatDistance
 * @category Common Helpers
 * @summary Formats distance between two dates in a human-readable format
 * @description
 * The function calculates the difference between two dates and formats it as a human-readable string.
 *
 * The function will pick the most appropriate unit depending on the distance between dates. For example, if the distance is a few hours, it might return `x hours`. If the distance is a few months, it might return `x months`.
 *
 * You can also specify a unit to force using it regardless of the distance to get a result like `123456 hours`.
 *
 * See the table below for the unit picking logic:
 *
 * | Distance between dates | Result (past)  | Result (future) |
 * | ---------------------- | -------------- | --------------- |
 * | 0 seconds              | now            | now             |
 * | 1-59 seconds           | X seconds ago  | in X seconds    |
 * | 1-59 minutes           | X minutes ago  | in X minutes    |
 * | 1-23 hours             | X hours ago    | in X hours      |
 * | 1 day                  | yesterday      | tomorrow        |
 * | 2-6 days               | X days ago     | in X days       |
 * | 7 days                 | last week      | next week       |
 * | 8 days-1 month         | X weeks ago    | in X weeks      |
 * | 1 month                | last month     | next month      |
 * | 2-3 months             | X months ago   | in X months     |
 * | 1 quarter              | last quarter   | next quarter    |
 * | 2-3 quarters           | X quarters ago | in X quarters   |
 * | 1 year                 | last year      | next year       |
 * | 2+ years               | X years ago    | in X years      |
 *
 * @param {Date|Number} date - the date
 * @param {Date|Number} baseDate - the date to compare with.
 * @param {Object} [options] - an object with options.
 * @param {String} [options.unit] - formats the distance with the given unit ('year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second').
 * @param {String|String[]} [options.locale] - the locale to use.
 * @param {String} [options.localeMatcher='best fit'] - the locale matching algorithm to use. Other value: 'lookup'.
 * See MDN for details [Locale identification and negotiation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation)
 * @param {String} [options.numeric='auto'] - the output message format. The values are 'auto' (e.g. `yesterday`), 'always'(e.g. `1 day ago`).
 * @param {String} [options.style='long'] - the length of the result. The values are: 'long' (e.g. `1 month`), 'short' (e.g. 'in 1 mo.'), 'narrow' (e.g. 'in 1 mo.').
 * The narrow one could be similar to the short one for some locales.
 * @returns {String} the distance in words according to language-sensitive relative time formatting.
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `baseDate` must not be Invalid Date
 * @throws {RangeError} `options.unit` must not be invalid Unit
 * @throws {RangeError} `options.locale` must not be invalid locale
 * @throws {RangeError} `options.localeMatcher` must not be invalid localeMatcher
 * @throws {RangeError} `options.numeric` must not be invalid numeric
 * @throws {RangeError} `options.style` must not be invalid style
 *
 * @example
 * // What is the distance between the dates when the fist date is after the second?
 * intlFormatDistance(
 *   new Date(1986, 3, 4, 11, 30, 0),
 *   new Date(1986, 3, 4, 10, 30, 0)
 * )
 * //=> 'in 1 hour'
 *
 * // What is the distance between the dates when the fist date is before the second?
 * intlFormatDistance(
 *   new Date(1986, 3, 4, 10, 30, 0),
 *   new Date(1986, 3, 4, 11, 30, 0)
 * )
 * //=> '1 hour ago'
 *
 * @example
 * // Use the unit option to force the function to output the result in quarters. Without setting it, the example would return "next year"
 * intlFormatDistance(
 *   new Date(1987, 6, 4, 10, 30, 0),
 *   new Date(1986, 3, 4, 10, 30, 0),
 *   { unit: 'quarter' }
 * )
 * //=> 'in 5 quarters'
 *
 * @example
 * // Use the locale option to get the result in Spanish. Without setting it, the example would return "in 1 hour".
 * intlFormatDistance(
 *   new Date(1986, 3, 4, 11, 30, 0),
 *   new Date(1986, 3, 4, 10, 30, 0),
 *   { locale: 'es' }
 * )
 * //=> 'dentro de 1 hora'
 *
 * @example
 * // Use the numeric option to force the function to use numeric values. Without setting it, the example would return "tomorrow".
 * intlFormatDistance(
 *   new Date(1986, 3, 5, 11, 30, 0),
 *   new Date(1986, 3, 4, 11, 30, 0),
 *   { numeric: 'always' }
 * )
 * //=> 'in 1 day'
 *
 * @example
 * // Use the style option to force the function to use short values. Without setting it, the example would return "in 2 years".
 * intlFormatDistance(
 *   new Date(1988, 3, 4, 11, 30, 0),
 *   new Date(1986, 3, 4, 11, 30, 0),
 *   { style: 'short' }
 * )
 * //=> 'in 2 yr'
 */
function intlFormatDistance(date, baseDate, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var value = 0;
  var unit;
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(baseDate);

  if (!(options !== null && options !== void 0 && options.unit)) {
    // Get the unit based on diffInSeconds calculations if no unit is specified
    var diffInSeconds = (0,_differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dateLeft, dateRight); // The smallest unit

    if (Math.abs(diffInSeconds) < _constants_index_js__WEBPACK_IMPORTED_MODULE_3__.secondsInMinute) {
      value = (0,_differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dateLeft, dateRight);
      unit = 'second';
    } else if (Math.abs(diffInSeconds) < _constants_index_js__WEBPACK_IMPORTED_MODULE_3__.secondsInHour) {
      value = (0,_differenceInMinutes_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dateLeft, dateRight);
      unit = 'minute';
    } else if (Math.abs(diffInSeconds) < _constants_index_js__WEBPACK_IMPORTED_MODULE_3__.secondsInDay && Math.abs((0,_differenceInCalendarDays_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(dateLeft, dateRight)) < 1) {
      value = (0,_differenceInHours_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dateLeft, dateRight);
      unit = 'hour';
    } else if (Math.abs(diffInSeconds) < _constants_index_js__WEBPACK_IMPORTED_MODULE_3__.secondsInWeek && (value = (0,_differenceInCalendarDays_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(dateLeft, dateRight)) && Math.abs(value) < 7) {
      unit = 'day';
    } else if (Math.abs(diffInSeconds) < _constants_index_js__WEBPACK_IMPORTED_MODULE_3__.secondsInMonth) {
      value = (0,_differenceInCalendarWeeks_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(dateLeft, dateRight);
      unit = 'week';
    } else if (Math.abs(diffInSeconds) < _constants_index_js__WEBPACK_IMPORTED_MODULE_3__.secondsInQuarter) {
      value = (0,_differenceInCalendarMonths_index_js__WEBPACK_IMPORTED_MODULE_8__["default"])(dateLeft, dateRight);
      unit = 'month';
    } else if (Math.abs(diffInSeconds) < _constants_index_js__WEBPACK_IMPORTED_MODULE_3__.secondsInYear) {
      if ((0,_differenceInCalendarQuarters_index_js__WEBPACK_IMPORTED_MODULE_9__["default"])(dateLeft, dateRight) < 4) {
        // To filter out cases that are less than a year but match 4 quarters
        value = (0,_differenceInCalendarQuarters_index_js__WEBPACK_IMPORTED_MODULE_9__["default"])(dateLeft, dateRight);
        unit = 'quarter';
      } else {
        value = (0,_differenceInCalendarYears_index_js__WEBPACK_IMPORTED_MODULE_10__["default"])(dateLeft, dateRight);
        unit = 'year';
      }
    } else {
      value = (0,_differenceInCalendarYears_index_js__WEBPACK_IMPORTED_MODULE_10__["default"])(dateLeft, dateRight);
      unit = 'year';
    }
  } else {
    // Get the value if unit is specified
    unit = options === null || options === void 0 ? void 0 : options.unit;

    if (unit === 'second') {
      value = (0,_differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dateLeft, dateRight);
    } else if (unit === 'minute') {
      value = (0,_differenceInMinutes_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dateLeft, dateRight);
    } else if (unit === 'hour') {
      value = (0,_differenceInHours_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dateLeft, dateRight);
    } else if (unit === 'day') {
      value = (0,_differenceInCalendarDays_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(dateLeft, dateRight);
    } else if (unit === 'week') {
      value = (0,_differenceInCalendarWeeks_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(dateLeft, dateRight);
    } else if (unit === 'month') {
      value = (0,_differenceInCalendarMonths_index_js__WEBPACK_IMPORTED_MODULE_8__["default"])(dateLeft, dateRight);
    } else if (unit === 'quarter') {
      value = (0,_differenceInCalendarQuarters_index_js__WEBPACK_IMPORTED_MODULE_9__["default"])(dateLeft, dateRight);
    } else if (unit === 'year') {
      value = (0,_differenceInCalendarYears_index_js__WEBPACK_IMPORTED_MODULE_10__["default"])(dateLeft, dateRight);
    }
  }

  var rtf = new Intl.RelativeTimeFormat(options === null || options === void 0 ? void 0 : options.locale, {
    localeMatcher: options === null || options === void 0 ? void 0 : options.localeMatcher,
    numeric: (options === null || options === void 0 ? void 0 : options.numeric) || 'auto',
    style: options === null || options === void 0 ? void 0 : options.style
  });
  return rtf.format(value, unit);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isPast/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isPast/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isPast)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isPast
 * @category Common Helpers
 * @summary Is the given date in the past?
 * @pure false
 *
 * @description
 * Is the given date in the past?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is in the past
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 2 July 2014 in the past?
 * const result = isPast(new Date(2014, 6, 2))
 * //=> true
 */

function isPast(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime() < Date.now();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week (and month and year)?
 *
 * @description
 * Are the given dates in the same week (and month and year)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the dates are in the same week (and month and year)
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 *
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same week?
 * const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */
function isSameWeek(dirtyDateLeft, dirtyDateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft, options);
  var dateRightStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight, options);
  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isThisWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isThisWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isThisWeek)
/* harmony export */ });
/* harmony import */ var _isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameWeek/index.js */ "./node_modules/date-fns/esm/isSameWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isThisWeek
 * @category Week Helpers
 * @summary Is the given date in the same week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same week as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @param {Object} [options] - the object with options
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the date is in this week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // If today is 25 September 2014, is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21))
 * //=> true
 *
 * @example
 * // If today is 25 September 2014 and week starts with Monday
 * // is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })
 * //=> false
 */
function isThisWeek(dirtyDate, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now(), options);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */

function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isTomorrow/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isTomorrow/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isTomorrow)
/* harmony export */ });
/* harmony import */ var _addDays_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addDays/index.js */ "./node_modules/date-fns/esm/addDays/index.js");
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isTomorrow
 * @category Day Helpers
 * @summary Is the given date tomorrow?
 * @pure false
 *
 * @description
 * Is the given date tomorrow?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is tomorrow
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 7 October 14:00:00 tomorrow?
 * const result = isTomorrow(new Date(2014, 9, 7, 14, 0))
 * //=> true
 */

function isTomorrow(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, (0,_addDays_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Date.now(), 1));
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/domManipulation.js":
/*!********************************!*\
  !*** ./src/domManipulation.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearFields": () => (/* binding */ clearFields),
/* harmony export */   "clearMain": () => (/* binding */ clearMain),
/* harmony export */   "writeHeaders": () => (/* binding */ writeHeaders),
/* harmony export */   "writeProject": () => (/* binding */ writeProject),
/* harmony export */   "writeToDo": () => (/* binding */ writeToDo),
/* harmony export */   "writeToDoButton": () => (/* binding */ writeToDoButton)
/* harmony export */ });
/* harmony import */ var _toDos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDos */ "./src/toDos.js");
/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageLoad */ "./src/pageLoad.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/intlFormatDistance/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/endOfToday/index.js");
/* harmony import */ var _icons_delete_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/delete.svg */ "./src/icons/delete.svg");
/* harmony import */ var _icons_deleteHover_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/deleteHover.svg */ "./src/icons/deleteHover.svg");
/* harmony import */ var _icons_expand_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/expand.svg */ "./src/icons/expand.svg");
/* harmony import */ var _icons_expandHover_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons/expandHover.svg */ "./src/icons/expandHover.svg");
/* harmony import */ var _icons_addTask_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons/addTask.svg */ "./src/icons/addTask.svg");
/* harmony import */ var _icons_addTaskHover_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./icons/addTaskHover.svg */ "./src/icons/addTaskHover.svg");
/* harmony import */ var _icons_edit_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./icons/edit.svg */ "./src/icons/edit.svg");
/* harmony import */ var _icons_editHover_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./icons/editHover.svg */ "./src/icons/editHover.svg");
/* harmony import */ var _icons_save_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./icons/save.svg */ "./src/icons/save.svg");
/* harmony import */ var _icons_saveHover_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./icons/saveHover.svg */ "./src/icons/saveHover.svg");
/* harmony import */ var _icons_addToDo_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./icons/addToDo.svg */ "./src/icons/addToDo.svg");
/* harmony import */ var _icons_addToDoHover_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./icons/addToDoHover.svg */ "./src/icons/addToDoHover.svg");
















//Clears all inputs

function clearFields() {
    let inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.value = '';
    });
};

// Clears main section of To-Do's and Project information

function clearMain() {
    let main = document.querySelector(`#main`);
    main.innerHTML = ''
};

// Writes a project

function writeProject(project) {
    
    let projectFields = document.querySelector('#projectFields')

    let projectContainer = document.createElement('div');
    projectContainer.setAttribute('class', 'project');
    projectContainer.setAttribute('id', project.id)
    projectContainer.addEventListener('click', () => {
        clearMain();
        project.writeToDoList();
        if (project.constructor.name == 'Project' || project.constructor.name == 'Inbox')
        project.writeNewToDoButton();
    });

    projectFields.remove();

    let title = document.createElement('div');

    title.textContent = project.title;

    projectContainer.append(title);

    if (project.constructor.name == 'Project') {
        project.storeProject()
        let deleteButton = new Image()
        deleteButton.src = _icons_delete_svg__WEBPACK_IMPORTED_MODULE_2__;
        deleteButton.addEventListener('click', () => {
            event.stopPropagation()
            projectContainer.remove();
            project.deleteProject()
            clearMain();
        })
        deleteButton.addEventListener('mouseover', () => {
            deleteButton.src = _icons_deleteHover_svg__WEBPACK_IMPORTED_MODULE_3__;
            deleteButton.addEventListener('mouseleave', () => {
                deleteButton.src = _icons_delete_svg__WEBPACK_IMPORTED_MODULE_2__;
            })
        })

        projectContainer.append(deleteButton);

    };

    if (project.constructor.name === 'Project') {
        let container = document.querySelector('#writtenProjects');
        container.append(projectContainer);
    };

    if (project.constructor.name != 'Project') {
        let container = document.querySelector('#defaultProjects');
        container.append(projectContainer);
    };

    (0,_pageLoad__WEBPACK_IMPORTED_MODULE_1__.loadProjectFields)(); // Should this be called from dom manipulation instead of page load?
}

// Writes the Project Headers that appear in the main section

function writeHeaders(project) {
    let main = document.querySelector('#main');
    let projectTitle = document.createElement('h2');
    projectTitle.textContent = project.title;
    
    let projectDescription = document.createElement('h3');
    projectDescription.textContent = project.description;

    let headers = document.createElement('div');
    headers.setAttribute('id', 'headers')

    let title = document.createElement('div');
    title.setAttribute('id', 'titleHeader');
    title.textContent = 'Title';

    let description = document.createElement('div');
    description.setAttribute('id', 'descriptionHeader');
    description.textContent = 'Description';

    let due = document.createElement('div');
    due.setAttribute('id', 'dueHeader');
    due.textContent = 'Due';

    let priority = document.createElement('div');
    priority.setAttribute('id', 'priorityHeader');
    priority.textContent = 'Priority';

    headers.append(title, description, due, priority);

    main.append(projectTitle, projectDescription, headers);
}

// Writes button that generates todo fields

function writeToDoButton(project) {
    let main = document.querySelector('#main')
    let button = new Image;
    button.src = _icons_addTask_svg__WEBPACK_IMPORTED_MODULE_6__
    button.setAttribute('id', 'writeToDoButton');
    button.textContent = 'New To Do'
    button.addEventListener('click', () => {
        writeToDoFields(project)
        button.remove();
    })

    let row = document.createElement('div');
    row.setAttribute('id', 'row');

    button.addEventListener('mouseover', () => {
        button.src = _icons_addTaskHover_svg__WEBPACK_IMPORTED_MODULE_7__;
        button.addEventListener('mouseleave', () => {
            button.src = _icons_addTask_svg__WEBPACK_IMPORTED_MODULE_6__;
        })
    })

    row.append(button);

    main.append(row);
 }

// Makes fields to write in new todo

function writeToDoFields(project) {

     let toDoFields = document.createElement('div');

     let title = document.createElement('input')
     title.setAttribute('type', 'text');
     title.setAttribute('id', 'title');
     title.setAttribute('placeholder', 'Title');

     let description = document.createElement('input')
     description.setAttribute('type', 'text');
     description.setAttribute('id', 'description');
     description.setAttribute('placeholder', 'Description');
 
     let dueDate = document.createElement('input');
     dueDate.setAttribute('type', 'date');
     dueDate.setAttribute('id', 'dueDate');
     dueDate.valueAsDate = new Date();
 
     let priority = document.createElement('select');
     priority.setAttribute('id', 'priority');

     let priorityOptions = ['Low', 'Normal', 'High']

     for (let i = 0; i < priorityOptions.length; i++) {
        let option = document.createElement('option');
        option.value = priorityOptions[i];
        option.text = priorityOptions[i];
        priority.append(option);
     };

     //Button confirms new ToDo and writes new object

     let newToDo = new Image();
     newToDo.src = _icons_addToDo_svg__WEBPACK_IMPORTED_MODULE_12__;
     newToDo.setAttribute('class', 'newToDo')
     newToDo.addEventListener('click', () => {
        let toDo = new _toDos__WEBPACK_IMPORTED_MODULE_0__.ToDo(title.value, description.value, dueDate.value, priority.value, project);
        clearMain()
        toDo.storeToDo()
        toDo.project.writeToDoList();
        toDo.project.writeNewToDoButton();
        console.log(toDo.project)
    });

    newToDo.addEventListener('mouseover', () => {
        newToDo.src = _icons_addToDoHover_svg__WEBPACK_IMPORTED_MODULE_13__;
        newToDo.addEventListener('mouseleave', () => {
            newToDo.src = _icons_addToDo_svg__WEBPACK_IMPORTED_MODULE_12__;
        })
    })
 
    toDoFields.append(title, description, dueDate, priority, newToDo);

    let row = document.querySelector(`#row`)
    row.append(toDoFields);
};

// Writes a To Do from the To Do Fields

function writeToDo(toDo) {
    let main = document.querySelector(`#main`);

    let toDoContainer = document.createElement('div');
    toDoContainer.setAttribute('class', 'toDo');

    // To Do Fields

    let done = document.createElement('input');
    done.setAttribute('type', 'checkbox');
    done.checked = toDo.done;
    done.addEventListener('change', () => {
        toDo.done = done.checked;
        toDoContainer.remove();
        toDo.updateStoredList();
    });
    done.setAttribute('class', 'toDoDone');

    let title = document.createElement('div');
    title.textContent = toDo.title;
    title.setAttribute('class', 'toDoTitle')
    
    let description = document.createElement('div');
    description.textContent = toDo.description;
    description.setAttribute('class', 'toDoDescription');
    
    let dueDate = document.createElement('div');
    dueDate.textContent = (0,date_fns__WEBPACK_IMPORTED_MODULE_14__["default"])(new Date(toDo.dueDate), (0,date_fns__WEBPACK_IMPORTED_MODULE_15__["default"])());
    dueDate.setAttribute('class', 'toDoDue');

    let priority = document.createElement('select');
    let priorityOptions = ['Low', 'Normal', 'High']
    priority.setAttribute('class', 'toDoPriority');

     for (let i = 0; i < priorityOptions.length; i++) {
        let option = document.createElement('option');
        option.value = priorityOptions[i];
        option.text = priorityOptions[i];
        priority.append(option);
     };

     priority.value = toDo.priority;

     priority.addEventListener('change', () => {
        toDo.priority = priority.value;
        toDo.updateStoredList();
     })

    // Modal Generation (Expanded To Do)
    let expandButton = new Image();
    expandButton.src = _icons_expand_svg__WEBPACK_IMPORTED_MODULE_4__;

    expandButton.addEventListener('mouseover', () => {
        expandButton.src = _icons_expandHover_svg__WEBPACK_IMPORTED_MODULE_5__;
        expandButton.addEventListener('mouseleave', () => {
            expandButton.src = _icons_expand_svg__WEBPACK_IMPORTED_MODULE_4__;
        })
    })


    let expandModal = document.createElement('div');
    expandModal.setAttribute('class', 'modal');

    let modalContent = document.createElement('div');

    function writeModalContent() {
        modalContent.innerHTML = '';

        let modalTitleHeader = document.createElement('div');
        modalTitleHeader.textContent = 'Title'

        let modalTitle = document.createElement('div');
        modalTitle.textContent = toDo.title;
        modalTitle.setAttribute('class', 'modalTitle')

        let modalDescriptionHeader = document.createElement('div');
        modalDescriptionHeader.textContent = 'Description'

        let modalDescription = document.createElement('div');
        modalDescription.textContent = toDo.description;
        modalDescription.setAttribute('class', 'modalDescription');

        let modalNotesHeader = document.createElement('div');
        modalNotesHeader.textContent = 'Notes'

        let modalNotes = document.createElement('div');
        modalNotes.textContent = toDo.notes;
        modalNotes.setAttribute('class', 'modalNotes');

        let modalDueHeader = document.createElement('div');
        modalDueHeader.textContent = 'Due Date'

        let modalDueDate = document.createElement('div');
        modalDueDate.textContent = toDo.dueDate;
        modalDueDate.setAttribute('class', 'modalDueDate');

        let modalPriorityHeader = document.createElement('div');
        modalPriorityHeader.textContent = 'Priority';

        let modalPriority = document.createElement('div');
        modalPriority.textContent = toDo.priority;
        modalPriority.setAttribute('class', 'modalPriority');

        let editButton = new Image();
        editButton.src = _icons_edit_svg__WEBPACK_IMPORTED_MODULE_8__;
        editButton.setAttribute('class', 'editButton');
        editButton.addEventListener('click', () => {
            edit()
        })

        editButton.addEventListener('mouseover', () => {
            editButton.src = _icons_editHover_svg__WEBPACK_IMPORTED_MODULE_9__;
            editButton.addEventListener('mouseleave', () => {
                editButton.src = _icons_edit_svg__WEBPACK_IMPORTED_MODULE_8__;
            })
        })

        modalContent.append(modalTitleHeader, modalTitle, modalDescriptionHeader, modalDescription, modalNotesHeader, modalNotes, modalDueHeader, modalDueDate, modalPriorityHeader, modalPriority, editButton);
    }
    
    let closeModal = new Image();
    closeModal.src = _icons_delete_svg__WEBPACK_IMPORTED_MODULE_2__
    closeModal.textContent = 'close';
    closeModal.setAttribute('class', 'close');

    closeModal.addEventListener('mouseover', () => {
        closeModal.src = _icons_deleteHover_svg__WEBPACK_IMPORTED_MODULE_3__;
        closeModal.addEventListener('mouseleave', () => {
            closeModal.src = _icons_delete_svg__WEBPACK_IMPORTED_MODULE_2__;
        })
    })

    expandModal.append(closeModal, modalContent);

    expandButton.addEventListener('click', () => {
        expandModal.style.display = 'block';
        writeModalContent();
    });

    closeModal.addEventListener('click', () => {
        expandModal.style.display = 'none';
    });

    // Only available from expanded ToDo, Allows user to change title, description and add notes

    function edit() {

        modalContent.innerHTML = '';

        let titleHeader = document.createElement('div');
        titleHeader.textContent = 'Title'

        let title = document.createElement('input');
        title.setAttribute('type', 'text');
        title.value = toDo.title;
        title.setAttribute('class', 'editTitle');

        let descriptionHeader = document.createElement('div');
        descriptionHeader.textContent = 'Description'

        let description = document.createElement('input');
        description.setAttribute('type', 'text');
        description.value = toDo.description;
        description.setAttribute('class', 'editDescription');

        let dueDateHeader = document.createElement('div');
        dueDateHeader.textContent = 'Due Date';

        let dueDate = document.createElement('input');
        dueDate.setAttribute('type', 'date')
        dueDate.value = toDo.dueDate;
        dueDate.setAttribute('class', 'editDue')
            
        let priorityHeader = document.createElement('div');
        priorityHeader.textContent = 'Priority'

        let priority = document.createElement('select');
        let priorityOptions = ['Low', 'Normal', 'High']

        for (let i = 0; i < priorityOptions.length; i++) {
            let option = document.createElement('option');
            option.value = priorityOptions[i];
            option.text = priorityOptions[i];
            priority.append(option);
        };

        priority.value = toDo.priority;
        priority.setAttribute('class', 'editPriority')

        let notesHeader = document.createElement('div');
        notesHeader.textContent = 'Notes'

        let notes = document.createElement('textarea');
        notes.value = toDo.notes;
        notes.setAttribute('class', 'editNotes');

        let save = new Image();
        save.src = _icons_save_svg__WEBPACK_IMPORTED_MODULE_10__;
        save.addEventListener('click', () => {
            toDo.title = title.value;
            toDo.description = description.value;
            toDo.dueDate = dueDate.value;
            toDo.notes = notes.value;
            toDo.priority = priority.value;
            writeModalContent();
            clearMain();
            toDo.project.writeToDoList();
            toDo.updateStoredList();
        })
        save.setAttribute('class', 'save');

        save.addEventListener('mouseover', () => {
            save.src = _icons_saveHover_svg__WEBPACK_IMPORTED_MODULE_11__;
            save.addEventListener('mouseleave', () => {
                save.src = _icons_save_svg__WEBPACK_IMPORTED_MODULE_10__;
            })
        })

        modalContent.append(titleHeader, title, descriptionHeader, description, notesHeader, notes, dueDateHeader, dueDate, priorityHeader, priority, save);
    }

    // Deletes ToDo

    let deleteButton = new Image();
    deleteButton.src = _icons_delete_svg__WEBPACK_IMPORTED_MODULE_2__;
    deleteButton.addEventListener('click', () => {
        event.stopPropagation();
        toDo.deleteToDo()
        toDoContainer.remove();
    })

    deleteButton.addEventListener('mouseover', () => {
        deleteButton.src = _icons_deleteHover_svg__WEBPACK_IMPORTED_MODULE_3__;
        deleteButton.addEventListener('mouseleave', () => {
            deleteButton.src = _icons_delete_svg__WEBPACK_IMPORTED_MODULE_2__;
        })
    })


    toDoContainer.append(done, title, description, dueDate, priority, expandButton, deleteButton, expandModal);
    main.append(toDoContainer);

    if (toDo.done) {
        expandButton.remove()
    }
}




/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadProjectFields": () => (/* binding */ loadProjectFields),
/* harmony export */   "pageLoad": () => (/* binding */ pageLoad)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _domManipulation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domManipulation */ "./src/domManipulation.js");
/* harmony import */ var _icons_logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/logo.svg */ "./src/icons/logo.svg");
/* harmony import */ var _icons_addProject_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/addProject.svg */ "./src/icons/addProject.svg");
/* harmony import */ var _icons_addProjectHover_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/addProjectHover.svg */ "./src/icons/addProjectHover.svg");






function pageLoad () {

    let body = document.querySelector('body');

    let header = document.createElement('header');

    let pageTitle = document.createElement('div');
    pageTitle.textContent = 'TASKR';

    let logo = new Image();
    logo.src = _icons_logo_svg__WEBPACK_IMPORTED_MODULE_2__;

    header.append(pageTitle, logo);

    let centre = document.createElement('div');
    centre.setAttribute('id', 'centre');

    let sidebar = document.createElement('div');
    sidebar.setAttribute('id', 'sidebar');

    let defaultProjectsContainer = document.createElement('div');
    defaultProjectsContainer.setAttribute('id', 'defaultProjects')

    let projectsContainer = document.createElement('div');
    projectsContainer.setAttribute('id', 'writtenProjects')

    let projectsTitle = document.createElement('div');
    projectsTitle.setAttribute('id', 'projectsTitle')
    projectsTitle.textContent = 'Projects';

    projectsContainer.append(projectsTitle);

    sidebar.append(defaultProjectsContainer, projectsContainer);

    let main = document.createElement('div');
    main.setAttribute('id', 'main');

    let footer = document.createElement('footer');

    centre.append(sidebar, main);
    body.append(header, centre, footer);

    loadProjectFields();

};

function loadProjectFields() {
    let container = document.querySelector('#writtenProjects');
    let projectFields = document.createElement('div');
    projectFields.setAttribute('id', 'projectFields')

    let newProject = new Image();
    newProject.src = _icons_addProject_svg__WEBPACK_IMPORTED_MODULE_3__;
    newProject.setAttribute('id', 'newProject');
    newProject.addEventListener('mouseover', () => {
        newProject.src = _icons_addProjectHover_svg__WEBPACK_IMPORTED_MODULE_4__;
        newProject.addEventListener('mouseleave', () => {
            newProject.src = _icons_addProject_svg__WEBPACK_IMPORTED_MODULE_3__;
        })
    })

    let projectTitleField = document.createElement('input');
    projectTitleField.setAttribute('type', 'text');
    projectTitleField.setAttribute('id', 'pTitle');
    projectTitleField.setAttribute('placeholder', 'Project Title...');

    let projectDescriptionField = document.createElement('input');
    projectDescriptionField.setAttribute('type', 'text');
    projectDescriptionField.setAttribute('id', 'pDescription');
    projectDescriptionField.setAttribute('placeholder', 'Project Description...');

    projectFields.append(projectTitleField, projectDescriptionField, newProject);

    container.append(projectFields)

    newProject.addEventListener('click', () => {
        let project = new _projects__WEBPACK_IMPORTED_MODULE_0__.Project(projectTitleField.value, projectDescriptionField.value);
        (0,_domManipulation__WEBPACK_IMPORTED_MODULE_1__.clearMain)();
        (0,_domManipulation__WEBPACK_IMPORTED_MODULE_1__.clearFields)();
        (0,_domManipulation__WEBPACK_IMPORTED_MODULE_1__.writeProject)(project)
        project.writeToDoList();
        project.writeNewToDoButton();
    });
}



/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Completed": () => (/* binding */ Completed),
/* harmony export */   "Dates": () => (/* binding */ Dates),
/* harmony export */   "Inbox": () => (/* binding */ Inbox),
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "projectList": () => (/* binding */ projectList)
/* harmony export */ });
/* harmony import */ var _domManipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domManipulation */ "./src/domManipulation.js");
/* harmony import */ var _toDos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDos */ "./src/toDos.js");



function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

let projectList = [];

class Project {
    constructor(title, description) {
        this.title = title,
        this.description = description,
        this.id = title.split(' ').join('');
    };

    writeNewToDoButton() {
        (0,_domManipulation__WEBPACK_IMPORTED_MODULE_0__.writeToDoButton)(this);
    };

    writeToDoList() {
        (0,_domManipulation__WEBPACK_IMPORTED_MODULE_0__.writeHeaders)(this)
        for (let i = 0; i < _toDos__WEBPACK_IMPORTED_MODULE_1__.toDoList.length; i++) {
            if (_toDos__WEBPACK_IMPORTED_MODULE_1__.toDoList[i].project.title === this.title && _toDos__WEBPACK_IMPORTED_MODULE_1__.toDoList[i].done == false) {
                (0,_domManipulation__WEBPACK_IMPORTED_MODULE_0__.writeToDo)(_toDos__WEBPACK_IMPORTED_MODULE_1__.toDoList[i])
                console.log('added!')
            }
        };
    };

    storeProject() {
        projectList.push(this)
        if (storageAvailable('localStorage')) {
            window.localStorage.setItem('projects', JSON.stringify(projectList));
        } 
    }

    deleteProject() {
        for (let i = 0; i < projectList.length; i++) {
            if (projectList[i] === this) {
                projectList.splice(i, 1)
            };
        };
        delete window[Project]
        if (storageAvailable('localStorage')) {
            window.localStorage.setItem('projects', JSON.stringify(projectList));
        } 
    };

};

class Inbox extends Project {
    writeToDoList() {
        (0,_domManipulation__WEBPACK_IMPORTED_MODULE_0__.writeHeaders)(this)
        for (let i = 0; i < _toDos__WEBPACK_IMPORTED_MODULE_1__.toDoList.length; i++) {
            if (_toDos__WEBPACK_IMPORTED_MODULE_1__.toDoList[i].done == false) {
                (0,_domManipulation__WEBPACK_IMPORTED_MODULE_0__.writeToDo)(_toDos__WEBPACK_IMPORTED_MODULE_1__.toDoList[i]);
            }
        };
    };
};

class Dates extends Project {
    constructor(title, description, func) {
        super(title, description)
        this.func = func;
    };

    writeToDoList() {
        (0,_domManipulation__WEBPACK_IMPORTED_MODULE_0__.writeHeaders)(this);
        for (let i = 0; i < _toDos__WEBPACK_IMPORTED_MODULE_1__.toDoList.length; i++) {
            console.log(_toDos__WEBPACK_IMPORTED_MODULE_1__.toDoList[i].dueDate)
            if (this.func(new Date(_toDos__WEBPACK_IMPORTED_MODULE_1__.toDoList[i].dueDate)) && _toDos__WEBPACK_IMPORTED_MODULE_1__.toDoList[i].done == false) {
                (0,_domManipulation__WEBPACK_IMPORTED_MODULE_0__.writeToDo)(_toDos__WEBPACK_IMPORTED_MODULE_1__.toDoList[i]);
            };
        };
    };
};

class Completed extends Project {
    writeToDoList() {
        (0,_domManipulation__WEBPACK_IMPORTED_MODULE_0__.writeHeaders)(this);
        for (let i = 0; i < _toDos__WEBPACK_IMPORTED_MODULE_1__.toDoList.length; i++) {
            if (_toDos__WEBPACK_IMPORTED_MODULE_1__.toDoList[i].done == true) {
                (0,_domManipulation__WEBPACK_IMPORTED_MODULE_0__.writeToDo)(_toDos__WEBPACK_IMPORTED_MODULE_1__.toDoList[i]);
            };
        };
    };
};




/***/ }),

/***/ "./src/toDos.js":
/*!**********************!*\
  !*** ./src/toDos.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToDo": () => (/* binding */ ToDo),
/* harmony export */   "toDoList": () => (/* binding */ toDoList)
/* harmony export */ });
let toDoList = [];

function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

class ToDo {
    constructor(title, description, dueDate, priority, project, done, notes) {
        this.title = title,
        this.description = description
        this.dueDate = dueDate,
        this.priority = priority,
        this.notes = notes || '',
        this.done = done || false,
        this.project = project;
    };

    storeToDo() {
        toDoList.push(this);
        if (storageAvailable('localStorage')) {
            window.localStorage.setItem('toDos', JSON.stringify(toDoList));
        } 
    };

    removeFromList() {
        for (let i = 0; i < toDoList.length; i++) {
            if (toDoList[i] === this) {
                toDoList.splice(i, 1)
            };
        };
    };

    updateStoredList() {
        for (let i = 0; i < toDoList.length; i++) {
            if (toDoList[i] === this) {
                toDoList[i] = this;
            };
        };
        if (storageAvailable('localStorage')) {
            window.localStorage.setItem('toDos', JSON.stringify(toDoList));
        } 
    }

    deleteToDo() {
        delete window[ToDo];
        for (let i = 0; i < toDoList.length; i++) {
            if (toDoList[i] === this) {
                toDoList.splice(i, 1)
            };
        };
        if (storageAvailable('localStorage')) {
            window.localStorage.setItem('toDos', JSON.stringify(toDoList));
        } 
    };
};



/***/ }),

/***/ "./src/icons/addProject.svg":
/*!**********************************!*\
  !*** ./src/icons/addProject.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "83d5e534fb6aac0e7abb.svg";

/***/ }),

/***/ "./src/icons/addProjectHover.svg":
/*!***************************************!*\
  !*** ./src/icons/addProjectHover.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2b0949de1d7dbed82ac4.svg";

/***/ }),

/***/ "./src/icons/addTask.svg":
/*!*******************************!*\
  !*** ./src/icons/addTask.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "13db42fcd39936146533.svg";

/***/ }),

/***/ "./src/icons/addTaskHover.svg":
/*!************************************!*\
  !*** ./src/icons/addTaskHover.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5b142223f7891ec40886.svg";

/***/ }),

/***/ "./src/icons/addToDo.svg":
/*!*******************************!*\
  !*** ./src/icons/addToDo.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0f9d8c326265a3ed451d.svg";

/***/ }),

/***/ "./src/icons/addToDoHover.svg":
/*!************************************!*\
  !*** ./src/icons/addToDoHover.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "376e9b6a44e5b3142f12.svg";

/***/ }),

/***/ "./src/icons/delete.svg":
/*!******************************!*\
  !*** ./src/icons/delete.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c37a849bd58489a951cf.svg";

/***/ }),

/***/ "./src/icons/deleteHover.svg":
/*!***********************************!*\
  !*** ./src/icons/deleteHover.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "244b66874c46718f7e06.svg";

/***/ }),

/***/ "./src/icons/edit.svg":
/*!****************************!*\
  !*** ./src/icons/edit.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "22c9faa8395e4318dfb4.svg";

/***/ }),

/***/ "./src/icons/editHover.svg":
/*!*********************************!*\
  !*** ./src/icons/editHover.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4fa02ba3eeb22ca444b3.svg";

/***/ }),

/***/ "./src/icons/expand.svg":
/*!******************************!*\
  !*** ./src/icons/expand.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "317ccbe82901b170ff37.svg";

/***/ }),

/***/ "./src/icons/expandHover.svg":
/*!***********************************!*\
  !*** ./src/icons/expandHover.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8322b254aa7db62c20fd.svg";

/***/ }),

/***/ "./src/icons/logo.svg":
/*!****************************!*\
  !*** ./src/icons/logo.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "619205475177b163d577.svg";

/***/ }),

/***/ "./src/icons/save.svg":
/*!****************************!*\
  !*** ./src/icons/save.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d8c2c1d7cc964cc929bc.svg";

/***/ }),

/***/ "./src/icons/saveHover.svg":
/*!*********************************!*\
  !*** ./src/icons/saveHover.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "60e32a3f51d4e174b563.svg";

/***/ }),

/***/ "./src/mainFont.ttf":
/*!**************************!*\
  !*** ./src/mainFont.ttf ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6c84540de7730f833d6c.ttf";

/***/ }),

/***/ "./src/titleFont.ttf":
/*!***************************!*\
  !*** ./src/titleFont.ttf ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fbf1480d7fb76696bdd9.ttf";

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ "./src/pageLoad.js");
/* harmony import */ var _domManipulation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domManipulation */ "./src/domManipulation.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isTomorrow/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isThisWeek/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isPast/index.js");
/* harmony import */ var _toDos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toDos */ "./src/toDos.js");
// Imports from various modules








// Calls initial page load

(0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.pageLoad)();

// Creates the inbox project

let inbox = new _projects__WEBPACK_IMPORTED_MODULE_3__.Inbox('Inbox', 'All of your outstanding tasks are stored here');
(0,_domManipulation__WEBPACK_IMPORTED_MODULE_1__.writeProject)(inbox)

let today = new _projects__WEBPACK_IMPORTED_MODULE_3__.Dates('Today', 'All tasks Due Today', date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])
;(0,_domManipulation__WEBPACK_IMPORTED_MODULE_1__.writeProject)(today);

let tomorrow = new _projects__WEBPACK_IMPORTED_MODULE_3__.Dates('Tomorrow', 'All Tasks Due Tomorrow', date_fns__WEBPACK_IMPORTED_MODULE_6__["default"]);
(0,_domManipulation__WEBPACK_IMPORTED_MODULE_1__.writeProject)(tomorrow);

let thisWeek = new _projects__WEBPACK_IMPORTED_MODULE_3__.Dates('This Week', 'All Tasks Due This Week', date_fns__WEBPACK_IMPORTED_MODULE_7__["default"]);
(0,_domManipulation__WEBPACK_IMPORTED_MODULE_1__.writeProject)(thisWeek);

let overdue = new _projects__WEBPACK_IMPORTED_MODULE_3__.Dates('Overdue', 'These Tasks are Overdue', date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])
;(0,_domManipulation__WEBPACK_IMPORTED_MODULE_1__.writeProject)(overdue);

let completed = new _projects__WEBPACK_IMPORTED_MODULE_3__.Completed('Completed', 'Tasks That Are Marked Complete');
(0,_domManipulation__WEBPACK_IMPORTED_MODULE_1__.writeProject)(completed);

loadProjects();

loadToDos();

inbox.writeToDoList();
inbox.writeNewToDoButton();

function loadProjects() {
    if (localStorage.getItem('projects')) {
        let projects = window.localStorage.getItem('projects');
        let parsedList = JSON.parse(projects);
        for (let i = 0; i < parsedList.length; i++) {
            let project = new _projects__WEBPACK_IMPORTED_MODULE_3__.Project(parsedList[i].title, parsedList[i].description)
            ;(0,_domManipulation__WEBPACK_IMPORTED_MODULE_1__.writeProject)(project);
        };
    }
};

function loadToDos() {
    if (localStorage.getItem('toDos')) {
        let toDos = window.localStorage.getItem('toDos');
        let parsedList = JSON.parse(toDos);
        for (let i = 0; i < parsedList.length; i++) {
            if (parsedList[i].project.title === 'Inbox') {
                parsedList[i].project = inbox
            } 
            for (let i = 0; i < _projects__WEBPACK_IMPORTED_MODULE_3__.projectList.length; i++) {
                if (_projects__WEBPACK_IMPORTED_MODULE_3__.projectList[i].title == parsedList[i].project.title) {
                    parsedList[i].project = _projects__WEBPACK_IMPORTED_MODULE_3__.projectList[i];
                }
            }
            let toDo = new _toDos__WEBPACK_IMPORTED_MODULE_4__.ToDo(parsedList[i].title, parsedList[i].description, parsedList[i].dueDate, parsedList[i].priority, parsedList[i].project, parsedList[i].done, parsedList[i].notes);
            _toDos__WEBPACK_IMPORTED_MODULE_4__.toDoList.push(toDo);
        };
    }
};



/*
use intlFormat Date to display date in todo instead of input, move input to expandModal / if date !valid reject it
*/

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7QUFFb0M7QUFDYTtBQUM1QjtBQUNzRDtBQUNWO0FBQ3pCOztBQUV4Qzs7QUFFQSxtREFBUTs7QUFFUjs7QUFFQSxnQkFBZ0IsNENBQUs7QUFDckIsOERBQVk7O0FBRVosZ0JBQWdCLDRDQUFLLGlDQUFpQyxnREFBTztBQUM3RCwrREFBWTs7QUFFWixtQkFBbUIsNENBQUssdUNBQXVDLGdEQUFVO0FBQ3pFLDhEQUFZOztBQUVaLG1CQUFtQiw0Q0FBSyx5Q0FBeUMsZ0RBQVU7QUFDM0UsOERBQVk7O0FBRVosa0JBQWtCLDRDQUFLLHVDQUF1QyxnREFBTTtBQUNwRSwrREFBWTs7QUFFWixvQkFBb0IsZ0RBQVM7QUFDN0IsOERBQVk7O0FBRVo7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0MsOEJBQThCLDhDQUFPO0FBQ3JDLFlBQVksK0RBQVk7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsSUFBSSx5REFBa0IsRUFBRTtBQUNwRCxvQkFBb0Isa0RBQVc7QUFDL0IsNENBQTRDLGtEQUFXO0FBQ3ZEO0FBQ0E7QUFDQSwyQkFBMkIsd0NBQUk7QUFDL0IsWUFBWSxpREFBYTtBQUN6QjtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yb3VuZGluZ01ldGhvZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkRGF5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9jb25zdGFudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJbkNhbGVuZGFyUXVhcnRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZGlmZmVyZW5jZUluQ2FsZW5kYXJXZWVrcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9kaWZmZXJlbmNlSW5DYWxlbmRhclllYXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJbkhvdXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9kaWZmZXJlbmNlSW5NaW51dGVzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJblNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZW5kT2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZW5kT2ZUb2RheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9nZXRRdWFydGVyL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2ludGxGb3JtYXREaXN0YW5jZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1Bhc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZVdlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUaGlzV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RvZGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVG9tb3Jyb3cvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZG9tTWFuaXB1bGF0aW9uLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcGFnZUxvYWQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvRG9zLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi90aXRsZUZvbnQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9tYWluRm9udC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiB0aXRsZUZvbnQ7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBtYWluRm9udDtcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdtYWluRm9udCc7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4ODA4NztcXG4gICAgZm9udC1mYW1pbHk6ICd0aXRsZUZvbnQnO1xcbiAgICBmb250LXNpemU6IDNlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGhlaWdodDogMzBweDtcXG59XFxuXFxuI2NlbnRyZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y2RjZGMjtcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgICB3aWR0aDogMzMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiYmUxZWE7XFxuICAgIGhlaWdodDogbWF4KGNhbGMoMTAwdmggLSAxMjBweCksIDUzMHB4KTtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuI21haW4ge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbn1cXG5cXG4jcFRpdGxlIHtcXG4gICAgd2lkdGg6IDEwcHg7XFxufVxcblxcbmZvb3RlciB7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4ODA4N1xcbn1cXG5cXG4jaGVhZGVycyxcXG4udG9EbyxcXG4jcm93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSA0NjVweCk7XFxuICAgIG1pbi13aWR0aDogNzAwcHg7XFxuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6ICM4ODg7XFxufVxcblxcbiNoZWFkZXJzLFxcbiNyb3cge1xcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDQ1OHB4KTtcXG59XFxuXFxuI3JvdyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZTM7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxufVxcblxcbnNlbGVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNkY2RjI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLnRvRG8ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWUzO1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbn1cXG5cXG4udG9EbyA+IGRpdiB7XFxuICAgIG1hcmdpbjogMnB4O1xcbiAgICBib3JkZXItcmlnaHQtc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6ICM4ODg7XFxufVxcblxcbiN3cml0ZVRvRG9CdXR0b24ge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XFxuICAgIG1hcmdpbi10b3A6IDJweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICBtaW4td2lkdGg6IDI0cHg7XFxuICAgIGJvcmRlci13aWR0aDogMnB4O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIGJvcmRlci1jb2xvcjogIzg4ODtcXG4gICAgY29sb3I6ICMwMDAwMDA7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCLinJRcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGZvbnQtc2l6ZTogMS4zZW07XFxuICAgIHJpZ2h0OiAxcHg7XFxuICAgIHRvcDogLTFweDtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgfVxcblxcbiAgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpob3Zlcjo6YmVmb3JlIHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgY29sb3I6ICM4ODg7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuICBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQ6OmJlZm9yZSB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbiN0aXRsZSxcXG4jZGVzY3JpcHRpb24sXFxuI2R1ZURhdGUsXFxuI3ByaW9yaXR5IHtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWUzO1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIG1hcmdpbjogMnB4O1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgZm9udC1mYW1pbHk6IG1haW5Gb250O1xcbn1cXG5cXG4udG9Eb1RpdGxlLFxcbiN0aXRsZUhlYWRlcixcXG4jdGl0bGUge1xcbiAgICB3aWR0aDogMTV2dztcXG4gICAgbWluLXdpZHRoOiAxMDBweDtcXG59XFxuXFxuI3RpdGxlSGVhZGVyIHtcXG4gICAgbWFyZ2luOiA0cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAzN3B4O1xcbn1cXG5cXG4jdGl0bGUge1xcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcXG59XFxuXFxuLnRvRG9EZXNjcmlwdGlvbixcXG4jZGVzY3JpcHRpb25IZWFkZXIsXFxuI2Rlc2NyaXB0aW9uIHtcXG4gICAgd2lkdGg6IDM1dnc7XFxuICAgIG1pbi13aWR0aDogMTgwcHg7XFxufVxcblxcbiNkdWVIZWFkZXIge1xcbiAgICBtYXJnaW46IDRweDtcXG59XFxuXFxuLnRvRG9EdWUsXFxuI2R1ZUhlYWRlcixcXG4jZHVlRGF0ZSB7XFxuICAgIHdpZHRoOiA4dnc7XFxuICAgIG1pbi13aWR0aDogOTBweDtcXG59XFxuXFxuI3ByaW9yaXR5SGVhZGVyIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1N3B4O1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLnRvRG9Qcmlvcml0eSB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4jbmV3UHJvamVjdDpob3ZlciB7XFxuICAgIGZpbGw6IGdyZXk7XFxufVxcblxcbiNwcm9qZWN0RmllbGRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBvdmVyZmxvdzogY2xpcDtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XFxuICAgIGJvcmRlci1jb2xvcjogIzg4ODtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG5cXG4jcHJvamVjdEZpZWxkcyA+IGlucHV0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk2YzdkNDtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBib3JkZXItcmlnaHQtc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItd2lkdGg6IDJweDtcXG4gICAgYm9yZGVyLWNvbG9yOiAjNzY5NzlmO1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuI3BUaXRsZSB7XFxuICAgIHdpZHRoOiA2ZW07XFxufVxcblxcbiNwRGVzY3JpcHRpb24ge1xcbiAgICB3aWR0aDogMTJlbVxcbn1cXG5cXG4jZGVmYXVsdFByb2plY3RzLFxcbiN3cml0dGVuUHJvamVjdHMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTNiY2M2O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBib3JkZXItd2lkdGg6IDJweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiAjODg4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4jZGVmYXVsdFByb2plY3RzID4gLnByb2plY3Qge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDEuMmVtO1xcbn1cXG5cXG4jd3JpdHRlblByb2plY3RzIHtcXG4gICAgaGVpZ2h0OiBtYXgoY2FsYygxMDB2aCAtIDQ1MHB4KSwgMjAwcHgpO1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbn1cXG4ucHJvamVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5M2JjYzY7XFxuICAgIGJvcmRlci13aWR0aDogMnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXNpemU6IDEuMWVtO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5wcm9qZWN0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc2OTc5ZjtcXG59XFxuXFxuI3Byb2plY3RzVGl0bGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkzYmNjNjtcXG59XFxuIFxcbi5tb2RhbCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcbiAgICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXFxuICAgIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWUzOyAvKiAxNSUgZnJvbSB0aGUgdG9wIGFuZCBjZW50ZXJlZCAqL1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjODg4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogMzUwcHhcXG59XFxuXFxuLmNsb3NlIHtcXG4gICAgY29sb3I6ICNhYWE7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNsb3NlOmhvdmVyLFxcbi5jbG9zZTpmb2N1cyB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tb2RhbFRpdGxlLFxcbi5tb2RhbERlc2NyaXB0aW9uLFxcbi5tb2RhbE5vdGVzLFxcbi5tb2RhbER1ZURhdGUsXFxuLm1vZGFsUHJpb3JpdHksXFxuLmVkaXRUaXRsZSxcXG4uZWRpdERlc2NyaXB0aW9uLFxcbi5lZGl0Tm90ZXMsXFxuLmVkaXREdWUsXFxuLmVkaXRQcmlvcml0eSB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM4ODg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luOiAycHg7XFxuICAgIHBhZGRpbmc6IDJweDtcXG59XFxuXFxuLm1vZGFsVGl0bGUsXFxuLmVkaXRUaXRsZSB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG59XFxuXFxuLm1vZGFsTm90ZXMsXFxuLmVkaXROb3RlcyB7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4ubW9kYWxEdWVEYXRlLFxcbi5lZGl0RHVlIHtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbn1cXG5cXG4ubW9kYWxQcmlvcml0eSxcXG4uZWRpdFByaW9yaXR5IHtcXG4gICAgd2lkdGg6IDkwcHg7XFxufVxcblxcbi5lZGl0QnV0dG9uIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDM4MHB4O1xcbn1cXG5cXG4uZWRpdFRpdGxlLFxcbi5lZGl0RGVzY3JpcHRpb24sXFxuLmVkaXROb3RlcyxcXG4uZWRpdER1ZSxcXG4uZWRpdFByaW9yaXR5IHtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIGZvbnQtZmFtaWx5OiBtYWluRm9udDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlMztcXG59XFxuXFxuLmVkaXREZXNjcmlwdGlvbixcXG4uZWRpdE5vdGVzIHtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEycHgpO1xcbn1cXG5cXG4uZWRpdE5vdGVzIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xcbn1cXG5cXG4uc2F2ZSB7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgbWFyZ2luLXRvcDogMjVweDtcXG59XFxuXFxuLm5ld1RvRG8ge1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsNENBQTJC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QixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWEsRUFBRSxzQkFBc0I7SUFDckMsZUFBZSxFQUFFLGtCQUFrQjtJQUNuQyxVQUFVLEVBQUUsZUFBZTtJQUMzQixjQUFjLEVBQUUsNEJBQTRCO0lBQzVDLHlCQUF5QixFQUFFLGtDQUFrQztJQUM3RCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1o7QUFDSjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBRUE7Ozs7Ozs7Ozs7SUFVSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBOztJQUVJLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7Ozs7O0lBS0ksY0FBYztJQUNkLHFCQUFxQjtJQUNyQix5QkFBeUI7QUFDN0I7O0FBRUE7O0lBRUksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiB0aXRsZUZvbnQ7XFxuICAgIHNyYzogdXJsKCcuL3RpdGxlRm9udC50dGYnKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBtYWluRm9udDtcXG4gICAgc3JjOiB1cmwoJy4vbWFpbkZvbnQudHRmJyk7XFxufVxcblxcbmJvZHkge1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBmb250LWZhbWlseTogJ21haW5Gb250JztcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg4MDg3O1xcbiAgICBmb250LWZhbWlseTogJ3RpdGxlRm9udCc7XFxuICAgIGZvbnQtc2l6ZTogM2VtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4jY2VudHJlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGNkYyO1xcbn1cXG5cXG4jc2lkZWJhciB7XFxuICAgIHdpZHRoOiAzMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JiZTFlYTtcXG4gICAgaGVpZ2h0OiBtYXgoY2FsYygxMDB2aCAtIDEyMHB4KSwgNTMwcHgpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4jbWFpbiB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxufVxcblxcbiNwVGl0bGUge1xcbiAgICB3aWR0aDogMTBweDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg4MDg3XFxufVxcblxcbiNoZWFkZXJzLFxcbi50b0RvLFxcbiNyb3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDQ2NXB4KTtcXG4gICAgbWluLXdpZHRoOiA3MDBweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogIzg4ODtcXG59XFxuXFxuI2hlYWRlcnMsXFxuI3JvdyB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gNDU4cHgpO1xcbn1cXG5cXG4jcm93IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlMztcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXNocmluazogMDtcXG59XFxuXFxuc2VsZWN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y2RjZGMjtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4udG9EbyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZTM7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxufVxcblxcbi50b0RvID4gZGl2IHtcXG4gICAgbWFyZ2luOiAycHg7XFxuICAgIGJvcmRlci1yaWdodC1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogIzg4ODtcXG59XFxuXFxuI3dyaXRlVG9Eb0J1dHRvbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcXG4gICAgbWFyZ2luLXRvcDogMnB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGhlaWdodDogMjRweDtcXG4gICAgd2lkdGg6IDI0cHg7XFxuICAgIG1pbi13aWR0aDogMjRweDtcXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgYm9yZGVyLWNvbG9yOiAjODg4O1xcbiAgICBjb2xvcjogIzAwMDAwMDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIuKclFxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZm9udC1zaXplOiAxLjNlbTtcXG4gICAgcmlnaHQ6IDFweDtcXG4gICAgdG9wOiAtMXB4O1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB9XFxuXFxuICBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmhvdmVyOjpiZWZvcmUge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICBjb2xvcjogIzg4ODtcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4gIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZDo6YmVmb3JlIHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuI3RpdGxlLFxcbiNkZXNjcmlwdGlvbixcXG4jZHVlRGF0ZSxcXG4jcHJpb3JpdHkge1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZTM7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgbWFyZ2luOiAycHg7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICBmb250LWZhbWlseTogbWFpbkZvbnQ7XFxufVxcblxcbi50b0RvVGl0bGUsXFxuI3RpdGxlSGVhZGVyLFxcbiN0aXRsZSB7XFxuICAgIHdpZHRoOiAxNXZ3O1xcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xcbn1cXG5cXG4jdGl0bGVIZWFkZXIge1xcbiAgICBtYXJnaW46IDRweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDM3cHg7XFxufVxcblxcbiN0aXRsZSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbn1cXG5cXG4udG9Eb0Rlc2NyaXB0aW9uLFxcbiNkZXNjcmlwdGlvbkhlYWRlcixcXG4jZGVzY3JpcHRpb24ge1xcbiAgICB3aWR0aDogMzV2dztcXG4gICAgbWluLXdpZHRoOiAxODBweDtcXG59XFxuXFxuI2R1ZUhlYWRlciB7XFxuICAgIG1hcmdpbjogNHB4O1xcbn1cXG5cXG4udG9Eb0R1ZSxcXG4jZHVlSGVhZGVyLFxcbiNkdWVEYXRlIHtcXG4gICAgd2lkdGg6IDh2dztcXG4gICAgbWluLXdpZHRoOiA5MHB4O1xcbn1cXG5cXG4jcHJpb3JpdHlIZWFkZXIge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDU3cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4udG9Eb1ByaW9yaXR5IHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbiNuZXdQcm9qZWN0OmhvdmVyIHtcXG4gICAgZmlsbDogZ3JleTtcXG59XFxuXFxuI3Byb2plY3RGaWVsZHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG92ZXJmbG93OiBjbGlwO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItd2lkdGg6IDJweDtcXG4gICAgYm9yZGVyLWNvbG9yOiAjODg4O1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcblxcbiNwcm9qZWN0RmllbGRzID4gaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTZjN2Q0O1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGJvcmRlci1yaWdodC1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci13aWR0aDogMnB4O1xcbiAgICBib3JkZXItY29sb3I6ICM3Njk3OWY7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4jcFRpdGxlIHtcXG4gICAgd2lkdGg6IDZlbTtcXG59XFxuXFxuI3BEZXNjcmlwdGlvbiB7XFxuICAgIHdpZHRoOiAxMmVtXFxufVxcblxcbiNkZWZhdWx0UHJvamVjdHMsXFxuI3dyaXR0ZW5Qcm9qZWN0cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5M2JjYzY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGJvcmRlci13aWR0aDogMnB4O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6ICM4ODg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbiNkZWZhdWx0UHJvamVjdHMgPiAucHJvamVjdCB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxufVxcblxcbiN3cml0dGVuUHJvamVjdHMge1xcbiAgICBoZWlnaHQ6IG1heChjYWxjKDEwMHZoIC0gNDUwcHgpLCAyMDBweCk7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxufVxcbi5wcm9qZWN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkzYmNjNjtcXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtc2l6ZTogMS4xZW07XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogLTE1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnByb2plY3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzY5NzlmO1xcbn1cXG5cXG4jcHJvamVjdHNUaXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTNiY2M2O1xcbn1cXG4gXFxuLm1vZGFsIHtcXG4gICAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXFxuICAgIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cXG4gICAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZTM7IC8qIDE1JSBmcm9tIHRoZSB0b3AgYW5kIGNlbnRlcmVkICovXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM4ODg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgaGVpZ2h0OiAzNTBweFxcbn1cXG5cXG4uY2xvc2Uge1xcbiAgICBjb2xvcjogI2FhYTtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY2xvc2U6aG92ZXIsXFxuLmNsb3NlOmZvY3VzIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1vZGFsVGl0bGUsXFxuLm1vZGFsRGVzY3JpcHRpb24sXFxuLm1vZGFsTm90ZXMsXFxuLm1vZGFsRHVlRGF0ZSxcXG4ubW9kYWxQcmlvcml0eSxcXG4uZWRpdFRpdGxlLFxcbi5lZGl0RGVzY3JpcHRpb24sXFxuLmVkaXROb3RlcyxcXG4uZWRpdER1ZSxcXG4uZWRpdFByaW9yaXR5IHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzg4ODtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW46IDJweDtcXG4gICAgcGFkZGluZzogMnB4O1xcbn1cXG5cXG4ubW9kYWxUaXRsZSxcXG4uZWRpdFRpdGxlIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbn1cXG5cXG4ubW9kYWxOb3RlcyxcXG4uZWRpdE5vdGVzIHtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5tb2RhbER1ZURhdGUsXFxuLmVkaXREdWUge1xcbiAgICB3aWR0aDogMTIwcHg7XFxufVxcblxcbi5tb2RhbFByaW9yaXR5LFxcbi5lZGl0UHJpb3JpdHkge1xcbiAgICB3aWR0aDogOTBweDtcXG59XFxuXFxuLmVkaXRCdXR0b24ge1xcbiAgICBtYXJnaW4tbGVmdDogMzgwcHg7XFxufVxcblxcbi5lZGl0VGl0bGUsXFxuLmVkaXREZXNjcmlwdGlvbixcXG4uZWRpdE5vdGVzLFxcbi5lZGl0RHVlLFxcbi5lZGl0UHJpb3JpdHkge1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgZm9udC1mYW1pbHk6IG1haW5Gb250O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWUzO1xcbn1cXG5cXG4uZWRpdERlc2NyaXB0aW9uLFxcbi5lZGl0Tm90ZXMge1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTJweCk7XFxufVxcblxcbi5lZGl0Tm90ZXMge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XFxufVxcblxcbi5zYXZlIHtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xcbn1cXG5cXG4ubmV3VG9EbyB7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwidmFyIGRlZmF1bHRPcHRpb25zID0ge307XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhuZXdPcHRpb25zKSB7XG4gIGRlZmF1bHRPcHRpb25zID0gbmV3T3B0aW9ucztcbn0iLCIvKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xuICB2YXIgdXRjRGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSwgZGF0ZS5nZXRIb3VycygpLCBkYXRlLmdldE1pbnV0ZXMoKSwgZGF0ZS5nZXRTZWNvbmRzKCksIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkpKTtcbiAgdXRjRGF0ZS5zZXRVVENGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgLSB1dGNEYXRlLmdldFRpbWUoKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJ2YXIgcm91bmRpbmdNYXAgPSB7XG4gIGNlaWw6IE1hdGguY2VpbCxcbiAgcm91bmQ6IE1hdGgucm91bmQsXG4gIGZsb29yOiBNYXRoLmZsb29yLFxuICB0cnVuYzogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlIDwgMCA/IE1hdGguY2VpbCh2YWx1ZSkgOiBNYXRoLmZsb29yKHZhbHVlKTtcbiAgfSAvLyBNYXRoLnRydW5jIGlzIG5vdCBzdXBwb3J0ZWQgYnkgSUVcblxufTtcbnZhciBkZWZhdWx0Um91bmRpbmdNZXRob2QgPSAndHJ1bmMnO1xuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdW5kaW5nTWV0aG9kKG1ldGhvZCkge1xuICByZXR1cm4gbWV0aG9kID8gcm91bmRpbmdNYXBbbWV0aG9kXSA6IHJvdW5kaW5nTWFwW2RlZmF1bHRSb3VuZGluZ01ldGhvZF07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBhZGREYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIGRheXMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSAtIHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBkYXlzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IC0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDEwIGRheXMgdG8gMSBTZXB0ZW1iZXIgMjAxNDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZERheXMobmV3IERhdGUoMjAxNCwgOCwgMSksIDEwKVxuICogLy89PiBUaHUgU2VwIDExIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGREYXlzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuXG4gIGlmIChpc05hTihhbW91bnQpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICBpZiAoIWFtb3VudCkge1xuICAgIC8vIElmIDAgZGF5cywgbm8tb3AgdG8gYXZvaWQgY2hhbmdpbmcgdGltZXMgaW4gdGhlIGhvdXIgYmVmb3JlIGVuZCBvZiBEU1RcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIGFtb3VudCk7XG4gIHJldHVybiBkYXRlO1xufSIsIi8qKlxuICogRGF5cyBpbiAxIHdlZWsuXG4gKlxuICogQG5hbWUgZGF5c0luV2Vla1xuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBkYXlzSW5XZWVrID0gNztcbi8qKlxuICogRGF5cyBpbiAxIHllYXJcbiAqIE9uZSB5ZWFycyBlcXVhbHMgMzY1LjI0MjUgZGF5cyBhY2NvcmRpbmcgdG8gdGhlIGZvcm11bGE6XG4gKlxuICogPiBMZWFwIHllYXIgb2NjdXJlcyBldmVyeSA0IHllYXJzLCBleGNlcHQgZm9yIHllYXJzIHRoYXQgYXJlIGRpdmlzYWJsZSBieSAxMDAgYW5kIG5vdCBkaXZpc2FibGUgYnkgNDAwLlxuICogPiAxIG1lYW4geWVhciA9ICgzNjUrMS80LTEvMTAwKzEvNDAwKSBkYXlzID0gMzY1LjI0MjUgZGF5c1xuICpcbiAqIEBuYW1lIGRheXNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBkYXlzSW5ZZWFyID0gMzY1LjI0MjU7XG4vKipcbiAqIE1heGltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBuYW1lIG1heFRpbWVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtYXhUaW1lID0gTWF0aC5wb3coMTAsIDgpICogMjQgKiA2MCAqIDYwICogMTAwMDtcbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgbWludXRlXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5NaW51dGVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJbk1pbnV0ZSA9IDYwMDAwO1xuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5Ib3VyID0gMzYwMDAwMDtcbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgc2Vjb25kXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5TZWNvbmRcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJblNlY29uZCA9IDEwMDA7XG4vKipcbiAqIE1pbmltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBuYW1lIG1pblRpbWVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaW5UaW1lID0gLW1heFRpbWU7XG4vKipcbiAqIE1pbnV0ZXMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgbWludXRlc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbnV0ZXNJbkhvdXIgPSA2MDtcbi8qKlxuICogTW9udGhzIGluIDEgcXVhcnRlclxuICpcbiAqIEBuYW1lIG1vbnRoc0luUXVhcnRlclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1vbnRoc0luUXVhcnRlciA9IDM7XG4vKipcbiAqIE1vbnRocyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBtb250aHNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtb250aHNJblllYXIgPSAxMjtcbi8qKlxuICogUXVhcnRlcnMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgcXVhcnRlcnNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBxdWFydGVyc0luWWVhciA9IDQ7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbkhvdXIgPSAzNjAwO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgbWludXRlXG4gKlxuICogQG5hbWUgc2Vjb25kc0luTWludXRlXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luTWludXRlID0gNjA7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBkYXlcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5EYXlcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5EYXkgPSBzZWNvbmRzSW5Ib3VyICogMjQ7XG4vKipcbiAqIFNlY29uZHMgaW4gMSB3ZWVrXG4gKlxuICogQG5hbWUgc2Vjb25kc0luV2Vla1xuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbldlZWsgPSBzZWNvbmRzSW5EYXkgKiA3O1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIHNlY29uZHNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5ZZWFyID0gc2Vjb25kc0luRGF5ICogZGF5c0luWWVhcjtcbi8qKlxuICogU2Vjb25kcyBpbiAxIG1vbnRoXG4gKlxuICogQG5hbWUgc2Vjb25kc0luTW9udGhcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5Nb250aCA9IHNlY29uZHNJblllYXIgLyAxMjtcbi8qKlxuICogU2Vjb25kcyBpbiAxIHF1YXJ0ZXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5RdWFydGVyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luUXVhcnRlciA9IHNlY29uZHNJbk1vbnRoICogMzsiLCJpbXBvcnQgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZkRheSBmcm9tIFwiLi4vc3RhcnRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fREFZID0gODY0MDAwMDA7XG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5cyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy4gVGhpcyBtZWFucyB0aGF0IHRoZSB0aW1lcyBhcmUgcmVtb3ZlZFxuICogZnJvbSB0aGUgZGF0ZXMgYW5kIHRoZW4gdGhlIGRpZmZlcmVuY2UgaW4gZGF5cyBpcyBjYWxjdWxhdGVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5c1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzowMDowMCBhbmQgMiBKdWx5IDIwMTIgMDA6MDA6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMTIsIDYsIDIsIDAsIDApLFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAyLCAyMywgMClcbiAqIClcbiAqIC8vPT4gMzY2XG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzo1OTowMCBhbmQgMyBKdWx5IDIwMTEgMDA6MDE6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDMsIDAsIDEpLFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAyLCAyMywgNTkpXG4gKiApXG4gKiAvLz0+IDFcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBzdGFydE9mRGF5TGVmdCA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBzdGFydE9mRGF5UmlnaHQgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZVJpZ2h0KTtcbiAgdmFyIHRpbWVzdGFtcExlZnQgPSBzdGFydE9mRGF5TGVmdC5nZXRUaW1lKCkgLSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKHN0YXJ0T2ZEYXlMZWZ0KTtcbiAgdmFyIHRpbWVzdGFtcFJpZ2h0ID0gc3RhcnRPZkRheVJpZ2h0LmdldFRpbWUoKSAtIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoc3RhcnRPZkRheVJpZ2h0KTsgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIGRheSBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIGRheSBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoKHRpbWVzdGFtcExlZnQgLSB0aW1lc3RhbXBSaWdodCkgLyBNSUxMSVNFQ09ORFNfSU5fREFZKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgbW9udGhzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgbW9udGhzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgbW9udGhzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGNhbGVuZGFyIG1vbnRocyBhcmUgYmV0d2VlbiAzMSBKYW51YXJ5IDIwMTQgYW5kIDEgU2VwdGVtYmVyIDIwMTQ/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocyhcbiAqICAgbmV3IERhdGUoMjAxNCwgOCwgMSksXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDAsIDMxKVxuICogKVxuICogLy89PiA4XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciB5ZWFyRGlmZiA9IGRhdGVMZWZ0LmdldEZ1bGxZZWFyKCkgLSBkYXRlUmlnaHQuZ2V0RnVsbFllYXIoKTtcbiAgdmFyIG1vbnRoRGlmZiA9IGRhdGVMZWZ0LmdldE1vbnRoKCkgLSBkYXRlUmlnaHQuZ2V0TW9udGgoKTtcbiAgcmV0dXJuIHllYXJEaWZmICogMTIgKyBtb250aERpZmY7XG59IiwiaW1wb3J0IGdldFF1YXJ0ZXIgZnJvbSBcIi4uL2dldFF1YXJ0ZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluQ2FsZW5kYXJRdWFydGVyc1xuICogQGNhdGVnb3J5IFF1YXJ0ZXIgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgcXVhcnRlcnMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBxdWFydGVycyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIHF1YXJ0ZXJzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGNhbGVuZGFyIHF1YXJ0ZXJzIGFyZSBiZXR3ZWVuIDMxIERlY2VtYmVyIDIwMTMgYW5kIDIgSnVseSAyMDE0P1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJRdWFydGVycyhcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiksXG4gKiAgIG5ldyBEYXRlKDIwMTMsIDExLCAzMSlcbiAqIClcbiAqIC8vPT4gM1xuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbkNhbGVuZGFyUXVhcnRlcnMoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciB5ZWFyRGlmZiA9IGRhdGVMZWZ0LmdldEZ1bGxZZWFyKCkgLSBkYXRlUmlnaHQuZ2V0RnVsbFllYXIoKTtcbiAgdmFyIHF1YXJ0ZXJEaWZmID0gZ2V0UXVhcnRlcihkYXRlTGVmdCkgLSBnZXRRdWFydGVyKGRhdGVSaWdodCk7XG4gIHJldHVybiB5ZWFyRGlmZiAqIDQgKyBxdWFydGVyRGlmZjtcbn0iLCJpbXBvcnQgc3RhcnRPZldlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9XRUVLID0gNjA0ODAwMDAwO1xuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5DYWxlbmRhcldlZWtzXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciB3ZWVrcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIHdlZWtzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBjYWxlbmRhciB3ZWVrc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciB3ZWVrcyBhcmUgYmV0d2VlbiA1IEp1bHkgMjAxNCBhbmQgMjAgSnVseSAyMDE0P1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJXZWVrcyhcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMjApLFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCA1KVxuICogKVxuICogLy89PiAzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRoZSB3ZWVrIHN0YXJ0cyBvbiBNb25kYXksXG4gKiAvLyBob3cgbWFueSBjYWxlbmRhciB3ZWVrcyBhcmUgYmV0d2VlbiA1IEp1bHkgMjAxNCBhbmQgMjAgSnVseSAyMDE0P1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJXZWVrcyhcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMjApLFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCA1KSxcbiAqICAgeyB3ZWVrU3RhcnRzT246IDEgfVxuICogKVxuICogLy89PiAyXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluQ2FsZW5kYXJXZWVrcyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIHN0YXJ0T2ZXZWVrTGVmdCA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZUxlZnQsIG9wdGlvbnMpO1xuICB2YXIgc3RhcnRPZldlZWtSaWdodCA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZVJpZ2h0LCBvcHRpb25zKTtcbiAgdmFyIHRpbWVzdGFtcExlZnQgPSBzdGFydE9mV2Vla0xlZnQuZ2V0VGltZSgpIC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhzdGFydE9mV2Vla0xlZnQpO1xuICB2YXIgdGltZXN0YW1wUmlnaHQgPSBzdGFydE9mV2Vla1JpZ2h0LmdldFRpbWUoKSAtIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoc3RhcnRPZldlZWtSaWdodCk7IC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoKHRpbWVzdGFtcExlZnQgLSB0aW1lc3RhbXBSaWdodCkgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSyk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5DYWxlbmRhclllYXJzXG4gKiBAY2F0ZWdvcnkgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciB5ZWFycyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIHllYXJzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgeWVhcnNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgeWVhcnMgYXJlIGJldHdlZW4gMzEgRGVjZW1iZXIgMjAxMyBhbmQgMTEgRmVicnVhcnkgMjAxNT9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyWWVhcnMoXG4gKiAgIG5ldyBEYXRlKDIwMTUsIDEsIDExKSxcbiAqICAgbmV3IERhdGUoMjAxMywgMTEsIDMxKVxuICogKVxuICogLy89PiAyXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluQ2FsZW5kYXJZZWFycyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5RGF0ZVJpZ2h0KTtcbiAgcmV0dXJuIGRhdGVMZWZ0LmdldEZ1bGxZZWFyKCkgLSBkYXRlUmlnaHQuZ2V0RnVsbFllYXIoKTtcbn0iLCJpbXBvcnQgeyBtaWxsaXNlY29uZHNJbkhvdXIgfSBmcm9tIFwiLi4vY29uc3RhbnRzL2luZGV4LmpzXCI7XG5pbXBvcnQgZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9kaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXRSb3VuZGluZ01ldGhvZCB9IGZyb20gXCIuLi9fbGliL3JvdW5kaW5nTWV0aG9kcy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5Ib3Vyc1xuICogQGNhdGVnb3J5IEhvdXIgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgaG91cnMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBob3VycyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5yb3VuZGluZ01ldGhvZD0ndHJ1bmMnXSAtIGEgcm91bmRpbmcgbWV0aG9kIChgY2VpbGAsIGBmbG9vcmAsIGByb3VuZGAgb3IgYHRydW5jYClcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgaG91cnNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgaG91cnMgYXJlIGJldHdlZW4gMiBKdWx5IDIwMTQgMDY6NTA6MDAgYW5kIDIgSnVseSAyMDE0IDE5OjAwOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluSG91cnMoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDE5LCAwKSxcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgNiwgNTApXG4gKiApXG4gKiAvLz0+IDEyXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluSG91cnMoZGF0ZUxlZnQsIGRhdGVSaWdodCwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRpZmYgPSBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMoZGF0ZUxlZnQsIGRhdGVSaWdodCkgLyBtaWxsaXNlY29uZHNJbkhvdXI7XG4gIHJldHVybiBnZXRSb3VuZGluZ01ldGhvZChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMucm91bmRpbmdNZXRob2QpKGRpZmYpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IG1pbGxpc2Vjb25kcyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTQgMTI6MzA6MjAuNjAwIGFuZCAyIEp1bHkgMjAxNCAxMjozMDoyMS43MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDEyLCAzMCwgMjEsIDcwMCksXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDEyLCAzMCwgMjAsIDYwMClcbiAqIClcbiAqIC8vPT4gMTEwMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICByZXR1cm4gdG9EYXRlKGRhdGVMZWZ0KS5nZXRUaW1lKCkgLSB0b0RhdGUoZGF0ZVJpZ2h0KS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5NaW51dGUgfSBmcm9tIFwiLi4vY29uc3RhbnRzL2luZGV4LmpzXCI7XG5pbXBvcnQgZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9kaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXRSb3VuZGluZ01ldGhvZCB9IGZyb20gXCIuLi9fbGliL3JvdW5kaW5nTWV0aG9kcy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5NaW51dGVzXG4gKiBAY2F0ZWdvcnkgTWludXRlIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIG1pbnV0ZXMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIHNpZ25lZCBudW1iZXIgb2YgZnVsbCAocm91bmRlZCB0b3dhcmRzIDApIG1pbnV0ZXMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIGVhcmxpZXIgZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMucm91bmRpbmdNZXRob2Q9J3RydW5jJ10gLSBhIHJvdW5kaW5nIG1ldGhvZCAoYGNlaWxgLCBgZmxvb3JgLCBgcm91bmRgIG9yIGB0cnVuY2ApXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIG1pbnV0ZXNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgbWludXRlcyBhcmUgYmV0d2VlbiAyIEp1bHkgMjAxNCAxMjowNzo1OSBhbmQgMiBKdWx5IDIwMTQgMTI6MjA6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5NaW51dGVzKFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgMjAsIDApLFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgNywgNTkpXG4gKiApXG4gKiAvLz0+IDEyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IG1pbnV0ZXMgYXJlIGJldHdlZW4gMTA6MDE6NTkgYW5kIDEwOjAwOjAwXG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5NaW51dGVzKFxuICogICBuZXcgRGF0ZSgyMDAwLCAwLCAxLCAxMCwgMCwgMCksXG4gKiAgIG5ldyBEYXRlKDIwMDAsIDAsIDEsIDEwLCAxLCA1OSlcbiAqIClcbiAqIC8vPT4gLTFcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5NaW51dGVzKGRhdGVMZWZ0LCBkYXRlUmlnaHQsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkaWZmID0gZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpIC8gbWlsbGlzZWNvbmRzSW5NaW51dGU7XG4gIHJldHVybiBnZXRSb3VuZGluZ01ldGhvZChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMucm91bmRpbmdNZXRob2QpKGRpZmYpO1xufSIsImltcG9ydCBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL2RpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldFJvdW5kaW5nTWV0aG9kIH0gZnJvbSBcIi4uL19saWIvcm91bmRpbmdNZXRob2RzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJblNlY29uZHNcbiAqIEBjYXRlZ29yeSBTZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2Ygc2Vjb25kcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIHNlY29uZHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIGVhcmxpZXIgZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMucm91bmRpbmdNZXRob2Q9J3RydW5jJ10gLSBhIHJvdW5kaW5nIG1ldGhvZCAoYGNlaWxgLCBgZmxvb3JgLCBgcm91bmRgIG9yIGB0cnVuY2ApXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIHNlY29uZHNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgc2Vjb25kcyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTQgMTI6MzA6MDcuOTk5IGFuZCAyIEp1bHkgMjAxNCAxMjozMDoyMC4wMDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5TZWNvbmRzKFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgMzAsIDIwLCAwKSxcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgMTIsIDMwLCA3LCA5OTkpXG4gKiApXG4gKiAvLz0+IDEyXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluU2Vjb25kcyhkYXRlTGVmdCwgZGF0ZVJpZ2h0LCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGlmZiA9IGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSAvIDEwMDA7XG4gIHJldHVybiBnZXRSb3VuZGluZ01ldGhvZChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMucm91bmRpbmdNZXRob2QpKGRpZmYpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZW5kT2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBlbmQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBlbmQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgZW5kIG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIGVuZCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGVuZE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAyMzo1OTo1OS45OTlcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbmRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMjMsIDU5LCA1OSwgOTk5KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGVuZE9mRGF5IGZyb20gXCIuLi9lbmRPZkRheS9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBlbmRPZlRvZGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgZW5kIG9mIHRvZGF5LlxuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZW5kIG9mIHRvZGF5LlxuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIGVuZCBvZiB0b2RheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNDpcbiAqIGNvbnN0IHJlc3VsdCA9IGVuZE9mVG9kYXkoKVxuICogLy89PiBNb24gT2N0IDYgMjAxNCAyMzo1OTo1OS45OTlcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbmRPZlRvZGF5KCkge1xuICByZXR1cm4gZW5kT2ZEYXkoRGF0ZS5ub3coKSk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBnZXRRdWFydGVyXG4gKiBAY2F0ZWdvcnkgUXVhcnRlciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIHllYXIgcXVhcnRlciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgeWVhciBxdWFydGVyIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZ2l2ZW4gZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIHF1YXJ0ZXJcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCBxdWFydGVyIGlzIDIgSnVseSAyMDE0P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0UXVhcnRlcihuZXcgRGF0ZSgyMDE0LCA2LCAyKSlcbiAqIC8vPT4gM1xuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFF1YXJ0ZXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgcXVhcnRlciA9IE1hdGguZmxvb3IoZGF0ZS5nZXRNb250aCgpIC8gMykgKyAxO1xuICByZXR1cm4gcXVhcnRlcjtcbn0iLCJpbXBvcnQgeyBzZWNvbmRzSW5EYXksIHNlY29uZHNJbkhvdXIsIHNlY29uZHNJbk1pbnV0ZSwgc2Vjb25kc0luTW9udGgsIHNlY29uZHNJblF1YXJ0ZXIsIHNlY29uZHNJbldlZWssIHNlY29uZHNJblllYXIgfSBmcm9tIFwiLi4vY29uc3RhbnRzL2luZGV4LmpzXCI7XG5pbXBvcnQgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzIGZyb20gXCIuLi9kaWZmZXJlbmNlSW5DYWxlbmRhckRheXMvaW5kZXguanNcIjtcbmltcG9ydCBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocyBmcm9tIFwiLi4vZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMvaW5kZXguanNcIjtcbmltcG9ydCBkaWZmZXJlbmNlSW5DYWxlbmRhclF1YXJ0ZXJzIGZyb20gXCIuLi9kaWZmZXJlbmNlSW5DYWxlbmRhclF1YXJ0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgZGlmZmVyZW5jZUluQ2FsZW5kYXJXZWVrcyBmcm9tIFwiLi4vZGlmZmVyZW5jZUluQ2FsZW5kYXJXZWVrcy9pbmRleC5qc1wiO1xuaW1wb3J0IGRpZmZlcmVuY2VJbkNhbGVuZGFyWWVhcnMgZnJvbSBcIi4uL2RpZmZlcmVuY2VJbkNhbGVuZGFyWWVhcnMvaW5kZXguanNcIjtcbmltcG9ydCBkaWZmZXJlbmNlSW5Ib3VycyBmcm9tIFwiLi4vZGlmZmVyZW5jZUluSG91cnMvaW5kZXguanNcIjtcbmltcG9ydCBkaWZmZXJlbmNlSW5NaW51dGVzIGZyb20gXCIuLi9kaWZmZXJlbmNlSW5NaW51dGVzL2luZGV4LmpzXCI7XG5pbXBvcnQgZGlmZmVyZW5jZUluU2Vjb25kcyBmcm9tIFwiLi4vZGlmZmVyZW5jZUluU2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGludGxGb3JtYXREaXN0YW5jZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBGb3JtYXRzIGRpc3RhbmNlIGJldHdlZW4gdHdvIGRhdGVzIGluIGEgaHVtYW4tcmVhZGFibGUgZm9ybWF0XG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoZSBmdW5jdGlvbiBjYWxjdWxhdGVzIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdHdvIGRhdGVzIGFuZCBmb3JtYXRzIGl0IGFzIGEgaHVtYW4tcmVhZGFibGUgc3RyaW5nLlxuICpcbiAqIFRoZSBmdW5jdGlvbiB3aWxsIHBpY2sgdGhlIG1vc3QgYXBwcm9wcmlhdGUgdW5pdCBkZXBlbmRpbmcgb24gdGhlIGRpc3RhbmNlIGJldHdlZW4gZGF0ZXMuIEZvciBleGFtcGxlLCBpZiB0aGUgZGlzdGFuY2UgaXMgYSBmZXcgaG91cnMsIGl0IG1pZ2h0IHJldHVybiBgeCBob3Vyc2AuIElmIHRoZSBkaXN0YW5jZSBpcyBhIGZldyBtb250aHMsIGl0IG1pZ2h0IHJldHVybiBgeCBtb250aHNgLlxuICpcbiAqIFlvdSBjYW4gYWxzbyBzcGVjaWZ5IGEgdW5pdCB0byBmb3JjZSB1c2luZyBpdCByZWdhcmRsZXNzIG9mIHRoZSBkaXN0YW5jZSB0byBnZXQgYSByZXN1bHQgbGlrZSBgMTIzNDU2IGhvdXJzYC5cbiAqXG4gKiBTZWUgdGhlIHRhYmxlIGJlbG93IGZvciB0aGUgdW5pdCBwaWNraW5nIGxvZ2ljOlxuICpcbiAqIHwgRGlzdGFuY2UgYmV0d2VlbiBkYXRlcyB8IFJlc3VsdCAocGFzdCkgIHwgUmVzdWx0IChmdXR1cmUpIHxcbiAqIHwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB8IC0tLS0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0tIHxcbiAqIHwgMCBzZWNvbmRzICAgICAgICAgICAgICB8IG5vdyAgICAgICAgICAgIHwgbm93ICAgICAgICAgICAgIHxcbiAqIHwgMS01OSBzZWNvbmRzICAgICAgICAgICB8IFggc2Vjb25kcyBhZ28gIHwgaW4gWCBzZWNvbmRzICAgIHxcbiAqIHwgMS01OSBtaW51dGVzICAgICAgICAgICB8IFggbWludXRlcyBhZ28gIHwgaW4gWCBtaW51dGVzICAgIHxcbiAqIHwgMS0yMyBob3VycyAgICAgICAgICAgICB8IFggaG91cnMgYWdvICAgIHwgaW4gWCBob3VycyAgICAgIHxcbiAqIHwgMSBkYXkgICAgICAgICAgICAgICAgICB8IHllc3RlcmRheSAgICAgIHwgdG9tb3Jyb3cgICAgICAgIHxcbiAqIHwgMi02IGRheXMgICAgICAgICAgICAgICB8IFggZGF5cyBhZ28gICAgIHwgaW4gWCBkYXlzICAgICAgIHxcbiAqIHwgNyBkYXlzICAgICAgICAgICAgICAgICB8IGxhc3Qgd2VlayAgICAgIHwgbmV4dCB3ZWVrICAgICAgIHxcbiAqIHwgOCBkYXlzLTEgbW9udGggICAgICAgICB8IFggd2Vla3MgYWdvICAgIHwgaW4gWCB3ZWVrcyAgICAgIHxcbiAqIHwgMSBtb250aCAgICAgICAgICAgICAgICB8IGxhc3QgbW9udGggICAgIHwgbmV4dCBtb250aCAgICAgIHxcbiAqIHwgMi0zIG1vbnRocyAgICAgICAgICAgICB8IFggbW9udGhzIGFnbyAgIHwgaW4gWCBtb250aHMgICAgIHxcbiAqIHwgMSBxdWFydGVyICAgICAgICAgICAgICB8IGxhc3QgcXVhcnRlciAgIHwgbmV4dCBxdWFydGVyICAgIHxcbiAqIHwgMi0zIHF1YXJ0ZXJzICAgICAgICAgICB8IFggcXVhcnRlcnMgYWdvIHwgaW4gWCBxdWFydGVycyAgIHxcbiAqIHwgMSB5ZWFyICAgICAgICAgICAgICAgICB8IGxhc3QgeWVhciAgICAgIHwgbmV4dCB5ZWFyICAgICAgIHxcbiAqIHwgMisgeWVhcnMgICAgICAgICAgICAgICB8IFggeWVhcnMgYWdvICAgIHwgaW4gWCB5ZWFycyAgICAgIHxcbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGJhc2VEYXRlIC0gdGhlIGRhdGUgdG8gY29tcGFyZSB3aXRoLlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMudW5pdF0gLSBmb3JtYXRzIHRoZSBkaXN0YW5jZSB3aXRoIHRoZSBnaXZlbiB1bml0ICgneWVhcicsICdxdWFydGVyJywgJ21vbnRoJywgJ3dlZWsnLCAnZGF5JywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCcpLlxuICogQHBhcmFtIHtTdHJpbmd8U3RyaW5nW119IFtvcHRpb25zLmxvY2FsZV0gLSB0aGUgbG9jYWxlIHRvIHVzZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5sb2NhbGVNYXRjaGVyPSdiZXN0IGZpdCddIC0gdGhlIGxvY2FsZSBtYXRjaGluZyBhbGdvcml0aG0gdG8gdXNlLiBPdGhlciB2YWx1ZTogJ2xvb2t1cCcuXG4gKiBTZWUgTUROIGZvciBkZXRhaWxzIFtMb2NhbGUgaWRlbnRpZmljYXRpb24gYW5kIG5lZ290aWF0aW9uXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9JbnRsI2xvY2FsZV9pZGVudGlmaWNhdGlvbl9hbmRfbmVnb3RpYXRpb24pXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMubnVtZXJpYz0nYXV0byddIC0gdGhlIG91dHB1dCBtZXNzYWdlIGZvcm1hdC4gVGhlIHZhbHVlcyBhcmUgJ2F1dG8nIChlLmcuIGB5ZXN0ZXJkYXlgKSwgJ2Fsd2F5cycoZS5nLiBgMSBkYXkgYWdvYCkuXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuc3R5bGU9J2xvbmcnXSAtIHRoZSBsZW5ndGggb2YgdGhlIHJlc3VsdC4gVGhlIHZhbHVlcyBhcmU6ICdsb25nJyAoZS5nLiBgMSBtb250aGApLCAnc2hvcnQnIChlLmcuICdpbiAxIG1vLicpLCAnbmFycm93JyAoZS5nLiAnaW4gMSBtby4nKS5cbiAqIFRoZSBuYXJyb3cgb25lIGNvdWxkIGJlIHNpbWlsYXIgdG8gdGhlIHNob3J0IG9uZSBmb3Igc29tZSBsb2NhbGVzLlxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGRpc3RhbmNlIGluIHdvcmRzIGFjY29yZGluZyB0byBsYW5ndWFnZS1zZW5zaXRpdmUgcmVsYXRpdmUgdGltZSBmb3JtYXR0aW5nLlxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGJhc2VEYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLnVuaXRgIG11c3Qgbm90IGJlIGludmFsaWQgVW5pdFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IG5vdCBiZSBpbnZhbGlkIGxvY2FsZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlTWF0Y2hlcmAgbXVzdCBub3QgYmUgaW52YWxpZCBsb2NhbGVNYXRjaGVyXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5udW1lcmljYCBtdXN0IG5vdCBiZSBpbnZhbGlkIG51bWVyaWNcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLnN0eWxlYCBtdXN0IG5vdCBiZSBpbnZhbGlkIHN0eWxlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoYXQgaXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIGRhdGVzIHdoZW4gdGhlIGZpc3QgZGF0ZSBpcyBhZnRlciB0aGUgc2Vjb25kP1xuICogaW50bEZvcm1hdERpc3RhbmNlKFxuICogICBuZXcgRGF0ZSgxOTg2LCAzLCA0LCAxMSwgMzAsIDApLFxuICogICBuZXcgRGF0ZSgxOTg2LCAzLCA0LCAxMCwgMzAsIDApXG4gKiApXG4gKiAvLz0+ICdpbiAxIGhvdXInXG4gKlxuICogLy8gV2hhdCBpcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgZGF0ZXMgd2hlbiB0aGUgZmlzdCBkYXRlIGlzIGJlZm9yZSB0aGUgc2Vjb25kP1xuICogaW50bEZvcm1hdERpc3RhbmNlKFxuICogICBuZXcgRGF0ZSgxOTg2LCAzLCA0LCAxMCwgMzAsIDApLFxuICogICBuZXcgRGF0ZSgxOTg2LCAzLCA0LCAxMSwgMzAsIDApXG4gKiApXG4gKiAvLz0+ICcxIGhvdXIgYWdvJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBVc2UgdGhlIHVuaXQgb3B0aW9uIHRvIGZvcmNlIHRoZSBmdW5jdGlvbiB0byBvdXRwdXQgdGhlIHJlc3VsdCBpbiBxdWFydGVycy4gV2l0aG91dCBzZXR0aW5nIGl0LCB0aGUgZXhhbXBsZSB3b3VsZCByZXR1cm4gXCJuZXh0IHllYXJcIlxuICogaW50bEZvcm1hdERpc3RhbmNlKFxuICogICBuZXcgRGF0ZSgxOTg3LCA2LCA0LCAxMCwgMzAsIDApLFxuICogICBuZXcgRGF0ZSgxOTg2LCAzLCA0LCAxMCwgMzAsIDApLFxuICogICB7IHVuaXQ6ICdxdWFydGVyJyB9XG4gKiApXG4gKiAvLz0+ICdpbiA1IHF1YXJ0ZXJzJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBVc2UgdGhlIGxvY2FsZSBvcHRpb24gdG8gZ2V0IHRoZSByZXN1bHQgaW4gU3BhbmlzaC4gV2l0aG91dCBzZXR0aW5nIGl0LCB0aGUgZXhhbXBsZSB3b3VsZCByZXR1cm4gXCJpbiAxIGhvdXJcIi5cbiAqIGludGxGb3JtYXREaXN0YW5jZShcbiAqICAgbmV3IERhdGUoMTk4NiwgMywgNCwgMTEsIDMwLCAwKSxcbiAqICAgbmV3IERhdGUoMTk4NiwgMywgNCwgMTAsIDMwLCAwKSxcbiAqICAgeyBsb2NhbGU6ICdlcycgfVxuICogKVxuICogLy89PiAnZGVudHJvIGRlIDEgaG9yYSdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVXNlIHRoZSBudW1lcmljIG9wdGlvbiB0byBmb3JjZSB0aGUgZnVuY3Rpb24gdG8gdXNlIG51bWVyaWMgdmFsdWVzLiBXaXRob3V0IHNldHRpbmcgaXQsIHRoZSBleGFtcGxlIHdvdWxkIHJldHVybiBcInRvbW9ycm93XCIuXG4gKiBpbnRsRm9ybWF0RGlzdGFuY2UoXG4gKiAgIG5ldyBEYXRlKDE5ODYsIDMsIDUsIDExLCAzMCwgMCksXG4gKiAgIG5ldyBEYXRlKDE5ODYsIDMsIDQsIDExLCAzMCwgMCksXG4gKiAgIHsgbnVtZXJpYzogJ2Fsd2F5cycgfVxuICogKVxuICogLy89PiAnaW4gMSBkYXknXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFVzZSB0aGUgc3R5bGUgb3B0aW9uIHRvIGZvcmNlIHRoZSBmdW5jdGlvbiB0byB1c2Ugc2hvcnQgdmFsdWVzLiBXaXRob3V0IHNldHRpbmcgaXQsIHRoZSBleGFtcGxlIHdvdWxkIHJldHVybiBcImluIDIgeWVhcnNcIi5cbiAqIGludGxGb3JtYXREaXN0YW5jZShcbiAqICAgbmV3IERhdGUoMTk4OCwgMywgNCwgMTEsIDMwLCAwKSxcbiAqICAgbmV3IERhdGUoMTk4NiwgMywgNCwgMTEsIDMwLCAwKSxcbiAqICAgeyBzdHlsZTogJ3Nob3J0JyB9XG4gKiApXG4gKiAvLz0+ICdpbiAyIHlyJ1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbnRsRm9ybWF0RGlzdGFuY2UoZGF0ZSwgYmFzZURhdGUsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciB2YWx1ZSA9IDA7XG4gIHZhciB1bml0O1xuICB2YXIgZGF0ZUxlZnQgPSB0b0RhdGUoZGF0ZSk7XG4gIHZhciBkYXRlUmlnaHQgPSB0b0RhdGUoYmFzZURhdGUpO1xuXG4gIGlmICghKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMudW5pdCkpIHtcbiAgICAvLyBHZXQgdGhlIHVuaXQgYmFzZWQgb24gZGlmZkluU2Vjb25kcyBjYWxjdWxhdGlvbnMgaWYgbm8gdW5pdCBpcyBzcGVjaWZpZWRcbiAgICB2YXIgZGlmZkluU2Vjb25kcyA9IGRpZmZlcmVuY2VJblNlY29uZHMoZGF0ZUxlZnQsIGRhdGVSaWdodCk7IC8vIFRoZSBzbWFsbGVzdCB1bml0XG5cbiAgICBpZiAoTWF0aC5hYnMoZGlmZkluU2Vjb25kcykgPCBzZWNvbmRzSW5NaW51dGUpIHtcbiAgICAgIHZhbHVlID0gZGlmZmVyZW5jZUluU2Vjb25kcyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KTtcbiAgICAgIHVuaXQgPSAnc2Vjb25kJztcbiAgICB9IGVsc2UgaWYgKE1hdGguYWJzKGRpZmZJblNlY29uZHMpIDwgc2Vjb25kc0luSG91cikge1xuICAgICAgdmFsdWUgPSBkaWZmZXJlbmNlSW5NaW51dGVzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpO1xuICAgICAgdW5pdCA9ICdtaW51dGUnO1xuICAgIH0gZWxzZSBpZiAoTWF0aC5hYnMoZGlmZkluU2Vjb25kcykgPCBzZWNvbmRzSW5EYXkgJiYgTWF0aC5hYnMoZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpKSA8IDEpIHtcbiAgICAgIHZhbHVlID0gZGlmZmVyZW5jZUluSG91cnMoZGF0ZUxlZnQsIGRhdGVSaWdodCk7XG4gICAgICB1bml0ID0gJ2hvdXInO1xuICAgIH0gZWxzZSBpZiAoTWF0aC5hYnMoZGlmZkluU2Vjb25kcykgPCBzZWNvbmRzSW5XZWVrICYmICh2YWx1ZSA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSkgJiYgTWF0aC5hYnModmFsdWUpIDwgNykge1xuICAgICAgdW5pdCA9ICdkYXknO1xuICAgIH0gZWxzZSBpZiAoTWF0aC5hYnMoZGlmZkluU2Vjb25kcykgPCBzZWNvbmRzSW5Nb250aCkge1xuICAgICAgdmFsdWUgPSBkaWZmZXJlbmNlSW5DYWxlbmRhcldlZWtzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpO1xuICAgICAgdW5pdCA9ICd3ZWVrJztcbiAgICB9IGVsc2UgaWYgKE1hdGguYWJzKGRpZmZJblNlY29uZHMpIDwgc2Vjb25kc0luUXVhcnRlcikge1xuICAgICAgdmFsdWUgPSBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KTtcbiAgICAgIHVuaXQgPSAnbW9udGgnO1xuICAgIH0gZWxzZSBpZiAoTWF0aC5hYnMoZGlmZkluU2Vjb25kcykgPCBzZWNvbmRzSW5ZZWFyKSB7XG4gICAgICBpZiAoZGlmZmVyZW5jZUluQ2FsZW5kYXJRdWFydGVycyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSA8IDQpIHtcbiAgICAgICAgLy8gVG8gZmlsdGVyIG91dCBjYXNlcyB0aGF0IGFyZSBsZXNzIHRoYW4gYSB5ZWFyIGJ1dCBtYXRjaCA0IHF1YXJ0ZXJzXG4gICAgICAgIHZhbHVlID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJRdWFydGVycyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KTtcbiAgICAgICAgdW5pdCA9ICdxdWFydGVyJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJZZWFycyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KTtcbiAgICAgICAgdW5pdCA9ICd5ZWFyJztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSBkaWZmZXJlbmNlSW5DYWxlbmRhclllYXJzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpO1xuICAgICAgdW5pdCA9ICd5ZWFyJztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gR2V0IHRoZSB2YWx1ZSBpZiB1bml0IGlzIHNwZWNpZmllZFxuICAgIHVuaXQgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMudW5pdDtcblxuICAgIGlmICh1bml0ID09PSAnc2Vjb25kJykge1xuICAgICAgdmFsdWUgPSBkaWZmZXJlbmNlSW5TZWNvbmRzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpO1xuICAgIH0gZWxzZSBpZiAodW5pdCA9PT0gJ21pbnV0ZScpIHtcbiAgICAgIHZhbHVlID0gZGlmZmVyZW5jZUluTWludXRlcyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KTtcbiAgICB9IGVsc2UgaWYgKHVuaXQgPT09ICdob3VyJykge1xuICAgICAgdmFsdWUgPSBkaWZmZXJlbmNlSW5Ib3VycyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KTtcbiAgICB9IGVsc2UgaWYgKHVuaXQgPT09ICdkYXknKSB7XG4gICAgICB2YWx1ZSA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KTtcbiAgICB9IGVsc2UgaWYgKHVuaXQgPT09ICd3ZWVrJykge1xuICAgICAgdmFsdWUgPSBkaWZmZXJlbmNlSW5DYWxlbmRhcldlZWtzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpO1xuICAgIH0gZWxzZSBpZiAodW5pdCA9PT0gJ21vbnRoJykge1xuICAgICAgdmFsdWUgPSBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KTtcbiAgICB9IGVsc2UgaWYgKHVuaXQgPT09ICdxdWFydGVyJykge1xuICAgICAgdmFsdWUgPSBkaWZmZXJlbmNlSW5DYWxlbmRhclF1YXJ0ZXJzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpO1xuICAgIH0gZWxzZSBpZiAodW5pdCA9PT0gJ3llYXInKSB7XG4gICAgICB2YWx1ZSA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyWWVhcnMoZGF0ZUxlZnQsIGRhdGVSaWdodCk7XG4gICAgfVxuICB9XG5cbiAgdmFyIHJ0ZiA9IG5ldyBJbnRsLlJlbGF0aXZlVGltZUZvcm1hdChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMubG9jYWxlLCB7XG4gICAgbG9jYWxlTWF0Y2hlcjogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmxvY2FsZU1hdGNoZXIsXG4gICAgbnVtZXJpYzogKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5udW1lcmljKSB8fCAnYXV0bycsXG4gICAgc3R5bGU6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5zdHlsZVxuICB9KTtcbiAgcmV0dXJuIHJ0Zi5mb3JtYXQodmFsdWUsIHVuaXQpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNQYXN0XG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBwYXN0P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBwYXN0P1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyBpbiB0aGUgcGFzdFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyAyIEp1bHkgMjAxNCBpbiB0aGUgcGFzdD9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzUGFzdChuZXcgRGF0ZSgyMDE0LCA2LCAyKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzUGFzdChkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiB0b0RhdGUoZGlydHlEYXRlKS5nZXRUaW1lKCkgPCBEYXRlLm5vdygpO1xufSIsImltcG9ydCBzdGFydE9mRGF5IGZyb20gXCIuLi9zdGFydE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1NhbWVEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSwgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciBhbmQgNCBPY3RvYmVyIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNCwgOSwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciwgMjAxNCBhbmQgNCBTZXB0ZW1iZXIsIDIwMTUgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE1LCA4LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVEYXkoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mRGF5LmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZkRheS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHN0YXJ0T2ZXZWVrIGZyb20gXCIuLi9zdGFydE9mV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1NhbWVXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcilcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDcsIDMxKSwgbmV3IERhdGUoMjAxNCwgOCwgNCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgd2VlayBzdGFydHMgd2l0aCBNb25kYXksXG4gKiAvLyBhcmUgMzEgQXVndXN0IDIwMTQgYW5kIDQgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSwge1xuICogICB3ZWVrU3RhcnRzT246IDFcbiAqIH0pXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAxIEphbnVhcnkgMjAxNCBhbmQgMSBKYW51YXJ5IDIwMTUgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgMCwgMSksIG5ldyBEYXRlKDIwMTUsIDAsIDEpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVXZWVrKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0LCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZUxlZnQsIG9wdGlvbnMpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZldlZWsgPSBzdGFydE9mV2VlayhkaXJ0eURhdGVSaWdodCwgb3B0aW9ucyk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZXZWVrLmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZldlZWsuZ2V0VGltZSgpO1xufSIsImltcG9ydCBpc1NhbWVXZWVrIGZyb20gXCIuLi9pc1NhbWVXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzVGhpc1dlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIHdlZWsgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSB3ZWVrIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIHRoZSBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgaW4gdGhpcyB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQsIGlzIDIxIFNlcHRlbWJlciAyMDE0IGluIHRoaXMgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVGhpc1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMjEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0IGFuZCB3ZWVrIHN0YXJ0cyB3aXRoIE1vbmRheVxuICogLy8gaXMgMjEgU2VwdGVtYmVyIDIwMTQgaW4gdGhpcyB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNUaGlzV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyMSksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVGhpc1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lV2VlayhkaXJ0eURhdGUsIERhdGUubm93KCksIG9wdGlvbnMpO1xufSIsImltcG9ydCBpc1NhbWVEYXkgZnJvbSBcIi4uL2lzU2FtZURheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNUb2RheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdG9kYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgNiBPY3RvYmVyIDE0OjAwOjAwIHRvZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNUb2RheShuZXcgRGF0ZSgyMDE0LCA5LCA2LCAxNCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RvZGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZURheShkaXJ0eURhdGUsIERhdGUubm93KCkpO1xufSIsImltcG9ydCBhZGREYXlzIGZyb20gXCIuLi9hZGREYXlzL2luZGV4LmpzXCI7XG5pbXBvcnQgaXNTYW1lRGF5IGZyb20gXCIuLi9pc1NhbWVEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVG9tb3Jyb3dcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdG9tb3Jyb3c/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdG9tb3Jyb3c/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHRvbW9ycm93XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDcgT2N0b2JlciAxNDowMDowMCB0b21vcnJvdz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVG9tb3Jyb3cobmV3IERhdGUoMjAxNCwgOSwgNywgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUb21vcnJvdyhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVEYXkoZGlydHlEYXRlLCBhZGREYXlzKERhdGUubm93KCksIDEpKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZldlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFN1biBBdWcgMzEgMjAxNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0aGUgd2VlayBzdGFydHMgb24gTW9uZGF5LCB0aGUgc3RhcnQgb2YgdGhlIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkd2Vla1N0YXJ0c09uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDApOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldERheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBhcmd1bWVudCA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtUb0RvfSBmcm9tICcuL3RvRG9zJ1xuaW1wb3J0IHtsb2FkUHJvamVjdEZpZWxkc30gZnJvbSAnLi9wYWdlTG9hZCdcbmltcG9ydCB7IGludGxGb3JtYXREaXN0YW5jZSwgZW5kT2ZUb2RheSB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCBkZWxldGVJY29uIGZyb20gJy4vaWNvbnMvZGVsZXRlLnN2Zyc7XG5pbXBvcnQgZGVsZXRlSWNvbkhvdmVyIGZyb20gJy4vaWNvbnMvZGVsZXRlSG92ZXIuc3ZnJ1xuaW1wb3J0IGV4cGFuZCBmcm9tICcuL2ljb25zL2V4cGFuZC5zdmcnXG5pbXBvcnQgZXhwYW5kSG92ZXIgZnJvbSAnLi9pY29ucy9leHBhbmRIb3Zlci5zdmcnXG5pbXBvcnQgYWRkVGFzayBmcm9tICcuL2ljb25zL2FkZFRhc2suc3ZnJ1xuaW1wb3J0IGFkZFRhc2tIb3ZlciBmcm9tICcuL2ljb25zL2FkZFRhc2tIb3Zlci5zdmcnXG5pbXBvcnQgZWRpdEljb24gZnJvbSAnLi9pY29ucy9lZGl0LnN2ZydcbmltcG9ydCBlZGl0SG92ZXIgZnJvbSAnLi9pY29ucy9lZGl0SG92ZXIuc3ZnJ1xuaW1wb3J0IHNhdmVJY29uIGZyb20gJy4vaWNvbnMvc2F2ZS5zdmcnXG5pbXBvcnQgc2F2ZUhvdmVyIGZyb20gJy4vaWNvbnMvc2F2ZUhvdmVyLnN2ZydcbmltcG9ydCBhZGRUb0RvIGZyb20gJy4vaWNvbnMvYWRkVG9Eby5zdmcnXG5pbXBvcnQgYWRkVG9Eb0hvdmVyIGZyb20gJy4vaWNvbnMvYWRkVG9Eb0hvdmVyLnN2ZydcblxuLy9DbGVhcnMgYWxsIGlucHV0c1xuXG5mdW5jdGlvbiBjbGVhckZpZWxkcygpIHtcbiAgICBsZXQgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcbiAgICBpbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgfSk7XG59O1xuXG4vLyBDbGVhcnMgbWFpbiBzZWN0aW9uIG9mIFRvLURvJ3MgYW5kIFByb2plY3QgaW5mb3JtYXRpb25cblxuZnVuY3Rpb24gY2xlYXJNYWluKCkge1xuICAgIGxldCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI21haW5gKTtcbiAgICBtYWluLmlubmVySFRNTCA9ICcnXG59O1xuXG4vLyBXcml0ZXMgYSBwcm9qZWN0XG5cbmZ1bmN0aW9uIHdyaXRlUHJvamVjdChwcm9qZWN0KSB7XG4gICAgXG4gICAgbGV0IHByb2plY3RGaWVsZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdEZpZWxkcycpXG5cbiAgICBsZXQgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qZWN0Jyk7XG4gICAgcHJvamVjdENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgcHJvamVjdC5pZClcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjbGVhck1haW4oKTtcbiAgICAgICAgcHJvamVjdC53cml0ZVRvRG9MaXN0KCk7XG4gICAgICAgIGlmIChwcm9qZWN0LmNvbnN0cnVjdG9yLm5hbWUgPT0gJ1Byb2plY3QnIHx8IHByb2plY3QuY29uc3RydWN0b3IubmFtZSA9PSAnSW5ib3gnKVxuICAgICAgICBwcm9qZWN0LndyaXRlTmV3VG9Eb0J1dHRvbigpO1xuICAgIH0pO1xuXG4gICAgcHJvamVjdEZpZWxkcy5yZW1vdmUoKTtcblxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuXG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmQodGl0bGUpO1xuXG4gICAgaWYgKHByb2plY3QuY29uc3RydWN0b3IubmFtZSA9PSAnUHJvamVjdCcpIHtcbiAgICAgICAgcHJvamVjdC5zdG9yZVByb2plY3QoKVxuICAgICAgICBsZXQgZGVsZXRlQnV0dG9uID0gbmV3IEltYWdlKClcbiAgICAgICAgZGVsZXRlQnV0dG9uLnNyYyA9IGRlbGV0ZUljb247XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICBwcm9qZWN0Q29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICAgICAgcHJvamVjdC5kZWxldGVQcm9qZWN0KClcbiAgICAgICAgICAgIGNsZWFyTWFpbigpO1xuICAgICAgICB9KVxuICAgICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xuICAgICAgICAgICAgZGVsZXRlQnV0dG9uLnNyYyA9IGRlbGV0ZUljb25Ib3ZlcjtcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5zcmMgPSBkZWxldGVJY29uO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZChkZWxldGVCdXR0b24pO1xuXG4gICAgfTtcblxuICAgIGlmIChwcm9qZWN0LmNvbnN0cnVjdG9yLm5hbWUgPT09ICdQcm9qZWN0Jykge1xuICAgICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dyaXR0ZW5Qcm9qZWN0cycpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kKHByb2plY3RDb250YWluZXIpO1xuICAgIH07XG5cbiAgICBpZiAocHJvamVjdC5jb25zdHJ1Y3Rvci5uYW1lICE9ICdQcm9qZWN0Jykge1xuICAgICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RlZmF1bHRQcm9qZWN0cycpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kKHByb2plY3RDb250YWluZXIpO1xuICAgIH07XG5cbiAgICBsb2FkUHJvamVjdEZpZWxkcygpOyAvLyBTaG91bGQgdGhpcyBiZSBjYWxsZWQgZnJvbSBkb20gbWFuaXB1bGF0aW9uIGluc3RlYWQgb2YgcGFnZSBsb2FkP1xufVxuXG4vLyBXcml0ZXMgdGhlIFByb2plY3QgSGVhZGVycyB0aGF0IGFwcGVhciBpbiB0aGUgbWFpbiBzZWN0aW9uXG5cbmZ1bmN0aW9uIHdyaXRlSGVhZGVycyhwcm9qZWN0KSB7XG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbicpO1xuICAgIGxldCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gICAgXG4gICAgbGV0IHByb2plY3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgcHJvamVjdERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdC5kZXNjcmlwdGlvbjtcblxuICAgIGxldCBoZWFkZXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVycy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hlYWRlcnMnKVxuXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICd0aXRsZUhlYWRlcicpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ1RpdGxlJztcblxuICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVzY3JpcHRpb25IZWFkZXInKTtcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbic7XG5cbiAgICBsZXQgZHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZHVlLnNldEF0dHJpYnV0ZSgnaWQnLCAnZHVlSGVhZGVyJyk7XG4gICAgZHVlLnRleHRDb250ZW50ID0gJ0R1ZSc7XG5cbiAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaW9yaXR5SGVhZGVyJyk7XG4gICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSAnUHJpb3JpdHknO1xuXG4gICAgaGVhZGVycy5hcHBlbmQodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWUsIHByaW9yaXR5KTtcblxuICAgIG1haW4uYXBwZW5kKHByb2plY3RUaXRsZSwgcHJvamVjdERlc2NyaXB0aW9uLCBoZWFkZXJzKTtcbn1cblxuLy8gV3JpdGVzIGJ1dHRvbiB0aGF0IGdlbmVyYXRlcyB0b2RvIGZpZWxkc1xuXG5mdW5jdGlvbiB3cml0ZVRvRG9CdXR0b24ocHJvamVjdCkge1xuICAgIGxldCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4nKVxuICAgIGxldCBidXR0b24gPSBuZXcgSW1hZ2U7XG4gICAgYnV0dG9uLnNyYyA9IGFkZFRhc2tcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICd3cml0ZVRvRG9CdXR0b24nKTtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSAnTmV3IFRvIERvJ1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgd3JpdGVUb0RvRmllbGRzKHByb2plY3QpXG4gICAgICAgIGJ1dHRvbi5yZW1vdmUoKTtcbiAgICB9KVxuXG4gICAgbGV0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJvdy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3JvdycpO1xuXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcbiAgICAgICAgYnV0dG9uLnNyYyA9IGFkZFRhc2tIb3ZlcjtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICAgICAgICBidXR0b24uc3JjID0gYWRkVGFzaztcbiAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgcm93LmFwcGVuZChidXR0b24pO1xuXG4gICAgbWFpbi5hcHBlbmQocm93KTtcbiB9XG5cbi8vIE1ha2VzIGZpZWxkcyB0byB3cml0ZSBpbiBuZXcgdG9kb1xuXG5mdW5jdGlvbiB3cml0ZVRvRG9GaWVsZHMocHJvamVjdCkge1xuXG4gICAgIGxldCB0b0RvRmllbGRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RpdGxlJyk7XG4gICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVGl0bGUnKTtcblxuICAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVzY3JpcHRpb24nKTtcbiAgICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdEZXNjcmlwdGlvbicpO1xuIFxuICAgICBsZXQgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgIGR1ZURhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgICAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2R1ZURhdGUnKTtcbiAgICAgZHVlRGF0ZS52YWx1ZUFzRGF0ZSA9IG5ldyBEYXRlKCk7XG4gXG4gICAgIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaW9yaXR5Jyk7XG5cbiAgICAgbGV0IHByaW9yaXR5T3B0aW9ucyA9IFsnTG93JywgJ05vcm1hbCcsICdIaWdoJ11cblxuICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByaW9yaXR5T3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IHByaW9yaXR5T3B0aW9uc1tpXTtcbiAgICAgICAgb3B0aW9uLnRleHQgPSBwcmlvcml0eU9wdGlvbnNbaV07XG4gICAgICAgIHByaW9yaXR5LmFwcGVuZChvcHRpb24pO1xuICAgICB9O1xuXG4gICAgIC8vQnV0dG9uIGNvbmZpcm1zIG5ldyBUb0RvIGFuZCB3cml0ZXMgbmV3IG9iamVjdFxuXG4gICAgIGxldCBuZXdUb0RvID0gbmV3IEltYWdlKCk7XG4gICAgIG5ld1RvRG8uc3JjID0gYWRkVG9EbztcbiAgICAgbmV3VG9Eby5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25ld1RvRG8nKVxuICAgICBuZXdUb0RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBsZXQgdG9EbyA9IG5ldyBUb0RvKHRpdGxlLnZhbHVlLCBkZXNjcmlwdGlvbi52YWx1ZSwgZHVlRGF0ZS52YWx1ZSwgcHJpb3JpdHkudmFsdWUsIHByb2plY3QpO1xuICAgICAgICBjbGVhck1haW4oKVxuICAgICAgICB0b0RvLnN0b3JlVG9EbygpXG4gICAgICAgIHRvRG8ucHJvamVjdC53cml0ZVRvRG9MaXN0KCk7XG4gICAgICAgIHRvRG8ucHJvamVjdC53cml0ZU5ld1RvRG9CdXR0b24oKTtcbiAgICAgICAgY29uc29sZS5sb2codG9Eby5wcm9qZWN0KVxuICAgIH0pO1xuXG4gICAgbmV3VG9Eby5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgICAgIG5ld1RvRG8uc3JjID0gYWRkVG9Eb0hvdmVyO1xuICAgICAgICBuZXdUb0RvLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICAgICAgICBuZXdUb0RvLnNyYyA9IGFkZFRvRG87XG4gICAgICAgIH0pXG4gICAgfSlcbiBcbiAgICB0b0RvRmllbGRzLmFwcGVuZCh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBuZXdUb0RvKTtcblxuICAgIGxldCByb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcm93YClcbiAgICByb3cuYXBwZW5kKHRvRG9GaWVsZHMpO1xufTtcblxuLy8gV3JpdGVzIGEgVG8gRG8gZnJvbSB0aGUgVG8gRG8gRmllbGRzXG5cbmZ1bmN0aW9uIHdyaXRlVG9Ebyh0b0RvKSB7XG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjbWFpbmApO1xuXG4gICAgbGV0IHRvRG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b0RvQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndG9EbycpO1xuXG4gICAgLy8gVG8gRG8gRmllbGRzXG5cbiAgICBsZXQgZG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZG9uZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICBkb25lLmNoZWNrZWQgPSB0b0RvLmRvbmU7XG4gICAgZG9uZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIHRvRG8uZG9uZSA9IGRvbmUuY2hlY2tlZDtcbiAgICAgICAgdG9Eb0NvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgdG9Eby51cGRhdGVTdG9yZWRMaXN0KCk7XG4gICAgfSk7XG4gICAgZG9uZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RvRG9Eb25lJyk7XG5cbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRvRG8udGl0bGU7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0b0RvVGl0bGUnKVxuICAgIFxuICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdG9Eby5kZXNjcmlwdGlvbjtcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RvRG9EZXNjcmlwdGlvbicpO1xuICAgIFxuICAgIGxldCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IGludGxGb3JtYXREaXN0YW5jZShuZXcgRGF0ZSh0b0RvLmR1ZURhdGUpLCBlbmRPZlRvZGF5KCkpO1xuICAgIGR1ZURhdGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0b0RvRHVlJyk7XG5cbiAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBsZXQgcHJpb3JpdHlPcHRpb25zID0gWydMb3cnLCAnTm9ybWFsJywgJ0hpZ2gnXVxuICAgIHByaW9yaXR5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndG9Eb1ByaW9yaXR5Jyk7XG5cbiAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmlvcml0eU9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb24udmFsdWUgPSBwcmlvcml0eU9wdGlvbnNbaV07XG4gICAgICAgIG9wdGlvbi50ZXh0ID0gcHJpb3JpdHlPcHRpb25zW2ldO1xuICAgICAgICBwcmlvcml0eS5hcHBlbmQob3B0aW9uKTtcbiAgICAgfTtcblxuICAgICBwcmlvcml0eS52YWx1ZSA9IHRvRG8ucHJpb3JpdHk7XG5cbiAgICAgcHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0b0RvLnByaW9yaXR5ID0gcHJpb3JpdHkudmFsdWU7XG4gICAgICAgIHRvRG8udXBkYXRlU3RvcmVkTGlzdCgpO1xuICAgICB9KVxuXG4gICAgLy8gTW9kYWwgR2VuZXJhdGlvbiAoRXhwYW5kZWQgVG8gRG8pXG4gICAgbGV0IGV4cGFuZEJ1dHRvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGV4cGFuZEJ1dHRvbi5zcmMgPSBleHBhbmQ7XG5cbiAgICBleHBhbmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xuICAgICAgICBleHBhbmRCdXR0b24uc3JjID0gZXhwYW5kSG92ZXI7XG4gICAgICAgIGV4cGFuZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICAgICAgZXhwYW5kQnV0dG9uLnNyYyA9IGV4cGFuZDtcbiAgICAgICAgfSlcbiAgICB9KVxuXG5cbiAgICBsZXQgZXhwYW5kTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBleHBhbmRNb2RhbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21vZGFsJyk7XG5cbiAgICBsZXQgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBmdW5jdGlvbiB3cml0ZU1vZGFsQ29udGVudCgpIHtcbiAgICAgICAgbW9kYWxDb250ZW50LmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAgIGxldCBtb2RhbFRpdGxlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1vZGFsVGl0bGVIZWFkZXIudGV4dENvbnRlbnQgPSAnVGl0bGUnXG5cbiAgICAgICAgbGV0IG1vZGFsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbW9kYWxUaXRsZS50ZXh0Q29udGVudCA9IHRvRG8udGl0bGU7XG4gICAgICAgIG1vZGFsVGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtb2RhbFRpdGxlJylcblxuICAgICAgICBsZXQgbW9kYWxEZXNjcmlwdGlvbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtb2RhbERlc2NyaXB0aW9uSGVhZGVyLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uJ1xuXG4gICAgICAgIGxldCBtb2RhbERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1vZGFsRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0b0RvLmRlc2NyaXB0aW9uO1xuICAgICAgICBtb2RhbERlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbW9kYWxEZXNjcmlwdGlvbicpO1xuXG4gICAgICAgIGxldCBtb2RhbE5vdGVzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1vZGFsTm90ZXNIZWFkZXIudGV4dENvbnRlbnQgPSAnTm90ZXMnXG5cbiAgICAgICAgbGV0IG1vZGFsTm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbW9kYWxOb3Rlcy50ZXh0Q29udGVudCA9IHRvRG8ubm90ZXM7XG4gICAgICAgIG1vZGFsTm90ZXMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtb2RhbE5vdGVzJyk7XG5cbiAgICAgICAgbGV0IG1vZGFsRHVlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1vZGFsRHVlSGVhZGVyLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlJ1xuXG4gICAgICAgIGxldCBtb2RhbER1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbW9kYWxEdWVEYXRlLnRleHRDb250ZW50ID0gdG9Eby5kdWVEYXRlO1xuICAgICAgICBtb2RhbER1ZURhdGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtb2RhbER1ZURhdGUnKTtcblxuICAgICAgICBsZXQgbW9kYWxQcmlvcml0eUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtb2RhbFByaW9yaXR5SGVhZGVyLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5JztcblxuICAgICAgICBsZXQgbW9kYWxQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtb2RhbFByaW9yaXR5LnRleHRDb250ZW50ID0gdG9Eby5wcmlvcml0eTtcbiAgICAgICAgbW9kYWxQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21vZGFsUHJpb3JpdHknKTtcblxuICAgICAgICBsZXQgZWRpdEJ1dHRvbiA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBlZGl0QnV0dG9uLnNyYyA9IGVkaXRJY29uO1xuICAgICAgICBlZGl0QnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZWRpdEJ1dHRvbicpO1xuICAgICAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZWRpdCgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICBlZGl0QnV0dG9uLnNyYyA9IGVkaXRIb3ZlcjtcbiAgICAgICAgICAgIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICBlZGl0QnV0dG9uLnNyYyA9IGVkaXRJY29uO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICBtb2RhbENvbnRlbnQuYXBwZW5kKG1vZGFsVGl0bGVIZWFkZXIsIG1vZGFsVGl0bGUsIG1vZGFsRGVzY3JpcHRpb25IZWFkZXIsIG1vZGFsRGVzY3JpcHRpb24sIG1vZGFsTm90ZXNIZWFkZXIsIG1vZGFsTm90ZXMsIG1vZGFsRHVlSGVhZGVyLCBtb2RhbER1ZURhdGUsIG1vZGFsUHJpb3JpdHlIZWFkZXIsIG1vZGFsUHJpb3JpdHksIGVkaXRCdXR0b24pO1xuICAgIH1cbiAgICBcbiAgICBsZXQgY2xvc2VNb2RhbCA9IG5ldyBJbWFnZSgpO1xuICAgIGNsb3NlTW9kYWwuc3JjID0gZGVsZXRlSWNvblxuICAgIGNsb3NlTW9kYWwudGV4dENvbnRlbnQgPSAnY2xvc2UnO1xuICAgIGNsb3NlTW9kYWwuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjbG9zZScpO1xuXG4gICAgY2xvc2VNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgICAgIGNsb3NlTW9kYWwuc3JjID0gZGVsZXRlSWNvbkhvdmVyO1xuICAgICAgICBjbG9zZU1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICAgICAgICBjbG9zZU1vZGFsLnNyYyA9IGRlbGV0ZUljb247XG4gICAgICAgIH0pXG4gICAgfSlcblxuICAgIGV4cGFuZE1vZGFsLmFwcGVuZChjbG9zZU1vZGFsLCBtb2RhbENvbnRlbnQpO1xuXG4gICAgZXhwYW5kQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBleHBhbmRNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgd3JpdGVNb2RhbENvbnRlbnQoKTtcbiAgICB9KTtcblxuICAgIGNsb3NlTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGV4cGFuZE1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSk7XG5cbiAgICAvLyBPbmx5IGF2YWlsYWJsZSBmcm9tIGV4cGFuZGVkIFRvRG8sIEFsbG93cyB1c2VyIHRvIGNoYW5nZSB0aXRsZSwgZGVzY3JpcHRpb24gYW5kIGFkZCBub3Rlc1xuXG4gICAgZnVuY3Rpb24gZWRpdCgpIHtcblxuICAgICAgICBtb2RhbENvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICAgICAgbGV0IHRpdGxlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRpdGxlSGVhZGVyLnRleHRDb250ZW50ID0gJ1RpdGxlJ1xuXG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgIHRpdGxlLnZhbHVlID0gdG9Eby50aXRsZTtcbiAgICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdlZGl0VGl0bGUnKTtcblxuICAgICAgICBsZXQgZGVzY3JpcHRpb25IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGVzY3JpcHRpb25IZWFkZXIudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb24nXG5cbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgZGVzY3JpcHRpb24udmFsdWUgPSB0b0RvLmRlc2NyaXB0aW9uO1xuICAgICAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2VkaXREZXNjcmlwdGlvbicpO1xuXG4gICAgICAgIGxldCBkdWVEYXRlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGR1ZURhdGVIZWFkZXIudGV4dENvbnRlbnQgPSAnRHVlIERhdGUnO1xuXG4gICAgICAgIGxldCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpXG4gICAgICAgIGR1ZURhdGUudmFsdWUgPSB0b0RvLmR1ZURhdGU7XG4gICAgICAgIGR1ZURhdGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdlZGl0RHVlJylcbiAgICAgICAgICAgIFxuICAgICAgICBsZXQgcHJpb3JpdHlIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJpb3JpdHlIZWFkZXIudGV4dENvbnRlbnQgPSAnUHJpb3JpdHknXG5cbiAgICAgICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICAgIGxldCBwcmlvcml0eU9wdGlvbnMgPSBbJ0xvdycsICdOb3JtYWwnLCAnSGlnaCddXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmlvcml0eU9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IHByaW9yaXR5T3B0aW9uc1tpXTtcbiAgICAgICAgICAgIG9wdGlvbi50ZXh0ID0gcHJpb3JpdHlPcHRpb25zW2ldO1xuICAgICAgICAgICAgcHJpb3JpdHkuYXBwZW5kKG9wdGlvbik7XG4gICAgICAgIH07XG5cbiAgICAgICAgcHJpb3JpdHkudmFsdWUgPSB0b0RvLnByaW9yaXR5O1xuICAgICAgICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2VkaXRQcmlvcml0eScpXG5cbiAgICAgICAgbGV0IG5vdGVzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5vdGVzSGVhZGVyLnRleHRDb250ZW50ID0gJ05vdGVzJ1xuXG4gICAgICAgIGxldCBub3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgIG5vdGVzLnZhbHVlID0gdG9Eby5ub3RlcztcbiAgICAgICAgbm90ZXMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdlZGl0Tm90ZXMnKTtcblxuICAgICAgICBsZXQgc2F2ZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBzYXZlLnNyYyA9IHNhdmVJY29uO1xuICAgICAgICBzYXZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdG9Eby50aXRsZSA9IHRpdGxlLnZhbHVlO1xuICAgICAgICAgICAgdG9Eby5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uLnZhbHVlO1xuICAgICAgICAgICAgdG9Eby5kdWVEYXRlID0gZHVlRGF0ZS52YWx1ZTtcbiAgICAgICAgICAgIHRvRG8ubm90ZXMgPSBub3Rlcy52YWx1ZTtcbiAgICAgICAgICAgIHRvRG8ucHJpb3JpdHkgPSBwcmlvcml0eS52YWx1ZTtcbiAgICAgICAgICAgIHdyaXRlTW9kYWxDb250ZW50KCk7XG4gICAgICAgICAgICBjbGVhck1haW4oKTtcbiAgICAgICAgICAgIHRvRG8ucHJvamVjdC53cml0ZVRvRG9MaXN0KCk7XG4gICAgICAgICAgICB0b0RvLnVwZGF0ZVN0b3JlZExpc3QoKTtcbiAgICAgICAgfSlcbiAgICAgICAgc2F2ZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3NhdmUnKTtcblxuICAgICAgICBzYXZlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcbiAgICAgICAgICAgIHNhdmUuc3JjID0gc2F2ZUhvdmVyO1xuICAgICAgICAgICAgc2F2ZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNhdmUuc3JjID0gc2F2ZUljb247XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgICAgIG1vZGFsQ29udGVudC5hcHBlbmQodGl0bGVIZWFkZXIsIHRpdGxlLCBkZXNjcmlwdGlvbkhlYWRlciwgZGVzY3JpcHRpb24sIG5vdGVzSGVhZGVyLCBub3RlcywgZHVlRGF0ZUhlYWRlciwgZHVlRGF0ZSwgcHJpb3JpdHlIZWFkZXIsIHByaW9yaXR5LCBzYXZlKTtcbiAgICB9XG5cbiAgICAvLyBEZWxldGVzIFRvRG9cblxuICAgIGxldCBkZWxldGVCdXR0b24gPSBuZXcgSW1hZ2UoKTtcbiAgICBkZWxldGVCdXR0b24uc3JjID0gZGVsZXRlSWNvbjtcbiAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0b0RvLmRlbGV0ZVRvRG8oKVxuICAgICAgICB0b0RvQ29udGFpbmVyLnJlbW92ZSgpO1xuICAgIH0pXG5cbiAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xuICAgICAgICBkZWxldGVCdXR0b24uc3JjID0gZGVsZXRlSWNvbkhvdmVyO1xuICAgICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5zcmMgPSBkZWxldGVJY29uO1xuICAgICAgICB9KVxuICAgIH0pXG5cblxuICAgIHRvRG9Db250YWluZXIuYXBwZW5kKGRvbmUsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGV4cGFuZEJ1dHRvbiwgZGVsZXRlQnV0dG9uLCBleHBhbmRNb2RhbCk7XG4gICAgbWFpbi5hcHBlbmQodG9Eb0NvbnRhaW5lcik7XG5cbiAgICBpZiAodG9Eby5kb25lKSB7XG4gICAgICAgIGV4cGFuZEJ1dHRvbi5yZW1vdmUoKVxuICAgIH1cbn1cblxuXG5leHBvcnQge3dyaXRlVG9Ebywgd3JpdGVQcm9qZWN0LCBjbGVhckZpZWxkcywgY2xlYXJNYWluLCB3cml0ZVRvRG9CdXR0b24sIHdyaXRlSGVhZGVyc307IiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RzXCI7XG5pbXBvcnQgeyBjbGVhck1haW4sIGNsZWFyRmllbGRzLCB3cml0ZVByb2plY3QgfSBmcm9tIFwiLi9kb21NYW5pcHVsYXRpb25cIjtcbmltcG9ydCBsb2dvSW1nIGZyb20gJy4vaWNvbnMvbG9nby5zdmcnO1xuaW1wb3J0IGFkZFByb2plY3QgZnJvbSAnLi9pY29ucy9hZGRQcm9qZWN0LnN2ZydcbmltcG9ydCBhZGRQcm9qZWN0SG92ZXIgZnJvbSAnLi9pY29ucy9hZGRQcm9qZWN0SG92ZXIuc3ZnJ1xuXG5mdW5jdGlvbiBwYWdlTG9hZCAoKSB7XG5cbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcblxuICAgIGxldCBwYWdlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwYWdlVGl0bGUudGV4dENvbnRlbnQgPSAnVEFTS1InO1xuXG4gICAgbGV0IGxvZ28gPSBuZXcgSW1hZ2UoKTtcbiAgICBsb2dvLnNyYyA9IGxvZ29JbWc7XG5cbiAgICBoZWFkZXIuYXBwZW5kKHBhZ2VUaXRsZSwgbG9nbyk7XG5cbiAgICBsZXQgY2VudHJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2VudHJlLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2VudHJlJyk7XG5cbiAgICBsZXQgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpZGViYXIuc2V0QXR0cmlidXRlKCdpZCcsICdzaWRlYmFyJyk7XG5cbiAgICBsZXQgZGVmYXVsdFByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVmYXVsdFByb2plY3RzQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVmYXVsdFByb2plY3RzJylcblxuICAgIGxldCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RzQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnd3JpdHRlblByb2plY3RzJylcblxuICAgIGxldCBwcm9qZWN0c1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdHNUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3RzVGl0bGUnKVxuICAgIHByb2plY3RzVGl0bGUudGV4dENvbnRlbnQgPSAnUHJvamVjdHMnO1xuXG4gICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kKHByb2plY3RzVGl0bGUpO1xuXG4gICAgc2lkZWJhci5hcHBlbmQoZGVmYXVsdFByb2plY3RzQ29udGFpbmVyLCBwcm9qZWN0c0NvbnRhaW5lcik7XG5cbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW4uc2V0QXR0cmlidXRlKCdpZCcsICdtYWluJyk7XG5cbiAgICBsZXQgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG5cbiAgICBjZW50cmUuYXBwZW5kKHNpZGViYXIsIG1haW4pO1xuICAgIGJvZHkuYXBwZW5kKGhlYWRlciwgY2VudHJlLCBmb290ZXIpO1xuXG4gICAgbG9hZFByb2plY3RGaWVsZHMoKTtcblxufTtcblxuZnVuY3Rpb24gbG9hZFByb2plY3RGaWVsZHMoKSB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3cml0dGVuUHJvamVjdHMnKTtcbiAgICBsZXQgcHJvamVjdEZpZWxkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RGaWVsZHMuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0RmllbGRzJylcblxuICAgIGxldCBuZXdQcm9qZWN0ID0gbmV3IEltYWdlKCk7XG4gICAgbmV3UHJvamVjdC5zcmMgPSBhZGRQcm9qZWN0O1xuICAgIG5ld1Byb2plY3Quc2V0QXR0cmlidXRlKCdpZCcsICduZXdQcm9qZWN0Jyk7XG4gICAgbmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgICAgIG5ld1Byb2plY3Quc3JjID0gYWRkUHJvamVjdEhvdmVyO1xuICAgICAgICBuZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICAgICAgICBuZXdQcm9qZWN0LnNyYyA9IGFkZFByb2plY3Q7XG4gICAgICAgIH0pXG4gICAgfSlcblxuICAgIGxldCBwcm9qZWN0VGl0bGVGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcHJvamVjdFRpdGxlRmllbGQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBwcm9qZWN0VGl0bGVGaWVsZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3BUaXRsZScpO1xuICAgIHByb2plY3RUaXRsZUZpZWxkLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnUHJvamVjdCBUaXRsZS4uLicpO1xuXG4gICAgbGV0IHByb2plY3REZXNjcmlwdGlvbkZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBwcm9qZWN0RGVzY3JpcHRpb25GaWVsZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIHByb2plY3REZXNjcmlwdGlvbkZpZWxkLnNldEF0dHJpYnV0ZSgnaWQnLCAncERlc2NyaXB0aW9uJyk7XG4gICAgcHJvamVjdERlc2NyaXB0aW9uRmllbGQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdQcm9qZWN0IERlc2NyaXB0aW9uLi4uJyk7XG5cbiAgICBwcm9qZWN0RmllbGRzLmFwcGVuZChwcm9qZWN0VGl0bGVGaWVsZCwgcHJvamVjdERlc2NyaXB0aW9uRmllbGQsIG5ld1Byb2plY3QpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZChwcm9qZWN0RmllbGRzKVxuXG4gICAgbmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbGV0IHByb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0VGl0bGVGaWVsZC52YWx1ZSwgcHJvamVjdERlc2NyaXB0aW9uRmllbGQudmFsdWUpO1xuICAgICAgICBjbGVhck1haW4oKTtcbiAgICAgICAgY2xlYXJGaWVsZHMoKTtcbiAgICAgICAgd3JpdGVQcm9qZWN0KHByb2plY3QpXG4gICAgICAgIHByb2plY3Qud3JpdGVUb0RvTGlzdCgpO1xuICAgICAgICBwcm9qZWN0LndyaXRlTmV3VG9Eb0J1dHRvbigpO1xuICAgIH0pO1xufVxuXG5leHBvcnQge3BhZ2VMb2FkLCBsb2FkUHJvamVjdEZpZWxkc307IiwiaW1wb3J0IHt3cml0ZVRvRG8sIHdyaXRlVG9Eb0J1dHRvbiwgd3JpdGVIZWFkZXJzfSBmcm9tIFwiLi9kb21NYW5pcHVsYXRpb25cIjtcbmltcG9ydCB7dG9Eb0xpc3R9IGZyb20gJy4vdG9Eb3MnXG5cbmZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xuICAgIGxldCBzdG9yYWdlO1xuICAgIHRyeSB7XG4gICAgICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG4gICAgICAgIGNvbnN0IHggPSAnX19zdG9yYWdlX3Rlc3RfXyc7XG4gICAgICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcbiAgICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiYgKFxuICAgICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgICAgZS5jb2RlID09PSAyMiB8fFxuICAgICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XG4gICAgICAgICAgICAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcbiAgICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgICAgIGUubmFtZSA9PT0gJ1F1b3RhRXhjZWVkZWRFcnJvcicgfHxcbiAgICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICAgIGUubmFtZSA9PT0gJ05TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEJykgJiZcbiAgICAgICAgICAgIC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXG4gICAgICAgICAgICAoc3RvcmFnZSAmJiBzdG9yYWdlLmxlbmd0aCAhPT0gMCk7XG4gICAgfVxufVxuXG5sZXQgcHJvamVjdExpc3QgPSBbXTtcblxuY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZSxcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uLFxuICAgICAgICB0aGlzLmlkID0gdGl0bGUuc3BsaXQoJyAnKS5qb2luKCcnKTtcbiAgICB9O1xuXG4gICAgd3JpdGVOZXdUb0RvQnV0dG9uKCkge1xuICAgICAgICB3cml0ZVRvRG9CdXR0b24odGhpcyk7XG4gICAgfTtcblxuICAgIHdyaXRlVG9Eb0xpc3QoKSB7XG4gICAgICAgIHdyaXRlSGVhZGVycyh0aGlzKVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvRG9MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodG9Eb0xpc3RbaV0ucHJvamVjdC50aXRsZSA9PT0gdGhpcy50aXRsZSAmJiB0b0RvTGlzdFtpXS5kb25lID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgd3JpdGVUb0RvKHRvRG9MaXN0W2ldKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhZGRlZCEnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBzdG9yZVByb2plY3QoKSB7XG4gICAgICAgIHByb2plY3RMaXN0LnB1c2godGhpcylcbiAgICAgICAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoJ2xvY2FsU3RvcmFnZScpKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdExpc3QpKTtcbiAgICAgICAgfSBcbiAgICB9XG5cbiAgICBkZWxldGVQcm9qZWN0KCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocHJvamVjdExpc3RbaV0gPT09IHRoaXMpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TGlzdC5zcGxpY2UoaSwgMSlcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIGRlbGV0ZSB3aW5kb3dbUHJvamVjdF1cbiAgICAgICAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoJ2xvY2FsU3RvcmFnZScpKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdExpc3QpKTtcbiAgICAgICAgfSBcbiAgICB9O1xuXG59O1xuXG5jbGFzcyBJbmJveCBleHRlbmRzIFByb2plY3Qge1xuICAgIHdyaXRlVG9Eb0xpc3QoKSB7XG4gICAgICAgIHdyaXRlSGVhZGVycyh0aGlzKVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvRG9MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodG9Eb0xpc3RbaV0uZG9uZSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHdyaXRlVG9Ebyh0b0RvTGlzdFtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfTtcbn07XG5cbmNsYXNzIERhdGVzIGV4dGVuZHMgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBmdW5jKSB7XG4gICAgICAgIHN1cGVyKHRpdGxlLCBkZXNjcmlwdGlvbilcbiAgICAgICAgdGhpcy5mdW5jID0gZnVuYztcbiAgICB9O1xuXG4gICAgd3JpdGVUb0RvTGlzdCgpIHtcbiAgICAgICAgd3JpdGVIZWFkZXJzKHRoaXMpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvRG9MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0b0RvTGlzdFtpXS5kdWVEYXRlKVxuICAgICAgICAgICAgaWYgKHRoaXMuZnVuYyhuZXcgRGF0ZSh0b0RvTGlzdFtpXS5kdWVEYXRlKSkgJiYgdG9Eb0xpc3RbaV0uZG9uZSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHdyaXRlVG9Ebyh0b0RvTGlzdFtpXSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgIH07XG59O1xuXG5jbGFzcyBDb21wbGV0ZWQgZXh0ZW5kcyBQcm9qZWN0IHtcbiAgICB3cml0ZVRvRG9MaXN0KCkge1xuICAgICAgICB3cml0ZUhlYWRlcnModGhpcyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9Eb0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0b0RvTGlzdFtpXS5kb25lID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB3cml0ZVRvRG8odG9Eb0xpc3RbaV0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICB9O1xufTtcblxuZXhwb3J0IHtQcm9qZWN0LCBJbmJveCwgRGF0ZXMsIENvbXBsZXRlZCwgcHJvamVjdExpc3R9O1xuIiwibGV0IHRvRG9MaXN0ID0gW107XG5cbmZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xuICAgIGxldCBzdG9yYWdlO1xuICAgIHRyeSB7XG4gICAgICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG4gICAgICAgIGNvbnN0IHggPSAnX19zdG9yYWdlX3Rlc3RfXyc7XG4gICAgICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcbiAgICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiYgKFxuICAgICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgICAgZS5jb2RlID09PSAyMiB8fFxuICAgICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XG4gICAgICAgICAgICAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcbiAgICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgICAgIGUubmFtZSA9PT0gJ1F1b3RhRXhjZWVkZWRFcnJvcicgfHxcbiAgICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICAgIGUubmFtZSA9PT0gJ05TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEJykgJiZcbiAgICAgICAgICAgIC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXG4gICAgICAgICAgICAoc3RvcmFnZSAmJiBzdG9yYWdlLmxlbmd0aCAhPT0gMCk7XG4gICAgfVxufVxuXG5jbGFzcyBUb0RvIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0LCBkb25lLCBub3Rlcykge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGUsXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlLFxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHksXG4gICAgICAgIHRoaXMubm90ZXMgPSBub3RlcyB8fCAnJyxcbiAgICAgICAgdGhpcy5kb25lID0gZG9uZSB8fCBmYWxzZSxcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICB9O1xuXG4gICAgc3RvcmVUb0RvKCkge1xuICAgICAgICB0b0RvTGlzdC5wdXNoKHRoaXMpO1xuICAgICAgICBpZiAoc3RvcmFnZUF2YWlsYWJsZSgnbG9jYWxTdG9yYWdlJykpIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9Eb3MnLCBKU09OLnN0cmluZ2lmeSh0b0RvTGlzdCkpO1xuICAgICAgICB9IFxuICAgIH07XG5cbiAgICByZW1vdmVGcm9tTGlzdCgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b0RvTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRvRG9MaXN0W2ldID09PSB0aGlzKSB7XG4gICAgICAgICAgICAgICAgdG9Eb0xpc3Quc3BsaWNlKGksIDEpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICB1cGRhdGVTdG9yZWRMaXN0KCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvRG9MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodG9Eb0xpc3RbaV0gPT09IHRoaXMpIHtcbiAgICAgICAgICAgICAgICB0b0RvTGlzdFtpXSA9IHRoaXM7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICBpZiAoc3RvcmFnZUF2YWlsYWJsZSgnbG9jYWxTdG9yYWdlJykpIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9Eb3MnLCBKU09OLnN0cmluZ2lmeSh0b0RvTGlzdCkpO1xuICAgICAgICB9IFxuICAgIH1cblxuICAgIGRlbGV0ZVRvRG8oKSB7XG4gICAgICAgIGRlbGV0ZSB3aW5kb3dbVG9Eb107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9Eb0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0b0RvTGlzdFtpXSA9PT0gdGhpcykge1xuICAgICAgICAgICAgICAgIHRvRG9MaXN0LnNwbGljZShpLCAxKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoJ2xvY2FsU3RvcmFnZScpKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvRG9zJywgSlNPTi5zdHJpbmdpZnkodG9Eb0xpc3QpKTtcbiAgICAgICAgfSBcbiAgICB9O1xufTtcblxuZXhwb3J0IHtUb0RvLCB0b0RvTGlzdH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vIEltcG9ydHMgZnJvbSB2YXJpb3VzIG1vZHVsZXNcblxuaW1wb3J0IHtwYWdlTG9hZH0gZnJvbSAnLi9wYWdlTG9hZCc7XG5pbXBvcnQgeyB3cml0ZVByb2plY3QgfSBmcm9tICcuL2RvbU1hbmlwdWxhdGlvbic7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IFByb2plY3QsIEluYm94LCBEYXRlcywgQ29tcGxldGVkLCBwcm9qZWN0TGlzdCB9IGZyb20gJy4vcHJvamVjdHMnO1xuaW1wb3J0IHtpc1RvZGF5LCBpc1RvbW9ycm93LCBpc1RoaXNXZWVrLCBpc1Bhc3R9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IFRvRG8sIHRvRG9MaXN0IH0gZnJvbSAnLi90b0RvcydcblxuLy8gQ2FsbHMgaW5pdGlhbCBwYWdlIGxvYWRcblxucGFnZUxvYWQoKTtcblxuLy8gQ3JlYXRlcyB0aGUgaW5ib3ggcHJvamVjdFxuXG5sZXQgaW5ib3ggPSBuZXcgSW5ib3goJ0luYm94JywgJ0FsbCBvZiB5b3VyIG91dHN0YW5kaW5nIHRhc2tzIGFyZSBzdG9yZWQgaGVyZScpO1xud3JpdGVQcm9qZWN0KGluYm94KVxuXG5sZXQgdG9kYXkgPSBuZXcgRGF0ZXMoJ1RvZGF5JywgJ0FsbCB0YXNrcyBEdWUgVG9kYXknLCBpc1RvZGF5KVxud3JpdGVQcm9qZWN0KHRvZGF5KTtcblxubGV0IHRvbW9ycm93ID0gbmV3IERhdGVzKCdUb21vcnJvdycsICdBbGwgVGFza3MgRHVlIFRvbW9ycm93JywgaXNUb21vcnJvdyk7XG53cml0ZVByb2plY3QodG9tb3Jyb3cpO1xuXG5sZXQgdGhpc1dlZWsgPSBuZXcgRGF0ZXMoJ1RoaXMgV2VlaycsICdBbGwgVGFza3MgRHVlIFRoaXMgV2VlaycsIGlzVGhpc1dlZWspO1xud3JpdGVQcm9qZWN0KHRoaXNXZWVrKTtcblxubGV0IG92ZXJkdWUgPSBuZXcgRGF0ZXMoJ092ZXJkdWUnLCAnVGhlc2UgVGFza3MgYXJlIE92ZXJkdWUnLCBpc1Bhc3QpXG53cml0ZVByb2plY3Qob3ZlcmR1ZSk7XG5cbmxldCBjb21wbGV0ZWQgPSBuZXcgQ29tcGxldGVkKCdDb21wbGV0ZWQnLCAnVGFza3MgVGhhdCBBcmUgTWFya2VkIENvbXBsZXRlJyk7XG53cml0ZVByb2plY3QoY29tcGxldGVkKTtcblxubG9hZFByb2plY3RzKCk7XG5cbmxvYWRUb0RvcygpO1xuXG5pbmJveC53cml0ZVRvRG9MaXN0KCk7XG5pbmJveC53cml0ZU5ld1RvRG9CdXR0b24oKTtcblxuZnVuY3Rpb24gbG9hZFByb2plY3RzKCkge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSkge1xuICAgICAgICBsZXQgcHJvamVjdHMgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJyk7XG4gICAgICAgIGxldCBwYXJzZWRMaXN0ID0gSlNPTi5wYXJzZShwcm9qZWN0cyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyc2VkTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHByb2plY3QgPSBuZXcgUHJvamVjdChwYXJzZWRMaXN0W2ldLnRpdGxlLCBwYXJzZWRMaXN0W2ldLmRlc2NyaXB0aW9uKVxuICAgICAgICAgICAgd3JpdGVQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICB9O1xuICAgIH1cbn07XG5cbmZ1bmN0aW9uIGxvYWRUb0RvcygpIHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvRG9zJykpIHtcbiAgICAgICAgbGV0IHRvRG9zID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b0RvcycpO1xuICAgICAgICBsZXQgcGFyc2VkTGlzdCA9IEpTT04ucGFyc2UodG9Eb3MpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnNlZExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChwYXJzZWRMaXN0W2ldLnByb2plY3QudGl0bGUgPT09ICdJbmJveCcpIHtcbiAgICAgICAgICAgICAgICBwYXJzZWRMaXN0W2ldLnByb2plY3QgPSBpbmJveFxuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvamVjdExpc3RbaV0udGl0bGUgPT0gcGFyc2VkTGlzdFtpXS5wcm9qZWN0LnRpdGxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZExpc3RbaV0ucHJvamVjdCA9IHByb2plY3RMaXN0W2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCB0b0RvID0gbmV3IFRvRG8ocGFyc2VkTGlzdFtpXS50aXRsZSwgcGFyc2VkTGlzdFtpXS5kZXNjcmlwdGlvbiwgcGFyc2VkTGlzdFtpXS5kdWVEYXRlLCBwYXJzZWRMaXN0W2ldLnByaW9yaXR5LCBwYXJzZWRMaXN0W2ldLnByb2plY3QsIHBhcnNlZExpc3RbaV0uZG9uZSwgcGFyc2VkTGlzdFtpXS5ub3Rlcyk7XG4gICAgICAgICAgICB0b0RvTGlzdC5wdXNoKHRvRG8pO1xuICAgICAgICB9O1xuICAgIH1cbn07XG5cblxuXG4vKlxudXNlIGludGxGb3JtYXQgRGF0ZSB0byBkaXNwbGF5IGRhdGUgaW4gdG9kbyBpbnN0ZWFkIG9mIGlucHV0LCBtb3ZlIGlucHV0IHRvIGV4cGFuZE1vZGFsIC8gaWYgZGF0ZSAhdmFsaWQgcmVqZWN0IGl0XG4qL1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9