import {
    d as Z,
    a2 as Ke,
    p as B,
    c as Ne,
    m as S,
    o as L,
    a as A,
    e as f,
    a7 as kn,
    b as v,
    w as re,
    k,
    t as se,
    _ as ve,
    a9 as j,
    a3 as Cn,
    x as Mn,
    H as Qe,
    i as le,
    r as P,
    U as oe,
    R as xn,
    E as Tn,
    aq as be,
    v as ye,
    z as An,
    F as pe,
    D as zt,
    B as Jt,
    aA as In,
    l as z,
    V as $n,
    aB as En,
    C as Kt,
    aC as Pn,
    q as Qt,
    aD as Wn,
    aE as Fn,
    a1 as qe,
    u as X,
    a4 as ie,
    ab as qt,
    Q as et,
    aa as Rn,
    n as me,
    y as tt,
    I as Vn,
    j as Hn,
    av as Nn,
    aw as Gn,
    G as Dn,
    aF as Zn,
    aG as On,
    J as Bn,
    aH as Rt,
    S as Pe,
    K as Vt,
    af as Yn,
    s as We,
    aI as jn,
    aJ as Xn,
    aK as Un,
    aL as zn,
    aM as Jn
} from "https://hamsterkombat.io/_nuxt/entry.Be7bcxUL.js";
import {
    _ as en
} from "https://hamsterkombat.io/_nuxt/image.vue.BJrifXfv.js";
import {
    a as Kn,
    _ as tn
} from "https://hamsterkombat.io/_nuxt/Price.vue.BrQ1Ugj4.js";
import {
    _ as nn
} from "https://hamsterkombat.io/_nuxt/Preloader.HaJWKEV4.js";
import {
    u as Qn
} from "https://hamsterkombat.io/_nuxt/earn.BkoUTXC6.js";
import {
    u as qn
} from "https://hamsterkombat.io/_nuxt/airdrop.B4CQQ3Q-.js";
const eo = "" + globalThis.__publicAssetsURL("images/lambo.png"),
    to = "" + globalThis.__publicAssetsURL("images/loading/_bg_.jpg"),
    no = {
        class: "main"
    },
    oo = {
        key: 0,
        class: "loading-logout"
    },
    ro = {
        class: "loading-launch"
    },
    io = f("div", {
        class: "loading-launch-image"
    }, [f("img", {
        src: to,
        alt: "Loading screen"
    })], -1),
    ao = {
        class: "loading-launch-progress"
    },
    so = {
        class: "loading-launch-progress-text"
    },
    co = {
        class: "loading-launch-bottom"
    },
    lo = f("div", {
        class: "loading-launch-text-token"
    }, "Hamster Kombat Token", -1),
    uo = f("div", {
        class: "loading-launch-text-launch"
    }, "will be launched", -1),
    fo = f("div", {
        class: "loading-launch-text-title"
    }, "on TON", -1),
    mo = {
        class: "loading-launch-social"
    },
    po = f("p", null, "Stay tuned", -1),
    vo = f("span", null, "More info in official channels", -1),
    ho = Z({
        __name: "LoadingLaunch",
        setup(e) {
            const t = Ke(),
                n = B(),
                o = Ne(() => S().$config.public.appEnv !== "production");
            return (r, i) => {
                const s = ve;
                return L(), A("div", no, [f("div", {
                    class: "loading-progress",
                    style: kn({
                        width: `${v(n).progress_loading}%`
                    })
                }, null, 4), v(o) ? (L(), A("div", oo, [f("button", {
                    class: "button button-primary button-xs",
                    onClick: i[0] || (i[0] = a => v(t).logout(!1))
                }, "Logout")])) : re("", !0), f("div", ro, [io, f("div", ao, [k(s, {
                    name: "loading-yellow"
                }), f("div", so, se(v(t).error ? r.$t("messages.oops") : r.$t("buttons.loading")), 1)]), f("div", co, [lo, uo, fo, f("div", mo, [po, vo, f("ul", null, [f("li", null, [k(s, {
                    class: "is-telegram",
                    name: "ln-telegram"
                })]), f("li", null, [k(s, {
                    class: "is-youtube",
                    name: "ln-youtube"
                })]), f("li", null, [k(s, {
                    class: "is-x",
                    name: "ln-x"
                })])])])])])])
            }
        }
    }),
    go = "" + globalThis.__publicAssetsURL("images/qr.png"),
    _o = {
        class: "main-center"
    },
    bo = {
        class: "content-no-telegram"
    },
    yo = ["alt"],
    wo = {
        key: 0,
        class: "is-version"
    },
    So = Z({
        __name: "NotTelegram",
        setup(e) {
            const t = Ke();
            return (n, o) => {
                const r = Mn;
                return L(), A("main", _o, [f("div", bo, [f("p", null, se(n.$t("messages.play_mobile")), 1), k(r, {
                    to: ("useNuxtApp" in n ? n.useNuxtApp : v(S))().$config.public.botUrl
                }, {
                    default: j(() => [f("img", {
                        src: go,
                        alt: ("useNuxtApp" in n ? n.useNuxtApp : v(S))().$config.public.botName
                    }, null, 8, yo)]),
                    _: 1
                }, 8, ["to"]), k(r, {
                    to: ("useNuxtApp" in n ? n.useNuxtApp : v(S))().$config.public.botUrl
                }, {
                    default: j(() => [Cn(se(("useNuxtApp" in n ? n.useNuxtApp : v(S))().$config.public.botName), 1)]),
                    _: 1
                }, 8, ["to"]), v(t).telegram_version || v(t).telegram_version ? (L(), A("p", wo, se(v(t).telegram_platform) + " " + se(v(t).telegram_version), 1)) : re("", !0)])])
            }
        }
    }),
    Lo = {
        class: "app-bar"
    },
    ko = {
        class: "app-bar-nav"
    },
    Co = {
        class: "app-bar-item-image"
    },
    Mo = ["innerHTML"],
    xo = {
        class: "app-bar-item-image"
    },
    To = ["innerHTML"],
    Ao = {
        class: "app-bar-item-image"
    },
    Io = ["innerHTML"],
    $o = {
        class: "app-bar-item-image"
    },
    Eo = {
        key: 0,
        class: "app-bar-item-notification"
    },
    Po = ["innerHTML"],
    Wo = {
        class: "app-bar-item-image"
    },
    Fo = {
        key: 0,
        class: "app-bar-item-notification"
    },
    Ro = ["innerHTML"],
    Vo = Z({
        __name: "AppBar",
        setup(e) {
            Qe();
            const t = le(),
                n = B();
            return P(0), (o, r) => {
                const i = en,
                    s = xn,
                    a = ve,
                    c = Tn;
                return L(), A("div", Lo, [f("nav", ko, [k(s, {
                    class: "app-bar-item no-select",
                    to: v(oe).GAME_INDEX,
                    onClick: r[0] || (r[0] = l => ("useUiStore" in o ? o.useUiStore : v(B))().useHapticFeedback("soft"))
                }, {
                    default: j(() => {
                        var l;
                        return [f("div", Co, [k(i, {
                            class: "is-border-6",
                            name: (l = v(t).currentExchange) == null ? void 0 : l.id
                        }, null, 8, ["name"])]), f("p", {
                            innerHTML: o.$t("buttons.exchange")
                        }, null, 8, Mo)]
                    }),
                    _: 1
                }, 8, ["to"]), k(s, {
                    class: "app-bar-item no-select",
                    to: v(oe).GAME_MINE,
                    onClick: r[2] || (r[2] = l => ("useUiStore" in o ? o.useUiStore : v(B))().useHapticFeedback("soft"))
                }, {
                    default: j(() => [f("div", xo, [k(a, {
                        class: "icon-mine",
                        name: "app-bar-mine"
                    })]), f("p", {
                        innerHTML: o.$t("buttons.mine"),
                        onClick: r[1] || (r[1] = l => ("useUiStore" in o ? o.useUiStore : v(B))().useHapticFeedback())
                    }, null, 8, To)]),
                    _: 1
                }, 8, ["to"]), k(s, {
                    class: "app-bar-item no-select",
                    to: v(oe).GAME_FRIENDS,
                    onClick: r[3] || (r[3] = l => ("useUiStore" in o ? o.useUiStore : v(B))().useHapticFeedback("soft"))
                }, {
                    default: j(() => [f("div", Ao, [k(a, {
                        class: "icon-friends",
                        name: "app-bar-friends"
                    })]), f("p", {
                        innerHTML: o.$t("buttons.friends")
                    }, null, 8, Io)]),
                    _: 1
                }, 8, ["to"]), k(s, {
                    class: "app-bar-item no-select",
                    to: v(oe).GAME_EARN,
                    onClick: r[4] || (r[4] = l => ("useUiStore" in o ? o.useUiStore : v(B))().useHapticFeedback("soft"))
                }, {
                    default: j(() => [f("div", $o, [k(a, {
                        class: "icon-earn",
                        name: "app-bar-earn"
                    }), v(n).taskNotification ? (L(), A("div", Eo)) : re("", !0)]), f("p", {
                        innerHTML: o.$t("buttons.earn")
                    }, null, 8, Po)]),
                    _: 1
                }, 8, ["to"]), k(s, {
                    class: "app-bar-item no-select",
                    to: v(oe).GAME_AIRDROP,
                    onClick: r[5] || (r[5] = l => ("useUiStore" in o ? o.useUiStore : v(B))().useHapticFeedback("soft"))
                }, {
                    default: j(() => [f("div", Wo, [k(c), v(n).taskAirdropNotification ? (L(), A("div", Fo)) : re("", !0)]), f("p", {
                        innerHTML: o.$t("buttons.airdrop")
                    }, null, 8, Ro)]),
                    _: 1
                }, 8, ["to"])])])
            }
        }
    }),
    Ho = {
        class: "content-coins"
    },
    No = ["id", "initial", "enter"],
    Go = Z({
        __name: "CoinsAnimation",
        setup(e) {
            const t = P([]),
                {
                    $listen: n,
                    $event: o
                } = S(),
                r = be(),
                i = (a, c) => (a = Math.ceil(a), c = Math.floor(c), Math.floor(Math.random() * (c - a + 1)) + a),
                s = a => {
                    const c = Math.min(a.count, 75);
                    if (r.settings.coins_animation)
                        for (let l = 0; l < c; l++) setTimeout(() => {
                            const d = i(a.x_start_from, a.x_start_to),
                                u = a.random_end_x ? i(a.x_end_from, a.x_end_to) : d,
                                m = i(a.y_start_from, a.y_start_to),
                                p = a.direction_y === "from_top" ? m + i(a.y_end_from, a.y_end_to) : m - i(a.y_end_from, a.y_end_to),
                                g = a.random_end_x ? Math.random() * (1 - .5) + .5 : 1;
                            t.value.push({
                                x_start: d,
                                x_end: u,
                                y_start: m,
                                y_end: p,
                                opacity_start: g,
                                opacity_end: 0,
                                date: Date.now(),
                                id: l
                            }), setTimeout(() => {
                                t.value.shift()
                            }, a.timeout_fly ?? 2e3)
                        }, a.delay * l);
                    setTimeout(() => {
                        o("balance-animate:stop"), o("balance-animate-passive:stop")
                    }, r.settings.coins_animation ? a.delay * c + 1e3 : 50)
                };
            return ye(() => {
                n("coins-animate", a => s(a))
            }), (a, c) => {
                const l = Kn,
                    d = An("motion");
                return L(), A("div", Ho, [(L(!0), A(pe, null, zt(v(t), u => Jt((L(), A("div", {
                    id: u.date,
                    key: `coins-${u.date}-${u.id}`,
                    initial: {
                        x: u.x_start,
                        y: u.y_start,
                        opacity: u.opacity_start
                    },
                    enter: {
                        x: u.x_end,
                        y: u.y_end,
                        opacity: u.opacity_end,
                        transition: {
                            type: "spring",
                            stiffness: "50"
                        }
                    }
                }, [k(l, {
                    class: "is-20"
                })], 8, No)), [
                    [d]
                ])), 128))])
            }
        }
    }),
    Do = {
        class: "bottom-sheet-inner"
    },
    Zo = {
        class: "bottom-sheet-scroll"
    },
    Oo = Z({
        __name: "Main",
        props: {
            isOpen: {
                type: Boolean,
                default: !1
            }
        },
        setup(e) {
            const {
                $event: t
            } = S(), n = P(null), o = r => {
                t("bs:close")
            };
            return In(n, {
                disableTextSelect: !0,
                onSwipe(r) {
                    t("bs:close")
                },
                onSwipeEnd(r, i) {
                    i === "down" && t("bs:close")
                }
            }), (r, i) => {
                const s = ve;
                return L(), z(Pn, {
                    name: "bs-open"
                }, {
                    default: j(() => [Jt(f("div", {
                        class: Kt(["bottom-sheet", {
                            open: e.isOpen
                        }])
                    }, [f("div", {
                        class: "bottom-sheet-bg",
                        onClick: o,
                        ref_key: "bottomSheetSwipe",
                        ref: n
                    }, null, 512), f("div", Do, [f("div", {
                        class: "bottom-sheet-close",
                        onClick: o
                    }, [k(s, {
                        name: "close"
                    })]), f("div", Zo, [En(r.$slots, "default")])])], 2), [
                        [$n, e.isOpen]
                    ])]),
                    _: 3
                })
            }
        }
    }),
    Bo = Z({
        __name: "Root",
        setup(e) {
            const {
                $event: t,
                $listen: n
            } = S(), o = B(), r = P(null), i = P(null), s = P(!0), a = P(!1);
            let c;
            const l = ({
                    component: p,
                    props: g = null,
                    closeOnClick: h,
                    onCloseDialog: b
                }) => {
                    i.value = g, setTimeout(() => {
                        r.value = p
                    }, 100), s.value = h, c = b, a.value = !0
                },
                d = () => {
                    a.value = !1, setTimeout(() => {
                        r.value = null
                    }, 400), c && c()
                },
                u = () => {
                    s.value && d()
                },
                m = p => {
                    p.keyCode === 27 && d()
                };
            return ye(() => {
                document.addEventListener("keyup", m)
            }), Qt(() => {
                document.removeEventListener("keyup", m)
            }), n("bs:open", p => {
                l(p), o.setBottomSheetOpen(!0)
            }), n("bs:close", p => {
                d(), o.setBottomSheetOpen(!1)
            }), (p, g) => {
                const h = Oo;
                return L(), z(h, {
                    isOpen: v(a),
                    onOnClose: u
                }, {
                    default: j(() => [v(r) ? (L(), z(Wn(v(r)), Fn({
                        key: 0,
                        onOnClose: d
                    }, v(i)), null, 16)) : re("", !0)]),
                    _: 1
                }, 8, ["isOpen"])
            }
        }
    }),
    on = "" + globalThis.__publicAssetsURL("images/daily-combo-success.png"),
    Yo = {
        class: "daily-combo-success-inner"
    },
    jo = f("div", {
        class: "daily-combo-success-divider"
    }, null, -1),
    Xo = {
        class: "daily-combo-success-header"
    },
    Uo = ["innerHTML"],
    zo = {
        class: "daily-combo-progress-center"
    },
    Jo = f("div", {
        class: "daily-combo-success-divider"
    }, null, -1),
    Ko = {
        class: "daily-combo-success-content"
    },
    Qo = f("div", {
        class: "bs-content-image is-daily-combo-info"
    }, [f("div", {
        class: "bs-content-image-round-bg is-violet"
    }), f("img", {
        src: on
    })], -1),
    qo = ["innerHTML"],
    er = f("div", {
        class: "daily-combo-success-divider"
    }, null, -1),
    tr = f("div", {
        class: "daily-combo-success-divider"
    }, null, -1),
    nr = Z({
        __name: "DailyComboSuccess",
        setup(e) {
            const t = qe(),
                n = () => {
                    t.setDailyComboSuccess(!1)
                },
                o = Ne(() => s.value === 1 ? S().$i18n.t("daily_combo.card_found_1") : S().$i18n.t("daily_combo.card_found_2")),
                r = P(null),
                i = P(0),
                s = Ne(() => {
                    var a, c;
                    return ((c = (a = t.dailyCombo) == null ? void 0 : a.upgradeIds) == null ? void 0 : c.filter(l => l !== null).length) ?? 1
                });
            return ye(() => {
                s.value === 1 ? X().trackEvent(ie.DAILY_COMBO_FOUND_1) : X().trackEvent(ie.DAILY_COMBO_FOUND_2);
                const a = r.value,
                    c = a.getContext("2d"),
                    l = 50,
                    d = 300,
                    u = Math.PI * 2 / l;
                a.width = 400, a.height = 400;

                function m() {
                    c.clearRect(0, 0, a.width, a.height);
                    const p = a.width / 2,
                        g = a.height / 2;
                    for (let h = 0; h < l; h++) {
                        const b = h * u + i.value,
                            y = p + Math.cos(b) * 30,
                            x = g + Math.sin(b) * 30,
                            C = p + Math.cos(b + Math.PI / 180 * 20) * d,
                            I = g + Math.sin(b + Math.PI / 180 * 20) * d,
                            _ = c.createLinearGradient(y, x, C, I);
                        _.addColorStop(0, "rgba(110, 76, 244, 0.5)"), _.addColorStop(1, "transparent"), c.beginPath(), c.moveTo(y, x), c.lineTo(C, I), c.lineTo(p, g), c.closePath(), c.fillStyle = _, c.fill()
                    }
                    i.value += Math.PI / 180, setTimeout(m, 50)
                }
                m()
            }), (a, c) => {
                var l;
                return L(), A("div", {
                    class: "daily-combo-success",
                    onClick: n
                }, [f("div", Yo, [jo, f("div", Xo, [f("p", {
                    innerHTML: a.$t("daily_combo.title")
                }, null, 8, Uo), f("div", zo, [f("ul", null, [(L(!0), A(pe, null, zt((l = v(t).dailyCombo) == null ? void 0 : l.upgradeIds, (d, u) => {
                    var m, p;
                    return L(), A("li", {
                        key: `ddc${u}-${d||new Date}`,
                        class: Kt({
                            "is-completed": (p = (m = v(t).dailyCombo) == null ? void 0 : m.upgradeIds) == null ? void 0 : p[u]
                        })
                    }, null, 2)
                }), 128))])])]), Jo, f("div", Ko, [Qo, f("canvas", {
                    ref_key: "canvasSun",
                    ref: r
                }, null, 512)]), f("div", {
                    class: "bs-content-subtitle",
                    innerHTML: v(o)
                }, null, 8, qo), er, tr])])
            }
        }
    }),
    or = "" + globalThis.__publicAssetsURL("images/daily-cipher-success.webp"),
    rr = "" + globalThis.__publicAssetsURL("images/daily-cipher-success.png"),
    ir = or,
    ar = {
        class: "daily-combo-success-inner"
    },
    sr = f("div", {
        class: "daily-combo-success-divider"
    }, null, -1),
    cr = {
        class: "daily-combo-success-header"
    },
    lr = ["innerHTML"],
    ur = f("div", {
        class: "daily-combo-success-divider"
    }, null, -1),
    dr = {
        class: "daily-combo-success-content"
    },
    fr = {
        class: "bs-content-image is-daily-cipher"
    },
    mr = f("div", {
        class: "bs-content-image-round-bg is-yellow"
    }, null, -1),
    pr = {
        class: "is-daily-cipher img-responsive"
    },
    vr = f("source", {
        srcset: ir,
        type: "image/webp"
    }, null, -1),
    hr = ["alt"],
    gr = ["innerHTML"],
    _r = f("div", {
        class: "daily-combo-success-divider"
    }, null, -1),
    br = {
        class: "daily-combo-success-button"
    },
    yr = ["disabled"],
    wr = ["innerHTML"],
    Sr = f("div", {
        class: "daily-combo-success-divider"
    }, null, -1),
    Lr = Z({
        __name: "Success",
        setup(e) {
            const t = qt(),
                n = le(),
                o = P(!1),
                {
                    $event: r
                } = S(),
                i = be();
            let s;
            const a = () => {
                    t.setDailyCipherSuccess(!1)
                },
                c = P(null),
                l = P(0);
            ye(() => {
                X().trackEvent(ie.DAILY_COMBO_FOUND_1);
                const m = c.value,
                    p = m.getContext("2d"),
                    g = 50,
                    h = 300,
                    b = Math.PI * 2 / g;
                m.width = 400, m.height = 400;

                function y() {
                    p.clearRect(0, 0, m.width, m.height);
                    const x = m.width / 2,
                        C = m.height / 2;
                    for (let I = 0; I < g; I++) {
                        const _ = I * b + l.value,
                            V = x + Math.cos(_) * 30,
                            H = C + Math.sin(_) * 30,
                            w = x + Math.cos(_ + Math.PI / 180 * 20) * h,
                            ee = C + Math.sin(_ + Math.PI / 180 * 20) * h,
                            J = p.createLinearGradient(V, H, w, ee);
                        J.addColorStop(0, "rgba(255, 211, 55, 0.3)"), J.addColorStop(1, "transparent"), p.beginPath(), p.moveTo(V, H), p.lineTo(w, ee), p.lineTo(x, C), p.closePath(), p.fillStyle = J, p.fill()
                    }
                    l.value += Math.PI / 180, setTimeout(y, 50)
                }
                y()
            });
            const d = () => {
                    var h, b;
                    const m = ((h = document.querySelector(".user-balance-image")) == null ? void 0 : h.getBoundingClientRect()) ?? null;
                    let p;
                    const g = Math.min(150, Math.floor(((b = t.dailyCipher) == null ? void 0 : b.bonusCoins) ?? 1e4));
                    m ? p = {
                        x_start_from: -20,
                        x_start_to: window.innerWidth + 20,
                        y_start_from: -20,
                        y_start_to: 0,
                        x_end_from: m.x - 40,
                        x_end_to: m.x + m.width - 40,
                        y_end_from: window.innerHeight - m.y - m.height / 2,
                        y_end_to: window.innerHeight - m.y - m.height / 2,
                        count: g,
                        delay: 5,
                        timeout_fly: 2e3,
                        direction_y: "from_bottom",
                        random_end_x: !0
                    } : p = {
                        x_start_from: -20,
                        x_start_to: window.innerWidth + 20,
                        y_start_from: -20,
                        y_start_to: 0,
                        x_end_from: -20,
                        x_end_to: window.innerWidth + 20,
                        y_end_from: window.innerHeight - 64,
                        y_end_to: window.innerHeight,
                        count: g,
                        delay: 5,
                        timeout_fly: 2e3,
                        direction_y: "from_bottom",
                        random_end_x: !1
                    }, r("coins-animate", p), i.settings.coins_animation && r("balance-animate:start")
                },
                u = async () => {
                    t.getDailyCipherNotClaimed && (o.value || (o.value = !0, s = me.promise({
                        title: S().$i18n.t("messages.process_request")
                    }), await t.postClaimDailyCipher().then(m => {
                        X().trackEvent(ie.DAILY_CIPHER_CLAIMED), s == null || s.resolve({
                            title: S().$i18n.t("messages.claim_success"),
                            duration: 3e3
                        }), d(), B().useHapticFeedback("heavy"), t.setDailyCipherSuccess(!1)
                    }).catch(m => {
                        s == null || s.reject(S().$i18n.t("messages.oops"))
                    }).finally(() => {
                        setTimeout(() => {
                            o.value = !1
                        }, 400)
                    })))
                };
            return (m, p) => {
                const g = ve,
                    h = nn;
                return L(), A("div", {
                    class: "daily-combo-success",
                    onClick: a
                }, [f("div", ar, [sr, f("div", cr, [f("p", {
                    innerHTML: m.$t("morse.title")
                }, null, 8, lr)]), ur, f("div", dr, [f("div", fr, [mr, f("picture", pr, [vr, f("img", {
                    class: "img-responsive",
                    src: rr,
                    alt: v(et).GAME_NAME
                }, null, 8, hr)])]), f("canvas", {
                    ref_key: "canvasSun",
                    ref: c
                }, null, 512)]), f("div", {
                    class: "bs-content-subtitle",
                    innerHTML: m.$t("morse.code_found")
                }, null, 8, gr), _r, f("div", br, [f("button", {
                    class: "bottom-sheet-button button button-primary button-large",
                    onClick: Rn(u, ["stop"]),
                    disabled: v(o) || v(n).stop
                }, [v(o) ? (L(), z(h, {
                    key: 1
                })) : (L(), A(pe, {
                    key: 0
                }, [f("span", {
                    innerHTML: m.$t("daily_combo.claim_button")
                }, null, 8, wr), k(g, {
                    class: "icon-heart",
                    name: "heart"
                })], 64))], 8, yr)]), Sr])])
            }
        }
    });
