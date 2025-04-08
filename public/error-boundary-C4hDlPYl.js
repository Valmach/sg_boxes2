import {
  j as t,
  L as d,
  k as m,
  a as x,
  l as u,
  m as j,
} from "./components-2MqjI5-B.js";
import "./hooks-CHVtQAHS.js";
import { P as g } from "./link.wrapper-uNycKt80.js";
function h(e) {
  return t.jsx("div", {
    className: "pds-grid",
    children: t.jsxs("div", {
      className: "my-2xl col-[wide-start/wide-end]",
      children: [
        t.jsx("h1", {
          className: "my-md text-lg font-semibold",
          children: e.title,
        }),
        e.children,
        e.buttonUrl &&
          e.buttonLabel &&
          t.jsx("p", {
            className: "mt-lg mb-2xl block w-fit",
            children: t.jsx(g, {
              icon: "arrow-right",
              children: t.jsx(d, {
                reloadDocument: !0,
                to: e.buttonUrl,
                children: e.buttonLabel,
              }),
            }),
          }),
      ],
    }),
  });
}
function y({
  defaultStatusHandler: e = ({ error: s }) =>
    t.jsx(h, { title: `${s.status} ${s.data}` }),
  statusHandlers: n,
  unexpectedErrorHandler: o = (s) => t.jsx("p", { children: f(s) }),
}) {
  var a;
  const s = m(),
    l = x(),
    r = u().find((c) => c.id === "root"),
    i = (a = r == null ? void 0 : r.data) == null ? void 0 : a.traceId;
  return t.jsxs(t.Fragment, {
    children: [
      j(s)
        ? ((n == null ? void 0 : n[s.status]) ?? e)({
            error: s,
            params: l,
            traceId: i,
          })
        : o(s),
      i
        ? t.jsx("div", {
            className: "pds-grid",
            children: t.jsx("div", {
              className: "mb-md col-[extended-start/extended-end]",
              children: t.jsx("p", {
                children: t.jsxs("small", { children: ["Error ID: ", i] }),
              }),
            }),
          })
        : null,
    ],
  });
}
function f(e) {
  return typeof e == "string"
    ? e
    : e &&
      typeof e == "object" &&
      "message" in e &&
      typeof e.message == "string"
    ? e.message
    : (console.error("Unable to get error message for error", e),
      "Unknown Error");
}
export { y as G };
