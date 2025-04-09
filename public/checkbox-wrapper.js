import {r, j as g} from "./components-2MqjI5-B.js";
import {a as R, b as y, c as E, d as j, s as w} from "./hooks-CHVtQAHS.js";
const T = r.forwardRef( ({hideLabel: a=!1, label: o="", loading: t=!1, message: n="", state: c="none", theme: p, className: f, children: u, ...m}, l) => {
    const e = r.useRef()
      , i = R("p-checkbox-wrapper")
      , s = [a, o, t, n, c, p || y()];
    E( () => {
        const {current: b} = e;
        ["hideLabel", "label", "loading", "message", "state", "theme"].forEach( (d, h) => b[d] = s[h])
    }
    , s);
    const x = {
        ...m,
        children: u,
        suppressHydrationWarning: !0,
        class: j(e, f),
        ref: w(e, l)
    };
    return g.jsx(i, {
        ...x
    })
}
);
export {T as P};
