'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var checkPropTypes = _interopDefault(require('prop-types/checkPropTypes'));
var PropTypes = _interopDefault(require('prop-types'));

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

var n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.concurrent_mode"):60111,y=n?Symbol.for("react.forward_ref"):60112,z=n?Symbol.for("react.suspense"):60113,aa=n?Symbol.for("react.memo"):
60115,ba=n?Symbol.for("react.lazy"):60116,A="function"===typeof Symbol&&Symbol.iterator;function ca(a,b,d,c,e,g,h,f){if(!a){a=void 0;if(void 0===b)a=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[d,c,e,g,h,f],m=0;a=Error(b.replace(/%s/g,function(){return l[m++]}));a.name="Invariant Violation";}a.framesToPop=1;throw a;}}
function B(a){for(var b=arguments.length-1,d="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=0;c<b;c++)d+="&args[]="+encodeURIComponent(arguments[c+1]);ca(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",d);}var C={isMounted:function(){return !1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D={};
function E(a,b,d){this.props=a;this.context=b;this.refs=D;this.updater=d||C;}E.prototype.isReactComponent={};E.prototype.setState=function(a,b){"object"!==typeof a&&"function"!==typeof a&&null!=a?B("85"):void 0;this.updater.enqueueSetState(this,a,b,"setState");};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};function F(){}F.prototype=E.prototype;function G(a,b,d){this.props=a;this.context=b;this.refs=D;this.updater=d||C;}var H=G.prototype=new F;
H.constructor=G;objectAssign(H,E.prototype);H.isPureReactComponent=!0;var I={current:null},J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,d){var c=void 0,e={},g=null,h=null;if(null!=b)for(c in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,c)&&!L.hasOwnProperty(c)&&(e[c]=b[c]);var f=arguments.length-2;if(1===f)e.children=d;else if(1<f){for(var l=Array(f),m=0;m<f;m++)l[m]=arguments[m+2];e.children=l;}if(a&&a.defaultProps)for(c in f=a.defaultProps,f)void 0===e[c]&&(e[c]=f[c]);return {$$typeof:p,type:a,key:g,ref:h,props:e,_owner:J.current}}
function da(a,b){return {$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function N(a){return "object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return "$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var O=/\/+/g,P=[];function Q(a,b,d,c){if(P.length){var e=P.pop();e.result=a;e.keyPrefix=b;e.func=d;e.context=c;e.count=0;return e}return {result:a,keyPrefix:b,func:d,context:c,count:0}}
function R(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>P.length&&P.push(a);}
function S(a,b,d,c){var e=typeof a;if("undefined"===e||"boolean"===e)a=null;var g=!1;if(null===a)g=!0;else switch(e){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0;}}if(g)return d(c,a,""===b?"."+T(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var h=0;h<a.length;h++){e=a[h];var f=b+T(e,h);g+=S(e,f,d,c);}else if(null===a||"object"!==typeof a?f=null:(f=A&&a[A]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),h=
0;!(e=a.next()).done;)e=e.value,f=b+T(e,h++),g+=S(e,f,d,c);else"object"===e&&(d=""+a,B("31","[object Object]"===d?"object with keys {"+Object.keys(a).join(", ")+"}":d,""));return g}function U(a,b,d){return null==a?0:S(a,"",b,d)}function T(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function ea(a,b){a.func.call(a.context,b,a.count++);}
function fa(a,b,d){var c=a.result,e=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?V(a,c,d,function(a){return a}):null!=a&&(N(a)&&(a=da(a,e+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+d)),c.push(a));}function V(a,b,d,c,e){var g="";null!=d&&(g=(""+d).replace(O,"$&/")+"/");b=Q(b,g,c,e);U(a,fa,b);R(b);}function W(){var a=I.current;null===a?B("321"):void 0;return a}
var X={Children:{map:function(a,b,d){if(null==a)return a;var c=[];V(a,c,null,b,d);return c},forEach:function(a,b,d){if(null==a)return a;b=Q(null,null,b,d);U(a,ea,b);R(b);},count:function(a){return U(a,function(){return null},null)},toArray:function(a){var b=[];V(a,b,null,function(a){return a});return b},only:function(a){N(a)?void 0:B("143");return a}},createRef:function(){return {current:null}},Component:E,PureComponent:G,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,
_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:v,_context:a};return a.Consumer=a},forwardRef:function(a){return {$$typeof:y,render:a}},lazy:function(a){return {$$typeof:ba,_ctor:a,_status:-1,_result:null}},memo:function(a,b){return {$$typeof:aa,type:a,compare:void 0===b?null:b}},useCallback:function(a,b){return W().useCallback(a,b)},useContext:function(a,b){return W().useContext(a,b)},useEffect:function(a,b){return W().useEffect(a,b)},useImperativeHandle:function(a,
b,d){return W().useImperativeHandle(a,b,d)},useDebugValue:function(){},useLayoutEffect:function(a,b){return W().useLayoutEffect(a,b)},useMemo:function(a,b){return W().useMemo(a,b)},useReducer:function(a,b,d){return W().useReducer(a,b,d)},useRef:function(a){return W().useRef(a)},useState:function(a){return W().useState(a)},Fragment:r,StrictMode:t,Suspense:z,createElement:M,cloneElement:function(a,b,d){null===a||void 0===a?B("267",a):void 0;var c=void 0,e=objectAssign({},a.props),g=a.key,h=a.ref,f=a._owner;if(null!=
b){void 0!==b.ref&&(h=b.ref,f=J.current);void 0!==b.key&&(g=""+b.key);var l=void 0;a.type&&a.type.defaultProps&&(l=a.type.defaultProps);for(c in b)K.call(b,c)&&!L.hasOwnProperty(c)&&(e[c]=void 0===b[c]&&void 0!==l?l[c]:b[c]);}c=arguments.length-2;if(1===c)e.children=d;else if(1<c){l=Array(c);for(var m=0;m<c;m++)l[m]=arguments[m+2];e.children=l;}return {$$typeof:p,type:a.type,key:g,ref:h,props:e,_owner:f}},createFactory:function(a){var b=M.bind(null,a);b.type=a;return b},isValidElement:N,version:"16.8.6",
unstable_ConcurrentMode:x,unstable_Profiler:u,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:I,ReactCurrentOwner:J,assign:objectAssign}},Y={default:X},Z=Y&&X||Y;var react_production_min=Z.default||Z;

var react_development = createCommonjsModule(function (module) {



if (process.env.NODE_ENV !== "production") {
  (function() {

var _assign = objectAssign;
var checkPropTypes$$1 = checkPropTypes;

// TODO: this is special because it gets imported during build.

var ReactVersion = '16.8.6';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;

var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';

function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }
  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }
  return null;
}

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function () {};

{
  validateFormat = function (format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error = void 0;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

// Relying on the `invariant()` implementation lets us
// preserve the format and params in the www builds.

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warningWithoutStack = function () {};

{
  warningWithoutStack = function (condition, format) {
    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    if (format === undefined) {
      throw new Error('`warningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (args.length > 8) {
      // Check before the condition to catch violations early.
      throw new Error('warningWithoutStack() currently supports at most 8 arguments.');
    }
    if (condition) {
      return;
    }
    if (typeof console !== 'undefined') {
      var argsWithFormat = args.map(function (item) {
        return '' + item;
      });
      argsWithFormat.unshift('Warning: ' + format);

      // We intentionally don't use spread (or .apply) directly because it
      // breaks IE9: https://github.com/facebook/react/issues/13610
      Function.prototype.apply.call(console.error, console, argsWithFormat);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      throw new Error(message);
    } catch (x) {}
  };
}

var warningWithoutStack$1 = warningWithoutStack;

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + '.' + callerName;
    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }
    warningWithoutStack$1(false, "Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);
    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}

/**
 * This is the abstract API for an update queue.
 */
var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};
{
  Object.freeze(emptyObject);
}

/**
 * Base class helpers for the updating state of a component.
 */
function Component(props, context, updater) {
  this.props = props;
  this.context = context;
  // If a component has string refs, we will assign a different object later.
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};

/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */
Component.prototype.setState = function (partialState, callback) {
  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : void 0;
  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};

/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */
Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};

/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */
{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };
  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        lowPriorityWarning$1(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
        return undefined;
      }
    });
  };
  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}
ComponentDummy.prototype = Component.prototype;

/**
 * Convenience component with default shallow equality check for sCU.
 */
function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  // If a component has string refs, we will assign a different object later.
  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent;
// Avoid an extra prototype jump for these methods.
_assign(pureComponentPrototype, Component.prototype);
pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };
  {
    Object.seal(refObject);
  }
  return refObject;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var BEFORE_SLASH_RE = /^(.*)[\\\/]/;

var describeComponentFrame = function (name, source, ownerName) {
  var sourceInfo = '';
  if (source) {
    var path = source.fileName;
    var fileName = path.replace(BEFORE_SLASH_RE, '');
    {
      // In DEV, include code for a common special case:
      // prefer "folder/index.js" instead of just "index.js".
      if (/^index\./.test(fileName)) {
        var match = path.match(BEFORE_SLASH_RE);
        if (match) {
          var pathBeforeSlash = match[1];
          if (pathBeforeSlash) {
            var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
            fileName = folderName + '/' + fileName;
          }
        }
      }
    }
    sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
  } else if (ownerName) {
    sourceInfo = ' (created by ' + ownerName + ')';
  }
  return '\n    in ' + (name || 'Unknown') + sourceInfo;
};

