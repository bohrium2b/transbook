function Sg(a, i) {
  for (var c = 0; c < i.length; c++) {
    const o = i[c];
    if (typeof o != "string" && !Array.isArray(o)) {
      for (const f in o)
        if (f !== "default" && !(f in a)) {
          const d = Object.getOwnPropertyDescriptor(o, f);
          d && Object.defineProperty(a, f, d.get ? d : {
            enumerable: !0,
            get: () => o[f]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }));
}
function hm(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var ko = { exports: {} }, xu = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var S0;
function Tg() {
  if (S0) return xu;
  S0 = 1;
  var a = Symbol.for("react.transitional.element"), i = Symbol.for("react.fragment");
  function c(o, f, d) {
    var m = null;
    if (d !== void 0 && (m = "" + d), f.key !== void 0 && (m = "" + f.key), "key" in f) {
      d = {};
      for (var y in f)
        y !== "key" && (d[y] = f[y]);
    } else d = f;
    return f = d.ref, {
      $$typeof: a,
      type: o,
      key: m,
      ref: f !== void 0 ? f : null,
      props: d
    };
  }
  return xu.Fragment = i, xu.jsx = c, xu.jsxs = c, xu;
}
var T0;
function Eg() {
  return T0 || (T0 = 1, ko.exports = Tg()), ko.exports;
}
var Bt = Eg(), Lo = { exports: {} }, ft = {}, E0;
function xg() {
  if (E0) return ft;
  E0 = 1;
  var a = { env: {} };
  /**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var i = Symbol.for("react.transitional.element"), c = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), m = Symbol.for("react.consumer"), y = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), _ = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), N = Symbol.iterator;
  function j(T) {
    return T === null || typeof T != "object" ? null : (T = N && T[N] || T["@@iterator"], typeof T == "function" ? T : null);
  }
  var z = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, O = Object.assign, k = {};
  function K(T, q, F) {
    this.props = T, this.context = q, this.refs = k, this.updater = F || z;
  }
  K.prototype.isReactComponent = {}, K.prototype.setState = function(T, q) {
    if (typeof T != "object" && typeof T != "function" && T != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, T, q, "setState");
  }, K.prototype.forceUpdate = function(T) {
    this.updater.enqueueForceUpdate(this, T, "forceUpdate");
  };
  function P() {
  }
  P.prototype = K.prototype;
  function J(T, q, F) {
    this.props = T, this.context = q, this.refs = k, this.updater = F || z;
  }
  var X = J.prototype = new P();
  X.constructor = J, O(X, K.prototype), X.isPureReactComponent = !0;
  var et = Array.isArray, w = { H: null, A: null, T: null, S: null, V: null }, Z = Object.prototype.hasOwnProperty;
  function ot(T, q, F, V, lt, St) {
    return F = St.ref, {
      $$typeof: i,
      type: T,
      key: q,
      ref: F !== void 0 ? F : null,
      props: St
    };
  }
  function at(T, q) {
    return ot(
      T.type,
      q,
      void 0,
      void 0,
      void 0,
      T.props
    );
  }
  function st(T) {
    return typeof T == "object" && T !== null && T.$$typeof === i;
  }
  function dt(T) {
    var q = { "=": "=0", ":": "=2" };
    return "$" + T.replace(/[=:]/g, function(F) {
      return q[F];
    });
  }
  var p = /\/+/g;
  function $(T, q) {
    return typeof T == "object" && T !== null && T.key != null ? dt("" + T.key) : q.toString(36);
  }
  function L() {
  }
  function W(T) {
    switch (T.status) {
      case "fulfilled":
        return T.value;
      case "rejected":
        throw T.reason;
      default:
        switch (typeof T.status == "string" ? T.then(L, L) : (T.status = "pending", T.then(
          function(q) {
            T.status === "pending" && (T.status = "fulfilled", T.value = q);
          },
          function(q) {
            T.status === "pending" && (T.status = "rejected", T.reason = q);
          }
        )), T.status) {
          case "fulfilled":
            return T.value;
          case "rejected":
            throw T.reason;
        }
    }
    throw T;
  }
  function D(T, q, F, V, lt) {
    var St = typeof T;
    (St === "undefined" || St === "boolean") && (T = null);
    var rt = !1;
    if (T === null) rt = !0;
    else
      switch (St) {
        case "bigint":
        case "string":
        case "number":
          rt = !0;
          break;
        case "object":
          switch (T.$$typeof) {
            case i:
            case c:
              rt = !0;
              break;
            case x:
              return rt = T._init, D(
                rt(T._payload),
                q,
                F,
                V,
                lt
              );
          }
      }
    if (rt)
      return lt = lt(T), rt = V === "" ? "." + $(T, 0) : V, et(lt) ? (F = "", rt != null && (F = rt.replace(p, "$&/") + "/"), D(lt, q, F, "", function(re) {
        return re;
      })) : lt != null && (st(lt) && (lt = at(
        lt,
        F + (lt.key == null || T && T.key === lt.key ? "" : ("" + lt.key).replace(
          p,
          "$&/"
        ) + "/") + rt
      )), q.push(lt)), 1;
    rt = 0;
    var ne = V === "" ? "." : V + ":";
    if (et(T))
      for (var Mt = 0; Mt < T.length; Mt++)
        V = T[Mt], St = ne + $(V, Mt), rt += D(
          V,
          q,
          F,
          St,
          lt
        );
    else if (Mt = j(T), typeof Mt == "function")
      for (T = Mt.call(T), Mt = 0; !(V = T.next()).done; )
        V = V.value, St = ne + $(V, Mt++), rt += D(
          V,
          q,
          F,
          St,
          lt
        );
    else if (St === "object") {
      if (typeof T.then == "function")
        return D(
          W(T),
          q,
          F,
          V,
          lt
        );
      throw q = String(T), Error(
        "Objects are not valid as a React child (found: " + (q === "[object Object]" ? "object with keys {" + Object.keys(T).join(", ") + "}" : q) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return rt;
  }
  function G(T, q, F) {
    if (T == null) return T;
    var V = [], lt = 0;
    return D(T, V, "", "", function(St) {
      return q.call(F, St, lt++);
    }), V;
  }
  function Q(T) {
    if (T._status === -1) {
      var q = T._result;
      q = q(), q.then(
        function(F) {
          (T._status === 0 || T._status === -1) && (T._status = 1, T._result = F);
        },
        function(F) {
          (T._status === 0 || T._status === -1) && (T._status = 2, T._result = F);
        }
      ), T._status === -1 && (T._status = 0, T._result = q);
    }
    if (T._status === 1) return T._result.default;
    throw T._result;
  }
  var gt = typeof reportError == "function" ? reportError : function(T) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var q = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof T == "object" && T !== null && typeof T.message == "string" ? String(T.message) : String(T),
        error: T
      });
      if (!window.dispatchEvent(q)) return;
    } else if (typeof a == "object" && typeof a.emit == "function") {
      a.emit("uncaughtException", T);
      return;
    }
    console.error(T);
  };
  function At() {
  }
  return ft.Children = {
    map: G,
    forEach: function(T, q, F) {
      G(
        T,
        function() {
          q.apply(this, arguments);
        },
        F
      );
    },
    count: function(T) {
      var q = 0;
      return G(T, function() {
        q++;
      }), q;
    },
    toArray: function(T) {
      return G(T, function(q) {
        return q;
      }) || [];
    },
    only: function(T) {
      if (!st(T))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return T;
    }
  }, ft.Component = K, ft.Fragment = o, ft.Profiler = d, ft.PureComponent = J, ft.StrictMode = f, ft.Suspense = g, ft.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w, ft.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(T) {
      return w.H.useMemoCache(T);
    }
  }, ft.cache = function(T) {
    return function() {
      return T.apply(null, arguments);
    };
  }, ft.cloneElement = function(T, q, F) {
    if (T == null)
      throw Error(
        "The argument must be a React element, but you passed " + T + "."
      );
    var V = O({}, T.props), lt = T.key, St = void 0;
    if (q != null)
      for (rt in q.ref !== void 0 && (St = void 0), q.key !== void 0 && (lt = "" + q.key), q)
        !Z.call(q, rt) || rt === "key" || rt === "__self" || rt === "__source" || rt === "ref" && q.ref === void 0 || (V[rt] = q[rt]);
    var rt = arguments.length - 2;
    if (rt === 1) V.children = F;
    else if (1 < rt) {
      for (var ne = Array(rt), Mt = 0; Mt < rt; Mt++)
        ne[Mt] = arguments[Mt + 2];
      V.children = ne;
    }
    return ot(T.type, lt, void 0, void 0, St, V);
  }, ft.createContext = function(T) {
    return T = {
      $$typeof: y,
      _currentValue: T,
      _currentValue2: T,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, T.Provider = T, T.Consumer = {
      $$typeof: m,
      _context: T
    }, T;
  }, ft.createElement = function(T, q, F) {
    var V, lt = {}, St = null;
    if (q != null)
      for (V in q.key !== void 0 && (St = "" + q.key), q)
        Z.call(q, V) && V !== "key" && V !== "__self" && V !== "__source" && (lt[V] = q[V]);
    var rt = arguments.length - 2;
    if (rt === 1) lt.children = F;
    else if (1 < rt) {
      for (var ne = Array(rt), Mt = 0; Mt < rt; Mt++)
        ne[Mt] = arguments[Mt + 2];
      lt.children = ne;
    }
    if (T && T.defaultProps)
      for (V in rt = T.defaultProps, rt)
        lt[V] === void 0 && (lt[V] = rt[V]);
    return ot(T, St, void 0, void 0, null, lt);
  }, ft.createRef = function() {
    return { current: null };
  }, ft.forwardRef = function(T) {
    return { $$typeof: b, render: T };
  }, ft.isValidElement = st, ft.lazy = function(T) {
    return {
      $$typeof: x,
      _payload: { _status: -1, _result: T },
      _init: Q
    };
  }, ft.memo = function(T, q) {
    return {
      $$typeof: _,
      type: T,
      compare: q === void 0 ? null : q
    };
  }, ft.startTransition = function(T) {
    var q = w.T, F = {};
    w.T = F;
    try {
      var V = T(), lt = w.S;
      lt !== null && lt(F, V), typeof V == "object" && V !== null && typeof V.then == "function" && V.then(At, gt);
    } catch (St) {
      gt(St);
    } finally {
      w.T = q;
    }
  }, ft.unstable_useCacheRefresh = function() {
    return w.H.useCacheRefresh();
  }, ft.use = function(T) {
    return w.H.use(T);
  }, ft.useActionState = function(T, q, F) {
    return w.H.useActionState(T, q, F);
  }, ft.useCallback = function(T, q) {
    return w.H.useCallback(T, q);
  }, ft.useContext = function(T) {
    return w.H.useContext(T);
  }, ft.useDebugValue = function() {
  }, ft.useDeferredValue = function(T, q) {
    return w.H.useDeferredValue(T, q);
  }, ft.useEffect = function(T, q, F) {
    var V = w.H;
    if (typeof F == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return V.useEffect(T, q);
  }, ft.useId = function() {
    return w.H.useId();
  }, ft.useImperativeHandle = function(T, q, F) {
    return w.H.useImperativeHandle(T, q, F);
  }, ft.useInsertionEffect = function(T, q) {
    return w.H.useInsertionEffect(T, q);
  }, ft.useLayoutEffect = function(T, q) {
    return w.H.useLayoutEffect(T, q);
  }, ft.useMemo = function(T, q) {
    return w.H.useMemo(T, q);
  }, ft.useOptimistic = function(T, q) {
    return w.H.useOptimistic(T, q);
  }, ft.useReducer = function(T, q, F) {
    return w.H.useReducer(T, q, F);
  }, ft.useRef = function(T) {
    return w.H.useRef(T);
  }, ft.useState = function(T) {
    return w.H.useState(T);
  }, ft.useSyncExternalStore = function(T, q, F) {
    return w.H.useSyncExternalStore(
      T,
      q,
      F
    );
  }, ft.useTransition = function() {
    return w.H.useTransition();
  }, ft.version = "19.1.1", ft;
}
var x0;
function pf() {
  return x0 || (x0 = 1, Lo.exports = xg()), Lo.exports;
}
var I = pf();
const Sa = /* @__PURE__ */ hm(I), tf = /* @__PURE__ */ Sg({
  __proto__: null,
  default: Sa
}, [I]), Nu = {
  black: "#000",
  white: "#fff"
}, ha = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, ma = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, pa = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, ya = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, ga = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
}, Au = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, Ag = {
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
  const c = new URL(`https://mui.com/production-error/?code=${a}`);
  return i.forEach((o) => c.searchParams.append("args[]", o)), `Minified MUI error #${a}; visit ${c} for the full message.`;
}
const mm = "$$material";
function ef() {
  return ef = Object.assign ? Object.assign.bind() : function(a) {
    for (var i = 1; i < arguments.length; i++) {
      var c = arguments[i];
      for (var o in c) ({}).hasOwnProperty.call(c, o) && (a[o] = c[o]);
    }
    return a;
  }, ef.apply(null, arguments);
}
function Cg(a) {
  if (a.sheet)
    return a.sheet;
  for (var i = 0; i < document.styleSheets.length; i++)
    if (document.styleSheets[i].ownerNode === a)
      return document.styleSheets[i];
}
function Og(a) {
  var i = document.createElement("style");
  return i.setAttribute("data-emotion", a.key), a.nonce !== void 0 && i.setAttribute("nonce", a.nonce), i.appendChild(document.createTextNode("")), i.setAttribute("data-s", ""), i;
}
var Rg = /* @__PURE__ */ (function() {
  function a(c) {
    var o = this;
    this._insertTag = function(f) {
      var d;
      o.tags.length === 0 ? o.insertionPoint ? d = o.insertionPoint.nextSibling : o.prepend ? d = o.container.firstChild : d = o.before : d = o.tags[o.tags.length - 1].nextSibling, o.container.insertBefore(f, d), o.tags.push(f);
    }, this.isSpeedy = c.speedy === void 0 ? !0 : c.speedy, this.tags = [], this.ctr = 0, this.nonce = c.nonce, this.key = c.key, this.container = c.container, this.prepend = c.prepend, this.insertionPoint = c.insertionPoint, this.before = null;
  }
  var i = a.prototype;
  return i.hydrate = function(o) {
    o.forEach(this._insertTag);
  }, i.insert = function(o) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Og(this));
    var f = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var d = Cg(f);
      try {
        d.insertRule(o, d.cssRules.length);
      } catch {
      }
    } else
      f.appendChild(document.createTextNode(o));
    this.ctr++;
  }, i.flush = function() {
    this.tags.forEach(function(o) {
      var f;
      return (f = o.parentNode) == null ? void 0 : f.removeChild(o);
    }), this.tags = [], this.ctr = 0;
  }, a;
})(), se = "-ms-", fr = "-moz-", Et = "-webkit-", pm = "comm", yf = "rule", gf = "decl", _g = "@import", ym = "@keyframes", Mg = "@layer", Dg = Math.abs, mr = String.fromCharCode, zg = Object.assign;
function Ng(a, i) {
  return ie(a, 0) ^ 45 ? (((i << 2 ^ ie(a, 0)) << 2 ^ ie(a, 1)) << 2 ^ ie(a, 2)) << 2 ^ ie(a, 3) : 0;
}
function gm(a) {
  return a.trim();
}
function Ug(a, i) {
  return (a = i.exec(a)) ? a[0] : a;
}
function xt(a, i, c) {
  return a.replace(i, c);
}
function nf(a, i) {
  return a.indexOf(i);
}
function ie(a, i) {
  return a.charCodeAt(i) | 0;
}
function Uu(a, i, c) {
  return a.slice(i, c);
}
function en(a) {
  return a.length;
}
function vf(a) {
  return a.length;
}
function nr(a, i) {
  return i.push(a), a;
}
function Bg(a, i) {
  return a.map(i).join("");
}
var pr = 1, xa = 1, vm = 0, ve = 0, Jt = 0, Ca = "";
function yr(a, i, c, o, f, d, m) {
  return { value: a, root: i, parent: c, type: o, props: f, children: d, line: pr, column: xa, length: m, return: "" };
}
function Cu(a, i) {
  return zg(yr("", null, null, "", null, null, 0), a, { length: -a.length }, i);
}
function wg() {
  return Jt;
}
function Hg() {
  return Jt = ve > 0 ? ie(Ca, --ve) : 0, xa--, Jt === 10 && (xa = 1, pr--), Jt;
}
function Me() {
  return Jt = ve < vm ? ie(Ca, ve++) : 0, xa++, Jt === 10 && (xa = 1, pr++), Jt;
}
function an() {
  return ie(Ca, ve);
}
function ir() {
  return ve;
}
function Hu(a, i) {
  return Uu(Ca, a, i);
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
function bm(a) {
  return pr = xa = 1, vm = en(Ca = a), ve = 0, [];
}
function Sm(a) {
  return Ca = "", a;
}
function rr(a) {
  return gm(Hu(ve - 1, lf(a === 91 ? a + 2 : a === 40 ? a + 1 : a)));
}
function qg(a) {
  for (; (Jt = an()) && Jt < 33; )
    Me();
  return Bu(a) > 2 || Bu(Jt) > 3 ? "" : " ";
}
function Yg(a, i) {
  for (; --i && Me() && !(Jt < 48 || Jt > 102 || Jt > 57 && Jt < 65 || Jt > 70 && Jt < 97); )
    ;
  return Hu(a, ir() + (i < 6 && an() == 32 && Me() == 32));
}
function lf(a) {
  for (; Me(); )
    switch (Jt) {
      // ] ) " '
      case a:
        return ve;
      // " '
      case 34:
      case 39:
        a !== 34 && a !== 39 && lf(Jt);
        break;
      // (
      case 40:
        a === 41 && lf(a);
        break;
      // \
      case 92:
        Me();
        break;
    }
  return ve;
}
function jg(a, i) {
  for (; Me() && a + Jt !== 57; )
    if (a + Jt === 84 && an() === 47)
      break;
  return "/*" + Hu(i, ve - 1) + "*" + mr(a === 47 ? a : Me());
}
function Gg(a) {
  for (; !Bu(an()); )
    Me();
  return Hu(a, ve);
}
function kg(a) {
  return Sm(cr("", null, null, null, [""], a = bm(a), 0, [0], a));
}
function cr(a, i, c, o, f, d, m, y, b) {
  for (var g = 0, _ = 0, x = m, N = 0, j = 0, z = 0, O = 1, k = 1, K = 1, P = 0, J = "", X = f, et = d, w = o, Z = J; k; )
    switch (z = P, P = Me()) {
      // (
      case 40:
        if (z != 108 && ie(Z, x - 1) == 58) {
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
        Z += qg(z);
        break;
      // \
      case 92:
        Z += Yg(ir() - 1, 7);
        continue;
      // /
      case 47:
        switch (an()) {
          case 42:
          case 47:
            nr(Lg(jg(Me(), ir()), i, c), b);
            break;
          default:
            Z += "/";
        }
        break;
      // {
      case 123 * O:
        y[g++] = en(Z) * K;
      // } ; \0
      case 125 * O:
      case 59:
      case 0:
        switch (P) {
          // \0 }
          case 0:
          case 125:
            k = 0;
          // ;
          case 59 + _:
            K == -1 && (Z = xt(Z, /\f/g, "")), j > 0 && en(Z) - x && nr(j > 32 ? C0(Z + ";", o, c, x - 1) : C0(xt(Z, " ", "") + ";", o, c, x - 2), b);
            break;
          // @ ;
          case 59:
            Z += ";";
          // { rule/at-rule
          default:
            if (nr(w = A0(Z, i, c, g, _, f, y, J, X = [], et = [], x), d), P === 123)
              if (_ === 0)
                cr(Z, i, w, w, X, d, x, y, et);
              else
                switch (N === 99 && ie(Z, 3) === 110 ? 100 : N) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    cr(a, w, w, o && nr(A0(a, w, w, 0, 0, f, y, J, f, X = [], x), et), f, et, x, y, o ? X : et);
                    break;
                  default:
                    cr(Z, w, w, w, [""], et, 0, y, et);
                }
        }
        g = _ = j = 0, O = K = 1, J = Z = "", x = m;
        break;
      // :
      case 58:
        x = 1 + en(Z), j = z;
      default:
        if (O < 1) {
          if (P == 123)
            --O;
          else if (P == 125 && O++ == 0 && Hg() == 125)
            continue;
        }
        switch (Z += mr(P), P * O) {
          // &
          case 38:
            K = _ > 0 ? 1 : (Z += "\f", -1);
            break;
          // ,
          case 44:
            y[g++] = (en(Z) - 1) * K, K = 1;
            break;
          // @
          case 64:
            an() === 45 && (Z += rr(Me())), N = an(), _ = x = en(J = Z += Gg(ir())), P++;
            break;
          // -
          case 45:
            z === 45 && en(Z) == 2 && (O = 0);
        }
    }
  return d;
}
function A0(a, i, c, o, f, d, m, y, b, g, _) {
  for (var x = f - 1, N = f === 0 ? d : [""], j = vf(N), z = 0, O = 0, k = 0; z < o; ++z)
    for (var K = 0, P = Uu(a, x + 1, x = Dg(O = m[z])), J = a; K < j; ++K)
      (J = gm(O > 0 ? N[K] + " " + P : xt(P, /&\f/g, N[K]))) && (b[k++] = J);
  return yr(a, i, c, f === 0 ? yf : y, b, g, _);
}
function Lg(a, i, c) {
  return yr(a, i, c, pm, mr(wg()), Uu(a, 2, -2), 0);
}
function C0(a, i, c, o) {
  return yr(a, i, c, gf, Uu(a, 0, o), Uu(a, o + 1, -1), o);
}
function Ta(a, i) {
  for (var c = "", o = vf(a), f = 0; f < o; f++)
    c += i(a[f], f, a, i) || "";
  return c;
}
function Xg(a, i, c, o) {
  switch (a.type) {
    case Mg:
      if (a.children.length) break;
    case _g:
    case gf:
      return a.return = a.return || a.value;
    case pm:
      return "";
    case ym:
      return a.return = a.value + "{" + Ta(a.children, o) + "}";
    case yf:
      a.value = a.props.join(",");
  }
  return en(c = Ta(a.children, o)) ? a.return = a.value + "{" + c + "}" : "";
}
function Qg(a) {
  var i = vf(a);
  return function(c, o, f, d) {
    for (var m = "", y = 0; y < i; y++)
      m += a[y](c, o, f, d) || "";
    return m;
  };
}
function Vg(a) {
  return function(i) {
    i.root || (i = i.return) && a(i);
  };
}
function Tm(a) {
  var i = /* @__PURE__ */ Object.create(null);
  return function(c) {
    return i[c] === void 0 && (i[c] = a(c)), i[c];
  };
}
var Zg = function(i, c, o) {
  for (var f = 0, d = 0; f = d, d = an(), f === 38 && d === 12 && (c[o] = 1), !Bu(d); )
    Me();
  return Hu(i, ve);
}, Kg = function(i, c) {
  var o = -1, f = 44;
  do
    switch (Bu(f)) {
      case 0:
        f === 38 && an() === 12 && (c[o] = 1), i[o] += Zg(ve - 1, c, o);
        break;
      case 2:
        i[o] += rr(f);
        break;
      case 4:
        if (f === 44) {
          i[++o] = an() === 58 ? "&\f" : "", c[o] = i[o].length;
          break;
        }
      // fallthrough
      default:
        i[o] += mr(f);
    }
  while (f = Me());
  return i;
}, $g = function(i, c) {
  return Sm(Kg(bm(i), c));
}, O0 = /* @__PURE__ */ new WeakMap(), Jg = function(i) {
  if (!(i.type !== "rule" || !i.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  i.length < 1)) {
    for (var c = i.value, o = i.parent, f = i.column === o.column && i.line === o.line; o.type !== "rule"; )
      if (o = o.parent, !o) return;
    if (!(i.props.length === 1 && c.charCodeAt(0) !== 58 && !O0.get(o)) && !f) {
      O0.set(i, !0);
      for (var d = [], m = $g(c, d), y = o.props, b = 0, g = 0; b < m.length; b++)
        for (var _ = 0; _ < y.length; _++, g++)
          i.props[g] = d[b] ? m[b].replace(/&\f/g, y[_]) : y[_] + " " + m[b];
    }
  }
}, Wg = function(i) {
  if (i.type === "decl") {
    var c = i.value;
    // charcode for l
    c.charCodeAt(0) === 108 && // charcode for b
    c.charCodeAt(2) === 98 && (i.return = "", i.value = "");
  }
};
function Em(a, i) {
  switch (Ng(a, i)) {
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
      return Et + a + fr + a + se + a + a;
    // flex, flex-direction
    case 6828:
    case 4268:
      return Et + a + se + a + a;
    // order
    case 6165:
      return Et + a + se + "flex-" + a + a;
    // align-items
    case 5187:
      return Et + a + xt(a, /(\w+).+(:[^]+)/, Et + "box-$1$2" + se + "flex-$1$2") + a;
    // align-self
    case 5443:
      return Et + a + se + "flex-item-" + xt(a, /flex-|-self/, "") + a;
    // align-content
    case 4675:
      return Et + a + se + "flex-line-pack" + xt(a, /align-content|flex-|-self/, "") + a;
    // flex-shrink
    case 5548:
      return Et + a + se + xt(a, "shrink", "negative") + a;
    // flex-basis
    case 5292:
      return Et + a + se + xt(a, "basis", "preferred-size") + a;
    // flex-grow
    case 6060:
      return Et + "box-" + xt(a, "-grow", "") + Et + a + se + xt(a, "grow", "positive") + a;
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
      return xt(xt(a, /(.+:)(flex-)?(.*)/, Et + "box-pack:$3" + se + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Et + a + a;
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
      if (en(a) - 1 - i > 6) switch (ie(a, i + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (ie(a, i + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return xt(a, /(.+:)(.+)-([^]+)/, "$1" + Et + "$2-$3$1" + fr + (ie(a, i + 3) == 108 ? "$3" : "$2-$3")) + a;
        // (s)tretch
        case 115:
          return ~nf(a, "stretch") ? Em(xt(a, "stretch", "fill-available"), i) + a : a;
      }
      break;
    // position: sticky
    case 4949:
      if (ie(a, i + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (ie(a, en(a) - 3 - (~nf(a, "!important") && 10))) {
        // stic(k)y
        case 107:
          return xt(a, ":", ":" + Et) + a;
        // (inline-)?fl(e)x
        case 101:
          return xt(a, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Et + (ie(a, 14) === 45 ? "inline-" : "") + "box$3$1" + Et + "$2$3$1" + se + "$2box$3") + a;
      }
      break;
    // writing-mode
    case 5936:
      switch (ie(a, i + 11)) {
        // vertical-l(r)
        case 114:
          return Et + a + se + xt(a, /[svh]\w+-[tblr]{2}/, "tb") + a;
        // vertical-r(l)
        case 108:
          return Et + a + se + xt(a, /[svh]\w+-[tblr]{2}/, "tb-rl") + a;
        // horizontal(-)tb
        case 45:
          return Et + a + se + xt(a, /[svh]\w+-[tblr]{2}/, "lr") + a;
      }
      return Et + a + se + a + a;
  }
  return a;
}
var Fg = function(i, c, o, f) {
  if (i.length > -1 && !i.return) switch (i.type) {
    case gf:
      i.return = Em(i.value, i.length);
      break;
    case ym:
      return Ta([Cu(i, {
        value: xt(i.value, "@", "@" + Et)
      })], f);
    case yf:
      if (i.length) return Bg(i.props, function(d) {
        switch (Ug(d, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return Ta([Cu(i, {
              props: [xt(d, /:(read-\w+)/, ":" + fr + "$1")]
            })], f);
          // :placeholder
          case "::placeholder":
            return Ta([Cu(i, {
              props: [xt(d, /:(plac\w+)/, ":" + Et + "input-$1")]
            }), Cu(i, {
              props: [xt(d, /:(plac\w+)/, ":" + fr + "$1")]
            }), Cu(i, {
              props: [xt(d, /:(plac\w+)/, se + "input-$1")]
            })], f);
        }
        return "";
      });
  }
}, Pg = [Fg], Ig = function(i) {
  var c = i.key;
  if (c === "css") {
    var o = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(o, function(O) {
      var k = O.getAttribute("data-emotion");
      k.indexOf(" ") !== -1 && (document.head.appendChild(O), O.setAttribute("data-s", ""));
    });
  }
  var f = i.stylisPlugins || Pg, d = {}, m, y = [];
  m = i.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + c + ' "]'),
    function(O) {
      for (var k = O.getAttribute("data-emotion").split(" "), K = 1; K < k.length; K++)
        d[k[K]] = !0;
      y.push(O);
    }
  );
  var b, g = [Jg, Wg];
  {
    var _, x = [Xg, Vg(function(O) {
      _.insert(O);
    })], N = Qg(g.concat(f, x)), j = function(k) {
      return Ta(kg(k), N);
    };
    b = function(k, K, P, J) {
      _ = P, j(k ? k + "{" + K.styles + "}" : K.styles), J && (z.inserted[K.name] = !0);
    };
  }
  var z = {
    key: c,
    sheet: new Rg({
      key: c,
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
  return z.sheet.hydrate(y), z;
}, tv = !0;
function ev(a, i, c) {
  var o = "";
  return c.split(" ").forEach(function(f) {
    a[f] !== void 0 ? i.push(a[f] + ";") : f && (o += f + " ");
  }), o;
}
var xm = function(i, c, o) {
  var f = i.key + "-" + c.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (o === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  tv === !1) && i.registered[f] === void 0 && (i.registered[f] = c.styles);
}, nv = function(i, c, o) {
  xm(i, c, o);
  var f = i.key + "-" + c.name;
  if (i.inserted[c.name] === void 0) {
    var d = c;
    do
      i.insert(c === d ? "." + f : "", d, i.sheet, !0), d = d.next;
    while (d !== void 0);
  }
};
function lv(a) {
  for (var i = 0, c, o = 0, f = a.length; f >= 4; ++o, f -= 4)
    c = a.charCodeAt(o) & 255 | (a.charCodeAt(++o) & 255) << 8 | (a.charCodeAt(++o) & 255) << 16 | (a.charCodeAt(++o) & 255) << 24, c = /* Math.imul(k, m): */
    (c & 65535) * 1540483477 + ((c >>> 16) * 59797 << 16), c ^= /* k >>> r: */
    c >>> 24, i = /* Math.imul(k, m): */
    (c & 65535) * 1540483477 + ((c >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (i & 65535) * 1540483477 + ((i >>> 16) * 59797 << 16);
  switch (f) {
    case 3:
      i ^= (a.charCodeAt(o + 2) & 255) << 16;
    case 2:
      i ^= (a.charCodeAt(o + 1) & 255) << 8;
    case 1:
      i ^= a.charCodeAt(o) & 255, i = /* Math.imul(h, m): */
      (i & 65535) * 1540483477 + ((i >>> 16) * 59797 << 16);
  }
  return i ^= i >>> 13, i = /* Math.imul(h, m): */
  (i & 65535) * 1540483477 + ((i >>> 16) * 59797 << 16), ((i ^ i >>> 15) >>> 0).toString(36);
}
var av = {
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
}, uv = /[A-Z]|^ms/g, iv = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Am = function(i) {
  return i.charCodeAt(1) === 45;
}, R0 = function(i) {
  return i != null && typeof i != "boolean";
}, Xo = /* @__PURE__ */ Tm(function(a) {
  return Am(a) ? a : a.replace(uv, "-$&").toLowerCase();
}), _0 = function(i, c) {
  switch (i) {
    case "animation":
    case "animationName":
      if (typeof c == "string")
        return c.replace(iv, function(o, f, d) {
          return nn = {
            name: f,
            styles: d,
            next: nn
          }, f;
        });
  }
  return av[i] !== 1 && !Am(i) && typeof c == "number" && c !== 0 ? c + "px" : c;
};
function wu(a, i, c) {
  if (c == null)
    return "";
  var o = c;
  if (o.__emotion_styles !== void 0)
    return o;
  switch (typeof c) {
    case "boolean":
      return "";
    case "object": {
      var f = c;
      if (f.anim === 1)
        return nn = {
          name: f.name,
          styles: f.styles,
          next: nn
        }, f.name;
      var d = c;
      if (d.styles !== void 0) {
        var m = d.next;
        if (m !== void 0)
          for (; m !== void 0; )
            nn = {
              name: m.name,
              styles: m.styles,
              next: nn
            }, m = m.next;
        var y = d.styles + ";";
        return y;
      }
      return rv(a, i, c);
    }
    case "function": {
      if (a !== void 0) {
        var b = nn, g = c(a);
        return nn = b, wu(a, i, g);
      }
      break;
    }
  }
  var _ = c;
  if (i == null)
    return _;
  var x = i[_];
  return x !== void 0 ? x : _;
}
function rv(a, i, c) {
  var o = "";
  if (Array.isArray(c))
    for (var f = 0; f < c.length; f++)
      o += wu(a, i, c[f]) + ";";
  else
    for (var d in c) {
      var m = c[d];
      if (typeof m != "object") {
        var y = m;
        i != null && i[y] !== void 0 ? o += d + "{" + i[y] + "}" : R0(y) && (o += Xo(d) + ":" + _0(d, y) + ";");
      } else if (Array.isArray(m) && typeof m[0] == "string" && (i == null || i[m[0]] === void 0))
        for (var b = 0; b < m.length; b++)
          R0(m[b]) && (o += Xo(d) + ":" + _0(d, m[b]) + ";");
      else {
        var g = wu(a, i, m);
        switch (d) {
          case "animation":
          case "animationName": {
            o += Xo(d) + ":" + g + ";";
            break;
          }
          default:
            o += d + "{" + g + "}";
        }
      }
    }
  return o;
}
var M0 = /label:\s*([^\s;{]+)\s*(;|$)/g, nn;
function Cm(a, i, c) {
  if (a.length === 1 && typeof a[0] == "object" && a[0] !== null && a[0].styles !== void 0)
    return a[0];
  var o = !0, f = "";
  nn = void 0;
  var d = a[0];
  if (d == null || d.raw === void 0)
    o = !1, f += wu(c, i, d);
  else {
    var m = d;
    f += m[0];
  }
  for (var y = 1; y < a.length; y++)
    if (f += wu(c, i, a[y]), o) {
      var b = d;
      f += b[y];
    }
  M0.lastIndex = 0;
  for (var g = "", _; (_ = M0.exec(f)) !== null; )
    g += "-" + _[1];
  var x = lv(f) + g;
  return {
    name: x,
    styles: f,
    next: nn
  };
}
var cv = function(i) {
  return i();
}, ov = tf.useInsertionEffect ? tf.useInsertionEffect : !1, fv = ov || cv, Om = /* @__PURE__ */ I.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Ig({
    key: "css"
  }) : null
);
Om.Provider;
var sv = function(i) {
  return /* @__PURE__ */ I.forwardRef(function(c, o) {
    var f = I.useContext(Om);
    return i(c, f, o);
  });
}, Rm = /* @__PURE__ */ I.createContext({}), dv = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, hv = /* @__PURE__ */ Tm(
  function(a) {
    return dv.test(a) || a.charCodeAt(0) === 111 && a.charCodeAt(1) === 110 && a.charCodeAt(2) < 91;
  }
  /* Z+1 */
), mv = hv, pv = function(i) {
  return i !== "theme";
}, D0 = function(i) {
  return typeof i == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  i.charCodeAt(0) > 96 ? mv : pv;
}, z0 = function(i, c, o) {
  var f;
  if (c) {
    var d = c.shouldForwardProp;
    f = i.__emotion_forwardProp && d ? function(m) {
      return i.__emotion_forwardProp(m) && d(m);
    } : d;
  }
  return typeof f != "function" && o && (f = i.__emotion_forwardProp), f;
}, yv = function(i) {
  var c = i.cache, o = i.serialized, f = i.isStringTag;
  return xm(c, o, f), fv(function() {
    return nv(c, o, f);
  }), null;
}, gv = function a(i, c) {
  var o = i.__emotion_real === i, f = o && i.__emotion_base || i, d, m;
  c !== void 0 && (d = c.label, m = c.target);
  var y = z0(i, c, o), b = y || D0(f), g = !b("as");
  return function() {
    var _ = arguments, x = o && i.__emotion_styles !== void 0 ? i.__emotion_styles.slice(0) : [];
    if (d !== void 0 && x.push("label:" + d + ";"), _[0] == null || _[0].raw === void 0)
      x.push.apply(x, _);
    else {
      var N = _[0];
      x.push(N[0]);
      for (var j = _.length, z = 1; z < j; z++)
        x.push(_[z], N[z]);
    }
    var O = sv(function(k, K, P) {
      var J = g && k.as || f, X = "", et = [], w = k;
      if (k.theme == null) {
        w = {};
        for (var Z in k)
          w[Z] = k[Z];
        w.theme = I.useContext(Rm);
      }
      typeof k.className == "string" ? X = ev(K.registered, et, k.className) : k.className != null && (X = k.className + " ");
      var ot = Cm(x.concat(et), K.registered, w);
      X += K.key + "-" + ot.name, m !== void 0 && (X += " " + m);
      var at = g && y === void 0 ? D0(J) : b, st = {};
      for (var dt in k)
        g && dt === "as" || at(dt) && (st[dt] = k[dt]);
      return st.className = X, P && (st.ref = P), /* @__PURE__ */ I.createElement(I.Fragment, null, /* @__PURE__ */ I.createElement(yv, {
        cache: K,
        serialized: ot,
        isStringTag: typeof J == "string"
      }), /* @__PURE__ */ I.createElement(J, st));
    });
    return O.displayName = d !== void 0 ? d : "Styled(" + (typeof f == "string" ? f : f.displayName || f.name || "Component") + ")", O.defaultProps = i.defaultProps, O.__emotion_real = O, O.__emotion_base = f, O.__emotion_styles = x, O.__emotion_forwardProp = y, Object.defineProperty(O, "toString", {
      value: function() {
        return "." + m;
      }
    }), O.withComponent = function(k, K) {
      var P = a(k, ef({}, c, K, {
        shouldForwardProp: z0(O, K, !0)
      }));
      return P.apply(void 0, x);
    }, O;
  };
}, vv = [
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
], af = gv.bind(null);
vv.forEach(function(a) {
  af[a] = af(a);
});
function bv(a, i) {
  return af(a, i);
}
function Sv(a, i) {
  Array.isArray(a.__emotion_styles) && (a.__emotion_styles = i(a.__emotion_styles));
}
const N0 = [];
function Tl(a) {
  return N0[0] = a, Cm(N0);
}
var Qo = { exports: {} }, Ut = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var U0;
function Tv() {
  if (U0) return Ut;
  U0 = 1;
  var a = Symbol.for("react.transitional.element"), i = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), d = Symbol.for("react.consumer"), m = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), N = Symbol.for("react.view_transition"), j = Symbol.for("react.client.reference");
  function z(O) {
    if (typeof O == "object" && O !== null) {
      var k = O.$$typeof;
      switch (k) {
        case a:
          switch (O = O.type, O) {
            case c:
            case f:
            case o:
            case b:
            case g:
            case N:
              return O;
            default:
              switch (O = O && O.$$typeof, O) {
                case m:
                case y:
                case x:
                case _:
                  return O;
                case d:
                  return O;
                default:
                  return k;
              }
          }
        case i:
          return k;
      }
    }
  }
  return Ut.ContextConsumer = d, Ut.ContextProvider = m, Ut.Element = a, Ut.ForwardRef = y, Ut.Fragment = c, Ut.Lazy = x, Ut.Memo = _, Ut.Portal = i, Ut.Profiler = f, Ut.StrictMode = o, Ut.Suspense = b, Ut.SuspenseList = g, Ut.isContextConsumer = function(O) {
    return z(O) === d;
  }, Ut.isContextProvider = function(O) {
    return z(O) === m;
  }, Ut.isElement = function(O) {
    return typeof O == "object" && O !== null && O.$$typeof === a;
  }, Ut.isForwardRef = function(O) {
    return z(O) === y;
  }, Ut.isFragment = function(O) {
    return z(O) === c;
  }, Ut.isLazy = function(O) {
    return z(O) === x;
  }, Ut.isMemo = function(O) {
    return z(O) === _;
  }, Ut.isPortal = function(O) {
    return z(O) === i;
  }, Ut.isProfiler = function(O) {
    return z(O) === f;
  }, Ut.isStrictMode = function(O) {
    return z(O) === o;
  }, Ut.isSuspense = function(O) {
    return z(O) === b;
  }, Ut.isSuspenseList = function(O) {
    return z(O) === g;
  }, Ut.isValidElementType = function(O) {
    return typeof O == "string" || typeof O == "function" || O === c || O === f || O === o || O === b || O === g || typeof O == "object" && O !== null && (O.$$typeof === x || O.$$typeof === _ || O.$$typeof === m || O.$$typeof === d || O.$$typeof === y || O.$$typeof === j || O.getModuleId !== void 0);
  }, Ut.typeOf = z, Ut;
}
var B0;
function Ev() {
  return B0 || (B0 = 1, Qo.exports = /* @__PURE__ */ Tv()), Qo.exports;
}
var _m = /* @__PURE__ */ Ev();
function ln(a) {
  if (typeof a != "object" || a === null)
    return !1;
  const i = Object.getPrototypeOf(a);
  return (i === null || i === Object.prototype || Object.getPrototypeOf(i) === null) && !(Symbol.toStringTag in a) && !(Symbol.iterator in a);
}
function Mm(a) {
  if (/* @__PURE__ */ I.isValidElement(a) || _m.isValidElementType(a) || !ln(a))
    return a;
  const i = {};
  return Object.keys(a).forEach((c) => {
    i[c] = Mm(a[c]);
  }), i;
}
function De(a, i, c = {
  clone: !0
}) {
  const o = c.clone ? {
    ...a
  } : a;
  return ln(a) && ln(i) && Object.keys(i).forEach((f) => {
    /* @__PURE__ */ I.isValidElement(i[f]) || _m.isValidElementType(i[f]) ? o[f] = i[f] : ln(i[f]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(a, f) && ln(a[f]) ? o[f] = De(a[f], i[f], c) : c.clone ? o[f] = ln(i[f]) ? Mm(i[f]) : i[f] : o[f] = i[f];
  }), o;
}
const xv = (a) => {
  const i = Object.keys(a).map((c) => ({
    key: c,
    val: a[c]
  })) || [];
  return i.sort((c, o) => c.val - o.val), i.reduce((c, o) => ({
    ...c,
    [o.key]: o.val
  }), {});
};
function Av(a) {
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
    unit: c = "px",
    step: o = 5,
    ...f
  } = a, d = xv(i), m = Object.keys(d);
  function y(N) {
    return `@media (min-width:${typeof i[N] == "number" ? i[N] : N}${c})`;
  }
  function b(N) {
    return `@media (max-width:${(typeof i[N] == "number" ? i[N] : N) - o / 100}${c})`;
  }
  function g(N, j) {
    const z = m.indexOf(j);
    return `@media (min-width:${typeof i[N] == "number" ? i[N] : N}${c}) and (max-width:${(z !== -1 && typeof i[m[z]] == "number" ? i[m[z]] : j) - o / 100}${c})`;
  }
  function _(N) {
    return m.indexOf(N) + 1 < m.length ? g(N, m[m.indexOf(N) + 1]) : y(N);
  }
  function x(N) {
    const j = m.indexOf(N);
    return j === 0 ? y(m[1]) : j === m.length - 1 ? b(m[j]) : g(N, m[m.indexOf(N) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: m,
    values: d,
    up: y,
    down: b,
    between: g,
    only: _,
    not: x,
    unit: c,
    ...f
  };
}
function w0(a, i) {
  if (!a.containerQueries)
    return i;
  const c = Object.keys(i).filter((o) => o.startsWith("@container")).sort((o, f) => {
    const d = /min-width:\s*([0-9.]+)/;
    return +(o.match(d)?.[1] || 0) - +(f.match(d)?.[1] || 0);
  });
  return c.length ? c.reduce((o, f) => {
    const d = i[f];
    return delete o[f], o[f] = d, o;
  }, {
    ...i
  }) : i;
}
function Cv(a, i) {
  return i === "@" || i.startsWith("@") && (a.some((c) => i.startsWith(`@${c}`)) || !!i.match(/^@\d/));
}
function Ov(a, i) {
  const c = i.match(/^@([^/]+)?\/?(.+)?$/);
  if (!c)
    return null;
  const [, o, f] = c, d = Number.isNaN(+o) ? o || 0 : +o;
  return a.containerQueries(f).up(d);
}
function Rv(a) {
  const i = (d, m) => d.replace("@media", m ? `@container ${m}` : "@container");
  function c(d, m) {
    d.up = (...y) => i(a.breakpoints.up(...y), m), d.down = (...y) => i(a.breakpoints.down(...y), m), d.between = (...y) => i(a.breakpoints.between(...y), m), d.only = (...y) => i(a.breakpoints.only(...y), m), d.not = (...y) => {
      const b = i(a.breakpoints.not(...y), m);
      return b.includes("not all and") ? b.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : b;
    };
  }
  const o = {}, f = (d) => (c(o, d), o);
  return c(f), {
    ...a,
    containerQueries: f
  };
}
const _v = {
  borderRadius: 4
};
function Du(a, i) {
  return i ? De(a, i, {
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
}, H0 = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (a) => `@media (min-width:${gr[a]}px)`
}, Mv = {
  containerQueries: (a) => ({
    up: (i) => {
      let c = typeof i == "number" ? i : gr[i] || i;
      return typeof c == "number" && (c = `${c}px`), a ? `@container ${a} (min-width:${c})` : `@container (min-width:${c})`;
    }
  })
};
function Cn(a, i, c) {
  const o = a.theme || {};
  if (Array.isArray(i)) {
    const d = o.breakpoints || H0;
    return i.reduce((m, y, b) => (m[d.up(d.keys[b])] = c(i[b]), m), {});
  }
  if (typeof i == "object") {
    const d = o.breakpoints || H0;
    return Object.keys(i).reduce((m, y) => {
      if (Cv(d.keys, y)) {
        const b = Ov(o.containerQueries ? o : Mv, y);
        b && (m[b] = c(i[y], y));
      } else if (Object.keys(d.values || gr).includes(y)) {
        const b = d.up(y);
        m[b] = c(i[y], y);
      } else {
        const b = y;
        m[b] = i[b];
      }
      return m;
    }, {});
  }
  return c(i);
}
function Dv(a = {}) {
  return a.keys?.reduce((c, o) => {
    const f = a.up(o);
    return c[f] = {}, c;
  }, {}) || {};
}
function q0(a, i) {
  return a.reduce((c, o) => {
    const f = c[o];
    return (!f || Object.keys(f).length === 0) && delete c[o], c;
  }, i);
}
function Ze(a) {
  if (typeof a != "string")
    throw new Error(El(7));
  return a.charAt(0).toUpperCase() + a.slice(1);
}
function vr(a, i, c = !0) {
  if (!i || typeof i != "string")
    return null;
  if (a && a.vars && c) {
    const o = `vars.${i}`.split(".").reduce((f, d) => f && f[d] ? f[d] : null, a);
    if (o != null)
      return o;
  }
  return i.split(".").reduce((o, f) => o && o[f] != null ? o[f] : null, a);
}
function sr(a, i, c, o = c) {
  let f;
  return typeof a == "function" ? f = a(c) : Array.isArray(a) ? f = a[c] || o : f = vr(a, c) || o, i && (f = i(f, o, a)), f;
}
function Zt(a) {
  const {
    prop: i,
    cssProperty: c = a.prop,
    themeKey: o,
    transform: f
  } = a, d = (m) => {
    if (m[i] == null)
      return null;
    const y = m[i], b = m.theme, g = vr(b, o) || {};
    return Cn(m, y, (x) => {
      let N = sr(g, f, x);
      return x === N && typeof x == "string" && (N = sr(g, f, `${i}${x === "default" ? "" : Ze(x)}`, x)), c === !1 ? N : {
        [c]: N
      };
    });
  };
  return d.propTypes = {}, d.filterProps = [i], d;
}
function zv(a) {
  const i = {};
  return (c) => (i[c] === void 0 && (i[c] = a(c)), i[c]);
}
const Nv = {
  m: "margin",
  p: "padding"
}, Uv = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Y0 = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Bv = zv((a) => {
  if (a.length > 2)
    if (Y0[a])
      a = Y0[a];
    else
      return [a];
  const [i, c] = a.split(""), o = Nv[i], f = Uv[c] || "";
  return Array.isArray(f) ? f.map((d) => o + d) : [o + f];
}), bf = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Sf = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...bf, ...Sf];
function qu(a, i, c, o) {
  const f = vr(a, i, !0) ?? c;
  return typeof f == "number" || typeof f == "string" ? (d) => typeof d == "string" ? d : typeof f == "string" ? f.startsWith("var(") && d === 0 ? 0 : f.startsWith("var(") && d === 1 ? f : `calc(${d} * ${f})` : f * d : Array.isArray(f) ? (d) => {
    if (typeof d == "string")
      return d;
    const m = Math.abs(d), y = f[m];
    return d >= 0 ? y : typeof y == "number" ? -y : typeof y == "string" && y.startsWith("var(") ? `calc(-1 * ${y})` : `-${y}`;
  } : typeof f == "function" ? f : () => {
  };
}
function Tf(a) {
  return qu(a, "spacing", 8);
}
function Yu(a, i) {
  return typeof i == "string" || i == null ? i : a(i);
}
function wv(a, i) {
  return (c) => a.reduce((o, f) => (o[f] = Yu(i, c), o), {});
}
function Hv(a, i, c, o) {
  if (!i.includes(c))
    return null;
  const f = Bv(c), d = wv(f, o), m = a[c];
  return Cn(a, m, d);
}
function Dm(a, i) {
  const c = Tf(a.theme);
  return Object.keys(a).map((o) => Hv(a, i, o, c)).reduce(Du, {});
}
function Lt(a) {
  return Dm(a, bf);
}
Lt.propTypes = {};
Lt.filterProps = bf;
function Xt(a) {
  return Dm(a, Sf);
}
Xt.propTypes = {};
Xt.filterProps = Sf;
function zm(a = 8, i = Tf({
  spacing: a
})) {
  if (a.mui)
    return a;
  const c = (...o) => (o.length === 0 ? [1] : o).map((d) => {
    const m = i(d);
    return typeof m == "number" ? `${m}px` : m;
  }).join(" ");
  return c.mui = !0, c;
}
function br(...a) {
  const i = a.reduce((o, f) => (f.filterProps.forEach((d) => {
    o[d] = f;
  }), o), {}), c = (o) => Object.keys(o).reduce((f, d) => i[d] ? Du(f, i[d](o)) : f, {});
  return c.propTypes = {}, c.filterProps = a.reduce((o, f) => o.concat(f.filterProps), []), c;
}
function Ge(a) {
  return typeof a != "number" ? a : `${a}px solid`;
}
function Le(a, i) {
  return Zt({
    prop: a,
    themeKey: "borders",
    transform: i
  });
}
const qv = Le("border", Ge), Yv = Le("borderTop", Ge), jv = Le("borderRight", Ge), Gv = Le("borderBottom", Ge), kv = Le("borderLeft", Ge), Lv = Le("borderColor"), Xv = Le("borderTopColor"), Qv = Le("borderRightColor"), Vv = Le("borderBottomColor"), Zv = Le("borderLeftColor"), Kv = Le("outline", Ge), $v = Le("outlineColor"), Sr = (a) => {
  if (a.borderRadius !== void 0 && a.borderRadius !== null) {
    const i = qu(a.theme, "shape.borderRadius", 4), c = (o) => ({
      borderRadius: Yu(i, o)
    });
    return Cn(a, a.borderRadius, c);
  }
  return null;
};
Sr.propTypes = {};
Sr.filterProps = ["borderRadius"];
br(qv, Yv, jv, Gv, kv, Lv, Xv, Qv, Vv, Zv, Sr, Kv, $v);
const Tr = (a) => {
  if (a.gap !== void 0 && a.gap !== null) {
    const i = qu(a.theme, "spacing", 8), c = (o) => ({
      gap: Yu(i, o)
    });
    return Cn(a, a.gap, c);
  }
  return null;
};
Tr.propTypes = {};
Tr.filterProps = ["gap"];
const Er = (a) => {
  if (a.columnGap !== void 0 && a.columnGap !== null) {
    const i = qu(a.theme, "spacing", 8), c = (o) => ({
      columnGap: Yu(i, o)
    });
    return Cn(a, a.columnGap, c);
  }
  return null;
};
Er.propTypes = {};
Er.filterProps = ["columnGap"];
const xr = (a) => {
  if (a.rowGap !== void 0 && a.rowGap !== null) {
    const i = qu(a.theme, "spacing", 8), c = (o) => ({
      rowGap: Yu(i, o)
    });
    return Cn(a, a.rowGap, c);
  }
  return null;
};
xr.propTypes = {};
xr.filterProps = ["rowGap"];
const Jv = Zt({
  prop: "gridColumn"
}), Wv = Zt({
  prop: "gridRow"
}), Fv = Zt({
  prop: "gridAutoFlow"
}), Pv = Zt({
  prop: "gridAutoColumns"
}), Iv = Zt({
  prop: "gridAutoRows"
}), t1 = Zt({
  prop: "gridTemplateColumns"
}), e1 = Zt({
  prop: "gridTemplateRows"
}), n1 = Zt({
  prop: "gridTemplateAreas"
}), l1 = Zt({
  prop: "gridArea"
});
br(Tr, Er, xr, Jv, Wv, Fv, Pv, Iv, t1, e1, n1, l1);
function Ea(a, i) {
  return i === "grey" ? i : a;
}
const a1 = Zt({
  prop: "color",
  themeKey: "palette",
  transform: Ea
}), u1 = Zt({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Ea
}), i1 = Zt({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Ea
});
br(a1, u1, i1);
function _e(a) {
  return a <= 1 && a !== 0 ? `${a * 100}%` : a;
}
const r1 = Zt({
  prop: "width",
  transform: _e
}), Ef = (a) => {
  if (a.maxWidth !== void 0 && a.maxWidth !== null) {
    const i = (c) => {
      const o = a.theme?.breakpoints?.values?.[c] || gr[c];
      return o ? a.theme?.breakpoints?.unit !== "px" ? {
        maxWidth: `${o}${a.theme.breakpoints.unit}`
      } : {
        maxWidth: o
      } : {
        maxWidth: _e(c)
      };
    };
    return Cn(a, a.maxWidth, i);
  }
  return null;
};
Ef.filterProps = ["maxWidth"];
const c1 = Zt({
  prop: "minWidth",
  transform: _e
}), o1 = Zt({
  prop: "height",
  transform: _e
}), f1 = Zt({
  prop: "maxHeight",
  transform: _e
}), s1 = Zt({
  prop: "minHeight",
  transform: _e
});
Zt({
  prop: "size",
  cssProperty: "width",
  transform: _e
});
Zt({
  prop: "size",
  cssProperty: "height",
  transform: _e
});
const d1 = Zt({
  prop: "boxSizing"
});
br(r1, Ef, c1, o1, f1, s1, d1);
const ju = {
  // borders
  border: {
    themeKey: "borders",
    transform: Ge
  },
  borderTop: {
    themeKey: "borders",
    transform: Ge
  },
  borderRight: {
    themeKey: "borders",
    transform: Ge
  },
  borderBottom: {
    themeKey: "borders",
    transform: Ge
  },
  borderLeft: {
    themeKey: "borders",
    transform: Ge
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
    transform: Ge
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
    transform: Ea
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Ea
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Ea
  },
  // spacing
  p: {
    style: Xt
  },
  pt: {
    style: Xt
  },
  pr: {
    style: Xt
  },
  pb: {
    style: Xt
  },
  pl: {
    style: Xt
  },
  px: {
    style: Xt
  },
  py: {
    style: Xt
  },
  padding: {
    style: Xt
  },
  paddingTop: {
    style: Xt
  },
  paddingRight: {
    style: Xt
  },
  paddingBottom: {
    style: Xt
  },
  paddingLeft: {
    style: Xt
  },
  paddingX: {
    style: Xt
  },
  paddingY: {
    style: Xt
  },
  paddingInline: {
    style: Xt
  },
  paddingInlineStart: {
    style: Xt
  },
  paddingInlineEnd: {
    style: Xt
  },
  paddingBlock: {
    style: Xt
  },
  paddingBlockStart: {
    style: Xt
  },
  paddingBlockEnd: {
    style: Xt
  },
  m: {
    style: Lt
  },
  mt: {
    style: Lt
  },
  mr: {
    style: Lt
  },
  mb: {
    style: Lt
  },
  ml: {
    style: Lt
  },
  mx: {
    style: Lt
  },
  my: {
    style: Lt
  },
  margin: {
    style: Lt
  },
  marginTop: {
    style: Lt
  },
  marginRight: {
    style: Lt
  },
  marginBottom: {
    style: Lt
  },
  marginLeft: {
    style: Lt
  },
  marginX: {
    style: Lt
  },
  marginY: {
    style: Lt
  },
  marginInline: {
    style: Lt
  },
  marginInlineStart: {
    style: Lt
  },
  marginInlineEnd: {
    style: Lt
  },
  marginBlock: {
    style: Lt
  },
  marginBlockStart: {
    style: Lt
  },
  marginBlockEnd: {
    style: Lt
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
    transform: _e
  },
  maxWidth: {
    style: Ef
  },
  minWidth: {
    transform: _e
  },
  height: {
    transform: _e
  },
  maxHeight: {
    transform: _e
  },
  minHeight: {
    transform: _e
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
function h1(...a) {
  const i = a.reduce((o, f) => o.concat(Object.keys(f)), []), c = new Set(i);
  return a.every((o) => c.size === Object.keys(o).length);
}
function m1(a, i) {
  return typeof a == "function" ? a(i) : a;
}
function p1() {
  function a(c, o, f, d) {
    const m = {
      [c]: o,
      theme: f
    }, y = d[c];
    if (!y)
      return {
        [c]: o
      };
    const {
      cssProperty: b = c,
      themeKey: g,
      transform: _,
      style: x
    } = y;
    if (o == null)
      return null;
    if (g === "typography" && o === "inherit")
      return {
        [c]: o
      };
    const N = vr(f, g) || {};
    return x ? x(m) : Cn(m, o, (z) => {
      let O = sr(N, _, z);
      return z === O && typeof z == "string" && (O = sr(N, _, `${c}${z === "default" ? "" : Ze(z)}`, z)), b === !1 ? O : {
        [b]: O
      };
    });
  }
  function i(c) {
    const {
      sx: o,
      theme: f = {},
      nested: d
    } = c || {};
    if (!o)
      return null;
    const m = f.unstable_sxConfig ?? ju;
    function y(b) {
      let g = b;
      if (typeof b == "function")
        g = b(f);
      else if (typeof b != "object")
        return b;
      if (!g)
        return null;
      const _ = Dv(f.breakpoints), x = Object.keys(_);
      let N = _;
      return Object.keys(g).forEach((j) => {
        const z = m1(g[j], f);
        if (z != null)
          if (typeof z == "object")
            if (m[j])
              N = Du(N, a(j, z, f, m));
            else {
              const O = Cn({
                theme: f
              }, z, (k) => ({
                [j]: k
              }));
              h1(O, z) ? N[j] = i({
                sx: z,
                theme: f,
                nested: !0
              }) : N = Du(N, O);
            }
          else
            N = Du(N, a(j, z, f, m));
      }), !d && f.modularCssLayers ? {
        "@layer sx": w0(f, q0(x, N))
      } : w0(f, q0(x, N));
    }
    return Array.isArray(o) ? o.map(y) : y(o);
  }
  return i;
}
const Aa = p1();
Aa.filterProps = ["sx"];
function y1(a, i) {
  const c = this;
  if (c.vars) {
    if (!c.colorSchemes?.[a] || typeof c.getColorSchemeSelector != "function")
      return {};
    let o = c.getColorSchemeSelector(a);
    return o === "&" ? i : ((o.includes("data-") || o.includes(".")) && (o = `*:where(${o.replace(/\s*&$/, "")}) &`), {
      [o]: i
    });
  }
  return c.palette.mode === a ? i : {};
}
function xf(a = {}, ...i) {
  const {
    breakpoints: c = {},
    palette: o = {},
    spacing: f,
    shape: d = {},
    ...m
  } = a, y = Av(c), b = zm(f);
  let g = De({
    breakpoints: y,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...o
    },
    spacing: b,
    shape: {
      ..._v,
      ...d
    }
  }, m);
  return g = Rv(g), g.applyStyles = y1, g = i.reduce((_, x) => De(_, x), g), g.unstable_sxConfig = {
    ...ju,
    ...m?.unstable_sxConfig
  }, g.unstable_sx = function(x) {
    return Aa({
      sx: x,
      theme: this
    });
  }, g;
}
function g1(a) {
  return Object.keys(a).length === 0;
}
function v1(a = null) {
  const i = I.useContext(Rm);
  return !i || g1(i) ? a : i;
}
const b1 = xf();
function S1(a = b1) {
  return v1(a);
}
const T1 = (a) => {
  const i = {
    systemProps: {},
    otherProps: {}
  }, c = a?.theme?.unstable_sxConfig ?? ju;
  return Object.keys(a).forEach((o) => {
    c[o] ? i.systemProps[o] = a[o] : i.otherProps[o] = a[o];
  }), i;
};
function E1(a) {
  const {
    sx: i,
    ...c
  } = a, {
    systemProps: o,
    otherProps: f
  } = T1(c);
  let d;
  return Array.isArray(i) ? d = [o, ...i] : typeof i == "function" ? d = (...m) => {
    const y = i(...m);
    return ln(y) ? {
      ...o,
      ...y
    } : o;
  } : d = {
    ...o,
    ...i
  }, {
    ...f,
    sx: d
  };
}
const j0 = (a) => a, x1 = () => {
  let a = j0;
  return {
    configure(i) {
      a = i;
    },
    generate(i) {
      return a(i);
    },
    reset() {
      a = j0;
    }
  };
}, A1 = x1();
function Nm(a) {
  var i, c, o = "";
  if (typeof a == "string" || typeof a == "number") o += a;
  else if (typeof a == "object") if (Array.isArray(a)) {
    var f = a.length;
    for (i = 0; i < f; i++) a[i] && (c = Nm(a[i])) && (o && (o += " "), o += c);
  } else for (c in a) a[c] && (o && (o += " "), o += c);
  return o;
}
function ke() {
  for (var a, i, c = 0, o = "", f = arguments.length; c < f; c++) (a = arguments[c]) && (i = Nm(a)) && (o && (o += " "), o += i);
  return o;
}
const C1 = {
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
function Pn(a, i, c = "Mui") {
  const o = C1[i];
  return o ? `${c}-${o}` : `${A1.generate(a)}-${i}`;
}
function Al(a, i, c = "Mui") {
  const o = {};
  return i.forEach((f) => {
    o[f] = Pn(a, f, c);
  }), o;
}
function Um(a) {
  const {
    variants: i,
    ...c
  } = a, o = {
    variants: i,
    style: Tl(c),
    isProcessed: !0
  };
  return o.style === c || i && i.forEach((f) => {
    typeof f.style != "function" && (f.style = Tl(f.style));
  }), o;
}
const O1 = xf();
function Vo(a) {
  return a !== "ownerState" && a !== "theme" && a !== "sx" && a !== "as";
}
function Sl(a, i) {
  return i && a && typeof a == "object" && a.styles && !a.styles.startsWith("@layer") && (a.styles = `@layer ${i}{${String(a.styles)}}`), a;
}
function R1(a) {
  return a ? (i, c) => c[a] : null;
}
function _1(a, i, c) {
  a.theme = z1(a.theme) ? c : a.theme[i] || a.theme;
}
function or(a, i, c) {
  const o = typeof i == "function" ? i(a) : i;
  if (Array.isArray(o))
    return o.flatMap((f) => or(a, f, c));
  if (Array.isArray(o?.variants)) {
    let f;
    if (o.isProcessed)
      f = c ? Sl(o.style, c) : o.style;
    else {
      const {
        variants: d,
        ...m
      } = o;
      f = c ? Sl(Tl(m), c) : m;
    }
    return Bm(a, o.variants, [f], c);
  }
  return o?.isProcessed ? c ? Sl(Tl(o.style), c) : o.style : c ? Sl(Tl(o), c) : o;
}
function Bm(a, i, c = [], o = void 0) {
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
      for (const y in m.props)
        if (a[y] !== m.props[y] && a.ownerState?.[y] !== m.props[y])
          continue t;
    typeof m.style == "function" ? (f ??= {
      ...a,
      ...a.ownerState,
      ownerState: a.ownerState
    }, c.push(o ? Sl(Tl(m.style(f)), o) : m.style(f))) : c.push(o ? Sl(Tl(m.style), o) : m.style);
  }
  return c;
}
function M1(a = {}) {
  const {
    themeId: i,
    defaultTheme: c = O1,
    rootShouldForwardProp: o = Vo,
    slotShouldForwardProp: f = Vo
  } = a;
  function d(y) {
    _1(y, i, c);
  }
  return (y, b = {}) => {
    Sv(y, (w) => w.filter((Z) => Z !== Aa));
    const {
      name: g,
      slot: _,
      skipVariantsResolver: x,
      skipSx: N,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: j = R1(U1(_)),
      ...z
    } = b, O = g && g.startsWith("Mui") || _ ? "components" : "custom", k = x !== void 0 ? x : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      _ && _ !== "Root" && _ !== "root" || !1
    ), K = N || !1;
    let P = Vo;
    _ === "Root" || _ === "root" ? P = o : _ ? P = f : N1(y) && (P = void 0);
    const J = bv(y, {
      shouldForwardProp: P,
      label: D1(),
      ...z
    }), X = (w) => {
      if (w.__emotion_real === w)
        return w;
      if (typeof w == "function")
        return function(ot) {
          return or(ot, w, ot.theme.modularCssLayers ? O : void 0);
        };
      if (ln(w)) {
        const Z = Um(w);
        return function(at) {
          return Z.variants ? or(at, Z, at.theme.modularCssLayers ? O : void 0) : at.theme.modularCssLayers ? Sl(Z.style, O) : Z.style;
        };
      }
      return w;
    }, et = (...w) => {
      const Z = [], ot = w.map(X), at = [];
      if (Z.push(d), g && j && at.push(function($) {
        const W = $.theme.components?.[g]?.styleOverrides;
        if (!W)
          return null;
        const D = {};
        for (const G in W)
          D[G] = or($, W[G], $.theme.modularCssLayers ? "theme" : void 0);
        return j($, D);
      }), g && !k && at.push(function($) {
        const W = $.theme?.components?.[g]?.variants;
        return W ? Bm($, W, [], $.theme.modularCssLayers ? "theme" : void 0) : null;
      }), K || at.push(Aa), Array.isArray(ot[0])) {
        const p = ot.shift(), $ = new Array(Z.length).fill(""), L = new Array(at.length).fill("");
        let W;
        W = [...$, ...p, ...L], W.raw = [...$, ...p.raw, ...L], Z.unshift(W);
      }
      const st = [...Z, ...ot, ...at], dt = J(...st);
      return y.muiName && (dt.muiName = y.muiName), dt;
    };
    return J.withConfig && (et.withConfig = J.withConfig), et;
  };
}
function D1(a, i) {
  return void 0;
}
function z1(a) {
  for (const i in a)
    return !1;
  return !0;
}
function N1(a) {
  return typeof a == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  a.charCodeAt(0) > 96;
}
function U1(a) {
  return a && a.charAt(0).toLowerCase() + a.slice(1);
}
function uf(a, i, c = !1) {
  const o = {
    ...i
  };
  for (const f in a)
    if (Object.prototype.hasOwnProperty.call(a, f)) {
      const d = f;
      if (d === "components" || d === "slots")
        o[d] = {
          ...a[d],
          ...o[d]
        };
      else if (d === "componentsProps" || d === "slotProps") {
        const m = a[d], y = i[d];
        if (!y)
          o[d] = m || {};
        else if (!m)
          o[d] = y;
        else {
          o[d] = {
            ...y
          };
          for (const b in m)
            if (Object.prototype.hasOwnProperty.call(m, b)) {
              const g = b;
              o[d][g] = uf(m[g], y[g], c);
            }
        }
      } else d === "className" && c && i.className ? o.className = ke(a?.className, i?.className) : d === "style" && c && i.style ? o.style = {
        ...a?.style,
        ...i?.style
      } : o[d] === void 0 && (o[d] = a[d]);
    }
  return o;
}
const rf = typeof window < "u" ? I.useLayoutEffect : I.useEffect;
function B1(a, i = Number.MIN_SAFE_INTEGER, c = Number.MAX_SAFE_INTEGER) {
  return Math.max(i, Math.min(a, c));
}
function Af(a, i = 0, c = 1) {
  return B1(a, i, c);
}
function w1(a) {
  a = a.slice(1);
  const i = new RegExp(`.{1,${a.length >= 6 ? 2 : 1}}`, "g");
  let c = a.match(i);
  return c && c[0].length === 1 && (c = c.map((o) => o + o)), c ? `rgb${c.length === 4 ? "a" : ""}(${c.map((o, f) => f < 3 ? parseInt(o, 16) : Math.round(parseInt(o, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Fn(a) {
  if (a.type)
    return a;
  if (a.charAt(0) === "#")
    return Fn(w1(a));
  const i = a.indexOf("("), c = a.substring(0, i);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(c))
    throw new Error(El(9, a));
  let o = a.substring(i + 1, a.length - 1), f;
  if (c === "color") {
    if (o = o.split(" "), f = o.shift(), o.length === 4 && o[3].charAt(0) === "/" && (o[3] = o[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(f))
      throw new Error(El(10, f));
  } else
    o = o.split(",");
  return o = o.map((d) => parseFloat(d)), {
    type: c,
    values: o,
    colorSpace: f
  };
}
const H1 = (a) => {
  const i = Fn(a);
  return i.values.slice(0, 3).map((c, o) => i.type.includes("hsl") && o !== 0 ? `${c}%` : c).join(" ");
}, Ru = (a, i) => {
  try {
    return H1(a);
  } catch {
    return a;
  }
};
function Ar(a) {
  const {
    type: i,
    colorSpace: c
  } = a;
  let {
    values: o
  } = a;
  return i.includes("rgb") ? o = o.map((f, d) => d < 3 ? parseInt(f, 10) : f) : i.includes("hsl") && (o[1] = `${o[1]}%`, o[2] = `${o[2]}%`), i.includes("color") ? o = `${c} ${o.join(" ")}` : o = `${o.join(", ")}`, `${i}(${o})`;
}
function wm(a) {
  a = Fn(a);
  const {
    values: i
  } = a, c = i[0], o = i[1] / 100, f = i[2] / 100, d = o * Math.min(f, 1 - f), m = (g, _ = (g + c / 30) % 12) => f - d * Math.max(Math.min(_ - 3, 9 - _, 1), -1);
  let y = "rgb";
  const b = [Math.round(m(0) * 255), Math.round(m(8) * 255), Math.round(m(4) * 255)];
  return a.type === "hsla" && (y += "a", b.push(i[3])), Ar({
    type: y,
    values: b
  });
}
function cf(a) {
  a = Fn(a);
  let i = a.type === "hsl" || a.type === "hsla" ? Fn(wm(a)).values : a.values;
  return i = i.map((c) => (a.type !== "color" && (c /= 255), c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4)), Number((0.2126 * i[0] + 0.7152 * i[1] + 0.0722 * i[2]).toFixed(3));
}
function q1(a, i) {
  const c = cf(a), o = cf(i);
  return (Math.max(c, o) + 0.05) / (Math.min(c, o) + 0.05);
}
function dr(a, i) {
  return a = Fn(a), i = Af(i), (a.type === "rgb" || a.type === "hsl") && (a.type += "a"), a.type === "color" ? a.values[3] = `/${i}` : a.values[3] = i, Ar(a);
}
function gl(a, i, c) {
  try {
    return dr(a, i);
  } catch {
    return a;
  }
}
function Cr(a, i) {
  if (a = Fn(a), i = Af(i), a.type.includes("hsl"))
    a.values[2] *= 1 - i;
  else if (a.type.includes("rgb") || a.type.includes("color"))
    for (let c = 0; c < 3; c += 1)
      a.values[c] *= 1 - i;
  return Ar(a);
}
function Rt(a, i, c) {
  try {
    return Cr(a, i);
  } catch {
    return a;
  }
}
function Or(a, i) {
  if (a = Fn(a), i = Af(i), a.type.includes("hsl"))
    a.values[2] += (100 - a.values[2]) * i;
  else if (a.type.includes("rgb"))
    for (let c = 0; c < 3; c += 1)
      a.values[c] += (255 - a.values[c]) * i;
  else if (a.type.includes("color"))
    for (let c = 0; c < 3; c += 1)
      a.values[c] += (1 - a.values[c]) * i;
  return Ar(a);
}
function _t(a, i, c) {
  try {
    return Or(a, i);
  } catch {
    return a;
  }
}
function Y1(a, i = 0.15) {
  return cf(a) > 0.5 ? Cr(a, i) : Or(a, i);
}
function lr(a, i, c) {
  try {
    return Y1(a, i);
  } catch {
    return a;
  }
}
const j1 = /* @__PURE__ */ I.createContext(void 0);
function G1(a) {
  const {
    theme: i,
    name: c,
    props: o
  } = a;
  if (!i || !i.components || !i.components[c])
    return o;
  const f = i.components[c];
  return f.defaultProps ? uf(f.defaultProps, o, i.components.mergeClassNameAndStyle) : !f.styleOverrides && !f.variants ? uf(f, o, i.components.mergeClassNameAndStyle) : o;
}
function k1({
  props: a,
  name: i
}) {
  const c = I.useContext(j1);
  return G1({
    props: a,
    name: i,
    theme: {
      components: c
    }
  });
}
let G0 = 0;
function L1(a) {
  const [i, c] = I.useState(a), o = a || i;
  return I.useEffect(() => {
    i == null && (G0 += 1, c(`mui-${G0}`));
  }, [i]), o;
}
const X1 = {
  ...tf
}, k0 = X1.useId;
function Q1(a) {
  if (k0 !== void 0) {
    const i = k0();
    return a ?? i;
  }
  return L1(a);
}
const L0 = {
  theme: void 0
};
function V1(a) {
  let i, c;
  return function(f) {
    let d = i;
    return (d === void 0 || f.theme !== c) && (L0.theme = f.theme, d = Um(a(L0)), i = d, c = f.theme), d;
  };
}
function Z1(a = "") {
  function i(...o) {
    if (!o.length)
      return "";
    const f = o[0];
    return typeof f == "string" && !f.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${a ? `${a}-` : ""}${f}${i(...o.slice(1))})` : `, ${f}`;
  }
  return (o, ...f) => `var(--${a ? `${a}-` : ""}${o}${i(...f)})`;
}
const X0 = (a, i, c, o = []) => {
  let f = a;
  i.forEach((d, m) => {
    m === i.length - 1 ? Array.isArray(f) ? f[Number(d)] = c : f && typeof f == "object" && (f[d] = c) : f && typeof f == "object" && (f[d] || (f[d] = o.includes(d) ? [] : {}), f = f[d]);
  });
}, K1 = (a, i, c) => {
  function o(f, d = [], m = []) {
    Object.entries(f).forEach(([y, b]) => {
      (!c || c && !c([...d, y])) && b != null && (typeof b == "object" && Object.keys(b).length > 0 ? o(b, [...d, y], Array.isArray(b) ? [...m, y] : m) : i([...d, y], b, m));
    });
  }
  o(a);
}, $1 = (a, i) => typeof i == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((o) => a.includes(o)) || a[a.length - 1].toLowerCase().includes("opacity") ? i : `${i}px` : i;
function Zo(a, i) {
  const {
    prefix: c,
    shouldSkipGeneratingVar: o
  } = i || {}, f = {}, d = {}, m = {};
  return K1(
    a,
    (y, b, g) => {
      if ((typeof b == "string" || typeof b == "number") && (!o || !o(y, b))) {
        const _ = `--${c ? `${c}-` : ""}${y.join("-")}`, x = $1(y, b);
        Object.assign(f, {
          [_]: x
        }), X0(d, y, `var(${_})`, g), X0(m, y, `var(${_}, ${x})`, g);
      }
    },
    (y) => y[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: f,
    vars: d,
    varsWithDefaults: m
  };
}
function J1(a, i = {}) {
  const {
    getSelector: c = K,
    disableCssColorScheme: o,
    colorSchemeSelector: f,
    enableContrastVars: d
  } = i, {
    colorSchemes: m = {},
    components: y,
    defaultColorScheme: b = "light",
    ...g
  } = a, {
    vars: _,
    css: x,
    varsWithDefaults: N
  } = Zo(g, i);
  let j = N;
  const z = {}, {
    [b]: O,
    ...k
  } = m;
  if (Object.entries(k || {}).forEach(([X, et]) => {
    const {
      vars: w,
      css: Z,
      varsWithDefaults: ot
    } = Zo(et, i);
    j = De(j, ot), z[X] = {
      css: Z,
      vars: w
    };
  }), O) {
    const {
      css: X,
      vars: et,
      varsWithDefaults: w
    } = Zo(O, i);
    j = De(j, w), z[b] = {
      css: X,
      vars: et
    };
  }
  function K(X, et) {
    let w = f;
    if (f === "class" && (w = ".%s"), f === "data" && (w = "[data-%s]"), f?.startsWith("data-") && !f.includes("%s") && (w = `[${f}="%s"]`), X) {
      if (w === "media")
        return a.defaultColorScheme === X ? ":root" : {
          [`@media (prefers-color-scheme: ${m[X]?.palette?.mode || X})`]: {
            ":root": et
          }
        };
      if (w)
        return a.defaultColorScheme === X ? `:root, ${w.replace("%s", String(X))}` : w.replace("%s", String(X));
    }
    return ":root";
  }
  return {
    vars: j,
    generateThemeVars: () => {
      let X = {
        ..._
      };
      return Object.entries(z).forEach(([, {
        vars: et
      }]) => {
        X = De(X, et);
      }), X;
    },
    generateStyleSheets: () => {
      const X = [], et = a.defaultColorScheme || "light";
      function w(at, st) {
        Object.keys(st).length && X.push(typeof at == "string" ? {
          [at]: {
            ...st
          }
        } : at);
      }
      w(c(void 0, {
        ...x
      }), x);
      const {
        [et]: Z,
        ...ot
      } = z;
      if (Z) {
        const {
          css: at
        } = Z, st = m[et]?.palette?.mode, dt = !o && st ? {
          colorScheme: st,
          ...at
        } : {
          ...at
        };
        w(c(et, {
          ...dt
        }), dt);
      }
      return Object.entries(ot).forEach(([at, {
        css: st
      }]) => {
        const dt = m[at]?.palette?.mode, p = !o && dt ? {
          colorScheme: dt,
          ...st
        } : {
          ...st
        };
        w(c(at, {
          ...p
        }), p);
      }), d && X.push({
        ":root": {
          // use double underscore to indicate that these are private variables
          "--__l-threshold": "0.7",
          "--__l": "clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)",
          "--__a": "clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)"
          // 0.87 is the default alpha value for black text.
        }
      }), X;
    }
  };
}
function W1(a) {
  return function(c) {
    return a === "media" ? `@media (prefers-color-scheme: ${c})` : a ? a.startsWith("data-") && !a.includes("%s") ? `[${a}="${c}"] &` : a === "class" ? `.${c} &` : a === "data" ? `[data-${c}] &` : `${a.replace("%s", c)} &` : "&";
  };
}
function Cl(a, i, c = void 0) {
  const o = {};
  for (const f in a) {
    const d = a[f];
    let m = "", y = !0;
    for (let b = 0; b < d.length; b += 1) {
      const g = d[b];
      g && (m += (y === !0 ? "" : " ") + i(g), y = !1, c && c[g] && (m += " " + c[g]));
    }
    o[f] = m;
  }
  return o;
}
function Hm() {
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
const qm = Hm();
function Ym() {
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
const of = Ym();
function Q0(a, i, c, o) {
  const f = o.light || o, d = o.dark || o * 1.5;
  a[i] || (a.hasOwnProperty(c) ? a[i] = a[c] : i === "light" ? a.light = Or(a.main, f) : i === "dark" && (a.dark = Cr(a.main, d)));
}
function V0(a, i, c, o, f) {
  const d = f.light || f, m = f.dark || f * 1.5;
  i[c] || (i.hasOwnProperty(o) ? i[c] = i[o] : c === "light" ? i.light = `color-mix(in ${a}, ${i.main}, #fff ${(d * 100).toFixed(0)}%)` : c === "dark" && (i.dark = `color-mix(in ${a}, ${i.main}, #000 ${(m * 100).toFixed(0)}%)`));
}
function F1(a = "light") {
  return a === "dark" ? {
    main: pa[200],
    light: pa[50],
    dark: pa[400]
  } : {
    main: pa[700],
    light: pa[400],
    dark: pa[800]
  };
}
function P1(a = "light") {
  return a === "dark" ? {
    main: ma[200],
    light: ma[50],
    dark: ma[400]
  } : {
    main: ma[500],
    light: ma[300],
    dark: ma[700]
  };
}
function I1(a = "light") {
  return a === "dark" ? {
    main: ha[500],
    light: ha[300],
    dark: ha[700]
  } : {
    main: ha[700],
    light: ha[400],
    dark: ha[800]
  };
}
function tb(a = "light") {
  return a === "dark" ? {
    main: ya[400],
    light: ya[300],
    dark: ya[700]
  } : {
    main: ya[700],
    light: ya[500],
    dark: ya[900]
  };
}
function eb(a = "light") {
  return a === "dark" ? {
    main: ga[400],
    light: ga[300],
    dark: ga[700]
  } : {
    main: ga[800],
    light: ga[500],
    dark: ga[900]
  };
}
function nb(a = "light") {
  return a === "dark" ? {
    main: Au[400],
    light: Au[300],
    dark: Au[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Au[500],
    dark: Au[900]
  };
}
function lb(a) {
  return `oklch(from ${a} var(--__l) 0 h / var(--__a))`;
}
function Cf(a) {
  const {
    mode: i = "light",
    contrastThreshold: c = 3,
    tonalOffset: o = 0.2,
    colorSpace: f,
    ...d
  } = a, m = a.primary || F1(i), y = a.secondary || P1(i), b = a.error || I1(i), g = a.info || tb(i), _ = a.success || eb(i), x = a.warning || nb(i);
  function N(k) {
    return f ? lb(k) : q1(k, of.text.primary) >= c ? of.text.primary : qm.text.primary;
  }
  const j = ({
    color: k,
    name: K,
    mainShade: P = 500,
    lightShade: J = 300,
    darkShade: X = 700
  }) => {
    if (k = {
      ...k
    }, !k.main && k[P] && (k.main = k[P]), !k.hasOwnProperty("main"))
      throw new Error(El(11, K ? ` (${K})` : "", P));
    if (typeof k.main != "string")
      throw new Error(El(12, K ? ` (${K})` : "", JSON.stringify(k.main)));
    return f ? (V0(f, k, "light", J, o), V0(f, k, "dark", X, o)) : (Q0(k, "light", J, o), Q0(k, "dark", X, o)), k.contrastText || (k.contrastText = N(k.main)), k;
  };
  let z;
  return i === "light" ? z = Hm() : i === "dark" && (z = Ym()), De({
    // A collection of common colors.
    common: {
      ...Nu
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: i,
    // The colors used to represent primary interface elements for a user.
    primary: j({
      color: m,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: j({
      color: y,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: j({
      color: b,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: j({
      color: x,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: j({
      color: g,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: j({
      color: _,
      name: "success"
    }),
    // The grey colors.
    grey: Ag,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: c,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: N,
    // Generate a rich color object.
    augmentColor: j,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: o,
    // The light and dark mode object.
    ...z
  }, d);
}
function ab(a) {
  const i = {};
  return Object.entries(a).forEach((o) => {
    const [f, d] = o;
    typeof d == "object" && (i[f] = `${d.fontStyle ? `${d.fontStyle} ` : ""}${d.fontVariant ? `${d.fontVariant} ` : ""}${d.fontWeight ? `${d.fontWeight} ` : ""}${d.fontStretch ? `${d.fontStretch} ` : ""}${d.fontSize || ""}${d.lineHeight ? `/${d.lineHeight} ` : ""}${d.fontFamily || ""}`);
  }), i;
}
function ub(a, i) {
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
function ib(a) {
  return Math.round(a * 1e5) / 1e5;
}
const Z0 = {
  textTransform: "uppercase"
}, K0 = '"Roboto", "Helvetica", "Arial", sans-serif';
function rb(a, i) {
  const {
    fontFamily: c = K0,
    // The default font size of the Material Specification.
    fontSize: o = 14,
    // px
    fontWeightLight: f = 300,
    fontWeightRegular: d = 400,
    fontWeightMedium: m = 500,
    fontWeightBold: y = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: b = 16,
    // Apply the CSS properties to all the variants.
    allVariants: g,
    pxToRem: _,
    ...x
  } = typeof i == "function" ? i(a) : i, N = o / 14, j = _ || ((k) => `${k / b * N}rem`), z = (k, K, P, J, X) => ({
    fontFamily: c,
    fontWeight: k,
    fontSize: j(K),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: P,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...c === K0 ? {
      letterSpacing: `${ib(J / K)}em`
    } : {},
    ...X,
    ...g
  }), O = {
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
    button: z(m, 14, 1.75, 0.4, Z0),
    caption: z(d, 12, 1.66, 0.4),
    overline: z(d, 12, 2.66, 1, Z0),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return De({
    htmlFontSize: b,
    pxToRem: j,
    fontFamily: c,
    fontSize: o,
    fontWeightLight: f,
    fontWeightRegular: d,
    fontWeightMedium: m,
    fontWeightBold: y,
    ...O
  }, x, {
    clone: !1
    // No need to clone deep
  });
}
const cb = 0.2, ob = 0.14, fb = 0.12;
function Yt(...a) {
  return [`${a[0]}px ${a[1]}px ${a[2]}px ${a[3]}px rgba(0,0,0,${cb})`, `${a[4]}px ${a[5]}px ${a[6]}px ${a[7]}px rgba(0,0,0,${ob})`, `${a[8]}px ${a[9]}px ${a[10]}px ${a[11]}px rgba(0,0,0,${fb})`].join(",");
}
const sb = ["none", Yt(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Yt(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Yt(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Yt(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Yt(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Yt(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Yt(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Yt(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Yt(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Yt(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Yt(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Yt(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Yt(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Yt(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Yt(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Yt(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Yt(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Yt(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Yt(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Yt(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Yt(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Yt(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Yt(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Yt(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], db = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, hb = {
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
function $0(a) {
  return `${Math.round(a)}ms`;
}
function mb(a) {
  if (!a)
    return 0;
  const i = a / 36;
  return Math.min(Math.round((4 + 15 * i ** 0.25 + i / 5) * 10), 3e3);
}
function pb(a) {
  const i = {
    ...db,
    ...a.easing
  }, c = {
    ...hb,
    ...a.duration
  };
  return {
    getAutoHeightDuration: mb,
    create: (f = ["all"], d = {}) => {
      const {
        duration: m = c.standard,
        easing: y = i.easeInOut,
        delay: b = 0,
        ...g
      } = d;
      return (Array.isArray(f) ? f : [f]).map((_) => `${_} ${typeof m == "string" ? m : $0(m)} ${y} ${typeof b == "string" ? b : $0(b)}`).join(",");
    },
    ...a,
    easing: i,
    duration: c
  };
}
const yb = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function gb(a) {
  return ln(a) || typeof a > "u" || typeof a == "string" || typeof a == "boolean" || typeof a == "number" || Array.isArray(a);
}
function jm(a = {}) {
  const i = {
    ...a
  };
  function c(o) {
    const f = Object.entries(o);
    for (let d = 0; d < f.length; d++) {
      const [m, y] = f[d];
      !gb(y) || m.startsWith("unstable_") ? delete o[m] : ln(y) && (o[m] = {
        ...y
      }, c(o[m]));
    }
  }
  return c(i), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(i, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function J0(a) {
  return typeof a == "number" ? `${(a * 100).toFixed(0)}%` : `calc((${a}) * 100%)`;
}
const vb = (a) => {
  if (!Number.isNaN(+a))
    return +a;
  const i = a.match(/\d*\.?\d+/g);
  if (!i)
    return 0;
  let c = 0;
  for (let o = 0; o < i.length; o += 1)
    c += +i[o];
  return c;
};
function bb(a) {
  Object.assign(a, {
    alpha(i, c) {
      const o = this || a;
      return o.colorSpace ? `oklch(from ${i} l c h / ${typeof c == "string" ? `calc(${c})` : c})` : o.vars ? `rgba(${i.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof c == "string" ? `calc(${c})` : c})` : dr(i, vb(c));
    },
    lighten(i, c) {
      const o = this || a;
      return o.colorSpace ? `color-mix(in ${o.colorSpace}, ${i}, #fff ${J0(c)})` : Or(i, c);
    },
    darken(i, c) {
      const o = this || a;
      return o.colorSpace ? `color-mix(in ${o.colorSpace}, ${i}, #000 ${J0(c)})` : Cr(i, c);
    }
  });
}
function ff(a = {}, ...i) {
  const {
    breakpoints: c,
    mixins: o = {},
    spacing: f,
    palette: d = {},
    transitions: m = {},
    typography: y = {},
    shape: b,
    colorSpace: g,
    ..._
  } = a;
  if (a.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  a.generateThemeVars === void 0)
    throw new Error(El(20));
  const x = Cf({
    ...d,
    colorSpace: g
  }), N = xf(a);
  let j = De(N, {
    mixins: ub(N.breakpoints, o),
    palette: x,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: sb.slice(),
    typography: rb(x, y),
    transitions: pb(m),
    zIndex: {
      ...yb
    }
  });
  return j = De(j, _), j = i.reduce((z, O) => De(z, O), j), j.unstable_sxConfig = {
    ...ju,
    ..._?.unstable_sxConfig
  }, j.unstable_sx = function(O) {
    return Aa({
      sx: O,
      theme: this
    });
  }, j.toRuntimeSource = jm, bb(j), j;
}
function sf(a) {
  let i;
  return a < 1 ? i = 5.11916 * a ** 2 : i = 4.5 * Math.log(a + 1) + 2, Math.round(i * 10) / 1e3;
}
const Sb = [...Array(25)].map((a, i) => {
  if (i === 0)
    return "none";
  const c = sf(i);
  return `linear-gradient(rgba(255 255 255 / ${c}), rgba(255 255 255 / ${c}))`;
});
function Gm(a) {
  return {
    inputPlaceholder: a === "dark" ? 0.5 : 0.42,
    inputUnderline: a === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: a === "dark" ? 0.2 : 0.12,
    switchTrack: a === "dark" ? 0.3 : 0.38
  };
}
function km(a) {
  return a === "dark" ? Sb : [];
}
function Tb(a) {
  const {
    palette: i = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: c,
    overlays: o,
    colorSpace: f,
    ...d
  } = a, m = Cf({
    ...i,
    colorSpace: f
  });
  return {
    palette: m,
    opacity: {
      ...Gm(m.mode),
      ...c
    },
    overlays: o || km(m.mode),
    ...d
  };
}
function Eb(a) {
  return !!a[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!a[0].match(/sxConfig$/) || // ends with sxConfig
  a[0] === "palette" && !!a[1]?.match(/(mode|contrastThreshold|tonalOffset)/);
}
const xb = (a) => [...[...Array(25)].map((i, c) => `--${a ? `${a}-` : ""}overlays-${c}`), `--${a ? `${a}-` : ""}palette-AppBar-darkBg`, `--${a ? `${a}-` : ""}palette-AppBar-darkColor`], Ab = (a) => (i, c) => {
  const o = a.rootSelector || ":root", f = a.colorSchemeSelector;
  let d = f;
  if (f === "class" && (d = ".%s"), f === "data" && (d = "[data-%s]"), f?.startsWith("data-") && !f.includes("%s") && (d = `[${f}="%s"]`), a.defaultColorScheme === i) {
    if (i === "dark") {
      const m = {};
      return xb(a.cssVarPrefix).forEach((y) => {
        m[y] = c[y], delete c[y];
      }), d === "media" ? {
        [o]: c,
        "@media (prefers-color-scheme: dark)": {
          [o]: m
        }
      } : d ? {
        [d.replace("%s", i)]: m,
        [`${o}, ${d.replace("%s", i)}`]: c
      } : {
        [o]: {
          ...c,
          ...m
        }
      };
    }
    if (d && d !== "media")
      return `${o}, ${d.replace("%s", String(i))}`;
  } else if (i) {
    if (d === "media")
      return {
        [`@media (prefers-color-scheme: ${String(i)})`]: {
          [o]: c
        }
      };
    if (d)
      return d.replace("%s", String(i));
  }
  return o;
};
function Cb(a, i) {
  i.forEach((c) => {
    a[c] || (a[c] = {});
  });
}
function U(a, i, c) {
  !a[i] && c && (a[i] = c);
}
function _u(a) {
  return typeof a != "string" || !a.startsWith("hsl") ? a : wm(a);
}
function xn(a, i) {
  `${i}Channel` in a || (a[`${i}Channel`] = Ru(_u(a[i])));
}
function Ob(a) {
  return typeof a == "number" ? `${a}px` : typeof a == "string" || typeof a == "function" || Array.isArray(a) ? a : "8px";
}
const tn = (a) => {
  try {
    return a();
  } catch {
  }
}, Rb = (a = "mui") => Z1(a);
function Ko(a, i, c, o, f) {
  if (!c)
    return;
  c = c === !0 ? {} : c;
  const d = f === "dark" ? "dark" : "light";
  if (!o) {
    i[f] = Tb({
      ...c,
      palette: {
        mode: d,
        ...c?.palette
      },
      colorSpace: a
    });
    return;
  }
  const {
    palette: m,
    ...y
  } = ff({
    ...o,
    palette: {
      mode: d,
      ...c?.palette
    },
    colorSpace: a
  });
  return i[f] = {
    ...c,
    palette: m,
    opacity: {
      ...Gm(d),
      ...c?.opacity
    },
    overlays: c?.overlays || km(d)
  }, y;
}
function _b(a = {}, ...i) {
  const {
    colorSchemes: c = {
      light: !0
    },
    defaultColorScheme: o,
    disableCssColorScheme: f = !1,
    cssVarPrefix: d = "mui",
    nativeColor: m = !1,
    shouldSkipGeneratingVar: y = Eb,
    colorSchemeSelector: b = c.light && c.dark ? "media" : void 0,
    rootSelector: g = ":root",
    ..._
  } = a, x = Object.keys(c)[0], N = o || (c.light && x !== "light" ? "light" : x), j = Rb(d), {
    [N]: z,
    light: O,
    dark: k,
    ...K
  } = c, P = {
    ...K
  };
  let J = z;
  if ((N === "dark" && !("dark" in c) || N === "light" && !("light" in c)) && (J = !0), !J)
    throw new Error(El(21, N));
  let X;
  m && (X = "oklch");
  const et = Ko(X, P, J, _, N);
  O && !P.light && Ko(X, P, O, void 0, "light"), k && !P.dark && Ko(X, P, k, void 0, "dark");
  let w = {
    defaultColorScheme: N,
    ...et,
    cssVarPrefix: d,
    colorSchemeSelector: b,
    rootSelector: g,
    getCssVar: j,
    colorSchemes: P,
    font: {
      ...ab(et.typography),
      ...et.font
    },
    spacing: Ob(_.spacing)
  };
  Object.keys(w.colorSchemes).forEach((dt) => {
    const p = w.colorSchemes[dt].palette, $ = (W) => {
      const D = W.split("-"), G = D[1], Q = D[2];
      return j(W, p[G][Q]);
    };
    p.mode === "light" && (U(p.common, "background", "#fff"), U(p.common, "onBackground", "#000")), p.mode === "dark" && (U(p.common, "background", "#000"), U(p.common, "onBackground", "#fff"));
    function L(W, D, G) {
      if (X) {
        let Q;
        return W === gl && (Q = `transparent ${((1 - G) * 100).toFixed(0)}%`), W === Rt && (Q = `#000 ${(G * 100).toFixed(0)}%`), W === _t && (Q = `#fff ${(G * 100).toFixed(0)}%`), `color-mix(in ${X}, ${D}, ${Q})`;
      }
      return W(D, G);
    }
    if (Cb(p, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), p.mode === "light") {
      U(p.Alert, "errorColor", L(Rt, p.error.light, 0.6)), U(p.Alert, "infoColor", L(Rt, p.info.light, 0.6)), U(p.Alert, "successColor", L(Rt, p.success.light, 0.6)), U(p.Alert, "warningColor", L(Rt, p.warning.light, 0.6)), U(p.Alert, "errorFilledBg", $("palette-error-main")), U(p.Alert, "infoFilledBg", $("palette-info-main")), U(p.Alert, "successFilledBg", $("palette-success-main")), U(p.Alert, "warningFilledBg", $("palette-warning-main")), U(p.Alert, "errorFilledColor", tn(() => p.getContrastText(p.error.main))), U(p.Alert, "infoFilledColor", tn(() => p.getContrastText(p.info.main))), U(p.Alert, "successFilledColor", tn(() => p.getContrastText(p.success.main))), U(p.Alert, "warningFilledColor", tn(() => p.getContrastText(p.warning.main))), U(p.Alert, "errorStandardBg", L(_t, p.error.light, 0.9)), U(p.Alert, "infoStandardBg", L(_t, p.info.light, 0.9)), U(p.Alert, "successStandardBg", L(_t, p.success.light, 0.9)), U(p.Alert, "warningStandardBg", L(_t, p.warning.light, 0.9)), U(p.Alert, "errorIconColor", $("palette-error-main")), U(p.Alert, "infoIconColor", $("palette-info-main")), U(p.Alert, "successIconColor", $("palette-success-main")), U(p.Alert, "warningIconColor", $("palette-warning-main")), U(p.AppBar, "defaultBg", $("palette-grey-100")), U(p.Avatar, "defaultBg", $("palette-grey-400")), U(p.Button, "inheritContainedBg", $("palette-grey-300")), U(p.Button, "inheritContainedHoverBg", $("palette-grey-A100")), U(p.Chip, "defaultBorder", $("palette-grey-400")), U(p.Chip, "defaultAvatarColor", $("palette-grey-700")), U(p.Chip, "defaultIconColor", $("palette-grey-700")), U(p.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), U(p.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), U(p.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), U(p.LinearProgress, "primaryBg", L(_t, p.primary.main, 0.62)), U(p.LinearProgress, "secondaryBg", L(_t, p.secondary.main, 0.62)), U(p.LinearProgress, "errorBg", L(_t, p.error.main, 0.62)), U(p.LinearProgress, "infoBg", L(_t, p.info.main, 0.62)), U(p.LinearProgress, "successBg", L(_t, p.success.main, 0.62)), U(p.LinearProgress, "warningBg", L(_t, p.warning.main, 0.62)), U(p.Skeleton, "bg", X ? L(gl, p.text.primary, 0.11) : `rgba(${$("palette-text-primaryChannel")} / 0.11)`), U(p.Slider, "primaryTrack", L(_t, p.primary.main, 0.62)), U(p.Slider, "secondaryTrack", L(_t, p.secondary.main, 0.62)), U(p.Slider, "errorTrack", L(_t, p.error.main, 0.62)), U(p.Slider, "infoTrack", L(_t, p.info.main, 0.62)), U(p.Slider, "successTrack", L(_t, p.success.main, 0.62)), U(p.Slider, "warningTrack", L(_t, p.warning.main, 0.62));
      const W = X ? L(Rt, p.background.default, 0.6825) : lr(p.background.default, 0.8);
      U(p.SnackbarContent, "bg", W), U(p.SnackbarContent, "color", tn(() => X ? of.text.primary : p.getContrastText(W))), U(p.SpeedDialAction, "fabHoverBg", lr(p.background.paper, 0.15)), U(p.StepConnector, "border", $("palette-grey-400")), U(p.StepContent, "border", $("palette-grey-400")), U(p.Switch, "defaultColor", $("palette-common-white")), U(p.Switch, "defaultDisabledColor", $("palette-grey-100")), U(p.Switch, "primaryDisabledColor", L(_t, p.primary.main, 0.62)), U(p.Switch, "secondaryDisabledColor", L(_t, p.secondary.main, 0.62)), U(p.Switch, "errorDisabledColor", L(_t, p.error.main, 0.62)), U(p.Switch, "infoDisabledColor", L(_t, p.info.main, 0.62)), U(p.Switch, "successDisabledColor", L(_t, p.success.main, 0.62)), U(p.Switch, "warningDisabledColor", L(_t, p.warning.main, 0.62)), U(p.TableCell, "border", L(_t, L(gl, p.divider, 1), 0.88)), U(p.Tooltip, "bg", L(gl, p.grey[700], 0.92));
    }
    if (p.mode === "dark") {
      U(p.Alert, "errorColor", L(_t, p.error.light, 0.6)), U(p.Alert, "infoColor", L(_t, p.info.light, 0.6)), U(p.Alert, "successColor", L(_t, p.success.light, 0.6)), U(p.Alert, "warningColor", L(_t, p.warning.light, 0.6)), U(p.Alert, "errorFilledBg", $("palette-error-dark")), U(p.Alert, "infoFilledBg", $("palette-info-dark")), U(p.Alert, "successFilledBg", $("palette-success-dark")), U(p.Alert, "warningFilledBg", $("palette-warning-dark")), U(p.Alert, "errorFilledColor", tn(() => p.getContrastText(p.error.dark))), U(p.Alert, "infoFilledColor", tn(() => p.getContrastText(p.info.dark))), U(p.Alert, "successFilledColor", tn(() => p.getContrastText(p.success.dark))), U(p.Alert, "warningFilledColor", tn(() => p.getContrastText(p.warning.dark))), U(p.Alert, "errorStandardBg", L(Rt, p.error.light, 0.9)), U(p.Alert, "infoStandardBg", L(Rt, p.info.light, 0.9)), U(p.Alert, "successStandardBg", L(Rt, p.success.light, 0.9)), U(p.Alert, "warningStandardBg", L(Rt, p.warning.light, 0.9)), U(p.Alert, "errorIconColor", $("palette-error-main")), U(p.Alert, "infoIconColor", $("palette-info-main")), U(p.Alert, "successIconColor", $("palette-success-main")), U(p.Alert, "warningIconColor", $("palette-warning-main")), U(p.AppBar, "defaultBg", $("palette-grey-900")), U(p.AppBar, "darkBg", $("palette-background-paper")), U(p.AppBar, "darkColor", $("palette-text-primary")), U(p.Avatar, "defaultBg", $("palette-grey-600")), U(p.Button, "inheritContainedBg", $("palette-grey-800")), U(p.Button, "inheritContainedHoverBg", $("palette-grey-700")), U(p.Chip, "defaultBorder", $("palette-grey-700")), U(p.Chip, "defaultAvatarColor", $("palette-grey-300")), U(p.Chip, "defaultIconColor", $("palette-grey-300")), U(p.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), U(p.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), U(p.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), U(p.LinearProgress, "primaryBg", L(Rt, p.primary.main, 0.5)), U(p.LinearProgress, "secondaryBg", L(Rt, p.secondary.main, 0.5)), U(p.LinearProgress, "errorBg", L(Rt, p.error.main, 0.5)), U(p.LinearProgress, "infoBg", L(Rt, p.info.main, 0.5)), U(p.LinearProgress, "successBg", L(Rt, p.success.main, 0.5)), U(p.LinearProgress, "warningBg", L(Rt, p.warning.main, 0.5)), U(p.Skeleton, "bg", X ? L(gl, p.text.primary, 0.13) : `rgba(${$("palette-text-primaryChannel")} / 0.13)`), U(p.Slider, "primaryTrack", L(Rt, p.primary.main, 0.5)), U(p.Slider, "secondaryTrack", L(Rt, p.secondary.main, 0.5)), U(p.Slider, "errorTrack", L(Rt, p.error.main, 0.5)), U(p.Slider, "infoTrack", L(Rt, p.info.main, 0.5)), U(p.Slider, "successTrack", L(Rt, p.success.main, 0.5)), U(p.Slider, "warningTrack", L(Rt, p.warning.main, 0.5));
      const W = X ? L(_t, p.background.default, 0.985) : lr(p.background.default, 0.98);
      U(p.SnackbarContent, "bg", W), U(p.SnackbarContent, "color", tn(() => X ? qm.text.primary : p.getContrastText(W))), U(p.SpeedDialAction, "fabHoverBg", lr(p.background.paper, 0.15)), U(p.StepConnector, "border", $("palette-grey-600")), U(p.StepContent, "border", $("palette-grey-600")), U(p.Switch, "defaultColor", $("palette-grey-300")), U(p.Switch, "defaultDisabledColor", $("palette-grey-600")), U(p.Switch, "primaryDisabledColor", L(Rt, p.primary.main, 0.55)), U(p.Switch, "secondaryDisabledColor", L(Rt, p.secondary.main, 0.55)), U(p.Switch, "errorDisabledColor", L(Rt, p.error.main, 0.55)), U(p.Switch, "infoDisabledColor", L(Rt, p.info.main, 0.55)), U(p.Switch, "successDisabledColor", L(Rt, p.success.main, 0.55)), U(p.Switch, "warningDisabledColor", L(Rt, p.warning.main, 0.55)), U(p.TableCell, "border", L(Rt, L(gl, p.divider, 1), 0.68)), U(p.Tooltip, "bg", L(gl, p.grey[700], 0.92));
    }
    xn(p.background, "default"), xn(p.background, "paper"), xn(p.common, "background"), xn(p.common, "onBackground"), xn(p, "divider"), Object.keys(p).forEach((W) => {
      const D = p[W];
      W !== "tonalOffset" && D && typeof D == "object" && (D.main && U(p[W], "mainChannel", Ru(_u(D.main))), D.light && U(p[W], "lightChannel", Ru(_u(D.light))), D.dark && U(p[W], "darkChannel", Ru(_u(D.dark))), D.contrastText && U(p[W], "contrastTextChannel", Ru(_u(D.contrastText))), W === "text" && (xn(p[W], "primary"), xn(p[W], "secondary")), W === "action" && (D.active && xn(p[W], "active"), D.selected && xn(p[W], "selected")));
    });
  }), w = i.reduce((dt, p) => De(dt, p), w);
  const Z = {
    prefix: d,
    disableCssColorScheme: f,
    shouldSkipGeneratingVar: y,
    getSelector: Ab(w),
    enableContrastVars: m
  }, {
    vars: ot,
    generateThemeVars: at,
    generateStyleSheets: st
  } = J1(w, Z);
  return w.vars = ot, Object.entries(w.colorSchemes[w.defaultColorScheme]).forEach(([dt, p]) => {
    w[dt] = p;
  }), w.generateThemeVars = at, w.generateStyleSheets = st, w.generateSpacing = function() {
    return zm(_.spacing, Tf(this));
  }, w.getColorSchemeSelector = W1(b), w.spacing = w.generateSpacing(), w.shouldSkipGeneratingVar = y, w.unstable_sxConfig = {
    ...ju,
    ..._?.unstable_sxConfig
  }, w.unstable_sx = function(p) {
    return Aa({
      sx: p,
      theme: this
    });
  }, w.toRuntimeSource = jm, w;
}
function W0(a, i, c) {
  a.colorSchemes && c && (a.colorSchemes[i] = {
    ...c !== !0 && c,
    palette: Cf({
      ...c === !0 ? {} : c.palette,
      mode: i
    })
    // cast type to skip module augmentation test
  });
}
function Mb(a = {}, ...i) {
  const {
    palette: c,
    cssVariables: o = !1,
    colorSchemes: f = c ? void 0 : {
      light: !0
    },
    defaultColorScheme: d = c?.mode,
    ...m
  } = a, y = d || "light", b = f?.[y], g = {
    ...f,
    ...c ? {
      [y]: {
        ...typeof b != "boolean" && b,
        palette: c
      }
    } : void 0
  };
  if (o === !1) {
    if (!("colorSchemes" in a))
      return ff(a, ...i);
    let _ = c;
    "palette" in a || g[y] && (g[y] !== !0 ? _ = g[y].palette : y === "dark" && (_ = {
      mode: "dark"
    }));
    const x = ff({
      ...a,
      palette: _
    }, ...i);
    return x.defaultColorScheme = y, x.colorSchemes = g, x.palette.mode === "light" && (x.colorSchemes.light = {
      ...g.light !== !0 && g.light,
      palette: x.palette
    }, W0(x, "dark", g.dark)), x.palette.mode === "dark" && (x.colorSchemes.dark = {
      ...g.dark !== !0 && g.dark,
      palette: x.palette
    }, W0(x, "light", g.light)), x;
  }
  return !c && !("light" in g) && y === "light" && (g.light = !0), _b({
    ...m,
    colorSchemes: g,
    defaultColorScheme: y,
    ...typeof o != "boolean" && o
  }, ...i);
}
const Lm = Mb();
function Of() {
  const a = S1(Lm);
  return a[mm] || a;
}
function Db(a) {
  return a !== "ownerState" && a !== "theme" && a !== "sx" && a !== "as";
}
const zb = (a) => Db(a) && a !== "classes", Ke = M1({
  themeId: mm,
  defaultTheme: Lm,
  rootShouldForwardProp: zb
});
function F0(...a) {
  return a.reduce((i, c) => c == null ? i : function(...f) {
    i.apply(this, f), c.apply(this, f);
  }, () => {
  });
}
function Nb() {
  return E1;
}
const Gu = V1;
function Ol(a) {
  return k1(a);
}
function xl(a) {
  return a && a.ownerDocument || document;
}
function hr(a) {
  return xl(a).defaultView || window;
}
function P0(a, i) {
  typeof a == "function" ? a(i) : a && (a.current = i);
}
function I0(a) {
  const i = I.useRef(a);
  return rf(() => {
    i.current = a;
  }), I.useRef((...c) => (
    // @ts-expect-error hide `this`
    (0, i.current)(...c)
  )).current;
}
function ku(...a) {
  const i = I.useRef(void 0), c = I.useCallback((o) => {
    const f = a.map((d) => {
      if (d == null)
        return null;
      if (typeof d == "function") {
        const m = d, y = m(o);
        return typeof y == "function" ? y : () => {
          m(null);
        };
      }
      return d.current = o, () => {
        d.current = null;
      };
    });
    return () => {
      f.forEach((d) => d?.());
    };
  }, a);
  return I.useMemo(() => a.every((o) => o == null) ? null : (o) => {
    i.current && (i.current(), i.current = void 0), o != null && (i.current = c(o));
  }, a);
}
function Ub(a, i) {
  if (a == null) return {};
  var c = {};
  for (var o in a) if ({}.hasOwnProperty.call(a, o)) {
    if (i.indexOf(o) !== -1) continue;
    c[o] = a[o];
  }
  return c;
}
function df(a, i) {
  return df = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(c, o) {
    return c.__proto__ = o, c;
  }, df(a, i);
}
function Bb(a, i) {
  a.prototype = Object.create(i.prototype), a.prototype.constructor = a, df(a, i);
}
var $o = { exports: {} }, fe = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tm;
function wb() {
  if (tm) return fe;
  tm = 1;
  var a = pf();
  function i(b) {
    var g = "https://react.dev/errors/" + b;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var _ = 2; _ < arguments.length; _++)
        g += "&args[]=" + encodeURIComponent(arguments[_]);
    }
    return "Minified React error #" + b + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function c() {
  }
  var o = {
    d: {
      f: c,
      r: function() {
        throw Error(i(522));
      },
      D: c,
      C: c,
      L: c,
      m: c,
      X: c,
      S: c,
      M: c
    },
    p: 0,
    findDOMNode: null
  }, f = Symbol.for("react.portal");
  function d(b, g, _) {
    var x = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: f,
      key: x == null ? null : "" + x,
      children: b,
      containerInfo: g,
      implementation: _
    };
  }
  var m = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function y(b, g) {
    if (b === "font") return "";
    if (typeof g == "string")
      return g === "use-credentials" ? g : "";
  }
  return fe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, fe.createPortal = function(b, g) {
    var _ = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)
      throw Error(i(299));
    return d(b, g, null, _);
  }, fe.flushSync = function(b) {
    var g = m.T, _ = o.p;
    try {
      if (m.T = null, o.p = 2, b) return b();
    } finally {
      m.T = g, o.p = _, o.d.f();
    }
  }, fe.preconnect = function(b, g) {
    typeof b == "string" && (g ? (g = g.crossOrigin, g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null, o.d.C(b, g));
  }, fe.prefetchDNS = function(b) {
    typeof b == "string" && o.d.D(b);
  }, fe.preinit = function(b, g) {
    if (typeof b == "string" && g && typeof g.as == "string") {
      var _ = g.as, x = y(_, g.crossOrigin), N = typeof g.integrity == "string" ? g.integrity : void 0, j = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
      _ === "style" ? o.d.S(
        b,
        typeof g.precedence == "string" ? g.precedence : void 0,
        {
          crossOrigin: x,
          integrity: N,
          fetchPriority: j
        }
      ) : _ === "script" && o.d.X(b, {
        crossOrigin: x,
        integrity: N,
        fetchPriority: j,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0
      });
    }
  }, fe.preinitModule = function(b, g) {
    if (typeof b == "string")
      if (typeof g == "object" && g !== null) {
        if (g.as == null || g.as === "script") {
          var _ = y(
            g.as,
            g.crossOrigin
          );
          o.d.M(b, {
            crossOrigin: _,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
            nonce: typeof g.nonce == "string" ? g.nonce : void 0
          });
        }
      } else g == null && o.d.M(b);
  }, fe.preload = function(b, g) {
    if (typeof b == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
      var _ = g.as, x = y(_, g.crossOrigin);
      o.d.L(b, _, {
        crossOrigin: x,
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
  }, fe.preloadModule = function(b, g) {
    if (typeof b == "string")
      if (g) {
        var _ = y(g.as, g.crossOrigin);
        o.d.m(b, {
          as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
          crossOrigin: _,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0
        });
      } else o.d.m(b);
  }, fe.requestFormReset = function(b) {
    o.d.r(b);
  }, fe.unstable_batchedUpdates = function(b, g) {
    return b(g);
  }, fe.useFormState = function(b, g, _) {
    return m.H.useFormState(b, g, _);
  }, fe.useFormStatus = function() {
    return m.H.useHostTransitionStatus();
  }, fe.version = "19.1.1", fe;
}
var em;
function Xm() {
  if (em) return $o.exports;
  em = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (i) {
        console.error(i);
      }
  }
  return a(), $o.exports = wb(), $o.exports;
}
var Qm = Xm();
const ar = /* @__PURE__ */ hm(Qm), nm = {
  disabled: !1
}, Vm = Sa.createContext(null);
var Hb = function(i) {
  return i.scrollTop;
}, Mu = "unmounted", vl = "exited", bl = "entering", ba = "entered", hf = "exiting", On = /* @__PURE__ */ (function(a) {
  Bb(i, a);
  function i(o, f) {
    var d;
    d = a.call(this, o, f) || this;
    var m = f, y = m && !m.isMounting ? o.enter : o.appear, b;
    return d.appearStatus = null, o.in ? y ? (b = vl, d.appearStatus = bl) : b = ba : o.unmountOnExit || o.mountOnEnter ? b = Mu : b = vl, d.state = {
      status: b
    }, d.nextCallback = null, d;
  }
  i.getDerivedStateFromProps = function(f, d) {
    var m = f.in;
    return m && d.status === Mu ? {
      status: vl
    } : null;
  };
  var c = i.prototype;
  return c.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, c.componentDidUpdate = function(f) {
    var d = null;
    if (f !== this.props) {
      var m = this.state.status;
      this.props.in ? m !== bl && m !== ba && (d = bl) : (m === bl || m === ba) && (d = hf);
    }
    this.updateStatus(!1, d);
  }, c.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, c.getTimeouts = function() {
    var f = this.props.timeout, d, m, y;
    return d = m = y = f, f != null && typeof f != "number" && (d = f.exit, m = f.enter, y = f.appear !== void 0 ? f.appear : m), {
      exit: d,
      enter: m,
      appear: y
    };
  }, c.updateStatus = function(f, d) {
    if (f === void 0 && (f = !1), d !== null)
      if (this.cancelNextCallback(), d === bl) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var m = this.props.nodeRef ? this.props.nodeRef.current : ar.findDOMNode(this);
          m && Hb(m);
        }
        this.performEnter(f);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === vl && this.setState({
      status: Mu
    });
  }, c.performEnter = function(f) {
    var d = this, m = this.props.enter, y = this.context ? this.context.isMounting : f, b = this.props.nodeRef ? [y] : [ar.findDOMNode(this), y], g = b[0], _ = b[1], x = this.getTimeouts(), N = y ? x.appear : x.enter;
    if (!f && !m || nm.disabled) {
      this.safeSetState({
        status: ba
      }, function() {
        d.props.onEntered(g);
      });
      return;
    }
    this.props.onEnter(g, _), this.safeSetState({
      status: bl
    }, function() {
      d.props.onEntering(g, _), d.onTransitionEnd(N, function() {
        d.safeSetState({
          status: ba
        }, function() {
          d.props.onEntered(g, _);
        });
      });
    });
  }, c.performExit = function() {
    var f = this, d = this.props.exit, m = this.getTimeouts(), y = this.props.nodeRef ? void 0 : ar.findDOMNode(this);
    if (!d || nm.disabled) {
      this.safeSetState({
        status: vl
      }, function() {
        f.props.onExited(y);
      });
      return;
    }
    this.props.onExit(y), this.safeSetState({
      status: hf
    }, function() {
      f.props.onExiting(y), f.onTransitionEnd(m.exit, function() {
        f.safeSetState({
          status: vl
        }, function() {
          f.props.onExited(y);
        });
      });
    });
  }, c.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, c.safeSetState = function(f, d) {
    d = this.setNextCallback(d), this.setState(f, d);
  }, c.setNextCallback = function(f) {
    var d = this, m = !0;
    return this.nextCallback = function(y) {
      m && (m = !1, d.nextCallback = null, f(y));
    }, this.nextCallback.cancel = function() {
      m = !1;
    }, this.nextCallback;
  }, c.onTransitionEnd = function(f, d) {
    this.setNextCallback(d);
    var m = this.props.nodeRef ? this.props.nodeRef.current : ar.findDOMNode(this), y = f == null && !this.props.addEndListener;
    if (!m || y) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var b = this.props.nodeRef ? [this.nextCallback] : [m, this.nextCallback], g = b[0], _ = b[1];
      this.props.addEndListener(g, _);
    }
    f != null && setTimeout(this.nextCallback, f);
  }, c.render = function() {
    var f = this.state.status;
    if (f === Mu)
      return null;
    var d = this.props, m = d.children;
    d.in, d.mountOnEnter, d.unmountOnExit, d.appear, d.enter, d.exit, d.timeout, d.addEndListener, d.onEnter, d.onEntering, d.onEntered, d.onExit, d.onExiting, d.onExited, d.nodeRef;
    var y = Ub(d, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ Sa.createElement(Vm.Provider, {
        value: null
      }, typeof m == "function" ? m(f, y) : Sa.cloneElement(Sa.Children.only(m), y))
    );
  }, i;
})(Sa.Component);
On.contextType = Vm;
On.propTypes = {};
function va() {
}
On.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: va,
  onEntering: va,
  onEntered: va,
  onExit: va,
  onExiting: va,
  onExited: va
};
On.UNMOUNTED = Mu;
On.EXITED = vl;
On.ENTERING = bl;
On.ENTERED = ba;
On.EXITING = hf;
const qb = (a) => a.scrollTop;
function lm(a, i) {
  const {
    timeout: c,
    easing: o,
    style: f = {}
  } = a;
  return {
    duration: f.transitionDuration ?? (typeof c == "number" ? c : c[i.mode] || 0),
    easing: f.transitionTimingFunction ?? (typeof o == "object" ? o[i.mode] : o),
    delay: f.transitionDelay
  };
}
function Yb(a) {
  return Pn("MuiPaper", a);
}
Al("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const jb = (a) => {
  const {
    square: i,
    elevation: c,
    variant: o,
    classes: f
  } = a, d = {
    root: ["root", o, !i && "rounded", o === "elevation" && `elevation${c}`]
  };
  return Cl(d, Yb, f);
}, Gb = Ke("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (a, i) => {
    const {
      ownerState: c
    } = a;
    return [i.root, i[c.variant], !c.square && i.rounded, c.variant === "elevation" && i[`elevation${c.elevation}`]];
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
}))), Zm = /* @__PURE__ */ I.forwardRef(function(i, c) {
  const o = Ol({
    props: i,
    name: "MuiPaper"
  }), f = Of(), {
    className: d,
    component: m = "div",
    elevation: y = 1,
    square: b = !1,
    variant: g = "elevation",
    ..._
  } = o, x = {
    ...o,
    component: m,
    elevation: y,
    square: b,
    variant: g
  }, N = jb(x);
  return /* @__PURE__ */ Bt.jsx(Gb, {
    as: m,
    ownerState: x,
    className: ke(N.root, d),
    ref: c,
    ..._,
    style: {
      ...g === "elevation" && {
        "--Paper-shadow": (f.vars || f).shadows[y],
        ...f.vars && {
          "--Paper-overlay": f.vars.overlays?.[y]
        },
        ...!f.vars && f.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${dr("#fff", sf(y))}, ${dr("#fff", sf(y))})`
        }
      },
      ..._.style
    }
  });
});
function kb(a) {
  return typeof a == "string";
}
function Lb(a, i, c) {
  return a === void 0 || kb(a) ? i : {
    ...i,
    ownerState: {
      ...i.ownerState,
      ...c
    }
  };
}
function Xb(a, i, c) {
  return typeof a == "function" ? a(i, c) : a;
}
function Km(a, i = []) {
  if (a === void 0)
    return {};
  const c = {};
  return Object.keys(a).filter((o) => o.match(/^on[A-Z]/) && typeof a[o] == "function" && !i.includes(o)).forEach((o) => {
    c[o] = a[o];
  }), c;
}
function am(a) {
  if (a === void 0)
    return {};
  const i = {};
  return Object.keys(a).filter((c) => !(c.match(/^on[A-Z]/) && typeof a[c] == "function")).forEach((c) => {
    i[c] = a[c];
  }), i;
}
function Qb(a) {
  const {
    getSlotProps: i,
    additionalProps: c,
    externalSlotProps: o,
    externalForwardedProps: f,
    className: d
  } = a;
  if (!i) {
    const j = ke(c?.className, d, f?.className, o?.className), z = {
      ...c?.style,
      ...f?.style,
      ...o?.style
    }, O = {
      ...c,
      ...f,
      ...o
    };
    return j.length > 0 && (O.className = j), Object.keys(z).length > 0 && (O.style = z), {
      props: O,
      internalRef: void 0
    };
  }
  const m = Km({
    ...f,
    ...o
  }), y = am(o), b = am(f), g = i(m), _ = ke(g?.className, c?.className, d, f?.className, o?.className), x = {
    ...g?.style,
    ...c?.style,
    ...f?.style,
    ...o?.style
  }, N = {
    ...g,
    ...c,
    ...b,
    ...y
  };
  return _.length > 0 && (N.className = _), Object.keys(x).length > 0 && (N.style = x), {
    props: N,
    internalRef: g.ref
  };
}
function An(a, i) {
  const {
    className: c,
    elementType: o,
    ownerState: f,
    externalForwardedProps: d,
    internalForwardedProps: m,
    shouldForwardComponentProp: y = !1,
    ...b
  } = i, {
    component: g,
    slots: _ = {
      [a]: void 0
    },
    slotProps: x = {
      [a]: void 0
    },
    ...N
  } = d, j = _[a] || o, z = Xb(x[a], f), {
    props: {
      component: O,
      ...k
    },
    internalRef: K
  } = Qb({
    className: c,
    ...b,
    externalForwardedProps: a === "root" ? N : void 0,
    externalSlotProps: z
  }), P = ku(K, z?.ref, i.ref), J = a === "root" ? O || g : O, X = Lb(j, {
    ...a === "root" && !g && !_[a] && m,
    ...a !== "root" && !_[a] && m,
    ...k,
    ...J && !y && {
      as: J
    },
    ...J && y && {
      component: J
    },
    ref: P
  }, f);
  return [j, X];
}
function Vb(a) {
  return typeof a.main == "string";
}
function Zb(a, i = []) {
  if (!Vb(a))
    return !1;
  for (const c of i)
    if (!a.hasOwnProperty(c) || typeof a[c] != "string")
      return !1;
  return !0;
}
function Kb(a = []) {
  return ([, i]) => i && Zb(i, a);
}
function $b(a) {
  return Pn("MuiTypography", a);
}
Al("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const Jb = {
  primary: !0,
  secondary: !0,
  error: !0,
  info: !0,
  success: !0,
  warning: !0,
  textPrimary: !0,
  textSecondary: !0,
  textDisabled: !0
}, Wb = Nb(), Fb = (a) => {
  const {
    align: i,
    gutterBottom: c,
    noWrap: o,
    paragraph: f,
    variant: d,
    classes: m
  } = a, y = {
    root: ["root", d, a.align !== "inherit" && `align${Ze(i)}`, c && "gutterBottom", o && "noWrap", f && "paragraph"]
  };
  return Cl(y, $b, m);
}, Pb = Ke("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (a, i) => {
    const {
      ownerState: c
    } = a;
    return [i.root, c.variant && i[c.variant], c.align !== "inherit" && i[`align${Ze(c.align)}`], c.noWrap && i.noWrap, c.gutterBottom && i.gutterBottom, c.paragraph && i.paragraph];
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
  }, ...Object.entries(a.typography).filter(([i, c]) => i !== "inherit" && c && typeof c == "object").map(([i, c]) => ({
    props: {
      variant: i
    },
    style: c
  })), ...Object.entries(a.palette).filter(Kb()).map(([i]) => ({
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
}))), um = {
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
}, $m = /* @__PURE__ */ I.forwardRef(function(i, c) {
  const {
    color: o,
    ...f
  } = Ol({
    props: i,
    name: "MuiTypography"
  }), d = !Jb[o], m = Wb({
    ...f,
    ...d && {
      color: o
    }
  }), {
    align: y = "inherit",
    className: b,
    component: g,
    gutterBottom: _ = !1,
    noWrap: x = !1,
    paragraph: N = !1,
    variant: j = "body1",
    variantMapping: z = um,
    ...O
  } = m, k = {
    ...m,
    align: y,
    color: o,
    className: b,
    component: g,
    gutterBottom: _,
    noWrap: x,
    paragraph: N,
    variant: j,
    variantMapping: z
  }, K = g || (N ? "p" : z[j] || um[j]) || "span", P = Fb(k);
  return /* @__PURE__ */ Bt.jsx(Pb, {
    as: K,
    ref: c,
    className: ke(P.root, b),
    ...O,
    ownerState: k,
    style: {
      ...y !== "inherit" && {
        "--Typography-textAlign": y
      },
      ...O.style
    }
  });
});
function Rf(a) {
  return parseInt(I.version, 10) >= 19 ? a?.props?.ref || null : a?.ref || null;
}
function Ib(a) {
  return typeof a == "function" ? a() : a;
}
const tS = /* @__PURE__ */ I.forwardRef(function(i, c) {
  const {
    children: o,
    container: f,
    disablePortal: d = !1
  } = i, [m, y] = I.useState(null), b = ku(/* @__PURE__ */ I.isValidElement(o) ? Rf(o) : null, c);
  if (rf(() => {
    d || y(Ib(f) || document.body);
  }, [f, d]), rf(() => {
    if (m && !d)
      return P0(c, m), () => {
        P0(c, null);
      };
  }, [c, m, d]), d) {
    if (/* @__PURE__ */ I.isValidElement(o)) {
      const g = {
        ref: b
      };
      return /* @__PURE__ */ I.cloneElement(o, g);
    }
    return o;
  }
  return m && /* @__PURE__ */ Qm.createPortal(o, m);
}), eS = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, mf = /* @__PURE__ */ I.forwardRef(function(i, c) {
  const o = Of(), f = {
    enter: o.transitions.duration.enteringScreen,
    exit: o.transitions.duration.leavingScreen
  }, {
    addEndListener: d,
    appear: m = !0,
    children: y,
    easing: b,
    in: g,
    onEnter: _,
    onEntered: x,
    onEntering: N,
    onExit: j,
    onExited: z,
    onExiting: O,
    style: k,
    timeout: K = f,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: P = On,
    ...J
  } = i, X = I.useRef(null), et = ku(X, Rf(y), c), w = (L) => (W) => {
    if (L) {
      const D = X.current;
      W === void 0 ? L(D) : L(D, W);
    }
  }, Z = w(N), ot = w((L, W) => {
    qb(L);
    const D = lm({
      style: k,
      timeout: K,
      easing: b
    }, {
      mode: "enter"
    });
    L.style.webkitTransition = o.transitions.create("opacity", D), L.style.transition = o.transitions.create("opacity", D), _ && _(L, W);
  }), at = w(x), st = w(O), dt = w((L) => {
    const W = lm({
      style: k,
      timeout: K,
      easing: b
    }, {
      mode: "exit"
    });
    L.style.webkitTransition = o.transitions.create("opacity", W), L.style.transition = o.transitions.create("opacity", W), j && j(L);
  }), p = w(z), $ = (L) => {
    d && d(X.current, L);
  };
  return /* @__PURE__ */ Bt.jsx(P, {
    appear: m,
    in: g,
    nodeRef: X,
    onEnter: ot,
    onEntered: at,
    onEntering: Z,
    onExit: dt,
    onExited: p,
    onExiting: st,
    addEndListener: $,
    timeout: K,
    ...J,
    children: (L, {
      ownerState: W,
      ...D
    }) => /* @__PURE__ */ I.cloneElement(y, {
      style: {
        opacity: 0,
        visibility: L === "exited" && !g ? "hidden" : void 0,
        ...eS[L],
        ...k,
        ...y.props.style
      },
      ref: et,
      ...D
    })
  });
});
function nS(a) {
  return Pn("MuiBackdrop", a);
}
Al("MuiBackdrop", ["root", "invisible"]);
const lS = (a) => {
  const {
    classes: i,
    invisible: c
  } = a;
  return Cl({
    root: ["root", c && "invisible"]
  }, nS, i);
}, aS = Ke("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (a, i) => {
    const {
      ownerState: c
    } = a;
    return [i.root, c.invisible && i.invisible];
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
}), Jm = /* @__PURE__ */ I.forwardRef(function(i, c) {
  const o = Ol({
    props: i,
    name: "MuiBackdrop"
  }), {
    children: f,
    className: d,
    component: m = "div",
    invisible: y = !1,
    open: b,
    components: g = {},
    componentsProps: _ = {},
    slotProps: x = {},
    slots: N = {},
    TransitionComponent: j,
    transitionDuration: z,
    ...O
  } = o, k = {
    ...o,
    component: m,
    invisible: y
  }, K = lS(k), P = {
    transition: j,
    root: g.Root,
    ...N
  }, J = {
    ..._,
    ...x
  }, X = {
    component: m,
    slots: P,
    slotProps: J
  }, [et, w] = An("root", {
    elementType: aS,
    externalForwardedProps: X,
    className: ke(K.root, d),
    ownerState: k
  }), [Z, ot] = An("transition", {
    elementType: mf,
    externalForwardedProps: X,
    ownerState: k
  });
  return /* @__PURE__ */ Bt.jsx(Z, {
    in: b,
    timeout: z,
    ...O,
    ...ot,
    children: /* @__PURE__ */ Bt.jsx(et, {
      "aria-hidden": !0,
      ...w,
      classes: K,
      ref: c,
      children: f
    })
  });
});
function uS(a = window) {
  const i = a.document.documentElement.clientWidth;
  return a.innerWidth - i;
}
function iS(a) {
  const i = xl(a);
  return i.body === a ? hr(a).innerWidth > i.documentElement.clientWidth : a.scrollHeight > a.clientHeight;
}
function zu(a, i) {
  i ? a.setAttribute("aria-hidden", "true") : a.removeAttribute("aria-hidden");
}
function im(a) {
  return parseInt(hr(a).getComputedStyle(a).paddingRight, 10) || 0;
}
function rS(a) {
  const c = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(a.tagName), o = a.tagName === "INPUT" && a.getAttribute("type") === "hidden";
  return c || o;
}
function rm(a, i, c, o, f) {
  const d = [i, c, ...o];
  [].forEach.call(a.children, (m) => {
    const y = !d.includes(m), b = !rS(m);
    y && b && zu(m, f);
  });
}
function Jo(a, i) {
  let c = -1;
  return a.some((o, f) => i(o) ? (c = f, !0) : !1), c;
}
function cS(a, i) {
  const c = [], o = a.container;
  if (!i.disableScrollLock) {
    if (iS(o)) {
      const m = uS(hr(o));
      c.push({
        value: o.style.paddingRight,
        property: "padding-right",
        el: o
      }), o.style.paddingRight = `${im(o) + m}px`;
      const y = xl(o).querySelectorAll(".mui-fixed");
      [].forEach.call(y, (b) => {
        c.push({
          value: b.style.paddingRight,
          property: "padding-right",
          el: b
        }), b.style.paddingRight = `${im(b) + m}px`;
      });
    }
    let d;
    if (o.parentNode instanceof DocumentFragment)
      d = xl(o).body;
    else {
      const m = o.parentElement, y = hr(o);
      d = m?.nodeName === "HTML" && y.getComputedStyle(m).overflowY === "scroll" ? m : o;
    }
    c.push({
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
    c.forEach(({
      value: d,
      el: m,
      property: y
    }) => {
      d ? m.style.setProperty(y, d) : m.style.removeProperty(y);
    });
  };
}
function oS(a) {
  const i = [];
  return [].forEach.call(a.children, (c) => {
    c.getAttribute("aria-hidden") === "true" && i.push(c);
  }), i;
}
class fS {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(i, c) {
    let o = this.modals.indexOf(i);
    if (o !== -1)
      return o;
    o = this.modals.length, this.modals.push(i), i.modalRef && zu(i.modalRef, !1);
    const f = oS(c);
    rm(c, i.mount, i.modalRef, f, !0);
    const d = Jo(this.containers, (m) => m.container === c);
    return d !== -1 ? (this.containers[d].modals.push(i), o) : (this.containers.push({
      modals: [i],
      container: c,
      restore: null,
      hiddenSiblings: f
    }), o);
  }
  mount(i, c) {
    const o = Jo(this.containers, (d) => d.modals.includes(i)), f = this.containers[o];
    f.restore || (f.restore = cS(f, c));
  }
  remove(i, c = !0) {
    const o = this.modals.indexOf(i);
    if (o === -1)
      return o;
    const f = Jo(this.containers, (m) => m.modals.includes(i)), d = this.containers[f];
    if (d.modals.splice(d.modals.indexOf(i), 1), this.modals.splice(o, 1), d.modals.length === 0)
      d.restore && d.restore(), i.modalRef && zu(i.modalRef, c), rm(d.container, i.mount, i.modalRef, d.hiddenSiblings, !1), this.containers.splice(f, 1);
    else {
      const m = d.modals[d.modals.length - 1];
      m.modalRef && zu(m.modalRef, !1);
    }
    return o;
  }
  isTopModal(i) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === i;
  }
}
const sS = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function dS(a) {
  const i = parseInt(a.getAttribute("tabindex") || "", 10);
  return Number.isNaN(i) ? a.contentEditable === "true" || (a.nodeName === "AUDIO" || a.nodeName === "VIDEO" || a.nodeName === "DETAILS") && a.getAttribute("tabindex") === null ? 0 : a.tabIndex : i;
}
function hS(a) {
  if (a.tagName !== "INPUT" || a.type !== "radio" || !a.name)
    return !1;
  const i = (o) => a.ownerDocument.querySelector(`input[type="radio"]${o}`);
  let c = i(`[name="${a.name}"]:checked`);
  return c || (c = i(`[name="${a.name}"]`)), c !== a;
}
function mS(a) {
  return !(a.disabled || a.tagName === "INPUT" && a.type === "hidden" || hS(a));
}
function pS(a) {
  const i = [], c = [];
  return Array.from(a.querySelectorAll(sS)).forEach((o, f) => {
    const d = dS(o);
    d === -1 || !mS(o) || (d === 0 ? i.push(o) : c.push({
      documentOrder: f,
      tabIndex: d,
      node: o
    }));
  }), c.sort((o, f) => o.tabIndex === f.tabIndex ? o.documentOrder - f.documentOrder : o.tabIndex - f.tabIndex).map((o) => o.node).concat(i);
}
function yS() {
  return !0;
}
function gS(a) {
  const {
    children: i,
    disableAutoFocus: c = !1,
    disableEnforceFocus: o = !1,
    disableRestoreFocus: f = !1,
    getTabbable: d = pS,
    isEnabled: m = yS,
    open: y
  } = a, b = I.useRef(!1), g = I.useRef(null), _ = I.useRef(null), x = I.useRef(null), N = I.useRef(null), j = I.useRef(!1), z = I.useRef(null), O = ku(Rf(i), z), k = I.useRef(null);
  I.useEffect(() => {
    !y || !z.current || (j.current = !c);
  }, [c, y]), I.useEffect(() => {
    if (!y || !z.current)
      return;
    const J = xl(z.current);
    return z.current.contains(J.activeElement) || (z.current.hasAttribute("tabIndex") || z.current.setAttribute("tabIndex", "-1"), j.current && z.current.focus()), () => {
      f || (x.current && x.current.focus && (b.current = !0, x.current.focus()), x.current = null);
    };
  }, [y]), I.useEffect(() => {
    if (!y || !z.current)
      return;
    const J = xl(z.current), X = (Z) => {
      k.current = Z, !(o || !m() || Z.key !== "Tab") && J.activeElement === z.current && Z.shiftKey && (b.current = !0, _.current && _.current.focus());
    }, et = () => {
      const Z = z.current;
      if (Z === null)
        return;
      if (!J.hasFocus() || !m() || b.current) {
        b.current = !1;
        return;
      }
      if (Z.contains(J.activeElement) || o && J.activeElement !== g.current && J.activeElement !== _.current)
        return;
      if (J.activeElement !== N.current)
        N.current = null;
      else if (N.current !== null)
        return;
      if (!j.current)
        return;
      let ot = [];
      if ((J.activeElement === g.current || J.activeElement === _.current) && (ot = d(z.current)), ot.length > 0) {
        const at = !!(k.current?.shiftKey && k.current?.key === "Tab"), st = ot[0], dt = ot[ot.length - 1];
        typeof st != "string" && typeof dt != "string" && (at ? dt.focus() : st.focus());
      } else
        Z.focus();
    };
    J.addEventListener("focusin", et), J.addEventListener("keydown", X, !0);
    const w = setInterval(() => {
      J.activeElement && J.activeElement.tagName === "BODY" && et();
    }, 50);
    return () => {
      clearInterval(w), J.removeEventListener("focusin", et), J.removeEventListener("keydown", X, !0);
    };
  }, [c, o, f, m, y, d]);
  const K = (J) => {
    x.current === null && (x.current = J.relatedTarget), j.current = !0, N.current = J.target;
    const X = i.props.onFocus;
    X && X(J);
  }, P = (J) => {
    x.current === null && (x.current = J.relatedTarget), j.current = !0;
  };
  return /* @__PURE__ */ Bt.jsxs(I.Fragment, {
    children: [/* @__PURE__ */ Bt.jsx("div", {
      tabIndex: y ? 0 : -1,
      onFocus: P,
      ref: g,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ I.cloneElement(i, {
      ref: O,
      onFocus: K
    }), /* @__PURE__ */ Bt.jsx("div", {
      tabIndex: y ? 0 : -1,
      onFocus: P,
      ref: _,
      "data-testid": "sentinelEnd"
    })]
  });
}
function vS(a) {
  return typeof a == "function" ? a() : a;
}
function bS(a) {
  return a ? a.props.hasOwnProperty("in") : !1;
}
const cm = () => {
}, ur = new fS();
function SS(a) {
  const {
    container: i,
    disableEscapeKeyDown: c = !1,
    disableScrollLock: o = !1,
    closeAfterTransition: f = !1,
    onTransitionEnter: d,
    onTransitionExited: m,
    children: y,
    onClose: b,
    open: g,
    rootRef: _
  } = a, x = I.useRef({}), N = I.useRef(null), j = I.useRef(null), z = ku(j, _), [O, k] = I.useState(!g), K = bS(y);
  let P = !0;
  (a["aria-hidden"] === "false" || a["aria-hidden"] === !1) && (P = !1);
  const J = () => xl(N.current), X = () => (x.current.modalRef = j.current, x.current.mount = N.current, x.current), et = () => {
    ur.mount(X(), {
      disableScrollLock: o
    }), j.current && (j.current.scrollTop = 0);
  }, w = I0(() => {
    const W = vS(i) || J().body;
    ur.add(X(), W), j.current && et();
  }), Z = () => ur.isTopModal(X()), ot = I0((W) => {
    N.current = W, W && (g && Z() ? et() : j.current && zu(j.current, P));
  }), at = I.useCallback(() => {
    ur.remove(X(), P);
  }, [P]);
  I.useEffect(() => () => {
    at();
  }, [at]), I.useEffect(() => {
    g ? w() : (!K || !f) && at();
  }, [g, at, K, f, w]);
  const st = (W) => (D) => {
    W.onKeyDown?.(D), !(D.key !== "Escape" || D.which === 229 || // Wait until IME is settled.
    !Z()) && (c || (D.stopPropagation(), b && b(D, "escapeKeyDown")));
  }, dt = (W) => (D) => {
    W.onClick?.(D), D.target === D.currentTarget && b && b(D, "backdropClick");
  };
  return {
    getRootProps: (W = {}) => {
      const D = Km(a);
      delete D.onTransitionEnter, delete D.onTransitionExited;
      const G = {
        ...D,
        ...W
      };
      return {
        /*
         * Marking an element with the role presentation indicates to assistive technology
         * that this element should be ignored; it exists to support the web application and
         * is not meant for humans to interact with directly.
         * https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
         */
        role: "presentation",
        ...G,
        onKeyDown: st(G),
        ref: z
      };
    },
    getBackdropProps: (W = {}) => {
      const D = W;
      return {
        "aria-hidden": !0,
        ...D,
        onClick: dt(D),
        open: g
      };
    },
    getTransitionProps: () => {
      const W = () => {
        k(!1), d && d();
      }, D = () => {
        k(!0), m && m(), f && at();
      };
      return {
        onEnter: F0(W, y?.props.onEnter ?? cm),
        onExited: F0(D, y?.props.onExited ?? cm)
      };
    },
    rootRef: z,
    portalRef: ot,
    isTopModal: Z,
    exited: O,
    hasTransition: K
  };
}
function TS(a) {
  return Pn("MuiModal", a);
}
Al("MuiModal", ["root", "hidden", "backdrop"]);
const ES = (a) => {
  const {
    open: i,
    exited: c,
    classes: o
  } = a;
  return Cl({
    root: ["root", !i && c && "hidden"],
    backdrop: ["backdrop"]
  }, TS, o);
}, xS = Ke("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (a, i) => {
    const {
      ownerState: c
    } = a;
    return [i.root, !c.open && c.exited && i.hidden];
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
}))), AS = Ke(Jm, {
  name: "MuiModal",
  slot: "Backdrop"
})({
  zIndex: -1
}), CS = /* @__PURE__ */ I.forwardRef(function(i, c) {
  const o = Ol({
    name: "MuiModal",
    props: i
  }), {
    BackdropComponent: f = AS,
    BackdropProps: d,
    classes: m,
    className: y,
    closeAfterTransition: b = !1,
    children: g,
    container: _,
    component: x,
    components: N = {},
    componentsProps: j = {},
    disableAutoFocus: z = !1,
    disableEnforceFocus: O = !1,
    disableEscapeKeyDown: k = !1,
    disablePortal: K = !1,
    disableRestoreFocus: P = !1,
    disableScrollLock: J = !1,
    hideBackdrop: X = !1,
    keepMounted: et = !1,
    onClose: w,
    onTransitionEnter: Z,
    onTransitionExited: ot,
    open: at,
    slotProps: st = {},
    slots: dt = {},
    // eslint-disable-next-line react/prop-types
    theme: p,
    ...$
  } = o, L = {
    ...o,
    closeAfterTransition: b,
    disableAutoFocus: z,
    disableEnforceFocus: O,
    disableEscapeKeyDown: k,
    disablePortal: K,
    disableRestoreFocus: P,
    disableScrollLock: J,
    hideBackdrop: X,
    keepMounted: et
  }, {
    getRootProps: W,
    getBackdropProps: D,
    getTransitionProps: G,
    portalRef: Q,
    isTopModal: gt,
    exited: At,
    hasTransition: T
  } = SS({
    ...L,
    rootRef: c
  }), q = {
    ...L,
    exited: At
  }, F = ES(q), V = {};
  if (g.props.tabIndex === void 0 && (V.tabIndex = "-1"), T) {
    const {
      onEnter: re,
      onExited: un
    } = G();
    V.onEnter = re, V.onExited = un;
  }
  const lt = {
    slots: {
      root: N.Root,
      backdrop: N.Backdrop,
      ...dt
    },
    slotProps: {
      ...j,
      ...st
    }
  }, [St, rt] = An("root", {
    ref: c,
    elementType: xS,
    externalForwardedProps: {
      ...lt,
      ...$,
      component: x
    },
    getSlotProps: W,
    ownerState: q,
    className: ke(y, F?.root, !q.open && q.exited && F?.hidden)
  }), [ne, Mt] = An("backdrop", {
    ref: d?.ref,
    elementType: f,
    externalForwardedProps: lt,
    shouldForwardComponentProp: !0,
    additionalProps: d,
    getSlotProps: (re) => D({
      ...re,
      onClick: (un) => {
        re?.onClick && re.onClick(un);
      }
    }),
    className: ke(d?.className, F?.backdrop),
    ownerState: q
  });
  return !et && !at && (!T || At) ? null : /* @__PURE__ */ Bt.jsx(tS, {
    ref: Q,
    container: _,
    disablePortal: K,
    children: /* @__PURE__ */ Bt.jsxs(St, {
      ...rt,
      children: [!X && f ? /* @__PURE__ */ Bt.jsx(ne, {
        ...Mt
      }) : null, /* @__PURE__ */ Bt.jsx(gS, {
        disableEnforceFocus: O,
        disableAutoFocus: z,
        disableRestoreFocus: P,
        isEnabled: gt,
        open: at,
        children: /* @__PURE__ */ I.cloneElement(g, V)
      })]
    })
  });
});
function OS(a) {
  return Pn("MuiDialog", a);
}
const Wo = Al("MuiDialog", ["root", "scrollPaper", "scrollBody", "container", "paper", "paperScrollPaper", "paperScrollBody", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]), Wm = /* @__PURE__ */ I.createContext({}), RS = Ke(Jm, {
  name: "MuiDialog",
  slot: "Backdrop",
  overrides: (a, i) => i.backdrop
})({
  // Improve scrollable dialog support.
  zIndex: -1
}), _S = (a) => {
  const {
    classes: i,
    scroll: c,
    maxWidth: o,
    fullWidth: f,
    fullScreen: d
  } = a, m = {
    root: ["root"],
    container: ["container", `scroll${Ze(c)}`],
    paper: ["paper", `paperScroll${Ze(c)}`, `paperWidth${Ze(String(o))}`, f && "paperFullWidth", d && "paperFullScreen"]
  };
  return Cl(m, OS, i);
}, MS = Ke(CS, {
  name: "MuiDialog",
  slot: "Root"
})({
  "@media print": {
    // Use !important to override the Modal inline-style.
    position: "absolute !important"
  }
}), DS = Ke("div", {
  name: "MuiDialog",
  slot: "Container",
  overridesResolver: (a, i) => {
    const {
      ownerState: c
    } = a;
    return [i.container, i[`scroll${Ze(c.scroll)}`]];
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
}), zS = Ke(Zm, {
  name: "MuiDialog",
  slot: "Paper",
  overridesResolver: (a, i) => {
    const {
      ownerState: c
    } = a;
    return [i.paper, i[`scrollPaper${Ze(c.scroll)}`], i[`paperWidth${Ze(String(c.maxWidth))}`], c.fullWidth && i.paperFullWidth, c.fullScreen && i.paperFullScreen];
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
      [`&.${Wo.paperScrollBody}`]: {
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
      [`&.${Wo.paperScrollBody}`]: {
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
      [`&.${Wo.paperScrollBody}`]: {
        margin: 0,
        maxWidth: "100%"
      }
    }
  }]
}))), NS = /* @__PURE__ */ I.forwardRef(function(i, c) {
  const o = Ol({
    props: i,
    name: "MuiDialog"
  }), f = Of(), d = {
    enter: f.transitions.duration.enteringScreen,
    exit: f.transitions.duration.leavingScreen
  }, {
    "aria-describedby": m,
    "aria-labelledby": y,
    "aria-modal": b = !0,
    BackdropComponent: g,
    BackdropProps: _,
    children: x,
    className: N,
    disableEscapeKeyDown: j = !1,
    fullScreen: z = !1,
    fullWidth: O = !1,
    maxWidth: k = "sm",
    onClick: K,
    onClose: P,
    open: J,
    PaperComponent: X = Zm,
    PaperProps: et = {},
    scroll: w = "paper",
    slots: Z = {},
    slotProps: ot = {},
    TransitionComponent: at = mf,
    transitionDuration: st = d,
    TransitionProps: dt,
    ...p
  } = o, $ = {
    ...o,
    disableEscapeKeyDown: j,
    fullScreen: z,
    fullWidth: O,
    maxWidth: k,
    scroll: w
  }, L = _S($), W = I.useRef(), D = (rn) => {
    W.current = rn.target === rn.currentTarget;
  }, G = (rn) => {
    K && K(rn), W.current && (W.current = null, P && P(rn, "backdropClick"));
  }, Q = Q1(y), gt = I.useMemo(() => ({
    titleId: Q
  }), [Q]), At = {
    transition: at,
    ...Z
  }, T = {
    transition: dt,
    paper: et,
    backdrop: _,
    ...ot
  }, q = {
    slots: At,
    slotProps: T
  }, [F, V] = An("root", {
    elementType: MS,
    shouldForwardComponentProp: !0,
    externalForwardedProps: q,
    ownerState: $,
    className: ke(L.root, N),
    ref: c
  }), [lt, St] = An("backdrop", {
    elementType: RS,
    shouldForwardComponentProp: !0,
    externalForwardedProps: q,
    ownerState: $
  }), [rt, ne] = An("paper", {
    elementType: zS,
    shouldForwardComponentProp: !0,
    externalForwardedProps: q,
    ownerState: $,
    className: ke(L.paper, et.className)
  }), [Mt, re] = An("container", {
    elementType: DS,
    externalForwardedProps: q,
    ownerState: $,
    className: L.container
  }), [un, Rl] = An("transition", {
    elementType: mf,
    externalForwardedProps: q,
    ownerState: $,
    additionalProps: {
      appear: !0,
      in: J,
      timeout: st,
      role: "presentation"
    }
  });
  return /* @__PURE__ */ Bt.jsx(F, {
    closeAfterTransition: !0,
    slots: {
      backdrop: lt
    },
    slotProps: {
      backdrop: {
        transitionDuration: st,
        as: g,
        ...St
      }
    },
    disableEscapeKeyDown: j,
    onClose: P,
    open: J,
    onClick: G,
    ...V,
    ...p,
    children: /* @__PURE__ */ Bt.jsx(un, {
      ...Rl,
      children: /* @__PURE__ */ Bt.jsx(Mt, {
        onMouseDown: D,
        ...re,
        children: /* @__PURE__ */ Bt.jsx(rt, {
          as: X,
          elevation: 24,
          role: "dialog",
          "aria-describedby": m,
          "aria-labelledby": Q,
          "aria-modal": b,
          ...ne,
          children: /* @__PURE__ */ Bt.jsx(Wm.Provider, {
            value: gt,
            children: x
          })
        })
      })
    })
  });
});
function US(a) {
  return Pn("MuiDialogContent", a);
}
Al("MuiDialogContent", ["root", "dividers"]);
function BS(a) {
  return Pn("MuiDialogTitle", a);
}
const wS = Al("MuiDialogTitle", ["root"]), HS = (a) => {
  const {
    classes: i,
    dividers: c
  } = a;
  return Cl({
    root: ["root", c && "dividers"]
  }, US, i);
}, qS = Ke("div", {
  name: "MuiDialogContent",
  slot: "Root",
  overridesResolver: (a, i) => {
    const {
      ownerState: c
    } = a;
    return [i.root, c.dividers && i.dividers];
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
      [`.${wS.root} + &`]: {
        paddingTop: 0
      }
    }
  }]
}))), YS = /* @__PURE__ */ I.forwardRef(function(i, c) {
  const o = Ol({
    props: i,
    name: "MuiDialogContent"
  }), {
    className: f,
    dividers: d = !1,
    ...m
  } = o, y = {
    ...o,
    dividers: d
  }, b = HS(y);
  return /* @__PURE__ */ Bt.jsx(qS, {
    className: ke(b.root, f),
    ownerState: y,
    ref: c,
    ...m
  });
}), jS = (a) => {
  const {
    classes: i
  } = a;
  return Cl({
    root: ["root"]
  }, BS, i);
}, GS = Ke($m, {
  name: "MuiDialogTitle",
  slot: "Root"
})({
  padding: "16px 24px",
  flex: "0 0 auto"
}), kS = /* @__PURE__ */ I.forwardRef(function(i, c) {
  const o = Ol({
    props: i,
    name: "MuiDialogTitle"
  }), {
    className: f,
    id: d,
    ...m
  } = o, y = o, b = jS(y), {
    titleId: g = d
  } = I.useContext(Wm);
  return /* @__PURE__ */ Bt.jsx(GS, {
    component: "h2",
    className: ke(b.root, f),
    ownerState: y,
    ref: c,
    variant: "h6",
    id: d ?? g,
    ...m
  });
});
var Fo = { exports: {} }, Ou = {}, Po = { exports: {} }, Io = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var om;
function LS() {
  return om || (om = 1, (function(a) {
    function i(D, G) {
      var Q = D.length;
      D.push(G);
      t: for (; 0 < Q; ) {
        var gt = Q - 1 >>> 1, At = D[gt];
        if (0 < f(At, G))
          D[gt] = G, D[Q] = At, Q = gt;
        else break t;
      }
    }
    function c(D) {
      return D.length === 0 ? null : D[0];
    }
    function o(D) {
      if (D.length === 0) return null;
      var G = D[0], Q = D.pop();
      if (Q !== G) {
        D[0] = Q;
        t: for (var gt = 0, At = D.length, T = At >>> 1; gt < T; ) {
          var q = 2 * (gt + 1) - 1, F = D[q], V = q + 1, lt = D[V];
          if (0 > f(F, Q))
            V < At && 0 > f(lt, F) ? (D[gt] = lt, D[V] = Q, gt = V) : (D[gt] = F, D[q] = Q, gt = q);
          else if (V < At && 0 > f(lt, Q))
            D[gt] = lt, D[V] = Q, gt = V;
          else break t;
        }
      }
      return G;
    }
    function f(D, G) {
      var Q = D.sortIndex - G.sortIndex;
      return Q !== 0 ? Q : D.id - G.id;
    }
    if (a.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var d = performance;
      a.unstable_now = function() {
        return d.now();
      };
    } else {
      var m = Date, y = m.now();
      a.unstable_now = function() {
        return m.now() - y;
      };
    }
    var b = [], g = [], _ = 1, x = null, N = 3, j = !1, z = !1, O = !1, k = !1, K = typeof setTimeout == "function" ? setTimeout : null, P = typeof clearTimeout == "function" ? clearTimeout : null, J = typeof setImmediate < "u" ? setImmediate : null;
    function X(D) {
      for (var G = c(g); G !== null; ) {
        if (G.callback === null) o(g);
        else if (G.startTime <= D)
          o(g), G.sortIndex = G.expirationTime, i(b, G);
        else break;
        G = c(g);
      }
    }
    function et(D) {
      if (O = !1, X(D), !z)
        if (c(b) !== null)
          z = !0, w || (w = !0, p());
        else {
          var G = c(g);
          G !== null && W(et, G.startTime - D);
        }
    }
    var w = !1, Z = -1, ot = 5, at = -1;
    function st() {
      return k ? !0 : !(a.unstable_now() - at < ot);
    }
    function dt() {
      if (k = !1, w) {
        var D = a.unstable_now();
        at = D;
        var G = !0;
        try {
          t: {
            z = !1, O && (O = !1, P(Z), Z = -1), j = !0;
            var Q = N;
            try {
              e: {
                for (X(D), x = c(b); x !== null && !(x.expirationTime > D && st()); ) {
                  var gt = x.callback;
                  if (typeof gt == "function") {
                    x.callback = null, N = x.priorityLevel;
                    var At = gt(
                      x.expirationTime <= D
                    );
                    if (D = a.unstable_now(), typeof At == "function") {
                      x.callback = At, X(D), G = !0;
                      break e;
                    }
                    x === c(b) && o(b), X(D);
                  } else o(b);
                  x = c(b);
                }
                if (x !== null) G = !0;
                else {
                  var T = c(g);
                  T !== null && W(
                    et,
                    T.startTime - D
                  ), G = !1;
                }
              }
              break t;
            } finally {
              x = null, N = Q, j = !1;
            }
            G = void 0;
          }
        } finally {
          G ? p() : w = !1;
        }
      }
    }
    var p;
    if (typeof J == "function")
      p = function() {
        J(dt);
      };
    else if (typeof MessageChannel < "u") {
      var $ = new MessageChannel(), L = $.port2;
      $.port1.onmessage = dt, p = function() {
        L.postMessage(null);
      };
    } else
      p = function() {
        K(dt, 0);
      };
    function W(D, G) {
      Z = K(function() {
        D(a.unstable_now());
      }, G);
    }
    a.unstable_IdlePriority = 5, a.unstable_ImmediatePriority = 1, a.unstable_LowPriority = 4, a.unstable_NormalPriority = 3, a.unstable_Profiling = null, a.unstable_UserBlockingPriority = 2, a.unstable_cancelCallback = function(D) {
      D.callback = null;
    }, a.unstable_forceFrameRate = function(D) {
      0 > D || 125 < D ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : ot = 0 < D ? Math.floor(1e3 / D) : 5;
    }, a.unstable_getCurrentPriorityLevel = function() {
      return N;
    }, a.unstable_next = function(D) {
      switch (N) {
        case 1:
        case 2:
        case 3:
          var G = 3;
          break;
        default:
          G = N;
      }
      var Q = N;
      N = G;
      try {
        return D();
      } finally {
        N = Q;
      }
    }, a.unstable_requestPaint = function() {
      k = !0;
    }, a.unstable_runWithPriority = function(D, G) {
      switch (D) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          D = 3;
      }
      var Q = N;
      N = D;
      try {
        return G();
      } finally {
        N = Q;
      }
    }, a.unstable_scheduleCallback = function(D, G, Q) {
      var gt = a.unstable_now();
      switch (typeof Q == "object" && Q !== null ? (Q = Q.delay, Q = typeof Q == "number" && 0 < Q ? gt + Q : gt) : Q = gt, D) {
        case 1:
          var At = -1;
          break;
        case 2:
          At = 250;
          break;
        case 5:
          At = 1073741823;
          break;
        case 4:
          At = 1e4;
          break;
        default:
          At = 5e3;
      }
      return At = Q + At, D = {
        id: _++,
        callback: G,
        priorityLevel: D,
        startTime: Q,
        expirationTime: At,
        sortIndex: -1
      }, Q > gt ? (D.sortIndex = Q, i(g, D), c(b) === null && D === c(g) && (O ? (P(Z), Z = -1) : O = !0, W(et, Q - gt))) : (D.sortIndex = At, i(b, D), z || j || (z = !0, w || (w = !0, p()))), D;
    }, a.unstable_shouldYield = st, a.unstable_wrapCallback = function(D) {
      var G = N;
      return function() {
        var Q = N;
        N = G;
        try {
          return D.apply(this, arguments);
        } finally {
          N = Q;
        }
      };
    };
  })(Io)), Io;
}
var fm;
function XS() {
  return fm || (fm = 1, Po.exports = LS()), Po.exports;
}
var sm;
function QS() {
  if (sm) return Ou;
  sm = 1;
  var a = { env: {} };
  /**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var i = XS(), c = pf(), o = Xm();
  function f(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function d(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function m(t) {
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
  function y(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function b(t) {
    if (m(t) !== t)
      throw Error(f(188));
  }
  function g(t) {
    var e = t.alternate;
    if (!e) {
      if (e = m(t), e === null) throw Error(f(188));
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
          if (r === n) return b(u), t;
          if (r === l) return b(u), e;
          r = r.sibling;
        }
        throw Error(f(188));
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
          if (!s) throw Error(f(189));
        }
      }
      if (n.alternate !== l) throw Error(f(190));
    }
    if (n.tag !== 3) throw Error(f(188));
    return n.stateNode.current === n ? t : e;
  }
  function _(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = _(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  var x = Object.assign, N = Symbol.for("react.element"), j = Symbol.for("react.transitional.element"), z = Symbol.for("react.portal"), O = Symbol.for("react.fragment"), k = Symbol.for("react.strict_mode"), K = Symbol.for("react.profiler"), P = Symbol.for("react.provider"), J = Symbol.for("react.consumer"), X = Symbol.for("react.context"), et = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), Z = Symbol.for("react.suspense_list"), ot = Symbol.for("react.memo"), at = Symbol.for("react.lazy"), st = Symbol.for("react.activity"), dt = Symbol.for("react.memo_cache_sentinel"), p = Symbol.iterator;
  function $(t) {
    return t === null || typeof t != "object" ? null : (t = p && t[p] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var L = Symbol.for("react.client.reference");
  function W(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === L ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case O:
        return "Fragment";
      case K:
        return "Profiler";
      case k:
        return "StrictMode";
      case w:
        return "Suspense";
      case Z:
        return "SuspenseList";
      case st:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case z:
          return "Portal";
        case X:
          return (t.displayName || "Context") + ".Provider";
        case J:
          return (t._context.displayName || "Context") + ".Consumer";
        case et:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case ot:
          return e = t.displayName || null, e !== null ? e : W(t.type) || "Memo";
        case at:
          e = t._payload, t = t._init;
          try {
            return W(t(e));
          } catch {
          }
      }
    return null;
  }
  var D = Array.isArray, G = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, gt = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, At = [], T = -1;
  function q(t) {
    return { current: t };
  }
  function F(t) {
    0 > T || (t.current = At[T], At[T] = null, T--);
  }
  function V(t, e) {
    T++, At[T] = t.current, t.current = e;
  }
  var lt = q(null), St = q(null), rt = q(null), ne = q(null);
  function Mt(t, e) {
    switch (V(rt, e), V(St, t), V(lt, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? $h(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = $h(e), t = Jh(e, t);
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
    F(lt), V(lt, t);
  }
  function re() {
    F(lt), F(St), F(rt);
  }
  function un(t) {
    t.memoizedState !== null && V(ne, t);
    var e = lt.current, n = Jh(e, t.type);
    e !== n && (V(St, t), V(lt, n));
  }
  function Rl(t) {
    St.current === t && (F(lt), F(St)), ne.current === t && (F(ne), vu._currentValue = gt);
  }
  var rn = Object.prototype.hasOwnProperty, Rr = i.unstable_scheduleCallback, _r = i.unstable_cancelCallback, Pm = i.unstable_shouldYield, Im = i.unstable_requestPaint, $e = i.unstable_now, tp = i.unstable_getCurrentPriorityLevel, _f = i.unstable_ImmediatePriority, Mf = i.unstable_UserBlockingPriority, Lu = i.unstable_NormalPriority, ep = i.unstable_LowPriority, Df = i.unstable_IdlePriority, np = i.log, lp = i.unstable_setDisableYieldValue, Oa = null, be = null;
  function Rn(t) {
    if (typeof np == "function" && lp(t), be && typeof be.setStrictMode == "function")
      try {
        be.setStrictMode(Oa, t);
      } catch {
      }
  }
  var Se = Math.clz32 ? Math.clz32 : ip, ap = Math.log, up = Math.LN2;
  function ip(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (ap(t) / up | 0) | 0;
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
  function rp(t, e) {
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
  function zf() {
    var t = Xu;
    return Xu <<= 1, (Xu & 4194048) === 0 && (Xu = 256), t;
  }
  function Nf() {
    var t = Qu;
    return Qu <<= 1, (Qu & 62914560) === 0 && (Qu = 4194304), t;
  }
  function Mr(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function _a(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function cp(t, e, n, l, u, r) {
    var s = t.pendingLanes;
    t.pendingLanes = n, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= n, t.entangledLanes &= n, t.errorRecoveryDisabledLanes &= n, t.shellSuspendCounter = 0;
    var h = t.entanglements, v = t.expirationTimes, C = t.hiddenUpdates;
    for (n = s & ~n; 0 < n; ) {
      var B = 31 - Se(n), Y = 1 << B;
      h[B] = 0, v[B] = -1;
      var R = C[B];
      if (R !== null)
        for (C[B] = null, B = 0; B < R.length; B++) {
          var M = R[B];
          M !== null && (M.lane &= -536870913);
        }
      n &= ~Y;
    }
    l !== 0 && Uf(t, l, 0), r !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= r & ~(s & ~e));
  }
  function Uf(t, e, n) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var l = 31 - Se(e);
    t.entangledLanes |= e, t.entanglements[l] = t.entanglements[l] | 1073741824 | n & 4194090;
  }
  function Bf(t, e) {
    var n = t.entangledLanes |= e;
    for (t = t.entanglements; n; ) {
      var l = 31 - Se(n), u = 1 << l;
      u & e | t[l] & e && (t[l] |= e), n &= ~u;
    }
  }
  function Dr(t) {
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
  function zr(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function wf() {
    var t = Q.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : m0(t.type));
  }
  function op(t, e) {
    var n = Q.p;
    try {
      return Q.p = t, e();
    } finally {
      Q.p = n;
    }
  }
  var _n = Math.random().toString(36).slice(2), ce = "__reactFiber$" + _n, he = "__reactProps$" + _n, _l = "__reactContainer$" + _n, Nr = "__reactEvents$" + _n, fp = "__reactListeners$" + _n, sp = "__reactHandles$" + _n, Hf = "__reactResources$" + _n, Ma = "__reactMarker$" + _n;
  function Ur(t) {
    delete t[ce], delete t[he], delete t[Nr], delete t[fp], delete t[sp];
  }
  function Ml(t) {
    var e = t[ce];
    if (e) return e;
    for (var n = t.parentNode; n; ) {
      if (e = n[_l] || n[ce]) {
        if (n = e.alternate, e.child !== null || n !== null && n.child !== null)
          for (t = Ih(t); t !== null; ) {
            if (n = t[ce]) return n;
            t = Ih(t);
          }
        return e;
      }
      t = n, n = t.parentNode;
    }
    return null;
  }
  function Dl(t) {
    if (t = t[ce] || t[_l]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function Da(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(f(33));
  }
  function zl(t) {
    var e = t[Hf];
    return e || (e = t[Hf] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function Pt(t) {
    t[Ma] = !0;
  }
  var qf = /* @__PURE__ */ new Set(), Yf = {};
  function tl(t, e) {
    Nl(t, e), Nl(t + "Capture", e);
  }
  function Nl(t, e) {
    for (Yf[t] = e, t = 0; t < e.length; t++)
      qf.add(e[t]);
  }
  var dp = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), jf = {}, Gf = {};
  function hp(t) {
    return rn.call(Gf, t) ? !0 : rn.call(jf, t) ? !1 : dp.test(t) ? Gf[t] = !0 : (jf[t] = !0, !1);
  }
  function Zu(t, e, n) {
    if (hp(e))
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
  var Br, kf;
  function Ul(t) {
    if (Br === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        Br = e && e[1] || "", kf = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Br + t + kf;
  }
  var wr = !1;
  function Hr(t, e) {
    if (!t || wr) return "";
    wr = !0;
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
                  var R = M;
                }
                Reflect.construct(t, [], Y);
              } else {
                try {
                  Y.call();
                } catch (M) {
                  R = M;
                }
                t.call(Y.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (M) {
                R = M;
              }
              (Y = t()) && typeof Y.catch == "function" && Y.catch(function() {
              });
            }
          } catch (M) {
            if (M && R && typeof M.stack == "string")
              return [M.stack, R.stack];
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
`), C = h.split(`
`);
        for (u = l = 0; l < v.length && !v[l].includes("DetermineComponentFrameRoot"); )
          l++;
        for (; u < C.length && !C[u].includes(
          "DetermineComponentFrameRoot"
        ); )
          u++;
        if (l === v.length || u === C.length)
          for (l = v.length - 1, u = C.length - 1; 1 <= l && 0 <= u && v[l] !== C[u]; )
            u--;
        for (; 1 <= l && 0 <= u; l--, u--)
          if (v[l] !== C[u]) {
            if (l !== 1 || u !== 1)
              do
                if (l--, u--, 0 > u || v[l] !== C[u]) {
                  var B = `
` + v[l].replace(" at new ", " at ");
                  return t.displayName && B.includes("<anonymous>") && (B = B.replace("<anonymous>", t.displayName)), B;
                }
              while (1 <= l && 0 <= u);
            break;
          }
      }
    } finally {
      wr = !1, Error.prepareStackTrace = n;
    }
    return (n = t ? t.displayName || t.name : "") ? Ul(n) : "";
  }
  function mp(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Ul(t.type);
      case 16:
        return Ul("Lazy");
      case 13:
        return Ul("Suspense");
      case 19:
        return Ul("SuspenseList");
      case 0:
      case 15:
        return Hr(t.type, !1);
      case 11:
        return Hr(t.type.render, !1);
      case 1:
        return Hr(t.type, !0);
      case 31:
        return Ul("Activity");
      default:
        return "";
    }
  }
  function Lf(t) {
    try {
      var e = "";
      do
        e += mp(t), t = t.return;
      while (t);
      return e;
    } catch (n) {
      return `
Error generating stack: ` + n.message + `
` + n.stack;
    }
  }
  function ze(t) {
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
  function Xf(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function pp(t) {
    var e = Xf(t) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(
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
    t._valueTracker || (t._valueTracker = pp(t));
  }
  function Qf(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(), l = "";
    return t && (l = Xf(t) ? t.checked ? "true" : "false" : t.value), t = l, t !== n ? (e.setValue(t), !0) : !1;
  }
  function Ju(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var yp = /[\n"\\]/g;
  function Ne(t) {
    return t.replace(
      yp,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function qr(t, e, n, l, u, r, s, h) {
    t.name = "", s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? t.type = s : t.removeAttribute("type"), e != null ? s === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + ze(e)) : t.value !== "" + ze(e) && (t.value = "" + ze(e)) : s !== "submit" && s !== "reset" || t.removeAttribute("value"), e != null ? Yr(t, s, ze(e)) : n != null ? Yr(t, s, ze(n)) : l != null && t.removeAttribute("value"), u == null && r != null && (t.defaultChecked = !!r), u != null && (t.checked = u && typeof u != "function" && typeof u != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? t.name = "" + ze(h) : t.removeAttribute("name");
  }
  function Vf(t, e, n, l, u, r, s, h) {
    if (r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (t.type = r), e != null || n != null) {
      if (!(r !== "submit" && r !== "reset" || e != null))
        return;
      n = n != null ? "" + ze(n) : "", e = e != null ? "" + ze(e) : n, h || e === t.value || (t.value = e), t.defaultValue = e;
    }
    l = l ?? u, l = typeof l != "function" && typeof l != "symbol" && !!l, t.checked = h ? t.checked : !!l, t.defaultChecked = !!l, s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (t.name = s);
  }
  function Yr(t, e, n) {
    e === "number" && Ju(t.ownerDocument) === t || t.defaultValue === "" + n || (t.defaultValue = "" + n);
  }
  function Bl(t, e, n, l) {
    if (t = t.options, e) {
      e = {};
      for (var u = 0; u < n.length; u++)
        e["$" + n[u]] = !0;
      for (n = 0; n < t.length; n++)
        u = e.hasOwnProperty("$" + t[n].value), t[n].selected !== u && (t[n].selected = u), u && l && (t[n].defaultSelected = !0);
    } else {
      for (n = "" + ze(n), e = null, u = 0; u < t.length; u++) {
        if (t[u].value === n) {
          t[u].selected = !0, l && (t[u].defaultSelected = !0);
          return;
        }
        e !== null || t[u].disabled || (e = t[u]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function Zf(t, e, n) {
    if (e != null && (e = "" + ze(e), e !== t.value && (t.value = e), n == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + ze(n) : "";
  }
  function Kf(t, e, n, l) {
    if (e == null) {
      if (l != null) {
        if (n != null) throw Error(f(92));
        if (D(l)) {
          if (1 < l.length) throw Error(f(93));
          l = l[0];
        }
        n = l;
      }
      n == null && (n = ""), e = n;
    }
    n = ze(e), t.defaultValue = n, l = t.textContent, l === n && l !== "" && l !== null && (t.value = l);
  }
  function wl(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var gp = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function $f(t, e, n) {
    var l = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? l ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : l ? t.setProperty(e, n) : typeof n != "number" || n === 0 || gp.has(e) ? e === "float" ? t.cssFloat = n : t[e] = ("" + n).trim() : t[e] = n + "px";
  }
  function Jf(t, e, n) {
    if (e != null && typeof e != "object")
      throw Error(f(62));
    if (t = t.style, n != null) {
      for (var l in n)
        !n.hasOwnProperty(l) || e != null && e.hasOwnProperty(l) || (l.indexOf("--") === 0 ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "");
      for (var u in e)
        l = e[u], e.hasOwnProperty(u) && n[u] !== l && $f(t, u, l);
    } else
      for (var r in e)
        e.hasOwnProperty(r) && $f(t, r, e[r]);
  }
  function jr(t) {
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
  var vp = /* @__PURE__ */ new Map([
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
  ]), bp = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Wu(t) {
    return bp.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  var Gr = null;
  function kr(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var Hl = null, ql = null;
  function Wf(t) {
    var e = Dl(t);
    if (e && (t = e.stateNode)) {
      var n = t[he] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (qr(
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
              'input[name="' + Ne(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < n.length; e++) {
              var l = n[e];
              if (l !== t && l.form === t.form) {
                var u = l[he] || null;
                if (!u) throw Error(f(90));
                qr(
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
              l = n[e], l.form === t.form && Qf(l);
          }
          break t;
        case "textarea":
          Zf(t, n.value, n.defaultValue);
          break t;
        case "select":
          e = n.value, e != null && Bl(t, !!n.multiple, e, !1);
      }
    }
  }
  var Lr = !1;
  function Ff(t, e, n) {
    if (Lr) return t(e, n);
    Lr = !0;
    try {
      var l = t(e);
      return l;
    } finally {
      if (Lr = !1, (Hl !== null || ql !== null) && (wi(), Hl && (e = Hl, t = ql, ql = Hl = null, Wf(e), t)))
        for (e = 0; e < t.length; e++) Wf(t[e]);
    }
  }
  function za(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var l = n[he] || null;
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
        f(231, e, typeof n)
      );
    return n;
  }
  var on = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Xr = !1;
  if (on)
    try {
      var Na = {};
      Object.defineProperty(Na, "passive", {
        get: function() {
          Xr = !0;
        }
      }), window.addEventListener("test", Na, Na), window.removeEventListener("test", Na, Na);
    } catch {
      Xr = !1;
    }
  var Mn = null, Qr = null, Fu = null;
  function Pf() {
    if (Fu) return Fu;
    var t, e = Qr, n = e.length, l, u = "value" in Mn ? Mn.value : Mn.textContent, r = u.length;
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
  function If() {
    return !1;
  }
  function me(t) {
    function e(n, l, u, r, s) {
      this._reactName = n, this._targetInst = u, this.type = l, this.nativeEvent = r, this.target = s, this.currentTarget = null;
      for (var h in t)
        t.hasOwnProperty(h) && (n = t[h], this[h] = n ? n(r) : r[h]);
      return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1) ? Iu : If, this.isPropagationStopped = If, this;
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
  }, ti = me(el), Ua = x({}, el, { view: 0, detail: 0 }), Sp = me(Ua), Vr, Zr, Ba, ei = x({}, Ua, {
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
    getModifierState: $r,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== Ba && (Ba && t.type === "mousemove" ? (Vr = t.screenX - Ba.screenX, Zr = t.screenY - Ba.screenY) : Zr = Vr = 0, Ba = t), Vr);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : Zr;
    }
  }), ts = me(ei), Tp = x({}, ei, { dataTransfer: 0 }), Ep = me(Tp), xp = x({}, Ua, { relatedTarget: 0 }), Kr = me(xp), Ap = x({}, el, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Cp = me(Ap), Op = x({}, el, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), Rp = me(Op), _p = x({}, el, { data: 0 }), es = me(_p), Mp = {
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
  }, Dp = {
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
  }, zp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Np(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = zp[t]) ? !!e[t] : !1;
  }
  function $r() {
    return Np;
  }
  var Up = x({}, Ua, {
    key: function(t) {
      if (t.key) {
        var e = Mp[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = Pu(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Dp[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: $r,
    charCode: function(t) {
      return t.type === "keypress" ? Pu(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? Pu(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), Bp = me(Up), wp = x({}, ei, {
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
  }), ns = me(wp), Hp = x({}, Ua, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: $r
  }), qp = me(Hp), Yp = x({}, el, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), jp = me(Yp), Gp = x({}, ei, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), kp = me(Gp), Lp = x({}, el, {
    newState: 0,
    oldState: 0
  }), Xp = me(Lp), Qp = [9, 13, 27, 32], Jr = on && "CompositionEvent" in window, wa = null;
  on && "documentMode" in document && (wa = document.documentMode);
  var Vp = on && "TextEvent" in window && !wa, ls = on && (!Jr || wa && 8 < wa && 11 >= wa), as = " ", us = !1;
  function is(t, e) {
    switch (t) {
      case "keyup":
        return Qp.indexOf(e.keyCode) !== -1;
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
  function rs(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var Yl = !1;
  function Zp(t, e) {
    switch (t) {
      case "compositionend":
        return rs(e);
      case "keypress":
        return e.which !== 32 ? null : (us = !0, as);
      case "textInput":
        return t = e.data, t === as && us ? null : t;
      default:
        return null;
    }
  }
  function Kp(t, e) {
    if (Yl)
      return t === "compositionend" || !Jr && is(t, e) ? (t = Pf(), Fu = Qr = Mn = null, Yl = !1, t) : null;
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
        return ls && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var $p = {
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
  function cs(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!$p[t.type] : e === "textarea";
  }
  function os(t, e, n, l) {
    Hl ? ql ? ql.push(l) : ql = [l] : Hl = l, e = ki(e, "onChange"), 0 < e.length && (n = new ti(
      "onChange",
      "change",
      null,
      n,
      l
    ), t.push({ event: n, listeners: e }));
  }
  var Ha = null, qa = null;
  function Jp(t) {
    Xh(t, 0);
  }
  function ni(t) {
    var e = Da(t);
    if (Qf(e)) return t;
  }
  function fs(t, e) {
    if (t === "change") return e;
  }
  var ss = !1;
  if (on) {
    var Wr;
    if (on) {
      var Fr = "oninput" in document;
      if (!Fr) {
        var ds = document.createElement("div");
        ds.setAttribute("oninput", "return;"), Fr = typeof ds.oninput == "function";
      }
      Wr = Fr;
    } else Wr = !1;
    ss = Wr && (!document.documentMode || 9 < document.documentMode);
  }
  function hs() {
    Ha && (Ha.detachEvent("onpropertychange", ms), qa = Ha = null);
  }
  function ms(t) {
    if (t.propertyName === "value" && ni(qa)) {
      var e = [];
      os(
        e,
        qa,
        t,
        kr(t)
      ), Ff(Jp, e);
    }
  }
  function Wp(t, e, n) {
    t === "focusin" ? (hs(), Ha = e, qa = n, Ha.attachEvent("onpropertychange", ms)) : t === "focusout" && hs();
  }
  function Fp(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return ni(qa);
  }
  function Pp(t, e) {
    if (t === "click") return ni(e);
  }
  function Ip(t, e) {
    if (t === "input" || t === "change")
      return ni(e);
  }
  function ty(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var Te = typeof Object.is == "function" ? Object.is : ty;
  function Ya(t, e) {
    if (Te(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var n = Object.keys(t), l = Object.keys(e);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var u = n[l];
      if (!rn.call(e, u) || !Te(t[u], e[u]))
        return !1;
    }
    return !0;
  }
  function ps(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function ys(t, e) {
    var n = ps(t);
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
      n = ps(n);
    }
  }
  function gs(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? gs(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function vs(t) {
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
  function Pr(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var ey = on && "documentMode" in document && 11 >= document.documentMode, jl = null, Ir = null, ja = null, tc = !1;
  function bs(t, e, n) {
    var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    tc || jl == null || jl !== Ju(l) || (l = jl, "selectionStart" in l && Pr(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), ja && Ya(ja, l) || (ja = l, l = ki(Ir, "onSelect"), 0 < l.length && (e = new ti(
      "onSelect",
      "select",
      null,
      e,
      n
    ), t.push({ event: e, listeners: l }), e.target = jl)));
  }
  function nl(t, e) {
    var n = {};
    return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n;
  }
  var Gl = {
    animationend: nl("Animation", "AnimationEnd"),
    animationiteration: nl("Animation", "AnimationIteration"),
    animationstart: nl("Animation", "AnimationStart"),
    transitionrun: nl("Transition", "TransitionRun"),
    transitionstart: nl("Transition", "TransitionStart"),
    transitioncancel: nl("Transition", "TransitionCancel"),
    transitionend: nl("Transition", "TransitionEnd")
  }, ec = {}, Ss = {};
  on && (Ss = document.createElement("div").style, "AnimationEvent" in window || (delete Gl.animationend.animation, delete Gl.animationiteration.animation, delete Gl.animationstart.animation), "TransitionEvent" in window || delete Gl.transitionend.transition);
  function ll(t) {
    if (ec[t]) return ec[t];
    if (!Gl[t]) return t;
    var e = Gl[t], n;
    for (n in e)
      if (e.hasOwnProperty(n) && n in Ss)
        return ec[t] = e[n];
    return t;
  }
  var Ts = ll("animationend"), Es = ll("animationiteration"), xs = ll("animationstart"), ny = ll("transitionrun"), ly = ll("transitionstart"), ay = ll("transitioncancel"), As = ll("transitionend"), Cs = /* @__PURE__ */ new Map(), nc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  nc.push("scrollEnd");
  function Xe(t, e) {
    Cs.set(t, e), tl(e, [t]);
  }
  var Os = /* @__PURE__ */ new WeakMap();
  function Ue(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = Os.get(t);
      return n !== void 0 ? n : (e = {
        value: t,
        source: e,
        stack: Lf(e)
      }, Os.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: Lf(e)
    };
  }
  var Be = [], kl = 0, lc = 0;
  function li() {
    for (var t = kl, e = lc = kl = 0; e < t; ) {
      var n = Be[e];
      Be[e++] = null;
      var l = Be[e];
      Be[e++] = null;
      var u = Be[e];
      Be[e++] = null;
      var r = Be[e];
      if (Be[e++] = null, l !== null && u !== null) {
        var s = l.pending;
        s === null ? u.next = u : (u.next = s.next, s.next = u), l.pending = u;
      }
      r !== 0 && Rs(n, u, r);
    }
  }
  function ai(t, e, n, l) {
    Be[kl++] = t, Be[kl++] = e, Be[kl++] = n, Be[kl++] = l, lc |= l, t.lanes |= l, t = t.alternate, t !== null && (t.lanes |= l);
  }
  function ac(t, e, n, l) {
    return ai(t, e, n, l), ui(t);
  }
  function Ll(t, e) {
    return ai(t, null, null, e), ui(t);
  }
  function Rs(t, e, n) {
    t.lanes |= n;
    var l = t.alternate;
    l !== null && (l.lanes |= n);
    for (var u = !1, r = t.return; r !== null; )
      r.childLanes |= n, l = r.alternate, l !== null && (l.childLanes |= n), r.tag === 22 && (t = r.stateNode, t === null || t._visibility & 1 || (u = !0)), t = r, r = r.return;
    return t.tag === 3 ? (r = t.stateNode, u && e !== null && (u = 31 - Se(n), t = r.hiddenUpdates, l = t[u], l === null ? t[u] = [e] : l.push(e), e.lane = n | 536870912), r) : null;
  }
  function ui(t) {
    if (50 < fu)
      throw fu = 0, fo = null, Error(f(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Xl = {};
  function uy(t, e, n, l) {
    this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ee(t, e, n, l) {
    return new uy(t, e, n, l);
  }
  function uc(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function fn(t, e) {
    var n = t.alternate;
    return n === null ? (n = Ee(
      t.tag,
      e,
      t.key,
      t.mode
    ), n.elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = t.flags & 65011712, n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n.refCleanup = t.refCleanup, n;
  }
  function _s(t, e) {
    t.flags &= 65011714;
    var n = t.alternate;
    return n === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = n.childLanes, t.lanes = n.lanes, t.child = n.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = n.memoizedProps, t.memoizedState = n.memoizedState, t.updateQueue = n.updateQueue, t.type = n.type, e = n.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function ii(t, e, n, l, u, r) {
    var s = 0;
    if (l = t, typeof t == "function") uc(t) && (s = 1);
    else if (typeof t == "string")
      s = rg(
        t,
        n,
        lt.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case st:
          return t = Ee(31, n, e, u), t.elementType = st, t.lanes = r, t;
        case O:
          return al(n.children, u, r, e);
        case k:
          s = 8, u |= 24;
          break;
        case K:
          return t = Ee(12, n, e, u | 2), t.elementType = K, t.lanes = r, t;
        case w:
          return t = Ee(13, n, e, u), t.elementType = w, t.lanes = r, t;
        case Z:
          return t = Ee(19, n, e, u), t.elementType = Z, t.lanes = r, t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case P:
              case X:
                s = 10;
                break t;
              case J:
                s = 9;
                break t;
              case et:
                s = 11;
                break t;
              case ot:
                s = 14;
                break t;
              case at:
                s = 16, l = null;
                break t;
            }
          s = 29, n = Error(
            f(130, t === null ? "null" : typeof t, "")
          ), l = null;
      }
    return e = Ee(s, n, e, u), e.elementType = t, e.type = l, e.lanes = r, e;
  }
  function al(t, e, n, l) {
    return t = Ee(7, t, l, e), t.lanes = n, t;
  }
  function ic(t, e, n) {
    return t = Ee(6, t, null, e), t.lanes = n, t;
  }
  function rc(t, e, n) {
    return e = Ee(
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
  var Ql = [], Vl = 0, ri = null, ci = 0, we = [], He = 0, ul = null, sn = 1, dn = "";
  function il(t, e) {
    Ql[Vl++] = ci, Ql[Vl++] = ri, ri = t, ci = e;
  }
  function Ms(t, e, n) {
    we[He++] = sn, we[He++] = dn, we[He++] = ul, ul = t;
    var l = sn;
    t = dn;
    var u = 32 - Se(l) - 1;
    l &= ~(1 << u), n += 1;
    var r = 32 - Se(e) + u;
    if (30 < r) {
      var s = u - u % 5;
      r = (l & (1 << s) - 1).toString(32), l >>= s, u -= s, sn = 1 << 32 - Se(e) + u | n << u | l, dn = r + t;
    } else
      sn = 1 << r | n << u | l, dn = t;
  }
  function cc(t) {
    t.return !== null && (il(t, 1), Ms(t, 1, 0));
  }
  function oc(t) {
    for (; t === ri; )
      ri = Ql[--Vl], Ql[Vl] = null, ci = Ql[--Vl], Ql[Vl] = null;
    for (; t === ul; )
      ul = we[--He], we[He] = null, dn = we[--He], we[He] = null, sn = we[--He], we[He] = null;
  }
  var de = null, Gt = null, Tt = !1, rl = null, Je = !1, fc = Error(f(519));
  function cl(t) {
    var e = Error(f(418, ""));
    throw La(Ue(e, t)), fc;
  }
  function Ds(t) {
    var e = t.stateNode, n = t.type, l = t.memoizedProps;
    switch (e[ce] = t, e[he] = l, n) {
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
        yt("invalid", e), Vf(
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
        yt("invalid", e), Kf(e, l.value, l.defaultValue, l.children), $u(e);
    }
    n = l.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || e.textContent === "" + n || l.suppressHydrationWarning === !0 || Kh(e.textContent, n) ? (l.popover != null && (yt("beforetoggle", e), yt("toggle", e)), l.onScroll != null && yt("scroll", e), l.onScrollEnd != null && yt("scrollend", e), l.onClick != null && (e.onclick = Li), e = !0) : e = !1, e || cl(t);
  }
  function zs(t) {
    for (de = t.return; de; )
      switch (de.tag) {
        case 5:
        case 13:
          Je = !1;
          return;
        case 27:
        case 3:
          Je = !0;
          return;
        default:
          de = de.return;
      }
  }
  function Ga(t) {
    if (t !== de) return !1;
    if (!Tt) return zs(t), Tt = !0, !1;
    var e = t.tag, n;
    if ((n = e !== 3 && e !== 27) && ((n = e === 5) && (n = t.type, n = !(n !== "form" && n !== "button") || Ro(t.type, t.memoizedProps)), n = !n), n && Gt && cl(t), zs(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(f(317));
      t: {
        for (t = t.nextSibling, e = 0; t; ) {
          if (t.nodeType === 8)
            if (n = t.data, n === "/$") {
              if (e === 0) {
                Gt = Ve(t.nextSibling);
                break t;
              }
              e--;
            } else
              n !== "$" && n !== "$!" && n !== "$?" || e++;
          t = t.nextSibling;
        }
        Gt = null;
      }
    } else
      e === 27 ? (e = Gt, Vn(t.type) ? (t = zo, zo = null, Gt = t) : Gt = e) : Gt = de ? Ve(t.stateNode.nextSibling) : null;
    return !0;
  }
  function ka() {
    Gt = de = null, Tt = !1;
  }
  function Ns() {
    var t = rl;
    return t !== null && (ge === null ? ge = t : ge.push.apply(
      ge,
      t
    ), rl = null), t;
  }
  function La(t) {
    rl === null ? rl = [t] : rl.push(t);
  }
  var sc = q(null), ol = null, hn = null;
  function Dn(t, e, n) {
    V(sc, e._currentValue), e._currentValue = n;
  }
  function mn(t) {
    t._currentValue = sc.current, F(sc);
  }
  function dc(t, e, n) {
    for (; t !== null; ) {
      var l = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, l !== null && (l.childLanes |= e)) : l !== null && (l.childLanes & e) !== e && (l.childLanes |= e), t === n) break;
      t = t.return;
    }
  }
  function hc(t, e, n, l) {
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
              r.lanes |= n, h = r.alternate, h !== null && (h.lanes |= n), dc(
                r.return,
                n,
                t
              ), l || (s = null);
              break t;
            }
          r = h.next;
        }
      } else if (u.tag === 18) {
        if (s = u.return, s === null) throw Error(f(341));
        s.lanes |= n, r = s.alternate, r !== null && (r.lanes |= n), dc(s, n, t), s = null;
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
        if (s === null) throw Error(f(387));
        if (s = s.memoizedProps, s !== null) {
          var h = u.type;
          Te(u.pendingProps.value, s.value) || (t !== null ? t.push(h) : t = [h]);
        }
      } else if (u === ne.current) {
        if (s = u.alternate, s === null) throw Error(f(387));
        s.memoizedState.memoizedState !== u.memoizedState.memoizedState && (t !== null ? t.push(vu) : t = [vu]);
      }
      u = u.return;
    }
    t !== null && hc(
      e,
      t,
      n,
      l
    ), e.flags |= 262144;
  }
  function oi(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Te(
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
  function oe(t) {
    return Us(ol, t);
  }
  function fi(t, e) {
    return ol === null && fl(t), Us(t, e);
  }
  function Us(t, e) {
    var n = e._currentValue;
    if (e = { context: e, memoizedValue: n, next: null }, hn === null) {
      if (t === null) throw Error(f(308));
      hn = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else hn = hn.next = e;
    return n;
  }
  var iy = typeof AbortController < "u" ? AbortController : function() {
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
  }, ry = i.unstable_scheduleCallback, cy = i.unstable_NormalPriority, Wt = {
    $$typeof: X,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function mc() {
    return {
      controller: new iy(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Qa(t) {
    t.refCount--, t.refCount === 0 && ry(cy, function() {
      t.controller.abort();
    });
  }
  var Va = null, pc = 0, Zl = 0, Kl = null;
  function oy(t, e) {
    if (Va === null) {
      var n = Va = [];
      pc = 0, Zl = vo(), Kl = {
        status: "pending",
        value: void 0,
        then: function(l) {
          n.push(l);
        }
      };
    }
    return pc++, e.then(Bs, Bs), e;
  }
  function Bs() {
    if (--pc === 0 && Va !== null) {
      Kl !== null && (Kl.status = "fulfilled");
      var t = Va;
      Va = null, Zl = 0, Kl = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function fy(t, e) {
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
  var ws = G.S;
  G.S = function(t, e) {
    typeof e == "object" && e !== null && typeof e.then == "function" && oy(t, e), ws !== null && ws(t, e);
  };
  var sl = q(null);
  function yc() {
    var t = sl.current;
    return t !== null ? t : Ht.pooledCache;
  }
  function si(t, e) {
    e === null ? V(sl, sl.current) : V(sl, e.pool);
  }
  function Hs() {
    var t = yc();
    return t === null ? null : { parent: Wt._currentValue, pool: t };
  }
  var Za = Error(f(460)), qs = Error(f(474)), di = Error(f(542)), gc = { then: function() {
  } };
  function Ys(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function hi() {
  }
  function js(t, e, n) {
    switch (n = t[n], n === void 0 ? t.push(e) : n !== e && (e.then(hi, hi), e = n), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, ks(t), t;
      default:
        if (typeof e.status == "string") e.then(hi, hi);
        else {
          if (t = Ht, t !== null && 100 < t.shellSuspendCounter)
            throw Error(f(482));
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
            throw t = e.reason, ks(t), t;
        }
        throw Ka = e, Za;
    }
  }
  var Ka = null;
  function Gs() {
    if (Ka === null) throw Error(f(459));
    var t = Ka;
    return Ka = null, t;
  }
  function ks(t) {
    if (t === Za || t === di)
      throw Error(f(483));
  }
  var zn = !1;
  function vc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function bc(t, e) {
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
    if (l = l.shared, (Ct & 2) !== 0) {
      var u = l.pending;
      return u === null ? e.next = e : (e.next = u.next, u.next = e), l.pending = e, e = ui(t), Rs(t, null, n), e;
    }
    return ai(t, l, e, n), ui(t);
  }
  function $a(t, e, n) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194048) !== 0)) {
      var l = e.lanes;
      l &= t.pendingLanes, n |= l, e.lanes = n, Bf(t, n);
    }
  }
  function Sc(t, e) {
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
  var Tc = !1;
  function Ja() {
    if (Tc) {
      var t = Kl;
      if (t !== null) throw t;
    }
  }
  function Wa(t, e, n, l) {
    Tc = !1;
    var u = t.updateQueue;
    zn = !1;
    var r = u.firstBaseUpdate, s = u.lastBaseUpdate, h = u.shared.pending;
    if (h !== null) {
      u.shared.pending = null;
      var v = h, C = v.next;
      v.next = null, s === null ? r = C : s.next = C, s = v;
      var B = t.alternate;
      B !== null && (B = B.updateQueue, h = B.lastBaseUpdate, h !== s && (h === null ? B.firstBaseUpdate = C : h.next = C, B.lastBaseUpdate = v));
    }
    if (r !== null) {
      var Y = u.baseState;
      s = 0, B = C = v = null, h = r;
      do {
        var R = h.lane & -536870913, M = R !== h.lane;
        if (M ? (vt & R) === R : (l & R) === R) {
          R !== 0 && R === Zl && (Tc = !0), B !== null && (B = B.next = {
            lane: 0,
            tag: h.tag,
            payload: h.payload,
            callback: null,
            next: null
          });
          t: {
            var ct = t, ut = h;
            R = e;
            var Nt = n;
            switch (ut.tag) {
              case 1:
                if (ct = ut.payload, typeof ct == "function") {
                  Y = ct.call(Nt, Y, R);
                  break t;
                }
                Y = ct;
                break t;
              case 3:
                ct.flags = ct.flags & -65537 | 128;
              case 0:
                if (ct = ut.payload, R = typeof ct == "function" ? ct.call(Nt, Y, R) : ct, R == null) break t;
                Y = x({}, Y, R);
                break t;
              case 2:
                zn = !0;
            }
          }
          R = h.callback, R !== null && (t.flags |= 64, M && (t.flags |= 8192), M = u.callbacks, M === null ? u.callbacks = [R] : M.push(R));
        } else
          M = {
            lane: R,
            tag: h.tag,
            payload: h.payload,
            callback: h.callback,
            next: null
          }, B === null ? (C = B = M, v = Y) : B = B.next = M, s |= R;
        if (h = h.next, h === null) {
          if (h = u.shared.pending, h === null)
            break;
          M = h, h = M.next, M.next = null, u.lastBaseUpdate = M, u.shared.pending = null;
        }
      } while (!0);
      B === null && (v = Y), u.baseState = v, u.firstBaseUpdate = C, u.lastBaseUpdate = B, r === null && (u.shared.lanes = 0), kn |= s, t.lanes = s, t.memoizedState = Y;
    }
  }
  function Ls(t, e) {
    if (typeof t != "function")
      throw Error(f(191, t));
    t.call(e);
  }
  function Xs(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++)
        Ls(n[t], e);
  }
  var $l = q(null), mi = q(0);
  function Qs(t, e) {
    t = Tn, V(mi, t), V($l, e), Tn = t | e.baseLanes;
  }
  function Ec() {
    V(mi, Tn), V($l, $l.current);
  }
  function xc() {
    Tn = mi.current, F($l), F(mi);
  }
  var Bn = 0, ht = null, Dt = null, Kt = null, pi = !1, Jl = !1, dl = !1, yi = 0, Fa = 0, Wl = null, sy = 0;
  function Qt() {
    throw Error(f(321));
  }
  function Ac(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!Te(t[n], e[n])) return !1;
    return !0;
  }
  function Cc(t, e, n, l, u, r) {
    return Bn = r, ht = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, G.H = t === null || t.memoizedState === null ? Rd : _d, dl = !1, r = n(l, u), dl = !1, Jl && (r = Zs(
      e,
      n,
      l,
      u
    )), Vs(t), r;
  }
  function Vs(t) {
    G.H = Ei;
    var e = Dt !== null && Dt.next !== null;
    if (Bn = 0, Kt = Dt = ht = null, pi = !1, Fa = 0, Wl = null, e) throw Error(f(300));
    t === null || It || (t = t.dependencies, t !== null && oi(t) && (It = !0));
  }
  function Zs(t, e, n, l) {
    ht = t;
    var u = 0;
    do {
      if (Jl && (Wl = null), Fa = 0, Jl = !1, 25 <= u) throw Error(f(301));
      if (u += 1, Kt = Dt = null, t.updateQueue != null) {
        var r = t.updateQueue;
        r.lastEffect = null, r.events = null, r.stores = null, r.memoCache != null && (r.memoCache.index = 0);
      }
      G.H = vy, r = e(n, l);
    } while (Jl);
    return r;
  }
  function dy() {
    var t = G.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? Pa(e) : e, t = t.useState()[0], (Dt !== null ? Dt.memoizedState : null) !== t && (ht.flags |= 1024), e;
  }
  function Oc() {
    var t = yi !== 0;
    return yi = 0, t;
  }
  function Rc(t, e, n) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~n;
  }
  function _c(t) {
    if (pi) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      pi = !1;
    }
    Bn = 0, Kt = Dt = ht = null, Jl = !1, Fa = yi = 0, Wl = null;
  }
  function pe() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Kt === null ? ht.memoizedState = Kt = t : Kt = Kt.next = t, Kt;
  }
  function $t() {
    if (Dt === null) {
      var t = ht.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Dt.next;
    var e = Kt === null ? ht.memoizedState : Kt.next;
    if (e !== null)
      Kt = e, Dt = t;
    else {
      if (t === null)
        throw ht.alternate === null ? Error(f(467)) : Error(f(310));
      Dt = t, t = {
        memoizedState: Dt.memoizedState,
        baseState: Dt.baseState,
        baseQueue: Dt.baseQueue,
        queue: Dt.queue,
        next: null
      }, Kt === null ? ht.memoizedState = Kt = t : Kt = Kt.next = t;
    }
    return Kt;
  }
  function Mc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Pa(t) {
    var e = Fa;
    return Fa += 1, Wl === null && (Wl = []), t = js(Wl, t, e), e = ht, (Kt === null ? e.memoizedState : Kt.next) === null && (e = e.alternate, G.H = e === null || e.memoizedState === null ? Rd : _d), t;
  }
  function gi(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Pa(t);
      if (t.$$typeof === X) return oe(t);
    }
    throw Error(f(438, String(t)));
  }
  function Dc(t) {
    var e = null, n = ht.updateQueue;
    if (n !== null && (e = n.memoCache), e == null) {
      var l = ht.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (e = {
        data: l.data.map(function(u) {
          return u.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = { data: [], index: 0 }), n === null && (n = Mc(), ht.updateQueue = n), n.memoCache = e, n = e.data[e.index], n === void 0)
      for (n = e.data[e.index] = Array(t), l = 0; l < t; l++)
        n[l] = dt;
    return e.index++, n;
  }
  function pn(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function vi(t) {
    var e = $t();
    return zc(e, Dt, t);
  }
  function zc(t, e, n) {
    var l = t.queue;
    if (l === null) throw Error(f(311));
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
      var h = s = null, v = null, C = e, B = !1;
      do {
        var Y = C.lane & -536870913;
        if (Y !== C.lane ? (vt & Y) === Y : (Bn & Y) === Y) {
          var R = C.revertLane;
          if (R === 0)
            v !== null && (v = v.next = {
              lane: 0,
              revertLane: 0,
              action: C.action,
              hasEagerState: C.hasEagerState,
              eagerState: C.eagerState,
              next: null
            }), Y === Zl && (B = !0);
          else if ((Bn & R) === R) {
            C = C.next, R === Zl && (B = !0);
            continue;
          } else
            Y = {
              lane: 0,
              revertLane: C.revertLane,
              action: C.action,
              hasEagerState: C.hasEagerState,
              eagerState: C.eagerState,
              next: null
            }, v === null ? (h = v = Y, s = r) : v = v.next = Y, ht.lanes |= R, kn |= R;
          Y = C.action, dl && n(r, Y), r = C.hasEagerState ? C.eagerState : n(r, Y);
        } else
          R = {
            lane: Y,
            revertLane: C.revertLane,
            action: C.action,
            hasEagerState: C.hasEagerState,
            eagerState: C.eagerState,
            next: null
          }, v === null ? (h = v = R, s = r) : v = v.next = R, ht.lanes |= Y, kn |= Y;
        C = C.next;
      } while (C !== null && C !== e);
      if (v === null ? s = r : v.next = h, !Te(r, t.memoizedState) && (It = !0, B && (n = Kl, n !== null)))
        throw n;
      t.memoizedState = r, t.baseState = s, t.baseQueue = v, l.lastRenderedState = r;
    }
    return u === null && (l.lanes = 0), [t.memoizedState, l.dispatch];
  }
  function Nc(t) {
    var e = $t(), n = e.queue;
    if (n === null) throw Error(f(311));
    n.lastRenderedReducer = t;
    var l = n.dispatch, u = n.pending, r = e.memoizedState;
    if (u !== null) {
      n.pending = null;
      var s = u = u.next;
      do
        r = t(r, s.action), s = s.next;
      while (s !== u);
      Te(r, e.memoizedState) || (It = !0), e.memoizedState = r, e.baseQueue === null && (e.baseState = r), n.lastRenderedState = r;
    }
    return [r, l];
  }
  function Ks(t, e, n) {
    var l = ht, u = $t(), r = Tt;
    if (r) {
      if (n === void 0) throw Error(f(407));
      n = n();
    } else n = e();
    var s = !Te(
      (Dt || u).memoizedState,
      n
    );
    s && (u.memoizedState = n, It = !0), u = u.queue;
    var h = Ws.bind(null, l, u, t);
    if (Ia(2048, 8, h, [t]), u.getSnapshot !== e || s || Kt !== null && Kt.memoizedState.tag & 1) {
      if (l.flags |= 2048, Fl(
        9,
        bi(),
        Js.bind(
          null,
          l,
          u,
          n,
          e
        ),
        null
      ), Ht === null) throw Error(f(349));
      r || (Bn & 124) !== 0 || $s(l, e, n);
    }
    return n;
  }
  function $s(t, e, n) {
    t.flags |= 16384, t = { getSnapshot: e, value: n }, e = ht.updateQueue, e === null ? (e = Mc(), ht.updateQueue = e, e.stores = [t]) : (n = e.stores, n === null ? e.stores = [t] : n.push(t));
  }
  function Js(t, e, n, l) {
    e.value = n, e.getSnapshot = l, Fs(e) && Ps(t);
  }
  function Ws(t, e, n) {
    return n(function() {
      Fs(e) && Ps(t);
    });
  }
  function Fs(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !Te(t, n);
    } catch {
      return !0;
    }
  }
  function Ps(t) {
    var e = Ll(t, 2);
    e !== null && Re(e, t, 2);
  }
  function Uc(t) {
    var e = pe();
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
  function Is(t, e, n, l) {
    return t.baseState = n, zc(
      t,
      Dt,
      typeof l == "function" ? l : pn
    );
  }
  function hy(t, e, n, l, u) {
    if (Ti(t)) throw Error(f(485));
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
      G.T !== null ? n(!0) : r.isTransition = !1, l(r), n = e.pending, n === null ? (r.next = e.pending = r, td(e, r)) : (r.next = n.next, e.pending = n.next = r);
    }
  }
  function td(t, e) {
    var n = e.action, l = e.payload, u = t.state;
    if (e.isTransition) {
      var r = G.T, s = {};
      G.T = s;
      try {
        var h = n(u, l), v = G.S;
        v !== null && v(s, h), ed(t, e, h);
      } catch (C) {
        Bc(t, e, C);
      } finally {
        G.T = r;
      }
    } else
      try {
        r = n(u, l), ed(t, e, r);
      } catch (C) {
        Bc(t, e, C);
      }
  }
  function ed(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(l) {
        nd(t, e, l);
      },
      function(l) {
        return Bc(t, e, l);
      }
    ) : nd(t, e, n);
  }
  function nd(t, e, n) {
    e.status = "fulfilled", e.value = n, ld(e), t.state = n, e = t.pending, e !== null && (n = e.next, n === e ? t.pending = null : (n = n.next, e.next = n, td(t, n)));
  }
  function Bc(t, e, n) {
    var l = t.pending;
    if (t.pending = null, l !== null) {
      l = l.next;
      do
        e.status = "rejected", e.reason = n, ld(e), e = e.next;
      while (e !== l);
    }
    t.action = null;
  }
  function ld(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function ad(t, e) {
    return e;
  }
  function ud(t, e) {
    if (Tt) {
      var n = Ht.formState;
      if (n !== null) {
        t: {
          var l = ht;
          if (Tt) {
            if (Gt) {
              e: {
                for (var u = Gt, r = Je; u.nodeType !== 8; ) {
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
                Gt = Ve(
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
    return n = pe(), n.memoizedState = n.baseState = e, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ad,
      lastRenderedState: e
    }, n.queue = l, n = Ad.bind(
      null,
      ht,
      l
    ), l.dispatch = n, l = Uc(!1), r = jc.bind(
      null,
      ht,
      !1,
      l.queue
    ), l = pe(), u = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, l.queue = u, n = hy.bind(
      null,
      ht,
      u,
      r,
      n
    ), u.dispatch = n, l.memoizedState = t, [e, n, !1];
  }
  function id(t) {
    var e = $t();
    return rd(e, Dt, t);
  }
  function rd(t, e, n) {
    if (e = zc(
      t,
      e,
      ad
    )[0], t = vi(pn)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var l = Pa(e);
      } catch (s) {
        throw s === Za ? di : s;
      }
    else l = e;
    e = $t();
    var u = e.queue, r = u.dispatch;
    return n !== e.memoizedState && (ht.flags |= 2048, Fl(
      9,
      bi(),
      my.bind(null, u, n),
      null
    )), [l, r, t];
  }
  function my(t, e) {
    t.action = e;
  }
  function cd(t) {
    var e = $t(), n = Dt;
    if (n !== null)
      return rd(e, n, t);
    $t(), e = e.memoizedState, n = $t();
    var l = n.queue.dispatch;
    return n.memoizedState = t, [e, l, !1];
  }
  function Fl(t, e, n, l) {
    return t = { tag: t, create: n, deps: l, inst: e, next: null }, e = ht.updateQueue, e === null && (e = Mc(), ht.updateQueue = e), n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (l = n.next, n.next = t, t.next = l, e.lastEffect = t), t;
  }
  function bi() {
    return { destroy: void 0, resource: void 0 };
  }
  function od() {
    return $t().memoizedState;
  }
  function Si(t, e, n, l) {
    var u = pe();
    l = l === void 0 ? null : l, ht.flags |= t, u.memoizedState = Fl(
      1 | e,
      bi(),
      n,
      l
    );
  }
  function Ia(t, e, n, l) {
    var u = $t();
    l = l === void 0 ? null : l;
    var r = u.memoizedState.inst;
    Dt !== null && l !== null && Ac(l, Dt.memoizedState.deps) ? u.memoizedState = Fl(e, r, n, l) : (ht.flags |= t, u.memoizedState = Fl(
      1 | e,
      r,
      n,
      l
    ));
  }
  function fd(t, e) {
    Si(8390656, 8, t, e);
  }
  function sd(t, e) {
    Ia(2048, 8, t, e);
  }
  function dd(t, e) {
    return Ia(4, 2, t, e);
  }
  function hd(t, e) {
    return Ia(4, 4, t, e);
  }
  function md(t, e) {
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
  function pd(t, e, n) {
    n = n != null ? n.concat([t]) : null, Ia(4, 4, md.bind(null, e, t), n);
  }
  function wc() {
  }
  function yd(t, e) {
    var n = $t();
    e = e === void 0 ? null : e;
    var l = n.memoizedState;
    return e !== null && Ac(e, l[1]) ? l[0] : (n.memoizedState = [t, e], t);
  }
  function gd(t, e) {
    var n = $t();
    e = e === void 0 ? null : e;
    var l = n.memoizedState;
    if (e !== null && Ac(e, l[1]))
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
  function Hc(t, e, n) {
    return n === void 0 || (Bn & 1073741824) !== 0 ? t.memoizedState = e : (t.memoizedState = n, t = Sh(), ht.lanes |= t, kn |= t, n);
  }
  function vd(t, e, n, l) {
    return Te(n, e) ? n : $l.current !== null ? (t = Hc(t, n, l), Te(t, e) || (It = !0), t) : (Bn & 42) === 0 ? (It = !0, t.memoizedState = n) : (t = Sh(), ht.lanes |= t, kn |= t, e);
  }
  function bd(t, e, n, l, u) {
    var r = Q.p;
    Q.p = r !== 0 && 8 > r ? r : 8;
    var s = G.T, h = {};
    G.T = h, jc(t, !1, e, n);
    try {
      var v = u(), C = G.S;
      if (C !== null && C(h, v), v !== null && typeof v == "object" && typeof v.then == "function") {
        var B = fy(
          v,
          l
        );
        tu(
          t,
          e,
          B,
          Oe(t)
        );
      } else
        tu(
          t,
          e,
          l,
          Oe(t)
        );
    } catch (Y) {
      tu(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: Y },
        Oe()
      );
    } finally {
      Q.p = r, G.T = s;
    }
  }
  function py() {
  }
  function qc(t, e, n, l) {
    if (t.tag !== 5) throw Error(f(476));
    var u = Sd(t).queue;
    bd(
      t,
      u,
      e,
      gt,
      n === null ? py : function() {
        return Td(t), n(l);
      }
    );
  }
  function Sd(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: gt,
      baseState: gt,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: pn,
        lastRenderedState: gt
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
  function Td(t) {
    var e = Sd(t).next.queue;
    tu(t, e, {}, Oe());
  }
  function Yc() {
    return oe(vu);
  }
  function Ed() {
    return $t().memoizedState;
  }
  function xd() {
    return $t().memoizedState;
  }
  function yy(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = Oe();
          t = Nn(n);
          var l = Un(e, t, n);
          l !== null && (Re(l, e, n), $a(l, e, n)), e = { cache: mc() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function gy(t, e, n) {
    var l = Oe();
    n = {
      lane: l,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ti(t) ? Cd(e, n) : (n = ac(t, e, n, l), n !== null && (Re(n, t, l), Od(n, e, l)));
  }
  function Ad(t, e, n) {
    var l = Oe();
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
    if (Ti(t)) Cd(e, u);
    else {
      var r = t.alternate;
      if (t.lanes === 0 && (r === null || r.lanes === 0) && (r = e.lastRenderedReducer, r !== null))
        try {
          var s = e.lastRenderedState, h = r(s, n);
          if (u.hasEagerState = !0, u.eagerState = h, Te(h, s))
            return ai(t, e, u, 0), Ht === null && li(), !1;
        } catch {
        } finally {
        }
      if (n = ac(t, e, u, l), n !== null)
        return Re(n, t, l), Od(n, e, l), !0;
    }
    return !1;
  }
  function jc(t, e, n, l) {
    if (l = {
      lane: 2,
      revertLane: vo(),
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ti(t)) {
      if (e) throw Error(f(479));
    } else
      e = ac(
        t,
        n,
        l,
        2
      ), e !== null && Re(e, t, 2);
  }
  function Ti(t) {
    var e = t.alternate;
    return t === ht || e !== null && e === ht;
  }
  function Cd(t, e) {
    Jl = pi = !0;
    var n = t.pending;
    n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e;
  }
  function Od(t, e, n) {
    if ((n & 4194048) !== 0) {
      var l = e.lanes;
      l &= t.pendingLanes, n |= l, e.lanes = n, Bf(t, n);
    }
  }
  var Ei = {
    readContext: oe,
    use: gi,
    useCallback: Qt,
    useContext: Qt,
    useEffect: Qt,
    useImperativeHandle: Qt,
    useLayoutEffect: Qt,
    useInsertionEffect: Qt,
    useMemo: Qt,
    useReducer: Qt,
    useRef: Qt,
    useState: Qt,
    useDebugValue: Qt,
    useDeferredValue: Qt,
    useTransition: Qt,
    useSyncExternalStore: Qt,
    useId: Qt,
    useHostTransitionStatus: Qt,
    useFormState: Qt,
    useActionState: Qt,
    useOptimistic: Qt,
    useMemoCache: Qt,
    useCacheRefresh: Qt
  }, Rd = {
    readContext: oe,
    use: gi,
    useCallback: function(t, e) {
      return pe().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: oe,
    useEffect: fd,
    useImperativeHandle: function(t, e, n) {
      n = n != null ? n.concat([t]) : null, Si(
        4194308,
        4,
        md.bind(null, e, t),
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
      var n = pe();
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
      var l = pe();
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
      }, l.queue = t, t = t.dispatch = gy.bind(
        null,
        ht,
        t
      ), [l.memoizedState, t];
    },
    useRef: function(t) {
      var e = pe();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = Uc(t);
      var e = t.queue, n = Ad.bind(null, ht, e);
      return e.dispatch = n, [t.memoizedState, n];
    },
    useDebugValue: wc,
    useDeferredValue: function(t, e) {
      var n = pe();
      return Hc(n, t, e);
    },
    useTransition: function() {
      var t = Uc(!1);
      return t = bd.bind(
        null,
        ht,
        t.queue,
        !0,
        !1
      ), pe().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, n) {
      var l = ht, u = pe();
      if (Tt) {
        if (n === void 0)
          throw Error(f(407));
        n = n();
      } else {
        if (n = e(), Ht === null)
          throw Error(f(349));
        (vt & 124) !== 0 || $s(l, e, n);
      }
      u.memoizedState = n;
      var r = { value: n, getSnapshot: e };
      return u.queue = r, fd(Ws.bind(null, l, r, t), [
        t
      ]), l.flags |= 2048, Fl(
        9,
        bi(),
        Js.bind(
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
      var t = pe(), e = Ht.identifierPrefix;
      if (Tt) {
        var n = dn, l = sn;
        n = (l & ~(1 << 32 - Se(l) - 1)).toString(32) + n, e = "«" + e + "R" + n, n = yi++, 0 < n && (e += "H" + n.toString(32)), e += "»";
      } else
        n = sy++, e = "«" + e + "r" + n.toString(32) + "»";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: Yc,
    useFormState: ud,
    useActionState: ud,
    useOptimistic: function(t) {
      var e = pe();
      e.memoizedState = e.baseState = t;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = n, e = jc.bind(
        null,
        ht,
        !0,
        n
      ), n.dispatch = e, [t, e];
    },
    useMemoCache: Dc,
    useCacheRefresh: function() {
      return pe().memoizedState = yy.bind(
        null,
        ht
      );
    }
  }, _d = {
    readContext: oe,
    use: gi,
    useCallback: yd,
    useContext: oe,
    useEffect: sd,
    useImperativeHandle: pd,
    useInsertionEffect: dd,
    useLayoutEffect: hd,
    useMemo: gd,
    useReducer: vi,
    useRef: od,
    useState: function() {
      return vi(pn);
    },
    useDebugValue: wc,
    useDeferredValue: function(t, e) {
      var n = $t();
      return vd(
        n,
        Dt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = vi(pn)[0], e = $t().memoizedState;
      return [
        typeof t == "boolean" ? t : Pa(t),
        e
      ];
    },
    useSyncExternalStore: Ks,
    useId: Ed,
    useHostTransitionStatus: Yc,
    useFormState: id,
    useActionState: id,
    useOptimistic: function(t, e) {
      var n = $t();
      return Is(n, Dt, t, e);
    },
    useMemoCache: Dc,
    useCacheRefresh: xd
  }, vy = {
    readContext: oe,
    use: gi,
    useCallback: yd,
    useContext: oe,
    useEffect: sd,
    useImperativeHandle: pd,
    useInsertionEffect: dd,
    useLayoutEffect: hd,
    useMemo: gd,
    useReducer: Nc,
    useRef: od,
    useState: function() {
      return Nc(pn);
    },
    useDebugValue: wc,
    useDeferredValue: function(t, e) {
      var n = $t();
      return Dt === null ? Hc(n, t, e) : vd(
        n,
        Dt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Nc(pn)[0], e = $t().memoizedState;
      return [
        typeof t == "boolean" ? t : Pa(t),
        e
      ];
    },
    useSyncExternalStore: Ks,
    useId: Ed,
    useHostTransitionStatus: Yc,
    useFormState: cd,
    useActionState: cd,
    useOptimistic: function(t, e) {
      var n = $t();
      return Dt !== null ? Is(n, Dt, t, e) : (n.baseState = t, [t, n.queue.dispatch]);
    },
    useMemoCache: Dc,
    useCacheRefresh: xd
  }, Pl = null, eu = 0;
  function xi(t) {
    var e = eu;
    return eu += 1, Pl === null && (Pl = []), js(Pl, t, e);
  }
  function nu(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function Ai(t, e) {
    throw e.$$typeof === N ? Error(f(525)) : (t = Object.prototype.toString.call(e), Error(
      f(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function Md(t) {
    var e = t._init;
    return e(t._payload);
  }
  function Dd(t) {
    function e(E, S) {
      if (t) {
        var A = E.deletions;
        A === null ? (E.deletions = [S], E.flags |= 16) : A.push(S);
      }
    }
    function n(E, S) {
      if (!t) return null;
      for (; S !== null; )
        e(E, S), S = S.sibling;
      return null;
    }
    function l(E) {
      for (var S = /* @__PURE__ */ new Map(); E !== null; )
        E.key !== null ? S.set(E.key, E) : S.set(E.index, E), E = E.sibling;
      return S;
    }
    function u(E, S) {
      return E = fn(E, S), E.index = 0, E.sibling = null, E;
    }
    function r(E, S, A) {
      return E.index = A, t ? (A = E.alternate, A !== null ? (A = A.index, A < S ? (E.flags |= 67108866, S) : A) : (E.flags |= 67108866, S)) : (E.flags |= 1048576, S);
    }
    function s(E) {
      return t && E.alternate === null && (E.flags |= 67108866), E;
    }
    function h(E, S, A, H) {
      return S === null || S.tag !== 6 ? (S = ic(A, E.mode, H), S.return = E, S) : (S = u(S, A), S.return = E, S);
    }
    function v(E, S, A, H) {
      var tt = A.type;
      return tt === O ? B(
        E,
        S,
        A.props.children,
        H,
        A.key
      ) : S !== null && (S.elementType === tt || typeof tt == "object" && tt !== null && tt.$$typeof === at && Md(tt) === S.type) ? (S = u(S, A.props), nu(S, A), S.return = E, S) : (S = ii(
        A.type,
        A.key,
        A.props,
        null,
        E.mode,
        H
      ), nu(S, A), S.return = E, S);
    }
    function C(E, S, A, H) {
      return S === null || S.tag !== 4 || S.stateNode.containerInfo !== A.containerInfo || S.stateNode.implementation !== A.implementation ? (S = rc(A, E.mode, H), S.return = E, S) : (S = u(S, A.children || []), S.return = E, S);
    }
    function B(E, S, A, H, tt) {
      return S === null || S.tag !== 7 ? (S = al(
        A,
        E.mode,
        H,
        tt
      ), S.return = E, S) : (S = u(S, A), S.return = E, S);
    }
    function Y(E, S, A) {
      if (typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint")
        return S = ic(
          "" + S,
          E.mode,
          A
        ), S.return = E, S;
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case j:
            return A = ii(
              S.type,
              S.key,
              S.props,
              null,
              E.mode,
              A
            ), nu(A, S), A.return = E, A;
          case z:
            return S = rc(
              S,
              E.mode,
              A
            ), S.return = E, S;
          case at:
            var H = S._init;
            return S = H(S._payload), Y(E, S, A);
        }
        if (D(S) || $(S))
          return S = al(
            S,
            E.mode,
            A,
            null
          ), S.return = E, S;
        if (typeof S.then == "function")
          return Y(E, xi(S), A);
        if (S.$$typeof === X)
          return Y(
            E,
            fi(E, S),
            A
          );
        Ai(E, S);
      }
      return null;
    }
    function R(E, S, A, H) {
      var tt = S !== null ? S.key : null;
      if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint")
        return tt !== null ? null : h(E, S, "" + A, H);
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case j:
            return A.key === tt ? v(E, S, A, H) : null;
          case z:
            return A.key === tt ? C(E, S, A, H) : null;
          case at:
            return tt = A._init, A = tt(A._payload), R(E, S, A, H);
        }
        if (D(A) || $(A))
          return tt !== null ? null : B(E, S, A, H, null);
        if (typeof A.then == "function")
          return R(
            E,
            S,
            xi(A),
            H
          );
        if (A.$$typeof === X)
          return R(
            E,
            S,
            fi(E, A),
            H
          );
        Ai(E, A);
      }
      return null;
    }
    function M(E, S, A, H, tt) {
      if (typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint")
        return E = E.get(A) || null, h(S, E, "" + H, tt);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case j:
            return E = E.get(
              H.key === null ? A : H.key
            ) || null, v(S, E, H, tt);
          case z:
            return E = E.get(
              H.key === null ? A : H.key
            ) || null, C(S, E, H, tt);
          case at:
            var mt = H._init;
            return H = mt(H._payload), M(
              E,
              S,
              A,
              H,
              tt
            );
        }
        if (D(H) || $(H))
          return E = E.get(A) || null, B(S, E, H, tt, null);
        if (typeof H.then == "function")
          return M(
            E,
            S,
            A,
            xi(H),
            tt
          );
        if (H.$$typeof === X)
          return M(
            E,
            S,
            A,
            fi(S, H),
            tt
          );
        Ai(S, H);
      }
      return null;
    }
    function ct(E, S, A, H) {
      for (var tt = null, mt = null, nt = S, it = S = 0, ee = null; nt !== null && it < A.length; it++) {
        nt.index > it ? (ee = nt, nt = null) : ee = nt.sibling;
        var bt = R(
          E,
          nt,
          A[it],
          H
        );
        if (bt === null) {
          nt === null && (nt = ee);
          break;
        }
        t && nt && bt.alternate === null && e(E, nt), S = r(bt, S, it), mt === null ? tt = bt : mt.sibling = bt, mt = bt, nt = ee;
      }
      if (it === A.length)
        return n(E, nt), Tt && il(E, it), tt;
      if (nt === null) {
        for (; it < A.length; it++)
          nt = Y(E, A[it], H), nt !== null && (S = r(
            nt,
            S,
            it
          ), mt === null ? tt = nt : mt.sibling = nt, mt = nt);
        return Tt && il(E, it), tt;
      }
      for (nt = l(nt); it < A.length; it++)
        ee = M(
          nt,
          E,
          it,
          A[it],
          H
        ), ee !== null && (t && ee.alternate !== null && nt.delete(
          ee.key === null ? it : ee.key
        ), S = r(
          ee,
          S,
          it
        ), mt === null ? tt = ee : mt.sibling = ee, mt = ee);
      return t && nt.forEach(function(Wn) {
        return e(E, Wn);
      }), Tt && il(E, it), tt;
    }
    function ut(E, S, A, H) {
      if (A == null) throw Error(f(151));
      for (var tt = null, mt = null, nt = S, it = S = 0, ee = null, bt = A.next(); nt !== null && !bt.done; it++, bt = A.next()) {
        nt.index > it ? (ee = nt, nt = null) : ee = nt.sibling;
        var Wn = R(E, nt, bt.value, H);
        if (Wn === null) {
          nt === null && (nt = ee);
          break;
        }
        t && nt && Wn.alternate === null && e(E, nt), S = r(Wn, S, it), mt === null ? tt = Wn : mt.sibling = Wn, mt = Wn, nt = ee;
      }
      if (bt.done)
        return n(E, nt), Tt && il(E, it), tt;
      if (nt === null) {
        for (; !bt.done; it++, bt = A.next())
          bt = Y(E, bt.value, H), bt !== null && (S = r(bt, S, it), mt === null ? tt = bt : mt.sibling = bt, mt = bt);
        return Tt && il(E, it), tt;
      }
      for (nt = l(nt); !bt.done; it++, bt = A.next())
        bt = M(nt, E, it, bt.value, H), bt !== null && (t && bt.alternate !== null && nt.delete(bt.key === null ? it : bt.key), S = r(bt, S, it), mt === null ? tt = bt : mt.sibling = bt, mt = bt);
      return t && nt.forEach(function(bg) {
        return e(E, bg);
      }), Tt && il(E, it), tt;
    }
    function Nt(E, S, A, H) {
      if (typeof A == "object" && A !== null && A.type === O && A.key === null && (A = A.props.children), typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case j:
            t: {
              for (var tt = A.key; S !== null; ) {
                if (S.key === tt) {
                  if (tt = A.type, tt === O) {
                    if (S.tag === 7) {
                      n(
                        E,
                        S.sibling
                      ), H = u(
                        S,
                        A.props.children
                      ), H.return = E, E = H;
                      break t;
                    }
                  } else if (S.elementType === tt || typeof tt == "object" && tt !== null && tt.$$typeof === at && Md(tt) === S.type) {
                    n(
                      E,
                      S.sibling
                    ), H = u(S, A.props), nu(H, A), H.return = E, E = H;
                    break t;
                  }
                  n(E, S);
                  break;
                } else e(E, S);
                S = S.sibling;
              }
              A.type === O ? (H = al(
                A.props.children,
                E.mode,
                H,
                A.key
              ), H.return = E, E = H) : (H = ii(
                A.type,
                A.key,
                A.props,
                null,
                E.mode,
                H
              ), nu(H, A), H.return = E, E = H);
            }
            return s(E);
          case z:
            t: {
              for (tt = A.key; S !== null; ) {
                if (S.key === tt)
                  if (S.tag === 4 && S.stateNode.containerInfo === A.containerInfo && S.stateNode.implementation === A.implementation) {
                    n(
                      E,
                      S.sibling
                    ), H = u(S, A.children || []), H.return = E, E = H;
                    break t;
                  } else {
                    n(E, S);
                    break;
                  }
                else e(E, S);
                S = S.sibling;
              }
              H = rc(A, E.mode, H), H.return = E, E = H;
            }
            return s(E);
          case at:
            return tt = A._init, A = tt(A._payload), Nt(
              E,
              S,
              A,
              H
            );
        }
        if (D(A))
          return ct(
            E,
            S,
            A,
            H
          );
        if ($(A)) {
          if (tt = $(A), typeof tt != "function") throw Error(f(150));
          return A = tt.call(A), ut(
            E,
            S,
            A,
            H
          );
        }
        if (typeof A.then == "function")
          return Nt(
            E,
            S,
            xi(A),
            H
          );
        if (A.$$typeof === X)
          return Nt(
            E,
            S,
            fi(E, A),
            H
          );
        Ai(E, A);
      }
      return typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint" ? (A = "" + A, S !== null && S.tag === 6 ? (n(E, S.sibling), H = u(S, A), H.return = E, E = H) : (n(E, S), H = ic(A, E.mode, H), H.return = E, E = H), s(E)) : n(E, S);
    }
    return function(E, S, A, H) {
      try {
        eu = 0;
        var tt = Nt(
          E,
          S,
          A,
          H
        );
        return Pl = null, tt;
      } catch (nt) {
        if (nt === Za || nt === di) throw nt;
        var mt = Ee(29, nt, null, E.mode);
        return mt.lanes = H, mt.return = E, mt;
      } finally {
      }
    };
  }
  var Il = Dd(!0), zd = Dd(!1), qe = q(null), We = null;
  function wn(t) {
    var e = t.alternate;
    V(Ft, Ft.current & 1), V(qe, t), We === null && (e === null || $l.current !== null || e.memoizedState !== null) && (We = t);
  }
  function Nd(t) {
    if (t.tag === 22) {
      if (V(Ft, Ft.current), V(qe, t), We === null) {
        var e = t.alternate;
        e !== null && e.memoizedState !== null && (We = t);
      }
    } else Hn();
  }
  function Hn() {
    V(Ft, Ft.current), V(qe, qe.current);
  }
  function yn(t) {
    F(qe), We === t && (We = null), F(Ft);
  }
  var Ft = q(0);
  function Ci(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || Do(n)))
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
  function Gc(t, e, n, l) {
    e = t.memoizedState, n = n(l, e), n = n == null ? e : x({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n);
  }
  var kc = {
    enqueueSetState: function(t, e, n) {
      t = t._reactInternals;
      var l = Oe(), u = Nn(l);
      u.payload = e, n != null && (u.callback = n), e = Un(t, u, l), e !== null && (Re(e, t, l), $a(e, t, l));
    },
    enqueueReplaceState: function(t, e, n) {
      t = t._reactInternals;
      var l = Oe(), u = Nn(l);
      u.tag = 1, u.payload = e, n != null && (u.callback = n), e = Un(t, u, l), e !== null && (Re(e, t, l), $a(e, t, l));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var n = Oe(), l = Nn(n);
      l.tag = 2, e != null && (l.callback = e), e = Un(t, l, n), e !== null && (Re(e, t, n), $a(e, t, n));
    }
  };
  function Ud(t, e, n, l, u, r, s) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(l, r, s) : e.prototype && e.prototype.isPureReactComponent ? !Ya(n, l) || !Ya(u, r) : !0;
  }
  function Bd(t, e, n, l) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, l), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, l), e.state !== t && kc.enqueueReplaceState(e, e.state, null);
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
    } else if (typeof a == "object" && typeof a.emit == "function") {
      a.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  };
  function wd(t) {
    Oi(t);
  }
  function Hd(t) {
    console.error(t);
  }
  function qd(t) {
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
  function Yd(t, e, n) {
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
  function Lc(t, e, n) {
    return n = Nn(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      Ri(t, e);
    }, n;
  }
  function jd(t) {
    return t = Nn(t), t.tag = 3, t;
  }
  function Gd(t, e, n, l) {
    var u = n.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var r = l.value;
      t.payload = function() {
        return u(r);
      }, t.callback = function() {
        Yd(e, n, l);
      };
    }
    var s = n.stateNode;
    s !== null && typeof s.componentDidCatch == "function" && (t.callback = function() {
      Yd(e, n, l), typeof u != "function" && (Ln === null ? Ln = /* @__PURE__ */ new Set([this]) : Ln.add(this));
      var h = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: h !== null ? h : ""
      });
    });
  }
  function by(t, e, n, l, u) {
    if (n.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (e = n.alternate, e !== null && Xa(
        e,
        n,
        u,
        !0
      ), n = qe.current, n !== null) {
        switch (n.tag) {
          case 13:
            return We === null ? ho() : n.alternate === null && kt === 0 && (kt = 3), n.flags &= -257, n.flags |= 65536, n.lanes = u, l === gc ? n.flags |= 16384 : (e = n.updateQueue, e === null ? n.updateQueue = /* @__PURE__ */ new Set([l]) : e.add(l), po(t, l, u)), !1;
          case 22:
            return n.flags |= 65536, l === gc ? n.flags |= 16384 : (e = n.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, n.updateQueue = e) : (n = e.retryQueue, n === null ? e.retryQueue = /* @__PURE__ */ new Set([l]) : n.add(l)), po(t, l, u)), !1;
        }
        throw Error(f(435, n.tag));
      }
      return po(t, l, u), ho(), !1;
    }
    if (Tt)
      return e = qe.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = u, l !== fc && (t = Error(f(422), { cause: l }), La(Ue(t, n)))) : (l !== fc && (e = Error(f(423), {
        cause: l
      }), La(
        Ue(e, n)
      )), t = t.current.alternate, t.flags |= 65536, u &= -u, t.lanes |= u, l = Ue(l, n), u = Lc(
        t.stateNode,
        l,
        u
      ), Sc(t, u), kt !== 4 && (kt = 2)), !1;
    var r = Error(f(520), { cause: l });
    if (r = Ue(r, n), ou === null ? ou = [r] : ou.push(r), kt !== 4 && (kt = 2), e === null) return !0;
    l = Ue(l, n), n = e;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, t = u & -u, n.lanes |= t, t = Lc(n.stateNode, l, t), Sc(n, t), !1;
        case 1:
          if (e = n.type, r = n.stateNode, (n.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || r !== null && typeof r.componentDidCatch == "function" && (Ln === null || !Ln.has(r))))
            return n.flags |= 65536, u &= -u, n.lanes |= u, u = jd(u), Gd(
              u,
              t,
              n,
              l
            ), Sc(n, u), !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var kd = Error(f(461)), It = !1;
  function le(t, e, n, l) {
    e.child = t === null ? zd(e, null, n, l) : Il(
      e,
      t.child,
      n,
      l
    );
  }
  function Ld(t, e, n, l, u) {
    n = n.render;
    var r = e.ref;
    if ("ref" in l) {
      var s = {};
      for (var h in l)
        h !== "ref" && (s[h] = l[h]);
    } else s = l;
    return fl(e), l = Cc(
      t,
      e,
      n,
      s,
      r,
      u
    ), h = Oc(), t !== null && !It ? (Rc(t, e, u), gn(t, e, u)) : (Tt && h && cc(e), e.flags |= 1, le(t, e, l, u), e.child);
  }
  function Xd(t, e, n, l, u) {
    if (t === null) {
      var r = n.type;
      return typeof r == "function" && !uc(r) && r.defaultProps === void 0 && n.compare === null ? (e.tag = 15, e.type = r, Qd(
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
    if (r = t.child, !Wc(t, u)) {
      var s = r.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Ya, n(s, l) && t.ref === e.ref)
        return gn(t, e, u);
    }
    return e.flags |= 1, t = fn(r, l), t.ref = e.ref, t.return = e, e.child = t;
  }
  function Qd(t, e, n, l, u) {
    if (t !== null) {
      var r = t.memoizedProps;
      if (Ya(r, l) && t.ref === e.ref)
        if (It = !1, e.pendingProps = l = r, Wc(t, u))
          (t.flags & 131072) !== 0 && (It = !0);
        else
          return e.lanes = t.lanes, gn(t, e, u);
    }
    return Xc(
      t,
      e,
      n,
      l,
      u
    );
  }
  function Vd(t, e, n) {
    var l = e.pendingProps, u = l.children, r = t !== null ? t.memoizedState : null;
    if (l.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (l = r !== null ? r.baseLanes | n : n, t !== null) {
          for (u = e.child = t.child, r = 0; u !== null; )
            r = r | u.lanes | u.childLanes, u = u.sibling;
          e.childLanes = r & ~l;
        } else e.childLanes = 0, e.child = null;
        return Zd(
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
        ), r !== null ? Qs(e, r) : Ec(), Nd(e);
      else
        return e.lanes = e.childLanes = 536870912, Zd(
          t,
          e,
          r !== null ? r.baseLanes | n : n,
          n
        );
    } else
      r !== null ? (si(e, r.cachePool), Qs(e, r), Hn(), e.memoizedState = null) : (t !== null && si(e, null), Ec(), Hn());
    return le(t, e, u, n), e.child;
  }
  function Zd(t, e, n, l) {
    var u = yc();
    return u = u === null ? null : { parent: Wt._currentValue, pool: u }, e.memoizedState = {
      baseLanes: n,
      cachePool: u
    }, t !== null && si(e, null), Ec(), Nd(e), t !== null && Xa(t, e, l, !0), null;
  }
  function _i(t, e) {
    var n = e.ref;
    if (n === null)
      t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(f(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function Xc(t, e, n, l, u) {
    return fl(e), n = Cc(
      t,
      e,
      n,
      l,
      void 0,
      u
    ), l = Oc(), t !== null && !It ? (Rc(t, e, u), gn(t, e, u)) : (Tt && l && cc(e), e.flags |= 1, le(t, e, n, u), e.child);
  }
  function Kd(t, e, n, l, u, r) {
    return fl(e), e.updateQueue = null, n = Zs(
      e,
      l,
      n,
      u
    ), Vs(t), l = Oc(), t !== null && !It ? (Rc(t, e, r), gn(t, e, r)) : (Tt && l && cc(e), e.flags |= 1, le(t, e, n, r), e.child);
  }
  function $d(t, e, n, l, u) {
    if (fl(e), e.stateNode === null) {
      var r = Xl, s = n.contextType;
      typeof s == "object" && s !== null && (r = oe(s)), r = new n(l, r), e.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = kc, e.stateNode = r, r._reactInternals = e, r = e.stateNode, r.props = l, r.state = e.memoizedState, r.refs = {}, vc(e), s = n.contextType, r.context = typeof s == "object" && s !== null ? oe(s) : Xl, r.state = e.memoizedState, s = n.getDerivedStateFromProps, typeof s == "function" && (Gc(
        e,
        n,
        s,
        l
      ), r.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (s = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), s !== r.state && kc.enqueueReplaceState(r, r.state, null), Wa(e, l, r, u), Ja(), r.state = e.memoizedState), typeof r.componentDidMount == "function" && (e.flags |= 4194308), l = !0;
    } else if (t === null) {
      r = e.stateNode;
      var h = e.memoizedProps, v = hl(n, h);
      r.props = v;
      var C = r.context, B = n.contextType;
      s = Xl, typeof B == "object" && B !== null && (s = oe(B));
      var Y = n.getDerivedStateFromProps;
      B = typeof Y == "function" || typeof r.getSnapshotBeforeUpdate == "function", h = e.pendingProps !== h, B || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (h || C !== s) && Bd(
        e,
        r,
        l,
        s
      ), zn = !1;
      var R = e.memoizedState;
      r.state = R, Wa(e, l, r, u), Ja(), C = e.memoizedState, h || R !== C || zn ? (typeof Y == "function" && (Gc(
        e,
        n,
        Y,
        l
      ), C = e.memoizedState), (v = zn || Ud(
        e,
        n,
        v,
        l,
        R,
        C,
        s
      )) ? (B || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof r.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = l, e.memoizedState = C), r.props = l, r.state = C, r.context = s, l = v) : (typeof r.componentDidMount == "function" && (e.flags |= 4194308), l = !1);
    } else {
      r = e.stateNode, bc(t, e), s = e.memoizedProps, B = hl(n, s), r.props = B, Y = e.pendingProps, R = r.context, C = n.contextType, v = Xl, typeof C == "object" && C !== null && (v = oe(C)), h = n.getDerivedStateFromProps, (C = typeof h == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (s !== Y || R !== v) && Bd(
        e,
        r,
        l,
        v
      ), zn = !1, R = e.memoizedState, r.state = R, Wa(e, l, r, u), Ja();
      var M = e.memoizedState;
      s !== Y || R !== M || zn || t !== null && t.dependencies !== null && oi(t.dependencies) ? (typeof h == "function" && (Gc(
        e,
        n,
        h,
        l
      ), M = e.memoizedState), (B = zn || Ud(
        e,
        n,
        B,
        l,
        R,
        M,
        v
      ) || t !== null && t.dependencies !== null && oi(t.dependencies)) ? (C || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(l, M, v), typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(
        l,
        M,
        v
      )), typeof r.componentDidUpdate == "function" && (e.flags |= 4), typeof r.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || s === t.memoizedProps && R === t.memoizedState || (e.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || s === t.memoizedProps && R === t.memoizedState || (e.flags |= 1024), e.memoizedProps = l, e.memoizedState = M), r.props = l, r.state = M, r.context = v, l = B) : (typeof r.componentDidUpdate != "function" || s === t.memoizedProps && R === t.memoizedState || (e.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || s === t.memoizedProps && R === t.memoizedState || (e.flags |= 1024), l = !1);
    }
    return r = l, _i(t, e), l = (e.flags & 128) !== 0, r || l ? (r = e.stateNode, n = l && typeof n.getDerivedStateFromError != "function" ? null : r.render(), e.flags |= 1, t !== null && l ? (e.child = Il(
      e,
      t.child,
      null,
      u
    ), e.child = Il(
      e,
      null,
      n,
      u
    )) : le(t, e, n, u), e.memoizedState = r.state, t = e.child) : t = gn(
      t,
      e,
      u
    ), t;
  }
  function Jd(t, e, n, l) {
    return ka(), e.flags |= 256, le(t, e, n, l), e.child;
  }
  var Qc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Vc(t) {
    return { baseLanes: t, cachePool: Hs() };
  }
  function Zc(t, e, n) {
    return t = t !== null ? t.childLanes & ~n : 0, e && (t |= Ye), t;
  }
  function Wd(t, e, n) {
    var l = e.pendingProps, u = !1, r = (e.flags & 128) !== 0, s;
    if ((s = r) || (s = t !== null && t.memoizedState === null ? !1 : (Ft.current & 2) !== 0), s && (u = !0, e.flags &= -129), s = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (Tt) {
        if (u ? wn(e) : Hn(), Tt) {
          var h = Gt, v;
          if (v = h) {
            t: {
              for (v = h, h = Je; v.nodeType !== 8; ) {
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
            }, v = Ee(
              18,
              null,
              null,
              0
            ), v.stateNode = h, v.return = e, e.child = v, de = e, Gt = null, v = !0) : v = !1;
          }
          v || cl(e);
        }
        if (h = e.memoizedState, h !== null && (h = h.dehydrated, h !== null))
          return Do(h) ? e.lanes = 32 : e.lanes = 536870912, null;
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
      ), h.return = e, l.return = e, h.sibling = l, e.child = h, u = e.child, u.memoizedState = Vc(n), u.childLanes = Zc(
        t,
        s,
        n
      ), e.memoizedState = Qc, l) : (wn(e), Kc(e, h));
    }
    if (v = t.memoizedState, v !== null && (h = v.dehydrated, h !== null)) {
      if (r)
        e.flags & 256 ? (wn(e), e.flags &= -257, e = $c(
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
        ), u.flags |= 2, l.return = e, u.return = e, l.sibling = u, e.child = l, Il(
          e,
          t.child,
          null,
          n
        ), l = e.child, l.memoizedState = Vc(n), l.childLanes = Zc(
          t,
          s,
          n
        ), e.memoizedState = Qc, e = u);
      else if (wn(e), Do(h)) {
        if (s = h.nextSibling && h.nextSibling.dataset, s) var C = s.dgst;
        s = C, l = Error(f(419)), l.stack = "", l.digest = s, La({ value: l, source: null, stack: null }), e = $c(
          t,
          e,
          n
        );
      } else if (It || Xa(t, e, n, !1), s = (n & t.childLanes) !== 0, It || s) {
        if (s = Ht, s !== null && (l = n & -n, l = (l & 42) !== 0 ? 1 : Dr(l), l = (l & (s.suspendedLanes | n)) !== 0 ? 0 : l, l !== 0 && l !== v.retryLane))
          throw v.retryLane = l, Ll(t, l), Re(s, t, l), kd;
        h.data === "$?" || ho(), e = $c(
          t,
          e,
          n
        );
      } else
        h.data === "$?" ? (e.flags |= 192, e.child = t.child, e = null) : (t = v.treeContext, Gt = Ve(
          h.nextSibling
        ), de = e, Tt = !0, rl = null, Je = !1, t !== null && (we[He++] = sn, we[He++] = dn, we[He++] = ul, sn = t.id, dn = t.overflow, ul = e), e = Kc(
          e,
          l.children
        ), e.flags |= 4096);
      return e;
    }
    return u ? (Hn(), u = l.fallback, h = e.mode, v = t.child, C = v.sibling, l = fn(v, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = v.subtreeFlags & 65011712, C !== null ? u = fn(C, u) : (u = al(
      u,
      h,
      n,
      null
    ), u.flags |= 2), u.return = e, l.return = e, l.sibling = u, e.child = l, l = u, u = e.child, h = t.child.memoizedState, h === null ? h = Vc(n) : (v = h.cachePool, v !== null ? (C = Wt._currentValue, v = v.parent !== C ? { parent: C, pool: C } : v) : v = Hs(), h = {
      baseLanes: h.baseLanes | n,
      cachePool: v
    }), u.memoizedState = h, u.childLanes = Zc(
      t,
      s,
      n
    ), e.memoizedState = Qc, l) : (wn(e), n = t.child, t = n.sibling, n = fn(n, {
      mode: "visible",
      children: l.children
    }), n.return = e, n.sibling = null, t !== null && (s = e.deletions, s === null ? (e.deletions = [t], e.flags |= 16) : s.push(t)), e.child = n, e.memoizedState = null, n);
  }
  function Kc(t, e) {
    return e = Mi(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function Mi(t, e) {
    return t = Ee(22, t, null, e), t.lanes = 0, t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, t;
  }
  function $c(t, e, n) {
    return Il(e, t.child, null, n), t = Kc(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function Fd(t, e, n) {
    t.lanes |= e;
    var l = t.alternate;
    l !== null && (l.lanes |= e), dc(t.return, e, n);
  }
  function Jc(t, e, n, l, u) {
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
  function Pd(t, e, n) {
    var l = e.pendingProps, u = l.revealOrder, r = l.tail;
    if (le(t, e, l.children, n), l = Ft.current, (l & 2) !== 0)
      l = l & 1 | 2, e.flags |= 128;
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = e.child; t !== null; ) {
          if (t.tag === 13)
            t.memoizedState !== null && Fd(t, n, e);
          else if (t.tag === 19)
            Fd(t, n, e);
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
    switch (V(Ft, l), u) {
      case "forwards":
        for (n = e.child, u = null; n !== null; )
          t = n.alternate, t !== null && Ci(t) === null && (u = n), n = n.sibling;
        n = u, n === null ? (u = e.child, e.child = null) : (u = n.sibling, n.sibling = null), Jc(
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
        Jc(
          e,
          !0,
          n,
          null,
          r
        );
        break;
      case "together":
        Jc(e, !1, null, null, void 0);
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
      throw Error(f(153));
    if (e.child !== null) {
      for (t = e.child, n = fn(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null; )
        t = t.sibling, n = n.sibling = fn(t, t.pendingProps), n.return = e;
      n.sibling = null;
    }
    return e.child;
  }
  function Wc(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && oi(t)));
  }
  function Sy(t, e, n) {
    switch (e.tag) {
      case 3:
        Mt(e, e.stateNode.containerInfo), Dn(e, Wt, t.memoizedState.cache), ka();
        break;
      case 27:
      case 5:
        un(e);
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
          return l.dehydrated !== null ? (wn(e), e.flags |= 128, null) : (n & e.child.childLanes) !== 0 ? Wd(t, e, n) : (wn(e), t = gn(
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
            return Pd(
              t,
              e,
              n
            );
          e.flags |= 128;
        }
        if (u = e.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), V(Ft, Ft.current), l) break;
        return null;
      case 22:
      case 23:
        return e.lanes = 0, Vd(t, e, n);
      case 24:
        Dn(e, Wt, t.memoizedState.cache);
    }
    return gn(t, e, n);
  }
  function Id(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        It = !0;
      else {
        if (!Wc(t, n) && (e.flags & 128) === 0)
          return It = !1, Sy(
            t,
            e,
            n
          );
        It = (t.flags & 131072) !== 0;
      }
    else
      It = !1, Tt && (e.flags & 1048576) !== 0 && Ms(e, ci, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          t = e.pendingProps;
          var l = e.elementType, u = l._init;
          if (l = u(l._payload), e.type = l, typeof l == "function")
            uc(l) ? (t = hl(l, t), e.tag = 1, e = $d(
              null,
              e,
              l,
              t,
              n
            )) : (e.tag = 0, e = Xc(
              null,
              e,
              l,
              t,
              n
            ));
          else {
            if (l != null) {
              if (u = l.$$typeof, u === et) {
                e.tag = 11, e = Ld(
                  null,
                  e,
                  l,
                  t,
                  n
                );
                break t;
              } else if (u === ot) {
                e.tag = 14, e = Xd(
                  null,
                  e,
                  l,
                  t,
                  n
                );
                break t;
              }
            }
            throw e = W(l) || l, Error(f(306, e, ""));
          }
        }
        return e;
      case 0:
        return Xc(
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
        ), $d(
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
          ), t === null) throw Error(f(387));
          l = e.pendingProps;
          var r = e.memoizedState;
          u = r.element, bc(t, e), Wa(e, l, null, n);
          var s = e.memoizedState;
          if (l = s.cache, Dn(e, Wt, l), l !== r.cache && hc(
            e,
            [Wt],
            n,
            !0
          ), Ja(), l = s.element, r.isDehydrated)
            if (r = {
              element: l,
              isDehydrated: !1,
              cache: s.cache
            }, e.updateQueue.baseState = r, e.memoizedState = r, e.flags & 256) {
              e = Jd(
                t,
                e,
                l,
                n
              );
              break t;
            } else if (l !== u) {
              u = Ue(
                Error(f(424)),
                e
              ), La(u), e = Jd(
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
              for (Gt = Ve(t.firstChild), de = e, Tt = !0, rl = null, Je = !0, n = zd(
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
            le(
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
        return _i(t, e), t === null ? (n = l0(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = n : Tt || (n = e.type, t = e.pendingProps, l = Xi(
          rt.current
        ).createElement(n), l[ce] = e, l[he] = t, ue(l, n, t), Pt(l), e.stateNode = l) : e.memoizedState = l0(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return un(e), t === null && Tt && (l = e.stateNode = t0(
          e.type,
          e.pendingProps,
          rt.current
        ), de = e, Je = !0, u = Gt, Vn(e.type) ? (zo = u, Gt = Ve(
          l.firstChild
        )) : Gt = u), le(
          t,
          e,
          e.pendingProps.children,
          n
        ), _i(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && Tt && ((u = l = Gt) && (l = $y(
          l,
          e.type,
          e.pendingProps,
          Je
        ), l !== null ? (e.stateNode = l, de = e, Gt = Ve(
          l.firstChild
        ), Je = !1, u = !0) : u = !1), u || cl(e)), un(e), u = e.type, r = e.pendingProps, s = t !== null ? t.memoizedProps : null, l = r.children, Ro(u, r) ? l = null : s !== null && Ro(u, s) && (e.flags |= 32), e.memoizedState !== null && (u = Cc(
          t,
          e,
          dy,
          null,
          null,
          n
        ), vu._currentValue = u), _i(t, e), le(t, e, l, n), e.child;
      case 6:
        return t === null && Tt && ((t = n = Gt) && (n = Jy(
          n,
          e.pendingProps,
          Je
        ), n !== null ? (e.stateNode = n, de = e, Gt = null, t = !0) : t = !1), t || cl(e)), null;
      case 13:
        return Wd(t, e, n);
      case 4:
        return Mt(
          e,
          e.stateNode.containerInfo
        ), l = e.pendingProps, t === null ? e.child = Il(
          e,
          null,
          l,
          n
        ) : le(
          t,
          e,
          l,
          n
        ), e.child;
      case 11:
        return Ld(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 7:
        return le(
          t,
          e,
          e.pendingProps,
          n
        ), e.child;
      case 8:
        return le(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 12:
        return le(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 10:
        return l = e.pendingProps, Dn(e, e.type, l.value), le(
          t,
          e,
          l.children,
          n
        ), e.child;
      case 9:
        return u = e.type._context, l = e.pendingProps.children, fl(e), u = oe(u), l = l(u), e.flags |= 1, le(t, e, l, n), e.child;
      case 14:
        return Xd(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 15:
        return Qd(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 19:
        return Pd(t, e, n);
      case 31:
        return l = e.pendingProps, n = e.mode, l = {
          mode: l.mode,
          children: l.children
        }, t === null ? (n = Mi(
          l,
          n
        ), n.ref = e.ref, e.child = n, n.return = e, e = n) : (n = fn(t.child, l), n.ref = e.ref, e.child = n, n.return = e, e = n), e;
      case 22:
        return Vd(t, e, n);
      case 24:
        return fl(e), l = oe(Wt), t === null ? (u = yc(), u === null && (u = Ht, r = mc(), u.pooledCache = r, r.refCount++, r !== null && (u.pooledCacheLanes |= n), u = r), e.memoizedState = {
          parent: l,
          cache: u
        }, vc(e), Dn(e, Wt, u)) : ((t.lanes & n) !== 0 && (bc(t, e), Wa(e, null, null, n), Ja()), u = t.memoizedState, r = e.memoizedState, u.parent !== l ? (u = { parent: l, cache: l }, e.memoizedState = u, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = u), Dn(e, Wt, l)) : (l = r.cache, Dn(e, Wt, l), l !== u.cache && hc(
          e,
          [Wt],
          n,
          !0
        ))), le(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(f(156, e.tag));
  }
  function vn(t) {
    t.flags |= 4;
  }
  function th(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !c0(e)) {
      if (e = qe.current, e !== null && ((vt & 4194048) === vt ? We !== null : (vt & 62914560) !== vt && (vt & 536870912) === 0 || e !== We))
        throw Ka = gc, qs;
      t.flags |= 8192;
    }
  }
  function Di(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Nf() : 536870912, t.lanes |= e, la |= e);
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
  function jt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, n = 0, l = 0;
    if (e)
      for (var u = t.child; u !== null; )
        n |= u.lanes | u.childLanes, l |= u.subtreeFlags & 65011712, l |= u.flags & 65011712, u.return = t, u = u.sibling;
    else
      for (u = t.child; u !== null; )
        n |= u.lanes | u.childLanes, l |= u.subtreeFlags, l |= u.flags, u.return = t, u = u.sibling;
    return t.subtreeFlags |= l, t.childLanes = n, e;
  }
  function Ty(t, e, n) {
    var l = e.pendingProps;
    switch (oc(e), e.tag) {
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
        return jt(e), null;
      case 1:
        return jt(e), null;
      case 3:
        return n = e.stateNode, l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), mn(Wt), re(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (t === null || t.child === null) && (Ga(e) ? vn(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, Ns())), jt(e), null;
      case 26:
        return n = e.memoizedState, t === null ? (vn(e), n !== null ? (jt(e), th(e, n)) : (jt(e), e.flags &= -16777217)) : n ? n !== t.memoizedState ? (vn(e), jt(e), th(e, n)) : (jt(e), e.flags &= -16777217) : (t.memoizedProps !== l && vn(e), jt(e), e.flags &= -16777217), null;
      case 27:
        Rl(e), n = rt.current;
        var u = e.type;
        if (t !== null && e.stateNode != null)
          t.memoizedProps !== l && vn(e);
        else {
          if (!l) {
            if (e.stateNode === null)
              throw Error(f(166));
            return jt(e), null;
          }
          t = lt.current, Ga(e) ? Ds(e) : (t = t0(u, l, n), e.stateNode = t, vn(e));
        }
        return jt(e), null;
      case 5:
        if (Rl(e), n = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== l && vn(e);
        else {
          if (!l) {
            if (e.stateNode === null)
              throw Error(f(166));
            return jt(e), null;
          }
          if (t = lt.current, Ga(e))
            Ds(e);
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
            t[ce] = e, t[he] = l;
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
            t: switch (ue(t, n, l), n) {
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
        return jt(e), e.flags &= -16777217, null;
      case 6:
        if (t && e.stateNode != null)
          t.memoizedProps !== l && vn(e);
        else {
          if (typeof l != "string" && e.stateNode === null)
            throw Error(f(166));
          if (t = rt.current, Ga(e)) {
            if (t = e.stateNode, n = e.memoizedProps, l = null, u = de, u !== null)
              switch (u.tag) {
                case 27:
                case 5:
                  l = u.memoizedProps;
              }
            t[ce] = e, t = !!(t.nodeValue === n || l !== null && l.suppressHydrationWarning === !0 || Kh(t.nodeValue, n)), t || cl(e);
          } else
            t = Xi(t).createTextNode(
              l
            ), t[ce] = e, e.stateNode = t;
        }
        return jt(e), null;
      case 13:
        if (l = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (u = Ga(e), l !== null && l.dehydrated !== null) {
            if (t === null) {
              if (!u) throw Error(f(318));
              if (u = e.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(f(317));
              u[ce] = e;
            } else
              ka(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            jt(e), u = !1;
          } else
            u = Ns(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = u), u = !0;
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
        return n !== t && n && (e.child.flags |= 8192), Di(e, e.updateQueue), jt(e), null;
      case 4:
        return re(), t === null && Eo(e.stateNode.containerInfo), jt(e), null;
      case 10:
        return mn(e.type), jt(e), null;
      case 19:
        if (F(Ft), u = e.memoizedState, u === null) return jt(e), null;
        if (l = (e.flags & 128) !== 0, r = u.rendering, r === null)
          if (l) lu(u, !1);
          else {
            if (kt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (r = Ci(t), r !== null) {
                  for (e.flags |= 128, lu(u, !1), t = r.updateQueue, e.updateQueue = t, Di(e, t), e.subtreeFlags = 0, t = n, n = e.child; n !== null; )
                    _s(n, t), n = n.sibling;
                  return V(
                    Ft,
                    Ft.current & 1 | 2
                  ), e.child;
                }
                t = t.sibling;
              }
            u.tail !== null && $e() > Ui && (e.flags |= 128, l = !0, lu(u, !1), e.lanes = 4194304);
          }
        else {
          if (!l)
            if (t = Ci(r), t !== null) {
              if (e.flags |= 128, l = !0, t = t.updateQueue, e.updateQueue = t, Di(e, t), lu(u, !0), u.tail === null && u.tailMode === "hidden" && !r.alternate && !Tt)
                return jt(e), null;
            } else
              2 * $e() - u.renderingStartTime > Ui && n !== 536870912 && (e.flags |= 128, l = !0, lu(u, !1), e.lanes = 4194304);
          u.isBackwards ? (r.sibling = e.child, e.child = r) : (t = u.last, t !== null ? t.sibling = r : e.child = r, u.last = r);
        }
        return u.tail !== null ? (e = u.tail, u.rendering = e, u.tail = e.sibling, u.renderingStartTime = $e(), e.sibling = null, t = Ft.current, V(Ft, l ? t & 1 | 2 : t & 1), e) : (jt(e), null);
      case 22:
      case 23:
        return yn(e), xc(), l = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== l && (e.flags |= 8192) : l && (e.flags |= 8192), l ? (n & 536870912) !== 0 && (e.flags & 128) === 0 && (jt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : jt(e), n = e.updateQueue, n !== null && Di(e, n.retryQueue), n = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), l = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), l !== n && (e.flags |= 2048), t !== null && F(sl), null;
      case 24:
        return n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), mn(Wt), jt(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(f(156, e.tag));
  }
  function Ey(t, e) {
    switch (oc(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return mn(Wt), re(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return Rl(e), null;
      case 13:
        if (yn(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(f(340));
          ka();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return F(Ft), null;
      case 4:
        return re(), null;
      case 10:
        return mn(e.type), null;
      case 22:
      case 23:
        return yn(e), xc(), t !== null && F(sl), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return mn(Wt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function eh(t, e) {
    switch (oc(e), e.tag) {
      case 3:
        mn(Wt), re();
        break;
      case 26:
      case 27:
      case 5:
        Rl(e);
        break;
      case 4:
        re();
        break;
      case 13:
        yn(e);
        break;
      case 19:
        F(Ft);
        break;
      case 10:
        mn(e.type);
        break;
      case 22:
      case 23:
        yn(e), xc(), t !== null && F(sl);
        break;
      case 24:
        mn(Wt);
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
      wt(e, e.return, h);
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
              var v = n, C = h;
              try {
                C();
              } catch (B) {
                wt(
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
      wt(e, e.return, B);
    }
  }
  function nh(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        Xs(e, n);
      } catch (l) {
        wt(t, t.return, l);
      }
    }
  }
  function lh(t, e, n) {
    n.props = hl(
      t.type,
      t.memoizedProps
    ), n.state = t.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (l) {
      wt(t, e, l);
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
      wt(t, e, u);
    }
  }
  function Fe(t, e) {
    var n = t.ref, l = t.refCleanup;
    if (n !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (u) {
          wt(t, e, u);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (u) {
          wt(t, e, u);
        }
      else n.current = null;
  }
  function ah(t) {
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
      wt(t, t.return, u);
    }
  }
  function Fc(t, e, n) {
    try {
      var l = t.stateNode;
      Xy(l, t.type, n, e), l[he] = e;
    } catch (u) {
      wt(t, t.return, u);
    }
  }
  function uh(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Vn(t.type) || t.tag === 4;
  }
  function Pc(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || uh(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && Vn(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Ic(t, e, n) {
    var l = t.tag;
    if (l === 5 || l === 6)
      t = t.stateNode, e ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(t, e) : (e = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, e.appendChild(t), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = Li));
    else if (l !== 4 && (l === 27 && Vn(t.type) && (n = t.stateNode, e = null), t = t.child, t !== null))
      for (Ic(t, e, n), t = t.sibling; t !== null; )
        Ic(t, e, n), t = t.sibling;
  }
  function zi(t, e, n) {
    var l = t.tag;
    if (l === 5 || l === 6)
      t = t.stateNode, e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (l !== 4 && (l === 27 && Vn(t.type) && (n = t.stateNode), t = t.child, t !== null))
      for (zi(t, e, n), t = t.sibling; t !== null; )
        zi(t, e, n), t = t.sibling;
  }
  function ih(t) {
    var e = t.stateNode, n = t.memoizedProps;
    try {
      for (var l = t.type, u = e.attributes; u.length; )
        e.removeAttributeNode(u[0]);
      ue(e, l, n), e[ce] = t, e[he] = n;
    } catch (r) {
      wt(t, t.return, r);
    }
  }
  var bn = !1, Vt = !1, to = !1, rh = typeof WeakSet == "function" ? WeakSet : Set, te = null;
  function xy(t, e) {
    if (t = t.containerInfo, Co = Ji, t = vs(t), Pr(t)) {
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
            var s = 0, h = -1, v = -1, C = 0, B = 0, Y = t, R = null;
            e: for (; ; ) {
              for (var M; Y !== n || u !== 0 && Y.nodeType !== 3 || (h = s + u), Y !== r || l !== 0 && Y.nodeType !== 3 || (v = s + l), Y.nodeType === 3 && (s += Y.nodeValue.length), (M = Y.firstChild) !== null; )
                R = Y, Y = M;
              for (; ; ) {
                if (Y === t) break e;
                if (R === n && ++C === u && (h = s), R === r && ++B === l && (v = s), (M = Y.nextSibling) !== null) break;
                Y = R, R = Y.parentNode;
              }
              Y = M;
            }
            n = h === -1 || v === -1 ? null : { start: h, end: v };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Oo = { focusedElem: t, selectionRange: n }, Ji = !1, te = e; te !== null; )
      if (e = te, t = e.child, (e.subtreeFlags & 1024) !== 0 && t !== null)
        t.return = e, te = t;
      else
        for (; te !== null; ) {
          switch (e = te, r = e.alternate, t = e.flags, e.tag) {
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
                } catch (ut) {
                  wt(
                    n,
                    n.return,
                    ut
                  );
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (t = e.stateNode.containerInfo, n = t.nodeType, n === 9)
                  Mo(t);
                else if (n === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Mo(t);
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
              if ((t & 1024) !== 0) throw Error(f(163));
          }
          if (t = e.sibling, t !== null) {
            t.return = e.return, te = t;
            break;
          }
          te = e.return;
        }
  }
  function ch(t, e, n) {
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
              wt(n, n.return, s);
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
              wt(
                n,
                n.return,
                s
              );
            }
          }
        l & 64 && nh(n), l & 512 && uu(n, n.return);
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
            Xs(t, e);
          } catch (s) {
            wt(n, n.return, s);
          }
        }
        break;
      case 27:
        e === null && l & 4 && ih(n);
      case 26:
      case 5:
        Yn(t, n), e === null && l & 4 && ah(n), l & 512 && uu(n, n.return);
        break;
      case 12:
        Yn(t, n);
        break;
      case 13:
        Yn(t, n), l & 4 && sh(t, n), l & 64 && (t = n.memoizedState, t !== null && (t = t.dehydrated, t !== null && (n = Ny.bind(
          null,
          n
        ), Wy(t, n))));
        break;
      case 22:
        if (l = n.memoizedState !== null || bn, !l) {
          e = e !== null && e.memoizedState !== null || Vt, u = bn;
          var r = Vt;
          bn = l, (Vt = e) && !r ? jn(
            t,
            n,
            (n.subtreeFlags & 8772) !== 0
          ) : Yn(t, n), bn = u, Vt = r;
        }
        break;
      case 30:
        break;
      default:
        Yn(t, n);
    }
  }
  function oh(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, oh(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && Ur(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var qt = null, ye = !1;
  function Sn(t, e, n) {
    for (n = n.child; n !== null; )
      fh(t, e, n), n = n.sibling;
  }
  function fh(t, e, n) {
    if (be && typeof be.onCommitFiberUnmount == "function")
      try {
        be.onCommitFiberUnmount(Oa, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        Vt || Fe(n, e), Sn(
          t,
          e,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        Vt || Fe(n, e);
        var l = qt, u = ye;
        Vn(n.type) && (qt = n.stateNode, ye = !1), Sn(
          t,
          e,
          n
        ), mu(n.stateNode), qt = l, ye = u;
        break;
      case 5:
        Vt || Fe(n, e);
      case 6:
        if (l = qt, u = ye, qt = null, Sn(
          t,
          e,
          n
        ), qt = l, ye = u, qt !== null)
          if (ye)
            try {
              (qt.nodeType === 9 ? qt.body : qt.nodeName === "HTML" ? qt.ownerDocument.body : qt).removeChild(n.stateNode);
            } catch (r) {
              wt(
                n,
                e,
                r
              );
            }
          else
            try {
              qt.removeChild(n.stateNode);
            } catch (r) {
              wt(
                n,
                e,
                r
              );
            }
        break;
      case 18:
        qt !== null && (ye ? (t = qt, Ph(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          n.stateNode
        ), Eu(t)) : Ph(qt, n.stateNode));
        break;
      case 4:
        l = qt, u = ye, qt = n.stateNode.containerInfo, ye = !0, Sn(
          t,
          e,
          n
        ), qt = l, ye = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Vt || qn(2, n, e), Vt || qn(4, n, e), Sn(
          t,
          e,
          n
        );
        break;
      case 1:
        Vt || (Fe(n, e), l = n.stateNode, typeof l.componentWillUnmount == "function" && lh(
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
        Vt = (l = Vt) || n.memoizedState !== null, Sn(
          t,
          e,
          n
        ), Vt = l;
        break;
      default:
        Sn(
          t,
          e,
          n
        );
    }
  }
  function sh(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        Eu(t);
      } catch (n) {
        wt(e, e.return, n);
      }
  }
  function Ay(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new rh()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new rh()), e;
      default:
        throw Error(f(435, t.tag));
    }
  }
  function eo(t, e) {
    var n = Ay(t);
    e.forEach(function(l) {
      var u = Uy.bind(null, t, l);
      n.has(l) || (n.add(l), l.then(u, u));
    });
  }
  function xe(t, e) {
    var n = e.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var u = n[l], r = t, s = e, h = s;
        t: for (; h !== null; ) {
          switch (h.tag) {
            case 27:
              if (Vn(h.type)) {
                qt = h.stateNode, ye = !1;
                break t;
              }
              break;
            case 5:
              qt = h.stateNode, ye = !1;
              break t;
            case 3:
            case 4:
              qt = h.stateNode.containerInfo, ye = !0;
              break t;
          }
          h = h.return;
        }
        if (qt === null) throw Error(f(160));
        fh(r, s, u), qt = null, ye = !1, r = u.alternate, r !== null && (r.return = null), u.return = null;
      }
    if (e.subtreeFlags & 13878)
      for (e = e.child; e !== null; )
        dh(e, t), e = e.sibling;
  }
  var Qe = null;
  function dh(t, e) {
    var n = t.alternate, l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        xe(e, t), Ae(t), l & 4 && (qn(3, t, t.return), au(3, t), qn(5, t, t.return));
        break;
      case 1:
        xe(e, t), Ae(t), l & 512 && (Vt || n === null || Fe(n, n.return)), l & 64 && bn && (t = t.updateQueue, t !== null && (l = t.callbacks, l !== null && (n = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = n === null ? l : n.concat(l))));
        break;
      case 26:
        var u = Qe;
        if (xe(e, t), Ae(t), l & 512 && (Vt || n === null || Fe(n, n.return)), l & 4) {
          var r = n !== null ? n.memoizedState : null;
          if (l = t.memoizedState, n === null)
            if (l === null)
              if (t.stateNode === null) {
                t: {
                  l = t.type, n = t.memoizedProps, u = u.ownerDocument || u;
                  e: switch (l) {
                    case "title":
                      r = u.getElementsByTagName("title")[0], (!r || r[Ma] || r[ce] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = u.createElement(l), u.head.insertBefore(
                        r,
                        u.querySelector("head > title")
                      )), ue(r, l, n), r[ce] = t, Pt(r), l = r;
                      break t;
                    case "link":
                      var s = i0(
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
                      r = u.createElement(l), ue(r, l, n), u.head.appendChild(r);
                      break;
                    case "meta":
                      if (s = i0(
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
                      r = u.createElement(l), ue(r, l, n), u.head.appendChild(r);
                      break;
                    default:
                      throw Error(f(468, l));
                  }
                  r[ce] = t, Pt(r), l = r;
                }
                t.stateNode = l;
              } else
                r0(
                  u,
                  t.type,
                  t.stateNode
                );
            else
              t.stateNode = u0(
                u,
                l,
                t.memoizedProps
              );
          else
            r !== l ? (r === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : r.count--, l === null ? r0(
              u,
              t.type,
              t.stateNode
            ) : u0(
              u,
              l,
              t.memoizedProps
            )) : l === null && t.stateNode !== null && Fc(
              t,
              t.memoizedProps,
              n.memoizedProps
            );
        }
        break;
      case 27:
        xe(e, t), Ae(t), l & 512 && (Vt || n === null || Fe(n, n.return)), n !== null && l & 4 && Fc(
          t,
          t.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (xe(e, t), Ae(t), l & 512 && (Vt || n === null || Fe(n, n.return)), t.flags & 32) {
          u = t.stateNode;
          try {
            wl(u, "");
          } catch (M) {
            wt(t, t.return, M);
          }
        }
        l & 4 && t.stateNode != null && (u = t.memoizedProps, Fc(
          t,
          u,
          n !== null ? n.memoizedProps : u
        )), l & 1024 && (to = !0);
        break;
      case 6:
        if (xe(e, t), Ae(t), l & 4) {
          if (t.stateNode === null)
            throw Error(f(162));
          l = t.memoizedProps, n = t.stateNode;
          try {
            n.nodeValue = l;
          } catch (M) {
            wt(t, t.return, M);
          }
        }
        break;
      case 3:
        if (Zi = null, u = Qe, Qe = Qi(e.containerInfo), xe(e, t), Qe = u, Ae(t), l & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            Eu(e.containerInfo);
          } catch (M) {
            wt(t, t.return, M);
          }
        to && (to = !1, hh(t));
        break;
      case 4:
        l = Qe, Qe = Qi(
          t.stateNode.containerInfo
        ), xe(e, t), Ae(t), Qe = l;
        break;
      case 12:
        xe(e, t), Ae(t);
        break;
      case 13:
        xe(e, t), Ae(t), t.child.flags & 8192 && t.memoizedState !== null != (n !== null && n.memoizedState !== null) && (ro = $e()), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, eo(t, l)));
        break;
      case 22:
        u = t.memoizedState !== null;
        var v = n !== null && n.memoizedState !== null, C = bn, B = Vt;
        if (bn = C || u, Vt = B || v, xe(e, t), Vt = B, bn = C, Ae(t), l & 8192)
          t: for (e = t.stateNode, e._visibility = u ? e._visibility & -2 : e._visibility | 1, u && (n === null || v || bn || Vt || ml(t)), n = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26) {
              if (n === null) {
                v = n = e;
                try {
                  if (r = v.stateNode, u)
                    s = r.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none";
                  else {
                    h = v.stateNode;
                    var Y = v.memoizedProps.style, R = Y != null && Y.hasOwnProperty("display") ? Y.display : null;
                    h.style.display = R == null || typeof R == "boolean" ? "" : ("" + R).trim();
                  }
                } catch (M) {
                  wt(v, v.return, M);
                }
              }
            } else if (e.tag === 6) {
              if (n === null) {
                v = e;
                try {
                  v.stateNode.nodeValue = u ? "" : v.memoizedProps;
                } catch (M) {
                  wt(v, v.return, M);
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
        l & 4 && (l = t.updateQueue, l !== null && (n = l.retryQueue, n !== null && (l.retryQueue = null, eo(t, n))));
        break;
      case 19:
        xe(e, t), Ae(t), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, eo(t, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        xe(e, t), Ae(t);
    }
  }
  function Ae(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var n, l = t.return; l !== null; ) {
          if (uh(l)) {
            n = l;
            break;
          }
          l = l.return;
        }
        if (n == null) throw Error(f(160));
        switch (n.tag) {
          case 27:
            var u = n.stateNode, r = Pc(t);
            zi(t, r, u);
            break;
          case 5:
            var s = n.stateNode;
            n.flags & 32 && (wl(s, ""), n.flags &= -33);
            var h = Pc(t);
            zi(t, h, s);
            break;
          case 3:
          case 4:
            var v = n.stateNode.containerInfo, C = Pc(t);
            Ic(
              t,
              C,
              v
            );
            break;
          default:
            throw Error(f(161));
        }
      } catch (B) {
        wt(t, t.return, B);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function hh(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        hh(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
      }
  }
  function Yn(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        ch(t, e.alternate, e), e = e.sibling;
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
          Fe(e, e.return);
          var n = e.stateNode;
          typeof n.componentWillUnmount == "function" && lh(
            e,
            e.return,
            n
          ), ml(e);
          break;
        case 27:
          mu(e.stateNode);
        case 26:
        case 5:
          Fe(e, e.return), ml(e);
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
            } catch (C) {
              wt(l, l.return, C);
            }
          if (l = r, u = l.updateQueue, u !== null) {
            var h = l.stateNode;
            try {
              var v = u.shared.hiddenCallbacks;
              if (v !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < v.length; u++)
                  Ls(v[u], h);
            } catch (C) {
              wt(l, l.return, C);
            }
          }
          n && s & 64 && nh(r), uu(r, r.return);
          break;
        case 27:
          ih(r);
        case 26:
        case 5:
          jn(
            u,
            r,
            n
          ), n && l === null && s & 4 && ah(r), uu(r, r.return);
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
          ), n && s & 4 && sh(u, r);
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
  function no(t, e) {
    var n = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== n && (t != null && t.refCount++, n != null && Qa(n));
  }
  function lo(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Qa(t));
  }
  function Pe(t, e, n, l) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        mh(
          t,
          e,
          n,
          l
        ), e = e.sibling;
  }
  function mh(t, e, n, l) {
    var u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Pe(
          t,
          e,
          n,
          l
        ), u & 2048 && au(9, e);
        break;
      case 1:
        Pe(
          t,
          e,
          n,
          l
        );
        break;
      case 3:
        Pe(
          t,
          e,
          n,
          l
        ), u & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Qa(t)));
        break;
      case 12:
        if (u & 2048) {
          Pe(
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
            wt(e, e.return, v);
          }
        } else
          Pe(
            t,
            e,
            n,
            l
          );
        break;
      case 13:
        Pe(
          t,
          e,
          n,
          l
        );
        break;
      case 23:
        break;
      case 22:
        r = e.stateNode, s = e.alternate, e.memoizedState !== null ? r._visibility & 2 ? Pe(
          t,
          e,
          n,
          l
        ) : iu(t, e) : r._visibility & 2 ? Pe(
          t,
          e,
          n,
          l
        ) : (r._visibility |= 2, ta(
          t,
          e,
          n,
          l,
          (e.subtreeFlags & 10256) !== 0
        )), u & 2048 && no(s, e);
        break;
      case 24:
        Pe(
          t,
          e,
          n,
          l
        ), u & 2048 && lo(e.alternate, e);
        break;
      default:
        Pe(
          t,
          e,
          n,
          l
        );
    }
  }
  function ta(t, e, n, l, u) {
    for (u = u && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
      var r = t, s = e, h = n, v = l, C = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          ta(
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
          s.memoizedState !== null ? B._visibility & 2 ? ta(
            r,
            s,
            h,
            v,
            u
          ) : iu(
            r,
            s
          ) : (B._visibility |= 2, ta(
            r,
            s,
            h,
            v,
            u
          )), u && C & 2048 && no(
            s.alternate,
            s
          );
          break;
        case 24:
          ta(
            r,
            s,
            h,
            v,
            u
          ), u && C & 2048 && lo(s.alternate, s);
          break;
        default:
          ta(
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
            iu(n, l), u & 2048 && no(
              l.alternate,
              l
            );
            break;
          case 24:
            iu(n, l), u & 2048 && lo(l.alternate, l);
            break;
          default:
            iu(n, l);
        }
        e = e.sibling;
      }
  }
  var ru = 8192;
  function ea(t) {
    if (t.subtreeFlags & ru)
      for (t = t.child; t !== null; )
        ph(t), t = t.sibling;
  }
  function ph(t) {
    switch (t.tag) {
      case 26:
        ea(t), t.flags & ru && t.memoizedState !== null && og(
          Qe,
          t.memoizedState,
          t.memoizedProps
        );
        break;
      case 5:
        ea(t);
        break;
      case 3:
      case 4:
        var e = Qe;
        Qe = Qi(t.stateNode.containerInfo), ea(t), Qe = e;
        break;
      case 22:
        t.memoizedState === null && (e = t.alternate, e !== null && e.memoizedState !== null ? (e = ru, ru = 16777216, ea(t), ru = e) : ea(t));
        break;
      default:
        ea(t);
    }
  }
  function yh(t) {
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
          te = l, vh(
            l,
            t
          );
        }
      yh(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        gh(t), t = t.sibling;
  }
  function gh(t) {
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
          te = l, vh(
            l,
            t
          );
        }
      yh(t);
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
  function vh(t, e) {
    for (; te !== null; ) {
      var n = te;
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
      if (l = n.child, l !== null) l.return = n, te = l;
      else
        t: for (n = t; te !== null; ) {
          l = te;
          var u = l.sibling, r = l.return;
          if (oh(l), l === n) {
            te = null;
            break t;
          }
          if (u !== null) {
            u.return = r, te = u;
            break t;
          }
          te = r;
        }
    }
  }
  var Cy = {
    getCacheForType: function(t) {
      var e = oe(Wt), n = e.data.get(t);
      return n === void 0 && (n = t(), e.data.set(t, n)), n;
    }
  }, Oy = typeof WeakMap == "function" ? WeakMap : Map, Ct = 0, Ht = null, pt = null, vt = 0, Ot = 0, Ce = null, Gn = !1, na = !1, ao = !1, Tn = 0, kt = 0, kn = 0, pl = 0, uo = 0, Ye = 0, la = 0, ou = null, ge = null, io = !1, ro = 0, Ui = 1 / 0, Bi = null, Ln = null, ae = 0, Xn = null, aa = null, ua = 0, co = 0, oo = null, bh = null, fu = 0, fo = null;
  function Oe() {
    if ((Ct & 2) !== 0 && vt !== 0)
      return vt & -vt;
    if (G.T !== null) {
      var t = Zl;
      return t !== 0 ? t : vo();
    }
    return wf();
  }
  function Sh() {
    Ye === 0 && (Ye = (vt & 536870912) === 0 || Tt ? zf() : 536870912);
    var t = qe.current;
    return t !== null && (t.flags |= 32), Ye;
  }
  function Re(t, e, n) {
    (t === Ht && (Ot === 2 || Ot === 9) || t.cancelPendingCommit !== null) && (ia(t, 0), Qn(
      t,
      vt,
      Ye,
      !1
    )), _a(t, n), ((Ct & 2) === 0 || t !== Ht) && (t === Ht && ((Ct & 2) === 0 && (pl |= n), kt === 4 && Qn(
      t,
      vt,
      Ye,
      !1
    )), Ie(t));
  }
  function Th(t, e, n) {
    if ((Ct & 6) !== 0) throw Error(f(327));
    var l = !n && (e & 124) === 0 && (e & t.expiredLanes) === 0 || Ra(t, e), u = l ? My(t, e) : mo(t, e, !0), r = l;
    do {
      if (u === 0) {
        na && !l && Qn(t, e, 0, !1);
        break;
      } else {
        if (n = t.current.alternate, r && !Ry(n)) {
          u = mo(t, e, !1), r = !1;
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
              if (v && (ia(h, s).flags |= 256), s = mo(
                h,
                s,
                !1
              ), s !== 2) {
                if (ao && !v) {
                  h.errorRecoveryDisabledLanes |= r, pl |= r, u = 4;
                  break t;
                }
                r = ge, ge = u, r !== null && (ge === null ? ge = r : ge.push.apply(
                  ge,
                  r
                ));
              }
              u = s;
            }
            if (r = !1, u !== 2) continue;
          }
        }
        if (u === 1) {
          ia(t, 0), Qn(t, e, 0, !0);
          break;
        }
        t: {
          switch (l = t, r = u, r) {
            case 0:
            case 1:
              throw Error(f(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              Qn(
                l,
                e,
                Ye,
                !Gn
              );
              break t;
            case 2:
              ge = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(f(329));
          }
          if ((e & 62914560) === e && (u = ro + 300 - $e(), 10 < u)) {
            if (Qn(
              l,
              e,
              Ye,
              !Gn
            ), Vu(l, 0, !0) !== 0) break t;
            l.timeoutHandle = Wh(
              Eh.bind(
                null,
                l,
                n,
                ge,
                Bi,
                io,
                e,
                Ye,
                pl,
                la,
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
          Eh(
            l,
            n,
            ge,
            Bi,
            io,
            e,
            Ye,
            pl,
            la,
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
    Ie(t);
  }
  function Eh(t, e, n, l, u, r, s, h, v, C, B, Y, R, M) {
    if (t.timeoutHandle = -1, Y = e.subtreeFlags, (Y & 8192 || (Y & 16785408) === 16785408) && (gu = { stylesheets: null, count: 0, unsuspend: cg }, ph(e), Y = fg(), Y !== null)) {
      t.cancelPendingCommit = Y(
        Mh.bind(
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
          R,
          M
        )
      ), Qn(t, r, s, !C);
      return;
    }
    Mh(
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
  function Ry(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if ((n === 0 || n === 11 || n === 15) && e.flags & 16384 && (n = e.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var l = 0; l < n.length; l++) {
          var u = n[l], r = u.getSnapshot;
          u = u.value;
          try {
            if (!Te(r(), u)) return !1;
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
    e &= ~uo, e &= ~pl, t.suspendedLanes |= e, t.pingedLanes &= ~e, l && (t.warmLanes |= e), l = t.expirationTimes;
    for (var u = e; 0 < u; ) {
      var r = 31 - Se(u), s = 1 << r;
      l[r] = -1, u &= ~s;
    }
    n !== 0 && Uf(t, n, e);
  }
  function wi() {
    return (Ct & 6) === 0 ? (su(0), !1) : !0;
  }
  function so() {
    if (pt !== null) {
      if (Ot === 0)
        var t = pt.return;
      else
        t = pt, hn = ol = null, _c(t), Pl = null, eu = 0, t = pt;
      for (; t !== null; )
        eh(t.alternate, t), t = t.return;
      pt = null;
    }
  }
  function ia(t, e) {
    var n = t.timeoutHandle;
    n !== -1 && (t.timeoutHandle = -1, Vy(n)), n = t.cancelPendingCommit, n !== null && (t.cancelPendingCommit = null, n()), so(), Ht = t, pt = n = fn(t.current, null), vt = e, Ot = 0, Ce = null, Gn = !1, na = Ra(t, e), ao = !1, la = Ye = uo = pl = kn = kt = 0, ge = ou = null, io = !1, (e & 8) !== 0 && (e |= e & 32);
    var l = t.entangledLanes;
    if (l !== 0)
      for (t = t.entanglements, l &= e; 0 < l; ) {
        var u = 31 - Se(l), r = 1 << u;
        e |= t[u], l &= ~r;
      }
    return Tn = e, li(), n;
  }
  function xh(t, e) {
    ht = null, G.H = Ei, e === Za || e === di ? (e = Gs(), Ot = 3) : e === qs ? (e = Gs(), Ot = 4) : Ot = e === kd ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, Ce = e, pt === null && (kt = 1, Ri(
      t,
      Ue(e, t.current)
    ));
  }
  function Ah() {
    var t = G.H;
    return G.H = Ei, t === null ? Ei : t;
  }
  function Ch() {
    var t = G.A;
    return G.A = Cy, t;
  }
  function ho() {
    kt = 4, Gn || (vt & 4194048) !== vt && qe.current !== null || (na = !0), (kn & 134217727) === 0 && (pl & 134217727) === 0 || Ht === null || Qn(
      Ht,
      vt,
      Ye,
      !1
    );
  }
  function mo(t, e, n) {
    var l = Ct;
    Ct |= 2;
    var u = Ah(), r = Ch();
    (Ht !== t || vt !== e) && (Bi = null, ia(t, e)), e = !1;
    var s = kt;
    t: do
      try {
        if (Ot !== 0 && pt !== null) {
          var h = pt, v = Ce;
          switch (Ot) {
            case 8:
              so(), s = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              qe.current === null && (e = !0);
              var C = Ot;
              if (Ot = 0, Ce = null, ra(t, h, v, C), n && na) {
                s = 0;
                break t;
              }
              break;
            default:
              C = Ot, Ot = 0, Ce = null, ra(t, h, v, C);
          }
        }
        _y(), s = kt;
        break;
      } catch (B) {
        xh(t, B);
      }
    while (!0);
    return e && t.shellSuspendCounter++, hn = ol = null, Ct = l, G.H = u, G.A = r, pt === null && (Ht = null, vt = 0, li()), s;
  }
  function _y() {
    for (; pt !== null; ) Oh(pt);
  }
  function My(t, e) {
    var n = Ct;
    Ct |= 2;
    var l = Ah(), u = Ch();
    Ht !== t || vt !== e ? (Bi = null, Ui = $e() + 500, ia(t, e)) : na = Ra(
      t,
      e
    );
    t: do
      try {
        if (Ot !== 0 && pt !== null) {
          e = pt;
          var r = Ce;
          e: switch (Ot) {
            case 1:
              Ot = 0, Ce = null, ra(t, e, r, 1);
              break;
            case 2:
            case 9:
              if (Ys(r)) {
                Ot = 0, Ce = null, Rh(e);
                break;
              }
              e = function() {
                Ot !== 2 && Ot !== 9 || Ht !== t || (Ot = 7), Ie(t);
              }, r.then(e, e);
              break t;
            case 3:
              Ot = 7;
              break t;
            case 4:
              Ot = 5;
              break t;
            case 7:
              Ys(r) ? (Ot = 0, Ce = null, Rh(e)) : (Ot = 0, Ce = null, ra(t, e, r, 7));
              break;
            case 5:
              var s = null;
              switch (pt.tag) {
                case 26:
                  s = pt.memoizedState;
                case 5:
                case 27:
                  var h = pt;
                  if (!s || c0(s)) {
                    Ot = 0, Ce = null;
                    var v = h.sibling;
                    if (v !== null) pt = v;
                    else {
                      var C = h.return;
                      C !== null ? (pt = C, Hi(C)) : pt = null;
                    }
                    break e;
                  }
              }
              Ot = 0, Ce = null, ra(t, e, r, 5);
              break;
            case 6:
              Ot = 0, Ce = null, ra(t, e, r, 6);
              break;
            case 8:
              so(), kt = 6;
              break t;
            default:
              throw Error(f(462));
          }
        }
        Dy();
        break;
      } catch (B) {
        xh(t, B);
      }
    while (!0);
    return hn = ol = null, G.H = l, G.A = u, Ct = n, pt !== null ? 0 : (Ht = null, vt = 0, li(), kt);
  }
  function Dy() {
    for (; pt !== null && !Pm(); )
      Oh(pt);
  }
  function Oh(t) {
    var e = Id(t.alternate, t, Tn);
    t.memoizedProps = t.pendingProps, e === null ? Hi(t) : pt = e;
  }
  function Rh(t) {
    var e = t, n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Kd(
          n,
          e,
          e.pendingProps,
          e.type,
          void 0,
          vt
        );
        break;
      case 11:
        e = Kd(
          n,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          vt
        );
        break;
      case 5:
        _c(e);
      default:
        eh(n, e), e = pt = _s(e, Tn), e = Id(n, e, Tn);
    }
    t.memoizedProps = t.pendingProps, e === null ? Hi(t) : pt = e;
  }
  function ra(t, e, n, l) {
    hn = ol = null, _c(e), Pl = null, eu = 0;
    var u = e.return;
    try {
      if (by(
        t,
        u,
        e,
        n,
        vt
      )) {
        kt = 1, Ri(
          t,
          Ue(n, t.current)
        ), pt = null;
        return;
      }
    } catch (r) {
      if (u !== null) throw pt = u, r;
      kt = 1, Ri(
        t,
        Ue(n, t.current)
      ), pt = null;
      return;
    }
    e.flags & 32768 ? (Tt || l === 1 ? t = !0 : na || (vt & 536870912) !== 0 ? t = !1 : (Gn = t = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = qe.current, l !== null && l.tag === 13 && (l.flags |= 16384))), _h(e, t)) : Hi(e);
  }
  function Hi(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        _h(
          e,
          Gn
        );
        return;
      }
      t = e.return;
      var n = Ty(
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
    kt === 0 && (kt = 5);
  }
  function _h(t, e) {
    do {
      var n = Ey(t.alternate, t);
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
    kt = 6, pt = null;
  }
  function Mh(t, e, n, l, u, r, s, h, v) {
    t.cancelPendingCommit = null;
    do
      qi();
    while (ae !== 0);
    if ((Ct & 6) !== 0) throw Error(f(327));
    if (e !== null) {
      if (e === t.current) throw Error(f(177));
      if (r = e.lanes | e.childLanes, r |= lc, cp(
        t,
        n,
        r,
        s,
        h,
        v
      ), t === Ht && (pt = Ht = null, vt = 0), aa = e, Xn = t, ua = n, co = r, oo = u, bh = l, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, By(Lu, function() {
        return Bh(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), l = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || l) {
        l = G.T, G.T = null, u = Q.p, Q.p = 2, s = Ct, Ct |= 4;
        try {
          xy(t, e, n);
        } finally {
          Ct = s, Q.p = u, G.T = l;
        }
      }
      ae = 1, Dh(), zh(), Nh();
    }
  }
  function Dh() {
    if (ae === 1) {
      ae = 0;
      var t = Xn, e = aa, n = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || n) {
        n = G.T, G.T = null;
        var l = Q.p;
        Q.p = 2;
        var u = Ct;
        Ct |= 4;
        try {
          dh(e, t);
          var r = Oo, s = vs(t.containerInfo), h = r.focusedElem, v = r.selectionRange;
          if (s !== h && h && h.ownerDocument && gs(
            h.ownerDocument.documentElement,
            h
          )) {
            if (v !== null && Pr(h)) {
              var C = v.start, B = v.end;
              if (B === void 0 && (B = C), "selectionStart" in h)
                h.selectionStart = C, h.selectionEnd = Math.min(
                  B,
                  h.value.length
                );
              else {
                var Y = h.ownerDocument || document, R = Y && Y.defaultView || window;
                if (R.getSelection) {
                  var M = R.getSelection(), ct = h.textContent.length, ut = Math.min(v.start, ct), Nt = v.end === void 0 ? ut : Math.min(v.end, ct);
                  !M.extend && ut > Nt && (s = Nt, Nt = ut, ut = s);
                  var E = ys(
                    h,
                    ut
                  ), S = ys(
                    h,
                    Nt
                  );
                  if (E && S && (M.rangeCount !== 1 || M.anchorNode !== E.node || M.anchorOffset !== E.offset || M.focusNode !== S.node || M.focusOffset !== S.offset)) {
                    var A = Y.createRange();
                    A.setStart(E.node, E.offset), M.removeAllRanges(), ut > Nt ? (M.addRange(A), M.extend(S.node, S.offset)) : (A.setEnd(S.node, S.offset), M.addRange(A));
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
          Ji = !!Co, Oo = Co = null;
        } finally {
          Ct = u, Q.p = l, G.T = n;
        }
      }
      t.current = e, ae = 2;
    }
  }
  function zh() {
    if (ae === 2) {
      ae = 0;
      var t = Xn, e = aa, n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        n = G.T, G.T = null;
        var l = Q.p;
        Q.p = 2;
        var u = Ct;
        Ct |= 4;
        try {
          ch(t, e.alternate, e);
        } finally {
          Ct = u, Q.p = l, G.T = n;
        }
      }
      ae = 3;
    }
  }
  function Nh() {
    if (ae === 4 || ae === 3) {
      ae = 0, Im();
      var t = Xn, e = aa, n = ua, l = bh;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? ae = 5 : (ae = 0, aa = Xn = null, Uh(t, t.pendingLanes));
      var u = t.pendingLanes;
      if (u === 0 && (Ln = null), zr(n), e = e.stateNode, be && typeof be.onCommitFiberRoot == "function")
        try {
          be.onCommitFiberRoot(
            Oa,
            e,
            void 0,
            (e.current.flags & 128) === 128
          );
        } catch {
        }
      if (l !== null) {
        e = G.T, u = Q.p, Q.p = 2, G.T = null;
        try {
          for (var r = t.onRecoverableError, s = 0; s < l.length; s++) {
            var h = l[s];
            r(h.value, {
              componentStack: h.stack
            });
          }
        } finally {
          G.T = e, Q.p = u;
        }
      }
      (ua & 3) !== 0 && qi(), Ie(t), u = t.pendingLanes, (n & 4194090) !== 0 && (u & 42) !== 0 ? t === fo ? fu++ : (fu = 0, fo = t) : fu = 0, su(0);
    }
  }
  function Uh(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, Qa(e)));
  }
  function qi(t) {
    return Dh(), zh(), Nh(), Bh();
  }
  function Bh() {
    if (ae !== 5) return !1;
    var t = Xn, e = co;
    co = 0;
    var n = zr(ua), l = G.T, u = Q.p;
    try {
      Q.p = 32 > n ? 32 : n, G.T = null, n = oo, oo = null;
      var r = Xn, s = ua;
      if (ae = 0, aa = Xn = null, ua = 0, (Ct & 6) !== 0) throw Error(f(331));
      var h = Ct;
      if (Ct |= 4, gh(r.current), mh(
        r,
        r.current,
        s,
        n
      ), Ct = h, su(0, !1), be && typeof be.onPostCommitFiberRoot == "function")
        try {
          be.onPostCommitFiberRoot(Oa, r);
        } catch {
        }
      return !0;
    } finally {
      Q.p = u, G.T = l, Uh(t, e);
    }
  }
  function wh(t, e, n) {
    e = Ue(n, e), e = Lc(t.stateNode, e, 2), t = Un(t, e, 2), t !== null && (_a(t, 2), Ie(t));
  }
  function wt(t, e, n) {
    if (t.tag === 3)
      wh(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          wh(
            e,
            t,
            n
          );
          break;
        } else if (e.tag === 1) {
          var l = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Ln === null || !Ln.has(l))) {
            t = Ue(n, t), n = jd(2), l = Un(e, n, 2), l !== null && (Gd(
              n,
              l,
              e,
              t
            ), _a(l, 2), Ie(l));
            break;
          }
        }
        e = e.return;
      }
  }
  function po(t, e, n) {
    var l = t.pingCache;
    if (l === null) {
      l = t.pingCache = new Oy();
      var u = /* @__PURE__ */ new Set();
      l.set(e, u);
    } else
      u = l.get(e), u === void 0 && (u = /* @__PURE__ */ new Set(), l.set(e, u));
    u.has(n) || (ao = !0, u.add(n), t = zy.bind(null, t, e, n), e.then(t, t));
  }
  function zy(t, e, n) {
    var l = t.pingCache;
    l !== null && l.delete(e), t.pingedLanes |= t.suspendedLanes & n, t.warmLanes &= ~n, Ht === t && (vt & n) === n && (kt === 4 || kt === 3 && (vt & 62914560) === vt && 300 > $e() - ro ? (Ct & 2) === 0 && ia(t, 0) : uo |= n, la === vt && (la = 0)), Ie(t);
  }
  function Hh(t, e) {
    e === 0 && (e = Nf()), t = Ll(t, e), t !== null && (_a(t, e), Ie(t));
  }
  function Ny(t) {
    var e = t.memoizedState, n = 0;
    e !== null && (n = e.retryLane), Hh(t, n);
  }
  function Uy(t, e) {
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
        throw Error(f(314));
    }
    l !== null && l.delete(e), Hh(t, n);
  }
  function By(t, e) {
    return Rr(t, e);
  }
  var Yi = null, ca = null, yo = !1, ji = !1, go = !1, yl = 0;
  function Ie(t) {
    t !== ca && t.next === null && (ca === null ? Yi = ca = t : ca = ca.next = t), ji = !0, yo || (yo = !0, Hy());
  }
  function su(t, e) {
    if (!go && ji) {
      go = !0;
      do
        for (var n = !1, l = Yi; l !== null; ) {
          if (t !== 0) {
            var u = l.pendingLanes;
            if (u === 0) var r = 0;
            else {
              var s = l.suspendedLanes, h = l.pingedLanes;
              r = (1 << 31 - Se(42 | t) + 1) - 1, r &= u & ~(s & ~h), r = r & 201326741 ? r & 201326741 | 1 : r ? r | 2 : 0;
            }
            r !== 0 && (n = !0, Gh(l, r));
          } else
            r = vt, r = Vu(
              l,
              l === Ht ? r : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (r & 3) === 0 || Ra(l, r) || (n = !0, Gh(l, r));
          l = l.next;
        }
      while (n);
      go = !1;
    }
  }
  function wy() {
    qh();
  }
  function qh() {
    ji = yo = !1;
    var t = 0;
    yl !== 0 && (Qy() && (t = yl), yl = 0);
    for (var e = $e(), n = null, l = Yi; l !== null; ) {
      var u = l.next, r = Yh(l, e);
      r === 0 ? (l.next = null, n === null ? Yi = u : n.next = u, u === null && (ca = n)) : (n = l, (t !== 0 || (r & 3) !== 0) && (ji = !0)), l = u;
    }
    su(t);
  }
  function Yh(t, e) {
    for (var n = t.suspendedLanes, l = t.pingedLanes, u = t.expirationTimes, r = t.pendingLanes & -62914561; 0 < r; ) {
      var s = 31 - Se(r), h = 1 << s, v = u[s];
      v === -1 ? ((h & n) === 0 || (h & l) !== 0) && (u[s] = rp(h, e)) : v <= e && (t.expiredLanes |= h), r &= ~h;
    }
    if (e = Ht, n = vt, n = Vu(
      t,
      t === e ? n : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), l = t.callbackNode, n === 0 || t === e && (Ot === 2 || Ot === 9) || t.cancelPendingCommit !== null)
      return l !== null && l !== null && _r(l), t.callbackNode = null, t.callbackPriority = 0;
    if ((n & 3) === 0 || Ra(t, n)) {
      if (e = n & -n, e === t.callbackPriority) return e;
      switch (l !== null && _r(l), zr(n)) {
        case 2:
        case 8:
          n = Mf;
          break;
        case 32:
          n = Lu;
          break;
        case 268435456:
          n = Df;
          break;
        default:
          n = Lu;
      }
      return l = jh.bind(null, t), n = Rr(n, l), t.callbackPriority = e, t.callbackNode = n, e;
    }
    return l !== null && l !== null && _r(l), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function jh(t, e) {
    if (ae !== 0 && ae !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var n = t.callbackNode;
    if (qi() && t.callbackNode !== n)
      return null;
    var l = vt;
    return l = Vu(
      t,
      t === Ht ? l : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), l === 0 ? null : (Th(t, l, e), Yh(t, $e()), t.callbackNode != null && t.callbackNode === n ? jh.bind(null, t) : null);
  }
  function Gh(t, e) {
    if (qi()) return null;
    Th(t, e, !0);
  }
  function Hy() {
    Zy(function() {
      (Ct & 6) !== 0 ? Rr(
        _f,
        wy
      ) : qh();
    });
  }
  function vo() {
    return yl === 0 && (yl = zf()), yl;
  }
  function kh(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Wu("" + t);
  }
  function Lh(t, e) {
    var n = e.ownerDocument.createElement("input");
    return n.name = e.name, n.value = e.value, t.id && n.setAttribute("form", t.id), e.parentNode.insertBefore(n, e), t = new FormData(t), n.parentNode.removeChild(n), t;
  }
  function qy(t, e, n, l, u) {
    if (e === "submit" && n && n.stateNode === u) {
      var r = kh(
        (u[he] || null).action
      ), s = l.submitter;
      s && (e = (e = s[he] || null) ? kh(e.formAction) : s.getAttribute("formAction"), e !== null && (r = e, s = null));
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
                  var v = s ? Lh(u, s) : new FormData(u);
                  qc(
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
                typeof r == "function" && (h.preventDefault(), v = s ? Lh(u, s) : new FormData(u), qc(
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
  for (var bo = 0; bo < nc.length; bo++) {
    var So = nc[bo], Yy = So.toLowerCase(), jy = So[0].toUpperCase() + So.slice(1);
    Xe(
      Yy,
      "on" + jy
    );
  }
  Xe(Ts, "onAnimationEnd"), Xe(Es, "onAnimationIteration"), Xe(xs, "onAnimationStart"), Xe("dblclick", "onDoubleClick"), Xe("focusin", "onFocus"), Xe("focusout", "onBlur"), Xe(ny, "onTransitionRun"), Xe(ly, "onTransitionStart"), Xe(ay, "onTransitionCancel"), Xe(As, "onTransitionEnd"), Nl("onMouseEnter", ["mouseout", "mouseover"]), Nl("onMouseLeave", ["mouseout", "mouseover"]), Nl("onPointerEnter", ["pointerout", "pointerover"]), Nl("onPointerLeave", ["pointerout", "pointerover"]), tl(
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
  ), Gy = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(du)
  );
  function Xh(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var l = t[n], u = l.event;
      l = l.listeners;
      t: {
        var r = void 0;
        if (e)
          for (var s = l.length - 1; 0 <= s; s--) {
            var h = l[s], v = h.instance, C = h.currentTarget;
            if (h = h.listener, v !== r && u.isPropagationStopped())
              break t;
            r = h, u.currentTarget = C;
            try {
              r(u);
            } catch (B) {
              Oi(B);
            }
            u.currentTarget = null, r = v;
          }
        else
          for (s = 0; s < l.length; s++) {
            if (h = l[s], v = h.instance, C = h.currentTarget, h = h.listener, v !== r && u.isPropagationStopped())
              break t;
            r = h, u.currentTarget = C;
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
    var n = e[Nr];
    n === void 0 && (n = e[Nr] = /* @__PURE__ */ new Set());
    var l = t + "__bubble";
    n.has(l) || (Qh(e, t, 2, !1), n.add(l));
  }
  function To(t, e, n) {
    var l = 0;
    e && (l |= 4), Qh(
      n,
      t,
      l,
      e
    );
  }
  var Gi = "_reactListening" + Math.random().toString(36).slice(2);
  function Eo(t) {
    if (!t[Gi]) {
      t[Gi] = !0, qf.forEach(function(n) {
        n !== "selectionchange" && (Gy.has(n) || To(n, !1, t), To(n, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Gi] || (e[Gi] = !0, To("selectionchange", !1, e));
    }
  }
  function Qh(t, e, n, l) {
    switch (m0(e)) {
      case 2:
        var u = hg;
        break;
      case 8:
        u = mg;
        break;
      default:
        u = Ho;
    }
    n = u.bind(
      null,
      e,
      n,
      t
    ), u = void 0, !Xr || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (u = !0), l ? u !== void 0 ? t.addEventListener(e, n, {
      capture: !0,
      passive: u
    }) : t.addEventListener(e, n, !0) : u !== void 0 ? t.addEventListener(e, n, {
      passive: u
    }) : t.addEventListener(e, n, !1);
  }
  function xo(t, e, n, l, u) {
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
            if (s = Ml(h), s === null) return;
            if (v = s.tag, v === 5 || v === 6 || v === 26 || v === 27) {
              l = r = s;
              continue t;
            }
            h = h.parentNode;
          }
        }
        l = l.return;
      }
    Ff(function() {
      var C = r, B = kr(n), Y = [];
      t: {
        var R = Cs.get(t);
        if (R !== void 0) {
          var M = ti, ct = t;
          switch (t) {
            case "keypress":
              if (Pu(n) === 0) break t;
            case "keydown":
            case "keyup":
              M = Bp;
              break;
            case "focusin":
              ct = "focus", M = Kr;
              break;
            case "focusout":
              ct = "blur", M = Kr;
              break;
            case "beforeblur":
            case "afterblur":
              M = Kr;
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
              M = ts;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              M = Ep;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              M = qp;
              break;
            case Ts:
            case Es:
            case xs:
              M = Cp;
              break;
            case As:
              M = jp;
              break;
            case "scroll":
            case "scrollend":
              M = Sp;
              break;
            case "wheel":
              M = kp;
              break;
            case "copy":
            case "cut":
            case "paste":
              M = Rp;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              M = ns;
              break;
            case "toggle":
            case "beforetoggle":
              M = Xp;
          }
          var ut = (e & 4) !== 0, Nt = !ut && (t === "scroll" || t === "scrollend"), E = ut ? R !== null ? R + "Capture" : null : R;
          ut = [];
          for (var S = C, A; S !== null; ) {
            var H = S;
            if (A = H.stateNode, H = H.tag, H !== 5 && H !== 26 && H !== 27 || A === null || E === null || (H = za(S, E), H != null && ut.push(
              hu(S, H, A)
            )), Nt) break;
            S = S.return;
          }
          0 < ut.length && (R = new M(
            R,
            ct,
            null,
            n,
            B
          ), Y.push({ event: R, listeners: ut }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (R = t === "mouseover" || t === "pointerover", M = t === "mouseout" || t === "pointerout", R && n !== Gr && (ct = n.relatedTarget || n.fromElement) && (Ml(ct) || ct[_l]))
            break t;
          if ((M || R) && (R = B.window === B ? B : (R = B.ownerDocument) ? R.defaultView || R.parentWindow : window, M ? (ct = n.relatedTarget || n.toElement, M = C, ct = ct ? Ml(ct) : null, ct !== null && (Nt = m(ct), ut = ct.tag, ct !== Nt || ut !== 5 && ut !== 27 && ut !== 6) && (ct = null)) : (M = null, ct = C), M !== ct)) {
            if (ut = ts, H = "onMouseLeave", E = "onMouseEnter", S = "mouse", (t === "pointerout" || t === "pointerover") && (ut = ns, H = "onPointerLeave", E = "onPointerEnter", S = "pointer"), Nt = M == null ? R : Da(M), A = ct == null ? R : Da(ct), R = new ut(
              H,
              S + "leave",
              M,
              n,
              B
            ), R.target = Nt, R.relatedTarget = A, H = null, Ml(B) === C && (ut = new ut(
              E,
              S + "enter",
              ct,
              n,
              B
            ), ut.target = A, ut.relatedTarget = Nt, H = ut), Nt = H, M && ct)
              e: {
                for (ut = M, E = ct, S = 0, A = ut; A; A = oa(A))
                  S++;
                for (A = 0, H = E; H; H = oa(H))
                  A++;
                for (; 0 < S - A; )
                  ut = oa(ut), S--;
                for (; 0 < A - S; )
                  E = oa(E), A--;
                for (; S--; ) {
                  if (ut === E || E !== null && ut === E.alternate)
                    break e;
                  ut = oa(ut), E = oa(E);
                }
                ut = null;
              }
            else ut = null;
            M !== null && Vh(
              Y,
              R,
              M,
              ut,
              !1
            ), ct !== null && Nt !== null && Vh(
              Y,
              Nt,
              ct,
              ut,
              !0
            );
          }
        }
        t: {
          if (R = C ? Da(C) : window, M = R.nodeName && R.nodeName.toLowerCase(), M === "select" || M === "input" && R.type === "file")
            var tt = fs;
          else if (cs(R))
            if (ss)
              tt = Ip;
            else {
              tt = Fp;
              var mt = Wp;
            }
          else
            M = R.nodeName, !M || M.toLowerCase() !== "input" || R.type !== "checkbox" && R.type !== "radio" ? C && jr(C.elementType) && (tt = fs) : tt = Pp;
          if (tt && (tt = tt(t, C))) {
            os(
              Y,
              tt,
              n,
              B
            );
            break t;
          }
          mt && mt(t, R, C), t === "focusout" && C && R.type === "number" && C.memoizedProps.value != null && Yr(R, "number", R.value);
        }
        switch (mt = C ? Da(C) : window, t) {
          case "focusin":
            (cs(mt) || mt.contentEditable === "true") && (jl = mt, Ir = C, ja = null);
            break;
          case "focusout":
            ja = Ir = jl = null;
            break;
          case "mousedown":
            tc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            tc = !1, bs(Y, n, B);
            break;
          case "selectionchange":
            if (ey) break;
          case "keydown":
          case "keyup":
            bs(Y, n, B);
        }
        var nt;
        if (Jr)
          t: {
            switch (t) {
              case "compositionstart":
                var it = "onCompositionStart";
                break t;
              case "compositionend":
                it = "onCompositionEnd";
                break t;
              case "compositionupdate":
                it = "onCompositionUpdate";
                break t;
            }
            it = void 0;
          }
        else
          Yl ? is(t, n) && (it = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (it = "onCompositionStart");
        it && (ls && n.locale !== "ko" && (Yl || it !== "onCompositionStart" ? it === "onCompositionEnd" && Yl && (nt = Pf()) : (Mn = B, Qr = "value" in Mn ? Mn.value : Mn.textContent, Yl = !0)), mt = ki(C, it), 0 < mt.length && (it = new es(
          it,
          t,
          null,
          n,
          B
        ), Y.push({ event: it, listeners: mt }), nt ? it.data = nt : (nt = rs(n), nt !== null && (it.data = nt)))), (nt = Vp ? Zp(t, n) : Kp(t, n)) && (it = ki(C, "onBeforeInput"), 0 < it.length && (mt = new es(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          B
        ), Y.push({
          event: mt,
          listeners: it
        }), mt.data = nt)), qy(
          Y,
          t,
          C,
          n,
          B
        );
      }
      Xh(Y, e);
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
  function oa(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Vh(t, e, n, l, u) {
    for (var r = e._reactName, s = []; n !== null && n !== l; ) {
      var h = n, v = h.alternate, C = h.stateNode;
      if (h = h.tag, v !== null && v === l) break;
      h !== 5 && h !== 26 && h !== 27 || C === null || (v = C, u ? (C = za(n, r), C != null && s.unshift(
        hu(n, C, v)
      )) : u || (C = za(n, r), C != null && s.push(
        hu(n, C, v)
      ))), n = n.return;
    }
    s.length !== 0 && t.push({ event: e, listeners: s });
  }
  var ky = /\r\n?/g, Ly = /\u0000|\uFFFD/g;
  function Zh(t) {
    return (typeof t == "string" ? t : "" + t).replace(ky, `
`).replace(Ly, "");
  }
  function Kh(t, e) {
    return e = Zh(e), Zh(t) === e;
  }
  function Li() {
  }
  function zt(t, e, n, l, u, r) {
    switch (n) {
      case "children":
        typeof l == "string" ? e === "body" || e === "textarea" && l === "" || wl(t, l) : (typeof l == "number" || typeof l == "bigint") && e !== "body" && wl(t, "" + l);
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
        Jf(t, l, r);
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
            throw Error(f(61));
          if (n = l.__html, n != null) {
            if (u.children != null) throw Error(f(60));
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
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = vp.get(n) || n, Zu(t, n, l));
    }
  }
  function Ao(t, e, n, l, u, r) {
    switch (n) {
      case "style":
        Jf(t, l, r);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(f(61));
          if (n = l.__html, n != null) {
            if (u.children != null) throw Error(f(60));
            t.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof l == "string" ? wl(t, l) : (typeof l == "number" || typeof l == "bigint") && wl(t, "" + l);
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
        if (!Yf.hasOwnProperty(n))
          t: {
            if (n[0] === "o" && n[1] === "n" && (u = n.endsWith("Capture"), e = n.slice(2, u ? n.length - 7 : void 0), r = t[he] || null, r = r != null ? r[n] : null, typeof r == "function" && t.removeEventListener(e, r, u), typeof l == "function")) {
              typeof r != "function" && r !== null && (n in t ? t[n] = null : t.hasAttribute(n) && t.removeAttribute(n)), t.addEventListener(e, l, u);
              break t;
            }
            n in t ? t[n] = l : l === !0 ? t.setAttribute(n, "") : Zu(t, n, l);
          }
    }
  }
  function ue(t, e, n) {
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
                  throw Error(f(137, e));
                default:
                  zt(t, e, r, s, n, null);
              }
          }
        u && zt(t, e, "srcSet", n.srcSet, n, null), l && zt(t, e, "src", n.src, n, null);
        return;
      case "input":
        yt("invalid", t);
        var h = r = s = u = null, v = null, C = null;
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
                  C = B;
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
                    throw Error(f(137, e));
                  break;
                default:
                  zt(t, e, l, B, n, null);
              }
          }
        Vf(
          t,
          r,
          h,
          v,
          C,
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
        e = r, n = s, t.multiple = !!l, e != null ? Bl(t, !!l, e, !1) : n != null && Bl(t, !!l, n, !0);
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
                if (h != null) throw Error(f(91));
                break;
              default:
                zt(t, e, s, h, n, null);
            }
        Kf(t, l, u, r), $u(t);
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
        for (C in n)
          if (n.hasOwnProperty(C) && (l = n[C], l != null))
            switch (C) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(f(137, e));
              default:
                zt(t, e, C, l, n, null);
            }
        return;
      default:
        if (jr(e)) {
          for (B in n)
            n.hasOwnProperty(B) && (l = n[B], l !== void 0 && Ao(
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
  function Xy(t, e, n, l) {
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
        var u = null, r = null, s = null, h = null, v = null, C = null, B = null;
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
        for (var R in l) {
          var M = l[R];
          if (Y = n[R], l.hasOwnProperty(R) && (M != null || Y != null))
            switch (R) {
              case "type":
                r = M;
                break;
              case "name":
                u = M;
                break;
              case "checked":
                C = M;
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
                  throw Error(f(137, e));
                break;
              default:
                M !== Y && zt(
                  t,
                  e,
                  R,
                  M,
                  l,
                  Y
                );
            }
        }
        qr(
          t,
          s,
          h,
          v,
          C,
          B,
          r,
          u
        );
        return;
      case "select":
        M = s = h = R = null;
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
                R = r;
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
        e = h, n = s, l = M, R != null ? Bl(t, !!n, R, !1) : !!l != !!n && (e != null ? Bl(t, !!n, e, !0) : Bl(t, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        M = R = null;
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
                R = u;
                break;
              case "defaultValue":
                M = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(f(91));
                break;
              default:
                u !== r && zt(t, e, s, u, l, r);
            }
        Zf(t, R, M);
        return;
      case "option":
        for (var ct in n)
          if (R = n[ct], n.hasOwnProperty(ct) && R != null && !l.hasOwnProperty(ct))
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
                  R
                );
            }
        for (v in l)
          if (R = l[v], M = n[v], l.hasOwnProperty(v) && R !== M && (R != null || M != null))
            switch (v) {
              case "selected":
                t.selected = R && typeof R != "function" && typeof R != "symbol";
                break;
              default:
                zt(
                  t,
                  e,
                  v,
                  R,
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
        for (var ut in n)
          R = n[ut], n.hasOwnProperty(ut) && R != null && !l.hasOwnProperty(ut) && zt(t, e, ut, null, l, R);
        for (C in l)
          if (R = l[C], M = n[C], l.hasOwnProperty(C) && R !== M && (R != null || M != null))
            switch (C) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (R != null)
                  throw Error(f(137, e));
                break;
              default:
                zt(
                  t,
                  e,
                  C,
                  R,
                  l,
                  M
                );
            }
        return;
      default:
        if (jr(e)) {
          for (var Nt in n)
            R = n[Nt], n.hasOwnProperty(Nt) && R !== void 0 && !l.hasOwnProperty(Nt) && Ao(
              t,
              e,
              Nt,
              void 0,
              l,
              R
            );
          for (B in l)
            R = l[B], M = n[B], !l.hasOwnProperty(B) || R === M || R === void 0 && M === void 0 || Ao(
              t,
              e,
              B,
              R,
              l,
              M
            );
          return;
        }
    }
    for (var E in n)
      R = n[E], n.hasOwnProperty(E) && R != null && !l.hasOwnProperty(E) && zt(t, e, E, null, l, R);
    for (Y in l)
      R = l[Y], M = n[Y], !l.hasOwnProperty(Y) || R === M || R == null && M == null || zt(t, e, Y, R, l, M);
  }
  var Co = null, Oo = null;
  function Xi(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function $h(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Jh(t, e) {
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
  function Ro(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var _o = null;
  function Qy() {
    var t = window.event;
    return t && t.type === "popstate" ? t === _o ? !1 : (_o = t, !0) : (_o = null, !1);
  }
  var Wh = typeof setTimeout == "function" ? setTimeout : void 0, Vy = typeof clearTimeout == "function" ? clearTimeout : void 0, Fh = typeof Promise == "function" ? Promise : void 0, Zy = typeof queueMicrotask == "function" ? queueMicrotask : typeof Fh < "u" ? function(t) {
    return Fh.resolve(null).then(t).catch(Ky);
  } : Wh;
  function Ky(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Vn(t) {
    return t === "head";
  }
  function Ph(t, e) {
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
  function Mo(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (e = e.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Mo(n), Ur(n);
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
  function $y(t, e, n, l) {
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
  function Jy(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = Ve(t.nextSibling), t === null)) return null;
    return t;
  }
  function Do(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState === "complete";
  }
  function Wy(t, e) {
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
  var zo = null;
  function Ih(t) {
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
  function t0(t, e, n) {
    switch (e = Xi(n), t) {
      case "html":
        if (t = e.documentElement, !t) throw Error(f(452));
        return t;
      case "head":
        if (t = e.head, !t) throw Error(f(453));
        return t;
      case "body":
        if (t = e.body, !t) throw Error(f(454));
        return t;
      default:
        throw Error(f(451));
    }
  }
  function mu(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    Ur(t);
  }
  var je = /* @__PURE__ */ new Map(), e0 = /* @__PURE__ */ new Set();
  function Qi(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var En = Q.d;
  Q.d = {
    f: Fy,
    r: Py,
    D: Iy,
    C: tg,
    L: eg,
    m: ng,
    X: ag,
    S: lg,
    M: ug
  };
  function Fy() {
    var t = En.f(), e = wi();
    return t || e;
  }
  function Py(t) {
    var e = Dl(t);
    e !== null && e.tag === 5 && e.type === "form" ? Td(e) : En.r(t);
  }
  var fa = typeof document > "u" ? null : document;
  function n0(t, e, n) {
    var l = fa;
    if (l && typeof e == "string" && e) {
      var u = Ne(e);
      u = 'link[rel="' + t + '"][href="' + u + '"]', typeof n == "string" && (u += '[crossorigin="' + n + '"]'), e0.has(u) || (e0.add(u), t = { rel: t, crossOrigin: n, href: e }, l.querySelector(u) === null && (e = l.createElement("link"), ue(e, "link", t), Pt(e), l.head.appendChild(e)));
    }
  }
  function Iy(t) {
    En.D(t), n0("dns-prefetch", t, null);
  }
  function tg(t, e) {
    En.C(t, e), n0("preconnect", t, e);
  }
  function eg(t, e, n) {
    En.L(t, e, n);
    var l = fa;
    if (l && t && e) {
      var u = 'link[rel="preload"][as="' + Ne(e) + '"]';
      e === "image" && n && n.imageSrcSet ? (u += '[imagesrcset="' + Ne(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (u += '[imagesizes="' + Ne(
        n.imageSizes
      ) + '"]')) : u += '[href="' + Ne(t) + '"]';
      var r = u;
      switch (e) {
        case "style":
          r = sa(t);
          break;
        case "script":
          r = da(t);
      }
      je.has(r) || (t = x(
        {
          rel: "preload",
          href: e === "image" && n && n.imageSrcSet ? void 0 : t,
          as: e
        },
        n
      ), je.set(r, t), l.querySelector(u) !== null || e === "style" && l.querySelector(pu(r)) || e === "script" && l.querySelector(yu(r)) || (e = l.createElement("link"), ue(e, "link", t), Pt(e), l.head.appendChild(e)));
    }
  }
  function ng(t, e) {
    En.m(t, e);
    var n = fa;
    if (n && t) {
      var l = e && typeof e.as == "string" ? e.as : "script", u = 'link[rel="modulepreload"][as="' + Ne(l) + '"][href="' + Ne(t) + '"]', r = u;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          r = da(t);
      }
      if (!je.has(r) && (t = x({ rel: "modulepreload", href: t }, e), je.set(r, t), n.querySelector(u) === null)) {
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
        l = n.createElement("link"), ue(l, "link", t), Pt(l), n.head.appendChild(l);
      }
    }
  }
  function lg(t, e, n) {
    En.S(t, e, n);
    var l = fa;
    if (l && t) {
      var u = zl(l).hoistableStyles, r = sa(t);
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
          ), (n = je.get(r)) && No(t, n);
          var v = s = l.createElement("link");
          Pt(v), ue(v, "link", t), v._p = new Promise(function(C, B) {
            v.onload = C, v.onerror = B;
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
  function ag(t, e) {
    En.X(t, e);
    var n = fa;
    if (n && t) {
      var l = zl(n).hoistableScripts, u = da(t), r = l.get(u);
      r || (r = n.querySelector(yu(u)), r || (t = x({ src: t, async: !0 }, e), (e = je.get(u)) && Uo(t, e), r = n.createElement("script"), Pt(r), ue(r, "link", t), n.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, l.set(u, r));
    }
  }
  function ug(t, e) {
    En.M(t, e);
    var n = fa;
    if (n && t) {
      var l = zl(n).hoistableScripts, u = da(t), r = l.get(u);
      r || (r = n.querySelector(yu(u)), r || (t = x({ src: t, async: !0, type: "module" }, e), (e = je.get(u)) && Uo(t, e), r = n.createElement("script"), Pt(r), ue(r, "link", t), n.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, l.set(u, r));
    }
  }
  function l0(t, e, n, l) {
    var u = (u = rt.current) ? Qi(u) : null;
    if (!u) throw Error(f(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (e = sa(n.href), n = zl(
          u
        ).hoistableStyles, l = n.get(e), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(e, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          t = sa(n.href);
          var r = zl(
            u
          ).hoistableStyles, s = r.get(t);
          if (s || (u = u.ownerDocument || u, s = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, r.set(t, s), (r = u.querySelector(
            pu(t)
          )) && !r._p && (s.instance = r, s.state.loading = 5), je.has(t) || (n = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, je.set(t, n), r || ig(
            u,
            t,
            n,
            s.state
          ))), e && l === null)
            throw Error(f(528, ""));
          return s;
        }
        if (e && l !== null)
          throw Error(f(529, ""));
        return null;
      case "script":
        return e = n.async, n = n.src, typeof n == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = da(n), n = zl(
          u
        ).hoistableScripts, l = n.get(e), l || (l = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, n.set(e, l)), l) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(f(444, t));
    }
  }
  function sa(t) {
    return 'href="' + Ne(t) + '"';
  }
  function pu(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function a0(t) {
    return x({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function ig(t, e, n, l) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? l.loading = 1 : (e = t.createElement("link"), l.preload = e, e.addEventListener("load", function() {
      return l.loading |= 1;
    }), e.addEventListener("error", function() {
      return l.loading |= 2;
    }), ue(e, "link", n), Pt(e), t.head.appendChild(e));
  }
  function da(t) {
    return '[src="' + Ne(t) + '"]';
  }
  function yu(t) {
    return "script[async]" + t;
  }
  function u0(t, e, n) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var l = t.querySelector(
            'style[data-href~="' + Ne(n.href) + '"]'
          );
          if (l)
            return e.instance = l, Pt(l), l;
          var u = x({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return l = (t.ownerDocument || t).createElement(
            "style"
          ), Pt(l), ue(l, "style", u), Vi(l, n.precedence, t), e.instance = l;
        case "stylesheet":
          u = sa(n.href);
          var r = t.querySelector(
            pu(u)
          );
          if (r)
            return e.state.loading |= 4, e.instance = r, Pt(r), r;
          l = a0(n), (u = je.get(u)) && No(l, u), r = (t.ownerDocument || t).createElement("link"), Pt(r);
          var s = r;
          return s._p = new Promise(function(h, v) {
            s.onload = h, s.onerror = v;
          }), ue(r, "link", l), e.state.loading |= 4, Vi(r, n.precedence, t), e.instance = r;
        case "script":
          return r = da(n.src), (u = t.querySelector(
            yu(r)
          )) ? (e.instance = u, Pt(u), u) : (l = n, (u = je.get(r)) && (l = x({}, n), Uo(l, u)), t = t.ownerDocument || t, u = t.createElement("script"), Pt(u), ue(u, "link", l), t.head.appendChild(u), e.instance = u);
        case "void":
          return null;
        default:
          throw Error(f(443, e.type));
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
  function No(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function Uo(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var Zi = null;
  function i0(t, e, n) {
    if (Zi === null) {
      var l = /* @__PURE__ */ new Map(), u = Zi = /* @__PURE__ */ new Map();
      u.set(n, l);
    } else
      u = Zi, l = u.get(n), l || (l = /* @__PURE__ */ new Map(), u.set(n, l));
    if (l.has(t)) return l;
    for (l.set(t, null), n = n.getElementsByTagName(t), u = 0; u < n.length; u++) {
      var r = n[u];
      if (!(r[Ma] || r[ce] || t === "link" && r.getAttribute("rel") === "stylesheet") && r.namespaceURI !== "http://www.w3.org/2000/svg") {
        var s = r.getAttribute(e) || "";
        s = t + s;
        var h = l.get(s);
        h ? h.push(r) : l.set(s, [r]);
      }
    }
    return l;
  }
  function r0(t, e, n) {
    t = t.ownerDocument || t, t.head.insertBefore(
      n,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function rg(t, e, n) {
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
  function c0(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var gu = null;
  function cg() {
  }
  function og(t, e, n) {
    if (gu === null) throw Error(f(475));
    var l = gu;
    if (e.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (e.state.loading & 4) === 0) {
      if (e.instance === null) {
        var u = sa(n.href), r = t.querySelector(
          pu(u)
        );
        if (r) {
          t = r._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = Ki.bind(l), t.then(l, l)), e.state.loading |= 4, e.instance = r, Pt(r);
          return;
        }
        r = t.ownerDocument || t, n = a0(n), (u = je.get(u)) && No(n, u), r = r.createElement("link"), Pt(r);
        var s = r;
        s._p = new Promise(function(h, v) {
          s.onload = h, s.onerror = v;
        }), ue(r, "link", n), e.instance = r;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(e, t), (t = e.state.preload) && (e.state.loading & 3) === 0 && (l.count++, e = Ki.bind(l), t.addEventListener("load", e), t.addEventListener("error", e));
    }
  }
  function fg() {
    if (gu === null) throw Error(f(475));
    var t = gu;
    return t.stylesheets && t.count === 0 && Bo(t, t.stylesheets), 0 < t.count ? function(e) {
      var n = setTimeout(function() {
        if (t.stylesheets && Bo(t, t.stylesheets), t.unsuspend) {
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
      if (this.stylesheets) Bo(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var $i = null;
  function Bo(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, $i = /* @__PURE__ */ new Map(), e.forEach(sg, t), $i = null, Ki.call(t));
  }
  function sg(t, e) {
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
    $$typeof: X,
    Provider: null,
    Consumer: null,
    _currentValue: gt,
    _currentValue2: gt,
    _threadCount: 0
  };
  function dg(t, e, n, l, u, r, s, h) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Mr(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Mr(0), this.hiddenUpdates = Mr(null), this.identifierPrefix = l, this.onUncaughtError = u, this.onCaughtError = r, this.onRecoverableError = s, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = h, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function o0(t, e, n, l, u, r, s, h, v, C, B, Y) {
    return t = new dg(
      t,
      e,
      n,
      s,
      h,
      v,
      C,
      Y
    ), e = 1, r === !0 && (e |= 24), r = Ee(3, null, null, e), t.current = r, r.stateNode = t, e = mc(), e.refCount++, t.pooledCache = e, e.refCount++, r.memoizedState = {
      element: l,
      isDehydrated: n,
      cache: e
    }, vc(r), t;
  }
  function f0(t) {
    return t ? (t = Xl, t) : Xl;
  }
  function s0(t, e, n, l, u, r) {
    u = f0(u), l.context === null ? l.context = u : l.pendingContext = u, l = Nn(e), l.payload = { element: n }, r = r === void 0 ? null : r, r !== null && (l.callback = r), n = Un(t, l, e), n !== null && (Re(n, t, e), $a(n, t, e));
  }
  function d0(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function wo(t, e) {
    d0(t, e), (t = t.alternate) && d0(t, e);
  }
  function h0(t) {
    if (t.tag === 13) {
      var e = Ll(t, 67108864);
      e !== null && Re(e, t, 67108864), wo(t, 67108864);
    }
  }
  var Ji = !0;
  function hg(t, e, n, l) {
    var u = G.T;
    G.T = null;
    var r = Q.p;
    try {
      Q.p = 2, Ho(t, e, n, l);
    } finally {
      Q.p = r, G.T = u;
    }
  }
  function mg(t, e, n, l) {
    var u = G.T;
    G.T = null;
    var r = Q.p;
    try {
      Q.p = 8, Ho(t, e, n, l);
    } finally {
      Q.p = r, G.T = u;
    }
  }
  function Ho(t, e, n, l) {
    if (Ji) {
      var u = qo(l);
      if (u === null)
        xo(
          t,
          e,
          l,
          Wi,
          n
        ), p0(t, l);
      else if (yg(
        u,
        t,
        e,
        n,
        l
      ))
        l.stopPropagation();
      else if (p0(t, l), e & 4 && -1 < pg.indexOf(t)) {
        for (; u !== null; ) {
          var r = Dl(u);
          if (r !== null)
            switch (r.tag) {
              case 3:
                if (r = r.stateNode, r.current.memoizedState.isDehydrated) {
                  var s = In(r.pendingLanes);
                  if (s !== 0) {
                    var h = r;
                    for (h.pendingLanes |= 2, h.entangledLanes |= 2; s; ) {
                      var v = 1 << 31 - Se(s);
                      h.entanglements[1] |= v, s &= ~v;
                    }
                    Ie(r), (Ct & 6) === 0 && (Ui = $e() + 500, su(0));
                  }
                }
                break;
              case 13:
                h = Ll(r, 2), h !== null && Re(h, r, 2), wi(), wo(r, 2);
            }
          if (r = qo(l), r === null && xo(
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
        xo(
          t,
          e,
          l,
          null,
          n
        );
    }
  }
  function qo(t) {
    return t = kr(t), Yo(t);
  }
  var Wi = null;
  function Yo(t) {
    if (Wi = null, t = Ml(t), t !== null) {
      var e = m(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (t = y(e), t !== null) return t;
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
  function m0(t) {
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
        switch (tp()) {
          case _f:
            return 2;
          case Mf:
            return 8;
          case Lu:
          case ep:
            return 32;
          case Df:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var jo = !1, Zn = null, Kn = null, $n = null, bu = /* @__PURE__ */ new Map(), Su = /* @__PURE__ */ new Map(), Jn = [], pg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function p0(t, e) {
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
    }, e !== null && (e = Dl(e), e !== null && h0(e)), t) : (t.eventSystemFlags |= l, e = t.targetContainers, u !== null && e.indexOf(u) === -1 && e.push(u), t);
  }
  function yg(t, e, n, l, u) {
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
  function y0(t) {
    var e = Ml(t.target);
    if (e !== null) {
      var n = m(e);
      if (n !== null) {
        if (e = n.tag, e === 13) {
          if (e = y(n), e !== null) {
            t.blockedOn = e, op(t.priority, function() {
              if (n.tag === 13) {
                var l = Oe();
                l = Dr(l);
                var u = Ll(n, l);
                u !== null && Re(u, n, l), wo(n, l);
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
      var n = qo(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var l = new n.constructor(
          n.type,
          n
        );
        Gr = l, n.target.dispatchEvent(l), Gr = null;
      } else
        return e = Dl(n), e !== null && h0(e), t.blockedOn = n, !1;
      e.shift();
    }
    return !0;
  }
  function g0(t, e, n) {
    Fi(t) && n.delete(e);
  }
  function gg() {
    jo = !1, Zn !== null && Fi(Zn) && (Zn = null), Kn !== null && Fi(Kn) && (Kn = null), $n !== null && Fi($n) && ($n = null), bu.forEach(g0), Su.forEach(g0);
  }
  function Pi(t, e) {
    t.blockedOn === e && (t.blockedOn = null, jo || (jo = !0, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      gg
    )));
  }
  var Ii = null;
  function v0(t) {
    Ii !== t && (Ii = t, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      function() {
        Ii === t && (Ii = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e], l = t[e + 1], u = t[e + 2];
          if (typeof l != "function") {
            if (Yo(l || n) === null)
              continue;
            break;
          }
          var r = Dl(n);
          r !== null && (t.splice(e, 3), e -= 3, qc(
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
      y0(n), n.blockedOn === null && Jn.shift();
    if (n = (t.ownerDocument || t).$$reactFormReplay, n != null)
      for (l = 0; l < n.length; l += 3) {
        var u = n[l], r = n[l + 1], s = u[he] || null;
        if (typeof r == "function")
          s || v0(n);
        else if (s) {
          var h = null;
          if (r && r.hasAttribute("formAction")) {
            if (u = r, s = r[he] || null)
              h = s.formAction;
            else if (Yo(u) !== null) continue;
          } else h = s.action;
          typeof h == "function" ? n[l + 1] = h : (n.splice(l, 3), l -= 3), v0(n);
        }
      }
  }
  function Go(t) {
    this._internalRoot = t;
  }
  tr.prototype.render = Go.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(f(409));
    var n = e.current, l = Oe();
    s0(n, l, t, e, null, null);
  }, tr.prototype.unmount = Go.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      s0(t.current, 2, null, t, null, null), wi(), e[_l] = null;
    }
  };
  function tr(t) {
    this._internalRoot = t;
  }
  tr.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = wf();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < Jn.length && e !== 0 && e < Jn[n].priority; n++) ;
      Jn.splice(n, 0, t), n === 0 && y0(t);
    }
  };
  var b0 = c.version;
  if (b0 !== "19.1.1")
    throw Error(
      f(
        527,
        b0,
        "19.1.1"
      )
    );
  Q.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(f(188)) : (t = Object.keys(t).join(","), Error(f(268, t)));
    return t = g(e), t = t !== null ? _(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var vg = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: G,
    reconcilerVersion: "19.1.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var er = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!er.isDisabled && er.supportsFiber)
      try {
        Oa = er.inject(
          vg
        ), be = er;
      } catch {
      }
  }
  return Ou.createRoot = function(t, e) {
    if (!d(t)) throw Error(f(299));
    var n = !1, l = "", u = wd, r = Hd, s = qd, h = null;
    return e != null && (e.unstable_strictMode === !0 && (n = !0), e.identifierPrefix !== void 0 && (l = e.identifierPrefix), e.onUncaughtError !== void 0 && (u = e.onUncaughtError), e.onCaughtError !== void 0 && (r = e.onCaughtError), e.onRecoverableError !== void 0 && (s = e.onRecoverableError), e.unstable_transitionCallbacks !== void 0 && (h = e.unstable_transitionCallbacks)), e = o0(
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
    ), t[_l] = e.current, Eo(t), new Go(e);
  }, Ou.hydrateRoot = function(t, e, n) {
    if (!d(t)) throw Error(f(299));
    var l = !1, u = "", r = wd, s = Hd, h = qd, v = null, C = null;
    return n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onUncaughtError !== void 0 && (r = n.onUncaughtError), n.onCaughtError !== void 0 && (s = n.onCaughtError), n.onRecoverableError !== void 0 && (h = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (v = n.unstable_transitionCallbacks), n.formState !== void 0 && (C = n.formState)), e = o0(
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
      C
    ), e.context = f0(null), n = e.current, l = Oe(), l = Dr(l), u = Nn(l), u.callback = null, Un(n, u, l), n = l, e.current.lanes = n, _a(e, n), Ie(e), t[_l] = e.current, Eo(t), new tr(e);
  }, Ou.version = "19.1.1", Ou;
}
var dm;
function VS() {
  if (dm) return Fo.exports;
  dm = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (i) {
        console.error(i);
      }
  }
  return a(), Fo.exports = QS(), Fo.exports;
}
var ZS = VS();
const KS = ({ word: a, definition: i }) => {
  const [c, o] = I.useState(!1);
  return console.log(i), /* @__PURE__ */ Bt.jsxs(Bt.Fragment, { children: [
    /* @__PURE__ */ Bt.jsx(
      "span",
      {
        style: { borderBottom: "1px dotted #000", cursor: "pointer" },
        onClick: () => o(!0),
        children: a
      }
    ),
    /* @__PURE__ */ Bt.jsxs(NS, { open: c, onClose: () => o(!1), children: [
      /* @__PURE__ */ Bt.jsx(kS, { children: a }),
      /* @__PURE__ */ Bt.jsxs(YS, { children: [
        /* @__PURE__ */ Bt.jsx("div", { dangerouslySetInnerHTML: { __html: i } }),
        /* @__PURE__ */ Bt.jsx($m, { variant: "caption", display: "block", gutterBottom: !0, children: "(Definition provided by ABC Dictionary)" })
      ] })
    ] })
  ] });
};
class Fm extends HTMLElement {
  connectedCallback() {
    const i = this.getAttribute("word") || "", c = this.innerHTML;
    console.log("Definition HTML:", c), this.innerHTML = "";
    const o = this.attachShadow({ mode: "open" });
    o.innerHTML = '<span id="react-root"></span>';
    const f = o.getElementById("react-root");
    f ? ZS.createRoot(f).render(/* @__PURE__ */ Bt.jsx(KS, { word: i, definition: c })) : console.error("Failed to find #react-root in shadow DOM.");
  }
}
customElements.define("define-word", Fm);
typeof window < "u" && !window.process && (window.process = { env: {} });
customElements.define("define-word", Fm);
