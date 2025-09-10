function Eg(a, i) {
  for (var o = 0; o < i.length; o++) {
    const c = i[o];
    if (typeof c != "string" && !Array.isArray(c)) {
      for (const f in c)
        if (f !== "default" && !(f in a)) {
          const d = Object.getOwnPropertyDescriptor(c, f);
          d && Object.defineProperty(a, f, d.get ? d : {
            enumerable: !0,
            get: () => c[f]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }));
}
function pf(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var Go = { exports: {} }, xu = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var T0;
function xg() {
  if (T0) return xu;
  T0 = 1;
  var a = Symbol.for("react.transitional.element"), i = Symbol.for("react.fragment");
  function o(c, f, d) {
    var m = null;
    if (d !== void 0 && (m = "" + d), f.key !== void 0 && (m = "" + f.key), "key" in f) {
      d = {};
      for (var p in f)
        p !== "key" && (d[p] = f[p]);
    } else d = f;
    return f = d.ref, {
      $$typeof: a,
      type: c,
      key: m,
      ref: f !== void 0 ? f : null,
      props: d
    };
  }
  return xu.Fragment = i, xu.jsx = o, xu.jsxs = o, xu;
}
var E0;
function Ag() {
  return E0 || (E0 = 1, Go.exports = xg()), Go.exports;
}
var _t = Ag(), ko = { exports: {} }, Au = {}, Lo = { exports: {} }, Xo = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var x0;
function Cg() {
  return x0 || (x0 = 1, (function(a) {
    function i(C, X) {
      var et = C.length;
      C.push(X);
      t: for (; 0 < et; ) {
        var St = et - 1 >>> 1, S = C[St];
        if (0 < f(S, X))
          C[St] = X, C[et] = S, et = St;
        else break t;
      }
    }
    function o(C) {
      return C.length === 0 ? null : C[0];
    }
    function c(C) {
      if (C.length === 0) return null;
      var X = C[0], et = C.pop();
      if (et !== X) {
        C[0] = et;
        t: for (var St = 0, S = C.length, j = S >>> 1; St < j; ) {
          var J = 2 * (St + 1) - 1, W = C[J], nt = J + 1, mt = C[nt];
          if (0 > f(W, et))
            nt < S && 0 > f(mt, W) ? (C[St] = mt, C[nt] = et, St = nt) : (C[St] = W, C[J] = et, St = J);
          else if (nt < S && 0 > f(mt, et))
            C[St] = mt, C[nt] = et, St = nt;
          else break t;
        }
      }
      return X;
    }
    function f(C, X) {
      var et = C.sortIndex - X.sortIndex;
      return et !== 0 ? et : C.id - X.id;
    }
    if (a.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var d = performance;
      a.unstable_now = function() {
        return d.now();
      };
    } else {
      var m = Date, p = m.now();
      a.unstable_now = function() {
        return m.now() - p;
      };
    }
    var b = [], g = [], x = 1, D = null, N = 3, q = !1, z = !1, A = !1, w = !1, K = typeof setTimeout == "function" ? setTimeout : null, P = typeof clearTimeout == "function" ? clearTimeout : null, Q = typeof setImmediate < "u" ? setImmediate : null;
    function L(C) {
      for (var X = o(g); X !== null; ) {
        if (X.callback === null) c(g);
        else if (X.startTime <= C)
          c(g), X.sortIndex = X.expirationTime, i(b, X);
        else break;
        X = o(g);
      }
    }
    function $(C) {
      if (A = !1, L(C), !z)
        if (o(b) !== null)
          z = !0, k || (k = !0, y());
        else {
          var X = o(g);
          X !== null && V($, X.startTime - C);
        }
    }
    var k = !1, Z = -1, ot = 5, it = -1;
    function gt() {
      return w ? !0 : !(a.unstable_now() - it < ot);
    }
    function ft() {
      if (w = !1, k) {
        var C = a.unstable_now();
        it = C;
        var X = !0;
        try {
          t: {
            z = !1, A && (A = !1, P(Z), Z = -1), q = !0;
            var et = N;
            try {
              e: {
                for (L(C), D = o(b); D !== null && !(D.expirationTime > C && gt()); ) {
                  var St = D.callback;
                  if (typeof St == "function") {
                    D.callback = null, N = D.priorityLevel;
                    var S = St(
                      D.expirationTime <= C
                    );
                    if (C = a.unstable_now(), typeof S == "function") {
                      D.callback = S, L(C), X = !0;
                      break e;
                    }
                    D === o(b) && c(b), L(C);
                  } else c(b);
                  D = o(b);
                }
                if (D !== null) X = !0;
                else {
                  var j = o(g);
                  j !== null && V(
                    $,
                    j.startTime - C
                  ), X = !1;
                }
              }
              break t;
            } finally {
              D = null, N = et, q = !1;
            }
            X = void 0;
          }
        } finally {
          X ? y() : k = !1;
        }
      }
    }
    var y;
    if (typeof Q == "function")
      y = function() {
        Q(ft);
      };
    else if (typeof MessageChannel < "u") {
      var F = new MessageChannel(), G = F.port2;
      F.port1.onmessage = ft, y = function() {
        G.postMessage(null);
      };
    } else
      y = function() {
        K(ft, 0);
      };
    function V(C, X) {
      Z = K(function() {
        C(a.unstable_now());
      }, X);
    }
    a.unstable_IdlePriority = 5, a.unstable_ImmediatePriority = 1, a.unstable_LowPriority = 4, a.unstable_NormalPriority = 3, a.unstable_Profiling = null, a.unstable_UserBlockingPriority = 2, a.unstable_cancelCallback = function(C) {
      C.callback = null;
    }, a.unstable_forceFrameRate = function(C) {
      0 > C || 125 < C ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : ot = 0 < C ? Math.floor(1e3 / C) : 5;
    }, a.unstable_getCurrentPriorityLevel = function() {
      return N;
    }, a.unstable_next = function(C) {
      switch (N) {
        case 1:
        case 2:
        case 3:
          var X = 3;
          break;
        default:
          X = N;
      }
      var et = N;
      N = X;
      try {
        return C();
      } finally {
        N = et;
      }
    }, a.unstable_requestPaint = function() {
      w = !0;
    }, a.unstable_runWithPriority = function(C, X) {
      switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          C = 3;
      }
      var et = N;
      N = C;
      try {
        return X();
      } finally {
        N = et;
      }
    }, a.unstable_scheduleCallback = function(C, X, et) {
      var St = a.unstable_now();
      switch (typeof et == "object" && et !== null ? (et = et.delay, et = typeof et == "number" && 0 < et ? St + et : St) : et = St, C) {
        case 1:
          var S = -1;
          break;
        case 2:
          S = 250;
          break;
        case 5:
          S = 1073741823;
          break;
        case 4:
          S = 1e4;
          break;
        default:
          S = 5e3;
      }
      return S = et + S, C = {
        id: x++,
        callback: X,
        priorityLevel: C,
        startTime: et,
        expirationTime: S,
        sortIndex: -1
      }, et > St ? (C.sortIndex = et, i(g, C), o(b) === null && C === o(g) && (A ? (P(Z), Z = -1) : A = !0, V($, et - St))) : (C.sortIndex = S, i(b, C), z || q || (z = !0, k || (k = !0, y()))), C;
    }, a.unstable_shouldYield = gt, a.unstable_wrapCallback = function(C) {
      var X = N;
      return function() {
        var et = N;
        N = X;
        try {
          return C.apply(this, arguments);
        } finally {
          N = et;
        }
      };
    };
  })(Xo)), Xo;
}
var A0;
function Og() {
  return A0 || (A0 = 1, Lo.exports = Cg()), Lo.exports;
}
var Qo = { exports: {} }, st = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var C0;
function Rg() {
  if (C0) return st;
  C0 = 1;
  var a = Symbol.for("react.transitional.element"), i = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), d = Symbol.for("react.consumer"), m = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), g = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), D = Symbol.iterator;
  function N(S) {
    return S === null || typeof S != "object" ? null : (S = D && S[D] || S["@@iterator"], typeof S == "function" ? S : null);
  }
  var q = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, z = Object.assign, A = {};
  function w(S, j, J) {
    this.props = S, this.context = j, this.refs = A, this.updater = J || q;
  }
  w.prototype.isReactComponent = {}, w.prototype.setState = function(S, j) {
    if (typeof S != "object" && typeof S != "function" && S != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, S, j, "setState");
  }, w.prototype.forceUpdate = function(S) {
    this.updater.enqueueForceUpdate(this, S, "forceUpdate");
  };
  function K() {
  }
  K.prototype = w.prototype;
  function P(S, j, J) {
    this.props = S, this.context = j, this.refs = A, this.updater = J || q;
  }
  var Q = P.prototype = new K();
  Q.constructor = P, z(Q, w.prototype), Q.isPureReactComponent = !0;
  var L = Array.isArray, $ = { H: null, A: null, T: null, S: null, V: null }, k = Object.prototype.hasOwnProperty;
  function Z(S, j, J, W, nt, mt) {
    return J = mt.ref, {
      $$typeof: a,
      type: S,
      key: j,
      ref: J !== void 0 ? J : null,
      props: mt
    };
  }
  function ot(S, j) {
    return Z(
      S.type,
      j,
      void 0,
      void 0,
      void 0,
      S.props
    );
  }
  function it(S) {
    return typeof S == "object" && S !== null && S.$$typeof === a;
  }
  function gt(S) {
    var j = { "=": "=0", ":": "=2" };
    return "$" + S.replace(/[=:]/g, function(J) {
      return j[J];
    });
  }
  var ft = /\/+/g;
  function y(S, j) {
    return typeof S == "object" && S !== null && S.key != null ? gt("" + S.key) : j.toString(36);
  }
  function F() {
  }
  function G(S) {
    switch (S.status) {
      case "fulfilled":
        return S.value;
      case "rejected":
        throw S.reason;
      default:
        switch (typeof S.status == "string" ? S.then(F, F) : (S.status = "pending", S.then(
          function(j) {
            S.status === "pending" && (S.status = "fulfilled", S.value = j);
          },
          function(j) {
            S.status === "pending" && (S.status = "rejected", S.reason = j);
          }
        )), S.status) {
          case "fulfilled":
            return S.value;
          case "rejected":
            throw S.reason;
        }
    }
    throw S;
  }
  function V(S, j, J, W, nt) {
    var mt = typeof S;
    (mt === "undefined" || mt === "boolean") && (S = null);
    var rt = !1;
    if (S === null) rt = !0;
    else
      switch (mt) {
        case "bigint":
        case "string":
        case "number":
          rt = !0;
          break;
        case "object":
          switch (S.$$typeof) {
            case a:
            case i:
              rt = !0;
              break;
            case x:
              return rt = S._init, V(
                rt(S._payload),
                j,
                J,
                W,
                nt
              );
          }
      }
    if (rt)
      return nt = nt(S), rt = W === "" ? "." + y(S, 0) : W, L(nt) ? (J = "", rt != null && (J = rt.replace(ft, "$&/") + "/"), V(nt, j, J, "", function(Me) {
        return Me;
      })) : nt != null && (it(nt) && (nt = ot(
        nt,
        J + (nt.key == null || S && S.key === nt.key ? "" : ("" + nt.key).replace(
          ft,
          "$&/"
        ) + "/") + rt
      )), j.push(nt)), 1;
    rt = 0;
    var ee = W === "" ? "." : W + ":";
    if (L(S))
      for (var Mt = 0; Mt < S.length; Mt++)
        W = S[Mt], mt = ee + y(W, Mt), rt += V(
          W,
          j,
          J,
          mt,
          nt
        );
    else if (Mt = N(S), typeof Mt == "function")
      for (S = Mt.call(S), Mt = 0; !(W = S.next()).done; )
        W = W.value, mt = ee + y(W, Mt++), rt += V(
          W,
          j,
          J,
          mt,
          nt
        );
    else if (mt === "object") {
      if (typeof S.then == "function")
        return V(
          G(S),
          j,
          J,
          W,
          nt
        );
      throw j = String(S), Error(
        "Objects are not valid as a React child (found: " + (j === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : j) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return rt;
  }
  function C(S, j, J) {
    if (S == null) return S;
    var W = [], nt = 0;
    return V(S, W, "", "", function(mt) {
      return j.call(J, mt, nt++);
    }), W;
  }
  function X(S) {
    if (S._status === -1) {
      var j = S._result;
      j = j(), j.then(
        function(J) {
          (S._status === 0 || S._status === -1) && (S._status = 1, S._result = J);
        },
        function(J) {
          (S._status === 0 || S._status === -1) && (S._status = 2, S._result = J);
        }
      ), S._status === -1 && (S._status = 0, S._result = j);
    }
    if (S._status === 1) return S._result.default;
    throw S._result;
  }
  var et = typeof reportError == "function" ? reportError : function(S) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var j = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof S == "object" && S !== null && typeof S.message == "string" ? String(S.message) : String(S),
        error: S
      });
      if (!window.dispatchEvent(j)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", S);
      return;
    }
    console.error(S);
  };
  function St() {
  }
  return st.Children = {
    map: C,
    forEach: function(S, j, J) {
      C(
        S,
        function() {
          j.apply(this, arguments);
        },
        J
      );
    },
    count: function(S) {
      var j = 0;
      return C(S, function() {
        j++;
      }), j;
    },
    toArray: function(S) {
      return C(S, function(j) {
        return j;
      }) || [];
    },
    only: function(S) {
      if (!it(S))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return S;
    }
  }, st.Component = w, st.Fragment = o, st.Profiler = f, st.PureComponent = P, st.StrictMode = c, st.Suspense = b, st.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = $, st.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(S) {
      return $.H.useMemoCache(S);
    }
  }, st.cache = function(S) {
    return function() {
      return S.apply(null, arguments);
    };
  }, st.cloneElement = function(S, j, J) {
    if (S == null)
      throw Error(
        "The argument must be a React element, but you passed " + S + "."
      );
    var W = z({}, S.props), nt = S.key, mt = void 0;
    if (j != null)
      for (rt in j.ref !== void 0 && (mt = void 0), j.key !== void 0 && (nt = "" + j.key), j)
        !k.call(j, rt) || rt === "key" || rt === "__self" || rt === "__source" || rt === "ref" && j.ref === void 0 || (W[rt] = j[rt]);
    var rt = arguments.length - 2;
    if (rt === 1) W.children = J;
    else if (1 < rt) {
      for (var ee = Array(rt), Mt = 0; Mt < rt; Mt++)
        ee[Mt] = arguments[Mt + 2];
      W.children = ee;
    }
    return Z(S.type, nt, void 0, void 0, mt, W);
  }, st.createContext = function(S) {
    return S = {
      $$typeof: m,
      _currentValue: S,
      _currentValue2: S,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, S.Provider = S, S.Consumer = {
      $$typeof: d,
      _context: S
    }, S;
  }, st.createElement = function(S, j, J) {
    var W, nt = {}, mt = null;
    if (j != null)
      for (W in j.key !== void 0 && (mt = "" + j.key), j)
        k.call(j, W) && W !== "key" && W !== "__self" && W !== "__source" && (nt[W] = j[W]);
    var rt = arguments.length - 2;
    if (rt === 1) nt.children = J;
    else if (1 < rt) {
      for (var ee = Array(rt), Mt = 0; Mt < rt; Mt++)
        ee[Mt] = arguments[Mt + 2];
      nt.children = ee;
    }
    if (S && S.defaultProps)
      for (W in rt = S.defaultProps, rt)
        nt[W] === void 0 && (nt[W] = rt[W]);
    return Z(S, mt, void 0, void 0, null, nt);
  }, st.createRef = function() {
    return { current: null };
  }, st.forwardRef = function(S) {
    return { $$typeof: p, render: S };
  }, st.isValidElement = it, st.lazy = function(S) {
    return {
      $$typeof: x,
      _payload: { _status: -1, _result: S },
      _init: X
    };
  }, st.memo = function(S, j) {
    return {
      $$typeof: g,
      type: S,
      compare: j === void 0 ? null : j
    };
  }, st.startTransition = function(S) {
    var j = $.T, J = {};
    $.T = J;
    try {
      var W = S(), nt = $.S;
      nt !== null && nt(J, W), typeof W == "object" && W !== null && typeof W.then == "function" && W.then(St, et);
    } catch (mt) {
      et(mt);
    } finally {
      $.T = j;
    }
  }, st.unstable_useCacheRefresh = function() {
    return $.H.useCacheRefresh();
  }, st.use = function(S) {
    return $.H.use(S);
  }, st.useActionState = function(S, j, J) {
    return $.H.useActionState(S, j, J);
  }, st.useCallback = function(S, j) {
    return $.H.useCallback(S, j);
  }, st.useContext = function(S) {
    return $.H.useContext(S);
  }, st.useDebugValue = function() {
  }, st.useDeferredValue = function(S, j) {
    return $.H.useDeferredValue(S, j);
  }, st.useEffect = function(S, j, J) {
    var W = $.H;
    if (typeof J == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return W.useEffect(S, j);
  }, st.useId = function() {
    return $.H.useId();
  }, st.useImperativeHandle = function(S, j, J) {
    return $.H.useImperativeHandle(S, j, J);
  }, st.useInsertionEffect = function(S, j) {
    return $.H.useInsertionEffect(S, j);
  }, st.useLayoutEffect = function(S, j) {
    return $.H.useLayoutEffect(S, j);
  }, st.useMemo = function(S, j) {
    return $.H.useMemo(S, j);
  }, st.useOptimistic = function(S, j) {
    return $.H.useOptimistic(S, j);
  }, st.useReducer = function(S, j, J) {
    return $.H.useReducer(S, j, J);
  }, st.useRef = function(S) {
    return $.H.useRef(S);
  }, st.useState = function(S) {
    return $.H.useState(S);
  }, st.useSyncExternalStore = function(S, j, J) {
    return $.H.useSyncExternalStore(
      S,
      j,
      J
    );
  }, st.useTransition = function() {
    return $.H.useTransition();
  }, st.version = "19.1.1", st;
}
var O0;
function yf() {
  return O0 || (O0 = 1, Qo.exports = Rg()), Qo.exports;
}
var Vo = { exports: {} }, ce = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var R0;
function _g() {
  if (R0) return ce;
  R0 = 1;
  var a = yf();
  function i(b) {
    var g = "https://react.dev/errors/" + b;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var x = 2; x < arguments.length; x++)
        g += "&args[]=" + encodeURIComponent(arguments[x]);
    }
    return "Minified React error #" + b + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function o() {
  }
  var c = {
    d: {
      f: o,
      r: function() {
        throw Error(i(522));
      },
      D: o,
      C: o,
      L: o,
      m: o,
      X: o,
      S: o,
      M: o
    },
    p: 0,
    findDOMNode: null
  }, f = Symbol.for("react.portal");
  function d(b, g, x) {
    var D = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: f,
      key: D == null ? null : "" + D,
      children: b,
      containerInfo: g,
      implementation: x
    };
  }
  var m = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(b, g) {
    if (b === "font") return "";
    if (typeof g == "string")
      return g === "use-credentials" ? g : "";
  }
  return ce.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c, ce.createPortal = function(b, g) {
    var x = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)
      throw Error(i(299));
    return d(b, g, null, x);
  }, ce.flushSync = function(b) {
    var g = m.T, x = c.p;
    try {
      if (m.T = null, c.p = 2, b) return b();
    } finally {
      m.T = g, c.p = x, c.d.f();
    }
  }, ce.preconnect = function(b, g) {
    typeof b == "string" && (g ? (g = g.crossOrigin, g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null, c.d.C(b, g));
  }, ce.prefetchDNS = function(b) {
    typeof b == "string" && c.d.D(b);
  }, ce.preinit = function(b, g) {
    if (typeof b == "string" && g && typeof g.as == "string") {
      var x = g.as, D = p(x, g.crossOrigin), N = typeof g.integrity == "string" ? g.integrity : void 0, q = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
      x === "style" ? c.d.S(
        b,
        typeof g.precedence == "string" ? g.precedence : void 0,
        {
          crossOrigin: D,
          integrity: N,
          fetchPriority: q
        }
      ) : x === "script" && c.d.X(b, {
        crossOrigin: D,
        integrity: N,
        fetchPriority: q,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0
      });
    }
  }, ce.preinitModule = function(b, g) {
    if (typeof b == "string")
      if (typeof g == "object" && g !== null) {
        if (g.as == null || g.as === "script") {
          var x = p(
            g.as,
            g.crossOrigin
          );
          c.d.M(b, {
            crossOrigin: x,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
            nonce: typeof g.nonce == "string" ? g.nonce : void 0
          });
        }
      } else g == null && c.d.M(b);
  }, ce.preload = function(b, g) {
    if (typeof b == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
      var x = g.as, D = p(x, g.crossOrigin);
      c.d.L(b, x, {
        crossOrigin: D,
        integrity: typeof g.integrity == "string" ? g.integrity : void 0,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0,
        type: typeof g.type == "string" ? g.type : void 0,
        fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
        referrerPolicy: typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
        imageSrcSet: typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
        imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
        media: typeof g.media == "string" ? g.media : void 0
      });
    }
  }, ce.preloadModule = function(b, g) {
    if (typeof b == "string")
      if (g) {
        var x = p(g.as, g.crossOrigin);
        c.d.m(b, {
          as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
          crossOrigin: x,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0
        });
      } else c.d.m(b);
  }, ce.requestFormReset = function(b) {
    c.d.r(b);
  }, ce.unstable_batchedUpdates = function(b, g) {
    return b(g);
  }, ce.useFormState = function(b, g, x) {
    return m.H.useFormState(b, g, x);
  }, ce.useFormStatus = function() {
    return m.H.useHostTransitionStatus();
  }, ce.version = "19.1.1", ce;
}
var _0;
function pm() {
  if (_0) return Vo.exports;
  _0 = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (i) {
        console.error(i);
      }
  }
  return a(), Vo.exports = _g(), Vo.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var M0;
function Mg() {
  if (M0) return Au;
  M0 = 1;
  var a = Og(), i = yf(), o = pm();
  function c(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function f(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function d(t) {
    var e = t, n = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do
        e = t, (e.flags & 4098) !== 0 && (n = e.return), t = e.return;
      while (t);
    }
    return e.tag === 3 ? n : null;
  }
  function m(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function p(t) {
    if (d(t) !== t)
      throw Error(c(188));
  }
  function b(t) {
    var e = t.alternate;
    if (!e) {
      if (e = d(t), e === null) throw Error(c(188));
      return e !== t ? null : t;
    }
    for (var n = t, l = e; ; ) {
      var u = n.return;
      if (u === null) break;
      var r = u.alternate;
      if (r === null) {
        if (l = u.return, l !== null) {
          n = l;
          continue;
        }
        break;
      }
      if (u.child === r.child) {
        for (r = u.child; r; ) {
          if (r === n) return p(u), t;
          if (r === l) return p(u), e;
          r = r.sibling;
        }
        throw Error(c(188));
      }
      if (n.return !== l.return) n = u, l = r;
      else {
        for (var s = !1, h = u.child; h; ) {
          if (h === n) {
            s = !0, n = u, l = r;
            break;
          }
          if (h === l) {
            s = !0, l = u, n = r;
            break;
          }
          h = h.sibling;
        }
        if (!s) {
          for (h = r.child; h; ) {
            if (h === n) {
              s = !0, n = r, l = u;
              break;
            }
            if (h === l) {
              s = !0, l = r, n = u;
              break;
            }
            h = h.sibling;
          }
          if (!s) throw Error(c(189));
        }
      }
      if (n.alternate !== l) throw Error(c(190));
    }
    if (n.tag !== 3) throw Error(c(188));
    return n.stateNode.current === n ? t : e;
  }
  function g(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = g(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  var x = Object.assign, D = Symbol.for("react.element"), N = Symbol.for("react.transitional.element"), q = Symbol.for("react.portal"), z = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), K = Symbol.for("react.provider"), P = Symbol.for("react.consumer"), Q = Symbol.for("react.context"), L = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), ot = Symbol.for("react.lazy"), it = Symbol.for("react.activity"), gt = Symbol.for("react.memo_cache_sentinel"), ft = Symbol.iterator;
  function y(t) {
    return t === null || typeof t != "object" ? null : (t = ft && t[ft] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var F = Symbol.for("react.client.reference");
  function G(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === F ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case z:
        return "Fragment";
      case w:
        return "Profiler";
      case A:
        return "StrictMode";
      case $:
        return "Suspense";
      case k:
        return "SuspenseList";
      case it:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case q:
          return "Portal";
        case Q:
          return (t.displayName || "Context") + ".Provider";
        case P:
          return (t._context.displayName || "Context") + ".Consumer";
        case L:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case Z:
          return e = t.displayName || null, e !== null ? e : G(t.type) || "Memo";
        case ot:
          e = t._payload, t = t._init;
          try {
            return G(t(e));
          } catch {
          }
      }
    return null;
  }
  var V = Array.isArray, C = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, X = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, et = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, St = [], S = -1;
  function j(t) {
    return { current: t };
  }
  function J(t) {
    0 > S || (t.current = St[S], St[S] = null, S--);
  }
  function W(t, e) {
    S++, St[S] = t.current, t.current = e;
  }
  var nt = j(null), mt = j(null), rt = j(null), ee = j(null);
  function Mt(t, e) {
    switch (W(rt, e), W(mt, t), W(nt, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Jh(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = Jh(e), t = Wh(e, t);
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    J(nt), W(nt, t);
  }
  function Me() {
    J(nt), J(mt), J(rt);
  }
  function Le(t) {
    t.memoizedState !== null && W(ee, t);
    var e = nt.current, n = Wh(e, t.type);
    e !== n && (W(mt, t), W(nt, n));
  }
  function $e(t) {
    mt.current === t && (J(nt), J(mt)), ee.current === t && (J(ee), vu._currentValue = et);
  }
  var Ca = Object.prototype.hasOwnProperty, rn = a.unstable_scheduleCallback, Rr = a.unstable_cancelCallback, tp = a.unstable_shouldYield, ep = a.unstable_requestPaint, Je = a.unstable_now, np = a.unstable_getCurrentPriorityLevel, Mf = a.unstable_ImmediatePriority, Df = a.unstable_UserBlockingPriority, Lu = a.unstable_NormalPriority, lp = a.unstable_LowPriority, zf = a.unstable_IdlePriority, ap = a.log, up = a.unstable_setDisableYieldValue, Oa = null, ge = null;
  function Rn(t) {
    if (typeof ap == "function" && up(t), ge && typeof ge.setStrictMode == "function")
      try {
        ge.setStrictMode(Oa, t);
      } catch {
      }
  }
  var ve = Math.clz32 ? Math.clz32 : cp, ip = Math.log, rp = Math.LN2;
  function cp(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (ip(t) / rp | 0) | 0;
  }
  var Xu = 256, Qu = 4194304;
  function In(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Vu(t, e, n) {
    var l = t.pendingLanes;
    if (l === 0) return 0;
    var u = 0, r = t.suspendedLanes, s = t.pingedLanes;
    t = t.warmLanes;
    var h = l & 134217727;
    return h !== 0 ? (l = h & ~r, l !== 0 ? u = In(l) : (s &= h, s !== 0 ? u = In(s) : n || (n = h & ~t, n !== 0 && (u = In(n))))) : (h = l & ~r, h !== 0 ? u = In(h) : s !== 0 ? u = In(s) : n || (n = l & ~t, n !== 0 && (u = In(n)))), u === 0 ? 0 : e !== 0 && e !== u && (e & r) === 0 && (r = u & -u, n = e & -e, r >= n || r === 32 && (n & 4194048) !== 0) ? e : u;
  }
  function Ra(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function op(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Nf() {
    var t = Xu;
    return Xu <<= 1, (Xu & 4194048) === 0 && (Xu = 256), t;
  }
  function Uf() {
    var t = Qu;
    return Qu <<= 1, (Qu & 62914560) === 0 && (Qu = 4194304), t;
  }
  function _r(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function _a(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function fp(t, e, n, l, u, r) {
    var s = t.pendingLanes;
    t.pendingLanes = n, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= n, t.entangledLanes &= n, t.errorRecoveryDisabledLanes &= n, t.shellSuspendCounter = 0;
    var h = t.entanglements, v = t.expirationTimes, R = t.hiddenUpdates;
    for (n = s & ~n; 0 < n; ) {
      var B = 31 - ve(n), Y = 1 << B;
      h[B] = 0, v[B] = -1;
      var _ = R[B];
      if (_ !== null)
        for (R[B] = null, B = 0; B < _.length; B++) {
          var M = _[B];
          M !== null && (M.lane &= -536870913);
        }
      n &= ~Y;
    }
    l !== 0 && Bf(t, l, 0), r !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= r & ~(s & ~e));
  }
  function Bf(t, e, n) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var l = 31 - ve(e);
    t.entangledLanes |= e, t.entanglements[l] = t.entanglements[l] | 1073741824 | n & 4194090;
  }
  function wf(t, e) {
    var n = t.entangledLanes |= e;
    for (t = t.entanglements; n; ) {
      var l = 31 - ve(n), u = 1 << l;
      u & e | t[l] & e && (t[l] |= e), n &= ~u;
    }
  }
  function Mr(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function Dr(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Hf() {
    var t = X.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : p0(t.type));
  }
  function sp(t, e) {
    var n = X.p;
    try {
      return X.p = t, e();
    } finally {
      X.p = n;
    }
  }
  var _n = Math.random().toString(36).slice(2), ie = "__reactFiber$" + _n, se = "__reactProps$" + _n, Rl = "__reactContainer$" + _n, zr = "__reactEvents$" + _n, dp = "__reactListeners$" + _n, hp = "__reactHandles$" + _n, qf = "__reactResources$" + _n, Ma = "__reactMarker$" + _n;
  function Nr(t) {
    delete t[ie], delete t[se], delete t[zr], delete t[dp], delete t[hp];
  }
  function _l(t) {
    var e = t[ie];
    if (e) return e;
    for (var n = t.parentNode; n; ) {
      if (e = n[Rl] || n[ie]) {
        if (n = e.alternate, e.child !== null || n !== null && n.child !== null)
          for (t = t0(t); t !== null; ) {
            if (n = t[ie]) return n;
            t = t0(t);
          }
        return e;
      }
      t = n, n = t.parentNode;
    }
    return null;
  }
  function Ml(t) {
    if (t = t[ie] || t[Rl]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function Da(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(c(33));
  }
  function Dl(t) {
    var e = t[qf];
    return e || (e = t[qf] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function Ft(t) {
    t[Ma] = !0;
  }
  var Yf = /* @__PURE__ */ new Set(), jf = {};
  function tl(t, e) {
    zl(t, e), zl(t + "Capture", e);
  }
  function zl(t, e) {
    for (jf[t] = e, t = 0; t < e.length; t++)
      Yf.add(e[t]);
  }
  var mp = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Gf = {}, kf = {};
  function pp(t) {
    return Ca.call(kf, t) ? !0 : Ca.call(Gf, t) ? !1 : mp.test(t) ? kf[t] = !0 : (Gf[t] = !0, !1);
  }
  function Zu(t, e, n) {
    if (pp(e))
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var l = e.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + n);
      }
  }
  function Ku(t, e, n) {
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + n);
    }
  }
  function cn(t, e, n, l) {
    if (l === null) t.removeAttribute(n);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttributeNS(e, n, "" + l);
    }
  }
  var Ur, Lf;
  function Nl(t) {
    if (Ur === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        Ur = e && e[1] || "", Lf = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Ur + t + Lf;
  }
  var Br = !1;
  function wr(t, e) {
    if (!t || Br) return "";
    Br = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var Y = function() {
                throw Error();
              };
              if (Object.defineProperty(Y.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(Y, []);
                } catch (M) {
                  var _ = M;
                }
                Reflect.construct(t, [], Y);
              } else {
                try {
                  Y.call();
                } catch (M) {
                  _ = M;
                }
                t.call(Y.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (M) {
                _ = M;
              }
              (Y = t()) && typeof Y.catch == "function" && Y.catch(function() {
              });
            }
          } catch (M) {
            if (M && _ && typeof M.stack == "string")
              return [M.stack, _.stack];
          }
          return [null, null];
        }
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      u && u.configurable && Object.defineProperty(
        l.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var r = l.DetermineComponentFrameRoot(), s = r[0], h = r[1];
      if (s && h) {
        var v = s.split(`
`), R = h.split(`
`);
        for (u = l = 0; l < v.length && !v[l].includes("DetermineComponentFrameRoot"); )
          l++;
        for (; u < R.length && !R[u].includes(
          "DetermineComponentFrameRoot"
        ); )
          u++;
        if (l === v.length || u === R.length)
          for (l = v.length - 1, u = R.length - 1; 1 <= l && 0 <= u && v[l] !== R[u]; )
            u--;
        for (; 1 <= l && 0 <= u; l--, u--)
          if (v[l] !== R[u]) {
            if (l !== 1 || u !== 1)
              do
                if (l--, u--, 0 > u || v[l] !== R[u]) {
                  var B = `
` + v[l].replace(" at new ", " at ");
                  return t.displayName && B.includes("<anonymous>") && (B = B.replace("<anonymous>", t.displayName)), B;
                }
              while (1 <= l && 0 <= u);
            break;
          }
      }
    } finally {
      Br = !1, Error.prepareStackTrace = n;
    }
    return (n = t ? t.displayName || t.name : "") ? Nl(n) : "";
  }
  function yp(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Nl(t.type);
      case 16:
        return Nl("Lazy");
      case 13:
        return Nl("Suspense");
      case 19:
        return Nl("SuspenseList");
      case 0:
      case 15:
        return wr(t.type, !1);
      case 11:
        return wr(t.type.render, !1);
      case 1:
        return wr(t.type, !0);
      case 31:
        return Nl("Activity");
      default:
        return "";
    }
  }
  function Xf(t) {
    try {
      var e = "";
      do
        e += yp(t), t = t.return;
      while (t);
      return e;
    } catch (n) {
      return `
Error generating stack: ` + n.message + `
` + n.stack;
    }
  }
  function De(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Qf(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function gp(t) {
    var e = Qf(t) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      e
    ), l = "" + t[e];
    if (!t.hasOwnProperty(e) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var u = n.get, r = n.set;
      return Object.defineProperty(t, e, {
        configurable: !0,
        get: function() {
          return u.call(this);
        },
        set: function(s) {
          l = "" + s, r.call(this, s);
        }
      }), Object.defineProperty(t, e, {
        enumerable: n.enumerable
      }), {
        getValue: function() {
          return l;
        },
        setValue: function(s) {
          l = "" + s;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[e];
        }
      };
    }
  }
  function $u(t) {
    t._valueTracker || (t._valueTracker = gp(t));
  }
  function Vf(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(), l = "";
    return t && (l = Qf(t) ? t.checked ? "true" : "false" : t.value), t = l, t !== n ? (e.setValue(t), !0) : !1;
  }
  function Ju(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var vp = /[\n"\\]/g;
  function ze(t) {
    return t.replace(
      vp,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Hr(t, e, n, l, u, r, s, h) {
    t.name = "", s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? t.type = s : t.removeAttribute("type"), e != null ? s === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + De(e)) : t.value !== "" + De(e) && (t.value = "" + De(e)) : s !== "submit" && s !== "reset" || t.removeAttribute("value"), e != null ? qr(t, s, De(e)) : n != null ? qr(t, s, De(n)) : l != null && t.removeAttribute("value"), u == null && r != null && (t.defaultChecked = !!r), u != null && (t.checked = u && typeof u != "function" && typeof u != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? t.name = "" + De(h) : t.removeAttribute("name");
  }
  function Zf(t, e, n, l, u, r, s, h) {
    if (r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (t.type = r), e != null || n != null) {
      if (!(r !== "submit" && r !== "reset" || e != null))
        return;
      n = n != null ? "" + De(n) : "", e = e != null ? "" + De(e) : n, h || e === t.value || (t.value = e), t.defaultValue = e;
    }
    l = l ?? u, l = typeof l != "function" && typeof l != "symbol" && !!l, t.checked = h ? t.checked : !!l, t.defaultChecked = !!l, s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (t.name = s);
  }
  function qr(t, e, n) {
    e === "number" && Ju(t.ownerDocument) === t || t.defaultValue === "" + n || (t.defaultValue = "" + n);
  }
  function Ul(t, e, n, l) {
    if (t = t.options, e) {
      e = {};
      for (var u = 0; u < n.length; u++)
        e["$" + n[u]] = !0;
      for (n = 0; n < t.length; n++)
        u = e.hasOwnProperty("$" + t[n].value), t[n].selected !== u && (t[n].selected = u), u && l && (t[n].defaultSelected = !0);
    } else {
      for (n = "" + De(n), e = null, u = 0; u < t.length; u++) {
        if (t[u].value === n) {
          t[u].selected = !0, l && (t[u].defaultSelected = !0);
          return;
        }
        e !== null || t[u].disabled || (e = t[u]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function Kf(t, e, n) {
    if (e != null && (e = "" + De(e), e !== t.value && (t.value = e), n == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + De(n) : "";
  }
  function $f(t, e, n, l) {
    if (e == null) {
      if (l != null) {
        if (n != null) throw Error(c(92));
        if (V(l)) {
          if (1 < l.length) throw Error(c(93));
          l = l[0];
        }
        n = l;
      }
      n == null && (n = ""), e = n;
    }
    n = De(e), t.defaultValue = n, l = t.textContent, l === n && l !== "" && l !== null && (t.value = l);
  }
  function Bl(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var bp = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Jf(t, e, n) {
    var l = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? l ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : l ? t.setProperty(e, n) : typeof n != "number" || n === 0 || bp.has(e) ? e === "float" ? t.cssFloat = n : t[e] = ("" + n).trim() : t[e] = n + "px";
  }
  function Wf(t, e, n) {
    if (e != null && typeof e != "object")
      throw Error(c(62));
    if (t = t.style, n != null) {
      for (var l in n)
        !n.hasOwnProperty(l) || e != null && e.hasOwnProperty(l) || (l.indexOf("--") === 0 ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "");
      for (var u in e)
        l = e[u], e.hasOwnProperty(u) && n[u] !== l && Jf(t, u, l);
    } else
      for (var r in e)
        e.hasOwnProperty(r) && Jf(t, r, e[r]);
  }
  function Yr(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Sp = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Tp = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Wu(t) {
    return Tp.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  var jr = null;
  function Gr(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var wl = null, Hl = null;
  function Ff(t) {
    var e = Ml(t);
    if (e && (t = e.stateNode)) {
      var n = t[se] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (Hr(
            t,
            n.value,
            n.defaultValue,
            n.defaultValue,
            n.checked,
            n.defaultChecked,
            n.type,
            n.name
          ), e = n.name, n.type === "radio" && e != null) {
            for (n = t; n.parentNode; ) n = n.parentNode;
            for (n = n.querySelectorAll(
              'input[name="' + ze(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < n.length; e++) {
              var l = n[e];
              if (l !== t && l.form === t.form) {
                var u = l[se] || null;
                if (!u) throw Error(c(90));
                Hr(
                  l,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name
                );
              }
            }
            for (e = 0; e < n.length; e++)
              l = n[e], l.form === t.form && Vf(l);
          }
          break t;
        case "textarea":
          Kf(t, n.value, n.defaultValue);
          break t;
        case "select":
          e = n.value, e != null && Ul(t, !!n.multiple, e, !1);
      }
    }
  }
  var kr = !1;
  function Pf(t, e, n) {
    if (kr) return t(e, n);
    kr = !0;
    try {
      var l = t(e);
      return l;
    } finally {
      if (kr = !1, (wl !== null || Hl !== null) && (wi(), wl && (e = wl, t = Hl, Hl = wl = null, Ff(e), t)))
        for (e = 0; e < t.length; e++) Ff(t[e]);
    }
  }
  function za(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var l = n[se] || null;
    if (l === null) return null;
    n = l[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (l = !l.disabled) || (t = t.type, l = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !l;
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (n && typeof n != "function")
      throw Error(
        c(231, e, typeof n)
      );
    return n;
  }
  var on = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Lr = !1;
  if (on)
    try {
      var Na = {};
      Object.defineProperty(Na, "passive", {
        get: function() {
          Lr = !0;
        }
      }), window.addEventListener("test", Na, Na), window.removeEventListener("test", Na, Na);
    } catch {
      Lr = !1;
    }
  var Mn = null, Xr = null, Fu = null;
  function If() {
    if (Fu) return Fu;
    var t, e = Xr, n = e.length, l, u = "value" in Mn ? Mn.value : Mn.textContent, r = u.length;
    for (t = 0; t < n && e[t] === u[t]; t++) ;
    var s = n - t;
    for (l = 1; l <= s && e[n - l] === u[r - l]; l++) ;
    return Fu = u.slice(t, 1 < l ? 1 - l : void 0);
  }
  function Pu(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function Iu() {
    return !0;
  }
  function ts() {
    return !1;
  }
  function de(t) {
    function e(n, l, u, r, s) {
      this._reactName = n, this._targetInst = u, this.type = l, this.nativeEvent = r, this.target = s, this.currentTarget = null;
      for (var h in t)
        t.hasOwnProperty(h) && (n = t[h], this[h] = n ? n(r) : r[h]);
      return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1) ? Iu : ts, this.isPropagationStopped = ts, this;
    }
    return x(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Iu);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Iu);
      },
      persist: function() {
      },
      isPersistent: Iu
    }), e;
  }
  var el = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, ti = de(el), Ua = x({}, el, { view: 0, detail: 0 }), Ep = de(Ua), Qr, Vr, Ba, ei = x({}, Ua, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Kr,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== Ba && (Ba && t.type === "mousemove" ? (Qr = t.screenX - Ba.screenX, Vr = t.screenY - Ba.screenY) : Vr = Qr = 0, Ba = t), Qr);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : Vr;
    }
  }), es = de(ei), xp = x({}, ei, { dataTransfer: 0 }), Ap = de(xp), Cp = x({}, Ua, { relatedTarget: 0 }), Zr = de(Cp), Op = x({}, el, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Rp = de(Op), _p = x({}, el, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), Mp = de(_p), Dp = x({}, el, { data: 0 }), ns = de(Dp), zp = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Np = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Up = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Bp(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = Up[t]) ? !!e[t] : !1;
  }
  function Kr() {
    return Bp;
  }
  var wp = x({}, Ua, {
    key: function(t) {
      if (t.key) {
        var e = zp[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = Pu(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Np[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Kr,
    charCode: function(t) {
      return t.type === "keypress" ? Pu(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? Pu(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), Hp = de(wp), qp = x({}, ei, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), ls = de(qp), Yp = x({}, Ua, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Kr
  }), jp = de(Yp), Gp = x({}, el, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), kp = de(Gp), Lp = x({}, ei, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Xp = de(Lp), Qp = x({}, el, {
    newState: 0,
    oldState: 0
  }), Vp = de(Qp), Zp = [9, 13, 27, 32], $r = on && "CompositionEvent" in window, wa = null;
  on && "documentMode" in document && (wa = document.documentMode);
  var Kp = on && "TextEvent" in window && !wa, as = on && (!$r || wa && 8 < wa && 11 >= wa), us = " ", is = !1;
  function rs(t, e) {
    switch (t) {
      case "keyup":
        return Zp.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function cs(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var ql = !1;
  function $p(t, e) {
    switch (t) {
      case "compositionend":
        return cs(e);
      case "keypress":
        return e.which !== 32 ? null : (is = !0, us);
      case "textInput":
        return t = e.data, t === us && is ? null : t;
      default:
        return null;
    }
  }
  function Jp(t, e) {
    if (ql)
      return t === "compositionend" || !$r && rs(t, e) ? (t = If(), Fu = Xr = Mn = null, ql = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
          if (e.char && 1 < e.char.length)
            return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return as && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var Wp = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function os(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!Wp[t.type] : e === "textarea";
  }
  function fs(t, e, n, l) {
    wl ? Hl ? Hl.push(l) : Hl = [l] : wl = l, e = ki(e, "onChange"), 0 < e.length && (n = new ti(
      "onChange",
      "change",
      null,
      n,
      l
    ), t.push({ event: n, listeners: e }));
  }
  var Ha = null, qa = null;
  function Fp(t) {
    Qh(t, 0);
  }
  function ni(t) {
    var e = Da(t);
    if (Vf(e)) return t;
  }
  function ss(t, e) {
    if (t === "change") return e;
  }
  var ds = !1;
  if (on) {
    var Jr;
    if (on) {
      var Wr = "oninput" in document;
      if (!Wr) {
        var hs = document.createElement("div");
        hs.setAttribute("oninput", "return;"), Wr = typeof hs.oninput == "function";
      }
      Jr = Wr;
    } else Jr = !1;
    ds = Jr && (!document.documentMode || 9 < document.documentMode);
  }
  function ms() {
    Ha && (Ha.detachEvent("onpropertychange", ps), qa = Ha = null);
  }
  function ps(t) {
    if (t.propertyName === "value" && ni(qa)) {
      var e = [];
      fs(
        e,
        qa,
        t,
        Gr(t)
      ), Pf(Fp, e);
    }
  }
  function Pp(t, e, n) {
    t === "focusin" ? (ms(), Ha = e, qa = n, Ha.attachEvent("onpropertychange", ps)) : t === "focusout" && ms();
  }
  function Ip(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return ni(qa);
  }
  function ty(t, e) {
    if (t === "click") return ni(e);
  }
  function ey(t, e) {
    if (t === "input" || t === "change")
      return ni(e);
  }
  function ny(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var be = typeof Object.is == "function" ? Object.is : ny;
  function Ya(t, e) {
    if (be(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var n = Object.keys(t), l = Object.keys(e);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var u = n[l];
      if (!Ca.call(e, u) || !be(t[u], e[u]))
        return !1;
    }
    return !0;
  }
  function ys(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function gs(t, e) {
    var n = ys(t);
    t = 0;
    for (var l; n; ) {
      if (n.nodeType === 3) {
        if (l = t + n.textContent.length, t <= e && l >= e)
          return { node: n, offset: e - t };
        t = l;
      }
      t: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break t;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = ys(n);
    }
  }
  function vs(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? vs(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function bs(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = Ju(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = Ju(t.document);
    }
    return e;
  }
  function Fr(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var ly = on && "documentMode" in document && 11 >= document.documentMode, Yl = null, Pr = null, ja = null, Ir = !1;
  function Ss(t, e, n) {
    var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ir || Yl == null || Yl !== Ju(l) || (l = Yl, "selectionStart" in l && Fr(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), ja && Ya(ja, l) || (ja = l, l = ki(Pr, "onSelect"), 0 < l.length && (e = new ti(
      "onSelect",
      "select",
      null,
      e,
      n
    ), t.push({ event: e, listeners: l }), e.target = Yl)));
  }
  function nl(t, e) {
    var n = {};
    return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n;
  }
  var jl = {
    animationend: nl("Animation", "AnimationEnd"),
    animationiteration: nl("Animation", "AnimationIteration"),
    animationstart: nl("Animation", "AnimationStart"),
    transitionrun: nl("Transition", "TransitionRun"),
    transitionstart: nl("Transition", "TransitionStart"),
    transitioncancel: nl("Transition", "TransitionCancel"),
    transitionend: nl("Transition", "TransitionEnd")
  }, tc = {}, Ts = {};
  on && (Ts = document.createElement("div").style, "AnimationEvent" in window || (delete jl.animationend.animation, delete jl.animationiteration.animation, delete jl.animationstart.animation), "TransitionEvent" in window || delete jl.transitionend.transition);
  function ll(t) {
    if (tc[t]) return tc[t];
    if (!jl[t]) return t;
    var e = jl[t], n;
    for (n in e)
      if (e.hasOwnProperty(n) && n in Ts)
        return tc[t] = e[n];
    return t;
  }
  var Es = ll("animationend"), xs = ll("animationiteration"), As = ll("animationstart"), ay = ll("transitionrun"), uy = ll("transitionstart"), iy = ll("transitioncancel"), Cs = ll("transitionend"), Os = /* @__PURE__ */ new Map(), ec = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  ec.push("scrollEnd");
  function Xe(t, e) {
    Os.set(t, e), tl(e, [t]);
  }
  var Rs = /* @__PURE__ */ new WeakMap();
  function Ne(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = Rs.get(t);
      return n !== void 0 ? n : (e = {
        value: t,
        source: e,
        stack: Xf(e)
      }, Rs.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: Xf(e)
    };
  }
  var Ue = [], Gl = 0, nc = 0;
  function li() {
    for (var t = Gl, e = nc = Gl = 0; e < t; ) {
      var n = Ue[e];
      Ue[e++] = null;
      var l = Ue[e];
      Ue[e++] = null;
      var u = Ue[e];
      Ue[e++] = null;
      var r = Ue[e];
      if (Ue[e++] = null, l !== null && u !== null) {
        var s = l.pending;
        s === null ? u.next = u : (u.next = s.next, s.next = u), l.pending = u;
      }
      r !== 0 && _s(n, u, r);
    }
  }
  function ai(t, e, n, l) {
    Ue[Gl++] = t, Ue[Gl++] = e, Ue[Gl++] = n, Ue[Gl++] = l, nc |= l, t.lanes |= l, t = t.alternate, t !== null && (t.lanes |= l);
  }
  function lc(t, e, n, l) {
    return ai(t, e, n, l), ui(t);
  }
  function kl(t, e) {
    return ai(t, null, null, e), ui(t);
  }
  function _s(t, e, n) {
    t.lanes |= n;
    var l = t.alternate;
    l !== null && (l.lanes |= n);
    for (var u = !1, r = t.return; r !== null; )
      r.childLanes |= n, l = r.alternate, l !== null && (l.childLanes |= n), r.tag === 22 && (t = r.stateNode, t === null || t._visibility & 1 || (u = !0)), t = r, r = r.return;
    return t.tag === 3 ? (r = t.stateNode, u && e !== null && (u = 31 - ve(n), t = r.hiddenUpdates, l = t[u], l === null ? t[u] = [e] : l.push(e), e.lane = n | 536870912), r) : null;
  }
  function ui(t) {
    if (50 < fu)
      throw fu = 0, oo = null, Error(c(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Ll = {};
  function ry(t, e, n, l) {
    this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Se(t, e, n, l) {
    return new ry(t, e, n, l);
  }
  function ac(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function fn(t, e) {
    var n = t.alternate;
    return n === null ? (n = Se(
      t.tag,
      e,
      t.key,
      t.mode
    ), n.elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = t.flags & 65011712, n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n.refCleanup = t.refCleanup, n;
  }
  function Ms(t, e) {
    t.flags &= 65011714;
    var n = t.alternate;
    return n === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = n.childLanes, t.lanes = n.lanes, t.child = n.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = n.memoizedProps, t.memoizedState = n.memoizedState, t.updateQueue = n.updateQueue, t.type = n.type, e = n.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function ii(t, e, n, l, u, r) {
    var s = 0;
    if (l = t, typeof t == "function") ac(t) && (s = 1);
    else if (typeof t == "string")
      s = og(
        t,
        n,
        nt.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case it:
          return t = Se(31, n, e, u), t.elementType = it, t.lanes = r, t;
        case z:
          return al(n.children, u, r, e);
        case A:
          s = 8, u |= 24;
          break;
        case w:
          return t = Se(12, n, e, u | 2), t.elementType = w, t.lanes = r, t;
        case $:
          return t = Se(13, n, e, u), t.elementType = $, t.lanes = r, t;
        case k:
          return t = Se(19, n, e, u), t.elementType = k, t.lanes = r, t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case K:
              case Q:
                s = 10;
                break t;
              case P:
                s = 9;
                break t;
              case L:
                s = 11;
                break t;
              case Z:
                s = 14;
                break t;
              case ot:
                s = 16, l = null;
                break t;
            }
          s = 29, n = Error(
            c(130, t === null ? "null" : typeof t, "")
          ), l = null;
      }
    return e = Se(s, n, e, u), e.elementType = t, e.type = l, e.lanes = r, e;
  }
  function al(t, e, n, l) {
    return t = Se(7, t, l, e), t.lanes = n, t;
  }
  function uc(t, e, n) {
    return t = Se(6, t, null, e), t.lanes = n, t;
  }
  function ic(t, e, n) {
    return e = Se(
      4,
      t.children !== null ? t.children : [],
      t.key,
      e
    ), e.lanes = n, e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, e;
  }
  var Xl = [], Ql = 0, ri = null, ci = 0, Be = [], we = 0, ul = null, sn = 1, dn = "";
  function il(t, e) {
    Xl[Ql++] = ci, Xl[Ql++] = ri, ri = t, ci = e;
  }
  function Ds(t, e, n) {
    Be[we++] = sn, Be[we++] = dn, Be[we++] = ul, ul = t;
    var l = sn;
    t = dn;
    var u = 32 - ve(l) - 1;
    l &= ~(1 << u), n += 1;
    var r = 32 - ve(e) + u;
    if (30 < r) {
      var s = u - u % 5;
      r = (l & (1 << s) - 1).toString(32), l >>= s, u -= s, sn = 1 << 32 - ve(e) + u | n << u | l, dn = r + t;
    } else
      sn = 1 << r | n << u | l, dn = t;
  }
  function rc(t) {
    t.return !== null && (il(t, 1), Ds(t, 1, 0));
  }
  function cc(t) {
    for (; t === ri; )
      ri = Xl[--Ql], Xl[Ql] = null, ci = Xl[--Ql], Xl[Ql] = null;
    for (; t === ul; )
      ul = Be[--we], Be[we] = null, dn = Be[--we], Be[we] = null, sn = Be[--we], Be[we] = null;
  }
  var fe = null, jt = null, Tt = !1, rl = null, We = !1, oc = Error(c(519));
  function cl(t) {
    var e = Error(c(418, ""));
    throw La(Ne(e, t)), oc;
  }
  function zs(t) {
    var e = t.stateNode, n = t.type, l = t.memoizedProps;
    switch (e[ie] = t, e[se] = l, n) {
      case "dialog":
        yt("cancel", e), yt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        yt("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < du.length; n++)
          yt(du[n], e);
        break;
      case "source":
        yt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        yt("error", e), yt("load", e);
        break;
      case "details":
        yt("toggle", e);
        break;
      case "input":
        yt("invalid", e), Zf(
          e,
          l.value,
          l.defaultValue,
          l.checked,
          l.defaultChecked,
          l.type,
          l.name,
          !0
        ), $u(e);
        break;
      case "select":
        yt("invalid", e);
        break;
      case "textarea":
        yt("invalid", e), $f(e, l.value, l.defaultValue, l.children), $u(e);
    }
    n = l.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || e.textContent === "" + n || l.suppressHydrationWarning === !0 || $h(e.textContent, n) ? (l.popover != null && (yt("beforetoggle", e), yt("toggle", e)), l.onScroll != null && yt("scroll", e), l.onScrollEnd != null && yt("scrollend", e), l.onClick != null && (e.onclick = Li), e = !0) : e = !1, e || cl(t);
  }
  function Ns(t) {
    for (fe = t.return; fe; )
      switch (fe.tag) {
        case 5:
        case 13:
          We = !1;
          return;
        case 27:
        case 3:
          We = !0;
          return;
        default:
          fe = fe.return;
      }
  }
  function Ga(t) {
    if (t !== fe) return !1;
    if (!Tt) return Ns(t), Tt = !0, !1;
    var e = t.tag, n;
    if ((n = e !== 3 && e !== 27) && ((n = e === 5) && (n = t.type, n = !(n !== "form" && n !== "button") || Oo(t.type, t.memoizedProps)), n = !n), n && jt && cl(t), Ns(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(c(317));
      t: {
        for (t = t.nextSibling, e = 0; t; ) {
          if (t.nodeType === 8)
            if (n = t.data, n === "/$") {
              if (e === 0) {
                jt = Ve(t.nextSibling);
                break t;
              }
              e--;
            } else
              n !== "$" && n !== "$!" && n !== "$?" || e++;
          t = t.nextSibling;
        }
        jt = null;
      }
    } else
      e === 27 ? (e = jt, Vn(t.type) ? (t = Do, Do = null, jt = t) : jt = e) : jt = fe ? Ve(t.stateNode.nextSibling) : null;
    return !0;
  }
  function ka() {
    jt = fe = null, Tt = !1;
  }
  function Us() {
    var t = rl;
    return t !== null && (pe === null ? pe = t : pe.push.apply(
      pe,
      t
    ), rl = null), t;
  }
  function La(t) {
    rl === null ? rl = [t] : rl.push(t);
  }
  var fc = j(null), ol = null, hn = null;
  function Dn(t, e, n) {
    W(fc, e._currentValue), e._currentValue = n;
  }
  function mn(t) {
    t._currentValue = fc.current, J(fc);
  }
  function sc(t, e, n) {
    for (; t !== null; ) {
      var l = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, l !== null && (l.childLanes |= e)) : l !== null && (l.childLanes & e) !== e && (l.childLanes |= e), t === n) break;
      t = t.return;
    }
  }
  function dc(t, e, n, l) {
    var u = t.child;
    for (u !== null && (u.return = t); u !== null; ) {
      var r = u.dependencies;
      if (r !== null) {
        var s = u.child;
        r = r.firstContext;
        t: for (; r !== null; ) {
          var h = r;
          r = u;
          for (var v = 0; v < e.length; v++)
            if (h.context === e[v]) {
              r.lanes |= n, h = r.alternate, h !== null && (h.lanes |= n), sc(
                r.return,
                n,
                t
              ), l || (s = null);
              break t;
            }
          r = h.next;
        }
      } else if (u.tag === 18) {
        if (s = u.return, s === null) throw Error(c(341));
        s.lanes |= n, r = s.alternate, r !== null && (r.lanes |= n), sc(s, n, t), s = null;
      } else s = u.child;
      if (s !== null) s.return = u;
      else
        for (s = u; s !== null; ) {
          if (s === t) {
            s = null;
            break;
          }
          if (u = s.sibling, u !== null) {
            u.return = s.return, s = u;
            break;
          }
          s = s.return;
        }
      u = s;
    }
  }
  function Xa(t, e, n, l) {
    t = null;
    for (var u = e, r = !1; u !== null; ) {
      if (!r) {
        if ((u.flags & 524288) !== 0) r = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var s = u.alternate;
        if (s === null) throw Error(c(387));
        if (s = s.memoizedProps, s !== null) {
          var h = u.type;
          be(u.pendingProps.value, s.value) || (t !== null ? t.push(h) : t = [h]);
        }
      } else if (u === ee.current) {
        if (s = u.alternate, s === null) throw Error(c(387));
        s.memoizedState.memoizedState !== u.memoizedState.memoizedState && (t !== null ? t.push(vu) : t = [vu]);
      }
      u = u.return;
    }
    t !== null && dc(
      e,
      t,
      n,
      l
    ), e.flags |= 262144;
  }
  function oi(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!be(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function fl(t) {
    ol = t, hn = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function re(t) {
    return Bs(ol, t);
  }
  function fi(t, e) {
    return ol === null && fl(t), Bs(t, e);
  }
  function Bs(t, e) {
    var n = e._currentValue;
    if (e = { context: e, memoizedValue: n, next: null }, hn === null) {
      if (t === null) throw Error(c(308));
      hn = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else hn = hn.next = e;
    return n;
  }
  var cy = typeof AbortController < "u" ? AbortController : function() {
    var t = [], e = this.signal = {
      aborted: !1,
      addEventListener: function(n, l) {
        t.push(l);
      }
    };
    this.abort = function() {
      e.aborted = !0, t.forEach(function(n) {
        return n();
      });
    };
  }, oy = a.unstable_scheduleCallback, fy = a.unstable_NormalPriority, Jt = {
    $$typeof: Q,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function hc() {
    return {
      controller: new cy(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Qa(t) {
    t.refCount--, t.refCount === 0 && oy(fy, function() {
      t.controller.abort();
    });
  }
  var Va = null, mc = 0, Vl = 0, Zl = null;
  function sy(t, e) {
    if (Va === null) {
      var n = Va = [];
      mc = 0, Vl = go(), Zl = {
        status: "pending",
        value: void 0,
        then: function(l) {
          n.push(l);
        }
      };
    }
    return mc++, e.then(ws, ws), e;
  }
  function ws() {
    if (--mc === 0 && Va !== null) {
      Zl !== null && (Zl.status = "fulfilled");
      var t = Va;
      Va = null, Vl = 0, Zl = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function dy(t, e) {
    var n = [], l = {
      status: "pending",
      value: null,
      reason: null,
      then: function(u) {
        n.push(u);
      }
    };
    return t.then(
      function() {
        l.status = "fulfilled", l.value = e;
        for (var u = 0; u < n.length; u++) (0, n[u])(e);
      },
      function(u) {
        for (l.status = "rejected", l.reason = u, u = 0; u < n.length; u++)
          (0, n[u])(void 0);
      }
    ), l;
  }
  var Hs = C.S;
  C.S = function(t, e) {
    typeof e == "object" && e !== null && typeof e.then == "function" && sy(t, e), Hs !== null && Hs(t, e);
  };
  var sl = j(null);
  function pc() {
    var t = sl.current;
    return t !== null ? t : wt.pooledCache;
  }
  function si(t, e) {
    e === null ? W(sl, sl.current) : W(sl, e.pool);
  }
  function qs() {
    var t = pc();
    return t === null ? null : { parent: Jt._currentValue, pool: t };
  }
  var Za = Error(c(460)), Ys = Error(c(474)), di = Error(c(542)), yc = { then: function() {
  } };
  function js(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function hi() {
  }
  function Gs(t, e, n) {
    switch (n = t[n], n === void 0 ? t.push(e) : n !== e && (e.then(hi, hi), e = n), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, Ls(t), t;
      default:
        if (typeof e.status == "string") e.then(hi, hi);
        else {
          if (t = wt, t !== null && 100 < t.shellSuspendCounter)
            throw Error(c(482));
          t = e, t.status = "pending", t.then(
            function(l) {
              if (e.status === "pending") {
                var u = e;
                u.status = "fulfilled", u.value = l;
              }
            },
            function(l) {
              if (e.status === "pending") {
                var u = e;
                u.status = "rejected", u.reason = l;
              }
            }
          );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw t = e.reason, Ls(t), t;
        }
        throw Ka = e, Za;
    }
  }
  var Ka = null;
  function ks() {
    if (Ka === null) throw Error(c(459));
    var t = Ka;
    return Ka = null, t;
  }
  function Ls(t) {
    if (t === Za || t === di)
      throw Error(c(483));
  }
  var zn = !1;
  function gc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function vc(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function Nn(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Un(t, e, n) {
    var l = t.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (At & 2) !== 0) {
      var u = l.pending;
      return u === null ? e.next = e : (e.next = u.next, u.next = e), l.pending = e, e = ui(t), _s(t, null, n), e;
    }
    return ai(t, l, e, n), ui(t);
  }
  function $a(t, e, n) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194048) !== 0)) {
      var l = e.lanes;
      l &= t.pendingLanes, n |= l, e.lanes = n, wf(t, n);
    }
  }
  function bc(t, e) {
    var n = t.updateQueue, l = t.alternate;
    if (l !== null && (l = l.updateQueue, n === l)) {
      var u = null, r = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var s = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null
          };
          r === null ? u = r = s : r = r.next = s, n = n.next;
        } while (n !== null);
        r === null ? u = r = e : r = r.next = e;
      } else u = r = e;
      n = {
        baseState: l.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: r,
        shared: l.shared,
        callbacks: l.callbacks
      }, t.updateQueue = n;
      return;
    }
    t = n.lastBaseUpdate, t === null ? n.firstBaseUpdate = e : t.next = e, n.lastBaseUpdate = e;
  }
  var Sc = !1;
  function Ja() {
    if (Sc) {
      var t = Zl;
      if (t !== null) throw t;
    }
  }
  function Wa(t, e, n, l) {
    Sc = !1;
    var u = t.updateQueue;
    zn = !1;
    var r = u.firstBaseUpdate, s = u.lastBaseUpdate, h = u.shared.pending;
    if (h !== null) {
      u.shared.pending = null;
      var v = h, R = v.next;
      v.next = null, s === null ? r = R : s.next = R, s = v;
      var B = t.alternate;
      B !== null && (B = B.updateQueue, h = B.lastBaseUpdate, h !== s && (h === null ? B.firstBaseUpdate = R : h.next = R, B.lastBaseUpdate = v));
    }
    if (r !== null) {
      var Y = u.baseState;
      s = 0, B = R = v = null, h = r;
      do {
        var _ = h.lane & -536870913, M = _ !== h.lane;
        if (M ? (vt & _) === _ : (l & _) === _) {
          _ !== 0 && _ === Vl && (Sc = !0), B !== null && (B = B.next = {
            lane: 0,
            tag: h.tag,
            payload: h.payload,
            callback: null,
            next: null
          });
          t: {
            var ct = t, at = h;
            _ = e;
            var Nt = n;
            switch (at.tag) {
              case 1:
                if (ct = at.payload, typeof ct == "function") {
                  Y = ct.call(Nt, Y, _);
                  break t;
                }
                Y = ct;
                break t;
              case 3:
                ct.flags = ct.flags & -65537 | 128;
              case 0:
                if (ct = at.payload, _ = typeof ct == "function" ? ct.call(Nt, Y, _) : ct, _ == null) break t;
                Y = x({}, Y, _);
                break t;
              case 2:
                zn = !0;
            }
          }
          _ = h.callback, _ !== null && (t.flags |= 64, M && (t.flags |= 8192), M = u.callbacks, M === null ? u.callbacks = [_] : M.push(_));
        } else
          M = {
            lane: _,
            tag: h.tag,
            payload: h.payload,
            callback: h.callback,
            next: null
          }, B === null ? (R = B = M, v = Y) : B = B.next = M, s |= _;
        if (h = h.next, h === null) {
          if (h = u.shared.pending, h === null)
            break;
          M = h, h = M.next, M.next = null, u.lastBaseUpdate = M, u.shared.pending = null;
        }
      } while (!0);
      B === null && (v = Y), u.baseState = v, u.firstBaseUpdate = R, u.lastBaseUpdate = B, r === null && (u.shared.lanes = 0), kn |= s, t.lanes = s, t.memoizedState = Y;
    }
  }
  function Xs(t, e) {
    if (typeof t != "function")
      throw Error(c(191, t));
    t.call(e);
  }
  function Qs(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++)
        Xs(n[t], e);
  }
  var Kl = j(null), mi = j(0);
  function Vs(t, e) {
    t = Tn, W(mi, t), W(Kl, e), Tn = t | e.baseLanes;
  }
  function Tc() {
    W(mi, Tn), W(Kl, Kl.current);
  }
  function Ec() {
    Tn = mi.current, J(Kl), J(mi);
  }
  var Bn = 0, dt = null, Dt = null, Zt = null, pi = !1, $l = !1, dl = !1, yi = 0, Fa = 0, Jl = null, hy = 0;
  function Xt() {
    throw Error(c(321));
  }
  function xc(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!be(t[n], e[n])) return !1;
    return !0;
  }
  function Ac(t, e, n, l, u, r) {
    return Bn = r, dt = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, C.H = t === null || t.memoizedState === null ? _d : Md, dl = !1, r = n(l, u), dl = !1, $l && (r = Ks(
      e,
      n,
      l,
      u
    )), Zs(t), r;
  }
  function Zs(t) {
    C.H = Ei;
    var e = Dt !== null && Dt.next !== null;
    if (Bn = 0, Zt = Dt = dt = null, pi = !1, Fa = 0, Jl = null, e) throw Error(c(300));
    t === null || Pt || (t = t.dependencies, t !== null && oi(t) && (Pt = !0));
  }
  function Ks(t, e, n, l) {
    dt = t;
    var u = 0;
    do {
      if ($l && (Jl = null), Fa = 0, $l = !1, 25 <= u) throw Error(c(301));
      if (u += 1, Zt = Dt = null, t.updateQueue != null) {
        var r = t.updateQueue;
        r.lastEffect = null, r.events = null, r.stores = null, r.memoCache != null && (r.memoCache.index = 0);
      }
      C.H = Sy, r = e(n, l);
    } while ($l);
    return r;
  }
  function my() {
    var t = C.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? Pa(e) : e, t = t.useState()[0], (Dt !== null ? Dt.memoizedState : null) !== t && (dt.flags |= 1024), e;
  }
  function Cc() {
    var t = yi !== 0;
    return yi = 0, t;
  }
  function Oc(t, e, n) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~n;
  }
  function Rc(t) {
    if (pi) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      pi = !1;
    }
    Bn = 0, Zt = Dt = dt = null, $l = !1, Fa = yi = 0, Jl = null;
  }
  function he() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Zt === null ? dt.memoizedState = Zt = t : Zt = Zt.next = t, Zt;
  }
  function Kt() {
    if (Dt === null) {
      var t = dt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Dt.next;
    var e = Zt === null ? dt.memoizedState : Zt.next;
    if (e !== null)
      Zt = e, Dt = t;
    else {
      if (t === null)
        throw dt.alternate === null ? Error(c(467)) : Error(c(310));
      Dt = t, t = {
        memoizedState: Dt.memoizedState,
        baseState: Dt.baseState,
        baseQueue: Dt.baseQueue,
        queue: Dt.queue,
        next: null
      }, Zt === null ? dt.memoizedState = Zt = t : Zt = Zt.next = t;
    }
    return Zt;
  }
  function _c() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Pa(t) {
    var e = Fa;
    return Fa += 1, Jl === null && (Jl = []), t = Gs(Jl, t, e), e = dt, (Zt === null ? e.memoizedState : Zt.next) === null && (e = e.alternate, C.H = e === null || e.memoizedState === null ? _d : Md), t;
  }
  function gi(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Pa(t);
      if (t.$$typeof === Q) return re(t);
    }
    throw Error(c(438, String(t)));
  }
  function Mc(t) {
    var e = null, n = dt.updateQueue;
    if (n !== null && (e = n.memoCache), e == null) {
      var l = dt.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (e = {
        data: l.data.map(function(u) {
          return u.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = { data: [], index: 0 }), n === null && (n = _c(), dt.updateQueue = n), n.memoCache = e, n = e.data[e.index], n === void 0)
      for (n = e.data[e.index] = Array(t), l = 0; l < t; l++)
        n[l] = gt;
    return e.index++, n;
  }
  function pn(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function vi(t) {
    var e = Kt();
    return Dc(e, Dt, t);
  }
  function Dc(t, e, n) {
    var l = t.queue;
    if (l === null) throw Error(c(311));
    l.lastRenderedReducer = n;
    var u = t.baseQueue, r = l.pending;
    if (r !== null) {
      if (u !== null) {
        var s = u.next;
        u.next = r.next, r.next = s;
      }
      e.baseQueue = u = r, l.pending = null;
    }
    if (r = t.baseState, u === null) t.memoizedState = r;
    else {
      e = u.next;
      var h = s = null, v = null, R = e, B = !1;
      do {
        var Y = R.lane & -536870913;
        if (Y !== R.lane ? (vt & Y) === Y : (Bn & Y) === Y) {
          var _ = R.revertLane;
          if (_ === 0)
            v !== null && (v = v.next = {
              lane: 0,
              revertLane: 0,
              action: R.action,
              hasEagerState: R.hasEagerState,
              eagerState: R.eagerState,
              next: null
            }), Y === Vl && (B = !0);
          else if ((Bn & _) === _) {
            R = R.next, _ === Vl && (B = !0);
            continue;
          } else
            Y = {
              lane: 0,
              revertLane: R.revertLane,
              action: R.action,
              hasEagerState: R.hasEagerState,
              eagerState: R.eagerState,
              next: null
            }, v === null ? (h = v = Y, s = r) : v = v.next = Y, dt.lanes |= _, kn |= _;
          Y = R.action, dl && n(r, Y), r = R.hasEagerState ? R.eagerState : n(r, Y);
        } else
          _ = {
            lane: Y,
            revertLane: R.revertLane,
            action: R.action,
            hasEagerState: R.hasEagerState,
            eagerState: R.eagerState,
            next: null
          }, v === null ? (h = v = _, s = r) : v = v.next = _, dt.lanes |= Y, kn |= Y;
        R = R.next;
      } while (R !== null && R !== e);
      if (v === null ? s = r : v.next = h, !be(r, t.memoizedState) && (Pt = !0, B && (n = Zl, n !== null)))
        throw n;
      t.memoizedState = r, t.baseState = s, t.baseQueue = v, l.lastRenderedState = r;
    }
    return u === null && (l.lanes = 0), [t.memoizedState, l.dispatch];
  }
  function zc(t) {
    var e = Kt(), n = e.queue;
    if (n === null) throw Error(c(311));
    n.lastRenderedReducer = t;
    var l = n.dispatch, u = n.pending, r = e.memoizedState;
    if (u !== null) {
      n.pending = null;
      var s = u = u.next;
      do
        r = t(r, s.action), s = s.next;
      while (s !== u);
      be(r, e.memoizedState) || (Pt = !0), e.memoizedState = r, e.baseQueue === null && (e.baseState = r), n.lastRenderedState = r;
    }
    return [r, l];
  }
  function $s(t, e, n) {
    var l = dt, u = Kt(), r = Tt;
    if (r) {
      if (n === void 0) throw Error(c(407));
      n = n();
    } else n = e();
    var s = !be(
      (Dt || u).memoizedState,
      n
    );
    s && (u.memoizedState = n, Pt = !0), u = u.queue;
    var h = Fs.bind(null, l, u, t);
    if (Ia(2048, 8, h, [t]), u.getSnapshot !== e || s || Zt !== null && Zt.memoizedState.tag & 1) {
      if (l.flags |= 2048, Wl(
        9,
        bi(),
        Ws.bind(
          null,
          l,
          u,
          n,
          e
        ),
        null
      ), wt === null) throw Error(c(349));
      r || (Bn & 124) !== 0 || Js(l, e, n);
    }
    return n;
  }
  function Js(t, e, n) {
    t.flags |= 16384, t = { getSnapshot: e, value: n }, e = dt.updateQueue, e === null ? (e = _c(), dt.updateQueue = e, e.stores = [t]) : (n = e.stores, n === null ? e.stores = [t] : n.push(t));
  }
  function Ws(t, e, n, l) {
    e.value = n, e.getSnapshot = l, Ps(e) && Is(t);
  }
  function Fs(t, e, n) {
    return n(function() {
      Ps(e) && Is(t);
    });
  }
  function Ps(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !be(t, n);
    } catch {
      return !0;
    }
  }
  function Is(t) {
    var e = kl(t, 2);
    e !== null && Ce(e, t, 2);
  }
  function Nc(t) {
    var e = he();
    if (typeof t == "function") {
      var n = t;
      if (t = n(), dl) {
        Rn(!0);
        try {
          n();
        } finally {
          Rn(!1);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: pn,
      lastRenderedState: t
    }, e;
  }
  function td(t, e, n, l) {
    return t.baseState = n, Dc(
      t,
      Dt,
      typeof l == "function" ? l : pn
    );
  }
  function py(t, e, n, l, u) {
    if (Ti(t)) throw Error(c(485));
    if (t = e.action, t !== null) {
      var r = {
        payload: u,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(s) {
          r.listeners.push(s);
        }
      };
      C.T !== null ? n(!0) : r.isTransition = !1, l(r), n = e.pending, n === null ? (r.next = e.pending = r, ed(e, r)) : (r.next = n.next, e.pending = n.next = r);
    }
  }
  function ed(t, e) {
    var n = e.action, l = e.payload, u = t.state;
    if (e.isTransition) {
      var r = C.T, s = {};
      C.T = s;
      try {
        var h = n(u, l), v = C.S;
        v !== null && v(s, h), nd(t, e, h);
      } catch (R) {
        Uc(t, e, R);
      } finally {
        C.T = r;
      }
    } else
      try {
        r = n(u, l), nd(t, e, r);
      } catch (R) {
        Uc(t, e, R);
      }
  }
  function nd(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(l) {
        ld(t, e, l);
      },
      function(l) {
        return Uc(t, e, l);
      }
    ) : ld(t, e, n);
  }
  function ld(t, e, n) {
    e.status = "fulfilled", e.value = n, ad(e), t.state = n, e = t.pending, e !== null && (n = e.next, n === e ? t.pending = null : (n = n.next, e.next = n, ed(t, n)));
  }
  function Uc(t, e, n) {
    var l = t.pending;
    if (t.pending = null, l !== null) {
      l = l.next;
      do
        e.status = "rejected", e.reason = n, ad(e), e = e.next;
      while (e !== l);
    }
    t.action = null;
  }
  function ad(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function ud(t, e) {
    return e;
  }
  function id(t, e) {
    if (Tt) {
      var n = wt.formState;
      if (n !== null) {
        t: {
          var l = dt;
          if (Tt) {
            if (jt) {
              e: {
                for (var u = jt, r = We; u.nodeType !== 8; ) {
                  if (!r) {
                    u = null;
                    break e;
                  }
                  if (u = Ve(
                    u.nextSibling
                  ), u === null) {
                    u = null;
                    break e;
                  }
                }
                r = u.data, u = r === "F!" || r === "F" ? u : null;
              }
              if (u) {
                jt = Ve(
                  u.nextSibling
                ), l = u.data === "F!";
                break t;
              }
            }
            cl(l);
          }
          l = !1;
        }
        l && (e = n[0]);
      }
    }
    return n = he(), n.memoizedState = n.baseState = e, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ud,
      lastRenderedState: e
    }, n.queue = l, n = Cd.bind(
      null,
      dt,
      l
    ), l.dispatch = n, l = Nc(!1), r = Yc.bind(
      null,
      dt,
      !1,
      l.queue
    ), l = he(), u = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, l.queue = u, n = py.bind(
      null,
      dt,
      u,
      r,
      n
    ), u.dispatch = n, l.memoizedState = t, [e, n, !1];
  }
  function rd(t) {
    var e = Kt();
    return cd(e, Dt, t);
  }
  function cd(t, e, n) {
    if (e = Dc(
      t,
      e,
      ud
    )[0], t = vi(pn)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var l = Pa(e);
      } catch (s) {
        throw s === Za ? di : s;
      }
    else l = e;
    e = Kt();
    var u = e.queue, r = u.dispatch;
    return n !== e.memoizedState && (dt.flags |= 2048, Wl(
      9,
      bi(),
      yy.bind(null, u, n),
      null
    )), [l, r, t];
  }
  function yy(t, e) {
    t.action = e;
  }
  function od(t) {
    var e = Kt(), n = Dt;
    if (n !== null)
      return cd(e, n, t);
    Kt(), e = e.memoizedState, n = Kt();
    var l = n.queue.dispatch;
    return n.memoizedState = t, [e, l, !1];
  }
  function Wl(t, e, n, l) {
    return t = { tag: t, create: n, deps: l, inst: e, next: null }, e = dt.updateQueue, e === null && (e = _c(), dt.updateQueue = e), n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (l = n.next, n.next = t, t.next = l, e.lastEffect = t), t;
  }
  function bi() {
    return { destroy: void 0, resource: void 0 };
  }
  function fd() {
    return Kt().memoizedState;
  }
  function Si(t, e, n, l) {
    var u = he();
    l = l === void 0 ? null : l, dt.flags |= t, u.memoizedState = Wl(
      1 | e,
      bi(),
      n,
      l
    );
  }
  function Ia(t, e, n, l) {
    var u = Kt();
    l = l === void 0 ? null : l;
    var r = u.memoizedState.inst;
    Dt !== null && l !== null && xc(l, Dt.memoizedState.deps) ? u.memoizedState = Wl(e, r, n, l) : (dt.flags |= t, u.memoizedState = Wl(
      1 | e,
      r,
      n,
      l
    ));
  }
  function sd(t, e) {
    Si(8390656, 8, t, e);
  }
  function dd(t, e) {
    Ia(2048, 8, t, e);
  }
  function hd(t, e) {
    return Ia(4, 2, t, e);
  }
  function md(t, e) {
    return Ia(4, 4, t, e);
  }
  function pd(t, e) {
    if (typeof e == "function") {
      t = t();
      var n = e(t);
      return function() {
        typeof n == "function" ? n() : e(null);
      };
    }
    if (e != null)
      return t = t(), e.current = t, function() {
        e.current = null;
      };
  }
  function yd(t, e, n) {
    n = n != null ? n.concat([t]) : null, Ia(4, 4, pd.bind(null, e, t), n);
  }
  function Bc() {
  }
  function gd(t, e) {
    var n = Kt();
    e = e === void 0 ? null : e;
    var l = n.memoizedState;
    return e !== null && xc(e, l[1]) ? l[0] : (n.memoizedState = [t, e], t);
  }
  function vd(t, e) {
    var n = Kt();
    e = e === void 0 ? null : e;
    var l = n.memoizedState;
    if (e !== null && xc(e, l[1]))
      return l[0];
    if (l = t(), dl) {
      Rn(!0);
      try {
        t();
      } finally {
        Rn(!1);
      }
    }
    return n.memoizedState = [l, e], l;
  }
  function wc(t, e, n) {
    return n === void 0 || (Bn & 1073741824) !== 0 ? t.memoizedState = e : (t.memoizedState = n, t = Th(), dt.lanes |= t, kn |= t, n);
  }
  function bd(t, e, n, l) {
    return be(n, e) ? n : Kl.current !== null ? (t = wc(t, n, l), be(t, e) || (Pt = !0), t) : (Bn & 42) === 0 ? (Pt = !0, t.memoizedState = n) : (t = Th(), dt.lanes |= t, kn |= t, e);
  }
  function Sd(t, e, n, l, u) {
    var r = X.p;
    X.p = r !== 0 && 8 > r ? r : 8;
    var s = C.T, h = {};
    C.T = h, Yc(t, !1, e, n);
    try {
      var v = u(), R = C.S;
      if (R !== null && R(h, v), v !== null && typeof v == "object" && typeof v.then == "function") {
        var B = dy(
          v,
          l
        );
        tu(
          t,
          e,
          B,
          Ae(t)
        );
      } else
        tu(
          t,
          e,
          l,
          Ae(t)
        );
    } catch (Y) {
      tu(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: Y },
        Ae()
      );
    } finally {
      X.p = r, C.T = s;
    }
  }
  function gy() {
  }
  function Hc(t, e, n, l) {
    if (t.tag !== 5) throw Error(c(476));
    var u = Td(t).queue;
    Sd(
      t,
      u,
      e,
      et,
      n === null ? gy : function() {
        return Ed(t), n(l);
      }
    );
  }
  function Td(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: et,
      baseState: et,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: pn,
        lastRenderedState: et
      },
      next: null
    };
    var n = {};
    return e.next = {
      memoizedState: n,
      baseState: n,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: pn,
        lastRenderedState: n
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function Ed(t) {
    var e = Td(t).next.queue;
    tu(t, e, {}, Ae());
  }
  function qc() {
    return re(vu);
  }
  function xd() {
    return Kt().memoizedState;
  }
  function Ad() {
    return Kt().memoizedState;
  }
  function vy(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = Ae();
          t = Nn(n);
          var l = Un(e, t, n);
          l !== null && (Ce(l, e, n), $a(l, e, n)), e = { cache: hc() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function by(t, e, n) {
    var l = Ae();
    n = {
      lane: l,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ti(t) ? Od(e, n) : (n = lc(t, e, n, l), n !== null && (Ce(n, t, l), Rd(n, e, l)));
  }
  function Cd(t, e, n) {
    var l = Ae();
    tu(t, e, n, l);
  }
  function tu(t, e, n, l) {
    var u = {
      lane: l,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Ti(t)) Od(e, u);
    else {
      var r = t.alternate;
      if (t.lanes === 0 && (r === null || r.lanes === 0) && (r = e.lastRenderedReducer, r !== null))
        try {
          var s = e.lastRenderedState, h = r(s, n);
          if (u.hasEagerState = !0, u.eagerState = h, be(h, s))
            return ai(t, e, u, 0), wt === null && li(), !1;
        } catch {
        } finally {
        }
      if (n = lc(t, e, u, l), n !== null)
        return Ce(n, t, l), Rd(n, e, l), !0;
    }
    return !1;
  }
  function Yc(t, e, n, l) {
    if (l = {
      lane: 2,
      revertLane: go(),
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ti(t)) {
      if (e) throw Error(c(479));
    } else
      e = lc(
        t,
        n,
        l,
        2
      ), e !== null && Ce(e, t, 2);
  }
  function Ti(t) {
    var e = t.alternate;
    return t === dt || e !== null && e === dt;
  }
  function Od(t, e) {
    $l = pi = !0;
    var n = t.pending;
    n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e;
  }
  function Rd(t, e, n) {
    if ((n & 4194048) !== 0) {
      var l = e.lanes;
      l &= t.pendingLanes, n |= l, e.lanes = n, wf(t, n);
    }
  }
  var Ei = {
    readContext: re,
    use: gi,
    useCallback: Xt,
    useContext: Xt,
    useEffect: Xt,
    useImperativeHandle: Xt,
    useLayoutEffect: Xt,
    useInsertionEffect: Xt,
    useMemo: Xt,
    useReducer: Xt,
    useRef: Xt,
    useState: Xt,
    useDebugValue: Xt,
    useDeferredValue: Xt,
    useTransition: Xt,
    useSyncExternalStore: Xt,
    useId: Xt,
    useHostTransitionStatus: Xt,
    useFormState: Xt,
    useActionState: Xt,
    useOptimistic: Xt,
    useMemoCache: Xt,
    useCacheRefresh: Xt
  }, _d = {
    readContext: re,
    use: gi,
    useCallback: function(t, e) {
      return he().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: re,
    useEffect: sd,
    useImperativeHandle: function(t, e, n) {
      n = n != null ? n.concat([t]) : null, Si(
        4194308,
        4,
        pd.bind(null, e, t),
        n
      );
    },
    useLayoutEffect: function(t, e) {
      return Si(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      Si(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var n = he();
      e = e === void 0 ? null : e;
      var l = t();
      if (dl) {
        Rn(!0);
        try {
          t();
        } finally {
          Rn(!1);
        }
      }
      return n.memoizedState = [l, e], l;
    },
    useReducer: function(t, e, n) {
      var l = he();
      if (n !== void 0) {
        var u = n(e);
        if (dl) {
          Rn(!0);
          try {
            n(e);
          } finally {
            Rn(!1);
          }
        }
      } else u = e;
      return l.memoizedState = l.baseState = u, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: u
      }, l.queue = t, t = t.dispatch = by.bind(
        null,
        dt,
        t
      ), [l.memoizedState, t];
    },
    useRef: function(t) {
      var e = he();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = Nc(t);
      var e = t.queue, n = Cd.bind(null, dt, e);
      return e.dispatch = n, [t.memoizedState, n];
    },
    useDebugValue: Bc,
    useDeferredValue: function(t, e) {
      var n = he();
      return wc(n, t, e);
    },
    useTransition: function() {
      var t = Nc(!1);
      return t = Sd.bind(
        null,
        dt,
        t.queue,
        !0,
        !1
      ), he().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, n) {
      var l = dt, u = he();
      if (Tt) {
        if (n === void 0)
          throw Error(c(407));
        n = n();
      } else {
        if (n = e(), wt === null)
          throw Error(c(349));
        (vt & 124) !== 0 || Js(l, e, n);
      }
      u.memoizedState = n;
      var r = { value: n, getSnapshot: e };
      return u.queue = r, sd(Fs.bind(null, l, r, t), [
        t
      ]), l.flags |= 2048, Wl(
        9,
        bi(),
        Ws.bind(
          null,
          l,
          r,
          n,
          e
        ),
        null
      ), n;
    },
    useId: function() {
      var t = he(), e = wt.identifierPrefix;
      if (Tt) {
        var n = dn, l = sn;
        n = (l & ~(1 << 32 - ve(l) - 1)).toString(32) + n, e = "«" + e + "R" + n, n = yi++, 0 < n && (e += "H" + n.toString(32)), e += "»";
      } else
        n = hy++, e = "«" + e + "r" + n.toString(32) + "»";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: qc,
    useFormState: id,
    useActionState: id,
    useOptimistic: function(t) {
      var e = he();
      e.memoizedState = e.baseState = t;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = n, e = Yc.bind(
        null,
        dt,
        !0,
        n
      ), n.dispatch = e, [t, e];
    },
    useMemoCache: Mc,
    useCacheRefresh: function() {
      return he().memoizedState = vy.bind(
        null,
        dt
      );
    }
  }, Md = {
    readContext: re,
    use: gi,
    useCallback: gd,
    useContext: re,
    useEffect: dd,
    useImperativeHandle: yd,
    useInsertionEffect: hd,
    useLayoutEffect: md,
    useMemo: vd,
    useReducer: vi,
    useRef: fd,
    useState: function() {
      return vi(pn);
    },
    useDebugValue: Bc,
    useDeferredValue: function(t, e) {
      var n = Kt();
      return bd(
        n,
        Dt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = vi(pn)[0], e = Kt().memoizedState;
      return [
        typeof t == "boolean" ? t : Pa(t),
        e
      ];
    },
    useSyncExternalStore: $s,
    useId: xd,
    useHostTransitionStatus: qc,
    useFormState: rd,
    useActionState: rd,
    useOptimistic: function(t, e) {
      var n = Kt();
      return td(n, Dt, t, e);
    },
    useMemoCache: Mc,
    useCacheRefresh: Ad
  }, Sy = {
    readContext: re,
    use: gi,
    useCallback: gd,
    useContext: re,
    useEffect: dd,
    useImperativeHandle: yd,
    useInsertionEffect: hd,
    useLayoutEffect: md,
    useMemo: vd,
    useReducer: zc,
    useRef: fd,
    useState: function() {
      return zc(pn);
    },
    useDebugValue: Bc,
    useDeferredValue: function(t, e) {
      var n = Kt();
      return Dt === null ? wc(n, t, e) : bd(
        n,
        Dt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = zc(pn)[0], e = Kt().memoizedState;
      return [
        typeof t == "boolean" ? t : Pa(t),
        e
      ];
    },
    useSyncExternalStore: $s,
    useId: xd,
    useHostTransitionStatus: qc,
    useFormState: od,
    useActionState: od,
    useOptimistic: function(t, e) {
      var n = Kt();
      return Dt !== null ? td(n, Dt, t, e) : (n.baseState = t, [t, n.queue.dispatch]);
    },
    useMemoCache: Mc,
    useCacheRefresh: Ad
  }, Fl = null, eu = 0;
  function xi(t) {
    var e = eu;
    return eu += 1, Fl === null && (Fl = []), Gs(Fl, t, e);
  }
  function nu(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function Ai(t, e) {
    throw e.$$typeof === D ? Error(c(525)) : (t = Object.prototype.toString.call(e), Error(
      c(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function Dd(t) {
    var e = t._init;
    return e(t._payload);
  }
  function zd(t) {
    function e(E, T) {
      if (t) {
        var O = E.deletions;
        O === null ? (E.deletions = [T], E.flags |= 16) : O.push(T);
      }
    }
    function n(E, T) {
      if (!t) return null;
      for (; T !== null; )
        e(E, T), T = T.sibling;
      return null;
    }
    function l(E) {
      for (var T = /* @__PURE__ */ new Map(); E !== null; )
        E.key !== null ? T.set(E.key, E) : T.set(E.index, E), E = E.sibling;
      return T;
    }
    function u(E, T) {
      return E = fn(E, T), E.index = 0, E.sibling = null, E;
    }
    function r(E, T, O) {
      return E.index = O, t ? (O = E.alternate, O !== null ? (O = O.index, O < T ? (E.flags |= 67108866, T) : O) : (E.flags |= 67108866, T)) : (E.flags |= 1048576, T);
    }
    function s(E) {
      return t && E.alternate === null && (E.flags |= 67108866), E;
    }
    function h(E, T, O, H) {
      return T === null || T.tag !== 6 ? (T = uc(O, E.mode, H), T.return = E, T) : (T = u(T, O), T.return = E, T);
    }
    function v(E, T, O, H) {
      var tt = O.type;
      return tt === z ? B(
        E,
        T,
        O.props.children,
        H,
        O.key
      ) : T !== null && (T.elementType === tt || typeof tt == "object" && tt !== null && tt.$$typeof === ot && Dd(tt) === T.type) ? (T = u(T, O.props), nu(T, O), T.return = E, T) : (T = ii(
        O.type,
        O.key,
        O.props,
        null,
        E.mode,
        H
      ), nu(T, O), T.return = E, T);
    }
    function R(E, T, O, H) {
      return T === null || T.tag !== 4 || T.stateNode.containerInfo !== O.containerInfo || T.stateNode.implementation !== O.implementation ? (T = ic(O, E.mode, H), T.return = E, T) : (T = u(T, O.children || []), T.return = E, T);
    }
    function B(E, T, O, H, tt) {
      return T === null || T.tag !== 7 ? (T = al(
        O,
        E.mode,
        H,
        tt
      ), T.return = E, T) : (T = u(T, O), T.return = E, T);
    }
    function Y(E, T, O) {
      if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint")
        return T = uc(
          "" + T,
          E.mode,
          O
        ), T.return = E, T;
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case N:
            return O = ii(
              T.type,
              T.key,
              T.props,
              null,
              E.mode,
              O
            ), nu(O, T), O.return = E, O;
          case q:
            return T = ic(
              T,
              E.mode,
              O
            ), T.return = E, T;
          case ot:
            var H = T._init;
            return T = H(T._payload), Y(E, T, O);
        }
        if (V(T) || y(T))
          return T = al(
            T,
            E.mode,
            O,
            null
          ), T.return = E, T;
        if (typeof T.then == "function")
          return Y(E, xi(T), O);
        if (T.$$typeof === Q)
          return Y(
            E,
            fi(E, T),
            O
          );
        Ai(E, T);
      }
      return null;
    }
    function _(E, T, O, H) {
      var tt = T !== null ? T.key : null;
      if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint")
        return tt !== null ? null : h(E, T, "" + O, H);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case N:
            return O.key === tt ? v(E, T, O, H) : null;
          case q:
            return O.key === tt ? R(E, T, O, H) : null;
          case ot:
            return tt = O._init, O = tt(O._payload), _(E, T, O, H);
        }
        if (V(O) || y(O))
          return tt !== null ? null : B(E, T, O, H, null);
        if (typeof O.then == "function")
          return _(
            E,
            T,
            xi(O),
            H
          );
        if (O.$$typeof === Q)
          return _(
            E,
            T,
            fi(E, O),
            H
          );
        Ai(E, O);
      }
      return null;
    }
    function M(E, T, O, H, tt) {
      if (typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint")
        return E = E.get(O) || null, h(T, E, "" + H, tt);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case N:
            return E = E.get(
              H.key === null ? O : H.key
            ) || null, v(T, E, H, tt);
          case q:
            return E = E.get(
              H.key === null ? O : H.key
            ) || null, R(T, E, H, tt);
          case ot:
            var ht = H._init;
            return H = ht(H._payload), M(
              E,
              T,
              O,
              H,
              tt
            );
        }
        if (V(H) || y(H))
          return E = E.get(O) || null, B(T, E, H, tt, null);
        if (typeof H.then == "function")
          return M(
            E,
            T,
            O,
            xi(H),
            tt
          );
        if (H.$$typeof === Q)
          return M(
            E,
            T,
            O,
            fi(T, H),
            tt
          );
        Ai(T, H);
      }
      return null;
    }
    function ct(E, T, O, H) {
      for (var tt = null, ht = null, lt = T, ut = T = 0, te = null; lt !== null && ut < O.length; ut++) {
        lt.index > ut ? (te = lt, lt = null) : te = lt.sibling;
        var bt = _(
          E,
          lt,
          O[ut],
          H
        );
        if (bt === null) {
          lt === null && (lt = te);
          break;
        }
        t && lt && bt.alternate === null && e(E, lt), T = r(bt, T, ut), ht === null ? tt = bt : ht.sibling = bt, ht = bt, lt = te;
      }
      if (ut === O.length)
        return n(E, lt), Tt && il(E, ut), tt;
      if (lt === null) {
        for (; ut < O.length; ut++)
          lt = Y(E, O[ut], H), lt !== null && (T = r(
            lt,
            T,
            ut
          ), ht === null ? tt = lt : ht.sibling = lt, ht = lt);
        return Tt && il(E, ut), tt;
      }
      for (lt = l(lt); ut < O.length; ut++)
        te = M(
          lt,
          E,
          ut,
          O[ut],
          H
        ), te !== null && (t && te.alternate !== null && lt.delete(
          te.key === null ? ut : te.key
        ), T = r(
          te,
          T,
          ut
        ), ht === null ? tt = te : ht.sibling = te, ht = te);
      return t && lt.forEach(function(Wn) {
        return e(E, Wn);
      }), Tt && il(E, ut), tt;
    }
    function at(E, T, O, H) {
      if (O == null) throw Error(c(151));
      for (var tt = null, ht = null, lt = T, ut = T = 0, te = null, bt = O.next(); lt !== null && !bt.done; ut++, bt = O.next()) {
        lt.index > ut ? (te = lt, lt = null) : te = lt.sibling;
        var Wn = _(E, lt, bt.value, H);
        if (Wn === null) {
          lt === null && (lt = te);
          break;
        }
        t && lt && Wn.alternate === null && e(E, lt), T = r(Wn, T, ut), ht === null ? tt = Wn : ht.sibling = Wn, ht = Wn, lt = te;
      }
      if (bt.done)
        return n(E, lt), Tt && il(E, ut), tt;
      if (lt === null) {
        for (; !bt.done; ut++, bt = O.next())
          bt = Y(E, bt.value, H), bt !== null && (T = r(bt, T, ut), ht === null ? tt = bt : ht.sibling = bt, ht = bt);
        return Tt && il(E, ut), tt;
      }
      for (lt = l(lt); !bt.done; ut++, bt = O.next())
        bt = M(lt, E, ut, bt.value, H), bt !== null && (t && bt.alternate !== null && lt.delete(bt.key === null ? ut : bt.key), T = r(bt, T, ut), ht === null ? tt = bt : ht.sibling = bt, ht = bt);
      return t && lt.forEach(function(Tg) {
        return e(E, Tg);
      }), Tt && il(E, ut), tt;
    }
    function Nt(E, T, O, H) {
      if (typeof O == "object" && O !== null && O.type === z && O.key === null && (O = O.props.children), typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case N:
            t: {
              for (var tt = O.key; T !== null; ) {
                if (T.key === tt) {
                  if (tt = O.type, tt === z) {
                    if (T.tag === 7) {
                      n(
                        E,
                        T.sibling
                      ), H = u(
                        T,
                        O.props.children
                      ), H.return = E, E = H;
                      break t;
                    }
                  } else if (T.elementType === tt || typeof tt == "object" && tt !== null && tt.$$typeof === ot && Dd(tt) === T.type) {
                    n(
                      E,
                      T.sibling
                    ), H = u(T, O.props), nu(H, O), H.return = E, E = H;
                    break t;
                  }
                  n(E, T);
                  break;
                } else e(E, T);
                T = T.sibling;
              }
              O.type === z ? (H = al(
                O.props.children,
                E.mode,
                H,
                O.key
              ), H.return = E, E = H) : (H = ii(
                O.type,
                O.key,
                O.props,
                null,
                E.mode,
                H
              ), nu(H, O), H.return = E, E = H);
            }
            return s(E);
          case q:
            t: {
              for (tt = O.key; T !== null; ) {
                if (T.key === tt)
                  if (T.tag === 4 && T.stateNode.containerInfo === O.containerInfo && T.stateNode.implementation === O.implementation) {
                    n(
                      E,
                      T.sibling
                    ), H = u(T, O.children || []), H.return = E, E = H;
                    break t;
                  } else {
                    n(E, T);
                    break;
                  }
                else e(E, T);
                T = T.sibling;
              }
              H = ic(O, E.mode, H), H.return = E, E = H;
            }
            return s(E);
          case ot:
            return tt = O._init, O = tt(O._payload), Nt(
              E,
              T,
              O,
              H
            );
        }
        if (V(O))
          return ct(
            E,
            T,
            O,
            H
          );
        if (y(O)) {
          if (tt = y(O), typeof tt != "function") throw Error(c(150));
          return O = tt.call(O), at(
            E,
            T,
            O,
            H
          );
        }
        if (typeof O.then == "function")
          return Nt(
            E,
            T,
            xi(O),
            H
          );
        if (O.$$typeof === Q)
          return Nt(
            E,
            T,
            fi(E, O),
            H
          );
        Ai(E, O);
      }
      return typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint" ? (O = "" + O, T !== null && T.tag === 6 ? (n(E, T.sibling), H = u(T, O), H.return = E, E = H) : (n(E, T), H = uc(O, E.mode, H), H.return = E, E = H), s(E)) : n(E, T);
    }
    return function(E, T, O, H) {
      try {
        eu = 0;
        var tt = Nt(
          E,
          T,
          O,
          H
        );
        return Fl = null, tt;
      } catch (lt) {
        if (lt === Za || lt === di) throw lt;
        var ht = Se(29, lt, null, E.mode);
        return ht.lanes = H, ht.return = E, ht;
      } finally {
      }
    };
  }
  var Pl = zd(!0), Nd = zd(!1), He = j(null), Fe = null;
  function wn(t) {
    var e = t.alternate;
    W(Wt, Wt.current & 1), W(He, t), Fe === null && (e === null || Kl.current !== null || e.memoizedState !== null) && (Fe = t);
  }
  function Ud(t) {
    if (t.tag === 22) {
      if (W(Wt, Wt.current), W(He, t), Fe === null) {
        var e = t.alternate;
        e !== null && e.memoizedState !== null && (Fe = t);
      }
    } else Hn();
  }
  function Hn() {
    W(Wt, Wt.current), W(He, He.current);
  }
  function yn(t) {
    J(He), Fe === t && (Fe = null), J(Wt);
  }
  var Wt = j(0);
  function Ci(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || Mo(n)))
          return e;
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    return null;
  }
  function jc(t, e, n, l) {
    e = t.memoizedState, n = n(l, e), n = n == null ? e : x({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n);
  }
  var Gc = {
    enqueueSetState: function(t, e, n) {
      t = t._reactInternals;
      var l = Ae(), u = Nn(l);
      u.payload = e, n != null && (u.callback = n), e = Un(t, u, l), e !== null && (Ce(e, t, l), $a(e, t, l));
    },
    enqueueReplaceState: function(t, e, n) {
      t = t._reactInternals;
      var l = Ae(), u = Nn(l);
      u.tag = 1, u.payload = e, n != null && (u.callback = n), e = Un(t, u, l), e !== null && (Ce(e, t, l), $a(e, t, l));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var n = Ae(), l = Nn(n);
      l.tag = 2, e != null && (l.callback = e), e = Un(t, l, n), e !== null && (Ce(e, t, n), $a(e, t, n));
    }
  };
  function Bd(t, e, n, l, u, r, s) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(l, r, s) : e.prototype && e.prototype.isPureReactComponent ? !Ya(n, l) || !Ya(u, r) : !0;
  }
  function wd(t, e, n, l) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, l), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, l), e.state !== t && Gc.enqueueReplaceState(e, e.state, null);
  }
  function hl(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var l in e)
        l !== "ref" && (n[l] = e[l]);
    }
    if (t = t.defaultProps) {
      n === e && (n = x({}, n));
      for (var u in t)
        n[u] === void 0 && (n[u] = t[u]);
    }
    return n;
  }
  var Oi = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  };
  function Hd(t) {
    Oi(t);
  }
  function qd(t) {
    console.error(t);
  }
  function Yd(t) {
    Oi(t);
  }
  function Ri(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function jd(t, e, n) {
    try {
      var l = t.onCaughtError;
      l(n.value, {
        componentStack: n.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null
      });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function kc(t, e, n) {
    return n = Nn(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      Ri(t, e);
    }, n;
  }
  function Gd(t) {
    return t = Nn(t), t.tag = 3, t;
  }
  function kd(t, e, n, l) {
    var u = n.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var r = l.value;
      t.payload = function() {
        return u(r);
      }, t.callback = function() {
        jd(e, n, l);
      };
    }
    var s = n.stateNode;
    s !== null && typeof s.componentDidCatch == "function" && (t.callback = function() {
      jd(e, n, l), typeof u != "function" && (Ln === null ? Ln = /* @__PURE__ */ new Set([this]) : Ln.add(this));
      var h = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: h !== null ? h : ""
      });
    });
  }
  function Ty(t, e, n, l, u) {
    if (n.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (e = n.alternate, e !== null && Xa(
        e,
        n,
        u,
        !0
      ), n = He.current, n !== null) {
        switch (n.tag) {
          case 13:
            return Fe === null ? so() : n.alternate === null && Gt === 0 && (Gt = 3), n.flags &= -257, n.flags |= 65536, n.lanes = u, l === yc ? n.flags |= 16384 : (e = n.updateQueue, e === null ? n.updateQueue = /* @__PURE__ */ new Set([l]) : e.add(l), mo(t, l, u)), !1;
          case 22:
            return n.flags |= 65536, l === yc ? n.flags |= 16384 : (e = n.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, n.updateQueue = e) : (n = e.retryQueue, n === null ? e.retryQueue = /* @__PURE__ */ new Set([l]) : n.add(l)), mo(t, l, u)), !1;
        }
        throw Error(c(435, n.tag));
      }
      return mo(t, l, u), so(), !1;
    }
    if (Tt)
      return e = He.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = u, l !== oc && (t = Error(c(422), { cause: l }), La(Ne(t, n)))) : (l !== oc && (e = Error(c(423), {
        cause: l
      }), La(
        Ne(e, n)
      )), t = t.current.alternate, t.flags |= 65536, u &= -u, t.lanes |= u, l = Ne(l, n), u = kc(
        t.stateNode,
        l,
        u
      ), bc(t, u), Gt !== 4 && (Gt = 2)), !1;
    var r = Error(c(520), { cause: l });
    if (r = Ne(r, n), ou === null ? ou = [r] : ou.push(r), Gt !== 4 && (Gt = 2), e === null) return !0;
    l = Ne(l, n), n = e;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, t = u & -u, n.lanes |= t, t = kc(n.stateNode, l, t), bc(n, t), !1;
        case 1:
          if (e = n.type, r = n.stateNode, (n.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || r !== null && typeof r.componentDidCatch == "function" && (Ln === null || !Ln.has(r))))
            return n.flags |= 65536, u &= -u, n.lanes |= u, u = Gd(u), kd(
              u,
              t,
              n,
              l
            ), bc(n, u), !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Ld = Error(c(461)), Pt = !1;
  function ne(t, e, n, l) {
    e.child = t === null ? Nd(e, null, n, l) : Pl(
      e,
      t.child,
      n,
      l
    );
  }
  function Xd(t, e, n, l, u) {
    n = n.render;
    var r = e.ref;
    if ("ref" in l) {
      var s = {};
      for (var h in l)
        h !== "ref" && (s[h] = l[h]);
    } else s = l;
    return fl(e), l = Ac(
      t,
      e,
      n,
      s,
      r,
      u
    ), h = Cc(), t !== null && !Pt ? (Oc(t, e, u), gn(t, e, u)) : (Tt && h && rc(e), e.flags |= 1, ne(t, e, l, u), e.child);
  }
  function Qd(t, e, n, l, u) {
    if (t === null) {
      var r = n.type;
      return typeof r == "function" && !ac(r) && r.defaultProps === void 0 && n.compare === null ? (e.tag = 15, e.type = r, Vd(
        t,
        e,
        r,
        l,
        u
      )) : (t = ii(
        n.type,
        null,
        l,
        e,
        e.mode,
        u
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (r = t.child, !Jc(t, u)) {
      var s = r.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Ya, n(s, l) && t.ref === e.ref)
        return gn(t, e, u);
    }
    return e.flags |= 1, t = fn(r, l), t.ref = e.ref, t.return = e, e.child = t;
  }
  function Vd(t, e, n, l, u) {
    if (t !== null) {
      var r = t.memoizedProps;
      if (Ya(r, l) && t.ref === e.ref)
        if (Pt = !1, e.pendingProps = l = r, Jc(t, u))
          (t.flags & 131072) !== 0 && (Pt = !0);
        else
          return e.lanes = t.lanes, gn(t, e, u);
    }
    return Lc(
      t,
      e,
      n,
      l,
      u
    );
  }
  function Zd(t, e, n) {
    var l = e.pendingProps, u = l.children, r = t !== null ? t.memoizedState : null;
    if (l.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (l = r !== null ? r.baseLanes | n : n, t !== null) {
          for (u = e.child = t.child, r = 0; u !== null; )
            r = r | u.lanes | u.childLanes, u = u.sibling;
          e.childLanes = r & ~l;
        } else e.childLanes = 0, e.child = null;
        return Kd(
          t,
          e,
          l,
          n
        );
      }
      if ((n & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && si(
          e,
          r !== null ? r.cachePool : null
        ), r !== null ? Vs(e, r) : Tc(), Ud(e);
      else
        return e.lanes = e.childLanes = 536870912, Kd(
          t,
          e,
          r !== null ? r.baseLanes | n : n,
          n
        );
    } else
      r !== null ? (si(e, r.cachePool), Vs(e, r), Hn(), e.memoizedState = null) : (t !== null && si(e, null), Tc(), Hn());
    return ne(t, e, u, n), e.child;
  }
  function Kd(t, e, n, l) {
    var u = pc();
    return u = u === null ? null : { parent: Jt._currentValue, pool: u }, e.memoizedState = {
      baseLanes: n,
      cachePool: u
    }, t !== null && si(e, null), Tc(), Ud(e), t !== null && Xa(t, e, l, !0), null;
  }
  function _i(t, e) {
    var n = e.ref;
    if (n === null)
      t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(c(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function Lc(t, e, n, l, u) {
    return fl(e), n = Ac(
      t,
      e,
      n,
      l,
      void 0,
      u
    ), l = Cc(), t !== null && !Pt ? (Oc(t, e, u), gn(t, e, u)) : (Tt && l && rc(e), e.flags |= 1, ne(t, e, n, u), e.child);
  }
  function $d(t, e, n, l, u, r) {
    return fl(e), e.updateQueue = null, n = Ks(
      e,
      l,
      n,
      u
    ), Zs(t), l = Cc(), t !== null && !Pt ? (Oc(t, e, r), gn(t, e, r)) : (Tt && l && rc(e), e.flags |= 1, ne(t, e, n, r), e.child);
  }
  function Jd(t, e, n, l, u) {
    if (fl(e), e.stateNode === null) {
      var r = Ll, s = n.contextType;
      typeof s == "object" && s !== null && (r = re(s)), r = new n(l, r), e.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Gc, e.stateNode = r, r._reactInternals = e, r = e.stateNode, r.props = l, r.state = e.memoizedState, r.refs = {}, gc(e), s = n.contextType, r.context = typeof s == "object" && s !== null ? re(s) : Ll, r.state = e.memoizedState, s = n.getDerivedStateFromProps, typeof s == "function" && (jc(
        e,
        n,
        s,
        l
      ), r.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (s = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), s !== r.state && Gc.enqueueReplaceState(r, r.state, null), Wa(e, l, r, u), Ja(), r.state = e.memoizedState), typeof r.componentDidMount == "function" && (e.flags |= 4194308), l = !0;
    } else if (t === null) {
      r = e.stateNode;
      var h = e.memoizedProps, v = hl(n, h);
      r.props = v;
      var R = r.context, B = n.contextType;
      s = Ll, typeof B == "object" && B !== null && (s = re(B));
      var Y = n.getDerivedStateFromProps;
      B = typeof Y == "function" || typeof r.getSnapshotBeforeUpdate == "function", h = e.pendingProps !== h, B || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (h || R !== s) && wd(
        e,
        r,
        l,
        s
      ), zn = !1;
      var _ = e.memoizedState;
      r.state = _, Wa(e, l, r, u), Ja(), R = e.memoizedState, h || _ !== R || zn ? (typeof Y == "function" && (jc(
        e,
        n,
        Y,
        l
      ), R = e.memoizedState), (v = zn || Bd(
        e,
        n,
        v,
        l,
        _,
        R,
        s
      )) ? (B || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof r.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = l, e.memoizedState = R), r.props = l, r.state = R, r.context = s, l = v) : (typeof r.componentDidMount == "function" && (e.flags |= 4194308), l = !1);
    } else {
      r = e.stateNode, vc(t, e), s = e.memoizedProps, B = hl(n, s), r.props = B, Y = e.pendingProps, _ = r.context, R = n.contextType, v = Ll, typeof R == "object" && R !== null && (v = re(R)), h = n.getDerivedStateFromProps, (R = typeof h == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (s !== Y || _ !== v) && wd(
        e,
        r,
        l,
        v
      ), zn = !1, _ = e.memoizedState, r.state = _, Wa(e, l, r, u), Ja();
      var M = e.memoizedState;
      s !== Y || _ !== M || zn || t !== null && t.dependencies !== null && oi(t.dependencies) ? (typeof h == "function" && (jc(
        e,
        n,
        h,
        l
      ), M = e.memoizedState), (B = zn || Bd(
        e,
        n,
        B,
        l,
        _,
        M,
        v
      ) || t !== null && t.dependencies !== null && oi(t.dependencies)) ? (R || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(l, M, v), typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(
        l,
        M,
        v
      )), typeof r.componentDidUpdate == "function" && (e.flags |= 4), typeof r.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || s === t.memoizedProps && _ === t.memoizedState || (e.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || s === t.memoizedProps && _ === t.memoizedState || (e.flags |= 1024), e.memoizedProps = l, e.memoizedState = M), r.props = l, r.state = M, r.context = v, l = B) : (typeof r.componentDidUpdate != "function" || s === t.memoizedProps && _ === t.memoizedState || (e.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || s === t.memoizedProps && _ === t.memoizedState || (e.flags |= 1024), l = !1);
    }
    return r = l, _i(t, e), l = (e.flags & 128) !== 0, r || l ? (r = e.stateNode, n = l && typeof n.getDerivedStateFromError != "function" ? null : r.render(), e.flags |= 1, t !== null && l ? (e.child = Pl(
      e,
      t.child,
      null,
      u
    ), e.child = Pl(
      e,
      null,
      n,
      u
    )) : ne(t, e, n, u), e.memoizedState = r.state, t = e.child) : t = gn(
      t,
      e,
      u
    ), t;
  }
  function Wd(t, e, n, l) {
    return ka(), e.flags |= 256, ne(t, e, n, l), e.child;
  }
  var Xc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Qc(t) {
    return { baseLanes: t, cachePool: qs() };
  }
  function Vc(t, e, n) {
    return t = t !== null ? t.childLanes & ~n : 0, e && (t |= qe), t;
  }
  function Fd(t, e, n) {
    var l = e.pendingProps, u = !1, r = (e.flags & 128) !== 0, s;
    if ((s = r) || (s = t !== null && t.memoizedState === null ? !1 : (Wt.current & 2) !== 0), s && (u = !0, e.flags &= -129), s = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (Tt) {
        if (u ? wn(e) : Hn(), Tt) {
          var h = jt, v;
          if (v = h) {
            t: {
              for (v = h, h = We; v.nodeType !== 8; ) {
                if (!h) {
                  h = null;
                  break t;
                }
                if (v = Ve(
                  v.nextSibling
                ), v === null) {
                  h = null;
                  break t;
                }
              }
              h = v;
            }
            h !== null ? (e.memoizedState = {
              dehydrated: h,
              treeContext: ul !== null ? { id: sn, overflow: dn } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, v = Se(
              18,
              null,
              null,
              0
            ), v.stateNode = h, v.return = e, e.child = v, fe = e, jt = null, v = !0) : v = !1;
          }
          v || cl(e);
        }
        if (h = e.memoizedState, h !== null && (h = h.dehydrated, h !== null))
          return Mo(h) ? e.lanes = 32 : e.lanes = 536870912, null;
        yn(e);
      }
      return h = l.children, l = l.fallback, u ? (Hn(), u = e.mode, h = Mi(
        { mode: "hidden", children: h },
        u
      ), l = al(
        l,
        u,
        n,
        null
      ), h.return = e, l.return = e, h.sibling = l, e.child = h, u = e.child, u.memoizedState = Qc(n), u.childLanes = Vc(
        t,
        s,
        n
      ), e.memoizedState = Xc, l) : (wn(e), Zc(e, h));
    }
    if (v = t.memoizedState, v !== null && (h = v.dehydrated, h !== null)) {
      if (r)
        e.flags & 256 ? (wn(e), e.flags &= -257, e = Kc(
          t,
          e,
          n
        )) : e.memoizedState !== null ? (Hn(), e.child = t.child, e.flags |= 128, e = null) : (Hn(), u = l.fallback, h = e.mode, l = Mi(
          { mode: "visible", children: l.children },
          h
        ), u = al(
          u,
          h,
          n,
          null
        ), u.flags |= 2, l.return = e, u.return = e, l.sibling = u, e.child = l, Pl(
          e,
          t.child,
          null,
          n
        ), l = e.child, l.memoizedState = Qc(n), l.childLanes = Vc(
          t,
          s,
          n
        ), e.memoizedState = Xc, e = u);
      else if (wn(e), Mo(h)) {
        if (s = h.nextSibling && h.nextSibling.dataset, s) var R = s.dgst;
        s = R, l = Error(c(419)), l.stack = "", l.digest = s, La({ value: l, source: null, stack: null }), e = Kc(
          t,
          e,
          n
        );
      } else if (Pt || Xa(t, e, n, !1), s = (n & t.childLanes) !== 0, Pt || s) {
        if (s = wt, s !== null && (l = n & -n, l = (l & 42) !== 0 ? 1 : Mr(l), l = (l & (s.suspendedLanes | n)) !== 0 ? 0 : l, l !== 0 && l !== v.retryLane))
          throw v.retryLane = l, kl(t, l), Ce(s, t, l), Ld;
        h.data === "$?" || so(), e = Kc(
          t,
          e,
          n
        );
      } else
        h.data === "$?" ? (e.flags |= 192, e.child = t.child, e = null) : (t = v.treeContext, jt = Ve(
          h.nextSibling
        ), fe = e, Tt = !0, rl = null, We = !1, t !== null && (Be[we++] = sn, Be[we++] = dn, Be[we++] = ul, sn = t.id, dn = t.overflow, ul = e), e = Zc(
          e,
          l.children
        ), e.flags |= 4096);
      return e;
    }
    return u ? (Hn(), u = l.fallback, h = e.mode, v = t.child, R = v.sibling, l = fn(v, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = v.subtreeFlags & 65011712, R !== null ? u = fn(R, u) : (u = al(
      u,
      h,
      n,
      null
    ), u.flags |= 2), u.return = e, l.return = e, l.sibling = u, e.child = l, l = u, u = e.child, h = t.child.memoizedState, h === null ? h = Qc(n) : (v = h.cachePool, v !== null ? (R = Jt._currentValue, v = v.parent !== R ? { parent: R, pool: R } : v) : v = qs(), h = {
      baseLanes: h.baseLanes | n,
      cachePool: v
    }), u.memoizedState = h, u.childLanes = Vc(
      t,
      s,
      n
    ), e.memoizedState = Xc, l) : (wn(e), n = t.child, t = n.sibling, n = fn(n, {
      mode: "visible",
      children: l.children
    }), n.return = e, n.sibling = null, t !== null && (s = e.deletions, s === null ? (e.deletions = [t], e.flags |= 16) : s.push(t)), e.child = n, e.memoizedState = null, n);
  }
  function Zc(t, e) {
    return e = Mi(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function Mi(t, e) {
    return t = Se(22, t, null, e), t.lanes = 0, t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, t;
  }
  function Kc(t, e, n) {
    return Pl(e, t.child, null, n), t = Zc(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function Pd(t, e, n) {
    t.lanes |= e;
    var l = t.alternate;
    l !== null && (l.lanes |= e), sc(t.return, e, n);
  }
  function $c(t, e, n, l, u) {
    var r = t.memoizedState;
    r === null ? t.memoizedState = {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: l,
      tail: n,
      tailMode: u
    } : (r.isBackwards = e, r.rendering = null, r.renderingStartTime = 0, r.last = l, r.tail = n, r.tailMode = u);
  }
  function Id(t, e, n) {
    var l = e.pendingProps, u = l.revealOrder, r = l.tail;
    if (ne(t, e, l.children, n), l = Wt.current, (l & 2) !== 0)
      l = l & 1 | 2, e.flags |= 128;
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = e.child; t !== null; ) {
          if (t.tag === 13)
            t.memoizedState !== null && Pd(t, n, e);
          else if (t.tag === 19)
            Pd(t, n, e);
          else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue;
          }
          if (t === e) break t;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
              break t;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
      l &= 1;
    }
    switch (W(Wt, l), u) {
      case "forwards":
        for (n = e.child, u = null; n !== null; )
          t = n.alternate, t !== null && Ci(t) === null && (u = n), n = n.sibling;
        n = u, n === null ? (u = e.child, e.child = null) : (u = n.sibling, n.sibling = null), $c(
          e,
          !1,
          u,
          n,
          r
        );
        break;
      case "backwards":
        for (n = null, u = e.child, e.child = null; u !== null; ) {
          if (t = u.alternate, t !== null && Ci(t) === null) {
            e.child = u;
            break;
          }
          t = u.sibling, u.sibling = n, n = u, u = t;
        }
        $c(
          e,
          !0,
          n,
          null,
          r
        );
        break;
      case "together":
        $c(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function gn(t, e, n) {
    if (t !== null && (e.dependencies = t.dependencies), kn |= e.lanes, (n & e.childLanes) === 0)
      if (t !== null) {
        if (Xa(
          t,
          e,
          n,
          !1
        ), (n & e.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && e.child !== t.child)
      throw Error(c(153));
    if (e.child !== null) {
      for (t = e.child, n = fn(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null; )
        t = t.sibling, n = n.sibling = fn(t, t.pendingProps), n.return = e;
      n.sibling = null;
    }
    return e.child;
  }
  function Jc(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && oi(t)));
  }
  function Ey(t, e, n) {
    switch (e.tag) {
      case 3:
        Mt(e, e.stateNode.containerInfo), Dn(e, Jt, t.memoizedState.cache), ka();
        break;
      case 27:
      case 5:
        Le(e);
        break;
      case 4:
        Mt(e, e.stateNode.containerInfo);
        break;
      case 10:
        Dn(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 13:
        var l = e.memoizedState;
        if (l !== null)
          return l.dehydrated !== null ? (wn(e), e.flags |= 128, null) : (n & e.child.childLanes) !== 0 ? Fd(t, e, n) : (wn(e), t = gn(
            t,
            e,
            n
          ), t !== null ? t.sibling : null);
        wn(e);
        break;
      case 19:
        var u = (t.flags & 128) !== 0;
        if (l = (n & e.childLanes) !== 0, l || (Xa(
          t,
          e,
          n,
          !1
        ), l = (n & e.childLanes) !== 0), u) {
          if (l)
            return Id(
              t,
              e,
              n
            );
          e.flags |= 128;
        }
        if (u = e.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), W(Wt, Wt.current), l) break;
        return null;
      case 22:
      case 23:
        return e.lanes = 0, Zd(t, e, n);
      case 24:
        Dn(e, Jt, t.memoizedState.cache);
    }
    return gn(t, e, n);
  }
  function th(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        Pt = !0;
      else {
        if (!Jc(t, n) && (e.flags & 128) === 0)
          return Pt = !1, Ey(
            t,
            e,
            n
          );
        Pt = (t.flags & 131072) !== 0;
      }
    else
      Pt = !1, Tt && (e.flags & 1048576) !== 0 && Ds(e, ci, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          t = e.pendingProps;
          var l = e.elementType, u = l._init;
          if (l = u(l._payload), e.type = l, typeof l == "function")
            ac(l) ? (t = hl(l, t), e.tag = 1, e = Jd(
              null,
              e,
              l,
              t,
              n
            )) : (e.tag = 0, e = Lc(
              null,
              e,
              l,
              t,
              n
            ));
          else {
            if (l != null) {
              if (u = l.$$typeof, u === L) {
                e.tag = 11, e = Xd(
                  null,
                  e,
                  l,
                  t,
                  n
                );
                break t;
              } else if (u === Z) {
                e.tag = 14, e = Qd(
                  null,
                  e,
                  l,
                  t,
                  n
                );
                break t;
              }
            }
            throw e = G(l) || l, Error(c(306, e, ""));
          }
        }
        return e;
      case 0:
        return Lc(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 1:
        return l = e.type, u = hl(
          l,
          e.pendingProps
        ), Jd(
          t,
          e,
          l,
          u,
          n
        );
      case 3:
        t: {
          if (Mt(
            e,
            e.stateNode.containerInfo
          ), t === null) throw Error(c(387));
          l = e.pendingProps;
          var r = e.memoizedState;
          u = r.element, vc(t, e), Wa(e, l, null, n);
          var s = e.memoizedState;
          if (l = s.cache, Dn(e, Jt, l), l !== r.cache && dc(
            e,
            [Jt],
            n,
            !0
          ), Ja(), l = s.element, r.isDehydrated)
            if (r = {
              element: l,
              isDehydrated: !1,
              cache: s.cache
            }, e.updateQueue.baseState = r, e.memoizedState = r, e.flags & 256) {
              e = Wd(
                t,
                e,
                l,
                n
              );
              break t;
            } else if (l !== u) {
              u = Ne(
                Error(c(424)),
                e
              ), La(u), e = Wd(
                t,
                e,
                l,
                n
              );
              break t;
            } else {
              switch (t = e.stateNode.containerInfo, t.nodeType) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (jt = Ve(t.firstChild), fe = e, Tt = !0, rl = null, We = !0, n = Nd(
                e,
                null,
                l,
                n
              ), e.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
            }
          else {
            if (ka(), l === u) {
              e = gn(
                t,
                e,
                n
              );
              break t;
            }
            ne(
              t,
              e,
              l,
              n
            );
          }
          e = e.child;
        }
        return e;
      case 26:
        return _i(t, e), t === null ? (n = a0(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = n : Tt || (n = e.type, t = e.pendingProps, l = Xi(
          rt.current
        ).createElement(n), l[ie] = e, l[se] = t, ae(l, n, t), Ft(l), e.stateNode = l) : e.memoizedState = a0(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return Le(e), t === null && Tt && (l = e.stateNode = e0(
          e.type,
          e.pendingProps,
          rt.current
        ), fe = e, We = !0, u = jt, Vn(e.type) ? (Do = u, jt = Ve(
          l.firstChild
        )) : jt = u), ne(
          t,
          e,
          e.pendingProps.children,
          n
        ), _i(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && Tt && ((u = l = jt) && (l = Wy(
          l,
          e.type,
          e.pendingProps,
          We
        ), l !== null ? (e.stateNode = l, fe = e, jt = Ve(
          l.firstChild
        ), We = !1, u = !0) : u = !1), u || cl(e)), Le(e), u = e.type, r = e.pendingProps, s = t !== null ? t.memoizedProps : null, l = r.children, Oo(u, r) ? l = null : s !== null && Oo(u, s) && (e.flags |= 32), e.memoizedState !== null && (u = Ac(
          t,
          e,
          my,
          null,
          null,
          n
        ), vu._currentValue = u), _i(t, e), ne(t, e, l, n), e.child;
      case 6:
        return t === null && Tt && ((t = n = jt) && (n = Fy(
          n,
          e.pendingProps,
          We
        ), n !== null ? (e.stateNode = n, fe = e, jt = null, t = !0) : t = !1), t || cl(e)), null;
      case 13:
        return Fd(t, e, n);
      case 4:
        return Mt(
          e,
          e.stateNode.containerInfo
        ), l = e.pendingProps, t === null ? e.child = Pl(
          e,
          null,
          l,
          n
        ) : ne(
          t,
          e,
          l,
          n
        ), e.child;
      case 11:
        return Xd(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 7:
        return ne(
          t,
          e,
          e.pendingProps,
          n
        ), e.child;
      case 8:
        return ne(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 12:
        return ne(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 10:
        return l = e.pendingProps, Dn(e, e.type, l.value), ne(
          t,
          e,
          l.children,
          n
        ), e.child;
      case 9:
        return u = e.type._context, l = e.pendingProps.children, fl(e), u = re(u), l = l(u), e.flags |= 1, ne(t, e, l, n), e.child;
      case 14:
        return Qd(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 15:
        return Vd(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 19:
        return Id(t, e, n);
      case 31:
        return l = e.pendingProps, n = e.mode, l = {
          mode: l.mode,
          children: l.children
        }, t === null ? (n = Mi(
          l,
          n
        ), n.ref = e.ref, e.child = n, n.return = e, e = n) : (n = fn(t.child, l), n.ref = e.ref, e.child = n, n.return = e, e = n), e;
      case 22:
        return Zd(t, e, n);
      case 24:
        return fl(e), l = re(Jt), t === null ? (u = pc(), u === null && (u = wt, r = hc(), u.pooledCache = r, r.refCount++, r !== null && (u.pooledCacheLanes |= n), u = r), e.memoizedState = {
          parent: l,
          cache: u
        }, gc(e), Dn(e, Jt, u)) : ((t.lanes & n) !== 0 && (vc(t, e), Wa(e, null, null, n), Ja()), u = t.memoizedState, r = e.memoizedState, u.parent !== l ? (u = { parent: l, cache: l }, e.memoizedState = u, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = u), Dn(e, Jt, l)) : (l = r.cache, Dn(e, Jt, l), l !== u.cache && dc(
          e,
          [Jt],
          n,
          !0
        ))), ne(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(c(156, e.tag));
  }
  function vn(t) {
    t.flags |= 4;
  }
  function eh(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !o0(e)) {
      if (e = He.current, e !== null && ((vt & 4194048) === vt ? Fe !== null : (vt & 62914560) !== vt && (vt & 536870912) === 0 || e !== Fe))
        throw Ka = yc, Ys;
      t.flags |= 8192;
    }
  }
  function Di(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Uf() : 536870912, t.lanes |= e, na |= e);
  }
  function lu(t, e) {
    if (!Tt)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var n = null; e !== null; )
            e.alternate !== null && (n = e), e = e.sibling;
          n === null ? t.tail = null : n.sibling = null;
          break;
        case "collapsed":
          n = t.tail;
          for (var l = null; n !== null; )
            n.alternate !== null && (l = n), n = n.sibling;
          l === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : l.sibling = null;
      }
  }
  function Yt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, n = 0, l = 0;
    if (e)
      for (var u = t.child; u !== null; )
        n |= u.lanes | u.childLanes, l |= u.subtreeFlags & 65011712, l |= u.flags & 65011712, u.return = t, u = u.sibling;
    else
      for (u = t.child; u !== null; )
        n |= u.lanes | u.childLanes, l |= u.subtreeFlags, l |= u.flags, u.return = t, u = u.sibling;
    return t.subtreeFlags |= l, t.childLanes = n, e;
  }
  function xy(t, e, n) {
    var l = e.pendingProps;
    switch (cc(e), e.tag) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Yt(e), null;
      case 1:
        return Yt(e), null;
      case 3:
        return n = e.stateNode, l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), mn(Jt), Me(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (t === null || t.child === null) && (Ga(e) ? vn(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, Us())), Yt(e), null;
      case 26:
        return n = e.memoizedState, t === null ? (vn(e), n !== null ? (Yt(e), eh(e, n)) : (Yt(e), e.flags &= -16777217)) : n ? n !== t.memoizedState ? (vn(e), Yt(e), eh(e, n)) : (Yt(e), e.flags &= -16777217) : (t.memoizedProps !== l && vn(e), Yt(e), e.flags &= -16777217), null;
      case 27:
        $e(e), n = rt.current;
        var u = e.type;
        if (t !== null && e.stateNode != null)
          t.memoizedProps !== l && vn(e);
        else {
          if (!l) {
            if (e.stateNode === null)
              throw Error(c(166));
            return Yt(e), null;
          }
          t = nt.current, Ga(e) ? zs(e) : (t = e0(u, l, n), e.stateNode = t, vn(e));
        }
        return Yt(e), null;
      case 5:
        if ($e(e), n = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== l && vn(e);
        else {
          if (!l) {
            if (e.stateNode === null)
              throw Error(c(166));
            return Yt(e), null;
          }
          if (t = nt.current, Ga(e))
            zs(e);
          else {
            switch (u = Xi(
              rt.current
            ), t) {
              case 1:
                t = u.createElementNS(
                  "http://www.w3.org/2000/svg",
                  n
                );
                break;
              case 2:
                t = u.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  n
                );
                break;
              default:
                switch (n) {
                  case "svg":
                    t = u.createElementNS(
                      "http://www.w3.org/2000/svg",
                      n
                    );
                    break;
                  case "math":
                    t = u.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    t = u.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild);
                    break;
                  case "select":
                    t = typeof l.is == "string" ? u.createElement("select", { is: l.is }) : u.createElement("select"), l.multiple ? t.multiple = !0 : l.size && (t.size = l.size);
                    break;
                  default:
                    t = typeof l.is == "string" ? u.createElement(n, { is: l.is }) : u.createElement(n);
                }
            }
            t[ie] = e, t[se] = l;
            t: for (u = e.child; u !== null; ) {
              if (u.tag === 5 || u.tag === 6)
                t.appendChild(u.stateNode);
              else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                u.child.return = u, u = u.child;
                continue;
              }
              if (u === e) break t;
              for (; u.sibling === null; ) {
                if (u.return === null || u.return === e)
                  break t;
                u = u.return;
              }
              u.sibling.return = u.return, u = u.sibling;
            }
            e.stateNode = t;
            t: switch (ae(t, n, l), n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!l.autoFocus;
                break t;
              case "img":
                t = !0;
                break t;
              default:
                t = !1;
            }
            t && vn(e);
          }
        }
        return Yt(e), e.flags &= -16777217, null;
      case 6:
        if (t && e.stateNode != null)
          t.memoizedProps !== l && vn(e);
        else {
          if (typeof l != "string" && e.stateNode === null)
            throw Error(c(166));
          if (t = rt.current, Ga(e)) {
            if (t = e.stateNode, n = e.memoizedProps, l = null, u = fe, u !== null)
              switch (u.tag) {
                case 27:
                case 5:
                  l = u.memoizedProps;
              }
            t[ie] = e, t = !!(t.nodeValue === n || l !== null && l.suppressHydrationWarning === !0 || $h(t.nodeValue, n)), t || cl(e);
          } else
            t = Xi(t).createTextNode(
              l
            ), t[ie] = e, e.stateNode = t;
        }
        return Yt(e), null;
      case 13:
        if (l = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (u = Ga(e), l !== null && l.dehydrated !== null) {
            if (t === null) {
              if (!u) throw Error(c(318));
              if (u = e.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(c(317));
              u[ie] = e;
            } else
              ka(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Yt(e), u = !1;
          } else
            u = Us(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = u), u = !0;
          if (!u)
            return e.flags & 256 ? (yn(e), e) : (yn(e), null);
        }
        if (yn(e), (e.flags & 128) !== 0)
          return e.lanes = n, e;
        if (n = l !== null, t = t !== null && t.memoizedState !== null, n) {
          l = e.child, u = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (u = l.alternate.memoizedState.cachePool.pool);
          var r = null;
          l.memoizedState !== null && l.memoizedState.cachePool !== null && (r = l.memoizedState.cachePool.pool), r !== u && (l.flags |= 2048);
        }
        return n !== t && n && (e.child.flags |= 8192), Di(e, e.updateQueue), Yt(e), null;
      case 4:
        return Me(), t === null && To(e.stateNode.containerInfo), Yt(e), null;
      case 10:
        return mn(e.type), Yt(e), null;
      case 19:
        if (J(Wt), u = e.memoizedState, u === null) return Yt(e), null;
        if (l = (e.flags & 128) !== 0, r = u.rendering, r === null)
          if (l) lu(u, !1);
          else {
            if (Gt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (r = Ci(t), r !== null) {
                  for (e.flags |= 128, lu(u, !1), t = r.updateQueue, e.updateQueue = t, Di(e, t), e.subtreeFlags = 0, t = n, n = e.child; n !== null; )
                    Ms(n, t), n = n.sibling;
                  return W(
                    Wt,
                    Wt.current & 1 | 2
                  ), e.child;
                }
                t = t.sibling;
              }
            u.tail !== null && Je() > Ui && (e.flags |= 128, l = !0, lu(u, !1), e.lanes = 4194304);
          }
        else {
          if (!l)
            if (t = Ci(r), t !== null) {
              if (e.flags |= 128, l = !0, t = t.updateQueue, e.updateQueue = t, Di(e, t), lu(u, !0), u.tail === null && u.tailMode === "hidden" && !r.alternate && !Tt)
                return Yt(e), null;
            } else
              2 * Je() - u.renderingStartTime > Ui && n !== 536870912 && (e.flags |= 128, l = !0, lu(u, !1), e.lanes = 4194304);
          u.isBackwards ? (r.sibling = e.child, e.child = r) : (t = u.last, t !== null ? t.sibling = r : e.child = r, u.last = r);
        }
        return u.tail !== null ? (e = u.tail, u.rendering = e, u.tail = e.sibling, u.renderingStartTime = Je(), e.sibling = null, t = Wt.current, W(Wt, l ? t & 1 | 2 : t & 1), e) : (Yt(e), null);
      case 22:
      case 23:
        return yn(e), Ec(), l = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== l && (e.flags |= 8192) : l && (e.flags |= 8192), l ? (n & 536870912) !== 0 && (e.flags & 128) === 0 && (Yt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Yt(e), n = e.updateQueue, n !== null && Di(e, n.retryQueue), n = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), l = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), l !== n && (e.flags |= 2048), t !== null && J(sl), null;
      case 24:
        return n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), mn(Jt), Yt(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(c(156, e.tag));
  }
  function Ay(t, e) {
    switch (cc(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return mn(Jt), Me(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return $e(e), null;
      case 13:
        if (yn(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(c(340));
          ka();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return J(Wt), null;
      case 4:
        return Me(), null;
      case 10:
        return mn(e.type), null;
      case 22:
      case 23:
        return yn(e), Ec(), t !== null && J(sl), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return mn(Jt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function nh(t, e) {
    switch (cc(e), e.tag) {
      case 3:
        mn(Jt), Me();
        break;
      case 26:
      case 27:
      case 5:
        $e(e);
        break;
      case 4:
        Me();
        break;
      case 13:
        yn(e);
        break;
      case 19:
        J(Wt);
        break;
      case 10:
        mn(e.type);
        break;
      case 22:
      case 23:
        yn(e), Ec(), t !== null && J(sl);
        break;
      case 24:
        mn(Jt);
    }
  }
  function au(t, e) {
    try {
      var n = e.updateQueue, l = n !== null ? n.lastEffect : null;
      if (l !== null) {
        var u = l.next;
        n = u;
        do {
          if ((n.tag & t) === t) {
            l = void 0;
            var r = n.create, s = n.inst;
            l = r(), s.destroy = l;
          }
          n = n.next;
        } while (n !== u);
      }
    } catch (h) {
      Bt(e, e.return, h);
    }
  }
  function qn(t, e, n) {
    try {
      var l = e.updateQueue, u = l !== null ? l.lastEffect : null;
      if (u !== null) {
        var r = u.next;
        l = r;
        do {
          if ((l.tag & t) === t) {
            var s = l.inst, h = s.destroy;
            if (h !== void 0) {
              s.destroy = void 0, u = e;
              var v = n, R = h;
              try {
                R();
              } catch (B) {
                Bt(
                  u,
                  v,
                  B
                );
              }
            }
          }
          l = l.next;
        } while (l !== r);
      }
    } catch (B) {
      Bt(e, e.return, B);
    }
  }
  function lh(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        Qs(e, n);
      } catch (l) {
        Bt(t, t.return, l);
      }
    }
  }
  function ah(t, e, n) {
    n.props = hl(
      t.type,
      t.memoizedProps
    ), n.state = t.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (l) {
      Bt(t, e, l);
    }
  }
  function uu(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var l = t.stateNode;
            break;
          case 30:
            l = t.stateNode;
            break;
          default:
            l = t.stateNode;
        }
        typeof n == "function" ? t.refCleanup = n(l) : n.current = l;
      }
    } catch (u) {
      Bt(t, e, u);
    }
  }
  function Pe(t, e) {
    var n = t.ref, l = t.refCleanup;
    if (n !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (u) {
          Bt(t, e, u);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (u) {
          Bt(t, e, u);
        }
      else n.current = null;
  }
  function uh(t) {
    var e = t.type, n = t.memoizedProps, l = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && l.focus();
          break t;
        case "img":
          n.src ? l.src = n.src : n.srcSet && (l.srcset = n.srcSet);
      }
    } catch (u) {
      Bt(t, t.return, u);
    }
  }
  function Wc(t, e, n) {
    try {
      var l = t.stateNode;
      Vy(l, t.type, n, e), l[se] = e;
    } catch (u) {
      Bt(t, t.return, u);
    }
  }
  function ih(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Vn(t.type) || t.tag === 4;
  }
  function Fc(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || ih(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && Vn(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Pc(t, e, n) {
    var l = t.tag;
    if (l === 5 || l === 6)
      t = t.stateNode, e ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(t, e) : (e = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, e.appendChild(t), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = Li));
    else if (l !== 4 && (l === 27 && Vn(t.type) && (n = t.stateNode, e = null), t = t.child, t !== null))
      for (Pc(t, e, n), t = t.sibling; t !== null; )
        Pc(t, e, n), t = t.sibling;
  }
  function zi(t, e, n) {
    var l = t.tag;
    if (l === 5 || l === 6)
      t = t.stateNode, e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (l !== 4 && (l === 27 && Vn(t.type) && (n = t.stateNode), t = t.child, t !== null))
      for (zi(t, e, n), t = t.sibling; t !== null; )
        zi(t, e, n), t = t.sibling;
  }
  function rh(t) {
    var e = t.stateNode, n = t.memoizedProps;
    try {
      for (var l = t.type, u = e.attributes; u.length; )
        e.removeAttributeNode(u[0]);
      ae(e, l, n), e[ie] = t, e[se] = n;
    } catch (r) {
      Bt(t, t.return, r);
    }
  }
  var bn = !1, Qt = !1, Ic = !1, ch = typeof WeakSet == "function" ? WeakSet : Set, It = null;
  function Cy(t, e) {
    if (t = t.containerInfo, Ao = Ji, t = bs(t), Fr(t)) {
      if ("selectionStart" in t)
        var n = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          n = (n = t.ownerDocument) && n.defaultView || window;
          var l = n.getSelection && n.getSelection();
          if (l && l.rangeCount !== 0) {
            n = l.anchorNode;
            var u = l.anchorOffset, r = l.focusNode;
            l = l.focusOffset;
            try {
              n.nodeType, r.nodeType;
            } catch {
              n = null;
              break t;
            }
            var s = 0, h = -1, v = -1, R = 0, B = 0, Y = t, _ = null;
            e: for (; ; ) {
              for (var M; Y !== n || u !== 0 && Y.nodeType !== 3 || (h = s + u), Y !== r || l !== 0 && Y.nodeType !== 3 || (v = s + l), Y.nodeType === 3 && (s += Y.nodeValue.length), (M = Y.firstChild) !== null; )
                _ = Y, Y = M;
              for (; ; ) {
                if (Y === t) break e;
                if (_ === n && ++R === u && (h = s), _ === r && ++B === l && (v = s), (M = Y.nextSibling) !== null) break;
                Y = _, _ = Y.parentNode;
              }
              Y = M;
            }
            n = h === -1 || v === -1 ? null : { start: h, end: v };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Co = { focusedElem: t, selectionRange: n }, Ji = !1, It = e; It !== null; )
      if (e = It, t = e.child, (e.subtreeFlags & 1024) !== 0 && t !== null)
        t.return = e, It = t;
      else
        for (; It !== null; ) {
          switch (e = It, r = e.alternate, t = e.flags, e.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && r !== null) {
                t = void 0, n = e, u = r.memoizedProps, r = r.memoizedState, l = n.stateNode;
                try {
                  var ct = hl(
                    n.type,
                    u,
                    n.elementType === n.type
                  );
                  t = l.getSnapshotBeforeUpdate(
                    ct,
                    r
                  ), l.__reactInternalSnapshotBeforeUpdate = t;
                } catch (at) {
                  Bt(
                    n,
                    n.return,
                    at
                  );
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (t = e.stateNode.containerInfo, n = t.nodeType, n === 9)
                  _o(t);
                else if (n === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      _o(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(c(163));
          }
          if (t = e.sibling, t !== null) {
            t.return = e.return, It = t;
            break;
          }
          It = e.return;
        }
  }
  function oh(t, e, n) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Yn(t, n), l & 4 && au(5, n);
        break;
      case 1:
        if (Yn(t, n), l & 4)
          if (t = n.stateNode, e === null)
            try {
              t.componentDidMount();
            } catch (s) {
              Bt(n, n.return, s);
            }
          else {
            var u = hl(
              n.type,
              e.memoizedProps
            );
            e = e.memoizedState;
            try {
              t.componentDidUpdate(
                u,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (s) {
              Bt(
                n,
                n.return,
                s
              );
            }
          }
        l & 64 && lh(n), l & 512 && uu(n, n.return);
        break;
      case 3:
        if (Yn(t, n), l & 64 && (t = n.updateQueue, t !== null)) {
          if (e = null, n.child !== null)
            switch (n.child.tag) {
              case 27:
              case 5:
                e = n.child.stateNode;
                break;
              case 1:
                e = n.child.stateNode;
            }
          try {
            Qs(t, e);
          } catch (s) {
            Bt(n, n.return, s);
          }
        }
        break;
      case 27:
        e === null && l & 4 && rh(n);
      case 26:
      case 5:
        Yn(t, n), e === null && l & 4 && uh(n), l & 512 && uu(n, n.return);
        break;
      case 12:
        Yn(t, n);
        break;
      case 13:
        Yn(t, n), l & 4 && dh(t, n), l & 64 && (t = n.memoizedState, t !== null && (t = t.dehydrated, t !== null && (n = By.bind(
          null,
          n
        ), Py(t, n))));
        break;
      case 22:
        if (l = n.memoizedState !== null || bn, !l) {
          e = e !== null && e.memoizedState !== null || Qt, u = bn;
          var r = Qt;
          bn = l, (Qt = e) && !r ? jn(
            t,
            n,
            (n.subtreeFlags & 8772) !== 0
          ) : Yn(t, n), bn = u, Qt = r;
        }
        break;
      case 30:
        break;
      default:
        Yn(t, n);
    }
  }
  function fh(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, fh(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && Nr(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var Ht = null, me = !1;
  function Sn(t, e, n) {
    for (n = n.child; n !== null; )
      sh(t, e, n), n = n.sibling;
  }
  function sh(t, e, n) {
    if (ge && typeof ge.onCommitFiberUnmount == "function")
      try {
        ge.onCommitFiberUnmount(Oa, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        Qt || Pe(n, e), Sn(
          t,
          e,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        Qt || Pe(n, e);
        var l = Ht, u = me;
        Vn(n.type) && (Ht = n.stateNode, me = !1), Sn(
          t,
          e,
          n
        ), mu(n.stateNode), Ht = l, me = u;
        break;
      case 5:
        Qt || Pe(n, e);
      case 6:
        if (l = Ht, u = me, Ht = null, Sn(
          t,
          e,
          n
        ), Ht = l, me = u, Ht !== null)
          if (me)
            try {
              (Ht.nodeType === 9 ? Ht.body : Ht.nodeName === "HTML" ? Ht.ownerDocument.body : Ht).removeChild(n.stateNode);
            } catch (r) {
              Bt(
                n,
                e,
                r
              );
            }
          else
            try {
              Ht.removeChild(n.stateNode);
            } catch (r) {
              Bt(
                n,
                e,
                r
              );
            }
        break;
      case 18:
        Ht !== null && (me ? (t = Ht, Ih(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          n.stateNode
        ), Eu(t)) : Ih(Ht, n.stateNode));
        break;
      case 4:
        l = Ht, u = me, Ht = n.stateNode.containerInfo, me = !0, Sn(
          t,
          e,
          n
        ), Ht = l, me = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Qt || qn(2, n, e), Qt || qn(4, n, e), Sn(
          t,
          e,
          n
        );
        break;
      case 1:
        Qt || (Pe(n, e), l = n.stateNode, typeof l.componentWillUnmount == "function" && ah(
          n,
          e,
          l
        )), Sn(
          t,
          e,
          n
        );
        break;
      case 21:
        Sn(
          t,
          e,
          n
        );
        break;
      case 22:
        Qt = (l = Qt) || n.memoizedState !== null, Sn(
          t,
          e,
          n
        ), Qt = l;
        break;
      default:
        Sn(
          t,
          e,
          n
        );
    }
  }
  function dh(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        Eu(t);
      } catch (n) {
        Bt(e, e.return, n);
      }
  }
  function Oy(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new ch()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new ch()), e;
      default:
        throw Error(c(435, t.tag));
    }
  }
  function to(t, e) {
    var n = Oy(t);
    e.forEach(function(l) {
      var u = wy.bind(null, t, l);
      n.has(l) || (n.add(l), l.then(u, u));
    });
  }
  function Te(t, e) {
    var n = e.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var u = n[l], r = t, s = e, h = s;
        t: for (; h !== null; ) {
          switch (h.tag) {
            case 27:
              if (Vn(h.type)) {
                Ht = h.stateNode, me = !1;
                break t;
              }
              break;
            case 5:
              Ht = h.stateNode, me = !1;
              break t;
            case 3:
            case 4:
              Ht = h.stateNode.containerInfo, me = !0;
              break t;
          }
          h = h.return;
        }
        if (Ht === null) throw Error(c(160));
        sh(r, s, u), Ht = null, me = !1, r = u.alternate, r !== null && (r.return = null), u.return = null;
      }
    if (e.subtreeFlags & 13878)
      for (e = e.child; e !== null; )
        hh(e, t), e = e.sibling;
  }
  var Qe = null;
  function hh(t, e) {
    var n = t.alternate, l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Te(e, t), Ee(t), l & 4 && (qn(3, t, t.return), au(3, t), qn(5, t, t.return));
        break;
      case 1:
        Te(e, t), Ee(t), l & 512 && (Qt || n === null || Pe(n, n.return)), l & 64 && bn && (t = t.updateQueue, t !== null && (l = t.callbacks, l !== null && (n = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = n === null ? l : n.concat(l))));
        break;
      case 26:
        var u = Qe;
        if (Te(e, t), Ee(t), l & 512 && (Qt || n === null || Pe(n, n.return)), l & 4) {
          var r = n !== null ? n.memoizedState : null;
          if (l = t.memoizedState, n === null)
            if (l === null)
              if (t.stateNode === null) {
                t: {
                  l = t.type, n = t.memoizedProps, u = u.ownerDocument || u;
                  e: switch (l) {
                    case "title":
                      r = u.getElementsByTagName("title")[0], (!r || r[Ma] || r[ie] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = u.createElement(l), u.head.insertBefore(
                        r,
                        u.querySelector("head > title")
                      )), ae(r, l, n), r[ie] = t, Ft(r), l = r;
                      break t;
                    case "link":
                      var s = r0(
                        "link",
                        "href",
                        u
                      ).get(l + (n.href || ""));
                      if (s) {
                        for (var h = 0; h < s.length; h++)
                          if (r = s[h], r.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && r.getAttribute("rel") === (n.rel == null ? null : n.rel) && r.getAttribute("title") === (n.title == null ? null : n.title) && r.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                            s.splice(h, 1);
                            break e;
                          }
                      }
                      r = u.createElement(l), ae(r, l, n), u.head.appendChild(r);
                      break;
                    case "meta":
                      if (s = r0(
                        "meta",
                        "content",
                        u
                      ).get(l + (n.content || ""))) {
                        for (h = 0; h < s.length; h++)
                          if (r = s[h], r.getAttribute("content") === (n.content == null ? null : "" + n.content) && r.getAttribute("name") === (n.name == null ? null : n.name) && r.getAttribute("property") === (n.property == null ? null : n.property) && r.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && r.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                            s.splice(h, 1);
                            break e;
                          }
                      }
                      r = u.createElement(l), ae(r, l, n), u.head.appendChild(r);
                      break;
                    default:
                      throw Error(c(468, l));
                  }
                  r[ie] = t, Ft(r), l = r;
                }
                t.stateNode = l;
              } else
                c0(
                  u,
                  t.type,
                  t.stateNode
                );
            else
              t.stateNode = i0(
                u,
                l,
                t.memoizedProps
              );
          else
            r !== l ? (r === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : r.count--, l === null ? c0(
              u,
              t.type,
              t.stateNode
            ) : i0(
              u,
              l,
              t.memoizedProps
            )) : l === null && t.stateNode !== null && Wc(
              t,
              t.memoizedProps,
              n.memoizedProps
            );
        }
        break;
      case 27:
        Te(e, t), Ee(t), l & 512 && (Qt || n === null || Pe(n, n.return)), n !== null && l & 4 && Wc(
          t,
          t.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (Te(e, t), Ee(t), l & 512 && (Qt || n === null || Pe(n, n.return)), t.flags & 32) {
          u = t.stateNode;
          try {
            Bl(u, "");
          } catch (M) {
            Bt(t, t.return, M);
          }
        }
        l & 4 && t.stateNode != null && (u = t.memoizedProps, Wc(
          t,
          u,
          n !== null ? n.memoizedProps : u
        )), l & 1024 && (Ic = !0);
        break;
      case 6:
        if (Te(e, t), Ee(t), l & 4) {
          if (t.stateNode === null)
            throw Error(c(162));
          l = t.memoizedProps, n = t.stateNode;
          try {
            n.nodeValue = l;
          } catch (M) {
            Bt(t, t.return, M);
          }
        }
        break;
      case 3:
        if (Zi = null, u = Qe, Qe = Qi(e.containerInfo), Te(e, t), Qe = u, Ee(t), l & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            Eu(e.containerInfo);
          } catch (M) {
            Bt(t, t.return, M);
          }
        Ic && (Ic = !1, mh(t));
        break;
      case 4:
        l = Qe, Qe = Qi(
          t.stateNode.containerInfo
        ), Te(e, t), Ee(t), Qe = l;
        break;
      case 12:
        Te(e, t), Ee(t);
        break;
      case 13:
        Te(e, t), Ee(t), t.child.flags & 8192 && t.memoizedState !== null != (n !== null && n.memoizedState !== null) && (io = Je()), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, to(t, l)));
        break;
      case 22:
        u = t.memoizedState !== null;
        var v = n !== null && n.memoizedState !== null, R = bn, B = Qt;
        if (bn = R || u, Qt = B || v, Te(e, t), Qt = B, bn = R, Ee(t), l & 8192)
          t: for (e = t.stateNode, e._visibility = u ? e._visibility & -2 : e._visibility | 1, u && (n === null || v || bn || Qt || ml(t)), n = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26) {
              if (n === null) {
                v = n = e;
                try {
                  if (r = v.stateNode, u)
                    s = r.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none";
                  else {
                    h = v.stateNode;
                    var Y = v.memoizedProps.style, _ = Y != null && Y.hasOwnProperty("display") ? Y.display : null;
                    h.style.display = _ == null || typeof _ == "boolean" ? "" : ("" + _).trim();
                  }
                } catch (M) {
                  Bt(v, v.return, M);
                }
              }
            } else if (e.tag === 6) {
              if (n === null) {
                v = e;
                try {
                  v.stateNode.nodeValue = u ? "" : v.memoizedProps;
                } catch (M) {
                  Bt(v, v.return, M);
                }
              }
            } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              n === e && (n = null), e = e.return;
            }
            n === e && (n = null), e.sibling.return = e.return, e = e.sibling;
          }
        l & 4 && (l = t.updateQueue, l !== null && (n = l.retryQueue, n !== null && (l.retryQueue = null, to(t, n))));
        break;
      case 19:
        Te(e, t), Ee(t), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, to(t, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Te(e, t), Ee(t);
    }
  }
  function Ee(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var n, l = t.return; l !== null; ) {
          if (ih(l)) {
            n = l;
            break;
          }
          l = l.return;
        }
        if (n == null) throw Error(c(160));
        switch (n.tag) {
          case 27:
            var u = n.stateNode, r = Fc(t);
            zi(t, r, u);
            break;
          case 5:
            var s = n.stateNode;
            n.flags & 32 && (Bl(s, ""), n.flags &= -33);
            var h = Fc(t);
            zi(t, h, s);
            break;
          case 3:
          case 4:
            var v = n.stateNode.containerInfo, R = Fc(t);
            Pc(
              t,
              R,
              v
            );
            break;
          default:
            throw Error(c(161));
        }
      } catch (B) {
        Bt(t, t.return, B);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function mh(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        mh(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
      }
  }
  function Yn(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        oh(t, e.alternate, e), e = e.sibling;
  }
  function ml(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          qn(4, e, e.return), ml(e);
          break;
        case 1:
          Pe(e, e.return);
          var n = e.stateNode;
          typeof n.componentWillUnmount == "function" && ah(
            e,
            e.return,
            n
          ), ml(e);
          break;
        case 27:
          mu(e.stateNode);
        case 26:
        case 5:
          Pe(e, e.return), ml(e);
          break;
        case 22:
          e.memoizedState === null && ml(e);
          break;
        case 30:
          ml(e);
          break;
        default:
          ml(e);
      }
      t = t.sibling;
    }
  }
  function jn(t, e, n) {
    for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var l = e.alternate, u = t, r = e, s = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          jn(
            u,
            r,
            n
          ), au(4, r);
          break;
        case 1:
          if (jn(
            u,
            r,
            n
          ), l = r, u = l.stateNode, typeof u.componentDidMount == "function")
            try {
              u.componentDidMount();
            } catch (R) {
              Bt(l, l.return, R);
            }
          if (l = r, u = l.updateQueue, u !== null) {
            var h = l.stateNode;
            try {
              var v = u.shared.hiddenCallbacks;
              if (v !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < v.length; u++)
                  Xs(v[u], h);
            } catch (R) {
              Bt(l, l.return, R);
            }
          }
          n && s & 64 && lh(r), uu(r, r.return);
          break;
        case 27:
          rh(r);
        case 26:
        case 5:
          jn(
            u,
            r,
            n
          ), n && l === null && s & 4 && uh(r), uu(r, r.return);
          break;
        case 12:
          jn(
            u,
            r,
            n
          );
          break;
        case 13:
          jn(
            u,
            r,
            n
          ), n && s & 4 && dh(u, r);
          break;
        case 22:
          r.memoizedState === null && jn(
            u,
            r,
            n
          ), uu(r, r.return);
          break;
        case 30:
          break;
        default:
          jn(
            u,
            r,
            n
          );
      }
      e = e.sibling;
    }
  }
  function eo(t, e) {
    var n = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== n && (t != null && t.refCount++, n != null && Qa(n));
  }
  function no(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Qa(t));
  }
  function Ie(t, e, n, l) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        ph(
          t,
          e,
          n,
          l
        ), e = e.sibling;
  }
  function ph(t, e, n, l) {
    var u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Ie(
          t,
          e,
          n,
          l
        ), u & 2048 && au(9, e);
        break;
      case 1:
        Ie(
          t,
          e,
          n,
          l
        );
        break;
      case 3:
        Ie(
          t,
          e,
          n,
          l
        ), u & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Qa(t)));
        break;
      case 12:
        if (u & 2048) {
          Ie(
            t,
            e,
            n,
            l
          ), t = e.stateNode;
          try {
            var r = e.memoizedProps, s = r.id, h = r.onPostCommit;
            typeof h == "function" && h(
              s,
              e.alternate === null ? "mount" : "update",
              t.passiveEffectDuration,
              -0
            );
          } catch (v) {
            Bt(e, e.return, v);
          }
        } else
          Ie(
            t,
            e,
            n,
            l
          );
        break;
      case 13:
        Ie(
          t,
          e,
          n,
          l
        );
        break;
      case 23:
        break;
      case 22:
        r = e.stateNode, s = e.alternate, e.memoizedState !== null ? r._visibility & 2 ? Ie(
          t,
          e,
          n,
          l
        ) : iu(t, e) : r._visibility & 2 ? Ie(
          t,
          e,
          n,
          l
        ) : (r._visibility |= 2, Il(
          t,
          e,
          n,
          l,
          (e.subtreeFlags & 10256) !== 0
        )), u & 2048 && eo(s, e);
        break;
      case 24:
        Ie(
          t,
          e,
          n,
          l
        ), u & 2048 && no(e.alternate, e);
        break;
      default:
        Ie(
          t,
          e,
          n,
          l
        );
    }
  }
  function Il(t, e, n, l, u) {
    for (u = u && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
      var r = t, s = e, h = n, v = l, R = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          Il(
            r,
            s,
            h,
            v,
            u
          ), au(8, s);
          break;
        case 23:
          break;
        case 22:
          var B = s.stateNode;
          s.memoizedState !== null ? B._visibility & 2 ? Il(
            r,
            s,
            h,
            v,
            u
          ) : iu(
            r,
            s
          ) : (B._visibility |= 2, Il(
            r,
            s,
            h,
            v,
            u
          )), u && R & 2048 && eo(
            s.alternate,
            s
          );
          break;
        case 24:
          Il(
            r,
            s,
            h,
            v,
            u
          ), u && R & 2048 && no(s.alternate, s);
          break;
        default:
          Il(
            r,
            s,
            h,
            v,
            u
          );
      }
      e = e.sibling;
    }
  }
  function iu(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var n = t, l = e, u = l.flags;
        switch (l.tag) {
          case 22:
            iu(n, l), u & 2048 && eo(
              l.alternate,
              l
            );
            break;
          case 24:
            iu(n, l), u & 2048 && no(l.alternate, l);
            break;
          default:
            iu(n, l);
        }
        e = e.sibling;
      }
  }
  var ru = 8192;
  function ta(t) {
    if (t.subtreeFlags & ru)
      for (t = t.child; t !== null; )
        yh(t), t = t.sibling;
  }
  function yh(t) {
    switch (t.tag) {
      case 26:
        ta(t), t.flags & ru && t.memoizedState !== null && sg(
          Qe,
          t.memoizedState,
          t.memoizedProps
        );
        break;
      case 5:
        ta(t);
        break;
      case 3:
      case 4:
        var e = Qe;
        Qe = Qi(t.stateNode.containerInfo), ta(t), Qe = e;
        break;
      case 22:
        t.memoizedState === null && (e = t.alternate, e !== null && e.memoizedState !== null ? (e = ru, ru = 16777216, ta(t), ru = e) : ta(t));
        break;
      default:
        ta(t);
    }
  }
  function gh(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function cu(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var l = e[n];
          It = l, bh(
            l,
            t
          );
        }
      gh(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        vh(t), t = t.sibling;
  }
  function vh(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        cu(t), t.flags & 2048 && qn(9, t, t.return);
        break;
      case 3:
        cu(t);
        break;
      case 12:
        cu(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, Ni(t)) : cu(t);
        break;
      default:
        cu(t);
    }
  }
  function Ni(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var l = e[n];
          It = l, bh(
            l,
            t
          );
        }
      gh(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          qn(8, e, e.return), Ni(e);
          break;
        case 22:
          n = e.stateNode, n._visibility & 2 && (n._visibility &= -3, Ni(e));
          break;
        default:
          Ni(e);
      }
      t = t.sibling;
    }
  }
  function bh(t, e) {
    for (; It !== null; ) {
      var n = It;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          qn(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var l = n.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Qa(n.memoizedState.cache);
      }
      if (l = n.child, l !== null) l.return = n, It = l;
      else
        t: for (n = t; It !== null; ) {
          l = It;
          var u = l.sibling, r = l.return;
          if (fh(l), l === n) {
            It = null;
            break t;
          }
          if (u !== null) {
            u.return = r, It = u;
            break t;
          }
          It = r;
        }
    }
  }
  var Ry = {
    getCacheForType: function(t) {
      var e = re(Jt), n = e.data.get(t);
      return n === void 0 && (n = t(), e.data.set(t, n)), n;
    }
  }, _y = typeof WeakMap == "function" ? WeakMap : Map, At = 0, wt = null, pt = null, vt = 0, Ct = 0, xe = null, Gn = !1, ea = !1, lo = !1, Tn = 0, Gt = 0, kn = 0, pl = 0, ao = 0, qe = 0, na = 0, ou = null, pe = null, uo = !1, io = 0, Ui = 1 / 0, Bi = null, Ln = null, le = 0, Xn = null, la = null, aa = 0, ro = 0, co = null, Sh = null, fu = 0, oo = null;
  function Ae() {
    if ((At & 2) !== 0 && vt !== 0)
      return vt & -vt;
    if (C.T !== null) {
      var t = Vl;
      return t !== 0 ? t : go();
    }
    return Hf();
  }
  function Th() {
    qe === 0 && (qe = (vt & 536870912) === 0 || Tt ? Nf() : 536870912);
    var t = He.current;
    return t !== null && (t.flags |= 32), qe;
  }
  function Ce(t, e, n) {
    (t === wt && (Ct === 2 || Ct === 9) || t.cancelPendingCommit !== null) && (ua(t, 0), Qn(
      t,
      vt,
      qe,
      !1
    )), _a(t, n), ((At & 2) === 0 || t !== wt) && (t === wt && ((At & 2) === 0 && (pl |= n), Gt === 4 && Qn(
      t,
      vt,
      qe,
      !1
    )), tn(t));
  }
  function Eh(t, e, n) {
    if ((At & 6) !== 0) throw Error(c(327));
    var l = !n && (e & 124) === 0 && (e & t.expiredLanes) === 0 || Ra(t, e), u = l ? zy(t, e) : ho(t, e, !0), r = l;
    do {
      if (u === 0) {
        ea && !l && Qn(t, e, 0, !1);
        break;
      } else {
        if (n = t.current.alternate, r && !My(n)) {
          u = ho(t, e, !1), r = !1;
          continue;
        }
        if (u === 2) {
          if (r = e, t.errorRecoveryDisabledLanes & r)
            var s = 0;
          else
            s = t.pendingLanes & -536870913, s = s !== 0 ? s : s & 536870912 ? 536870912 : 0;
          if (s !== 0) {
            e = s;
            t: {
              var h = t;
              u = ou;
              var v = h.current.memoizedState.isDehydrated;
              if (v && (ua(h, s).flags |= 256), s = ho(
                h,
                s,
                !1
              ), s !== 2) {
                if (lo && !v) {
                  h.errorRecoveryDisabledLanes |= r, pl |= r, u = 4;
                  break t;
                }
                r = pe, pe = u, r !== null && (pe === null ? pe = r : pe.push.apply(
                  pe,
                  r
                ));
              }
              u = s;
            }
            if (r = !1, u !== 2) continue;
          }
        }
        if (u === 1) {
          ua(t, 0), Qn(t, e, 0, !0);
          break;
        }
        t: {
          switch (l = t, r = u, r) {
            case 0:
            case 1:
              throw Error(c(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              Qn(
                l,
                e,
                qe,
                !Gn
              );
              break t;
            case 2:
              pe = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(c(329));
          }
          if ((e & 62914560) === e && (u = io + 300 - Je(), 10 < u)) {
            if (Qn(
              l,
              e,
              qe,
              !Gn
            ), Vu(l, 0, !0) !== 0) break t;
            l.timeoutHandle = Fh(
              xh.bind(
                null,
                l,
                n,
                pe,
                Bi,
                uo,
                e,
                qe,
                pl,
                na,
                Gn,
                r,
                2,
                -0,
                0
              ),
              u
            );
            break t;
          }
          xh(
            l,
            n,
            pe,
            Bi,
            uo,
            e,
            qe,
            pl,
            na,
            Gn,
            r,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    tn(t);
  }
  function xh(t, e, n, l, u, r, s, h, v, R, B, Y, _, M) {
    if (t.timeoutHandle = -1, Y = e.subtreeFlags, (Y & 8192 || (Y & 16785408) === 16785408) && (gu = { stylesheets: null, count: 0, unsuspend: fg }, yh(e), Y = dg(), Y !== null)) {
      t.cancelPendingCommit = Y(
        Dh.bind(
          null,
          t,
          e,
          r,
          n,
          l,
          u,
          s,
          h,
          v,
          B,
          1,
          _,
          M
        )
      ), Qn(t, r, s, !R);
      return;
    }
    Dh(
      t,
      e,
      r,
      n,
      l,
      u,
      s,
      h,
      v
    );
  }
  function My(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if ((n === 0 || n === 11 || n === 15) && e.flags & 16384 && (n = e.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var l = 0; l < n.length; l++) {
          var u = n[l], r = u.getSnapshot;
          u = u.value;
          try {
            if (!be(r(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (n = e.child, e.subtreeFlags & 16384 && n !== null)
        n.return = e, e = n;
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    }
    return !0;
  }
  function Qn(t, e, n, l) {
    e &= ~ao, e &= ~pl, t.suspendedLanes |= e, t.pingedLanes &= ~e, l && (t.warmLanes |= e), l = t.expirationTimes;
    for (var u = e; 0 < u; ) {
      var r = 31 - ve(u), s = 1 << r;
      l[r] = -1, u &= ~s;
    }
    n !== 0 && Bf(t, n, e);
  }
  function wi() {
    return (At & 6) === 0 ? (su(0), !1) : !0;
  }
  function fo() {
    if (pt !== null) {
      if (Ct === 0)
        var t = pt.return;
      else
        t = pt, hn = ol = null, Rc(t), Fl = null, eu = 0, t = pt;
      for (; t !== null; )
        nh(t.alternate, t), t = t.return;
      pt = null;
    }
  }
  function ua(t, e) {
    var n = t.timeoutHandle;
    n !== -1 && (t.timeoutHandle = -1, Ky(n)), n = t.cancelPendingCommit, n !== null && (t.cancelPendingCommit = null, n()), fo(), wt = t, pt = n = fn(t.current, null), vt = e, Ct = 0, xe = null, Gn = !1, ea = Ra(t, e), lo = !1, na = qe = ao = pl = kn = Gt = 0, pe = ou = null, uo = !1, (e & 8) !== 0 && (e |= e & 32);
    var l = t.entangledLanes;
    if (l !== 0)
      for (t = t.entanglements, l &= e; 0 < l; ) {
        var u = 31 - ve(l), r = 1 << u;
        e |= t[u], l &= ~r;
      }
    return Tn = e, li(), n;
  }
  function Ah(t, e) {
    dt = null, C.H = Ei, e === Za || e === di ? (e = ks(), Ct = 3) : e === Ys ? (e = ks(), Ct = 4) : Ct = e === Ld ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, xe = e, pt === null && (Gt = 1, Ri(
      t,
      Ne(e, t.current)
    ));
  }
  function Ch() {
    var t = C.H;
    return C.H = Ei, t === null ? Ei : t;
  }
  function Oh() {
    var t = C.A;
    return C.A = Ry, t;
  }
  function so() {
    Gt = 4, Gn || (vt & 4194048) !== vt && He.current !== null || (ea = !0), (kn & 134217727) === 0 && (pl & 134217727) === 0 || wt === null || Qn(
      wt,
      vt,
      qe,
      !1
    );
  }
  function ho(t, e, n) {
    var l = At;
    At |= 2;
    var u = Ch(), r = Oh();
    (wt !== t || vt !== e) && (Bi = null, ua(t, e)), e = !1;
    var s = Gt;
    t: do
      try {
        if (Ct !== 0 && pt !== null) {
          var h = pt, v = xe;
          switch (Ct) {
            case 8:
              fo(), s = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              He.current === null && (e = !0);
              var R = Ct;
              if (Ct = 0, xe = null, ia(t, h, v, R), n && ea) {
                s = 0;
                break t;
              }
              break;
            default:
              R = Ct, Ct = 0, xe = null, ia(t, h, v, R);
          }
        }
        Dy(), s = Gt;
        break;
      } catch (B) {
        Ah(t, B);
      }
    while (!0);
    return e && t.shellSuspendCounter++, hn = ol = null, At = l, C.H = u, C.A = r, pt === null && (wt = null, vt = 0, li()), s;
  }
  function Dy() {
    for (; pt !== null; ) Rh(pt);
  }
  function zy(t, e) {
    var n = At;
    At |= 2;
    var l = Ch(), u = Oh();
    wt !== t || vt !== e ? (Bi = null, Ui = Je() + 500, ua(t, e)) : ea = Ra(
      t,
      e
    );
    t: do
      try {
        if (Ct !== 0 && pt !== null) {
          e = pt;
          var r = xe;
          e: switch (Ct) {
            case 1:
              Ct = 0, xe = null, ia(t, e, r, 1);
              break;
            case 2:
            case 9:
              if (js(r)) {
                Ct = 0, xe = null, _h(e);
                break;
              }
              e = function() {
                Ct !== 2 && Ct !== 9 || wt !== t || (Ct = 7), tn(t);
              }, r.then(e, e);
              break t;
            case 3:
              Ct = 7;
              break t;
            case 4:
              Ct = 5;
              break t;
            case 7:
              js(r) ? (Ct = 0, xe = null, _h(e)) : (Ct = 0, xe = null, ia(t, e, r, 7));
              break;
            case 5:
              var s = null;
              switch (pt.tag) {
                case 26:
                  s = pt.memoizedState;
                case 5:
                case 27:
                  var h = pt;
                  if (!s || o0(s)) {
                    Ct = 0, xe = null;
                    var v = h.sibling;
                    if (v !== null) pt = v;
                    else {
                      var R = h.return;
                      R !== null ? (pt = R, Hi(R)) : pt = null;
                    }
                    break e;
                  }
              }
              Ct = 0, xe = null, ia(t, e, r, 5);
              break;
            case 6:
              Ct = 0, xe = null, ia(t, e, r, 6);
              break;
            case 8:
              fo(), Gt = 6;
              break t;
            default:
              throw Error(c(462));
          }
        }
        Ny();
        break;
      } catch (B) {
        Ah(t, B);
      }
    while (!0);
    return hn = ol = null, C.H = l, C.A = u, At = n, pt !== null ? 0 : (wt = null, vt = 0, li(), Gt);
  }
  function Ny() {
    for (; pt !== null && !tp(); )
      Rh(pt);
  }
  function Rh(t) {
    var e = th(t.alternate, t, Tn);
    t.memoizedProps = t.pendingProps, e === null ? Hi(t) : pt = e;
  }
  function _h(t) {
    var e = t, n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = $d(
          n,
          e,
          e.pendingProps,
          e.type,
          void 0,
          vt
        );
        break;
      case 11:
        e = $d(
          n,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          vt
        );
        break;
      case 5:
        Rc(e);
      default:
        nh(n, e), e = pt = Ms(e, Tn), e = th(n, e, Tn);
    }
    t.memoizedProps = t.pendingProps, e === null ? Hi(t) : pt = e;
  }
  function ia(t, e, n, l) {
    hn = ol = null, Rc(e), Fl = null, eu = 0;
    var u = e.return;
    try {
      if (Ty(
        t,
        u,
        e,
        n,
        vt
      )) {
        Gt = 1, Ri(
          t,
          Ne(n, t.current)
        ), pt = null;
        return;
      }
    } catch (r) {
      if (u !== null) throw pt = u, r;
      Gt = 1, Ri(
        t,
        Ne(n, t.current)
      ), pt = null;
      return;
    }
    e.flags & 32768 ? (Tt || l === 1 ? t = !0 : ea || (vt & 536870912) !== 0 ? t = !1 : (Gn = t = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = He.current, l !== null && l.tag === 13 && (l.flags |= 16384))), Mh(e, t)) : Hi(e);
  }
  function Hi(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Mh(
          e,
          Gn
        );
        return;
      }
      t = e.return;
      var n = xy(
        e.alternate,
        e,
        Tn
      );
      if (n !== null) {
        pt = n;
        return;
      }
      if (e = e.sibling, e !== null) {
        pt = e;
        return;
      }
      pt = e = t;
    } while (e !== null);
    Gt === 0 && (Gt = 5);
  }
  function Mh(t, e) {
    do {
      var n = Ay(t.alternate, t);
      if (n !== null) {
        n.flags &= 32767, pt = n;
        return;
      }
      if (n = t.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !e && (t = t.sibling, t !== null)) {
        pt = t;
        return;
      }
      pt = t = n;
    } while (t !== null);
    Gt = 6, pt = null;
  }
  function Dh(t, e, n, l, u, r, s, h, v) {
    t.cancelPendingCommit = null;
    do
      qi();
    while (le !== 0);
    if ((At & 6) !== 0) throw Error(c(327));
    if (e !== null) {
      if (e === t.current) throw Error(c(177));
      if (r = e.lanes | e.childLanes, r |= nc, fp(
        t,
        n,
        r,
        s,
        h,
        v
      ), t === wt && (pt = wt = null, vt = 0), la = e, Xn = t, aa = n, ro = r, co = u, Sh = l, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, Hy(Lu, function() {
        return wh(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), l = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || l) {
        l = C.T, C.T = null, u = X.p, X.p = 2, s = At, At |= 4;
        try {
          Cy(t, e, n);
        } finally {
          At = s, X.p = u, C.T = l;
        }
      }
      le = 1, zh(), Nh(), Uh();
    }
  }
  function zh() {
    if (le === 1) {
      le = 0;
      var t = Xn, e = la, n = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || n) {
        n = C.T, C.T = null;
        var l = X.p;
        X.p = 2;
        var u = At;
        At |= 4;
        try {
          hh(e, t);
          var r = Co, s = bs(t.containerInfo), h = r.focusedElem, v = r.selectionRange;
          if (s !== h && h && h.ownerDocument && vs(
            h.ownerDocument.documentElement,
            h
          )) {
            if (v !== null && Fr(h)) {
              var R = v.start, B = v.end;
              if (B === void 0 && (B = R), "selectionStart" in h)
                h.selectionStart = R, h.selectionEnd = Math.min(
                  B,
                  h.value.length
                );
              else {
                var Y = h.ownerDocument || document, _ = Y && Y.defaultView || window;
                if (_.getSelection) {
                  var M = _.getSelection(), ct = h.textContent.length, at = Math.min(v.start, ct), Nt = v.end === void 0 ? at : Math.min(v.end, ct);
                  !M.extend && at > Nt && (s = Nt, Nt = at, at = s);
                  var E = gs(
                    h,
                    at
                  ), T = gs(
                    h,
                    Nt
                  );
                  if (E && T && (M.rangeCount !== 1 || M.anchorNode !== E.node || M.anchorOffset !== E.offset || M.focusNode !== T.node || M.focusOffset !== T.offset)) {
                    var O = Y.createRange();
                    O.setStart(E.node, E.offset), M.removeAllRanges(), at > Nt ? (M.addRange(O), M.extend(T.node, T.offset)) : (O.setEnd(T.node, T.offset), M.addRange(O));
                  }
                }
              }
            }
            for (Y = [], M = h; M = M.parentNode; )
              M.nodeType === 1 && Y.push({
                element: M,
                left: M.scrollLeft,
                top: M.scrollTop
              });
            for (typeof h.focus == "function" && h.focus(), h = 0; h < Y.length; h++) {
              var H = Y[h];
              H.element.scrollLeft = H.left, H.element.scrollTop = H.top;
            }
          }
          Ji = !!Ao, Co = Ao = null;
        } finally {
          At = u, X.p = l, C.T = n;
        }
      }
      t.current = e, le = 2;
    }
  }
  function Nh() {
    if (le === 2) {
      le = 0;
      var t = Xn, e = la, n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        n = C.T, C.T = null;
        var l = X.p;
        X.p = 2;
        var u = At;
        At |= 4;
        try {
          oh(t, e.alternate, e);
        } finally {
          At = u, X.p = l, C.T = n;
        }
      }
      le = 3;
    }
  }
  function Uh() {
    if (le === 4 || le === 3) {
      le = 0, ep();
      var t = Xn, e = la, n = aa, l = Sh;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? le = 5 : (le = 0, la = Xn = null, Bh(t, t.pendingLanes));
      var u = t.pendingLanes;
      if (u === 0 && (Ln = null), Dr(n), e = e.stateNode, ge && typeof ge.onCommitFiberRoot == "function")
        try {
          ge.onCommitFiberRoot(
            Oa,
            e,
            void 0,
            (e.current.flags & 128) === 128
          );
        } catch {
        }
      if (l !== null) {
        e = C.T, u = X.p, X.p = 2, C.T = null;
        try {
          for (var r = t.onRecoverableError, s = 0; s < l.length; s++) {
            var h = l[s];
            r(h.value, {
              componentStack: h.stack
            });
          }
        } finally {
          C.T = e, X.p = u;
        }
      }
      (aa & 3) !== 0 && qi(), tn(t), u = t.pendingLanes, (n & 4194090) !== 0 && (u & 42) !== 0 ? t === oo ? fu++ : (fu = 0, oo = t) : fu = 0, su(0);
    }
  }
  function Bh(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, Qa(e)));
  }
  function qi(t) {
    return zh(), Nh(), Uh(), wh();
  }
  function wh() {
    if (le !== 5) return !1;
    var t = Xn, e = ro;
    ro = 0;
    var n = Dr(aa), l = C.T, u = X.p;
    try {
      X.p = 32 > n ? 32 : n, C.T = null, n = co, co = null;
      var r = Xn, s = aa;
      if (le = 0, la = Xn = null, aa = 0, (At & 6) !== 0) throw Error(c(331));
      var h = At;
      if (At |= 4, vh(r.current), ph(
        r,
        r.current,
        s,
        n
      ), At = h, su(0, !1), ge && typeof ge.onPostCommitFiberRoot == "function")
        try {
          ge.onPostCommitFiberRoot(Oa, r);
        } catch {
        }
      return !0;
    } finally {
      X.p = u, C.T = l, Bh(t, e);
    }
  }
  function Hh(t, e, n) {
    e = Ne(n, e), e = kc(t.stateNode, e, 2), t = Un(t, e, 2), t !== null && (_a(t, 2), tn(t));
  }
  function Bt(t, e, n) {
    if (t.tag === 3)
      Hh(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          Hh(
            e,
            t,
            n
          );
          break;
        } else if (e.tag === 1) {
          var l = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Ln === null || !Ln.has(l))) {
            t = Ne(n, t), n = Gd(2), l = Un(e, n, 2), l !== null && (kd(
              n,
              l,
              e,
              t
            ), _a(l, 2), tn(l));
            break;
          }
        }
        e = e.return;
      }
  }
  function mo(t, e, n) {
    var l = t.pingCache;
    if (l === null) {
      l = t.pingCache = new _y();
      var u = /* @__PURE__ */ new Set();
      l.set(e, u);
    } else
      u = l.get(e), u === void 0 && (u = /* @__PURE__ */ new Set(), l.set(e, u));
    u.has(n) || (lo = !0, u.add(n), t = Uy.bind(null, t, e, n), e.then(t, t));
  }
  function Uy(t, e, n) {
    var l = t.pingCache;
    l !== null && l.delete(e), t.pingedLanes |= t.suspendedLanes & n, t.warmLanes &= ~n, wt === t && (vt & n) === n && (Gt === 4 || Gt === 3 && (vt & 62914560) === vt && 300 > Je() - io ? (At & 2) === 0 && ua(t, 0) : ao |= n, na === vt && (na = 0)), tn(t);
  }
  function qh(t, e) {
    e === 0 && (e = Uf()), t = kl(t, e), t !== null && (_a(t, e), tn(t));
  }
  function By(t) {
    var e = t.memoizedState, n = 0;
    e !== null && (n = e.retryLane), qh(t, n);
  }
  function wy(t, e) {
    var n = 0;
    switch (t.tag) {
      case 13:
        var l = t.stateNode, u = t.memoizedState;
        u !== null && (n = u.retryLane);
        break;
      case 19:
        l = t.stateNode;
        break;
      case 22:
        l = t.stateNode._retryCache;
        break;
      default:
        throw Error(c(314));
    }
    l !== null && l.delete(e), qh(t, n);
  }
  function Hy(t, e) {
    return rn(t, e);
  }
  var Yi = null, ra = null, po = !1, ji = !1, yo = !1, yl = 0;
  function tn(t) {
    t !== ra && t.next === null && (ra === null ? Yi = ra = t : ra = ra.next = t), ji = !0, po || (po = !0, Yy());
  }
  function su(t, e) {
    if (!yo && ji) {
      yo = !0;
      do
        for (var n = !1, l = Yi; l !== null; ) {
          if (t !== 0) {
            var u = l.pendingLanes;
            if (u === 0) var r = 0;
            else {
              var s = l.suspendedLanes, h = l.pingedLanes;
              r = (1 << 31 - ve(42 | t) + 1) - 1, r &= u & ~(s & ~h), r = r & 201326741 ? r & 201326741 | 1 : r ? r | 2 : 0;
            }
            r !== 0 && (n = !0, kh(l, r));
          } else
            r = vt, r = Vu(
              l,
              l === wt ? r : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (r & 3) === 0 || Ra(l, r) || (n = !0, kh(l, r));
          l = l.next;
        }
      while (n);
      yo = !1;
    }
  }
  function qy() {
    Yh();
  }
  function Yh() {
    ji = po = !1;
    var t = 0;
    yl !== 0 && (Zy() && (t = yl), yl = 0);
    for (var e = Je(), n = null, l = Yi; l !== null; ) {
      var u = l.next, r = jh(l, e);
      r === 0 ? (l.next = null, n === null ? Yi = u : n.next = u, u === null && (ra = n)) : (n = l, (t !== 0 || (r & 3) !== 0) && (ji = !0)), l = u;
    }
    su(t);
  }
  function jh(t, e) {
    for (var n = t.suspendedLanes, l = t.pingedLanes, u = t.expirationTimes, r = t.pendingLanes & -62914561; 0 < r; ) {
      var s = 31 - ve(r), h = 1 << s, v = u[s];
      v === -1 ? ((h & n) === 0 || (h & l) !== 0) && (u[s] = op(h, e)) : v <= e && (t.expiredLanes |= h), r &= ~h;
    }
    if (e = wt, n = vt, n = Vu(
      t,
      t === e ? n : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), l = t.callbackNode, n === 0 || t === e && (Ct === 2 || Ct === 9) || t.cancelPendingCommit !== null)
      return l !== null && l !== null && Rr(l), t.callbackNode = null, t.callbackPriority = 0;
    if ((n & 3) === 0 || Ra(t, n)) {
      if (e = n & -n, e === t.callbackPriority) return e;
      switch (l !== null && Rr(l), Dr(n)) {
        case 2:
        case 8:
          n = Df;
          break;
        case 32:
          n = Lu;
          break;
        case 268435456:
          n = zf;
          break;
        default:
          n = Lu;
      }
      return l = Gh.bind(null, t), n = rn(n, l), t.callbackPriority = e, t.callbackNode = n, e;
    }
    return l !== null && l !== null && Rr(l), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function Gh(t, e) {
    if (le !== 0 && le !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var n = t.callbackNode;
    if (qi() && t.callbackNode !== n)
      return null;
    var l = vt;
    return l = Vu(
      t,
      t === wt ? l : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), l === 0 ? null : (Eh(t, l, e), jh(t, Je()), t.callbackNode != null && t.callbackNode === n ? Gh.bind(null, t) : null);
  }
  function kh(t, e) {
    if (qi()) return null;
    Eh(t, e, !0);
  }
  function Yy() {
    $y(function() {
      (At & 6) !== 0 ? rn(
        Mf,
        qy
      ) : Yh();
    });
  }
  function go() {
    return yl === 0 && (yl = Nf()), yl;
  }
  function Lh(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Wu("" + t);
  }
  function Xh(t, e) {
    var n = e.ownerDocument.createElement("input");
    return n.name = e.name, n.value = e.value, t.id && n.setAttribute("form", t.id), e.parentNode.insertBefore(n, e), t = new FormData(t), n.parentNode.removeChild(n), t;
  }
  function jy(t, e, n, l, u) {
    if (e === "submit" && n && n.stateNode === u) {
      var r = Lh(
        (u[se] || null).action
      ), s = l.submitter;
      s && (e = (e = s[se] || null) ? Lh(e.formAction) : s.getAttribute("formAction"), e !== null && (r = e, s = null));
      var h = new ti(
        "action",
        "action",
        null,
        l,
        u
      );
      t.push({
        event: h,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (l.defaultPrevented) {
                if (yl !== 0) {
                  var v = s ? Xh(u, s) : new FormData(u);
                  Hc(
                    n,
                    {
                      pending: !0,
                      data: v,
                      method: u.method,
                      action: r
                    },
                    null,
                    v
                  );
                }
              } else
                typeof r == "function" && (h.preventDefault(), v = s ? Xh(u, s) : new FormData(u), Hc(
                  n,
                  {
                    pending: !0,
                    data: v,
                    method: u.method,
                    action: r
                  },
                  r,
                  v
                ));
            },
            currentTarget: u
          }
        ]
      });
    }
  }
  for (var vo = 0; vo < ec.length; vo++) {
    var bo = ec[vo], Gy = bo.toLowerCase(), ky = bo[0].toUpperCase() + bo.slice(1);
    Xe(
      Gy,
      "on" + ky
    );
  }
  Xe(Es, "onAnimationEnd"), Xe(xs, "onAnimationIteration"), Xe(As, "onAnimationStart"), Xe("dblclick", "onDoubleClick"), Xe("focusin", "onFocus"), Xe("focusout", "onBlur"), Xe(ay, "onTransitionRun"), Xe(uy, "onTransitionStart"), Xe(iy, "onTransitionCancel"), Xe(Cs, "onTransitionEnd"), zl("onMouseEnter", ["mouseout", "mouseover"]), zl("onMouseLeave", ["mouseout", "mouseover"]), zl("onPointerEnter", ["pointerout", "pointerover"]), zl("onPointerLeave", ["pointerout", "pointerover"]), tl(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), tl(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), tl("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), tl(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), tl(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), tl(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var du = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Ly = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(du)
  );
  function Qh(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var l = t[n], u = l.event;
      l = l.listeners;
      t: {
        var r = void 0;
        if (e)
          for (var s = l.length - 1; 0 <= s; s--) {
            var h = l[s], v = h.instance, R = h.currentTarget;
            if (h = h.listener, v !== r && u.isPropagationStopped())
              break t;
            r = h, u.currentTarget = R;
            try {
              r(u);
            } catch (B) {
              Oi(B);
            }
            u.currentTarget = null, r = v;
          }
        else
          for (s = 0; s < l.length; s++) {
            if (h = l[s], v = h.instance, R = h.currentTarget, h = h.listener, v !== r && u.isPropagationStopped())
              break t;
            r = h, u.currentTarget = R;
            try {
              r(u);
            } catch (B) {
              Oi(B);
            }
            u.currentTarget = null, r = v;
          }
      }
    }
  }
  function yt(t, e) {
    var n = e[zr];
    n === void 0 && (n = e[zr] = /* @__PURE__ */ new Set());
    var l = t + "__bubble";
    n.has(l) || (Vh(e, t, 2, !1), n.add(l));
  }
  function So(t, e, n) {
    var l = 0;
    e && (l |= 4), Vh(
      n,
      t,
      l,
      e
    );
  }
  var Gi = "_reactListening" + Math.random().toString(36).slice(2);
  function To(t) {
    if (!t[Gi]) {
      t[Gi] = !0, Yf.forEach(function(n) {
        n !== "selectionchange" && (Ly.has(n) || So(n, !1, t), So(n, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Gi] || (e[Gi] = !0, So("selectionchange", !1, e));
    }
  }
  function Vh(t, e, n, l) {
    switch (p0(e)) {
      case 2:
        var u = pg;
        break;
      case 8:
        u = yg;
        break;
      default:
        u = wo;
    }
    n = u.bind(
      null,
      e,
      n,
      t
    ), u = void 0, !Lr || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (u = !0), l ? u !== void 0 ? t.addEventListener(e, n, {
      capture: !0,
      passive: u
    }) : t.addEventListener(e, n, !0) : u !== void 0 ? t.addEventListener(e, n, {
      passive: u
    }) : t.addEventListener(e, n, !1);
  }
  function Eo(t, e, n, l, u) {
    var r = l;
    if ((e & 1) === 0 && (e & 2) === 0 && l !== null)
      t: for (; ; ) {
        if (l === null) return;
        var s = l.tag;
        if (s === 3 || s === 4) {
          var h = l.stateNode.containerInfo;
          if (h === u) break;
          if (s === 4)
            for (s = l.return; s !== null; ) {
              var v = s.tag;
              if ((v === 3 || v === 4) && s.stateNode.containerInfo === u)
                return;
              s = s.return;
            }
          for (; h !== null; ) {
            if (s = _l(h), s === null) return;
            if (v = s.tag, v === 5 || v === 6 || v === 26 || v === 27) {
              l = r = s;
              continue t;
            }
            h = h.parentNode;
          }
        }
        l = l.return;
      }
    Pf(function() {
      var R = r, B = Gr(n), Y = [];
      t: {
        var _ = Os.get(t);
        if (_ !== void 0) {
          var M = ti, ct = t;
          switch (t) {
            case "keypress":
              if (Pu(n) === 0) break t;
            case "keydown":
            case "keyup":
              M = Hp;
              break;
            case "focusin":
              ct = "focus", M = Zr;
              break;
            case "focusout":
              ct = "blur", M = Zr;
              break;
            case "beforeblur":
            case "afterblur":
              M = Zr;
              break;
            case "click":
              if (n.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              M = es;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              M = Ap;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              M = jp;
              break;
            case Es:
            case xs:
            case As:
              M = Rp;
              break;
            case Cs:
              M = kp;
              break;
            case "scroll":
            case "scrollend":
              M = Ep;
              break;
            case "wheel":
              M = Xp;
              break;
            case "copy":
            case "cut":
            case "paste":
              M = Mp;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              M = ls;
              break;
            case "toggle":
            case "beforetoggle":
              M = Vp;
          }
          var at = (e & 4) !== 0, Nt = !at && (t === "scroll" || t === "scrollend"), E = at ? _ !== null ? _ + "Capture" : null : _;
          at = [];
          for (var T = R, O; T !== null; ) {
            var H = T;
            if (O = H.stateNode, H = H.tag, H !== 5 && H !== 26 && H !== 27 || O === null || E === null || (H = za(T, E), H != null && at.push(
              hu(T, H, O)
            )), Nt) break;
            T = T.return;
          }
          0 < at.length && (_ = new M(
            _,
            ct,
            null,
            n,
            B
          ), Y.push({ event: _, listeners: at }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (_ = t === "mouseover" || t === "pointerover", M = t === "mouseout" || t === "pointerout", _ && n !== jr && (ct = n.relatedTarget || n.fromElement) && (_l(ct) || ct[Rl]))
            break t;
          if ((M || _) && (_ = B.window === B ? B : (_ = B.ownerDocument) ? _.defaultView || _.parentWindow : window, M ? (ct = n.relatedTarget || n.toElement, M = R, ct = ct ? _l(ct) : null, ct !== null && (Nt = d(ct), at = ct.tag, ct !== Nt || at !== 5 && at !== 27 && at !== 6) && (ct = null)) : (M = null, ct = R), M !== ct)) {
            if (at = es, H = "onMouseLeave", E = "onMouseEnter", T = "mouse", (t === "pointerout" || t === "pointerover") && (at = ls, H = "onPointerLeave", E = "onPointerEnter", T = "pointer"), Nt = M == null ? _ : Da(M), O = ct == null ? _ : Da(ct), _ = new at(
              H,
              T + "leave",
              M,
              n,
              B
            ), _.target = Nt, _.relatedTarget = O, H = null, _l(B) === R && (at = new at(
              E,
              T + "enter",
              ct,
              n,
              B
            ), at.target = O, at.relatedTarget = Nt, H = at), Nt = H, M && ct)
              e: {
                for (at = M, E = ct, T = 0, O = at; O; O = ca(O))
                  T++;
                for (O = 0, H = E; H; H = ca(H))
                  O++;
                for (; 0 < T - O; )
                  at = ca(at), T--;
                for (; 0 < O - T; )
                  E = ca(E), O--;
                for (; T--; ) {
                  if (at === E || E !== null && at === E.alternate)
                    break e;
                  at = ca(at), E = ca(E);
                }
                at = null;
              }
            else at = null;
            M !== null && Zh(
              Y,
              _,
              M,
              at,
              !1
            ), ct !== null && Nt !== null && Zh(
              Y,
              Nt,
              ct,
              at,
              !0
            );
          }
        }
        t: {
          if (_ = R ? Da(R) : window, M = _.nodeName && _.nodeName.toLowerCase(), M === "select" || M === "input" && _.type === "file")
            var tt = ss;
          else if (os(_))
            if (ds)
              tt = ey;
            else {
              tt = Ip;
              var ht = Pp;
            }
          else
            M = _.nodeName, !M || M.toLowerCase() !== "input" || _.type !== "checkbox" && _.type !== "radio" ? R && Yr(R.elementType) && (tt = ss) : tt = ty;
          if (tt && (tt = tt(t, R))) {
            fs(
              Y,
              tt,
              n,
              B
            );
            break t;
          }
          ht && ht(t, _, R), t === "focusout" && R && _.type === "number" && R.memoizedProps.value != null && qr(_, "number", _.value);
        }
        switch (ht = R ? Da(R) : window, t) {
          case "focusin":
            (os(ht) || ht.contentEditable === "true") && (Yl = ht, Pr = R, ja = null);
            break;
          case "focusout":
            ja = Pr = Yl = null;
            break;
          case "mousedown":
            Ir = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ir = !1, Ss(Y, n, B);
            break;
          case "selectionchange":
            if (ly) break;
          case "keydown":
          case "keyup":
            Ss(Y, n, B);
        }
        var lt;
        if ($r)
          t: {
            switch (t) {
              case "compositionstart":
                var ut = "onCompositionStart";
                break t;
              case "compositionend":
                ut = "onCompositionEnd";
                break t;
              case "compositionupdate":
                ut = "onCompositionUpdate";
                break t;
            }
            ut = void 0;
          }
        else
          ql ? rs(t, n) && (ut = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (ut = "onCompositionStart");
        ut && (as && n.locale !== "ko" && (ql || ut !== "onCompositionStart" ? ut === "onCompositionEnd" && ql && (lt = If()) : (Mn = B, Xr = "value" in Mn ? Mn.value : Mn.textContent, ql = !0)), ht = ki(R, ut), 0 < ht.length && (ut = new ns(
          ut,
          t,
          null,
          n,
          B
        ), Y.push({ event: ut, listeners: ht }), lt ? ut.data = lt : (lt = cs(n), lt !== null && (ut.data = lt)))), (lt = Kp ? $p(t, n) : Jp(t, n)) && (ut = ki(R, "onBeforeInput"), 0 < ut.length && (ht = new ns(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          B
        ), Y.push({
          event: ht,
          listeners: ut
        }), ht.data = lt)), jy(
          Y,
          t,
          R,
          n,
          B
        );
      }
      Qh(Y, e);
    });
  }
  function hu(t, e, n) {
    return {
      instance: t,
      listener: e,
      currentTarget: n
    };
  }
  function ki(t, e) {
    for (var n = e + "Capture", l = []; t !== null; ) {
      var u = t, r = u.stateNode;
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || r === null || (u = za(t, n), u != null && l.unshift(
        hu(t, u, r)
      ), u = za(t, e), u != null && l.push(
        hu(t, u, r)
      )), t.tag === 3) return l;
      t = t.return;
    }
    return [];
  }
  function ca(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Zh(t, e, n, l, u) {
    for (var r = e._reactName, s = []; n !== null && n !== l; ) {
      var h = n, v = h.alternate, R = h.stateNode;
      if (h = h.tag, v !== null && v === l) break;
      h !== 5 && h !== 26 && h !== 27 || R === null || (v = R, u ? (R = za(n, r), R != null && s.unshift(
        hu(n, R, v)
      )) : u || (R = za(n, r), R != null && s.push(
        hu(n, R, v)
      ))), n = n.return;
    }
    s.length !== 0 && t.push({ event: e, listeners: s });
  }
  var Xy = /\r\n?/g, Qy = /\u0000|\uFFFD/g;
  function Kh(t) {
    return (typeof t == "string" ? t : "" + t).replace(Xy, `
`).replace(Qy, "");
  }
  function $h(t, e) {
    return e = Kh(e), Kh(t) === e;
  }
  function Li() {
  }
  function zt(t, e, n, l, u, r) {
    switch (n) {
      case "children":
        typeof l == "string" ? e === "body" || e === "textarea" && l === "" || Bl(t, l) : (typeof l == "number" || typeof l == "bigint") && e !== "body" && Bl(t, "" + l);
        break;
      case "className":
        Ku(t, "class", l);
        break;
      case "tabIndex":
        Ku(t, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ku(t, n, l);
        break;
      case "style":
        Wf(t, l, r);
        break;
      case "data":
        if (e !== "object") {
          Ku(t, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (e !== "a" || n !== "href")) {
          t.removeAttribute(n);
          break;
        }
        if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
          t.removeAttribute(n);
          break;
        }
        l = Wu("" + l), t.setAttribute(n, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          t.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof r == "function" && (n === "formAction" ? (e !== "input" && zt(t, e, "name", u.name, u, null), zt(
            t,
            e,
            "formEncType",
            u.formEncType,
            u,
            null
          ), zt(
            t,
            e,
            "formMethod",
            u.formMethod,
            u,
            null
          ), zt(
            t,
            e,
            "formTarget",
            u.formTarget,
            u,
            null
          )) : (zt(t, e, "encType", u.encType, u, null), zt(t, e, "method", u.method, u, null), zt(t, e, "target", u.target, u, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          t.removeAttribute(n);
          break;
        }
        l = Wu("" + l), t.setAttribute(n, l);
        break;
      case "onClick":
        l != null && (t.onclick = Li);
        break;
      case "onScroll":
        l != null && yt("scroll", t);
        break;
      case "onScrollEnd":
        l != null && yt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(c(61));
          if (n = l.__html, n != null) {
            if (u.children != null) throw Error(c(60));
            t.innerHTML = n;
          }
        }
        break;
      case "multiple":
        t.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        t.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        n = Wu("" + l), t.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          n
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(n, "" + l) : t.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(n, "") : t.removeAttribute(n);
        break;
      case "capture":
      case "download":
        l === !0 ? t.setAttribute(n, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(n, l) : t.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? t.setAttribute(n, l) : t.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? t.removeAttribute(n) : t.setAttribute(n, l);
        break;
      case "popover":
        yt("beforetoggle", t), yt("toggle", t), Zu(t, "popover", l);
        break;
      case "xlinkActuate":
        cn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          l
        );
        break;
      case "xlinkArcrole":
        cn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          l
        );
        break;
      case "xlinkRole":
        cn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          l
        );
        break;
      case "xlinkShow":
        cn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          l
        );
        break;
      case "xlinkTitle":
        cn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          l
        );
        break;
      case "xlinkType":
        cn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          l
        );
        break;
      case "xmlBase":
        cn(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          l
        );
        break;
      case "xmlLang":
        cn(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          l
        );
        break;
      case "xmlSpace":
        cn(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          l
        );
        break;
      case "is":
        Zu(t, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = Sp.get(n) || n, Zu(t, n, l));
    }
  }
  function xo(t, e, n, l, u, r) {
    switch (n) {
      case "style":
        Wf(t, l, r);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(c(61));
          if (n = l.__html, n != null) {
            if (u.children != null) throw Error(c(60));
            t.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof l == "string" ? Bl(t, l) : (typeof l == "number" || typeof l == "bigint") && Bl(t, "" + l);
        break;
      case "onScroll":
        l != null && yt("scroll", t);
        break;
      case "onScrollEnd":
        l != null && yt("scrollend", t);
        break;
      case "onClick":
        l != null && (t.onclick = Li);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!jf.hasOwnProperty(n))
          t: {
            if (n[0] === "o" && n[1] === "n" && (u = n.endsWith("Capture"), e = n.slice(2, u ? n.length - 7 : void 0), r = t[se] || null, r = r != null ? r[n] : null, typeof r == "function" && t.removeEventListener(e, r, u), typeof l == "function")) {
              typeof r != "function" && r !== null && (n in t ? t[n] = null : t.hasAttribute(n) && t.removeAttribute(n)), t.addEventListener(e, l, u);
              break t;
            }
            n in t ? t[n] = l : l === !0 ? t.setAttribute(n, "") : Zu(t, n, l);
          }
    }
  }
  function ae(t, e, n) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        yt("error", t), yt("load", t);
        var l = !1, u = !1, r;
        for (r in n)
          if (n.hasOwnProperty(r)) {
            var s = n[r];
            if (s != null)
              switch (r) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(c(137, e));
                default:
                  zt(t, e, r, s, n, null);
              }
          }
        u && zt(t, e, "srcSet", n.srcSet, n, null), l && zt(t, e, "src", n.src, n, null);
        return;
      case "input":
        yt("invalid", t);
        var h = r = s = u = null, v = null, R = null;
        for (l in n)
          if (n.hasOwnProperty(l)) {
            var B = n[l];
            if (B != null)
              switch (l) {
                case "name":
                  u = B;
                  break;
                case "type":
                  s = B;
                  break;
                case "checked":
                  v = B;
                  break;
                case "defaultChecked":
                  R = B;
                  break;
                case "value":
                  r = B;
                  break;
                case "defaultValue":
                  h = B;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (B != null)
                    throw Error(c(137, e));
                  break;
                default:
                  zt(t, e, l, B, n, null);
              }
          }
        Zf(
          t,
          r,
          h,
          v,
          R,
          s,
          u,
          !1
        ), $u(t);
        return;
      case "select":
        yt("invalid", t), l = s = r = null;
        for (u in n)
          if (n.hasOwnProperty(u) && (h = n[u], h != null))
            switch (u) {
              case "value":
                r = h;
                break;
              case "defaultValue":
                s = h;
                break;
              case "multiple":
                l = h;
              default:
                zt(t, e, u, h, n, null);
            }
        e = r, n = s, t.multiple = !!l, e != null ? Ul(t, !!l, e, !1) : n != null && Ul(t, !!l, n, !0);
        return;
      case "textarea":
        yt("invalid", t), r = u = l = null;
        for (s in n)
          if (n.hasOwnProperty(s) && (h = n[s], h != null))
            switch (s) {
              case "value":
                l = h;
                break;
              case "defaultValue":
                u = h;
                break;
              case "children":
                r = h;
                break;
              case "dangerouslySetInnerHTML":
                if (h != null) throw Error(c(91));
                break;
              default:
                zt(t, e, s, h, n, null);
            }
        $f(t, l, u, r), $u(t);
        return;
      case "option":
        for (v in n)
          if (n.hasOwnProperty(v) && (l = n[v], l != null))
            switch (v) {
              case "selected":
                t.selected = l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                zt(t, e, v, l, n, null);
            }
        return;
      case "dialog":
        yt("beforetoggle", t), yt("toggle", t), yt("cancel", t), yt("close", t);
        break;
      case "iframe":
      case "object":
        yt("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < du.length; l++)
          yt(du[l], t);
        break;
      case "image":
        yt("error", t), yt("load", t);
        break;
      case "details":
        yt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        yt("error", t), yt("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (R in n)
          if (n.hasOwnProperty(R) && (l = n[R], l != null))
            switch (R) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(c(137, e));
              default:
                zt(t, e, R, l, n, null);
            }
        return;
      default:
        if (Yr(e)) {
          for (B in n)
            n.hasOwnProperty(B) && (l = n[B], l !== void 0 && xo(
              t,
              e,
              B,
              l,
              n,
              void 0
            ));
          return;
        }
    }
    for (h in n)
      n.hasOwnProperty(h) && (l = n[h], l != null && zt(t, e, h, l, n, null));
  }
  function Vy(t, e, n, l) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null, r = null, s = null, h = null, v = null, R = null, B = null;
        for (M in n) {
          var Y = n[M];
          if (n.hasOwnProperty(M) && Y != null)
            switch (M) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                v = Y;
              default:
                l.hasOwnProperty(M) || zt(t, e, M, null, l, Y);
            }
        }
        for (var _ in l) {
          var M = l[_];
          if (Y = n[_], l.hasOwnProperty(_) && (M != null || Y != null))
            switch (_) {
              case "type":
                r = M;
                break;
              case "name":
                u = M;
                break;
              case "checked":
                R = M;
                break;
              case "defaultChecked":
                B = M;
                break;
              case "value":
                s = M;
                break;
              case "defaultValue":
                h = M;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (M != null)
                  throw Error(c(137, e));
                break;
              default:
                M !== Y && zt(
                  t,
                  e,
                  _,
                  M,
                  l,
                  Y
                );
            }
        }
        Hr(
          t,
          s,
          h,
          v,
          R,
          B,
          r,
          u
        );
        return;
      case "select":
        M = s = h = _ = null;
        for (r in n)
          if (v = n[r], n.hasOwnProperty(r) && v != null)
            switch (r) {
              case "value":
                break;
              case "multiple":
                M = v;
              default:
                l.hasOwnProperty(r) || zt(
                  t,
                  e,
                  r,
                  null,
                  l,
                  v
                );
            }
        for (u in l)
          if (r = l[u], v = n[u], l.hasOwnProperty(u) && (r != null || v != null))
            switch (u) {
              case "value":
                _ = r;
                break;
              case "defaultValue":
                h = r;
                break;
              case "multiple":
                s = r;
              default:
                r !== v && zt(
                  t,
                  e,
                  u,
                  r,
                  l,
                  v
                );
            }
        e = h, n = s, l = M, _ != null ? Ul(t, !!n, _, !1) : !!l != !!n && (e != null ? Ul(t, !!n, e, !0) : Ul(t, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        M = _ = null;
        for (h in n)
          if (u = n[h], n.hasOwnProperty(h) && u != null && !l.hasOwnProperty(h))
            switch (h) {
              case "value":
                break;
              case "children":
                break;
              default:
                zt(t, e, h, null, l, u);
            }
        for (s in l)
          if (u = l[s], r = n[s], l.hasOwnProperty(s) && (u != null || r != null))
            switch (s) {
              case "value":
                _ = u;
                break;
              case "defaultValue":
                M = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(c(91));
                break;
              default:
                u !== r && zt(t, e, s, u, l, r);
            }
        Kf(t, _, M);
        return;
      case "option":
        for (var ct in n)
          if (_ = n[ct], n.hasOwnProperty(ct) && _ != null && !l.hasOwnProperty(ct))
            switch (ct) {
              case "selected":
                t.selected = !1;
                break;
              default:
                zt(
                  t,
                  e,
                  ct,
                  null,
                  l,
                  _
                );
            }
        for (v in l)
          if (_ = l[v], M = n[v], l.hasOwnProperty(v) && _ !== M && (_ != null || M != null))
            switch (v) {
              case "selected":
                t.selected = _ && typeof _ != "function" && typeof _ != "symbol";
                break;
              default:
                zt(
                  t,
                  e,
                  v,
                  _,
                  l,
                  M
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var at in n)
          _ = n[at], n.hasOwnProperty(at) && _ != null && !l.hasOwnProperty(at) && zt(t, e, at, null, l, _);
        for (R in l)
          if (_ = l[R], M = n[R], l.hasOwnProperty(R) && _ !== M && (_ != null || M != null))
            switch (R) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (_ != null)
                  throw Error(c(137, e));
                break;
              default:
                zt(
                  t,
                  e,
                  R,
                  _,
                  l,
                  M
                );
            }
        return;
      default:
        if (Yr(e)) {
          for (var Nt in n)
            _ = n[Nt], n.hasOwnProperty(Nt) && _ !== void 0 && !l.hasOwnProperty(Nt) && xo(
              t,
              e,
              Nt,
              void 0,
              l,
              _
            );
          for (B in l)
            _ = l[B], M = n[B], !l.hasOwnProperty(B) || _ === M || _ === void 0 && M === void 0 || xo(
              t,
              e,
              B,
              _,
              l,
              M
            );
          return;
        }
    }
    for (var E in n)
      _ = n[E], n.hasOwnProperty(E) && _ != null && !l.hasOwnProperty(E) && zt(t, e, E, null, l, _);
    for (Y in l)
      _ = l[Y], M = n[Y], !l.hasOwnProperty(Y) || _ === M || _ == null && M == null || zt(t, e, Y, _, l, M);
  }
  var Ao = null, Co = null;
  function Xi(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Jh(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Wh(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function Oo(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var Ro = null;
  function Zy() {
    var t = window.event;
    return t && t.type === "popstate" ? t === Ro ? !1 : (Ro = t, !0) : (Ro = null, !1);
  }
  var Fh = typeof setTimeout == "function" ? setTimeout : void 0, Ky = typeof clearTimeout == "function" ? clearTimeout : void 0, Ph = typeof Promise == "function" ? Promise : void 0, $y = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ph < "u" ? function(t) {
    return Ph.resolve(null).then(t).catch(Jy);
  } : Fh;
  function Jy(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Vn(t) {
    return t === "head";
  }
  function Ih(t, e) {
    var n = e, l = 0, u = 0;
    do {
      var r = n.nextSibling;
      if (t.removeChild(n), r && r.nodeType === 8)
        if (n = r.data, n === "/$") {
          if (0 < l && 8 > l) {
            n = l;
            var s = t.ownerDocument;
            if (n & 1 && mu(s.documentElement), n & 2 && mu(s.body), n & 4)
              for (n = s.head, mu(n), s = n.firstChild; s; ) {
                var h = s.nextSibling, v = s.nodeName;
                s[Ma] || v === "SCRIPT" || v === "STYLE" || v === "LINK" && s.rel.toLowerCase() === "stylesheet" || n.removeChild(s), s = h;
              }
          }
          if (u === 0) {
            t.removeChild(r), Eu(e);
            return;
          }
          u--;
        } else
          n === "$" || n === "$?" || n === "$!" ? u++ : l = n.charCodeAt(0) - 48;
      else l = 0;
      n = r;
    } while (n);
    Eu(e);
  }
  function _o(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (e = e.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          _o(n), Nr(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(n);
    }
  }
  function Wy(t, e, n, l) {
    for (; t.nodeType === 1; ) {
      var u = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!l && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (l) {
        if (!t[Ma])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (r = t.getAttribute("rel"), r === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (r !== u.rel || t.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || t.getAttribute("title") !== (u.title == null ? null : u.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (r = t.getAttribute("src"), (r !== (u.src == null ? null : u.src) || t.getAttribute("type") !== (u.type == null ? null : u.type) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && r && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var r = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && t.getAttribute("name") === r)
          return t;
      } else return t;
      if (t = Ve(t.nextSibling), t === null) break;
    }
    return null;
  }
  function Fy(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = Ve(t.nextSibling), t === null)) return null;
    return t;
  }
  function Mo(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState === "complete";
  }
  function Py(t, e) {
    var n = t.ownerDocument;
    if (t.data !== "$?" || n.readyState === "complete")
      e();
    else {
      var l = function() {
        e(), n.removeEventListener("DOMContentLoaded", l);
      };
      n.addEventListener("DOMContentLoaded", l), t._reactRetry = l;
    }
  }
  function Ve(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "F!" || e === "F")
          break;
        if (e === "/$") return null;
      }
    }
    return t;
  }
  var Do = null;
  function t0(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (e === 0) return t;
          e--;
        } else n === "/$" && e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function e0(t, e, n) {
    switch (e = Xi(n), t) {
      case "html":
        if (t = e.documentElement, !t) throw Error(c(452));
        return t;
      case "head":
        if (t = e.head, !t) throw Error(c(453));
        return t;
      case "body":
        if (t = e.body, !t) throw Error(c(454));
        return t;
      default:
        throw Error(c(451));
    }
  }
  function mu(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    Nr(t);
  }
  var Ye = /* @__PURE__ */ new Map(), n0 = /* @__PURE__ */ new Set();
  function Qi(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var En = X.d;
  X.d = {
    f: Iy,
    r: tg,
    D: eg,
    C: ng,
    L: lg,
    m: ag,
    X: ig,
    S: ug,
    M: rg
  };
  function Iy() {
    var t = En.f(), e = wi();
    return t || e;
  }
  function tg(t) {
    var e = Ml(t);
    e !== null && e.tag === 5 && e.type === "form" ? Ed(e) : En.r(t);
  }
  var oa = typeof document > "u" ? null : document;
  function l0(t, e, n) {
    var l = oa;
    if (l && typeof e == "string" && e) {
      var u = ze(e);
      u = 'link[rel="' + t + '"][href="' + u + '"]', typeof n == "string" && (u += '[crossorigin="' + n + '"]'), n0.has(u) || (n0.add(u), t = { rel: t, crossOrigin: n, href: e }, l.querySelector(u) === null && (e = l.createElement("link"), ae(e, "link", t), Ft(e), l.head.appendChild(e)));
    }
  }
  function eg(t) {
    En.D(t), l0("dns-prefetch", t, null);
  }
  function ng(t, e) {
    En.C(t, e), l0("preconnect", t, e);
  }
  function lg(t, e, n) {
    En.L(t, e, n);
    var l = oa;
    if (l && t && e) {
      var u = 'link[rel="preload"][as="' + ze(e) + '"]';
      e === "image" && n && n.imageSrcSet ? (u += '[imagesrcset="' + ze(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (u += '[imagesizes="' + ze(
        n.imageSizes
      ) + '"]')) : u += '[href="' + ze(t) + '"]';
      var r = u;
      switch (e) {
        case "style":
          r = fa(t);
          break;
        case "script":
          r = sa(t);
      }
      Ye.has(r) || (t = x(
        {
          rel: "preload",
          href: e === "image" && n && n.imageSrcSet ? void 0 : t,
          as: e
        },
        n
      ), Ye.set(r, t), l.querySelector(u) !== null || e === "style" && l.querySelector(pu(r)) || e === "script" && l.querySelector(yu(r)) || (e = l.createElement("link"), ae(e, "link", t), Ft(e), l.head.appendChild(e)));
    }
  }
  function ag(t, e) {
    En.m(t, e);
    var n = oa;
    if (n && t) {
      var l = e && typeof e.as == "string" ? e.as : "script", u = 'link[rel="modulepreload"][as="' + ze(l) + '"][href="' + ze(t) + '"]', r = u;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          r = sa(t);
      }
      if (!Ye.has(r) && (t = x({ rel: "modulepreload", href: t }, e), Ye.set(r, t), n.querySelector(u) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(yu(r)))
              return;
        }
        l = n.createElement("link"), ae(l, "link", t), Ft(l), n.head.appendChild(l);
      }
    }
  }
  function ug(t, e, n) {
    En.S(t, e, n);
    var l = oa;
    if (l && t) {
      var u = Dl(l).hoistableStyles, r = fa(t);
      e = e || "default";
      var s = u.get(r);
      if (!s) {
        var h = { loading: 0, preload: null };
        if (s = l.querySelector(
          pu(r)
        ))
          h.loading = 5;
        else {
          t = x(
            { rel: "stylesheet", href: t, "data-precedence": e },
            n
          ), (n = Ye.get(r)) && zo(t, n);
          var v = s = l.createElement("link");
          Ft(v), ae(v, "link", t), v._p = new Promise(function(R, B) {
            v.onload = R, v.onerror = B;
          }), v.addEventListener("load", function() {
            h.loading |= 1;
          }), v.addEventListener("error", function() {
            h.loading |= 2;
          }), h.loading |= 4, Vi(s, e, l);
        }
        s = {
          type: "stylesheet",
          instance: s,
          count: 1,
          state: h
        }, u.set(r, s);
      }
    }
  }
  function ig(t, e) {
    En.X(t, e);
    var n = oa;
    if (n && t) {
      var l = Dl(n).hoistableScripts, u = sa(t), r = l.get(u);
      r || (r = n.querySelector(yu(u)), r || (t = x({ src: t, async: !0 }, e), (e = Ye.get(u)) && No(t, e), r = n.createElement("script"), Ft(r), ae(r, "link", t), n.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, l.set(u, r));
    }
  }
  function rg(t, e) {
    En.M(t, e);
    var n = oa;
    if (n && t) {
      var l = Dl(n).hoistableScripts, u = sa(t), r = l.get(u);
      r || (r = n.querySelector(yu(u)), r || (t = x({ src: t, async: !0, type: "module" }, e), (e = Ye.get(u)) && No(t, e), r = n.createElement("script"), Ft(r), ae(r, "link", t), n.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, l.set(u, r));
    }
  }
  function a0(t, e, n, l) {
    var u = (u = rt.current) ? Qi(u) : null;
    if (!u) throw Error(c(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (e = fa(n.href), n = Dl(
          u
        ).hoistableStyles, l = n.get(e), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(e, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          t = fa(n.href);
          var r = Dl(
            u
          ).hoistableStyles, s = r.get(t);
          if (s || (u = u.ownerDocument || u, s = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, r.set(t, s), (r = u.querySelector(
            pu(t)
          )) && !r._p && (s.instance = r, s.state.loading = 5), Ye.has(t) || (n = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, Ye.set(t, n), r || cg(
            u,
            t,
            n,
            s.state
          ))), e && l === null)
            throw Error(c(528, ""));
          return s;
        }
        if (e && l !== null)
          throw Error(c(529, ""));
        return null;
      case "script":
        return e = n.async, n = n.src, typeof n == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = sa(n), n = Dl(
          u
        ).hoistableScripts, l = n.get(e), l || (l = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, n.set(e, l)), l) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(c(444, t));
    }
  }
  function fa(t) {
    return 'href="' + ze(t) + '"';
  }
  function pu(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function u0(t) {
    return x({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function cg(t, e, n, l) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? l.loading = 1 : (e = t.createElement("link"), l.preload = e, e.addEventListener("load", function() {
      return l.loading |= 1;
    }), e.addEventListener("error", function() {
      return l.loading |= 2;
    }), ae(e, "link", n), Ft(e), t.head.appendChild(e));
  }
  function sa(t) {
    return '[src="' + ze(t) + '"]';
  }
  function yu(t) {
    return "script[async]" + t;
  }
  function i0(t, e, n) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var l = t.querySelector(
            'style[data-href~="' + ze(n.href) + '"]'
          );
          if (l)
            return e.instance = l, Ft(l), l;
          var u = x({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return l = (t.ownerDocument || t).createElement(
            "style"
          ), Ft(l), ae(l, "style", u), Vi(l, n.precedence, t), e.instance = l;
        case "stylesheet":
          u = fa(n.href);
          var r = t.querySelector(
            pu(u)
          );
          if (r)
            return e.state.loading |= 4, e.instance = r, Ft(r), r;
          l = u0(n), (u = Ye.get(u)) && zo(l, u), r = (t.ownerDocument || t).createElement("link"), Ft(r);
          var s = r;
          return s._p = new Promise(function(h, v) {
            s.onload = h, s.onerror = v;
          }), ae(r, "link", l), e.state.loading |= 4, Vi(r, n.precedence, t), e.instance = r;
        case "script":
          return r = sa(n.src), (u = t.querySelector(
            yu(r)
          )) ? (e.instance = u, Ft(u), u) : (l = n, (u = Ye.get(r)) && (l = x({}, n), No(l, u)), t = t.ownerDocument || t, u = t.createElement("script"), Ft(u), ae(u, "link", l), t.head.appendChild(u), e.instance = u);
        case "void":
          return null;
        default:
          throw Error(c(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (l = e.instance, e.state.loading |= 4, Vi(l, n.precedence, t));
    return e.instance;
  }
  function Vi(t, e, n) {
    for (var l = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), u = l.length ? l[l.length - 1] : null, r = u, s = 0; s < l.length; s++) {
      var h = l[s];
      if (h.dataset.precedence === e) r = h;
      else if (r !== u) break;
    }
    r ? r.parentNode.insertBefore(t, r.nextSibling) : (e = n.nodeType === 9 ? n.head : n, e.insertBefore(t, e.firstChild));
  }
  function zo(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function No(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var Zi = null;
  function r0(t, e, n) {
    if (Zi === null) {
      var l = /* @__PURE__ */ new Map(), u = Zi = /* @__PURE__ */ new Map();
      u.set(n, l);
    } else
      u = Zi, l = u.get(n), l || (l = /* @__PURE__ */ new Map(), u.set(n, l));
    if (l.has(t)) return l;
    for (l.set(t, null), n = n.getElementsByTagName(t), u = 0; u < n.length; u++) {
      var r = n[u];
      if (!(r[Ma] || r[ie] || t === "link" && r.getAttribute("rel") === "stylesheet") && r.namespaceURI !== "http://www.w3.org/2000/svg") {
        var s = r.getAttribute(e) || "";
        s = t + s;
        var h = l.get(s);
        h ? h.push(r) : l.set(s, [r]);
      }
    }
    return l;
  }
  function c0(t, e, n) {
    t = t.ownerDocument || t, t.head.insertBefore(
      n,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function og(t, e, n) {
    if (n === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
          break;
        return !0;
      case "link":
        if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
          break;
        switch (e.rel) {
          case "stylesheet":
            return t = e.disabled, typeof e.precedence == "string" && t == null;
          default:
            return !0;
        }
      case "script":
        if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
          return !0;
    }
    return !1;
  }
  function o0(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var gu = null;
  function fg() {
  }
  function sg(t, e, n) {
    if (gu === null) throw Error(c(475));
    var l = gu;
    if (e.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (e.state.loading & 4) === 0) {
      if (e.instance === null) {
        var u = fa(n.href), r = t.querySelector(
          pu(u)
        );
        if (r) {
          t = r._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = Ki.bind(l), t.then(l, l)), e.state.loading |= 4, e.instance = r, Ft(r);
          return;
        }
        r = t.ownerDocument || t, n = u0(n), (u = Ye.get(u)) && zo(n, u), r = r.createElement("link"), Ft(r);
        var s = r;
        s._p = new Promise(function(h, v) {
          s.onload = h, s.onerror = v;
        }), ae(r, "link", n), e.instance = r;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(e, t), (t = e.state.preload) && (e.state.loading & 3) === 0 && (l.count++, e = Ki.bind(l), t.addEventListener("load", e), t.addEventListener("error", e));
    }
  }
  function dg() {
    if (gu === null) throw Error(c(475));
    var t = gu;
    return t.stylesheets && t.count === 0 && Uo(t, t.stylesheets), 0 < t.count ? function(e) {
      var n = setTimeout(function() {
        if (t.stylesheets && Uo(t, t.stylesheets), t.unsuspend) {
          var l = t.unsuspend;
          t.unsuspend = null, l();
        }
      }, 6e4);
      return t.unsuspend = e, function() {
        t.unsuspend = null, clearTimeout(n);
      };
    } : null;
  }
  function Ki() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Uo(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var $i = null;
  function Uo(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, $i = /* @__PURE__ */ new Map(), e.forEach(hg, t), $i = null, Ki.call(t));
  }
  function hg(t, e) {
    if (!(e.state.loading & 4)) {
      var n = $i.get(t);
      if (n) var l = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), $i.set(t, n);
        for (var u = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), r = 0; r < u.length; r++) {
          var s = u[r];
          (s.nodeName === "LINK" || s.getAttribute("media") !== "not all") && (n.set(s.dataset.precedence, s), l = s);
        }
        l && n.set(null, l);
      }
      u = e.instance, s = u.getAttribute("data-precedence"), r = n.get(s) || l, r === l && n.set(null, u), n.set(s, u), this.count++, l = Ki.bind(this), u.addEventListener("load", l), u.addEventListener("error", l), r ? r.parentNode.insertBefore(u, r.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(u, t.firstChild)), e.state.loading |= 4;
    }
  }
  var vu = {
    $$typeof: Q,
    Provider: null,
    Consumer: null,
    _currentValue: et,
    _currentValue2: et,
    _threadCount: 0
  };
  function mg(t, e, n, l, u, r, s, h) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = _r(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = _r(0), this.hiddenUpdates = _r(null), this.identifierPrefix = l, this.onUncaughtError = u, this.onCaughtError = r, this.onRecoverableError = s, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = h, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function f0(t, e, n, l, u, r, s, h, v, R, B, Y) {
    return t = new mg(
      t,
      e,
      n,
      s,
      h,
      v,
      R,
      Y
    ), e = 1, r === !0 && (e |= 24), r = Se(3, null, null, e), t.current = r, r.stateNode = t, e = hc(), e.refCount++, t.pooledCache = e, e.refCount++, r.memoizedState = {
      element: l,
      isDehydrated: n,
      cache: e
    }, gc(r), t;
  }
  function s0(t) {
    return t ? (t = Ll, t) : Ll;
  }
  function d0(t, e, n, l, u, r) {
    u = s0(u), l.context === null ? l.context = u : l.pendingContext = u, l = Nn(e), l.payload = { element: n }, r = r === void 0 ? null : r, r !== null && (l.callback = r), n = Un(t, l, e), n !== null && (Ce(n, t, e), $a(n, t, e));
  }
  function h0(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function Bo(t, e) {
    h0(t, e), (t = t.alternate) && h0(t, e);
  }
  function m0(t) {
    if (t.tag === 13) {
      var e = kl(t, 67108864);
      e !== null && Ce(e, t, 67108864), Bo(t, 67108864);
    }
  }
  var Ji = !0;
  function pg(t, e, n, l) {
    var u = C.T;
    C.T = null;
    var r = X.p;
    try {
      X.p = 2, wo(t, e, n, l);
    } finally {
      X.p = r, C.T = u;
    }
  }
  function yg(t, e, n, l) {
    var u = C.T;
    C.T = null;
    var r = X.p;
    try {
      X.p = 8, wo(t, e, n, l);
    } finally {
      X.p = r, C.T = u;
    }
  }
  function wo(t, e, n, l) {
    if (Ji) {
      var u = Ho(l);
      if (u === null)
        Eo(
          t,
          e,
          l,
          Wi,
          n
        ), y0(t, l);
      else if (vg(
        u,
        t,
        e,
        n,
        l
      ))
        l.stopPropagation();
      else if (y0(t, l), e & 4 && -1 < gg.indexOf(t)) {
        for (; u !== null; ) {
          var r = Ml(u);
          if (r !== null)
            switch (r.tag) {
              case 3:
                if (r = r.stateNode, r.current.memoizedState.isDehydrated) {
                  var s = In(r.pendingLanes);
                  if (s !== 0) {
                    var h = r;
                    for (h.pendingLanes |= 2, h.entangledLanes |= 2; s; ) {
                      var v = 1 << 31 - ve(s);
                      h.entanglements[1] |= v, s &= ~v;
                    }
                    tn(r), (At & 6) === 0 && (Ui = Je() + 500, su(0));
                  }
                }
                break;
              case 13:
                h = kl(r, 2), h !== null && Ce(h, r, 2), wi(), Bo(r, 2);
            }
          if (r = Ho(l), r === null && Eo(
            t,
            e,
            l,
            Wi,
            n
          ), r === u) break;
          u = r;
        }
        u !== null && l.stopPropagation();
      } else
        Eo(
          t,
          e,
          l,
          null,
          n
        );
    }
  }
  function Ho(t) {
    return t = Gr(t), qo(t);
  }
  var Wi = null;
  function qo(t) {
    if (Wi = null, t = _l(t), t !== null) {
      var e = d(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (t = m(e), t !== null) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return Wi = t, null;
  }
  function p0(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (np()) {
          case Mf:
            return 2;
          case Df:
            return 8;
          case Lu:
          case lp:
            return 32;
          case zf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Yo = !1, Zn = null, Kn = null, $n = null, bu = /* @__PURE__ */ new Map(), Su = /* @__PURE__ */ new Map(), Jn = [], gg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function y0(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Zn = null;
        break;
      case "dragenter":
      case "dragleave":
        Kn = null;
        break;
      case "mouseover":
      case "mouseout":
        $n = null;
        break;
      case "pointerover":
      case "pointerout":
        bu.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Su.delete(e.pointerId);
    }
  }
  function Tu(t, e, n, l, u, r) {
    return t === null || t.nativeEvent !== r ? (t = {
      blockedOn: e,
      domEventName: n,
      eventSystemFlags: l,
      nativeEvent: r,
      targetContainers: [u]
    }, e !== null && (e = Ml(e), e !== null && m0(e)), t) : (t.eventSystemFlags |= l, e = t.targetContainers, u !== null && e.indexOf(u) === -1 && e.push(u), t);
  }
  function vg(t, e, n, l, u) {
    switch (e) {
      case "focusin":
        return Zn = Tu(
          Zn,
          t,
          e,
          n,
          l,
          u
        ), !0;
      case "dragenter":
        return Kn = Tu(
          Kn,
          t,
          e,
          n,
          l,
          u
        ), !0;
      case "mouseover":
        return $n = Tu(
          $n,
          t,
          e,
          n,
          l,
          u
        ), !0;
      case "pointerover":
        var r = u.pointerId;
        return bu.set(
          r,
          Tu(
            bu.get(r) || null,
            t,
            e,
            n,
            l,
            u
          )
        ), !0;
      case "gotpointercapture":
        return r = u.pointerId, Su.set(
          r,
          Tu(
            Su.get(r) || null,
            t,
            e,
            n,
            l,
            u
          )
        ), !0;
    }
    return !1;
  }
  function g0(t) {
    var e = _l(t.target);
    if (e !== null) {
      var n = d(e);
      if (n !== null) {
        if (e = n.tag, e === 13) {
          if (e = m(n), e !== null) {
            t.blockedOn = e, sp(t.priority, function() {
              if (n.tag === 13) {
                var l = Ae();
                l = Mr(l);
                var u = kl(n, l);
                u !== null && Ce(u, n, l), Bo(n, l);
              }
            });
            return;
          }
        } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Fi(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = Ho(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var l = new n.constructor(
          n.type,
          n
        );
        jr = l, n.target.dispatchEvent(l), jr = null;
      } else
        return e = Ml(n), e !== null && m0(e), t.blockedOn = n, !1;
      e.shift();
    }
    return !0;
  }
  function v0(t, e, n) {
    Fi(t) && n.delete(e);
  }
  function bg() {
    Yo = !1, Zn !== null && Fi(Zn) && (Zn = null), Kn !== null && Fi(Kn) && (Kn = null), $n !== null && Fi($n) && ($n = null), bu.forEach(v0), Su.forEach(v0);
  }
  function Pi(t, e) {
    t.blockedOn === e && (t.blockedOn = null, Yo || (Yo = !0, a.unstable_scheduleCallback(
      a.unstable_NormalPriority,
      bg
    )));
  }
  var Ii = null;
  function b0(t) {
    Ii !== t && (Ii = t, a.unstable_scheduleCallback(
      a.unstable_NormalPriority,
      function() {
        Ii === t && (Ii = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e], l = t[e + 1], u = t[e + 2];
          if (typeof l != "function") {
            if (qo(l || n) === null)
              continue;
            break;
          }
          var r = Ml(n);
          r !== null && (t.splice(e, 3), e -= 3, Hc(
            r,
            {
              pending: !0,
              data: u,
              method: n.method,
              action: l
            },
            l,
            u
          ));
        }
      }
    ));
  }
  function Eu(t) {
    function e(v) {
      return Pi(v, t);
    }
    Zn !== null && Pi(Zn, t), Kn !== null && Pi(Kn, t), $n !== null && Pi($n, t), bu.forEach(e), Su.forEach(e);
    for (var n = 0; n < Jn.length; n++) {
      var l = Jn[n];
      l.blockedOn === t && (l.blockedOn = null);
    }
    for (; 0 < Jn.length && (n = Jn[0], n.blockedOn === null); )
      g0(n), n.blockedOn === null && Jn.shift();
    if (n = (t.ownerDocument || t).$$reactFormReplay, n != null)
      for (l = 0; l < n.length; l += 3) {
        var u = n[l], r = n[l + 1], s = u[se] || null;
        if (typeof r == "function")
          s || b0(n);
        else if (s) {
          var h = null;
          if (r && r.hasAttribute("formAction")) {
            if (u = r, s = r[se] || null)
              h = s.formAction;
            else if (qo(u) !== null) continue;
          } else h = s.action;
          typeof h == "function" ? n[l + 1] = h : (n.splice(l, 3), l -= 3), b0(n);
        }
      }
  }
  function jo(t) {
    this._internalRoot = t;
  }
  tr.prototype.render = jo.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(c(409));
    var n = e.current, l = Ae();
    d0(n, l, t, e, null, null);
  }, tr.prototype.unmount = jo.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      d0(t.current, 2, null, t, null, null), wi(), e[Rl] = null;
    }
  };
  function tr(t) {
    this._internalRoot = t;
  }
  tr.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = Hf();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < Jn.length && e !== 0 && e < Jn[n].priority; n++) ;
      Jn.splice(n, 0, t), n === 0 && g0(t);
    }
  };
  var S0 = i.version;
  if (S0 !== "19.1.1")
    throw Error(
      c(
        527,
        S0,
        "19.1.1"
      )
    );
  X.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(c(188)) : (t = Object.keys(t).join(","), Error(c(268, t)));
    return t = b(e), t = t !== null ? g(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var Sg = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: C,
    reconcilerVersion: "19.1.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var er = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!er.isDisabled && er.supportsFiber)
      try {
        Oa = er.inject(
          Sg
        ), ge = er;
      } catch {
      }
  }
  return Au.createRoot = function(t, e) {
    if (!f(t)) throw Error(c(299));
    var n = !1, l = "", u = Hd, r = qd, s = Yd, h = null;
    return e != null && (e.unstable_strictMode === !0 && (n = !0), e.identifierPrefix !== void 0 && (l = e.identifierPrefix), e.onUncaughtError !== void 0 && (u = e.onUncaughtError), e.onCaughtError !== void 0 && (r = e.onCaughtError), e.onRecoverableError !== void 0 && (s = e.onRecoverableError), e.unstable_transitionCallbacks !== void 0 && (h = e.unstable_transitionCallbacks)), e = f0(
      t,
      1,
      !1,
      null,
      null,
      n,
      l,
      u,
      r,
      s,
      h,
      null
    ), t[Rl] = e.current, To(t), new jo(e);
  }, Au.hydrateRoot = function(t, e, n) {
    if (!f(t)) throw Error(c(299));
    var l = !1, u = "", r = Hd, s = qd, h = Yd, v = null, R = null;
    return n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onUncaughtError !== void 0 && (r = n.onUncaughtError), n.onCaughtError !== void 0 && (s = n.onCaughtError), n.onRecoverableError !== void 0 && (h = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (v = n.unstable_transitionCallbacks), n.formState !== void 0 && (R = n.formState)), e = f0(
      t,
      1,
      !0,
      e,
      n ?? null,
      l,
      u,
      r,
      s,
      h,
      v,
      R
    ), e.context = s0(null), n = e.current, l = Ae(), l = Mr(l), u = Nn(l), u.callback = null, Un(n, u, l), n = l, e.current.lanes = n, _a(e, n), tn(e), t[Rl] = e.current, To(t), new tr(e);
  }, Au.version = "19.1.1", Au;
}
var D0;
function Dg() {
  if (D0) return ko.exports;
  D0 = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (i) {
        console.error(i);
      }
  }
  return a(), ko.exports = Mg(), ko.exports;
}
var ym = Dg();
const zg = /* @__PURE__ */ pf(ym);
var I = yf();
const ba = /* @__PURE__ */ pf(I), tf = /* @__PURE__ */ Eg({
  __proto__: null,
  default: ba
}, [I]), Nu = {
  black: "#000",
  white: "#fff"
}, da = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, ha = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, ma = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, pa = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, ya = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
}, Cu = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, Ng = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
};
function El(a, ...i) {
  const o = new URL(`https://mui.com/production-error/?code=${a}`);
  return i.forEach((c) => o.searchParams.append("args[]", c)), `Minified MUI error #${a}; visit ${o} for the full message.`;
}
const gm = "$$material";
function ef() {
  return ef = Object.assign ? Object.assign.bind() : function(a) {
    for (var i = 1; i < arguments.length; i++) {
      var o = arguments[i];
      for (var c in o) ({}).hasOwnProperty.call(o, c) && (a[c] = o[c]);
    }
    return a;
  }, ef.apply(null, arguments);
}
function Ug(a) {
  if (a.sheet)
    return a.sheet;
  for (var i = 0; i < document.styleSheets.length; i++)
    if (document.styleSheets[i].ownerNode === a)
      return document.styleSheets[i];
}
function Bg(a) {
  var i = document.createElement("style");
  return i.setAttribute("data-emotion", a.key), a.nonce !== void 0 && i.setAttribute("nonce", a.nonce), i.appendChild(document.createTextNode("")), i.setAttribute("data-s", ""), i;
}
var wg = /* @__PURE__ */ (function() {
  function a(o) {
    var c = this;
    this._insertTag = function(f) {
      var d;
      c.tags.length === 0 ? c.insertionPoint ? d = c.insertionPoint.nextSibling : c.prepend ? d = c.container.firstChild : d = c.before : d = c.tags[c.tags.length - 1].nextSibling, c.container.insertBefore(f, d), c.tags.push(f);
    }, this.isSpeedy = o.speedy === void 0 ? !0 : o.speedy, this.tags = [], this.ctr = 0, this.nonce = o.nonce, this.key = o.key, this.container = o.container, this.prepend = o.prepend, this.insertionPoint = o.insertionPoint, this.before = null;
  }
  var i = a.prototype;
  return i.hydrate = function(c) {
    c.forEach(this._insertTag);
  }, i.insert = function(c) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Bg(this));
    var f = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var d = Ug(f);
      try {
        d.insertRule(c, d.cssRules.length);
      } catch {
      }
    } else
      f.appendChild(document.createTextNode(c));
    this.ctr++;
  }, i.flush = function() {
    this.tags.forEach(function(c) {
      var f;
      return (f = c.parentNode) == null ? void 0 : f.removeChild(c);
    }), this.tags = [], this.ctr = 0;
  }, a;
})(), oe = "-ms-", fr = "-moz-", Et = "-webkit-", vm = "comm", gf = "rule", vf = "decl", Hg = "@import", bm = "@keyframes", qg = "@layer", Yg = Math.abs, mr = String.fromCharCode, jg = Object.assign;
function Gg(a, i) {
  return ue(a, 0) ^ 45 ? (((i << 2 ^ ue(a, 0)) << 2 ^ ue(a, 1)) << 2 ^ ue(a, 2)) << 2 ^ ue(a, 3) : 0;
}
function Sm(a) {
  return a.trim();
}
function kg(a, i) {
  return (a = i.exec(a)) ? a[0] : a;
}
function xt(a, i, o) {
  return a.replace(i, o);
}
function nf(a, i) {
  return a.indexOf(i);
}
function ue(a, i) {
  return a.charCodeAt(i) | 0;
}
function Uu(a, i, o) {
  return a.slice(i, o);
}
function nn(a) {
  return a.length;
}
function bf(a) {
  return a.length;
}
function nr(a, i) {
  return i.push(a), a;
}
function Lg(a, i) {
  return a.map(i).join("");
}
var pr = 1, Ea = 1, Tm = 0, ye = 0, $t = 0, Aa = "";
function yr(a, i, o, c, f, d, m) {
  return { value: a, root: i, parent: o, type: c, props: f, children: d, line: pr, column: Ea, length: m, return: "" };
}
function Ou(a, i) {
  return jg(yr("", null, null, "", null, null, 0), a, { length: -a.length }, i);
}
function Xg() {
  return $t;
}
function Qg() {
  return $t = ye > 0 ? ue(Aa, --ye) : 0, Ea--, $t === 10 && (Ea = 1, pr--), $t;
}
function Re() {
  return $t = ye < Tm ? ue(Aa, ye++) : 0, Ea++, $t === 10 && (Ea = 1, pr++), $t;
}
function un() {
  return ue(Aa, ye);
}
function ir() {
  return ye;
}
function Hu(a, i) {
  return Uu(Aa, a, i);
}
function Bu(a) {
  switch (a) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Em(a) {
  return pr = Ea = 1, Tm = nn(Aa = a), ye = 0, [];
}
function xm(a) {
  return Aa = "", a;
}
function rr(a) {
  return Sm(Hu(ye - 1, lf(a === 91 ? a + 2 : a === 40 ? a + 1 : a)));
}
function Vg(a) {
  for (; ($t = un()) && $t < 33; )
    Re();
  return Bu(a) > 2 || Bu($t) > 3 ? "" : " ";
}
function Zg(a, i) {
  for (; --i && Re() && !($t < 48 || $t > 102 || $t > 57 && $t < 65 || $t > 70 && $t < 97); )
    ;
  return Hu(a, ir() + (i < 6 && un() == 32 && Re() == 32));
}
function lf(a) {
  for (; Re(); )
    switch ($t) {
      // ] ) " '
      case a:
        return ye;
      // " '
      case 34:
      case 39:
        a !== 34 && a !== 39 && lf($t);
        break;
      // (
      case 40:
        a === 41 && lf(a);
        break;
      // \
      case 92:
        Re();
        break;
    }
  return ye;
}
function Kg(a, i) {
  for (; Re() && a + $t !== 57; )
    if (a + $t === 84 && un() === 47)
      break;
  return "/*" + Hu(i, ye - 1) + "*" + mr(a === 47 ? a : Re());
}
function $g(a) {
  for (; !Bu(un()); )
    Re();
  return Hu(a, ye);
}
function Jg(a) {
  return xm(cr("", null, null, null, [""], a = Em(a), 0, [0], a));
}
function cr(a, i, o, c, f, d, m, p, b) {
  for (var g = 0, x = 0, D = m, N = 0, q = 0, z = 0, A = 1, w = 1, K = 1, P = 0, Q = "", L = f, $ = d, k = c, Z = Q; w; )
    switch (z = P, P = Re()) {
      // (
      case 40:
        if (z != 108 && ue(Z, D - 1) == 58) {
          nf(Z += xt(rr(P), "&", "&\f"), "&\f") != -1 && (K = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        Z += rr(P);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        Z += Vg(z);
        break;
      // \
      case 92:
        Z += Zg(ir() - 1, 7);
        continue;
      // /
      case 47:
        switch (un()) {
          case 42:
          case 47:
            nr(Wg(Kg(Re(), ir()), i, o), b);
            break;
          default:
            Z += "/";
        }
        break;
      // {
      case 123 * A:
        p[g++] = nn(Z) * K;
      // } ; \0
      case 125 * A:
      case 59:
      case 0:
        switch (P) {
          // \0 }
          case 0:
          case 125:
            w = 0;
          // ;
          case 59 + x:
            K == -1 && (Z = xt(Z, /\f/g, "")), q > 0 && nn(Z) - D && nr(q > 32 ? N0(Z + ";", c, o, D - 1) : N0(xt(Z, " ", "") + ";", c, o, D - 2), b);
            break;
          // @ ;
          case 59:
            Z += ";";
          // { rule/at-rule
          default:
            if (nr(k = z0(Z, i, o, g, x, f, p, Q, L = [], $ = [], D), d), P === 123)
              if (x === 0)
                cr(Z, i, k, k, L, d, D, p, $);
              else
                switch (N === 99 && ue(Z, 3) === 110 ? 100 : N) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    cr(a, k, k, c && nr(z0(a, k, k, 0, 0, f, p, Q, f, L = [], D), $), f, $, D, p, c ? L : $);
                    break;
                  default:
                    cr(Z, k, k, k, [""], $, 0, p, $);
                }
        }
        g = x = q = 0, A = K = 1, Q = Z = "", D = m;
        break;
      // :
      case 58:
        D = 1 + nn(Z), q = z;
      default:
        if (A < 1) {
          if (P == 123)
            --A;
          else if (P == 125 && A++ == 0 && Qg() == 125)
            continue;
        }
        switch (Z += mr(P), P * A) {
          // &
          case 38:
            K = x > 0 ? 1 : (Z += "\f", -1);
            break;
          // ,
          case 44:
            p[g++] = (nn(Z) - 1) * K, K = 1;
            break;
          // @
          case 64:
            un() === 45 && (Z += rr(Re())), N = un(), x = D = nn(Q = Z += $g(ir())), P++;
            break;
          // -
          case 45:
            z === 45 && nn(Z) == 2 && (A = 0);
        }
    }
  return d;
}
function z0(a, i, o, c, f, d, m, p, b, g, x) {
  for (var D = f - 1, N = f === 0 ? d : [""], q = bf(N), z = 0, A = 0, w = 0; z < c; ++z)
    for (var K = 0, P = Uu(a, D + 1, D = Yg(A = m[z])), Q = a; K < q; ++K)
      (Q = Sm(A > 0 ? N[K] + " " + P : xt(P, /&\f/g, N[K]))) && (b[w++] = Q);
  return yr(a, i, o, f === 0 ? gf : p, b, g, x);
}
function Wg(a, i, o) {
  return yr(a, i, o, vm, mr(Xg()), Uu(a, 2, -2), 0);
}
function N0(a, i, o, c) {
  return yr(a, i, o, vf, Uu(a, 0, c), Uu(a, c + 1, -1), c);
}
function Sa(a, i) {
  for (var o = "", c = bf(a), f = 0; f < c; f++)
    o += i(a[f], f, a, i) || "";
  return o;
}
function Fg(a, i, o, c) {
  switch (a.type) {
    case qg:
      if (a.children.length) break;
    case Hg:
    case vf:
      return a.return = a.return || a.value;
    case vm:
      return "";
    case bm:
      return a.return = a.value + "{" + Sa(a.children, c) + "}";
    case gf:
      a.value = a.props.join(",");
  }
  return nn(o = Sa(a.children, c)) ? a.return = a.value + "{" + o + "}" : "";
}
function Pg(a) {
  var i = bf(a);
  return function(o, c, f, d) {
    for (var m = "", p = 0; p < i; p++)
      m += a[p](o, c, f, d) || "";
    return m;
  };
}
function Ig(a) {
  return function(i) {
    i.root || (i = i.return) && a(i);
  };
}
function Am(a) {
  var i = /* @__PURE__ */ Object.create(null);
  return function(o) {
    return i[o] === void 0 && (i[o] = a(o)), i[o];
  };
}
var t1 = function(i, o, c) {
  for (var f = 0, d = 0; f = d, d = un(), f === 38 && d === 12 && (o[c] = 1), !Bu(d); )
    Re();
  return Hu(i, ye);
}, e1 = function(i, o) {
  var c = -1, f = 44;
  do
    switch (Bu(f)) {
      case 0:
        f === 38 && un() === 12 && (o[c] = 1), i[c] += t1(ye - 1, o, c);
        break;
      case 2:
        i[c] += rr(f);
        break;
      case 4:
        if (f === 44) {
          i[++c] = un() === 58 ? "&\f" : "", o[c] = i[c].length;
          break;
        }
      // fallthrough
      default:
        i[c] += mr(f);
    }
  while (f = Re());
  return i;
}, n1 = function(i, o) {
  return xm(e1(Em(i), o));
}, U0 = /* @__PURE__ */ new WeakMap(), l1 = function(i) {
  if (!(i.type !== "rule" || !i.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  i.length < 1)) {
    for (var o = i.value, c = i.parent, f = i.column === c.column && i.line === c.line; c.type !== "rule"; )
      if (c = c.parent, !c) return;
    if (!(i.props.length === 1 && o.charCodeAt(0) !== 58 && !U0.get(c)) && !f) {
      U0.set(i, !0);
      for (var d = [], m = n1(o, d), p = c.props, b = 0, g = 0; b < m.length; b++)
        for (var x = 0; x < p.length; x++, g++)
          i.props[g] = d[b] ? m[b].replace(/&\f/g, p[x]) : p[x] + " " + m[b];
    }
  }
}, a1 = function(i) {
  if (i.type === "decl") {
    var o = i.value;
    // charcode for l
    o.charCodeAt(0) === 108 && // charcode for b
    o.charCodeAt(2) === 98 && (i.return = "", i.value = "");
  }
};
function Cm(a, i) {
  switch (Gg(a, i)) {
    // color-adjust
    case 5103:
      return Et + "print-" + a + a;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Et + a + a;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Et + a + fr + a + oe + a + a;
    // flex, flex-direction
    case 6828:
    case 4268:
      return Et + a + oe + a + a;
    // order
    case 6165:
      return Et + a + oe + "flex-" + a + a;
    // align-items
    case 5187:
      return Et + a + xt(a, /(\w+).+(:[^]+)/, Et + "box-$1$2" + oe + "flex-$1$2") + a;
    // align-self
    case 5443:
      return Et + a + oe + "flex-item-" + xt(a, /flex-|-self/, "") + a;
    // align-content
    case 4675:
      return Et + a + oe + "flex-line-pack" + xt(a, /align-content|flex-|-self/, "") + a;
    // flex-shrink
    case 5548:
      return Et + a + oe + xt(a, "shrink", "negative") + a;
    // flex-basis
    case 5292:
      return Et + a + oe + xt(a, "basis", "preferred-size") + a;
    // flex-grow
    case 6060:
      return Et + "box-" + xt(a, "-grow", "") + Et + a + oe + xt(a, "grow", "positive") + a;
    // transition
    case 4554:
      return Et + xt(a, /([^-])(transform)/g, "$1" + Et + "$2") + a;
    // cursor
    case 6187:
      return xt(xt(xt(a, /(zoom-|grab)/, Et + "$1"), /(image-set)/, Et + "$1"), a, "") + a;
    // background, background-image
    case 5495:
    case 3959:
      return xt(a, /(image-set\([^]*)/, Et + "$1$`$1");
    // justify-content
    case 4968:
      return xt(xt(a, /(.+:)(flex-)?(.*)/, Et + "box-pack:$3" + oe + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Et + a + a;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return xt(a, /(.+)-inline(.+)/, Et + "$1$2") + a;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (nn(a) - 1 - i > 6) switch (ue(a, i + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (ue(a, i + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return xt(a, /(.+:)(.+)-([^]+)/, "$1" + Et + "$2-$3$1" + fr + (ue(a, i + 3) == 108 ? "$3" : "$2-$3")) + a;
        // (s)tretch
        case 115:
          return ~nf(a, "stretch") ? Cm(xt(a, "stretch", "fill-available"), i) + a : a;
      }
      break;
    // position: sticky
    case 4949:
      if (ue(a, i + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (ue(a, nn(a) - 3 - (~nf(a, "!important") && 10))) {
        // stic(k)y
        case 107:
          return xt(a, ":", ":" + Et) + a;
        // (inline-)?fl(e)x
        case 101:
          return xt(a, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Et + (ue(a, 14) === 45 ? "inline-" : "") + "box$3$1" + Et + "$2$3$1" + oe + "$2box$3") + a;
      }
      break;
    // writing-mode
    case 5936:
      switch (ue(a, i + 11)) {
        // vertical-l(r)
        case 114:
          return Et + a + oe + xt(a, /[svh]\w+-[tblr]{2}/, "tb") + a;
        // vertical-r(l)
        case 108:
          return Et + a + oe + xt(a, /[svh]\w+-[tblr]{2}/, "tb-rl") + a;
        // horizontal(-)tb
        case 45:
          return Et + a + oe + xt(a, /[svh]\w+-[tblr]{2}/, "lr") + a;
      }
      return Et + a + oe + a + a;
  }
  return a;
}
var u1 = function(i, o, c, f) {
  if (i.length > -1 && !i.return) switch (i.type) {
    case vf:
      i.return = Cm(i.value, i.length);
      break;
    case bm:
      return Sa([Ou(i, {
        value: xt(i.value, "@", "@" + Et)
      })], f);
    case gf:
      if (i.length) return Lg(i.props, function(d) {
        switch (kg(d, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return Sa([Ou(i, {
              props: [xt(d, /:(read-\w+)/, ":" + fr + "$1")]
            })], f);
          // :placeholder
          case "::placeholder":
            return Sa([Ou(i, {
              props: [xt(d, /:(plac\w+)/, ":" + Et + "input-$1")]
            }), Ou(i, {
              props: [xt(d, /:(plac\w+)/, ":" + fr + "$1")]
            }), Ou(i, {
              props: [xt(d, /:(plac\w+)/, oe + "input-$1")]
            })], f);
        }
        return "";
      });
  }
}, i1 = [u1], r1 = function(i) {
  var o = i.key;
  if (o === "css") {
    var c = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(c, function(A) {
      var w = A.getAttribute("data-emotion");
      w.indexOf(" ") !== -1 && (document.head.appendChild(A), A.setAttribute("data-s", ""));
    });
  }
  var f = i.stylisPlugins || i1, d = {}, m, p = [];
  m = i.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + o + ' "]'),
    function(A) {
      for (var w = A.getAttribute("data-emotion").split(" "), K = 1; K < w.length; K++)
        d[w[K]] = !0;
      p.push(A);
    }
  );
  var b, g = [l1, a1];
  {
    var x, D = [Fg, Ig(function(A) {
      x.insert(A);
    })], N = Pg(g.concat(f, D)), q = function(w) {
      return Sa(Jg(w), N);
    };
    b = function(w, K, P, Q) {
      x = P, q(w ? w + "{" + K.styles + "}" : K.styles), Q && (z.inserted[K.name] = !0);
    };
  }
  var z = {
    key: o,
    sheet: new wg({
      key: o,
      container: m,
      nonce: i.nonce,
      speedy: i.speedy,
      prepend: i.prepend,
      insertionPoint: i.insertionPoint
    }),
    nonce: i.nonce,
    inserted: d,
    registered: {},
    insert: b
  };
  return z.sheet.hydrate(p), z;
}, c1 = !0;
function o1(a, i, o) {
  var c = "";
  return o.split(" ").forEach(function(f) {
    a[f] !== void 0 ? i.push(a[f] + ";") : f && (c += f + " ");
  }), c;
}
var Om = function(i, o, c) {
  var f = i.key + "-" + o.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (c === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  c1 === !1) && i.registered[f] === void 0 && (i.registered[f] = o.styles);
}, f1 = function(i, o, c) {
  Om(i, o, c);
  var f = i.key + "-" + o.name;
  if (i.inserted[o.name] === void 0) {
    var d = o;
    do
      i.insert(o === d ? "." + f : "", d, i.sheet, !0), d = d.next;
    while (d !== void 0);
  }
};
function s1(a) {
  for (var i = 0, o, c = 0, f = a.length; f >= 4; ++c, f -= 4)
    o = a.charCodeAt(c) & 255 | (a.charCodeAt(++c) & 255) << 8 | (a.charCodeAt(++c) & 255) << 16 | (a.charCodeAt(++c) & 255) << 24, o = /* Math.imul(k, m): */
    (o & 65535) * 1540483477 + ((o >>> 16) * 59797 << 16), o ^= /* k >>> r: */
    o >>> 24, i = /* Math.imul(k, m): */
    (o & 65535) * 1540483477 + ((o >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (i & 65535) * 1540483477 + ((i >>> 16) * 59797 << 16);
  switch (f) {
    case 3:
      i ^= (a.charCodeAt(c + 2) & 255) << 16;
    case 2:
      i ^= (a.charCodeAt(c + 1) & 255) << 8;
    case 1:
      i ^= a.charCodeAt(c) & 255, i = /* Math.imul(h, m): */
      (i & 65535) * 1540483477 + ((i >>> 16) * 59797 << 16);
  }
  return i ^= i >>> 13, i = /* Math.imul(h, m): */
  (i & 65535) * 1540483477 + ((i >>> 16) * 59797 << 16), ((i ^ i >>> 15) >>> 0).toString(36);
}
var d1 = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, h1 = /[A-Z]|^ms/g, m1 = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Rm = function(i) {
  return i.charCodeAt(1) === 45;
}, B0 = function(i) {
  return i != null && typeof i != "boolean";
}, Zo = /* @__PURE__ */ Am(function(a) {
  return Rm(a) ? a : a.replace(h1, "-$&").toLowerCase();
}), w0 = function(i, o) {
  switch (i) {
    case "animation":
    case "animationName":
      if (typeof o == "string")
        return o.replace(m1, function(c, f, d) {
          return ln = {
            name: f,
            styles: d,
            next: ln
          }, f;
        });
  }
  return d1[i] !== 1 && !Rm(i) && typeof o == "number" && o !== 0 ? o + "px" : o;
};
function wu(a, i, o) {
  if (o == null)
    return "";
  var c = o;
  if (c.__emotion_styles !== void 0)
    return c;
  switch (typeof o) {
    case "boolean":
      return "";
    case "object": {
      var f = o;
      if (f.anim === 1)
        return ln = {
          name: f.name,
          styles: f.styles,
          next: ln
        }, f.name;
      var d = o;
      if (d.styles !== void 0) {
        var m = d.next;
        if (m !== void 0)
          for (; m !== void 0; )
            ln = {
              name: m.name,
              styles: m.styles,
              next: ln
            }, m = m.next;
        var p = d.styles + ";";
        return p;
      }
      return p1(a, i, o);
    }
    case "function": {
      if (a !== void 0) {
        var b = ln, g = o(a);
        return ln = b, wu(a, i, g);
      }
      break;
    }
  }
  var x = o;
  if (i == null)
    return x;
  var D = i[x];
  return D !== void 0 ? D : x;
}
function p1(a, i, o) {
  var c = "";
  if (Array.isArray(o))
    for (var f = 0; f < o.length; f++)
      c += wu(a, i, o[f]) + ";";
  else
    for (var d in o) {
      var m = o[d];
      if (typeof m != "object") {
        var p = m;
        i != null && i[p] !== void 0 ? c += d + "{" + i[p] + "}" : B0(p) && (c += Zo(d) + ":" + w0(d, p) + ";");
      } else if (Array.isArray(m) && typeof m[0] == "string" && (i == null || i[m[0]] === void 0))
        for (var b = 0; b < m.length; b++)
          B0(m[b]) && (c += Zo(d) + ":" + w0(d, m[b]) + ";");
      else {
        var g = wu(a, i, m);
        switch (d) {
          case "animation":
          case "animationName": {
            c += Zo(d) + ":" + g + ";";
            break;
          }
          default:
            c += d + "{" + g + "}";
        }
      }
    }
  return c;
}
var H0 = /label:\s*([^\s;{]+)\s*(;|$)/g, ln;
function _m(a, i, o) {
  if (a.length === 1 && typeof a[0] == "object" && a[0] !== null && a[0].styles !== void 0)
    return a[0];
  var c = !0, f = "";
  ln = void 0;
  var d = a[0];
  if (d == null || d.raw === void 0)
    c = !1, f += wu(o, i, d);
  else {
    var m = d;
    f += m[0];
  }
  for (var p = 1; p < a.length; p++)
    if (f += wu(o, i, a[p]), c) {
      var b = d;
      f += b[p];
    }
  H0.lastIndex = 0;
  for (var g = "", x; (x = H0.exec(f)) !== null; )
    g += "-" + x[1];
  var D = s1(f) + g;
  return {
    name: D,
    styles: f,
    next: ln
  };
}
var y1 = function(i) {
  return i();
}, g1 = tf.useInsertionEffect ? tf.useInsertionEffect : !1, v1 = g1 || y1, Mm = /* @__PURE__ */ I.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ r1({
    key: "css"
  }) : null
);
Mm.Provider;
var b1 = function(i) {
  return /* @__PURE__ */ I.forwardRef(function(o, c) {
    var f = I.useContext(Mm);
    return i(o, f, c);
  });
}, Dm = /* @__PURE__ */ I.createContext({}), S1 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, T1 = /* @__PURE__ */ Am(
  function(a) {
    return S1.test(a) || a.charCodeAt(0) === 111 && a.charCodeAt(1) === 110 && a.charCodeAt(2) < 91;
  }
  /* Z+1 */
), E1 = T1, x1 = function(i) {
  return i !== "theme";
}, q0 = function(i) {
  return typeof i == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  i.charCodeAt(0) > 96 ? E1 : x1;
}, Y0 = function(i, o, c) {
  var f;
  if (o) {
    var d = o.shouldForwardProp;
    f = i.__emotion_forwardProp && d ? function(m) {
      return i.__emotion_forwardProp(m) && d(m);
    } : d;
  }
  return typeof f != "function" && c && (f = i.__emotion_forwardProp), f;
}, A1 = function(i) {
  var o = i.cache, c = i.serialized, f = i.isStringTag;
  return Om(o, c, f), v1(function() {
    return f1(o, c, f);
  }), null;
}, C1 = function a(i, o) {
  var c = i.__emotion_real === i, f = c && i.__emotion_base || i, d, m;
  o !== void 0 && (d = o.label, m = o.target);
  var p = Y0(i, o, c), b = p || q0(f), g = !b("as");
  return function() {
    var x = arguments, D = c && i.__emotion_styles !== void 0 ? i.__emotion_styles.slice(0) : [];
    if (d !== void 0 && D.push("label:" + d + ";"), x[0] == null || x[0].raw === void 0)
      D.push.apply(D, x);
    else {
      var N = x[0];
      D.push(N[0]);
      for (var q = x.length, z = 1; z < q; z++)
        D.push(x[z], N[z]);
    }
    var A = b1(function(w, K, P) {
      var Q = g && w.as || f, L = "", $ = [], k = w;
      if (w.theme == null) {
        k = {};
        for (var Z in w)
          k[Z] = w[Z];
        k.theme = I.useContext(Dm);
      }
      typeof w.className == "string" ? L = o1(K.registered, $, w.className) : w.className != null && (L = w.className + " ");
      var ot = _m(D.concat($), K.registered, k);
      L += K.key + "-" + ot.name, m !== void 0 && (L += " " + m);
      var it = g && p === void 0 ? q0(Q) : b, gt = {};
      for (var ft in w)
        g && ft === "as" || it(ft) && (gt[ft] = w[ft]);
      return gt.className = L, P && (gt.ref = P), /* @__PURE__ */ I.createElement(I.Fragment, null, /* @__PURE__ */ I.createElement(A1, {
        cache: K,
        serialized: ot,
        isStringTag: typeof Q == "string"
      }), /* @__PURE__ */ I.createElement(Q, gt));
    });
    return A.displayName = d !== void 0 ? d : "Styled(" + (typeof f == "string" ? f : f.displayName || f.name || "Component") + ")", A.defaultProps = i.defaultProps, A.__emotion_real = A, A.__emotion_base = f, A.__emotion_styles = D, A.__emotion_forwardProp = p, Object.defineProperty(A, "toString", {
      value: function() {
        return "." + m;
      }
    }), A.withComponent = function(w, K) {
      var P = a(w, ef({}, o, K, {
        shouldForwardProp: Y0(A, K, !0)
      }));
      return P.apply(void 0, D);
    }, A;
  };
}, O1 = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], af = C1.bind(null);
O1.forEach(function(a) {
  af[a] = af(a);
});
function R1(a, i) {
  return af(a, i);
}
function _1(a, i) {
  Array.isArray(a.__emotion_styles) && (a.__emotion_styles = i(a.__emotion_styles));
}
const j0 = [];
function Tl(a) {
  return j0[0] = a, _m(j0);
}
var Ko = { exports: {} }, Ut = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var G0;
function M1() {
  if (G0) return Ut;
  G0 = 1;
  var a = Symbol.for("react.transitional.element"), i = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), d = Symbol.for("react.consumer"), m = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), N = Symbol.for("react.view_transition"), q = Symbol.for("react.client.reference");
  function z(A) {
    if (typeof A == "object" && A !== null) {
      var w = A.$$typeof;
      switch (w) {
        case a:
          switch (A = A.type, A) {
            case o:
            case f:
            case c:
            case b:
            case g:
            case N:
              return A;
            default:
              switch (A = A && A.$$typeof, A) {
                case m:
                case p:
                case D:
                case x:
                  return A;
                case d:
                  return A;
                default:
                  return w;
              }
          }
        case i:
          return w;
      }
    }
  }
  return Ut.ContextConsumer = d, Ut.ContextProvider = m, Ut.Element = a, Ut.ForwardRef = p, Ut.Fragment = o, Ut.Lazy = D, Ut.Memo = x, Ut.Portal = i, Ut.Profiler = f, Ut.StrictMode = c, Ut.Suspense = b, Ut.SuspenseList = g, Ut.isContextConsumer = function(A) {
    return z(A) === d;
  }, Ut.isContextProvider = function(A) {
    return z(A) === m;
  }, Ut.isElement = function(A) {
    return typeof A == "object" && A !== null && A.$$typeof === a;
  }, Ut.isForwardRef = function(A) {
    return z(A) === p;
  }, Ut.isFragment = function(A) {
    return z(A) === o;
  }, Ut.isLazy = function(A) {
    return z(A) === D;
  }, Ut.isMemo = function(A) {
    return z(A) === x;
  }, Ut.isPortal = function(A) {
    return z(A) === i;
  }, Ut.isProfiler = function(A) {
    return z(A) === f;
  }, Ut.isStrictMode = function(A) {
    return z(A) === c;
  }, Ut.isSuspense = function(A) {
    return z(A) === b;
  }, Ut.isSuspenseList = function(A) {
    return z(A) === g;
  }, Ut.isValidElementType = function(A) {
    return typeof A == "string" || typeof A == "function" || A === o || A === f || A === c || A === b || A === g || typeof A == "object" && A !== null && (A.$$typeof === D || A.$$typeof === x || A.$$typeof === m || A.$$typeof === d || A.$$typeof === p || A.$$typeof === q || A.getModuleId !== void 0);
  }, Ut.typeOf = z, Ut;
}
var k0;
function D1() {
  return k0 || (k0 = 1, Ko.exports = /* @__PURE__ */ M1()), Ko.exports;
}
var zm = /* @__PURE__ */ D1();
function an(a) {
  if (typeof a != "object" || a === null)
    return !1;
  const i = Object.getPrototypeOf(a);
  return (i === null || i === Object.prototype || Object.getPrototypeOf(i) === null) && !(Symbol.toStringTag in a) && !(Symbol.iterator in a);
}
function Nm(a) {
  if (/* @__PURE__ */ I.isValidElement(a) || zm.isValidElementType(a) || !an(a))
    return a;
  const i = {};
  return Object.keys(a).forEach((o) => {
    i[o] = Nm(a[o]);
  }), i;
}
function _e(a, i, o = {
  clone: !0
}) {
  const c = o.clone ? {
    ...a
  } : a;
  return an(a) && an(i) && Object.keys(i).forEach((f) => {
    /* @__PURE__ */ I.isValidElement(i[f]) || zm.isValidElementType(i[f]) ? c[f] = i[f] : an(i[f]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(a, f) && an(a[f]) ? c[f] = _e(a[f], i[f], o) : o.clone ? c[f] = an(i[f]) ? Nm(i[f]) : i[f] : c[f] = i[f];
  }), c;
}
const z1 = (a) => {
  const i = Object.keys(a).map((o) => ({
    key: o,
    val: a[o]
  })) || [];
  return i.sort((o, c) => o.val - c.val), i.reduce((o, c) => ({
    ...o,
    [c.key]: c.val
  }), {});
};
function N1(a) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: i = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: o = "px",
    step: c = 5,
    ...f
  } = a, d = z1(i), m = Object.keys(d);
  function p(N) {
    return `@media (min-width:${typeof i[N] == "number" ? i[N] : N}${o})`;
  }
  function b(N) {
    return `@media (max-width:${(typeof i[N] == "number" ? i[N] : N) - c / 100}${o})`;
  }
  function g(N, q) {
    const z = m.indexOf(q);
    return `@media (min-width:${typeof i[N] == "number" ? i[N] : N}${o}) and (max-width:${(z !== -1 && typeof i[m[z]] == "number" ? i[m[z]] : q) - c / 100}${o})`;
  }
  function x(N) {
    return m.indexOf(N) + 1 < m.length ? g(N, m[m.indexOf(N) + 1]) : p(N);
  }
  function D(N) {
    const q = m.indexOf(N);
    return q === 0 ? p(m[1]) : q === m.length - 1 ? b(m[q]) : g(N, m[m.indexOf(N) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: m,
    values: d,
    up: p,
    down: b,
    between: g,
    only: x,
    not: D,
    unit: o,
    ...f
  };
}
function L0(a, i) {
  if (!a.containerQueries)
    return i;
  const o = Object.keys(i).filter((c) => c.startsWith("@container")).sort((c, f) => {
    const d = /min-width:\s*([0-9.]+)/;
    return +(c.match(d)?.[1] || 0) - +(f.match(d)?.[1] || 0);
  });
  return o.length ? o.reduce((c, f) => {
    const d = i[f];
    return delete c[f], c[f] = d, c;
  }, {
    ...i
  }) : i;
}
function U1(a, i) {
  return i === "@" || i.startsWith("@") && (a.some((o) => i.startsWith(`@${o}`)) || !!i.match(/^@\d/));
}
function B1(a, i) {
  const o = i.match(/^@([^/]+)?\/?(.+)?$/);
  if (!o)
    return null;
  const [, c, f] = o, d = Number.isNaN(+c) ? c || 0 : +c;
  return a.containerQueries(f).up(d);
}
function w1(a) {
  const i = (d, m) => d.replace("@media", m ? `@container ${m}` : "@container");
  function o(d, m) {
    d.up = (...p) => i(a.breakpoints.up(...p), m), d.down = (...p) => i(a.breakpoints.down(...p), m), d.between = (...p) => i(a.breakpoints.between(...p), m), d.only = (...p) => i(a.breakpoints.only(...p), m), d.not = (...p) => {
      const b = i(a.breakpoints.not(...p), m);
      return b.includes("not all and") ? b.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : b;
    };
  }
  const c = {}, f = (d) => (o(c, d), c);
  return o(f), {
    ...a,
    containerQueries: f
  };
}
const H1 = {
  borderRadius: 4
};
function Du(a, i) {
  return i ? _e(a, i, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : a;
}
const gr = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, X0 = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (a) => `@media (min-width:${gr[a]}px)`
}, q1 = {
  containerQueries: (a) => ({
    up: (i) => {
      let o = typeof i == "number" ? i : gr[i] || i;
      return typeof o == "number" && (o = `${o}px`), a ? `@container ${a} (min-width:${o})` : `@container (min-width:${o})`;
    }
  })
};
function Cn(a, i, o) {
  const c = a.theme || {};
  if (Array.isArray(i)) {
    const d = c.breakpoints || X0;
    return i.reduce((m, p, b) => (m[d.up(d.keys[b])] = o(i[b]), m), {});
  }
  if (typeof i == "object") {
    const d = c.breakpoints || X0;
    return Object.keys(i).reduce((m, p) => {
      if (U1(d.keys, p)) {
        const b = B1(c.containerQueries ? c : q1, p);
        b && (m[b] = o(i[p], p));
      } else if (Object.keys(d.values || gr).includes(p)) {
        const b = d.up(p);
        m[b] = o(i[p], p);
      } else {
        const b = p;
        m[b] = i[b];
      }
      return m;
    }, {});
  }
  return o(i);
}
function Y1(a = {}) {
  return a.keys?.reduce((o, c) => {
    const f = a.up(c);
    return o[f] = {}, o;
  }, {}) || {};
}
function Q0(a, i) {
  return a.reduce((o, c) => {
    const f = o[c];
    return (!f || Object.keys(f).length === 0) && delete o[c], o;
  }, i);
}
function Ze(a) {
  if (typeof a != "string")
    throw new Error(El(7));
  return a.charAt(0).toUpperCase() + a.slice(1);
}
function vr(a, i, o = !0) {
  if (!i || typeof i != "string")
    return null;
  if (a && a.vars && o) {
    const c = `vars.${i}`.split(".").reduce((f, d) => f && f[d] ? f[d] : null, a);
    if (c != null)
      return c;
  }
  return i.split(".").reduce((c, f) => c && c[f] != null ? c[f] : null, a);
}
function sr(a, i, o, c = o) {
  let f;
  return typeof a == "function" ? f = a(o) : Array.isArray(a) ? f = a[o] || c : f = vr(a, o) || c, i && (f = i(f, c, a)), f;
}
function Vt(a) {
  const {
    prop: i,
    cssProperty: o = a.prop,
    themeKey: c,
    transform: f
  } = a, d = (m) => {
    if (m[i] == null)
      return null;
    const p = m[i], b = m.theme, g = vr(b, c) || {};
    return Cn(m, p, (D) => {
      let N = sr(g, f, D);
      return D === N && typeof D == "string" && (N = sr(g, f, `${i}${D === "default" ? "" : Ze(D)}`, D)), o === !1 ? N : {
        [o]: N
      };
    });
  };
  return d.propTypes = {}, d.filterProps = [i], d;
}
function j1(a) {
  const i = {};
  return (o) => (i[o] === void 0 && (i[o] = a(o)), i[o]);
}
const G1 = {
  m: "margin",
  p: "padding"
}, k1 = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, V0 = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, L1 = j1((a) => {
  if (a.length > 2)
    if (V0[a])
      a = V0[a];
    else
      return [a];
  const [i, o] = a.split(""), c = G1[i], f = k1[o] || "";
  return Array.isArray(f) ? f.map((d) => c + d) : [c + f];
}), Sf = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Tf = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...Sf, ...Tf];
function qu(a, i, o, c) {
  const f = vr(a, i, !0) ?? o;
  return typeof f == "number" || typeof f == "string" ? (d) => typeof d == "string" ? d : typeof f == "string" ? f.startsWith("var(") && d === 0 ? 0 : f.startsWith("var(") && d === 1 ? f : `calc(${d} * ${f})` : f * d : Array.isArray(f) ? (d) => {
    if (typeof d == "string")
      return d;
    const m = Math.abs(d), p = f[m];
    return d >= 0 ? p : typeof p == "number" ? -p : typeof p == "string" && p.startsWith("var(") ? `calc(-1 * ${p})` : `-${p}`;
  } : typeof f == "function" ? f : () => {
  };
}
function Ef(a) {
  return qu(a, "spacing", 8);
}
function Yu(a, i) {
  return typeof i == "string" || i == null ? i : a(i);
}
function X1(a, i) {
  return (o) => a.reduce((c, f) => (c[f] = Yu(i, o), c), {});
}
function Q1(a, i, o, c) {
  if (!i.includes(o))
    return null;
  const f = L1(o), d = X1(f, c), m = a[o];
  return Cn(a, m, d);
}
function Um(a, i) {
  const o = Ef(a.theme);
  return Object.keys(a).map((c) => Q1(a, i, c, o)).reduce(Du, {});
}
function kt(a) {
  return Um(a, Sf);
}
kt.propTypes = {};
kt.filterProps = Sf;
function Lt(a) {
  return Um(a, Tf);
}
Lt.propTypes = {};
Lt.filterProps = Tf;
function Bm(a = 8, i = Ef({
  spacing: a
})) {
  if (a.mui)
    return a;
  const o = (...c) => (c.length === 0 ? [1] : c).map((d) => {
    const m = i(d);
    return typeof m == "number" ? `${m}px` : m;
  }).join(" ");
  return o.mui = !0, o;
}
function br(...a) {
  const i = a.reduce((c, f) => (f.filterProps.forEach((d) => {
    c[d] = f;
  }), c), {}), o = (c) => Object.keys(c).reduce((f, d) => i[d] ? Du(f, i[d](c)) : f, {});
  return o.propTypes = {}, o.filterProps = a.reduce((c, f) => c.concat(f.filterProps), []), o;
}
function je(a) {
  return typeof a != "number" ? a : `${a}px solid`;
}
function ke(a, i) {
  return Vt({
    prop: a,
    themeKey: "borders",
    transform: i
  });
}
const V1 = ke("border", je), Z1 = ke("borderTop", je), K1 = ke("borderRight", je), $1 = ke("borderBottom", je), J1 = ke("borderLeft", je), W1 = ke("borderColor"), F1 = ke("borderTopColor"), P1 = ke("borderRightColor"), I1 = ke("borderBottomColor"), tv = ke("borderLeftColor"), ev = ke("outline", je), nv = ke("outlineColor"), Sr = (a) => {
  if (a.borderRadius !== void 0 && a.borderRadius !== null) {
    const i = qu(a.theme, "shape.borderRadius", 4), o = (c) => ({
      borderRadius: Yu(i, c)
    });
    return Cn(a, a.borderRadius, o);
  }
  return null;
};
Sr.propTypes = {};
Sr.filterProps = ["borderRadius"];
br(V1, Z1, K1, $1, J1, W1, F1, P1, I1, tv, Sr, ev, nv);
const Tr = (a) => {
  if (a.gap !== void 0 && a.gap !== null) {
    const i = qu(a.theme, "spacing", 8), o = (c) => ({
      gap: Yu(i, c)
    });
    return Cn(a, a.gap, o);
  }
  return null;
};
Tr.propTypes = {};
Tr.filterProps = ["gap"];
const Er = (a) => {
  if (a.columnGap !== void 0 && a.columnGap !== null) {
    const i = qu(a.theme, "spacing", 8), o = (c) => ({
      columnGap: Yu(i, c)
    });
    return Cn(a, a.columnGap, o);
  }
  return null;
};
Er.propTypes = {};
Er.filterProps = ["columnGap"];
const xr = (a) => {
  if (a.rowGap !== void 0 && a.rowGap !== null) {
    const i = qu(a.theme, "spacing", 8), o = (c) => ({
      rowGap: Yu(i, c)
    });
    return Cn(a, a.rowGap, o);
  }
  return null;
};
xr.propTypes = {};
xr.filterProps = ["rowGap"];
const lv = Vt({
  prop: "gridColumn"
}), av = Vt({
  prop: "gridRow"
}), uv = Vt({
  prop: "gridAutoFlow"
}), iv = Vt({
  prop: "gridAutoColumns"
}), rv = Vt({
  prop: "gridAutoRows"
}), cv = Vt({
  prop: "gridTemplateColumns"
}), ov = Vt({
  prop: "gridTemplateRows"
}), fv = Vt({
  prop: "gridTemplateAreas"
}), sv = Vt({
  prop: "gridArea"
});
br(Tr, Er, xr, lv, av, uv, iv, rv, cv, ov, fv, sv);
function Ta(a, i) {
  return i === "grey" ? i : a;
}
const dv = Vt({
  prop: "color",
  themeKey: "palette",
  transform: Ta
}), hv = Vt({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Ta
}), mv = Vt({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Ta
});
br(dv, hv, mv);
function Oe(a) {
  return a <= 1 && a !== 0 ? `${a * 100}%` : a;
}
const pv = Vt({
  prop: "width",
  transform: Oe
}), xf = (a) => {
  if (a.maxWidth !== void 0 && a.maxWidth !== null) {
    const i = (o) => {
      const c = a.theme?.breakpoints?.values?.[o] || gr[o];
      return c ? a.theme?.breakpoints?.unit !== "px" ? {
        maxWidth: `${c}${a.theme.breakpoints.unit}`
      } : {
        maxWidth: c
      } : {
        maxWidth: Oe(o)
      };
    };
    return Cn(a, a.maxWidth, i);
  }
  return null;
};
xf.filterProps = ["maxWidth"];
const yv = Vt({
  prop: "minWidth",
  transform: Oe
}), gv = Vt({
  prop: "height",
  transform: Oe
}), vv = Vt({
  prop: "maxHeight",
  transform: Oe
}), bv = Vt({
  prop: "minHeight",
  transform: Oe
});
Vt({
  prop: "size",
  cssProperty: "width",
  transform: Oe
});
Vt({
  prop: "size",
  cssProperty: "height",
  transform: Oe
});
const Sv = Vt({
  prop: "boxSizing"
});
br(pv, xf, yv, gv, vv, bv, Sv);
const ju = {
  // borders
  border: {
    themeKey: "borders",
    transform: je
  },
  borderTop: {
    themeKey: "borders",
    transform: je
  },
  borderRight: {
    themeKey: "borders",
    transform: je
  },
  borderBottom: {
    themeKey: "borders",
    transform: je
  },
  borderLeft: {
    themeKey: "borders",
    transform: je
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: je
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Sr
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Ta
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Ta
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Ta
  },
  // spacing
  p: {
    style: Lt
  },
  pt: {
    style: Lt
  },
  pr: {
    style: Lt
  },
  pb: {
    style: Lt
  },
  pl: {
    style: Lt
  },
  px: {
    style: Lt
  },
  py: {
    style: Lt
  },
  padding: {
    style: Lt
  },
  paddingTop: {
    style: Lt
  },
  paddingRight: {
    style: Lt
  },
  paddingBottom: {
    style: Lt
  },
  paddingLeft: {
    style: Lt
  },
  paddingX: {
    style: Lt
  },
  paddingY: {
    style: Lt
  },
  paddingInline: {
    style: Lt
  },
  paddingInlineStart: {
    style: Lt
  },
  paddingInlineEnd: {
    style: Lt
  },
  paddingBlock: {
    style: Lt
  },
  paddingBlockStart: {
    style: Lt
  },
  paddingBlockEnd: {
    style: Lt
  },
  m: {
    style: kt
  },
  mt: {
    style: kt
  },
  mr: {
    style: kt
  },
  mb: {
    style: kt
  },
  ml: {
    style: kt
  },
  mx: {
    style: kt
  },
  my: {
    style: kt
  },
  margin: {
    style: kt
  },
  marginTop: {
    style: kt
  },
  marginRight: {
    style: kt
  },
  marginBottom: {
    style: kt
  },
  marginLeft: {
    style: kt
  },
  marginX: {
    style: kt
  },
  marginY: {
    style: kt
  },
  marginInline: {
    style: kt
  },
  marginInlineStart: {
    style: kt
  },
  marginInlineEnd: {
    style: kt
  },
  marginBlock: {
    style: kt
  },
  marginBlockStart: {
    style: kt
  },
  marginBlockEnd: {
    style: kt
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (a) => ({
      "@media print": {
        display: a
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: Tr
  },
  rowGap: {
    style: xr
  },
  columnGap: {
    style: Er
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: Oe
  },
  maxWidth: {
    style: xf
  },
  minWidth: {
    transform: Oe
  },
  height: {
    transform: Oe
  },
  maxHeight: {
    transform: Oe
  },
  minHeight: {
    transform: Oe
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function Tv(...a) {
  const i = a.reduce((c, f) => c.concat(Object.keys(f)), []), o = new Set(i);
  return a.every((c) => o.size === Object.keys(c).length);
}
function Ev(a, i) {
  return typeof a == "function" ? a(i) : a;
}
function xv() {
  function a(o, c, f, d) {
    const m = {
      [o]: c,
      theme: f
    }, p = d[o];
    if (!p)
      return {
        [o]: c
      };
    const {
      cssProperty: b = o,
      themeKey: g,
      transform: x,
      style: D
    } = p;
    if (c == null)
      return null;
    if (g === "typography" && c === "inherit")
      return {
        [o]: c
      };
    const N = vr(f, g) || {};
    return D ? D(m) : Cn(m, c, (z) => {
      let A = sr(N, x, z);
      return z === A && typeof z == "string" && (A = sr(N, x, `${o}${z === "default" ? "" : Ze(z)}`, z)), b === !1 ? A : {
        [b]: A
      };
    });
  }
  function i(o) {
    const {
      sx: c,
      theme: f = {},
      nested: d
    } = o || {};
    if (!c)
      return null;
    const m = f.unstable_sxConfig ?? ju;
    function p(b) {
      let g = b;
      if (typeof b == "function")
        g = b(f);
      else if (typeof b != "object")
        return b;
      if (!g)
        return null;
      const x = Y1(f.breakpoints), D = Object.keys(x);
      let N = x;
      return Object.keys(g).forEach((q) => {
        const z = Ev(g[q], f);
        if (z != null)
          if (typeof z == "object")
            if (m[q])
              N = Du(N, a(q, z, f, m));
            else {
              const A = Cn({
                theme: f
              }, z, (w) => ({
                [q]: w
              }));
              Tv(A, z) ? N[q] = i({
                sx: z,
                theme: f,
                nested: !0
              }) : N = Du(N, A);
            }
          else
            N = Du(N, a(q, z, f, m));
      }), !d && f.modularCssLayers ? {
        "@layer sx": L0(f, Q0(D, N))
      } : L0(f, Q0(D, N));
    }
    return Array.isArray(c) ? c.map(p) : p(c);
  }
  return i;
}
const xa = xv();
xa.filterProps = ["sx"];
function Av(a, i) {
  const o = this;
  if (o.vars) {
    if (!o.colorSchemes?.[a] || typeof o.getColorSchemeSelector != "function")
      return {};
    let c = o.getColorSchemeSelector(a);
    return c === "&" ? i : ((c.includes("data-") || c.includes(".")) && (c = `*:where(${c.replace(/\s*&$/, "")}) &`), {
      [c]: i
    });
  }
  return o.palette.mode === a ? i : {};
}
function Af(a = {}, ...i) {
  const {
    breakpoints: o = {},
    palette: c = {},
    spacing: f,
    shape: d = {},
    ...m
  } = a, p = N1(o), b = Bm(f);
  let g = _e({
    breakpoints: p,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...c
    },
    spacing: b,
    shape: {
      ...H1,
      ...d
    }
  }, m);
  return g = w1(g), g.applyStyles = Av, g = i.reduce((x, D) => _e(x, D), g), g.unstable_sxConfig = {
    ...ju,
    ...m?.unstable_sxConfig
  }, g.unstable_sx = function(D) {
    return xa({
      sx: D,
      theme: this
    });
  }, g;
}
function Cv(a) {
  return Object.keys(a).length === 0;
}
function Ov(a = null) {
  const i = I.useContext(Dm);
  return !i || Cv(i) ? a : i;
}
const Rv = Af();
function _v(a = Rv) {
  return Ov(a);
}
const Mv = (a) => {
  const i = {
    systemProps: {},
    otherProps: {}
  }, o = a?.theme?.unstable_sxConfig ?? ju;
  return Object.keys(a).forEach((c) => {
    o[c] ? i.systemProps[c] = a[c] : i.otherProps[c] = a[c];
  }), i;
};
function Dv(a) {
  const {
    sx: i,
    ...o
  } = a, {
    systemProps: c,
    otherProps: f
  } = Mv(o);
  let d;
  return Array.isArray(i) ? d = [c, ...i] : typeof i == "function" ? d = (...m) => {
    const p = i(...m);
    return an(p) ? {
      ...c,
      ...p
    } : c;
  } : d = {
    ...c,
    ...i
  }, {
    ...f,
    sx: d
  };
}
const Z0 = (a) => a, zv = () => {
  let a = Z0;
  return {
    configure(i) {
      a = i;
    },
    generate(i) {
      return a(i);
    },
    reset() {
      a = Z0;
    }
  };
}, Nv = zv();
function wm(a) {
  var i, o, c = "";
  if (typeof a == "string" || typeof a == "number") c += a;
  else if (typeof a == "object") if (Array.isArray(a)) {
    var f = a.length;
    for (i = 0; i < f; i++) a[i] && (o = wm(a[i])) && (c && (c += " "), c += o);
  } else for (o in a) a[o] && (c && (c += " "), c += o);
  return c;
}
function Ge() {
  for (var a, i, o = 0, c = "", f = arguments.length; o < f; o++) (a = arguments[o]) && (i = wm(a)) && (c && (c += " "), c += i);
  return c;
}
const Uv = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function Pn(a, i, o = "Mui") {
  const c = Uv[i];
  return c ? `${o}-${c}` : `${Nv.generate(a)}-${i}`;
}
function Al(a, i, o = "Mui") {
  const c = {};
  return i.forEach((f) => {
    c[f] = Pn(a, f, o);
  }), c;
}
function Hm(a) {
  const {
    variants: i,
    ...o
  } = a, c = {
    variants: i,
    style: Tl(o),
    isProcessed: !0
  };
  return c.style === o || i && i.forEach((f) => {
    typeof f.style != "function" && (f.style = Tl(f.style));
  }), c;
}
const Bv = Af();
function $o(a) {
  return a !== "ownerState" && a !== "theme" && a !== "sx" && a !== "as";
}
function Sl(a, i) {
  return i && a && typeof a == "object" && a.styles && !a.styles.startsWith("@layer") && (a.styles = `@layer ${i}{${String(a.styles)}}`), a;
}
function wv(a) {
  return a ? (i, o) => o[a] : null;
}
function Hv(a, i, o) {
  a.theme = jv(a.theme) ? o : a.theme[i] || a.theme;
}
function or(a, i, o) {
  const c = typeof i == "function" ? i(a) : i;
  if (Array.isArray(c))
    return c.flatMap((f) => or(a, f, o));
  if (Array.isArray(c?.variants)) {
    let f;
    if (c.isProcessed)
      f = o ? Sl(c.style, o) : c.style;
    else {
      const {
        variants: d,
        ...m
      } = c;
      f = o ? Sl(Tl(m), o) : m;
    }
    return qm(a, c.variants, [f], o);
  }
  return c?.isProcessed ? o ? Sl(Tl(c.style), o) : c.style : o ? Sl(Tl(c), o) : c;
}
function qm(a, i, o = [], c = void 0) {
  let f;
  t: for (let d = 0; d < i.length; d += 1) {
    const m = i[d];
    if (typeof m.props == "function") {
      if (f ??= {
        ...a,
        ...a.ownerState,
        ownerState: a.ownerState
      }, !m.props(f))
        continue;
    } else
      for (const p in m.props)
        if (a[p] !== m.props[p] && a.ownerState?.[p] !== m.props[p])
          continue t;
    typeof m.style == "function" ? (f ??= {
      ...a,
      ...a.ownerState,
      ownerState: a.ownerState
    }, o.push(c ? Sl(Tl(m.style(f)), c) : m.style(f))) : o.push(c ? Sl(Tl(m.style), c) : m.style);
  }
  return o;
}
function qv(a = {}) {
  const {
    themeId: i,
    defaultTheme: o = Bv,
    rootShouldForwardProp: c = $o,
    slotShouldForwardProp: f = $o
  } = a;
  function d(p) {
    Hv(p, i, o);
  }
  return (p, b = {}) => {
    _1(p, (k) => k.filter((Z) => Z !== xa));
    const {
      name: g,
      slot: x,
      skipVariantsResolver: D,
      skipSx: N,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: q = wv(kv(x)),
      ...z
    } = b, A = g && g.startsWith("Mui") || x ? "components" : "custom", w = D !== void 0 ? D : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      x && x !== "Root" && x !== "root" || !1
    ), K = N || !1;
    let P = $o;
    x === "Root" || x === "root" ? P = c : x ? P = f : Gv(p) && (P = void 0);
    const Q = R1(p, {
      shouldForwardProp: P,
      label: Yv(),
      ...z
    }), L = (k) => {
      if (k.__emotion_real === k)
        return k;
      if (typeof k == "function")
        return function(ot) {
          return or(ot, k, ot.theme.modularCssLayers ? A : void 0);
        };
      if (an(k)) {
        const Z = Hm(k);
        return function(it) {
          return Z.variants ? or(it, Z, it.theme.modularCssLayers ? A : void 0) : it.theme.modularCssLayers ? Sl(Z.style, A) : Z.style;
        };
      }
      return k;
    }, $ = (...k) => {
      const Z = [], ot = k.map(L), it = [];
      if (Z.push(d), g && q && it.push(function(F) {
        const V = F.theme.components?.[g]?.styleOverrides;
        if (!V)
          return null;
        const C = {};
        for (const X in V)
          C[X] = or(F, V[X], F.theme.modularCssLayers ? "theme" : void 0);
        return q(F, C);
      }), g && !w && it.push(function(F) {
        const V = F.theme?.components?.[g]?.variants;
        return V ? qm(F, V, [], F.theme.modularCssLayers ? "theme" : void 0) : null;
      }), K || it.push(xa), Array.isArray(ot[0])) {
        const y = ot.shift(), F = new Array(Z.length).fill(""), G = new Array(it.length).fill("");
        let V;
        V = [...F, ...y, ...G], V.raw = [...F, ...y.raw, ...G], Z.unshift(V);
      }
      const gt = [...Z, ...ot, ...it], ft = Q(...gt);
      return p.muiName && (ft.muiName = p.muiName), ft;
    };
    return Q.withConfig && ($.withConfig = Q.withConfig), $;
  };
}
function Yv(a, i) {
  return void 0;
}
function jv(a) {
  for (const i in a)
    return !1;
  return !0;
}
function Gv(a) {
  return typeof a == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  a.charCodeAt(0) > 96;
}
function kv(a) {
  return a && a.charAt(0).toLowerCase() + a.slice(1);
}
function uf(a, i, o = !1) {
  const c = {
    ...i
  };
  for (const f in a)
    if (Object.prototype.hasOwnProperty.call(a, f)) {
      const d = f;
      if (d === "components" || d === "slots")
        c[d] = {
          ...a[d],
          ...c[d]
        };
      else if (d === "componentsProps" || d === "slotProps") {
        const m = a[d], p = i[d];
        if (!p)
          c[d] = m || {};
        else if (!m)
          c[d] = p;
        else {
          c[d] = {
            ...p
          };
          for (const b in m)
            if (Object.prototype.hasOwnProperty.call(m, b)) {
              const g = b;
              c[d][g] = uf(m[g], p[g], o);
            }
        }
      } else d === "className" && o && i.className ? c.className = Ge(a?.className, i?.className) : d === "style" && o && i.style ? c.style = {
        ...a?.style,
        ...i?.style
      } : c[d] === void 0 && (c[d] = a[d]);
    }
  return c;
}
const rf = typeof window < "u" ? I.useLayoutEffect : I.useEffect;
function Lv(a, i = Number.MIN_SAFE_INTEGER, o = Number.MAX_SAFE_INTEGER) {
  return Math.max(i, Math.min(a, o));
}
function Cf(a, i = 0, o = 1) {
  return Lv(a, i, o);
}
function Xv(a) {
  a = a.slice(1);
  const i = new RegExp(`.{1,${a.length >= 6 ? 2 : 1}}`, "g");
  let o = a.match(i);
  return o && o[0].length === 1 && (o = o.map((c) => c + c)), o ? `rgb${o.length === 4 ? "a" : ""}(${o.map((c, f) => f < 3 ? parseInt(c, 16) : Math.round(parseInt(c, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Fn(a) {
  if (a.type)
    return a;
  if (a.charAt(0) === "#")
    return Fn(Xv(a));
  const i = a.indexOf("("), o = a.substring(0, i);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(o))
    throw new Error(El(9, a));
  let c = a.substring(i + 1, a.length - 1), f;
  if (o === "color") {
    if (c = c.split(" "), f = c.shift(), c.length === 4 && c[3].charAt(0) === "/" && (c[3] = c[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(f))
      throw new Error(El(10, f));
  } else
    c = c.split(",");
  return c = c.map((d) => parseFloat(d)), {
    type: o,
    values: c,
    colorSpace: f
  };
}
const Qv = (a) => {
  const i = Fn(a);
  return i.values.slice(0, 3).map((o, c) => i.type.includes("hsl") && c !== 0 ? `${o}%` : o).join(" ");
}, Ru = (a, i) => {
  try {
    return Qv(a);
  } catch {
    return a;
  }
};
function Ar(a) {
  const {
    type: i,
    colorSpace: o
  } = a;
  let {
    values: c
  } = a;
  return i.includes("rgb") ? c = c.map((f, d) => d < 3 ? parseInt(f, 10) : f) : i.includes("hsl") && (c[1] = `${c[1]}%`, c[2] = `${c[2]}%`), i.includes("color") ? c = `${o} ${c.join(" ")}` : c = `${c.join(", ")}`, `${i}(${c})`;
}
function Ym(a) {
  a = Fn(a);
  const {
    values: i
  } = a, o = i[0], c = i[1] / 100, f = i[2] / 100, d = c * Math.min(f, 1 - f), m = (g, x = (g + o / 30) % 12) => f - d * Math.max(Math.min(x - 3, 9 - x, 1), -1);
  let p = "rgb";
  const b = [Math.round(m(0) * 255), Math.round(m(8) * 255), Math.round(m(4) * 255)];
  return a.type === "hsla" && (p += "a", b.push(i[3])), Ar({
    type: p,
    values: b
  });
}
function cf(a) {
  a = Fn(a);
  let i = a.type === "hsl" || a.type === "hsla" ? Fn(Ym(a)).values : a.values;
  return i = i.map((o) => (a.type !== "color" && (o /= 255), o <= 0.03928 ? o / 12.92 : ((o + 0.055) / 1.055) ** 2.4)), Number((0.2126 * i[0] + 0.7152 * i[1] + 0.0722 * i[2]).toFixed(3));
}
function Vv(a, i) {
  const o = cf(a), c = cf(i);
  return (Math.max(o, c) + 0.05) / (Math.min(o, c) + 0.05);
}
function dr(a, i) {
  return a = Fn(a), i = Cf(i), (a.type === "rgb" || a.type === "hsl") && (a.type += "a"), a.type === "color" ? a.values[3] = `/${i}` : a.values[3] = i, Ar(a);
}
function gl(a, i, o) {
  try {
    return dr(a, i);
  } catch {
    return a;
  }
}
function Cr(a, i) {
  if (a = Fn(a), i = Cf(i), a.type.includes("hsl"))
    a.values[2] *= 1 - i;
  else if (a.type.includes("rgb") || a.type.includes("color"))
    for (let o = 0; o < 3; o += 1)
      a.values[o] *= 1 - i;
  return Ar(a);
}
function Ot(a, i, o) {
  try {
    return Cr(a, i);
  } catch {
    return a;
  }
}
function Or(a, i) {
  if (a = Fn(a), i = Cf(i), a.type.includes("hsl"))
    a.values[2] += (100 - a.values[2]) * i;
  else if (a.type.includes("rgb"))
    for (let o = 0; o < 3; o += 1)
      a.values[o] += (255 - a.values[o]) * i;
  else if (a.type.includes("color"))
    for (let o = 0; o < 3; o += 1)
      a.values[o] += (1 - a.values[o]) * i;
  return Ar(a);
}
function Rt(a, i, o) {
  try {
    return Or(a, i);
  } catch {
    return a;
  }
}
function Zv(a, i = 0.15) {
  return cf(a) > 0.5 ? Cr(a, i) : Or(a, i);
}
function lr(a, i, o) {
  try {
    return Zv(a, i);
  } catch {
    return a;
  }
}
const Kv = /* @__PURE__ */ I.createContext(void 0);
function $v(a) {
  const {
    theme: i,
    name: o,
    props: c
  } = a;
  if (!i || !i.components || !i.components[o])
    return c;
  const f = i.components[o];
  return f.defaultProps ? uf(f.defaultProps, c, i.components.mergeClassNameAndStyle) : !f.styleOverrides && !f.variants ? uf(f, c, i.components.mergeClassNameAndStyle) : c;
}
function Jv({
  props: a,
  name: i
}) {
  const o = I.useContext(Kv);
  return $v({
    props: a,
    name: i,
    theme: {
      components: o
    }
  });
}
let K0 = 0;
function Wv(a) {
  const [i, o] = I.useState(a), c = a || i;
  return I.useEffect(() => {
    i == null && (K0 += 1, o(`mui-${K0}`));
  }, [i]), c;
}
const Fv = {
  ...tf
}, $0 = Fv.useId;
function Pv(a) {
  if ($0 !== void 0) {
    const i = $0();
    return a ?? i;
  }
  return Wv(a);
}
const J0 = {
  theme: void 0
};
function Iv(a) {
  let i, o;
  return function(f) {
    let d = i;
    return (d === void 0 || f.theme !== o) && (J0.theme = f.theme, d = Hm(a(J0)), i = d, o = f.theme), d;
  };
}
function tb(a = "") {
  function i(...c) {
    if (!c.length)
      return "";
    const f = c[0];
    return typeof f == "string" && !f.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${a ? `${a}-` : ""}${f}${i(...c.slice(1))})` : `, ${f}`;
  }
  return (c, ...f) => `var(--${a ? `${a}-` : ""}${c}${i(...f)})`;
}
const W0 = (a, i, o, c = []) => {
  let f = a;
  i.forEach((d, m) => {
    m === i.length - 1 ? Array.isArray(f) ? f[Number(d)] = o : f && typeof f == "object" && (f[d] = o) : f && typeof f == "object" && (f[d] || (f[d] = c.includes(d) ? [] : {}), f = f[d]);
  });
}, eb = (a, i, o) => {
  function c(f, d = [], m = []) {
    Object.entries(f).forEach(([p, b]) => {
      (!o || o && !o([...d, p])) && b != null && (typeof b == "object" && Object.keys(b).length > 0 ? c(b, [...d, p], Array.isArray(b) ? [...m, p] : m) : i([...d, p], b, m));
    });
  }
  c(a);
}, nb = (a, i) => typeof i == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((c) => a.includes(c)) || a[a.length - 1].toLowerCase().includes("opacity") ? i : `${i}px` : i;
function Jo(a, i) {
  const {
    prefix: o,
    shouldSkipGeneratingVar: c
  } = i || {}, f = {}, d = {}, m = {};
  return eb(
    a,
    (p, b, g) => {
      if ((typeof b == "string" || typeof b == "number") && (!c || !c(p, b))) {
        const x = `--${o ? `${o}-` : ""}${p.join("-")}`, D = nb(p, b);
        Object.assign(f, {
          [x]: D
        }), W0(d, p, `var(${x})`, g), W0(m, p, `var(${x}, ${D})`, g);
      }
    },
    (p) => p[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: f,
    vars: d,
    varsWithDefaults: m
  };
}
function lb(a, i = {}) {
  const {
    getSelector: o = K,
    disableCssColorScheme: c,
    colorSchemeSelector: f,
    enableContrastVars: d
  } = i, {
    colorSchemes: m = {},
    components: p,
    defaultColorScheme: b = "light",
    ...g
  } = a, {
    vars: x,
    css: D,
    varsWithDefaults: N
  } = Jo(g, i);
  let q = N;
  const z = {}, {
    [b]: A,
    ...w
  } = m;
  if (Object.entries(w || {}).forEach(([L, $]) => {
    const {
      vars: k,
      css: Z,
      varsWithDefaults: ot
    } = Jo($, i);
    q = _e(q, ot), z[L] = {
      css: Z,
      vars: k
    };
  }), A) {
    const {
      css: L,
      vars: $,
      varsWithDefaults: k
    } = Jo(A, i);
    q = _e(q, k), z[b] = {
      css: L,
      vars: $
    };
  }
  function K(L, $) {
    let k = f;
    if (f === "class" && (k = ".%s"), f === "data" && (k = "[data-%s]"), f?.startsWith("data-") && !f.includes("%s") && (k = `[${f}="%s"]`), L) {
      if (k === "media")
        return a.defaultColorScheme === L ? ":root" : {
          [`@media (prefers-color-scheme: ${m[L]?.palette?.mode || L})`]: {
            ":root": $
          }
        };
      if (k)
        return a.defaultColorScheme === L ? `:root, ${k.replace("%s", String(L))}` : k.replace("%s", String(L));
    }
    return ":root";
  }
  return {
    vars: q,
    generateThemeVars: () => {
      let L = {
        ...x
      };
      return Object.entries(z).forEach(([, {
        vars: $
      }]) => {
        L = _e(L, $);
      }), L;
    },
    generateStyleSheets: () => {
      const L = [], $ = a.defaultColorScheme || "light";
      function k(it, gt) {
        Object.keys(gt).length && L.push(typeof it == "string" ? {
          [it]: {
            ...gt
          }
        } : it);
      }
      k(o(void 0, {
        ...D
      }), D);
      const {
        [$]: Z,
        ...ot
      } = z;
      if (Z) {
        const {
          css: it
        } = Z, gt = m[$]?.palette?.mode, ft = !c && gt ? {
          colorScheme: gt,
          ...it
        } : {
          ...it
        };
        k(o($, {
          ...ft
        }), ft);
      }
      return Object.entries(ot).forEach(([it, {
        css: gt
      }]) => {
        const ft = m[it]?.palette?.mode, y = !c && ft ? {
          colorScheme: ft,
          ...gt
        } : {
          ...gt
        };
        k(o(it, {
          ...y
        }), y);
      }), d && L.push({
        ":root": {
          // use double underscore to indicate that these are private variables
          "--__l-threshold": "0.7",
          "--__l": "clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)",
          "--__a": "clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)"
          // 0.87 is the default alpha value for black text.
        }
      }), L;
    }
  };
}
function ab(a) {
  return function(o) {
    return a === "media" ? `@media (prefers-color-scheme: ${o})` : a ? a.startsWith("data-") && !a.includes("%s") ? `[${a}="${o}"] &` : a === "class" ? `.${o} &` : a === "data" ? `[data-${o}] &` : `${a.replace("%s", o)} &` : "&";
  };
}
function Cl(a, i, o = void 0) {
  const c = {};
  for (const f in a) {
    const d = a[f];
    let m = "", p = !0;
    for (let b = 0; b < d.length; b += 1) {
      const g = d[b];
      g && (m += (p === !0 ? "" : " ") + i(g), p = !1, o && o[g] && (m += " " + o[g]));
    }
    c[f] = m;
  }
  return c;
}
function jm() {
  return {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: "rgba(0, 0, 0, 0.87)",
      // Secondary text.
      secondary: "rgba(0, 0, 0, 0.6)",
      // Disabled text have even lower visual prominence.
      disabled: "rgba(0, 0, 0, 0.38)"
    },
    // The color used to divide different elements.
    divider: "rgba(0, 0, 0, 0.12)",
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: Nu.white,
      default: Nu.white
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: "rgba(0, 0, 0, 0.54)",
      // The color of an hovered action.
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: "rgba(0, 0, 0, 0.26)",
      // The background color of a disabled action.
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  };
}
const Gm = jm();
function km() {
  return {
    text: {
      primary: Nu.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)"
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      paper: "#121212",
      default: "#121212"
    },
    action: {
      active: Nu.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  };
}
const of = km();
function F0(a, i, o, c) {
  const f = c.light || c, d = c.dark || c * 1.5;
  a[i] || (a.hasOwnProperty(o) ? a[i] = a[o] : i === "light" ? a.light = Or(a.main, f) : i === "dark" && (a.dark = Cr(a.main, d)));
}
function P0(a, i, o, c, f) {
  const d = f.light || f, m = f.dark || f * 1.5;
  i[o] || (i.hasOwnProperty(c) ? i[o] = i[c] : o === "light" ? i.light = `color-mix(in ${a}, ${i.main}, #fff ${(d * 100).toFixed(0)}%)` : o === "dark" && (i.dark = `color-mix(in ${a}, ${i.main}, #000 ${(m * 100).toFixed(0)}%)`));
}
function ub(a = "light") {
  return a === "dark" ? {
    main: ma[200],
    light: ma[50],
    dark: ma[400]
  } : {
    main: ma[700],
    light: ma[400],
    dark: ma[800]
  };
}
function ib(a = "light") {
  return a === "dark" ? {
    main: ha[200],
    light: ha[50],
    dark: ha[400]
  } : {
    main: ha[500],
    light: ha[300],
    dark: ha[700]
  };
}
function rb(a = "light") {
  return a === "dark" ? {
    main: da[500],
    light: da[300],
    dark: da[700]
  } : {
    main: da[700],
    light: da[400],
    dark: da[800]
  };
}
function cb(a = "light") {
  return a === "dark" ? {
    main: pa[400],
    light: pa[300],
    dark: pa[700]
  } : {
    main: pa[700],
    light: pa[500],
    dark: pa[900]
  };
}
function ob(a = "light") {
  return a === "dark" ? {
    main: ya[400],
    light: ya[300],
    dark: ya[700]
  } : {
    main: ya[800],
    light: ya[500],
    dark: ya[900]
  };
}
function fb(a = "light") {
  return a === "dark" ? {
    main: Cu[400],
    light: Cu[300],
    dark: Cu[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Cu[500],
    dark: Cu[900]
  };
}
function sb(a) {
  return `oklch(from ${a} var(--__l) 0 h / var(--__a))`;
}
function Of(a) {
  const {
    mode: i = "light",
    contrastThreshold: o = 3,
    tonalOffset: c = 0.2,
    colorSpace: f,
    ...d
  } = a, m = a.primary || ub(i), p = a.secondary || ib(i), b = a.error || rb(i), g = a.info || cb(i), x = a.success || ob(i), D = a.warning || fb(i);
  function N(w) {
    return f ? sb(w) : Vv(w, of.text.primary) >= o ? of.text.primary : Gm.text.primary;
  }
  const q = ({
    color: w,
    name: K,
    mainShade: P = 500,
    lightShade: Q = 300,
    darkShade: L = 700
  }) => {
    if (w = {
      ...w
    }, !w.main && w[P] && (w.main = w[P]), !w.hasOwnProperty("main"))
      throw new Error(El(11, K ? ` (${K})` : "", P));
    if (typeof w.main != "string")
      throw new Error(El(12, K ? ` (${K})` : "", JSON.stringify(w.main)));
    return f ? (P0(f, w, "light", Q, c), P0(f, w, "dark", L, c)) : (F0(w, "light", Q, c), F0(w, "dark", L, c)), w.contrastText || (w.contrastText = N(w.main)), w;
  };
  let z;
  return i === "light" ? z = jm() : i === "dark" && (z = km()), _e({
    // A collection of common colors.
    common: {
      ...Nu
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: i,
    // The colors used to represent primary interface elements for a user.
    primary: q({
      color: m,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: q({
      color: p,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: q({
      color: b,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: q({
      color: D,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: q({
      color: g,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: q({
      color: x,
      name: "success"
    }),
    // The grey colors.
    grey: Ng,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: o,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: N,
    // Generate a rich color object.
    augmentColor: q,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: c,
    // The light and dark mode object.
    ...z
  }, d);
}
function db(a) {
  const i = {};
  return Object.entries(a).forEach((c) => {
    const [f, d] = c;
    typeof d == "object" && (i[f] = `${d.fontStyle ? `${d.fontStyle} ` : ""}${d.fontVariant ? `${d.fontVariant} ` : ""}${d.fontWeight ? `${d.fontWeight} ` : ""}${d.fontStretch ? `${d.fontStretch} ` : ""}${d.fontSize || ""}${d.lineHeight ? `/${d.lineHeight} ` : ""}${d.fontFamily || ""}`);
  }), i;
}
function hb(a, i) {
  return {
    toolbar: {
      minHeight: 56,
      [a.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [a.up("sm")]: {
        minHeight: 64
      }
    },
    ...i
  };
}
function mb(a) {
  return Math.round(a * 1e5) / 1e5;
}
const I0 = {
  textTransform: "uppercase"
}, tm = '"Roboto", "Helvetica", "Arial", sans-serif';
function pb(a, i) {
  const {
    fontFamily: o = tm,
    // The default font size of the Material Specification.
    fontSize: c = 14,
    // px
    fontWeightLight: f = 300,
    fontWeightRegular: d = 400,
    fontWeightMedium: m = 500,
    fontWeightBold: p = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: b = 16,
    // Apply the CSS properties to all the variants.
    allVariants: g,
    pxToRem: x,
    ...D
  } = typeof i == "function" ? i(a) : i, N = c / 14, q = x || ((w) => `${w / b * N}rem`), z = (w, K, P, Q, L) => ({
    fontFamily: o,
    fontWeight: w,
    fontSize: q(K),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: P,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...o === tm ? {
      letterSpacing: `${mb(Q / K)}em`
    } : {},
    ...L,
    ...g
  }), A = {
    h1: z(f, 96, 1.167, -1.5),
    h2: z(f, 60, 1.2, -0.5),
    h3: z(d, 48, 1.167, 0),
    h4: z(d, 34, 1.235, 0.25),
    h5: z(d, 24, 1.334, 0),
    h6: z(m, 20, 1.6, 0.15),
    subtitle1: z(d, 16, 1.75, 0.15),
    subtitle2: z(m, 14, 1.57, 0.1),
    body1: z(d, 16, 1.5, 0.15),
    body2: z(d, 14, 1.43, 0.15),
    button: z(m, 14, 1.75, 0.4, I0),
    caption: z(d, 12, 1.66, 0.4),
    overline: z(d, 12, 2.66, 1, I0),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return _e({
    htmlFontSize: b,
    pxToRem: q,
    fontFamily: o,
    fontSize: c,
    fontWeightLight: f,
    fontWeightRegular: d,
    fontWeightMedium: m,
    fontWeightBold: p,
    ...A
  }, D, {
    clone: !1
    // No need to clone deep
  });
}
const yb = 0.2, gb = 0.14, vb = 0.12;
function qt(...a) {
  return [`${a[0]}px ${a[1]}px ${a[2]}px ${a[3]}px rgba(0,0,0,${yb})`, `${a[4]}px ${a[5]}px ${a[6]}px ${a[7]}px rgba(0,0,0,${gb})`, `${a[8]}px ${a[9]}px ${a[10]}px ${a[11]}px rgba(0,0,0,${vb})`].join(",");
}
const bb = ["none", qt(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), qt(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), qt(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), qt(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), qt(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), qt(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), qt(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), qt(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), qt(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), qt(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), qt(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), qt(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), qt(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), qt(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), qt(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), qt(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), qt(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), qt(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), qt(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), qt(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), qt(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), qt(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), qt(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), qt(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Sb = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Tb = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function em(a) {
  return `${Math.round(a)}ms`;
}
function Eb(a) {
  if (!a)
    return 0;
  const i = a / 36;
  return Math.min(Math.round((4 + 15 * i ** 0.25 + i / 5) * 10), 3e3);
}
function xb(a) {
  const i = {
    ...Sb,
    ...a.easing
  }, o = {
    ...Tb,
    ...a.duration
  };
  return {
    getAutoHeightDuration: Eb,
    create: (f = ["all"], d = {}) => {
      const {
        duration: m = o.standard,
        easing: p = i.easeInOut,
        delay: b = 0,
        ...g
      } = d;
      return (Array.isArray(f) ? f : [f]).map((x) => `${x} ${typeof m == "string" ? m : em(m)} ${p} ${typeof b == "string" ? b : em(b)}`).join(",");
    },
    ...a,
    easing: i,
    duration: o
  };
}
const Ab = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Cb(a) {
  return an(a) || typeof a > "u" || typeof a == "string" || typeof a == "boolean" || typeof a == "number" || Array.isArray(a);
}
function Lm(a = {}) {
  const i = {
    ...a
  };
  function o(c) {
    const f = Object.entries(c);
    for (let d = 0; d < f.length; d++) {
      const [m, p] = f[d];
      !Cb(p) || m.startsWith("unstable_") ? delete c[m] : an(p) && (c[m] = {
        ...p
      }, o(c[m]));
    }
  }
  return o(i), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(i, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function nm(a) {
  return typeof a == "number" ? `${(a * 100).toFixed(0)}%` : `calc((${a}) * 100%)`;
}
const Ob = (a) => {
  if (!Number.isNaN(+a))
    return +a;
  const i = a.match(/\d*\.?\d+/g);
  if (!i)
    return 0;
  let o = 0;
  for (let c = 0; c < i.length; c += 1)
    o += +i[c];
  return o;
};
function Rb(a) {
  Object.assign(a, {
    alpha(i, o) {
      const c = this || a;
      return c.colorSpace ? `oklch(from ${i} l c h / ${typeof o == "string" ? `calc(${o})` : o})` : c.vars ? `rgba(${i.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof o == "string" ? `calc(${o})` : o})` : dr(i, Ob(o));
    },
    lighten(i, o) {
      const c = this || a;
      return c.colorSpace ? `color-mix(in ${c.colorSpace}, ${i}, #fff ${nm(o)})` : Or(i, o);
    },
    darken(i, o) {
      const c = this || a;
      return c.colorSpace ? `color-mix(in ${c.colorSpace}, ${i}, #000 ${nm(o)})` : Cr(i, o);
    }
  });
}
function ff(a = {}, ...i) {
  const {
    breakpoints: o,
    mixins: c = {},
    spacing: f,
    palette: d = {},
    transitions: m = {},
    typography: p = {},
    shape: b,
    colorSpace: g,
    ...x
  } = a;
  if (a.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  a.generateThemeVars === void 0)
    throw new Error(El(20));
  const D = Of({
    ...d,
    colorSpace: g
  }), N = Af(a);
  let q = _e(N, {
    mixins: hb(N.breakpoints, c),
    palette: D,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: bb.slice(),
    typography: pb(D, p),
    transitions: xb(m),
    zIndex: {
      ...Ab
    }
  });
  return q = _e(q, x), q = i.reduce((z, A) => _e(z, A), q), q.unstable_sxConfig = {
    ...ju,
    ...x?.unstable_sxConfig
  }, q.unstable_sx = function(A) {
    return xa({
      sx: A,
      theme: this
    });
  }, q.toRuntimeSource = Lm, Rb(q), q;
}
function sf(a) {
  let i;
  return a < 1 ? i = 5.11916 * a ** 2 : i = 4.5 * Math.log(a + 1) + 2, Math.round(i * 10) / 1e3;
}
const _b = [...Array(25)].map((a, i) => {
  if (i === 0)
    return "none";
  const o = sf(i);
  return `linear-gradient(rgba(255 255 255 / ${o}), rgba(255 255 255 / ${o}))`;
});
function Xm(a) {
  return {
    inputPlaceholder: a === "dark" ? 0.5 : 0.42,
    inputUnderline: a === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: a === "dark" ? 0.2 : 0.12,
    switchTrack: a === "dark" ? 0.3 : 0.38
  };
}
function Qm(a) {
  return a === "dark" ? _b : [];
}
function Mb(a) {
  const {
    palette: i = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: o,
    overlays: c,
    colorSpace: f,
    ...d
  } = a, m = Of({
    ...i,
    colorSpace: f
  });
  return {
    palette: m,
    opacity: {
      ...Xm(m.mode),
      ...o
    },
    overlays: c || Qm(m.mode),
    ...d
  };
}
function Db(a) {
  return !!a[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!a[0].match(/sxConfig$/) || // ends with sxConfig
  a[0] === "palette" && !!a[1]?.match(/(mode|contrastThreshold|tonalOffset)/);
}
const zb = (a) => [...[...Array(25)].map((i, o) => `--${a ? `${a}-` : ""}overlays-${o}`), `--${a ? `${a}-` : ""}palette-AppBar-darkBg`, `--${a ? `${a}-` : ""}palette-AppBar-darkColor`], Nb = (a) => (i, o) => {
  const c = a.rootSelector || ":root", f = a.colorSchemeSelector;
  let d = f;
  if (f === "class" && (d = ".%s"), f === "data" && (d = "[data-%s]"), f?.startsWith("data-") && !f.includes("%s") && (d = `[${f}="%s"]`), a.defaultColorScheme === i) {
    if (i === "dark") {
      const m = {};
      return zb(a.cssVarPrefix).forEach((p) => {
        m[p] = o[p], delete o[p];
      }), d === "media" ? {
        [c]: o,
        "@media (prefers-color-scheme: dark)": {
          [c]: m
        }
      } : d ? {
        [d.replace("%s", i)]: m,
        [`${c}, ${d.replace("%s", i)}`]: o
      } : {
        [c]: {
          ...o,
          ...m
        }
      };
    }
    if (d && d !== "media")
      return `${c}, ${d.replace("%s", String(i))}`;
  } else if (i) {
    if (d === "media")
      return {
        [`@media (prefers-color-scheme: ${String(i)})`]: {
          [c]: o
        }
      };
    if (d)
      return d.replace("%s", String(i));
  }
  return c;
};
function Ub(a, i) {
  i.forEach((o) => {
    a[o] || (a[o] = {});
  });
}
function U(a, i, o) {
  !a[i] && o && (a[i] = o);
}
function _u(a) {
  return typeof a != "string" || !a.startsWith("hsl") ? a : Ym(a);
}
function xn(a, i) {
  `${i}Channel` in a || (a[`${i}Channel`] = Ru(_u(a[i])));
}
function Bb(a) {
  return typeof a == "number" ? `${a}px` : typeof a == "string" || typeof a == "function" || Array.isArray(a) ? a : "8px";
}
const en = (a) => {
  try {
    return a();
  } catch {
  }
}, wb = (a = "mui") => tb(a);
function Wo(a, i, o, c, f) {
  if (!o)
    return;
  o = o === !0 ? {} : o;
  const d = f === "dark" ? "dark" : "light";
  if (!c) {
    i[f] = Mb({
      ...o,
      palette: {
        mode: d,
        ...o?.palette
      },
      colorSpace: a
    });
    return;
  }
  const {
    palette: m,
    ...p
  } = ff({
    ...c,
    palette: {
      mode: d,
      ...o?.palette
    },
    colorSpace: a
  });
  return i[f] = {
    ...o,
    palette: m,
    opacity: {
      ...Xm(d),
      ...o?.opacity
    },
    overlays: o?.overlays || Qm(d)
  }, p;
}
function Hb(a = {}, ...i) {
  const {
    colorSchemes: o = {
      light: !0
    },
    defaultColorScheme: c,
    disableCssColorScheme: f = !1,
    cssVarPrefix: d = "mui",
    nativeColor: m = !1,
    shouldSkipGeneratingVar: p = Db,
    colorSchemeSelector: b = o.light && o.dark ? "media" : void 0,
    rootSelector: g = ":root",
    ...x
  } = a, D = Object.keys(o)[0], N = c || (o.light && D !== "light" ? "light" : D), q = wb(d), {
    [N]: z,
    light: A,
    dark: w,
    ...K
  } = o, P = {
    ...K
  };
  let Q = z;
  if ((N === "dark" && !("dark" in o) || N === "light" && !("light" in o)) && (Q = !0), !Q)
    throw new Error(El(21, N));
  let L;
  m && (L = "oklch");
  const $ = Wo(L, P, Q, x, N);
  A && !P.light && Wo(L, P, A, void 0, "light"), w && !P.dark && Wo(L, P, w, void 0, "dark");
  let k = {
    defaultColorScheme: N,
    ...$,
    cssVarPrefix: d,
    colorSchemeSelector: b,
    rootSelector: g,
    getCssVar: q,
    colorSchemes: P,
    font: {
      ...db($.typography),
      ...$.font
    },
    spacing: Bb(x.spacing)
  };
  Object.keys(k.colorSchemes).forEach((ft) => {
    const y = k.colorSchemes[ft].palette, F = (V) => {
      const C = V.split("-"), X = C[1], et = C[2];
      return q(V, y[X][et]);
    };
    y.mode === "light" && (U(y.common, "background", "#fff"), U(y.common, "onBackground", "#000")), y.mode === "dark" && (U(y.common, "background", "#000"), U(y.common, "onBackground", "#fff"));
    function G(V, C, X) {
      if (L) {
        let et;
        return V === gl && (et = `transparent ${((1 - X) * 100).toFixed(0)}%`), V === Ot && (et = `#000 ${(X * 100).toFixed(0)}%`), V === Rt && (et = `#fff ${(X * 100).toFixed(0)}%`), `color-mix(in ${L}, ${C}, ${et})`;
      }
      return V(C, X);
    }
    if (Ub(y, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), y.mode === "light") {
      U(y.Alert, "errorColor", G(Ot, y.error.light, 0.6)), U(y.Alert, "infoColor", G(Ot, y.info.light, 0.6)), U(y.Alert, "successColor", G(Ot, y.success.light, 0.6)), U(y.Alert, "warningColor", G(Ot, y.warning.light, 0.6)), U(y.Alert, "errorFilledBg", F("palette-error-main")), U(y.Alert, "infoFilledBg", F("palette-info-main")), U(y.Alert, "successFilledBg", F("palette-success-main")), U(y.Alert, "warningFilledBg", F("palette-warning-main")), U(y.Alert, "errorFilledColor", en(() => y.getContrastText(y.error.main))), U(y.Alert, "infoFilledColor", en(() => y.getContrastText(y.info.main))), U(y.Alert, "successFilledColor", en(() => y.getContrastText(y.success.main))), U(y.Alert, "warningFilledColor", en(() => y.getContrastText(y.warning.main))), U(y.Alert, "errorStandardBg", G(Rt, y.error.light, 0.9)), U(y.Alert, "infoStandardBg", G(Rt, y.info.light, 0.9)), U(y.Alert, "successStandardBg", G(Rt, y.success.light, 0.9)), U(y.Alert, "warningStandardBg", G(Rt, y.warning.light, 0.9)), U(y.Alert, "errorIconColor", F("palette-error-main")), U(y.Alert, "infoIconColor", F("palette-info-main")), U(y.Alert, "successIconColor", F("palette-success-main")), U(y.Alert, "warningIconColor", F("palette-warning-main")), U(y.AppBar, "defaultBg", F("palette-grey-100")), U(y.Avatar, "defaultBg", F("palette-grey-400")), U(y.Button, "inheritContainedBg", F("palette-grey-300")), U(y.Button, "inheritContainedHoverBg", F("palette-grey-A100")), U(y.Chip, "defaultBorder", F("palette-grey-400")), U(y.Chip, "defaultAvatarColor", F("palette-grey-700")), U(y.Chip, "defaultIconColor", F("palette-grey-700")), U(y.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), U(y.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), U(y.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), U(y.LinearProgress, "primaryBg", G(Rt, y.primary.main, 0.62)), U(y.LinearProgress, "secondaryBg", G(Rt, y.secondary.main, 0.62)), U(y.LinearProgress, "errorBg", G(Rt, y.error.main, 0.62)), U(y.LinearProgress, "infoBg", G(Rt, y.info.main, 0.62)), U(y.LinearProgress, "successBg", G(Rt, y.success.main, 0.62)), U(y.LinearProgress, "warningBg", G(Rt, y.warning.main, 0.62)), U(y.Skeleton, "bg", L ? G(gl, y.text.primary, 0.11) : `rgba(${F("palette-text-primaryChannel")} / 0.11)`), U(y.Slider, "primaryTrack", G(Rt, y.primary.main, 0.62)), U(y.Slider, "secondaryTrack", G(Rt, y.secondary.main, 0.62)), U(y.Slider, "errorTrack", G(Rt, y.error.main, 0.62)), U(y.Slider, "infoTrack", G(Rt, y.info.main, 0.62)), U(y.Slider, "successTrack", G(Rt, y.success.main, 0.62)), U(y.Slider, "warningTrack", G(Rt, y.warning.main, 0.62));
      const V = L ? G(Ot, y.background.default, 0.6825) : lr(y.background.default, 0.8);
      U(y.SnackbarContent, "bg", V), U(y.SnackbarContent, "color", en(() => L ? of.text.primary : y.getContrastText(V))), U(y.SpeedDialAction, "fabHoverBg", lr(y.background.paper, 0.15)), U(y.StepConnector, "border", F("palette-grey-400")), U(y.StepContent, "border", F("palette-grey-400")), U(y.Switch, "defaultColor", F("palette-common-white")), U(y.Switch, "defaultDisabledColor", F("palette-grey-100")), U(y.Switch, "primaryDisabledColor", G(Rt, y.primary.main, 0.62)), U(y.Switch, "secondaryDisabledColor", G(Rt, y.secondary.main, 0.62)), U(y.Switch, "errorDisabledColor", G(Rt, y.error.main, 0.62)), U(y.Switch, "infoDisabledColor", G(Rt, y.info.main, 0.62)), U(y.Switch, "successDisabledColor", G(Rt, y.success.main, 0.62)), U(y.Switch, "warningDisabledColor", G(Rt, y.warning.main, 0.62)), U(y.TableCell, "border", G(Rt, G(gl, y.divider, 1), 0.88)), U(y.Tooltip, "bg", G(gl, y.grey[700], 0.92));
    }
    if (y.mode === "dark") {
      U(y.Alert, "errorColor", G(Rt, y.error.light, 0.6)), U(y.Alert, "infoColor", G(Rt, y.info.light, 0.6)), U(y.Alert, "successColor", G(Rt, y.success.light, 0.6)), U(y.Alert, "warningColor", G(Rt, y.warning.light, 0.6)), U(y.Alert, "errorFilledBg", F("palette-error-dark")), U(y.Alert, "infoFilledBg", F("palette-info-dark")), U(y.Alert, "successFilledBg", F("palette-success-dark")), U(y.Alert, "warningFilledBg", F("palette-warning-dark")), U(y.Alert, "errorFilledColor", en(() => y.getContrastText(y.error.dark))), U(y.Alert, "infoFilledColor", en(() => y.getContrastText(y.info.dark))), U(y.Alert, "successFilledColor", en(() => y.getContrastText(y.success.dark))), U(y.Alert, "warningFilledColor", en(() => y.getContrastText(y.warning.dark))), U(y.Alert, "errorStandardBg", G(Ot, y.error.light, 0.9)), U(y.Alert, "infoStandardBg", G(Ot, y.info.light, 0.9)), U(y.Alert, "successStandardBg", G(Ot, y.success.light, 0.9)), U(y.Alert, "warningStandardBg", G(Ot, y.warning.light, 0.9)), U(y.Alert, "errorIconColor", F("palette-error-main")), U(y.Alert, "infoIconColor", F("palette-info-main")), U(y.Alert, "successIconColor", F("palette-success-main")), U(y.Alert, "warningIconColor", F("palette-warning-main")), U(y.AppBar, "defaultBg", F("palette-grey-900")), U(y.AppBar, "darkBg", F("palette-background-paper")), U(y.AppBar, "darkColor", F("palette-text-primary")), U(y.Avatar, "defaultBg", F("palette-grey-600")), U(y.Button, "inheritContainedBg", F("palette-grey-800")), U(y.Button, "inheritContainedHoverBg", F("palette-grey-700")), U(y.Chip, "defaultBorder", F("palette-grey-700")), U(y.Chip, "defaultAvatarColor", F("palette-grey-300")), U(y.Chip, "defaultIconColor", F("palette-grey-300")), U(y.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), U(y.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), U(y.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), U(y.LinearProgress, "primaryBg", G(Ot, y.primary.main, 0.5)), U(y.LinearProgress, "secondaryBg", G(Ot, y.secondary.main, 0.5)), U(y.LinearProgress, "errorBg", G(Ot, y.error.main, 0.5)), U(y.LinearProgress, "infoBg", G(Ot, y.info.main, 0.5)), U(y.LinearProgress, "successBg", G(Ot, y.success.main, 0.5)), U(y.LinearProgress, "warningBg", G(Ot, y.warning.main, 0.5)), U(y.Skeleton, "bg", L ? G(gl, y.text.primary, 0.13) : `rgba(${F("palette-text-primaryChannel")} / 0.13)`), U(y.Slider, "primaryTrack", G(Ot, y.primary.main, 0.5)), U(y.Slider, "secondaryTrack", G(Ot, y.secondary.main, 0.5)), U(y.Slider, "errorTrack", G(Ot, y.error.main, 0.5)), U(y.Slider, "infoTrack", G(Ot, y.info.main, 0.5)), U(y.Slider, "successTrack", G(Ot, y.success.main, 0.5)), U(y.Slider, "warningTrack", G(Ot, y.warning.main, 0.5));
      const V = L ? G(Rt, y.background.default, 0.985) : lr(y.background.default, 0.98);
      U(y.SnackbarContent, "bg", V), U(y.SnackbarContent, "color", en(() => L ? Gm.text.primary : y.getContrastText(V))), U(y.SpeedDialAction, "fabHoverBg", lr(y.background.paper, 0.15)), U(y.StepConnector, "border", F("palette-grey-600")), U(y.StepContent, "border", F("palette-grey-600")), U(y.Switch, "defaultColor", F("palette-grey-300")), U(y.Switch, "defaultDisabledColor", F("palette-grey-600")), U(y.Switch, "primaryDisabledColor", G(Ot, y.primary.main, 0.55)), U(y.Switch, "secondaryDisabledColor", G(Ot, y.secondary.main, 0.55)), U(y.Switch, "errorDisabledColor", G(Ot, y.error.main, 0.55)), U(y.Switch, "infoDisabledColor", G(Ot, y.info.main, 0.55)), U(y.Switch, "successDisabledColor", G(Ot, y.success.main, 0.55)), U(y.Switch, "warningDisabledColor", G(Ot, y.warning.main, 0.55)), U(y.TableCell, "border", G(Ot, G(gl, y.divider, 1), 0.68)), U(y.Tooltip, "bg", G(gl, y.grey[700], 0.92));
    }
    xn(y.background, "default"), xn(y.background, "paper"), xn(y.common, "background"), xn(y.common, "onBackground"), xn(y, "divider"), Object.keys(y).forEach((V) => {
      const C = y[V];
      V !== "tonalOffset" && C && typeof C == "object" && (C.main && U(y[V], "mainChannel", Ru(_u(C.main))), C.light && U(y[V], "lightChannel", Ru(_u(C.light))), C.dark && U(y[V], "darkChannel", Ru(_u(C.dark))), C.contrastText && U(y[V], "contrastTextChannel", Ru(_u(C.contrastText))), V === "text" && (xn(y[V], "primary"), xn(y[V], "secondary")), V === "action" && (C.active && xn(y[V], "active"), C.selected && xn(y[V], "selected")));
    });
  }), k = i.reduce((ft, y) => _e(ft, y), k);
  const Z = {
    prefix: d,
    disableCssColorScheme: f,
    shouldSkipGeneratingVar: p,
    getSelector: Nb(k),
    enableContrastVars: m
  }, {
    vars: ot,
    generateThemeVars: it,
    generateStyleSheets: gt
  } = lb(k, Z);
  return k.vars = ot, Object.entries(k.colorSchemes[k.defaultColorScheme]).forEach(([ft, y]) => {
    k[ft] = y;
  }), k.generateThemeVars = it, k.generateStyleSheets = gt, k.generateSpacing = function() {
    return Bm(x.spacing, Ef(this));
  }, k.getColorSchemeSelector = ab(b), k.spacing = k.generateSpacing(), k.shouldSkipGeneratingVar = p, k.unstable_sxConfig = {
    ...ju,
    ...x?.unstable_sxConfig
  }, k.unstable_sx = function(y) {
    return xa({
      sx: y,
      theme: this
    });
  }, k.toRuntimeSource = Lm, k;
}
function lm(a, i, o) {
  a.colorSchemes && o && (a.colorSchemes[i] = {
    ...o !== !0 && o,
    palette: Of({
      ...o === !0 ? {} : o.palette,
      mode: i
    })
    // cast type to skip module augmentation test
  });
}
function qb(a = {}, ...i) {
  const {
    palette: o,
    cssVariables: c = !1,
    colorSchemes: f = o ? void 0 : {
      light: !0
    },
    defaultColorScheme: d = o?.mode,
    ...m
  } = a, p = d || "light", b = f?.[p], g = {
    ...f,
    ...o ? {
      [p]: {
        ...typeof b != "boolean" && b,
        palette: o
      }
    } : void 0
  };
  if (c === !1) {
    if (!("colorSchemes" in a))
      return ff(a, ...i);
    let x = o;
    "palette" in a || g[p] && (g[p] !== !0 ? x = g[p].palette : p === "dark" && (x = {
      mode: "dark"
    }));
    const D = ff({
      ...a,
      palette: x
    }, ...i);
    return D.defaultColorScheme = p, D.colorSchemes = g, D.palette.mode === "light" && (D.colorSchemes.light = {
      ...g.light !== !0 && g.light,
      palette: D.palette
    }, lm(D, "dark", g.dark)), D.palette.mode === "dark" && (D.colorSchemes.dark = {
      ...g.dark !== !0 && g.dark,
      palette: D.palette
    }, lm(D, "light", g.light)), D;
  }
  return !o && !("light" in g) && p === "light" && (g.light = !0), Hb({
    ...m,
    colorSchemes: g,
    defaultColorScheme: p,
    ...typeof c != "boolean" && c
  }, ...i);
}
const Vm = qb();
function Rf() {
  const a = _v(Vm);
  return a[gm] || a;
}
function Yb(a) {
  return a !== "ownerState" && a !== "theme" && a !== "sx" && a !== "as";
}
const jb = (a) => Yb(a) && a !== "classes", Ke = qv({
  themeId: gm,
  defaultTheme: Vm,
  rootShouldForwardProp: jb
});
function am(...a) {
  return a.reduce((i, o) => o == null ? i : function(...f) {
    i.apply(this, f), o.apply(this, f);
  }, () => {
  });
}
function Gb() {
  return Dv;
}
const Gu = Iv;
function Ol(a) {
  return Jv(a);
}
function xl(a) {
  return a && a.ownerDocument || document;
}
function hr(a) {
  return xl(a).defaultView || window;
}
function um(a, i) {
  typeof a == "function" ? a(i) : a && (a.current = i);
}
function im(a) {
  const i = I.useRef(a);
  return rf(() => {
    i.current = a;
  }), I.useRef((...o) => (
    // @ts-expect-error hide `this`
    (0, i.current)(...o)
  )).current;
}
function ku(...a) {
  const i = I.useRef(void 0), o = I.useCallback((c) => {
    const f = a.map((d) => {
      if (d == null)
        return null;
      if (typeof d == "function") {
        const m = d, p = m(c);
        return typeof p == "function" ? p : () => {
          m(null);
        };
      }
      return d.current = c, () => {
        d.current = null;
      };
    });
    return () => {
      f.forEach((d) => d?.());
    };
  }, a);
  return I.useMemo(() => a.every((c) => c == null) ? null : (c) => {
    i.current && (i.current(), i.current = void 0), c != null && (i.current = o(c));
  }, a);
}
function kb(a, i) {
  if (a == null) return {};
  var o = {};
  for (var c in a) if ({}.hasOwnProperty.call(a, c)) {
    if (i.indexOf(c) !== -1) continue;
    o[c] = a[c];
  }
  return o;
}
function df(a, i) {
  return df = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, c) {
    return o.__proto__ = c, o;
  }, df(a, i);
}
function Lb(a, i) {
  a.prototype = Object.create(i.prototype), a.prototype.constructor = a, df(a, i);
}
var Zm = pm();
const ar = /* @__PURE__ */ pf(Zm), rm = {
  disabled: !1
}, Km = ba.createContext(null);
var Xb = function(i) {
  return i.scrollTop;
}, Mu = "unmounted", vl = "exited", bl = "entering", va = "entered", hf = "exiting", On = /* @__PURE__ */ (function(a) {
  Lb(i, a);
  function i(c, f) {
    var d;
    d = a.call(this, c, f) || this;
    var m = f, p = m && !m.isMounting ? c.enter : c.appear, b;
    return d.appearStatus = null, c.in ? p ? (b = vl, d.appearStatus = bl) : b = va : c.unmountOnExit || c.mountOnEnter ? b = Mu : b = vl, d.state = {
      status: b
    }, d.nextCallback = null, d;
  }
  i.getDerivedStateFromProps = function(f, d) {
    var m = f.in;
    return m && d.status === Mu ? {
      status: vl
    } : null;
  };
  var o = i.prototype;
  return o.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, o.componentDidUpdate = function(f) {
    var d = null;
    if (f !== this.props) {
      var m = this.state.status;
      this.props.in ? m !== bl && m !== va && (d = bl) : (m === bl || m === va) && (d = hf);
    }
    this.updateStatus(!1, d);
  }, o.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, o.getTimeouts = function() {
    var f = this.props.timeout, d, m, p;
    return d = m = p = f, f != null && typeof f != "number" && (d = f.exit, m = f.enter, p = f.appear !== void 0 ? f.appear : m), {
      exit: d,
      enter: m,
      appear: p
    };
  }, o.updateStatus = function(f, d) {
    if (f === void 0 && (f = !1), d !== null)
      if (this.cancelNextCallback(), d === bl) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var m = this.props.nodeRef ? this.props.nodeRef.current : ar.findDOMNode(this);
          m && Xb(m);
        }
        this.performEnter(f);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === vl && this.setState({
      status: Mu
    });
  }, o.performEnter = function(f) {
    var d = this, m = this.props.enter, p = this.context ? this.context.isMounting : f, b = this.props.nodeRef ? [p] : [ar.findDOMNode(this), p], g = b[0], x = b[1], D = this.getTimeouts(), N = p ? D.appear : D.enter;
    if (!f && !m || rm.disabled) {
      this.safeSetState({
        status: va
      }, function() {
        d.props.onEntered(g);
      });
      return;
    }
    this.props.onEnter(g, x), this.safeSetState({
      status: bl
    }, function() {
      d.props.onEntering(g, x), d.onTransitionEnd(N, function() {
        d.safeSetState({
          status: va
        }, function() {
          d.props.onEntered(g, x);
        });
      });
    });
  }, o.performExit = function() {
    var f = this, d = this.props.exit, m = this.getTimeouts(), p = this.props.nodeRef ? void 0 : ar.findDOMNode(this);
    if (!d || rm.disabled) {
      this.safeSetState({
        status: vl
      }, function() {
        f.props.onExited(p);
      });
      return;
    }
    this.props.onExit(p), this.safeSetState({
      status: hf
    }, function() {
      f.props.onExiting(p), f.onTransitionEnd(m.exit, function() {
        f.safeSetState({
          status: vl
        }, function() {
          f.props.onExited(p);
        });
      });
    });
  }, o.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, o.safeSetState = function(f, d) {
    d = this.setNextCallback(d), this.setState(f, d);
  }, o.setNextCallback = function(f) {
    var d = this, m = !0;
    return this.nextCallback = function(p) {
      m && (m = !1, d.nextCallback = null, f(p));
    }, this.nextCallback.cancel = function() {
      m = !1;
    }, this.nextCallback;
  }, o.onTransitionEnd = function(f, d) {
    this.setNextCallback(d);
    var m = this.props.nodeRef ? this.props.nodeRef.current : ar.findDOMNode(this), p = f == null && !this.props.addEndListener;
    if (!m || p) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var b = this.props.nodeRef ? [this.nextCallback] : [m, this.nextCallback], g = b[0], x = b[1];
      this.props.addEndListener(g, x);
    }
    f != null && setTimeout(this.nextCallback, f);
  }, o.render = function() {
    var f = this.state.status;
    if (f === Mu)
      return null;
    var d = this.props, m = d.children;
    d.in, d.mountOnEnter, d.unmountOnExit, d.appear, d.enter, d.exit, d.timeout, d.addEndListener, d.onEnter, d.onEntering, d.onEntered, d.onExit, d.onExiting, d.onExited, d.nodeRef;
    var p = kb(d, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ ba.createElement(Km.Provider, {
        value: null
      }, typeof m == "function" ? m(f, p) : ba.cloneElement(ba.Children.only(m), p))
    );
  }, i;
})(ba.Component);
On.contextType = Km;
On.propTypes = {};
function ga() {
}
On.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: ga,
  onEntering: ga,
  onEntered: ga,
  onExit: ga,
  onExiting: ga,
  onExited: ga
};
On.UNMOUNTED = Mu;
On.EXITED = vl;
On.ENTERING = bl;
On.ENTERED = va;
On.EXITING = hf;
const Qb = (a) => a.scrollTop;
function cm(a, i) {
  const {
    timeout: o,
    easing: c,
    style: f = {}
  } = a;
  return {
    duration: f.transitionDuration ?? (typeof o == "number" ? o : o[i.mode] || 0),
    easing: f.transitionTimingFunction ?? (typeof c == "object" ? c[i.mode] : c),
    delay: f.transitionDelay
  };
}
function Vb(a) {
  return Pn("MuiPaper", a);
}
Al("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const Zb = (a) => {
  const {
    square: i,
    elevation: o,
    variant: c,
    classes: f
  } = a, d = {
    root: ["root", c, !i && "rounded", c === "elevation" && `elevation${o}`]
  };
  return Cl(d, Vb, f);
}, Kb = Ke("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (a, i) => {
    const {
      ownerState: o
    } = a;
    return [i.root, i[o.variant], !o.square && i.rounded, o.variant === "elevation" && i[`elevation${o.elevation}`]];
  }
})(Gu(({
  theme: a
}) => ({
  backgroundColor: (a.vars || a).palette.background.paper,
  color: (a.vars || a).palette.text.primary,
  transition: a.transitions.create("box-shadow"),
  variants: [{
    props: ({
      ownerState: i
    }) => !i.square,
    style: {
      borderRadius: a.shape.borderRadius
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      border: `1px solid ${(a.vars || a).palette.divider}`
    }
  }, {
    props: {
      variant: "elevation"
    },
    style: {
      boxShadow: "var(--Paper-shadow)",
      backgroundImage: "var(--Paper-overlay)"
    }
  }]
}))), $m = /* @__PURE__ */ I.forwardRef(function(i, o) {
  const c = Ol({
    props: i,
    name: "MuiPaper"
  }), f = Rf(), {
    className: d,
    component: m = "div",
    elevation: p = 1,
    square: b = !1,
    variant: g = "elevation",
    ...x
  } = c, D = {
    ...c,
    component: m,
    elevation: p,
    square: b,
    variant: g
  }, N = Zb(D);
  return /* @__PURE__ */ _t.jsx(Kb, {
    as: m,
    ownerState: D,
    className: Ge(N.root, d),
    ref: o,
    ...x,
    style: {
      ...g === "elevation" && {
        "--Paper-shadow": (f.vars || f).shadows[p],
        ...f.vars && {
          "--Paper-overlay": f.vars.overlays?.[p]
        },
        ...!f.vars && f.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${dr("#fff", sf(p))}, ${dr("#fff", sf(p))})`
        }
      },
      ...x.style
    }
  });
});
function $b(a) {
  return typeof a == "string";
}
function Jb(a, i, o) {
  return a === void 0 || $b(a) ? i : {
    ...i,
    ownerState: {
      ...i.ownerState,
      ...o
    }
  };
}
function Wb(a, i, o) {
  return typeof a == "function" ? a(i, o) : a;
}
function Jm(a, i = []) {
  if (a === void 0)
    return {};
  const o = {};
  return Object.keys(a).filter((c) => c.match(/^on[A-Z]/) && typeof a[c] == "function" && !i.includes(c)).forEach((c) => {
    o[c] = a[c];
  }), o;
}
function om(a) {
  if (a === void 0)
    return {};
  const i = {};
  return Object.keys(a).filter((o) => !(o.match(/^on[A-Z]/) && typeof a[o] == "function")).forEach((o) => {
    i[o] = a[o];
  }), i;
}
function Fb(a) {
  const {
    getSlotProps: i,
    additionalProps: o,
    externalSlotProps: c,
    externalForwardedProps: f,
    className: d
  } = a;
  if (!i) {
    const q = Ge(o?.className, d, f?.className, c?.className), z = {
      ...o?.style,
      ...f?.style,
      ...c?.style
    }, A = {
      ...o,
      ...f,
      ...c
    };
    return q.length > 0 && (A.className = q), Object.keys(z).length > 0 && (A.style = z), {
      props: A,
      internalRef: void 0
    };
  }
  const m = Jm({
    ...f,
    ...c
  }), p = om(c), b = om(f), g = i(m), x = Ge(g?.className, o?.className, d, f?.className, c?.className), D = {
    ...g?.style,
    ...o?.style,
    ...f?.style,
    ...c?.style
  }, N = {
    ...g,
    ...o,
    ...b,
    ...p
  };
  return x.length > 0 && (N.className = x), Object.keys(D).length > 0 && (N.style = D), {
    props: N,
    internalRef: g.ref
  };
}
function An(a, i) {
  const {
    className: o,
    elementType: c,
    ownerState: f,
    externalForwardedProps: d,
    internalForwardedProps: m,
    shouldForwardComponentProp: p = !1,
    ...b
  } = i, {
    component: g,
    slots: x = {
      [a]: void 0
    },
    slotProps: D = {
      [a]: void 0
    },
    ...N
  } = d, q = x[a] || c, z = Wb(D[a], f), {
    props: {
      component: A,
      ...w
    },
    internalRef: K
  } = Fb({
    className: o,
    ...b,
    externalForwardedProps: a === "root" ? N : void 0,
    externalSlotProps: z
  }), P = ku(K, z?.ref, i.ref), Q = a === "root" ? A || g : A, L = Jb(q, {
    ...a === "root" && !g && !x[a] && m,
    ...a !== "root" && !x[a] && m,
    ...w,
    ...Q && !p && {
      as: Q
    },
    ...Q && p && {
      component: Q
    },
    ref: P
  }, f);
  return [q, L];
}
function Pb(a) {
  return typeof a.main == "string";
}
function Ib(a, i = []) {
  if (!Pb(a))
    return !1;
  for (const o of i)
    if (!a.hasOwnProperty(o) || typeof a[o] != "string")
      return !1;
  return !0;
}
function tS(a = []) {
  return ([, i]) => i && Ib(i, a);
}
function eS(a) {
  return Pn("MuiTypography", a);
}
Al("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const nS = {
  primary: !0,
  secondary: !0,
  error: !0,
  info: !0,
  success: !0,
  warning: !0,
  textPrimary: !0,
  textSecondary: !0,
  textDisabled: !0
}, lS = Gb(), aS = (a) => {
  const {
    align: i,
    gutterBottom: o,
    noWrap: c,
    paragraph: f,
    variant: d,
    classes: m
  } = a, p = {
    root: ["root", d, a.align !== "inherit" && `align${Ze(i)}`, o && "gutterBottom", c && "noWrap", f && "paragraph"]
  };
  return Cl(p, eS, m);
}, uS = Ke("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (a, i) => {
    const {
      ownerState: o
    } = a;
    return [i.root, o.variant && i[o.variant], o.align !== "inherit" && i[`align${Ze(o.align)}`], o.noWrap && i.noWrap, o.gutterBottom && i.gutterBottom, o.paragraph && i.paragraph];
  }
})(Gu(({
  theme: a
}) => ({
  margin: 0,
  variants: [{
    props: {
      variant: "inherit"
    },
    style: {
      // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
      font: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  }, ...Object.entries(a.typography).filter(([i, o]) => i !== "inherit" && o && typeof o == "object").map(([i, o]) => ({
    props: {
      variant: i
    },
    style: o
  })), ...Object.entries(a.palette).filter(tS()).map(([i]) => ({
    props: {
      color: i
    },
    style: {
      color: (a.vars || a).palette[i].main
    }
  })), ...Object.entries(a.palette?.text || {}).filter(([, i]) => typeof i == "string").map(([i]) => ({
    props: {
      color: `text${Ze(i)}`
    },
    style: {
      color: (a.vars || a).palette.text[i]
    }
  })), {
    props: ({
      ownerState: i
    }) => i.align !== "inherit",
    style: {
      textAlign: "var(--Typography-textAlign)"
    }
  }, {
    props: ({
      ownerState: i
    }) => i.noWrap,
    style: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, {
    props: ({
      ownerState: i
    }) => i.gutterBottom,
    style: {
      marginBottom: "0.35em"
    }
  }, {
    props: ({
      ownerState: i
    }) => i.paragraph,
    style: {
      marginBottom: 16
    }
  }]
}))), fm = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
}, Wm = /* @__PURE__ */ I.forwardRef(function(i, o) {
  const {
    color: c,
    ...f
  } = Ol({
    props: i,
    name: "MuiTypography"
  }), d = !nS[c], m = lS({
    ...f,
    ...d && {
      color: c
    }
  }), {
    align: p = "inherit",
    className: b,
    component: g,
    gutterBottom: x = !1,
    noWrap: D = !1,
    paragraph: N = !1,
    variant: q = "body1",
    variantMapping: z = fm,
    ...A
  } = m, w = {
    ...m,
    align: p,
    color: c,
    className: b,
    component: g,
    gutterBottom: x,
    noWrap: D,
    paragraph: N,
    variant: q,
    variantMapping: z
  }, K = g || (N ? "p" : z[q] || fm[q]) || "span", P = aS(w);
  return /* @__PURE__ */ _t.jsx(uS, {
    as: K,
    ref: o,
    className: Ge(P.root, b),
    ...A,
    ownerState: w,
    style: {
      ...p !== "inherit" && {
        "--Typography-textAlign": p
      },
      ...A.style
    }
  });
});
function _f(a) {
  return parseInt(I.version, 10) >= 19 ? a?.props?.ref || null : a?.ref || null;
}
function iS(a) {
  return typeof a == "function" ? a() : a;
}
const rS = /* @__PURE__ */ I.forwardRef(function(i, o) {
  const {
    children: c,
    container: f,
    disablePortal: d = !1
  } = i, [m, p] = I.useState(null), b = ku(/* @__PURE__ */ I.isValidElement(c) ? _f(c) : null, o);
  if (rf(() => {
    d || p(iS(f) || document.body);
  }, [f, d]), rf(() => {
    if (m && !d)
      return um(o, m), () => {
        um(o, null);
      };
  }, [o, m, d]), d) {
    if (/* @__PURE__ */ I.isValidElement(c)) {
      const g = {
        ref: b
      };
      return /* @__PURE__ */ I.cloneElement(c, g);
    }
    return c;
  }
  return m && /* @__PURE__ */ Zm.createPortal(c, m);
}), cS = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, mf = /* @__PURE__ */ I.forwardRef(function(i, o) {
  const c = Rf(), f = {
    enter: c.transitions.duration.enteringScreen,
    exit: c.transitions.duration.leavingScreen
  }, {
    addEndListener: d,
    appear: m = !0,
    children: p,
    easing: b,
    in: g,
    onEnter: x,
    onEntered: D,
    onEntering: N,
    onExit: q,
    onExited: z,
    onExiting: A,
    style: w,
    timeout: K = f,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: P = On,
    ...Q
  } = i, L = I.useRef(null), $ = ku(L, _f(p), o), k = (G) => (V) => {
    if (G) {
      const C = L.current;
      V === void 0 ? G(C) : G(C, V);
    }
  }, Z = k(N), ot = k((G, V) => {
    Qb(G);
    const C = cm({
      style: w,
      timeout: K,
      easing: b
    }, {
      mode: "enter"
    });
    G.style.webkitTransition = c.transitions.create("opacity", C), G.style.transition = c.transitions.create("opacity", C), x && x(G, V);
  }), it = k(D), gt = k(A), ft = k((G) => {
    const V = cm({
      style: w,
      timeout: K,
      easing: b
    }, {
      mode: "exit"
    });
    G.style.webkitTransition = c.transitions.create("opacity", V), G.style.transition = c.transitions.create("opacity", V), q && q(G);
  }), y = k(z), F = (G) => {
    d && d(L.current, G);
  };
  return /* @__PURE__ */ _t.jsx(P, {
    appear: m,
    in: g,
    nodeRef: L,
    onEnter: ot,
    onEntered: it,
    onEntering: Z,
    onExit: ft,
    onExited: y,
    onExiting: gt,
    addEndListener: F,
    timeout: K,
    ...Q,
    children: (G, {
      ownerState: V,
      ...C
    }) => /* @__PURE__ */ I.cloneElement(p, {
      style: {
        opacity: 0,
        visibility: G === "exited" && !g ? "hidden" : void 0,
        ...cS[G],
        ...w,
        ...p.props.style
      },
      ref: $,
      ...C
    })
  });
});
function oS(a) {
  return Pn("MuiBackdrop", a);
}
Al("MuiBackdrop", ["root", "invisible"]);
const fS = (a) => {
  const {
    classes: i,
    invisible: o
  } = a;
  return Cl({
    root: ["root", o && "invisible"]
  }, oS, i);
}, sS = Ke("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (a, i) => {
    const {
      ownerState: o
    } = a;
    return [i.root, o.invisible && i.invisible];
  }
})({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent",
  variants: [{
    props: {
      invisible: !0
    },
    style: {
      backgroundColor: "transparent"
    }
  }]
}), Fm = /* @__PURE__ */ I.forwardRef(function(i, o) {
  const c = Ol({
    props: i,
    name: "MuiBackdrop"
  }), {
    children: f,
    className: d,
    component: m = "div",
    invisible: p = !1,
    open: b,
    components: g = {},
    componentsProps: x = {},
    slotProps: D = {},
    slots: N = {},
    TransitionComponent: q,
    transitionDuration: z,
    ...A
  } = c, w = {
    ...c,
    component: m,
    invisible: p
  }, K = fS(w), P = {
    transition: q,
    root: g.Root,
    ...N
  }, Q = {
    ...x,
    ...D
  }, L = {
    component: m,
    slots: P,
    slotProps: Q
  }, [$, k] = An("root", {
    elementType: sS,
    externalForwardedProps: L,
    className: Ge(K.root, d),
    ownerState: w
  }), [Z, ot] = An("transition", {
    elementType: mf,
    externalForwardedProps: L,
    ownerState: w
  });
  return /* @__PURE__ */ _t.jsx(Z, {
    in: b,
    timeout: z,
    ...A,
    ...ot,
    children: /* @__PURE__ */ _t.jsx($, {
      "aria-hidden": !0,
      ...k,
      classes: K,
      ref: o,
      children: f
    })
  });
});
function dS(a = window) {
  const i = a.document.documentElement.clientWidth;
  return a.innerWidth - i;
}
function hS(a) {
  const i = xl(a);
  return i.body === a ? hr(a).innerWidth > i.documentElement.clientWidth : a.scrollHeight > a.clientHeight;
}
function zu(a, i) {
  i ? a.setAttribute("aria-hidden", "true") : a.removeAttribute("aria-hidden");
}
function sm(a) {
  return parseInt(hr(a).getComputedStyle(a).paddingRight, 10) || 0;
}
function mS(a) {
  const o = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(a.tagName), c = a.tagName === "INPUT" && a.getAttribute("type") === "hidden";
  return o || c;
}
function dm(a, i, o, c, f) {
  const d = [i, o, ...c];
  [].forEach.call(a.children, (m) => {
    const p = !d.includes(m), b = !mS(m);
    p && b && zu(m, f);
  });
}
function Fo(a, i) {
  let o = -1;
  return a.some((c, f) => i(c) ? (o = f, !0) : !1), o;
}
function pS(a, i) {
  const o = [], c = a.container;
  if (!i.disableScrollLock) {
    if (hS(c)) {
      const m = dS(hr(c));
      o.push({
        value: c.style.paddingRight,
        property: "padding-right",
        el: c
      }), c.style.paddingRight = `${sm(c) + m}px`;
      const p = xl(c).querySelectorAll(".mui-fixed");
      [].forEach.call(p, (b) => {
        o.push({
          value: b.style.paddingRight,
          property: "padding-right",
          el: b
        }), b.style.paddingRight = `${sm(b) + m}px`;
      });
    }
    let d;
    if (c.parentNode instanceof DocumentFragment)
      d = xl(c).body;
    else {
      const m = c.parentElement, p = hr(c);
      d = m?.nodeName === "HTML" && p.getComputedStyle(m).overflowY === "scroll" ? m : c;
    }
    o.push({
      value: d.style.overflow,
      property: "overflow",
      el: d
    }, {
      value: d.style.overflowX,
      property: "overflow-x",
      el: d
    }, {
      value: d.style.overflowY,
      property: "overflow-y",
      el: d
    }), d.style.overflow = "hidden";
  }
  return () => {
    o.forEach(({
      value: d,
      el: m,
      property: p
    }) => {
      d ? m.style.setProperty(p, d) : m.style.removeProperty(p);
    });
  };
}
function yS(a) {
  const i = [];
  return [].forEach.call(a.children, (o) => {
    o.getAttribute("aria-hidden") === "true" && i.push(o);
  }), i;
}
class gS {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(i, o) {
    let c = this.modals.indexOf(i);
    if (c !== -1)
      return c;
    c = this.modals.length, this.modals.push(i), i.modalRef && zu(i.modalRef, !1);
    const f = yS(o);
    dm(o, i.mount, i.modalRef, f, !0);
    const d = Fo(this.containers, (m) => m.container === o);
    return d !== -1 ? (this.containers[d].modals.push(i), c) : (this.containers.push({
      modals: [i],
      container: o,
      restore: null,
      hiddenSiblings: f
    }), c);
  }
  mount(i, o) {
    const c = Fo(this.containers, (d) => d.modals.includes(i)), f = this.containers[c];
    f.restore || (f.restore = pS(f, o));
  }
  remove(i, o = !0) {
    const c = this.modals.indexOf(i);
    if (c === -1)
      return c;
    const f = Fo(this.containers, (m) => m.modals.includes(i)), d = this.containers[f];
    if (d.modals.splice(d.modals.indexOf(i), 1), this.modals.splice(c, 1), d.modals.length === 0)
      d.restore && d.restore(), i.modalRef && zu(i.modalRef, o), dm(d.container, i.mount, i.modalRef, d.hiddenSiblings, !1), this.containers.splice(f, 1);
    else {
      const m = d.modals[d.modals.length - 1];
      m.modalRef && zu(m.modalRef, !1);
    }
    return c;
  }
  isTopModal(i) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === i;
  }
}
const vS = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function bS(a) {
  const i = parseInt(a.getAttribute("tabindex") || "", 10);
  return Number.isNaN(i) ? a.contentEditable === "true" || (a.nodeName === "AUDIO" || a.nodeName === "VIDEO" || a.nodeName === "DETAILS") && a.getAttribute("tabindex") === null ? 0 : a.tabIndex : i;
}
function SS(a) {
  if (a.tagName !== "INPUT" || a.type !== "radio" || !a.name)
    return !1;
  const i = (c) => a.ownerDocument.querySelector(`input[type="radio"]${c}`);
  let o = i(`[name="${a.name}"]:checked`);
  return o || (o = i(`[name="${a.name}"]`)), o !== a;
}
function TS(a) {
  return !(a.disabled || a.tagName === "INPUT" && a.type === "hidden" || SS(a));
}
function ES(a) {
  const i = [], o = [];
  return Array.from(a.querySelectorAll(vS)).forEach((c, f) => {
    const d = bS(c);
    d === -1 || !TS(c) || (d === 0 ? i.push(c) : o.push({
      documentOrder: f,
      tabIndex: d,
      node: c
    }));
  }), o.sort((c, f) => c.tabIndex === f.tabIndex ? c.documentOrder - f.documentOrder : c.tabIndex - f.tabIndex).map((c) => c.node).concat(i);
}
function xS() {
  return !0;
}
function AS(a) {
  const {
    children: i,
    disableAutoFocus: o = !1,
    disableEnforceFocus: c = !1,
    disableRestoreFocus: f = !1,
    getTabbable: d = ES,
    isEnabled: m = xS,
    open: p
  } = a, b = I.useRef(!1), g = I.useRef(null), x = I.useRef(null), D = I.useRef(null), N = I.useRef(null), q = I.useRef(!1), z = I.useRef(null), A = ku(_f(i), z), w = I.useRef(null);
  I.useEffect(() => {
    !p || !z.current || (q.current = !o);
  }, [o, p]), I.useEffect(() => {
    if (!p || !z.current)
      return;
    const Q = xl(z.current);
    return z.current.contains(Q.activeElement) || (z.current.hasAttribute("tabIndex") || z.current.setAttribute("tabIndex", "-1"), q.current && z.current.focus()), () => {
      f || (D.current && D.current.focus && (b.current = !0, D.current.focus()), D.current = null);
    };
  }, [p]), I.useEffect(() => {
    if (!p || !z.current)
      return;
    const Q = xl(z.current), L = (Z) => {
      w.current = Z, !(c || !m() || Z.key !== "Tab") && Q.activeElement === z.current && Z.shiftKey && (b.current = !0, x.current && x.current.focus());
    }, $ = () => {
      const Z = z.current;
      if (Z === null)
        return;
      if (!Q.hasFocus() || !m() || b.current) {
        b.current = !1;
        return;
      }
      if (Z.contains(Q.activeElement) || c && Q.activeElement !== g.current && Q.activeElement !== x.current)
        return;
      if (Q.activeElement !== N.current)
        N.current = null;
      else if (N.current !== null)
        return;
      if (!q.current)
        return;
      let ot = [];
      if ((Q.activeElement === g.current || Q.activeElement === x.current) && (ot = d(z.current)), ot.length > 0) {
        const it = !!(w.current?.shiftKey && w.current?.key === "Tab"), gt = ot[0], ft = ot[ot.length - 1];
        typeof gt != "string" && typeof ft != "string" && (it ? ft.focus() : gt.focus());
      } else
        Z.focus();
    };
    Q.addEventListener("focusin", $), Q.addEventListener("keydown", L, !0);
    const k = setInterval(() => {
      Q.activeElement && Q.activeElement.tagName === "BODY" && $();
    }, 50);
    return () => {
      clearInterval(k), Q.removeEventListener("focusin", $), Q.removeEventListener("keydown", L, !0);
    };
  }, [o, c, f, m, p, d]);
  const K = (Q) => {
    D.current === null && (D.current = Q.relatedTarget), q.current = !0, N.current = Q.target;
    const L = i.props.onFocus;
    L && L(Q);
  }, P = (Q) => {
    D.current === null && (D.current = Q.relatedTarget), q.current = !0;
  };
  return /* @__PURE__ */ _t.jsxs(I.Fragment, {
    children: [/* @__PURE__ */ _t.jsx("div", {
      tabIndex: p ? 0 : -1,
      onFocus: P,
      ref: g,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ I.cloneElement(i, {
      ref: A,
      onFocus: K
    }), /* @__PURE__ */ _t.jsx("div", {
      tabIndex: p ? 0 : -1,
      onFocus: P,
      ref: x,
      "data-testid": "sentinelEnd"
    })]
  });
}
function CS(a) {
  return typeof a == "function" ? a() : a;
}
function OS(a) {
  return a ? a.props.hasOwnProperty("in") : !1;
}
const hm = () => {
}, ur = new gS();
function RS(a) {
  const {
    container: i,
    disableEscapeKeyDown: o = !1,
    disableScrollLock: c = !1,
    closeAfterTransition: f = !1,
    onTransitionEnter: d,
    onTransitionExited: m,
    children: p,
    onClose: b,
    open: g,
    rootRef: x
  } = a, D = I.useRef({}), N = I.useRef(null), q = I.useRef(null), z = ku(q, x), [A, w] = I.useState(!g), K = OS(p);
  let P = !0;
  (a["aria-hidden"] === "false" || a["aria-hidden"] === !1) && (P = !1);
  const Q = () => xl(N.current), L = () => (D.current.modalRef = q.current, D.current.mount = N.current, D.current), $ = () => {
    ur.mount(L(), {
      disableScrollLock: c
    }), q.current && (q.current.scrollTop = 0);
  }, k = im(() => {
    const V = CS(i) || Q().body;
    ur.add(L(), V), q.current && $();
  }), Z = () => ur.isTopModal(L()), ot = im((V) => {
    N.current = V, V && (g && Z() ? $() : q.current && zu(q.current, P));
  }), it = I.useCallback(() => {
    ur.remove(L(), P);
  }, [P]);
  I.useEffect(() => () => {
    it();
  }, [it]), I.useEffect(() => {
    g ? k() : (!K || !f) && it();
  }, [g, it, K, f, k]);
  const gt = (V) => (C) => {
    V.onKeyDown?.(C), !(C.key !== "Escape" || C.which === 229 || // Wait until IME is settled.
    !Z()) && (o || (C.stopPropagation(), b && b(C, "escapeKeyDown")));
  }, ft = (V) => (C) => {
    V.onClick?.(C), C.target === C.currentTarget && b && b(C, "backdropClick");
  };
  return {
    getRootProps: (V = {}) => {
      const C = Jm(a);
      delete C.onTransitionEnter, delete C.onTransitionExited;
      const X = {
        ...C,
        ...V
      };
      return {
        /*
         * Marking an element with the role presentation indicates to assistive technology
         * that this element should be ignored; it exists to support the web application and
         * is not meant for humans to interact with directly.
         * https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
         */
        role: "presentation",
        ...X,
        onKeyDown: gt(X),
        ref: z
      };
    },
    getBackdropProps: (V = {}) => {
      const C = V;
      return {
        "aria-hidden": !0,
        ...C,
        onClick: ft(C),
        open: g
      };
    },
    getTransitionProps: () => {
      const V = () => {
        w(!1), d && d();
      }, C = () => {
        w(!0), m && m(), f && it();
      };
      return {
        onEnter: am(V, p?.props.onEnter ?? hm),
        onExited: am(C, p?.props.onExited ?? hm)
      };
    },
    rootRef: z,
    portalRef: ot,
    isTopModal: Z,
    exited: A,
    hasTransition: K
  };
}
function _S(a) {
  return Pn("MuiModal", a);
}
Al("MuiModal", ["root", "hidden", "backdrop"]);
const MS = (a) => {
  const {
    open: i,
    exited: o,
    classes: c
  } = a;
  return Cl({
    root: ["root", !i && o && "hidden"],
    backdrop: ["backdrop"]
  }, _S, c);
}, DS = Ke("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (a, i) => {
    const {
      ownerState: o
    } = a;
    return [i.root, !o.open && o.exited && i.hidden];
  }
})(Gu(({
  theme: a
}) => ({
  position: "fixed",
  zIndex: (a.vars || a).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  variants: [{
    props: ({
      ownerState: i
    }) => !i.open && i.exited,
    style: {
      visibility: "hidden"
    }
  }]
}))), zS = Ke(Fm, {
  name: "MuiModal",
  slot: "Backdrop"
})({
  zIndex: -1
}), NS = /* @__PURE__ */ I.forwardRef(function(i, o) {
  const c = Ol({
    name: "MuiModal",
    props: i
  }), {
    BackdropComponent: f = zS,
    BackdropProps: d,
    classes: m,
    className: p,
    closeAfterTransition: b = !1,
    children: g,
    container: x,
    component: D,
    components: N = {},
    componentsProps: q = {},
    disableAutoFocus: z = !1,
    disableEnforceFocus: A = !1,
    disableEscapeKeyDown: w = !1,
    disablePortal: K = !1,
    disableRestoreFocus: P = !1,
    disableScrollLock: Q = !1,
    hideBackdrop: L = !1,
    keepMounted: $ = !1,
    onClose: k,
    onTransitionEnter: Z,
    onTransitionExited: ot,
    open: it,
    slotProps: gt = {},
    slots: ft = {},
    // eslint-disable-next-line react/prop-types
    theme: y,
    ...F
  } = c, G = {
    ...c,
    closeAfterTransition: b,
    disableAutoFocus: z,
    disableEnforceFocus: A,
    disableEscapeKeyDown: w,
    disablePortal: K,
    disableRestoreFocus: P,
    disableScrollLock: Q,
    hideBackdrop: L,
    keepMounted: $
  }, {
    getRootProps: V,
    getBackdropProps: C,
    getTransitionProps: X,
    portalRef: et,
    isTopModal: St,
    exited: S,
    hasTransition: j
  } = RS({
    ...G,
    rootRef: o
  }), J = {
    ...G,
    exited: S
  }, W = MS(J), nt = {};
  if (g.props.tabIndex === void 0 && (nt.tabIndex = "-1"), j) {
    const {
      onEnter: Le,
      onExited: $e
    } = X();
    nt.onEnter = Le, nt.onExited = $e;
  }
  const mt = {
    slots: {
      root: N.Root,
      backdrop: N.Backdrop,
      ...ft
    },
    slotProps: {
      ...q,
      ...gt
    }
  }, [rt, ee] = An("root", {
    ref: o,
    elementType: DS,
    externalForwardedProps: {
      ...mt,
      ...F,
      component: D
    },
    getSlotProps: V,
    ownerState: J,
    className: Ge(p, W?.root, !J.open && J.exited && W?.hidden)
  }), [Mt, Me] = An("backdrop", {
    ref: d?.ref,
    elementType: f,
    externalForwardedProps: mt,
    shouldForwardComponentProp: !0,
    additionalProps: d,
    getSlotProps: (Le) => C({
      ...Le,
      onClick: ($e) => {
        Le?.onClick && Le.onClick($e);
      }
    }),
    className: Ge(d?.className, W?.backdrop),
    ownerState: J
  });
  return !$ && !it && (!j || S) ? null : /* @__PURE__ */ _t.jsx(rS, {
    ref: et,
    container: x,
    disablePortal: K,
    children: /* @__PURE__ */ _t.jsxs(rt, {
      ...ee,
      children: [!L && f ? /* @__PURE__ */ _t.jsx(Mt, {
        ...Me
      }) : null, /* @__PURE__ */ _t.jsx(AS, {
        disableEnforceFocus: A,
        disableAutoFocus: z,
        disableRestoreFocus: P,
        isEnabled: St,
        open: it,
        children: /* @__PURE__ */ I.cloneElement(g, nt)
      })]
    })
  });
});
function US(a) {
  return Pn("MuiDialog", a);
}
const Po = Al("MuiDialog", ["root", "scrollPaper", "scrollBody", "container", "paper", "paperScrollPaper", "paperScrollBody", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]), Pm = /* @__PURE__ */ I.createContext({}), BS = Ke(Fm, {
  name: "MuiDialog",
  slot: "Backdrop",
  overrides: (a, i) => i.backdrop
})({
  // Improve scrollable dialog support.
  zIndex: -1
}), wS = (a) => {
  const {
    classes: i,
    scroll: o,
    maxWidth: c,
    fullWidth: f,
    fullScreen: d
  } = a, m = {
    root: ["root"],
    container: ["container", `scroll${Ze(o)}`],
    paper: ["paper", `paperScroll${Ze(o)}`, `paperWidth${Ze(String(c))}`, f && "paperFullWidth", d && "paperFullScreen"]
  };
  return Cl(m, US, i);
}, HS = Ke(NS, {
  name: "MuiDialog",
  slot: "Root"
})({
  "@media print": {
    // Use !important to override the Modal inline-style.
    position: "absolute !important"
  }
}), qS = Ke("div", {
  name: "MuiDialog",
  slot: "Container",
  overridesResolver: (a, i) => {
    const {
      ownerState: o
    } = a;
    return [i.container, i[`scroll${Ze(o.scroll)}`]];
  }
})({
  height: "100%",
  "@media print": {
    height: "auto"
  },
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  variants: [{
    props: {
      scroll: "paper"
    },
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  }, {
    props: {
      scroll: "body"
    },
    style: {
      overflowY: "auto",
      overflowX: "hidden",
      textAlign: "center",
      "&::after": {
        content: '""',
        display: "inline-block",
        verticalAlign: "middle",
        height: "100%",
        width: "0"
      }
    }
  }]
}), YS = Ke($m, {
  name: "MuiDialog",
  slot: "Paper",
  overridesResolver: (a, i) => {
    const {
      ownerState: o
    } = a;
    return [i.paper, i[`scrollPaper${Ze(o.scroll)}`], i[`paperWidth${Ze(String(o.maxWidth))}`], o.fullWidth && i.paperFullWidth, o.fullScreen && i.paperFullScreen];
  }
})(Gu(({
  theme: a
}) => ({
  margin: 32,
  position: "relative",
  overflowY: "auto",
  "@media print": {
    overflowY: "visible",
    boxShadow: "none"
  },
  variants: [{
    props: {
      scroll: "paper"
    },
    style: {
      display: "flex",
      flexDirection: "column",
      maxHeight: "calc(100% - 64px)"
    }
  }, {
    props: {
      scroll: "body"
    },
    style: {
      display: "inline-block",
      verticalAlign: "middle",
      textAlign: "initial"
    }
  }, {
    props: ({
      ownerState: i
    }) => !i.maxWidth,
    style: {
      maxWidth: "calc(100% - 64px)"
    }
  }, {
    props: {
      maxWidth: "xs"
    },
    style: {
      maxWidth: a.breakpoints.unit === "px" ? Math.max(a.breakpoints.values.xs, 444) : `max(${a.breakpoints.values.xs}${a.breakpoints.unit}, 444px)`,
      [`&.${Po.paperScrollBody}`]: {
        [a.breakpoints.down(Math.max(a.breakpoints.values.xs, 444) + 64)]: {
          maxWidth: "calc(100% - 64px)"
        }
      }
    }
  }, ...Object.keys(a.breakpoints.values).filter((i) => i !== "xs").map((i) => ({
    props: {
      maxWidth: i
    },
    style: {
      maxWidth: `${a.breakpoints.values[i]}${a.breakpoints.unit}`,
      [`&.${Po.paperScrollBody}`]: {
        [a.breakpoints.down(a.breakpoints.values[i] + 64)]: {
          maxWidth: "calc(100% - 64px)"
        }
      }
    }
  })), {
    props: ({
      ownerState: i
    }) => i.fullWidth,
    style: {
      width: "calc(100% - 64px)"
    }
  }, {
    props: ({
      ownerState: i
    }) => i.fullScreen,
    style: {
      margin: 0,
      width: "100%",
      maxWidth: "100%",
      height: "100%",
      maxHeight: "none",
      borderRadius: 0,
      [`&.${Po.paperScrollBody}`]: {
        margin: 0,
        maxWidth: "100%"
      }
    }
  }]
}))), jS = /* @__PURE__ */ I.forwardRef(function(i, o) {
  const c = Ol({
    props: i,
    name: "MuiDialog"
  }), f = Rf(), d = {
    enter: f.transitions.duration.enteringScreen,
    exit: f.transitions.duration.leavingScreen
  }, {
    "aria-describedby": m,
    "aria-labelledby": p,
    "aria-modal": b = !0,
    BackdropComponent: g,
    BackdropProps: x,
    children: D,
    className: N,
    disableEscapeKeyDown: q = !1,
    fullScreen: z = !1,
    fullWidth: A = !1,
    maxWidth: w = "sm",
    onClick: K,
    onClose: P,
    open: Q,
    PaperComponent: L = $m,
    PaperProps: $ = {},
    scroll: k = "paper",
    slots: Z = {},
    slotProps: ot = {},
    TransitionComponent: it = mf,
    transitionDuration: gt = d,
    TransitionProps: ft,
    ...y
  } = c, F = {
    ...c,
    disableEscapeKeyDown: q,
    fullScreen: z,
    fullWidth: A,
    maxWidth: w,
    scroll: k
  }, G = wS(F), V = I.useRef(), C = (rn) => {
    V.current = rn.target === rn.currentTarget;
  }, X = (rn) => {
    K && K(rn), V.current && (V.current = null, P && P(rn, "backdropClick"));
  }, et = Pv(p), St = I.useMemo(() => ({
    titleId: et
  }), [et]), S = {
    transition: it,
    ...Z
  }, j = {
    transition: ft,
    paper: $,
    backdrop: x,
    ...ot
  }, J = {
    slots: S,
    slotProps: j
  }, [W, nt] = An("root", {
    elementType: HS,
    shouldForwardComponentProp: !0,
    externalForwardedProps: J,
    ownerState: F,
    className: Ge(G.root, N),
    ref: o
  }), [mt, rt] = An("backdrop", {
    elementType: BS,
    shouldForwardComponentProp: !0,
    externalForwardedProps: J,
    ownerState: F
  }), [ee, Mt] = An("paper", {
    elementType: YS,
    shouldForwardComponentProp: !0,
    externalForwardedProps: J,
    ownerState: F,
    className: Ge(G.paper, $.className)
  }), [Me, Le] = An("container", {
    elementType: qS,
    externalForwardedProps: J,
    ownerState: F,
    className: G.container
  }), [$e, Ca] = An("transition", {
    elementType: mf,
    externalForwardedProps: J,
    ownerState: F,
    additionalProps: {
      appear: !0,
      in: Q,
      timeout: gt,
      role: "presentation"
    }
  });
  return /* @__PURE__ */ _t.jsx(W, {
    closeAfterTransition: !0,
    slots: {
      backdrop: mt
    },
    slotProps: {
      backdrop: {
        transitionDuration: gt,
        as: g,
        ...rt
      }
    },
    disableEscapeKeyDown: q,
    onClose: P,
    open: Q,
    onClick: X,
    ...nt,
    ...y,
    children: /* @__PURE__ */ _t.jsx($e, {
      ...Ca,
      children: /* @__PURE__ */ _t.jsx(Me, {
        onMouseDown: C,
        ...Le,
        children: /* @__PURE__ */ _t.jsx(ee, {
          as: L,
          elevation: 24,
          role: "dialog",
          "aria-describedby": m,
          "aria-labelledby": et,
          "aria-modal": b,
          ...Mt,
          children: /* @__PURE__ */ _t.jsx(Pm.Provider, {
            value: St,
            children: D
          })
        })
      })
    })
  });
});
function GS(a) {
  return Pn("MuiDialogContent", a);
}
Al("MuiDialogContent", ["root", "dividers"]);
function kS(a) {
  return Pn("MuiDialogTitle", a);
}
const LS = Al("MuiDialogTitle", ["root"]), XS = (a) => {
  const {
    classes: i,
    dividers: o
  } = a;
  return Cl({
    root: ["root", o && "dividers"]
  }, GS, i);
}, QS = Ke("div", {
  name: "MuiDialogContent",
  slot: "Root",
  overridesResolver: (a, i) => {
    const {
      ownerState: o
    } = a;
    return [i.root, o.dividers && i.dividers];
  }
})(Gu(({
  theme: a
}) => ({
  flex: "1 1 auto",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  overflowY: "auto",
  padding: "20px 24px",
  variants: [{
    props: ({
      ownerState: i
    }) => i.dividers,
    style: {
      padding: "16px 24px",
      borderTop: `1px solid ${(a.vars || a).palette.divider}`,
      borderBottom: `1px solid ${(a.vars || a).palette.divider}`
    }
  }, {
    props: ({
      ownerState: i
    }) => !i.dividers,
    style: {
      [`.${LS.root} + &`]: {
        paddingTop: 0
      }
    }
  }]
}))), VS = /* @__PURE__ */ I.forwardRef(function(i, o) {
  const c = Ol({
    props: i,
    name: "MuiDialogContent"
  }), {
    className: f,
    dividers: d = !1,
    ...m
  } = c, p = {
    ...c,
    dividers: d
  }, b = XS(p);
  return /* @__PURE__ */ _t.jsx(QS, {
    className: Ge(b.root, f),
    ownerState: p,
    ref: o,
    ...m
  });
}), ZS = (a) => {
  const {
    classes: i
  } = a;
  return Cl({
    root: ["root"]
  }, kS, i);
}, KS = Ke(Wm, {
  name: "MuiDialogTitle",
  slot: "Root"
})({
  padding: "16px 24px",
  flex: "0 0 auto"
}), $S = /* @__PURE__ */ I.forwardRef(function(i, o) {
  const c = Ol({
    props: i,
    name: "MuiDialogTitle"
  }), {
    className: f,
    id: d,
    ...m
  } = c, p = c, b = ZS(p), {
    titleId: g = d
  } = I.useContext(Pm);
  return /* @__PURE__ */ _t.jsx(KS, {
    component: "h2",
    className: Ge(b.root, f),
    ownerState: p,
    ref: o,
    variant: "h6",
    id: d ?? g,
    ...m
  });
}), Im = ({ word: a, definition: i }) => {
  const [o, c] = I.useState(!1);
  return console.log(i), /* @__PURE__ */ _t.jsxs(_t.Fragment, { children: [
    /* @__PURE__ */ _t.jsx(
      "span",
      {
        style: { borderBottom: "1px dotted #000", cursor: "pointer" },
        onClick: () => c(!0),
        children: a
      }
    ),
    /* @__PURE__ */ _t.jsxs(jS, { open: o, onClose: () => c(!1), children: [
      /* @__PURE__ */ _t.jsx($S, { children: a }),
      /* @__PURE__ */ _t.jsxs(VS, { children: [
        /* @__PURE__ */ _t.jsx("div", { dangerouslySetInnerHTML: { __html: i } }),
        /* @__PURE__ */ _t.jsx(Wm, { variant: "caption", display: "block", gutterBottom: !0, children: "(Definition provided by ABC Dictionary)" })
      ] })
    ] })
  ] });
};
class JS extends HTMLElement {
  connectedCallback() {
    const i = this.getAttribute("word") || "", o = this.getAttribute("definition") || "", c = document.createElement("div");
    this.appendChild(c), zg.createRoot(c).render(/* @__PURE__ */ _t.jsx(Im, { word: i, definition: o }));
  }
}
customElements.define("define-word", JS);
var Io = { exports: {} }, mm;
function WS() {
  if (mm) return Io.exports;
  mm = 1;
  var a = Io.exports = {}, i, o;
  function c() {
    throw new Error("setTimeout has not been defined");
  }
  function f() {
    throw new Error("clearTimeout has not been defined");
  }
  (function() {
    try {
      typeof setTimeout == "function" ? i = setTimeout : i = c;
    } catch {
      i = c;
    }
    try {
      typeof clearTimeout == "function" ? o = clearTimeout : o = f;
    } catch {
      o = f;
    }
  })();
  function d(A) {
    if (i === setTimeout)
      return setTimeout(A, 0);
    if ((i === c || !i) && setTimeout)
      return i = setTimeout, setTimeout(A, 0);
    try {
      return i(A, 0);
    } catch {
      try {
        return i.call(null, A, 0);
      } catch {
        return i.call(this, A, 0);
      }
    }
  }
  function m(A) {
    if (o === clearTimeout)
      return clearTimeout(A);
    if ((o === f || !o) && clearTimeout)
      return o = clearTimeout, clearTimeout(A);
    try {
      return o(A);
    } catch {
      try {
        return o.call(null, A);
      } catch {
        return o.call(this, A);
      }
    }
  }
  var p = [], b = !1, g, x = -1;
  function D() {
    !b || !g || (b = !1, g.length ? p = g.concat(p) : x = -1, p.length && N());
  }
  function N() {
    if (!b) {
      var A = d(D);
      b = !0;
      for (var w = p.length; w; ) {
        for (g = p, p = []; ++x < w; )
          g && g[x].run();
        x = -1, w = p.length;
      }
      g = null, b = !1, m(A);
    }
  }
  a.nextTick = function(A) {
    var w = new Array(arguments.length - 1);
    if (arguments.length > 1)
      for (var K = 1; K < arguments.length; K++)
        w[K - 1] = arguments[K];
    p.push(new q(A, w)), p.length === 1 && !b && d(N);
  };
  function q(A, w) {
    this.fun = A, this.array = w;
  }
  q.prototype.run = function() {
    this.fun.apply(null, this.array);
  }, a.title = "browser", a.browser = !0, a.env = {}, a.argv = [], a.version = "", a.versions = {};
  function z() {
  }
  return a.on = z, a.addListener = z, a.once = z, a.off = z, a.removeListener = z, a.removeAllListeners = z, a.emit = z, a.prependListener = z, a.prependOnceListener = z, a.listeners = function(A) {
    return [];
  }, a.binding = function(A) {
    throw new Error("process.binding is not supported");
  }, a.cwd = function() {
    return "/";
  }, a.chdir = function(A) {
    throw new Error("process.chdir is not supported");
  }, a.umask = function() {
    return 0;
  }, Io.exports;
}
WS();
window.process = process;
class FS extends HTMLElement {
  connectedCallback() {
    const i = this.getAttribute("word") || "", o = this.attachShadow({ mode: "open" }), c = this.innerHTML;
    o.innerHTML = '<span id="react-root"></span>';
    const f = o.getElementById("react-root");
    f ? ym.createRoot(f).render(/* @__PURE__ */ _t.jsx(Im, { word: i, definition: c })) : console.error("Failed to find #react-root in shadow DOM.");
  }
}
customElements.define("define-word", FS);
