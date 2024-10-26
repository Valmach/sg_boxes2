import { r, j as x } from "./components-2MqjI5-B.js";
import { a as R, b as h, c as y, d as E, s as g } from "./hooks-CHVtQAHS.js";
const P = r.forwardRef(
  (
    {
      color: o = "contrast-low",
      direction: t = "horizontal",
      orientation: n,
      theme: a,
      className: c,
      ...i
    },
    p
  ) => {
    const s = r.useRef(),
      f = R("p-divider"),
      e = [o, t, n, a || h()];
    y(() => {
      const { current: m } = s;
      ["color", "direction", "orientation", "theme"].forEach(
        (d, l) => (m[d] = e[l])
      );
    }, e);
    const u = {
      ...i,
      suppressHydrationWarning: !0,
      class: E(s, c),
      ref: g(s, p),
    };
    return x.jsx(f, { ...u });
  }
);
export { P };
