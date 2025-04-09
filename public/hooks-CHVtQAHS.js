import { r as i, j as C } from "./components-2MqjI5-B.js";
var f = {
    d: (s, e) => {
      for (var t in e)
        f.o(e, t) &&
          !f.o(s, t) &&
          Object.defineProperty(s, t, { enumerable: !0, get: e[t] });
    },
    o: (s, e) => Object.prototype.hasOwnProperty.call(s, e),
  },
  l = {};
f.d(l, { O: () => b, H: () => D });
const m = "porscheDesignSystem";
function g() {
  return document[m] || (document[m] = {}), document[m];
}
function S({ script: s, version: e, prefix: t }) {
  const n = (function (u) {
      const r = g(),
        { [u]: v } = r;
      if (!v) {
        let h = () => {};
        const x = new Promise((P) => (h = P));
        r[u] = {
          isInjected: !1,
          isReady: () => x,
          readyResolve: h,
          prefixes: [],
          registerCustomElements: null,
        };
      }
      return r[u];
    })(e),
    { isInjected: o, prefixes: c = [], registerCustomElements: d } = n,
    [a] = Object.entries(g()).filter(
      ([u, r]) => u !== e && typeof r == "object" && r.prefixes.includes(t)
    );
  if (a)
    throw new Error(`[Porsche Design System v${e}] prefix '${t}' is already registered with version '${a[0]}' of the Porsche Design System. Please use a different one.
Take a look at document.${m} for more details.`);
  o ||
    ((function (u) {
      const r = document.createElement("script");
      (r.src = u),
        r.setAttribute("crossorigin", ""),
        document.body.appendChild(r);
    })(s),
    (n.isInjected = !0)),
    c.includes(t) || (c.push(t), d && d(t));
}
const D = (s = {}) => {
    const e = "PORSCHE_DESIGN_SYSTEM_CDN";
    window[e] =
      s.cdn ||
      window[e] ||
      (window.location.origin.match(/\.cn$/) ? "cn" : "auto");
    const t = "porscheDesignSystem";
    document[t] || (document[t] = {}),
      (document[t].cdn = {
        url: "https://cdn.ui.porsche." + (window[e] === "cn" ? "cn" : "com"),
        prefixes: [],
      }),
      S({
        version: "3.17.0",
        script:
          document[t].cdn.url +
          "/porsche-design-system/components/porsche-design-system.v3.17.0.3c2c7bb272db04912c4e.js",
        prefix: s.prefix || "",
      });
  },
  b = (s = document.body) => {
    let e;
    const t = new Promise((o) => (e = o)),
      n = () => {
        j().then(() => R(s, e));
      };
    if (w()) n();
    else {
      const o = "readystatechange",
        c = () => {
          w() && (document.removeEventListener(o, c), n());
        };
      document.addEventListener(o, c);
    }
    return t;
  },
  w = () => document.readyState === "complete",
  j = () => {
    var s, e;
    if (
      (e = (s = document.porscheDesignSystem) == null ? void 0 : s["3.17.0"]) !=
        null &&
      e.isReady
    )
      return document.porscheDesignSystem["3.17.0"].isReady();
    {
      let t;
      const n = new Promise((c) => (t = c)),
        o = {
          set(c, d, a) {
            return (
              d === "3.17.0" && a.isReady().then(t), Reflect.set(...arguments)
            );
          },
        };
      return (
        (document.porscheDesignSystem = new Proxy(
          document.porscheDesignSystem || {},
          o
        )),
        n
      );
    }
  },
  R = (s, e) => {
    const t = E(s);
    Promise.all(t)
      .then((n) => e(n.length))
      .catch((n) => console.error("[Porsche Design System]", n));
  },
  E = (s) => {
    let e = [];
    return (
      (s == null ? void 0 : s.nodeType) === 1 &&
        Array.from(s.children).forEach((t) => {
          M(t) && e.push(t.componentOnReady()), (e = e.concat(E(t)));
        }),
      e
    );
  },
  O = /^(.*-)?P-(.*)$/,
  M = (s) => O.exec(s.tagName) && typeof s.componentOnReady == "function";
var k = l.O,
  L = l.H;
const y = i.createContext({ prefix: void 0, theme: "light" }),
  A = ({ prefix: s = "", cdn: e, theme: t = "light", ...n }) => (
    i.useEffect(() => {
      L({ prefix: s, cdn: e });
    }, []),
    C.jsx(y.Provider, { value: { prefix: s, theme: t }, ...n })
  ),
  p = (s) => s.split(" ").filter((e) => e),
  T = (s, e = "", t = "") => {
    const n = p(e);
    let o = p(s);
    return (
      n.length && (o = o.filter((d) => !n.includes(d))),
      p(t).concat(o).join(" ")
    );
  },
  N = (s, e) => (t) => {
    (s.current = t),
      typeof e == "function" ? e(t) : e !== null && (e.current = t);
  },
  $ = (s) => {
    {
      const { prefix: e } = i.useContext(y);
      if (e === void 0)
        throw new Error(
          "It appears the <PorscheDesignSystemProvider /> is missing. Make sure to wrap your App in it."
        );
      return e ? e + "-" + s : s;
    }
  },
  _ = () => i.useContext(y).theme,
  q = (s, e, t) => {
    i.useEffect(() => {
      const { current: n } = s;
      if (n && t)
        return (
          n.addEventListener(e, t),
          () => (n == null ? void 0 : n.removeEventListener(e, t))
        );
    }, [t]);
  },
  B = (s, e) => {
    const t = i.useRef();
    return i.useMemo(() => {
      if (!e) return;
      const { current: n } = s;
      let o = e;
      return (
        n && ((o = T(n.className, t.current, e)), (n.className = o)),
        (t.current = e),
        o
      );
    }, [e]);
  },
  G = typeof window < "u" ? i.useLayoutEffect : i.useEffect,
  Y = () => {
    const s = $("p-toast");
    return {
      addMessage: (e) => {
        const t = document.body.querySelector(s);
        customElements.whenDefined(s).then(() => t.addMessage(e));
      },
    };
  };
export {
  A as P,
  $ as a,
  _ as b,
  G as c,
  B as d,
  Y as e,
  k as l,
  N as s,
  q as u,
};
