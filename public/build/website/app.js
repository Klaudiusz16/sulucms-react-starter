(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/website/react/controllers sync recursive \\.(j%7Ct)sx?$":
/*!**************************************************************!*\
  !*** ./assets/website/react/controllers/ sync \.(j%7Ct)sx?$ ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Hello.jsx": "./assets/website/react/controllers/Hello.jsx",
	"./Home.tsx": "./assets/website/react/controllers/Home.tsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/website/react/controllers sync recursive \\.(j%7Ct)sx?$";

/***/ }),

/***/ "./assets/website sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!************************************************************************************************************!*\
  !*** ./assets/website/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./app.ts": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/website/app.ts",
	"./bootstrap.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/website/bootstrap.js",
	"./react/controllers/Hello.jsx": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/website/react/controllers/Hello.jsx",
	"./react/controllers/Home.tsx": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/website/react/controllers/Home.tsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/website sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/website/controllers.json":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/website/controllers.json ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _symfony_ux_react_dist_render_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/ux-react/dist/render_controller.js */ "./vendor/symfony/ux-react/assets/dist/render_controller.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'symfony--ux-react--react': _symfony_ux_react_dist_render_controller_js__WEBPACK_IMPORTED_MODULE_0__["default"],
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/website/bootstrap.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/website/bootstrap.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   app: () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");


// Registers Stimulus controllers from controllers.json and in the controllers/ directory
var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/website sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$"));
// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/website/react/controllers/Hello.jsx":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/website/react/controllers/Hello.jsx ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Hello ", props.fullName);
}

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/website/app.ts":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/website/app.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
// any CSS you import will output into a single css file (app.css in this case)
__webpack_require__(/*! ./styles/app.scss */ "./assets/website/styles/app.scss");
__webpack_require__(/*! ./bootstrap.js */ "./assets/website/bootstrap.js");
// assets/app.js
// assets/app.js
var ux_react_1 = __webpack_require__(/*! @symfony/ux-react */ "./vendor/symfony/ux-react/assets/dist/register_controller.js");
(0, ux_react_1.registerReactControllerComponents)(__webpack_require__("./assets/website/react/controllers sync recursive \\.(j%7Ct)sx?$"));

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/website/react/controllers/Home.tsx":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/website/react/controllers/Home.tsx ***!
  \*********************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
__webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
function Home() {
  var _ref = (0, react_1.useState)(1),
    _ref2 = _slicedToArray(_ref, 2),
    counter = _ref2[0],
    setCounter = _ref2[1];
  console.log("Home");
  return react_1["default"].createElement("div", null, counter, react_1["default"].createElement("button", {
    onClick: function onClick() {
      return setCounter(counter + 1);
    }
  }, "+"), react_1["default"].createElement("button", {
    onClick: function onClick() {
      return setCounter(counter - 1);
    }
  }, "-"));
}
exports["default"] = Home;

/***/ }),

/***/ "./assets/website/bootstrap.js":
/*!*************************************!*\
  !*** ./assets/website/bootstrap.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   app: () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");


// Registers Stimulus controllers from controllers.json and in the controllers/ directory
var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/website sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$"));
// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/website/react/controllers/Hello.jsx":
/*!****************************************************!*\
  !*** ./assets/website/react/controllers/Hello.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Hello ", props.fullName);
}

/***/ }),

/***/ "./vendor/symfony/ux-react/assets/dist/register_controller.js":
/*!********************************************************************!*\
  !*** ./vendor/symfony/ux-react/assets/dist/register_controller.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerReactControllerComponents: () => (/* binding */ registerReactControllerComponents)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_12__);













