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
    for (var t = 245, r = 248, o = "Zna4", i = 251, c = 249, u = "EMRH", l = 247, a = j, s = j, f = b, d = b, h = b, m = b, p = S();;) try {
        if (304847 === parseInt(f(t, "#goE")) / 1 + -parseInt(d(244, "xCn*")) / 2 + -parseInt(a(246)) / 3 * (parseInt(f(r, "YG)m")) / 4) + parseInt(a(241)) / 5 + -parseInt(m(240, o)) / 6 * (parseInt(h(i, "y8cb")) / 7) + parseInt(h(c, u)) / 8 + -parseInt(s(237)) / 9 * (-parseInt(a(l)) / 10)) break;
        p.push(p.shift())
    } catch (e) {
        p.push(p.shift())
    }
})(),
function() {
    var e = {
        TCpRT: "kLKVU",
        AOQuO: "GMhUQ",
        Bgdur: function(e, n) {
            return e || n
        },
        Bvcgz: "---",
        KvJgj: "darkgrey",
        tCIxN: "#008f68",
        nMzmo: "1rem",
        QpStB: function(e, n) {
            return e !== n
        },
        dBfOA: function(e, n) {
            return e !== n
        }
    };
    Object.assign(this || arguments[0], {
        CustomLog: class {
            constructor(n) {
                e.TCpRT !== e.AOQuO ? (this.title = {
                    body: e.Bgdur(n, e.Bvcgz),
                    color: e.KvJgj,
                    size: "1rem"
                }, this.body = {
                    color: e.tCIxN,
                    size: e.nMzmo
                }) : n.log("%c" + this.title.body + " | %c" + Q, "color: " + this.title.color + "; font-weight: bold; font-size: " + this.title.size + ";", "color: " + this.body.color + "; font-weight: bold; font-size: " + this.body.size + "; text-shadow: 0 0 5px rgba(0,0,0,0.2);")
            }
            setTitleBody(e) {
                return this.title.body = e, this
            }
            setTitleStyle({
                color: n,
                size: t
            }) {
                return e.QpStB(n, void 0) && (this.title.color = n), e.QpStB(t, void 0) && (this.title.size = t), this
            }
            setBodyStyle({
                color: n,
                size: t
            }) {
                return e.dBfOA(n, void 0) && (this.body.color = n), e.dBfOA(t, void 0) && (this.body.size = t), this
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
console.log("ok");
var adev, set_, CurrentPlayingSymbol = "▶";

function getV(e, n) {
    return function(e, n) {
        return e(n)
    }(GM_getValue, e) || (GM_setValue(e, n), n)
}

function setV(e, n) {
    ! function(e, n, t) {
        e(n, t)
    }(GM_setValue, e, n)
}
async function getFinalUrlFromServer(e) {
    var n = {
        DFhoi: function(e, n) {
            return e === n
        },
        zMCBO: "input",
        FqjYY: "focus",
        keGQB: "change",
        lNPzt: "blur",
        CRyIZ: "._acaz",
        gURgT: function(e, n) {
            return e !== n
        },
        WMewq: "BAIRt",
        rxDYx: "iAlLB",
        MXhND: function(e, n, t) {
            return e(n, t)
        },
        FPCQZ: "http://localhost:3000/get-final-url",
        lmfto: function(e, n) {
            return e !== n
        },
        EEHQO: "TbORC",
        arWUa: "TMcNA",
        JjbIM: "Failed to fetch final URL",
        OEgtf: "qhhld",
        slgQH: "Error:"
    };
    try {
        if (n.gURgT(n.WMewq, n.rxDYx)) {
            const t = await n.MXhND(fetch, n.FPCQZ, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    url: e
                })
            });
            if (!t.ok) {
                if (n.lmfto(n.EEHQO, n.arWUa)) throw new Error(n.JjbIM);
                t[r].close()
            }
            const r = await t.json();
            return r.finalUrl
        } {
            var t = {
                LrLzU: function(e, t) {
                    return n.DFhoi(e, t)
                },
                LwWkd: n.zMCBO
            };
            const e = [n.FqjYY, n.zMCBO, n.keGQB, n.lNPzt];
            e.forEach((n => {
                let r = new e(n, {
                    bubbles: !0,
                    isTrusted: !0
                });
                B["on" + n] && A["on" + n](r), t.LrLzU(n, t.LwWkd) && (y.value = Z), H.dispatchEvent(r)
            }))
        }
    } catch (t) {
        return "qhhld" !== n.OEgtf ? n.querySelectorAll(n.CRyIZ) : (console.error(n.slgQH, t), null)
    }
}

function b(e, n) {
    var t = S();
    return b = function(n, r) {
        var o = t[n -= 237];
        if (void 0 === b.BvLpwc) {
            b.TUMIBG = function(e, n) {
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
            }, e = arguments, b.BvLpwc = !0
        }
        var i = n + t[0],
            c = e[i];
        return c ? o = c : (void 0 === b.pEIMgo && (b.pEIMgo = !0), o = b.TUMIBG(o, r), e[i] = o), o
    }, b(e, n)
}

function getCurrentVideoID() {
    var n, t = {
        ukOhn: function(e, n) {
            return e(n)
        },
        ACDKM: "isclosed",
        lBbCy: function(e, n) {
            return e === n
        },
        ohWJn: "hSbcm",
        jxfRG: "Opening",
        tNtrp: function(e) {
            return e()
        }
    };
    return [...document.getElementsByClassName("ytp-video-menu-item ytp-button")].forEach(((e, t) => {
        e.innerText.startsWith(CurrentPlayingSymbol) && (n = new URL(e.href).searchParams.get("v"))
    })), n || !document.getElementsByClassName("ytp-playlist-menu-button ytp-button")[0] ? n ? (console.log("Closiung"), document.getElementsByClassName("ytp-playlist-menu-button ytp-button")[0].click(), n) : console.warn("Not Found!") : t.lBbCy(t.ohWJn, "hSbcm") ? (console.log(t.jxfRG), document.getElementsByClassName("ytp-playlist-menu-button ytp-button")[0].click(), t.tNtrp(getCurrentVideoID)) : (E[F] = null, t.ukOhn(T, D), void G.log(e, t.ACDKM))
}

function j(e, n) {
    var t = S();
    return j = function(n, r) {
        var o = t[n -= 237];
        if (void 0 === j.OfLnOh) {
            j.zcFVyA = function(e) {
                for (var n, t, r = "", o = "", i = 0, c = 0; t = e.charAt(c++); ~t && (n = i % 4 ? 64 * n + t : t, i++ % 4) ? r += String.fromCharCode(255 & n >> (-2 * i & 6)) : 0) t = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(t);
                for (var u = 0, l = r.length; u < l; u++) o += "%" + ("00" + r.charCodeAt(u).toString(16)).slice(-2);
                return decodeURIComponent(o)
            }, e = arguments, j.OfLnOh = !0
        }
        var i = n + t[0],
            c = e[i];
        return c ? o = c : (o = j.zcFVyA(o), e[i] = o), o
    }, j(e, n)
}

function sleep(e) {
    return new Promise((n => setTimeout(n, e)))
}
_getV = getV, _setV = setV, Number.prototype.decimal = function(e) {
    return Number(this.toFixed(e))
}, getSoundCloudUrl = () => {
    var e = {
        Cewsq: function(e, n) {
            return e(n)
        },
        qnvfx: "#app > div.playControls.g-z-index-control-bar.m-visible > section > div > div.playControls__elements > div.playControls__soundBadge.sc-ml-3x > div"
    };
    try {
        return e.Cewsq(findhref2, document.querySelector(e.qnvfx))[0].href
    } catch {
        return
    }
}, async function() {
    var e = {
        VGiuT: "Closed ad card",
        uirHa: function(e, n) {
            return e !== n
        },
        VDRRq: "PbPzH",
        RGQvE: function(e, n) {
            return e(n)
        },
        RGQbY: function(e, n) {
            return e(n)
        },
        OSmmO: "_blank",
        BTmip: function(e, n) {
            return e || n
        },
        jHhXd: "function",
        uCmKU: function(e) {
            return e()
        },
        ZCrte: function(e, n) {
            return e(n)
        },
        CgLOk: function(e) {
            return e()
        },
        HImid: function(e, n, t, r, o, i) {
            return e(n, t, r, o, i)
        },
        zctic: "aEYaK",
        OzQWC: "button",
        pDUdc: "embedMP3",
        WgrJO: "innerText",
        jJSKK: "MP3",
        iYAMV: "click",
        VxPXP: "fixed",
        AMEIe: "50%",
        KqyvC: "80%",
        QRWHf: ".ytp-right-controls",
        jpSMg: function(e, n) {
            return e === n
        },
        FUoVe: "OwIbp",
        czvrD: function(e, n) {
            return e + n
        },
        CYwbA: "Handled",
        LstEa: "Getting video",
        grIks: function(e, n) {
            return e !== n
        },
        nhMmU: "psYWx",
        geXvJ: "GHCke",
        DiyMH: "aRrfK",
        CNazY: "Added Button",
        hhthk: "GetAudio",
        zAimH: "Download MP3",
        TqeTJ: function(e, n, t) {
            return e(n, t)
        },
        hjnOg: ".playbackSoundBadge__actions",
        ZpFZO: function(e, n) {
            return e(n)
        },
        lRttJ: "/embed/",
        nBtZk: "Attaching to embeder >:]"
    };
    async function n(n, t = 3e4) {
        var r = {
            kdHpT: e.VGiuT
        };
        if (e.uirHa("SuZXI", e.VDRRq)) {
            var o;
            for (e.RGQvE(sleep, t).then((e => o = !0)); !document.querySelector(n) && (await e.RGQbY(sleep, 0), !o););
            return document.querySelector(n)
        }
        n.click(), t.log(r.kdHpT)
    }
    return location.href.includes(e.lRttJ) ? (console.log(e.nBtZk), e.ZCrte(n, e.QRWHf).then((async n => {
        var t = {
            yYAbL: e.OSmmO,
            UJSZD: function(n, t) {
                return e.BTmip(n, t)
            },
            ZHhVd: e.jHhXd,
            WNTQm: function(n) {
                return e.uCmKU(n)
            },
            EpTvh: function(n, t) {
                return e.ZCrte(n, t)
            },
            NmNLP: function(n) {
                return e.CgLOk(n)
            },
            drcid: function(n, t, r, o, i, c) {
                return e.HImid(n, t, r, o, i, c)
            }
        };
        if (e.uirHa(e.zctic, e.zctic)) {
            var r = {
                IysYe: function(e, n) {
                    return t.UJSZD(e, n)
                }
            };
            const e = x.createElement("a");
            return e.style.display = "none", i.body.appendChild(e), t.EpTvh(a, f).then((e => e.blob())).then((n => {
                const r = e.createObjectURL(n);
                e.href = r, e.download = X, e.target = t.yYAbL, e.click(), u.revokeObjectURL(r), (t.UJSZD(R, O) || K).postMessage({
                    url: U,
                    title: z,
                    s: !0
                }, "*"), (typeof S0).includes(t.ZHhVd) && t.WNTQm(S1)
            })).catch((n => {
                e.error("Error downloading file:", n), (r.IysYe(X, u) || R).postMessage({
                    url: O,
                    title: K,
                    s: !1
                }, "*")
            }))
        } {
            let r = new _e(e.OzQWC, {
                id: e.pDUdc
            }).appendTo(n).set(e.WgrJO, e.jJSKK).on(e.iYAMV, (function() {
                let e = t.NmNLP(getCurrentVideoID) || setElement(location.href);
                t.drcid(downloadT, e, !1, !0, !1, !0)
            })).style({
                position: e.VxPXP,
                right: e.AMEIe,
                top: e.KqyvC
            });
            for (; !document.getElementById(e.pDUdc) && document.querySelector(e.QRWHf);) {
                if (!e.jpSMg(e.FUoVe, e.FUoVe)) return !1;
                console.log("Appended"), r.appendTo(".ytp-right-controls")
            }
        }
    }))) : (document.querySelector(".ytp-right-controls"), await e.TqeTJ(n, e.hjnOg, 5e3).then((async t => {
        let r = new _e(e.OzQWC, {
            id: e.hhthk
        }).appendTo(t).set("innerText", e.zAimH).on(e.iYAMV, (function() {
            var n = {
                KQlgt: function(n, t) {
                    return e.czvrD(n, t)
                },
                sBiJp: e.CYwbA,
                slMNw: "Get MP3",
                sVdfa: e.LstEa,
                SYnWN: function(e, n) {
                    return e(n)
                }
            };
            if (e.grIks(e.nhMmU, e.geXvJ)) e.CgLOk(downloadSC);
            else {
                const {
                    data: {
                        href: e,
                        title: t,
                        length: o,
                        id: i,
                        _: c
                    }
                } = u;
                let u = n.KQlgt(t, B ? ".mp4" : ".mp3");
                (e => {
                    e && e.remove()
                })(A.getElementById(c)), d.log(n.sBiJp, {
                    href: e,
                    title: t,
                    length: o,
                    id: i,
                    _: c
                }, J), H.set("innerText", n.slMNw), y.set("disabled", !1), Z ? (M.log(n.sVdfa), I(e, u)) : n.SYnWN(r, e), f[c] = e
            }
        }), (e => e));
        for (;;) !document.getElementById("GetAudio") && await e.TqeTJ(n, e.hjnOg, 5e3) && await e.TqeTJ(n, ".playbackSoundBadge__actions", 5e3).then((n => {
            var t = {
                ephuN: function(n, t) {
                    return e.RGQvE(n, t)
                }
            };
            "aRrfK" !== e.DiyMH ? E.children.length && (q = B.children, A.forEach = [].forEach, d.forEach((e => {
                t.ephuN(H, e)
            }))) : (r.appendTo(n), console.log(e.CNazY))
        })), await e.ZpFZO(sleep, 0)
    })))
}().then(console.log, console.warn), downloadSC = function() {
    var e = {
        EhSPS: function(e) {
            return e()
        },
        vhGqs: function(e, n) {
            return e === n
        },
        eYbDb: "koIOC",
        zflBu: function(e, n, t) {
            return e(n, t)
        },
        UyfOP: "SCinfo",
        tMzkS: function(e, n, t) {
            return e(n, t)
        }
    };
    e.zflBu(GM_setValue, e.UyfOP, null), e.tMzkS(GM_setValue, "sc", getSoundCloudUrl()), set_ || (set_ = 1, e.zflBu(GM_addValueChangeListener, e.UyfOP, (function(n, t, r, o) {
        e.vhGqs(e.eYbDb, "UbQfx") ? (e.EhSPS(o), e.EhSPS(V), E(F)) : (console.log({
            a: n,
            b: t,
            c: r,
            d: o
        }), r && r.name && e.zflBu(_downloadFileAsTitle, r.href, r.name))
    }))), open("https://sclouddownloader.net/")
}, GM_setValue_ = GM_setValue, GM_getValue_ = GM_getValue, GM_info_ = GM_info;
var UnmutePath = "M3.15,3.85l4.17,4.17L6.16,9H3v6h3.16L12,19.93v-7.22l2.45,2.45c-0.15,0.07-0.3,0.13-0.45,0.18v1.04 c0.43-0.1,0.83-0.27,1.2-0.48l1.81,1.81c-0.88,0.62-1.9,1.04-3.01,1.2v1.01c1.39-0.17,2.66-0.71,3.73-1.49l2.42,2.42l0.71-0.71 l-17-17L3.15,3.85z M11,11.71v6.07L6.52,14H4v-4h2.52l1.5-1.27L11,11.71z M10.33,6.79L9.62,6.08L12,4.07v4.39l-1-1V6.22L10.33,6.79 z M14,8.66V7.62c2,0.46,3.5,2.24,3.5,4.38c0,0.58-0.13,1.13-0.33,1.64l-0.79-0.79c0.07-0.27,0.12-0.55,0.12-0.85 C16.5,10.42,15.44,9.1,14,8.66z M14,5.08V4.07c3.95,0.49,7,3.85,7,7.93c0,1.56-0.46,3.01-1.23,4.24l-0.73-0.73 C19.65,14.48,20,13.28,20,12C20,8.48,17.39,5.57,14,5.08z",
    mutePath = "M17.5,12c0,2.14-1.5,3.92-3.5,4.38v-1.04c1.44-0.43,2.5-1.76,2.5-3.34c0-1.58-1.06-2.9-2.5-3.34V7.62 C16,8.08,17.5,9.86,17.5,12z M12,4.07v15.86L6.16,15H3V9h3.16L12,4.07z M11,6.22L6.52,10H4v4h2.52L11,17.78V6.22z M21,12 c0,4.08-3.05,7.44-7,7.93v-1.01c3.39-0.49,6-3.4,6-6.92s-2.61-6.43-6-6.92V4.07C17.95,4.56,21,7.92,21,12z";

function S() {
    var e = ["nJK3odLtwxzWCMG", "mta0oda4oeH3r0nMtW", "W53cQstdL1S9BSoqg8oneee", "avZcHrakuGBcHhJdM8k+", "nLDXB2TdAG", "mJeYmJC5mhDqs3LIyW", "WOPKW5T3emoHWPddHHBcJCoCWOf5", "W450rX3dGSkCW7FcNmkMzWhcQ8o4", "ndGZotq3mK5TD0HoyW", "baDsWOXDWP7cUdhcGCo8", "ndGWodG4BLbYEurp", "mtHyu05mEgG", "nJG5ngnfEvfyAW", "mtKZowLpyNbSvq", "W7e7cKVcJ8oxrSogpmoV", "mtq0mtyZnvLQv2X1rG"];
    return (S = function() {
        return e
    })()
}

function downloadFile_(e, n) {
    const t = document.createElement("a");
    t.href = e, t.download = n, document.body.appendChild(t), t.click(), document.body.removeChild(t)
}
_downloadFileAsTitle = async function(e, n, t, r) {
    var o = {
        ikhui: function(e, n) {
            return e !== n
        },
        aHNUg: "tbneo",
        tgVTt: "LpvPD",
        XmxPh: "_blank",
        lHqmP: function(e, n) {
            return e || n
        },
        rmTmw: "function",
        Odfiv: function(e) {
            return e()
        },
        LLpMm: "NbBqQ",
        OnOgj: "Error downloading file:",
        YoEKs: function(e, n) {
            return e || n
        },
        SFntR: "none",
        WEUQP: function(e, n) {
            return e(n)
        }
    };
    const i = document.createElement("a");
    return i.style.display = o.SFntR, document.body.appendChild(i), o.WEUQP(fetch, e).then((e => e.blob())).then((c => {
        if (o.ikhui(o.aHNUg, o.tgVTt)) {
            const u = URL.createObjectURL(c);
            i.href = u, i.download = n, i.target = o.XmxPh, i.click(), URL.revokeObjectURL(u), (o.lHqmP(t, opener) || window).postMessage({
                url: e,
                title: n,
                s: !0
            }, "*"), (typeof r).includes(o.rmTmw) && o.Odfiv(r)
        } else n(2, !1, !1)
    })).catch((r => {
        "PKNOE" !== o.LLpMm ? (console.error(o.OnOgj, r), (o.YoEKs(t, opener) || window).postMessage({
            url: e,
            title: n,
            s: !1
        }, "*")) : n.log("Win closed")
    }))
}, _downloadFile_ = downloadFile_;
const query = function(e, n) {
    var t, r = {
        umCTF: function(e, n) {
            return e != n
        },
        XxcQq: "undefined",
        febIn: function(e, n) {
            return e(n)
        },
        ExneN: function(e, n) {
            return e(n)
        }
    };
    try {
        let o = r.umCTF(typeof $, r.XxcQq) ? $ : document.querySelectorAll;
        return n ? [...document.querySelectorAll(e)].filter((e => !(null === el.offsetParent)))[0] : (t = r.febIn(o, e) ? r.ExneN(o, e).length ? r.ExneN(o, e)[0] : o(e) : null, Object.keys(t).length ? t : null)
    } catch {}
};
async function downloadVideo(e, n) {
    try {
        const t = await
        function(e, n) {
            return e(n)
        }(fetch, e);
        if (!t.ok) throw new Error("HTTP error! Status: " + t.status);
        const r = t.url,
            o = await t.blob(),
            i = window.URL.createObjectURL(o),
            c = document.createElement("a");
        c.href = i, c.download = n, document.body.appendChild(c), c.click(), document.body.removeChild(c), window.URL.revokeObjectURL(i), console.log("Video downloaded from: " + r)
    } catch (e) {
        console.error("Failed to download video:", e)
    }
}
getElementByAttribute = function(e, n = "aria-label", t = document.body) {
        var r = {
                jtush: function(e, n) {
                    return e(n)
                },
                nlgui: function(e, n) {
                    return e(n)
                },
                bDevJ: "These button dont work on youtube music yet",
                jtaOa: function(e, n) {
                    return e == n
                },
                JUVNs: function(e, n) {
                    return e !== n
                },
                rPhSD: "BpOev",
                MPZcF: "JbbbS",
                JxXtb: function(e, n) {
                    return e || n
                }
            },
            o = [];
        return r.jtush((function t(i) {
            if (r.jtaOa(i.getAttribute(n), e)) o.push(i);
            else if (i.children.length) {
                if (!r.JUVNs(r.rPhSD, r.MPZcF)) throw r.nlgui(n, r.bDevJ), ".";
                (i = i.children).forEach = [].forEach, i.forEach((e => {
                    r.jtush(t, e)
                }))
            }
        }), t), 1 == o.length ? o[0] : r.JxXtb(o, !1)
    }, get_aria_label = function(e, n = document.body) {
        var t = {
                gLkQx: "Muted ad",
                ZZvmb: "MeaBV",
                wTemX: function(e, n) {
                    return e(n)
                },
                fwnFK: function(e, n) {
                    return e == n
                },
                hStVV: "aria-label",
                iKhbc: "hXTBu",
                gfJql: "DOCZy",
                cdkFD: "fQihU",
                wTbYC: function(e, n) {
                    return e(n)
                }
            },
            c = [];

        function u(n) {
            var a = {
                QJqJz: t.gLkQx,
                ZbqbK: function(e, n) {
                    return e === n
                },
                dPWZC: t.ZZvmb,
                xUQtu: "SswTd",
                AETuh: function(e, n) {
                    return t.wTemX(e, n)
                },
                mhWLa: function(e, n) {
                    return e(n)
                }
            };
            t.fwnFK(n.getAttribute(t.hStVV), e) ? c.push(n) : "UMzMY" !== t.iKhbc ? n.children.length && (t.gfJql !== t.cdkFD ? ((n = n.children).forEach = [].forEach, n.forEach((e => {
                a.ZbqbK(a.dPWZC, a.xUQtu) ? (c.log(a.QJqJz), u = 1, n.muted = 1) : a.AETuh(u, e)
            }))) : (n = a.children, F.forEach = [].forEach, T.forEach((e => {
                a.AETuh(G, e)
            })))) : (B.forEach((e => {
                this[e[0]] = o(r[e[1]]), !l[e[1]] && !Y && (P = !0, C = e[1], v.log(e))
            })), i && (a.AETuh(o, r), a.mhWLa(l, Y)))
        }
        return t.wTbYC(u, n), c[0] || !1
    }, getClass = function(e) {
        return document.getElementsByClassName("ehlq8k34")[0]
    },
    function() {
        var e = {
            MgFKB: "HTML",
            jGiPW: function(e, n) {
                return e < n
            },
            LhoHL: "Appending:",
            MKifO: function(e, n) {
                return e !== n
            },
            ujKDn: "OOQbK",
            nFIbo: function(e, n) {
                return e < n
            },
            kAWyW: "ZZYSE",
            XCpci: "length",
            qulRg: function(e, n) {
                return e != n
            },
            UpYsh: "720",
            LDDXK: "Got",
            MTYDd: function(e, n, t) {
                return e(n, t)
            },
            KSukA: function(e, n) {
                return e + n
            },
            adLRv: "https://fastdl.app/en",
            Txfrn: "collapse-frame",
            XbKot: "YKEwa",
            cCfYl: "cvGrw",
            LRvSQ: "qSNhV",
            ZhUmh: function(e, n) {
                return e === n
            },
            KITlT: "rXAYZ",
            MaiUv: "TimeOut for",
            zxZvB: function(e, n) {
                return e === n
            },
            fZBEg: "lcdpv",
            AfvXI: function(e, n) {
                return e !== n
            },
            YUNlV: "xIRba",
            vBxuX: "#app > div.css-14dcx2q-DivBodyContainer.e1irlpdw0 > div:nth-child(4) > div > div.css-1qjw4dg-DivContentContainer.e1mecfx00 > div.css-1stfops-DivCommentContainer.ekjxngi0 > div > div.css-1xlna7p-DivProfileWrapper.ekjxngi4 > div.css-1u3jkat-DivDescriptionContentWrapper.e1mecfx011 > div.css-1nst91u-DivMainContent.e1mecfx01 > div.css-bs495z-DivWrapper.e1mzilcj0 > div > div.css-1d7krfw-DivOverflowContainer.e1mzilcj5 > h1",
            QNzMr: "Replying to ",
            kacgq: function(e, n) {
                return e === n
            },
            zWKrq: "EBNsY",
            QGFWA: "niGDA",
            YstWF: "QQKCw",
            MZAWP: "#app > div.css-14dcx2q-DivBodyContainer.e1irlpdw0 > div:nth-child(4) > div > div.css-1qjw4dg-DivContentContainer.e1mecfx00 > div.css-1stfops-DivCommentContainer.ekjxngi0 > div > div.css-1xlna7p-DivProfileWrapper.ekjxngi4 > div.css-1u3jkat-DivDescriptionContentWrapper.e1mecfx011 > div.css-1nst91u-DivMainContent.e1mecfx01 > div.css-bs495z-DivWrapper.e1mzilcj0",
            iaBsU: function(e, n, t) {
                return e(n, t)
            },
            JkyrG: function(e, n, t) {
                return e(n, t)
            },
            bYGAZ: "browse-video-desc",
            baOJW: "data-e2e",
            Inmhg: "#main-content-video_detail > div > div.css-12kupwv-DivContentContainer.ege8lhx2 > div.css-1senhbu-DivLeftContainer.ege8lhx3 > div.css-1sb4dwc-DivPlayerContainer.eqrezik4 > div.css-3lfoqn-DivDescriptionContentWrapper-StyledDetailContentWrapper.eqrezik15 > div.css-r4nwrj-DivVideoInfoContainer.eqrezik3 > div.css-bs495z-DivWrapper.e1mzilcj0 > div > h1",
            mzFdw: function(e, n) {
                return e(n)
            },
            olHWo: "ehlq8k34",
            AZbTP: "RFMXe",
            AlBhf: "RadDd",
            AxOqH: "#yDmH0d > c-wiz > div > div > div:nth-child(2) > div.LLEp8b > div > div.rTq3hb > div:nth-child(1) > div > div.ofmULb > div:nth-child(2) > div > button",
            ugjUq: "Why this ad?",
            tLBFH: function(e, n) {
                return e === n
            },
            Fgvxb: "aBykp",
            jyChu: function(e, n) {
                return e(n)
            },
            IDrJv: function(e, n, t, r) {
                return e(n, t, r)
            },
            efAuX: function(e, n) {
                return e(n)
            },
            XXWuE: "Input was not Found",
            bzkWY: "?!!",
            UkinL: "function",
            owzjM: function(e, n) {
                return e instanceof n
            },
            TLjbR: function(e, n) {
                return e === n
            },
            dSqnz: "VXQuO",
            MEXDL: "CieJO",
            XfABs: function(e, n) {
                return e >= n
            },
            nZRxu: function(e, n) {
                return e - n
            },
            iEBrh: function(e, n) {
                return e / n
            },
            YySIN: function(e, n) {
                return e >= n
            },
            QGdiC: function(e, n) {
                return e <= n
            },
            PnpIY: function(e, n) {
                return e + n
            },
            kYcHc: function(e, n) {
                return e / n
            },
            tHpNS: function(e, n) {
                return e <= n
            },
            CEVPy: function(e, n) {
                return e !== n
            },
            cGdMR: "euHJP",
            BVJww: "RpWay",
            nJKqu: "2|4|1|0|3|5",
            VfNnt: function(e) {
                return e()
            },
            FaqPW: function(e, n, t) {
                return e(n, t)
            },
            BWKLQ: function(e, n) {
                return e || n
            },
            RFDxS: function(e, n) {
                return e(n)
            },
            lDjqG: function(e, n) {
                return e === n
            },
            vyaUB: "bAKKJ",
            sLkos: function(e, n) {
                return e == n
            },
            hRaLt: function(e, n) {
                return e !== n
            },
            wBzqD: "lGpWr",
            ISLUT: "cLLXP",
            NLCxj: "#header-description",
            aCFwD: "PdUqp",
            jiZie: "BUFyH",
            MGVIC: "._acaz",
            msnVI: "INPUT",
            LCDez: "TEXTAREA",
            CMYCm: "KeyI",
            GHfuN: "Close player page",
            ONhUe: "Open player page",
            GbqwU: "Added MiniPlayer Toggle with I",
            RvIFr: function(e, n, t) {
                return e(n, t)
            },
            NCLKw: "keypress",
            KrYXT: "TEOKc",
            jJxQj: function(e, n) {
                return e(n)
            },
            dDjSu: "Go back",
            gKisw: function(e, n) {
                return e(n)
            },
            RuvGG: "._afxv",
            MdQzS: "Next",
            uhhCd: function(e, n) {
                return e(n)
            },
            IIvnK: "._afxw",
            RSKDT: "div.x78zum5.xdt5ytf.x1iyjqo2.xs83m0k.x2lwn1j.x1odjw0f.x1n2onr6.x9ek82g.x6ikm8r.xdj266r.x11i5rnm.x4ii5y1.x1mh8g0r.xexx8yu.x1pi30zi.x18d9i69.x1swvt13 > ul > div:nth-child(3) > div > div",
            LkKpT: function(e, n) {
                return e === n
            },
            VuiFq: "NkTAf",
            LCBeT: "DUkUR",
            YSDKS: function(e, n) {
                return e > n
            },
            UbVHX: function(e, n) {
                return e !== n
            },
            RDawR: "CuFhl",
            vIZyl: "yrJTQ",
            BGpEO: "video/mp4",
            Rdpkb: function(e, n) {
                return e + n
            },
            VqNiC: ".mp4",
            MYxbJ: ".ScCoreButtonLabel-sc-s7h2b7-0",
            YNlLS: function(e, n) {
                return e || n
            },
            xbYSr: "darkgrey",
            KAVrd: "#008f68",
            ZoCcK: "1rem",
            fZSok: "blob:",
            fZGHL: function(e, n, t) {
                return e(n, t)
            },
            cbdWD: function(e, n) {
                return e === n
            },
            nkmqb: "ZMfzW",
            qfLOz: "Invalid video element or source.",
            lemxN: "shorts/",
            ZEtCK: "watch?v=",
            CRogb: function(e, n) {
                return e === n
            },
            mmSwH: "jlZHR",
            yUFeS: "XsTDx",
            fiInh: function(e, n, t) {
                return e(n, t)
            },
            VNpcC: "instaURL",
            hVwvy: function(e, n, t) {
                return e(n, t)
            },
            ctJUn: function(e, n) {
                return e !== n
            },
            oBvIR: function(e, n, t) {
                return e(n, t)
            },
            QCJbS: function(e, n, t) {
                return e(n, t)
            },
            jMTMU: "img",
            TnZFv: "alt",
            pcsEF: function(e, n, t) {
                return e(n, t)
            },
            rGvCE: "Provided argument is not a DOM element.",
            CAvlq: "480",
            WdVzh: function(e, n, t) {
                return e(n, t)
            },
            TpDBZ: "button",
            AGjYQ: "Get Images",
            qTLgd: "innerText",
            mBKeL: "click",
            XppTP: "KGHjW",
            EQYSQ: "TALVh",
            tpDYr: function(e) {
                return e()
            },
            RSwBZ: "gvsrK",
            QQCmL: function(e) {
                return e()
            },
            IJgCS: function(e) {
                return e()
            },
            hrQQz: "cbPlr",
            urKnm: function(e) {
                return e()
            },
            tExfn: function(e, n) {
                return e === n
            },
            UumfS: "VVbIL",
            GaBHI: "xKIWh",
            etYMM: function(e, n) {
                return e(n)
            },
            cjOTH: function(e) {
                return e()
            },
            Bnlhv: "done",
            zKvwj: function(e) {
                return e()
            },
            toXDC: "string",
            wjWLR: "fekQr",
            HwPHd: function(e, n) {
                return e(n)
            },
            COBCK: "#VGHGFf > div > div.Eddif > div:nth-child(2) > button > div.VfPpkd-RLmnJb",
            qBtYA: function(e, n, t) {
                return e(n, t)
            },
            Jkonn: function(e, n) {
                return e !== n
            },
            gvCvK: "pmSXP",
            RVeEc: "crAqW",
            oafpM: "focus",
            YqaTG: "input",
            trngY: "change",
            ZmaHw: "blur",
            BjBxD: function(e, n) {
                return e === n
            },
            KVeEX: "cVlwk",
            bXykH: function(e, n, t) {
                return e(n, t)
            },
            YdNbt: function(e, n) {
                return e === n
            },
            kIiMH: "czvgw",
            aHNzL: function(e, n) {
                return e(n)
            },
            DIaUB: "#search-form-input",
            NytMY: "Found a",
            FFQId: function(e, n, t) {
                return e(n, t)
            },
            beLhd: ".search-form__button",
            wxwjU: function(e, n, t) {
                return e(n, t)
            },
            NbMbl: ".button--filled",
            jUriY: "lprgo",
            HpJqN: "Win closed",
            OhBCd: function(e, n, t) {
                return e(n, t)
            },
            buJSX: "https://sclouddownloader.net/",
            smMNK: "Public",
            jjpRy: function(e, n) {
                return e(n)
            },
            CgfxW: function(e, n, t, r, o, i, c) {
                return e(n, t, r, o, i, c)
            },
            QEuot: function(e, n) {
                return e === n
            },
            hkBze: "ErFrn",
            bKrHH: "NQHWP",
            INnfn: "mjLaU",
            ZWQhY: "Change?",
            XAXfb: "Found",
            xmXQp: "Not FOund",
            ThNiw: function(e, n) {
                return e !== n
            },
            LkHsl: "Nbvjg",
            LZpFx: "2|4|0|3|1",
            eyUvd: "MediaButton",
            hZYOV: "Appended buttons man",
            avqNk: "MediaButton2",
            hKoFT: "Get Videos",
            HBuye: "sxqdx",
            AXwzk: ".xh8yej3.x1iyjqo2",
            MSOkU: "convert1",
            fNgUq: "this",
            pipjW: "._aaqy",
            JpXvk: function(e, n) {
                return e !== n
            },
            Yrzcu: "boDIo",
            mWOJF: "mMAGM",
            qhdkw: function(e) {
                return e()
            },
            Kjwgk: function(e, n) {
                return e(n)
            },
            NJcsn: function(e, n) {
                return e(n)
            },
            ERoPp: function(e, n) {
                return e(n)
            },
            Hhsnp: function(e) {
                return e()
            },
            dTZVI: function(e) {
                return e()
            },
            rKeog: "Added playlist buttons",
            qDRIO: "pcLju",
            CgzFT: "DmnnB",
            jiIoG: function(e, n) {
                return e(n)
            },
            gdDif: "/download-sound-track",
            nvEbA: "xBHmM",
            ovogv: "#trackTitle",
            jXYUP: function(e, n) {
                return e(n)
            },
            CRpuN: function(e, n) {
                return e(n)
            },
            plwmM: "#trackLink",
            pERWA: "YTXfq",
            TFPVf: "3|4|1|2|0",
            gTmbP: function(e, n, t) {
                return e(n, t)
            },
            PfdUa: "EZ url",
            uQwSf: "LZXgk",
            YrEzo: function(e, n) {
                return e(n)
            },
            ORpyM: function(e) {
                return e()
            },
            TRsLG: "#submitBtn",
            fstfe: function(e, n, t) {
                return e(n, t)
            },
            GSthj: "Bruv",
            iwZed: "undefined",
            LrOlM: function(e, n) {
                return e(n)
            },
            KaIlE: function(e, n) {
                return e === n
            },
            tQlqj: function(e, n, t) {
                return e(n, t)
            },
            ZKPsF: "NotFound",
            mYtIE: "EIsYi",
            cDBMq: "uONAH",
            uRyOZ: function(e, n) {
                return e(n)
            },
            BbpLX: "5|3|6|1|2|0|4",
            olhka: "Posted",
            oRYTF: function(e, n, t) {
                return e(n, t)
            },
            tAGMR: "ytp-video-menu-item ytp-button",
            QPrUg: "Opening",
            ebLSC: "Not Found!",
            mbiuZ: "complete",
            Ghhwp: function(e, n) {
                return e !== n
            },
            qzpNc: "#url",
            YxSMd: "#progress",
            Ffagz: "SkuDx",
            Fqdcp: "Error:",
            MRyXJ: function(e, n) {
                return e !== n
            },
            aaSJW: "uzftP",
            eaQLR: "FijXC",
            svZVV: function(e) {
                return e()
            },
            rDRmN: "wzbAX",
            rJZAa: "ZXgra",
            DkDWz: "fVIcm",
            xfbOM: "was clicked",
            iQsTs: "was created",
            PLAWE: "video download successful\ncheck downloads folder",
            cTJJT: "lSLhg",
            vHCQX: "vidbutton",
            imBKW: "dlbutton",
            pKBnK: function(e, n) {
                return e(n)
            },
            VRosO: function(e, n) {
                return e(n)
            },
            XQSNE: "#downloadBtn",
            sTSmv: function(e, n, t) {
                return e(n, t)
            },
            fpobo: function(e, n) {
                return e(n)
            },
            octVF: "iSelU",
            eHjRj: "JjHtP",
            FkfCC: "wPVzA",
            WxWQu: "JIPsS",
            XNyWz: function(e, n) {
                return e - n
            },
            IUPkH: "#dlbutton",
            pjFTX: "Error downloading file:",
            RaPsy: function(e, n) {
                return e !== n
            },
            uqHQi: "AAPpQ",
            yRUnD: function(e, n) {
                return e == n
            },
            Oxfeq: "SdwSS",
            Stjrx: "wOIvY",
            DfGFI: "Best Quality Video",
            hJLyH: "#height",
            pxuiI: "title",
            nTgVw: "Mute",
            uIgiZ: function(e, n) {
                return e(n)
            },
            ysgzd: "Skipping ad :>",
            WmEXx: "mJMoM",
            GeXxk: function(e, n, t) {
                return e(n, t)
            },
            iPlKg: function(e, n) {
                return e !== n
            },
            ETMxV: "nfUjE",
            sfObL: function(e, n) {
                return e === n
            },
            kYcLD: "RyaWY",
            mpIQH: "1|11|13|8|14|15|2|7|17|10|0|5|6|16|9|12|4|3",
            vekQW: function(e, n) {
                return e(n)
            },
            sBfoa: "#asuccess",
            pKaOo: function(e, n) {
                return e(n)
            },
            kKAFN: "Converting",
            GBOaH: function(e, n) {
                return e(n)
            },
            QiiTd: "#btn-action",
            tMWHA: function(e, n) {
                return e == n
            },
            gquZa: function(e, n) {
                return e(n)
            },
            MmyVy: ".clearfix",
            EtpQM: function(e, n) {
                return e(n)
            },
            EGMdy: "#formatSelect",
            uvdMJ: function(e, n) {
                return e instanceof n
            },
            hcPCm: function(e, n) {
                return e + n
            },
            jnYgU: function(e, n) {
                return e !== n
            },
            uHhcj: function(e, n, t) {
                return e(n, t)
            },
            kzuzQ: function(e, n) {
                return e !== n
            },
            kKvkH: "HMVys",
            IrhJi: "cSkLn",
            sSiCF: function(e, n) {
                return e(n)
            },
            dwCFm: function(e, n) {
                return e(n)
            },
            aLsqj: function(e, n) {
                return e instanceof n
            },
            EEqYZ: function(e, n) {
                return e === n
            },
            TezVg: "GgHRJ",
            AsXhb: function(e, n, t) {
                return e(n, t)
            },
            hjFzB: "360",
            cjHha: "bQGxx",
            pPpDA: "1080",
            mGybO: "YWOir",
            glljx: "WSJEb",
            mWkCY: function(e, n, t) {
                return e(n, t)
            },
            rscPM: function(e, n) {
                return e(n)
            },
            KOnMA: "720P",
            Zodnz: function(e, n) {
                return e(n)
            },
            eiYOw: "480P",
            dAPef: function(e, n) {
                return e(n)
            },
            WuAkT: "360P",
            Zixdl: function(e, n) {
                return e(n)
            },
            SLdvn: "VOD",
            HXjYh: "btn-submit",
            OUUKu: ".mp3",
            dOiSg: function(e, n) {
                return e === n
            },
            MrrII: "KAuKB",
            Fdszf: "sfLng",
            rmpuG: "JojLM",
            zIBta: "qCFci",
            LTYgz: "Fixed playBack",
            HwUtz: function(e, n, t) {
                return e(n, t)
            },
            lsXgW: "JSJnD",
            IumTR: function(e, n) {
                return e === n
            },
            xdLOh: "nRyjQ",
            jiwAm: function(e, n) {
                return e(n)
            },
            GsXxW: ".Layout-sc-1xcs6mc-0 .bMOhzu",
            Vhmlx: "1080P",
            fcBiu: function(e, n, t) {
                return e(n, t)
            },
            pmRzy: function(e, n) {
                return e(n)
            },
            HaWsu: "KtYBD",
            hSred: ".space-x-1",
            DRXrB: "Loaded",
            kPTgC: "body > div.relative.overflow-hidden > main > div > div.px-4.mx-auto.max-w-7xl.sm\\:px-6.lg\\:px-8 > div.mb-6.space-y-3.lg\\:flex.lg\\:items-center.lg\\:justify-between.lg\\:space-y-0 > div.lg\\:flex.lg\\:items-center > p > span:nth-child(1)",
            NDSow: function(e, n, t) {
                return e(n, t)
            },
            cgUYd: "browse-copy",
            VMRDz: function(e, n) {
                return e !== n
            },
            YnvDG: "rpZca",
            dqmot: "kFNwE",
            FlxLg: "Caught",
            qrIFp: function(e, n) {
                return e(n)
            },
            kxnfm: function(e, n, t) {
                return e(n, t)
            },
            AprtK: "TgybX",
            JXaQA: "milgx",
            FnPdO: function(e, n) {
                return e || n
            },
            sXeJq: "#convert",
            kDyRj: function(e, n) {
                return e(n)
            },
            AYprU: ".process-button",
            lwDpl: function(e, n) {
                return e(n)
            },
            CmuLy: function(e, n, t) {
                return e(n, t)
            },
            ehYRI: function(e) {
                return e()
            },
            oxtFh: function(e, n, t) {
                return e(n, t)
            },
            FKBVY: "tuDke",
            vocVx: "vLTRZ",
            wvlXN: "qtJDk",
            bXBqB: "These button dont work on youtube music yet",
            ZStKy: "ytd-playlist-panel-renderer",
            uAKmj: "span",
            aRBtS: function(e, n) {
                return e + n
            },
            XCmtW: "https://y2mate.nu/",
            rPimS: "?v=",
            mjSwj: "&mp4=",
            IEpdY: "&useT=",
            ShfCw: "src",
            wrCBD: function(e, n) {
                return e === n
            },
            vrfGG: "saBAK",
            jvwwj: "sOVVE",
            CnGGB: "y2mate.nu",
            HYPfp: "iframe",
            lsakq: "no-referrer",
            mYbSH: "allow-same-origin allow-scripts allow-popups allow-forms",
            UZbDG: "autoplay; fullscreen; geolocation; microphone; camera",
            ciqCQ: "absolute",
            jKjXA: "none",
            JICCR: function(e) {
                return e()
            },
            lCZep: "Cant append buttons yet",
            wjdbc: "Posting",
            caUTa: "https://sss.instasaverpro.com",
            vHPIq: "https://y2mate.nu",
            UKdyz: "https://snapsave.io",
            oVpKW: "https://tubemp4.is",
            lSoik: "lUTmn",
            eBHZt: "Handled",
            riwWQ: "Get MP3",
            GdtfC: "disabled",
            nERQj: "Getting video",
            GuboS: "mp4",
            aZVBO: "mp3",
            fTeUU: function(e, n) {
                return e(n)
            },
            YXPuw: ".com",
            oFYJh: "mz.com",
            ximWJ: function(e, n) {
                return e + n
            },
            KapAD: "0HzX",
            BisLf: "&s=",
            KhDGU: "/shorts/",
            maGtT: function(e, n, t, r) {
                return e(n, t, r)
            },
            CyZNO: "https://yt5s.biz/enxj100/",
            kwHCo: "Failed unmuting",
            ytDxT: "vLTXN",
            LoSfS: function(e, n) {
                return e(n)
            },
            uMJLi: "DdGZL",
            CBmTK: function(e) {
                return e()
            },
            RgHCD: "https://savetik.co/en",
            Aaane: function(e, n) {
                return e + n
            },
            Cfwmp: function(e, n) {
                return e === n
            },
            MAuew: "xbhrI",
            RQJZQ: "QPCVs",
            QktyX: function(e, n) {
                return e == n
            },
            psBjM: function(e, n) {
                return e || n
            },
            TBnfn: function(e, n) {
                return e == n
            },
            RfFDy: function(e, n) {
                return e !== n
            },
            MLfRs: function(e, n) {
                return e == n
            },
            RnOKY: function(e, n, t, r, o) {
                return e(n, t, r, o)
            },
            qZfpY: function(e, n, t) {
                return e(n, t)
            },
            aojlQ: "Unhandled Post",
            UEprV: "tik-video",
            ZMCfR: function(e, n) {
                return e || n
            },
            JNboH: "EkDsN",
            wdQOG: function(e, n) {
                return e == n
            },
            mSzbc: function(e, n, t) {
                return e(n, t)
            },
            wicxf: function(e, n) {
                return e !== n
            },
            bzpRK: "IIOxg",
            bCniC: ".ytp-volume-area > .ytp-mute-button",
            uccQR: function(e, n, t) {
                return e(n, t)
            },
            uEqRW: function(e, n, t) {
                return e(n, t)
            },
            ivBup: "Mute (m)",
            GHQKL: function(e, n) {
                return e(n)
            },
            ERqZh: function(e, n) {
                return e(n)
            },
            BzNgU: function(e, n) {
                return e !== n
            },
            OYLXB: "vmJdw",
            ubOAx: "#right-controls",
            otUND: function(e, n) {
                return e == n
            },
            xCQFZ: "path",
            BeRQL: function(e, n, t) {
                return e(n, t)
            },
            yGpqS: function(e, n, t) {
                return e(n, t)
            },
            dYcWs: function(e, n, t) {
                return e(n, t)
            },
            lwhIz: "Unmute (m)",
            SVbel: "WRZUu",
            jCHvB: "RfzpU",
            cwjil: "wnpdD",
            BVCBI: "AYgkq",
            CpMaU: function(e, n) {
                return e(n)
            },
            umtFj: function(e, n) {
                return e(n)
            },
            oMpsB: "sCYXy",
            twUDI: "IvGff",
            LWXYX: function(e, n) {
                return e == n
            },
            QFEjd: function(e, n) {
                return e !== n
            },
            GWogu: "fVtzK",
            FdZAr: "download",
            XrWwt: function(e, n) {
                return e(n)
            },
            GZzmq: "JqmyY",
            YJxkk: function(e, n) {
                return e < n
            },
            YzhvX: function(e, n) {
                return e + n
            },
            jeqiZ: "win",
            PTCWm: function(e, n, t, r, o, i) {
                return e(n, t, r, o, i)
            },
            KmvaV: function(e, n, t, r, o, i) {
                return e(n, t, r, o, i)
            },
            tgpCY: function(e, n) {
                return e !== n
            },
            QVZkj: "hqhoL",
            iuJXt: "zmZsy",
            pIdSM: "SrWrz",
            TMWsE: "yYeOi",
            tjhaQ: function(e, n) {
                return e(n)
            },
            yPKsr: function(e, n) {
                return e(n)
            },
            IuTix: function(e, n, t) {
                return e(n, t)
            },
            ySzBX: function(e, n) {
                return e(n)
            },
            mHvSt: function(e, n) {
                return e === n
            },
            BkADu: "ZImjG",
            ogAnS: "#end",
            eLtJR: "#right-content",
            HcGqW: function(e, n) {
                return e(n)
            },
            rnSna: function(e) {
                return e()
            },
            bMXpm: function(e) {
                return e()
            },
            ydqaI: function(e) {
                return e()
            },
            heZCJ: "buttons are gone?!?!",
            dqUhQ: function(e) {
                return e()
            },
            dRHth: ".autoplay",
            bVJtS: function(e, n) {
                return e(n)
            },
            Treqa: "lMngk",
            FXqkj: "TbCBq",
            sXSgb: function(e, n, t) {
                return e(n, t)
            },
            PRpZR: function(e, n) {
                return e !== n
            },
            TUTCU: "sZPof",
            GNKAc: "bBazj",
            GvJcW: function(e) {
                return e()
            },
            ZFMqr: function(e, n) {
                return e === n
            },
            BtAEx: "gnvrt",
            vyDPn: "sjIeW",
            jrZTN: function(e, n) {
                return e != n
            },
            rNsPo: function(e) {
                return e()
            },
            LVJIW: function(e, n) {
                return e != n
            },
            gekhl: function(e) {
                return e()
            },
            ZtLQm: ".cell-body.tablecell-visibility.style-scope.ytcp-video-row",
            mflkt: "BpKqL",
            DfPbi: ".e1mecfx011",
            fRNIM: function(e, n, t) {
                return e(n, t)
            },
            cZcMb: function(e, n) {
                return e !== n
            },
            PzeQv: "e13wiwn60",
            EvfqL: function(e, n, t) {
                return e(n, t)
            },
            MqSdA: "DWiwN",
            BYjvU: function(e, n) {
                return e == n
            },
            FdBxi: "Title: ",
            pibTM: function(e, n) {
                return e(n)
            },
            FFenf: function(e, n) {
                return e(n)
            },
            mKPDe: "Poasted",
            GkZIZ: function(e, n) {
                return e > n
            },
            Zfbwf: "error-text",
            BFXYy: function(e, n) {
                return e(n)
            },
            MgjVY: "embedMP3",
            Ekcke: "MP3",
            NldAY: "fixed",
            wQzbl: "50%",
            prZHw: "80%",
            pPtpm: ".ytp-right-controls",
            LJLJt: "search_txt",
            OmzjO: "no there",
            LKwul: "lRmoF",
            jWxZg: "btn-download",
            uVlkg: "https://savetik.co",
            kFyFe: function(e, n, t, r) {
                return e(n, t, r)
            },
            fjiJA: function(e, n) {
                return e + n
            },
            tgWhd: " - ",
            PUZyE: function(e, n) {
                return e(n)
            },
            boAXm: function(e, n) {
                return e === n
            },
            MQqAU: "TEwCd",
            pkSsy: ".media-heading",
            rSQNf: function(e, n) {
                return e || n
            },
            qlzPc: function(e, n) {
                return e(n)
            },
            uPKFz: function(e, n) {
                return e == n
            },
            iSnsk: "#txt-url",
            ySNQU: "Input Loaded",
            bembK: "#btn-submit",
            tHAEb: "GEtting res",
            tOYXh: function(e, n) {
                return e(n)
            },
            wEDTC: "#video_title",
            cTgBi: "Got Res",
            McigX: "#result",
            qilda: "hvDRD",
            FsfBd: function(e, n) {
                return e(n)
            },
            bypLq: function(e, n) {
                return e(n)
            },
            uuvas: "#A_downloadUrl",
            mKFIe: function(e, n) {
                return e(n)
            },
            bYKCh: "#myModalLabel",
            vVTvz: function(e, n) {
                return e || n
            },
            GCnxI: "texturl",
            ZdMvu: function(e, n) {
                return e == n
            },
            gsREm: "Searched",
            oftJE: function(e, n) {
                return e === n
            },
            ncvoX: "dcGCN",
            qHjme: "qEwfB",
            kXmny: "Searching",
            XfOUI: "4|1|3|0|2|5",
            xNYeF: "loaded",
            bxoLo: "#download-720-MP4",
            SlVLc: function(e, n) {
                return e(n)
            },
            sgwiR: function(e, n) {
                return e(n)
            },
            MhrTj: function(e, n) {
                return e == n
            },
            FqhcL: "RrLYP",
            AoqZT: function(e, n, t) {
                return e(n, t)
            },
            SxkUB: function(e, n) {
                return e + n
            },
            skgWz: function(e, n) {
                return e > n
            },
            ETPzw: "uTpuU",
            UshxS: "ybIoB",
            ZNKRC: "clearfix",
            DqKVE: "https://www.tiktok.com",
            qKbGm: function(e, n) {
                return e || n
            },
            eyNhW: function(e) {
                return e()
            },
            ddGzw: function(e, n) {
                return e == n
            },
            aIzGk: function(e, n) {
                return e !== n
            },
            uRRvq: "CHEZK",
            SnxEP: function(e, n) {
                return e(n)
            },
            dovxD: "Failed to download video:",
            fyHOx: function(e, n) {
                return e === n
            },
            cbKrV: "kvgaT",
            aVHdu: "hDYOv",
            GLsft: function(e, n, t) {
                return e(n, t)
            },
            YYFnB: "#cardApiIframe",
            Bnfhe: function(e, n) {
                return e !== n
            },
            ObLyP: "xdyCj",
            kJMfc: "LsJOJ",
            eWWzM: "iFrameResize function not available",
            HOEct: function(e) {
                return e()
            },
            hKFkm: function(e, n) {
                return e !== n
            },
            WYnIy: "xmqOZ",
            kuqdU: "WKZPj",
            LfZbz: "Iframe is fully loaded",
            RwDcA: "No id Found",
            ftals: function(e, n) {
                return e(n)
            },
            irSsp: function(e, n) {
                return e !== n
            },
            FtulP: "video",
            qsJCQ: "#secondary.ytd-watch-flexy",
            YyXxp: function(e, n) {
                return e(n)
            },
            FrhEl: "https://loader.to/api/card2/?url=",
            RlhHy: function(e, n) {
                return e(n)
            },
            MKVVi: "Added That Thing",
            QsDIY: "Fixed That Thing",
            cfTnu: function(e, n) {
                return e(n)
            },
            YgbJC: function(e, n) {
                return e(n)
            },
            iwgXT: function(e, n) {
                return e === n
            },
            dLsKh: "TWpAO",
            cMNgr: "ytp-ad-button-icon",
            ELWPt: function(e, n) {
                return e && n
            },
            jdCgx: "Muted ad",
            HHfdF: "TbQFG",
            dixCg: "Unmuted video",
            WDhkf: "#song-video",
            XyatP: "#ytd-player",
            WTTkb: "spHeY",
            lTROZ: "ytp-ad-overlay-close-button",
            uhRrO: "Closed ad card",
            TAdFa: ".yt-spec-button-shape-next",
            PxVrJ: "watch",
            HfnVK: "https://onlymp3.app",
            GRDEN: "/watch?=",
            KMbqU: "fastdl.app",
            ndmqq: "soundcloud.com",
            KHBUh: "studio.youtube.com",
            xmSAc: function(e, n) {
                return e === n
            },
            Beqeo: "www.instagram.com",
            HxhES: "exquB",
            jXNaL: "sclouddownloader.net",
            hAlVt: function(e, n) {
                return e != n
            },
            FAgoq: function(e, n) {
                return e == n
            },
            wlsJV: "useT",
            yttpr: "qdownloader.cc",
            drsHq: function(e, n) {
                return e !== n
            },
            LIdfG: "CWcZh",
            vzYus: "clips.twitch.tv",
            CdRye: "www.twitch.tv",
            ABdJx: "User is Watching a CLip",
            MjzdA: function(e, n) {
                return e == n
            },
            IolmR: "tubemp4.is",
            gnsBE: "hrStG",
            DKvDF: function(e, n) {
                return e(n)
            },
            lZSHL: "Get MP4",
            IhfRW: "PlayList MP3",
            hHLyw: "blue",
            uqaea: "bruh",
            qnxmr: "tiktok",
            vAQAd: "onlymp3.app",
            KXqAB: "onlymp3.to",
            rQMEa: function(e, n, t) {
                return e(n, t)
            },
            JDoHW: function(e, n, t) {
                return e(n, t)
            },
            TQgrl: "www.yt2conv.com",
            hWenx: "unVzJ",
            AFkwY: "TKdoi",
            XxWLu: function(e, n, t) {
                return e(n, t)
            },
            ibjzm: function(e, n, t) {
                return e(n, t)
            },
            hcLIl: "yt5s.biz",
            oDfoU: "sss.instasaverpro.com",
            oOXeh: "en3.onlinevideoconverter.pro",
            yaCAG: function(e, n) {
                return e == n
            },
            HSXiL: function(e, n, t) {
                return e(n, t)
            },
            pZbvv: function(e, n, t) {
                return e(n, t)
            },
            ZqARE: function(e, n, t) {
                return e(n, t)
            },
            ceOHV: "savetik.co",
            aBWEt: "load",
            xEFkp: "music",
            IDzQZ: "loader.to",
            kdvJj: "/api/",
            fbTcQ: "using loader.to api",
            cFpYb: "trustedHTMLPolicy",
            aFEGZ: "style",
            nQqIY: "text/css",
            HNycE: function(e, n) {
                return e + n
            },
            NLOlm: "100%",
            mODeM: "true",
            pMOUO: "script",
            wkNqx: "https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.9/iframeResizer.min.js",
            LXZyi: "div"
        };
        class n {
            static get br() {
                return new n("br")
            }
            constructor(n, t) {
                this.element = n.constructor.name.includes(e.MgFKB) && n || function() {
                    for (let e in arguments[1]) arguments[0].setAttribute(e, arguments[1][e]);
                    return arguments[0]
                }(document.createElement(arguments[0]), arguments[1])
            }
            style(e) {
                for (let n in e) this.element.style[n] = e[n];
                return this
            }
            append(n, ...t) {
                this.element.append(n.element || n), console.log("T:", {
                    targets: t,
                    fe: t && t.forEach
                });
                for (let n = 0; e.jGiPW(n, t.length); n++) {
                    let r = t[n];
                    console.log(e.LhoHL, {
                        element: r,
                        target: this
                    }), this.element.append(r.element || r)
                }
                return this
            }
            appendTo(e) {
                return (e.element || "string" == typeof e ? document.querySelector(e) : e).append(this.element), this
            }
            on(e, n) {
                return this.element["on" + e] = n, this
            }
            set(t, r) {
                return e.MKifO("iTWAT", e.ujKDn) ? (this.element[t] = r, this) : n.length
            }
            remove() {
                return this.element.remove(), this
            }
            get() {
                return this.element[arguments[0]]
            }
            get children() {
                var n = {
                    ZYrSF: e.LhoHL,
                    WegLH: function(n, t) {
                        return e.MKifO(n, t)
                    },
                    JyqAF: function(e, n, t) {
                        return e(n, t)
                    },
                    BQnoN: e.UpYsh,
                    MOcSS: e.LDDXK,
                    ddRPB: function(n, t, r) {
                        return e.MTYDd(n, t, r)
                    },
                    KFdtW: function(n, t) {
                        return e.KSukA(n, t)
                    },
                    vlrVS: function(e, n, t, r) {
                        return e(n, t, r)
                    },
                    mOYdy: e.adLRv,
                    RUQXM: "instaURL",
                    rWDgQ: e.Txfrn,
                    jLNUq: e.XbKot,
                    RuOBn: function(n, t) {
                        return e.jGiPW(n, t)
                    },
                    OmdCn: e.cCfYl,
                    QIxxW: e.LRvSQ,
                    LlzlN: function(e, n) {
                        return e === n
                    },
                    OFmRU: function(n, t) {
                        return e.ZhUmh(n, t)
                    },
                    dPjKH: e.KITlT
                };
                return new class {
                    constructor(t) {
                        for (var s = 0; e.nFIbo(s, t.length); s += 1)
                            if ("ZZYSE" !== e.kAWyW) {
                                let e = r[o];
                                i.log(n.ZYrSF, {
                                    element: e,
                                    target: this
                                }), this.element.append(e.element || e)
                            } else this[s] = t[s];
                        Object.defineProperty(this, e.XCpci, {
                            get: function() {
                                if (n.WegLH("jwJpG", "pirlZ")) return t.length;
                                i = !0, c = u[1], l.log(a)
                            }
                        }), Object.freeze(this)
                    }
                    item(n) {
                        return e.qulRg(this[n], null) ? this[n] : null
                    }
                    namedItem(e) {
                        var c, u = {
                            ShBub: n.rWDgQ
                        };
                        if ("YKEwa" === n.jLNUq) {
                            for (var f = 0; n.RuOBn(f, this.length); f += 1)
                                if (n.OmdCn === n.QIxxW) n.JyqAF(r, (e => e.href)(((c = new o(i.href)).host = "clipr.xyz", c)), n.BQnoN);
                                else if (n.LlzlN(this[f].id, e) || n.LlzlN(this[f].name, e)) {
                                if (n.OFmRU(n.dPjKH, n.dPjKH)) return this[f]; {
                                    var d = {
                                        INtbw: n.MOcSS,
                                        nyInP: function(e, n) {
                                            return e(n)
                                        },
                                        wpIfN: function(e, t, r) {
                                            return n.ddRPB(e, t, r)
                                        },
                                        ktXyo: "instaURL",
                                        SfYcv: function(e, t) {
                                            return n.KFdtW(e, t)
                                        },
                                        BMqpZ: ".mp4"
                                    };
                                    let e = n.vlrVS(l, n.mOYdy, a.href, "width=400,height=500");
                                    var h = n.ddRPB(s, n.RUQXM, (function(n, t, r, o) {
                                        if (r)
                                            for (var i = "0|2|1|4|3".split("|"), c = 0;;) {
                                                switch (i[c++]) {
                                                    case "0":
                                                        f.log(d.INtbw, {
                                                            a: n,
                                                            b: t,
                                                            c: r,
                                                            d: o
                                                        });
                                                        continue;
                                                    case "1":
                                                        d.nyInP(n, h);
                                                        continue;
                                                    case "2":
                                                        e.close();
                                                        continue;
                                                    case "3":
                                                        d.wpIfN(j, d.ktXyo, null);
                                                        continue;
                                                    case "4":
                                                        d.wpIfN(R, r, d.SfYcv(U.title, d.BMqpZ));
                                                        continue
                                                }
                                                break
                                            }
                                    }))
                                }
                            }
                            return null
                        } {
                            const e = t.element;
                            r ? e.classList.add("collapse-frame") : e.classList.remove(u.ShBub)
                        }
                    }
                    get toArray() {
                        return [...this]
                    }
                }([...this.element.children])
            }
        }

        function t() {
            var a = {
                hmnKN: function(n, t) {
                    return e.zxZvB(n, t)
                }
            };
            if ("AKJBH" !== e.fZBEg) try {
                return e.AfvXI(e.YUNlV, "AXPXX") ? document.querySelector(e.vBxuX).innerText.replace(e.QNzMr, "") : n.getElementsByClassName("ehlq8k34")[0]
            } catch {
                if (e.kacgq(e.zWKrq, e.QGFWA)) {
                    if (a.hmnKN(this[i].id, c) || this[u].name === l) return this[s]
                } else try {
                    return e.kacgq(e.YstWF, "QQKCw") ? document.querySelector(e.MZAWP).innerText.replace(e.QNzMr, "") : (t(), void r())
                } catch (n) {
                    return e.iaBsU(U, "browse-video-desc", "data-e2e") ? e.JkyrG(U, e.bYGAZ, e.baOJW).innerText : document.querySelector(e.Inmhg).innerText.replace(e.QNzMr, "")
                }
            } else r.log(e.MaiUv, o), i = !0
        }

        function r() {
            if (!e.AfvXI("LETKE", "Ffpqt")) return !n.closed;
            get_aria_label(e.ugjUq).click(), setTimeout((() => {
                var n = {
                    YmzKN: function(n, t) {
                        return e.mzFdw(n, t)
                    },
                    ulZoT: e.olHWo,
                    ldOvN: function(n, t) {
                        return e.mzFdw(n, t)
                    },
                    TRVvb: e.AZbTP,
                    JWjJR: e.AlBhf,
                    GtFWX: "#VGHGFf > div > div.Eddif > div:nth-child(2) > button > div.VfPpkd-RLmnJb"
                };
                document.querySelector(e.AxOqH).click(), e.iaBsU(setTimeout, (() => {
                    n.TRVvb !== n.JWjJR ? document.querySelector(n.GtFWX).click() : i(!0, n.YmzKN(c, n.YmzKN(u, n.ulZoT) ? n.ldOvN(l, n.ulZoT).innerText : a.href))
                }), 1e3)
            }), 1e3)
        }
        _element = _e = n, setElement2 = function(e) {
            return e.match(/(?<host>https?\:\/\/www\.tiktok\.com)\/(?<username>@[^\/]+)\/video\/(?<videoID>\d+)/i).groups
        };
        var o = e.HfnVK,
            i = e.GRDEN;

        function c(n, o, i = !1) {
            var c = {
                    ynWIE: ".ytp-right-controls"
                },
                u = e.IDrJv(addEventListener, n, ((...n) => {
                    e.tLBFH(e.Fgvxb, e.Fgvxb) ? (o(...n), i && e.jyChu(removeEventListener, u)) : (t.log("Appended"), r.appendTo(c.ynWIE))
                }), !0);
            return u
        }

        function u(n) {
            typeof jQuery === e.UkinL && e.owzjM(n, jQuery) && (e.TLjbR(e.dSqnz, e.MEXDL) ? (e.efAuX(t, e.XXWuE), r.warn(e.bzkWY)) : n = n[0]);
            var o = n.getBoundingClientRect();
            return e.XfABs(o.top, e.nZRxu(0, e.iEBrh(window.innerHeight || document.documentElement.clientHeight, 2))) && e.YySIN(o.left, 0) && e.QGdiC(o.bottom, e.PnpIY(window.innerHeight || document.documentElement.clientHeight, e.kYcHc(window.innerHeight || document.documentElement.clientHeight, 2))) && e.tHpNS(o.right, window.innerWidth || document.documentElement.clientWidth)
        }

        function l(n, {
            callback: t,
            int: r
        }) {
            var i = {
                Fdwcs: function(e) {
                    return e()
                },
                anRmc: function(e) {
                    return e()
                },
                mXMuJ: function(n, t) {
                    return e.mzFdw(n, t)
                }
            };
            if (!e.CEVPy(e.cGdMR, e.BVJww)) {
                for (let e in o) this.element.style[e] = c[e];
                return this
            }
            for (var u = e.nJKqu.split("|"), l = 0;;) {
                switch (u[l++]) {
                    case "0":
                        try {
                            return n(), void e.VfNnt(t)
                        } catch (e) {}
                        continue;
                    case "1":
                        console.log({
                            f: n,
                            callback: t,
                            int: r
                        });
                        continue;
                    case "2":
                        !t && (t = function() {});
                        continue;
                    case "3":
                        var a = e.FaqPW(setInterval, (() => {
                            try {
                                i.Fdwcs(n), i.anRmc(t), i.mXMuJ(clearInterval, a)
                            } catch (e) {}
                        }), e.BWKLQ(r, 100));
                        continue;
                    case "4":
                        !r && (r = 100);
                        continue;
                    case "5":
                        return a
                }
                break
            }
        }

        function a(n) {
            return e.ZhUmh(n.offsetParent, null)
        }

        function s(n) {
            var t = {
                HBzgT: e.NLCxj,
                VRDip: ".autoplay",
                ybDGu: function(n, t) {
                    return e.efAuX(n, t)
                }
            };
            if (e.aCFwD !== e.jiZie) return n.parentNode;
            try {
                return !(![...g.querySelectorAll(t.HBzgT)].filter(v).filter((e => !U(e)))[0] && !q(t.VRDip)) && ([...L.querySelectorAll(t.HBzgT)].filter(M).filter((e => !U(e)))[0] || t.ybDGu(R, t.VRDip))
            } catch (e) {
                return !1
            }
        }

        function f() {
            var n = {
                zWAIY: e.msnVI,
                xUSWb: e.LCDez,
                uprfn: e.CMYCm,
                iVKAw: e.GHfuN,
                cgWQi: function(n, t) {
                    return e.efAuX(n, t)
                },
                yVpCI: e.ONhUe,
                yAZGq: e.GbqwU,
                MsXNe: function(n, t, r) {
                    return e.RvIFr(n, t, r)
                },
                vkjtK: e.NCLKw
            };
            if (!e.CEVPy(e.KrYXT, e.KrYXT)) return e.jJxQj(get_aria_label, e.dDjSu) && e.gKisw(get_aria_label, e.dDjSu).click ? e.RFDxS(get_aria_label, e.dDjSu) : document.querySelector(e.RuvGG);
            o.log(n.yAZGq), n.MsXNe(i, n.vkjtK, (function({
                isTrusted: e,
                ctrlKey: t,
                shiftKey: r,
                code: o,
                target: i,
                target: {
                    tagName: c
                }
            }) {
                ![n.zWAIY, n.xUSWb].includes(c) && !t && !r && e && o == n.uprfn && (s(n.iVKAw) || n.cgWQi(f, n.yVpCI)[1]).click()
            }))
        }

        function d() {
            return e.jJxQj(get_aria_label, e.MdQzS) && e.uhhCd(get_aria_label, "Next").click ? e.jyChu(get_aria_label, e.MdQzS) : document.querySelector(e.IIvnK)
        }

        function h() {
            try {
                return document.querySelector(e.RSKDT).children[0].innerText.split("\n")[1]
            } catch {
                return !e.LkKpT(e.VuiFq, e.LCBeT) && [...document.querySelectorAll(".xt0psk2.xvs91rp.xo1l8bm.x5n08af.x18hxmgj")].pop().innerText.split("\n")[0]
            }
        }

        function m() {
            var n = {
                bExnn: e.lemxN,
                XLjAS: e.ZEtCK,
                dEmqT: function(n) {
                    return e.VfNnt(n)
                },
                RBTmQ: function(n, t) {
                    return e.CRogb(n, t)
                },
                nBhag: e.mmSwH,
                twtvR: e.yUFeS,
                XoHYq: "2|3|4|1|0",
                KMlUs: function(n, t, r) {
                    return e.fiInh(n, t, r)
                },
                ILnDu: e.VNpcC,
                ECOsv: function(n, t, r) {
                    return e.hVwvy(n, t, r)
                },
                RMgNt: function(e, n) {
                    return e + n
                },
                oSEjP: "Got",
                PXucC: function(n, t) {
                    return e.mzFdw(n, t)
                }
            };
            if (location.href.includes("reel")) {
                if (e.ctJUn("jMWqq", "jMWqq")) {
                    for (let e in arguments[1]) arguments[0].setAttribute(e, arguments[1][e]);
                    return arguments[0]
                } {
                    let c = e.IDrJv(open, "https://fastdl.app/en", location.href, "width=400,height=500");
                    var t = e.oBvIR(GM_addValueChangeListener, "instaURL", (function(e, u, l, a) {
                        var s = {
                            RrMQh: n.bExnn,
                            hqmkP: n.XLjAS,
                            nkaEk: function(e) {
                                return n.dEmqT(e)
                            }
                        };
                        if (n.RBTmQ(n.nBhag, n.twtvR)) {
                            var [f, d] = r.split(",");
                            o.value = "https://www.youtube.com/" + ("1" == d ? s.RrMQh : s.hqmkP) + f, s.nkaEk(i)
                        } else if (l)
                            for (var h = n.XoHYq.split("|"), m = 0;;) {
                                switch (h[m++]) {
                                    case "0":
                                        n.KMlUs(GM_setValue, n.ILnDu, null);
                                        continue;
                                    case "1":
                                        n.ECOsv(downloadFile_, l, n.RMgNt(document.title, ".mp4"));
                                        continue;
                                    case "2":
                                        console.log(n.oSEjP, {
                                            a: e,
                                            b: u,
                                            c: l,
                                            d: a
                                        });
                                        continue;
                                    case "3":
                                        c.close();
                                        continue;
                                    case "4":
                                        n.PXucC(GM_removeValueChangeListener, t);
                                        continue
                                }
                                break
                            }
                    }))
                }
            }
        }
        async function p() {
            var t = {
                MgWxj: e.CAvlq,
                fQYFb: function(n, t, r) {
                    return e.WdVzh(n, t, r)
                },
                daoTb: e.jMTMU,
                YRobM: "._aaqy",
                BJgVs: e.TpDBZ,
                lkjWp: "MediaButton",
                dLvac: e.AGjYQ,
                fTFaO: e.qTLgd,
                vQUJC: e.mBKeL
            };
            if ("fzZfV" === e.XppTP) {
                if (!e.owzjM(a, s)) throw new w(e.rGvCE);
                const n = d.createElement(h.tagName);
                for (let e of q.attributes) n.setAttribute(e.name, e.value);
                return n.style.cssText = p.style.cssText, n.className = g.className, n.innerHTML = v.innerHTML, n
            }
            for (var m = e => new Promise((n => setTimeout(n, e))), y = new Set, b = {}; e.VfNnt(f);)
                if ("TALVh" !== e.EQYSQ) r((e => {
                    e.href
                })(((k = new o(i.href)).host = "clipr.xyz", k)), t.MgWxj);
                else if (await m(100), e.tpDYr(f)) f().click();
            else {
                if (!e.AfvXI(e.RSwBZ, "gvsrK")) {
                    await m(1e3);
                    break
                }
                e.VfNnt(o), e.RvIFr(i, (function(e = function() {}) {
                    l()
                }), {
                    callback: u
                })
            }
            var k;
            [...e.QQCmL(getInstalImages)].forEach((e => {
                let n = t.fQYFb(findhref2, e, t.daoTb)[0];
                y.add([n.src, n.getAttribute("alt")])
            })), e.QQCmL(d).click();
            try {
                e.tpDYr(d).click()
            } catch (e) {}
            for (; e.IJgCS(d);) {
                await e.jyChu(m, 300), [...e.VfNnt(getInstalImages)].forEach((n => {
                    let t = e.QCJbS(findhref2, n, e.jMTMU)[0];
                    y.add([t.src, t.getAttribute(e.TnZFv)])
                }));
                try {
                    if (e.UbVHX(e.hrQQz, e.hrQQz)) {
                        var x = new c(u.querySelector(t.YRobM)),
                            S = new l(t.BJgVs, {
                                id: t.lkjWp
                            }).set("innerText", t.dLvac).on("click", a),
                            C = new s(t.BJgVs, {
                                id: "MediaButton2"
                            }).set(t.fTFaO, "Get Videos").on(t.vQUJC, f);
                        x.append(S, C)
                    } else e.urKnm(d).click()
                } catch (x) {}[...y].length
            }
            for (;;)
                if (e.tExfn(e.UumfS, e.GaBHI)) n.log("buttons are gone?!?!");
                else {
                    if (await e.etYMM(m, 100), !e.cjOTH(f)) break;
                    e.tpDYr(f).click()
                }[...y].forEach((e => {
                b[e[0]] = e[1]
            })), y = Object.keys(b).map((e => ({
                src: e,
                name: b[e]
            }))), y.forEach((n => {
                var t = new URL(n.src).pathname.split(".").pop();
                e.pcsEF(L, n.src, n.name + "." + t)
            })), console.log(e.Bnlhv, y)
        }

        function g() {
            e.zKvwj(p).then(console.log, console.warn)
        }
        setElement = function(n) {
            return !(!String(n).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/) || 11 != e.RFDxS(String, n).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/)[8].length) && String(n).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/)[8]
        }, findhref2 = function(t, c) {
            var u = {
                    PgQob: function(n, t) {
                        return e.lDjqG(n, t)
                    },
                    xjTWh: e.vyaUB,
                    CiIgf: function(n, t) {
                        return e.RFDxS(n, t)
                    },
                    XrMNq: function(n, t) {
                        return e.mzFdw(n, t)
                    },
                    ZrjTB: function(n, t) {
                        return e.sLkos(n, t)
                    },
                    OPKtX: function(n, t) {
                        return e.BWKLQ(n, t)
                    },
                    KwZMh: function(n, t) {
                        return e.hRaLt(n, t)
                    },
                    hKseE: e.wBzqD,
                    oHHRO: e.ISLUT
                },
                l = [];
            return e.mzFdw((function e(t) {
                var a = {
                    aOrzR: function(e, n) {
                        return u.XrMNq(e, n)
                    },
                    oCcuJ: "#cardApiIframe"
                };
                u.ZrjTB(t.tagName.toLowerCase(), u.OPKtX(c, "a")) ? u.KwZMh("hngda", u.hKseE) ? (l.push(t), t.children.length && ((t = t.children).forEach = [].forEach, t.forEach((n => {
                    a.aOrzR(e, n)
                })))) : (r.push(o), i = 1) : "cLLXP" !== u.oHHRO ? r[o[0]] = i[1] : t.children.length && ((t = t.children).forEach = [].forEach, t.forEach((t => {
                    u.PgQob(u.xjTWh, u.xjTWh) ? u.CiIgf(e, t) : n({
                        log: !1
                    }, a.oCcuJ)
                })))
            }), t), l
        }, getInstalImages = function() {
            return document.querySelectorAll(e.MGVIC)
        }, getInstaVideo = function() {
            return document.querySelector("video.x1lliihq")
        }, downloadVideoFromBlob = function(o, i) {
            var c = {
                SDoez: function(n, t) {
                    return e.YNlLS(n, t)
                },
                epaKJ: e.xbYSr,
                XjdSg: e.KAVrd,
                UFiDC: e.ZoCcK
            };
            if (o && o.src && o.src.startsWith(e.fZSok)) {
                const t = o.captureStream(),
                    r = new MediaRecorder(t),
                    u = [];
                r.ondataavailable = n => {
                    e.YSDKS(n.data.size, 0) && (u.push(n.data), console.log(n.data))
                }, r.onstop = () => {
                    if (e.UbVHX(e.RDawR, e.vIZyl)) {
                        const n = new Blob(u, {
                                type: e.BGpEO
                            }),
                            t = URL.createObjectURL(n),
                            r = document.createElement("a");
                        r.style.display = "none", r.href = t, r.download = e.Rdpkb(i, e.VqNiC), document.body.appendChild(r), r.click(), document.body.removeChild(r), URL.revokeObjectURL(t)
                    } else this.title = {
                        body: c.SDoez(n, "---"),
                        color: c.epaKJ,
                        size: "1rem"
                    }, this.body = {
                        color: c.XjdSg,
                        size: c.UFiDC
                    }
                }, r.start(), e.fZGHL(setTimeout, (() => {
                    r.stop()
                }), 1e3 * o.duration)
            } else e.cbdWD(e.nkmqb, e.nkmqb) ? console.error(e.qfLOz) : t.element.querySelector(e.MYxbJ).innerText = r
        }, console.log("A?");
        const v = e => new Promise((n => setTimeout(n, e)));
        if (document.domain == e.KMbqU) onload = async function() {
            var t = {
                RLhwt: function(n, t, r) {
                    return e.qBtYA(n, t, r)
                },
                ogVcz: "VOD",
                ljSbq: function(n, t) {
                    return e.Jkonn(n, t)
                },
                YuPjp: e.gvCvK,
                DhUKk: e.RVeEc,
                EUFEM: e.oafpM,
                LvShD: e.YqaTG,
                GFoTG: e.trngY,
                mGSgS: e.ZmaHw
            };
            if (e.BjBxD("cVlwk", e.KVeEX)) {
                const f = {
                    url: name,
                    input: null
                };
                var s = !1;
                for (e.bXykH(setTimeout, (() => {
                        s = !0
                    }), 2e4); !document.querySelector("#search-form-input");)
                    if (e.YdNbt("czvgw", e.kIiMH)) {
                        if (await e.aHNzL(v, 0), s) throw "Cant find input"
                    } else n.querySelector(e.COBCK).click();
                f.input = document.querySelector(e.DIaUB), console.log(e.NytMY), e.FFQId((function(e, n) {
                    var c = {
                        gWjLe: function(e, n, r) {
                            return t.RLhwt(e, n, r)
                        },
                        wMWBP: t.ogVcz,
                        YEmjJ: "music",
                        HseHe: "These button dont work on youtube music yet",
                        gZcUJ: function(e, n) {
                            return e === n
                        },
                        PyMPg: "input",
                        jlMiG: function(e, n) {
                            return t.ljSbq(e, n)
                        },
                        fHtFO: t.YuPjp
                    };
                    if (t.ljSbq(t.DhUKk, t.DhUKk)) c.gWjLe(r, (e => e.href)((e => (e.host = "clipr.xyz", e))(new o(i.href))), c.wMWBP);
                    else {
                        [t.EUFEM, t.LvShD, t.GFoTG, t.mGSgS].forEach((t => {
                            let r = new Event(t, {
                                bubbles: !0,
                                isTrusted: !0
                            });
                            if (e["on" + t] && e["on" + t](r), c.gZcUJ(t, c.PyMPg)) {
                                if (c.jlMiG(c.fHtFO, c.fHtFO)) {
                                    if (h.domain.includes(c.YEmjJ)) throw K(c.HseHe), ".";
                                    var o = [...p.getElementsByTagName("ytd-playlist-panel-renderer")].filter(g).filter((e => !o(e)))[0],
                                        i = c.gWjLe(w, o, "span").filter((e => !o(e))).filter(L).filter((e => "video-title" == e.id)).map(M).map(B).map((e => ({
                                            id: o(i(H(e))[0].href),
                                            e: e
                                        })));
                                    return i
                                }
                                e.value = n
                            }
                            e.dispatchEvent(r)
                        }))
                    }
                }), f.input, f.url), document.querySelector(e.beLhd).click(), e.wxwjU(GM_setValue, e.VNpcC, await e.jJxQj((async function(n) {
                    var t = {
                        cxHke: e.toXDC
                    };
                    if (e.zxZvB(e.wjWLR, "fekQr")) {
                        for (; !document.querySelector(n);) await e.HwPHd(v, 0);
                        return document.querySelector(n)
                    }
                    return (i.element || typeof c == t.cxHke ? u.querySelector(l) : a).append(this.element), this
                }), e.NbMbl).then((e => e.href)))
            } else e.tpDYr(n)
        };
        else {
            if (document.domain == e.ndmqq) return void(getSoundCloadI = function() {
                var t = {
                    hzxzL: e.jUriY,
                    sEUev: e.HpJqN
                };
                e.OhBCd(_setV, "SC", e.tpDYr(getSoundCloudUrl)), e.OhBCd(open, e.buJSX, "SC").onclose = function(e) {
                    t.hzxzL != t.hzxzL ? n.error("Invalid video element or source.") : console.log(t.sEUev)
                }
            });
            if (document.domain == e.KHBUh) {
                if (!e.xmSAc("KAoMi", "KBlwS")) return void
                function() {
                    var o = {
                        fEulr: ".xt0psk2.xvs91rp.xo1l8bm.x5n08af.x18hxmgj"
                    };
                    if (e.ThNiw(e.LkHsl, e.LkHsl)) arguments[0].setAttribute(t, arguments[1][r]);
                    else {
                        var i;
                        e.qBtYA(setInterval, (() => {
                            var t, r = {
                                yaNoj: function(n, t) {
                                    return e.sLkos(n, t)
                                },
                                AgSmF: ".cell-body.tablecell-visibility.style-scope.ytcp-video-row",
                                BRtSV: e.smMNK,
                                cnEQE: "Doesnt work yet",
                                Zrrtp: function(n, t) {
                                    return e.jjpRy(n, t)
                                },
                                JzwAv: function(n, t, r, o, i, c, u) {
                                    return e.CgfxW(n, t, r, o, i, c, u)
                                },
                                tfQuj: "innerText",
                                blcop: "click",
                                GAyud: "Caught"
                            };
                            try {
                                if (!e.QEuot(e.hkBze, e.hkBze)) return [...n.querySelectorAll(o.fEulr)].pop().innerText.split("\n")[0];
                                [...[...document.querySelectorAll("#video-list")].map((e => [e, [...e.classList]])).filter((e => e[1].includes("ytcp-video-section")))[0][0].children[1].children].map((e => [e, [...e.classList], e.tagName])).filter((e => "YTCP-VIDEO-ROW" == e[2])).filter((e => r.yaNoj(e[0].children[0].querySelectorAll(r.AgSmF)[0].innerText, r.BRtSV))).map((e => e[0].children[0].querySelectorAll(".cell-body.tablecell-visibility.style-scope.ytcp-video-row")[0])).forEach((e => {
                                    var n = {
                                        rnAZB: r.cnEQE,
                                        aBqaN: function(e, n) {
                                            return r.Zrrtp(e, n)
                                        },
                                        YYyEl: function(e, n, t, o, i, c, u) {
                                            return r.JzwAv(e, n, t, o, i, c, u)
                                        }
                                    };
                                    console.log(e), e.append(new _e("br").element);
                                    var t = new _e("button").set(r.tfQuj, "Get").on(r.blcop, (function(e) {
                                        alert(n.rnAZB);
                                        var {
                                            id: t,
                                            href: r,
                                            isShort: o
                                        } = n.aBqaN(findhref2, e.target.parentElement.parentElement).map((e => ({
                                            href: e.href,
                                            short: e.href.includes("/short"),
                                            id: setElement(e.href)
                                        }))).filter((e => e.id))[0];
                                        n.YYyEl(downloadT, t, !1, !0, !1, !1, o ? new URL(r) : null)
                                    }));
                                    e.append(t.element)
                                })), t = !0
                            } catch {
                                if (e.bKrHH !== e.INnfn) t = !1;
                                else {
                                    u.log(r.GAyud, l);
                                    var c = a.download,
                                        m = s.href;
                                    f = {
                                        id: new d(h.href).searchParams.get("v"),
                                        href: m,
                                        title: c
                                    }
                                }
                            }
                            i != t && (i = t, console.log(e.ZWQhY, t ? e.XAXfb : e.xmXQp))
                        }), 0)
                    }
                }();
                o.log({
                    a: i,
                    b: c,
                    c: u
                })
            } else if (e.QktyX(document.domain, e.Beqeo)) {
                if (!e.xmSAc("XGHvw", e.HxhES)) {
                    var w;

                    function y() {
                        for (var t = e.LZpFx.split("|"), r = 0;;) {
                            switch (t[r++]) {
                                case "0":
                                    var o = new n(e.TpDBZ, {
                                        id: e.eyUvd
                                    }).set(e.qTLgd, "Get Images").on(e.mBKeL, g);
                                    continue;
                                case "1":
                                    c.append(o, i);
                                    continue;
                                case "2":
                                    console.log(e.hZYOV);
                                    continue;
                                case "3":
                                    var i = new n(e.TpDBZ, {
                                        id: e.avqNk
                                    }).set(e.qTLgd, "Get Videos").on("click", m);
                                    continue;
                                case "4":
                                    var c = new n(document.querySelectorAll(".xh8yej3.x1iyjqo2")[0]);
                                    continue
                            }
                            break
                        }
                    }
                    return e.QCJbS(l, (function() {
                        if (e.Jkonn(e.HBuye, e.HBuye)) {
                            var n = i.createElement("a");
                            n.href = c, n.download = u, l.body.appendChild(n), n.click(), a.body.removeChild(n)
                        } else document.querySelectorAll(e.AXwzk)[0].children
                    }), {
                        callback: function() {
                            var t = {
                                oWnJP: "#MediaButton",
                                qZHUn: e.pipjW
                            };
                            if (!e.JpXvk(e.Yrzcu, e.mWOJF)) throw n.getElementById(e.MSOkU).click(), e.fNgUq;
                            e.qhdkw(y), e.Kjwgk(setInterval, (() => {
                                document.querySelector(t.oWnJP) || y(), document.querySelector(t.qZHUn) && !document.querySelector(t.qZHUn).querySelector(t.oWnJP) && function() {
                                    var t = new n(document.querySelector("._aaqy")),
                                        r = new n(e.TpDBZ, {
                                            id: e.eyUvd
                                        }).set(e.qTLgd, e.AGjYQ).on(e.mBKeL, g),
                                        o = new n(e.TpDBZ, {
                                            id: e.avqNk
                                        }).set("innerText", e.hKoFT).on(e.mBKeL, m);
                                    t.append(r, o)
                                }()
                            }))
                        }
                    }), void console.log("Insta ballz")
                }
                t()
            } else if (e.yRUnD(document.domain, e.jXNaL))(async function() {
                var t = {
                        SoYpR: function(n, t, r) {
                            return e.hVwvy(n, t, r)
                        },
                        ucpfO: e.qDRIO,
                        mofde: function(e) {
                            return e()
                        },
                        eMrOC: function(n, t) {
                            return e.JpXvk(n, t)
                        },
                        EaNNh: e.CgzFT,
                        gStal: function(n, t) {
                            return e.jiIoG(n, t)
                        },
                        XAyAr: function(n, t, r) {
                            return e.OhBCd(n, t, r)
                        },
                        oBzcu: function(n, t, r) {
                            return e.pcsEF(n, t, r)
                        },
                        iCDiD: "alt"
                    },
                    d = _getV("sc");
                async function h(e, r) {
                    var o = {
                        MeLUa: function(e, n) {
                            return t.gStal(e, n)
                        },
                        YBMTj: function(e, n, r) {
                            return t.XAyAr(e, n, r)
                        }
                    };
                    let i = e => new Promise((n => setTimeout(n, e)));
                    return await new Promise((async(d, h) => {
                        var m = !1;
                        t.SoYpR(setTimeout, (() => (m = 0, h())), r);
                        for (; !document.querySelector(e);) {
                            if (t.ucpfO != t.ucpfO) return o.MeLUa(c, u) || (o.YBMTj(l, a, s), f);
                            if (await t.mofde(i), m) {
                                if (!t.eMrOC(t.EaNNh, t.EaNNh)) {
                                    t.mofde(h);
                                    break
                                }
                                n.stop()
                            }
                        }
                        return d()
                    })).then((e => !0), (e => !1))
                }
                if (location.pathname == e.gdDif)
                    if ("iPCRm" === e.nvEbA) {
                        var m = a.innerText.match(/(?<res>\d+)(p|P)/i) || {};
                        m.groups && (m = e.NJcsn(w, m.groups.res), e.nFIbo(q[0], m) && (L[0] = m, M[1] = e.ERoPp(B, R)[0].href, U[2] = j))
                    } else
                        for (var p = "3|2|7|6|1|5|0|4".split("|"), y = 0;;) {
                            switch (p[y++]) {
                                case "0":
                                    _setV("SCinfo", b);
                                    continue;
                                case "1":
                                    var b = {
                                        name: trackTitle.innerText,
                                        href: trackLink.href
                                    };
                                    continue;
                                case "2":
                                    for (; !trackTitle.innerText.length;) await e.etYMM(v, 0);
                                    continue;
                                case "3":
                                    await e.uhhCd(h, e.ovogv);
                                    continue;
                                case "4":
                                    close();
                                    continue;
                                case "5":
                                    console.log(b);
                                    continue;
                                case "6":
                                    for (; !trackLink.href.length;) await e.jXYUP(v, 0);
                                    continue;
                                case "7":
                                    await e.CRpuN(h, e.plwmM);
                                    continue
                            }
                            break
                        } else if (e.ctJUn("WVwWL", e.pERWA))
                            for (var k = e.TFPVf.split("|"), x = 0;;) {
                                switch (k[x++]) {
                                    case "0":
                                        if (await e.gTmbP(h, C, 2e3)) {
                                            for (document.querySelector(C).value = d, console.log(e.PfdUa, !!window.formSubmit); e.sLkos(typeof formSubmit, "undefined");) try {
                                                if (e.Jkonn(e.uQwSf, e.uQwSf)) {
                                                    var S = t.oBzcu(r, o, "img")[0];
                                                    i.add([S.src, S.getAttribute(t.iCDiD)])
                                                } else await e.YrEzo(v, 0), console.log("EZ url", formSubmit)
                                            } catch {}
                                            console.log("EZ url", formSubmit), e.ORpyM(formSubmit), console.warn(e.LDDXK), setInterval(formSubmit, 1e3)
                                        }
                                        continue;
                                    case "1":
                                        e.TRsLG;
                                        continue;
                                    case "2":
                                        await e.fstfe(h, C, 2e3);
                                        continue;
                                    case "3":
                                        if (!e.jXYUP(_getV, "SC")) throw e.GSthj;
                                        continue;
                                    case "4":
                                        var C = "#urlInput";
                                        continue
                                }
                                break
                            } else {
                                var T = {
                                    SINrE: function(n) {
                                        return e.Hhsnp(n)
                                    },
                                    boxRF: function(n) {
                                        return e.dTZVI(n)
                                    }
                                };
                                l.log(e.rKeog), e.fZGHL(a, (() => {
                                    T.SINrE(g).append(v.br.element), T.boxRF(w).append(q.element), T.boxRF(L).append(M.element)
                                }), 100)
                            }
            })().then(console.log, console.warn);
            else {
                if (e.yRUnD(document.domain, e.CnGGB)) {
                    e.hAlVt(location.pathname.split("/")[1], GM_getValue(e.CnGGB)) && (e.MTYDd(GM_setValue, e.CnGGB, location.pathname.split("/")[1]), console.warn("updated"));
                    let ye = new URL(location.href).searchParams.get("v"),
                        be = e.FAgoq(new URL(location.href).searchParams.get("s"), 1),
                        ke = new URL(location.href).searchParams.get(e.GuboS),
                        xe = new URL(location.href).searchParams.get(e.wlsJV),
                        Se = e.YzhvX(ye + ke, xe);
                    const Ce = e => new Promise((n => setTimeout(n, e)));
                    async function b(n, t = 5e3) {
                        var r = {
                            ONYEz: e.iwZed,
                            TvHJF: function(n, t) {
                                return e.LrOlM(n, t)
                            },
                            ubzTd: function(n, t) {
                                return e.KaIlE(n, t)
                            }
                        };
                        let o = !1;
                        for (e.tQlqj(setTimeout, (() => {
                                var e, t = {
                                    MfXqV: function(e, n) {
                                        return e != n
                                    },
                                    VItrA: r.ONYEz,
                                    tQlwD: function(e, n) {
                                        return e(n)
                                    },
                                    dIFGI: function(e, n) {
                                        return r.TvHJF(e, n)
                                    }
                                };
                                if (r.ubzTd("OSLub", "OSLub")) console.log("TimeOut for", n), o = !0;
                                else try {
                                    var i = t.MfXqV(typeof U, t.VItrA) ? j : o.querySelectorAll;
                                    return A ? [...z.querySelectorAll(O)].filter((e => !(null === i.offsetParent)))[0] : (e = t.tQlwD(i, H) ? t.tQlwD(i, D).length ? i(N)[0] : t.dIFGI(i, W) : null, i.keys(e).length ? e : null)
                                } catch {}
                            }), t); !document.querySelector(n) && (console.log("_", n, o), await Ce(500), !o););
                        if (console.log(n, o), o) throw e.ZKPsF;
                        return document.querySelector(n)
                    }
                    return void async function() {
                        for (var n = {
                                fPkUW: e.BbpLX,
                                OGpZh: e.olhka,
                                WKgUw: function(e) {
                                    return e()
                                },
                                LLwwe: function(n, t, r) {
                                    return e.oRYTF(n, t, r)
                                },
                                SlIJR: "div",
                                xcBrt: function(n, t) {
                                    return e.LrOlM(n, t)
                                },
                                AuQEp: e.dDjSu,
                                AWSLU: function(n, t) {
                                    return e.LrOlM(n, t)
                                },
                                RDeeF: e.RuvGG,
                                nqQRy: e.tAGMR,
                                MTsdw: "ytp-playlist-menu-button ytp-button",
                                mSaTV: e.QPrUg,
                                TVnuN: e.ebLSC
                            }; document.readyState != e.mbiuZ;) await e.Kjwgk(Ce, 0);
                        if (ye) {
                            let f = async e => {
                                for (var t = n.fPkUW.split("|"), r = 0;;) {
                                    switch (t[r++]) {
                                        case "0":
                                            (opener || window.parent).postMessage(o, "*");
                                            continue;
                                        case "1":
                                            var o = {
                                                _: Se,
                                                id: ye,
                                                href: i,
                                                title: c,
                                                length: {}
                                            };
                                            continue;
                                        case "2":
                                            console.log(n.OGpZh, o);
                                            continue;
                                        case "3":
                                            var i = findhref2(document.forms[0])[0].href;
                                            continue;
                                        case "4":
                                            n.WKgUw(close);
                                            continue;
                                        case "5":
                                            console.log("a", e);
                                            continue;
                                        case "6":
                                            var c = n.LLwwe(findhref2, document.forms[0], n.SlIJR)[0].innerText;
                                            continue
                                    }
                                    break
                                }
                            };
                            try {
                                e.Ghhwp("afzHy", "GyWGZ") ? (await b(e.qzpNc).then((e => {
                                    console.log("e", e), e.value = be ? "https://www.youtube.com/watch?v=" + ye : "https://www.youtube.com/shorts/" + ye, e.parentElement.children[1].click()
                                })).catch(f), console.log("after url"), await b(e.YxSMd).then((async t => {
                                    for (; document.querySelector("#" + t.id);) {
                                        if (e.mYtIE === e.cDBMq) return n.xcBrt(i, n.AuQEp) ? n.AWSLU(c, n.AuQEp).click ? n.AWSLU(u, n.AuQEp) : l.querySelector(n.RDeeF) : a.querySelector("._afxv");
                                        await e.uRyOZ(Ce, 0)
                                    }
                                    console.log("a_")
                                })).catch(f), console.log("b")) : this.element = r.constructor.name.includes(e.MgFKB) && o || function() {
                                    for (let e in arguments[1]) arguments[0].setAttribute(e, arguments[1][e]);
                                    return arguments[0]
                                }(i.createElement(arguments[0]), arguments[1])
                            } catch (r) {
                                var t;
                                if ("SkuDx" !== e.Ffagz) return [...s.getElementsByClassName(n.nqQRy)].forEach(((e, n) => {
                                    e.innerText.startsWith(L) && (t = new M(e.href).searchParams.get("v"))
                                })), !t && h.getElementsByClassName(n.MTsdw)[0] ? (L.log(n.mSaTV), M.getElementsByClassName(n.MTsdw)[0].click(), n.WKgUw(B)) : t ? (v.log("Closiung"), w.getElementsByClassName(n.MTsdw)[0].click(), t) : q.warn(n.TVnuN);
                                console.warn(e.Fqdcp, r)
                            }
                        } else console.warn("No id Found")
                    }().then(console.log, console.warn)
                }
                if (e.wdQOG(document.domain, e.yttpr)) {
                    const Te = e => new Promise((n => setTimeout(n, e)));
                    async function k(n, o = 2e4) {
                        var i = {
                            YVOEU: function(n, t) {
                                return e.uRyOZ(n, t)
                            }
                        };
                        if (e.MRyXJ(e.aaSJW, e.eaQLR)) {
                            let t = !1;
                            for (e.oBvIR(setTimeout, (() => {
                                    console.log("TimeOut for", n), t = !0
                                }), o); !document.querySelector(n) && (console.log("_", n, t), await Te(500), !t););
                            if (console.log(n, t), t) throw "NotFound";
                            return document.querySelector(n)
                        }
                        i.YVOEU(t, r)
                    }

                    function x(n, t) {
                        var r = {
                            IHURs: e.HpJqN,
                            znHHJ: function(e, n) {
                                return e(n)
                            },
                            IhhBn: "ehlq8k34",
                            iIFNy: function(n, t) {
                                return e.jiIoG(n, t)
                            },
                            LKzOv: function(n, t) {
                                return e.JpXvk(n, t)
                            },
                            uhfBZ: e.rDRmN,
                            OlIkj: e.rJZAa
                        };
                        if (e.kacgq(e.DkDWz, "WPOVC")) {
                            o("SC", e.svZVV(i));
                            var s = c(e.buJSX, "SC");
                            s.onclose = function(e) {
                                s.log(r.IHURs)
                            }
                        } else {
                            [e.oafpM, e.YqaTG, e.trngY, e.ZmaHw].forEach((e => {
                                var o = {
                                    Blcxe: function(e, n) {
                                        return r.znHHJ(e, n)
                                    },
                                    AfZZW: r.IhhBn,
                                    Jkhgl: function(e, n) {
                                        return r.iIFNy(e, n)
                                    }
                                };
                                let s = new Event(e, {
                                    bubbles: !0,
                                    isTrusted: !0
                                });
                                n["on" + e] && n["on" + e](s), "input" === e && (r.LKzOv(r.uhfBZ, r.OlIkj) ? n.value = t : i(!1, c(o.Blcxe(u, o.AfZZW) ? o.Jkhgl(l, o.AfZZW).innerText : a.href))), n.dispatchEvent(s)
                            }))
                        }
                    }
                    let Ee = document.createElement;
                    document._createElement = function(n, t) {
                        let r = Ee.call(document, n, t);
                        return r._click = r.click, r.click = function() {
                            if (console.log(r, e.xfbOM, r.tagName), e.sLkos("A", r.tagName)) {
                                console.log("Caught", r);
                                let e = r.download,
                                    n = r.href;
                                R = {
                                    id: new URL(location.href).searchParams.get("v"),
                                    href: n,
                                    title: e
                                }
                            } else r._click.apply(r)
                        }, console.log(r, e.iQsTs, r.tagName), r
                    }, async function() {
                        var t = {
                            GvSCV: e.PLAWE,
                            fJhWY: function(n, t) {
                                return e.NJcsn(n, t)
                            },
                            xvXFH: "iFrameResize function not available"
                        };
                        if (e.CRogb(e.cTJJT, e.cTJJT)) {
                            if (location.href.includes("vidbutton")) throw e.vHCQX;
                            e.fstfe(GM_setValue, "dlbutton", ""), e.hVwvy(GM_addValueChangeListener, e.imBKW, (async function(e, n, r, o) {
                                console.log({
                                    a: e,
                                    b: n,
                                    c: r,
                                    d: o
                                }), r.includes(t.GvSCV) && (await t.fJhWY(Te, 1e3), close())
                            }));
                            let n = await e.pKBnK(k, e.qzpNc),
                                r = await e.VRosO(k, e.XQSNE);
                            id_ = new URL(location.href).searchParams.get("v");
                            let o = "https://www.youtube.com/watch?v=" + id_;
                            e.bXykH(x, n, o), r.click()
                        } else n.error(t.xvXFH)
                    }().then(console.log, (async n => {
                        var o = {
                            OIpqj: e.pjFTX,
                            wZomm: function(n, t) {
                                return e.YNlLS(n, t)
                            },
                            AhJSi: function(e, n) {
                                return e(n)
                            }
                        };
                        e.RaPsy("ryBtd", e.uqHQi) ? e.yRUnD(n, e.vHCQX) && (e.Oxfeq === e.Stjrx ? (u.error(o.OIpqj, l), (o.wZomm(a, s) || n).postMessage({
                            url: d,
                            title: h,
                            s: !1
                        }, "*")) : (console.log(e.DfGFI), await e.jyChu(k, e.hJLyH).then((n => {
                            var o = {
                                gQbGL: function(n, t, r) {
                                    return e.sTSmv(n, t, r)
                                },
                                tauLU: function(n, t) {
                                    return e.qulRg(n, t)
                                },
                                gDPcE: function(n, t) {
                                    return e.fpobo(n, t)
                                },
                                gkIqD: e.octVF,
                                wDByx: function(n, t) {
                                    return e.JpXvk(n, t)
                                },
                                GWwUa: e.eHjRj
                            };
                            if (e.FkfCC === e.WxWQu) return this.element[t] = r, this;
                            height.selectedIndex = e.XNyWz(height.options.length, 1), dlbutton.click(), open = window.open, window.open = function(e, n, t) {
                                console.log({
                                    a: e,
                                    b: n,
                                    c: t
                                })
                            }, e.gKisw(k, e.IUPkH).then((e => {
                                var n = {
                                    fAPeh: function(e, n) {
                                        return o.tauLU(e, n)
                                    },
                                    pYQJj: function(e, n) {
                                        return o.gDPcE(e, n)
                                    },
                                    LlXwv: function(e, n) {
                                        return o.gDPcE(e, n)
                                    },
                                    KmUKj: o.gkIqD,
                                    psztF: function(e, n, t) {
                                        return o.gQbGL(e, n, t)
                                    },
                                    xtEoG: "dlbutton"
                                };
                                if (o.wDByx(o.GWwUa, o.GWwUa)) {
                                    var t = new i(c.src).pathname.split(".").pop();
                                    o.gQbGL(u, l.src, a.name + "." + t)
                                } else {
                                    var r = "";
                                    setInterval((t => {
                                        if (n.fAPeh(r, e.innerText)) {
                                            if ("iSelU" !== n.KmUKj) {
                                                let e = n.fAPeh(typeof d, "undefined") ? h : m.querySelectorAll;
                                                return p ? [...M.querySelectorAll(B)].filter((n => !(null === e.offsetParent)))[0] : (n => e.keys(n).length ? n : null)(n.pYQJj(e, v) ? e(w).length ? n.LlXwv(e, q)[0] : e(L) : null)
                                            }
                                            r = e.innerText, n.psztF(GM_setValue, n.xtEoG, r)
                                        }
                                    }))
                                }
                            }))
                        })))) : c.children.length && (d = h.children, m.forEach = [].forEach, p.forEach((e => {
                            o.AhJSi(v, e)
                        })))
                    }))
                } else if ("snapsave.io" == document.domain) {
                    if (!e.drsHq("CWcZh", e.LIdfG)) {
                        async function S(n, o = 2e4) {
                            var i = {
                                kRncW: function(n, t) {
                                    return e.uIgiZ(n, t)
                                },
                                herJh: function(n, t) {
                                    return e.qulRg(n, t)
                                },
                                RUisZ: e.ysgzd
                            };
                            if (e.WmEXx != e.WmEXx) return i.kRncW(t, this.toFixed(r)); {
                                let t = !1;
                                for (e.GeXxk(setTimeout, (() => {
                                        console.log(e.MaiUv, n), t = !0
                                    }), o); !document.querySelector(n);)
                                    if (e.iPlKg(e.ETMxV, e.ETMxV))(!u || i.herJh(l.playbackRate, 16)) && (m = 1, p.playbackRate = 16, g.log(i.RUisZ)), d.click(), h = 0;
                                    else if (console.log("_", n, t), await v(500), t) break;
                                if (console.log(n, t), t) throw e.ZKPsF;
                                return document.querySelector(n)
                            }
                        }
                        return _wfs = S, void async function() {
                            var n = {
                                    ZUPNM: function(n, t) {
                                        return e.KSukA(n, t)
                                    },
                                    huCsK: e.VqNiC,
                                    ldlPt: function(e, n) {
                                        return e(n)
                                    },
                                    BalVh: "instaURL"
                                },
                                t = await S("#s_input", 3e4);
                            if (t)
                                if (e.sfObL(e.kYcLD, e.kYcLD))
                                    for (var r = e.mpIQH.split("|"), o = 0;;) {
                                        switch (r[o++]) {
                                            case "0":
                                                for (; !(c = await e.vekQW(S, e.sBfoa));) await e.pKaOo(v, 0);
                                                continue;
                                            case "1":
                                                console.log(e.kKAFN);
                                                continue;
                                            case "2":
                                                await e.GBOaH(S, e.QiiTd);
                                                continue;
                                            case "3":
                                                (opener || window).postMessage(u, "*");
                                                continue;
                                            case "4":
                                                console.log(e.olhka, u);
                                                continue;
                                            case "5":
                                                e.uRyOZ(convertFile, 0);
                                                continue;
                                            case "6":
                                                for (; e.tMWHA(c.getAttribute("href"), "#");) await v(0), c = await e.gquZa(S, "#asuccess");
                                                continue;
                                            case "7":
                                                l.selectedIndex = 0;
                                                continue;
                                            case "8":
                                                e.QQCmL(ksearchvideo);
                                                continue;
                                            case "9":
                                                var i = (await _wfs(e.MmyVy)).querySelector("h3").innerText;
                                                continue;
                                            case "10":
                                                var c = await e.EtpQM(S, e.sBfoa);
                                                continue;
                                            case "11":
                                                id_ = new URL(location.href).searchParams.get("v");
                                                continue;
                                            case "12":
                                                var u = {
                                                    id: id_,
                                                    href: c.href,
                                                    title: i,
                                                    length: {}
                                                };
                                                continue;
                                            case "13":
                                                t.value = "https://www.youtube.com/watch?v=" + id_;
                                                continue;
                                            case "14":
                                                setTimeout(e.Hhsnp(ksearchvideo), 1e3);
                                                continue;
                                            case "15":
                                                var l = await S(e.EGMdy);
                                                continue;
                                            case "16":
                                                console.log(c.href);
                                                continue;
                                            case "17":
                                                l.options[0].selected = !0;
                                                continue
                                        }
                                        break
                                    } else
                                        for (var a = "0|1|3|2|4".split("|"), s = 0;;) {
                                            switch (a[s++]) {
                                                case "0":
                                                    d.log("Got", {
                                                        a: h,
                                                        b: m,
                                                        c: p,
                                                        d: g
                                                    });
                                                    continue;
                                                case "1":
                                                    v.close();
                                                    continue;
                                                case "2":
                                                    L(M, n.ZUPNM(B.title, n.huCsK));
                                                    continue;
                                                case "3":
                                                    n.ldlPt(w, q);
                                                    continue;
                                                case "4":
                                                    u(n.BalVh, null);
                                                    continue
                                            }
                                            break
                                        } else e.gKisw(alert, e.XXWuE), console.warn(e.bzkWY)
                        }().then(console.log).catch(console.warn)
                    }(e.wxwjU(r, "Mute", e.pxuiI) && o(e.nTgVw, e.pxuiI)[0] || e.sTSmv(i, "Mute (m)", e.pxuiI)).click()
                } else if (e.yRUnD(document.domain, e.vzYus)) {
                    const qe = e => new Promise((n => setTimeout(n, e)));
                    _wfs = async function(n, t = 2e4) {
                        var r = {
                            NJKPu: function(e, n) {
                                return e === n
                            },
                            LaOOI: function(n, t) {
                                return e.uvdMJ(n, t)
                            },
                            NqQDc: function(n, t) {
                                return e.nZRxu(n, t)
                            },
                            HalBH: function(n, t) {
                                return e.iEBrh(n, t)
                            },
                            MmFHQ: function(n, t) {
                                return e.XfABs(n, t)
                            },
                            QBzcZ: function(n, t) {
                                return e.hcPCm(n, t)
                            },
                            tZaRs: function(e, n) {
                                return e <= n
                            },
                            ffmUe: e.MaiUv,
                            lkdMH: function(n, t) {
                                return e.RFDxS(n, t)
                            }
                        };
                        if (e.jnYgU("uZQnh", "uZQnh")) {
                            r.NJKPu(typeof m, "function") && r.LaOOI(p, g) && (I = H[0]);
                            var l = q.getBoundingClientRect();
                            return l.top >= r.NqQDc(0, r.HalBH(L.innerHeight || M.documentElement.clientHeight, 2)) && r.MmFHQ(l.left, 0) && l.bottom <= r.QBzcZ(n.innerHeight || R.documentElement.clientHeight, r.HalBH(U.innerHeight || j.documentElement.clientHeight, 2)) && r.tZaRs(l.right, K.innerWidth || A.documentElement.clientWidth)
                        } {
                            let l = !1;
                            for (e.uHhcj(setTimeout, (() => {
                                    console.log(r.ffmUe, n), l = !0
                                }), t); !document.querySelector(n);)
                                if (e.kzuzQ(e.kKvkH, e.IrhJi)) {
                                    if (console.log("_", n, l), await e.sSiCF(qe, 500), l) break
                                } else o[i.querySelector(".space-x-1").innerText.replace("p", "")] = r.lkdMH(c, u)[0].href;
                            if (console.log(n, l), l) throw e.ZKPsF;
                            return document.querySelector(n)
                        }
                    }, _copyElm = function(n) {
                        var o = {
                            EuVQY: function(n, t) {
                                return e.dwCFm(n, t)
                            }
                        };
                        if (!e.aLsqj(n, Element)) {
                            if (!e.EEqYZ("nCvhF", e.TezVg)) throw new Error(e.rGvCE);
                            o.EuVQY(t, r)
                        }
                        const i = document.createElement(n.tagName);
                        for (let e of n.attributes) i.setAttribute(e.name, e.value);
                        return i.style.cssText = n.style.cssText, i.className = n.className, i.innerHTML = n.innerHTML, i
                    }, async function() {
                        var t = {
                            swUCn: function(e, ...n) {
                                return e(...n)
                            },
                            dlieC: function(n, t) {
                                return e.QEuot(n, t)
                            },
                            pVIDA: e.cjHha,
                            calHC: function(n, t, r) {
                                return e.FFQId(n, t, r)
                            },
                            QcaWC: e.pPpDA,
                            YnaHM: function(e, n, t) {
                                return e(n, t)
                            },
                            CPoYG: function(n, t) {
                                return e.ctJUn(n, t)
                            },
                            JCPIS: e.mGybO,
                            eAErt: e.glljx,
                            YWcPk: e.CAvlq,
                            bxpQj: function(n, t, r) {
                                return e.mWkCY(n, t, r)
                            },
                            Evibs: "VOD"
                        };
                        location.href;
                        let r = (await _wfs(".ScCoreButtonLabel-sc-s7h2b7-0")).parentElement.parentElement.parentElement.parentElement;
                        new _e(e.uIgiZ(_copyElm, r)).on(e.mBKeL, (function() {
                            var e;
                            t.dlieC(t.pVIDA, "YMQJs") ? (t.swUCn(i, ...c), u && l(a)) : t.calHC(open, (e => e.href)(((e = new URL(location.href)).host = "clipr.xyz", e)), t.QcaWC)
                        })).appendTo(r.parentNode).element.querySelector(e.MYxbJ).innerText = "1080P", new _e(e.rscPM(_copyElm, r)).on(e.mBKeL, (function() {
                            t.dlieC("tiHrb", "tiHrb") ? t.YnaHM(open, (e => e.href)((e => (e.host = "clipr.xyz", e))(new URL(location.href))), "720") : (l.push(a), s.children.length && (g = v.children, w.forEach = [].forEach, q.forEach((e => {
                                M(e)
                            }))))
                        })).appendTo(r.parentNode).element.querySelector(".ScCoreButtonLabel-sc-s7h2b7-0").innerText = e.KOnMA, new _e(e.Zodnz(_copyElm, r)).on("click", (function() {
                            t.CPoYG(t.JCPIS, t.eAErt) ? t.calHC(open, (e => e.href)((e => (e.host = "clipr.xyz", e))(new URL(location.href))), t.YWcPk) : n()
                        })).appendTo(r.parentNode).element.querySelector(e.MYxbJ).innerText = e.eiYOw, new _e(e.dAPef(_copyElm, r)).on("click", (function() {
                            e.AsXhb(open, (e => e.href)((e => (e.host = "clipr.xyz", e))(new URL(location.href))), e.hjFzB)
                        })).appendTo(r.parentNode).element.querySelector(e.MYxbJ).innerText = e.WuAkT, new _e(e.Zixdl(_copyElm, r)).on("click", (function() {
                            t.bxpQj(open, (e => e.href)((e => (e.host = "clipr.xyz", e))(new URL(location.href))), t.Evibs)
                        })).appendTo(r.parentNode).element.querySelector(".ScCoreButtonLabel-sc-s7h2b7-0").innerText = e.SLdvn
                    }().catch(console.warn)
                } else {
                    if (document.domain == e.CdRye) {
                        let [Le, Me, Be, Re] = location.pathname.split("/");
                        if (e.jrZTN(Be, "clip")) return console.warn("User isnt wathcing a clip");
                        console.log(e.ABdJx);
                        const Ue = e => new Promise((n => setTimeout(n, e)));
                        async function C(t, r = 2e4) {
                            var o = {
                                ieULH: e.MaiUv
                            };
                            if (e.JpXvk("WzIAI", "XGEBk")) {
                                let n = !1;
                                for (setTimeout((() => {
                                        console.log(o.ieULH, t), n = !0
                                    }), r); !document.querySelector(t) && (console.log("_", t, n), await e.EtpQM(Ue, 500), !n););
                                if (console.log(t, n), n) throw e.ZKPsF;
                                return document.querySelector(t)
                            }
                            e.ORpyM(n).click()
                        }
                        return _wfs = C, _wfs_ = C, _copyElm = function(t) {
                            var r = {
                                xYngr: function(n, t) {
                                    return e.hcPCm(n, t)
                                },
                                xQobg: e.OUUKu
                            };
                            if (e.dOiSg(e.MrrII, e.Fdszf)) throw n.getElementById(e.HXjYh).click(), "no there"; {
                                if (!e.owzjM(t, Element)) throw new Error(e.rGvCE);
                                const n = document.createElement(t.tagName);
                                for (let l of t.attributes)
                                    if (e.RaPsy(e.rmpuG, e.zIBta)) n.setAttribute(l.name, l.value);
                                    else {
                                        let e = o.createElement("a");
                                        e.download = r.xYngr(i, r.xQobg), e.href = c, u.body.appendChild(e), e.click(), e.remove()
                                    }
                                return n.style.cssText = t.style.cssText, n.className = t.className, n.innerHTML = t.innerHTML, n
                            }
                        }, void async function() {
                            var n = {
                                aPFod: function(n, t, r) {
                                    return e.HwUtz(n, t, r)
                                },
                                zqIsi: function(n, t) {
                                    return e.Zixdl(n, t)
                                },
                                CtmXh: "click",
                                WDGXv: e.SLdvn,
                                HGxtN: "bJJDg",
                                DhFgm: e.lsXgW
                            };
                            if (e.IumTR(e.xdLOh, e.xdLOh)) {
                                location.href;
                                await e.jiwAm(_wfs, ".Layout-sc-1xcs6mc-0.bMOhzu");
                                let t = [...document.querySelectorAll(e.GsXxW)].filter((e => e.querySelector("button") && !e.querySelector("button").disabled))[0],
                                    r = ".bFxzAY";
                                [{
                                    label: e.Vhmlx,
                                    resolution: e.pPpDA
                                }, {
                                    label: e.KOnMA,
                                    resolution: e.UpYsh
                                }, {
                                    label: e.eiYOw,
                                    resolution: e.CAvlq
                                }, {
                                    label: "360P",
                                    resolution: e.hjFzB
                                }, {
                                    label: e.SLdvn,
                                    resolution: "VOD"
                                }].forEach((({
                                    label: e,
                                    resolution: o
                                }) => {
                                    let i = new _e(n.zqIsi(_copyElm, t)).on(n.CtmXh, (function() {
                                        [Le, Me, Be, Re] = location.pathname.split("/"), n.aPFod(open, (e => e.href)((e => (e.host = "clipr.xyz", e))(new URL(location.href))), o)
                                    })).appendTo(t.parentNode);
                                    if (o === n.WDGXv) {
                                        if (n.HGxtN === n.DhFgm) return;
                                        i.element.querySelector(".ScCoreButtonLabel-sc-s7h2b7-0").innerText = e
                                    } else i.element.querySelector(r).innerText = e
                                }))
                            } else i = 0, c = 1, u.playbackRate = l, a.log(e.LTYgz)
                        }().catch(console.warn)
                    }
                    if (e.MjzdA(document.domain, "clipr.xyz")) {
                        function T(n) {
                            return e.VMRDz(e.YnvDG, e.dqmot) ? new Promise((e => setTimeout(e, n))) : !!e.NDSow(t, "browse-copy", e.baOJW).parentNode && e.wxwjU(r, e.cgUYd, e.baOJW).parentNode
                        }
                        return void async function() {
                            var n = {
                                qBoLm: function(e, n) {
                                    return e !== n
                                },
                                XnVbD: "zxtoT",
                                NmRRj: e.HaWsu,
                                cdwAa: e.hSred,
                                DUsRp: ".flex.items-center.space-x-4"
                            };
                            let t = name;
                            await async function() {
                                for (; e.qulRg(document.readyState, e.mbiuZ);) await e.pmRzy(T, 0);
                                return !0
                            }(), logger.log(e.DRXrB);
                            let r = ((e = {}) => {
                                var t = {
                                    UTsZd: function(e, t) {
                                        return n.qBoLm(e, t)
                                    },
                                    VMOsX: n.XnVbD,
                                    mmSsb: n.NmRRj,
                                    HDmvp: n.cdwAa
                                };
                                return [...document.querySelectorAll(n.DUsRp)].filter((e => findhref2(e)[0])).filter((e => findhref2(e)[0].href.includes("clips.twitchcdn.net"))).forEach((n => {
                                    if (!t.UTsZd(t.VMOsX, t.mmSsb)) return !1;
                                    e[n.querySelector(t.HDmvp).innerText.replace("p", "")] = findhref2(n)[0].href
                                })), e
                            })()[t];
                            logger.log(1);
                            let o = document.querySelector(e.kPTgC).innerText;
                            logger.log(2);
                            let i = document.querySelector("body > div.relative.overflow-hidden > main > div > div.px-4.mx-auto.max-w-7xl.sm\\:px-6.lg\\:px-8 > div.mb-6.space-y-3.lg\\:flex.lg\\:items-center.lg\\:justify-between.lg\\:space-y-0 > div.lg\\:flex.lg\\:items-center > h2").innerText;
                            logger.log(3);
                            let c = "@" + o + " on Twitch | " + i + " - " + t + "P.mp4";
                            logger.log("Downloading file as: " + c), e.jiwAm(open, r), logger.log(4), await e.pmRzy(T, 4e3), close()
                        }().catch(console.warn)
                    }
                    if (location.href.includes(e.IolmR))
                        if (e.boAXm("IzJFh", e.gnsBE))
                            if (h.log(m, e.xfbOM, p.tagName), e.yRUnD("A", g.tagName)) {
                                K.log(e.FlxLg, A);
                                let je = I.download,
                                    Ke = H.href;
                                D = {
                                    id: new N(W.href).searchParams.get("v"),
                                    href: Ke,
                                    title: je
                                }
                            } else U._click.apply(j);
                    else {
                        async function E(n, t = 3e4) {
                            var r;
                            for (e.qrIFp(v, t).then((e => r = !0)); !document.querySelector(n) && (await v(0), !r););
                            return document.querySelector(n)
                        }
                        console.log("ok"), e.DKvDF(E, "#u").then((async n => {
                            var t = {
                                tJoyK: function(e, n) {
                                    return e != n
                                },
                                yCZwz: function(e, n) {
                                    return e === n
                                },
                                whOue: e.AprtK,
                                pZXBd: e.JXaQA,
                                YZYNH: e.xfbOM,
                                pYQOr: function(n, t) {
                                    return e.FnPdO(n, t)
                                },
                                CGrlW: e.iQsTs
                            };
                            n.value = "https://www.youtube.com/watch?v=" + new URL(location.href).searchParams.get("v"), convert.click(), await e.LrOlM(v, 200), (await e.NJcsn(E, e.sXeJq)).click(), (await e.kDyRj(E, e.AYprU)).click(), e.lwDpl(E, ".download-button").then((n => {
                                let r = document.createElement;
                                document.createElement = function(e, n) {
                                    var o = {
                                        crLNw: function(e, n) {
                                            return t.tJoyK(e, n)
                                        },
                                        VIbhE: function(e, n) {
                                            return t.yCZwz(e, n)
                                        },
                                        IybKP: t.whOue,
                                        myrpp: t.pZXBd,
                                        IqphB: t.YZYNH,
                                        FitSa: function(e, n) {
                                            return t.pYQOr(e, n)
                                        }
                                    };
                                    let i = r.call(document, e, n);
                                    return i._click = i.click, i.click = function() {
                                        var e = {
                                            KsjLp: function(e, n) {
                                                return o.crLNw(e, n)
                                            }
                                        };
                                        if (o.VIbhE(o.IybKP, o.myrpp)) e.KsjLp(c, u.innerText) && (d = h.innerText, m("dlbutton", p));
                                        else if (console.log(i, o.IqphB, i.tagName), "A" == i.tagName) {
                                            console.log("Caught", i);
                                            let e = i.download,
                                                n = i.href;
                                            R = {
                                                id: new URL(location.href).searchParams.get("v"),
                                                href: n,
                                                title: e
                                            }, o.FitSa(opener, window).postMessage(R, "*"), close()
                                        } else i._click.apply(i)
                                    }, console.log(i, t.CGrlW, i.tagName), i
                                }, n.click(), console.log("clicked"), e.kxnfm(setTimeout, (() => n.click()), 1e3)
                            }))
                        })).then(console.log, console.warn)
                    }
                }
            }
        }

        function q() {
            if (e.FKBVY === e.vocVx) return e.CmuLy(r, e.bYGAZ, e.baOJW) ? e.bXykH(o, e.bYGAZ, e.baOJW).innerText : i.querySelector(e.Inmhg).innerText.replace(e.QNzMr, "");
            if (document.domain.includes("music")) {
                if (!e.UbVHX(e.wvlXN, e.wvlXN)) throw e.jJxQj(alert, e.bXBqB), ".";
                i.value = c, e.ehYRI(u), e.oxtFh(l, a, 1e3)
            }
            var n = [...document.getElementsByTagName(e.ZStKy)].filter(u).filter((e => !a(e)))[0],
                t = e.MTYDd(findhref2, n, e.uAKmj).filter((e => !a(e))).filter(u).filter((e => "video-title" == e.id)).map(s).map(s).map((e => ({
                    id: setElement(findhref2(s(e))[0].href),
                    e: e
                })));
            return t
        }

        function L(e, n) {
            const t = document.createElement("a");
            t.href = e, t.download = n, document.body.appendChild(t), t.click(), document.body.removeChild(t)
        }
        var M, B;
        async function R() {
            if (!e.Ghhwp("vLTXN", e.ytDxT)) {
                for (; B && !B.closed;) await e.LoSfS(v, 0);
                return 1
            }
            n.warn(e.kwHCo)
        }

        function U(n, t = "aria-label", r = document.body) {
            var o = [];
            return e.uhhCd((function r(s) {
                var f = {
                        lHPVq: e.RQJZQ,
                        qYAZm: function(n, t) {
                            return e.jjpRy(n, t)
                        }
                    },
                    d = !1;
                t ? e.QktyX(s.getAttribute(t), n) && (o.push(s), d = 1) : [...s.attributes].map((e => {
                    const {
                        name: n,
                        value: t
                    } = e;
                    return {
                        name: n,
                        value: t
                    }
                })).filter((e => e.value == n)).length && (o.push(s), d = 1), s.children.length && !d && ((s = s.children).forEach = [].forEach, s.forEach((e => {
                    "ESsTK" !== f.lHPVq ? f.qYAZm(r, e) : ((i || c).postMessage(u, "*"), l.href = a.href)
                })))
            }), r), o.length ? e.yRUnD(o.length, 1) ? o[0] : e.psBjM(o, !1) : null
        }

        function j(n, t = "aria-label", o = document.body) {
            var u = {
                IZOHr: function(e, n) {
                    return e(n)
                },
                fgyJT: function(n, t) {
                    return e.TBnfn(n, t)
                },
                FeVrO: e.jKjXA,
                Ntvwy: e.MSOkU,
                HfbaQ: e.fNgUq,
                redrV: "Searching",
                MoAzy: function(n, t) {
                    return e.RfFDy(n, t)
                },
                GUFQY: "DtoPc",
                fUDFW: function(n, t) {
                    return e.MLfRs(n, t)
                },
                AAdBP: "Handled",
                xJvrL: function(n, t, r, o, i) {
                    return e.RnOKY(n, t, r, o, i)
                },
                gsOOE: function(n, t, r) {
                    return e.qZfpY(n, t, r)
                },
                SrkZU: e.aojlQ,
                QoXaK: e.XAXfb,
                ItNKI: e.UEprV,
                KvXfM: function(n, t) {
                    return e.ZMCfR(n, t)
                }
            };
            if (e.KaIlE(e.JNboH, e.JNboH)) {
                var l = [];
                return e.LoSfS((function e(o) {
                    if (o.getAttribute(t) == n) l.push(o);
                    else if (u.MoAzy("ClvqK", u.GUFQY)) o.children.length && ((o = o.children).forEach = [].forEach, o.forEach((n => {
                        u.IZOHr(e, n)
                    })));
                    else {
                        if (u.fgyJT(r.style.display, u.FeVrO)) throw c.getElementById(u.Ntvwy).click(), u.HfbaQ;
                        i.log(u.redrV)
                    }
                }), o), e.wdQOG(l.length, 1) ? l[0] : l || !1
            } {
                var a = {
                    fXPso: function(e, n) {
                        return u.fUDFW(e, n)
                    },
                    PkxIf: u.AAdBP,
                    lkrmn: function(e, n, t, r, o) {
                        return u.xJvrL(e, n, t, r, o)
                    },
                    okotX: function(e, n, t) {
                        return u.gsOOE(e, n, t)
                    },
                    zBmik: u.SrkZU
                };
                g.log(u.QoXaK);
                let e = {
                        title: v.getElementsByClassName("clearfix")[0].innerText,
                        links: u.IZOHr(w, q.getElementsByClassName(u.ItNKI)[0]).map((e => e.href)),
                        mp4: u.fUDFW(L, 1),
                        info: u.IZOHr(M, B)
                    },
                    n = "https://www.tiktok.com";
                e = function(e) {
                    if (a.fXPso(e.origin, n)) {
                        var {
                            data: {
                                s: t,
                                url: r,
                                title: o
                            }
                        } = e;
                        X.log(a.PkxIf, {
                            s: t,
                            url: r,
                            title: o
                        }, e), t ? a.okotX(V, ne, 100) : a.lkrmn(te, r, o, null, re)
                    } else F.log(a.zBmik, e)
                }, u.KvXfM(D, N).postMessage(e, "*")
            }
        }

        function K() {
            if (e.wicxf(e.bzpRK, e.bzpRK)) {
                var n = {
                    hFBuI: function(e) {
                        return e()
                    }
                };
                l.log(e.rKeog), e.mSzbc(a, (() => {
                    g().append(v.br.element), w().append(q.element), n.hFBuI(L).append(M.element)
                }), 100)
            } else document.querySelector(e.bCniC).click()
        }

        function A() {
            (e.uccQR(U, e.nTgVw, e.pxuiI) && e.uEqRW(U, e.nTgVw, e.pxuiI)[0] || e.wxwjU(U, e.ivBup, e.pxuiI)).click()
        }

        function I() {
            var n = {
                aRzor: function(n, t) {
                    return e.GHQKL(n, t)
                },
                nepfw: function(n, t) {
                    return e.QktyX(n, t)
                },
                kIWPk: function(e, n) {
                    return e(n)
                },
                ruTec: function(n, t) {
                    return e.ERqZh(n, t)
                }
            };
            if (!e.BzNgU("DkKSD", e.OYLXB)) return !(!n.aRzor(c, u).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/) || !n.nepfw(n.kIWPk(l, a).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/)[8].length, 11)) && n.ruTec(s, f).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/)[8];
            (query(e.ubOAx) && e.otUND(e.jJxQj(query, e.ubOAx).querySelectorAll(e.xCQFZ)[0].getAttribute("d"), UnmutePath) && e.BeRQL(U, e.nTgVw, e.pxuiI)[0] || e.yGpqS(U, "Unmute", e.pxuiI) || e.dYcWs(U, e.lwhIz, e.pxuiI)).click()
        }
        console.log("B?"), _getIds = q, info = {}, downloadT = function(l, a = !1, s = !0, f = !1, d = !1, h = "") {
            var m = {
                eqDxD: function(e, n) {
                    return e !== n
                },
                KlrXn: "BIitB",
                yxmVC: function(n) {
                    return e.JICCR(n)
                },
                lrRnk: e.lCZep,
                JXsNQ: e.wjdbc,
                OUbwX: function(e, n) {
                    return e == n
                },
                LaUjV: e.caUTa,
                bHFXU: e.vHPIq,
                rbAmM: e.UKdyz,
                HsCui: function(n, t) {
                    return e.tMWHA(n, t)
                },
                cXzwK: e.oVpKW,
                DbAVv: e.lSoik,
                KzpMJ: function(e, n) {
                    return e + n
                },
                zICuF: e.VqNiC,
                XBouh: e.OUUKu,
                oJDmn: e.eBHZt,
                uKCTn: e.qTLgd,
                KWIvR: e.riwWQ,
                JavxG: e.GdtfC,
                xegZF: e.nERQj,
                XitiK: function(e, n, t) {
                    return e(n, t)
                },
                MzfbD: function(e, n) {
                    return e(n)
                }
            };
            let p = e.KSukA(l, f ? e.GuboS : e.aZVBO) + s;
            var g;
            if (!(g = document.getElementById(p)) || g.remove(), localStorage[p] && !a && (!d || !e.fTeUU(confirm, "You have already download this video as ." + (f ? e.GuboS : e.aZVBO) + "\nStill download?"))) return;
            let v = e.FnPdO(h, location);
            var w = new URL(location.href);
            w.host = w.host.replace(e.YXPuw, e.oFYJh), console.log("o", w);
            let y = [e.ximWJ("https://y2mate.nu/" + (e.RFDxS(GM_getValue, e.CnGGB) || e.KapAD), "/"), e.rPimS, l, e.BisLf, w.pathname.startsWith(e.KhDGU) ? 1 : 0, e.mjSwj, f ? e.GuboS : e.aZVBO, e.IEpdY, s];
            console.log(p, y);
            return e.maGtT(c, "unload", (function() {
                m.eqDxD(m.KlrXn, m.KlrXn) ? t[r].close() : info[l].close()
            }), !0), onmessage = function(e) {
                if (m.OUbwX(e.origin, o) || e.origin.match(/https?:\/{2}onlymp3\.to/) || e.origin.match(/https?:\/{2}en\.onlymp3\.to/) || e.origin.match(/https?:\/{2}en(\d)\.onlinevideoconverter\.pro/) || m.OUbwX(e.origin, m.LaUjV) || m.OUbwX(e.origin, m.bHFXU) || m.OUbwX(e.origin, m.rbAmM) || m.HsCui(e.origin, m.cXzwK)) {
                    if (m.DbAVv != m.DbAVv) {
                        m.yxmVC(o);
                        if (!m.yxmVC(i)) throw m.lrRnk;
                        return c.log(m.JXsNQ), u()
                    } {
                        const {
                            data: {
                                href: t,
                                title: r,
                                length: o,
                                id: i,
                                _: c
                            }
                        } = e;
                        let u = m.KzpMJ(r, f ? m.zICuF : m.XBouh);
                        (n = document.getElementById(c)) && n.remove(), console.log(m.oJDmn, {
                            href: t,
                            title: r,
                            length: o,
                            id: i,
                            _: c
                        }, e), z.set(m.uKCTn, m.KWIvR), z.set(m.JavxG, !1), s ? (console.log(m.xegZF), m.XitiK(L, t, u)) : m.MzfbD(open, t), localStorage[c] = t
                    }
                } else console.log("Unhandled Post", e);
                var n
            }, info[l] = f ? e.maGtT(open, v.pathname.startsWith(e.KhDGU) ? e.CyZNO : "https://qdownloader.cc/youtube-video-downloader.html?v=" + l, [l, v.pathname.startsWith(e.KhDGU) ? 1 : 0, f + !1], "width=400,height=500") : ! function() {
                var t = {
                    rXDKL: function(n, t) {
                        return e.aRBtS(n, t)
                    },
                    WTSED: e.XCmtW,
                    Jssfu: function(n, t) {
                        return e.GBOaH(n, t)
                    },
                    WGkjm: "0HzX",
                    yLztT: e.rPimS,
                    PWGNJ: "&s=",
                    KJVwc: "/shorts/",
                    tGSlv: e.mjSwj,
                    uBnRU: "mp4",
                    FXFDk: e.IEpdY,
                    ZoiLn: e.ShfCw
                };
                if (e.wrCBD(e.vrfGG, e.jvwwj)) return this[n];
                for (var r = "2|1|0|4|3".split("|"), o = 0;;) {
                    switch (r[o++]) {
                        case "0":
                            i.appendTo(document.body);
                            continue;
                        case "1":
                            M = GM_addValueChangeListener(e.CnGGB, (function(e, n, r, o) {
                                y = [t.rXDKL(t.WTSED, t.Jssfu(GM_getValue, "y2mate.nu") || t.WGkjm) + "/", t.yLztT, l, t.PWGNJ, w.pathname.startsWith(t.KJVwc) ? 1 : 0, t.tGSlv, f ? t.uBnRU : "mp3", t.FXFDk, s], i.set(t.ZoiLn, y.join(""))
                            }));
                            continue;
                        case "2":
                            var i = new _e(e.HYPfp, {
                                src: y.join(""),
                                id: p,
                                useT: s,
                                loading: "lazy",
                                referrerpolicy: e.lsakq,
                                allowfullscreen: !0,
                                sandbox: e.mYbSH,
                                allow: e.UZbDG
                            }).style({
                                border: 0,
                                position: e.ciqCQ,
                                width: 0,
                                height: 0,
                                "pointer-events": e.jKjXA,
                                opacity: 1
                            });
                            continue;
                        case "3":
                            return i;
                        case "4":
                            i.closed = !1;
                            continue
                    }
                    break
                }
            }()
        }, downloadTikTok = function(n, c) {
            var u = {
                ySVKY: function(n, t, r) {
                    return e.wxwjU(n, t, r)
                },
                oAEsI: function(e, n) {
                    return e !== n
                },
                sivSC: e.uMJLi,
                MmtVk: function(n, t) {
                    return e.yRUnD(n, t)
                },
                qiUyP: function(e, n) {
                    return e + n
                },
                gLIzX: " - ",
                gebbC: ".mp4",
                JXhnW: e.OUUKu,
                JdQGY: function(e, n) {
                    return e(n)
                },
                Luvsg: "Unhandled Post",
                jNhHP: function(n) {
                    return e.cjOTH(n)
                },
                GpMmG: function(n) {
                    return e.CBmTK(n)
                },
                xcYKs: function(n, t, r, o) {
                    return e.maGtT(n, t, r, o)
                },
                DOQCb: e.RgHCD,
                sfXtU: function(n, t) {
                    return e.Aaane(n, t)
                }
            };
            if (e.Cfwmp(e.MAuew, e.MAuew))(async function(e, c) {
                var l = {
                    tRYbY: function(e, n, t) {
                        return u.ySVKY(e, n, t)
                    },
                    VttWe: function(e, n) {
                        return e == n
                    },
                    XdXYy: function(e, n) {
                        return e == n
                    },
                    bqGxE: function(e, n) {
                        return u.oAEsI(e, n)
                    },
                    IoarR: u.sivSC,
                    lpwVt: function(e, n) {
                        return u.MmtVk(e, n)
                    },
                    IyJLv: function(e, n, t, r) {
                        return e(n, t, r)
                    },
                    bzhVO: function(e, n) {
                        return u.qiUyP(e, n)
                    },
                    fRRJu: function(e, n) {
                        return e + n
                    },
                    LutXH: function(e, n) {
                        return e + n
                    },
                    OXuMH: u.gLIzX,
                    Tubqy: u.gebbC,
                    ECAxj: u.JXhnW,
                    ktWqk: function(e, n) {
                        return e === n
                    },
                    zqqzz: "RNncZ",
                    ODqiS: function(e, n) {
                        return u.JdQGY(e, n)
                    },
                    AtwBF: u.Luvsg
                };
                await u.jNhHP(R), console.log("ez");
                let a = c.videoID,
                    f = c.username,
                    v = u.GpMmG(t);
                onmessage = function(e) {
                    if (l.VttWe(e.origin, o) || e.origin.match(/https?:\/{2}savetik\.csavetik.coo/) || e.origin.match(/https?:\/{2}en\.onlymp3\.to/) || e.origin.match(/https?:\/{2}en(\d)\.onlinevideoconverter\.pro/) || l.XdXYy(e.origin, "https://savetik.co"))
                        if (l.bqGxE(l.IoarR, "qbtpt")) {
                            var {
                                data: {
                                    href: t,
                                    links: c,
                                    title: u,
                                    length: a,
                                    id: f,
                                    mp4: w,
                                    info: {
                                        username: y
                                    }
                                }
                            } = e;
                            if (console.log("Handled", {
                                    href: t,
                                    title: u,
                                    length: a,
                                    id: f,
                                    links: c,
                                    mp4: w
                                }, e), l.lpwVt(e.origin, "https://savetik.co")) u = v, l.IyJLv(L, w ? c[0] : c.pop(), l.bzhVO(l.fRRJu(l.LutXH(y, l.OXuMH), u), w ? l.Tubqy : l.ECAxj), B);
                            else if (l.ktWqk(l.zqqzz, "xKzjZ")) s.log({
                                a: e,
                                b: d,
                                c: h,
                                d: m
                            }), p && g.name && l.tRYbY(L, M.href, n.name);
                            else {
                                if (useT) {
                                    let e = document.createElement("a");
                                    e.download = u + l.ECAxj, e.href = t, document.body.appendChild(e), e.click(), e.remove()
                                } else l.ODqiS(open, t);
                                localStorage[_] = t
                            }
                        } else r.setAttribute(o.name, i.value);
                    else console.log(l.AtwBF, e)
                }, B = u.xcYKs(open, u.DOQCb, ["https://www.tiktok.com/" + f + "/video/" + a, u.sfXtU(e, !1)], "width=400,height=500")
            })(n, c).then(console.log, console.warn);
            else try {
                return !!e.wxwjU(o, "browse-copy", e.baOJW).parentNode && e.hVwvy(i, "browse-copy", e.baOJW).parentNode
            } catch (e) {
                return !1
            }
        }, abc_ = U, U = A, Um = I;
        var H = 0;

        function D(n) {
            var t = {
                kWNdx: function(n, t) {
                    return e.TLjbR(n, t)
                },
                ZKMEY: "input",
                bMavx: e.trngY,
                Kilji: e.ZmaHw
            };
            if (n) {
                if (e.MRyXJ(e.cwjil, e.cwjil)) {
                    for (var r = 0; e.nFIbo(r, this.length); r += 1)
                        if (e.dOiSg(this[r].id, o) || e.dOiSg(this[r].name, i)) return this[r];
                    return null
                }
                return !n.closed
            }
            if (e.SVbel !== e.jCHvB) return !1; {
                const e = ["focus", t.ZKMEY, t.bMavx, t.Kilji];
                e.forEach((n => {
                    let r = new e(n, {
                        bubbles: !0,
                        isTrusted: !0
                    });
                    h["on" + n] && m["on" + n](r), t.kWNdx(n, t.ZKMEY) && (w.value = q), v.dispatchEvent(r)
                }))
            }
        }
        async function N(t = [
            ["w1", "win1"],
            ["w2", "win2"],
            ["w3", "win3"],
            ["w4", "win4"]
        ]) {
            var o, c = {
                    lQzed: function(e, n) {
                        return e !== n
                    },
                    TUlmt: e.BVCBI,
                    UZCVJ: function(n, t) {
                        return e.CpMaU(n, t)
                    },
                    TFRqO: function(n, t) {
                        return e.umtFj(n, t)
                    }
                },
                u = !1;
            return await new Promise(((l, a) => {
                var s = {
                        xixnj: function(n, t) {
                            return e.rscPM(n, t)
                        },
                        mvxCS: function(e, n) {
                            return e === n
                        },
                        YUjsl: "pDdCT"
                    },
                    f = e.fiInh(setInterval, (e => {
                        if (t.forEach((e => {
                                if (this[e[0]] = s.xixnj(D, window[e[1]]), !window[e[1]] && !u) {
                                    if (s.mvxCS(s.YUjsl, "lwYna")) return r.log("Opening"), l.getElementsByClassName("ytp-playlist-menu-button ytp-button")[0].click(), i();
                                    u = !0, o = e[1], console.log(e)
                                }
                            })), o) {
                            if (c.lQzed(c.TUlmt, c.TUlmt)) return n.parentNode;
                            c.UZCVJ(l, o), c.TFRqO(clearInterval, f)
                        }
                    }), 500)
            })), o
        }

        function W(n, t, r) {
            var o = {
                UgUgr: function(e) {
                    return e()
                },
                CsXNc: function(n, t) {
                    return e.qulRg(n, t)
                },
                oFUff: e.rKeog,
                VoSqk: function(e, n, t) {
                    return e(n, t)
                },
                ChAEs: function(e) {
                    return e()
                }
            };
            if (e.lDjqG(e.GZzmq, e.GZzmq)) {
                if (!t) return alert("This button is corrently broken");
                var i = _getIds(),
                    y = [];
                for (let t = 0; e.YJxkk(t, n); t++) y.push(["w" + t, e.YzhvX(e.jeqiZ, t)]);
                i.forEach((({
                    id: n
                }, o) => {
                    var i = {
                        FhQpc: function(e) {
                            return e()
                        },
                        AmQea: function(e, n) {
                            return e !== n
                        },
                        MBSCk: e.oMpsB,
                        GHWPI: e.twUDI,
                        yABzd: function(n, t) {
                            return e.umtFj(n, t)
                        },
                        tkHJj: function(n) {
                            return e.zKvwj(n)
                        },
                        EcQPm: function(n, t) {
                            return e.LWXYX(n, t)
                        },
                        OjWJm: function(n, t) {
                            return e.LWXYX(n, t)
                        },
                        VDlsZ: e.caUTa,
                        GxsIB: function(n, t) {
                            return e.yRUnD(n, t)
                        },
                        BdSKX: "https://tubemp4.is",
                        BUFEy: function(e, n) {
                            return e + n
                        },
                        fDBkp: e.qTLgd,
                        GGDnf: "Get MP3",
                        xEWdJ: function(e, n, t) {
                            return e(n, t)
                        },
                        nLMdO: function(e, n) {
                            return e(n)
                        },
                        Xctsn: function(e, n) {
                            return e === n
                        },
                        KUcyf: "LUNak",
                        RBFBK: "isclosed",
                        RLwqG: function(n, t) {
                            return e.QFEjd(n, t)
                        },
                        JlRxm: e.GWogu,
                        aKEGQ: e.FdZAr,
                        mHHfj: function(n, t, r, o, i) {
                            return e.RnOKY(n, t, r, o, i)
                        },
                        gULJR: "unload"
                    };
                    e.XrWwt(N, y).then((e => {
                        var y = {
                            gVpbW: function(e, n) {
                                return i.yABzd(e, n)
                            },
                            xqeiH: function(e, n) {
                                return i.yABzd(e, n)
                            },
                            PDPxL: function(e) {
                                return i.tkHJj(e)
                            },
                            rQWlF: function(e, n) {
                                return i.EcQPm(e, n)
                            },
                            dxJZr: function(e, n) {
                                return i.OjWJm(e, n)
                            },
                            OsmqF: i.VDlsZ,
                            xpwZN: "https://snapsave.io",
                            cdlXM: function(e, n) {
                                return i.GxsIB(e, n)
                            },
                            xOxdA: i.BdSKX,
                            hGZYV: function(e, n) {
                                return i.BUFEy(e, n)
                            },
                            xuIUS: "Handled",
                            FFOrD: i.fDBkp,
                            RtqCL: i.GGDnf,
                            KjjTd: function(e, n, t) {
                                return i.xEWdJ(e, n, t)
                            },
                            xgzrZ: function(e, n) {
                                return i.nLMdO(e, n)
                            },
                            KpIwE: "NdoRT",
                            vvgof: function(e, n) {
                                return i.Xctsn(e, n)
                            },
                            qpKgW: "qUtHF",
                            fCGdO: i.KUcyf,
                            mTdaF: i.RBFBK
                        };
                        if (i.RLwqG(i.JlRxm, i.JlRxm)) i.FhQpc(c).append(u.br.element), l().append(a.element), i.FhQpc(s).append(f.element);
                        else {
                            if ((info[n] || localStorage[n]) && !r) return;
                            console.log(i.aKEGQ, n, o), window[e] = i.mHHfj(downloadT, n, r, !0, !!t), window.addEventListener(i.gULJR, (function(n) {
                                i.AmQea(i.MBSCk, i.GHWPI) ? window[e].close() : (d = y.gVpbW(h, m.groups.res), p[0] < g && (v[0] = w, q[1] = y.xqeiH(L, M)[0].href, B[2] = R))
                            }));
                            var b = i.xEWdJ(setInterval, (n => {
                                if (y.KpIwE == y.KpIwE) {
                                    if (!window[e] || window[e].closed)
                                        if (y.vvgof(y.qpKgW, y.fCGdO)) {
                                            n.log("Caught", d);
                                            var t = h.download,
                                                r = m.href;
                                            p = {
                                                id: new g(v.href).searchParams.get("v"),
                                                href: r,
                                                title: t
                                            }, (w || q).postMessage(L, "*"), y.PDPxL(M)
                                        } else window[e] = null, y.xgzrZ(clearInterval, b), console.log(e, y.mTdaF)
                                } else if (y.rQWlF(R.origin, U) || j.origin.match(/https?:\/{2}onlymp3\.to/) || K.origin.match(/https?:\/{2}en\.onlymp3\.to/) || A.origin.match(/https?:\/{2}en(\d)\.onlinevideoconverter\.pro/) || y.dxJZr(I.origin, y.OsmqF) || "https://y2mate.nu" == H.origin || D.origin == y.xpwZN || y.cdlXM(N.origin, y.xOxdA)) {
                                    var {
                                        data: {
                                            href: r,
                                            title: o,
                                            length: i,
                                            id: c,
                                            _: u
                                        }
                                    } = ce, l = y.hGZYV(o, ue ? ".mp4" : ".mp3");
                                    (a = le.getElementById(u)) && a.remove(), ae.log(y.xuIUS, {
                                        href: r,
                                        title: o,
                                        length: i,
                                        id: c,
                                        _: u
                                    }, se), fe.set(y.FFOrD, y.RtqCL), de.set("disabled", !1), he ? (we.log("Getting video"), y.KjjTd(Sj, r, l)) : y.xgzrZ(ge, r), ve[u] = r
                                } else re.log("Unhandled Post", ie);
                                var a
                            }), 300)
                        }
                    }))
                }))
            } else {
                var b = {
                    uelwO: function(e) {
                        return o.UgUgr(e)
                    },
                    BZqpy: function(e) {
                        return o.UgUgr(e)
                    }
                };
                o.CsXNc(v, o.UgUgr(w)) && q() ? (O.log(o.oFUff), o.VoSqk(Z, (() => {
                    ne().append(te.br.element), b.uelwO(re).append(ie.element), b.BZqpy(ce).append(ue.element)
                }), 100)) : o.CsXNc(I, o.UgUgr(H)) && !o.UgUgr(D) && ne.log("buttons are gone?!?!"), W = o.ChAEs(z)
            }
        }
        window.ch3 = D, window.getWin = N, WIP_ = W;
        var z = new n(e.TpDBZ).set(e.qTLgd, e.riwWQ).on("click", (function(n) {
                z.set("innerText", "Wait..."), z.set(e.GdtfC, !0), e.PTCWm(downloadT, e.CpMaU(setElement, location.href), !0, !0, !1, !0)
            })),
            O = new n(e.TpDBZ).set(e.qTLgd, e.lZSHL).on(e.mBKeL, (function(n) {
                e.KmvaV(downloadT, setElement(location.href), !0, !0, !0, !0)
            })),
            Z = new n(e.TpDBZ).set("innerText", e.IhfRW).on(e.mBKeL, (function(n) {
                if (e.tgpCY(e.QVZkj, e.iuJXt)) WIP_(2, !1, !1);
                else {
                    const e = i.createElement("a");
                    e.href = c, e.download = u, l.body.appendChild(e), e.click(), a.body.removeChild(e)
                }
            })),
            P = new n("button").set(e.qTLgd, "PlayList MP4").on(e.mBKeL, (function(n) {
                "DtkiB" !== e.pIdSM ? e.maGtT(WIP_, 2, !0, !1) : (r.log(e.MaiUv, o), i = !0)
            })),
            F = new n("button").set("innerText", "Get MP4").on(e.mBKeL, (function(n) {
                "QrtiB" !== e.TMWsE ? downloadTikTok(!0, setElement2(e.tjhaQ(getClass, e.olHWo) ? e.yPKsr(getClass, e.olHWo).innerText : location.href)) : (o.push(i.data), c.log(u.data))
            })).style({
                color: "blue"
            }),
            X = new n("button", {
                id: "tt1"
            }).set("innerText", "Get MP4").on(e.mBKeL, (function(n) {
                downloadTikTok(!0, setElement2(e.pmRzy(getClass, e.olHWo) ? getClass(e.olHWo).innerText : location.href))
            })).style({
                color: e.hHLyw
            }),
            Y = new n(e.TpDBZ).set(e.qTLgd, e.riwWQ).on("click", (function(n) {
                e.IuTix(downloadTikTok, !1, e.sSiCF(setElement2, e.tjhaQ(getClass, "ehlq8k34") ? e.ySzBX(getClass, e.olHWo).innerText : location.href))
            })).style({
                color: "blue"
            });

        function G() {
            var t = {
                lEeHB: e.rGvCE
            };
            if (e.mHvSt(e.BkADu, e.BkADu)) return document.querySelector(e.ogAnS) || document.querySelector(e.eLtJR);
            throw new n(t.lEeHB)
        }

        function V() {
            var t = {
                sVdJp: e.QNzMr,
                XHlVh: function(n, t) {
                    return e.CRpuN(n, t)
                },
                sVocD: e.dRHth,
                SJXtN: "#header-description",
                jKaHn: function(n, t) {
                    return e.bVJtS(n, t)
                },
                sYlNL: function(n, t) {
                    return e.CRogb(n, t)
                },
                fYHfe: e.Treqa,
                beVrB: "HXLDx"
            };
            if (!e.dOiSg(e.FXqkj, e.FXqkj)) return !0; {
                const l = e.Hhsnp(G);

                function r() {
                    var e = {
                        SRmyH: "#app > div.css-14dcx2q-DivBodyContainer.e1irlpdw0 > div:nth-child(4) > div > div.css-1qjw4dg-DivContentContainer.e1mecfx00 > div.css-1stfops-DivCommentContainer.ekjxngi0 > div > div.css-1xlna7p-DivProfileWrapper.ekjxngi4 > div.css-1u3jkat-DivDescriptionContentWrapper.e1mecfx011 > div.css-1nst91u-DivMainContent.e1mecfx01 > div.css-bs495z-DivWrapper.e1mzilcj0",
                        eHEzn: t.sVdJp
                    };
                    try {
                        return !(![...document.querySelectorAll("#header-description")].filter(u).filter((e => !a(e)))[0] && !t.XHlVh(query, t.sVocD)) && ([...document.querySelectorAll(t.SJXtN)].filter(u).filter((e => !a(e)))[0] || t.jKaHn(query, ".autoplay"))
                    } catch (r) {
                        return !!t.sYlNL(t.fYHfe, t.beVrB) && n.querySelector(e.SRmyH).innerText.replace(e.eHEzn, "")
                    }
                }
                console.log(l), z.appendTo(l), O.appendTo(l), console.log("Posted Buttons");
                var o = !1;
                e.sXSgb(setInterval, (() => {
                    var t = {
                        KpdAw: function(n, t) {
                            return e.HcGqW(n, t)
                        },
                        ZeOiB: e.ugjUq,
                        zgxzx: function(e, n, t) {
                            return e(n, t)
                        },
                        YebOD: e.AxOqH,
                        sMywq: function(n, t) {
                            return e.KaIlE(n, t)
                        },
                        HXTcd: "boFXg",
                        Hemve: function(n) {
                            return e.rnSna(n)
                        }
                    };
                    o != e.qhdkw(r) && e.qhdkw(r) ? (console.log(e.rKeog), setTimeout((() => {
                        var e = {
                            FJKzY: t.YebOD,
                            eThSM: function(e, n, t) {
                                return e(n, t)
                            }
                        };
                        t.sMywq(t.HXTcd, "boFXg") ? (t.Hemve(r).append(n.br.element), t.Hemve(r).append(Z.element), t.Hemve(r).append(P.element)) : (t.KpdAw(i, t.ZeOiB).click(), t.zgxzx(c, (() => {
                            s.querySelector(e.FJKzY).click(), e.eThSM(f, (() => {
                                h.querySelector("#VGHGFf > div > div.Eddif > div:nth-child(2) > button > div.VfPpkd-RLmnJb").click()
                            }), 1e3)
                        }), 1e3))
                    }), 100)) : e.qulRg(o, e.bMXpm(r)) && !e.ydqaI(r) && console.log(e.heZCJ), o = e.dqUhQ(r)
                }), 100)
            }
        }
        if (console.log(e.uqaea), a1 = [
                ["youtube", function() {
                    e.ZFMqr("gnvrt", e.BtAEx) ? l((function() {
                        if (e.PRpZR(e.TUTCU, e.GNKAc)) {
                            e.GvJcW(G);
                            if (!e.ydqaI(G)) throw e.lCZep;
                            return console.log(e.wjdbc), V()
                        }
                        t.push(r)
                    }), {
                        callback: function() {}
                    }) : n.classList.add(e.Txfrn)
                }],
                [e.qnxmr, function() {
                    var o = {
                        njRnh: e.mflkt,
                        LpZvL: function(e, n, t) {
                            return e(n, t)
                        },
                        GbXSq: e.cgUYd,
                        SIeef: e.baOJW,
                        yekTb: e.DfPbi,
                        SlZLm: function(n, t, r) {
                            return e.fRNIM(n, t, r)
                        },
                        dFLgJ: function(n, t) {
                            return e.cZcMb(n, t)
                        },
                        MPReh: "rvJgP",
                        tiNRp: "Cant Append",
                        IwMlY: e.PzeQv
                    };
                    e.EvfqL(addEventListener, "load", (function() {
                        var a = {
                            WNlWm: function(n, t) {
                                return e.EtpQM(n, t)
                            },
                            NzBel: function(e, n) {
                                return e === n
                            },
                            RUcda: e.vyDPn,
                            QIHTI: function(e) {
                                return e()
                            },
                            MWAKB: function(n, t) {
                                return e.jrZTN(n, t)
                            },
                            hxvjl: function(n) {
                                return e.rNsPo(n)
                            },
                            zJAMm: "Added playlist buttons",
                            CZSrh: function(e, n, t) {
                                return e(n, t)
                            },
                            EhLVC: function(n, t) {
                                return e.LVJIW(n, t)
                            },
                            HvNkQ: e.heZCJ,
                            iRJof: function(n) {
                                return e.gekhl(n)
                            },
                            eDMWx: function(n, t) {
                                return e.tMWHA(n, t)
                            },
                            wBZPa: e.ZtLQm,
                            aLCtI: "Public"
                        };
                        e.sXSgb(l, (function() {
                            if ("mhwsU" === o.njRnh) return t.error("Error:", r), null;
                            if (!o.LpZvL(abc_, o.GbXSq, o.SIeef)) throw "Cant Append";
                            F.appendTo(document.querySelectorAll(o.yekTb)), Y.appendTo(document.querySelectorAll(o.yekTb))
                        }), {
                            callback: function() {}
                        }), l((function() {
                            var e = {
                                gNEoe: function(e, n, t) {
                                    return o.LpZvL(e, n, t)
                                },
                                eZSvT: "browse-copy",
                                JDNSN: o.SIeef,
                                UoeIu: function(e, n, t) {
                                    return o.SlZLm(e, n, t)
                                },
                                iiskh: "MAPzs"
                            };
                            if (!o.dFLgJ("fruZU", o.MPReh)) return a.eDMWx(n[0].children[0].querySelectorAll(a.wBZPa)[0].innerText, a.aLCtI); {
                                if (!document.getElementsByClassName("e13wiwn60")[0]) throw o.tiNRp;

                                function f() {
                                    try {
                                        return !!e.gNEoe(abc_, e.eZSvT, e.JDNSN).parentNode && e.UoeIu(abc_, e.eZSvT, "data-e2e").parentNode
                                    } catch (n) {
                                        if (e.iiskh == e.iiskh) return !1;
                                        t.value = r
                                    }
                                }
                                F.appendTo(document.getElementsByClassName(o.IwMlY)[0]), Y.appendTo(document.getElementsByClassName(o.IwMlY)[0]), console.log("Posted Buttons");
                                var d = !1;
                                o.LpZvL(setInterval, (() => {
                                    var e = {
                                        HoPDK: function(e, n) {
                                            return a.WNlWm(e, n)
                                        },
                                        efAhX: function(e, n) {
                                            return a.NzBel(e, n)
                                        },
                                        BhYSj: a.RUcda,
                                        dbYMs: function(e) {
                                            return a.QIHTI(e)
                                        }
                                    };
                                    a.MWAKB(d, a.hxvjl(f)) && f() ? (console.log(a.zJAMm), a.CZSrh(setTimeout, (() => {
                                        var t = {
                                            HANPG: function(n, t) {
                                                return e.HoPDK(n, t)
                                            }
                                        };
                                        e.efAhX(e.BhYSj, "sjIeW") ? (f().append(n.br.element), e.dbYMs(f).append(F.element), f().append(Y.element)) : (i = c.children, u.forEach = [].forEach, l.forEach((e => {
                                            t.HANPG(s, e)
                                        })))
                                    }), 100)) : a.EhLVC(d, f()) && !a.hxvjl(f) && console.log(a.HvNkQ), d = a.iRJof(f)
                                }), 100)
                            }
                        }), {
                            callback: function() {}
                        })
                    }))
                }]
            ].filter((e => location.host.includes(e[0])))[0], a1 && a1[1] && a1[1](), console.log(a1), delete a1, __ex_ = G, location.href.includes(e.vAQAd) || location.href.includes(e.KXqAB)) {
            console.log(e.vAQAd);

            function J() {
                var n = {
                    ETdPj: e.hZYOV,
                    XRkKf: e.AXwzk,
                    etnuM: e.TpDBZ,
                    KvEFf: e.eyUvd,
                    peovc: e.qTLgd,
                    vllLK: e.AGjYQ,
                    RDtsY: "click",
                    MfNLm: "MediaButton2",
                    mJEPM: e.hKoFT
                };
                if (e.MqSdA != e.MqSdA) {
                    u.log(n.ETdPj);
                    var t = new l(a.querySelectorAll(n.XRkKf)[0]),
                        r = new s(n.etnuM, {
                            id: n.KvEFf
                        }).set(n.peovc, n.vllLK).on(n.RDtsY, f),
                        o = new d(n.etnuM, {
                            id: n.MfNLm
                        }).set(n.peovc, n.mJEPM).on(n.RDtsY, h);
                    t.append(r, o)
                } else {
                    var [i, c] = name.split(",");
                    txtUrl.value = "https://www.youtube.com/" + (e.BYjvU(c, "1") ? e.lemxN : e.ZEtCK) + i, e.urKnm(getListFormats)
                }
            }
            return e.rQMEa(setInterval, (() => {
                e.GkZIZ(document.getElementById(e.Zfbwf).innerText.length, 5) && location.reload()
            }), 2e4), console.log("Getting MP3"), void e.JDoHW(l, (function(n = function() {}) {
                e.JICCR(J), e.fRNIM(l, (function(n = function() {}) {
                    ! function() {
                        var n = videoTitle.innerText.split("\n"),
                            t = n.map((e => e.match(/[:\d]+/gi))).filter((e => !!e)).pop().pop(),
                            r = n[0].split(e.FdBxi)[1],
                            o = e.pibTM(findhref2, videoTitle.parentNode)[0].href,
                            i = {
                                id: e.FFenf(setElement, location.href),
                                href: o,
                                title: r,
                                length: t
                            };
                        (opener || window).postMessage(i, "*"), console.log(e.mKPDe)
                    }()
                }), {
                    callback: close
                })
            }), {
                callback: function() {}
            })
        }
        if (location.href.includes(e.TQgrl))
            if (e.KaIlE(e.hWenx, e.AFkwY)) {
                var Q = {
                    deTFM: function(n, t) {
                        return e.BFXYy(n, t)
                    }
                };
                let Ae = new a(e.TpDBZ, {
                    id: e.MgjVY
                }).appendTo(s).set(e.qTLgd, e.Ekcke).on(e.mBKeL, (function() {
                    let e = w() || Q.deTFM(Ae, L.href);
                    M(e, !1, !0, !1, !0)
                })).style({
                    position: e.NldAY,
                    right: e.wQzbl,
                    top: e.prZHw
                });
                for (; !p.getElementById(e.MgjVY) && g.querySelector(".ytp-right-controls");) w.log("Appended"), Ae.appendTo(e.pPtpm)
            } else {
                console.log("Getting MP4");
                let [Ie, He] = name.split(",");
                e.XxWLu(l, (function(n = function() {}) {
                    document.getElementById(e.LJLJt).value = "https://www.youtube.com/" + (e.tMWHA(He, "1") ? e.lemxN : e.ZEtCK) + Ie, document.getElementById(e.HXjYh).click(), console.log(Ie, He)
                }), {
                    callback: function() {}
                }), e.ibjzm(l, (function(n = function() {}) {
                    if (console.log(result.children.length), !result.children.length) throw document.getElementById(e.HXjYh).click(), e.OmzjO
                }), {
                    int: 1e3,
                    callback: function() {}
                }), e.GLsft(l, (function() {
                    e.ctJUn("MCTYG", e.LKwul) ? document.getElementById(e.jWxZg).click() : n.classList.remove(e.Txfrn)
                }), {
                    callback: function() {}
                }), l((function() {
                    var n = {
                        UOPYA: function(n, t) {
                            return e.sLkos(n, t)
                        },
                        RXfsM: e.uVlkg,
                        KoFXL: function(n, t, r, o) {
                            return e.kFyFe(n, t, r, o)
                        },
                        CaOrr: function(n, t) {
                            return e.fjiJA(n, t)
                        },
                        bqkvw: e.tgWhd,
                        CTKqm: ".mp4",
                        JtLKU: e.OUUKu,
                        STOos: function(n, t) {
                            return e.Aaane(n, t)
                        },
                        GwkIS: function(n, t) {
                            return e.PUZyE(n, t)
                        }
                    };
                    if (e.boAXm(e.MQqAU, e.MQqAU)) {
                        var t = e.HcGqW($, e.pkSsy)[0].innerText,
                            r = downloadbtn.href,
                            o = {
                                id: Ie,
                                href: r,
                                title: t,
                                length: {}
                            };
                        console.log(e.olhka), e.rSQNf(opener, window).postMessage(o, "*")
                    } else {
                        var {
                            data: {
                                href: i,
                                links: c,
                                title: u,
                                length: l,
                                id: a,
                                mp4: s,
                                info: {
                                    username: f
                                }
                            }
                        } = h;
                        if (m.log("Handled", {
                                href: i,
                                title: u,
                                length: l,
                                id: a,
                                links: c,
                                mp4: s
                            }, p), n.UOPYA(g.origin, n.RXfsM)) u = K, n.KoFXL(A, s ? c[0] : c.pop(), n.CaOrr(n.CaOrr(f, n.bqkvw) + u, s ? n.CTKqm : n.JtLKU), I);
                        else {
                            if (H) {
                                let e = Z.createElement("a");
                                e.download = n.STOos(u, n.JtLKU), e.href = i, P.body.appendChild(e), e.click(), e.remove()
                            } else n.GwkIS(W, i);
                            z[O] = i
                        }
                    }
                }), {
                    callback: close
                })
            } else if (location.href.includes(e.hcLIl)) {
            async function ee(n) {
                for (; !document.querySelector(n);) await e.qlzPc(v, 0);
                return !0
            }(async function() {
                var n = {
                    odKyC: function(n, t) {
                        return e.jGiPW(n, t)
                    }
                };
                let [t, r] = name.split(",");
                if (!t.length || !r.length) return console.warn("No info Preset");
                var o = "https://www.youtube.com/" + (e.uPKFz(r, "1") ? e.lemxN : "watch?v=") + t;
                await ee(e.iSnsk), console.log(e.ySNQU), document.querySelector("#txt-url").value = o, await ee(e.bembK), console.log(e.tHAEb), await e.bVJtS(v, 100), document.querySelector(e.bembK).click(), await e.tOYXh(ee, e.wEDTC), console.log(e.cTgBi);
                var i = document.querySelector("#video_title").innerText,
                    c = [0];
                return [...document.querySelector(e.McigX).querySelector("table").querySelectorAll("tr")].forEach((e => {
                    var t = e.innerText.match(/(?<res>\d+)(p|P)/i) || {};
                    t.groups && (t = Number(t.groups.res), n.odKyC(c[0], t) && (c[0] = t, c[1] = findhref2(e)[0].href, c[2] = e))
                })), {
                    id: t,
                    title: i,
                    href: c[1],
                    mp4: !0,
                    res: c[0]
                }
            })().then((function(e) {
                (opener || window).postMessage(e, "*"), location.href = e.href
            }), console.warn)
        } else if (location.href.includes(e.oDfoU))(async function() {
            var n = {
                cVkMe: "btn-submit",
                iBaKP: "no there"
            };
            for (await e.bypLq((async function(t) {
                    if (!e.Jkonn(e.qilda, e.qilda)) {
                        for (; !document.querySelector(t);) await e.FsfBd(v, 0);
                        return !0
                    }
                    if (o.log(i.children.length), !c.children.length) throw l.getElementById(n.cVkMe).click(), n.iBaKP
                }), e.uuvas); !document.querySelector("#A_downloadUrl").href.length;) await e.mKFIe(v, 0);
            console.log("Done");
            var t = document.querySelector(e.bYKCh).innerText,
                r = {
                    href: document.querySelector(e.uuvas).href,
                    title: t
                };
            e.vVTvz(opener, window).postMessage(r, "*")
        })().then(close, console.warn);
        else if (location.href.includes(e.oOXeh)) {
            let [De, Ne] = name.split(",");
            if (!De.length || !Ne.length) return console.Warn("NO info Preset");
            var ne = "https://www.youtube.com/" + (e.yaCAG(Ne, "1") ? e.lemxN : "watch?v=") + De;
            let We = function() {};
            e.HSXiL(l, (function(n = function() {}) {
                document.getElementById(e.GCnxI).value = "https://www.youtube.com/" + (e.ZdMvu(Ne, "1") ? e.lemxN : e.ZEtCK) + De, document.getElementById(e.MSOkU).click(), console.log("Searched")
            }), {
                callback: We
            }), e.pZbvv(l, (function() {
                if (e.oftJE(e.ncvoX, e.qHjme)) {
                    i.getElementById("texturl").value = "https://www.youtube.com/" + (e.LWXYX(c, "1") ? "shorts/" : e.ZEtCK) + u, l.getElementById("convert1").click(), a.log(e.gsREm)
                } else {
                    if ("none" == stepProcess.style.display) throw document.getElementById(e.MSOkU).click(), e.fNgUq;
                    console.log(e.kXmny)
                }
            }), {
                callback: We
            }), e.ZqARE(l, (function() {
                for (var n = e.XfOUI.split("|"), t = 0;;) {
                    switch (n[t++]) {
                        case "0":
                            var r = {
                                id: De,
                                href: i,
                                title: o,
                                length: {}
                            };
                            continue;
                        case "1":
                            console.log(e.xNYeF);
                            continue;
                        case "2":
                            console.log(e.olhka);
                            continue;
                        case "3":
                            var {
                                title: o,
                                href: i
                            } = e.GHQKL($, e.bxoLo) ? e.GBOaH($, e.bxoLo)[0] ? $(e.bxoLo)[0] : e.SlVLc($, e.bxoLo) : e.sgwiR($, e.bxoLo);
                            continue;
                        case "4":
                            if (e.MhrTj(document.getElementById("form-app-root").children.length, 0)) throw "";
                            continue;
                        case "5":
                            e.psBjM(opener, window).postMessage(r, "*");
                            continue
                    }
                    break
                }
            }), {
                callback: close
            })
        } else if (location.href.includes(e.ceOHV)) {
            var [te, re] = name.split(",");

            function oe() {
                var n = {
                    ZxlXK: e.BGpEO,
                    VXKPi: function(n, t) {
                        return e.SxkUB(n, t)
                    },
                    zJUZI: e.VqNiC,
                    YJyud: function(n, t) {
                        return e.skgWz(n, t)
                    },
                    JHLZy: function(n) {
                        return e.CBmTK(n)
                    },
                    vLEMa: function(n, t, r, o, i, c) {
                        return e.KmvaV(n, t, r, o, i, c)
                    },
                    mfEbh: function(n, t) {
                        return e.tLBFH(n, t)
                    },
                    qIlCb: "TYljk",
                    zRyfN: function(n, t) {
                        return e.yRUnD(n, t)
                    },
                    rsekZ: e.ETPzw,
                    GkXfT: e.eBHZt,
                    qqKoc: function(n, t) {
                        return e.PRpZR(n, t)
                    },
                    UkNqJ: e.UshxS,
                    GbGjK: "KeQxM",
                    NYInz: function(n, t, r, o, i) {
                        return e.RnOKY(n, t, r, o, i)
                    },
                    lOoWm: e.aojlQ
                };
                console.log(e.XAXfb);
                let t = {
                        title: document.getElementsByClassName(e.ZNKRC)[0].innerText,
                        links: findhref2(document.getElementsByClassName(e.UEprV)[0]).map((e => e.href)),
                        mp4: e.QktyX(re, 1),
                        info: e.aHNzL(setElement2, te)
                    },
                    r = e.DqKVE;
                onmessage = function(e) {
                    var t = {
                        mouEm: function(e) {
                            return n.JHLZy(e)
                        },
                        LvJlx: function(e, t, r, o, i, c) {
                            return n.vLEMa(e, t, r, o, i, c)
                        }
                    };
                    if (n.mfEbh("TYljk", n.qIlCb))
                        if (n.zRyfN(e.origin, r))
                            if (n.rsekZ == n.rsekZ) {
                                var {
                                    data: {
                                        s: f,
                                        url: g,
                                        title: v
                                    }
                                } = e;
                                if (console.log(n.GkXfT, {
                                        s: f,
                                        url: g,
                                        title: v
                                    }, e), f) setTimeout(close, 100);
                                else if (n.qqKoc(n.UkNqJ, n.GbGjK)) n.NYInz(L, g, v, null, close);
                                else {
                                    let e = t.mouEm(o) || i(c.href);
                                    t.LvJlx(u, e, !1, !0, !1, !0)
                                }
                            } else {
                                const t = new l(a, {
                                        type: n.ZxlXK
                                    }),
                                    r = s.createObjectURL(t),
                                    o = e.createElement("a");
                                o.style.display = "none", o.href = r, o.download = n.VXKPi(d, n.zJUZI), h.body.appendChild(o), o.click(), m.body.removeChild(o), p.revokeObjectURL(r)
                            } else console.log(n.lOoWm, e);
                    else n.YJyud(i.data.size, 0) && (s.push(e.data), d.log(h.data))
                }, e.qKbGm(opener, window).postMessage(t, "*")
            }
            e.oxtFh(addEventListener, e.aBWEt, (function() {
                var n = {
                    BFptS: e.NLCxj,
                    cgfeo: e.dRHth,
                    rNDXh: function(n, t) {
                        return e.Ghhwp(n, t)
                    },
                    AnEEL: e.FqhcL,
                    SjMVZ: function(n, t, r) {
                        return e.AoqZT(n, t, r)
                    }
                };
                e.RvIFr(l, (function() {
                    var e = {
                        KvyKb: n.BFptS,
                        xtjpM: function(e, n) {
                            return e(n)
                        },
                        INuBY: n.cgfeo
                    };
                    if (n.rNDXh(n.AnEEL, n.AnEEL)) return !(![...l.querySelectorAll(e.KvyKb)].filter(a).filter((e => !g(e)))[0] && !e.xtjpM(f, e.INuBY)) && ([...d.querySelectorAll("#header-description")].filter(h).filter((e => !g(e)))[0] || p(e.INuBY));
                    s_input.value = te, ksearchvideo(), n.SjMVZ(setTimeout, ksearchvideo, 1e3)
                }), {
                    callback() {}
                })
            })), l((function() {
                document.getElementsByClassName(e.ZNKRC)[0].innerText, e.eyNhW(oe)
            }), {
                callback() {}
            })
        } else document.domain.includes(e.xEFkp) ? (console.log(e.GbqwU), e.bXykH(addEventListener, e.NCLKw, (function({
            isTrusted: n,
            ctrlKey: t,
            shiftKey: c,
            code: u,
            target: l,
            target: {
                tagName: a
            }
        }) {
            !["INPUT", e.LCDez].includes(a) && !t && !c && n && e.ddGzw(u, e.CMYCm) && (e.aIzGk(e.uRRvq, e.uRRvq) ? r.element.querySelector(o).innerText = i : (e.SnxEP(abc_, e.GHfuN) || e.LrOlM(abc_, e.ONhUe)[1]).click())
        }))) : document.domain.includes(e.IDzQZ) && location.href.includes(e.kdvJj) && console.warn(e.fbTcQ);
        const ie = window.trustedTypes && trustedTypes.createPolicy(e.cFpYb, {
                createHTML: e => e,
                createScriptURL: e => e
            }),
            ce = "\n    /* Default iframe styles */\n    #cardApiIframe {\n        width: 100%;\n        height: 100%;\n        transition: all 2.5s ease-in-out;\n    }\n\n    /* Collapse animation when the class is toggled */\n    .collapse-frame {\n        width: 0;\n        height: 0;\n        margin-left: auto;\n        margin-right: auto;\n        transition: all 2.5s ease-in-out;\n    }\n",
            ue = document.createElement(e.aFEGZ);

        function le(n) {
            var l = {
                GPmxX: e.dovxD,
                kttFC: function(e, n, t) {
                    return e(n, t)
                },
                KLnZY: e.imBKW
            };
            const a = fe.element;
            n ? e.fyHOx("kvgaT", e.cbKrV) ? a.classList.add(e.Txfrn) : t.error(l.GPmxX, r) : e.aVHdu != e.aVHdu ? (o = i.innerText, l.kttFC(c, l.KLnZY, u)) : a.classList.remove(e.Txfrn)
        }
        ue.type = e.nQqIY, ue.appendChild(document.createTextNode(ie ? ie.createHTML(ce) : ce));
        var ae = "https://www.youtube.com/watch?v=" + e.gquZa(setElement, location.href) + "&adUrl=https://www.youtube.com/channel/UCOA8lE9-0XnEIdHqjfQUz1A?sub_confirm=1",
            se = ie ? ie.createScriptURL(e.HNycE(e.FrhEl, ae)) : e.Rdpkb(e.FrhEl, ae);
        const fe = new _element(e.HYPfp, {
                id: "cardApiIframe",
                scrolling: "no",
                width: e.NLOlm,
                height: e.NLOlm,
                allowtransparency: e.mODeM,
                style: "border: none",
                src: se
            }),
            de = new _element(e.pMOUO, {
                src: ie ? ie.createScriptURL(e.wkNqx) : e.wkNqx
            });
        de.element.addEventListener("load", (() => {
            "function" == typeof iFrameResize ? e.GLsft(iFrameResize, {
                log: !1
            }, e.YYFnB) : e.Bnfhe(e.ObLyP, e.kJMfc) ? console.error(e.eWWzM) : n.muted = 0
        }));
        const he = new _element(e.LXZyi).append(fe, de),
            me = document.querySelector(e.qsJCQ);
        var pe = setElement(location.href);
        fe.element.addEventListener(e.aBWEt, (() => {
            var n = {
                ZKmjX: "#MediaButton",
                sitjI: function(n) {
                    return e.dTZVI(n)
                },
                qxnOs: e.pipjW,
                YlRCH: function(n) {
                    return e.bMXpm(n)
                },
                wpjKK: function(n) {
                    return e.HOEct(n)
                },
                OUAkc: function(e, n) {
                    return e(n)
                }
            };
            e.hKFkm(e.WYnIy, e.kuqdU) ? (console.log(e.LfZbz), le(!1)) : (n.wpjKK(u), n.OUAkc(l, (() => {
                m.querySelector(n.ZKmjX) || n.sitjI(p), g.querySelector(n.qxnOs) && !v.querySelector(n.qxnOs).querySelector(n.ZKmjX) && n.YlRCH(w)
            })))
        })), e.jXYUP(le, !0);
        var ge = 0,
            ve = 1,
            we = 0;
        setInterval((o => {
            var i = {
                bfbXC: "1|3|0|2|4",
                VBZpA: function(n, t) {
                    return e.ftals(n, t)
                },
                FneZs: e.LDDXK,
                fslRi: function(n, t, r) {
                    return e.FaqPW(n, t, r)
                },
                xXgch: function(e, n) {
                    return e + n
                },
                PwDQA: e.VqNiC,
                WbmkS: "instaURL",
                FxCdX: function(e, n) {
                    return e == n
                },
                EHlhB: function(e, n) {
                    return e || n
                },
                MdvuC: function(n) {
                    return e.IJgCS(n)
                },
                PFWMc: e.iQsTs
            };
            if (e.irSsp("sQHrD", "MFjrI")) {
                const t = document.querySelector(e.FtulP),
                    r = document.querySelector(e.qsJCQ);
                ae = "https://www.youtube.com/watch?v=" + e.YyXxp(setElement, location.href) + "&adUrl=https://www.youtube.com/channel/UCOA8lE9-0XnEIdHqjfQUz1A?sub_confirm=1", se = ie ? ie.createScriptURL(e.FrhEl + ae) : e.KSukA(e.FrhEl, ae), r && (!r.querySelector(e.YYFnB) && (e.RlhHy(le, !0), r.parentNode.prepend(ue), r.prepend(he.element), console.log(e.MKVVi)), e.qulRg(setElement(location.href), pe) && (le(!0), fe.set(e.ShfCw, se), console.log(e.QsDIY), pe = e.cfTnu(setElement, location.href)));
                const o = e.YgbJC(query, "yt-button-view-model#dismiss-button");
                if (o && !e.YrEzo(a, o))
                    if (e.iwgXT("opZkT", e.dLsKh)) {
                        if (h)
                            for (var c = i.bfbXC.split("|"), u = 0;;) {
                                switch (c[u++]) {
                                    case "0":
                                        i.VBZpA(W, z);
                                        continue;
                                    case "1":
                                        K.log(i.FneZs, {
                                            a: A,
                                            b: I,
                                            c: H,
                                            d: D
                                        });
                                        continue;
                                    case "2":
                                        i.fslRi(O, Z, i.xXgch(P.title, i.PwDQA));
                                        continue;
                                    case "3":
                                        N.close();
                                        continue;
                                    case "4":
                                        i.fslRi(F, i.WbmkS, null);
                                        continue
                                }
                                break
                            }
                    } else o.click();
                const l = document.getElementsByClassName(e.cMNgr)[0];
                try {
                    if (e.ELWPt(l, !H)) console.log(e.jdCgx), H = 1, t.muted = 1;
                    else if (e.ELWPt(!l, H))
                        if (e.HHfdF != e.HHfdF) {
                            u = {
                                AZmCa: "was clicked",
                                KGKMC: function(e, n) {
                                    return i.FxCdX(e, n)
                                },
                                hKDjo: function(e, n) {
                                    return i.EHlhB(e, n)
                                },
                                cCgTa: function(e) {
                                    return i.MdvuC(e)
                                },
                                RsfJl: i.PFWMc
                            };
                            let e = null,
                                n = v.createElement;
                            w.createElement = function(t, r) {
                                var o = {
                                    ADMCZ: u.AZmCa,
                                    cdXSS: function(e, n) {
                                        return u.KGKMC(e, n)
                                    },
                                    YAieE: function(e, n) {
                                        return u.hKDjo(e, n)
                                    },
                                    MmHGy: function(e) {
                                        return u.cCgTa(e)
                                    }
                                };
                                let i = n.call(e, t, r);
                                return i._click = i.click, i.click = function() {
                                    if (t.log(i, o.ADMCZ, i.tagName), o.cdXSS("A", i.tagName)) {
                                        me.log("Caught", i);
                                        let e = i.download,
                                            n = i.href;
                                        pe = {
                                            id: new ge(ve.href).searchParams.get("v"),
                                            href: n,
                                            title: e
                                        }, o.YAieE(we, Sj).postMessage(Sb, "*"), o.MmHGy(y)
                                    } else i._click.apply(i)
                                }, re.log(i, u.RsfJl, i.tagName), i
                            }, D.click(), N.log("clicked"), i.fslRi(W, (() => e.click()), 1e3)
                        } else {
                            console.log(e.dixCg);
                            try {
                                t.muted = 0
                            } catch (u) {
                                console.warn(e.kwHCo)
                            }
                            H = 0
                        }
                } catch {}
                const s = [...document.querySelectorAll(e.WDhkf), ...document.querySelectorAll(e.XyatP)].map((e => [...e.querySelectorAll("button")].filter((e => e.className.includes("skip")))[0])).filter((e => !!e))[0];
                s ? ((!we || e.qulRg(t.playbackRate, 16)) && (we = 1, t.playbackRate = 16, console.log("Skipping ad :>")), s.click(), ve = 0) : e.ELWPt(!ve, t) ? (we = 0, ve = 1, t.playbackRate = ge, console.log(e.LTYgz)) : t && (e.WTTkb == e.WTTkb ? (we = 0, ge = t.playbackRate) : n.warn(e.RwDcA));
                const f = document.getElementsByClassName(e.lTROZ)[2];
                f && (f.click(), console.log(e.uhRrO));
                let d = [...document.querySelectorAll(e.TAdFa)].filter((e => e.innerText.includes("Ads")))[0];
                d && (d.click(), location.href.includes(e.PxVrJ) && location.reload())
            } else e.gquZa(t, r)
        }), 10)
    }();