import {r as e, j as c} from "./components-2MqjI5-B.js";
import {a as f, c as m, d as x, s as i} from "./hooks-CHVtQAHS.js";
const g = e.forwardRef( ({direction: r={
    base: "column",
    xs: "row"
}, className: o, children: t, ...a}, n) => {
    const s = e.useRef()
      , u = f("p-button-group");
    m( () => {
        s.current.direction = r
    }
    , [r]);
    const p = {
        ...a,
        children: t,
        suppressHydrationWarning: !0,
        class: x(s, o),
        ref: i(s, n)
    };
    return c.jsx(u, {
        ...p
    })
}
);
export {g as P};
