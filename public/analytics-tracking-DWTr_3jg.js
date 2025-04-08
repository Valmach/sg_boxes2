var Te = Object.defineProperty;
var Re = (r, e, t) => e in r ? Te(r, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : r[e] = t;
var w = (r, e, t) => (Re(r, typeof e != "symbol" ? e + "" : e, t),
t);
import "./_sentry-release-injection-file-BRO_tjfx.js";
import {n as Ie, K as Le} from "./components-BQ94cas1.js";
(function() {
    try {
        var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}
          , e = new Error().stack;
        e && (r._sentryDebugIds = r._sentryDebugIds || {},
        r._sentryDebugIds[e] = "473f15a4-462f-43cc-9ca8-87e2e756d57a",
        r._sentryDebugIdIdentifier = "sentry-dbid-473f15a4-462f-43cc-9ca8-87e2e756d57a")
    } catch {}
}
)();
const ft = "IAF"
  , gt = "IRA"
  , vt = "IIF"
  , yt = "IIR"
  , F = "section-exterior-color"
  , Ce = "section-summary"
  , mt = "COLOR"
  , _t = "SEAT"
  , wt = "error-catalog-not-found";
var ke = Object.defineProperty
  , Be = (r, e, t) => e in r ? ke(r, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : r[e] = t
  , I = (r, e, t) => (Be(r, typeof e != "symbol" ? e + "" : e, t),
t);
const ae = {
    BEFORE_MERGE: "BEFORE_MERGE",
    AFTER_MERGE: "AFTER_MERGE"
}
  , re = {
    clean: {
        enabled: !1,
        executionPlace: ae.AFTER_MERGE,
        values: ["", void 0, null]
    },
    logging: {
        enabled: !0,
        level: "warn"
    },
    validation: {
        enabled: !1,
        allowUnknown: !1,
        verbose: !0
    },
    webProperties: {
        enabled: !0,
        eventNamePattern: /.*/,
        reactiveUrl: !0,
        reactiveDimensions: !0
    }
};
class Ye {
    create(e) {
        return typeof e.event != "string" || e.event.length === 0 ? {} : {
            context: {
                eventAction: e.event
            }
        }
    }
}
const Oe = (r, e) => {
    let t;
    for (t in r)
        if (!(!r || !r[t]) && e(r[t], t) === !1)
            return !1;
    return !0
}
  , se = (r, e) => Oe(r, (t, n) => {
    for (const s in r[n])
        if (e(t[s], s, t, n) === !1)
            return !1;
    return !0
}
)
  , ie = r => {
    for (const e in r)
        return !1;
    return !0
}
  , ce = (r, e=(t => (t = re.clean) == null ? void 0 : t.values)() || []) => (se(r, (t, n, s, l) => {
    e.includes(t) && (delete s[n],
    ie(s) && delete r[l])
}
),
r)
  , Ge = (r, e) => r && (se(r, (t, n, s, l) => {
    e.includes(`${l.toString()}.${n.toString()}`) && (delete s[n],
    ie(s) && delete r[l])
}
),
r)
  , de = r => (Oe(r, (e, t) => (typeof e != "function" || (r[t] = e()),
!0)),
se(r, (e, t, n) => (typeof e != "function" || (n[t] = e()),
!0)),
r)
  , We = (r, e) => {
    const t = e.split(".");
    if (t.length !== 2)
        return;
    const n = r[t[0]];
    if (n)
        return n[t[1]]
}
  , He = r => {
    if (!r)
        return [];
    const e = [];
    return se(r, (t, n, s, l) => {
        e.push(`${l.toString()}.${n.toString()}`)
    }
    ),
    e
}
  , Ue = re.logging;
var ue = (r => (r[r.error = 0] = "error",
r[r.warn = 1] = "warn",
r[r.log = 2] = "log",
r))(ue || {});
const Me = class Pe {
    constructor(e, t) {
        I(this, "prefix"),
        I(this, "settings"),
        this.prefix = e,
        this.settings = {
            ...Ue,
            ...t
        }
    }
    _getMergedSettings(e) {
        return e ? {
            ...this.settings,
            ...e
        } : this.settings
    }
    _isAllowed(e, t) {
        if (!Pe.isAvailable || !t.enabled)
            return !1;
        const n = ue[t.level];
        switch (e) {
        case "error":
        case "warn":
            return n >= ue[e];
        case "info":
        case "log":
        case "debug":
        case "dir":
            return n >= 2;
        default:
            return !1
        }
    }
    _log(e, t="log", n) {
        const s = this._getMergedSettings(n);
        if (this._isAllowed(t, s))
            switch (t) {
            case "dir":
                console.log(`[${this.prefix}] ${t}:`),
                console[t](e);
                break;
            default:
                console[t](`[${this.prefix}] ${e}`)
            }
    }
    log(e, t) {
        this._log(e, "log", t)
    }
    dir(e, t) {
        this._log(e, "dir", t)
    }
    debug(e, t) {
        this._log(e, "debug", t)
    }
    error(e, t) {
        this._log(e, "error", t)
    }
    info(e, t) {
        this._log(e, "info", t)
    }
    warn(e, t) {
        this._log(e, "warn", t)
    }
}
;
I(Me, "isAvailable", typeof console < "u");
let Fe = Me;
const ee = (...r) => {
    const e = {};
    return r.forEach(t => {
        if (ie(t))
            return;
        const n = {
            ...e,
            ...t
        };
        let s;
        for (s in n)
            typeof n[s] == "object" && !Array.isArray(n[s]) ? e[s] = {
                ...e[s],
                ...t[s]
            } : e[s] = n[s]
    }
    ),
    e
}
;
class Ve {
    create(e) {
        return ce({
            context: {
                timestamp: e.timestamp,
                server: e.hostname
            },
            pageExperience: {
                pageId: e.url
            },
            visitor: {
                deviceBrowserBreakpoint: e.breakpoint,
                deviceBrowserHeight: e.height,
                deviceBrowserOrientation: e.orientation,
                deviceBrowserWidth: e.width,
                deviceType: e.deviceType,
                useragent: e.userAgent
            }
        }, [void 0])
    }
}
const je = re.webProperties
  , he = () => window.location.href.replace(/[?#].*/, "")
  , Xe = () => new Date().toISOString()
  , Ze = () => window.location.hostname
  , pe = () => window.innerHeight.toString()
  , fe = () => window.innerHeight > window.innerWidth ? "p" : "l"
  , ge = () => window.innerWidth.toString()
  , Je = () => window.matchMedia("(hover: none), (pointer: coarse)").matches ? "mobile" : "desktop"
  , Ke = () => window.navigator.userAgent
  , ze = r => {
    if (!r.breakpoints || r.breakpoints.length < 1)
        return;
    const {breakpoints: e} = r
      , t = () => {
        const n = window.innerWidth;
        let s = 0
          , l = 0;
        for (; l < e.length && n >= e[l]; )
            s = e[l],
            l++;
        return s.toString()
    }
    ;
    return r.reactiveDimensions ? t : t()
}
  , qe = (r, e) => {
    const t = {
        ...je,
        ...r
    }
      , n = {
        breakpoint: ze(t),
        timestamp: Xe(),
        hostname: Ze(),
        url: t.reactiveUrl ? he : he(),
        height: t.reactiveDimensions ? pe : pe(),
        orientation: t.reactiveDimensions ? fe : fe(),
        width: t.reactiveDimensions ? ge : ge(),
        deviceType: Je(),
        userAgent: Ke()
    };
    return e ? e.create(n) : n
}
  , Qe = (r, e) => {
    switch (e) {
    case "string":
    case "number":
    case "boolean":
        return typeof r === e;
    case "any[]":
        return Array.isArray(r) && r.length > 0;
    case "Record<string, any>":
        return typeof r == "object" && !Array.isArray(r) && Object.keys(r).length > 0;
    case "any":
        return !0;
    default:
        if ((typeof r == "boolean" || typeof r == "number" || typeof r == "string") && e.indexOf("|") > 0)
            return e.split("|").map(t => {
                const n = t.trim();
                return /^'.*'$/.test(n) ? n.replace(/(^ ?'?|'? ?$)/g, "") : /^(true|false)$/.test(n) ? n === "true" : /^-?(\d*\.)?\d+$/.test(n) ? Number.parseFloat(n) : n.replace(/(^ ?'?|'? ?$)/g, "")
            }
            ).includes(r)
    }
    return !0
}
  , et = (r, e, t) => {
    const n = {
        level: null,
        issues: []
    };
    if (!t.enabled || !t.eventMatrix)
        return n;
    const {events: s, ...l} = t.eventMatrix
      , d = s.indexOf(r);
    if (d === -1)
        return n.level = "error",
        n.issues.push({
            level: "error",
            type: "EVENT_NOT_FOUND",
            name: r,
            message: `'${r}': Event does not exist.`
        }),
        n;
    const g = He(e)
      , b = Object.keys(l)
      , y = g.filter(u => !b.includes(u));
    y.length > 0 && (t.allowUnknown || Ge(e, y),
    y.forEach(u => {
        n.level = n.level ?? "warn",
        n.issues.push({
            level: "warn",
            type: "PROPERTY_DOES_NOT_EXIST",
            name: u,
            message: `'${u}': Property does not exist in the given Event Matrix.${t.allowUnknown ? "" : " It was omitted from the DataLayer payload."}`
        })
    }
    ));
    let v;
    for (v in l) {
        const u = l[v]
          , $ = typeof u.e[d] < "u"
          , S = u.r === 1
          , O = e ? We(e, v) : void 0
          , A = typeof O < "u";
        if ($ && S && !A && (n.level = "error",
        n.issues.push({
            level: "error",
            type: "REQUIRED_PROPERTY_MISSING",
            name: v,
            message: `'${v}': The required property is missing.`
        }),
        !t.verbose) || A && !Qe(O, u.t) && (n.level = "error",
        n.issues.push({
            level: "error",
            type: "WRONG_PROPERTY_TYPE",
            name: v,
            message: `'${v}': Wrong type detected. Expected '${u.t}', got '${typeof O}'.`
        }),
        !t.verbose))
            return n
    }
    return n
}
;
class tt {
    constructor(e, t, n="GlobalDataLayer") {
        I(this, "_className"),
        I(this, "_settings"),
        I(this, "_defaultProperties"),
        I(this, "_logger"),
        I(this, "_webPropertiesHandled", !1),
        I(this, "_dataLayerStore"),
        I(this, "_extensions", new Map);
        const s = ee(re, e || {});
        this._className = n,
        this._logger = new Fe(this._className,s.logging),
        this._settings = s,
        t ? this._dataLayerStore = t : typeof window < "u" ? (this._dataLayerStore = window.pagData = window.pagData || [],
        this._logger.info("`dataLayerStore` was set to default `window.pagData`")) : (this._dataLayerStore = [],
        this._logger.info("`dataLayerStore` was set to default `[]`")),
        this._defaultProperties = []
    }
    setup() {
        this._handleDefaultWebProperties()
    }
    get Settings() {
        return this._settings
    }
    get DataLayerStore() {
        return this._dataLayerStore
    }
    getRegisteredExtension(e) {
        const t = new e;
        return this.getRegisteredExtensionByClassName(t.className)
    }
    getRegisteredExtensionByClassName(e) {
        return this._extensions.has(e) ? this._extensions.get(e) : void 0
    }
    getRegisteredExtensions() {
        const e = [];
        for (const t of this._extensions.values())
            e.push(t);
        return e
    }
    registerExtension(e, t=!1) {
        if (!t && this._extensions.has(e.className)) {
            this._logger.warn(`Tried to register extension class <${e.className}> which already exists.`);
            return
        }
        e.dataLayerInstance = this,
        this._extensions.set(e.className, e),
        t ? this._logger.info(`Overriden registration for extension class <${e.className}>.`) : this._logger.info(`Registered extension class <${e.className}>.`)
    }
    removeExtension(e) {
        const t = new e;
        if (this._extensions.has(t.className)) {
            this._extensions.delete(t.className);
            return
        }
        this._logger.warn(`Tried to remove not existing extension class <${t.className}>.`)
    }
    removeExtensionByClassName(e) {
        if (this._extensions.has(e)) {
            this._extensions.delete(e);
            return
        }
        this._logger.warn(`Tried to remove not existing extension class <${e}>.`)
    }
    push(e, t=[{}], n) {
        var s, l;
        if (e.length === 0)
            return !1;
        const d = n && !ie(n) ? ee(this._settings, n) : this._settings;
        Array.isArray(t) || (t = [t]),
        t.forEach(de);
        const g = this._eventNamePayloadFactory.create({
            event: e
        })
          , b = de(this.getDefaultProperties(e));
        d.clean.enabled && d.clean.executionPlace === ae.BEFORE_MERGE && [b || {}, ...t].forEach(v => ce(v, d.clean.values));
        const y = ee(g, b || {}, ...t);
        if (d.clean.enabled && d.clean.executionPlace === ae.AFTER_MERGE && ce(y, d.clean.values),
        (s = d == null ? void 0 : d.validation) != null && s.enabled && (l = d == null ? void 0 : d.validation) != null && l.eventMatrix) {
            const v = et(e, y, d.validation)
              , u = v.issues.sort( ($, S) => $.level !== S.level && S.level === "warn" ? -1 : 0).map($ => `- [${$.level}]: ${$.message}`).join(`
`);
            switch (v.level) {
            case "error":
                return this._logger.error(`Validation failed for event '${e}' with errors/warnings: 
${u}`, d.logging),
                !1;
            case "warn":
                this._logger.warn(`Validation success for event '${e}' with warnings: 
${u}`, d.logging);
                break;
            default:
                this._logger.info(`Validation success for event '${e}'.`, d.logging);
                break
            }
        }
        return this._dataLayerStore.push(y),
        !0
    }
    getDefaultProperties(e) {
        const t = {
            byName: [],
            byArray: [],
            byRegex: []
        };
        this._defaultProperties.forEach(s => {
            if (s.identifier === e)
                return t.byName.push(s.data);
            if (Array.isArray(s.identifier) && s.identifier.includes(e))
                return t.byArray.push(s.data);
            if (s.identifier instanceof RegExp && s.identifier.test(e))
                return t.byRegex.push(s.data)
        }
        );
        const n = [...t.byRegex, ...t.byArray, ...t.byName];
        if (n.length)
            return ee(...n)
    }
    setDefaultProperties(e, t) {
        const n = this._defaultProperties.find(s => s.identifier === e);
        if (n) {
            n.data = ee(n.data, t);
            return
        }
        this._defaultProperties.push({
            identifier: e,
            data: t
        })
    }
    _handleDefaultWebProperties() {
        if (this._webPropertiesHandled || !this._settings.webProperties.enabled)
            return;
        const e = qe(this._settings.webProperties, this._webPayloadFactory);
        this.setDefaultProperties(this._settings.webProperties.eventNamePattern, e),
        this._webPropertiesHandled = !0
    }
}
class De extends tt {
    constructor(e, t, n="GlobalDataLayer") {
        super(e, t, n),
        I(this, "_eventNamePayloadFactory"),
        I(this, "_webPayloadFactory"),
        this._eventNamePayloadFactory = new Ye,
        this._webPayloadFactory = new Ve,
        this.setup()
    }
    setup() {
        super.setup()
    }
}
const nt = 480
  , ve = 760
  , ye = 1e3
  , me = 1300
  , _e = 1760
  , we = 1920;
async function rt(r) {
    const t = new TextEncoder().encode(r)
      , n = await crypto.subtle.digest("SHA-256", t);
    return Array.from(new Uint8Array(n)).map(l => l.toString(16).padStart(2, "0")).join("")
}
var Ae = {
    exports: {}
};
(function(r, e) {
    (function(t, n) {
        r.exports = n()
    }
    )(Ie, function() {
        var t = 1e3
          , n = 6e4
          , s = 36e5
          , l = "millisecond"
          , d = "second"
          , g = "minute"
          , b = "hour"
          , y = "day"
          , v = "week"
          , u = "month"
          , $ = "quarter"
          , S = "year"
          , O = "date"
          , A = "Invalid Date"
          , B = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/
          , Y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g
          , G = {
            name: "en",
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            ordinal: function(h) {
                var a = ["th", "st", "nd", "rd"]
                  , i = h % 100;
                return "[" + h + (a[(i - 20) % 10] || a[i] || a[0]) + "]"
            }
        }
          , L = function(h, a, i) {
            var c = String(h);
            return !c || c.length >= a ? h : "" + Array(a + 1 - c.length).join(i) + h
        }
          , W = {
            s: L,
            z: function(h) {
                var a = -h.utcOffset()
                  , i = Math.abs(a)
                  , c = Math.floor(i / 60)
                  , o = i % 60;
                return (a <= 0 ? "+" : "-") + L(c, 2, "0") + ":" + L(o, 2, "0")
            },
            m: function h(a, i) {
                if (a.date() < i.date())
                    return -h(i, a);
                var c = 12 * (i.year() - a.year()) + (i.month() - a.month())
                  , o = a.clone().add(c, u)
                  , p = i - o < 0
                  , f = a.clone().add(c + (p ? -1 : 1), u);
                return +(-(c + (i - o) / (p ? o - f : f - o)) || 0)
            },
            a: function(h) {
                return h < 0 ? Math.ceil(h) || 0 : Math.floor(h)
            },
            p: function(h) {
                return {
                    M: u,
                    y: S,
                    w: v,
                    d: y,
                    D: O,
                    h: b,
                    m: g,
                    s: d,
                    ms: l,
                    Q: $
                }[h] || String(h || "").toLowerCase().replace(/s$/, "")
            },
            u: function(h) {
                return h === void 0
            }
        }
          , T = "en"
          , P = {};
        P[T] = G;
        var k = "$isDayjsObject"
          , H = function(h) {
            return h instanceof j || !(!h || !h[k])
        }
          , V = function h(a, i, c) {
            var o;
            if (!a)
                return T;
            if (typeof a == "string") {
                var p = a.toLowerCase();
                P[p] && (o = p),
                i && (P[p] = i,
                o = p);
                var f = a.split("-");
                if (!o && f.length > 1)
                    return h(f[0])
            } else {
                var _ = a.name;
                P[_] = a,
                o = _
            }
            return !c && o && (T = o),
            o || !c && T
        }
          , x = function(h, a) {
            if (H(h))
                return h.clone();
            var i = typeof a == "object" ? a : {};
            return i.date = h,
            i.args = arguments,
            new j(i)
        }
          , m = W;
        m.l = V,
        m.i = H,
        m.w = function(h, a) {
            return x(h, {
                locale: a.$L,
                utc: a.$u,
                x: a.$x,
                $offset: a.$offset
            })
        }
        ;
        var j = function() {
            function h(i) {
                this.$L = V(i.locale, null, !0),
                this.parse(i),
                this.$x = this.$x || i.x || {},
                this[k] = !0
            }
            var a = h.prototype;
            return a.parse = function(i) {
                this.$d = function(c) {
                    var o = c.date
                      , p = c.utc;
                    if (o === null)
                        return new Date(NaN);
                    if (m.u(o))
                        return new Date;
                    if (o instanceof Date)
                        return new Date(o);
                    if (typeof o == "string" && !/Z$/i.test(o)) {
                        var f = o.match(B);
                        if (f) {
                            var _ = f[2] - 1 || 0
                              , E = (f[7] || "0").substring(0, 3);
                            return p ? new Date(Date.UTC(f[1], _, f[3] || 1, f[4] || 0, f[5] || 0, f[6] || 0, E)) : new Date(f[1],_,f[3] || 1,f[4] || 0,f[5] || 0,f[6] || 0,E)
                        }
                    }
                    return new Date(o)
                }(i),
                this.init()
            }
            ,
            a.init = function() {
                var i = this.$d;
                this.$y = i.getFullYear(),
                this.$M = i.getMonth(),
                this.$D = i.getDate(),
                this.$W = i.getDay(),
                this.$H = i.getHours(),
                this.$m = i.getMinutes(),
                this.$s = i.getSeconds(),
                this.$ms = i.getMilliseconds()
            }
            ,
            a.$utils = function() {
                return m
            }
            ,
            a.isValid = function() {
                return this.$d.toString() !== A
            }
            ,
            a.isSame = function(i, c) {
                var o = x(i);
                return this.startOf(c) <= o && o <= this.endOf(c)
            }
            ,
            a.isAfter = function(i, c) {
                return x(i) < this.startOf(c)
            }
            ,
            a.isBefore = function(i, c) {
                return this.endOf(c) < x(i)
            }
            ,
            a.$g = function(i, c, o) {
                return m.u(i) ? this[c] : this.set(o, i)
            }
            ,
            a.unix = function() {
                return Math.floor(this.valueOf() / 1e3)
            }
            ,
            a.valueOf = function() {
                return this.$d.getTime()
            }
            ,
            a.startOf = function(i, c) {
                var o = this
                  , p = !!m.u(c) || c
                  , f = m.p(i)
                  , _ = function(Z, D) {
                    var U = m.w(o.$u ? Date.UTC(o.$y, D, Z) : new Date(o.$y,D,Z), o);
                    return p ? U : U.endOf(y)
                }
                  , E = function(Z, D) {
                    return m.w(o.toDate()[Z].apply(o.toDate("s"), (p ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(D)), o)
                }
                  , C = this.$W
                  , M = this.$M
                  , R = this.$D
                  , K = "set" + (this.$u ? "UTC" : "");
                switch (f) {
                case S:
                    return p ? _(1, 0) : _(31, 11);
                case u:
                    return p ? _(1, M) : _(0, M + 1);
                case v:
                    var X = this.$locale().weekStart || 0
                      , q = (C < X ? C + 7 : C) - X;
                    return _(p ? R - q : R + (6 - q), M);
                case y:
                case O:
                    return E(K + "Hours", 0);
                case b:
                    return E(K + "Minutes", 1);
                case g:
                    return E(K + "Seconds", 2);
                case d:
                    return E(K + "Milliseconds", 3);
                default:
                    return this.clone()
                }
            }
            ,
            a.endOf = function(i) {
                return this.startOf(i, !1)
            }
            ,
            a.$set = function(i, c) {
                var o, p = m.p(i), f = "set" + (this.$u ? "UTC" : ""), _ = (o = {},
                o[y] = f + "Date",
                o[O] = f + "Date",
                o[u] = f + "Month",
                o[S] = f + "FullYear",
                o[b] = f + "Hours",
                o[g] = f + "Minutes",
                o[d] = f + "Seconds",
                o[l] = f + "Milliseconds",
                o)[p], E = p === y ? this.$D + (c - this.$W) : c;
                if (p === u || p === S) {
                    var C = this.clone().set(O, 1);
                    C.$d[_](E),
                    C.init(),
                    this.$d = C.set(O, Math.min(this.$D, C.daysInMonth())).$d
                } else
                    _ && this.$d[_](E);
                return this.init(),
                this
            }
            ,
            a.set = function(i, c) {
                return this.clone().$set(i, c)
            }
            ,
            a.get = function(i) {
                return this[m.p(i)]()
            }
            ,
            a.add = function(i, c) {
                var o, p = this;
                i = Number(i);
                var f = m.p(c)
                  , _ = function(M) {
                    var R = x(p);
                    return m.w(R.date(R.date() + Math.round(M * i)), p)
                };
                if (f === u)
                    return this.set(u, this.$M + i);
                if (f === S)
                    return this.set(S, this.$y + i);
                if (f === y)
                    return _(1);
                if (f === v)
                    return _(7);
                var E = (o = {},
                o[g] = n,
                o[b] = s,
                o[d] = t,
                o)[f] || 1
                  , C = this.$d.getTime() + i * E;
                return m.w(C, this)
            }
            ,
            a.subtract = function(i, c) {
                return this.add(-1 * i, c)
            }
            ,
            a.format = function(i) {
                var c = this
                  , o = this.$locale();
                if (!this.isValid())
                    return o.invalidDate || A;
                var p = i || "YYYY-MM-DDTHH:mm:ssZ"
                  , f = m.z(this)
                  , _ = this.$H
                  , E = this.$m
                  , C = this.$M
                  , M = o.weekdays
                  , R = o.months
                  , K = o.meridiem
                  , X = function(D, U, Q, te) {
                    return D && (D[U] || D(c, p)) || Q[U].slice(0, te)
                }
                  , q = function(D) {
                    return m.s(_ % 12 || 12, D, "0")
                }
                  , Z = K || function(D, U, Q) {
                    var te = D < 12 ? "AM" : "PM";
                    return Q ? te.toLowerCase() : te
                }
                ;
                return p.replace(Y, function(D, U) {
                    return U || function(Q) {
                        switch (Q) {
                        case "YY":
                            return String(c.$y).slice(-2);
                        case "YYYY":
                            return m.s(c.$y, 4, "0");
                        case "M":
                            return C + 1;
                        case "MM":
                            return m.s(C + 1, 2, "0");
                        case "MMM":
                            return X(o.monthsShort, C, R, 3);
                        case "MMMM":
                            return X(R, C);
                        case "D":
                            return c.$D;
                        case "DD":
                            return m.s(c.$D, 2, "0");
                        case "d":
                            return String(c.$W);
                        case "dd":
                            return X(o.weekdaysMin, c.$W, M, 2);
                        case "ddd":
                            return X(o.weekdaysShort, c.$W, M, 3);
                        case "dddd":
                            return M[c.$W];
                        case "H":
                            return String(_);
                        case "HH":
                            return m.s(_, 2, "0");
                        case "h":
                            return q(1);
                        case "hh":
                            return q(2);
                        case "a":
                            return Z(_, E, !0);
                        case "A":
                            return Z(_, E, !1);
                        case "m":
                            return String(E);
                        case "mm":
                            return m.s(E, 2, "0");
                        case "s":
                            return String(c.$s);
                        case "ss":
                            return m.s(c.$s, 2, "0");
                        case "SSS":
                            return m.s(c.$ms, 3, "0");
                        case "Z":
                            return f
                        }
                        return null
                    }(D) || f.replace(":", "")
                })
            }
            ,
            a.utcOffset = function() {
                return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
            }
            ,
            a.diff = function(i, c, o) {
                var p, f = this, _ = m.p(c), E = x(i), C = (E.utcOffset() - this.utcOffset()) * n, M = this - E, R = function() {
                    return m.m(f, E)
                };
                switch (_) {
                case S:
                    p = R() / 12;
                    break;
                case u:
                    p = R();
                    break;
                case $:
                    p = R() / 3;
                    break;
                case v:
                    p = (M - C) / 6048e5;
                    break;
                case y:
                    p = (M - C) / 864e5;
                    break;
                case b:
                    p = M / s;
                    break;
                case g:
                    p = M / n;
                    break;
                case d:
                    p = M / t;
                    break;
                default:
                    p = M
                }
                return o ? p : m.a(p)
            }
            ,
            a.daysInMonth = function() {
                return this.endOf(u).$D
            }
            ,
            a.$locale = function() {
                return P[this.$L]
            }
            ,
            a.locale = function(i, c) {
                if (!i)
                    return this.$L;
                var o = this.clone()
                  , p = V(i, c, !0);
                return p && (o.$L = p),
                o
            }
            ,
            a.clone = function() {
                return m.w(this.$d, this)
            }
            ,
            a.toDate = function() {
                return new Date(this.valueOf())
            }
            ,
            a.toJSON = function() {
                return this.isValid() ? this.toISOString() : null
            }
            ,
            a.toISOString = function() {
                return this.$d.toISOString()
            }
            ,
            a.toString = function() {
                return this.$d.toUTCString()
            }
            ,
            h
        }()
          , z = j.prototype;
        return x.prototype = z,
        [["$ms", l], ["$s", d], ["$m", g], ["$H", b], ["$W", y], ["$M", u], ["$y", S], ["$D", O]].forEach(function(h) {
            z[h[1]] = function(a) {
                return this.$g(a, h[0], h[1])
            }
        }),
        x.extend = function(h, a) {
            return h.$i || (h(a, j, x),
            h.$i = !0),
            x
        }
        ,
        x.locale = V,
        x.isDayjs = H,
        x.unix = function(h) {
            return x(1e3 * h)
        }
        ,
        x.en = P[T],
        x.Ls = P,
        x.p = {},
        x
    })
}
)(Ae);
var st = Ae.exports;
const it = Le(st)
  , ot = 375
  , $e = 760
  , be = 1e3
  , xe = 1300
  , Ee = 1760;
function at(r) {
    return r < $e ? ot : r < be ? $e : r < xe ? be : r < Ee ? xe : Ee
}
const ct = "new-icc"
  , ut = "YYYY-MM-DDThh:mm:ssTZD"
  , Se = {
    XA: "AE-AZ",
    XD: "AE-DU",
    WW: "international"
};
function le(r) {
    return Se[r] ? Se[r] : r
}
class $t {
    constructor({carOptions: e, language: t, country: n, currency: s, porscheCode: l, car: d, partner: g}) {
        w(this, "carOptions", {});
        w(this, "language");
        w(this, "country");
        w(this, "currency");
        w(this, "userAgent");
        w(this, "porscheCode");
        w(this, "ENV");
        w(this, "step");
        w(this, "carData");
        w(this, "partner");
        w(this, "GDL");
        this.carOptions = e,
        this.language = t,
        this.currency = s,
        this.country = le(n),
        this.step = {
            id: F,
            metadata: {}
        },
        this.carData = d || {},
        this.porscheCode = l,
        this.ENV = window == null ? void 0 : window.ENV,
        g && (this.partner = g),
        this.GDL = new De
    }
    update({carOptions: e, language: t, country: n, currency: s, porscheCode: l, car: d, partner: g}) {
        this.carOptions = e,
        this.language = t,
        this.currency = s,
        this.country = le(n),
        this.step = {
            id: F,
            metadata: {}
        },
        this.carData = d || {},
        this.porscheCode = l,
        this.ENV = window == null ? void 0 : window.ENV,
        g && (this.partner = g)
    }
    setStep(e, t) {
        this.step = {
            id: e,
            metadata: {
                position: t
            }
        }
    }
    async pushEvent(e) {
        var u, $;
        const {trackingEvent: t, trackingIdent: n, contentTags: s, additionalInformation: l, car: d, sectionName: g} = e;
        this.userAgent = navigator.userAgent,
        d && (this.carData = {
            ...this.carData,
            ...d
        });
        const y = {
            ...this.payload(t, n, s, l),
            ...l
        };
        y.pageExperience.sectionName = n,
        g && (y.pageExperience.sectionName = g),
        (($ = (u = this.ENV) == null ? void 0 : u.tracking) == null ? void 0 : $.enabled) && this.GDL && this.GDL.push(t, y)
    }
    payload(e, t, n, s) {
        var d;
        const l = {
            context: this.context(e),
            car: this.car(),
            process: this.process(),
            pageExperience: this.pageExperience(t, n),
            visitor: this.visitor((d = s == null ? void 0 : s.visitor) == null ? void 0 : d.loginStatus)
        };
        return this.partner && (l.partner = this.partner),
        l
    }
    context(e) {
        var n, s;
        const t = ((n = this.ENV) == null ? void 0 : n.environment) === "prod" ? "P" : ((s = this.ENV) == null ? void 0 : s.environment) === "stg" ? "PP" : "K";
        return {
            eventAction: e,
            applicationId: ct,
            language: this.language,
            country: this.country,
            currency: this.currency,
            environment: t,
            timestamp: it(new Date).format(ut),
            server: window.location.hostname
        }
    }
    visitor(e) {
        const t = window.innerWidth
          , n = window.innerHeight
          , s = () => n > t ? "p" : "l";
        return {
            deviceBrowserHeight: String(n),
            deviceBrowserWidth: String(t),
            deviceBrowserBreakpoint: String(at(t)),
            deviceBrowserOrientation: s(),
            useragent: this.userAgent ? this.userAgent : "",
            loginStatus: e
        }
    }
    pageExperience(e, t) {
        return {
            pageId: window.location.origin,
            pageName: this.step.id || void 0,
            sectionName: this.step.id || void 0,
            contentTags: (t == null ? void 0 : t.length) === 0 ? [e] : t
        }
    }
    process() {
        var e, t, n, s, l;
        return {
            processName: "icc",
            processType: "configuration",
            processStart: ((e = this.step) == null ? void 0 : e.id) === F,
            processStepName: ((t = this.step) == null ? void 0 : t.id) || void 0,
            processStepNumber: ((s = (n = this.step) == null ? void 0 : n.metadata) == null ? void 0 : s.position) || 1,
            processEnd: ((l = this.step) == null ? void 0 : l.id) === Ce
        }
    }
    car() {
        return {
            type: "configuration",
            modelRangeName: void 0,
            modelCode: void 0,
            modelName: void 0,
            modelModelYear: void 0,
            exteriorColorCode: void 0,
            exteriorColorName: void 0,
            interiorColorCode: void 0,
            interiorColorName: void 0,
            wheelsCode: void 0,
            wheelsName: void 0,
            extrasCount: 0,
            extrasCurrentOptionsList: void 0,
            extrasCurrentOptionsCodes: void 0,
            priceTotalBasic: void 0,
            priceTotalAdditional: void 0,
            priceTotalTotal: void 0,
            porscheCode: this.porscheCode,
            ...this.carData
        }
    }
}
const lt = "new-icc";
function oe(r) {
    function e() {
        return r < ve ? nt : r < ye ? ve : r < me ? ye : r < _e ? me : r < we ? _e : we
    }
    return String(e())
}
const N = class N {
    constructor({environment: e, locale: t, modelFamily: n, modelName: s, modelYear: l, orderType: d, rawData: g, currency: b, partner: y, prices: v, loginStatus: u, userEmail: $}) {
        w(this, "_car");
        w(this, "_context");
        w(this, "_pageExperience");
        w(this, "_process");
        w(this, "_partner");
        w(this, "_visitor");
        w(this, "_ids");
        w(this, "_catalogOptions");
        w(this, "_userEmail");
        var A, B, Y, G, L, W, T, P, k, H, V, x, m, j, z;
        const [S,O] = t.split("-");
        y && (this._partner = y),
        $ && (this._userEmail = $),
        this._ids = {},
        this._car = {
            exteriorColorCode: `${(A = g.exteriorColor) == null ? void 0 : A.type}${(B = g.exteriorColor) == null ? void 0 : B.id}`,
            exteriorColorName: (Y = g.exteriorColor) == null ? void 0 : Y.title,
            extrasCount: (G = g.selectedNonStandardOptions) == null ? void 0 : G.length,
            extrasCurrentOptionsList: g.selectedNonStandardOptions,
            interiorColorCode: `${(L = g.interiorColor) == null ? void 0 : L.type}${(W = g.interiorColor) == null ? void 0 : W.id}`,
            interiorColorName: (T = g.interiorColor) == null ? void 0 : T.title,
            modelCode: d,
            modelModelYear: String(l),
            modelName: s,
            modelRangeName: n == null ? void 0 : n.toLowerCase(),
            priceTotalAdditional: (k = (P = v == null ? void 0 : v.main) == null ? void 0 : P.options) == null ? void 0 : k.raw,
            priceTotalBasic: (V = (H = v == null ? void 0 : v.main) == null ? void 0 : H.base) == null ? void 0 : V.raw,
            priceTotalTotal: (x = v == null ? void 0 : v.total) == null ? void 0 : x.raw,
            wheelsCode: `${(m = g.wheels) == null ? void 0 : m.type}${(j = g.wheels) == null ? void 0 : j.id}`,
            wheelsName: (z = g.wheels) == null ? void 0 : z.title,
            extrasCurrentOptionsCodes: void 0,
            porscheCode: void 0,
            type: "configuration"
        },
        this._context = {
            applicationId: lt,
            country: le(O),
            currency: b,
            environment: e === "prod" ? "P" : e === "stg" ? "PP" : "K",
            language: S
        },
        this._pageExperience = {
            contentId: void 0,
            pageName: "",
            sectionName: F
        },
        this._process = {
            processEnd: !1,
            processName: "icc",
            processStart: !0,
            processStepName: F,
            processStepNumber: 1,
            processType: "configuration"
        },
        this._visitor = {
            deviceBrowserBreakpoint: oe(0),
            loginStatus: u
        },
        this._catalogOptions = g.allOptions
    }
    get car() {
        return this._car
    }
    get context() {
        return this._context
    }
    get ids() {
        return this._ids
    }
    set ids(e) {
        this._ids = {
            userId: e
        }
    }
    get pageExperience() {
        return this._pageExperience
    }
    get partner() {
        return this._partner
    }
    get process() {
        return this._process
    }
    get visitor() {
        return this._visitor
    }
    get catalogOptions() {
        return this._catalogOptions
    }
    static init({environment: e, locale: t, orderType: n, rawData: s, currency: l, modelName: d, modelYear: g, modelFamily: b, partner: y, prices: v, loginStatus: u, userEmail: $}) {
        N.instance || (N.instance = new N({
            environment: e,
            locale: t,
            modelFamily: b || "",
            modelName: d || "",
            modelYear: g,
            orderType: n,
            rawData: s,
            currency: l,
            partner: y,
            prices: v,
            loginStatus: u,
            userEmail: $
        }))
    }
    static get() {
        return N.instance
    }
    static updateVisitor(e) {
        N.instance._visitor.deviceBrowserBreakpoint !== oe(e) && (N.instance._visitor.deviceBrowserBreakpoint = oe(e))
    }
    static updateLoginStatus(e) {
        N.instance._visitor.loginStatus !== e && typeof e == "boolean" && (N.instance._visitor.loginStatus = e)
    }
    static updateUserId(e) {
        !e || !N.instance._ids || (N.instance._userEmail !== e || !N.instance._ids.userId) && (N.instance._userEmail = e,
        rt(e).then(t => {
            N.instance._ids = {
                userId: t
            }
        }
        ))
    }
    static updatePageExperience(e) {
        const t = N.instance._pageExperience;
        e ? t.pageName = e : t.pageName = F
    }
    static updateProcess(e, t) {
        const n = N.instance._process;
        e && t ? (n.processEnd = e === Ce,
        n.processStart = e === F,
        n.processStepName = e,
        n.processStepNumber = t + 1) : (n.processEnd = !1,
        n.processStart = !0,
        n.processStepName = F,
        n.processStepNumber = 1)
    }
    static updateCar(e, t) {
        var s, l, d, g, b, y, v, u, $, S, O, A, B, Y, G, L, W, T, P, k, H;
        const n = N.instance._car;
        n.exteriorColorName !== ((s = e.exteriorColor) == null ? void 0 : s.title) && (n.exteriorColorCode = `${(l = e.exteriorColor) == null ? void 0 : l.type}${(d = e.exteriorColor) == null ? void 0 : d.id}`,
        n.exteriorColorName = (g = e.exteriorColor) == null ? void 0 : g.title),
        n.extrasCurrentOptionsList !== e.selectedNonStandardOptions && (n.extrasCount = (b = e.selectedNonStandardOptions) == null ? void 0 : b.length,
        n.extrasCurrentOptionsList = e.selectedNonStandardOptions),
        n.interiorColorName !== ((y = e.interiorColor) == null ? void 0 : y.title) && (n.interiorColorCode = `${(v = e.interiorColor) == null ? void 0 : v.type}${(u = e.interiorColor) == null ? void 0 : u.id}`,
        n.interiorColorName = ($ = e.interiorColor) == null ? void 0 : $.title),
        n.priceTotalTotal !== ((S = t == null ? void 0 : t.total) == null ? void 0 : S.raw) && (n.priceTotalAdditional = (A = (O = t == null ? void 0 : t.main) == null ? void 0 : O.options) == null ? void 0 : A.raw,
        n.priceTotalTotal = (B = t == null ? void 0 : t.total) == null ? void 0 : B.raw),
        n.priceTotalBasic !== ((G = (Y = t == null ? void 0 : t.main) == null ? void 0 : Y.base) == null ? void 0 : G.raw) && (n.priceTotalBasic = (W = (L = t == null ? void 0 : t.main) == null ? void 0 : L.base) == null ? void 0 : W.raw),
        n.wheelsName !== ((T = e.wheels) == null ? void 0 : T.title) && (n.wheelsCode = `${(P = e.wheels) == null ? void 0 : P.type}${(k = e.wheels) == null ? void 0 : k.id}`,
        n.wheelsName = (H = e.wheels) == null ? void 0 : H.title),
        n.extrasCurrentOptionsCodes = {}
    }
}
;
w(N, "instance");
let ne = N;
const J = class J {
    constructor() {
        w(this, "GDL");
        this.GDL = new De
    }
    static push({event: e, car: t, componentClick: n, componentDisplay: s, context: l, financialProduct: d, ids: g, pageExperience: b, process: y, visitor: v}) {
        var k;
        J.instance || (J.instance = new J);
        const u = ne.get();
        window && ne.updateVisitor(window.innerWidth);
        const $ = {
            car: {
                ...u.car,
                ...t
            }
        }
          , S = n ? {
            componentClick: {
                ...n
            }
        } : {}
          , O = s ? {
            componentDisplay: {
                ...s
            }
        } : {}
          , A = {
            context: {
                ...u.context,
                ...l
            }
        }
          , B = d ? {
            financialProduct: {
                ...d
            }
        } : {}
          , Y = g ? {
            ids: {
                ...u.ids,
                ...g
            }
        } : (k = u.ids) != null && k.userId ? {
            ids: {
                ...u.ids
            }
        } : {}
          , G = {
            pageExperience: {
                ...u.pageExperience,
                ...b
            }
        }
          , L = u.partner ? {
            partner: {
                ...u.partner
            }
        } : {}
          , W = y ? {
            process: {
                ...u.process,
                ...y
            }
        } : {
            process: {
                ...u.process
            }
        }
          , T = y ? {
            visitor: {
                ...u.visitor,
                ...v
            }
        } : {
            visitor: {
                ...u.visitor
            }
        }
          , P = {
            ...$,
            ...S,
            ...O,
            ...A,
            ...B,
            ...Y,
            ...G,
            ...L,
            ...W,
            ...T
        };
        J.instance.GDL.push(e, P)
    }
}
;
w(J, "instance");
let Ne = J;
export {Ne as A, wt as E, Ce as I, ne as T, vt as a, gt as b, mt as c, _t as d, ft as e, yt as f, $t as g, rt as h};
//# sourceMappingURL=analytics-tracking-DWTr_3jg.js.map
