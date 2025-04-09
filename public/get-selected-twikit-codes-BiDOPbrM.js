import "./_sentry-release-injection-file-BRO_tjfx.js";
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
  r=new
  Error().stack;
  r
  &&
  (e._sentryDebugIds=e._sentryDebugIds
  ||
  {},
  e._sentryDebugIds[r]="c0022712-08a0-4268-9acb-ab8ab2f0c8db"
  ,
  e._sentryDebugIdIdentifier="sentry-dbid-c0022712-08a0-4268-9acb-ab8ab2f0c8db"
  )
  }
  catch
  {}
  }
  )();
  const
  n="customer"
  ,
  s="dealer"
  ;
  function
  c(e)
  {
  return
  e
  &&
  e.pathname.startsWith("
  dealer")
  ?
  s
  :
  n
  }
  function
  d(e=[],
  r=[])
  {
  return
  e.filter(t=> {
        if (typeof t != "string")
            return !1;
        const a = o(t);
        return r.includes(a)
    }
    ).filter(t => typeof t == "string").map(t => t)
}
function o(e) {
    return (e == null ? void 0 : e.replace("TW_PAG_", "").split("_").at(0)) || ""
}
export {s as C, d as a, n as b, o as e, c as g};
//# sourceMappingURL=get-selected-twikit-codes-BiDOPbrM.js.map
