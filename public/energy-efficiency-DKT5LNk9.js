const __vite__fileDeps = [
    "public/energy-efficiency-fr-B21tbd2i.js",
    "public/components-2MqjI5-B.js",
    "public/hooks-CHVtQAHS.js",
    "public/divider.wrapper-DKm-Ua17.js",
    "public/energy-efficiency-ch-DBZxvf1B.js",
    "public/energy-efficiency-de-DQ5_lg8P.js",
  ],
  __vite__mapDeps = (i) => i.map((i) => __vite__fileDeps[i]);
import { _ as u } from "./preload-helper-BqjOJQfC.js";
import {
  g as O,
  u as $,
  b as L,
  a as S,
  r,
  j as t,
} from "./components-2MqjI5-B.js";
import { u as V } from "./react-intersection-observer.modern-CmZdv0Ep.js";
import { u as N } from "./use-translation-VEMTQy0Z.js";
import "./hooks-CHVtQAHS.js";
import { P as b } from "./inline-notification.wrapper-DwLc4HLb.js";
import { P as z } from "./spinner.wrapper-Cz8Nc74A.js";
import { p as A } from "./parse-locale-DPPT8cgT.js";
import { O as T } from "./params-BYO_vLfu.js";
const w = r.lazy(() =>
    u(
      () => import("./energy-efficiency-fr-B21tbd2i.js"),
      __vite__mapDeps([0, 1, 2, 3])
    )
  ),
  C = r.lazy(() =>
    u(
      () => import("./energy-efficiency-ch-DBZxvf1B.js"),
      __vite__mapDeps([4, 1, 2, 3])
    )
  ),
  H = r.lazy(() =>
    u(
      () => import("./energy-efficiency-de-DQ5_lg8P.js"),
      __vite__mapDeps([5, 1, 2, 3])
    )
  );
function Q() {
  var x, g, y, E, _, j;
  const { load: f, ...e } = O(),
    D = (x = e.data) == null ? void 0 : x.eelData,
    I = (g = e.data) == null ? void 0 : g.eelDataDE,
    P = (y = e.data) == null ? void 0 : y.engineType,
    {
      market: { locale: n },
      catalog: { orderType: i },
    } = $(),
    [a] = L(),
    { modelYear: o } = S(),
    [p, s] = V({ rootMargin: "100% 0px" }),
    { t: l } = N(),
    R = r.useRef(a == null ? void 0 : a.get(T)),
    c = r.useRef(!1);
  r.useEffect(() => {
    if (s && (!c.current || R.current !== (a == null ? void 0 : a.get(T)))) {
      const v = o
        ? `/${n}/model/${o}/${i}/technical-data?${a}`
        : `/${n}/model/${i}/technical-data?${a}`;
      f(v), (c.current = !0);
    }
  }, [f, n, i, a, s, o]);
  const m = {
    eelData: D,
    eelDataDE: I,
    engineType: P,
    image: {
      url: (E = e == null ? void 0 : e.data) == null ? void 0 : E.eelImageUrl,
      altText:
        (_ = e == null ? void 0 : e.data) == null ? void 0 : _.eelImageAltText,
    },
  };
  if ((j = e == null ? void 0 : e.data) != null && j.error)
    return t.jsx("div", {
      className: "mt-lg mb-xl text-primary text-sm",
      ref: p,
      children: t.jsx(b, {
        heading: l("error-fetching-technical-data-headline"),
        description: l("error-fetching-technical-data-text"),
        dismissButton: !1,
        state: "error",
        "aria-label": l("error-fetching-technical-data-headline"),
      }),
    });
  const { country: d } = A(n),
    h =
      d === "DE"
        ? t.jsx(H, { technicalDataHolder: m })
        : d === "FR"
        ? t.jsx(w, { technicalDataHolder: m })
        : d === "CH"
        ? t.jsx(C, { technicalDataHolder: m })
        : null;
  return t.jsx("div", {
    className: "mt-lg mb-xl text-primary text-sm",
    ref: p,
    children:
      s || c.current
        ? t.jsx(t.Fragment, {
            children:
              e.state === "idle" && e.data
                ? h
                : t.jsx("div", {
                    className: "mx-auto flex justify-center",
                    children: t.jsx(z, { size: "large" }),
                  }),
          })
        : null,
  });
}
export { Q as E };
