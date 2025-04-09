const __vite__fileDeps = ["public/energy-efficiency-fr-DkYY5oaH.js", "public/components-BQ94cas1.js", "public/_sentry-release-injection-file-BRO_tjfx.js", "public/hooks-B1p9ZFDx.js", "public/divider.wrapper-CU-3kPw_.js", "public/energy-efficiency-ch-COd3h99p.js", "public/energy-efficiency-de-D5rI5Qku.js"]
  , __vite__mapDeps = i => i.map(i => __vite__fileDeps[i]);
import {p as P, _ as u} from "./parse-locale-D9or4wew.js";
import {h as R, u as O, b as $, a as L, r as n, j as t} from "./components-BQ94cas1.js";
import {u as S} from "./react-intersection-observer.modern-95dCzYlz.js";
import {u as V} from "./use-translation-DwNhbe0D.js";
import "./hooks-B1p9ZFDx.js";
import {P as N} from "./inline-notification.wrapper-DfmieoFa.js";
import {P as z} from "./spinner.wrapper-Bp4kkjaL.js";
import {O as I} from "./params-D7sg034s.js";
import "./_sentry-release-injection-file-BRO_tjfx.js";
(function() {
    try {
        var r = typeof window < "u"
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
  (r._sentryDebugIds=r._sentryDebugIds
  ||
  {},
  r._sentryDebugIds[e]="3b0587f0-ceee-4ff4-94c6-37b1f422c4d1"
  ,
  r._sentryDebugIdIdentifier="sentry-dbid-3b0587f0-ceee-4ff4-94c6-37b1f422c4d1"
  )
  }
  catch
  {}
  }
  )();
  const
  A=n.lazy(
  ()=> u( () => import("./energy-efficiency-fr-DkYY5oaH.js"), __vite__mapDeps([0, 1, 2, 3, 4])))
  , C = n.lazy( () => u( () => import("./energy-efficiency-ch-COd3h99p.js"), __vite__mapDeps([5, 1, 2, 3, 4])))
  , k = n.lazy( () => u( () => import("./energy-efficiency-de-D5rI5Qku.js"), __vite__mapDeps([6, 1, 2, 3, 4])));
function Q() {
    var g, x, E, _, b, D;
    const {load: r, ...e} = R()
      , y = (g = e.data) == null ? void 0 : g.eelData
      , j = (x = e.data) == null ? void 0 : x.eelDataDE
      , T = (E = e.data) == null ? void 0 : E.engineType
      , {market: {locale: i}, catalog: {orderType: o}} = O()
      , [a] = $()
      , {modelYear: s} = L()
      , [p,l] = S({
        rootMargin: "100% 0px"
    })
      , {t: c} = V()
      , h = n.useRef(a == null ? void 0 : a.get(I))
      , d = n.useRef(!1);
    n.useEffect( () => {
        if (l && (!d.current || h.current !== (a == null ? void 0 : a.get(I)))) {
            const w = s ? `/${i}/model/${s}/${o}/technical-data?${a}` : `/${i}/model/${o}/technical-data?${a}`;
            r(w),
            d.current = !0
        }
    }
    , [r, i, o, a, l, s]);
    const f = {
        eelData: y,
        eelDataDE: j,
        engineType: T,
        image: {
            url: (_ = e == null ? void 0 : e.data) == null ? void 0 : _.eelImageUrl,
            altText: (b = e == null ? void 0 : e.data) == null ? void 0 : b.eelImageAltText
        }
    };
    if ((D = e == null ? void 0 : e.data) != null && D.error)
        return t.jsx("div", {
            className: "mt-lg mb-xl text-primary text-sm",
            ref: p,
            children: t.jsx(N, {
                heading: c("error-fetching-technical-data-headline"),
                description: c("error-fetching-technical-data-text"),
                dismissButton: !1,
                state: "error",
                "aria-label": c("error-fetching-technical-data-headline")
            })
        });
    const {country: m} = P(i)
      , v = m === "DE" ? t.jsx(k, {
        technicalDataHolder: f
    }) : m === "FR" ? t.jsx(A, {
        technicalDataHolder: f
    }) : m === "CH" ? t.jsx(C, {
        technicalDataHolder: f
    }) : null;
    return t.jsx("div", {
        className: "mt-lg mb-xl text-primary text-sm",
        ref: p,
        children: l || d.current ? t.jsx(t.Fragment, {
            children: e.state === "idle" && e.data ? v : t.jsx("div", {
                className: "mx-auto flex justify-center",
                children: t.jsx(z, {
                    size: "large"
                })
            })
        }) : null
    })
}
export {Q as E};
//# sourceMappingURL=energy-efficiency-DWGOuA_D.js.map
