(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _utils = require("./utils.js");

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//----------------------------------
// Map/Set and WeakMap/WeakSet
//----------------------------------

var mapSetAndWeakMapWeakSet = {

  //----------------------------------
  // Map/Set and WeakMap/WeakSet
  // - Set Data-Structure
  //----------------------------------
  setDataStructure: function setDataStructure() {
    var set = new Set();

    (0, _utils.group)("Adicionando valores no Set", function () {
      set.add("hello");
      (0, _utils.logf)('set.add("hello")');
      (0, _utils.logf)(set);

      set.add("goodbye");
      (0, _utils.logf)('set.add("goodbye")');
      (0, _utils.logf)(set);

      set.add("hello");
      (0, _utils.logf)('set.add("hello")');
      (0, _utils.logf)(set);
    });

    (0, _utils.group)("Encadeando set.add()", function () {
      set.add("foo").add("bar").add("qux");
      (0, _utils.logf)('set.add("foo").add("bar").add("qux")');
      (0, _utils.logf)(set);
    });

    (0, _utils.group)("Propriedades comuns do Set", function () {
      (0, _utils.logf)('set.size = ${size}', { size: set.size });
      (0, _utils.logf)('set.has("hello") ? ${has}', { has: set.has("hello") });
      (0, _utils.logf)('set.has("goodbye") ? ${has}', { has: set.has("goodbye") });
      (0, _utils.logf)('set.has("value") ? ${has}', { has: set.has("value") });
    });

    (0, _utils.group)("Iterando um Set (ordem dos elementos é a ordem de inserção)", function () {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = set.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var key = _step.value;
          // insertion order
          (0, _utils.logf)(key);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    });

    (0, _utils.group)('Excluindo valores do Set', function () {
      (0, _utils.logf)(set);
      set.delete("hello");
      (0, _utils.logf)('set.delete("hello")');
      (0, _utils.logf)(set);
    });

    (0, _utils.group)("Limpando o Set", function () {
      set.clear();
      (0, _utils.logf)('set.clear()');
      (0, _utils.logf)('set.size = ${size}', { size: set.size });
      (0, _utils.logf)(set);
    });

    (0, _utils.group)("Adicionando tipos diferentes em um Set", function () {
      var mixedSet = new Set();
      mixedSet.add('abc').add(123).add({ foo: 'bar' }).add([1, 2, 3, 4, 5]);
      (0, _utils.logf)(mixedSet);
    });

    (0, _utils.group)("Criando um Set já com vários elementos", function () {
      (0, _utils.logf)(new Set([1, 2, 3, 4, 5]));
      (0, _utils.logf)(new Set(['red', 'green', 'blue']));
    });

    (0, _utils.group)("Construtor do Set aceita no máximo um argumento iterável (demais argumentos são desconsiderados)", function () {
      var setMultiArgs = new Set('abc', 'def');
      (0, _utils.logf)(setMultiArgs);
    });

    (0, _utils.group)("Operações de conjunto em Sets", function () {
      (0, _utils.group)("UNION (a ∪ b)", function () {
        var a = new Set([1, 2, 3]);
        var b = new Set([4, 3, 2]);
        var union = new Set([].concat(_toConsumableArray(a), _toConsumableArray(b)));
        (0, _utils.logf)(a);
        (0, _utils.logf)(b);
        (0, _utils.logf)(union);
      });

      (0, _utils.group)("INTERSECTION (a ∩ b)", function () {
        var a = new Set([1, 2, 3]);
        var b = new Set([4, 3, 2]);
        var intersection = new Set([].concat(_toConsumableArray(a)).filter(function (x) {
          return b.has(x);
        }));
        (0, _utils.logf)(a);
        (0, _utils.logf)(b);
        (0, _utils.logf)(intersection);
      });

      (0, _utils.group)("DIFFERENCE (a - b)", function () {
        var a = new Set([1, 2, 3]);
        var b = new Set([4, 3, 2]);
        var difference = new Set([].concat(_toConsumableArray(a)).filter(function (x) {
          return !b.has(x);
        }));
        (0, _utils.logf)(a);
        (0, _utils.logf)(b);
        (0, _utils.logf)(difference);
      });
    });
  },

  //----------------------------------
  // Map/Set and WeakMap/WeakSet
  // - Map Data-Structure
  //----------------------------------
  mapDataStructure: function mapDataStructure() {
    var map = new Map();

    (0, _utils.group)("Adicionando valores no Map via set()", function () {
      map.set("answer", 42);
      (0, _utils.logf)('map.set("answer", 42)');
      (0, _utils.logf)(map);

      map.set("foo", 1);
      (0, _utils.logf)('map.set("foo", 1)');
      (0, _utils.logf)(map);

      map.set("bar", 2);
      (0, _utils.logf)('map.set("bar", 2)');
      (0, _utils.logf)(map);
    });

    (0, _utils.group)("Propriedades comuns do Map ", function () {
      (0, _utils.logf)('map.get("answer") = ${value}', { value: map.get("answer") });
      (0, _utils.logf)('map.size = ${value}', { value: map.size });
    });

    (0, _utils.group)("Iterando um Map", function () {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = map[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _step2$value = _slicedToArray(_step2.value, 2),
              key = _step2$value[0],
              val = _step2$value[1];

          (0, _utils.logf)('${key} = ${val}', { key: key, val: val });
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    });

    (0, _utils.group)("Map entries", function () {
      (0, _utils.logf)('map.entries() = ${entries}', { entries: [].concat(_toConsumableArray(map.entries())) });
    });

    (0, _utils.group)("Map keys", function () {
      (0, _utils.logf)('map.keys() = ${keys}', { keys: [].concat(_toConsumableArray(map.keys())) });
    });

    (0, _utils.group)("Map values", function () {
      (0, _utils.logf)('map.values() = ${values}', { values: [].concat(_toConsumableArray(map.values())) });
    });

    (0, _utils.group)('Excluindo valores do Map', function () {
      (0, _utils.logf)(map);
      map.delete("answer");
      (0, _utils.logf)('map.delete("answer")');
      (0, _utils.logf)(map);
    });

    (0, _utils.group)("Limpando o Map", function () {
      map.clear();
      (0, _utils.logf)('map.clear()');
      (0, _utils.logf)('map.size = ${size}', { size: map.size });
      (0, _utils.logf)(map);
    });

    (0, _utils.group)("Criando um Map já com vários elementos", function () {
      (0, _utils.logf)(new Map([[1, 'one'], [2, 'two'], [3, 'three']]));
    });

    (0, _utils.group)("Qualquer objeto pode ser uma 'key' do Map", function () {
      var myMap = new Map();
      myMap.set('a', 1);
      myMap.set(123, 2);
      myMap.set(NaN, 3);
      var KEY1 = {};
      myMap.set(KEY1, 4);
      var KEY2 = {};
      myMap.set(KEY2, 5);
      myMap.set(new Set([1, 2, 3]), 6);
      (0, _utils.logf)(myMap);
    });
  },

  //----------------------------------
  // Map/Set and WeakMap/WeakSet
  // - Weak-Link Data-Structures
  //----------------------------------
  weakLinkDataStructures: function weakLinkDataStructures() {
    //WeakSets usam apenas objetos e não são iteráveis
    //WeakMaps usam apenas objetos como keys (valores primitivos não são permitidos)
    //WeakMaps não têm a propriedade size e o método clear()
    //WeakMaps seria melhor nomeado como "WeakKeyMaps"

    (0, _utils.group)("Sets vs WeakSets", function () {

      var handleSet = function handleSet(set) {
        var key = { 'answer': 42 };

        (0, _utils.logf)('key = ${key}', { key: JSON.stringify(key) });
        set.add(key);

        (0, _utils.logf)(set);
        (0, _utils.logf)(set.size);

        key = null;
        (0, _utils.logf)(set);
        (0, _utils.logf)('set.size = ${size}', { size: set.size });

        var retrievedKey = [].concat(_toConsumableArray(set))[0];
        (0, _utils.logf)('retrievedKey = ${retrievedKey}', { retrievedKey: JSON.stringify(retrievedKey) });

        //Tentando iterar sobre o set recebido (permitido apenas para o Set, não para o WeakSet)
        /*for (let v of set) {
          logf(v)
        }*/
      };

      (0, _utils.group)('Set', function () {
        handleSet(new Set());
      });

      (0, _utils.group)('WeakSet', function () {
        handleSet(new WeakSet());
      });
    });

    (0, _utils.group)('WeakMaps', function () {
      var weakMap = new WeakMap();

      var x = { id: 1 },
          y = { id: 2 },
          z = { id: 3 },
          w = { id: 4 };

      weakMap.set(x, y);
      (0, _utils.logf)(weakMap);
      (0, _utils.logf)(weakMap.size); //undefined

      x = null; // { id: 1 } é elegível para ser coletado pelo GC (garbage collector)
      y = null; // { id: 2 } é elegível para ser coletado pelo GC (garbage collector)
      // só porque { id: 1 } também é

      (0, _utils.logf)(weakMap);

      weakMap.set(z, w);
      (0, _utils.logf)(weakMap);

      w = null; // { id: 4 } não é elegível para ser coletado pelo GC (garbage collector)
      (0, _utils.logf)(weakMap);
      //weakMap.clear() //error!
    });
  }

};

//==================================

window.onload = function () {

  var bindFunction = function bindFunction(selector, fn) {
    var link = document.querySelector(selector);
    link.href = "javascript:void(0)";
    link.onclick = function () {
      (0, _utils.clear)();
      fn();
    };
  };

  var bindList = [["#mswmws-sds", mapSetAndWeakMapWeakSet.setDataStructure], ["#mswmws-mds", mapSetAndWeakMapWeakSet.mapDataStructure], ["#mswmws-wlds", mapSetAndWeakMapWeakSet.weakLinkDataStructures]];

  bindList.forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        selector = _ref2[0],
        fn = _ref2[1];

    return bindFunction(selector, fn);
  });
};

},{"./utils.js":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var clear = function clear() {
  return console.clear();
};

var log = function log(msg) {
  return console.log(msg);
};

var logf = function logf(format, _values) {
  if (_values) {
    var newFormat = Object.keys(_values).reduce(function (a, v) {
      return a.replace('${' + v + '}', '${_values.' + v + '}');
    }, format);
    log(eval('`' + newFormat + '`'));
  } else {
    log(format);
  }
};

var group = function group(groupName, fn) {
  console.groupCollapsed(groupName);
  fn();
  console.groupEnd();
};

var measureTime = function measureTime(fn) {
  console.time();
  fn();
  console.timeEnd();
};

var groupAndMeasureTime = function groupAndMeasureTime(groupName, fn) {
  return group(groupName, function () {
    return measureTime(fn);
  });
};

exports.clear = clear;
exports.log = log;
exports.logf = logf;
exports.group = group;
exports.measureTime = measureTime;
exports.groupAndMeasureTime = groupAndMeasureTime;

},{}]},{},[1,2]);
