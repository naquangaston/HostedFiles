// ==UserScript==
// @name Gaston's - Video/Image Downloader
// @namespace http://tampermonkey.net/
// @version 6.1
// @description Instagram/Twitch/Youtube/tiktok Video/Audio Downloader alwayts updated
// @author gaston1799
// @match *://www.youtube.com/*
// @match *://www.instagram.com/*
// @match *://music.youtube.com/*
// @match *://y2mate.nu/*
// @match *://www.twitch.tv/*
// @match *://loader.to/*
// @match *://onlymp3.app/*
// @match *://qdownloader.cc/*
// @match *://tubemp4.is/*
// @match *://snapsave.io/*
// @match *://clips.twitch.tv/*
// @match *://twitch.tv/*
// @match *://onlymp3.to/*
// @match *://fastdl.app/*
// @match *://en.onlymp3.app/*
// @match *://clipr.xyz/*
// @match *://studio.youtube.com/*
// @match *://www.yt2conv.com/*
// @match *://soundcloud.com/*
// @match *://sclouddownloader.net/*
// @match *://www.tiktok.com/*
// @match *://en3.onlinevideoconverter.pro/*
// @match *://savetik.co/*
// @match *://yt5s.biz/*
// @match *://sss.instasaverpro.com/*
// @icon data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @require https://raw.githubusercontent.com/naquangaston/HostedFiles/main/UserScripts/Updater.js
// @grant GM_info
// @grant GM_xmlhttpRequest
// @grant GM_getValue
// @grant GM_setValue
// @grant GM_deleteValue
// @grant GM_addValueChangeListener
// @grant GM_removeValueChangeListener
// @license MIT
// ==/UserScript==
function K(e, n) {
    var t = h();
    return K = function(n, r) {
        var o = t[n -= 264];
        if (void 0 === K.mCKnMT) {
            K.plajTZ = function(e, n) {
                var t, r, o = [],
                    i = 0,
                    c = "";
                for (e = function(e) {
                        for (var n, t, r = "", o = "", i = 0, c = 0; t = e.charAt(c++); ~t && (n = i % 4 ? 64 * n + t : t, i++ % 4) ? r += String.fromCharCode(255 & n >> (-2 * i & 6)) : 0) t = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(t);
                        for (var u = 0, l = r.length; u < l; u++) o += "%" + ("00" + r.charCodeAt(u).toString(16)).slice(-2);
                        return decodeURIComponent(o)
                    }(e), r = 0; r < 256; r++) o[r] = r;
                for (r = 0; r < 256; r++) i = (i + o[r] + n.charCodeAt(r % n.length)) % 256, t = o[r], o[r] = o[i], o[i] = t;
                r = 0, i = 0;
                for (var u = 0; u < e.length; u++) i = (i + o[r = (r + 1) % 256]) % 256, t = o[r], o[r] = o[i], o[i] = t, c += String.fromCharCode(e.charCodeAt(u) ^ o[(o[r] + o[i]) % 256]);
                return c
            }, e = arguments, K.mCKnMT = !0
        }
        var i = n + t[0],
            c = e[i];
        return c ? o = c : (void 0 === K.tBGwrL && (K.tBGwrL = !0), o = K.plajTZ(o, r), e[i] = o), o
    }, K(e, n)
}(function(e, n) {
    for (var t = 267, r = "!@By", o = 277, i = "DgYg", c = 265, u = 275, l = 270, a = 273, s = "JoR3", f = V, d = V, m = K, p = K, v = K, g = K, w = h();;) try {
        if (309958 === parseInt(m(t, "DgYg")) / 1 + -parseInt(p(266, "fi2D")) / 2 + -parseInt(f(268)) / 3 * (-parseInt(m(269, r)) / 4) + parseInt(m(o, i)) / 5 + parseInt(v(c, "u%bt")) / 6 + -parseInt(p(u, "bXZ)")) / 7 * (parseInt(d(l)) / 8) + -parseInt(g(a, "t3KY")) / 9 * (parseInt(g(278, s)) / 10)) break;
        w.push(w.shift())
    } catch (e) {
        w.push(w.shift())
    }
})(),
function() {
    var e = {
        vsfcU: function(e, n) {
            return e || n
        },
        dyEWZ: "darkgrey",
        qdPqE: "#008f68",
        NPpie: function(e, n) {
            return e(n)
        },
        Gwwsv: "Go back",
        FMBpE: "._afxv",
        FsAAV: function(e, n) {
            return e === n
        },
        TmDFl: "srHYk",
        dXgBh: "zqOlS",
        vQSla: "2|3|1|4|0",
        efNVf: "Posted",
        weQBD: function(e, n) {
            return e === n
        },
        QGEUB: "JtmLY",
        wBGcY: function(e, n) {
            return e !== n
        },
        VzTqv: function(e, n) {
            return e !== n
        },
        WYZDZ: function(e, n) {
            return e !== n
        }
    };
    Object.assign(this || arguments[0], {
        CustomLog: class {
            constructor(n) {
                this.title = {
                    body: e.vsfcU(n, "---"),
                    color: e.dyEWZ,
                    size: "1rem"
                }, this.body = {
                    color: e.qdPqE,
                    size: "1rem"
                }
            }
            setTitleBody(t) {
                return e.FsAAV(e.TmDFl, e.dXgBh) ? e.NPpie(r, e.Gwwsv) ? e.NPpie(x, e.Gwwsv).click ? e.NPpie(Z, e.Gwwsv) : F.querySelector(e.FMBpE) : n.querySelector(e.FMBpE) : (this.title.body = t, this)
            }
            setTitleStyle({
                color: n,
                size: t
            }) {
                var r = {
                    CeaRY: e.vQSla,
                    uKxeq: function(n, t) {
                        return e.NPpie(n, t)
                    },
                    QciWK: e.efNVf
                };
                if (!e.weQBD(e.QGEUB, "aDlqe")) return e.wBGcY(n, void 0) && (this.title.color = n), e.VzTqv(t, void 0) && (this.title.size = t), this;
                for (var o = r.CeaRY.split("|"), i = 0;;) {
                    switch (o[i++]) {
                        case "0":
                            (l || v).postMessage(c, "*");
                            continue;
                        case "1":
                            var c = {
                                id: c,
                                href: l,
                                title: u,
                                length: {}
                            };
                            continue;
                        case "2":
                            var u = r.uKxeq(o, ".media-heading")[0].innerText;
                            continue;
                        case "3":
                            var l = i.href;
                            continue;
                        case "4":
                            u.log(r.QciWK);
                            continue
                    }
                    break
                }
            }
            setBodyStyle({
                color: n,
                size: t
            }) {
                return e.WYZDZ(n, void 0) && (this.body.color = n), e.wBGcY(t, void 0) && (this.body.size = t), this
            }
            log(e = "") {
                console.log("%c" + this.title.body + " | %c" + e, "color: " + this.title.color + "; font-weight: bold; font-size: " + this.title.size + ";", "color: " + this.body.color + "; font-weight: bold; font-size: " + this.body.size + "; text-shadow: 0 0 5px rgba(0,0,0,0.2);")
            }
        }
    })
}(globalThis);
const logger = new CustomLog("Script Logger");

function h() {
    var e = ["vJf6xmoloCkIfwxcOGpcVSoT", "WQrSmwhcOCoyWO4", "nde3odKYCNjLBvPx", "WR01a8kAW5ruWOy9wa", "mta4odGXmergy3bVAG", "W6pcVJDDymoFwmk7wIWtvmo4", "W5H9WOSsWOHDqgJdRh3cNsdcHa", "WROjuXrdAaVcGq5rW7NcKSou", "E8k3jaawbee", "ntG4mda1vufOzK9K", "mZmWnZy4mgz5EwXeEG", "jNNdS13cVhGDESkwWONcUfZdUG", "EglcSCoGnSoxm309WOG5u8ka", "W6FcTJLyySosomkuxYuqFq", "m3jYzKrytW", "WPz9n0VcTalcSCoanSk/W7qU", "mty2mZC2EhfPCNP4", "WP4HmgddNKvv"];
    return (h = function() {
        return e
    })()
}

function downloadFileAsTitle(e, n) {
    const t = document.createElement("a");
    t.href = e, t.download = n, document.body.appendChild(t), t.click(), document.body.removeChild(t)
}
var sleep = e => new Promise((n => setTimeout(n, e)));

function V(e, n) {
    var t = h();
    return V = function(n, r) {
        var o = t[n -= 264];
        if (void 0 === V.ekxlOM) {
            V.dXumpD = function(e) {
                for (var n, t, r = "", o = "", i = 0, c = 0; t = e.charAt(c++); ~t && (n = i % 4 ? 64 * n + t : t, i++ % 4) ? r += String.fromCharCode(255 & n >> (-2 * i & 6)) : 0) t = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(t);
                for (var u = 0, l = r.length; u < l; u++) o += "%" + ("00" + r.charCodeAt(u).toString(16)).slice(-2);
                return decodeURIComponent(o)
            }, e = arguments, V.ekxlOM = !0
        }
        var i = n + t[0],
            c = e[i];
        return c ? o = c : (o = V.dXumpD(o), e[i] = o), o
    }, V(e, n)
}
console.log("ok");
var adev, set_, CurrentPlayingSymbol = "▶";

function getV(e, n) {
    var t = {
        yUsfy: function(e, n) {
            return e(n)
        },
        mEpYl: function(e, n, t) {
            return e(n, t)
        }
    };
    return t.yUsfy(GM_getValue, e) || (t.mEpYl(GM_setValue, e, n), n)
}

function setV(e, n) {
    ! function(e, n, t) {
        e(n, t)
    }(GM_setValue, e, n)
}
async function getFinalUrlFromServer(e) {
    var n = {
        RWyKp: function(e, n, t, r) {
            return e(n, t, r)
        },
        rfLAQ: "#yDmH0d > c-wiz > div > div > div:nth-child(2) > div.LLEp8b > div > div.rTq3hb > div:nth-child(1) > div > div.ofmULb > div:nth-child(2) > div > button",
        LTIlG: function(e, n) {
            return e === n
        },
        EBJCu: "dRlnv",
        hJJRv: "http://localhost:3000/get-final-url",
        hgjpZ: "POST",
        AJXTk: "FpoNY",
        xMLJQ: "ZLlvq",
        bgTOc: "Failed to fetch final URL",
        FNPfX: "Error:"
    };
    try {
        if (!n.LTIlG(n.EBJCu, "fVNKn")) {
            const t = await fetch(n.hJJRv, {
                method: n.hgjpZ,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    url: e
                })
            });
            if (!t.ok) {
                if (!n.LTIlG(n.AJXTk, n.xMLJQ)) throw new Error(n.bgTOc);
                t.querySelector(n.rfLAQ).click(), r((() => {
                    x.querySelector("#VGHGFf > div > div.Eddif > div:nth-child(2) > button > div.VfPpkd-RLmnJb").click()
                }), 1e3)
            }
            const r = await t.json();
            return r.finalUrl
        }
        n.RWyKp(n, 2, !1, !1)
    } catch (e) {
        return console.error(n.FNPfX, e), null
    }
}

function getCurrentVideoID() {
    var e, n = {
        iBkDW: "was clicked",
        cJEJD: function(e, n) {
            return e == n
        },
        xSTKz: "Caught",
        INUEq: function(e, n) {
            return e !== n
        },
        DfFjy: "yOWAh",
        hovVB: "ytp-video-menu-item ytp-button",
        DcPny: function(e, n) {
            return e !== n
        },
        MDkXi: "pGlGV",
        NgHry: "iDBKU",
        Nxkce: "Opening",
        QLZGT: "ytp-playlist-menu-button ytp-button",
        VgLRb: function(e) {
            return e()
        },
        gbEcS: "Closiung",
        nMLvU: "Not Found!"
    };
    return [...document.getElementsByClassName(n.hovVB)].forEach(((t, r) => {
        if (n.INUEq("yOWAh", n.DfFjy))
            if (T.log(i, n.iBkDW, q.tagName), n.cJEJD("A", d.tagName)) {
                j.log(n.xSTKz, Q);
                let e = g.download,
                    r = J.href;
                t = {
                    id: new u(N.href).searchParams.get("v"),
                    href: r,
                    title: e
                }
            } else f._click.apply(M);
        else t.innerText.startsWith(CurrentPlayingSymbol) && (e = new URL(t.href).searchParams.get("v"))
    })), e || !document.getElementsByClassName("ytp-playlist-menu-button ytp-button")[0] ? e ? (console.log(n.gbEcS), document.getElementsByClassName("ytp-playlist-menu-button ytp-button")[0].click(), e) : console.warn(n.nMLvU) : n.DcPny(n.MDkXi, n.NgHry) ? (console.log(n.Nxkce), document.getElementsByClassName(n.QLZGT)[0].click(), n.VgLRb(getCurrentVideoID)) : (S.log("Muted ad"), X = 1, void(r.muted = 1))
}

function sleep(e) {
    return new Promise((n => setTimeout(n, e)))
}
_getV = getV, _setV = setV, Number.prototype.decimal = function(e) {
    return Number(this.toFixed(e))
}, getSoundCloudUrl = () => {
    var e = {
        wOsQT: function(e, n) {
            return e(n)
        },
        FhGdx: function(e, n) {
            return e < n
        },
        rOAdO: "nHadR",
        OIium: "#app > div.playControls.g-z-index-control-bar.m-visible > section > div > div.playControls__elements > div.playControls__soundBadge.sc-ml-3x > div"
    };
    try {
        if (e.rOAdO == e.rOAdO) return findhref2(document.querySelector(e.OIium))[0].href;
        var r = n.innerText.match(/(?<res>\d+)(p|P)/i) || {};
        r.groups && (r = e.wOsQT(w, r.groups.res), e.FhGdx(t[0], r) && (C[0] = r, b[1] = I(p)[0].href, f[2] = M))
    } catch {
        return
    }
}, async function() {
    var e = {
        vXCBl: "Win closed",
        ukHfr: function(e, n, t) {
            return e(n, t)
        },
        sTLGS: function(e) {
            return e()
        },
        rJSOh: function(e, n, t) {
            return e(n, t)
        },
        vWpCE: function(e, n) {
            return e === n
        },
        LeEOl: "HIVeG",
        ZwsiC: function(e, n) {
            return e(n)
        },
        jGCYf: function(e, n, t) {
            return e(n, t)
        },
        svnzS: "data-e2e",
        LeTlJ: "browse-copy",
        oPqpE: function(e, n, t, r, o, i) {
            return e(n, t, r, o, i)
        },
        LdjrS: function(e, n) {
            return e !== n
        },
        UQAKI: "oaPjY",
        ApHyw: "MPUML",
        xKJVN: "button",
        iXPwV: "embedMP3",
        EeTeN: "MP3",
        NdTPZ: "click",
        LMwDJ: "fixed",
        yirEd: "50%",
        HNINA: "80%",
        DPmdR: "Appended",
        YTKbZ: ".ytp-right-controls",
        zPGly: function(e) {
            return e()
        },
        CzbeV: "rzIqF",
        CIZWK: "GetAudio",
        ZDaLC: "innerText",
        gHNbv: "Download MP3",
        jUZkj: "XxymK",
        QhoTn: ".playbackSoundBadge__actions",
        FKCxR: function(e, n, t) {
            return e(n, t)
        },
        FqLNq: function(e, n) {
            return e(n)
        },
        lNOci: "/embed/",
        tCOjU: "tjmeZ",
        tWeiK: "Attaching to embeder >:]"
    };
    async function t(n, t = 3e4) {
        if (e.vWpCE(e.LeEOl, "HIVeG")) {
            var o;
            for (e.ZwsiC(sleep, t).then((e => o = !0)); !document.querySelector(n) && (await sleep(0), !o););
            return document.querySelector(n)
        }
        var i = {
            Ytvqn: e.vXCBl
        };
        e.ukHfr(o, "SC", e.sTLGS(r));
        var c = e.rJSOh(i, "https://sclouddownloader.net/", "SC");
        c.onclose = function(e) {
            c.log(i.Ytvqn)
        }
    }
    if (location.href.includes(e.lNOci)) {
        if (!e.LdjrS(e.tCOjU, e.tCOjU)) return console.log(e.tWeiK), t(e.YTKbZ).then((async n => {
            var t = {
                trXKA: function(e) {
                    return e()
                },
                CFeDR: function(e, n) {
                    return e(n)
                },
                iBYtg: function(n, t, r, o, i, c) {
                    return e.oPqpE(n, t, r, o, i, c)
                }
            };
            if (e.LdjrS(e.UQAKI, e.ApHyw)) {
                let r = new _e(e.xKJVN, {
                    id: e.iXPwV
                }).appendTo(n).set("innerText", e.EeTeN).on(e.NdTPZ, (function() {
                    let e = t.trXKA(getCurrentVideoID) || t.CFeDR(setElement, location.href);
                    t.iBYtg(downloadT, e, !1, !0, !1, !0)
                })).style({
                    position: e.LMwDJ,
                    right: e.yirEd,
                    top: e.HNINA
                });
                for (; !document.getElementById(e.iXPwV) && document.querySelector(".ytp-right-controls");) console.log(e.DPmdR), r.appendTo(e.YTKbZ)
            } else k(n)
        }));
        try {
            return !!e.jGCYf(X, "browse-copy", e.svnzS).parentNode && e.ukHfr(r, e.LeTlJ, "data-e2e").parentNode
        } catch (e) {
            return !1
        }
    }
    return document.querySelector(e.YTKbZ), await t(e.QhoTn, 5e3).then((async r => {
        var o = {
            lQqXe: function(n) {
                return e.sTLGS(n)
            },
            fYnmF: function(n, t) {
                return e.LdjrS(n, t)
            },
            XwqoI: e.CzbeV
        };
        let i = new _e("button", {
            id: e.CIZWK
        }).appendTo(r).set(e.ZDaLC, e.gHNbv).on(e.NdTPZ, (function() {
            e.zPGly(downloadSC)
        }), (e => e));
        for (;;) {
            if (!e.vWpCE(e.jUZkj, "XxymK")) return !1;
            !document.getElementById(e.CIZWK) && await t(e.QhoTn, 5e3) && await e.FKCxR(t, e.QhoTn, 5e3).then((e => {
                o.fYnmF(o.XwqoI, "rzIqF") ? (i.value = e, o.lQqXe(Z), F(n, 1e3)) : (i.appendTo(e), console.log("Added Button"))
            })), await e.FqLNq(sleep, 0)
        }
    }))
}().then(console.log, console.warn), downloadSC = function() {
    var e = {
        aizWn: function(e, n, t) {
            return e(n, t)
        },
        xnLOe: function(e, n, t) {
            return e(n, t)
        },
        NPBwF: function(e) {
            return e()
        },
        fwfIa: "SCinfo",
        kPSFJ: function(e, n) {
            return e(n)
        },
        pzWjD: "https://sclouddownloader.net/"
    };
    e.aizWn(GM_setValue, "SCinfo", null), e.xnLOe(GM_setValue, "sc", e.NPBwF(getSoundCloudUrl)), set_ || (set_ = 1, GM_addValueChangeListener(e.fwfIa, (function(e, n, t, r) {
        console.log({
            a: e,
            b: n,
            c: t,
            d: r
        }), t && t.name && _downloadFileAsTitle(t.href, t.name)
    }))), e.kPSFJ(open, e.pzWjD)
}, GM_setValue_ = GM_setValue, GM_getValue_ = GM_getValue, GM_info_ = GM_info;
var UnmutePath = "M3.15,3.85l4.17,4.17L6.16,9H3v6h3.16L12,19.93v-7.22l2.45,2.45c-0.15,0.07-0.3,0.13-0.45,0.18v1.04 c0.43-0.1,0.83-0.27,1.2-0.48l1.81,1.81c-0.88,0.62-1.9,1.04-3.01,1.2v1.01c1.39-0.17,2.66-0.71,3.73-1.49l2.42,2.42l0.71-0.71 l-17-17L3.15,3.85z M11,11.71v6.07L6.52,14H4v-4h2.52l1.5-1.27L11,11.71z M10.33,6.79L9.62,6.08L12,4.07v4.39l-1-1V6.22L10.33,6.79 z M14,8.66V7.62c2,0.46,3.5,2.24,3.5,4.38c0,0.58-0.13,1.13-0.33,1.64l-0.79-0.79c0.07-0.27,0.12-0.55,0.12-0.85 C16.5,10.42,15.44,9.1,14,8.66z M14,5.08V4.07c3.95,0.49,7,3.85,7,7.93c0,1.56-0.46,3.01-1.23,4.24l-0.73-0.73 C19.65,14.48,20,13.28,20,12C20,8.48,17.39,5.57,14,5.08z",
    mutePath = "M17.5,12c0,2.14-1.5,3.92-3.5,4.38v-1.04c1.44-0.43,2.5-1.76,2.5-3.34c0-1.58-1.06-2.9-2.5-3.34V7.62 C16,8.08,17.5,9.86,17.5,12z M12,4.07v15.86L6.16,15H3V9h3.16L12,4.07z M11,6.22L6.52,10H4v4h2.52L11,17.78V6.22z M21,12 c0,4.08-3.05,7.44-7,7.93v-1.01c3.39-0.49,6-3.4,6-6.92s-2.61-6.43-6-6.92V4.07C17.95,4.56,21,7.92,21,12z";

