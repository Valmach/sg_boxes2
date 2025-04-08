import {r as n, j as w} from "./components-BQ94cas1.js";
import {a as x, b as h, c as E, d as I, s as R} from "./hooks-B1p9ZFDx.js";
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
  e._sentryDebugIds[s]="af2ac447-92f9-442f-9f78-ef51c262d9bd"
  ,
  e._sentryDebugIdIdentifier="sentry-dbid-af2ac447-92f9-442f-9f78-ef51c262d9bd"
  )
  }
  catch
  {}
  }
  )();
  const
  j=n.forwardRef(
  ({hideLabel:
  e=!1,
  label:
  s=""
  ,
  loading:
  t=!1,
  message:
  o=""
  ,
  state:
  f="none"
  ,
  theme:
  c,
  className:
  d,
  children:
  p,
  ...u},
  i)=> {
    const r = n.useRef()
      , b = x("p-checkbox-wrapper")
      , a = [e, s, t, o, f, c || h()];
    E( () => {
        const {current: y} = r;
        ["hideLabel", "label", "loading", "message", "state", "theme"].forEach( (g, m) => y[g] = a[m])
    }
    , a);
    const l = {
        ...u,
        children: p,
        suppressHydrationWarning: !0,
        class: I(r, d),
        ref: R(r, i)
    };
    return w.jsx(b, {
        ...l
    })
}
);
export {j as P};
//# sourceMappingURL=checkbox-wrapper.wrapper-D0tBCd6V.js.map
