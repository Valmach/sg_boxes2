import {r as m, j as t} from "./components-BQ94cas1.js";
import {a as A, c as R, d as L, s as M} from "./hooks-B1p9ZFDx.js";
import {P as U} from "./link.wrapper-DpMHL36k.js";
import {u as E} from "./react-intersection-observer.modern-95dCzYlz.js";
import {A as l} from "./analytics-tracking-DWTr_3jg.js";
import "./_sentry-release-injection-file-BRO_tjfx.js";
import {u as b} from "./use-translation-DwNhbe0D.js";
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
  a=new
  Error().stack;
  a
  &&
  (e._sentryDebugIds=e._sentryDebugIds
  ||
  {},
  e._sentryDebugIds[a]="fc256378-7346-4b0f-a6d9-e59ad4e6d768"
  ,
  e._sentryDebugIdIdentifier="sentry-dbid-fc256378-7346-4b0f-a6d9-e59ad4e6d768"
  )
  }
  catch
  {}
  }
  )();
  const
  k=m.forwardRef(
  ({align:
  e="bottom"
  ,
  aria:
  a,
  aspectRatio:
  n="4/3"
  ,
  background:
  i="dark"
  ,
  compact:
  c=!1,
  description:
  s,
  download:
  p,
  gradient:
  r=!0,
  href:
  o,
  label:
  d,
  rel:
  f,
  size:
  w="medium"
  ,
  target:
  y="_self"
  ,
  weight:
  N="semi-bold"
  ,
  className:
  j,
  children:
  T,
  ...v},
  I)=> {
    const u = m.useRef()
      , C = A("p-link-tile")
      , x = [e, a, n, i, c, s, p, r, o, d, f, w, y, N];
    R( () => {
        const {current: g} = u;
        ["align", "aria", "aspectRatio", "background", "compact", "description", "download", "gradient", "href", "label", "rel", "size", "target", "weight"].forEach( (P, D) => g[P] = x[D])
    }
    , x);
    const _ = {
        ...v,
        children: T,
        suppressHydrationWarning: !0,
        class: L(u, j),
        ref: M(u, I)
    };
    return t.jsx(C, {
        ..._
    })
}
)
  , B = "PAGConfigurator_TimeConfig_Load"
  , V = "cross-selling";
function $(e, a) {
    const n = {
        sectionName: V
    }
      , i = {
        displayElementType: "banner",
        displayElementId: a ?? "",
        displayElementName: e
    };
    l.push({
        event: B,
        componentDisplay: i,
        pageExperience: n
    })
}
const O = "PAGConfigurator_TimeConfig_Click"
  , z = "cross-selling";
function G(e, a, n) {
    const i = {
        sectionName: z
    }
      , c = {
        displayElementType: "banner",
        displayElementId: n ?? "",
        displayElementName: e
    }
      , s = {
        clickElementType: "button",
        clickElementId: n ?? "",
        clickElementName: a
    };
    l.push({
        event: O,
        componentClick: s,
        componentDisplay: c,
        pageExperience: i
    })
}
const W = "PAGConfigurator_OnlineShop_Load"
  , H = "cross-selling";
function q(e) {
    const a = {
        sectionName: H
    }
      , n = {
        displayElementType: "banner",
        displayElementId: e ?? "",
        displayElementName: "generic"
    };
    l.push({
        event: W,
        componentDisplay: n,
        pageExperience: a
    })
}
const J = "PAGConfigurator_OnlineShop_Click"
  , K = "cross-selling";
