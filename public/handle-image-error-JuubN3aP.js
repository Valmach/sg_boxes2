import {r as Y} from "./components-BQ94cas1.js";
import "./_sentry-release-injection-file-BRO_tjfx.js";
(function() {
    try {
        var t = typeof window < "u"
  ?
  window
  :
  typeof
  global
<"u"
  ?
  global
  :
  typeof
  self
<"u"
  ?
  self
  :
  {}
  ,
  n=new
  Error().stack;
  n
  &&
  (t._sentryDebugIds=t._sentryDebugIds
  ||
  {},
  t._sentryDebugIds[n]="820c73b6-ac98-47bc-a96d-0f92b1bce030"
  ,
  t._sentryDebugIdIdentifier="sentry-dbid-820c73b6-ac98-47bc-a96d-0f92b1bce030"
  )
  }
  catch
  {}
  }
  )();
  function
  Jt(t)
  {
  return
  Object.prototype.toString.call(t)==="[object Object]"
  }
  function
  kt(t)
  {
  return
  Jt(t)
  ||
  Array.isArray(t)
  }
  function
  Xt()
  {
  return
  !!(typeof
  window
<"u"
  &&
  window.document
  &&
  window.document.createElement)
  }
  function
  It(t,
  n)
  {
  const
  r=Object.keys(t)
  ,
  s=Object.keys(n);
  if
  (r.length
  !==s.length)
  return
  !1;
  const
  i=JSON.stringify(Object.keys(t.breakpoints
  ||
  {}))
  ,
  e=JSON.stringify(Object.keys(n.breakpoints
  ||
  {}));
  return
  i
  !==e
  ?
  !1
  :
  r.every(o=> {
        const u = t[o]
          , c = n[o];
        return typeof u == "function" ? `${u}` == `${c}` : !kt(u) || !kt(c) ? u === c : It(u, c)
    }
    )
}
function Ct(t) {
    return t.concat().sort( (n, r) => n.name > r.name ? 1 : -1).map(n => n.options)
}
function Yt(t, n) {
    if (t.length !== n.length)
        return !1;
    const r = Ct(t)
      , s = Ct(n);
    return r.every( (i, e) => {
        const o = s[e];
        return It(i, o)
    }
    )
}
function Lt(t) {
    return typeof t == "number"
}
function xt(t) {
    return typeof t == "string"
}
function vt(t) {
    return typeof t == "boolean"
}
function Nt(t) {
    return Object.prototype.toString.call(t) === "[object Object]"
}
function A(t) {
    return Math.abs(t)
}
function Dt(t) {
    return Math.sign(t)
}
function ct(t, n) {
    return A(t - n)
}
function Zt(t, n) {
    if (t === 0 || n === 0 || A(t) <= A(n))return
	   0;
	   const
	   r=ct(A(t),
	   A(n));
	   return
	   A(r
	   t)
	   }
	   function
	   ut(t)
	   {
	   return
	   ft(t).map(Number)
	   }
	   function
	   G(t)
	   {
	   return
	   t[lt(t)]
	   }
	   function
	   lt(t)
	   {
	   return
	   Math.max(0,
	   t.length
	   -
	   1)
	   }
	   function
	   Tt(t,
	   n)
	   {
	   return
	   n===lt(t)
	   }
	   function
	   Vt(t,
	   n=0)
	   {
	   return
	   Array.from(Array(t),
	   (r,
	   s)=> n + s)
}
function ft(t) {
    return Object.keys(t)
}
function zt(t, n) {
    return [t, n].reduce( (r, s) => (ft(s).forEach(i => {
        const e = r[i]
          , o = s[i]
          , u = Nt(e) && Nt(o);
        r[i] = u ? zt(e, o) : o
    }
    ),
    r), {})
}
function Et(t, n) {
    return typeof n.MouseEvent < "u"&&
		  t
		  instanceof
		  n.MouseEvent
		  }
		  function
		  Wt(t,
		  n)
		  {
		  const
		  r={
		  start:
		  s,
		  center:
		  i,
		  end:
		  e
		  };
		  function
		  s()
		  {
		  return
		  0
		  }
		  function
		  i(c)
		  {
		  return
		  e(c)
		  2
		  }
		  function
		  e(c)
		  {
		  return
		  n
		  -
		  c
		  }
		  function
		  o(c,
		  f)
		  {
		  return
		  xt(t)
		  ?
		  r[t](c)
		  :
		  t(n,
		  c,
		  f)
		  }
		  return
		  {
		  measure:
		  o
		  }
		  }
		  function
		  at()
		  {
		  let
		  t=[];
		  function
		  n(i,
		  e,
		  o,
		  u={
		  passive:
		  !0
		  })
		  {
		  let
		  c;
		  if
		  ("addEventListener"in
		  i)
		  i.addEventListener(e,
		  o,
		  u),
		  c=()=> i.removeEventListener(e, o, u);
        else {
            const f = i;
            f.addListener(o),
            c = () => f.removeListener(o)
        }
        return t.push(c),
        s
    }
    function r() {
        t = t.filter(i => i())
    }
    const s = {
        add: n,
        clear: r
    };
    return s
}
function tn(t, n, r, s) {
    const i = at()
      , e = 1e3 / 60;
    let o = null
      , u = 0
      , c = 0;
    function f() {
        i.add(t, "visibilitychange", () => {
            t.hidden && d()
        }
        )
    }
    function h() {
        x(),
        i.clear()
    }
    function l(b) {
        if (!c)
            return;
        o || (o = b);
        const a = b - o;
        for (o = b,
        u += a; u >= e; )
            r(),
            u -= e;
        const g = A(u / e);
        s(g),
        c && n.requestAnimationFrame(l)
    }
    function m() {
        c || (c = n.requestAnimationFrame(l))
    }
    function x() {
        n.cancelAnimationFrame(c),
        o = null,
        u = 0,
        c = 0
    }
    function d() {
        o = null,
        u = 0
    }
    return {
        init: f,
        destroy: h,
        start: m,
        stop: x,
        update: r,
        render: s
    }
}
function nn(t, n) {
    const r = n === "rtl"
      , s = t === "y"
      , i = s ? "y" : "x"
      , e = s ? "x" : "y"
      , o = !s && r ? -1 : 1
      , u = h()
      , c = l();
    function f(d) {
        const {height: p, width: b} = d;
        return s ? p : b
    }
    function h() {
        return s ? "top" : r ? "right" : "left"
    }
    function l() {
        return s ? "bottom" : r ? "left" : "right"
    }
    function m(d) {
        return d * o
    }
    return {
        scroll: i,
        cross: e,
        startEdge: u,
        endEdge: c,
        measureSize: f,
        direction: m
    }
}
function et(t=0, n=0) {
    const r = A(t - n);
    function s(f) {
        return f < t}
			  function
			  i(f)
			  {
			  return
			  f> n
    }
    function e(f) {
        return s(f) || i(f)
    }
    function o(f) {
        return e(f) ? s(f) ? t : n : f
    }
    function u(f) {
        return r ? f - r * Math.ceil((f - n) / r) : f
    }
    return {
        length: r,
        max: n,
        min: t,
        constrain: o,
        reachedAny: e,
        reachedMax: i,
        reachedMin: s,
        removeOffset: u
    }
}
function Bt(t, n, r) {
    const {constrain: s} = et(0, t)
      , i = t + 1;
    let e = o(n);
    function o(m) {
        return r ? A((i + m) % i) : s(m)
    }
    function u() {
        return e
    }
    function c(m) {
        return e = o(m),
        l
    }
    function f(m) {
        return h().set(u() + m)
    }
    function h() {
        return Bt(t, u(), r)
    }
    const l = {
        get: u,
        set: c,
        add: f,
        clone: h
    };
    return l
}
function en(t, n, r, s, i, e, o, u, c, f, h, l, m, x, d, p, b, a, g) {
    const {cross: S, direction: I} = t
      , v = ["INPUT", "SELECT", "TEXTAREA"]
      , w = {
        passive: !1
    }
      , E = at()
      , L = at()
      , T = et(50, 225).constrain(x.measure(20))
      , O = {
        mouse: 300,
        touch: 400
    }
      , P = {
        mouse: 500,
        touch: 600
    }
      , N = d ? 43 : 25;
    let J = !1
      , z = 0
      , $ = 0
      , Z = !1
      , U = !1
      , X = !1
      , _ = !1;
    function W(y) {
        if (!g)
            return;
        function D(k) {
            (vt(g) || g(y, k)) && V(k)
        }
        const F = n;
        E.add(F, "dragstart", k => k.preventDefault(), w).add(F, "touchmove", () => {}
        , w).add(F, "touchend", () => {}
        ).add(F, "touchstart", D).add(F, "mousedown", D).add(F, "touchcancel", C).add(F, "contextmenu", C).add(F, "click", rt, !0)
    }
    function K() {
        E.clear(),
        L.clear()
    }
    function ot() {
        const y = _ ? r : n;
        L.add(y, "touchmove", R, w).add(y, "touchend", C).add(y, "mousemove", R, w).add(y, "mouseup", C)
    }
    function Q(y) {
        const D = y.nodeName || "";
        return v.includes(D)
    }
    function st() {
        return (d ? P : O)[_ ? "mouse" : "touch"]
    }
    function it(y, D) {
        const F = l.add(Dt(y) * -1)
          , k = h.byDistance(y, !d).distance;
        return d || A(y) < T
				  ?
				  k
				  :
				  b
				  &&
				  D
				  ?
				  k
				  *
				  .5
				  :
				  h.byIndex(F.get(),
				  0).distance
				  }
				  function
				  V(y)
				  {
				  const
				  D=Et(y,
				  s);
				  _=D,
				  X=d
				  &&
				  D
				  &&
				  !y.buttons
				  &&
				  J,
				  J=ct(i.get(),
				  o.get())>= 2,
        !(D && y.button !== 0) && (Q(y.target) || (Z = !0,
        e.pointerDown(y),
        f.useFriction(0).useDuration(0),
        i.set(o),
        ot(),
        z = e.readPoint(y),
        $ = e.readPoint(y, S),
        m.emit("pointerDown")))
    }
    function R(y) {
        if (!Et(y, s) && y.touches.length >= 2)
            return C(y);
        const F = e.readPoint(y)
          , k = e.readPoint(y, S)
          , q = ct(F, z)
          , j = ct(k, $);
        if (!U && !_ && (!y.cancelable || (U = q > j,
        !U)))
            return C(y);
        const H = e.pointerMove(y);
        q > p && (X = !0),
        f.useFriction(.3).useDuration(.75),
        u.start(),
        i.add(I(H)),
        y.preventDefault()
    }
    function C(y) {
        const F = h.byDistance(0, !1).index !== l.get()
          , k = e.pointerUp(y) * st()
          , q = it(I(k), F)
          , j = Zt(k, q)
          , H = N - 10 * j
          , tt = a + j / 50;
        U = !1,
        Z = !1,
        L.clear(),
        f.useDuration(H).useFriction(tt),
        c.distance(q, !d),
        _ = !1,
        m.emit("pointerUp")
    }
    function rt(y) {
        X && (y.stopPropagation(),
        y.preventDefault(),
        X = !1)
    }
    function B() {
        return Z
    }
    return {
        init: W,
        destroy: K,
        pointerDown: B
    }
}
function on(t, n) {
    let s, i;
    function e(l) {
        return l.timeStamp
    }
    function o(l, m) {
        const d = `client${(m || t.scroll) === "x" ? "X" : "Y"}`;
        return (Et(l, n) ? l : l.touches[0])[d]
    }
    function u(l) {
        return s = l,
        i = l,
        o(l)
    }
    function c(l) {
        const m = o(l) - o(i)
          , x = e(l) - e(s) > 170;
        return i = l,
        x && (s = l),
        m
    }
    function f(l) {
        if (!s || !i)
            return 0;
        const m = o(i) - o(s)
          , x = e(l) - e(s)
          , d = e(l) - e(i) > 170
          , p = m / x;
        return x && !d && A(p) > .1 ? p : 0
    }
    return {
        pointerDown: u,
        pointerMove: c,
        pointerUp: f,
        readPoint: o
    }
}
function rn() {
    function t(r) {
        const {offsetTop: s, offsetLeft: i, offsetWidth: e, offsetHeight: o} = r;
        return {
            top: s,
            right: i + e,
            bottom: s + o,
            left: i,
            width: e,
            height: o
        }
    }
    return {
        measure: t
    }
}
function sn(t) {
    function n(s) {
        return t * (s / 100)
    }
    return {
        measure: n
    }
}
function cn(t, n, r, s, i, e, o) {
    let u, c, f = [], h = !1;
    function l(p) {
        return i.measureSize(o.measure(p))
    }
    function m(p) {
        if (!e)
            return;
        c = l(t),
        f = s.map(l);
        function b(g) {
            for (const S of g) {
                const I = S.target === t
                  , v = s.indexOf(S.target)
                  , w = I ? c : f[v]
                  , E = l(I ? t : s[v]);
                if (A(E - w) >= .5) {
                    r.requestAnimationFrame( () => {
                        p.reInit(),
                        n.emit("resize")
                    }
                    );
                    break
                }
            }
        }
        u = new ResizeObserver(g => {
            h || (vt(e) || e(p, g)) && b(g)
        }
        ),
        [t].concat(s).forEach(g => u.observe(g))
    }
    function x() {
        u && u.disconnect(),
        h = !0
    }
    return {
        init: m,
        destroy: x
    }
}
function un(t, n, r, s, i) {
    let e = 0
      , o = 0
      , u = s
      , c = i
      , f = t.get()
      , h = 0;
    function l() {
        const v = r.get() - t.get()
          , w = !u;
        let E = 0;
        return w ? (e = 0,
        t.set(r),
        E = v) : (e += v / u,
        e *= c,
        f += e,
        t.add(e),
        E = f - h),
        o = Dt(E),
        h = f,
        I
    }
    function m() {
        const v = r.get() - n.get();
        return A(v) < .001
					  }
					  function
					  x()
					  {
					  return
					  u
					  }
					  function
					  d()
					  {
					  return
					  o
					  }
					  function
					  p()
					  {
					  return
					  e
					  }
					  function
					  b()
					  {
					  return
					  g(s)
					  }
					  function
					  a()
					  {
					  return
					  S(i)
					  }
					  function
					  g(v)
					  {
					  return
					  u=v,
					  I
					  }
					  function
					  S(v)
					  {
					  return
					  c=v,
					  I
					  }
					  const
					  I={
					  direction:
					  d,
					  duration:
					  x,
					  velocity:
					  p,
					  seek:
					  l,
					  settled:
					  m,
					  useBaseFriction:
					  a,
					  useBaseDuration:
					  b,
					  useFriction:
					  S,
					  useDuration:
					  g
					  };
					  return
					  I
					  }
					  function
					  fn(t,
					  n,
					  r,
					  s,
					  i)
					  {
					  const
					  e=i.measure(10)
					  ,
					  o=i.measure(50)
					  ,
					  u=et(.1,
					  .99);
					  let
					  c=!1;
					  function
					  f()
					  {
					  return
					  !(c
					  ||
					  !t.reachedAny(r.get())
					  ||
					  !t.reachedAny(n.get()))
					  }
					  function
					  h(x)
					  {
					  if
					  (!f())
					  return;
					  const
					  d=t.reachedMin(n.get())
					  ?"min"
					  :"max"
					  ,
					  p=A(t[d]
					  -
					  n.get())
					  ,
					  b=r.get()
					  -
					  n.get()
					  ,
					  a=u.constrain(p
					  o);
					  r.subtract(b
					  *
					  a),
					  !x
					  &&
					  A(b)
					<
					  e
					  &&
					  (r.set(t.constrain(r.get())),
					  s.useDuration(25).useBaseFriction())
					  }
					  function
					  l(x)
					  {
					  c=!x
					  }
					  return
					  {
					  constrain:
					  h,
					  toggleActive:
					  l
					  }
					  }
					  function
					  an(t,
					  n,
					  r,
					  s,
					  i)
					  {
					  const
					  e=et(-n
					  +
					  t,
					  0)
					  ,
					  o=l()
					  ,
					  u=h()
					  ,
					  c=m();
					  function
					  f(d,
					  p)
					  {
					  return
					  ct(d,
					  p)
					<
					  1
					  }
					  function
					  h()
					  {
					  const
					  d=o[0]
					  ,
					  p=G(o)
					  ,
					  b=o.lastIndexOf(d)
					  ,
					  a=o.indexOf(p)
					  +
					  1;
					  return
					  et(b,
					  a)
					  }
					  function
					  l()
					  {
					  return
					  r.map(
					  (d,
					  p)=> {
            const {min: b, max: a} = e
              , g = e.constrain(d)
              , S = !p
              , I = Tt(r, p);
            return S ? a : I || f(b, g) ? b : f(a, g) ? a : g
        }
        ).map(d => parseFloat(d.toFixed(3)))
    }
    function m() {
        if (n <= t+
						   i)
						   return
						   [e.max];
						   if
						   (s==="keepSnaps"
						   )
						   return
						   o;
						   const
						   {min:
						   d,
						   max:
						   p}=u;
						   return
						   o.slice(d,
						   p)
						   }
						   return
						   {
						   snapsContained:
						   c,
						   scrollContainLimit:
						   u
						   }
						   }
						   function
						   ln(t,
						   n,
						   r)
						   {
						   const
						   s=n[0]
						   ,
						   i=r
						   ?
						   s
						   -
						   t
						   :
						   G(n);
						   return
						   {
						   limit:
						   et(i,
						   s)
						   }
						   }
						   function
						   dn(t,
						   n,
						   r,
						   s)
						   {
						   const
						   e=n.min
						   +
						   .1
						   ,
						   o=n.max
						   +
						   .1
						   ,
						   {reachedMin:
						   u,
						   reachedMax:
						   c}=et(e,
						   o);
						   function
						   f(m)
						   {
						   return
						   m===1
						   ?
						   c(r.get())
						   :
						   m===-1
						   ?
						   u(r.get())
						   :
						   !1
						   }
						   function
						   h(m)
						   {
						   if
						   (!f(m))
						   return;
						   const
						   x=t
						   *
						   (m
						   *
						   -1);
						   s.forEach(d=> d.add(x))
    }
    return {
        loop: h
    }
}
function pn(t) {
    const {max: n, length: r} = t;
    function s(e) {
        const o = e - n;
        return r ? o / -r : 0
    }
    return {
        get: s
    }
}
function mn(t, n, r, s, i) {
    const {startEdge: e, endEdge: o} = t
      , {groupSlides: u} = i
      , c = l().map(n.measure)
      , f = m()
      , h = x();
    function l() {
        return u(s).map(p => G(p)[o] - p[0][e]).map(A)
    }
    function m() {
        return s.map(p => r[e] - p[e]).map(p => -A(p))
    }
    function x() {
        return u(f).map(p => p[0]).map( (p, b) => p + c[b])
    }
    return {
        snaps: f,
        snapsAligned: h
    }
}
function gn(t, n, r, s, i, e) {
    const {groupSlides: o} = i
      , {min: u, max: c} = s
      , f = h();
    function h() {
        const m = o(e)
          , x = !t || n === "keepSnaps";
        return r.length === 1 ? [e] : x ? m : m.slice(u, c).map( (d, p, b) => {
            const a = !p
              , g = Tt(b, p);
            if (a) {
                const S = G(b[0]) + 1;
                return Vt(S)
            }
            if (g) {
                const S = lt(e) - G(b)[0] + 1;
                return Vt(S, G(b)[0])
            }
            return d
        }
        )
    }
    return {
        slideRegistry: f
    }
}
function hn(t, n, r, s, i) {
    const {reachedAny: e, removeOffset: o, constrain: u} = s;
    function c(d) {
        return d.concat().sort( (p, b) => A(p) - A(b))[0]
    }
    function f(d) {
        const p = t ? o(d) : u(d)
          , b = n.map( (g, S) => ({
            diff: h(g - p, 0),
            index: S
        })).sort( (g, S) => A(g.diff) - A(S.diff))
          , {index: a} = b[0];
        return {
            index: a,
            distance: p
        }
    }
    function h(d, p) {
        const b = [d, d + r, d - r];
        if (!t)
            return d;
        if (!p)
            return c(b);
        const a = b.filter(g => Dt(g) === p);
        return a.length ? c(a) : G(b) - r
    }
    function l(d, p) {
        const b = n[d] - i.get()
          , a = h(b, p);
        return {
            index: d,
            distance: a
        }
    }
    function m(d, p) {
        const b = i.get() + d
          , {index: a, distance: g} = f(b)
          , S = !t && e(b);
        if (!p || S)
            return {
                index: a,
                distance: d
            };
        const I = n[a] - g
          , v = d + h(I, 0);
        return {
            index: a,
            distance: v
        }
    }
    return {
        byDistance: m,
        byIndex: l,
        shortcut: h
    }
}
function bn(t, n, r, s, i, e, o) {
    function u(l) {
        const m = l.distance
          , x = l.index !== n.get();
        e.add(m),
        m && (s.duration() ? t.start() : (t.update(),
        t.render(1),
        t.update())),
        x && (r.set(n.get()),
        n.set(l.index),
        o.emit("select"))
    }
    function c(l, m) {
        const x = i.byDistance(l, m);
        u(x)
    }
    function f(l, m) {
        const x = n.clone().set(l)
          , d = i.byIndex(x.get(), m);
        u(d)
    }
    return {
        distance: c,
        index: f
    }
}
function yn(t, n, r, s, i, e, o) {
    let u = 0;
    function c() {
        e.add(document, "keydown", f, !1),
        n.forEach(h)
    }
    function f(m) {
        m.code === "Tab" && (u = new Date().getTime())
    }
    function h(m) {
        const x = () => {
            if (new Date().getTime() - u > 10)
                return;
            t.scrollLeft = 0;
            const b = n.indexOf(m)
              , a = r.findIndex(g => g.includes(b));
            Lt(a) && (i.useDuration(0),
            s.index(a, 0),
            o.emit("slideFocus"))
        }
        ;
        e.add(m, "focus", x, {
            passive: !0,
            capture: !0
        })
    }
    return {
        init: c
    }
}
function pt(t) {
    let n = t;
    function r() {
        return n
    }
    function s(c) {
        n = o(c)
    }
    function i(c) {
        n += o(c)
    }
    function e(c) {
        n -= o(c)
    }
    function o(c) {
        return Lt(c) ? c : c.get()
    }
    return {
        get: r,
        set: s,
        add: i,
        subtract: e
    }
}
function jt(t, n) {
    const r = t.scroll === "x" ? e : o
      , s = n.style;
    let i = !1;
    function e(l) {
        return `translate3d(${l}px,0px,0px)`
    }
    function o(l) {
        return `translate3d(0px,${l}px,0px)`
    }
    function u(l) {
        i || (s.transform = r(t.direction(l)))
    }
    function c(l) {
        i = !l
    }
    function f() {
        i || (s.transform = "",
        n.getAttribute("style") || n.removeAttribute("style"))
    }
    return {
        clear: f,
        to: u,
        toggleActive: c
    }
}
function Sn(t, n, r, s, i, e, o, u, c) {
    const h = ut(i)
      , l = ut(i).reverse()
      , m = a().concat(g());
    function x(E, L) {
        return E.reduce( (T, O) => T - i[O], L)
    }
    function d(E, L) {
        return E.reduce( (T, O) => x(T, L) > 0 ? T.concat([O]) : T, [])
    }
    function p(E) {
        return e.map( (L, T) => ({
            start: L - s[T] + .5 + E,
            end: L + n - .5 + E
        }))
    }
    function b(E, L, T) {
        const O = p(L);
        return E.map(P => {
            const N = T ? 0 : -r
              , J = T ? r : 0
              , z = T ? "end" : "start"
              , $ = O[P][z];
            return {
                index: P,
                loopPoint: $,
                slideLocation: pt(-1),
                translate: jt(t, c[P]),
                target: () => u.get() > $ ? N : J
            }
        }
        )
    }
    function a() {
        const E = o[0]
          , L = d(l, E);
        return b(L, r, !1)
    }
    function g() {
        const E = n - o[0] - 1
          , L = d(h, E);
        return b(L, -r, !0)
    }
    function S() {
        return m.every( ({index: E}) => {
            const L = h.filter(T => T !== E);
            return x(L, n) <= .1}
							   )
							   }
							   function
							   I()
							   {
							   m.forEach(E=> {
            const {target: L, translate: T, slideLocation: O} = E
              , P = L();
            P !== O.get() && (T.to(P),
            O.set(P))
        }
        )
    }
    function v() {
        m.forEach(E => E.translate.clear())
    }
    return {
        canLoop: S,
        clear: v,
        loop: I,
        loopPoints: m
    }
}
function xn(t, n, r) {
    let s, i = !1;
    function e(c) {
        if (!r)
            return;
        function f(h) {
            for (const l of h)
                if (l.type === "childList") {
                    c.reInit(),
                    n.emit("slidesChanged");
                    break
                }
        }
        s = new MutationObserver(h => {
            i || (vt(r) || r(c, h)) && f(h)
        }
        ),
        s.observe(t, {
            childList: !0
        })
    }
    function o() {
        s && s.disconnect(),
        i = !0
    }
    return {
        init: e,
        destroy: o
    }
}
function En(t, n, r, s) {
    const i = {};
    let e = null, o = null, u, c = !1;
    function f() {
        u = new IntersectionObserver(d => {
            c || (d.forEach(p => {
                const b = n.indexOf(p.target);
                i[b] = p
            }
            ),
            e = null,
            o = null,
            r.emit("slidesInView"))
        }
        ,{
            root: t.parentElement,
            threshold: s
        }),
        n.forEach(d => u.observe(d))
    }
    function h() {
        u && u.disconnect(),
        c = !0
    }
    function l(d) {
        return ft(i).reduce( (p, b) => {
            const a = parseInt(b)
              , {isIntersecting: g} = i[a];
            return (d && g || !d && !g) && p.push(a),
            p
        }
        , [])
    }
    function m(d=!0) {
        if (d && e)
            return e;
        if (!d && o)
            return o;
        const p = l(d);
        return d && (e = p),
        d || (o = p),
        p
    }
    return {
        init: f,
        destroy: h,
        get: m
    }
}
function In(t, n, r, s, i, e) {
    const {measureSize: o, startEdge: u, endEdge: c} = t
      , f = r[0] && i
      , h = d()
      , l = p()
      , m = r.map(o)
      , x = b();
    function d() {
        if (!f)
            return 0;
        const g = r[0];
        return A(n[u] - g[u])
    }
    function p() {
        if (!f)
            return 0;
        const g = e.getComputedStyle(G(s));
        return parseFloat(g.getPropertyValue(`margin-${c}`))
    }
    function b() {
        return r.map( (g, S, I) => {
            const v = !S
              , w = Tt(I, S);
            return v ? m[S] + h : w ? m[S] + l : I[S + 1][u] - g[u]
        }
        ).map(A)
    }
    return {
        slideSizes: m,
        slideSizesWithGaps: x,
        startGap: h,
        endGap: l
    }
}
function Ln(t, n, r, s, i, e, o, u, c) {
    const {startEdge: f, endEdge: h, direction: l} = t
      , m = Lt(r);
    function x(a, g) {
        return ut(a).filter(S => S % g === 0).map(S => a.slice(S, S + g))
    }
    function d(a) {
        return a.length ? ut(a).reduce( (g, S, I) => {
            const v = G(g) || 0
              , w = v === 0
              , E = S === lt(a)
              , L = i[f] - e[v][f]
              , T = i[f] - e[S][h]
              , O = !s && w ? l(o) : 0
              , P = !s && E ? l(u) : 0
              , N = A(T - P - (L + O));
            return I && N > n + c && g.push(S),
            E && g.push(a.length),
            g
        }
        , []).map( (g, S, I) => {
            const v = Math.max(I[S - 1] || 0);
            return a.slice(v, g)
        }
        ) : []
    }
    function p(a) {
        return m ? x(a, r) : d(a)
    }
    return {
        groupSlides: p
    }
}
function vn(t, n, r, s, i, e, o) {
    const {align: u, axis: c, direction: f, startIndex: h, loop: l, duration: m, dragFree: x, dragThreshold: d, inViewThreshold: p, slidesToScroll: b, skipSnaps: a, containScroll: g, watchResize: S, watchSlides: I, watchDrag: v} = e
      , w = 2
      , E = rn()
      , L = E.measure(n)
      , T = r.map(E.measure)
      , O = nn(c, f)
      , P = O.measureSize(L)
      , N = sn(P)
      , J = Wt(u, P)
      , z = !l && !!g
      , $ = l || !!g
      , {slideSizes: Z, slideSizesWithGaps: U, startGap: X, endGap: _} = In(O, L, T, r, $, i)
      , W = Ln(O, P, b, l, L, T, X, _, w)
      , {snaps: K, snapsAligned: ot} = mn(O, J, L, T, W)
      , Q = -G(K) + G(U)
      , {snapsContained: st, scrollContainLimit: it} = an(P, Q, ot, g, w)
      , V = z ? st : ot
      , {limit: R} = ln(Q, V, l)
      , C = Bt(lt(V), h, l)
      , rt = C.clone()
      , B = ut(r)
      , M = ({dragHandler: nt, scrollBody: yt, scrollBounds: St, options: {loop: dt}}) => {
        dt || St.constrain(nt.pointerDown()),
        yt.seek()
    }
      , y = ({scrollBody: nt, translate: yt, location: St, offsetLocation: dt, scrollLooper: qt, slideLooper: $t, dragHandler: Ut, animation: _t, eventHandler: Mt, options: {loop: Kt}}, Qt) => {
        const Pt = nt.velocity()
          , Ft = nt.settled();
        Ft && !Ut.pointerDown() && (_t.stop(),
        Mt.emit("settle")),
        Ft || Mt.emit("scroll"),
        dt.set(St.get() - Pt + Pt * Qt),
        Kt && (qt.loop(nt.direction()),
        $t.loop()),
        yt.to(dt.get())
    }
      , D = tn(s, i, () => M(bt), nt => y(bt, nt))
      , F = .68
      , k = V[C.get()]
      , q = pt(k)
      , j = pt(k)
      , H = pt(k)
      , tt = un(q, j, H, m, F)
      , gt = hn(l, V, Q, R, H)
      , ht = bn(D, C, rt, tt, gt, H, o)
      , Ot = pn(R)
      , At = at()
      , Gt = En(n, r, o, p)
      , {slideRegistry: wt} = gn(z, g, V, it, W, B)
      , Rt = yn(t, r, wt, ht, tt, At, o)
      , bt = {
        ownerDocument: s,
        ownerWindow: i,
        eventHandler: o,
        containerRect: L,
        slideRects: T,
        animation: D,
        axis: O,
        dragHandler: en(O, t, s, i, H, on(O, i), q, D, ht, tt, gt, C, o, N, x, d, a, F, v),
        eventStore: At,
        percentOfView: N,
        index: C,
        indexPrevious: rt,
        limit: R,
        location: q,
        offsetLocation: j,
        options: e,
        resizeHandler: cn(n, o, i, r, O, S, E),
        scrollBody: tt,
        scrollBounds: fn(R, j, H, tt, N),
        scrollLooper: dn(Q, R, j, [q, j, H]),
        scrollProgress: Ot,
        scrollSnapList: V.map(Ot.get),
        scrollSnaps: V,
        scrollTarget: gt,
        scrollTo: ht,
        slideLooper: Sn(O, P, Q, Z, U, K, V, j, r),
        slideFocus: Rt,
        slidesHandler: xn(n, o, I),
        slidesInView: Gt,
        slideIndexes: B,
        slideRegistry: wt,
        slidesToScroll: W,
        target: H,
        translate: jt(O, n)
    };
    return bt
}
function Dn() {
    let t = {}, n;
    function r(f) {
        n = f
    }
    function s(f) {
        return t[f] || []
    }
    function i(f) {
        return s(f).forEach(h => h(n, f)),
        c
    }
    function e(f, h) {
        return t[f] = s(f).concat([h]),
        c
    }
    function o(f, h) {
        return t[f] = s(f).filter(l => l !== h),
        c
    }
    function u() {
        t = {}
    }
    const c = {
        init: r,
        emit: i,
        off: o,
        on: e,
        clear: u
    };
    return c
}
const Tn = {
    align: "center",
    axis: "x",
    container: null,
    slides: null,
    containScroll: "trimSnaps",
    direction: "ltr",
    slidesToScroll: 1,
    inViewThreshold: 0,
    breakpoints: {},
    dragFree: !1,
    dragThreshold: 10,
    loop: !1,
    skipSnaps: !1,
    duration: 25,
    startIndex: 0,
    active: !0,
    watchDrag: !0,
    watchResize: !0,
    watchSlides: !0
};
function On(t) {
    function n(e, o) {
        return zt(e, o || {})
    }
    function r(e) {
        const o = e.breakpoints || {}
          , u = ft(o).filter(c => t.matchMedia(c).matches).map(c => o[c]).reduce( (c, f) => n(c, f), {});
        return n(e, u)
    }
    function s(e) {
        return e.map(o => ft(o.breakpoints || {})).reduce( (o, u) => o.concat(u), []).map(t.matchMedia)
    }
    return {
        mergeOptions: n,
        optionsAtMedia: r,
        optionsMediaQueries: s
    }
}
function An(t) {
    let n = [];
    function r(e, o) {
        return n = o.filter( ({options: u}) => t.optionsAtMedia(u).active !== !1),
        n.forEach(u => u.init(e, t)),
        o.reduce( (u, c) => Object.assign(u, {
            [c.name]: c
        }), {})
    }
    function s() {
        n = n.filter(e => e.destroy())
    }
    return {
        init: r,
        destroy: s
    }
}
function mt(t, n, r) {
    const s = t.ownerDocument
      , i = s.defaultView
      , e = On(i)
      , o = An(e)
      , u = at()
      , c = Dn()
      , {mergeOptions: f, optionsAtMedia: h, optionsMediaQueries: l} = e
      , {on: m, off: x, emit: d} = c
      , p = P;
    let b = !1, a, g = f(Tn, mt.globalOptions), S = f(g), I = [], v, w, E;
    function L() {
        const {container: M, slides: y} = S;
        w = (xt(M) ? t.querySelector(M) : M) || t.children[0];
        const F = xt(y) ? w.querySelectorAll(y) : y;
        E = [].slice.call(F || w.children)
    }
    function T(M) {
        const y = vn(t, w, E, s, i, M, c);
        if (M.loop && !y.slideLooper.canLoop()) {
            const D = Object.assign({}, M, {
                loop: !1
            });
            return T(D)
        }
        return y
    }
    function O(M, y) {
        b || (g = f(g, M),
        S = h(g),
        I = y || I,
        L(),
        a = T(S),
        l([g, ...I.map( ({options: D}) => D)]).forEach(D => u.add(D, "change", P)),
        S.active && (a.translate.to(a.location.get()),
        a.animation.init(),
        a.slidesInView.init(),
        a.slideFocus.init(),
        a.eventHandler.init(B),
        a.resizeHandler.init(B),
        a.slidesHandler.init(B),
        a.options.loop && a.slideLooper.loop(),
        w.offsetParent && E.length && a.dragHandler.init(B),
        v = o.init(B, I)))
    }
    function P(M, y) {
        const D = K();
        N(),
        O(f({
            startIndex: D
        }, M), y),
        c.emit("reInit")
    }
    function N() {
        a.dragHandler.destroy(),
        a.eventStore.clear(),
        a.translate.clear(),
        a.slideLooper.clear(),
        a.resizeHandler.destroy(),
        a.slidesHandler.destroy(),
        a.slidesInView.destroy(),
        a.animation.destroy(),
        o.destroy(),
        u.clear()
    }
    function J() {
        b || (b = !0,
        u.clear(),
        N(),
        c.emit("destroy"),
        c.clear())
    }
    function z(M, y, D) {
        !S.active || b || (a.scrollBody.useBaseFriction().useDuration(y === !0 ? 0 : S.duration),
        a.scrollTo.index(M, D || 0))
    }
    function $(M) {
        const y = a.index.add(1).get();
        z(y, M, -1)
    }
    function Z(M) {
        const y = a.index.add(-1).get();
        z(y, M, 1)
    }
    function U() {
        return a.index.add(1).get() !== K()
    }
    function X() {
        return a.index.add(-1).get() !== K()
    }
    function _() {
        return a.scrollSnapList
    }
    function W() {
        return a.scrollProgress.get(a.location.get())
    }
    function K() {
        return a.index.get()
    }
    function ot() {
        return a.indexPrevious.get()
    }
    function Q() {
        return a.slidesInView.get()
    }
    function st() {
        return a.slidesInView.get(!1)
    }
    function it() {
        return v
    }
    function V() {
        return a
    }
    function R() {
        return t
    }
    function C() {
        return w
    }
    function rt() {
        return E
    }
    const B = {
        canScrollNext: U,
        canScrollPrev: X,
        containerNode: C,
        internalEngine: V,
        destroy: J,
        off: x,
        on: m,
        emit: d,
        plugins: it,
        previousScrollSnap: ot,
        reInit: p,
        rootNode: R,
        scrollNext: $,
        scrollPrev: Z,
        scrollProgress: W,
        scrollSnapList: _,
        scrollTo: z,
        selectedScrollSnap: K,
        slideNodes: rt,
        slidesInView: Q,
        slidesNotInView: st
    };
    return O(n, r),
    setTimeout( () => c.emit("init"), 0),
    B
}
mt.globalOptions = void 0;
function Ht(t={}, n=[]) {
    const r = Y.useRef(t)
      , s = Y.useRef(n)
      , [i,e] = Y.useState()
      , [o,u] = Y.useState()
      , c = Y.useCallback( () => {
        i && i.reInit(r.current, s.current)
    }
    , [i]);
    return Y.useEffect( () => {
        if (Xt() && o) {
            mt.globalOptions = Ht.globalOptions;
            const f = mt(o, r.current, s.current);
            return e(f),
            () => f.destroy()
        } else
            e(void 0)
    }
    , [o, e]),
    Y.useEffect( () => {
        It(r.current, t) || (r.current = t,
        c())
    }
    , [t, c]),
    Y.useEffect( () => {
        Yt(s.current, n) || (s.current = n,
        c())
    }
    , [n, c]),
    [u, i]
}
Ht.globalOptions = void 0;
function Fn() {
    return typeof document < "u"&&
								  document.dir==="rtl"
								  ?"rtl"
								  :"ltr"
								  }
								  const
								  wn="/public/fallback-D2RQp9E7.webp"
								  ;
								  function
								  kn(t)
								  {
								  t.currentTarget.src=wn
								  }
								  export
								  {wn
								  as
								  f,
								  Fn
								  as
								  g,
								  kn
								  as
								  h,
								  Ht
								  as
								  u};
								  #
								  sourceMappingURL=handle-image-error-JuubN3aP.js.map