var Resolved = 1;


function refineResolvedLazyComponent(lazyComponent) {
  return lazyComponent._status === Resolved ? lazyComponent._result : null;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + '(' + functionName + ')' : wrapperName);
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }
  {
    if (typeof type.tag === 'number') {
      warningWithoutStack$1(false, 'Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }
  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }
  if (typeof type === 'string') {
    return type;
  }
  switch (type) {
    case REACT_CONCURRENT_MODE_TYPE:
      return 'ConcurrentMode';
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';
    case REACT_PORTAL_TYPE:
      return 'Portal';
    case REACT_PROFILER_TYPE:
      return 'Profiler';
    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';
    case REACT_SUSPENSE_TYPE:
      return 'Suspense';
  }
  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        return 'Context.Consumer';
      case REACT_PROVIDER_TYPE:
        return 'Context.Provider';
      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');
      case REACT_MEMO_TYPE:
        return getComponentName(type.type);
      case REACT_LAZY_TYPE:
        {
          var thenable = type;
          var resolvedThenable = refineResolvedLazyComponent(thenable);
          if (resolvedThenable) {
            return getComponentName(resolvedThenable);
          }
        }
    }
  }
  return null;
}

var ReactDebugCurrentFrame = {};

var currentlyValidatingElement = null;

function setCurrentlyValidatingElement(element) {
  {
    currentlyValidatingElement = element;
  }
}

{
  // Stack implementation injected by the current renderer.
  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = '';

    // Add an extra top frame while an element is being validated
    if (currentlyValidatingElement) {
      var name = getComponentName(currentlyValidatingElement.type);
      var owner = currentlyValidatingElement._owner;
      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
    }

    // Delegate to the injected renderer-specific implementation
    var impl = ReactDebugCurrentFrame.getCurrentStack;
    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentOwner: ReactCurrentOwner,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  _assign(ReactSharedInternals, {
    // These should not be included in production.
    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
    // TODO: remove in React 17.0.
    ReactComponentTreeHook: {}
  });
}

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = warningWithoutStack$1;

{
  warning = function (condition, format) {
    if (condition) {
      return;
    }
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();
    // eslint-disable-next-line react-internal/warning-and-invariant-args

    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    warningWithoutStack$1.apply(undefined, [false, format + '%s'].concat(args, [stack]));
  };
}

var warning$1 = warning;

var hasOwnProperty = Object.prototype.hasOwnProperty;

var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};

var specialPropKeyWarningShown = void 0;
var specialPropRefWarningShown = void 0;

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    if (!specialPropKeyWarningShown) {
      specialPropKeyWarningShown = true;
      warningWithoutStack$1(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    if (!specialPropRefWarningShown) {
      specialPropRefWarningShown = true;
      warningWithoutStack$1(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, no instanceof check
 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} key
 * @param {string|object} ref
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @param {*} owner
 * @param {*} props
 * @internal
 */
var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,

    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,

    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {};

    // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.
    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    });
    // self and source are DEV only properties.
    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    });
    // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.
    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });
    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};

/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */
function createElement(type, config, children) {
  var propName = void 0;

  // Reserved names are extracted
  var props = {};

  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source;
    // Remaining properties are added to a new props object
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }
    props.children = childArray;
  }

  // Resolve default props
  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }
  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }
      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }
  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}

/**
 * Return a function that produces ReactElements of a given type.
 * See https://reactjs.org/docs/react-api.html#createfactory
 */


function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

  return newElement;
}

/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */
function cloneElement(element, config, children) {
  !!(element === null || element === undefined) ? invariant(false, 'React.cloneElement(...): The argument must be a React element, but you passed %s.', element) : void 0;

  var propName = void 0;

  // Original props are copied
  var props = _assign({}, element.props);

  // Reserved names are extracted
  var key = element.key;
  var ref = element.ref;
  // Self is preserved since the owner is preserved.
  var self = element._self;
  // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.
  var source = element._source;

  // Owner will be preserved, unless ref is overridden
  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    // Remaining properties override existing props
    var defaultProps = void 0;
    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}

/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */
function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';

/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */
function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });

  return '$' + escapedString;
}

/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */

var didWarnAboutMaps = false;

var userProvidedKeyEscapeRegex = /\/+/g;
function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];
function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
  if (traverseContextPool.length) {
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else {
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0
    };
  }
}

function releaseTraverseContext(traverseContext) {
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;
  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}

/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;
      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }
    }
  }

  if (invokeCallback) {
    callback(traverseContext, children,
    // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child = void 0;
  var nextName = void 0;
  var subtreeCount = 0; // Count of children found in the current subtree.
  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);
    if (typeof iteratorFn === 'function') {
      {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          !didWarnAboutMaps ? warning$1(false, 'Using Maps as children is unsupported and will likely yield ' + 'unexpected results. Convert it to a sequence/iterable of keyed ' + 'ReactElements instead.') : void 0;
          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step = void 0;
      var ii = 0;
      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = '';
      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
      }
      var childrenString = '' + children;
      invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum);
    }
  }

  return subtreeCount;
}

/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}

/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */
function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof component === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  }
  // Implicit key determined by the index in the set
  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;

  func.call(context, child, bookKeeping.count++);
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }
  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;


  var mappedChild = func.call(context, child, bookKeeping.count++);
  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function (c) {
      return c;
    });
  } else if (mappedChild != null) {
    if (isValidElement(mappedChild)) {
      mappedChild = cloneAndReplaceKey(mappedChild,
      // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }
    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';
  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }
  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}

/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */
function countChildren(children) {
  return traverseAllChildren(children, function () {
    return null;
  }, null);
}

/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */
function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, function (child) {
    return child;
  });
  return result;
}

/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */
function onlyChild(children) {
  !isValidElement(children) ? invariant(false, 'React.Children.only expected to receive a single React element child.') : void 0;
  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      !(calculateChangedBits === null || typeof calculateChangedBits === 'function') ? warningWithoutStack$1(false, 'createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits) : void 0;
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };

  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };

  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    };
    // $FlowFixMe: Flow complains about not setting a value, which is intentional here
    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;
            warning$1(false, 'Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }
          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;
            warning$1(false, 'Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }
          return context.Consumer;
        }
      }
    });
    // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty
    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

function lazy(ctor) {
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _ctor: ctor,
    // React uses these fields to store the result.
    _status: -1,
    _result: null
  };

  {
    // In production, this would just set it on the object.
    var defaultProps = void 0;
    var propTypes = void 0;
    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          warning$1(false, 'React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
          defaultProps = newDefaultProps;
          // Match production behavior more closely:
          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          warning$1(false, 'React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
          propTypes = newPropTypes;
          // Match production behavior more closely:
          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      warningWithoutStack$1(false, 'forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      warningWithoutStack$1(false, 'forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      !(
      // Do not warn for 0 arguments because it could be due to usage of the 'arguments' object
      render.length === 0 || render.length === 2) ? warningWithoutStack$1(false, 'forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.') : void 0;
    }

    if (render != null) {
      !(render.defaultProps == null && render.propTypes == null) ? warningWithoutStack$1(false, 'forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?') : void 0;
    }
  }

  return {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };
}

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      warningWithoutStack$1(false, 'memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }
  return {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;
  !(dispatcher !== null) ? invariant(false, 'Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.') : void 0;
  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();
  {
    !(unstable_observedBits === undefined) ? warning$1(false, 'useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://fb.me/rules-of-hooks' : '') : void 0;

    // TODO: add a more generic warning for invalid values.
    if (Context._context !== undefined) {
      var realContext = Context._context;
      // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.
      if (realContext.Consumer === Context) {
        warning$1(false, 'Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        warning$1(false, 'Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }
  return dispatcher.useContext(Context, unstable_observedBits);
}

function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}

function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}

function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}

function useEffect(create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, inputs);
}

function useLayoutEffect(create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, inputs);
}

function useCallback(callback, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, inputs);
}

function useMemo(create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, inputs);
}

function useImperativeHandle(ref, create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, inputs);
}

function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

/**
 * ReactElementValidator provides a wrapper around a element factory
 * which validates the props passed to the element. This is intended to be
 * used only in DEV and could be replaced by a static type checker for languages
 * that support it.
 */

var propTypesMisspellWarningShown = void 0;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);
    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }
  return '';
}

function getSourceInfoErrorAddendum(elementProps) {
  if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {
    var source = elementProps.__source;
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }
  return '';
}

/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */
var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
    if (parentName) {
      info = '\n\nCheck the top-level render call using <' + parentName + '>.';
    }
  }
  return info;
}

