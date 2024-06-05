/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/index.ts":
/*!**************************!*\
  !*** ./src/app/index.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   App: () => (/* reexport safe */ _ui__WEBPACK_IMPORTED_MODULE_0__.App)
/* harmony export */ });
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ "./src/app/ui/index.ts");


/***/ }),

/***/ "./src/app/ui/index.ts":
/*!*****************************!*\
  !*** ./src/app/ui/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   App: () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _widgets_gameField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/widgets/gameField */ "./src/widgets/gameField/index.ts");
/* harmony import */ var _index_template_pug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.template.pug */ "./src/app/ui/index.template.pug");
/* harmony import */ var _index_template_pug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_template_pug__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_types_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/shared/@types/index.component */ "./src/shared/@types/index.component.ts");
/* harmony import */ var _widgets_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/widgets/menu */ "./src/widgets/menu/index.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }




var App = /*#__PURE__*/function (_Component) {
  function App(parent) {
    _classCallCheck(this, App);
    return _callSuper(this, App, [parent, (_index_template_pug__WEBPACK_IMPORTED_MODULE_1___default()), {
      className: 'app'
    }]);
  }
  _inherits(App, _Component);
  return _createClass(App, [{
    key: "render",
    value: function render() {
      var _this = this;
      this.renderTemplate();
      this.mainElement = this.htmlElement.getElementsByClassName('app__main')[0];
      (0,_widgets_gameField__WEBPACK_IMPORTED_MODULE_0__.getGameFieldCanvas)(this.mainElement, 'app__game-canvas').then(function (data) {
        _this.gameCanvas = data.canvas;
        _this.draw = data.drawField;
        _this.menu = new _widgets_menu__WEBPACK_IMPORTED_MODULE_3__.Menu(_this.mainElement, {
          className: 'app__menu',
          openField: function openField() {
            data.openField();
          }
        });
        _this.draw();
      })["catch"](function () {});
    }
  }]);
}(_shared_types_index_component__WEBPACK_IMPORTED_MODULE_2__.Component);

/***/ }),

/***/ "./src/shared/@types/index.component.ts":
/*!**********************************************!*\
  !*** ./src/shared/@types/index.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Component: () => (/* binding */ Component)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Component = /*#__PURE__*/function () {
  function Component(parent, tmplFunc, props) {
    _classCallCheck(this, Component);
    this.parent = parent;
    this.tmplFunc = tmplFunc;
    this.props = props;
    this.htmlElement = null;
    this.render();
  }
  return _createClass(Component, [{
    key: "render",
    value: function render() {
      this.renderTemplate();
    }
  }, {
    key: "renderTemplate",
    value: function renderTemplate() {
      this.parent.insertAdjacentHTML('beforeend', this.tmplFunc(this.props));
      this.htmlElement = this.parent.getElementsByClassName(this.props.className)[0];
    }
  }, {
    key: "update",
    value: function update() {
      this.destroy();
      this.render();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.htmlElement.remove();
    }
  }]);
}();

/***/ }),

/***/ "./src/shared/canvas/index.ts":
/*!************************************!*\
  !*** ./src/shared/canvas/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Canvas: () => (/* reexport safe */ _ui__WEBPACK_IMPORTED_MODULE_0__.Canvas)
/* harmony export */ });
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ "./src/shared/canvas/ui/index.ts");


/***/ }),

/***/ "./src/shared/canvas/lib/index.constnats.ts":
/*!**************************************************!*\
  !*** ./src/shared/canvas/lib/index.constnats.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_COLOR: () => (/* binding */ DEFAULT_COLOR)
/* harmony export */ });
var DEFAULT_COLOR = {
  red: 1,
  green: 1,
  blue: 1,
  aplha: 1
};

/***/ }),

/***/ "./src/shared/canvas/lib/index.ts":
/*!****************************************!*\
  !*** ./src/shared/canvas/lib/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bufferStaticData: () => (/* binding */ bufferStaticData),
/* harmony export */   clearBuffers: () => (/* binding */ clearBuffers),
/* harmony export */   clearColor: () => (/* binding */ clearColor),
/* harmony export */   createTexture: () => (/* binding */ createTexture),
/* harmony export */   fullCanvasViewport: () => (/* binding */ fullCanvasViewport),
/* harmony export */   initNewBuffer: () => (/* binding */ initNewBuffer),
/* harmony export */   initProgram: () => (/* reexport safe */ _shaders__WEBPACK_IMPORTED_MODULE_1__.initProgram),
/* harmony export */   initTwoBufferVao: () => (/* binding */ initTwoBufferVao),
/* harmony export */   loadTextureFile: () => (/* binding */ loadTextureFile)
/* harmony export */ });
/* harmony import */ var _index_constnats__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.constnats */ "./src/shared/canvas/lib/index.constnats.ts");
/* harmony import */ var _shaders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shaders */ "./src/shared/canvas/lib/shaders/index.ts");


function clearBuffers(gl) {
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
}
function clearColor(gl, color) {
  var _color, _color$aplha;
  color = (_color = color) !== null && _color !== void 0 ? _color : _index_constnats__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_COLOR;
  color.aplha = (_color$aplha = color.aplha) !== null && _color$aplha !== void 0 ? _color$aplha : 1.0;
  gl.clearColor(color.red, color.green, color.blue, color.aplha);
}

// Create new buffer and put vertices data in it
function initNewBuffer(gl, data) {
  var buffer = gl.createBuffer();
  bufferStaticData(gl, buffer, data);
  return buffer;
}

// Put vertices in buffer data
function bufferStaticData(gl, buffer, data) {
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);
}

// Sets viewport size equal to full canvas size
function fullCanvasViewport(gl, canvas) {
  gl.viewport(0, 0, canvas.width, canvas.height);
}
function createTexture(gl, pixels, width, height) {
  var texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, width, height, 0, gl.RGB, gl.UNSIGNED_BYTE, pixels);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
  gl.generateMipmap(gl.TEXTURE_2D);
  return texture;
}
function loadTextureFile(src) {
  var image = new Image();
  return new Promise(function (resolve) {
    image.addEventListener('load', function () {
      resolve(image);
    });
    image.src = src;
  });
}
function initTwoBufferVao(gl, positionBuffer, textureCoordsBuffer, positionAttr, textureCoordsAttr) {
  var vao = gl.createVertexArray();
  if (!vao) {
    console.error('Failed to create vao');
    return null;
  }
  gl.bindVertexArray(vao);
  gl.enableVertexAttribArray(positionAttr);
  gl.enableVertexAttribArray(textureCoordsAttr);
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.vertexAttribPointer(positionAttr, 2, gl.FLOAT, false, 0, 0);
  gl.bindBuffer(gl.ARRAY_BUFFER, textureCoordsBuffer);
  gl.vertexAttribPointer(textureCoordsAttr, 2, gl.FLOAT, false, 0, 0);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);
  gl.bindVertexArray(null);
  return vao;
}

/***/ }),

/***/ "./src/shared/canvas/lib/shaders/fragmentShader/index.ts":
/*!***************************************************************!*\
  !*** ./src/shared/canvas/lib/shaders/fragmentShader/index.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fragmentShaderSrc: () => (/* binding */ fragmentShaderSrc),
/* harmony export */   initFragmentShader: () => (/* binding */ initFragmentShader)
/* harmony export */ });
var fragmentShaderSrc = "#version 300 es\nprecision mediump float;\n\nin vec2 fragTextureCoords;\n\nuniform sampler2D sampler;\n\nout vec4 outputColor;\n\nvoid main() {\n    outputColor = texture(sampler, fragTextureCoords);\n}";

// Creates and compiles fragment shader
function initFragmentShader(gl) {
  var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragmentShader, fragmentShaderSrc);
  gl.compileShader(fragmentShader);
  if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
    var errorMessage = gl.getShaderInfoLog(fragmentShader);
    console.error("Failed to compile fragment shader: ".concat(errorMessage));
    return;
  }
  return fragmentShader;
}

/***/ }),

/***/ "./src/shared/canvas/lib/shaders/index.ts":
/*!************************************************!*\
  !*** ./src/shared/canvas/lib/shaders/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   attachShaders: () => (/* binding */ attachShaders),
/* harmony export */   initProgram: () => (/* binding */ initProgram)
/* harmony export */ });
/* harmony import */ var _fragmentShader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fragmentShader */ "./src/shared/canvas/lib/shaders/fragmentShader/index.ts");
/* harmony import */ var _vertexShader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vertexShader */ "./src/shared/canvas/lib/shaders/vertexShader/index.ts");



// Creates and compiles fragment shader
function initProgram(gl) {
  var program = gl.createProgram();
  var vertexShader = (0,_vertexShader__WEBPACK_IMPORTED_MODULE_1__.initVertexShader)(gl);
  var fragmentShader = (0,_fragmentShader__WEBPACK_IMPORTED_MODULE_0__.initFragmentShader)(gl);
  attachShaders(gl, program, [vertexShader, fragmentShader]);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    var errorMessage = gl.getProgramInfoLog(program);
    console.error("Failed to link GPU program: ".concat(errorMessage));
    return;
  }
  var vertexPositionAttributeLocation = gl.getAttribLocation(program, 'vertexPosition');
  var textureAttributeLocation = gl.getAttribLocation(program, 'vertTextureCoords');
  if (vertexPositionAttributeLocation < 0) {
    console.error("Failed to get attribute location");
    return;
  }
  var coordsUniform = gl.getUniformLocation(program, 'coords');
  var sizeUniform = gl.getUniformLocation(program, 'size');
  var canvasSizeUniform = gl.getUniformLocation(program, 'canvasSize');
  if (coordsUniform === null || sizeUniform === null || canvasSizeUniform === null) {
    console.error("Failed to get uniforms location", "coords: ".concat(coordsUniform !== null), "size: ".concat(sizeUniform !== null), "canvasSize: ".concat(canvasSizeUniform !== null));
    return;
  }
  return {
    program: program,
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    positionAttrLocation: vertexPositionAttributeLocation,
    textureAttrLocation: textureAttributeLocation,
    coordsUniform: coordsUniform,
    sizeUniform: sizeUniform,
    canvasSizeUniform: canvasSizeUniform
  };
}

// Attaches shaders to the program
function attachShaders(gl, program, shaders) {
  shaders.forEach(function (shader) {
    gl.attachShader(program, shader);
  });
}

/***/ }),

/***/ "./src/shared/canvas/lib/shaders/vertexShader/index.ts":
/*!*************************************************************!*\
  !*** ./src/shared/canvas/lib/shaders/vertexShader/index.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initVertexShader: () => (/* binding */ initVertexShader)
/* harmony export */ });
var vertexShaderSrc = "#version 300 es\nprecision mediump float;\n\nin vec2 vertexPosition;\nin vec2 vertTextureCoords;\n\nuniform vec2 canvasSize;\nuniform vec2 coords;\nuniform float size;\n\nout vec2 fragTextureCoords;\n\nvoid main() {\n    fragTextureCoords = vertTextureCoords;\n\n    vec2 finalPosition = vertexPosition * (size / 2.0) + coords + (size / 2.0);\n    vec2 clipPosition = (finalPosition / canvasSize) * 2.0 - 1.0;\n\n    gl_Position = vec4(clipPosition, 0.0, 1.0);\n}";

// Creates and compiles vertex shader
function initVertexShader(gl) {
  var vertexShader = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertexShader, vertexShaderSrc);
  gl.compileShader(vertexShader);
  if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
    var errorMessage = gl.getShaderInfoLog(vertexShader);
    console.error("Failed to compile vertex shader: ".concat(errorMessage));
    return;
  }
  return vertexShader;
}

/***/ }),

/***/ "./src/shared/canvas/ui/index.ts":
/*!***************************************!*\
  !*** ./src/shared/canvas/ui/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Canvas: () => (/* binding */ Canvas)
/* harmony export */ });
/* harmony import */ var _index_template_pug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.template.pug */ "./src/shared/canvas/ui/index.template.pug");
/* harmony import */ var _index_template_pug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_template_pug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.style.scss */ "./src/shared/canvas/ui/index.style.scss");
/* harmony import */ var _shared_types_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/shared/@types/index.component */ "./src/shared/@types/index.component.ts");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib */ "./src/shared/canvas/lib/index.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }




var Canvas = /*#__PURE__*/function (_Component) {
  function Canvas(parent, props) {
    var _this;
    _classCallCheck(this, Canvas);
    _this = _callSuper(this, Canvas, [parent, (_index_template_pug__WEBPACK_IMPORTED_MODULE_0___default()), props]);
    _this.objects = new Map();
    _this.positionBuffers = new Map();
    _this.initWebGL();
    return _this;
  }
  _inherits(Canvas, _Component);
  return _createClass(Canvas, [{
    key: "initWebGL",
    value: function initWebGL() {
      this.renderingContext = this.htmlElement.getContext('webgl2');
      var data = (0,_lib__WEBPACK_IMPORTED_MODULE_3__.initProgram)(this.renderingContext);
      this.program = data.program;
      this.positionAttributeLocation = data.positionAttrLocation;
      this.textureAttributeLocation = data.textureAttrLocation;
      this.vertexShader = data.vertexShader;
      this.fragmentShader = data.fragmentShader;
      this.coordsUniform = data.coordsUniform;
      this.sizeUniform = data.sizeUniform;
      this.canvasSizeUniform = data.canvasSizeUniform;
      this.renderingContext.pixelStorei(this.renderingContext.UNPACK_FLIP_Y_WEBGL, true);

      // Output merger
      this.htmlElement.width = this.htmlElement.clientWidth;
      this.htmlElement.height = this.htmlElement.clientHeight;
      this.positionBuffers.set(3, (0,_lib__WEBPACK_IMPORTED_MODULE_3__.initNewBuffer)(this.renderingContext, new Float32Array([-0.5, -0.5, 0.0, 0.5, 0.5, -0.5])));
      this.positionBuffers.set(6, (0,_lib__WEBPACK_IMPORTED_MODULE_3__.initNewBuffer)(this.renderingContext, new Float32Array([-1, 1, -1, -1, 1, -1, 1, -1, 1, 1, -1, 1])));
    }
  }, {
    key: "createNewVao",
    value: function createNewVao(totalVertices) {
      if (!this.positionBuffers.has(totalVertices)) {
        return null;
      }
      var textureData = new Float32Array(totalVertices * 2);
      var textureBuffer = this.renderingContext.createBuffer();
      return {
        vao: (0,_lib__WEBPACK_IMPORTED_MODULE_3__.initTwoBufferVao)(this.renderingContext, this.positionBuffers.get(totalVertices), textureBuffer, this.positionAttributeLocation, this.textureAttributeLocation),
        totalVertices: totalVertices,
        textureData: textureData,
        textureBuffer: textureBuffer
      };
    }
  }, {
    key: "createNewTexture",
    value: function createNewTexture(pixels, width, height) {
      return (0,_lib__WEBPACK_IMPORTED_MODULE_3__.createTexture)(this.renderingContext, pixels, width, height);
    }
  }, {
    key: "createNewTextureFromFile",
    value: function () {
      var _createNewTextureFromFile = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(fileName) {
        var image;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0,_lib__WEBPACK_IMPORTED_MODULE_3__.loadTextureFile)(fileName);
            case 2:
              image = _context.sent;
              return _context.abrupt("return", (0,_lib__WEBPACK_IMPORTED_MODULE_3__.createTexture)(this.renderingContext, image, image.width, image.height));
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function createNewTextureFromFile(_x) {
        return _createNewTextureFromFile.apply(this, arguments);
      }
      return createNewTextureFromFile;
    }()
  }, {
    key: "addObject",
    value: function addObject(name, vao, params, texture) {
      this.objects.set(name, {
        vao: vao,
        size: params.size,
        coords: params.coords,
        texture: texture,
        textureCoords: params.textureCoords
      });
    }
  }, {
    key: "updateObject",
    value: function updateObject(name, params) {
      var _params$coords, _params$size, _params$textureCoords;
      if (!this.objects.has(name)) {
        return;
      }
      this.objects.get(name).coords = (_params$coords = params.coords) !== null && _params$coords !== void 0 ? _params$coords : this.objects.get(name).coords;
      this.objects.get(name).size = (_params$size = params.size) !== null && _params$size !== void 0 ? _params$size : this.objects.get(name).size;
      this.objects.get(name).textureCoords = (_params$textureCoords = params.textureCoords) !== null && _params$textureCoords !== void 0 ? _params$textureCoords : this.objects.get(name).textureCoords;
    }
  }, {
    key: "draw",
    value: function draw() {
      var _this2 = this;
      this.clearColor();
      this.clearBuffers();
      (0,_lib__WEBPACK_IMPORTED_MODULE_3__.fullCanvasViewport)(this.renderingContext, this.htmlElement);
      this.renderingContext.useProgram(this.program);
      this.renderingContext.uniform2f(this.canvasSizeUniform, this.htmlElement.width, this.htmlElement.height);

      // Render all objects
      this.objects.forEach(function (info) {
        _this2.renderingContext.uniform1f(_this2.sizeUniform, info.size);
        _this2.renderingContext.uniform2f(_this2.coordsUniform, info.coords.x, info.coords.y);
        _this2.renderingContext.bindVertexArray(info.vao.vao);
        info.vao.textureData.set(info.textureCoords);
        (0,_lib__WEBPACK_IMPORTED_MODULE_3__.bufferStaticData)(_this2.renderingContext, info.vao.textureBuffer, info.vao.textureData);
        _this2.renderingContext.bindTexture(_this2.renderingContext.TEXTURE_2D, info.texture);
        _this2.renderingContext.drawArrays(_this2.renderingContext.TRIANGLES, 0, info.vao.totalVertices);
      });
    }
  }, {
    key: "clearColor",
    value: function clearColor(color) {
      if (this.props.clearColor !== color && color !== undefined) {
        this.props.clearColor = color;
      }
      (0,_lib__WEBPACK_IMPORTED_MODULE_3__.clearColor)(this.renderingContext, color !== null && color !== void 0 ? color : this.props.clearColor);
    }
  }, {
    key: "clearBuffers",
    value: function clearBuffers() {
      (0,_lib__WEBPACK_IMPORTED_MODULE_3__.clearBuffers)(this.renderingContext);
    }
  }]);
}(_shared_types_index_component__WEBPACK_IMPORTED_MODULE_2__.Component);

/***/ }),

/***/ "./src/shared/lib/random/index.ts":
/*!****************************************!*\
  !*** ./src/shared/lib/random/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   genRandomInt: () => (/* binding */ genRandomInt)
/* harmony export */ });
function genRandomInt(max) {
  return Math.floor(Math.random() * max);
}

/***/ }),

/***/ "./src/widgets/gameField/index.ts":
/*!****************************************!*\
  !*** ./src/widgets/gameField/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getGameFieldCanvas: () => (/* reexport safe */ _ui__WEBPACK_IMPORTED_MODULE_0__.getGameFieldCanvas)
/* harmony export */ });
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ "./src/widgets/gameField/ui/index.ts");


/***/ }),

/***/ "./src/widgets/gameField/lib/index.ts":
/*!********************************************!*\
  !*** ./src/widgets/gameField/lib/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   drawEmptyField: () => (/* binding */ drawEmptyField),
/* harmony export */   generateField: () => (/* binding */ generateField),
/* harmony export */   getClickedCoords: () => (/* binding */ getClickedCoords),
/* harmony export */   openAdjacentFields: () => (/* binding */ openAdjacentFields),
/* harmony export */   openBombs: () => (/* binding */ openBombs),
/* harmony export */   openFullField: () => (/* binding */ openFullField),
/* harmony export */   updateField: () => (/* binding */ updateField)
/* harmony export */ });
/* harmony import */ var _shared_lib_random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/shared/lib/random */ "./src/shared/lib/random/index.ts");

// Generates field
function generateField(widthTiles, heightTiles, bombsTotal, initialX, initialY) {
  var field = new Map();
  var bombs = [];
  var x = 0;
  var y = 0;
  var totalGenerated = 0;

  // TODO if total bombs >= max size => fill with bombs

  // TODO if total bombs > empty space => iterate trough empty tiles

  for (var i = 0; i < bombsTotal; i++) {
    while (totalGenerated !== i + 1 && totalGenerated !== widthTiles * heightTiles) {
      x = (0,_shared_lib_random__WEBPACK_IMPORTED_MODULE_0__.genRandomInt)(widthTiles);
      y = (0,_shared_lib_random__WEBPACK_IMPORTED_MODULE_0__.genRandomInt)(heightTiles);
      console.log(initialX === x, initialY === y);
      if (initialX !== undefined && initialY !== undefined && x === initialX && y === initialY) {
        continue;
      }
      // new
      if (!field.has(x)) {
        field.set(x, new Map());
      }

      // new y
      if (!field.get(x).has(y)) {
        field.get(x).set(y, {
          type: 'bomb'
        });
        bombs.push({
          column: x,
          row: y
        });
        // increase bombs around
        for (var j = x - 1 >= 0 ? x - 1 : 0; j <= (x + 1 <= widthTiles ? x + 1 : widthTiles - 1); j++) {
          for (var k = y - 1 >= 0 ? y - 1 : 0; k <= (j + 1 <= heightTiles ? y + 1 : heightTiles - 1); k++) {
            if (j === x && k === y) continue;
            if (!field.has(j)) field.set(j, new Map());
            if (!field.get(j).has(k)) {
              field.get(j).set(k, {
                type: 'digit',
                bombsAround: 0
              });
            }
            if (field.get(j).get(k).type === 'empty') {
              field.get(j).set(k, {
                type: 'digit',
                bombsAround: 0
              });
            }
            if (field.get(j).get(k).type === 'digit') {
              field.get(j).get(k).bombsAround++;
            }
          }
        }
        totalGenerated++;
      }
    }
  }
  return {
    field: field,
    bombs: bombs
  };
}
function getClickedCoords(e, height, tileSize) {
  return {
    i: Math.floor(e.offsetX / tileSize),
    j: Math.floor((height - e.offsetY) / tileSize)
  };
}

