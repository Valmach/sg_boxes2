import {j as n} from "./components-BQ94cas1.js";
import "./hooks-B1p9ZFDx.js";
import {P as m} from "./icon.wrapper-ggpjSokX.js";
import {O as c} from "./params-D7sg034s.js";
import "./_sentry-release-injection-file-BRO_tjfx.js";
(function() {
    try {
        var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}
          , t = new Error().stack;
        t && (r._sentryDebugIds = r._sentryDebugIds || {},
        r._sentryDebugIds[t] = "80b85564-be32-42cc-ba52-246cc84b63cb",
        r._sentryDebugIdIdentifier = "sentry-dbid-80b85564-be32-42cc-ba52-246cc84b63cb")
    } catch {}
}
)();
function j({id: r, color: t=[], isSelected: i, name: f=c, inputType: l="checkbox", backgroundImage: d}) {
    let b = t || []
      , s = ""
      , u = !1;
    t.length === 3 && !d && (s = p(t),
    b = t.filter(a => a !== s));
    const e = b.map(a => (a.includes("custom") && (u = !0,
    a = a.split("_")[0]),
    a));
    return n.jsxs("div", {
        className: `relative flex rounded-[6px] border-2 p-0.5 ${i ? "border-primary" : "hover:border-primary focus-within:border-primary border-transparent"}`,
        children: [n.jsx("input", {
            name: f,
            value: r,
            type: l,
            readOnly: !0,
            checked: i,
            className: "flex h-11 w-full appearance-none items-center self-center rounded hover:cursor-pointer",
            style: {
                ...d ? {
                    backgroundImage: `url(${d})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                } : e != null && e.length ? e.length === 2 ? {
                    backgroundImage: `linear-gradient(180deg,${e == null ? void 0 : e[0]} 50%, ${e == null ? void 0 : e[1]} 50%)`
                } : e.length === 3 ? {
                    backgroundImage: `linear-gradient(to right, ${e == null ? void 0 : e[0]} 0%, ${e == null ? void 0 : e[0]} 33.33%, ${e == null ? void 0 : e[1]} 33.33%,${e == null ? void 0 : e[1]} 66.66%, ${e == null ? void 0 : e[2]} 66.66%, ${e == null ? void 0 : e[2]} 100%)`
                } : {
                    backgroundColor: e[0],
                    color: "white"
                } : {
                    backgroundColor: "white",
                    color: "black"
                }
            }
        }), !!s && n.jsxs(n.Fragment, {
            children: [n.jsx("div", {
                className: "absolute end-0.5 start-0.5 top-[30%] border-b-2 border-dashed",
                style: {
                    borderBottomColor: s
                }
            }), n.jsx("div", {
                className: "absolute end-0.5 start-0.5 top-[67%] border-b-2 border-dashed",
                style: {
                    borderBottomColor: s
                }
            })]
        }), u && n.jsx("div", {
            className: "bg-background-base absolute end-0 top-0 me-1.5 mt-1.5 flex size-9 items-center justify-center rounded",
            children: n.jsx(m, {
                name: "edit"
            })
        })]
    })
}
function p(r) {
    const t = [];
    return r.forEach(i => {
        t.indexOf(i) > -1 ? t.splice(t.indexOf(i), 1) : t.push(i)
    }
    ),
    t[0]
}
export {j as C, p as f};
//# sourceMappingURL=color-tile-DS2W67jR.js.map
