import { j as t } from "./components-2MqjI5-B.js";
import "./hooks-CHVtQAHS.js";
import { P as o } from "./icon.wrapper-Cu-02AJA.js";
import { O as f } from "./params-BYO_vLfu.js";
function $({
  id: s,
  color: r = [],
  isSelected: n,
  name: b = f,
  inputType: p = "checkbox",
  backgroundImage: l,
}) {
  let u = r || [],
    a = "",
    d = !1;
  r.length === 3 && !l && ((a = c(r)), (u = r.filter((i) => i !== a)));
  const e = u.map((i) => {
    let m = i;
    return i.includes("custom") && ((d = !0), (m = i.split("_")[0])), m;
  });
  return t.jsxs("div", {
    className: `relative flex rounded-[6px] border-2 p-0.5 ${
      n
        ? "border-primary"
        : "hover:border-primary focus-within:border-primary border-transparent"
    }`,
    children: [
      t.jsx("input", {
        name: b,
        value: s,
        type: p,
        readOnly: !0,
        checked: n,
        className:
          "flex h-11 w-full appearance-none items-center self-center rounded hover:cursor-pointer",
        style: {
          ...(l
            ? {
                backgroundImage: `url(${l})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }
            : e != null && e.length
            ? e.length === 2
              ? {
                  backgroundImage: `linear-gradient(180deg,${
                    e == null ? void 0 : e[0]
                  } 50%, ${e == null ? void 0 : e[1]} 50%)`,
                }
              : e.length === 3
              ? {
                  backgroundImage: `linear-gradient(to right, ${
                    e == null ? void 0 : e[0]
                  } 0%, ${e == null ? void 0 : e[0]} 33.33%, ${
                    e == null ? void 0 : e[1]
                  } 33.33%,${e == null ? void 0 : e[1]} 66.66%, ${
                    e == null ? void 0 : e[2]
                  } 66.66%, ${e == null ? void 0 : e[2]} 100%)`,
                }
              : { backgroundColor: e[0], color: "white" }
            : { backgroundColor: "white", color: "black" }),
        },
      }),
      !!a &&
        t.jsxs(t.Fragment, {
          children: [
            t.jsx("div", {
              className:
                "absolute end-0.5 start-0.5 top-[30%] border-b-2 border-dashed",
              style: { borderBottomColor: a },
            }),
            t.jsx("div", {
              className:
                "absolute end-0.5 start-0.5 top-[67%] border-b-2 border-dashed",
              style: { borderBottomColor: a },
            }),
          ],
        }),
      d &&
        t.jsx("div", {
          className:
            "bg-background-base absolute end-0 top-0 me-1.5 mt-1.5 flex size-9 items-center justify-center rounded",
          children: t.jsx(o, { name: "edit" }),
        }),
    ],
  });
}
function c(s) {
  const r = [];
  for (const n of s) r.indexOf(n) > -1 ? r.splice(r.indexOf(n), 1) : r.push(n);
  return r[0];
}
export { $ as C, c as f };