// Opens all field tiles
function openFullField(tiles) {
  tiles.forEach(function (column) {
    column.forEach(function (tile) {
      tile.open();
    });
  });
}

// Opens current field and all empty fields near it
function openAdjacentFields(tiles, column, row) {
  var currentTileInfo = {
    tile: tiles[column][row],
    column: column,
    row: row
  };
  if (currentTileInfo.tile.tileState !== 'closed') {
    return null;
  }
  var openedType = currentTileInfo.tile.tileType;

  // TODO stack to queue
  var nextTilesStack = [];
  var widthTiles = tiles.length;
  var heightTiles = tiles[0].length;
  var visitedTiles = new Set();
  var totalOpened = 0;
  do {
    if (!visitedTiles.has(currentTileInfo.tile.id)) {
      visitedTiles.add(currentTileInfo.tile.id);
      currentTileInfo.tile.open();
      totalOpened++;
      if (currentTileInfo.tile.tileType === 'empty') {
        for (var j = currentTileInfo.column - 1 >= 0 ? currentTileInfo.column - 1 : 0; j <= (currentTileInfo.column + 1 < widthTiles ? currentTileInfo.column + 1 : widthTiles - 1); j++) {
          for (var k = currentTileInfo.row - 1 >= 0 ? currentTileInfo.row - 1 : 0; k <= (currentTileInfo.row + 1 < heightTiles ? currentTileInfo.row + 1 : heightTiles - 1); k++) {
            var tile = tiles[j][k];
            if (!visitedTiles.has(tile.id) && tile.tileState === 'closed') {
              nextTilesStack.push({
                tile: tile,
                column: j,
                row: k
              });
            }
          }
        }
      }
    }
    currentTileInfo = nextTilesStack.pop();
  } while (currentTileInfo !== undefined);
  return {
    openedType: openedType,
    totalOpened: totalOpened
  };
}
function openBombs(tiles, bombs) {
  bombs.forEach(function (bomb) {
    tiles[bomb.column][bomb.row].open();
  });
}
function drawEmptyField(width, height, tileSize, addEmptyTile) {
  var tiles = [];
  for (var i = 0; i < width; i++) {
    tiles.push([]);
    for (var j = 0; j < height; j++) {
      tiles[i].push(addEmptyTile(i * tileSize, j * tileSize, tileSize));
    }
  }
  return tiles;
}
function updateField(field, width, height, tiles) {
  for (var i = 0; i < width; i++) {
    for (var j = 0; j < height; j++) {
      var _field$get;
      var nextTile = {
        type: 'empty'
      };
      if ((_field$get = field.get(i)) !== null && _field$get !== void 0 && _field$get.has(j)) {
        nextTile = field.get(i).get(j);
      }
      switch (nextTile.type) {
        case 'bomb':
          tiles[i][j].setTypeBomb();
          break;
        case 'digit':
          tiles[i][j].setTypeDigit(nextTile.bombsAround);
          break;
      }
    }
  }
}

/***/ }),

/***/ "./src/widgets/gameField/ui/index.ts":
/*!*******************************************!*\
  !*** ./src/widgets/gameField/ui/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getGameFieldCanvas: () => (/* binding */ getGameFieldCanvas)
/* harmony export */ });
/* harmony import */ var _shared_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/shared/canvas */ "./src/shared/canvas/index.ts");
/* harmony import */ var _tile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tile */ "./src/widgets/gameField/ui/tile/index.ts");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib */ "./src/widgets/gameField/lib/index.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }



var CANVAS_WIDTH = 500;
var CANVAS_HEIGHT = 500;
function processClick(tiles, tileSize, height, e) {
  e.preventDefault();
  var _getClickedCoords = (0,_lib__WEBPACK_IMPORTED_MODULE_2__.getClickedCoords)(e, height, tileSize),
    i = _getClickedCoords.i,
    j = _getClickedCoords.j;
  if (tiles[i] === undefined) {
    return null;
  }
  var tile = tiles[i][j];
  if (tile !== undefined) {
    var result = (0,_lib__WEBPACK_IMPORTED_MODULE_2__.openAdjacentFields)(tiles, i, j);
    if ((result === null || result === void 0 ? void 0 : result.openedType) === 'bomb') {
      tile.setTypeExploded();
    }
    return result;
  }
  return null;
}
function processRightClick(tiles, tileSize, height, e) {
  e.preventDefault();
  var _getClickedCoords2 = (0,_lib__WEBPACK_IMPORTED_MODULE_2__.getClickedCoords)(e, height, tileSize),
    i = _getClickedCoords2.i,
    j = _getClickedCoords2.j;
  if (tiles[i] === undefined) {
    return null;
  }
  var tile = tiles[i][j];
  if (tile !== undefined) {
    var withFlag = tile.tileState === 'flag';
    if (withFlag) {
      tile.close();
    }
    if (!withFlag) {
      tile.putFlag();
    }
    return {
      type: tile.tileType,
      state: tile.tileState
    };
  }
  return null;
}

// Get canvas with game
// eslint-disable-next-line max-lines-per-function
function getGameFieldCanvas(_x, _x2) {
  return _getGameFieldCanvas.apply(this, arguments);
}
function _getGameFieldCanvas() {
  _getGameFieldCanvas = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(parent, className) {
    var canvas, gameState, tile, width, height, tileSize, totalBombs, tiles, _drawField;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          canvas = new _shared_canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas(parent, {
            className: className,
            width: CANVAS_WIDTH,
            height: CANVAS_HEIGHT
          });
          gameState = {
            status: 'menu'
          };
          _context.next = 4;
          return (0,_tile__WEBPACK_IMPORTED_MODULE_1__.getNewTile)(canvas);
        case 4:
          tile = _context.sent;
          width = 10, height = 10;
          tileSize = 30;
          totalBombs = 10;
          tiles = (0,_lib__WEBPACK_IMPORTED_MODULE_2__.drawEmptyField)(width, height, tileSize, tile.addNewEmptyTile);
          canvas.htmlElement.addEventListener('click', function (e) {
            if (gameState.status === 'menu') {
              var clickCoords = (0,_lib__WEBPACK_IMPORTED_MODULE_2__.getClickedCoords)(e, CANVAS_HEIGHT, tileSize);
              var _generateField = (0,_lib__WEBPACK_IMPORTED_MODULE_2__.generateField)(width, height, 10, clickCoords.i, clickCoords.j),
                field = _generateField.field,
                bombs = _generateField.bombs;
              (0,_lib__WEBPACK_IMPORTED_MODULE_2__.updateField)(field, width, height, tiles);
              gameState.bombs = bombs;
              gameState.bombsLeft = totalBombs;
              gameState.noBombsFieldsLeft = width * height - totalBombs;
              gameState.status = 'game';
            }
            if (gameState.status === 'game') {
              var result = processClick(tiles, tileSize, CANVAS_HEIGHT, e);
              if (result === null) {
                return;
              }
              if ((result === null || result === void 0 ? void 0 : result.openedType) === 'bomb') {
                (0,_lib__WEBPACK_IMPORTED_MODULE_2__.openBombs)(tiles, gameState.bombs);
                gameState.status = 'defeat';
              }
              if ((result === null || result === void 0 ? void 0 : result.openedType) !== 'bomb') {
                gameState.noBombsFieldsLeft -= result.totalOpened;
                if (gameState.bombsLeft === 0 && gameState.noBombsFieldsLeft === 0) {
                  gameState.status = 'victory';
                  console.log('victory!');
                }
              }
              console.log(gameState);
            }
          });
          canvas.htmlElement.addEventListener('contextmenu', function (e) {
            if (gameState.status === 'game') {
              var result = processRightClick(tiles, tileSize, CANVAS_HEIGHT, e);
              if (result === null) {
                return;
              }

              // If player put flag on bomb
              if (result.state === 'flag' && result.type === 'bomb') {
                gameState.bombsLeft--;
                if (gameState.bombsLeft === 0 && gameState.noBombsFieldsLeft === 0) {
                  gameState.status = 'victory';
                  console.log('victory!');
                }
              }

              // If player removed flag from bomb
              if (result.state === 'closed' && result.type === 'bomb') {
                gameState.bombsLeft++;
              }
              console.log(gameState);
            }
          });
          _drawField = function drawField() {
            canvas.draw();
            requestAnimationFrame(function () {
              _drawField();
            });
          };
          return _context.abrupt("return", {
            canvas: canvas,
            drawField: function drawField() {
              requestAnimationFrame(function () {
                _drawField();
              });
            },
            openField: function openField() {
              (0,_lib__WEBPACK_IMPORTED_MODULE_2__.openFullField)(tiles);
            }
          });
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _getGameFieldCanvas.apply(this, arguments);
}

/***/ }),

/***/ "./src/widgets/gameField/ui/tile/index.ts":
/*!************************************************!*\
  !*** ./src/widgets/gameField/ui/tile/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tile: () => (/* reexport safe */ _ui__WEBPACK_IMPORTED_MODULE_1__.Tile),
/* harmony export */   getNewTile: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.getNewTile)
/* harmony export */ });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ "./src/widgets/gameField/ui/tile/lib/index.ts");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ "./src/widgets/gameField/ui/tile/ui/index.ts");



/***/ }),

/***/ "./src/widgets/gameField/ui/tile/lib/index.ts":
/*!****************************************************!*\
  !*** ./src/widgets/gameField/ui/tile/lib/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateTileId: () => (/* binding */ generateTileId),
/* harmony export */   getNewTile: () => (/* binding */ getNewTile)
/* harmony export */ });
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui */ "./src/widgets/gameField/ui/tile/ui/index.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

function generateTileId(x, y) {
  return "tile[".concat(x, ":").concat(y, "]");
}
function getNewTile(_x) {
  return _getNewTile.apply(this, arguments);
}
function _getNewTile() {
  _getNewTile = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(canvas) {
    var vaoInfo, texture, createVao, addNewTile;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          vaoInfo = null;
          _context.next = 3;
          return canvas.createNewTextureFromFile('./public/tiletextures.png');
        case 3:
          texture = _context.sent;
          createVao = function createVao() {
            vaoInfo = canvas.createNewVao(6);
          };
          addNewTile = function addNewTile(type, x, y, size, bombsAround) {
            if (vaoInfo === null) {
              createVao();
            }
            return new _ui__WEBPACK_IMPORTED_MODULE_0__.Tile(canvas, vaoInfo, x, y, size, 'closed', type, texture, bombsAround);
          };
          return _context.abrupt("return", {
            addNewEmptyTile: function addNewEmptyTile(x, y, size) {
              return addNewTile('empty', x, y, size);
            },
            addNewBombTile: function addNewBombTile(x, y, size) {
              return addNewTile('bomb', x, y, size);
            },
            addNewDigitTile: function addNewDigitTile(x, y, size, bombsAround) {
              return addNewTile('digit', x, y, size, bombsAround);
            }
          });
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _getNewTile.apply(this, arguments);
}

/***/ }),

/***/ "./src/widgets/gameField/ui/tile/textures/index.ts":
/*!*********************************************************!*\
  !*** ./src/widgets/gameField/ui/tile/textures/index.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TILE_TEXTURE_COORDS: () => (/* binding */ TILE_TEXTURE_COORDS)
/* harmony export */ });
/* harmony import */ var _tiletextures_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tiletextures.png */ "./src/widgets/gameField/ui/tile/textures/tiletextures.png");

var TILE_TEXTURE_COORDS = {
  EMPTY: [0, 1, 0, 0.75, 0.25, 0.75, 0.25, 0.75, 0.25, 1, 0, 1],
  ONE: [0.25, 1, 0.25, 0.75, 0.5, 0.75, 0.5, 0.75, 0.5, 1, 0.25, 1],
  TWO: [0.5, 1, 0.5, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 1, 0.5, 1],
  THREE: [0.75, 1, 0.75, 0.75, 1, 0.75, 1, 0.75, 1, 1, 0.75, 1],
  FOUR: [0, 0.75, 0, 0.5, 0.25, 0.5, 0.25, 0.5, 0.25, 0.75, 0, 0.75],
  FIVE: [0.25, 0.75, 0.25, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.75, 0.25, 0.75],
  SIX: [0.5, 0.75, 0.5, 0.5, 0.75, 0.5, 0.75, 0.5, 0.75, 0.75, 0.5, 0.75],
  SEVEN: [0.75, 0.75, 0.75, 0.5, 1, 0.5, 1, 0.5, 1, 0.75, 0.75, 0.75],
  EIGHT: [0, 0.5, 0, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.5, 0, 0.5],
  CLOSED: [0.25, 0.5, 0.25, 0.25, 0.5, 0.25, 0.5, 0.25, 0.5, 0.5, 0.25, 0.5],
  FLAG: [0.5, 0.5, 0.5, 0.25, 0.75, 0.25, 0.75, 0.25, 0.75, 0.5, 0.5, 0.5],
  FLAG_WRONG: [0.75, 0.5, 0.75, 0.25, 1, 0.25, 1, 0.25, 1, 0.5, 0.75, 0.5],
  BOMB: [0, 0.25, 0, 0, 0.25, 0, 0.25, 0, 0.25, 0.25, 0, 0.25],
  BOMB_WRONG: [0.25, 0.25, 0.25, 0, 0.5, 0, 0.5, 0, 0.5, 0.25, 0.25, 0.25]
};

/***/ }),

/***/ "./src/widgets/gameField/ui/tile/ui/index.ts":
/*!***************************************************!*\
  !*** ./src/widgets/gameField/ui/tile/ui/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tile: () => (/* binding */ Tile)
/* harmony export */ });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ "./src/widgets/gameField/ui/tile/lib/index.ts");
/* harmony import */ var _textures__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../textures */ "./src/widgets/gameField/ui/tile/textures/index.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var Tile = /*#__PURE__*/function () {
  function Tile(canvas, vaoInfo, x, y, size, state, type, texture, bombsAround) {
    _classCallCheck(this, Tile);
    this.state = state;
    this.type = type;
    this.coords = {
      x: x,
      y: y
    };
    this.size = size;
    this.coordsId = (0,_lib__WEBPACK_IMPORTED_MODULE_0__.generateTileId)(x, y);
    this.canvas = canvas;
    this.vaoInfo = vaoInfo;
    this.texture = texture;
    this.bombsAround = bombsAround;
    this.renderOnCanvas();
  }
  return _createClass(Tile, [{
    key: "renderOnCanvas",
    value: function renderOnCanvas() {
      this.canvas.addObject(this.coordsId, this.vaoInfo, {
        size: this.size,
        coords: this.coords,
        textureCoords: _textures__WEBPACK_IMPORTED_MODULE_1__.TILE_TEXTURE_COORDS.CLOSED
      }, this.texture);
    }
  }, {
    key: "tileCoords",
    get: function get() {
      return this.coords;
    }
  }, {
    key: "id",
    get: function get() {
      return this.coordsId;
    }
  }, {
    key: "tileType",
    get: function get() {
      return this.type;
    }
  }, {
    key: "tileState",
    get: function get() {
      return this.state;
    }
  }, {
    key: "updateTextureCoords",
    value: function updateTextureCoords() {
      var newTextureCoords = null;
      if (this.state === 'opened') {
        switch (this.type) {
          case 'exploded':
            newTextureCoords = _textures__WEBPACK_IMPORTED_MODULE_1__.TILE_TEXTURE_COORDS.BOMB_WRONG;
            break;
          case 'bomb':
            newTextureCoords = _textures__WEBPACK_IMPORTED_MODULE_1__.TILE_TEXTURE_COORDS.BOMB;
            break;
          case 'digit':
            switch (this.bombsAround) {
              case 1:
                newTextureCoords = _textures__WEBPACK_IMPORTED_MODULE_1__.TILE_TEXTURE_COORDS.ONE;
                break;
              case 2:
                newTextureCoords = _textures__WEBPACK_IMPORTED_MODULE_1__.TILE_TEXTURE_COORDS.TWO;
                break;
              case 3:
                newTextureCoords = _textures__WEBPACK_IMPORTED_MODULE_1__.TILE_TEXTURE_COORDS.THREE;
                break;
              case 4:
                newTextureCoords = _textures__WEBPACK_IMPORTED_MODULE_1__.TILE_TEXTURE_COORDS.FOUR;
                break;
              case 5:
                newTextureCoords = _textures__WEBPACK_IMPORTED_MODULE_1__.TILE_TEXTURE_COORDS.FIVE;
                break;
              case 6:
                newTextureCoords = _textures__WEBPACK_IMPORTED_MODULE_1__.TILE_TEXTURE_COORDS.SIX;
                break;
              case 7:
                newTextureCoords = _textures__WEBPACK_IMPORTED_MODULE_1__.TILE_TEXTURE_COORDS.SEVEN;
                break;
              case 8:
                newTextureCoords = _textures__WEBPACK_IMPORTED_MODULE_1__.TILE_TEXTURE_COORDS.EIGHT;
                break;
              default:
                newTextureCoords = _textures__WEBPACK_IMPORTED_MODULE_1__.TILE_TEXTURE_COORDS.EMPTY;
                break;
            }
            break;
          default:
            newTextureCoords = _textures__WEBPACK_IMPORTED_MODULE_1__.TILE_TEXTURE_COORDS.EMPTY;
        }
      }
      if (this.state === 'closed') {
        newTextureCoords = _textures__WEBPACK_IMPORTED_MODULE_1__.TILE_TEXTURE_COORDS.CLOSED;
      }
      if (this.state === 'flag') {
        newTextureCoords = _textures__WEBPACK_IMPORTED_MODULE_1__.TILE_TEXTURE_COORDS.FLAG;
      }
      this.canvas.updateObject(this.coordsId, {
        textureCoords: newTextureCoords
      });
    }
  }, {
    key: "changeState",
    value: function changeState(newState) {
      if (this.state === newState) {
        return;
      }
      this.state = newState;
      this.updateTextureCoords();
    }
  }, {
    key: "changeType",
    value: function changeType(newType) {
      if (this.type === newType) {
        return;
      }
      this.type = newType;
      this.updateTextureCoords();
    }
  }, {
    key: "setTypeExploded",
    value: function setTypeExploded() {
      this.changeType('exploded');
    }
  }, {
    key: "setTypeBomb",
    value: function setTypeBomb() {
      this.changeType('bomb');
    }
  }, {
    key: "setTypeEmpty",
    value: function setTypeEmpty() {
      this.changeType('empty');
    }
  }, {
    key: "setTypeDigit",
    value: function setTypeDigit(bombsAround) {
      if (bombsAround <= 0) {
        this.setTypeEmpty();
      }
      if (bombsAround > 0) {
        this.bombsAround = bombsAround <= 8 ? bombsAround : 8;
        this.changeType('digit');
      }
    }
  }, {
    key: "putFlag",
    value: function putFlag() {
      this.changeState('flag');
    }
  }, {
    key: "open",
    value: function open() {
      this.changeState('opened');
    }
  }, {
    key: "close",
    value: function close() {
      this.changeState('closed');
    }
  }, {
    key: "toggle",
    value: function toggle() {
      var opened = this.state === 'opened';
      if (opened) {
        this.close();
      }
      if (!opened) {
        this.open();
      }
    }
  }]);
}();

/***/ }),

/***/ "./src/widgets/menu/index.ts":
/*!***********************************!*\
  !*** ./src/widgets/menu/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Menu: () => (/* reexport safe */ _ui__WEBPACK_IMPORTED_MODULE_0__.Menu)
/* harmony export */ });
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ "./src/widgets/menu/ui/index.ts");


/***/ }),

/***/ "./src/widgets/menu/ui/index.ts":
/*!**************************************!*\
  !*** ./src/widgets/menu/ui/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Menu: () => (/* binding */ Menu)
