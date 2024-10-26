import { r as a, j as T } from "./components-2MqjI5-B.js";
import { a as v, b as w, c as B, d as C, s as L } from "./hooks-CHVtQAHS.js";
const H = a.forwardRef(
  (
    {
      aria: r,
      compact: o = !1,
      disabled: t = !1,
      hideLabel: n = !1,
      icon: c = "none",
      iconSource: f,
      loading: p = !1,
      name: u,
      theme: i,
      type: m = "submit",
      value: l,
      variant: d = "primary",
      className: b,
      children: x,
      ...y
    },
    R
  ) => {
    const e = a.useRef(),
      g = v("p-button"),
      s = [r, o, t, n, c, f, p, u, i || w(), m, l, d];
    B(() => {
      const { current: E } = e;
      [
        "aria",
        "compact",
        "disabled",
        "hideLabel",
        "icon",
        "iconSource",
        "loading",
        "name",
        "theme",
        "type",
        "value",
        "variant",
      ].forEach((j, P) => (E[j] = s[P]));
    }, s);
    const h = {
      ...y,
      children: x,
      suppressHydrationWarning: !0,
      class: C(e, b),
      ref: L(e, R),
    };
    return T.jsx(g, { ...h });
  }
);
export { H as P };
