import { j as r } from "./components-2MqjI5-B.js";
import "./hooks-CHVtQAHS.js";
import { P as p } from "./icon.wrapper-Cu-02AJA.js";
import { O as f } from "./params-BYO_vLfu.js";
function j({
  id: s,
  color: t = [],
  isSelected: n,
  name: b = f,
  inputType: l = "checkbox",
  backgroundImage: u,
}) {
  let d = t || [],
    i = "",
    m = !1;
  t.length === 3 && !u && ((i = h(t)), (d = t.filter((a) => a !== i)));
  const e = d.map(
    (a) => (a.includes("custom") && ((m = !0), (a = a.split("_")[0])), a)
  );
  return r.jsxs("div", {
    className: `relative flex rounded-[6px] border-2 p-0.5 ${
      n
        ? "border-primary"
        : "hover:border-primary focus-within:border-primary border-transparent"
    }`,
    children: [
      r.jsx("input", {
        name: b,
        value: s,
        type: l,
        readOnly: !0,
        checked: n,
        className:
          "flex h-11 w-full appearance-none items-center self-center rounded hover:cursor-pointer",
        style: {
          ...(u
            ? {
                backgroundImage: `url(${u})`,
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
      !!i &&
        r.jsxs(r.Fragment, {
          children: [
            r.jsx("div", {
              className:
                "absolute end-0.5 start-0.5 top-[30%] border-b-2 border-dashed",
              style: { borderBottomColor: i },
            }),
            r.jsx("div", {
              className:
                "absolute end-0.5 start-0.5 top-[67%] border-b-2 border-dashed",
              style: { borderBottomColor: i },
            }),
          ],
        }),
      m &&
        r.jsx("div", {
          className:
            "bg-background-base absolute end-0 top-0 me-1.5 mt-1.5 flex size-9 items-center justify-center rounded",
          children: r.jsx(p, { name: "edit" }),
        }),
    ],
  });
}
function h(s) {
  const t = [];
  return (
    s.forEach((n) => {
      t.indexOf(n) > -1 ? t.splice(t.indexOf(n), 1) : t.push(n);
    }),
    t[0]
  );
}
export { j as C, h as f };
