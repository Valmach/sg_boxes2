import {R as c} from "./index-BDeVe4rF.js";
function i() {
    const {t: r} = c();
    function n(t, o={}) {
        const {fallback: u="key", ...a} = o;
        try {
            return r(t, a)
        } catch {
            return u === "key" ? t : void 0
        }
    }
    return {
        t: n
    }
}
export {i as u};
