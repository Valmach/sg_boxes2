import {r as n, j as a} from "./components-BQ94cas1.js";
import {a as c, c as p, d as i, s as b} from "./hooks-B1p9ZFDx.js";
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
  e._sentryDebugIds[s]="374d7179-d7d4-4c4c-8d66-4b65e013f90e"
  ,
  e._sentryDebugIdIdentifier="sentry-dbid-374d7179-d7d4-4c4c-8d66-4b65e013f90e"
  )
  }
  catch
  {}
  }
  )();
  const
  l=n.forwardRef(
  ({direction:
  e={
  base:"column"
  ,
  xs:"row"
  },
  className:
  s,
  children:
  t,
  ...o},
  d)=> {
    const r = n.useRef()
      , f = c("p-button-group");
    p( () => {
        r.current.direction = e
    }
    , [e]);
    const u = {
        ...o,
        children: t,
        suppressHydrationWarning: !0,
        class: i(r, s),
        ref: b(r, d)
    };
    return a.jsx(f, {
        ...u
    })
}
);
export {l as P};
//# sourceMappingURL=button-group.wrapper-1pwZhjUP.js.map