function registerReactControllerComponents(context) {
  var reactControllers = {};
  var importAllReactComponents = function importAllReactComponents(r) {
    r.keys().forEach(function (key) {
      return reactControllers[key] = r(key)["default"];
    });
  };
  importAllReactComponents(context);
  window.resolveReactComponent = function (name) {
    var component = reactControllers["./".concat(name, ".jsx")] || reactControllers["./".concat(name, ".tsx")];
    if (typeof component === 'undefined') {
      var possibleValues = Object.keys(reactControllers).map(function (key) {
        return key.replace('./', '').replace('.jsx', '').replace('.tsx', '');
      });
      throw new Error("React controller \"".concat(name, "\" does not exist. Possible values: ").concat(possibleValues.join(', ')));
    }
    return component;
  };
}


/***/ }),

/***/ "./vendor/symfony/ux-react/assets/dist/render_controller.js":
/*!******************************************************************!*\
  !*** ./vendor/symfony/ux-react/assets/dist/render_controller.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ default_1)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }



















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var createRoot;
var m = react_dom__WEBPACK_IMPORTED_MODULE_20__;
if (false) {} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  createRoot = function createRoot(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}
var default_1 = /*#__PURE__*/function (_Controller) {
  _inherits(default_1, _Controller);
  var _super = _createSuper(default_1);
  function default_1() {
    _classCallCheck(this, default_1);
    return _super.apply(this, arguments);
  }
  _createClass(default_1, [{
    key: "connect",
    value: function connect() {
      var props = this.propsValue ? this.propsValue : null;
      this.dispatchEvent('connect', {
        component: this.componentValue,
        props: props
      });
      if (!this.componentValue) {
        throw new Error('No component specified.');
      }
      var component = window.resolveReactComponent(this.componentValue);
      this._renderReactElement( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement(component, props, null));
      this.dispatchEvent('mount', {
        componentName: this.componentValue,
        component: component,
        props: props
      });
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      this.element.root.unmount();
      this.dispatchEvent('unmount', {
        component: this.componentValue,
        props: this.propsValue ? this.propsValue : null
      });
    }
  }, {
    key: "_renderReactElement",
    value: function _renderReactElement(reactElement) {
      var element = this.element;
      if (!element.root) {
        element.root = createRoot(this.element);
      }
      element.root.render(reactElement);
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(name, payload) {
      this.dispatch(name, {
        detail: payload,
        prefix: 'react'
      });
    }
  }]);
  return default_1;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_21__.Controller);
default_1.values = {
  component: String,
  props: Object
};


/***/ }),

/***/ "./assets/website/app.ts":
/*!*******************************!*\
  !*** ./assets/website/app.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
// any CSS you import will output into a single css file (app.css in this case)
__webpack_require__(/*! ./styles/app.scss */ "./assets/website/styles/app.scss");
__webpack_require__(/*! ./bootstrap.js */ "./assets/website/bootstrap.js");
// assets/app.js
// assets/app.js
var ux_react_1 = __webpack_require__(/*! @symfony/ux-react */ "./vendor/symfony/ux-react/assets/dist/register_controller.js");
(0, ux_react_1.registerReactControllerComponents)(__webpack_require__("./assets/website/react/controllers sync recursive \\.(j%7Ct)sx?$"));

/***/ }),

/***/ "./assets/website/react/controllers/Home.tsx":
/*!***************************************************!*\
  !*** ./assets/website/react/controllers/Home.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
__webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
function Home() {
  var _ref = (0, react_1.useState)(1),
    _ref2 = _slicedToArray(_ref, 2),
    counter = _ref2[0],
    setCounter = _ref2[1];
  console.log("Home");
  return react_1["default"].createElement("div", null, counter, react_1["default"].createElement("button", {
    onClick: function onClick() {
      return setCounter(counter + 1);
    }
  }, "+"), react_1["default"].createElement("button", {
    onClick: function onClick() {
      return setCounter(counter - 1);
    }
  }, "-"));
}
exports["default"] = Home;

/***/ }),