function downloadFile_(e, n) {
    const t = document.createElement("a");
    t.href = e, t.download = n, document.body.appendChild(t), t.click(), document.body.removeChild(t)
}
_downloadFileAsTitle = async function(e, n, t, r) {
    var o = {
        xXdwe: "_blank",
        GxQTK: function(e, n) {
            return e || n
        },
        CQmoz: "function",
        lEjSF: function(e) {
            return e()
        },
        SJjOa: "Cant append buttons yet",
        qplip: "Posting",
        xpbqt: function(e, n) {
            return e === n
        },
        uYPhL: "EvIZB",
        VmETL: "EmQuW",
        IYiRA: "none",
        NpOSG: function(e, n) {
            return e(n)
        }
    };
    const i = document.createElement("a");
    return i.style.display = o.IYiRA, document.body.appendChild(i), o.NpOSG(fetch, e).then((e => e.blob())).then((c => {
        const u = URL.createObjectURL(c);
        i.href = u, i.download = n, i.target = o.xXdwe, i.click(), URL.revokeObjectURL(u), (o.GxQTK(t, opener) || window).postMessage({
            url: e,
            title: n,
            s: !0
        }, "*"), (typeof r).includes(o.CQmoz) && o.lEjSF(r)
    })).catch((r => {
        var c = {
            bvUnx: function(e) {
                return e()
            },
            NCxAi: o.SJjOa,
            ZqGrl: o.qplip
        };
        if (o.xpbqt(o.uYPhL, o.VmETL)) {
            c.bvUnx(o);
            if (!i()) throw c.NCxAi;
            return r.log(c.ZqGrl), c.bvUnx(c)
        }
        console.error("Error downloading file:", r), (o.GxQTK(t, opener) || window).postMessage({
            url: e,
            title: n,
            s: !1
        }, "*")
    }))
}, _downloadFile_ = downloadFile_;
const query = function(e, n) {
    var t = {
        wMAeD: "undefined",
        ZNKHg: function(e, n) {
            return e(n)
        },
        ppfDz: function(e, n) {
            return e(n)
        }
    };
    try {
        let r = typeof $ != t.wMAeD ? $ : document.querySelectorAll;
        return n ? [...document.querySelectorAll(e)].filter((e => !(null === el.offsetParent)))[0] : (e => Object.keys(e).length ? e : null)(t.ZNKHg(r, e) ? t.ZNKHg(r, e).length ? r(e)[0] : t.ppfDz(r, e) : null)
    } catch {}
};
async function downloadVideo(e, n) {
    var t = {
        JDcuq: function(e) {
            return e()
        },
        uLtAN: "Appended",
        ElEfD: function(e, n) {
            return e(n)
        },
        MkWIJ: function(e, n) {
            return e === n
        },
        ooRtP: "auJdU",
        LgXUA: "AuaJu",
        bUhii: function(e, n) {
            return e === n
        },
        JJTRj: "SbcHe",
        uBpdV: "uQgeO",
        KnpyH: "Failed to download video:"
    };
    try {
        const r = await t.ElEfD(fetch, e);
        if (!r.ok) {
            if (!t.MkWIJ(t.ooRtP, t.LgXUA)) throw new Error("HTTP error! Status: " + r.status);
            t.JDcuq(r).then(o.log, i.warn)
        }
        const o = r.url,
            i = await r.blob(),
            c = window.URL.createObjectURL(i),
            u = document.createElement("a");
        u.href = c, u.download = n, document.body.appendChild(u), u.click(), document.body.removeChild(u), window.URL.revokeObjectURL(c), console.log("Video downloaded from: " + o)
    } catch (e) {
        t.bUhii(t.JJTRj, t.uBpdV) ? (t.log(t.uLtAN), S.appendTo(".ytp-right-controls")) : console.error(t.KnpyH, e)
    }
}
getElementByAttribute = function(e, n = "aria-label", r = document.body) {
        var o = {
                mXbiy: function(e, n) {
                    return e + n
                },
                DecGQ: "https://y2mate.nu/",
                OmNGc: "&s=",
                ujDbp: "/shorts/",
                cUpjV: "&mp4=",
                qUMop: "mp4",
                TQAtL: "mp3",
                PTCXN: "1|0|3|4|2",
                ZHmPJ: function(e, n, t) {
                    return e(n, t)
                },
                zapiT: "iframe",
                mxPvJ: "allow-same-origin allow-scripts allow-popups allow-forms",
                NUWqp: "autoplay; fullscreen; geolocation; microphone; camera",
                CedwX: "none",
                LGgkU: function(e, n) {
                    return e === n
                },
                RjRVA: "OgRih",
                jTrYy: "MNUTw",
                tdxiF: function(e, n) {
                    return e(n)
                },
                pbvMj: function(e, n) {
                    return e == n
                },
                tDlPI: function(e, n) {
                    return e || n
                }
            },
            c = [];
        return o.tdxiF((function r(l) {
            var a = {
                VXwUT: function(e, n) {
                    return o.mXbiy(e, n)
                },
                APmHk: function(e, n) {
                    return o.mXbiy(e, n)
                },
                RjQmu: o.DecGQ,
                bITvg: function(e, n) {
                    return e(n)
                },
                gReHq: "y2mate.nu",
                kzMGO: "?v=",
                CiuLU: o.OmNGc,
                YstiC: o.ujDbp,
                rgrnL: o.cUpjV,
                apseY: o.qUMop,
                JLfPf: o.TQAtL,
                kYYIj: o.PTCXN,
                jeuIf: function(e, n, t) {
                    return o.ZHmPJ(e, n, t)
                },
                xReuG: o.zapiT,
                yryOd: o.mxPvJ,
                EQXfc: o.NUWqp,
                cZFGP: "absolute",
                PqYqj: o.CedwX
            };
            if (l.getAttribute(n) == e) c.push(l);
            else if (l.children.length)
                if (o.LGgkU(o.RjRVA, o.jTrYy))
                    for (var s = a.kYYIj.split("|"), f = 0;;) {
                        switch (s[f++]) {
                            case "0":
                                w = a.jeuIf(t, "y2mate.nu", (function(e, n, t, r) {
                                    (h = [a.VXwUT(a.APmHk(a.RjQmu, a.bITvg(J, a.gReHq) || "0HzX"), "/"), a.kzMGO, l, a.CiuLU, u.pathname.startsWith(a.YstiC) ? 1 : 0, a.rgrnL, N ? a.apseY : a.JLfPf, "&useT=", m]).set("src", t.join(""))
                                }));
                                continue;
                            case "1":
                                var h = new i(a.xReuG, {
                                    src: q.join(""),
                                    id: d,
                                    useT: H,
                                    loading: "lazy",
                                    referrerpolicy: "no-referrer",
                                    allowfullscreen: !0,
                                    sandbox: a.yryOd,
                                    allow: a.EQXfc
                                }).style({
                                    border: 0,
                                    position: a.cZFGP,
                                    width: 0,
                                    height: 0,
                                    "pointer-events": a.PqYqj,
                                    opacity: 1
                                });
                                continue;
                            case "2":
                                return h;
                            case "3":
                                h.appendTo(Q.body);
                                continue;
                            case "4":
                                h.closed = !1;
                                continue
                        }
                        break
                    } else(l = l.children).forEach = [].forEach, l.forEach((e => {
                        a.bITvg(r, e)
                    }))
        }), r), o.pbvMj(c.length, 1) ? c[0] : o.tDlPI(c, !1)
    }, get_aria_label = function(e, t = document.body) {
        var r = {
                utnkG: "#MediaButton",
                IiTpa: function(e) {
                    return e()
                },
                dsBIi: "._aaqy",
                TMWsb: function(e, n) {
                    return e(n)
                }
            },
            o = [];
        return r.TMWsb((function t(i) {
            var c = {
                OTcNg: r.utnkG,
                OwWCe: function(e) {
                    return r.IiTpa(e)
                },
                JTLcK: r.dsBIi,
                Bbviv: function(e, n) {
                    return e !== n
                },
                bUFPS: "Jhrrw",
                ajwbY: function(e, n) {
                    return r.TMWsb(e, n)
                }
            };
            i.getAttribute("aria-label") == e ? o.push(i) : i.children.length && ((i = i.children).forEach = [].forEach, i.forEach((e => {
                c.Bbviv(c.bUFPS, "XcpKV") ? c.ajwbY(t, e) : (i.querySelector(c.OTcNg) || c.OwWCe(c), e.querySelector(c.JTLcK) && !F.querySelector(c.JTLcK).querySelector("#MediaButton") && c.OwWCe(n))
            })))
        }), t), o[0] || !1
    }, getClass = function(e) {
        return document.getElementsByClassName("ehlq8k34")[0]
    },
    function() {
        var e = {
            ZbkDZ: function(e, n) {
                return e !== n
            },
            iywpw: "sZDnG",
            fBmzt: "using loader.to api",
            pdyMf: function(e, n) {
                return e === n
            },
            ympmz: "QaQko",
            mKsbh: "HTML",
            zjwyd: function(e, n) {
                return e(n)
            },
            yTGIE: "ehlq8k34",
            rDWqG: function(e, n) {
                return e < n
            },
            IZpxd: "YMDUy",
            NbZjG: "Appending:",
            PrYyC: function(e, n) {
                return e == n
            },
            nOKLM: "string",
            Xqvpd: function(e, n) {
                return e !== n
            },
            JBUcA: "sqHvd",
            EVKei: function(e, n) {
                return e != n
            },
            DnMmL: "LMEOF",
            lwOdh: function(e, n) {
                return e(n)
            },
            bvuVp: "xwPhO",
            GwoXL: function(e, n) {
                return e < n
            },
            CDUqP: "length",
            fJZgP: function(e, n, t) {
                return e(n, t)
            },
            FuLwu: "Mute",
            XuCiH: "Mute (m)",
            hKtzI: function(e, n) {
                return e < n
            },
            NEAUM: function(e, n) {
                return e === n
            },
            lXuaF: "QdryT",
            sNmio: "IDpoJ",
            bcXQu: "AWtnK",
            spqKX: "cSzSr",
            KtsAo: function(e, n, t) {
                return e(n, t)
            },
            YhVJj: "browse-video-desc",
            pFJip: "data-e2e",
            tmfbv: "Replying to ",
            YwTuz: "Win closed",
            Uvolc: function(e, n, t) {
                return e(n, t)
            },
            ArbnB: function(e, n) {
                return e === n
            },
            nLsDZ: "jGRWn",
            pDKUz: "YxBGx",
            nRDmW: "#app > div.css-14dcx2q-DivBodyContainer.e1irlpdw0 > div:nth-child(4) > div > div.css-1qjw4dg-DivContentContainer.e1mecfx00 > div.css-1stfops-DivCommentContainer.ekjxngi0 > div > div.css-1xlna7p-DivProfileWrapper.ekjxngi4 > div.css-1u3jkat-DivDescriptionContentWrapper.e1mecfx011 > div.css-1nst91u-DivMainContent.e1mecfx01 > div.css-bs495z-DivWrapper.e1mzilcj0",
            IXrfO: "#main-content-video_detail > div > div.css-12kupwv-DivContentContainer.ege8lhx2 > div.css-1senhbu-DivLeftContainer.ege8lhx3 > div.css-1sb4dwc-DivPlayerContainer.eqrezik4 > div.css-3lfoqn-DivDescriptionContentWrapper-StyledDetailContentWrapper.eqrezik15 > div.css-r4nwrj-DivVideoInfoContainer.eqrezik3 > div.css-bs495z-DivWrapper.e1mzilcj0 > div > h1",
            XvRdf: function(e, n, t) {
                return e(n, t)
            },
            OdZkN: "Why this ad?",
            MRpbQ: "Closed ad card",
            EfAxP: "zfLdo",
            yUsOj: function(e, ...n) {
                return e(...n)
            },
            htJZf: function(e, n) {
                return e instanceof n
            },
            jFRjl: function(e, n) {
                return e >= n
            },
            ClaQY: function(e, n) {
                return e - n
            },
            RlnFW: function(e, n) {
                return e / n
            },
            knSmV: function(e, n) {
                return e >= n
            },
            cHJTo: function(e, n) {
                return e <= n
            },
            fxsrs: function(e, n) {
                return e + n
            },
            Tuvtv: function(e, n) {
                return e / n
            },
            RUbta: function(e, n) {
                return e(n)
            },
            YyRSt: function(e, n) {
                return e === n
            },
            LkRQH: function(e) {
                return e()
            },
            jdHSY: function(e, n) {
                return e(n)
            },
            SkuyB: "OpPoS",
            dXqGc: "xQoZL",
            LgoGx: function(e) {
                return e()
            },
            pkhzA: function(e, n) {
                return e || n
            },
            QwZJV: "xkYDV",
            driAX: function(e, n) {
                return e(n)
            },
            CobTW: "win",
            KfYxA: function(e, n) {
                return e(n)
            },
            FrKef: "https://sclouddownloader.net/",
            tRKAe: function(e, n) {
                return e == n
            },
            OKJYO: "pzTGT",
            WRqmJ: "CynVl",
            DHksW: function(e, n) {
                return e !== n
            },
            iHFVn: "kfZQz",
            eMXgC: function(e, n) {
                return e(n)
            },
            lsTQT: "._acaz",
            IWozC: "video.x1lliihq",
            pNHpZ: function(e, n) {
                return e >= n
            },
            uupmO: function(e, n) {
                return e - n
            },
            NVHlN: function(e, n) {
                return e / n
            },
            ksjIX: "qLqih",
            FzDks: "cmUjo",
            SPXKp: function(e, n) {
                return e(n)
            },
            vVOJX: "Go back",
            HfvTm: function(e, n) {
                return e(n)
            },
            PWZpw: "._afxv",
            dGaFE: function(e, n) {
                return e(n)
            },
            QxHgJ: function(e, n) {
                return e(n)
            },
            IAGAE: "Next",
            lfWby: "._afxw",
            ZYnJR: "YupNf",
            zoAld: "video/mp4",
            QImYl: "none",
            dnOCz: ".mp4",
            eHJQU: "blob:",
            LkWwb: ".space-x-1",
            XRADK: function(e, n) {
                return e === n
            },
            HXtTg: "wNkyE",
            GUtRp: "1|0|2|3|4",
            vBSmb: "instaURL",
            aLPsZ: function(e, n, t) {
                return e(n, t)
            },
            WraQk: "#right-controls",
            ehWZC: function(e, n) {
                return e == n
            },
            CFNWi: "title",
            QTHLv: function(e, n, t) {
                return e(n, t)
            },
            TQpKB: "Unmute",
            OJZQO: "Unmute (m)",
            xorEH: function(e, n) {
                return e(n)
            },
            GUPme: "yHeGX",
            Wbyyo: function(e, n, t) {
                return e(n, t)
            },
            RPDnQ: "img",
            qteHT: "alt",
            JXRkY: function(e) {
                return e()
            },
            wwnms: function(e) {
                return e()
            },
            QQDot: function(e) {
                return e()
            },
            iHOVd: function(e) {
                return e()
            },
            rGgRw: function(e) {
                return e()
            },
            UljrS: function(e, n) {
                return e === n
            },
            OtDZa: "tUqZT",
            qaKcm: "bkNTW",
            lRKuT: function(e, n) {
                return e(n)
            },
            RoWiH: function(e) {
                return e()
            },
            MuIFO: function(e, n) {
                return e == n
            },
            sQOav: "clearfix",
            oKgZn: "tik-video",
            RRPRc: "https://www.tiktok.com",
            kNjbm: function(e, n) {
                return e(n)
            },
            VeAaP: ".autoplay",
            IwjUC: "input",
            ydoGM: "GdrIR",
            RMDCY: function(e, n) {
                return e === n
            },
            EPcaP: "focus",
            ENCVJ: "change",
            GtKpu: "blur",
            OoLhL: "Unhandled Post",
            UvAXi: "EEUkj",
            ogTiS: "zhyOk",
            pvbYe: function(e, n, t) {
                return e(n, t)
            },
            ClZbx: "#search-form-input",
            AMFuq: function(e, n) {
                return e === n
            },
            AsRRK: "Found a",
            vzKzU: ".search-form__button",
            rKzuO: function(e, n) {
                return e(n)
            },
            rHnvE: ".button--filled",
            xnAMr: "Provided argument is not a DOM element.",
            RyNwU: "6|4|1|0|3|2|5",
            XAMya: function(e, n, t) {
                return e(n, t)
            },
            uMOIE: "Posted",
            dGDOm: "innerText",
            jmTFp: "Get",
            RtXwl: "click",
            LoraW: ".cell-body.tablecell-visibility.style-scope.ytcp-video-row",
            hsoTd: "Doesnt work yet",
            eAGSj: function(e, n, t, r, o, i, c) {
                return e(n, t, r, o, i, c)
            },
            UTTnl: "PFYpS",
            qhEUW: "BBGbx",
            mvQEf: "#video-list",
            rccXD: "Change?",
            VjoNP: "Found",
            EexJR: "QyWoq",
            cldFk: function(e, n, t) {
                return e(n, t)
            },
            iHsCo: function(e, n, t, r) {
                return e(n, t, r)
            },
            ytcMl: "https://fastdl.app/en",
            xOzvi: function(e, n, t) {
                return e(n, t)
            },
            kWQEk: function(e, n) {
                return e + n
            },
            MbTix: function(e, n) {
                return e !== n
            },
            ebfRz: "usFxU",
            kYKzi: "2|3|4|1|0",
            IgVTF: "button",
            jjWVZ: "MediaButton2",
            stUwR: "Get Videos",
            vyOoI: "Appended buttons man",
            pvPbW: "._aaqy",
            bmiAn: "MediaButton",
            ethcs: "Get Images",
            cHeWQ: "EKmJh",
            RFIKd: "bsSIN",
            ojDpD: ".xh8yej3.x1iyjqo2",
            iLlnL: "#MediaButton",
            VcNjN: function(e, n) {
                return e === n
            },
            rgzRu: "VOD",
            jIVtP: function(e) {
                return e()
            },
            eANtL: "nofOu",
            yvGGk: "tvfwB",
            xwRcW: "/download-sound-track",
            DyqtN: "5|2|3|4|0|7|1|6",
            tjZDI: function(e, n, t) {
                return e(n, t)
            },
            tBNIe: "SCinfo",
            MBygI: "#trackLink",
            VHneX: function(e) {
                return e()
            },
            vQKTu: function(e, n) {
                return e === n
            },
            Duhnv: "ueBIU",
            jTSTs: function(e, n) {
                return e(n)
            },
            jCgWS: "Bruv",
            zJbhY: "#urlInput",
            wUBct: "#submitBtn",
            uSguz: function(e, n, t) {
                return e(n, t)
            },
            VhnQn: function(e, n, t) {
                return e(n, t)
            },
            ccKPl: "AUOjj",
            clPxH: "3|4|6|1|2|5|0",
            LADYT: "EZ url",
            KrbsC: "Got",
            TYyPH: function(e, n) {
                return e == n
            },
            bFgje: "undefined",
            WmWXM: "TimeOut for",
            ZWKWW: ".ytp-volume-area > .ytp-mute-button",
            AIDZE: "fglRZ",
            MXBXC: "NotFound",
            ecWdm: function(e, n) {
                return e(n)
            },
            WUoEa: function(e, n) {
                return e !== n
            },
            FXbMB: "YzRCF",
            hubCN: "6|1|4|0|3|2|5",
            kThDD: function(e, n) {
                return e(n)
            },
            XbKLC: "ZMFaN",
            gXDpc: "veJIH",
            sYDdl: "complete",
            iNQVt: function(e, n) {
                return e(n)
            },
            KHgLU: function(e, n) {
                return e(n)
            },
            vSUMX: "#url",
            UxVNZ: "after url",
            cQSDl: "#progress",
            YKDld: "Error:",
            TVADh: "No id Found",
            mkrCu: function(e, n) {
                return e !== n
            },
            rwnFm: function(e, n) {
                return e === n
            },
            vZMto: "was clicked",
            gsKBe: "was created",
            aZHVD: "video download successful\ncheck downloads folder",
            KlJtR: function(e, n) {
                return e(n)
            },
            qtqQf: "dlbutton",
            bibtg: function(e, n) {
                return e(n)
            },
            SQzbM: function(e, n) {
                return e(n)
            },
            fTRrK: "#downloadBtn",
            zjvkt: function(e, n, t) {
                return e(n, t)
            },
            inKqw: function(e, n, t) {
                return e(n, t)
            },
            AHfcI: function(e, n) {
                return e - n
            },
            kgnFQ: function(e, n) {
                return e(n)
            },
            FnJZu: "#dlbutton",
            xfPoE: "Best Quality Video",
            gvrOV: "#height",
            RGjXb: "iFrameResize function not available",
            aNvBd: "sSrVU",
            wiWpv: "ZXhRJ",
            euEJi: "Title: ",
            YnQVs: function(e, n) {
                return e || n
            },
            Tcwpz: function(e, n, t) {
                return e(n, t)
            },
            XXXFN: function(e, n) {
                return e(n)
            },
            EFEXF: "isclosed",
            LtMje: "#s_input",
            ybYAS: "href",
            RXQXD: function(e, n) {
                return e(n)
            },
            nOoOT: function(e, n) {
                return e(n)
            },
            zORqW: function(e, n, t) {
                return e(n, t)
            },
            yjsFG: function(e) {
                return e()
            },
            XeWpQ: "Converting",
            iGrGk: "#btn-action",
            UCtnY: function(e, n) {
                return e(n)
            },
            FGYAA: "#formatSelect",
            XwYIl: ".clearfix",
            umVBB: "#asuccess",
            fdJEY: function(e, n) {
                return e(n)
            },
            NzrkB: function(e, n) {
                return e !== n
            },
            sTkjj: "Letgb",
            dnbmx: "?!!",
            uMWhX: "Added Button",
            SjwHy: "UaypU",
            TFhhD: function(e, n) {
                return e(n)
            },
            ZvxzI: function(e, n) {
                return e === n
            },
            TWAhd: "NtTMp",
            BOBUv: "nJOWS",
            bpByV: function(e, n) {
                return e instanceof n
            },
            IdLpW: function(e) {
                return e()
            },
            CHTiG: "buttons are gone?!?!",
            zqwHX: function(e, n) {
                return e === n
            },
            Fjfmh: "sRNQw",
            SUomT: "nSbca",
            VmgWx: function(e, n, t) {
                return e(n, t)
            },
            BEIxY: "1080",
            YNrWO: "rCHVm",
            NqzXB: function(e, ...n) {
                return e(...n)
            },
            hSWpU: function(e, n, t, r) {
                return e(n, t, r)
            },
            InTru: ".ScCoreButtonLabel-sc-s7h2b7-0",
            XNiAU: "1080P",
            PonJt: "720P",
            dwkJV: "480P",
            hXsKT: "360P",
            grTkj: function(e, n) {
                return e > n
            },
            jEMOo: "error-text",
            oaqod: function(e, n) {
                return e !== n
            },
            jcNem: "heYId",
            lKAeO: function(e, n) {
                return e === n
            },
            ckovl: function(e, n) {
                return e === n
            },
            TjRLY: "wQrRq",
            VIdiv: function(e, n) {
                return e !== n
            },
            LYYFM: ".Layout-sc-1xcs6mc-0.bMOhzu",
            alzwU: ".bFxzAY",
            ujCTQ: "720",
            xsCIB: "480",
            uIYYV: "360",
            mHJDE: "3|1|0|4|2|5",
            RIbtH: function(e, n) {
                return e(n)
            },
            tGqQu: "#download-720-MP4",
            pJeZo: function(e, n) {
                return e(n)
            },
            HIONu: "form-app-root",
            dXbEY: "nKFGk",
            NKWJs: "ScKMC",
            YTQUJ: function(e, n) {
                return e === n
            },
            IxVJa: "pXqSn",
            hZhMF: function(e, n) {
                return e != n
            },
            lhIiQ: "WnrHT",
            xtUrT: "hYLkI",
            bfLht: function(e, n) {
                return e(n)
            },
            Tinno: "Failed unmuting",
            Dytpw: function(e) {
                return e()
            },
            GEpSX: "body > div.relative.overflow-hidden > main > div > div.px-4.mx-auto.max-w-7xl.sm\\:px-6.lg\\:px-8 > div.mb-6.space-y-3.lg\\:flex.lg\\:items-center.lg\\:justify-between.lg\\:space-y-0 > div.lg\\:flex.lg\\:items-center > p > span:nth-child(1)",
            wtVit: "body > div.relative.overflow-hidden > main > div > div.px-4.mx-auto.max-w-7xl.sm\\:px-6.lg\\:px-8 > div.mb-6.space-y-3.lg\\:flex.lg\\:items-center.lg\\:justify-between.lg\\:space-y-0 > div.lg\\:flex.lg\\:items-center > h2",
            YKZoK: function(e, n) {
                return e(n)
            },
            rvXQX: "Skipping ad :>",
            AdQvs: "HyMKH",
            HRYLT: "QMell",
            YFKjf: "clicked",
            IDYFd: function(e, n) {
                return e(n)
            },
            kUuIs: "#convert",
            VXbrZ: function(e, n) {
                return e(n)
            },
            ybAfM: ".process-button",
            KEpSe: function(e, n) {
                return e(n)
            },
            jNNGm: ".download-button",
            vPMDL: "music",
            QiJSG: "These button dont work on youtube music yet",
            QiRXJ: "span",
            GRLtF: function(e, n) {
                return e == n
            },
            VDFxx: "https://snapsave.io",
            aZdJp: "https://tubemp4.is",
            DBNot: ".mp3",
            DbAEt: "Handled",
            DIvnx: "Get MP3",
            jOPpk: "disabled",
            awtOb: "eyjip",
            HmImi: "Getting video",
            rkSZL: function(e, n) {
                return e(n)
            },
            PZnUF: "https://y2mate.nu/",
            HMGrC: "y2mate.nu",
            ROiUb: "?v=",
            oSWZL: "&s=",
            oUNkQ: "mp3",
            FQWyc: "&useT=",
            DMBtC: function(e, n) {
                return e(n)
            },
            iNXnl: "no-referrer",
            oRyPd: "absolute",
            BTUzJ: function(e, n) {
                return e + n
            },
            FDQNU: "mp4",
            HRTAB: function(e, n) {
                return e || n
            },
            RudXV: "mz.com",
            yDeBs: function(e, n) {
                return e + n
            },
            VxAxA: function(e, n) {
                return e + n
            },
            eRtmQ: function(e, n) {
                return e(n)
            },
            RRaGM: "0HzX",
            drXPr: "&mp4=",
            zAfGL: function(e, n, t, r) {
                return e(n, t, r)
            },
            LLLDC: function(e, n, t, r) {
                return e(n, t, r)
            },
            lmmtM: "/shorts/",
            Vubtu: "https://yt5s.biz/enxj100/",
            JwZvk: function(e, n) {
                return e + n
            },
            nHcXJ: "search_txt",
            sYAQo: "watch?v=",
            TXCtN: "btn-submit",
            uHhRL: function(e) {
                return e()
            },
            fwncJ: function(e) {
                return e()
            },
            BoJIw: "https://savetik.co/en",
            IXebK: "vcAPu",
            RZObv: "AkBZp",
            RYDyG: function(e, n) {
                return e == n
            },
            wMBgp: "https://savetik.co",
            Hhcsl: function(e, n) {
                return e == n
            },
            hGzmp: "jiMtP",
            kOaBL: "szmTD",
            AzZWQ: function(e) {
                return e()
            },
            oSnEW: function(e, n) {
                return e(n)
            },
            pbPlp: function(e, n) {
                return e === n
            },
            WAYoV: "ALzto",
            ZKVIg: "pnVPI",
            kyymN: function(e, n) {
                return e(n)
            },
            jBywN: function(e, n) {
                return e == n
            },
            VuPts: function(e) {
                return e()
            },
            iGStO: function(e, n) {
                return e || n
            },
            GBcjN: function(e, n) {
                return e !== n
            },
            JOVGI: function(e, n) {
                return e === n
            },
            QXdhR: "Aybzf",
            NPsEq: function(e, n) {
                return e == n
            },
            DsVwu: function(e, n) {
                return e === n
            },
            yCGKs: "BeTam",
            uRhdG: "aKkiy",
            NEzWU: "LyNzE",
            uVWld: function(e, n) {
                return e(n)
            },
            fQpJl: function(e, n) {
                return e(n)
            },
            cbvwS: function(e, n) {
                return e || n
            },
            yCHXH: function(e, n, t) {
                return e(n, t)
            },
            qVQSX: "nyast",
            ALtNs: function(e, n) {
                return e(n)
            },
            UfmMf: "path",
            bzSGO: function(e, n, t) {
                return e(n, t)
            },
            mHnoq: function(e, n, t) {
                return e(n, t)
            },
            gHGUY: function(e, n, t) {
                return e(n, t)
            },
            gHCda: function(e, n) {
                return e(n)
            },
            RwcaD: function(e, n, t) {
                return e(n, t)
            },
            UgybG: function(e, n) {
                return e !== n
            },
            jOalB: "MyxtM",
            MDdkE: "vNTYZ",
            NSClr: "RDUMQ",
            YLzDu: "tMXOo",
            ReRtv: function(e, n) {
                return e + n
            },
            ZWHDR: function(e, n) {
                return e(n)
            },
            ZXgTm: "unload",
            JGSEl: function(e, n) {
                return e !== n
            },
            GPRYc: "aDghu",
            MQSfW: "kYUgE",
            GOyjB: "This button is corrently broken",
            kreRM: "Wait...",
            njmwY: function(e, n, t, r, o, i) {
                return e(n, t, r, o, i)
            },
            XAZwH: function(e, n) {
                return e(n)
            },
            rlyap: function(e, n) {
                return e !== n
            },
            cGtAv: "MojCF",
            wULOZ: function(e, n, t, r, o, i) {
                return e(n, t, r, o, i)
            },
            fXpRx: function(e, n) {
                return e(n)
            },
            otLzG: "HeGoK",
            NdPLm: function(e, n, t, r) {
                return e(n, t, r)
            },
            DDbRz: function(e, n) {
                return e(n)
            },
            TpkSi: function(e, n) {
                return e(n)
            },
            hGGRG: function(e, n) {
                return e(n)
            },
            QuejA: function(e, n) {
                return e(n)
            },
            stpYB: "#end",
            dUItz: "#right-content",
            kKUTc: function(e) {
                return e()
            },
            YQVTy: function(e) {
                return e()
            },
            rdkbn: function(e) {
                return e()
            },
            EWfUV: "Added playlist buttons",
            EUrbP: function(e, n, t) {
                return e(n, t)
            },
            UgVLv: function(e, n, t) {
                return e(n, t)
            },
            VCAEE: "FkZsk",
            aqRau: "#header-description",
            pSuvw: function(e) {
                return e()
            },
            DAGwi: "Posted Buttons",
            HpQXl: function(e) {
                return e()
            },
            cAZjF: "Cant append buttons yet",
            bkwWB: function(e) {
                return e()
            },
            btzyI: "jHBhv",
            iSlxq: function(e, n, t) {
                return e(n, t)
            },
            JzSjS: function(e, n) {
                return e !== n
            },
            jSByS: "uqLlv",
            vwgdN: "browse-copy",
            iRDYp: "Cant Append",
            bQXjK: ".e1mecfx011",
            upGZq: function(e, n) {
                return e(n)
            },
            NOFes: "MGrIF",
            qOmZc: "pwMmM",
            Fvgpi: "e13wiwn60",
            qmQmf: function(e, n) {
                return e !== n
            },
            BHtpc: function(e, n, t) {
                return e(n, t)
            },
            aWqiH: "load",
            YRrpf: function(e, n) {
                return e === n
            },
            lXPaO: "DRVMW",
            ycojb: "shorts/",
            hSQGk: function(e) {
                return e()
            },
            xeeRu: function(e) {
                return e()
            },
            pqzaz: "Poasted",
            yLcoa: "iDbwN",
            khUVF: function(e) {
                return e()
            },
            Mokvs: function(e, n) {
                return e == n
            },
            DbYgj: "lYtOp",
            YoQyR: "YEsVl",
            kQdPz: "no there",
            UmdmQ: "Close player page",
            Fvckb: "Open player page",
            CVwSb: "RYbVs",
            eaoSN: "DqtUu",
            VLLxT: "btn-download",
            fwedW: function(e, n) {
                return e(n)
            },
            QfEbA: ".media-heading",
            YHhcG: "KcCeE",
            UtoFd: "TXMPm",
            bVLYR: "No info Preset",
            zfLKf: function(e, n) {
                return e == n
            },
            gKoAz: "#txt-url",
            qMHOJ: "Input Loaded",
            yArPT: "#btn-submit",
            BTszp: function(e, n) {
                return e(n)
            },
            yCjUH: "#video_title",
            qHHrM: "#result",
            BeTQv: "table",
            kjjrx: "#VGHGFf > div > div.Eddif > div:nth-child(2) > button > div.VfPpkd-RLmnJb",
            weOqH: function(e, n) {
                return e !== n
            },
            vsZQD: "YfFBO",
            kazZC: function(e, n) {
                return e(n)
            },
            QKMfC: function(e, n) {
                return e !== n
            },
            ljieA: "tIjqC",
            hAYkO: "eQpQT",
            NNNcV: "#A_downloadUrl",
            tPtgk: "Done",
            xYyKM: "Searched",
            amBPb: function(e, n) {
                return e == n
            },
            YVeQr: "convert1",
            dpxJT: "this",
            lgcVE: "Searching",
            vOMre: "iCyMW",
            fdUKL: "5|1|4|2|3|0",
            UkFve: "loaded",
            lCfuc: function(e, n) {
                return e(n)
            },
            UIyWo: function(e, n) {
                return e(n)
            },
            jbKeD: function(e, n, t) {
                return e(n, t)
            },
            fvTtr: "gbYXA",
            azDHc: "fyCwu",
            OQSlg: function(e, n) {
                return e < n
            },
            juVYl: function(e, n) {
                return e(n)
            },
            exgcI: function(e, n) {
                return e(n)
            },
            YQUNt: function(e, n) {
                return e || n
            },
            vbvVg: function(e, n) {
                return e !== n
            },
            aceYa: "CfemU",
            OKoyZ: "wvbgh",
            odBUL: function(e, n) {
                return e !== n
            },
            DroeL: "zptVw",
            zOUMU: "kixIF",
            nXgGn: "INPUT",
            EeXme: "TEXTAREA",
            mDbQY: "KeyI",
            BjzxP: function(e, n) {
                return e !== n
            },
            tGkbV: "gckKT",
            oYRqQ: function(e, n) {
                return e(n)
            },
            TnTcq: function(e, n) {
                return e(n)
            },
            QeejI: "keypress",
            zxqiF: function(e, n) {
                return e !== n
            },
            KyiPB: "Uwsjq",
            uzbaq: "tJWvx",
            lnhsL: "collapse-frame",
            wOceW: "function",
            GloZg: "Iframe is fully loaded",
            bmUSZ: function(e, n) {
                return e(n)
            },
            qewqc: function(e, n, t, r, o, i, c) {
                return e(n, t, r, o, i, c)
            },
            kQSVC: function(e, n) {
                return e + n
            },
            RHkex: " - ",
            ZAnRa: "---",
            nxQTV: "1rem",
            BScAX: function(e, n) {
                return e(n)
            },
            OPgQM: function(e, n) {
                return e != n
            },
            iJlDa: "AOzWv",
            ClszP: "xqWtG",
            OoEBK: "video",
            dBdBQ: "#secondary.ytd-watch-flexy",
            drAcK: "https://loader.to/api/card2/?url=",
            ihcjY: "QddRb",
            CuUCC: "#cardApiIframe",
            dcboe: "Added That Thing",
            jRDzv: "yt-button-view-model#dismiss-button",
            ZQDBJ: function(e, n) {
                return e && n
            },
            rkvil: function(e, n) {
                return e !== n
            },
            QHImZ: "ddQIM",
            iYMcU: "Muted ad",
            Yzbik: "ujFjn",
            Dnsak: "Unmuted video",
            gNkfY: function(e, n) {
                return e !== n
            },
            zukbJ: "OieMl",
            BPGCZ: "#ytd-player",
            NtJav: "nXtXV",
            QpinI: "jhZNZ",
            MsrOi: function(e, n) {
                return e != n
            },
            TAJrR: function(e, n) {
                return e && n
            },
            JhQBh: "Fixed playBack",
            LbUBM: "ytp-ad-overlay-close-button",
            mLmCo: ".yt-spec-button-shape-next",
            bjijx: "watch",
            gyGlb: "https://onlymp3.app",
            QkBvS: "/watch?=",
            PXHuk: function(e, n) {
                return e == n
            },
            WBKYq: "soundcloud.com",
            cylCG: function(e, n) {
                return e == n
            },
            ppjEI: "studio.youtube.com",
            omOYI: "Fofrg",
            ybOQJ: function(e, n) {
                return e == n
            },
            qriLp: "www.instagram.com",
            kzEWt: "WxRwv",
            OzFXp: "CzIRD",
            LXAeE: "Insta ballz",
            HClQe: "sclouddownloader.net",
            KATnf: "bNjkv",
            akFMV: function(e, n) {
                return e != n
            },
            hrvhK: function(e, n) {
                return e(n)
            },
            UiPzr: "updated",
            Ufeox: "useT",
            vGath: function(e, n) {
                return e + n
            },
            abnru: function(e, n) {
                return e + n
            },
            pkGnv: "qdownloader.cc",
            tJhTJ: "snapsave.io",
            DTcid: "emtTN",
            ejgUg: function(e, n) {
                return e == n
            },
            syrWo: "SxQHe",
            AzDhQ: "LsXZL",
            aLZcL: "www.twitch.tv",
            eXDxl: "clip",
            xszwq: "User isnt wathcing a clip",
            ltsLl: "User is Watching a CLip",
            ubjtS: function(e, n) {
                return e == n
            },
            DlXzN: "clipr.xyz",
            vbUgA: "tubemp4.is",
            AAQiT: "Get MP4",
            RgUvH: "white",
            XqGUU: "tt1",
            okoFa: "tiktok",
            VOPTO: "onlymp3.app",
            GoUNW: "onlymp3.to",
            jfgAQ: "KbKyq",
            xKeMp: function(e, n, t) {
                return e(n, t)
            },
            XtCmv: "Getting MP3",
            DvORq: function(e, n, t) {
                return e(n, t)
            },
            LszvT: "www.yt2conv.com",
            zFWKz: "Getting MP4",
            EFQZf: function(e, n, t) {
                return e(n, t)
            },
            pfngJ: function(e, n, t) {
                return e(n, t)
            },
            JyPkY: "sss.instasaverpro.com",
            zBquk: "NO info Preset",
            qkMOQ: "savetik.co",
            nDQkS: "TbZnq",
            XoCqv: "Added MiniPlayer Toggle with I",
            RODGY: function(e, n, t) {
                return e(n, t)
            },
            fabjC: "loader.to",
            geYum: "/api/",
            mHGBm: "trustedHTMLPolicy",
            uvsvE: "text/css",
            RkzHn: function(e, n) {
                return e(n)
            },
            QuQbk: "iframe",
            yxoRF: "cardApiIframe",
            GwpMa: "100%",
            uympM: "true",
            XtRUe: "border: none",
            iPsPw: "https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.9/iframeResizer.min.js"
        };
        class n {
            static get br() {
                if (e.ZbkDZ("sZDnG", e.iywpw)) {
                    for (let e in arguments[1]) arguments[0].setAttribute(e, arguments[1][e]);
                    return arguments[0]
                }
                return new n("br")
            }
            constructor(t, r) {
                this.element = t.constructor.name.includes(e.mKsbh) && t || function() {
                    var t = {
                        slsYA: e.fBmzt
                    };
                    for (let r in arguments[1]) e.pdyMf("QaQko", e.ympmz) ? arguments[0].setAttribute(r, arguments[1][r]) : n.warn(t.slsYA);
                    return arguments[0]
                }(document.createElement(arguments[0]), arguments[1])
            }
            style(e) {
                for (let n in e) this.element.style[n] = e[n];
                return this
            }
            append(n, ...t) {
                var r = {
                    GMHUX: function(n, t) {
                        return e.zjwyd(n, t)
                    },
                    eEAjX: function(n, t) {
                        return e.zjwyd(n, t)
                    },
                    kEIRO: e.yTGIE
                };
                this.element.append(n.element || n), console.log("T:", {
                    targets: t,
                    fe: t && t.forEach
                });
                for (let n = 0; e.rDWqG(n, t.length); n++)
                    if (e.ZbkDZ(e.IZpxd, "YMDUy")) i(!1, r.GMHUX(c, r.eEAjX(u, r.kEIRO) ? r.GMHUX(l, r.kEIRO).innerText : a.href));
                    else {
                        let r = t[n];
                        console.log(e.NbZjG, {
                            element: r,
                            target: this
                        }), this.element.append(r.element || r)
                    }
                return this
            }
            appendTo(n) {
                return (n.element || e.PrYyC(typeof n, e.nOKLM) ? document.querySelector(n) : n).append(this.element), this
            }
            on(n, o) {
                if (!e.Xqvpd(e.JBUcA, e.JBUcA)) return this.element["on" + n] = o, this;
                t.error("Failed to download video:", r)
            }
            set(e, n) {
                return this.element[e] = n, this
            }
            remove() {
                return this.element.remove(), this
            }
            get() {
                return this.element[arguments[0]]
            }
            get children() {
                var l = {
                    sgeFW: function(e, n) {
                        return e === n
                    },
                    xFoCx: e.DnMmL,
                    FmnDa: function(n, t) {
                        return e.lwOdh(n, t)
                    },
                    MYDrz: function(n, t) {
                        return e.pdyMf(n, t)
                    },
                    Xzwyb: e.bvuVp,
                    sunkJ: function(n, t) {
                        return e.GwoXL(n, t)
                    },
                    mOqLc: e.CDUqP,
                    cgGqf: function(e, n, t) {
                        return e(n, t)
                    },
                    uGEDr: function(n, t, r) {
                        return e.fJZgP(n, t, r)
                    },
                    xtKwT: e.FuLwu,
                    iPKRD: e.XuCiH,
                    ptJpA: function(n, t) {
                        return e.hKtzI(n, t)
                    },
                    qxfde: function(n, t) {
                        return e.NEAUM(n, t)
                    },
                    aBfXH: e.lXuaF,
                    clQue: e.sNmio,
                    wCFrO: "Caught",
                    oUXPI: function(e) {
                        return e()
                    },
                    GxJbo: e.bcXQu
                };
                return e.pdyMf(e.spqKX, "cSzSr") ? new class {
                    constructor(e) {
                        var n = {
                            mztsP: function(e, n) {
                                return l.FmnDa(e, n)
                            }
                        };
                        if (l.MYDrz(l.Xzwyb, l.Xzwyb)) {
                            for (var o = 0; l.sunkJ(o, e.length); o += 1) this[o] = e[o];
                            Object.defineProperty(this, l.mOqLc, {
                                get: function() {
                                    return l.sgeFW("LMEOF", l.xFoCx) ? e.length : new r((e => c(e, u)))
                                }
                            }), Object.freeze(this)
                        } else n.mztsP(t, r)
                    }
                    item(n) {
                        return e.EVKei(this[n], null) ? this[n] : null
                    }
                    namedItem(e) {
                        for (var n = {
                                aYCLN: function(e, n, t) {
                                    return l.cgGqf(e, n, t)
                                },
                                pWGIA: "title",
                                eqWPr: function(e, n, t) {
                                    return l.uGEDr(e, n, t)
                                },
                                BgmqC: l.xtKwT,
                                xvUvO: l.iPKRD
                            }, t = 0; l.ptJpA(t, this.length); t += 1)
                            if (l.qxfde(this[t].id, e) || l.MYDrz(this[t].name, e)) {
                                if (!l.qxfde(l.aBfXH, l.clQue)) return this[t];
                                (n.aYCLN(r, "Mute", n.pWGIA) && n.eqWPr(o, n.BgmqC, "title")[0] || n.eqWPr(i, n.xvUvO, "title")).click()
                            }
                        return null
                    }
                    get toArray() {
                        var e = {
                            kpPCQ: l.wCFrO,
                            UmdlU: function(e) {
                                return l.oUXPI(e)
                            }
                        };
                        if ("AWtnK" === l.GxJbo) return [...this]; {
                            f.log(e.kpPCQ, d);
                            let n = m.download,
                                t = h.href;
                            p = {
                                id: new v(g.href).searchParams.get("v"),
                                href: t,
                                title: n
                            }, (w || E).postMessage(M, "*"), e.UmdlU(A)
                        }
                    }
                }([...this.element.children]) : (this.title.body = n, this)
            }
        }

        function t() {
            var t = {
                yxzFK: function(n, t, r) {
                    return e.Uvolc(n, t, r)
                }
            };
            try {
                if (e.ArbnB(e.nLsDZ, e.nLsDZ)) return document.querySelector("#app > div.css-14dcx2q-DivBodyContainer.e1irlpdw0 > div:nth-child(4) > div > div.css-1qjw4dg-DivContentContainer.e1mecfx00 > div.css-1stfops-DivCommentContainer.ekjxngi0 > div > div.css-1xlna7p-DivProfileWrapper.ekjxngi4 > div.css-1u3jkat-DivDescriptionContentWrapper.e1mecfx011 > div.css-1nst91u-DivMainContent.e1mecfx01 > div.css-bs495z-DivWrapper.e1mzilcj0 > div > div.css-1d7krfw-DivOverflowContainer.e1mzilcj5 > h1").innerText.replace(e.tmfbv, "");
                e.KtsAo(c, (function() {
                    d.value = m, h(), t.yxzFK(p, v, 1e3)
                }), {
                    callback() {}
                })
            } catch {
                if (e.NEAUM("YKMiG", "PePXY")) try {
                    return l.querySelector("#app > div.css-14dcx2q-DivBodyContainer.e1irlpdw0 > div:nth-child(4) > div > div.css-1qjw4dg-DivContentContainer.e1mecfx00 > div.css-1stfops-DivCommentContainer.ekjxngi0 > div > div.css-1xlna7p-DivProfileWrapper.ekjxngi4 > div.css-1u3jkat-DivDescriptionContentWrapper.e1mecfx011 > div.css-1nst91u-DivMainContent.e1mecfx01 > div.css-bs495z-DivWrapper.e1mzilcj0").innerText.replace("Replying to ", "")
                } catch (n) {
                    return d(e.YhVJj, "data-e2e") ? e.KtsAo(m, e.YhVJj, e.pFJip).innerText : h.querySelector("#main-content-video_detail > div > div.css-12kupwv-DivContentContainer.ege8lhx2 > div.css-1senhbu-DivLeftContainer.ege8lhx3 > div.css-1sb4dwc-DivPlayerContainer.eqrezik4 > div.css-3lfoqn-DivDescriptionContentWrapper-StyledDetailContentWrapper.eqrezik15 > div.css-r4nwrj-DivVideoInfoContainer.eqrezik3 > div.css-bs495z-DivWrapper.e1mzilcj0 > div > h1").innerText.replace(e.tmfbv, "")
                } else try {
                    if (!e.pdyMf(e.pDKUz, "lUDyP")) return document.querySelector(e.nRDmW).innerText.replace("Replying to ", "");
                    n.log(e.YwTuz)
                } catch (n) {
                    return e.Uvolc(G, e.YhVJj, e.pFJip) ? e.Uvolc(G, "browse-video-desc", e.pFJip).innerText : document.querySelector(e.IXrfO).innerText.replace(e.tmfbv, "")
                }
            }
        }

        function r() {
            var n = {
                CEQmj: function(n, t, r) {
                    return e.XvRdf(n, t, r)
                }
            };
            get_aria_label(e.OdZkN).click(), setTimeout((() => {
                var e = {
                    BfkgT: "#VGHGFf > div > div.Eddif > div:nth-child(2) > button > div.VfPpkd-RLmnJb"
                };
                document.querySelector("#yDmH0d > c-wiz > div > div > div:nth-child(2) > div.LLEp8b > div > div.rTq3hb > div:nth-child(1) > div > div.ofmULb > div:nth-child(2) > div > button").click(), n.CEQmj(setTimeout, (() => {
                    document.querySelector(e.BfkgT).click()
                }), 1e3)
            }), 1e3)
        }
        _element = _e = n, setElement2 = function(e) {
            return e.match(/(?<host>https?\:\/\/www\.tiktok\.com)\/(?<username>@[^\/]+)\/video\/(?<videoID>\d+)/i).groups
        };
        var o = e.gyGlb,
            i = e.QkBvS;

        function c(n, o, i = !1) {
            var c = addEventListener(n, ((...n) => {
                var u = {
                    FfJXU: e.MRpbQ
                };
                e.NEAUM(e.EfAxP, e.EfAxP) ? (e.yUsOj(o, ...n), i && removeEventListener(c)) : (t.click(), r.log(u.FfJXU))
            }), !0);
            return c
        }

        function u(n) {
            e.pdyMf(typeof jQuery, "function") && e.htJZf(n, jQuery) && (n = n[0]);
            var t = n.getBoundingClientRect();
            return e.jFRjl(t.top, e.ClaQY(0, e.RlnFW(window.innerHeight || document.documentElement.clientHeight, 2))) && e.knSmV(t.left, 0) && e.cHJTo(t.bottom, e.fxsrs(window.innerHeight || document.documentElement.clientHeight, e.Tuvtv(window.innerHeight || document.documentElement.clientHeight, 2))) && e.cHJTo(t.right, window.innerWidth || document.documentElement.clientWidth)
        }

        function l(n, {
            callback: o,
            int: i
        }) {
            var c = {
                zBRLL: "#right-content",
                MAWcv: function(n, t) {
                    return e.YyRSt(n, t)
                },
                XWcke: "xkgGz",
                Czfxh: function(n) {
                    return e.LkRQH(n)
                },
                EmYjX: function(e) {
                    return e()
                },
                pyoJu: function(n, t) {
                    return e.jdHSY(n, t)
                }
            };
            !o && (o = function() {}), !i && (i = 100), console.log({
                f: n,
                callback: o,
                int: i
            });
            try {
                if (e.SkuyB !== e.dXqGc) return e.LkRQH(n), void e.LgoGx(o);
                e.RUbta(t, "Input was not Found"), r.warn("?!!")
            } catch (e) {}
            var u = e.fJZgP(setInterval, (() => {
                var e = {
                    tzijJ: "#end",
                    MXMuc: c.zBRLL
                };
                try {
                    if (!c.MAWcv(c.XWcke, c.XWcke)) return t.querySelector(e.tzijJ) || r.querySelector(e.MXMuc);
                    c.Czfxh(n), c.EmYjX(o), c.pyoJu(clearInterval, u)
                } catch (e) {}
            }), e.pkhzA(i, 100));
            return u
        }

        function a(n) {
            return e.pdyMf(n.offsetParent, null)
        }

        function s(e) {
            return e.parentNode
        }

        function f() {
            var n = {
                fMKTI: function(e, n) {
                    return e instanceof n
                },
                mWuHK: function(n, t) {
                    return e.pNHpZ(n, t)
                },
                hVQTv: function(n, t) {
                    return e.uupmO(n, t)
                },
                FaPKa: function(n, t) {
                    return e.NVHlN(n, t)
                },
                LOBMD: function(n, t) {
                    return e.cHJTo(n, t)
                },
                ZxnwO: function(n, t) {
                    return e.fxsrs(n, t)
                }
            };
            if (e.DHksW(e.ksjIX, e.FzDks)) return e.SPXKp(get_aria_label, "Go back") && e.KfYxA(get_aria_label, e.vVOJX).click ? e.HfvTm(get_aria_label, e.vVOJX) : document.querySelector(e.PWZpw);
            "function" == typeof h && n.fMKTI(p, v) && (Q = V[0]);
            var t = E.getBoundingClientRect();
            return n.mWuHK(t.top, n.hVQTv(0, n.FaPKa(M.innerHeight || A.documentElement.clientHeight, 2))) && n.mWuHK(t.left, 0) && n.LOBMD(t.bottom, n.ZxnwO(L.innerHeight || D.documentElement.clientHeight, (G.innerHeight || U.documentElement.clientHeight) / 2)) && n.LOBMD(t.right, j.innerWidth || Y.documentElement.clientWidth)
        }

        function d() {
            return e.dGaFE(get_aria_label, "Next") && e.QxHgJ(get_aria_label, e.IAGAE).click ? get_aria_label(e.IAGAE) : document.querySelector(e.lfWby)
        }

        function m() {
            try {
                return document.querySelector("div.x78zum5.xdt5ytf.x1iyjqo2.xs83m0k.x2lwn1j.x1odjw0f.x1n2onr6.x9ek82g.x6ikm8r.xdj266r.x11i5rnm.x4ii5y1.x1mh8g0r.xexx8yu.x1pi30zi.x18d9i69.x1swvt13 > ul > div:nth-child(3) > div > div").children[0].innerText.split("\n")[1]
            } catch {
                return [...document.querySelectorAll(".xt0psk2.xvs91rp.xo1l8bm.x5n08af.x18hxmgj")].pop().innerText.split("\n")[0]
            }
        }

        function h() {
            var n = {
                lqxYh: e.LkWwb,
                qpTgT: ".flex.items-center.space-x-4",
                XfhQx: function(n, t) {
                    return e.XRADK(n, t)
                },
                KJGbe: e.HXtTg,
                TLBwb: e.GUtRp,
                iLTXy: function(e, n) {
                    return e(n)
                },
                erFjR: e.dnOCz,
                VpmrM: e.vBSmb
            };
            if (location.href.includes("reel")) {
                let r = open("https://fastdl.app/en", location.href, "width=400,height=500");
                var t = e.aLPsZ(GM_addValueChangeListener, "instaURL", (function(e, o, i, u) {
                    var l = {
                        xaaTC: n.lqxYh,
                        KIoWg: n.qpTgT
                    };
                    if (i) {
                        if (n.XfhQx(n.KJGbe, "BRPkv")) return [...c.querySelectorAll(l.KIoWg)].filter((e => d(e)[0])).filter((e => d(e)[0].href.includes("clips.twitchcdn.net"))).forEach((e => {
                            d[e.querySelector(l.xaaTC).innerText.replace("p", "")] = m(e)[0].href
                        })), f;
                        for (var a = n.TLBwb.split("|"), s = 0;;) {
                            switch (a[s++]) {
                                case "0":
                                    r.close();
                                    continue;
                                case "1":
                                    console.log("Got", {
                                        a: e,
                                        b: o,
                                        c: i,
                                        d: u
                                    });
                                    continue;
                                case "2":
                                    n.iLTXy(GM_removeValueChangeListener, t);
                                    continue;
                                case "3":
                                    downloadFile_(i, document.title + n.erFjR);
                                    continue;
                                case "4":
                                    GM_setValue(n.VpmrM, null);
                                    continue
                            }
                            break
                        }
                    }
                }))
            }
        }
        async function p() {
            for (var n = {
                    TDVhz: function(e) {
                        return e()
                    },
                    SgCRC: function(n) {
                        return e.LkRQH(n)
                    },
                    ptiak: function(n, t) {
                        return e.xorEH(n, t)
                    },
                    iMhVy: function(n, t) {
                        return e.DHksW(n, t)
                    },
                    YyOSY: e.GUPme,
                    vgLGb: function(e, n, t) {
                        return e(n, t)
                    },
                    xuFlg: function(n, t, r) {
                        return e.Wbyyo(n, t, r)
                    },
                    MLzBK: e.RPDnQ,
                    vbOIc: e.qteHT
                }, t = e => new Promise((n => setTimeout(n, e))), r = new Set, m = {}; e.JXRkY(f);) {
                if (await e.RUbta(t, 100), !f()) {
                    await t(1e3);
                    break
                }
                e.wwnms(f).click()
            }[...e.LgoGx(getInstalImages)].forEach((e => {
                if (n.iMhVy(n.YyOSY, "yHeGX")) n.TDVhz(o), n.SgCRC(i), n.ptiak(c, u);
                else {
                    let t = n.vgLGb(findhref2, e, "img")[0];
                    r.add([t.src, t.getAttribute("alt")])
                }
            })), d().click();
            try {
                e.JXRkY(d).click()
            } catch (e) {}
            for (; e.QQDot(d);) {
                await e.yUsOj(t, 300), [...e.iHOVd(getInstalImages)].forEach((e => {
                    let t = n.xuFlg(findhref2, e, n.MLzBK)[0];
                    r.add([t.src, t.getAttribute(n.vbOIc)])
                }));
                try {
                    e.rGgRw(d).click()
                } catch (e) {}[...r].length
            }
            for (;;)
                if (e.UljrS(e.OtDZa, e.qaKcm))(e.dGaFE(c, e.WraQk) && e.ehWZC(e.QxHgJ(u, e.WraQk).querySelectorAll("path")[0].getAttribute("d"), l) && e.XvRdf(a, "Mute", e.CFNWi)[0] || e.QTHLv(s, e.TQpKB, e.CFNWi) || e.QTHLv(f, e.OJZQO, e.CFNWi)).click();
                else {
                    if (await e.lRKuT(t, 100), !e.RoWiH(f)) break;
                    f().click()
                }[...r].forEach((e => {
                m[e[0]] = e[1]
            })), (r = Object.keys(m).map((e => ({
                src: e,
                name: m[e]
            })))).forEach((e => {
                var n = new URL(e.src).pathname.split(".").pop();
                M(e.src, e.name + "." + n)
            })), console.log("done", r)
        }

        function v() {
            p().then(console.log, console.warn)
        }
        setElement = function(n) {
            var t = {
                lRXFp: function(n, t, r) {
                    return e.Uvolc(n, t, r)
                }
            };
            if (e.QwZJV == e.QwZJV) return !(!e.zjwyd(String, n).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/) || 11 != e.driAX(String, n).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/)[8].length) && e.zjwyd(String, n).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/)[8];
            var r = new i(c.src).pathname.split(".").pop();
            t.lRXFp(u, l.src, a.name + "." + r)
        }, findhref2 = function(t, m) {
            var h = {
                    Adiii: e.CobTW,
                    xchTI: function(n, t) {
                        return e.KfYxA(n, t)
                    },
                    RAstS: function(n, t, r) {
                        return e.XvRdf(n, t, r)
                    },
                    XacRl: e.FrKef,
                    skBqG: function(n, t) {
                        return e.YyRSt(n, t)
                    },
                    SltOL: function(n, t) {
                        return e.tRKAe(n, t)
                    },
                    gMEIi: e.nOKLM,
                    zycID: function(n, t) {
                        return e.pkhzA(n, t)
                    },
                    cQiOi: e.OKJYO,
                    QQJBN: function(e, n) {
                        return e !== n
                    },
                    fTfjs: e.WRqmJ,
                    YAqsN: function(n, t) {
                        return e.DHksW(n, t)
                    },
                    dlRzS: e.iHFVn,
                    MxmRv: "zcqWm"
                },
                p = [];
            return e.eMXgC((function e(t) {
                var v = {
                    dhNdx: function(e, n) {
                        return h.skBqG(e, n)
                    },
                    FzyVA: "dxWkJ",
                    UkscI: function(e, n) {
                        return h.xchTI(e, n)
                    },
                    iGhgq: function(e, n) {
                        return h.SltOL(e, n)
                    },
                    stsRY: h.gMEIi
                };
                if (h.SltOL(t.tagName.toLowerCase(), h.zycID(m, "a"))) p.push(t), t.children.length && (h.skBqG("pzTGT", h.cQiOi) ? ((t = t.children).forEach = [].forEach, t.forEach((t => {
                    if (!v.dhNdx(v.FzyVA, v.FzyVA)) return n.querySelector("div.x78zum5.xdt5ytf.x1iyjqo2.xs83m0k.x2lwn1j.x1odjw0f.x1n2onr6.x9ek82g.x6ikm8r.xdj266r.x11i5rnm.x4ii5y1.x1mh8g0r.xexx8yu.x1pi30zi.x18d9i69.x1swvt13 > ul > div:nth-child(3) > div > div").children[0].innerText.split("\n")[1];
                    v.UkscI(e, t)
                }))) : r.push(["w" + o, h.Adiii + i]));
                else {
                    if (h.QQJBN("CynVl", h.fTfjs)) return (i.element || v.iGhgq(typeof c, v.stsRY) ? u.querySelector(l) : a).append(this.element), this;
                    if (t.children.length) {
                        if (!h.YAqsN(h.dlRzS, h.MxmRv)) {
                            var g = {
                                lyjmN: function(e) {
                                    return e()
                                },
                                YMsuw: function(e, n, t) {
                                    return h.RAstS(e, n, t)
                                },
                                FRdym: h.XacRl
                            };
                            return void(i = function() {
                                s("SC", g.lyjmN(f));
                                var e = g.YMsuw(d, g.FRdym, "SC");
                                e.onclose = function(n) {
                                    e.log("Win closed")
                                }
                            })
                        }(t = t.children).forEach = [].forEach, t.forEach((n => {
                            h.xchTI(e, n)
                        }))
                    }
                }
            }), t), p
        }, getInstalImages = function() {
            return document.querySelectorAll(e.lsTQT)
        }, getInstaVideo = function() {
            return document.querySelector(e.IWozC)
        }, downloadVideoFromBlob = function(n, o) {
            var i = {
                hoheA: function(e, n) {
                    return e(n)
                },
                qKQWc: function(n, t) {
                    return e.Xqvpd(n, t)
                },
                jaCHM: e.ZYnJR,
                LOnnH: e.zoAld,
                zQFRc: e.QImYl,
                cVOLh: function(e, n) {
                    return e + n
                },
                HOLgF: e.dnOCz
            };
            if (n && n.src && n.src.startsWith(e.eHJQU)) {
                const e = n.captureStream(),
                    c = new MediaRecorder(e),
                    u = [];
                c.ondataavailable = e => {
                    i.qKQWc(i.jaCHM, i.jaCHM) ? i.hoheA(t, r) : e.data.size > 0 && (u.push(e.data), console.log(e.data))
                }, c.onstop = () => {
                    const e = new Blob(u, {
                            type: i.LOnnH
                        }),
                        n = URL.createObjectURL(e),
                        t = document.createElement("a");
                    t.style.display = i.zQFRc, t.href = n, t.download = i.cVOLh(o, i.HOLgF), document.body.appendChild(t), t.click(), document.body.removeChild(t), URL.revokeObjectURL(n)
                }, c.start(), setTimeout((() => {
                    c.stop()
                }), 1e3 * n.duration)
            } else console.error("Invalid video element or source.")
        }, console.log("A?");
        const g = e => new Promise((n => setTimeout(n, e)));
        if (e.PXHuk(document.domain, "fastdl.app")) onload = async function() {
            var o = {
                etOwM: function(n, t) {
                    return e.MuIFO(n, t)
                },
                yJAts: "Handled",
                LbUPu: function(e, n, t, r, o) {
                    return e(n, t, r, o)
                },
                ekwGg: "Found",
                MwTkE: e.sQOav,
                YJGhV: function(e, n) {
                    return e(n)
                },
                NYapb: e.oKgZn,
                HbHHp: function(n, t) {
                    return e.tRKAe(n, t)
                },
                XbQBa: e.RRPRc,
                bRQvX: function(n, t) {
                    return e.pkhzA(n, t)
                },
                OyPWC: function(n, t) {
                    return e.Xqvpd(n, t)
                },
                FdFHk: "KKzLm",
                YMgDN: function(n, t) {
                    return e.kNjbm(n, t)
                },
                lzrRo: "#header-description",
                pIsLl: function(e, n) {
                    return e(n)
                },
                ynyRo: e.VeAaP,
                jNwzN: function(n, t) {
                    return e.YyRSt(n, t)
                },
                RsmBq: e.IwjUC,
                gPmaR: function(n, t) {
                    return e.ArbnB(n, t)
                },
                QZDxZ: e.ydoGM,
                zbQze: function(n, t) {
                    return e.RMDCY(n, t)
                },
                dOVOj: "hAIbb",
                YUxIT: e.EPcaP,
                IvXJU: e.ENCVJ,
                Otdjn: e.GtKpu,
                iIzhm: function(e, n, t, r, o) {
                    return e(n, t, r, o)
                },
                SYHjT: function(e, n, t) {
                    return e(n, t)
                },
                yMmCV: e.OoLhL
            };
            if (e.Xqvpd(e.UvAXi, e.ogTiS)) {
                const h = {
                    url: name,
                    input: null
                };
                var i = !1;
                for (e.pvbYe(setTimeout, (() => {
                        i = !0
                    }), 2e4); !document.querySelector(e.ClZbx);)
                    if (e.AMFuq("KvdQr", "KvdQr")) {
                        if (await g(0), i) throw "Cant find input"
                    } else if (o.etOwM(f.origin, d)) {
                    var {
                        data: {
                            s: c,
                            url: u,
                            title: s
                        }
                    } = L;
                    D.log(o.yJAts, {
                        s: c,
                        url: u,
                        title: s
                    }, G), c ? o.SYHjT(Y, Q, 100) : o.iIzhm(V, u, s, null, O)
                } else M.log(o.yMmCV, A);
                h.input = document.querySelector(e.ClZbx), console.log(e.AsRRK),
                    function(e, i) {
                        var c = {
                            PpwEz: o.lzrRo,
                            KZgLP: function(e, n) {
                                return o.pIsLl(e, n)
                            },
                            IBaWj: o.ynyRo,
                            rrgVQ: function(e, n) {
                                return o.pIsLl(e, n)
                            },
                            fPyxd: function(e, n) {
                                return o.jNwzN(e, n)
                            },
                            lKAxQ: "xguay",
                            zwgee: o.RsmBq,
                            XwCvK: function(e, n) {
                                return o.gPmaR(e, n)
                            },
                            lxWyU: "oqMaX",
                            zSZXv: o.QZDxZ,
                            DGoWK: function(e) {
                                return e()
                            }
                        };
                        if (o.zbQze(o.dOVOj, o.dOVOj)) {
                            [o.YUxIT, o.RsmBq, o.IvXJU, o.Otdjn].forEach((n => {
                                if (!c.fPyxd("xguay", c.lKAxQ)) return this.element[t] = r, this; {
                                    let t = new Event(n, {
                                        bubbles: !0,
                                        isTrusted: !0
                                    });
                                    if (e["on" + n] && e["on" + n](t), c.fPyxd(n, c.zwgee)) {
                                        if (c.XwCvK(c.lxWyU, c.zSZXv)) return !(![...l.querySelectorAll(c.PpwEz)].filter(a).filter((e => !v()))[0] && !c.KZgLP(f, c.IBaWj)) && ([...d.querySelectorAll("#header-description")].filter(m).filter((e => !v()))[0] || c.rrgVQ(p, ".autoplay"));
                                        e.value = i
                                    }
                                    e.dispatchEvent(t)
                                }
                            }))
                        } else c.DGoWK(n).click()
                    }(h.input, h.url), document.querySelector(e.vzKzU).click(), e.KtsAo(GM_setValue, e.vBSmb, await e.rKzuO((async function(e) {
                        if (!o.OyPWC(o.FdFHk, o.FdFHk)) {
                            for (; !document.querySelector(e);) await o.YMgDN(g, 0);
                            return document.querySelector(e)
                        } {
                            var n = {
                                Qqerp: function(e, n) {
                                    return o.etOwM(e, n)
                                },
                                BuCeJ: o.yJAts,
                                tkynB: function(e, n, t, r, i) {
                                    return o.LbUPu(e, n, t, r, i)
                                },
                                ckNYU: function(e, n, t) {
                                    return e(n, t)
                                }
                            };
                            v.log(o.ekwGg);
                            let e = g.getElementsByClassName(o.MwTkE)[0].innerText,
                                t = o.YJGhV(w, E.getElementsByClassName(o.NYapb)[0]).map((e => e.href)),
                                r = {
                                    title: e,
                                    links: t,
                                    mp4: o.HbHHp(M, 1),
                                    info: A(L)
                                },
                                i = o.XbQBa;
                            D = function(e) {
                                if (n.Qqerp(e.origin, i)) {
                                    var {
                                        data: {
                                            s: t,
                                            url: r,
                                            title: o
                                        }
                                    } = e;
                                    B.log(n.BuCeJ, {
                                        s: t,
                                        url: r,
                                        title: o
                                    }, e), t ? n.ckNYU(Z, re, 100) : n.tkynB(oe, r, o, null, ie)
                                } else K.log("Unhandled Post", e)
                            }, o.bRQvX(O, P).postMessage(r, "*")
                        }
                    }), e.rHnvE).then((e => e.href)))
            } else this[d[0]] = o.YMgDN(m, h[p[1]]), !v[g[1]] && !w && (G = !0, U = j[1], Y.log(Q))
        };
        else {
            if (document.domain == e.WBKYq) return void(getSoundCloadI = function() {
                e.Wbyyo(_setV, "SC", e.LgoGx(getSoundCloudUrl)), e.KtsAo(open, "https://sclouddownloader.net/", "SC").onclose = function(n) {
                    console.log(e.YwTuz)
                }
            });
            if (e.cylCG(document.domain, e.ppjEI)) {
                if (e.vQKTu(e.omOYI, e.omOYI)) return void
                function() {
                    var t = {
                        XquTO: e.RyNwU,
                        gOvQb: function(n, t, r) {
                            return e.XAMya(n, t, r)
                        },
                        iSbct: e.uMOIE,
                        yLhVQ: function(n) {
                            return e.iHOVd(n)
                        },
                        BgPPU: e.dGDOm,
                        HiYQI: e.jmTFp,
                        riJNE: e.RtXwl,
                        ivVJt: "SixzM",
                        JYEtb: function(e, n) {
                            return e == n
                        },
                        ApeeQ: e.LoraW,
                        bQuCG: "Public",
                        XqKFM: function(n, t) {
                            return e.SPXKp(n, t)
                        },
                        gtiYK: e.hsoTd,
                        EwPvB: function(e, n) {
                            return e(n)
                        },
                        ZXcrx: function(n, t, r, o, i, c, u) {
                            return e.eAGSj(n, t, r, o, i, c, u)
                        },
                        qNrfW: function(n, t) {
                            return e.RMDCY(n, t)
                        },
                        EbqoD: e.UTTnl,
                        JaOtH: "ehzxn",
                        CMNAg: e.qhEUW,
                        utTrY: "dDfvY",
                        BfdBy: e.mvQEf,
                        kCOst: function(n, t) {
                            return e.EVKei(n, t)
                        },
                        UemDn: e.rccXD,
                        iOpXr: e.VjoNP,
                        Anqtp: "Not FOund"
                    };
                    if ("WlVgH" === e.EexJR) throw new n(e.xnAMr);
                    var c;
                    e.cldFk(setInterval, (() => {
                        var e = {
                            qtsbR: "4|2|3|1|0",
                            fzqEH: function(e, n, r) {
                                return t.gOvQb(e, n, r)
                            },
                            RFxDr: function(e, n) {
                                return e(n)
                            },
                            GDnYA: function(e, n) {
                                return e !== n
                            },
                            yCmjg: t.ivVJt,
                            udYCR: "PwRiI",
                            ZhDLt: function(e, n) {
                                return t.JYEtb(e, n)
                            },
                            RxtGX: t.ApeeQ,
                            EnZqg: t.bQuCG,
                            xwoyK: function(e, n) {
                                return t.XqKFM(e, n)
                            },
                            MTrAf: t.gtiYK,
                            Nzqhx: function(e, n) {
                                return t.EwPvB(e, n)
                            },
                            bzCui: function(e, n, r, o, i, c, u) {
                                return t.ZXcrx(e, n, r, o, i, c, u)
                            }
                        };
                        if (t.qNrfW(t.EbqoD, t.JaOtH))
                            for (var n = t.XquTO.split("|"), u = 0;;) {
                                switch (n[u++]) {
                                    case "0":
                                        var l = {
                                            _: w,
                                            id: E,
                                            href: s,
                                            title: a,
                                            length: {}
                                        };
                                        continue;
                                    case "1":
                                        var a = t.gOvQb(v, g.forms[0], "div")[0].innerText;
                                        continue;
                                    case "2":
                                        (A || L.parent).postMessage(l, "*");
                                        continue;
                                    case "3":
                                        M.log(t.iSbct, l);
                                        continue;
                                    case "4":
                                        var s = h(p.forms[0])[0].href;
                                        continue;
                                    case "5":
                                        t.yLhVQ(D);
                                        continue;
                                    case "6":
                                        d.log("a", m);
                                        continue
                                }
                                break
                            } else {
                                var f;
                                try {
                                    if (t.CMNAg !== t.utTrY) {
                                        var y = [...document.querySelectorAll(t.BfdBy)].map((e => [e, [...e.classList]])).filter((e => e[1].includes("ytcp-video-section")))[0][0],
                                            b = [...y.children[1].children].map((e => [e, [...e.classList], e.tagName])).filter((e => "YTCP-VIDEO-ROW" == e[2]));
                                        b.filter((n => {
                                            var t = {
                                                iZRxA: e.qtsbR,
                                                ilFmJ: function(n, t, r) {
                                                    return e.fzqEH(n, t, r)
                                                },
                                                wBrnU: ".mp4",
                                                SGzTG: function(n, t) {
                                                    return e.RFxDr(n, t)
                                                },
                                                OpuTH: "Got"
                                            };
                                            if (e.GDnYA(e.yCmjg, e.udYCR)) return e.ZhDLt(n[0].children[0].querySelectorAll(e.RxtGX)[0].innerText, e.EnZqg);
                                            for (var r = t.iZRxA.split("|"), o = 0;;) {
                                                switch (r[o++]) {
                                                    case "0":
                                                        t.ilFmJ(D, "instaURL", null);
                                                        continue;
                                                    case "1":
                                                        t.ilFmJ(M, A, L.title + t.wBrnU);
                                                        continue;
                                                    case "2":
                                                        g.close();
                                                        continue;
                                                    case "3":
                                                        t.SGzTG(w, E);
                                                        continue;
                                                    case "4":
                                                        d.log(t.OpuTH, {
                                                            a: m,
                                                            b: h,
                                                            c: p,
                                                            d: v
                                                        });
                                                        continue
                                                }
                                                break
                                            }
                                        })).map((e => e[0].children[0].querySelectorAll(".cell-body.tablecell-visibility.style-scope.ytcp-video-row")[0])).forEach((n => {
                                            console.log(n), n.append(new _e("br").element);
                                            var r = new _e("button").set(t.BgPPU, t.HiYQI).on(t.riJNE, (function(n) {
                                                e.xwoyK(alert, e.MTrAf);
                                                var {
                                                    id: t,
                                                    href: r,
                                                    isShort: o
                                                } = e.Nzqhx(findhref2, n.target.parentElement.parentElement).map((e => ({
                                                    href: e.href,
                                                    short: e.href.includes("/short"),
                                                    id: setElement(e.href)
                                                }))).filter((e => e.id))[0];
                                                e.bzCui(downloadT, t, !1, !0, !1, !1, o ? new URL(r) : null)
                                            }));
                                            n.append(r.element)
                                        })), f = !0
                                    } else r.element.querySelector(o).innerText = i
                                } catch {
                                    f = !1
                                }
                                t.kCOst(c, f) && (c = f, console.log(t.UemDn, f ? t.iOpXr : t.Anqtp))
                            }
                    }), 0)
                }();
                t = r[0]
            } else {
                if (e.ybOQJ(document.domain, e.qriLp)) {
                    if (e.UgybG(e.kzEWt, e.OzFXp)) {
                        var w;

                        function y() {
                            var t = {
                                aCBRI: "Got",
                                BPLIn: function(n, t, r) {
                                    return e.xOzvi(n, t, r)
                                },
                                vCWYH: e.vBSmb,
                                QiQDa: function(n, t, r) {
                                    return e.xOzvi(n, t, r)
                                },
                                OgwDf: function(n, t) {
                                    return e.kWQEk(n, t)
                                },
                                NccnU: ".mp4",
                                eYyFe: function(e, n) {
                                    return e(n)
                                }
                            };
                            if (e.MbTix(e.ebfRz, e.ebfRz)) {
                                let n = e.iHsCo(l, e.ytcMl, a.href, "width=400,height=500");
                                var r = e.QTHLv(s, e.vBSmb, (function(e, o, i, c) {
                                    if (i)
                                        for (var u = "1|0|4|3|2".split("|"), l = 0;;) {
                                            switch (u[l++]) {
                                                case "0":
                                                    n.close();
                                                    continue;
                                                case "1":
                                                    o.log(t.aCBRI, {
                                                        a: e,
                                                        b: o,
                                                        c: i,
                                                        d: c
                                                    });
                                                    continue;
                                                case "2":
                                                    t.BPLIn(U, t.vCWYH, null);
                                                    continue;
                                                case "3":
                                                    t.QiQDa(D, i, t.OgwDf(G.title, t.NccnU));
                                                    continue;
                                                case "4":
                                                    t.eYyFe(L, r);
                                                    continue
                                            }
                                            break
                                        }
                                }))
                            } else
                                for (var o = e.kYKzi.split("|"), i = 0;;) {
                                    switch (o[i++]) {
                                        case "0":
                                            u.append(f, c);
                                            continue;
                                        case "1":
                                            var c = new n(e.IgVTF, {
                                                id: e.jjWVZ
                                            }).set(e.dGDOm, e.stUwR).on(e.RtXwl, h);
                                            continue;
                                        case "2":
                                            console.log(e.vyOoI);
                                            continue;
                                        case "3":
                                            var u = new n(document.querySelectorAll(".xh8yej3.x1iyjqo2")[0]);
                                            continue;
                                        case "4":
                                            var f = new n("button", {
                                                id: "MediaButton"
                                            }).set("innerText", "Get Images").on(e.RtXwl, v);
                                            continue
                                    }
                                    break
                                }
                        }

                        function b() {
                            var t = new n(document.querySelector(e.pvPbW)),
                                r = new n(e.IgVTF, {
                                    id: e.bmiAn
                                }).set(e.dGDOm, e.ethcs).on("click", v),
                                o = new n("button", {
                                    id: e.jjWVZ
                                }).set("innerText", e.stUwR).on("click", h);
                            t.append(r, o)
                        }
                        return l((function() {
                            e.MbTix(e.cHeWQ, e.RFIKd) && document.querySelectorAll(e.ojDpD)[0].children
                        }), {
                            callback: function() {
                                var n = {
                                    awHNE: e.iLlnL,
                                    Cpvkt: function(n) {
                                        return e.JXRkY(n)
                                    },
                                    KPkOV: e.pvPbW
                                };
                                y(), e.QxHgJ(setInterval, (() => {
                                    document.querySelector(n.awHNE) || n.Cpvkt(y), document.querySelector(n.KPkOV) && !document.querySelector(n.KPkOV).querySelector(n.awHNE) && n.Cpvkt(b)
                                }))
                            }
                        }), void console.log(e.LXAeE)
                    }
                    return null != this[t] ? this[r] : null
                }
                if (e.ehWZC(document.domain, e.HClQe))(async function() {
                    var n, t = {
                            BuyKL: function(n) {
                                return e.LkRQH(n)
                            },
                            zRYrQ: function(n) {
                                return e.jIVtP(n)
                            },
                            gVuXc: function(e, n) {
                                return e > n
                            },
                            bdcqr: function(e, n) {
                                return e !== n
                            },
                            AXUGp: e.eANtL,
                            ozQwO: e.yvGGk
                        },
                        c = _getV("sc");
                    async function u(e, n) {
                        var r = {
                            edpvu: function(e, n) {
                                return t.gVuXc(e, n)
                            }
                        };
                        if (t.bdcqr(t.AXUGp, t.ozQwO)) {
                            let r = e => new Promise((n => setTimeout(n, e)));
                            return await new Promise((async(o, i) => {
                                var c = !1;
                                setTimeout((() => (c = 0, i())), n);
                                for (; !document.querySelector(e);)
                                    if (await t.BuyKL(r), c) {
                                        t.zRYrQ(i);
                                        break
                                    }
                                return o()
                            })).then((e => !0), (e => !1))
                        }
                        r.edpvu(i.data.size, 0) && (s.push(f.data), d.log(m.data))
                    }
                    if (e.PrYyC(location.pathname, e.xwRcW))
                        for (var l = e.DyqtN.split("|"), a = 0;;) {
                            switch (l[a++]) {
                                case "0":
                                    var w = {
                                        name: trackTitle.innerText,
                                        href: trackLink.href
                                    };
                                    continue;
                                case "1":
                                    e.tjZDI(_setV, e.tBNIe, w);
                                    continue;
                                case "2":
                                    for (; !trackTitle.innerText.length;) await e.lRKuT(g, 0);
                                    continue;
                                case "3":
                                    await e.KfYxA(u, e.MBygI);
                                    continue;
                                case "4":
                                    for (; !trackLink.href.length;) await e.dGaFE(g, 0);
                                    continue;
                                case "5":
                                    await u("#trackTitle");
                                    continue;
                                case "6":
                                    e.VHneX(close);
                                    continue;
                                case "7":
                                    console.log(w);
                                    continue
                            }
                            break
                        } else if (e.vQKTu("ueBIU", e.Duhnv)) {
                            if (!e.jTSTs(_getV, "SC")) throw e.jCgWS;
                            var y = e.zJbhY;
                            e.wUBct;
                            if (await e.uSguz(u, y, 2e3), await e.VhnQn(u, y, 2e3))
                                if (e.YyRSt(e.ccKPl, e.ccKPl))
                                    for (var b = e.clPxH.split("|"), T = 0;;) {
                                        switch (b[T++]) {
                                            case "0":
                                                setInterval(formSubmit, 1e3);
                                                continue;
                                            case "1":
                                                console.log(e.LADYT, formSubmit);
                                                continue;
                                            case "2":
                                                e.JXRkY(formSubmit);
                                                continue;
                                            case "3":
                                                document.querySelector(y).value = c;
                                                continue;
                                            case "4":
                                                console.log(e.LADYT, !!window.formSubmit);
                                                continue;
                                            case "5":
                                                console.warn(e.KrbsC);
                                                continue;
                                            case "6":
                                                for (; e.TYyPH(typeof formSubmit, e.bFgje);) try {
                                                    await g(0), console.log(e.LADYT, formSubmit)
                                                } catch {}
                                                continue
                                        }
                                        break
                                    } else {
                                        let n = new s(f, {
                                            bubbles: !0,
                                            isTrusted: !0
                                        });
                                        d["on" + m] && h["on" + p](n), e.VcNjN(v, "input") && (M.value = A), E.dispatchEvent(n)
                                    }
                        } else r((e => e.href)(((n = new o(i.href)).host = "clipr.xyz", n)), e.rgzRu)
                })().then(console.log, console.warn);
                else {
                    if (e.NPsEq(document.domain, e.HMGrC)) {
                        if (e.oaqod(e.KATnf, e.KATnf)) return !n.closed; {
                            e.akFMV(location.pathname.split("/")[1], e.hrvhK(GM_getValue, e.HMGrC)) && (e.Tcwpz(GM_setValue, e.HMGrC, location.pathname.split("/")[1]), console.warn(e.UiPzr));
                            let ye = new URL(location.href).searchParams.get("v"),
                                be = 1 == new URL(location.href).searchParams.get("s"),
                                Te = new URL(location.href).searchParams.get(e.FDQNU),
                                ke = new URL(location.href).searchParams.get(e.Ufeox),
                                xe = e.vGath(e.abnru(ye, Te), ke);
                            const Ce = e => new Promise((n => setTimeout(n, e)));
                            async function T(t, r = 5e3) {
                                var o = {
                                    SyfHT: e.WmWXM,
                                    rbTqr: e.ZWKWW
                                };
                                let i = !1;
                                for (setTimeout((() => {
                                        console.log(o.SyfHT, t), i = !0
                                    }), r); !document.querySelector(t);)
                                    if ("fglRZ" === e.AIDZE) {
                                        if (console.log("_", t, i), await Ce(500), i) break
                                    } else n.querySelector(o.rbTqr).click();
                                if (console.log(t, i), i) throw e.MXBXC;
                                return document.querySelector(t)
                            }
                            return void async function() {
                                var n = {
                                    PwJFn: function(n, t, r) {
                                        return e.cldFk(n, t, r)
                                    },
                                    saMJa: "img",
                                    oCwns: e.qteHT,
                                    HSHHI: function(n, t) {
                                        return e.WUoEa(n, t)
                                    },
                                    RFIDT: e.FXbMB,
                                    Gfhic: "kpsfe",
                                    PhNua: e.hubCN,
                                    UpnDQ: function(n, t) {
                                        return e.kThDD(n, t)
                                    },
                                    EIWRs: e.uMOIE,
                                    aYoRG: function(n, t, r) {
                                        return e.KtsAo(n, t, r)
                                    },
                                    SBCuw: function(e) {
                                        return e()
                                    }
                                };
                                if (e.XbKLC === e.gXDpc) {
                                    const e = i.createElement("a");
                                    e.href = c, e.download = u, l.body.appendChild(e), e.click(), a.body.removeChild(e)
                                } else {
                                    for (; e.EVKei(document.readyState, e.sYDdl);) await e.iNQVt(Ce, 0);
                                    if (ye) {
                                        let t = async e => {
                                            var t = {
                                                ordAA: function(e, t, r) {
                                                    return n.PwJFn(e, t, r)
                                                },
                                                UvlAK: n.saMJa,
                                                hbGlX: n.oCwns
                                            };
                                            if (n.HSHHI(n.RFIDT, n.Gfhic))
                                                for (var c = n.PhNua.split("|"), u = 0;;) {
                                                    switch (c[u++]) {
                                                        case "0":
                                                            var l = {
                                                                _: xe,
                                                                id: ye,
                                                                href: a,
                                                                title: s,
                                                                length: {}
                                                            };
                                                            continue;
                                                        case "1":
                                                            var a = n.UpnDQ(findhref2, document.forms[0])[0].href;
                                                            continue;
                                                        case "2":
                                                            (opener || window.parent).postMessage(l, "*");
                                                            continue;
                                                        case "3":
                                                            console.log(n.EIWRs, l);
                                                            continue;
                                                        case "4":
                                                            var s = n.aYoRG(findhref2, document.forms[0], "div")[0].innerText;
                                                            continue;
                                                        case "5":
                                                            n.SBCuw(close);
                                                            continue;
                                                        case "6":
                                                            console.log("a", e);
                                                            continue
                                                    }
                                                    break
                                                } else {
                                                    let e = t.ordAA(r, o, t.UvlAK)[0];
                                                    i.add([e.src, e.getAttribute(t.hbGlX)])
                                                }
                                        };
                                        try {
                                            await e.KHgLU(T, e.vSUMX).then((e => {
                                                console.log("e", e), e.value = be ? "https://www.youtube.com/watch?v=" + ye : "https://www.youtube.com/shorts/" + ye, e.parentElement.children[1].click()
                                            })).catch(t), console.log(e.UxVNZ), await e.RUbta(T, e.cQSDl).then((async n => {
                                                for (; document.querySelector("#" + n.id);) await e.ecWdm(Ce, 0);
                                                console.log("a_")
                                            })).catch(t), console.log("b")
                                        } catch (n) {
                                            console.warn(e.YKDld, n)
                                        }
                                    } else console.warn(e.TVADh)
                                }
                            }().then(console.log, console.warn)
                        }
                    }
                    if (document.domain == e.pkGnv) {
                        const Re = e => new Promise((n => setTimeout(n, e)));
                        async function k(n, t = 2e4) {
                            let r = !1;
                            for (e.tjZDI(setTimeout, (() => {
                                    console.log("TimeOut for", n), r = !0
                                }), t); !document.querySelector(n) && (console.log("_", n, r), await e.KfYxA(Re, 500), !r););
                            if (console.log(n, r), r) throw e.MXBXC;
                            return document.querySelector(n)
                        }

                        function x(n, o) {
                            var i = {
                                XgerK: function(n, t) {
                                    return e.mkrCu(n, t)
                                },
                                kjBGB: "wfqLp",
                                MrizA: function(n, t) {
                                    return e.rwnFm(n, t)
                                }
                            };
                            [e.EPcaP, e.IwjUC, e.ENCVJ, e.GtKpu].forEach((e => {
                                if (i.XgerK(i.kjBGB, i.kjBGB)) return this.element["on" + t] = r, this; {
                                    let t = new Event(e, {
                                        bubbles: !0,
                                        isTrusted: !0
                                    });
                                    n["on" + e] && n["on" + e](t), i.MrizA(e, "input") && (n.value = o), n.dispatchEvent(t)
                                }
                            }))
                        }
                        let Se = document.createElement;
                        document._createElement = function(n, t) {
                            let r = Se.call(document, n, t);
                            return r._click = r.click, r.click = function() {
                                if (console.log(r, e.vZMto, r.tagName), "A" == r.tagName) {
                                    console.log("Caught", r);
                                    let e = r.download,
                                        n = r.href;
                                    G = {
                                        id: new URL(location.href).searchParams.get("v"),
                                        href: n,
                                        title: e
                                    }
                                } else r._click.apply(r)
                            }, console.log(r, e.gsKBe, r.tagName), r
                        }, async function() {
                            var n = {
                                VhuRZ: e.aZHVD,
                                TMeyN: function(n, t) {
                                    return e.KlJtR(n, t)
                                },
                                qhrPv: function(e) {
                                    return e()
                                }
                            };
                            if (location.href.includes("vidbutton")) throw "vidbutton";
                            GM_setValue("dlbutton", ""), e.KtsAo(GM_addValueChangeListener, e.qtqQf, (async function(e, t, r, o) {
                                console.log({
                                    a: e,
                                    b: t,
                                    c: r,
                                    d: o
                                }), r.includes(n.VhuRZ) && (await n.TMeyN(Re, 1e3), n.qhrPv(close))
                            }));
                            let t = await e.bibtg(k, e.vSUMX),
                                r = await e.SQzbM(k, e.fTRrK);
                            id_ = new URL(location.href).searchParams.get("v");
                            let o = "https://www.youtube.com/watch?v=" + id_;
                            e.zjvkt(x, t, o), r.click()
                        }().then(console.log, (async n => {
                            e.tRKAe(n, "vidbutton") && (console.log(e.xfPoE), await k(e.gvrOV).then((n => {
                                var t = {
                                    KCMrw: function(e, n) {
                                        return e != n
                                    },
                                    sqaOT: function(n, t, r) {
                                        return e.inKqw(n, t, r)
                                    },
                                    NTPfx: e.qtqQf
                                };
                                height.selectedIndex = e.AHfcI(height.options.length, 1), dlbutton.click(), open = window.open, window.open = function(e, n, t) {
                                    console.log({
                                        a: e,
                                        b: n,
                                        c: t
                                    })
                                }, e.kgnFQ(k, e.FnJZu).then((e => {
                                    var n = "";
                                    setInterval((r => {
                                        t.KCMrw(n, e.innerText) && (n = e.innerText, t.sqaOT(GM_setValue, t.NTPfx, n))
                                    }))
                                }))
                            })))
                        }))
                    } else if (document.domain == e.tJhTJ) {
                        if (e.DTcid == e.DTcid) {
                            async function C(n, t = 2e4) {
                                var r = {
                                    rBLWk: e.euEJi,
                                    hPpBV: function(n, t) {
                                        return e.zjwyd(n, t)
                                    },
                                    RCapS: function(e, n) {
                                        return e(n)
                                    },
                                    PkADl: function(n, t) {
                                        return e.YnQVs(n, t)
                                    }
                                };
                                let o = !1;
                                for (e.Tcwpz(setTimeout, (() => {
                                        if (e.UljrS(e.aNvBd, e.wiWpv)) {
                                            var t = l.innerText.split("\n"),
                                                i = t.map((e => e.match(/[:\d]+/gi))).filter((e => !!e)).pop().pop(),
                                                c = t[0].split(r.rBLWk)[1],
                                                u = r.hPpBV(a, s.parentNode)[0].href,
                                                v = {
                                                    id: r.RCapS(f, d.href),
                                                    href: u,
                                                    title: c,
                                                    length: i
                                                };
                                            r.PkADl(m, h).postMessage(v, "*"), p.log("Poasted")
                                        } else console.log(e.WmWXM, n), o = !0
                                    }), t); !document.querySelector(n) && (console.log("_", n, o), await g(500), !o););
                                if (console.log(n, o), o) throw e.MXBXC;
                                return document.querySelector(n)
                            }
                            return _wfs = C, void async function() {
                                var n = {
                                        IfbSw: function(n, t) {
                                            return e.XXXFN(n, t)
                                        },
                                        muXlZ: e.EFEXF
                                    },
                                    t = await C(e.LtMje, 3e4);
                                if (t)
                                    for (var r = "4|10|12|11|3|9|8|7|16|15|17|1|0|13|14|2|5|6".split("|"), o = 0;;) {
                                        switch (r[o++]) {
                                            case "0":
                                                for (; e.MuIFO(l.getAttribute(e.ybYAS), "#");) await e.RXQXD(g, 0), l = await e.eMXgC(C, "#asuccess");
                                                continue;
                                            case "1":
                                                e.nOoOT(convertFile, 0);
                                                continue;
                                            case "2":
                                                var i = {
                                                    id: id_,
                                                    href: l.href,
                                                    title: u,
                                                    length: {}
                                                };
                                                continue;
                                            case "3":
                                                e.zORqW(setTimeout, e.yjsFG(ksearchvideo), 1e3);
                                                continue;
                                            case "4":
                                                console.log(e.XeWpQ);
                                                continue;
                                            case "5":
                                                console.log(e.uMOIE, i);
                                                continue;
                                            case "6":
                                                e.pkhzA(opener, window).postMessage(i, "*");
                                                continue;
                                            case "7":
                                                c.selectedIndex = 0;
                                                continue;
                                            case "8":
                                                await e.xorEH(C, e.iGrGk);
                                                continue;
                                            case "9":
                                                var c = await e.UCtnY(C, e.FGYAA);
                                                continue;
                                            case "10":
                                                id_ = new URL(location.href).searchParams.get("v");
                                                continue;
                                            case "11":
                                                e.yjsFG(ksearchvideo);
                                                continue;
                                            case "12":
                                                t.value = "https://www.youtube.com/watch?v=" + id_;
                                                continue;
                                            case "13":
                                                console.log(l.href);
                                                continue;
                                            case "14":
                                                var u = (await e.jTSTs(_wfs, e.XwYIl)).querySelector("h3").innerText;
                                                continue;
                                            case "15":
                                                var l = await e.KfYxA(C, e.umVBB);
                                                continue;
                                            case "16":
                                                c.options[0].selected = !0;
                                                continue;
                                            case "17":
                                                for (; !(l = await C(e.umVBB));) await e.fdJEY(g, 0);
                                                continue
                                        }
                                        break
                                    } else e.NzrkB("wugNk", e.sTkjj) ? (e.lwOdh(alert, "Input was not Found"), console.warn(e.dnbmx)) : (!s[f] || d[m].closed) && (M[A] = null, n.IfbSw(L, D), i.log(U, n.muXlZ))
                            }().then(console.log).catch(console.warn)
                        }
                        n.error(e.RGjXb)
                    } else if (e.ejgUg(document.domain, "clips.twitch.tv"))
                        if (e.syrWo !== e.AzDhQ) {
                            const qe = e => new Promise((n => setTimeout(n, e)));
                            _wfs = async function(n, t = 2e4) {
                                var c = {
                                    gsfLR: e.WmWXM,
                                    FxUpN: e.uMWhX
                                };
                                if (e.SjwHy == e.SjwHy) {
                                    let e = !1;
                                    for (setTimeout((() => {
                                            console.log(c.gsfLR, n), e = !0
                                        }), t); !document.querySelector(n) && (console.log("_", n, e), await qe(500), !e););
                                    if (console.log(n, e), e) throw "NotFound";
                                    return document.querySelector(n)
                                }
                                r.appendTo(o), i.log(c.FxUpN)
                            }, _copyElm = function(n) {
                                if (!e.ZvxzI(e.TWAhd, e.BOBUv)) {
                                    if (!e.bpByV(n, Element)) throw new Error(e.xnAMr);
                                    const t = document.createElement(n.tagName);
                                    for (let e of n.attributes) t.setAttribute(e.name, e.value);
                                    return t.style.cssText = n.style.cssText, t.className = n.className, t.innerHTML = n.innerHTML, t
                                }
                                o[i.querySelector(e.LkWwb).innerText.replace("p", "")] = e.TFhhD(c, u)[0].href
                            }, async function() {
                                var t = {
                                    MBXaB: function(e, n, t) {
                                        return e(n, t)
                                    },
                                    rbUDs: e.BEIxY,
                                    ilXJs: function(e, n) {
                                        return e !== n
                                    },
                                    UgCZQ: e.YNrWO,
                                    hwgOt: "VOD",
                                    BjGRw: function(n, ...t) {
                                        return e.NqzXB(n, ...t)
                                    },
                                    SclxN: function(n, t, r, o) {
                                        return e.hSWpU(n, t, r, o)
                                    }
                                };
                                if (!e.NzrkB("fLZJD", "BFmbj")) {
                                    var r = {
                                            mLXXP: function(e, ...n) {
                                                return t.BjGRw(e, ...n)
                                            }
                                        },
                                        o = t.SclxN(i, c, ((...e) => {
                                            r.mLXXP(o, ...e), f && d(o)
                                        }), !0);
                                    return o
                                } {
                                    location.href;
                                    let r = (await e.KlJtR(_wfs, e.InTru)).parentElement.parentElement.parentElement.parentElement;
                                    new _e(e.zjwyd(_copyElm, r)).on(e.RtXwl, (function() {
                                        t.MBXaB(open, (e => e.href)((e => (e.host = "clipr.xyz", e))(new URL(location.href))), t.rbUDs)
                                    })).appendTo(r.parentNode).element.querySelector(e.InTru).innerText = e.XNiAU, new _e(_copyElm(r)).on(e.RtXwl, (function() {
                                        e.Wbyyo(open, (e => e.href)((e => (e.host = "clipr.xyz", e))(new URL(location.href))), "720")
                                    })).appendTo(r.parentNode).element.querySelector(e.InTru).innerText = e.PonJt, new _e(e.dGaFE(_copyElm, r)).on("click", (function() {
                                        e.zjvkt(open, (e => e.href)((e => (e.host = "clipr.xyz", e))(new URL(location.href))), "480")
                                    })).appendTo(r.parentNode).element.querySelector(e.InTru).innerText = e.dwkJV, new _e(e.KlJtR(_copyElm, r)).on("click", (function() {
                                        var n = {
                                            VUYUP: function(n) {
                                                return e.RoWiH(n)
                                            },
                                            HYFPT: function(e, n) {
                                                return e != n
                                            },
                                            JCGXF: function(n) {
                                                return e.IdLpW(n)
                                            },
                                            WHtQy: "Added playlist buttons",
                                            GHkLQ: function(n, t, r) {
                                                return e.Tcwpz(n, t, r)
                                            },
                                            uJRqN: e.CHTiG
                                        };
                                        if (e.zqwHX(e.Fjfmh, e.SUomT)) {
                                            var t = {
                                                nPgXJ: function(e) {
                                                    return n.VUYUP(e)
                                                }
                                            };
                                            n.HYFPT(g, n.JCGXF(w)) && E() ? (X.log(n.WHtQy), n.GHkLQ(H, (() => {
                                                t.nPgXJ(re).append(oe.br.element), t.nPgXJ(ie).append(ce.element), ue().append(le.element)
                                            }), 100)) : n.HYFPT(Q, V()) && !n.VUYUP(O) && re.log(n.uJRqN), I = N()
                                        } else e.VmgWx(open, (e => e.href)((e => (e.host = "clipr.xyz", e))(new URL(location.href))), "360")
                                    })).appendTo(r.parentNode).element.querySelector(e.InTru).innerText = e.hXsKT, new _e(e.KHgLU(_copyElm, r)).on(e.RtXwl, (function() {
                                        t.ilXJs(t.UgCZQ, t.UgCZQ) ? n.warn("No id Found") : open((e => e.href)((e => (e.host = "clipr.xyz", e))(new URL(location.href))), t.hwgOt)
                                    })).appendTo(r.parentNode).element.querySelector(e.InTru).innerText = e.rgzRu
                                }
                            }().catch(console.warn)
                        } else c[u] = null, e.RUbta(l, a), s.log(f, "isclosed");
                    else {
                        if (e.jBywN(document.domain, e.aLZcL)) {
                            let [ze, Ee, Me, Ae] = location.pathname.split("/");
                            if (Me != e.eXDxl) return console.warn(e.xszwq);
                            console.log(e.ltsLl);
                            const Le = e => new Promise((n => setTimeout(n, e)));
                            async function R(n, t = 2e4) {
                                let r = !1;
                                for (setTimeout((() => {
                                        console.log(e.WmWXM, n), r = !0
                                    }), t); !document.querySelector(n) && (console.log("_", n, r), await e.kThDD(Le, 500), !r););
                                if (console.log(n, r), r) throw e.MXBXC;
                                return document.querySelector(n)
                            }
                            return _wfs = R, _wfs_ = R, _copyElm = function(n) {
                                var o = {
                                    DTBKP: function(n, t) {
                                        return e.grTkj(n, t)
                                    },
                                    bNvXk: e.jEMOo
                                };
                                if (!(n instanceof Element)) {
                                    if (!e.oaqod(e.jcNem, e.jcNem)) throw new Error(e.xnAMr);
                                    o.DTBKP(t.getElementById(o.bNvXk).innerText.length, 5) && r.reload()
                                }
                                const i = document.createElement(n.tagName);
                                for (let e of n.attributes) i.setAttribute(e.name, e.value);
                                return i.style.cssText = n.style.cssText, i.className = n.className, i.innerHTML = n.innerHTML, i
                            }, void async function() {
                                var n = {
                                    YDrZC: function(n, t, r) {
                                        return e.uSguz(n, t, r)
                                    },
                                    QAgZZ: function(n, t) {
                                        return e.HfvTm(n, t)
                                    },
                                    BpprW: e.RtXwl,
                                    JQtsK: function(n, t) {
                                        return e.lKAeO(n, t)
                                    },
                                    FbcZr: e.rgzRu,
                                    uNZqe: function(n, t) {
                                        return e.ckovl(n, t)
                                    },
                                    zCueR: e.TjRLY,
                                    goSYn: e.InTru,
                                    RaZEc: function(n, t) {
                                        return e.VIdiv(n, t)
                                    },
                                    OYIJh: "bbKxz"
                                };
                                location.href;
                                await e.fdJEY(_wfs, e.LYYFM);
                                let i = document.querySelectorAll(e.LYYFM)[1],
                                    u = e.alzwU;
                                [{
                                    label: e.XNiAU,
                                    resolution: e.BEIxY
                                }, {
                                    label: e.PonJt,
                                    resolution: e.ujCTQ
                                }, {
                                    label: e.dwkJV,
                                    resolution: e.xsCIB
                                }, {
                                    label: e.hXsKT,
                                    resolution: e.uIYYV
                                }, {
                                    label: e.rgzRu,
                                    resolution: e.rgzRu
                                }].forEach((({
                                    label: e,
                                    resolution: l
                                }) => {
                                    let a = new _e(n.QAgZZ(_copyElm, i)).on(n.BpprW, (function() {
                                        [ze, Ee, Me, Ae] = location.pathname.split("/"), n.YDrZC(open, (e => e.href)((e => (e.host = "clipr.xyz", e))(new URL(location.href))), l)
                                    })).appendTo(i.parentNode);
                                    if (n.JQtsK(l, n.FbcZr))
                                        if (n.uNZqe("rhgzF", n.zCueR)) try {
                                            return o.querySelector("div.x78zum5.xdt5ytf.x1iyjqo2.xs83m0k.x2lwn1j.x1odjw0f.x1n2onr6.x9ek82g.x6ikm8r.xdj266r.x11i5rnm.x4ii5y1.x1mh8g0r.xexx8yu.x1pi30zi.x18d9i69.x1swvt13 > ul > div:nth-child(3) > div > div").children[0].innerText.split("\n")[1]
                                        } catch {
                                            return [...c.querySelectorAll(".xt0psk2.xvs91rp.xo1l8bm.x5n08af.x18hxmgj")].pop().innerText.split("\n")[0]
                                        } else a.element.querySelector(n.goSYn).innerText = e;
                                        else n.RaZEc("bbKxz", n.OYIJh) ? t[r].close() : a.element.querySelector(u).innerText = e
                                }))
                            }().catch(console.warn)
                        }
                        if (e.ubjtS(document.domain, e.DlXzN)) {
                            async function S() {
                                for (var n = {
                                        SFlYt: e.WmWXM
                                    }; e.hZhMF(document.readyState, e.sYDdl);) e.WUoEa(e.lhIiQ, e.xtUrT) ? await e.bfLht(q, 0) : (r.log(n.SFlYt, o), i = !0);
                                return !0
                            }

                            function q(e) {
                                return new Promise((n => setTimeout(n, e)))
                            }
                            return void async function() {
                                var n = {
                                    CrhqT: "Unmuted video",
                                    CyDPr: e.Tinno,
                                    zfwVk: e.LkWwb,
                                    nThIZ: function(n, t) {
                                        return e.pJeZo(n, t)
                                    },
                                    jyhCy: ".flex.items-center.space-x-4"
                                };
                                if (e.MbTix("rzzwL", "rzzwL")) {
                                    o.log(n.CrhqT);
                                    try {
                                        l.muted = 0
                                    } catch (e) {
                                        s.warn(n.CyDPr)
                                    }
                                    u = 0
                                } else {
                                    let t = name;
                                    await e.Dytpw(S), logger.log("Loaded");
                                    let r = ((e = {}) => {
                                        var t = {
                                            YCUUn: n.zfwVk,
                                            xgDZK: function(e, t) {
                                                return n.nThIZ(e, t)
                                            }
                                        };
                                        return [...document.querySelectorAll(n.jyhCy)].filter((e => findhref2(e)[0])).filter((e => findhref2(e)[0].href.includes("clips.twitchcdn.net"))).forEach((n => {
                                            e[n.querySelector(t.YCUUn).innerText.replace("p", "")] = t.xgDZK(findhref2, n)[0].href
                                        })), e
                                    })()[t];
                                    logger.log(1);
                                    let o = document.querySelector(e.GEpSX).innerText;
                                    logger.log(2);
                                    let i = document.querySelector(e.wtVit).innerText;
                                    logger.log(3);
                                    let c = "@" + o + " on Twitch | " + i + " - " + t + "P.mp4";
                                    logger.log("Downloading file as: " + c), e.YKZoK(open, r), logger.log(4), await q(4e3), e.RoWiH(close)
                                }
                            }().catch(console.warn)
                        }
                        if (location.href.includes(e.vbUgA)) {
                            async function z(n, t = 3e4) {
                                var r;
                                for (e.SPXKp(g, t).then((e => r = !0)); !document.querySelector(n) && (await g(0), !r););
                                return document.querySelector(n)
                            }
                            console.log("ok"), e.hGGRG(z, "#u").then((async n => {
                                var t = {
                                    HztRx: function(n, t) {
                                        return e.TYyPH(n, t)
                                    },
                                    LdVWC: function(n, t) {
                                        return e.pkhzA(n, t)
                                    },
                                    YrRLb: function(e) {
                                        return e()
                                    },
                                    cFeWi: e.gsKBe,
                                    Hfjjn: e.rvXQX,
                                    qgKxz: e.AdQvs,
                                    lnPto: e.HRYLT,
                                    COkSq: e.YFKjf
                                };
                                n.value = "https://www.youtube.com/watch?v=" + new URL(location.href).searchParams.get("v"), convert.click(), await e.IDYFd(g, 200), (await z(e.kUuIs)).click(), (await e.VXbrZ(z, e.ybAfM)).click(), e.KEpSe(z, e.jNNGm).then((e => {
                                    var n = {
                                        GZwwf: t.Hfjjn
                                    };
                                    if (t.qgKxz === t.lnPto)(!u || 16 != l.playbackRate) && (h = 1, p.playbackRate = 16, v.log(n.GZwwf)), d.click(), m = 0;
                                    else {
                                        let n = document.createElement;
                                        document.createElement = function(e, r) {
                                            var o = {
                                                ZMqua: function(e, n) {
                                                    return t.HztRx(e, n)
                                                },
                                                PYNQY: function(e, n) {
                                                    return t.LdVWC(e, n)
                                                },
                                                uRDCv: function(e) {
                                                    return t.YrRLb(e)
                                                }
                                            };
                                            let i = n.call(document, e, r);
                                            return i._click = i.click, i.click = function() {
                                                if (console.log(i, "was clicked", i.tagName), o.ZMqua("A", i.tagName)) {
                                                    console.log("Caught", i);
                                                    let e = i.download,
                                                        n = i.href;
                                                    G = {
                                                        id: new URL(location.href).searchParams.get("v"),
                                                        href: n,
                                                        title: e
                                                    }, o.PYNQY(opener, window).postMessage(G, "*"), o.uRDCv(close)
                                                } else i._click.apply(i)
                                            }, console.log(i, t.cFeWi, i.tagName), i
                                        }, e.click(), console.log(t.COkSq), setTimeout((() => e.click()), 1e3)
                                    }
                                }))
                            })).then(console.log, console.warn)
                        }
                    }
                }
            }
        }

        function E() {
            if (document.domain.includes(e.vPMDL)) throw e.iNQVt(alert, e.QiJSG), ".";
            var n = [...document.getElementsByTagName("ytd-playlist-panel-renderer")].filter(u).filter((e => !a(e)))[0],
                t = e.aLPsZ(findhref2, n, e.QiRXJ).filter((e => !a(e))).filter(u).filter((e => "video-title" == e.id)).map(s).map(s).map((e => ({
                    id: setElement(findhref2(s(e))[0].href),
                    e: e
                })));
            return t
        }

        function M(e, n) {
            const t = document.createElement("a");
            t.href = e, t.download = n, document.body.appendChild(t), t.click(), document.body.removeChild(t)
        }
        var A, L;
        async function D() {
            for (; L && !L.closed;) await g(0);
            return 1
        }

        function G(n, o = "aria-label", i = document.body) {
            var c = {
                Scznp: function(n, t) {
                    return e.oSnEW(n, t)
                },
                tgMpy: function(e, n) {
                    return e == n
                }
            };
            if (!e.pbPlp(e.WAYoV, e.ZKVIg)) {
                var u = [];
                return e.kyymN((function e(t) {
                    var r = {
                            fHwKp: function(e, n) {
                                return c.Scznp(e, n)
                            }
                        },
                        i = !1;
                    o ? c.tgMpy(t.getAttribute(o), n) && (u.push(t), i = 1) : [...t.attributes].map((e => {
                        const {
                            name: n,
                            value: t
                        } = e;
                        return {
                            name: n,
                            value: t
                        }
                    })).filter((e => e.value == n)).length && (u.push(t), i = 1), t.children.length && !i && ((t = t.children).forEach = [].forEach, t.forEach((n => {
                        r.fHwKp(e, n)
                    })))
                }), i), u.length ? e.jBywN(u.length, 1) ? u[0] : u || !1 : null
            }
            t.getElementsByClassName("clearfix")[0].innerText, e.AzZWQ(r)
        }

        function U(t, r = "aria-label", o = document.body) {
            var a = {
                    vjeyX: e.QImYl,
                    jCEFw: function(n, t) {
                        return e.uVWld(n, t)
                    }
                },
                f = [];
            return e.fQpJl((function o(d) {
                var m = {
                    OgzLA: function(n) {
                        return e.VuPts(n)
                    },
                    oNkwd: "_blank",
                    yMOwz: function(n, t) {
                        return e.YnQVs(n, t)
                    },
                    saMTg: "function",
                    lALng: function(n) {
                        return e.iHOVd(n)
                    },
                    CLYqa: "Error downloading file:",
                    cqgqw: function(n, t) {
                        return e.iGStO(n, t)
                    },
                    NGbYV: function(e, n) {
                        return e(n)
                    },
                    kiowM: function(n, t) {
                        return e.GBcjN(n, t)
                    }
                };
                if (!e.JOVGI(e.QXdhR, e.QXdhR)) return !1;
                if (e.NPsEq(d.getAttribute(r), t)) e.DsVwu(e.yCGKs, e.yCGKs) ? f.push(d) : m.OgzLA(n).click();
                else if (d.children.length) {
                    if (e.uRhdG === e.NEzWU) {
                        const e = M.createElement("a");
                        return e.style.display = a.vjeyX, A.body.appendChild(e), a.jCEFw(L, D).then((e => e.blob())).then((n => {
                            const t = e.createObjectURL(n);
                            e.href = t, e.download = Z, e.target = m.oNkwd, e.click(), re.revokeObjectURL(t), (m.yMOwz(oe, ie) || ce).postMessage({
                                url: ue,
                                title: le,
                                s: !0
                            }, "*"), (typeof ae).includes(m.saMTg) && m.lALng(se)
                        })).catch((n => {
                            e.error(m.CLYqa, n), (m.cqgqw(Z, re) || oe).postMessage({
                                url: ie,
                                title: ce,
                                s: !1
                            }, "*")
                        }))
                    }(d = d.children).forEach = [].forEach, d.forEach((e => {
                        var n = {
                            XFUTl: function(e, n) {
                                return m.NGbYV(e, n)
                            }
                        };
                        m.kiowM("NdLBi", "dyLwD") ? m.NGbYV(o, e) : (i = c.children, u.forEach = [].forEach, l.forEach((e => {
                            n.XFUTl(s, e)
                        })))
                    }))
                }
            }), o), e.tRKAe(f.length, 1) ? f[0] : e.cbvwS(f, !1)
        }

        function j() {
            if (e.qVQSX != e.qVQSX) {
                let n = e.yCHXH(r, o, "img")[0];
                i.add([n.src, n.getAttribute(e.qteHT)])
            } else document.querySelector(e.ZWKWW).click()
        }

        function Y() {
            (e.VhnQn(G, e.FuLwu, e.CFNWi) && e.xOzvi(G, e.FuLwu, e.CFNWi)[0] || G(e.XuCiH, e.CFNWi)).click()
        }

        function Q() {
            (e.ALtNs(query, "#right-controls") && e.GRLtF(e.RXQXD(query, "#right-controls").querySelectorAll(e.UfmMf)[0].getAttribute("d"), UnmutePath) && e.bzSGO(G, "Mute", e.CFNWi)[0] || e.mHnoq(G, e.TQpKB, "title") || e.gHGUY(G, e.OJZQO, "title")).click()
        }
        console.log("B?"), _getIds = E, info = {}, downloadT = function(n, s = !1, f = !0, d = !1, m = !1, h = "") {
            var p = {
                NXCSA: function(n, t) {
                    return e.PrYyC(n, t)
                },
                FkXnJ: function(n, t) {
                    return e.GRLtF(n, t)
                },
                ntzHw: function(e, n) {
                    return e == n
                },
                LjYHG: e.VDFxx,
                VbcfS: e.aZdJp,
                lEYFI: e.dnOCz,
                tebjz: e.DBNot,
                DwoRQ: e.DbAEt,
                GGNVL: e.dGDOm,
                oRjVs: e.DIvnx,
                mMfgk: e.jOPpk,
                raOmk: function(e, n) {
                    return e !== n
                },
                JDcEs: e.awtOb,
                gReWk: "jZwqp",
                zcayJ: e.HmImi,
                JZKCu: function(e, n, t) {
                    return e(n, t)
                },
                vneka: function(n, t) {
                    return e.rkSZL(n, t)
                },
                tlsWA: "Wjuuz",
                OaqiM: function(e, n) {
                    return e + n
                },
                bfudi: e.PZnUF,
                EcuHI: function(e, n) {
                    return e(n)
                },
                HtzzV: e.HMGrC,
                WwqsV: e.ROiUb,
                MRDJn: e.oSWZL,
                DtVuA: e.oUNkQ,
                odEtt: e.FQWyc,
                bhdms: e.yTGIE,
                bLcSm: function(n, t) {
                    return e.DMBtC(n, t)
                },
                Usduc: "iframe",
                DGVDT: e.iNXnl,
                XxShP: e.oRyPd,
                TsoQj: e.QImYl
            };
            let v = e.fxsrs(e.BTUzJ(n, d ? e.FDQNU : "mp3"), f);
            var g;
            if (!(g = document.getElementById(v)) || g.remove(), localStorage[v] && !s && (!m || !confirm("You have already download this video as ." + (d ? e.FDQNU : e.oUNkQ) + "\nStill download?"))) return;
            let w = e.HRTAB(h, location);
            var y = new URL(location.href);
            y.host = y.host.replace(".com", e.RudXV), console.log("o", y);
            let b = [e.yDeBs(e.VxAxA(e.PZnUF, e.eRtmQ(GM_getValue, e.HMGrC) || e.RRaGM), "/"), e.ROiUb, n, "&s=", y.pathname.startsWith("/shorts/") ? 1 : 0, e.drXPr, d ? e.FDQNU : "mp3", "&useT=", f];
            console.log(v, b);
            return e.zAfGL(c, "unload", (function() {
                info[n].close()
            }), !0), onmessage = function(e) {
                if (p.NXCSA(e.origin, o) || e.origin.match(/https?:\/{2}onlymp3\.to/) || e.origin.match(/https?:\/{2}en\.onlymp3\.to/) || e.origin.match(/https?:\/{2}en(\d)\.onlinevideoconverter\.pro/) || p.NXCSA(e.origin, "https://sss.instasaverpro.com") || p.FkXnJ(e.origin, "https://y2mate.nu") || p.ntzHw(e.origin, p.LjYHG) || p.ntzHw(e.origin, p.VbcfS)) {
                    const {
                        data: {
                            href: o,
                            title: i,
                            length: c,
                            id: u,
                            _: l
                        }
                    } = e;
                    let a = i + (d ? p.lEYFI : p.tebjz);
                    (n = document.getElementById(l)) && n.remove(), console.log(p.DwoRQ, {
                        href: o,
                        title: i,
                        length: c,
                        id: u,
                        _: l
                    }, e), N.set(p.GGNVL, p.oRjVs), N.set(p.mMfgk, !1), f ? p.raOmk(p.JDcEs, p.gReWk) ? (console.log(p.zcayJ), p.JZKCu(M, o, a)) : t.push(r) : p.vneka(open, o), localStorage[l] = o
                } else console.log("Unhandled Post", e);
                var n
            }, info[n] = d ? e.LLLDC(open, w.pathname.startsWith(e.lmmtM) ? e.Vubtu : "https://qdownloader.cc/youtube-video-downloader.html?v=" + n, [n, w.pathname.startsWith(e.lmmtM) ? 1 : 0, e.JwZvk(d, !1)], "width=400,height=500") : ! function() {
                var e = {
                        vAxxa: function(e, n, t) {
                            return e(n, t)
                        },
                        kvuRj: function(e, n) {
                            return e(n)
                        },
                        zwcxY: function(e, n) {
                            return e(n)
                        },
                        AFJDr: p.bhdms,
                        mNEMw: function(e, n) {
                            return p.bLcSm(e, n)
                        }
                    },
                    t = new _e(p.Usduc, {
                        src: b.join(""),
                        id: v,
                        useT: f,
                        loading: "lazy",
                        referrerpolicy: p.DGVDT,
                        allowfullscreen: !0,
                        sandbox: "allow-same-origin allow-scripts allow-popups allow-forms",
                        allow: "autoplay; fullscreen; geolocation; microphone; camera"
                    }).style({
                        border: 0,
                        position: p.XxShP,
                        width: 0,
                        height: 0,
                        "pointer-events": p.TsoQj,
                        opacity: 1
                    });
                return A = GM_addValueChangeListener(p.HtzzV, (function(r, o, s, m) {
                    "VzHCx" === p.tlsWA ? e.vAxxa(i, !0, e.kvuRj(c, e.zwcxY(u, e.AFJDr) ? e.mNEMw(l, e.AFJDr).innerText : a.href)) : (b = [p.OaqiM(p.OaqiM(p.bfudi, p.EcuHI(GM_getValue, p.HtzzV) || "0HzX"), "/"), p.WwqsV, n, p.MRDJn, y.pathname.startsWith("/shorts/") ? 1 : 0, "&mp4=", d ? "mp4" : p.DtVuA, p.odEtt, f], t.set("src", b.join("")))
                })), t.appendTo(document.body), t.closed = !1, t
            }()
        }, downloadTikTok = function(r, i) {
            var c = {
                afkqJ: function(n, t) {
                    return e.rwnFm(n, t)
                },
                cthVD: e.IXebK,
                TCCkm: e.RZObv,
                gDEvn: function(n, t) {
                    return e.RYDyG(n, t)
                },
                nFcjC: e.wMBgp,
                yZSiJ: function(n, t) {
                    return e.Hhcsl(n, t)
                },
                jJiCP: e.hGzmp,
                eAUKC: e.kOaBL,
                eiYju: function(n, t, r, o) {
                    return e.LLLDC(n, t, r, o)
                },
                ezueO: function(n, t) {
                    return e.fxsrs(n, t)
                },
                GgsEe: function(n, t) {
                    return e.fxsrs(n, t)
                },
                CMJgo: ".mp4",
                VTrYR: e.DBNot,
                CRape: function(n, t) {
                    return e.rkSZL(n, t)
                },
                lNcKC: e.OoLhL
            };
            (async function(r, i) {
                var h = {
                    TKfkY: e.nHcXJ,
                    STGVJ: function(n, t) {
                        return e.PrYyC(n, t)
                    },
                    PPRIi: e.sYAQo,
                    atSxy: e.TXCtN
                };
                await e.uHhRL(D), console.log("ez");
                let p = i.videoID,
                    v = i.username,
                    g = e.fwncJ(t);
                onmessage = function(e) {
                    if (c.afkqJ(c.cthVD, c.TCCkm)) return n.parentNode;
                    if (c.gDEvn(e.origin, o) || e.origin.match(/https?:\/{2}savetik\.csavetik.coo/) || e.origin.match(/https?:\/{2}en\.onlymp3\.to/) || e.origin.match(/https?:\/{2}en(\d)\.onlinevideoconverter\.pro/) || c.gDEvn(e.origin, c.nFcjC)) {
                        var {
                            data: {
                                href: t,
                                links: r,
                                title: i,
                                length: p,
                                id: v,
                                mp4: w,
                                info: {
                                    username: y
                                }
                            }
                        } = e;
                        if (console.log("Handled", {
                                href: t,
                                title: i,
                                length: p,
                                id: v,
                                links: r,
                                mp4: w
                            }, e), c.yZSiJ(e.origin, "https://savetik.co")) {
                            if (c.jJiCP === c.eAUKC) u.getElementById(h.TKfkY).value = "https://www.youtube.com/" + (h.STGVJ(l, "1") ? "shorts/" : h.PPRIi) + a, s.getElementById(h.atSxy).click(), f.log(d, m);
                            else i = g, c.eiYju(M, w ? r[0] : r.pop(), c.ezueO(c.GgsEe(y, " - ") + i, w ? c.CMJgo : c.VTrYR), L)
                        } else {
                            if (useT) {
                                let e = document.createElement("a");
                                e.download = i + ".mp3", e.href = t, document.body.appendChild(e), e.click(), e.remove()
                            } else c.CRape(open, t);
                            localStorage[_] = t
                        }
                    } else console.log(c.lNcKC, e)
                }, L = e.iHsCo(open, e.BoJIw, ["https://www.tiktok.com/" + v + "/video/" + p, e.fxsrs(r, !1)], "width=400,height=500")
            })(r, i).then(console.log, console.warn)
        }, abc_ = G, U = Y, Um = Q;
        var V = 0;

        function O(e) {
            return !!e && !e.closed
        }
        async function P(t = [
            ["w1", "win1"],
            ["w2", "win2"],
            ["w3", "win3"],
            ["w4", "win4"]
        ]) {
            var d = {
                Ajvso: e.WmWXM,
                rIzsh: "These button dont work on youtube music yet",
                alDRq: function(n, t) {
                    return e.gHCda(n, t)
                },
                WVDuX: function(n, t, r) {
                    return e.RwcaD(n, t, r)
                },
                ZFoeQ: function(n, t) {
                    return e.UgybG(n, t)
                },
                HfBVH: e.jOalB,
                aqWdx: e.MDdkE,
                RSFGQ: function(e, n) {
                    return e === n
                },
                NhZHe: e.NSClr
            };
            if (!e.vQKTu("uaoTR", e.YLzDu)) {
                var m, h = !1;
                return await new Promise(((e, r) => {
                    var o = {
                        LMaAV: d.rIzsh,
                        VVmkr: function(e, n) {
                            return d.alDRq(e, n)
                        },
                        TkPad: function(e, n, t) {
                            return d.WVDuX(e, n, t)
                        },
                        AsrGC: function(e, n) {
                            return d.ZFoeQ(e, n)
                        },
                        ScXJC: d.HfBVH,
                        kvEDA: "SUmuT",
                        Olitl: "Failed to fetch final URL",
                        emFpl: d.aqWdx
                    };
                    if (d.RSFGQ("TSwAW", d.NhZHe)) return n.getElementsByClassName("ehlq8k34")[0];
                    var i = setInterval((r => {
                        var d = {
                            LMfRZ: o.LMaAV,
                            MYEAt: function(e, n) {
                                return o.VVmkr(e, n)
                            },
                            Eytrh: function(e, n, t) {
                                return o.TkPad(e, n, t)
                            },
                            lqONi: function(e, n) {
                                return o.AsrGC(e, n)
                            },
                            Upoad: o.ScXJC,
                            cvzvb: "YMZRU",
                            TMMjX: function(e, n) {
                                return e(n)
                            },
                            XITFO: function(e, n) {
                                return o.AsrGC(e, n)
                            },
                            QKufx: o.kvEDA,
                            KDxVa: o.Olitl
                        };
                        if ("vNTYZ" !== o.emFpl) throw new n(d.KDxVa);
                        t.forEach((e => {
                            if (!d.lqONi(d.Upoad, d.cvzvb)) return d.MYEAt(c, u) || (d.Eytrh(l, a, s), f);
                            if (this[e[0]] = d.TMMjX(O, window[e[1]]), !window[e[1]] && !h) {
                                if (d.XITFO(d.QKufx, d.QKufx)) throw n(d.LMfRZ), ".";
                                h = !0, m = e[1], console.log(e)
                            }
                        })), m && (o.VVmkr(e, m), clearInterval(i))
                    }), 500)
                })), m
            }
            r.log(d.Ajvso, o), i = !0
        }

        function I(t, c, u) {
            if (e.VcNjN("VMgKX", e.MQSfW)) {
                if (s) {
                    let n = M.createElement("a");
                    n.download = e.ReRtv(A, e.DBNot), n.href = L, D.body.appendChild(n), n.click(), n.remove()
                } else e.ALtNs(p, v);
                g[w] = E
            } else {
                if (!c) return alert(e.GOyjB);
                var l = _getIds(),
                    a = [];
                for (let n = 0; e.hKtzI(n, t); n++) a.push([e.fxsrs("w", n), "win" + n]);
                l.forEach((({
                    id: t
                }, l) => {
                    var s = {
                        duYDy: "hNKWQ",
                        wbQrp: function(n, t) {
                            return e.ZWHDR(n, t)
                        },
                        amCNW: e.EFEXF,
                        gckoa: "download",
                        bjTfQ: e.ZXgTm
                    };
                    if (e.JGSEl(e.GPRYc, "aDghu")) {
                        const {
                            name: e,
                            value: t
                        } = n;
                        return {
                            name: e,
                            value: t
                        }
                    }
                    e.lRKuT(P, a).then((e => {
                        var n = {
                            oGSRd: function(e, n) {
                                return e !== n
                            },
                            StUcf: s.duYDy,
                            ERHAh: function(e, n) {
                                return s.wbQrp(e, n)
                            },
                            dWicC: s.amCNW
                        };
                        if (!info[t] && !localStorage[t] || u) {
                            console.log(s.gckoa, t, l), window[e] = downloadT(t, u, !0, !!c), window.addEventListener(s.bjTfQ, (function(t) {
                                n.oGSRd(n.StUcf, n.StUcf) ? this[r] = o[i] : window[e].close()
                            }));
                            var a = setInterval((t => {
                                (!window[e] || window[e].closed) && (window[e] = null, n.ERHAh(clearInterval, a), console.log(e, n.dWicC))
                            }), 300)
                        }
                    }))
                }))
            }
        }
        window.ch3 = O, window.getWin = P, WIP_ = I;
        var N = new n(e.IgVTF).set(e.dGDOm, e.DIvnx).on(e.RtXwl, (function(n) {
                N.set(e.dGDOm, e.kreRM), N.set(e.jOPpk, !0), e.njmwY(downloadT, e.XAZwH(setElement, location.href), !0, !0, !1, !0)
            })),
            X = new n("button").set(e.dGDOm, e.AAQiT).on(e.RtXwl, (function(n) {
                e.rlyap(e.cGtAv, e.cGtAv) ? (r.push(o), i = 1) : e.wULOZ(downloadT, e.fXpRx(setElement, location.href), !0, !0, !0, !0)
            })),
            H = new n(e.IgVTF).set("innerText", "PlayList MP3").on(e.RtXwl, (function(n) {
                if (e.MbTix(e.otLzG, "WkOJb")) e.NdPLm(WIP_, 2, !1, !1);
                else {
                    const e = i.createElement("a");
                    e.href = c, e.download = u, l.body.appendChild(e), e.click(), a.body.removeChild(e)
                }
            })),
            W = new n("button").set(e.dGDOm, "PlayList MP4").on(e.RtXwl, (function(n) {
                e.LLLDC(WIP_, 2, !0, !1)
            })),
            K = new n(e.IgVTF).set("innerText", e.AAQiT).on(e.RtXwl, (function(n) {
                downloadTikTok(!0, e.kThDD(setElement2, e.KfYxA(getClass, "ehlq8k34") ? getClass(e.yTGIE).innerText : location.href))
            })).style({
                color: e.RgUvH
            }),
            B = new n(e.IgVTF, {
                id: e.XqGUU
            }).set(e.dGDOm, e.AAQiT).on(e.RtXwl, (function(n) {
                e.mHnoq(downloadTikTok, !0, e.DDbRz(setElement2, e.TpkSi(getClass, e.yTGIE) ? getClass(e.yTGIE).innerText : location.href))
            })).style({
                color: e.RgUvH
            }),
            F = new n(e.IgVTF).set(e.dGDOm, e.DIvnx).on("click", (function(n) {
                e.mHnoq(downloadTikTok, !1, e.hGGRG(setElement2, e.QuejA(getClass, e.yTGIE) ? e.IDYFd(getClass, e.yTGIE).innerText : location.href))
            })).style({
                color: e.RgUvH
            });

        function J() {
            return document.querySelector(e.stpYB) || document.querySelector(e.dUItz)
        }

        function Z() {
            var t = {
                ILzCC: function(n, t, r) {
                    return e.UgVLv(n, t, r)
                },
                qfxCx: function(e, n) {
                    return e(n)
                },
                zuOWG: "click",
                aOzuc: e.InTru,
                DTEiE: function(n, t) {
                    return e.ZvxzI(n, t)
                },
                zYnIV: e.VCAEE,
                iMuoS: "SAmAT",
                hbDUi: e.aqRau,
                hcbIq: e.VeAaP,
                yqriu: function(n, t) {
                    return e.ZWHDR(n, t)
                }
            };
            const r = e.pSuvw(J);

            function o() {
                var e = {
                    PfHOh: function(e, n, r) {
                        return t.ILzCC(e, n, r)
                    },
                    fXlrI: function(e, n) {
                        return t.qfxCx(e, n)
                    },
                    CBXSM: t.zuOWG,
                    GgZlZ: function(e, n) {
                        return e === n
                    },
                    WMmzg: "VOD",
                    aEmod: t.aOzuc
                };
                if (t.DTEiE(t.zYnIV, t.iMuoS)) {
                    var n = {
                        USlGx: function(n, t, r) {
                            return e.PfHOh(n, t, r)
                        }
                    };
                    let t = new g(e.fXlrI(w, E)).on(e.CBXSM, (function() {
                        var e;
                        [X, H, W, t] = B.pathname.split("/"), n.USlGx(F, (e => e.href)(((e = new J(Z.href)).host = "clipr.xyz", e)), re)
                    })).appendTo(V.parentNode);
                    e.GgZlZ(O, e.WMmzg) ? t.element.querySelector(e.aEmod).innerText = X : t.element.querySelector(H).innerText = W
                } else try {
                    return !(![...document.querySelectorAll(t.hbDUi)].filter(u).filter((e => !a(e)))[0] && !query(t.hcbIq)) && ([...document.querySelectorAll(t.hbDUi)].filter(u).filter((e => !a(e)))[0] || t.yqriu(query, t.hcbIq))
                } catch (n) {
                    return !1
                }
            }
            console.log(r), N.appendTo(r), X.appendTo(r), console.log(e.DAGwi);
            var i = !1;
            e.gHGUY(setInterval, (() => {
                var t = {
                    nsapg: function(n) {
                        return e.kKUTc(n)
                    },
                    KQSZR: function(n) {
                        return e.YQVTy(n)
                    }
                };
                e.hZhMF(i, e.yjsFG(o)) && e.rdkbn(o) ? (console.log(e.EWfUV), e.EUrbP(setTimeout, (() => {
                    t.nsapg(o).append(n.br.element), t.nsapg(o).append(H.element), t.KQSZR(o).append(W.element)
                }), 100)) : i != e.QQDot(o) && !e.iHOVd(o) && console.log(e.CHTiG), i = o()
            }), 100)
        }
        if (console.log("bruh"), a1 = [
                ["youtube", function() {
                    var n = {
                        gBPeT: function(e) {
                            return e()
                        },
                        QyPZl: function(n) {
                            return e.HpQXl(n)
                        },
                        zHYlP: e.cAZjF,
                        bkctT: "Posting",
                        SQxuT: function(n) {
                            return e.bkwWB(n)
                        },
                        GpWWe: function(n, t) {
                            return e.bpByV(n, t)
                        },
                        cGJMu: e.xnAMr
                    };
                    if (e.btzyI != e.btzyI) {
                        if (!n.GpWWe(a, s)) throw new w(n.cGJMu);
                        const e = d.createElement(m.tagName);
                        for (let n of E.attributes) e.setAttribute(n.name, n.value);
                        return e.style.cssText = p.style.cssText, e.className = v.className, e.innerHTML = g.innerHTML, e
                    }
                    e.iSlxq(l, (function() {
                        n.gBPeT(J);
                        if (!n.QyPZl(J)) throw n.zHYlP;
                        return console.log(n.bkctT), n.SQxuT(Z)
                    }), {
                        callback: function() {}
                    })
                }],
                [e.okoFa, function() {
                    var u = {
                        zNKrv: e.Tinno,
                        zsiih: function(n, t) {
                            return e.JzSjS(n, t)
                        },
                        YVpAt: "KmZEz",
                        sqoeA: e.jSByS,
                        poCyt: function(e, n, t) {
                            return e(n, t)
                        },
                        HAkdn: e.vwgdN,
                        aHCMq: e.iRDYp,
                        LByai: e.bQXjK,
                        fmyen: "video/mp4",
                        dfLYc: "none",
                        SCSCk: function(n, t) {
                            return e.VxAxA(n, t)
                        },
                        MdMnH: function(n, t) {
                            return e.upGZq(n, t)
                        },
                        uJJKK: e.VeAaP,
                        HiZfc: function(e, n) {
                            return e == n
                        },
                        ZgHQw: function(n, t) {
                            return e.YyRSt(n, t)
                        },
                        BseVx: e.pFJip,
                        AgDNf: e.NOFes,
                        fxgwZ: e.xsCIB,
                        YFBmm: e.qOmZc,
                        HfSUw: function(e, n) {
                            return e != n
                        },
                        AOWLz: "itTcr",
                        DfLNG: e.EWfUV,
                        tIfOH: function(e) {
                            return e()
                        },
                        iKUnz: "HCtrF",
                        iOKYN: e.Fvgpi,
                        miIjp: function(n, t) {
                            return e.qmQmf(n, t)
                        },
                        GPfSc: function(n, t, r) {
                            return e.BHtpc(n, t, r)
                        }
                    };
                    e.cldFk(addEventListener, e.aWqiH, (function() {
                        var e = {
                            BibST: u.fmyen,
                            sHRmz: u.dfLYc,
                            ETsph: function(e, n) {
                                return u.SCSCk(e, n)
                            },
                            biwoe: ".mp4",
                            HsYEB: "was clicked",
                            IzOmy: "#header-description",
                            ePeaE: function(e, n) {
                                return u.MdMnH(e, n)
                            },
                            pkOlv: u.uJJKK,
                            vQyHi: function(e, n) {
                                return u.HiZfc(e, n)
                            },
                            wMPHW: function(e, n) {
                                return u.ZgHQw(e, n)
                            },
                            UaIDX: function(e, n, t) {
                                return u.poCyt(e, n, t)
                            },
                            bYTbd: u.HAkdn,
                            INxUP: u.BseVx,
                            mFvUz: u.AgDNf,
                            mWUks: u.fxgwZ,
                            WgsZV: function(e, n) {
                                return e !== n
                            },
                            zGpun: u.YFBmm,
                            TbyIw: function(e, n) {
                                return u.HfSUw(e, n)
                            },
                            VVmfN: u.AOWLz,
                            YHcKu: u.DfLNG,
                            YKbUG: function(e) {
                                return u.tIfOH(e)
                            },
                            ODndY: function(e) {
                                return e()
                            },
                            NaxeS: u.iKUnz,
                            BdQsT: u.iOKYN,
                            eGVOW: u.aHCMq,
                            qgEyM: "Posted Buttons"
                        };
                        if (u.miIjp("GwtDd", "GwtDd")) {
                            var w = new l(a, {
                                    type: e.BibST
                                }),
                                y = s.createObjectURL(w),
                                b = f.createElement("a");
                            b.style.display = e.sHRmz, b.href = y, b.download = e.ETsph(d, e.biwoe), m.body.appendChild(b), b.click(), h.body.removeChild(b), p.revokeObjectURL(y)
                        } else u.GPfSc(l, (function() {
                            var e = {
                                aMAWj: u.zNKrv
                            };
                            if (u.zsiih(u.YVpAt, u.sqoeA)) {
                                if (!u.poCyt(abc_, u.HAkdn, "data-e2e")) throw u.aHCMq;
                                K.appendTo(document.querySelectorAll(u.LByai)), F.appendTo(document.querySelectorAll(".e1mecfx011"))
                            } else n.warn(e.aMAWj)
                        }), {
                            callback: function() {}
                        }), l((function() {
                            var u = {
                                GIqTR: e.IzOmy,
                                UefrW: function(n, t) {
                                    return e.ePeaE(n, t)
                                },
                                xIPdh: e.pkOlv,
                                eIkwE: function(n, t) {
                                    return e.vQyHi(n, t)
                                },
                                GaVJM: function(n, t) {
                                    return e.wMPHW(n, t)
                                },
                                QmjiM: function(n, t, r) {
                                    return e.UaIDX(n, t, r)
                                },
                                xaQYp: e.bYTbd,
                                sUHnK: e.INxUP,
                                dbDeO: e.mFvUz,
                                MhsYU: e.mWUks,
                                aygZY: function(n, t) {
                                    return e.WgsZV(n, t)
                                },
                                gsYOw: e.zGpun,
                                PXIfL: function(e) {
                                    return e()
                                },
                                VUXVP: function(n, t) {
                                    return e.TbyIw(n, t)
                                },
                                VlVRZ: e.VVmfN,
                                FwWRw: "HNcbQ",
                                nkqaF: e.YHcKu,
                                KEWNC: function(n) {
                                    return e.YKbUG(n)
                                },
                                tAYjV: "buttons are gone?!?!",
                                MZPLD: function(n) {
                                    return e.ODndY(n)
                                }
                            };
                            if (!e.wMPHW(e.NaxeS, e.NaxeS)) {
                                var l = {
                                        uyytL: e.HsYEB
                                    },
                                    a = s.call(f, d, m);
                                return a._click = a.click, a.click = function() {
                                    if (a.log(a, l.uyytL, a.tagName), "A" == a.tagName) {
                                        U.log("Caught", a);
                                        var e = a.download,
                                            n = a.href;
                                        j = {
                                            id: new Y(Q.href).searchParams.get("v"),
                                            href: n,
                                            title: e
                                        }
                                    } else a._click.apply(a)
                                }, E.log(a, "was created", a.tagName), a
                            } {
                                if (!document.getElementsByClassName(e.BdQsT)[0]) throw e.eGVOW;

                                function h() {
                                    var e = {
                                        GYngk: function(e, n) {
                                            return u.eIkwE(e, n)
                                        },
                                        dglpu: "this",
                                        mevYS: "Searching"
                                    };
                                    if (u.GaVJM("vBkQy", "vBkQy")) try {
                                        return !!u.QmjiM(abc_, u.xaQYp, u.sUHnK).parentNode && abc_(u.xaQYp, u.sUHnK).parentNode
                                    } catch (n) {
                                        if ("ouwRK" !== u.dbDeO) return !1;
                                        if (e.GYngk(r.style.display, "none")) throw c.getElementById("convert1").click(), e.dglpu;
                                        i.log(e.mevYS)
                                    } else try {
                                        return !(![...v.querySelectorAll(u.GIqTR)].filter(g).filter((e => !G(e)))[0] && !u.UefrW(E, u.xIPdh)) && ([...M.querySelectorAll(u.GIqTR)].filter(A).filter((e => !G(e)))[0] || D(u.xIPdh))
                                    } catch (e) {
                                        return !1
                                    }
                                }
                                K.appendTo(document.getElementsByClassName(e.BdQsT)[0]), F.appendTo(document.getElementsByClassName(e.BdQsT)[0]), console.log(e.qgEyM);
                                var p = !1;
                                e.UaIDX(setInterval, (() => {
                                    var e = {
                                        ZRXMY: u.MhsYU,
                                        Hrwkn: function(e, n) {
                                            return u.aygZY(e, n)
                                        },
                                        lveGm: u.gsYOw,
                                        eOBnw: function(e) {
                                            return u.PXIfL(e)
                                        },
                                        eiPMr: function(e) {
                                            return u.PXIfL(e)
                                        },
                                        YKwvA: function(e) {
                                            return e()
                                        }
                                    };
                                    u.VUXVP(p, u.PXIfL(h)) && u.PXIfL(h) ? u.VlVRZ === u.FwWRw ? t.value = r : (console.log(u.nkqaF), u.QmjiM(setTimeout, (() => {
                                        var t;
                                        e.Hrwkn(e.lveGm, e.lveGm) ? r((e => e.href)(((t = new o(i.href)).host = "clipr.xyz", t)), e.ZRXMY) : (e.eOBnw(h).append(n.br.element), e.eiPMr(h).append(K.element), e.YKwvA(h).append(F.element))
                                    }), 100)) : u.VUXVP(p, u.PXIfL(h)) && !u.KEWNC(h) && console.log(u.tAYjV), p = u.MZPLD(h)
                                }), 100)
                            }
                        }), {
                            callback: function() {}
                        })
                    }))
                }]
            ].filter((e => location.host.includes(e[0])))[0], a1 && a1[1] && a1[1](), console.log(a1), delete a1, __ex_ = J, location.href.includes(e.VOPTO) || location.href.includes(e.GoUNW)) {
            if (e.YTQUJ(e.jfgAQ, e.jfgAQ)) {
                console.log(e.VOPTO);

                function ee() {
                    if (e.YRrpf("DRVMW", e.lXPaO)) {
                        var [n, t] = name.split(",");
                        txtUrl.value = "https://www.youtube.com/" + ("1" == t ? e.ycojb : "watch?v=") + n, e.hSQGk(getListFormats)
                    } else o.log({
                        a: i,
                        b: c,
                        c: u
                    })
                }

                function ne() {
                    var n = {
                        Rofvb: function(n) {
                            return e.xeeRu(n)
                        }
                    };
                    if (e.oaqod("rLPvQ", "rLPvQ")) n.Rofvb(c).append(u.br.element), n.Rofvb(l).append(a.element), n.Rofvb(s).append(f.element);
                    else {
                        var t = videoTitle.innerText.split("\n"),
                            r = t.map((e => e.match(/[:\d]+/gi))).filter((e => !!e)).pop().pop(),
                            o = t[0].split(e.euEJi)[1],
                            i = findhref2(videoTitle.parentNode)[0].href,
                            d = {
                                id: setElement(location.href),
                                href: i,
                                title: o,
                                length: r
                            };
                        (opener || window).postMessage(d, "*"), console.log(e.pqzaz)
                    }
                }
                return e.xKeMp(setInterval, (() => {
                    document.getElementById("error-text").innerText.length > 5 && location.reload()
                }), 2e4), console.log(e.XtCmv), void e.DvORq(l, (function(n = function() {}) {
                    var t = {
                        JUnMq: e.yLcoa,
                        ycpVi: function(e) {
                            return e()
                        }
                    };
                    e.khUVF(ee), e.RwcaD(l, (function(e = function() {}) {
                        t.JUnMq != t.JUnMq ? r.setAttribute(o.name, i.value) : t.ycpVi(ne)
                    }), {
                        callback: close
                    })
                }), {
                    callback: function() {}
                })
            }
            u.log("e", l), a.value = s ? "https://www.youtube.com/watch?v=" + f : "https://www.youtube.com/shorts/" + d, m.parentElement.children[1].click()
        } else if (location.href.includes(e.LszvT)) {
            console.log(e.zFWKz);
            let [De, Ge] = name.split(",");
            e.VhnQn(l, (function(n = function() {}) {
                document.getElementById(e.nHcXJ).value = "https://www.youtube.com/" + (e.Mokvs(Ge, "1") ? e.ycojb : e.sYAQo) + De, document.getElementById("btn-submit").click(), console.log(De, Ge)
            }), {
                callback: function() {}
            }), e.EFQZf(l, (function(t = function() {}) {
                var r = {
                    QYVKt: function(e, n, t) {
                        return e(n, t)
                    },
                    CiBqJ: "#cardApiIframe"
                };
                if (e.YyRSt(e.DbYgj, e.YoQyR)) r.QYVKt(n, {
                    log: !1
                }, r.CiBqJ);
                else if (console.log(result.children.length), !result.children.length) throw document.getElementById(e.TXCtN).click(), e.kQdPz
            }), {
                int: 1e3,
                callback: function() {}
            }), e.pfngJ(l, (function() {
                var n = {
                    mszQW: e.UmdmQ,
                    ujczF: function(e, n) {
                        return e(n)
                    },
                    UAAKW: e.Fvckb
                };
                e.CVwSb === e.eaoSN ? (t(n.mszQW) || n.ujczF(r, n.UAAKW)[1]).click() : document.getElementById(e.VLLxT).click()
            }), {
                callback: function() {}
            }), e.xOzvi(l, (function() {
                for (var n = "0|1|3|2|4".split("|"), t = 0;;) {
                    switch (n[t++]) {
                        case "0":
                            var r = e.fwedW($, e.QfEbA)[0].innerText;
                            continue;
                        case "1":
                            var o = downloadbtn.href;
                            continue;
                        case "2":
                            console.log("Posted");
                            continue;
                        case "3":
                            var i = {
                                id: De,
                                href: o,
                                title: r,
                                length: {}
                            };
                            continue;
                        case "4":
                            e.cbvwS(opener, window).postMessage(i, "*");
                            continue
                    }
                    break
                }
            }), {
                callback: close
            })
        } else if (location.href.includes("yt5s.biz")) {
            async function te(n) {
                for (; !document.querySelector(n);) await e.fwedW(g, 0);
                return !0
            }(async function() {
                let [n, t] = name.split(",");
                if (!n.length || !t.length) return console.warn(e.bVLYR);
                var c = "https://www.youtube.com/" + (e.zfLKf(t, "1") ? "shorts/" : "watch?v=") + n;
                await e.fXpRx(te, e.gKoAz), console.log(e.qMHOJ), document.querySelector(e.gKoAz).value = c, await e.lwOdh(te, e.yArPT), console.log("GEtting res"), await g(100), document.querySelector(e.yArPT).click(), await e.BTszp(te, e.yCjUH), console.log("Got Res");
                var u = document.querySelector(e.yCjUH).innerText,
                    l = [0];
                return [...document.querySelector(e.qHHrM).querySelector(e.BeTQv).querySelectorAll("tr")].forEach((n => {
                    var t = {
                            SAlYi: e.mKsbh
                        },
                        c = n.innerText.match(/(?<res>\d+)(p|P)/i) || {};
                    c.groups && (e.RMDCY(e.YHhcG, e.UtoFd) ? this.element = r.constructor.name.includes(t.SAlYi) && o || function() {
                        for (let e in arguments[1]) arguments[0].setAttribute(e, arguments[1][e]);
                        return arguments[0]
                    }(i.createElement(arguments[0]), arguments[1]) : (c = Number(c.groups.res), e.GwoXL(l[0], c) && (l[0] = c, l[1] = findhref2(n)[0].href, l[2] = n)))
                })), {
                    id: n,
                    title: u,
                    href: l[1],
                    mp4: !0,
                    res: l[0]
                }
            })().then((function(t) {
                e.weOqH(e.vsZQD, "cYZHk") ? (e.iGStO(opener, window).postMessage(t, "*"), location.href = t.href) : n.querySelector(e.kjjrx).click()
            }), console.warn)
        } else if (location.href.includes(e.JyPkY))(async function() {
            var n = {
                YCjzz: "1080"
            };
            for (await e.zjwyd((async function(t) {
                    var d, m = {
                        znGKm: function(n, t) {
                            return e.yUsOj(n, t)
                        },
                        AkGsM: function(n, t) {
                            return e.ehWZC(n, t)
                        },
                        SIBQc: function(n, t) {
                            return e.kazZC(n, t)
                        }
                    };
                    if (e.QKMfC(e.ljieA, "tIjqC")) return !(!m.znGKm(c, u).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/) || !m.AkGsM(m.SIBQc(l, a).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/)[8].length, 11)) && m.znGKm(s, f).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/)[8];
                    for (; !document.querySelector(t);) e.hAYkO != e.hAYkO ? r((e => e.href)(((d = new o(i.href)).host = "clipr.xyz", d)), n.YCjzz) : await g(0);
                    return !0
                }), "#A_downloadUrl"); !document.querySelector(e.NNNcV).href.length;) await e.KlJtR(g, 0);
            console.log(e.tPtgk);
            var t = document.querySelector("#myModalLabel").innerText,
                d = {
                    href: document.querySelector(e.NNNcV).href,
                    title: t
                };
            (opener || window).postMessage(d, "*")
        })().then(close, console.warn);
        else if (location.href.includes("en3.onlinevideoconverter.pro")) {
            let [Ue, je] = name.split(",");
            if (!Ue.length || !je.length) return console.Warn(e.zBquk);
            var re = "https://www.youtube.com/" + ("1" == je ? e.ycojb : "watch?v=") + Ue;
            let Ye = function() {};
            e.zjvkt(l, (function(n = function() {}) {
                document.getElementById("texturl").value = "https://www.youtube.com/" + ("1" == je ? e.ycojb : e.sYAQo) + Ue, document.getElementById("convert1").click(), console.log(e.xYyKM)
            }), {
                callback: Ye
            }), e.DvORq(l, (function() {
                if (e.amBPb(stepProcess.style.display, "none")) throw document.getElementById(e.YVeQr).click(), e.dpxJT;
                console.log(e.lgcVE)
            }), {
                callback: Ye
            }), e.tjZDI(l, (function() {
                var n = {
                    pYcWM: e.YKDld
                };
                if (e.vOMre != e.vOMre) t.warn(n.pYcWM, r);
                else
                    for (var o = e.fdUKL.split("|"), i = 0;;) {
                        switch (o[i++]) {
                            case "0":
                                (opener || window).postMessage(c, "*");
                                continue;
                            case "1":
                                console.log(e.UkFve);
                                continue;
                            case "2":
                                var c = {
                                    id: Ue,
                                    href: l,
                                    title: u,
                                    length: {}
                                };
                                continue;
                            case "3":
                                console.log(e.uMOIE);
                                continue;
                            case "4":
                                var {
                                    title: u,
                                    href: l
                                } = e.yUsOj($, "#download-720-MP4") ? $("#download-720-MP4")[0] ? e.lCfuc($, e.tGqQu)[0] : e.UIyWo($, e.tGqQu) : $(e.tGqQu);
                                continue;
                            case "5":
                                if (e.TYyPH(document.getElementById(e.HIONu).children.length, 0)) throw "";
                                continue
                        }
                        break
                    }
            }), {
                callback: close
            })
        } else if (location.href.includes(e.qkMOQ)) {
            var [oe, ie] = name.split(",");
            e.Uvolc(addEventListener, e.aWqiH, (function() {
                e.jbKeD(l, (function() {
                    s_input.value = oe, e.hSQGk(ksearchvideo), setTimeout(ksearchvideo, 1e3)
                }), {
                    callback() {}
                })
            })), e.pvbYe(l, (function() {
                e.vbvVg(e.aceYa, e.OKoyZ) ? (document.getElementsByClassName("clearfix")[0].innerText, function() {
                    var n = {
                        IYkbq: function(n, t) {
                            return e.OQSlg(n, t)
                        },
                        IRygo: "Appending:"
                    };
                    console.log(e.VjoNP);
                    let t = {
                        title: document.getElementsByClassName("clearfix")[0].innerText,
                        links: e.juVYl(findhref2, document.getElementsByClassName("tik-video")[0]).map((e => e.href)),
                        mp4: e.Mokvs(ie, 1),
                        info: e.exgcI(setElement2, oe)
                    };
                    onmessage = function(t) {
                        var r = {
                            MxmOc: function(n, t) {
                                return e.QxHgJ(n, t)
                            }
                        };
                        if ("https://www.tiktok.com" == t.origin)
                            if (e.ArbnB("zbBpw", e.fvTtr)) c.children.length && (d = m.children, h.forEach = [].forEach, p.forEach((e => {
                                r.MxmOc(g, e)
                            })));
                            else {
                                var {
                                    data: {
                                        s: o,
                                        url: i,
                                        title: u
                                    }
                                } = t;
                                if (console.log("Handled", {
                                        s: o,
                                        url: i,
                                        title: u
                                    }, t), o) setTimeout(close, 100);
                                else {
                                    if (e.JzSjS(e.azDHc, e.azDHc)) {
                                        this.element.append(a.element || s), f.log("T:", {
                                            targets: d,
                                            fe: m && h.forEach
                                        });
                                        for (let e = 0; n.IYkbq(e, w.length); e++) {
                                            let t = A[e];
                                            L.log(n.IRygo, {
                                                element: t,
                                                target: this
                                            }), this.element.append(t.element || t)
                                        }
                                        return this
                                    }
                                    M(i, u, close)
                                }
                            } else console.log(e.OoLhL, t)
                    }, e.YQUNt(opener, window).postMessage(t, "*")
                }()) : r(o(i.href), !0, !0, !0, !0)
            }), {
                callback() {}
            })
        } else if (document.domain.includes(e.vPMDL)) {
            if (e.JGSEl(e.nDQkS, e.nDQkS)) throw new t("HTTP error! Status: " + r.status);
            console.log(e.XoCqv), e.RODGY(addEventListener, e.QeejI, (function({
                isTrusted: n,
                ctrlKey: o,
                shiftKey: a,
                code: f,
                target: d,
                target: {
                    tagName: m
                }
            }) {
                var h = {
                    GJpKj: function(n, t) {
                        return e.NqzXB(n, t)
                    }
                };
                e.odBUL(e.DroeL, e.zOUMU) ? ![e.nXgGn, e.EeXme].includes(m) && !o && !a && n && e.ehWZC(f, e.mDbQY) && (e.BjzxP("vmjja", e.tGkbV) ? (e.oYRqQ(abc_, e.UmdmQ) || e.TnTcq(abc_, e.Fvckb)[1]).click() : t.value = r) : (i = c.children, u.forEach = [].forEach, l.forEach((e => {
                    h.GJpKj(s, e)
                })))
            }))
        } else document.domain.includes(e.fabjC) && location.href.includes(e.geYum) && console.warn("using loader.to api");
        const ce = window.trustedTypes && trustedTypes.createPolicy(e.mHGBm, {
                createHTML: e => e,
                createScriptURL: e => e
            }),
            ue = "\n    /* Default iframe styles */\n    #cardApiIframe {\n        width: 100%;\n        height: 100%;\n        transition: all 2.5s ease-in-out;\n    }\n\n    /* Collapse animation when the class is toggled */\n    .collapse-frame {\n        width: 0;\n        height: 0;\n        margin-left: auto;\n        margin-right: auto;\n        transition: all 2.5s ease-in-out;\n    }\n",
            le = document.createElement("style");

        function ae(n) {
            var t = {
                sIsVu: e.EeXme,
                velMI: e.mDbQY,
                HCKOu: function(e, n) {
                    return e(n)
                },
                UzrXG: e.Fvckb
            };
            if (e.zxqiF("Uwsjq", e.KyiPB)) o.log("Added MiniPlayer Toggle with I"), e.uSguz(i, e.QeejI, (function({
                isTrusted: e,
                ctrlKey: n,
                shiftKey: r,
                code: o,
                target: i,
                target: {
                    tagName: c
                }
            }) {
                !["INPUT", t.sIsVu].includes(c) && !n && !r && e && o == t.velMI && (t.HCKOu(s, "Close player page") || f(t.UzrXG)[1]).click()
            }));
            else {
                const t = de.element;
                n ? e.XRADK(e.uzbaq, e.uzbaq) ? t.classList.add(e.lnhsL) : (r = 0, o = i.playbackRate) : t.classList.remove(e.lnhsL)
            }
        }
        le.type = e.uvsvE, le.appendChild(document.createTextNode(ce ? ce.createHTML(ue) : ue));
        var se = "https://www.youtube.com/watch?v=" + e.RkzHn(setElement, location.href) + "&adUrl=https://www.youtube.com/channel/UCOA8lE9-0XnEIdHqjfQUz1A?sub_confirm=1",
            fe = ce ? ce.createScriptURL(e.abnru(e.drAcK, se)) : e.ReRtv(e.drAcK, se);
        const de = new _element(e.QuQbk, {
                id: e.yxoRF,
                scrolling: "no",
                width: e.GwpMa,
                height: e.GwpMa,
                allowtransparency: e.uympM,
                style: e.XtRUe,
                src: fe
            }),
            me = new _element("script", {
                src: ce ? ce.createScriptURL("https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.9/iframeResizer.min.js") : e.iPsPw
            });
        me.element.addEventListener(e.aWqiH, (() => {
            e.ArbnB(typeof iFrameResize, e.wOceW) ? iFrameResize({
                log: !1
            }, "#cardApiIframe") : console.error(e.RGjXb)
        }));
        const he = new _element("div").append(de, me);
        document.querySelector("#secondary.ytd-watch-flexy");
        var pe = e.KEpSe(setElement, location.href);
        de.element.addEventListener(e.aWqiH, (() => {
            console.log(e.GloZg), e.bmUSZ(ae, !1)
        })), e.driAX(ae, !0);
        var ve = 0,
            ge = 1,
            we = 0;
        e.XvRdf(setInterval, (g => {
            var w = {
                vqQjx: e.dGDOm,
                erpbh: "Wait...",
                yuyXk: e.jOPpk,
                GuVhl: function(n, t) {
                    return e.BScAX(n, t)
                },
                tgusK: function(n, t) {
                    return e.OPgQM(n, t)
                },
                baGsc: function(n, t, r) {
                    return e.xOzvi(n, t, r)
                },
                iTDwe: "dlbutton"
            };
            if (e.weOqH(e.iJlDa, e.ClszP)) {
                var y = document.querySelector(e.OoEBK),
                    b = document.querySelector(e.dBdBQ);
                if (se = "https://www.youtube.com/watch?v=" + setElement(location.href) + "&adUrl=https://www.youtube.com/channel/UCOA8lE9-0XnEIdHqjfQUz1A?sub_confirm=1", fe = ce ? ce.createScriptURL(e.BTUzJ(e.drAcK, se)) : "https://loader.to/api/card2/?url=" + se, b)
                    if ("QddRb" !== e.ihcjY) {
                        e.NqzXB(c, e.hsoTd);
                        var {
                            id: T,
                            href: k,
                            isShort: x
                        } = u(l.target.parentElement.parentElement).map((e => ({
                            href: e.href,
                            short: e.href.includes("/short"),
                            id: d(e.href)
                        }))).filter((e => e.id))[0];
                        e.qewqc(s, T, !1, !0, !1, !1, x ? new f(k) : null)
                    } else !b.querySelector(e.CuUCC) && (e.jdHSY(ae, !0), b.parentNode.prepend(le), b.prepend(he.element), console.log(e.dcboe)), e.IDYFd(setElement, location.href) != pe && (ae(!0), de.set("src", fe), console.log("Fixed That Thing"), pe = e.rkSZL(setElement, location.href));
                var C = query(e.jRDzv);
                C && !e.iNQVt(a, C) && C.click();
                var R = document.getElementsByClassName("ytp-ad-button-icon")[0];
                try {
                    if (e.ZQDBJ(R, !V)) e.rkvil(e.QHImZ, "ddQIM") ? (i.set(w.vqQjx, w.erpbh), c.set(w.yuyXk, !0), u(l(a.href), !0, !0, !1, !0)) : (console.log(e.iYMcU), V = 1, y.muted = 1);
                    else if (!R && V)
                        if (e.NzrkB(e.Yzbik, e.Yzbik)) {
                            var {
                                data: {
                                    href: x,
                                    links: S,
                                    title: q,
                                    length: z,
                                    id: E,
                                    mp4: M,
                                    info: {
                                        username: A
                                    }
                                }
                            } = m;
                            if (h.log(e.DbAEt, {
                                    href: x,
                                    title: q,
                                    length: z,
                                    id: E,
                                    links: S,
                                    mp4: M
                                }, p), v.origin == e.wMBgp) q = j, Y(M ? S[0] : S.pop(), e.fxsrs(e.kQSVC(e.yDeBs(A, e.RHkex), q), M ? e.dnOCz : ".mp3"));
                            else {
                                if (V) {
                                    var L = H.createElement("a");
                                    L.download = q + e.DBNot, L.href = x, W.body.appendChild(L), L.click(), L.remove()
                                } else I(x);
                                N[X] = x
                            }
                        } else {
                            console.log(e.Dnsak);
                            try {
                                y.muted = 0
                            } catch (x) {
                                e.gNkfY(e.zukbJ, "XrHmH") ? console.warn(e.Tinno) : (this.title = {
                                    body: n || e.ZAnRa,
                                    color: "darkgrey",
                                    size: e.nxQTV
                                }, this.body = {
                                    color: "#008f68",
                                    size: e.nxQTV
                                })
                            }
                            V = 0
                        }
                } catch {}
                var D = [...document.querySelectorAll("#song-video"), ...document.querySelectorAll(e.BPGCZ)].map((e => [...e.querySelectorAll("button")].filter((e => e.className.includes("skip")))[0])).filter((e => !!e))[0];
                D ? e.NtJav === e.QpinI ? w.GuVhl(t, r) : ((!we || e.MsrOi(y.playbackRate, 16)) && (we = 1, y.playbackRate = 16, console.log(e.rvXQX)), D.click(), ge = 0) : e.TAJrR(!ge, y) ? (we = 0, ge = 1, y.playbackRate = ve, console.log(e.JhQBh)) : y && (we = 0, ve = y.playbackRate);
                var G = document.getElementsByClassName(e.LbUBM)[2];
                G && (G.click(), console.log(e.MRpbQ));
                var U = [...document.querySelectorAll(e.mLmCo)].filter((e => e.innerText.includes("Ads")))[0];
                U && (U.click(), location.href.includes(e.bjijx) && location.reload())
            } else var E = "",
                M = w.GuVhl(o, (e => {
                    w.tgusK(E, E.innerText) && (E = f.innerText, w.baGsc(d, w.iTDwe, E))
                }))
        }), 10)
    }();