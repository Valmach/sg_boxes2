import {E as p, o as M, p as h, q as v, s as b, t as y, v as C, w as g, x as E, y as F, z as $, A as S, r, B as k, C as P, D, G as H, j as R} from "./components-BQ94cas1.js";
import {h as O} from "./client-DJd2QVv9.js";
import "./_sentry-release-injection-file-BRO_tjfx.js";
(function() {
    try {
        var a = typeof window < "u"
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
  u=new
  Error().stack;
  u
  &&
  (a._sentryDebugIds=a._sentryDebugIds
  ||
  {},
  a._sentryDebugIds[u]="c360fa96-669a-469e-8011-502283b71908"
  ,
  a._sentryDebugIdIdentifier="sentry-dbid-c360fa96-669a-469e-8011-502283b71908"
  )
  }
  catch
  {}
  }
  )();
  **
  *
  @remix-run
  react
  v2.12.0
  *
  *
  Copyright
  (c)
  Remix
  Software
  Inc.
  *
  *
  This
  source
  code
  is
  licensed
  under
  the
  MIT
  license
  found
  in
  the
  *
  LICENSE.md
  file
  in
  the
  root
  directory
  of
  this
  source
  tree.
  *
  *
  @license
  MIT
  *
  function
  B(a)
  {
  if
  (!a)
  return
  null;
  let
  u=Object.entries(a)
  ,
  s={};
  for
  (let[n,e]
  of
  u)
  if
  (e
  &&
  e.__type==="RouteErrorResponse"
  )
  s[n]=new
  p(e.status,e.statusText,e.data,e.internal===!0);
  else
  if
  (e
  &&
  e.__type==="Error"
  )
  {
  if
  (e.__subType)
  {
  let
  i=window[e.__subType];
  if
  (typeof
  i=="function"
  )
  try
  {
  let
  o=new
  i(e.message);
  o.stack=e.stack,
  s[n]=o
  }
  catch
  {}
  }
  if
  (s[n]==null)
  {
  let
  i=new
  Error(e.message);
  i.stack=e.stack,
  s[n]=i
  }
  }
  else
  s[n]=e;
  return
  s
  }
  **
  *
  @remix-run
  react
  v2.12.0
  *
  *
  Copyright
  (c)
  Remix
  Software
  Inc.
  *
  *
  This
  source
  code
  is
  licensed
  under
  the
  MIT
  license
  found
  in
  the
  *
  LICENSE.md
  file
  in
  the
  root
  directory
  of
  this
  source
  tree.
  *
  *
  @license
  MIT
  *
  let
  d,
  t,
  x=!1;
  let
  c,
  L=new
  Promise(a=> {
    c = a
}
).catch( () => {}
);
function j(a) {
    if (!t) {
        if (window.__remixContext.future.unstable_singleFetch) {
            if (!d) {
                let l = window.__remixContext.stream;
                h(l, "No stream found for single fetch decoding"),
                window.__remixContext.stream = void 0,
                d = v(l, window).then(_ => {
                    window.__remixContext.state = _.value,
                    d.value = !0
                }
                ).catch(_ => {
                    d.error = _
                }
                )
            }
            if (d.error)
                throw d.error;
            if (!d.value)
                throw d
        }
        let i = b(window.__remixManifest.routes, window.__remixRouteModules, window.__remixContext.state, window.__remixContext.future, window.__remixContext.isSpaMode), o;
        if (!window.__remixContext.isSpaMode) {
            o = {
                ...window.__remixContext.state,
                loaderData: {
                    ...window.__remixContext.state.loaderData
                }
            };
            let l = y(i, window.location, window.__remixContext.basename);
            if (l)
                for (let _ of l) {
                    let w = _.route.id
                      , f = window.__remixRouteModules[w]
                      , m = window.__remixManifest.routes[w];
                    f && C(m, f, window.__remixContext.isSpaMode) && (f.HydrateFallback || !m.hasLoader) ? o.loaderData[w] = void 0 : m && !m.hasLoader && (o.loaderData[w] = null)
                }
            o && o.errors && (o.errors = B(o.errors))
        }
        t = g({
            routes: i,
            history: E(),
            basename: window.__remixContext.basename,
            future: {
                v7_normalizeFormMethod: !0,
                v7_fetcherPersist: window.__remixContext.future.v3_fetcherPersist,
                v7_partialHydration: !0,
                v7_prependBasename: !0,
                v7_relativeSplatPath: window.__remixContext.future.v3_relativeSplatPath,
                v7_skipActionErrorRevalidation: window.__remixContext.future.unstable_singleFetch === !0
            },
            hydrationData: o,
            mapRouteProperties: F,
            unstable_dataStrategy: window.__remixContext.future.unstable_singleFetch ? $(window.__remixManifest, window.__remixRouteModules, () => t) : void 0,
            unstable_patchRoutesOnNavigation: S(window.__remixManifest, window.__remixRouteModules, window.__remixContext.future, window.__remixContext.isSpaMode, window.__remixContext.basename)
        }),
        t.state.initialized && (x = !0,
        t.initialize()),
        t.createRoutesForHMR = M,
        window.__remixRouter = t,
        c && c(t)
    }
    let[u,s] = r.useState(void 0)
      , [n,e] = r.useState(t.state.location);
    return r.useLayoutEffect( () => {
        x || (x = !0,
        t.initialize())
    }
    , []),
    r.useLayoutEffect( () => t.subscribe(i => {
        i.location !== n && e(i.location)
    }
    ), [n]),
    k(t, window.__remixManifest, window.__remixRouteModules, window.__remixContext.future, window.__remixContext.isSpaMode),
    r.createElement(r.Fragment, null, r.createElement(P.Provider, {
        value: {
            manifest: window.__remixManifest,
            routeModules: window.__remixRouteModules,
            future: window.__remixContext.future,
            criticalCss: u,
            isSpaMode: window.__remixContext.isSpaMode
        }
    }, r.createElement(D, {
        location: n
    }, r.createElement(H, {
        router: t,
        fallbackElement: null,
        future: {
            v7_startTransition: !0
        }
    }))), window.__remixContext.future.unstable_singleFetch ? r.createElement(r.Fragment, null) : null)
}
function I() {
    r.startTransition( () => {
        O(document, R.jsx(r.StrictMode, {
            children: R.jsx(j, {})
        }))
    }
    )
}
I();
//# sourceMappingURL=entry.client-D7VP97mf.js.map