/***/ "./assets/website/styles/app.scss":
/*!****************************************!*\
  !*** ./assets/website/styles/app.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_react-dom_index_js-no-35b931"], () => (__webpack_exec__("./assets/website/app.ts")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNaLElBQUFDLElBQUEsR0FBOEIsQ0FBQyxDQUFDLEVBQUVGLE9BQU8sQ0FBQ0csUUFBUSxFQUFFLENBQUMsQ0FBQztJQUFBQyxLQUFBLEdBQUE1RCxjQUFBLENBQUEwRCxJQUFBO0lBQS9DRyxPQUFPLEdBQUFELEtBQUE7SUFBRUUsVUFBVSxHQUFBRixLQUFBO0VBQzFCRyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7RUFDbkIsT0FBUVIsT0FBTyxXQUFRLENBQUNoRSxhQUFhLENBQUMsS0FBSyxFQUFFLElBQUksRUFDN0NxRSxPQUFPLEVBQ1BMLE9BQU8sV0FBUSxDQUFDaEUsYUFBYSxDQUFDLFFBQVEsRUFBRTtJQUFFeUUsT0FBTyxFQUFFLFNBQUFBLFFBQUE7TUFBQSxPQUFNSCxVQUFVLENBQUNELE9BQU8sR0FBRyxDQUFDLENBQUM7SUFBQTtFQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFDeEZMLE9BQU8sV0FBUSxDQUFDaEUsYUFBYSxDQUFDLFFBQVEsRUFBRTtJQUFFeUUsT0FBTyxFQUFFLFNBQUFBLFFBQUE7TUFBQSxPQUFNSCxVQUFVLENBQUNELE9BQU8sR0FBRyxDQUFDLENBQUM7SUFBQTtFQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNqRztBQUNBakUsa0JBQWUsR0FBRzZELElBQUk7Ozs7Ozs7Ozs7OztBR2xDdEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvd2Vic2l0ZS9yZWFjdC9jb250cm9sbGVycy8gc3luYyBcXC4oaiU3Q3Qpc3giLCJ3ZWJwYWNrOi8vLyBcXC5banRdc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3dlYnNpdGUvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvd2Vic2l0ZS9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3dlYnNpdGUvcmVhY3QvY29udHJvbGxlcnMvSGVsbG8uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy93ZWJzaXRlL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvd2Vic2l0ZS9yZWFjdC9jb250cm9sbGVycy9Ib21lLnRzeCIsIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ltZm9ueS91eC1yZWFjdC9hc3NldHMvZGlzdC9yZWdpc3Rlcl9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci9zeW1mb255L3V4LXJlYWN0L2Fzc2V0cy9kaXN0L3JlbmRlcl9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy93ZWJzaXRlL3N0eWxlcy9hcHAuc2Nzcz82YjY1Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9IZWxsby5qc3hcIjogXCIuL2Fzc2V0cy93ZWJzaXRlL3JlYWN0L2NvbnRyb2xsZXJzL0hlbGxvLmpzeFwiLFxuXHRcIi4vSG9tZS50c3hcIjogXCIuL2Fzc2V0cy93ZWJzaXRlL3JlYWN0L2NvbnRyb2xsZXJzL0hvbWUudHN4XCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL3dlYnNpdGUvcmVhY3QvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgXFxcXC4oaiU3Q3Qpc3g/JFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9hcHAudHNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy93ZWJzaXRlL2FwcC50c1wiLFxuXHRcIi4vYm9vdHN0cmFwLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvd2Vic2l0ZS9ib290c3RyYXAuanNcIixcblx0XCIuL3JlYWN0L2NvbnRyb2xsZXJzL0hlbGxvLmpzeFwiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL3dlYnNpdGUvcmVhY3QvY29udHJvbGxlcnMvSGVsbG8uanN4XCIsXG5cdFwiLi9yZWFjdC9jb250cm9sbGVycy9Ib21lLnRzeFwiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL3dlYnNpdGUvcmVhY3QvY29udHJvbGxlcnMvSG9tZS50c3hcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvd2Vic2l0ZSBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiOyIsImltcG9ydCBjb250cm9sbGVyXzAgZnJvbSAnQHN5bWZvbnkvdXgtcmVhY3QvZGlzdC9yZW5kZXJfY29udHJvbGxlci5qcyc7XG5leHBvcnQgZGVmYXVsdCB7XG4gICdzeW1mb255LS11eC1yZWFjdC0tcmVhY3QnOiBjb250cm9sbGVyXzAsXG59OyIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tIFwiQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlXCI7XG5cbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChcbiAgcmVxdWlyZS5jb250ZXh0KFxuICAgIFwiQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9cIixcbiAgICB0cnVlLFxuICAgIC9cXC5banRdc3g/JC9cbiAgKVxuKTtcbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICByZXR1cm4gPGRpdj5IZWxsbyB7cHJvcHMuZnVsbE5hbWV9PC9kaXY+O1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbnJlcXVpcmUoXCIuL3N0eWxlcy9hcHAuc2Nzc1wiKTtcbnJlcXVpcmUoXCIuL2Jvb3RzdHJhcC5qc1wiKTtcbi8vIGFzc2V0cy9hcHAuanNcbi8vIGFzc2V0cy9hcHAuanNcbmNvbnN0IHV4X3JlYWN0XzEgPSByZXF1aXJlKFwiQHN5bWZvbnkvdXgtcmVhY3RcIik7XG4oMCwgdXhfcmVhY3RfMS5yZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMpKHJlcXVpcmUuY29udGV4dChcIi4vcmVhY3QvY29udHJvbGxlcnNcIiwgdHJ1ZSwgL1xcLihqfHQpc3g/JC8pKTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XG4gICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCByZWFjdF8xID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5mdW5jdGlvbiBIb21lKCkge1xuICAgIGNvbnN0IFtjb3VudGVyLCBzZXRDb3VudGVyXSA9ICgwLCByZWFjdF8xLnVzZVN0YXRlKSgxKTtcbiAgICBjb25zb2xlLmxvZyhcIkhvbWVcIik7XG4gICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLFxuICAgICAgICBjb3VudGVyLFxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IG9uQ2xpY2s6ICgpID0+IHNldENvdW50ZXIoY291bnRlciArIDEpIH0sIFwiK1wiKSxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyBvbkNsaWNrOiAoKSA9PiBzZXRDb3VudGVyKGNvdW50ZXIgLSAxKSB9LCBcIi1cIikpKTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEhvbWU7XG4iLCJmdW5jdGlvbiByZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMoY29udGV4dCkge1xuICAgIGNvbnN0IHJlYWN0Q29udHJvbGxlcnMgPSB7fTtcbiAgICBjb25zdCBpbXBvcnRBbGxSZWFjdENvbXBvbmVudHMgPSAocikgPT4ge1xuICAgICAgICByLmtleXMoKS5mb3JFYWNoKChrZXkpID0+IChyZWFjdENvbnRyb2xsZXJzW2tleV0gPSByKGtleSkuZGVmYXVsdCkpO1xuICAgIH07XG4gICAgaW1wb3J0QWxsUmVhY3RDb21wb25lbnRzKGNvbnRleHQpO1xuICAgIHdpbmRvdy5yZXNvbHZlUmVhY3RDb21wb25lbnQgPSAobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBjb21wb25lbnQgPSByZWFjdENvbnRyb2xsZXJzW2AuLyR7bmFtZX0uanN4YF0gfHwgcmVhY3RDb250cm9sbGVyc1tgLi8ke25hbWV9LnRzeGBdO1xuICAgICAgICBpZiAodHlwZW9mIGNvbXBvbmVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGNvbnN0IHBvc3NpYmxlVmFsdWVzID0gT2JqZWN0LmtleXMocmVhY3RDb250cm9sbGVycykubWFwKChrZXkpID0+IGtleS5yZXBsYWNlKCcuLycsICcnKS5yZXBsYWNlKCcuanN4JywgJycpLnJlcGxhY2UoJy50c3gnLCAnJykpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBSZWFjdCBjb250cm9sbGVyIFwiJHtuYW1lfVwiIGRvZXMgbm90IGV4aXN0LiBQb3NzaWJsZSB2YWx1ZXM6ICR7cG9zc2libGVWYWx1ZXMuam9pbignLCAnKX1gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgIH07XG59XG5cbmV4cG9ydCB7IHJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyB9O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCByZXF1aXJlJCQwIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxudmFyIGNyZWF0ZVJvb3Q7XG5cbnZhciBtID0gcmVxdWlyZSQkMDtcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIGNyZWF0ZVJvb3QgPSBtLmNyZWF0ZVJvb3Q7XG4gIG0uaHlkcmF0ZVJvb3Q7XG59IGVsc2Uge1xuICB2YXIgaSA9IG0uX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ7XG4gIGNyZWF0ZVJvb3QgPSBmdW5jdGlvbihjLCBvKSB7XG4gICAgaS51c2luZ0NsaWVudEVudHJ5UG9pbnQgPSB0cnVlO1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gbS5jcmVhdGVSb290KGMsIG8pO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpLnVzaW5nQ2xpZW50RW50cnlQb2ludCA9IGZhbHNlO1xuICAgIH1cbiAgfTtcbn1cblxuY2xhc3MgZGVmYXVsdF8xIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgY29uc3QgcHJvcHMgPSB0aGlzLnByb3BzVmFsdWUgPyB0aGlzLnByb3BzVmFsdWUgOiBudWxsO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2Nvbm5lY3QnLCB7IGNvbXBvbmVudDogdGhpcy5jb21wb25lbnRWYWx1ZSwgcHJvcHM6IHByb3BzIH0pO1xuICAgICAgICBpZiAoIXRoaXMuY29tcG9uZW50VmFsdWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gY29tcG9uZW50IHNwZWNpZmllZC4nKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb21wb25lbnQgPSB3aW5kb3cucmVzb2x2ZVJlYWN0Q29tcG9uZW50KHRoaXMuY29tcG9uZW50VmFsdWUpO1xuICAgICAgICB0aGlzLl9yZW5kZXJSZWFjdEVsZW1lbnQoUmVhY3QuY3JlYXRlRWxlbWVudChjb21wb25lbnQsIHByb3BzLCBudWxsKSk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnbW91bnQnLCB7XG4gICAgICAgICAgICBjb21wb25lbnROYW1lOiB0aGlzLmNvbXBvbmVudFZhbHVlLFxuICAgICAgICAgICAgY29tcG9uZW50OiBjb21wb25lbnQsXG4gICAgICAgICAgICBwcm9wczogcHJvcHMsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkaXNjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQucm9vdC51bm1vdW50KCk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgndW5tb3VudCcsIHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogdGhpcy5jb21wb25lbnRWYWx1ZSxcbiAgICAgICAgICAgIHByb3BzOiB0aGlzLnByb3BzVmFsdWUgPyB0aGlzLnByb3BzVmFsdWUgOiBudWxsLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgX3JlbmRlclJlYWN0RWxlbWVudChyZWFjdEVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZWxlbWVudDtcbiAgICAgICAgaWYgKCFlbGVtZW50LnJvb3QpIHtcbiAgICAgICAgICAgIGVsZW1lbnQucm9vdCA9IGNyZWF0ZVJvb3QodGhpcy5lbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LnJvb3QucmVuZGVyKHJlYWN0RWxlbWVudCk7XG4gICAgfVxuICAgIGRpc3BhdGNoRXZlbnQobmFtZSwgcGF5bG9hZCkge1xuICAgICAgICB0aGlzLmRpc3BhdGNoKG5hbWUsIHsgZGV0YWlsOiBwYXlsb2FkLCBwcmVmaXg6ICdyZWFjdCcgfSk7XG4gICAgfVxufVxuZGVmYXVsdF8xLnZhbHVlcyA9IHtcbiAgICBjb21wb25lbnQ6IFN0cmluZyxcbiAgICBwcm9wczogT2JqZWN0LFxufTtcblxuZXhwb3J0IHsgZGVmYXVsdF8xIGFzIGRlZmF1bHQgfTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwicmVxdWlyZSIsImNvbnRleHQiLCJSZWFjdCIsInByb3BzIiwiY3JlYXRlRWxlbWVudCIsImZ1bGxOYW1lIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJ1eF9yZWFjdF8xIiwicmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzIiwiX3NsaWNlZFRvQXJyYXkiLCJhcnIiLCJpIiwiX2FycmF5V2l0aEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheUxpbWl0IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiX25vbkl0ZXJhYmxlUmVzdCIsIlR5cGVFcnJvciIsIm8iLCJtaW5MZW4iLCJfYXJyYXlMaWtlVG9BcnJheSIsIm4iLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJzbGljZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsIkFycmF5IiwiZnJvbSIsInRlc3QiLCJsZW4iLCJsZW5ndGgiLCJhcnIyIiwiciIsImwiLCJ0IiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJlIiwidSIsImEiLCJmIiwibmV4dCIsImRvbmUiLCJwdXNoIiwiaXNBcnJheSIsIl9fY3JlYXRlQmluZGluZyIsImNyZWF0ZSIsIm0iLCJrIiwiazIiLCJ1bmRlZmluZWQiLCJkZXNjIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiX19lc01vZHVsZSIsIndyaXRhYmxlIiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsImdldCIsIl9fc2V0TW9kdWxlRGVmYXVsdCIsInYiLCJfX2ltcG9ydFN0YXIiLCJtb2QiLCJyZXN1bHQiLCJoYXNPd25Qcm9wZXJ0eSIsInJlYWN0XzEiLCJIb21lIiwiX3JlZiIsInVzZVN0YXRlIiwiX3JlZjIiLCJjb3VudGVyIiwic2V0Q291bnRlciIsImNvbnNvbGUiLCJsb2ciLCJvbkNsaWNrIiwicmVhY3RDb250cm9sbGVycyIsImltcG9ydEFsbFJlYWN0Q29tcG9uZW50cyIsImtleXMiLCJmb3JFYWNoIiwia2V5Iiwid2luZG93IiwicmVzb2x2ZVJlYWN0Q29tcG9uZW50IiwiY29tcG9uZW50IiwiY29uY2F0IiwicG9zc2libGVWYWx1ZXMiLCJtYXAiLCJyZXBsYWNlIiwiRXJyb3IiLCJqb2luIiwicmVxdWlyZSQkMCIsIkNvbnRyb2xsZXIiLCJjcmVhdGVSb290IiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiaHlkcmF0ZVJvb3QiLCJfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCIsImMiLCJ1c2luZ0NsaWVudEVudHJ5UG9pbnQiLCJkZWZhdWx0XzEiLCJfQ29udHJvbGxlciIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsIl9jbGFzc0NhbGxDaGVjayIsImFwcGx5IiwiYXJndW1lbnRzIiwiX2NyZWF0ZUNsYXNzIiwiY29ubmVjdCIsInByb3BzVmFsdWUiLCJkaXNwYXRjaEV2ZW50IiwiY29tcG9uZW50VmFsdWUiLCJfcmVuZGVyUmVhY3RFbGVtZW50IiwiY29tcG9uZW50TmFtZSIsImRpc2Nvbm5lY3QiLCJlbGVtZW50Iiwicm9vdCIsInVubW91bnQiLCJyZWFjdEVsZW1lbnQiLCJyZW5kZXIiLCJwYXlsb2FkIiwiZGlzcGF0Y2giLCJkZXRhaWwiLCJwcmVmaXgiLCJ2YWx1ZXMiLCJTdHJpbmciLCJkZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==