var Ue = function() {
    return Ue = Object.assign || function(t) {
        for (var n, o = 1, r = arguments.length; o < r; o++) {
            n = arguments[o];
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
        }
        return t
    }, Ue.apply(this, arguments)
};

function W(e, t, n, o) {
    function r(i) {
        return i instanceof n ? i : new n(function(s) {
            s(i)
        })
    }
    return new(n || (n = Promise))(function(i, s) {
        function a(d) {
            try {
                l(o.next(d))
            } catch (u) {
                s(u)
            }
        }

        function c(d) {
            try {
                l(o.throw(d))
            } catch (u) {
                s(u)
            }
        }

        function l(d) {
            d.done ? i(d.value) : r(d.value).then(a, c)
        }
        l((o = o.apply(e, t || [])).next())
    })
}

function F(e, t) {
    var n = {
            label: 0,
            sent: function() {
                if (i[0] & 1) throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        },
        o, r, i, s;
    return s = {
        next: a(0),
        throw: a(1),
        return: a(2)
    }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
        return this
    }), s;

    function a(l) {
        return function(d) {
            return c([l, d])
        }
    }

    function c(l) {
        if (o) throw new TypeError("Generator is already executing.");
        for (; s && (s = 0, l[0] && (n = 0)), n;) try {
            if (o = 1, r && (i = l[0] & 2 ? r.return : l[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, l[1])).done) return i;
            switch (r = 0, i && (l = [l[0] & 2, i.value]), l[0]) {
                case 0:
                case 1:
                    i = l;
                    break;
                case 4:
                    return n.label++, {
                        value: l[1],
                        done: !1
                    };
                case 5:
                    n.label++, r = l[1], l = [0];
                    continue;
                case 7:
                    l = n.ops.pop(), n.trys.pop();
                    continue;
                default:
                    if (i = n.trys, !(i = i.length > 0 && i[i.length - 1]) && (l[0] === 6 || l[0] === 2)) {
                        n = 0;
                        continue
                    }
                    if (l[0] === 3 && (!i || l[1] > i[0] && l[1] < i[3])) {
                        n.label = l[1];
                        break
                    }
                    if (l[0] === 6 && n.label < i[1]) {
                        n.label = i[1], i = l;
                        break
                    }
                    if (i && n.label < i[2]) {
                        n.label = i[2], n.ops.push(l);
                        break
                    }
                    i[2] && n.ops.pop(), n.trys.pop();
                    continue
            }
            l = t.call(e, n)
        } catch (d) {
            l = [6, d], r = 0
        } finally {
            o = i = 0
        }
        if (l[0] & 5) throw l[1];
        return {
            value: l[0] ? l[1] : void 0,
            done: !0
        }
    }
}

function rn(e, t, n) {
    if (n || arguments.length === 2)
        for (var o = 0, r = t.length, i; o < r; o++)(i || !(o in t)) && (i || (i = Array.prototype.slice.call(t, 0, o)), i[o] = t[o]);
    return e.concat(i || Array.prototype.slice.call(t))
}
var an = "4.2.1";

function ce(e, t) {
    return new Promise(function(n) {
        return setTimeout(n, e, t)
    })
}

function Ge() {
    return ce(0)
}

function kr(e, t) {
    t === void 0 && (t = 1 / 0);
    var n = window.requestIdleCallback;
    return n ? new Promise(function(o) {
        return n.call(window, function() {
            return o()
        }, {
            timeout: t
        })
    }) : ce(Math.min(e, t))
}

function sn(e) {
    return !!e && typeof e.then == "function"
}

function Ht(e, t) {
    try {
        var n = e();
        sn(n) ? n.then(function(o) {
            return t(!0, o)
        }, function(o) {
            return t(!1, o)
        }) : t(!0, n)
    } catch (o) {
        t(!1, o)
    }
}