/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */
function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }
  element._store.validated = true;

  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }
  ownerHasKeyUseWarning[currentComponentErrorInfo] = true;

  // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.
  var childOwner = '';
  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = ' It was passed a child from ' + getComponentName(element._owner.type) + '.';
  }

  setCurrentlyValidatingElement(element);
  {
    warning$1(false, 'Each child in a list should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
  }
  setCurrentlyValidatingElement(null);
}

/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */
function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }
  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];
      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);
    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step = void 0;
        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}

/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */
function validatePropTypes(element) {
  var type = element.type;
  if (type === null || type === undefined || typeof type === 'string') {
    return;
  }
  var name = getComponentName(type);
  var propTypes = void 0;
  if (typeof type === 'function') {
    propTypes = type.propTypes;
  } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE ||
  // Note: Memo only checks outer props here.
  // Inner props are checked in the reconciler.
  type.$$typeof === REACT_MEMO_TYPE)) {
    propTypes = type.propTypes;
  } else {
    return;
  }
  if (propTypes) {
    setCurrentlyValidatingElement(element);
    checkPropTypes$$1(propTypes, element.props, 'prop', name, ReactDebugCurrentFrame.getStackAddendum);
    setCurrentlyValidatingElement(null);
  } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
    propTypesMisspellWarningShown = true;
    warningWithoutStack$1(false, 'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
  }
  if (typeof type.getDefaultProps === 'function') {
    !type.getDefaultProps.isReactClassApproved ? warningWithoutStack$1(false, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
  }
}

/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */
function validateFragmentProps(fragment) {
  setCurrentlyValidatingElement(fragment);

  var keys = Object.keys(fragment.props);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (key !== 'children' && key !== 'key') {
      warning$1(false, 'Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
      break;
    }
  }

  if (fragment.ref !== null) {
    warning$1(false, 'Invalid attribute `ref` supplied to `React.Fragment`.');
  }

  setCurrentlyValidatingElement(null);
}

function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type);

  // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.
  if (!validType) {
    var info = '';
    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendum(props);
    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString = void 0;
    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = '<' + (getComponentName(type.type) || 'Unknown') + ' />';
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    warning$1(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
  }

  var element = createElement.apply(this, arguments);

  // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.
  if (element == null) {
    return element;
  }

  // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)
  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}

function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;
  // Legacy hook: remove it
  {
    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        lowPriorityWarning$1(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}

function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);
  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }
  validatePropTypes(newElement);
  return newElement;
}

var React = {
  Children: {
    map: mapChildren,
    forEach: forEachChildren,
    count: countChildren,
    toArray: toArray,
    only: onlyChild
  },

  createRef: createRef,
  Component: Component,
  PureComponent: PureComponent,

  createContext: createContext,
  forwardRef: forwardRef,
  lazy: lazy,
  memo: memo,

  useCallback: useCallback,
  useContext: useContext,
  useEffect: useEffect,
  useImperativeHandle: useImperativeHandle,
  useDebugValue: useDebugValue,
  useLayoutEffect: useLayoutEffect,
  useMemo: useMemo,
  useReducer: useReducer,
  useRef: useRef,
  useState: useState,

  Fragment: REACT_FRAGMENT_TYPE,
  StrictMode: REACT_STRICT_MODE_TYPE,
  Suspense: REACT_SUSPENSE_TYPE,

  createElement: createElementWithValidation,
  cloneElement: cloneElementWithValidation,
  createFactory: createFactoryWithValidation,
  isValidElement: isValidElement,

  version: ReactVersion,

  unstable_ConcurrentMode: REACT_CONCURRENT_MODE_TYPE,
  unstable_Profiler: REACT_PROFILER_TYPE,

  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ReactSharedInternals
};



var React$2 = Object.freeze({
	default: React
});

var React$3 = ( React$2 && React ) || React$2;

// TODO: decide on the top-level export form.
// This is hacky but makes it work with both Rollup and Jest.
var react = React$3.default || React$3;

module.exports = react;
  })();
}
});

var react = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = react_production_min;
} else {
  module.exports = react_development;
}
});

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

/**
 * @class Modal Background - Is the layer of color under the modal, you can choose the color
 */

var ModalBackground =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(ModalBackground, _React$PureComponent);

  function ModalBackground() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ModalBackground);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ModalBackground)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleEscPressed", function (event) {
      var onClose = _this.props.onClose; // keyCode 27 = ESC key

      if (event.keyCode === 27) {
        onClose();
      }
    });

    return _this;
  }

  _createClass(ModalBackground, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // add Key listener when key ESC is pressed
      document.addEventListener("keydown", this.handleEscPressed);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // remove Key listener when key ESC is pressed
      document.removeEventListener("keydown", this.handleEscPressed);
    }
    /**
     * @function handleEscPressed to close the modal with the ESC key
     */

  }, {
    key: "render",
    value: function render() {
      var onClose = this.props.onClose;
      return react.createElement("div", {
        className: "modal--background",
        onClick: onClose,
        role: "presentation"
      });
    }
  }]);

  return ModalBackground;
}(react.PureComponent);

_defineProperty(ModalBackground, "propTypes", {
  onClose: PropTypes.func.isRequired
});

/**
 * @class Icon - Is the component to use icons from our font-icon
 */

var Icon =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Icon, _React$PureComponent);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, _getPrototypeOf(Icon).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: "render",

    /**
     * @property {string} icon - The function to close the modal
     * @property {string} size - to define icon's size
     * @property {string} color - To define icon's color
     */
    value: function render() {
      var _this$props = this.props,
          icon = _this$props.icon,
          size = _this$props.size,
          color = _this$props.color;
      return react.createElement("i", {
        className: "icon-".concat(icon, " color--").concat(color, " size--").concat(size, " icon--height")
      });
    }
  }]);

  return Icon;
}(react.PureComponent);

_defineProperty(Icon, "propTypes", {
  icon: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string
});

Icon.defaultProps = {
  size: "XXL",
  color: "gray-l1",
  icon: 'cross'
};

/**
 * @class ButtonIcon - It is a button that works as an icon, without text
 */

var ButtonIcon =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(ButtonIcon, _React$PureComponent);

  function ButtonIcon() {
    _classCallCheck(this, ButtonIcon);

    return _possibleConstructorReturn(this, _getPrototypeOf(ButtonIcon).apply(this, arguments));
  }

  _createClass(ButtonIcon, [{
    key: "render",

    /**
     * @property {string} icon -The name of the icon
     * @property {string} color - The color of the icon
     * @property {string} size- The size of the icon
     * @property {func} onClick - The function triggered by the button
     * @property {string} className - Just in case you need another class
     * @property {string} type - Button type
     * @property {bool} disabled - Button could be disabled
     */
    value: function render() {
      var _this$props = this.props,
          icon = _this$props.icon,
          color = _this$props.color,
          size = _this$props.size,
          onClick = _this$props.onClick,
          className = _this$props.className,
          type = _this$props.type,
          disabled = _this$props.disabled;
      return react.createElement("button", {
        type: type,
        className: classnames("btn", "btn--icon", className),
        onClick: onClick,
        disabled: disabled
      }, react.createElement(Icon, {
        icon: icon,
        color: color,
        size: size
      }));
    }
  }]);

  return ButtonIcon;
}(react.PureComponent);

_defineProperty(ButtonIcon, "propTypes", {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool
});

ButtonIcon.defaultProps = {
  className: "",
  size: "XXL",
  color: "gray-l1",
  type: "button",
  disabled: false
};

/**
 * @class ModalCard - Is the card for the modals and it contains a cross icon by default
 */

var ModalCard =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(ModalCard, _React$PureComponent);

  function ModalCard() {
    _classCallCheck(this, ModalCard);

    return _possibleConstructorReturn(this, _getPrototypeOf(ModalCard).apply(this, arguments));
  }

  _createClass(ModalCard, [{
    key: "render",

    /**
     * @property {func} onClose - The function to close the modal
     * @property {node} children - The content of the modal
     * @property {string} className - Just in case you need another class
     */
    value: function render() {
      var _this$props = this.props,
          onClose = _this$props.onClose,
          children = _this$props.children,
          className = _this$props.className;
      return react.createElement("div", {
        className: classnames("modal", className)
      }, react.createElement("div", {
        className: "icons"
      }, react.createElement(ButtonIcon, {
        icon: "cross",
        color: "gray-l2",
        size: "L",
        onClick: onClose
      })), react.createElement("div", {
        className: "modal--content"
      }, children));
    }
  }]);

  return ModalCard;
}(react.PureComponent);

_defineProperty(ModalCard, "propTypes", {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
});

ModalCard.defaultProps = {
  className: ""
};

/**
 * @class Modal - It contains the modal card and the modal background
 */

var Modal =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Modal, _React$PureComponent);

  function Modal() {
    _classCallCheck(this, Modal);

    return _possibleConstructorReturn(this, _getPrototypeOf(Modal).apply(this, arguments));
  }

  _createClass(Modal, [{
    key: "render",

    /**
     * @property {bool} show - Determines if the modal is visible
     * @property {func} onClose - The function to close the modal
     * @property {node} children - The content of the modal
     * @property {string} className - Just in case you need another class
     */
    value: function render() {
      var _this$props = this.props,
          show = _this$props.show,
          onClose = _this$props.onClose,
          children = _this$props.children,
          className = _this$props.className,
          classNameWrapper = _this$props.classNameWrapper;
      return react.createElement("div", {
        className: classnames({
          hidden: !show
        }, "modal--wrapper", classNameWrapper)
      }, react.createElement(ModalBackground, {
        onClose: onClose
      }), react.createElement(ModalCard, {
        onClose: onClose,
        className: className
      }, children));
    }
  }]);

  return Modal;
}(react.PureComponent);

