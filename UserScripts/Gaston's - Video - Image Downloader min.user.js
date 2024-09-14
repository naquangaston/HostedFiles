// ==UserScript==
// @name Gaston's - Video/Image Downloader
// @namespace http://tampermonkey.net/
// @version 6.3
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
(function(e, n) {
    for (var t = 317, r = "u$We", o = 314, i = "1fL&", c = "2zVk", u = 318, l = "Ut$d", a = 309, s = w, f = w, d = w, h = Y, m = M();;) try {
        if (867970 === parseInt(h(t)) / 1 + parseInt(s(310, "5mi$")) / 2 * (-parseInt(f(308, r)) / 3) + parseInt(s(o, i)) / 4 * (-parseInt(s(311, c)) / 5) + parseInt(d(321, "(AAJ")) / 6 + -parseInt(s(u, "5C@1")) / 7 + -parseInt(d(315, l)) / 8 + parseInt(h(a)) / 9) break;
        m.push(m.shift())
    } catch (e) {
        m.push(m.shift())
    }
})(),
function() {
    var e = {
        RCXSl: "---",
        aIZgN: "darkgrey",
        UAyFk: "#008f68",
        zzSsx: "._aaqy",
        CGBve: "MediaButton",
        WRwbh: "button",
        nvLrT: "Get Videos",
        xPmpa: "click",
        whuDU: function(e, n) {
            return e !== n
        },
        aTHVn: "emZqu",
        mHvTl: "gcPdC",
        qlYNV: function(e, n) {
            return e !== n
        },
        sNenM: function(e, n) {
            return e === n
        },
        MRzqL: "GxFsb",
        GtejO: function(e, n) {
            return e !== n
        }
    };
    Object.assign(this || arguments[0], {
        CustomLog: class {
            constructor(n) {
                this.title = {
                    body: n || e.RCXSl,
                    color: e.aIZgN,
                    size: "1rem"
                }, this.body = {
                    color: e.UAyFk,
                    size: "1rem"
                }
            }
            setTitleBody(e) {
                return this.title.body = e, this
            }
            setTitleStyle({
                color: n,
                size: t
            }) {
                if (e.whuDU(e.aTHVn, e.mHvTl)) return e.qlYNV(n, void 0) && (this.title.color = n), void 0 !== t && (this.title.size = t), this;
                var r = new o(i.querySelector(e.zzSsx)),
                    o = new U("button", {
                        id: e.CGBve
                    }).set("innerText", "Get Images").on("click", m),
                    i = new P(e.WRwbh, {
                        id: "MediaButton2"
                    }).set("innerText", e.nvLrT).on(e.xPmpa, j);
                r.append(o, i)
            }
            setBodyStyle({
                color: n,
                size: t
            }) {
                return e.sNenM("GxFsb", e.MRzqL) ? (e.GtejO(n, void 0) && (this.body.color = n), void 0 !== t && (this.body.size = t), this) : this.element[arguments[0]]
            }
            log(e = "") {
                console.log("%c" + this.title.body + " | %c" + e, "color: " + this.title.color + "; font-weight: bold; font-size: " + this.title.size + ";", "color: " + this.body.color + "; font-weight: bold; font-size: " + this.body.size + "; text-shadow: 0 0 5px rgba(0,0,0,0.2);")
            }
        }
    })
}(globalThis);
const logger = new CustomLog("Script Logger");

function downloadFileAsTitle(e, n) {
    const t = document.createElement("a");
    t.href = e, t.download = n, document.body.appendChild(t), t.click(), document.body.removeChild(t)
}
var sleep = e => new Promise((n => setTimeout(n, e)));

function M() {
    var e = ["W6GvWQmPW5JdGmkAjSosEdTBWQ92", "mtCYmZi5ngf4tgjXAG", "mtmXoteWDezry0rd", "W7NdMxtdOCkhbmo2emkoWO/dT0PT", "xSkEamkVWPKEBW", "mJu0odqZmZDkzu1xDfe", "W48SamozW7JdL3efumksWQ5TW6W", "FCk/WQJcMmorWRDcuw3cHdRcOG", "W6GvWQeJW5hdGCkByCobsq50WOa", "DXj9DWOpC0i6W4j0lW", "hryMt8kdjLjooW", "WQSTcSkxxtelzCoEWPxcOmob", "C1DNWPFcOX8d", "mtm5odiYng16y0fnrW"];
    return (M = function() {
        return e
    })()
}
console.log("ok");
var adev, set_, CurrentPlayingSymbol = "▶";

function getV(e, n) {
    var t = {
        XBDiV: function(e, n) {
            return e(n)
        },
        wLlNQ: function(e, n, t) {
            return e(n, t)
        }
    };
    return t.XBDiV(GM_getValue, e) || (t.wLlNQ(GM_setValue, e, n), n)
}

function setV(e, n) {
    ! function(e, n, t) {
        e(n, t)
    }(GM_setValue, e, n)
}
async function getFinalUrlFromServer(e) {
    var n = {
        NeRVK: "TimeOut for",
        lcUwI: "wrwVH",
        fnLWg: function(e, n, t) {
            return e(n, t)
        },
        YHcrt: "http://localhost:3000/get-final-url",
        jAmbi: "POST",
        npEcT: "application/json",
        WtWWE: "Failed to fetch final URL"
    };
    try {
        if (n.lcUwI == n.lcUwI) {
            const t = await n.fnLWg(fetch, n.YHcrt, {
                method: n.jAmbi,
                headers: {
                    "Content-Type": n.npEcT
                },
                body: JSON.stringify({
                    url: e
                })
            });
            if (!t.ok) throw new Error(n.WtWWE);
            return (await t.json()).finalUrl
        }
        i.log(n.NeRVK, A), L = !0
    } catch (e) {
        return console.error("Error:", e), null
    }
}

function w(e, n) {
    var t = M();
    return w = function(n, r) {
        var o = t[n -= 308];
        if (void 0 === w.GPjGGt) {
            w.ntwLar = function(e, n) {
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
            }, e = arguments, w.GPjGGt = !0
        }
        var i = n + t[0],
            c = e[i];
        return c ? o = c : (void 0 === w.ymjQdg && (w.ymjQdg = !0), o = w.ntwLar(o, r), e[i] = o), o
    }, w(e, n)
}

function getCurrentVideoID() {
    var e, n = {
        WpWDR: function(e, n, t) {
            return e(n, t)
        },
        tTGyX: function(e) {
            return e()
        },
        JbgUW: "Cant append buttons yet",
        fhNKA: "JuDix",
        efEuZ: "ytp-video-menu-item ytp-button",
        GnuWk: "ytp-playlist-menu-button ytp-button",
        wHYdY: "Opening",
        lBtel: "Closiung",
        bBlGe: "Not Found!"
    };
    return [...document.getElementsByClassName(n.efEuZ)].forEach(((t, r) => {
        var o = {
            mpcQP: function(e) {
                return n.tTGyX(e)
            },
            ZRqpF: function(e) {
                return e()
            },
            iMNpf: n.JbgUW,
            xhWdW: function(e) {
                return n.tTGyX(e)
            }
        };
        n.fhNKA != n.fhNKA ? n.WpWDR(L, (function() {
            o.mpcQP(P);
            if (!o.ZRqpF(j)) throw o.iMNpf;
            return N.log("Posting"), o.xhWdW(X)
        }), {
            callback: function() {}
        }) : t.innerText.startsWith(CurrentPlayingSymbol) && (e = new URL(t.href).searchParams.get("v"))
    })), !e && document.getElementsByClassName(n.GnuWk)[0] ? (console.log(n.wHYdY), document.getElementsByClassName("ytp-playlist-menu-button ytp-button")[0].click(), n.tTGyX(getCurrentVideoID)) : e ? (console.log(n.lBtel), document.getElementsByClassName(n.GnuWk)[0].click(), e) : console.warn(n.bBlGe)
}

function sleep(e) {
    return new Promise((n => setTimeout(n, e)))
}
_getV = getV, _setV = setV, Number.prototype.decimal = function(e) {
    return function(e, n) {
        return e(n)
    }(Number, this.toFixed(e))
}, getSoundCloudUrl = () => {
    var e = {
        vfpQp: function(e) {
            return e()
        },
        GJkzT: "zLhzQ",
        SMlnr: "#app > div.playControls.g-z-index-control-bar.m-visible > section > div > div.playControls__elements > div.playControls__soundBadge.sc-ml-3x > div"
    };
    try {
        if ("XGZOD" !== e.GJkzT) return findhref2(document.querySelector(e.SMlnr))[0].href;
        e.vfpQp(C).click()
    } catch {
        return
    }
}, async function() {
    var e = {
        LFmNr: function(e, n) {
            return e(n)
        },
        rHPIv: function(e) {
            return e()
        },
        LScUE: function(e, n, t, r, o, i) {
            return e(n, t, r, o, i)
        },
        gPLYJ: "PbBfO",
        oaPvd: "innerText",
        qnKdJ: "MP3",
        cuOFH: "click",
        ryfvq: "fixed",
        JKkTv: "50%",
        lEjSm: "embedMP3",
        RyHxR: ".ytp-right-controls",
        sRwBP: "Appended",
        YTTcA: function(e) {
            return e()
        },
        Mreub: "qfQlE",
        bCobA: "button",
        WjqWw: "GetAudio",
        PkRIL: "HpJHB",
        txmXo: function(e, n, t) {
            return e(n, t)
        },
        VUdji: ".playbackSoundBadge__actions",
        yaBAW: "/embed/",
        bDOWe: function(e, n) {
            return e === n
        },
        ciDZx: "gTyGn",
        OIOzB: "Attaching to embeder >:]"
    };
    async function n(n, t = 3e4) {
        var r;
        for (sleep(t).then((e => r = !0)); !document.querySelector(n) && (await e.LFmNr(sleep, 0), !r););
        return document.querySelector(n)
    }
    if (location.href.includes(e.yaBAW)) {
        if (e.bDOWe("gTyGn", e.ciDZx)) return console.log(e.OIOzB), n(e.RyHxR).then((async n => {
            if (e.gPLYJ != e.gPLYJ) n.log("Iframe is fully loaded"), i(!1);
            else {
                let t = new _e("button", {
                    id: "embedMP3"
                }).appendTo(n).set(e.oaPvd, e.qnKdJ).on(e.cuOFH, (function() {
                    let n = e.rHPIv(getCurrentVideoID) || e.LFmNr(setElement, location.href);
                    e.LScUE(downloadT, n, !1, !0, !1, !0)
                })).style({
                    position: e.ryfvq,
                    right: e.JKkTv,
                    top: "80%"
                });
                for (; !document.getElementById(e.lEjSm) && document.querySelector(e.RyHxR);) console.log(e.sRwBP), t.appendTo(e.RyHxR)
            }
        }));
        a.log("e", U), m.value = P ? "https://www.youtube.com/watch?v=" + j : "https://www.youtube.com/shorts/" + N, X.parentElement.children[1].click()
    }
    return document.querySelector(e.RyHxR), await e.txmXo(n, ".playbackSoundBadge__actions", 5e3).then((async t => {
        var r = {
            RidBG: "collapse-frame"
        };
        let o = new _e(e.bCobA, {
            id: e.WjqWw
        }).appendTo(t).set("innerText", "Download MP3").on(e.cuOFH, (function() {
            e.YTTcA(downloadSC)
        }), (e => e));
        for (;;) e.PkRIL != e.PkRIL ? n.classList.remove(r.RidBG) : (!document.getElementById(e.WjqWw) && await e.txmXo(n, ".playbackSoundBadge__actions", 5e3) && await n(e.VUdji, 5e3).then((t => {
            "qfQlE" !== e.Mreub ? n.log("buttons are gone?!?!") : (o.appendTo(t), console.log("Added Button"))
        })), await e.LFmNr(sleep, 0))
    }))
}().then(console.log, console.warn), downloadSC = function() {
    var e = {
        iYnQz: function(e, n) {
            return e === n
        },
        yaEAu: "MtwiV",
        RkjzB: function(e, n, t) {
            return e(n, t)
        },
        uCaoh: "SCinfo",
        BhitU: function(e) {
            return e()
        },
        wRTOE: function(e, n) {
            return e(n)
        },
        CBOae: "https://sclouddownloader.net/"
    };
    GM_setValue(e.uCaoh, null), GM_setValue("sc", e.BhitU(getSoundCloudUrl)), set_ || (set_ = 1, e.RkjzB(GM_addValueChangeListener, "SCinfo", (function(n, t, r, o) {
        if (console.log({
                a: n,
                b: t,
                c: r,
                d: o
            }), r && r.name) {
            if (!e.iYnQz(e.yaEAu, e.yaEAu)) return !1;
            e.RkjzB(_downloadFileAsTitle, r.href, r.name)
        }
    }))), e.wRTOE(open, e.CBOae)
}, GM_setValue_ = GM_setValue, GM_getValue_ = GM_getValue, GM_info_ = GM_info;
var UnmutePath = "M3.15,3.85l4.17,4.17L6.16,9H3v6h3.16L12,19.93v-7.22l2.45,2.45c-0.15,0.07-0.3,0.13-0.45,0.18v1.04 c0.43-0.1,0.83-0.27,1.2-0.48l1.81,1.81c-0.88,0.62-1.9,1.04-3.01,1.2v1.01c1.39-0.17,2.66-0.71,3.73-1.49l2.42,2.42l0.71-0.71 l-17-17L3.15,3.85z M11,11.71v6.07L6.52,14H4v-4h2.52l1.5-1.27L11,11.71z M10.33,6.79L9.62,6.08L12,4.07v4.39l-1-1V6.22L10.33,6.79 z M14,8.66V7.62c2,0.46,3.5,2.24,3.5,4.38c0,0.58-0.13,1.13-0.33,1.64l-0.79-0.79c0.07-0.27,0.12-0.55,0.12-0.85 C16.5,10.42,15.44,9.1,14,8.66z M14,5.08V4.07c3.95,0.49,7,3.85,7,7.93c0,1.56-0.46,3.01-1.23,4.24l-0.73-0.73 C19.65,14.48,20,13.28,20,12C20,8.48,17.39,5.57,14,5.08z",
    mutePath = "M17.5,12c0,2.14-1.5,3.92-3.5,4.38v-1.04c1.44-0.43,2.5-1.76,2.5-3.34c0-1.58-1.06-2.9-2.5-3.34V7.62 C16,8.08,17.5,9.86,17.5,12z M12,4.07v15.86L6.16,15H3V9h3.16L12,4.07z M11,6.22L6.52,10H4v4h2.52L11,17.78V6.22z M21,12 c0,4.08-3.05,7.44-7,7.93v-1.01c3.39-0.49,6-3.4,6-6.92s-2.61-6.43-6-6.92V4.07C17.95,4.56,21,7.92,21,12z";

function downloadFile_(e, n) {
    const t = document.createElement("a");
    t.href = e, t.download = n, document.body.appendChild(t), t.click(), document.body.removeChild(t)
}

