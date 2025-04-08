import {r as t, j as w} from "./components-BQ94cas1.js";
import {a as x, b as I, c as h, d as E, s as R} from "./hooks-B1p9ZFDx.js";
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
  e._sentryDebugIds[s]="c5d6665a-73af-4b82-9665-9977bbb3cbd6"
  ,
  e._sentryDebugIdIdentifier="sentry-dbid-c5d6665a-73af-4b82-9665-9977bbb3cbd6"
  )
  }
  catch
  {}
  }
  )();
  const
  j=t.forwardRef(
  ({aria:
  e,
  color:
  s="primary"
  ,
  lazy:
  o,
  name:
  a="arrow-right"
  ,
  size:
  c="small"
  ,
  source:
  f,
  theme:
  d,
  className:
  i,
  ...u},
  b)=> {
    const r = t.useRef()
      , p = x("p-icon")
      , n = [e, s, o, a, c, f, d || I()];
    h( () => {
        const {current: l} = r;
        ["aria", "color", "lazy", "name", "size", "source", "theme"].forEach( (m, g) => l[m] = n[g])
    }
    , n);
    const y = {
        ...u,
        suppressHydrationWarning: !0,
        class: E(r, i),
        ref: R(r, b)
    };
    return w.jsx(p, {
        ...y
    })
}
);
export {j as P};
//# sourceMappingURL=icon.wrapper-ggpjSokX.js.map