_defineProperty(Modal, "propTypes", {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  classNameWrapper: PropTypes.string
});

Modal.defaultProps = {
  className: "",
  classNameWrapper: ""
};

/**
 * @class Modal Header - Is the title of the modal
 */

var ModalHeader =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(ModalHeader, _React$PureComponent);

  function ModalHeader() {
    _classCallCheck(this, ModalHeader);

    return _possibleConstructorReturn(this, _getPrototypeOf(ModalHeader).apply(this, arguments));
  }

  _createClass(ModalHeader, [{
    key: "render",

    /**
     * @property {string} title - Title of the modal
     */
    value: function render() {
      var title = this.props.title;
      return react.createElement("div", {
        className: "modal--header"
      }, react.createElement("h2", null, title));
    }
  }]);

  return ModalHeader;
}(react.PureComponent);

_defineProperty(ModalHeader, "propTypes", {
  title: PropTypes.string.isRequired
});

/**
 * @class Modal Footer - Is the footer of the modal
 */

var ModalFooter =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(ModalFooter, _React$PureComponent);

  function ModalFooter() {
    _classCallCheck(this, ModalFooter);

    return _possibleConstructorReturn(this, _getPrototypeOf(ModalFooter).apply(this, arguments));
  }

  _createClass(ModalFooter, [{
    key: "render",

    /**
     * @property {node} children - The content of the footer
     */
    value: function render() {
      var children = this.props.children;
      return react.createElement("div", {
        className: "modal--footer"
      }, children);
    }
  }]);

  return ModalFooter;
}(react.PureComponent);

_defineProperty(ModalFooter, "propTypes", {
  children: PropTypes.node.isRequired
});

/**
 * @class ButtonText - Is a button that only contains text
 */

var ButtonText =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(ButtonText, _React$PureComponent);

  function ButtonText() {
    _classCallCheck(this, ButtonText);

    return _possibleConstructorReturn(this, _getPrototypeOf(ButtonText).apply(this, arguments));
  }

  _createClass(ButtonText, [{
    key: "render",

    /**
     * @property {string} text -The text of the button
     * @property {func} onClick - The function triggered by the button
     * @property {string} className - Just in case you need another class
     * @property {string} color -  The color of the button
     * @property {string} type - Button type
     * @property {bool} disabled - Button could be disabled
     * @property {string} borderColor - Button could have a border color
     * @see See './../../../styles/variables/_colors.scss' for the list of color names
     */
    value: function render() {
      var _this$props = this.props,
          color = _this$props.color,
          onClick = _this$props.onClick,
          text = _this$props.text,
          className = _this$props.className,
          type = _this$props.type,
          disabled = _this$props.disabled,
          borderColor = _this$props.borderColor;
      return react.createElement("button", {
        className: classnames("btn", "btn--text", "bg--".concat(color), "border--".concat(borderColor), className),
        onClick: onClick,
        type: type,
        disabled: disabled
      }, react.createElement("p", null, text));
    }
  }]);

  return ButtonText;
}(react.PureComponent);

_defineProperty(ButtonText, "propTypes", {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  borderColor: PropTypes.string
});

ButtonText.defaultProps = {
  className: "",
  type: "button",
  disabled: false,
  borderColor: ""
};

/**
 * @Class Modal Medal - Is the modal for the Medals, it has its own style, but shares the Modal component
 */

var ModalMedal =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(ModalMedal, _React$PureComponent);

  function ModalMedal() {
    _classCallCheck(this, ModalMedal);

    return _possibleConstructorReturn(this, _getPrototypeOf(ModalMedal).apply(this, arguments));
  }

  _createClass(ModalMedal, [{
    key: "render",

    /**
     * @property {bool} show - Determines if the modal is visible
     * @property {func} onClose - The function to close the modal
     * @property {node} children - Medals, could be more than one
     * @property {string} title - The title of the medal
     * @property {string} message - The message of the modal
     * @property {string} btnText - The text of the button
     * @property {string} btnColor - The color of the button, it's blue by default
     * @see See './../../../styles/variables/_colors.scss' for the list of color names
     */
    value: function render() {
      var _this$props = this.props,
          show = _this$props.show,
          onClose = _this$props.onClose,
          children = _this$props.children,
          title = _this$props.title,
          btnText = _this$props.btnText,
          btnColor = _this$props.btnColor,
          message = _this$props.message;
      return react.createElement(Modal, {
        show: show,
        className: "modal--medal",
        onClose: onClose
      }, react.createElement("div", {
        className: "medals"
      }, react.Children.map(children, function (child) {
        return child;
      })), react.createElement("div", {
        className: "stars--container"
      }, react.createElement("div", {
        id: "stars"
      }), react.createElement("div", {
        id: "stars2"
      }), react.createElement("div", {
        id: "stars3"
      })), react.createElement(ModalHeader, {
        title: title
      }), react.createElement("p", null, message), react.createElement(ModalFooter, null, react.createElement(ButtonText, {
        text: btnText,
        color: btnColor,
        onClick: onClose
      })));
    }
  }]);

  return ModalMedal;
}(react.PureComponent);

_defineProperty(ModalMedal, "propTypes", {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  btnColor: PropTypes.string
});

ModalMedal.defaultProps = {
  btnColor: "blue"
};

/**
 * @Class Medal - The image of the medal
 */

var Medal =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Medal, _React$PureComponent);

  function Medal() {
    _classCallCheck(this, Medal);

    return _possibleConstructorReturn(this, _getPrototypeOf(Medal).apply(this, arguments));
  }

  _createClass(Medal, [{
    key: "render",

    /**
     * @property {string} medalSrc - Medal URL
     */
    value: function render() {
      var medalSrc = this.props.medalSrc;
      return react.createElement("img", {
        alt: "Medal",
        src: medalSrc
      });
    }
  }]);

  return Medal;
}(react.PureComponent);

_defineProperty(Medal, "propTypes", {
  medalSrc: PropTypes.string.isRequired
});

/**
 * @class ButtonText - Is a button that only contains text
 */

var ButtonIconText =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(ButtonIconText, _React$PureComponent);

  function ButtonIconText() {
    _classCallCheck(this, ButtonIconText);

    return _possibleConstructorReturn(this, _getPrototypeOf(ButtonIconText).apply(this, arguments));
  }

  _createClass(ButtonIconText, [{
    key: "render",

    /**
     * @property {string} text -The text of the button
     * @property {func} onClick - The function triggered by the button
     * @property {string} className - Just in case you need another class
     * @property {string} color -  The color of the button
     * @property {string} type - Button type
     * @property {string} icon - Name of the icon
     * @property {string} iconColor - Color of the icon
     * @property {string} iconSize - Size of the icon, by default is 16px
     * @property {bool} iconRight - to define the position of the icon
     * @property {bool} disabled - Button could be disabled
     * @property {string} borderColor - Button could have a border color
     * @see See './../../../styles/variables/_colors.scss' for the list of color names
     */
    value: function render() {
      var _this$props = this.props,
          color = _this$props.color,
          onClick = _this$props.onClick,
          text = _this$props.text,
          className = _this$props.className,
          type = _this$props.type,
          iconColor = _this$props.iconColor,
          icon = _this$props.icon,
          iconSize = _this$props.iconSize,
          iconRight = _this$props.iconRight,
          disabled = _this$props.disabled,
          borderColor = _this$props.borderColor,
          loading = _this$props.loading;
      return react.createElement("button", {
        className: classnames("btn", "btn__icon--text", "bg--".concat(color), {
          "btn__icon--right": iconRight
        }, "border--".concat(borderColor), className),
        onClick: onClick,
        type: type,
        disabled: disabled
      }, react.createElement(Icon, {
        icon: icon,
        color: iconColor,
        size: iconSize
      }), react.createElement("p", null, text));
    }
  }]);

  return ButtonIconText;
}(react.PureComponent);

_defineProperty(ButtonIconText, "propTypes", {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.string.isRequired,
  iconColor: PropTypes.string.isRequired,
  iconSize: PropTypes.string,
  iconRight: PropTypes.bool,
  disabled: PropTypes.bool,
  borderColor: PropTypes.string
});

ButtonIconText.defaultProps = {
  className: "",
  type: "button",
  iconSize: "R",
  iconRight: false,
  disabled: false,
  borderColor: ""
};

