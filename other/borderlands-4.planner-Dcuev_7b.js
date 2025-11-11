import {r as i, j as e} from "./jsx-runtime-BmCkTyBI.js";
import {C as a} from "./index-0f3ee958-DZWNGZaJ.js";
import "./index-B7uSRlxY.js";
import {P as n} from "./planner-page-D8IwEwc7.js";
import {u as m} from "./context-D_yk-qIR.js";
import {l as p} from "./load-embed-CQ1j_U8H.js";
import "./index-DTex4z8k.js";
import "./merge-accounts-disclaimer-utils-JJt5PPSk.js";
import "./util-DPeyOfYu.js";
import "./lodash-DicVzLFw.js";
import "./line-separator-B6WHh7IT.js";
import "./ad-container-client-only-BXY_4qal.js";
import "./client-only-cWYvs-hb.js";
import "./breadcrumbs-C4Eq3vs1.js";
import "./index-J7VLbtRZ.js";
import "./global-link-C3EsOPSs.js";
import "./components-yGT3xdTE.js";
import "./index-DaXM-EJC.js";
import "./index-DQDlNFz_.js";
import "./floating-ads-page-B-Wmn4Y3.js";
import "./index-iuRqKLLC.js";
function $() {
    const {siteInfo: r, runId: t, assetPath: o, embedMap: s} = m();
    return i.useEffect( () => {
        p(r.short, t, o, s)
    }
    , [o, s, t, r.short]),
    e.jsxs(n, {
        id: `${r.long}-planner-page`,
        title: `${r.title} Planner`,
        titleClassName: "mb-4",
        showPinPage: !1,
        showVideoAd: !1,
        scripts: [],
        styles: [],
        children: [e.jsx(a, {
            className: "mb-2",
            type: "warning",
            children: "This planner is currently in beta - we are actively working on improvements, bug fixes, and new features. Thanks for your patience and feedback!"
        }), e.jsx("div", {
            className: "bl4-planner"
        })]
    })
}
export {$ as default};
