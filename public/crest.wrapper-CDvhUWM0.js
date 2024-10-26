import {r as o, j as y} from "./components-BQ94cas1.js";
import {a as g, c as l, d as m, s as w} from "./hooks-B1p9ZFDx.js";
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
  e._sentryDebugIds[s]="89bd170b-f10c-468b-8bc8-38b408a92016"
  ,
  e._sentryDebugIdIdentifier="sentry-dbid-89bd170b-f10c-468b-8bc8-38b408a92016"
  )
  }
  catch
  {}
  }
  )();
  const
  I=o.forwardRef(
  ({aria:
  e,
  href:
  s,
  target:
  t="_self"
  ,
  className:
  a,
  ...f},
  c)=> {
    const r = o.useRef()
      , d = g("p-crest")
      , n = [e, s, t];
    l( () => {
        const {current: u} = r;
        ["aria", "href", "target"].forEach( (i, p) => u[i] = n[p])
    }
    , n);
    const b = {
        ...f,
        suppressHydrationWarning: !0,
        class: m(r, a),
        ref: w(r, c)
    };
    return y.jsx(d, {
        ...b
    })
}
);
export {I as P};
//# sourceMappingURL=crest.wrapper-CDvhUWM0.js.map