var ToggleButton =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(ToggleButton, _React$PureComponent);

  function ToggleButton() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ToggleButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ToggleButton)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      toggleState: _this.props.toggleState
    });

    _defineProperty(_assertThisInitialized(_this), "toggle", function () {
      var toggleState = _this.state.toggleState;
      var newState = !toggleState;

      _this.setState({
        toggleState: newState
      });

      return newState;
    });

    _defineProperty(_assertThisInitialized(_this), "onClickToggle", function () {
      var onClick = _this.props.onClick;

      var actualState = _this.toggle();

      onClick(actualState);
    });

    return _this;
  }

  _createClass(ToggleButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          icon = _this$props.icon,
          color = _this$props.color,
          on = _this$props.on,
          off = _this$props.off;
      var toggleState = this.state.toggleState;
      return react.createElement("div", {
        className: "toggleButton--container"
      }, react.createElement("p", null, off), react.createElement("div", {
        className: classnames("toggle--outside", "bg--".concat(color), {
          "toggle--off": !toggleState
        })
      }, react.createElement("button", {
        type: "button",
        className: "toggle--inside",
        onClick: this.onClickToggle
      }, react.createElement(Icon, {
        icon: icon,
        color: color,
        size: "R"
      }))), react.createElement("p", null, on));
    }
  }]);

  return ToggleButton;
}(react.PureComponent);

_defineProperty(ToggleButton, "propTypes", {
  icon: PropTypes.string,
  color: PropTypes.string,
  on: PropTypes.string,
  off: PropTypes.string,
  toggleState: PropTypes.bool,
  onClick: PropTypes.func.isRequired
});

_defineProperty(ToggleButton, "defaultProps", {
  color: "blue",
  on: "",
  off: "",
  icon: "",
  toggleState: true
});

/**
 * @class PopOver Header - Is the title of the pop over
 */

var PopOverHeader =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(PopOverHeader, _React$PureComponent);

  function PopOverHeader() {
    _classCallCheck(this, PopOverHeader);

    return _possibleConstructorReturn(this, _getPrototypeOf(PopOverHeader).apply(this, arguments));
  }

  _createClass(PopOverHeader, [{
    key: "render",

    /**
     * @property {string} title - Title of the pop over
     */
    value: function render() {
      var title = this.props.title;
      return react.createElement("div", {
        className: "pop-over--header"
      }, react.createElement("h2", null, title));
    }
  }]);

  return PopOverHeader;
}(react.PureComponent);

_defineProperty(PopOverHeader, "propTypes", {
  title: PropTypes.string.isRequired
});

/**
 * @class PopOver Card - Is the card for the pop over and it contains a cross icon by default
 */

var PopOverCard =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(PopOverCard, _React$PureComponent);

  function PopOverCard() {
    _classCallCheck(this, PopOverCard);

    return _possibleConstructorReturn(this, _getPrototypeOf(PopOverCard).apply(this, arguments));
  }

  _createClass(PopOverCard, [{
    key: "render",

    /**
     * @property {bool} show - Determines if the pop over is visible
     * @property {func} onClose - The function to close the modal
     * @property {node} children - The content of the modal
     * @property {string} className - Just in case you need another class
     * @property {string} title - The title of the pop over
     * @property {bool} back - Determines if the pop over has a back button
     * @property {func} onBack - The function to go back
     * @property {number} left - The value of the left position of the pop over card
     * @property {number} top - The value of the top position of the pop over card
     */
    value: function render() {
      var _this$props = this.props,
          onClose = _this$props.onClose,
          children = _this$props.children,
          className = _this$props.className,
          show = _this$props.show,
          title = _this$props.title,
          onBack = _this$props.onBack,
          back = _this$props.back,
          left = _this$props.left,
          top = _this$props.top;
      return react.createElement("div", {
        style: {
          left: left,
          top: top
        },
        className: classnames("pop-over", className, {
          "visibility-hidden": !show
        })
      }, react.createElement("div", {
        className: "icons"
      }, react.createElement(ButtonIcon, {
        icon: "left",
        onClick: onBack,
        className: classnames({
          "visibility-hidden": !back
        }),
        size: "R"
      }), react.createElement(PopOverHeader, {
        title: title
      }), react.createElement(ButtonIcon, {
        icon: "cross",
        size: "R",
        onClick: onClose
      })), react.createElement("div", {
        className: "pop-over--content"
      }, children));
    }
  }]);

  return PopOverCard;
}(react.PureComponent);

_defineProperty(PopOverCard, "propTypes", {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  onBack: PropTypes.func,
  back: PropTypes.bool,
  className: PropTypes.string,
  left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  top: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
});

PopOverCard.defaultProps = {
  className: "",
  title: "",
  back: false,
  onBack: null,
  left: "",
  top: ""
};

/**
 * @function getActivatorPosition - Returns width, height and position of the activator
 * @param {node} node
 */
function getActivatorPosition(activator) {
  if (!activator) {
    return {};
  }

  var _activator$firstChild = activator.firstChild.getBoundingClientRect(),
      width = _activator$firstChild.width,
      height = _activator$firstChild.height;

  var _activator$getBoundin = activator.getBoundingClientRect(),
      left = _activator$getBoundin.left,
      top = _activator$getBoundin.top,
      right = _activator$getBoundin.right,
      bottom = _activator$getBoundin.bottom;

  return {
    top: top,
    left: left,
    right: right,
    bottom: bottom,
    width: width,
    height: height
  };
}
/**
 * @function getPopDimensions - Returns width, height of the popOver
 * @param {node} pop
 */

function getPopDimensions(pop) {
  if (!pop) {
    return {};
  }

  var _pop$getBoundingClien = pop.getBoundingClientRect(),
      width = _pop$getBoundingClien.width,
      height = _pop$getBoundingClien.height;

  var popWidth = width;
  var popHeight = height;
  return {
    popWidth: popWidth,
    popHeight: popHeight
  };
}
/**
 * @function popXPosition - Returns x position of the pop over card
 * @param {ref} pop - Is the pop over card as reference
 * @param {ref} activator - Is the button that triggers the pop over as reference
 */

function popXPosition(activator, pop) {
  var _getActivatorPosition = getActivatorPosition(activator),
      left = _getActivatorPosition.left;

  var popUpElement = pop.lastChild;

  var _getPopDimensions = getPopDimensions(popUpElement),
      popWidth = _getPopDimensions.popWidth;

  var windowWidth = window.innerWidth;
  var activatorOffsetLeft = activator.offsetLeft;
  var popWidthAndLeft = popWidth + left;
  var diff = popWidthAndLeft - windowWidth;
  var leftPosition = activatorOffsetLeft;

  if (windowWidth < popWidthAndLeft) {
    leftPosition = activatorOffsetLeft - diff - 16;
  }

  return leftPosition;
}
/**
 * @function popYPosition - Returns y position of the pop over card
 * @param {ref} pop - Is the pop over card as reference
 * @param {ref} activator - Is the button that triggers the pop over as reference
 */

function popYPosition(activator, pop) {
  var _getActivatorPosition2 = getActivatorPosition(activator),
      top = _getActivatorPosition2.top,
      height = _getActivatorPosition2.height;

  var popUpElement = pop.lastChild;

  var _getPopDimensions2 = getPopDimensions(popUpElement),
      popHeight = _getPopDimensions2.popHeight;

  var windowHeight = window.innerHeight;
  var activatorOffsetTop = activator.offsetTop;
  var popHeightAndTop = popHeight + top;
  var diff = popHeightAndTop - windowHeight;
  var topPosition = 0;

  if (windowHeight < popHeightAndTop) {
    topPosition = activatorOffsetTop - diff - 16;
  } else if (windowHeight > popHeightAndTop) {
    topPosition = activatorOffsetTop + height + 8;
  }

  return topPosition;
}

/**
 * @class PopOver - It contains the pop over card and its activator
 */

var PopOver =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(PopOver, _React$PureComponent);

  /**
   * @property {node} children - The content of the pop over
   * @property {string} className - Just in case you need another class
   * @property {func} onClose - The function to close the pop over
   * @property {node} activator - The button/link that triggers the pop over
   * @property {bool} show - Determines if the popOver is visible
   * @property {string} title - The title of the pop over
   * @property {bool} back - Determines if the pop over has a back button
   */
  function PopOver(props) {
    var _this;

    _classCallCheck(this, PopOver);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PopOver).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "resize", function () {
      return _this.forceUpdate();
    });

    _defineProperty(_assertThisInitialized(_this), "handleEscPressed", function (event) {
      var onClose = _this.props.onClose; // keyCode 27 = ESC key

      if (event.keyCode === 27) {
        onClose();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickOutside", function (event) {
      if (_this.popRef.current && !_this.popRef.current.contains(event.target) && _this.props.show) {
        _this.props.onClose();
      }
    });

    _this.activatorRef = react.createRef();
    _this.popRef = react.createRef();
    return _this;
  }

  _createClass(PopOver, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener("mousedown", this.handleClickOutside);
      window.addEventListener("resize", this.resize);
      document.addEventListener("keydown", this.handleEscPressed);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener("mousedown", this.handleClickOutside);
      window.removeEventListener("resize", this.resize);
      document.removeEventListener("keydown", this.handleEscPressed);
    }
  }, {
    key: "isSafari",
    value: function isSafari() {
      var ua = navigator.userAgent.toLowerCase();

      if (ua.indexOf('safari') != -1) {
        if (ua.indexOf('chrome') === -1) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: "getStyle",
    value: function getStyle() {
      var activator = this.activatorRef.current;

      if (!activator || this.isSafari()) {
        return {};
      }

      var pop = this.popRef.current;
      var leftPosition = popXPosition(activator, pop);
      var topPosition = popYPosition(activator, pop);
      return {
        left: "".concat(leftPosition, "px"),
        top: "".concat(topPosition, "px")
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onClose = _this$props.onClose,
          children = _this$props.children,
          className = _this$props.className,
          activator = _this$props.activator,
          title = _this$props.title,
          back = _this$props.back,
          onBack = _this$props.onBack,
          show = _this$props.show;

      var _this$getStyle = this.getStyle(),
          left = _this$getStyle.left,
          top = _this$getStyle.top;

      return (// eslint-disable-next-line react/jsx-filename-extension
        react.createElement("div", {
          className: "pop-over--wrapper",
          ref: this.popRef
        }, react.createElement("div", {
          ref: this.activatorRef,
          id: "activator"
        }, activator), react.createElement(PopOverCard, {
          onClose: onClose,
          className: className,
          show: show,
          left: left,
          top: top,
          title: title,
          back: back,
          onBack: onBack
        }, children))
      );
    }
  }]);

  return PopOver;
}(react.PureComponent);