function Q(e, a, n) {
    const i = {
        sectionName: K
    }
      , c = {
        displayElementType: "banner",
        displayElementId: e ?? "",
        displayElementName: "generic"
    }
      , s = {
        clickElementType: "button",
        clickElementId: e ?? "",
        clickElementName: a,
        targetUrl: n
    };
    l.push({
        event: J,
        componentClick: s,
        componentDisplay: c,
        pageExperience: i
    })
}
function ie({crossSelling: e, modelFamily: a="", orderType: n}) {
    return t.jsx("div", {
        id: "cross-selling",
        className: "pds-grid bg-background-base",
        children: t.jsxs("div", {
            className: "my-lg gap-md col-[extended-start/extended-end] flex flex-wrap justify-center",
            children: [e != null && e.chargingInstallationService ? t.jsx("div", {
                className: "w-full",
                children: t.jsx(Y, {
                    title: e.chargingInstallationService.title,
                    description: e.chargingInstallationService.description,
                    buttonLabel: e.chargingInstallationService.buttonLabel,
                    image: e.chargingInstallationService.image,
                    linkUrl: e.chargingInstallationService.linkUrl
                })
            }) : null, e != null && e.timepieces ? t.jsx("div", {
                className: "w-full sm:w-[calc(50%-clamp(16px,1.25vw+12px,36px)/2)]",
                children: t.jsx(h, {
                    description: e.timepieces.description,
                    label: e.timepieces.label,
                    image: e.timepieces.image,
                    linkUrl: e.timepieces.linkUrl,
                    type: e.timepieces.type,
                    orderType: n
                })
            }) : null, e != null && e.timepiecesPaintToSample ? t.jsx("div", {
                className: "w-full sm:w-[calc(50%-clamp(16px,1.25vw+12px,36px)/2)]",
                children: t.jsx(h, {
                    description: e.timepiecesPaintToSample.description,
                    label: e.timepiecesPaintToSample.label,
                    image: e.timepiecesPaintToSample.image,
                    linkUrl: e.timepiecesPaintToSample.linkUrl,
                    type: e.timepiecesPaintToSample.type,
                    orderType: n
                })
            }) : null, e != null && e.shop ? t.jsx("div", {
                className: "w-full sm:w-[calc(50%-clamp(16px,1.25vw+12px,36px)/2)]",
                children: t.jsx(X, {
                    description: e == null ? void 0 : e.shop.description,
                    label: e == null ? void 0 : e.shop.label,
                    image: e == null ? void 0 : e.shop.image,
                    linkUrl: e == null ? void 0 : e.shop.linkUrl,
                    modelFamily: a
                })
            }) : null]
        })
    })
}
function h({description: e, label: a, image: n, linkUrl: i, type: c, orderType: s}) {
    const {t: p} = b()
      , r = m.useRef(!1)
      , [o,d] = E({
        rootMargin: "0px 0px 0px 0px"
    });
    m.useEffect( () => {
        d && !r.current && (r.current = !0,
        $(c, s))
    }
    , [d, s, c]);
    function f() {
        G(c, p("TIMEPIECES_BUTTON"), s)
    }
    return t.jsx(k, {
        href: i || "",
        label: a || "",
        description: e || "",
        aspectRatio: {
            base: "3:4",
            m: "1:1",
            xl: "4:3"
        },
        className: "w-full",
        ref: o,
        onClick: f,
        children: t.jsxs("picture", {
            children: [t.jsx("source", {
                media: "(min-width:760px)",
                srcSet: n.desktop
            }), t.jsx("img", {
                src: n.mobile,
                alt: e,
                loading: "lazy"
            })]
        })
    })
}
function X({description: e, label: a, image: n, linkUrl: i, modelFamily: c}) {
    const {t: s} = b()
      , p = m.useRef(!1)
      , [r,o] = E({
        rootMargin: "0px 0px 0px 0px"
    });
    m.useEffect( () => {
        o && !p.current && (p.current = !0,
        q(c))
    }
    , [o, c]);
    function d() {
        Q(c || "", s("translation-for-shop-link"), i || "")
    }
    return t.jsx(k, {
        href: i || "",
        label: a || "",
        description: e || "",
        aspectRatio: {
            base: "3:4",
            m: "1:1",
            xl: "4:3"
        },
        className: "w-full",
        ref: r,
        onClick: d,
        children: t.jsxs("picture", {
            children: [t.jsx("source", {
                media: "(min-width:760px)",
                srcSet: n.desktop
            }), t.jsx("img", {
                src: n.mobile,
                alt: e,
                loading: "lazy"
            })]
        })
    })
}
function Y({title: e, description: a, buttonLabel: n, image: i, linkUrl: c}) {
    return t.jsxs("div", {
        className: "gap-md col-[extended-start/extended-end] flex w-full flex-wrap justify-center overflow-hidden rounded-[12px] bg-[#eeeff2]",
        children: [t.jsx("div", {
            className: "sm:w-[calc(60%-clamp(16px,1.25vw+12px,36px)/2)]",
            children: t.jsxs("picture", {
                children: [t.jsx("source", {
                    media: "(min-width:760px)",
                    srcSet: i.desktop
                }), t.jsx("img", {
                    src: i.mobile,
                    alt: a,
                    loading: "lazy"
                })]
            })
        }), t.jsx("div", {
            className: "flex items-center justify-center sm:w-[calc(40%-clamp(16px,1.25vw+12px,36px)/2)]",
            children: t.jsxs("div", {
                className: "gap-md p-lg flex flex-col",
                children: [t.jsx("h5", {
                    className: "text-xl",
                    children: e
                }), t.jsx("p", {
                    className: "text-sm",
                    children: a
                }), t.jsx(U, {
                    className: "w-fit",
                    href: c,
                    children: n
                })]
            })
        })]
    })
}
export {ie as C};
//# sourceMappingURL=cross-selling-S4uK5JyK.js.map