/* harmony export */ });
/* harmony import */ var _index_template_pug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.template.pug */ "./src/widgets/menu/ui/index.template.pug");
/* harmony import */ var _index_template_pug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_template_pug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_types_index_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/shared/@types/index.component */ "./src/shared/@types/index.component.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var Menu = /*#__PURE__*/function (_Component) {
  function Menu(parent, props) {
    _classCallCheck(this, Menu);
    return _callSuper(this, Menu, [parent, (_index_template_pug__WEBPACK_IMPORTED_MODULE_0___default()), props]);
  }
  _inherits(Menu, _Component);
  return _createClass(Menu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;
      this.htmlElement.getElementsByClassName('menu__open-btn')[0].addEventListener('click', function () {
        _this.props.openField();
      });
    }
  }, {
    key: "render",
    value: function render() {
      this.renderTemplate();
      this.componentDidMount();
    }
  }]);
}(_shared_types_index_component__WEBPACK_IMPORTED_MODULE_1__.Component);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.style.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.style.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/canvas/ui/index.style.scss":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/canvas/ui/index.style.scss ***!
  \****************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.canvas {
  border: 1px black solid;
  background-color: rgb(255, 110, 110);
}`, "",{"version":3,"sources":["webpack://./src/shared/canvas/ui/index.style.scss"],"names":[],"mappings":"AAAA;EACI,uBAAA;EACA,oCAAA;AACJ","sourcesContent":[".canvas {\r\n    border: 1px black solid;\r\n    background-color: rgb(255, 110, 110);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

/***/ "./src/widgets/gameField/ui/tile/textures/tiletextures.png":
/*!*****************************************************************!*\
  !*** ./src/widgets/gameField/ui/tile/textures/tiletextures.png ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "tiletextures.png");

/***/ }),

/***/ "./src/app/ui/index.template.pug":
/*!***************************************!*\
  !*** ./src/app/ui/index.template.pug ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (className) {pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes([`${className}`], [true]), false, true)) + "\u003E\u003Cheader class=\"app__header\"\u003E\u003C\u002Fheader\u003E\u003Cmain class=\"app__main\"\u003E\u003C\u002Fmain\u003E\u003C\u002Fdiv\u003E";}.call(this,"className" in locals_for_with?locals_for_with.className:typeof className!=="undefined"?className:undefined));;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/shared/canvas/ui/index.template.pug":
/*!*************************************************!*\
  !*** ./src/shared/canvas/ui/index.template.pug ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (className, height, width) {pug_html = pug_html + "\u003Ccanvas" + (pug.attr("class", pug.classes([`canvas ${className}`], [true]), false, true)+pug.attr("width", `${width}`, true, true)+pug.attr("height", `${height}`, true, true)) + "\u003E\u003C\u002Fcanvas\u003E";}.call(this,"className" in locals_for_with?locals_for_with.className:typeof className!=="undefined"?className:undefined,"height" in locals_for_with?locals_for_with.height:typeof height!=="undefined"?height:undefined,"width" in locals_for_with?locals_for_with.width:typeof width!=="undefined"?width:undefined));;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/widgets/menu/ui/index.template.pug":
/*!************************************************!*\
  !*** ./src/widgets/menu/ui/index.template.pug ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (className) {pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes([`menu ${className}`], [true]), false, true)) + "\u003E\u003Cbutton class=\"menu__open-btn\"\u003Eopen\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E";}.call(this,"className" in locals_for_with?locals_for_with.className:typeof className!=="undefined"?className:undefined));;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-runtime/index.js":
/*!*******************************************!*\
  !*** ./node_modules/pug-runtime/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var pug_has_own_property = Object.prototype.hasOwnProperty;

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = pug_merge;
function pug_merge(a, b) {
  if (arguments.length === 1) {
    var attrs = a[0];
    for (var i = 1; i < a.length; i++) {
      attrs = pug_merge(attrs, a[i]);
    }
    return attrs;
  }

  for (var key in b) {
    if (key === 'class') {
      var valA = a[key] || [];
      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);
    } else if (key === 'style') {
      var valA = pug_style(a[key]);
      valA = valA && valA[valA.length - 1] !== ';' ? valA + ';' : valA;
      var valB = pug_style(b[key]);
      valB = valB && valB[valB.length - 1] !== ';' ? valB + ';' : valB;
      a[key] = valA + valB;
    } else {
      a[key] = b[key];
    }
  }

  return a;
};

/**
 * Process array, object, or string as a string of classes delimited by a space.
 *
 * If `val` is an array, all members of it and its subarrays are counted as
 * classes. If `escaping` is an array, then whether or not the item in `val` is
 * escaped depends on the corresponding item in `escaping`. If `escaping` is
 * not an array, no escaping is done.
 *
 * If `val` is an object, all the keys whose value is truthy are counted as
 * classes. No escaping is done.
 *
 * If `val` is a string, it is counted as a class. No escaping is done.
 *
 * @param {(Array.<string>|Object.<string, boolean>|string)} val
 * @param {?Array.<string>} escaping
 * @return {String}
 */
exports.classes = pug_classes;
function pug_classes_array(val, escaping) {
  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);
  for (var i = 0; i < val.length; i++) {
    className = pug_classes(val[i]);
    if (!className) continue;
    escapeEnabled && escaping[i] && (className = pug_escape(className));
    classString = classString + padding + className;
    padding = ' ';
  }
  return classString;
}
function pug_classes_object(val) {
  var classString = '', padding = '';
  for (var key in val) {
    if (key && val[key] && pug_has_own_property.call(val, key)) {
      classString = classString + padding + key;
      padding = ' ';
    }
  }
  return classString;
}
function pug_classes(val, escaping) {
  if (Array.isArray(val)) {
    return pug_classes_array(val, escaping);
  } else if (val && typeof val === 'object') {
    return pug_classes_object(val);
  } else {
    return val || '';
  }
}

/**
 * Convert object or string to a string of CSS styles delimited by a semicolon.
 *
 * @param {(Object.<string, string>|string)} val
 * @return {String}
 */

exports.style = pug_style;
function pug_style(val) {
  if (!val) return '';
  if (typeof val === 'object') {
    var out = '';
    for (var style in val) {
      /* istanbul ignore else */
      if (pug_has_own_property.call(val, style)) {
        out = out + style + ':' + val[style] + ';';
      }
    }
    return out;
  } else {
    return val + '';
  }
};

/**
 * Render the given attribute.
 *
 * @param {String} key
 * @param {String} val
 * @param {Boolean} escaped
 * @param {Boolean} terse
 * @return {String}
 */
exports.attr = pug_attr;
function pug_attr(key, val, escaped, terse) {
  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {
    return '';
  }
  if (val === true) {
    return ' ' + (terse ? key : key + '="' + key + '"');
  }
  var type = typeof val;
  if ((type === 'object' || type === 'function') && typeof val.toJSON === 'function') {
    val = val.toJSON();
  }
  if (typeof val !== 'string') {
    val = JSON.stringify(val);
    if (!escaped && val.indexOf('"') !== -1) {
      return ' ' + key + '=\'' + val.replace(/'/g, '&#39;') + '\'';
    }
  }
  if (escaped) val = pug_escape(val);
  return ' ' + key + '="' + val + '"';
};

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} terse whether to use HTML5 terse boolean attributes
 * @return {String}
 */
exports.attrs = pug_attrs;
function pug_attrs(obj, terse){
  var attrs = '';

  for (var key in obj) {
    if (pug_has_own_property.call(obj, key)) {
      var val = obj[key];

      if ('class' === key) {
        val = pug_classes(val);
        attrs = pug_attr(key, val, false, terse) + attrs;
        continue;
      }
      if ('style' === key) {
        val = pug_style(val);
      }
      attrs += pug_attr(key, val, false, terse);
    }
  }

  return attrs;
};

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

var pug_match_html = /["&<>]/;
exports.escape = pug_escape;
function pug_escape(_html){
  var html = '' + _html;
  var regexResult = pug_match_html.exec(html);
  if (!regexResult) return _html;

  var result = '';
  var i, lastIndex, escape;
  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
    switch (html.charCodeAt(i)) {
      case 34: escape = '&quot;'; break;
      case 38: escape = '&amp;'; break;
      case 60: escape = '&lt;'; break;
      case 62: escape = '&gt;'; break;
      default: continue;
    }
    if (lastIndex !== i) result += html.substring(lastIndex, i);
    lastIndex = i + 1;
    result += escape;
  }
  if (lastIndex !== i) return result + html.substring(lastIndex, i);
  else return result;
};

/**
 * Re-throw the given `err` in context to the
 * the pug in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @param {String} str original source
 * @api private
 */

exports.rethrow = pug_rethrow;
function pug_rethrow(err, filename, lineno, str){
  if (!(err instanceof Error)) throw err;
  if ((typeof window != 'undefined' || !filename) && !str) {
    err.message += ' on line ' + lineno;
    throw err;
  }
  try {
    str = str || (__webpack_require__(/*! fs */ "?8f63").readFileSync)(filename, 'utf8')
  } catch (ex) {
    pug_rethrow(err, null, lineno)
  }
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Pug') + ':' + lineno
    + '\n' + context + '\n\n' + err.message;
  throw err;
};


/***/ }),

/***/ "./src/index.style.scss":
/*!******************************!*\
  !*** ./src/index.style.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./index.style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/shared/canvas/ui/index.style.scss":
/*!***********************************************!*\
  !*** ./src/shared/canvas/ui/index.style.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./index.style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/canvas/ui/index.style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "?8f63":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/public/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app */ "./src/app/index.ts");
/* harmony import */ var _index_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.style.scss */ "./src/index.style.scss");


var root = document.getElementById('root');
var app = new _app__WEBPACK_IMPORTED_MODULE_0__.App(root);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUM3REMsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7RUFDakVDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0VBQ2pFQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztFQUM3REMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUM7RUFDbEVDLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO0VBQ3hFQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQztFQUN2RUMsS0FBSyxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7RUFDbkVDLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDO0VBQ25FQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQztFQUMxRUMsSUFBSSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7RUFDeEVDLFVBQVUsRUFBRSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDO0VBQ3hFQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQztFQUM1REMsVUFBVSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFB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Ozs7O1dDTkE7Ozs7O1dDQUE7Ozs7Ozs7Ozs7Ozs7O0FDQTRCO0FBQ0Q7QUFFM0IsSUFBTXFaLElBQUksR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsTUFBTSxDQUFDO0FBQzVDLElBQU1DLEdBQUcsR0FBRyxJQUFJM1oscUNBQUcsQ0FBQ3daLElBQUksQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3VpL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvQHR5cGVzL2luZGV4LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2NhbnZhcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2NhbnZhcy9saWIvaW5kZXguY29uc3RuYXRzLnRzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvY2FudmFzL2xpYi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2NhbnZhcy9saWIvc2hhZGVycy9mcmFnbWVudFNoYWRlci9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2NhbnZhcy9saWIvc2hhZGVycy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2NhbnZhcy9saWIvc2hhZGVycy92ZXJ0ZXhTaGFkZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9jYW52YXMvdWkvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9saWIvcmFuZG9tL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy93aWRnZXRzL2dhbWVGaWVsZC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd2lkZ2V0cy9nYW1lRmllbGQvbGliL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy93aWRnZXRzL2dhbWVGaWVsZC91aS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd2lkZ2V0cy9nYW1lRmllbGQvdWkvdGlsZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd2lkZ2V0cy9nYW1lRmllbGQvdWkvdGlsZS9saWIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dpZGdldHMvZ2FtZUZpZWxkL3VpL3RpbGUvdGV4dHVyZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dpZGdldHMvZ2FtZUZpZWxkL3VpL3RpbGUvdWkvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dpZGdldHMvbWVudS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd2lkZ2V0cy9tZW51L3VpL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvY2FudmFzL3VpL2luZGV4LnN0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvd2lkZ2V0cy9nYW1lRmllbGQvdWkvdGlsZS90ZXh0dXJlcy90aWxldGV4dHVyZXMucG5nIiwid2VicGFjazovLy8uL3NyYy9hcHAvdWkvaW5kZXgudGVtcGxhdGUucHVnIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvY2FudmFzL3VpL2luZGV4LnRlbXBsYXRlLnB1ZyIsIndlYnBhY2s6Ly8vLi9zcmMvd2lkZ2V0cy9tZW51L3VpL2luZGV4LnRlbXBsYXRlLnB1ZyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnN0eWxlLnNjc3M/YTljMSIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2NhbnZhcy91aS9pbmRleC5zdHlsZS5zY3NzP2FmYjQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly8vaWdub3JlZHxHOlxcUHJvZ3JhbWluZ1xcbWluZXN3ZWVwZXJcXG5vZGVfbW9kdWxlc1xccHVnLXJ1bnRpbWV8ZnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBBcHAgfSBmcm9tIFwiLi91aVwiOyIsImltcG9ydCB7IGdldEdhbWVGaWVsZENhbnZhcyB9IGZyb20gJ0Avd2lkZ2V0cy9nYW1lRmllbGQnO1xyXG5pbXBvcnQgYXBwVG1wbCBmcm9tICcuL2luZGV4LnRlbXBsYXRlLnB1Zyc7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Avc2hhcmVkL0B0eXBlcy9pbmRleC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDYW52YXMgfSBmcm9tICdAL3NoYXJlZC9jYW52YXMnO1xyXG5pbXBvcnQgeyBNZW51IH0gZnJvbSAnQC93aWRnZXRzL21lbnUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudDxIVE1MRGl2RWxlbWVudD4ge1xyXG4gICAgcHJvdGVjdGVkIGdhbWVDYW52YXM6IENhbnZhcztcclxuICAgIHByb3RlY3RlZCBtZW51OiBNZW51O1xyXG4gICAgcHJvdGVjdGVkIGRyYXc6ICgpID0+IHZvaWQ7XHJcbiAgICBwcm90ZWN0ZWQgbWFpbkVsZW1lbnQ6IEVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IocGFyZW50OiBFbGVtZW50KSB7XHJcbiAgICAgICAgc3VwZXIocGFyZW50LCBhcHBUbXBsLCB7IGNsYXNzTmFtZTogJ2FwcCcgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLnJlbmRlclRlbXBsYXRlKCk7XHJcbiAgICAgICAgdGhpcy5tYWluRWxlbWVudCA9XHJcbiAgICAgICAgICAgIHRoaXMuaHRtbEVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYXBwX19tYWluJylbMF07XHJcblxyXG4gICAgICAgIGdldEdhbWVGaWVsZENhbnZhcyh0aGlzLm1haW5FbGVtZW50LCAnYXBwX19nYW1lLWNhbnZhcycpXHJcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVDYW52YXMgPSBkYXRhLmNhbnZhcztcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhdyA9IGRhdGEuZHJhd0ZpZWxkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZW51ID0gbmV3IE1lbnUodGhpcy5tYWluRWxlbWVudCwge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2FwcF9fbWVudScsXHJcbiAgICAgICAgICAgICAgICAgICAgb3BlbkZpZWxkOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEub3BlbkZpZWxkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhdygpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFRtcGxGdW5jIH0gZnJvbSAnLi9pbmRleC50ZW1wbGF0ZUZ1bmN0aW9uJztcclxuXHJcbmludGVyZmFjZSBJUHJvcHMge1xyXG4gICAgY2xhc3NOYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDb21wb25lbnQ8XHJcbiAgICBUeXBlIGV4dGVuZHMgRWxlbWVudCxcclxuICAgIFByb3BzIGV4dGVuZHMgSVByb3BzID0gSVByb3BzLFxyXG4+IHtcclxuICAgIGh0bWxFbGVtZW50OiBUeXBlO1xyXG4gICAgcHJvdGVjdGVkIHBhcmVudDogRWxlbWVudDtcclxuICAgIHByb3RlY3RlZCB0bXBsRnVuYzogVG1wbEZ1bmM7XHJcbiAgICBwcm90ZWN0ZWQgcHJvcHM6IFByb3BzO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhcmVudDogRWxlbWVudCwgdG1wbEZ1bmM6IFRtcGxGdW5jLCBwcm9wczogUHJvcHMpIHtcclxuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcclxuICAgICAgICB0aGlzLnRtcGxGdW5jID0gdG1wbEZ1bmM7XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xyXG4gICAgICAgIHRoaXMuaHRtbEVsZW1lbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLnJlbmRlclRlbXBsYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHJlbmRlclRlbXBsYXRlKCkge1xyXG4gICAgICAgIHRoaXMucGFyZW50Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdGhpcy50bXBsRnVuYyh0aGlzLnByb3BzKSk7XHJcbiAgICAgICAgdGhpcy5odG1sRWxlbWVudCA9IHRoaXMucGFyZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2xhc3NOYW1lLFxyXG4gICAgICAgIClbMF0gYXMgVHlwZTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuaHRtbEVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IHsgQ2FudmFzIH0gZnJvbSAnLi91aSc7XHJcbmV4cG9ydCB0eXBlIHsgVmFvSW5mbywgQ29vcmRzIH0gZnJvbSAnLi91aSc7XHJcbiIsImltcG9ydCB7IENvbG9yIH0gZnJvbSAnLi9pbmRleC50eXBlcyc7XHJcblxyXG5leHBvcnQgY29uc3QgREVGQVVMVF9DT0xPUjogQ29sb3IgPSB7XHJcbiAgICByZWQ6IDEsXHJcbiAgICBncmVlbjogMSxcclxuICAgIGJsdWU6IDEsXHJcbiAgICBhcGxoYTogMSxcclxufTtcclxuIiwiaW1wb3J0IHsgREVGQVVMVF9DT0xPUiB9IGZyb20gJy4vaW5kZXguY29uc3RuYXRzJztcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICcuL2luZGV4LnR5cGVzJztcclxuZXhwb3J0IHsgaW5pdFByb2dyYW0gfSBmcm9tICcuL3NoYWRlcnMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyQnVmZmVycyhnbDogV2ViR0wyUmVuZGVyaW5nQ29udGV4dCkge1xyXG4gICAgZ2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVCB8IGdsLkRFUFRIX0JVRkZFUl9CSVQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJDb2xvcihnbDogV2ViR0wyUmVuZGVyaW5nQ29udGV4dCwgY29sb3I/OiBDb2xvcikge1xyXG4gICAgY29sb3IgPSBjb2xvciA/PyBERUZBVUxUX0NPTE9SO1xyXG4gICAgY29sb3IuYXBsaGEgPSBjb2xvci5hcGxoYSA/PyAxLjA7XHJcblxyXG4gICAgZ2wuY2xlYXJDb2xvcihjb2xvci5yZWQsIGNvbG9yLmdyZWVuLCBjb2xvci5ibHVlLCBjb2xvci5hcGxoYSk7XHJcbn1cclxuXHJcbi8vIENyZWF0ZSBuZXcgYnVmZmVyIGFuZCBwdXQgdmVydGljZXMgZGF0YSBpbiBpdFxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdE5ld0J1ZmZlcihnbDogV2ViR0wyUmVuZGVyaW5nQ29udGV4dCwgZGF0YTogQXJyYXlCdWZmZXIpIHtcclxuICAgIGNvbnN0IGJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xyXG4gICAgYnVmZmVyU3RhdGljRGF0YShnbCwgYnVmZmVyLCBkYXRhKTtcclxuICAgIHJldHVybiBidWZmZXI7XHJcbn1cclxuXHJcbi8vIFB1dCB2ZXJ0aWNlcyBpbiBidWZmZXIgZGF0YVxyXG5leHBvcnQgZnVuY3Rpb24gYnVmZmVyU3RhdGljRGF0YShcclxuICAgIGdsOiBXZWJHTDJSZW5kZXJpbmdDb250ZXh0LFxyXG4gICAgYnVmZmVyOiBXZWJHTEJ1ZmZlcixcclxuICAgIGRhdGE6IEFycmF5QnVmZmVyLFxyXG4pIHtcclxuICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBidWZmZXIpO1xyXG4gICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIGRhdGEsIGdsLlNUQVRJQ19EUkFXKTtcclxuICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBudWxsKTtcclxufVxyXG5cclxuLy8gU2V0cyB2aWV3cG9ydCBzaXplIGVxdWFsIHRvIGZ1bGwgY2FudmFzIHNpemVcclxuZXhwb3J0IGZ1bmN0aW9uIGZ1bGxDYW52YXNWaWV3cG9ydChcclxuICAgIGdsOiBXZWJHTDJSZW5kZXJpbmdDb250ZXh0LFxyXG4gICAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCxcclxuKSB7XHJcbiAgICBnbC52aWV3cG9ydCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGV4dHVyZShcclxuICAgIGdsOiBXZWJHTDJSZW5kZXJpbmdDb250ZXh0LFxyXG4gICAgcGl4ZWxzOiBUZXhJbWFnZVNvdXJjZSxcclxuICAgIHdpZHRoOiBudW1iZXIsXHJcbiAgICBoZWlnaHQ6IG51bWJlcixcclxuKSB7XHJcbiAgICBjb25zdCB0ZXh0dXJlID0gZ2wuY3JlYXRlVGV4dHVyZSgpO1xyXG4gICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGV4dHVyZSk7XHJcbiAgICBnbC50ZXhJbWFnZTJEKFxyXG4gICAgICAgIGdsLlRFWFRVUkVfMkQsXHJcbiAgICAgICAgMCxcclxuICAgICAgICBnbC5SR0IsXHJcbiAgICAgICAgd2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0LFxyXG4gICAgICAgIDAsXHJcbiAgICAgICAgZ2wuUkdCLFxyXG4gICAgICAgIGdsLlVOU0lHTkVEX0JZVEUsXHJcbiAgICAgICAgcGl4ZWxzLFxyXG4gICAgKTtcclxuXHJcbiAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgZ2wuTkVBUkVTVCk7XHJcbiAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgZ2wuTkVBUkVTVCk7XHJcbiAgICBnbC5nZW5lcmF0ZU1pcG1hcChnbC5URVhUVVJFXzJEKTtcclxuXHJcbiAgICByZXR1cm4gdGV4dHVyZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRUZXh0dXJlRmlsZShzcmM6IHN0cmluZykge1xyXG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTx0eXBlb2YgaW1hZ2U+KChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZShpbWFnZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaW1hZ2Uuc3JjID0gc3JjO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0VHdvQnVmZmVyVmFvKFxyXG4gICAgZ2w6IFdlYkdMMlJlbmRlcmluZ0NvbnRleHQsXHJcbiAgICBwb3NpdGlvbkJ1ZmZlcjogV2ViR0xCdWZmZXIsXHJcbiAgICB0ZXh0dXJlQ29vcmRzQnVmZmVyOiBXZWJHTEJ1ZmZlcixcclxuICAgIHBvc2l0aW9uQXR0cjogbnVtYmVyLFxyXG4gICAgdGV4dHVyZUNvb3Jkc0F0dHI6IG51bWJlcixcclxuKSB7XHJcbiAgICBjb25zdCB2YW8gPSBnbC5jcmVhdGVWZXJ0ZXhBcnJheSgpO1xyXG5cclxuICAgIGlmICghdmFvKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGNyZWF0ZSB2YW8nKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBnbC5iaW5kVmVydGV4QXJyYXkodmFvKTtcclxuXHJcbiAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShwb3NpdGlvbkF0dHIpO1xyXG4gICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkodGV4dHVyZUNvb3Jkc0F0dHIpO1xyXG5cclxuICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBwb3NpdGlvbkJ1ZmZlcik7XHJcbiAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHBvc2l0aW9uQXR0ciwgMiwgZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTtcclxuXHJcbiAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGV4dHVyZUNvb3Jkc0J1ZmZlcik7XHJcbiAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHRleHR1cmVDb29yZHNBdHRyLCAyLCBnbC5GTE9BVCwgZmFsc2UsIDAsIDApO1xyXG5cclxuICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBudWxsKTtcclxuXHJcbiAgICBnbC5iaW5kVmVydGV4QXJyYXkobnVsbCk7XHJcblxyXG4gICAgcmV0dXJuIHZhbztcclxufVxyXG4iLCJleHBvcnQgY29uc3QgZnJhZ21lbnRTaGFkZXJTcmMgPSBgI3ZlcnNpb24gMzAwIGVzXHJcbnByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xyXG5cclxuaW4gdmVjMiBmcmFnVGV4dHVyZUNvb3JkcztcclxuXHJcbnVuaWZvcm0gc2FtcGxlcjJEIHNhbXBsZXI7XHJcblxyXG5vdXQgdmVjNCBvdXRwdXRDb2xvcjtcclxuXHJcbnZvaWQgbWFpbigpIHtcclxuICAgIG91dHB1dENvbG9yID0gdGV4dHVyZShzYW1wbGVyLCBmcmFnVGV4dHVyZUNvb3Jkcyk7XHJcbn1gO1xyXG5cclxuLy8gQ3JlYXRlcyBhbmQgY29tcGlsZXMgZnJhZ21lbnQgc2hhZGVyXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0RnJhZ21lbnRTaGFkZXIoZ2w6IFdlYkdMMlJlbmRlcmluZ0NvbnRleHQpIHtcclxuICAgIGNvbnN0IGZyYWdtZW50U2hhZGVyID0gZ2wuY3JlYXRlU2hhZGVyKGdsLkZSQUdNRU5UX1NIQURFUik7XHJcbiAgICBnbC5zaGFkZXJTb3VyY2UoZnJhZ21lbnRTaGFkZXIsIGZyYWdtZW50U2hhZGVyU3JjKTtcclxuICAgIGdsLmNvbXBpbGVTaGFkZXIoZnJhZ21lbnRTaGFkZXIpO1xyXG5cclxuICAgIGlmICghZ2wuZ2V0U2hhZGVyUGFyYW1ldGVyKGZyYWdtZW50U2hhZGVyLCBnbC5DT01QSUxFX1NUQVRVUykpIHtcclxuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBnbC5nZXRTaGFkZXJJbmZvTG9nKGZyYWdtZW50U2hhZGVyKTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGBGYWlsZWQgdG8gY29tcGlsZSBmcmFnbWVudCBzaGFkZXI6ICR7ZXJyb3JNZXNzYWdlfWApO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZnJhZ21lbnRTaGFkZXI7XHJcbn1cclxuIiwiaW1wb3J0IHsgaW5pdEZyYWdtZW50U2hhZGVyIH0gZnJvbSAnLi9mcmFnbWVudFNoYWRlcic7XHJcbmltcG9ydCB7IGluaXRWZXJ0ZXhTaGFkZXIgfSBmcm9tICcuL3ZlcnRleFNoYWRlcic7XHJcblxyXG4vLyBDcmVhdGVzIGFuZCBjb21waWxlcyBmcmFnbWVudCBzaGFkZXJcclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRQcm9ncmFtKGdsOiBXZWJHTDJSZW5kZXJpbmdDb250ZXh0KSB7XHJcbiAgICBjb25zdCBwcm9ncmFtID0gZ2wuY3JlYXRlUHJvZ3JhbSgpO1xyXG4gICAgY29uc3QgdmVydGV4U2hhZGVyID0gaW5pdFZlcnRleFNoYWRlcihnbCk7XHJcbiAgICBjb25zdCBmcmFnbWVudFNoYWRlciA9IGluaXRGcmFnbWVudFNoYWRlcihnbCk7XHJcbiAgICBhdHRhY2hTaGFkZXJzKGdsLCBwcm9ncmFtLCBbdmVydGV4U2hhZGVyLCBmcmFnbWVudFNoYWRlcl0pO1xyXG4gICAgZ2wubGlua1Byb2dyYW0ocHJvZ3JhbSk7XHJcblxyXG4gICAgaWYgKCFnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHByb2dyYW0sIGdsLkxJTktfU1RBVFVTKSkge1xyXG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGdsLmdldFByb2dyYW1JbmZvTG9nKHByb2dyYW0pO1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEZhaWxlZCB0byBsaW5rIEdQVSBwcm9ncmFtOiAke2Vycm9yTWVzc2FnZX1gKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKFxyXG4gICAgICAgIHByb2dyYW0sXHJcbiAgICAgICAgJ3ZlcnRleFBvc2l0aW9uJyxcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgdGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9uID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24oXHJcbiAgICAgICAgcHJvZ3JhbSxcclxuICAgICAgICAndmVydFRleHR1cmVDb29yZHMnLFxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA8IDApIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGBGYWlsZWQgdG8gZ2V0IGF0dHJpYnV0ZSBsb2NhdGlvbmApO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb29yZHNVbmlmb3JtID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sICdjb29yZHMnKTtcclxuICAgIGNvbnN0IHNpemVVbmlmb3JtID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sICdzaXplJyk7XHJcbiAgICBjb25zdCBjYW52YXNTaXplVW5pZm9ybSA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCAnY2FudmFzU2l6ZScpO1xyXG5cclxuICAgIGlmIChcclxuICAgICAgICBjb29yZHNVbmlmb3JtID09PSBudWxsIHx8XHJcbiAgICAgICAgc2l6ZVVuaWZvcm0gPT09IG51bGwgfHxcclxuICAgICAgICBjYW52YXNTaXplVW5pZm9ybSA9PT0gbnVsbFxyXG4gICAgKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcclxuICAgICAgICAgICAgYEZhaWxlZCB0byBnZXQgdW5pZm9ybXMgbG9jYXRpb25gLFxyXG4gICAgICAgICAgICBgY29vcmRzOiAke2Nvb3Jkc1VuaWZvcm0gIT09IG51bGx9YCxcclxuICAgICAgICAgICAgYHNpemU6ICR7c2l6ZVVuaWZvcm0gIT09IG51bGx9YCxcclxuICAgICAgICAgICAgYGNhbnZhc1NpemU6ICR7Y2FudmFzU2l6ZVVuaWZvcm0gIT09IG51bGx9YCxcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb2dyYW06IHByb2dyYW0sXHJcbiAgICAgICAgdmVydGV4U2hhZGVyOiB2ZXJ0ZXhTaGFkZXIsXHJcbiAgICAgICAgZnJhZ21lbnRTaGFkZXI6IGZyYWdtZW50U2hhZGVyLFxyXG4gICAgICAgIHBvc2l0aW9uQXR0ckxvY2F0aW9uOiB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLFxyXG4gICAgICAgIHRleHR1cmVBdHRyTG9jYXRpb246IHRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbixcclxuICAgICAgICBjb29yZHNVbmlmb3JtOiBjb29yZHNVbmlmb3JtLFxyXG4gICAgICAgIHNpemVVbmlmb3JtOiBzaXplVW5pZm9ybSxcclxuICAgICAgICBjYW52YXNTaXplVW5pZm9ybTogY2FudmFzU2l6ZVVuaWZvcm0sXHJcbiAgICB9O1xyXG59XHJcblxyXG4vLyBBdHRhY2hlcyBzaGFkZXJzIHRvIHRoZSBwcm9ncmFtXHJcbmV4cG9ydCBmdW5jdGlvbiBhdHRhY2hTaGFkZXJzKFxyXG4gICAgZ2w6IFdlYkdMMlJlbmRlcmluZ0NvbnRleHQsXHJcbiAgICBwcm9ncmFtOiBXZWJHTFByb2dyYW0sXHJcbiAgICBzaGFkZXJzOiBXZWJHTFNoYWRlcltdLFxyXG4pIHtcclxuICAgIHNoYWRlcnMuZm9yRWFjaCgoc2hhZGVyKSA9PiB7XHJcbiAgICAgICAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIHNoYWRlcik7XHJcbiAgICB9KTtcclxufVxyXG4iLCJjb25zdCB2ZXJ0ZXhTaGFkZXJTcmMgPSBgI3ZlcnNpb24gMzAwIGVzXHJcbnByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xyXG5cclxuaW4gdmVjMiB2ZXJ0ZXhQb3NpdGlvbjtcclxuaW4gdmVjMiB2ZXJ0VGV4dHVyZUNvb3JkcztcclxuXHJcbnVuaWZvcm0gdmVjMiBjYW52YXNTaXplO1xyXG51bmlmb3JtIHZlYzIgY29vcmRzO1xyXG51bmlmb3JtIGZsb2F0IHNpemU7XHJcblxyXG5vdXQgdmVjMiBmcmFnVGV4dHVyZUNvb3JkcztcclxuXHJcbnZvaWQgbWFpbigpIHtcclxuICAgIGZyYWdUZXh0dXJlQ29vcmRzID0gdmVydFRleHR1cmVDb29yZHM7XHJcblxyXG4gICAgdmVjMiBmaW5hbFBvc2l0aW9uID0gdmVydGV4UG9zaXRpb24gKiAoc2l6ZSAvIDIuMCkgKyBjb29yZHMgKyAoc2l6ZSAvIDIuMCk7XHJcbiAgICB2ZWMyIGNsaXBQb3NpdGlvbiA9IChmaW5hbFBvc2l0aW9uIC8gY2FudmFzU2l6ZSkgKiAyLjAgLSAxLjA7XHJcblxyXG4gICAgZ2xfUG9zaXRpb24gPSB2ZWM0KGNsaXBQb3NpdGlvbiwgMC4wLCAxLjApO1xyXG59YDtcclxuXHJcbi8vIENyZWF0ZXMgYW5kIGNvbXBpbGVzIHZlcnRleCBzaGFkZXJcclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRWZXJ0ZXhTaGFkZXIoZ2w6IFdlYkdMMlJlbmRlcmluZ0NvbnRleHQpIHtcclxuICAgIGNvbnN0IHZlcnRleFNoYWRlciA9IGdsLmNyZWF0ZVNoYWRlcihnbC5WRVJURVhfU0hBREVSKTtcclxuICAgIGdsLnNoYWRlclNvdXJjZSh2ZXJ0ZXhTaGFkZXIsIHZlcnRleFNoYWRlclNyYyk7XHJcbiAgICBnbC5jb21waWxlU2hhZGVyKHZlcnRleFNoYWRlcik7XHJcblxyXG4gICAgaWYgKCFnbC5nZXRTaGFkZXJQYXJhbWV0ZXIodmVydGV4U2hhZGVyLCBnbC5DT01QSUxFX1NUQVRVUykpIHtcclxuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBnbC5nZXRTaGFkZXJJbmZvTG9nKHZlcnRleFNoYWRlcik7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihgRmFpbGVkIHRvIGNvbXBpbGUgdmVydGV4IHNoYWRlcjogJHtlcnJvck1lc3NhZ2V9YCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2ZXJ0ZXhTaGFkZXI7XHJcbn1cclxuIiwiaW1wb3J0IGNhbnZhc1RtcGwgZnJvbSAnLi9pbmRleC50ZW1wbGF0ZS5wdWcnO1xyXG5pbXBvcnQgJy4vaW5kZXguc3R5bGUuc2Nzcyc7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Avc2hhcmVkL0B0eXBlcy9pbmRleC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDYW52YXNQcm9wcywgQ29vcmRzIH0gZnJvbSAnLi9pbmRleC50eXBlcyc7XHJcbmltcG9ydCB7XHJcbiAgICBidWZmZXJTdGF0aWNEYXRhLFxyXG4gICAgY2xlYXJCdWZmZXJzLFxyXG4gICAgY2xlYXJDb2xvcixcclxuICAgIGNyZWF0ZVRleHR1cmUsXHJcbiAgICBmdWxsQ2FudmFzVmlld3BvcnQsXHJcbiAgICBpbml0TmV3QnVmZmVyLFxyXG4gICAgaW5pdFByb2dyYW0sXHJcbiAgICBpbml0VHdvQnVmZmVyVmFvLFxyXG4gICAgbG9hZFRleHR1cmVGaWxlLFxyXG59IGZyb20gJy4uL2xpYic7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSAnLi4vbGliL2luZGV4LnR5cGVzJztcclxuXHJcbmV4cG9ydCB0eXBlIHsgQ29vcmRzIH0gZnJvbSAnLi9pbmRleC50eXBlcyc7XHJcbmV4cG9ydCB0eXBlIFZhb0luZm8gPSB7XHJcbiAgICB2YW86IFdlYkdMVmVydGV4QXJyYXlPYmplY3Q7XHJcbiAgICB0b3RhbFZlcnRpY2VzOiBudW1iZXI7XHJcbiAgICB0ZXh0dXJlRGF0YTogRmxvYXQzMkFycmF5O1xyXG4gICAgdGV4dHVyZUJ1ZmZlcjogV2ViR0xCdWZmZXI7XHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FudmFzIGV4dGVuZHMgQ29tcG9uZW50PEhUTUxDYW52YXNFbGVtZW50LCBDYW52YXNQcm9wcz4ge1xyXG4gICAgcHJvdGVjdGVkIHJlbmRlcmluZ0NvbnRleHQ6IFdlYkdMMlJlbmRlcmluZ0NvbnRleHQ7XHJcbiAgICBwcm90ZWN0ZWQgcHJvZ3JhbTogV2ViR0xQcm9ncmFtO1xyXG4gICAgcHJvdGVjdGVkIHBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb246IG51bWJlcjtcclxuICAgIHByb3RlY3RlZCB0ZXh0dXJlQXR0cmlidXRlTG9jYXRpb246IG51bWJlcjtcclxuICAgIHByb3RlY3RlZCB2ZXJ0ZXhTaGFkZXI6IFdlYkdMU2hhZGVyO1xyXG4gICAgcHJvdGVjdGVkIGZyYWdtZW50U2hhZGVyOiBXZWJHTFNoYWRlcjtcclxuICAgIHByb3RlY3RlZCBjb29yZHNVbmlmb3JtOiBXZWJHTFVuaWZvcm1Mb2NhdGlvbjtcclxuICAgIHByb3RlY3RlZCBzaXplVW5pZm9ybTogV2ViR0xVbmlmb3JtTG9jYXRpb247XHJcbiAgICBwcm90ZWN0ZWQgY2FudmFzU2l6ZVVuaWZvcm06IFdlYkdMVW5pZm9ybUxvY2F0aW9uO1xyXG4gICAgcHJvdGVjdGVkIHBvc2l0aW9uQnVmZmVyczogTWFwPG51bWJlciwgV2ViR0xCdWZmZXI+O1xyXG4gICAgcHJvdGVjdGVkIG9iamVjdHM6IE1hcDxcclxuICAgICAgICBzdHJpbmcsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YW86IFZhb0luZm87XHJcbiAgICAgICAgICAgIGNvb3JkczogQ29vcmRzO1xyXG4gICAgICAgICAgICBzaXplOiBudW1iZXI7XHJcbiAgICAgICAgICAgIHRleHR1cmU6IFdlYkdMVGV4dHVyZTtcclxuICAgICAgICAgICAgdGV4dHVyZUNvb3JkczogbnVtYmVyW107XHJcbiAgICAgICAgfVxyXG4gICAgPjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQ6IEVsZW1lbnQsIHByb3BzOiBDYW52YXNQcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHBhcmVudCwgY2FudmFzVG1wbCwgcHJvcHMpO1xyXG4gICAgICAgIHRoaXMub2JqZWN0cyA9IG5ldyBNYXAoKTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uQnVmZmVycyA9IG5ldyBNYXAoKTtcclxuICAgICAgICB0aGlzLmluaXRXZWJHTCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBpbml0V2ViR0woKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJpbmdDb250ZXh0ID0gdGhpcy5odG1sRWxlbWVudC5nZXRDb250ZXh0KCd3ZWJnbDInKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gaW5pdFByb2dyYW0odGhpcy5yZW5kZXJpbmdDb250ZXh0KTtcclxuICAgICAgICB0aGlzLnByb2dyYW0gPSBkYXRhLnByb2dyYW07XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uID0gZGF0YS5wb3NpdGlvbkF0dHJMb2NhdGlvbjtcclxuICAgICAgICB0aGlzLnRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbiA9IGRhdGEudGV4dHVyZUF0dHJMb2NhdGlvbjtcclxuICAgICAgICB0aGlzLnZlcnRleFNoYWRlciA9IGRhdGEudmVydGV4U2hhZGVyO1xyXG4gICAgICAgIHRoaXMuZnJhZ21lbnRTaGFkZXIgPSBkYXRhLmZyYWdtZW50U2hhZGVyO1xyXG4gICAgICAgIHRoaXMuY29vcmRzVW5pZm9ybSA9IGRhdGEuY29vcmRzVW5pZm9ybTtcclxuICAgICAgICB0aGlzLnNpemVVbmlmb3JtID0gZGF0YS5zaXplVW5pZm9ybTtcclxuICAgICAgICB0aGlzLmNhbnZhc1NpemVVbmlmb3JtID0gZGF0YS5jYW52YXNTaXplVW5pZm9ybTtcclxuXHJcbiAgICAgICAgdGhpcy5yZW5kZXJpbmdDb250ZXh0LnBpeGVsU3RvcmVpKFxyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmluZ0NvbnRleHQuVU5QQUNLX0ZMSVBfWV9XRUJHTCxcclxuICAgICAgICAgICAgdHJ1ZSxcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyBPdXRwdXQgbWVyZ2VyXHJcbiAgICAgICAgdGhpcy5odG1sRWxlbWVudC53aWR0aCA9IHRoaXMuaHRtbEVsZW1lbnQuY2xpZW50V2lkdGg7XHJcbiAgICAgICAgdGhpcy5odG1sRWxlbWVudC5oZWlnaHQgPSB0aGlzLmh0bWxFbGVtZW50LmNsaWVudEhlaWdodDtcclxuXHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbkJ1ZmZlcnMuc2V0KFxyXG4gICAgICAgICAgICAzLFxyXG4gICAgICAgICAgICBpbml0TmV3QnVmZmVyKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJpbmdDb250ZXh0LFxyXG4gICAgICAgICAgICAgICAgbmV3IEZsb2F0MzJBcnJheShbLTAuNSwgLTAuNSwgMC4wLCAwLjUsIDAuNSwgLTAuNV0pLFxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMucG9zaXRpb25CdWZmZXJzLnNldChcclxuICAgICAgICAgICAgNixcclxuICAgICAgICAgICAgaW5pdE5ld0J1ZmZlcihcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyaW5nQ29udGV4dCxcclxuICAgICAgICAgICAgICAgIG5ldyBGbG9hdDMyQXJyYXkoWy0xLCAxLCAtMSwgLTEsIDEsIC0xLCAxLCAtMSwgMSwgMSwgLTEsIDFdKSxcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZU5ld1Zhbyh0b3RhbFZlcnRpY2VzOiBudW1iZXIpOiBWYW9JbmZvIHtcclxuICAgICAgICBpZiAoIXRoaXMucG9zaXRpb25CdWZmZXJzLmhhcyh0b3RhbFZlcnRpY2VzKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHRleHR1cmVEYXRhID0gbmV3IEZsb2F0MzJBcnJheSh0b3RhbFZlcnRpY2VzICogMik7XHJcbiAgICAgICAgY29uc3QgdGV4dHVyZUJ1ZmZlciA9IHRoaXMucmVuZGVyaW5nQ29udGV4dC5jcmVhdGVCdWZmZXIoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdmFvOiBpbml0VHdvQnVmZmVyVmFvKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJpbmdDb250ZXh0LFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbkJ1ZmZlcnMuZ2V0KHRvdGFsVmVydGljZXMpLFxyXG4gICAgICAgICAgICAgICAgdGV4dHVyZUJ1ZmZlcixcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbixcclxuICAgICAgICAgICAgICAgIHRoaXMudGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9uLFxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICB0b3RhbFZlcnRpY2VzOiB0b3RhbFZlcnRpY2VzLFxyXG4gICAgICAgICAgICB0ZXh0dXJlRGF0YTogdGV4dHVyZURhdGEsXHJcbiAgICAgICAgICAgIHRleHR1cmVCdWZmZXI6IHRleHR1cmVCdWZmZXIsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVOZXdUZXh0dXJlKHBpeGVsczogVGV4SW1hZ2VTb3VyY2UsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIGNyZWF0ZVRleHR1cmUodGhpcy5yZW5kZXJpbmdDb250ZXh0LCBwaXhlbHMsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGNyZWF0ZU5ld1RleHR1cmVGcm9tRmlsZShmaWxlTmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBhd2FpdCBsb2FkVGV4dHVyZUZpbGUoZmlsZU5hbWUpO1xyXG4gICAgICAgIHJldHVybiBjcmVhdGVUZXh0dXJlKFxyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmluZ0NvbnRleHQsXHJcbiAgICAgICAgICAgIGltYWdlLFxyXG4gICAgICAgICAgICBpbWFnZS53aWR0aCxcclxuICAgICAgICAgICAgaW1hZ2UuaGVpZ2h0LFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkT2JqZWN0KFxyXG4gICAgICAgIG5hbWU6IHN0cmluZyxcclxuICAgICAgICB2YW86IFZhb0luZm8sXHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgIHNpemU6IG51bWJlcjtcclxuICAgICAgICAgICAgY29vcmRzOiBDb29yZHM7XHJcbiAgICAgICAgICAgIHRleHR1cmVDb29yZHM6IG51bWJlcltdO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGV4dHVyZTogV2ViR0xUZXh0dXJlLFxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5vYmplY3RzLnNldChuYW1lLCB7XHJcbiAgICAgICAgICAgIHZhbzogdmFvLFxyXG4gICAgICAgICAgICBzaXplOiBwYXJhbXMuc2l6ZSxcclxuICAgICAgICAgICAgY29vcmRzOiBwYXJhbXMuY29vcmRzLFxyXG4gICAgICAgICAgICB0ZXh0dXJlOiB0ZXh0dXJlLFxyXG4gICAgICAgICAgICB0ZXh0dXJlQ29vcmRzOiBwYXJhbXMudGV4dHVyZUNvb3JkcyxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVPYmplY3QoXHJcbiAgICAgICAgbmFtZTogc3RyaW5nLFxyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICBzaXplPzogbnVtYmVyO1xyXG4gICAgICAgICAgICBjb29yZHM/OiBDb29yZHM7XHJcbiAgICAgICAgICAgIHRleHR1cmVDb29yZHM/OiBudW1iZXJbXTtcclxuICAgICAgICB9LFxyXG4gICAgKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm9iamVjdHMuaGFzKG5hbWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMub2JqZWN0cy5nZXQobmFtZSkuY29vcmRzID1cclxuICAgICAgICAgICAgcGFyYW1zLmNvb3JkcyA/PyB0aGlzLm9iamVjdHMuZ2V0KG5hbWUpLmNvb3JkcztcclxuXHJcbiAgICAgICAgdGhpcy5vYmplY3RzLmdldChuYW1lKS5zaXplID1cclxuICAgICAgICAgICAgcGFyYW1zLnNpemUgPz8gdGhpcy5vYmplY3RzLmdldChuYW1lKS5zaXplO1xyXG5cclxuICAgICAgICB0aGlzLm9iamVjdHMuZ2V0KG5hbWUpLnRleHR1cmVDb29yZHMgPVxyXG4gICAgICAgICAgICBwYXJhbXMudGV4dHVyZUNvb3JkcyA/PyB0aGlzLm9iamVjdHMuZ2V0KG5hbWUpLnRleHR1cmVDb29yZHM7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICB0aGlzLmNsZWFyQ29sb3IoKTtcclxuICAgICAgICB0aGlzLmNsZWFyQnVmZmVycygpO1xyXG4gICAgICAgIGZ1bGxDYW52YXNWaWV3cG9ydCh0aGlzLnJlbmRlcmluZ0NvbnRleHQsIHRoaXMuaHRtbEVsZW1lbnQpO1xyXG5cclxuICAgICAgICB0aGlzLnJlbmRlcmluZ0NvbnRleHQudXNlUHJvZ3JhbSh0aGlzLnByb2dyYW0pO1xyXG5cclxuICAgICAgICB0aGlzLnJlbmRlcmluZ0NvbnRleHQudW5pZm9ybTJmKFxyXG4gICAgICAgICAgICB0aGlzLmNhbnZhc1NpemVVbmlmb3JtLFxyXG4gICAgICAgICAgICB0aGlzLmh0bWxFbGVtZW50LndpZHRoLFxyXG4gICAgICAgICAgICB0aGlzLmh0bWxFbGVtZW50LmhlaWdodCxcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyBSZW5kZXIgYWxsIG9iamVjdHNcclxuICAgICAgICB0aGlzLm9iamVjdHMuZm9yRWFjaCgoaW5mbykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmluZ0NvbnRleHQudW5pZm9ybTFmKHRoaXMuc2l6ZVVuaWZvcm0sIGluZm8uc2l6ZSk7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyaW5nQ29udGV4dC51bmlmb3JtMmYoXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvb3Jkc1VuaWZvcm0sXHJcbiAgICAgICAgICAgICAgICBpbmZvLmNvb3Jkcy54LFxyXG4gICAgICAgICAgICAgICAgaW5mby5jb29yZHMueSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJpbmdDb250ZXh0LmJpbmRWZXJ0ZXhBcnJheShpbmZvLnZhby52YW8pO1xyXG5cclxuICAgICAgICAgICAgaW5mby52YW8udGV4dHVyZURhdGEuc2V0KGluZm8udGV4dHVyZUNvb3Jkcyk7XHJcbiAgICAgICAgICAgIGJ1ZmZlclN0YXRpY0RhdGEoXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmluZ0NvbnRleHQsXHJcbiAgICAgICAgICAgICAgICBpbmZvLnZhby50ZXh0dXJlQnVmZmVyLFxyXG4gICAgICAgICAgICAgICAgaW5mby52YW8udGV4dHVyZURhdGEsXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmluZ0NvbnRleHQuYmluZFRleHR1cmUoXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmluZ0NvbnRleHQuVEVYVFVSRV8yRCxcclxuICAgICAgICAgICAgICAgIGluZm8udGV4dHVyZSxcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyaW5nQ29udGV4dC5kcmF3QXJyYXlzKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJpbmdDb250ZXh0LlRSSUFOR0xFUyxcclxuICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICBpbmZvLnZhby50b3RhbFZlcnRpY2VzLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyQ29sb3IoY29sb3I/OiBDb2xvcikge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNsZWFyQ29sb3IgIT09IGNvbG9yICYmIGNvbG9yICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jbGVhckNvbG9yID0gY29sb3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjbGVhckNvbG9yKHRoaXMucmVuZGVyaW5nQ29udGV4dCwgY29sb3IgPz8gdGhpcy5wcm9wcy5jbGVhckNvbG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhckJ1ZmZlcnMoKSB7XHJcbiAgICAgICAgY2xlYXJCdWZmZXJzKHRoaXMucmVuZGVyaW5nQ29udGV4dCk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdlblJhbmRvbUludChtYXg6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heCk7XHJcbn1cclxuIiwiZXhwb3J0IHsgZ2V0R2FtZUZpZWxkQ2FudmFzIH0gZnJvbSAnLi91aSc7XHJcbiIsImltcG9ydCB7IGdlblJhbmRvbUludCB9IGZyb20gJ0Avc2hhcmVkL2xpYi9yYW5kb20nO1xyXG5pbXBvcnQgeyBUaWxlLCBUaWxlVHlwZSB9IGZyb20gJy4uL3VpL3RpbGUnO1xyXG5cclxuZXhwb3J0IHR5cGUgRmllbGRUaWxlSW5mbyA9IHtcclxuICAgIHR5cGU6IFRpbGVUeXBlO1xyXG4gICAgYm9tYnNBcm91bmQ/OiBudW1iZXI7XHJcbn07XHJcblxyXG4vLyBHZW5lcmF0ZXMgZmllbGRcclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlRmllbGQoXHJcbiAgICB3aWR0aFRpbGVzOiBudW1iZXIsXHJcbiAgICBoZWlnaHRUaWxlczogbnVtYmVyLFxyXG4gICAgYm9tYnNUb3RhbDogbnVtYmVyLFxyXG4gICAgaW5pdGlhbFg/OiBudW1iZXIsXHJcbiAgICBpbml0aWFsWT86IG51bWJlcixcclxuKSB7XHJcbiAgICBjb25zdCBmaWVsZCA9IG5ldyBNYXA8bnVtYmVyLCBNYXA8bnVtYmVyLCBGaWVsZFRpbGVJbmZvPj4oKTtcclxuICAgIGNvbnN0IGJvbWJzOiB7IGNvbHVtbjogbnVtYmVyOyByb3c6IG51bWJlciB9W10gPSBbXTtcclxuICAgIGxldCB4ID0gMDtcclxuICAgIGxldCB5ID0gMDtcclxuICAgIGxldCB0b3RhbEdlbmVyYXRlZCA9IDA7XHJcblxyXG4gICAgLy8gVE9ETyBpZiB0b3RhbCBib21icyA+PSBtYXggc2l6ZSA9PiBmaWxsIHdpdGggYm9tYnNcclxuXHJcbiAgICAvLyBUT0RPIGlmIHRvdGFsIGJvbWJzID4gZW1wdHkgc3BhY2UgPT4gaXRlcmF0ZSB0cm91Z2ggZW1wdHkgdGlsZXNcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvbWJzVG90YWw7IGkrKykge1xyXG4gICAgICAgIHdoaWxlIChcclxuICAgICAgICAgICAgdG90YWxHZW5lcmF0ZWQgIT09IGkgKyAxICYmXHJcbiAgICAgICAgICAgIHRvdGFsR2VuZXJhdGVkICE9PSB3aWR0aFRpbGVzICogaGVpZ2h0VGlsZXNcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgeCA9IGdlblJhbmRvbUludCh3aWR0aFRpbGVzKTtcclxuICAgICAgICAgICAgeSA9IGdlblJhbmRvbUludChoZWlnaHRUaWxlcyk7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpbml0aWFsWCA9PT0geCwgaW5pdGlhbFkgPT09IHkpO1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBpbml0aWFsWCAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICAgICAgICBpbml0aWFsWSAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICAgICAgICB4ID09PSBpbml0aWFsWCAmJlxyXG4gICAgICAgICAgICAgICAgeSA9PT0gaW5pdGlhbFlcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBuZXdcclxuICAgICAgICAgICAgaWYgKCFmaWVsZC5oYXMoeCkpIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkLnNldCh4LCBuZXcgTWFwKCkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBuZXcgeVxyXG4gICAgICAgICAgICBpZiAoIWZpZWxkLmdldCh4KS5oYXMoeSkpIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkLmdldCh4KS5zZXQoeSwgeyB0eXBlOiAnYm9tYicgfSk7XHJcbiAgICAgICAgICAgICAgICBib21icy5wdXNoKHsgY29sdW1uOiB4LCByb3c6IHkgfSk7XHJcbiAgICAgICAgICAgICAgICAvLyBpbmNyZWFzZSBib21icyBhcm91bmRcclxuICAgICAgICAgICAgICAgIGZvciAoXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGogPSB4IC0gMSA+PSAwID8geCAtIDEgOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGogPD0gKHggKyAxIDw9IHdpZHRoVGlsZXMgPyB4ICsgMSA6IHdpZHRoVGlsZXMgLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICBqKytcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBrID0geSAtIDEgPj0gMCA/IHkgLSAxIDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgayA8PSAoaiArIDEgPD0gaGVpZ2h0VGlsZXMgPyB5ICsgMSA6IGhlaWdodFRpbGVzIC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGsrK1xyXG4gICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaiA9PT0geCAmJiBrID09PSB5KSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZmllbGQuaGFzKGopKSBmaWVsZC5zZXQoaiwgbmV3IE1hcCgpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZmllbGQuZ2V0KGopLmhhcyhrKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0KGopXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNldChrLCB7IHR5cGU6ICdkaWdpdCcsIGJvbWJzQXJvdW5kOiAwIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGQuZ2V0KGopLmdldChrKS50eXBlID09PSAnZW1wdHknKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXQoailcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2V0KGssIHsgdHlwZTogJ2RpZ2l0JywgYm9tYnNBcm91bmQ6IDAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZC5nZXQoaikuZ2V0KGspLnR5cGUgPT09ICdkaWdpdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLmdldChqKS5nZXQoaykuYm9tYnNBcm91bmQrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0b3RhbEdlbmVyYXRlZCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IGZpZWxkOiBmaWVsZCwgYm9tYnM6IGJvbWJzIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGlja2VkQ29vcmRzKFxyXG4gICAgZTogTW91c2VFdmVudCxcclxuICAgIGhlaWdodDogbnVtYmVyLFxyXG4gICAgdGlsZVNpemU6IG51bWJlcixcclxuKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGk6IE1hdGguZmxvb3IoZS5vZmZzZXRYIC8gdGlsZVNpemUpLFxyXG4gICAgICAgIGo6IE1hdGguZmxvb3IoKGhlaWdodCAtIGUub2Zmc2V0WSkgLyB0aWxlU2l6ZSksXHJcbiAgICB9O1xyXG59XHJcblxyXG4vLyBPcGVucyBhbGwgZmllbGQgdGlsZXNcclxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5GdWxsRmllbGQodGlsZXM6IFRpbGVbXVtdKSB7XHJcbiAgICB0aWxlcy5mb3JFYWNoKChjb2x1bW4pID0+IHtcclxuICAgICAgICBjb2x1bW4uZm9yRWFjaCgodGlsZSkgPT4ge1xyXG4gICAgICAgICAgICB0aWxlLm9wZW4oKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyBPcGVucyBjdXJyZW50IGZpZWxkIGFuZCBhbGwgZW1wdHkgZmllbGRzIG5lYXIgaXRcclxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5BZGphY2VudEZpZWxkcyhcclxuICAgIHRpbGVzOiBUaWxlW11bXSxcclxuICAgIGNvbHVtbjogbnVtYmVyLFxyXG4gICAgcm93OiBudW1iZXIsXHJcbikge1xyXG4gICAgbGV0IGN1cnJlbnRUaWxlSW5mbyA9IHtcclxuICAgICAgICB0aWxlOiB0aWxlc1tjb2x1bW5dW3Jvd10sXHJcbiAgICAgICAgY29sdW1uOiBjb2x1bW4sXHJcbiAgICAgICAgcm93OiByb3csXHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChjdXJyZW50VGlsZUluZm8udGlsZS50aWxlU3RhdGUgIT09ICdjbG9zZWQnKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb3BlbmVkVHlwZSA9IGN1cnJlbnRUaWxlSW5mby50aWxlLnRpbGVUeXBlO1xyXG5cclxuICAgIC8vIFRPRE8gc3RhY2sgdG8gcXVldWVcclxuICAgIGNvbnN0IG5leHRUaWxlc1N0YWNrOiB7IHRpbGU6IFRpbGU7IGNvbHVtbjogbnVtYmVyOyByb3c6IG51bWJlciB9W10gPSBbXTtcclxuICAgIGNvbnN0IHdpZHRoVGlsZXMgPSB0aWxlcy5sZW5ndGg7XHJcbiAgICBjb25zdCBoZWlnaHRUaWxlcyA9IHRpbGVzWzBdLmxlbmd0aDtcclxuICAgIGNvbnN0IHZpc2l0ZWRUaWxlcyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xyXG4gICAgbGV0IHRvdGFsT3BlbmVkID0gMDtcclxuXHJcbiAgICBkbyB7XHJcbiAgICAgICAgaWYgKCF2aXNpdGVkVGlsZXMuaGFzKGN1cnJlbnRUaWxlSW5mby50aWxlLmlkKSkge1xyXG4gICAgICAgICAgICB2aXNpdGVkVGlsZXMuYWRkKGN1cnJlbnRUaWxlSW5mby50aWxlLmlkKTtcclxuICAgICAgICAgICAgY3VycmVudFRpbGVJbmZvLnRpbGUub3BlbigpO1xyXG4gICAgICAgICAgICB0b3RhbE9wZW5lZCsrO1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudFRpbGVJbmZvLnRpbGUudGlsZVR5cGUgPT09ICdlbXB0eScpIHtcclxuICAgICAgICAgICAgICAgIGZvciAoXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGogPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50VGlsZUluZm8uY29sdW1uIC0gMSA+PSAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGN1cnJlbnRUaWxlSW5mby5jb2x1bW4gLSAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgaiA8PVxyXG4gICAgICAgICAgICAgICAgICAgIChjdXJyZW50VGlsZUluZm8uY29sdW1uICsgMSA8IHdpZHRoVGlsZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBjdXJyZW50VGlsZUluZm8uY29sdW1uICsgMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHdpZHRoVGlsZXMgLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICBqKytcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBrID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUaWxlSW5mby5yb3cgLSAxID49IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGN1cnJlbnRUaWxlSW5mby5yb3cgLSAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrIDw9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjdXJyZW50VGlsZUluZm8ucm93ICsgMSA8IGhlaWdodFRpbGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGN1cnJlbnRUaWxlSW5mby5yb3cgKyAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGhlaWdodFRpbGVzIC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGsrK1xyXG4gICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aWxlID0gdGlsZXNbal1ba107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICF2aXNpdGVkVGlsZXMuaGFzKHRpbGUuaWQpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWxlLnRpbGVTdGF0ZSA9PT0gJ2Nsb3NlZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0VGlsZXNTdGFjay5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWxlOiB0aWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbjogaixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IGssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjdXJyZW50VGlsZUluZm8gPSBuZXh0VGlsZXNTdGFjay5wb3AoKTtcclxuICAgIH0gd2hpbGUgKGN1cnJlbnRUaWxlSW5mbyAhPT0gdW5kZWZpbmVkKTtcclxuXHJcbiAgICByZXR1cm4geyBvcGVuZWRUeXBlOiBvcGVuZWRUeXBlLCB0b3RhbE9wZW5lZDogdG90YWxPcGVuZWQgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5Cb21icyhcclxuICAgIHRpbGVzOiBUaWxlW11bXSxcclxuICAgIGJvbWJzOiB7IGNvbHVtbjogbnVtYmVyOyByb3c6IG51bWJlciB9W10sXHJcbikge1xyXG4gICAgYm9tYnMuZm9yRWFjaCgoYm9tYikgPT4ge1xyXG4gICAgICAgIHRpbGVzW2JvbWIuY29sdW1uXVtib21iLnJvd10ub3BlbigpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkcmF3RW1wdHlGaWVsZChcclxuICAgIHdpZHRoOiBudW1iZXIsXHJcbiAgICBoZWlnaHQ6IG51bWJlcixcclxuICAgIHRpbGVTaXplOiBudW1iZXIsXHJcbiAgICBhZGRFbXB0eVRpbGU6ICh4OiBudW1iZXIsIHk6IG51bWJlciwgc2l6ZTogbnVtYmVyKSA9PiBUaWxlLFxyXG4pIHtcclxuICAgIGNvbnN0IHRpbGVzOiBUaWxlW11bXSA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3aWR0aDsgaSsrKSB7XHJcbiAgICAgICAgdGlsZXMucHVzaChbXSk7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBoZWlnaHQ7IGorKykge1xyXG4gICAgICAgICAgICB0aWxlc1tpXS5wdXNoKGFkZEVtcHR5VGlsZShpICogdGlsZVNpemUsIGogKiB0aWxlU2l6ZSwgdGlsZVNpemUpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGlsZXM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVGaWVsZChcclxuICAgIGZpZWxkOiBNYXA8bnVtYmVyLCBNYXA8bnVtYmVyLCBGaWVsZFRpbGVJbmZvPj4sXHJcbiAgICB3aWR0aDogbnVtYmVyLFxyXG4gICAgaGVpZ2h0OiBudW1iZXIsXHJcbiAgICB0aWxlczogVGlsZVtdW10sXHJcbikge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3aWR0aDsgaSsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBoZWlnaHQ7IGorKykge1xyXG4gICAgICAgICAgICBsZXQgbmV4dFRpbGU6IEZpZWxkVGlsZUluZm8gPSB7IHR5cGU6ICdlbXB0eScgfTtcclxuICAgICAgICAgICAgaWYgKGZpZWxkLmdldChpKT8uaGFzKGopKSB7XHJcbiAgICAgICAgICAgICAgICBuZXh0VGlsZSA9IGZpZWxkLmdldChpKS5nZXQoaik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAobmV4dFRpbGUudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnYm9tYic6XHJcbiAgICAgICAgICAgICAgICAgICAgdGlsZXNbaV1bal0uc2V0VHlwZUJvbWIoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2RpZ2l0JzpcclxuICAgICAgICAgICAgICAgICAgICB0aWxlc1tpXVtqXS5zZXRUeXBlRGlnaXQobmV4dFRpbGUuYm9tYnNBcm91bmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENhbnZhcyB9IGZyb20gJ0Avc2hhcmVkL2NhbnZhcyc7XHJcbmltcG9ydCB7IFRpbGUsIGdldE5ld1RpbGUgfSBmcm9tICcuL3RpbGUnO1xyXG5pbXBvcnQge1xyXG4gICAgZHJhd0VtcHR5RmllbGQsXHJcbiAgICBnZW5lcmF0ZUZpZWxkLFxyXG4gICAgZ2V0Q2xpY2tlZENvb3JkcyxcclxuICAgIG9wZW5BZGphY2VudEZpZWxkcyxcclxuICAgIG9wZW5Cb21icyxcclxuICAgIG9wZW5GdWxsRmllbGQsXHJcbiAgICB1cGRhdGVGaWVsZCxcclxufSBmcm9tICcuLi9saWInO1xyXG5pbXBvcnQgeyBHYW1lU3RhdGUgfSBmcm9tICcuL2luZGV4LnR5cGVzJztcclxuXHJcbmNvbnN0IENBTlZBU19XSURUSCA9IDUwMDtcclxuY29uc3QgQ0FOVkFTX0hFSUdIVCA9IDUwMDtcclxuXHJcbmZ1bmN0aW9uIHByb2Nlc3NDbGljayhcclxuICAgIHRpbGVzOiBUaWxlW11bXSxcclxuICAgIHRpbGVTaXplOiBudW1iZXIsXHJcbiAgICBoZWlnaHQ6IG51bWJlcixcclxuICAgIGU6IE1vdXNlRXZlbnQsXHJcbikge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IHsgaSwgaiB9ID0gZ2V0Q2xpY2tlZENvb3JkcyhlLCBoZWlnaHQsIHRpbGVTaXplKTtcclxuXHJcbiAgICBpZiAodGlsZXNbaV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRpbGUgPSB0aWxlc1tpXVtqXTtcclxuICAgIGlmICh0aWxlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBvcGVuQWRqYWNlbnRGaWVsZHModGlsZXMsIGksIGopO1xyXG4gICAgICAgIGlmIChyZXN1bHQ/Lm9wZW5lZFR5cGUgPT09ICdib21iJykge1xyXG4gICAgICAgICAgICB0aWxlLnNldFR5cGVFeHBsb2RlZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcm9jZXNzUmlnaHRDbGljayhcclxuICAgIHRpbGVzOiBUaWxlW11bXSxcclxuICAgIHRpbGVTaXplOiBudW1iZXIsXHJcbiAgICBoZWlnaHQ6IG51bWJlcixcclxuICAgIGU6IE1vdXNlRXZlbnQsXHJcbikge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IHsgaSwgaiB9ID0gZ2V0Q2xpY2tlZENvb3JkcyhlLCBoZWlnaHQsIHRpbGVTaXplKTtcclxuXHJcbiAgICBpZiAodGlsZXNbaV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRpbGUgPSB0aWxlc1tpXVtqXTtcclxuICAgIGlmICh0aWxlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBjb25zdCB3aXRoRmxhZyA9IHRpbGUudGlsZVN0YXRlID09PSAnZmxhZyc7XHJcbiAgICAgICAgaWYgKHdpdGhGbGFnKSB7XHJcbiAgICAgICAgICAgIHRpbGUuY2xvc2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghd2l0aEZsYWcpIHtcclxuICAgICAgICAgICAgdGlsZS5wdXRGbGFnKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4geyB0eXBlOiB0aWxlLnRpbGVUeXBlLCBzdGF0ZTogdGlsZS50aWxlU3RhdGUgfTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcblxyXG4vLyBHZXQgY2FudmFzIHdpdGggZ2FtZVxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0R2FtZUZpZWxkQ2FudmFzKHBhcmVudDogRWxlbWVudCwgY2xhc3NOYW1lOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMocGFyZW50LCB7XHJcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXHJcbiAgICAgICAgd2lkdGg6IENBTlZBU19XSURUSCxcclxuICAgICAgICBoZWlnaHQ6IENBTlZBU19IRUlHSFQsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBnYW1lU3RhdGU6IEdhbWVTdGF0ZSA9IHtcclxuICAgICAgICBzdGF0dXM6ICdtZW51JyxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdGlsZSA9IGF3YWl0IGdldE5ld1RpbGUoY2FudmFzKTtcclxuXHJcbiAgICBjb25zdCB3aWR0aCA9IDEwLFxyXG4gICAgICAgIGhlaWdodCA9IDEwO1xyXG5cclxuICAgIGNvbnN0IHRpbGVTaXplID0gMzA7XHJcbiAgICBjb25zdCB0b3RhbEJvbWJzID0gMTA7XHJcblxyXG4gICAgY29uc3QgdGlsZXM6IFRpbGVbXVtdID0gZHJhd0VtcHR5RmllbGQoXHJcbiAgICAgICAgd2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0LFxyXG4gICAgICAgIHRpbGVTaXplLFxyXG4gICAgICAgIHRpbGUuYWRkTmV3RW1wdHlUaWxlLFxyXG4gICAgKTtcclxuXHJcbiAgICBjYW52YXMuaHRtbEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChnYW1lU3RhdGUuc3RhdHVzID09PSAnbWVudScpIHtcclxuICAgICAgICAgICAgY29uc3QgY2xpY2tDb29yZHMgPSBnZXRDbGlja2VkQ29vcmRzKGUsIENBTlZBU19IRUlHSFQsIHRpbGVTaXplKTtcclxuICAgICAgICAgICAgY29uc3QgeyBmaWVsZCwgYm9tYnMgfSA9IGdlbmVyYXRlRmllbGQoXHJcbiAgICAgICAgICAgICAgICB3aWR0aCxcclxuICAgICAgICAgICAgICAgIGhlaWdodCxcclxuICAgICAgICAgICAgICAgIDEwLFxyXG4gICAgICAgICAgICAgICAgY2xpY2tDb29yZHMuaSxcclxuICAgICAgICAgICAgICAgIGNsaWNrQ29vcmRzLmosXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHVwZGF0ZUZpZWxkKGZpZWxkLCB3aWR0aCwgaGVpZ2h0LCB0aWxlcyk7XHJcbiAgICAgICAgICAgIGdhbWVTdGF0ZS5ib21icyA9IGJvbWJzO1xyXG4gICAgICAgICAgICBnYW1lU3RhdGUuYm9tYnNMZWZ0ID0gdG90YWxCb21icztcclxuICAgICAgICAgICAgZ2FtZVN0YXRlLm5vQm9tYnNGaWVsZHNMZWZ0ID0gd2lkdGggKiBoZWlnaHQgLSB0b3RhbEJvbWJzO1xyXG4gICAgICAgICAgICBnYW1lU3RhdGUuc3RhdHVzID0gJ2dhbWUnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGdhbWVTdGF0ZS5zdGF0dXMgPT09ICdnYW1lJykge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBwcm9jZXNzQ2xpY2sodGlsZXMsIHRpbGVTaXplLCBDQU5WQVNfSEVJR0hULCBlKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzdWx0Py5vcGVuZWRUeXBlID09PSAnYm9tYicpIHtcclxuICAgICAgICAgICAgICAgIG9wZW5Cb21icyh0aWxlcywgZ2FtZVN0YXRlLmJvbWJzKTtcclxuICAgICAgICAgICAgICAgIGdhbWVTdGF0ZS5zdGF0dXMgPSAnZGVmZWF0JztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3VsdD8ub3BlbmVkVHlwZSAhPT0gJ2JvbWInKSB7XHJcbiAgICAgICAgICAgICAgICBnYW1lU3RhdGUubm9Cb21ic0ZpZWxkc0xlZnQgLT0gcmVzdWx0LnRvdGFsT3BlbmVkO1xyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVTdGF0ZS5ib21ic0xlZnQgPT09IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICBnYW1lU3RhdGUubm9Cb21ic0ZpZWxkc0xlZnQgPT09IDBcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVTdGF0ZS5zdGF0dXMgPSAndmljdG9yeSc7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3ZpY3RvcnkhJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGdhbWVTdGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY2FudmFzLmh0bWxFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgKGUpID0+IHtcclxuICAgICAgICBpZiAoZ2FtZVN0YXRlLnN0YXR1cyA9PT0gJ2dhbWUnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHByb2Nlc3NSaWdodENsaWNrKHRpbGVzLCB0aWxlU2l6ZSwgQ0FOVkFTX0hFSUdIVCwgZSk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gSWYgcGxheWVyIHB1dCBmbGFnIG9uIGJvbWJcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGF0ZSA9PT0gJ2ZsYWcnICYmIHJlc3VsdC50eXBlID09PSAnYm9tYicpIHtcclxuICAgICAgICAgICAgICAgIGdhbWVTdGF0ZS5ib21ic0xlZnQtLTtcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICBnYW1lU3RhdGUuYm9tYnNMZWZ0ID09PSAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZVN0YXRlLm5vQm9tYnNGaWVsZHNMZWZ0ID09PSAwXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBnYW1lU3RhdGUuc3RhdHVzID0gJ3ZpY3RvcnknO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd2aWN0b3J5IScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBJZiBwbGF5ZXIgcmVtb3ZlZCBmbGFnIGZyb20gYm9tYlxyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnN0YXRlID09PSAnY2xvc2VkJyAmJiByZXN1bHQudHlwZSA9PT0gJ2JvbWInKSB7XHJcbiAgICAgICAgICAgICAgICBnYW1lU3RhdGUuYm9tYnNMZWZ0Kys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coZ2FtZVN0YXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBkcmF3RmllbGQgPSAoKSA9PiB7XHJcbiAgICAgICAgY2FudmFzLmRyYXcoKTtcclxuXHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgICAgICAgZHJhd0ZpZWxkKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY2FudmFzOiBjYW52YXMsXHJcbiAgICAgICAgZHJhd0ZpZWxkOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkcmF3RmllbGQoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvcGVuRmllbGQ6ICgpID0+IHtcclxuICAgICAgICAgICAgb3BlbkZ1bGxGaWVsZCh0aWxlcyk7XHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbn1cclxuIiwiZXhwb3J0IHsgZ2V0TmV3VGlsZSB9IGZyb20gJy4vbGliJztcclxuZXhwb3J0IHsgVGlsZSB9IGZyb20gJy4vdWknO1xyXG5leHBvcnQgdHlwZSB7IFRpbGVTdGF0ZSwgVGlsZVR5cGUgfSBmcm9tICcuL3VpJztcclxuIiwiaW1wb3J0IHsgQ2FudmFzLCBWYW9JbmZvIH0gZnJvbSAnQC9zaGFyZWQvY2FudmFzJztcclxuaW1wb3J0IHsgVGlsZVR5cGUgfSBmcm9tICcuLi91aS9pbmRleC50eXBlcyc7XHJcbmltcG9ydCB7IFRpbGUgfSBmcm9tICcuLi91aSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVUaWxlSWQoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgIHJldHVybiBgdGlsZVske3h9OiR7eX1dYDtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE5ld1RpbGUoY2FudmFzOiBDYW52YXMpIHtcclxuICAgIGxldCB2YW9JbmZvOiBWYW9JbmZvID0gbnVsbDtcclxuXHJcbiAgICBjb25zdCB0ZXh0dXJlID0gYXdhaXQgY2FudmFzLmNyZWF0ZU5ld1RleHR1cmVGcm9tRmlsZShcclxuICAgICAgICAnLi9wdWJsaWMvdGlsZXRleHR1cmVzLnBuZycsXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGNyZWF0ZVZhbyA9ICgpID0+IHtcclxuICAgICAgICB2YW9JbmZvID0gY2FudmFzLmNyZWF0ZU5ld1Zhbyg2KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYWRkTmV3VGlsZSA9IChcclxuICAgICAgICB0eXBlOiBUaWxlVHlwZSxcclxuICAgICAgICB4OiBudW1iZXIsXHJcbiAgICAgICAgeTogbnVtYmVyLFxyXG4gICAgICAgIHNpemU6IG51bWJlcixcclxuICAgICAgICBib21ic0Fyb3VuZD86IG51bWJlcixcclxuICAgICkgPT4ge1xyXG4gICAgICAgIGlmICh2YW9JbmZvID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNyZWF0ZVZhbygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBUaWxlKFxyXG4gICAgICAgICAgICBjYW52YXMsXHJcbiAgICAgICAgICAgIHZhb0luZm8sXHJcbiAgICAgICAgICAgIHgsXHJcbiAgICAgICAgICAgIHksXHJcbiAgICAgICAgICAgIHNpemUsXHJcbiAgICAgICAgICAgICdjbG9zZWQnLFxyXG4gICAgICAgICAgICB0eXBlLFxyXG4gICAgICAgICAgICB0ZXh0dXJlLFxyXG4gICAgICAgICAgICBib21ic0Fyb3VuZCxcclxuICAgICAgICApO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGFkZE5ld0VtcHR5VGlsZTogKHg6IG51bWJlciwgeTogbnVtYmVyLCBzaXplOiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGFkZE5ld1RpbGUoJ2VtcHR5JywgeCwgeSwgc2l6ZSk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgYWRkTmV3Qm9tYlRpbGU6ICh4OiBudW1iZXIsIHk6IG51bWJlciwgc2l6ZTogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBhZGROZXdUaWxlKCdib21iJywgeCwgeSwgc2l6ZSk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgYWRkTmV3RGlnaXRUaWxlOiAoXHJcbiAgICAgICAgICAgIHg6IG51bWJlcixcclxuICAgICAgICAgICAgeTogbnVtYmVyLFxyXG4gICAgICAgICAgICBzaXplOiBudW1iZXIsXHJcbiAgICAgICAgICAgIGJvbWJzQXJvdW5kOiBudW1iZXIsXHJcbiAgICAgICAgKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBhZGROZXdUaWxlKCdkaWdpdCcsIHgsIHksIHNpemUsIGJvbWJzQXJvdW5kKTtcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxufVxyXG4iLCJpbXBvcnQgJy4vdGlsZXRleHR1cmVzLnBuZyc7XHJcblxyXG5leHBvcnQgY29uc3QgVElMRV9URVhUVVJFX0NPT1JEUyA9IHtcclxuICAgIEVNUFRZOiBbMCwgMSwgMCwgMC43NSwgMC4yNSwgMC43NSwgMC4yNSwgMC43NSwgMC4yNSwgMSwgMCwgMV0sXHJcbiAgICBPTkU6IFswLjI1LCAxLCAwLjI1LCAwLjc1LCAwLjUsIDAuNzUsIDAuNSwgMC43NSwgMC41LCAxLCAwLjI1LCAxXSxcclxuICAgIFRXTzogWzAuNSwgMSwgMC41LCAwLjc1LCAwLjc1LCAwLjc1LCAwLjc1LCAwLjc1LCAwLjc1LCAxLCAwLjUsIDFdLFxyXG4gICAgVEhSRUU6IFswLjc1LCAxLCAwLjc1LCAwLjc1LCAxLCAwLjc1LCAxLCAwLjc1LCAxLCAxLCAwLjc1LCAxXSxcclxuICAgIEZPVVI6IFswLCAwLjc1LCAwLCAwLjUsIDAuMjUsIDAuNSwgMC4yNSwgMC41LCAwLjI1LCAwLjc1LCAwLCAwLjc1XSxcclxuICAgIEZJVkU6IFswLjI1LCAwLjc1LCAwLjI1LCAwLjUsIDAuNSwgMC41LCAwLjUsIDAuNSwgMC41LCAwLjc1LCAwLjI1LCAwLjc1XSxcclxuICAgIFNJWDogWzAuNSwgMC43NSwgMC41LCAwLjUsIDAuNzUsIDAuNSwgMC43NSwgMC41LCAwLjc1LCAwLjc1LCAwLjUsIDAuNzVdLFxyXG4gICAgU0VWRU46IFswLjc1LCAwLjc1LCAwLjc1LCAwLjUsIDEsIDAuNSwgMSwgMC41LCAxLCAwLjc1LCAwLjc1LCAwLjc1XSxcclxuICAgIEVJR0hUOiBbMCwgMC41LCAwLCAwLjI1LCAwLjI1LCAwLjI1LCAwLjI1LCAwLjI1LCAwLjI1LCAwLjUsIDAsIDAuNV0sXHJcbiAgICBDTE9TRUQ6IFswLjI1LCAwLjUsIDAuMjUsIDAuMjUsIDAuNSwgMC4yNSwgMC41LCAwLjI1LCAwLjUsIDAuNSwgMC4yNSwgMC41XSxcclxuICAgIEZMQUc6IFswLjUsIDAuNSwgMC41LCAwLjI1LCAwLjc1LCAwLjI1LCAwLjc1LCAwLjI1LCAwLjc1LCAwLjUsIDAuNSwgMC41XSxcclxuICAgIEZMQUdfV1JPTkc6IFswLjc1LCAwLjUsIDAuNzUsIDAuMjUsIDEsIDAuMjUsIDEsIDAuMjUsIDEsIDAuNSwgMC43NSwgMC41XSxcclxuICAgIEJPTUI6IFswLCAwLjI1LCAwLCAwLCAwLjI1LCAwLCAwLjI1LCAwLCAwLjI1LCAwLjI1LCAwLCAwLjI1XSxcclxuICAgIEJPTUJfV1JPTkc6IFswLjI1LCAwLjI1LCAwLjI1LCAwLCAwLjUsIDAsIDAuNSwgMCwgMC41LCAwLjI1LCAwLjI1LCAwLjI1XSxcclxufTtcclxuIiwiaW1wb3J0IHsgQ2FudmFzLCBWYW9JbmZvIH0gZnJvbSAnQC9zaGFyZWQvY2FudmFzJztcclxuaW1wb3J0IHsgVGlsZVN0YXRlLCBUaWxlVHlwZSB9IGZyb20gJy4vaW5kZXgudHlwZXMnO1xyXG5pbXBvcnQgeyBnZW5lcmF0ZVRpbGVJZCB9IGZyb20gJy4uL2xpYic7XHJcbmltcG9ydCB7IFRJTEVfVEVYVFVSRV9DT09SRFMgfSBmcm9tICcuLi90ZXh0dXJlcyc7XHJcblxyXG5leHBvcnQgdHlwZSB7IFRpbGVTdGF0ZSwgVGlsZVR5cGUgfSBmcm9tICcuL2luZGV4LnR5cGVzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBUaWxlIHtcclxuICAgIHByb3RlY3RlZCBzdGF0ZTogVGlsZVN0YXRlO1xyXG4gICAgcHJvdGVjdGVkIHR5cGU6IFRpbGVUeXBlO1xyXG4gICAgcHJvdGVjdGVkIGNvb3Jkczoge1xyXG4gICAgICAgIHg6IG51bWJlcjtcclxuICAgICAgICB5OiBudW1iZXI7XHJcbiAgICB9O1xyXG4gICAgcHJvdGVjdGVkIHNpemU6IG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBjb29yZHNJZDogc3RyaW5nO1xyXG4gICAgcHJvdGVjdGVkIGNhbnZhczogQ2FudmFzO1xyXG4gICAgcHJvdGVjdGVkIHZhb0luZm86IFZhb0luZm87XHJcbiAgICBwcm90ZWN0ZWQgdGV4dHVyZTogV2ViR0xUZXh0dXJlO1xyXG4gICAgcHJvdGVjdGVkIGJvbWJzQXJvdW5kPzogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIGNhbnZhczogQ2FudmFzLFxyXG4gICAgICAgIHZhb0luZm86IFZhb0luZm8sXHJcbiAgICAgICAgeDogbnVtYmVyLFxyXG4gICAgICAgIHk6IG51bWJlcixcclxuICAgICAgICBzaXplOiBudW1iZXIsXHJcbiAgICAgICAgc3RhdGU6IFRpbGVTdGF0ZSxcclxuICAgICAgICB0eXBlOiBUaWxlVHlwZSxcclxuICAgICAgICB0ZXh0dXJlOiBXZWJHTFRleHR1cmUsXHJcbiAgICAgICAgYm9tYnNBcm91bmQ/OiBudW1iZXIsXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLmNvb3JkcyA9IHtcclxuICAgICAgICAgICAgeDogeCxcclxuICAgICAgICAgICAgeTogeSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XHJcbiAgICAgICAgdGhpcy5jb29yZHNJZCA9IGdlbmVyYXRlVGlsZUlkKHgsIHkpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG4gICAgICAgIHRoaXMudmFvSW5mbyA9IHZhb0luZm87XHJcbiAgICAgICAgdGhpcy50ZXh0dXJlID0gdGV4dHVyZTtcclxuICAgICAgICB0aGlzLmJvbWJzQXJvdW5kID0gYm9tYnNBcm91bmQ7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJPbkNhbnZhcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCByZW5kZXJPbkNhbnZhcygpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcy5hZGRPYmplY3QoXHJcbiAgICAgICAgICAgIHRoaXMuY29vcmRzSWQsXHJcbiAgICAgICAgICAgIHRoaXMudmFvSW5mbyxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2l6ZTogdGhpcy5zaXplLFxyXG4gICAgICAgICAgICAgICAgY29vcmRzOiB0aGlzLmNvb3JkcyxcclxuICAgICAgICAgICAgICAgIHRleHR1cmVDb29yZHM6IFRJTEVfVEVYVFVSRV9DT09SRFMuQ0xPU0VELFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0aGlzLnRleHR1cmUsXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdGlsZUNvb3JkcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb29yZHM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvb3Jkc0lkO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB0aWxlVHlwZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50eXBlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB0aWxlU3RhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZVRleHR1cmVDb29yZHMoKSB7XHJcbiAgICAgICAgbGV0IG5ld1RleHR1cmVDb29yZHM6IG51bWJlcltdID0gbnVsbDtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gJ29wZW5lZCcpIHtcclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2V4cGxvZGVkJzpcclxuICAgICAgICAgICAgICAgICAgICBuZXdUZXh0dXJlQ29vcmRzID0gVElMRV9URVhUVVJFX0NPT1JEUy5CT01CX1dST05HO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnYm9tYic6XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3VGV4dHVyZUNvb3JkcyA9IFRJTEVfVEVYVFVSRV9DT09SRFMuQk9NQjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2RpZ2l0JzpcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuYm9tYnNBcm91bmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VGV4dHVyZUNvb3JkcyA9IFRJTEVfVEVYVFVSRV9DT09SRFMuT05FO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1RleHR1cmVDb29yZHMgPSBUSUxFX1RFWFRVUkVfQ09PUkRTLlRXTztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdUZXh0dXJlQ29vcmRzID0gVElMRV9URVhUVVJFX0NPT1JEUy5USFJFRTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdUZXh0dXJlQ29vcmRzID0gVElMRV9URVhUVVJFX0NPT1JEUy5GT1VSO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1RleHR1cmVDb29yZHMgPSBUSUxFX1RFWFRVUkVfQ09PUkRTLkZJVkU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VGV4dHVyZUNvb3JkcyA9IFRJTEVfVEVYVFVSRV9DT09SRFMuU0lYO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1RleHR1cmVDb29yZHMgPSBUSUxFX1RFWFRVUkVfQ09PUkRTLlNFVkVOO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgODpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1RleHR1cmVDb29yZHMgPSBUSUxFX1RFWFRVUkVfQ09PUkRTLkVJR0hUO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdUZXh0dXJlQ29vcmRzID0gVElMRV9URVhUVVJFX0NPT1JEUy5FTVBUWTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3VGV4dHVyZUNvb3JkcyA9IFRJTEVfVEVYVFVSRV9DT09SRFMuRU1QVFk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09PSAnY2xvc2VkJykge1xyXG4gICAgICAgICAgICBuZXdUZXh0dXJlQ29vcmRzID0gVElMRV9URVhUVVJFX0NPT1JEUy5DTE9TRUQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gJ2ZsYWcnKSB7XHJcbiAgICAgICAgICAgIG5ld1RleHR1cmVDb29yZHMgPSBUSUxFX1RFWFRVUkVfQ09PUkRTLkZMQUc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNhbnZhcy51cGRhdGVPYmplY3QodGhpcy5jb29yZHNJZCwge1xyXG4gICAgICAgICAgICB0ZXh0dXJlQ29vcmRzOiBuZXdUZXh0dXJlQ29vcmRzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBjaGFuZ2VTdGF0ZShuZXdTdGF0ZTogVGlsZVN0YXRlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IG5ld1N0YXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXdTdGF0ZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVRleHR1cmVDb29yZHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgY2hhbmdlVHlwZShuZXdUeXBlOiBUaWxlVHlwZSkge1xyXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT09IG5ld1R5cGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50eXBlID0gbmV3VHlwZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVRleHR1cmVDb29yZHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRUeXBlRXhwbG9kZWQoKSB7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VUeXBlKCdleHBsb2RlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFR5cGVCb21iKCkge1xyXG4gICAgICAgIHRoaXMuY2hhbmdlVHlwZSgnYm9tYicpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFR5cGVFbXB0eSgpIHtcclxuICAgICAgICB0aGlzLmNoYW5nZVR5cGUoJ2VtcHR5Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VHlwZURpZ2l0KGJvbWJzQXJvdW5kOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoYm9tYnNBcm91bmQgPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFR5cGVFbXB0eSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGJvbWJzQXJvdW5kID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmJvbWJzQXJvdW5kID0gYm9tYnNBcm91bmQgPD0gOCA/IGJvbWJzQXJvdW5kIDogODtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VUeXBlKCdkaWdpdCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdXRGbGFnKCkge1xyXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ2ZsYWcnKTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuKCkge1xyXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ29wZW5lZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKCkge1xyXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ2Nsb3NlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZSgpIHtcclxuICAgICAgICBjb25zdCBvcGVuZWQgPSB0aGlzLnN0YXRlID09PSAnb3BlbmVkJztcclxuICAgICAgICBpZiAob3BlbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghb3BlbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3BlbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgeyBNZW51IH0gZnJvbSAnLi91aSc7XHJcbiIsImltcG9ydCBtZW51VG1wbCBmcm9tICcuL2luZGV4LnRlbXBsYXRlLnB1Zyc7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Avc2hhcmVkL0B0eXBlcy9pbmRleC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNZW51UHJvcHMgfSBmcm9tICcuL2luZGV4LnR5cGVzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNZW51IGV4dGVuZHMgQ29tcG9uZW50PEhUTUxEaXZFbGVtZW50LCBNZW51UHJvcHM+IHtcclxuICAgIGNvbnN0cnVjdG9yKHBhcmVudDogRWxlbWVudCwgcHJvcHM6IE1lbnVQcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHBhcmVudCwgbWVudVRtcGwsIHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5odG1sRWxlbWVudFxyXG4gICAgICAgICAgICAuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWVudV9fb3Blbi1idG4nKVswXVxyXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9wZW5GaWVsZCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyVGVtcGxhdGUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb21wb25lbnREaWRNb3VudCgpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBgLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmNhbnZhcyB7XG4gIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxMTAsIDExMCk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2hhcmVkL2NhbnZhcy91aS9pbmRleC5zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksdUJBQUE7RUFDQSxvQ0FBQTtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jYW52YXMge1xcclxcbiAgICBib3JkZXI6IDFweCBibGFjayBzb2xpZDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTEwLCAxMTApO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJ0aWxldGV4dHVyZXMucG5nXCI7IiwidmFyIHB1ZyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3B1Zy1ydW50aW1lL2luZGV4LmpzXCIpO1xuXG5mdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHt2YXIgcHVnX2h0bWwgPSBcIlwiLCBwdWdfbWl4aW5zID0ge30sIHB1Z19pbnRlcnA7O3ZhciBsb2NhbHNfZm9yX3dpdGggPSAobG9jYWxzIHx8IHt9KTsoZnVuY3Rpb24gKGNsYXNzTmFtZSkge3B1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NkaXZcIiArIChwdWcuYXR0cihcImNsYXNzXCIsIHB1Zy5jbGFzc2VzKFtgJHtjbGFzc05hbWV9YF0sIFt0cnVlXSksIGZhbHNlLCB0cnVlKSkgKyBcIlxcdTAwM0VcXHUwMDNDaGVhZGVyIGNsYXNzPVxcXCJhcHBfX2hlYWRlclxcXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZoZWFkZXJcXHUwMDNFXFx1MDAzQ21haW4gY2xhc3M9XFxcImFwcF9fbWFpblxcXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZtYWluXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVwiO30uY2FsbCh0aGlzLFwiY2xhc3NOYW1lXCIgaW4gbG9jYWxzX2Zvcl93aXRoP2xvY2Fsc19mb3Jfd2l0aC5jbGFzc05hbWU6dHlwZW9mIGNsYXNzTmFtZSE9PVwidW5kZWZpbmVkXCI/Y2xhc3NOYW1lOnVuZGVmaW5lZCkpOztyZXR1cm4gcHVnX2h0bWw7fTtcbm1vZHVsZS5leHBvcnRzID0gdGVtcGxhdGU7IiwidmFyIHB1ZyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3B1Zy1ydW50aW1lL2luZGV4LmpzXCIpO1xuXG5mdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHt2YXIgcHVnX2h0bWwgPSBcIlwiLCBwdWdfbWl4aW5zID0ge30sIHB1Z19pbnRlcnA7O3ZhciBsb2NhbHNfZm9yX3dpdGggPSAobG9jYWxzIHx8IHt9KTsoZnVuY3Rpb24gKGNsYXNzTmFtZSwgaGVpZ2h0LCB3aWR0aCkge3B1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NjYW52YXNcIiArIChwdWcuYXR0cihcImNsYXNzXCIsIHB1Zy5jbGFzc2VzKFtgY2FudmFzICR7Y2xhc3NOYW1lfWBdLCBbdHJ1ZV0pLCBmYWxzZSwgdHJ1ZSkrcHVnLmF0dHIoXCJ3aWR0aFwiLCBgJHt3aWR0aH1gLCB0cnVlLCB0cnVlKStwdWcuYXR0cihcImhlaWdodFwiLCBgJHtoZWlnaHR9YCwgdHJ1ZSwgdHJ1ZSkpICsgXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZjYW52YXNcXHUwMDNFXCI7fS5jYWxsKHRoaXMsXCJjbGFzc05hbWVcIiBpbiBsb2NhbHNfZm9yX3dpdGg/bG9jYWxzX2Zvcl93aXRoLmNsYXNzTmFtZTp0eXBlb2YgY2xhc3NOYW1lIT09XCJ1bmRlZmluZWRcIj9jbGFzc05hbWU6dW5kZWZpbmVkLFwiaGVpZ2h0XCIgaW4gbG9jYWxzX2Zvcl93aXRoP2xvY2Fsc19mb3Jfd2l0aC5oZWlnaHQ6dHlwZW9mIGhlaWdodCE9PVwidW5kZWZpbmVkXCI/aGVpZ2h0OnVuZGVmaW5lZCxcIndpZHRoXCIgaW4gbG9jYWxzX2Zvcl93aXRoP2xvY2Fsc19mb3Jfd2l0aC53aWR0aDp0eXBlb2Ygd2lkdGghPT1cInVuZGVmaW5lZFwiP3dpZHRoOnVuZGVmaW5lZCkpOztyZXR1cm4gcHVnX2h0bWw7fTtcbm1vZHVsZS5leHBvcnRzID0gdGVtcGxhdGU7IiwidmFyIHB1ZyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3B1Zy1ydW50aW1lL2luZGV4LmpzXCIpO1xuXG5mdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHt2YXIgcHVnX2h0bWwgPSBcIlwiLCBwdWdfbWl4aW5zID0ge30sIHB1Z19pbnRlcnA7O3ZhciBsb2NhbHNfZm9yX3dpdGggPSAobG9jYWxzIHx8IHt9KTsoZnVuY3Rpb24gKGNsYXNzTmFtZSkge3B1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NkaXZcIiArIChwdWcuYXR0cihcImNsYXNzXCIsIHB1Zy5jbGFzc2VzKFtgbWVudSAke2NsYXNzTmFtZX1gXSwgW3RydWVdKSwgZmFsc2UsIHRydWUpKSArIFwiXFx1MDAzRVxcdTAwM0NidXR0b24gY2xhc3M9XFxcIm1lbnVfX29wZW4tYnRuXFxcIlxcdTAwM0VvcGVuXFx1MDAzQ1xcdTAwMkZidXR0b25cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXCI7fS5jYWxsKHRoaXMsXCJjbGFzc05hbWVcIiBpbiBsb2NhbHNfZm9yX3dpdGg/bG9jYWxzX2Zvcl93aXRoLmNsYXNzTmFtZTp0eXBlb2YgY2xhc3NOYW1lIT09XCJ1bmRlZmluZWRcIj9jbGFzc05hbWU6dW5kZWZpbmVkKSk7O3JldHVybiBwdWdfaHRtbDt9O1xubW9kdWxlLmV4cG9ydHMgPSB0ZW1wbGF0ZTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBwdWdfaGFzX293bl9wcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogTWVyZ2UgdHdvIGF0dHJpYnV0ZSBvYmplY3RzIGdpdmluZyBwcmVjZWRlbmNlXG4gKiB0byB2YWx1ZXMgaW4gb2JqZWN0IGBiYC4gQ2xhc3NlcyBhcmUgc3BlY2lhbC1jYXNlZFxuICogYWxsb3dpbmcgZm9yIGFycmF5cyBhbmQgbWVyZ2luZy9qb2luaW5nIGFwcHJvcHJpYXRlbHlcbiAqIHJlc3VsdGluZyBpbiBhIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYVxuICogQHBhcmFtIHtPYmplY3R9IGJcbiAqIEByZXR1cm4ge09iamVjdH0gYVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZXhwb3J0cy5tZXJnZSA9IHB1Z19tZXJnZTtcbmZ1bmN0aW9uIHB1Z19tZXJnZShhLCBiKSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgdmFyIGF0dHJzID0gYVswXTtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGF0dHJzID0gcHVnX21lcmdlKGF0dHJzLCBhW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIGF0dHJzO1xuICB9XG5cbiAgZm9yICh2YXIga2V5IGluIGIpIHtcbiAgICBpZiAoa2V5ID09PSAnY2xhc3MnKSB7XG4gICAgICB2YXIgdmFsQSA9IGFba2V5XSB8fCBbXTtcbiAgICAgIGFba2V5XSA9IChBcnJheS5pc0FycmF5KHZhbEEpID8gdmFsQSA6IFt2YWxBXSkuY29uY2F0KGJba2V5XSB8fCBbXSk7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdzdHlsZScpIHtcbiAgICAgIHZhciB2YWxBID0gcHVnX3N0eWxlKGFba2V5XSk7XG4gICAgICB2YWxBID0gdmFsQSAmJiB2YWxBW3ZhbEEubGVuZ3RoIC0gMV0gIT09ICc7JyA/IHZhbEEgKyAnOycgOiB2YWxBO1xuICAgICAgdmFyIHZhbEIgPSBwdWdfc3R5bGUoYltrZXldKTtcbiAgICAgIHZhbEIgPSB2YWxCICYmIHZhbEJbdmFsQi5sZW5ndGggLSAxXSAhPT0gJzsnID8gdmFsQiArICc7JyA6IHZhbEI7XG4gICAgICBhW2tleV0gPSB2YWxBICsgdmFsQjtcbiAgICB9IGVsc2Uge1xuICAgICAgYVtrZXldID0gYltrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhO1xufTtcblxuLyoqXG4gKiBQcm9jZXNzIGFycmF5LCBvYmplY3QsIG9yIHN0cmluZyBhcyBhIHN0cmluZyBvZiBjbGFzc2VzIGRlbGltaXRlZCBieSBhIHNwYWNlLlxuICpcbiAqIElmIGB2YWxgIGlzIGFuIGFycmF5LCBhbGwgbWVtYmVycyBvZiBpdCBhbmQgaXRzIHN1YmFycmF5cyBhcmUgY291bnRlZCBhc1xuICogY2xhc3Nlcy4gSWYgYGVzY2FwaW5nYCBpcyBhbiBhcnJheSwgdGhlbiB3aGV0aGVyIG9yIG5vdCB0aGUgaXRlbSBpbiBgdmFsYCBpc1xuICogZXNjYXBlZCBkZXBlbmRzIG9uIHRoZSBjb3JyZXNwb25kaW5nIGl0ZW0gaW4gYGVzY2FwaW5nYC4gSWYgYGVzY2FwaW5nYCBpc1xuICogbm90IGFuIGFycmF5LCBubyBlc2NhcGluZyBpcyBkb25lLlxuICpcbiAqIElmIGB2YWxgIGlzIGFuIG9iamVjdCwgYWxsIHRoZSBrZXlzIHdob3NlIHZhbHVlIGlzIHRydXRoeSBhcmUgY291bnRlZCBhc1xuICogY2xhc3Nlcy4gTm8gZXNjYXBpbmcgaXMgZG9uZS5cbiAqXG4gKiBJZiBgdmFsYCBpcyBhIHN0cmluZywgaXQgaXMgY291bnRlZCBhcyBhIGNsYXNzLiBObyBlc2NhcGluZyBpcyBkb25lLlxuICpcbiAqIEBwYXJhbSB7KEFycmF5LjxzdHJpbmc+fE9iamVjdC48c3RyaW5nLCBib29sZWFuPnxzdHJpbmcpfSB2YWxcbiAqIEBwYXJhbSB7P0FycmF5LjxzdHJpbmc+fSBlc2NhcGluZ1xuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5leHBvcnRzLmNsYXNzZXMgPSBwdWdfY2xhc3NlcztcbmZ1bmN0aW9uIHB1Z19jbGFzc2VzX2FycmF5KHZhbCwgZXNjYXBpbmcpIHtcbiAgdmFyIGNsYXNzU3RyaW5nID0gJycsIGNsYXNzTmFtZSwgcGFkZGluZyA9ICcnLCBlc2NhcGVFbmFibGVkID0gQXJyYXkuaXNBcnJheShlc2NhcGluZyk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsLmxlbmd0aDsgaSsrKSB7XG4gICAgY2xhc3NOYW1lID0gcHVnX2NsYXNzZXModmFsW2ldKTtcbiAgICBpZiAoIWNsYXNzTmFtZSkgY29udGludWU7XG4gICAgZXNjYXBlRW5hYmxlZCAmJiBlc2NhcGluZ1tpXSAmJiAoY2xhc3NOYW1lID0gcHVnX2VzY2FwZShjbGFzc05hbWUpKTtcbiAgICBjbGFzc1N0cmluZyA9IGNsYXNzU3RyaW5nICsgcGFkZGluZyArIGNsYXNzTmFtZTtcbiAgICBwYWRkaW5nID0gJyAnO1xuICB9XG4gIHJldHVybiBjbGFzc1N0cmluZztcbn1cbmZ1bmN0aW9uIHB1Z19jbGFzc2VzX29iamVjdCh2YWwpIHtcbiAgdmFyIGNsYXNzU3RyaW5nID0gJycsIHBhZGRpbmcgPSAnJztcbiAgZm9yICh2YXIga2V5IGluIHZhbCkge1xuICAgIGlmIChrZXkgJiYgdmFsW2tleV0gJiYgcHVnX2hhc19vd25fcHJvcGVydHkuY2FsbCh2YWwsIGtleSkpIHtcbiAgICAgIGNsYXNzU3RyaW5nID0gY2xhc3NTdHJpbmcgKyBwYWRkaW5nICsga2V5O1xuICAgICAgcGFkZGluZyA9ICcgJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNsYXNzU3RyaW5nO1xufVxuZnVuY3Rpb24gcHVnX2NsYXNzZXModmFsLCBlc2NhcGluZykge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgcmV0dXJuIHB1Z19jbGFzc2VzX2FycmF5KHZhbCwgZXNjYXBpbmcpO1xuICB9IGVsc2UgaWYgKHZhbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBwdWdfY2xhc3Nlc19vYmplY3QodmFsKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdmFsIHx8ICcnO1xuICB9XG59XG5cbi8qKlxuICogQ29udmVydCBvYmplY3Qgb3Igc3RyaW5nIHRvIGEgc3RyaW5nIG9mIENTUyBzdHlsZXMgZGVsaW1pdGVkIGJ5IGEgc2VtaWNvbG9uLlxuICpcbiAqIEBwYXJhbSB7KE9iamVjdC48c3RyaW5nLCBzdHJpbmc+fHN0cmluZyl9IHZhbFxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cbmV4cG9ydHMuc3R5bGUgPSBwdWdfc3R5bGU7XG5mdW5jdGlvbiBwdWdfc3R5bGUodmFsKSB7XG4gIGlmICghdmFsKSByZXR1cm4gJyc7XG4gIGlmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgIHZhciBvdXQgPSAnJztcbiAgICBmb3IgKHZhciBzdHlsZSBpbiB2YWwpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICBpZiAocHVnX2hhc19vd25fcHJvcGVydHkuY2FsbCh2YWwsIHN0eWxlKSkge1xuICAgICAgICBvdXQgPSBvdXQgKyBzdHlsZSArICc6JyArIHZhbFtzdHlsZV0gKyAnOyc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZhbCArICcnO1xuICB9XG59O1xuXG4vKipcbiAqIFJlbmRlciB0aGUgZ2l2ZW4gYXR0cmlidXRlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWxcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gZXNjYXBlZFxuICogQHBhcmFtIHtCb29sZWFufSB0ZXJzZVxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5leHBvcnRzLmF0dHIgPSBwdWdfYXR0cjtcbmZ1bmN0aW9uIHB1Z19hdHRyKGtleSwgdmFsLCBlc2NhcGVkLCB0ZXJzZSkge1xuICBpZiAodmFsID09PSBmYWxzZSB8fCB2YWwgPT0gbnVsbCB8fCAhdmFsICYmIChrZXkgPT09ICdjbGFzcycgfHwga2V5ID09PSAnc3R5bGUnKSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuICBpZiAodmFsID09PSB0cnVlKSB7XG4gICAgcmV0dXJuICcgJyArICh0ZXJzZSA/IGtleSA6IGtleSArICc9XCInICsga2V5ICsgJ1wiJyk7XG4gIH1cbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsO1xuICBpZiAoKHR5cGUgPT09ICdvYmplY3QnIHx8IHR5cGUgPT09ICdmdW5jdGlvbicpICYmIHR5cGVvZiB2YWwudG9KU09OID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFsID0gdmFsLnRvSlNPTigpO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsICE9PSAnc3RyaW5nJykge1xuICAgIHZhbCA9IEpTT04uc3RyaW5naWZ5KHZhbCk7XG4gICAgaWYgKCFlc2NhcGVkICYmIHZhbC5pbmRleE9mKCdcIicpICE9PSAtMSkge1xuICAgICAgcmV0dXJuICcgJyArIGtleSArICc9XFwnJyArIHZhbC5yZXBsYWNlKC8nL2csICcmIzM5OycpICsgJ1xcJyc7XG4gICAgfVxuICB9XG4gIGlmIChlc2NhcGVkKSB2YWwgPSBwdWdfZXNjYXBlKHZhbCk7XG4gIHJldHVybiAnICcgKyBrZXkgKyAnPVwiJyArIHZhbCArICdcIic7XG59O1xuXG4vKipcbiAqIFJlbmRlciB0aGUgZ2l2ZW4gYXR0cmlidXRlcyBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHBhcmFtIHtPYmplY3R9IHRlcnNlIHdoZXRoZXIgdG8gdXNlIEhUTUw1IHRlcnNlIGJvb2xlYW4gYXR0cmlidXRlc1xuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5leHBvcnRzLmF0dHJzID0gcHVnX2F0dHJzO1xuZnVuY3Rpb24gcHVnX2F0dHJzKG9iaiwgdGVyc2Upe1xuICB2YXIgYXR0cnMgPSAnJztcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKHB1Z19oYXNfb3duX3Byb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgdmFsID0gb2JqW2tleV07XG5cbiAgICAgIGlmICgnY2xhc3MnID09PSBrZXkpIHtcbiAgICAgICAgdmFsID0gcHVnX2NsYXNzZXModmFsKTtcbiAgICAgICAgYXR0cnMgPSBwdWdfYXR0cihrZXksIHZhbCwgZmFsc2UsIHRlcnNlKSArIGF0dHJzO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICgnc3R5bGUnID09PSBrZXkpIHtcbiAgICAgICAgdmFsID0gcHVnX3N0eWxlKHZhbCk7XG4gICAgICB9XG4gICAgICBhdHRycyArPSBwdWdfYXR0cihrZXksIHZhbCwgZmFsc2UsIHRlcnNlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXR0cnM7XG59O1xuXG4vKipcbiAqIEVzY2FwZSB0aGUgZ2l2ZW4gc3RyaW5nIG9mIGBodG1sYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaHRtbFxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxudmFyIHB1Z19tYXRjaF9odG1sID0gL1tcIiY8Pl0vO1xuZXhwb3J0cy5lc2NhcGUgPSBwdWdfZXNjYXBlO1xuZnVuY3Rpb24gcHVnX2VzY2FwZShfaHRtbCl7XG4gIHZhciBodG1sID0gJycgKyBfaHRtbDtcbiAgdmFyIHJlZ2V4UmVzdWx0ID0gcHVnX21hdGNoX2h0bWwuZXhlYyhodG1sKTtcbiAgaWYgKCFyZWdleFJlc3VsdCkgcmV0dXJuIF9odG1sO1xuXG4gIHZhciByZXN1bHQgPSAnJztcbiAgdmFyIGksIGxhc3RJbmRleCwgZXNjYXBlO1xuICBmb3IgKGkgPSByZWdleFJlc3VsdC5pbmRleCwgbGFzdEluZGV4ID0gMDsgaSA8IGh0bWwubGVuZ3RoOyBpKyspIHtcbiAgICBzd2l0Y2ggKGh0bWwuY2hhckNvZGVBdChpKSkge1xuICAgICAgY2FzZSAzNDogZXNjYXBlID0gJyZxdW90Oyc7IGJyZWFrO1xuICAgICAgY2FzZSAzODogZXNjYXBlID0gJyZhbXA7JzsgYnJlYWs7XG4gICAgICBjYXNlIDYwOiBlc2NhcGUgPSAnJmx0Oyc7IGJyZWFrO1xuICAgICAgY2FzZSA2MjogZXNjYXBlID0gJyZndDsnOyBicmVhaztcbiAgICAgIGRlZmF1bHQ6IGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAobGFzdEluZGV4ICE9PSBpKSByZXN1bHQgKz0gaHRtbC5zdWJzdHJpbmcobGFzdEluZGV4LCBpKTtcbiAgICBsYXN0SW5kZXggPSBpICsgMTtcbiAgICByZXN1bHQgKz0gZXNjYXBlO1xuICB9XG4gIGlmIChsYXN0SW5kZXggIT09IGkpIHJldHVybiByZXN1bHQgKyBodG1sLnN1YnN0cmluZyhsYXN0SW5kZXgsIGkpO1xuICBlbHNlIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIFJlLXRocm93IHRoZSBnaXZlbiBgZXJyYCBpbiBjb250ZXh0IHRvIHRoZVxuICogdGhlIHB1ZyBpbiBgZmlsZW5hbWVgIGF0IHRoZSBnaXZlbiBgbGluZW5vYC5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWxlbmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IGxpbmVub1xuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBvcmlnaW5hbCBzb3VyY2VcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMucmV0aHJvdyA9IHB1Z19yZXRocm93O1xuZnVuY3Rpb24gcHVnX3JldGhyb3coZXJyLCBmaWxlbmFtZSwgbGluZW5vLCBzdHIpe1xuICBpZiAoIShlcnIgaW5zdGFuY2VvZiBFcnJvcikpIHRocm93IGVycjtcbiAgaWYgKCh0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnIHx8ICFmaWxlbmFtZSkgJiYgIXN0cikge1xuICAgIGVyci5tZXNzYWdlICs9ICcgb24gbGluZSAnICsgbGluZW5vO1xuICAgIHRocm93IGVycjtcbiAgfVxuICB0cnkge1xuICAgIHN0ciA9IHN0ciB8fCByZXF1aXJlKCdmcycpLnJlYWRGaWxlU3luYyhmaWxlbmFtZSwgJ3V0ZjgnKVxuICB9IGNhdGNoIChleCkge1xuICAgIHB1Z19yZXRocm93KGVyciwgbnVsbCwgbGluZW5vKVxuICB9XG4gIHZhciBjb250ZXh0ID0gM1xuICAgICwgbGluZXMgPSBzdHIuc3BsaXQoJ1xcbicpXG4gICAgLCBzdGFydCA9IE1hdGgubWF4KGxpbmVubyAtIGNvbnRleHQsIDApXG4gICAgLCBlbmQgPSBNYXRoLm1pbihsaW5lcy5sZW5ndGgsIGxpbmVubyArIGNvbnRleHQpO1xuXG4gIC8vIEVycm9yIGNvbnRleHRcbiAgdmFyIGNvbnRleHQgPSBsaW5lcy5zbGljZShzdGFydCwgZW5kKS5tYXAoZnVuY3Rpb24obGluZSwgaSl7XG4gICAgdmFyIGN1cnIgPSBpICsgc3RhcnQgKyAxO1xuICAgIHJldHVybiAoY3VyciA9PSBsaW5lbm8gPyAnICA+ICcgOiAnICAgICcpXG4gICAgICArIGN1cnJcbiAgICAgICsgJ3wgJ1xuICAgICAgKyBsaW5lO1xuICB9KS5qb2luKCdcXG4nKTtcblxuICAvLyBBbHRlciBleGNlcHRpb24gbWVzc2FnZVxuICBlcnIucGF0aCA9IGZpbGVuYW1lO1xuICBlcnIubWVzc2FnZSA9IChmaWxlbmFtZSB8fCAnUHVnJykgKyAnOicgKyBsaW5lbm9cbiAgICArICdcXG4nICsgY29udGV4dCArICdcXG5cXG4nICsgZXJyLm1lc3NhZ2U7XG4gIHRocm93IGVycjtcbn07XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnN0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogKGlnbm9yZWQpICovIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL3B1YmxpYy9cIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IEFwcCB9IGZyb20gJ0AvYXBwJztcclxuaW1wb3J0ICcuL2luZGV4LnN0eWxlLnNjc3MnXHJcblxyXG5jb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcclxuY29uc3QgYXBwID0gbmV3IEFwcChyb290KSJdLCJuYW1lcyI6WyJBcHAiLCJnZXRHYW1lRmllbGRDYW52YXMiLCJhcHBUbXBsIiwiQ29tcG9uZW50IiwiTWVudSIsIl9Db21wb25lbnQiLCJwYXJlbnQiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY2FsbFN1cGVyIiwiY2xhc3NOYW1lIiwiX2luaGVyaXRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJyZW5kZXIiLCJfdGhpcyIsInJlbmRlclRlbXBsYXRlIiwibWFpbkVsZW1lbnQiLCJodG1sRWxlbWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJ0aGVuIiwiZGF0YSIsImdhbWVDYW52YXMiLCJjYW52YXMiLCJkcmF3IiwiZHJhd0ZpZWxkIiwibWVudSIsIm9wZW5GaWVsZCIsInRtcGxGdW5jIiwicHJvcHMiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJ1cGRhdGUiLCJkZXN0cm95IiwicmVtb3ZlIiwiQ2FudmFzIiwiREVGQVVMVF9DT0xPUiIsInJlZCIsImdyZWVuIiwiYmx1ZSIsImFwbGhhIiwiaW5pdFByb2dyYW0iLCJjbGVhckJ1ZmZlcnMiLCJnbCIsImNsZWFyIiwiQ09MT1JfQlVGRkVSX0JJVCIsIkRFUFRIX0JVRkZFUl9CSVQiLCJjbGVhckNvbG9yIiwiY29sb3IiLCJfY29sb3IiLCJfY29sb3IkYXBsaGEiLCJpbml0TmV3QnVmZmVyIiwiYnVmZmVyIiwiY3JlYXRlQnVmZmVyIiwiYnVmZmVyU3RhdGljRGF0YSIsImJpbmRCdWZmZXIiLCJBUlJBWV9CVUZGRVIiLCJidWZmZXJEYXRhIiwiU1RBVElDX0RSQVciLCJmdWxsQ2FudmFzVmlld3BvcnQiLCJ2aWV3cG9ydCIsIndpZHRoIiwiaGVpZ2h0IiwiY3JlYXRlVGV4dHVyZSIsInBpeGVscyIsInRleHR1cmUiLCJiaW5kVGV4dHVyZSIsIlRFWFRVUkVfMkQiLCJ0ZXhJbWFnZTJEIiwiUkdCIiwiVU5TSUdORURfQllURSIsInRleFBhcmFtZXRlcmkiLCJURVhUVVJFX01JTl9GSUxURVIiLCJORUFSRVNUIiwiVEVYVFVSRV9NQUdfRklMVEVSIiwiZ2VuZXJhdGVNaXBtYXAiLCJsb2FkVGV4dHVyZUZpbGUiLCJzcmMiLCJpbWFnZSIsIkltYWdlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJhZGRFdmVudExpc3RlbmVyIiwiaW5pdFR3b0J1ZmZlclZhbyIsInBvc2l0aW9uQnVmZmVyIiwidGV4dHVyZUNvb3Jkc0J1ZmZlciIsInBvc2l0aW9uQXR0ciIsInRleHR1cmVDb29yZHNBdHRyIiwidmFvIiwiY3JlYXRlVmVydGV4QXJyYXkiLCJjb25zb2xlIiwiZXJyb3IiLCJiaW5kVmVydGV4QXJyYXkiLCJlbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSIsInZlcnRleEF0dHJpYlBvaW50ZXIiLCJGTE9BVCIsImZyYWdtZW50U2hhZGVyU3JjIiwiaW5pdEZyYWdtZW50U2hhZGVyIiwiZnJhZ21lbnRTaGFkZXIiLCJjcmVhdGVTaGFkZXIiLCJGUkFHTUVOVF9TSEFERVIiLCJzaGFkZXJTb3VyY2UiLCJjb21waWxlU2hhZGVyIiwiZ2V0U2hhZGVyUGFyYW1ldGVyIiwiQ09NUElMRV9TVEFUVVMiLCJlcnJvck1lc3NhZ2UiLCJnZXRTaGFkZXJJbmZvTG9nIiwiY29uY2F0IiwiaW5pdFZlcnRleFNoYWRlciIsInByb2dyYW0iLCJjcmVhdGVQcm9ncmFtIiwidmVydGV4U2hhZGVyIiwiYXR0YWNoU2hhZGVycyIsImxpbmtQcm9ncmFtIiwiZ2V0UHJvZ3JhbVBhcmFtZXRlciIsIkxJTktfU1RBVFVTIiwiZ2V0UHJvZ3JhbUluZm9Mb2ciLCJ2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uIiwiZ2V0QXR0cmliTG9jYXRpb24iLCJ0ZXh0dXJlQXR0cmlidXRlTG9jYXRpb24iLCJjb29yZHNVbmlmb3JtIiwiZ2V0VW5pZm9ybUxvY2F0aW9uIiwic2l6ZVVuaWZvcm0iLCJjYW52YXNTaXplVW5pZm9ybSIsInBvc2l0aW9uQXR0ckxvY2F0aW9uIiwidGV4dHVyZUF0dHJMb2NhdGlvbiIsInNoYWRlcnMiLCJmb3JFYWNoIiwic2hhZGVyIiwiYXR0YWNoU2hhZGVyIiwidmVydGV4U2hhZGVyU3JjIiwiVkVSVEVYX1NIQURFUiIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJpIiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJfdHlwZW9mIiwiX19hd2FpdCIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJkb25lIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwibGVuZ3RoIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3VtZW50cyIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJfZGVmaW5lUHJvcGVydGllcyIsIl90b1Byb3BlcnR5S2V5IiwiX3RvUHJpbWl0aXZlIiwidG9QcmltaXRpdmUiLCJTdHJpbmciLCJOdW1iZXIiLCJfZ2V0UHJvdG90eXBlT2YiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsIlJlZmVyZW5jZUVycm9yIiwiQm9vbGVhbiIsInZhbHVlT2YiLCJiaW5kIiwiX3NldFByb3RvdHlwZU9mIiwiY2FudmFzVG1wbCIsIm9iamVjdHMiLCJNYXAiLCJwb3NpdGlvbkJ1ZmZlcnMiLCJpbml0V2ViR0wiLCJyZW5kZXJpbmdDb250ZXh0IiwiZ2V0Q29udGV4dCIsInBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24iLCJwaXhlbFN0b3JlaSIsIlVOUEFDS19GTElQX1lfV0VCR0wiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsInNldCIsIkZsb2F0MzJBcnJheSIsImNyZWF0ZU5ld1ZhbyIsInRvdGFsVmVydGljZXMiLCJoYXMiLCJ0ZXh0dXJlRGF0YSIsInRleHR1cmVCdWZmZXIiLCJnZXQiLCJjcmVhdGVOZXdUZXh0dXJlIiwiX2NyZWF0ZU5ld1RleHR1cmVGcm9tRmlsZSIsIl9jYWxsZWUiLCJmaWxlTmFtZSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJjcmVhdGVOZXdUZXh0dXJlRnJvbUZpbGUiLCJfeCIsImFkZE9iamVjdCIsInBhcmFtcyIsInNpemUiLCJjb29yZHMiLCJ0ZXh0dXJlQ29vcmRzIiwidXBkYXRlT2JqZWN0IiwiX3BhcmFtcyRjb29yZHMiLCJfcGFyYW1zJHNpemUiLCJfcGFyYW1zJHRleHR1cmVDb29yZHMiLCJfdGhpczIiLCJ1c2VQcm9ncmFtIiwidW5pZm9ybTJmIiwiaW5mbyIsInVuaWZvcm0xZiIsIngiLCJkcmF3QXJyYXlzIiwiVFJJQU5HTEVTIiwidW5kZWZpbmVkIiwiZ2VuUmFuZG9tSW50IiwibWF4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiZ2VuZXJhdGVGaWVsZCIsIndpZHRoVGlsZXMiLCJoZWlnaHRUaWxlcyIsImJvbWJzVG90YWwiLCJpbml0aWFsWCIsImluaXRpYWxZIiwiZmllbGQiLCJib21icyIsInRvdGFsR2VuZXJhdGVkIiwibG9nIiwiY29sdW1uIiwicm93IiwiaiIsImsiLCJib21ic0Fyb3VuZCIsImdldENsaWNrZWRDb29yZHMiLCJ0aWxlU2l6ZSIsIm9mZnNldFgiLCJvZmZzZXRZIiwib3BlbkZ1bGxGaWVsZCIsInRpbGVzIiwidGlsZSIsIm9wZW4iLCJvcGVuQWRqYWNlbnRGaWVsZHMiLCJjdXJyZW50VGlsZUluZm8iLCJ0aWxlU3RhdGUiLCJvcGVuZWRUeXBlIiwidGlsZVR5cGUiLCJuZXh0VGlsZXNTdGFjayIsInZpc2l0ZWRUaWxlcyIsIlNldCIsInRvdGFsT3BlbmVkIiwiaWQiLCJhZGQiLCJvcGVuQm9tYnMiLCJib21iIiwiZHJhd0VtcHR5RmllbGQiLCJhZGRFbXB0eVRpbGUiLCJ1cGRhdGVGaWVsZCIsIl9maWVsZCRnZXQiLCJuZXh0VGlsZSIsInNldFR5cGVCb21iIiwic2V0VHlwZURpZ2l0IiwiZ2V0TmV3VGlsZSIsIkNBTlZBU19XSURUSCIsIkNBTlZBU19IRUlHSFQiLCJwcm9jZXNzQ2xpY2siLCJwcmV2ZW50RGVmYXVsdCIsIl9nZXRDbGlja2VkQ29vcmRzIiwicmVzdWx0Iiwic2V0VHlwZUV4cGxvZGVkIiwicHJvY2Vzc1JpZ2h0Q2xpY2siLCJfZ2V0Q2xpY2tlZENvb3JkczIiLCJ3aXRoRmxhZyIsImNsb3NlIiwicHV0RmxhZyIsInN0YXRlIiwiX3gyIiwiX2dldEdhbWVGaWVsZENhbnZhcyIsImdhbWVTdGF0ZSIsInRvdGFsQm9tYnMiLCJfZHJhd0ZpZWxkIiwic3RhdHVzIiwiYWRkTmV3RW1wdHlUaWxlIiwiY2xpY2tDb29yZHMiLCJfZ2VuZXJhdGVGaWVsZCIsImJvbWJzTGVmdCIsIm5vQm9tYnNGaWVsZHNMZWZ0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiVGlsZSIsImdlbmVyYXRlVGlsZUlkIiwiX2dldE5ld1RpbGUiLCJ2YW9JbmZvIiwiY3JlYXRlVmFvIiwiYWRkTmV3VGlsZSIsImFkZE5ld0JvbWJUaWxlIiwiYWRkTmV3RGlnaXRUaWxlIiwiVElMRV9URVhUVVJFX0NPT1JEUyIsIkVNUFRZIiwiT05FIiwiVFdPIiwiVEhSRUUiLCJGT1VSIiwiRklWRSIsIlNJWCIsIlNFVkVOIiwiRUlHSFQiLCJDTE9TRUQiLCJGTEFHIiwiRkxBR19XUk9ORyIsIkJPTUIiLCJCT01CX1dST05HIiwiY29vcmRzSWQiLCJyZW5kZXJPbkNhbnZhcyIsInVwZGF0ZVRleHR1cmVDb29yZHMiLCJuZXdUZXh0dXJlQ29vcmRzIiwiY2hhbmdlU3RhdGUiLCJuZXdTdGF0ZSIsImNoYW5nZVR5cGUiLCJuZXdUeXBlIiwic2V0VHlwZUVtcHR5IiwidG9nZ2xlIiwib3BlbmVkIiwibWVudVRtcGwiLCJjb21wb25lbnREaWRNb3VudCIsInJvb3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYXBwIl0sInNvdXJjZVJvb3QiOiIifQ==