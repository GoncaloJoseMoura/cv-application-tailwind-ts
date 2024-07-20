;(function () {
	const t = document.createElement("link").relList
	if (t && t.supports && t.supports("modulepreload")) return
	for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i)
	new MutationObserver((i) => {
		for (const o of i)
			if (o.type === "childList")
				for (const l of o.addedNodes)
					l.tagName === "LINK" && l.rel === "modulepreload" && r(l)
	}).observe(document, { childList: !0, subtree: !0 })
	function n(i) {
		const o = {}
		return (
			i.integrity && (o.integrity = i.integrity),
			i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
			i.crossOrigin === "use-credentials"
				? (o.credentials = "include")
				: i.crossOrigin === "anonymous"
					? (o.credentials = "omit")
					: (o.credentials = "same-origin"),
			o
		)
	}
	function r(i) {
		if (i.ep) return
		i.ep = !0
		const o = n(i)
		fetch(i.href, o)
	}
})()
var at =
	typeof globalThis < "u"
		? globalThis
		: typeof window < "u"
			? window
			: typeof global < "u"
				? global
				: typeof self < "u"
					? self
					: {}
function Ca(e) {
	return e &&
		e.__esModule &&
		Object.prototype.hasOwnProperty.call(e, "default")
		? e.default
		: e
}
var Mf = { exports: {} },
	To = {},
	Ff = { exports: {} },
	se = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var li = Symbol.for("react.element"),
	Ih = Symbol.for("react.portal"),
	Mh = Symbol.for("react.fragment"),
	Fh = Symbol.for("react.strict_mode"),
	Bh = Symbol.for("react.profiler"),
	qh = Symbol.for("react.provider"),
	$h = Symbol.for("react.context"),
	zh = Symbol.for("react.forward_ref"),
	Uh = Symbol.for("react.suspense"),
	Vh = Symbol.for("react.memo"),
	Hh = Symbol.for("react.lazy"),
	qu = Symbol.iterator
function Wh(e) {
	return e === null || typeof e != "object"
		? null
		: ((e = (qu && e[qu]) || e["@@iterator"]),
			typeof e == "function" ? e : null)
}
var Bf = {
		isMounted: function () {
			return !1
		},
		enqueueForceUpdate: function () {},
		enqueueReplaceState: function () {},
		enqueueSetState: function () {}
	},
	qf = Object.assign,
	$f = {}
function ur(e, t, n) {
	;(this.props = e),
		(this.context = t),
		(this.refs = $f),
		(this.updater = n || Bf)
}
ur.prototype.isReactComponent = {}
ur.prototype.setState = function (e, t) {
	if (typeof e != "object" && typeof e != "function" && e != null)
		throw Error(
			"setState(...): takes an object of state variables to update or a function which returns an object of state variables."
		)
	this.updater.enqueueSetState(this, e, t, "setState")
}
ur.prototype.forceUpdate = function (e) {
	this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
function zf() {}
zf.prototype = ur.prototype
function Da(e, t, n) {
	;(this.props = e),
		(this.context = t),
		(this.refs = $f),
		(this.updater = n || Bf)
}
var Ra = (Da.prototype = new zf())
Ra.constructor = Da
qf(Ra, ur.prototype)
Ra.isPureReactComponent = !0
var $u = Array.isArray,
	Uf = Object.prototype.hasOwnProperty,
	Ia = { current: null },
	Vf = { key: !0, ref: !0, __self: !0, __source: !0 }
function Hf(e, t, n) {
	var r,
		i = {},
		o = null,
		l = null
	if (t != null)
		for (r in (t.ref !== void 0 && (l = t.ref),
		t.key !== void 0 && (o = "" + t.key),
		t))
			Uf.call(t, r) && !Vf.hasOwnProperty(r) && (i[r] = t[r])
	var h = arguments.length - 2
	if (h === 1) i.children = n
	else if (1 < h) {
		for (var p = Array(h), g = 0; g < h; g++) p[g] = arguments[g + 2]
		i.children = p
	}
	if (e && e.defaultProps)
		for (r in ((h = e.defaultProps), h)) i[r] === void 0 && (i[r] = h[r])
	return {
		$$typeof: li,
		type: e,
		key: o,
		ref: l,
		props: i,
		_owner: Ia.current
	}
}
function Kh(e, t) {
	return {
		$$typeof: li,
		type: e.type,
		key: t,
		ref: e.ref,
		props: e.props,
		_owner: e._owner
	}
}
function Ma(e) {
	return typeof e == "object" && e !== null && e.$$typeof === li
}
function Gh(e) {
	var t = { "=": "=0", ":": "=2" }
	return (
		"$" +
		e.replace(/[=:]/g, function (n) {
			return t[n]
		})
	)
}
var zu = /\/+/g
function tl(e, t) {
	return typeof e == "object" && e !== null && e.key != null
		? Gh("" + e.key)
		: t.toString(36)
}
function Di(e, t, n, r, i) {
	var o = typeof e
	;(o === "undefined" || o === "boolean") && (e = null)
	var l = !1
	if (e === null) l = !0
	else
		switch (o) {
			case "string":
			case "number":
				l = !0
				break
			case "object":
				switch (e.$$typeof) {
					case li:
					case Ih:
						l = !0
				}
		}
	if (l)
		return (
			(l = e),
			(i = i(l)),
			(e = r === "" ? "." + tl(l, 0) : r),
			$u(i)
				? ((n = ""),
					e != null && (n = e.replace(zu, "$&/") + "/"),
					Di(i, t, n, "", function (g) {
						return g
					}))
				: i != null &&
					(Ma(i) &&
						(i = Kh(
							i,
							n +
								(!i.key || (l && l.key === i.key)
									? ""
									: ("" + i.key).replace(zu, "$&/") + "/") +
								e
						)),
					t.push(i)),
			1
		)
	if (((l = 0), (r = r === "" ? "." : r + ":"), $u(e)))
		for (var h = 0; h < e.length; h++) {
			o = e[h]
			var p = r + tl(o, h)
			l += Di(o, t, n, p, i)
		}
	else if (((p = Wh(e)), typeof p == "function"))
		for (e = p.call(e), h = 0; !(o = e.next()).done; )
			(o = o.value), (p = r + tl(o, h++)), (l += Di(o, t, n, p, i))
	else if (o === "object")
		throw (
			((t = String(e)),
			Error(
				"Objects are not valid as a React child (found: " +
					(t === "[object Object]"
						? "object with keys {" + Object.keys(e).join(", ") + "}"
						: t) +
					"). If you meant to render a collection of children, use an array instead."
			))
		)
	return l
}
function pi(e, t, n) {
	if (e == null) return e
	var r = [],
		i = 0
	return (
		Di(e, r, "", "", function (o) {
			return t.call(n, o, i++)
		}),
		r
	)
}
function Qh(e) {
	if (e._status === -1) {
		var t = e._result
		;(t = t()),
			t.then(
				function (n) {
					;(e._status === 0 || e._status === -1) &&
						((e._status = 1), (e._result = n))
				},
				function (n) {
					;(e._status === 0 || e._status === -1) &&
						((e._status = 2), (e._result = n))
				}
			),
			e._status === -1 && ((e._status = 0), (e._result = t))
	}
	if (e._status === 1) return e._result.default
	throw e._result
}
var Ze = { current: null },
	Ri = { transition: null },
	Yh = {
		ReactCurrentDispatcher: Ze,
		ReactCurrentBatchConfig: Ri,
		ReactCurrentOwner: Ia
	}
function Wf() {
	throw Error("act(...) is not supported in production builds of React.")
}
se.Children = {
	map: pi,
	forEach: function (e, t, n) {
		pi(
			e,
			function () {
				t.apply(this, arguments)
			},
			n
		)
	},
	count: function (e) {
		var t = 0
		return (
			pi(e, function () {
				t++
			}),
			t
		)
	},
	toArray: function (e) {
		return (
			pi(e, function (t) {
				return t
			}) || []
		)
	},
	only: function (e) {
		if (!Ma(e))
			throw Error(
				"React.Children.only expected to receive a single React element child."
			)
		return e
	}
}
se.Component = ur
se.Fragment = Mh
se.Profiler = Bh
se.PureComponent = Da
se.StrictMode = Fh
se.Suspense = Uh
se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Yh
se.act = Wf
se.cloneElement = function (e, t, n) {
	if (e == null)
		throw Error(
			"React.cloneElement(...): The argument must be a React element, but you passed " +
				e +
				"."
		)
	var r = qf({}, e.props),
		i = e.key,
		o = e.ref,
		l = e._owner
	if (t != null) {
		if (
			(t.ref !== void 0 && ((o = t.ref), (l = Ia.current)),
			t.key !== void 0 && (i = "" + t.key),
			e.type && e.type.defaultProps)
		)
			var h = e.type.defaultProps
		for (p in t)
			Uf.call(t, p) &&
				!Vf.hasOwnProperty(p) &&
				(r[p] = t[p] === void 0 && h !== void 0 ? h[p] : t[p])
	}
	var p = arguments.length - 2
	if (p === 1) r.children = n
	else if (1 < p) {
		h = Array(p)
		for (var g = 0; g < p; g++) h[g] = arguments[g + 2]
		r.children = h
	}
	return { $$typeof: li, type: e.type, key: i, ref: o, props: r, _owner: l }
}
se.createContext = function (e) {
	return (
		(e = {
			$$typeof: $h,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null,
			_defaultValue: null,
			_globalName: null
		}),
		(e.Provider = { $$typeof: qh, _context: e }),
		(e.Consumer = e)
	)
}
se.createElement = Hf
se.createFactory = function (e) {
	var t = Hf.bind(null, e)
	return (t.type = e), t
}
se.createRef = function () {
	return { current: null }
}
se.forwardRef = function (e) {
	return { $$typeof: zh, render: e }
}
se.isValidElement = Ma
se.lazy = function (e) {
	return { $$typeof: Hh, _payload: { _status: -1, _result: e }, _init: Qh }
}
se.memo = function (e, t) {
	return { $$typeof: Vh, type: e, compare: t === void 0 ? null : t }
}
se.startTransition = function (e) {
	var t = Ri.transition
	Ri.transition = {}
	try {
		e()
	} finally {
		Ri.transition = t
	}
}
se.unstable_act = Wf
se.useCallback = function (e, t) {
	return Ze.current.useCallback(e, t)
}
se.useContext = function (e) {
	return Ze.current.useContext(e)
}
se.useDebugValue = function () {}
se.useDeferredValue = function (e) {
	return Ze.current.useDeferredValue(e)
}
se.useEffect = function (e, t) {
	return Ze.current.useEffect(e, t)
}
se.useId = function () {
	return Ze.current.useId()
}
se.useImperativeHandle = function (e, t, n) {
	return Ze.current.useImperativeHandle(e, t, n)
}
se.useInsertionEffect = function (e, t) {
	return Ze.current.useInsertionEffect(e, t)
}
se.useLayoutEffect = function (e, t) {
	return Ze.current.useLayoutEffect(e, t)
}
se.useMemo = function (e, t) {
	return Ze.current.useMemo(e, t)
}
se.useReducer = function (e, t, n) {
	return Ze.current.useReducer(e, t, n)
}
se.useRef = function (e) {
	return Ze.current.useRef(e)
}
se.useState = function (e) {
	return Ze.current.useState(e)
}
se.useSyncExternalStore = function (e, t, n) {
	return Ze.current.useSyncExternalStore(e, t, n)
}
se.useTransition = function () {
	return Ze.current.useTransition()
}
se.version = "18.3.1"
Ff.exports = se
var hn = Ff.exports
const ye = Ca(hn)
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zh = hn,
	Xh = Symbol.for("react.element"),
	Jh = Symbol.for("react.fragment"),
	ep = Object.prototype.hasOwnProperty,
	tp =
		Zh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	np = { key: !0, ref: !0, __self: !0, __source: !0 }
function Kf(e, t, n) {
	var r,
		i = {},
		o = null,
		l = null
	n !== void 0 && (o = "" + n),
		t.key !== void 0 && (o = "" + t.key),
		t.ref !== void 0 && (l = t.ref)
	for (r in t) ep.call(t, r) && !np.hasOwnProperty(r) && (i[r] = t[r])
	if (e && e.defaultProps)
		for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r])
	return {
		$$typeof: Xh,
		type: e,
		key: o,
		ref: l,
		props: i,
		_owner: tp.current
	}
}
To.Fragment = Jh
To.jsx = Kf
To.jsxs = Kf
Mf.exports = To
var B = Mf.exports,
	Rl = {},
	Gf = { exports: {} },
	ct = {},
	Qf = { exports: {} },
	Yf = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (e) {
	function t(G, q) {
		var R = G.length
		G.push(q)
		e: for (; 0 < R; ) {
			var T = (R - 1) >>> 1,
				D = G[T]
			if (0 < i(D, q)) (G[T] = q), (G[R] = D), (R = T)
			else break e
		}
	}
	function n(G) {
		return G.length === 0 ? null : G[0]
	}
	function r(G) {
		if (G.length === 0) return null
		var q = G[0],
			R = G.pop()
		if (R !== q) {
			G[0] = R
			e: for (var T = 0, D = G.length, F = D >>> 1; T < F; ) {
				var K = 2 * (T + 1) - 1,
					H = G[K],
					C = K + 1,
					$ = G[C]
				if (0 > i(H, R))
					C < D && 0 > i($, H)
						? ((G[T] = $), (G[C] = R), (T = C))
						: ((G[T] = H), (G[K] = R), (T = K))
				else if (C < D && 0 > i($, R)) (G[T] = $), (G[C] = R), (T = C)
				else break e
			}
		}
		return q
	}
	function i(G, q) {
		var R = G.sortIndex - q.sortIndex
		return R !== 0 ? R : G.id - q.id
	}
	if (
		typeof performance == "object" &&
		typeof performance.now == "function"
	) {
		var o = performance
		e.unstable_now = function () {
			return o.now()
		}
	} else {
		var l = Date,
			h = l.now()
		e.unstable_now = function () {
			return l.now() - h
		}
	}
	var p = [],
		g = [],
		y = 1,
		f = null,
		u = 3,
		c = !1,
		_ = !1,
		m = !1,
		w = typeof setTimeout == "function" ? setTimeout : null,
		s = typeof clearTimeout == "function" ? clearTimeout : null,
		a = typeof setImmediate < "u" ? setImmediate : null
	typeof navigator < "u" &&
		navigator.scheduling !== void 0 &&
		navigator.scheduling.isInputPending !== void 0 &&
		navigator.scheduling.isInputPending.bind(navigator.scheduling)
	function v(G) {
		for (var q = n(g); q !== null; ) {
			if (q.callback === null) r(g)
			else if (q.startTime <= G)
				r(g), (q.sortIndex = q.expirationTime), t(p, q)
			else break
			q = n(g)
		}
	}
	function d(G) {
		if (((m = !1), v(G), !_))
			if (n(p) !== null) (_ = !0), U(E)
			else {
				var q = n(g)
				q !== null && V(d, q.startTime - G)
			}
	}
	function E(G, q) {
		;(_ = !1), m && ((m = !1), s(O), (O = -1)), (c = !0)
		var R = u
		try {
			for (
				v(q), f = n(p);
				f !== null && (!(f.expirationTime > q) || (G && !b()));

			) {
				var T = f.callback
				if (typeof T == "function") {
					;(f.callback = null), (u = f.priorityLevel)
					var D = T(f.expirationTime <= q)
					;(q = e.unstable_now()),
						typeof D == "function"
							? (f.callback = D)
							: f === n(p) && r(p),
						v(q)
				} else r(p)
				f = n(p)
			}
			if (f !== null) var F = !0
			else {
				var K = n(g)
				K !== null && V(d, K.startTime - q), (F = !1)
			}
			return F
		} finally {
			;(f = null), (u = R), (c = !1)
		}
	}
	var N = !1,
		k = null,
		O = -1,
		j = 5,
		x = -1
	function b() {
		return !(e.unstable_now() - x < j)
	}
	function S() {
		if (k !== null) {
			var G = e.unstable_now()
			x = G
			var q = !0
			try {
				q = k(!0, G)
			} finally {
				q ? A() : ((N = !1), (k = null))
			}
		} else N = !1
	}
	var A
	if (typeof a == "function")
		A = function () {
			a(S)
		}
	else if (typeof MessageChannel < "u") {
		var L = new MessageChannel(),
			M = L.port2
		;(L.port1.onmessage = S),
			(A = function () {
				M.postMessage(null)
			})
	} else
		A = function () {
			w(S, 0)
		}
	function U(G) {
		;(k = G), N || ((N = !0), A())
	}
	function V(G, q) {
		O = w(function () {
			G(e.unstable_now())
		}, q)
	}
	;(e.unstable_IdlePriority = 5),
		(e.unstable_ImmediatePriority = 1),
		(e.unstable_LowPriority = 4),
		(e.unstable_NormalPriority = 3),
		(e.unstable_Profiling = null),
		(e.unstable_UserBlockingPriority = 2),
		(e.unstable_cancelCallback = function (G) {
			G.callback = null
		}),
		(e.unstable_continueExecution = function () {
			_ || c || ((_ = !0), U(E))
		}),
		(e.unstable_forceFrameRate = function (G) {
			0 > G || 125 < G
				? console.error(
						"forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
					)
				: (j = 0 < G ? Math.floor(1e3 / G) : 5)
		}),
		(e.unstable_getCurrentPriorityLevel = function () {
			return u
		}),
		(e.unstable_getFirstCallbackNode = function () {
			return n(p)
		}),
		(e.unstable_next = function (G) {
			switch (u) {
				case 1:
				case 2:
				case 3:
					var q = 3
					break
				default:
					q = u
			}
			var R = u
			u = q
			try {
				return G()
			} finally {
				u = R
			}
		}),
		(e.unstable_pauseExecution = function () {}),
		(e.unstable_requestPaint = function () {}),
		(e.unstable_runWithPriority = function (G, q) {
			switch (G) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
					break
				default:
					G = 3
			}
			var R = u
			u = G
			try {
				return q()
			} finally {
				u = R
			}
		}),
		(e.unstable_scheduleCallback = function (G, q, R) {
			var T = e.unstable_now()
			switch (
				(typeof R == "object" && R !== null
					? ((R = R.delay),
						(R = typeof R == "number" && 0 < R ? T + R : T))
					: (R = T),
				G)
			) {
				case 1:
					var D = -1
					break
				case 2:
					D = 250
					break
				case 5:
					D = 1073741823
					break
				case 4:
					D = 1e4
					break
				default:
					D = 5e3
			}
			return (
				(D = R + D),
				(G = {
					id: y++,
					callback: q,
					priorityLevel: G,
					startTime: R,
					expirationTime: D,
					sortIndex: -1
				}),
				R > T
					? ((G.sortIndex = R),
						t(g, G),
						n(p) === null &&
							G === n(g) &&
							(m ? (s(O), (O = -1)) : (m = !0), V(d, R - T)))
					: ((G.sortIndex = D), t(p, G), _ || c || ((_ = !0), U(E))),
				G
			)
		}),
		(e.unstable_shouldYield = b),
		(e.unstable_wrapCallback = function (G) {
			var q = u
			return function () {
				var R = u
				u = q
				try {
					return G.apply(this, arguments)
				} finally {
					u = R
				}
			}
		})
})(Yf)
Qf.exports = Yf
var rp = Qf.exports
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ip = hn,
	ft = rp
function te(e) {
	for (
		var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
			n = 1;
		n < arguments.length;
		n++
	)
		t += "&args[]=" + encodeURIComponent(arguments[n])
	return (
		"Minified React error #" +
		e +
		"; visit " +
		t +
		" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
	)
}
var Zf = new Set(),
	Ur = {}
function jn(e, t) {
	er(e, t), er(e + "Capture", t)
}
function er(e, t) {
	for (Ur[e] = t, e = 0; e < t.length; e++) Zf.add(t[e])
}
var zt = !(
		typeof window > "u" ||
		typeof window.document > "u" ||
		typeof window.document.createElement > "u"
	),
	Il = Object.prototype.hasOwnProperty,
	op =
		/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	Uu = {},
	Vu = {}
function lp(e) {
	return Il.call(Vu, e)
		? !0
		: Il.call(Uu, e)
			? !1
			: op.test(e)
				? (Vu[e] = !0)
				: ((Uu[e] = !0), !1)
}
function ap(e, t, n, r) {
	if (n !== null && n.type === 0) return !1
	switch (typeof t) {
		case "function":
		case "symbol":
			return !0
		case "boolean":
			return r
				? !1
				: n !== null
					? !n.acceptsBooleans
					: ((e = e.toLowerCase().slice(0, 5)),
						e !== "data-" && e !== "aria-")
		default:
			return !1
	}
}
function up(e, t, n, r) {
	if (t === null || typeof t > "u" || ap(e, t, n, r)) return !0
	if (r) return !1
	if (n !== null)
		switch (n.type) {
			case 3:
				return !t
			case 4:
				return t === !1
			case 5:
				return isNaN(t)
			case 6:
				return isNaN(t) || 1 > t
		}
	return !1
}
function Xe(e, t, n, r, i, o, l) {
	;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
		(this.attributeName = r),
		(this.attributeNamespace = i),
		(this.mustUseProperty = n),
		(this.propertyName = e),
		(this.type = t),
		(this.sanitizeURL = o),
		(this.removeEmptyString = l)
}
var ze = {}
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
	.split(" ")
	.forEach(function (e) {
		ze[e] = new Xe(e, 0, !1, e, null, !1, !1)
	})
;[
	["acceptCharset", "accept-charset"],
	["className", "class"],
	["htmlFor", "for"],
	["httpEquiv", "http-equiv"]
].forEach(function (e) {
	var t = e[0]
	ze[t] = new Xe(t, 1, !1, e[1], null, !1, !1)
})
;["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
	ze[e] = new Xe(e, 2, !1, e.toLowerCase(), null, !1, !1)
})
;[
	"autoReverse",
	"externalResourcesRequired",
	"focusable",
	"preserveAlpha"
].forEach(function (e) {
	ze[e] = new Xe(e, 2, !1, e, null, !1, !1)
})
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
	.split(" ")
	.forEach(function (e) {
		ze[e] = new Xe(e, 3, !1, e.toLowerCase(), null, !1, !1)
	})
;["checked", "multiple", "muted", "selected"].forEach(function (e) {
	ze[e] = new Xe(e, 3, !0, e, null, !1, !1)
})
;["capture", "download"].forEach(function (e) {
	ze[e] = new Xe(e, 4, !1, e, null, !1, !1)
})
;["cols", "rows", "size", "span"].forEach(function (e) {
	ze[e] = new Xe(e, 6, !1, e, null, !1, !1)
})
;["rowSpan", "start"].forEach(function (e) {
	ze[e] = new Xe(e, 5, !1, e.toLowerCase(), null, !1, !1)
})
var Fa = /[\-:]([a-z])/g
function Ba(e) {
	return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
	.split(" ")
	.forEach(function (e) {
		var t = e.replace(Fa, Ba)
		ze[t] = new Xe(t, 1, !1, e, null, !1, !1)
	})
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
	.split(" ")
	.forEach(function (e) {
		var t = e.replace(Fa, Ba)
		ze[t] = new Xe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
	})
;["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
	var t = e.replace(Fa, Ba)
	ze[t] = new Xe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
})
;["tabIndex", "crossOrigin"].forEach(function (e) {
	ze[e] = new Xe(e, 1, !1, e.toLowerCase(), null, !1, !1)
})
ze.xlinkHref = new Xe(
	"xlinkHref",
	1,
	!1,
	"xlink:href",
	"http://www.w3.org/1999/xlink",
	!0,
	!1
)
;["src", "href", "action", "formAction"].forEach(function (e) {
	ze[e] = new Xe(e, 1, !1, e.toLowerCase(), null, !0, !0)
})
function qa(e, t, n, r) {
	var i = ze.hasOwnProperty(t) ? ze[t] : null
	;(i !== null
		? i.type !== 0
		: r ||
			!(2 < t.length) ||
			(t[0] !== "o" && t[0] !== "O") ||
			(t[1] !== "n" && t[1] !== "N")) &&
		(up(t, n, i, r) && (n = null),
		r || i === null
			? lp(t) &&
				(n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
			: i.mustUseProperty
				? (e[i.propertyName] =
						n === null ? (i.type === 3 ? !1 : "") : n)
				: ((t = i.attributeName),
					(r = i.attributeNamespace),
					n === null
						? e.removeAttribute(t)
						: ((i = i.type),
							(n =
								i === 3 || (i === 4 && n === !0) ? "" : "" + n),
							r
								? e.setAttributeNS(r, t, n)
								: e.setAttribute(t, n))))
}
var Wt = ip.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	vi = Symbol.for("react.element"),
	Rn = Symbol.for("react.portal"),
	In = Symbol.for("react.fragment"),
	$a = Symbol.for("react.strict_mode"),
	Ml = Symbol.for("react.profiler"),
	Xf = Symbol.for("react.provider"),
	Jf = Symbol.for("react.context"),
	za = Symbol.for("react.forward_ref"),
	Fl = Symbol.for("react.suspense"),
	Bl = Symbol.for("react.suspense_list"),
	Ua = Symbol.for("react.memo"),
	Qt = Symbol.for("react.lazy"),
	ec = Symbol.for("react.offscreen"),
	Hu = Symbol.iterator
function mr(e) {
	return e === null || typeof e != "object"
		? null
		: ((e = (Hu && e[Hu]) || e["@@iterator"]),
			typeof e == "function" ? e : null)
}
var Ne = Object.assign,
	nl
function Ar(e) {
	if (nl === void 0)
		try {
			throw Error()
		} catch (n) {
			var t = n.stack.trim().match(/\n( *(at )?)/)
			nl = (t && t[1]) || ""
		}
	return (
		`
` +
		nl +
		e
	)
}
var rl = !1
function il(e, t) {
	if (!e || rl) return ""
	rl = !0
	var n = Error.prepareStackTrace
	Error.prepareStackTrace = void 0
	try {
		if (t)
			if (
				((t = function () {
					throw Error()
				}),
				Object.defineProperty(t.prototype, "props", {
					set: function () {
						throw Error()
					}
				}),
				typeof Reflect == "object" && Reflect.construct)
			) {
				try {
					Reflect.construct(t, [])
				} catch (g) {
					var r = g
				}
				Reflect.construct(e, [], t)
			} else {
				try {
					t.call()
				} catch (g) {
					r = g
				}
				e.call(t.prototype)
			}
		else {
			try {
				throw Error()
			} catch (g) {
				r = g
			}
			e()
		}
	} catch (g) {
		if (g && r && typeof g.stack == "string") {
			for (
				var i = g.stack.split(`
`),
					o = r.stack.split(`
`),
					l = i.length - 1,
					h = o.length - 1;
				1 <= l && 0 <= h && i[l] !== o[h];

			)
				h--
			for (; 1 <= l && 0 <= h; l--, h--)
				if (i[l] !== o[h]) {
					if (l !== 1 || h !== 1)
						do
							if ((l--, h--, 0 > h || i[l] !== o[h])) {
								var p =
									`
` + i[l].replace(" at new ", " at ")
								return (
									e.displayName &&
										p.includes("<anonymous>") &&
										(p = p.replace(
											"<anonymous>",
											e.displayName
										)),
									p
								)
							}
						while (1 <= l && 0 <= h)
					break
				}
		}
	} finally {
		;(rl = !1), (Error.prepareStackTrace = n)
	}
	return (e = e ? e.displayName || e.name : "") ? Ar(e) : ""
}
function sp(e) {
	switch (e.tag) {
		case 5:
			return Ar(e.type)
		case 16:
			return Ar("Lazy")
		case 13:
			return Ar("Suspense")
		case 19:
			return Ar("SuspenseList")
		case 0:
		case 2:
		case 15:
			return (e = il(e.type, !1)), e
		case 11:
			return (e = il(e.type.render, !1)), e
		case 1:
			return (e = il(e.type, !0)), e
		default:
			return ""
	}
}
function ql(e) {
	if (e == null) return null
	if (typeof e == "function") return e.displayName || e.name || null
	if (typeof e == "string") return e
	switch (e) {
		case In:
			return "Fragment"
		case Rn:
			return "Portal"
		case Ml:
			return "Profiler"
		case $a:
			return "StrictMode"
		case Fl:
			return "Suspense"
		case Bl:
			return "SuspenseList"
	}
	if (typeof e == "object")
		switch (e.$$typeof) {
			case Jf:
				return (e.displayName || "Context") + ".Consumer"
			case Xf:
				return (e._context.displayName || "Context") + ".Provider"
			case za:
				var t = e.render
				return (
					(e = e.displayName),
					e ||
						((e = t.displayName || t.name || ""),
						(e =
							e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
					e
				)
			case Ua:
				return (
					(t = e.displayName || null),
					t !== null ? t : ql(e.type) || "Memo"
				)
			case Qt:
				;(t = e._payload), (e = e._init)
				try {
					return ql(e(t))
				} catch {}
		}
	return null
}
function fp(e) {
	var t = e.type
	switch (e.tag) {
		case 24:
			return "Cache"
		case 9:
			return (t.displayName || "Context") + ".Consumer"
		case 10:
			return (t._context.displayName || "Context") + ".Provider"
		case 18:
			return "DehydratedFragment"
		case 11:
			return (
				(e = t.render),
				(e = e.displayName || e.name || ""),
				t.displayName ||
					(e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
			)
		case 7:
			return "Fragment"
		case 5:
			return t
		case 4:
			return "Portal"
		case 3:
			return "Root"
		case 6:
			return "Text"
		case 16:
			return ql(t)
		case 8:
			return t === $a ? "StrictMode" : "Mode"
		case 22:
			return "Offscreen"
		case 12:
			return "Profiler"
		case 21:
			return "Scope"
		case 13:
			return "Suspense"
		case 19:
			return "SuspenseList"
		case 25:
			return "TracingMarker"
		case 1:
		case 0:
		case 17:
		case 2:
		case 14:
		case 15:
			if (typeof t == "function") return t.displayName || t.name || null
			if (typeof t == "string") return t
	}
	return null
}
function cn(e) {
	switch (typeof e) {
		case "boolean":
		case "number":
		case "string":
		case "undefined":
			return e
		case "object":
			return e
		default:
			return ""
	}
}
function tc(e) {
	var t = e.type
	return (
		(e = e.nodeName) &&
		e.toLowerCase() === "input" &&
		(t === "checkbox" || t === "radio")
	)
}
function cp(e) {
	var t = tc(e) ? "checked" : "value",
		n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
		r = "" + e[t]
	if (
		!e.hasOwnProperty(t) &&
		typeof n < "u" &&
		typeof n.get == "function" &&
		typeof n.set == "function"
	) {
		var i = n.get,
			o = n.set
		return (
			Object.defineProperty(e, t, {
				configurable: !0,
				get: function () {
					return i.call(this)
				},
				set: function (l) {
					;(r = "" + l), o.call(this, l)
				}
			}),
			Object.defineProperty(e, t, { enumerable: n.enumerable }),
			{
				getValue: function () {
					return r
				},
				setValue: function (l) {
					r = "" + l
				},
				stopTracking: function () {
					;(e._valueTracker = null), delete e[t]
				}
			}
		)
	}
}
function yi(e) {
	e._valueTracker || (e._valueTracker = cp(e))
}
function nc(e) {
	if (!e) return !1
	var t = e._valueTracker
	if (!t) return !0
	var n = t.getValue(),
		r = ""
	return (
		e && (r = tc(e) ? (e.checked ? "true" : "false") : e.value),
		(e = r),
		e !== n ? (t.setValue(e), !0) : !1
	)
}
function Ki(e) {
	if (
		((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
	)
		return null
	try {
		return e.activeElement || e.body
	} catch {
		return e.body
	}
}
function $l(e, t) {
	var n = t.checked
	return Ne({}, t, {
		defaultChecked: void 0,
		defaultValue: void 0,
		value: void 0,
		checked: n ?? e._wrapperState.initialChecked
	})
}
function Wu(e, t) {
	var n = t.defaultValue == null ? "" : t.defaultValue,
		r = t.checked != null ? t.checked : t.defaultChecked
	;(n = cn(t.value != null ? t.value : n)),
		(e._wrapperState = {
			initialChecked: r,
			initialValue: n,
			controlled:
				t.type === "checkbox" || t.type === "radio"
					? t.checked != null
					: t.value != null
		})
}
function rc(e, t) {
	;(t = t.checked), t != null && qa(e, "checked", t, !1)
}
function zl(e, t) {
	rc(e, t)
	var n = cn(t.value),
		r = t.type
	if (n != null)
		r === "number"
			? ((n === 0 && e.value === "") || e.value != n) &&
				(e.value = "" + n)
			: e.value !== "" + n && (e.value = "" + n)
	else if (r === "submit" || r === "reset") {
		e.removeAttribute("value")
		return
	}
	t.hasOwnProperty("value")
		? Ul(e, t.type, n)
		: t.hasOwnProperty("defaultValue") && Ul(e, t.type, cn(t.defaultValue)),
		t.checked == null &&
			t.defaultChecked != null &&
			(e.defaultChecked = !!t.defaultChecked)
}
function Ku(e, t, n) {
	if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
		var r = t.type
		if (
			!(
				(r !== "submit" && r !== "reset") ||
				(t.value !== void 0 && t.value !== null)
			)
		)
			return
		;(t = "" + e._wrapperState.initialValue),
			n || t === e.value || (e.value = t),
			(e.defaultValue = t)
	}
	;(n = e.name),
		n !== "" && (e.name = ""),
		(e.defaultChecked = !!e._wrapperState.initialChecked),
		n !== "" && (e.name = n)
}
function Ul(e, t, n) {
	;(t !== "number" || Ki(e.ownerDocument) !== e) &&
		(n == null
			? (e.defaultValue = "" + e._wrapperState.initialValue)
			: e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Tr = Array.isArray
function Gn(e, t, n, r) {
	if (((e = e.options), t)) {
		t = {}
		for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0
		for (n = 0; n < e.length; n++)
			(i = t.hasOwnProperty("$" + e[n].value)),
				e[n].selected !== i && (e[n].selected = i),
				i && r && (e[n].defaultSelected = !0)
	} else {
		for (n = "" + cn(n), t = null, i = 0; i < e.length; i++) {
			if (e[i].value === n) {
				;(e[i].selected = !0), r && (e[i].defaultSelected = !0)
				return
			}
			t !== null || e[i].disabled || (t = e[i])
		}
		t !== null && (t.selected = !0)
	}
}
function Vl(e, t) {
	if (t.dangerouslySetInnerHTML != null) throw Error(te(91))
	return Ne({}, t, {
		value: void 0,
		defaultValue: void 0,
		children: "" + e._wrapperState.initialValue
	})
}
function Gu(e, t) {
	var n = t.value
	if (n == null) {
		if (((n = t.children), (t = t.defaultValue), n != null)) {
			if (t != null) throw Error(te(92))
			if (Tr(n)) {
				if (1 < n.length) throw Error(te(93))
				n = n[0]
			}
			t = n
		}
		t == null && (t = ""), (n = t)
	}
	e._wrapperState = { initialValue: cn(n) }
}
function ic(e, t) {
	var n = cn(t.value),
		r = cn(t.defaultValue)
	n != null &&
		((n = "" + n),
		n !== e.value && (e.value = n),
		t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
		r != null && (e.defaultValue = "" + r)
}
function Qu(e) {
	var t = e.textContent
	t === e._wrapperState.initialValue &&
		t !== "" &&
		t !== null &&
		(e.value = t)
}
function oc(e) {
	switch (e) {
		case "svg":
			return "http://www.w3.org/2000/svg"
		case "math":
			return "http://www.w3.org/1998/Math/MathML"
		default:
			return "http://www.w3.org/1999/xhtml"
	}
}
function Hl(e, t) {
	return e == null || e === "http://www.w3.org/1999/xhtml"
		? oc(t)
		: e === "http://www.w3.org/2000/svg" && t === "foreignObject"
			? "http://www.w3.org/1999/xhtml"
			: e
}
var mi,
	lc = (function (e) {
		return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
			? function (t, n, r, i) {
					MSApp.execUnsafeLocalFunction(function () {
						return e(t, n, r, i)
					})
				}
			: e
	})(function (e, t) {
		if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
			e.innerHTML = t
		else {
			for (
				mi = mi || document.createElement("div"),
					mi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
					t = mi.firstChild;
				e.firstChild;

			)
				e.removeChild(e.firstChild)
			for (; t.firstChild; ) e.appendChild(t.firstChild)
		}
	})
function Vr(e, t) {
	if (t) {
		var n = e.firstChild
		if (n && n === e.lastChild && n.nodeType === 3) {
			n.nodeValue = t
			return
		}
	}
	e.textContent = t
}
var Lr = {
		animationIterationCount: !0,
		aspectRatio: !0,
		borderImageOutset: !0,
		borderImageSlice: !0,
		borderImageWidth: !0,
		boxFlex: !0,
		boxFlexGroup: !0,
		boxOrdinalGroup: !0,
		columnCount: !0,
		columns: !0,
		flex: !0,
		flexGrow: !0,
		flexPositive: !0,
		flexShrink: !0,
		flexNegative: !0,
		flexOrder: !0,
		gridArea: !0,
		gridRow: !0,
		gridRowEnd: !0,
		gridRowSpan: !0,
		gridRowStart: !0,
		gridColumn: !0,
		gridColumnEnd: !0,
		gridColumnSpan: !0,
		gridColumnStart: !0,
		fontWeight: !0,
		lineClamp: !0,
		lineHeight: !0,
		opacity: !0,
		order: !0,
		orphans: !0,
		tabSize: !0,
		widows: !0,
		zIndex: !0,
		zoom: !0,
		fillOpacity: !0,
		floodOpacity: !0,
		stopOpacity: !0,
		strokeDasharray: !0,
		strokeDashoffset: !0,
		strokeMiterlimit: !0,
		strokeOpacity: !0,
		strokeWidth: !0
	},
	dp = ["Webkit", "ms", "Moz", "O"]
Object.keys(Lr).forEach(function (e) {
	dp.forEach(function (t) {
		;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Lr[t] = Lr[e])
	})
})
function ac(e, t, n) {
	return t == null || typeof t == "boolean" || t === ""
		? ""
		: n ||
			  typeof t != "number" ||
			  t === 0 ||
			  (Lr.hasOwnProperty(e) && Lr[e])
			? ("" + t).trim()
			: t + "px"
}
function uc(e, t) {
	e = e.style
	for (var n in t)
		if (t.hasOwnProperty(n)) {
			var r = n.indexOf("--") === 0,
				i = ac(n, t[n], r)
			n === "float" && (n = "cssFloat"),
				r ? e.setProperty(n, i) : (e[n] = i)
		}
}
var hp = Ne(
	{ menuitem: !0 },
	{
		area: !0,
		base: !0,
		br: !0,
		col: !0,
		embed: !0,
		hr: !0,
		img: !0,
		input: !0,
		keygen: !0,
		link: !0,
		meta: !0,
		param: !0,
		source: !0,
		track: !0,
		wbr: !0
	}
)
function Wl(e, t) {
	if (t) {
		if (hp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
			throw Error(te(137, e))
		if (t.dangerouslySetInnerHTML != null) {
			if (t.children != null) throw Error(te(60))
			if (
				typeof t.dangerouslySetInnerHTML != "object" ||
				!("__html" in t.dangerouslySetInnerHTML)
			)
				throw Error(te(61))
		}
		if (t.style != null && typeof t.style != "object") throw Error(te(62))
	}
}
function Kl(e, t) {
	if (e.indexOf("-") === -1) return typeof t.is == "string"
	switch (e) {
		case "annotation-xml":
		case "color-profile":
		case "font-face":
		case "font-face-src":
		case "font-face-uri":
		case "font-face-format":
		case "font-face-name":
		case "missing-glyph":
			return !1
		default:
			return !0
	}
}
var Gl = null
function Va(e) {
	return (
		(e = e.target || e.srcElement || window),
		e.correspondingUseElement && (e = e.correspondingUseElement),
		e.nodeType === 3 ? e.parentNode : e
	)
}
var Ql = null,
	Qn = null,
	Yn = null
function Yu(e) {
	if ((e = si(e))) {
		if (typeof Ql != "function") throw Error(te(280))
		var t = e.stateNode
		t && ((t = Do(t)), Ql(e.stateNode, e.type, t))
	}
}
function sc(e) {
	Qn ? (Yn ? Yn.push(e) : (Yn = [e])) : (Qn = e)
}
function fc() {
	if (Qn) {
		var e = Qn,
			t = Yn
		if (((Yn = Qn = null), Yu(e), t))
			for (e = 0; e < t.length; e++) Yu(t[e])
	}
}
function cc(e, t) {
	return e(t)
}
function dc() {}
var ol = !1
function hc(e, t, n) {
	if (ol) return e(t, n)
	ol = !0
	try {
		return cc(e, t, n)
	} finally {
		;(ol = !1), (Qn !== null || Yn !== null) && (dc(), fc())
	}
}
function Hr(e, t) {
	var n = e.stateNode
	if (n === null) return null
	var r = Do(n)
	if (r === null) return null
	n = r[t]
	e: switch (t) {
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
			;(r = !r.disabled) ||
				((e = e.type),
				(r = !(
					e === "button" ||
					e === "input" ||
					e === "select" ||
					e === "textarea"
				))),
				(e = !r)
			break e
		default:
			e = !1
	}
	if (e) return null
	if (n && typeof n != "function") throw Error(te(231, t, typeof n))
	return n
}
var Yl = !1
if (zt)
	try {
		var gr = {}
		Object.defineProperty(gr, "passive", {
			get: function () {
				Yl = !0
			}
		}),
			window.addEventListener("test", gr, gr),
			window.removeEventListener("test", gr, gr)
	} catch {
		Yl = !1
	}
function pp(e, t, n, r, i, o, l, h, p) {
	var g = Array.prototype.slice.call(arguments, 3)
	try {
		t.apply(n, g)
	} catch (y) {
		this.onError(y)
	}
}
var Cr = !1,
	Gi = null,
	Qi = !1,
	Zl = null,
	vp = {
		onError: function (e) {
			;(Cr = !0), (Gi = e)
		}
	}
function yp(e, t, n, r, i, o, l, h, p) {
	;(Cr = !1), (Gi = null), pp.apply(vp, arguments)
}
function mp(e, t, n, r, i, o, l, h, p) {
	if ((yp.apply(this, arguments), Cr)) {
		if (Cr) {
			var g = Gi
			;(Cr = !1), (Gi = null)
		} else throw Error(te(198))
		Qi || ((Qi = !0), (Zl = g))
	}
}
function Ln(e) {
	var t = e,
		n = e
	if (e.alternate) for (; t.return; ) t = t.return
	else {
		e = t
		do (t = e), t.flags & 4098 && (n = t.return), (e = t.return)
		while (e)
	}
	return t.tag === 3 ? n : null
}
function pc(e) {
	if (e.tag === 13) {
		var t = e.memoizedState
		if (
			(t === null &&
				((e = e.alternate), e !== null && (t = e.memoizedState)),
			t !== null)
		)
			return t.dehydrated
	}
	return null
}
function Zu(e) {
	if (Ln(e) !== e) throw Error(te(188))
}
function gp(e) {
	var t = e.alternate
	if (!t) {
		if (((t = Ln(e)), t === null)) throw Error(te(188))
		return t !== e ? null : e
	}
	for (var n = e, r = t; ; ) {
		var i = n.return
		if (i === null) break
		var o = i.alternate
		if (o === null) {
			if (((r = i.return), r !== null)) {
				n = r
				continue
			}
			break
		}
		if (i.child === o.child) {
			for (o = i.child; o; ) {
				if (o === n) return Zu(i), e
				if (o === r) return Zu(i), t
				o = o.sibling
			}
			throw Error(te(188))
		}
		if (n.return !== r.return) (n = i), (r = o)
		else {
			for (var l = !1, h = i.child; h; ) {
				if (h === n) {
					;(l = !0), (n = i), (r = o)
					break
				}
				if (h === r) {
					;(l = !0), (r = i), (n = o)
					break
				}
				h = h.sibling
			}
			if (!l) {
				for (h = o.child; h; ) {
					if (h === n) {
						;(l = !0), (n = o), (r = i)
						break
					}
					if (h === r) {
						;(l = !0), (r = o), (n = i)
						break
					}
					h = h.sibling
				}
				if (!l) throw Error(te(189))
			}
		}
		if (n.alternate !== r) throw Error(te(190))
	}
	if (n.tag !== 3) throw Error(te(188))
	return n.stateNode.current === n ? e : t
}
function vc(e) {
	return (e = gp(e)), e !== null ? yc(e) : null
}
function yc(e) {
	if (e.tag === 5 || e.tag === 6) return e
	for (e = e.child; e !== null; ) {
		var t = yc(e)
		if (t !== null) return t
		e = e.sibling
	}
	return null
}
var mc = ft.unstable_scheduleCallback,
	Xu = ft.unstable_cancelCallback,
	_p = ft.unstable_shouldYield,
	wp = ft.unstable_requestPaint,
	Pe = ft.unstable_now,
	Ep = ft.unstable_getCurrentPriorityLevel,
	Ha = ft.unstable_ImmediatePriority,
	gc = ft.unstable_UserBlockingPriority,
	Yi = ft.unstable_NormalPriority,
	bp = ft.unstable_LowPriority,
	_c = ft.unstable_IdlePriority,
	Po = null,
	Dt = null
function xp(e) {
	if (Dt && typeof Dt.onCommitFiberRoot == "function")
		try {
			Dt.onCommitFiberRoot(Po, e, void 0, (e.current.flags & 128) === 128)
		} catch {}
}
var kt = Math.clz32 ? Math.clz32 : Op,
	Sp = Math.log,
	kp = Math.LN2
function Op(e) {
	return (e >>>= 0), e === 0 ? 32 : (31 - ((Sp(e) / kp) | 0)) | 0
}
var gi = 64,
	_i = 4194304
function Pr(e) {
	switch (e & -e) {
		case 1:
			return 1
		case 2:
			return 2
		case 4:
			return 4
		case 8:
			return 8
		case 16:
			return 16
		case 32:
			return 32
		case 64:
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
			return e & 4194240
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return e & 130023424
		case 134217728:
			return 134217728
		case 268435456:
			return 268435456
		case 536870912:
			return 536870912
		case 1073741824:
			return 1073741824
		default:
			return e
	}
}
function Zi(e, t) {
	var n = e.pendingLanes
	if (n === 0) return 0
	var r = 0,
		i = e.suspendedLanes,
		o = e.pingedLanes,
		l = n & 268435455
	if (l !== 0) {
		var h = l & ~i
		h !== 0 ? (r = Pr(h)) : ((o &= l), o !== 0 && (r = Pr(o)))
	} else (l = n & ~i), l !== 0 ? (r = Pr(l)) : o !== 0 && (r = Pr(o))
	if (r === 0) return 0
	if (
		t !== 0 &&
		t !== r &&
		!(t & i) &&
		((i = r & -r),
		(o = t & -t),
		i >= o || (i === 16 && (o & 4194240) !== 0))
	)
		return t
	if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
		for (e = e.entanglements, t &= r; 0 < t; )
			(n = 31 - kt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i)
	return r
}
function Np(e, t) {
	switch (e) {
		case 1:
		case 2:
		case 4:
			return t + 250
		case 8:
		case 16:
		case 32:
		case 64:
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
			return t + 5e3
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return -1
		case 134217728:
		case 268435456:
		case 536870912:
		case 1073741824:
			return -1
		default:
			return -1
	}
}
function Ap(e, t) {
	for (
		var n = e.suspendedLanes,
			r = e.pingedLanes,
			i = e.expirationTimes,
			o = e.pendingLanes;
		0 < o;

	) {
		var l = 31 - kt(o),
			h = 1 << l,
			p = i[l]
		p === -1
			? (!(h & n) || h & r) && (i[l] = Np(h, t))
			: p <= t && (e.expiredLanes |= h),
			(o &= ~h)
	}
}
function Xl(e) {
	return (
		(e = e.pendingLanes & -1073741825),
		e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
	)
}
function wc() {
	var e = gi
	return (gi <<= 1), !(gi & 4194240) && (gi = 64), e
}
function ll(e) {
	for (var t = [], n = 0; 31 > n; n++) t.push(e)
	return t
}
function ai(e, t, n) {
	;(e.pendingLanes |= t),
		t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
		(e = e.eventTimes),
		(t = 31 - kt(t)),
		(e[t] = n)
}
function Tp(e, t) {
	var n = e.pendingLanes & ~t
	;(e.pendingLanes = t),
		(e.suspendedLanes = 0),
		(e.pingedLanes = 0),
		(e.expiredLanes &= t),
		(e.mutableReadLanes &= t),
		(e.entangledLanes &= t),
		(t = e.entanglements)
	var r = e.eventTimes
	for (e = e.expirationTimes; 0 < n; ) {
		var i = 31 - kt(n),
			o = 1 << i
		;(t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o)
	}
}
function Wa(e, t) {
	var n = (e.entangledLanes |= t)
	for (e = e.entanglements; n; ) {
		var r = 31 - kt(n),
			i = 1 << r
		;(i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i)
	}
}
var ve = 0
function Ec(e) {
	return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
}
var bc,
	Ka,
	xc,
	Sc,
	kc,
	Jl = !1,
	wi = [],
	nn = null,
	rn = null,
	on = null,
	Wr = new Map(),
	Kr = new Map(),
	Zt = [],
	Pp =
		"mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
			" "
		)
function Ju(e, t) {
	switch (e) {
		case "focusin":
		case "focusout":
			nn = null
			break
		case "dragenter":
		case "dragleave":
			rn = null
			break
		case "mouseover":
		case "mouseout":
			on = null
			break
		case "pointerover":
		case "pointerout":
			Wr.delete(t.pointerId)
			break
		case "gotpointercapture":
		case "lostpointercapture":
			Kr.delete(t.pointerId)
	}
}
function _r(e, t, n, r, i, o) {
	return e === null || e.nativeEvent !== o
		? ((e = {
				blockedOn: t,
				domEventName: n,
				eventSystemFlags: r,
				nativeEvent: o,
				targetContainers: [i]
			}),
			t !== null && ((t = si(t)), t !== null && Ka(t)),
			e)
		: ((e.eventSystemFlags |= r),
			(t = e.targetContainers),
			i !== null && t.indexOf(i) === -1 && t.push(i),
			e)
}
function jp(e, t, n, r, i) {
	switch (t) {
		case "focusin":
			return (nn = _r(nn, e, t, n, r, i)), !0
		case "dragenter":
			return (rn = _r(rn, e, t, n, r, i)), !0
		case "mouseover":
			return (on = _r(on, e, t, n, r, i)), !0
		case "pointerover":
			var o = i.pointerId
			return Wr.set(o, _r(Wr.get(o) || null, e, t, n, r, i)), !0
		case "gotpointercapture":
			return (
				(o = i.pointerId),
				Kr.set(o, _r(Kr.get(o) || null, e, t, n, r, i)),
				!0
			)
	}
	return !1
}
function Oc(e) {
	var t = wn(e.target)
	if (t !== null) {
		var n = Ln(t)
		if (n !== null) {
			if (((t = n.tag), t === 13)) {
				if (((t = pc(n)), t !== null)) {
					;(e.blockedOn = t),
						kc(e.priority, function () {
							xc(n)
						})
					return
				}
			} else if (
				t === 3 &&
				n.stateNode.current.memoizedState.isDehydrated
			) {
				e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null
				return
			}
		}
	}
	e.blockedOn = null
}
function Ii(e) {
	if (e.blockedOn !== null) return !1
	for (var t = e.targetContainers; 0 < t.length; ) {
		var n = ea(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
		if (n === null) {
			n = e.nativeEvent
			var r = new n.constructor(n.type, n)
			;(Gl = r), n.target.dispatchEvent(r), (Gl = null)
		} else return (t = si(n)), t !== null && Ka(t), (e.blockedOn = n), !1
		t.shift()
	}
	return !0
}
function es(e, t, n) {
	Ii(e) && n.delete(t)
}
function Lp() {
	;(Jl = !1),
		nn !== null && Ii(nn) && (nn = null),
		rn !== null && Ii(rn) && (rn = null),
		on !== null && Ii(on) && (on = null),
		Wr.forEach(es),
		Kr.forEach(es)
}
function wr(e, t) {
	e.blockedOn === t &&
		((e.blockedOn = null),
		Jl ||
			((Jl = !0),
			ft.unstable_scheduleCallback(ft.unstable_NormalPriority, Lp)))
}
function Gr(e) {
	function t(i) {
		return wr(i, e)
	}
	if (0 < wi.length) {
		wr(wi[0], e)
		for (var n = 1; n < wi.length; n++) {
			var r = wi[n]
			r.blockedOn === e && (r.blockedOn = null)
		}
	}
	for (
		nn !== null && wr(nn, e),
			rn !== null && wr(rn, e),
			on !== null && wr(on, e),
			Wr.forEach(t),
			Kr.forEach(t),
			n = 0;
		n < Zt.length;
		n++
	)
		(r = Zt[n]), r.blockedOn === e && (r.blockedOn = null)
	for (; 0 < Zt.length && ((n = Zt[0]), n.blockedOn === null); )
		Oc(n), n.blockedOn === null && Zt.shift()
}
var Zn = Wt.ReactCurrentBatchConfig,
	Xi = !0
function Cp(e, t, n, r) {
	var i = ve,
		o = Zn.transition
	Zn.transition = null
	try {
		;(ve = 1), Ga(e, t, n, r)
	} finally {
		;(ve = i), (Zn.transition = o)
	}
}
function Dp(e, t, n, r) {
	var i = ve,
		o = Zn.transition
	Zn.transition = null
	try {
		;(ve = 4), Ga(e, t, n, r)
	} finally {
		;(ve = i), (Zn.transition = o)
	}
}
function Ga(e, t, n, r) {
	if (Xi) {
		var i = ea(e, t, n, r)
		if (i === null) yl(e, t, r, Ji, n), Ju(e, r)
		else if (jp(i, e, t, n, r)) r.stopPropagation()
		else if ((Ju(e, r), t & 4 && -1 < Pp.indexOf(e))) {
			for (; i !== null; ) {
				var o = si(i)
				if (
					(o !== null && bc(o),
					(o = ea(e, t, n, r)),
					o === null && yl(e, t, r, Ji, n),
					o === i)
				)
					break
				i = o
			}
			i !== null && r.stopPropagation()
		} else yl(e, t, r, null, n)
	}
}
var Ji = null
function ea(e, t, n, r) {
	if (((Ji = null), (e = Va(r)), (e = wn(e)), e !== null))
		if (((t = Ln(e)), t === null)) e = null
		else if (((n = t.tag), n === 13)) {
			if (((e = pc(t)), e !== null)) return e
			e = null
		} else if (n === 3) {
			if (t.stateNode.current.memoizedState.isDehydrated)
				return t.tag === 3 ? t.stateNode.containerInfo : null
			e = null
		} else t !== e && (e = null)
	return (Ji = e), null
}
function Nc(e) {
	switch (e) {
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
			return 1
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
		case "toggle":
		case "touchmove":
		case "wheel":
		case "mouseenter":
		case "mouseleave":
		case "pointerenter":
		case "pointerleave":
			return 4
		case "message":
			switch (Ep()) {
				case Ha:
					return 1
				case gc:
					return 4
				case Yi:
				case bp:
					return 16
				case _c:
					return 536870912
				default:
					return 16
			}
		default:
			return 16
	}
}
var Jt = null,
	Qa = null,
	Mi = null
function Ac() {
	if (Mi) return Mi
	var e,
		t = Qa,
		n = t.length,
		r,
		i = "value" in Jt ? Jt.value : Jt.textContent,
		o = i.length
	for (e = 0; e < n && t[e] === i[e]; e++);
	var l = n - e
	for (r = 1; r <= l && t[n - r] === i[o - r]; r++);
	return (Mi = i.slice(e, 1 < r ? 1 - r : void 0))
}
function Fi(e) {
	var t = e.keyCode
	return (
		"charCode" in e
			? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
			: (e = t),
		e === 10 && (e = 13),
		32 <= e || e === 13 ? e : 0
	)
}
function Ei() {
	return !0
}
function ts() {
	return !1
}
function dt(e) {
	function t(n, r, i, o, l) {
		;(this._reactName = n),
			(this._targetInst = i),
			(this.type = r),
			(this.nativeEvent = o),
			(this.target = l),
			(this.currentTarget = null)
		for (var h in e)
			e.hasOwnProperty(h) && ((n = e[h]), (this[h] = n ? n(o) : o[h]))
		return (
			(this.isDefaultPrevented = (
				o.defaultPrevented != null
					? o.defaultPrevented
					: o.returnValue === !1
			)
				? Ei
				: ts),
			(this.isPropagationStopped = ts),
			this
		)
	}
	return (
		Ne(t.prototype, {
			preventDefault: function () {
				this.defaultPrevented = !0
				var n = this.nativeEvent
				n &&
					(n.preventDefault
						? n.preventDefault()
						: typeof n.returnValue != "unknown" &&
							(n.returnValue = !1),
					(this.isDefaultPrevented = Ei))
			},
			stopPropagation: function () {
				var n = this.nativeEvent
				n &&
					(n.stopPropagation
						? n.stopPropagation()
						: typeof n.cancelBubble != "unknown" &&
							(n.cancelBubble = !0),
					(this.isPropagationStopped = Ei))
			},
			persist: function () {},
			isPersistent: Ei
		}),
		t
	)
}
var sr = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function (e) {
			return e.timeStamp || Date.now()
		},
		defaultPrevented: 0,
		isTrusted: 0
	},
	Ya = dt(sr),
	ui = Ne({}, sr, { view: 0, detail: 0 }),
	Rp = dt(ui),
	al,
	ul,
	Er,
	jo = Ne({}, ui, {
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
		getModifierState: Za,
		button: 0,
		buttons: 0,
		relatedTarget: function (e) {
			return e.relatedTarget === void 0
				? e.fromElement === e.srcElement
					? e.toElement
					: e.fromElement
				: e.relatedTarget
		},
		movementX: function (e) {
			return "movementX" in e
				? e.movementX
				: (e !== Er &&
						(Er && e.type === "mousemove"
							? ((al = e.screenX - Er.screenX),
								(ul = e.screenY - Er.screenY))
							: (ul = al = 0),
						(Er = e)),
					al)
		},
		movementY: function (e) {
			return "movementY" in e ? e.movementY : ul
		}
	}),
	ns = dt(jo),
	Ip = Ne({}, jo, { dataTransfer: 0 }),
	Mp = dt(Ip),
	Fp = Ne({}, ui, { relatedTarget: 0 }),
	sl = dt(Fp),
	Bp = Ne({}, sr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
	qp = dt(Bp),
	$p = Ne({}, sr, {
		clipboardData: function (e) {
			return "clipboardData" in e ? e.clipboardData : window.clipboardData
		}
	}),
	zp = dt($p),
	Up = Ne({}, sr, { data: 0 }),
	rs = dt(Up),
	Vp = {
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
	},
	Hp = {
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
	},
	Wp = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey"
	}
function Kp(e) {
	var t = this.nativeEvent
	return t.getModifierState
		? t.getModifierState(e)
		: (e = Wp[e])
			? !!t[e]
			: !1
}
function Za() {
	return Kp
}
var Gp = Ne({}, ui, {
		key: function (e) {
			if (e.key) {
				var t = Vp[e.key] || e.key
				if (t !== "Unidentified") return t
			}
			return e.type === "keypress"
				? ((e = Fi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
				: e.type === "keydown" || e.type === "keyup"
					? Hp[e.keyCode] || "Unidentified"
					: ""
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: Za,
		charCode: function (e) {
			return e.type === "keypress" ? Fi(e) : 0
		},
		keyCode: function (e) {
			return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
		},
		which: function (e) {
			return e.type === "keypress"
				? Fi(e)
				: e.type === "keydown" || e.type === "keyup"
					? e.keyCode
					: 0
		}
	}),
	Qp = dt(Gp),
	Yp = Ne({}, jo, {
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
	}),
	is = dt(Yp),
	Zp = Ne({}, ui, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: Za
	}),
	Xp = dt(Zp),
	Jp = Ne({}, sr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
	ev = dt(Jp),
	tv = Ne({}, jo, {
		deltaX: function (e) {
			return "deltaX" in e
				? e.deltaX
				: "wheelDeltaX" in e
					? -e.wheelDeltaX
					: 0
		},
		deltaY: function (e) {
			return "deltaY" in e
				? e.deltaY
				: "wheelDeltaY" in e
					? -e.wheelDeltaY
					: "wheelDelta" in e
						? -e.wheelDelta
						: 0
		},
		deltaZ: 0,
		deltaMode: 0
	}),
	nv = dt(tv),
	rv = [9, 13, 27, 32],
	Xa = zt && "CompositionEvent" in window,
	Dr = null
zt && "documentMode" in document && (Dr = document.documentMode)
var iv = zt && "TextEvent" in window && !Dr,
	Tc = zt && (!Xa || (Dr && 8 < Dr && 11 >= Dr)),
	os = " ",
	ls = !1
function Pc(e, t) {
	switch (e) {
		case "keyup":
			return rv.indexOf(t.keyCode) !== -1
		case "keydown":
			return t.keyCode !== 229
		case "keypress":
		case "mousedown":
		case "focusout":
			return !0
		default:
			return !1
	}
}
function jc(e) {
	return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null
}
var Mn = !1
function ov(e, t) {
	switch (e) {
		case "compositionend":
			return jc(t)
		case "keypress":
			return t.which !== 32 ? null : ((ls = !0), os)
		case "textInput":
			return (e = t.data), e === os && ls ? null : e
		default:
			return null
	}
}
function lv(e, t) {
	if (Mn)
		return e === "compositionend" || (!Xa && Pc(e, t))
			? ((e = Ac()), (Mi = Qa = Jt = null), (Mn = !1), e)
			: null
	switch (e) {
		case "paste":
			return null
		case "keypress":
			if (
				!(t.ctrlKey || t.altKey || t.metaKey) ||
				(t.ctrlKey && t.altKey)
			) {
				if (t.char && 1 < t.char.length) return t.char
				if (t.which) return String.fromCharCode(t.which)
			}
			return null
		case "compositionend":
			return Tc && t.locale !== "ko" ? null : t.data
		default:
			return null
	}
}
var av = {
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
}
function as(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase()
	return t === "input" ? !!av[e.type] : t === "textarea"
}
function Lc(e, t, n, r) {
	sc(r),
		(t = eo(t, "onChange")),
		0 < t.length &&
			((n = new Ya("onChange", "change", null, n, r)),
			e.push({ event: n, listeners: t }))
}
var Rr = null,
	Qr = null
function uv(e) {
	Uc(e, 0)
}
function Lo(e) {
	var t = qn(e)
	if (nc(t)) return e
}
function sv(e, t) {
	if (e === "change") return t
}
var Cc = !1
if (zt) {
	var fl
	if (zt) {
		var cl = "oninput" in document
		if (!cl) {
			var us = document.createElement("div")
			us.setAttribute("oninput", "return;"),
				(cl = typeof us.oninput == "function")
		}
		fl = cl
	} else fl = !1
	Cc = fl && (!document.documentMode || 9 < document.documentMode)
}
function ss() {
	Rr && (Rr.detachEvent("onpropertychange", Dc), (Qr = Rr = null))
}
function Dc(e) {
	if (e.propertyName === "value" && Lo(Qr)) {
		var t = []
		Lc(t, Qr, e, Va(e)), hc(uv, t)
	}
}
function fv(e, t, n) {
	e === "focusin"
		? (ss(), (Rr = t), (Qr = n), Rr.attachEvent("onpropertychange", Dc))
		: e === "focusout" && ss()
}
function cv(e) {
	if (e === "selectionchange" || e === "keyup" || e === "keydown")
		return Lo(Qr)
}
function dv(e, t) {
	if (e === "click") return Lo(t)
}
function hv(e, t) {
	if (e === "input" || e === "change") return Lo(t)
}
function pv(e, t) {
	return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var Nt = typeof Object.is == "function" ? Object.is : pv
function Yr(e, t) {
	if (Nt(e, t)) return !0
	if (
		typeof e != "object" ||
		e === null ||
		typeof t != "object" ||
		t === null
	)
		return !1
	var n = Object.keys(e),
		r = Object.keys(t)
	if (n.length !== r.length) return !1
	for (r = 0; r < n.length; r++) {
		var i = n[r]
		if (!Il.call(t, i) || !Nt(e[i], t[i])) return !1
	}
	return !0
}
function fs(e) {
	for (; e && e.firstChild; ) e = e.firstChild
	return e
}
function cs(e, t) {
	var n = fs(e)
	e = 0
	for (var r; n; ) {
		if (n.nodeType === 3) {
			if (((r = e + n.textContent.length), e <= t && r >= t))
				return { node: n, offset: t - e }
			e = r
		}
		e: {
			for (; n; ) {
				if (n.nextSibling) {
					n = n.nextSibling
					break e
				}
				n = n.parentNode
			}
			n = void 0
		}
		n = fs(n)
	}
}
function Rc(e, t) {
	return e && t
		? e === t
			? !0
			: e && e.nodeType === 3
				? !1
				: t && t.nodeType === 3
					? Rc(e, t.parentNode)
					: "contains" in e
						? e.contains(t)
						: e.compareDocumentPosition
							? !!(e.compareDocumentPosition(t) & 16)
							: !1
		: !1
}
function Ic() {
	for (var e = window, t = Ki(); t instanceof e.HTMLIFrameElement; ) {
		try {
			var n = typeof t.contentWindow.location.href == "string"
		} catch {
			n = !1
		}
		if (n) e = t.contentWindow
		else break
		t = Ki(e.document)
	}
	return t
}
function Ja(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase()
	return (
		t &&
		((t === "input" &&
			(e.type === "text" ||
				e.type === "search" ||
				e.type === "tel" ||
				e.type === "url" ||
				e.type === "password")) ||
			t === "textarea" ||
			e.contentEditable === "true")
	)
}
function vv(e) {
	var t = Ic(),
		n = e.focusedElem,
		r = e.selectionRange
	if (
		t !== n &&
		n &&
		n.ownerDocument &&
		Rc(n.ownerDocument.documentElement, n)
	) {
		if (r !== null && Ja(n)) {
			if (
				((t = r.start),
				(e = r.end),
				e === void 0 && (e = t),
				"selectionStart" in n)
			)
				(n.selectionStart = t),
					(n.selectionEnd = Math.min(e, n.value.length))
			else if (
				((e =
					((t = n.ownerDocument || document) && t.defaultView) ||
					window),
				e.getSelection)
			) {
				e = e.getSelection()
				var i = n.textContent.length,
					o = Math.min(r.start, i)
				;(r = r.end === void 0 ? o : Math.min(r.end, i)),
					!e.extend && o > r && ((i = r), (r = o), (o = i)),
					(i = cs(n, o))
				var l = cs(n, r)
				i &&
					l &&
					(e.rangeCount !== 1 ||
						e.anchorNode !== i.node ||
						e.anchorOffset !== i.offset ||
						e.focusNode !== l.node ||
						e.focusOffset !== l.offset) &&
					((t = t.createRange()),
					t.setStart(i.node, i.offset),
					e.removeAllRanges(),
					o > r
						? (e.addRange(t), e.extend(l.node, l.offset))
						: (t.setEnd(l.node, l.offset), e.addRange(t)))
			}
		}
		for (t = [], e = n; (e = e.parentNode); )
			e.nodeType === 1 &&
				t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
		for (
			typeof n.focus == "function" && n.focus(), n = 0;
			n < t.length;
			n++
		)
			(e = t[n]),
				(e.element.scrollLeft = e.left),
				(e.element.scrollTop = e.top)
	}
}
var yv = zt && "documentMode" in document && 11 >= document.documentMode,
	Fn = null,
	ta = null,
	Ir = null,
	na = !1
function ds(e, t, n) {
	var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
	na ||
		Fn == null ||
		Fn !== Ki(r) ||
		((r = Fn),
		"selectionStart" in r && Ja(r)
			? (r = { start: r.selectionStart, end: r.selectionEnd })
			: ((r = (
					(r.ownerDocument && r.ownerDocument.defaultView) ||
					window
				).getSelection()),
				(r = {
					anchorNode: r.anchorNode,
					anchorOffset: r.anchorOffset,
					focusNode: r.focusNode,
					focusOffset: r.focusOffset
				})),
		(Ir && Yr(Ir, r)) ||
			((Ir = r),
			(r = eo(ta, "onSelect")),
			0 < r.length &&
				((t = new Ya("onSelect", "select", null, t, n)),
				e.push({ event: t, listeners: r }),
				(t.target = Fn))))
}
function bi(e, t) {
	var n = {}
	return (
		(n[e.toLowerCase()] = t.toLowerCase()),
		(n["Webkit" + e] = "webkit" + t),
		(n["Moz" + e] = "moz" + t),
		n
	)
}
var Bn = {
		animationend: bi("Animation", "AnimationEnd"),
		animationiteration: bi("Animation", "AnimationIteration"),
		animationstart: bi("Animation", "AnimationStart"),
		transitionend: bi("Transition", "TransitionEnd")
	},
	dl = {},
	Mc = {}
zt &&
	((Mc = document.createElement("div").style),
	"AnimationEvent" in window ||
		(delete Bn.animationend.animation,
		delete Bn.animationiteration.animation,
		delete Bn.animationstart.animation),
	"TransitionEvent" in window || delete Bn.transitionend.transition)
function Co(e) {
	if (dl[e]) return dl[e]
	if (!Bn[e]) return e
	var t = Bn[e],
		n
	for (n in t) if (t.hasOwnProperty(n) && n in Mc) return (dl[e] = t[n])
	return e
}
var Fc = Co("animationend"),
	Bc = Co("animationiteration"),
	qc = Co("animationstart"),
	$c = Co("transitionend"),
	zc = new Map(),
	hs =
		"abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
			" "
		)
function pn(e, t) {
	zc.set(e, t), jn(t, [e])
}
for (var hl = 0; hl < hs.length; hl++) {
	var pl = hs[hl],
		mv = pl.toLowerCase(),
		gv = pl[0].toUpperCase() + pl.slice(1)
	pn(mv, "on" + gv)
}
pn(Fc, "onAnimationEnd")
pn(Bc, "onAnimationIteration")
pn(qc, "onAnimationStart")
pn("dblclick", "onDoubleClick")
pn("focusin", "onFocus")
pn("focusout", "onBlur")
pn($c, "onTransitionEnd")
er("onMouseEnter", ["mouseout", "mouseover"])
er("onMouseLeave", ["mouseout", "mouseover"])
er("onPointerEnter", ["pointerout", "pointerover"])
er("onPointerLeave", ["pointerout", "pointerover"])
jn(
	"onChange",
	"change click focusin focusout input keydown keyup selectionchange".split(
		" "
	)
)
jn(
	"onSelect",
	"focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
		" "
	)
)
jn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"])
jn(
	"onCompositionEnd",
	"compositionend focusout keydown keypress keyup mousedown".split(" ")
)
jn(
	"onCompositionStart",
	"compositionstart focusout keydown keypress keyup mousedown".split(" ")
)
jn(
	"onCompositionUpdate",
	"compositionupdate focusout keydown keypress keyup mousedown".split(" ")
)
var jr =
		"abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
			" "
		),
	_v = new Set(
		"cancel close invalid load scroll toggle".split(" ").concat(jr)
	)
function ps(e, t, n) {
	var r = e.type || "unknown-event"
	;(e.currentTarget = n), mp(r, t, void 0, e), (e.currentTarget = null)
}
function Uc(e, t) {
	t = (t & 4) !== 0
	for (var n = 0; n < e.length; n++) {
		var r = e[n],
			i = r.event
		r = r.listeners
		e: {
			var o = void 0
			if (t)
				for (var l = r.length - 1; 0 <= l; l--) {
					var h = r[l],
						p = h.instance,
						g = h.currentTarget
					if (((h = h.listener), p !== o && i.isPropagationStopped()))
						break e
					ps(i, h, g), (o = p)
				}
			else
				for (l = 0; l < r.length; l++) {
					if (
						((h = r[l]),
						(p = h.instance),
						(g = h.currentTarget),
						(h = h.listener),
						p !== o && i.isPropagationStopped())
					)
						break e
					ps(i, h, g), (o = p)
				}
		}
	}
	if (Qi) throw ((e = Zl), (Qi = !1), (Zl = null), e)
}
function _e(e, t) {
	var n = t[aa]
	n === void 0 && (n = t[aa] = new Set())
	var r = e + "__bubble"
	n.has(r) || (Vc(t, e, 2, !1), n.add(r))
}
function vl(e, t, n) {
	var r = 0
	t && (r |= 4), Vc(n, e, r, t)
}
var xi = "_reactListening" + Math.random().toString(36).slice(2)
function Zr(e) {
	if (!e[xi]) {
		;(e[xi] = !0),
			Zf.forEach(function (n) {
				n !== "selectionchange" &&
					(_v.has(n) || vl(n, !1, e), vl(n, !0, e))
			})
		var t = e.nodeType === 9 ? e : e.ownerDocument
		t === null || t[xi] || ((t[xi] = !0), vl("selectionchange", !1, t))
	}
}
function Vc(e, t, n, r) {
	switch (Nc(t)) {
		case 1:
			var i = Cp
			break
		case 4:
			i = Dp
			break
		default:
			i = Ga
	}
	;(n = i.bind(null, t, n, e)),
		(i = void 0),
		!Yl ||
			(t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
			(i = !0),
		r
			? i !== void 0
				? e.addEventListener(t, n, { capture: !0, passive: i })
				: e.addEventListener(t, n, !0)
			: i !== void 0
				? e.addEventListener(t, n, { passive: i })
				: e.addEventListener(t, n, !1)
}
function yl(e, t, n, r, i) {
	var o = r
	if (!(t & 1) && !(t & 2) && r !== null)
		e: for (;;) {
			if (r === null) return
			var l = r.tag
			if (l === 3 || l === 4) {
				var h = r.stateNode.containerInfo
				if (h === i || (h.nodeType === 8 && h.parentNode === i)) break
				if (l === 4)
					for (l = r.return; l !== null; ) {
						var p = l.tag
						if (
							(p === 3 || p === 4) &&
							((p = l.stateNode.containerInfo),
							p === i || (p.nodeType === 8 && p.parentNode === i))
						)
							return
						l = l.return
					}
				for (; h !== null; ) {
					if (((l = wn(h)), l === null)) return
					if (((p = l.tag), p === 5 || p === 6)) {
						r = o = l
						continue e
					}
					h = h.parentNode
				}
			}
			r = r.return
		}
	hc(function () {
		var g = o,
			y = Va(n),
			f = []
		e: {
			var u = zc.get(e)
			if (u !== void 0) {
				var c = Ya,
					_ = e
				switch (e) {
					case "keypress":
						if (Fi(n) === 0) break e
					case "keydown":
					case "keyup":
						c = Qp
						break
					case "focusin":
						;(_ = "focus"), (c = sl)
						break
					case "focusout":
						;(_ = "blur"), (c = sl)
						break
					case "beforeblur":
					case "afterblur":
						c = sl
						break
					case "click":
						if (n.button === 2) break e
					case "auxclick":
					case "dblclick":
					case "mousedown":
					case "mousemove":
					case "mouseup":
					case "mouseout":
					case "mouseover":
					case "contextmenu":
						c = ns
						break
					case "drag":
					case "dragend":
					case "dragenter":
					case "dragexit":
					case "dragleave":
					case "dragover":
					case "dragstart":
					case "drop":
						c = Mp
						break
					case "touchcancel":
					case "touchend":
					case "touchmove":
					case "touchstart":
						c = Xp
						break
					case Fc:
					case Bc:
					case qc:
						c = qp
						break
					case $c:
						c = ev
						break
					case "scroll":
						c = Rp
						break
					case "wheel":
						c = nv
						break
					case "copy":
					case "cut":
					case "paste":
						c = zp
						break
					case "gotpointercapture":
					case "lostpointercapture":
					case "pointercancel":
					case "pointerdown":
					case "pointermove":
					case "pointerout":
					case "pointerover":
					case "pointerup":
						c = is
				}
				var m = (t & 4) !== 0,
					w = !m && e === "scroll",
					s = m ? (u !== null ? u + "Capture" : null) : u
				m = []
				for (var a = g, v; a !== null; ) {
					v = a
					var d = v.stateNode
					if (
						(v.tag === 5 &&
							d !== null &&
							((v = d),
							s !== null &&
								((d = Hr(a, s)),
								d != null && m.push(Xr(a, d, v)))),
						w)
					)
						break
					a = a.return
				}
				0 < m.length &&
					((u = new c(u, _, null, n, y)),
					f.push({ event: u, listeners: m }))
			}
		}
		if (!(t & 7)) {
			e: {
				if (
					((u = e === "mouseover" || e === "pointerover"),
					(c = e === "mouseout" || e === "pointerout"),
					u &&
						n !== Gl &&
						(_ = n.relatedTarget || n.fromElement) &&
						(wn(_) || _[Ut]))
				)
					break e
				if (
					(c || u) &&
					((u =
						y.window === y
							? y
							: (u = y.ownerDocument)
								? u.defaultView || u.parentWindow
								: window),
					c
						? ((_ = n.relatedTarget || n.toElement),
							(c = g),
							(_ = _ ? wn(_) : null),
							_ !== null &&
								((w = Ln(_)),
								_ !== w || (_.tag !== 5 && _.tag !== 6)) &&
								(_ = null))
						: ((c = null), (_ = g)),
					c !== _)
				) {
					if (
						((m = ns),
						(d = "onMouseLeave"),
						(s = "onMouseEnter"),
						(a = "mouse"),
						(e === "pointerout" || e === "pointerover") &&
							((m = is),
							(d = "onPointerLeave"),
							(s = "onPointerEnter"),
							(a = "pointer")),
						(w = c == null ? u : qn(c)),
						(v = _ == null ? u : qn(_)),
						(u = new m(d, a + "leave", c, n, y)),
						(u.target = w),
						(u.relatedTarget = v),
						(d = null),
						wn(y) === g &&
							((m = new m(s, a + "enter", _, n, y)),
							(m.target = v),
							(m.relatedTarget = w),
							(d = m)),
						(w = d),
						c && _)
					)
						t: {
							for (m = c, s = _, a = 0, v = m; v; v = Cn(v)) a++
							for (v = 0, d = s; d; d = Cn(d)) v++
							for (; 0 < a - v; ) (m = Cn(m)), a--
							for (; 0 < v - a; ) (s = Cn(s)), v--
							for (; a--; ) {
								if (
									m === s ||
									(s !== null && m === s.alternate)
								)
									break t
								;(m = Cn(m)), (s = Cn(s))
							}
							m = null
						}
					else m = null
					c !== null && vs(f, u, c, m, !1),
						_ !== null && w !== null && vs(f, w, _, m, !0)
				}
			}
			e: {
				if (
					((u = g ? qn(g) : window),
					(c = u.nodeName && u.nodeName.toLowerCase()),
					c === "select" || (c === "input" && u.type === "file"))
				)
					var E = sv
				else if (as(u))
					if (Cc) E = hv
					else {
						E = cv
						var N = fv
					}
				else
					(c = u.nodeName) &&
						c.toLowerCase() === "input" &&
						(u.type === "checkbox" || u.type === "radio") &&
						(E = dv)
				if (E && (E = E(e, g))) {
					Lc(f, E, n, y)
					break e
				}
				N && N(e, u, g),
					e === "focusout" &&
						(N = u._wrapperState) &&
						N.controlled &&
						u.type === "number" &&
						Ul(u, "number", u.value)
			}
			switch (((N = g ? qn(g) : window), e)) {
				case "focusin":
					;(as(N) || N.contentEditable === "true") &&
						((Fn = N), (ta = g), (Ir = null))
					break
				case "focusout":
					Ir = ta = Fn = null
					break
				case "mousedown":
					na = !0
					break
				case "contextmenu":
				case "mouseup":
				case "dragend":
					;(na = !1), ds(f, n, y)
					break
				case "selectionchange":
					if (yv) break
				case "keydown":
				case "keyup":
					ds(f, n, y)
			}
			var k
			if (Xa)
				e: {
					switch (e) {
						case "compositionstart":
							var O = "onCompositionStart"
							break e
						case "compositionend":
							O = "onCompositionEnd"
							break e
						case "compositionupdate":
							O = "onCompositionUpdate"
							break e
					}
					O = void 0
				}
			else
				Mn
					? Pc(e, n) && (O = "onCompositionEnd")
					: e === "keydown" &&
						n.keyCode === 229 &&
						(O = "onCompositionStart")
			O &&
				(Tc &&
					n.locale !== "ko" &&
					(Mn || O !== "onCompositionStart"
						? O === "onCompositionEnd" && Mn && (k = Ac())
						: ((Jt = y),
							(Qa = "value" in Jt ? Jt.value : Jt.textContent),
							(Mn = !0))),
				(N = eo(g, O)),
				0 < N.length &&
					((O = new rs(O, e, null, n, y)),
					f.push({ event: O, listeners: N }),
					k
						? (O.data = k)
						: ((k = jc(n)), k !== null && (O.data = k)))),
				(k = iv ? ov(e, n) : lv(e, n)) &&
					((g = eo(g, "onBeforeInput")),
					0 < g.length &&
						((y = new rs(
							"onBeforeInput",
							"beforeinput",
							null,
							n,
							y
						)),
						f.push({ event: y, listeners: g }),
						(y.data = k)))
		}
		Uc(f, t)
	})
}
function Xr(e, t, n) {
	return { instance: e, listener: t, currentTarget: n }
}
function eo(e, t) {
	for (var n = t + "Capture", r = []; e !== null; ) {
		var i = e,
			o = i.stateNode
		i.tag === 5 &&
			o !== null &&
			((i = o),
			(o = Hr(e, n)),
			o != null && r.unshift(Xr(e, o, i)),
			(o = Hr(e, t)),
			o != null && r.push(Xr(e, o, i))),
			(e = e.return)
	}
	return r
}
function Cn(e) {
	if (e === null) return null
	do e = e.return
	while (e && e.tag !== 5)
	return e || null
}
function vs(e, t, n, r, i) {
	for (var o = t._reactName, l = []; n !== null && n !== r; ) {
		var h = n,
			p = h.alternate,
			g = h.stateNode
		if (p !== null && p === r) break
		h.tag === 5 &&
			g !== null &&
			((h = g),
			i
				? ((p = Hr(n, o)), p != null && l.unshift(Xr(n, p, h)))
				: i || ((p = Hr(n, o)), p != null && l.push(Xr(n, p, h)))),
			(n = n.return)
	}
	l.length !== 0 && e.push({ event: t, listeners: l })
}
var wv = /\r\n?/g,
	Ev = /\u0000|\uFFFD/g
function ys(e) {
	return (typeof e == "string" ? e : "" + e)
		.replace(
			wv,
			`
`
		)
		.replace(Ev, "")
}
function Si(e, t, n) {
	if (((t = ys(t)), ys(e) !== t && n)) throw Error(te(425))
}
function to() {}
var ra = null,
	ia = null
function oa(e, t) {
	return (
		e === "textarea" ||
		e === "noscript" ||
		typeof t.children == "string" ||
		typeof t.children == "number" ||
		(typeof t.dangerouslySetInnerHTML == "object" &&
			t.dangerouslySetInnerHTML !== null &&
			t.dangerouslySetInnerHTML.__html != null)
	)
}
var la = typeof setTimeout == "function" ? setTimeout : void 0,
	bv = typeof clearTimeout == "function" ? clearTimeout : void 0,
	ms = typeof Promise == "function" ? Promise : void 0,
	xv =
		typeof queueMicrotask == "function"
			? queueMicrotask
			: typeof ms < "u"
				? function (e) {
						return ms.resolve(null).then(e).catch(Sv)
					}
				: la
function Sv(e) {
	setTimeout(function () {
		throw e
	})
}
function ml(e, t) {
	var n = t,
		r = 0
	do {
		var i = n.nextSibling
		if ((e.removeChild(n), i && i.nodeType === 8))
			if (((n = i.data), n === "/$")) {
				if (r === 0) {
					e.removeChild(i), Gr(t)
					return
				}
				r--
			} else (n !== "$" && n !== "$?" && n !== "$!") || r++
		n = i
	} while (n)
	Gr(t)
}
function ln(e) {
	for (; e != null; e = e.nextSibling) {
		var t = e.nodeType
		if (t === 1 || t === 3) break
		if (t === 8) {
			if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break
			if (t === "/$") return null
		}
	}
	return e
}
function gs(e) {
	e = e.previousSibling
	for (var t = 0; e; ) {
		if (e.nodeType === 8) {
			var n = e.data
			if (n === "$" || n === "$!" || n === "$?") {
				if (t === 0) return e
				t--
			} else n === "/$" && t++
		}
		e = e.previousSibling
	}
	return null
}
var fr = Math.random().toString(36).slice(2),
	jt = "__reactFiber$" + fr,
	Jr = "__reactProps$" + fr,
	Ut = "__reactContainer$" + fr,
	aa = "__reactEvents$" + fr,
	kv = "__reactListeners$" + fr,
	Ov = "__reactHandles$" + fr
function wn(e) {
	var t = e[jt]
	if (t) return t
	for (var n = e.parentNode; n; ) {
		if ((t = n[Ut] || n[jt])) {
			if (
				((n = t.alternate),
				t.child !== null || (n !== null && n.child !== null))
			)
				for (e = gs(e); e !== null; ) {
					if ((n = e[jt])) return n
					e = gs(e)
				}
			return t
		}
		;(e = n), (n = e.parentNode)
	}
	return null
}
function si(e) {
	return (
		(e = e[jt] || e[Ut]),
		!e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
			? null
			: e
	)
}
function qn(e) {
	if (e.tag === 5 || e.tag === 6) return e.stateNode
	throw Error(te(33))
}
function Do(e) {
	return e[Jr] || null
}
var ua = [],
	$n = -1
function vn(e) {
	return { current: e }
}
function Ee(e) {
	0 > $n || ((e.current = ua[$n]), (ua[$n] = null), $n--)
}
function ge(e, t) {
	$n++, (ua[$n] = e.current), (e.current = t)
}
var dn = {},
	We = vn(dn),
	nt = vn(!1),
	On = dn
function tr(e, t) {
	var n = e.type.contextTypes
	if (!n) return dn
	var r = e.stateNode
	if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
		return r.__reactInternalMemoizedMaskedChildContext
	var i = {},
		o
	for (o in n) i[o] = t[o]
	return (
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = t),
			(e.__reactInternalMemoizedMaskedChildContext = i)),
		i
	)
}
function rt(e) {
	return (e = e.childContextTypes), e != null
}
function no() {
	Ee(nt), Ee(We)
}
function _s(e, t, n) {
	if (We.current !== dn) throw Error(te(168))
	ge(We, t), ge(nt, n)
}
function Hc(e, t, n) {
	var r = e.stateNode
	if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
		return n
	r = r.getChildContext()
	for (var i in r) if (!(i in t)) throw Error(te(108, fp(e) || "Unknown", i))
	return Ne({}, n, r)
}
function ro(e) {
	return (
		(e =
			((e = e.stateNode) &&
				e.__reactInternalMemoizedMergedChildContext) ||
			dn),
		(On = We.current),
		ge(We, e),
		ge(nt, nt.current),
		!0
	)
}
function ws(e, t, n) {
	var r = e.stateNode
	if (!r) throw Error(te(169))
	n
		? ((e = Hc(e, t, On)),
			(r.__reactInternalMemoizedMergedChildContext = e),
			Ee(nt),
			Ee(We),
			ge(We, e))
		: Ee(nt),
		ge(nt, n)
}
var Ft = null,
	Ro = !1,
	gl = !1
function Wc(e) {
	Ft === null ? (Ft = [e]) : Ft.push(e)
}
function Nv(e) {
	;(Ro = !0), Wc(e)
}
function yn() {
	if (!gl && Ft !== null) {
		gl = !0
		var e = 0,
			t = ve
		try {
			var n = Ft
			for (ve = 1; e < n.length; e++) {
				var r = n[e]
				do r = r(!0)
				while (r !== null)
			}
			;(Ft = null), (Ro = !1)
		} catch (i) {
			throw (Ft !== null && (Ft = Ft.slice(e + 1)), mc(Ha, yn), i)
		} finally {
			;(ve = t), (gl = !1)
		}
	}
	return null
}
var zn = [],
	Un = 0,
	io = null,
	oo = 0,
	pt = [],
	vt = 0,
	Nn = null,
	Bt = 1,
	qt = ""
function mn(e, t) {
	;(zn[Un++] = oo), (zn[Un++] = io), (io = e), (oo = t)
}
function Kc(e, t, n) {
	;(pt[vt++] = Bt), (pt[vt++] = qt), (pt[vt++] = Nn), (Nn = e)
	var r = Bt
	e = qt
	var i = 32 - kt(r) - 1
	;(r &= ~(1 << i)), (n += 1)
	var o = 32 - kt(t) + i
	if (30 < o) {
		var l = i - (i % 5)
		;(o = (r & ((1 << l) - 1)).toString(32)),
			(r >>= l),
			(i -= l),
			(Bt = (1 << (32 - kt(t) + i)) | (n << i) | r),
			(qt = o + e)
	} else (Bt = (1 << o) | (n << i) | r), (qt = e)
}
function eu(e) {
	e.return !== null && (mn(e, 1), Kc(e, 1, 0))
}
function tu(e) {
	for (; e === io; )
		(io = zn[--Un]), (zn[Un] = null), (oo = zn[--Un]), (zn[Un] = null)
	for (; e === Nn; )
		(Nn = pt[--vt]),
			(pt[vt] = null),
			(qt = pt[--vt]),
			(pt[vt] = null),
			(Bt = pt[--vt]),
			(pt[vt] = null)
}
var st = null,
	ut = null,
	xe = !1,
	xt = null
function Gc(e, t) {
	var n = yt(5, null, null, 0)
	;(n.elementType = "DELETED"),
		(n.stateNode = t),
		(n.return = e),
		(t = e.deletions),
		t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n)
}
function Es(e, t) {
	switch (e.tag) {
		case 5:
			var n = e.type
			return (
				(t =
					t.nodeType !== 1 ||
					n.toLowerCase() !== t.nodeName.toLowerCase()
						? null
						: t),
				t !== null
					? ((e.stateNode = t), (st = e), (ut = ln(t.firstChild)), !0)
					: !1
			)
		case 6:
			return (
				(t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
				t !== null ? ((e.stateNode = t), (st = e), (ut = null), !0) : !1
			)
		case 13:
			return (
				(t = t.nodeType !== 8 ? null : t),
				t !== null
					? ((n = Nn !== null ? { id: Bt, overflow: qt } : null),
						(e.memoizedState = {
							dehydrated: t,
							treeContext: n,
							retryLane: 1073741824
						}),
						(n = yt(18, null, null, 0)),
						(n.stateNode = t),
						(n.return = e),
						(e.child = n),
						(st = e),
						(ut = null),
						!0)
					: !1
			)
		default:
			return !1
	}
}
function sa(e) {
	return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function fa(e) {
	if (xe) {
		var t = ut
		if (t) {
			var n = t
			if (!Es(e, t)) {
				if (sa(e)) throw Error(te(418))
				t = ln(n.nextSibling)
				var r = st
				t && Es(e, t)
					? Gc(r, n)
					: ((e.flags = (e.flags & -4097) | 2), (xe = !1), (st = e))
			}
		} else {
			if (sa(e)) throw Error(te(418))
			;(e.flags = (e.flags & -4097) | 2), (xe = !1), (st = e)
		}
	}
}
function bs(e) {
	for (
		e = e.return;
		e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

	)
		e = e.return
	st = e
}
function ki(e) {
	if (e !== st) return !1
	if (!xe) return bs(e), (xe = !0), !1
	var t
	if (
		((t = e.tag !== 3) &&
			!(t = e.tag !== 5) &&
			((t = e.type),
			(t = t !== "head" && t !== "body" && !oa(e.type, e.memoizedProps))),
		t && (t = ut))
	) {
		if (sa(e)) throw (Qc(), Error(te(418)))
		for (; t; ) Gc(e, t), (t = ln(t.nextSibling))
	}
	if ((bs(e), e.tag === 13)) {
		if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
			throw Error(te(317))
		e: {
			for (e = e.nextSibling, t = 0; e; ) {
				if (e.nodeType === 8) {
					var n = e.data
					if (n === "/$") {
						if (t === 0) {
							ut = ln(e.nextSibling)
							break e
						}
						t--
					} else (n !== "$" && n !== "$!" && n !== "$?") || t++
				}
				e = e.nextSibling
			}
			ut = null
		}
	} else ut = st ? ln(e.stateNode.nextSibling) : null
	return !0
}
function Qc() {
	for (var e = ut; e; ) e = ln(e.nextSibling)
}
function nr() {
	;(ut = st = null), (xe = !1)
}
function nu(e) {
	xt === null ? (xt = [e]) : xt.push(e)
}
var Av = Wt.ReactCurrentBatchConfig
function br(e, t, n) {
	if (
		((e = n.ref),
		e !== null && typeof e != "function" && typeof e != "object")
	) {
		if (n._owner) {
			if (((n = n._owner), n)) {
				if (n.tag !== 1) throw Error(te(309))
				var r = n.stateNode
			}
			if (!r) throw Error(te(147, e))
			var i = r,
				o = "" + e
			return t !== null &&
				t.ref !== null &&
				typeof t.ref == "function" &&
				t.ref._stringRef === o
				? t.ref
				: ((t = function (l) {
						var h = i.refs
						l === null ? delete h[o] : (h[o] = l)
					}),
					(t._stringRef = o),
					t)
		}
		if (typeof e != "string") throw Error(te(284))
		if (!n._owner) throw Error(te(290, e))
	}
	return e
}
function Oi(e, t) {
	throw (
		((e = Object.prototype.toString.call(t)),
		Error(
			te(
				31,
				e === "[object Object]"
					? "object with keys {" + Object.keys(t).join(", ") + "}"
					: e
			)
		))
	)
}
function xs(e) {
	var t = e._init
	return t(e._payload)
}
function Yc(e) {
	function t(s, a) {
		if (e) {
			var v = s.deletions
			v === null ? ((s.deletions = [a]), (s.flags |= 16)) : v.push(a)
		}
	}
	function n(s, a) {
		if (!e) return null
		for (; a !== null; ) t(s, a), (a = a.sibling)
		return null
	}
	function r(s, a) {
		for (s = new Map(); a !== null; )
			a.key !== null ? s.set(a.key, a) : s.set(a.index, a),
				(a = a.sibling)
		return s
	}
	function i(s, a) {
		return (s = fn(s, a)), (s.index = 0), (s.sibling = null), s
	}
	function o(s, a, v) {
		return (
			(s.index = v),
			e
				? ((v = s.alternate),
					v !== null
						? ((v = v.index), v < a ? ((s.flags |= 2), a) : v)
						: ((s.flags |= 2), a))
				: ((s.flags |= 1048576), a)
		)
	}
	function l(s) {
		return e && s.alternate === null && (s.flags |= 2), s
	}
	function h(s, a, v, d) {
		return a === null || a.tag !== 6
			? ((a = kl(v, s.mode, d)), (a.return = s), a)
			: ((a = i(a, v)), (a.return = s), a)
	}
	function p(s, a, v, d) {
		var E = v.type
		return E === In
			? y(s, a, v.props.children, d, v.key)
			: a !== null &&
				  (a.elementType === E ||
						(typeof E == "object" &&
							E !== null &&
							E.$$typeof === Qt &&
							xs(E) === a.type))
				? ((d = i(a, v.props)),
					(d.ref = br(s, a, v)),
					(d.return = s),
					d)
				: ((d = Hi(v.type, v.key, v.props, null, s.mode, d)),
					(d.ref = br(s, a, v)),
					(d.return = s),
					d)
	}
	function g(s, a, v, d) {
		return a === null ||
			a.tag !== 4 ||
			a.stateNode.containerInfo !== v.containerInfo ||
			a.stateNode.implementation !== v.implementation
			? ((a = Ol(v, s.mode, d)), (a.return = s), a)
			: ((a = i(a, v.children || [])), (a.return = s), a)
	}
	function y(s, a, v, d, E) {
		return a === null || a.tag !== 7
			? ((a = kn(v, s.mode, d, E)), (a.return = s), a)
			: ((a = i(a, v)), (a.return = s), a)
	}
	function f(s, a, v) {
		if ((typeof a == "string" && a !== "") || typeof a == "number")
			return (a = kl("" + a, s.mode, v)), (a.return = s), a
		if (typeof a == "object" && a !== null) {
			switch (a.$$typeof) {
				case vi:
					return (
						(v = Hi(a.type, a.key, a.props, null, s.mode, v)),
						(v.ref = br(s, null, a)),
						(v.return = s),
						v
					)
				case Rn:
					return (a = Ol(a, s.mode, v)), (a.return = s), a
				case Qt:
					var d = a._init
					return f(s, d(a._payload), v)
			}
			if (Tr(a) || mr(a))
				return (a = kn(a, s.mode, v, null)), (a.return = s), a
			Oi(s, a)
		}
		return null
	}
	function u(s, a, v, d) {
		var E = a !== null ? a.key : null
		if ((typeof v == "string" && v !== "") || typeof v == "number")
			return E !== null ? null : h(s, a, "" + v, d)
		if (typeof v == "object" && v !== null) {
			switch (v.$$typeof) {
				case vi:
					return v.key === E ? p(s, a, v, d) : null
				case Rn:
					return v.key === E ? g(s, a, v, d) : null
				case Qt:
					return (E = v._init), u(s, a, E(v._payload), d)
			}
			if (Tr(v) || mr(v)) return E !== null ? null : y(s, a, v, d, null)
			Oi(s, v)
		}
		return null
	}
	function c(s, a, v, d, E) {
		if ((typeof d == "string" && d !== "") || typeof d == "number")
			return (s = s.get(v) || null), h(a, s, "" + d, E)
		if (typeof d == "object" && d !== null) {
			switch (d.$$typeof) {
				case vi:
					return (
						(s = s.get(d.key === null ? v : d.key) || null),
						p(a, s, d, E)
					)
				case Rn:
					return (
						(s = s.get(d.key === null ? v : d.key) || null),
						g(a, s, d, E)
					)
				case Qt:
					var N = d._init
					return c(s, a, v, N(d._payload), E)
			}
			if (Tr(d) || mr(d))
				return (s = s.get(v) || null), y(a, s, d, E, null)
			Oi(a, d)
		}
		return null
	}
	function _(s, a, v, d) {
		for (
			var E = null, N = null, k = a, O = (a = 0), j = null;
			k !== null && O < v.length;
			O++
		) {
			k.index > O ? ((j = k), (k = null)) : (j = k.sibling)
			var x = u(s, k, v[O], d)
			if (x === null) {
				k === null && (k = j)
				break
			}
			e && k && x.alternate === null && t(s, k),
				(a = o(x, a, O)),
				N === null ? (E = x) : (N.sibling = x),
				(N = x),
				(k = j)
		}
		if (O === v.length) return n(s, k), xe && mn(s, O), E
		if (k === null) {
			for (; O < v.length; O++)
				(k = f(s, v[O], d)),
					k !== null &&
						((a = o(k, a, O)),
						N === null ? (E = k) : (N.sibling = k),
						(N = k))
			return xe && mn(s, O), E
		}
		for (k = r(s, k); O < v.length; O++)
			(j = c(k, s, O, v[O], d)),
				j !== null &&
					(e &&
						j.alternate !== null &&
						k.delete(j.key === null ? O : j.key),
					(a = o(j, a, O)),
					N === null ? (E = j) : (N.sibling = j),
					(N = j))
		return (
			e &&
				k.forEach(function (b) {
					return t(s, b)
				}),
			xe && mn(s, O),
			E
		)
	}
	function m(s, a, v, d) {
		var E = mr(v)
		if (typeof E != "function") throw Error(te(150))
		if (((v = E.call(v)), v == null)) throw Error(te(151))
		for (
			var N = (E = null), k = a, O = (a = 0), j = null, x = v.next();
			k !== null && !x.done;
			O++, x = v.next()
		) {
			k.index > O ? ((j = k), (k = null)) : (j = k.sibling)
			var b = u(s, k, x.value, d)
			if (b === null) {
				k === null && (k = j)
				break
			}
			e && k && b.alternate === null && t(s, k),
				(a = o(b, a, O)),
				N === null ? (E = b) : (N.sibling = b),
				(N = b),
				(k = j)
		}
		if (x.done) return n(s, k), xe && mn(s, O), E
		if (k === null) {
			for (; !x.done; O++, x = v.next())
				(x = f(s, x.value, d)),
					x !== null &&
						((a = o(x, a, O)),
						N === null ? (E = x) : (N.sibling = x),
						(N = x))
			return xe && mn(s, O), E
		}
		for (k = r(s, k); !x.done; O++, x = v.next())
			(x = c(k, s, O, x.value, d)),
				x !== null &&
					(e &&
						x.alternate !== null &&
						k.delete(x.key === null ? O : x.key),
					(a = o(x, a, O)),
					N === null ? (E = x) : (N.sibling = x),
					(N = x))
		return (
			e &&
				k.forEach(function (S) {
					return t(s, S)
				}),
			xe && mn(s, O),
			E
		)
	}
	function w(s, a, v, d) {
		if (
			(typeof v == "object" &&
				v !== null &&
				v.type === In &&
				v.key === null &&
				(v = v.props.children),
			typeof v == "object" && v !== null)
		) {
			switch (v.$$typeof) {
				case vi:
					e: {
						for (var E = v.key, N = a; N !== null; ) {
							if (N.key === E) {
								if (((E = v.type), E === In)) {
									if (N.tag === 7) {
										n(s, N.sibling),
											(a = i(N, v.props.children)),
											(a.return = s),
											(s = a)
										break e
									}
								} else if (
									N.elementType === E ||
									(typeof E == "object" &&
										E !== null &&
										E.$$typeof === Qt &&
										xs(E) === N.type)
								) {
									n(s, N.sibling),
										(a = i(N, v.props)),
										(a.ref = br(s, N, v)),
										(a.return = s),
										(s = a)
									break e
								}
								n(s, N)
								break
							} else t(s, N)
							N = N.sibling
						}
						v.type === In
							? ((a = kn(v.props.children, s.mode, d, v.key)),
								(a.return = s),
								(s = a))
							: ((d = Hi(
									v.type,
									v.key,
									v.props,
									null,
									s.mode,
									d
								)),
								(d.ref = br(s, a, v)),
								(d.return = s),
								(s = d))
					}
					return l(s)
				case Rn:
					e: {
						for (N = v.key; a !== null; ) {
							if (a.key === N)
								if (
									a.tag === 4 &&
									a.stateNode.containerInfo ===
										v.containerInfo &&
									a.stateNode.implementation ===
										v.implementation
								) {
									n(s, a.sibling),
										(a = i(a, v.children || [])),
										(a.return = s),
										(s = a)
									break e
								} else {
									n(s, a)
									break
								}
							else t(s, a)
							a = a.sibling
						}
						;(a = Ol(v, s.mode, d)), (a.return = s), (s = a)
					}
					return l(s)
				case Qt:
					return (N = v._init), w(s, a, N(v._payload), d)
			}
			if (Tr(v)) return _(s, a, v, d)
			if (mr(v)) return m(s, a, v, d)
			Oi(s, v)
		}
		return (typeof v == "string" && v !== "") || typeof v == "number"
			? ((v = "" + v),
				a !== null && a.tag === 6
					? (n(s, a.sibling), (a = i(a, v)), (a.return = s), (s = a))
					: (n(s, a),
						(a = kl(v, s.mode, d)),
						(a.return = s),
						(s = a)),
				l(s))
			: n(s, a)
	}
	return w
}
var rr = Yc(!0),
	Zc = Yc(!1),
	lo = vn(null),
	ao = null,
	Vn = null,
	ru = null
function iu() {
	ru = Vn = ao = null
}
function ou(e) {
	var t = lo.current
	Ee(lo), (e._currentValue = t)
}
function ca(e, t, n) {
	for (; e !== null; ) {
		var r = e.alternate
		if (
			((e.childLanes & t) !== t
				? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
				: r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
			e === n)
		)
			break
		e = e.return
	}
}
function Xn(e, t) {
	;(ao = e),
		(ru = Vn = null),
		(e = e.dependencies),
		e !== null &&
			e.firstContext !== null &&
			(e.lanes & t && (tt = !0), (e.firstContext = null))
}
function gt(e) {
	var t = e._currentValue
	if (ru !== e)
		if (((e = { context: e, memoizedValue: t, next: null }), Vn === null)) {
			if (ao === null) throw Error(te(308))
			;(Vn = e), (ao.dependencies = { lanes: 0, firstContext: e })
		} else Vn = Vn.next = e
	return t
}
var En = null
function lu(e) {
	En === null ? (En = [e]) : En.push(e)
}
function Xc(e, t, n, r) {
	var i = t.interleaved
	return (
		i === null ? ((n.next = n), lu(t)) : ((n.next = i.next), (i.next = n)),
		(t.interleaved = n),
		Vt(e, r)
	)
}
function Vt(e, t) {
	e.lanes |= t
	var n = e.alternate
	for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
		(e.childLanes |= t),
			(n = e.alternate),
			n !== null && (n.childLanes |= t),
			(n = e),
			(e = e.return)
	return n.tag === 3 ? n.stateNode : null
}
var Yt = !1
function au(e) {
	e.updateQueue = {
		baseState: e.memoizedState,
		firstBaseUpdate: null,
		lastBaseUpdate: null,
		shared: { pending: null, interleaved: null, lanes: 0 },
		effects: null
	}
}
function Jc(e, t) {
	;(e = e.updateQueue),
		t.updateQueue === e &&
			(t.updateQueue = {
				baseState: e.baseState,
				firstBaseUpdate: e.firstBaseUpdate,
				lastBaseUpdate: e.lastBaseUpdate,
				shared: e.shared,
				effects: e.effects
			})
}
function $t(e, t) {
	return {
		eventTime: e,
		lane: t,
		tag: 0,
		payload: null,
		callback: null,
		next: null
	}
}
function an(e, t, n) {
	var r = e.updateQueue
	if (r === null) return null
	if (((r = r.shared), de & 2)) {
		var i = r.pending
		return (
			i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
			(r.pending = t),
			Vt(e, n)
		)
	}
	return (
		(i = r.interleaved),
		i === null ? ((t.next = t), lu(r)) : ((t.next = i.next), (i.next = t)),
		(r.interleaved = t),
		Vt(e, n)
	)
}
function Bi(e, t, n) {
	if (
		((t = t.updateQueue),
		t !== null && ((t = t.shared), (n & 4194240) !== 0))
	) {
		var r = t.lanes
		;(r &= e.pendingLanes), (n |= r), (t.lanes = n), Wa(e, n)
	}
}
function Ss(e, t) {
	var n = e.updateQueue,
		r = e.alternate
	if (r !== null && ((r = r.updateQueue), n === r)) {
		var i = null,
			o = null
		if (((n = n.firstBaseUpdate), n !== null)) {
			do {
				var l = {
					eventTime: n.eventTime,
					lane: n.lane,
					tag: n.tag,
					payload: n.payload,
					callback: n.callback,
					next: null
				}
				o === null ? (i = o = l) : (o = o.next = l), (n = n.next)
			} while (n !== null)
			o === null ? (i = o = t) : (o = o.next = t)
		} else i = o = t
		;(n = {
			baseState: r.baseState,
			firstBaseUpdate: i,
			lastBaseUpdate: o,
			shared: r.shared,
			effects: r.effects
		}),
			(e.updateQueue = n)
		return
	}
	;(e = n.lastBaseUpdate),
		e === null ? (n.firstBaseUpdate = t) : (e.next = t),
		(n.lastBaseUpdate = t)
}
function uo(e, t, n, r) {
	var i = e.updateQueue
	Yt = !1
	var o = i.firstBaseUpdate,
		l = i.lastBaseUpdate,
		h = i.shared.pending
	if (h !== null) {
		i.shared.pending = null
		var p = h,
			g = p.next
		;(p.next = null), l === null ? (o = g) : (l.next = g), (l = p)
		var y = e.alternate
		y !== null &&
			((y = y.updateQueue),
			(h = y.lastBaseUpdate),
			h !== l &&
				(h === null ? (y.firstBaseUpdate = g) : (h.next = g),
				(y.lastBaseUpdate = p)))
	}
	if (o !== null) {
		var f = i.baseState
		;(l = 0), (y = g = p = null), (h = o)
		do {
			var u = h.lane,
				c = h.eventTime
			if ((r & u) === u) {
				y !== null &&
					(y = y.next =
						{
							eventTime: c,
							lane: 0,
							tag: h.tag,
							payload: h.payload,
							callback: h.callback,
							next: null
						})
				e: {
					var _ = e,
						m = h
					switch (((u = t), (c = n), m.tag)) {
						case 1:
							if (((_ = m.payload), typeof _ == "function")) {
								f = _.call(c, f, u)
								break e
							}
							f = _
							break e
						case 3:
							_.flags = (_.flags & -65537) | 128
						case 0:
							if (
								((_ = m.payload),
								(u =
									typeof _ == "function"
										? _.call(c, f, u)
										: _),
								u == null)
							)
								break e
							f = Ne({}, f, u)
							break e
						case 2:
							Yt = !0
					}
				}
				h.callback !== null &&
					h.lane !== 0 &&
					((e.flags |= 64),
					(u = i.effects),
					u === null ? (i.effects = [h]) : u.push(h))
			} else
				(c = {
					eventTime: c,
					lane: u,
					tag: h.tag,
					payload: h.payload,
					callback: h.callback,
					next: null
				}),
					y === null ? ((g = y = c), (p = f)) : (y = y.next = c),
					(l |= u)
			if (((h = h.next), h === null)) {
				if (((h = i.shared.pending), h === null)) break
				;(u = h),
					(h = u.next),
					(u.next = null),
					(i.lastBaseUpdate = u),
					(i.shared.pending = null)
			}
		} while (!0)
		if (
			(y === null && (p = f),
			(i.baseState = p),
			(i.firstBaseUpdate = g),
			(i.lastBaseUpdate = y),
			(t = i.shared.interleaved),
			t !== null)
		) {
			i = t
			do (l |= i.lane), (i = i.next)
			while (i !== t)
		} else o === null && (i.shared.lanes = 0)
		;(Tn |= l), (e.lanes = l), (e.memoizedState = f)
	}
}
function ks(e, t, n) {
	if (((e = t.effects), (t.effects = null), e !== null))
		for (t = 0; t < e.length; t++) {
			var r = e[t],
				i = r.callback
			if (i !== null) {
				if (((r.callback = null), (r = n), typeof i != "function"))
					throw Error(te(191, i))
				i.call(r)
			}
		}
}
var fi = {},
	Rt = vn(fi),
	ei = vn(fi),
	ti = vn(fi)
function bn(e) {
	if (e === fi) throw Error(te(174))
	return e
}
function uu(e, t) {
	switch ((ge(ti, t), ge(ei, e), ge(Rt, fi), (e = t.nodeType), e)) {
		case 9:
		case 11:
			t = (t = t.documentElement) ? t.namespaceURI : Hl(null, "")
			break
		default:
			;(e = e === 8 ? t.parentNode : t),
				(t = e.namespaceURI || null),
				(e = e.tagName),
				(t = Hl(t, e))
	}
	Ee(Rt), ge(Rt, t)
}
function ir() {
	Ee(Rt), Ee(ei), Ee(ti)
}
function ed(e) {
	bn(ti.current)
	var t = bn(Rt.current),
		n = Hl(t, e.type)
	t !== n && (ge(ei, e), ge(Rt, n))
}
function su(e) {
	ei.current === e && (Ee(Rt), Ee(ei))
}
var ke = vn(0)
function so(e) {
	for (var t = e; t !== null; ) {
		if (t.tag === 13) {
			var n = t.memoizedState
			if (
				n !== null &&
				((n = n.dehydrated),
				n === null || n.data === "$?" || n.data === "$!")
			)
				return t
		} else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
			if (t.flags & 128) return t
		} else if (t.child !== null) {
			;(t.child.return = t), (t = t.child)
			continue
		}
		if (t === e) break
		for (; t.sibling === null; ) {
			if (t.return === null || t.return === e) return null
			t = t.return
		}
		;(t.sibling.return = t.return), (t = t.sibling)
	}
	return null
}
var _l = []
function fu() {
	for (var e = 0; e < _l.length; e++)
		_l[e]._workInProgressVersionPrimary = null
	_l.length = 0
}
var qi = Wt.ReactCurrentDispatcher,
	wl = Wt.ReactCurrentBatchConfig,
	An = 0,
	Oe = null,
	De = null,
	Me = null,
	fo = !1,
	Mr = !1,
	ni = 0,
	Tv = 0
function Ue() {
	throw Error(te(321))
}
function cu(e, t) {
	if (t === null) return !1
	for (var n = 0; n < t.length && n < e.length; n++)
		if (!Nt(e[n], t[n])) return !1
	return !0
}
function du(e, t, n, r, i, o) {
	if (
		((An = o),
		(Oe = t),
		(t.memoizedState = null),
		(t.updateQueue = null),
		(t.lanes = 0),
		(qi.current = e === null || e.memoizedState === null ? Cv : Dv),
		(e = n(r, i)),
		Mr)
	) {
		o = 0
		do {
			if (((Mr = !1), (ni = 0), 25 <= o)) throw Error(te(301))
			;(o += 1),
				(Me = De = null),
				(t.updateQueue = null),
				(qi.current = Rv),
				(e = n(r, i))
		} while (Mr)
	}
	if (
		((qi.current = co),
		(t = De !== null && De.next !== null),
		(An = 0),
		(Me = De = Oe = null),
		(fo = !1),
		t)
	)
		throw Error(te(300))
	return e
}
function hu() {
	var e = ni !== 0
	return (ni = 0), e
}
function Pt() {
	var e = {
		memoizedState: null,
		baseState: null,
		baseQueue: null,
		queue: null,
		next: null
	}
	return Me === null ? (Oe.memoizedState = Me = e) : (Me = Me.next = e), Me
}
function _t() {
	if (De === null) {
		var e = Oe.alternate
		e = e !== null ? e.memoizedState : null
	} else e = De.next
	var t = Me === null ? Oe.memoizedState : Me.next
	if (t !== null) (Me = t), (De = e)
	else {
		if (e === null) throw Error(te(310))
		;(De = e),
			(e = {
				memoizedState: De.memoizedState,
				baseState: De.baseState,
				baseQueue: De.baseQueue,
				queue: De.queue,
				next: null
			}),
			Me === null ? (Oe.memoizedState = Me = e) : (Me = Me.next = e)
	}
	return Me
}
function ri(e, t) {
	return typeof t == "function" ? t(e) : t
}
function El(e) {
	var t = _t(),
		n = t.queue
	if (n === null) throw Error(te(311))
	n.lastRenderedReducer = e
	var r = De,
		i = r.baseQueue,
		o = n.pending
	if (o !== null) {
		if (i !== null) {
			var l = i.next
			;(i.next = o.next), (o.next = l)
		}
		;(r.baseQueue = i = o), (n.pending = null)
	}
	if (i !== null) {
		;(o = i.next), (r = r.baseState)
		var h = (l = null),
			p = null,
			g = o
		do {
			var y = g.lane
			if ((An & y) === y)
				p !== null &&
					(p = p.next =
						{
							lane: 0,
							action: g.action,
							hasEagerState: g.hasEagerState,
							eagerState: g.eagerState,
							next: null
						}),
					(r = g.hasEagerState ? g.eagerState : e(r, g.action))
			else {
				var f = {
					lane: y,
					action: g.action,
					hasEagerState: g.hasEagerState,
					eagerState: g.eagerState,
					next: null
				}
				p === null ? ((h = p = f), (l = r)) : (p = p.next = f),
					(Oe.lanes |= y),
					(Tn |= y)
			}
			g = g.next
		} while (g !== null && g !== o)
		p === null ? (l = r) : (p.next = h),
			Nt(r, t.memoizedState) || (tt = !0),
			(t.memoizedState = r),
			(t.baseState = l),
			(t.baseQueue = p),
			(n.lastRenderedState = r)
	}
	if (((e = n.interleaved), e !== null)) {
		i = e
		do (o = i.lane), (Oe.lanes |= o), (Tn |= o), (i = i.next)
		while (i !== e)
	} else i === null && (n.lanes = 0)
	return [t.memoizedState, n.dispatch]
}
function bl(e) {
	var t = _t(),
		n = t.queue
	if (n === null) throw Error(te(311))
	n.lastRenderedReducer = e
	var r = n.dispatch,
		i = n.pending,
		o = t.memoizedState
	if (i !== null) {
		n.pending = null
		var l = (i = i.next)
		do (o = e(o, l.action)), (l = l.next)
		while (l !== i)
		Nt(o, t.memoizedState) || (tt = !0),
			(t.memoizedState = o),
			t.baseQueue === null && (t.baseState = o),
			(n.lastRenderedState = o)
	}
	return [o, r]
}
function td() {}
function nd(e, t) {
	var n = Oe,
		r = _t(),
		i = t(),
		o = !Nt(r.memoizedState, i)
	if (
		(o && ((r.memoizedState = i), (tt = !0)),
		(r = r.queue),
		pu(od.bind(null, n, r, e), [e]),
		r.getSnapshot !== t || o || (Me !== null && Me.memoizedState.tag & 1))
	) {
		if (
			((n.flags |= 2048),
			ii(9, id.bind(null, n, r, i, t), void 0, null),
			Fe === null)
		)
			throw Error(te(349))
		An & 30 || rd(n, t, i)
	}
	return i
}
function rd(e, t, n) {
	;(e.flags |= 16384),
		(e = { getSnapshot: t, value: n }),
		(t = Oe.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
				(Oe.updateQueue = t),
				(t.stores = [e]))
			: ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e))
}
function id(e, t, n, r) {
	;(t.value = n), (t.getSnapshot = r), ld(t) && ad(e)
}
function od(e, t, n) {
	return n(function () {
		ld(t) && ad(e)
	})
}
function ld(e) {
	var t = e.getSnapshot
	e = e.value
	try {
		var n = t()
		return !Nt(e, n)
	} catch {
		return !0
	}
}
function ad(e) {
	var t = Vt(e, 1)
	t !== null && Ot(t, e, 1, -1)
}
function Os(e) {
	var t = Pt()
	return (
		typeof e == "function" && (e = e()),
		(t.memoizedState = t.baseState = e),
		(e = {
			pending: null,
			interleaved: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: ri,
			lastRenderedState: e
		}),
		(t.queue = e),
		(e = e.dispatch = Lv.bind(null, Oe, e)),
		[t.memoizedState, e]
	)
}
function ii(e, t, n, r) {
	return (
		(e = { tag: e, create: t, destroy: n, deps: r, next: null }),
		(t = Oe.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
				(Oe.updateQueue = t),
				(t.lastEffect = e.next = e))
			: ((n = t.lastEffect),
				n === null
					? (t.lastEffect = e.next = e)
					: ((r = n.next),
						(n.next = e),
						(e.next = r),
						(t.lastEffect = e))),
		e
	)
}
function ud() {
	return _t().memoizedState
}
function $i(e, t, n, r) {
	var i = Pt()
	;(Oe.flags |= e),
		(i.memoizedState = ii(1 | t, n, void 0, r === void 0 ? null : r))
}
function Io(e, t, n, r) {
	var i = _t()
	r = r === void 0 ? null : r
	var o = void 0
	if (De !== null) {
		var l = De.memoizedState
		if (((o = l.destroy), r !== null && cu(r, l.deps))) {
			i.memoizedState = ii(t, n, o, r)
			return
		}
	}
	;(Oe.flags |= e), (i.memoizedState = ii(1 | t, n, o, r))
}
function Ns(e, t) {
	return $i(8390656, 8, e, t)
}
function pu(e, t) {
	return Io(2048, 8, e, t)
}
function sd(e, t) {
	return Io(4, 2, e, t)
}
function fd(e, t) {
	return Io(4, 4, e, t)
}
function cd(e, t) {
	if (typeof t == "function")
		return (
			(e = e()),
			t(e),
			function () {
				t(null)
			}
		)
	if (t != null)
		return (
			(e = e()),
			(t.current = e),
			function () {
				t.current = null
			}
		)
}
function dd(e, t, n) {
	return (
		(n = n != null ? n.concat([e]) : null), Io(4, 4, cd.bind(null, t, e), n)
	)
}
function vu() {}
function hd(e, t) {
	var n = _t()
	t = t === void 0 ? null : t
	var r = n.memoizedState
	return r !== null && t !== null && cu(t, r[1])
		? r[0]
		: ((n.memoizedState = [e, t]), e)
}
function pd(e, t) {
	var n = _t()
	t = t === void 0 ? null : t
	var r = n.memoizedState
	return r !== null && t !== null && cu(t, r[1])
		? r[0]
		: ((e = e()), (n.memoizedState = [e, t]), e)
}
function vd(e, t, n) {
	return An & 21
		? (Nt(n, t) ||
				((n = wc()), (Oe.lanes |= n), (Tn |= n), (e.baseState = !0)),
			t)
		: (e.baseState && ((e.baseState = !1), (tt = !0)),
			(e.memoizedState = n))
}
function Pv(e, t) {
	var n = ve
	;(ve = n !== 0 && 4 > n ? n : 4), e(!0)
	var r = wl.transition
	wl.transition = {}
	try {
		e(!1), t()
	} finally {
		;(ve = n), (wl.transition = r)
	}
}
function yd() {
	return _t().memoizedState
}
function jv(e, t, n) {
	var r = sn(e)
	if (
		((n = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}),
		md(e))
	)
		gd(t, n)
	else if (((n = Xc(e, t, n, r)), n !== null)) {
		var i = Ye()
		Ot(n, e, r, i), _d(n, t, r)
	}
}
function Lv(e, t, n) {
	var r = sn(e),
		i = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}
	if (md(e)) gd(t, i)
	else {
		var o = e.alternate
		if (
			e.lanes === 0 &&
			(o === null || o.lanes === 0) &&
			((o = t.lastRenderedReducer), o !== null)
		)
			try {
				var l = t.lastRenderedState,
					h = o(l, n)
				if (((i.hasEagerState = !0), (i.eagerState = h), Nt(h, l))) {
					var p = t.interleaved
					p === null
						? ((i.next = i), lu(t))
						: ((i.next = p.next), (p.next = i)),
						(t.interleaved = i)
					return
				}
			} catch {
			} finally {
			}
		;(n = Xc(e, t, i, r)),
			n !== null && ((i = Ye()), Ot(n, e, r, i), _d(n, t, r))
	}
}
function md(e) {
	var t = e.alternate
	return e === Oe || (t !== null && t === Oe)
}
function gd(e, t) {
	Mr = fo = !0
	var n = e.pending
	n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
		(e.pending = t)
}
function _d(e, t, n) {
	if (n & 4194240) {
		var r = t.lanes
		;(r &= e.pendingLanes), (n |= r), (t.lanes = n), Wa(e, n)
	}
}
var co = {
		readContext: gt,
		useCallback: Ue,
		useContext: Ue,
		useEffect: Ue,
		useImperativeHandle: Ue,
		useInsertionEffect: Ue,
		useLayoutEffect: Ue,
		useMemo: Ue,
		useReducer: Ue,
		useRef: Ue,
		useState: Ue,
		useDebugValue: Ue,
		useDeferredValue: Ue,
		useTransition: Ue,
		useMutableSource: Ue,
		useSyncExternalStore: Ue,
		useId: Ue,
		unstable_isNewReconciler: !1
	},
	Cv = {
		readContext: gt,
		useCallback: function (e, t) {
			return (Pt().memoizedState = [e, t === void 0 ? null : t]), e
		},
		useContext: gt,
		useEffect: Ns,
		useImperativeHandle: function (e, t, n) {
			return (
				(n = n != null ? n.concat([e]) : null),
				$i(4194308, 4, cd.bind(null, t, e), n)
			)
		},
		useLayoutEffect: function (e, t) {
			return $i(4194308, 4, e, t)
		},
		useInsertionEffect: function (e, t) {
			return $i(4, 2, e, t)
		},
		useMemo: function (e, t) {
			var n = Pt()
			return (
				(t = t === void 0 ? null : t),
				(e = e()),
				(n.memoizedState = [e, t]),
				e
			)
		},
		useReducer: function (e, t, n) {
			var r = Pt()
			return (
				(t = n !== void 0 ? n(t) : t),
				(r.memoizedState = r.baseState = t),
				(e = {
					pending: null,
					interleaved: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: e,
					lastRenderedState: t
				}),
				(r.queue = e),
				(e = e.dispatch = jv.bind(null, Oe, e)),
				[r.memoizedState, e]
			)
		},
		useRef: function (e) {
			var t = Pt()
			return (e = { current: e }), (t.memoizedState = e)
		},
		useState: Os,
		useDebugValue: vu,
		useDeferredValue: function (e) {
			return (Pt().memoizedState = e)
		},
		useTransition: function () {
			var e = Os(!1),
				t = e[0]
			return (e = Pv.bind(null, e[1])), (Pt().memoizedState = e), [t, e]
		},
		useMutableSource: function () {},
		useSyncExternalStore: function (e, t, n) {
			var r = Oe,
				i = Pt()
			if (xe) {
				if (n === void 0) throw Error(te(407))
				n = n()
			} else {
				if (((n = t()), Fe === null)) throw Error(te(349))
				An & 30 || rd(r, t, n)
			}
			i.memoizedState = n
			var o = { value: n, getSnapshot: t }
			return (
				(i.queue = o),
				Ns(od.bind(null, r, o, e), [e]),
				(r.flags |= 2048),
				ii(9, id.bind(null, r, o, n, t), void 0, null),
				n
			)
		},
		useId: function () {
			var e = Pt(),
				t = Fe.identifierPrefix
			if (xe) {
				var n = qt,
					r = Bt
				;(n = (r & ~(1 << (32 - kt(r) - 1))).toString(32) + n),
					(t = ":" + t + "R" + n),
					(n = ni++),
					0 < n && (t += "H" + n.toString(32)),
					(t += ":")
			} else (n = Tv++), (t = ":" + t + "r" + n.toString(32) + ":")
			return (e.memoizedState = t)
		},
		unstable_isNewReconciler: !1
	},
	Dv = {
		readContext: gt,
		useCallback: hd,
		useContext: gt,
		useEffect: pu,
		useImperativeHandle: dd,
		useInsertionEffect: sd,
		useLayoutEffect: fd,
		useMemo: pd,
		useReducer: El,
		useRef: ud,
		useState: function () {
			return El(ri)
		},
		useDebugValue: vu,
		useDeferredValue: function (e) {
			var t = _t()
			return vd(t, De.memoizedState, e)
		},
		useTransition: function () {
			var e = El(ri)[0],
				t = _t().memoizedState
			return [e, t]
		},
		useMutableSource: td,
		useSyncExternalStore: nd,
		useId: yd,
		unstable_isNewReconciler: !1
	},
	Rv = {
		readContext: gt,
		useCallback: hd,
		useContext: gt,
		useEffect: pu,
		useImperativeHandle: dd,
		useInsertionEffect: sd,
		useLayoutEffect: fd,
		useMemo: pd,
		useReducer: bl,
		useRef: ud,
		useState: function () {
			return bl(ri)
		},
		useDebugValue: vu,
		useDeferredValue: function (e) {
			var t = _t()
			return De === null
				? (t.memoizedState = e)
				: vd(t, De.memoizedState, e)
		},
		useTransition: function () {
			var e = bl(ri)[0],
				t = _t().memoizedState
			return [e, t]
		},
		useMutableSource: td,
		useSyncExternalStore: nd,
		useId: yd,
		unstable_isNewReconciler: !1
	}
function Et(e, t) {
	if (e && e.defaultProps) {
		;(t = Ne({}, t)), (e = e.defaultProps)
		for (var n in e) t[n] === void 0 && (t[n] = e[n])
		return t
	}
	return t
}
function da(e, t, n, r) {
	;(t = e.memoizedState),
		(n = n(r, t)),
		(n = n == null ? t : Ne({}, t, n)),
		(e.memoizedState = n),
		e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Mo = {
	isMounted: function (e) {
		return (e = e._reactInternals) ? Ln(e) === e : !1
	},
	enqueueSetState: function (e, t, n) {
		e = e._reactInternals
		var r = Ye(),
			i = sn(e),
			o = $t(r, i)
		;(o.payload = t),
			n != null && (o.callback = n),
			(t = an(e, o, i)),
			t !== null && (Ot(t, e, i, r), Bi(t, e, i))
	},
	enqueueReplaceState: function (e, t, n) {
		e = e._reactInternals
		var r = Ye(),
			i = sn(e),
			o = $t(r, i)
		;(o.tag = 1),
			(o.payload = t),
			n != null && (o.callback = n),
			(t = an(e, o, i)),
			t !== null && (Ot(t, e, i, r), Bi(t, e, i))
	},
	enqueueForceUpdate: function (e, t) {
		e = e._reactInternals
		var n = Ye(),
			r = sn(e),
			i = $t(n, r)
		;(i.tag = 2),
			t != null && (i.callback = t),
			(t = an(e, i, r)),
			t !== null && (Ot(t, e, r, n), Bi(t, e, r))
	}
}
function As(e, t, n, r, i, o, l) {
	return (
		(e = e.stateNode),
		typeof e.shouldComponentUpdate == "function"
			? e.shouldComponentUpdate(r, o, l)
			: t.prototype && t.prototype.isPureReactComponent
				? !Yr(n, r) || !Yr(i, o)
				: !0
	)
}
function wd(e, t, n) {
	var r = !1,
		i = dn,
		o = t.contextType
	return (
		typeof o == "object" && o !== null
			? (o = gt(o))
			: ((i = rt(t) ? On : We.current),
				(r = t.contextTypes),
				(o = (r = r != null) ? tr(e, i) : dn)),
		(t = new t(n, o)),
		(e.memoizedState =
			t.state !== null && t.state !== void 0 ? t.state : null),
		(t.updater = Mo),
		(e.stateNode = t),
		(t._reactInternals = e),
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = i),
			(e.__reactInternalMemoizedMaskedChildContext = o)),
		t
	)
}
function Ts(e, t, n, r) {
	;(e = t.state),
		typeof t.componentWillReceiveProps == "function" &&
			t.componentWillReceiveProps(n, r),
		typeof t.UNSAFE_componentWillReceiveProps == "function" &&
			t.UNSAFE_componentWillReceiveProps(n, r),
		t.state !== e && Mo.enqueueReplaceState(t, t.state, null)
}
function ha(e, t, n, r) {
	var i = e.stateNode
	;(i.props = n), (i.state = e.memoizedState), (i.refs = {}), au(e)
	var o = t.contextType
	typeof o == "object" && o !== null
		? (i.context = gt(o))
		: ((o = rt(t) ? On : We.current), (i.context = tr(e, o))),
		(i.state = e.memoizedState),
		(o = t.getDerivedStateFromProps),
		typeof o == "function" && (da(e, t, o, n), (i.state = e.memoizedState)),
		typeof t.getDerivedStateFromProps == "function" ||
			typeof i.getSnapshotBeforeUpdate == "function" ||
			(typeof i.UNSAFE_componentWillMount != "function" &&
				typeof i.componentWillMount != "function") ||
			((t = i.state),
			typeof i.componentWillMount == "function" && i.componentWillMount(),
			typeof i.UNSAFE_componentWillMount == "function" &&
				i.UNSAFE_componentWillMount(),
			t !== i.state && Mo.enqueueReplaceState(i, i.state, null),
			uo(e, n, i, r),
			(i.state = e.memoizedState)),
		typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}
function or(e, t) {
	try {
		var n = "",
			r = t
		do (n += sp(r)), (r = r.return)
		while (r)
		var i = n
	} catch (o) {
		i =
			`
Error generating stack: ` +
			o.message +
			`
` +
			o.stack
	}
	return { value: e, source: t, stack: i, digest: null }
}
function xl(e, t, n) {
	return { value: e, source: null, stack: n ?? null, digest: t ?? null }
}
function pa(e, t) {
	try {
		console.error(t.value)
	} catch (n) {
		setTimeout(function () {
			throw n
		})
	}
}
var Iv = typeof WeakMap == "function" ? WeakMap : Map
function Ed(e, t, n) {
	;(n = $t(-1, n)), (n.tag = 3), (n.payload = { element: null })
	var r = t.value
	return (
		(n.callback = function () {
			po || ((po = !0), (Sa = r)), pa(e, t)
		}),
		n
	)
}
function bd(e, t, n) {
	;(n = $t(-1, n)), (n.tag = 3)
	var r = e.type.getDerivedStateFromError
	if (typeof r == "function") {
		var i = t.value
		;(n.payload = function () {
			return r(i)
		}),
			(n.callback = function () {
				pa(e, t)
			})
	}
	var o = e.stateNode
	return (
		o !== null &&
			typeof o.componentDidCatch == "function" &&
			(n.callback = function () {
				pa(e, t),
					typeof r != "function" &&
						(un === null ? (un = new Set([this])) : un.add(this))
				var l = t.stack
				this.componentDidCatch(t.value, {
					componentStack: l !== null ? l : ""
				})
			}),
		n
	)
}
function Ps(e, t, n) {
	var r = e.pingCache
	if (r === null) {
		r = e.pingCache = new Iv()
		var i = new Set()
		r.set(t, i)
	} else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i))
	i.has(n) || (i.add(n), (e = Yv.bind(null, e, t, n)), t.then(e, e))
}
function js(e) {
	do {
		var t
		if (
			((t = e.tag === 13) &&
				((t = e.memoizedState),
				(t = t !== null ? t.dehydrated !== null : !0)),
			t)
		)
			return e
		e = e.return
	} while (e !== null)
	return null
}
function Ls(e, t, n, r, i) {
	return e.mode & 1
		? ((e.flags |= 65536), (e.lanes = i), e)
		: (e === t
				? (e.flags |= 65536)
				: ((e.flags |= 128),
					(n.flags |= 131072),
					(n.flags &= -52805),
					n.tag === 1 &&
						(n.alternate === null
							? (n.tag = 17)
							: ((t = $t(-1, 1)), (t.tag = 2), an(n, t, 1))),
					(n.lanes |= 1)),
			e)
}
var Mv = Wt.ReactCurrentOwner,
	tt = !1
function Ge(e, t, n, r) {
	t.child = e === null ? Zc(t, null, n, r) : rr(t, e.child, n, r)
}
function Cs(e, t, n, r, i) {
	n = n.render
	var o = t.ref
	return (
		Xn(t, i),
		(r = du(e, t, n, r, o, i)),
		(n = hu()),
		e !== null && !tt
			? ((t.updateQueue = e.updateQueue),
				(t.flags &= -2053),
				(e.lanes &= ~i),
				Ht(e, t, i))
			: (xe && n && eu(t), (t.flags |= 1), Ge(e, t, r, i), t.child)
	)
}
function Ds(e, t, n, r, i) {
	if (e === null) {
		var o = n.type
		return typeof o == "function" &&
			!xu(o) &&
			o.defaultProps === void 0 &&
			n.compare === null &&
			n.defaultProps === void 0
			? ((t.tag = 15), (t.type = o), xd(e, t, o, r, i))
			: ((e = Hi(n.type, null, r, t, t.mode, i)),
				(e.ref = t.ref),
				(e.return = t),
				(t.child = e))
	}
	if (((o = e.child), !(e.lanes & i))) {
		var l = o.memoizedProps
		if (
			((n = n.compare),
			(n = n !== null ? n : Yr),
			n(l, r) && e.ref === t.ref)
		)
			return Ht(e, t, i)
	}
	return (
		(t.flags |= 1),
		(e = fn(o, r)),
		(e.ref = t.ref),
		(e.return = t),
		(t.child = e)
	)
}
function xd(e, t, n, r, i) {
	if (e !== null) {
		var o = e.memoizedProps
		if (Yr(o, r) && e.ref === t.ref)
			if (((tt = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
				e.flags & 131072 && (tt = !0)
			else return (t.lanes = e.lanes), Ht(e, t, i)
	}
	return va(e, t, n, r, i)
}
function Sd(e, t, n) {
	var r = t.pendingProps,
		i = r.children,
		o = e !== null ? e.memoizedState : null
	if (r.mode === "hidden")
		if (!(t.mode & 1))
			(t.memoizedState = {
				baseLanes: 0,
				cachePool: null,
				transitions: null
			}),
				ge(Wn, lt),
				(lt |= n)
		else {
			if (!(n & 1073741824))
				return (
					(e = o !== null ? o.baseLanes | n : n),
					(t.lanes = t.childLanes = 1073741824),
					(t.memoizedState = {
						baseLanes: e,
						cachePool: null,
						transitions: null
					}),
					(t.updateQueue = null),
					ge(Wn, lt),
					(lt |= e),
					null
				)
			;(t.memoizedState = {
				baseLanes: 0,
				cachePool: null,
				transitions: null
			}),
				(r = o !== null ? o.baseLanes : n),
				ge(Wn, lt),
				(lt |= r)
		}
	else
		o !== null
			? ((r = o.baseLanes | n), (t.memoizedState = null))
			: (r = n),
			ge(Wn, lt),
			(lt |= r)
	return Ge(e, t, i, n), t.child
}
function kd(e, t) {
	var n = t.ref
	;((e === null && n !== null) || (e !== null && e.ref !== n)) &&
		((t.flags |= 512), (t.flags |= 2097152))
}
function va(e, t, n, r, i) {
	var o = rt(n) ? On : We.current
	return (
		(o = tr(t, o)),
		Xn(t, i),
		(n = du(e, t, n, r, o, i)),
		(r = hu()),
		e !== null && !tt
			? ((t.updateQueue = e.updateQueue),
				(t.flags &= -2053),
				(e.lanes &= ~i),
				Ht(e, t, i))
			: (xe && r && eu(t), (t.flags |= 1), Ge(e, t, n, i), t.child)
	)
}
function Rs(e, t, n, r, i) {
	if (rt(n)) {
		var o = !0
		ro(t)
	} else o = !1
	if ((Xn(t, i), t.stateNode === null))
		zi(e, t), wd(t, n, r), ha(t, n, r, i), (r = !0)
	else if (e === null) {
		var l = t.stateNode,
			h = t.memoizedProps
		l.props = h
		var p = l.context,
			g = n.contextType
		typeof g == "object" && g !== null
			? (g = gt(g))
			: ((g = rt(n) ? On : We.current), (g = tr(t, g)))
		var y = n.getDerivedStateFromProps,
			f =
				typeof y == "function" ||
				typeof l.getSnapshotBeforeUpdate == "function"
		f ||
			(typeof l.UNSAFE_componentWillReceiveProps != "function" &&
				typeof l.componentWillReceiveProps != "function") ||
			((h !== r || p !== g) && Ts(t, l, r, g)),
			(Yt = !1)
		var u = t.memoizedState
		;(l.state = u),
			uo(t, r, l, i),
			(p = t.memoizedState),
			h !== r || u !== p || nt.current || Yt
				? (typeof y == "function" &&
						(da(t, n, y, r), (p = t.memoizedState)),
					(h = Yt || As(t, n, h, r, u, p, g))
						? (f ||
								(typeof l.UNSAFE_componentWillMount !=
									"function" &&
									typeof l.componentWillMount !=
										"function") ||
								(typeof l.componentWillMount == "function" &&
									l.componentWillMount(),
								typeof l.UNSAFE_componentWillMount ==
									"function" &&
									l.UNSAFE_componentWillMount()),
							typeof l.componentDidMount == "function" &&
								(t.flags |= 4194308))
						: (typeof l.componentDidMount == "function" &&
								(t.flags |= 4194308),
							(t.memoizedProps = r),
							(t.memoizedState = p)),
					(l.props = r),
					(l.state = p),
					(l.context = g),
					(r = h))
				: (typeof l.componentDidMount == "function" &&
						(t.flags |= 4194308),
					(r = !1))
	} else {
		;(l = t.stateNode),
			Jc(e, t),
			(h = t.memoizedProps),
			(g = t.type === t.elementType ? h : Et(t.type, h)),
			(l.props = g),
			(f = t.pendingProps),
			(u = l.context),
			(p = n.contextType),
			typeof p == "object" && p !== null
				? (p = gt(p))
				: ((p = rt(n) ? On : We.current), (p = tr(t, p)))
		var c = n.getDerivedStateFromProps
		;(y =
			typeof c == "function" ||
			typeof l.getSnapshotBeforeUpdate == "function") ||
			(typeof l.UNSAFE_componentWillReceiveProps != "function" &&
				typeof l.componentWillReceiveProps != "function") ||
			((h !== f || u !== p) && Ts(t, l, r, p)),
			(Yt = !1),
			(u = t.memoizedState),
			(l.state = u),
			uo(t, r, l, i)
		var _ = t.memoizedState
		h !== f || u !== _ || nt.current || Yt
			? (typeof c == "function" &&
					(da(t, n, c, r), (_ = t.memoizedState)),
				(g = Yt || As(t, n, g, r, u, _, p) || !1)
					? (y ||
							(typeof l.UNSAFE_componentWillUpdate !=
								"function" &&
								typeof l.componentWillUpdate != "function") ||
							(typeof l.componentWillUpdate == "function" &&
								l.componentWillUpdate(r, _, p),
							typeof l.UNSAFE_componentWillUpdate == "function" &&
								l.UNSAFE_componentWillUpdate(r, _, p)),
						typeof l.componentDidUpdate == "function" &&
							(t.flags |= 4),
						typeof l.getSnapshotBeforeUpdate == "function" &&
							(t.flags |= 1024))
					: (typeof l.componentDidUpdate != "function" ||
							(h === e.memoizedProps && u === e.memoizedState) ||
							(t.flags |= 4),
						typeof l.getSnapshotBeforeUpdate != "function" ||
							(h === e.memoizedProps && u === e.memoizedState) ||
							(t.flags |= 1024),
						(t.memoizedProps = r),
						(t.memoizedState = _)),
				(l.props = r),
				(l.state = _),
				(l.context = p),
				(r = g))
			: (typeof l.componentDidUpdate != "function" ||
					(h === e.memoizedProps && u === e.memoizedState) ||
					(t.flags |= 4),
				typeof l.getSnapshotBeforeUpdate != "function" ||
					(h === e.memoizedProps && u === e.memoizedState) ||
					(t.flags |= 1024),
				(r = !1))
	}
	return ya(e, t, n, r, o, i)
}
function ya(e, t, n, r, i, o) {
	kd(e, t)
	var l = (t.flags & 128) !== 0
	if (!r && !l) return i && ws(t, n, !1), Ht(e, t, o)
	;(r = t.stateNode), (Mv.current = t)
	var h =
		l && typeof n.getDerivedStateFromError != "function" ? null : r.render()
	return (
		(t.flags |= 1),
		e !== null && l
			? ((t.child = rr(t, e.child, null, o)),
				(t.child = rr(t, null, h, o)))
			: Ge(e, t, h, o),
		(t.memoizedState = r.state),
		i && ws(t, n, !0),
		t.child
	)
}
function Od(e) {
	var t = e.stateNode
	t.pendingContext
		? _s(e, t.pendingContext, t.pendingContext !== t.context)
		: t.context && _s(e, t.context, !1),
		uu(e, t.containerInfo)
}
function Is(e, t, n, r, i) {
	return nr(), nu(i), (t.flags |= 256), Ge(e, t, n, r), t.child
}
var ma = { dehydrated: null, treeContext: null, retryLane: 0 }
function ga(e) {
	return { baseLanes: e, cachePool: null, transitions: null }
}
function Nd(e, t, n) {
	var r = t.pendingProps,
		i = ke.current,
		o = !1,
		l = (t.flags & 128) !== 0,
		h
	if (
		((h = l) ||
			(h = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
		h
			? ((o = !0), (t.flags &= -129))
			: (e === null || e.memoizedState !== null) && (i |= 1),
		ge(ke, i & 1),
		e === null)
	)
		return (
			fa(t),
			(e = t.memoizedState),
			e !== null && ((e = e.dehydrated), e !== null)
				? (t.mode & 1
						? e.data === "$!"
							? (t.lanes = 8)
							: (t.lanes = 1073741824)
						: (t.lanes = 1),
					null)
				: ((l = r.children),
					(e = r.fallback),
					o
						? ((r = t.mode),
							(o = t.child),
							(l = { mode: "hidden", children: l }),
							!(r & 1) && o !== null
								? ((o.childLanes = 0), (o.pendingProps = l))
								: (o = qo(l, r, 0, null)),
							(e = kn(e, r, n, null)),
							(o.return = t),
							(e.return = t),
							(o.sibling = e),
							(t.child = o),
							(t.child.memoizedState = ga(n)),
							(t.memoizedState = ma),
							e)
						: yu(t, l))
		)
	if (((i = e.memoizedState), i !== null && ((h = i.dehydrated), h !== null)))
		return Fv(e, t, l, r, h, i, n)
	if (o) {
		;(o = r.fallback), (l = t.mode), (i = e.child), (h = i.sibling)
		var p = { mode: "hidden", children: r.children }
		return (
			!(l & 1) && t.child !== i
				? ((r = t.child),
					(r.childLanes = 0),
					(r.pendingProps = p),
					(t.deletions = null))
				: ((r = fn(i, p)),
					(r.subtreeFlags = i.subtreeFlags & 14680064)),
			h !== null
				? (o = fn(h, o))
				: ((o = kn(o, l, n, null)), (o.flags |= 2)),
			(o.return = t),
			(r.return = t),
			(r.sibling = o),
			(t.child = r),
			(r = o),
			(o = t.child),
			(l = e.child.memoizedState),
			(l =
				l === null
					? ga(n)
					: {
							baseLanes: l.baseLanes | n,
							cachePool: null,
							transitions: l.transitions
						}),
			(o.memoizedState = l),
			(o.childLanes = e.childLanes & ~n),
			(t.memoizedState = ma),
			r
		)
	}
	return (
		(o = e.child),
		(e = o.sibling),
		(r = fn(o, { mode: "visible", children: r.children })),
		!(t.mode & 1) && (r.lanes = n),
		(r.return = t),
		(r.sibling = null),
		e !== null &&
			((n = t.deletions),
			n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
		(t.child = r),
		(t.memoizedState = null),
		r
	)
}
function yu(e, t) {
	return (
		(t = qo({ mode: "visible", children: t }, e.mode, 0, null)),
		(t.return = e),
		(e.child = t)
	)
}
function Ni(e, t, n, r) {
	return (
		r !== null && nu(r),
		rr(t, e.child, null, n),
		(e = yu(t, t.pendingProps.children)),
		(e.flags |= 2),
		(t.memoizedState = null),
		e
	)
}
function Fv(e, t, n, r, i, o, l) {
	if (n)
		return t.flags & 256
			? ((t.flags &= -257), (r = xl(Error(te(422)))), Ni(e, t, l, r))
			: t.memoizedState !== null
				? ((t.child = e.child), (t.flags |= 128), null)
				: ((o = r.fallback),
					(i = t.mode),
					(r = qo(
						{ mode: "visible", children: r.children },
						i,
						0,
						null
					)),
					(o = kn(o, i, l, null)),
					(o.flags |= 2),
					(r.return = t),
					(o.return = t),
					(r.sibling = o),
					(t.child = r),
					t.mode & 1 && rr(t, e.child, null, l),
					(t.child.memoizedState = ga(l)),
					(t.memoizedState = ma),
					o)
	if (!(t.mode & 1)) return Ni(e, t, l, null)
	if (i.data === "$!") {
		if (((r = i.nextSibling && i.nextSibling.dataset), r)) var h = r.dgst
		return (
			(r = h),
			(o = Error(te(419))),
			(r = xl(o, r, void 0)),
			Ni(e, t, l, r)
		)
	}
	if (((h = (l & e.childLanes) !== 0), tt || h)) {
		if (((r = Fe), r !== null)) {
			switch (l & -l) {
				case 4:
					i = 2
					break
				case 16:
					i = 8
					break
				case 64:
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
				case 4194304:
				case 8388608:
				case 16777216:
				case 33554432:
				case 67108864:
					i = 32
					break
				case 536870912:
					i = 268435456
					break
				default:
					i = 0
			}
			;(i = i & (r.suspendedLanes | l) ? 0 : i),
				i !== 0 &&
					i !== o.retryLane &&
					((o.retryLane = i), Vt(e, i), Ot(r, e, i, -1))
		}
		return bu(), (r = xl(Error(te(421)))), Ni(e, t, l, r)
	}
	return i.data === "$?"
		? ((t.flags |= 128),
			(t.child = e.child),
			(t = Zv.bind(null, e)),
			(i._reactRetry = t),
			null)
		: ((e = o.treeContext),
			(ut = ln(i.nextSibling)),
			(st = t),
			(xe = !0),
			(xt = null),
			e !== null &&
				((pt[vt++] = Bt),
				(pt[vt++] = qt),
				(pt[vt++] = Nn),
				(Bt = e.id),
				(qt = e.overflow),
				(Nn = t)),
			(t = yu(t, r.children)),
			(t.flags |= 4096),
			t)
}
function Ms(e, t, n) {
	e.lanes |= t
	var r = e.alternate
	r !== null && (r.lanes |= t), ca(e.return, t, n)
}
function Sl(e, t, n, r, i) {
	var o = e.memoizedState
	o === null
		? (e.memoizedState = {
				isBackwards: t,
				rendering: null,
				renderingStartTime: 0,
				last: r,
				tail: n,
				tailMode: i
			})
		: ((o.isBackwards = t),
			(o.rendering = null),
			(o.renderingStartTime = 0),
			(o.last = r),
			(o.tail = n),
			(o.tailMode = i))
}
function Ad(e, t, n) {
	var r = t.pendingProps,
		i = r.revealOrder,
		o = r.tail
	if ((Ge(e, t, r.children, n), (r = ke.current), r & 2))
		(r = (r & 1) | 2), (t.flags |= 128)
	else {
		if (e !== null && e.flags & 128)
			e: for (e = t.child; e !== null; ) {
				if (e.tag === 13) e.memoizedState !== null && Ms(e, n, t)
				else if (e.tag === 19) Ms(e, n, t)
				else if (e.child !== null) {
					;(e.child.return = e), (e = e.child)
					continue
				}
				if (e === t) break e
				for (; e.sibling === null; ) {
					if (e.return === null || e.return === t) break e
					e = e.return
				}
				;(e.sibling.return = e.return), (e = e.sibling)
			}
		r &= 1
	}
	if ((ge(ke, r), !(t.mode & 1))) t.memoizedState = null
	else
		switch (i) {
			case "forwards":
				for (n = t.child, i = null; n !== null; )
					(e = n.alternate),
						e !== null && so(e) === null && (i = n),
						(n = n.sibling)
				;(n = i),
					n === null
						? ((i = t.child), (t.child = null))
						: ((i = n.sibling), (n.sibling = null)),
					Sl(t, !1, i, n, o)
				break
			case "backwards":
				for (n = null, i = t.child, t.child = null; i !== null; ) {
					if (((e = i.alternate), e !== null && so(e) === null)) {
						t.child = i
						break
					}
					;(e = i.sibling), (i.sibling = n), (n = i), (i = e)
				}
				Sl(t, !0, n, null, o)
				break
			case "together":
				Sl(t, !1, null, null, void 0)
				break
			default:
				t.memoizedState = null
		}
	return t.child
}
function zi(e, t) {
	!(t.mode & 1) &&
		e !== null &&
		((e.alternate = null), (t.alternate = null), (t.flags |= 2))
}
function Ht(e, t, n) {
	if (
		(e !== null && (t.dependencies = e.dependencies),
		(Tn |= t.lanes),
		!(n & t.childLanes))
	)
		return null
	if (e !== null && t.child !== e.child) throw Error(te(153))
	if (t.child !== null) {
		for (
			e = t.child, n = fn(e, e.pendingProps), t.child = n, n.return = t;
			e.sibling !== null;

		)
			(e = e.sibling),
				(n = n.sibling = fn(e, e.pendingProps)),
				(n.return = t)
		n.sibling = null
	}
	return t.child
}
function Bv(e, t, n) {
	switch (t.tag) {
		case 3:
			Od(t), nr()
			break
		case 5:
			ed(t)
			break
		case 1:
			rt(t.type) && ro(t)
			break
		case 4:
			uu(t, t.stateNode.containerInfo)
			break
		case 10:
			var r = t.type._context,
				i = t.memoizedProps.value
			ge(lo, r._currentValue), (r._currentValue = i)
			break
		case 13:
			if (((r = t.memoizedState), r !== null))
				return r.dehydrated !== null
					? (ge(ke, ke.current & 1), (t.flags |= 128), null)
					: n & t.child.childLanes
						? Nd(e, t, n)
						: (ge(ke, ke.current & 1),
							(e = Ht(e, t, n)),
							e !== null ? e.sibling : null)
			ge(ke, ke.current & 1)
			break
		case 19:
			if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
				if (r) return Ad(e, t, n)
				t.flags |= 128
			}
			if (
				((i = t.memoizedState),
				i !== null &&
					((i.rendering = null),
					(i.tail = null),
					(i.lastEffect = null)),
				ge(ke, ke.current),
				r)
			)
				break
			return null
		case 22:
		case 23:
			return (t.lanes = 0), Sd(e, t, n)
	}
	return Ht(e, t, n)
}
var Td, _a, Pd, jd
Td = function (e, t) {
	for (var n = t.child; n !== null; ) {
		if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode)
		else if (n.tag !== 4 && n.child !== null) {
			;(n.child.return = n), (n = n.child)
			continue
		}
		if (n === t) break
		for (; n.sibling === null; ) {
			if (n.return === null || n.return === t) return
			n = n.return
		}
		;(n.sibling.return = n.return), (n = n.sibling)
	}
}
_a = function () {}
Pd = function (e, t, n, r) {
	var i = e.memoizedProps
	if (i !== r) {
		;(e = t.stateNode), bn(Rt.current)
		var o = null
		switch (n) {
			case "input":
				;(i = $l(e, i)), (r = $l(e, r)), (o = [])
				break
			case "select":
				;(i = Ne({}, i, { value: void 0 })),
					(r = Ne({}, r, { value: void 0 })),
					(o = [])
				break
			case "textarea":
				;(i = Vl(e, i)), (r = Vl(e, r)), (o = [])
				break
			default:
				typeof i.onClick != "function" &&
					typeof r.onClick == "function" &&
					(e.onclick = to)
		}
		Wl(n, r)
		var l
		n = null
		for (g in i)
			if (!r.hasOwnProperty(g) && i.hasOwnProperty(g) && i[g] != null)
				if (g === "style") {
					var h = i[g]
					for (l in h)
						h.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""))
				} else
					g !== "dangerouslySetInnerHTML" &&
						g !== "children" &&
						g !== "suppressContentEditableWarning" &&
						g !== "suppressHydrationWarning" &&
						g !== "autoFocus" &&
						(Ur.hasOwnProperty(g)
							? o || (o = [])
							: (o = o || []).push(g, null))
		for (g in r) {
			var p = r[g]
			if (
				((h = i != null ? i[g] : void 0),
				r.hasOwnProperty(g) && p !== h && (p != null || h != null))
			)
				if (g === "style")
					if (h) {
						for (l in h)
							!h.hasOwnProperty(l) ||
								(p && p.hasOwnProperty(l)) ||
								(n || (n = {}), (n[l] = ""))
						for (l in p)
							p.hasOwnProperty(l) &&
								h[l] !== p[l] &&
								(n || (n = {}), (n[l] = p[l]))
					} else n || (o || (o = []), o.push(g, n)), (n = p)
				else
					g === "dangerouslySetInnerHTML"
						? ((p = p ? p.__html : void 0),
							(h = h ? h.__html : void 0),
							p != null && h !== p && (o = o || []).push(g, p))
						: g === "children"
							? (typeof p != "string" && typeof p != "number") ||
								(o = o || []).push(g, "" + p)
							: g !== "suppressContentEditableWarning" &&
								g !== "suppressHydrationWarning" &&
								(Ur.hasOwnProperty(g)
									? (p != null &&
											g === "onScroll" &&
											_e("scroll", e),
										o || h === p || (o = []))
									: (o = o || []).push(g, p))
		}
		n && (o = o || []).push("style", n)
		var g = o
		;(t.updateQueue = g) && (t.flags |= 4)
	}
}
jd = function (e, t, n, r) {
	n !== r && (t.flags |= 4)
}
function xr(e, t) {
	if (!xe)
		switch (e.tailMode) {
			case "hidden":
				t = e.tail
				for (var n = null; t !== null; )
					t.alternate !== null && (n = t), (t = t.sibling)
				n === null ? (e.tail = null) : (n.sibling = null)
				break
			case "collapsed":
				n = e.tail
				for (var r = null; n !== null; )
					n.alternate !== null && (r = n), (n = n.sibling)
				r === null
					? t || e.tail === null
						? (e.tail = null)
						: (e.tail.sibling = null)
					: (r.sibling = null)
		}
}
function Ve(e) {
	var t = e.alternate !== null && e.alternate.child === e.child,
		n = 0,
		r = 0
	if (t)
		for (var i = e.child; i !== null; )
			(n |= i.lanes | i.childLanes),
				(r |= i.subtreeFlags & 14680064),
				(r |= i.flags & 14680064),
				(i.return = e),
				(i = i.sibling)
	else
		for (i = e.child; i !== null; )
			(n |= i.lanes | i.childLanes),
				(r |= i.subtreeFlags),
				(r |= i.flags),
				(i.return = e),
				(i = i.sibling)
	return (e.subtreeFlags |= r), (e.childLanes = n), t
}
function qv(e, t, n) {
	var r = t.pendingProps
	switch ((tu(t), t.tag)) {
		case 2:
		case 16:
		case 15:
		case 0:
		case 11:
		case 7:
		case 8:
		case 12:
		case 9:
		case 14:
			return Ve(t), null
		case 1:
			return rt(t.type) && no(), Ve(t), null
		case 3:
			return (
				(r = t.stateNode),
				ir(),
				Ee(nt),
				Ee(We),
				fu(),
				r.pendingContext &&
					((r.context = r.pendingContext), (r.pendingContext = null)),
				(e === null || e.child === null) &&
					(ki(t)
						? (t.flags |= 4)
						: e === null ||
							(e.memoizedState.isDehydrated &&
								!(t.flags & 256)) ||
							((t.flags |= 1024),
							xt !== null && (Na(xt), (xt = null)))),
				_a(e, t),
				Ve(t),
				null
			)
		case 5:
			su(t)
			var i = bn(ti.current)
			if (((n = t.type), e !== null && t.stateNode != null))
				Pd(e, t, n, r, i),
					e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
			else {
				if (!r) {
					if (t.stateNode === null) throw Error(te(166))
					return Ve(t), null
				}
				if (((e = bn(Rt.current)), ki(t))) {
					;(r = t.stateNode), (n = t.type)
					var o = t.memoizedProps
					switch (
						((r[jt] = t), (r[Jr] = o), (e = (t.mode & 1) !== 0), n)
					) {
						case "dialog":
							_e("cancel", r), _e("close", r)
							break
						case "iframe":
						case "object":
						case "embed":
							_e("load", r)
							break
						case "video":
						case "audio":
							for (i = 0; i < jr.length; i++) _e(jr[i], r)
							break
						case "source":
							_e("error", r)
							break
						case "img":
						case "image":
						case "link":
							_e("error", r), _e("load", r)
							break
						case "details":
							_e("toggle", r)
							break
						case "input":
							Wu(r, o), _e("invalid", r)
							break
						case "select":
							;(r._wrapperState = { wasMultiple: !!o.multiple }),
								_e("invalid", r)
							break
						case "textarea":
							Gu(r, o), _e("invalid", r)
					}
					Wl(n, o), (i = null)
					for (var l in o)
						if (o.hasOwnProperty(l)) {
							var h = o[l]
							l === "children"
								? typeof h == "string"
									? r.textContent !== h &&
										(o.suppressHydrationWarning !== !0 &&
											Si(r.textContent, h, e),
										(i = ["children", h]))
									: typeof h == "number" &&
										r.textContent !== "" + h &&
										(o.suppressHydrationWarning !== !0 &&
											Si(r.textContent, h, e),
										(i = ["children", "" + h]))
								: Ur.hasOwnProperty(l) &&
									h != null &&
									l === "onScroll" &&
									_e("scroll", r)
						}
					switch (n) {
						case "input":
							yi(r), Ku(r, o, !0)
							break
						case "textarea":
							yi(r), Qu(r)
							break
						case "select":
						case "option":
							break
						default:
							typeof o.onClick == "function" && (r.onclick = to)
					}
					;(r = i), (t.updateQueue = r), r !== null && (t.flags |= 4)
				} else {
					;(l = i.nodeType === 9 ? i : i.ownerDocument),
						e === "http://www.w3.org/1999/xhtml" && (e = oc(n)),
						e === "http://www.w3.org/1999/xhtml"
							? n === "script"
								? ((e = l.createElement("div")),
									(e.innerHTML = "<script></script>"),
									(e = e.removeChild(e.firstChild)))
								: typeof r.is == "string"
									? (e = l.createElement(n, { is: r.is }))
									: ((e = l.createElement(n)),
										n === "select" &&
											((l = e),
											r.multiple
												? (l.multiple = !0)
												: r.size && (l.size = r.size)))
							: (e = l.createElementNS(e, n)),
						(e[jt] = t),
						(e[Jr] = r),
						Td(e, t, !1, !1),
						(t.stateNode = e)
					e: {
						switch (((l = Kl(n, r)), n)) {
							case "dialog":
								_e("cancel", e), _e("close", e), (i = r)
								break
							case "iframe":
							case "object":
							case "embed":
								_e("load", e), (i = r)
								break
							case "video":
							case "audio":
								for (i = 0; i < jr.length; i++) _e(jr[i], e)
								i = r
								break
							case "source":
								_e("error", e), (i = r)
								break
							case "img":
							case "image":
							case "link":
								_e("error", e), _e("load", e), (i = r)
								break
							case "details":
								_e("toggle", e), (i = r)
								break
							case "input":
								Wu(e, r), (i = $l(e, r)), _e("invalid", e)
								break
							case "option":
								i = r
								break
							case "select":
								;(e._wrapperState = {
									wasMultiple: !!r.multiple
								}),
									(i = Ne({}, r, { value: void 0 })),
									_e("invalid", e)
								break
							case "textarea":
								Gu(e, r), (i = Vl(e, r)), _e("invalid", e)
								break
							default:
								i = r
						}
						Wl(n, i), (h = i)
						for (o in h)
							if (h.hasOwnProperty(o)) {
								var p = h[o]
								o === "style"
									? uc(e, p)
									: o === "dangerouslySetInnerHTML"
										? ((p = p ? p.__html : void 0),
											p != null && lc(e, p))
										: o === "children"
											? typeof p == "string"
												? (n !== "textarea" ||
														p !== "") &&
													Vr(e, p)
												: typeof p == "number" &&
													Vr(e, "" + p)
											: o !==
													"suppressContentEditableWarning" &&
												o !==
													"suppressHydrationWarning" &&
												o !== "autoFocus" &&
												(Ur.hasOwnProperty(o)
													? p != null &&
														o === "onScroll" &&
														_e("scroll", e)
													: p != null &&
														qa(e, o, p, l))
							}
						switch (n) {
							case "input":
								yi(e), Ku(e, r, !1)
								break
							case "textarea":
								yi(e), Qu(e)
								break
							case "option":
								r.value != null &&
									e.setAttribute("value", "" + cn(r.value))
								break
							case "select":
								;(e.multiple = !!r.multiple),
									(o = r.value),
									o != null
										? Gn(e, !!r.multiple, o, !1)
										: r.defaultValue != null &&
											Gn(
												e,
												!!r.multiple,
												r.defaultValue,
												!0
											)
								break
							default:
								typeof i.onClick == "function" &&
									(e.onclick = to)
						}
						switch (n) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								r = !!r.autoFocus
								break e
							case "img":
								r = !0
								break e
							default:
								r = !1
						}
					}
					r && (t.flags |= 4)
				}
				t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152))
			}
			return Ve(t), null
		case 6:
			if (e && t.stateNode != null) jd(e, t, e.memoizedProps, r)
			else {
				if (typeof r != "string" && t.stateNode === null)
					throw Error(te(166))
				if (((n = bn(ti.current)), bn(Rt.current), ki(t))) {
					if (
						((r = t.stateNode),
						(n = t.memoizedProps),
						(r[jt] = t),
						(o = r.nodeValue !== n) && ((e = st), e !== null))
					)
						switch (e.tag) {
							case 3:
								Si(r.nodeValue, n, (e.mode & 1) !== 0)
								break
							case 5:
								e.memoizedProps.suppressHydrationWarning !==
									!0 && Si(r.nodeValue, n, (e.mode & 1) !== 0)
						}
					o && (t.flags |= 4)
				} else
					(r = (
						n.nodeType === 9 ? n : n.ownerDocument
					).createTextNode(r)),
						(r[jt] = t),
						(t.stateNode = r)
			}
			return Ve(t), null
		case 13:
			if (
				(Ee(ke),
				(r = t.memoizedState),
				e === null ||
					(e.memoizedState !== null &&
						e.memoizedState.dehydrated !== null))
			) {
				if (xe && ut !== null && t.mode & 1 && !(t.flags & 128))
					Qc(), nr(), (t.flags |= 98560), (o = !1)
				else if (((o = ki(t)), r !== null && r.dehydrated !== null)) {
					if (e === null) {
						if (!o) throw Error(te(318))
						if (
							((o = t.memoizedState),
							(o = o !== null ? o.dehydrated : null),
							!o)
						)
							throw Error(te(317))
						o[jt] = t
					} else
						nr(),
							!(t.flags & 128) && (t.memoizedState = null),
							(t.flags |= 4)
					Ve(t), (o = !1)
				} else xt !== null && (Na(xt), (xt = null)), (o = !0)
				if (!o) return t.flags & 65536 ? t : null
			}
			return t.flags & 128
				? ((t.lanes = n), t)
				: ((r = r !== null),
					r !== (e !== null && e.memoizedState !== null) &&
						r &&
						((t.child.flags |= 8192),
						t.mode & 1 &&
							(e === null || ke.current & 1
								? Re === 0 && (Re = 3)
								: bu())),
					t.updateQueue !== null && (t.flags |= 4),
					Ve(t),
					null)
		case 4:
			return (
				ir(),
				_a(e, t),
				e === null && Zr(t.stateNode.containerInfo),
				Ve(t),
				null
			)
		case 10:
			return ou(t.type._context), Ve(t), null
		case 17:
			return rt(t.type) && no(), Ve(t), null
		case 19:
			if ((Ee(ke), (o = t.memoizedState), o === null)) return Ve(t), null
			if (((r = (t.flags & 128) !== 0), (l = o.rendering), l === null))
				if (r) xr(o, !1)
				else {
					if (Re !== 0 || (e !== null && e.flags & 128))
						for (e = t.child; e !== null; ) {
							if (((l = so(e)), l !== null)) {
								for (
									t.flags |= 128,
										xr(o, !1),
										r = l.updateQueue,
										r !== null &&
											((t.updateQueue = r),
											(t.flags |= 4)),
										t.subtreeFlags = 0,
										r = n,
										n = t.child;
									n !== null;

								)
									(o = n),
										(e = r),
										(o.flags &= 14680066),
										(l = o.alternate),
										l === null
											? ((o.childLanes = 0),
												(o.lanes = e),
												(o.child = null),
												(o.subtreeFlags = 0),
												(o.memoizedProps = null),
												(o.memoizedState = null),
												(o.updateQueue = null),
												(o.dependencies = null),
												(o.stateNode = null))
											: ((o.childLanes = l.childLanes),
												(o.lanes = l.lanes),
												(o.child = l.child),
												(o.subtreeFlags = 0),
												(o.deletions = null),
												(o.memoizedProps =
													l.memoizedProps),
												(o.memoizedState =
													l.memoizedState),
												(o.updateQueue = l.updateQueue),
												(o.type = l.type),
												(e = l.dependencies),
												(o.dependencies =
													e === null
														? null
														: {
																lanes: e.lanes,
																firstContext:
																	e.firstContext
															})),
										(n = n.sibling)
								return ge(ke, (ke.current & 1) | 2), t.child
							}
							e = e.sibling
						}
					o.tail !== null &&
						Pe() > lr &&
						((t.flags |= 128),
						(r = !0),
						xr(o, !1),
						(t.lanes = 4194304))
				}
			else {
				if (!r)
					if (((e = so(l)), e !== null)) {
						if (
							((t.flags |= 128),
							(r = !0),
							(n = e.updateQueue),
							n !== null && ((t.updateQueue = n), (t.flags |= 4)),
							xr(o, !0),
							o.tail === null &&
								o.tailMode === "hidden" &&
								!l.alternate &&
								!xe)
						)
							return Ve(t), null
					} else
						2 * Pe() - o.renderingStartTime > lr &&
							n !== 1073741824 &&
							((t.flags |= 128),
							(r = !0),
							xr(o, !1),
							(t.lanes = 4194304))
				o.isBackwards
					? ((l.sibling = t.child), (t.child = l))
					: ((n = o.last),
						n !== null ? (n.sibling = l) : (t.child = l),
						(o.last = l))
			}
			return o.tail !== null
				? ((t = o.tail),
					(o.rendering = t),
					(o.tail = t.sibling),
					(o.renderingStartTime = Pe()),
					(t.sibling = null),
					(n = ke.current),
					ge(ke, r ? (n & 1) | 2 : n & 1),
					t)
				: (Ve(t), null)
		case 22:
		case 23:
			return (
				Eu(),
				(r = t.memoizedState !== null),
				e !== null &&
					(e.memoizedState !== null) !== r &&
					(t.flags |= 8192),
				r && t.mode & 1
					? lt & 1073741824 &&
						(Ve(t), t.subtreeFlags & 6 && (t.flags |= 8192))
					: Ve(t),
				null
			)
		case 24:
			return null
		case 25:
			return null
	}
	throw Error(te(156, t.tag))
}
function $v(e, t) {
	switch ((tu(t), t.tag)) {
		case 1:
			return (
				rt(t.type) && no(),
				(e = t.flags),
				e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			)
		case 3:
			return (
				ir(),
				Ee(nt),
				Ee(We),
				fu(),
				(e = t.flags),
				e & 65536 && !(e & 128)
					? ((t.flags = (e & -65537) | 128), t)
					: null
			)
		case 5:
			return su(t), null
		case 13:
			if (
				(Ee(ke),
				(e = t.memoizedState),
				e !== null && e.dehydrated !== null)
			) {
				if (t.alternate === null) throw Error(te(340))
				nr()
			}
			return (
				(e = t.flags),
				e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			)
		case 19:
			return Ee(ke), null
		case 4:
			return ir(), null
		case 10:
			return ou(t.type._context), null
		case 22:
		case 23:
			return Eu(), null
		case 24:
			return null
		default:
			return null
	}
}
var Ai = !1,
	He = !1,
	zv = typeof WeakSet == "function" ? WeakSet : Set,
	oe = null
function Hn(e, t) {
	var n = e.ref
	if (n !== null)
		if (typeof n == "function")
			try {
				n(null)
			} catch (r) {
				Ae(e, t, r)
			}
		else n.current = null
}
function wa(e, t, n) {
	try {
		n()
	} catch (r) {
		Ae(e, t, r)
	}
}
var Fs = !1
function Uv(e, t) {
	if (((ra = Xi), (e = Ic()), Ja(e))) {
		if ("selectionStart" in e)
			var n = { start: e.selectionStart, end: e.selectionEnd }
		else
			e: {
				n = ((n = e.ownerDocument) && n.defaultView) || window
				var r = n.getSelection && n.getSelection()
				if (r && r.rangeCount !== 0) {
					n = r.anchorNode
					var i = r.anchorOffset,
						o = r.focusNode
					r = r.focusOffset
					try {
						n.nodeType, o.nodeType
					} catch {
						n = null
						break e
					}
					var l = 0,
						h = -1,
						p = -1,
						g = 0,
						y = 0,
						f = e,
						u = null
					t: for (;;) {
						for (
							var c;
							f !== n ||
								(i !== 0 && f.nodeType !== 3) ||
								(h = l + i),
								f !== o ||
									(r !== 0 && f.nodeType !== 3) ||
									(p = l + r),
								f.nodeType === 3 && (l += f.nodeValue.length),
								(c = f.firstChild) !== null;

						)
							(u = f), (f = c)
						for (;;) {
							if (f === e) break t
							if (
								(u === n && ++g === i && (h = l),
								u === o && ++y === r && (p = l),
								(c = f.nextSibling) !== null)
							)
								break
							;(f = u), (u = f.parentNode)
						}
						f = c
					}
					n = h === -1 || p === -1 ? null : { start: h, end: p }
				} else n = null
			}
		n = n || { start: 0, end: 0 }
	} else n = null
	for (
		ia = { focusedElem: e, selectionRange: n }, Xi = !1, oe = t;
		oe !== null;

	)
		if (
			((t = oe),
			(e = t.child),
			(t.subtreeFlags & 1028) !== 0 && e !== null)
		)
			(e.return = t), (oe = e)
		else
			for (; oe !== null; ) {
				t = oe
				try {
					var _ = t.alternate
					if (t.flags & 1024)
						switch (t.tag) {
							case 0:
							case 11:
							case 15:
								break
							case 1:
								if (_ !== null) {
									var m = _.memoizedProps,
										w = _.memoizedState,
										s = t.stateNode,
										a = s.getSnapshotBeforeUpdate(
											t.elementType === t.type
												? m
												: Et(t.type, m),
											w
										)
									s.__reactInternalSnapshotBeforeUpdate = a
								}
								break
							case 3:
								var v = t.stateNode.containerInfo
								v.nodeType === 1
									? (v.textContent = "")
									: v.nodeType === 9 &&
										v.documentElement &&
										v.removeChild(v.documentElement)
								break
							case 5:
							case 6:
							case 4:
							case 17:
								break
							default:
								throw Error(te(163))
						}
				} catch (d) {
					Ae(t, t.return, d)
				}
				if (((e = t.sibling), e !== null)) {
					;(e.return = t.return), (oe = e)
					break
				}
				oe = t.return
			}
	return (_ = Fs), (Fs = !1), _
}
function Fr(e, t, n) {
	var r = t.updateQueue
	if (((r = r !== null ? r.lastEffect : null), r !== null)) {
		var i = (r = r.next)
		do {
			if ((i.tag & e) === e) {
				var o = i.destroy
				;(i.destroy = void 0), o !== void 0 && wa(t, n, o)
			}
			i = i.next
		} while (i !== r)
	}
}
function Fo(e, t) {
	if (
		((t = t.updateQueue),
		(t = t !== null ? t.lastEffect : null),
		t !== null)
	) {
		var n = (t = t.next)
		do {
			if ((n.tag & e) === e) {
				var r = n.create
				n.destroy = r()
			}
			n = n.next
		} while (n !== t)
	}
}
function Ea(e) {
	var t = e.ref
	if (t !== null) {
		var n = e.stateNode
		switch (e.tag) {
			case 5:
				e = n
				break
			default:
				e = n
		}
		typeof t == "function" ? t(e) : (t.current = e)
	}
}
function Ld(e) {
	var t = e.alternate
	t !== null && ((e.alternate = null), Ld(t)),
		(e.child = null),
		(e.deletions = null),
		(e.sibling = null),
		e.tag === 5 &&
			((t = e.stateNode),
			t !== null &&
				(delete t[jt],
				delete t[Jr],
				delete t[aa],
				delete t[kv],
				delete t[Ov])),
		(e.stateNode = null),
		(e.return = null),
		(e.dependencies = null),
		(e.memoizedProps = null),
		(e.memoizedState = null),
		(e.pendingProps = null),
		(e.stateNode = null),
		(e.updateQueue = null)
}
function Cd(e) {
	return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Bs(e) {
	e: for (;;) {
		for (; e.sibling === null; ) {
			if (e.return === null || Cd(e.return)) return null
			e = e.return
		}
		for (
			e.sibling.return = e.return, e = e.sibling;
			e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

		) {
			if (e.flags & 2 || e.child === null || e.tag === 4) continue e
			;(e.child.return = e), (e = e.child)
		}
		if (!(e.flags & 2)) return e.stateNode
	}
}
function ba(e, t, n) {
	var r = e.tag
	if (r === 5 || r === 6)
		(e = e.stateNode),
			t
				? n.nodeType === 8
					? n.parentNode.insertBefore(e, t)
					: n.insertBefore(e, t)
				: (n.nodeType === 8
						? ((t = n.parentNode), t.insertBefore(e, n))
						: ((t = n), t.appendChild(e)),
					(n = n._reactRootContainer),
					n != null || t.onclick !== null || (t.onclick = to))
	else if (r !== 4 && ((e = e.child), e !== null))
		for (ba(e, t, n), e = e.sibling; e !== null; )
			ba(e, t, n), (e = e.sibling)
}
function xa(e, t, n) {
	var r = e.tag
	if (r === 5 || r === 6)
		(e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
	else if (r !== 4 && ((e = e.child), e !== null))
		for (xa(e, t, n), e = e.sibling; e !== null; )
			xa(e, t, n), (e = e.sibling)
}
var qe = null,
	bt = !1
function Gt(e, t, n) {
	for (n = n.child; n !== null; ) Dd(e, t, n), (n = n.sibling)
}
function Dd(e, t, n) {
	if (Dt && typeof Dt.onCommitFiberUnmount == "function")
		try {
			Dt.onCommitFiberUnmount(Po, n)
		} catch {}
	switch (n.tag) {
		case 5:
			He || Hn(n, t)
		case 6:
			var r = qe,
				i = bt
			;(qe = null),
				Gt(e, t, n),
				(qe = r),
				(bt = i),
				qe !== null &&
					(bt
						? ((e = qe),
							(n = n.stateNode),
							e.nodeType === 8
								? e.parentNode.removeChild(n)
								: e.removeChild(n))
						: qe.removeChild(n.stateNode))
			break
		case 18:
			qe !== null &&
				(bt
					? ((e = qe),
						(n = n.stateNode),
						e.nodeType === 8
							? ml(e.parentNode, n)
							: e.nodeType === 1 && ml(e, n),
						Gr(e))
					: ml(qe, n.stateNode))
			break
		case 4:
			;(r = qe),
				(i = bt),
				(qe = n.stateNode.containerInfo),
				(bt = !0),
				Gt(e, t, n),
				(qe = r),
				(bt = i)
			break
		case 0:
		case 11:
		case 14:
		case 15:
			if (
				!He &&
				((r = n.updateQueue),
				r !== null && ((r = r.lastEffect), r !== null))
			) {
				i = r = r.next
				do {
					var o = i,
						l = o.destroy
					;(o = o.tag),
						l !== void 0 && (o & 2 || o & 4) && wa(n, t, l),
						(i = i.next)
				} while (i !== r)
			}
			Gt(e, t, n)
			break
		case 1:
			if (
				!He &&
				(Hn(n, t),
				(r = n.stateNode),
				typeof r.componentWillUnmount == "function")
			)
				try {
					;(r.props = n.memoizedProps),
						(r.state = n.memoizedState),
						r.componentWillUnmount()
				} catch (h) {
					Ae(n, t, h)
				}
			Gt(e, t, n)
			break
		case 21:
			Gt(e, t, n)
			break
		case 22:
			n.mode & 1
				? ((He = (r = He) || n.memoizedState !== null),
					Gt(e, t, n),
					(He = r))
				: Gt(e, t, n)
			break
		default:
			Gt(e, t, n)
	}
}
function qs(e) {
	var t = e.updateQueue
	if (t !== null) {
		e.updateQueue = null
		var n = e.stateNode
		n === null && (n = e.stateNode = new zv()),
			t.forEach(function (r) {
				var i = Xv.bind(null, e, r)
				n.has(r) || (n.add(r), r.then(i, i))
			})
	}
}
function wt(e, t) {
	var n = t.deletions
	if (n !== null)
		for (var r = 0; r < n.length; r++) {
			var i = n[r]
			try {
				var o = e,
					l = t,
					h = l
				e: for (; h !== null; ) {
					switch (h.tag) {
						case 5:
							;(qe = h.stateNode), (bt = !1)
							break e
						case 3:
							;(qe = h.stateNode.containerInfo), (bt = !0)
							break e
						case 4:
							;(qe = h.stateNode.containerInfo), (bt = !0)
							break e
					}
					h = h.return
				}
				if (qe === null) throw Error(te(160))
				Dd(o, l, i), (qe = null), (bt = !1)
				var p = i.alternate
				p !== null && (p.return = null), (i.return = null)
			} catch (g) {
				Ae(i, t, g)
			}
		}
	if (t.subtreeFlags & 12854)
		for (t = t.child; t !== null; ) Rd(t, e), (t = t.sibling)
}
function Rd(e, t) {
	var n = e.alternate,
		r = e.flags
	switch (e.tag) {
		case 0:
		case 11:
		case 14:
		case 15:
			if ((wt(t, e), At(e), r & 4)) {
				try {
					Fr(3, e, e.return), Fo(3, e)
				} catch (m) {
					Ae(e, e.return, m)
				}
				try {
					Fr(5, e, e.return)
				} catch (m) {
					Ae(e, e.return, m)
				}
			}
			break
		case 1:
			wt(t, e), At(e), r & 512 && n !== null && Hn(n, n.return)
			break
		case 5:
			if (
				(wt(t, e),
				At(e),
				r & 512 && n !== null && Hn(n, n.return),
				e.flags & 32)
			) {
				var i = e.stateNode
				try {
					Vr(i, "")
				} catch (m) {
					Ae(e, e.return, m)
				}
			}
			if (r & 4 && ((i = e.stateNode), i != null)) {
				var o = e.memoizedProps,
					l = n !== null ? n.memoizedProps : o,
					h = e.type,
					p = e.updateQueue
				if (((e.updateQueue = null), p !== null))
					try {
						h === "input" &&
							o.type === "radio" &&
							o.name != null &&
							rc(i, o),
							Kl(h, l)
						var g = Kl(h, o)
						for (l = 0; l < p.length; l += 2) {
							var y = p[l],
								f = p[l + 1]
							y === "style"
								? uc(i, f)
								: y === "dangerouslySetInnerHTML"
									? lc(i, f)
									: y === "children"
										? Vr(i, f)
										: qa(i, y, f, g)
						}
						switch (h) {
							case "input":
								zl(i, o)
								break
							case "textarea":
								ic(i, o)
								break
							case "select":
								var u = i._wrapperState.wasMultiple
								i._wrapperState.wasMultiple = !!o.multiple
								var c = o.value
								c != null
									? Gn(i, !!o.multiple, c, !1)
									: u !== !!o.multiple &&
										(o.defaultValue != null
											? Gn(
													i,
													!!o.multiple,
													o.defaultValue,
													!0
												)
											: Gn(
													i,
													!!o.multiple,
													o.multiple ? [] : "",
													!1
												))
						}
						i[Jr] = o
					} catch (m) {
						Ae(e, e.return, m)
					}
			}
			break
		case 6:
			if ((wt(t, e), At(e), r & 4)) {
				if (e.stateNode === null) throw Error(te(162))
				;(i = e.stateNode), (o = e.memoizedProps)
				try {
					i.nodeValue = o
				} catch (m) {
					Ae(e, e.return, m)
				}
			}
			break
		case 3:
			if (
				(wt(t, e),
				At(e),
				r & 4 && n !== null && n.memoizedState.isDehydrated)
			)
				try {
					Gr(t.containerInfo)
				} catch (m) {
					Ae(e, e.return, m)
				}
			break
		case 4:
			wt(t, e), At(e)
			break
		case 13:
			wt(t, e),
				At(e),
				(i = e.child),
				i.flags & 8192 &&
					((o = i.memoizedState !== null),
					(i.stateNode.isHidden = o),
					!o ||
						(i.alternate !== null &&
							i.alternate.memoizedState !== null) ||
						(_u = Pe())),
				r & 4 && qs(e)
			break
		case 22:
			if (
				((y = n !== null && n.memoizedState !== null),
				e.mode & 1
					? ((He = (g = He) || y), wt(t, e), (He = g))
					: wt(t, e),
				At(e),
				r & 8192)
			) {
				if (
					((g = e.memoizedState !== null),
					(e.stateNode.isHidden = g) && !y && e.mode & 1)
				)
					for (oe = e, y = e.child; y !== null; ) {
						for (f = oe = y; oe !== null; ) {
							switch (((u = oe), (c = u.child), u.tag)) {
								case 0:
								case 11:
								case 14:
								case 15:
									Fr(4, u, u.return)
									break
								case 1:
									Hn(u, u.return)
									var _ = u.stateNode
									if (
										typeof _.componentWillUnmount ==
										"function"
									) {
										;(r = u), (n = u.return)
										try {
											;(t = r),
												(_.props = t.memoizedProps),
												(_.state = t.memoizedState),
												_.componentWillUnmount()
										} catch (m) {
											Ae(r, n, m)
										}
									}
									break
								case 5:
									Hn(u, u.return)
									break
								case 22:
									if (u.memoizedState !== null) {
										zs(f)
										continue
									}
							}
							c !== null ? ((c.return = u), (oe = c)) : zs(f)
						}
						y = y.sibling
					}
				e: for (y = null, f = e; ; ) {
					if (f.tag === 5) {
						if (y === null) {
							y = f
							try {
								;(i = f.stateNode),
									g
										? ((o = i.style),
											typeof o.setProperty == "function"
												? o.setProperty(
														"display",
														"none",
														"important"
													)
												: (o.display = "none"))
										: ((h = f.stateNode),
											(p = f.memoizedProps.style),
											(l =
												p != null &&
												p.hasOwnProperty("display")
													? p.display
													: null),
											(h.style.display = ac(
												"display",
												l
											)))
							} catch (m) {
								Ae(e, e.return, m)
							}
						}
					} else if (f.tag === 6) {
						if (y === null)
							try {
								f.stateNode.nodeValue = g ? "" : f.memoizedProps
							} catch (m) {
								Ae(e, e.return, m)
							}
					} else if (
						((f.tag !== 22 && f.tag !== 23) ||
							f.memoizedState === null ||
							f === e) &&
						f.child !== null
					) {
						;(f.child.return = f), (f = f.child)
						continue
					}
					if (f === e) break e
					for (; f.sibling === null; ) {
						if (f.return === null || f.return === e) break e
						y === f && (y = null), (f = f.return)
					}
					y === f && (y = null),
						(f.sibling.return = f.return),
						(f = f.sibling)
				}
			}
			break
		case 19:
			wt(t, e), At(e), r & 4 && qs(e)
			break
		case 21:
			break
		default:
			wt(t, e), At(e)
	}
}
function At(e) {
	var t = e.flags
	if (t & 2) {
		try {
			e: {
				for (var n = e.return; n !== null; ) {
					if (Cd(n)) {
						var r = n
						break e
					}
					n = n.return
				}
				throw Error(te(160))
			}
			switch (r.tag) {
				case 5:
					var i = r.stateNode
					r.flags & 32 && (Vr(i, ""), (r.flags &= -33))
					var o = Bs(e)
					xa(e, o, i)
					break
				case 3:
				case 4:
					var l = r.stateNode.containerInfo,
						h = Bs(e)
					ba(e, h, l)
					break
				default:
					throw Error(te(161))
			}
		} catch (p) {
			Ae(e, e.return, p)
		}
		e.flags &= -3
	}
	t & 4096 && (e.flags &= -4097)
}
function Vv(e, t, n) {
	;(oe = e), Id(e)
}
function Id(e, t, n) {
	for (var r = (e.mode & 1) !== 0; oe !== null; ) {
		var i = oe,
			o = i.child
		if (i.tag === 22 && r) {
			var l = i.memoizedState !== null || Ai
			if (!l) {
				var h = i.alternate,
					p = (h !== null && h.memoizedState !== null) || He
				h = Ai
				var g = He
				if (((Ai = l), (He = p) && !g))
					for (oe = i; oe !== null; )
						(l = oe),
							(p = l.child),
							l.tag === 22 && l.memoizedState !== null
								? Us(i)
								: p !== null
									? ((p.return = l), (oe = p))
									: Us(i)
				for (; o !== null; ) (oe = o), Id(o), (o = o.sibling)
				;(oe = i), (Ai = h), (He = g)
			}
			$s(e)
		} else
			i.subtreeFlags & 8772 && o !== null
				? ((o.return = i), (oe = o))
				: $s(e)
	}
}
function $s(e) {
	for (; oe !== null; ) {
		var t = oe
		if (t.flags & 8772) {
			var n = t.alternate
			try {
				if (t.flags & 8772)
					switch (t.tag) {
						case 0:
						case 11:
						case 15:
							He || Fo(5, t)
							break
						case 1:
							var r = t.stateNode
							if (t.flags & 4 && !He)
								if (n === null) r.componentDidMount()
								else {
									var i =
										t.elementType === t.type
											? n.memoizedProps
											: Et(t.type, n.memoizedProps)
									r.componentDidUpdate(
										i,
										n.memoizedState,
										r.__reactInternalSnapshotBeforeUpdate
									)
								}
							var o = t.updateQueue
							o !== null && ks(t, o, r)
							break
						case 3:
							var l = t.updateQueue
							if (l !== null) {
								if (((n = null), t.child !== null))
									switch (t.child.tag) {
										case 5:
											n = t.child.stateNode
											break
										case 1:
											n = t.child.stateNode
									}
								ks(t, l, n)
							}
							break
						case 5:
							var h = t.stateNode
							if (n === null && t.flags & 4) {
								n = h
								var p = t.memoizedProps
								switch (t.type) {
									case "button":
									case "input":
									case "select":
									case "textarea":
										p.autoFocus && n.focus()
										break
									case "img":
										p.src && (n.src = p.src)
								}
							}
							break
						case 6:
							break
						case 4:
							break
						case 12:
							break
						case 13:
							if (t.memoizedState === null) {
								var g = t.alternate
								if (g !== null) {
									var y = g.memoizedState
									if (y !== null) {
										var f = y.dehydrated
										f !== null && Gr(f)
									}
								}
							}
							break
						case 19:
						case 17:
						case 21:
						case 22:
						case 23:
						case 25:
							break
						default:
							throw Error(te(163))
					}
				He || (t.flags & 512 && Ea(t))
			} catch (u) {
				Ae(t, t.return, u)
			}
		}
		if (t === e) {
			oe = null
			break
		}
		if (((n = t.sibling), n !== null)) {
			;(n.return = t.return), (oe = n)
			break
		}
		oe = t.return
	}
}
function zs(e) {
	for (; oe !== null; ) {
		var t = oe
		if (t === e) {
			oe = null
			break
		}
		var n = t.sibling
		if (n !== null) {
			;(n.return = t.return), (oe = n)
			break
		}
		oe = t.return
	}
}
function Us(e) {
	for (; oe !== null; ) {
		var t = oe
		try {
			switch (t.tag) {
				case 0:
				case 11:
				case 15:
					var n = t.return
					try {
						Fo(4, t)
					} catch (p) {
						Ae(t, n, p)
					}
					break
				case 1:
					var r = t.stateNode
					if (typeof r.componentDidMount == "function") {
						var i = t.return
						try {
							r.componentDidMount()
						} catch (p) {
							Ae(t, i, p)
						}
					}
					var o = t.return
					try {
						Ea(t)
					} catch (p) {
						Ae(t, o, p)
					}
					break
				case 5:
					var l = t.return
					try {
						Ea(t)
					} catch (p) {
						Ae(t, l, p)
					}
			}
		} catch (p) {
			Ae(t, t.return, p)
		}
		if (t === e) {
			oe = null
			break
		}
		var h = t.sibling
		if (h !== null) {
			;(h.return = t.return), (oe = h)
			break
		}
		oe = t.return
	}
}
var Hv = Math.ceil,
	ho = Wt.ReactCurrentDispatcher,
	mu = Wt.ReactCurrentOwner,
	mt = Wt.ReactCurrentBatchConfig,
	de = 0,
	Fe = null,
	Le = null,
	$e = 0,
	lt = 0,
	Wn = vn(0),
	Re = 0,
	oi = null,
	Tn = 0,
	Bo = 0,
	gu = 0,
	Br = null,
	et = null,
	_u = 0,
	lr = 1 / 0,
	Mt = null,
	po = !1,
	Sa = null,
	un = null,
	Ti = !1,
	en = null,
	vo = 0,
	qr = 0,
	ka = null,
	Ui = -1,
	Vi = 0
function Ye() {
	return de & 6 ? Pe() : Ui !== -1 ? Ui : (Ui = Pe())
}
function sn(e) {
	return e.mode & 1
		? de & 2 && $e !== 0
			? $e & -$e
			: Av.transition !== null
				? (Vi === 0 && (Vi = wc()), Vi)
				: ((e = ve),
					e !== 0 ||
						((e = window.event),
						(e = e === void 0 ? 16 : Nc(e.type))),
					e)
		: 1
}
function Ot(e, t, n, r) {
	if (50 < qr) throw ((qr = 0), (ka = null), Error(te(185)))
	ai(e, n, r),
		(!(de & 2) || e !== Fe) &&
			(e === Fe && (!(de & 2) && (Bo |= n), Re === 4 && Xt(e, $e)),
			it(e, r),
			n === 1 &&
				de === 0 &&
				!(t.mode & 1) &&
				((lr = Pe() + 500), Ro && yn()))
}
function it(e, t) {
	var n = e.callbackNode
	Ap(e, t)
	var r = Zi(e, e === Fe ? $e : 0)
	if (r === 0)
		n !== null && Xu(n), (e.callbackNode = null), (e.callbackPriority = 0)
	else if (((t = r & -r), e.callbackPriority !== t)) {
		if ((n != null && Xu(n), t === 1))
			e.tag === 0 ? Nv(Vs.bind(null, e)) : Wc(Vs.bind(null, e)),
				xv(function () {
					!(de & 6) && yn()
				}),
				(n = null)
		else {
			switch (Ec(r)) {
				case 1:
					n = Ha
					break
				case 4:
					n = gc
					break
				case 16:
					n = Yi
					break
				case 536870912:
					n = _c
					break
				default:
					n = Yi
			}
			n = Vd(n, Md.bind(null, e))
		}
		;(e.callbackPriority = t), (e.callbackNode = n)
	}
}
function Md(e, t) {
	if (((Ui = -1), (Vi = 0), de & 6)) throw Error(te(327))
	var n = e.callbackNode
	if (Jn() && e.callbackNode !== n) return null
	var r = Zi(e, e === Fe ? $e : 0)
	if (r === 0) return null
	if (r & 30 || r & e.expiredLanes || t) t = yo(e, r)
	else {
		t = r
		var i = de
		de |= 2
		var o = Bd()
		;(Fe !== e || $e !== t) && ((Mt = null), (lr = Pe() + 500), Sn(e, t))
		do
			try {
				Gv()
				break
			} catch (h) {
				Fd(e, h)
			}
		while (!0)
		iu(),
			(ho.current = o),
			(de = i),
			Le !== null ? (t = 0) : ((Fe = null), ($e = 0), (t = Re))
	}
	if (t !== 0) {
		if (
			(t === 2 && ((i = Xl(e)), i !== 0 && ((r = i), (t = Oa(e, i)))),
			t === 1)
		)
			throw ((n = oi), Sn(e, 0), Xt(e, r), it(e, Pe()), n)
		if (t === 6) Xt(e, r)
		else {
			if (
				((i = e.current.alternate),
				!(r & 30) &&
					!Wv(i) &&
					((t = yo(e, r)),
					t === 2 &&
						((o = Xl(e)), o !== 0 && ((r = o), (t = Oa(e, o)))),
					t === 1))
			)
				throw ((n = oi), Sn(e, 0), Xt(e, r), it(e, Pe()), n)
			switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
				case 0:
				case 1:
					throw Error(te(345))
				case 2:
					gn(e, et, Mt)
					break
				case 3:
					if (
						(Xt(e, r),
						(r & 130023424) === r &&
							((t = _u + 500 - Pe()), 10 < t))
					) {
						if (Zi(e, 0) !== 0) break
						if (((i = e.suspendedLanes), (i & r) !== r)) {
							Ye(), (e.pingedLanes |= e.suspendedLanes & i)
							break
						}
						e.timeoutHandle = la(gn.bind(null, e, et, Mt), t)
						break
					}
					gn(e, et, Mt)
					break
				case 4:
					if ((Xt(e, r), (r & 4194240) === r)) break
					for (t = e.eventTimes, i = -1; 0 < r; ) {
						var l = 31 - kt(r)
						;(o = 1 << l), (l = t[l]), l > i && (i = l), (r &= ~o)
					}
					if (
						((r = i),
						(r = Pe() - r),
						(r =
							(120 > r
								? 120
								: 480 > r
									? 480
									: 1080 > r
										? 1080
										: 1920 > r
											? 1920
											: 3e3 > r
												? 3e3
												: 4320 > r
													? 4320
													: 1960 * Hv(r / 1960)) - r),
						10 < r)
					) {
						e.timeoutHandle = la(gn.bind(null, e, et, Mt), r)
						break
					}
					gn(e, et, Mt)
					break
				case 5:
					gn(e, et, Mt)
					break
				default:
					throw Error(te(329))
			}
		}
	}
	return it(e, Pe()), e.callbackNode === n ? Md.bind(null, e) : null
}
function Oa(e, t) {
	var n = Br
	return (
		e.current.memoizedState.isDehydrated && (Sn(e, t).flags |= 256),
		(e = yo(e, t)),
		e !== 2 && ((t = et), (et = n), t !== null && Na(t)),
		e
	)
}
function Na(e) {
	et === null ? (et = e) : et.push.apply(et, e)
}
function Wv(e) {
	for (var t = e; ; ) {
		if (t.flags & 16384) {
			var n = t.updateQueue
			if (n !== null && ((n = n.stores), n !== null))
				for (var r = 0; r < n.length; r++) {
					var i = n[r],
						o = i.getSnapshot
					i = i.value
					try {
						if (!Nt(o(), i)) return !1
					} catch {
						return !1
					}
				}
		}
		if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
			(n.return = t), (t = n)
		else {
			if (t === e) break
			for (; t.sibling === null; ) {
				if (t.return === null || t.return === e) return !0
				t = t.return
			}
			;(t.sibling.return = t.return), (t = t.sibling)
		}
	}
	return !0
}
function Xt(e, t) {
	for (
		t &= ~gu,
			t &= ~Bo,
			e.suspendedLanes |= t,
			e.pingedLanes &= ~t,
			e = e.expirationTimes;
		0 < t;

	) {
		var n = 31 - kt(t),
			r = 1 << n
		;(e[n] = -1), (t &= ~r)
	}
}
function Vs(e) {
	if (de & 6) throw Error(te(327))
	Jn()
	var t = Zi(e, 0)
	if (!(t & 1)) return it(e, Pe()), null
	var n = yo(e, t)
	if (e.tag !== 0 && n === 2) {
		var r = Xl(e)
		r !== 0 && ((t = r), (n = Oa(e, r)))
	}
	if (n === 1) throw ((n = oi), Sn(e, 0), Xt(e, t), it(e, Pe()), n)
	if (n === 6) throw Error(te(345))
	return (
		(e.finishedWork = e.current.alternate),
		(e.finishedLanes = t),
		gn(e, et, Mt),
		it(e, Pe()),
		null
	)
}
function wu(e, t) {
	var n = de
	de |= 1
	try {
		return e(t)
	} finally {
		;(de = n), de === 0 && ((lr = Pe() + 500), Ro && yn())
	}
}
function Pn(e) {
	en !== null && en.tag === 0 && !(de & 6) && Jn()
	var t = de
	de |= 1
	var n = mt.transition,
		r = ve
	try {
		if (((mt.transition = null), (ve = 1), e)) return e()
	} finally {
		;(ve = r), (mt.transition = n), (de = t), !(de & 6) && yn()
	}
}
function Eu() {
	;(lt = Wn.current), Ee(Wn)
}
function Sn(e, t) {
	;(e.finishedWork = null), (e.finishedLanes = 0)
	var n = e.timeoutHandle
	if ((n !== -1 && ((e.timeoutHandle = -1), bv(n)), Le !== null))
		for (n = Le.return; n !== null; ) {
			var r = n
			switch ((tu(r), r.tag)) {
				case 1:
					;(r = r.type.childContextTypes), r != null && no()
					break
				case 3:
					ir(), Ee(nt), Ee(We), fu()
					break
				case 5:
					su(r)
					break
				case 4:
					ir()
					break
				case 13:
					Ee(ke)
					break
				case 19:
					Ee(ke)
					break
				case 10:
					ou(r.type._context)
					break
				case 22:
				case 23:
					Eu()
			}
			n = n.return
		}
	if (
		((Fe = e),
		(Le = e = fn(e.current, null)),
		($e = lt = t),
		(Re = 0),
		(oi = null),
		(gu = Bo = Tn = 0),
		(et = Br = null),
		En !== null)
	) {
		for (t = 0; t < En.length; t++)
			if (((n = En[t]), (r = n.interleaved), r !== null)) {
				n.interleaved = null
				var i = r.next,
					o = n.pending
				if (o !== null) {
					var l = o.next
					;(o.next = i), (r.next = l)
				}
				n.pending = r
			}
		En = null
	}
	return e
}
function Fd(e, t) {
	do {
		var n = Le
		try {
			if ((iu(), (qi.current = co), fo)) {
				for (var r = Oe.memoizedState; r !== null; ) {
					var i = r.queue
					i !== null && (i.pending = null), (r = r.next)
				}
				fo = !1
			}
			if (
				((An = 0),
				(Me = De = Oe = null),
				(Mr = !1),
				(ni = 0),
				(mu.current = null),
				n === null || n.return === null)
			) {
				;(Re = 1), (oi = t), (Le = null)
				break
			}
			e: {
				var o = e,
					l = n.return,
					h = n,
					p = t
				if (
					((t = $e),
					(h.flags |= 32768),
					p !== null &&
						typeof p == "object" &&
						typeof p.then == "function")
				) {
					var g = p,
						y = h,
						f = y.tag
					if (!(y.mode & 1) && (f === 0 || f === 11 || f === 15)) {
						var u = y.alternate
						u
							? ((y.updateQueue = u.updateQueue),
								(y.memoizedState = u.memoizedState),
								(y.lanes = u.lanes))
							: ((y.updateQueue = null), (y.memoizedState = null))
					}
					var c = js(l)
					if (c !== null) {
						;(c.flags &= -257),
							Ls(c, l, h, o, t),
							c.mode & 1 && Ps(o, g, t),
							(t = c),
							(p = g)
						var _ = t.updateQueue
						if (_ === null) {
							var m = new Set()
							m.add(p), (t.updateQueue = m)
						} else _.add(p)
						break e
					} else {
						if (!(t & 1)) {
							Ps(o, g, t), bu()
							break e
						}
						p = Error(te(426))
					}
				} else if (xe && h.mode & 1) {
					var w = js(l)
					if (w !== null) {
						!(w.flags & 65536) && (w.flags |= 256),
							Ls(w, l, h, o, t),
							nu(or(p, h))
						break e
					}
				}
				;(o = p = or(p, h)),
					Re !== 4 && (Re = 2),
					Br === null ? (Br = [o]) : Br.push(o),
					(o = l)
				do {
					switch (o.tag) {
						case 3:
							;(o.flags |= 65536), (t &= -t), (o.lanes |= t)
							var s = Ed(o, p, t)
							Ss(o, s)
							break e
						case 1:
							h = p
							var a = o.type,
								v = o.stateNode
							if (
								!(o.flags & 128) &&
								(typeof a.getDerivedStateFromError ==
									"function" ||
									(v !== null &&
										typeof v.componentDidCatch ==
											"function" &&
										(un === null || !un.has(v))))
							) {
								;(o.flags |= 65536), (t &= -t), (o.lanes |= t)
								var d = bd(o, h, t)
								Ss(o, d)
								break e
							}
					}
					o = o.return
				} while (o !== null)
			}
			$d(n)
		} catch (E) {
			;(t = E), Le === n && n !== null && (Le = n = n.return)
			continue
		}
		break
	} while (!0)
}
function Bd() {
	var e = ho.current
	return (ho.current = co), e === null ? co : e
}
function bu() {
	;(Re === 0 || Re === 3 || Re === 2) && (Re = 4),
		Fe === null || (!(Tn & 268435455) && !(Bo & 268435455)) || Xt(Fe, $e)
}
function yo(e, t) {
	var n = de
	de |= 2
	var r = Bd()
	;(Fe !== e || $e !== t) && ((Mt = null), Sn(e, t))
	do
		try {
			Kv()
			break
		} catch (i) {
			Fd(e, i)
		}
	while (!0)
	if ((iu(), (de = n), (ho.current = r), Le !== null)) throw Error(te(261))
	return (Fe = null), ($e = 0), Re
}
function Kv() {
	for (; Le !== null; ) qd(Le)
}
function Gv() {
	for (; Le !== null && !_p(); ) qd(Le)
}
function qd(e) {
	var t = Ud(e.alternate, e, lt)
	;(e.memoizedProps = e.pendingProps),
		t === null ? $d(e) : (Le = t),
		(mu.current = null)
}
function $d(e) {
	var t = e
	do {
		var n = t.alternate
		if (((e = t.return), t.flags & 32768)) {
			if (((n = $v(n, t)), n !== null)) {
				;(n.flags &= 32767), (Le = n)
				return
			}
			if (e !== null)
				(e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
			else {
				;(Re = 6), (Le = null)
				return
			}
		} else if (((n = qv(n, t, lt)), n !== null)) {
			Le = n
			return
		}
		if (((t = t.sibling), t !== null)) {
			Le = t
			return
		}
		Le = t = e
	} while (t !== null)
	Re === 0 && (Re = 5)
}
function gn(e, t, n) {
	var r = ve,
		i = mt.transition
	try {
		;(mt.transition = null), (ve = 1), Qv(e, t, n, r)
	} finally {
		;(mt.transition = i), (ve = r)
	}
	return null
}
function Qv(e, t, n, r) {
	do Jn()
	while (en !== null)
	if (de & 6) throw Error(te(327))
	n = e.finishedWork
	var i = e.finishedLanes
	if (n === null) return null
	if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
		throw Error(te(177))
	;(e.callbackNode = null), (e.callbackPriority = 0)
	var o = n.lanes | n.childLanes
	if (
		(Tp(e, o),
		e === Fe && ((Le = Fe = null), ($e = 0)),
		(!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
			Ti ||
			((Ti = !0),
			Vd(Yi, function () {
				return Jn(), null
			})),
		(o = (n.flags & 15990) !== 0),
		n.subtreeFlags & 15990 || o)
	) {
		;(o = mt.transition), (mt.transition = null)
		var l = ve
		ve = 1
		var h = de
		;(de |= 4),
			(mu.current = null),
			Uv(e, n),
			Rd(n, e),
			vv(ia),
			(Xi = !!ra),
			(ia = ra = null),
			(e.current = n),
			Vv(n),
			wp(),
			(de = h),
			(ve = l),
			(mt.transition = o)
	} else e.current = n
	if (
		(Ti && ((Ti = !1), (en = e), (vo = i)),
		(o = e.pendingLanes),
		o === 0 && (un = null),
		xp(n.stateNode),
		it(e, Pe()),
		t !== null)
	)
		for (r = e.onRecoverableError, n = 0; n < t.length; n++)
			(i = t[n]),
				r(i.value, { componentStack: i.stack, digest: i.digest })
	if (po) throw ((po = !1), (e = Sa), (Sa = null), e)
	return (
		vo & 1 && e.tag !== 0 && Jn(),
		(o = e.pendingLanes),
		o & 1 ? (e === ka ? qr++ : ((qr = 0), (ka = e))) : (qr = 0),
		yn(),
		null
	)
}
function Jn() {
	if (en !== null) {
		var e = Ec(vo),
			t = mt.transition,
			n = ve
		try {
			if (((mt.transition = null), (ve = 16 > e ? 16 : e), en === null))
				var r = !1
			else {
				if (((e = en), (en = null), (vo = 0), de & 6))
					throw Error(te(331))
				var i = de
				for (de |= 4, oe = e.current; oe !== null; ) {
					var o = oe,
						l = o.child
					if (oe.flags & 16) {
						var h = o.deletions
						if (h !== null) {
							for (var p = 0; p < h.length; p++) {
								var g = h[p]
								for (oe = g; oe !== null; ) {
									var y = oe
									switch (y.tag) {
										case 0:
										case 11:
										case 15:
											Fr(8, y, o)
									}
									var f = y.child
									if (f !== null) (f.return = y), (oe = f)
									else
										for (; oe !== null; ) {
											y = oe
											var u = y.sibling,
												c = y.return
											if ((Ld(y), y === g)) {
												oe = null
												break
											}
											if (u !== null) {
												;(u.return = c), (oe = u)
												break
											}
											oe = c
										}
								}
							}
							var _ = o.alternate
							if (_ !== null) {
								var m = _.child
								if (m !== null) {
									_.child = null
									do {
										var w = m.sibling
										;(m.sibling = null), (m = w)
									} while (m !== null)
								}
							}
							oe = o
						}
					}
					if (o.subtreeFlags & 2064 && l !== null)
						(l.return = o), (oe = l)
					else
						e: for (; oe !== null; ) {
							if (((o = oe), o.flags & 2048))
								switch (o.tag) {
									case 0:
									case 11:
									case 15:
										Fr(9, o, o.return)
								}
							var s = o.sibling
							if (s !== null) {
								;(s.return = o.return), (oe = s)
								break e
							}
							oe = o.return
						}
				}
				var a = e.current
				for (oe = a; oe !== null; ) {
					l = oe
					var v = l.child
					if (l.subtreeFlags & 2064 && v !== null)
						(v.return = l), (oe = v)
					else
						e: for (l = a; oe !== null; ) {
							if (((h = oe), h.flags & 2048))
								try {
									switch (h.tag) {
										case 0:
										case 11:
										case 15:
											Fo(9, h)
									}
								} catch (E) {
									Ae(h, h.return, E)
								}
							if (h === l) {
								oe = null
								break e
							}
							var d = h.sibling
							if (d !== null) {
								;(d.return = h.return), (oe = d)
								break e
							}
							oe = h.return
						}
				}
				if (
					((de = i),
					yn(),
					Dt && typeof Dt.onPostCommitFiberRoot == "function")
				)
					try {
						Dt.onPostCommitFiberRoot(Po, e)
					} catch {}
				r = !0
			}
			return r
		} finally {
			;(ve = n), (mt.transition = t)
		}
	}
	return !1
}
function Hs(e, t, n) {
	;(t = or(n, t)),
		(t = Ed(e, t, 1)),
		(e = an(e, t, 1)),
		(t = Ye()),
		e !== null && (ai(e, 1, t), it(e, t))
}
function Ae(e, t, n) {
	if (e.tag === 3) Hs(e, e, n)
	else
		for (; t !== null; ) {
			if (t.tag === 3) {
				Hs(t, e, n)
				break
			} else if (t.tag === 1) {
				var r = t.stateNode
				if (
					typeof t.type.getDerivedStateFromError == "function" ||
					(typeof r.componentDidCatch == "function" &&
						(un === null || !un.has(r)))
				) {
					;(e = or(n, e)),
						(e = bd(t, e, 1)),
						(t = an(t, e, 1)),
						(e = Ye()),
						t !== null && (ai(t, 1, e), it(t, e))
					break
				}
			}
			t = t.return
		}
}
function Yv(e, t, n) {
	var r = e.pingCache
	r !== null && r.delete(t),
		(t = Ye()),
		(e.pingedLanes |= e.suspendedLanes & n),
		Fe === e &&
			($e & n) === n &&
			(Re === 4 ||
			(Re === 3 && ($e & 130023424) === $e && 500 > Pe() - _u)
				? Sn(e, 0)
				: (gu |= n)),
		it(e, t)
}
function zd(e, t) {
	t === 0 &&
		(e.mode & 1
			? ((t = _i), (_i <<= 1), !(_i & 130023424) && (_i = 4194304))
			: (t = 1))
	var n = Ye()
	;(e = Vt(e, t)), e !== null && (ai(e, t, n), it(e, n))
}
function Zv(e) {
	var t = e.memoizedState,
		n = 0
	t !== null && (n = t.retryLane), zd(e, n)
}
function Xv(e, t) {
	var n = 0
	switch (e.tag) {
		case 13:
			var r = e.stateNode,
				i = e.memoizedState
			i !== null && (n = i.retryLane)
			break
		case 19:
			r = e.stateNode
			break
		default:
			throw Error(te(314))
	}
	r !== null && r.delete(t), zd(e, n)
}
var Ud
Ud = function (e, t, n) {
	if (e !== null)
		if (e.memoizedProps !== t.pendingProps || nt.current) tt = !0
		else {
			if (!(e.lanes & n) && !(t.flags & 128))
				return (tt = !1), Bv(e, t, n)
			tt = !!(e.flags & 131072)
		}
	else (tt = !1), xe && t.flags & 1048576 && Kc(t, oo, t.index)
	switch (((t.lanes = 0), t.tag)) {
		case 2:
			var r = t.type
			zi(e, t), (e = t.pendingProps)
			var i = tr(t, We.current)
			Xn(t, n), (i = du(null, t, r, e, i, n))
			var o = hu()
			return (
				(t.flags |= 1),
				typeof i == "object" &&
				i !== null &&
				typeof i.render == "function" &&
				i.$$typeof === void 0
					? ((t.tag = 1),
						(t.memoizedState = null),
						(t.updateQueue = null),
						rt(r) ? ((o = !0), ro(t)) : (o = !1),
						(t.memoizedState =
							i.state !== null && i.state !== void 0
								? i.state
								: null),
						au(t),
						(i.updater = Mo),
						(t.stateNode = i),
						(i._reactInternals = t),
						ha(t, r, e, n),
						(t = ya(null, t, r, !0, o, n)))
					: ((t.tag = 0),
						xe && o && eu(t),
						Ge(null, t, i, n),
						(t = t.child)),
				t
			)
		case 16:
			r = t.elementType
			e: {
				switch (
					(zi(e, t),
					(e = t.pendingProps),
					(i = r._init),
					(r = i(r._payload)),
					(t.type = r),
					(i = t.tag = ey(r)),
					(e = Et(r, e)),
					i)
				) {
					case 0:
						t = va(null, t, r, e, n)
						break e
					case 1:
						t = Rs(null, t, r, e, n)
						break e
					case 11:
						t = Cs(null, t, r, e, n)
						break e
					case 14:
						t = Ds(null, t, r, Et(r.type, e), n)
						break e
				}
				throw Error(te(306, r, ""))
			}
			return t
		case 0:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : Et(r, i)),
				va(e, t, r, i, n)
			)
		case 1:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : Et(r, i)),
				Rs(e, t, r, i, n)
			)
		case 3:
			e: {
				if ((Od(t), e === null)) throw Error(te(387))
				;(r = t.pendingProps),
					(o = t.memoizedState),
					(i = o.element),
					Jc(e, t),
					uo(t, r, null, n)
				var l = t.memoizedState
				if (((r = l.element), o.isDehydrated))
					if (
						((o = {
							element: r,
							isDehydrated: !1,
							cache: l.cache,
							pendingSuspenseBoundaries:
								l.pendingSuspenseBoundaries,
							transitions: l.transitions
						}),
						(t.updateQueue.baseState = o),
						(t.memoizedState = o),
						t.flags & 256)
					) {
						;(i = or(Error(te(423)), t)), (t = Is(e, t, r, n, i))
						break e
					} else if (r !== i) {
						;(i = or(Error(te(424)), t)), (t = Is(e, t, r, n, i))
						break e
					} else
						for (
							ut = ln(t.stateNode.containerInfo.firstChild),
								st = t,
								xe = !0,
								xt = null,
								n = Zc(t, null, r, n),
								t.child = n;
							n;

						)
							(n.flags = (n.flags & -3) | 4096), (n = n.sibling)
				else {
					if ((nr(), r === i)) {
						t = Ht(e, t, n)
						break e
					}
					Ge(e, t, r, n)
				}
				t = t.child
			}
			return t
		case 5:
			return (
				ed(t),
				e === null && fa(t),
				(r = t.type),
				(i = t.pendingProps),
				(o = e !== null ? e.memoizedProps : null),
				(l = i.children),
				oa(r, i)
					? (l = null)
					: o !== null && oa(r, o) && (t.flags |= 32),
				kd(e, t),
				Ge(e, t, l, n),
				t.child
			)
		case 6:
			return e === null && fa(t), null
		case 13:
			return Nd(e, t, n)
		case 4:
			return (
				uu(t, t.stateNode.containerInfo),
				(r = t.pendingProps),
				e === null ? (t.child = rr(t, null, r, n)) : Ge(e, t, r, n),
				t.child
			)
		case 11:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : Et(r, i)),
				Cs(e, t, r, i, n)
			)
		case 7:
			return Ge(e, t, t.pendingProps, n), t.child
		case 8:
			return Ge(e, t, t.pendingProps.children, n), t.child
		case 12:
			return Ge(e, t, t.pendingProps.children, n), t.child
		case 10:
			e: {
				if (
					((r = t.type._context),
					(i = t.pendingProps),
					(o = t.memoizedProps),
					(l = i.value),
					ge(lo, r._currentValue),
					(r._currentValue = l),
					o !== null)
				)
					if (Nt(o.value, l)) {
						if (o.children === i.children && !nt.current) {
							t = Ht(e, t, n)
							break e
						}
					} else
						for (
							o = t.child, o !== null && (o.return = t);
							o !== null;

						) {
							var h = o.dependencies
							if (h !== null) {
								l = o.child
								for (var p = h.firstContext; p !== null; ) {
									if (p.context === r) {
										if (o.tag === 1) {
											;(p = $t(-1, n & -n)), (p.tag = 2)
											var g = o.updateQueue
											if (g !== null) {
												g = g.shared
												var y = g.pending
												y === null
													? (p.next = p)
													: ((p.next = y.next),
														(y.next = p)),
													(g.pending = p)
											}
										}
										;(o.lanes |= n),
											(p = o.alternate),
											p !== null && (p.lanes |= n),
											ca(o.return, n, t),
											(h.lanes |= n)
										break
									}
									p = p.next
								}
							} else if (o.tag === 10)
								l = o.type === t.type ? null : o.child
							else if (o.tag === 18) {
								if (((l = o.return), l === null))
									throw Error(te(341))
								;(l.lanes |= n),
									(h = l.alternate),
									h !== null && (h.lanes |= n),
									ca(l, n, t),
									(l = o.sibling)
							} else l = o.child
							if (l !== null) l.return = o
							else
								for (l = o; l !== null; ) {
									if (l === t) {
										l = null
										break
									}
									if (((o = l.sibling), o !== null)) {
										;(o.return = l.return), (l = o)
										break
									}
									l = l.return
								}
							o = l
						}
				Ge(e, t, i.children, n), (t = t.child)
			}
			return t
		case 9:
			return (
				(i = t.type),
				(r = t.pendingProps.children),
				Xn(t, n),
				(i = gt(i)),
				(r = r(i)),
				(t.flags |= 1),
				Ge(e, t, r, n),
				t.child
			)
		case 14:
			return (
				(r = t.type),
				(i = Et(r, t.pendingProps)),
				(i = Et(r.type, i)),
				Ds(e, t, r, i, n)
			)
		case 15:
			return xd(e, t, t.type, t.pendingProps, n)
		case 17:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : Et(r, i)),
				zi(e, t),
				(t.tag = 1),
				rt(r) ? ((e = !0), ro(t)) : (e = !1),
				Xn(t, n),
				wd(t, r, i),
				ha(t, r, i, n),
				ya(null, t, r, !0, e, n)
			)
		case 19:
			return Ad(e, t, n)
		case 22:
			return Sd(e, t, n)
	}
	throw Error(te(156, t.tag))
}
function Vd(e, t) {
	return mc(e, t)
}
function Jv(e, t, n, r) {
	;(this.tag = e),
		(this.key = n),
		(this.sibling =
			this.child =
			this.return =
			this.stateNode =
			this.type =
			this.elementType =
				null),
		(this.index = 0),
		(this.ref = null),
		(this.pendingProps = t),
		(this.dependencies =
			this.memoizedState =
			this.updateQueue =
			this.memoizedProps =
				null),
		(this.mode = r),
		(this.subtreeFlags = this.flags = 0),
		(this.deletions = null),
		(this.childLanes = this.lanes = 0),
		(this.alternate = null)
}
function yt(e, t, n, r) {
	return new Jv(e, t, n, r)
}
function xu(e) {
	return (e = e.prototype), !(!e || !e.isReactComponent)
}
function ey(e) {
	if (typeof e == "function") return xu(e) ? 1 : 0
	if (e != null) {
		if (((e = e.$$typeof), e === za)) return 11
		if (e === Ua) return 14
	}
	return 2
}
function fn(e, t) {
	var n = e.alternate
	return (
		n === null
			? ((n = yt(e.tag, t, e.key, e.mode)),
				(n.elementType = e.elementType),
				(n.type = e.type),
				(n.stateNode = e.stateNode),
				(n.alternate = e),
				(e.alternate = n))
			: ((n.pendingProps = t),
				(n.type = e.type),
				(n.flags = 0),
				(n.subtreeFlags = 0),
				(n.deletions = null)),
		(n.flags = e.flags & 14680064),
		(n.childLanes = e.childLanes),
		(n.lanes = e.lanes),
		(n.child = e.child),
		(n.memoizedProps = e.memoizedProps),
		(n.memoizedState = e.memoizedState),
		(n.updateQueue = e.updateQueue),
		(t = e.dependencies),
		(n.dependencies =
			t === null
				? null
				: { lanes: t.lanes, firstContext: t.firstContext }),
		(n.sibling = e.sibling),
		(n.index = e.index),
		(n.ref = e.ref),
		n
	)
}
function Hi(e, t, n, r, i, o) {
	var l = 2
	if (((r = e), typeof e == "function")) xu(e) && (l = 1)
	else if (typeof e == "string") l = 5
	else
		e: switch (e) {
			case In:
				return kn(n.children, i, o, t)
			case $a:
				;(l = 8), (i |= 8)
				break
			case Ml:
				return (
					(e = yt(12, n, t, i | 2)),
					(e.elementType = Ml),
					(e.lanes = o),
					e
				)
			case Fl:
				return (
					(e = yt(13, n, t, i)),
					(e.elementType = Fl),
					(e.lanes = o),
					e
				)
			case Bl:
				return (
					(e = yt(19, n, t, i)),
					(e.elementType = Bl),
					(e.lanes = o),
					e
				)
			case ec:
				return qo(n, i, o, t)
			default:
				if (typeof e == "object" && e !== null)
					switch (e.$$typeof) {
						case Xf:
							l = 10
							break e
						case Jf:
							l = 9
							break e
						case za:
							l = 11
							break e
						case Ua:
							l = 14
							break e
						case Qt:
							;(l = 16), (r = null)
							break e
					}
				throw Error(te(130, e == null ? e : typeof e, ""))
		}
	return (
		(t = yt(l, n, t, i)),
		(t.elementType = e),
		(t.type = r),
		(t.lanes = o),
		t
	)
}
function kn(e, t, n, r) {
	return (e = yt(7, e, r, t)), (e.lanes = n), e
}
function qo(e, t, n, r) {
	return (
		(e = yt(22, e, r, t)),
		(e.elementType = ec),
		(e.lanes = n),
		(e.stateNode = { isHidden: !1 }),
		e
	)
}
function kl(e, t, n) {
	return (e = yt(6, e, null, t)), (e.lanes = n), e
}
function Ol(e, t, n) {
	return (
		(t = yt(4, e.children !== null ? e.children : [], e.key, t)),
		(t.lanes = n),
		(t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation
		}),
		t
	)
}
function ty(e, t, n, r, i) {
	;(this.tag = t),
		(this.containerInfo = e),
		(this.finishedWork =
			this.pingCache =
			this.current =
			this.pendingChildren =
				null),
		(this.timeoutHandle = -1),
		(this.callbackNode = this.pendingContext = this.context = null),
		(this.callbackPriority = 0),
		(this.eventTimes = ll(0)),
		(this.expirationTimes = ll(-1)),
		(this.entangledLanes =
			this.finishedLanes =
			this.mutableReadLanes =
			this.expiredLanes =
			this.pingedLanes =
			this.suspendedLanes =
			this.pendingLanes =
				0),
		(this.entanglements = ll(0)),
		(this.identifierPrefix = r),
		(this.onRecoverableError = i),
		(this.mutableSourceEagerHydrationData = null)
}
function Su(e, t, n, r, i, o, l, h, p) {
	return (
		(e = new ty(e, t, n, h, p)),
		t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
		(o = yt(3, null, null, t)),
		(e.current = o),
		(o.stateNode = e),
		(o.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: null,
			transitions: null,
			pendingSuspenseBoundaries: null
		}),
		au(o),
		e
	)
}
function ny(e, t, n) {
	var r =
		3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
	return {
		$$typeof: Rn,
		key: r == null ? null : "" + r,
		children: e,
		containerInfo: t,
		implementation: n
	}
}
function Hd(e) {
	if (!e) return dn
	e = e._reactInternals
	e: {
		if (Ln(e) !== e || e.tag !== 1) throw Error(te(170))
		var t = e
		do {
			switch (t.tag) {
				case 3:
					t = t.stateNode.context
					break e
				case 1:
					if (rt(t.type)) {
						t =
							t.stateNode
								.__reactInternalMemoizedMergedChildContext
						break e
					}
			}
			t = t.return
		} while (t !== null)
		throw Error(te(171))
	}
	if (e.tag === 1) {
		var n = e.type
		if (rt(n)) return Hc(e, n, t)
	}
	return t
}
function Wd(e, t, n, r, i, o, l, h, p) {
	return (
		(e = Su(n, r, !0, e, i, o, l, h, p)),
		(e.context = Hd(null)),
		(n = e.current),
		(r = Ye()),
		(i = sn(n)),
		(o = $t(r, i)),
		(o.callback = t ?? null),
		an(n, o, i),
		(e.current.lanes = i),
		ai(e, i, r),
		it(e, r),
		e
	)
}
function $o(e, t, n, r) {
	var i = t.current,
		o = Ye(),
		l = sn(i)
	return (
		(n = Hd(n)),
		t.context === null ? (t.context = n) : (t.pendingContext = n),
		(t = $t(o, l)),
		(t.payload = { element: e }),
		(r = r === void 0 ? null : r),
		r !== null && (t.callback = r),
		(e = an(i, t, l)),
		e !== null && (Ot(e, i, l, o), Bi(e, i, l)),
		l
	)
}
function mo(e) {
	if (((e = e.current), !e.child)) return null
	switch (e.child.tag) {
		case 5:
			return e.child.stateNode
		default:
			return e.child.stateNode
	}
}
function Ws(e, t) {
	if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
		var n = e.retryLane
		e.retryLane = n !== 0 && n < t ? n : t
	}
}
function ku(e, t) {
	Ws(e, t), (e = e.alternate) && Ws(e, t)
}
function ry() {
	return null
}
var Kd =
	typeof reportError == "function"
		? reportError
		: function (e) {
				console.error(e)
			}
function Ou(e) {
	this._internalRoot = e
}
zo.prototype.render = Ou.prototype.render = function (e) {
	var t = this._internalRoot
	if (t === null) throw Error(te(409))
	$o(e, t, null, null)
}
zo.prototype.unmount = Ou.prototype.unmount = function () {
	var e = this._internalRoot
	if (e !== null) {
		this._internalRoot = null
		var t = e.containerInfo
		Pn(function () {
			$o(null, e, null, null)
		}),
			(t[Ut] = null)
	}
}
function zo(e) {
	this._internalRoot = e
}
zo.prototype.unstable_scheduleHydration = function (e) {
	if (e) {
		var t = Sc()
		e = { blockedOn: null, target: e, priority: t }
		for (var n = 0; n < Zt.length && t !== 0 && t < Zt[n].priority; n++);
		Zt.splice(n, 0, e), n === 0 && Oc(e)
	}
}
function Nu(e) {
	return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
}
function Uo(e) {
	return !(
		!e ||
		(e.nodeType !== 1 &&
			e.nodeType !== 9 &&
			e.nodeType !== 11 &&
			(e.nodeType !== 8 ||
				e.nodeValue !== " react-mount-point-unstable "))
	)
}
function Ks() {}
function iy(e, t, n, r, i) {
	if (i) {
		if (typeof r == "function") {
			var o = r
			r = function () {
				var g = mo(l)
				o.call(g)
			}
		}
		var l = Wd(t, r, e, 0, null, !1, !1, "", Ks)
		return (
			(e._reactRootContainer = l),
			(e[Ut] = l.current),
			Zr(e.nodeType === 8 ? e.parentNode : e),
			Pn(),
			l
		)
	}
	for (; (i = e.lastChild); ) e.removeChild(i)
	if (typeof r == "function") {
		var h = r
		r = function () {
			var g = mo(p)
			h.call(g)
		}
	}
	var p = Su(e, 0, !1, null, null, !1, !1, "", Ks)
	return (
		(e._reactRootContainer = p),
		(e[Ut] = p.current),
		Zr(e.nodeType === 8 ? e.parentNode : e),
		Pn(function () {
			$o(t, p, n, r)
		}),
		p
	)
}
function Vo(e, t, n, r, i) {
	var o = n._reactRootContainer
	if (o) {
		var l = o
		if (typeof i == "function") {
			var h = i
			i = function () {
				var p = mo(l)
				h.call(p)
			}
		}
		$o(t, l, e, i)
	} else l = iy(n, t, e, i, r)
	return mo(l)
}
bc = function (e) {
	switch (e.tag) {
		case 3:
			var t = e.stateNode
			if (t.current.memoizedState.isDehydrated) {
				var n = Pr(t.pendingLanes)
				n !== 0 &&
					(Wa(t, n | 1),
					it(t, Pe()),
					!(de & 6) && ((lr = Pe() + 500), yn()))
			}
			break
		case 13:
			Pn(function () {
				var r = Vt(e, 1)
				if (r !== null) {
					var i = Ye()
					Ot(r, e, 1, i)
				}
			}),
				ku(e, 1)
	}
}
Ka = function (e) {
	if (e.tag === 13) {
		var t = Vt(e, 134217728)
		if (t !== null) {
			var n = Ye()
			Ot(t, e, 134217728, n)
		}
		ku(e, 134217728)
	}
}
xc = function (e) {
	if (e.tag === 13) {
		var t = sn(e),
			n = Vt(e, t)
		if (n !== null) {
			var r = Ye()
			Ot(n, e, t, r)
		}
		ku(e, t)
	}
}
Sc = function () {
	return ve
}
kc = function (e, t) {
	var n = ve
	try {
		return (ve = e), t()
	} finally {
		ve = n
	}
}
Ql = function (e, t, n) {
	switch (t) {
		case "input":
			if ((zl(e, n), (t = n.name), n.type === "radio" && t != null)) {
				for (n = e; n.parentNode; ) n = n.parentNode
				for (
					n = n.querySelectorAll(
						"input[name=" +
							JSON.stringify("" + t) +
							'][type="radio"]'
					),
						t = 0;
					t < n.length;
					t++
				) {
					var r = n[t]
					if (r !== e && r.form === e.form) {
						var i = Do(r)
						if (!i) throw Error(te(90))
						nc(r), zl(r, i)
					}
				}
			}
			break
		case "textarea":
			ic(e, n)
			break
		case "select":
			;(t = n.value), t != null && Gn(e, !!n.multiple, t, !1)
	}
}
cc = wu
dc = Pn
var oy = { usingClientEntryPoint: !1, Events: [si, qn, Do, sc, fc, wu] },
	Sr = {
		findFiberByHostInstance: wn,
		bundleType: 0,
		version: "18.3.1",
		rendererPackageName: "react-dom"
	},
	ly = {
		bundleType: Sr.bundleType,
		version: Sr.version,
		rendererPackageName: Sr.rendererPackageName,
		rendererConfig: Sr.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setErrorHandler: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: Wt.ReactCurrentDispatcher,
		findHostInstanceByFiber: function (e) {
			return (e = vc(e)), e === null ? null : e.stateNode
		},
		findFiberByHostInstance: Sr.findFiberByHostInstance || ry,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
	}
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
	var Pi = __REACT_DEVTOOLS_GLOBAL_HOOK__
	if (!Pi.isDisabled && Pi.supportsFiber)
		try {
			;(Po = Pi.inject(ly)), (Dt = Pi)
		} catch {}
}
ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = oy
ct.createPortal = function (e, t) {
	var n =
		2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
	if (!Nu(t)) throw Error(te(200))
	return ny(e, t, null, n)
}
ct.createRoot = function (e, t) {
	if (!Nu(e)) throw Error(te(299))
	var n = !1,
		r = "",
		i = Kd
	return (
		t != null &&
			(t.unstable_strictMode === !0 && (n = !0),
			t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
			t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
		(t = Su(e, 1, !1, null, null, n, !1, r, i)),
		(e[Ut] = t.current),
		Zr(e.nodeType === 8 ? e.parentNode : e),
		new Ou(t)
	)
}
ct.findDOMNode = function (e) {
	if (e == null) return null
	if (e.nodeType === 1) return e
	var t = e._reactInternals
	if (t === void 0)
		throw typeof e.render == "function"
			? Error(te(188))
			: ((e = Object.keys(e).join(",")), Error(te(268, e)))
	return (e = vc(t)), (e = e === null ? null : e.stateNode), e
}
ct.flushSync = function (e) {
	return Pn(e)
}
ct.hydrate = function (e, t, n) {
	if (!Uo(t)) throw Error(te(200))
	return Vo(null, e, t, !0, n)
}
ct.hydrateRoot = function (e, t, n) {
	if (!Nu(e)) throw Error(te(405))
	var r = (n != null && n.hydratedSources) || null,
		i = !1,
		o = "",
		l = Kd
	if (
		(n != null &&
			(n.unstable_strictMode === !0 && (i = !0),
			n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
			n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
		(t = Wd(t, null, e, 1, n ?? null, i, !1, o, l)),
		(e[Ut] = t.current),
		Zr(e),
		r)
	)
		for (e = 0; e < r.length; e++)
			(n = r[e]),
				(i = n._getVersion),
				(i = i(n._source)),
				t.mutableSourceEagerHydrationData == null
					? (t.mutableSourceEagerHydrationData = [n, i])
					: t.mutableSourceEagerHydrationData.push(n, i)
	return new zo(t)
}
ct.render = function (e, t, n) {
	if (!Uo(t)) throw Error(te(200))
	return Vo(null, e, t, !1, n)
}
ct.unmountComponentAtNode = function (e) {
	if (!Uo(e)) throw Error(te(40))
	return e._reactRootContainer
		? (Pn(function () {
				Vo(null, null, e, !1, function () {
					;(e._reactRootContainer = null), (e[Ut] = null)
				})
			}),
			!0)
		: !1
}
ct.unstable_batchedUpdates = wu
ct.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
	if (!Uo(n)) throw Error(te(200))
	if (e == null || e._reactInternals === void 0) throw Error(te(38))
	return Vo(e, t, n, !1, r)
}
ct.version = "18.3.1-next-f1338f8080-20240426"
function Gd() {
	if (
		!(
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
		)
	)
		try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gd)
		} catch (e) {
			console.error(e)
		}
}
Gd(), (Gf.exports = ct)
var Qd = Gf.exports,
	Gs = Qd
;(Rl.createRoot = Gs.createRoot), (Rl.hydrateRoot = Gs.hydrateRoot)
function ci({ text: e }) {
	return B.jsx("h2", {
		className:
			"mb-5 mt-14 w-full border-b-2 border-solid border-lightGrayNo pb-1 text-[1.375rem] font-bold",
		children: e
	})
}
var di = (e) => e.type === "checkbox",
	Kn = (e) => e instanceof Date,
	Qe = (e) => e == null
const Yd = (e) => typeof e == "object"
var Ie = (e) => !Qe(e) && !Array.isArray(e) && Yd(e) && !Kn(e),
	Zd = (e) =>
		Ie(e) && e.target
			? di(e.target)
				? e.target.checked
				: e.target.value
			: e,
	ay = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
	Xd = (e, t) => e.has(ay(t)),
	uy = (e) => {
		const t = e.constructor && e.constructor.prototype
		return Ie(t) && t.hasOwnProperty("isPrototypeOf")
	},
	Au =
		typeof window < "u" &&
		typeof window.HTMLElement < "u" &&
		typeof document < "u"
function Je(e) {
	let t
	const n = Array.isArray(e)
	if (e instanceof Date) t = new Date(e)
	else if (e instanceof Set) t = new Set(e)
	else if (
		!(Au && (e instanceof Blob || e instanceof FileList)) &&
		(n || Ie(e))
	)
		if (((t = n ? [] : {}), !n && !uy(e))) t = e
		else for (const r in e) e.hasOwnProperty(r) && (t[r] = Je(e[r]))
	else return e
	return t
}
var Ho = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
	Te = (e) => e === void 0,
	ne = (e, t, n) => {
		if (!t || !Ie(e)) return n
		const r = Ho(t.split(/[,[\].]+?/)).reduce(
			(i, o) => (Qe(i) ? i : i[o]),
			e
		)
		return Te(r) || r === e ? (Te(e[t]) ? n : e[t]) : r
	},
	Lt = (e) => typeof e == "boolean",
	Tu = (e) => /^\w*$/.test(e),
	Jd = (e) => Ho(e.replace(/["|']|\]/g, "").split(/\.|\[/)),
	me = (e, t, n) => {
		let r = -1
		const i = Tu(t) ? [t] : Jd(t),
			o = i.length,
			l = o - 1
		for (; ++r < o; ) {
			const h = i[r]
			let p = n
			if (r !== l) {
				const g = e[h]
				p = Ie(g) || Array.isArray(g) ? g : isNaN(+i[r + 1]) ? {} : []
			}
			if (h === "__proto__") return
			;(e[h] = p), (e = e[h])
		}
		return e
	}
const go = { BLUR: "blur", FOCUS_OUT: "focusout", CHANGE: "change" },
	St = {
		onBlur: "onBlur",
		onChange: "onChange",
		onSubmit: "onSubmit",
		onTouched: "onTouched",
		all: "all"
	},
	It = {
		max: "max",
		min: "min",
		maxLength: "maxLength",
		minLength: "minLength",
		pattern: "pattern",
		required: "required",
		validate: "validate"
	},
	sy = ye.createContext(null),
	Pu = () => ye.useContext(sy)
var eh = (e, t, n, r = !0) => {
		const i = { defaultValues: t._defaultValues }
		for (const o in e)
			Object.defineProperty(i, o, {
				get: () => {
					const l = o
					return (
						t._proxyFormState[l] !== St.all &&
							(t._proxyFormState[l] = !r || St.all),
						n && (n[l] = !0),
						e[l]
					)
				}
			})
		return i
	},
	ot = (e) => Ie(e) && !Object.keys(e).length,
	th = (e, t, n, r) => {
		n(e)
		const { name: i, ...o } = e
		return (
			ot(o) ||
			Object.keys(o).length >= Object.keys(t).length ||
			Object.keys(o).find((l) => t[l] === (!r || St.all))
		)
	},
	$r = (e) => (Array.isArray(e) ? e : [e]),
	nh = (e, t, n) =>
		!e ||
		!t ||
		e === t ||
		$r(e).some(
			(r) => r && (n ? r === t : r.startsWith(t) || t.startsWith(r))
		)
function ju(e) {
	const t = ye.useRef(e)
	;(t.current = e),
		ye.useEffect(() => {
			const n =
				!e.disabled &&
				t.current.subject &&
				t.current.subject.subscribe({ next: t.current.next })
			return () => {
				n && n.unsubscribe()
			}
		}, [e.disabled])
}
function fy(e) {
	const t = Pu(),
		{ control: n = t.control, disabled: r, name: i, exact: o } = e || {},
		[l, h] = ye.useState(n._formState),
		p = ye.useRef(!0),
		g = ye.useRef({
			isDirty: !1,
			isLoading: !1,
			dirtyFields: !1,
			touchedFields: !1,
			validatingFields: !1,
			isValidating: !1,
			isValid: !1,
			errors: !1
		}),
		y = ye.useRef(i)
	return (
		(y.current = i),
		ju({
			disabled: r,
			next: (f) =>
				p.current &&
				nh(y.current, f.name, o) &&
				th(f, g.current, n._updateFormState) &&
				h({ ...n._formState, ...f }),
			subject: n._subjects.state
		}),
		ye.useEffect(
			() => (
				(p.current = !0),
				g.current.isValid && n._updateValid(!0),
				() => {
					p.current = !1
				}
			),
			[n]
		),
		eh(l, n, g.current, !1)
	)
}
var Ct = (e) => typeof e == "string",
	rh = (e, t, n, r, i) =>
		Ct(e)
			? (r && t.watch.add(e), ne(n, e, i))
			: Array.isArray(e)
				? e.map((o) => (r && t.watch.add(o), ne(n, o)))
				: (r && (t.watchAll = !0), n)
function cy(e) {
	const t = Pu(),
		{
			control: n = t.control,
			name: r,
			defaultValue: i,
			disabled: o,
			exact: l
		} = e || {},
		h = ye.useRef(r)
	;(h.current = r),
		ju({
			disabled: o,
			subject: n._subjects.values,
			next: (y) => {
				nh(h.current, y.name, l) &&
					g(
						Je(
							rh(
								h.current,
								n._names,
								y.values || n._formValues,
								!1,
								i
							)
						)
					)
			}
		})
	const [p, g] = ye.useState(n._getWatch(r, i))
	return ye.useEffect(() => n._removeUnmounted()), p
}
function dy(e) {
	const t = Pu(),
		{
			name: n,
			disabled: r,
			control: i = t.control,
			shouldUnregister: o
		} = e,
		l = Xd(i._names.array, n),
		h = cy({
			control: i,
			name: n,
			defaultValue: ne(
				i._formValues,
				n,
				ne(i._defaultValues, n, e.defaultValue)
			),
			exact: !0
		}),
		p = fy({ control: i, name: n }),
		g = ye.useRef(
			i.register(n, {
				...e.rules,
				value: h,
				...(Lt(e.disabled) ? { disabled: e.disabled } : {})
			})
		)
	return (
		ye.useEffect(() => {
			const y = i._options.shouldUnregister || o,
				f = (u, c) => {
					const _ = ne(i._fields, u)
					_ && _._f && (_._f.mount = c)
				}
			if ((f(n, !0), y)) {
				const u = Je(ne(i._options.defaultValues, n))
				me(i._defaultValues, n, u),
					Te(ne(i._formValues, n)) && me(i._formValues, n, u)
			}
			return () => {
				;(l ? y && !i._state.action : y) ? i.unregister(n) : f(n, !1)
			}
		}, [n, i, l, o]),
		ye.useEffect(() => {
			ne(i._fields, n) &&
				i._updateDisabledField({
					disabled: r,
					fields: i._fields,
					name: n,
					value: ne(i._fields, n)._f.value
				})
		}, [r, n, i]),
		{
			field: {
				name: n,
				value: h,
				...(Lt(r) || p.disabled ? { disabled: p.disabled || r } : {}),
				onChange: ye.useCallback(
					(y) =>
						g.current.onChange({
							target: { value: Zd(y), name: n },
							type: go.CHANGE
						}),
					[n]
				),
				onBlur: ye.useCallback(
					() =>
						g.current.onBlur({
							target: { value: ne(i._formValues, n), name: n },
							type: go.BLUR
						}),
					[n, i]
				),
				ref: (y) => {
					const f = ne(i._fields, n)
					f &&
						y &&
						(f._f.ref = {
							focus: () => y.focus(),
							select: () => y.select(),
							setCustomValidity: (u) => y.setCustomValidity(u),
							reportValidity: () => y.reportValidity()
						})
				}
			},
			formState: p,
			fieldState: Object.defineProperties(
				{},
				{
					invalid: { enumerable: !0, get: () => !!ne(p.errors, n) },
					isDirty: {
						enumerable: !0,
						get: () => !!ne(p.dirtyFields, n)
					},
					isTouched: {
						enumerable: !0,
						get: () => !!ne(p.touchedFields, n)
					},
					isValidating: {
						enumerable: !0,
						get: () => !!ne(p.validatingFields, n)
					},
					error: { enumerable: !0, get: () => ne(p.errors, n) }
				}
			)
		}
	)
}
const ih = (e) => e.render(dy(e))
var hy = (e, t, n, r, i) =>
		t
			? {
					...n[e],
					types: {
						...(n[e] && n[e].types ? n[e].types : {}),
						[r]: i || !0
					}
				}
			: {},
	Qs = (e) => ({
		isOnSubmit: !e || e === St.onSubmit,
		isOnBlur: e === St.onBlur,
		isOnChange: e === St.onChange,
		isOnAll: e === St.all,
		isOnTouch: e === St.onTouched
	}),
	Ys = (e, t, n) =>
		!n &&
		(t.watchAll ||
			t.watch.has(e) ||
			[...t.watch].some(
				(r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length))
			))
const zr = (e, t, n, r) => {
	for (const i of n || Object.keys(e)) {
		const o = ne(e, i)
		if (o) {
			const { _f: l, ...h } = o
			if (l) {
				if (l.refs && l.refs[0] && t(l.refs[0], i) && !r) break
				if (l.ref && t(l.ref, l.name) && !r) break
				zr(h, t)
			} else Ie(h) && zr(h, t)
		}
	}
}
var py = (e, t, n) => {
		const r = $r(ne(e, n))
		return me(r, "root", t[n]), me(e, n, r), e
	},
	Lu = (e) => e.type === "file",
	tn = (e) => typeof e == "function",
	_o = (e) => {
		if (!Au) return !1
		const t = e ? e.ownerDocument : 0
		return (
			e instanceof
			(t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
		)
	},
	Wi = (e) => Ct(e),
	Cu = (e) => e.type === "radio",
	wo = (e) => e instanceof RegExp
const Zs = { value: !1, isValid: !1 },
	Xs = { value: !0, isValid: !0 }
var oh = (e) => {
	if (Array.isArray(e)) {
		if (e.length > 1) {
			const t = e
				.filter((n) => n && n.checked && !n.disabled)
				.map((n) => n.value)
			return { value: t, isValid: !!t.length }
		}
		return e[0].checked && !e[0].disabled
			? e[0].attributes && !Te(e[0].attributes.value)
				? Te(e[0].value) || e[0].value === ""
					? Xs
					: { value: e[0].value, isValid: !0 }
				: Xs
			: Zs
	}
	return Zs
}
const Js = { isValid: !1, value: null }
var lh = (e) =>
	Array.isArray(e)
		? e.reduce(
				(t, n) =>
					n && n.checked && !n.disabled
						? { isValid: !0, value: n.value }
						: t,
				Js
			)
		: Js
function ef(e, t, n = "validate") {
	if (Wi(e) || (Array.isArray(e) && e.every(Wi)) || (Lt(e) && !e))
		return { type: n, message: Wi(e) ? e : "", ref: t }
}
var Dn = (e) => (Ie(e) && !wo(e) ? e : { value: e, message: "" }),
	tf = async (e, t, n, r, i) => {
		const {
				ref: o,
				refs: l,
				required: h,
				maxLength: p,
				minLength: g,
				min: y,
				max: f,
				pattern: u,
				validate: c,
				name: _,
				valueAsNumber: m,
				mount: w,
				disabled: s
			} = e._f,
			a = ne(t, _)
		if (!w || s) return {}
		const v = l ? l[0] : o,
			d = (S) => {
				r &&
					v.reportValidity &&
					(v.setCustomValidity(Lt(S) ? "" : S || ""),
					v.reportValidity())
			},
			E = {},
			N = Cu(o),
			k = di(o),
			O = N || k,
			j =
				((m || Lu(o)) && Te(o.value) && Te(a)) ||
				(_o(o) && o.value === "") ||
				a === "" ||
				(Array.isArray(a) && !a.length),
			x = hy.bind(null, _, n, E),
			b = (S, A, L, M = It.maxLength, U = It.minLength) => {
				const V = S ? A : L
				E[_] = {
					type: S ? M : U,
					message: V,
					ref: o,
					...x(S ? M : U, V)
				}
			}
		if (
			i
				? !Array.isArray(a) || !a.length
				: h &&
					((!O && (j || Qe(a))) ||
						(Lt(a) && !a) ||
						(k && !oh(l).isValid) ||
						(N && !lh(l).isValid))
		) {
			const { value: S, message: A } = Wi(h)
				? { value: !!h, message: h }
				: Dn(h)
			if (
				S &&
				((E[_] = {
					type: It.required,
					message: A,
					ref: v,
					...x(It.required, A)
				}),
				!n)
			)
				return d(A), E
		}
		if (!j && (!Qe(y) || !Qe(f))) {
			let S, A
			const L = Dn(f),
				M = Dn(y)
			if (!Qe(a) && !isNaN(a)) {
				const U = o.valueAsNumber || (a && +a)
				Qe(L.value) || (S = U > L.value),
					Qe(M.value) || (A = U < M.value)
			} else {
				const U = o.valueAsDate || new Date(a),
					V = (R) => new Date(new Date().toDateString() + " " + R),
					G = o.type == "time",
					q = o.type == "week"
				Ct(L.value) &&
					a &&
					(S = G
						? V(a) > V(L.value)
						: q
							? a > L.value
							: U > new Date(L.value)),
					Ct(M.value) &&
						a &&
						(A = G
							? V(a) < V(M.value)
							: q
								? a < M.value
								: U < new Date(M.value))
			}
			if ((S || A) && (b(!!S, L.message, M.message, It.max, It.min), !n))
				return d(E[_].message), E
		}
		if ((p || g) && !j && (Ct(a) || (i && Array.isArray(a)))) {
			const S = Dn(p),
				A = Dn(g),
				L = !Qe(S.value) && a.length > +S.value,
				M = !Qe(A.value) && a.length < +A.value
			if ((L || M) && (b(L, S.message, A.message), !n))
				return d(E[_].message), E
		}
		if (u && !j && Ct(a)) {
			const { value: S, message: A } = Dn(u)
			if (
				wo(S) &&
				!a.match(S) &&
				((E[_] = {
					type: It.pattern,
					message: A,
					ref: o,
					...x(It.pattern, A)
				}),
				!n)
			)
				return d(A), E
		}
		if (c) {
			if (tn(c)) {
				const S = await c(a, t),
					A = ef(S, v)
				if (A && ((E[_] = { ...A, ...x(It.validate, A.message) }), !n))
					return d(A.message), E
			} else if (Ie(c)) {
				let S = {}
				for (const A in c) {
					if (!ot(S) && !n) break
					const L = ef(await c[A](a, t), v, A)
					L &&
						((S = { ...L, ...x(A, L.message) }),
						d(L.message),
						n && (E[_] = S))
				}
				if (!ot(S) && ((E[_] = { ref: v, ...S }), !n)) return E
			}
		}
		return d(!0), E
	}
function vy(e, t) {
	const n = t.slice(0, -1).length
	let r = 0
	for (; r < n; ) e = Te(e) ? r++ : e[t[r++]]
	return e
}
function yy(e) {
	for (const t in e) if (e.hasOwnProperty(t) && !Te(e[t])) return !1
	return !0
}
function Ce(e, t) {
	const n = Array.isArray(t) ? t : Tu(t) ? [t] : Jd(t),
		r = n.length === 1 ? e : vy(e, n),
		i = n.length - 1,
		o = n[i]
	return (
		r && delete r[o],
		i !== 0 &&
			((Ie(r) && ot(r)) || (Array.isArray(r) && yy(r))) &&
			Ce(e, n.slice(0, -1)),
		e
	)
}
var Nl = () => {
		let e = []
		return {
			get observers() {
				return e
			},
			next: (i) => {
				for (const o of e) o.next && o.next(i)
			},
			subscribe: (i) => (
				e.push(i),
				{
					unsubscribe: () => {
						e = e.filter((o) => o !== i)
					}
				}
			),
			unsubscribe: () => {
				e = []
			}
		}
	},
	Eo = (e) => Qe(e) || !Yd(e)
function xn(e, t) {
	if (Eo(e) || Eo(t)) return e === t
	if (Kn(e) && Kn(t)) return e.getTime() === t.getTime()
	const n = Object.keys(e),
		r = Object.keys(t)
	if (n.length !== r.length) return !1
	for (const i of n) {
		const o = e[i]
		if (!r.includes(i)) return !1
		if (i !== "ref") {
			const l = t[i]
			if (
				(Kn(o) && Kn(l)) ||
				(Ie(o) && Ie(l)) ||
				(Array.isArray(o) && Array.isArray(l))
					? !xn(o, l)
					: o !== l
			)
				return !1
		}
	}
	return !0
}
var ah = (e) => e.type === "select-multiple",
	my = (e) => Cu(e) || di(e),
	Al = (e) => _o(e) && e.isConnected,
	uh = (e) => {
		for (const t in e) if (tn(e[t])) return !0
		return !1
	}
function bo(e, t = {}) {
	const n = Array.isArray(e)
	if (Ie(e) || n)
		for (const r in e)
			Array.isArray(e[r]) || (Ie(e[r]) && !uh(e[r]))
				? ((t[r] = Array.isArray(e[r]) ? [] : {}), bo(e[r], t[r]))
				: Qe(e[r]) || (t[r] = !0)
	return t
}
function sh(e, t, n) {
	const r = Array.isArray(e)
	if (Ie(e) || r)
		for (const i in e)
			Array.isArray(e[i]) || (Ie(e[i]) && !uh(e[i]))
				? Te(t) || Eo(n[i])
					? (n[i] = Array.isArray(e[i])
							? bo(e[i], [])
							: { ...bo(e[i]) })
					: sh(e[i], Qe(t) ? {} : t[i], n[i])
				: (n[i] = !xn(e[i], t[i]))
	return n
}
var ji = (e, t) => sh(e, t, bo(t)),
	fh = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) =>
		Te(e)
			? e
			: t
				? e === ""
					? NaN
					: e && +e
				: n && Ct(e)
					? new Date(e)
					: r
						? r(e)
						: e
function Tl(e) {
	const t = e.ref
	if (!(e.refs ? e.refs.every((n) => n.disabled) : t.disabled))
		return Lu(t)
			? t.files
			: Cu(t)
				? lh(e.refs).value
				: ah(t)
					? [...t.selectedOptions].map(({ value: n }) => n)
					: di(t)
						? oh(e.refs).value
						: fh(Te(t.value) ? e.ref.value : t.value, e)
}
var gy = (e, t, n, r) => {
		const i = {}
		for (const o of e) {
			const l = ne(t, o)
			l && me(i, o, l._f)
		}
		return {
			criteriaMode: n,
			names: [...e],
			fields: i,
			shouldUseNativeValidation: r
		}
	},
	kr = (e) =>
		Te(e)
			? e
			: wo(e)
				? e.source
				: Ie(e)
					? wo(e.value)
						? e.value.source
						: e.value
					: e,
	_y = (e) =>
		e.mount &&
		(e.required ||
			e.min ||
			e.max ||
			e.maxLength ||
			e.minLength ||
			e.pattern ||
			e.validate)
function nf(e, t, n) {
	const r = ne(e, n)
	if (r || Tu(n)) return { error: r, name: n }
	const i = n.split(".")
	for (; i.length; ) {
		const o = i.join("."),
			l = ne(t, o),
			h = ne(e, o)
		if (l && !Array.isArray(l) && n !== o) return { name: n }
		if (h && h.type) return { name: o, error: h }
		i.pop()
	}
	return { name: n }
}
var wy = (e, t, n, r, i) =>
		i.isOnAll
			? !1
			: !n && i.isOnTouch
				? !(t || e)
				: (n ? r.isOnBlur : i.isOnBlur)
					? !e
					: (n ? r.isOnChange : i.isOnChange)
						? e
						: !0,
	Ey = (e, t) => !Ho(ne(e, t)).length && Ce(e, t)
const by = {
	mode: St.onSubmit,
	reValidateMode: St.onChange,
	shouldFocusError: !0
}
function xy(e = {}) {
	let t = { ...by, ...e },
		n = {
			submitCount: 0,
			isDirty: !1,
			isLoading: tn(t.defaultValues),
			isValidating: !1,
			isSubmitted: !1,
			isSubmitting: !1,
			isSubmitSuccessful: !1,
			isValid: !1,
			touchedFields: {},
			dirtyFields: {},
			validatingFields: {},
			errors: t.errors || {},
			disabled: t.disabled || !1
		},
		r = {},
		i =
			Ie(t.defaultValues) || Ie(t.values)
				? Je(t.defaultValues || t.values) || {}
				: {},
		o = t.shouldUnregister ? {} : Je(i),
		l = { action: !1, mount: !1, watch: !1 },
		h = {
			mount: new Set(),
			unMount: new Set(),
			array: new Set(),
			watch: new Set()
		},
		p,
		g = 0
	const y = {
			isDirty: !1,
			dirtyFields: !1,
			validatingFields: !1,
			touchedFields: !1,
			isValidating: !1,
			isValid: !1,
			errors: !1
		},
		f = { values: Nl(), array: Nl(), state: Nl() },
		u = Qs(t.mode),
		c = Qs(t.reValidateMode),
		_ = t.criteriaMode === St.all,
		m = (P) => (I) => {
			clearTimeout(g), (g = setTimeout(P, I))
		},
		w = async (P) => {
			if (y.isValid || P) {
				const I = t.resolver ? ot((await O()).errors) : await x(r, !0)
				I !== n.isValid && f.state.next({ isValid: I })
			}
		},
		s = (P, I) => {
			;(y.isValidating || y.validatingFields) &&
				((P || Array.from(h.mount)).forEach((z) => {
					z &&
						(I
							? me(n.validatingFields, z, I)
							: Ce(n.validatingFields, z))
				}),
				f.state.next({
					validatingFields: n.validatingFields,
					isValidating: !ot(n.validatingFields)
				}))
		},
		a = (P, I = [], z, Z, W = !0, X = !0) => {
			if (Z && z) {
				if (((l.action = !0), X && Array.isArray(ne(r, P)))) {
					const ee = z(ne(r, P), Z.argA, Z.argB)
					W && me(r, P, ee)
				}
				if (X && Array.isArray(ne(n.errors, P))) {
					const ee = z(ne(n.errors, P), Z.argA, Z.argB)
					W && me(n.errors, P, ee), Ey(n.errors, P)
				}
				if (
					y.touchedFields &&
					X &&
					Array.isArray(ne(n.touchedFields, P))
				) {
					const ee = z(ne(n.touchedFields, P), Z.argA, Z.argB)
					W && me(n.touchedFields, P, ee)
				}
				y.dirtyFields && (n.dirtyFields = ji(i, o)),
					f.state.next({
						name: P,
						isDirty: S(P, I),
						dirtyFields: n.dirtyFields,
						errors: n.errors,
						isValid: n.isValid
					})
			} else me(o, P, I)
		},
		v = (P, I) => {
			me(n.errors, P, I), f.state.next({ errors: n.errors })
		},
		d = (P) => {
			;(n.errors = P), f.state.next({ errors: n.errors, isValid: !1 })
		},
		E = (P, I, z, Z) => {
			const W = ne(r, P)
			if (W) {
				const X = ne(o, P, Te(z) ? ne(i, P) : z)
				Te(X) || (Z && Z.defaultChecked) || I
					? me(o, P, I ? X : Tl(W._f))
					: M(P, X),
					l.mount && w()
			}
		},
		N = (P, I, z, Z, W) => {
			let X = !1,
				ee = !1
			const ie = { name: P },
				ce = !!(ne(r, P) && ne(r, P)._f && ne(r, P)._f.disabled)
			if (!z || Z) {
				y.isDirty &&
					((ee = n.isDirty),
					(n.isDirty = ie.isDirty = S()),
					(X = ee !== ie.isDirty))
				const Se = ce || xn(ne(i, P), I)
				;(ee = !!(!ce && ne(n.dirtyFields, P))),
					Se || ce ? Ce(n.dirtyFields, P) : me(n.dirtyFields, P, !0),
					(ie.dirtyFields = n.dirtyFields),
					(X = X || (y.dirtyFields && ee !== !Se))
			}
			if (z) {
				const Se = ne(n.touchedFields, P)
				Se ||
					(me(n.touchedFields, P, z),
					(ie.touchedFields = n.touchedFields),
					(X = X || (y.touchedFields && Se !== z)))
			}
			return X && W && f.state.next(ie), X ? ie : {}
		},
		k = (P, I, z, Z) => {
			const W = ne(n.errors, P),
				X = y.isValid && Lt(I) && n.isValid !== I
			if (
				(e.delayError && z
					? ((p = m(() => v(P, z))), p(e.delayError))
					: (clearTimeout(g),
						(p = null),
						z ? me(n.errors, P, z) : Ce(n.errors, P)),
				(z ? !xn(W, z) : W) || !ot(Z) || X)
			) {
				const ee = {
					...Z,
					...(X && Lt(I) ? { isValid: I } : {}),
					errors: n.errors,
					name: P
				}
				;(n = { ...n, ...ee }), f.state.next(ee)
			}
		},
		O = async (P) => {
			s(P, !0)
			const I = await t.resolver(
				o,
				t.context,
				gy(P || h.mount, r, t.criteriaMode, t.shouldUseNativeValidation)
			)
			return s(P), I
		},
		j = async (P) => {
			const { errors: I } = await O(P)
			if (P)
				for (const z of P) {
					const Z = ne(I, z)
					Z ? me(n.errors, z, Z) : Ce(n.errors, z)
				}
			else n.errors = I
			return I
		},
		x = async (P, I, z = { valid: !0 }) => {
			for (const Z in P) {
				const W = P[Z]
				if (W) {
					const { _f: X, ...ee } = W
					if (X) {
						const ie = h.array.has(X.name)
						s([Z], !0)
						const ce = await tf(
							W,
							o,
							_,
							t.shouldUseNativeValidation && !I,
							ie
						)
						if ((s([Z]), ce[X.name] && ((z.valid = !1), I))) break
						!I &&
							(ne(ce, X.name)
								? ie
									? py(n.errors, ce, X.name)
									: me(n.errors, X.name, ce[X.name])
								: Ce(n.errors, X.name))
					}
					ee && (await x(ee, I, z))
				}
			}
			return z.valid
		},
		b = () => {
			for (const P of h.unMount) {
				const I = ne(r, P)
				I &&
					(I._f.refs
						? I._f.refs.every((z) => !Al(z))
						: !Al(I._f.ref)) &&
					C(P)
			}
			h.unMount = new Set()
		},
		S = (P, I) => (P && I && me(o, P, I), !xn(T(), i)),
		A = (P, I, z) =>
			rh(
				P,
				h,
				{ ...(l.mount ? o : Te(I) ? i : Ct(P) ? { [P]: I } : I) },
				z,
				I
			),
		L = (P) =>
			Ho(ne(l.mount ? o : i, P, e.shouldUnregister ? ne(i, P, []) : [])),
		M = (P, I, z = {}) => {
			const Z = ne(r, P)
			let W = I
			if (Z) {
				const X = Z._f
				X &&
					(!X.disabled && me(o, P, fh(I, X)),
					(W = _o(X.ref) && Qe(I) ? "" : I),
					ah(X.ref)
						? [...X.ref.options].forEach(
								(ee) => (ee.selected = W.includes(ee.value))
							)
						: X.refs
							? di(X.ref)
								? X.refs.length > 1
									? X.refs.forEach(
											(ee) =>
												(!ee.defaultChecked ||
													!ee.disabled) &&
												(ee.checked = Array.isArray(W)
													? !!W.find(
															(ie) =>
																ie === ee.value
														)
													: W === ee.value)
										)
									: X.refs[0] && (X.refs[0].checked = !!W)
								: X.refs.forEach(
										(ee) => (ee.checked = ee.value === W)
									)
							: Lu(X.ref)
								? (X.ref.value = "")
								: ((X.ref.value = W),
									X.ref.type ||
										f.values.next({
											name: P,
											values: { ...o }
										})))
			}
			;(z.shouldDirty || z.shouldTouch) &&
				N(P, W, z.shouldTouch, z.shouldDirty, !0),
				z.shouldValidate && R(P)
		},
		U = (P, I, z) => {
			for (const Z in I) {
				const W = I[Z],
					X = `${P}.${Z}`,
					ee = ne(r, X)
				;(h.array.has(P) || !Eo(W) || (ee && !ee._f)) && !Kn(W)
					? U(X, W, z)
					: M(X, W, z)
			}
		},
		V = (P, I, z = {}) => {
			const Z = ne(r, P),
				W = h.array.has(P),
				X = Je(I)
			me(o, P, X),
				W
					? (f.array.next({ name: P, values: { ...o } }),
						(y.isDirty || y.dirtyFields) &&
							z.shouldDirty &&
							f.state.next({
								name: P,
								dirtyFields: ji(i, o),
								isDirty: S(P, X)
							}))
					: Z && !Z._f && !Qe(X)
						? U(P, X, z)
						: M(P, X, z),
				Ys(P, h) && f.state.next({ ...n }),
				f.values.next({ name: l.mount ? P : void 0, values: { ...o } })
		},
		G = async (P) => {
			l.mount = !0
			const I = P.target
			let z = I.name,
				Z = !0
			const W = ne(r, z),
				X = () => (I.type ? Tl(W._f) : Zd(P)),
				ee = (ie) => {
					Z = Number.isNaN(ie) || ie === ne(o, z, ie)
				}
			if (W) {
				let ie, ce
				const Se = X(),
					pe = P.type === go.BLUR || P.type === go.FOCUS_OUT,
					el =
						(!_y(W._f) &&
							!t.resolver &&
							!ne(n.errors, z) &&
							!W._f.deps) ||
						wy(pe, ne(n.touchedFields, z), n.isSubmitted, c, u),
					be = Ys(z, h, pe)
				me(o, z, Se),
					pe
						? (W._f.onBlur && W._f.onBlur(P), p && p(0))
						: W._f.onChange && W._f.onChange(P)
				const ht = N(z, Se, pe, !1),
					Dh = !ot(ht) || be
				if (
					(!pe &&
						f.values.next({
							name: z,
							type: P.type,
							values: { ...o }
						}),
					el)
				)
					return (
						y.isValid && w(),
						Dh && f.state.next({ name: z, ...(be ? {} : ht) })
					)
				if ((!pe && be && f.state.next({ ...n }), t.resolver)) {
					const { errors: Fu } = await O([z])
					if ((ee(Se), Z)) {
						const Rh = nf(n.errors, r, z),
							Bu = nf(Fu, r, Rh.name || z)
						;(ie = Bu.error), (z = Bu.name), (ce = ot(Fu))
					}
				} else
					s([z], !0),
						(ie = (await tf(W, o, _, t.shouldUseNativeValidation))[
							z
						]),
						s([z]),
						ee(Se),
						Z &&
							(ie
								? (ce = !1)
								: y.isValid && (ce = await x(r, !0)))
				Z && (W._f.deps && R(W._f.deps), k(z, ce, ie, ht))
			}
		},
		q = (P, I) => {
			if (ne(n.errors, I) && P.focus) return P.focus(), 1
		},
		R = async (P, I = {}) => {
			let z, Z
			const W = $r(P)
			if (t.resolver) {
				const X = await j(Te(P) ? P : W)
				;(z = ot(X)), (Z = P ? !W.some((ee) => ne(X, ee)) : z)
			} else
				P
					? ((Z = (
							await Promise.all(
								W.map(async (X) => {
									const ee = ne(r, X)
									return await x(
										ee && ee._f ? { [X]: ee } : ee
									)
								})
							)
						).every(Boolean)),
						!(!Z && !n.isValid) && w())
					: (Z = z = await x(r))
			return (
				f.state.next({
					...(!Ct(P) || (y.isValid && z !== n.isValid)
						? {}
						: { name: P }),
					...(t.resolver || !P ? { isValid: z } : {}),
					errors: n.errors
				}),
				I.shouldFocus && !Z && zr(r, q, P ? W : h.mount),
				Z
			)
		},
		T = (P) => {
			const I = { ...(l.mount ? o : i) }
			return Te(P) ? I : Ct(P) ? ne(I, P) : P.map((z) => ne(I, z))
		},
		D = (P, I) => ({
			invalid: !!ne((I || n).errors, P),
			isDirty: !!ne((I || n).dirtyFields, P),
			error: ne((I || n).errors, P),
			isValidating: !!ne(n.validatingFields, P),
			isTouched: !!ne((I || n).touchedFields, P)
		}),
		F = (P) => {
			P && $r(P).forEach((I) => Ce(n.errors, I)),
				f.state.next({ errors: P ? n.errors : {} })
		},
		K = (P, I, z) => {
			const Z = (ne(r, P, { _f: {} })._f || {}).ref,
				W = ne(n.errors, P) || {},
				{ ref: X, message: ee, type: ie, ...ce } = W
			me(n.errors, P, { ...ce, ...I, ref: Z }),
				f.state.next({ name: P, errors: n.errors, isValid: !1 }),
				z && z.shouldFocus && Z && Z.focus && Z.focus()
		},
		H = (P, I) =>
			tn(P)
				? f.values.subscribe({ next: (z) => P(A(void 0, I), z) })
				: A(P, I, !0),
		C = (P, I = {}) => {
			for (const z of P ? $r(P) : h.mount)
				h.mount.delete(z),
					h.array.delete(z),
					I.keepValue || (Ce(r, z), Ce(o, z)),
					!I.keepError && Ce(n.errors, z),
					!I.keepDirty && Ce(n.dirtyFields, z),
					!I.keepTouched && Ce(n.touchedFields, z),
					!I.keepIsValidating && Ce(n.validatingFields, z),
					!t.shouldUnregister && !I.keepDefaultValue && Ce(i, z)
			f.values.next({ values: { ...o } }),
				f.state.next({
					...n,
					...(I.keepDirty ? { isDirty: S() } : {})
				}),
				!I.keepIsValid && w()
		},
		$ = ({ disabled: P, name: I, field: z, fields: Z, value: W }) => {
			if ((Lt(P) && l.mount) || P) {
				const X = P ? void 0 : Te(W) ? Tl(z ? z._f : ne(Z, I)._f) : W
				me(o, I, X), N(I, X, !1, !1, !0)
			}
		},
		Q = (P, I = {}) => {
			let z = ne(r, P)
			const Z = Lt(I.disabled)
			return (
				me(r, P, {
					...(z || {}),
					_f: {
						...(z && z._f ? z._f : { ref: { name: P } }),
						name: P,
						mount: !0,
						...I
					}
				}),
				h.mount.add(P),
				z
					? $({
							field: z,
							disabled: I.disabled,
							name: P,
							value: I.value
						})
					: E(P, !0, I.value),
				{
					...(Z ? { disabled: I.disabled } : {}),
					...(t.progressive
						? {
								required: !!I.required,
								min: kr(I.min),
								max: kr(I.max),
								minLength: kr(I.minLength),
								maxLength: kr(I.maxLength),
								pattern: kr(I.pattern)
							}
						: {}),
					name: P,
					onChange: G,
					onBlur: G,
					ref: (W) => {
						if (W) {
							Q(P, I), (z = ne(r, P))
							const X =
									(Te(W.value) &&
										W.querySelectorAll &&
										W.querySelectorAll(
											"input,select,textarea"
										)[0]) ||
									W,
								ee = my(X),
								ie = z._f.refs || []
							if (ee ? ie.find((ce) => ce === X) : X === z._f.ref)
								return
							me(r, P, {
								_f: {
									...z._f,
									...(ee
										? {
												refs: [
													...ie.filter(Al),
													X,
													...(Array.isArray(ne(i, P))
														? [{}]
														: [])
												],
												ref: { type: X.type, name: P }
											}
										: { ref: X })
								}
							}),
								E(P, !1, void 0, X)
						} else
							(z = ne(r, P, {})),
								z._f && (z._f.mount = !1),
								(t.shouldUnregister || I.shouldUnregister) &&
									!(Xd(h.array, P) && l.action) &&
									h.unMount.add(P)
					}
				}
			)
		},
		Y = () => t.shouldFocusError && zr(r, q, h.mount),
		J = (P) => {
			Lt(P) &&
				(f.state.next({ disabled: P }),
				zr(
					r,
					(I, z) => {
						const Z = ne(r, z)
						Z &&
							((I.disabled = Z._f.disabled || P),
							Array.isArray(Z._f.refs) &&
								Z._f.refs.forEach((W) => {
									W.disabled = Z._f.disabled || P
								}))
					},
					0,
					!1
				))
		},
		re = (P, I) => async (z) => {
			let Z
			z &&
				(z.preventDefault && z.preventDefault(),
				z.persist && z.persist())
			let W = Je(o)
			if ((f.state.next({ isSubmitting: !0 }), t.resolver)) {
				const { errors: X, values: ee } = await O()
				;(n.errors = X), (W = ee)
			} else await x(r)
			if ((Ce(n.errors, "root"), ot(n.errors))) {
				f.state.next({ errors: {} })
				try {
					await P(W, z)
				} catch (X) {
					Z = X
				}
			} else I && (await I({ ...n.errors }, z)), Y(), setTimeout(Y)
			if (
				(f.state.next({
					isSubmitted: !0,
					isSubmitting: !1,
					isSubmitSuccessful: ot(n.errors) && !Z,
					submitCount: n.submitCount + 1,
					errors: n.errors
				}),
				Z)
			)
				throw Z
		},
		le = (P, I = {}) => {
			ne(r, P) &&
				(Te(I.defaultValue)
					? V(P, Je(ne(i, P)))
					: (V(P, I.defaultValue), me(i, P, Je(I.defaultValue))),
				I.keepTouched || Ce(n.touchedFields, P),
				I.keepDirty ||
					(Ce(n.dirtyFields, P),
					(n.isDirty = I.defaultValue ? S(P, Je(ne(i, P))) : S())),
				I.keepError || (Ce(n.errors, P), y.isValid && w()),
				f.state.next({ ...n }))
		},
		ae = (P, I = {}) => {
			const z = P ? Je(P) : i,
				Z = Je(z),
				W = ot(P),
				X = W ? i : Z
			if ((I.keepDefaultValues || (i = z), !I.keepValues)) {
				if (I.keepDirtyValues)
					for (const ee of h.mount)
						ne(n.dirtyFields, ee)
							? me(X, ee, ne(o, ee))
							: V(ee, ne(X, ee))
				else {
					if (Au && Te(P))
						for (const ee of h.mount) {
							const ie = ne(r, ee)
							if (ie && ie._f) {
								const ce = Array.isArray(ie._f.refs)
									? ie._f.refs[0]
									: ie._f.ref
								if (_o(ce)) {
									const Se = ce.closest("form")
									if (Se) {
										Se.reset()
										break
									}
								}
							}
						}
					r = {}
				}
				;(o = e.shouldUnregister
					? I.keepDefaultValues
						? Je(i)
						: {}
					: Je(X)),
					f.array.next({ values: { ...X } }),
					f.values.next({ values: { ...X } })
			}
			;(h = {
				mount: I.keepDirtyValues ? h.mount : new Set(),
				unMount: new Set(),
				array: new Set(),
				watch: new Set(),
				watchAll: !1,
				focus: ""
			}),
				(l.mount =
					!y.isValid || !!I.keepIsValid || !!I.keepDirtyValues),
				(l.watch = !!e.shouldUnregister),
				f.state.next({
					submitCount: I.keepSubmitCount ? n.submitCount : 0,
					isDirty: W
						? !1
						: I.keepDirty
							? n.isDirty
							: !!(I.keepDefaultValues && !xn(P, i)),
					isSubmitted: I.keepIsSubmitted ? n.isSubmitted : !1,
					dirtyFields: W
						? {}
						: I.keepDirtyValues
							? I.keepDefaultValues && o
								? ji(i, o)
								: n.dirtyFields
							: I.keepDefaultValues && P
								? ji(i, P)
								: I.keepDirty
									? n.dirtyFields
									: {},
					touchedFields: I.keepTouched ? n.touchedFields : {},
					errors: I.keepErrors ? n.errors : {},
					isSubmitSuccessful: I.keepIsSubmitSuccessful
						? n.isSubmitSuccessful
						: !1,
					isSubmitting: !1
				})
		},
		ue = (P, I) => ae(tn(P) ? P(o) : P, I)
	return {
		control: {
			register: Q,
			unregister: C,
			getFieldState: D,
			handleSubmit: re,
			setError: K,
			_executeSchema: O,
			_getWatch: A,
			_getDirty: S,
			_updateValid: w,
			_removeUnmounted: b,
			_updateFieldArray: a,
			_updateDisabledField: $,
			_getFieldArray: L,
			_reset: ae,
			_resetDefaultValues: () =>
				tn(t.defaultValues) &&
				t.defaultValues().then((P) => {
					ue(P, t.resetOptions), f.state.next({ isLoading: !1 })
				}),
			_updateFormState: (P) => {
				n = { ...n, ...P }
			},
			_disableForm: J,
			_subjects: f,
			_proxyFormState: y,
			_setErrors: d,
			get _fields() {
				return r
			},
			get _formValues() {
				return o
			},
			get _state() {
				return l
			},
			set _state(P) {
				l = P
			},
			get _defaultValues() {
				return i
			},
			get _names() {
				return h
			},
			set _names(P) {
				h = P
			},
			get _formState() {
				return n
			},
			set _formState(P) {
				n = P
			},
			get _options() {
				return t
			},
			set _options(P) {
				t = { ...t, ...P }
			}
		},
		trigger: R,
		register: Q,
		handleSubmit: re,
		watch: H,
		setValue: V,
		getValues: T,
		reset: ue,
		resetField: le,
		clearErrors: F,
		unregister: C,
		setError: K,
		setFocus: (P, I = {}) => {
			const z = ne(r, P),
				Z = z && z._f
			if (Z) {
				const W = Z.refs ? Z.refs[0] : Z.ref
				W.focus && (W.focus(), I.shouldSelect && W.select())
			}
		},
		getFieldState: D
	}
}
function hi(e = {}) {
	const t = ye.useRef(),
		n = ye.useRef(),
		[r, i] = ye.useState({
			isDirty: !1,
			isValidating: !1,
			isLoading: tn(e.defaultValues),
			isSubmitted: !1,
			isSubmitting: !1,
			isSubmitSuccessful: !1,
			isValid: !1,
			submitCount: 0,
			dirtyFields: {},
			touchedFields: {},
			validatingFields: {},
			errors: e.errors || {},
			disabled: e.disabled || !1,
			defaultValues: tn(e.defaultValues) ? void 0 : e.defaultValues
		})
	t.current || (t.current = { ...xy(e), formState: r })
	const o = t.current.control
	return (
		(o._options = e),
		ju({
			subject: o._subjects.state,
			next: (l) => {
				th(l, o._proxyFormState, o._updateFormState, !0) &&
					i({ ...o._formState })
			}
		}),
		ye.useEffect(() => o._disableForm(e.disabled), [o, e.disabled]),
		ye.useEffect(() => {
			if (o._proxyFormState.isDirty) {
				const l = o._getDirty()
				l !== r.isDirty && o._subjects.state.next({ isDirty: l })
			}
		}, [o, r.isDirty]),
		ye.useEffect(() => {
			e.values && !xn(e.values, n.current)
				? (o._reset(e.values, o._options.resetOptions),
					(n.current = e.values),
					i((l) => ({ ...l })))
				: o._resetDefaultValues()
		}, [e.values, o]),
		ye.useEffect(() => {
			e.errors && o._setErrors(e.errors)
		}, [e.errors, o]),
		ye.useEffect(() => {
			o._state.mount || (o._updateValid(), (o._state.mount = !0)),
				o._state.watch &&
					((o._state.watch = !1),
					o._subjects.state.next({ ...o._formState })),
				o._removeUnmounted()
		}),
		ye.useEffect(() => {
			e.shouldUnregister &&
				o._subjects.values.next({ values: o._getWatch() })
		}, [e.shouldUnregister, o]),
		(t.current.formState = eh(r, o)),
		t.current
	)
}
function Du({ action: e, text: t }) {
	return B.jsxs("div", {
		onClick: e,
		className:
			"mt-3 flex w-full cursor-pointer items-center justify-center rounded-md py-1 text-sm font-medium text-lightViolet transition-all duration-300 ease-out hover:bg-lightViolet hover:text-white",
		children: [
			B.jsxs("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				width: "20",
				height: "20",
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "2",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				className: "feather feather-plus",
				children: [
					B.jsx("line", { x1: "12", y1: "5", x2: "12", y2: "19" }),
					B.jsx("line", { x1: "5", y1: "12", x2: "19", y2: "12" })
				]
			}),
			B.jsx("p", { className: "text-base", children: t })
		]
	})
}
function ch({ action: e }) {
	return B.jsx("button", {
		onClick: e,
		className:
			"border-1 ml-0 mr-auto cursor-pointer rounded border-solid border-slate-400 bg-slate-400 px-5 py-1 text-xs text-white outline-none hover:shadow-md",
		type: "button",
		children: "Delete"
	})
}
function xo({ action: e }) {
	return B.jsx("button", {
		onClick: e,
		className:
			"box-border cursor-pointer rounded border-2 border-solid border-lightViolet bg-white px-5 py-1 text-xs text-lightViolet outline-none hover:shadow-md",
		type: "button",
		children: "Cancel"
	})
}
function So({ isSubmitting: e }) {
	return B.jsx("button", {
		className:
			"border-1 cursor-pointer rounded border-solid border-lightViolet bg-lightViolet px-5 py-1 text-xs text-white outline-none hover:shadow-md",
		type: "submit",
		children: e ? "Saving" : "Save"
	})
}
var Sy = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 }
const rf = (e) => {
		let t
		const n = new Set(),
			r = (y, f) => {
				const u = typeof y == "function" ? y(t) : y
				if (!Object.is(u, t)) {
					const c = t
					;(t =
						f ?? (typeof u != "object" || u === null)
							? u
							: Object.assign({}, t, u)),
						n.forEach((_) => _(t, c))
				}
			},
			i = () => t,
			p = {
				setState: r,
				getState: i,
				getInitialState: () => g,
				subscribe: (y) => (n.add(y), () => n.delete(y)),
				destroy: () => {
					;(Sy ? "production" : void 0) !== "production" &&
						console.warn(
							"[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
						),
						n.clear()
				}
			},
			g = (t = e(r, i, p))
		return p
	},
	ky = (e) => (e ? rf(e) : rf)
var dh = { exports: {} },
	hh = {},
	ph = { exports: {} },
	vh = {}
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ar = hn
function Oy(e, t) {
	return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var Ny = typeof Object.is == "function" ? Object.is : Oy,
	Ay = ar.useState,
	Ty = ar.useEffect,
	Py = ar.useLayoutEffect,
	jy = ar.useDebugValue
function Ly(e, t) {
	var n = t(),
		r = Ay({ inst: { value: n, getSnapshot: t } }),
		i = r[0].inst,
		o = r[1]
	return (
		Py(
			function () {
				;(i.value = n), (i.getSnapshot = t), Pl(i) && o({ inst: i })
			},
			[e, n, t]
		),
		Ty(
			function () {
				return (
					Pl(i) && o({ inst: i }),
					e(function () {
						Pl(i) && o({ inst: i })
					})
				)
			},
			[e]
		),
		jy(n),
		n
	)
}
function Pl(e) {
	var t = e.getSnapshot
	e = e.value
	try {
		var n = t()
		return !Ny(e, n)
	} catch {
		return !0
	}
}
function Cy(e, t) {
	return t()
}
var Dy =
	typeof window > "u" ||
	typeof window.document > "u" ||
	typeof window.document.createElement > "u"
		? Cy
		: Ly
vh.useSyncExternalStore =
	ar.useSyncExternalStore !== void 0 ? ar.useSyncExternalStore : Dy
ph.exports = vh
var Ry = ph.exports
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Wo = hn,
	Iy = Ry
function My(e, t) {
	return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var Fy = typeof Object.is == "function" ? Object.is : My,
	By = Iy.useSyncExternalStore,
	qy = Wo.useRef,
	$y = Wo.useEffect,
	zy = Wo.useMemo,
	Uy = Wo.useDebugValue
hh.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
	var o = qy(null)
	if (o.current === null) {
		var l = { hasValue: !1, value: null }
		o.current = l
	} else l = o.current
	o = zy(
		function () {
			function p(c) {
				if (!g) {
					if (
						((g = !0),
						(y = c),
						(c = r(c)),
						i !== void 0 && l.hasValue)
					) {
						var _ = l.value
						if (i(_, c)) return (f = _)
					}
					return (f = c)
				}
				if (((_ = f), Fy(y, c))) return _
				var m = r(c)
				return i !== void 0 && i(_, m) ? _ : ((y = c), (f = m))
			}
			var g = !1,
				y,
				f,
				u = n === void 0 ? null : n
			return [
				function () {
					return p(t())
				},
				u === null
					? void 0
					: function () {
							return p(u())
						}
			]
		},
		[t, n, r, i]
	)
	var h = By(e, o[0], o[1])
	return (
		$y(
			function () {
				;(l.hasValue = !0), (l.value = h)
			},
			[h]
		),
		Uy(h),
		h
	)
}
dh.exports = hh
var Vy = dh.exports
const Hy = Ca(Vy)
var yh = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 }
const { useDebugValue: Wy } = ye,
	{ useSyncExternalStoreWithSelector: Ky } = Hy
let of = !1
const Gy = (e) => e
function Qy(e, t = Gy, n) {
	;(yh ? "production" : void 0) !== "production" &&
		n &&
		!of &&
		(console.warn(
			"[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
		),
		(of = !0))
	const r = Ky(
		e.subscribe,
		e.getState,
		e.getServerState || e.getInitialState,
		t,
		n
	)
	return Wy(r), r
}
const Yy = (e) => {
		;(yh ? "production" : void 0) !== "production" &&
			typeof e != "function" &&
			console.warn(
				"[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
			)
		const t = typeof e == "function" ? ky(e) : e,
			n = (r, i) => Qy(t, r, i)
		return Object.assign(n, t), n
	},
	Zy = (e) => Yy,
	Xy = (e) => ({
		educationDetails: [
			{
				school: "University of California",
				degree: "Bsc. Computer Science",
				dateBegin: "09/2018",
				dateEnd: "07/2021",
				location: "Berkeley, California",
				description:
					"Successfully completed a capstone project involving the design and development of a complex web application, demonstrating the ability to apply theoretical knowledge to real-world scenarios.",
				edit: !1
			}
		],
		educationActiveForm: !1,
		changeEducationActiveForm: () =>
			e((t) => ({ educationActiveForm: !t.educationActiveForm })),
		updateEducationDetails: (t, n) =>
			e((r) => ({
				educationDetails: [
					...r.educationDetails.slice(0, n),
					t,
					...r.educationDetails.slice(n + 1)
				]
			})),
		changeEducationEditStatus: (t, n) =>
			e((r) => ({
				educationDetails: [
					...r.educationDetails.slice(0, t),
					{ ...r.educationDetails[t], edit: n },
					...r.educationDetails.slice(t + 1)
				]
			})),
		deleteEducationDetails: (t) =>
			e((n) => ({
				educationDetails: [
					...n.educationDetails.slice(0, t),
					...n.educationDetails.slice(t + 1)
				]
			}))
	}),
	Jy = (e) => ({
		employmentDetails: [
			{
				jobRole: "Web Developer",
				employer: "Acme Inc.",
				dateBegin: "10/2021",
				dateEnd: "Present",
				location: "San Diego, CA",
				description:
					"Designed and developed responsive websites and web applications using HTML, CSS, JavaScript, and React.js. Implemented backend functionality using Python and Django. Collaborated with designers and project managers to ensure on-time delivery of projects.",
				edit: !1
			},
			{
				jobRole: "Junior Web Developer",
				employer: "Startup Inc.",
				dateBegin: "10/2020",
				dateEnd: "10/2021",
				location: "San Francisco, CA",
				description:
					"Developed and maintained web applications using HTML, CSS, and JavaScript. Troubleshooted and resolved bugs to ensure smooth website operation.",
				edit: !1
			}
		],
		employmentActiveForm: !1,
		changeEmploymentActiveForm: () =>
			e((t) => ({ employmentActiveForm: !t.employmentActiveForm })),
		updateEmploymentDetails: (t, n) =>
			e((r) => ({
				employmentDetails: [
					...r.employmentDetails.slice(0, n),
					t,
					...r.employmentDetails.slice(n + 1)
				]
			})),
		changeEmploymentEditStatus: (t, n) =>
			e((r) => ({
				employmentDetails: [
					...r.employmentDetails.slice(0, t),
					{ ...r.employmentDetails[t], edit: n },
					...r.employmentDetails.slice(t + 1)
				]
			})),
		deleteEmploymentDetails: (t) =>
			e((n) => ({
				employmentDetails: [
					...n.employmentDetails.slice(0, t),
					...n.employmentDetails.slice(t + 1)
				]
			}))
	}),
	em = (e) => ({
		language: ["Portuguese", "Spanish", "Italian"],
		addLanguage: (t) => e((n) => ({ language: [...n.language, t] })),
		deleteLanguage: (t) =>
			e((n) => ({
				language: [
					...n.language.slice(0, t),
					...n.language.slice(t + 1)
				]
			}))
	})
var Be = []
for (var jl = 0; jl < 256; ++jl) Be.push((jl + 256).toString(16).slice(1))
function tm(e, t = 0) {
	return (
		Be[e[t + 0]] +
		Be[e[t + 1]] +
		Be[e[t + 2]] +
		Be[e[t + 3]] +
		"-" +
		Be[e[t + 4]] +
		Be[e[t + 5]] +
		"-" +
		Be[e[t + 6]] +
		Be[e[t + 7]] +
		"-" +
		Be[e[t + 8]] +
		Be[e[t + 9]] +
		"-" +
		Be[e[t + 10]] +
		Be[e[t + 11]] +
		Be[e[t + 12]] +
		Be[e[t + 13]] +
		Be[e[t + 14]] +
		Be[e[t + 15]]
	).toLowerCase()
}
var Li,
	nm = new Uint8Array(16)
function rm() {
	if (
		!Li &&
		((Li =
			typeof crypto < "u" &&
			crypto.getRandomValues &&
			crypto.getRandomValues.bind(crypto)),
		!Li)
	)
		throw new Error(
			"crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
		)
	return Li(nm)
}
var im =
	typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto)
const lf = { randomUUID: im }
function om(e, t, n) {
	if (lf.randomUUID && !t && !e) return lf.randomUUID()
	e = e || {}
	var r = e.random || (e.rng || rm)()
	return (r[6] = (r[6] & 15) | 64), (r[8] = (r[8] & 63) | 128), tm(r)
}
const lm = (e) => ({
		skills: [
			{
				id: "0",
				category: "Programming Languages",
				tools: "HTML, CSS, Javascript"
			},
			{
				id: "1",
				category: "Cloud services",
				tools: "Amazon Web Services, Google Cloud Platform"
			},
			{
				id: "2",
				category: "Web Technologies",
				tools: "React, Angular, Vue.js"
			},
			{
				id: "3",
				category: "Databases",
				tools: "MySQL, PostgreSQL, MongoDB"
			}
		],
		addSkill: (t) => {
			;(t.id = om()), e((n) => ({ skills: [...n.skills, t] }))
		},
		updateSkill: (t, n) =>
			e((r) => ({
				skills: [...r.skills.slice(0, n), t, ...r.skills.slice(n + 1)]
			})),
		deleteSkill: (t) =>
			e((n) => ({
				skills: [...n.skills.slice(0, t), ...n.skills.slice(t + 1)]
			}))
	}),
	am = (e) => ({
		personalDetails: {
			firstName: "Jonathan",
			lastName: "Doe",
			email: "jonathan.doe@email.com",
			phone: "(555) 555-5555",
			address: "San Francisco, California",
			occupation: "Web Developer",
			linkedin: "https://linkedin.com/username",
			portfolio: "https://github.com/username",
			about: "Highly motivated and results-oriented Web Developer with 4 years of experience in building user-friendly and responsive web applications. Proven ability to design, develop, and implement web applications using a variety of programming languages and frameworks. Passionate about creating innovative and performant web experiences.",
			file: "/profile.jpg"
		},
		updateDetails: (t) =>
			e((n) => ({ personalDetails: { ...n.personalDetails, ...t } }))
	}),
	um = Zy()((...e) => ({
		...Xy(...e),
		...Jy(...e),
		...em(...e),
		...lm(...e),
		...am(...e)
	})),
	sm = (e) => {
		let t = e
		t.use = {}
		for (let n of Object.keys(t.getState())) t.use[n] = () => t((r) => r[n])
		return t
	},
	fe = sm(um)
function fm() {
	;(this.__data__ = []), (this.size = 0)
}
var cm = fm
function dm(e, t) {
	return e === t || (e !== e && t !== t)
}
var mh = dm,
	hm = mh
function pm(e, t) {
	for (var n = e.length; n--; ) if (hm(e[n][0], t)) return n
	return -1
}
var Ko = pm,
	vm = Ko,
	ym = Array.prototype,
	mm = ym.splice
function gm(e) {
	var t = this.__data__,
		n = vm(t, e)
	if (n < 0) return !1
	var r = t.length - 1
	return n == r ? t.pop() : mm.call(t, n, 1), --this.size, !0
}
var _m = gm,
	wm = Ko
function Em(e) {
	var t = this.__data__,
		n = wm(t, e)
	return n < 0 ? void 0 : t[n][1]
}
var bm = Em,
	xm = Ko
function Sm(e) {
	return xm(this.__data__, e) > -1
}
var km = Sm,
	Om = Ko
function Nm(e, t) {
	var n = this.__data__,
		r = Om(n, e)
	return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this
}
var Am = Nm,
	Tm = cm,
	Pm = _m,
	jm = bm,
	Lm = km,
	Cm = Am
function cr(e) {
	var t = -1,
		n = e == null ? 0 : e.length
	for (this.clear(); ++t < n; ) {
		var r = e[t]
		this.set(r[0], r[1])
	}
}
cr.prototype.clear = Tm
cr.prototype.delete = Pm
cr.prototype.get = jm
cr.prototype.has = Lm
cr.prototype.set = Cm
var Go = cr,
	Dm = Go
function Rm() {
	;(this.__data__ = new Dm()), (this.size = 0)
}
var Im = Rm
function Mm(e) {
	var t = this.__data__,
		n = t.delete(e)
	return (this.size = t.size), n
}
var Fm = Mm
function Bm(e) {
	return this.__data__.get(e)
}
var qm = Bm
function $m(e) {
	return this.__data__.has(e)
}
var zm = $m,
	Um = typeof at == "object" && at && at.Object === Object && at,
	gh = Um,
	Vm = gh,
	Hm = typeof self == "object" && self && self.Object === Object && self,
	Wm = Vm || Hm || Function("return this")(),
	Kt = Wm,
	Km = Kt,
	Gm = Km.Symbol,
	Ru = Gm,
	af = Ru,
	_h = Object.prototype,
	Qm = _h.hasOwnProperty,
	Ym = _h.toString,
	Or = af ? af.toStringTag : void 0
function Zm(e) {
	var t = Qm.call(e, Or),
		n = e[Or]
	try {
		e[Or] = void 0
		var r = !0
	} catch {}
	var i = Ym.call(e)
	return r && (t ? (e[Or] = n) : delete e[Or]), i
}
var Xm = Zm,
	Jm = Object.prototype,
	eg = Jm.toString
function tg(e) {
	return eg.call(e)
}
var ng = tg,
	uf = Ru,
	rg = Xm,
	ig = ng,
	og = "[object Null]",
	lg = "[object Undefined]",
	sf = uf ? uf.toStringTag : void 0
function ag(e) {
	return e == null
		? e === void 0
			? lg
			: og
		: sf && sf in Object(e)
			? rg(e)
			: ig(e)
}
var Qo = ag
function ug(e) {
	var t = typeof e
	return e != null && (t == "object" || t == "function")
}
var wh = ug,
	sg = Qo,
	fg = wh,
	cg = "[object AsyncFunction]",
	dg = "[object Function]",
	hg = "[object GeneratorFunction]",
	pg = "[object Proxy]"
function vg(e) {
	if (!fg(e)) return !1
	var t = sg(e)
	return t == dg || t == hg || t == cg || t == pg
}
var Eh = vg,
	yg = Kt,
	mg = yg["__core-js_shared__"],
	gg = mg,
	Ll = gg,
	ff = (function () {
		var e = /[^.]+$/.exec((Ll && Ll.keys && Ll.keys.IE_PROTO) || "")
		return e ? "Symbol(src)_1." + e : ""
	})()
function _g(e) {
	return !!ff && ff in e
}
var wg = _g,
	Eg = Function.prototype,
	bg = Eg.toString
function xg(e) {
	if (e != null) {
		try {
			return bg.call(e)
		} catch {}
		try {
			return e + ""
		} catch {}
	}
	return ""
}
var bh = xg,
	Sg = Eh,
	kg = wg,
	Og = wh,
	Ng = bh,
	Ag = /[\\^$.*+?()[\]{}|]/g,
	Tg = /^\[object .+?Constructor\]$/,
	Pg = Function.prototype,
	jg = Object.prototype,
	Lg = Pg.toString,
	Cg = jg.hasOwnProperty,
	Dg = RegExp(
		"^" +
			Lg.call(Cg)
				.replace(Ag, "\\$&")
				.replace(
					/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
					"$1.*?"
				) +
			"$"
	)
function Rg(e) {
	if (!Og(e) || kg(e)) return !1
	var t = Sg(e) ? Dg : Tg
	return t.test(Ng(e))
}
var Ig = Rg
function Mg(e, t) {
	return e == null ? void 0 : e[t]
}
var Fg = Mg,
	Bg = Ig,
	qg = Fg
function $g(e, t) {
	var n = qg(e, t)
	return Bg(n) ? n : void 0
}
var dr = $g,
	zg = dr,
	Ug = Kt,
	Vg = zg(Ug, "Map"),
	Iu = Vg,
	Hg = dr,
	Wg = Hg(Object, "create"),
	Yo = Wg,
	cf = Yo
function Kg() {
	;(this.__data__ = cf ? cf(null) : {}), (this.size = 0)
}
var Gg = Kg
function Qg(e) {
	var t = this.has(e) && delete this.__data__[e]
	return (this.size -= t ? 1 : 0), t
}
var Yg = Qg,
	Zg = Yo,
	Xg = "__lodash_hash_undefined__",
	Jg = Object.prototype,
	e1 = Jg.hasOwnProperty
function t1(e) {
	var t = this.__data__
	if (Zg) {
		var n = t[e]
		return n === Xg ? void 0 : n
	}
	return e1.call(t, e) ? t[e] : void 0
}
var n1 = t1,
	r1 = Yo,
	i1 = Object.prototype,
	o1 = i1.hasOwnProperty
function l1(e) {
	var t = this.__data__
	return r1 ? t[e] !== void 0 : o1.call(t, e)
}
var a1 = l1,
	u1 = Yo,
	s1 = "__lodash_hash_undefined__"
function f1(e, t) {
	var n = this.__data__
	return (
		(this.size += this.has(e) ? 0 : 1),
		(n[e] = u1 && t === void 0 ? s1 : t),
		this
	)
}
var c1 = f1,
	d1 = Gg,
	h1 = Yg,
	p1 = n1,
	v1 = a1,
	y1 = c1
function hr(e) {
	var t = -1,
		n = e == null ? 0 : e.length
	for (this.clear(); ++t < n; ) {
		var r = e[t]
		this.set(r[0], r[1])
	}
}
hr.prototype.clear = d1
hr.prototype.delete = h1
hr.prototype.get = p1
hr.prototype.has = v1
hr.prototype.set = y1
var m1 = hr,
	df = m1,
	g1 = Go,
	_1 = Iu
function w1() {
	;(this.size = 0),
		(this.__data__ = {
			hash: new df(),
			map: new (_1 || g1)(),
			string: new df()
		})
}
var E1 = w1
function b1(e) {
	var t = typeof e
	return t == "string" || t == "number" || t == "symbol" || t == "boolean"
		? e !== "__proto__"
		: e === null
}
var x1 = b1,
	S1 = x1
function k1(e, t) {
	var n = e.__data__
	return S1(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map
}
var Zo = k1,
	O1 = Zo
function N1(e) {
	var t = O1(this, e).delete(e)
	return (this.size -= t ? 1 : 0), t
}
var A1 = N1,
	T1 = Zo
function P1(e) {
	return T1(this, e).get(e)
}
var j1 = P1,
	L1 = Zo
function C1(e) {
	return L1(this, e).has(e)
}
var D1 = C1,
	R1 = Zo
function I1(e, t) {
	var n = R1(this, e),
		r = n.size
	return n.set(e, t), (this.size += n.size == r ? 0 : 1), this
}
var M1 = I1,
	F1 = E1,
	B1 = A1,
	q1 = j1,
	$1 = D1,
	z1 = M1
function pr(e) {
	var t = -1,
		n = e == null ? 0 : e.length
	for (this.clear(); ++t < n; ) {
		var r = e[t]
		this.set(r[0], r[1])
	}
}
pr.prototype.clear = F1
pr.prototype.delete = B1
pr.prototype.get = q1
pr.prototype.has = $1
pr.prototype.set = z1
var xh = pr,
	U1 = Go,
	V1 = Iu,
	H1 = xh,
	W1 = 200
function K1(e, t) {
	var n = this.__data__
	if (n instanceof U1) {
		var r = n.__data__
		if (!V1 || r.length < W1 - 1)
			return r.push([e, t]), (this.size = ++n.size), this
		n = this.__data__ = new H1(r)
	}
	return n.set(e, t), (this.size = n.size), this
}
var G1 = K1,
	Q1 = Go,
	Y1 = Im,
	Z1 = Fm,
	X1 = qm,
	J1 = zm,
	e0 = G1
function vr(e) {
	var t = (this.__data__ = new Q1(e))
	this.size = t.size
}
vr.prototype.clear = Y1
vr.prototype.delete = Z1
vr.prototype.get = X1
vr.prototype.has = J1
vr.prototype.set = e0
var t0 = vr,
	n0 = "__lodash_hash_undefined__"
function r0(e) {
	return this.__data__.set(e, n0), this
}
var i0 = r0
function o0(e) {
	return this.__data__.has(e)
}
var l0 = o0,
	a0 = xh,
	u0 = i0,
	s0 = l0
function ko(e) {
	var t = -1,
		n = e == null ? 0 : e.length
	for (this.__data__ = new a0(); ++t < n; ) this.add(e[t])
}
ko.prototype.add = ko.prototype.push = u0
ko.prototype.has = s0
var f0 = ko
function c0(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
		if (t(e[n], n, e)) return !0
	return !1
}
var d0 = c0
function h0(e, t) {
	return e.has(t)
}
var p0 = h0,
	v0 = f0,
	y0 = d0,
	m0 = p0,
	g0 = 1,
	_0 = 2
function w0(e, t, n, r, i, o) {
	var l = n & g0,
		h = e.length,
		p = t.length
	if (h != p && !(l && p > h)) return !1
	var g = o.get(e),
		y = o.get(t)
	if (g && y) return g == t && y == e
	var f = -1,
		u = !0,
		c = n & _0 ? new v0() : void 0
	for (o.set(e, t), o.set(t, e); ++f < h; ) {
		var _ = e[f],
			m = t[f]
		if (r) var w = l ? r(m, _, f, t, e, o) : r(_, m, f, e, t, o)
		if (w !== void 0) {
			if (w) continue
			u = !1
			break
		}
		if (c) {
			if (
				!y0(t, function (s, a) {
					if (!m0(c, a) && (_ === s || i(_, s, n, r, o)))
						return c.push(a)
				})
			) {
				u = !1
				break
			}
		} else if (!(_ === m || i(_, m, n, r, o))) {
			u = !1
			break
		}
	}
	return o.delete(e), o.delete(t), u
}
var Sh = w0,
	E0 = Kt,
	b0 = E0.Uint8Array,
	x0 = b0
function S0(e) {
	var t = -1,
		n = Array(e.size)
	return (
		e.forEach(function (r, i) {
			n[++t] = [i, r]
		}),
		n
	)
}
var k0 = S0
function O0(e) {
	var t = -1,
		n = Array(e.size)
	return (
		e.forEach(function (r) {
			n[++t] = r
		}),
		n
	)
}
var N0 = O0,
	hf = Ru,
	pf = x0,
	A0 = mh,
	T0 = Sh,
	P0 = k0,
	j0 = N0,
	L0 = 1,
	C0 = 2,
	D0 = "[object Boolean]",
	R0 = "[object Date]",
	I0 = "[object Error]",
	M0 = "[object Map]",
	F0 = "[object Number]",
	B0 = "[object RegExp]",
	q0 = "[object Set]",
	$0 = "[object String]",
	z0 = "[object Symbol]",
	U0 = "[object ArrayBuffer]",
	V0 = "[object DataView]",
	vf = hf ? hf.prototype : void 0,
	Cl = vf ? vf.valueOf : void 0
function H0(e, t, n, r, i, o, l) {
	switch (n) {
		case V0:
			if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
				return !1
			;(e = e.buffer), (t = t.buffer)
		case U0:
			return !(e.byteLength != t.byteLength || !o(new pf(e), new pf(t)))
		case D0:
		case R0:
		case F0:
			return A0(+e, +t)
		case I0:
			return e.name == t.name && e.message == t.message
		case B0:
		case $0:
			return e == t + ""
		case M0:
			var h = P0
		case q0:
			var p = r & L0
			if ((h || (h = j0), e.size != t.size && !p)) return !1
			var g = l.get(e)
			if (g) return g == t
			;(r |= C0), l.set(e, t)
			var y = T0(h(e), h(t), r, i, o, l)
			return l.delete(e), y
		case z0:
			if (Cl) return Cl.call(e) == Cl.call(t)
	}
	return !1
}
var W0 = H0
function K0(e, t) {
	for (var n = -1, r = t.length, i = e.length; ++n < r; ) e[i + n] = t[n]
	return e
}
var G0 = K0,
	Q0 = Array.isArray,
	Mu = Q0,
	Y0 = G0,
	Z0 = Mu
function X0(e, t, n) {
	var r = t(e)
	return Z0(e) ? r : Y0(r, n(e))
}
var J0 = X0
function e_(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = 0, o = []; ++n < r; ) {
		var l = e[n]
		t(l, n, e) && (o[i++] = l)
	}
	return o
}
var t_ = e_
function n_() {
	return []
}
var r_ = n_,
	i_ = t_,
	o_ = r_,
	l_ = Object.prototype,
	a_ = l_.propertyIsEnumerable,
	yf = Object.getOwnPropertySymbols,
	u_ = yf
		? function (e) {
				return e == null
					? []
					: ((e = Object(e)),
						i_(yf(e), function (t) {
							return a_.call(e, t)
						}))
			}
		: o_,
	s_ = u_
function f_(e, t) {
	for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n)
	return r
}
var c_ = f_
function d_(e) {
	return e != null && typeof e == "object"
}
var Xo = d_,
	h_ = Qo,
	p_ = Xo,
	v_ = "[object Arguments]"
function y_(e) {
	return p_(e) && h_(e) == v_
}
var m_ = y_,
	mf = m_,
	g_ = Xo,
	kh = Object.prototype,
	__ = kh.hasOwnProperty,
	w_ = kh.propertyIsEnumerable,
	E_ = mf(
		(function () {
			return arguments
		})()
	)
		? mf
		: function (e) {
				return g_(e) && __.call(e, "callee") && !w_.call(e, "callee")
			},
	b_ = E_,
	Oo = { exports: {} }
function x_() {
	return !1
}
var S_ = x_
Oo.exports
;(function (e, t) {
	var n = Kt,
		r = S_,
		i = t && !t.nodeType && t,
		o = i && !0 && e && !e.nodeType && e,
		l = o && o.exports === i,
		h = l ? n.Buffer : void 0,
		p = h ? h.isBuffer : void 0,
		g = p || r
	e.exports = g
})(Oo, Oo.exports)
var Oh = Oo.exports,
	k_ = 9007199254740991,
	O_ = /^(?:0|[1-9]\d*)$/
function N_(e, t) {
	var n = typeof e
	return (
		(t = t ?? k_),
		!!t &&
			(n == "number" || (n != "symbol" && O_.test(e))) &&
			e > -1 &&
			e % 1 == 0 &&
			e < t
	)
}
var A_ = N_,
	T_ = 9007199254740991
function P_(e) {
	return typeof e == "number" && e > -1 && e % 1 == 0 && e <= T_
}
var Nh = P_,
	j_ = Qo,
	L_ = Nh,
	C_ = Xo,
	D_ = "[object Arguments]",
	R_ = "[object Array]",
	I_ = "[object Boolean]",
	M_ = "[object Date]",
	F_ = "[object Error]",
	B_ = "[object Function]",
	q_ = "[object Map]",
	$_ = "[object Number]",
	z_ = "[object Object]",
	U_ = "[object RegExp]",
	V_ = "[object Set]",
	H_ = "[object String]",
	W_ = "[object WeakMap]",
	K_ = "[object ArrayBuffer]",
	G_ = "[object DataView]",
	Q_ = "[object Float32Array]",
	Y_ = "[object Float64Array]",
	Z_ = "[object Int8Array]",
	X_ = "[object Int16Array]",
	J_ = "[object Int32Array]",
	ew = "[object Uint8Array]",
	tw = "[object Uint8ClampedArray]",
	nw = "[object Uint16Array]",
	rw = "[object Uint32Array]",
	we = {}
we[Q_] =
	we[Y_] =
	we[Z_] =
	we[X_] =
	we[J_] =
	we[ew] =
	we[tw] =
	we[nw] =
	we[rw] =
		!0
we[D_] =
	we[R_] =
	we[K_] =
	we[I_] =
	we[G_] =
	we[M_] =
	we[F_] =
	we[B_] =
	we[q_] =
	we[$_] =
	we[z_] =
	we[U_] =
	we[V_] =
	we[H_] =
	we[W_] =
		!1
function iw(e) {
	return C_(e) && L_(e.length) && !!we[j_(e)]
}
var ow = iw
function lw(e) {
	return function (t) {
		return e(t)
	}
}
var aw = lw,
	No = { exports: {} }
No.exports
;(function (e, t) {
	var n = gh,
		r = t && !t.nodeType && t,
		i = r && !0 && e && !e.nodeType && e,
		o = i && i.exports === r,
		l = o && n.process,
		h = (function () {
			try {
				var p = i && i.require && i.require("util").types
				return p || (l && l.binding && l.binding("util"))
			} catch {}
		})()
	e.exports = h
})(No, No.exports)
var uw = No.exports,
	sw = ow,
	fw = aw,
	gf = uw,
	_f = gf && gf.isTypedArray,
	cw = _f ? fw(_f) : sw,
	Ah = cw,
	dw = c_,
	hw = b_,
	pw = Mu,
	vw = Oh,
	yw = A_,
	mw = Ah,
	gw = Object.prototype,
	_w = gw.hasOwnProperty
function ww(e, t) {
	var n = pw(e),
		r = !n && hw(e),
		i = !n && !r && vw(e),
		o = !n && !r && !i && mw(e),
		l = n || r || i || o,
		h = l ? dw(e.length, String) : [],
		p = h.length
	for (var g in e)
		(t || _w.call(e, g)) &&
			!(
				l &&
				(g == "length" ||
					(i && (g == "offset" || g == "parent")) ||
					(o &&
						(g == "buffer" ||
							g == "byteLength" ||
							g == "byteOffset")) ||
					yw(g, p))
			) &&
			h.push(g)
	return h
}
var Ew = ww,
	bw = Object.prototype
function xw(e) {
	var t = e && e.constructor,
		n = (typeof t == "function" && t.prototype) || bw
	return e === n
}
var Sw = xw
function kw(e, t) {
	return function (n) {
		return e(t(n))
	}
}
var Ow = kw,
	Nw = Ow,
	Aw = Nw(Object.keys, Object),
	Tw = Aw,
	Pw = Sw,
	jw = Tw,
	Lw = Object.prototype,
	Cw = Lw.hasOwnProperty
function Dw(e) {
	if (!Pw(e)) return jw(e)
	var t = []
	for (var n in Object(e)) Cw.call(e, n) && n != "constructor" && t.push(n)
	return t
}
var Rw = Dw,
	Iw = Eh,
	Mw = Nh
function Fw(e) {
	return e != null && Mw(e.length) && !Iw(e)
}
var Bw = Fw,
	qw = Ew,
	$w = Rw,
	zw = Bw
function Uw(e) {
	return zw(e) ? qw(e) : $w(e)
}
var Vw = Uw,
	Hw = J0,
	Ww = s_,
	Kw = Vw
function Gw(e) {
	return Hw(e, Kw, Ww)
}
var Qw = Gw,
	wf = Qw,
	Yw = 1,
	Zw = Object.prototype,
	Xw = Zw.hasOwnProperty
function Jw(e, t, n, r, i, o) {
	var l = n & Yw,
		h = wf(e),
		p = h.length,
		g = wf(t),
		y = g.length
	if (p != y && !l) return !1
	for (var f = p; f--; ) {
		var u = h[f]
		if (!(l ? u in t : Xw.call(t, u))) return !1
	}
	var c = o.get(e),
		_ = o.get(t)
	if (c && _) return c == t && _ == e
	var m = !0
	o.set(e, t), o.set(t, e)
	for (var w = l; ++f < p; ) {
		u = h[f]
		var s = e[u],
			a = t[u]
		if (r) var v = l ? r(a, s, u, t, e, o) : r(s, a, u, e, t, o)
		if (!(v === void 0 ? s === a || i(s, a, n, r, o) : v)) {
			m = !1
			break
		}
		w || (w = u == "constructor")
	}
	if (m && !w) {
		var d = e.constructor,
			E = t.constructor
		d != E &&
			"constructor" in e &&
			"constructor" in t &&
			!(
				typeof d == "function" &&
				d instanceof d &&
				typeof E == "function" &&
				E instanceof E
			) &&
			(m = !1)
	}
	return o.delete(e), o.delete(t), m
}
var eE = Jw,
	tE = dr,
	nE = Kt,
	rE = tE(nE, "DataView"),
	iE = rE,
	oE = dr,
	lE = Kt,
	aE = oE(lE, "Promise"),
	uE = aE,
	sE = dr,
	fE = Kt,
	cE = sE(fE, "Set"),
	dE = cE,
	hE = dr,
	pE = Kt,
	vE = hE(pE, "WeakMap"),
	yE = vE,
	Aa = iE,
	Ta = Iu,
	Pa = uE,
	ja = dE,
	La = yE,
	Th = Qo,
	yr = bh,
	Ef = "[object Map]",
	mE = "[object Object]",
	bf = "[object Promise]",
	xf = "[object Set]",
	Sf = "[object WeakMap]",
	kf = "[object DataView]",
	gE = yr(Aa),
	_E = yr(Ta),
	wE = yr(Pa),
	EE = yr(ja),
	bE = yr(La),
	_n = Th
;((Aa && _n(new Aa(new ArrayBuffer(1))) != kf) ||
	(Ta && _n(new Ta()) != Ef) ||
	(Pa && _n(Pa.resolve()) != bf) ||
	(ja && _n(new ja()) != xf) ||
	(La && _n(new La()) != Sf)) &&
	(_n = function (e) {
		var t = Th(e),
			n = t == mE ? e.constructor : void 0,
			r = n ? yr(n) : ""
		if (r)
			switch (r) {
				case gE:
					return kf
				case _E:
					return Ef
				case wE:
					return bf
				case EE:
					return xf
				case bE:
					return Sf
			}
		return t
	})
var xE = _n,
	Dl = t0,
	SE = Sh,
	kE = W0,
	OE = eE,
	Of = xE,
	Nf = Mu,
	Af = Oh,
	NE = Ah,
	AE = 1,
	Tf = "[object Arguments]",
	Pf = "[object Array]",
	Ci = "[object Object]",
	TE = Object.prototype,
	jf = TE.hasOwnProperty
function PE(e, t, n, r, i, o) {
	var l = Nf(e),
		h = Nf(t),
		p = l ? Pf : Of(e),
		g = h ? Pf : Of(t)
	;(p = p == Tf ? Ci : p), (g = g == Tf ? Ci : g)
	var y = p == Ci,
		f = g == Ci,
		u = p == g
	if (u && Af(e)) {
		if (!Af(t)) return !1
		;(l = !0), (y = !1)
	}
	if (u && !y)
		return (
			o || (o = new Dl()),
			l || NE(e) ? SE(e, t, n, r, i, o) : kE(e, t, p, n, r, i, o)
		)
	if (!(n & AE)) {
		var c = y && jf.call(e, "__wrapped__"),
			_ = f && jf.call(t, "__wrapped__")
		if (c || _) {
			var m = c ? e.value() : e,
				w = _ ? t.value() : t
			return o || (o = new Dl()), i(m, w, n, r, o)
		}
	}
	return u ? (o || (o = new Dl()), OE(e, t, n, r, i, o)) : !1
}
var jE = PE,
	LE = jE,
	Lf = Xo
function Ph(e, t, n, r, i) {
	return e === t
		? !0
		: e == null || t == null || (!Lf(e) && !Lf(t))
			? e !== e && t !== t
			: LE(e, t, n, r, Ph, i)
}
var CE = Ph,
	DE = CE
function RE(e, t) {
	return DE(e, t)
}
var IE = RE,
	jh = { exports: {} }
/*!
 * Quill Editor v1.3.7
 * https://quilljs.com/
 * Copyright (c) 2014, Jason Chen
 * Copyright (c) 2013, salesforce.com
 */ ;(function (e, t) {
	;(function (r, i) {
		e.exports = i()
	})(typeof self < "u" ? self : at, function () {
		return (function (n) {
			var r = {}
			function i(o) {
				if (r[o]) return r[o].exports
				var l = (r[o] = { i: o, l: !1, exports: {} })
				return (
					n[o].call(l.exports, l, l.exports, i), (l.l = !0), l.exports
				)
			}
			return (
				(i.m = n),
				(i.c = r),
				(i.d = function (o, l, h) {
					i.o(o, l) ||
						Object.defineProperty(o, l, {
							configurable: !1,
							enumerable: !0,
							get: h
						})
				}),
				(i.n = function (o) {
					var l =
						o && o.__esModule
							? function () {
									return o.default
								}
							: function () {
									return o
								}
					return i.d(l, "a", l), l
				}),
				(i.o = function (o, l) {
					return Object.prototype.hasOwnProperty.call(o, l)
				}),
				(i.p = ""),
				i((i.s = 109))
			)
		})([
			function (n, r, i) {
				Object.defineProperty(r, "__esModule", { value: !0 })
				var o = i(17),
					l = i(18),
					h = i(19),
					p = i(45),
					g = i(46),
					y = i(47),
					f = i(48),
					u = i(49),
					c = i(12),
					_ = i(32),
					m = i(33),
					w = i(31),
					s = i(1),
					a = {
						Scope: s.Scope,
						create: s.create,
						find: s.find,
						query: s.query,
						register: s.register,
						Container: o.default,
						Format: l.default,
						Leaf: h.default,
						Embed: f.default,
						Scroll: p.default,
						Block: y.default,
						Inline: g.default,
						Text: u.default,
						Attributor: {
							Attribute: c.default,
							Class: _.default,
							Style: m.default,
							Store: w.default
						}
					}
				r.default = a
			},
			function (n, r, i) {
				var o =
					(this && this.__extends) ||
					(function () {
						var w =
							Object.setPrototypeOf ||
							({ __proto__: [] } instanceof Array &&
								function (s, a) {
									s.__proto__ = a
								}) ||
							function (s, a) {
								for (var v in a)
									a.hasOwnProperty(v) && (s[v] = a[v])
							}
						return function (s, a) {
							w(s, a)
							function v() {
								this.constructor = s
							}
							s.prototype =
								a === null
									? Object.create(a)
									: ((v.prototype = a.prototype), new v())
						}
					})()
				Object.defineProperty(r, "__esModule", { value: !0 })
				var l = (function (w) {
					o(s, w)
					function s(a) {
						var v = this
						return (
							(a = "[Parchment] " + a),
							(v = w.call(this, a) || this),
							(v.message = a),
							(v.name = v.constructor.name),
							v
						)
					}
					return s
				})(Error)
				r.ParchmentError = l
				var h = {},
					p = {},
					g = {},
					y = {}
				r.DATA_KEY = "__blot"
				var f
				;(function (w) {
					;(w[(w.TYPE = 3)] = "TYPE"),
						(w[(w.LEVEL = 12)] = "LEVEL"),
						(w[(w.ATTRIBUTE = 13)] = "ATTRIBUTE"),
						(w[(w.BLOT = 14)] = "BLOT"),
						(w[(w.INLINE = 7)] = "INLINE"),
						(w[(w.BLOCK = 11)] = "BLOCK"),
						(w[(w.BLOCK_BLOT = 10)] = "BLOCK_BLOT"),
						(w[(w.INLINE_BLOT = 6)] = "INLINE_BLOT"),
						(w[(w.BLOCK_ATTRIBUTE = 9)] = "BLOCK_ATTRIBUTE"),
						(w[(w.INLINE_ATTRIBUTE = 5)] = "INLINE_ATTRIBUTE"),
						(w[(w.ANY = 15)] = "ANY")
				})((f = r.Scope || (r.Scope = {})))
				function u(w, s) {
					var a = _(w)
					if (a == null)
						throw new l("Unable to create " + w + " blot")
					var v = a,
						d =
							w instanceof Node || w.nodeType === Node.TEXT_NODE
								? w
								: v.create(s)
					return new v(d, s)
				}
				r.create = u
				function c(w, s) {
					return (
						s === void 0 && (s = !1),
						w == null
							? null
							: w[r.DATA_KEY] != null
								? w[r.DATA_KEY].blot
								: s
									? c(w.parentNode, s)
									: null
					)
				}
				r.find = c
				function _(w, s) {
					s === void 0 && (s = f.ANY)
					var a
					if (typeof w == "string") a = y[w] || h[w]
					else if (w instanceof Text || w.nodeType === Node.TEXT_NODE)
						a = y.text
					else if (typeof w == "number")
						w & f.LEVEL & f.BLOCK
							? (a = y.block)
							: w & f.LEVEL & f.INLINE && (a = y.inline)
					else if (w instanceof HTMLElement) {
						var v = (w.getAttribute("class") || "").split(/\s+/)
						for (var d in v) if (((a = p[v[d]]), a)) break
						a = a || g[w.tagName]
					}
					return a == null
						? null
						: s & f.LEVEL & a.scope && s & f.TYPE & a.scope
							? a
							: null
				}
				r.query = _
				function m() {
					for (var w = [], s = 0; s < arguments.length; s++)
						w[s] = arguments[s]
					if (w.length > 1)
						return w.map(function (d) {
							return m(d)
						})
					var a = w[0]
					if (
						typeof a.blotName != "string" &&
						typeof a.attrName != "string"
					)
						throw new l("Invalid definition")
					if (a.blotName === "abstract")
						throw new l("Cannot register abstract class")
					if (
						((y[a.blotName || a.attrName] = a),
						typeof a.keyName == "string")
					)
						h[a.keyName] = a
					else if (
						(a.className != null && (p[a.className] = a),
						a.tagName != null)
					) {
						Array.isArray(a.tagName)
							? (a.tagName = a.tagName.map(function (d) {
									return d.toUpperCase()
								}))
							: (a.tagName = a.tagName.toUpperCase())
						var v = Array.isArray(a.tagName)
							? a.tagName
							: [a.tagName]
						v.forEach(function (d) {
							;(g[d] == null || a.className == null) && (g[d] = a)
						})
					}
					return a
				}
				r.register = m
			},
			function (n, r, i) {
				var o = i(51),
					l = i(11),
					h = i(3),
					p = i(20),
					g = "\0",
					y = function (f) {
						Array.isArray(f)
							? (this.ops = f)
							: f != null && Array.isArray(f.ops)
								? (this.ops = f.ops)
								: (this.ops = [])
					}
				;(y.prototype.insert = function (f, u) {
					var c = {}
					return f.length === 0
						? this
						: ((c.insert = f),
							u != null &&
								typeof u == "object" &&
								Object.keys(u).length > 0 &&
								(c.attributes = u),
							this.push(c))
				}),
					(y.prototype.delete = function (f) {
						return f <= 0 ? this : this.push({ delete: f })
					}),
					(y.prototype.retain = function (f, u) {
						if (f <= 0) return this
						var c = { retain: f }
						return (
							u != null &&
								typeof u == "object" &&
								Object.keys(u).length > 0 &&
								(c.attributes = u),
							this.push(c)
						)
					}),
					(y.prototype.push = function (f) {
						var u = this.ops.length,
							c = this.ops[u - 1]
						if (((f = h(!0, {}, f)), typeof c == "object")) {
							if (
								typeof f.delete == "number" &&
								typeof c.delete == "number"
							)
								return (
									(this.ops[u - 1] = {
										delete: c.delete + f.delete
									}),
									this
								)
							if (
								typeof c.delete == "number" &&
								f.insert != null &&
								((u -= 1),
								(c = this.ops[u - 1]),
								typeof c != "object")
							)
								return this.ops.unshift(f), this
							if (l(f.attributes, c.attributes)) {
								if (
									typeof f.insert == "string" &&
									typeof c.insert == "string"
								)
									return (
										(this.ops[u - 1] = {
											insert: c.insert + f.insert
										}),
										typeof f.attributes == "object" &&
											(this.ops[u - 1].attributes =
												f.attributes),
										this
									)
								if (
									typeof f.retain == "number" &&
									typeof c.retain == "number"
								)
									return (
										(this.ops[u - 1] = {
											retain: c.retain + f.retain
										}),
										typeof f.attributes == "object" &&
											(this.ops[u - 1].attributes =
												f.attributes),
										this
									)
							}
						}
						return (
							u === this.ops.length
								? this.ops.push(f)
								: this.ops.splice(u, 0, f),
							this
						)
					}),
					(y.prototype.chop = function () {
						var f = this.ops[this.ops.length - 1]
						return (
							f && f.retain && !f.attributes && this.ops.pop(),
							this
						)
					}),
					(y.prototype.filter = function (f) {
						return this.ops.filter(f)
					}),
					(y.prototype.forEach = function (f) {
						this.ops.forEach(f)
					}),
					(y.prototype.map = function (f) {
						return this.ops.map(f)
					}),
					(y.prototype.partition = function (f) {
						var u = [],
							c = []
						return (
							this.forEach(function (_) {
								var m = f(_) ? u : c
								m.push(_)
							}),
							[u, c]
						)
					}),
					(y.prototype.reduce = function (f, u) {
						return this.ops.reduce(f, u)
					}),
					(y.prototype.changeLength = function () {
						return this.reduce(function (f, u) {
							return u.insert
								? f + p.length(u)
								: u.delete
									? f - u.delete
									: f
						}, 0)
					}),
					(y.prototype.length = function () {
						return this.reduce(function (f, u) {
							return f + p.length(u)
						}, 0)
					}),
					(y.prototype.slice = function (f, u) {
						;(f = f || 0), typeof u != "number" && (u = 1 / 0)
						for (
							var c = [], _ = p.iterator(this.ops), m = 0;
							m < u && _.hasNext();

						) {
							var w
							m < f
								? (w = _.next(f - m))
								: ((w = _.next(u - m)), c.push(w)),
								(m += p.length(w))
						}
						return new y(c)
					}),
					(y.prototype.compose = function (f) {
						var u = p.iterator(this.ops),
							c = p.iterator(f.ops),
							_ = [],
							m = c.peek()
						if (
							m != null &&
							typeof m.retain == "number" &&
							m.attributes == null
						) {
							for (
								var w = m.retain;
								u.peekType() === "insert" &&
								u.peekLength() <= w;

							)
								(w -= u.peekLength()), _.push(u.next())
							m.retain - w > 0 && c.next(m.retain - w)
						}
						for (var s = new y(_); u.hasNext() || c.hasNext(); )
							if (c.peekType() === "insert") s.push(c.next())
							else if (u.peekType() === "delete") s.push(u.next())
							else {
								var a = Math.min(
										u.peekLength(),
										c.peekLength()
									),
									v = u.next(a),
									d = c.next(a)
								if (typeof d.retain == "number") {
									var E = {}
									typeof v.retain == "number"
										? (E.retain = a)
										: (E.insert = v.insert)
									var N = p.attributes.compose(
										v.attributes,
										d.attributes,
										typeof v.retain == "number"
									)
									if (
										(N && (E.attributes = N),
										s.push(E),
										!c.hasNext() &&
											l(s.ops[s.ops.length - 1], E))
									) {
										var k = new y(u.rest())
										return s.concat(k).chop()
									}
								} else
									typeof d.delete == "number" &&
										typeof v.retain == "number" &&
										s.push(d)
							}
						return s.chop()
					}),
					(y.prototype.concat = function (f) {
						var u = new y(this.ops.slice())
						return (
							f.ops.length > 0 &&
								(u.push(f.ops[0]),
								(u.ops = u.ops.concat(f.ops.slice(1)))),
							u
						)
					}),
					(y.prototype.diff = function (f, u) {
						if (this.ops === f.ops) return new y()
						var c = [this, f].map(function (a) {
								return a
									.map(function (v) {
										if (v.insert != null)
											return typeof v.insert == "string"
												? v.insert
												: g
										var d = a === f ? "on" : "with"
										throw new Error(
											"diff() called " +
												d +
												" non-document"
										)
									})
									.join("")
							}),
							_ = new y(),
							m = o(c[0], c[1], u),
							w = p.iterator(this.ops),
							s = p.iterator(f.ops)
						return (
							m.forEach(function (a) {
								for (var v = a[1].length; v > 0; ) {
									var d = 0
									switch (a[0]) {
										case o.INSERT:
											;(d = Math.min(s.peekLength(), v)),
												_.push(s.next(d))
											break
										case o.DELETE:
											;(d = Math.min(v, w.peekLength())),
												w.next(d),
												_.delete(d)
											break
										case o.EQUAL:
											d = Math.min(
												w.peekLength(),
												s.peekLength(),
												v
											)
											var E = w.next(d),
												N = s.next(d)
											l(E.insert, N.insert)
												? _.retain(
														d,
														p.attributes.diff(
															E.attributes,
															N.attributes
														)
													)
												: _.push(N).delete(d)
											break
									}
									v -= d
								}
							}),
							_.chop()
						)
					}),
					(y.prototype.eachLine = function (f, u) {
						u =
							u ||
							`
`
						for (
							var c = p.iterator(this.ops), _ = new y(), m = 0;
							c.hasNext();

						) {
							if (c.peekType() !== "insert") return
							var w = c.peek(),
								s = p.length(w) - c.peekLength(),
								a =
									typeof w.insert == "string"
										? w.insert.indexOf(u, s) - s
										: -1
							if (a < 0) _.push(c.next())
							else if (a > 0) _.push(c.next(a))
							else {
								if (f(_, c.next(1).attributes || {}, m) === !1)
									return
								;(m += 1), (_ = new y())
							}
						}
						_.length() > 0 && f(_, {}, m)
					}),
					(y.prototype.transform = function (f, u) {
						if (((u = !!u), typeof f == "number"))
							return this.transformPosition(f, u)
						for (
							var c = p.iterator(this.ops),
								_ = p.iterator(f.ops),
								m = new y();
							c.hasNext() || _.hasNext();

						)
							if (
								c.peekType() === "insert" &&
								(u || _.peekType() !== "insert")
							)
								m.retain(p.length(c.next()))
							else if (_.peekType() === "insert") m.push(_.next())
							else {
								var w = Math.min(
										c.peekLength(),
										_.peekLength()
									),
									s = c.next(w),
									a = _.next(w)
								if (s.delete) continue
								a.delete
									? m.push(a)
									: m.retain(
											w,
											p.attributes.transform(
												s.attributes,
												a.attributes,
												u
											)
										)
							}
						return m.chop()
					}),
					(y.prototype.transformPosition = function (f, u) {
						u = !!u
						for (
							var c = p.iterator(this.ops), _ = 0;
							c.hasNext() && _ <= f;

						) {
							var m = c.peekLength(),
								w = c.peekType()
							if ((c.next(), w === "delete")) {
								f -= Math.min(m, f - _)
								continue
							} else w === "insert" && (_ < f || !u) && (f += m)
							_ += m
						}
						return f
					}),
					(n.exports = y)
			},
			function (n, r) {
				var i = Object.prototype.hasOwnProperty,
					o = Object.prototype.toString,
					l = Object.defineProperty,
					h = Object.getOwnPropertyDescriptor,
					p = function (c) {
						return typeof Array.isArray == "function"
							? Array.isArray(c)
							: o.call(c) === "[object Array]"
					},
					g = function (c) {
						if (!c || o.call(c) !== "[object Object]") return !1
						var _ = i.call(c, "constructor"),
							m =
								c.constructor &&
								c.constructor.prototype &&
								i.call(c.constructor.prototype, "isPrototypeOf")
						if (c.constructor && !_ && !m) return !1
						var w
						for (w in c);
						return typeof w > "u" || i.call(c, w)
					},
					y = function (c, _) {
						l && _.name === "__proto__"
							? l(c, _.name, {
									enumerable: !0,
									configurable: !0,
									value: _.newValue,
									writable: !0
								})
							: (c[_.name] = _.newValue)
					},
					f = function (c, _) {
						if (_ === "__proto__")
							if (i.call(c, _)) {
								if (h) return h(c, _).value
							} else return
						return c[_]
					}
				n.exports = function u() {
					var c,
						_,
						m,
						w,
						s,
						a,
						v = arguments[0],
						d = 1,
						E = arguments.length,
						N = !1
					for (
						typeof v == "boolean" &&
							((N = v), (v = arguments[1] || {}), (d = 2)),
							(v == null ||
								(typeof v != "object" &&
									typeof v != "function")) &&
								(v = {});
						d < E;
						++d
					)
						if (((c = arguments[d]), c != null))
							for (_ in c)
								(m = f(v, _)),
									(w = f(c, _)),
									v !== w &&
										(N && w && (g(w) || (s = p(w)))
											? (s
													? ((s = !1),
														(a =
															m && p(m) ? m : []))
													: (a = m && g(m) ? m : {}),
												y(v, {
													name: _,
													newValue: u(N, a, w)
												}))
											: typeof w < "u" &&
												y(v, { name: _, newValue: w }))
					return v
				}
			},
			function (n, r, i) {
				Object.defineProperty(r, "__esModule", { value: !0 }),
					(r.default = r.BlockEmbed = r.bubbleFormats = void 0)
				var o = (function () {
						function b(S, A) {
							for (var L = 0; L < A.length; L++) {
								var M = A[L]
								;(M.enumerable = M.enumerable || !1),
									(M.configurable = !0),
									"value" in M && (M.writable = !0),
									Object.defineProperty(S, M.key, M)
							}
						}
						return function (S, A, L) {
							return A && b(S.prototype, A), L && b(S, L), S
						}
					})(),
					l = function b(S, A, L) {
						S === null && (S = Function.prototype)
						var M = Object.getOwnPropertyDescriptor(S, A)
						if (M === void 0) {
							var U = Object.getPrototypeOf(S)
							return U === null ? void 0 : b(U, A, L)
						} else {
							if ("value" in M) return M.value
							var V = M.get
							return V === void 0 ? void 0 : V.call(L)
						}
					},
					h = i(3),
					p = v(h),
					g = i(2),
					y = v(g),
					f = i(0),
					u = v(f),
					c = i(16),
					_ = v(c),
					m = i(6),
					w = v(m),
					s = i(7),
					a = v(s)
				function v(b) {
					return b && b.__esModule ? b : { default: b }
				}
				function d(b, S) {
					if (!(b instanceof S))
						throw new TypeError("Cannot call a class as a function")
				}
				function E(b, S) {
					if (!b)
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						)
					return S && (typeof S == "object" || typeof S == "function")
						? S
						: b
				}
				function N(b, S) {
					if (typeof S != "function" && S !== null)
						throw new TypeError(
							"Super expression must either be null or a function, not " +
								typeof S
						)
					;(b.prototype = Object.create(S && S.prototype, {
						constructor: {
							value: b,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					})),
						S &&
							(Object.setPrototypeOf
								? Object.setPrototypeOf(b, S)
								: (b.__proto__ = S))
				}
				var k = 1,
					O = (function (b) {
						N(S, b)
						function S() {
							return (
								d(this, S),
								E(
									this,
									(
										S.__proto__ || Object.getPrototypeOf(S)
									).apply(this, arguments)
								)
							)
						}
						return (
							o(S, [
								{
									key: "attach",
									value: function () {
										l(
											S.prototype.__proto__ ||
												Object.getPrototypeOf(
													S.prototype
												),
											"attach",
											this
										).call(this),
											(this.attributes =
												new u.default.Attributor.Store(
													this.domNode
												))
									}
								},
								{
									key: "delta",
									value: function () {
										return new y.default().insert(
											this.value(),
											(0, p.default)(
												this.formats(),
												this.attributes.values()
											)
										)
									}
								},
								{
									key: "format",
									value: function (L, M) {
										var U = u.default.query(
											L,
											u.default.Scope.BLOCK_ATTRIBUTE
										)
										U != null &&
											this.attributes.attribute(U, M)
									}
								},
								{
									key: "formatAt",
									value: function (L, M, U, V) {
										this.format(U, V)
									}
								},
								{
									key: "insertAt",
									value: function (L, M, U) {
										if (
											typeof M == "string" &&
											M.endsWith(`
`)
										) {
											var V = u.default.create(j.blotName)
											this.parent.insertBefore(
												V,
												L === 0 ? this : this.next
											),
												V.insertAt(0, M.slice(0, -1))
										} else
											l(
												S.prototype.__proto__ ||
													Object.getPrototypeOf(
														S.prototype
													),
												"insertAt",
												this
											).call(this, L, M, U)
									}
								}
							]),
							S
						)
					})(u.default.Embed)
				O.scope = u.default.Scope.BLOCK_BLOT
				var j = (function (b) {
					N(S, b)
					function S(A) {
						d(this, S)
						var L = E(
							this,
							(S.__proto__ || Object.getPrototypeOf(S)).call(
								this,
								A
							)
						)
						return (L.cache = {}), L
					}
					return (
						o(S, [
							{
								key: "delta",
								value: function () {
									return (
										this.cache.delta == null &&
											(this.cache.delta =
												this.descendants(u.default.Leaf)
													.reduce(function (L, M) {
														return M.length() === 0
															? L
															: L.insert(
																	M.value(),
																	x(M)
																)
													}, new y.default())
													.insert(
														`
`,
														x(this)
													)),
										this.cache.delta
									)
								}
							},
							{
								key: "deleteAt",
								value: function (L, M) {
									l(
										S.prototype.__proto__ ||
											Object.getPrototypeOf(S.prototype),
										"deleteAt",
										this
									).call(this, L, M),
										(this.cache = {})
								}
							},
							{
								key: "formatAt",
								value: function (L, M, U, V) {
									M <= 0 ||
										(u.default.query(
											U,
											u.default.Scope.BLOCK
										)
											? L + M === this.length() &&
												this.format(U, V)
											: l(
													S.prototype.__proto__ ||
														Object.getPrototypeOf(
															S.prototype
														),
													"formatAt",
													this
												).call(
													this,
													L,
													Math.min(
														M,
														this.length() - L - 1
													),
													U,
													V
												),
										(this.cache = {}))
								}
							},
							{
								key: "insertAt",
								value: function (L, M, U) {
									if (U != null)
										return l(
											S.prototype.__proto__ ||
												Object.getPrototypeOf(
													S.prototype
												),
											"insertAt",
											this
										).call(this, L, M, U)
									if (M.length !== 0) {
										var V = M.split(`
`),
											G = V.shift()
										G.length > 0 &&
											(L < this.length() - 1 ||
											this.children.tail == null
												? l(
														S.prototype.__proto__ ||
															Object.getPrototypeOf(
																S.prototype
															),
														"insertAt",
														this
													).call(
														this,
														Math.min(
															L,
															this.length() - 1
														),
														G
													)
												: this.children.tail.insertAt(
														this.children.tail.length(),
														G
													),
											(this.cache = {}))
										var q = this
										V.reduce(function (R, T) {
											return (
												(q = q.split(R, !0)),
												q.insertAt(0, T),
												T.length
											)
										}, L + G.length)
									}
								}
							},
							{
								key: "insertBefore",
								value: function (L, M) {
									var U = this.children.head
									l(
										S.prototype.__proto__ ||
											Object.getPrototypeOf(S.prototype),
										"insertBefore",
										this
									).call(this, L, M),
										U instanceof _.default && U.remove(),
										(this.cache = {})
								}
							},
							{
								key: "length",
								value: function () {
									return (
										this.cache.length == null &&
											(this.cache.length =
												l(
													S.prototype.__proto__ ||
														Object.getPrototypeOf(
															S.prototype
														),
													"length",
													this
												).call(this) + k),
										this.cache.length
									)
								}
							},
							{
								key: "moveChildren",
								value: function (L, M) {
									l(
										S.prototype.__proto__ ||
											Object.getPrototypeOf(S.prototype),
										"moveChildren",
										this
									).call(this, L, M),
										(this.cache = {})
								}
							},
							{
								key: "optimize",
								value: function (L) {
									l(
										S.prototype.__proto__ ||
											Object.getPrototypeOf(S.prototype),
										"optimize",
										this
									).call(this, L),
										(this.cache = {})
								}
							},
							{
								key: "path",
								value: function (L) {
									return l(
										S.prototype.__proto__ ||
											Object.getPrototypeOf(S.prototype),
										"path",
										this
									).call(this, L, !0)
								}
							},
							{
								key: "removeChild",
								value: function (L) {
									l(
										S.prototype.__proto__ ||
											Object.getPrototypeOf(S.prototype),
										"removeChild",
										this
									).call(this, L),
										(this.cache = {})
								}
							},
							{
								key: "split",
								value: function (L) {
									var M =
										arguments.length > 1 &&
										arguments[1] !== void 0
											? arguments[1]
											: !1
									if (
										M &&
										(L === 0 || L >= this.length() - k)
									) {
										var U = this.clone()
										return L === 0
											? (this.parent.insertBefore(
													U,
													this
												),
												this)
											: (this.parent.insertBefore(
													U,
													this.next
												),
												U)
									} else {
										var V = l(
											S.prototype.__proto__ ||
												Object.getPrototypeOf(
													S.prototype
												),
											"split",
											this
										).call(this, L, M)
										return (this.cache = {}), V
									}
								}
							}
						]),
						S
					)
				})(u.default.Block)
				;(j.blotName = "block"),
					(j.tagName = "P"),
					(j.defaultChild = "break"),
					(j.allowedChildren = [
						w.default,
						u.default.Embed,
						a.default
					])
				function x(b) {
					var S =
						arguments.length > 1 && arguments[1] !== void 0
							? arguments[1]
							: {}
					return b == null ||
						(typeof b.formats == "function" &&
							(S = (0, p.default)(S, b.formats())),
						b.parent == null ||
							b.parent.blotName == "scroll" ||
							b.parent.statics.scope !== b.statics.scope)
						? S
						: x(b.parent, S)
				}
				;(r.bubbleFormats = x), (r.BlockEmbed = O), (r.default = j)
			},
			function (n, r, i) {
				Object.defineProperty(r, "__esModule", { value: !0 }),
					(r.default = r.overload = r.expandConfig = void 0)
				var o =
						typeof Symbol == "function" &&
						typeof Symbol.iterator == "symbol"
							? function (q) {
									return typeof q
								}
							: function (q) {
									return q &&
										typeof Symbol == "function" &&
										q.constructor === Symbol &&
										q !== Symbol.prototype
										? "symbol"
										: typeof q
								},
					l = (function () {
						function q(R, T) {
							var D = [],
								F = !0,
								K = !1,
								H = void 0
							try {
								for (
									var C = R[Symbol.iterator](), $;
									!(F = ($ = C.next()).done) &&
									(D.push($.value), !(T && D.length === T));
									F = !0
								);
							} catch (Q) {
								;(K = !0), (H = Q)
							} finally {
								try {
									!F && C.return && C.return()
								} finally {
									if (K) throw H
								}
							}
							return D
						}
						return function (R, T) {
							if (Array.isArray(R)) return R
							if (Symbol.iterator in Object(R)) return q(R, T)
							throw new TypeError(
								"Invalid attempt to destructure non-iterable instance"
							)
						}
					})(),
					h = (function () {
						function q(R, T) {
							for (var D = 0; D < T.length; D++) {
								var F = T[D]
								;(F.enumerable = F.enumerable || !1),
									(F.configurable = !0),
									"value" in F && (F.writable = !0),
									Object.defineProperty(R, F.key, F)
							}
						}
						return function (R, T, D) {
							return T && q(R.prototype, T), D && q(R, D), R
						}
					})()
				i(50)
				var p = i(2),
					g = x(p),
					y = i(14),
					f = x(y),
					u = i(8),
					c = x(u),
					_ = i(9),
					m = x(_),
					w = i(0),
					s = x(w),
					a = i(15),
					v = x(a),
					d = i(3),
					E = x(d),
					N = i(10),
					k = x(N),
					O = i(34),
					j = x(O)
				function x(q) {
					return q && q.__esModule ? q : { default: q }
				}
				function b(q, R, T) {
					return (
						R in q
							? Object.defineProperty(q, R, {
									value: T,
									enumerable: !0,
									configurable: !0,
									writable: !0
								})
							: (q[R] = T),
						q
					)
				}
				function S(q, R) {
					if (!(q instanceof R))
						throw new TypeError("Cannot call a class as a function")
				}
				var A = (0, k.default)("quill"),
					L = (function () {
						h(q, null, [
							{
								key: "debug",
								value: function (T) {
									T === !0 && (T = "log"), k.default.level(T)
								}
							},
							{
								key: "find",
								value: function (T) {
									return T.__quill || s.default.find(T)
								}
							},
							{
								key: "import",
								value: function (T) {
									return (
										this.imports[T] == null &&
											A.error(
												"Cannot import " +
													T +
													". Are you sure it was registered?"
											),
										this.imports[T]
									)
								}
							},
							{
								key: "register",
								value: function (T, D) {
									var F = this,
										K =
											arguments.length > 2 &&
											arguments[2] !== void 0
												? arguments[2]
												: !1
									if (typeof T != "string") {
										var H = T.attrName || T.blotName
										typeof H == "string"
											? this.register(
													"formats/" + H,
													T,
													D
												)
											: Object.keys(T).forEach(
													function (C) {
														F.register(C, T[C], D)
													}
												)
									} else
										this.imports[T] != null &&
											!K &&
											A.warn(
												"Overwriting " + T + " with",
												D
											),
											(this.imports[T] = D),
											(T.startsWith("blots/") ||
												T.startsWith("formats/")) &&
											D.blotName !== "abstract"
												? s.default.register(D)
												: T.startsWith("modules") &&
													typeof D.register ==
														"function" &&
													D.register()
								}
							}
						])
						function q(R) {
							var T = this,
								D =
									arguments.length > 1 &&
									arguments[1] !== void 0
										? arguments[1]
										: {}
							if (
								(S(this, q),
								(this.options = M(R, D)),
								(this.container = this.options.container),
								this.container == null)
							)
								return A.error("Invalid Quill container", R)
							this.options.debug && q.debug(this.options.debug)
							var F = this.container.innerHTML.trim()
							this.container.classList.add("ql-container"),
								(this.container.innerHTML = ""),
								(this.container.__quill = this),
								(this.root = this.addContainer("ql-editor")),
								this.root.classList.add("ql-blank"),
								this.root.setAttribute("data-gramm", !1),
								(this.scrollingContainer =
									this.options.scrollingContainer ||
									this.root),
								(this.emitter = new c.default()),
								(this.scroll = s.default.create(this.root, {
									emitter: this.emitter,
									whitelist: this.options.formats
								})),
								(this.editor = new f.default(this.scroll)),
								(this.selection = new v.default(
									this.scroll,
									this.emitter
								)),
								(this.theme = new this.options.theme(
									this,
									this.options
								)),
								(this.keyboard =
									this.theme.addModule("keyboard")),
								(this.clipboard =
									this.theme.addModule("clipboard")),
								(this.history =
									this.theme.addModule("history")),
								this.theme.init(),
								this.emitter.on(
									c.default.events.EDITOR_CHANGE,
									function (H) {
										H === c.default.events.TEXT_CHANGE &&
											T.root.classList.toggle(
												"ql-blank",
												T.editor.isBlank()
											)
									}
								),
								this.emitter.on(
									c.default.events.SCROLL_UPDATE,
									function (H, C) {
										var $ = T.selection.lastRange,
											Q =
												$ && $.length === 0
													? $.index
													: void 0
										U.call(
											T,
											function () {
												return T.editor.update(
													null,
													C,
													Q
												)
											},
											H
										)
									}
								)
							var K = this.clipboard.convert(
								`<div class='ql-editor' style="white-space: normal;">` +
									F +
									"<p><br></p></div>"
							)
							this.setContents(K),
								this.history.clear(),
								this.options.placeholder &&
									this.root.setAttribute(
										"data-placeholder",
										this.options.placeholder
									),
								this.options.readOnly && this.disable()
						}
						return (
							h(q, [
								{
									key: "addContainer",
									value: function (T) {
										var D =
											arguments.length > 1 &&
											arguments[1] !== void 0
												? arguments[1]
												: null
										if (typeof T == "string") {
											var F = T
											;(T =
												document.createElement("div")),
												T.classList.add(F)
										}
										return (
											this.container.insertBefore(T, D), T
										)
									}
								},
								{
									key: "blur",
									value: function () {
										this.selection.setRange(null)
									}
								},
								{
									key: "deleteText",
									value: function (T, D, F) {
										var K = this,
											H = V(T, D, F),
											C = l(H, 4)
										return (
											(T = C[0]),
											(D = C[1]),
											(F = C[3]),
											U.call(
												this,
												function () {
													return K.editor.deleteText(
														T,
														D
													)
												},
												F,
												T,
												-1 * D
											)
										)
									}
								},
								{
									key: "disable",
									value: function () {
										this.enable(!1)
									}
								},
								{
									key: "enable",
									value: function () {
										var T =
											arguments.length > 0 &&
											arguments[0] !== void 0
												? arguments[0]
												: !0
										this.scroll.enable(T),
											this.container.classList.toggle(
												"ql-disabled",
												!T
											)
									}
								},
								{
									key: "focus",
									value: function () {
										var T =
											this.scrollingContainer.scrollTop
										this.selection.focus(),
											(this.scrollingContainer.scrollTop =
												T),
											this.scrollIntoView()
									}
								},
								{
									key: "format",
									value: function (T, D) {
										var F = this,
											K =
												arguments.length > 2 &&
												arguments[2] !== void 0
													? arguments[2]
													: c.default.sources.API
										return U.call(
											this,
											function () {
												var H = F.getSelection(!0),
													C = new g.default()
												if (H == null) return C
												if (
													s.default.query(
														T,
														s.default.Scope.BLOCK
													)
												)
													C = F.editor.formatLine(
														H.index,
														H.length,
														b({}, T, D)
													)
												else {
													if (H.length === 0)
														return (
															F.selection.format(
																T,
																D
															),
															C
														)
													C = F.editor.formatText(
														H.index,
														H.length,
														b({}, T, D)
													)
												}
												return (
													F.setSelection(
														H,
														c.default.sources.SILENT
													),
													C
												)
											},
											K
										)
									}
								},
								{
									key: "formatLine",
									value: function (T, D, F, K, H) {
										var C = this,
											$ = void 0,
											Q = V(T, D, F, K, H),
											Y = l(Q, 4)
										return (
											(T = Y[0]),
											(D = Y[1]),
											($ = Y[2]),
											(H = Y[3]),
											U.call(
												this,
												function () {
													return C.editor.formatLine(
														T,
														D,
														$
													)
												},
												H,
												T,
												0
											)
										)
									}
								},
								{
									key: "formatText",
									value: function (T, D, F, K, H) {
										var C = this,
											$ = void 0,
											Q = V(T, D, F, K, H),
											Y = l(Q, 4)
										return (
											(T = Y[0]),
											(D = Y[1]),
											($ = Y[2]),
											(H = Y[3]),
											U.call(
												this,
												function () {
													return C.editor.formatText(
														T,
														D,
														$
													)
												},
												H,
												T,
												0
											)
										)
									}
								},
								{
									key: "getBounds",
									value: function (T) {
										var D =
												arguments.length > 1 &&
												arguments[1] !== void 0
													? arguments[1]
													: 0,
											F = void 0
										typeof T == "number"
											? (F = this.selection.getBounds(
													T,
													D
												))
											: (F = this.selection.getBounds(
													T.index,
													T.length
												))
										var K =
											this.container.getBoundingClientRect()
										return {
											bottom: F.bottom - K.top,
											height: F.height,
											left: F.left - K.left,
											right: F.right - K.left,
											top: F.top - K.top,
											width: F.width
										}
									}
								},
								{
									key: "getContents",
									value: function () {
										var T =
												arguments.length > 0 &&
												arguments[0] !== void 0
													? arguments[0]
													: 0,
											D =
												arguments.length > 1 &&
												arguments[1] !== void 0
													? arguments[1]
													: this.getLength() - T,
											F = V(T, D),
											K = l(F, 2)
										return (
											(T = K[0]),
											(D = K[1]),
											this.editor.getContents(T, D)
										)
									}
								},
								{
									key: "getFormat",
									value: function () {
										var T =
												arguments.length > 0 &&
												arguments[0] !== void 0
													? arguments[0]
													: this.getSelection(!0),
											D =
												arguments.length > 1 &&
												arguments[1] !== void 0
													? arguments[1]
													: 0
										return typeof T == "number"
											? this.editor.getFormat(T, D)
											: this.editor.getFormat(
													T.index,
													T.length
												)
									}
								},
								{
									key: "getIndex",
									value: function (T) {
										return T.offset(this.scroll)
									}
								},
								{
									key: "getLength",
									value: function () {
										return this.scroll.length()
									}
								},
								{
									key: "getLeaf",
									value: function (T) {
										return this.scroll.leaf(T)
									}
								},
								{
									key: "getLine",
									value: function (T) {
										return this.scroll.line(T)
									}
								},
								{
									key: "getLines",
									value: function () {
										var T =
												arguments.length > 0 &&
												arguments[0] !== void 0
													? arguments[0]
													: 0,
											D =
												arguments.length > 1 &&
												arguments[1] !== void 0
													? arguments[1]
													: Number.MAX_VALUE
										return typeof T != "number"
											? this.scroll.lines(
													T.index,
													T.length
												)
											: this.scroll.lines(T, D)
									}
								},
								{
									key: "getModule",
									value: function (T) {
										return this.theme.modules[T]
									}
								},
								{
									key: "getSelection",
									value: function () {
										var T =
											arguments.length > 0 &&
											arguments[0] !== void 0
												? arguments[0]
												: !1
										return (
											T && this.focus(),
											this.update(),
											this.selection.getRange()[0]
										)
									}
								},
								{
									key: "getText",
									value: function () {
										var T =
												arguments.length > 0 &&
												arguments[0] !== void 0
													? arguments[0]
													: 0,
											D =
												arguments.length > 1 &&
												arguments[1] !== void 0
													? arguments[1]
													: this.getLength() - T,
											F = V(T, D),
											K = l(F, 2)
										return (
											(T = K[0]),
											(D = K[1]),
											this.editor.getText(T, D)
										)
									}
								},
								{
									key: "hasFocus",
									value: function () {
										return this.selection.hasFocus()
									}
								},
								{
									key: "insertEmbed",
									value: function (T, D, F) {
										var K = this,
											H =
												arguments.length > 3 &&
												arguments[3] !== void 0
													? arguments[3]
													: q.sources.API
										return U.call(
											this,
											function () {
												return K.editor.insertEmbed(
													T,
													D,
													F
												)
											},
											H,
											T
										)
									}
								},
								{
									key: "insertText",
									value: function (T, D, F, K, H) {
										var C = this,
											$ = void 0,
											Q = V(T, 0, F, K, H),
											Y = l(Q, 4)
										return (
											(T = Y[0]),
											($ = Y[2]),
											(H = Y[3]),
											U.call(
												this,
												function () {
													return C.editor.insertText(
														T,
														D,
														$
													)
												},
												H,
												T,
												D.length
											)
										)
									}
								},
								{
									key: "isEnabled",
									value: function () {
										return !this.container.classList.contains(
											"ql-disabled"
										)
									}
								},
								{
									key: "off",
									value: function () {
										return this.emitter.off.apply(
											this.emitter,
											arguments
										)
									}
								},
								{
									key: "on",
									value: function () {
										return this.emitter.on.apply(
											this.emitter,
											arguments
										)
									}
								},
								{
									key: "once",
									value: function () {
										return this.emitter.once.apply(
											this.emitter,
											arguments
										)
									}
								},
								{
									key: "pasteHTML",
									value: function (T, D, F) {
										this.clipboard.dangerouslyPasteHTML(
											T,
											D,
											F
										)
									}
								},
								{
									key: "removeFormat",
									value: function (T, D, F) {
										var K = this,
											H = V(T, D, F),
											C = l(H, 4)
										return (
											(T = C[0]),
											(D = C[1]),
											(F = C[3]),
											U.call(
												this,
												function () {
													return K.editor.removeFormat(
														T,
														D
													)
												},
												F,
												T
											)
										)
									}
								},
								{
									key: "scrollIntoView",
									value: function () {
										this.selection.scrollIntoView(
											this.scrollingContainer
										)
									}
								},
								{
									key: "setContents",
									value: function (T) {
										var D = this,
											F =
												arguments.length > 1 &&
												arguments[1] !== void 0
													? arguments[1]
													: c.default.sources.API
										return U.call(
											this,
											function () {
												T = new g.default(T)
												var K = D.getLength(),
													H = D.editor.deleteText(
														0,
														K
													),
													C = D.editor.applyDelta(T),
													$ = C.ops[C.ops.length - 1]
												$ != null &&
													typeof $.insert ==
														"string" &&
													$.insert[
														$.insert.length - 1
													] ===
														`
` &&
													(D.editor.deleteText(
														D.getLength() - 1,
														1
													),
													C.delete(1))
												var Q = H.compose(C)
												return Q
											},
											F
										)
									}
								},
								{
									key: "setSelection",
									value: function (T, D, F) {
										if (T == null)
											this.selection.setRange(
												null,
												D || q.sources.API
											)
										else {
											var K = V(T, D, F),
												H = l(K, 4)
											;(T = H[0]),
												(D = H[1]),
												(F = H[3]),
												this.selection.setRange(
													new a.Range(T, D),
													F
												),
												F !==
													c.default.sources.SILENT &&
													this.selection.scrollIntoView(
														this.scrollingContainer
													)
										}
									}
								},
								{
									key: "setText",
									value: function (T) {
										var D =
												arguments.length > 1 &&
												arguments[1] !== void 0
													? arguments[1]
													: c.default.sources.API,
											F = new g.default().insert(T)
										return this.setContents(F, D)
									}
								},
								{
									key: "update",
									value: function () {
										var T =
												arguments.length > 0 &&
												arguments[0] !== void 0
													? arguments[0]
													: c.default.sources.USER,
											D = this.scroll.update(T)
										return this.selection.update(T), D
									}
								},
								{
									key: "updateContents",
									value: function (T) {
										var D = this,
											F =
												arguments.length > 1 &&
												arguments[1] !== void 0
													? arguments[1]
													: c.default.sources.API
										return U.call(
											this,
											function () {
												return (
													(T = new g.default(T)),
													D.editor.applyDelta(T, F)
												)
											},
											F,
											!0
										)
									}
								}
							]),
							q
						)
					})()
				;(L.DEFAULTS = {
					bounds: null,
					formats: null,
					modules: {},
					placeholder: "",
					readOnly: !1,
					scrollingContainer: null,
					strict: !0,
					theme: "default"
				}),
					(L.events = c.default.events),
					(L.sources = c.default.sources),
					(L.version = "1.3.7"),
					(L.imports = {
						delta: g.default,
						parchment: s.default,
						"core/module": m.default,
						"core/theme": j.default
					})
				function M(q, R) {
					if (
						((R = (0, E.default)(
							!0,
							{
								container: q,
								modules: {
									clipboard: !0,
									keyboard: !0,
									history: !0
								}
							},
							R
						)),
						!R.theme || R.theme === L.DEFAULTS.theme)
					)
						R.theme = j.default
					else if (
						((R.theme = L.import("themes/" + R.theme)),
						R.theme == null)
					)
						throw new Error(
							"Invalid theme " +
								R.theme +
								". Did you register it?"
						)
					var T = (0, E.default)(!0, {}, R.theme.DEFAULTS)
					;[T, R].forEach(function (K) {
						;(K.modules = K.modules || {}),
							Object.keys(K.modules).forEach(function (H) {
								K.modules[H] === !0 && (K.modules[H] = {})
							})
					})
					var D = Object.keys(T.modules).concat(
							Object.keys(R.modules)
						),
						F = D.reduce(function (K, H) {
							var C = L.import("modules/" + H)
							return (
								C == null
									? A.error(
											"Cannot load " +
												H +
												" module. Are you sure you registered it?"
										)
									: (K[H] = C.DEFAULTS || {}),
								K
							)
						}, {})
					return (
						R.modules != null &&
							R.modules.toolbar &&
							R.modules.toolbar.constructor !== Object &&
							(R.modules.toolbar = {
								container: R.modules.toolbar
							}),
						(R = (0, E.default)(
							!0,
							{},
							L.DEFAULTS,
							{ modules: F },
							T,
							R
						)),
						["bounds", "container", "scrollingContainer"].forEach(
							function (K) {
								typeof R[K] == "string" &&
									(R[K] = document.querySelector(R[K]))
							}
						),
						(R.modules = Object.keys(R.modules).reduce(function (
							K,
							H
						) {
							return R.modules[H] && (K[H] = R.modules[H]), K
						}, {})),
						R
					)
				}
				function U(q, R, T, D) {
					if (
						this.options.strict &&
						!this.isEnabled() &&
						R === c.default.sources.USER
					)
						return new g.default()
					var F = T == null ? null : this.getSelection(),
						K = this.editor.delta,
						H = q()
					if (
						(F != null &&
							(T === !0 && (T = F.index),
							D == null
								? (F = G(F, H, R))
								: D !== 0 && (F = G(F, T, D, R)),
							this.setSelection(F, c.default.sources.SILENT)),
						H.length() > 0)
					) {
						var C,
							$ = [c.default.events.TEXT_CHANGE, H, K, R]
						if (
							((C = this.emitter).emit.apply(
								C,
								[c.default.events.EDITOR_CHANGE].concat($)
							),
							R !== c.default.sources.SILENT)
						) {
							var Q
							;(Q = this.emitter).emit.apply(Q, $)
						}
					}
					return H
				}
				function V(q, R, T, D, F) {
					var K = {}
					return (
						typeof q.index == "number" &&
						typeof q.length == "number"
							? typeof R != "number"
								? ((F = D),
									(D = T),
									(T = R),
									(R = q.length),
									(q = q.index))
								: ((R = q.length), (q = q.index))
							: typeof R != "number" &&
								((F = D), (D = T), (T = R), (R = 0)),
						(typeof T > "u" ? "undefined" : o(T)) === "object"
							? ((K = T), (F = D))
							: typeof T == "string" &&
								(D != null ? (K[T] = D) : (F = T)),
						(F = F || c.default.sources.API),
						[q, R, K, F]
					)
				}
				function G(q, R, T, D) {
					if (q == null) return null
					var F = void 0,
						K = void 0
					if (R instanceof g.default) {
						var H = [q.index, q.index + q.length].map(function (Y) {
								return R.transformPosition(
									Y,
									D !== c.default.sources.USER
								)
							}),
							C = l(H, 2)
						;(F = C[0]), (K = C[1])
					} else {
						var $ = [q.index, q.index + q.length].map(function (Y) {
								return Y < R ||
									(Y === R && D === c.default.sources.USER)
									? Y
									: T >= 0
										? Y + T
										: Math.max(R, Y + T)
							}),
							Q = l($, 2)
						;(F = Q[0]), (K = Q[1])
					}
					return new a.Range(F, K - F)
				}
				;(r.expandConfig = M), (r.overload = V), (r.default = L)
			},
			function (n, r, i) {
				Object.defineProperty(r, "__esModule", { value: !0 })
				var o = (function () {
						function w(s, a) {
							for (var v = 0; v < a.length; v++) {
								var d = a[v]
								;(d.enumerable = d.enumerable || !1),
									(d.configurable = !0),
									"value" in d && (d.writable = !0),
									Object.defineProperty(s, d.key, d)
							}
						}
						return function (s, a, v) {
							return a && w(s.prototype, a), v && w(s, v), s
						}
					})(),
					l = function w(s, a, v) {
						s === null && (s = Function.prototype)
						var d = Object.getOwnPropertyDescriptor(s, a)
						if (d === void 0) {
							var E = Object.getPrototypeOf(s)
							return E === null ? void 0 : w(E, a, v)
						} else {
							if ("value" in d) return d.value
							var N = d.get
							return N === void 0 ? void 0 : N.call(v)
						}
					},
					h = i(7),
					p = f(h),
					g = i(0),
					y = f(g)
				function f(w) {
					return w && w.__esModule ? w : { default: w }
				}
				function u(w, s) {
					if (!(w instanceof s))
						throw new TypeError("Cannot call a class as a function")
				}
				function c(w, s) {
					if (!w)
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						)
					return s && (typeof s == "object" || typeof s == "function")
						? s
						: w
				}
				function _(w, s) {
					if (typeof s != "function" && s !== null)
						throw new TypeError(
							"Super expression must either be null or a function, not " +
								typeof s
						)
					;(w.prototype = Object.create(s && s.prototype, {
						constructor: {
							value: w,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					})),
						s &&
							(Object.setPrototypeOf
								? Object.setPrototypeOf(w, s)
								: (w.__proto__ = s))
				}
				var m = (function (w) {
					_(s, w)
					function s() {
						return (
							u(this, s),
							c(
								this,
								(s.__proto__ || Object.getPrototypeOf(s)).apply(
									this,
									arguments
								)
							)
						)
					}
					return (
						o(
							s,
							[
								{
									key: "formatAt",
									value: function (v, d, E, N) {
										if (
											s.compare(
												this.statics.blotName,
												E
											) < 0 &&
											y.default.query(
												E,
												y.default.Scope.BLOT
											)
										) {
											var k = this.isolate(v, d)
											N && k.wrap(E, N)
										} else
											l(
												s.prototype.__proto__ ||
													Object.getPrototypeOf(
														s.prototype
													),
												"formatAt",
												this
											).call(this, v, d, E, N)
									}
								},
								{
									key: "optimize",
									value: function (v) {
										if (
											(l(
												s.prototype.__proto__ ||
													Object.getPrototypeOf(
														s.prototype
													),
												"optimize",
												this
											).call(this, v),
											this.parent instanceof s &&
												s.compare(
													this.statics.blotName,
													this.parent.statics.blotName
												) > 0)
										) {
											var d = this.parent.isolate(
												this.offset(),
												this.length()
											)
											this.moveChildren(d), d.wrap(this)
										}
									}
								}
							],
							[
								{
									key: "compare",
									value: function (v, d) {
										var E = s.order.indexOf(v),
											N = s.order.indexOf(d)
										return E >= 0 || N >= 0
											? E - N
											: v === d
												? 0
												: v < d
													? -1
													: 1
									}
								}
							]
						),
						s
					)
				})(y.default.Inline)
				;(m.allowedChildren = [m, y.default.Embed, p.default]),
					(m.order = [
						"cursor",
						"inline",
						"underline",
						"strike",
						"italic",
						"bold",
						"script",
						"link",
						"code"
					]),
					(r.default = m)
			},
			function (n, r, i) {
				Object.defineProperty(r, "__esModule", { value: !0 })
				var o = i(0),
					l = h(o)
				function h(u) {
					return u && u.__esModule ? u : { default: u }
				}
				function p(u, c) {
					if (!(u instanceof c))
						throw new TypeError("Cannot call a class as a function")
				}
				function g(u, c) {
					if (!u)
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						)
					return c && (typeof c == "object" || typeof c == "function")
						? c
						: u
				}
				function y(u, c) {
					if (typeof c != "function" && c !== null)
						throw new TypeError(
							"Super expression must either be null or a function, not " +
								typeof c
						)
					;(u.prototype = Object.create(c && c.prototype, {
						constructor: {
							value: u,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					})),
						c &&
							(Object.setPrototypeOf
								? Object.setPrototypeOf(u, c)
								: (u.__proto__ = c))
				}
				var f = (function (u) {
					y(c, u)
					function c() {
						return (
							p(this, c),
							g(
								this,
								(c.__proto__ || Object.getPrototypeOf(c)).apply(
									this,
									arguments
								)
							)
						)
					}
					return c
				})(l.default.Text)
				r.default = f
			},
			function (n, r, i) {
				Object.defineProperty(r, "__esModule", { value: !0 })
				var o = (function () {
						function a(v, d) {
							for (var E = 0; E < d.length; E++) {
								var N = d[E]
								;(N.enumerable = N.enumerable || !1),
									(N.configurable = !0),
									"value" in N && (N.writable = !0),
									Object.defineProperty(v, N.key, N)
							}
						}
						return function (v, d, E) {
							return d && a(v.prototype, d), E && a(v, E), v
						}
					})(),
					l = function a(v, d, E) {
						v === null && (v = Function.prototype)
						var N = Object.getOwnPropertyDescriptor(v, d)
						if (N === void 0) {
							var k = Object.getPrototypeOf(v)
							return k === null ? void 0 : a(k, d, E)
						} else {
							if ("value" in N) return N.value
							var O = N.get
							return O === void 0 ? void 0 : O.call(E)
						}
					},
					h = i(54),
					p = f(h),
					g = i(10),
					y = f(g)
				function f(a) {
					return a && a.__esModule ? a : { default: a }
				}
				function u(a, v) {
					if (!(a instanceof v))
						throw new TypeError("Cannot call a class as a function")
				}
				function c(a, v) {
					if (!a)
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						)
					return v && (typeof v == "object" || typeof v == "function")
						? v
						: a
				}
				function _(a, v) {
					if (typeof v != "function" && v !== null)
						throw new TypeError(
							"Super expression must either be null or a function, not " +
								typeof v
						)
					;(a.prototype = Object.create(v && v.prototype, {
						constructor: {
							value: a,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					})),
						v &&
							(Object.setPrototypeOf
								? Object.setPrototypeOf(a, v)
								: (a.__proto__ = v))
				}
				var m = (0, y.default)("quill:events"),
					w = ["selectionchange", "mousedown", "mouseup", "click"]
				w.forEach(function (a) {
					document.addEventListener(a, function () {
						for (
							var v = arguments.length, d = Array(v), E = 0;
							E < v;
							E++
						)
							d[E] = arguments[E]
						;[].slice
							.call(document.querySelectorAll(".ql-container"))
							.forEach(function (N) {
								if (N.__quill && N.__quill.emitter) {
									var k
									;(k = N.__quill.emitter).handleDOM.apply(
										k,
										d
									)
								}
							})
					})
				})
				var s = (function (a) {
					_(v, a)
					function v() {
						u(this, v)
						var d = c(
							this,
							(v.__proto__ || Object.getPrototypeOf(v)).call(this)
						)
						return (d.listeners = {}), d.on("error", m.error), d
					}
					return (
						o(v, [
							{
								key: "emit",
								value: function () {
									m.log.apply(m, arguments),
										l(
											v.prototype.__proto__ ||
												Object.getPrototypeOf(
													v.prototype
												),
											"emit",
											this
										).apply(this, arguments)
								}
							},
							{
								key: "handleDOM",
								value: function (E) {
									for (
										var N = arguments.length,
											k = Array(N > 1 ? N - 1 : 0),
											O = 1;
										O < N;
										O++
									)
										k[O - 1] = arguments[O]
									;(this.listeners[E.type] || []).forEach(
										function (j) {
											var x = j.node,
												b = j.handler
											;(E.target === x ||
												x.contains(E.target)) &&
												b.apply(void 0, [E].concat(k))
										}
									)
								}
							},
							{
								key: "listenDOM",
								value: function (E, N, k) {
									this.listeners[E] ||
										(this.listeners[E] = []),
										this.listeners[E].push({
											node: N,
											handler: k
										})
								}
							}
						]),
						v
					)
				})(p.default)
				;(s.events = {
					EDITOR_CHANGE: "editor-change",
					SCROLL_BEFORE_UPDATE: "scroll-before-update",
					SCROLL_OPTIMIZE: "scroll-optimize",
					SCROLL_UPDATE: "scroll-update",
					SELECTION_CHANGE: "selection-change",
					TEXT_CHANGE: "text-change"
				}),
					(s.sources = {
						API: "api",
						SILENT: "silent",
						USER: "user"
					}),
					(r.default = s)
			},
			function (n, r, i) {
				Object.defineProperty(r, "__esModule", { value: !0 })
				function o(h, p) {
					if (!(h instanceof p))
						throw new TypeError("Cannot call a class as a function")
				}
				var l = function h(p) {
					var g =
						arguments.length > 1 && arguments[1] !== void 0
							? arguments[1]
							: {}
					o(this, h), (this.quill = p), (this.options = g)
				}
				;(l.DEFAULTS = {}), (r.default = l)
			},
			function (n, r, i) {
				Object.defineProperty(r, "__esModule", { value: !0 })
				var o = ["error", "warn", "log", "info"],
					l = "warn"
				function h(g) {
					if (o.indexOf(g) <= o.indexOf(l)) {
						for (
							var y,
								f = arguments.length,
								u = Array(f > 1 ? f - 1 : 0),
								c = 1;
							c < f;
							c++
						)
							u[c - 1] = arguments[c]
						;(y = console)[g].apply(y, u)
					}
				}
				function p(g) {
					return o.reduce(function (y, f) {
						return (y[f] = h.bind(console, f, g)), y
					}, {})
				}
				;(h.level = p.level =
					function (g) {
						l = g
					}),
					(r.default = p)
			},
			function (n, r, i) {
				var o = Array.prototype.slice,
					l = i(52),
					h = i(53),
					p = (n.exports = function (u, c, _) {
						return (
							_ || (_ = {}),
							u === c
								? !0
								: u instanceof Date && c instanceof Date
									? u.getTime() === c.getTime()
									: !u ||
										  !c ||
										  (typeof u != "object" &&
												typeof c != "object")
										? _.strict
											? u === c
											: u == c
										: f(u, c, _)
						)
					})
				function g(u) {
					return u == null
				}
				function y(u) {
					return !(
						!u ||
						typeof u != "object" ||
						typeof u.length != "number" ||
						typeof u.copy != "function" ||
						typeof u.slice != "function" ||
						(u.length > 0 && typeof u[0] != "number")
					)
				}
				function f(u, c, _) {
					var m, w
					if (g(u) || g(c) || u.prototype !== c.prototype) return !1
					if (h(u))
						return h(c)
							? ((u = o.call(u)), (c = o.call(c)), p(u, c, _))
							: !1
					if (y(u)) {
						if (!y(c) || u.length !== c.length) return !1
						for (m = 0; m < u.length; m++)
							if (u[m] !== c[m]) return !1
						return !0
					}
					try {
						var s = l(u),
							a = l(c)
					} catch {
						return !1
					}
					if (s.length != a.length) return !1
					for (s.sort(), a.sort(), m = s.length - 1; m >= 0; m--)
						if (s[m] != a[m]) return !1
					for (m = s.length - 1; m >= 0; m--)
						if (((w = s[m]), !p(u[w], c[w], _))) return !1
					return typeof u == typeof c
				}
			},
			function (n, r, i) {
				Object.defineProperty(r, "__esModule", { value: !0 })
				var o = i(1),
					l = (function () {
						function h(p, g, y) {
							y === void 0 && (y = {}),
								(this.attrName = p),
								(this.keyName = g)
							var f = o.Scope.TYPE & o.Scope.ATTRIBUTE
							y.scope != null
								? (this.scope = (y.scope & o.Scope.LEVEL) | f)
								: (this.scope = o.Scope.ATTRIBUTE),
								y.whitelist != null &&
									(this.whitelist = y.whitelist)
						}
						return (
							(h.keys = function (p) {
								return [].map.call(p.attributes, function (g) {
									return g.name
								})
							}),
							(h.prototype.add = function (p, g) {
								return this.canAdd(p, g)
									? (p.setAttribute(this.keyName, g), !0)
									: !1
							}),
							(h.prototype.canAdd = function (p, g) {
								var y = o.query(
									p,
									o.Scope.BLOT & (this.scope | o.Scope.TYPE)
								)
								return y == null
									? !1
									: this.whitelist == null
										? !0
										: typeof g == "string"
											? this.whitelist.indexOf(
													g.replace(/["']/g, "")
												) > -1
											: this.whitelist.indexOf(g) > -1
							}),
							(h.prototype.remove = function (p) {
								p.removeAttribute(this.keyName)
							}),
							(h.prototype.value = function (p) {
								var g = p.getAttribute(this.keyName)
								return this.canAdd(p, g) && g ? g : ""
							}),
							h
						)
					})()
				r.default = l
			},
			function (n, r, i) {
				Object.defineProperty(r, "__esModule", { value: !0 }),
					(r.default = r.Code = void 0)
				var o = (function () {
						function O(j, x) {
							var b = [],
								S = !0,
								A = !1,
								L = void 0
							try {
								for (
									var M = j[Symbol.iterator](), U;
									!(S = (U = M.next()).done) &&
									(b.push(U.value), !(x && b.length === x));
									S = !0
								);
							} catch (V) {
								;(A = !0), (L = V)
							} finally {
								try {
									!S && M.return && M.return()
								} finally {
									if (A) throw L
								}
							}
							return b
						}
						return function (j, x) {
							if (Array.isArray(j)) return j
							if (Symbol.iterator in Object(j)) return O(j, x)
							throw new TypeError(
								"Invalid attempt to destructure non-iterable instance"
							)
						}
					})(),
					l = (function () {
						function O(j, x) {
							for (var b = 0; b < x.length; b++) {
								var S = x[b]
								;(S.enumerable = S.enumerable || !1),
									(S.configurable = !0),
									"value" in S && (S.writable = !0),
									Object.defineProperty(j, S.key, S)
							}
						}
						return function (j, x, b) {
							return x && O(j.prototype, x), b && O(j, b), j
						}
					})(),
					h = function O(j, x, b) {
						j === null && (j = Function.prototype)
						var S = Object.getOwnPropertyDescriptor(j, x)
						if (S === void 0) {
							var A = Object.getPrototypeOf(j)
							return A === null ? void 0 : O(A, x, b)
						} else {
							if ("value" in S) return S.value
							var L = S.get
							return L === void 0 ? void 0 : L.call(b)
						}
					},
					p = i(2),
					g = a(p),
					y = i(0),
					f = a(y),
					u = i(4),
					c = a(u),
					_ = i(6),
					m = a(_),
					w = i(7),
					s = a(w)
				function a(O) {
					return O && O.__esModule ? O : { default: O }
				}
				function v(O, j) {
					if (!(O instanceof j))
						throw new TypeError("Cannot call a class as a function")
				}
				function d(O, j) {
					if (!O)
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						)
					return j && (typeof j == "object" || typeof j == "function")
						? j
						: O
				}
				function E(O, j) {
					if (typeof j != "function" && j !== null)
						throw new TypeError(
							"Super expression must either be null or a function, not " +
								typeof j
						)
					;(O.prototype = Object.create(j && j.prototype, {
						constructor: {
							value: O,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					})),
						j &&
							(Object.setPrototypeOf
								? Object.setPrototypeOf(O, j)
								: (O.__proto__ = j))
				}
				var N = (function (O) {
					E(j, O)
					function j() {
						return (
							v(this, j),
							d(
								this,
								(j.__proto__ || Object.getPrototypeOf(j)).apply(
									this,
									arguments
								)
							)
						)
					}
					return j
				})(m.default)
				;(N.blotName = "code"), (N.tagName = "CODE")
				var k = (function (O) {
					E(j, O)
					function j() {
						return (
							v(this, j),
							d(
								this,
								(j.__proto__ || Object.getPrototypeOf(j)).apply(
									this,
									arguments
								)
							)
						)
					}
					return (
						l(
							j,
							[
								{
									key: "delta",
									value: function () {
										var b = this,
											S = this.domNode.textContent
										return (
											S.endsWith(`
`) && (S = S.slice(0, -1)),
											S.split(
												`
`
											).reduce(function (A, L) {
												return A.insert(L).insert(
													`
`,
													b.formats()
												)
											}, new g.default())
										)
									}
								},
								{
									key: "format",
									value: function (b, S) {
										if (
											!(b === this.statics.blotName && S)
										) {
											var A = this.descendant(
													s.default,
													this.length() - 1
												),
												L = o(A, 1),
												M = L[0]
											M != null &&
												M.deleteAt(M.length() - 1, 1),
												h(
													j.prototype.__proto__ ||
														Object.getPrototypeOf(
															j.prototype
														),
													"format",
													this
												).call(this, b, S)
										}
									}
								},
								{
									key: "formatAt",
									value: function (b, S, A, L) {
										if (
											S !== 0 &&
											!(
												f.default.query(
													A,
													f.default.Scope.BLOCK
												) == null ||
												(A === this.statics.blotName &&
													L ===
														this.statics.formats(
															this.domNode
														))
											)
										) {
											var M = this.newlineIndex(b)
											if (!(M < 0 || M >= b + S)) {
												var U =
														this.newlineIndex(
															b,
															!0
														) + 1,
													V = M - U + 1,
													G = this.isolate(U, V),
													q = G.next
												G.format(A, L),
													q instanceof j &&
														q.formatAt(
															0,
															b - U + S - V,
															A,
															L
														)
											}
										}
									}
								},
								{
									key: "insertAt",
									value: function (b, S, A) {
										if (A == null) {
											var L = this.descendant(
													s.default,
													b
												),
												M = o(L, 2),
												U = M[0],
												V = M[1]
											U.insertAt(V, S)
										}
									}
								},
								{
									key: "length",
									value: function () {
										var b = this.domNode.textContent.length
										return this.domNode.textContent
											.endsWith(`
`)
											? b
											: b + 1
									}
								},
								{
									key: "newlineIndex",
									value: function (b) {
										var S =
											arguments.length > 1 &&
											arguments[1] !== void 0
												? arguments[1]
												: !1
										if (S)
											return this.domNode.textContent.slice(
												0,
												b
											).lastIndexOf(`
`)
										var A = this.domNode.textContent.slice(
											b
										).indexOf(`
`)
										return A > -1 ? b + A : -1
									}
								},
								{
									key: "optimize",
									value: function (b) {
										this.domNode.textContent.endsWith(`
`) ||
											this.appendChild(
												f.default.create(
													"text",
													`
`
												)
											),
											h(
												j.prototype.__proto__ ||
													Object.getPrototypeOf(
														j.prototype
													),
												"optimize",
												this
											).call(this, b)
										var S = this.next
										S != null &&
											S.prev === this &&
											S.statics.blotName ===
												this.statics.blotName &&
											this.statics.formats(
												this.domNode
											) ===
												S.statics.formats(S.domNode) &&
											(S.optimize(b),
											S.moveChildren(this),
											S.remove())
									}
								},
								{
									key: "replace",
									value: function (b) {
										h(
											j.prototype.__proto__ ||
												Object.getPrototypeOf(
													j.prototype
												),
											"replace",
											this
										).call(this, b),
											[].slice
												.call(
													this.domNode.querySelectorAll(
														"*"
													)
												)
												.forEach(function (S) {
													var A = f.default.find(S)
													A == null
														? S.parentNode.removeChild(
																S
															)
														: A instanceof
															  f.default.Embed
															? A.remove()
															: A.unwrap()
												})
									}
								}
							],
							[
								{
									key: "create",
									value: function (b) {
										var S = h(
											j.__proto__ ||
												Object.getPrototypeOf(j),
											"create",
											this
										).call(this, b)
										return (
											S.setAttribute("spellcheck", !1), S
										)
									}
								},
								{
									key: "formats",
									value: function () {
										return !0
									}
								}
							]
						),
						j
					)
				})(c.default)
				;(k.blotName = "code-block"),
					(k.tagName = "PRE"),
					(k.TAB = "  "),
					(r.Code = N),
					(r.default = k)
			},
			function (n, r, i) {
				Object.defineProperty(r, "__esModule", { value: !0 })
				var o =
						typeof Symbol == "function" &&
						typeof Symbol.iterator == "symbol"
							? function (q) {
									return typeof q
								}
							: function (q) {
									return q &&
										typeof Symbol == "function" &&
										q.constructor === Symbol &&
										q !== Symbol.prototype
										? "symbol"
										: typeof q
								},
					l = (function () {
						function q(R, T) {
							var D = [],
								F = !0,
								K = !1,
								H = void 0
							try {
								for (
									var C = R[Symbol.iterator](), $;
									!(F = ($ = C.next()).done) &&
									(D.push($.value), !(T && D.length === T));
									F = !0
								);
							} catch (Q) {
								;(K = !0), (H = Q)
							} finally {
								try {
									!F && C.return && C.return()
								} finally {
									if (K) throw H
								}
							}
							return D
						}
						return function (R, T) {
							if (Array.isArray(R)) return R
							if (Symbol.iterator in Object(R)) return q(R, T)
							throw new TypeError(
								"Invalid attempt to destructure non-iterable instance"
							)
						}
					})(),
					h = (function () {
						function q(R, T) {
							for (var D = 0; D < T.length; D++) {
								var F = T[D]
								;(F.enumerable = F.enumerable || !1),
									(F.configurable = !0),
									"value" in F && (F.writable = !0),
									Object.defineProperty(R, F.key, F)
							}
						}
						return function (R, T, D) {
							return T && q(R.prototype, T), D && q(R, D), R
						}
					})(),
					p = i(2),
					g = S(p),
					y = i(20),
					f = S(y),
					u = i(0),
					c = S(u),
					_ = i(13),
					m = S(_),
					w = i(24),
					s = S(w),
					a = i(4),
					v = S(a),
					d = i(16),
					E = S(d),
					N = i(21),
					k = S(N),
					O = i(11),
					j = S(O),
					x = i(3),
					b = S(x)
				function S(q) {
					return q && q.__esModule ? q : { default: q }
				}
				function A(q, R, T) {
					return (
						R in q
							? Object.defineProperty(q, R, {
									value: T,
									enumerable: !0,
									configurable: !0,
									writable: !0
								})
							: (q[R] = T),
						q
					)
				}
				function L(q, R) {
					if (!(q instanceof R))
						throw new TypeError("Cannot call a class as a function")
				}
				var M = /^[ -~]*$/,
					U = (function () {
						function q(R) {
							L(this, q),
								(this.scroll = R),
								(this.delta = this.getDelta())
						}
						return (
							h(q, [
								{
									key: "applyDelta",
									value: function (T) {
										var D = this,
											F = !1
										this.scroll.update()
										var K = this.scroll.length()
										return (
											this.scroll.batchStart(),
											(T = G(T)),
											T.reduce(function (H, C) {
												var $ =
														C.retain ||
														C.delete ||
														C.insert.length ||
														1,
													Q = C.attributes || {}
												if (C.insert != null) {
													if (
														typeof C.insert ==
														"string"
													) {
														var Y = C.insert
														Y.endsWith(`
`) &&
															F &&
															((F = !1),
															(Y = Y.slice(
																0,
																-1
															))),
															H >= K &&
																!Y.endsWith(`
`) &&
																(F = !0),
															D.scroll.insertAt(
																H,
																Y
															)
														var J =
																D.scroll.line(
																	H
																),
															re = l(J, 2),
															le = re[0],
															ae = re[1],
															ue = (0, b.default)(
																{},
																(0,
																a.bubbleFormats)(
																	le
																)
															)
														if (
															le instanceof
															v.default
														) {
															var he =
																	le.descendant(
																		c
																			.default
																			.Leaf,
																		ae
																	),
																Ke = l(he, 1),
																je = Ke[0]
															ue = (0, b.default)(
																ue,
																(0,
																a.bubbleFormats)(
																	je
																)
															)
														}
														Q =
															f.default.attributes.diff(
																ue,
																Q
															) || {}
													} else if (
														o(C.insert) === "object"
													) {
														var P = Object.keys(
															C.insert
														)[0]
														if (P == null) return H
														D.scroll.insertAt(
															H,
															P,
															C.insert[P]
														)
													}
													K += $
												}
												return (
													Object.keys(Q).forEach(
														function (I) {
															D.scroll.formatAt(
																H,
																$,
																I,
																Q[I]
															)
														}
													),
													H + $
												)
											}, 0),
											T.reduce(function (H, C) {
												return typeof C.delete ==
													"number"
													? (D.scroll.deleteAt(
															H,
															C.delete
														),
														H)
													: H +
															(C.retain ||
																C.insert
																	.length ||
																1)
											}, 0),
											this.scroll.batchEnd(),
											this.update(T)
										)
									}
								},
								{
									key: "deleteText",
									value: function (T, D) {
										return (
											this.scroll.deleteAt(T, D),
											this.update(
												new g.default()
													.retain(T)
													.delete(D)
											)
										)
									}
								},
								{
									key: "formatLine",
									value: function (T, D) {
										var F = this,
											K =
												arguments.length > 2 &&
												arguments[2] !== void 0
													? arguments[2]
													: {}
										return (
											this.scroll.update(),
											Object.keys(K).forEach(
												function (H) {
													if (
														!(
															F.scroll
																.whitelist !=
																null &&
															!F.scroll.whitelist[
																H
															]
														)
													) {
														var C = F.scroll.lines(
																T,
																Math.max(D, 1)
															),
															$ = D
														C.forEach(function (Q) {
															var Y = Q.length()
															if (
																!(
																	Q instanceof
																	m.default
																)
															)
																Q.format(
																	H,
																	K[H]
																)
															else {
																var J =
																		T -
																		Q.offset(
																			F.scroll
																		),
																	re =
																		Q.newlineIndex(
																			J +
																				$
																		) -
																		J +
																		1
																Q.formatAt(
																	J,
																	re,
																	H,
																	K[H]
																)
															}
															$ -= Y
														})
													}
												}
											),
											this.scroll.optimize(),
											this.update(
												new g.default()
													.retain(T)
													.retain(
														D,
														(0, k.default)(K)
													)
											)
										)
									}
								},
								{
									key: "formatText",
									value: function (T, D) {
										var F = this,
											K =
												arguments.length > 2 &&
												arguments[2] !== void 0
													? arguments[2]
													: {}
										return (
											Object.keys(K).forEach(
												function (H) {
													F.scroll.formatAt(
														T,
														D,
														H,
														K[H]
													)
												}
											),
											this.update(
												new g.default()
													.retain(T)
													.retain(
														D,
														(0, k.default)(K)
													)
											)
										)
									}
								},
								{
									key: "getContents",
									value: function (T, D) {
										return this.delta.slice(T, T + D)
									}
								},
								{
									key: "getDelta",
									value: function () {
										return this.scroll
											.lines()
											.reduce(function (T, D) {
												return T.concat(D.delta())
											}, new g.default())
									}
								},
								{
									key: "getFormat",
									value: function (T) {
										var D =
												arguments.length > 1 &&
												arguments[1] !== void 0
													? arguments[1]
													: 0,
											F = [],
											K = []
										D === 0
											? this.scroll
													.path(T)
													.forEach(function (C) {
														var $ = l(C, 1),
															Q = $[0]
														Q instanceof v.default
															? F.push(Q)
															: Q instanceof
																	c.default
																		.Leaf &&
																K.push(Q)
													})
											: ((F = this.scroll.lines(T, D)),
												(K = this.scroll.descendants(
													c.default.Leaf,
													T,
													D
												)))
										var H = [F, K].map(function (C) {
											if (C.length === 0) return {}
											for (
												var $ = (0, a.bubbleFormats)(
													C.shift()
												);
												Object.keys($).length > 0;

											) {
												var Q = C.shift()
												if (Q == null) return $
												$ = V(
													(0, a.bubbleFormats)(Q),
													$
												)
											}
											return $
										})
										return b.default.apply(b.default, H)
									}
								},
								{
									key: "getText",
									value: function (T, D) {
										return this.getContents(T, D)
											.filter(function (F) {
												return (
													typeof F.insert == "string"
												)
											})
											.map(function (F) {
												return F.insert
											})
											.join("")
									}
								},
								{
									key: "insertEmbed",
									value: function (T, D, F) {
										return (
											this.scroll.insertAt(T, D, F),
											this.update(
												new g.default()
													.retain(T)
													.insert(A({}, D, F))
											)
										)
									}
								},
								{
									key: "insertText",
									value: function (T, D) {
										var F = this,
											K =
												arguments.length > 2 &&
												arguments[2] !== void 0
													? arguments[2]
													: {}
										return (
											(D = D.replace(
												/\r\n/g,
												`
`
											).replace(
												/\r/g,
												`
`
											)),
											this.scroll.insertAt(T, D),
											Object.keys(K).forEach(
												function (H) {
													F.scroll.formatAt(
														T,
														D.length,
														H,
														K[H]
													)
												}
											),
											this.update(
												new g.default()
													.retain(T)
													.insert(
														D,
														(0, k.default)(K)
													)
											)
										)
									}
								},
								{
									key: "isBlank",
									value: function () {
										if (this.scroll.children.length == 0)
											return !0
										if (this.scroll.children.length > 1)
											return !1
										var T = this.scroll.children.head
										return T.statics.blotName !==
											v.default.blotName ||
											T.children.length > 1
											? !1
											: T.children.head instanceof
													E.default
									}
								},
								{
									key: "removeFormat",
									value: function (T, D) {
										var F = this.getText(T, D),
											K = this.scroll.line(T + D),
											H = l(K, 2),
											C = H[0],
											$ = H[1],
											Q = 0,
											Y = new g.default()
										C != null &&
											(C instanceof m.default
												? (Q =
														C.newlineIndex($) -
														$ +
														1)
												: (Q = C.length() - $),
											(Y = C.delta().slice($, $ + Q - 1)
												.insert(`
`)))
										var J = this.getContents(T, D + Q),
											re = J.diff(
												new g.default()
													.insert(F)
													.concat(Y)
											),
											le = new g.default()
												.retain(T)
												.concat(re)
										return this.applyDelta(le)
									}
								},
								{
									key: "update",
									value: function (T) {
										var D =
												arguments.length > 1 &&
												arguments[1] !== void 0
													? arguments[1]
													: [],
											F =
												arguments.length > 2 &&
												arguments[2] !== void 0
													? arguments[2]
													: void 0,
											K = this.delta
										if (
											D.length === 1 &&
											D[0].type === "characterData" &&
											D[0].target.data.match(M) &&
											c.default.find(D[0].target)
										) {
											var H = c.default.find(D[0].target),
												C = (0, a.bubbleFormats)(H),
												$ = H.offset(this.scroll),
												Q = D[0].oldValue.replace(
													s.default.CONTENTS,
													""
												),
												Y = new g.default().insert(Q),
												J = new g.default().insert(
													H.value()
												),
												re = new g.default()
													.retain($)
													.concat(Y.diff(J, F))
											;(T = re.reduce(function (le, ae) {
												return ae.insert
													? le.insert(ae.insert, C)
													: le.push(ae)
											}, new g.default())),
												(this.delta = K.compose(T))
										} else
											(this.delta = this.getDelta()),
												(!T ||
													!(0, j.default)(
														K.compose(T),
														this.delta
													)) &&
													(T = K.diff(this.delta, F))
										return T
									}
								}
							]),
							q
						)
					})()
				function V(q, R) {
					return Object.keys(R).reduce(function (T, D) {
						return (
							q[D] == null ||
								(R[D] === q[D]
									? (T[D] = R[D])
									: Array.isArray(R[D])
										? R[D].indexOf(q[D]) < 0 &&
											(T[D] = R[D].concat([q[D]]))
										: (T[D] = [R[D], q[D]])),
							T
						)
					}, {})
				}
				function G(q) {
					return q.reduce(function (R, T) {
						if (T.insert === 1) {
							var D = (0, k.default)(T.attributes)
							return (
								delete D.image,
								R.insert({ image: T.attributes.image }, D)
							)
						}
						if (
							(T.attributes != null &&
								(T.attributes.list === !0 ||
									T.attributes.bullet === !0) &&
								((T = (0, k.default)(T)),
								T.attributes.list
									? (T.attributes.list = "ordered")
									: ((T.attributes.list = "bullet"),
										delete T.attributes.bullet)),
							typeof T.insert == "string")
						) {
							var F = T.insert
								.replace(
									/\r\n/g,
									`
`
								)
								.replace(
									/\r/g,
									`
`
								)
							return R.insert(F, T.attributes)
						}
						return R.push(T)
					}, new g.default())
				}
				r.default = U
			},
			function (n, r, i) {
				Object.defineProperty(r, "__esModule", { value: !0 }),
					(r.default = r.Range = void 0)
				var o = (function () {
						function O(j, x) {
							var b = [],
								S = !0,
								A = !1,
								L = void 0
							try {
								for (
									var M = j[Symbol.iterator](), U;
									!(S = (U = M.next()).done) &&
									(b.push(U.value), !(x && b.length === x));
									S = !0
								);
							} catch (V) {
								;(A = !0), (L = V)
							} finally {
								try {
									!S && M.return && M.return()
								} finally {
									if (A) throw L
								}
							}
							return b
						}
						return function (j, x) {
							if (Array.isArray(j)) return j
							if (Symbol.iterator in Object(j)) return O(j, x)
							throw new TypeError(
								"Invalid attempt to destructure non-iterable instance"
							)
						}
					})(),
					l = (function () {
						function O(j, x) {
							for (var b = 0; b < x.length; b++) {
								var S = x[b]
								;(S.enumerable = S.enumerable || !1),
									(S.configurable = !0),
									"value" in S && (S.writable = !0),
									Object.defineProperty(j, S.key, S)
							}
						}
						return function (j, x, b) {
							return x && O(j.prototype, x), b && O(j, b), j
						}
					})(),
					h = i(0),
					p = s(h),
					g = i(21),
					y = s(g),
					f = i(11),
					u = s(f),
					c = i(8),
					_ = s(c),
					m = i(10),
					w = s(m)
				function s(O) {
					return O && O.__esModule ? O : { default: O }
				}
				function a(O) {
					if (Array.isArray(O)) {
						for (var j = 0, x = Array(O.length); j < O.length; j++)
							x[j] = O[j]
						return x
					} else return Array.from(O)
				}
				function v(O, j) {
					if (!(O instanceof j))
						throw new TypeError("Cannot call a class as a function")
				}
				var d = (0, w.default)("quill:selection"),
					E = function O(j) {
						var x =
							arguments.length > 1 && arguments[1] !== void 0
								? arguments[1]
								: 0
						v(this, O), (this.index = j), (this.length = x)
					},
					N = (function () {
						function O(j, x) {
							var b = this
							v(this, O),
								(this.emitter = x),
								(this.scroll = j),
								(this.composing = !1),
								(this.mouseDown = !1),
								(this.root = this.scroll.domNode),
								(this.cursor = p.default.create(
									"cursor",
									this
								)),
								(this.lastRange = this.savedRange =
									new E(0, 0)),
								this.handleComposition(),
								this.handleDragging(),
								this.emitter.listenDOM(
									"selectionchange",
									document,
									function () {
										b.mouseDown ||
											setTimeout(
												b.update.bind(
													b,
													_.default.sources.USER
												),
												1
											)
									}
								),
								this.emitter.on(
									_.default.events.EDITOR_CHANGE,
									function (S, A) {
										S === _.default.events.TEXT_CHANGE &&
											A.length() > 0 &&
											b.update(_.default.sources.SILENT)
									}
								),
								this.emitter.on(
									_.default.events.SCROLL_BEFORE_UPDATE,
									function () {
										if (b.hasFocus()) {
											var S = b.getNativeRange()
											S != null &&
												S.start.node !==
													b.cursor.textNode &&
												b.emitter.once(
													_.default.events
														.SCROLL_UPDATE,
													function () {
														try {
															b.setNativeRange(
																S.start.node,
																S.start.offset,
																S.end.node,
																S.end.offset
															)
														} catch {}
													}
												)
										}
									}
								),
								this.emitter.on(
									_.default.events.SCROLL_OPTIMIZE,
									function (S, A) {
										if (A.range) {
											var L = A.range,
												M = L.startNode,
												U = L.startOffset,
												V = L.endNode,
												G = L.endOffset
											b.setNativeRange(M, U, V, G)
										}
									}
								),
								this.update(_.default.sources.SILENT)
						}
						return (
							l(O, [
								{
									key: "handleComposition",
									value: function () {
										var x = this
										this.root.addEventListener(
											"compositionstart",
											function () {
												x.composing = !0
											}
										),
											this.root.addEventListener(
												"compositionend",
												function () {
													if (
														((x.composing = !1),
														x.cursor.parent)
													) {
														var b =
															x.cursor.restore()
														if (!b) return
														setTimeout(function () {
															x.setNativeRange(
																b.startNode,
																b.startOffset,
																b.endNode,
																b.endOffset
															)
														}, 1)
													}
												}
											)
									}
								},
								{
									key: "handleDragging",
									value: function () {
										var x = this
										this.emitter.listenDOM(
											"mousedown",
											document.body,
											function () {
												x.mouseDown = !0
											}
										),
											this.emitter.listenDOM(
												"mouseup",
												document.body,
												function () {
													;(x.mouseDown = !1),
														x.update(
															_.default.sources
																.USER
														)
												}
											)
									}
								},
								{
									key: "focus",
									value: function () {
										this.hasFocus() ||
											(this.root.focus(),
											this.setRange(this.savedRange))
									}
								},
								{
									key: "format",
									value: function (x, b) {
										if (
											!(
												this.scroll.whitelist != null &&
												!this.scroll.whitelist[x]
											)
										) {
											this.scroll.update()
											var S = this.getNativeRange()
											if (
												!(
													S == null ||
													!S.native.collapsed ||
													p.default.query(
														x,
														p.default.Scope.BLOCK
													)
												)
											) {
												if (
													S.start.node !==
													this.cursor.textNode
												) {
													var A = p.default.find(
														S.start.node,
														!1
													)
													if (A == null) return
													if (
														A instanceof
														p.default.Leaf
													) {
														var L = A.split(
															S.start.offset
														)
														A.parent.insertBefore(
															this.cursor,
															L
														)
													} else
														A.insertBefore(
															this.cursor,
															S.start.node
														)
													this.cursor.attach()
												}
												this.cursor.format(x, b),
													this.scroll.optimize(),
													this.setNativeRange(
														this.cursor.textNode,
														this.cursor.textNode
															.data.length
													),
													this.update()
											}
										}
									}
								},
								{
									key: "getBounds",
									value: function (x) {
										var b =
												arguments.length > 1 &&
												arguments[1] !== void 0
													? arguments[1]
													: 0,
											S = this.scroll.length()
										;(x = Math.min(x, S - 1)),
											(b = Math.min(x + b, S - 1) - x)
										var A = void 0,
											L = this.scroll.leaf(x),
											M = o(L, 2),
											U = M[0],
											V = M[1]
										if (U == null) return null
										var G = U.position(V, !0),
											q = o(G, 2)
										;(A = q[0]), (V = q[1])
										var R = document.createRange()
										if (b > 0) {
											R.setStart(A, V)
											var T = this.scroll.leaf(x + b),
												D = o(T, 2)
											if (
												((U = D[0]),
												(V = D[1]),
												U == null)
											)
												return null
											var F = U.position(V, !0),
												K = o(F, 2)
											return (
												(A = K[0]),
												(V = K[1]),
												R.setEnd(A, V),
												R.getBoundingClientRect()
											)
										} else {
											var H = "left",
												C = void 0
											return (
												A instanceof Text
													? (V < A.data.length
															? (R.setStart(A, V),
																R.setEnd(
																	A,
																	V + 1
																))
															: (R.setStart(
																	A,
																	V - 1
																),
																R.setEnd(A, V),
																(H = "right")),
														(C =
															R.getBoundingClientRect()))
													: ((C =
															U.domNode.getBoundingClientRect()),
														V > 0 && (H = "right")),
												{
													bottom: C.top + C.height,
													height: C.height,
													left: C[H],
													right: C[H],
													top: C.top,
													width: 0
												}
											)
										}
									}
								},
								{
									key: "getNativeRange",
									value: function () {
										var x = document.getSelection()
										if (x == null || x.rangeCount <= 0)
											return null
										var b = x.getRangeAt(0)
										if (b == null) return null
										var S = this.normalizeNative(b)
										return d.info("getNativeRange", S), S
									}
								},
								{
									key: "getRange",
									value: function () {
										var x = this.getNativeRange()
										if (x == null) return [null, null]
										var b = this.normalizedToRange(x)
										return [b, x]
									}
								},
								{
									key: "hasFocus",
									value: function () {
										return (
											document.activeElement === this.root
										)
									}
								},
								{
									key: "normalizedToRange",
									value: function (x) {
										var b = this,
											S = [[x.start.node, x.start.offset]]
										x.native.collapsed ||
											S.push([x.end.node, x.end.offset])
										var A = S.map(function (U) {
												var V = o(U, 2),
													G = V[0],
													q = V[1],
													R = p.default.find(G, !0),
													T = R.offset(b.scroll)
												return q === 0
													? T
													: R instanceof
														  p.default.Container
														? T + R.length()
														: T + R.index(G, q)
											}),
											L = Math.min(
												Math.max.apply(Math, a(A)),
												this.scroll.length() - 1
											),
											M = Math.min.apply(
												Math,
												[L].concat(a(A))
											)
										return new E(M, L - M)
									}
								},
								{
									key: "normalizeNative",
									value: function (x) {
										if (
											!k(this.root, x.startContainer) ||
											(!x.collapsed &&
												!k(this.root, x.endContainer))
										)
											return null
										var b = {
											start: {
												node: x.startContainer,
												offset: x.startOffset
											},
											end: {
												node: x.endContainer,
												offset: x.endOffset
											},
											native: x
										}
										return (
											[b.start, b.end].forEach(
												function (S) {
													for (
														var A = S.node,
															L = S.offset;
														!(A instanceof Text) &&
														A.childNodes.length > 0;

													)
														if (
															A.childNodes
																.length > L
														)
															(A =
																A.childNodes[
																	L
																]),
																(L = 0)
														else if (
															A.childNodes
																.length === L
														)
															(A = A.lastChild),
																(L =
																	A instanceof
																	Text
																		? A.data
																				.length
																		: A
																				.childNodes
																				.length +
																			1)
														else break
													;(S.node = A),
														(S.offset = L)
												}
											),
											b
										)
									}
								},
								{
									key: "rangeToNative",
									value: function (x) {
										var b = this,
											S = x.collapsed
												? [x.index]
												: [x.index, x.index + x.length],
											A = [],
											L = this.scroll.length()
										return (
											S.forEach(function (M, U) {
												M = Math.min(L - 1, M)
												var V = void 0,
													G = b.scroll.leaf(M),
													q = o(G, 2),
													R = q[0],
													T = q[1],
													D = R.position(T, U !== 0),
													F = o(D, 2)
												;(V = F[0]),
													(T = F[1]),
													A.push(V, T)
											}),
											A.length < 2 && (A = A.concat(A)),
											A
										)
									}
								},
								{
									key: "scrollIntoView",
									value: function (x) {
										var b = this.lastRange
										if (b != null) {
											var S = this.getBounds(
												b.index,
												b.length
											)
											if (S != null) {
												var A =
														this.scroll.length() -
														1,
													L = this.scroll.line(
														Math.min(b.index, A)
													),
													M = o(L, 1),
													U = M[0],
													V = U
												if (b.length > 0) {
													var G = this.scroll.line(
															Math.min(
																b.index +
																	b.length,
																A
															)
														),
														q = o(G, 1)
													V = q[0]
												}
												if (!(U == null || V == null)) {
													var R =
														x.getBoundingClientRect()
													S.top < R.top
														? (x.scrollTop -=
																R.top - S.top)
														: S.bottom > R.bottom &&
															(x.scrollTop +=
																S.bottom -
																R.bottom)
												}
											}
										}
									}
								},
								{
									key: "setNativeRange",
									value: function (x, b) {
										var S =
												arguments.length > 2 &&
												arguments[2] !== void 0
													? arguments[2]
													: x,
											A =
												arguments.length > 3 &&
												arguments[3] !== void 0
													? arguments[3]
													: b,
											L =
												arguments.length > 4 &&
												arguments[4] !== void 0
													? arguments[4]
													: !1
										if (
											(d.info(
												"setNativeRange",
												x,
												b,
												S,
												A
											),
											!(
												x != null &&
												(this.root.parentNode == null ||
													x.parentNode == null ||
													S.parentNode == null)
											))
										) {
											var M = document.getSelection()
											if (M != null)
												if (x != null) {
													this.hasFocus() ||
														this.root.focus()
													var U = (
														this.getNativeRange() ||
														{}
													).native
													if (
														U == null ||
														L ||
														x !==
															U.startContainer ||
														b !== U.startOffset ||
														S !== U.endContainer ||
														A !== U.endOffset
													) {
														x.tagName == "BR" &&
															((b =
																[].indexOf.call(
																	x.parentNode
																		.childNodes,
																	x
																)),
															(x = x.parentNode)),
															S.tagName == "BR" &&
																((A =
																	[].indexOf.call(
																		S
																			.parentNode
																			.childNodes,
																		S
																	)),
																(S =
																	S.parentNode))
														var V =
															document.createRange()
														V.setStart(x, b),
															V.setEnd(S, A),
															M.removeAllRanges(),
															M.addRange(V)
													}
												} else
													M.removeAllRanges(),
														this.root.blur(),
														document.body.focus()
										}
									}
								},
								{
									key: "setRange",
									value: function (x) {
										var b =
												arguments.length > 1 &&
												arguments[1] !== void 0
													? arguments[1]
													: !1,
											S =
												arguments.length > 2 &&
												arguments[2] !== void 0
													? arguments[2]
													: _.default.sources.API
										if (
											(typeof b == "string" &&
												((S = b), (b = !1)),
											d.info("setRange", x),
											x != null)
										) {
											var A = this.rangeToNative(x)
											this.setNativeRange.apply(
												this,
												a(A).concat([b])
											)
										} else this.setNativeRange(null)
										this.update(S)
									}
								},
								{
									key: "update",
									value: function () {
										var x =
												arguments.length > 0 &&
												arguments[0] !== void 0
													? arguments[0]
													: _.default.sources.USER,
											b = this.lastRange,
											S = this.getRange(),
											A = o(S, 2),
											L = A[0],
											M = A[1]
										if (
											((this.lastRange = L),
											this.lastRange != null &&
												(this.savedRange =
													this.lastRange),
											!(0, u.default)(b, this.lastRange))
										) {
											var U
											!this.composing &&
												M != null &&
												M.native.collapsed &&
												M.start.node !==
													this.cursor.textNode &&
												this.cursor.restore()
											var V = [
												_.default.events
													.SELECTION_CHANGE,
												(0, y.default)(this.lastRange),
												(0, y.default)(b),
												x
											]
											if (
												((U = this.emitter).emit.apply(
													U,
													[
														_.default.events
															.EDITOR_CHANGE
													].concat(V)
												),
												x !== _.default.sources.SILENT)
											) {
												var G
												;(G = this.emitter).emit.apply(
													G,
													V
												)
											}
										}
									}
								}
							]),
							O
						)
					})()
				function k(O, j) {
					try {
						j.parentNode
					} catch {
						return !1
					}
					return (
						j instanceof Text && (j = j.parentNode), O.contains(j)
					)
				}
				;(r.Range = E), (r.default = N)
			},
			function (n, r, i) {
				Object.defineProperty(r, "__esModule", { value: !0 })
				var o = (function () {
						function _(m, w) {
							for (var s = 0; s < w.length; s++) {
								var a = w[s]
								;(a.enumerable = a.enumerable || !1),
									(a.configurable = !0),
									"value" in a && (a.writable = !0),
									Object.defineProperty(m, a.key, a)
							}
						}
						return function (m, w, s) {
							return w && _(m.prototype, w), s && _(m, s), m
						}
					})(),
					l = function _(m, w, s) {
						m === null && (m = Function.prototype)
						var a = Object.getOwnPropertyDescriptor(m, w)
						if (a === void 0) {
							var v = Object.getPrototypeOf(m)
							return v === null ? void 0 : _(v, w, s)
						} else {
							if ("value" in a) return a.value
							var d = a.get
							return d === void 0 ? void 0 : d.call(s)
						}
					},
					h = i(0),
					p = g(h)
				function g(_) {
					return _ && _.__esModule ? _ : { default: _ }
				}
				function y(_, m) {
					if (!(_ instanceof m))
						throw new TypeError("Cannot call a class as a function")
				}
				function f(_, m) {
					if (!_)
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						)
					return m && (typeof m == "object" || typeof m == "function")
						? m
						: _
				}
				function u(_, m) {
					if (typeof m != "function" && m !== null)
						throw new TypeError(
							"Super expression must either be null or a function, not " +
								typeof m
						)
					;(_.prototype = Object.create(m && m.prototype, {
						constructor: {
							value: _,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					})),
						m &&
							(Object.setPrototypeOf
								? Object.setPrototypeOf(_, m)
								: (_.__proto__ = m))
				}
				var c = (function (_) {
					u(m, _)
					function m() {
						return (
							y(this, m),
							f(
								this,
								(m.__proto__ || Object.getPrototypeOf(m)).apply(
									this,
									arguments
								)
							)
						)
					}
					return (
						o(
							m,
							[
								{
									key: "insertInto",
									value: function (s, a) {
										s.children.length === 0
											? l(
													m.prototype.__proto__ ||
														Object.getPrototypeOf(
															m.prototype
														),
													"insertInto",
													this
												).call(this, s, a)
											: this.remove()
									}
								},
								{
									key: "length",
									value: function () {
										return 0
									}
								},
								{
									key: "value",
									value: function () {
										return ""
									}
								}
							],
							[{ key: "value", value: function () {} }]
						),
						m
					)
				})(p.default.Embed)
				;(c.blotName = "break"), (c.tagName = "BR"), (r.default = c)
			},
			function (n, r, i) {
				var o =
					(this && this.__extends) ||
					(function () {
						var f =
							Object.setPrototypeOf ||
							({ __proto__: [] } instanceof Array &&
								function (u, c) {
									u.__proto__ = c
								}) ||
							function (u, c) {
								for (var _ in c)
									c.hasOwnProperty(_) && (u[_] = c[_])
							}
						return function (u, c) {
							f(u, c)
							function _() {
								this.constructor = u
							}
							u.prototype =
								c === null
									? Object.create(c)
									: ((_.prototype = c.prototype), new _())
						}
					})()
				Object.defineProperty(r, "__esModule", { value: !0 })
				var l = i(44),
					h = i(30),
					p = i(1),
					g = (function (f) {
						o(u, f)
						function u(c) {
							var _ = f.call(this, c) || this
							return _.build(), _
						}
						return (
							(u.prototype.appendChild = function (c) {
								this.insertBefore(c)
							}),
							(u.prototype.attach = function () {
								f.prototype.attach.call(this),
									this.children.forEach(function (c) {
										c.attach()
									})
							}),
							(u.prototype.build = function () {
								var c = this
								;(this.children = new l.default()),
									[].slice
										.call(this.domNode.childNodes)
										.reverse()
										.forEach(function (_) {
											try {
												var m = y(_)
												c.insertBefore(
													m,
													c.children.head || void 0
												)
											} catch (w) {
												if (
													w instanceof
													p.ParchmentError
												)
													return
												throw w
											}
										})
							}),
							(u.prototype.deleteAt = function (c, _) {
								if (c === 0 && _ === this.length())
									return this.remove()
								this.children.forEachAt(
									c,
									_,
									function (m, w, s) {
										m.deleteAt(w, s)
									}
								)
							}),
							(u.prototype.descendant = function (c, _) {
								var m = this.children.find(_),
									w = m[0],
									s = m[1]
								return (c.blotName == null && c(w)) ||
									(c.blotName != null && w instanceof c)
									? [w, s]
									: w instanceof u
										? w.descendant(c, s)
										: [null, -1]
							}),
							(u.prototype.descendants = function (c, _, m) {
								_ === void 0 && (_ = 0),
									m === void 0 && (m = Number.MAX_VALUE)
								var w = [],
									s = m
								return (
									this.children.forEachAt(
										_,
										m,
										function (a, v, d) {
											;((c.blotName == null && c(a)) ||
												(c.blotName != null &&
													a instanceof c)) &&
												w.push(a),
												a instanceof u &&
													(w = w.concat(
														a.descendants(c, v, s)
													)),
												(s -= d)
										}
									),
									w
								)
							}),
							(u.prototype.detach = function () {
								this.children.forEach(function (c) {
									c.detach()
								}),
									f.prototype.detach.call(this)
							}),
							(u.prototype.formatAt = function (c, _, m, w) {
								this.children.forEachAt(
									c,
									_,
									function (s, a, v) {
										s.formatAt(a, v, m, w)
									}
								)
							}),
							(u.prototype.insertAt = function (c, _, m) {
								var w = this.children.find(c),
									s = w[0],
									a = w[1]
								if (s) s.insertAt(a, _, m)
								else {
									var v =
										m == null
											? p.create("text", _)
											: p.create(_, m)
									this.appendChild(v)
								}
							}),
							(u.prototype.insertBefore = function (c, _) {
								if (
									this.statics.allowedChildren != null &&
									!this.statics.allowedChildren.some(
										function (m) {
											return c instanceof m
										}
									)
								)
									throw new p.ParchmentError(
										"Cannot insert " +
											c.statics.blotName +
											" into " +
											this.statics.blotName
									)
								c.insertInto(this, _)
							}),
							(u.prototype.length = function () {
								return this.children.reduce(function (c, _) {
									return c + _.length()
								}, 0)
							}),
							(u.prototype.moveChildren = function (c, _) {
								this.children.forEach(function (m) {
									c.insertBefore(m, _)
								})
							}),
							(u.prototype.optimize = function (c) {
								if (
									(f.prototype.optimize.call(this, c),
									this.children.length === 0)
								)
									if (this.statics.defaultChild != null) {
										var _ = p.create(
											this.statics.defaultChild
										)
										this.appendChild(_), _.optimize(c)
									} else this.remove()
							}),
							(u.prototype.path = function (c, _) {
								_ === void 0 && (_ = !1)
								var m = this.children.find(c, _),
									w = m[0],
									s = m[1],
									a = [[this, c]]
								return w instanceof u
									? a.concat(w.path(s, _))
									: (w != null && a.push([w, s]), a)
							}),
							(u.prototype.removeChild = function (c) {
								this.children.remove(c)
							}),
							(u.prototype.replace = function (c) {
								c instanceof u && c.moveChildren(this),
									f.prototype.replace.call(this, c)
							}),
							(u.prototype.split = function (c, _) {
								if ((_ === void 0 && (_ = !1), !_)) {
									if (c === 0) return this
									if (c === this.length()) return this.next
								}
								var m = this.clone()
								return (
									this.parent.insertBefore(m, this.next),
									this.children.forEachAt(
										c,
										this.length(),
										function (w, s, a) {
											;(w = w.split(s, _)),
												m.appendChild(w)
										}
									),
									m
								)
							}),
							(u.prototype.unwrap = function () {
								this.moveChildren(this.parent, this.next),
									this.remove()
							}),
							(u.prototype.update = function (c, _) {
								var m = this,
									w = [],
									s = []
								c.forEach(function (a) {
									a.target === m.domNode &&
										a.type === "childList" &&
										(w.push.apply(w, a.addedNodes),
										s.push.apply(s, a.removedNodes))
								}),
									s.forEach(function (a) {
										if (
											!(
												a.parentNode != null &&
												a.tagName !== "IFRAME" &&
												document.body.compareDocumentPosition(
													a
												) &
													Node.DOCUMENT_POSITION_CONTAINED_BY
											)
										) {
											var v = p.find(a)
											v != null &&
												(v.domNode.parentNode == null ||
													v.domNode.parentNode ===
														m.domNode) &&
												v.detach()
										}
									}),
									w
										.filter(function (a) {
											return a.parentNode == m.domNode
										})
										.sort(function (a, v) {
											return a === v
												? 0
												: a.compareDocumentPosition(v) &
													  Node.DOCUMENT_POSITION_FOLLOWING
													? 1
													: -1
										})
										.forEach(function (a) {
											var v = null
											a.nextSibling != null &&
												(v = p.find(a.nextSibling))
											var d = y(a)
											;(d.next != v || d.next == null) &&
												(d.parent != null &&
													d.parent.removeChild(m),
												m.insertBefore(d, v || void 0))
										})
							}),
							u
						)
					})(h.default)
				function y(f) {
					var u = p.find(f)
					if (u == null)
						try {
							u = p.create(f)
						} catch {
							;(u = p.create(p.Scope.INLINE)),
								[].slice
									.call(f.childNodes)
									.forEach(function (_) {
										u.domNode.appendChild(_)
									}),
								f.parentNode &&
									f.parentNode.replaceChild(u.domNode, f),
								u.attach()
						}
					return u
				}
				r.default = g
			},
			function (n, r, i) {
				var o =
					(this && this.__extends) ||
					(function () {
						var f =
							Object.setPrototypeOf ||
							({ __proto__: [] } instanceof Array &&
								function (u, c) {
									u.__proto__ = c
								}) ||
							function (u, c) {
								for (var _ in c)
									c.hasOwnProperty(_) && (u[_] = c[_])
							}
						return function (u, c) {
							f(u, c)
							function _() {
								this.constructor = u
							}
							u.prototype =
								c === null
									? Object.create(c)
									: ((_.prototype = c.prototype), new _())
						}
					})()
				Object.defineProperty(r, "__esModule", { value: !0 })
				var l = i(12),
					h = i(31),
					p = i(17),
					g = i(1),
					y = (function (f) {
						o(u, f)
						function u(c) {
							var _ = f.call(this, c) || this
							return (_.attributes = new h.default(_.domNode)), _
						}
						return (
							(u.formats = function (c) {
								if (typeof this.tagName == "string") return !0
								if (Array.isArray(this.tagName))
									return c.tagName.toLowerCase()
							}),
							(u.prototype.format = function (c, _) {
								var m = g.query(c)
								m instanceof l.default
									? this.attributes.attribute(m, _)
									: _ &&
										m != null &&
										(c !== this.statics.blotName ||
											this.formats()[c] !== _) &&
										this.replaceWith(c, _)
							}),
							(u.prototype.formats = function () {
								var c = this.attributes.values(),
									_ = this.statics.formats(this.domNode)
								return (
									_ != null && (c[this.statics.blotName] = _),
									c
								)
							}),
							(u.prototype.replaceWith = function (c, _) {
								var m = f.prototype.replaceWith.call(this, c, _)
								return this.attributes.copy(m), m
							}),
							(u.prototype.update = function (c, _) {
								var m = this
								f.prototype.update.call(this, c, _),
									c.some(function (w) {
										return (
											w.target === m.domNode &&
											w.type === "attributes"
										)
									}) && this.attributes.build()
							}),
							(u.prototype.wrap = function (c, _) {
								var m = f.prototype.wrap.call(this, c, _)
								return (
									m instanceof u &&
										m.statics.scope ===
											this.statics.scope &&
										this.attributes.move(m),
									m
								)
							}),
							u
						)
					})(p.default)
				r.default = y
			},
			function (n, r, i) {
				var o =
					(this && this.__extends) ||
					(function () {
						var g =
							Object.setPrototypeOf ||
							({ __proto__: [] } instanceof Array &&
								function (y, f) {
									y.__proto__ = f
								}) ||
							function (y, f) {
								for (var u in f)
									f.hasOwnProperty(u) && (y[u] = f[u])
							}
						return function (y, f) {
							g(y, f)
							function u() {
								this.constructor = y
							}
							y.prototype =
								f === null
									? Object.create(f)
									: ((u.prototype = f.prototype), new u())
						}
					})()
				Object.defineProperty(r, "__esModule", { value: !0 })
				var l = i(30),
					h = i(1),
					p = (function (g) {
						o(y, g)
						function y() {
							return (
								(g !== null && g.apply(this, arguments)) || this
							)
						}
						return (
							(y.value = function (f) {
								return !0
							}),
							(y.prototype.index = function (f, u) {
								return this.domNode === f ||
									this.domNode.compareDocumentPosition(f) &
										Node.DOCUMENT_POSITION_CONTAINED_BY
									? Math.min(u, 1)
									: -1
							}),
							(y.prototype.position = function (f, u) {
								var c = [].indexOf.call(
									this.parent.domNode.childNodes,
									this.domNode
								)
								return (
									f > 0 && (c += 1), [this.parent.domNode, c]
								)
							}),
							(y.prototype.value = function () {
								var f
								return (
									(f = {}),
									(f[this.statics.blotName] =
										this.statics.value(this.domNode) || !0),
									f
								)
							}),
							(y.scope = h.Scope.INLINE_BLOT),
							y
						)
					})(l.default)
				r.default = p
			},
			function (n, r, i) {
				var o = i(11),
					l = i(3),
					h = {
						attributes: {
							compose: function (g, y, f) {
								typeof g != "object" && (g = {}),
									typeof y != "object" && (y = {})
								var u = l(!0, {}, y)
								f ||
									(u = Object.keys(u).reduce(function (_, m) {
										return u[m] != null && (_[m] = u[m]), _
									}, {}))
								for (var c in g)
									g[c] !== void 0 &&
										y[c] === void 0 &&
										(u[c] = g[c])
								return Object.keys(u).length > 0 ? u : void 0
							},
							diff: function (g, y) {
								typeof g != "object" && (g = {}),
									typeof y != "object" && (y = {})
								var f = Object.keys(g)
									.concat(Object.keys(y))
									.reduce(function (u, c) {
										return (
											o(g[c], y[c]) ||
												(u[c] =
													y[c] === void 0
														? null
														: y[c]),
											u
										)
									}, {})
								return Object.keys(f).length > 0 ? f : void 0
							},
							transform: function (g, y, f) {
								if (typeof g != "object") return y
								if (typeof y == "object") {
									if (!f) return y
									var u = Object.keys(y).reduce(function (
										c,
										_
									) {
										return (
											g[_] === void 0 && (c[_] = y[_]), c
										)
									}, {})
									return Object.keys(u).length > 0
										? u
										: void 0
								}
							}
						},
						iterator: function (g) {
							return new p(g)
						},
						length: function (g) {
							return typeof g.delete == "number"
								? g.delete
								: typeof g.retain == "number"
									? g.retain
									: typeof g.insert == "string"
										? g.insert.length
										: 1
						}
					}
				function p(g) {
					;(this.ops = g), (this.index = 0), (this.offset = 0)
				}
				;(p.prototype.hasNext = function () {
					return this.peekLength() < 1 / 0
				}),
					(p.prototype.next = function (g) {
						g || (g = 1 / 0)
						var y = this.ops[this.index]
						if (y) {
							var f = this.offset,
								u = h.length(y)
							if (
								(g >= u - f
									? ((g = u - f),
										(this.index += 1),
										(this.offset = 0))
									: (this.offset += g),
								typeof y.delete == "number")
							)
								return { delete: g }
							var c = {}
							return (
								y.attributes && (c.attributes = y.attributes),
								typeof y.retain == "number"
									? (c.retain = g)
									: typeof y.insert == "string"
										? (c.insert = y.insert.substr(f, g))
										: (c.insert = y.insert),
								c
							)
						} else return { retain: 1 / 0 }
					}),
					(p.prototype.peek = function () {
						return this.ops[this.index]
					}),
					(p.prototype.peekLength = function () {
						return this.ops[this.index]
							? h.length(this.ops[this.index]) - this.offset
							: 1 / 0
					}),
					(p.prototype.peekType = function () {
						return this.ops[this.index]
							? typeof this.ops[this.index].delete == "number"
								? "delete"
								: typeof this.ops[this.index].retain == "number"
									? "retain"
									: "insert"
							: "retain"
					}),
					(p.prototype.rest = function () {
						if (this.hasNext()) {
							if (this.offset === 0)
								return this.ops.slice(this.index)
							var g = this.offset,
								y = this.index,
								f = this.next(),
								u = this.ops.slice(this.index)
							return (
								(this.offset = g),
								(this.index = y),
								[f].concat(u)
							)
						} else return []
					}),
					(n.exports = h)
			},
			function (n, r) {
				var i = (function () {
					function o(m, w) {
						return w != null && m instanceof w
					}
					var l
					try {
						l = Map
					} catch {
						l = function () {}
					}
					var h
					try {
						h = Set
					} catch {
						h = function () {}
					}
					var p
					try {
						p = Promise
					} catch {
						p = function () {}
					}
					function g(m, w, s, a, v) {
						typeof w == "object" &&
							((s = w.depth),
							(a = w.prototype),
							(v = w.includeNonEnumerable),
							(w = w.circular))
						var d = [],
							E = [],
							N = typeof Buffer < "u"
						typeof w > "u" && (w = !0),
							typeof s > "u" && (s = 1 / 0)
						function k(O, j) {
							if (O === null) return null
							if (j === 0) return O
							var x, b
							if (typeof O != "object") return O
							if (o(O, l)) x = new l()
							else if (o(O, h)) x = new h()
							else if (o(O, p))
								x = new p(function (R, T) {
									O.then(
										function (D) {
											R(k(D, j - 1))
										},
										function (D) {
											T(k(D, j - 1))
										}
									)
								})
							else if (g.__isArray(O)) x = []
							else if (g.__isRegExp(O))
								(x = new RegExp(O.source, _(O))),
									O.lastIndex && (x.lastIndex = O.lastIndex)
							else if (g.__isDate(O)) x = new Date(O.getTime())
							else {
								if (N && Buffer.isBuffer(O))
									return (
										Buffer.allocUnsafe
											? (x = Buffer.allocUnsafe(O.length))
											: (x = new Buffer(O.length)),
										O.copy(x),
										x
									)
								o(O, Error)
									? (x = Object.create(O))
									: typeof a > "u"
										? ((b = Object.getPrototypeOf(O)),
											(x = Object.create(b)))
										: ((x = Object.create(a)), (b = a))
							}
							if (w) {
								var S = d.indexOf(O)
								if (S != -1) return E[S]
								d.push(O), E.push(x)
							}
							o(O, l) &&
								O.forEach(function (R, T) {
									var D = k(T, j - 1),
										F = k(R, j - 1)
									x.set(D, F)
								}),
								o(O, h) &&
									O.forEach(function (R) {
										var T = k(R, j - 1)
										x.add(T)
									})
							for (var A in O) {
								var L
								b &&
									(L = Object.getOwnPropertyDescriptor(b, A)),
									!(L && L.set == null) &&
										(x[A] = k(O[A], j - 1))
							}
							if (Object.getOwnPropertySymbols)
								for (
									var M = Object.getOwnPropertySymbols(O),
										A = 0;
									A < M.length;
									A++
								) {
									var U = M[A],
										V = Object.getOwnPropertyDescriptor(
											O,
											U
										)
									;(V && !V.enumerable && !v) ||
										((x[U] = k(O[U], j - 1)),
										V.enumerable ||
											Object.defineProperty(x, U, {
												enumerable: !1
											}))
								}
							if (v)
								for (
									var G = Object.getOwnPropertyNames(O),
										A = 0;
									A < G.length;
									A++
								) {
									var q = G[A],
										V = Object.getOwnPropertyDescriptor(
											O,
											q
										)
									;(V && V.enumerable) ||
										((x[q] = k(O[q], j - 1)),
										Object.defineProperty(x, q, {
											enumerable: !1
										}))
								}
							return x
						}
						return k(m, s)
					}
					g.clonePrototype = function (w) {
						if (w === null) return null
						var s = function () {}
						return (s.prototype = w), new s()
					}
					function y(m) {
						return Object.prototype.toString.call(m)
					}
					g.__objToStr = y
					function f(m) {
						return typeof m == "object" && y(m) === "[object Date]"
					}
					g.__isDate = f
					function u(m) {
						return typeof m == "object" && y(m) === "[object Array]"
					}
					g.__isArray = u
					function c(m) {
						return (
							typeof m == "object" && y(m) === "[object RegExp]"
						)
					}
					g.__isRegExp = c
					function _(m) {
						var w = ""
						return (
							m.global && (w += "g"),
							m.ignoreCase && (w += "i"),
							m.multiline && (w += "m"),
							w
						)
					}
					return (g.__getRegExpFlags = _), g
				})()
				typeof n == "object" && n.exports && (n.exports = i)
			},
			function (n, r, i) {
				Object.defineProperty(r, "__esModule", { value: !0 })
				var o = (function () {
						function x(b, S) {
							var A = [],
								L = !0,
								M = !1,
								U = void 0
							try {
								for (
									var V = b[Symbol.iterator](), G;
									!(L = (G = V.next()).done) &&
									(A.push(G.value), !(S && A.length === S));
									L = !0
								);
							} catch (q) {
								;(M = !0), (U = q)
							} finally {
								try {
									!L && V.return && V.return()
								} finally {
									if (M) throw U
								}
							}
							return A
						}
						return function (b, S) {
							if (Array.isArray(b)) return b
							if (Symbol.iterator in Object(b)) return x(b, S)
							throw new TypeError(
								"Invalid attempt to destructure non-iterable instance"
							)
						}
					})(),
					l = (function () {
						function x(b, S) {
							for (var A = 0; A < S.length; A++) {
								var L = S[A]
								;(L.enumerable = L.enumerable || !1),
									(L.configurable = !0),
									"value" in L && (L.writable = !0),
									Object.defineProperty(b, L.key, L)
							}
						}
						return function (b, S, A) {
							return S && x(b.prototype, S), A && x(b, A), b
						}
					})(),
					h = function x(b, S, A) {
						b === null && (b = Function.prototype)
						var L = Object.getOwnPropertyDescriptor(b, S)
						if (L === void 0) {
							var M = Object.getPrototypeOf(b)
							return M === null ? void 0 : x(M, S, A)
						} else {
							if ("value" in L) return L.value
							var U = L.get
							return U === void 0 ? void 0 : U.call(A)
						}
					},
					p = i(0),
					g = d(p),
					y = i(8),
					f = d(y),
					u = i(4),
					c = d(u),
					_ = i(16),
					m = d(_),
					w = i(13),
					s = d(w),
					a = i(25),
					v = d(a)
				function d(x) {
					return x && x.__esModule ? x : { default: x }
				}
				function E(x, b) {
					if (!(x instanceof b))
						throw new TypeError("Cannot call a class as a function")
				}
				function N(x, b) {
					if (!x)
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						)
					return b && (typeof b == "object" || typeof b == "function")
						? b
						: x
				}
				function k(x, b) {
					if (typeof b != "function" && b !== null)
						throw new TypeError(
							"Super expression must either be null or a function, not " +
								typeof b
						)
					;(x.prototype = Object.create(b && b.prototype, {
						constructor: {
							value: x,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					})),
						b &&
							(Object.setPrototypeOf
								? Object.setPrototypeOf(x, b)
								: (x.__proto__ = b))
				}
				function O(x) {
					return x instanceof c.default || x instanceof u.BlockEmbed
				}
				var j = (function (x) {
					k(b, x)
					function b(S, A) {
						E(this, b)
						var L = N(
							this,
							(b.__proto__ || Object.getPrototypeOf(b)).call(
								this,
								S
							)
						)
						return (
							(L.emitter = A.emitter),
							Array.isArray(A.whitelist) &&
								(L.whitelist = A.whitelist.reduce(function (
									M,
									U
								) {
									return (M[U] = !0), M
								}, {})),
							L.domNode.addEventListener(
								"DOMNodeInserted",
								function () {}
							),
							L.optimize(),
							L.enable(),
							L
						)
					}
					return (
						l(b, [
							{
								key: "batchStart",
								value: function () {
									this.batch = !0
								}
							},
							{
								key: "batchEnd",
								value: function () {
									;(this.batch = !1), this.optimize()
								}
							},
							{
								key: "deleteAt",
								value: function (A, L) {
									var M = this.line(A),
										U = o(M, 2),
										V = U[0],
										G = U[1],
										q = this.line(A + L),
										R = o(q, 1),
										T = R[0]
									if (
										(h(
											b.prototype.__proto__ ||
												Object.getPrototypeOf(
													b.prototype
												),
											"deleteAt",
											this
										).call(this, A, L),
										T != null && V !== T && G > 0)
									) {
										if (
											V instanceof u.BlockEmbed ||
											T instanceof u.BlockEmbed
										) {
											this.optimize()
											return
										}
										if (V instanceof s.default) {
											var D = V.newlineIndex(
												V.length(),
												!0
											)
											if (
												D > -1 &&
												((V = V.split(D + 1)), V === T)
											) {
												this.optimize()
												return
											}
										} else if (T instanceof s.default) {
											var F = T.newlineIndex(0)
											F > -1 && T.split(F + 1)
										}
										var K =
											T.children.head instanceof m.default
												? null
												: T.children.head
										V.moveChildren(T, K), V.remove()
									}
									this.optimize()
								}
							},
							{
								key: "enable",
								value: function () {
									var A =
										arguments.length > 0 &&
										arguments[0] !== void 0
											? arguments[0]
											: !0
									this.domNode.setAttribute(
										"contenteditable",
										A
									)
								}
							},
							{
								key: "formatAt",
								value: function (A, L, M, U) {
									;(this.whitelist != null &&
										!this.whitelist[M]) ||
										(h(
											b.prototype.__proto__ ||
												Object.getPrototypeOf(
													b.prototype
												),
											"formatAt",
											this
										).call(this, A, L, M, U),
										this.optimize())
								}
							},
							{
								key: "insertAt",
								value: function (A, L, M) {
									if (
										!(
											M != null &&
											this.whitelist != null &&
											!this.whitelist[L]
										)
									) {
										if (A >= this.length())
											if (
												M == null ||
												g.default.query(
													L,
													g.default.Scope.BLOCK
												) == null
											) {
												var U = g.default.create(
													this.statics.defaultChild
												)
												this.appendChild(U),
													M == null &&
														L.endsWith(`
`) &&
														(L = L.slice(0, -1)),
													U.insertAt(0, L, M)
											} else {
												var V = g.default.create(L, M)
												this.appendChild(V)
											}
										else
											h(
												b.prototype.__proto__ ||
													Object.getPrototypeOf(
														b.prototype
													),
												"insertAt",
												this
											).call(this, A, L, M)
										this.optimize()
									}
								}
							},
							{
								key: "insertBefore",
								value: function (A, L) {
									if (
										A.statics.scope ===
										g.default.Scope.INLINE_BLOT
									) {
										var M = g.default.create(
											this.statics.defaultChild
										)
										M.appendChild(A), (A = M)
									}
									h(
										b.prototype.__proto__ ||
											Object.getPrototypeOf(b.prototype),
										"insertBefore",
										this
									).call(this, A, L)
								}
							},
							{
								key: "leaf",
								value: function (A) {
									return this.path(A).pop() || [null, -1]
								}
							},
							{
								key: "line",
								value: function (A) {
									return A === this.length()
										? this.line(A - 1)
										: this.descendant(O, A)
								}
							},
							{
								key: "lines",
								value: function () {
									var A =
											arguments.length > 0 &&
											arguments[0] !== void 0
												? arguments[0]
												: 0,
										L =
											arguments.length > 1 &&
											arguments[1] !== void 0
												? arguments[1]
												: Number.MAX_VALUE,
										M = function U(V, G, q) {
											var R = [],
												T = q
											return (
												V.children.forEachAt(
													G,
													q,
													function (D, F, K) {
														O(D)
															? R.push(D)
															: D instanceof
																	g.default
																		.Container &&
																(R = R.concat(
																	U(D, F, T)
																)),
															(T -= K)
													}
												),
												R
											)
										}
									return M(this, A, L)
								}
							},
							{
								key: "optimize",
								value: function () {
									var A =
											arguments.length > 0 &&
											arguments[0] !== void 0
												? arguments[0]
												: [],
										L =
											arguments.length > 1 &&
											arguments[1] !== void 0
												? arguments[1]
												: {}
									this.batch !== !0 &&
										(h(
											b.prototype.__proto__ ||
												Object.getPrototypeOf(
													b.prototype
												),
											"optimize",
											this
										).call(this, A, L),
										A.length > 0 &&
											this.emitter.emit(
												f.default.events
													.SCROLL_OPTIMIZE,
												A,
												L
											))
								}
							},
							{
								key: "path",
								value: function (A) {
									return h(
										b.prototype.__proto__ ||
											Object.getPrototypeOf(b.prototype),
										"path",
										this
									)
										.call(this, A)
										.slice(1)
								}
							},
							{
								key: "update",
								value: function (A) {
									if (this.batch !== !0) {
										var L = f.default.sources.USER
										typeof A == "string" && (L = A),
											Array.isArray(A) ||
												(A =
													this.observer.takeRecords()),
											A.length > 0 &&
												this.emitter.emit(
													f.default.events
														.SCROLL_BEFORE_UPDATE,
													L,
													A
												),
											h(
												b.prototype.__proto__ ||
													Object.getPrototypeOf(
														b.prototype
													),
												"update",
												this
											).call(this, A.concat([])),
											A.length > 0 &&
												this.emitter.emit(
													f.default.events
														.SCROLL_UPDATE,
													L,
													A
												)
									}
								}
							}
						]),
						b
					)
				})(g.default.Scroll)
				;(j.blotName = "scroll"),
					(j.className = "ql-editor"),
					(j.tagName = "DIV"),
					(j.defaultChild = "block"),
					(j.allowedChildren = [c.default, u.BlockEmbed, v.default]),
					(r.default = j)
			},
			function (n, r, i) {
				Object.defineProperty(r, "__esModule", { value: !0 }),
					(r.SHORTKEY = r.default = void 0)
				var o =
						typeof Symbol == "function" &&
						typeof Symbol.iterator == "symbol"
							? function (C) {
									return typeof C
								}
							: function (C) {
									return C &&
										typeof Symbol == "function" &&
										C.constructor === Symbol &&
										C !== Symbol.prototype
										? "symbol"
										: typeof C
								},
					l = (function () {
						function C($, Q) {
							var Y = [],
								J = !0,
								re = !1,
								le = void 0
							try {
								for (
									var ae = $[Symbol.iterator](), ue;
									!(J = (ue = ae.next()).done) &&
									(Y.push(ue.value), !(Q && Y.length === Q));
									J = !0
								);
							} catch (he) {
								;(re = !0), (le = he)
							} finally {
								try {
									!J && ae.return && ae.return()
								} finally {
									if (re) throw le
								}
							}
							return Y
						}
						return function ($, Q) {
							if (Array.isArray($)) return $
							if (Symbol.iterator in Object($)) return C($, Q)
							throw new TypeError(
								"Invalid attempt to destructure non-iterable instance"
							)
						}
					})(),
					h = (function () {
						function C($, Q) {
							for (var Y = 0; Y < Q.length; Y++) {
								var J = Q[Y]
								;(J.enumerable = J.enumerable || !1),
									(J.configurable = !0),
									"value" in J && (J.writable = !0),
									Object.defineProperty($, J.key, J)
							}
						}
						return function ($, Q, Y) {
							return Q && C($.prototype, Q), Y && C($, Y), $
						}
					})(),
					p = i(21),
					g = x(p),
					y = i(11),
					f = x(y),
					u = i(3),
					c = x(u),
					_ = i(2),
					m = x(_),
					w = i(20),
					s = x(w),
					a = i(0),
					v = x(a),
					d = i(5),
					E = x(d),
					N = i(10),
					k = x(N),
					O = i(9),
					j = x(O)
				function x(C) {
					return C && C.__esModule ? C : { default: C }
				}
				function b(C, $, Q) {
					return (
						$ in C
							? Object.defineProperty(C, $, {
									value: Q,
									enumerable: !0,
									configurable: !0,
									writable: !0
								})
							: (C[$] = Q),
						C
					)
				}
				function S(C, $) {
					if (!(C instanceof $))
						throw new TypeError("Cannot call a class as a function")
				}
				function A(C, $) {
					if (!C)
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						)
					return $ && (typeof $ == "object" || typeof $ == "function")
						? $
						: C
				}
				function L(C, $) {
					if (typeof $ != "function" && $ !== null)
						throw new TypeError(
							"Super expression must either be null or a function, not " +
								typeof $
						)
					;(C.prototype = Object.create($ && $.prototype, {
						constructor: {
							value: C,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					})),
						$ &&
							(Object.setPrototypeOf
								? Object.setPrototypeOf(C, $)
								: (C.__proto__ = $))
				}
				var M = (0, k.default)("quill:keyboard"),
					U = /Mac/i.test(navigator.platform) ? "metaKey" : "ctrlKey",
					V = (function (C) {
						L($, C),
							h($, null, [
								{
									key: "match",
									value: function (Y, J) {
										return (
											(J = H(J)),
											[
												"altKey",
												"ctrlKey",
												"metaKey",
												"shiftKey"
											].some(function (re) {
												return (
													!!J[re] !== Y[re] &&
													J[re] !== null
												)
											})
												? !1
												: J.key ===
													(Y.which || Y.keyCode)
										)
									}
								}
							])
						function $(Q, Y) {
							S(this, $)
							var J = A(
								this,
								($.__proto__ || Object.getPrototypeOf($)).call(
									this,
									Q,
									Y
								)
							)
							return (
								(J.bindings = {}),
								Object.keys(J.options.bindings).forEach(
									function (re) {
										;(re === "list autofill" &&
											Q.scroll.whitelist != null &&
											!Q.scroll.whitelist.list) ||
											(J.options.bindings[re] &&
												J.addBinding(
													J.options.bindings[re]
												))
									}
								),
								J.addBinding(
									{ key: $.keys.ENTER, shiftKey: null },
									D
								),
								J.addBinding(
									{
										key: $.keys.ENTER,
										metaKey: null,
										ctrlKey: null,
										altKey: null
									},
									function () {}
								),
								/Firefox/i.test(navigator.userAgent)
									? (J.addBinding(
											{ key: $.keys.BACKSPACE },
											{ collapsed: !0 },
											q
										),
										J.addBinding(
											{ key: $.keys.DELETE },
											{ collapsed: !0 },
											R
										))
									: (J.addBinding(
											{ key: $.keys.BACKSPACE },
											{ collapsed: !0, prefix: /^.?$/ },
											q
										),
										J.addBinding(
											{ key: $.keys.DELETE },
											{ collapsed: !0, suffix: /^.?$/ },
											R
										)),
								J.addBinding(
									{ key: $.keys.BACKSPACE },
									{ collapsed: !1 },
									T
								),
								J.addBinding(
									{ key: $.keys.DELETE },
									{ collapsed: !1 },
									T
								),
								J.addBinding(
									{
										key: $.keys.BACKSPACE,
										altKey: null,
										ctrlKey: null,
										metaKey: null,
										shiftKey: null
									},
									{ collapsed: !0, offset: 0 },
									q
								),
								J.listen(),
								J
							)
						}
						return (
							h($, [
								{
									key: "addBinding",
									value: function (Y) {
										var J =
												arguments.length > 1 &&
												arguments[1] !== void 0
													? arguments[1]
													: {},
											re =
												arguments.length > 2 &&
												arguments[2] !== void 0
													? arguments[2]
													: {},
											le = H(Y)
										if (le == null || le.key == null)
											return M.warn(
												"Attempted to add invalid keyboard binding",
												le
											)
										typeof J == "function" &&
											(J = { handler: J }),
											typeof re == "function" &&
												(re = { handler: re }),
											(le = (0, c.default)(le, J, re)),
											(this.bindings[le.key] =
												this.bindings[le.key] || []),
											this.bindings[le.key].push(le)
									}
								},
								{
									key: "listen",
									value: function () {
										var Y = this
										this.quill.root.addEventListener(
											"keydown",
											function (J) {
												if (!J.defaultPrevented) {
													var re =
															J.which ||
															J.keyCode,
														le = (
															Y.bindings[re] || []
														).filter(function (be) {
															return $.match(
																J,
																be
															)
														})
													if (le.length !== 0) {
														var ae =
															Y.quill.getSelection()
														if (
															!(
																ae == null ||
																!Y.quill.hasFocus()
															)
														) {
															var ue =
																	Y.quill.getLine(
																		ae.index
																	),
																he = l(ue, 2),
																Ke = he[0],
																je = he[1],
																P =
																	Y.quill.getLeaf(
																		ae.index
																	),
																I = l(P, 2),
																z = I[0],
																Z = I[1],
																W =
																	ae.length ===
																	0
																		? [z, Z]
																		: Y.quill.getLeaf(
																				ae.index +
																					ae.length
																			),
																X = l(W, 2),
																ee = X[0],
																ie = X[1],
																ce =
																	z instanceof
																	v.default
																		.Text
																		? z
																				.value()
																				.slice(
																					0,
																					Z
																				)
																		: "",
																Se =
																	ee instanceof
																	v.default
																		.Text
																		? ee
																				.value()
																				.slice(
																					ie
																				)
																		: "",
																pe = {
																	collapsed:
																		ae.length ===
																		0,
																	empty:
																		ae.length ===
																			0 &&
																		Ke.length() <=
																			1,
																	format: Y.quill.getFormat(
																		ae
																	),
																	offset: je,
																	prefix: ce,
																	suffix: Se
																},
																el = le.some(
																	function (
																		be
																	) {
																		if (
																			(be.collapsed !=
																				null &&
																				be.collapsed !==
																					pe.collapsed) ||
																			(be.empty !=
																				null &&
																				be.empty !==
																					pe.empty) ||
																			(be.offset !=
																				null &&
																				be.offset !==
																					pe.offset)
																		)
																			return !1
																		if (
																			Array.isArray(
																				be.format
																			)
																		) {
																			if (
																				be.format.every(
																					function (
																						ht
																					) {
																						return (
																							pe
																								.format[
																								ht
																							] ==
																							null
																						)
																					}
																				)
																			)
																				return !1
																		} else if (
																			o(
																				be.format
																			) ===
																				"object" &&
																			!Object.keys(
																				be.format
																			).every(
																				function (
																					ht
																				) {
																					return be
																						.format[
																						ht
																					] ===
																						!0
																						? pe
																								.format[
																								ht
																							] !=
																								null
																						: be
																									.format[
																									ht
																							  ] ===
																							  !1
																							? pe
																									.format[
																									ht
																								] ==
																								null
																							: (0,
																								f.default)(
																									be
																										.format[
																										ht
																									],
																									pe
																										.format[
																										ht
																									]
																								)
																				}
																			)
																		)
																			return !1
																		return (be.prefix !=
																			null &&
																			!be.prefix.test(
																				pe.prefix
																			)) ||
																			(be.suffix !=
																				null &&
																				!be.suffix.test(
																					pe.suffix
																				))
																			? !1
																			: be.handler.call(
																					Y,
																					ae,
																					pe
																				) !==
																					!0
																	}
																)
															el &&
																J.preventDefault()
														}
													}
												}
											}
										)
									}
								}
							]),
							$
						)
					})(j.default)
				;(V.keys = {
					BACKSPACE: 8,
					TAB: 9,
					ENTER: 13,
					ESCAPE: 27,
					LEFT: 37,
					UP: 38,
					RIGHT: 39,
					DOWN: 40,
					DELETE: 46
				}),
					(V.DEFAULTS = {
						bindings: {
							bold: K("bold"),
							italic: K("italic"),
							underline: K("underline"),
							indent: {
								key: V.keys.TAB,
								format: ["blockquote", "indent", "list"],
								handler: function ($, Q) {
									if (Q.collapsed && Q.offset !== 0) return !0
									this.quill.format(
										"indent",
										"+1",
										E.default.sources.USER
									)
								}
							},
							outdent: {
								key: V.keys.TAB,
								shiftKey: !0,
								format: ["blockquote", "indent", "list"],
								handler: function ($, Q) {
									if (Q.collapsed && Q.offset !== 0) return !0
									this.quill.format(
										"indent",
										"-1",
										E.default.sources.USER
									)
								}
							},
							"outdent backspace": {
								key: V.keys.BACKSPACE,
								collapsed: !0,
								shiftKey: null,
								metaKey: null,
								ctrlKey: null,
								altKey: null,
								format: ["indent", "list"],
								offset: 0,
								handler: function ($, Q) {
									Q.format.indent != null
										? this.quill.format(
												"indent",
												"-1",
												E.default.sources.USER
											)
										: Q.format.list != null &&
											this.quill.format(
												"list",
												!1,
												E.default.sources.USER
											)
								}
							},
							"indent code-block": F(!0),
							"outdent code-block": F(!1),
							"remove tab": {
								key: V.keys.TAB,
								shiftKey: !0,
								collapsed: !0,
								prefix: /\t$/,
								handler: function ($) {
									this.quill.deleteText(
										$.index - 1,
										1,
										E.default.sources.USER
									)
								}
							},
							tab: {
								key: V.keys.TAB,
								handler: function ($) {
									this.quill.history.cutoff()
									var Q = new m.default()
										.retain($.index)
										.delete($.length)
										.insert("	")
									this.quill.updateContents(
										Q,
										E.default.sources.USER
									),
										this.quill.history.cutoff(),
										this.quill.setSelection(
											$.index + 1,
											E.default.sources.SILENT
										)
								}
							},
							"list empty enter": {
								key: V.keys.ENTER,
								collapsed: !0,
								format: ["list"],
								empty: !0,
								handler: function ($, Q) {
									this.quill.format(
										"list",
										!1,
										E.default.sources.USER
									),
										Q.format.indent &&
											this.quill.format(
												"indent",
												!1,
												E.default.sources.USER
											)
								}
							},
							"checklist enter": {
								key: V.keys.ENTER,
								collapsed: !0,
								format: { list: "checked" },
								handler: function ($) {
									var Q = this.quill.getLine($.index),
										Y = l(Q, 2),
										J = Y[0],
										re = Y[1],
										le = (0, c.default)({}, J.formats(), {
											list: "checked"
										}),
										ae = new m.default()
											.retain($.index)
											.insert(
												`
`,
												le
											)
											.retain(J.length() - re - 1)
											.retain(1, { list: "unchecked" })
									this.quill.updateContents(
										ae,
										E.default.sources.USER
									),
										this.quill.setSelection(
											$.index + 1,
											E.default.sources.SILENT
										),
										this.quill.scrollIntoView()
								}
							},
							"header enter": {
								key: V.keys.ENTER,
								collapsed: !0,
								format: ["header"],
								suffix: /^$/,
								handler: function ($, Q) {
									var Y = this.quill.getLine($.index),
										J = l(Y, 2),
										re = J[0],
										le = J[1],
										ae = new m.default()
											.retain($.index)
											.insert(
												`
`,
												Q.format
											)
											.retain(re.length() - le - 1)
											.retain(1, { header: null })
									this.quill.updateContents(
										ae,
										E.default.sources.USER
									),
										this.quill.setSelection(
											$.index + 1,
											E.default.sources.SILENT
										),
										this.quill.scrollIntoView()
								}
							},
							"list autofill": {
								key: " ",
								collapsed: !0,
								format: { list: !1 },
								prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
								handler: function ($, Q) {
									var Y = Q.prefix.length,
										J = this.quill.getLine($.index),
										re = l(J, 2),
										le = re[0],
										ae = re[1]
									if (ae > Y) return !0
									var ue = void 0
									switch (Q.prefix.trim()) {
										case "[]":
										case "[ ]":
											ue = "unchecked"
											break
										case "[x]":
											ue = "checked"
											break
										case "-":
										case "*":
											ue = "bullet"
											break
										default:
											ue = "ordered"
									}
									this.quill.insertText(
										$.index,
										" ",
										E.default.sources.USER
									),
										this.quill.history.cutoff()
									var he = new m.default()
										.retain($.index - ae)
										.delete(Y + 1)
										.retain(le.length() - 2 - ae)
										.retain(1, { list: ue })
									this.quill.updateContents(
										he,
										E.default.sources.USER
									),
										this.quill.history.cutoff(),
										this.quill.setSelection(
											$.index - Y,
											E.default.sources.SILENT
										)
								}
							},
							"code exit": {
								key: V.keys.ENTER,
								collapsed: !0,
								format: ["code-block"],
								prefix: /\n\n$/,
								suffix: /^\s+$/,
								handler: function ($) {
									var Q = this.quill.getLine($.index),
										Y = l(Q, 2),
										J = Y[0],
										re = Y[1],
										le = new m.default()
											.retain(
												$.index + J.length() - re - 2
											)
											.retain(1, { "code-block": null })
											.delete(1)
									this.quill.updateContents(
										le,
										E.default.sources.USER
									)
								}
							},
							"embed left": G(V.keys.LEFT, !1),
							"embed left shift": G(V.keys.LEFT, !0),
							"embed right": G(V.keys.RIGHT, !1),
							"embed right shift": G(V.keys.RIGHT, !0)
						}
					})
				function G(C, $) {
					var Q,
						Y = C === V.keys.LEFT ? "prefix" : "suffix"
					return (
						(Q = { key: C, shiftKey: $, altKey: null }),
						b(Q, Y, /^$/),
						b(Q, "handler", function (re) {
							var le = re.index
							C === V.keys.RIGHT && (le += re.length + 1)
							var ae = this.quill.getLeaf(le),
								ue = l(ae, 1),
								he = ue[0]
							return he instanceof v.default.Embed
								? (C === V.keys.LEFT
										? $
											? this.quill.setSelection(
													re.index - 1,
													re.length + 1,
													E.default.sources.USER
												)
											: this.quill.setSelection(
													re.index - 1,
													E.default.sources.USER
												)
										: $
											? this.quill.setSelection(
													re.index,
													re.length + 1,
													E.default.sources.USER
												)
											: this.quill.setSelection(
													re.index + re.length + 1,
													E.default.sources.USER
												),
									!1)
								: !0
						}),
						Q
					)
				}
				function q(C, $) {
					if (!(C.index === 0 || this.quill.getLength() <= 1)) {
						var Q = this.quill.getLine(C.index),
							Y = l(Q, 1),
							J = Y[0],
							re = {}
						if ($.offset === 0) {
							var le = this.quill.getLine(C.index - 1),
								ae = l(le, 1),
								ue = ae[0]
							if (ue != null && ue.length() > 1) {
								var he = J.formats(),
									Ke = this.quill.getFormat(C.index - 1, 1)
								re = s.default.attributes.diff(he, Ke) || {}
							}
						}
						var je = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(
							$.prefix
						)
							? 2
							: 1
						this.quill.deleteText(
							C.index - je,
							je,
							E.default.sources.USER
						),
							Object.keys(re).length > 0 &&
								this.quill.formatLine(
									C.index - je,
									je,
									re,
									E.default.sources.USER
								),
							this.quill.focus()
					}
				}
				function R(C, $) {
					var Q = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test($.suffix)
						? 2
						: 1
					if (!(C.index >= this.quill.getLength() - Q)) {
						var Y = {},
							J = 0,
							re = this.quill.getLine(C.index),
							le = l(re, 1),
							ae = le[0]
						if ($.offset >= ae.length() - 1) {
							var ue = this.quill.getLine(C.index + 1),
								he = l(ue, 1),
								Ke = he[0]
							if (Ke) {
								var je = ae.formats(),
									P = this.quill.getFormat(C.index, 1)
								;(Y = s.default.attributes.diff(je, P) || {}),
									(J = Ke.length())
							}
						}
						this.quill.deleteText(
							C.index,
							Q,
							E.default.sources.USER
						),
							Object.keys(Y).length > 0 &&
								this.quill.formatLine(
									C.index + J - 1,
									Q,
									Y,
									E.default.sources.USER
								)
					}
				}
				function T(C) {
					var $ = this.quill.getLines(C),
						Q = {}
					if ($.length > 1) {
						var Y = $[0].formats(),
							J = $[$.length - 1].formats()
						Q = s.default.attributes.diff(J, Y) || {}
					}
					this.quill.deleteText(C, E.default.sources.USER),
						Object.keys(Q).length > 0 &&
							this.quill.formatLine(
								C.index,
								1,
								Q,
								E.default.sources.USER
							),
						this.quill.setSelection(
							C.index,
							E.default.sources.SILENT
						),
						this.quill.focus()
				}
				function D(C, $) {
					var Q = this
					C.length > 0 &&
						this.quill.scroll.deleteAt(C.index, C.length)
					var Y = Object.keys($.format).reduce(function (J, re) {
						return (
							v.default.query(re, v.default.Scope.BLOCK) &&
								!Array.isArray($.format[re]) &&
								(J[re] = $.format[re]),
							J
						)
					}, {})
					this.quill.insertText(
						C.index,
						`
`,
						Y,
						E.default.sources.USER
					),
						this.quill.setSelection(
							C.index + 1,
							E.default.sources.SILENT
						),
						this.quill.focus(),
						Object.keys($.format).forEach(function (J) {
							Y[J] == null &&
								(Array.isArray($.format[J]) ||
									(J !== "link" &&
										Q.quill.format(
											J,
											$.format[J],
											E.default.sources.USER
										)))
						})
				}
				function F(C) {
					return {
						key: V.keys.TAB,
						shiftKey: !C,
						format: { "code-block": !0 },
						handler: function (Q) {
							var Y = v.default.query("code-block"),
								J = Q.index,
								re = Q.length,
								le = this.quill.scroll.descendant(Y, J),
								ae = l(le, 2),
								ue = ae[0],
								he = ae[1]
							if (ue != null) {
								var Ke = this.quill.getIndex(ue),
									je = ue.newlineIndex(he, !0) + 1,
									P = ue.newlineIndex(Ke + he + re),
									I = ue.domNode.textContent.slice(je, P)
										.split(`
`)
								;(he = 0),
									I.forEach(function (z, Z) {
										C
											? (ue.insertAt(je + he, Y.TAB),
												(he += Y.TAB.length),
												Z === 0
													? (J += Y.TAB.length)
													: (re += Y.TAB.length))
											: z.startsWith(Y.TAB) &&
												(ue.deleteAt(
													je + he,
													Y.TAB.length
												),
												(he -= Y.TAB.length),
												Z === 0
													? (J -= Y.TAB.length)
													: (re -= Y.TAB.length)),
											(he += z.length + 1)
									}),
									this.quill.update(E.default.sources.USER),
									this.quill.setSelection(
										J,
										re,
										E.default.sources.SILENT
									)
							}
						}
					}
				}
				function K(C) {
					return {
						key: C[0].toUpperCase(),
						shortKey: !0,
						handler: function (Q, Y) {
							this.quill.format(
								C,
								!Y.format[C],
								E.default.sources.USER
							)
						}
					}
				}
				function H(C) {
					if (typeof C == "string" || typeof C == "number")
						return H({ key: C })
					if (
						((typeof C > "u" ? "undefined" : o(C)) === "object" &&
							(C = (0, g.default)(C, !1)),
						typeof C.key == "string")
					)
						if (V.keys[C.key.toUpperCase()] != null)
							C.key = V.keys[C.key.toUpperCase()]
						else if (C.key.length === 1)
							C.key = C.key.toUpperCase().charCodeAt(0)
						else return null
					return (
						C.shortKey && ((C[U] = C.shortKey), delete C.shortKey),
						C
					)
				}
				;(r.default = V), (r.SHORTKEY = U)
			},
			function (n, r, i) {
				Object.defineProperty(r, "__esModule", { value: !0 })
				var o = (function () {
						function s(a, v) {
							var d = [],
								E = !0,
								N = !1,
								k = void 0
							try {
								for (
									var O = a[Symbol.iterator](), j;
									!(E = (j = O.next()).done) &&
									(d.push(j.value), !(v && d.length === v));
									E = !0
								);
							} catch (x) {
								;(N = !0), (k = x)
							} finally {
								try {
									!E && O.return && O.return()
								} finally {
									if (N) throw k
								}
							}
							return d
						}
						return function (a, v) {
							if (Array.isArray(a)) return a
							if (Symbol.iterator in Object(a)) return s(a, v)
							throw new TypeError(
								"Invalid attempt to destructure non-iterable instance"
							)
						}
					})(),
					l = function s(a, v, d) {
						a === null && (a = Function.prototype)
						var E = Object.getOwnPropertyDescriptor(a, v)
						if (E === void 0) {
							var N = Object.getPrototypeOf(a)
							return N === null ? void 0 : s(N, v, d)
						} else {
							if ("value" in E) return E.value
							var k = E.get
							return k === void 0 ? void 0 : k.call(d)
						}
					},
					h = (function () {
						function s(a, v) {
							for (var d = 0; d < v.length; d++) {
								var E = v[d]
								;(E.enumerable = E.enumerable || !1),
									(E.configurable = !0),
									"value" in E && (E.writable = !0),
									Object.defineProperty(a, E.key, E)
							}
						}
						return function (a, v, d) {
							return v && s(a.prototype, v), d && s(a, d), a
						}
					})(),
					p = i(0),
					g = u(p),
					y = i(7),
					f = u(y)
				function u(s) {
					return s && s.__esModule ? s : { default: s }
				}
				function c(s, a) {
					if (!(s instanceof a))
						throw new TypeError("Cannot call a class as a function")
				}
				function _(s, a) {
					if (!s)
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						)
					return a && (typeof a == "object" || typeof a == "function")
						? a
						: s
				}
				function m(s, a) {
					if (typeof a != "function" && a !== null)
						throw new TypeError(
							"Super expression must either be null or a function, not " +
								typeof a
						)
					;(s.prototype = Object.create(a && a.prototype, {
						constructor: {
							value: s,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					})),
						a &&
							(Object.setPrototypeOf
								? Object.setPrototypeOf(s, a)
								: (s.__proto__ = a))
				}
				var w = (function (s) {
					m(a, s),
						h(a, null, [{ key: "value", value: function () {} }])
					function a(v, d) {
						c(this, a)
						var E = _(
							this,
							(a.__proto__ || Object.getPrototypeOf(a)).call(
								this,
								v
							)
						)
						return (
							(E.selection = d),
							(E.textNode = document.createTextNode(a.CONTENTS)),
							E.domNode.appendChild(E.textNode),
							(E._length = 0),
							E
						)
					}
					return (
						h(a, [
							{
								key: "detach",
								value: function () {
									this.parent != null &&
										this.parent.removeChild(this)
								}
							},
							{
								key: "format",
								value: function (d, E) {
									if (this._length !== 0)
										return l(
											a.prototype.__proto__ ||
												Object.getPrototypeOf(
													a.prototype
												),
											"format",
											this
										).call(this, d, E)
									for (
										var N = this, k = 0;
										N != null &&
										N.statics.scope !==
											g.default.Scope.BLOCK_BLOT;

									)
										(k += N.offset(N.parent)),
											(N = N.parent)
									N != null &&
										((this._length = a.CONTENTS.length),
										N.optimize(),
										N.formatAt(k, a.CONTENTS.length, d, E),
										(this._length = 0))
								}
							},
							{
								key: "index",
								value: function (d, E) {
									return d === this.textNode
										? 0
										: l(
												a.prototype.__proto__ ||
													Object.getPrototypeOf(
														a.prototype
													),
												"index",
												this
											).call(this, d, E)
								}
							},
							{
								key: "length",
								value: function () {
									return this._length
								}
							},
							{
								key: "position",
								value: function () {
									return [
										this.textNode,
										this.textNode.data.length
									]
								}
							},
							{
								key: "remove",
								value: function () {
									l(
										a.prototype.__proto__ ||
											Object.getPrototypeOf(a.prototype),
										"remove",
										this
									).call(this),
										(this.parent = null)
								}
							},
							{
								key: "restore",
								value: function () {
									if (
										!(
											this.selection.composing ||
											this.parent == null
										)
									) {
										var d = this.textNode,
											E = this.selection.getNativeRange(),
											N = void 0,
											k = void 0,
											O = void 0
										if (
											E != null &&
											E.start.node === d &&
											E.end.node === d
										) {
											var j = [
												d,
												E.start.offset,
												E.end.offset
											]
											;(N = j[0]), (k = j[1]), (O = j[2])
										}
										for (
											;
											this.domNode.lastChild != null &&
											this.domNode.lastChild !==
												this.textNode;

										)
											this.domNode.parentNode.insertBefore(
												this.domNode.lastChild,
												this.domNode
											)
										if (this.textNode.data !== a.CONTENTS) {
											var x = this.textNode.data
												.split(a.CONTENTS)
												.join("")
											this.next instanceof f.default
												? ((N = this.next.domNode),
													this.next.insertAt(0, x),
													(this.textNode.data =
														a.CONTENTS))
												: ((this.textNode.data = x),
													this.parent.insertBefore(
														g.default.create(
															this.textNode
														),
														this
													),
													(this.textNode =
														document.createTextNode(
															a.CONTENTS
														)),
													this.domNode.appendChild(
														this.textNode
													))
										}
										if ((this.remove(), k != null)) {
											var b = [k, O].map(function (A) {
													return Math.max(
														0,
														Math.min(
															N.data.length,
															A - 1
														)
													)
												}),
												S = o(b, 2)
											return (
												(k = S[0]),
												(O = S[1]),
												{
													startNode: N,
													startOffset: k,
													endNode: N,
													endOffset: O
												}
											)
										}
									}
								}
							},
							{
								key: "update",
								value: function (d, E) {
									var N = this
									if (
										d.some(function (O) {
											return (
												O.type === "characterData" &&
												O.target === N.textNode
											)
										})
									) {
										var k = this.restore()
										k && (E.range = k)
									}
								}
							},
							{
								key: "value",
								value: function () {
									return ""
								}
							}
						]),
						a
					)
				})(g.default.Embed)
				;(w.blotName = "cursor"),
					(w.className = "ql-cursor"),
					(w.tagName = "span"),
					(w.CONTENTS = "\uFEFF"),
					(r.default = w)
			},
			function (n, r, i) {
				Object.defineProperty(r, "__esModule", { value: !0 })
				var o = i(0),
					l = g(o),
					h = i(4),
					p = g(h)
				function g(_) {
					return _ && _.__esModule ? _ : { default: _ }
				}
				function y(_, m) {
					if (!(_ instanceof m))
						throw new TypeError("Cannot call a class as a function")
				}
				function f(_, m) {
					if (!_)
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						)
					return m && (typeof m == "object" || typeof m == "function")
						? m
						: _
				}
				function u(_, m) {
					if (typeof m != "function" && m !== null)
						throw new TypeError(
							"Super expression must either be null or a function, not " +
								typeof m
						)
					;(_.prototype = Object.create(m && m.prototype, {
						constructor: {
							value: _,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					})),
						m &&
							(Object.setPrototypeOf
								? Object.setPrototypeOf(_, m)
								: (_.__proto__ = m))
				}
				var c = (function (_) {
					u(m, _)
					function m() {
						return (
							y(this, m),
							f(
								this,
								(m.__proto__ || Object.getPrototypeOf(m)).apply(
									this,
									arguments
								)
							)
						)
					}
					return m
				})(l.default.Container)
				;(c.allowedChildren = [p.default, h.BlockEmbed, c]),
					(r.default = c)
			},
			function (n, r, i) {
				Object.defineProperty(r, "__esModule", { value: !0 }),
					(r.ColorStyle = r.ColorClass = r.ColorAttributor = void 0)
				var o = (function () {
						function w(s, a) {
							for (var v = 0; v < a.length; v++) {
								var d = a[v]
								;(d.enumerable = d.enumerable || !1),
									(d.configurable = !0),
									"value" in d && (d.writable = !0),
									Object.defineProperty(s, d.key, d)
							}
						}
						return function (s, a, v) {
							return a && w(s.prototype, a), v && w(s, v), s
						}
					})(),
					l = function w(s, a, v) {
						s === null && (s = Function.prototype)
						var d = Object.getOwnPropertyDescriptor(s, a)
						if (d === void 0) {
							var E = Object.getPrototypeOf(s)
							return E === null ? void 0 : w(E, a, v)
						} else {
							if ("value" in d) return d.value
							var N = d.get
							return N === void 0 ? void 0 : N.call(v)
						}
					},
					h = i(0),
					p = g(h)
				function g(w) {
					return w && w.__esModule ? w : { default: w }
				}
				function y(w, s) {
					if (!(w instanceof s))
						throw new TypeError("Cannot call a class as a function")
				}
				function f(w, s) {
					if (!w)
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						)
					return s && (typeof s == "object" || typeof s == "function")
						? s
						: w
				}
				function u(w, s) {
					if (typeof s != "function" && s !== null)
						throw new TypeError(
							"Super expression must either be null or a function, not " +
								typeof s
						)
					;(w.prototype = Object.create(s && s.prototype, {
						constructor: {
							value: w,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					})),
						s &&
							(Object.setPrototypeOf
								? Object.setPrototypeOf(w, s)
								: (w.__proto__ = s))
				}
				var c = (function (w) {
						u(s, w)
						function s() {
							return (
								y(this, s),
								f(
									this,
									(
										s.__proto__ || Object.getPrototypeOf(s)
									).apply(this, arguments)
								)
							)
						}
						return (
							o(s, [
								{
									key: "value",
									value: function (v) {
										var d = l(
											s.prototype.__proto__ ||
												Object.getPrototypeOf(
													s.prototype
												),
											"value",
											this
										).call(this, v)
										return d.startsWith("rgb(")
											? ((d = d
													.replace(/^[^\d]+/, "")
													.replace(/[^\d]+$/, "")),
												"#" +
													d
														.split(",")
														.map(function (E) {
															return (
																"00" +
																parseInt(
																	E
																).toString(16)
															).slice(-2)
														})
														.join(""))
											: d
									}
								}
							]),
							s
						)
					})(p.default.Attributor.Style),
					_ = new p.default.Attributor.Class("color", "ql-color", {
						scope: p.default.Scope.INLINE
					}),
					m = new c("color", "color", {
						scope: p.default.Scope.INLINE
					})
				;(r.ColorAttributor = c), (r.ColorClass = _), (r.ColorStyle = m)
			},
			function (n, r, i) {
				Object.defineProperty(r, "__esModule", { value: !0 }),
					(r.sanitize = r.default = void 0)
				var o = (function () {
						function m(w, s) {
							for (var a = 0; a < s.length; a++) {
								var v = s[a]
								;(v.enumerable = v.enumerable || !1),
									(v.configurable = !0),
									"value" in v && (v.writable = !0),
									Object.defineProperty(w, v.key, v)
							}
						}
						return function (w, s, a) {
							return s && m(w.prototype, s), a && m(w, a), w
						}
					})(),
					l = function m(w, s, a) {
						w === null && (w = Function.prototype)
						var v = Object.getOwnPropertyDescriptor(w, s)
						if (v === void 0) {
							var d = Object.getPrototypeOf(w)
							return d === null ? void 0 : m(d, s, a)
						} else {
							if ("value" in v) return v.value
							var E = v.get
							return E === void 0 ? void 0 : E.call(a)
						}
					},
					h = i(6),
					p = g(h)
				function g(m) {
					return m && m.__esModule ? m : { default: m }
				}
				function y(m, w) {
					if (!(m instanceof w))
						throw new TypeError("Cannot call a class as a function")
				}
				function f(m, w) {
					if (!m)
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						)
					return w && (typeof w == "object" || typeof w == "function")
						? w
						: m
				}
				function u(m, w) {
					if (typeof w != "function" && w !== null)
						throw new TypeError(
							"Super expression must either be null or a function, not " +
								typeof w
						)
					;(m.prototype = Object.create(w && w.prototype, {
						constructor: {
							value: m,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					})),
						w &&
							(Object.setPrototypeOf
								? Object.setPrototypeOf(m, w)
								: (m.__proto__ = w))
				}
				var c = (function (m) {
					u(w, m)
					function w() {
						return (
							y(this, w),
							f(
								this,
								(w.__proto__ || Object.getPrototypeOf(w)).apply(
									this,
									arguments
								)
							)
						)
					}
					return (
						o(
							w,
							[
								{
									key: "format",
									value: function (a, v) {
										if (a !== this.statics.blotName || !v)
											return l(
												w.prototype.__proto__ ||
													Object.getPrototypeOf(
														w.prototype
													),
												"format",
												this
											).call(this, a, v)
										;(v = this.constructor.sanitize(v)),
											this.domNode.setAttribute("href", v)
									}
								}
							],
							[
								{
									key: "create",
									value: function (a) {
										var v = l(
											w.__proto__ ||
												Object.getPrototypeOf(w),
											"create",
											this
										).call(this, a)
										return (
											(a = this.sanitize(a)),
											v.setAttribute("href", a),
											v.setAttribute(
												"rel",
												"noopener noreferrer"
											),
											v.setAttribute("target", "_blank"),
											v
										)
									}
								},
								{
									key: "formats",
									value: function (a) {
										return a.getAttribute("href")
									}
								},
								{
									key: "sanitize",
									value: function (a) {
										return _(a, this.PROTOCOL_WHITELIST)
											? a
											: this.SANITIZED_URL
									}
								}
							]
						),
						w
					)
				})(p.default)
				;(c.blotName = "link"),
					(c.tagName = "A"),
					(c.SANITIZED_URL = "about:blank"),
					(c.PROTOCOL_WHITELIST = ["http", "https", "mailto", "tel"])
				function _(m, w) {
					var s = document.createElement("a")
					s.href = m
					var a = s.href.slice(0, s.href.indexOf(":"))
					return w.indexOf(a) > -1
				}
				;(r.default = c), (r.sanitize = _)
			},
			function (n, r, i) {
				Object.defineProperty(r, "__esModule", { value: !0 })
				var o =
						typeof Symbol == "function" &&
						typeof Symbol.iterator == "symbol"
							? function (w) {
									return typeof w
								}
							: function (w) {
									return w &&
										typeof Symbol == "function" &&
										w.constructor === Symbol &&
										w !== Symbol.prototype
										? "symbol"
										: typeof w
								},
					l = (function () {
						function w(s, a) {
							for (var v = 0; v < a.length; v++) {
								var d = a[v]
								;(d.enumerable = d.enumerable || !1),
									(d.configurable = !0),
									"value" in d && (d.writable = !0),
									Object.defineProperty(s, d.key, d)
							}
						}
						return function (s, a, v) {
							return a && w(s.prototype, a), v && w(s, v), s
						}
					})(),
					h = i(23),
					p = f(h),
					g = i(107),
					y = f(g)
				function f(w) {
					return w && w.__esModule ? w : { default: w }
				}
				function u(w, s) {
					if (!(w instanceof s))
						throw new TypeError("Cannot call a class as a function")
				}
				var c = 0
				function _(w, s) {
					w.setAttribute(s, w.getAttribute(s) !== "true")
				}
				var m = (function () {
					function w(s) {
						var a = this
						u(this, w),
							(this.select = s),
							(this.container = document.createElement("span")),
							this.buildPicker(),
							(this.select.style.display = "none"),
							this.select.parentNode.insertBefore(
								this.container,
								this.select
							),
							this.label.addEventListener(
								"mousedown",
								function () {
									a.togglePicker()
								}
							),
							this.label.addEventListener(
								"keydown",
								function (v) {
									switch (v.keyCode) {
										case p.default.keys.ENTER:
											a.togglePicker()
											break
										case p.default.keys.ESCAPE:
											a.escape(), v.preventDefault()
											break
									}
								}
							),
							this.select.addEventListener(
								"change",
								this.update.bind(this)
							)
					}
					return (
						l(w, [
							{
								key: "togglePicker",
								value: function () {
									this.container.classList.toggle(
										"ql-expanded"
									),
										_(this.label, "aria-expanded"),
										_(this.options, "aria-hidden")
								}
							},
							{
								key: "buildItem",
								value: function (a) {
									var v = this,
										d = document.createElement("span")
									return (
										(d.tabIndex = "0"),
										d.setAttribute("role", "button"),
										d.classList.add("ql-picker-item"),
										a.hasAttribute("value") &&
											d.setAttribute(
												"data-value",
												a.getAttribute("value")
											),
										a.textContent &&
											d.setAttribute(
												"data-label",
												a.textContent
											),
										d.addEventListener(
											"click",
											function () {
												v.selectItem(d, !0)
											}
										),
										d.addEventListener(
											"keydown",
											function (E) {
												switch (E.keyCode) {
													case p.default.keys.ENTER:
														v.selectItem(d, !0),
															E.preventDefault()
														break
													case p.default.keys.ESCAPE:
														v.escape(),
															E.preventDefault()
														break
												}
											}
										),
										d
									)
								}
							},
							{
								key: "buildLabel",
								value: function () {
									var a = document.createElement("span")
									return (
										a.classList.add("ql-picker-label"),
										(a.innerHTML = y.default),
										(a.tabIndex = "0"),
										a.setAttribute("role", "button"),
										a.setAttribute(
											"aria-expanded",
											"false"
										),
										this.container.appendChild(a),
										a
									)
								}
							},
							{
								key: "buildOptions",
								value: function () {
									var a = this,
										v = document.createElement("span")
									v.classList.add("ql-picker-options"),
										v.setAttribute("aria-hidden", "true"),
										(v.tabIndex = "-1"),
										(v.id = "ql-picker-options-" + c),
										(c += 1),
										this.label.setAttribute(
											"aria-controls",
											v.id
										),
										(this.options = v),
										[].slice
											.call(this.select.options)
											.forEach(function (d) {
												var E = a.buildItem(d)
												v.appendChild(E),
													d.selected === !0 &&
														a.selectItem(E)
											}),
										this.container.appendChild(v)
								}
							},
							{
								key: "buildPicker",
								value: function () {
									var a = this
									;[].slice
										.call(this.select.attributes)
										.forEach(function (v) {
											a.container.setAttribute(
												v.name,
												v.value
											)
										}),
										this.container.classList.add(
											"ql-picker"
										),
										(this.label = this.buildLabel()),
										this.buildOptions()
								}
							},
							{
								key: "escape",
								value: function () {
									var a = this
									this.close(),
										setTimeout(function () {
											return a.label.focus()
										}, 1)
								}
							},
							{
								key: "close",
								value: function () {
									this.container.classList.remove(
										"ql-expanded"
									),
										this.label.setAttribute(
											"aria-expanded",
											"false"
										),
										this.options.setAttribute(
											"aria-hidden",
											"true"
										)
								}
							},
							{
								key: "selectItem",
								value: function (a) {
									var v =
											arguments.length > 1 &&
											arguments[1] !== void 0
												? arguments[1]
												: !1,
										d =
											this.container.querySelector(
												".ql-selected"
											)
									if (
										a !== d &&
										(d != null &&
											d.classList.remove("ql-selected"),
										a != null &&
											(a.classList.add("ql-selected"),
											(this.select.selectedIndex =
												[].indexOf.call(
													a.parentNode.children,
													a
												)),
											a.hasAttribute("data-value")
												? this.label.setAttribute(
														"data-value",
														a.getAttribute(
															"data-value"
														)
													)
												: this.label.removeAttribute(
														"data-value"
													),
											a.hasAttribute("data-label")
												? this.label.setAttribute(
														"data-label",
														a.getAttribute(
															"data-label"
														)
													)
												: this.label.removeAttribute(
														"data-label"
													),
											v))
									) {
										if (typeof Event == "function")
											this.select.dispatchEvent(
												new Event("change")
											)
										else if (
											(typeof Event > "u"
												? "undefined"
												: o(Event)) === "object"
										) {
											var E =
												document.createEvent("Event")
											E.initEvent("change", !0, !0),
												this.select.dispatchEvent(E)
										}
										this.close()
									}
								}
							},
							{
								key: "update",
								value: function () {
									var a = void 0
									if (this.select.selectedIndex > -1) {
										var v =
											this.container.querySelector(
												".ql-picker-options"
											).children[
												this.select.selectedIndex
											]
										;(a =
											this.select.options[
												this.select.selectedIndex
											]),
											this.selectItem(v)
									} else this.selectItem(null)
									var d =
										a != null &&
										a !==
											this.select.querySelector(
												"option[selected]"
											)
									this.label.classList.toggle("ql-active", d)
								}
							}
						]),
						w
					)
				})()
				r.default = m
			},
			function (n, r, i) {
				Object.defineProperty(r, "__esModule", { value: !0 })
				var o = i(0),
					l = M(o),
					h = i(5),
					p = M(h),
					g = i(4),
					y = M(g),
					f = i(16),
					u = M(f),
					c = i(25),
					_ = M(c),
					m = i(24),
					w = M(m),
					s = i(35),
					a = M(s),
					v = i(6),
					d = M(v),
					E = i(22),
					N = M(E),
					k = i(7),
					O = M(k),
					j = i(55),
					x = M(j),
					b = i(42),
					S = M(b),
					A = i(23),
					L = M(A)
				function M(U) {
					return U && U.__esModule ? U : { default: U }
				}
				p.default.register({
					"blots/block": y.default,
					"blots/block/embed": g.BlockEmbed,
					"blots/break": u.default,
					"blots/container": _.default,
					"blots/cursor": w.default,
					"blots/embed": a.default,
					"blots/inline": d.default,
					"blots/scroll": N.default,
					"blots/text": O.default,
					"modules/clipboard": x.default,
					"modules/history": S.default,
					"modules/keyboard": L.default
				}),
					l.default.register(
						y.default,
						u.default,
						w.default,
						d.default,
						N.default,
						O.default
					),
					(r.default = p.default)
			},
			function (n, r, i) {
				Object.defineProperty(r, "__esModule", { value: !0 })
				var o = i(1),
					l = (function () {
						function h(p) {
							;(this.domNode = p),
								(this.domNode[o.DATA_KEY] = { blot: this })
						}
						return (
							Object.defineProperty(h.prototype, "statics", {
								get: function () {
									return this.constructor
								},
								enumerable: !0,
								configurable: !0
							}),
							(h.create = function (p) {
								if (this.tagName == null)
									throw new o.ParchmentError(
										"Blot definition missing tagName"
									)
								var g
								return (
									Array.isArray(this.tagName)
										? (typeof p == "string" &&
												((p = p.toUpperCase()),
												parseInt(p).toString() === p &&
													(p = parseInt(p))),
											typeof p == "number"
												? (g = document.createElement(
														this.tagName[p - 1]
													))
												: this.tagName.indexOf(p) > -1
													? (g =
															document.createElement(
																p
															))
													: (g =
															document.createElement(
																this.tagName[0]
															)))
										: (g = document.createElement(
												this.tagName
											)),
									this.className &&
										g.classList.add(this.className),
									g
								)
							}),
							(h.prototype.attach = function () {
								this.parent != null &&
									(this.scroll = this.parent.scroll)
							}),
							(h.prototype.clone = function () {
								var p = this.domNode.cloneNode(!1)
								return o.create(p)
							}),
							(h.prototype.detach = function () {
								this.parent != null &&
									this.parent.removeChild(this),
									delete this.domNode[o.DATA_KEY]
							}),
							(h.prototype.deleteAt = function (p, g) {
								var y = this.isolate(p, g)
								y.remove()
							}),
							(h.prototype.formatAt = function (p, g, y, f) {
								var u = this.isolate(p, g)
								if (o.query(y, o.Scope.BLOT) != null && f)
									u.wrap(y, f)
								else if (
									o.query(y, o.Scope.ATTRIBUTE) != null
								) {
									var c = o.create(this.statics.scope)
									u.wrap(c), c.format(y, f)
								}
							}),
							(h.prototype.insertAt = function (p, g, y) {
								var f =
										y == null
											? o.create("text", g)
											: o.create(g, y),
									u = this.split(p)
								this.parent.insertBefore(f, u)
							}),
							(h.prototype.insertInto = function (p, g) {
								g === void 0 && (g = null),
									this.parent != null &&
										this.parent.children.remove(this)
								var y = null
								p.children.insertBefore(this, g),
									g != null && (y = g.domNode),
									(this.domNode.parentNode != p.domNode ||
										this.domNode.nextSibling != y) &&
										p.domNode.insertBefore(this.domNode, y),
									(this.parent = p),
									this.attach()
							}),
							(h.prototype.isolate = function (p, g) {
								var y = this.split(p)
								return y.split(g), y
							}),
							(h.prototype.length = function () {
								return 1
							}),
							(h.prototype.offset = function (p) {
								return (
									p === void 0 && (p = this.parent),
									this.parent == null || this == p
										? 0
										: this.parent.children.offset(this) +
											this.parent.offset(p)
								)
							}),
							(h.prototype.optimize = function (p) {
								this.domNode[o.DATA_KEY] != null &&
									delete this.domNode[o.DATA_KEY].mutations
							}),
							(h.prototype.remove = function () {
								this.domNode.parentNode != null &&
									this.domNode.parentNode.removeChild(
										this.domNode
									),
									this.detach()
							}),
							(h.prototype.replace = function (p) {
								p.parent != null &&
									(p.parent.insertBefore(this, p.next),
									p.remove())
							}),
							(h.prototype.replaceWith = function (p, g) {
								var y =
									typeof p == "string" ? o.create(p, g) : p
								return y.replace(this), y
							}),
							(h.prototype.split = function (p, g) {
								return p === 0 ? this : this.next
							}),
							(h.prototype.update = function (p, g) {}),
							(h.prototype.wrap = function (p, g) {
								var y =
									typeof p == "string" ? o.create(p, g) : p
								return (
									this.parent != null &&
										this.parent.insertBefore(y, this.next),
									y.appendChild(this),
									y
								)
							}),
							(h.blotName = "abstract"),
							h
						)
					})()
				r.default = l
			},
			function (n, r, i) {
				Object.defineProperty(r, "__esModule", { value: !0 })
				var o = i(12),
					l = i(32),
					h = i(33),
					p = i(1),
					g = (function () {
						function y(f) {
							;(this.attributes = {}),
								(this.domNode = f),
								this.build()
						}
						return (
							(y.prototype.attribute = function (f, u) {
								u
									? f.add(this.domNode, u) &&
										(f.value(this.domNode) != null
											? (this.attributes[f.attrName] = f)
											: delete this.attributes[
													f.attrName
												])
									: (f.remove(this.domNode),
										delete this.attributes[f.attrName])
							}),
							(y.prototype.build = function () {
								var f = this
								this.attributes = {}
								var u = o.default.keys(this.domNode),
									c = l.default.keys(this.domNode),
									_ = h.default.keys(this.domNode)
								u.concat(c)
									.concat(_)
									.forEach(function (m) {
										var w = p.query(m, p.Scope.ATTRIBUTE)
										w instanceof o.default &&
											(f.attributes[w.attrName] = w)
									})
							}),
							(y.prototype.copy = function (f) {
								var u = this
								Object.keys(this.attributes).forEach(
									function (c) {
										var _ = u.attributes[c].value(u.domNode)
										f.format(c, _)
									}
								)
							}),
							(y.prototype.move = function (f) {
								var u = this
								this.copy(f),
									Object.keys(this.attributes).forEach(
										function (c) {
											u.attributes[c].remove(u.domNode)
										}
									),
									(this.attributes = {})
							}),
							(y.prototype.values = function () {
								var f = this
								return Object.keys(this.attributes).reduce(
									function (u, c) {
										return (
											(u[c] = f.attributes[c].value(
												f.domNode
											)),
											u
										)
									},
									{}
								)
							}),
							y
						)
					})()
				r.default = g
			},
			function (n, r, i) {
				var o =
					(this && this.__extends) ||
					(function () {
						var g =
							Object.setPrototypeOf ||
							({ __proto__: [] } instanceof Array &&
								function (y, f) {
									y.__proto__ = f
								}) ||
							function (y, f) {
								for (var u in f)
									f.hasOwnProperty(u) && (y[u] = f[u])
							}
						return function (y, f) {
							g(y, f)
							function u() {
								this.constructor = y
							}
							y.prototype =
								f === null
									? Object.create(f)
									: ((u.prototype = f.prototype), new u())
						}
					})()
				Object.defineProperty(r, "__esModule", { value: !0 })
				var l = i(12)
				function h(g, y) {
					var f = g.getAttribute("class") || ""
					return f.split(/\s+/).filter(function (u) {
						return u.indexOf(y + "-") === 0
					})
				}
				var p = (function (g) {
					o(y, g)
					function y() {
						return (g !== null && g.apply(this, arguments)) || this
					}
					return (
						(y.keys = function (f) {
							return (f.getAttribute("class") || "")
								.split(/\s+/)
								.map(function (u) {
									return u.split("-").slice(0, -1).join("-")
								})
						}),
						(y.prototype.add = function (f, u) {
							return this.canAdd(f, u)
								? (this.remove(f),
									f.classList.add(this.keyName + "-" + u),
									!0)
								: !1
						}),
						(y.prototype.remove = function (f) {
							var u = h(f, this.keyName)
							u.forEach(function (c) {
								f.classList.remove(c)
							}),
								f.classList.length === 0 &&
									f.removeAttribute("class")
						}),
						(y.prototype.value = function (f) {
							var u = h(f, this.keyName)[0] || "",
								c = u.slice(this.keyName.length + 1)
							return this.canAdd(f, c) ? c : ""
						}),
						y
					)
				})(l.default)
				r.default = p
			},
			function (n, r, i) {
				var o =
					(this && this.__extends) ||
					(function () {
						var g =
							Object.setPrototypeOf ||
							({ __proto__: [] } instanceof Array &&
								function (y, f) {
									y.__proto__ = f
								}) ||
							function (y, f) {
								for (var u in f)
									f.hasOwnProperty(u) && (y[u] = f[u])
							}
						return function (y, f) {
							g(y, f)
							function u() {
								this.constructor = y
							}
							y.prototype =
								f === null
									? Object.create(f)
									: ((u.prototype = f.prototype), new u())
						}
					})()
				Object.defineProperty(r, "__esModule", { value: !0 })
				var l = i(12)
				function h(g) {
					var y = g.split("-"),
						f = y
							.slice(1)
							.map(function (u) {
								return u[0].toUpperCase() + u.slice(1)
							})
							.join("")
					return y[0] + f
				}
				var p = (function (g) {
					o(y, g)
					function y() {
						return (g !== null && g.apply(this, arguments)) || this
					}
					return (
						(y.keys = function (f) {
							return (f.getAttribute("style") || "")
								.split(";")
								.map(function (u) {
									var c = u.split(":")
									return c[0].trim()
								})
						}),
						(y.prototype.add = function (f, u) {
							return this.canAdd(f, u)
								? ((f.style[h(this.keyName)] = u), !0)
								: !1
						}),
						(y.prototype.remove = function (f) {
							;(f.style[h(this.keyName)] = ""),
								f.getAttribute("style") ||
									f.removeAttribute("style")
						}),
						(y.prototype.value = function (f) {
							var u = f.style[h(this.keyName)]
							return this.canAdd(f, u) ? u : ""
						}),
						y
					)
				})(l.default)
				r.default = p
			},
			function (n, r, i) {
				Object.defineProperty(r, "__esModule", { value: !0 })
				var o = (function () {
					function p(g, y) {
						for (var f = 0; f < y.length; f++) {
							var u = y[f]
							;(u.enumerable = u.enumerable || !1),
								(u.configurable = !0),
								"value" in u && (u.writable = !0),
								Object.defineProperty(g, u.key, u)
						}
					}
					return function (g, y, f) {
						return y && p(g.prototype, y), f && p(g, f), g
					}
				})()
				function l(p, g) {
					if (!(p instanceof g))
						throw new TypeError("Cannot call a class as a function")
				}
				var h = (function () {
					function p(g, y) {
						l(this, p),
							(this.quill = g),
							(this.options = y),
							(this.modules = {})
					}
					return (
						o(p, [
							{
								key: "init",
								value: function () {
									var y = this
									Object.keys(this.options.modules).forEach(
										function (f) {
											y.modules[f] == null &&
												y.addModule(f)
										}
									)
								}
							},
							{
								key: "addModule",
								value: function (y) {
									var f = this.quill.constructor.import(
										"modules/" + y
									)
									return (
										(this.modules[y] = new f(
											this.quill,
											this.options.modules[y] || {}
										)),
										this.modules[y]
									)
								}
							}
						]),
						p
					)
				})()
				;(h.DEFAULTS = { modules: {} }),
					(h.themes = { default: h }),
					(r.default = h)
			},
			function (n, r, i) {
				Object.defineProperty(r, "__esModule", { value: !0 })
				var o = (function () {
						function s(a, v) {
							for (var d = 0; d < v.length; d++) {
								var E = v[d]
								;(E.enumerable = E.enumerable || !1),
									(E.configurable = !0),
									"value" in E && (E.writable = !0),
									Object.defineProperty(a, E.key, E)
							}
						}
						return function (a, v, d) {
							return v && s(a.prototype, v), d && s(a, d), a
						}
					})(),
					l = function s(a, v, d) {
						a === null && (a = Function.prototype)
						var E = Object.getOwnPropertyDescriptor(a, v)
						if (E === void 0) {
							var N = Object.getPrototypeOf(a)
							return N === null ? void 0 : s(N, v, d)
						} else {
							if ("value" in E) return E.value
							var k = E.get
							return k === void 0 ? void 0 : k.call(d)
						}
					},
					h = i(0),
					p = f(h),
					g = i(7),
					y = f(g)
				function f(s) {
					return s && s.__esModule ? s : { default: s }
				}
				function u(s, a) {
					if (!(s instanceof a))
						throw new TypeError("Cannot call a class as a function")
				}
				function c(s, a) {
					if (!s)
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						)
					return a && (typeof a == "object" || typeof a == "function")
						? a
						: s
				}
				function _(s, a) {
					if (typeof a != "function" && a !== null)
						throw new TypeError(
							"Super expression must either be null or a function, not " +
								typeof a
						)
					;(s.prototype = Object.create(a && a.prototype, {
						constructor: {
							value: s,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					})),
						a &&
							(Object.setPrototypeOf
								? Object.setPrototypeOf(s, a)
								: (s.__proto__ = a))
				}
				var m = "\uFEFF",
					w = (function (s) {
						_(a, s)
						function a(v) {
							u(this, a)
							var d = c(
								this,
								(a.__proto__ || Object.getPrototypeOf(a)).call(
									this,
									v
								)
							)
							return (
								(d.contentNode =
									document.createElement("span")),
								d.contentNode.setAttribute(
									"contenteditable",
									!1
								),
								[].slice
									.call(d.domNode.childNodes)
									.forEach(function (E) {
										d.contentNode.appendChild(E)
									}),
								(d.leftGuard = document.createTextNode(m)),
								(d.rightGuard = document.createTextNode(m)),
								d.domNode.appendChild(d.leftGuard),
								d.domNode.appendChild(d.contentNode),
								d.domNode.appendChild(d.rightGuard),
								d
							)
						}
						return (
							o(a, [
								{
									key: "index",
									value: function (d, E) {
										return d === this.leftGuard
											? 0
											: d === this.rightGuard
												? 1
												: l(
														a.prototype.__proto__ ||
															Object.getPrototypeOf(
																a.prototype
															),
														"index",
														this
													).call(this, d, E)
									}
								},
								{
									key: "restore",
									value: function (d) {
										var E = void 0,
											N = void 0,
											k = d.data.split(m).join("")
										if (d === this.leftGuard)
											if (
												this.prev instanceof y.default
											) {
												var O = this.prev.length()
												this.prev.insertAt(O, k),
													(E = {
														startNode:
															this.prev.domNode,
														startOffset:
															O + k.length
													})
											} else
												(N =
													document.createTextNode(k)),
													this.parent.insertBefore(
														p.default.create(N),
														this
													),
													(E = {
														startNode: N,
														startOffset: k.length
													})
										else
											d === this.rightGuard &&
												(this.next instanceof y.default
													? (this.next.insertAt(0, k),
														(E = {
															startNode:
																this.next
																	.domNode,
															startOffset:
																k.length
														}))
													: ((N =
															document.createTextNode(
																k
															)),
														this.parent.insertBefore(
															p.default.create(N),
															this.next
														),
														(E = {
															startNode: N,
															startOffset:
																k.length
														})))
										return (d.data = m), E
									}
								},
								{
									key: "update",
									value: function (d, E) {
										var N = this
										d.forEach(function (k) {
											if (
												k.type === "characterData" &&
												(k.target === N.leftGuard ||
													k.target === N.rightGuard)
											) {
												var O = N.restore(k.target)
												O && (E.range = O)
											}
										})
									}
								}
							]),
							a
						)
					})(p.default.Embed)
				r.default = w
			},
			function (n, r, i) {
				Object.defineProperty(r, "__esModule", { value: !0 }),
					(r.AlignStyle = r.AlignClass = r.AlignAttribute = void 0)
				var o = i(0),
					l = h(o)
				function h(u) {
					return u && u.__esModule ? u : { default: u }
				}
				var p = {
						scope: l.default.Scope.BLOCK,
						whitelist: ["right", "center", "justify"]
					},
					g = new l.default.Attributor.Attribute("align", "align", p),
					y = new l.default.Attributor.Class("align", "ql-align", p),
					f = new l.default.Attributor.Style("align", "text-align", p)
				;(r.AlignAttribute = g), (r.AlignClass = y), (r.AlignStyle = f)
			},
			function (n, r, i) {
				Object.defineProperty(r, "__esModule", { value: !0 }),
					(r.BackgroundStyle = r.BackgroundClass = void 0)
				var o = i(0),
					l = p(o),
					h = i(26)
				function p(f) {
					return f && f.__esModule ? f : { default: f }
				}
				var g = new l.default.Attributor.Class("background", "ql-bg", {
						scope: l.default.Scope.INLINE
					}),
					y = new h.ColorAttributor(
						"background",
						"background-color",
						{ scope: l.default.Scope.INLINE }
					)
				;(r.BackgroundClass = g), (r.BackgroundStyle = y)
			},
			function (n, r, i) {
				Object.defineProperty(r, "__esModule", { value: !0 }),
					(r.DirectionStyle =
						r.DirectionClass =
						r.DirectionAttribute =
							void 0)
				var o = i(0),
					l = h(o)
				function h(u) {
					return u && u.__esModule ? u : { default: u }
				}
				var p = { scope: l.default.Scope.BLOCK, whitelist: ["rtl"] },
					g = new l.default.Attributor.Attribute(
						"direction",
						"dir",
						p
					),
					y = new l.default.Attributor.Class(
						"direction",
						"ql-direction",
						p
					),
					f = new l.default.Attributor.Style(
						"direction",
						"direction",
						p
					)
				;(r.DirectionAttribute = g),
					(r.DirectionClass = y),
					(r.DirectionStyle = f)
			},
			function (n, r, i) {
				Object.defineProperty(r, "__esModule", { value: !0 }),
					(r.FontClass = r.FontStyle = void 0)
				var o = (function () {
						function s(a, v) {
							for (var d = 0; d < v.length; d++) {
								var E = v[d]
								;(E.enumerable = E.enumerable || !1),
									(E.configurable = !0),
									"value" in E && (E.writable = !0),
									Object.defineProperty(a, E.key, E)
							}
						}
						return function (a, v, d) {
							return v && s(a.prototype, v), d && s(a, d), a
						}
					})(),
					l = function s(a, v, d) {
						a === null && (a = Function.prototype)
						var E = Object.getOwnPropertyDescriptor(a, v)
						if (E === void 0) {
							var N = Object.getPrototypeOf(a)
							return N === null ? void 0 : s(N, v, d)
						} else {
							if ("value" in E) return E.value
							var k = E.get
							return k === void 0 ? void 0 : k.call(d)
						}
					},
					h = i(0),
					p = g(h)
				function g(s) {
					return s && s.__esModule ? s : { default: s }
				}
				function y(s, a) {
					if (!(s instanceof a))
						throw new TypeError("Cannot call a class as a function")
				}
				function f(s, a) {
					if (!s)
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						)
					return a && (typeof a == "object" || typeof a == "function")
						? a
						: s
				}
				function u(s, a) {
					if (typeof a != "function" && a !== null)
						throw new TypeError(
							"Super expression must either be null or a function, not " +
								typeof a
						)
					;(s.prototype = Object.create(a && a.prototype, {
						constructor: {
							value: s,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					})),
						a &&
							(Object.setPrototypeOf
								? Object.setPrototypeOf(s, a)
								: (s.__proto__ = a))
				}
				var c = {
						scope: p.default.Scope.INLINE,
						whitelist: ["serif", "monospace"]
					},
					_ = new p.default.Attributor.Class("font", "ql-font", c),
					m = (function (s) {
						u(a, s)
						function a() {
							return (
								y(this, a),
								f(
									this,
									(
										a.__proto__ || Object.getPrototypeOf(a)
									).apply(this, arguments)
								)
							)
						}
						return (
							o(a, [
								{
									key: "value",
									value: function (d) {
										return l(
											a.prototype.__proto__ ||
												Object.getPrototypeOf(
													a.prototype
												),
											"value",
											this
										)
											.call(this, d)
											.replace(/["']/g, "")
									}
								}
							]),
							a
						)
					})(p.default.Attributor.Style),
					w = new m("font", "font-family", c)
				;(r.FontStyle = w), (r.FontClass = _)
			},
			function (n, r, i) {
				Object.defineProperty(r, "__esModule", { value: !0 }),
					(r.SizeStyle = r.SizeClass = void 0)
				var o = i(0),
					l = h(o)
				function h(y) {
					return y && y.__esModule ? y : { default: y }
				}
				var p = new l.default.Attributor.Class("size", "ql-size", {
						scope: l.default.Scope.INLINE,
						whitelist: ["small", "large", "huge"]
					}),
					g = new l.default.Attributor.Style("size", "font-size", {
						scope: l.default.Scope.INLINE,
						whitelist: ["10px", "18px", "32px"]
					})
				;(r.SizeClass = p), (r.SizeStyle = g)
			},
			function (n, r, i) {
				n.exports = {
					align: {
						"": i(76),
						center: i(77),
						right: i(78),
						justify: i(79)
					},
					background: i(80),
					blockquote: i(81),
					bold: i(82),
					clean: i(83),
					code: i(58),
					"code-block": i(58),
					color: i(84),
					direction: { "": i(85), rtl: i(86) },
					float: {
						center: i(87),
						full: i(88),
						left: i(89),
						right: i(90)
					},
					formula: i(91),
					header: { 1: i(92), 2: i(93) },
					italic: i(94),
					image: i(95),
					indent: { "+1": i(96), "-1": i(97) },
					link: i(98),
					list: { ordered: i(99), bullet: i(100), check: i(101) },
					script: { sub: i(102), super: i(103) },
					strike: i(104),
					underline: i(105),
					video: i(106)
				}
			},
			function (n, r, i) {
				Object.defineProperty(r, "__esModule", { value: !0 }),
					(r.getLastChangeIndex = r.default = void 0)
				var o = (function () {
						function v(d, E) {
							for (var N = 0; N < E.length; N++) {
								var k = E[N]
								;(k.enumerable = k.enumerable || !1),
									(k.configurable = !0),
									"value" in k && (k.writable = !0),
									Object.defineProperty(d, k.key, k)
							}
						}
						return function (d, E, N) {
							return E && v(d.prototype, E), N && v(d, N), d
						}
					})(),
					l = i(0),
					h = u(l),
					p = i(5),
					g = u(p),
					y = i(9),
					f = u(y)
				function u(v) {
					return v && v.__esModule ? v : { default: v }
				}
				function c(v, d) {
					if (!(v instanceof d))
						throw new TypeError("Cannot call a class as a function")
				}
				function _(v, d) {
					if (!v)
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						)
					return d && (typeof d == "object" || typeof d == "function")
						? d
						: v
				}
				function m(v, d) {
					if (typeof d != "function" && d !== null)
						throw new TypeError(
							"Super expression must either be null or a function, not " +
								typeof d
						)
					;(v.prototype = Object.create(d && d.prototype, {
						constructor: {
							value: v,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					})),
						d &&
							(Object.setPrototypeOf
								? Object.setPrototypeOf(v, d)
								: (v.__proto__ = d))
				}
				var w = (function (v) {
					m(d, v)
					function d(E, N) {
						c(this, d)
						var k = _(
							this,
							(d.__proto__ || Object.getPrototypeOf(d)).call(
								this,
								E,
								N
							)
						)
						return (
							(k.lastRecorded = 0),
							(k.ignoreChange = !1),
							k.clear(),
							k.quill.on(
								g.default.events.EDITOR_CHANGE,
								function (O, j, x, b) {
									O !== g.default.events.TEXT_CHANGE ||
										k.ignoreChange ||
										(!k.options.userOnly ||
										b === g.default.sources.USER
											? k.record(j, x)
											: k.transform(j))
								}
							),
							k.quill.keyboard.addBinding(
								{ key: "Z", shortKey: !0 },
								k.undo.bind(k)
							),
							k.quill.keyboard.addBinding(
								{ key: "Z", shortKey: !0, shiftKey: !0 },
								k.redo.bind(k)
							),
							/Win/i.test(navigator.platform) &&
								k.quill.keyboard.addBinding(
									{ key: "Y", shortKey: !0 },
									k.redo.bind(k)
								),
							k
						)
					}
					return (
						o(d, [
							{
								key: "change",
								value: function (N, k) {
									if (this.stack[N].length !== 0) {
										var O = this.stack[N].pop()
										this.stack[k].push(O),
											(this.lastRecorded = 0),
											(this.ignoreChange = !0),
											this.quill.updateContents(
												O[N],
												g.default.sources.USER
											),
											(this.ignoreChange = !1)
										var j = a(O[N])
										this.quill.setSelection(j)
									}
								}
							},
							{
								key: "clear",
								value: function () {
									this.stack = { undo: [], redo: [] }
								}
							},
							{
								key: "cutoff",
								value: function () {
									this.lastRecorded = 0
								}
							},
							{
								key: "record",
								value: function (N, k) {
									if (N.ops.length !== 0) {
										this.stack.redo = []
										var O = this.quill
												.getContents()
												.diff(k),
											j = Date.now()
										if (
											this.lastRecorded +
												this.options.delay >
												j &&
											this.stack.undo.length > 0
										) {
											var x = this.stack.undo.pop()
											;(O = O.compose(x.undo)),
												(N = x.redo.compose(N))
										} else this.lastRecorded = j
										this.stack.undo.push({
											redo: N,
											undo: O
										}),
											this.stack.undo.length >
												this.options.maxStack &&
												this.stack.undo.shift()
									}
								}
							},
							{
								key: "redo",
								value: function () {
									this.change("redo", "undo")
								}
							},
							{
								key: "transform",
								value: function (N) {
									this.stack.undo.forEach(function (k) {
										;(k.undo = N.transform(k.undo, !0)),
											(k.redo = N.transform(k.redo, !0))
									}),
										this.stack.redo.forEach(function (k) {
											;(k.undo = N.transform(k.undo, !0)),
												(k.redo = N.transform(
													k.redo,
													!0
												))
										})
								}
							},
							{
								key: "undo",
								value: function () {
									this.change("undo", "redo")
								}
							}
						]),
						d
					)
				})(f.default)
				w.DEFAULTS = { delay: 1e3, maxStack: 100, userOnly: !1 }
				function s(v) {
					var d = v.ops[v.ops.length - 1]
					return d == null
						? !1
						: d.insert != null
							? typeof d.insert == "string" &&
								d.insert.endsWith(`
`)
							: d.attributes != null
								? Object.keys(d.attributes).some(function (E) {
										return (
											h.default.query(
												E,
												h.default.Scope.BLOCK
											) != null
										)
									})
								: !1
				}
				function a(v) {
					var d = v.reduce(function (N, k) {
							return (N += k.delete || 0), N
						}, 0),
						E = v.length() - d
					return s(v) && (E -= 1), E
				}
				;(r.default = w), (r.getLastChangeIndex = a)
			},
			function (n, r, i) {
				Object.defineProperty(r, "__esModule", { value: !0 }),
					(r.default = r.BaseTooltip = void 0)
				var o = (function () {
						function D(F, K) {
							for (var H = 0; H < K.length; H++) {
								var C = K[H]
								;(C.enumerable = C.enumerable || !1),
									(C.configurable = !0),
									"value" in C && (C.writable = !0),
									Object.defineProperty(F, C.key, C)
							}
						}
						return function (F, K, H) {
							return K && D(F.prototype, K), H && D(F, H), F
						}
					})(),
					l = function D(F, K, H) {
						F === null && (F = Function.prototype)
						var C = Object.getOwnPropertyDescriptor(F, K)
						if (C === void 0) {
							var $ = Object.getPrototypeOf(F)
							return $ === null ? void 0 : D($, K, H)
						} else {
							if ("value" in C) return C.value
							var Q = C.get
							return Q === void 0 ? void 0 : Q.call(H)
						}
					},
					h = i(3),
					p = j(h),
					g = i(2),
					y = j(g),
					f = i(8),
					u = j(f),
					c = i(23),
					_ = j(c),
					m = i(34),
					w = j(m),
					s = i(59),
					a = j(s),
					v = i(60),
					d = j(v),
					E = i(28),
					N = j(E),
					k = i(61),
					O = j(k)
				function j(D) {
					return D && D.__esModule ? D : { default: D }
				}
				function x(D, F) {
					if (!(D instanceof F))
						throw new TypeError("Cannot call a class as a function")
				}
				function b(D, F) {
					if (!D)
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						)
					return F && (typeof F == "object" || typeof F == "function")
						? F
						: D
				}
				function S(D, F) {
					if (typeof F != "function" && F !== null)
						throw new TypeError(
							"Super expression must either be null or a function, not " +
								typeof F
						)
					;(D.prototype = Object.create(F && F.prototype, {
						constructor: {
							value: D,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					})),
						F &&
							(Object.setPrototypeOf
								? Object.setPrototypeOf(D, F)
								: (D.__proto__ = F))
				}
				var A = [!1, "center", "right", "justify"],
					L = [
						"#000000",
						"#e60000",
						"#ff9900",
						"#ffff00",
						"#008a00",
						"#0066cc",
						"#9933ff",
						"#ffffff",
						"#facccc",
						"#ffebcc",
						"#ffffcc",
						"#cce8cc",
						"#cce0f5",
						"#ebd6ff",
						"#bbbbbb",
						"#f06666",
						"#ffc266",
						"#ffff66",
						"#66b966",
						"#66a3e0",
						"#c285ff",
						"#888888",
						"#a10000",
						"#b26b00",
						"#b2b200",
						"#006100",
						"#0047b2",
						"#6b24b2",
						"#444444",
						"#5c0000",
						"#663d00",
						"#666600",
						"#003700",
						"#002966",
						"#3d1466"
					],
					M = [!1, "serif", "monospace"],
					U = ["1", "2", "3", !1],
					V = ["small", !1, "large", "huge"],
					G = (function (D) {
						S(F, D)
						function F(K, H) {
							x(this, F)
							var C = b(
									this,
									(
										F.__proto__ || Object.getPrototypeOf(F)
									).call(this, K, H)
								),
								$ = function Q(Y) {
									if (!document.body.contains(K.root))
										return document.body.removeEventListener(
											"click",
											Q
										)
									C.tooltip != null &&
										!C.tooltip.root.contains(Y.target) &&
										document.activeElement !==
											C.tooltip.textbox &&
										!C.quill.hasFocus() &&
										C.tooltip.hide(),
										C.pickers != null &&
											C.pickers.forEach(function (J) {
												J.container.contains(
													Y.target
												) || J.close()
											})
								}
							return (
								K.emitter.listenDOM("click", document.body, $),
								C
							)
						}
						return (
							o(F, [
								{
									key: "addModule",
									value: function (H) {
										var C = l(
											F.prototype.__proto__ ||
												Object.getPrototypeOf(
													F.prototype
												),
											"addModule",
											this
										).call(this, H)
										return (
											H === "toolbar" &&
												this.extendToolbar(C),
											C
										)
									}
								},
								{
									key: "buildButtons",
									value: function (H, C) {
										H.forEach(function ($) {
											var Q =
												$.getAttribute("class") || ""
											Q.split(/\s+/).forEach(
												function (Y) {
													if (
														Y.startsWith("ql-") &&
														((Y = Y.slice(3)),
														C[Y] != null)
													)
														if (Y === "direction")
															$.innerHTML =
																C[Y][""] +
																C[Y].rtl
														else if (
															typeof C[Y] ==
															"string"
														)
															$.innerHTML = C[Y]
														else {
															var J =
																$.value || ""
															J != null &&
																C[Y][J] &&
																($.innerHTML =
																	C[Y][J])
														}
												}
											)
										})
									}
								},
								{
									key: "buildPickers",
									value: function (H, C) {
										var $ = this
										this.pickers = H.map(function (Y) {
											if (
												Y.classList.contains("ql-align")
											)
												return (
													Y.querySelector("option") ==
														null && T(Y, A),
													new d.default(Y, C.align)
												)
											if (
												Y.classList.contains(
													"ql-background"
												) ||
												Y.classList.contains("ql-color")
											) {
												var J = Y.classList.contains(
													"ql-background"
												)
													? "background"
													: "color"
												return (
													Y.querySelector("option") ==
														null &&
														T(
															Y,
															L,
															J === "background"
																? "#ffffff"
																: "#000000"
														),
													new a.default(Y, C[J])
												)
											} else
												return (
													Y.querySelector("option") ==
														null &&
														(Y.classList.contains(
															"ql-font"
														)
															? T(Y, M)
															: Y.classList.contains(
																		"ql-header"
																  )
																? T(Y, U)
																: Y.classList.contains(
																		"ql-size"
																	) &&
																	T(Y, V)),
													new N.default(Y)
												)
										})
										var Q = function () {
											$.pickers.forEach(function (J) {
												J.update()
											})
										}
										this.quill.on(
											u.default.events.EDITOR_CHANGE,
											Q
										)
									}
								}
							]),
							F
						)
					})(w.default)
				G.DEFAULTS = (0, p.default)(!0, {}, w.default.DEFAULTS, {
					modules: {
						toolbar: {
							handlers: {
								formula: function () {
									this.quill.theme.tooltip.edit("formula")
								},
								image: function () {
									var F = this,
										K = this.container.querySelector(
											"input.ql-image[type=file]"
										)
									K == null &&
										((K = document.createElement("input")),
										K.setAttribute("type", "file"),
										K.setAttribute(
											"accept",
											"image/png, image/gif, image/jpeg, image/bmp, image/x-icon"
										),
										K.classList.add("ql-image"),
										K.addEventListener(
											"change",
											function () {
												if (
													K.files != null &&
													K.files[0] != null
												) {
													var H = new FileReader()
													;(H.onload = function (C) {
														var $ =
															F.quill.getSelection(
																!0
															)
														F.quill.updateContents(
															new y.default()
																.retain($.index)
																.delete(
																	$.length
																)
																.insert({
																	image: C
																		.target
																		.result
																}),
															u.default.sources
																.USER
														),
															F.quill.setSelection(
																$.index + 1,
																u.default
																	.sources
																	.SILENT
															),
															(K.value = "")
													}),
														H.readAsDataURL(
															K.files[0]
														)
												}
											}
										),
										this.container.appendChild(K)),
										K.click()
								},
								video: function () {
									this.quill.theme.tooltip.edit("video")
								}
							}
						}
					}
				})
				var q = (function (D) {
					S(F, D)
					function F(K, H) {
						x(this, F)
						var C = b(
							this,
							(F.__proto__ || Object.getPrototypeOf(F)).call(
								this,
								K,
								H
							)
						)
						return (
							(C.textbox =
								C.root.querySelector('input[type="text"]')),
							C.listen(),
							C
						)
					}
					return (
						o(F, [
							{
								key: "listen",
								value: function () {
									var H = this
									this.textbox.addEventListener(
										"keydown",
										function (C) {
											_.default.match(C, "enter")
												? (H.save(), C.preventDefault())
												: _.default.match(
														C,
														"escape"
													) &&
													(H.cancel(),
													C.preventDefault())
										}
									)
								}
							},
							{
								key: "cancel",
								value: function () {
									this.hide()
								}
							},
							{
								key: "edit",
								value: function () {
									var H =
											arguments.length > 0 &&
											arguments[0] !== void 0
												? arguments[0]
												: "link",
										C =
											arguments.length > 1 &&
											arguments[1] !== void 0
												? arguments[1]
												: null
									this.root.classList.remove("ql-hidden"),
										this.root.classList.add("ql-editing"),
										C != null
											? (this.textbox.value = C)
											: H !==
													this.root.getAttribute(
														"data-mode"
													) &&
												(this.textbox.value = ""),
										this.position(
											this.quill.getBounds(
												this.quill.selection.savedRange
											)
										),
										this.textbox.select(),
										this.textbox.setAttribute(
											"placeholder",
											this.textbox.getAttribute(
												"data-" + H
											) || ""
										),
										this.root.setAttribute("data-mode", H)
								}
							},
							{
								key: "restoreFocus",
								value: function () {
									var H =
										this.quill.scrollingContainer.scrollTop
									this.quill.focus(),
										(this.quill.scrollingContainer.scrollTop =
											H)
								}
							},
							{
								key: "save",
								value: function () {
									var H = this.textbox.value
									switch (
										this.root.getAttribute("data-mode")
									) {
										case "link": {
											var C = this.quill.root.scrollTop
											this.linkRange
												? (this.quill.formatText(
														this.linkRange,
														"link",
														H,
														u.default.sources.USER
													),
													delete this.linkRange)
												: (this.restoreFocus(),
													this.quill.format(
														"link",
														H,
														u.default.sources.USER
													)),
												(this.quill.root.scrollTop = C)
											break
										}
										case "video":
											H = R(H)
										case "formula": {
											if (!H) break
											var $ = this.quill.getSelection(!0)
											if ($ != null) {
												var Q = $.index + $.length
												this.quill.insertEmbed(
													Q,
													this.root.getAttribute(
														"data-mode"
													),
													H,
													u.default.sources.USER
												),
													this.root.getAttribute(
														"data-mode"
													) === "formula" &&
														this.quill.insertText(
															Q + 1,
															" ",
															u.default.sources
																.USER
														),
													this.quill.setSelection(
														Q + 2,
														u.default.sources.USER
													)
											}
											break
										}
									}
									;(this.textbox.value = ""), this.hide()
								}
							}
						]),
						F
					)
				})(O.default)
				function R(D) {
					var F =
						D.match(
							/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/
						) ||
						D.match(
							/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/
						)
					return F
						? (F[1] || "https") +
								"://www.youtube.com/embed/" +
								F[2] +
								"?showinfo=0"
						: (F = D.match(
									/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/
							  ))
							? (F[1] || "https") +
								"://player.vimeo.com/video/" +
								F[2] +
								"/"
							: D
				}
				function T(D, F) {
					var K =
						arguments.length > 2 && arguments[2] !== void 0
							? arguments[2]
							: !1
					F.forEach(function (H) {
						var C = document.createElement("option")
						H === K
							? C.setAttribute("selected", "selected")
							: C.setAttribute("value", H),
							D.appendChild(C)
					})
				}
				;(r.BaseTooltip = q), (r.default = G)
			},
			function (n, r, i) {
				Object.defineProperty(r, "__esModule", { value: !0 })
				var o = (function () {
					function l() {
						;(this.head = this.tail = null), (this.length = 0)
					}
					return (
						(l.prototype.append = function () {
							for (var h = [], p = 0; p < arguments.length; p++)
								h[p] = arguments[p]
							this.insertBefore(h[0], null),
								h.length > 1 &&
									this.append.apply(this, h.slice(1))
						}),
						(l.prototype.contains = function (h) {
							for (var p, g = this.iterator(); (p = g()); )
								if (p === h) return !0
							return !1
						}),
						(l.prototype.insertBefore = function (h, p) {
							h &&
								((h.next = p),
								p != null
									? ((h.prev = p.prev),
										p.prev != null && (p.prev.next = h),
										(p.prev = h),
										p === this.head && (this.head = h))
									: this.tail != null
										? ((this.tail.next = h),
											(h.prev = this.tail),
											(this.tail = h))
										: ((h.prev = null),
											(this.head = this.tail = h)),
								(this.length += 1))
						}),
						(l.prototype.offset = function (h) {
							for (var p = 0, g = this.head; g != null; ) {
								if (g === h) return p
								;(p += g.length()), (g = g.next)
							}
							return -1
						}),
						(l.prototype.remove = function (h) {
							this.contains(h) &&
								(h.prev != null && (h.prev.next = h.next),
								h.next != null && (h.next.prev = h.prev),
								h === this.head && (this.head = h.next),
								h === this.tail && (this.tail = h.prev),
								(this.length -= 1))
						}),
						(l.prototype.iterator = function (h) {
							return (
								h === void 0 && (h = this.head),
								function () {
									var p = h
									return h != null && (h = h.next), p
								}
							)
						}),
						(l.prototype.find = function (h, p) {
							p === void 0 && (p = !1)
							for (var g, y = this.iterator(); (g = y()); ) {
								var f = g.length()
								if (
									h < f ||
									(p &&
										h === f &&
										(g.next == null ||
											g.next.length() !== 0))
								)
									return [g, h]
								h -= f
							}
							return [null, 0]
						}),
						(l.prototype.forEach = function (h) {
							for (var p, g = this.iterator(); (p = g()); ) h(p)
						}),
						(l.prototype.forEachAt = function (h, p, g) {
							if (!(p <= 0))
								for (
									var y = this.find(h),
										f = y[0],
										u = y[1],
										c,
										_ = h - u,
										m = this.iterator(f);
									(c = m()) && _ < h + p;

								) {
									var w = c.length()
									h > _
										? g(c, h - _, Math.min(p, _ + w - h))
										: g(c, 0, Math.min(w, h + p - _)),
										(_ += w)
								}
						}),
						(l.prototype.map = function (h) {
							return this.reduce(function (p, g) {
								return p.push(h(g)), p
							}, [])
						}),
						(l.prototype.reduce = function (h, p) {
							for (var g, y = this.iterator(); (g = y()); )
								p = h(p, g)
							return p
						}),
						l
					)
				})()
				r.default = o
			},
			function (n, r, i) {
				var o =
					(this && this.__extends) ||
					(function () {
						var f =
							Object.setPrototypeOf ||
							({ __proto__: [] } instanceof Array &&
								function (u, c) {
									u.__proto__ = c
								}) ||
							function (u, c) {
								for (var _ in c)
									c.hasOwnProperty(_) && (u[_] = c[_])
							}
						return function (u, c) {
							f(u, c)
							function _() {
								this.constructor = u
							}
							u.prototype =
								c === null
									? Object.create(c)
									: ((_.prototype = c.prototype), new _())
						}
					})()
				Object.defineProperty(r, "__esModule", { value: !0 })
				var l = i(17),
					h = i(1),
					p = {
						attributes: !0,
						characterData: !0,
						characterDataOldValue: !0,
						childList: !0,
						subtree: !0
					},
					g = 100,
					y = (function (f) {
						o(u, f)
						function u(c) {
							var _ = f.call(this, c) || this
							return (
								(_.scroll = _),
								(_.observer = new MutationObserver(function (
									m
								) {
									_.update(m)
								})),
								_.observer.observe(_.domNode, p),
								_.attach(),
								_
							)
						}
						return (
							(u.prototype.detach = function () {
								f.prototype.detach.call(this),
									this.observer.disconnect()
							}),
							(u.prototype.deleteAt = function (c, _) {
								this.update(),
									c === 0 && _ === this.length()
										? this.children.forEach(function (m) {
												m.remove()
											})
										: f.prototype.deleteAt.call(this, c, _)
							}),
							(u.prototype.formatAt = function (c, _, m, w) {
								this.update(),
									f.prototype.formatAt.call(this, c, _, m, w)
							}),
							(u.prototype.insertAt = function (c, _, m) {
								this.update(),
									f.prototype.insertAt.call(this, c, _, m)
							}),
							(u.prototype.optimize = function (c, _) {
								var m = this
								c === void 0 && (c = []),
									_ === void 0 && (_ = {}),
									f.prototype.optimize.call(this, _)
								for (
									var w = [].slice.call(
										this.observer.takeRecords()
									);
									w.length > 0;

								)
									c.push(w.pop())
								for (
									var s = function (E, N) {
											N === void 0 && (N = !0),
												!(E == null || E === m) &&
													E.domNode.parentNode !=
														null &&
													(E.domNode[h.DATA_KEY]
														.mutations == null &&
														(E.domNode[
															h.DATA_KEY
														].mutations = []),
													N && s(E.parent))
										},
										a = function (E) {
											E.domNode[h.DATA_KEY] == null ||
												E.domNode[h.DATA_KEY]
													.mutations == null ||
												(E instanceof l.default &&
													E.children.forEach(a),
												E.optimize(_))
										},
										v = c,
										d = 0;
									v.length > 0;
									d += 1
								) {
									if (d >= g)
										throw new Error(
											"[Parchment] Maximum optimize iterations reached"
										)
									for (
										v.forEach(function (E) {
											var N = h.find(E.target, !0)
											N != null &&
												(N.domNode === E.target &&
													(E.type === "childList"
														? (s(
																h.find(
																	E.previousSibling,
																	!1
																)
															),
															[].forEach.call(
																E.addedNodes,
																function (k) {
																	var O =
																		h.find(
																			k,
																			!1
																		)
																	s(O, !1),
																		O instanceof
																			l.default &&
																			O.children.forEach(
																				function (
																					j
																				) {
																					s(
																						j,
																						!1
																					)
																				}
																			)
																}
															))
														: E.type ===
																"attributes" &&
															s(N.prev)),
												s(N))
										}),
											this.children.forEach(a),
											v = [].slice.call(
												this.observer.takeRecords()
											),
											w = v.slice();
										w.length > 0;

									)
										c.push(w.pop())
								}
							}),
							(u.prototype.update = function (c, _) {
								var m = this
								_ === void 0 && (_ = {}),
									(c = c || this.observer.takeRecords()),
									c
										.map(function (w) {
											var s = h.find(w.target, !0)
											return s == null
												? null
												: s.domNode[h.DATA_KEY]
															.mutations == null
													? ((s.domNode[
															h.DATA_KEY
														].mutations = [w]),
														s)
													: (s.domNode[
															h.DATA_KEY
														].mutations.push(w),
														null)
										})
										.forEach(function (w) {
											w == null ||
												w === m ||
												w.domNode[h.DATA_KEY] == null ||
												w.update(
													w.domNode[h.DATA_KEY]
														.mutations || [],
													_
												)
										}),
									this.domNode[h.DATA_KEY].mutations !=
										null &&
										f.prototype.update.call(
											this,
											this.domNode[h.DATA_KEY].mutations,
											_
										),
									this.optimize(c, _)
							}),
							(u.blotName = "scroll"),
							(u.defaultChild = "block"),
							(u.scope = h.Scope.BLOCK_BLOT),
							(u.tagName = "DIV"),
							u
						)
					})(l.default)
				r.default = y
			},
			function (n, r, i) {
				var o =
					(this && this.__extends) ||
					(function () {
						var y =
							Object.setPrototypeOf ||
							({ __proto__: [] } instanceof Array &&
								function (f, u) {
									f.__proto__ = u
								}) ||
							function (f, u) {
								for (var c in u)
									u.hasOwnProperty(c) && (f[c] = u[c])
							}
						return function (f, u) {
							y(f, u)
							function c() {
								this.constructor = f
							}
							f.prototype =
								u === null
									? Object.create(u)
									: ((c.prototype = u.prototype), new c())
						}
					})()
				Object.defineProperty(r, "__esModule", { value: !0 })
				var l = i(18),
					h = i(1)
				function p(y, f) {
					if (Object.keys(y).length !== Object.keys(f).length)
						return !1
					for (var u in y) if (y[u] !== f[u]) return !1
					return !0
				}
				var g = (function (y) {
					o(f, y)
					function f() {
						return (y !== null && y.apply(this, arguments)) || this
					}
					return (
						(f.formats = function (u) {
							if (u.tagName !== f.tagName)
								return y.formats.call(this, u)
						}),
						(f.prototype.format = function (u, c) {
							var _ = this
							u === this.statics.blotName && !c
								? (this.children.forEach(function (m) {
										m instanceof l.default ||
											(m = m.wrap(f.blotName, !0)),
											_.attributes.copy(m)
									}),
									this.unwrap())
								: y.prototype.format.call(this, u, c)
						}),
						(f.prototype.formatAt = function (u, c, _, m) {
							if (
								this.formats()[_] != null ||
								h.query(_, h.Scope.ATTRIBUTE)
							) {
								var w = this.isolate(u, c)
								w.format(_, m)
							} else y.prototype.formatAt.call(this, u, c, _, m)
						}),
						(f.prototype.optimize = function (u) {
							y.prototype.optimize.call(this, u)
							var c = this.formats()
							if (Object.keys(c).length === 0)
								return this.unwrap()
							var _ = this.next
							_ instanceof f &&
								_.prev === this &&
								p(c, _.formats()) &&
								(_.moveChildren(this), _.remove())
						}),
						(f.blotName = "inline"),
						(f.scope = h.Scope.INLINE_BLOT),
						(f.tagName = "SPAN"),
						f
					)
				})(l.default)
				r.default = g
			},
			function (n, r, i) {
				var o =
					(this && this.__extends) ||
					(function () {
						var g =
							Object.setPrototypeOf ||
							({ __proto__: [] } instanceof Array &&
								function (y, f) {
									y.__proto__ = f
								}) ||
							function (y, f) {
								for (var u in f)
									f.hasOwnProperty(u) && (y[u] = f[u])
							}
						return function (y, f) {
							g(y, f)
							function u() {
								this.constructor = y
							}
							y.prototype =
								f === null
									? Object.create(f)
									: ((u.prototype = f.prototype), new u())
						}
					})()
				Object.defineProperty(r, "__esModule", { value: !0 })
				var l = i(18),
					h = i(1),
					p = (function (g) {
						o(y, g)
						function y() {
							return (
								(g !== null && g.apply(this, arguments)) || this
							)
						}
						return (
							(y.formats = function (f) {
								var u = h.query(y.blotName).tagName
								if (f.tagName !== u)
									return g.formats.call(this, f)
							}),
							(y.prototype.format = function (f, u) {
								h.query(f, h.Scope.BLOCK) != null &&
									(f === this.statics.blotName && !u
										? this.replaceWith(y.blotName)
										: g.prototype.format.call(this, f, u))
							}),
							(y.prototype.formatAt = function (f, u, c, _) {
								h.query(c, h.Scope.BLOCK) != null
									? this.format(c, _)
									: g.prototype.formatAt.call(
											this,
											f,
											u,
											c,
											_
										)
							}),
							(y.prototype.insertAt = function (f, u, c) {
								if (
									c == null ||
									h.query(u, h.Scope.INLINE) != null
								)
									g.prototype.insertAt.call(this, f, u, c)
								else {
									var _ = this.split(f),
										m = h.create(u, c)
									_.parent.insertBefore(m, _)
								}
							}),
							(y.prototype.update = function (f, u) {
								navigator.userAgent.match(/Trident/)
									? this.build()
									: g.prototype.update.call(this, f, u)
							}),
							(y.blotName = "block"),
							(y.scope = h.Scope.BLOCK_BLOT),
							(y.tagName = "P"),
							y
						)
					})(l.default)
				r.default = p
			},
			function (n, r, i) {
				var o =
					(this && this.__extends) ||
					(function () {
						var p =
							Object.setPrototypeOf ||
							({ __proto__: [] } instanceof Array &&
								function (g, y) {
									g.__proto__ = y
								}) ||
							function (g, y) {
								for (var f in y)
									y.hasOwnProperty(f) && (g[f] = y[f])
							}
						return function (g, y) {
							p(g, y)
							function f() {
								this.constructor = g
							}
							g.prototype =
								y === null
									? Object.create(y)
									: ((f.prototype = y.prototype), new f())
						}
					})()
				Object.defineProperty(r, "__esModule", { value: !0 })
				var l = i(19),
					h = (function (p) {
						o(g, p)
						function g() {
							return (
								(p !== null && p.apply(this, arguments)) || this
							)
						}
						return (
							(g.formats = function (y) {}),
							(g.prototype.format = function (y, f) {
								p.prototype.formatAt.call(
									this,
									0,
									this.length(),
									y,
									f
								)
							}),
							(g.prototype.formatAt = function (y, f, u, c) {
								y === 0 && f === this.length()
									? this.format(u, c)
									: p.prototype.formatAt.call(
											this,
											y,
											f,
											u,
											c
										)
							}),
							(g.prototype.formats = function () {
								return this.statics.formats(this.domNode)
							}),
							g
						)
					})(l.default)
				r.default = h
			},
			function (n, r, i) {
				var o =
					(this && this.__extends) ||
					(function () {
						var g =
							Object.setPrototypeOf ||
							({ __proto__: [] } instanceof Array &&
								function (y, f) {
									y.__proto__ = f
								}) ||
							function (y, f) {
								for (var u in f)
									f.hasOwnProperty(u) && (y[u] = f[u])
							}
						return function (y, f) {
							g(y, f)
							function u() {
								this.constructor = y
							}
							y.prototype =
								f === null
									? Object.create(f)
									: ((u.prototype = f.prototype), new u())
						}
					})()
				Object.defineProperty(r, "__esModule", { value: !0 })
				var l = i(19),
					h = i(1),
					p = (function (g) {
						o(y, g)
						function y(f) {
							var u = g.call(this, f) || this
							return (u.text = u.statics.value(u.domNode)), u
						}
						return (
							(y.create = function (f) {
								return document.createTextNode(f)
							}),
							(y.value = function (f) {
								var u = f.data
								return u.normalize && (u = u.normalize()), u
							}),
							(y.prototype.deleteAt = function (f, u) {
								this.domNode.data = this.text =
									this.text.slice(0, f) +
									this.text.slice(f + u)
							}),
							(y.prototype.index = function (f, u) {
								return this.domNode === f ? u : -1
							}),
							(y.prototype.insertAt = function (f, u, c) {
								c == null
									? ((this.text =
											this.text.slice(0, f) +
											u +
											this.text.slice(f)),
										(this.domNode.data = this.text))
									: g.prototype.insertAt.call(this, f, u, c)
							}),
							(y.prototype.length = function () {
								return this.text.length
							}),
							(y.prototype.optimize = function (f) {
								g.prototype.optimize.call(this, f),
									(this.text = this.statics.value(
										this.domNode
									)),
									this.text.length === 0
										? this.remove()
										: this.next instanceof y &&
											this.next.prev === this &&
											(this.insertAt(
												this.length(),
												this.next.value()
											),
											this.next.remove())
							}),
							(y.prototype.position = function (f, u) {
								return [this.domNode, f]
							}),
							(y.prototype.split = function (f, u) {
								if ((u === void 0 && (u = !1), !u)) {
									if (f === 0) return this
									if (f === this.length()) return this.next
								}
								var c = h.create(this.domNode.splitText(f))
								return (
									this.parent.insertBefore(c, this.next),
									(this.text = this.statics.value(
										this.domNode
									)),
									c
								)
							}),
							(y.prototype.update = function (f, u) {
								var c = this
								f.some(function (_) {
									return (
										_.type === "characterData" &&
										_.target === c.domNode
									)
								}) &&
									(this.text = this.statics.value(
										this.domNode
									))
							}),
							(y.prototype.value = function () {
								return this.text
							}),
							(y.blotName = "text"),
							(y.scope = h.Scope.INLINE_BLOT),
							y
						)
					})(l.default)
				r.default = p
			},
			function (n, r, i) {
				var o = document.createElement("div")
				if (
					(o.classList.toggle("test-class", !1),
					o.classList.contains("test-class"))
				) {
					var l = DOMTokenList.prototype.toggle
					DOMTokenList.prototype.toggle = function (h, p) {
						return arguments.length > 1 && !this.contains(h) == !p
							? p
							: l.call(this, h)
					}
				}
				String.prototype.startsWith ||
					(String.prototype.startsWith = function (h, p) {
						return (p = p || 0), this.substr(p, h.length) === h
					}),
					String.prototype.endsWith ||
						(String.prototype.endsWith = function (h, p) {
							var g = this.toString()
							;(typeof p != "number" ||
								!isFinite(p) ||
								Math.floor(p) !== p ||
								p > g.length) &&
								(p = g.length),
								(p -= h.length)
							var y = g.indexOf(h, p)
							return y !== -1 && y === p
						}),
					Array.prototype.find ||
						Object.defineProperty(Array.prototype, "find", {
							value: function (p) {
								if (this === null)
									throw new TypeError(
										"Array.prototype.find called on null or undefined"
									)
								if (typeof p != "function")
									throw new TypeError(
										"predicate must be a function"
									)
								for (
									var g = Object(this),
										y = g.length >>> 0,
										f = arguments[1],
										u,
										c = 0;
									c < y;
									c++
								)
									if (((u = g[c]), p.call(f, u, c, g)))
										return u
							}
						}),
					document.addEventListener("DOMContentLoaded", function () {
						document.execCommand("enableObjectResizing", !1, !1),
							document.execCommand("autoUrlDetect", !1, !1)
					})
			},
			function (n, r) {
				var i = -1,
					o = 1,
					l = 0
				function h(d, E, N) {
					if (d == E) return d ? [[l, d]] : []
					;(N < 0 || d.length < N) && (N = null)
					var k = f(d, E),
						O = d.substring(0, k)
					;(d = d.substring(k)), (E = E.substring(k)), (k = u(d, E))
					var j = d.substring(d.length - k)
					;(d = d.substring(0, d.length - k)),
						(E = E.substring(0, E.length - k))
					var x = p(d, E)
					return (
						O && x.unshift([l, O]),
						j && x.push([l, j]),
						_(x),
						N != null && (x = s(x, N)),
						(x = a(x)),
						x
					)
				}
				function p(d, E) {
					var N
					if (!d) return [[o, E]]
					if (!E) return [[i, d]]
					var k = d.length > E.length ? d : E,
						O = d.length > E.length ? E : d,
						j = k.indexOf(O)
					if (j != -1)
						return (
							(N = [
								[o, k.substring(0, j)],
								[l, O],
								[o, k.substring(j + O.length)]
							]),
							d.length > E.length && (N[0][0] = N[2][0] = i),
							N
						)
					if (O.length == 1)
						return [
							[i, d],
							[o, E]
						]
					var x = c(d, E)
					if (x) {
						var b = x[0],
							S = x[1],
							A = x[2],
							L = x[3],
							M = x[4],
							U = h(b, A),
							V = h(S, L)
						return U.concat([[l, M]], V)
					}
					return g(d, E)
				}
				function g(d, E) {
					for (
						var N = d.length,
							k = E.length,
							O = Math.ceil((N + k) / 2),
							j = O,
							x = 2 * O,
							b = new Array(x),
							S = new Array(x),
							A = 0;
						A < x;
						A++
					)
						(b[A] = -1), (S[A] = -1)
					;(b[j + 1] = 0), (S[j + 1] = 0)
					for (
						var L = N - k,
							M = L % 2 != 0,
							U = 0,
							V = 0,
							G = 0,
							q = 0,
							R = 0;
						R < O;
						R++
					) {
						for (var T = -R + U; T <= R - V; T += 2) {
							var D = j + T,
								F
							T == -R || (T != R && b[D - 1] < b[D + 1])
								? (F = b[D + 1])
								: (F = b[D - 1] + 1)
							for (
								var K = F - T;
								F < N && K < k && d.charAt(F) == E.charAt(K);

							)
								F++, K++
							if (((b[D] = F), F > N)) V += 2
							else if (K > k) U += 2
							else if (M) {
								var H = j + L - T
								if (H >= 0 && H < x && S[H] != -1) {
									var C = N - S[H]
									if (F >= C) return y(d, E, F, K)
								}
							}
						}
						for (var $ = -R + G; $ <= R - q; $ += 2) {
							var H = j + $,
								C
							$ == -R || ($ != R && S[H - 1] < S[H + 1])
								? (C = S[H + 1])
								: (C = S[H - 1] + 1)
							for (
								var Q = C - $;
								C < N &&
								Q < k &&
								d.charAt(N - C - 1) == E.charAt(k - Q - 1);

							)
								C++, Q++
							if (((S[H] = C), C > N)) q += 2
							else if (Q > k) G += 2
							else if (!M) {
								var D = j + L - $
								if (D >= 0 && D < x && b[D] != -1) {
									var F = b[D],
										K = j + F - D
									if (((C = N - C), F >= C))
										return y(d, E, F, K)
								}
							}
						}
					}
					return [
						[i, d],
						[o, E]
					]
				}
				function y(d, E, N, k) {
					var O = d.substring(0, N),
						j = E.substring(0, k),
						x = d.substring(N),
						b = E.substring(k),
						S = h(O, j),
						A = h(x, b)
					return S.concat(A)
				}
				function f(d, E) {
					if (!d || !E || d.charAt(0) != E.charAt(0)) return 0
					for (
						var N = 0,
							k = Math.min(d.length, E.length),
							O = k,
							j = 0;
						N < O;

					)
						d.substring(j, O) == E.substring(j, O)
							? ((N = O), (j = N))
							: (k = O),
							(O = Math.floor((k - N) / 2 + N))
					return O
				}
				function u(d, E) {
					if (
						!d ||
						!E ||
						d.charAt(d.length - 1) != E.charAt(E.length - 1)
					)
						return 0
					for (
						var N = 0,
							k = Math.min(d.length, E.length),
							O = k,
							j = 0;
						N < O;

					)
						d.substring(d.length - O, d.length - j) ==
						E.substring(E.length - O, E.length - j)
							? ((N = O), (j = N))
							: (k = O),
							(O = Math.floor((k - N) / 2 + N))
					return O
				}
				function c(d, E) {
					var N = d.length > E.length ? d : E,
						k = d.length > E.length ? E : d
					if (N.length < 4 || k.length * 2 < N.length) return null
					function O(V, G, q) {
						for (
							var R = V.substring(
									q,
									q + Math.floor(V.length / 4)
								),
								T = -1,
								D = "",
								F,
								K,
								H,
								C;
							(T = G.indexOf(R, T + 1)) != -1;

						) {
							var $ = f(V.substring(q), G.substring(T)),
								Q = u(V.substring(0, q), G.substring(0, T))
							D.length < Q + $ &&
								((D =
									G.substring(T - Q, T) +
									G.substring(T, T + $)),
								(F = V.substring(0, q - Q)),
								(K = V.substring(q + $)),
								(H = G.substring(0, T - Q)),
								(C = G.substring(T + $)))
						}
						return D.length * 2 >= V.length ? [F, K, H, C, D] : null
					}
					var j = O(N, k, Math.ceil(N.length / 4)),
						x = O(N, k, Math.ceil(N.length / 2)),
						b
					if (!j && !x) return null
					x
						? j
							? (b = j[4].length > x[4].length ? j : x)
							: (b = x)
						: (b = j)
					var S, A, L, M
					d.length > E.length
						? ((S = b[0]), (A = b[1]), (L = b[2]), (M = b[3]))
						: ((L = b[0]), (M = b[1]), (S = b[2]), (A = b[3]))
					var U = b[4]
					return [S, A, L, M, U]
				}
				function _(d) {
					d.push([l, ""])
					for (
						var E = 0, N = 0, k = 0, O = "", j = "", x;
						E < d.length;

					)
						switch (d[E][0]) {
							case o:
								k++, (j += d[E][1]), E++
								break
							case i:
								N++, (O += d[E][1]), E++
								break
							case l:
								N + k > 1
									? (N !== 0 &&
											k !== 0 &&
											((x = f(j, O)),
											x !== 0 &&
												(E - N - k > 0 &&
												d[E - N - k - 1][0] == l
													? (d[E - N - k - 1][1] +=
															j.substring(0, x))
													: (d.splice(0, 0, [
															l,
															j.substring(0, x)
														]),
														E++),
												(j = j.substring(x)),
												(O = O.substring(x))),
											(x = u(j, O)),
											x !== 0 &&
												((d[E][1] =
													j.substring(j.length - x) +
													d[E][1]),
												(j = j.substring(
													0,
													j.length - x
												)),
												(O = O.substring(
													0,
													O.length - x
												)))),
										N === 0
											? d.splice(E - k, N + k, [o, j])
											: k === 0
												? d.splice(E - N, N + k, [i, O])
												: d.splice(
														E - N - k,
														N + k,
														[i, O],
														[o, j]
													),
										(E =
											E -
											N -
											k +
											(N ? 1 : 0) +
											(k ? 1 : 0) +
											1))
									: E !== 0 && d[E - 1][0] == l
										? ((d[E - 1][1] += d[E][1]),
											d.splice(E, 1))
										: E++,
									(k = 0),
									(N = 0),
									(O = ""),
									(j = "")
								break
						}
					d[d.length - 1][1] === "" && d.pop()
					var b = !1
					for (E = 1; E < d.length - 1; )
						d[E - 1][0] == l &&
							d[E + 1][0] == l &&
							(d[E][1].substring(
								d[E][1].length - d[E - 1][1].length
							) == d[E - 1][1]
								? ((d[E][1] =
										d[E - 1][1] +
										d[E][1].substring(
											0,
											d[E][1].length - d[E - 1][1].length
										)),
									(d[E + 1][1] = d[E - 1][1] + d[E + 1][1]),
									d.splice(E - 1, 1),
									(b = !0))
								: d[E][1].substring(0, d[E + 1][1].length) ==
										d[E + 1][1] &&
									((d[E - 1][1] += d[E + 1][1]),
									(d[E][1] =
										d[E][1].substring(d[E + 1][1].length) +
										d[E + 1][1]),
									d.splice(E + 1, 1),
									(b = !0))),
							E++
					b && _(d)
				}
				var m = h
				;(m.INSERT = o), (m.DELETE = i), (m.EQUAL = l), (n.exports = m)
				function w(d, E) {
					if (E === 0) return [l, d]
					for (var N = 0, k = 0; k < d.length; k++) {
						var O = d[k]
						if (O[0] === i || O[0] === l) {
							var j = N + O[1].length
							if (E === j) return [k + 1, d]
							if (E < j) {
								d = d.slice()
								var x = E - N,
									b = [O[0], O[1].slice(0, x)],
									S = [O[0], O[1].slice(x)]
								return d.splice(k, 1, b, S), [k + 1, d]
							} else N = j
						}
					}
					throw new Error("cursor_pos is out of bounds!")
				}
				function s(d, E) {
					var N = w(d, E),
						k = N[1],
						O = N[0],
						j = k[O],
						x = k[O + 1]
					if (j == null) return d
					if (j[0] !== l) return d
					if (x != null && j[1] + x[1] === x[1] + j[1])
						return k.splice(O, 2, x, j), v(k, O, 2)
					if (x != null && x[1].indexOf(j[1]) === 0) {
						k.splice(O, 2, [x[0], j[1]], [0, j[1]])
						var b = x[1].slice(j[1].length)
						return (
							b.length > 0 && k.splice(O + 2, 0, [x[0], b]),
							v(k, O, 3)
						)
					} else return d
				}
				function a(d) {
					for (
						var E = !1,
							N = function (x) {
								return (
									x.charCodeAt(0) >= 56320 &&
									x.charCodeAt(0) <= 57343
								)
							},
							k = function (x) {
								return (
									x.charCodeAt(x.length - 1) >= 55296 &&
									x.charCodeAt(x.length - 1) <= 56319
								)
							},
							O = 2;
						O < d.length;
						O += 1
					)
						d[O - 2][0] === l &&
							k(d[O - 2][1]) &&
							d[O - 1][0] === i &&
							N(d[O - 1][1]) &&
							d[O][0] === o &&
							N(d[O][1]) &&
							((E = !0),
							(d[O - 1][1] = d[O - 2][1].slice(-1) + d[O - 1][1]),
							(d[O][1] = d[O - 2][1].slice(-1) + d[O][1]),
							(d[O - 2][1] = d[O - 2][1].slice(0, -1)))
					if (!E) return d
					for (var j = [], O = 0; O < d.length; O += 1)
						d[O][1].length > 0 && j.push(d[O])
					return j
				}
				function v(d, E, N) {
					for (var k = E + N - 1; k >= 0 && k >= E - 1; k--)
						if (k + 1 < d.length) {
							var O = d[k],
								j = d[k + 1]
							O[0] === j[1] && d.splice(k, 2, [O[0], O[1] + j[1]])
						}
					return d
				}
			},
			function (n, r) {
				;(r = n.exports =
					typeof Object.keys == "function" ? Object.keys : i),
					(r.shim = i)
				function i(o) {
					var l = []
					for (var h in o) l.push(h)
					return l
				}
			},
			function (n, r) {
				var i =
					(function () {
						return Object.prototype.toString.call(arguments)
					})() == "[object Arguments]"
				;(r = n.exports = i ? o : l), (r.supported = o)
				function o(h) {
					return (
						Object.prototype.toString.call(h) ==
						"[object Arguments]"
					)
				}
				r.unsupported = l
				function l(h) {
					return (
						(h &&
							typeof h == "object" &&
							typeof h.length == "number" &&
							Object.prototype.hasOwnProperty.call(h, "callee") &&
							!Object.prototype.propertyIsEnumerable.call(
								h,
								"callee"
							)) ||
						!1
					)
				}
			},
			function (n, r) {
				var i = Object.prototype.hasOwnProperty,
					o = "~"
				function l() {}
				Object.create &&
					((l.prototype = Object.create(null)),
					new l().__proto__ || (o = !1))
				function h(g, y, f) {
					;(this.fn = g), (this.context = y), (this.once = f || !1)
				}
				function p() {
					;(this._events = new l()), (this._eventsCount = 0)
				}
				;(p.prototype.eventNames = function () {
					var y = [],
						f,
						u
					if (this._eventsCount === 0) return y
					for (u in (f = this._events))
						i.call(f, u) && y.push(o ? u.slice(1) : u)
					return Object.getOwnPropertySymbols
						? y.concat(Object.getOwnPropertySymbols(f))
						: y
				}),
					(p.prototype.listeners = function (y, f) {
						var u = o ? o + y : y,
							c = this._events[u]
						if (f) return !!c
						if (!c) return []
						if (c.fn) return [c.fn]
						for (
							var _ = 0, m = c.length, w = new Array(m);
							_ < m;
							_++
						)
							w[_] = c[_].fn
						return w
					}),
					(p.prototype.emit = function (y, f, u, c, _, m) {
						var w = o ? o + y : y
						if (!this._events[w]) return !1
						var s = this._events[w],
							a = arguments.length,
							v,
							d
						if (s.fn) {
							switch (
								(s.once &&
									this.removeListener(y, s.fn, void 0, !0),
								a)
							) {
								case 1:
									return s.fn.call(s.context), !0
								case 2:
									return s.fn.call(s.context, f), !0
								case 3:
									return s.fn.call(s.context, f, u), !0
								case 4:
									return s.fn.call(s.context, f, u, c), !0
								case 5:
									return s.fn.call(s.context, f, u, c, _), !0
								case 6:
									return (
										s.fn.call(s.context, f, u, c, _, m), !0
									)
							}
							for (d = 1, v = new Array(a - 1); d < a; d++)
								v[d - 1] = arguments[d]
							s.fn.apply(s.context, v)
						} else {
							var E = s.length,
								N
							for (d = 0; d < E; d++)
								switch (
									(s[d].once &&
										this.removeListener(
											y,
											s[d].fn,
											void 0,
											!0
										),
									a)
								) {
									case 1:
										s[d].fn.call(s[d].context)
										break
									case 2:
										s[d].fn.call(s[d].context, f)
										break
									case 3:
										s[d].fn.call(s[d].context, f, u)
										break
									case 4:
										s[d].fn.call(s[d].context, f, u, c)
										break
									default:
										if (!v)
											for (
												N = 1, v = new Array(a - 1);
												N < a;
												N++
											)
												v[N - 1] = arguments[N]
										s[d].fn.apply(s[d].context, v)
								}
						}
						return !0
					}),
					(p.prototype.on = function (y, f, u) {
						var c = new h(f, u || this),
							_ = o ? o + y : y
						return (
							this._events[_]
								? this._events[_].fn
									? (this._events[_] = [this._events[_], c])
									: this._events[_].push(c)
								: ((this._events[_] = c), this._eventsCount++),
							this
						)
					}),
					(p.prototype.once = function (y, f, u) {
						var c = new h(f, u || this, !0),
							_ = o ? o + y : y
						return (
							this._events[_]
								? this._events[_].fn
									? (this._events[_] = [this._events[_], c])
									: this._events[_].push(c)
								: ((this._events[_] = c), this._eventsCount++),
							this
						)
					}),
					(p.prototype.removeListener = function (y, f, u, c) {
						var _ = o ? o + y : y
						if (!this._events[_]) return this
						if (!f)
							return (
								--this._eventsCount === 0
									? (this._events = new l())
									: delete this._events[_],
								this
							)
						var m = this._events[_]
						if (m.fn)
							m.fn === f &&
								(!c || m.once) &&
								(!u || m.context === u) &&
								(--this._eventsCount === 0
									? (this._events = new l())
									: delete this._events[_])
						else {
							for (var w = 0, s = [], a = m.length; w < a; w++)
								(m[w].fn !== f ||
									(c && !m[w].once) ||
									(u && m[w].context !== u)) &&
									s.push(m[w])
							s.length
								? (this._events[_] = s.length === 1 ? s[0] : s)
								: --this._eventsCount === 0
									? (this._events = new l())
									: delete this._events[_]
						}
						return this
					}),
					(p.prototype.removeAllListeners = function (y) {
						var f
						return (
							y
								? ((f = o ? o + y : y),
									this._events[f] &&
										(--this._eventsCount === 0
											? (this._events = new l())
											: delete this._events[f]))
								: ((this._events = new l()),
									(this._eventsCount = 0)),
							this
						)
					}),
					(p.prototype.off = p.prototype.removeListener),
					(p.prototype.addListener = p.prototype.on),
					(p.prototype.setMaxListeners = function () {
						return this
					}),
					(p.prefixed = o),
					(p.EventEmitter = p),
					typeof n < "u" && (n.exports = p)
			},
			function (n, r, i) {
				Object.defineProperty(r, "__esModule", { value: !0 }),
					(r.matchText =
						r.matchSpacing =
						r.matchNewline =
						r.matchBlot =
						r.matchAttributor =
						r.default =
							void 0)
				var o =
						typeof Symbol == "function" &&
						typeof Symbol.iterator == "symbol"
							? function (P) {
									return typeof P
								}
							: function (P) {
									return P &&
										typeof Symbol == "function" &&
										P.constructor === Symbol &&
										P !== Symbol.prototype
										? "symbol"
										: typeof P
								},
					l = (function () {
						function P(I, z) {
							var Z = [],
								W = !0,
								X = !1,
								ee = void 0
							try {
								for (
									var ie = I[Symbol.iterator](), ce;
									!(W = (ce = ie.next()).done) &&
									(Z.push(ce.value), !(z && Z.length === z));
									W = !0
								);
							} catch (Se) {
								;(X = !0), (ee = Se)
							} finally {
								try {
									!W && ie.return && ie.return()
								} finally {
									if (X) throw ee
								}
							}
							return Z
						}
						return function (I, z) {
							if (Array.isArray(I)) return I
							if (Symbol.iterator in Object(I)) return P(I, z)
							throw new TypeError(
								"Invalid attempt to destructure non-iterable instance"
							)
						}
					})(),
					h = (function () {
						function P(I, z) {
							for (var Z = 0; Z < z.length; Z++) {
								var W = z[Z]
								;(W.enumerable = W.enumerable || !1),
									(W.configurable = !0),
									"value" in W && (W.writable = !0),
									Object.defineProperty(I, W.key, W)
							}
						}
						return function (I, z, Z) {
							return z && P(I.prototype, z), Z && P(I, Z), I
						}
					})(),
					p = i(3),
					g = S(p),
					y = i(2),
					f = S(y),
					u = i(0),
					c = S(u),
					_ = i(5),
					m = S(_),
					w = i(10),
					s = S(w),
					a = i(9),
					v = S(a),
					d = i(36),
					E = i(37),
					N = i(13),
					k = S(N),
					O = i(26),
					j = i(38),
					x = i(39),
					b = i(40)
				function S(P) {
					return P && P.__esModule ? P : { default: P }
				}
				function A(P, I, z) {
					return (
						I in P
							? Object.defineProperty(P, I, {
									value: z,
									enumerable: !0,
									configurable: !0,
									writable: !0
								})
							: (P[I] = z),
						P
					)
				}
				function L(P, I) {
					if (!(P instanceof I))
						throw new TypeError("Cannot call a class as a function")
				}
				function M(P, I) {
					if (!P)
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						)
					return I && (typeof I == "object" || typeof I == "function")
						? I
						: P
				}
				function U(P, I) {
					if (typeof I != "function" && I !== null)
						throw new TypeError(
							"Super expression must either be null or a function, not " +
								typeof I
						)
					;(P.prototype = Object.create(I && I.prototype, {
						constructor: {
							value: P,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					})),
						I &&
							(Object.setPrototypeOf
								? Object.setPrototypeOf(P, I)
								: (P.__proto__ = I))
				}
				var V = (0, s.default)("quill:clipboard"),
					G = "__ql-matcher",
					q = [
						[Node.TEXT_NODE, je],
						[Node.TEXT_NODE, ue],
						["br", re],
						[Node.ELEMENT_NODE, ue],
						[Node.ELEMENT_NODE, J],
						[Node.ELEMENT_NODE, he],
						[Node.ELEMENT_NODE, Y],
						[Node.ELEMENT_NODE, Ke],
						["li", ae],
						["b", Q.bind(Q, "bold")],
						["i", Q.bind(Q, "italic")],
						["style", le]
					],
					R = [d.AlignAttribute, j.DirectionAttribute].reduce(
						function (P, I) {
							return (P[I.keyName] = I), P
						},
						{}
					),
					T = [
						d.AlignStyle,
						E.BackgroundStyle,
						O.ColorStyle,
						j.DirectionStyle,
						x.FontStyle,
						b.SizeStyle
					].reduce(function (P, I) {
						return (P[I.keyName] = I), P
					}, {}),
					D = (function (P) {
						U(I, P)
						function I(z, Z) {
							L(this, I)
							var W = M(
								this,
								(I.__proto__ || Object.getPrototypeOf(I)).call(
									this,
									z,
									Z
								)
							)
							return (
								W.quill.root.addEventListener(
									"paste",
									W.onPaste.bind(W)
								),
								(W.container =
									W.quill.addContainer("ql-clipboard")),
								W.container.setAttribute("contenteditable", !0),
								W.container.setAttribute("tabindex", -1),
								(W.matchers = []),
								q
									.concat(W.options.matchers)
									.forEach(function (X) {
										var ee = l(X, 2),
											ie = ee[0],
											ce = ee[1]
										;(!Z.matchVisual && ce === he) ||
											W.addMatcher(ie, ce)
									}),
								W
							)
						}
						return (
							h(I, [
								{
									key: "addMatcher",
									value: function (Z, W) {
										this.matchers.push([Z, W])
									}
								},
								{
									key: "convert",
									value: function (Z) {
										if (typeof Z == "string")
											return (
												(this.container.innerHTML =
													Z.replace(
														/\>\r?\n +\</g,
														"><"
													)),
												this.convert()
											)
										var W = this.quill.getFormat(
											this.quill.selection.savedRange
												.index
										)
										if (W[k.default.blotName]) {
											var X = this.container.innerText
											return (
												(this.container.innerHTML = ""),
												new f.default().insert(
													X,
													A(
														{},
														k.default.blotName,
														W[k.default.blotName]
													)
												)
											)
										}
										var ee = this.prepareMatching(),
											ie = l(ee, 2),
											ce = ie[0],
											Se = ie[1],
											pe = $(this.container, ce, Se)
										return (
											H(
												pe,
												`
`
											) &&
												pe.ops[pe.ops.length - 1]
													.attributes == null &&
												(pe = pe.compose(
													new f.default()
														.retain(pe.length() - 1)
														.delete(1)
												)),
											V.log(
												"convert",
												this.container.innerHTML,
												pe
											),
											(this.container.innerHTML = ""),
											pe
										)
									}
								},
								{
									key: "dangerouslyPasteHTML",
									value: function (Z, W) {
										var X =
											arguments.length > 2 &&
											arguments[2] !== void 0
												? arguments[2]
												: m.default.sources.API
										if (typeof Z == "string")
											this.quill.setContents(
												this.convert(Z),
												W
											),
												this.quill.setSelection(
													0,
													m.default.sources.SILENT
												)
										else {
											var ee = this.convert(W)
											this.quill.updateContents(
												new f.default()
													.retain(Z)
													.concat(ee),
												X
											),
												this.quill.setSelection(
													Z + ee.length(),
													m.default.sources.SILENT
												)
										}
									}
								},
								{
									key: "onPaste",
									value: function (Z) {
										var W = this
										if (
											!(
												Z.defaultPrevented ||
												!this.quill.isEnabled()
											)
										) {
											var X = this.quill.getSelection(),
												ee = new f.default().retain(
													X.index
												),
												ie =
													this.quill
														.scrollingContainer
														.scrollTop
											this.container.focus(),
												this.quill.selection.update(
													m.default.sources.SILENT
												),
												setTimeout(function () {
													;(ee = ee
														.concat(W.convert())
														.delete(X.length)),
														W.quill.updateContents(
															ee,
															m.default.sources
																.USER
														),
														W.quill.setSelection(
															ee.length() -
																X.length,
															m.default.sources
																.SILENT
														),
														(W.quill.scrollingContainer.scrollTop =
															ie),
														W.quill.focus()
												}, 1)
										}
									}
								},
								{
									key: "prepareMatching",
									value: function () {
										var Z = this,
											W = [],
											X = []
										return (
											this.matchers.forEach(
												function (ee) {
													var ie = l(ee, 2),
														ce = ie[0],
														Se = ie[1]
													switch (ce) {
														case Node.TEXT_NODE:
															X.push(Se)
															break
														case Node.ELEMENT_NODE:
															W.push(Se)
															break
														default:
															;[].forEach.call(
																Z.container.querySelectorAll(
																	ce
																),
																function (pe) {
																	;(pe[G] =
																		pe[G] ||
																		[]),
																		pe[
																			G
																		].push(
																			Se
																		)
																}
															)
															break
													}
												}
											),
											[W, X]
										)
									}
								}
							]),
							I
						)
					})(v.default)
				D.DEFAULTS = { matchers: [], matchVisual: !0 }
				function F(P, I, z) {
					return (typeof I > "u" ? "undefined" : o(I)) === "object"
						? Object.keys(I).reduce(function (Z, W) {
								return F(Z, W, I[W])
							}, P)
						: P.reduce(function (Z, W) {
								return W.attributes && W.attributes[I]
									? Z.push(W)
									: Z.insert(
											W.insert,
											(0, g.default)(
												{},
												A({}, I, z),
												W.attributes
											)
										)
							}, new f.default())
				}
				function K(P) {
					if (P.nodeType !== Node.ELEMENT_NODE) return {}
					var I = "__ql-computed-style"
					return P[I] || (P[I] = window.getComputedStyle(P))
				}
				function H(P, I) {
					for (
						var z = "", Z = P.ops.length - 1;
						Z >= 0 && z.length < I.length;
						--Z
					) {
						var W = P.ops[Z]
						if (typeof W.insert != "string") break
						z = W.insert + z
					}
					return z.slice(-1 * I.length) === I
				}
				function C(P) {
					if (P.childNodes.length === 0) return !1
					var I = K(P)
					return ["block", "list-item"].indexOf(I.display) > -1
				}
				function $(P, I, z) {
					return P.nodeType === P.TEXT_NODE
						? z.reduce(function (Z, W) {
								return W(P, Z)
							}, new f.default())
						: P.nodeType === P.ELEMENT_NODE
							? [].reduce.call(
									P.childNodes || [],
									function (Z, W) {
										var X = $(W, I, z)
										return (
											W.nodeType === P.ELEMENT_NODE &&
												((X = I.reduce(function (
													ee,
													ie
												) {
													return ie(W, ee)
												}, X)),
												(X = (W[G] || []).reduce(
													function (ee, ie) {
														return ie(W, ee)
													},
													X
												))),
											Z.concat(X)
										)
									},
									new f.default()
								)
							: new f.default()
				}
				function Q(P, I, z) {
					return F(z, P, !0)
				}
				function Y(P, I) {
					var z = c.default.Attributor.Attribute.keys(P),
						Z = c.default.Attributor.Class.keys(P),
						W = c.default.Attributor.Style.keys(P),
						X = {}
					return (
						z
							.concat(Z)
							.concat(W)
							.forEach(function (ee) {
								var ie = c.default.query(
									ee,
									c.default.Scope.ATTRIBUTE
								)
								;(ie != null &&
									((X[ie.attrName] = ie.value(P)),
									X[ie.attrName])) ||
									((ie = R[ee]),
									ie != null &&
										(ie.attrName === ee ||
											ie.keyName === ee) &&
										(X[ie.attrName] =
											ie.value(P) || void 0),
									(ie = T[ee]),
									ie != null &&
										(ie.attrName === ee ||
											ie.keyName === ee) &&
										((ie = T[ee]),
										(X[ie.attrName] =
											ie.value(P) || void 0)))
							}),
						Object.keys(X).length > 0 && (I = F(I, X)),
						I
					)
				}
				function J(P, I) {
					var z = c.default.query(P)
					if (z == null) return I
					if (z.prototype instanceof c.default.Embed) {
						var Z = {},
							W = z.value(P)
						W != null &&
							((Z[z.blotName] = W),
							(I = new f.default().insert(Z, z.formats(P))))
					} else
						typeof z.formats == "function" &&
							(I = F(I, z.blotName, z.formats(P)))
					return I
				}
				function re(P, I) {
					return (
						H(
							I,
							`
`
						) ||
							I.insert(`
`),
						I
					)
				}
				function le() {
					return new f.default()
				}
				function ae(P, I) {
					var z = c.default.query(P)
					if (
						z == null ||
						z.blotName !== "list-item" ||
						!H(
							I,
							`
`
						)
					)
						return I
					for (
						var Z = -1, W = P.parentNode;
						!W.classList.contains("ql-clipboard");

					)
						(c.default.query(W) || {}).blotName === "list" &&
							(Z += 1),
							(W = W.parentNode)
					return Z <= 0
						? I
						: I.compose(
								new f.default()
									.retain(I.length() - 1)
									.retain(1, { indent: Z })
							)
				}
				function ue(P, I) {
					return (
						H(
							I,
							`
`
						) ||
							((C(P) ||
								(I.length() > 0 &&
									P.nextSibling &&
									C(P.nextSibling))) &&
								I.insert(`
`)),
						I
					)
				}
				function he(P, I) {
					if (
						C(P) &&
						P.nextElementSibling != null &&
						!H(
							I,
							`

`
						)
					) {
						var z =
							P.offsetHeight +
							parseFloat(K(P).marginTop) +
							parseFloat(K(P).marginBottom)
						P.nextElementSibling.offsetTop >
							P.offsetTop + z * 1.5 &&
							I.insert(`
`)
					}
					return I
				}
				function Ke(P, I) {
					var z = {},
						Z = P.style || {}
					return (
						Z.fontStyle &&
							K(P).fontStyle === "italic" &&
							(z.italic = !0),
						Z.fontWeight &&
							(K(P).fontWeight.startsWith("bold") ||
								parseInt(K(P).fontWeight) >= 700) &&
							(z.bold = !0),
						Object.keys(z).length > 0 && (I = F(I, z)),
						parseFloat(Z.textIndent || 0) > 0 &&
							(I = new f.default().insert("	").concat(I)),
						I
					)
				}
				function je(P, I) {
					var z = P.data
					if (P.parentNode.tagName === "O:P")
						return I.insert(z.trim())
					if (
						z.trim().length === 0 &&
						P.parentNode.classList.contains("ql-clipboard")
					)
						return I
					if (!K(P.parentNode).whiteSpace.startsWith("pre")) {
						var Z = function (X, ee) {
							return (
								(ee = ee.replace(/[^\u00a0]/g, "")),
								ee.length < 1 && X ? " " : ee
							)
						}
						;(z = z.replace(/\r\n/g, " ").replace(/\n/g, " ")),
							(z = z.replace(/\s\s+/g, Z.bind(Z, !0))),
							((P.previousSibling == null && C(P.parentNode)) ||
								(P.previousSibling != null &&
									C(P.previousSibling))) &&
								(z = z.replace(/^\s+/, Z.bind(Z, !1))),
							((P.nextSibling == null && C(P.parentNode)) ||
								(P.nextSibling != null && C(P.nextSibling))) &&
								(z = z.replace(/\s+$/, Z.bind(Z, !1)))
					}
					return I.insert(z)
				}
				;(r.default = D),
					(r.matchAttributor = Y),
					(r.matchBlot = J),
					(r.matchNewline = ue),
					(r.matchSpacing = he),
					(r.matchText = je)
			},
			function (n, r, i) {
				Object.defineProperty(r, "__esModule", { value: !0 })
				var o = (function () {
						function _(m, w) {
							for (var s = 0; s < w.length; s++) {
								var a = w[s]
								;(a.enumerable = a.enumerable || !1),
									(a.configurable = !0),
									"value" in a && (a.writable = !0),
									Object.defineProperty(m, a.key, a)
							}
						}
						return function (m, w, s) {
							return w && _(m.prototype, w), s && _(m, s), m
						}
					})(),
					l = function _(m, w, s) {
						m === null && (m = Function.prototype)
						var a = Object.getOwnPropertyDescriptor(m, w)
						if (a === void 0) {
							var v = Object.getPrototypeOf(m)
							return v === null ? void 0 : _(v, w, s)
						} else {
							if ("value" in a) return a.value
							var d = a.get
							return d === void 0 ? void 0 : d.call(s)
						}
					},
					h = i(6),
					p = g(h)
				function g(_) {
					return _ && _.__esModule ? _ : { default: _ }
				}
				function y(_, m) {
					if (!(_ instanceof m))
						throw new TypeError("Cannot call a class as a function")
				}
				function f(_, m) {
					if (!_)
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						)
					return m && (typeof m == "object" || typeof m == "function")
						? m
						: _
				}
				function u(_, m) {
					if (typeof m != "function" && m !== null)
						throw new TypeError(
							"Super expression must either be null or a function, not " +
								typeof m
						)
					;(_.prototype = Object.create(m && m.prototype, {
						constructor: {
							value: _,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					})),
						m &&
							(Object.setPrototypeOf
								? Object.setPrototypeOf(_, m)
								: (_.__proto__ = m))
				}
				var c = (function (_) {
					u(m, _)
					function m() {
						return (
							y(this, m),
							f(
								this,
								(m.__proto__ || Object.getPrototypeOf(m)).apply(
									this,
									arguments
								)
							)
						)
					}
					return (
						o(
							m,
							[
								{
									key: "optimize",
									value: function (s) {
										l(
											m.prototype.__proto__ ||
												Object.getPrototypeOf(
													m.prototype
												),
											"optimize",
											this
										).call(this, s),
											this.domNode.tagName !==
												this.statics.tagName[0] &&
												this.replaceWith(
													this.statics.blotName
												)
									}
								}
							],
							[
								{
									key: "create",
									value: function () {
										return l(
											m.__proto__ ||
												Object.getPrototypeOf(m),
											"create",
											this
										).call(this)
									}
								},
								{
									key: "formats",
									value: function () {
										return !0
									}
								}
							]
						),
						m
					)
				})(p.default)
				;(c.blotName = "bold"),
					(c.tagName = ["STRONG", "B"]),
					(r.default = c)
			},
			function (n, r, i) {
				Object.defineProperty(r, "__esModule", { value: !0 }),
					(r.addControls = r.default = void 0)
				var o = (function () {
						function b(S, A) {
							var L = [],
								M = !0,
								U = !1,
								V = void 0
							try {
								for (
									var G = S[Symbol.iterator](), q;
									!(M = (q = G.next()).done) &&
									(L.push(q.value), !(A && L.length === A));
									M = !0
								);
							} catch (R) {
								;(U = !0), (V = R)
							} finally {
								try {
									!M && G.return && G.return()
								} finally {
									if (U) throw V
								}
							}
							return L
						}
						return function (S, A) {
							if (Array.isArray(S)) return S
							if (Symbol.iterator in Object(S)) return b(S, A)
							throw new TypeError(
								"Invalid attempt to destructure non-iterable instance"
							)
						}
					})(),
					l = (function () {
						function b(S, A) {
							for (var L = 0; L < A.length; L++) {
								var M = A[L]
								;(M.enumerable = M.enumerable || !1),
									(M.configurable = !0),
									"value" in M && (M.writable = !0),
									Object.defineProperty(S, M.key, M)
							}
						}
						return function (S, A, L) {
							return A && b(S.prototype, A), L && b(S, L), S
						}
					})(),
					h = i(2),
					p = s(h),
					g = i(0),
					y = s(g),
					f = i(5),
					u = s(f),
					c = i(10),
					_ = s(c),
					m = i(9),
					w = s(m)
				function s(b) {
					return b && b.__esModule ? b : { default: b }
				}
				function a(b, S, A) {
					return (
						S in b
							? Object.defineProperty(b, S, {
									value: A,
									enumerable: !0,
									configurable: !0,
									writable: !0
								})
							: (b[S] = A),
						b
					)
				}
				function v(b, S) {
					if (!(b instanceof S))
						throw new TypeError("Cannot call a class as a function")
				}
				function d(b, S) {
					if (!b)
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						)
					return S && (typeof S == "object" || typeof S == "function")
						? S
						: b
				}
				function E(b, S) {
					if (typeof S != "function" && S !== null)
						throw new TypeError(
							"Super expression must either be null or a function, not " +
								typeof S
						)
					;(b.prototype = Object.create(S && S.prototype, {
						constructor: {
							value: b,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					})),
						S &&
							(Object.setPrototypeOf
								? Object.setPrototypeOf(b, S)
								: (b.__proto__ = S))
				}
				var N = (0, _.default)("quill:toolbar"),
					k = (function (b) {
						E(S, b)
						function S(A, L) {
							v(this, S)
							var M = d(
								this,
								(S.__proto__ || Object.getPrototypeOf(S)).call(
									this,
									A,
									L
								)
							)
							if (Array.isArray(M.options.container)) {
								var U = document.createElement("div")
								j(U, M.options.container),
									A.container.parentNode.insertBefore(
										U,
										A.container
									),
									(M.container = U)
							} else
								typeof M.options.container == "string"
									? (M.container = document.querySelector(
											M.options.container
										))
									: (M.container = M.options.container)
							if (!(M.container instanceof HTMLElement)) {
								var V
								return (
									(V = N.error(
										"Container required for toolbar",
										M.options
									)),
									d(M, V)
								)
							}
							return (
								M.container.classList.add("ql-toolbar"),
								(M.controls = []),
								(M.handlers = {}),
								Object.keys(M.options.handlers).forEach(
									function (G) {
										M.addHandler(G, M.options.handlers[G])
									}
								),
								[].forEach.call(
									M.container.querySelectorAll(
										"button, select"
									),
									function (G) {
										M.attach(G)
									}
								),
								M.quill.on(
									u.default.events.EDITOR_CHANGE,
									function (G, q) {
										G ===
											u.default.events.SELECTION_CHANGE &&
											M.update(q)
									}
								),
								M.quill.on(
									u.default.events.SCROLL_OPTIMIZE,
									function () {
										var G = M.quill.selection.getRange(),
											q = o(G, 1),
											R = q[0]
										M.update(R)
									}
								),
								M
							)
						}
						return (
							l(S, [
								{
									key: "addHandler",
									value: function (L, M) {
										this.handlers[L] = M
									}
								},
								{
									key: "attach",
									value: function (L) {
										var M = this,
											U = [].find.call(
												L.classList,
												function (G) {
													return (
														G.indexOf("ql-") === 0
													)
												}
											)
										if (U) {
											if (
												((U = U.slice(3)),
												L.tagName === "BUTTON" &&
													L.setAttribute(
														"type",
														"button"
													),
												this.handlers[U] == null)
											) {
												if (
													this.quill.scroll
														.whitelist != null &&
													this.quill.scroll.whitelist[
														U
													] == null
												) {
													N.warn(
														"ignoring attaching to disabled format",
														U,
														L
													)
													return
												}
												if (
													y.default.query(U) == null
												) {
													N.warn(
														"ignoring attaching to nonexistent format",
														U,
														L
													)
													return
												}
											}
											var V =
												L.tagName === "SELECT"
													? "change"
													: "click"
											L.addEventListener(V, function (G) {
												var q = void 0
												if (L.tagName === "SELECT") {
													if (L.selectedIndex < 0)
														return
													var R =
														L.options[
															L.selectedIndex
														]
													R.hasAttribute("selected")
														? (q = !1)
														: (q = R.value || !1)
												} else
													L.classList.contains(
														"ql-active"
													)
														? (q = !1)
														: (q =
																L.value ||
																!L.hasAttribute(
																	"value"
																)),
														G.preventDefault()
												M.quill.focus()
												var T =
														M.quill.selection.getRange(),
													D = o(T, 1),
													F = D[0]
												if (M.handlers[U] != null)
													M.handlers[U].call(M, q)
												else if (
													y.default.query(U)
														.prototype instanceof
													y.default.Embed
												) {
													if (
														((q = prompt(
															"Enter " + U
														)),
														!q)
													)
														return
													M.quill.updateContents(
														new p.default()
															.retain(F.index)
															.delete(F.length)
															.insert(
																a({}, U, q)
															),
														u.default.sources.USER
													)
												} else
													M.quill.format(
														U,
														q,
														u.default.sources.USER
													)
												M.update(F)
											}),
												this.controls.push([U, L])
										}
									}
								},
								{
									key: "update",
									value: function (L) {
										var M =
											L == null
												? {}
												: this.quill.getFormat(L)
										this.controls.forEach(function (U) {
											var V = o(U, 2),
												G = V[0],
												q = V[1]
											if (q.tagName === "SELECT") {
												var R = void 0
												if (L == null) R = null
												else if (M[G] == null)
													R =
														q.querySelector(
															"option[selected]"
														)
												else if (!Array.isArray(M[G])) {
													var T = M[G]
													typeof T == "string" &&
														(T = T.replace(
															/\"/g,
															'\\"'
														)),
														(R = q.querySelector(
															'option[value="' +
																T +
																'"]'
														))
												}
												R == null
													? ((q.value = ""),
														(q.selectedIndex = -1))
													: (R.selected = !0)
											} else if (L == null)
												q.classList.remove("ql-active")
											else if (q.hasAttribute("value")) {
												var D =
													M[G] ===
														q.getAttribute(
															"value"
														) ||
													(M[G] != null &&
														M[G].toString() ===
															q.getAttribute(
																"value"
															)) ||
													(M[G] == null &&
														!q.getAttribute(
															"value"
														))
												q.classList.toggle(
													"ql-active",
													D
												)
											} else
												q.classList.toggle(
													"ql-active",
													M[G] != null
												)
										})
									}
								}
							]),
							S
						)
					})(w.default)
				k.DEFAULTS = {}
				function O(b, S, A) {
					var L = document.createElement("button")
					L.setAttribute("type", "button"),
						L.classList.add("ql-" + S),
						A != null && (L.value = A),
						b.appendChild(L)
				}
				function j(b, S) {
					Array.isArray(S[0]) || (S = [S]),
						S.forEach(function (A) {
							var L = document.createElement("span")
							L.classList.add("ql-formats"),
								A.forEach(function (M) {
									if (typeof M == "string") O(L, M)
									else {
										var U = Object.keys(M)[0],
											V = M[U]
										Array.isArray(V)
											? x(L, U, V)
											: O(L, U, V)
									}
								}),
								b.appendChild(L)
						})
				}
				function x(b, S, A) {
					var L = document.createElement("select")
					L.classList.add("ql-" + S),
						A.forEach(function (M) {
							var U = document.createElement("option")
							M !== !1
								? U.setAttribute("value", M)
								: U.setAttribute("selected", "selected"),
								L.appendChild(U)
						}),
						b.appendChild(L)
				}
				;(k.DEFAULTS = {
					container: null,
					handlers: {
						clean: function () {
							var S = this,
								A = this.quill.getSelection()
							if (A != null)
								if (A.length == 0) {
									var L = this.quill.getFormat()
									Object.keys(L).forEach(function (M) {
										y.default.query(
											M,
											y.default.Scope.INLINE
										) != null && S.quill.format(M, !1)
									})
								} else
									this.quill.removeFormat(
										A,
										u.default.sources.USER
									)
						},
						direction: function (S) {
							var A = this.quill.getFormat().align
							S === "rtl" && A == null
								? this.quill.format(
										"align",
										"right",
										u.default.sources.USER
									)
								: !S &&
									A === "right" &&
									this.quill.format(
										"align",
										!1,
										u.default.sources.USER
									),
								this.quill.format(
									"direction",
									S,
									u.default.sources.USER
								)
						},
						indent: function (S) {
							var A = this.quill.getSelection(),
								L = this.quill.getFormat(A),
								M = parseInt(L.indent || 0)
							if (S === "+1" || S === "-1") {
								var U = S === "+1" ? 1 : -1
								L.direction === "rtl" && (U *= -1),
									this.quill.format(
										"indent",
										M + U,
										u.default.sources.USER
									)
							}
						},
						link: function (S) {
							S === !0 && (S = prompt("Enter link URL:")),
								this.quill.format(
									"link",
									S,
									u.default.sources.USER
								)
						},
						list: function (S) {
							var A = this.quill.getSelection(),
								L = this.quill.getFormat(A)
							S === "check"
								? L.list === "checked" || L.list === "unchecked"
									? this.quill.format(
											"list",
											!1,
											u.default.sources.USER
										)
									: this.quill.format(
											"list",
											"unchecked",
											u.default.sources.USER
										)
								: this.quill.format(
										"list",
										S,
										u.default.sources.USER
									)
						}
					}
				}),
					(r.default = k),
					(r.addControls = j)
			},
			function (n, r) {
				n.exports =
					'<svg viewbox="0 0 18 18"> <polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"></polyline> <polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>'
			},
			function (n, r, i) {
				Object.defineProperty(r, "__esModule", { value: !0 })
				var o = (function () {
						function _(m, w) {
							for (var s = 0; s < w.length; s++) {
								var a = w[s]
								;(a.enumerable = a.enumerable || !1),
									(a.configurable = !0),
									"value" in a && (a.writable = !0),
									Object.defineProperty(m, a.key, a)
							}
						}
						return function (m, w, s) {
							return w && _(m.prototype, w), s && _(m, s), m
						}
					})(),
					l = function _(m, w, s) {
						m === null && (m = Function.prototype)
						var a = Object.getOwnPropertyDescriptor(m, w)
						if (a === void 0) {
							var v = Object.getPrototypeOf(m)
							return v === null ? void 0 : _(v, w, s)
						} else {
							if ("value" in a) return a.value
							var d = a.get
							return d === void 0 ? void 0 : d.call(s)
						}
					},
					h = i(28),
					p = g(h)
				function g(_) {
					return _ && _.__esModule ? _ : { default: _ }
				}
				function y(_, m) {
					if (!(_ instanceof m))
						throw new TypeError("Cannot call a class as a function")
				}
				function f(_, m) {
					if (!_)
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						)
					return m && (typeof m == "object" || typeof m == "function")
						? m
						: _
				}
				function u(_, m) {
					if (typeof m != "function" && m !== null)
						throw new TypeError(
							"Super expression must either be null or a function, not " +
								typeof m
						)
					;(_.prototype = Object.create(m && m.prototype, {
						constructor: {
							value: _,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					})),
						m &&
							(Object.setPrototypeOf
								? Object.setPrototypeOf(_, m)
								: (_.__proto__ = m))
				}
				var c = (function (_) {
					u(m, _)
					function m(w, s) {
						y(this, m)
						var a = f(
							this,
							(m.__proto__ || Object.getPrototypeOf(m)).call(
								this,
								w
							)
						)
						return (
							(a.label.innerHTML = s),
							a.container.classList.add("ql-color-picker"),
							[].slice
								.call(
									a.container.querySelectorAll(
										".ql-picker-item"
									),
									0,
									7
								)
								.forEach(function (v) {
									v.classList.add("ql-primary")
								}),
							a
						)
					}
					return (
						o(m, [
							{
								key: "buildItem",
								value: function (s) {
									var a = l(
										m.prototype.__proto__ ||
											Object.getPrototypeOf(m.prototype),
										"buildItem",
										this
									).call(this, s)
									return (
										(a.style.backgroundColor =
											s.getAttribute("value") || ""),
										a
									)
								}
							},
							{
								key: "selectItem",
								value: function (s, a) {
									l(
										m.prototype.__proto__ ||
											Object.getPrototypeOf(m.prototype),
										"selectItem",
										this
									).call(this, s, a)
									var v =
											this.label.querySelector(
												".ql-color-label"
											),
										d =
											(s &&
												s.getAttribute("data-value")) ||
											""
									v &&
										(v.tagName === "line"
											? (v.style.stroke = d)
											: (v.style.fill = d))
								}
							}
						]),
						m
					)
				})(p.default)
				r.default = c
			},
			function (n, r, i) {
				Object.defineProperty(r, "__esModule", { value: !0 })
				var o = (function () {
						function _(m, w) {
							for (var s = 0; s < w.length; s++) {
								var a = w[s]
								;(a.enumerable = a.enumerable || !1),
									(a.configurable = !0),
									"value" in a && (a.writable = !0),
									Object.defineProperty(m, a.key, a)
							}
						}
						return function (m, w, s) {
							return w && _(m.prototype, w), s && _(m, s), m
						}
					})(),
					l = function _(m, w, s) {
						m === null && (m = Function.prototype)
						var a = Object.getOwnPropertyDescriptor(m, w)
						if (a === void 0) {
							var v = Object.getPrototypeOf(m)
							return v === null ? void 0 : _(v, w, s)
						} else {
							if ("value" in a) return a.value
							var d = a.get
							return d === void 0 ? void 0 : d.call(s)
						}
					},
					h = i(28),
					p = g(h)
				function g(_) {
					return _ && _.__esModule ? _ : { default: _ }
				}
				function y(_, m) {
					if (!(_ instanceof m))
						throw new TypeError("Cannot call a class as a function")
				}
				function f(_, m) {
					if (!_)
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						)
					return m && (typeof m == "object" || typeof m == "function")
						? m
						: _
				}
				function u(_, m) {
					if (typeof m != "function" && m !== null)
						throw new TypeError(
							"Super expression must either be null or a function, not " +
								typeof m
						)
					;(_.prototype = Object.create(m && m.prototype, {
						constructor: {
							value: _,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					})),
						m &&
							(Object.setPrototypeOf
								? Object.setPrototypeOf(_, m)
								: (_.__proto__ = m))
				}
				var c = (function (_) {
					u(m, _)
					function m(w, s) {
						y(this, m)
						var a = f(
							this,
							(m.__proto__ || Object.getPrototypeOf(m)).call(
								this,
								w
							)
						)
						return (
							a.container.classList.add("ql-icon-picker"),
							[].forEach.call(
								a.container.querySelectorAll(".ql-picker-item"),
								function (v) {
									v.innerHTML =
										s[v.getAttribute("data-value") || ""]
								}
							),
							(a.defaultItem =
								a.container.querySelector(".ql-selected")),
							a.selectItem(a.defaultItem),
							a
						)
					}
					return (
						o(m, [
							{
								key: "selectItem",
								value: function (s, a) {
									l(
										m.prototype.__proto__ ||
											Object.getPrototypeOf(m.prototype),
										"selectItem",
										this
									).call(this, s, a),
										(s = s || this.defaultItem),
										(this.label.innerHTML = s.innerHTML)
								}
							}
						]),
						m
					)
				})(p.default)
				r.default = c
			},
			function (n, r, i) {
				Object.defineProperty(r, "__esModule", { value: !0 })
				var o = (function () {
					function p(g, y) {
						for (var f = 0; f < y.length; f++) {
							var u = y[f]
							;(u.enumerable = u.enumerable || !1),
								(u.configurable = !0),
								"value" in u && (u.writable = !0),
								Object.defineProperty(g, u.key, u)
						}
					}
					return function (g, y, f) {
						return y && p(g.prototype, y), f && p(g, f), g
					}
				})()
				function l(p, g) {
					if (!(p instanceof g))
						throw new TypeError("Cannot call a class as a function")
				}
				var h = (function () {
					function p(g, y) {
						var f = this
						l(this, p),
							(this.quill = g),
							(this.boundsContainer = y || document.body),
							(this.root = g.addContainer("ql-tooltip")),
							(this.root.innerHTML = this.constructor.TEMPLATE),
							this.quill.root === this.quill.scrollingContainer &&
								this.quill.root.addEventListener(
									"scroll",
									function () {
										f.root.style.marginTop =
											-1 * f.quill.root.scrollTop + "px"
									}
								),
							this.hide()
					}
					return (
						o(p, [
							{
								key: "hide",
								value: function () {
									this.root.classList.add("ql-hidden")
								}
							},
							{
								key: "position",
								value: function (y) {
									var f =
											y.left +
											y.width / 2 -
											this.root.offsetWidth / 2,
										u = y.bottom + this.quill.root.scrollTop
									;(this.root.style.left = f + "px"),
										(this.root.style.top = u + "px"),
										this.root.classList.remove("ql-flip")
									var c =
											this.boundsContainer.getBoundingClientRect(),
										_ = this.root.getBoundingClientRect(),
										m = 0
									if (
										(_.right > c.right &&
											((m = c.right - _.right),
											(this.root.style.left =
												f + m + "px")),
										_.left < c.left &&
											((m = c.left - _.left),
											(this.root.style.left =
												f + m + "px")),
										_.bottom > c.bottom)
									) {
										var w = _.bottom - _.top,
											s = y.bottom - y.top + w
										;(this.root.style.top = u - s + "px"),
											this.root.classList.add("ql-flip")
									}
									return m
								}
							},
							{
								key: "show",
								value: function () {
									this.root.classList.remove("ql-editing"),
										this.root.classList.remove("ql-hidden")
								}
							}
						]),
						p
					)
				})()
				r.default = h
			},
			function (n, r, i) {
				Object.defineProperty(r, "__esModule", { value: !0 })
				var o = (function () {
						function x(b, S) {
							var A = [],
								L = !0,
								M = !1,
								U = void 0
							try {
								for (
									var V = b[Symbol.iterator](), G;
									!(L = (G = V.next()).done) &&
									(A.push(G.value), !(S && A.length === S));
									L = !0
								);
							} catch (q) {
								;(M = !0), (U = q)
							} finally {
								try {
									!L && V.return && V.return()
								} finally {
									if (M) throw U
								}
							}
							return A
						}
						return function (b, S) {
							if (Array.isArray(b)) return b
							if (Symbol.iterator in Object(b)) return x(b, S)
							throw new TypeError(
								"Invalid attempt to destructure non-iterable instance"
							)
						}
					})(),
					l = function x(b, S, A) {
						b === null && (b = Function.prototype)
						var L = Object.getOwnPropertyDescriptor(b, S)
						if (L === void 0) {
							var M = Object.getPrototypeOf(b)
							return M === null ? void 0 : x(M, S, A)
						} else {
							if ("value" in L) return L.value
							var U = L.get
							return U === void 0 ? void 0 : U.call(A)
						}
					},
					h = (function () {
						function x(b, S) {
							for (var A = 0; A < S.length; A++) {
								var L = S[A]
								;(L.enumerable = L.enumerable || !1),
									(L.configurable = !0),
									"value" in L && (L.writable = !0),
									Object.defineProperty(b, L.key, L)
							}
						}
						return function (b, S, A) {
							return S && x(b.prototype, S), A && x(b, A), b
						}
					})(),
					p = i(3),
					g = v(p),
					y = i(8),
					f = v(y),
					u = i(43),
					c = v(u),
					_ = i(27),
					m = v(_),
					w = i(15),
					s = i(41),
					a = v(s)
				function v(x) {
					return x && x.__esModule ? x : { default: x }
				}
				function d(x, b) {
					if (!(x instanceof b))
						throw new TypeError("Cannot call a class as a function")
				}
				function E(x, b) {
					if (!x)
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						)
					return b && (typeof b == "object" || typeof b == "function")
						? b
						: x
				}
				function N(x, b) {
					if (typeof b != "function" && b !== null)
						throw new TypeError(
							"Super expression must either be null or a function, not " +
								typeof b
						)
					;(x.prototype = Object.create(b && b.prototype, {
						constructor: {
							value: x,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					})),
						b &&
							(Object.setPrototypeOf
								? Object.setPrototypeOf(x, b)
								: (x.__proto__ = b))
				}
				var k = [
						[{ header: ["1", "2", "3", !1] }],
						["bold", "italic", "underline", "link"],
						[{ list: "ordered" }, { list: "bullet" }],
						["clean"]
					],
					O = (function (x) {
						N(b, x)
						function b(S, A) {
							d(this, b),
								A.modules.toolbar != null &&
									A.modules.toolbar.container == null &&
									(A.modules.toolbar.container = k)
							var L = E(
								this,
								(b.__proto__ || Object.getPrototypeOf(b)).call(
									this,
									S,
									A
								)
							)
							return L.quill.container.classList.add("ql-snow"), L
						}
						return (
							h(b, [
								{
									key: "extendToolbar",
									value: function (A) {
										A.container.classList.add("ql-snow"),
											this.buildButtons(
												[].slice.call(
													A.container.querySelectorAll(
														"button"
													)
												),
												a.default
											),
											this.buildPickers(
												[].slice.call(
													A.container.querySelectorAll(
														"select"
													)
												),
												a.default
											),
											(this.tooltip = new j(
												this.quill,
												this.options.bounds
											)),
											A.container.querySelector(
												".ql-link"
											) &&
												this.quill.keyboard.addBinding(
													{ key: "K", shortKey: !0 },
													function (L, M) {
														A.handlers.link.call(
															A,
															!M.format.link
														)
													}
												)
									}
								}
							]),
							b
						)
					})(c.default)
				O.DEFAULTS = (0, g.default)(!0, {}, c.default.DEFAULTS, {
					modules: {
						toolbar: {
							handlers: {
								link: function (b) {
									if (b) {
										var S = this.quill.getSelection()
										if (S == null || S.length == 0) return
										var A = this.quill.getText(S)
										;/^\S+@\S+\.\S+$/.test(A) &&
											A.indexOf("mailto:") !== 0 &&
											(A = "mailto:" + A)
										var L = this.quill.theme.tooltip
										L.edit("link", A)
									} else this.quill.format("link", !1)
								}
							}
						}
					}
				})
				var j = (function (x) {
					N(b, x)
					function b(S, A) {
						d(this, b)
						var L = E(
							this,
							(b.__proto__ || Object.getPrototypeOf(b)).call(
								this,
								S,
								A
							)
						)
						return (
							(L.preview = L.root.querySelector("a.ql-preview")),
							L
						)
					}
					return (
						h(b, [
							{
								key: "listen",
								value: function () {
									var A = this
									l(
										b.prototype.__proto__ ||
											Object.getPrototypeOf(b.prototype),
										"listen",
										this
									).call(this),
										this.root
											.querySelector("a.ql-action")
											.addEventListener(
												"click",
												function (L) {
													A.root.classList.contains(
														"ql-editing"
													)
														? A.save()
														: A.edit(
																"link",
																A.preview
																	.textContent
															),
														L.preventDefault()
												}
											),
										this.root
											.querySelector("a.ql-remove")
											.addEventListener(
												"click",
												function (L) {
													if (A.linkRange != null) {
														var M = A.linkRange
														A.restoreFocus(),
															A.quill.formatText(
																M,
																"link",
																!1,
																f.default
																	.sources
																	.USER
															),
															delete A.linkRange
													}
													L.preventDefault(), A.hide()
												}
											),
										this.quill.on(
											f.default.events.SELECTION_CHANGE,
											function (L, M, U) {
												if (L != null) {
													if (
														L.length === 0 &&
														U ===
															f.default.sources
																.USER
													) {
														var V =
																A.quill.scroll.descendant(
																	m.default,
																	L.index
																),
															G = o(V, 2),
															q = G[0],
															R = G[1]
														if (q != null) {
															A.linkRange =
																new w.Range(
																	L.index - R,
																	q.length()
																)
															var T =
																m.default.formats(
																	q.domNode
																)
															;(A.preview.textContent =
																T),
																A.preview.setAttribute(
																	"href",
																	T
																),
																A.show(),
																A.position(
																	A.quill.getBounds(
																		A.linkRange
																	)
																)
															return
														}
													} else delete A.linkRange
													A.hide()
												}
											}
										)
								}
							},
							{
								key: "show",
								value: function () {
									l(
										b.prototype.__proto__ ||
											Object.getPrototypeOf(b.prototype),
										"show",
										this
									).call(this),
										this.root.removeAttribute("data-mode")
								}
							}
						]),
						b
					)
				})(u.BaseTooltip)
				;(j.TEMPLATE = [
					'<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>',
					'<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">',
					'<a class="ql-action"></a>',
					'<a class="ql-remove"></a>'
				].join("")),
					(r.default = O)
			},
			function (n, r, i) {
				Object.defineProperty(r, "__esModule", { value: !0 })
				var o = i(29),
					l = W(o),
					h = i(36),
					p = i(38),
					g = i(64),
					y = i(65),
					f = W(y),
					u = i(66),
					c = W(u),
					_ = i(67),
					m = W(_),
					w = i(37),
					s = i(26),
					a = i(39),
					v = i(40),
					d = i(56),
					E = W(d),
					N = i(68),
					k = W(N),
					O = i(27),
					j = W(O),
					x = i(69),
					b = W(x),
					S = i(70),
					A = W(S),
					L = i(71),
					M = W(L),
					U = i(72),
					V = W(U),
					G = i(73),
					q = W(G),
					R = i(13),
					T = W(R),
					D = i(74),
					F = W(D),
					K = i(75),
					H = W(K),
					C = i(57),
					$ = W(C),
					Q = i(41),
					Y = W(Q),
					J = i(28),
					re = W(J),
					le = i(59),
					ae = W(le),
					ue = i(60),
					he = W(ue),
					Ke = i(61),
					je = W(Ke),
					P = i(108),
					I = W(P),
					z = i(62),
					Z = W(z)
				function W(X) {
					return X && X.__esModule ? X : { default: X }
				}
				l.default.register(
					{
						"attributors/attribute/direction": p.DirectionAttribute,
						"attributors/class/align": h.AlignClass,
						"attributors/class/background": w.BackgroundClass,
						"attributors/class/color": s.ColorClass,
						"attributors/class/direction": p.DirectionClass,
						"attributors/class/font": a.FontClass,
						"attributors/class/size": v.SizeClass,
						"attributors/style/align": h.AlignStyle,
						"attributors/style/background": w.BackgroundStyle,
						"attributors/style/color": s.ColorStyle,
						"attributors/style/direction": p.DirectionStyle,
						"attributors/style/font": a.FontStyle,
						"attributors/style/size": v.SizeStyle
					},
					!0
				),
					l.default.register(
						{
							"formats/align": h.AlignClass,
							"formats/direction": p.DirectionClass,
							"formats/indent": g.IndentClass,
							"formats/background": w.BackgroundStyle,
							"formats/color": s.ColorStyle,
							"formats/font": a.FontClass,
							"formats/size": v.SizeClass,
							"formats/blockquote": f.default,
							"formats/code-block": T.default,
							"formats/header": c.default,
							"formats/list": m.default,
							"formats/bold": E.default,
							"formats/code": R.Code,
							"formats/italic": k.default,
							"formats/link": j.default,
							"formats/script": b.default,
							"formats/strike": A.default,
							"formats/underline": M.default,
							"formats/image": V.default,
							"formats/video": q.default,
							"formats/list/item": _.ListItem,
							"modules/formula": F.default,
							"modules/syntax": H.default,
							"modules/toolbar": $.default,
							"themes/bubble": I.default,
							"themes/snow": Z.default,
							"ui/icons": Y.default,
							"ui/picker": re.default,
							"ui/icon-picker": he.default,
							"ui/color-picker": ae.default,
							"ui/tooltip": je.default
						},
						!0
					),
					(r.default = l.default)
			},
			function (n, r, i) {
				Object.defineProperty(r, "__esModule", { value: !0 }),
					(r.IndentClass = void 0)
				var o = (function () {
						function m(w, s) {
							for (var a = 0; a < s.length; a++) {
								var v = s[a]
								;(v.enumerable = v.enumerable || !1),
									(v.configurable = !0),
									"value" in v && (v.writable = !0),
									Object.defineProperty(w, v.key, v)
							}
						}
						return function (w, s, a) {
							return s && m(w.prototype, s), a && m(w, a), w
						}
					})(),
					l = function m(w, s, a) {
						w === null && (w = Function.prototype)
						var v = Object.getOwnPropertyDescriptor(w, s)
						if (v === void 0) {
							var d = Object.getPrototypeOf(w)
							return d === null ? void 0 : m(d, s, a)
						} else {
							if ("value" in v) return v.value
							var E = v.get
							return E === void 0 ? void 0 : E.call(a)
						}
					},
					h = i(0),
					p = g(h)
				function g(m) {
					return m && m.__esModule ? m : { default: m }
				}
				function y(m, w) {
					if (!(m instanceof w))
						throw new TypeError("Cannot call a class as a function")
				}
				function f(m, w) {
					if (!m)
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						)
					return w && (typeof w == "object" || typeof w == "function")
						? w
						: m
				}
				function u(m, w) {
					if (typeof w != "function" && w !== null)
						throw new TypeError(
							"Super expression must either be null or a function, not " +
								typeof w
						)
					;(m.prototype = Object.create(w && w.prototype, {
						constructor: {
							value: m,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					})),
						w &&
							(Object.setPrototypeOf
								? Object.setPrototypeOf(m, w)
								: (m.__proto__ = w))
				}
				var c = (function (m) {
						u(w, m)
						function w() {
							return (
								y(this, w),
								f(
									this,
									(
										w.__proto__ || Object.getPrototypeOf(w)
									).apply(this, arguments)
								)
							)
						}
						return (
							o(w, [
								{
									key: "add",
									value: function (a, v) {
										if (v === "+1" || v === "-1") {
											var d = this.value(a) || 0
											v = v === "+1" ? d + 1 : d - 1
										}
										return v === 0
											? (this.remove(a), !0)
											: l(
													w.prototype.__proto__ ||
														Object.getPrototypeOf(
															w.prototype
														),
													"add",
													this
												).call(this, a, v)
									}
								},
								{
									key: "canAdd",
									value: function (a, v) {
										return (
											l(
												w.prototype.__proto__ ||
													Object.getPrototypeOf(
														w.prototype
													),
												"canAdd",
												this
											).call(this, a, v) ||
											l(
												w.prototype.__proto__ ||
													Object.getPrototypeOf(
														w.prototype
													),
												"canAdd",
												this
											).call(this, a, parseInt(v))
										)
									}
								},
								{
									key: "value",
									value: function (a) {
										return (
											parseInt(
												l(
													w.prototype.__proto__ ||
														Object.getPrototypeOf(
															w.prototype
														),
													"value",
													this
												).call(this, a)
											) || void 0
										)
									}
								}
							]),
							w
						)
					})(p.default.Attributor.Class),
					_ = new c("indent", "ql-indent", {
						scope: p.default.Scope.BLOCK,
						whitelist: [1, 2, 3, 4, 5, 6, 7, 8]
					})
				r.IndentClass = _
			},
			function (n, r, i) {
				Object.defineProperty(r, "__esModule", { value: !0 })
				var o = i(4),
					l = h(o)
				function h(u) {
					return u && u.__esModule ? u : { default: u }
				}
				function p(u, c) {
					if (!(u instanceof c))
						throw new TypeError("Cannot call a class as a function")
				}
				function g(u, c) {
					if (!u)
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						)
					return c && (typeof c == "object" || typeof c == "function")
						? c
						: u
				}
				function y(u, c) {
					if (typeof c != "function" && c !== null)
						throw new TypeError(
							"Super expression must either be null or a function, not " +
								typeof c
						)
					;(u.prototype = Object.create(c && c.prototype, {
						constructor: {
							value: u,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					})),
						c &&
							(Object.setPrototypeOf
								? Object.setPrototypeOf(u, c)
								: (u.__proto__ = c))
				}
				var f = (function (u) {
					y(c, u)
					function c() {
						return (
							p(this, c),
							g(
								this,
								(c.__proto__ || Object.getPrototypeOf(c)).apply(
									this,
									arguments
								)
							)
						)
					}
					return c
				})(l.default)
				;(f.blotName = "blockquote"),
					(f.tagName = "blockquote"),
					(r.default = f)
			},
			function (n, r, i) {
				Object.defineProperty(r, "__esModule", { value: !0 })
				var o = (function () {
						function c(_, m) {
							for (var w = 0; w < m.length; w++) {
								var s = m[w]
								;(s.enumerable = s.enumerable || !1),
									(s.configurable = !0),
									"value" in s && (s.writable = !0),
									Object.defineProperty(_, s.key, s)
							}
						}
						return function (_, m, w) {
							return m && c(_.prototype, m), w && c(_, w), _
						}
					})(),
					l = i(4),
					h = p(l)
				function p(c) {
					return c && c.__esModule ? c : { default: c }
				}
				function g(c, _) {
					if (!(c instanceof _))
						throw new TypeError("Cannot call a class as a function")
				}
				function y(c, _) {
					if (!c)
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						)
					return _ && (typeof _ == "object" || typeof _ == "function")
						? _
						: c
				}
				function f(c, _) {
					if (typeof _ != "function" && _ !== null)
						throw new TypeError(
							"Super expression must either be null or a function, not " +
								typeof _
						)
					;(c.prototype = Object.create(_ && _.prototype, {
						constructor: {
							value: c,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					})),
						_ &&
							(Object.setPrototypeOf
								? Object.setPrototypeOf(c, _)
								: (c.__proto__ = _))
				}
				var u = (function (c) {
					f(_, c)
					function _() {
						return (
							g(this, _),
							y(
								this,
								(_.__proto__ || Object.getPrototypeOf(_)).apply(
									this,
									arguments
								)
							)
						)
					}
					return (
						o(_, null, [
							{
								key: "formats",
								value: function (w) {
									return this.tagName.indexOf(w.tagName) + 1
								}
							}
						]),
						_
					)
				})(h.default)
				;(u.blotName = "header"),
					(u.tagName = ["H1", "H2", "H3", "H4", "H5", "H6"]),
					(r.default = u)
			},
			function (n, r, i) {
				Object.defineProperty(r, "__esModule", { value: !0 }),
					(r.default = r.ListItem = void 0)
				var o = (function () {
						function d(E, N) {
							for (var k = 0; k < N.length; k++) {
								var O = N[k]
								;(O.enumerable = O.enumerable || !1),
									(O.configurable = !0),
									"value" in O && (O.writable = !0),
									Object.defineProperty(E, O.key, O)
							}
						}
						return function (E, N, k) {
							return N && d(E.prototype, N), k && d(E, k), E
						}
					})(),
					l = function d(E, N, k) {
						E === null && (E = Function.prototype)
						var O = Object.getOwnPropertyDescriptor(E, N)
						if (O === void 0) {
							var j = Object.getPrototypeOf(E)
							return j === null ? void 0 : d(j, N, k)
						} else {
							if ("value" in O) return O.value
							var x = O.get
							return x === void 0 ? void 0 : x.call(k)
						}
					},
					h = i(0),
					p = c(h),
					g = i(4),
					y = c(g),
					f = i(25),
					u = c(f)
				function c(d) {
					return d && d.__esModule ? d : { default: d }
				}
				function _(d, E, N) {
					return (
						E in d
							? Object.defineProperty(d, E, {
									value: N,
									enumerable: !0,
									configurable: !0,
									writable: !0
								})
							: (d[E] = N),
						d
					)
				}
				function m(d, E) {
					if (!(d instanceof E))
						throw new TypeError("Cannot call a class as a function")
				}
				function w(d, E) {
					if (!d)
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						)
					return E && (typeof E == "object" || typeof E == "function")
						? E
						: d
				}
				function s(d, E) {
					if (typeof E != "function" && E !== null)
						throw new TypeError(
							"Super expression must either be null or a function, not " +
								typeof E
						)
					;(d.prototype = Object.create(E && E.prototype, {
						constructor: {
							value: d,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					})),
						E &&
							(Object.setPrototypeOf
								? Object.setPrototypeOf(d, E)
								: (d.__proto__ = E))
				}
				var a = (function (d) {
					s(E, d)
					function E() {
						return (
							m(this, E),
							w(
								this,
								(E.__proto__ || Object.getPrototypeOf(E)).apply(
									this,
									arguments
								)
							)
						)
					}
					return (
						o(
							E,
							[
								{
									key: "format",
									value: function (k, O) {
										k === v.blotName && !O
											? this.replaceWith(
													p.default.create(
														this.statics.scope
													)
												)
											: l(
													E.prototype.__proto__ ||
														Object.getPrototypeOf(
															E.prototype
														),
													"format",
													this
												).call(this, k, O)
									}
								},
								{
									key: "remove",
									value: function () {
										this.prev == null && this.next == null
											? this.parent.remove()
											: l(
													E.prototype.__proto__ ||
														Object.getPrototypeOf(
															E.prototype
														),
													"remove",
													this
												).call(this)
									}
								},
								{
									key: "replaceWith",
									value: function (k, O) {
										return (
											this.parent.isolate(
												this.offset(this.parent),
												this.length()
											),
											k === this.parent.statics.blotName
												? (this.parent.replaceWith(
														k,
														O
													),
													this)
												: (this.parent.unwrap(),
													l(
														E.prototype.__proto__ ||
															Object.getPrototypeOf(
																E.prototype
															),
														"replaceWith",
														this
													).call(this, k, O))
										)
									}
								}
							],
							[
								{
									key: "formats",
									value: function (k) {
										return k.tagName === this.tagName
											? void 0
											: l(
													E.__proto__ ||
														Object.getPrototypeOf(
															E
														),
													"formats",
													this
												).call(this, k)
									}
								}
							]
						),
						E
					)
				})(y.default)
				;(a.blotName = "list-item"), (a.tagName = "LI")
				var v = (function (d) {
					s(E, d),
						o(E, null, [
							{
								key: "create",
								value: function (k) {
									var O = k === "ordered" ? "OL" : "UL",
										j = l(
											E.__proto__ ||
												Object.getPrototypeOf(E),
											"create",
											this
										).call(this, O)
									return (
										(k === "checked" ||
											k === "unchecked") &&
											j.setAttribute(
												"data-checked",
												k === "checked"
											),
										j
									)
								}
							},
							{
								key: "formats",
								value: function (k) {
									if (k.tagName === "OL") return "ordered"
									if (k.tagName === "UL")
										return k.hasAttribute("data-checked")
											? k.getAttribute("data-checked") ===
												"true"
												? "checked"
												: "unchecked"
											: "bullet"
								}
							}
						])
					function E(N) {
						m(this, E)
						var k = w(
								this,
								(E.__proto__ || Object.getPrototypeOf(E)).call(
									this,
									N
								)
							),
							O = function (x) {
								if (x.target.parentNode === N) {
									var b = k.statics.formats(N),
										S = p.default.find(x.target)
									b === "checked"
										? S.format("list", "unchecked")
										: b === "unchecked" &&
											S.format("list", "checked")
								}
							}
						return (
							N.addEventListener("touchstart", O),
							N.addEventListener("mousedown", O),
							k
						)
					}
					return (
						o(E, [
							{
								key: "format",
								value: function (k, O) {
									this.children.length > 0 &&
										this.children.tail.format(k, O)
								}
							},
							{
								key: "formats",
								value: function () {
									return _(
										{},
										this.statics.blotName,
										this.statics.formats(this.domNode)
									)
								}
							},
							{
								key: "insertBefore",
								value: function (k, O) {
									if (k instanceof a)
										l(
											E.prototype.__proto__ ||
												Object.getPrototypeOf(
													E.prototype
												),
											"insertBefore",
											this
										).call(this, k, O)
									else {
										var j =
												O == null
													? this.length()
													: O.offset(this),
											x = this.split(j)
										x.parent.insertBefore(k, x)
									}
								}
							},
							{
								key: "optimize",
								value: function (k) {
									l(
										E.prototype.__proto__ ||
											Object.getPrototypeOf(E.prototype),
										"optimize",
										this
									).call(this, k)
									var O = this.next
									O != null &&
										O.prev === this &&
										O.statics.blotName ===
											this.statics.blotName &&
										O.domNode.tagName ===
											this.domNode.tagName &&
										O.domNode.getAttribute(
											"data-checked"
										) ===
											this.domNode.getAttribute(
												"data-checked"
											) &&
										(O.moveChildren(this), O.remove())
								}
							},
							{
								key: "replace",
								value: function (k) {
									if (
										k.statics.blotName !==
										this.statics.blotName
									) {
										var O = p.default.create(
											this.statics.defaultChild
										)
										k.moveChildren(O), this.appendChild(O)
									}
									l(
										E.prototype.__proto__ ||
											Object.getPrototypeOf(E.prototype),
										"replace",
										this
									).call(this, k)
								}
							}
						]),
						E
					)
				})(u.default)
				;(v.blotName = "list"),
					(v.scope = p.default.Scope.BLOCK_BLOT),
					(v.tagName = ["OL", "UL"]),
					(v.defaultChild = "list-item"),
					(v.allowedChildren = [a]),
					(r.ListItem = a),
					(r.default = v)
			},
			function (n, r, i) {
				Object.defineProperty(r, "__esModule", { value: !0 })
				var o = i(56),
					l = h(o)
				function h(u) {
					return u && u.__esModule ? u : { default: u }
				}
				function p(u, c) {
					if (!(u instanceof c))
						throw new TypeError("Cannot call a class as a function")
				}
				function g(u, c) {
					if (!u)
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						)
					return c && (typeof c == "object" || typeof c == "function")
						? c
						: u
				}
				function y(u, c) {
					if (typeof c != "function" && c !== null)
						throw new TypeError(
							"Super expression must either be null or a function, not " +
								typeof c
						)
					;(u.prototype = Object.create(c && c.prototype, {
						constructor: {
							value: u,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					})),
						c &&
							(Object.setPrototypeOf
								? Object.setPrototypeOf(u, c)
								: (u.__proto__ = c))
				}
				var f = (function (u) {
					y(c, u)
					function c() {
						return (
							p(this, c),
							g(
								this,
								(c.__proto__ || Object.getPrototypeOf(c)).apply(
									this,
									arguments
								)
							)
						)
					}
					return c
				})(l.default)
				;(f.blotName = "italic"),
					(f.tagName = ["EM", "I"]),
					(r.default = f)
			},
			function (n, r, i) {
				Object.defineProperty(r, "__esModule", { value: !0 })
				var o = (function () {
						function _(m, w) {
							for (var s = 0; s < w.length; s++) {
								var a = w[s]
								;(a.enumerable = a.enumerable || !1),
									(a.configurable = !0),
									"value" in a && (a.writable = !0),
									Object.defineProperty(m, a.key, a)
							}
						}
						return function (m, w, s) {
							return w && _(m.prototype, w), s && _(m, s), m
						}
					})(),
					l = function _(m, w, s) {
						m === null && (m = Function.prototype)
						var a = Object.getOwnPropertyDescriptor(m, w)
						if (a === void 0) {
							var v = Object.getPrototypeOf(m)
							return v === null ? void 0 : _(v, w, s)
						} else {
							if ("value" in a) return a.value
							var d = a.get
							return d === void 0 ? void 0 : d.call(s)
						}
					},
					h = i(6),
					p = g(h)
				function g(_) {
					return _ && _.__esModule ? _ : { default: _ }
				}
				function y(_, m) {
					if (!(_ instanceof m))
						throw new TypeError("Cannot call a class as a function")
				}
				function f(_, m) {
					if (!_)
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						)
					return m && (typeof m == "object" || typeof m == "function")
						? m
						: _
				}
				function u(_, m) {
					if (typeof m != "function" && m !== null)
						throw new TypeError(
							"Super expression must either be null or a function, not " +
								typeof m
						)
					;(_.prototype = Object.create(m && m.prototype, {
						constructor: {
							value: _,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					})),
						m &&
							(Object.setPrototypeOf
								? Object.setPrototypeOf(_, m)
								: (_.__proto__ = m))
				}
				var c = (function (_) {
					u(m, _)
					function m() {
						return (
							y(this, m),
							f(
								this,
								(m.__proto__ || Object.getPrototypeOf(m)).apply(
									this,
									arguments
								)
							)
						)
					}
					return (
						o(m, null, [
							{
								key: "create",
								value: function (s) {
									return s === "super"
										? document.createElement("sup")
										: s === "sub"
											? document.createElement("sub")
											: l(
													m.__proto__ ||
														Object.getPrototypeOf(
															m
														),
													"create",
													this
												).call(this, s)
								}
							},
							{
								key: "formats",
								value: function (s) {
									if (s.tagName === "SUB") return "sub"
									if (s.tagName === "SUP") return "super"
								}
							}
						]),
						m
					)
				})(p.default)
				;(c.blotName = "script"),
					(c.tagName = ["SUB", "SUP"]),
					(r.default = c)
			},
			function (n, r, i) {
				Object.defineProperty(r, "__esModule", { value: !0 })
				var o = i(6),
					l = h(o)
				function h(u) {
					return u && u.__esModule ? u : { default: u }
				}
				function p(u, c) {
					if (!(u instanceof c))
						throw new TypeError("Cannot call a class as a function")
				}
				function g(u, c) {
					if (!u)
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						)
					return c && (typeof c == "object" || typeof c == "function")
						? c
						: u
				}
				function y(u, c) {
					if (typeof c != "function" && c !== null)
						throw new TypeError(
							"Super expression must either be null or a function, not " +
								typeof c
						)
					;(u.prototype = Object.create(c && c.prototype, {
						constructor: {
							value: u,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					})),
						c &&
							(Object.setPrototypeOf
								? Object.setPrototypeOf(u, c)
								: (u.__proto__ = c))
				}
				var f = (function (u) {
					y(c, u)
					function c() {
						return (
							p(this, c),
							g(
								this,
								(c.__proto__ || Object.getPrototypeOf(c)).apply(
									this,
									arguments
								)
							)
						)
					}
					return c
				})(l.default)
				;(f.blotName = "strike"), (f.tagName = "S"), (r.default = f)
			},
			function (n, r, i) {
				Object.defineProperty(r, "__esModule", { value: !0 })
				var o = i(6),
					l = h(o)
				function h(u) {
					return u && u.__esModule ? u : { default: u }
				}
				function p(u, c) {
					if (!(u instanceof c))
						throw new TypeError("Cannot call a class as a function")
				}
				function g(u, c) {
					if (!u)
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						)
					return c && (typeof c == "object" || typeof c == "function")
						? c
						: u
				}
				function y(u, c) {
					if (typeof c != "function" && c !== null)
						throw new TypeError(
							"Super expression must either be null or a function, not " +
								typeof c
						)
					;(u.prototype = Object.create(c && c.prototype, {
						constructor: {
							value: u,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					})),
						c &&
							(Object.setPrototypeOf
								? Object.setPrototypeOf(u, c)
								: (u.__proto__ = c))
				}
				var f = (function (u) {
					y(c, u)
					function c() {
						return (
							p(this, c),
							g(
								this,
								(c.__proto__ || Object.getPrototypeOf(c)).apply(
									this,
									arguments
								)
							)
						)
					}
					return c
				})(l.default)
				;(f.blotName = "underline"), (f.tagName = "U"), (r.default = f)
			},
			function (n, r, i) {
				Object.defineProperty(r, "__esModule", { value: !0 })
				var o = (function () {
						function w(s, a) {
							for (var v = 0; v < a.length; v++) {
								var d = a[v]
								;(d.enumerable = d.enumerable || !1),
									(d.configurable = !0),
									"value" in d && (d.writable = !0),
									Object.defineProperty(s, d.key, d)
							}
						}
						return function (s, a, v) {
							return a && w(s.prototype, a), v && w(s, v), s
						}
					})(),
					l = function w(s, a, v) {
						s === null && (s = Function.prototype)
						var d = Object.getOwnPropertyDescriptor(s, a)
						if (d === void 0) {
							var E = Object.getPrototypeOf(s)
							return E === null ? void 0 : w(E, a, v)
						} else {
							if ("value" in d) return d.value
							var N = d.get
							return N === void 0 ? void 0 : N.call(v)
						}
					},
					h = i(0),
					p = y(h),
					g = i(27)
				function y(w) {
					return w && w.__esModule ? w : { default: w }
				}
				function f(w, s) {
					if (!(w instanceof s))
						throw new TypeError("Cannot call a class as a function")
				}
				function u(w, s) {
					if (!w)
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						)
					return s && (typeof s == "object" || typeof s == "function")
						? s
						: w
				}
				function c(w, s) {
					if (typeof s != "function" && s !== null)
						throw new TypeError(
							"Super expression must either be null or a function, not " +
								typeof s
						)
					;(w.prototype = Object.create(s && s.prototype, {
						constructor: {
							value: w,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					})),
						s &&
							(Object.setPrototypeOf
								? Object.setPrototypeOf(w, s)
								: (w.__proto__ = s))
				}
				var _ = ["alt", "height", "width"],
					m = (function (w) {
						c(s, w)
						function s() {
							return (
								f(this, s),
								u(
									this,
									(
										s.__proto__ || Object.getPrototypeOf(s)
									).apply(this, arguments)
								)
							)
						}
						return (
							o(
								s,
								[
									{
										key: "format",
										value: function (v, d) {
											_.indexOf(v) > -1
												? d
													? this.domNode.setAttribute(
															v,
															d
														)
													: this.domNode.removeAttribute(
															v
														)
												: l(
														s.prototype.__proto__ ||
															Object.getPrototypeOf(
																s.prototype
															),
														"format",
														this
													).call(this, v, d)
										}
									}
								],
								[
									{
										key: "create",
										value: function (v) {
											var d = l(
												s.__proto__ ||
													Object.getPrototypeOf(s),
												"create",
												this
											).call(this, v)
											return (
												typeof v == "string" &&
													d.setAttribute(
														"src",
														this.sanitize(v)
													),
												d
											)
										}
									},
									{
										key: "formats",
										value: function (v) {
											return _.reduce(function (d, E) {
												return (
													v.hasAttribute(E) &&
														(d[E] =
															v.getAttribute(E)),
													d
												)
											}, {})
										}
									},
									{
										key: "match",
										value: function (v) {
											return (
												/\.(jpe?g|gif|png)$/.test(v) ||
												/^data:image\/.+;base64/.test(v)
											)
										}
									},
									{
										key: "sanitize",
										value: function (v) {
											return (0, g.sanitize)(v, [
												"http",
												"https",
												"data"
											])
												? v
												: "//:0"
										}
									},
									{
										key: "value",
										value: function (v) {
											return v.getAttribute("src")
										}
									}
								]
							),
							s
						)
					})(p.default.Embed)
				;(m.blotName = "image"), (m.tagName = "IMG"), (r.default = m)
			},
			function (n, r, i) {
				Object.defineProperty(r, "__esModule", { value: !0 })
				var o = (function () {
						function w(s, a) {
							for (var v = 0; v < a.length; v++) {
								var d = a[v]
								;(d.enumerable = d.enumerable || !1),
									(d.configurable = !0),
									"value" in d && (d.writable = !0),
									Object.defineProperty(s, d.key, d)
							}
						}
						return function (s, a, v) {
							return a && w(s.prototype, a), v && w(s, v), s
						}
					})(),
					l = function w(s, a, v) {
						s === null && (s = Function.prototype)
						var d = Object.getOwnPropertyDescriptor(s, a)
						if (d === void 0) {
							var E = Object.getPrototypeOf(s)
							return E === null ? void 0 : w(E, a, v)
						} else {
							if ("value" in d) return d.value
							var N = d.get
							return N === void 0 ? void 0 : N.call(v)
						}
					},
					h = i(4),
					p = i(27),
					g = y(p)
				function y(w) {
					return w && w.__esModule ? w : { default: w }
				}
				function f(w, s) {
					if (!(w instanceof s))
						throw new TypeError("Cannot call a class as a function")
				}
				function u(w, s) {
					if (!w)
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						)
					return s && (typeof s == "object" || typeof s == "function")
						? s
						: w
				}
				function c(w, s) {
					if (typeof s != "function" && s !== null)
						throw new TypeError(
							"Super expression must either be null or a function, not " +
								typeof s
						)
					;(w.prototype = Object.create(s && s.prototype, {
						constructor: {
							value: w,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					})),
						s &&
							(Object.setPrototypeOf
								? Object.setPrototypeOf(w, s)
								: (w.__proto__ = s))
				}
				var _ = ["height", "width"],
					m = (function (w) {
						c(s, w)
						function s() {
							return (
								f(this, s),
								u(
									this,
									(
										s.__proto__ || Object.getPrototypeOf(s)
									).apply(this, arguments)
								)
							)
						}
						return (
							o(
								s,
								[
									{
										key: "format",
										value: function (v, d) {
											_.indexOf(v) > -1
												? d
													? this.domNode.setAttribute(
															v,
															d
														)
													: this.domNode.removeAttribute(
															v
														)
												: l(
														s.prototype.__proto__ ||
															Object.getPrototypeOf(
																s.prototype
															),
														"format",
														this
													).call(this, v, d)
										}
									}
								],
								[
									{
										key: "create",
										value: function (v) {
											var d = l(
												s.__proto__ ||
													Object.getPrototypeOf(s),
												"create",
												this
											).call(this, v)
											return (
												d.setAttribute(
													"frameborder",
													"0"
												),
												d.setAttribute(
													"allowfullscreen",
													!0
												),
												d.setAttribute(
													"src",
													this.sanitize(v)
												),
												d
											)
										}
									},
									{
										key: "formats",
										value: function (v) {
											return _.reduce(function (d, E) {
												return (
													v.hasAttribute(E) &&
														(d[E] =
															v.getAttribute(E)),
													d
												)
											}, {})
										}
									},
									{
										key: "sanitize",
										value: function (v) {
											return g.default.sanitize(v)
										}
									},
									{
										key: "value",
										value: function (v) {
											return v.getAttribute("src")
										}
									}
								]
							),
							s
						)
					})(h.BlockEmbed)
				;(m.blotName = "video"),
					(m.className = "ql-video"),
					(m.tagName = "IFRAME"),
					(r.default = m)
			},
			function (n, r, i) {
				Object.defineProperty(r, "__esModule", { value: !0 }),
					(r.default = r.FormulaBlot = void 0)
				var o = (function () {
						function v(d, E) {
							for (var N = 0; N < E.length; N++) {
								var k = E[N]
								;(k.enumerable = k.enumerable || !1),
									(k.configurable = !0),
									"value" in k && (k.writable = !0),
									Object.defineProperty(d, k.key, k)
							}
						}
						return function (d, E, N) {
							return E && v(d.prototype, E), N && v(d, N), d
						}
					})(),
					l = function v(d, E, N) {
						d === null && (d = Function.prototype)
						var k = Object.getOwnPropertyDescriptor(d, E)
						if (k === void 0) {
							var O = Object.getPrototypeOf(d)
							return O === null ? void 0 : v(O, E, N)
						} else {
							if ("value" in k) return k.value
							var j = k.get
							return j === void 0 ? void 0 : j.call(N)
						}
					},
					h = i(35),
					p = c(h),
					g = i(5),
					y = c(g),
					f = i(9),
					u = c(f)
				function c(v) {
					return v && v.__esModule ? v : { default: v }
				}
				function _(v, d) {
					if (!(v instanceof d))
						throw new TypeError("Cannot call a class as a function")
				}
				function m(v, d) {
					if (!v)
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						)
					return d && (typeof d == "object" || typeof d == "function")
						? d
						: v
				}
				function w(v, d) {
					if (typeof d != "function" && d !== null)
						throw new TypeError(
							"Super expression must either be null or a function, not " +
								typeof d
						)
					;(v.prototype = Object.create(d && d.prototype, {
						constructor: {
							value: v,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					})),
						d &&
							(Object.setPrototypeOf
								? Object.setPrototypeOf(v, d)
								: (v.__proto__ = d))
				}
				var s = (function (v) {
					w(d, v)
					function d() {
						return (
							_(this, d),
							m(
								this,
								(d.__proto__ || Object.getPrototypeOf(d)).apply(
									this,
									arguments
								)
							)
						)
					}
					return (
						o(d, null, [
							{
								key: "create",
								value: function (N) {
									var k = l(
										d.__proto__ || Object.getPrototypeOf(d),
										"create",
										this
									).call(this, N)
									return (
										typeof N == "string" &&
											(window.katex.render(N, k, {
												throwOnError: !1,
												errorColor: "#f00"
											}),
											k.setAttribute("data-value", N)),
										k
									)
								}
							},
							{
								key: "value",
								value: function (N) {
									return N.getAttribute("data-value")
								}
							}
						]),
						d
					)
				})(p.default)
				;(s.blotName = "formula"),
					(s.className = "ql-formula"),
					(s.tagName = "SPAN")
				var a = (function (v) {
					w(d, v),
						o(d, null, [
							{
								key: "register",
								value: function () {
									y.default.register(s, !0)
								}
							}
						])
					function d() {
						_(this, d)
						var E = m(
							this,
							(d.__proto__ || Object.getPrototypeOf(d)).call(this)
						)
						if (window.katex == null)
							throw new Error("Formula module requires KaTeX.")
						return E
					}
					return d
				})(u.default)
				;(r.FormulaBlot = s), (r.default = a)
			},
			function (n, r, i) {
				Object.defineProperty(r, "__esModule", { value: !0 }),
					(r.default = r.CodeToken = r.CodeBlock = void 0)
				var o = (function () {
						function N(k, O) {
							for (var j = 0; j < O.length; j++) {
								var x = O[j]
								;(x.enumerable = x.enumerable || !1),
									(x.configurable = !0),
									"value" in x && (x.writable = !0),
									Object.defineProperty(k, x.key, x)
							}
						}
						return function (k, O, j) {
							return O && N(k.prototype, O), j && N(k, j), k
						}
					})(),
					l = function N(k, O, j) {
						k === null && (k = Function.prototype)
						var x = Object.getOwnPropertyDescriptor(k, O)
						if (x === void 0) {
							var b = Object.getPrototypeOf(k)
							return b === null ? void 0 : N(b, O, j)
						} else {
							if ("value" in x) return x.value
							var S = x.get
							return S === void 0 ? void 0 : S.call(j)
						}
					},
					h = i(0),
					p = m(h),
					g = i(5),
					y = m(g),
					f = i(9),
					u = m(f),
					c = i(13),
					_ = m(c)
				function m(N) {
					return N && N.__esModule ? N : { default: N }
				}
				function w(N, k) {
					if (!(N instanceof k))
						throw new TypeError("Cannot call a class as a function")
				}
				function s(N, k) {
					if (!N)
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						)
					return k && (typeof k == "object" || typeof k == "function")
						? k
						: N
				}
				function a(N, k) {
					if (typeof k != "function" && k !== null)
						throw new TypeError(
							"Super expression must either be null or a function, not " +
								typeof k
						)
					;(N.prototype = Object.create(k && k.prototype, {
						constructor: {
							value: N,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					})),
						k &&
							(Object.setPrototypeOf
								? Object.setPrototypeOf(N, k)
								: (N.__proto__ = k))
				}
				var v = (function (N) {
					a(k, N)
					function k() {
						return (
							w(this, k),
							s(
								this,
								(k.__proto__ || Object.getPrototypeOf(k)).apply(
									this,
									arguments
								)
							)
						)
					}
					return (
						o(k, [
							{
								key: "replaceWith",
								value: function (j) {
									;(this.domNode.textContent =
										this.domNode.textContent),
										this.attach(),
										l(
											k.prototype.__proto__ ||
												Object.getPrototypeOf(
													k.prototype
												),
											"replaceWith",
											this
										).call(this, j)
								}
							},
							{
								key: "highlight",
								value: function (j) {
									var x = this.domNode.textContent
									this.cachedText !== x &&
										((x.trim().length > 0 ||
											this.cachedText == null) &&
											((this.domNode.innerHTML = j(x)),
											this.domNode.normalize(),
											this.attach()),
										(this.cachedText = x))
								}
							}
						]),
						k
					)
				})(_.default)
				v.className = "ql-syntax"
				var d = new p.default.Attributor.Class("token", "hljs", {
						scope: p.default.Scope.INLINE
					}),
					E = (function (N) {
						a(k, N),
							o(k, null, [
								{
									key: "register",
									value: function () {
										y.default.register(d, !0),
											y.default.register(v, !0)
									}
								}
							])
						function k(O, j) {
							w(this, k)
							var x = s(
								this,
								(k.__proto__ || Object.getPrototypeOf(k)).call(
									this,
									O,
									j
								)
							)
							if (typeof x.options.highlight != "function")
								throw new Error(
									"Syntax module requires highlight.js. Please include the library on the page before Quill."
								)
							var b = null
							return (
								x.quill.on(
									y.default.events.SCROLL_OPTIMIZE,
									function () {
										clearTimeout(b),
											(b = setTimeout(function () {
												x.highlight(), (b = null)
											}, x.options.interval))
									}
								),
								x.highlight(),
								x
							)
						}
						return (
							o(k, [
								{
									key: "highlight",
									value: function () {
										var j = this
										if (!this.quill.selection.composing) {
											this.quill.update(
												y.default.sources.USER
											)
											var x = this.quill.getSelection()
											this.quill.scroll
												.descendants(v)
												.forEach(function (b) {
													b.highlight(
														j.options.highlight
													)
												}),
												this.quill.update(
													y.default.sources.SILENT
												),
												x != null &&
													this.quill.setSelection(
														x,
														y.default.sources.SILENT
													)
										}
									}
								}
							]),
							k
						)
					})(u.default)
				;(E.DEFAULTS = {
					highlight: (function () {
						return window.hljs == null
							? null
							: function (N) {
									var k = window.hljs.highlightAuto(N)
									return k.value
								}
					})(),
					interval: 1e3
				}),
					(r.CodeBlock = v),
					(r.CodeToken = d),
					(r.default = E)
			},
			function (n, r) {
				n.exports =
					'<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>'
			},
			function (n, r) {
				n.exports =
					'<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>'
			},
			function (n, r) {
				n.exports =
					'<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>'
			},
			function (n, r) {
				n.exports =
					'<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>'
			},
			function (n, r) {
				n.exports =
					'<svg viewbox="0 0 18 18"> <g class="ql-fill ql-color-label"> <polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points="12 6.868 12 6 11.62 6 12 6.868"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points="5.5 13 9 5 12.5 13"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>'
			},
			function (n, r) {
				n.exports =
					'<svg viewbox="0 0 18 18"> <rect class="ql-fill ql-stroke" height=3 width=3 x=4 y=5></rect> <rect class="ql-fill ql-stroke" height=3 width=3 x=11 y=5></rect> <path class="ql-even ql-fill ql-stroke" d=M7,8c0,4.031-3,5-3,5></path> <path class="ql-even ql-fill ql-stroke" d=M14,8c0,4.031-3,5-3,5></path> </svg>'
			},
			function (n, r) {
				n.exports =
					'<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>'
			},
			function (n, r) {
				n.exports =
					'<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>'
			},
			function (n, r) {
				n.exports =
					'<svg viewbox="0 0 18 18"> <line class="ql-color-label ql-stroke ql-transparent" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points="5.5 11 9 3 12.5 11"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>'
			},
			function (n, r) {
				n.exports =
					'<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"></polygon> <line class="ql-stroke ql-fill" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>'
			},
			function (n, r) {
				n.exports =
					'<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"></polygon> <line class="ql-stroke ql-fill" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>'
			},
			function (n, r) {
				n.exports =
					'<svg viewbox="0 0 18 18"> <path class=ql-fill d=M14,16H4a1,1,0,0,1,0-2H14A1,1,0,0,1,14,16Z /> <path class=ql-fill d=M14,4H4A1,1,0,0,1,4,2H14A1,1,0,0,1,14,4Z /> <rect class=ql-fill x=3 y=6 width=12 height=6 rx=1 ry=1 /> </svg>'
			},
			function (n, r) {
				n.exports =
					'<svg viewbox="0 0 18 18"> <path class=ql-fill d=M13,16H5a1,1,0,0,1,0-2h8A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H5A1,1,0,0,1,5,2h8A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=2 y=6 width=14 height=6 rx=1 ry=1 /> </svg>'
			},
			function (n, r) {
				n.exports =
					'<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15,8H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,8Z /> <path class=ql-fill d=M15,12H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,12Z /> <path class=ql-fill d=M15,16H5a1,1,0,0,1,0-2H15A1,1,0,0,1,15,16Z /> <path class=ql-fill d=M15,4H5A1,1,0,0,1,5,2H15A1,1,0,0,1,15,4Z /> <rect class=ql-fill x=2 y=6 width=8 height=6 rx=1 ry=1 /> </svg>'
			},
			function (n, r) {
				n.exports =
					'<svg viewbox="0 0 18 18"> <path class=ql-fill d=M5,8H3A1,1,0,0,1,3,6H5A1,1,0,0,1,5,8Z /> <path class=ql-fill d=M5,12H3a1,1,0,0,1,0-2H5A1,1,0,0,1,5,12Z /> <path class=ql-fill d=M13,16H3a1,1,0,0,1,0-2H13A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H3A1,1,0,0,1,3,2H13A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=8 y=6 width=8 height=6 rx=1 ry=1 transform="translate(24 18) rotate(-180)"/> </svg>'
			},
			function (n, r) {
				n.exports =
					'<svg viewbox="0 0 18 18"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>'
			},
			function (n, r) {
				n.exports =
					'<svg viewBox="0 0 18 18"> <path class=ql-fill d=M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z /> </svg>'
			},
			function (n, r) {
				n.exports =
					'<svg viewBox="0 0 18 18"> <path class=ql-fill d=M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z /> </svg>'
			},
			function (n, r) {
				n.exports =
					'<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>'
			},
			function (n, r) {
				n.exports =
					'<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline> </svg>'
			},
			function (n, r) {
				n.exports =
					'<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"></polyline> </svg>'
			},
			function (n, r) {
				n.exports =
					'<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="5 7 5 11 3 9 5 7"></polyline> </svg>'
			},
			function (n, r) {
				n.exports =
					'<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class="ql-even ql-stroke" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class="ql-even ql-stroke" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>'
			},
			function (n, r) {
				n.exports =
					'<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class="ql-stroke ql-thin" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class="ql-stroke ql-thin" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class="ql-stroke ql-thin" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>'
			},
			function (n, r) {
				n.exports =
					'<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>'
			},
			function (n, r) {
				n.exports =
					'<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=9 x2=15 y1=4 y2=4></line> <polyline class=ql-stroke points="3 4 4 5 6 3"></polyline> <line class=ql-stroke x1=9 x2=15 y1=14 y2=14></line> <polyline class=ql-stroke points="3 14 4 15 6 13"></polyline> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="3 9 4 10 6 8"></polyline> </svg>'
			},
			function (n, r) {
				n.exports =
					'<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>'
			},
			function (n, r) {
				n.exports =
					'<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>'
			},
			function (n, r) {
				n.exports =
					'<svg viewbox="0 0 18 18"> <line class="ql-stroke ql-thin" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>'
			},
			function (n, r) {
				n.exports =
					'<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>'
			},
			function (n, r) {
				n.exports =
					'<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>'
			},
			function (n, r) {
				n.exports =
					'<svg viewbox="0 0 18 18"> <polygon class=ql-stroke points="7 11 9 13 11 11 7 11"></polygon> <polygon class=ql-stroke points="7 7 9 5 11 7 7 7"></polygon> </svg>'
			},
			function (n, r, i) {
				Object.defineProperty(r, "__esModule", { value: !0 }),
					(r.default = r.BubbleTooltip = void 0)
				var o = function k(O, j, x) {
						O === null && (O = Function.prototype)
						var b = Object.getOwnPropertyDescriptor(O, j)
						if (b === void 0) {
							var S = Object.getPrototypeOf(O)
							return S === null ? void 0 : k(S, j, x)
						} else {
							if ("value" in b) return b.value
							var A = b.get
							return A === void 0 ? void 0 : A.call(x)
						}
					},
					l = (function () {
						function k(O, j) {
							for (var x = 0; x < j.length; x++) {
								var b = j[x]
								;(b.enumerable = b.enumerable || !1),
									(b.configurable = !0),
									"value" in b && (b.writable = !0),
									Object.defineProperty(O, b.key, b)
							}
						}
						return function (O, j, x) {
							return j && k(O.prototype, j), x && k(O, x), O
						}
					})(),
					h = i(3),
					p = w(h),
					g = i(8),
					y = w(g),
					f = i(43),
					u = w(f),
					c = i(15),
					_ = i(41),
					m = w(_)
				function w(k) {
					return k && k.__esModule ? k : { default: k }
				}
				function s(k, O) {
					if (!(k instanceof O))
						throw new TypeError("Cannot call a class as a function")
				}
				function a(k, O) {
					if (!k)
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						)
					return O && (typeof O == "object" || typeof O == "function")
						? O
						: k
				}
				function v(k, O) {
					if (typeof O != "function" && O !== null)
						throw new TypeError(
							"Super expression must either be null or a function, not " +
								typeof O
						)
					;(k.prototype = Object.create(O && O.prototype, {
						constructor: {
							value: k,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					})),
						O &&
							(Object.setPrototypeOf
								? Object.setPrototypeOf(k, O)
								: (k.__proto__ = O))
				}
				var d = [
						["bold", "italic", "link"],
						[{ header: 1 }, { header: 2 }, "blockquote"]
					],
					E = (function (k) {
						v(O, k)
						function O(j, x) {
							s(this, O),
								x.modules.toolbar != null &&
									x.modules.toolbar.container == null &&
									(x.modules.toolbar.container = d)
							var b = a(
								this,
								(O.__proto__ || Object.getPrototypeOf(O)).call(
									this,
									j,
									x
								)
							)
							return (
								b.quill.container.classList.add("ql-bubble"), b
							)
						}
						return (
							l(O, [
								{
									key: "extendToolbar",
									value: function (x) {
										;(this.tooltip = new N(
											this.quill,
											this.options.bounds
										)),
											this.tooltip.root.appendChild(
												x.container
											),
											this.buildButtons(
												[].slice.call(
													x.container.querySelectorAll(
														"button"
													)
												),
												m.default
											),
											this.buildPickers(
												[].slice.call(
													x.container.querySelectorAll(
														"select"
													)
												),
												m.default
											)
									}
								}
							]),
							O
						)
					})(u.default)
				E.DEFAULTS = (0, p.default)(!0, {}, u.default.DEFAULTS, {
					modules: {
						toolbar: {
							handlers: {
								link: function (O) {
									O
										? this.quill.theme.tooltip.edit()
										: this.quill.format("link", !1)
								}
							}
						}
					}
				})
				var N = (function (k) {
					v(O, k)
					function O(j, x) {
						s(this, O)
						var b = a(
							this,
							(O.__proto__ || Object.getPrototypeOf(O)).call(
								this,
								j,
								x
							)
						)
						return (
							b.quill.on(
								y.default.events.EDITOR_CHANGE,
								function (S, A, L, M) {
									if (S === y.default.events.SELECTION_CHANGE)
										if (
											A != null &&
											A.length > 0 &&
											M === y.default.sources.USER
										) {
											b.show(),
												(b.root.style.left = "0px"),
												(b.root.style.width = ""),
												(b.root.style.width =
													b.root.offsetWidth + "px")
											var U = b.quill.getLines(
												A.index,
												A.length
											)
											if (U.length === 1)
												b.position(b.quill.getBounds(A))
											else {
												var V = U[U.length - 1],
													G = b.quill.getIndex(V),
													q = Math.min(
														V.length() - 1,
														A.index + A.length - G
													),
													R = b.quill.getBounds(
														new c.Range(G, q)
													)
												b.position(R)
											}
										} else
											document.activeElement !==
												b.textbox &&
												b.quill.hasFocus() &&
												b.hide()
								}
							),
							b
						)
					}
					return (
						l(O, [
							{
								key: "listen",
								value: function () {
									var x = this
									o(
										O.prototype.__proto__ ||
											Object.getPrototypeOf(O.prototype),
										"listen",
										this
									).call(this),
										this.root
											.querySelector(".ql-close")
											.addEventListener(
												"click",
												function () {
													x.root.classList.remove(
														"ql-editing"
													)
												}
											),
										this.quill.on(
											y.default.events.SCROLL_OPTIMIZE,
											function () {
												setTimeout(function () {
													if (
														!x.root.classList.contains(
															"ql-hidden"
														)
													) {
														var b =
															x.quill.getSelection()
														b != null &&
															x.position(
																x.quill.getBounds(
																	b
																)
															)
													}
												}, 1)
											}
										)
								}
							},
							{
								key: "cancel",
								value: function () {
									this.show()
								}
							},
							{
								key: "position",
								value: function (x) {
									var b = o(
											O.prototype.__proto__ ||
												Object.getPrototypeOf(
													O.prototype
												),
											"position",
											this
										).call(this, x),
										S =
											this.root.querySelector(
												".ql-tooltip-arrow"
											)
									if (((S.style.marginLeft = ""), b === 0))
										return b
									S.style.marginLeft =
										-1 * b - S.offsetWidth / 2 + "px"
								}
							}
						]),
						O
					)
				})(f.BaseTooltip)
				;(N.TEMPLATE = [
					'<span class="ql-tooltip-arrow"></span>',
					'<div class="ql-tooltip-editor">',
					'<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">',
					'<a class="ql-close"></a>',
					"</div>"
				].join("")),
					(r.BubbleTooltip = N),
					(r.default = E)
			},
			function (n, r, i) {
				n.exports = i(63)
			}
		]).default
	})
})(jh)
var ME = jh.exports,
	FE =
		(at && at.__extends) ||
		(function () {
			var e = function (t, n) {
				return (
					(e =
						Object.setPrototypeOf ||
						({ __proto__: [] } instanceof Array &&
							function (r, i) {
								r.__proto__ = i
							}) ||
						function (r, i) {
							for (var o in i)
								i.hasOwnProperty(o) && (r[o] = i[o])
						}),
					e(t, n)
				)
			}
			return function (t, n) {
				e(t, n)
				function r() {
					this.constructor = t
				}
				t.prototype =
					n === null
						? Object.create(n)
						: ((r.prototype = n.prototype), new r())
			}
		})(),
	Ao =
		(at && at.__assign) ||
		function () {
			return (
				(Ao =
					Object.assign ||
					function (e) {
						for (var t, n = 1, r = arguments.length; n < r; n++) {
							t = arguments[n]
							for (var i in t)
								Object.prototype.hasOwnProperty.call(t, i) &&
									(e[i] = t[i])
						}
						return e
					}),
				Ao.apply(this, arguments)
			)
		},
	BE =
		(at && at.__spreadArrays) ||
		function () {
			for (var e = 0, t = 0, n = arguments.length; t < n; t++)
				e += arguments[t].length
			for (var r = Array(e), i = 0, t = 0; t < n; t++)
				for (var o = arguments[t], l = 0, h = o.length; l < h; l++, i++)
					r[i] = o[l]
			return r
		},
	Jo =
		(at && at.__importDefault) ||
		function (e) {
			return e && e.__esModule ? e : { default: e }
		},
	Tt = Jo(hn),
	qE = Jo(Qd),
	Nr = Jo(IE),
	Cf = Jo(ME),
	$E = (function (e) {
		FE(t, e)
		function t(n) {
			var r = e.call(this, n) || this
			;(r.dirtyProps = [
				"modules",
				"formats",
				"bounds",
				"theme",
				"children"
			]),
				(r.cleanProps = [
					"id",
					"className",
					"style",
					"placeholder",
					"tabIndex",
					"onChange",
					"onChangeSelection",
					"onFocus",
					"onBlur",
					"onKeyPress",
					"onKeyDown",
					"onKeyUp"
				]),
				(r.state = { generation: 0 }),
				(r.selection = null),
				(r.onEditorChange = function (o, l, h, p) {
					var g, y, f, u
					o === "text-change"
						? (y = (g = r).onEditorChangeText) === null ||
							y === void 0 ||
							y.call(
								g,
								r.editor.root.innerHTML,
								l,
								p,
								r.unprivilegedEditor
							)
						: o === "selection-change" &&
							((u = (f = r).onEditorChangeSelection) === null ||
								u === void 0 ||
								u.call(f, l, p, r.unprivilegedEditor))
				})
			var i = r.isControlled() ? n.value : n.defaultValue
			return (r.value = i ?? ""), r
		}
		return (
			(t.prototype.validateProps = function (n) {
				var r
				if (Tt.default.Children.count(n.children) > 1)
					throw new Error(
						"The Quill editing area can only be composed of a single React element."
					)
				if (Tt.default.Children.count(n.children)) {
					var i = Tt.default.Children.only(n.children)
					if (
						((r = i) === null || r === void 0 ? void 0 : r.type) ===
						"textarea"
					)
						throw new Error(
							"Quill does not support editing on a <textarea>. Use a <div> instead."
						)
				}
				if (
					this.lastDeltaChangeSet &&
					n.value === this.lastDeltaChangeSet
				)
					throw new Error(
						"You are passing the `delta` object from the `onChange` event back as `value`. You most probably want `editor.getContents()` instead. See: https://github.com/zenoamaro/react-quill#using-deltas"
					)
			}),
			(t.prototype.shouldComponentUpdate = function (n, r) {
				var i = this,
					o
				if (
					(this.validateProps(n),
					!this.editor || this.state.generation !== r.generation)
				)
					return !0
				if ("value" in n) {
					var l = this.getEditorContents(),
						h = ((o = n.value), o ?? "")
					this.isEqualValue(h, l) ||
						this.setEditorContents(this.editor, h)
				}
				return (
					n.readOnly !== this.props.readOnly &&
						this.setEditorReadOnly(this.editor, n.readOnly),
					BE(this.cleanProps, this.dirtyProps).some(function (p) {
						return !Nr.default(n[p], i.props[p])
					})
				)
			}),
			(t.prototype.shouldComponentRegenerate = function (n) {
				var r = this
				return this.dirtyProps.some(function (i) {
					return !Nr.default(n[i], r.props[i])
				})
			}),
			(t.prototype.componentDidMount = function () {
				this.instantiateEditor(),
					this.setEditorContents(
						this.editor,
						this.getEditorContents()
					)
			}),
			(t.prototype.componentWillUnmount = function () {
				this.destroyEditor()
			}),
			(t.prototype.componentDidUpdate = function (n, r) {
				var i = this
				if (this.editor && this.shouldComponentRegenerate(n)) {
					var o = this.editor.getContents(),
						l = this.editor.getSelection()
					;(this.regenerationSnapshot = { delta: o, selection: l }),
						this.setState({
							generation: this.state.generation + 1
						}),
						this.destroyEditor()
				}
				if (this.state.generation !== r.generation) {
					var h = this.regenerationSnapshot,
						o = h.delta,
						p = h.selection
					delete this.regenerationSnapshot, this.instantiateEditor()
					var g = this.editor
					g.setContents(o),
						Df(function () {
							return i.setEditorSelection(g, p)
						})
				}
			}),
			(t.prototype.instantiateEditor = function () {
				this.editor
					? this.hookEditor(this.editor)
					: (this.editor = this.createEditor(
							this.getEditingArea(),
							this.getEditorConfig()
						))
			}),
			(t.prototype.destroyEditor = function () {
				this.editor && this.unhookEditor(this.editor)
			}),
			(t.prototype.isControlled = function () {
				return "value" in this.props
			}),
			(t.prototype.getEditorConfig = function () {
				return {
					bounds: this.props.bounds,
					formats: this.props.formats,
					modules: this.props.modules,
					placeholder: this.props.placeholder,
					readOnly: this.props.readOnly,
					scrollingContainer: this.props.scrollingContainer,
					tabIndex: this.props.tabIndex,
					theme: this.props.theme
				}
			}),
			(t.prototype.getEditor = function () {
				if (!this.editor)
					throw new Error("Accessing non-instantiated editor")
				return this.editor
			}),
			(t.prototype.createEditor = function (n, r) {
				var i = new Cf.default(n, r)
				return (
					r.tabIndex != null && this.setEditorTabIndex(i, r.tabIndex),
					this.hookEditor(i),
					i
				)
			}),
			(t.prototype.hookEditor = function (n) {
				;(this.unprivilegedEditor = this.makeUnprivilegedEditor(n)),
					n.on("editor-change", this.onEditorChange)
			}),
			(t.prototype.unhookEditor = function (n) {
				n.off("editor-change", this.onEditorChange)
			}),
			(t.prototype.getEditorContents = function () {
				return this.value
			}),
			(t.prototype.getEditorSelection = function () {
				return this.selection
			}),
			(t.prototype.isDelta = function (n) {
				return n && n.ops
			}),
			(t.prototype.isEqualValue = function (n, r) {
				return this.isDelta(n) && this.isDelta(r)
					? Nr.default(n.ops, r.ops)
					: Nr.default(n, r)
			}),
			(t.prototype.setEditorContents = function (n, r) {
				var i = this
				this.value = r
				var o = this.getEditorSelection()
				typeof r == "string"
					? n.setContents(n.clipboard.convert(r))
					: n.setContents(r),
					Df(function () {
						return i.setEditorSelection(n, o)
					})
			}),
			(t.prototype.setEditorSelection = function (n, r) {
				if (((this.selection = r), r)) {
					var i = n.getLength()
					;(r.index = Math.max(0, Math.min(r.index, i - 1))),
						(r.length = Math.max(
							0,
							Math.min(r.length, i - 1 - r.index)
						)),
						n.setSelection(r)
				}
			}),
			(t.prototype.setEditorTabIndex = function (n, r) {
				var i, o
				!(
					(o =
						(i = n) === null || i === void 0
							? void 0
							: i.scroll) === null || o === void 0
				) &&
					o.domNode &&
					(n.scroll.domNode.tabIndex = r)
			}),
			(t.prototype.setEditorReadOnly = function (n, r) {
				r ? n.disable() : n.enable()
			}),
			(t.prototype.makeUnprivilegedEditor = function (n) {
				var r = n
				return {
					getHTML: function () {
						return r.root.innerHTML
					},
					getLength: r.getLength.bind(r),
					getText: r.getText.bind(r),
					getContents: r.getContents.bind(r),
					getSelection: r.getSelection.bind(r),
					getBounds: r.getBounds.bind(r)
				}
			}),
			(t.prototype.getEditingArea = function () {
				if (!this.editingArea)
					throw new Error("Instantiating on missing editing area")
				var n = qE.default.findDOMNode(this.editingArea)
				if (!n) throw new Error("Cannot find element for editing area")
				if (n.nodeType === 3)
					throw new Error("Editing area cannot be a text node")
				return n
			}),
			(t.prototype.renderEditingArea = function () {
				var n = this,
					r = this.props,
					i = r.children,
					o = r.preserveWhitespace,
					l = this.state.generation,
					h = {
						key: l,
						ref: function (p) {
							n.editingArea = p
						}
					}
				return Tt.default.Children.count(i)
					? Tt.default.cloneElement(Tt.default.Children.only(i), h)
					: o
						? Tt.default.createElement("pre", Ao({}, h))
						: Tt.default.createElement("div", Ao({}, h))
			}),
			(t.prototype.render = function () {
				var n
				return Tt.default.createElement(
					"div",
					{
						id: this.props.id,
						style: this.props.style,
						key: this.state.generation,
						className:
							"quill " + ((n = this.props.className), n ?? ""),
						onKeyPress: this.props.onKeyPress,
						onKeyDown: this.props.onKeyDown,
						onKeyUp: this.props.onKeyUp
					},
					this.renderEditingArea()
				)
			}),
			(t.prototype.onEditorChangeText = function (n, r, i, o) {
				var l, h
				if (this.editor) {
					var p = this.isDelta(this.value)
						? o.getContents()
						: o.getHTML()
					p !== this.getEditorContents() &&
						((this.lastDeltaChangeSet = r),
						(this.value = p),
						(h = (l = this.props).onChange) === null ||
							h === void 0 ||
							h.call(l, n, r, i, o))
				}
			}),
			(t.prototype.onEditorChangeSelection = function (n, r, i) {
				var o, l, h, p, g, y
				if (this.editor) {
					var f = this.getEditorSelection(),
						u = !f && n,
						c = f && !n
					Nr.default(n, f) ||
						((this.selection = n),
						(l = (o = this.props).onChangeSelection) === null ||
							l === void 0 ||
							l.call(o, n, r, i),
						u
							? (p = (h = this.props).onFocus) === null ||
								p === void 0 ||
								p.call(h, n, r, i)
							: c &&
								((y = (g = this.props).onBlur) === null ||
									y === void 0 ||
									y.call(g, f, r, i)))
				}
			}),
			(t.prototype.focus = function () {
				this.editor && this.editor.focus()
			}),
			(t.prototype.blur = function () {
				this.editor && ((this.selection = null), this.editor.blur())
			}),
			(t.displayName = "React Quill"),
			(t.Quill = Cf.default),
			(t.defaultProps = { theme: "snow", modules: {}, readOnly: !1 }),
			t
		)
	})(Tt.default.Component)
function Df(e) {
	Promise.resolve().then(e)
}
var zE = $E
const Lh = Ca(zE)
function UE() {
	const e = fe.use.personalDetails(),
		t = fe.use.updateDetails(),
		{ register: n, watch: r } = hi({ defaultValues: e })
	return (
		hn.useEffect(() => {
			const i = r((o) => {
				;(o.file =
					o.file.length === 1
						? URL.createObjectURL(o.file[0])
						: o.file),
					t(o)
			})
			return () => i.unsubscribe()
		}, [r]),
		B.jsxs("form", {
			children: [
				B.jsxs("label", {
					htmlFor: "firstName",
					children: [
						"First name:",
						B.jsx("input", {
							type: "text",
							id: "firstName",
							placeholder: "John",
							...n("firstName")
						})
					]
				}),
				B.jsxs("label", {
					htmlFor: "lastName",
					children: [
						"Last name:",
						B.jsx("input", {
							type: "text",
							id: "lastName",
							placeholder: "Doe",
							...n("lastName")
						})
					]
				}),
				B.jsxs("label", {
					htmlFor: "email",
					children: [
						"Email:",
						B.jsx("input", {
							type: "email",
							id: "email",
							placeholder: "john.doe@email.com",
							...n("email")
						})
					]
				}),
				B.jsxs("label", {
					htmlFor: "phone",
					children: [
						"Phone:",
						B.jsx("input", {
							type: "tel",
							id: "phone",
							placeholder: "(555) 555-5555",
							...n("phone")
						})
					]
				}),
				B.jsxs("label", {
					htmlFor: "address",
					children: [
						"Address:",
						B.jsx("input", {
							type: "text",
							id: "address",
							placeholder: "Silicon Valley, California",
							...n("address")
						})
					]
				}),
				B.jsxs("label", {
					htmlFor: "occupation",
					children: [
						"Occupation:",
						B.jsx("input", {
							type: "text",
							id: "occupation",
							placeholder: "Web Developer",
							...n("occupation")
						})
					]
				}),
				B.jsxs("label", {
					htmlFor: "linkedin",
					children: [
						"Linkedin:",
						B.jsx("input", {
							type: "text",
							id: "linkedin",
							placeholder: "https://linkedin.com/username",
							...n("linkedin")
						})
					]
				}),
				B.jsxs("label", {
					htmlFor: "portfolio",
					children: [
						"Portfolio:",
						B.jsx("input", {
							type: "text",
							id: "portfolio",
							placeholder: "https://github.com/username",
							...n("portfolio")
						})
					]
				}),
				B.jsxs("label", {
					htmlFor: "about",
					children: [
						"About:",
						B.jsx("textarea", {
							rows: 4,
							id: "about",
							placeholder:
								"e.g Proven ability to design, develop, and implement web applications using a variety of programming languages and frameworks ...",
							...n("about")
						})
					]
				}),
				B.jsxs("label", {
					htmlFor: "file",
					children: [
						"Profile picture:",
						B.jsx("input", {
							type: "file",
							id: "file",
							accept: "image/png, image/jpeg",
							...n("file")
						})
					]
				})
			]
		})
	)
}
function Rf({ index: e }) {
	const t = fe.use.educationDetails(),
		n = fe.use.updateEducationDetails(),
		r = fe.use.deleteEducationDetails(),
		i = fe.use.changeEducationEditStatus(),
		o = fe.use.changeEducationActiveForm(),
		{
			register: l,
			handleSubmit: h,
			control: p,
			formState: { isSubmitting: g }
		} = hi({
			defaultValues:
				e !== void 0
					? t[e]
					: {
							school: "",
							degree: "",
							dateBegin: "",
							dateEnd: "",
							location: "",
							description: "",
							edit: !0
						}
		}),
		y = (f) => {
			n(f, e !== void 0 ? e : t.length),
				i(e !== void 0 ? e : t.length, !1),
				e === void 0 && o()
		}
	return B.jsxs("form", {
		onSubmit: h(y),
		children: [
			B.jsxs("label", {
				htmlFor: "school",
				children: [
					"School:",
					B.jsx("input", {
						type: "text",
						id: "school",
						placeholder: "University of Madeira",
						...l("school")
					})
				]
			}),
			B.jsxs("label", {
				htmlFor: "degree",
				children: [
					"Degree:",
					B.jsx("input", {
						type: "text",
						id: "degree",
						placeholder: "Bsc of Mathematics",
						...l("degree")
					})
				]
			}),
			B.jsxs("label", {
				htmlFor: "dateBeginEducation",
				children: [
					"Date:",
					B.jsx("input", {
						placeholder: "From",
						type: "text",
						id: "dateBeginEducation",
						...l("dateBegin")
					}),
					B.jsx("input", {
						placeholder: "To",
						type: "text",
						...l("dateEnd")
					})
				]
			}),
			B.jsxs("label", {
				htmlFor: "locationEducation",
				children: [
					"City:",
					B.jsx("input", {
						type: "text",
						id: "locationEducation",
						placeholder: "Funchal, Madeira",
						...l("location")
					})
				]
			}),
			B.jsxs("label", {
				htmlFor: "descriptionEducation",
				children: [
					"Description:",
					B.jsx(ih, {
						name: "description",
						control: p,
						defaultValue: "",
						render: ({ field: f }) =>
							B.jsx(Lh, {
								theme: "snow",
								value: f.value,
								onChange: f.onChange,
								placeholder:
									"e.g Understand and apply advanced mathematical concepts...",
								modules: {
									toolbar: [
										["bold", "italic", "underline"],
										[
											{ list: "ordered" },
											{ list: "bullet" }
										],
										["clean"]
									]
								}
							})
					})
				]
			}),
			B.jsx("div", {
				className: "col-span-2 flex w-full gap-2",
				children:
					e !== void 0
						? B.jsxs(B.Fragment, {
								children: [
									B.jsx(ch, { action: () => r(e) }),
									B.jsx(xo, { action: () => i(e, !1) }),
									B.jsx(So, { isSubmitting: g })
								]
							})
						: B.jsxs(B.Fragment, {
								children: [
									B.jsx(xo, { action: o }),
									B.jsx(So, { isSubmitting: g })
								]
							})
			})
		]
	})
}
function If({ index: e }) {
	const t = fe.use.employmentDetails(),
		n = fe.use.updateEmploymentDetails(),
		r = fe.use.deleteEmploymentDetails(),
		i = fe.use.changeEmploymentEditStatus(),
		o = fe.use.changeEmploymentActiveForm(),
		{
			register: l,
			handleSubmit: h,
			formState: { isSubmitting: p },
			control: g
		} = hi({
			defaultValues:
				e !== void 0
					? t[e]
					: {
							jobRole: "",
							employer: "",
							dateBegin: "",
							dateEnd: "",
							location: "",
							description: "",
							edit: !0
						}
		}),
		y = (f) => {
			n(f, e !== void 0 ? e : t.length),
				i(e !== void 0 ? e : t.length, !1),
				e === void 0 && o()
		}
	return B.jsxs("form", {
		onSubmit: h(y),
		children: [
			B.jsxs("label", {
				htmlFor: "jobRole",
				children: [
					"Job role:",
					B.jsx("input", {
						type: "text",
						id: "jobRole",
						placeholder: "Web Developer",
						...l("jobRole")
					})
				]
			}),
			B.jsxs("label", {
				htmlFor: "employer",
				children: [
					"Employer:",
					B.jsx("input", {
						type: "text",
						id: "employer",
						placeholder: "Acme Inc.",
						...l("employer")
					})
				]
			}),
			B.jsxs("label", {
				htmlFor: "dateBegin",
				children: [
					"Date:",
					B.jsx("input", {
						type: "text",
						id: "dateBegin",
						placeholder: "From",
						...l("dateBegin")
					}),
					B.jsx("input", {
						type: "text",
						placeholder: "To",
						...l("dateEnd")
					})
				]
			}),
			B.jsxs("label", {
				htmlFor: "location",
				children: [
					"City:",
					B.jsx("input", {
						type: "text",
						id: "location",
						placeholder: "San Diego, CA",
						...l("location")
					})
				]
			}),
			B.jsxs("label", {
				htmlFor: "description",
				children: [
					"Description:",
					B.jsx(ih, {
						name: "description",
						control: g,
						defaultValue: "",
						render: ({ field: f }) =>
							B.jsx(Lh, {
								theme: "snow",
								value: f.value,
								onChange: f.onChange,
								placeholder:
									"e.g Designed and developed responsive websites ...",
								modules: {
									toolbar: [
										["bold", "italic", "underline"],
										[
											{ list: "ordered" },
											{ list: "bullet" }
										],
										["clean"]
									]
								}
							})
					})
				]
			}),
			B.jsx("div", {
				className: "col-span-2 flex w-full gap-2",
				children:
					e !== void 0
						? B.jsxs(B.Fragment, {
								children: [
									B.jsx(ch, { action: () => r(e) }),
									B.jsx(xo, { action: () => i(e, !1) }),
									B.jsx(So, { isSubmitting: p })
								]
							})
						: B.jsxs(B.Fragment, {
								children: [
									B.jsx(xo, { action: o }),
									B.jsx(So, { isSubmitting: p })
								]
							})
			})
		]
	})
}
function VE() {
	const e = fe.use.addLanguage(),
		{ register: t, handleSubmit: n, reset: r } = hi(),
		i = (o) => {
			e(o.language), r()
		}
	return B.jsxs("form", {
		className: "relative mb-[2vh] block w-[20ch]",
		id: "languages",
		onSubmit: n(i),
		children: [
			B.jsx("input", {
				className: "w-full overflow-x-auto pr-10",
				type: "text",
				id: "language",
				placeholder: "e.g Portuguese...",
				...t("language")
			}),
			B.jsx("button", {
				className:
					"absolute right-2 top-1 cursor-pointer border-none bg-transparent text-slate-400 outline-none",
				type: "submit",
				"aria-label": "Save",
				children: B.jsxs("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					width: "24",
					height: "24",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "#737373",
					strokeWidth: "2",
					strokeLinecap: "round",
					strokeLinejoin: "round",
					className: "feather feather-corner-down-left",
					children: [
						B.jsx("polyline", { points: "9 10 4 15 9 20" }),
						B.jsx("path", { d: "M20 4v7a4 4 0 0 1-4 4H4" })
					]
				})
			})
		]
	})
}
function HE({ skill: e, index: t }) {
	const n = fe.use.updateSkill(),
		r = fe.use.deleteSkill(),
		{ register: i, watch: o } = hi({ defaultValues: e }),
		l = () => {
			r(t)
		}
	return (
		hn.useEffect(() => {
			const h = o((p) => {
				n(p, t)
			})
			return () => h.unsubscribe()
		}, [o]),
		B.jsxs(B.Fragment, {
			children: [
				B.jsx("input", {
					type: "text",
					id: "category",
					placeholder: "e.g Programming Languages",
					...i("category")
				}),
				B.jsx("input", {
					type: "text",
					id: "tools",
					placeholder: "e.g Python, SQL, Bash, HTML, CSS, Javascript",
					...i("tools")
				}),
				B.jsxs("svg", {
					onClick: l,
					className:
						"min-w-5 cursor-pointer transition-transform duration-200 ease-out hover:scale-125",
					xmlns: "http://www.w3.org/2000/svg",
					width: "20",
					height: "20",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "#737373",
					strokeWidth: "2",
					strokeLinecap: "round",
					strokeLinejoin: "round",
					children: [
						B.jsx("circle", { cx: "12", cy: "12", r: "10" }),
						B.jsx("line", { x1: "15", y1: "9", x2: "9", y2: "15" }),
						B.jsx("line", { x1: "9", y1: "9", x2: "15", y2: "15" })
					]
				})
			]
		})
	)
}
function WE() {
	return B.jsxs(B.Fragment, {
		children: [B.jsx(ci, { text: "Personal details" }), B.jsx(UE, {})]
	})
}
function KE() {
	const e = fe.use.personalDetails()
	return B.jsxs(B.Fragment, {
		children: [
			B.jsxs("h1", {
				className:
					"mb-[2px] text-[2rem] font-semibold tracking-[0.15rem] text-navyBlue",
				children: [
					e.firstName,
					B.jsxs("span", {
						className: "text-[2rem] font-light tracking-[0.2rem]",
						children: [" ", e.lastName]
					})
				]
			}),
			B.jsx("h2", {
				className:
					"mb-[5px] text-[0.95rem] font-normal tracking-[0.2rem] text-navyBlue",
				children: e.occupation
			}),
			B.jsx("p", {
				className:
					"card min-h-[70px] max-w-[336px] break-words text-justify text-[0.6rem] text-darkGray",
				children: e.about
			})
		]
	})
}
function GE() {
	const e = fe.use.personalDetails()
	return B.jsxs(B.Fragment, {
		children: [
			B.jsx("h2", {
				className:
					"mb-[15px] ml-[20%] w-full border-b-[1px] border-solid border-white pb-[5px] text-[1.1rem] text-white",
				children: "Contact"
			}),
			B.jsxs("ul", {
				className: "mb-5 ml-[20%] list-none pl-0",
				children: [
					B.jsxs("li", {
						className:
							"mb-[10px] text-[0.65rem] font-bold text-white",
						children: [
							"Address",
							B.jsx("br", {}),
							B.jsx("span", {
								className:
									"text-white text-[0.5rem] font-normal",
								children: e.address
							})
						]
					}),
					B.jsxs("li", {
						className:
							"mb-[10px] text-[0.65rem] font-bold text-white",
						children: [
							"Phone",
							B.jsx("br", {}),
							" ",
							B.jsx("span", {
								className:
									"text-white text-[0.5rem] font-normal",
								children: e.phone
							})
						]
					}),
					B.jsxs("li", {
						className:
							"mb-[10px] text-[0.65rem] font-bold text-white",
						children: [
							"Email",
							B.jsx("br", {}),
							" ",
							B.jsx("a", {
								href: "mailto: goncalo771@gmail.com",
								className:
									"text-white text-[0.5rem] font-normal underline",
								children: e.email
							})
						]
					}),
					B.jsxs("li", {
						className:
							"mb-[10px] text-[0.65rem] font-bold text-white",
						children: [
							"Linkedin",
							B.jsx("br", {}),
							" ",
							B.jsx("a", {
								href: "https://linkedin.com/username",
								target: "_blank",
								rel: "noopener noreferrer",
								className:
									"text-white text-[0.5rem] font-normal underline",
								children: e.linkedin
							})
						]
					}),
					B.jsxs("li", {
						className:
							"mb-[10px] text-[0.65rem] font-bold text-white",
						children: [
							"Portfolio",
							B.jsx("br", {}),
							" ",
							B.jsx("a", {
								href: "https://github.com/username",
								target: "_blank",
								rel: "noopener noreferrer",
								className:
									"text-white text-[0.5rem] font-normal underline",
								children: e.portfolio
							})
						]
					})
				]
			})
		]
	})
}
function QE() {
	const e = fe.use.personalDetails()
	return B.jsx("img", {
		className: "mx-auto my-9 h-36 w-36 rounded-full object-cover",
		src: e.file,
		alt: ""
	})
}
function Ch({
	occupation: e,
	location: t,
	from: n,
	to: r,
	index: i,
	action: o
}) {
	return B.jsxs("div", {
		className:
			"flex items-center justify-between break-words rounded-lg border-2 border-solid border-lightGrayNo p-4 pr-6 text-xs",
		children: [
			B.jsxs("h3", {
				className: "text-base font-bold",
				children: [
					e,
					" at ",
					t,
					B.jsx("br", {}),
					" ",
					B.jsxs("span", {
						className: "break-words font-extralight",
						children: [n, " - ", r]
					})
				]
			}),
			B.jsxs("svg", {
				onClick: () => o(i, !0),
				xmlns: "http://www.w3.org/2000/svg",
				width: "20",
				height: "20",
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "2",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				className:
					"min-w-5 cursor-pointer transition-transform duration-200 ease-out hover:scale-110",
				children: [
					B.jsx("path", { d: "M12 20h9" }),
					B.jsx("path", {
						d: "M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
					})
				]
			})
		]
	})
}
function YE() {
	const e = fe.use.language(),
		t = fe.use.deleteLanguage(),
		n = (r) => {
			t(r)
		}
	return B.jsx("div", {
		className: "flex flex-wrap",
		children: e.map((r, i) =>
			B.jsx(
				"button",
				{
					className:
						"mb-2 mr-2 cursor-pointer rounded-lg border-none bg-lightViolet px-5 py-1 text-center text-sm text-white hover:line-through",
					onClick: () => n(i),
					type: "button",
					children: r
				},
				r
			)
		)
	})
}
function ZE() {
	return B.jsxs("div", {
		children: [
			B.jsx(ci, { text: "Languages" }),
			B.jsx(VE, {}),
			B.jsx(YE, {})
		]
	})
}
function XE() {
	const e = fe.use.language()
	return B.jsxs(B.Fragment, {
		children: [
			B.jsx("h2", {
				className:
					"mb-[15px] ml-[20%] w-full border-b-[1px] border-solid border-white pb-[5px] text-[1.1rem] text-white",
				children: "Languages"
			}),
			B.jsx("ul", {
				className: "mb-5 ml-[20%] list-none pl-0",
				children: e.map((t) =>
					B.jsx(
						"li",
						{
							className:
								"mb-[10px] text-[0.65rem] font-bold text-white",
							children: t
						},
						t
					)
				)
			})
		]
	})
}
function JE() {
	const e = fe.use.skills(),
		t = fe.use.addSkill(),
		n = () => {
			t({ category: "", tools: "" })
		}
	return B.jsxs("div", {
		children: [
			B.jsx(ci, { text: "Skills" }),
			B.jsxs("ul", {
				className: "mb-5",
				children: [
					B.jsxs("li", {
						className:
							"mb-3 grid list-none grid-cols-[35%_65%] items-center gap-[10px] font-normal text-lightViolet",
						children: [
							"Categories:",
							B.jsx("span", {
								className: "break-words font-normal",
								children: "Skills:"
							})
						]
					}),
					e.map((r, i) =>
						B.jsx(
							"li",
							{
								className:
									"mb-3 grid grid-cols-[35%_60%_5%] items-center gap-[10px] font-normal",
								children: B.jsx(HE, { skill: r, index: i })
							},
							r.id
						)
					)
				]
			}),
			B.jsx(Du, { action: n, text: "Add Skill" })
		]
	})
}
function eb() {
	const e = fe.use.skills()
	return B.jsx(B.Fragment, {
		children: B.jsxs("div", {
			className: "cv-box relative pl-[15px] text-darkGray",
			children: [
				B.jsx("div", {
					className:
						"cv-box-header before:content-[' '] mb-3 grid grid-cols-2 items-center gap-y-1 before:absolute before:left-0 before:top-[3px] before:box-content before:h-[5px] before:w-[5px] before:rounded-full before:border-[1.5px] before:border-solid before:border-navyBlue before:bg-white",
					children: B.jsx("h2", {
						className:
							"col-span-1 row-span-1 text-[0.8rem] font-bold",
						children: "Skills"
					})
				}),
				B.jsx("div", {
					className: "cv-box-skills",
					children: B.jsx("ul", {
						className: "mt-[-0.5rem]",
						children: e.map((t) =>
							B.jsxs(
								"li",
								{
									className:
										"mb-[2px] grid list-none grid-cols-[40%_60%] border-b-[0.5px] border-solid border-lightGray pb-[2px] text-[0.5rem] font-bold",
									children: [
										t.category,
										B.jsx("span", {
											className:
												"text-[0.5rem] font-light",
											children: t.tools
										})
									]
								},
								t.id
							)
						)
					})
				})
			]
		})
	})
}
function tb() {
	const e = fe.use.employmentDetails(),
		t = fe.use.changeEmploymentEditStatus(),
		n = fe.use.employmentActiveForm(),
		r = fe.use.changeEmploymentActiveForm()
	return B.jsxs(B.Fragment, {
		children: [
			B.jsx(ci, { text: "Employment History" }),
			B.jsxs("div", {
				className: "mb-5 flex flex-col gap-2",
				children: [
					e.map((i, o) =>
						i.edit
							? B.jsx(If, { index: o }, o)
							: B.jsx(
									Ch,
									{
										occupation: i.jobRole,
										location: i.employer,
										from: i.dateBegin,
										to: i.dateEnd,
										index: o,
										action: t
									},
									o
								)
					),
					n
						? B.jsx(If, { index: void 0 })
						: B.jsx(Du, { text: "Add Employment", action: r })
				]
			})
		]
	})
}
function nb() {
	const e = fe.use.employmentDetails()
	return B.jsxs("div", {
		className:
			"cv before:content-[' '] relative mt-[18px] before:absolute before:ml-[3.2px] before:mt-[56px] before:h-[calc(100%-45px)] before:w-[1px] before:bg-navyBlue",
		children: [
			B.jsx("h1", {
				className:
					"mb-5 border-b-[1px] border-solid border-navyBlue pb-1 text-[1.15rem] font-bold text-navyBlue",
				children: "Employment"
			}),
			e.map((t, n) =>
				B.jsxs(
					"div",
					{
						className: "cv-box relative pl-[15px] text-darkGray",
						children: [
							B.jsxs("div", {
								className:
									"cv-box-header before:content-[' '] mb-2 grid grid-cols-2 items-center gap-y-1 before:absolute before:left-0 before:top-[3px] before:box-content before:h-[5px] before:w-[5px] before:rounded-full before:border-[1.5px] before:border-solid before:border-navyBlue before:bg-white",
								children: [
									B.jsx("h2", {
										className: "text-[0.8rem] font-bold",
										children: t.jobRole
									}),
									B.jsxs("p", {
										className:
											"date-cv justify-self-end text-[0.6rem] font-bold",
										children: [
											t.dateBegin,
											" - ",
											t.dateEnd
										]
									}),
									B.jsx("p", {
										className:
											"location-cv col-start-1 col-end-3 text-[0.6rem]",
										children: t.location
									})
								]
							}),
							B.jsx("div", {
								className: "cv-box-description mb-4",
								children: B.jsx("p", {
									className:
										"card text-justify text-[0.5rem]",
									dangerouslySetInnerHTML: {
										__html: t.description
									}
								})
							})
						]
					},
					n
				)
			),
			B.jsx(eb, {})
		]
	})
}
function rb() {
	const e = fe.use.educationDetails(),
		t = fe.use.changeEducationEditStatus(),
		n = fe.use.educationActiveForm(),
		r = fe.use.changeEducationActiveForm()
	return B.jsxs(B.Fragment, {
		children: [
			B.jsx(ci, { text: "Education" }),
			B.jsxs("div", {
				className: "mb-5 flex flex-col gap-2",
				children: [
					e.map((i, o) =>
						i.edit
							? B.jsx(Rf, { index: o }, o)
							: B.jsx(
									Ch,
									{
										occupation: i.degree,
										location: i.school,
										from: i.dateBegin,
										to: i.dateEnd,
										index: o,
										action: t
									},
									o
								)
					),
					n
						? B.jsx(Rf, { index: void 0 })
						: B.jsx(Du, { text: "Add Employment", action: r })
				]
			})
		]
	})
}
function ib() {
	const e = fe.use.educationDetails()
	return B.jsxs("div", {
		className:
			"cv before:content-[' '] relative mt-[18px] before:absolute before:ml-[3.2px] before:mt-[56px] before:h-[calc(100%-45px)] before:w-[1px] before:bg-navyBlue",
		children: [
			B.jsx("h1", {
				className:
					"mb-5 border-b-[1px] border-solid border-navyBlue pb-1 text-[1.15rem] font-bold text-navyBlue",
				children: "Education"
			}),
			e.map((t) =>
				B.jsxs(
					"div",
					{
						className: "cv-box relative pl-[15px] text-darkGray",
						children: [
							B.jsxs("div", {
								className:
									"cv-box-header before:content-[' '] mb-2 grid grid-cols-2 items-center gap-y-1 before:absolute before:left-0 before:top-[3px] before:box-content before:h-[5px] before:w-[5px] before:rounded-full before:border-[1.5px] before:border-solid before:border-navyBlue before:bg-white",
								children: [
									B.jsx("h2", {
										className: "text-[0.8rem] font-bold",
										children: t.degree
									}),
									B.jsxs("p", {
										className:
											"date-cv justify-self-end text-[0.6rem] font-bold",
										children: [
											t.dateBegin,
											" - ",
											t.dateEnd
										]
									}),
									B.jsxs("p", {
										className:
											"location-cv col-start-1 col-end-3 text-[0.6rem]",
										children: [t.location, " - ", t.school]
									})
								]
							}),
							B.jsx("div", {
								className: "cv-box-description mb-4",
								children: B.jsx("p", {
									className:
										"card text-justify text-[0.5rem]",
									dangerouslySetInnerHTML: {
										__html: t.description
									}
								})
							})
						]
					},
					t.degree
				)
			)
		]
	})
}
function ob() {
	const e = () => {
		window.print()
	}
	return B.jsx("div", {
		className:
			"absolute top-0 flex h-9 w-full items-center justify-center bg-zinc-700 px-5",
		children: B.jsx("button", {
			className:
				"cursor-pointer justify-self-center border-none bg-transparent transition-transform duration-300 ease-out hover:scale-125",
			type: "button",
			"aria-label": "Save",
			onClick: e,
			children: B.jsxs("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				width: "20",
				height: "20",
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "#ffffff",
				strokeWidth: "2",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				className: "feather feather-download",
				children: [
					B.jsx("path", {
						d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
					}),
					B.jsx("polyline", { points: "7 10 12 15 17 10" }),
					B.jsx("line", { x1: "12", y1: "15", x2: "12", y2: "3" })
				]
			})
		})
	})
}
function lb() {
	return B.jsxs("div", {
		className: "side flex h-[842px] flex-col overflow-hidden bg-navyBlue",
		children: [
			B.jsx(QE, {}),
			B.jsxs("div", { children: [B.jsx(GE, {}), B.jsx(XE, {})] })
		]
	})
}
function ab() {
	return B.jsxs("div", {
		className: "main h-[842px] overflow-hidden px-[25px] py-12",
		children: [B.jsx(KE, {}), B.jsx(nb, {}), B.jsx(ib, {})]
	})
}
function ub() {
	return B.jsxs(B.Fragment, {
		children: [
			B.jsx(ob, {}),
			B.jsxs("div", {
				className:
					"grid h-[842px] w-[592px] grid-cols-[35%_65%] bg-white",
				id: "download-pdf",
				children: [B.jsx(lb, {}), B.jsx(ab, {})]
			})
		]
	})
}
function sb() {
	return B.jsxs(B.Fragment, {
		children: [
			B.jsx("h1", {
				className:
					"mb-14 w-full rounded-xl bg-lightViolet py-5 text-center text-4xl text-white",
				children: "Resume builder"
			}),
			B.jsx(WE, {}),
			B.jsx(tb, {}),
			B.jsx(JE, {}),
			B.jsx(rb, {}),
			B.jsx(ZE, {})
		]
	})
}
function fb() {
	return B.jsxs("div", {
		className: "relative xl:grid xl:grid-cols-2",
		children: [
			B.jsx("section", {
				className: "w-full px-[5vw] pb-[12vh] pt-[5vh]",
				children: B.jsx(sb, {})
			}),
			B.jsx("section", {
				className:
					"relative xl:fixed xl:right-0 flex h-screen xl:w-1/2 flex-col items-center justify-center bg-neutral-500 pt-9",
				children: B.jsx(ub, {})
			})
		]
	})
}
Rl.createRoot(document.getElementById("root")).render(
	B.jsx(ye.StrictMode, { children: B.jsx(fb, {}) })
)