_defineProperty(PopOver, "propTypes", {
  activator: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  show: PropTypes.bool.isRequired,
  title: PropTypes.string,
  back: PropTypes.bool,
  className: PropTypes.string
});

_defineProperty(PopOver, "defaultProps", {
  title: "",
  back: false,
  className: ""
});

/**
 * @class SelectHeader - It is the title of the select
 */

var SelectHeader =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(SelectHeader, _React$PureComponent);

  function SelectHeader() {
    _classCallCheck(this, SelectHeader);

    return _possibleConstructorReturn(this, _getPrototypeOf(SelectHeader).apply(this, arguments));
  }

  _createClass(SelectHeader, [{
    key: "render",

    /**
     * @property {string} icon - The icon of the Header
     * @property {string} title - The title of the header
     * @property {string} className - ClassName if you need to customize
     * @property {func} onClick - The function to open the Select List
     * @property {bool} listOpen - Determines if the Select List is visible
     */
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          icon = _this$props.icon,
          title = _this$props.title,
          onClick = _this$props.onClick,
          listOpen = _this$props.listOpen;
      return react.createElement("div", {
        className: classnames('select__header', className),
        onClick: onClick
      }, icon && react.createElement(Icon, {
        icon: icon,
        color: "not-gray-l2",
        size: "R"
      }), react.createElement("p", null, title), react.createElement(ButtonIcon, {
        icon: listOpen ? "top" : "down",
        color: "not-gray-l1",
        size: "XXS",
        onClick: function onClick() {}
      }));
    }
  }]);

  return SelectHeader;
}(react.PureComponent);

_defineProperty(SelectHeader, "propTypes", {
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  listOpen: PropTypes.bool
});

SelectHeader.defaultProps = {
  icon: "",
  className: "",
  listOpen: false
};

/**
 * @class SelectListItem - Is an option of the SelectList
 */

var SelectListItem =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(SelectListItem, _React$PureComponent);

  function SelectListItem() {
    _classCallCheck(this, SelectListItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(SelectListItem).apply(this, arguments));
  }

  _createClass(SelectListItem, [{
    key: "render",

    /**
     * @property {string} icon - The icon of the option
     * @property {string} title - The title of the option
     * @property {string} className - ClassName if you need to customize
     * @property {string} selectedValue - Is the selected value of the select list
     * @property {func} onClick - The function to select an option
     * @property {string} id - The id of the option
     * @property {string} value - The value of the option
     */
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          selectedValue = _this$props.selectedValue,
          title = _this$props.title,
          icon = _this$props.icon,
          onClick = _this$props.onClick,
          id = _this$props.id,
          value = _this$props.value;
      return react.createElement("li", {
        className: classnames(className, {
          "selected__item": selectedValue === value
        }),
        onClick: onClick,
        "data-value": value
      }, icon && react.createElement(Icon, {
        icon: icon,
        color: "gray-l2",
        size: "R"
      }), title);
    }
  }]);

  return SelectListItem;
}(react.PureComponent);

_defineProperty(SelectListItem, "propTypes", {
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  selectedValue: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
});

SelectListItem.defaultProps = {
  icon: "",
  className: "",
  selectedValue: ""
};

/**
 * @class SelectList - The list of options of the select
 */

var SelectList =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(SelectList, _React$PureComponent);

  function SelectList() {
    _classCallCheck(this, SelectList);

    return _possibleConstructorReturn(this, _getPrototypeOf(SelectList).apply(this, arguments));
  }

  _createClass(SelectList, [{
    key: "render",

    /**
     * @property {string} className - ClassName if you need to customize
     * @property {func} onClick - OnClick function for each option
     * @property {array} options - List of options
     */
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          options = _this$props.options,
          onClick = _this$props.onClick,
          selectedValue = _this$props.selectedValue;
      return react.createElement("ul", {
        className: classnames(className, "select__list")
      }, options.map(function (item, index) {
        return react.createElement(SelectListItem, {
          icon: item.icon,
          key: index,
          title: item.title,
          selected: item.selected,
          onClick: onClick,
          value: item.value,
          selectedValue: selectedValue
        });
      }));
    }
  }]);

  return SelectList;
}(react.PureComponent);

_defineProperty(SelectList, "propTypes", {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  options: PropTypes.array.isRequired
});

SelectList.defaultProps = {
  icon: false,
  className: ""
};

/**
 * @class Select - It is the wrapper for the Select Header and the Select List
 */

var Select =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Select, _React$PureComponent);

  /**
   * @property {array} options - List of options
   * @property {string} placeholder - Placeholder for the select
   * @property {string} icon - Name of the icon if the placeholder needs one
   * @property {string} className - ClassName if you need to customize
   * @property {func} onSelect - Function triggered by the item
   */
  function Select(props) {
    var _this;

    _classCallCheck(this, Select);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Select).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "toggleList", function () {
      _this.setState(function (prevState) {
        return {
          listOpen: !prevState.listOpen
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickOutside", function (event) {
      var listOpen = _this.state.listOpen;

      if (_this.selectRef.current && !_this.selectRef.current.contains(event.target) && listOpen) {
        _this.setState({
          listOpen: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getSelectedItem", function (value) {
      var options = _this.props.options;
      var item = options.find(function (_item) {
        return _item.value === value;
      });
      return item;
    });

    _defineProperty(_assertThisInitialized(_this), "_setItemSelected", function (itemValue) {
      _this.setState({
        selectedValue: itemValue
      });
    });

    _defineProperty(_assertThisInitialized(_this), "selectItemByValue", function (itemValue) {
      var item = _this.getSelectedItem(itemValue);

      _this._setItemSelected(itemValue);

      _this.props.onSelect(item);

      _this.toggleList();
    });

    _defineProperty(_assertThisInitialized(_this), "selectItem", function (event) {
      var itemValue = event.target.dataset.value;

      _this.selectItemByValue(itemValue);
    });

    var selectedValue = _this.props.selectedValue;
    _this.selectRef = react.createRef();
    _this.state = {
      listOpen: false,
      selectedValue: selectedValue
    };
    return _this;
  }

  _createClass(Select, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener("mousedown", this.handleClickOutside);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener("mousedown", this.handleClickOutside);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var selectedValue = this.props.selectedValue;

      if (prevProps.selectedValue !== selectedValue) {
        this._setItemSelected(selectedValue);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          options = _this$props.options,
          icon = _this$props.icon,
          placeholder = _this$props.placeholder;
      var _this$state = this.state,
          listOpen = _this$state.listOpen,
          selectedValue = _this$state.selectedValue;
      var selectedItem = this.getSelectedItem(selectedValue);
      return react.createElement("div", {
        className: classnames("select__wrapper", className),
        ref: this.selectRef
      }, react.createElement(SelectHeader, {
        title: selectedItem ? selectedItem.title : placeholder,
        icon: selectedItem ? selectedItem.icon : icon,
        onClick: this.toggleList,
        listOpen: listOpen
      }), listOpen && react.createElement(SelectList, {
        options: options,
        onClick: this.selectItem,
        selectedValue: selectedValue
      }));
    }
  }]);

  return Select;
}(react.PureComponent);

_defineProperty(Select, "propTypes", {
  // eslint-disable-next-line react/forbid-prop-types
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string.isRequired,
  icon: PropTypes.string,
  className: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
  selectedValue: PropTypes.string
});

Select.defaultProps = {
  className: "",
  icon: "",
  selectedValue: ""
};

/**
 * @class DropDown- It contains the list of options
 */

var Dropdown =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Dropdown, _React$PureComponent);

  function Dropdown() {
    _classCallCheck(this, Dropdown);

    return _possibleConstructorReturn(this, _getPrototypeOf(Dropdown).apply(this, arguments));
  }

  _createClass(Dropdown, [{
    key: "render",

    /**
     * @property {node} children - The content of the modal
     * @property {string} className - Just in case you need another class
      */
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className;
      return react.createElement("div", {
        className: classnames("dropdown__list", className)
      }, children);
    }
  }]);

  return Dropdown;
}(react.PureComponent);

