import {r as n, j as l} from "./components-BQ94cas1.js";
import {a as g, b as m, c as w, d as x, s as h} from "./hooks-B1p9ZFDx.js";
(function() {
    try {
        var e = typeof window < "u"
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
  s=new
  Error().stack;
  s
  &&
  (e._sentryDebugIds=e._sentryDebugIds
  ||
  {},
  e._sentryDebugIds[s]="882c7555-adbf-4d5c-94a2-a0890a604ebc"
  ,
  e._sentryDebugIdIdentifier="sentry-dbid-882c7555-adbf-4d5c-94a2-a0890a604ebc"
  )
  }
  catch
  {}
  }
  )();
  const
  I=n.forwardRef(
  ({color:
  e="contrast-low"
  ,
  direction:
  s="horizontal"
  ,
  orientation:
  o,
  theme:
  a,
  className:
  c,
  ...d},
  f)=> {
    const r = n.useRef()
      , i = g("p-divider")
      , t = [e, s, o, a || m()];
    w( () => {
        const {current: p} = r;
        ["color", "direction", "orientation", "theme"].forEach( (b, y) => p[b] = t[y])
    }
    , t);
    const u = {
        ...d,
        suppressHydrationWarning: !0,
        class: x(r, c),
        ref: h(r, f)
    };
    return l.jsx(i, {
        ...u
    })
}
);
export {I as P};
//# sourceMappingURL=divider.wrapper-CU-3kPw_.js.map