function Y(e, n) {
    var t = M();
    return Y = function(n, r) {
        var o = t[n -= 308];
        if (void 0 === Y.FDIYvd) {
            Y.YBPFll = function(e) {
                for (var n, t, r = "", o = "", i = 0, c = 0; t = e.charAt(c++); ~t && (n = i % 4 ? 64 * n + t : t, i++ % 4) ? r += String.fromCharCode(255 & n >> (-2 * i & 6)) : 0) t = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(t);
                for (var u = 0, l = r.length; u < l; u++) o += "%" + ("00" + r.charCodeAt(u).toString(16)).slice(-2);
                return decodeURIComponent(o)
            }, e = arguments, Y.FDIYvd = !0
        }
        var i = n + t[0],
            c = e[i];
        return c ? o = c : (o = Y.YBPFll(o), e[i] = o), o
    }, Y(e, n)
}
_downloadFileAsTitle = async function(e, n, t, i) {
    var c = {
        AJafn: function(e) {
            return e()
        },
        qzfEr: function(e, n, t, r, o, i) {
            return e(n, t, r, o, i)
        },
        KtmCX: "innerText",
        feXhL: "MP3",
        YmdnP: "fixed",
        qzmuk: ".ytp-right-controls",
        xzZof: "Appended",
        CHeoP: "Attaching to embeder >:]",
        ZfFxL: function(e, n) {
            return e(n)
        },
        hBvCg: function(e, n) {
            return e === n
        },
        SfhjX: "ROBHk",
        awzkh: "_blank",
        dUKyJ: function(e, n) {
            return e || n
        },
        SkMsH: "Error downloading file:"
    };
    const u = document.createElement("a");
    return u.style.display = "none", document.body.appendChild(u), c.ZfFxL(fetch, e).then((e => e.blob())).then((l => {
        var a = {
            OQRQr: function(e) {
                return c.AJafn(e)
            },
            JdqJv: function(e, n, t, r, o, i) {
                return c.qzfEr(e, n, t, r, o, i)
            },
            brZzz: "button",
            sjGpS: c.KtmCX,
            CLXHr: c.feXhL,
            lshNn: "click",
            EeFym: c.YmdnP,
            UMVVv: "embedMP3",
            GCjvd: c.qzmuk,
            leyMf: c.xzZof,
            cYVTy: c.CHeoP,
            MjUvS: function(e, n) {
                return c.ZfFxL(e, n)
            }
        };
        if (c.hBvCg(c.SfhjX, "dTVRw")) return P.log(a.cYVTy), a.MjUvS(j, a.GCjvd).then((async e => {
            var n = {
                ivfkv: function(e) {
                    return a.OQRQr(e)
                },
                LmkbI: function(e, n, t, r, o, i) {
                    return a.JdqJv(e, n, t, r, o, i)
                }
            };
            let t = new D(a.brZzz, {
                id: "embedMP3"
            }).appendTo(e).set(a.sjGpS, a.CLXHr).on(a.lshNn, (function() {
                let r = n.ivfkv(o) || e(t.href);
                n.LmkbI(e, r, !1, !0, !1, !0)
            })).style({
                position: a.EeFym,
                right: "50%",
                top: "80%"
            });
            for (; !r.getElementById(a.UMVVv) && Z.querySelector(a.GCjvd);) o.log(a.leyMf), t.appendTo(a.GCjvd)
        })); {
            const r = URL.createObjectURL(l);
            u.href = r, u.download = n, u.target = c.awzkh, u.click(), URL.revokeObjectURL(r), (c.dUKyJ(t, opener) || window).postMessage({
                url: e,
                title: n,
                s: !0
            }, "*"), (typeof i).includes("function") && c.AJafn(i)
        }
    })).catch((r => {
        console.error(c.SkMsH, r), (c.dUKyJ(t, opener) || window).postMessage({
            url: e,
            title: n,
            s: !1
        }, "*")
    }))
}, _downloadFile_ = downloadFile_;
const query = function(e, n) {
    var t = {
        JszsD: function(e, ...n) {
            return e(...n)
        },
        WPPIK: function(e, n) {
            return e === n
        },
        EVnRq: "OXBaA",
        nNfFf: function(e, n) {
            return e(n)
        },
        iKzLA: function(e, n) {
            return e(n)
        }
    };
    try {
        if (t.WPPIK("OXBaA", t.EVnRq)) {
            let r = "undefined" != typeof $ ? $ : document.querySelectorAll;
            return n ? [...document.querySelectorAll(e)].filter((e => !(null === el.offsetParent)))[0] : (e => Object.keys(e).length ? e : null)(t.nNfFf(r, e) ? t.iKzLA(r, e).length ? r(e)[0] : r(e) : null)
        }
        t.JszsD(L, ...g), e && U(m)
    } catch {}
};
async function downloadVideo(e, n) {
    var t = {
        ZeuYZ: function(e, n, t) {
            return e(n, t)
        },
        SuOWT: function(e, n) {
            return e(n)
        },
        sTLhv: "ehlq8k34",
        OGKwE: function(e, n) {
            return e(n)
        },
        tnMhd: "HTML",
        gLlFu: function(e, n) {
            return e(n)
        },
        gdEVh: "pUDDS",
        nUCzu: function(e, n) {
            return e === n
        },
        vHChl: "SFgKP",
        rAbkm: "Failed to download video:"
    };
    try {
        const r = await t.gLlFu(fetch, e);
        if (!r.ok) {
            if (t.gdEVh == t.gdEVh) throw new Error("HTTP error! Status: " + r.status);
            t.ZeuYZ(i, !1, c(t.SuOWT(u, t.sTLhv) ? t.OGKwE(U, t.sTLhv).innerText : m.href))
        }
        const o = r.url,
            i = await r.blob(),
            c = window.URL.createObjectURL(i),
            u = document.createElement("a");
        u.href = c, u.download = n, document.body.appendChild(u), u.click(), document.body.removeChild(u), window.URL.revokeObjectURL(c), console.log("Video downloaded from: " + o)
    } catch (e) {
        t.nUCzu(t.vHChl, "SFgKP") ? console.error(t.rAbkm, e) : this.element = i.constructor.name.includes(t.tnMhd) && A || function() {
            for (let e in arguments[1]) arguments[0].setAttribute(e, arguments[1][e]);
            return arguments[0]
        }(L.createElement(arguments[0]), arguments[1])
    }
}
getElementByAttribute = function(e, n = "aria-label", t = document.body) {
        var r = {
                BlHAk: function(e, n, t) {
                    return e(n, t)
                },
                AHpfL: function(e, n) {
                    return e(n)
                },
                QGpPR: function(e, n) {
                    return e == n
                },
                FGVCz: function(e, n) {
                    return e === n
                },
                PDrrc: "EjJVA",
                ZTEuj: function(e, n) {
                    return e(n)
                },
                CULXr: function(e, n) {
                    return e == n
                }
            },
            o = [];
        return r.ZTEuj((function i(c) {
            var u = {
                iioXh: function(e, n) {
                    return e === n
                },
                APnPM: function(e, n) {
                    return r.AHpfL(e, n)
                }
            };
            r.QGpPR(c.getAttribute(n), e) ? o.push(c) : c.children.length && (r.FGVCz("TVuhi", r.PDrrc) ? r.BlHAk(i, !0, c(r.AHpfL(u, "ehlq8k34") ? r.AHpfL(U, "ehlq8k34").innerText : m.href)) : ((c = c.children).forEach = [].forEach, c.forEach((e => {
                u.iioXh("nSIvB", "nSIvB") ? u.APnPM(i, e) : function(e, n) {
                    e(n)
                }(t, r)
            }))))
        }), t), r.CULXr(o.length, 1) ? o[0] : o || !1
    }, get_aria_label = function(e, n = document.body) {
        var t = {
                hzHrC: "Win closed",
                yGHnS: function(e) {
                    return e()
                },
                xwYvA: "https://sclouddownloader.net/",
                wEDMr: "was created",
                CtvrQ: "was clicked",
                rUguS: function(e, n) {
                    return e === n
                },
                ksZbj: function(e, n) {
                    return e(n)
                },
                mgEcG: function(e, n) {
                    return e == n
                },
                fqnBk: "aria-label",
                rMPNI: function(e, n) {
                    return e !== n
                },
                Mmonn: "FJrjk",
                YDlwf: "dShsG"
            },
            r = [];
        return t.ksZbj((function i(c) {
            var u = {
                dIjeD: t.wEDMr,
                eAUFj: t.CtvrQ,
                cABeG: "Caught",
                OUsnM: function(e, n) {
                    return t.rUguS(e, n)
                },
                TMYhC: function(e, n) {
                    return t.ksZbj(e, n)
                },
                tSPDQ: "Provided argument is not a DOM element."
            };
            if (t.mgEcG(c.getAttribute(t.fqnBk), e)) r.push(c);
            else {
                if (!t.rMPNI(t.Mmonn, "bhiON")) throw new n(u.tSPDQ);
                if (c.children.length)
                    if (t.YDlwf != t.YDlwf) {
                        var l = {
                            btUPo: t.hzHrC
                        };
                        i("SC", t.yGHnS(c));
                        var a = u(t.xwYvA, "SC");
                        a.onclose = function(e) {
                            a.log(l.btUPo)
                        }
                    } else(c = c.children).forEach = [].forEach, c.forEach((e => {
                        var n = {
                            axLsH: u.eAUFj,
                            zDUtt: function(e, n) {
                                return e == n
                            },
                            sJmpt: u.cABeG
                        };
                        if (u.OUsnM("CAwvp", "AMlul")) {
                            let e = a.call(e, N, X);
                            return e._click = e.click, e.click = function() {
                                if (e.log(e, n.axLsH, e.tagName), n.zDUtt("A", e.tagName)) {
                                    e.log(n.sJmpt, e);
                                    let t = e.download,
                                        r = e.href;
                                    Z = {
                                        id: new y(o.href).searchParams.get("v"),
                                        href: r,
                                        title: t
                                    }
                                } else e._click.apply(e)
                            }, W.log(e, u.dIjeD, e.tagName), e
                        }
                        u.TMYhC(i, e)
                    }))
            }
        }), n), r[0] || !1
    }, getClass = function(e) {
        return document.getElementsByClassName("ehlq8k34")[0]
    },
    function() {
        var e = {
            EWfJV: function(e, n) {
                return e !== n
            },
            ZoaAs: "CYosC",
            hnwiJ: "Skipping ad :>",
            DyLUd: function(e, n) {
                return e < n
            },
            FtNeU: function(e, n) {
                return e === n
            },
            rfyXx: "bRPPN",
            KHUSM: "BGqOz",
            YIADl: "Appending:",
            zySCe: function(e, n) {
                return e(n)
            },
            OEwyo: function(e, n) {
                return e === n
            },
            fovHF: "ogWSA",
            pfYHX: function(e, n) {
                return e == n
            },
            Blspz: "string",
            WkkLz: "Unmuted video",
            LREmZ: "Failed unmuting",
            VdbFn: "GsvBk",
            PwyLZ: "mveQC",
            mKxtP: ".xt0psk2.xvs91rp.xo1l8bm.x5n08af.x18hxmgj",
            NaJFk: function(e, n) {
                return e !== n
            },
            HNniJ: "SakbF",
            VLexn: "texturl",
            BXIoq: "watch?v=",
            cFnxy: "convert1",
            tzioB: "Searched",
            RADBJ: "DeCOV",
            syiwe: function(e, n) {
                return e != n
            },
            FkKYW: function(e, n) {
                return e < n
            },
            SbNNf: "KeVVC",
            aIiFa: "#app > div.css-14dcx2q-DivBodyContainer.e1irlpdw0 > div:nth-child(4) > div > div.css-1qjw4dg-DivContentContainer.e1mecfx00 > div.css-1stfops-DivCommentContainer.ekjxngi0 > div > div.css-1xlna7p-DivProfileWrapper.ekjxngi4 > div.css-1u3jkat-DivDescriptionContentWrapper.e1mecfx011 > div.css-1nst91u-DivMainContent.e1mecfx01 > div.css-bs495z-DivWrapper.e1mzilcj0 > div > div.css-1d7krfw-DivOverflowContainer.e1mzilcj5 > h1",
            IAvOn: "Replying to ",
            UtvhD: function(e, n) {
                return e === n
            },
            DVnKm: function(e, n) {
                return e === n
            },
            nHOrE: "kUxSd",
            xVWIa: "icvzs",
            nTDNy: function(e, n, t) {
                return e(n, t)
            },
            Adkns: "browse-video-desc",
            HQyVu: "data-e2e",
            iLCBN: "#main-content-video_detail > div > div.css-12kupwv-DivContentContainer.ege8lhx2 > div.css-1senhbu-DivLeftContainer.ege8lhx3 > div.css-1sb4dwc-DivPlayerContainer.eqrezik4 > div.css-3lfoqn-DivDescriptionContentWrapper-StyledDetailContentWrapper.eqrezik15 > div.css-r4nwrj-DivVideoInfoContainer.eqrezik3 > div.css-bs495z-DivWrapper.e1mzilcj0 > div > h1",
            LQVDF: "#yDmH0d > c-wiz > div > div > div:nth-child(2) > div.LLEp8b > div > div.rTq3hb > div:nth-child(1) > div > div.ofmULb > div:nth-child(2) > div > button",
            bESox: "Why this ad?",
            IOrFa: "McVMD",
            ViIlq: "fkOwO",
            fYHrP: function(e, n, t, r) {
                return e(n, t, r)
            },
            kWUhM: function(e, n, t, r) {
                return e(n, t, r)
            },
            DdzTQ: "PIZII",
            quwNe: "function",
            BLHLa: function(e, n) {
                return e instanceof n
            },
            xJZlK: "LgNDM",
            CqkfC: "kydZM",
            xgogF: function(e, n) {
                return e >= n
            },
            FPZDJ: function(e, n) {
                return e / n
            },
            cTTTR: function(e, n) {
                return e / n
            },
            oDmrr: function(e, n) {
                return e <= n
            },
            tvGul: function(e, n, t) {
                return e(n, t)
            },
            xgKst: "LeZmp",
            UhKvu: function(e) {
                return e()
            },
            wMDlY: function(e) {
                return e()
            },
            ZcrKA: function(e, n) {
                return e !== n
            },
            spvTf: "kntDi",
            UOpzM: function(e) {
                return e()
            },
            ONkmc: function(e, n, t) {
                return e(n, t)
            },
            wkfPV: function(e, n) {
                return e || n
            },
            EGlph: function(e, n) {
                return e === n
            },
            ueTtw: "gnjlg",
            dkkSM: "Nnvgc",
            jwYuJ: function(e, n) {
                return e === n
            },
            KwuAq: function(e, n) {
                return e === n
            },
            zlWtR: "Nxejs",
            tlAUV: function(e, n) {
                return e(n)
            },
            ogpgM: function(e, n) {
                return e(n)
            },
            bIHXD: "src",
            gaUJw: "UwjQP",
            RNZDU: function(e, n) {
                return e(n)
            },
            IiouW: "music",
            ZcbAs: function(e, n, t) {
                return e(n, t)
            },
            ApRJg: "span",
            alrZO: function(e, n) {
                return e !== n
            },
            kBMLX: "wsZKy",
            Ydplp: "._acaz",
            TucPS: function(e, n, t) {
                return e(n, t)
            },
            FgaXZ: "OmSKw",
            kubhO: "xjhnA",
            HEPqH: "Go back",
            IGpDq: "._afxv",
            QzHOu: function(e, n) {
                return e(n)
            },
            PKvsy: "Open player page",
            RqtcC: "bMSXe",
            obAqf: "Next",
            KQfCz: "._afxw",
            InHKq: "VOD",
            UcAUo: function(e, n) {
                return e === n
            },
            qhGTo: "KrJQB",
            dckYr: function(e, n) {
                return e !== n
            },
            NpquR: "FGIRM",
            Yctyc: "div.x78zum5.xdt5ytf.x1iyjqo2.xs83m0k.x2lwn1j.x1odjw0f.x1n2onr6.x9ek82g.x6ikm8r.xdj266r.x11i5rnm.x4ii5y1.x1mh8g0r.xexx8yu.x1pi30zi.x18d9i69.x1swvt13 > ul > div:nth-child(3) > div > div",
            bNfvG: "video/mp4",
            rYgTV: function(e, n) {
                return e + n
            },
            hzbmB: function(e, n, t) {
                return e(n, t)
            },
            Wluyf: function(e, n) {
                return e * n
            },
            yxBxk: "Invalid video element or source.",
            GpCua: "2|3|1|0|4",
            IEHyn: function(e, n, t) {
                return e(n, t)
            },
            ntdLi: function(e, n) {
                return e + n
            },
            MxZKP: ".mp4",
            QNodl: "Got",
            MAzoP: function(e, n, t) {
                return e(n, t)
            },
            ntOfZ: "instaURL",
            wLedP: "qfFzU",
            QYcPW: "reel",
            Fyaaw: "tXpoG",
            WJSMq: "tAcdi",
            tXrmK: function(e, n, t) {
                return e(n, t)
            },
            IXiJr: "alt",
            eHgSE: "clicked",
            ObkQk: function(e, n, t) {
                return e(n, t)
            },
            FCIjH: function(e, n) {
                return e || n
            },
            sDloX: "was created",
            BZYTC: "img",
            zGMng: function(e, n, t) {
                return e(n, t)
            },
            NxCwQ: "vbYzs",
            oewOw: "PJxJg",
            yLxeB: "kjUdC",
            BhepF: function(e, n) {
                return e(n)
            },
            COOpG: function(e) {
                return e()
            },
            cQXSD: "LCckl",
            sNTYU: "rFQnI",
            jwQcN: function(e) {
                return e()
            },
            FHQeR: "hdcfS",
            bXnyo: "rlDQu",
            yVCeP: function(e) {
                return e()
            },
            oSqxM: function(e) {
                return e()
            },
            viYHq: function(e) {
                return e()
            },
            uxSlK: "done",
            hOZSR: "search_txt",
            tQyVa: function(e, n) {
                return e == n
            },
            rLKhD: "btn-submit",
            JhfZI: "undefined",
            GIDke: function(e, n) {
                return e(n)
            },
            QDObO: "BmOma",
            qbnSm: "VGejg",
            CVFjQ: function(e, n) {
                return e(n)
            },
            YkBGj: "HTyEc",
            SLXhY: "isCUR",
            qijnc: "input",
            LeGct: "OQvLk",
            MkqoT: "focus",
            CixsN: "change",
            frrbX: "blur",
            TsmTh: "UJkii",
            TcMXE: function(e, n, t) {
                return e(n, t)
            },
            KgXdh: "#search-form-input",
            pDWIK: function(e, n) {
                return e(n)
            },
            xRXaY: "Cant find input",
            VgSQV: ".search-form__button",
            OMcwe: function(e, n) {
                return e(n)
            },
            wLCnP: ".button--filled",
            seEkG: "Win closed",
            SkQGd: "button",
            xJoDo: "innerText",
            cBVXz: "Get",
            MAwPi: "click",
            hEZQf: ".cell-body.tablecell-visibility.style-scope.ytcp-video-row",
            ycUQH: function(e, n) {
                return e(n)
            },
            vVtcm: function(e, n) {
                return e === n
            },
            vlqSI: "JWfHw",
            rdMUQ: "SQosd",
            JOIUg: "Not FOund",
            tCoQD: function(e, n, t) {
                return e(n, t)
            },
            kwrve: function(e, n) {
                return e + n
            },
            ExTJS: ".mp3",
            Crfep: "Handled",
            YrpLn: "Get MP3",
            tMYHr: "disabled",
            ZhcFF: "Getting video",
            EndOh: function(e, n, t) {
                return e(n, t)
            },
            Wbvbk: "clearfix",
            ZksVE: function(e) {
                return e()
            },
            sVkCM: "PLKms",
            lgVvg: "MediaButton",
            JKqLY: "Get Images",
            FqRkj: ".xh8yej3.x1iyjqo2",
            mkNor: "Get Videos",
            ZgqmX: "._aaqy",
            tRKcd: "MediaButton2",
            KRDEw: function(e, n, t, r) {
                return e(n, t, r)
            },
            upRPp: "tutNF",
            Clhlh: "KFSQe",
            sIzEb: "#MediaButton",
            aViBG: "Posted",
            uzNgF: "form-app-root",
            HnIAE: "loaded",
            czZFY: function(e, n, t, r, o, i) {
                return e(n, t, r, o, i)
            },
            JEQME: "fixed",
            WVRUO: ".ytp-right-controls",
            Fruox: "zmskg",
            vxGsM: function(e, n) {
                return e(n)
            },
            QAoVx: "SCinfo",
            XbvWX: function(e, n) {
                return e(n)
            },
            LZqxp: function(e, n) {
                return e(n)
            },
            IWPrG: function(e, n) {
                return e(n)
            },
            PIqxn: "#trackTitle",
            SoZMC: function(e, n) {
                return e !== n
            },
            ujwhn: "drTfV",
            QaPmI: function(e, n) {
                return e(n)
            },
            fUBKz: "Bruv",
            Nolxc: "#urlInput",
            XzkuI: "#submitBtn",
            VwzHP: function(e, n, t) {
                return e(n, t)
            },
            whTWs: function(e, n, t) {
                return e(n, t)
            },
            nAyHK: "5|6|1|3|4|0|2",
            QHFFU: "uCyoi",
            ougSn: "EZ url",
            fdAJi: function(e, n, t) {
                return e(n, t)
            },
            sTQnw: "No id Found",
            flQUY: "QCPsQ",
            qMTSm: "TimeOut for",
            ydsMj: function(e) {
                return e()
            },
            CwbDu: "IUMyA",
            kXFiZ: "LcIGw",
            ywmux: function(e, n) {
                return e(n)
            },
            TTETc: "NotFound",
            COjTm: function(e, n, t) {
                return e(n, t)
            },
            bqtQK: "complete",
            fIaWu: "PMwDA",
            gmspy: "after url",
            OplKW: "#progress",
            Kezts: "rdyyM",
            xpAnq: "Error:",
            pOODD: function(e) {
                return e()
            },
            uJPEH: function(e, n, t) {
                return e(n, t)
            },
            Thyul: function(e, n) {
                return e(n)
            },
            ReUFa: function(e, n) {
                return e >= n
            },
            pRsQb: function(e, n) {
                return e - n
            },
            yCfBP: function(e, n) {
                return e <= n
            },
            aYtVo: function(e, n) {
                return e + n
            },
            HkxDX: "dlbutton",
            ixsej: function(e, n) {
                return e !== n
            },
            SboNC: "rZJcR",
            eDVLD: "was clicked",
            elWUO: function(e, n) {
                return e == n
            },
            hHAkI: "video download successful\ncheck downloads folder",
            PLneY: function(e, n) {
                return e(n)
            },
            nytGA: function(e) {
                return e()
            },
            tQiYu: function(e, n) {
                return e(n)
            },
            FChLk: "#downloadBtn",
            whkwx: function(e, n, t) {
                return e(n, t)
            },
            ptEfG: function(e) {
                return e()
            },
            iNcgm: "video.x1lliihq",
            LVjEp: function(e, n) {
                return e != n
            },
            uAAPN: "gbwGg",
            jghzT: function(e, n) {
                return e - n
            },
            VqlrE: function(e, n) {
                return e(n)
            },
            hmuqJ: "#dlbutton",
            QKHbe: "HYpZo",
            Nxkzm: "drjyW",
            bHTde: function(e, n) {
                return e == n
            },
            KSdBI: "vidbutton",
            ARcoj: "OtWqe",
            LVbxf: "NmVVs",
            sUBFF: function(e) {
                return e()
            },
            Pnjgi: "IDFMx",
            kRGeX: function(e, n) {
                return e(n)
            },
            SQzZW: function(e, n) {
                return e !== n
            },
            hGSmy: "cfHrX",
            OWoFD: "#s_input",
            UetXs: "Converting",
            PSKEV: function(e, n) {
                return e(n)
            },
            UrTko: "#formatSelect",
            UxGYF: function(e, n) {
                return e(n)
            },
            EGqui: "#btn-action",
            Ckppx: function(e, n) {
                return e(n)
            },
            VBcev: "#asuccess",
            qTUyn: function(e, n) {
                return e == n
            },
            fWpZd: "href",
            IYHyz: ".clearfix",
            vUAvR: function(e, n) {
                return e(n)
            },
            OqXqA: "Input was not Found",
            FnMYx: "?!!",
            ZEvus: function(e, n) {
                return e > n
            },
            aFIIT: "error-text",
            zEZVz: "btn-download",
            fnNka: function(e, n) {
                return e === n
            },
            Nhijc: "Kevhu",
            VMFYJ: function(e, n) {
                return e !== n
            },
            Vencw: "VLJWB",
            mklUg: function(e, n, t, r, o) {
                return e(n, t, r, o)
            },
            viqfx: function(e, n, t) {
                return e(n, t)
            },
            gEpms: function(e, n) {
                return e instanceof n
            },
            RQlEG: "Ffarm",
            Zgoty: "leKwh",
            woIpk: "Provided argument is not a DOM element.",
            JLuhs: "aWvSS",
            TTkfB: "omIDV",
            XnJTk: "ZmXMd",
            IFIup: function(e, n, t) {
                return e(n, t)
            },
            uMuHr: function(e, n) {
                return e === n
            },
            HRlHA: "pHjCY",
            DDpxT: "480",
            njFBO: "TVKXE",
            auNGX: "Title: ",
            UDSiL: function(e, n) {
                return e(n)
            },
            IptXI: function(e, n) {
                return e(n)
            },
            xwIcm: "Poasted",
            PiIge: ".ScCoreButtonLabel-sc-s7h2b7-0",
            jXWBy: "1080P",
            fbTBq: function(e, n) {
                return e(n)
            },
            AgkwS: "720P",
            KXkqh: function(e, n) {
                return e(n)
            },
            ioEUg: "CWxBb",
            kUXsK: "Ewpqb",
            BKLSv: function(e, n, t) {
                return e(n, t)
            },
            LAALf: "xDekp",
            FrmDG: "DMskB",
            NgxiG: function(e, n) {
                return e(n)
            },
            vIJNo: "0|1|4|2|5|3",
            GyHSq: "https://y2mate.nu/",
            lYnUP: "0HzX",
            xjfhL: "?v=",
            WHZvo: "&s=",
            CGbFj: "/shorts/",
            wdQwe: "&mp4=",
            GEtWG: "mp4",
            bzUzs: "&useT=",
            ypsQz: "iframe",
            mIyXO: "lazy",
            ZrPyY: "no-referrer",
            zpgnh: "allow-same-origin allow-scripts allow-popups allow-forms",
            rsZgx: "autoplay; fullscreen; geolocation; microphone; camera",
            uKAcA: "y2mate.nu",
            OlbXS: function(e, n) {
                return e !== n
            },
            FSjpD: "mkbjB",
            aKtAu: function(e, n) {
                return e == n
            },
            CFhNt: "Public",
            jrSmp: "msLST",
            YfYgC: function(e, n) {
                return e === n
            },
            PbCud: "IDRDY",
            BukRd: "yeGHF",
            qwDST: ".Layout-sc-1xcs6mc-0.bMOhzu",
            cfZAh: "1080",
            dLQrt: "720",
            BTlPD: "480P",
            NoJzl: "360P",
            wfufe: "360",
            qLxII: function(e, n) {
                return e(n)
            },
            gMQHj: function(e, n) {
                return e != n
            },
            gMKOy: function(e, n) {
                return e(n)
            },
            VQrXj: "MFNrK",
            vQlZp: "xaooT",
            PSViI: function(e) {
                return e()
            },
            wxXHe: "Loaded",
            rEqHJ: "body > div.relative.overflow-hidden > main > div > div.px-4.mx-auto.max-w-7xl.sm\\:px-6.lg\\:px-8 > div.mb-6.space-y-3.lg\\:flex.lg\\:items-center.lg\\:justify-between.lg\\:space-y-0 > div.lg\\:flex.lg\\:items-center > h2",
            GobMC: function(e, n) {
                return e(n)
            },
            zyPqc: function(e, n) {
                return e(n)
            },
            xBhyA: function(e, n) {
                return e(n)
            },
            bWQPK: function(e, n) {
                return e !== n
            },
            ESwiZ: "TlSFQ",
            DHRfo: function(e, n) {
                return e !== n
            },
            DBXhn: "WlVSS",
            fKkVc: "APeyz",
            oYMdZ: "GZIba",
            sKBYF: "HIzXk",
            UxPOz: "Caught",
            XvYAB: "bbJAM",
            TNMee: "yYNCq",
            TLBed: "#convert",
            rQdMA: function(e, n) {
                return e(n)
            },
            XDPMB: ".download-button",
            QwNGM: function(e) {
                return e()
            },
            EAUnI: function(e) {
                return e()
            },
            XpBcp: function(e) {
                return e()
            },
            hJpUp: "Added playlist buttons",
            BfOcb: function(e, n) {
                return e != n
            },
            USWtS: "buttons are gone?!?!",
            yLjfl: function(e) {
                return e()
            },
            SSgSv: "FuMFv",
            dyEbr: function(e, n) {
                return e(n)
            },
            mJuns: "ytd-playlist-panel-renderer",
            pBMZZ: ".autoplay",
            DhvhL: "HxTmM",
            QyLUd: "XcJXx",
            qjygf: "4|2|1|3|0",
            khSKg: function(e, n, t) {
                return e(n, t)
            },
            djjCj: "none",
            pqgHE: function(e, n) {
                return e == n
            },
            hPgew: "https://y2mate.nu",
            euhjK: "https://snapsave.io",
            DOQCx: "https://tubemp4.is",
            DICJl: "Unhandled Post",
            hxTLG: "https://sss.instasaverpro.com",
            RDQeE: function(e, n) {
                return e == n
            },
            FPvHp: function(e, n) {
                return e === n
            },
            OoOQC: "Oeuge",
            fRLnI: "Ndgup",
            YCtHx: function(e, n) {
                return e + n
            },
            DJjTW: "mp3",
            ZRnxK: ".com",
            ZcmfS: function(e, n) {
                return e + n
            },
            nUoEu: function(e, n) {
                return e(n)
            },
            VLxwM: function(e, n, t, r) {
                return e(n, t, r)
            },
            JqSRx: "unload",
            olGEY: function(e, n) {
                return e(n)
            },
            zOypS: "ytp-playlist-menu-button ytp-button",
            XUShh: "Not Found!",
            dgYhr: "cYVPH",
            seTYe: "https://savetik.co",
            jpRdk: function(e, n, t, r) {
                return e(n, t, r)
            },
            UiYQq: function(e, n) {
                return e + n
            },
            eeNCx: " - ",
            xcGhO: "XjYvR",
            IIMtN: "QYnvp",
            ocCDY: "vYtWl",
            nkZYE: "sGEHv",
            kxPWK: "https://savetik.co/en",
            hhNSQ: "XAQhZ",
            dJEyI: function(e, n) {
                return e(n)
            },
            lNMcG: "OxmGv",
            pwumb: "kXRml",
            wsrvz: function(e, n) {
                return e || n
            },
            ouqAK: "Posting",
            UvABp: function(e) {
                return e()
            },
            QauOw: "BYiQn",
            NMyhX: "nllXs",
            KokBH: "cXscJ",
            iFaDy: function(e, n) {
                return e == n
            },
            zWJmW: "ozDbw",
            zatCF: ".ytp-volume-area > .ytp-mute-button",
            yJkeP: "title",
            pcyCa: "Mute",
            LdEdZ: "Mute (m)",
            VOdgJ: "#right-controls",
            SwNOy: function(e, n) {
                return e(n)
            },
            XJTpY: "Unmute",
            GKXZR: "Unmute (m)",
            TCwFa: function(e) {
                return e()
            },
            bRTNL: function(e, n, t) {
                return e(n, t)
            },
            iDeWo: "BNluq",
            ZpbkY: function(e, n) {
                return e === n
            },
            PTIUm: "KYaci",
            TjgnS: "Added Button",
            eeRZi: function(e, n) {
                return e(n)
            },
            DMXOK: "#end",
            MOPJc: function(e, n) {
                return e !== n
            },
            gNogJ: "QPoGH",
            iELOm: "ZSAWW",
            uqfvd: "Plpif",
            CGDrm: function(e, n) {
                return e(n)
            },
            uOFEL: function(e, n) {
                return e !== n
            },
            wfQBy: "iGegL",
            XyJHL: "gCsnA",
            IECBE: "download",
            RLuOS: function(e, n) {
                return e !== n
            },
            aZXvl: "SOsGP",
            XEWTU: function(e, n) {
                return e(n)
            },
            dZEan: "This button is corrently broken",
            XsIAY: function(e, n) {
                return e + n
            },
            jIaqG: "win",
            NbYcw: "UAvqo",
            nUvRV: "Wait...",
            TAhyc: function(e, n) {
                return e(n)
            },
            cIGCS: function(e, n) {
                return e + n
            },
            daLrx: "eLhII",
            XeWZQ: "ckyQt",
            JNXLK: function(e, n, t, r) {
                return e(n, t, r)
            },
            pewKP: function(e, n) {
                return e(n)
            },
            hlQzZ: "ehlq8k34",
            SqjGo: function(e, n) {
                return e(n)
            },
            WxmTB: function(e, n) {
                return e(n)
            },
            DuQyQ: "#right-content",
            tAKgQ: function(e, n) {
                return e !== n
            },
            jbtqp: "AwPhK",
            GvCXw: function(e, n) {
                return e !== n
            },
            xDelf: "yXBCN",
            jCIHo: function(e, n) {
                return e(n)
            },
            oDLcE: "#header-description",
            hAYQX: ".space-x-1",
            emWrq: ".flex.items-center.space-x-4",
            CSqdy: function(e) {
                return e()
            },
            tEgPx: "DATPs",
            rENcU: "rnrlQ",
            MMNVz: function(e) {
                return e()
            },
            xCPpi: "KbRYf",
            dCIva: "hjcza",
            AjMGT: "Cant append buttons yet",
            VGTqM: "browse-copy",
            exIyl: function(e, n) {
                return e != n
            },
            VBCLD: "mHRcZ",
            KPDeC: function(e) {
                return e()
            },
            PdARl: function(e, n, t) {
                return e(n, t)
            },
            BGZAD: "Cant Append",
            KeaAC: function(e) {
                return e()
            },
            cREeP: "e13wiwn60",
            XugAF: "Posted Buttons",
            LxDSF: "ZkRyy",
            WFSbF: "xHLbk",
            BipUf: function(e, n, t) {
                return e(n, t)
            },
            bNKAT: "load",
            FFFpz: "shorts/",
            lXFWS: function(e) {
                return e()
            },
            ZbeKv: function(e, n) {
                return e(n)
            },
            JhGyM: function(e, n) {
                return e(n)
            },
            SsaDH: "mODyL",
            cDnbi: function(e, n) {
                return e === n
            },
            zuYjO: "gJBdh",
            IbTNW: "GHbJh",
            drRwa: "Appended",
            zoXAG: function(e, n, t) {
                return e(n, t)
            },
            NQALI: "collapse-frame",
            QESkp: function(e, n) {
                return e == n
            },
            fMeLP: function(e, n) {
                return e !== n
            },
            uJcgl: "EanvO",
            GJvLr: function(e, n) {
                return e !== n
            },
            JFqOE: "LWdmZ",
            lXpxj: "xmfOD",
            jkLSR: "0|4|2|1|3",
            XVnpg: function(e, n) {
                return e(n)
            },
            vhXut: function(e, n) {
                return e || n
            },
            TgaJy: function(e, n) {
                return e(n)
            },
            LpQqs: function(e, n) {
                return e(n)
            },
            NcDKj: "#txt-url",
            Qpfkt: "Input Loaded",
            tfUDR: "#btn-submit",
            BOQdq: "GEtting res",
            UXOeH: function(e, n) {
                return e(n)
            },
            yxKJd: "#video_title",
            UgYUL: "Got Res",
            ERZGM: function(e, n) {
                return e === n
            },
            scdee: "GmPCJ",
            jZblj: "#A_downloadUrl",
            MifkG: function(e, n) {
                return e || n
            },
            OAnLQ: function(e, n) {
                return e === n
            },
            FJRGR: "UakQz",
            HAOXb: "this",
            fpEhA: "3|2|4|5|0|1",
            xxhQn: function(e, n) {
                return e || n
            },
            WMHtR: function(e, n) {
                return e == n
            },
            sQeBs: "#download-720-MP4",
            ZVysH: function(e, n) {
                return e(n)
            },
            MXbjb: "QIahH",
            vAIJy: function(e, n, t) {
                return e(n, t)
            },
            mJbkK: function(e, n) {
                return e === n
            },
            PNfUH: "BeCXb",
            OrCAg: "tCVRL",
            cmjFP: function(e, n) {
                return e == n
            },
            MploJ: function(e, n) {
                return e === n
            },
            mYUtL: function(e, n, t, r, o) {
                return e(n, t, r, o)
            },
            sAWBB: function(e, n) {
                return e + n
            },
            gEeYW: "Found",
            ZAeRZ: "tik-video",
            SXFcY: function(e, n) {
                return e == n
            },
            hhEeC: "https://www.tiktok.com",
            mygoX: "Added MiniPlayer Toggle with I",
            BSIkE: function(e, n, t) {
                return e(n, t)
            },
            YKzAN: "keypress",
            bsjDM: "INPUT",
            xWrKB: "TEXTAREA",
            ceomG: "KeyI",
            ryGqP: function(e, n) {
                return e(n)
            },
            UHdQU: "Close player page",
            LwcDx: function(e, n) {
                return e(n)
            },
            qeIHq: "IEHQN",
            ebLzg: "LuoHH",
            nDPuE: function(e, n) {
                return e(n)
            },
            DWetl: function(e) {
                return e()
            },
            HcLmQ: function(e, n) {
                return e(n)
            },
            jtgQb: "pzIbh",
            BLWkC: "Fixed playBack",
            ixabs: function(e, n) {
                return e === n
            },
            eFlZd: function(e, n, t) {
                return e(n, t)
            },
            MmVTK: "#cardApiIframe",
            ZGLsD: "iFrameResize function not available",
            YJDXV: function(e, n) {
                return e(n)
            },
            Xfvsz: "GTAJK",
            kpuRa: "uasTu",
            aQzSO: "UcaYB",
            XmDlr: function(e, n) {
                return e === n
            },
            KXLzG: "CUaSU",
            ppMck: "wXVQW",
            MZBcU: function(e, n) {
                return e(n)
            },
            mVMuA: function(e, n) {
                return e === n
            },
            EiGkY: "SWqFt",
            nIbIb: "alpig",
            CyQgQ: function(e, n) {
                return e === n
            },
            uWqkd: function(e, n) {
                return e !== n
            },
            dQLGD: "LXbbZ",
            mBkip: function(e, n, t) {
                return e(n, t)
            },
            OsFWx: "sTIZH",
            lQDTf: "XXbze",
            mGrzl: "Iframe is fully loaded",
            qnVOn: function(e, n) {
                return e(n)
            },
            IVlkT: function(e, n) {
                return e == n
            },
            xEfwi: "path",
            Hwkto: function(e, n, t) {
                return e(n, t)
            },
            LptME: function(e, n) {
                return e + n
            },
            rxpAA: function(e, n) {
                return e + n
            },
            utGld: function(e, n) {
                return e(n)
            },
            EteVZ: "video",
            FXYMy: "#video-companion-root",
            JeVNd: "#secondary.ytd-watch-flexy",
            SwlSZ: function(e, n) {
                return e(n)
            },
            YgvwB: "https://loader.to/api/card2/?url=",
            ZSOrF: function(e, n) {
                return e(n)
            },
            lTNdz: "Added That Thing",
            rvcKL: function(e, n) {
                return e(n)
            },
            AhSGW: "Fixed That Thing",
            nLgGr: function(e, n) {
                return e !== n
            },
            lDIhP: "XkivV",
            exxDu: function(e, n) {
                return e && n
            },
            PNFLq: "sfrdv",
            wVnYf: "Muted ad",
            uRABM: function(e, n) {
                return e && n
            },
            oBlSb: "RElhT",
            khtrk: function(e, n) {
                return e !== n
            },
            LKqiR: "XadEW",
            wNfiI: "usyOr",
            sbIhy: "#song-video",
            tyBbY: "#ytd-player",
            avcsi: "hyuFC",
            RrGup: "FQJid",
            FvXyw: "watch",
            aRCKP: "https://onlymp3.app",
            rEgTv: "fastdl.app",
            axGqS: "soundcloud.com",
            rydGU: function(e, n) {
                return e == n
            },
            UzHmQ: "studio.youtube.com",
            EBnQx: function(e, n) {
                return e === n
            },
            YznVE: "zbZDy",
            cYOjv: function(e, n, t) {
                return e(n, t)
            },
            wkwTF: "sclouddownloader.net",
            uOkir: function(e, n) {
                return e == n
            },
            qlHIv: function(e, n) {
                return e != n
            },
            SgHwn: function(e, n) {
                return e(n)
            },
            UMhoE: "updated",
            elQuA: function(e, n) {
                return e + n
            },
            WVtkm: "tyjrI",
            Dcnde: "LGSAD",
            WPMWK: "snapsave.io",
            GPsfS: "njlgP",
            oPQbl: "clips.twitch.tv",
            sMXWQ: "cIwrG",
            cSoEk: "YhJXo",
            vFKDw: "www.twitch.tv",
            vJEhK: function(e, n) {
                return e != n
            },
            kcMZa: "clip",
            SuFyW: "User isnt wathcing a clip",
            odxqO: "clipr.xyz",
            NsOHc: "tubemp4.is",
            fDzhL: "zrNZT",
            GlIbl: "BoIil",
            KvsjS: "PlayList MP4",
            RKsNn: "Get MP4",
            QZnwr: "tt1",
            gwYLM: "blue",
            XOpju: "bruh",
            bnptr: "tiktok",
            gLmHo: "onlymp3.app",
            SSXXX: "onlymp3.to",
            aZLAr: function(e, n) {
                return e !== n
            },
            perOw: function(e, n, t) {
                return e(n, t)
            },
            beVZh: "www.yt2conv.com",
            ihvmo: "Getting MP4",
            zZtju: "sss.instasaverpro.com",
            wVgIS: function(e, n) {
                return e === n
            },
            uFasc: "NCLfO",
            dhbAu: "NO info Preset",
            mcLlw: function(e, n) {
                return e == n
            },
            wzYoM: function(e, n, t) {
                return e(n, t)
            },
            wFyvB: function(e, n) {
                return e === n
            },
            kcGWa: function(e, n, t) {
                return e(n, t)
            },
            Fwppj: "JbwwE",
            WBMvr: "loader.to",
            GOTrd: "/api/",
            bNPIt: "vZdAY",
            KgEiR: "KCsMb",
            tHhsV: "using loader.to api",
            ZyTxP: "trustedHTMLPolicy",
            uXZTp: "style",
            FLDCU: "text/css",
            lTbTT: function(e, n) {
                return e + n
            },
            cUnpa: function(e, n) {
                return e + n
            },
            cJHuz: "cardApiIframe",
            CHYpS: "100%",
            qqdZC: "true",
            TfJvT: "border: none",
            nMUKw: "https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.9/iframeResizer.min.js",
            qXsev: "div",
            DrQih: function(e, n) {
                return e(n)
            },
            JcKnr: function(e, n) {
                return e(n)
            }
        };
        class n {
            static get br() {
                return new n("br")
            }
            constructor(n, o) {
                var i = {
                    tbpGz: e.hnwiJ
                };
                this.element = n.constructor.name.includes("HTML") && n || function() {
                    if (e.EWfJV("dXCYz", e.ZoaAs)) {
                        for (let e in arguments[1]) arguments[0].setAttribute(e, arguments[1][e]);
                        return arguments[0]
                    }
                    t = 1, r.log(i.tbpGz)
                }(document.createElement(arguments[0]), arguments[1])
            }
            style(e) {
                for (let n in e) this.element.style[n] = e[n];
                return this
            }
            append(n, ...t) {
                var r = {
                    GvgSU: function(e, n) {
                        return e === n
                    }
                };
                this.element.append(n.element || n), console.log("T:", {
                    targets: t,
                    fe: t && t.forEach
                });
                for (let n = 0; e.DyLUd(n, t.length); n++)
                    if (e.FtNeU(e.rfyXx, e.KHUSM)) {
                        let e = new s(f, {
                            bubbles: !0,
                            isTrusted: !0
                        });
                        d["on" + h] && m["on" + p](e), r.GvgSU(g, "input") && (Q.value = B), U.dispatchEvent(e)
                    } else {
                        let r = t[n];
                        console.log(e.YIADl, {
                            element: r,
                            target: this
                        }), this.element.append(r.element || r)
                    }
                return this
            }
            appendTo(n) {
                var t = {
                    jProS: function(n, t) {
                        return e.zySCe(n, t)
                    }
                };
                if (e.OEwyo(e.fovHF, "ogWSA")) return (n.element || e.pfYHX(typeof n, e.Blspz) ? document.querySelector(n) : n).append(this.element), this;
                this[d[0]] = t.jProS(h, m[p[1]]), !g[y[1]] && !v && (V = !0, N = F[1], H.log(X))
            }
            on(n, t) {
                var r = {
                    LgZkc: e.WkkLz,
                    lDWzP: e.LREmZ
                };
                if (!e.FtNeU(e.VdbFn, e.PwyLZ)) return this.element["on" + n] = t, this;
                o.log(r.LgZkc);
                try {
                    l.muted = 0
                } catch (e) {
                    s.warn(r.lDWzP)
                }
                t = 0
            }
            set(e, n) {
                return this.element[e] = n, this
            }
            remove() {
                return this.element.remove(), this
            }
            get() {
                var t = {
                    gEDro: e.mKxtP
                };
                return e.NaJFk(e.HNniJ, e.HNniJ) ? [...n.querySelectorAll(t.gEDro)].pop().innerText.split("\n")[0] : this.element[arguments[0]]
            }
            get children() {
                var n = {
                    RJpcN: function(n, t) {
                        return e.OEwyo(n, t)
                    }
                };
                return !!e.FtNeU(e.SbNNf, e.SbNNf) && new class {
                    constructor(t) {
                        for (var r = {
                                FfCPe: e.VLexn,
                                qSQaj: function(n, t) {
                                    return e.pfYHX(n, t)
                                },
                                oEMTZ: e.BXIoq,
                                hMXXp: e.cFnxy,
                                ucfgS: e.tzioB
                            }, s = 0; s < t.length; s += 1) {
                            if ("UBKeE" !== e.RADBJ) this[s] = t[s];
                            else i.getElementById(r.FfCPe).value = "https://www.youtube.com/" + (r.qSQaj(c, "1") ? "shorts/" : r.oEMTZ) + u, l.getElementById(r.hMXXp).click(), a.log(r.ucfgS)
                        }
                        Object.defineProperty(this, "length", {
                            get: function() {
                                var e;
                                if (n.RJpcN("tZJnb", "tZJnb")) return t.length;
                                s((e => e.href)(((e = new o(i.href)).host = "clipr.xyz", e)), "720")
                            }
                        }), Object.freeze(this)
                    }
                    item(n) {
                        return e.syiwe(this[n], null) ? this[n] : null
                    }
                    namedItem(n) {
                        for (var t = 0; e.FkKYW(t, this.length); t += 1)
                            if (e.OEwyo(this[t].id, n) || e.FtNeU(this[t].name, n)) return this[t];
                        return null
                    }
                    get toArray() {
                        return [...this]
                    }
                }([...this.element.children])
            }
        }

        function t() {
            try {
                return document.querySelector(e.aIiFa).innerText.replace(e.IAvOn, "")
            } catch {
                if (!e.UtvhD("CvfcJ", "CvfcJ")) return n.querySelectorAll("._acaz");
                try {
                    return document.querySelector("#app > div.css-14dcx2q-DivBodyContainer.e1irlpdw0 > div:nth-child(4) > div > div.css-1qjw4dg-DivContentContainer.e1mecfx00 > div.css-1stfops-DivCommentContainer.ekjxngi0 > div > div.css-1xlna7p-DivProfileWrapper.ekjxngi4 > div.css-1u3jkat-DivDescriptionContentWrapper.e1mecfx011 > div.css-1nst91u-DivMainContent.e1mecfx01 > div.css-bs495z-DivWrapper.e1mzilcj0").innerText.replace(e.IAvOn, "")
                } catch (n) {
                    if (!e.DVnKm(e.nHOrE, e.xVWIa)) return e.nTDNy(V, e.Adkns, e.HQyVu) ? V(e.Adkns, e.HQyVu).innerText : document.querySelector(e.iLCBN).innerText.replace("Replying to ", "");
                    o = i.innerText, c("dlbutton", u)
                }
            }
        }

        function r() {
            var n = {
                sOqhz: e.LQVDF
            };
            e.zySCe(get_aria_label, e.bESox).click(), e.nTDNy(setTimeout, (() => {
                document.querySelector(n.sOqhz).click(), setTimeout((() => {
                    document.querySelector("#VGHGFf > div > div.Eddif > div:nth-child(2) > button > div.VfPpkd-RLmnJb").click()
                }), 1e3)
            }), 1e3)
        }
        _element = _e = n, setElement2 = function(e) {
            return e.match(/(?<host>https?\:\/\/www\.tiktok\.com)\/(?<username>@[^\/]+)\/video\/(?<videoID>\d+)/i).groups
        };
        var o = e.aRCKP,
            i = "/watch?=";

        function c(n, t, r = !1) {
            var o = {
                UXXYj: function(n, t) {
                    return e.zySCe(n, t)
                }
            };
            if (!e.OEwyo(e.IOrFa, e.ViIlq)) {
                var a = e.fYHrP(addEventListener, n, ((...e) => {
                    t(...e), r && o.UXXYj(removeEventListener, a)
                }), !0);
                return a
            }
            i = c.children, u.forEach = [].forEach, l.forEach((e => {
                o.UXXYj(s, e)
            }))
        }

        function u(t) {
            if ("yBVqw" !== e.DdzTQ) {
                typeof jQuery === e.quwNe && e.BLHLa(t, jQuery) && (e.xJZlK !== e.CqkfC ? t = t[0] : [...i.attributes].map((e => {
                    const {
                        name: n,
                        value: t
                    } = e;
                    return {
                        name: n,
                        value: t
                    }
                })).filter((e => e.value == s)).length && (u.push(l), a = 1));
                var r = t.getBoundingClientRect();
                return e.xgogF(r.top, 0 - e.FPZDJ(window.innerHeight || document.documentElement.clientHeight, 2)) && e.xgogF(r.left, 0) && r.bottom <= (window.innerHeight || document.documentElement.clientHeight) + e.cTTTR(window.innerHeight || document.documentElement.clientHeight, 2) && e.oDmrr(r.right, window.innerWidth || document.documentElement.clientWidth)
            }
            e.kWUhM(n, 2, !0, !1)
        }

        function l(n, {
            callback: t,
            int: r
        }) {
            if (e.ZcrKA("dAnnq", e.spvTf)) {
                !t && (t = function() {}), !r && (r = 100), console.log({
                    f: n,
                    callback: t,
                    int: r
                });
                try {
                    return e.UhKvu(n), void e.UOpzM(t)
                } catch (e) {}
                var l = e.ONkmc(setInterval, (() => {
                    var r = {
                        zenGV: e.LQVDF,
                        LLBlK: "#VGHGFf > div > div.Eddif > div:nth-child(2) > button > div.VfPpkd-RLmnJb",
                        mzOGc: function(n, t) {
                            return e.zySCe(n, t)
                        },
                        VYhMJ: e.bESox,
                        mUkQb: function(n, t, r) {
                            return e.tvGul(n, t, r)
                        }
                    };
                    try {
                        if (e.xgKst == e.xgKst) e.UhKvu(n), e.wMDlY(t), clearInterval(l);
                        else {
                            var o = {
                                anQQg: r.LLBlK
                            };
                            r.mzOGc(i, r.VYhMJ).click(), r.mUkQb(c, (() => {
                                s.querySelector(r.zenGV).click(), f((() => {
                                    h.querySelector(o.anQQg).click()
                                }), 1e3)
                            }), 1e3)
                        }
                    } catch (o) {}
                }), e.wkfPV(r, 100));
                return l
            }
            o.log("Muted ad"), i = 1, c.playbackRate = 16, u.muted = 1
        }

        function a(n) {
            var t = {
                TQgsg: function(e, n) {
                    return e(n)
                }
            };
            if (!e.EGlph(e.ueTtw, e.dkkSM)) return e.jwYuJ(n.offsetParent, null);
            c.children.length && (d = h.children, m.forEach = [].forEach, p.forEach((e => {
                t.TQgsg(y, e)
            })))
        }

        function s(e) {
            return e.parentNode
        }

        function f() {
            if (e.ZcrKA(e.FgaXZ, e.kubhO)) return e.ogpgM(get_aria_label, e.HEPqH) && get_aria_label(e.HEPqH).click ? e.zySCe(get_aria_label, e.HEPqH) : document.querySelector(e.IGpDq);
            e.TucPS(r, (e => e.href)((e => (e.host = "clipr.xyz", e))(new o(i.href))), "480")
        }

        function d() {
            if ("bMSXe" === e.RqtcC) return e.tlAUV(get_aria_label, e.obAqf) ? e.ogpgM(get_aria_label, e.obAqf).click ? e.tlAUV(get_aria_label, "Next") : document.querySelector(e.KQfCz) : document.querySelector("._afxw");
            (e.RNZDU(t, "Close player page") || e.QzHOu(r, e.PKvsy)[1]).click()
        }

        function h() {
            var n = {
                tgqvp: function(e, n, t) {
                    return e(n, t)
                },
                oZtJf: e.InHKq,
                XqyBc: "TimeOut for"
            };
            if (e.UcAUo(e.qhGTo, e.qhGTo)) try {
                if (!e.dckYr(e.NpquR, e.NpquR)) return document.querySelector(e.Yctyc).children[0].innerText.split("\n")[1];
                n.tgqvp(r, (e => e.href)((e => (e.host = "clipr.xyz", e))(new o(i.href))), n.oZtJf)
            } catch {
                return [...document.querySelectorAll(e.mKxtP)].pop().innerText.split("\n")[0]
            } else r.log(n.XqyBc, o), i = !0
        }

        function m() {
            if ("PIAwY" !== e.wLedP) {
                if (location.href.includes(e.QYcPW)) {
                    let n = e.fYHrP(open, "https://fastdl.app/en", location.href, "width=400,height=500");
                    var t = GM_addValueChangeListener(e.ntOfZ, (function(r, o, i, c) {
                        if (i)
                            for (var u = e.GpCua.split("|"), l = 0;;) {
                                switch (u[l++]) {
                                    case "0":
                                        e.IEHyn(downloadFile_, i, e.ntdLi(document.title, e.MxZKP));
                                        continue;
                                    case "1":
                                        e.zySCe(GM_removeValueChangeListener, t);
                                        continue;
                                    case "2":
                                        console.log(e.QNodl, {
                                            a: r,
                                            b: o,
                                            c: i,
                                            d: c
                                        });
                                        continue;
                                    case "3":
                                        n.close();
                                        continue;
                                    case "4":
                                        e.MAzoP(GM_setValue, e.ntOfZ, null);
                                        continue
                                }
                                break
                            }
                    }))
                }
            } else n.error(e.yxBxk)
        }
        async function p() {
            var n = {
                EAUQh: function(n, ...t) {
                    return e.QzHOu(n, ...t)
                },
                SPDKo: function(e, n) {
                    return e(n)
                },
                dihex: "Caught",
                fLQla: function(n, t) {
                    return e.FCIjH(n, t)
                },
                dYJAi: e.sDloX,
                hXKSs: e.BZYTC,
                qerKn: "alt",
                QJKEp: function(n, t, r) {
                    return e.zGMng(n, t, r)
                }
            };
            if (e.NaJFk(e.NxCwQ, e.oewOw)) {
                for (var u = e => new Promise((n => setTimeout(n, e))), l = new Set, a = {}; f();)
                    if ("kjUdC" === e.yLxeB) {
                        if (await e.BhepF(u, 100), !e.UhKvu(f)) {
                            if (e.NaJFk(e.cQXSD, e.sNTYU)) {
                                await u(1e3);
                                break
                            }
                            var s = e.fYHrP(i, c, ((...e) => {
                                n.EAUQh(s, ...e), f && n.SPDKo(d, s)
                            }), !0);
                            return s
                        }
                        e.COOpG(f).click()
                    } else r.querySelector(e.LQVDF).click(), o((() => {
                        c.querySelector("#VGHGFf > div > div.Eddif > div:nth-child(2) > button > div.VfPpkd-RLmnJb").click()
                    }), 1e3);
                    [...e.jwQcN(getInstalImages)].forEach((n => {
                    if (!e.ZcrKA(e.Fyaaw, e.WJSMq)) return this.element[t] = r, this; {
                        let t = e.tXrmK(findhref2, n, "img")[0];
                        l.add([t.src, t.getAttribute(e.IXiJr)])
                    }
                })), d().click();
                try {
                    if (e.alrZO(e.FHQeR, e.bXnyo)) e.UhKvu(d).click();
                    else {
                        let t = null,
                            r = y.createElement;
                        v.createElement = function(e, o) {
                            var i = {
                                bKFMd: "was clicked",
                                DTGwn: n.dihex,
                                dwSok: function(e, t) {
                                    return n.fLQla(e, t)
                                }
                            };
                            let c = r.call(t, e, o);
                            return c._click = c.click, c.click = function() {
                                if (e.log(c, i.bKFMd, c.tagName), "A" == c.tagName) {
                                    we.log(i.DTGwn, c);
                                    let e = c.download,
                                        t = c.href;
                                    be = {
                                        id: new ke(xe.href).searchParams.get("v"),
                                        href: t,
                                        title: e
                                    }, i.dwSok(Se, Te).postMessage(n, "*"), u()
                                } else c._click.apply(c)
                            }, le.log(c, n.dYJAi, c.tagName), c
                        }, j.click(), Y.log(e.eHgSE), e.ObkQk(R, (() => t.click()), 1e3)
                    }
                } catch (e) {}
                for (; d();) {
                    await u(300), [...e.yVCeP(getInstalImages)].forEach((e => {
                        let t = findhref2(e, n.hXKSs)[0];
                        l.add([t.src, t.getAttribute(n.qerKn)])
                    }));
                    try {
                        e.oSqxM(d).click()
                    } catch (e) {}[...l].length
                }
                for (; await e.BhepF(u, 100), e.viYHq(f);) f().click();
                [...l].forEach((e => {
                    a[e[0]] = e[1]
                })), (l = Object.keys(a).map((e => ({
                    src: e,
                    name: a[e]
                })))).forEach((e => {
                    var t = new URL(e.src).pathname.split(".").pop();
                    n.QJKEp(Q, e.src, e.name + "." + t)
                })), console.log(e.uxSlK, l)
            } else t(r)
        }

        function g() {
            p().then(console.log, console.warn)
        }
        setElement = function(n) {
            if (e.KwuAq("Nxejs", e.zlWtR)) return !(!e.tlAUV(String, n).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/) || 11 != String(n).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/)[8].length) && e.tlAUV(String, n).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/)[8];
            ! function(e, n, t, r, o) {
                e(n, t, r, o)
            }(o, i, c, null, u)
        }, findhref2 = function(t, r) {
            var o = [];
            return e.RNZDU((function t(i) {
                var c = {
                    yIhGT: "#cardApiIframe",
                    azGzr: function(n, t) {
                        return e.ogpgM(n, t)
                    },
                    UCkGj: function(n, t) {
                        return e.syiwe(n, t)
                    },
                    AqYVE: e.bIHXD,
                    DtbvT: "Fixed That Thing",
                    nZEJE: "WnbpP",
                    dkVNI: "kjRvR",
                    XEoWo: function(n, t) {
                        return e.tlAUV(n, t)
                    },
                    UGJZO: function(e, n) {
                        return e !== n
                    },
                    GnoCf: e.gaUJw,
                    YohZE: function(n, t) {
                        return e.ogpgM(n, t)
                    }
                };
                i.tagName.toLowerCase() == e.wkfPV(r, "a") ? (o.push(i), i.children.length && ((i = i.children).forEach = [].forEach, i.forEach((e => {
                    var n = {
                        Birym: c.yIhGT,
                        iBwUH: function(e, n) {
                            return c.azGzr(e, n)
                        },
                        vqZvw: "Added That Thing",
                        YPaZv: function(e, n) {
                            return c.UCkGj(e, n)
                        },
                        ZyGtd: c.AqYVE,
                        bErWh: c.DtbvT
                    };
                    c.nZEJE !== c.dkVNI ? c.XEoWo(t, e) : (!y.querySelector(n.Birym) && (n.iBwUH(v, !0), U.parentNode.prepend(Q), B.prepend(G.element), z.log(n.vqZvw)), n.YPaZv(n.iBwUH(V, N.href), F) && (n.iBwUH(H, !0), X.set(n.ZyGtd, O), j.log(n.bErWh), Y = n.iBwUH(R, W.href)))
                })))) : i.children.length && ((i = i.children).forEach = [].forEach, i.forEach((e => {
                    if (c.UGJZO(c.GnoCf, "UwjQP")) return this[n];
                    c.YohZE(t, e)
                })))
            }), t), o
        }, getInstalImages = function() {
            if (e.alrZO(e.kBMLX, e.kBMLX)) {
                if (h.domain.includes(e.IiouW)) throw e.zySCe(F, "These button dont work on youtube music yet"), ".";
                var n = [...p.getElementsByTagName("ytd-playlist-panel-renderer")].filter(g).filter((e => !n(e)))[0],
                    t = e.ZcbAs(v, n, e.ApRJg).filter((e => !n(e))).filter(Q).filter((e => "video-title" == e.id)).map(B).map(G).map((e => ({
                        id: n(t(O(e))[0].href),
                        e: e
                    })));
                return t
            }
            return document.querySelectorAll(e.Ydplp)
        }, getInstaVideo = function() {
            return document.querySelector("video.x1lliihq")
        }, downloadVideoFromBlob = function(n, t) {
            var r = {
                vWcMY: function(e, n) {
                    return e > n
                }
            };
            if (n && n.src && n.src.startsWith("blob:")) {
                const o = n.captureStream(),
                    i = new MediaRecorder(o),
                    c = [];
                i.ondataavailable = e => {
                    r.vWcMY(e.data.size, 0) && (c.push(e.data), console.log(e.data))
                }, i.onstop = () => {
                    const n = new Blob(c, {
                            type: e.bNfvG
                        }),
                        r = URL.createObjectURL(n),
                        o = document.createElement("a");
                    o.style.display = "none", o.href = r, o.download = e.rYgTV(t, ".mp4"), document.body.appendChild(o), o.click(), document.body.removeChild(o), URL.revokeObjectURL(r)
                }, i.start(), e.hzbmB(setTimeout, (() => {
                    i.stop()
                }), e.Wluyf(n.duration, 1e3))
            } else console.error(e.yxBxk)
        }, console.log("A?");
        const y = e => new Promise((n => setTimeout(n, e)));
        if (document.domain == e.rEgTv) onload = async function() {
            var o = {
                hSXjX: function(n, t) {
                    return e.EGlph(n, t)
                },
                IhENY: e.qbnSm,
                WWHhb: function(n, t) {
                    return e.CVFjQ(n, t)
                },
                BiGeA: "#cardApiIframe",
                eQmVi: e.YkBGj,
                ZkaXu: e.SLXhY,
                DTgxr: function(n, t) {
                    return e.OEwyo(n, t)
                },
                OyYfl: e.qijnc,
                eUfOn: e.LeGct,
                JsDJX: e.MkqoT,
                AzrGg: e.CixsN,
                QFfNX: e.frrbX
            };
            if ("MgVPK" === e.TsmTh) {
                var g;
                (g = u.getElementById(e.hOZSR)).value = "https://www.youtube.com/" + (e.tQyVa(l, "1") ? "shorts/" : e.BXIoq) + a, s.getElementById(e.rLKhD).click(), f.log(d, h)
            } else {
                async function g(e) {
                    if (!o.hSXjX(o.IhENY, "qfxbG")) {
                        for (; !document.querySelector(e);) await y(0);
                        return document.querySelector(e)
                    }
                    t.warn("Error:", r)
                }
                const b = {
                    url: name,
                    input: null
                };
                var w = !1;
                for (e.TcMXE(setTimeout, (() => {
                        var n, t = {
                            NvpjB: function(n, t) {
                                return e.syiwe(n, t)
                            },
                            recxy: e.JhfZI,
                            posBu: function(n, t) {
                                return e.RNZDU(n, t)
                            },
                            HvDIW: function(n, t) {
                                return e.GIDke(n, t)
                            }
                        };
                        if (!e.UtvhD(e.QDObO, "BmOma")) {
                            var r = t.NvpjB(typeof d, t.recxy) ? h : m.querySelectorAll;
                            return p ? [...B.querySelectorAll(G)].filter((e => !(null === r.offsetParent)))[0] : (n = t.posBu(r, y) ? t.HvDIW(r, v).length ? t.posBu(r, U)[0] : r(Q) : null, r.keys(n).length ? n : null)
                        }
                        w = !0
                    }), 2e4); !document.querySelector(e.KgXdh);)
                    if (await e.pDWIK(y, 0), w) throw e.xRXaY;
                b.input = document.querySelector(e.KgXdh), console.log("Found a"), e.IEHyn((function(e, t) {
                    var r = {
                        hwGGF: function(e, n) {
                            return o.WWHhb(e, n)
                        },
                        FwnkR: o.BiGeA,
                        bOkKV: function(e, n) {
                            return o.hSXjX(e, n)
                        },
                        dhxRG: o.eQmVi,
                        LLtue: o.ZkaXu,
                        iNzVF: function(e, n) {
                            return o.DTgxr(e, n)
                        },
                        hNDnl: o.OyYfl,
                        PvDVk: o.eUfOn
                    };
                    [o.JsDJX, o.OyYfl, o.AzrGg, o.QFfNX].forEach((o => {
                        if (r.bOkKV(r.dhxRG, r.LLtue)) {
                            var a = {
                                YLWvx: function(e, n) {
                                    return r.hwGGF(e, n)
                                }
                            };
                            i = c.children, u.forEach = [].forEach, l.forEach((e => {
                                a.YLWvx(s, e)
                            }))
                        } else {
                            let i = new Event(o, {
                                bubbles: !0,
                                isTrusted: !0
                            });
                            e["on" + o] && e["on" + o](i), r.iNzVF(o, r.hNDnl) && (r.PvDVk != r.PvDVk ? n({
                                log: !1
                            }, r.FwnkR) : e.value = t), e.dispatchEvent(i)
                        }
                    }))
                }), b.input, b.url), document.querySelector(e.VgSQV).click(), GM_setValue(e.ntOfZ, await e.OMcwe(g, e.wLCnP).then((e => e.href)))
            }
        };
        else {
            if (document.domain == e.axGqS) return void(getSoundCloadI = function() {
                var n = {
                    ryUVR: e.seEkG
                };
                e.tvGul(_setV, "SC", e.yVCeP(getSoundCloudUrl)), e.zGMng(open, "https://sclouddownloader.net/", "SC").onclose = function(e) {
                    console.log(n.ryUVR)
                }
            });
            if (e.rydGU(document.domain, e.UzHmQ)) {
                if (e.EBnQx(e.YznVE, e.YznVE)) return I = {
                    DVuBY: function(n) {
                        return e.yVCeP(n)
                    },
                    aSMCw: function(e) {
                        return e()
                    },
                    qQnvM: e.SkQGd,
                    cdpMI: e.xJoDo,
                    SUXWi: e.cBVXz,
                    FbWKx: e.MAwPi,
                    CDUnF: function(n, t) {
                        return e.pfYHX(n, t)
                    },
                    niDRw: e.hEZQf,
                    eGKsJ: function(n, t) {
                        return e.ycUQH(n, t)
                    },
                    Ejxud: function(n, t) {
                        return e.vVtcm(n, t)
                    },
                    SADEN: e.vlqSI,
                    bwVQh: e.rdMUQ,
                    lySvR: function(n, t) {
                        return e.syiwe(n, t)
                    },
                    kTcDc: e.JOIUg
                }, void e.tCoQD(setInterval, (() => {
                    var e, n = {
                        JhMrQ: function(e, n) {
                            return I.CDUnF(e, n)
                        },
                        WwWui: I.niDRw,
                        UTmUs: "Public",
                        EOSNJ: function(e, n) {
                            return I.eGKsJ(e, n)
                        },
                        zASJV: function(e, n, t, r, o, i, c) {
                            return e(n, t, r, o, i, c)
                        }
                    };
                    try {
                        I.Ejxud(I.SADEN, I.bwVQh) ? (I.DVuBY(c).append(u.br.element), l().append(a.element), I.aSMCw(s).append(f.element)) : ([...[...document.querySelectorAll("#video-list")].map((e => [e, [...e.classList]])).filter((e => e[1].includes("ytcp-video-section")))[0][0].children[1].children].map((e => [e, [...e.classList], e.tagName])).filter((e => "YTCP-VIDEO-ROW" == e[2])).filter((e => n.JhMrQ(e[0].children[0].querySelectorAll(n.WwWui)[0].innerText, n.UTmUs))).map((e => e[0].children[0].querySelectorAll(".cell-body.tablecell-visibility.style-scope.ytcp-video-row")[0])).forEach((e => {
                            console.log(e), e.append(new _e("br").element);
                            var t = new _e(I.qQnvM).set(I.cdpMI, I.SUXWi).on(I.FbWKx, (function(e) {
                                alert("Doesnt work yet");
                                var {
                                    id: t,
                                    href: r,
                                    isShort: o
                                } = n.EOSNJ(findhref2, e.target.parentElement.parentElement).map((e => ({
                                    href: e.href,
                                    short: e.href.includes("/short"),
                                    id: setElement(e.href)
                                }))).filter((e => e.id))[0];
                                n.zASJV(downloadT, t, !1, !0, !1, !1, o ? new URL(r) : null)
                            }));
                            e.append(t.element)
                        })), e = !0)
                    } catch {
                        e = !1
                    }
                    I.lySvR(D, e) && (D = e, console.log("Change?", e ? "Found" : I.kTcDc))
                }), 0); {
                    const {
                        data: {
                            href: Ee,
                            title: qe,
                            length: Ce,
                            id: Le,
                            _: Ae
                        }
                    } = d;
                    let Pe = e.kwrve(qe, h ? e.MxZKP : e.ExTJS);
                    (P = m.getElementById(Ae)) && P.remove(), p.log(e.Crfep, {
                        href: Ee,
                        title: qe,
                        length: Ce,
                        id: Le,
                        _: Ae
                    }, g), Pe.set(e.xJoDo, e.YrpLn), v.set(e.tMYHr, !1), U ? (V.log(e.ZhcFF), e.EndOh(N, Ee, Pe)) : e.QzHOu(G, Ee), z[Ae] = Ee
                }
            } else {
                if (e.pqgHE(document.domain, "www.instagram.com")) {
                    var v;

                    function w() {
                        if (e.FtNeU("PLKms", e.sVkCM))
                            for (var o = "1|2|0|3|4".split("|"), i = 0;;) {
                                switch (o[i++]) {
                                    case "0":
                                        var c = new n(e.SkQGd, {
                                            id: e.lgVvg
                                        }).set("innerText", e.JKqLY).on(e.MAwPi, g);
                                        continue;
                                    case "1":
                                        console.log("Appended buttons man");
                                        continue;
                                    case "2":
                                        var u = new n(document.querySelectorAll(e.FqRkj)[0]);
                                        continue;
                                    case "3":
                                        var l = new n(e.SkQGd, {
                                            id: "MediaButton2"
                                        }).set("innerText", e.mkNor).on(e.MAwPi, m);
                                        continue;
                                    case "4":
                                        u.append(c, l);
                                        continue
                                }
                                break
                            } else t.getElementsByClassName(e.Wbvbk)[0].innerText, e.ZksVE(r)
                    }

                    function b() {
                        var t = new n(document.querySelector(e.ZgqmX)),
                            r = new n("button", {
                                id: e.lgVvg
                            }).set("innerText", e.JKqLY).on(e.MAwPi, g),
                            o = new n(e.SkQGd, {
                                id: e.tRKcd
                            }).set(e.xJoDo, e.mkNor).on(e.MAwPi, m);
                        t.append(r, o)
                    }
                    return e.cYOjv(l, (function() {
                        document.querySelectorAll(".xh8yej3.x1iyjqo2")[0].children
                    }), {
                        callback: function() {
                            var t = {
                                zExXm: function(n, t, r, o) {
                                    return e.KRDEw(n, t, r, o)
                                },
                                kovOq: function(n, t) {
                                    return e.EWfJV(n, t)
                                },
                                XyCPV: e.upRPp,
                                tjHRD: e.Clhlh,
                                xHfxl: e.sIzEb,
                                oMqFF: function(n) {
                                    return e.UhKvu(n)
                                }
                            };
                            w(), e.zySCe(setInterval, (() => {
                                t.kovOq(t.XyCPV, t.tjHRD) ? (document.querySelector(t.xHfxl) || w(), document.querySelector("._aaqy") && !document.querySelector("._aaqy").querySelector(t.xHfxl) && t.oMqFF(b)) : t.zExXm(n, 2, !1, !1)
                            }))
                        }
                    }), void console.log("Insta ballz")
                }
                if (document.domain == e.wkwTF)(async function() {
                    var n = {
                            LAVOc: "3|5|0|4|1|2",
                            QsUgR: function(n, t) {
                                return e.OMcwe(n, t)
                            },
                            ZTczg: e.aViBG,
                            Cyvux: function(e, n) {
                                return e == n
                            },
                            ukYDA: e.uzNgF,
                            HsySW: e.HnIAE,
                            ecHnh: function(e, n) {
                                return e !== n
                            },
                            ugJlS: "vPOLX",
                            pCAul: function(n) {
                                return e.jwQcN(n)
                            },
                            JioOA: function(n, t, r, o, i, c) {
                                return e.czZFY(n, t, r, o, i, c)
                            },
                            aVCdC: e.SkQGd,
                            aizdc: "innerText",
                            Symfx: e.JEQME,
                            Bqrku: "80%",
                            uUPQh: e.WVRUO,
                            LnhHt: "ztRUs",
                            LLTil: e.Fruox,
                            koHVo: ".ScCoreButtonLabel-sc-s7h2b7-0",
                            SBSVu: function(n, t) {
                                return e.OEwyo(n, t)
                            },
                            mXBsa: e.qijnc
                        },
                        o = e.vxGsM(_getV, "sc");
                    async function i(e, t) {
                        var r = {
                            ygEiR: n.LAVOc,
                            NjOqF: function(e, t) {
                                return n.QsUgR(e, t)
                            },
                            wOkoQ: "#download-720-MP4",
                            RqXuv: n.ZTczg,
                            kYunC: function(e, t) {
                                return n.Cyvux(e, t)
                            },
                            abcpc: n.ukYDA,
                            DUDEN: n.HsySW,
                            TLGOz: function(e, t) {
                                return n.ecHnh(e, t)
                            },
                            AVcJX: n.ugJlS,
                            ZUGJX: function(e) {
                                return n.pCAul(e)
                            },
                            mJRrN: function(e) {
                                return n.pCAul(e)
                            },
                            VbmrR: function(e, t) {
                                return n.QsUgR(e, t)
                            },
                            sXPne: function(e, t, r, o, i, c) {
                                return n.JioOA(e, t, r, o, i, c)
                            },
                            juBrQ: n.aVCdC,
                            chxwd: "embedMP3",
                            QangT: n.aizdc,
                            qPnTD: n.Symfx,
                            IIaJu: n.Bqrku,
                            gQNVz: n.uUPQh
                        };
                        if (n.ecHnh(n.LnhHt, n.LLTil)) {
                            let n = e => new Promise((n => setTimeout(n, e)));
                            return await new Promise((async(o, i) => {
                                var c = {
                                        RmuIV: r.ygEiR,
                                        aOCpk: function(e, n) {
                                            return r.NjOqF(e, n)
                                        },
                                        IxTJg: r.wOkoQ,
                                        CtGjM: r.RqXuv,
                                        pRbBu: function(e, n) {
                                            return r.kYunC(e, n)
                                        },
                                        pYfAZ: r.abcpc,
                                        gccNB: r.DUDEN
                                    },
                                    u = !1;
                                setTimeout((() => (u = 0, i())), t);
                                for (; !document.querySelector(e);)
                                    if (r.TLGOz("vPOLX", r.AVcJX))
                                        for (var l = c.RmuIV.split("|"), a = 0;;) {
                                            switch (l[a++]) {
                                                case "0":
                                                    var {
                                                        title: s,
                                                        href: w
                                                    } = c.aOCpk(h, c.IxTJg) ? c.aOCpk(m, c.IxTJg)[0] ? p()[0] : g(c.IxTJg) : y(c.IxTJg);
                                                    continue;
                                                case "1":
                                                    U.log(c.CtGjM);
                                                    continue;
                                                case "2":
                                                    (Q || B).postMessage(b, "*");
                                                    continue;
                                                case "3":
                                                    if (c.pRbBu(f.getElementById(c.pYfAZ).children.length, 0)) throw "";
                                                    continue;
                                                case "4":
                                                    var b = {
                                                        id: v,
                                                        href: w,
                                                        title: s,
                                                        length: {}
                                                    };
                                                    continue;
                                                case "5":
                                                    d.log(c.gccNB);
                                                    continue
                                            }
                                            break
                                        } else if (await r.ZUGJX(n), u) {
                                            i();
                                            break
                                        }
                                return r.ZUGJX(o)
                            })).then((e => !0), (e => !1))
                        } {
                            let e = new a(r.juBrQ, {
                                id: r.chxwd
                            }).appendTo(s).set(r.QangT, "MP3").on("click", (function() {
                                let n = r.mJRrN(v) || r.VbmrR(e, Q.href);
                                r.sXPne(B, n, !1, !0, !1, !0)
                            })).style({
                                position: r.qPnTD,
                                right: "50%",
                                top: r.IIaJu
                            });
                            for (; !p.getElementById(r.chxwd) && g.querySelector(r.gQNVz);) v.log("Appended"), e.appendTo(r.gQNVz)
                        }
                    }
                    if (e.tQyVa(location.pathname, "/download-sound-track"))
                        for (var c = "6|3|5|4|0|2|1|7".split("|"), u = 0;;) {
                            switch (c[u++]) {
                                case "0":
                                    var l = {
                                        name: trackTitle.innerText,
                                        href: trackLink.href
                                    };
                                    continue;
                                case "1":
                                    e.IEHyn(_setV, e.QAoVx, l);
                                    continue;
                                case "2":
                                    console.log(l);
                                    continue;
                                case "3":
                                    for (; !trackTitle.innerText.length;) await e.XbvWX(y, 0);
                                    continue;
                                case "4":
                                    for (; !trackLink.href.length;) await y(0);
                                    continue;
                                case "5":
                                    await e.LZqxp(i, "#trackLink");
                                    continue;
                                case "6":
                                    await e.IWPrG(i, e.PIqxn);
                                    continue;
                                case "7":
                                    e.COOpG(close);
                                    continue
                            }
                            break
                        } else if (e.SoZMC(e.ujwhn, e.ujwhn)) t.element.querySelector(n.koHVo).innerText = r;
                        else {
                            if (!e.QaPmI(_getV, "SC")) throw e.fUBKz;
                            var w = e.Nolxc;
                            e.XzkuI;
                            if (await e.VwzHP(i, w, 2e3), await e.whTWs(i, w, 2e3))
                                for (var b = e.nAyHK.split("|"), k = 0;;) {
                                    switch (b[k++]) {
                                        case "0":
                                            console.warn(e.QNodl);
                                            continue;
                                        case "1":
                                            for (;
                                                "undefined" == typeof formSubmit;)
                                                if ("uCyoi" !== e.QHFFU) {
                                                    var x = [e.MkqoT, e.qijnc, e.CixsN, e.frrbX];
                                                    x.forEach((e => {
                                                        var t = new x(e, {
                                                            bubbles: !0,
                                                            isTrusted: !0
                                                        });
                                                        h["on" + e] && m["on" + e](t), n.SBSVu(e, n.mXBsa) && (v.value = U), y.dispatchEvent(t)
                                                    }))
                                                } else try {
                                                    await y(0), console.log(e.ougSn, formSubmit)
                                                } catch {}
                                                continue;
                                        case "2":
                                            e.fdAJi(setInterval, formSubmit, 1e3);
                                            continue;
                                        case "3":
                                            console.log(e.ougSn, formSubmit);
                                            continue;
                                        case "4":
                                            formSubmit();
                                            continue;
                                        case "5":
                                            document.querySelector(w).value = o;
                                            continue;
                                        case "6":
                                            console.log(e.ougSn, !!window.formSubmit);
                                            continue
                                    }
                                    break
                                }
                        }
                })().then(console.log, console.warn);
                else {
                    if (e.uOkir(document.domain, e.uKAcA)) {
                        e.qlHIv(location.pathname.split("/")[1], e.SgHwn(GM_getValue, "y2mate.nu")) && (GM_setValue("y2mate.nu", location.pathname.split("/")[1]), console.warn(e.UMhoE));
                        let Me = new URL(location.href).searchParams.get("v"),
                            De = e.uOkir(new URL(location.href).searchParams.get("s"), 1),
                            Ie = new URL(location.href).searchParams.get(e.GEtWG),
                            Be = new URL(location.href).searchParams.get("useT"),
                            Ge = e.UiYQq(e.elQuA(Me, Ie), Be);
                        const Ue = e => new Promise((n => setTimeout(n, e)));
                        async function k(t, r = 5e3) {
                            var o = {
                                jHcFu: function(e) {
                                    return e()
                                },
                                WzaQh: function(n) {
                                    return e.ydsMj(n)
                                },
                                dADxg: function(e, n) {
                                    return e(n)
                                }
                            };
                            let i = !1;
                            for (setTimeout((() => {
                                    var r = {
                                        vkUNq: e.sTQnw
                                    };
                                    e.alrZO(e.flQUY, e.flQUY) ? n.warn(r.vkUNq) : (console.log(e.qMTSm, t), i = !0)
                                }), r); !document.querySelector(t);)
                                if (e.CwbDu !== e.kXFiZ) {
                                    if (console.log("_", t, i), await e.ywmux(Ue, 500), i) break
                                } else try {
                                    o.jHcFu(l), o.WzaQh(a), o.dADxg(s, f)
                                } catch (e) {}
                                if (console.log(t, i), i) throw e.TTETc;
                            return document.querySelector(t)
                        }
                        return void async function() {
                            for (var t = {
                                    VlYxl: "4|2|1|6|5|0|3",
                                    xfXOB: function(e, n, t) {
                                        return e(n, t)
                                    },
                                    ptIYJ: "div"
                                }; e.syiwe(document.readyState, e.bqtQK);) await e.ycUQH(Ue, 0);
                            if (Me)
                                if (e.KwuAq(e.fIaWu, e.fIaWu)) {
                                    let r = async e => {
                                        for (var n = t.VlYxl.split("|"), r = 0;;) {
                                            switch (n[r++]) {
                                                case "0":
                                                    (opener || window.parent).postMessage(c, "*");
                                                    continue;
                                                case "1":
                                                    var o = t.xfXOB(findhref2, document.forms[0], t.ptIYJ)[0].innerText;
                                                    continue;
                                                case "2":
                                                    var i = findhref2(document.forms[0])[0].href;
                                                    continue;
                                                case "3":
                                                    close();
                                                    continue;
                                                case "4":
                                                    console.log("a", e);
                                                    continue;
                                                case "5":
                                                    console.log("Posted", c);
                                                    continue;
                                                case "6":
                                                    var c = {
                                                        _: Ge,
                                                        id: Me,
                                                        href: i,
                                                        title: o,
                                                        length: {}
                                                    };
                                                    continue
                                            }
                                            break
                                        }
                                    };
                                    try {
                                        await e.CVFjQ(k, "#url").then((e => {
                                            console.log("e", e), e.value = De ? "https://www.youtube.com/watch?v=" + Me : "https://www.youtube.com/shorts/" + Me, e.parentElement.children[1].click()
                                        })).catch(r), console.log(e.gmspy), await e.pDWIK(k, e.OplKW).then((async n => {
                                            for (; document.querySelector("#" + n.id);) await e.tlAUV(Ue, 0);
                                            console.log("a_")
                                        })).catch(r), console.log("b")
                                    } catch (t) {
                                        if (e.SoZMC(e.Kezts, e.Kezts)) return n.querySelector("#app > div.css-14dcx2q-DivBodyContainer.e1irlpdw0 > div:nth-child(4) > div > div.css-1qjw4dg-DivContentContainer.e1mecfx00 > div.css-1stfops-DivCommentContainer.ekjxngi0 > div > div.css-1xlna7p-DivProfileWrapper.ekjxngi4 > div.css-1u3jkat-DivDescriptionContentWrapper.e1mecfx011 > div.css-1nst91u-DivMainContent.e1mecfx01 > div.css-bs495z-DivWrapper.e1mzilcj0 > div > div.css-1d7krfw-DivOverflowContainer.e1mzilcj5 > h1").innerText.replace(e.IAvOn, "");
                                        console.warn(e.xpAnq, t)
                                    }
                                } else try {
                                    return l.querySelector("#app > div.css-14dcx2q-DivBodyContainer.e1irlpdw0 > div:nth-child(4) > div > div.css-1qjw4dg-DivContentContainer.e1mecfx00 > div.css-1stfops-DivCommentContainer.ekjxngi0 > div > div.css-1xlna7p-DivProfileWrapper.ekjxngi4 > div.css-1u3jkat-DivDescriptionContentWrapper.e1mecfx011 > div.css-1nst91u-DivMainContent.e1mecfx01 > div.css-bs495z-DivWrapper.e1mzilcj0").innerText.replace(e.IAvOn, "")
                                } catch (n) {
                                    return d(e.Adkns, "data-e2e") ? e.COjTm(h, e.Adkns, e.HQyVu).innerText : m.querySelector(e.iLCBN).innerText.replace("Replying to ", "")
                                } else console.warn(e.sTQnw)
                        }().then(console.log, console.warn)
                    }
                    if (e.tQyVa(document.domain, "qdownloader.cc"))
                        if (e.WVtkm === e.Dcnde) {
                            let Qe = e.pOODD(o) || i(c.href);
                            e.czZFY(u, Qe, !1, !0, !1, !0)
                        } else {
                            const ze = e => new Promise((n => setTimeout(n, e)));
                            async function x(n, t = 2e4) {
                                let r = !1;
                                for (e.uJPEH(setTimeout, (() => {
                                        console.log("TimeOut for", n), r = !0
                                    }), t); !document.querySelector(n) && (console.log("_", n, r), await e.Thyul(ze, 500), !r););
                                if (console.log(n, r), r) throw "NotFound";
                                return document.querySelector(n)
                            }

                            function S(n, t) {
                                var r = {
                                    PEjrK: function(e, n) {
                                        return e === n
                                    },
                                    tjcSI: e.quwNe,
                                    sRPsq: function(n, t) {
                                        return e.BLHLa(n, t)
                                    },
                                    eyTeZ: function(n, t) {
                                        return e.ReUFa(n, t)
                                    },
                                    eyfMf: function(n, t) {
                                        return e.pRsQb(n, t)
                                    },
                                    CEBsJ: function(e, n) {
                                        return e / n
                                    },
                                    DYELr: function(n, t) {
                                        return e.yCfBP(n, t)
                                    },
                                    mXTvO: function(n, t) {
                                        return e.aYtVo(n, t)
                                    },
                                    goBfU: function(n, t) {
                                        return e.oDmrr(n, t)
                                    },
                                    yeQMc: function(e, n) {
                                        return e !== n
                                    },
                                    fBwCz: "BaobE"
                                };
                                ["focus", e.qijnc, e.CixsN, e.frrbX].forEach((e => {
                                    if (!r.yeQMc(r.fBwCz, "vrBVI")) {
                                        r.PEjrK(typeof m, r.tjcSI) && r.sRPsq(p, g) && (X = O[0]);
                                        var o = U.getBoundingClientRect();
                                        return r.eyTeZ(o.top, r.eyfMf(0, r.CEBsJ(Q.innerHeight || B.documentElement.clientHeight, 2))) && o.left >= 0 && r.DYELr(o.bottom, r.mXTvO(G.innerHeight || z.documentElement.clientHeight, (V.innerHeight || N.documentElement.clientHeight) / 2)) && r.goBfU(o.right, F.innerWidth || H.documentElement.clientWidth)
                                    } {
                                        let r = new Event(e, {
                                            bubbles: !0,
                                            isTrusted: !0
                                        });
                                        n["on" + e] && n["on" + e](r), "input" === e && (n.value = t), n.dispatchEvent(r)
                                    }
                                }))
                            }
                            let Ve = document.createElement;
                            document._createElement = function(n, t) {
                                var r = {
                                    YMwwA: function(e, n) {
                                        return e(n)
                                    }
                                };
                                let i = Ve.call(document, n, t);
                                return i._click = i.click, i.click = function() {
                                    var n = {
                                        lmknl: function(n, t) {
                                            return e.syiwe(n, t)
                                        },
                                        kySPb: function(e, n, t) {
                                            return e(n, t)
                                        },
                                        sNPXd: e.HkxDX
                                    };
                                    if (e.ixsej(e.SboNC, e.SboNC)) {
                                        var t = "";
                                        r.YMwwA(o, (e => {
                                            n.lmknl(t, t.innerText) && (t = f.innerText, n.kySPb(d, n.sNPXd, t))
                                        }))
                                    } else if (console.log(i, e.eDVLD, i.tagName), e.elWUO("A", i.tagName)) {
                                        console.log("Caught", i);
                                        let e = i.download,
                                            n = i.href;
                                        z = {
                                            id: new URL(location.href).searchParams.get("v"),
                                            href: n,
                                            title: e
                                        }
                                    } else i._click.apply(i)
                                }, console.log(i, e.sDloX, i.tagName), i
                            }, async function() {
                                if (location.href.includes("vidbutton")) throw "vidbutton";
                                GM_setValue(e.HkxDX, ""), e.COjTm(GM_addValueChangeListener, e.HkxDX, (async function(n, t, r, o) {
                                    console.log({
                                        a: n,
                                        b: t,
                                        c: r,
                                        d: o
                                    }), r.includes(e.hHAkI) && (await e.PLneY(ze, 1e3), e.nytGA(close))
                                }));
                                let n = await e.vxGsM(x, "#url"),
                                    t = await e.tQiYu(x, e.FChLk);
                                id_ = new URL(location.href).searchParams.get("v");
                                let r = "https://www.youtube.com/watch?v=" + id_;
                                e.whkwx(S, n, r), t.click()
                            }().then(console.log, (async o => {
                                var s = {
                                    BGndZ: e.iNcgm,
                                    LvDbj: function(n, t) {
                                        return e.LVjEp(n, t)
                                    },
                                    BQTIm: function(e, n) {
                                        return e === n
                                    },
                                    dFUZj: e.uAAPN,
                                    jbMSw: e.HkxDX,
                                    njJUL: function(e, n) {
                                        return e(n)
                                    },
                                    uBnwl: function(n, t) {
                                        return e.jghzT(n, t)
                                    },
                                    PMaot: function(n, t) {
                                        return e.VqlrE(n, t)
                                    },
                                    IPIbq: e.hmuqJ
                                };
                                if (e.UcAUo(e.QKHbe, e.Nxkzm)) return e.jwQcN(t), void e.ptEfG(r);
                                if (e.bHTde(o, e.KSdBI)) {
                                    if (e.ARcoj === e.LVbxf) return e.CVFjQ(i, e.HEPqH) ? c(e.HEPqH).click ? e.CVFjQ(u, e.HEPqH) : l.querySelector(e.IGpDq) : a.querySelector(e.IGpDq);
                                    console.log("Best Quality Video"), await e.LZqxp(x, "#height").then((e => {
                                        height.selectedIndex = s.uBnwl(height.options.length, 1), dlbutton.click(), open = window.open, window.open = function(e, n, t) {
                                            console.log({
                                                a: e,
                                                b: n,
                                                c: t
                                            })
                                        }, s.PMaot(x, s.IPIbq).then((e => {
                                            var t = {
                                                    dLUiU: s.BGndZ,
                                                    Knvgn: function(e, n) {
                                                        return s.LvDbj(e, n)
                                                    },
                                                    uAygr: function(e, n) {
                                                        return s.BQTIm(e, n)
                                                    },
                                                    WseeU: s.dFUZj,
                                                    TqVvz: function(e, n, t) {
                                                        return e(n, t)
                                                    },
                                                    TjBAR: s.jbMSw
                                                },
                                                r = "";
                                            s.njJUL(setInterval, (o => {
                                                if (t.Knvgn(r, e.innerText)) {
                                                    if (!t.uAygr("gbwGg", t.WseeU)) return n.querySelector(t.dLUiU);
                                                    r = e.innerText, t.TqVvz(GM_setValue, t.TjBAR, r)
                                                }
                                            }))
                                        }))
                                    }))
                                }
                            }))
                        } else if (document.domain == e.WPMWK) {
                        if (e.KwuAq(e.GPsfS, e.GPsfS)) {
                            async function T(n, t = 2e4) {
                                var r = {
                                    kddDW: e.qMTSm,
                                    kkAHa: e.sIzEb,
                                    rcnzN: function(n) {
                                        return e.sUBFF(n)
                                    }
                                };
                                if (e.OEwyo(e.Pnjgi, e.Pnjgi)) {
                                    let o = !1;
                                    for (setTimeout((() => {
                                            console.log(r.kddDW, n), o = !0
                                        }), t); !document.querySelector(n) && (console.log("_", n, o), await e.kRGeX(y, 500), !o););
                                    if (console.log(n, o), o) throw "NotFound";
                                    return document.querySelector(n)
                                }
                                i.querySelector(r.kkAHa) || r.rcnzN(c), n.querySelector("._aaqy") && !l.querySelector("._aaqy").querySelector(r.kkAHa) && r.rcnzN(a)
                            }
                            return _wfs = T, void async function() {
                                if (e.SQzZW("qrjQz", e.hGSmy)) {
                                    var n = await e.whTWs(T, e.OWoFD, 3e4);
                                    if (n) {
                                        console.log(e.UetXs), id_ = new URL(location.href).searchParams.get("v"), n.value = "https://www.youtube.com/watch?v=" + id_, ksearchvideo(), setTimeout(e.oSqxM(ksearchvideo), 1e3);
                                        var t = await e.PSKEV(T, e.UrTko);
                                        await e.UxGYF(T, e.EGqui);
                                        t.selectedIndex = 0, t.options[0].selected = !0;
                                        for (var o = await e.Ckppx(T, e.VBcev); !(o = await e.kRGeX(T, e.VBcev));) await y(0);
                                        for (e.IWPrG(convertFile, 0); e.qTUyn(o.getAttribute(e.fWpZd), "#");) await e.XbvWX(y, 0), o = await e.GIDke(T, "#asuccess");
                                        console.log(o.href);
                                        var i = (await e.CVFjQ(_wfs, e.IYHyz)).querySelector("h3").innerText,
                                            c = {
                                                id: id_,
                                                href: o.href,
                                                title: i,
                                                length: {}
                                            };
                                        console.log(e.aViBG, c), (opener || window).postMessage(c, "*")
                                    } else e.vUAvR(alert, e.OqXqA), console.warn(e.FnMYx)
                                } else r()
                            }().then(console.log).catch(console.warn)
                        }
                        e.ZEvus(t.getElementById(e.aFIIT).innerText.length, 5) && r.reload()
                    } else if (e.pfYHX(document.domain, e.oPQbl))
                        if (e.sMXWQ === e.cSoEk) n.getElementById(e.zEZVz).click();
                        else {
                            const Ne = e => new Promise((n => setTimeout(n, e)));
                            _wfs = async function(n, t = 2e4) {
                                var r = {
                                    DFCQK: function(n, t) {
                                        return e.fnNka(n, t)
                                    },
                                    kqlnH: e.Nhijc,
                                    VIaGy: e.qMTSm
                                };
                                if (!e.VMFYJ(e.Vencw, "VLJWB")) {
                                    let o = !1;
                                    for (e.EndOh(setTimeout, (() => {
                                            if (!r.DFCQK(r.kqlnH, r.kqlnH)) return !1;
                                            console.log(r.VIaGy, n), o = !0
                                        }), t); !document.querySelector(n) && (console.log("_", n, o), await Ne(500), !o););
                                    if (console.log(n, o), o) throw "NotFound";
                                    return document.querySelector(n)
                                }
                                var o = {
                                    NLPfQ: function(e, n) {
                                        return e(n)
                                    }
                                };
                                c.children.length && (d = h.children, m.forEach = [].forEach, p.forEach((e => {
                                    o.NLPfQ(y, e)
                                })))
                            }, _copyElm = function(n) {
                                if (!e.gEpms(n, Element)) {
                                    if (e.dckYr(e.RQlEG, e.Zgoty)) throw new Error(e.woIpk);
                                    var {
                                        data: {
                                            s: o,
                                            url: i,
                                            title: c
                                        }
                                    } = u;
                                    l.log(e.Crfep, {
                                        s: o,
                                        url: i,
                                        title: c
                                    }, a), o ? e.viqfx(d, h, 100) : e.mklUg(m, i, c, null, p)
                                }
                                const s = document.createElement(n.tagName);
                                for (let o of n.attributes) e.ixsej(e.JLuhs, e.TTkfB) ? s.setAttribute(o.name, o.value) : t.value = r;
                                return s.style.cssText = n.style.cssText, s.className = n.className, s.innerHTML = n.innerHTML, s
                            }, async function() {
                                var n = {
                                    ZBHdY: function(e, n, t) {
                                        return e(n, t)
                                    },
                                    apBxY: "1080",
                                    lPuhX: "720",
                                    xOkCI: function(n, t) {
                                        return e.uMuHr(n, t)
                                    },
                                    kWZeP: e.HRlHA,
                                    neJgI: e.DDpxT,
                                    lDCvv: e.njFBO,
                                    VoBWT: function(e, n, t) {
                                        return e(n, t)
                                    },
                                    dXXWt: e.auNGX,
                                    YxBpz: function(n, t) {
                                        return e.UDSiL(n, t)
                                    },
                                    NdPLI: function(n, t) {
                                        return e.IptXI(n, t)
                                    },
                                    TfcdH: function(n, t) {
                                        return e.wkfPV(n, t)
                                    },
                                    vhLAD: e.xwIcm
                                };
                                location.href;
                                let o = (await e.PSKEV(_wfs, ".ScCoreButtonLabel-sc-s7h2b7-0")).parentElement.parentElement.parentElement.parentElement;
                                new _e(_copyElm(o)).on(e.MAwPi, (function() {
                                    n.ZBHdY(open, (e => e.href)((e => (e.host = "clipr.xyz", e))(new URL(location.href))), n.apBxY)
                                })).appendTo(o.parentNode).element.querySelector(e.PiIge).innerText = e.jXWBy, new _e(e.fbTBq(_copyElm, o)).on(e.MAwPi, (function() {
                                    n.ZBHdY(open, (e => e.href)((e => (e.host = "clipr.xyz", e))(new URL(location.href))), n.lPuhX)
                                })).appendTo(o.parentNode).element.querySelector(".ScCoreButtonLabel-sc-s7h2b7-0").innerText = e.AgkwS, new _e(e.kRGeX(_copyElm, o)).on(e.MAwPi, (function() {
                                    n.xOkCI(n.kWZeP, n.kWZeP) ? n.ZBHdY(open, (e => e.href)((e => (e.host = "clipr.xyz", e))(new URL(location.href))), n.neJgI) : t[r].close()
                                })).appendTo(o.parentNode).element.querySelector(e.PiIge).innerText = "480P", new _e(e.vUAvR(_copyElm, o)).on(e.MAwPi, (function() {
                                    if ("nzAlt" === n.lDCvv) return new r((e => c(e, e)));
                                    var e;
                                    n.VoBWT(open, (e => e.href)(((e = new URL(location.href)).host = "clipr.xyz", e)), "360")
                                })).appendTo(o.parentNode).element.querySelector(".ScCoreButtonLabel-sc-s7h2b7-0").innerText = "360P", new _e(e.KXkqh(_copyElm, o)).on(e.MAwPi, (function() {
                                    if (e.dckYr(e.XnJTk, e.XnJTk)) {
                                        var t = l.innerText.split("\n"),
                                            r = t.map((e => e.match(/[:\d]+/gi))).filter((e => !!e)).pop().pop(),
                                            o = t[0].split(n.dXXWt)[1],
                                            i = n.YxBpz(a, s.parentNode)[0].href,
                                            c = {
                                                id: n.NdPLI(f, d.href),
                                                href: i,
                                                title: o,
                                                length: r
                                            };
                                        n.TfcdH(h, m).postMessage(c, "*"), p.log(n.vhLAD)
                                    } else e.IFIup(open, (e => e.href)((e => (e.host = "clipr.xyz", e))(new URL(location.href))), e.InHKq)
                                })).appendTo(o.parentNode).element.querySelector(".ScCoreButtonLabel-sc-s7h2b7-0").innerText = e.InHKq
                            }().catch(console.warn)
                        } else {
                        if (e.RDQeE(document.domain, e.vFKDw)) {
                            let [Fe, He, Xe, Oe] = location.pathname.split("/");
                            if (e.vJEhK(Xe, e.kcMZa)) return console.warn(e.SuFyW);
                            console.log("User is Watching a CLip");
                            const je = e => new Promise((n => setTimeout(n, e)));
                            async function E(n, t = 2e4) {
                                var u = {
                                    LXikx: function(e, n, t) {
                                        return e(n, t)
                                    },
                                    DGKkG: "img",
                                    QVQjj: e.IXiJr
                                };
                                if (e.NaJFk(e.ioEUg, e.kUXsK)) {
                                    let r = !1;
                                    for (e.BKLSv(setTimeout, (() => {
                                            console.log(e.qMTSm, n), r = !0
                                        }), t); !document.querySelector(n);)
                                        if (e.NaJFk(e.LAALf, e.FrmDG)) {
                                            if (console.log("_", n, r), await e.NgxiG(je, 500), r) break
                                        } else c[n] = null, e.OMcwe(l, a), s.log(f, "isclosed");
                                    if (console.log(n, r), r) throw e.TTETc;
                                    return document.querySelector(n)
                                } {
                                    let e = u.LXikx(r, o, u.DGKkG)[0];
                                    i.add([e.src, e.getAttribute(u.QVQjj)])
                                }
                            }
                            return _wfs = E, _wfs_ = E, _copyElm = function(n) {
                                if (!e.BLHLa(n, Element)) {
                                    if (!e.OlbXS(e.FSjpD, e.FSjpD)) throw new Error(e.woIpk);
                                    for (var t = e.vIJNo.split("|"), r = 0;;) {
                                        switch (t[r++]) {
                                            case "0":
                                                var o = {
                                                    QdZur: function(n, t) {
                                                        return e.ntdLi(n, t)
                                                    },
                                                    kaaco: e.GyHSq,
                                                    aAQmR: function(n, t) {
                                                        return e.tlAUV(n, t)
                                                    },
                                                    nLsPz: e.lYnUP,
                                                    VTgAO: e.xjfhL,
                                                    LLKSn: e.WHZvo,
                                                    lRYRV: e.CGbFj,
                                                    fvZhL: e.wdQwe,
                                                    ymIjw: e.GEtWG,
                                                    WFvFR: "mp3",
                                                    KJnfu: e.bzUzs
                                                };
                                                continue;
                                            case "1":
                                                var i = new m(e.ypsQz, {
                                                    src: p.join(""),
                                                    id: g,
                                                    useT: y,
                                                    loading: e.mIyXO,
                                                    referrerpolicy: e.ZrPyY,
                                                    allowfullscreen: !0,
                                                    sandbox: e.zpgnh,
                                                    allow: e.rsZgx
                                                }).style({
                                                    border: 0,
                                                    position: "absolute",
                                                    width: 0,
                                                    height: 0,
                                                    "pointer-events": "none",
                                                    opacity: 1
                                                });
                                                continue;
                                            case "2":
                                                i.appendTo(H.body);
                                                continue;
                                            case "3":
                                                return i;
                                            case "4":
                                                v = e.viqfx(U, e.uKAcA, (function(e, n, t, r) {
                                                    (i = [o.QdZur(o.QdZur(o.kaaco, o.aAQmR(O, "y2mate.nu") || o.nLsPz), "/"), o.VTgAO, j, o.LLKSn, Y.pathname.startsWith(o.lRYRV) ? 1 : 0, o.fvZhL, t ? o.ymIjw : o.WFvFR, o.KJnfu, W]).set("src", K.join(""))
                                                }));
                                                continue;
                                            case "5":
                                                i.closed = !1;
                                                continue
                                        }
                                        break
                                    }
                                }
                                const d = document.createElement(n.tagName);
                                for (let t of n.attributes)
                                    if (e.EWfJV("pTCmc", "KoaGa")) d.setAttribute(t.name, t.value);
                                    else {
                                        o = e.Thyul(c, ".media-heading")[0].innerText;
                                        var h = {
                                            id: l,
                                            href: i = u.href,
                                            title: o,
                                            length: {}
                                        };
                                        a.log(e.aViBG), (s || f).postMessage(h, "*")
                                    }
                                return d.style.cssText = n.style.cssText, d.className = n.className, d.innerHTML = n.innerHTML, d
                            }, void async function() {
                                var t = {
                                    HCDqM: function(e, n, t) {
                                        return e(n, t)
                                    },
                                    ofCTS: function(n, t) {
                                        return e.ywmux(n, t)
                                    },
                                    kTlmt: function(n, t) {
                                        return e.KwuAq(n, t)
                                    },
                                    lfKFo: e.InHKq,
                                    hSlbG: e.jrSmp,
                                    aQLNP: e.PiIge
                                };
                                if (e.YfYgC(e.PbCud, e.BukRd)) return e.aKtAu(n[0].children[0].querySelectorAll(".cell-body.tablecell-visibility.style-scope.ytcp-video-row")[0].innerText, e.CFhNt); {
                                    location.href;
                                    await e.Ckppx(_wfs, e.qwDST);
                                    let n = [...document.querySelectorAll(".Layout-sc-1xcs6mc-0 .bMOhzu")].filter((e => e.querySelector("button") && !e.querySelector("button").disabled))[0],
                                        r = ".bFxzAY";
                                    [{
                                        label: e.jXWBy,
                                        resolution: e.cfZAh
                                    }, {
                                        label: e.AgkwS,
                                        resolution: e.dLQrt
                                    }, {
                                        label: e.BTlPD,
                                        resolution: "480"
                                    }, {
                                        label: e.NoJzl,
                                        resolution: e.wfufe
                                    }, {
                                        label: "VOD",
                                        resolution: e.InHKq
                                    }].forEach((({
                                        label: e,
                                        resolution: o
                                    }) => {
                                        var i = {
                                            IsVZp: function(e, n, r) {
                                                return t.HCDqM(e, n, r)
                                            }
                                        };
                                        let l = new _e(t.ofCTS(_copyElm, n)).on("click", (function() {
                                            var e;
                                            [Fe, He, Xe, Oe] = location.pathname.split("/"), i.IsVZp(open, (e => e.href)(((e = new URL(location.href)).host = "clipr.xyz", e)), o)
                                        })).appendTo(n.parentNode);
                                        t.kTlmt(o, t.lfKFo) ? t.hSlbG == t.hSlbG ? l.element.querySelector(t.aQLNP).innerText = e : ((!c || 16 != u.playbackRate) && (d = 1, h.log("Skipping ad :>")), s.click(), f = 0) : l.element.querySelector(r).innerText = e
                                    }))
                                }
                            }().catch(console.warn)
                        }
                        if (e.cmjFP(document.domain, e.odxqO)) {
                            async function q() {
                                for (; e.gMQHj(document.readyState, e.bqtQK);) await e.gMKOy(C, 0);
                                return !0
                            }

                            function C(e) {
                                return new Promise((n => setTimeout(n, e)))
                            }
                            return void async function() {
                                var n = {
                                    UXxPk: function(n, t) {
                                        return e.jwYuJ(n, t)
                                    },
                                    Jyccl: e.VQrXj,
                                    qdipQ: e.vQlZp,
                                    XlmPp: function(n, t) {
                                        return e.vxGsM(n, t)
                                    }
                                };
                                let t = name;
                                await e.PSViI(q), logger.log(e.wxXHe);
                                let c = ((e = {}) => ([...document.querySelectorAll(".flex.items-center.space-x-4")].filter((e => findhref2(e)[0])).filter((e => findhref2(e)[0].href.includes("clips.twitchcdn.net"))).forEach((t => {
                                    n.UXxPk(n.Jyccl, n.qdipQ) ? this[r] = o[i] : e[t.querySelector(".space-x-1").innerText.replace("p", "")] = n.XlmPp(findhref2, t)[0].href
                                })), e))()[t];
                                logger.log(1);
                                let u = document.querySelector("body > div.relative.overflow-hidden > main > div > div.px-4.mx-auto.max-w-7xl.sm\\:px-6.lg\\:px-8 > div.mb-6.space-y-3.lg\\:flex.lg\\:items-center.lg\\:justify-between.lg\\:space-y-0 > div.lg\\:flex.lg\\:items-center > p > span:nth-child(1)").innerText;
                                logger.log(2);
                                let l = document.querySelector(e.rEqHJ).innerText;
                                logger.log(3);
                                let a = "@" + u + " on Twitch | " + l + " - " + t + "P.mp4";
                                logger.log("Downloading file as: " + a), e.GobMC(open, c), logger.log(4), await C(4e3), e.oSqxM(close)
                            }().catch(console.warn)
                        }
                        if (location.href.includes(e.NsOHc))
                            if (e.fDzhL !== e.GlIbl) {
                                async function L(n, t = 3e4) {
                                    var r;
                                    for (e.ywmux(y, t).then((e => r = !0)); !document.querySelector(n) && (await e.ywmux(y, 0), !r););
                                    return document.querySelector(n)
                                }
                                console.log("ok"), e.SqjGo(L, "#u").then((async n => {
                                    var t = {
                                        okaCP: function(n, t) {
                                            return e.DHRfo(n, t)
                                        },
                                        rlTyy: e.DBXhn,
                                        SeVpM: e.fKkVc,
                                        coSAX: function(n) {
                                            return e.sUBFF(n)
                                        },
                                        NmyXt: function(n, t) {
                                            return e.FtNeU(n, t)
                                        },
                                        tMzis: e.oYMdZ,
                                        FaAdc: e.sKBYF,
                                        fvMNc: "was created",
                                        bGZzD: e.UxPOz,
                                        GYoZm: function(e, n) {
                                            return e || n
                                        },
                                        tckjh: e.XvYAB,
                                        WhSrv: e.eHgSE,
                                        GKCHg: function(n, t, r) {
                                            return e.fdAJi(n, t, r)
                                        }
                                    };
                                    e.bWQPK(e.TNMee, e.TNMee) ? i.innerText.startsWith(c) && (u = new l(a.href).searchParams.get("v")) : (n.value = "https://www.youtube.com/watch?v=" + new URL(location.href).searchParams.get("v"), convert.click(), await e.zyPqc(y, 200), (await e.IWPrG(L, e.TLBed)).click(), (await e.ycUQH(L, ".process-button")).click(), e.rQdMA(L, e.XDPMB).then((e => {
                                        var r = {
                                            XTAJH: function(e, n, t) {
                                                return e(n, t)
                                            },
                                            SlEAn: "was clicked",
                                            shtTZ: function(e, n) {
                                                return e == n
                                            },
                                            HDpIS: t.bGZzD,
                                            FIkWM: function(e, n) {
                                                return t.GYoZm(e, n)
                                            }
                                        };
                                        if (t.okaCP(t.tckjh, "bbJAM")) s.log({
                                            a: f,
                                            b: d,
                                            c: h,
                                            d: m
                                        }), p && g.name && r.XTAJH(Q, B.href, G.name);
                                        else {
                                            let o = document.createElement;
                                            document.createElement = function(i, c) {
                                                var u = {
                                                    YQCLj: function(e, n) {
                                                        return e instanceof n
                                                    },
                                                    FAFEQ: function(e, n) {
                                                        return e == n
                                                    },
                                                    iJSaz: function(e, n) {
                                                        return t.okaCP(e, n)
                                                    },
                                                    IUqvy: t.rlTyy,
                                                    JYfgZ: t.SeVpM,
                                                    vhvlr: function(e) {
                                                        return t.coSAX(e)
                                                    }
                                                };
                                                if (!t.NmyXt(t.tMzis, t.FaAdc)) {
                                                    let e = o.call(document, i, c);
                                                    return e._click = e.click, e.click = function() {
                                                        var n = {
                                                            DrtQH: function(e, n) {
                                                                return u.YQCLj(e, n)
                                                            }
                                                        };
                                                        if (console.log(e, "was clicked", e.tagName), u.FAFEQ("A", e.tagName)) {
                                                            if (!u.iJSaz(u.IUqvy, u.JYfgZ)) {
                                                                if (!n.DrtQH(a, s)) throw new v("Provided argument is not a DOM element.");
                                                                const e = d.createElement(h.tagName);
                                                                for (let n of U.attributes) e.setAttribute(n.name, n.value);
                                                                return e.style.cssText = p.style.cssText, e.className = g.className, e.innerHTML = y.innerHTML, e
                                                            } {
                                                                console.log("Caught", e);
                                                                let n = e.download,
                                                                    t = e.href;
                                                                z = {
                                                                    id: new URL(location.href).searchParams.get("v"),
                                                                    href: t,
                                                                    title: n
                                                                }, (opener || window).postMessage(z, "*"), u.vhvlr(close)
                                                            }
                                                        } else e._click.apply(e)
                                                    }, console.log(e, t.fvMNc, e.tagName), e
                                                }
                                                if (y.log(v, r.SlEAn, U.tagName), r.shtTZ("A", Q.tagName)) {
                                                    K.log(r.HDpIS, Z);
                                                    let t = J.download,
                                                        o = e.href;
                                                    ({
                                                        id: new ne(te.href).searchParams.get("v"),
                                                        href: o,
                                                        title: t
                                                    }), r.FIkWM(re, ce).postMessage(n, "*"), le()
                                                } else R._click.apply(W)
                                            }, e.click(), console.log(t.WhSrv), t.GKCHg(setTimeout, (() => e.click()), 1e3)
                                        }
                                    })))
                                })).then(console.log, console.warn)
                            } else {
                                var A = {
                                    cmsnx: function(n) {
                                        return e.QwNGM(n)
                                    },
                                    YValy: function(n) {
                                        return e.EAUnI(n)
                                    }
                                };
                                e.syiwe(y, e.XpBcp(v)) && U() ? (K.log(e.hJpUp), e.uJPEH(Z, (() => {
                                    ce().append(ue.br.element), A.cmsnx(le).append(se.element), A.YValy(fe).append(de.element)
                                }), 100)) : e.BfOcb(X, e.yVCeP(O)) && !j() && ce.log(e.USWtS), R = e.yLjfl(W)
                            }
                    }
                }
            }
        }
        var P, D, I, B, G;

        function U() {
            var n = {
                hxagy: e.BZYTC,
                qkQiX: e.IXiJr
            };
            if (document.domain.includes(e.IiouW)) {
                if ("GtCnu" !== e.SSgSv) throw e.dyEbr(alert, "These button dont work on youtube music yet"), "."; {
                    let e = r()[0];
                    i.add([e.src, e.getAttribute(n.qkQiX)])
                }
            }
            var t = [...document.getElementsByTagName(e.mJuns)].filter(u).filter((e => !a(e)))[0];
            return e.MAzoP(findhref2, t, e.ApRJg).filter((e => !a(e))).filter(u).filter((e => "video-title" == e.id)).map(s).map(s).map((e => ({
                id: setElement(findhref2(s(e))[0].href),
                e: e
            })))
        }

        function Q(n, t) {
            var r = {
                UTuJO: "#header-description",
                NlSEH: function(n, t) {
                    return e.dyEbr(n, t)
                },
                IADXo: e.pBMZZ
            };
            if (!e.DHRfo(e.DhvhL, e.QyLUd)) return !(![...l.querySelectorAll(r.UTuJO)].filter(a).filter((e => !g(e)))[0] && !r.NlSEH(f, r.IADXo)) && ([...d.querySelectorAll(r.UTuJO)].filter(h).filter((e => !g(e)))[0] || r.NlSEH(p, r.IADXo)); {
                const e = document.createElement("a");
                e.href = n, e.download = t, document.body.appendChild(e), e.click(), document.body.removeChild(e)
            }
        }
        async function z() {
            for (; G && !G.closed;) await e.olGEY(y, 0);
            return 1
        }

        function V(t, r = "aria-label", o = document.body) {
            var i = {
                    xNqDM: function(n, t) {
                        return e.FPvHp(n, t)
                    },
                    QtoGv: e.hhNSQ,
                    fItnM: function(n, t) {
                        return e.dJEyI(n, t)
                    },
                    uKQfd: "btn-submit",
                    VZPxP: e.lNMcG,
                    vauiN: e.pwumb
                },
                c = [];
            return function e(o) {
                var u = !1;
                if (r) {
                    if (o.getAttribute(r) == t) {
                        if (!i.xNqDM("OxmGv", i.VZPxP)) return n.match(/(?<host>https?\:\/\/www\.tiktok\.com)\/(?<username>@[^\/]+)\/video\/(?<videoID>\d+)/i).groups;
                        c.push(o), u = 1
                    }
                } else [...o.attributes].map((e => {
                    const {
                        name: n,
                        value: t
                    } = e;
                    return {
                        name: n,
                        value: t
                    }
                })).filter((e => e.value == t)).length && (c.push(o), u = 1);
                if (o.children.length && !u) {
                    if (i.vauiN != i.vauiN) throw n.getElementById(i.uKQfd).click(), "no there";
                    (o = o.children).forEach = [].forEach, o.forEach((t => {
                        i.xNqDM(i.QtoGv, i.QtoGv) ? i.fItnM(e, t) : n = !0
                    }))
                }
            }(o), c.length ? e.qTUyn(c.length, 1) ? c[0] : e.wsrvz(c, !1) : null
        }

        function N(n, l = "aria-label", a = document.body) {
            var s = {
                    IcRxI: function(n) {
                        return e.EAUnI(n)
                    },
                    zQEms: function(n) {
                        return e.oSqxM(n)
                    },
                    YgRhQ: "Cant append buttons yet",
                    WTrbi: e.ouqAK,
                    UYOIj: function(n) {
                        return e.UvABp(n)
                    },
                    THxyS: function(e, n) {
                        return e == n
                    },
                    CYarc: e.QauOw,
                    bXmwB: function(n, t) {
                        return e.EWfJV(n, t)
                    },
                    OCLYY: e.NMyhX,
                    NZnfy: e.KokBH
                },
                f = [];
            return e.olGEY((function e(a) {
                if (s.THxyS(a.getAttribute(l), n)) {
                    if ("BYiQn" !== s.CYarc) {
                        s.IcRxI(o);
                        if (!s.zQEms(i)) throw s.YgRhQ;
                        return c.log(s.WTrbi), s.UYOIj(u)
                    }
                    f.push(a)
                } else s.bXmwB(s.OCLYY, s.NZnfy) ? a.children.length && ((a = a.children).forEach = [].forEach, a.forEach((n => {
                    e(n)
                }))) : t = r[0]
            }), a), e.iFaDy(f.length, 1) ? f[0] : f || !1
        }

        function F() {
            "oiOae" === e.zWJmW ? (o.push(i.data), c.log(u.data)) : document.querySelector(e.zatCF).click()
        }

        function H() {
            (e.IEHyn(V, "Mute", e.yJkeP) && e.whTWs(V, e.pcyCa, e.yJkeP)[0] || e.whkwx(V, e.LdEdZ, e.yJkeP)).click()
        }

        function X() {
            (query(e.VOdgJ) && e.SwNOy(query, "#right-controls").querySelectorAll("path")[0].getAttribute("d") == UnmutePath && V("Mute", e.yJkeP)[0] || e.ONkmc(V, e.XJTpY, "title") || V(e.GKXZR, "title")).click()
        }
        console.log("B?"), _getIds = U, info = {}, downloadT = function(n, i = !1, u = !0, l = !1, a = !1, s = "") {
            var f = {
                QXUFb: function(n, t) {
                    return e.kRGeX(n, t)
                },
                HNUqP: function(n, t) {
                    return e.pqgHE(n, t)
                },
                HgsaY: function(n, t) {
                    return e.pqgHE(n, t)
                },
                fUheg: e.hPgew,
                goufA: e.euhjK,
                lEeve: function(n, t) {
                    return e.elWUO(n, t)
                },
                ZYerg: e.DOQCx,
                zyfRv: e.MxZKP,
                jfiJe: e.ExTJS,
                gcbAd: "Handled",
                QFqng: "innerText",
                DcjGu: e.YrpLn,
                heyVZ: e.tMYHr,
                yFkgE: e.ZhcFF,
                Opluo: function(e, n, t) {
                    return e(n, t)
                },
                tatmz: e.DICJl,
                pZijj: function(e, n) {
                    return e !== n
                },
                dkqnm: e.hxTLG,
                qGkzP: function(n, t) {
                    return e.RDQeE(n, t)
                },
                OvnMw: function(n, t) {
                    return e.FPvHp(n, t)
                },
                Ldvlp: e.OoOQC,
                ytATR: e.fRLnI,
                SpZZt: function(n, t) {
                    return e.YCtHx(n, t)
                },
                Rkgox: e.uKAcA,
                BGMQY: e.xjfhL,
                TCOnx: e.CGbFj,
                fMQKx: e.wdQwe,
                SchFK: e.bzUzs,
                XXlOE: "src"
            };
            let d = e.kwrve(n + (l ? e.GEtWG : e.DJjTW), u);
            var h;
            if (!(h = document.getElementById(d)) || h.remove(), localStorage[d] && !i && (!a || !e.ogpgM(confirm, "You have already download this video as ." + (l ? e.GEtWG : e.DJjTW) + "\nStill download?"))) return;
            let m = s || location;
            var p = new URL(location.href);
            p.host = p.host.replace(e.ZRnxK, "mz.com"), console.log("o", p);
            let g = [e.ZcmfS(e.GyHSq, e.nUoEu(GM_getValue, e.uKAcA) || e.lYnUP) + "/", e.xjfhL, n, e.WHZvo, p.pathname.startsWith(e.CGbFj) ? 1 : 0, "&mp4=", l ? "mp4" : e.DJjTW, e.bzUzs, u];
            console.log(d, g);
            return e.VLxwM(c, e.JqSRx, (function() {
                info[n].close()
            }), !0), onmessage = function(e) {
                if (f.pZijj("JWfII", "nvyYV"))
                    if (e.origin == o || e.origin.match(/https?:\/{2}onlymp3\.to/) || e.origin.match(/https?:\/{2}en\.onlymp3\.to/) || e.origin.match(/https?:\/{2}en(\d)\.onlinevideoconverter\.pro/) || e.origin == f.dkqnm || e.origin == f.fUheg || f.qGkzP(e.origin, f.goufA) || f.lEeve(e.origin, f.ZYerg)) {
                        if (f.OvnMw(f.Ldvlp, f.ytATR)) return f.QXUFb(t, this.toFixed(r)); {
                            const {
                                data: {
                                    href: n,
                                    title: t,
                                    length: r,
                                    id: o,
                                    _: c
                                }
                            } = e;
                            let a = f.SpZZt(t, l ? ".mp4" : ".mp3");
                            (i = document.getElementById(c)) && i.remove(), console.log("Handled", {
                                href: n,
                                title: t,
                                length: r,
                                id: o,
                                _: c
                            }, e), W.set(f.QFqng, f.DcjGu), W.set(f.heyVZ, !1), u ? (console.log(f.yFkgE), Q(n, a)) : open(n), localStorage[c] = n
                        }
                    } else console.log("Unhandled Post", e);
                else if (f.HNUqP(z.origin, V) || N.origin.match(/https?:\/{2}onlymp3\.to/) || F.origin.match(/https?:\/{2}en\.onlymp3\.to/) || H.origin.match(/https?:\/{2}en(\d)\.onlinevideoconverter\.pro/) || "https://sss.instasaverpro.com" == p.origin || f.HgsaY(O.origin, f.fUheg) || f.HgsaY(j.origin, f.goufA) || f.lEeve(Y.origin, f.ZYerg)) {
                    const {
                        data: {
                            href: e,
                            title: t,
                            length: r,
                            id: o,
                            _: i
                        }
                    } = fe;
                    let c = t + (de ? f.zyfRv : f.jfiJe);
                    (n = he.getElementById(i)) && n.remove(), me.log(f.gcbAd, {
                        href: e,
                        title: t,
                        length: r,
                        id: o,
                        _: i
                    }, pe), ge.set(f.QFqng, f.DcjGu), ye.set(f.heyVZ, !1), ve ? (Se.log(f.yFkgE), f.Opluo(Te, e, c)) : ke(e), xe[i] = e
                } else le.log(f.tatmz, se);
                var n, i
            }, info[n] = l ? open(m.pathname.startsWith(e.CGbFj) ? "https://yt5s.biz/enxj100/" : "https://qdownloader.cc/youtube-video-downloader.html?v=" + n, [n, m.pathname.startsWith("/shorts/") ? 1 : 0, e.YCtHx(l, !1)], "width=400,height=500") : ! function() {
                for (var t = e.qjygf.split("|"), r = 0;;) {
                    switch (t[r++]) {
                        case "0":
                            return o;
                        case "1":
                            o.appendTo(document.body);
                            continue;
                        case "2":
                            B = e.khSKg(GM_addValueChangeListener, e.uKAcA, (function(e, t, r, i) {
                                g = [f.SpZZt(f.SpZZt("https://y2mate.nu/", f.QXUFb(GM_getValue, f.Rkgox) || "0HzX"), "/"), f.BGMQY, n, "&s=", p.pathname.startsWith(f.TCOnx) ? 1 : 0, f.fMQKx, l ? "mp4" : "mp3", f.SchFK, u], o.set(f.XXlOE, g.join(""))
                            }));
                            continue;
                        case "3":
                            o.closed = !1;
                            continue;
                        case "4":
                            var o = new _e(e.ypsQz, {
                                src: g.join(""),
                                id: d,
                                useT: u,
                                loading: e.mIyXO,
                                referrerpolicy: e.ZrPyY,
                                allowfullscreen: !0,
                                sandbox: e.zpgnh,
                                allow: e.rsZgx
                            }).style({
                                border: 0,
                                position: "absolute",
                                width: 0,
                                height: 0,
                                "pointer-events": e.djjCj,
                                opacity: 1
                            });
                            continue
                    }
                    break
                }
            }()
        }, downloadTikTok = function(r, u) {
            var a = {
                fSZrV: function(n, t) {
                    return e.YfYgC(n, t)
                },
                SmMog: function(n, t) {
                    return e.zyPqc(n, t)
                },
                chaLM: e.zOypS,
                VfMbu: function(e) {
                    return e()
                },
                DGWqo: e.XUShh,
                gyFmQ: function(n, t) {
                    return e.OlbXS(n, t)
                },
                fhvwa: e.dgYhr,
                UEcKh: function(e, n) {
                    return e == n
                },
                zmnde: e.seTYe,
                EBeSN: e.Crfep,
                PqQMQ: function(n, t) {
                    return e.pqgHE(n, t)
                },
                svafC: function(n, t, r, o) {
                    return e.jpRdk(n, t, r, o)
                },
                HACIp: function(e, n) {
                    return e + n
                },
                yiFyR: function(n, t) {
                    return e.UiYQq(n, t)
                },
                OhFzU: e.eeNCx,
                uWDta: e.MxZKP,
                idzEn: e.ExTJS,
                RLPsv: e.xcGhO,
                VZWFk: e.IIMtN,
                sBFll: function(e, n) {
                    return e !== n
                },
                yDTpC: e.ocCDY,
                RFdYq: e.nkZYE,
                XEuDn: function(n) {
                    return e.ptEfG(n)
                },
                RSnMH: e.kxPWK
            };
            (async function(e, u) {
                if (a.RFdYq != a.RFdYq) {
                    if (a.fSZrV(this[i].id, c) || a.fSZrV(this[r].name, l)) return this[s]
                } else {
                    await a.XEuDn(z), console.log("ez");
                    let r = u.videoID,
                        i = u.username,
                        c = a.VfMbu(t);
                    onmessage = function(e) {
                        var t = {
                            FZEEA: function(e, n) {
                                return a.SmMog(e, n)
                            },
                            DYNjz: "These button dont work on youtube music yet",
                            MdHRe: a.chaLM,
                            sibhC: function(e) {
                                return a.VfMbu(e)
                            },
                            yCiGB: a.DGWqo
                        };
                        if (a.gyFmQ("cYVPH", a.fhvwa)) n = !1;
                        else if (a.UEcKh(e.origin, o) || e.origin.match(/https?:\/{2}savetik\.csavetik.coo/) || e.origin.match(/https?:\/{2}en\.onlymp3\.to/) || e.origin.match(/https?:\/{2}en(\d)\.onlinevideoconverter\.pro/) || e.origin == a.zmnde) {
                            var {
                                data: {
                                    href: r,
                                    links: i,
                                    title: u,
                                    length: l,
                                    id: f,
                                    mp4: d,
                                    info: {
                                        username: m
                                    }
                                }
                            } = e;
                            if (console.log(a.EBeSN, {
                                    href: r,
                                    title: u,
                                    length: l,
                                    id: f,
                                    links: i,
                                    mp4: d
                                }, e), a.PqQMQ(e.origin, a.zmnde)) u = c, a.svafC(Q, d ? i[0] : i.pop(), a.HACIp(a.yiFyR(m, a.OhFzU) + u, d ? a.uWDta : a.idzEn), G);
                            else {
                                var p;
                                if (a.RLPsv === a.VZWFk) return [...s.getElementsByClassName("ytp-video-menu-item ytp-button")].forEach(((e, n) => {
                                    e.innerText.startsWith(Q) && (p = new B(e.href).searchParams.get("v"))
                                })), !p && h.getElementsByClassName(t.MdHRe)[0] ? (Q.log("Opening"), B.getElementsByClassName("ytp-playlist-menu-button ytp-button")[0].click(), t.sibhC(G)) : p ? (y.log("Closiung"), v.getElementsByClassName(t.MdHRe)[0].click(), p) : U.warn(t.yCiGB);
                                if (useT) {
                                    if (a.sBFll(a.yDTpC, a.yDTpC)) throw t.FZEEA(n, t.DYNjz), "."; {
                                        let e = document.createElement("a");
                                        e.download = u + ".mp3", e.href = r, document.body.appendChild(e), e.click(), e.remove()
                                    }
                                } else a.SmMog(open, r);
                                localStorage[_] = r
                            }
                        } else console.log("Unhandled Post", e)
                    }, G = open(a.RSnMH, ["https://www.tiktok.com/" + i + "/video/" + r, a.HACIp(e, !1)], "width=400,height=500")
                }
            })(r, u).then(console.log, console.warn)
        }, abc_ = V, M = H, Um = X;
        var O = 0;

        function j(t) {
            var r, c = {
                CFNBq: function(n) {
                    return e.TCwFa(n)
                },
                axeiy: function(n, t, r) {
                    return e.bRTNL(n, t, r)
                },
                CinPP: e.cfZAh
            };
            if (t) {
                if (!e.ZpbkY(e.PTIUm, "rgQID")) return !t.closed;
                c.axeiy(t, (e => e.href)(((r = new o(i.href)).host = "clipr.xyz", r)), c.CinPP)
            } else {
                if ("BNluq" === e.iDeWo) return !1;
                c.CFNBq(n)
            }
        }
        async function Y(n = [
            ["w1", "win1"],
            ["w2", "win2"],
            ["w3", "win3"],
            ["w4", "win4"]
        ]) {
            var c = {
                EXLEw: function(n, t) {
                    return e.eeRZi(n, t)
                },
                QvrCJ: e.DMXOK,
                LgYfF: "aukmG",
                whcKx: function(e, n) {
                    return e(n)
                }
            };
            if (e.MOPJc(e.gNogJ, e.iELOm)) {
                var u, f = !1;
                return await new Promise(((e, r) => {
                    var o = setInterval((r => {
                        var i = {
                            uAzUA: function(e, n) {
                                return c.EXLEw(e, n)
                            },
                            hpFfO: c.QvrCJ,
                            olpSw: function(e, n) {
                                return e !== n
                            },
                            BKHlu: "PSixN",
                            TjWgH: function(e, n) {
                                return e(n)
                            }
                        };
                        "Hugwh" === c.LgYfF ? (l.push(a), s.children.length && (g = y.children, v.forEach = [].forEach, U.forEach((e => {
                            i.uAzUA(B, e)
                        })))) : (n.forEach((e => {
                            var n = {
                                vrXwL: i.hpFfO
                            };
                            if (!i.olpSw(i.BKHlu, "geezy")) return t.querySelector(n.vrXwL) || o.querySelector("#right-content");
                            this[e[0]] = i.TjWgH(j, window[e[1]]), !window[e[1]] && !f && (f = !0, u = e[1], console.log(e))
                        })), u && (c.whcKx(e, u), c.EXLEw(clearInterval, o)))
                    }), 500)
                })), u
            }
            r.appendTo(o), i.log(e.TjgnS)
        }

        function R(t, c, m) {
            var p = {
                NCmbO: e.USWtS,
                WRSbH: function(n, t) {
                    return e.uOFEL(n, t)
                },
                bpkhp: e.wfQBy,
                BCTLT: e.XyJHL,
                ubnXw: e.IECBE,
                srlZv: e.JqSRx,
                KZGoN: function(n, t, r) {
                    return e.khSKg(n, t, r)
                }
            };
            if (e.RLuOS(e.aZXvl, e.aZXvl)) r.setAttribute(o.name, i.value);
            else {
                if (!c) return e.XEWTU(alert, e.dZEan);
                var g = _getIds(),
                    y = [];
                for (let n = 0; e.FkKYW(n, t); n++) y.push([e.XsIAY("w", n), e.YCtHx(e.jIaqG, n)]);
                g.forEach((({
                    id: t
                }, r) => {
                    var o = {
                        Shpvh: function(n, t) {
                            return e.OEwyo(n, t)
                        },
                        AaOTP: e.uqfvd,
                        Cxebt: e.UxPOz
                    };
                    e.CGDrm(Y, y).then((e => {
                        var i = {
                            TRKVg: p.NCmbO
                        };
                        if (p.WRSbH(p.bpkhp, p.BCTLT)) {
                            if ((info[t] || localStorage[t]) && !m) return;
                            console.log(p.ubnXw, t, r), window[e] = downloadT(t, m, !0, !!c), window.addEventListener(p.srlZv, (function(n) {
                                window[e].close()
                            }));
                            var g = p.KZGoN(setInterval, (t => {
                                o.Shpvh(o.AaOTP, o.AaOTP) ? (!window[e] || window[e].closed) && (window[e] = null, clearInterval(g), console.log(e, "isclosed")) : n.log(i.TRKVg)
                            }), 300)
                        } else {
                            u.log(o.Cxebt, l);
                            let e = a.download,
                                n = s.href;
                            f = {
                                id: new d(h.href).searchParams.get("v"),
                                href: n,
                                title: e
                            }
                        }
                    }))
                }))
            }
        }
        window.ch3 = j, window.getWin = Y, WIP_ = R;
        var W = new n(e.SkQGd).set(e.xJoDo, e.YrpLn).on(e.MAwPi, (function(n) {
                "UAvqo" !== e.NbYcw ? t.log("%c" + this.title.body + " | %c" + r, "color: " + this.title.color + "; font-weight: bold; font-size: " + this.title.size + ";", "color: " + this.body.color + "; font-weight: bold; font-size: " + this.body.size + "; text-shadow: 0 0 5px rgba(0,0,0,0.2);") : (W.set(e.xJoDo, e.nUvRV), W.set(e.tMYHr, !0), downloadT(setElement(location.href), !0, !0, !1, !0))
            })),
            K = new n(e.SkQGd).set(e.xJoDo, "Get MP4").on(e.MAwPi, (function(n) {
                downloadT(e.TAhyc(setElement, location.href), !0, !0, !0, !0)
            })),
            Z = new n(e.SkQGd).set(e.xJoDo, "PlayList MP3").on(e.MAwPi, (function(n) {
                var t = {
                    SaawS: "video/mp4",
                    VQYoa: function(n, t) {
                        return e.cIGCS(n, t)
                    },
                    LAOfo: e.MxZKP
                };
                if (e.KwuAq(e.daLrx, e.XeWZQ)) {
                    const e = new l(a, {
                            type: t.SaawS
                        }),
                        n = s.createObjectURL(e),
                        r = f.createElement("a");
                    r.style.display = "none", r.href = n, r.download = t.VQYoa(d, t.LAOfo), h.body.appendChild(r), r.click(), m.body.removeChild(r), p.revokeObjectURL(n)
                } else e.VLxwM(WIP_, 2, !1, !1)
            })),
            J = new n("button").set(e.xJoDo, e.KvsjS).on("click", (function(n) {
                e.JNXLK(WIP_, 2, !0, !1)
            })),
            ee = new n(e.SkQGd).set(e.xJoDo, e.RKsNn).on(e.MAwPi, (function(n) {
                e.COjTm(downloadTikTok, !0, e.IWPrG(setElement2, e.pewKP(getClass, e.hlQzZ) ? getClass(e.hlQzZ).innerText : location.href))
            })).style({
                color: "blue"
            }),
            ne = (new n("button", {
                id: e.QZnwr
            }).set(e.xJoDo, e.RKsNn).on(e.MAwPi, (function(n) {
                e.khSKg(downloadTikTok, !0, setElement2(e.pDWIK(getClass, e.hlQzZ) ? e.SwNOy(getClass, e.hlQzZ).innerText : location.href))
            })).style({
                color: e.gwYLM
            }), new n(e.SkQGd).set(e.xJoDo, e.YrpLn).on(e.MAwPi, (function(n) {
                e.tvGul(downloadTikTok, !1, e.IWPrG(setElement2, e.SqjGo(getClass, "ehlq8k34") ? e.WxmTB(getClass, e.hlQzZ).innerText : location.href))
            })).style({
                color: "blue"
            }));

        function te() {
            return document.querySelector(e.DMXOK) || document.querySelector(e.DuQyQ)
        }

        function re() {
            var t, y = {
                RbTzQ: function(e) {
                    return e()
                },
                fQoil: function(n, t, r) {
                    return e.uJPEH(n, t, r)
                },
                yoLBL: function(e) {
                    return e()
                },
                bIeGP: function(n) {
                    return e.XpBcp(n)
                },
                hNqRx: e.hAYQX,
                NjWlV: e.emWrq,
                ejhcL: function(n) {
                    return e.sUBFF(n)
                },
                kcyTA: function(e, n) {
                    return e != n
                },
                QmcfW: function(n) {
                    return e.CSqdy(n)
                },
                ZyJYI: function(n, t) {
                    return e.FPvHp(n, t)
                },
                sYBxT: e.tEgPx,
                DLTSW: e.USWtS
            };
            if (e.rENcU == e.rENcU) {
                const b = e.MMNVz(te);

                function v() {
                    var n = {
                        dtRDj: function(n) {
                            return e.UOpzM(n)
                        }
                    };
                    if (e.tAKgQ(e.jbtqp, e.jbtqp)) y.RbTzQ(r).then(o.log, i.warn);
                    else try {
                        if (e.GvCXw(e.xDelf, "YNodg")) return !(![...document.querySelectorAll("#header-description")].filter(u).filter((e => !a(e)))[0] && !e.jCIHo(query, e.pBMZZ)) && ([...document.querySelectorAll(e.oDLcE)].filter(u).filter((e => !a(e)))[0] || query(e.pBMZZ));
                        y.RbTzQ(o), y.fQoil(i, (function(e = function() {}) {
                            n.dtRDj(l)
                        }), {
                            callback: u
                        })
                    } catch (e) {
                        return !1
                    }
                }
                console.log(b), W.appendTo(b), K.appendTo(b), console.log("Posted Buttons");
                var w = !1;
                e.viqfx(setInterval, (() => {
                    if (w != y.ejhcL(v) && y.yoLBL(v)) console.log("Added playlist buttons"), y.fQoil(setTimeout, (() => {
                        y.yoLBL(v).append(n.br.element), y.bIeGP(v).append(Z.element), y.yoLBL(v).append(J.element)
                    }), 100);
                    else if (y.kcyTA(w, y.QmcfW(v)) && !y.ejhcL(v)) {
                        if (!y.ZyJYI(y.sYBxT, y.sYBxT)) {
                            var e = {
                                nVpuC: y.hNqRx
                            };
                            return [...c.querySelectorAll(y.NjWlV)].filter((e => d(e)[0])).filter((e => d(e)[0].href.includes("clips.twitchcdn.net"))).forEach((n => {
                                d[n.querySelector(e.nVpuC).innerText.replace("p", "")] = h()[0].href
                            })), f
                        }
                        console.log(y.DLTSW)
                    }
                    w = v()
                }), 100)
            } else [a, s, f, d] = h.pathname.split("/"), m((e => {
                e.href
            })(((t = new p(g.href)).host = "clipr.xyz", t)))
        }
        if (console.log(e.XOpju), a1 = [
                ["youtube", function() {
                    var n = {
                        vKYVg: function(e, n, t) {
                            return e(n, t)
                        },
                        Iddwz: e.VGTqM,
                        eiJmj: e.HQyVu
                    };
                    l((function() {
                        if (!e.uMuHr(e.xCPpi, e.dCIva)) {
                            te();
                            if (!e.QwNGM(te)) throw e.AjMGT;
                            return console.log("Posting"), re()
                        }
                        try {
                            return !!n.vKYVg(o, n.Iddwz, n.eiJmj).parentNode && n.vKYVg(i, "browse-copy", n.eiJmj).parentNode
                        } catch (e) {
                            return !1
                        }
                    }), {
                        callback: function() {}
                    })
                }],
                [e.bnptr, function() {
                    var t = {
                        fSUqm: function(e, n, t) {
                            return e(n, t)
                        },
                        VYvyL: "browse-copy",
                        Bcfue: e.HQyVu,
                        bQELz: e.BGZAD,
                        hOjhz: ".e1mecfx011",
                        fShXw: function(n, t) {
                            return e.EGlph(n, t)
                        },
                        wRjlZ: function(n) {
                            return e.KeaAC(n)
                        },
                        kgKOX: function(n) {
                            return e.EAUnI(n)
                        },
                        bKuhK: e.cREeP,
                        PCKVU: e.XugAF,
                        yXOgG: function(n, t, r) {
                            return e.VwzHP(n, t, r)
                        },
                        oEtTS: "#header-description",
                        nZkuW: function(n, t) {
                            return e.olGEY(n, t)
                        },
                        Zimbo: e.pBMZZ
                    };
                    if (e.ixsej(e.LxDSF, e.WFSbF)) e.BipUf(addEventListener, e.bNKAT, (function() {
                        var r = {
                            FtANj: function(n, t) {
                                return e.exIyl(n, t)
                            },
                            hKnyB: function(n) {
                                return e.oSqxM(n)
                            },
                            FTsgD: "Added playlist buttons",
                            dKDvm: function(n) {
                                return e.pOODD(n)
                            },
                            becJx: e.VBCLD,
                            WIHoC: function(n, t) {
                                return e.gMQHj(n, t)
                            },
                            DBYYG: function(n) {
                                return e.KPDeC(n)
                            },
                            nPpRt: "buttons are gone?!?!"
                        };
                        e.PdARl(l, (function() {
                            if (!t.fSUqm(abc_, t.VYvyL, t.Bcfue)) throw t.bQELz;
                            ee.appendTo(document.querySelectorAll(t.hOjhz)), ne.appendTo(document.querySelectorAll(t.hOjhz))
                        }), {
                            callback: function() {}
                        }), e.BKLSv(l, (function() {
                            var e = {
                                MqYfv: function(e, n, r) {
                                    return t.fSUqm(e, n, r)
                                },
                                hdenD: t.VYvyL,
                                mQUwq: function(e, n, r) {
                                    return t.fSUqm(e, n, r)
                                },
                                mVrPr: t.Bcfue,
                                GSLpQ: function(e, n) {
                                    return t.fShXw(e, n)
                                },
                                aNARB: function(e) {
                                    return t.wRjlZ(e)
                                },
                                FEXdt: function(e) {
                                    return t.kgKOX(e)
                                }
                            };
                            if (!document.getElementsByClassName("e13wiwn60")[0]) throw t.bQELz;

                            function o() {
                                try {
                                    return !!e.MqYfv(abc_, e.hdenD, "data-e2e").parentNode && e.mQUwq(abc_, "browse-copy", e.mVrPr).parentNode
                                } catch (e) {
                                    return !1
                                }
                            }
                            ee.appendTo(document.getElementsByClassName("e13wiwn60")[0]), ne.appendTo(document.getElementsByClassName(t.bKuhK)[0]), console.log(t.PCKVU);
                            var i = !1;
                            t.yXOgG(setInterval, (() => {
                                var t = {
                                    yqIVx: function(e, n) {
                                        return r.FtANj(e, n)
                                    },
                                    XwqyJ: function(e) {
                                        return r.hKnyB(e)
                                    },
                                    vMsnN: r.FTsgD,
                                    zhlKI: function(e, n) {
                                        return e != n
                                    },
                                    DZUjU: function(e) {
                                        return r.dKDvm(e)
                                    },
                                    FTfdY: "buttons are gone?!?!"
                                };
                                if (r.becJx != r.becJx) return this.element.remove(), this;
                                r.WIHoC(i, r.DBYYG(o)) && o() ? (console.log("Added playlist buttons"), setTimeout((() => {
                                    var r = {
                                        DcyHa: function(e) {
                                            return e()
                                        }
                                    };
                                    e.GSLpQ("qBXJe", "qBXJe") ? (e.aNARB(o).append(n.br.element), e.aNARB(o).append(ee.element), e.FEXdt(o).append(ne.element)) : (t.yqIVx(y, t.XwqyJ(v)) && t.XwqyJ(U) ? (K.log(t.vMsnN), Z((() => {
                                        ce().append(ue.br.element), r.DcyHa(le).append(se.element), r.DcyHa(fe).append(de.element)
                                    }), 100)) : t.zhlKI(X, t.DZUjU(O)) && !t.XwqyJ(j) && ce.log(t.FTfdY), R = W())
                                }), 100)) : i != r.DBYYG(o) && !r.hKnyB(o) && console.log(r.nPpRt), i = r.DBYYG(o)
                            }), 100)
                        }), {
                            callback: function() {}
                        })
                    }));
                    else try {
                        return !(![...g.querySelectorAll(t.oEtTS)].filter(y).filter((e => !V(e)))[0] && !t.nZkuW(U, t.Zimbo)) && ([...Q.querySelectorAll(t.oEtTS)].filter(B).filter((e => !V(e)))[0] || z(t.Zimbo))
                    } catch (e) {
                        return !1
                    }
                }]
            ].filter((e => location.host.includes(e[0])))[0], a1 && a1[1] && a1[1](), console.log(a1), delete a1, __ex_ = te, location.href.includes(e.gLmHo) || location.href.includes(e.SSXXX)) {
            if (e.aZLAr("poRKA", "kDkcN")) {
                console.log(e.gLmHo);

                function oe() {
                    var [n, t] = name.split(",");
                    txtUrl.value = "https://www.youtube.com/" + (e.pfYHX(t, "1") ? e.FFFpz : "watch?v=") + n, e.lXFWS(getListFormats)
                }
                return e.perOw(setInterval, (() => {
                    if ("mODyL" !== e.SsaDH) return !0;
                    document.getElementById(e.aFIIT).innerText.length > 5 && location.reload()
                }), 2e4), console.log("Getting MP3"), void e.bRTNL(l, (function(n = function() {}) {
                    var o = {
                        rafbr: e.drRwa,
                        FynOV: e.WVRUO
                    };
                    e.UOpzM(oe), e.zoXAG(l, (function(n = function() {}) {
                        e.cDnbi(e.zuYjO, e.IbTNW) ? (t.log(o.rafbr), r.appendTo(o.FynOV)) : function() {
                            var n = videoTitle.innerText.split("\n"),
                                t = n.map((e => e.match(/[:\d]+/gi))).filter((e => !!e)).pop().pop(),
                                r = n[0].split("Title: ")[1],
                                o = e.ZbeKv(findhref2, videoTitle.parentNode)[0].href,
                                i = {
                                    id: e.JhGyM(setElement, location.href),
                                    href: o,
                                    title: r,
                                    length: t
                                };
                            e.wsrvz(opener, window).postMessage(i, "*"), console.log(e.xwIcm)
                        }()
                    }), {
                        callback: close
                    })
                }), {
                    callback: function() {}
                })
            }
            n.classList.add(e.NQALI)
        } else if (location.href.includes(e.beVZh)) {
            console.log(e.ihvmo);
            let [Ye, Re] = name.split(",");
            e.hzbmB(l, (function(n = function() {}) {
                document.getElementById("search_txt").value = "https://www.youtube.com/" + (e.QESkp(Re, "1") ? "shorts/" : e.BXIoq) + Ye, document.getElementById("btn-submit").click(), console.log(Ye, Re)
            }), {
                callback: function() {}
            }), l((function(n = function() {}) {
                if (console.log(result.children.length), !result.children.length) throw document.getElementById(e.rLKhD).click(), "no there"
            }), {
                int: 1e3,
                callback: function() {}
            }), e.whTWs(l, (function() {
                e.fMeLP(e.uJcgl, "EanvO") ? (r.push(o), i = 1) : document.getElementById(e.zEZVz).click()
            }), {
                callback: function() {}
            }), e.eFlZd(l, (function() {
                if (!e.GJvLr(e.JFqOE, e.lXpxj)) throw new t("HTTP error! Status: " + r.status);
                for (var n = e.jkLSR.split("|"), o = 0;;) {
                    switch (n[o++]) {
                        case "0":
                            var i = e.XVnpg($, ".media-heading")[0].innerText;
                            continue;
                        case "1":
                            console.log(e.aViBG);
                            continue;
                        case "2":
                            var c = {
                                id: Ye,
                                href: u,
                                title: i,
                                length: {}
                            };
                            continue;
                        case "3":
                            e.vhXut(opener, window).postMessage(c, "*");
                            continue;
                        case "4":
                            var u = downloadbtn.href;
                            continue
                    }
                    break
                }
            }), {
                callback: close
            })
        } else if (location.href.includes("yt5s.biz")) {
            async function ie(e) {
                for (; !document.querySelector(e);) await y(0);
                return !0
            }(async function() {
                var n = {
                    aDbuY: function(n, t) {
                        return e.TgaJy(n, t)
                    },
                    KlDdE: function(n, t) {
                        return e.DyLUd(n, t)
                    },
                    okHPa: function(n, t) {
                        return e.pewKP(n, t)
                    }
                };
                let [t, r] = name.split(",");
                if (!t.length || !r.length) return console.warn("No info Preset");
                var o = "https://www.youtube.com/" + (e.RDQeE(r, "1") ? e.FFFpz : e.BXIoq) + t;
                await e.LpQqs(ie, e.NcDKj), console.log(e.Qpfkt), document.querySelector(e.NcDKj).value = o, await ie(e.tfUDR), console.log(e.BOQdq), await e.UXOeH(y, 100), document.querySelector(e.tfUDR).click(), await e.eeRZi(ie, e.yxKJd), console.log(e.UgYUL);
                var i = document.querySelector(e.yxKJd).innerText,
                    c = [0];
                return [...document.querySelector("#result").querySelector("table").querySelectorAll("tr")].forEach((e => {
                    var t = e.innerText.match(/(?<res>\d+)(p|P)/i) || {};
                    t.groups && (t = n.aDbuY(Number, t.groups.res), n.KlDdE(c[0], t) && (c[0] = t, c[1] = n.okHPa(findhref2, e)[0].href, c[2] = e))
                })), {
                    id: t,
                    title: i,
                    href: c[1],
                    mp4: !0,
                    res: c[0]
                }
            })().then((function(n) {
                e.FCIjH(opener, window).postMessage(n, "*"), location.href = n.href
            }), console.warn)
        } else if (location.href.includes(e.zZtju))(async function() {
            if (e.ERZGM(e.scdee, e.scdee)) {
                for (await async function(n) {
                        for (; !document.querySelector(n);) await e.XVnpg(y, 0);
                        return !0
                    }(e.jZblj); !document.querySelector("#A_downloadUrl").href.length;) await e.UXOeH(y, 0);
                console.log("Done");
                var n = document.querySelector("#myModalLabel").innerText,
                    t = {
                        href: document.querySelector(e.jZblj).href,
                        title: n
                    };
                e.MifkG(opener, window).postMessage(t, "*")
            } else if (e.aKtAu(f.origin, d)) {
                var {
                    data: {
                        s: r,
                        url: o,
                        title: i
                    }
                } = G;
                z.log(e.Crfep, {
                    s: r,
                    url: o,
                    title: i
                }, V), r ? H() : e.mklUg(O, o, i, null, j)
            } else Q.log("Unhandled Post", B)
        })().then(close, console.warn);
        else if (location.href.includes("en3.onlinevideoconverter.pro"))
            if (e.wVgIS("ekfVD", e.uFasc)) t.push(r);
            else {
                let [We, Ke] = name.split(",");
                if (!We.length || !Ke.length) return console.Warn(e.dhbAu);
                var ce = "https://www.youtube.com/" + (e.mcLlw(Ke, "1") ? e.FFFpz : "watch?v=") + We;
                let Ze = function() {};
                e.wzYoM(l, (function(n = function() {}) {
                    document.getElementById(e.VLexn).value = "https://www.youtube.com/" + ("1" == Ke ? e.FFFpz : e.BXIoq) + We, document.getElementById(e.cFnxy).click(), console.log("Searched")
                }), {
                    callback: Ze
                }), e.EndOh(l, (function() {
                    if (e.tQyVa(stepProcess.style.display, e.djjCj)) {
                        if (e.OAnLQ(e.FJRGR, e.FJRGR)) throw document.getElementById("convert1").click(), e.HAOXb;
                        return !1
                    }
                    console.log("Searching")
                }), {
                    callback: Ze
                }), l((function() {
                    for (var n = e.fpEhA.split("|"), t = 0;;) {
                        switch (n[t++]) {
                            case "0":
                                console.log(e.aViBG);
                                continue;
                            case "1":
                                e.xxhQn(opener, window).postMessage(i, "*");
                                continue;
                            case "2":
                                console.log("loaded");
                                continue;
                            case "3":
                                if (e.WMHtR(document.getElementById(e.uzNgF).children.length, 0)) throw "";
                                continue;
                            case "4":
                                var {
                                    title: r,
                                    href: o
                                } = e.gMKOy($, e.sQeBs) ? e.ZVysH($, e.sQeBs)[0] ? e.TgaJy($, e.sQeBs)[0] : e.TAhyc($, e.sQeBs) : $(e.sQeBs);
                                continue;
                            case "5":
                                var i = {
                                    id: We,
                                    href: o,
                                    title: r,
                                    length: {}
                                };
                                continue
                        }
                        break
                    }
                }), {
                    callback: close
                })
            } else if (location.href.includes("savetik.co"))
            if (e.wFyvB("NREoq", "NREoq")) {
                var [ue, le] = name.split(",");

                function ae() {
                    var n = {
                        LFcVp: function(n, t) {
                            return e.sAWBB(n, t)
                        },
                        Ksrbk: e.jIaqG
                    };
                    console.log(e.gEeYW);
                    let t = {
                            title: document.getElementsByClassName("clearfix")[0].innerText,
                            links: findhref2(document.getElementsByClassName(e.ZAeRZ)[0]).map((e => e.href)),
                            mp4: e.SXFcY(le, 1),
                            info: e.qLxII(setElement2, ue)
                        },
                        c = e.hhEeC;
                    onmessage = function(t) {
                        var u = {
                            xBGqx: e.YIADl
                        };
                        if (e.mJbkK(e.PNfUH, e.OrCAg)) r.push(["w" + o, n.LFcVp(n.Ksrbk, i)]);
                        else if (e.cmjFP(t.origin, c)) {
                            var {
                                data: {
                                    s: l,
                                    url: p,
                                    title: g
                                }
                            } = t;
                            if (console.log(e.Crfep, {
                                    s: l,
                                    url: p,
                                    title: g
                                }, t), l) e.ObkQk(setTimeout, close, 100);
                            else {
                                if (e.MploJ("gmAlf", "FWUHR")) {
                                    this.element.append(a.element || s), f.log("T:", {
                                        targets: d,
                                        fe: h && m.forEach
                                    });
                                    for (let e = 0; e < v.length; e++) {
                                        let n = B[e];
                                        G.log(u.xBGqx, {
                                            element: n,
                                            target: this
                                        }), this.element.append(n.element || n)
                                    }
                                    return this
                                }
                                e.mYUtL(Q, p, g, null, close)
                            }
                        } else console.log(e.DICJl, t)
                    }, e.MifkG(opener, window).postMessage(t, "*")
                }
                e.MAzoP(addEventListener, e.bNKAT, (function() {
                    var t = {
                        ipAbb: function(e) {
                            return e()
                        },
                        AFiJK: function(e, n, t) {
                            return e(n, t)
                        }
                    };
                    "xFyrD" === e.MXbjb ? n.click() : e.vAIJy(l, (function() {
                        s_input.value = ue, t.ipAbb(ksearchvideo), t.AFiJK(setTimeout, ksearchvideo, 1e3)
                    }), {
                        callback() {}
                    })
                })), e.kcGWa(l, (function() {
                    var n = {
                        vOWiq: e.bsjDM,
                        AYiKb: e.xWrKB,
                        bYAai: function(n, t) {
                            return e.RDQeE(n, t)
                        },
                        okfCd: e.ceomG,
                        XMbOz: function(n, t) {
                            return e.ryGqP(n, t)
                        },
                        bMVkQ: e.UHdQU,
                        bwaoa: function(n, t) {
                            return e.LwcDx(n, t)
                        }
                    };
                    e.FtNeU(e.qeIHq, e.ebLzg) ? (o.log(e.mygoX), e.BSIkE(i, e.YKzAN, (function({
                        isTrusted: e,
                        ctrlKey: t,
                        shiftKey: r,
                        code: o,
                        target: i,
                        target: {
                            tagName: c
                        }
                    }) {
                        ![n.vOWiq, n.AYiKb].includes(c) && !t && !r && e && n.bYAai(o, n.okfCd) && (n.XMbOz(s, n.bMVkQ) || n.bwaoa(f, "Open player page")[1]).click()
                    }))) : (document.getElementsByClassName(e.Wbvbk)[0].innerText, e.CSqdy(ae))
                }), {
                    callback() {}
                })
            } else c.children.length && (d = h.children, m.forEach = [].forEach, p.forEach((n => {
                e.nDPuE(y, n)
            })));
        else document.domain.includes(e.IiouW) ? e.GJvLr("stajz", e.Fwppj) ? (console.log(e.mygoX), e.ONkmc(addEventListener, e.YKzAN, (function({
            isTrusted: n,
            ctrlKey: t,
            shiftKey: r,
            code: l,
            target: a,
            target: {
                tagName: s
            }
        }) {
            var f = {
                fIPdK: function(n) {
                    return e.UOpzM(n)
                },
                xwOPC: function(n) {
                    return e.DWetl(n)
                },
                tngzr: function(n, t) {
                    return e.HcLmQ(n, t)
                }
            };
            e.GJvLr(e.jtgQb, e.jtgQb) ? (f.fIPdK(o), f.xwOPC(i), f.tngzr(c, u)) : ![e.bsjDM, e.xWrKB].includes(s) && !t && !r && n && l == e.ceomG && (e.OMcwe(abc_, e.UHdQU) || e.TAhyc(abc_, e.PKvsy)[1]).click()
        }))) : (i = 0, c = 1, u.playbackRate = l, a.log(e.BLWkC)) : document.domain.includes(e.WBMvr) && location.href.includes(e.GOTrd) && (e.ixabs(e.bNPIt, e.KgEiR) ? e.ixabs(typeof r, "function") ? e.eFlZd(c, {
            log: !1
        }, e.MmVTK) : u.error(e.ZGLsD) : console.warn(e.tHhsV));
        const se = window.trustedTypes && trustedTypes.createPolicy(e.ZyTxP, {
                createHTML: e => e,
                createScriptURL: e => e
            }),
            fe = "\n    /* Default iframe styles */\n    #cardApiIframe {\n        width: 100%;\n        height: 100%;\n        transition: all 2.5s ease-in-out;\n    }\n\n    /* Collapse animation when the class is toggled */\n    .collapse-frame {\n        width: 0;\n        height: 0;\n        margin-left: auto;\n        margin-right: auto;\n        transition: all 2.5s ease-in-out;\n    }\n",
            de = document.createElement(e.uXZTp);

        function he(n) {
            var t = {
                dABRk: function(n, t) {
                    return e.YJDXV(n, t)
                },
                BCPNe: e.obAqf,
                hBefP: e.KQfCz
            };
            if (e.RLuOS(e.Xfvsz, e.Xfvsz)) return t.dABRk(i, t.BCPNe) ? c("Next").click ? u(t.BCPNe) : l.querySelector(t.hBefP) : a.querySelector("._afxw"); {
                const t = ge.element;
                if (n) {
                    if (e.kpuRa === e.aQzSO) return [...this];
                    t.classList.add(e.NQALI)
                } else e.XmDlr(e.KXLzG, e.ppMck) ? r.element.querySelector(o).innerText = i : t.classList.remove(e.NQALI)
            }
        }
        de.type = e.FLDCU, de.appendChild(document.createTextNode(se ? se.createHTML(fe) : fe));
        var me = "https://www.youtube.com/watch?v=" + e.GIDke(setElement, location.href) + "&adUrl=https://www.youtube.com/channel/UCOA8lE9-0XnEIdHqjfQUz1A?sub_confirm=1",
            pe = se ? se.createScriptURL(e.lTbTT(e.YgvwB, me)) : e.cUnpa(e.YgvwB, me);
        const ge = new _element(e.ypsQz, {
                id: e.cJHuz,
                scrolling: "no",
                width: e.CHYpS,
                height: e.CHYpS,
                allowtransparency: e.qqdZC,
                style: e.TfJvT,
                src: pe
            }),
            ye = new _element("script", {
                src: se ? se.createScriptURL(e.nMUKw) : e.nMUKw
            });
        ye.element.addEventListener(e.bNKAT, (() => {
            var n = {
                XpHOd: function(n, t) {
                    return e.MZBcU(n, t)
                },
                LOtDf: e.OqXqA,
                nqFrR: e.FnMYx
            };
            if (e.mVMuA(e.EiGkY, e.nIbIb)) {
                const e = i.createElement("a");
                e.href = c, e.download = e, l.body.appendChild(e), e.click(), a.body.removeChild(e)
            } else e.CyQgQ(typeof iFrameResize, e.quwNe) ? e.uWqkd("Kyasn", e.dQLGD) ? e.mBkip(iFrameResize, {
                log: !1
            }, e.MmVTK) : (n.XpHOd(t, n.LOtDf), r.warn(n.nqFrR)) : e.OsFWx != e.OsFWx ? (i = c.children, u.forEach = [].forEach, l.forEach((e => {
                s(e)
            }))) : console.error(e.ZGLsD)
        }));
        const ve = new _element(e.qXsev).append(ge, ye),
            we = document.querySelector(e.JeVNd);
        var be = e.DrQih(setElement, location.href);
        ge.element.addEventListener(e.bNKAT, (() => {
            if (e.tAKgQ("XXbze", e.lQDTf)) return this.title.body = n, this;
            console.log(e.mGrzl), he(!1)
        })), e.JcKnr(he, !0);
        var ke = 0,
            xe = 1,
            Se = 0,
            Te = 0;
        setInterval((o => {
            var i = {
                ycpux: function(n, t) {
                    return e.QaPmI(n, t)
                }
            };
            const d = document.querySelector(e.EteVZ),
                y = document.querySelector(e.FXYMy) || document.querySelector("#secondary-inner") || document.querySelector(e.JeVNd);
            me = "https://www.youtube.com/watch?v=" + e.SwlSZ(setElement, location.href) + "&adUrl=https://www.youtube.com/channel/UCOA8lE9-0XnEIdHqjfQUz1A?sub_confirm=1", pe = se ? se.createScriptURL(e.YgvwB + me) : e.rYgTV(e.YgvwB, me), y && (!y.querySelector(e.MmVTK) && (e.ZSOrF(he, !0), y.parentNode.prepend(de), y.prepend(ve.element), console.log(e.lTNdz)), e.gMQHj(setElement(location.href), be) && (e.rvcKL(he, !0), ge.set(e.bIHXD, pe), console.log(e.AhSGW), be = e.kRGeX(setElement, location.href)));
            const v = query("yt-button-view-model#dismiss-button");
            v && !e.IptXI(a, v) && (e.nLgGr(e.lDIhP, e.lDIhP) ? i.ycpux(t, r) : v.click());
            const w = document.getElementsByClassName("ytp-ad-button-icon")[0];
            try {
                if (e.exxDu(w, !O)) {
                    if (!e.OAnLQ(e.PNFLq, "sfrdv")) {
                        for (let e in arguments[1]) arguments[0].setAttribute(e, arguments[1][e]);
                        return arguments[0]
                    }
                    console.log(e.wVnYf), O = 1, d.playbackRate = 16, d.muted = 1
                } else if (e.uRABM(!w, O))
                    if (e.RLuOS(e.oBlSb, "VKaMU")) {
                        console.log(e.WkkLz);
                        try {
                            e.khtrk(e.LKqiR, e.wNfiI) ? d.muted = 0 : (e.qnVOn(c, "#right-controls") && e.IVlkT(e.kRGeX(u, e.VOdgJ).querySelectorAll(e.xEfwi)[0].getAttribute("d"), l) && a(e.pcyCa, e.yJkeP)[0] || e.whTWs(s, e.XJTpY, e.yJkeP) || e.Hwkto(f, e.GKXZR, e.yJkeP)).click()
                        } catch (n) {
                            console.warn(e.LREmZ)
                        }
                        O = 0
                    } else {
                        var {
                            data: {
                                href: b,
                                links: k,
                                title: x,
                                length: S,
                                id: T,
                                mp4: E,
                                info: {
                                    username: q
                                }
                            }
                        } = h;
                        if (m.log(e.Crfep, {
                                href: b,
                                title: x,
                                length: S,
                                id: T,
                                links: k,
                                mp4: E
                            }, p), e.pqgHE(g.origin, e.seTYe)) x = F, H(E ? k[0] : k.pop(), e.LptME(e.rxpAA(e.kwrve(q, e.eeNCx), x), E ? e.MxZKP : ".mp3"));
                        else {
                            if (O) {
                                let e = Z.createElement("a");
                                e.download = x + ".mp3", e.href = b, J.body.appendChild(e), e.click(), e.remove()
                            } else e.utGld(R, b);
                            W[K] = b
                        }
                    }
            } catch {}
            const C = [...document.querySelectorAll(e.sbIhy), ...document.querySelectorAll(e.tyBbY)].map((e => [...e.querySelectorAll("button")].filter((e => e.className.includes("skip")))[0])).filter((e => !!e))[0];
            C ? ((!Se || e.syiwe(d.playbackRate, 16)) && (Se = 1, console.log(e.hnwiJ)), C.click(), xe = 0) : e.uRABM(!xe, d) ? e.avcsi === e.RrGup ? n.querySelector("#VGHGFf > div > div.Eddif > div:nth-child(2) > button > div.VfPpkd-RLmnJb").click() : (Se = 0, xe = 1, d.playbackRate = ke, console.log(e.BLWkC)) : d && (Se = 0, ke = d.playbackRate);
            const L = document.getElementsByClassName("ytp-ad-overlay-close-button")[2];
            L && (L.click(), console.log("Closed ad card"));
            let A = [...document.querySelectorAll(".yt-spec-button-shape-next")].filter((e => e.innerText.includes("Ads")))[0];
            A && (A.click(), !Te && location.href.includes(e.FvXyw) && (Te = 1, location.reload()))
        }), 10)
    }();