function Nt(e, t, n) {
    return n === void 0 && (n = 16), W(this, void 0, void 0, function() {
        var o, r, i, s;
        return F(this, function(a) {
            switch (a.label) {
                case 0:
                    o = Array(e.length), r = Date.now(), i = 0, a.label = 1;
                case 1:
                    return i < e.length ? (o[i] = t(e[i], i), s = Date.now(), s >= r + n ? (r = s, [4, ce(0)]) : [3, 3]) : [3, 4];
                case 2:
                    a.sent(), a.label = 3;
                case 3:
                    return ++i, [3, 1];
                case 4:
                    return [2, o]
            }
        })
    })
}

function De(e) {
    e.then(void 0, function() {})
}

function Cr(e, t) {
    for (var n = 0, o = e.length; n < o; ++n)
        if (e[n] === t) return !0;
    return !1
}

function Mr(e, t) {
    return !Cr(e, t)
}

function nt(e) {
    return parseInt(e)
}

function Y(e) {
    return parseFloat(e)
}

function q(e, t) {
    return typeof e == "number" && isNaN(e) ? t : e
}

function N(e) {
    return e.reduce(function(t, n) {
        return t + (n ? 1 : 0)
    }, 0)
}

function cn(e, t) {
    if (t === void 0 && (t = 1), Math.abs(t) >= 1) return Math.round(e / t) * t;
    var n = 1 / t;
    return Math.round(e * n) / n
}

