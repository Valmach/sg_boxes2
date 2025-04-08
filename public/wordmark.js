import {r, j as R} from "./components-2MqjI5-B.js";
import {a as g, b as h, c as y, d as E, s as j} from "./hooks-CHVtQAHS.js";
const T = r.forwardRef( ({aria: o, href: a, size: t="small", target: n="_self", theme: c, className: f, ...p}, m) => {
    const s = r.useRef()
      , u = g("p-wordmark")
      , e = [o, a, t, n, c || h()];
    y( () => {
        const {current: d} = s;
        ["aria", "href", "size", "target", "theme"].forEach( (l, x) => d[l] = e[x])
    }
    , e);
    const i = {
        ...p,
        suppressHydrationWarning: !0,
        class: E(s, f),
        ref: j(s, m)
    };
    return R.jsx(u, {
        ...i
    })
}
);
export {T as P};