_defineProperty(Dropdown, "propTypes", {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
});

Dropdown.defaultProps = {
  className: ""
};

/**
 * @class DropDownWrapper -It contains the Dropdown and the Button Icon that triggers it
 */

var DropdownWrapper =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(DropdownWrapper, _React$PureComponent);

  /**
   * @property {node} children - The content of the dropdown
   * @property {string} className - Just in case you need another class
   * @property {string} icon - The icon that triggers the dropdown
   * */
  function DropdownWrapper(props) {
    var _this;

    _classCallCheck(this, DropdownWrapper);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DropdownWrapper).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "toggleDropDown", function () {
      _this.setState(function (prevState) {
        return {
          show: !prevState.show
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onClose", function () {
      _this.setState({
        show: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickOutside", function (event) {
      var show = _this.state.show;

      if (_this.dropdownRef.current && !_this.dropdownRef.current.contains(event.target) && show) {
        _this.setState({
          show: false
        });
      }
    });

    _this.state = {
      show: false
    };
    _this.activatorRef = react.createRef();
    _this.dropdownRef = react.createRef();
    return _this;
  }

  _createClass(DropdownWrapper, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener("mousedown", this.handleClickOutside);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener("mousedown", this.handleClickOutside);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          icon = _this$props.icon,
          size = _this$props.size;
      return react.createElement("div", {
        className: classnames("dropdown__wrapper", className),
        ref: this.dropdownRef
      }, react.createElement("div", {
        ref: this.activatorRef,
        id: "activator-dropdown"
      }, react.createElement(ButtonIcon, {
        icon: icon,
        onClick: this.toggleDropDown,
        size: size
      })), this.state.show && react.createElement(Dropdown, {
        onClose: this.onClose,
        className: className
      }, children));
    }
  }]);

  return DropdownWrapper;
}(react.PureComponent);

_defineProperty(DropdownWrapper, "propTypes", {
  icon: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  size: PropTypes.string
});

DropdownWrapper.defaultProps = {
  className: "",
  size: "R",
  icon: "options"
};

/**
 * @class DropDown- Is the option of the Dropdown
 */

var DropdownOption =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(DropdownOption, _React$PureComponent);

  function DropdownOption() {
    _classCallCheck(this, DropdownOption);

    return _possibleConstructorReturn(this, _getPrototypeOf(DropdownOption).apply(this, arguments));
  }

  _createClass(DropdownOption, [{
    key: "render",

    /**
     * @property {string} className - Just in case you need another class
     * @property {func} onClick - The function of the option
     * @property {string} iconDirection - Determines if the icon is on the left or rigth side
     * @property {string} text - The title of the option
     * @property {string} icon - The icon of the option
     */
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          iconDirection = _this$props.iconDirection,
          icon = _this$props.icon,
          text = _this$props.text,
          onClick = _this$props.onClick;
      return react.createElement("div", {
        className: classnames("dropdown__option", className, {
          "dropdown__icon-right": iconDirection === "right"
        }),
        onClick: onClick
      }, icon && react.createElement(Icon, {
        icon: icon,
        size: "S"
      }), react.createElement("p", null, text));
    }
  }]);

  return DropdownOption;
}(react.PureComponent);

_defineProperty(DropdownOption, "propTypes", {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  iconDirection: PropTypes.string,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string
});

DropdownOption.defaultProps = {
  className: "",
  iconDirection: "left",
  icon: ""
};

/**
 * @class Input - It is an html input
 */

var Input =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Input, _React$PureComponent);

  function Input() {
    _classCallCheck(this, Input);

    return _possibleConstructorReturn(this, _getPrototypeOf(Input).apply(this, arguments));
  }

  _createClass(Input, [{
    key: "render",

    /**
     * @property {string} name -The name of the input
     * @property {string} type - The type of the input
     * @property {string} placeholder- The placeholder of the input
     * @property {func} onBlur - The function triggered when the input is onBlur
     * @property {func} onChange - The function triggered when the input value change
     * @property {bool} showError - Determines if the input should add an error style
     * @property {string} defaultValue - The Default Value of the input
     * @property {func} innerRef - The function to create a Ref for the input
     * @property {string} autoComplete - To enable autocomplete
     */
    value: function render() {
      var _this$props = this.props,
          innerRef = _this$props.innerRef,
          name = _this$props.name,
          type = _this$props.type,
          placeholder = _this$props.placeholder,
          showError = _this$props.showError,
          onChange = _this$props.onChange,
          onBlur = _this$props.onBlur,
          defaultValue = _this$props.defaultValue,
          autoComplete = _this$props.autoComplete;
      return react.createElement("input", {
        ref: innerRef,
        autoComplete: autoComplete,
        name: name,
        type: type,
        placeholder: placeholder,
        className: classnames({
          "input__error": showError
        }, "input"),
        onChange: onChange,
        onBlur: onBlur,
        defaultValue: defaultValue
      });
    }
  }]);

  return Input;
}(react.PureComponent);

_defineProperty(Input, "propTypes", {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onBlur: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  showError: PropTypes.bool,
  defaultValue: PropTypes.string,
  innerRef: PropTypes.func,
  autoComplete: PropTypes.string
});

Input.defaultProps = {
  defaultValue: "",
  placeholder: "",
  autoComplete: "off",
  showError: false,
  innerRef: function innerRef() {}
};

var autosize = createCommonjsModule(function (module, exports) {
/*!
	autosize 4.0.2
	license: MIT
	http://www.jacklmoore.com/autosize
*/
(function (global, factory) {
	{
		factory(module, exports);
	}
})(commonjsGlobal, function (module, exports) {

	var map = typeof Map === "function" ? new Map() : function () {
		var keys = [];
		var values = [];

		return {
			has: function has(key) {
				return keys.indexOf(key) > -1;
			},
			get: function get(key) {
				return values[keys.indexOf(key)];
			},
			set: function set(key, value) {
				if (keys.indexOf(key) === -1) {
					keys.push(key);
					values.push(value);
				}
			},
			delete: function _delete(key) {
				var index = keys.indexOf(key);
				if (index > -1) {
					keys.splice(index, 1);
					values.splice(index, 1);
				}
			}
		};
	}();

	var createEvent = function createEvent(name) {
		return new Event(name, { bubbles: true });
	};
	try {
		new Event('test');
	} catch (e) {
		// IE does not support `new Event()`
		createEvent = function createEvent(name) {
			var evt = document.createEvent('Event');
			evt.initEvent(name, true, false);
			return evt;
		};
	}

	function assign(ta) {
		if (!ta || !ta.nodeName || ta.nodeName !== 'TEXTAREA' || map.has(ta)) return;

		var heightOffset = null;
		var clientWidth = null;
		var cachedHeight = null;

		function init() {
			var style = window.getComputedStyle(ta, null);

			if (style.resize === 'vertical') {
				ta.style.resize = 'none';
			} else if (style.resize === 'both') {
				ta.style.resize = 'horizontal';
			}

			if (style.boxSizing === 'content-box') {
				heightOffset = -(parseFloat(style.paddingTop) + parseFloat(style.paddingBottom));
			} else {
				heightOffset = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
			}
			// Fix when a textarea is not on document body and heightOffset is Not a Number
			if (isNaN(heightOffset)) {
				heightOffset = 0;
			}

			update();
		}

		function changeOverflow(value) {
			{
				// Chrome/Safari-specific fix:
				// When the textarea y-overflow is hidden, Chrome/Safari do not reflow the text to account for the space
				// made available by removing the scrollbar. The following forces the necessary text reflow.
				var width = ta.style.width;
				ta.style.width = '0px';
				// Force reflow:
				/* jshint ignore:start */
				ta.offsetWidth;
				/* jshint ignore:end */
				ta.style.width = width;
			}

			ta.style.overflowY = value;
		}

		function getParentOverflows(el) {
			var arr = [];

			while (el && el.parentNode && el.parentNode instanceof Element) {
				if (el.parentNode.scrollTop) {
					arr.push({
						node: el.parentNode,
						scrollTop: el.parentNode.scrollTop
					});
				}
				el = el.parentNode;
			}

			return arr;
		}

		function resize() {
			if (ta.scrollHeight === 0) {
				// If the scrollHeight is 0, then the element probably has display:none or is detached from the DOM.
				return;
			}

			var overflows = getParentOverflows(ta);
			var docTop = document.documentElement && document.documentElement.scrollTop; // Needed for Mobile IE (ticket #240)

			ta.style.height = '';
			ta.style.height = ta.scrollHeight + heightOffset + 'px';

			// used to check if an update is actually necessary on window.resize
			clientWidth = ta.clientWidth;

			// prevents scroll-position jumping
			overflows.forEach(function (el) {
				el.node.scrollTop = el.scrollTop;
			});

			if (docTop) {
				document.documentElement.scrollTop = docTop;
			}
		}

		function update() {
			resize();

			var styleHeight = Math.round(parseFloat(ta.style.height));
			var computed = window.getComputedStyle(ta, null);

			// Using offsetHeight as a replacement for computed.height in IE, because IE does not account use of border-box
			var actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(computed.height)) : ta.offsetHeight;

			// The actual height not matching the style height (set via the resize method) indicates that 
			// the max-height has been exceeded, in which case the overflow should be allowed.
			if (actualHeight < styleHeight) {
				if (computed.overflowY === 'hidden') {
					changeOverflow('scroll');
					resize();
					actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
				}
			} else {
				// Normally keep overflow set to hidden, to avoid flash of scrollbar as the textarea expands.
				if (computed.overflowY !== 'hidden') {
					changeOverflow('hidden');
					resize();
					actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
				}
			}

			if (cachedHeight !== actualHeight) {
				cachedHeight = actualHeight;
				var evt = createEvent('autosize:resized');
				try {
					ta.dispatchEvent(evt);
				} catch (err) {
					// Firefox will throw an error on dispatchEvent for a detached element
					// https://bugzilla.mozilla.org/show_bug.cgi?id=889376
				}
			}
		}

		var pageResize = function pageResize() {
			if (ta.clientWidth !== clientWidth) {
				update();
			}
		};

		var destroy = function (style) {
			window.removeEventListener('resize', pageResize, false);
			ta.removeEventListener('input', update, false);
			ta.removeEventListener('keyup', update, false);
			ta.removeEventListener('autosize:destroy', destroy, false);
			ta.removeEventListener('autosize:update', update, false);

			Object.keys(style).forEach(function (key) {
				ta.style[key] = style[key];
			});

			map.delete(ta);
		}.bind(ta, {
			height: ta.style.height,
			resize: ta.style.resize,
			overflowY: ta.style.overflowY,
			overflowX: ta.style.overflowX,
			wordWrap: ta.style.wordWrap
		});

		ta.addEventListener('autosize:destroy', destroy, false);

		// IE9 does not fire onpropertychange or oninput for deletions,
		// so binding to onkeyup to catch most of those events.
		// There is no way that I know of to detect something like 'cut' in IE9.
		if ('onpropertychange' in ta && 'oninput' in ta) {
			ta.addEventListener('keyup', update, false);
		}

		window.addEventListener('resize', pageResize, false);
		ta.addEventListener('input', update, false);
		ta.addEventListener('autosize:update', update, false);
		ta.style.overflowX = 'hidden';
		ta.style.wordWrap = 'break-word';

		map.set(ta, {
			destroy: destroy,
			update: update
		});

		init();
	}

	function destroy(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.destroy();
		}
	}

	function update(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.update();
		}
	}

	var autosize = null;

	// Do nothing in Node.js environment and IE8 (or lower)
	if (typeof window === 'undefined' || typeof window.getComputedStyle !== 'function') {
		autosize = function autosize(el) {
			return el;
		};
		autosize.destroy = function (el) {
			return el;
		};
		autosize.update = function (el) {
			return el;
		};
	} else {
		autosize = function autosize(el, options) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], function (x) {
					return assign(x, options);
				});
			}
			return el;
		};
		autosize.destroy = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], destroy);
			}
			return el;
		};
		autosize.update = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], update);
			}
			return el;
		};
	}

	exports.default = autosize;
	module.exports = exports['default'];
});
});

