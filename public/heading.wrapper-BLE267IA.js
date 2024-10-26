import {r as n, j as x} from "./components-BQ94cas1.js";
import {a as w, b as h, c as E, d as I, s as R} from "./hooks-B1p9ZFDx.js";
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
  e._sentryDebugIds[s]="e825a5f5-1c1d-414b-adc3-ae0b80f8310c"
  ,
  e._sentryDebugIdIdentifier="sentry-dbid-e825a5f5-1c1d-414b-adc3-ae0b80f8310c"
  )
  }
  catch
  {}
  }
  )();
  const
  j=n.forwardRef(
  ({align:
  e="start"
  ,
  color:
  s="primary"
  ,
  ellipsis:
  t=!1,
  size:
  o="xx-large"
  ,
  tag:
  f,
  theme:
  c,
  className:
  d,
  children:
  i,
  ...u},
  p)=> {
    const r = n.useRef()
      , l = w("p-heading")
      , a = [e, s, t, o, f, c || h()];
    E( () => {
        const {current: y} = r;
        ["align", "color", "ellipsis", "size", "tag", "theme"].forEach( (b, m) => y[b] = a[m])
    }
    , a);
    const g = {
        ...u,
        children: i,
        suppressHydrationWarning: !0,
        class: I(r, d),
        ref: R(r, p)
    };
    return x.jsx(l, {
        ...g
    })
}
);
export {j as P};
//# sourceMappingURL=heading.wrapper-BLE267IA.js.map
