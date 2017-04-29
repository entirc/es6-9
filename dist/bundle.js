(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

//----------------------------------
// Generators
//----------------------------------

var generators = {
  //----------------------------------
  // Generators
  // - Generator Matching
  //----------------------------------

  generatorMaching: function generatorMaching() {},

  //----------------------------------
  // Generators
  // - Generator Control-Flow
  //----------------------------------
  generatorControlFlow: function generatorControlFlow() {}

};

//----------------------------------
// Map/Set and WeakMap/WeakSet
//----------------------------------

var mapSetAndWeakMapWeakSet = {

  //----------------------------------
  // Map/Set and WeakMap/WeakSet
  // - Set Data-Structure
  //----------------------------------
  setDataStructure: function setDataStructure() {},

  //----------------------------------
  // Map/Set and WeakMap/WeakSet
  // - Map Data-Structure
  //----------------------------------
  mapDataStructure: function mapDataStructure() {},

  //----------------------------------
  // Map/Set and WeakMap/WeakSet
  // - Weak-Link Data-Structures
  //----------------------------------
  weakLinkDataStructures: function weakLinkDataStructures() {}

};

//==================================

window.onload = function () {

  var bindFunction = function bindFunction(selector, fn) {
    var link = document.querySelector(selector);
    link.href = "javascript:void(0)";
    link.onclick = function () {
      console.clear();
      fn();
    };
  };

  var bindList = [["#g-gm", generators.generatorMaching], ["#g-gcf", generators.generatorControlFlow], ["#mswmws-sds", mapSetAndWeakMapWeakSet.setDataStructure], ["#mswmws-mds", mapSetAndWeakMapWeakSet.mapDataStructure], ["#mswmws-wlds", mapSetAndWeakMapWeakSet.weakLinkDataStructures]];

  bindList.forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        selector = _ref2[0],
        fn = _ref2[1];

    return bindFunction(selector, fn);
  });
};

},{}]},{},[1]);