function xr(e) {
    for (var t, n, o = "Unexpected syntax '".concat(e, "'"), r = /^\s*([a-z-]*)(.*)$/i.exec(e), i = r[1] || void 0, s = {}, a = /([.:#][\w-]+|\[.+?\])/gi, c = function(m, p) {
            s[m] = s[m] || [], s[m].push(p)
        };;) {
        var l = a.exec(r[2]);
        if (!l) break;
        var d = l[0];
        switch (d[0]) {
            case ".":
                c("class", d.slice(1));
                break;
            case "#":
                c("id", d.slice(1));
                break;
            case "[": {
                var u = /^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(d);
                if (u) c(u[1], (n = (t = u[4]) !== null && t !== void 0 ? t : u[5]) !== null && n !== void 0 ? n : "");
                else throw new Error(o);
                break
            }
            default:
                throw new Error(o)
        }
    }
    return [i, s]
}

function Tr(e) {
    for (var t = new Uint8Array(e.length), n = 0; n < e.length; n++) {
        var o = e.charCodeAt(n);
        if (o > 127) return new TextEncoder().encode(e);
        t[n] = o
    }
    return t
}

function ne(e, t) {
    var n = e[0] >>> 16,
        o = e[0] & 65535,
        r = e[1] >>> 16,
        i = e[1] & 65535,
        s = t[0] >>> 16,
        a = t[0] & 65535,
        c = t[1] >>> 16,
        l = t[1] & 65535,
        d = 0,
        u = 0,
        m = 0,
        p = 0;
    p += i + l, m += p >>> 16, p &= 65535, m += r + c, u += m >>> 16, m &= 65535, u += o + a, d += u >>> 16, u &= 65535, d += n + s, d &= 65535, e[0] = d << 16 | u, e[1] = m << 16 | p
}

function O(e, t) {
    var n = e[0] >>> 16,
        o = e[0] & 65535,
        r = e[1] >>> 16,
        i = e[1] & 65535,
        s = t[0] >>> 16,
        a = t[0] & 65535,
        c = t[1] >>> 16,
        l = t[1] & 65535,
        d = 0,
        u = 0,
        m = 0,
        p = 0;
    p += i * l, m += p >>> 16, p &= 65535, m += r * l, u += m >>> 16, m &= 65535, m += i * c, u += m >>> 16, m &= 65535, u += o * l, d += u >>> 16, u &= 65535, u += r * c, d += u >>> 16, u &= 65535, u += i * a, d += u >>> 16, u &= 65535, d += n * l + o * c + r * a + i * s, d &= 65535, e[0] = d << 16 | u, e[1] = m << 16 | p
}

function ue(e, t) {
    var n = e[0];
    t %= 64, t === 32 ? (e[0] = e[1], e[1] = n) : t < 32 ? (e[0] = n << t | e[1] >>> 32 - t, e[1] = e[1] << t | n >>> 32 - t) : (t -= 32, e[0] = e[1] << t | n >>> 32 - t, e[1] = n << t | e[1] >>> 32 - t)
}

function D(e, t) {
    t %= 64, t !== 0 && (t < 32 ? (e[0] = e[1] >>> 32 - t, e[1] = e[1] << t) : (e[0] = e[1] << t - 32, e[1] = 0))
}

function T(e, t) {
    e[0] ^= t[0], e[1] ^= t[1]
}
var Ar = [4283543511, 3981806797],
    Ir = [3301882366, 444984403];

function Gt(e) {
    var t = [0, e[0] >>> 1];
    T(e, t), O(e, Ar), t[1] = e[0] >>> 1, T(e, t), O(e, Ir), t[1] = e[0] >>> 1, T(e, t)
}
var Fe = [2277735313, 289559509],
    Re = [1291169091, 658871167],
    Dt = [0, 5],
    $r = [0, 1390208809],
    Er = [0, 944331445];

function Pr(e, t) {
    var n = Tr(e);
    t = t || 0;
    var o = [0, n.length],
        r = o[1] % 16,
        i = o[1] - r,
        s = [0, t],
        a = [0, t],
        c = [0, 0],
        l = [0, 0],
        d;
    for (d = 0; d < i; d = d + 16) c[0] = n[d + 4] | n[d + 5] << 8 | n[d + 6] << 16 | n[d + 7] << 24, c[1] = n[d] | n[d + 1] << 8 | n[d + 2] << 16 | n[d + 3] << 24, l[0] = n[d + 12] | n[d + 13] << 8 | n[d + 14] << 16 | n[d + 15] << 24, l[1] = n[d + 8] | n[d + 9] << 8 | n[d + 10] << 16 | n[d + 11] << 24, O(c, Fe), ue(c, 31), O(c, Re), T(s, c), ue(s, 27), ne(s, a), O(s, Dt), ne(s, $r), O(l, Re), ue(l, 33), O(l, Fe), T(a, l), ue(a, 31), ne(a, s), O(a, Dt), ne(a, Er);
    c[0] = 0, c[1] = 0, l[0] = 0, l[1] = 0;
    var u = [0, 0];
    switch (r) {
        case 15:
            u[1] = n[d + 14], D(u, 48), T(l, u);
        case 14:
            u[1] = n[d + 13], D(u, 40), T(l, u);
        case 13:
            u[1] = n[d + 12], D(u, 32), T(l, u);
        case 12:
            u[1] = n[d + 11], D(u, 24), T(l, u);
        case 11:
            u[1] = n[d + 10], D(u, 16), T(l, u);
        case 10:
            u[1] = n[d + 9], D(u, 8), T(l, u);
        case 9:
            u[1] = n[d + 8], T(l, u), O(l, Re), ue(l, 33), O(l, Fe), T(a, l);
        case 8:
            u[1] = n[d + 7], D(u, 56), T(c, u);
        case 7:
            u[1] = n[d + 6], D(u, 48), T(c, u);
        case 6:
            u[1] = n[d + 5], D(u, 40), T(c, u);
        case 5:
            u[1] = n[d + 4], D(u, 32), T(c, u);
        case 4:
            u[1] = n[d + 3], D(u, 24), T(c, u);
        case 3:
            u[1] = n[d + 2], D(u, 16), T(c, u);
        case 2:
            u[1] = n[d + 1], D(u, 8), T(c, u);
        case 1:
            u[1] = n[d], T(c, u), O(c, Fe), ue(c, 31), O(c, Re), T(s, c)
    }
    return T(s, o), T(a, o), ne(s, a), ne(a, s), Gt(s), Gt(a), ne(s, a), ne(a, s), ("00000000" + (s[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (s[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (a[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (a[1] >>> 0).toString(16)).slice(-8)
}

function Wr(e) {
    var t;
    return Ue({
        name: e.name,
        message: e.message,
        stack: (t = e.stack) === null || t === void 0 ? void 0 : t.split(`
`)
    }, e)
}

function Fr(e) {
    return /^function\s.*?\{\s*\[native code]\s*}$/.test(String(e))
}

function Rr(e) {
    return typeof e != "function"
}

function Vr(e, t) {
    var n = new Promise(function(o) {
        var r = Date.now();
        Ht(e.bind(null, t), function() {
            for (var i = [], s = 0; s < arguments.length; s++) i[s] = arguments[s];
            var a = Date.now() - r;
            if (!i[0]) return o(function() {
                return {
                    error: i[1],
                    duration: a
                }
            });
            var c = i[1];
            if (Rr(c)) return o(function() {
                return {
                    value: c,
                    duration: a
                }
            });
            o(function() {
                return new Promise(function(l) {
                    var d = Date.now();
                    Ht(c, function() {
                        for (var u = [], m = 0; m < arguments.length; m++) u[m] = arguments[m];
                        var p = a + Date.now() - d;
                        if (!u[0]) return l({
                            error: u[1],
                            duration: p
                        });
                        l({
                            value: u[1],
                            duration: p
                        })
                    })
                })
            })
        })
    });
    return De(n),
        function() {
            return n.then(function(r) {
                return r()
            })
        }
}

function Hr(e, t, n) {
    var o = Object.keys(e).filter(function(i) {
            return Mr(n, i)
        }),
        r = Nt(o, function(i) {
            return Vr(e[i], t)
        });
    return De(r),
        function() {
            return W(this, void 0, void 0, function() {
                var s, a, c, l, d;
                return F(this, function(u) {
                    switch (u.label) {
                        case 0:
                            return [4, r];
                        case 1:
                            return s = u.sent(), [4, Nt(s, function(m) {
                                var p = m();
                                return De(p), p
                            })];
                        case 2:
                            return a = u.sent(), [4, Promise.all(a)];
                        case 3:
                            for (c = u.sent(), l = {}, d = 0; d < o.length; ++d) l[o[d]] = c[d];
                            return [2, l]
                    }
                })
            })
        }
}

function ln() {
    var e = window,
        t = navigator;
    return N(["MSCSSMatrix" in e, "msSetImmediate" in e, "msIndexedDB" in e, "msMaxTouchPoints" in t, "msPointerEnabled" in t]) >= 4
}

function Nr() {
    var e = window,
        t = navigator;
    return N(["msWriteProfilerMark" in e, "MSStream" in e, "msLaunchUri" in t, "msSaveBlob" in t]) >= 3 && !ln()
}

function ot() {
    var e = window,
        t = navigator;
    return N(["webkitPersistentStorage" in t, "webkitTemporaryStorage" in t, t.vendor.indexOf("Google") === 0, "webkitResolveLocalFileSystemURL" in e, "BatteryManager" in e, "webkitMediaStream" in e, "webkitSpeechGrammar" in e]) >= 5
}

function ae() {
    var e = window,
        t = navigator;
    return N(["ApplePayError" in e, "CSSPrimitiveValue" in e, "Counter" in e, t.vendor.indexOf("Apple") === 0, "getStorageUpdates" in t, "WebKitMediaKeys" in e]) >= 4
}

function rt() {
    var e = window,
        t = e.HTMLElement,
        n = e.Document;
    return N(["safari" in e, !("ongestureend" in e), !("TouchEvent" in e), !("orientation" in e), t && !("autocapitalize" in t.prototype), n && "pointerLockElement" in n.prototype]) >= 4
}

function Ze() {
    var e = window;
    return Fr(e.print) ? N([String(e.browser) === "[object WebPageNamespace]", "MicrodataExtractor" in e]) >= 1 : !1
}

function un() {
    var e, t, n = window;
    return N(["buildID" in navigator, "MozAppearance" in ((t = (e = document.documentElement) === null || e === void 0 ? void 0 : e.style) !== null && t !== void 0 ? t : {}), "onmozfullscreenchange" in n, "mozInnerScreenX" in n, "CSSMozDocumentRule" in n, "CanvasCaptureMediaStream" in n]) >= 4
}

function Gr() {
    var e = window;
    return N([!("MediaSettingsRange" in e), "RTCEncodedAudioFrame" in e, "" + e.Intl == "[object Intl]", "" + e.Reflect == "[object Reflect]"]) >= 3
}

function Dr() {
    var e = window;
    return N(["DOMRectList" in e, "RTCPeerConnectionIceEvent" in e, "SVGGeometryElement" in e, "ontransitioncancel" in e]) >= 3
}

function Oe() {
    var e = window,
        t = navigator,
        n = e.CSS,
        o = e.HTMLButtonElement;
    return N([!("getStorageUpdates" in t), o && "popover" in o.prototype, "CSSCounterStyleRule" in e, n.supports("font-size-adjust: ex-height 0.5"), n.supports("text-transform: full-width")]) >= 4
}

function Zr() {
    if (navigator.platform === "iPad") return !0;
    var e = screen,
        t = e.width / e.height;
    return N(["MediaSource" in window, !!Element.prototype.webkitRequestFullscreen, t > .65 && t < 1.53]) >= 2
}

function Or() {
    var e = document;
    return e.fullscreenElement || e.msFullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement || null
}

function Br() {
    var e = document;
    return (e.exitFullscreen || e.msExitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen).call(e)
}

function dn() {
    var e = ot(),
        t = un(),
        n = window,
        o = navigator,
        r = "connection";
    return e ? N([!("SharedWorker" in n), o[r] && "ontypechange" in o[r], !("sinkId" in new window.Audio)]) >= 2 : t ? N(["onorientationchange" in n, "orientation" in n, /android/i.test(navigator.appVersion)]) >= 2 : !1
}

function fn(e, t, n) {
    var o, r, i;
    return n === void 0 && (n = 50), W(this, void 0, void 0, function() {
        var s, a;
        return F(this, function(c) {
            switch (c.label) {
                case 0:
                    s = document, c.label = 1;
                case 1:
                    return s.body ? [3, 3] : [4, ce(n)];
                case 2:
                    return c.sent(), [3, 1];
                case 3:
                    a = s.createElement("iframe"), c.label = 4;
                case 4:
                    return c.trys.push([4, , 10, 11]), [4, new Promise(function(l, d) {
                        var u = !1,
                            m = function() {
                                u = !0, l()
                            },
                            p = function(b) {
                                u = !0, d(b)
                            };
                        a.onload = m, a.onerror = p;
                        var g = a.style;
                        g.setProperty("display", "block", "important"), g.position = "absolute", g.top = "0", g.left = "0", g.visibility = "hidden", t && "srcdoc" in a ? a.srcdoc = t : a.src = "about:blank", s.body.appendChild(a);
                        var h = function() {
                            var b, y;
                            u || (((y = (b = a.contentWindow) === null || b === void 0 ? void 0 : b.document) === null || y === void 0 ? void 0 : y.readyState) === "complete" ? m() : setTimeout(h, 10))
                        };
                        h()
                    })];
                case 5:
                    c.sent(), c.label = 6;
                case 6:
                    return !((r = (o = a.contentWindow) === null || o === void 0 ? void 0 : o.document) === null || r === void 0) && r.body ? [3, 8] : [4, ce(n)];
                case 7:
                    return c.sent(), [3, 6];
                case 8:
                    return [4, e(a, a.contentWindow)];
                case 9:
                    return [2, c.sent()];
                case 10:
                    return (i = a.parentNode) === null || i === void 0 || i.removeChild(a), [7];
                case 11:
                    return [2]
            }
        })
    })
}

function Yr(e) {
    for (var t = xr(e), n = t[0], o = t[1], r = document.createElement(n ?? "div"), i = 0, s = Object.keys(o); i < s.length; i++) {
        var a = s[i],
            c = o[a].join(" ");
        a === "style" ? jr(r.style, c) : r.setAttribute(a, c)
    }
    return r
}

function jr(e, t) {
    for (var n = 0, o = t.split(";"); n < o.length; n++) {
        var r = o[n],
            i = /^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(r);
        if (i) {
            var s = i[1],
                a = i[2],
                c = i[4];
            e.setProperty(s, a, c || "")
        }
    }
}

function Xr() {
    return new Promise(function(e) {
        var t = document,
            n = "visibilitychange",
            o = function() {
                t.hidden || (t.removeEventListener(n, o), e())
            };
        t.addEventListener(n, o), o()
    })
}
var Ve = 44100,
    Ur = 4e4,
    zr = 6.2;

function Jr() {
    return W(this, void 0, void 0, function() {
        var e;
        return F(this, function(t) {
            switch (t.label) {
                case 0:
                    return [4, Kr()];
                case 1:
                    return e = t.sent(), [2, function() {
                        var n = e();
                        return oi(n, zr)
                    }]
            }
        })
    })
}

function Kr() {
    return W(this, void 0, void 0, function() {
        var e, t, n;
        return F(this, function(o) {
            switch (o.label) {
                case 0:
                    return t = Xr().then(function() {
                        return ce(500)
                    }), n = Qr().then(function(r) {
                        return e = [!0, r]
                    }, function(r) {
                        return e = [!1, r]
                    }), [4, Promise.race([t, n])];
                case 1:
                    return o.sent(), [2, function() {
                        if (!e) return -3;
                        if (!e[0]) throw e[1];
                        return e[1]
                    }]
            }
        })
    })
}

function Qr() {
    return W(this, void 0, void 0, function() {
        var e, t, n, o, r, i, s;
        return F(this, function(a) {
            switch (a.label) {
                case 0:
                    return e = window, t = e.OfflineAudioContext || e.webkitOfflineAudioContext, t ? qr() ? [2, -1] : [4, ei(t)] : [2, -2];
                case 1:
                    return n = a.sent(), n ? (o = new t(1, n.length - 1 + Ur, Ve), r = o.createBufferSource(), r.buffer = n, r.loop = !0, r.loopStart = (n.length - 1) / Ve, r.loopEnd = n.length / Ve, r.connect(o.destination), r.start(), [4, mn(o)]) : [2, -3];
                case 2:
                    return i = a.sent(), i ? (s = ti(n, i.getChannelData(0).subarray(n.length - 1)), [2, Math.abs(s)]) : [2, -3]
            }
        })
    })
}

function qr() {
    return ae() && !rt() && !Dr()
}

function ei(e) {
    return W(this, void 0, void 0, function() {
        var t, n, o, r, i;
        return F(this, function(s) {
            switch (s.label) {
                case 0:
                    return t = 3395, n = new e(1, t + 1, Ve), o = n.createOscillator(), o.type = "square", o.frequency.value = 1e3, r = n.createDynamicsCompressor(), r.threshold.value = -70, r.knee.value = 40, r.ratio.value = 12, r.attack.value = 0, r.release.value = .25, i = n.createBiquadFilter(), i.type = "allpass", i.frequency.value = 5.239622852977861, i.Q.value = .1, o.connect(r), r.connect(i), i.connect(n.destination), o.start(0), [4, mn(n)];
                case 1:
                    return [2, s.sent()]
            }
        })
    })
}

function mn(e) {
    return new Promise(function(t, n) {
        var o = 200,
            r = 25;
        e.oncomplete = function(s) {
            return t(s.renderedBuffer)
        };
        var i = function() {
            try {
                var s = e.startRendering();
                sn(s) && De(s), e.state === "suspended" && (document.hidden || r--, r > 0 ? setTimeout(i, o) : t(null))
            } catch (a) {
                n(a)
            }
        };
        i()
    })
}

function ti(e, t) {
    for (var n = void 0, o = !1, r = 0; r < t.length; r += Math.floor(t.length / 10))
        if (t[r] !== 0) {
            if (n === void 0) n = t[r];
            else if (n !== t[r]) {
                o = !0;
                break
            }
        } return n === void 0 ? n = e.getChannelData(0)[e.length - 1] : o && (n = ni(t)), n
}

function ni(e) {
    for (var t = 1 / 0, n = -1 / 0, o = 0; o < e.length; o++) {
        var r = e[o];
        r !== 0 && (r < t && (t = r), r > n && (n = r))
    }
    return (t + n) / 2
}

function oi(e, t) {
    if (e === 0) return e;
    var n = Math.floor(Math.log10(Math.abs(e))),
        o = n - Math.floor(t) + 1,
        r = Math.pow(10, -o) * (t * 10 % 10 || 1);
    return Math.round(e * r) / r
}
var ri = "mmMwWLliI0O&1",
    ii = "48px",
    de = ["monospace", "sans-serif", "serif"],
    Zt = ["sans-serif-thin", "ARNO PRO", "Agency FB", "Arabic Typesetting", "Arial Unicode MS", "AvantGarde Bk BT", "BankGothic Md BT", "Batang", "Bitstream Vera Sans Mono", "Calibri", "Century", "Century Gothic", "Clarendon", "EUROSTILE", "Franklin Gothic", "Futura Bk BT", "Futura Md BT", "GOTHAM", "Gill Sans", "HELV", "Haettenschweiler", "Helvetica Neue", "Humanst521 BT", "Leelawadee", "Letter Gothic", "Levenim MT", "Lucida Bright", "Lucida Sans", "Menlo", "MS Mincho", "MS Outlook", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MYRIAD PRO", "Marlett", "Meiryo UI", "Microsoft Uighur", "Minion Pro", "Monotype Corsiva", "PMingLiU", "Pristina", "SCRIPTINA", "Segoe UI Light", "Serifa", "SimHei", "Small Fonts", "Staccato222 BT", "TRAJAN PRO", "Univers CE 55 Medium", "Vrinda", "ZWAdobeF"];

function ai() {
    var e = this;
    return fn(function(t, n) {
        var o = n.document;
        return W(e, void 0, void 0, function() {
            var r, i, s, a, c, l, d, u, m, p, g, h;
            return F(this, function(b) {
                switch (b.label) {
                    case 0:
                        return r = o.body, r.style.fontSize = ii, i = o.createElement("div"), i.style.setProperty("visibility", "hidden", "important"), s = {}, a = {}, c = function(y) {
                            var x = o.createElement("span"),
                                C = x.style;
                            return C.position = "absolute", C.top = "0", C.left = "0", C.fontFamily = y, x.textContent = ri, i.appendChild(x), x
                        }, l = function(y, x) {
                            return c("'".concat(y, "',").concat(x))
                        }, d = function() {
                            return de.map(c)
                        }, u = function() {
                            for (var y = {}, x = function(V) {
                                    y[V] = de.map(function(H) {
                                        return l(V, H)
                                    })
                                }, C = 0, I = Zt; C < I.length; C++) {
                                var _ = I[C];
                                x(_)
                            }
                            return y
                        }, m = function(y) {
                            return de.some(function(x, C) {
                                return y[C].offsetWidth !== s[x] || y[C].offsetHeight !== a[x]
                            })
                        }, p = d(), g = u(), r.appendChild(i), [4, Ge()];
                    case 1:
                        for (b.sent(), h = 0; h < de.length; h++) s[de[h]] = p[h].offsetWidth, a[de[h]] = p[h].offsetHeight;
                        return [2, Zt.filter(function(y) {
                            return m(g[y])
                        })]
                }
            })
        })
    })
}

function si() {
    var e = navigator.plugins;
    if (e) {
        for (var t = [], n = 0; n < e.length; ++n) {
            var o = e[n];
            if (o) {
                for (var r = [], i = 0; i < o.length; ++i) {
                    var s = o[i];
                    r.push({
                        type: s.type,
                        suffixes: s.suffixes
                    })
                }
                t.push({
                    name: o.name,
                    description: o.description,
                    mimeTypes: r
                })
            }
        }
        return t
    }
}

function ci() {
    return li(hi())
}

function li(e) {
    return W(this, void 0, void 0, function() {
        var t, n, o, r, i, s, a;
        return F(this, function(c) {
            switch (c.label) {
                case 0:
                    return t = !1, r = ui(), i = r[0], s = r[1], di(i, s) ? [3, 1] : (n = o = "unsupported", [3, 4]);
                case 1:
                    return t = fi(s), e ? (n = o = "skipped", [3, 4]) : [3, 2];
                case 2:
                    return [4, mi(i, s)];
                case 3:
                    a = c.sent(), n = a[0], o = a[1], c.label = 4;
                case 4:
                    return [2, {
                        winding: t,
                        geometry: n,
                        text: o
                    }]
            }
        })
    })
}

function ui() {
    var e = document.createElement("canvas");
    return e.width = 1, e.height = 1, [e, e.getContext("2d")]
}

function di(e, t) {
    return !!(t && e.toDataURL)
}

function fi(e) {
    return e.rect(0, 0, 10, 10), e.rect(2, 2, 6, 6), !e.isPointInPath(5, 5, "evenodd")
}

function mi(e, t) {
    return W(this, void 0, void 0, function() {
        var n, o, r;
        return F(this, function(i) {
            switch (i.label) {
                case 0:
                    return pi(e, t), [4, Ge()];
                case 1:
                    return i.sent(), n = Be(e), o = Be(e), n !== o ? [2, ["unstable", "unstable"]] : (vi(e, t), [4, Ge()]);
                case 2:
                    return i.sent(), r = Be(e), [2, [n, r]]
            }
        })
    })
}

function pi(e, t) {
    e.width = 240, e.height = 60, t.textBaseline = "alphabetic", t.fillStyle = "#f60", t.fillRect(100, 1, 62, 20), t.fillStyle = "#069", t.font = '11pt "Times New Roman"';
    var n = "Cwm fjordbank gly ".concat("😃");
    t.fillText(n, 2, 15), t.fillStyle = "rgba(102, 204, 0, 0.2)", t.font = "18pt Arial", t.fillText(n, 4, 45)
}

function vi(e, t) {
    e.width = 122, e.height = 110, t.globalCompositeOperation = "multiply";
    for (var n = 0, o = [
            ["#f2f", 40, 40],
            ["#2ff", 80, 40],
            ["#ff2", 60, 80]
        ]; n < o.length; n++) {
        var r = o[n],
            i = r[0],
            s = r[1],
            a = r[2];
        t.fillStyle = i, t.beginPath(), t.arc(s, a, 40, 0, Math.PI * 2, !0), t.closePath(), t.fill()
    }
    t.fillStyle = "#f9c", t.arc(60, 60, 60, 0, Math.PI * 2, !0), t.arc(60, 60, 20, 0, Math.PI * 2, !0), t.fill("evenodd")
}

function Be(e) {
    return e.toDataURL()
}

function hi() {
    return ae() && Oe() && Ze()
}

function gi() {
    var e = navigator,
        t = 0,
        n;
    e.maxTouchPoints !== void 0 ? t = nt(e.maxTouchPoints) : e.msMaxTouchPoints !== void 0 && (t = e.msMaxTouchPoints);
    try {
        document.createEvent("TouchEvent"), n = !0
    } catch {
        n = !1
    }
    var o = "ontouchstart" in window;
    return {
        maxTouchPoints: t,
        touchEvent: n,
        touchStart: o
    }
}

function _i() {
    return navigator.oscpu
}

function bi() {
    var e = navigator,
        t = [],
        n = e.language || e.userLanguage || e.browserLanguage || e.systemLanguage;
    if (n !== void 0 && t.push([n]), Array.isArray(e.languages)) ot() && Gr() || t.push(e.languages);
    else if (typeof e.languages == "string") {
        var o = e.languages;
        o && t.push(o.split(","))
    }
    return t
}

function yi() {
    return window.screen.colorDepth
}

function wi() {
    return q(Y(navigator.deviceMemory), void 0)
}

function Si() {
    if (!(ae() && Oe() && Ze())) return Li()
}

function Li() {
    var e = screen,
        t = function(o) {
            return q(nt(o), null)
        },
        n = [t(e.width), t(e.height)];
    return n.sort().reverse(), n
}
var ki = 2500,
    Ci = 10,
    He, Ye;

function Mi() {
    if (Ye === void 0) {
        var e = function() {
            var t = ze();
            Je(t) ? Ye = setTimeout(e, ki) : (He = t, Ye = void 0)
        };
        e()
    }
}

function xi() {
    var e = this;
    return Mi(),
        function() {
            return W(e, void 0, void 0, function() {
                var t;
                return F(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return t = ze(), Je(t) ? He ? [2, rn([], He, !0)] : Or() ? [4, Br()] : [3, 2] : [3, 2];
                        case 1:
                            n.sent(), t = ze(), n.label = 2;
                        case 2:
                            return Je(t) || (He = t), [2, t]
                    }
                })
            })
        }
}

function Ti() {
    var e = this;
    if (ae() && Oe() && Ze()) return function() {
        return Promise.resolve(void 0)
    };
    var t = xi();
    return function() {
        return W(e, void 0, void 0, function() {
            var n, o;
            return F(this, function(r) {
                switch (r.label) {
                    case 0:
                        return [4, t()];
                    case 1:
                        return n = r.sent(), o = function(i) {
                            return i === null ? null : cn(i, Ci)
                        }, [2, [o(n[0]), o(n[1]), o(n[2]), o(n[3])]]
                }
            })
        })
    }
}

function ze() {
    var e = screen;
    return [q(Y(e.availTop), null), q(Y(e.width) - Y(e.availWidth) - q(Y(e.availLeft), 0), null), q(Y(e.height) - Y(e.availHeight) - q(Y(e.availTop), 0), null), q(Y(e.availLeft), null)]
}

function Je(e) {
    for (var t = 0; t < 4; ++t)
        if (e[t]) return !1;
    return !0
}

function Ai() {
    return q(nt(navigator.hardwareConcurrency), void 0)
}

function Ii() {
    var e, t = (e = window.Intl) === null || e === void 0 ? void 0 : e.DateTimeFormat;
    if (t) {
        var n = new t().resolvedOptions().timeZone;
        if (n) return n
    }
    var o = -$i();
    return "UTC".concat(o >= 0 ? "+" : "").concat(Math.abs(o))
}

function $i() {
    var e = new Date().getFullYear();
    return Math.max(Y(new Date(e, 0, 1).getTimezoneOffset()), Y(new Date(e, 6, 1).getTimezoneOffset()))
}

function Ei() {
    try {
        return !!window.sessionStorage
    } catch {
        return !0
    }
}

function Pi() {
    try {
        return !!window.localStorage
    } catch {
        return !0
    }
}

function Wi() {
    if (!(ln() || Nr())) try {
        return !!window.indexedDB
    } catch {
        return !0
    }
}

function Fi() {
    return !!window.openDatabase
}

function Ri() {
    return navigator.cpuClass
}

function Vi() {
    var e = navigator.platform;
    return e === "MacIntel" && ae() && !rt() ? Zr() ? "iPad" : "iPhone" : e
}

function Hi() {
    return navigator.vendor || ""
}

function Ni() {
    for (var e = [], t = 0, n = ["chrome", "safari", "__crWeb", "__gCrWeb", "yandex", "__yb", "__ybro", "__firefox__", "__edgeTrackingPreventionStatistics", "webkit", "oprt", "samsungAr", "ucweb", "UCShellJava", "puffinDevice"]; t < n.length; t++) {
        var o = n[t],
            r = window[o];
        r && typeof r == "object" && e.push(o)
    }
    return e.sort()
}

function Gi() {
    var e = document;
    try {
        e.cookie = "cookietest=1; SameSite=Strict;";
        var t = e.cookie.indexOf("cookietest=") !== -1;
        return e.cookie = "cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT", t
    } catch {
        return !1
    }
}

function Di() {
    var e = atob;
    return {
        abpIndo: ["#Iklan-Melayang", "#Kolom-Iklan-728", "#SidebarIklan-wrapper", '[title="ALIENBOLA" i]', e("I0JveC1CYW5uZXItYWRz")],
        abpvn: [".quangcao", "#mobileCatfish", e("LmNsb3NlLWFkcw=="), '[id^="bn_bottom_fixed_"]', "#pmadv"],
        adBlockFinland: [".mainostila", e("LnNwb25zb3JpdA=="), ".ylamainos", e("YVtocmVmKj0iL2NsaWNrdGhyZ2guYXNwPyJd"), e("YVtocmVmXj0iaHR0cHM6Ly9hcHAucmVhZHBlYWsuY29tL2FkcyJd")],
        adBlockPersian: ["#navbar_notice_50", ".kadr", 'TABLE[width="140px"]', "#divAgahi", e("YVtocmVmXj0iaHR0cDovL2cxLnYuZndtcm0ubmV0L2FkLyJd")],
        adBlockWarningRemoval: ["#adblock-honeypot", ".adblocker-root", ".wp_adblock_detect", e("LmhlYWRlci1ibG9ja2VkLWFk"), e("I2FkX2Jsb2NrZXI=")],
        adGuardAnnoyances: [".hs-sosyal", "#cookieconsentdiv", 'div[class^="app_gdpr"]', ".as-oil", '[data-cypress="soft-push-notification-modal"]'],
        adGuardBase: [".BetterJsPopOverlay", e("I2FkXzMwMFgyNTA="), e("I2Jhbm5lcmZsb2F0MjI="), e("I2NhbXBhaWduLWJhbm5lcg=="), e("I0FkLUNvbnRlbnQ=")],
        adGuardChinese: [e("LlppX2FkX2FfSA=="), e("YVtocmVmKj0iLmh0aGJldDM0LmNvbSJd"), "#widget-quan", e("YVtocmVmKj0iLzg0OTkyMDIwLnh5eiJd"), e("YVtocmVmKj0iLjE5NTZobC5jb20vIl0=")],
        adGuardFrench: ["#pavePub", e("LmFkLWRlc2t0b3AtcmVjdGFuZ2xl"), ".mobile_adhesion", ".widgetadv", e("LmFkc19iYW4=")],
        adGuardGerman: ['aside[data-portal-id="leaderboard"]'],
        adGuardJapanese: ["#kauli_yad_1", e("YVtocmVmXj0iaHR0cDovL2FkMi50cmFmZmljZ2F0ZS5uZXQvIl0="), e("Ll9wb3BJbl9pbmZpbml0ZV9hZA=="), e("LmFkZ29vZ2xl"), e("Ll9faXNib29zdFJldHVybkFk")],
        adGuardMobile: [e("YW1wLWF1dG8tYWRz"), e("LmFtcF9hZA=="), 'amp-embed[type="24smi"]', "#mgid_iframe1", e("I2FkX2ludmlld19hcmVh")],
        adGuardRussian: [e("YVtocmVmXj0iaHR0cHM6Ly9hZC5sZXRtZWFkcy5jb20vIl0="), e("LnJlY2xhbWE="), 'div[id^="smi2adblock"]', e("ZGl2W2lkXj0iQWRGb3hfYmFubmVyXyJd"), "#psyduckpockeball"],
        adGuardSocial: [e("YVtocmVmXj0iLy93d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD91cmw9Il0="), e("YVtocmVmXj0iLy90ZWxlZ3JhbS5tZS9zaGFyZS91cmw/Il0="), ".etsy-tweet", "#inlineShare", ".popup-social"],
        adGuardSpanishPortuguese: ["#barraPublicidade", "#Publicidade", "#publiEspecial", "#queTooltip", ".cnt-publi"],
        adGuardTrackingProtection: ["#qoo-counter", e("YVtocmVmXj0iaHR0cDovL2NsaWNrLmhvdGxvZy5ydS8iXQ=="), e("YVtocmVmXj0iaHR0cDovL2hpdGNvdW50ZXIucnUvdG9wL3N0YXQucGhwIl0="), e("YVtocmVmXj0iaHR0cDovL3RvcC5tYWlsLnJ1L2p1bXAiXQ=="), "#top100counter"],
        adGuardTurkish: ["#backkapat", e("I3Jla2xhbWk="), e("YVtocmVmXj0iaHR0cDovL2Fkc2Vydi5vbnRlay5jb20udHIvIl0="), e("YVtocmVmXj0iaHR0cDovL2l6bGVuemkuY29tL2NhbXBhaWduLyJd"), e("YVtocmVmXj0iaHR0cDovL3d3dy5pbnN0YWxsYWRzLm5ldC8iXQ==")],
        bulgarian: [e("dGQjZnJlZW5ldF90YWJsZV9hZHM="), "#ea_intext_div", ".lapni-pop-over", "#xenium_hot_offers"],
        easyList: [".yb-floorad", e("LndpZGdldF9wb19hZHNfd2lkZ2V0"), e("LnRyYWZmaWNqdW5reS1hZA=="), ".textad_headline", e("LnNwb25zb3JlZC10ZXh0LWxpbmtz")],
        easyListChina: [e("LmFwcGd1aWRlLXdyYXBbb25jbGljayo9ImJjZWJvcy5jb20iXQ=="), e("LmZyb250cGFnZUFkdk0="), "#taotaole", "#aafoot.top_box", ".cfa_popup"],
        easyListCookie: [".ezmob-footer", ".cc-CookieWarning", "[data-cookie-number]", e("LmF3LWNvb2tpZS1iYW5uZXI="), ".sygnal24-gdpr-modal-wrap"],
        easyListCzechSlovak: ["#onlajny-stickers", e("I3Jla2xhbW5pLWJveA=="), e("LnJla2xhbWEtbWVnYWJvYXJk"), ".sklik", e("W2lkXj0ic2tsaWtSZWtsYW1hIl0=")],
        easyListDutch: [e("I2FkdmVydGVudGll"), e("I3ZpcEFkbWFya3RCYW5uZXJCbG9jaw=="), ".adstekst", e("YVtocmVmXj0iaHR0cHM6Ly94bHR1YmUubmwvY2xpY2svIl0="), "#semilo-lrectangle"],
        easyListGermany: ["#SSpotIMPopSlider", e("LnNwb25zb3JsaW5rZ3J1ZW4="), e("I3dlcmJ1bmdza3k="), e("I3Jla2xhbWUtcmVjaHRzLW1pdHRl"), e("YVtocmVmXj0iaHR0cHM6Ly9iZDc0Mi5jb20vIl0=")],
        easyListItaly: [e("LmJveF9hZHZfYW5udW5jaQ=="), ".sb-box-pubbliredazionale", e("YVtocmVmXj0iaHR0cDovL2FmZmlsaWF6aW9uaWFkcy5zbmFpLml0LyJd"), e("YVtocmVmXj0iaHR0cHM6Ly9hZHNlcnZlci5odG1sLml0LyJd"), e("YVtocmVmXj0iaHR0cHM6Ly9hZmZpbGlhemlvbmlhZHMuc25haS5pdC8iXQ==")],
        easyListLithuania: [e("LnJla2xhbW9zX3RhcnBhcw=="), e("LnJla2xhbW9zX251b3JvZG9z"), e("aW1nW2FsdD0iUmVrbGFtaW5pcyBza3lkZWxpcyJd"), e("aW1nW2FsdD0iRGVkaWt1b3RpLmx0IHNlcnZlcmlhaSJd"), e("aW1nW2FsdD0iSG9zdGluZ2FzIFNlcnZlcmlhaS5sdCJd")],
        estonian: [e("QVtocmVmKj0iaHR0cDovL3BheTRyZXN1bHRzMjQuZXUiXQ==")],
        fanboyAnnoyances: ["#ac-lre-player", ".navigate-to-top", "#subscribe_popup", ".newsletter_holder", "#back-top"],
        fanboyAntiFacebook: [".util-bar-module-firefly-visible"],
        fanboyEnhancedTrackers: [".open.pushModal", "#issuem-leaky-paywall-articles-zero-remaining-nag", "#sovrn_container", 'div[class$="-hide"][zoompage-fontsize][style="display: block;"]', ".BlockNag__Card"],
        fanboySocial: ["#FollowUs", "#meteored_share", "#social_follow", ".article-sharer", ".community__social-desc"],
        frellwitSwedish: [e("YVtocmVmKj0iY2FzaW5vcHJvLnNlIl1bdGFyZ2V0PSJfYmxhbmsiXQ=="), e("YVtocmVmKj0iZG9rdG9yLXNlLm9uZWxpbmsubWUiXQ=="), "article.category-samarbete", e("ZGl2LmhvbGlkQWRz"), "ul.adsmodern"],
        greekAdBlock: [e("QVtocmVmKj0iYWRtYW4ub3RlbmV0LmdyL2NsaWNrPyJd"), e("QVtocmVmKj0iaHR0cDovL2F4aWFiYW5uZXJzLmV4b2R1cy5nci8iXQ=="), e("QVtocmVmKj0iaHR0cDovL2ludGVyYWN0aXZlLmZvcnRobmV0LmdyL2NsaWNrPyJd"), "DIV.agores300", "TABLE.advright"],
        hungarian: ["#cemp_doboz", ".optimonk-iframe-container", e("LmFkX19tYWlu"), e("W2NsYXNzKj0iR29vZ2xlQWRzIl0="), "#hirdetesek_box"],
        iDontCareAboutCookies: ['.alert-info[data-block-track*="CookieNotice"]', ".ModuleTemplateCookieIndicator", ".o--cookies--container", "#cookies-policy-sticky", "#stickyCookieBar"],
        icelandicAbp: [e("QVtocmVmXj0iL2ZyYW1ld29yay9yZXNvdXJjZXMvZm9ybXMvYWRzLmFzcHgiXQ==")],
        latvian: [e("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMjBweDsgaGVpZ2h0OiA0MHB4OyBvdmVyZmxvdzogaGlkZGVuOyBwb3NpdGlvbjogcmVsYXRpdmU7Il0="), e("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiA4OHB4OyBoZWlnaHQ6IDMxcHg7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsiXQ==")],
        listKr: [e("YVtocmVmKj0iLy9hZC5wbGFuYnBsdXMuY28ua3IvIl0="), e("I2xpdmVyZUFkV3JhcHBlcg=="), e("YVtocmVmKj0iLy9hZHYuaW1hZHJlcC5jby5rci8iXQ=="), e("aW5zLmZhc3R2aWV3LWFk"), ".revenue_unit_item.dable"],
        listeAr: [e("LmdlbWluaUxCMUFk"), ".right-and-left-sponsers", e("YVtocmVmKj0iLmFmbGFtLmluZm8iXQ=="), e("YVtocmVmKj0iYm9vcmFxLm9yZyJd"), e("YVtocmVmKj0iZHViaXp6bGUuY29tL2FyLz91dG1fc291cmNlPSJd")],
        listeFr: [e("YVtocmVmXj0iaHR0cDovL3Byb21vLnZhZG9yLmNvbS8iXQ=="), e("I2FkY29udGFpbmVyX3JlY2hlcmNoZQ=="), e("YVtocmVmKj0id2Vib3JhbWEuZnIvZmNnaS1iaW4vIl0="), ".site-pub-interstitiel", 'div[id^="crt-"][data-criteo-id]'],
        officialPolish: ["#ceneo-placeholder-ceneo-12", e("W2hyZWZePSJodHRwczovL2FmZi5zZW5kaHViLnBsLyJd"), e("YVtocmVmXj0iaHR0cDovL2Fkdm1hbmFnZXIudGVjaGZ1bi5wbC9yZWRpcmVjdC8iXQ=="), e("YVtocmVmXj0iaHR0cDovL3d3dy50cml6ZXIucGwvP3V0bV9zb3VyY2UiXQ=="), e("ZGl2I3NrYXBpZWNfYWQ=")],
        ro: [e("YVtocmVmXj0iLy9hZmZ0cmsuYWx0ZXgucm8vQ291bnRlci9DbGljayJd"), e("YVtocmVmXj0iaHR0cHM6Ly9ibGFja2ZyaWRheXNhbGVzLnJvL3Ryay9zaG9wLyJd"), e("YVtocmVmXj0iaHR0cHM6Ly9ldmVudC4ycGVyZm9ybWFudC5jb20vZXZlbnRzL2NsaWNrIl0="), e("YVtocmVmXj0iaHR0cHM6Ly9sLnByb2ZpdHNoYXJlLnJvLyJd"), 'a[href^="/url/"]'],
        ruAd: [e("YVtocmVmKj0iLy9mZWJyYXJlLnJ1LyJd"), e("YVtocmVmKj0iLy91dGltZy5ydS8iXQ=="), e("YVtocmVmKj0iOi8vY2hpa2lkaWtpLnJ1Il0="), "#pgeldiz", ".yandex-rtb-block"],
        thaiAds: ["a[href*=macau-uta-popup]", e("I2Fkcy1nb29nbGUtbWlkZGxlX3JlY3RhbmdsZS1ncm91cA=="), e("LmFkczMwMHM="), ".bumq", ".img-kosana"],
        webAnnoyancesUltralist: ["#mod-social-share-2", "#social-tools", e("LmN0cGwtZnVsbGJhbm5lcg=="), ".zergnet-recommend", ".yt.btn-link.btn-md.btn"]
    }
}

function Zi(e) {
    var t = e === void 0 ? {} : e,
        n = t.debug;
    return W(this, void 0, void 0, function() {
        var o, r, i, s, a, c;
        return F(this, function(l) {
            switch (l.label) {
                case 0:
                    return Oi() ? (o = Di(), r = Object.keys(o), i = (c = []).concat.apply(c, r.map(function(d) {
                        return o[d]
                    })), [4, Bi(i)]) : [2, void 0];
                case 1:
                    return s = l.sent(), n && Yi(o, s), a = r.filter(function(d) {
                        var u = o[d],
                            m = N(u.map(function(p) {
                                return s[p]
                            }));
                        return m > u.length * .6
                    }), a.sort(), [2, a]
            }
        })
    })
}

function Oi() {
    return ae() || dn()
}

function Bi(e) {
    var t;
    return W(this, void 0, void 0, function() {
        var n, o, r, i, c, s, a, c;
        return F(this, function(l) {
            switch (l.label) {
                case 0:
                    for (n = document, o = n.createElement("div"), r = new Array(e.length), i = {}, Ot(o), c = 0; c < e.length; ++c) s = Yr(e[c]), s.tagName === "DIALOG" && s.show(), a = n.createElement("div"), Ot(a), a.appendChild(s), o.appendChild(a), r[c] = s;
                    l.label = 1;
                case 1:
                    return n.body ? [3, 3] : [4, ce(50)];
                case 2:
                    return l.sent(), [3, 1];
                case 3:
                    return n.body.appendChild(o), [4, Ge()];
                case 4:
                    l.sent();
                    try {
                        for (c = 0; c < e.length; ++c) r[c].offsetParent || (i[e[c]] = !0)
                    } finally {
                        (t = o.parentNode) === null || t === void 0 || t.removeChild(o)
                    }
                    return [2, i]
            }
        })
    })
}

function Ot(e) {
    e.style.setProperty("visibility", "hidden", "important"), e.style.setProperty("display", "block", "important")
}

function Yi(e, t) {
    for (var n = "DOM blockers debug:\n```", o = 0, r = Object.keys(e); o < r.length; o++) {
        var i = r[o];
        n += `
`.concat(i, ":");
        for (var s = 0, a = e[i]; s < a.length; s++) {
            var c = a[s];
            n += `
  `.concat(t[c] ? "🚫" : "➡️", " ").concat(c)
        }
    }
    console.log("".concat(n, "\n```"))
}

function ji() {
    for (var e = 0, t = ["rec2020", "p3", "srgb"]; e < t.length; e++) {
        var n = t[e];
        if (matchMedia("(color-gamut: ".concat(n, ")")).matches) return n
    }
}

function Xi() {
    if (Bt("inverted")) return !0;
    if (Bt("none")) return !1
}

function Bt(e) {
    return matchMedia("(inverted-colors: ".concat(e, ")")).matches
}

function Ui() {
    if (Yt("active")) return !0;
    if (Yt("none")) return !1
}

function Yt(e) {
    return matchMedia("(forced-colors: ".concat(e, ")")).matches
}
var zi = 100;

function Ji() {
    if (matchMedia("(min-monochrome: 0)").matches) {
        for (var e = 0; e <= zi; ++e)
            if (matchMedia("(max-monochrome: ".concat(e, ")")).matches) return e;
        throw new Error("Too high value")
    }
}

function Ki() {
    if (fe("no-preference")) return 0;
    if (fe("high") || fe("more")) return 1;
    if (fe("low") || fe("less")) return -1;
    if (fe("forced")) return 10
}

function fe(e) {
    return matchMedia("(prefers-contrast: ".concat(e, ")")).matches
}

function Qi() {
    if (jt("reduce")) return !0;
    if (jt("no-preference")) return !1
}

function jt(e) {
    return matchMedia("(prefers-reduced-motion: ".concat(e, ")")).matches
}

function qi() {
    if (Xt("reduce")) return !0;
    if (Xt("no-preference")) return !1
}

function Xt(e) {
    return matchMedia("(prefers-reduced-transparency: ".concat(e, ")")).matches
}

function ea() {
    if (Ut("high")) return !0;
    if (Ut("standard")) return !1
}

function Ut(e) {
    return matchMedia("(dynamic-range: ".concat(e, ")")).matches
}
var M = Math,
    R = function() {
        return 0
    };

function ta() {
    var e = M.acos || R,
        t = M.acosh || R,
        n = M.asin || R,
        o = M.asinh || R,
        r = M.atanh || R,
        i = M.atan || R,
        s = M.sin || R,
        a = M.sinh || R,
        c = M.cos || R,
        l = M.cosh || R,
        d = M.tan || R,
        u = M.tanh || R,
        m = M.exp || R,
        p = M.expm1 || R,
        g = M.log1p || R,
        h = function(w) {
            return M.pow(M.PI, w)
        },
        b = function(w) {
            return M.log(w + M.sqrt(w * w - 1))
        },
        y = function(w) {
            return M.log(w + M.sqrt(w * w + 1))
        },
        x = function(w) {
            return M.log((1 + w) / (1 - w)) / 2
        },
        C = function(w) {
            return M.exp(w) - 1 / M.exp(w) / 2
        },
        I = function(w) {
            return (M.exp(w) + 1 / M.exp(w)) / 2
        },
        _ = function(w) {
            return M.exp(w) - 1
        },
        V = function(w) {
            return (M.exp(2 * w) - 1) / (M.exp(2 * w) + 1)
        },
        H = function(w) {
            return M.log(1 + w)
        };
    return {
        acos: e(.12312423423423424),
        acosh: t(1e308),
        acoshPf: b(1e154),
        asin: n(.12312423423423424),
        asinh: o(1),
        asinhPf: y(1),
        atanh: r(.5),
        atanhPf: x(.5),
        atan: i(.5),
        sin: s(-1e300),
        sinh: a(1),
        sinhPf: C(1),
        cos: c(10.000000000123),
        cosh: l(1),
        coshPf: I(1),
        tan: d(-1e300),
        tanh: u(1),
        tanhPf: V(1),
        exp: m(1),
        expm1: p(1),
        expm1Pf: _(1),
        log1p: g(10),
        log1pPf: H(10),
        powPI: h(-100)
    }
}
var na = "mmMwWLliI0fiflO&1",
    je = {
        default: [],
        apple: [{
            font: "-apple-system-body"
        }],
        serif: [{
            fontFamily: "serif"
        }],
        sans: [{
            fontFamily: "sans-serif"
        }],
        mono: [{
            fontFamily: "monospace"
        }],
        min: [{
            fontSize: "1px"
        }],
        system: [{
            fontFamily: "system-ui"
        }]
    };

function oa() {
    return ra(function(e, t) {
        for (var n = {}, o = {}, r = 0, i = Object.keys(je); r < i.length; r++) {
            var s = i[r],
                a = je[s],
                c = a[0],
                l = c === void 0 ? {} : c,
                d = a[1],
                u = d === void 0 ? na : d,
                m = e.createElement("span");
            m.textContent = u, m.style.whiteSpace = "nowrap";
            for (var p = 0, g = Object.keys(l); p < g.length; p++) {
                var h = g[p],
                    b = l[h];
                b !== void 0 && (m.style[h] = b)
            }
            n[s] = m, t.append(e.createElement("br"), m)
        }
        for (var y = 0, x = Object.keys(je); y < x.length; y++) {
            var s = x[y];
            o[s] = n[s].getBoundingClientRect().width
        }
        return o
    })
}

function ra(e, t) {
    return t === void 0 && (t = 4e3), fn(function(n, o) {
        var r = o.document,
            i = r.body,
            s = i.style;
        s.width = "".concat(t, "px"), s.webkitTextSizeAdjust = s.textSizeAdjust = "none", ot() ? i.style.zoom = "".concat(1 / o.devicePixelRatio) : ae() && (i.style.zoom = "reset");
        var a = r.createElement("div");
        return a.textContent = rn([], Array(t / 20 << 0), !0).map(function() {
            return "word"
        }).join(" "), i.appendChild(a), e(r, i)
    }, '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">')
}

function ia() {
    return navigator.pdfViewerEnabled
}

function aa() {
    var e = new Float32Array(1),
        t = new Uint8Array(e.buffer);
    return e[0] = 1 / 0, e[0] = e[0] - e[0], t[3]
}

function sa() {
    var e = window.ApplePaySession;
    if (typeof(e == null ? void 0 : e.canMakePayments) != "function") return -1;
    try {
        return e.canMakePayments() ? 1 : 0
    } catch (t) {
        return ca(t)
    }
}

function ca(e) {
    if (e instanceof Error) {
        if (e.name === "InvalidAccessError") {
            if (/\bfrom\b.*\binsecure\b/i.test(e.message)) return -2;
            if (/\bdifferent\b.*\borigin\b.*top.level\b.*\bframe\b/i.test(e.message)) return -3
        }
        if (e.name === "SecurityError" && /\bthird.party iframes?.*\bnot.allowed\b/i.test(e.message)) return -3
    }
    throw e
}

function la() {
    var e, t = document.createElement("a"),
        n = (e = t.attributionSourceId) !== null && e !== void 0 ? e : t.attributionsourceid;
    return n === void 0 ? void 0 : String(n)
}
var pn = -1,
    vn = -2,
    ua = new Set([10752, 2849, 2884, 2885, 2886, 2928, 2929, 2930, 2931, 2932, 2960, 2961, 2962, 2963, 2964, 2965, 2966, 2967, 2968, 2978, 3024, 3042, 3088, 3089, 3106, 3107, 32773, 32777, 32777, 32823, 32824, 32936, 32937, 32938, 32939, 32968, 32969, 32970, 32971, 3317, 33170, 3333, 3379, 3386, 33901, 33902, 34016, 34024, 34076, 3408, 3410, 3411, 3412, 3413, 3414, 3415, 34467, 34816, 34817, 34818, 34819, 34877, 34921, 34930, 35660, 35661, 35724, 35738, 35739, 36003, 36004, 36005, 36347, 36348, 36349, 37440, 37441, 37443, 7936, 7937, 7938]),
    da = new Set([34047, 35723, 36063, 34852, 34853, 34854, 34229, 36392, 36795, 38449]),
    fa = ["FRAGMENT_SHADER", "VERTEX_SHADER"],
    ma = ["LOW_FLOAT", "MEDIUM_FLOAT", "HIGH_FLOAT", "LOW_INT", "MEDIUM_INT", "HIGH_INT"],
    hn = "WEBGL_debug_renderer_info",
    pa = "WEBGL_polygon_mode";

function va(e) {
    var t, n, o, r, i, s, a = e.cache,
        c = gn(a);
    if (!c) return pn;
    if (!bn(c)) return vn;
    var l = _n() ? null : c.getExtension(hn);
    return {
        version: ((t = c.getParameter(c.VERSION)) === null || t === void 0 ? void 0 : t.toString()) || "",
        vendor: ((n = c.getParameter(c.VENDOR)) === null || n === void 0 ? void 0 : n.toString()) || "",
        vendorUnmasked: l ? (o = c.getParameter(l.UNMASKED_VENDOR_WEBGL)) === null || o === void 0 ? void 0 : o.toString() : "",
        renderer: ((r = c.getParameter(c.RENDERER)) === null || r === void 0 ? void 0 : r.toString()) || "",
        rendererUnmasked: l ? (i = c.getParameter(l.UNMASKED_RENDERER_WEBGL)) === null || i === void 0 ? void 0 : i.toString() : "",
        shadingLanguageVersion: ((s = c.getParameter(c.SHADING_LANGUAGE_VERSION)) === null || s === void 0 ? void 0 : s.toString()) || ""
    }
}

function ha(e) {
    var t = e.cache,
        n = gn(t);
    if (!n) return pn;
    if (!bn(n)) return vn;
    var o = n.getSupportedExtensions(),
        r = n.getContextAttributes(),
        i = [],
        s = [],
        a = [],
        c = [];
    if (r)
        for (var l = 0, d = Object.keys(r); l < d.length; l++) {
            var u = d[l];
            i.push("".concat(u, "=").concat(r[u]))
        }
    for (var m = Xe(n), p = 0, g = m; p < g.length; p++) {
        var h = g[p],
            b = n[h];
        s.push("".concat(h, "=").concat(b).concat(ua.has(b) ? "=".concat(n.getParameter(b)) : ""))
    }
    if (o)
        for (var y = 0, x = o; y < x.length; y++) {
            var C = x[y];
            if (!(C === pa || C === hn && _n())) {
                var I = n.getExtension(C);
                if (I) {
                    C === "WEBGL_polygon_mode" && console.log(Xe(I));
                    for (var _ = 0, V = Xe(I); _ < V.length; _++) {
                        var h = V[_],
                            b = I[h];
                        a.push("".concat(h, "=").concat(b).concat(da.has(b) ? "=".concat(n.getParameter(b)) : ""))
                    }
                }
            }
        }
    for (var H = 0, w = fa; H < w.length; H++)
        for (var ee = w[H], J = 0, he = ma; J < he.length; J++) {
            var ge = he[J],
                we = ga(n, ee, ge);
            c.push("".concat(ee, ".").concat(ge, "=").concat(we.join(",")))
        }
    return a.sort(), s.sort(), {
        contextAttributes: i,
        parameters: s,
        shaderPrecisions: c,
        extensions: o,
        extensionParameters: a
    }
}

function gn(e) {
    if (e.webgl) return e.webgl.context;
    var t = document.createElement("canvas"),
        n;
    t.addEventListener("webglCreateContextError", function() {
        return n = void 0
    });
    for (var o = 0, r = ["webgl", "experimental-webgl"]; o < r.length; o++) {
        var i = r[o];
        try {
            n = t.getContext(i)
        } catch {}
        if (n) break
    }
    return e.webgl = {
        context: n
    }, n
}

function ga(e, t, n) {
    var o = e.getShaderPrecisionFormat(e[t], e[n]);
    return o ? [o.rangeMin, o.rangeMax, o.precision] : []
}

function Xe(e) {
    var t = Object.keys(e.__proto__);
    return t.filter(_a)
}

function _a(e) {
    return typeof e == "string" && !e.match(/[^A-Z0-9_x]/)
}

function _n() {
    return un()
}

function bn(e) {
    return typeof e.getParameter == "function"
}
var ba = {
    fonts: ai,
    domBlockers: Zi,
    fontPreferences: oa,
    audio: Jr,
    screenFrame: Ti,
    canvas: ci,
    osCpu: _i,
    languages: bi,
    colorDepth: yi,
    deviceMemory: wi,
    screenResolution: Si,
    hardwareConcurrency: Ai,
    timezone: Ii,
    sessionStorage: Ei,
    localStorage: Pi,
    indexedDB: Wi,
    openDatabase: Fi,
    cpuClass: Ri,
    platform: Vi,
    plugins: si,
    touchSupport: gi,
    vendor: Hi,
    vendorFlavors: Ni,
    cookiesEnabled: Gi,
    colorGamut: ji,
    invertedColors: Xi,
    forcedColors: Ui,
    monochrome: Ji,
    contrast: Ki,
    reducedMotion: Qi,
    reducedTransparency: qi,
    hdr: ea,
    math: ta,
    pdfViewerEnabled: ia,
    architecture: aa,
    applePay: sa,
    privateClickMeasurement: la,
    webGlBasics: va,
    webGlExtensions: ha
};

function ya(e) {
    return Hr(ba, e, [])
}
var wa = "$ if upgrade to Pro: https://fpjs.dev/pro";

function Sa(e) {
    var t = La(e),
        n = ka(t);
    return {
        score: t,
        comment: wa.replace(/\$/g, "".concat(n))
    }
}

function La(e) {
    if (dn()) return .4;
    if (ae()) return rt() && !(Oe() && Ze()) ? .5 : .3;
    var t = "value" in e.platform ? e.platform.value : "";
    return /^Win/.test(t) ? .6 : /^Mac/.test(t) ? .5 : .7
}

function ka(e) {
    return cn(.99 + .01 * e, 1e-4)
}

function Ca(e) {
    for (var t = "", n = 0, o = Object.keys(e).sort(); n < o.length; n++) {
        var r = o[n],
            i = e[r],
            s = "error" in i ? "error" : JSON.stringify(i.value);
        t += "".concat(t ? "|" : "").concat(r.replace(/([:|\\])/g, "\\$1"), ":").concat(s)
    }
    return t
}

function yn(e) {
    return JSON.stringify(e, function(t, n) {
        return n instanceof Error ? Wr(n) : n
    }, 2)
}

function wn(e) {
    return Pr(Ca(e))
}

function Ma(e) {
    var t, n = Sa(e);
    return {
        get visitorId() {
            return t === void 0 && (t = wn(this.components)), t
        },
        set visitorId(o) {
            t = o
        },
        confidence: n,
        components: e,
        version: an
    }
}

function xa(e) {
    return e === void 0 && (e = 50), kr(e, e * 2)
}

function Ta(e, t) {
    var n = Date.now();
    return {
        get: function(o) {
            return W(this, void 0, void 0, function() {
                var r, i, s;
                return F(this, function(a) {
                    switch (a.label) {
                        case 0:
                            return r = Date.now(), [4, e()];
                        case 1:
                            return i = a.sent(), s = Ma(i), (t || o != null && o.debug) && console.log("Copy the text below to get the debug data:\n\n```\nversion: ".concat(s.version, `
userAgent: `).concat(navigator.userAgent, `
timeBetweenLoadAndGet: `).concat(r - n, `
visitorId: `).concat(s.visitorId, `
components: `).concat(yn(i), "\n```")), [2, s]
                    }
                })
            })
        }
    }
}

function Aa() {
    if (!(window.__fpjs_d_m || Math.random() >= .001)) try {
        var e = new XMLHttpRequest;
        e.open("get", "https://m1.openfpcdn.io/fingerprintjs/v".concat(an, "/npm-monitoring"), !0), e.send()
    } catch (t) {
        console.error(t)
    }
}

function Ia(e) {
    var t;
    return e === void 0 && (e = {}), W(this, void 0, void 0, function() {
        var n, o, r;
        return F(this, function(i) {
            switch (i.label) {
                case 0:
                    return (!((t = e.monitoring) !== null && t !== void 0) || t) && Aa(), n = e.delayFallback, o = e.debug, [4, xa(n)];
                case 1:
                    return i.sent(), r = ya({
                        cache: {},
                        debug: o
                    }), [2, Ta(r, o)]
            }
        })
    })
}
var $a = {
    load: Ia,
    hashComponents: wn,
    componentsToDebugString: yn
};
const Ea = {
        class: "bs-content"
    },
    Pa = {
        class: "bs-content-image"
    },
    Wa = ["src"],
    Fa = ["innerHTML"],
    Ra = {
        class: "upgrade-buy-stats"
    },
    Va = ["innerHTML"],
    Ha = {
        class: "upgrade-buy-stats-info"
    },
    Na = ["innerHTML"],
    Ga = {
        class: "upgrade-buy-stats-info"
    },
    Da = ["innerHTML"],
    Za = Z({
        __name: "LevelUp",
        setup(e) {
            const {
                $event: t
            } = S();
            le();
            const n = tt();
            X();

            function o() {
                t("bs:close")
            }
            return (r, i) => (L(), A("div", Ea, [f("div", Pa, [f("img", {
                class: "is-coin-star",
                src: "IMAGE_COIN_STAR" in r ? r.IMAGE_COIN_STAR : v(Vn)
            }, null, 8, Wa)]), f("div", {
                class: "bs-content-title",
                innerHTML: r.$t("messages.level_up_success")
            }, null, 8, Fa), f("ul", Ra, [f("li", null, [f("p", {
                innerHTML: r.$t("boost.boost_multitap")
            }, null, 8, Va), f("div", Ha, "+" + se(v(n).levelUpEarnPerTap ?? 1), 1)]), f("li", null, [f("p", {
                innerHTML: r.$t("boost.boost_energy_limit")
            }, null, 8, Na), f("div", Ga, "+" + se(v(n).levelUpMaxTaps ?? 500), 1)])]), f("button", {
                class: "bottom-sheet-button button button-primary button-large",
                onClick: o
            }, [f("span", {
                innerHTML: r.$t("buttons.close")
            }, null, 8, Da)])]))
        }
    }),
    Oa = {
        class: "bs-passive"
    },
    Ba = {
        class: "bs-passive-inner"
    },
    Ya = {
        class: "bs-passive-exchange"
    },
    ja = ["innerHTML"],
    Xa = ["disabled"],
    Ua = ["innerHTML"],
    za = Z({
        __name: "PassiveIncomeOffline",
        setup(e) {
            const {
                $event: t
            } = S(), n = le();
            X();
            const o = be(),
                r = P(!1);

            function i() {
                var s;
                if (!r.value) {
                    B().useHapticFeedback("heavy"), r.value = !0, t("bs:close");
                    const a = ((s = document.querySelector(".user-balance-image")) == null ? void 0 : s.getBoundingClientRect()) ?? null;
                    let c;
                    const l = Math.min(150, Math.floor(n.lastPassiveEarn ?? 50));
                    a ? c = {
                        x_start_from: -20,
                        x_start_to: window.innerWidth + 20,
                        y_start_from: -20,
                        y_start_to: 0,
                        x_end_from: a.x - 40,
                        x_end_to: a.x + a.width - 40,
                        y_end_from: window.innerHeight - a.y - a.height / 2,
                        y_end_to: window.innerHeight - a.y - a.height / 2,
                        count: l,
                        delay: 5,
                        timeout_fly: 2e3,
                        direction_y: "from_bottom",
                        random_end_x: !0
                    } : c = {
                        x_start_from: -20,
                        x_start_to: window.innerWidth + 20,
                        y_start_from: -20,
                        y_start_to: 0,
                        x_end_from: -20,
                        x_end_to: window.innerWidth + 20,
                        y_end_from: window.innerHeight - 64,
                        y_end_to: window.innerHeight,
                        count: l,
                        delay: 5,
                        timeout_fly: 2e3,
                        direction_y: "from_bottom",
                        random_end_x: !1
                    }, t("coins-animate", c), o.settings.coins_animation && t("balance-animate:start"), setTimeout(() => {
                        r.value = !1
                    }, 400)
                }
            }
            return (s, a) => {
                var u, m;
                const c = en,
                    l = tn,
                    d = ve;
                return L(), A("div", Oa, [f("div", Ba, [f("div", Ya, [k(c, {
                    name: (u = v(n).currentExchange) == null ? void 0 : u.id
                }, null, 8, ["name"])]), k(l, {
                    price: v(n).lastPassiveEarn,
                    size: "xx-large"
                }, null, 8, ["price"]), f("p", {
                    innerHTML: s.$t("exchange.work_for_you")
                }, null, 8, ja)]), f("button", {
                    class: "bottom-sheet-button button button-primary button-large",
                    onClick: i,
                    disabled: v(r)
                }, [f("span", {
                    innerHTML: s.$t("exchange.thank_you", {
                        name: ((m = v(n).currentExchange) == null ? void 0 : m.name) ?? "unknown"
                    })
                }, null, 8, Ua), k(d, {
                    class: "icon-heart",
                    name: "heart"
                })], 8, Xa)])
            }
        }
    }),
    Ja = {
        class: "bs-content"
    },
    Ka = f("div", {
        class: "bs-content-image is-w100"
    }, [f("img", {
        src: eo
    })], -1),
    Qa = ["innerHTML"],
    qa = ["innerHTML"],
    es = ["innerHTML"],
    ts = Z({
        __name: "JoinBot",
        setup(e) {
            const {
                $event: t
            } = S();
            le(), X(), tt(), Qe();

            function n() {
                setTimeout(() => {
                    var o;
                    X().trackEvent(ie.REFERRAL_CLICK_DIALOG_JOIN_BOT), (o = window == null ? void 0 : window.Telegram) == null || o.WebApp.openTelegramLink(S().$config.public.botUrl)
                }, 400), t("bs:close")
            }
            return (o, r) => (L(), A("div", Ja, [Ka, f("div", {
                class: "bs-content-title has-top-gap",
                innerHTML: o.$t("messages.join_bot_title")
            }, null, 8, Qa), f("div", {
                class: "bs-content-target no-gap",
                innerHTML: o.$t("messages.join_bot_description", {
                    bot_name: v(et).GAME_NAME
                })
            }, null, 8, qa), f("button", {
                class: "bottom-sheet-button button button-primary button-large",
                onClick: n
            }, [f("span", {
                innerHTML: o.$t("messages.join_bot_button")
            }, null, 8, es)])]))
        }
    }),
    ns = {
        class: "bs-content"
    },
    os = f("div", {
        class: "bs-content-image is-daily-combo-info"
    }, [f("div", {
        class: "bs-content-image-round-bg is-violet"
    }), f("img", {
        src: on
    })], -1),
    rs = ["innerHTML"],
    is = {
        class: "upgrade-buy-info"
    },
    as = ["disabled"],
    ss = ["innerHTML"],
    cs = Z({
        __name: "DailyComboClaim",
        setup(e) {
            const {
                $event: t
            } = S(), n = P(!1), o = qe(), r = le(), i = be();

            function s() {
                t("bs:close")
            }
            let a;
            const c = async () => {
                o.getDailyComboNotClaimed && (n.value || (n.value = !0, a = me.promise({
                    title: S().$i18n.t("messages.process_request")
                }), await o.postClaimDailyCombo().then(d => {
                    s(), X().trackEvent(ie.DAILY_COMBO_CLAIMED), a == null || a.resolve({
                        title: S().$i18n.t("messages.claim_success"),
                        duration: 3e3
                    }), l()
                }).catch(d => {
                    a == null || a.reject(S().$i18n.t("messages.unable_to_claim"))
                }).finally(() => {
                    setTimeout(() => {
                        n.value = !1
                    }, 400)
                })))
            }, l = () => {
                var p, g;
                const d = ((p = document.querySelector(".user-balance-image")) == null ? void 0 : p.getBoundingClientRect()) ?? null;
                let u;
                const m = Math.min(150, Math.floor(((g = o.dailyCombo) == null ? void 0 : g.bonusCoins) ?? 1e4));
                d ? u = {
                    x_start_from: -20,
                    x_start_to: window.innerWidth + 20,
                    y_start_from: -20,
                    y_start_to: 0,
                    x_end_from: d.x - 40,
                    x_end_to: d.x + d.width - 40,
                    y_end_from: window.innerHeight - d.y - d.height / 2,
                    y_end_to: window.innerHeight - d.y - d.height / 2,
                    count: m,
                    delay: 5,
                    timeout_fly: 2e3,
                    direction_y: "from_bottom",
                    random_end_x: !0
                } : u = {
                    x_start_from: -20,
                    x_start_to: window.innerWidth + 20,
                    y_start_from: -20,
                    y_start_to: 0,
                    x_end_from: -20,
                    x_end_to: window.innerWidth + 20,
                    y_end_from: window.innerHeight - 64,
                    y_end_to: window.innerHeight,
                    count: m,
                    delay: 5,
                    timeout_fly: 2e3,
                    direction_y: "from_bottom",
                    random_end_x: !1
                }, t("coins-animate", u), i.settings.coins_animation && t("balance-animate:start")
            };
            return (d, u) => {
                var h;
                const m = tn,
                    p = ve,
                    g = nn;
                return L(), A("div", ns, [os, f("div", {
                    class: "bs-content-subtitle",
                    innerHTML: d.$t("daily_combo.claim_title")
                }, null, 8, rs), f("div", is, [k(m, {
                    price: ((h = v(o).dailyCombo) == null ? void 0 : h.bonusCoins) ?? 1e4,
                    size: "large",
                    round: !1
                }, null, 8, ["price"])]), f("button", {
                    class: "bottom-sheet-button button button-primary button-large pulse",
                    onClick: c,
                    disabled: v(n) || v(r).stop
                }, [v(n) ? (L(), z(g, {
                    key: 1
                })) : (L(), A(pe, {
                    key: 0
                }, [f("span", {
                    innerHTML: d.$t("daily_combo.claim_button")
                }, null, 8, ss), k(p, {
                    class: "icon-heart",
                    name: "heart"
                })], 64))], 8, as)])
            }
        }
    }),
    ls = {
        class: "page"
    },
    us = f("div", {
        id: "ton-connect-widget"
    }, null, -1),
    ds = 7,
    bs = Z({
        __name: "default",
        setup(e) {
            const {
                locales: t,
                setLocale: n
            } = Hn(), o = Nn();
            Gn({
                title: `${et.GAME_NAME}`
            });
            const {
                $stopListen: r,
                $listen: i,
                $event: s
            } = S(), a = Qe(), c = Ke(), l = le();
            Dn();
            const d = qe(),
                u = tt(),
                m = B(),
                p = Qn(),
                g = qn(),
                h = be(),
                b = qt(),
                y = Zn(),
                x = P(!1),
                C = P(0);
            let I = !1,
                _ = !1,
                V, H, w = null;
            const ee = Ne(() => t.value.map($ => $.code)),
                J = {
                    ...On,
                    "--nv-min-width": "calc(100vw - 32px)",
                    "--nv-global-bg": "rgba(39, 42, 47, 0.9)",
                    "--nv-global-border": "rgba(39, 42, 47, 0.9)",
                    "--nv-radius": "16px",
                    "--nv-tip-width": "0",
                    "--nv-icon-size": "18px",
                    "--nv-spacing": "6px",
                    "--nv-title-size": "14px",
                    "--nv-message-size": "12px",
                    "--nv-global-fg": "#fff",
                    "--nv-success-accent": "#82F88E"
                };
            ye(async () => {
                var G, E, K, Se, Le, ke, Ce, Me, xe, Te, Ae, Ie, _e, ct, lt, ut, dt, ft, mt, pt, vt, ht, gt, _t, bt, yt, wt, St, Lt, kt, Ct, Mt, xt, Tt, At, It, $t, Et, Pt, Wt, Ft;
                w = Bn(() => {
                    m.setProgressLoading(m.progress_loading + .5), (m.progress_loading >= 100 || _) && (w && clearInterval(w), w = null)
                }, 500);
                const $ = Rt("initData");
                if (c.token = localStorage.getItem(Pe.AUTH_TOKEN) ?? null, setTimeout(() => {
                        var Q, U, $e, Ee;
                        c.telegram_platform = (U = (Q = window == null ? void 0 : window.Telegram) == null ? void 0 : Q.WebApp) == null ? void 0 : U.platform, c.telegram_version = (Ee = ($e = window == null ? void 0 : window.Telegram) == null ? void 0 : $e.WebApp) == null ? void 0 : Ee.version
                    }, 500), (E = (G = window == null ? void 0 : window.Telegram) == null ? void 0 : G.WebApp) != null && E.initData) {
                    (y.query.tgWebAppStartParam || (Le = (Se = (K = window == null ? void 0 : window.Telegram) == null ? void 0 : K.WebApp) == null ? void 0 : Se.initDataUnsafe) != null && Le.start_param) && (c.setStartParam(c.parseParameters(((Me = (Ce = (ke = window == null ? void 0 : window.Telegram) == null ? void 0 : ke.WebApp) == null ? void 0 : Ce.initDataUnsafe) == null ? void 0 : Me.start_param) ?? ((xe = y.query.tgWebAppStartParam) == null ? void 0 : xe.toString()) ?? "")), V = c.start_param.get("fb"), V && setTimeout(() => {
                        Sn(V)
                    }, 3e3), H = c.start_param.get("kentId")), console.log(`platform: ${(Ae=(Te=window==null?void 0:window.Telegram)==null?void 0:Te.WebApp)==null?void 0:Ae.platform}, version: ${(_e=(Ie=window==null?void 0:window.Telegram)==null?void 0:Ie.WebApp)==null?void 0:_e.version}`), c.telegram_platform = (lt = (ct = window == null ? void 0 : window.Telegram) == null ? void 0 : ct.WebApp) == null ? void 0 : lt.platform, c.telegram_version = (dt = (ut = window == null ? void 0 : window.Telegram) == null ? void 0 : ut.WebApp) == null ? void 0 : dt.version;
                    const Q = ((vt = (pt = (mt = (ft = window == null ? void 0 : window.Telegram) == null ? void 0 : ft.WebApp) == null ? void 0 : mt.initDataUnsafe) == null ? void 0 : pt.user) == null ? void 0 : vt.language_code) ?? "en";
                    m.setLanguageCode(Q);
                    const U = Rt("i18n_redirected");
                    !U.value && ee.value.indexOf(Q) > -1 && (o(Q), n(Q), Vt(a(oe.GAME_INDEX))), U.value && ee.value.indexOf(U.value) > -1 && (o(U.value), n(U.value), Vt(a(oe.GAME_INDEX))), ["android", "android_x", "ios"].indexOf((gt = (ht = window == null ? void 0 : window.Telegram) == null ? void 0 : ht.WebApp) == null ? void 0 : gt.platform) >= 0 || S().$config.public.appEnv !== "production" ? ((bt = (_t = window == null ? void 0 : window.Telegram) == null ? void 0 : _t.WebApp) == null || bt.expand(), (wt = (yt = window == null ? void 0 : window.Telegram) == null ? void 0 : yt.WebApp) == null || wt.setBackgroundColor("#000000"), (Ct = (St = window == null ? void 0 : window.Telegram) == null ? void 0 : St.WebApp) == null || Ct.setHeaderColor((kt = (Lt = window == null ? void 0 : window.Telegram) == null ? void 0 : Lt.WebApp) != null && kt.isVersionAtLeast("6.9") ? "#000000" : "bg_color"), C.value = ((At = (Tt = (xt = (Mt = window == null ? void 0 : window.Telegram) == null ? void 0 : Mt.WebApp) == null ? void 0 : xt.initDataUnsafe) == null ? void 0 : Tt.user) == null ? void 0 : At.id) ?? 0, ($t = (It = window == null ? void 0 : window.Telegram) == null ? void 0 : It.WebApp) == null || $t.ready(), $.value || ($.value = (Pt = (Et = window == null ? void 0 : window.Telegram) == null ? void 0 : Et.WebApp) == null ? void 0 : Pt.initData), I = !0) : I = !1
                }
                if (I)
                    if (await c.check(), c.authenticated) await he();
                    else {
                        const Q = await $a.load(),
                            {
                                visitorId: U,
                                components: $e,
                                version: Ee
                            } = await Q.get();
                        await c.postLogin({
                            initDataRaw: c.telegram_hash ? c.telegram_hash : (Ft = (Wt = window == null ? void 0 : window.Telegram) == null ? void 0 : Wt.WebApp) == null ? void 0 : Ft.initData,
                            fingerprint: {
                                version: Ee,
                                visitorId: U,
                                components: {
                                    ...$e,
                                    canvas: null,
                                    webGlExtensions: null
                                }
                            }
                        }).then(async Ln => {
                            te(1), H && (c.opened_by_miniapp = !0, await ge(Number(H)).catch(fs => {})), await he()
                        }).catch(Ln => {
                            me.error({
                                title: S().$i18n.t("messages.request_error"),
                                message: S().$i18n.t("messages.no_login"),
                                duration: 2e4
                            }), _ = !0
                        })
                    } setTimeout(() => {
                    c.setError(_), c.setTelegram(I), c.setLoading(_), I && !_ && (l.startTimers(), h.loadSettings()), l.lastPassiveEarn && l.lastPassiveEarn > 1 && s("passive-income:success")
                }, 150)
            });
            const he = async () => {
                _ || await c.postGetMe().then(async $ => {
                    te(2);
                    const G = $.telegramUser.id;
                    if (false) await c.postWebappConflict({
                        userId1: Number(G),
                        userId2: Number(C.value)
                    }).finally(() => {
                        c.logout(), setTimeout(() => {
                            var E, K;
                            (K = (E = window == null ? void 0 : window.Telegram) == null ? void 0 : E.WebApp) == null || K.close()
                        }, 200)
                    });
                    else {
                        if (_ || (await u.postConfig().catch(E => {
                                me.error({
                                    title: S().$i18n.t("messages.request_error"),
                                    message: S().$i18n.t("messages.no_config"),
                                    duration: 2e4
                                }), _ = !0
                            }), te(3)), !_) {
                            const E = l.storageSyncTapsGet();
                            E && (await l.postTap(E, !0).finally(() => {
                                localStorage.removeItem(Pe.SYNC_AVAILABLE_TAPS), localStorage.removeItem(Pe.SYNC_TIMESTAMP_TAPS), localStorage.removeItem(Pe.SYNC_TAPS)
                            }), te(4))
                        }
                        _ || (l.setFirstTimeLoad(!0), await l.postSync().catch(E => {
                            me.error({
                                title: S().$i18n.t("messages.request_error"),
                                message: S().$i18n.t("messages.no_sync"),
                                duration: 2e4
                            }), _ = !0
                        }), te(4)), _ || await d.postUpgradesForBuy().catch(E => {
                            _ = !0
                        }), te(5), _ || (await p.postListTasks().catch(E => {
                            _ = !0
                        }), te(6)), _ || (await g.postListTasks().catch(E => {}), te(7)), _ || l.setFirstTimeLoad(!1)
                    }
                }).catch($ => {
                    me.error({
                        title: S().$i18n.t("messages.request_error"),
                        message: S().$i18n.t("messages.no_auth"),
                        duration: 2e4
                    }), _ = !0
                })
            };
            async function ge($, G = 1, E = 5) {
                try {
                    await c.postAddReferral($).then(() => {
                        X().trackEvent(ie.REFERRAL_ADDED)
                    })
                } catch (K) {
                    if (K.statusCode >= 500) G < E ? await ge($, G + 1, E) : _ = !0;
                    else return
                }
            }
            i("level-up:success", () => at()), i("passive-income:success", () => we()), i("join-bot:success", () => it()), i("daily-combo:claim", () => st()), Qt(() => {
                r("level-up:success", at), r("passive-income:success", we), r("join-bot:success", it), r("daily-combo:claim", st)
            }), Yn(() => y.path, () => {
                x.value = y.path !== a(oe.GAME_INDEX)
            });

            function we() {
                s("bs:close"), setTimeout(() => {
                    l.setStop(!1), s("bs:open", {
                        component: We(za),
                        onCloseDialog: () => {
                            l.addBalance(l.lastPassiveEarn ?? 0)
                        }
                    })
                }, 400)
            }

            function it() {
                s("bs:close"), setTimeout(() => {
                    X().trackEvent(ie.REFERRAL_SHOW_DIALOG_JOIN_BOT), s("bs:open", {
                        component: We(ts)
                    })
                }, 400)
            }

            function at() {
                s("bs:close"), setTimeout(() => {
                    var $;
                    ($ = m.notificationLevelUp) == null || $.resolve({
                        title: S().$i18n.t("messages.level_up_success"),
                        duration: 3e3
                    }), m.notificationLevelUp = null, l.setStop(!1), setTimeout(() => {
                        s("bs:open", {
                            component: We(Za)
                        })
                    }, 400)
                }, 400)
            }
            const st = () => {
                    s("bs:open", {
                        component: We(cs)
                    })
                },
                te = $ => {
                    const G = Math.floor($ / ds * 100);
                    G > m.progress_loading && !_ && m.setProgressLoading(G)
                },
                Sn = $ => {
                    S().$fb.setPixelId($), S().$fb.enable()
                };
            return ($, G) => {
                const E = ho,
                    K = So,
                    Se = jn,
                    Le = Vo,
                    ke = Go,
                    Ce = Bo,
                    Me = nr,
                    xe = Lr,
                    Te = zn,
                    Ae = Jn,
                    Ie = Xn;
                return L(), A("div", ls, [v(c).loading ? (L(), z(E, {
                    key: 0
                })) : (L(), A(pe, {
                    key: 1
                }, [v(c).is_telegram ? (L(), A(pe, {
                    key: 1
                }, [k(v(Un), {
                    visible: v(x),
                    onClick: v(m).goBackButton
                }, null, 8, ["visible", "onClick"]), k(Se), v(l).exchangeId ? (L(), z(Le, {
                    key: 0
                })) : re("", !0), k(ke)], 64)) : (L(), z(K, {
                    key: 0
                }))], 64)), k(Ce), v(d).dailyCombo && v(d).dailyComboSuccess ? (L(), z(Me, {
                    key: 2
                })) : re("", !0), v(b).dailyCipherSuccess && v(b).getDailyCipherNotClaimed ? (L(), z(xe, {
                    key: 3
                })) : re("", !0), us, k(Ie, null, {
                    default: j(_e => [k(Ae, {
                        item: _e
                    }, {
                        default: j(() => [k(Te, {
                            item: _e,
                            theme: J
                        }, null, 8, ["item"])]),
                        _: 2
                    }, 1032, ["item"])]),
                    _: 1
                })])
            }
        }
    });
export {
    bs as
    default
};