/**
 * @class InputTitle - It is an input for titles where they look as text
 */

var InputTitle =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(InputTitle, _React$PureComponent);

  /**
  * @property {string} placeholder -The placeholder of the input
  * @property {string} className - The type of the input
  * @property {string} initialText- The placeholder of the input
  * @property {number} maxLength - The number of characters
  * @property {bool} readOnly - Determines if you can edit text
  */
  function InputTitle(props) {
    var _this;

    _classCallCheck(this, InputTitle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InputTitle).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "setTextInputRef", function (element) {
      _this.textInput = element;
    });

    _defineProperty(_assertThisInitialized(_this), "setTextTrim", function () {
      if (!_this.props.allowBlank && _this.textInput.value.trim() === "") {
        return;
      }

      _this.setState({
        text: _this.textInput.value.trim()
      });

      _this.props.onTextEdited(_this.textInput.value.trim());

      if (_this.props.resetOnFinish) {
        _this.textInput.value = "";
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (event) {
      if (event.keyCode === 13) {
        _this.textInput.blur();

        event.preventDefault();
      }

      autosize(_this.textInput);
    });

    _this.state = {
      text: props.initialText
    };
    _this.textInput = null;
    return _this;
  }

  _createClass(InputTitle, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      autosize(this.textInput);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevProps.initialText !== this.props.initialText) {
        this.textInput.value = this.props.initialText;
        autosize(this.textInput);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          placeholder = _this$props.placeholder,
          className = _this$props.className,
          initialText = _this$props.initialText,
          maxLength = _this$props.maxLength,
          readOnly = _this$props.readOnly;
      return react.createElement("textarea", {
        placeholder: placeholder,
        onBlur: this.setTextTrim,
        className: classnames("textarea__edition", className),
        ref: this.setTextInputRef,
        onKeyDown: this.onKeyDown,
        maxLength: maxLength,
        defaultValue: initialText,
        rows: "5",
        readOnly: readOnly
      });
    }
  }]);

  return InputTitle;
}(react.PureComponent);

_defineProperty(InputTitle, "propTypes", {
  initialText: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onTextEdited: PropTypes.func.isRequired,
  allowBlank: PropTypes.bool.isRequired,
  resetOnFinish: PropTypes.bool.isRequired,
  maxLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  readOnly: PropTypes.bool.isRequired
});

InputTitle.defaultProps = {
  allowBlank: true,
  resetOnFinish: false,
  readOnly: false,
  maxLength: "",
  className: "",
  placeholder: "",
  initialText: ""
};

/**
 * @class Input - It is an html input
 */

var InputIcon =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(InputIcon, _React$PureComponent);

  function InputIcon() {
    _classCallCheck(this, InputIcon);

    return _possibleConstructorReturn(this, _getPrototypeOf(InputIcon).apply(this, arguments));
  }

  _createClass(InputIcon, [{
    key: "render",

    /**
     * @property {string} name -The name of the input
     * @property {string} type - The type of the input
     * @property {string} placeholder- The placeholder of the input
     * @property {func} onBlur - The function triggered when the input is onBlur
     * @property {func} onChange - The function triggered when the input value change
     * @property {bool} showError - Determines if the input should add an error style
     * @property {string} defaultValue - The Default Value of the input
     * @property {func} innerRef - The function to create a Ref for the input
     * @property {string} autoComplete - To enable autocomplete
     */
    value: function render() {
      var _this$props = this.props,
          innerRef = _this$props.innerRef,
          name = _this$props.name,
          type = _this$props.type,
          placeholder = _this$props.placeholder,
          showError = _this$props.showError,
          onChange = _this$props.onChange,
          onBlur = _this$props.onBlur,
          defaultValue = _this$props.defaultValue,
          autoComplete = _this$props.autoComplete,
          icon = _this$props.icon,
          iconColor = _this$props.iconColor,
          iconSize = _this$props.iconSize;
      return react.createElement("div", {
        className: "input__icon--container"
      }, react.createElement(Icon, {
        color: iconColor,
        icon: icon,
        size: iconSize
      }), react.createElement("input", {
        ref: innerRef,
        autoComplete: autoComplete,
        name: name,
        type: type,
        placeholder: placeholder,
        className: classnames({
          "input__error": showError
        }, "input"),
        onChange: onChange,
        onBlur: onBlur,
        defaultValue: defaultValue
      }));
    }
  }]);

  return InputIcon;
}(react.PureComponent);

_defineProperty(InputIcon, "propTypes", {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onBlur: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  showError: PropTypes.bool,
  defaultValue: PropTypes.string,
  innerRef: PropTypes.func,
  autoComplete: PropTypes.string,
  icon: PropTypes.string.isRequired,
  iconColor: PropTypes.string,
  iconSize: PropTypes.string
});

InputIcon.defaultProps = {
  placeholder: "",
  defaultValue: "",
  innerRef: function innerRef() {},
  autoComplete: "off",
  iconColor: "gray-l2",
  iconSize: "R",
  showError: false
};

// Modal components

exports.Modal = Modal;
exports.ModalCard = ModalCard;
exports.ModalBackground = ModalBackground;
exports.ModalHeader = ModalHeader;
exports.ModalFooter = ModalFooter;
exports.ModalMedal = ModalMedal;
exports.Medal = Medal;
exports.ButtonIcon = ButtonIcon;
exports.ButtonText = ButtonText;
exports.Icon = Icon;
exports.PopOver = PopOver;
exports.PopOverCard = PopOverCard;
exports.PopOverHeader = PopOverHeader;
exports.Select = Select;
exports.DropdownWrapper = DropdownWrapper;
exports.Input = Input;
exports.InputTitle = InputTitle;
exports.DropdownOption = DropdownOption;
exports.ButtonIconText = ButtonIconText;
exports.InputIcon = InputIcon;
exports.ToggleButton = ToggleButton;
//# sourceMappingURL=index.js.map
