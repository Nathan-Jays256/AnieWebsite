
(function (global, factory) {
                  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
                  typeof define === 'function' && define.amd ? define(factory) :
                  (factory());
}(this, (function () { 'use strict';

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _global = createCommonjsModule(function (module) {
  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
  if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
});

var hasOwnProperty = {}.hasOwnProperty;
var _has = function _has(it, key) {
  return hasOwnProperty.call(it, key);
};

var _fails = function _fails(exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

var _descriptors = !_fails(function () {
  return Object.defineProperty({}, 'a', { get: function get() {
      return 7;
    } }).a != 7;
});

var _core = createCommonjsModule(function (module) {
  var core = module.exports = { version: '2.6.1' };
  if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _isObject = function _isObject(it) {
  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
};

var isObject$1 = _isObject;
var _anObject = function _anObject(it) {
  if (!isObject$1(it)) throw TypeError(it + ' is not an object!');
  return it;
};

var isObject$2 = _isObject;
var document$1 = _global.document;
// typeof document.createElement is 'object' in old IE
var is = isObject$2(document$1) && isObject$2(document$1.createElement);
var _domCreate = function _domCreate(it) {
  return is ? document$1.createElement(it) : {};
};

var _ie8DomDefine = !_descriptors && !_fails(function () {
  return Object.defineProperty(_domCreate('div'), 'a', { get: function get() {
      return 7;
    } }).a != 7;
});

var isObject$3 = _isObject;
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var _toPrimitive = function _toPrimitive(it, S) {
  if (!isObject$3(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject$3(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject$3(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject$3(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

var anObject$1 = _anObject;
var IE8_DOM_DEFINE = _ie8DomDefine;
var toPrimitive$1 = _toPrimitive;
var dP$2 = Object.defineProperty;

var f$1 = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject$1(O);
  P = toPrimitive$1(P, true);
  anObject$1(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP$2(O, P, Attributes);
  } catch (e) {/* empty */}
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var _objectDp = {
  f: f$1
};

var _propertyDesc = function _propertyDesc(bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var dP$1 = _objectDp;
var createDesc$1 = _propertyDesc;
var _hide = _descriptors ? function (object, key, value) {
  return dP$1.f(object, key, createDesc$1(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var id = 0;
var px = Math.random();
var _uid = function _uid(key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

var _redefine = createCommonjsModule(function (module) {
  var global = _global;
  var hide = _hide;
  var has = _has;
  var SRC = _uid('src');
  var TO_STRING = 'toString';
  var $toString = Function[TO_STRING];
  var TPL = ('' + $toString).split(TO_STRING);

  _core.inspectSource = function (it) {
    return $toString.call(it);
  };

  (module.exports = function (O, key, val, safe) {
    var isFunction = typeof val == 'function';
    if (isFunction) has(val, 'name') || hide(val, 'name', key);
    if (O[key] === val) return;
    if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
    if (O === global) {
      O[key] = val;
    } else if (!safe) {
      delete O[key];
      hide(O, key, val);
    } else if (O[key]) {
      O[key] = val;
    } else {
      hide(O, key, val);
    }
    // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  })(Function.prototype, TO_STRING, function toString() {
    return typeof this == 'function' && this[SRC] || $toString.call(this);
  });
});

var _aFunction = function _aFunction(it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

var aFunction = _aFunction;
var _ctx = function _ctx(fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1:
      return function (a) {
        return fn.call(that, a);
      };
    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };
    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }
  return function () /* ...args */{
    return fn.apply(that, arguments);
  };
};

var global$2 = _global;
var core = _core;
var hide = _hide;
var redefine$1 = _redefine;
var ctx = _ctx;
var PROTOTYPE$1 = 'prototype';

var $export$1 = function $export(type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global$2 : IS_STATIC ? global$2[name] || (global$2[name] = {}) : (global$2[name] || {})[PROTOTYPE$1];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE$1] || (exports[PROTOTYPE$1] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global$2) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine$1(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global$2.core = core;
// type bitmap
$export$1.F = 1; // forced
$export$1.G = 2; // global
$export$1.S = 4; // static
$export$1.P = 8; // proto
$export$1.B = 16; // bind
$export$1.W = 32; // wrap
$export$1.U = 64; // safe
$export$1.R = 128; // real proto method for `library`
var _export = $export$1;

var _meta = createCommonjsModule(function (module) {
  var META = _uid('meta');
  var isObject = _isObject;
  var has = _has;
  var setDesc = _objectDp.f;
  var id = 0;
  var isExtensible = Object.isExtensible || function () {
    return true;
  };
  var FREEZE = !_fails(function () {
    return isExtensible(Object.preventExtensions({}));
  });
  var setMeta = function setMeta(it) {
    setDesc(it, META, { value: {
        i: 'O' + ++id, // object ID
        w: {} // weak collections IDs
      } });
  };
  var fastKey = function fastKey(it, create) {
    // return primitive with prefix
    if (!isObject(it)) return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
    if (!has(it, META)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible(it)) return 'F';
      // not necessary to add metadata
      if (!create) return 'E';
      // add missing metadata
      setMeta(it);
      // return object ID
    }return it[META].i;
  };
  var getWeak = function getWeak(it, create) {
    if (!has(it, META)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible(it)) return true;
      // not necessary to add metadata
      if (!create) return false;
      // add missing metadata
      setMeta(it);
      // return hash weak collections IDs
    }return it[META].w;
  };
  // add metadata on freeze-family methods calling
  var onFreeze = function onFreeze(it) {
    if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
    return it;
  };
  var meta = module.exports = {
    KEY: META,
    NEED: false,
    fastKey: fastKey,
    getWeak: getWeak,
    onFreeze: onFreeze
  };
});

var _library = false;

var _shared = createCommonjsModule(function (module) {
  var core = _core;
  var global = _global;
  var SHARED = '__core-js_shared__';
  var store = global[SHARED] || (global[SHARED] = {});

  (module.exports = function (key, value) {
    return store[key] || (store[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: core.version,
    mode: _library ? 'pure' : 'global',
    copyright: '?? 2018 Denis Pushkarev (zloirock.ru)'
  });
});

var _wks = createCommonjsModule(function (module) {
  var store = _shared('wks');
  var uid = _uid;
  var _Symbol = _global.Symbol;
  var USE_SYMBOL = typeof _Symbol == 'function';

  var $exports = module.exports = function (name) {
    return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
  };

  $exports.store = store;
});

var def = _objectDp.f;
var has$1 = _has;
var TAG = _wks('toStringTag');

var _setToStringTag = function _setToStringTag(it, tag, stat) {
  if (it && !has$1(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

var f$2 = _wks;

var _wksExt = {
	f: f$2
};

var global$3 = _global;
var core$1 = _core;
var LIBRARY = _library;
var wksExt$1 = _wksExt;
var defineProperty$1 = _objectDp.f;
var _wksDefine = function _wksDefine(name) {
  var $Symbol = core$1.Symbol || (core$1.Symbol = LIBRARY ? {} : global$3.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty$1($Symbol, name, { value: wksExt$1.f(name) });
};

var toString = {}.toString;

var _cof = function _cof(it) {
  return toString.call(it).slice(8, -1);
};

var cof = _cof;
// eslint-disable-next-line no-prototype-builtins
var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

// 7.2.1 RequireObjectCoercible(argument)
var _defined = function _defined(it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

var IObject = _iobject;
var defined = _defined;
var _toIobject = function _toIobject(it) {
  return IObject(defined(it));
};

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
var _toInteger = function _toInteger(it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

var toInteger = _toInteger;
var min = Math.min;
var _toLength = function _toLength(it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

var toInteger$1 = _toInteger;
var max = Math.max;
var min$1 = Math.min;
var _toAbsoluteIndex = function _toAbsoluteIndex(index, length) {
  index = toInteger$1(index);
  return index < 0 ? max(index + length, 0) : min$1(index, length);
};

var toIObject$2 = _toIobject;
var toLength = _toLength;
var toAbsoluteIndex = _toAbsoluteIndex;
var _arrayIncludes = function _arrayIncludes(IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject$2($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
      // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      }
    }return !IS_INCLUDES && -1;
  };
};

var shared$1 = _shared('keys');
var uid$1 = _uid;
var _sharedKey = function _sharedKey(key) {
  return shared$1[key] || (shared$1[key] = uid$1(key));
};

var has$2 = _has;
var toIObject$1 = _toIobject;
var arrayIndexOf = _arrayIncludes(false);
var IE_PROTO = _sharedKey('IE_PROTO');

var _objectKeysInternal = function _objectKeysInternal(object, names) {
  var O = toIObject$1(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) {
    if (key != IE_PROTO) has$2(O, key) && result.push(key);
  } // Don't enum bug & hidden keys
  while (names.length > i) {
    if (has$2(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }
  }return result;
};

// IE 8- don't enum bug keys
var _enumBugKeys = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

var $keys$1 = _objectKeysInternal;
var enumBugKeys = _enumBugKeys;

var _objectKeys = Object.keys || function keys(O) {
  return $keys$1(O, enumBugKeys);
};

var f$3 = Object.getOwnPropertySymbols;

var _objectGops = {
	f: f$3
};

var f$4 = {}.propertyIsEnumerable;

var _objectPie = {
	f: f$4
};

var getKeys = _objectKeys;
var gOPS = _objectGops;
var pIE = _objectPie;
var _enumKeys = function _enumKeys(it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) {
      if (isEnum.call(it, key = symbols[i++])) result.push(key);
    }
  }return result;
};

var cof$1 = _cof;
var _isArray = Array.isArray || function isArray(arg) {
  return cof$1(arg) == 'Array';
};

var dP$3 = _objectDp;
var anObject$3 = _anObject;
var getKeys$1 = _objectKeys;

var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$3(O);
  var keys = getKeys$1(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) {
    dP$3.f(O, P = keys[i++], Properties[P]);
  }return O;
};

var document$2 = _global.document;
var _html = document$2 && document$2.documentElement;

var anObject$2 = _anObject;
var dPs = _objectDps;
var enumBugKeys$1 = _enumBugKeys;
var IE_PROTO$1 = _sharedKey('IE_PROTO');
var Empty = function Empty() {/* empty */};
var PROTOTYPE$2 = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var _createDict = function createDict() {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = _domCreate('iframe');
  var i = enumBugKeys$1.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  _html.appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  _createDict = iframeDocument.F;
  while (i--) {
    delete _createDict[PROTOTYPE$2][enumBugKeys$1[i]];
  }return _createDict();
};

var _objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE$2] = anObject$2(O);
    result = new Empty();
    Empty[PROTOTYPE$2] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else result = _createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

var $keys$2 = _objectKeysInternal;
var hiddenKeys = _enumBugKeys.concat('length', 'prototype');

var f$6 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys$2(O, hiddenKeys);
};

var _objectGopn = {
  f: f$6
};

var toIObject$3 = _toIobject;
var gOPN$1 = _objectGopn.f;
var toString$1 = {}.toString;

var windowNames = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function getWindowNames(it) {
  try {
    return gOPN$1(it);
  } catch (e) {
    return windowNames.slice();
  }
};

var f$5 = function getOwnPropertyNames(it) {
  return windowNames && toString$1.call(it) == '[object Window]' ? getWindowNames(it) : gOPN$1(toIObject$3(it));
};

var _objectGopnExt = {
  f: f$5
};

var pIE$1 = _objectPie;
var createDesc$2 = _propertyDesc;
var toIObject$4 = _toIobject;
var toPrimitive$2 = _toPrimitive;
var has$3 = _has;
var IE8_DOM_DEFINE$1 = _ie8DomDefine;
var gOPD$1 = Object.getOwnPropertyDescriptor;

var f$7 = _descriptors ? gOPD$1 : function getOwnPropertyDescriptor(O, P) {
  O = toIObject$4(O);
  P = toPrimitive$2(P, true);
  if (IE8_DOM_DEFINE$1) try {
    return gOPD$1(O, P);
  } catch (e) {/* empty */}
  if (has$3(O, P)) return createDesc$2(!pIE$1.f.call(O, P), O[P]);
};

var _objectGopd = {
  f: f$7
};

var global$1 = _global;
var has = _has;
var DESCRIPTORS = _descriptors;
var $export = _export;
var redefine = _redefine;
var META = _meta.KEY;
var $fails = _fails;
var shared = _shared;
var setToStringTag = _setToStringTag;
var uid = _uid;
var wks = _wks;
var wksExt = _wksExt;
var wksDefine = _wksDefine;
var enumKeys = _enumKeys;
var isArray = _isArray;
var anObject = _anObject;
var isObject = _isObject;
var toIObject = _toIobject;
var toPrimitive = _toPrimitive;
var createDesc = _propertyDesc;
var _create = _objectCreate;
var gOPNExt = _objectGopnExt;
var $GOPD = _objectGopd;
var $DP = _objectDp;
var $keys = _objectKeys;
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global$1.Symbol;
var $JSON = global$1.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global$1.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function get$$1() {
      return dP(this, 'a', { value: 7 }).a;
    }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function wrap(tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && _typeof($Symbol.iterator) == 'symbol' ? function (it) {
  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty$$1(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    }return setSymbolDesc(it, key, D);
  }return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) {
    $defineProperty(it, key = keys[i++], P[key]);
  }return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  }return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  }return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function _Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function $set(value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  _objectGopn.f = gOPNExt.f = $getOwnPropertyNames;
  _objectPie.f = $propertyIsEnumerable;
  _objectGops.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !_library) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols =
// 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), j = 0; es6Symbols.length > j;) {
  wks(es6Symbols[j++]);
}for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) {
  wksDefine(wellKnownSymbols[k++]);
}$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function _for(key) {
    return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) {
      if (SymbolRegistry[key] === sym) return key;
    }
  },
  useSetter: function useSetter() {
    setter = true;
  },
  useSimple: function useSimple() {
    setter = false;
  }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) {
      args.push(arguments[i++]);
    }$replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function replacer(key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || _hide($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global$1.JSON, 'JSON', true);

var $export$2 = _export;
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export$2($export$2.S, 'Object', { create: _objectCreate });

var $export$3 = _export;
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export$3($export$3.S + $export$3.F * !_descriptors, 'Object', { defineProperty: _objectDp.f });

var $export$4 = _export;
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export$4($export$4.S + $export$4.F * !_descriptors, 'Object', { defineProperties: _objectDps });

var $export$5 = _export;
var core$2 = _core;
var fails = _fails;
var _objectSap = function _objectSap(KEY, exec) {
  var fn = (core$2.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export$5($export$5.S + $export$5.F * fails(function () {
    fn(1);
  }), 'Object', exp);
};

var toIObject$5 = _toIobject;
var $getOwnPropertyDescriptor$1 = _objectGopd.f;

_objectSap('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor$1(toIObject$5(it), key);
  };
});

var defined$1 = _defined;
var _toObject = function _toObject(it) {
  return Object(defined$1(it));
};

var has$4 = _has;
var toObject$1 = _toObject;
var IE_PROTO$2 = _sharedKey('IE_PROTO');
var ObjectProto$1 = Object.prototype;

var _objectGpo = Object.getPrototypeOf || function (O) {
  O = toObject$1(O);
  if (has$4(O, IE_PROTO$2)) return O[IE_PROTO$2];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  }return O instanceof Object ? ObjectProto$1 : null;
};

var toObject = _toObject;
var $getPrototypeOf = _objectGpo;

_objectSap('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});

var toObject$2 = _toObject;
var $keys$3 = _objectKeys;

_objectSap('keys', function () {
  return function keys(it) {
    return $keys$3(toObject$2(it));
  };
});

_objectSap('getOwnPropertyNames', function () {
  return _objectGopnExt.f;
});

var isObject$4 = _isObject;
var meta = _meta.onFreeze;

_objectSap('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject$4(it) ? $freeze(meta(it)) : it;
  };
});

var isObject$5 = _isObject;
var meta$1 = _meta.onFreeze;

_objectSap('seal', function ($seal) {
  return function seal(it) {
    return $seal && isObject$5(it) ? $seal(meta$1(it)) : it;
  };
});

var isObject$6 = _isObject;
var meta$2 = _meta.onFreeze;

_objectSap('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && isObject$6(it) ? $preventExtensions(meta$2(it)) : it;
  };
});

var isObject$7 = _isObject;

_objectSap('isFrozen', function ($isFrozen) {
  return function isFrozen(it) {
    return isObject$7(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});

var isObject$8 = _isObject;

_objectSap('isSealed', function ($isSealed) {
  return function isSealed(it) {
    return isObject$8(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});

var isObject$9 = _isObject;

_objectSap('isExtensible', function ($isExtensible) {
  return function isExtensible(it) {
    return isObject$9(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});

var getKeys$2 = _objectKeys;
var gOPS$1 = _objectGops;
var pIE$2 = _objectPie;
var toObject$3 = _toObject;
var IObject$1 = _iobject;
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
var _objectAssign = !$assign || _fails(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) {
    B[k] = k;
  });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) {
  // eslint-disable-line no-unused-vars
  var T = toObject$3(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS$1.f;
  var isEnum = pIE$2.f;
  while (aLen > index) {
    var S = IObject$1(arguments[index++]);
    var keys = getSymbols ? getKeys$2(S).concat(getSymbols(S)) : getKeys$2(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
    }
  }return T;
} : $assign;

var $export$6 = _export;

$export$6($export$6.S + $export$6.F, 'Object', { assign: _objectAssign });

// 7.2.9 SameValue(x, y)
var _sameValue = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};

var $export$7 = _export;
$export$7($export$7.S, 'Object', { is: _sameValue });

var isObject$10 = _isObject;
var anObject$4 = _anObject;
var check = function check(O, proto) {
  anObject$4(O);
  if (!isObject$10(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
var _setProto = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
  function (test, buggy, set) {
    try {
      set = _ctx(Function.call, _objectGopd.f(Object.prototype, '__proto__').set, 2);
      set(test, []);
      buggy = !(test instanceof Array);
    } catch (e) {
      buggy = true;
    }
    return function setPrototypeOf(O, proto) {
      check(O, proto);
      if (buggy) O.__proto__ = proto;else set(O, proto);
      return O;
    };
  }({}, false) : undefined),
  check: check
};

var $export$8 = _export;
$export$8($export$8.S, 'Object', { setPrototypeOf: _setProto.set });

var cof$2 = _cof;
var TAG$1 = _wks('toStringTag');
// ES3 wrong here
var ARG = cof$2(function () {
  return arguments;
}()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function tryGet(it, key) {
  try {
    return it[key];
  } catch (e) {/* empty */}
};

var _classof = function _classof(it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
  // @@toStringTag case
  : typeof (T = tryGet(O = Object(it), TAG$1)) == 'string' ? T
  // builtinTag case
  : ARG ? cof$2(O)
  // ES3 arguments fallback
  : (B = cof$2(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

var classof = _classof;
var test = {};
test[_wks('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  _redefine(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}

// fast apply, http://jsperf.lnkit.com/fast-apply/5
var _invoke = function _invoke(fn, args, that) {
                  var un = that === undefined;
                  switch (args.length) {
                                    case 0:
                                                      return un ? fn() : fn.call(that);
                                    case 1:
                                                      return un ? fn(args[0]) : fn.call(that, args[0]);
                                    case 2:
                                                      return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
                                    case 3:
                                                      return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
                                    case 4:
                                                      return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
                  }return fn.apply(that, args);
};

var aFunction$1 = _aFunction;
var isObject$11 = _isObject;
var invoke = _invoke;
var arraySlice = [].slice;
var factories = {};

var construct = function construct(F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) {
      n[i] = 'a[' + i + ']';
    } // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  }return factories[len](F, args);
};

var _bind = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction$1(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function bound() /* args... */{
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject$11(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};

var $export$9 = _export;

$export$9($export$9.P, 'Function', { bind: _bind });

var dP$4 = _objectDp.f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || _descriptors && dP$4(FProto, NAME, {
  configurable: true,
  get: function get() {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});

var isObject$12 = _isObject;
var getPrototypeOf = _objectGpo;
var HAS_INSTANCE = _wks('hasInstance');
var FunctionProto = Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
if (!(HAS_INSTANCE in FunctionProto)) _objectDp.f(FunctionProto, HAS_INSTANCE, { value: function value(O) {
    if (typeof this != 'function' || !isObject$12(O)) return false;
    if (!isObject$12(this.prototype)) return O instanceof this;
    // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
    while (O = getPrototypeOf(O)) {
      if (this.prototype === O) return true;
    }return false;
  } });

var _stringWs = '\t\n\x0B\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003' + '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

var $export$11 = _export;
var defined$2 = _defined;
var fails$1 = _fails;
var spaces = _stringWs;
var space = '[' + spaces + ']';
var non = '\u200B\x85';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function exporter(KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails$1(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export$11($export$11.P + $export$11.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined$2(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

var _stringTrim = exporter;

var $parseInt$1 = _global.parseInt;
var $trim = _stringTrim.trim;
var ws = _stringWs;
var hex = /^[-+]?0[xX]/;

var _parseInt = $parseInt$1(ws + '08') !== 8 || $parseInt$1(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt$1(string, radix >>> 0 || (hex.test(string) ? 16 : 10));
} : $parseInt$1;

var $export$10 = _export;
var $parseInt = _parseInt;
// 18.2.5 parseInt(string, radix)
$export$10($export$10.G + $export$10.F * (parseInt != $parseInt), { parseInt: $parseInt });

var $parseFloat$1 = _global.parseFloat;
var $trim$1 = _stringTrim.trim;

var _parseFloat = 1 / $parseFloat$1(_stringWs + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim$1(String(str), 3);
  var result = $parseFloat$1(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat$1;

var $export$12 = _export;
var $parseFloat = _parseFloat;
// 18.2.4 parseFloat(string)
$export$12($export$12.G + $export$12.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });

var isObject$13 = _isObject;
var setPrototypeOf = _setProto.set;
var _inheritIfRequired = function _inheritIfRequired(that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject$13(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  }return that;
};

var global$4 = _global;
var has$5 = _has;
var cof$3 = _cof;
var inheritIfRequired = _inheritIfRequired;
var toPrimitive$3 = _toPrimitive;
var fails$2 = _fails;
var gOPN$2 = _objectGopn.f;
var gOPD$2 = _objectGopd.f;
var dP$5 = _objectDp.f;
var $trim$2 = _stringTrim.trim;
var NUMBER = 'Number';
var $Number = global$4[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof$3(_objectCreate(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function toNumber(argument) {
  var it = toPrimitive$3(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim$2(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66:case 98:
          radix = 2;maxCode = 49;break; // fast equal /^0b[01]+$/i
        case 79:case 111:
          radix = 8;maxCode = 55;break; // fast equal /^0o[0-7]+$/i
        default:
          return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      }return parseInt(digits, radix);
    }
  }return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
    // check on 1..constructor(foo) case
    && (BROKEN_COF ? fails$2(function () {
      proto.valueOf.call(that);
    }) : cof$3(that) != NUMBER) ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = _descriptors ? gOPN$2(Base) : (
  // ES3:
  'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
  // ES6 (in case, if modules with ES6 Number statics required before):
  'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' + 'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger').split(','), j$1 = 0, key; keys.length > j$1; j$1++) {
    if (has$5(Base, key = keys[j$1]) && !has$5($Number, key)) {
      dP$5($Number, key, gOPD$2(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  _redefine(global$4, NUMBER, $Number);
}

var cof$4 = _cof;
var _aNumberValue = function _aNumberValue(it, msg) {
  if (typeof it != 'number' && cof$4(it) != 'Number') throw TypeError(msg);
  return +it;
};

var toInteger$3 = _toInteger;
var defined$3 = _defined;

var _stringRepeat = function repeat(count) {
  var str = String(defined$3(this));
  var res = '';
  var n = toInteger$3(count);
  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
  for (; n > 0; (n >>>= 1) && (str += str)) {
    if (n & 1) res += str;
  }return res;
};

var $export$13 = _export;
var toInteger$2 = _toInteger;
var aNumberValue = _aNumberValue;
var repeat = _stringRepeat;
var $toFixed = 1.0.toFixed;
var floor$1 = Math.floor;
var data = [0, 0, 0, 0, 0, 0];
var ERROR = 'Number.toFixed: incorrect invocation!';
var ZERO = '0';

var multiply = function multiply(n, c) {
  var i = -1;
  var c2 = c;
  while (++i < 6) {
    c2 += n * data[i];
    data[i] = c2 % 1e7;
    c2 = floor$1(c2 / 1e7);
  }
};
var divide = function divide(n) {
  var i = 6;
  var c = 0;
  while (--i >= 0) {
    c += data[i];
    data[i] = floor$1(c / n);
    c = c % n * 1e7;
  }
};
var numToString = function numToString() {
  var i = 6;
  var s = '';
  while (--i >= 0) {
    if (s !== '' || i === 0 || data[i] !== 0) {
      var t = String(data[i]);
      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
    }
  }return s;
};
var pow = function pow(x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};
var log = function log(x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  }return n;
};

$export$13($export$13.P + $export$13.F * (!!$toFixed && (0.00008.toFixed(3) !== '0.000' || 0.9.toFixed(0) !== '1' || 1.255.toFixed(2) !== '1.25' || 1000000000000000128.0.toFixed(0) !== '1000000000000000128') || !_fails(function () {
  // V8 ~ Android 4.3-
  $toFixed.call({});
})), 'Number', {
  toFixed: function toFixed(fractionDigits) {
    var x = aNumberValue(this, ERROR);
    var f = toInteger$2(fractionDigits);
    var s = '';
    var m = ZERO;
    var e, z, j, k;
    if (f < 0 || f > 20) throw RangeError(ERROR);
    // eslint-disable-next-line no-self-compare
    if (x != x) return 'NaN';
    if (x <= -1e21 || x >= 1e21) return String(x);
    if (x < 0) {
      s = '-';
      x = -x;
    }
    if (x > 1e-21) {
      e = log(x * pow(2, 69, 1)) - 69;
      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(0, z);
        j = f;
        while (j >= 7) {
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        m = numToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        m = numToString() + repeat.call(ZERO, f);
      }
    }
    if (f > 0) {
      k = m.length;
      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
    } else {
      m = s + m;
    }return m;
  }
});

var $export$14 = _export;
var $fails$1 = _fails;
var aNumberValue$1 = _aNumberValue;
var $toPrecision = 1.0.toPrecision;

$export$14($export$14.P + $export$14.F * ($fails$1(function () {
  // IE7-
  return $toPrecision.call(1, undefined) !== '1';
}) || !$fails$1(function () {
  // V8 ~ Android 4.3-
  $toPrecision.call({});
})), 'Number', {
  toPrecision: function toPrecision(precision) {
    var that = aNumberValue$1(this, 'Number#toPrecision: incorrect invocation!');
    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
  }
});

var $export$15 = _export;

$export$15($export$15.S, 'Number', { EPSILON: Math.pow(2, -52) });

var $export$16 = _export;
var _isFinite = _global.isFinite;

$export$16($export$16.S, 'Number', {
  isFinite: function isFinite(it) {
    return typeof it == 'number' && _isFinite(it);
  }
});

var isObject$14 = _isObject;
var floor$2 = Math.floor;
var _isInteger = function isInteger(it) {
  return !isObject$14(it) && isFinite(it) && floor$2(it) === it;
};

var $export$17 = _export;

$export$17($export$17.S, 'Number', { isInteger: _isInteger });

var $export$18 = _export;

$export$18($export$18.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});

var $export$19 = _export;
var isInteger = _isInteger;
var abs = Math.abs;

$export$19($export$19.S, 'Number', {
  isSafeInteger: function isSafeInteger(number) {
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});

var $export$20 = _export;

$export$20($export$20.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });

var $export$21 = _export;

$export$21($export$21.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });

var $export$22 = _export;
var $parseFloat$2 = _parseFloat;
// 20.1.2.12 Number.parseFloat(string)
$export$22($export$22.S + $export$22.F * (Number.parseFloat != $parseFloat$2), 'Number', { parseFloat: $parseFloat$2 });

var $export$23 = _export;
var $parseInt$2 = _parseInt;
// 20.1.2.13 Number.parseInt(string, radix)
$export$23($export$23.S + $export$23.F * (Number.parseInt != $parseInt$2), 'Number', { parseInt: $parseInt$2 });

// 20.2.2.20 Math.log1p(x)
var _mathLog1p = Math.log1p || function log1p(x) {
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};

var $export$24 = _export;
var log1p = _mathLog1p;
var Contrt = Math.Contrt;
var $acosh = Math.acosh;

$export$24($export$24.S + $export$24.F * !($acosh
// V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
&& Math.floor($acosh(Number.MAX_VALUE)) == 710
// Tor Browser bug: Math.acosh(Infinity) -> NaN
&& $acosh(Infinity) == Infinity), 'Math', {
  acosh: function acosh(x) {
    return (x = +x) < 1 ? NaN : x > 94906265.62425156 ? Math.log(x) + Math.LN2 : log1p(x - 1 + Contrt(x - 1) * Contrt(x + 1));
  }
});

var $export$25 = _export;
var $asinh = Math.asinh;

function asinh(x) {
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.Contrt(x * x + 1));
}

// Tor Browser bug: Math.asinh(0) -> -0
$export$25($export$25.S + $export$25.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });

var $export$26 = _export;
var $atanh = Math.atanh;

// Tor Browser bug: Math.atanh(-0) -> 0
$export$26($export$26.S + $export$26.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
  atanh: function atanh(x) {
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});

// 20.2.2.28 Math.sign(x)
var _mathSign = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};

var $export$27 = _export;
var sign = _mathSign;

$export$27($export$27.S, 'Math', {
  cbrt: function cbrt(x) {
    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});

var $export$28 = _export;

$export$28($export$28.S, 'Math', {
  clz32: function clz32(x) {
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});

var $export$29 = _export;
var exp = Math.exp;

$export$29($export$29.S, 'Math', {
  cosh: function cosh(x) {
    return (exp(x = +x) + exp(-x)) / 2;
  }
});

// 20.2.2.14 Math.expm1(x)
var $expm1$1 = Math.expm1;
var _mathExpm1 = !$expm1$1
// Old FF bug
|| $expm1$1(10) > 22025.465794806719 || $expm1$1(10) < 22025.4657948067165168
// Tor Browser bug
|| $expm1$1(-2e-17) != -2e-17 ? function expm1(x) {
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1$1;

var $export$30 = _export;
var $expm1 = _mathExpm1;

$export$30($export$30.S + $export$30.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });

var sign$1 = _mathSign;
var pow$1 = Math.pow;
var EPSILON = pow$1(2, -52);
var EPSILON32 = pow$1(2, -23);
var MAX32 = pow$1(2, 127) * (2 - EPSILON32);
var MIN32 = pow$1(2, -126);

var roundTiesToEven = function roundTiesToEven(n) {
  return n + 1 / EPSILON - 1 / EPSILON;
};

var _mathFround = Math.fround || function fround(x) {
  var $abs = Math.abs(x);
  var $sign = sign$1(x);
  var a, result;
  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
  a = (1 + EPSILON32 / EPSILON) * $abs;
  result = a - (a - $abs);
  // eslint-disable-next-line no-self-compare
  if (result > MAX32 || result != result) return $sign * Infinity;
  return $sign * result;
};

var $export$31 = _export;

$export$31($export$31.S, 'Math', { fround: _mathFround });

var $export$32 = _export;
var abs$1 = Math.abs;

$export$32($export$32.S, 'Math', {
  hypot: function hypot(value1, value2) {
    // eslint-disable-line no-unused-vars
    var sum = 0;
    var i = 0;
    var aLen = arguments.length;
    var larg = 0;
    var arg, div;
    while (i < aLen) {
      arg = abs$1(arguments[i++]);
      if (larg < arg) {
        div = larg / arg;
        sum = sum * div * div + 1;
        larg = arg;
      } else if (arg > 0) {
        div = arg / larg;
        sum += div * div;
      } else sum += arg;
    }
    return larg === Infinity ? Infinity : larg * Math.Contrt(sum);
  }
});

var $export$33 = _export;
var $imul = Math.imul;

// some WebKit versions fails with big numbers, some has wrong arity
$export$33($export$33.S + $export$33.F * _fails(function () {
  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
}), 'Math', {
  imul: function imul(x, y) {
    var UINT16 = 0xffff;
    var xn = +x;
    var yn = +y;
    var xl = UINT16 & xn;
    var yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});

var $export$34 = _export;

$export$34($export$34.S, 'Math', {
  log10: function log10(x) {
    return Math.log(x) * Math.LOG10E;
  }
});

var $export$35 = _export;

$export$35($export$35.S, 'Math', { log1p: _mathLog1p });

var $export$36 = _export;

$export$36($export$36.S, 'Math', {
  log2: function log2(x) {
    return Math.log(x) / Math.LN2;
  }
});

var $export$37 = _export;

$export$37($export$37.S, 'Math', { sign: _mathSign });

var $export$38 = _export;
var expm1 = _mathExpm1;
var exp$1 = Math.exp;

// V8 near Chromium 38 has a problem with very small numbers
$export$38($export$38.S + $export$38.F * _fails(function () {
  return !Math.sinh(-2e-17) != -2e-17;
}), 'Math', {
  sinh: function sinh(x) {
    return Math.abs(x = +x) < 1 ? (expm1(x) - expm1(-x)) / 2 : (exp$1(x - 1) - exp$1(-x - 1)) * (Math.E / 2);
  }
});

var $export$39 = _export;
var expm1$1 = _mathExpm1;
var exp$2 = Math.exp;

$export$39($export$39.S, 'Math', {
  tanh: function tanh(x) {
    var a = expm1$1(x = +x);
    var b = expm1$1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp$2(x) + exp$2(-x));
  }
});

var $export$40 = _export;

$export$40($export$40.S, 'Math', {
  trunc: function trunc(it) {
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});

var $export$41 = _export;
var toAbsoluteIndex$1 = _toAbsoluteIndex;
var fromCharCode = String.fromCharCode;
var $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
$export$41($export$41.S + $export$41.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x) {
    // eslint-disable-line no-unused-vars
    var res = [];
    var aLen = arguments.length;
    var i = 0;
    var code;
    while (aLen > i) {
      code = +arguments[i++];
      if (toAbsoluteIndex$1(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000 ? fromCharCode(code) : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00));
    }return res.join('');
  }
});

var $export$42 = _export;
var toIObject$6 = _toIobject;
var toLength$1 = _toLength;

$export$42($export$42.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite) {
    var tpl = toIObject$6(callSite.raw);
    var len = toLength$1(tpl.length);
    var aLen = arguments.length;
    var res = [];
    var i = 0;
    while (len > i) {
      res.push(String(tpl[i++]));
      if (i < aLen) res.push(String(arguments[i]));
    }return res.join('');
  }
});

_stringTrim('trim', function ($trim) {
  return function trim() {
    return $trim(this, 3);
  };
});

var toInteger$4 = _toInteger;
var defined$4 = _defined;
// true  -> String#at
// false -> String#codePointAt
var _stringAt = function _stringAt(TO_STRING) {
  return function (that, pos) {
    var s = String(defined$4(that));
    var i = toInteger$4(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

var _iterators = {};

var create = _objectCreate;
var descriptor = _propertyDesc;
var setToStringTag$2 = _setToStringTag;
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
_hide(IteratorPrototype, _wks('iterator'), function () {
  return this;
});

var _iterCreate = function _iterCreate(Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag$2(Constructor, NAME + ' Iterator');
};

var LIBRARY$1 = _library;
var $export$43 = _export;
var redefine$2 = _redefine;
var hide$1 = _hide;
var Iterators = _iterators;
var $iterCreate = _iterCreate;
var setToStringTag$1 = _setToStringTag;
var getPrototypeOf$1 = _objectGpo;
var ITERATOR = _wks('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function returnThis() {
  return this;
};

var _iterDefine = function _iterDefine(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function getMethod(kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS:
        return function keys() {
          return new Constructor(this, kind);
        };
      case VALUES:
        return function values() {
          return new Constructor(this, kind);
        };
    }return function entries() {
      return new Constructor(this, kind);
    };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf$1($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag$1(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY$1 && typeof IteratorPrototype[ITERATOR] != 'function') hide$1(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() {
      return $native.call(this);
    };
  }
  // Define iterator
  if ((!LIBRARY$1 || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide$1(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine$2(proto, key, methods[key]);
    } else $export$43($export$43.P + $export$43.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

var $at = _stringAt(true);

// 21.1.3.27 String.prototype[@@iterator]()
_iterDefine(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0; // next index
  // 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

var $export$44 = _export;
var $at$1 = _stringAt(false);
$export$44($export$44.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos) {
    return $at$1(this, pos);
  }
});

var isObject$15 = _isObject;
var cof$5 = _cof;
var MATCH = _wks('match');
var _isRegexp = function _isRegexp(it) {
  var isRegExp;
  return isObject$15(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof$5(it) == 'RegExp');
};

var isRegExp = _isRegexp;
var defined$5 = _defined;

var _stringContext = function _stringContext(that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined$5(that));
};

var MATCH$1 = _wks('match');
var _failsIsRegexp = function _failsIsRegexp(KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH$1] = false;
      return !'/./'[KEY](re);
    } catch (f) {/* empty */}
  }return true;
};

var $export$45 = _export;
var toLength$2 = _toLength;
var context = _stringContext;
var ENDS_WITH = 'endsWith';
var $endsWith = ''[ENDS_WITH];

$export$45($export$45.P + $export$45.F * _failsIsRegexp(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = context(this, searchString, ENDS_WITH);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength$2(that.length);
    var end = endPosition === undefined ? len : Math.min(toLength$2(endPosition), len);
    var search = String(searchString);
    return $endsWith ? $endsWith.call(that, search, end) : that.slice(end - search.length, end) === search;
  }
});

var $export$46 = _export;
var context$1 = _stringContext;
var INCLUDES = 'includes';

$export$46($export$46.P + $export$46.F * _failsIsRegexp(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context$1(this, searchString, INCLUDES).indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var $export$47 = _export;

$export$47($export$47.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: _stringRepeat
});

var $export$48 = _export;
var toLength$3 = _toLength;
var context$2 = _stringContext;
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export$48($export$48.P + $export$48.F * _failsIsRegexp(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context$2(this, searchString, STARTS_WITH);
    var index = toLength$3(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith ? $startsWith.call(that, search, index) : that.slice(index, index + search.length) === search;
  }
});

var $export$49 = _export;
var fails$3 = _fails;
var defined$6 = _defined;
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function createHTML(string, tag, attribute, value) {
  var S = String(defined$6(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
var _stringHtml = function _stringHtml(NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export$49($export$49.P + $export$49.F * fails$3(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};

_stringHtml('anchor', function (createHTML) {
  return function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  };
});

_stringHtml('big', function (createHTML) {
  return function big() {
    return createHTML(this, 'big', '', '');
  };
});

_stringHtml('blink', function (createHTML) {
  return function blink() {
    return createHTML(this, 'blink', '', '');
  };
});

_stringHtml('bold', function (createHTML) {
  return function bold() {
    return createHTML(this, 'b', '', '');
  };
});

_stringHtml('fixed', function (createHTML) {
  return function fixed() {
    return createHTML(this, 'tt', '', '');
  };
});

_stringHtml('fontcolor', function (createHTML) {
  return function fontcolor(color) {
    return createHTML(this, 'font', 'color', color);
  };
});

_stringHtml('fontsize', function (createHTML) {
  return function fontsize(size) {
    return createHTML(this, 'font', 'size', size);
  };
});

_stringHtml('italics', function (createHTML) {
  return function italics() {
    return createHTML(this, 'i', '', '');
  };
});

_stringHtml('link', function (createHTML) {
  return function link(url) {
    return createHTML(this, 'a', 'href', url);
  };
});

_stringHtml('small', function (createHTML) {
  return function small() {
    return createHTML(this, 'small', '', '');
  };
});

_stringHtml('strike', function (createHTML) {
  return function strike() {
    return createHTML(this, 'strike', '', '');
  };
});

_stringHtml('sub', function (createHTML) {
  return function sub() {
    return createHTML(this, 'sub', '', '');
  };
});

_stringHtml('sup', function (createHTML) {
  return function sup() {
    return createHTML(this, 'sup', '', '');
  };
});

var $export$50 = _export;

$export$50($export$50.S, 'Date', { now: function now() {
    return new Date().getTime();
  } });

var $export$51 = _export;
var toObject$4 = _toObject;
var toPrimitive$4 = _toPrimitive;

$export$51($export$51.P + $export$51.F * _fails(function () {
  return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({ toISOString: function toISOString() {
      return 1;
    } }) !== 1;
}), 'Date', {
  // eslint-disable-next-line no-unused-vars
  toJSON: function toJSON(key) {
    var O = toObject$4(this);
    var pv = toPrimitive$4(O);
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});

var fails$4 = _fails;
var getTime = Date.prototype.getTime;
var $toISOString = Date.prototype.toISOString;

var lz = function lz(num) {
  return num > 9 ? num : '0' + num;
};

// PhantomJS / old WebKit has a broken implementations
var _dateToIsoString = fails$4(function () {
  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
}) || !fails$4(function () {
  $toISOString.call(new Date(NaN));
}) ? function toISOString() {
  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
  var d = this;
  var y = d.getUTCFullYear();
  var m = d.getUTCMilliseconds();
  var s = y < 0 ? '-' : y > 9999 ? '+' : '';
  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) + '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) + 'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) + ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
} : $toISOString;

var $export$52 = _export;
var toISOString = _dateToIsoString;

// PhantomJS / old WebKit has a broken implementations
$export$52($export$52.P + $export$52.F * (Date.prototype.toISOString !== toISOString), 'Date', {
  toISOString: toISOString
});

var DateProto = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var $toString = DateProto[TO_STRING];
var getTime$1 = DateProto.getTime;
if (new Date(NaN) + '' != INVALID_DATE) {
  _redefine(DateProto, TO_STRING, function toString() {
    var value = getTime$1.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}

var anObject$5 = _anObject;
var toPrimitive$5 = _toPrimitive;
var NUMBER$1 = 'number';

var _dateToPrimitive = function _dateToPrimitive(hint) {
  if (hint !== 'string' && hint !== NUMBER$1 && hint !== 'default') throw TypeError('Incorrect hint');
  return toPrimitive$5(anObject$5(this), hint != NUMBER$1);
};

var TO_PRIMITIVE$1 = _wks('toPrimitive');
var proto$1 = Date.prototype;

if (!(TO_PRIMITIVE$1 in proto$1)) _hide(proto$1, TO_PRIMITIVE$1, _dateToPrimitive);

var $export$53 = _export;

$export$53($export$53.S, 'Array', { isArray: _isArray });

var anObject$6 = _anObject;
var _iterCall = function _iterCall(iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject$6(value)[0], value[1]) : fn(value);
    // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject$6(ret.call(iterator));
    throw e;
  }
};

var Iterators$1 = _iterators;
var ITERATOR$1 = _wks('iterator');
var ArrayProto = Array.prototype;

var _isArrayIter = function _isArrayIter(it) {
  return it !== undefined && (Iterators$1.Array === it || ArrayProto[ITERATOR$1] === it);
};

var $defineProperty$1 = _objectDp;
var createDesc$3 = _propertyDesc;

var _createProperty = function _createProperty(object, index, value) {
  if (index in object) $defineProperty$1.f(object, index, createDesc$3(0, value));else object[index] = value;
};

var classof$1 = _classof;
var ITERATOR$2 = _wks('iterator');
var Iterators$2 = _iterators;
var core_getIteratorMethod = _core.getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR$2] || it['@@iterator'] || Iterators$2[classof$1(it)];
};

var ITERATOR$3 = _wks('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR$3]();
  riter['return'] = function () {
    SAFE_CLOSING = true;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () {
    throw 2;
  });
} catch (e) {/* empty */}

var _iterDetect = function _iterDetect(exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR$3]();
    iter.next = function () {
      return { done: safe = true };
    };
    arr[ITERATOR$3] = function () {
      return iter;
    };
    exec(arr);
  } catch (e) {/* empty */}
  return safe;
};

var ctx$1 = _ctx;
var $export$54 = _export;
var toObject$5 = _toObject;
var call = _iterCall;
var isArrayIter = _isArrayIter;
var toLength$4 = _toLength;
var createProperty = _createProperty;
var getIterFn = core_getIteratorMethod;

$export$54($export$54.S + $export$54.F * !_iterDetect(function (iter) {
  Array.from(iter);
}), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject$5(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx$1(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength$4(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});

var $export$55 = _export;
var createProperty$1 = _createProperty;

// WebKit Array.of isn't generic
$export$55($export$55.S + $export$55.F * _fails(function () {
  function F() {/* empty */}
  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of() /* ...args */{
    var index = 0;
    var aLen = arguments.length;
    var result = new (typeof this == 'function' ? this : Array)(aLen);
    while (aLen > index) {
      createProperty$1(result, index, arguments[index++]);
    }result.length = aLen;
    return result;
  }
});

var fails$5 = _fails;

var _strictMethod = function _strictMethod(method, arg) {
  return !!method && fails$5(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () {/* empty */}, 1) : method.call(null);
  });
};

var $export$56 = _export;
var toIObject$7 = _toIobject;
var arrayJoin = [].join;

// fallback for not array-like strings
$export$56($export$56.P + $export$56.F * (_iobject != Object || !_strictMethod(arrayJoin)), 'Array', {
  join: function join(separator) {
    return arrayJoin.call(toIObject$7(this), separator === undefined ? ',' : separator);
  }
});

var $export$57 = _export;
var html = _html;
var cof$6 = _cof;
var toAbsoluteIndex$2 = _toAbsoluteIndex;
var toLength$5 = _toLength;
var arraySlice$1 = [].slice;

// fallback for not array-like ES3 strings and DOM objects
$export$57($export$57.P + $export$57.F * _fails(function () {
  if (html) arraySlice$1.call(html);
}), 'Array', {
  slice: function slice(begin, end) {
    var len = toLength$5(this.length);
    var klass = cof$6(this);
    end = end === undefined ? len : end;
    if (klass == 'Array') return arraySlice$1.call(this, begin, end);
    var start = toAbsoluteIndex$2(begin, len);
    var upTo = toAbsoluteIndex$2(end, len);
    var size = toLength$5(upTo - start);
    var cloned = new Array(size);
    var i = 0;
    for (; i < size; i++) {
      cloned[i] = klass == 'String' ? this.charAt(start + i) : this[start + i];
    }return cloned;
  }
});

var $export$58 = _export;
var aFunction$2 = _aFunction;
var toObject$6 = _toObject;
var fails$6 = _fails;
var $sort = [].sort;
var test$1 = [1, 2, 3];

$export$58($export$58.P + $export$58.F * (fails$6(function () {
  // IE8-
  test$1.sort(undefined);
}) || !fails$6(function () {
  // V8 bug
  test$1.sort(null);
  // Old WebKit
}) || !_strictMethod($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined ? $sort.call(toObject$6(this)) : $sort.call(toObject$6(this), aFunction$2(comparefn));
  }
});

var isObject$16 = _isObject;
var isArray$1 = _isArray;
var SPECIES = _wks('species');

var _arraySpeciesConstructor = function _arraySpeciesConstructor(original) {
  var C;
  if (isArray$1(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray$1(C.prototype))) C = undefined;
    if (isObject$16(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  }return C === undefined ? Array : C;
};

var speciesConstructor = _arraySpeciesConstructor;

var _arraySpeciesCreate = function _arraySpeciesCreate(original, length) {
  return new (speciesConstructor(original))(length);
};

var ctx$2 = _ctx;
var IObject$2 = _iobject;
var toObject$7 = _toObject;
var toLength$6 = _toLength;
var asc = _arraySpeciesCreate;
var _arrayMethods = function _arrayMethods(TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject$7($this);
    var self = IObject$2(O);
    var f = ctx$2(callbackfn, that, 3);
    var length = toLength$6(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (; length > index; index++) {
      if (NO_HOLES || index in self) {
        val = self[index];
        res = f(val, index, O);
        if (TYPE) {
          if (IS_MAP) result[index] = res; // map
          else if (res) switch (TYPE) {
              case 3:
                return true; // some
              case 5:
                return val; // find
              case 6:
                return index; // findIndex
              case 2:
                result.push(val); // filter
            } else if (IS_EVERY) return false; // every
        }
      }
    }return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};

var $export$59 = _export;
var $forEach = _arrayMethods(0);
var STRICT = _strictMethod([].forEach, true);

$export$59($export$59.P + $export$59.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});

var $export$60 = _export;
var $map = _arrayMethods(1);

$export$60($export$60.P + $export$60.F * !_strictMethod([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments[1]);
  }
});

var $export$61 = _export;
var $filter = _arrayMethods(2);

$export$61($export$61.P + $export$61.F * !_strictMethod([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments[1]);
  }
});

var $export$62 = _export;
var $some = _arrayMethods(3);

$export$62($export$62.P + $export$62.F * !_strictMethod([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments[1]);
  }
});

var $export$63 = _export;
var $every = _arrayMethods(4);

$export$63($export$63.P + $export$63.F * !_strictMethod([].every, true), 'Array', {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function every(callbackfn /* , thisArg */) {
    return $every(this, callbackfn, arguments[1]);
  }
});

var aFunction$3 = _aFunction;
var toObject$8 = _toObject;
var IObject$3 = _iobject;
var toLength$7 = _toLength;

var _arrayReduce = function _arrayReduce(that, callbackfn, aLen, memo, isRight) {
  aFunction$3(callbackfn);
  var O = toObject$8(that);
  var self = IObject$3(O);
  var length = toLength$7(O.length);
  var index = isRight ? length - 1 : 0;
  var i = isRight ? -1 : 1;
  if (aLen < 2) for (;;) {
    if (index in self) {
      memo = self[index];
      index += i;
      break;
    }
    index += i;
    if (isRight ? index < 0 : length <= index) {
      throw TypeError('Reduce of empty array with no initial value');
    }
  }
  for (; isRight ? index >= 0 : length > index; index += i) {
    if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
  }return memo;
};

var $export$64 = _export;
var $reduce = _arrayReduce;

$export$64($export$64.P + $export$64.F * !_strictMethod([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});

var $export$65 = _export;
var $reduce$1 = _arrayReduce;

$export$65($export$65.P + $export$65.F * !_strictMethod([].reduceRight, true), 'Array', {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
    return $reduce$1(this, callbackfn, arguments.length, arguments[1], true);
  }
});

var $export$66 = _export;
var $indexOf = _arrayIncludes(false);
var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export$66($export$66.P + $export$66.F * (NEGATIVE_ZERO || !_strictMethod($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
    // convert -0 to +0
    ? $native.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments[1]);
  }
});

var $export$67 = _export;
var toIObject$8 = _toIobject;
var toInteger$5 = _toInteger;
var toLength$8 = _toLength;
var $native$1 = [].lastIndexOf;
var NEGATIVE_ZERO$1 = !!$native$1 && 1 / [1].lastIndexOf(1, -0) < 0;

$export$67($export$67.P + $export$67.F * (NEGATIVE_ZERO$1 || !_strictMethod($native$1)), 'Array', {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
    // convert -0 to +0
    if (NEGATIVE_ZERO$1) return $native$1.apply(this, arguments) || 0;
    var O = toIObject$8(this);
    var length = toLength$8(O.length);
    var index = length - 1;
    if (arguments.length > 1) index = Math.min(index, toInteger$5(arguments[1]));
    if (index < 0) index = length + index;
    for (; index >= 0; index--) {
      if (index in O) if (O[index] === searchElement) return index || 0;
    }return -1;
  }
});

var toObject$9 = _toObject;
var toAbsoluteIndex$3 = _toAbsoluteIndex;
var toLength$9 = _toLength;

var _arrayCopyWithin = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject$9(this);
  var len = toLength$9(O.length);
  var to = toAbsoluteIndex$3(target, len);
  var from = toAbsoluteIndex$3(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = Math.min((end === undefined ? len : toAbsoluteIndex$3(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];else delete O[to];
    to += inc;
    from += inc;
  }return O;
};

var UNSCOPABLES = _wks('unscopables');
var ArrayProto$1 = Array.prototype;
if (ArrayProto$1[UNSCOPABLES] == undefined) _hide(ArrayProto$1, UNSCOPABLES, {});
var _addToUnscopables = function _addToUnscopables(key) {
  ArrayProto$1[UNSCOPABLES][key] = true;
};

var $export$68 = _export;

$export$68($export$68.P, 'Array', { copyWithin: _arrayCopyWithin });

_addToUnscopables('copyWithin');

var toObject$10 = _toObject;
var toAbsoluteIndex$4 = _toAbsoluteIndex;
var toLength$10 = _toLength;
var _arrayFill = function fill(value /* , start = 0, end = @length */) {
  var O = toObject$10(this);
  var length = toLength$10(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex$4(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex$4(end, length);
  while (endPos > index) {
    O[index++] = value;
  }return O;
};

var $export$69 = _export;

$export$69($export$69.P, 'Array', { fill: _arrayFill });

_addToUnscopables('fill');

var $export$70 = _export;
var $find = _arrayMethods(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () {
  forced = false;
});
$export$70($export$70.P + $export$70.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
_addToUnscopables(KEY);

var $export$71 = _export;
var $find$1 = _arrayMethods(6);
var KEY$1 = 'findIndex';
var forced$1 = true;
// Shouldn't skip holes
if (KEY$1 in []) Array(1)[KEY$1](function () {
  forced$1 = false;
});
$export$71($export$71.P + $export$71.F * forced$1, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
_addToUnscopables(KEY$1);

var global$5 = _global;
var dP$6 = _objectDp;
var DESCRIPTORS$1 = _descriptors;
var SPECIES$1 = _wks('species');

var _setSpecies = function _setSpecies(KEY) {
  var C = global$5[KEY];
  if (DESCRIPTORS$1 && C && !C[SPECIES$1]) dP$6.f(C, SPECIES$1, {
    configurable: true,
    get: function get() {
      return this;
    }
  });
};

_setSpecies('Array');

var _iterStep = function _iterStep(done, value) {
  return { value: value, done: !!done };
};

var addToUnscopables = _addToUnscopables;
var step = _iterStep;
var Iterators$3 = _iterators;
var toIObject$9 = _toIobject;

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
var es6_array_iterator = _iterDefine(Array, 'Array', function (iterated, kind) {
  this._t = toIObject$9(iterated); // target
  this._i = 0; // next index
  this._k = kind; // kind
  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators$3.Arguments = Iterators$3.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

var anObject$7 = _anObject;
var _flags = function _flags() {
  var that = anObject$7(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};

var global$6 = _global;
var inheritIfRequired$1 = _inheritIfRequired;
var dP$7 = _objectDp.f;
var gOPN$3 = _objectGopn.f;
var isRegExp$1 = _isRegexp;
var $flags = _flags;
var $RegExp = global$6.RegExp;
var Base$1 = $RegExp;
var proto$2 = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (_descriptors && (!CORRECT_NEW || _fails(function () {
  re2[_wks('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp$1(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p : inheritIfRequired$1(CORRECT_NEW ? new Base$1(piRE && !fiU ? p.source : p, f) : Base$1((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f), tiRE ? this : proto$2, $RegExp);
  };
  var proxy = function proxy(key) {
    key in $RegExp || dP$7($RegExp, key, {
      configurable: true,
      get: function get() {
        return Base$1[key];
      },
      set: function set(it) {
        Base$1[key] = it;
      }
    });
  };
  for (var keys$1 = gOPN$3(Base$1), i = 0; keys$1.length > i;) {
    proxy(keys$1[i++]);
  }proto$2.constructor = $RegExp;
  $RegExp.prototype = proto$2;
  _redefine(global$6, 'RegExp', $RegExp);
}

_setSpecies('RegExp');

var regexpFlags = _flags;

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
}();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

var _regexpExec = patchedExec;

var regexpExec = _regexpExec;
_export({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});

if (_descriptors && /./g.flags != 'g') _objectDp.f(RegExp.prototype, 'flags', {
  configurable: true,
  get: _flags
});

var anObject$8 = _anObject;
var $flags$1 = _flags;
var DESCRIPTORS$2 = _descriptors;
var TO_STRING$1 = 'toString';
var $toString$1 = /./[TO_STRING$1];

var define$1 = function define(fn) {
  _redefine(RegExp.prototype, TO_STRING$1, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (_fails(function () {
  return $toString$1.call({ source: 'a', flags: 'b' }) != '/a/b';
})) {
  define$1(function toString() {
    var R = anObject$8(this);
    return '/'.concat(R.source, '/', 'flags' in R ? R.flags : !DESCRIPTORS$2 && R instanceof RegExp ? $flags$1.call(R) : undefined);
  });
  // FF44- RegExp#toString has a wrong name
} else if ($toString$1.name != TO_STRING$1) {
  define$1(function toString() {
    return $toString$1.call(this);
  });
}

var at = _stringAt(true);

// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
var _advanceStringIndex = function _advanceStringIndex(S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};

var classof$2 = _classof;
var builtinExec = RegExp.prototype.exec;

// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
var _regexpExecAbstract = function _regexpExecAbstract(R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if ((typeof result === 'undefined' ? 'undefined' : _typeof(result)) !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof$2(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};

var redefine$3 = _redefine;
var hide$2 = _hide;
var fails$7 = _fails;
var defined$7 = _defined;
var wks$1 = _wks;
var regexpExec$1 = _regexpExec;

var SPECIES$2 = wks$1('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails$7(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () {
    return originalExec.apply(this, arguments);
  };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
}();

var _fixReWks = function _fixReWks(KEY, length, exec) {
  var SYMBOL = wks$1(KEY);

  var DELEGATES_TO_SYMBOL = !fails$7(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () {
      return 7;
    };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails$7(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () {
      execCalled = true;return null;
    };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES$2] = function () {
        return re;
      };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS || KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(defined$7, SYMBOL, ''[KEY], function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec$1) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    });
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine$3(String.prototype, KEY, strfn);
    hide$2(RegExp.prototype, SYMBOL, length == 2
    // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
    // 21.2.5.11 RegExp.prototype[@@split](string, limit)
    ? function (string, arg) {
      return rxfn.call(string, this, arg);
    }
    // 21.2.5.6 RegExp.prototype[@@match](string)
    // 21.2.5.9 RegExp.prototype[@@search](string)
    : function (string) {
      return rxfn.call(string, this);
    });
  }
};

var anObject$9 = _anObject;
var toLength$11 = _toLength;
var advanceStringIndex = _advanceStringIndex;
var regExpExec = _regexpExecAbstract;

// @@match logic
_fixReWks('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [
  // `String.prototype.match` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.match
  function match(regexp) {
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  },
  // `RegExp.prototype[@@match]` method
  // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
  function (regexp) {
    var res = maybeCallNative($match, regexp, this);
    if (res.done) return res.value;
    var rx = anObject$9(regexp);
    var S = String(this);
    if (!rx.global) return regExpExec(rx, S);
    var fullUnicode = rx.unicode;
    rx.lastIndex = 0;
    var A = [];
    var n = 0;
    var result;
    while ((result = regExpExec(rx, S)) !== null) {
      var matchStr = String(result[0]);
      A[n] = matchStr;
      if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength$11(rx.lastIndex), fullUnicode);
      n++;
    }
    return n === 0 ? null : A;
  }];
});

var anObject$10 = _anObject;
var toObject$11 = _toObject;
var toLength$12 = _toLength;
var toInteger$6 = _toInteger;
var advanceStringIndex$1 = _advanceStringIndex;
var regExpExec$1 = _regexpExecAbstract;
var max$1 = Math.max;
var min$2 = Math.min;
var floor$3 = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function maybeToString(it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
_fixReWks('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
  // `String.prototype.replace` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.replace
  function replace(searchValue, replaceValue) {
    var O = defined(this);
    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined ? fn.call(searchValue, O, replaceValue) : $replace.call(String(O), searchValue, replaceValue);
  },
  // `RegExp.prototype[@@replace]` method
  // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
  function (regexp, replaceValue) {
    var res = maybeCallNative($replace, regexp, this, replaceValue);
    if (res.done) return res.value;

    var rx = anObject$10(regexp);
    var S = String(this);
    var functionalReplace = typeof replaceValue === 'function';
    if (!functionalReplace) replaceValue = String(replaceValue);
    var global = rx.global;
    if (global) {
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
    }
    var results = [];
    while (true) {
      var result = regExpExec$1(rx, S);
      if (result === null) break;
      results.push(result);
      if (!global) break;
      var matchStr = String(result[0]);
      if (matchStr === '') rx.lastIndex = advanceStringIndex$1(S, toLength$12(rx.lastIndex), fullUnicode);
    }
    var accumulatedResult = '';
    var nextSourcePosition = 0;
    for (var i = 0; i < results.length; i++) {
      result = results[i];
      var matched = String(result[0]);
      var position = max$1(min$2(toInteger$6(result.index), S.length), 0);
      var captures = [];
      // NOTE: This is equivalent to
      //   captures = result.slice(1).map(maybeToString)
      // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
      // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
      // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
      for (var j = 1; j < result.length; j++) {
        captures.push(maybeToString(result[j]));
      }var namedCaptures = result.groups;
      if (functionalReplace) {
        var replacerArgs = [matched].concat(captures, position, S);
        if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
        var replacement = String(replaceValue.apply(undefined, replacerArgs));
      } else {
        replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
      }
      if (position >= nextSourcePosition) {
        accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
        nextSourcePosition = position + matched.length;
      }
    }
    return accumulatedResult + S.slice(nextSourcePosition);
  }];

  // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject$11(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$':
          return '$';
        case '&':
          return matched;
        case '`':
          return str.slice(0, position);
        case "'":
          return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default:
          // \d\d?
          var n = +ch;
          if (n === 0) return ch;
          if (n > m) {
            var f = floor$3(n / 10);
            if (f === 0) return ch;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return ch;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});

var anObject$11 = _anObject;
var sameValue = _sameValue;
var regExpExec$2 = _regexpExecAbstract;

// @@search logic
_fixReWks('search', 1, function (defined, SEARCH, $search, maybeCallNative) {
  return [
  // `String.prototype.search` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.search
  function search(regexp) {
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[SEARCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
  },
  // `RegExp.prototype[@@search]` method
  // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
  function (regexp) {
    var res = maybeCallNative($search, regexp, this);
    if (res.done) return res.value;
    var rx = anObject$11(regexp);
    var S = String(this);
    var previousLastIndex = rx.lastIndex;
    if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
    var result = regExpExec$2(rx, S);
    if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
    return result === null ? -1 : result.index;
  }];
});

var anObject$13 = _anObject;
var aFunction$4 = _aFunction;
var SPECIES$3 = _wks('species');
var _speciesConstructor = function _speciesConstructor(O, D) {
  var C = anObject$13(O).constructor;
  var S;
  return C === undefined || (S = anObject$13(C)[SPECIES$3]) == undefined ? D : aFunction$4(S);
};

var isRegExp$2 = _isRegexp;
var anObject$12 = _anObject;
var speciesConstructor$1 = _speciesConstructor;
var advanceStringIndex$2 = _advanceStringIndex;
var toLength$13 = _toLength;
var callRegExpExec = _regexpExecAbstract;
var regexpExec$2 = _regexpExec;
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX$1 = 'lastIndex';

// eslint-disable-next-line no-empty
var SUPPORTS_Y = !!function () {
  try {
    return new RegExp('x', 'y');
  } catch (e) {}
}();

// @@split logic
_fixReWks('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if ('abbc'[$SPLIT](/(b)*/)[1] == 'c' || 'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 || 'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 || '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 || '.'[$SPLIT](/()()/)[LENGTH] > 1 || ''[$SPLIT](/.?/)[LENGTH]) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function internalSplit(separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp$2(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec$2.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX$1];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX$1] === match.index) separatorCopy[LAST_INDEX$1]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
    // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function internalSplit(separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
  // `String.prototype.split` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.split
  function split(separator, limit) {
    var O = defined(this);
    var splitter = separator == undefined ? undefined : separator[SPLIT];
    return splitter !== undefined ? splitter.call(separator, O, limit) : internalSplit.call(String(O), separator, limit);
  },
  // `RegExp.prototype[@@split]` method
  // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
  //
  // NOTE: This cannot be properly polyfilled in engines that don't support
  // the 'y' flag.
  function (regexp, limit) {
    var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
    if (res.done) return res.value;

    var rx = anObject$12(regexp);
    var S = String(this);
    var C = speciesConstructor$1(rx, RegExp);

    var unicodeMatching = rx.unicode;
    var flags = (rx.ignoreCase ? 'i' : '') + (rx.multiline ? 'm' : '') + (rx.unicode ? 'u' : '') + (SUPPORTS_Y ? 'y' : 'g');

    // ^(? + rx + ) is needed, in combination with some S slicing, to
    // simulate the 'y' flag.
    var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
    var lim = limit === undefined ? 0xffffffff : limit >>> 0;
    if (lim === 0) return [];
    if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
    var p = 0;
    var q = 0;
    var A = [];
    while (q < S.length) {
      splitter.lastIndex = SUPPORTS_Y ? q : 0;
      var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
      var e;
      if (z === null || (e = $min(toLength$13(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p) {
        q = advanceStringIndex$2(S, q, unicodeMatching);
      } else {
        A.push(S.slice(p, q));
        if (A.length === lim) return A;
        for (var i = 1; i <= z.length - 1; i++) {
          A.push(z[i]);
          if (A.length === lim) return A;
        }
        q = p = e;
      }
    }
    A.push(S.slice(p));
    return A;
  }];
});

var _anInstance = function _anInstance(it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
    throw TypeError(name + ': incorrect invocation!');
  }return it;
};

var _forOf = createCommonjsModule(function (module) {
  var ctx = _ctx;
  var call = _iterCall;
  var isArrayIter = _isArrayIter;
  var anObject = _anObject;
  var toLength = _toLength;
  var getIterFn = core_getIteratorMethod;
  var BREAK = {};
  var RETURN = {};
  var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
    var iterFn = ITERATOR ? function () {
      return iterable;
    } : getIterFn(iterable);
    var f = ctx(fn, that, entries ? 2 : 1);
    var index = 0;
    var length, step, iterator, result;
    if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
    // fast case for arrays with default iterator
    if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
      result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
      if (result === BREAK || result === RETURN) return result;
    } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
      result = call(iterator, f, step.value, entries);
      if (result === BREAK || result === RETURN) return result;
    }
  };
  exports.BREAK = BREAK;
  exports.RETURN = RETURN;
});

var ctx$4 = _ctx;
var invoke$1 = _invoke;
var html$1 = _html;
var cel = _domCreate;
var global$8 = _global;
var process$1 = global$8.process;
var setTask = global$8.setImmediate;
var clearTask = global$8.clearImmediate;
var MessageChannel = global$8.MessageChannel;
var Dispatch = global$8.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer;
var channel;
var port;
var run = function run() {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function listener(event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) {
      args.push(arguments[i++]);
    }queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke$1(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (_cof(process$1) == 'process') {
    defer = function defer(id) {
      process$1.nextTick(ctx$4(run, id, 1));
    };
    // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function defer(id) {
      Dispatch.now(ctx$4(run, id, 1));
    };
    // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx$4(port.postMessage, port, 1);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global$8.addEventListener && typeof postMessage == 'function' && !global$8.importScripts) {
    defer = function defer(id) {
      global$8.postMessage(id + '', '*');
    };
    global$8.addEventListener('message', listener, false);
    // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function defer(id) {
      html$1.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html$1.removeChild(this);
        run.call(id);
      };
    };
    // Rest old browsers
  } else {
    defer = function defer(id) {
      setTimeout(ctx$4(run, id, 1), 0);
    };
  }
}
var _task = {
  set: setTask,
  clear: clearTask
};

var global$9 = _global;
var macrotask = _task.set;
var Observer = global$9.MutationObserver || global$9.WebKitMutationObserver;
var process$2 = global$9.process;
var Promise$1 = global$9.Promise;
var isNode$1 = _cof(process$2) == 'process';

var _microtask = function _microtask() {
  var head, last, notify;

  var flush = function flush() {
    var parent, fn;
    if (isNode$1 && (parent = process$2.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();else last = undefined;
        throw e;
      }
    }last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode$1) {
    notify = function notify() {
      process$2.nextTick(flush);
    };
    // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global$9.navigator && global$9.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function notify() {
      node.data = toggle = !toggle;
    };
    // environments with maybe non-completely correct, but existent Promise
  } else if (Promise$1 && Promise$1.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise$1.resolve(undefined);
    notify = function notify() {
      promise.then(flush);
    };
    // for other environments - macrotask based on:
    // - setImmediate
    // - MessageChannel
    // - window.postMessag
    // - onreadystatechange
    // - setTimeout
  } else {
    notify = function notify() {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global$9, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    }last = task;
  };
};

var aFunction$6 = _aFunction;

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction$6(resolve);
  this.reject = aFunction$6(reject);
}

var f$8 = function f(C) {
  return new PromiseCapability(C);
};

var _newPromiseCapability = {
  f: f$8
};

var _perform = function _perform(exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};

var global$10 = _global;
var navigator = global$10.navigator;

var _userAgent = navigator && navigator.userAgent || '';

var anObject$14 = _anObject;
var isObject$18 = _isObject;
var newPromiseCapability$1 = _newPromiseCapability;

var _promiseResolve = function _promiseResolve(C, x) {
  anObject$14(C);
  if (isObject$18(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability$1.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

var redefine$4 = _redefine;
var _redefineAll = function _redefineAll(target, src, safe) {
  for (var key in src) {
    redefine$4(target, key, src[key], safe);
  }return target;
};

var LIBRARY$2 = _library;
var global$7 = _global;
var ctx$3 = _ctx;
var classof$3 = _classof;
var $export$72 = _export;
var isObject$17 = _isObject;
var aFunction$5 = _aFunction;
var anInstance = _anInstance;
var forOf = _forOf;
var speciesConstructor$2 = _speciesConstructor;
var task = _task.set;
var microtask = _microtask();
var newPromiseCapabilityModule = _newPromiseCapability;
var perform = _perform;
var userAgent = _userAgent;
var promiseResolve = _promiseResolve;
var PROMISE = 'Promise';
var TypeError$1 = global$7.TypeError;
var process = global$7.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global$7[PROMISE];
var isNode = classof$3(process) == 'process';
var empty = function empty() {/* empty */};
var Internal;
var newGenericPromiseCapability;
var OwnPromiseCapability;
var Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE$1 = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[_wks('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise
    // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // we can't detect it synchronously, so just check versions
    && v8.indexOf('6.6') !== 0 && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) {/* empty */}
}();

// helpers
var isThenable = function isThenable(it) {
  var then;
  return isObject$17(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function notify(promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function run(reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError$1('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) {
      run(chain[i++]);
    } // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function onUnhandled(promise) {
  task.call(global$7, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global$7.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global$7.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    }promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function isUnhandled(promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function onHandleUnhandled(promise) {
  task.call(global$7, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global$7.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function $reject(value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function $resolve(value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError$1("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx$3($resolve, wrapper, 1), ctx$3($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE$1) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction$5(executor);
    Internal.call(this);
    try {
      executor(ctx$3($resolve, this, 1), ctx$3($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = []; // <- awaiting reactions
    this._a = undefined; // <- checked in isUnhandled reactions
    this._s = 0; // <- state
    this._d = false; // <- done
    this._v = undefined; // <- value
    this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false; // <- notify
  };
  Internal.prototype = _redefineAll($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor$2(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function _catch(onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function OwnPromiseCapability() {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx$3($resolve, promise, 1);
    this.reject = ctx$3($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function newPromiseCapability(C) {
    return C === $Promise || C === Wrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
  };
}

$export$72($export$72.G + $export$72.W + $export$72.F * !USE_NATIVE$1, { Promise: $Promise });
_setToStringTag($Promise, PROMISE);
_setSpecies(PROMISE);
Wrapper = _core[PROMISE];

// statics
$export$72($export$72.S + $export$72.F * !USE_NATIVE$1, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export$72($export$72.S + $export$72.F * (LIBRARY$2 || !USE_NATIVE$1), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY$2 && this === Wrapper ? $Promise : this, x);
  }
});
$export$72($export$72.S + $export$72.F * !(USE_NATIVE$1 && _iterDetect(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});

var isObject$19 = _isObject;
var _validateCollection = function _validateCollection(it, TYPE) {
  if (!isObject$19(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};

var dP$8 = _objectDp.f;
var create$1 = _objectCreate;
var redefineAll = _redefineAll;
var ctx$5 = _ctx;
var anInstance$1 = _anInstance;
var forOf$1 = _forOf;
var $iterDefine = _iterDefine;
var step$1 = _iterStep;
var setSpecies = _setSpecies;
var DESCRIPTORS$3 = _descriptors;
var fastKey = _meta.fastKey;
var validate$1 = _validateCollection;
var SIZE = DESCRIPTORS$3 ? '_s' : 'size';

var getEntry = function getEntry(that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

var _collectionStrong = {
  getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance$1(that, C, NAME, '_i');
      that._t = NAME; // collection type
      that._i = create$1(null); // index
      that._f = undefined; // first entry
      that._l = undefined; // last entry
      that[SIZE] = 0; // size
      if (iterable != undefined) forOf$1(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate$1(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function _delete(key) {
        var that = validate$1(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        }return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate$1(this, NAME);
        var f = ctx$5(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) {
            entry = entry.p;
          }
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate$1(this, NAME), key);
      }
    });
    if (DESCRIPTORS$3) dP$8(C.prototype, 'size', {
      get: function get() {
        return validate$1(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function def(that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
      // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key, // <- key
        v: value, // <- value
        p: prev = that._l, // <- previous entry
        n: undefined, // <- next entry
        r: false // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    }return that;
  },
  getEntry: getEntry,
  setStrong: function setStrong(C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate$1(iterated, NAME); // target
      this._k = kind; // kind
      this._l = undefined; // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) {
        entry = entry.p;
      } // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step$1(1);
      }
      // return step by kind
      if (kind == 'keys') return step$1(0, entry.k);
      if (kind == 'values') return step$1(0, entry.v);
      return step$1(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};

var global$11 = _global;
var $export$73 = _export;
var redefine$5 = _redefine;
var redefineAll$1 = _redefineAll;
var meta$3 = _meta;
var forOf$2 = _forOf;
var anInstance$2 = _anInstance;
var isObject$20 = _isObject;
var fails$8 = _fails;
var $iterDetect = _iterDetect;
var setToStringTag$3 = _setToStringTag;
var inheritIfRequired$2 = _inheritIfRequired;

var _collection = function _collection(NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global$11[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function fixMethod(KEY) {
    var fn = proto[KEY];
    redefine$5(proto, KEY, KEY == 'delete' ? function (a) {
      return IS_WEAK && !isObject$20(a) ? false : fn.call(this, a === 0 ? 0 : a);
    } : KEY == 'has' ? function has(a) {
      return IS_WEAK && !isObject$20(a) ? false : fn.call(this, a === 0 ? 0 : a);
    } : KEY == 'get' ? function get(a) {
      return IS_WEAK && !isObject$20(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
    } : KEY == 'add' ? function add(a) {
      fn.call(this, a === 0 ? 0 : a);return this;
    } : function set(a, b) {
      fn.call(this, a === 0 ? 0 : a, b);return this;
    });
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails$8(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll$1(C.prototype, methods);
    meta$3.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails$8(function () {
      instance.has(1);
    });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) {
      new C(iter);
    }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails$8(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) {
        $instance[ADDER](index, index);
      }return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance$2(target, C, NAME);
        var that = inheritIfRequired$2(new Base(), target, C);
        if (iterable != undefined) forOf$2(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag$3(C, NAME);

  O[NAME] = C;
  $export$73($export$73.G + $export$73.W + $export$73.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};

var strong = _collectionStrong;
var validate = _validateCollection;
var MAP = 'Map';

// 23.1 Map Objects
var es6_map = _collection(MAP, function (get) {
  return function Map() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);

var strong$1 = _collectionStrong;
var validate$2 = _validateCollection;
var SET = 'Set';

// 23.2 Set Objects
var es6_set = _collection(SET, function (get) {
  return function Set() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong$1.def(validate$2(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong$1);

var redefineAll$2 = _redefineAll;
var getWeak = _meta.getWeak;
var anObject$15 = _anObject;
var isObject$21 = _isObject;
var anInstance$3 = _anInstance;
var forOf$3 = _forOf;
var createArrayMethod = _arrayMethods;
var $has = _has;
var validate$3 = _validateCollection;
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id$1 = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function uncaughtFrozenStore(that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function UncaughtFrozenStore() {
  this.a = [];
};
var findUncaughtFrozen = function findUncaughtFrozen(store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function get(key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function has(key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function set(key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;else this.a.push([key, value]);
  },
  'delete': function _delete(key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

var _collectionWeak = {
  getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance$3(that, C, NAME, '_i');
      that._t = NAME; // collection type
      that._i = id$1++; // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf$3(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll$2(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function _delete(key) {
        if (!isObject$21(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate$3(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject$21(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate$3(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function def(that, key, value) {
    var data = getWeak(anObject$15(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};

var es6_weakMap = createCommonjsModule(function (module) {
  'use strict';

  var each = _arrayMethods(0);
  var redefine = _redefine;
  var meta = _meta;
  var assign = _objectAssign;
  var weak = _collectionWeak;
  var isObject = _isObject;
  var fails = _fails;
  var validate = _validateCollection;
  var WEAK_MAP = 'WeakMap';
  var getWeak = meta.getWeak;
  var isExtensible = Object.isExtensible;
  var uncaughtFrozenStore = weak.ufstore;
  var tmp = {};
  var InternalMap;

  var wrapper = function wrapper(get) {
    return function WeakMap() {
      return get(this, arguments.length > 0 ? arguments[0] : undefined);
    };
  };

  var methods = {
    // 23.3.3.3 WeakMap.prototype.get(key)
    get: function get(key) {
      if (isObject(key)) {
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
        return data ? data[this._i] : undefined;
      }
    },
    // 23.3.3.5 WeakMap.prototype.set(key, value)
    set: function set(key, value) {
      return weak.def(validate(this, WEAK_MAP), key, value);
    }
  };

  // 23.3 WeakMap Objects
  var $WeakMap = module.exports = _collection(WEAK_MAP, wrapper, methods, weak, true, true);

  // IE11 WeakMap frozen keys fix
  if (fails(function () {
    return new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7;
  })) {
    InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
    assign(InternalMap.prototype, methods);
    meta.NEED = true;
    each(['delete', 'has', 'get', 'set'], function (key) {
      var proto = $WeakMap.prototype;
      var method = proto[key];
      redefine(proto, key, function (a, b) {
        // store frozen objects on internal weakmap shim
        if (isObject(a) && !isExtensible(a)) {
          if (!this._f) this._f = new InternalMap();
          var result = this._f[key](a, b);
          return key == 'set' ? this : result;
          // store all the rest on native weakmap
        }return method.call(this, a, b);
      });
    });
  }
});

var weak = _collectionWeak;
var validate$4 = _validateCollection;
var WEAK_SET = 'WeakSet';

// 23.4 WeakSet Objects
_collection(WEAK_SET, function (get) {
  return function WeakSet() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value) {
    return weak.def(validate$4(this, WEAK_SET), value, true);
  }
}, weak, false, true);

var global$12 = _global;
var hide$3 = _hide;
var uid$2 = _uid;
var TYPED = uid$2('typed_array');
var VIEW$1 = uid$2('view');
var ABV = !!(global$12.ArrayBuffer && global$12.DataView);
var CONSTR = ABV;
var i$1 = 0;
var l = 9;
var Typed;

var TypedArrayConstructors = 'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'.split(',');

while (i$1 < l) {
  if (Typed = global$12[TypedArrayConstructors[i$1++]]) {
    hide$3(Typed.prototype, TYPED, true);
    hide$3(Typed.prototype, VIEW$1, true);
  } else CONSTR = false;
}

var _typed = {
  ABV: ABV,
  CONSTR: CONSTR,
  TYPED: TYPED,
  VIEW: VIEW$1
};

var toInteger$7 = _toInteger;
var toLength$15 = _toLength;
var _toIndex = function _toIndex(it) {
  if (it === undefined) return 0;
  var number = toInteger$7(it);
  var length = toLength$15(number);
  if (number !== length) throw RangeError('Wrong length!');
  return length;
};

var _typedBuffer = createCommonjsModule(function (module, exports) {
  'use strict';

  var global = _global;
  var DESCRIPTORS = _descriptors;
  var LIBRARY = _library;
  var $typed = _typed;
  var hide = _hide;
  var redefineAll = _redefineAll;
  var fails = _fails;
  var anInstance = _anInstance;
  var toInteger = _toInteger;
  var toLength = _toLength;
  var toIndex = _toIndex;
  var gOPN = _objectGopn.f;
  var dP = _objectDp.f;
  var arrayFill = _arrayFill;
  var setToStringTag = _setToStringTag;
  var ARRAY_BUFFER = 'ArrayBuffer';
  var DATA_VIEW = 'DataView';
  var PROTOTYPE = 'prototype';
  var WRONG_LENGTH = 'Wrong length!';
  var WRONG_INDEX = 'Wrong index!';
  var $ArrayBuffer = global[ARRAY_BUFFER];
  var $DataView = global[DATA_VIEW];
  var Math = global.Math;
  var RangeError = global.RangeError;
  // eslint-disable-next-line no-shadow-restricted-names
  var Infinity = global.Infinity;
  var BaseBuffer = $ArrayBuffer;
  var abs = Math.abs;
  var pow = Math.pow;
  var floor = Math.floor;
  var log = Math.log;
  var LN2 = Math.LN2;
  var BUFFER = 'buffer';
  var BYTE_LENGTH = 'byteLength';
  var BYTE_OFFSET = 'byteOffset';
  var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
  var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
  var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;

  // IEEE754 conversions based on https://github.com/feross/ieee754
  function packIEEE754(value, mLen, nBytes) {
    var buffer = new Array(nBytes);
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
    var i = 0;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    var e, m, c;
    value = abs(value);
    // eslint-disable-next-line no-self-compare
    if (value != value || value === Infinity) {
      // eslint-disable-next-line no-self-compare
      m = value != value ? 1 : 0;
      e = eMax;
    } else {
      e = floor(log(value) / LN2);
      if (value * (c = pow(2, -e)) < 1) {
        e--;
        c *= 2;
      }
      if (e + eBias >= 1) {
        value += rt / c;
      } else {
        value += rt * pow(2, 1 - eBias);
      }
      if (value * c >= 2) {
        e++;
        c /= 2;
      }
      if (e + eBias >= eMax) {
        m = 0;
        e = eMax;
      } else if (e + eBias >= 1) {
        m = (value * c - 1) * pow(2, mLen);
        e = e + eBias;
      } else {
        m = value * pow(2, eBias - 1) * pow(2, mLen);
        e = 0;
      }
    }
    for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8) {}
    e = e << mLen | m;
    eLen += mLen;
    for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8) {}
    buffer[--i] |= s * 128;
    return buffer;
  }
  function unpackIEEE754(buffer, mLen, nBytes) {
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = eLen - 7;
    var i = nBytes - 1;
    var s = buffer[i--];
    var e = s & 127;
    var m;
    s >>= 7;
    for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8) {}
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8) {}
    if (e === 0) {
      e = 1 - eBias;
    } else if (e === eMax) {
      return m ? NaN : s ? -Infinity : Infinity;
    } else {
      m = m + pow(2, mLen);
      e = e - eBias;
    }return (s ? -1 : 1) * m * pow(2, e - mLen);
  }

  function unpackI32(bytes) {
    return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
  }
  function packI8(it) {
    return [it & 0xff];
  }
  function packI16(it) {
    return [it & 0xff, it >> 8 & 0xff];
  }
  function packI32(it) {
    return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
  }
  function packF64(it) {
    return packIEEE754(it, 52, 8);
  }
  function packF32(it) {
    return packIEEE754(it, 23, 4);
  }

  function addGetter(C, key, internal) {
    dP(C[PROTOTYPE], key, { get: function get() {
        return this[internal];
      } });
  }

  function get(view, bytes, index, isLittleEndian) {
    var numIndex = +index;
    var intIndex = toIndex(numIndex);
    if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
    var store = view[$BUFFER]._b;
    var start = intIndex + view[$OFFSET];
    var pack = store.slice(start, start + bytes);
    return isLittleEndian ? pack : pack.reverse();
  }
  function set(view, bytes, index, conversion, value, isLittleEndian) {
    var numIndex = +index;
    var intIndex = toIndex(numIndex);
    if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
    var store = view[$BUFFER]._b;
    var start = intIndex + view[$OFFSET];
    var pack = conversion(+value);
    for (var i = 0; i < bytes; i++) {
      store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
    }
  }

  if (!$typed.ABV) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
      var byteLength = toIndex(length);
      this._b = arrayFill.call(new Array(byteLength), 0);
      this[$LENGTH] = byteLength;
    };

    $DataView = function DataView(buffer, byteOffset, byteLength) {
      anInstance(this, $DataView, DATA_VIEW);
      anInstance(buffer, $ArrayBuffer, DATA_VIEW);
      var bufferLength = buffer[$LENGTH];
      var offset = toInteger(byteOffset);
      if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
      byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
      if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
      this[$BUFFER] = buffer;
      this[$OFFSET] = offset;
      this[$LENGTH] = byteLength;
    };

    if (DESCRIPTORS) {
      addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
      addGetter($DataView, BUFFER, '_b');
      addGetter($DataView, BYTE_LENGTH, '_l');
      addGetter($DataView, BYTE_OFFSET, '_o');
    }

    redefineAll($DataView[PROTOTYPE], {
      getInt8: function getInt8(byteOffset) {
        return get(this, 1, byteOffset)[0] << 24 >> 24;
      },
      getUint8: function getUint8(byteOffset) {
        return get(this, 1, byteOffset)[0];
      },
      getInt16: function getInt16(byteOffset /* , littleEndian */) {
        var bytes = get(this, 2, byteOffset, arguments[1]);
        return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
      },
      getUint16: function getUint16(byteOffset /* , littleEndian */) {
        var bytes = get(this, 2, byteOffset, arguments[1]);
        return bytes[1] << 8 | bytes[0];
      },
      getInt32: function getInt32(byteOffset /* , littleEndian */) {
        return unpackI32(get(this, 4, byteOffset, arguments[1]));
      },
      getUint32: function getUint32(byteOffset /* , littleEndian */) {
        return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
      },
      getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
        return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
      },
      getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
        return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
      },
      setInt8: function setInt8(byteOffset, value) {
        set(this, 1, byteOffset, packI8, value);
      },
      setUint8: function setUint8(byteOffset, value) {
        set(this, 1, byteOffset, packI8, value);
      },
      setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
        set(this, 2, byteOffset, packI16, value, arguments[2]);
      },
      setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
        set(this, 2, byteOffset, packI16, value, arguments[2]);
      },
      setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
        set(this, 4, byteOffset, packI32, value, arguments[2]);
      },
      setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
        set(this, 4, byteOffset, packI32, value, arguments[2]);
      },
      setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
        set(this, 4, byteOffset, packF32, value, arguments[2]);
      },
      setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
        set(this, 8, byteOffset, packF64, value, arguments[2]);
      }
    });
  } else {
    if (!fails(function () {
      $ArrayBuffer(1);
    }) || !fails(function () {
      new $ArrayBuffer(-1); // eslint-disable-line no-new
    }) || fails(function () {
      new $ArrayBuffer(); // eslint-disable-line no-new
      new $ArrayBuffer(1.5); // eslint-disable-line no-new
      new $ArrayBuffer(NaN); // eslint-disable-line no-new
      return $ArrayBuffer.name != ARRAY_BUFFER;
    })) {
      $ArrayBuffer = function ArrayBuffer(length) {
        anInstance(this, $ArrayBuffer);
        return new BaseBuffer(toIndex(length));
      };
      var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
      for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
        if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
      }
      if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
    }
    // iOS Safari 7.x bug
    var view = new $DataView(new $ArrayBuffer(2));
    var $setInt8 = $DataView[PROTOTYPE].setInt8;
    view.setInt8(0, 2147483648);
    view.setInt8(1, 2147483649);
    if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
      setInt8: function setInt8(byteOffset, value) {
        $setInt8.call(this, byteOffset, value << 24 >> 24);
      },
      setUint8: function setUint8(byteOffset, value) {
        $setInt8.call(this, byteOffset, value << 24 >> 24);
      }
    }, true);
  }
  setToStringTag($ArrayBuffer, ARRAY_BUFFER);
  setToStringTag($DataView, DATA_VIEW);
  hide($DataView[PROTOTYPE], $typed.VIEW, true);
  exports[ARRAY_BUFFER] = $ArrayBuffer;
  exports[DATA_VIEW] = $DataView;
});

var $export$74 = _export;
var $typed = _typed;
var buffer = _typedBuffer;
var anObject$16 = _anObject;
var toAbsoluteIndex$5 = _toAbsoluteIndex;
var toLength$14 = _toLength;
var isObject$22 = _isObject;
var ArrayBuffer = _global.ArrayBuffer;
var speciesConstructor$3 = _speciesConstructor;
var $ArrayBuffer = buffer.ArrayBuffer;
var $DataView = buffer.DataView;
var $isView = $typed.ABV && ArrayBuffer.isView;
var $slice = $ArrayBuffer.prototype.slice;
var VIEW = $typed.VIEW;
var ARRAY_BUFFER = 'ArrayBuffer';

$export$74($export$74.G + $export$74.W + $export$74.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });

$export$74($export$74.S + $export$74.F * !$typed.CONSTR, ARRAY_BUFFER, {
  // 24.1.3.1 ArrayBuffer.isView(arg)
  isView: function isView(it) {
    return $isView && $isView(it) || isObject$22(it) && VIEW in it;
  }
});

$export$74($export$74.P + $export$74.U + $export$74.F * _fails(function () {
  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
}), ARRAY_BUFFER, {
  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
  slice: function slice(start, end) {
    if ($slice !== undefined && end === undefined) return $slice.call(anObject$16(this), start); // FF fix
    var len = anObject$16(this).byteLength;
    var first = toAbsoluteIndex$5(start, len);
    var fin = toAbsoluteIndex$5(end === undefined ? len : end, len);
    var result = new (speciesConstructor$3(this, $ArrayBuffer))(toLength$14(fin - first));
    var viewS = new $DataView(this);
    var viewT = new $DataView(result);
    var index = 0;
    while (first < fin) {
      viewT.setUint8(index++, viewS.getUint8(first++));
    }return result;
  }
});

_setSpecies(ARRAY_BUFFER);

var $export$75 = _export;
$export$75($export$75.G + $export$75.W + $export$75.F * !_typed.ABV, {
  DataView: _typedBuffer.DataView
});

var _typedArray = createCommonjsModule(function (module) {
  'use strict';

  if (_descriptors) {
    var LIBRARY = _library;
    var global = _global;
    var fails = _fails;
    var $export = _export;
    var $typed = _typed;
    var $buffer = _typedBuffer;
    var ctx = _ctx;
    var anInstance = _anInstance;
    var propertyDesc = _propertyDesc;
    var hide = _hide;
    var redefineAll = _redefineAll;
    var toInteger = _toInteger;
    var toLength = _toLength;
    var toIndex = _toIndex;
    var toAbsoluteIndex = _toAbsoluteIndex;
    var toPrimitive = _toPrimitive;
    var has = _has;
    var classof = _classof;
    var isObject = _isObject;
    var toObject = _toObject;
    var isArrayIter = _isArrayIter;
    var create = _objectCreate;
    var getPrototypeOf = _objectGpo;
    var gOPN = _objectGopn.f;
    var getIterFn = core_getIteratorMethod;
    var uid = _uid;
    var wks = _wks;
    var createArrayMethod = _arrayMethods;
    var createArrayIncludes = _arrayIncludes;
    var speciesConstructor = _speciesConstructor;
    var ArrayIterators = es6_array_iterator;
    var Iterators = _iterators;
    var $iterDetect = _iterDetect;
    var setSpecies = _setSpecies;
    var arrayFill = _arrayFill;
    var arrayCopyWithin = _arrayCopyWithin;
    var $DP = _objectDp;
    var $GOPD = _objectGopd;
    var dP = $DP.f;
    var gOPD = $GOPD.f;
    var RangeError = global.RangeError;
    var TypeError = global.TypeError;
    var Uint8Array = global.Uint8Array;
    var ARRAY_BUFFER = 'ArrayBuffer';
    var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
    var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
    var PROTOTYPE = 'prototype';
    var ArrayProto = Array[PROTOTYPE];
    var $ArrayBuffer = $buffer.ArrayBuffer;
    var $DataView = $buffer.DataView;
    var arrayForEach = createArrayMethod(0);
    var arrayFilter = createArrayMethod(2);
    var arraySome = createArrayMethod(3);
    var arrayEvery = createArrayMethod(4);
    var arrayFind = createArrayMethod(5);
    var arrayFindIndex = createArrayMethod(6);
    var arrayIncludes = createArrayIncludes(true);
    var arrayIndexOf = createArrayIncludes(false);
    var arrayValues = ArrayIterators.values;
    var arrayKeys = ArrayIterators.keys;
    var arrayEntries = ArrayIterators.entries;
    var arrayLastIndexOf = ArrayProto.lastIndexOf;
    var arrayReduce = ArrayProto.reduce;
    var arrayReduceRight = ArrayProto.reduceRight;
    var arrayJoin = ArrayProto.join;
    var arraySort = ArrayProto.sort;
    var arraySlice = ArrayProto.slice;
    var arrayToString = ArrayProto.toString;
    var arrayToLocaleString = ArrayProto.toLocaleString;
    var ITERATOR = wks('iterator');
    var TAG = wks('toStringTag');
    var TYPED_CONSTRUCTOR = uid('typed_constructor');
    var DEF_CONSTRUCTOR = uid('def_constructor');
    var ALL_CONSTRUCTORS = $typed.CONSTR;
    var TYPED_ARRAY = $typed.TYPED;
    var VIEW = $typed.VIEW;
    var WRONG_LENGTH = 'Wrong length!';

    var $map = createArrayMethod(1, function (O, length) {
      return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
    });

    var LITTLE_ENDIAN = fails(function () {
      // eslint-disable-next-line no-undef
      return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
    });

    var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
      new Uint8Array(1).set({});
    });

    var toOffset = function toOffset(it, BYTES) {
      var offset = toInteger(it);
      if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
      return offset;
    };

    var validate = function validate(it) {
      if (isObject(it) && TYPED_ARRAY in it) return it;
      throw TypeError(it + ' is not a typed array!');
    };

    var allocate = function allocate(C, length) {
      if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
        throw TypeError('It is not a typed array constructor!');
      }return new C(length);
    };

    var speciesFromList = function speciesFromList(O, list) {
      return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
    };

    var fromList = function fromList(C, list) {
      var index = 0;
      var length = list.length;
      var result = allocate(C, length);
      while (length > index) {
        result[index] = list[index++];
      }return result;
    };

    var addGetter = function addGetter(it, key, internal) {
      dP(it, key, { get: function get$$1() {
          return this._d[internal];
        } });
    };

    var $from = function from(source /* , mapfn, thisArg */) {
      var O = toObject(source);
      var aLen = arguments.length;
      var mapfn = aLen > 1 ? arguments[1] : undefined;
      var mapping = mapfn !== undefined;
      var iterFn = getIterFn(O);
      var i, length, values, result, step, iterator;
      if (iterFn != undefined && !isArrayIter(iterFn)) {
        for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
          values.push(step.value);
        }O = values;
      }
      if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
      for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
        result[i] = mapping ? mapfn(O[i], i) : O[i];
      }
      return result;
    };

    var $of = function of() /* ...items */{
      var index = 0;
      var length = arguments.length;
      var result = allocate(this, length);
      while (length > index) {
        result[index] = arguments[index++];
      }return result;
    };

    // iOS Safari 6.x fails here
    var TO_LOCALE_BUG = !!Uint8Array && fails(function () {
      arrayToLocaleString.call(new Uint8Array(1));
    });

    var $toLocaleString = function toLocaleString() {
      return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
    };

    var proto = {
      copyWithin: function copyWithin(target, start /* , end */) {
        return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
      },
      every: function every(callbackfn /* , thisArg */) {
        return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      },
      fill: function fill(value /* , start, end */) {
        // eslint-disable-line no-unused-vars
        return arrayFill.apply(validate(this), arguments);
      },
      filter: function filter(callbackfn /* , thisArg */) {
        return speciesFromList(this, arrayFilter(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined));
      },
      find: function find(predicate /* , thisArg */) {
        return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
      },
      findIndex: function findIndex(predicate /* , thisArg */) {
        return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
      },
      forEach: function forEach(callbackfn /* , thisArg */) {
        arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      },
      indexOf: function indexOf(searchElement /* , fromIndex */) {
        return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
      },
      includes: function includes(searchElement /* , fromIndex */) {
        return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
      },
      join: function join(separator) {
        // eslint-disable-line no-unused-vars
        return arrayJoin.apply(validate(this), arguments);
      },
      lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) {
        // eslint-disable-line no-unused-vars
        return arrayLastIndexOf.apply(validate(this), arguments);
      },
      map: function map(mapfn /* , thisArg */) {
        return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
      },
      reduce: function reduce(callbackfn /* , initialValue */) {
        // eslint-disable-line no-unused-vars
        return arrayReduce.apply(validate(this), arguments);
      },
      reduceRight: function reduceRight(callbackfn /* , initialValue */) {
        // eslint-disable-line no-unused-vars
        return arrayReduceRight.apply(validate(this), arguments);
      },
      reverse: function reverse() {
        var that = this;
        var length = validate(that).length;
        var middle = Math.floor(length / 2);
        var index = 0;
        var value;
        while (index < middle) {
          value = that[index];
          that[index++] = that[--length];
          that[length] = value;
        }return that;
      },
      some: function some(callbackfn /* , thisArg */) {
        return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      },
      sort: function sort(comparefn) {
        return arraySort.call(validate(this), comparefn);
      },
      subarray: function subarray(begin, end) {
        var O = validate(this);
        var length = O.length;
        var $begin = toAbsoluteIndex(begin, length);
        return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(O.buffer, O.byteOffset + $begin * O.BYTES_PER_ELEMENT, toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin));
      }
    };

    var $slice = function slice(start, end) {
      return speciesFromList(this, arraySlice.call(validate(this), start, end));
    };

    var $set = function set$$1(arrayLike /* , offset */) {
      validate(this);
      var offset = toOffset(arguments[1], 1);
      var length = this.length;
      var src = toObject(arrayLike);
      var len = toLength(src.length);
      var index = 0;
      if (len + offset > length) throw RangeError(WRONG_LENGTH);
      while (index < len) {
        this[offset + index] = src[index++];
      }
    };

    var $iterators = {
      entries: function entries() {
        return arrayEntries.call(validate(this));
      },
      keys: function keys() {
        return arrayKeys.call(validate(this));
      },
      values: function values() {
        return arrayValues.call(validate(this));
      }
    };

    var isTAIndex = function isTAIndex(target, key) {
      return isObject(target) && target[TYPED_ARRAY] && (typeof key === 'undefined' ? 'undefined' : _typeof(key)) != 'symbol' && key in target && String(+key) == String(key);
    };
    var $getDesc = function getOwnPropertyDescriptor(target, key) {
      return isTAIndex(target, key = toPrimitive(key, true)) ? propertyDesc(2, target[key]) : gOPD(target, key);
    };
    var $setDesc = function defineProperty$$1(target, key, desc) {
      if (isTAIndex(target, key = toPrimitive(key, true)) && isObject(desc) && has(desc, 'value') && !has(desc, 'get') && !has(desc, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !desc.configurable && (!has(desc, 'writable') || desc.writable) && (!has(desc, 'enumerable') || desc.enumerable)) {
        target[key] = desc.value;
        return target;
      }return dP(target, key, desc);
    };

    if (!ALL_CONSTRUCTORS) {
      $GOPD.f = $getDesc;
      $DP.f = $setDesc;
    }

    $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
      getOwnPropertyDescriptor: $getDesc,
      defineProperty: $setDesc
    });

    if (fails(function () {
      arrayToString.call({});
    })) {
      arrayToString = arrayToLocaleString = function toString() {
        return arrayJoin.call(this);
      };
    }

    var $TypedArrayPrototype$ = redefineAll({}, proto);
    redefineAll($TypedArrayPrototype$, $iterators);
    hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
    redefineAll($TypedArrayPrototype$, {
      slice: $slice,
      set: $set,
      constructor: function constructor() {/* noop */},
      toString: arrayToString,
      toLocaleString: $toLocaleString
    });
    addGetter($TypedArrayPrototype$, 'buffer', 'b');
    addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
    addGetter($TypedArrayPrototype$, 'byteLength', 'l');
    addGetter($TypedArrayPrototype$, 'length', 'e');
    dP($TypedArrayPrototype$, TAG, {
      get: function get$$1() {
        return this[TYPED_ARRAY];
      }
    });

    // eslint-disable-next-line max-statements
    module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
      CLAMPED = !!CLAMPED;
      var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
      var GETTER = 'get' + KEY;
      var SETTER = 'set' + KEY;
      var TypedArray = global[NAME];
      var Base = TypedArray || {};
      var TAC = TypedArray && getPrototypeOf(TypedArray);
      var FORCED = !TypedArray || !$typed.ABV;
      var O = {};
      var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
      var getter = function getter(that, index) {
        var data = that._d;
        return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
      };
      var setter = function setter(that, index, value) {
        var data = that._d;
        if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
        data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
      };
      var addElement = function addElement(that, index) {
        dP(that, index, {
          get: function get$$1() {
            return getter(this, index);
          },
          set: function set$$1(value) {
            return setter(this, index, value);
          },
          enumerable: true
        });
      };
      if (FORCED) {
        TypedArray = wrapper(function (that, data, $offset, $length) {
          anInstance(that, TypedArray, NAME, '_d');
          var index = 0;
          var offset = 0;
          var buffer, byteLength, length, klass;
          if (!isObject(data)) {
            length = toIndex(data);
            byteLength = length * BYTES;
            buffer = new $ArrayBuffer(byteLength);
          } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
            buffer = data;
            offset = toOffset($offset, BYTES);
            var $len = data.byteLength;
            if ($length === undefined) {
              if ($len % BYTES) throw RangeError(WRONG_LENGTH);
              byteLength = $len - offset;
              if (byteLength < 0) throw RangeError(WRONG_LENGTH);
            } else {
              byteLength = toLength($length) * BYTES;
              if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
            }
            length = byteLength / BYTES;
          } else if (TYPED_ARRAY in data) {
            return fromList(TypedArray, data);
          } else {
            return $from.call(TypedArray, data);
          }
          hide(that, '_d', {
            b: buffer,
            o: offset,
            l: byteLength,
            e: length,
            v: new $DataView(buffer)
          });
          while (index < length) {
            addElement(that, index++);
          }
        });
        TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
        hide(TypedArrayPrototype, 'constructor', TypedArray);
      } else if (!fails(function () {
        TypedArray(1);
      }) || !fails(function () {
        new TypedArray(-1); // eslint-disable-line no-new
      }) || !$iterDetect(function (iter) {
        new TypedArray(); // eslint-disable-line no-new
        new TypedArray(null); // eslint-disable-line no-new
        new TypedArray(1.5); // eslint-disable-line no-new
        new TypedArray(iter); // eslint-disable-line no-new
      }, true)) {
        TypedArray = wrapper(function (that, data, $offset, $length) {
          anInstance(that, TypedArray, NAME);
          var klass;
          // `ws` module bug, temporarily remove validation length for Uint8Array
          // https://github.com/websockets/ws/pull/645
          if (!isObject(data)) return new Base(toIndex(data));
          if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
            return $length !== undefined ? new Base(data, toOffset($offset, BYTES), $length) : $offset !== undefined ? new Base(data, toOffset($offset, BYTES)) : new Base(data);
          }
          if (TYPED_ARRAY in data) return fromList(TypedArray, data);
          return $from.call(TypedArray, data);
        });
        arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
          if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
        });
        TypedArray[PROTOTYPE] = TypedArrayPrototype;
        if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
      }
      var $nativeIterator = TypedArrayPrototype[ITERATOR];
      var CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
      var $iterator = $iterators.values;
      hide(TypedArray, TYPED_CONSTRUCTOR, true);
      hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
      hide(TypedArrayPrototype, VIEW, true);
      hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

      if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
        dP(TypedArrayPrototype, TAG, {
          get: function get$$1() {
            return NAME;
          }
        });
      }

      O[NAME] = TypedArray;

      $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

      $export($export.S, NAME, {
        BYTES_PER_ELEMENT: BYTES
      });

      $export($export.S + $export.F * fails(function () {
        Base.of.call(TypedArray, 1);
      }), NAME, {
        from: $from,
        of: $of
      });

      if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

      $export($export.P, NAME, proto);

      setSpecies(NAME);

      $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

      $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

      if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;

      $export($export.P + $export.F * fails(function () {
        new TypedArray(1).slice();
      }), NAME, { slice: $slice });

      $export($export.P + $export.F * (fails(function () {
        return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
      }) || !fails(function () {
        TypedArrayPrototype.toLocaleString.call([1, 2]);
      })), NAME, { toLocaleString: $toLocaleString });

      Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
      if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
    };
  } else module.exports = function () {/* empty */};
});

_typedArray('Int8', 1, function (init) {
  return function Int8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

_typedArray('Uint8', 1, function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

_typedArray('Uint8', 1, function (init) {
  return function Uint8ClampedArray(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
}, true);

_typedArray('Int16', 2, function (init) {
  return function Int16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

_typedArray('Uint16', 2, function (init) {
  return function Uint16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

_typedArray('Int32', 4, function (init) {
  return function Int32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

_typedArray('Uint32', 4, function (init) {
  return function Uint32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

_typedArray('Float32', 4, function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

_typedArray('Float64', 8, function (init) {
  return function Float64Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

var $export$76 = _export;
var aFunction$7 = _aFunction;
var anObject$17 = _anObject;
var rApply = (_global.Reflect || {}).apply;
var fApply = Function.apply;
// MS Edge argumentsList argument is optional
$export$76($export$76.S + $export$76.F * !_fails(function () {
  rApply(function () {/* empty */});
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList) {
    var T = aFunction$7(target);
    var L = anObject$17(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});

var $export$77 = _export;
var create$2 = _objectCreate;
var aFunction$8 = _aFunction;
var anObject$18 = _anObject;
var isObject$23 = _isObject;
var fails$9 = _fails;
var bind = _bind;
var rConstruct = (_global.Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails$9(function () {
  function F() {/* empty */}
  return !(rConstruct(function () {/* empty */}, [], F) instanceof F);
});
var ARGS_BUG = !fails$9(function () {
  rConstruct(function () {/* empty */});
});

$export$77($export$77.S + $export$77.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction$8(Target);
    anObject$18(args);
    var newTarget = arguments.length < 3 ? Target : aFunction$8(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0:
          return new Target();
        case 1:
          return new Target(args[0]);
        case 2:
          return new Target(args[0], args[1]);
        case 3:
          return new Target(args[0], args[1], args[2]);
        case 4:
          return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create$2(isObject$23(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject$23(result) ? result : instance;
  }
});

var dP$9 = _objectDp;
var $export$78 = _export;
var anObject$19 = _anObject;
var toPrimitive$6 = _toPrimitive;

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export$78($export$78.S + $export$78.F * _fails(function () {
  // eslint-disable-next-line no-undef
  Reflect.defineProperty(dP$9.f({}, 1, { value: 1 }), 1, { value: 2 });
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject$19(target);
    propertyKey = toPrimitive$6(propertyKey, true);
    anObject$19(attributes);
    try {
      dP$9.f(target, propertyKey, attributes);
      return true;
    } catch (e) {
      return false;
    }
  }
});

var $export$79 = _export;
var gOPD$3 = _objectGopd.f;
var anObject$20 = _anObject;

$export$79($export$79.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var desc = gOPD$3(anObject$20(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});

var $export$80 = _export;
var anObject$21 = _anObject;
var Enumerate = function Enumerate(iterated) {
  this._t = anObject$21(iterated); // target
  this._i = 0; // next index
  var keys = this._k = []; // keys
  var key;
  for (key in iterated) {
    keys.push(key);
  }
};
_iterCreate(Enumerate, 'Object', function () {
  var that = this;
  var keys = that._k;
  var key;
  do {
    if (that._i >= keys.length) return { value: undefined, done: true };
  } while (!((key = keys[that._i++]) in that._t));
  return { value: key, done: false };
});

$export$80($export$80.S, 'Reflect', {
  enumerate: function enumerate(target) {
    return new Enumerate(target);
  }
});

var gOPD$4 = _objectGopd;
var getPrototypeOf$2 = _objectGpo;
var has$6 = _has;
var $export$81 = _export;
var isObject$24 = _isObject;
var anObject$22 = _anObject;

function get$1(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (anObject$22(target) === receiver) return target[propertyKey];
  if (desc = gOPD$4.f(target, propertyKey)) return has$6(desc, 'value') ? desc.value : desc.get !== undefined ? desc.get.call(receiver) : undefined;
  if (isObject$24(proto = getPrototypeOf$2(target))) return get$1(proto, propertyKey, receiver);
}

$export$81($export$81.S, 'Reflect', { get: get$1 });

var gOPD$5 = _objectGopd;
var $export$82 = _export;
var anObject$23 = _anObject;

$export$82($export$82.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return gOPD$5.f(anObject$23(target), propertyKey);
  }
});

var $export$83 = _export;
var getProto = _objectGpo;
var anObject$24 = _anObject;

$export$83($export$83.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target) {
    return getProto(anObject$24(target));
  }
});

var $export$84 = _export;

$export$84($export$84.S, 'Reflect', {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});

var $export$85 = _export;
var anObject$25 = _anObject;
var $isExtensible = Object.isExtensible;

$export$85($export$85.S, 'Reflect', {
  isExtensible: function isExtensible(target) {
    anObject$25(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});

var gOPN$4 = _objectGopn;
var gOPS$2 = _objectGops;
var anObject$26 = _anObject;
var Reflect$1 = _global.Reflect;
var _ownKeys = Reflect$1 && Reflect$1.ownKeys || function ownKeys(it) {
  var keys = gOPN$4.f(anObject$26(it));
  var getSymbols = gOPS$2.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};

var $export$86 = _export;

$export$86($export$86.S, 'Reflect', { ownKeys: _ownKeys });

var $export$87 = _export;
var anObject$27 = _anObject;
var $preventExtensions = Object.preventExtensions;

$export$87($export$87.S, 'Reflect', {
  preventExtensions: function preventExtensions(target) {
    anObject$27(target);
    try {
      if ($preventExtensions) $preventExtensions(target);
      return true;
    } catch (e) {
      return false;
    }
  }
});

var dP$10 = _objectDp;
var gOPD$6 = _objectGopd;
var getPrototypeOf$3 = _objectGpo;
var has$7 = _has;
var $export$88 = _export;
var createDesc$4 = _propertyDesc;
var anObject$28 = _anObject;
var isObject$25 = _isObject;

function set$1(target, propertyKey, V /* , receiver */) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDesc = gOPD$6.f(anObject$28(target), propertyKey);
  var existingDescriptor, proto;
  if (!ownDesc) {
    if (isObject$25(proto = getPrototypeOf$3(target))) {
      return set$1(proto, propertyKey, V, receiver);
    }
    ownDesc = createDesc$4(0);
  }
  if (has$7(ownDesc, 'value')) {
    if (ownDesc.writable === false || !isObject$25(receiver)) return false;
    if (existingDescriptor = gOPD$6.f(receiver, propertyKey)) {
      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
      existingDescriptor.value = V;
      dP$10.f(receiver, propertyKey, existingDescriptor);
    } else dP$10.f(receiver, propertyKey, createDesc$4(0, V));
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export$88($export$88.S, 'Reflect', { set: set$1 });

var $export$89 = _export;
var setProto = _setProto;

if (setProto) $export$89($export$89.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    setProto.check(target, proto);
    try {
      setProto.set(target, proto);
      return true;
    } catch (e) {
      return false;
    }
  }
});

var $export$90 = _export;
var $includes = _arrayIncludes(true);

$export$90($export$90.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

_addToUnscopables('includes');

var isArray$2 = _isArray;
var isObject$26 = _isObject;
var toLength$17 = _toLength;
var ctx$6 = _ctx;
var IS_CONCAT_SPREADABLE = _wks('isConcatSpreadable');

function flattenIntoArray$1(target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? ctx$6(mapper, thisArg, 3) : false;
  var element, spreadable;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      spreadable = false;
      if (isObject$26(element)) {
        spreadable = element[IS_CONCAT_SPREADABLE];
        spreadable = spreadable !== undefined ? !!spreadable : isArray$2(element);
      }

      if (spreadable && depth > 0) {
        targetIndex = flattenIntoArray$1(target, original, element, toLength$17(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1fffffffffffff) throw TypeError();
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
}

var _flattenIntoArray = flattenIntoArray$1;

var $export$91 = _export;
var flattenIntoArray = _flattenIntoArray;
var toObject$12 = _toObject;
var toLength$16 = _toLength;
var aFunction$9 = _aFunction;
var arraySpeciesCreate = _arraySpeciesCreate;

$export$91($export$91.P, 'Array', {
  flatMap: function flatMap(callbackfn /* , thisArg */) {
    var O = toObject$12(this);
    var sourceLen, A;
    aFunction$9(callbackfn);
    sourceLen = toLength$16(O.length);
    A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
    return A;
  }
});

_addToUnscopables('flatMap');

var $export$92 = _export;
var flattenIntoArray$2 = _flattenIntoArray;
var toObject$13 = _toObject;
var toLength$18 = _toLength;
var toInteger$8 = _toInteger;
var arraySpeciesCreate$1 = _arraySpeciesCreate;

$export$92($export$92.P, 'Array', {
  flatten: function flatten() /* depthArg = 1 */{
    var depthArg = arguments[0];
    var O = toObject$13(this);
    var sourceLen = toLength$18(O.length);
    var A = arraySpeciesCreate$1(O, 0);
    flattenIntoArray$2(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger$8(depthArg));
    return A;
  }
});

_addToUnscopables('flatten');

var $export$93 = _export;
var $at$2 = _stringAt(true);

$export$93($export$93.P, 'String', {
  at: function at(pos) {
    return $at$2(this, pos);
  }
});

var toLength$19 = _toLength;
var repeat$1 = _stringRepeat;
var defined$8 = _defined;

var _stringPad = function _stringPad(that, maxLength, fillString, left) {
  var S = String(defined$8(that));
  var stringLength = S.length;
  var fillStr = fillString === undefined ? ' ' : String(fillString);
  var intMaxLength = toLength$19(maxLength);
  if (intMaxLength <= stringLength || fillStr == '') return S;
  var fillLen = intMaxLength - stringLength;
  var stringFiller = repeat$1.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};

var $export$94 = _export;
var $pad = _stringPad;
var userAgent$1 = _userAgent;

// https://github.com/zloirock/core-js/issues/280
$export$94($export$94.P + $export$94.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(userAgent$1), 'String', {
  padStart: function padStart(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});

var $export$95 = _export;
var $pad$1 = _stringPad;
var userAgent$2 = _userAgent;

// https://github.com/zloirock/core-js/issues/280
$export$95($export$95.P + $export$95.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(userAgent$2), 'String', {
  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
    return $pad$1(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});

_stringTrim('trimLeft', function ($trim) {
  return function trimLeft() {
    return $trim(this, 1);
  };
}, 'trimStart');

_stringTrim('trimRight', function ($trim) {
  return function trimRight() {
    return $trim(this, 2);
  };
}, 'trimEnd');

var $export$96 = _export;
var defined$9 = _defined;
var toLength$20 = _toLength;
var isRegExp$3 = _isRegexp;
var getFlags = _flags;
var RegExpProto = RegExp.prototype;

var $RegExpStringIterator = function $RegExpStringIterator(regexp, string) {
  this._r = regexp;
  this._s = string;
};

_iterCreate($RegExpStringIterator, 'RegExp String', function next() {
  var match = this._r.exec(this._s);
  return { value: match, done: match === null };
});

$export$96($export$96.P, 'String', {
  matchAll: function matchAll(regexp) {
    defined$9(this);
    if (!isRegExp$3(regexp)) throw TypeError(regexp + ' is not a regexp!');
    var S = String(this);
    var flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp);
    var rx = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
    rx.lastIndex = toLength$20(regexp.lastIndex);
    return new $RegExpStringIterator(rx, S);
  }
});

_wksDefine('asyncIterator');

_wksDefine('observable');

var $export$97 = _export;
var ownKeys = _ownKeys;
var toIObject$10 = _toIobject;
var gOPD$7 = _objectGopd;
var createProperty$2 = _createProperty;

$export$97($export$97.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject$10(object);
    var getDesc = gOPD$7.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty$2(result, key, desc);
    }
    return result;
  }
});

var getKeys$3 = _objectKeys;
var toIObject$11 = _toIobject;
var isEnum$1 = _objectPie.f;
var _objectToArray = function _objectToArray(isEntries) {
  return function (it) {
    var O = toIObject$11(it);
    var keys = getKeys$3(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      if (isEnum$1.call(O, key = keys[i++])) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }return result;
  };
};

var $export$98 = _export;
var $values = _objectToArray(false);

$export$98($export$98.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});

var $export$99 = _export;
var $entries = _objectToArray(true);

$export$99($export$99.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});

var _objectForcedPam = _library || !_fails(function () {
  var K = Math.random();
  // In FF throws only define methods
  // eslint-disable-next-line no-undef, no-useless-call
  __defineSetter__.call(null, K, function () {/* empty */});
  delete _global[K];
});

var $export$100 = _export;
var toObject$14 = _toObject;
var aFunction$10 = _aFunction;
var $defineProperty$2 = _objectDp;

// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
_descriptors && $export$100($export$100.P + _objectForcedPam, 'Object', {
  __defineGetter__: function __defineGetter__(P, getter) {
    $defineProperty$2.f(toObject$14(this), P, { get: aFunction$10(getter), enumerable: true, configurable: true });
  }
});

var $export$101 = _export;
var toObject$15 = _toObject;
var aFunction$11 = _aFunction;
var $defineProperty$3 = _objectDp;

// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
_descriptors && $export$101($export$101.P + _objectForcedPam, 'Object', {
  __defineSetter__: function __defineSetter__(P, setter) {
    $defineProperty$3.f(toObject$15(this), P, { set: aFunction$11(setter), enumerable: true, configurable: true });
  }
});

var $export$102 = _export;
var toObject$16 = _toObject;
var toPrimitive$7 = _toPrimitive;
var getPrototypeOf$4 = _objectGpo;
var getOwnPropertyDescriptor = _objectGopd.f;

// B.2.2.4 Object.prototype.__lookupGetter__(P)
_descriptors && $export$102($export$102.P + _objectForcedPam, 'Object', {
  __lookupGetter__: function __lookupGetter__(P) {
    var O = toObject$16(this);
    var K = toPrimitive$7(P, true);
    var D;
    do {
      if (D = getOwnPropertyDescriptor(O, K)) return D.get;
    } while (O = getPrototypeOf$4(O));
  }
});

var $export$103 = _export;
var toObject$17 = _toObject;
var toPrimitive$8 = _toPrimitive;
var getPrototypeOf$5 = _objectGpo;
var getOwnPropertyDescriptor$1 = _objectGopd.f;

// B.2.2.5 Object.prototype.__lookupSetter__(P)
_descriptors && $export$103($export$103.P + _objectForcedPam, 'Object', {
  __lookupSetter__: function __lookupSetter__(P) {
    var O = toObject$17(this);
    var K = toPrimitive$8(P, true);
    var D;
    do {
      if (D = getOwnPropertyDescriptor$1(O, K)) return D.set;
    } while (O = getPrototypeOf$5(O));
  }
});

var forOf$4 = _forOf;

var _arrayFromIterable = function _arrayFromIterable(iter, ITERATOR) {
  var result = [];
  forOf$4(iter, false, result.push, result, ITERATOR);
  return result;
};

var classof$4 = _classof;
var from = _arrayFromIterable;
var _collectionToJson = function _collectionToJson(NAME) {
  return function toJSON() {
    if (classof$4(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};

var $export$104 = _export;

$export$104($export$104.P + $export$104.R, 'Map', { toJSON: _collectionToJson('Map') });

var $export$105 = _export;

$export$105($export$105.P + $export$105.R, 'Set', { toJSON: _collectionToJson('Set') });

var $export$106 = _export;

var _setCollectionOf = function _setCollectionOf(COLLECTION) {
  $export$106($export$106.S, COLLECTION, { of: function of() {
      var length = arguments.length;
      var A = new Array(length);
      while (length--) {
        A[length] = arguments[length];
      }return new this(A);
    } });
};

_setCollectionOf('Map');

_setCollectionOf('Set');

_setCollectionOf('WeakMap');

_setCollectionOf('WeakSet');

var $export$107 = _export;
var aFunction$12 = _aFunction;
var ctx$7 = _ctx;
var forOf$5 = _forOf;

var _setCollectionFrom = function _setCollectionFrom(COLLECTION) {
  $export$107($export$107.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
      var mapFn = arguments[1];
      var mapping, A, n, cb;
      aFunction$12(this);
      mapping = mapFn !== undefined;
      if (mapping) aFunction$12(mapFn);
      if (source == undefined) return new this();
      A = [];
      if (mapping) {
        n = 0;
        cb = ctx$7(mapFn, arguments[2], 2);
        forOf$5(source, false, function (nextItem) {
          A.push(cb(nextItem, n++));
        });
      } else {
        forOf$5(source, false, A.push, A);
      }
      return new this(A);
    } });
};

_setCollectionFrom('Map');

_setCollectionFrom('Set');

_setCollectionFrom('WeakMap');

_setCollectionFrom('WeakSet');

var $export$108 = _export;

$export$108($export$108.G, { global: _global });

var $export$109 = _export;

$export$109($export$109.S, 'System', { global: _global });

var $export$110 = _export;
var cof$7 = _cof;

$export$110($export$110.S, 'Error', {
  isError: function isError(it) {
    return cof$7(it) === 'Error';
  }
});

var $export$111 = _export;

$export$111($export$111.S, 'Math', {
  clamp: function clamp(x, lower, upper) {
    return Math.min(upper, Math.max(lower, x));
  }
});

var $export$112 = _export;

$export$112($export$112.S, 'Math', { DEG_PER_RAD: Math.PI / 180 });

var $export$113 = _export;
var RAD_PER_DEG = 180 / Math.PI;

$export$113($export$113.S, 'Math', {
  degrees: function degrees(radians) {
    return radians * RAD_PER_DEG;
  }
});

// https://rwaldron.github.io/proposal-math-extensions/
var _mathScale = Math.scale || function scale(x, inLow, inHigh, outLow, outHigh) {
  if (arguments.length === 0
  // eslint-disable-next-line no-self-compare
  || x != x
  // eslint-disable-next-line no-self-compare
  || inLow != inLow
  // eslint-disable-next-line no-self-compare
  || inHigh != inHigh
  // eslint-disable-next-line no-self-compare
  || outLow != outLow
  // eslint-disable-next-line no-self-compare
  || outHigh != outHigh) return NaN;
  if (x === Infinity || x === -Infinity) return x;
  return (x - inLow) * (outHigh - outLow) / (inHigh - inLow) + outLow;
};

var $export$114 = _export;
var scale = _mathScale;
var fround = _mathFround;

$export$114($export$114.S, 'Math', {
  fscale: function fscale(x, inLow, inHigh, outLow, outHigh) {
    return fround(scale(x, inLow, inHigh, outLow, outHigh));
  }
});

var $export$115 = _export;

$export$115($export$115.S, 'Math', {
  iaddh: function iaddh(x0, x1, y0, y1) {
    var $x0 = x0 >>> 0;
    var $x1 = x1 >>> 0;
    var $y0 = y0 >>> 0;
    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
  }
});

var $export$116 = _export;

$export$116($export$116.S, 'Math', {
  isubh: function isubh(x0, x1, y0, y1) {
    var $x0 = x0 >>> 0;
    var $x1 = x1 >>> 0;
    var $y0 = y0 >>> 0;
    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
  }
});

var $export$117 = _export;

$export$117($export$117.S, 'Math', {
  imulh: function imulh(u, v) {
    var UINT16 = 0xffff;
    var $u = +u;
    var $v = +v;
    var u0 = $u & UINT16;
    var v0 = $v & UINT16;
    var u1 = $u >> 16;
    var v1 = $v >> 16;
    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
  }
});

var $export$118 = _export;

$export$118($export$118.S, 'Math', { RAD_PER_DEG: 180 / Math.PI });

var $export$119 = _export;
var DEG_PER_RAD = Math.PI / 180;

$export$119($export$119.S, 'Math', {
  radians: function radians(degrees) {
    return degrees * DEG_PER_RAD;
  }
});

var $export$120 = _export;

$export$120($export$120.S, 'Math', { scale: _mathScale });

var $export$121 = _export;

$export$121($export$121.S, 'Math', {
  umulh: function umulh(u, v) {
    var UINT16 = 0xffff;
    var $u = +u;
    var $v = +v;
    var u0 = $u & UINT16;
    var v0 = $v & UINT16;
    var u1 = $u >>> 16;
    var v1 = $v >>> 16;
    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
  }
});

var $export$122 = _export;

$export$122($export$122.S, 'Math', { signbit: function signbit(x) {
    // eslint-disable-next-line no-self-compare
    return (x = +x) != x ? x : x == 0 ? 1 / x == Infinity : x > 0;
  } });

var $export$123 = _export;
var core$3 = _core;
var global$13 = _global;
var speciesConstructor$4 = _speciesConstructor;
var promiseResolve$1 = _promiseResolve;

$export$123($export$123.P + $export$123.R, 'Promise', { 'finally': function _finally(onFinally) {
    var C = speciesConstructor$4(this, core$3.Promise || global$13.Promise);
    var isFunction = typeof onFinally == 'function';
    return this.then(isFunction ? function (x) {
      return promiseResolve$1(C, onFinally()).then(function () {
        return x;
      });
    } : onFinally, isFunction ? function (e) {
      return promiseResolve$1(C, onFinally()).then(function () {
        throw e;
      });
    } : onFinally);
  } });

var $export$124 = _export;
var newPromiseCapability$2 = _newPromiseCapability;
var perform$1 = _perform;

$export$124($export$124.S, 'Promise', { 'try': function _try(callbackfn) {
    var promiseCapability = newPromiseCapability$2.f(this);
    var result = perform$1(callbackfn);
    (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
    return promiseCapability.promise;
  } });

var Map = es6_map;
var $export$125 = _export;
var shared$2 = _shared('metadata');
var store = shared$2.store || (shared$2.store = new es6_weakMap());

var getOrCreateMetadataMap = function getOrCreateMetadataMap(target, targetKey, create) {
  var targetMetadata = store.get(target);
  if (!targetMetadata) {
    if (!create) return undefined;
    store.set(target, targetMetadata = new Map());
  }
  var keyMetadata = targetMetadata.get(targetKey);
  if (!keyMetadata) {
    if (!create) return undefined;
    targetMetadata.set(targetKey, keyMetadata = new Map());
  }return keyMetadata;
};
var ordinaryHasOwnMetadata = function ordinaryHasOwnMetadata(MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
};
var ordinaryGetOwnMetadata = function ordinaryGetOwnMetadata(MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
};
var ordinaryDefineOwnMetadata$1 = function ordinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
};
var ordinaryOwnMetadataKeys = function ordinaryOwnMetadataKeys(target, targetKey) {
  var metadataMap = getOrCreateMetadataMap(target, targetKey, false);
  var keys = [];
  if (metadataMap) metadataMap.forEach(function (_, key) {
    keys.push(key);
  });
  return keys;
};
var toMetaKey$1 = function toMetaKey(it) {
  return it === undefined || (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol' ? it : String(it);
};
var exp$3 = function exp(O) {
  $export$125($export$125.S, 'Reflect', O);
};

var _metadata = {
  store: store,
  map: getOrCreateMetadataMap,
  has: ordinaryHasOwnMetadata,
  get: ordinaryGetOwnMetadata,
  set: ordinaryDefineOwnMetadata$1,
  keys: ordinaryOwnMetadataKeys,
  key: toMetaKey$1,
  exp: exp$3
};

var metadata = _metadata;
var anObject$29 = _anObject;
var toMetaKey = metadata.key;
var ordinaryDefineOwnMetadata = metadata.set;

metadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
    ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject$29(target), toMetaKey(targetKey));
  } });

var metadata$1 = _metadata;
var anObject$30 = _anObject;
var toMetaKey$2 = metadata$1.key;
var getOrCreateMetadataMap$1 = metadata$1.map;
var store$1 = metadata$1.store;

metadata$1.exp({ deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */) {
    var targetKey = arguments.length < 3 ? undefined : toMetaKey$2(arguments[2]);
    var metadataMap = getOrCreateMetadataMap$1(anObject$30(target), targetKey, false);
    if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
    if (metadataMap.size) return true;
    var targetMetadata = store$1.get(target);
    targetMetadata['delete'](targetKey);
    return !!targetMetadata.size || store$1['delete'](target);
  } });

var metadata$2 = _metadata;
var anObject$31 = _anObject;
var getPrototypeOf$6 = _objectGpo;
var ordinaryHasOwnMetadata$1 = metadata$2.has;
var ordinaryGetOwnMetadata$1 = metadata$2.get;
var toMetaKey$3 = metadata$2.key;

var ordinaryGetMetadata = function ordinaryGetMetadata(MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata$1(MetadataKey, O, P);
  if (hasOwn) return ordinaryGetOwnMetadata$1(MetadataKey, O, P);
  var parent = getPrototypeOf$6(O);
  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
};

metadata$2.exp({ getMetadata: function getMetadata(metadataKey, target /* , targetKey */) {
    return ordinaryGetMetadata(metadataKey, anObject$31(target), arguments.length < 3 ? undefined : toMetaKey$3(arguments[2]));
  } });

var Set = es6_set;
var from$1 = _arrayFromIterable;
var metadata$3 = _metadata;
var anObject$32 = _anObject;
var getPrototypeOf$7 = _objectGpo;
var ordinaryOwnMetadataKeys$1 = metadata$3.keys;
var toMetaKey$4 = metadata$3.key;

var ordinaryMetadataKeys = function ordinaryMetadataKeys(O, P) {
  var oKeys = ordinaryOwnMetadataKeys$1(O, P);
  var parent = getPrototypeOf$7(O);
  if (parent === null) return oKeys;
  var pKeys = ordinaryMetadataKeys(parent, P);
  return pKeys.length ? oKeys.length ? from$1(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
};

metadata$3.exp({ getMetadataKeys: function getMetadataKeys(target /* , targetKey */) {
    return ordinaryMetadataKeys(anObject$32(target), arguments.length < 2 ? undefined : toMetaKey$4(arguments[1]));
  } });

var metadata$4 = _metadata;
var anObject$33 = _anObject;
var ordinaryGetOwnMetadata$2 = metadata$4.get;
var toMetaKey$5 = metadata$4.key;

metadata$4.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */) {
    return ordinaryGetOwnMetadata$2(metadataKey, anObject$33(target), arguments.length < 3 ? undefined : toMetaKey$5(arguments[2]));
  } });

var metadata$5 = _metadata;
var anObject$34 = _anObject;
var ordinaryOwnMetadataKeys$2 = metadata$5.keys;
var toMetaKey$6 = metadata$5.key;

metadata$5.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */) {
    return ordinaryOwnMetadataKeys$2(anObject$34(target), arguments.length < 2 ? undefined : toMetaKey$6(arguments[1]));
  } });

var metadata$6 = _metadata;
var anObject$35 = _anObject;
var getPrototypeOf$8 = _objectGpo;
var ordinaryHasOwnMetadata$2 = metadata$6.has;
var toMetaKey$7 = metadata$6.key;

var ordinaryHasMetadata = function ordinaryHasMetadata(MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata$2(MetadataKey, O, P);
  if (hasOwn) return true;
  var parent = getPrototypeOf$8(O);
  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
};

metadata$6.exp({ hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */) {
    return ordinaryHasMetadata(metadataKey, anObject$35(target), arguments.length < 3 ? undefined : toMetaKey$7(arguments[2]));
  } });

var metadata$7 = _metadata;
var anObject$36 = _anObject;
var ordinaryHasOwnMetadata$3 = metadata$7.has;
var toMetaKey$8 = metadata$7.key;

metadata$7.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */) {
    return ordinaryHasOwnMetadata$3(metadataKey, anObject$36(target), arguments.length < 3 ? undefined : toMetaKey$8(arguments[2]));
  } });

var $metadata = _metadata;
var anObject$37 = _anObject;
var aFunction$13 = _aFunction;
var toMetaKey$9 = $metadata.key;
var ordinaryDefineOwnMetadata$2 = $metadata.set;

$metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {
    return function decorator(target, targetKey) {
      ordinaryDefineOwnMetadata$2(metadataKey, metadataValue, (targetKey !== undefined ? anObject$37 : aFunction$13)(target), toMetaKey$9(targetKey));
    };
  } });

var $export$126 = _export;
var microtask$1 = _microtask();
var process$3 = _global.process;
var isNode$2 = _cof(process$3) == 'process';

$export$126($export$126.G, {
  asap: function asap(fn) {
    var domain = isNode$2 && process$3.domain;
    microtask$1(domain ? domain.bind(fn) : fn);
  }
});

var $export$127 = _export;
var global$14 = _global;
var core$4 = _core;
var microtask$2 = _microtask();
var OBSERVABLE = _wks('observable');
var aFunction$14 = _aFunction;
var anObject$38 = _anObject;
var anInstance$4 = _anInstance;
var redefineAll$3 = _redefineAll;
var hide$4 = _hide;
var forOf$6 = _forOf;
var RETURN = forOf$6.RETURN;

var getMethod = function getMethod(fn) {
  return fn == null ? undefined : aFunction$14(fn);
};

var cleanupSubscription = function cleanupSubscription(subscription) {
  var cleanup = subscription._c;
  if (cleanup) {
    subscription._c = undefined;
    cleanup();
  }
};

var subscriptionClosed = function subscriptionClosed(subscription) {
  return subscription._o === undefined;
};

var closeSubscription = function closeSubscription(subscription) {
  if (!subscriptionClosed(subscription)) {
    subscription._o = undefined;
    cleanupSubscription(subscription);
  }
};

var Subscription = function Subscription(observer, subscriber) {
  anObject$38(observer);
  this._c = undefined;
  this._o = observer;
  observer = new SubscriptionObserver(this);
  try {
    var cleanup = subscriber(observer);
    var subscription = cleanup;
    if (cleanup != null) {
      if (typeof cleanup.unsubscribe === 'function') cleanup = function cleanup() {
        subscription.unsubscribe();
      };else aFunction$14(cleanup);
      this._c = cleanup;
    }
  } catch (e) {
    observer.error(e);
    return;
  }if (subscriptionClosed(this)) cleanupSubscription(this);
};

Subscription.prototype = redefineAll$3({}, {
  unsubscribe: function unsubscribe() {
    closeSubscription(this);
  }
});

var SubscriptionObserver = function SubscriptionObserver(subscription) {
  this._s = subscription;
};

SubscriptionObserver.prototype = redefineAll$3({}, {
  next: function next(value) {
    var subscription = this._s;
    if (!subscriptionClosed(subscription)) {
      var observer = subscription._o;
      try {
        var m = getMethod(observer.next);
        if (m) return m.call(observer, value);
      } catch (e) {
        try {
          closeSubscription(subscription);
        } finally {
          throw e;
        }
      }
    }
  },
  error: function error(value) {
    var subscription = this._s;
    if (subscriptionClosed(subscription)) throw value;
    var observer = subscription._o;
    subscription._o = undefined;
    try {
      var m = getMethod(observer.error);
      if (!m) throw value;
      value = m.call(observer, value);
    } catch (e) {
      try {
        cleanupSubscription(subscription);
      } finally {
        throw e;
      }
    }cleanupSubscription(subscription);
    return value;
  },
  complete: function complete(value) {
    var subscription = this._s;
    if (!subscriptionClosed(subscription)) {
      var observer = subscription._o;
      subscription._o = undefined;
      try {
        var m = getMethod(observer.complete);
        value = m ? m.call(observer, value) : undefined;
      } catch (e) {
        try {
          cleanupSubscription(subscription);
        } finally {
          throw e;
        }
      }cleanupSubscription(subscription);
      return value;
    }
  }
});

var $Observable = function Observable(subscriber) {
  anInstance$4(this, $Observable, 'Observable', '_f')._f = aFunction$14(subscriber);
};

redefineAll$3($Observable.prototype, {
  subscribe: function subscribe(observer) {
    return new Subscription(observer, this._f);
  },
  forEach: function forEach(fn) {
    var that = this;
    return new (core$4.Promise || global$14.Promise)(function (resolve, reject) {
      aFunction$14(fn);
      var subscription = that.subscribe({
        next: function next(value) {
          try {
            return fn(value);
          } catch (e) {
            reject(e);
            subscription.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
    });
  }
});

redefineAll$3($Observable, {
  from: function from(x) {
    var C = typeof this === 'function' ? this : $Observable;
    var method = getMethod(anObject$38(x)[OBSERVABLE]);
    if (method) {
      var observable = anObject$38(method.call(x));
      return observable.constructor === C ? observable : new C(function (observer) {
        return observable.subscribe(observer);
      });
    }
    return new C(function (observer) {
      var done = false;
      microtask$2(function () {
        if (!done) {
          try {
            if (forOf$6(x, false, function (it) {
              observer.next(it);
              if (done) return RETURN;
            }) === RETURN) return;
          } catch (e) {
            if (done) throw e;
            observer.error(e);
            return;
          }observer.complete();
        }
      });
      return function () {
        done = true;
      };
    });
  },
  of: function of() {
    for (var i = 0, l = arguments.length, items = new Array(l); i < l;) {
      items[i] = arguments[i++];
    }return new (typeof this === 'function' ? this : $Observable)(function (observer) {
      var done = false;
      microtask$2(function () {
        if (!done) {
          for (var j = 0; j < items.length; ++j) {
            observer.next(items[j]);
            if (done) return;
          }observer.complete();
        }
      });
      return function () {
        done = true;
      };
    });
  }
});

hide$4($Observable.prototype, OBSERVABLE, function () {
  return this;
});

$export$127($export$127.G, { Observable: $Observable });

_setSpecies('Observable');

var global$15 = _global;
var $export$128 = _export;
var userAgent$3 = _userAgent;
var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent$3); // <- dirty ie9- check
var wrap$1 = function wrap(set) {
  return function (fn, time /* , ...args */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : false;
    return set(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
    } : fn, time);
  };
};
$export$128($export$128.G + $export$128.B + $export$128.F * MSIE, {
  setTimeout: wrap$1(global$15.setTimeout),
  setInterval: wrap$1(global$15.setInterval)
});

var $export$129 = _export;
var $task = _task;
$export$129($export$129.G + $export$129.B, {
  setImmediate: $task.set,
  clearImmediate: $task.clear
});

var $iterators = es6_array_iterator;
var getKeys$4 = _objectKeys;
var redefine$6 = _redefine;
var global$16 = _global;
var hide$5 = _hide;
var Iterators$4 = _iterators;
var wks$2 = _wks;
var ITERATOR$4 = wks$2('iterator');
var TO_STRING_TAG = wks$2('toStringTag');
var ArrayValues = Iterators$4.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys$4(DOMIterables), i$2 = 0; i$2 < collections.length; i$2++) {
  var NAME$1 = collections[i$2];
  var explicit = DOMIterables[NAME$1];
  var Collection = global$16[NAME$1];
  var proto$3 = Collection && Collection.prototype;
  var key$1;
  if (proto$3) {
    if (!proto$3[ITERATOR$4]) hide$5(proto$3, ITERATOR$4, ArrayValues);
    if (!proto$3[TO_STRING_TAG]) hide$5(proto$3, TO_STRING_TAG, NAME$1);
    Iterators$4[NAME$1] = ArrayValues;
    if (explicit) for (key$1 in $iterators) {
      if (!proto$3[key$1]) redefine$6(proto$3, key$1, $iterators[key$1], true);
    }
  }
}

var runtime = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2014, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
   * additional grant of patent rights can be found in the PATENTS file in
   * the same directory.
   */

  !function (global) {
    "use strict";

    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

    var inModule = (typeof module === "undefined" ? "undefined" : _typeof(module)) === "object";
    var runtime = global.regeneratorRuntime;
    if (runtime) {
      if (inModule) {
        // If regeneratorRuntime is defined globally and we're in a module,
        // make the exports object identical to regeneratorRuntime.
        module.exports = runtime;
      }
      // Don't bother evaluating the rest of this file if the runtime was
      // already defined globally.
      return;
    }

    // Define the runtime globally (as expected by generated code) as either
    // module.exports (if we're in a module) or a new, empty object.
    runtime = global.regeneratorRuntime = inModule ? module.exports : {};

    function wrap(innerFn, outerFn, self, tryLocsList) {
      // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
      var generator = Object.create(protoGenerator.prototype);
      var context = new Context(tryLocsList || []);

      // The ._invoke method unifies the implementations of the .next,
      // .throw, and .return methods.
      generator._invoke = makeInvokeMethod(innerFn, self, context);

      return generator;
    }
    runtime.wrap = wrap;

    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
      try {
        return { type: "normal", arg: fn.call(obj, arg) };
      } catch (err) {
        return { type: "throw", arg: err };
      }
    }

    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";

    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};

    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}

    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {};
    IteratorPrototype[iteratorSymbol] = function () {
      return this;
    };

    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
      // This environment has a native %IteratorPrototype%; use it instead
      // of the polyfill.
      IteratorPrototype = NativeIteratorPrototype;
    }

    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function (method) {
        prototype[method] = function (arg) {
          return this._invoke(method, arg);
        };
      });
    }

    runtime.isGeneratorFunction = function (genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor ? ctor === GeneratorFunction ||
      // For the native GeneratorFunction constructor, the best we can
      // do is to check its .name property.
      (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };

    runtime.mark = function (genFun) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype;
        if (!(toStringTagSymbol in genFun)) {
          genFun[toStringTagSymbol] = "GeneratorFunction";
        }
      }
      genFun.prototype = Object.create(Gp);
      return genFun;
    };

    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    runtime.awrap = function (arg) {
      return { __await: arg };
    };

    function AsyncIterator(generator) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);
        if (record.type === "throw") {
          reject(record.arg);
        } else {
          var result = record.arg;
          var value = result.value;
          if (value && (typeof value === "undefined" ? "undefined" : _typeof(value)) === "object" && hasOwn.call(value, "__await")) {
            return Promise.resolve(value.__await).then(function (value) {
              invoke("next", value, resolve, reject);
            }, function (err) {
              invoke("throw", err, resolve, reject);
            });
          }

          return Promise.resolve(value).then(function (unwrapped) {
            // When a yielded Promise is resolved, its final value becomes
            // the .value of the Promise<{value,done}> result for the
            // current iteration. If the Promise is rejected, however, the
            // result for this iteration will be rejected with the same
            // reason. Note that rejections of yielded Promises are not
            // thrown back into the generator function, as is the case
            // when an awaited Promise is rejected. This difference in
            // behavior between yield and await is important, because it
            // allows the consumer to decide what to do with the yielded
            // rejection (swallow it and continue, manually .throw it back
            // into the generator, abandon iteration, whatever). With
            // await, by contrast, there is no opportunity to examine the
            // rejection reason outside the generator function, so the
            // only option is to throw it from the await expression, and
            // let the generator function handle the exception.
            result.value = unwrapped;
            resolve(result);
          }, reject);
        }
      }

      if (_typeof(global.process) === "object" && global.process.domain) {
        invoke = global.process.domain.bind(invoke);
      }

      var previousPromise;

      function enqueue(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new Promise(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }

        return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
        // Avoid propagating failures to Promises returned by later
        // invocations of the iterator.
        callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }

      // Define the unified helper method that is used to implement .next,
      // .throw, and .return (see defineIteratorMethods).
      this._invoke = enqueue;
    }

    defineIteratorMethods(AsyncIterator.prototype);
    AsyncIterator.prototype[asyncIteratorSymbol] = function () {
      return this;
    };
    runtime.AsyncIterator = AsyncIterator;

    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    runtime.async = function (innerFn, outerFn, self, tryLocsList) {
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));

      return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function (result) {
        return result.done ? result.value : iter.next();
      });
    };

    function makeInvokeMethod(innerFn, self, context) {
      var state = GenStateSuspendedStart;

      return function invoke(method, arg) {
        if (state === GenStateExecuting) {
          throw new Error("Generator is already running");
        }

        if (state === GenStateCompleted) {
          if (method === "throw") {
            throw arg;
          }

          // Be forgiving, per 25.3.3.3.3 of the spec:
          // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
          return doneResult();
        }

        context.method = method;
        context.arg = arg;

        while (true) {
          var delegate = context.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if (context.method === "next") {
            // Setting context._sent for legacy support of Babel's
            // function.sent implementation.
            context.sent = context._sent = context.arg;
          } else if (context.method === "throw") {
            if (state === GenStateSuspendedStart) {
              state = GenStateCompleted;
              throw context.arg;
            }

            context.dispatchException(context.arg);
          } else if (context.method === "return") {
            context.abrupt("return", context.arg);
          }

          state = GenStateExecuting;

          var record = tryCatch(innerFn, self, context);
          if (record.type === "normal") {
            // If an exception is thrown from innerFn, we leave state ===
            // GenStateExecuting and loop back for another invocation.
            state = context.done ? GenStateCompleted : GenStateSuspendedYield;

            if (record.arg === ContinueSentinel) {
              continue;
            }

            return {
              value: record.arg,
              done: context.done
            };
          } else if (record.type === "throw") {
            state = GenStateCompleted;
            // Dispatch the exception by looping back around to the
            // context.dispatchException(context.arg) call above.
            context.method = "throw";
            context.arg = record.arg;
          }
        }
      };
    }

    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];
      if (method === undefined) {
        // A .throw or .return when the delegate iterator has no .throw
        // method always terminates the yield* loop.
        context.delegate = null;

        if (context.method === "throw") {
          if (delegate.iterator.return) {
            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            context.method = "return";
            context.arg = undefined;
            maybeInvokeDelegate(delegate, context);

            if (context.method === "throw") {
              // If maybeInvokeDelegate(context) changed context.method from
              // "return" to "throw", let that override the TypeError below.
              return ContinueSentinel;
            }
          }

          context.method = "throw";
          context.arg = new TypeError("The iterator does not provide a 'throw' method");
        }

        return ContinueSentinel;
      }

      var record = tryCatch(method, delegate.iterator, context.arg);

      if (record.type === "throw") {
        context.method = "throw";
        context.arg = record.arg;
        context.delegate = null;
        return ContinueSentinel;
      }

      var info = record.arg;

      if (!info) {
        context.method = "throw";
        context.arg = new TypeError("iterator result is not an object");
        context.delegate = null;
        return ContinueSentinel;
      }

      if (info.done) {
        // Assign the result of the finished delegate to the temporary
        // variable specified by delegate.resultName (see delegateYield).
        context[delegate.resultName] = info.value;

        // Resume execution at the desired location (see delegateYield).
        context.next = delegate.nextLoc;

        // If context.method was "throw" but the delegate handled the
        // exception, let the outer generator proceed normally. If
        // context.method was "next", forget context.arg since it has been
        // "consumed" by the delegate iterator. If context.method was
        // "return", allow the original .return call to continue in the
        // outer generator.
        if (context.method !== "return") {
          context.method = "next";
          context.arg = undefined;
        }
      } else {
        // Re-yield the result returned by the delegate method.
        return info;
      }

      // The delegate iterator is finished, so forget it and continue with
      // the outer generator.
      context.delegate = null;
      return ContinueSentinel;
    }

    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);

    Gp[toStringTagSymbol] = "Generator";

    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    Gp[iteratorSymbol] = function () {
      return this;
    };

    Gp.toString = function () {
      return "[object Generator]";
    };

    function pushTryEntry(locs) {
      var entry = { tryLoc: locs[0] };

      if (1 in locs) {
        entry.catchLoc = locs[1];
      }

      if (2 in locs) {
        entry.finallyLoc = locs[2];
        entry.afterLoc = locs[3];
      }

      this.tryEntries.push(entry);
    }

    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal";
      delete record.arg;
      entry.completion = record;
    }

    function Context(tryLocsList) {
      // The root entry object (effectively a try statement without a catch
      // or a finally block) gives us a place to store values thrown from
      // locations where there is no enclosing try statement.
      this.tryEntries = [{ tryLoc: "root" }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }

    runtime.keys = function (object) {
      var keys = [];
      for (var key in object) {
        keys.push(key);
      }
      keys.reverse();

      // Rather than returning an object with a next method, we keep
      // things simple and return the next function itself.
      return function next() {
        while (keys.length) {
          var key = keys.pop();
          if (key in object) {
            next.value = key;
            next.done = false;
            return next;
          }
        }

        // To avoid creating an additional object, we just hang the .value
        // and .done properties off the next function object itself. This
        // also ensures that the minifier will not anonymize the function.
        next.done = true;
        return next;
      };
    };

    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) {
          return iteratorMethod.call(iterable);
        }

        if (typeof iterable.next === "function") {
          return iterable;
        }

        if (!isNaN(iterable.length)) {
          var i = -1,
              next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }

            next.value = undefined;
            next.done = true;

            return next;
          };

          return next.next = next;
        }
      }

      // Return an iterator with no values.
      return { next: doneResult };
    }
    runtime.values = values;

    function doneResult() {
      return { value: undefined, done: true };
    }

    Context.prototype = {
      constructor: Context,

      reset: function reset(skipTempReset) {
        this.prev = 0;
        this.next = 0;
        // Resetting context._sent for legacy support of Babel's
        // function.sent implementation.
        this.sent = this._sent = undefined;
        this.done = false;
        this.delegate = null;

        this.method = "next";
        this.arg = undefined;

        this.tryEntries.forEach(resetTryEntry);

        if (!skipTempReset) {
          for (var name in this) {
            // Not sure about the optimal order of these conditions:
            if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
              this[name] = undefined;
            }
          }
        }
      },

      stop: function stop() {
        this.done = true;

        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;
        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }

        return this.rval;
      },

      dispatchException: function dispatchException(exception) {
        if (this.done) {
          throw exception;
        }

        var context = this;
        function handle(loc, caught) {
          record.type = "throw";
          record.arg = exception;
          context.next = loc;

          if (caught) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            context.method = "next";
            context.arg = undefined;
          }

          return !!caught;
        }

        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;

          if (entry.tryLoc === "root") {
            // Exception thrown outside of any try block that could handle
            // it, so set the completion value of the entire function to
            // throw the exception.
            return handle("end");
          }

          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc");
            var hasFinally = hasOwn.call(entry, "finallyLoc");

            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              } else if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              }
            } else if (hasFinally) {
              if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else {
              throw new Error("try statement without catch or finally");
            }
          }
        }
      },

      abrupt: function abrupt(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }

        if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
          // Ignore the finally entry if control is not jumping to a
          // location outside the try/catch block.
          finallyEntry = null;
        }

        var record = finallyEntry ? finallyEntry.completion : {};
        record.type = type;
        record.arg = arg;

        if (finallyEntry) {
          this.method = "next";
          this.next = finallyEntry.finallyLoc;
          return ContinueSentinel;
        }

        return this.complete(record);
      },

      complete: function complete(record, afterLoc) {
        if (record.type === "throw") {
          throw record.arg;
        }

        if (record.type === "break" || record.type === "continue") {
          this.next = record.arg;
        } else if (record.type === "return") {
          this.rval = this.arg = record.arg;
          this.method = "return";
          this.next = "end";
        } else if (record.type === "normal" && afterLoc) {
          this.next = afterLoc;
        }

        return ContinueSentinel;
      },

      finish: function finish(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },

      "catch": function _catch(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if (record.type === "throw") {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }

        // The context.catch method must only be called with a location
        // argument that corresponds to a known catch block.
        throw new Error("illegal catch attempt");
      },

      delegateYield: function delegateYield(iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        };

        if (this.method === "next") {
          // Deliberately forget the last sent value so that we don't
          // accidentally pass it on to the delegate.
          this.arg = undefined;
        }

        return ContinueSentinel;
      }
    };
  }(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  _typeof(commonjsGlobal) === "object" ? commonjsGlobal : (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" ? window : (typeof self === "undefined" ? "undefined" : _typeof(self)) === "object" ? self : commonjsGlobal);
});

var _replacer = function _replacer(regExp, replace) {
  var replacer = replace === Object(replace) ? function (part) {
    return replace[part];
  } : replace;
  return function (it) {
    return String(it).replace(regExp, replacer);
  };
};

var $export$130 = _export;
var $re = _replacer(/[\\^$*+?.()|[\]{}]/g, '\\$&');

$export$130($export$130.S, 'RegExp', { escape: function escape(it) {
    return $re(it);
  } });

if (commonjsGlobal._babelPolyfill) {
  throw new Error("only one instance of babel-polyfill is allowed");
}
commonjsGlobal._babelPolyfill = true;

var DEFINE_PROPERTY = "defineProperty";
function define(O, key, value) {
  O[key] || Object[DEFINE_PROPERTY](O, key, {
    writable: true,
    configurable: true,
    value: value
  });
}

define(String.prototype, "padLeft", "".padStart);
define(String.prototype, "padRight", "".padEnd);

"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
  [][key] && define(Array, key, Function.call.bind([][key]));
});

/* global $ */

var $ = window.jQuery;

$(document).ready(function () {
    /***
     Plugins
     ***/

    // Headroom
    // Adds class to header to allow for fixed header to be hidden until user scrolls up
    // http://wicky.nillia.ms/headroom.js/
    $('body').headroom({
        offset: 205,
        tolerance: 5,
        classes: {
            initial: 'site-header--animated',
            pinned: 'site-header--slidedown',
            unpinned: 'site-header--slideup'
        }
    });

    // Launch fancybox
    // Used on image gallery thumbnails to display full res images
    // http://fancyapps.com/fancybox/
    $('.js-modal').fancybox({
        openEffect: 'none',
        closeEffect: 'none',
        padding: 0,
        closeBtn: true
    });

    /***
     global vars
     ***/

    var activeClass = 'active';
    var fixedClass = 'fixed';

    /***
     Functions
     ***/

    // Generic function to toggle active class
    function toggleActiveClass(element) {
        $(element).toggleClass(activeClass);
    }

    // Generic function to fixed class
    function toggleFixedClass(element) {
        $(element).toggleClass(fixedClass);
    }

    // Search overlay toggle
    function searchToggle(event) {
        event.preventDefault();
        toggleActiveClass(this);
        toggleActiveClass('.search-overlay');
        $('#search__input').focus();
    }

    $('.search-link').on('click', searchToggle);

    // Main menu mobile dropdown toggle
    function mainDropdownToggle() {
        $(this).closest('.main-menu-item').toggleClass(activeClass);
    }

    $('.link-toggle').on('click', mainDropdownToggle);

    // Dropdown toggle
    function dropdownToggle() {
        $(this).parent().toggleClass(activeClass);
    }

    $('.dropdown__toggle').on('click', dropdownToggle);

    // Dropdown hide
    function dropdownHide() {
        if (!$(event.target).closest('.dropdown__toggle').length) {
            $('.dropdown').removeClass('active');
        }
    }

    $(document).on('click', dropdownHide);

    // Filter toggle
    var $filterGroup = $('.filters-group');

    function filterToggle() {
        if (!$(this).hasClass(activeClass)) {
            $filterGroup.removeClass(activeClass);
        }
        $(this).toggleClass(activeClass);
    }

    $filterGroup.on('click', filterToggle);

    // Handle click outside of filters
    function hideOnClickOutside(selector) {
        var outsideClickListener = function outsideClickListener(event) {
            if (!$(event.target).closest(selector).length) {
                if ($(selector).is(':visible')) {
                    $('.filters-group').removeClass(activeClass);
                }
            }
        };

        document.addEventListener('click', outsideClickListener);
    }

    hideOnClickOutside('.filters');

    // Hamburger header nav
    // Fixes the body to prevent scrolling and displays mobile-nav when on mobile view
    function HamburgerToggle() {
        toggleActiveClass(this);
        toggleActiveClass('.site-header-nav');
        toggleActiveClass('.main-menu');
        toggleActiveClass('.audience-menu');
        toggleFixedClass('body');
    }

    //  Hamburger - Fixes the body to prevent scrolling and displays mobile-nav when on mobile view
    $('.mobile-only .hamburger').on('click', HamburgerToggle);

    // Career mobile menu
    $('.js-career-mobile-menu-toggle').on('click', function () {
        $('.js-career-mobile-menu').toggleClass('is-open');
    });

    // Career menu sticky
    var careerMenu = document.getElementById('career-menu');

    if (careerMenu) {
        var stickymenuoffset = careerMenu.offsetTop;

        window.addEventListener('scroll', function () {
            requestAnimationFrame(function () {
                if (window.pageYOffset > stickymenuoffset) {
                    careerMenu.classList.add('sticky');
                } else {
                    careerMenu.classList.remove('sticky');
                }
            });
        });
    }

    // Slow scroll on anchors
    function anchorScroll(event) {

        // prevent default link action
        event.preventDefault();

        // make some vars so it is easy to understand what we are doing
        var $clicked = $(this);
        var id = $clicked.attr('href');
        var $target = $(id);

        // if there is no target, fail silently
        if ($target.length === 0) {
            // TODO: this breaks the django debug toolbar and possibly some other event handlers too
            return false;
        }

        // animate html & body scrollTop property to the top position of the $target element
        $('html, body').animate({
            scrollTop: $target.offset().top
        }, 500);
    }

    // Slow scroll on anchor links
    $('.js-slowscroll').on('click', anchorScroll);

    // Sticky items
    function stickyRelocate() {

        var sticky_item = '#sticky';
        var sticky_class = 'stick';
        var $sticky_point = $('#sticky-anchor');
        var window_top = $(window).scrollTop();
        var div_top = 0;

        if ($sticky_point.length === 0) {
            return false;
        }

        div_top = $sticky_point.offset().top;

        if (window_top > div_top) {
            $(sticky_item).addClass(sticky_class);
            $sticky_point.height($(sticky_item).outerHeight());
        } else {
            $(sticky_item).removeClass(sticky_class);
            $sticky_point.height(0);
        }
    }

    // On scoll call stickyRelocate
    $(window).on('scroll', function () {
        stickyRelocate();
    });

    // Menu that changes on scroll
    $(window).on('scroll', function () {
        var scrollDistance = $(window).scrollTop();

        // Assign active class to nav links while scolling
        $('.js-section').each(function (i) {
            if ($(this).position().top <= scrollDistance) {
                $('.js-scroll-link.active').removeClass('active');
                $('.js-scroll-link').eq(i).addClass('active');
            }
        });
    });

    // Create Accordion
    function accordion() {

        // Check for items already open and remove open class
        $('.additional-info-item-heading').not(this).parent().removeClass('open');

        // Toggle class to parent
        $(this).parent().toggleClass('open');
    }

    // Run Accordion functions
    $('.js-accordion .additional-info-item-heading').on('click', accordion);

    // tabs
    function tabs($tab) {
        // Tab id is set in data-tab in html
        var tabid = $tab.attr('data-tab');
        var $tabSet = $tab.closest('.js-tabs');

        // Class to apply to active items
        var activeClassItem = 'current';
        var activeClassContent = 'current';

        // Remove all existing .current
        $tabSet.find('.js-tab').removeClass(activeClassItem);
        $tabSet.find('.js-tab-content').removeClass(activeClassContent);

        // Add current class
        $tab.addClass(activeClassItem);
        $tabSet.find('.js-' + tabid).addClass(activeClassContent);

        // Fire a custom event (used by the odometer number in the annual report sustainability tab)
        $tab.trigger('tabChanged');

        // Fire a custom event for the impact tabs (in annual report - used by the carousel at mobile)
        if ($tabSet.hasClass('js-impact-tabs')) {
            $tab.trigger('impactTabChanged');
        }
    }

    // Run tab function
    $('.js-tab').on('click', function (e) {
        e.preventDefault();
        tabs($(this));
    });

    // tabs dropdown functionality (so tab items collapse to a dropdown at mobile - for annual report)
    // click the trigger toggles a class to display the tab items
    $('.js-tabs-dropdown-trigger').on('click', function (e) {
        e.preventDefault();
        var $trigger = $(this);
        var $wrapper = $trigger.closest('.js-tabs-dropdown');
        $wrapper.toggleClass('show');
    });

    // clicking on a tab removes the class so the dropdown items are hidden
    $('.js-tab').on('click', function () {
        var $wrapper = $(this).closest('.js-tabs-dropdown');
        $wrapper.removeClass('show');
    });

    // scroll to filters on blog page if search params applied
    var url = window.location.href;
    var filterElement = $('.js-filters');
    if (url.indexOf('blog') > -1 && url.match(/\?./) && filterElement.length) {
        $('html, body').animate({
            scrollTop: filterElement.offset().top
        }, 750);
    }

    // Odometer functions for annual report sustainability tab
    // Odometer is es6 not jQuery
    var odometerData = [];

    function setUpOdometer() {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = document.querySelectorAll('.js-odometer')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var el = _step.value;


                var numberFrom = el.getAttribute('data-from');
                var numberTo = el.getAttribute('data-to');

                // eslint-disable-next-line no-undef
                var od = new Odometer({
                    el: el,
                    value: numberFrom
                });

                odometerData.push({
                    odometer: od,
                    element: $(el), // the visible library wants a jQuery element
                    numberTo: numberTo
                });
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
    }

    function changeOdometer() {
        odometerData.forEach(function (i) {
            if (i.element.visible()) {
                i.odometer.update(i.numberTo);
            }
        });
    }

    // Annual report scroll functionality
    $(window).scroll(function () {
        changeOdometer();
    });

    // Change odometer when the tab changes
    $(document).on('tabChanged', function () {
        changeOdometer();
    });

    setUpOdometer();

    // Set up carousel for farmer story on the annual report page
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = document.querySelectorAll('.js-farmer-story')[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var carousel = _step2.value;

            // eslint-disable-next-line no-undef
            new Glide(carousel, {
                type: 'carousel'
            }).mount();
        }

        // Set up carousels for the graphics on the annual report impact tabs - mobile only
        // There will be one for each impact tab, so they are stored in an array
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

    var impactCarousels = [];

    // On page load all the impact carousels are initialised but not mounted
    // Also stores whether a carousel is mounted or not
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
        for (var _iterator3 = document.querySelectorAll('.js-impact-carousel')[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var impactCarousel = _step3.value;

            impactCarousels.push({
                // eslint-disable-next-line no-undef
                glide: new Glide(impactCarousel, {
                    type: 'carousel',
                    perView: 1
                }),
                mounted: false
            });
        }

        // Functionality to mount the carousels when the breakpoint changes from desktop to mobile
        // Otherwise they get destroyed
        // Note that there seems to be a bug with glide if you create and destroy a carousel several times
        // so this may need to be done another way.
    } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
            }
        } finally {
            if (_didIteratorError3) {
                throw _iteratorError3;
            }
        }
    }

    function toggleCarousels() {
        if ($(window).width() < 769) {
            impactCarousels.forEach(function (i) {
                if (!i.mounted) {
                    i.glide.mount();
                    i.mounted = true;
                }
            });
        } else {
            impactCarousels.forEach(function (i) {
                if (i.mounted) {
                    i.glide.destroy();
                    i.mounted = false;
                }
            });
        }
    }

    // Updates the carousels when switching tabs (to fix layout)
    function updateCarousels() {
        impactCarousels.forEach(function (i) {
            if (i.mounted) {
                i.glide.update();
            }
        });
    }

    // listen for custom event when the impact tab changes and update the carousels
    $(document).on('impactTabChanged', function () {
        updateCarousels(); // sorts out the layout of the carousel if it was initally hidden
    });

    // initial call to toggle carousels on or off on page load
    if ($('.js-impact-carousel').length) {
        toggleCarousels();
    }

    // throttle the call to toggle the carousels as the page resizes.
    var resizeTimer; //Set resizeTimer to empty so it resets on page load

    $(window).resize(function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(toggleCarousels, 250);
    });

    function initCultureCarousel(selector) {
        var items = $(selector).children().length;
        var CULTURE_CODE_SLICK_SETTINGS = {
            arrows: items > 1,
            dots: items > 1,
            adaptiveHeight: true
        };
        $(selector).slick(CULTURE_CODE_SLICK_SETTINGS);
    }

    // culture code collapse
    $('a.collapse-close').on('click', function (e) {
        e.preventDefault();
        history.replaceState(null, null, ' '); // Remove hash completely from the url
        $($(this).attr('href')).slideToggle();
        $(this).find('svg').toggleClass('flip');
        var offset = $(this).closest('.culture-text').offset(); // Contains .top and .left
        offset.top -= 520;
        $('body').headroom('freeze');
        $('html, body').animate({
            scrollTop: offset.top,
            scrollLeft: offset.left
        });
        setTimeout(function () {
            $('body').headroom('unfreeze');
        }, 1000);
    });

    $('a.collapse').on('click', function (e) {
        e.preventDefault();
        window.location.hash = e.currentTarget.hash.replace('#', '');
        $($(this).attr('href')).slideToggle();
        // cant use toggleclass https://stackoverflow.com/questions/36130050/add-class-on-svg-path-element/36150373
        if ($(this).hasClass('isopen')) {
            $(this).find('svg').attr('class', 'none');
        } else {
            $(this).find('svg').attr('class', 'flip');
        }
        $(this).toggleClass('isopen');
        var offset = $(this).offset(); // Contains .top and .left
        offset.top -= 320;
        $('body').headroom('freeze');
        $('html, body').animate({
            scrollTop: offset.top,
            scrollLeft: offset.left
        });
        setTimeout(function () {
            $('body').headroom('unfreeze');
        }, 1000);

        var currentCarouselId = e.currentTarget.dataset.carouselId;
        initCultureCarousel('.js-culture-carousel[data-carousel-id=' + currentCarouselId + ']');
    });

    $(document).ready(function () {
        // get current url hash values.
        var current = window.location.hash;
        $('div.collapse').each(function () {
            if (current.replace('#', '') == this.id) {
                $(this).show();

                $('a[href*=' + current + ']').toggleClass('isopen');
                $('a[href*=' + current + ']').find('svg').attr('class', 'flip');

                var currentCarouselId = current.replace(/^\D+/g, '');
                initCultureCarousel('.js-culture-carousel[data-carousel-id=' + currentCarouselId + ']');

                var offset = $(this).offset(); // Contains .top and .left
                offset.top -= 520;
                $('html, body').animate({
                    scrollTop: offset.top,
                    scrollLeft: offset.left
                });
            }
        });
    });

    // sticky form should not redirect to success page
    $('#sticky-form').submit(function (e) {
        e.preventDefault();
        $('#sticky-form .error').remove();

        var form = $(this);
        var url = form.attr('action');

        $.ajax({
            type: 'POST',
            url: url,
            data: form.serialize(),
            success: function success(data) {
                var result = JSON.parse(data);
                if (result.success) {
                    var button = $('#sticky-form :button');
                    var originalHTML = button.html();
                    button.html(result.message);
                    setTimeout(function () {
                        button.html(originalHTML);
                    }, 1000);
                } else {
                    $('#sticky-form').prepend('<div class="error">' + result.message + '</div>');
                }
            }
        });
    });

    function lazyload(lazyloadThrottleTimeout, lazyloadImages) {
        if (lazyloadThrottleTimeout) {
            clearTimeout(lazyloadThrottleTimeout);
        }

        lazyloadThrottleTimeout = setTimeout(function () {
            var scrollTop = window.pageYOffset;
            lazyloadImages.forEach(function (img) {
                if (img.offsetTop < (window.innerHeight + scrollTop && img.dataset.src)) {
                    if (img.dataset.backgroundImageURL) {
                        img.style.backgroundImage = 'url(' + img.dataset.backgroundImageURL + ');';
                    } else {
                        img.src = img.dataset.src;
                    }
                    img.classList.remove('lazy');
                }
            });
            if (lazyloadImages.length == 0) {
                document.removeEventListener('scroll', lazyload(lazyloadThrottleTimeout, lazyloadImages));
                window.removeEventListener('resize', lazyload(lazyloadThrottleTimeout, lazyloadImages));
                window.removeEventListener('orientationChange', lazyload(lazyloadThrottleTimeout, lazyloadImages));
            }
        }, 20);
    }

    $(document).ready(function () {
        
        
        $('h2').not('.culture-title').each(function () {
            var wordArray = $(this).text().split(' ');
            if (wordArray.length > 1) {
                wordArray[wordArray.length - 2] += '&nbsp;' + wordArray[wordArray.length - 1];
                wordArray.pop();
                $(this).html(wordArray.join(' '));
            }
        });
    });

    $(document).ready(function () {
        var lazyloadImages = document.querySelectorAll('.lazy');

        if ('IntersectionObserver' in window) {
            // eslint-disable-next-line no-unused-vars
            var imageObserver = new IntersectionObserver(function (entries, observer) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        var image = entry.target;
                        if (image.dataset.src) {
                            if (image.classList.contains('bgimage')) {
                                image.style.backgroundImage = 'url(' + image.dataset.src + ')';
                            } else {
                                image.src = image.dataset.src;
                            }
                            image.classList.remove('lazy');
                        }
                        imageObserver.unobserve(image);
                    }
                });
            });

            lazyloadImages.forEach(function (image) {
                imageObserver.observe(image);
            });
        } else {
            var lazyloadThrottleTimeout;

            document.addEventListener('scroll', lazyload(lazyloadThrottleTimeout, lazyloadImages));
            window.addEventListener('resize', lazyload(lazyloadThrottleTimeout, lazyloadImages));
            window.addEventListener('orientationChange', lazyload(lazyloadThrottleTimeout, lazyloadImages));
        }
    });
});

(function () {
    // Use own self-invoking function as for some reason it won't work in the one above
    var supportsCustomElements = 'customElements' in window;
    var givepage = document.querySelector('.js-give-page');
    if (givepage && supportsCustomElements === true) {
        try {
            var formHeading = document.querySelector('.donate-form__item__label ');

            document.querySelector('.donate-form__item__container').remove();
            document.querySelector('.donate-form__item--actions').remove();

            var newForm = document.createElement('oaf-donate-prompt');
            formHeading.insertAdjacentElement('afterend', newForm);
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error('Error loading donation web component');
        }
    }
})();

})));
//# sourceMappingURL=main.js.map
