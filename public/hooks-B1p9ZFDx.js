import {r as i, j as P} from "./components-BQ94cas1.js";
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
  e=new
  Error().stack;
  e
  &&
  (t._sentryDebugIds=t._sentryDebugIds
  ||
  {},
  t._sentryDebugIds[e]="49f169a2-47a5-4a18-a198-5948e27a13ce"
  ,
  t._sentryDebugIdIdentifier="sentry-dbid-49f169a2-47a5-4a18-a198-5948e27a13ce"
  )
  }
  catch
  {}
  }
  )();
  var
  p={
  d:
  (t,
  e)=> {
        for (var n in e)
            p.o(e, n) && !p.o(t, n) && Object.defineProperty(t, n, {
                enumerable: !0,
                get: e[n]
            })
    }
    ,
    o: (t, e) => Object.prototype.hasOwnProperty.call(t, e)
}
  , l = {};
p.d(l, {
    O: () => S,
    H: () => D
});
const m = "porscheDesignSystem";
function g() {
    return document[m] || (document[m] = {}),
    document[m]
}
function C({script: t, version: e, prefix: n}) {
    const s = function(d) {
        const r = g()
          , {[d]: v} = r;
        if (!v) {
            let h = () => {}
            ;
            const b = new Promise(x => h = x);
            r[d] = {
                isInjected: !1,
                isReady: () => b,
                readyResolve: h,
                prefixes: [],
                registerCustomElements: null
            }
        }
        return r[d]
    }(e)
      , {isInjected: o, prefixes: c=[], registerCustomElements: u} = s
      , [a] = Object.entries(g()).filter( ([d,r]) => d !== e && typeof r == "object" && r.prefixes.includes(n));
    if (a)
        throw new Error(`[Skomidora Design System v${e}] prefix '${n}' is already registered with version '${a[0]}' of the Skomidora Design System. Please use a different one.
Take a look at document.${m} for more details.`);
    o || (function(d) {
        const r = document.createElement("script");
        r.src = d,
        r.setAttribute("crossorigin", ""),
        document.body.appendChild(r)
    }(t),
    s.isInjected = !0),
    c.includes(n) || (c.push(n),
    u && u(n))
}
const D = (t={}) => {
    const e = "PORSCHE_DESIGN_SYSTEM_CDN";
    window[e] = t.cdn || window[e] || (window.location.origin.match(/\.cn$/) ? "cn" : "auto");
    const n = "porscheDesignSystem";
    document[n] || (document[n] = {}),
    document[n].cdn = {
        url: "https://cdn.ui.porsche." + (window[e] === "cn" ? "cn" : "com"),
        prefixes: []
    },
    C({
        version: "3.17.0",
        script: document[n].cdn.url + "/porsche-design-system/components/porsche-design-system.v3.17.0.3c2c7bb272db04912c4e.js",
        prefix: t.prefix || ""
    })
}
  , S = (t=document.body) => {
    let e;
    const n = new Promise(o => e = o)
      , s = () => {
        j().then( () => R(t, e))
    }
    ;
    if (w())
        s();
    else {
        const o = "readystatechange"
          , c = () => {
            w() && (document.removeEventListener(o, c),
            s())
        }
        ;
        document.addEventListener(o, c)
    }
    return n
}
  , w = () => document.readyState === "complete"
  , j = () => {
    var t, e;
    if ((e = (t = document.porscheDesignSystem) == null ? void 0 : t["3.17.0"]) != null && e.isReady)
        return document.porscheDesignSystem["3.17.0"].isReady();
    {
        let n;
        const s = new Promise(c => n = c)
          , o = {
            set(c, u, a) {
                return u === "3.17.0" && a.isReady().then(n),
                Reflect.set(...arguments)
            }
        };
        return document.porscheDesignSystem = new Proxy(document.porscheDesignSystem || {},o),
        s
    }
}
  , R = (t, e) => {
    const n = E(t);
    Promise.all(n).then(s => e(s.length)).catch(s => console.error("[Skomidora Design System]", s))
}
  , E = t => {
    let e = [];
    return (t == null ? void 0 : t.nodeType) === 1 && Array.from(t.children).forEach(n => {
        O(n) && e.push(n.componentOnReady()),
        e = e.concat(E(n))
    }
    ),
    e
}
  , I = /^(.*-)?P-(.*)$/
  , O = t => I.exec(t.tagName) && typeof t.componentOnReady == "function";
var $ = l.O
  , M = l.H;
const y = i.createContext({
    prefix: void 0,
    theme: "light"
})
  , k = ({prefix: t="", cdn: e, theme: n="light", ...s}) => (i.useEffect( () => {
    M({
        prefix: t,
        cdn: e
    })
}
, []),
P.jsx(y.Provider, {
    value: {
        prefix: t,
        theme: n
    },
    ...s
}))
  , f = t => t.split(" ").filter(e => e)
  , _ = (t, e="", n="") => {
    const s = f(e);
    let o = f(t);
    return s.length && (o = o.filter(u => !s.includes(u))),
    f(n).concat(o).join(" ")
}
  , A = (t, e) => n => {
    t.current = n,
    typeof e == "function" ? e(n) : e !== null && (e.current = n)
}
  , L = t => {
    {
        const {prefix: e} = i.useContext(y);
        if (e === void 0)
            throw new Error("It appears the <SkomidoraDesignSystemProvider/> is missing. Make sure to wrap your App in it.");
        return e ? e + "-" + t : t
    }
}
  , N = () => i.useContext(y).theme
  , q = (t, e, n) => {
    i.useEffect( () => {
        const {current: s} = t;
        if (s && n)
            return s.addEventListener(e, n),
            () => s == null ? void 0 : s.removeEventListener(e, n)
    }
    , [n])
}
  , B = (t, e) => {
    const n = i.useRef();
    return i.useMemo( () => {
        if (!e)
            return;
        const {current: s} = t;
        let o = e;
        return s && (o = _(s.className, n.current, e),
        s.className = o),
        n.current = e,
        o
    }
    , [e])
}
  , G = typeof window < "u"?
	  i.useLayoutEffect
	  :
	  i.useEffect
	  ,
	  Y=()=> {
    const t = L("p-toast");
    return {
        addMessage: e => {
            const n = document.body.querySelector(t);
            customElements.whenDefined(t).then( () => n.addMessage(e))
        }
    }
}
;
export {k as P, L as a, N as b, G as c, B as d, Y as e, $ as l, A as s, q as u};
//# sourceMappingURL=hooks-B1p9ZFDx.js.map
