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
function b(e, n) {
    var t = S();
    return b = function(n, r) {
        var o = t[n -= 141];
        if (void 0 === b.HdDEBu) {
            b.IZcOCt = function(e, n) {
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
            }, e = arguments, b.HdDEBu = !0
        }
        var i = n + t[0],
            c = e[i];
        return c ? o = c : (void 0 === b.QOaPiT && (b.QOaPiT = !0), o = b.IZcOCt(o, r), e[i] = o), o
    }, b(e, n)
}

function j(e, n) {
    var t = S();
    return j = function(n, r) {
        var o = t[n -= 141];
        if (void 0 === j.JoUtvj) {
            j.OStmFL = function(e) {
                for (var n, t, r = "", o = "", i = 0, c = 0; t = e.charAt(c++); ~t && (n = i % 4 ? 64 * n + t : t, i++ % 4) ? r += String.fromCharCode(255 & n >> (-2 * i & 6)) : 0) t = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(t);
                for (var u = 0, l = r.length; u < l; u++) o += "%" + ("00" + r.charCodeAt(u).toString(16)).slice(-2);
                return decodeURIComponent(o)
            }, e = arguments, j.JoUtvj = !0
        }
        var i = n + t[0],
            c = e[i];
        return c ? o = c : (o = j.OStmFL(o), e[i] = o), o
    }, j(e, n)
}(function(e, n) {
    for (var t = "mgtB", r = 145, o = 148, i = "6ty!", c = 153, u = "51i$", l = 155, a = 152, s = 149, f = 147, d = j, h = j, m = j, p = b, g = b, v = b, y = S();;) try {
        if (932757 === parseInt(p(156, t)) / 1 * (parseInt(p(151, "WVBK")) / 2) + -parseInt(d(r)) / 3 * (-parseInt(g(o, i)) / 4) + -parseInt(v(c, "jusz")) / 5 + -parseInt(p(144, u)) / 6 + parseInt(h(l)) / 7 + -parseInt(p(158, "6oth")) / 8 * (-parseInt(v(a, "Xk&6")) / 9) + parseInt(p(s, "mgtB")) / 10 * (parseInt(m(f)) / 11)) break;
        y.push(y.shift())
    } catch (e) {
        y.push(y.shift())
    }
})(),
function() {
    var e = {
        iKzge: function(e, n) {
            return e || n
        },
        CKvkb: "---",
        UNfPa: "darkgrey",
        aPSGM: "#008f68",
        IlElI: "1rem",
        PRXWK: function(e, n) {
            return e !== n
        },
        ItQfd: function(e, n, t) {
            return e(n, t)
        },
        NiSIl: "gWwCw"
    };
    Object.assign(this || arguments[0], {
        CustomLog: class {
            constructor(n) {
                this.title = {
                    body: e.iKzge(n, e.CKvkb),
                    color: e.UNfPa,
                    size: "1rem"
                }, this.body = {
                    color: e.aPSGM,
                    size: e.IlElI
                }
            }
            setTitleBody(e) {
                return this.title.body = e, this
            }
            setTitleStyle({
                color: n,
                size: t
            }) {
                return e.PRXWK(n, void 0) && (this.title.color = n), void 0 !== t && (this.title.size = t), this
            }
            setBodyStyle({
                color: n,
                size: t
            }) {
                return void 0 !== n && (this.body.color = n), e.PRXWK(t, void 0) && (this.body.size = t), this
            }
            log(n = "") {
                e.PRXWK(e.NiSIl, e.NiSIl) ? e.ItQfd(Q, g.href, V.name) : console.log("%c" + this.title.body + " | %c" + n, "color: " + this.title.color + "; font-weight: bold; font-size: " + this.title.size + ";", "color: " + this.body.color + "; font-weight: bold; font-size: " + this.body.size + "; text-shadow: 0 0 5px rgba(0,0,0,0.2);")
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
    var t = {
        uMISv: function(e, n) {
            return e(n)
        },
        aBqpU: function(e, n, t) {
            return e(n, t)
        }
    };
    return t.uMISv(GM_getValue, e) || (t.aBqpU(GM_setValue, e, n), n)
}

function setV(e, n) {
    ! function(e, n, t) {
        e(n, t)
    }(GM_setValue, e, n)
}
async function getFinalUrlFromServer(e) {
    var n = {
        eJMMT: "http://localhost:3000/get-final-url",
        FLxgK: "POST",
        OMXlR: "application/json",
        zVsXI: "Failed to fetch final URL",
        ykiTc: "Error:"
    };
    try {
        const t = await fetch(n.eJMMT, {
            method: n.FLxgK,
            headers: {
                "Content-Type": n.OMXlR
            },
            body: JSON.stringify({
                url: e
            })
        });
        if (!t.ok) throw new Error(n.zVsXI);
        return (await t.json()).finalUrl
    } catch (e) {
        return console.error(n.ykiTc, e), null
    }
}

function getCurrentVideoID() {
    var e, n = {
        GfdRt: "ytp-playlist-menu-button ytp-button",
        RSUwn: function(e) {
            return e()
        },
        NWefp: "Closiung",
        Wubmf: "Not Found!"
    };
    return [...document.getElementsByClassName("ytp-video-menu-item ytp-button")].forEach(((n, t) => {
        n.innerText.startsWith(CurrentPlayingSymbol) && (e = new URL(n.href).searchParams.get("v"))
    })), !e && document.getElementsByClassName(n.GfdRt)[0] ? (console.log("Opening"), document.getElementsByClassName(n.GfdRt)[0].click(), n.RSUwn(getCurrentVideoID)) : e ? (console.log(n.NWefp), document.getElementsByClassName(n.GfdRt)[0].click(), e) : console.warn(n.Wubmf)
}

function sleep(e) {
    return new Promise((n => setTimeout(n, e)))
}
_getV = getV, _setV = setV, Number.prototype.decimal = function(e) {
    return Number(this.toFixed(e))
}, getSoundCloudUrl = () => {
    var e = {
        FWnvt: "data-e2e",
        PuTwY: function(e, n, t) {
            return e(n, t)
        },
        KXKXV: "browse-copy",
        CTGqs: "nrCHn"
    };
    try {
        return findhref2(document.querySelector("#app > div.playControls.g-z-index-control-bar.m-visible > section > div > div.playControls__elements > div.playControls__soundBadge.sc-ml-3x > div"))[0].href
    } catch {
        if (e.CTGqs == e.CTGqs) return;
        try {
            return !!g("browse-copy", e.FWnvt).parentNode && e.PuTwY(V, e.KXKXV, e.FWnvt).parentNode
        } catch (e) {
            return !1
        }
    }
}, async function() {
    var n = {
        ailhh: function(e, n) {
            return e + n
        },
        KbNeC: "https://y2mate.nu/",
        mlfdf: "y2mate.nu",
        uvkfe: "0HzX",
        anLIZ: "?v=",
        AeUet: "&s=",
        hJSvb: "/shorts/",
        FxbcR: "&mp4=",
        dgIXP: "&useT=",
        uPQIw: function(e, n) {
            return e(n)
        },
        MgBzz: "Fnuvb",
        dadps: function(e, n) {
            return e === n
        },
        ZvQMA: "tVPAN",
        FfcGT: function(e, n) {
            return e(n)
        },
        QqKcT: function(e) {
            return e()
        },
        mEWnI: function(e, n, t, r, o, i) {
            return e(n, t, r, o, i)
        },
        UYbGW: "button",
        PRpMH: "innerText",
        MrAIb: "click",
        JCtlA: "fixed",
        POZAo: "50%",
        ZoAyF: "80%",
        TqyYF: "embedMP3",
        pknEA: ".ytp-right-controls",
        PvhTY: "Added Button",
        RgJWs: "GetAudio",
        cybwH: "Download MP3",
        Flkil: ".playbackSoundBadge__actions",
        EgYib: function(e, n) {
            return e !== n
        },
        tCoxM: "OVpHj",
        BkTtC: function(e, n, t) {
            return e(n, t)
        },
        ANZhR: "/embed/",
        XjJKG: "Attaching to embeder >:]",
        WsJQb: function(e, n) {
            return e(n)
        }
    };
    async function t(t, r = 3e4) {
        var o = {
            IKQMU: function(e, t) {
                return n.uPQIw(e, t)
            }
        };
        if (n.MgBzz == n.MgBzz) {
            var i;
            for (n.uPQIw(sleep, r).then((e => i = !0)); !document.querySelector(t);)
                if (n.dadps("FYNIl", n.ZvQMA)) i = E.children, F.forEach = [].forEach, T.forEach((e => {
                    o.IKQMU(G, e)
                }));
                else if (await n.FfcGT(sleep, 0), i) break;
            return document.querySelector(t)
        }
        T = [n.ailhh(n.KbNeC, D(n.mlfdf) || n.uvkfe) + "/", n.anLIZ, G, n.AeUet, e.pathname.startsWith(n.hJSvb) ? 1 : 0, n.FxbcR, q ? "mp4" : "mp3", n.dgIXP, B], A.set("src", d.join(""))
    }
    return location.href.includes(n.ANZhR) ? (console.log(n.XjJKG), n.WsJQb(t, n.pknEA).then((async e => {
        let t = new _e(n.UYbGW, {
            id: "embedMP3"
        }).appendTo(e).set(n.PRpMH, "MP3").on(n.MrAIb, (function() {
            let e = n.QqKcT(getCurrentVideoID) || n.FfcGT(setElement, location.href);
            n.mEWnI(downloadT, e, !1, !0, !1, !0)
        })).style({
            position: n.JCtlA,
            right: n.POZAo,
            top: n.ZoAyF
        });
        for (; !document.getElementById(n.TqyYF) && document.querySelector(n.pknEA);) console.log("Appended"), t.appendTo(n.pknEA)
    }))) : (document.querySelector(n.pknEA), await n.BkTtC(t, n.Flkil, 5e3).then((async e => {
        var r = {
            lDViT: function(e, n) {
                return e(n)
            }
        };
        let o = new _e(n.UYbGW, {
            id: n.RgJWs
        }).appendTo(e).set(n.PRpMH, n.cybwH).on(n.MrAIb, (function() {
            downloadSC()
        }), (e => e));
        for (;;) !document.getElementById(n.RgJWs) && await t(n.Flkil, 5e3) && (n.EgYib("thPDv", n.tCoxM) ? await n.BkTtC(t, ".playbackSoundBadge__actions", 5e3).then((e => {
            o.appendTo(e), console.log(n.PvhTY)
        })) : r.lDViT(e, r)), await sleep(0)
    })))
}().then(console.log, console.warn), downloadSC = function() {
    var e = {
        SETBq: function(e, n, t) {
            return e(n, t)
        },
        wVbKf: "SCinfo",
        aYhST: function(e, n) {
            return e(n)
        },
        ZoEsD: "https://sclouddownloader.net/"
    };
    e.SETBq(GM_setValue, e.wVbKf, null), e.SETBq(GM_setValue, "sc", getSoundCloudUrl()), set_ || (set_ = 1, e.SETBq(GM_addValueChangeListener, e.wVbKf, (function(n, t, r, o) {
        console.log({
            a: n,
            b: t,
            c: r,
            d: o
        }), r && r.name && e.SETBq(_downloadFileAsTitle, r.href, r.name)
    }))), e.aYhST(open, e.ZoEsD)
}, GM_setValue_ = GM_setValue, GM_getValue_ = GM_getValue, GM_info_ = GM_info;
var UnmutePath = "M3.15,3.85l4.17,4.17L6.16,9H3v6h3.16L12,19.93v-7.22l2.45,2.45c-0.15,0.07-0.3,0.13-0.45,0.18v1.04 c0.43-0.1,0.83-0.27,1.2-0.48l1.81,1.81c-0.88,0.62-1.9,1.04-3.01,1.2v1.01c1.39-0.17,2.66-0.71,3.73-1.49l2.42,2.42l0.71-0.71 l-17-17L3.15,3.85z M11,11.71v6.07L6.52,14H4v-4h2.52l1.5-1.27L11,11.71z M10.33,6.79L9.62,6.08L12,4.07v4.39l-1-1V6.22L10.33,6.79 z M14,8.66V7.62c2,0.46,3.5,2.24,3.5,4.38c0,0.58-0.13,1.13-0.33,1.64l-0.79-0.79c0.07-0.27,0.12-0.55,0.12-0.85 C16.5,10.42,15.44,9.1,14,8.66z M14,5.08V4.07c3.95,0.49,7,3.85,7,7.93c0,1.56-0.46,3.01-1.23,4.24l-0.73-0.73 C19.65,14.48,20,13.28,20,12C20,8.48,17.39,5.57,14,5.08z",
    mutePath = "M17.5,12c0,2.14-1.5,3.92-3.5,4.38v-1.04c1.44-0.43,2.5-1.76,2.5-3.34c0-1.58-1.06-2.9-2.5-3.34V7.62 C16,8.08,17.5,9.86,17.5,12z M12,4.07v15.86L6.16,15H3V9h3.16L12,4.07z M11,6.22L6.52,10H4v4h2.52L11,17.78V6.22z M21,12 c0,4.08-3.05,7.44-7,7.93v-1.01c3.39-0.49,6-3.4,6-6.92s-2.61-6.43-6-6.92V4.07C17.95,4.56,21,7.92,21,12z";

function downloadFile_(e, n) {
    const t = document.createElement("a");
    t.href = e, t.download = n, document.body.appendChild(t), t.click(), document.body.removeChild(t)
}
_downloadFileAsTitle = async function(e, n, t, r) {
    var o = {
        WXNhL: "_blank",
        mLPPj: "function",
        rPrJz: function(e) {
            return e()
        },
        sThGX: function(e, n) {
            return e(n)
        }
    };
    const i = document.createElement("a");
    return i.style.display = "none", document.body.appendChild(i), o.sThGX(fetch, e).then((e => e.blob())).then((c => {
        const u = URL.createObjectURL(c);
        i.href = u, i.download = n, i.target = o.WXNhL, i.click(), URL.revokeObjectURL(u), (t || opener || window).postMessage({
            url: e,
            title: n,
            s: !0
        }, "*"), (typeof r).includes(o.mLPPj) && o.rPrJz(r)
    })).catch((r => {
        console.error("Error downloading file:", r), (t || opener || window).postMessage({
            url: e,
            title: n,
            s: !1
        }, "*")
    }))
}, _downloadFile_ = downloadFile_;
const query = function(e, n) {
    var t = {
        MrQzi: function(e, n) {
            return e != n
        },
        kqOCH: "undefined",
        yuPue: function(e, n) {
            return e(n)
        },
        ZrINT: function(e, n) {
            return e(n)
        }
    };
    try {
        let r = t.MrQzi(typeof $, t.kqOCH) ? $ : document.querySelectorAll;
        return n ? [...document.querySelectorAll(e)].filter((e => !(null === el.offsetParent)))[0] : (e => Object.keys(e).length ? e : null)(t.yuPue(r, e) ? r(e).length ? t.yuPue(r, e)[0] : t.ZrINT(r, e) : null)
    } catch {}
};
async function downloadVideo(e, n) {
    var t = {
        oMAtT: function(e, n) {
            return e(n)
        },
        xoSzk: function(e, n) {
            return e !== n
        },
        VWAOv: "kLCGe",
        ZmpUn: "uUodE",
        KPLvF: "Failed to download video:"
    };
    try {
        const r = await t.oMAtT(fetch, e);
        if (!r.ok) throw new Error("HTTP error! Status: " + r.status);
        const o = r.url,
            i = await r.blob(),
            c = window.URL.createObjectURL(i),
            u = document.createElement("a");
        u.href = c, u.download = n, document.body.appendChild(u), u.click(), document.body.removeChild(u), window.URL.revokeObjectURL(c), console.log("Video downloaded from: " + o)
    } catch (e) {
        t.xoSzk(t.VWAOv, t.ZmpUn) ? console.error(t.KPLvF, e) : (Q.log("TimeOut for", g), V = !0)
    }
}

function S() {
    var e = ["WRVdJ8klW6mzW60u", "WQtcRtxcTmo8W5tdUq", "W5dcKxvZCW/dHmkUW4BcSmkpW6xcPW", "xmk7A8oGAdzJeSkOFmk8i1K", "W4mdnqiKbJC", "nZGZmty2nw1wDvDPyq", "ASooWP3cNCkXC8kgsCkXmCkrW4mb", "ndmYntqYnfPmrvfyDW", "WQ7dJ8oAC8o3FSopsuFdNxFdM8ks", "mtfxrMrdu0i", "WP3cV37cIaSfla", "DxH3v8oPW6DqW4rvgSoAWP0q", "pCoOdwu1W7RdQGDEsSkCWOFcNa", "WPmWyaRcUcvi", "W43dQmkQFX0LW77dUGXbcLRdIa", "W4lcHvj8WR/cMdJcVY0bbLddJq", "W513qmk6W4ZcTJa0", "ote5otG3nKfIyM5qra", "Cxr6vmoTWOupW6bXgSoi"];
    return (S = function() {
        return e
    })()
}
getElementByAttribute = function(e, n = "aria-label", t = document.body) {
        var r = {
                yZpAV: function(e, n) {
                    return e(n)
                },
                VMfHt: function(e, n) {
                    return e(n)
                },
                TEzkR: function(e, n) {
                    return e == n
                },
                fmeJq: function(e, n) {
                    return e === n
                },
                jKkIV: "kAUDh",
                FOdWO: "JIWkd",
                JRgow: "KAxjR",
                caVyG: function(e, n) {
                    return e == n
                },
                WVVxm: function(e, n) {
                    return e || n
                }
            },
            o = [];
        return r.yZpAV((function i(c) {
            var u = {
                bUAYJ: function(e, n) {
                    return r.VMfHt(e, n)
                }
            };
            if (r.TEzkR(c.getAttribute(n), e)) o.push(c);
            else {
                if (r.fmeJq(r.jKkIV, r.FOdWO)) return u.bUAYJ(t, this.toFixed(r));
                c.children.length && ("bzvJR" === r.JRgow ? (r.log("Muted ad"), o = 1, i.muted = 1) : ((c = c.children).forEach = [].forEach, c.forEach((e => {
                    r.yZpAV(i, e)
                }))))
            }
        }), t), r.caVyG(o.length, 1) ? o[0] : r.WVVxm(o, !1)
    }, get_aria_label = function(e, n = document.body) {
        var t = {
                dIZil: "No id Found",
                zDFyU: function(e, n) {
                    return e(n)
                },
                kGXzg: "aria-label",
                WdZIJ: function(e, n) {
                    return e === n
                },
                AQWYz: "IbQfQ",
                XmQdZ: "PhUYp",
                zGcAT: function(e, n) {
                    return e(n)
                }
            },
            r = [];
        return t.zGcAT((function o(i) {
            i.getAttribute(t.kGXzg) == e ? r.push(i) : t.WdZIJ(t.AQWYz, t.XmQdZ) ? n.warn(t.dIZil) : i.children.length && ((i = i.children).forEach = [].forEach, i.forEach((e => {
                t.zDFyU(o, e)
            })))
        }), n), r[0] || !1
    }, getClass = function(e) {
        return document.getElementsByClassName("ehlq8k34")[0]
    },
    function() {
        var e = {
            mChYd: function(e, n, t) {
                return e(n, t)
            },
            HYeZC: function(e) {
                return e()
            },
            WvJtQ: function(e, n, t) {
                return e(n, t)
            },
            vjFew: function(e, n) {
                return e !== n
            },
            XIoRX: "JcEeG",
            EGyvs: "HTML",
            uNQzo: "focus",
            rvtFe: "input",
            OvpEi: "change",
            OwbkF: "blur",
            ISujJ: function(e, n) {
                return e === n
            },
            yaaie: "MsiLi",
            nuliI: "sSTxO",
            qmZWs: function(e, n) {
                return e < n
            },
            Uvgns: "Appending:",
            DYzTO: function(e, n) {
                return e == n
            },
            fndhv: "string",
            iiyRf: function(e, n) {
                return e + n
            },
            RHdgx: ".mp4",
            NBwzJ: ".mp3",
            QfrDw: "Handled",
            aWAOK: "Get MP3",
            zfMte: "disabled",
            NoUjQ: "Getting video",
            FaVRP: function(e, n, t) {
                return e(n, t)
            },
            KsDzg: function(e, n) {
                return e(n)
            },
            FjLGf: function(e, n) {
                return e !== n
            },
            unyYr: "dZKvv",
            djzdB: "etEgy",
            ZvKaG: "IWdfp",
            LwcTY: "vrgqF",
            HNLmD: "length",
            VpJse: function(e, n) {
                return e === n
            },
            hWPbi: "cZCRo",
            Smmsk: function(e, n) {
                return e != n
            },
            FuQRl: function(e, n) {
                return e < n
            },
            bgchW: function(e, n) {
                return e === n
            },
            zrDLG: "path",
            IlJxU: function(e, n, t) {
                return e(n, t)
            },
            HOSvE: "title",
            OgVVW: "NHZzU",
            NZaui: "NvxNL",
            GFuwY: "#cardApiIframe",
            KyrPA: function(e, n) {
                return e(n)
            },
            ujsuz: "Added That Thing",
            JADYo: function(e, n) {
                return e != n
            },
            xEysp: "src",
            gSgkp: "button",
            qPhRS: "embedMP3",
            MPIoU: "innerText",
            nUemC: "MP3",
            IEYOw: "fixed",
            eXArg: "50%",
            XMPeb: ".ytp-right-controls",
            TSWTH: "Appended",
            isXaU: function(e, n) {
                return e(n)
            },
            NsJtb: function(e, n) {
                return e !== n
            },
            vhfRu: "FpnNN",
            UkJkS: "OEQzY",
            MEFug: "#app > div.css-14dcx2q-DivBodyContainer.e1irlpdw0 > div:nth-child(4) > div > div.css-1qjw4dg-DivContentContainer.e1mecfx00 > div.css-1stfops-DivCommentContainer.ekjxngi0 > div > div.css-1xlna7p-DivProfileWrapper.ekjxngi4 > div.css-1u3jkat-DivDescriptionContentWrapper.e1mecfx011 > div.css-1nst91u-DivMainContent.e1mecfx01 > div.css-bs495z-DivWrapper.e1mzilcj0 > div > div.css-1d7krfw-DivOverflowContainer.e1mzilcj5 > h1",
            yJanE: "Replying to ",
            MECYx: "#app > div.css-14dcx2q-DivBodyContainer.e1irlpdw0 > div:nth-child(4) > div > div.css-1qjw4dg-DivContentContainer.e1mecfx00 > div.css-1stfops-DivCommentContainer.ekjxngi0 > div > div.css-1xlna7p-DivProfileWrapper.ekjxngi4 > div.css-1u3jkat-DivDescriptionContentWrapper.e1mecfx011 > div.css-1nst91u-DivMainContent.e1mecfx01 > div.css-bs495z-DivWrapper.e1mzilcj0",
            CJizT: function(e, n) {
                return e === n
            },
            SiIEw: "ECiTk",
            gyOAV: "browse-video-desc",
            mFpik: "data-e2e",
            vRTNC: "#main-content-video_detail > div > div.css-12kupwv-DivContentContainer.ege8lhx2 > div.css-1senhbu-DivLeftContainer.ege8lhx3 > div.css-1sb4dwc-DivPlayerContainer.eqrezik4 > div.css-3lfoqn-DivDescriptionContentWrapper-StyledDetailContentWrapper.eqrezik15 > div.css-r4nwrj-DivVideoInfoContainer.eqrezik3 > div.css-bs495z-DivWrapper.e1mzilcj0 > div > h1",
            siQWe: function(e, n) {
                return e != n
            },
            CPDVO: function(e, n) {
                return e(n)
            },
            GxvqX: function(e, n) {
                return e(n)
            },
            ygLSB: "#VGHGFf > div > div.Eddif > div:nth-child(2) > button > div.VfPpkd-RLmnJb",
            bbWiX: "#yDmH0d > c-wiz > div > div > div:nth-child(2) > div.LLEp8b > div > div.rTq3hb > div:nth-child(1) > div > div.ofmULb > div:nth-child(2) > div > button",
            sDiNT: function(e, n, t) {
                return e(n, t)
            },
            LVErM: "Why this ad?",
            CBfUn: function(e, n) {
                return e != n
            },
            rzhcU: "dlbutton",
            lhmtc: "GbeVg",
            LYBzl: "sfYaF",
            UBJai: function(e, n) {
                return e(n)
            },
            DFrXl: "KfboF",
            EJFUb: "function",
            YdTFQ: function(e, n) {
                return e instanceof n
            },
            xLMCC: function(e, n) {
                return e >= n
            },
            eIJQQ: function(e, n) {
                return e - n
            },
            dwzqI: function(e, n) {
                return e / n
            },
            SxMul: function(e, n) {
                return e >= n
            },
            LKLrU: function(e, n) {
                return e <= n
            },
            EOMYN: function(e, n) {
                return e <= n
            },
            lfgHs: "aOoDg",
            QlZvG: function(e) {
                return e()
            },
            Chyub: "click",
            ZMIxu: "80%",
            YDNFo: "ArCij",
            XWRiu: function(e, n) {
                return e || n
            },
            Lcluc: function(e, n) {
                return e === n
            },
            kbGba: function(e, n) {
                return e !== n
            },
            clBHq: "csjFf",
            oGiHS: function(e, n) {
                return e(n)
            },
            DOzwS: "clicked",
            KKQuh: "KraTt",
            hFuvJ: function(e, n) {
                return e(n)
            },
            WbHVg: "Caught",
            OcKkg: "IzvPJ",
            pFvfa: "KBfOl",
            pBANQ: ".ytp-volume-area > .ytp-mute-button",
            QJyZk: function(e, n) {
                return e !== n
            },
            rkRRw: "OksnC",
            SsaHq: "JMkRL",
            NhXbe: function(e, n) {
                return e !== n
            },
            MSHzj: "zgBGq",
            nprxw: function(e, n) {
                return e === n
            },
            rrNke: "DeSFg",
            rOhdS: "._acaz",
            GaRjZ: "Go back",
            bwNCU: function(e, n) {
                return e(n)
            },
            PbkSi: function(e, n) {
                return e(n)
            },
            EBywt: "._afxv",
            knAPn: "Next",
            cuEJQ: function(e, n) {
                return e(n)
            },
            FIKra: function(e, n) {
                return e(n)
            },
            hJnWY: "._afxw",
            dgTfH: "Bbudh",
            YzAzn: ".xt0psk2.xvs91rp.xo1l8bm.x5n08af.x18hxmgj",
            ajHAn: function(e, n) {
                return e == n
            },
            MXlra: "Unhandled Post",
            WubbA: function(e, n) {
                return e > n
            },
            uEWZP: "video/mp4",
            hJtOD: "none",
            Wvwbj: "JxBoU",
            SHEKh: "blob:",
            rvtlC: function(e, n) {
                return e + n
            },
            fwvwp: function(e, n, t) {
                return e(n, t)
            },
            Zxyow: "instaURL",
            eySlz: "reel",
            seEGK: "kgZls",
            UzqxF: "https://fastdl.app/en",
            kdJoJ: "#end",
            rIjNK: "#right-content",
            cogqk: function(e, n) {
                return e !== n
            },
            Mbppm: "ANmqI",
            uPEzm: "img",
            ESmPs: "alt",
            rgPBj: "wqJpv",
            weKiw: function(e, n, t) {
                return e(n, t)
            },
            UbBBa: function(e, n, t) {
                return e(n, t)
            },
            brzmr: "Mute",
            ymjrH: function(e, n, t) {
                return e(n, t)
            },
            LrkoZ: "Mute (m)",
            iPmMa: function(e, n, t, r, o) {
                return e(n, t, r, o)
            },
            ifYYc: "tGpEl",
            XOlfr: function(e, n) {
                return e === n
            },
            PNxLK: "HMECi",
            gjyLJ: function(e) {
                return e()
            },
            cJLmt: function(e, n) {
                return e(n)
            },
            IjBcf: "veNob",
            lRFia: "RQGCt",
            CLhvw: function(e) {
                return e()
            },
            aSiyS: function(e) {
                return e()
            },
            HFJEO: function(e) {
                return e()
            },
            RkcSy: function(e, n) {
                return e === n
            },
            HTuBS: "wlacv",
            udtWT: function(e) {
                return e()
            },
            sqpxq: "done",
            kACnJ: function(e, n) {
                return e(n)
            },
            ZRRHN: function(e, n) {
                return e !== n
            },
            ntIoP: "nPPBp",
            dmnEL: function(e) {
                return e()
            },
            VITKd: "convert1",
            QHJuU: "this",
            LFerO: "#MediaButton",
            qaClp: function(e) {
                return e()
            },
            vYOtm: "._aaqy",
            BvULA: "Fcvur",
            Eiynn: function(e, n) {
                return e !== n
            },
            SgQcJ: "liJGc",
            aalAO: function(e, n, t) {
                return e(n, t)
            },
            KAvzn: function(e, n) {
                return e(n)
            },
            fhImb: "Cant find input",
            TquNi: "Found a",
            RbSCC: function(e, n, t) {
                return e(n, t)
            },
            ujMsz: ".search-form__button",
            MIgga: ".button--filled",
            BjqGY: function(e) {
                return e()
            },
            CMxvu: function(e, n) {
                return e === n
            },
            PlrRK: "NJSLd",
            HEVYw: function(e, n, t) {
                return e(n, t)
            },
            hVqnJ: "https://sclouddownloader.net/",
            LRtGd: function(e, n) {
                return e === n
            },
            oDSDc: "XflLg",
            snWnr: "Public",
            prsQs: "Doesnt work yet",
            IMcbI: "#video-list",
            hVujW: "Found",
            rplew: "Not FOund",
            GTzMa: "MediaButton2",
            SymYL: "Get Videos",
            hoSxg: ".xh8yej3.x1iyjqo2",
            NZlze: "MediaButton",
            vOesy: "Get Images",
            xrVbh: "Appended buttons man",
            FwVAQ: function(e, n) {
                return e(n)
            },
            SqRgM: "PvyXL",
            xsUkm: "Added Button",
            eBtVi: "#header-description",
            fjneP: function(e, n) {
                return e(n)
            },
            ktBjF: function(e, n) {
                return e(n)
            },
            mGvsw: "/download-sound-track",
            IPUdx: "6|5|7|3|2|4|0|1",
            TARnb: function(e, n, t) {
                return e(n, t)
            },
            yGURF: "#trackTitle",
            mUMmn: function(e, n) {
                return e(n)
            },
            faXGN: "#trackLink",
            SUmBg: function(e, n) {
                return e !== n
            },
            PIjiA: "xvQVn",
            aNbrT: "3|2|0|1|4",
            KexnT: "#submitBtn",
            KFxgN: function(e, n, t) {
                return e(n, t)
            },
            Rysdt: "#urlInput",
            Dztpt: "Bruv",
            MzfwJ: "0|5|3|2|4|1|6",
            mTiks: "Got",
            NZGRj: function(e, n) {
                return e == n
            },
            HyFEo: "undefined",
            BUVSn: "rzoLX",
            xXoaT: "EZ url",
            SyznQ: function(e) {
                return e()
            },
            COQYx: "div.x78zum5.xdt5ytf.x1iyjqo2.xs83m0k.x2lwn1j.x1odjw0f.x1n2onr6.x9ek82g.x6ikm8r.xdj266r.x11i5rnm.x4ii5y1.x1mh8g0r.xexx8yu.x1pi30zi.x18d9i69.x1swvt13 > ul > div:nth-child(3) > div > div",
            EUGwM: function(e, n) {
                return e !== n
            },
            MKZXr: "WVAmz",
            hmOiR: "WDAco",
            fnJhB: "TimeOut for",
            LcWGF: "LZAyH",
            Qpwjh: function(e, n, t) {
                return e(n, t)
            },
            UkEze: "NotFound",
            YmyFZ: function(e, n) {
                return e(n)
            },
            fDRPu: "6|1|4|2|3|5|0",
            xFvzn: function(e) {
                return e()
            },
            kbJNP: "Posted",
            TlJiu: function(e, n, t) {
                return e(n, t)
            },
            uivoi: "nYdDx",
            Wccpp: "LrmHI",
            zmbPL: "complete",
            hkSYs: function(e, n) {
                return e(n)
            },
            iYYLT: function(e, n) {
                return e !== n
            },
            kGLWM: "RLWaP",
            wcXiW: "VindM",
            qSnrB: "#url",
            jDkMN: "#progress",
            fWJNG: "Error:",
            FunCs: "No id Found",
            MpYKJ: "360",
            SCInF: function(e, n) {
                return e === n
            },
            qXGVg: function(e, n) {
                return e + n
            },
            rDPOf: "https://y2mate.nu/",
            yjPrT: "y2mate.nu",
            PpKXq: "&s=",
            MeYDU: "&mp4=",
            gQFDC: "mp3",
            JOPCR: "no-referrer",
            QmrNy: function(e, n, t) {
                return e(n, t)
            },
            cZgyq: "QHGsr",
            eNdtX: function(e, n) {
                return e(n)
            },
            eITFR: "iFrameResize function not available",
            RVGAS: function(e, n) {
                return e !== n
            },
            zjaac: "Ylslr",
            vFeYj: "fMSbt",
            umoDS: "was clicked",
            saXvc: "was created",
            jmdia: "EBPAX",
            alkbw: "awiiX",
            ifiHC: "video download successful\ncheck downloads folder",
            PvhkI: "vidbutton",
            oifRs: "#downloadBtn",
            uwxhO: "2|0|3|1|4",
            WSWSU: "YrEAS",
            KZYym: "XjoFg",
            jJciW: function(e, n) {
                return e != n
            },
            wvzqz: function(e, n) {
                return e - n
            },
            bQTon: function(e, n) {
                return e(n)
            },
            JspMu: "#dlbutton",
            JCLGf: function(e, n) {
                return e == n
            },
            lwHQL: "BsPIU",
            XDLiT: function(e, n) {
                return e(n)
            },
            TbdxN: ".cell-body.tablecell-visibility.style-scope.ytcp-video-row",
            lByUC: "Get",
            hQVbW: function(e, n) {
                return e !== n
            },
            AWGGV: "sHKAP",
            KfOBT: function(e, n) {
                return e(n)
            },
            podYV: function(e, n) {
                return e(n)
            },
            QJzXD: function(e, n, t) {
                return e(n, t)
            },
            YIeKb: function(e, n) {
                return e === n
            },
            XxwyY: "zKSiB",
            upatZ: "DMbRC",
            QGAFq: "#btn-action",
            qFIpE: "#asuccess",
            gxRln: function(e, n) {
                return e(n)
            },
            XMgRZ: function(e, n) {
                return e == n
            },
            wiaVl: "href",
            seBBc: function(e, n) {
                return e || n
            },
            QvQWH: "?!!",
            oiaRl: "isclosed",
            ZVWGy: function(e, n) {
                return e !== n
            },
            lnlQZ: "ohytq",
            PlFxC: "DYCya",
            lyfxr: function(e, n) {
                return e(n)
            },
            TTwXO: "pnXVI",
            JsaNj: "qDyoC",
            GKNWn: function(e, n) {
                return e instanceof n
            },
            LxfbG: function(e, n) {
                return e === n
            },
            RsphX: "QEgeh",
            WCjgf: "TEXTAREA",
            bsXwh: "KeyI",
            zbmKN: function(e, n) {
                return e(n)
            },
            qjghg: "Close player page",
            ainFu: "Open player page",
            IwTKl: "720",
            bmenz: "VOD",
            vJYJY: "480",
            Bwkxy: "sgoma",
            qyYxX: "wrXAM",
            cATfD: function(e, n) {
                return e(n)
            },
            VdUda: ".ScCoreButtonLabel-sc-s7h2b7-0",
            vXDHk: "1080P",
            WuaaK: "720P",
            UHDVH: "480P",
            wYyVB: "360P",
            OdCjp: function(e, n) {
                return e(n)
            },
            uWedv: function(e, n) {
                return e instanceof n
            },
            ZyPwZ: "Provided argument is not a DOM element.",
            ofUIp: "Skipping ad :>",
            Ekwwn: function(e, n) {
                return e >= n
            },
            OSATA: function(e, n) {
                return e - n
            },
            MRqcJ: function(e, n) {
                return e <= n
            },
            BvYlz: function(e, n) {
                return e + n
            },
            kdkoH: "cNpSg",
            CPILc: function(e, n) {
                return e(n)
            },
            mSZQY: ".Layout-sc-1xcs6mc-0.bMOhzu",
            ECHvd: ".Layout-sc-1xcs6mc-0 .bMOhzu",
            mtuhP: ".bFxzAY",
            KfvNj: "1080",
            RTuju: "form-app-root",
            LaYdI: "#download-720-MP4",
            lVtJZ: function(e, n) {
                return e(n)
            },
            RmcMd: function(e, n) {
                return e(n)
            },
            STkjP: "UMOUA",
            zoZab: "IlKaR",
            JxpsI: "uBnLH",
            JKbyr: ".flex.items-center.space-x-4",
            IYqPF: function(e, n) {
                return e !== n
            },
            bVWQG: ".space-x-1",
            nDvjf: function(e) {
                return e()
            },
            hBKNJ: "body > div.relative.overflow-hidden > main > div > div.px-4.mx-auto.max-w-7xl.sm\\:px-6.lg\\:px-8 > div.mb-6.space-y-3.lg\\:flex.lg\\:items-center.lg\\:justify-between.lg\\:space-y-0 > div.lg\\:flex.lg\\:items-center > p > span:nth-child(1)",
            itXyp: "body > div.relative.overflow-hidden > main > div > div.px-4.mx-auto.max-w-7xl.sm\\:px-6.lg\\:px-8 > div.mb-6.space-y-3.lg\\:flex.lg\\:items-center.lg\\:justify-between.lg\\:space-y-0 > div.lg\\:flex.lg\\:items-center > h2",
            muFuQ: "ytp-video-menu-item ytp-button",
            HFZNK: "Opening",
            DsOPY: "ytp-playlist-menu-button ytp-button",
            mnbKX: "Closiung",
            AnkEf: function(e, n) {
                return e !== n
            },
            odTzP: "yAeGt",
            vYHgt: "0|1|3|4|2",
            sjTaZ: "TSMtf",
            ofPWO: "nxKNd",
            MWiYN: function(e, n) {
                return e(n)
            },
            bVMoo: "https://savetik.co",
            RBiSW: " - ",
            JTjzr: function(e, n) {
                return e(n)
            },
            EqDHY: "eDFEG",
            PieKY: "CHFBZ",
            yozZo: function(e, n) {
                return e || n
            },
            dayVo: function(e, n, t) {
                return e(n, t)
            },
            eFctY: function(e, n, t) {
                return e(n, t)
            },
            EJzIf: "vZaxx",
            qOtWL: "hcLpI",
            pQRGh: function(e, n) {
                return e(n)
            },
            oOMJU: "#convert",
            SkbGI: function(e, n) {
                return e(n)
            },
            BYSfa: ".process-button",
            KsaqP: "PUIMx",
            ZGfzd: "music",
            CUuuV: "These button dont work on youtube music yet",
            wIGNy: function(e, n) {
                return e === n
            },
            hnADN: "ZHvpL",
            mTYGm: "https://sss.instasaverpro.com",
            bmivW: function(e, n) {
                return e == n
            },
            zcpsk: function(e, n) {
                return e == n
            },
            mIPWU: "https://snapsave.io",
            kEtov: function(e, n) {
                return e == n
            },
            KaCML: "https://tubemp4.is",
            rwDek: "LaxSk",
            naoFe: function(e, n) {
                return e + n
            },
            ugnJO: function(e, n, t) {
                return e(n, t)
            },
            UMLcA: "0HzX",
            sFXcm: "/shorts/",
            zKykp: "mp4",
            zsOKV: "&useT=",
            oexJR: function(e, n) {
                return e !== n
            },
            Rxjui: "OPvSX",
            rAGxL: "lazy",
            CtPhI: "autoplay; fullscreen; geolocation; microphone; camera",
            mnbgn: function(e, n) {
                return e + n
            },
            ZRLZd: "mz.com",
            quNkO: function(e, n) {
                return e + n
            },
            PTzMm: function(e, n) {
                return e + n
            },
            YWMaZ: function(e, n, t, r) {
                return e(n, t, r)
            },
            cBGJi: "unload",
            sjHWo: "https://yt5s.biz/enxj100/",
            kCJrP: function(e, n) {
                return e + n
            },
            wHwel: "FMVwC",
            YrbGY: "mpIqp",
            XZAbU: function(e, n) {
                return e(n)
            },
            NbEbr: "ehlq8k34",
            SfjTB: "AYMJJ",
            GSyIi: function(e, n, t, r) {
                return e(n, t, r)
            },
            ZvIrz: "cfPRu",
            hIdFl: function(e, n) {
                return e(n)
            },
            vEoMl: function(e, n) {
                return e === n
            },
            ScBJA: "SfULu",
            QnOsh: "hhbki",
            DodIp: "RuigI",
            fethI: "LbYIC",
            AZfOD: function(e, n) {
                return e == n
            },
            lBplt: function(e, n) {
                return e !== n
            },
            tHRqi: "DAoiu",
            jjcJu: function(e, n) {
                return e === n
            },
            FvDRw: "xJYpZ",
            PeefU: function(e, n, t) {
                return e(n, t)
            },
            GbvlN: function(e, n, t) {
                return e(n, t)
            },
            DxRgp: function(e, n) {
                return e === n
            },
            pghSg: "woXcb",
            wbOWn: function(e, n) {
                return e(n)
            },
            CGIII: "#right-controls",
            peIvz: function(e, n) {
                return e == n
            },
            BIcas: function(e, n, t) {
                return e(n, t)
            },
            pZfHj: "Unmute (m)",
            brRit: "1|2|5|6|4|0|3",
            mNsEl: function(e) {
                return e()
            },
            JVuQG: function(e, n, t) {
                return e(n, t)
            },
            CypRX: "div",
            cPCjT: function(e, n) {
                return e === n
            },
            oZPxJ: "zrecB",
            zkYRP: "bExlU",
            YDrnW: "whnlj",
            GidzD: function(e, n, t) {
                return e(n, t)
            },
            iMumP: function(e, n) {
                return e !== n
            },
            hmRxG: function(e, n) {
                return e !== n
            },
            xeMCD: function(e, n) {
                return e !== n
            },
            Nckwb: "NOylW",
            yAQXr: "download",
            uSsbS: function(e, n, t) {
                return e(n, t)
            },
            UgWkA: "This button is corrently broken",
            Nioem: function(e, n) {
                return e < n
            },
            iQNqt: "NlGbO",
            BHcPH: "win",
            wCZtn: function(e, n, t, r, o, i) {
                return e(n, t, r, o, i)
            },
            LOhWa: function(e, n) {
                return e(n)
            },
            WKQDI: function(e, n) {
                return e !== n
            },
            lXjwc: "mjGBf",
            VVVTT: function(e, n, t, r) {
                return e(n, t, r)
            },
            gVnmH: function(e, n, t) {
                return e(n, t)
            },
            HJggu: function(e, n) {
                return e(n)
            },
            CGzpn: function(e, n) {
                return e(n)
            },
            SltAo: "WGhHL",
            uIyuZ: "BKDFg",
            rjzfD: function(e, n) {
                return e(n)
            },
            BCCtC: function(e, n) {
                return e(n)
            },
            LhbPV: "NfZdd",
            SdGlk: function(e, n, t) {
                return e(n, t)
            },
            aCVxK: function(e, n) {
                return e(n)
            },
            dSQLf: function(e, n) {
                return e(n)
            },
            queVY: "Title: ",
            fdAqL: "csNfj",
            nLTUJ: ".autoplay",
            IlCDF: "AdCfR",
            jBeVO: "#app > div.playControls.g-z-index-control-bar.m-visible > section > div > div.playControls__elements > div.playControls__soundBadge.sc-ml-3x > div",
            Qrjre: "zeVsM",
            YgPBL: function(e) {
                return e()
            },
            VbNmk: "Added playlist buttons",
            rOdND: "wipFl",
            KrgYg: "buttons are gone?!?!",
            yxBul: function(e, n) {
                return e !== n
            },
            UBJuq: "ZBiHj",
            Pyuuy: "Posted Buttons",
            HaGIk: "shorts/",
            uFDPA: "watch?v=",
            bzPin: "Searched",
            ruFau: "Cant append buttons yet",
            LqfMU: "JzFqn",
            ocqmR: "NRXDL",
            MFoDE: "JkKBG",
            VbcAt: "xaCxF",
            AReqT: function(e, n) {
                return e === n
            },
            vJUCQ: "SsJrX",
            taIKc: "UrirE",
            EMwOI: function(e, n, t) {
                return e(n, t)
            },
            JQwvr: function(e, n) {
                return e(n)
            },
            vsRmy: "ytd-playlist-panel-renderer",
            ooAzz: function(e, n, t) {
                return e(n, t)
            },
            muWnb: "span",
            UMrDE: function(e, n) {
                return e(n)
            },
            oakID: "browse-copy",
            tJfwW: "Cant Append",
            MECfh: ".e1mecfx011",
            rWHgK: "YnHhv",
            VAKKP: function(e, n) {
                return e !== n
            },
            zceiE: "jrROq",
            JxFYc: "ygDAp",
            OlYdI: function(e, n, t) {
                return e(n, t)
            },
            BBdWt: function(e, n) {
                return e(n)
            },
            hITmQ: function(e, n) {
                return e === n
            },
            mdNqC: "lvrLF",
            SalPR: "error-text",
            jLQAr: function(e) {
                return e()
            },
            GxFIz: function(e, n, t) {
                return e(n, t)
            },
            DcbZs: function(e) {
                return e()
            },
            LjFIR: function(e, n, t) {
                return e(n, t)
            },
            hmNKy: function(e, n) {
                return e != n
            },
            jYtIM: function(e) {
                return e()
            },
            rRhjU: function(e) {
                return e()
            },
            OfYlq: function(e, n) {
                return e !== n
            },
            Pnmte: "lFHbG",
            EjZmU: "search_txt",
            fxUcR: "btn-submit",
            QbDTt: "no there",
            QTmsV: "Jqvju",
            BuUkV: "ZoIjs",
            hlQDx: function(e, n) {
                return e < n
            },
            wPKfL: function(e, n) {
                return e(n)
            },
            PFXMM: "No info Preset",
            UAMup: function(e, n) {
                return e == n
            },
            WfvAA: "#txt-url",
            ijCny: "#btn-submit",
            zFNAj: "GEtting res",
            XoGoM: function(e, n) {
                return e(n)
            },
            TqjkH: function(e, n) {
                return e(n)
            },
            wKncV: "Got Res",
            FZDit: "#video_title",
            vhEfV: "#result",
            mPyLM: "table",
            vYOWC: function(e, n) {
                return e || n
            },
            ueWXc: function(e, n) {
                return e(n)
            },
            sXksi: "Closed ad card",
            jNJEw: "OCFPk",
            XREym: function(e, n) {
                return e(n)
            },
            kQtBO: "#A_downloadUrl",
            rTvim: "Done",
            VGOQh: "#myModalLabel",
            HmWtE: function(e, n) {
                return e || n
            },
            mNDYK: function(e, n, t) {
                return e(n, t)
            },
            RoAyd: "JkgYX",
            qFkJZ: "CQUln",
            UuPAp: "texturl",
            fSUzL: function(e, n) {
                return e == n
            },
            YhzbJ: "Searching",
            RMdZs: "txaQm",
            IZxVd: "huowz",
            EUSLG: "1|5|2|4|3|0",
            fZFjJ: function(e, n) {
                return e == n
            },
            jWRHN: function(e, n) {
                return e(n)
            },
            cwluY: function(e, n) {
                return e(n)
            },
            qlctO: "CDtES",
            pSjae: function(e, n) {
                return e === n
            },
            erLOn: "qxMYN",
            mWfrx: "QqfWY",
            FnrTb: function(e, n, t, r, o) {
                return e(n, t, r, o)
            },
            PXlvf: function(e, n, t) {
                return e(n, t)
            },
            ZwJSm: function(e, n) {
                return e(n)
            },
            lEElP: "XSKdr",
            JuDMC: "clearfix",
            hjCTs: "https://www.tiktok.com",
            Wgqka: function(e, n) {
                return e || n
            },
            VJLkF: function(e, n) {
                return e(n)
            },
            LUJgj: "INPUT",
            eMBbA: function(e, n) {
                return e == n
            },
            ouvTb: "EnBTH",
            FQeRx: "collapse-frame",
            BbRsH: function(e, n) {
                return e !== n
            },
            TdNFV: "Wait...",
            NCYUg: function(e, n, t, r, o, i) {
                return e(n, t, r, o, i)
            },
            VDbxs: "Error downloading file:",
            Iwyeu: function(e, n, t) {
                return e(n, t)
            },
            MqsIT: "#secondary.ytd-watch-flexy",
            Iqbaw: "https://loader.to/api/card2/?url=",
            FWPQy: function(e, n) {
                return e === n
            },
            dsgea: "OQLhG",
            LKrJC: function(e, n) {
                return e != n
            },
            xzTtd: "Fixed That Thing",
            VlakV: function(e, n) {
                return e(n)
            },
            fCpWi: "yt-button-view-model#dismiss-button",
            IFnYX: "ytp-ad-button-icon",
            oGDrZ: "EoIHE",
            AKGgV: "Muted ad",
            DAbvM: "LMFpx",
            aWWYs: "Unmuted video",
            QnKHd: "Failed unmuting",
            GJSYp: "#song-video",
            RgAig: "#ytd-player",
            WWISr: function(e, n) {
                return e != n
            },
            pONBC: "GGvEp",
            KseYa: ".yt-spec-button-shape-next",
            pqVUA: "watch",
            saQfL: "https://onlymp3.app",
            KSJbd: "fastdl.app",
            yHvZu: function(e, n) {
                return e == n
            },
            CJEpK: "kYBuo",
            blRVc: "DhrdA",
            uiMWR: function(e, n) {
                return e === n
            },
            nXqHT: "VbmYv",
            ygoDb: "akBqR",
            RqZRX: "www.instagram.com",
            MdtTY: function(e, n) {
                return e !== n
            },
            XqgHK: "VSFkb",
            kRvdE: "sgoHV",
            DAKfN: "Insta ballz",
            wDHqn: function(e, n) {
                return e == n
            },
            LkyuI: "sclouddownloader.net",
            hRMuN: "xRzjh",
            swoGI: "oXusb",
            uyOiw: function(e, n) {
                return e === n
            },
            yfHoN: "MpcSn",
            SnLSY: "wSaYB",
            XWDGu: function(e, n) {
                return e != n
            },
            Ekkko: function(e, n, t) {
                return e(n, t)
            },
            zJmHb: "updated",
            PJXVt: "useT",
            msrGK: function(e, n) {
                return e == n
            },
            kGdaw: "qdownloader.cc",
            SnzAd: function(e, n) {
                return e == n
            },
            kESzP: "clips.twitch.tv",
            RsiBq: "ttTAA",
            qeGJp: function(e, n) {
                return e == n
            },
            PoXlC: "www.twitch.tv",
            yTvhy: "clip",
            tPuAb: "User isnt wathcing a clip",
            rhzqM: "User is Watching a CLip",
            cNsXO: "tubemp4.is",
            BwmXz: "PlayList MP3",
            VMnJk: "PlayList MP4",
            UCLHE: "Get MP4",
            wTVBD: "blue",
            KYauD: "bruh",
            hEqcx: "onlymp3.app",
            jqeLj: "onlymp3.to",
            uYUtj: "imyKM",
            qXgoA: function(e, n, t) {
                return e(n, t)
            },
            qVWsv: "Getting MP3",
            IbdYl: "www.yt2conv.com",
            xSIVo: "gBKAs",
            iMmle: "Getting MP4",
            XFoic: function(e, n, t) {
                return e(n, t)
            },
            rdPhh: function(e, n, t) {
                return e(n, t)
            },
            kXgeZ: function(e, n, t) {
                return e(n, t)
            },
            AUxsK: "yt5s.biz",
            WboxK: function(e, n) {
                return e === n
            },
            gKiAc: "SkbaD",
            lptXv: "NO info Preset",
            ZxYPk: function(e, n) {
                return e == n
            },
            YaKtO: function(e, n, t) {
                return e(n, t)
            },
            Tdcnt: "savetik.co",
            EutQA: "Added MiniPlayer Toggle with I",
            jOIav: function(e, n, t) {
                return e(n, t)
            },
            zMgJj: "keypress",
            MfTtY: "loader.to",
            tNdhC: "/api/",
            AXmVU: function(e, n) {
                return e === n
            },
            qNYFH: "using loader.to api",
            tWOti: "style",
            SIiTW: function(e, n) {
                return e(n)
            },
            fprnN: "iframe",
            UGHKU: "cardApiIframe",
            lKEpf: "100%",
            lbDVr: "true",
            SemSf: "border: none",
            yxpCf: "script",
            YIlqZ: "https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.9/iframeResizer.min.js",
            ALDWX: "load",
            vmCAb: function(e, n) {
                return e(n)
            },
            LmGKF: function(e, n, t) {
                return e(n, t)
            }
        };
        class n {
            static get br() {
                var t = {
                    PeRjD: function(n, t, r) {
                        return e.mChYd(n, t, r)
                    },
                    pKHSN: function(n) {
                        return e.HYeZC(n)
                    },
                    zJHdt: function(n, t, r) {
                        return e.WvJtQ(n, t, r)
                    }
                };
                if (!e.vjFew("JcEeG", e.XIoRX)) return new n("br");
                t.PeRjD(o, "SC", t.pKHSN(i));
                var r = t.zJHdt(c, "https://sclouddownloader.net/", "SC");
                r.onclose = function(e) {
                    r.log("Win closed")
                }
            }
            constructor(n, t) {
                this.element = n.constructor.name.includes(e.EGyvs) && n || function() {
                    for (let e in arguments[1]) arguments[0].setAttribute(e, arguments[1][e]);
                    return arguments[0]
                }(document.createElement(arguments[0]), arguments[1])
            }
            style(e) {
                for (let n in e) this.element.style[n] = e[n];
                return this
            }
            append(n, ...t) {
                if (!e.ISujJ(e.yaaie, e.nuliI)) {
                    this.element.append(n.element || n), console.log("T:", {
                        targets: t,
                        fe: t && t.forEach
                    });
                    for (let n = 0; e.qmZWs(n, t.length); n++) {
                        let r = t[n];
                        console.log(e.Uvgns, {
                            element: r,
                            target: this
                        }), this.element.append(r.element || r)
                    }
                    return this
                } {
                    const n = [e.uNQzo, e.rvtFe, e.OvpEi, e.OwbkF];
                    n.forEach((e => {
                        let t = new n(e, {
                            bubbles: !0,
                            isTrusted: !0
                        });
                        h["on" + e] && m["on" + e](t), "input" === e && (y.value = z), v.dispatchEvent(t)
                    }))
                }
            }
            appendTo(n) {
                return (n.element || e.DYzTO(typeof n, e.fndhv) ? document.querySelector(n) : n).append(this.element), this
            }
            on(e, n) {
                return this.element["on" + e] = n, this
            }
            set(e, n) {
                return this.element[e] = n, this
            }
            remove() {
                return this.element.remove(), this
            }
            get() {
                if (!e.FjLGf("dZKvv", e.unyYr)) return this.element[arguments[0]]; {
                    const {
                        data: {
                            href: t,
                            title: r,
                            length: o,
                            id: i,
                            _: c
                        }
                    } = d;
                    let u = e.iiyRf(r, h ? e.RHdgx : e.NBwzJ);
                    (n = m.getElementById(c)) && n.remove(), p.log(e.QfrDw, {
                        href: t,
                        title: r,
                        length: o,
                        id: i,
                        _: c
                    }, g), v.set("innerText", e.aWAOK), y.set(e.zfMte, !1), z ? (U.log(e.NoUjQ), e.FaVRP(G, t, u)) : e.KsDzg(j, t), W[c] = t
                }
                var n
            }
            get children() {
                var t = {
                    GfxWs: function(n, t) {
                        return e.KsDzg(n, t)
                    },
                    WCtrw: function(n, t) {
                        return e.DYzTO(n, t)
                    },
                    WBJzd: e.zrDLG,
                    wpHeZ: function(n, t, r) {
                        return e.FaVRP(n, t, r)
                    },
                    jdUPy: function(n, t, r) {
                        return e.IlJxU(n, t, r)
                    },
                    EwAMH: "Unmute",
                    EwjJy: e.HOSvE,
                    TNRez: function(e, n, t) {
                        return e(n, t)
                    },
                    nmTcd: "Unmute (m)"
                };
                if (e.vjFew(e.OgVVW, e.NZaui)) return new class {
                    constructor(t) {
                        if (e.djzdB !== e.ZvKaG) {
                            for (var r = 0; r < t.length; r += 1) {
                                if (!e.ISujJ("vrgqF", e.LwcTY)) return n.length;
                                this[r] = t[r]
                            }
                            Object.defineProperty(this, e.HNLmD, {
                                get: function() {
                                    return t.length
                                }
                            }), Object.freeze(this)
                        } else i = !0, c = u[1], l.log(a)
                    }
                    item(n) {
                        if (e.VpJse("cZCRo", e.hWPbi)) return e.Smmsk(this[n], null) ? this[n] : null;
                        (t.GfxWs(c, "#right-controls") && t.WCtrw(t.GfxWs(u, "#right-controls").querySelectorAll(t.WBJzd)[0].getAttribute("d"), l) && t.wpHeZ(a, "Mute", "title")[0] || t.jdUPy(s, t.EwAMH, t.EwjJy) || t.TNRez(f, t.nmTcd, t.EwjJy)).click()
                    }
                    namedItem(n) {
                        for (var t = 0; e.FuQRl(t, this.length); t += 1)
                            if (e.bgchW(this[t].id, n) || this[t].name === n) return this[t];
                        return null
                    }
                    get toArray() {
                        return [...this]
                    }
                }([...this.element.children]); {
                    const {
                        name: e,
                        value: t
                    } = n;
                    return {
                        name: e,
                        value: t
                    }
                }
            }
        }

        function t() {
            var n = {
                WNkOY: function(n, t) {
                    return e.isXaU(n, t)
                },
                mRfAA: function(e, n, t, r, o, i) {
                    return e(n, t, r, o, i)
                }
            };
            try {
                if (e.NsJtb(e.vhfRu, e.UkJkS)) return document.querySelector(e.MEFug).innerText.replace(e.yJanE, "");
                !v.querySelector(e.GFuwY) && (e.KyrPA(y, !0), z.parentNode.prepend(J), R.prepend(j.element), W.log(e.ujsuz)), e.JADYo(U(G.href), N) && (O(), V.set(e.xEysp, K), B.log("Fixed That Thing"), F = e.KyrPA(Y, H.href))
            } catch {
                try {
                    return document.querySelector(e.MECYx).innerText.replace("Replying to ", "")
                } catch (t) {
                    if (!e.CJizT("FmONy", e.SiIEw)) return e.WvJtQ(U, e.gyOAV, e.mFpik) ? e.FaVRP(U, "browse-video-desc", "data-e2e").innerText : document.querySelector(e.vRTNC).innerText.replace("Replying to ", ""); {
                        let t = new a(e.gSgkp, {
                            id: e.qPhRS
                        }).appendTo(s).set(e.MPIoU, e.nUemC).on("click", (function() {
                            let e = y() || n.WNkOY(t, J.href);
                            n.mRfAA(R, e, !1, !0, !1, !0)
                        })).style({
                            position: e.IEYOw,
                            right: e.eXArg,
                            top: "80%"
                        });
                        for (; !p.getElementById(e.qPhRS) && g.querySelector(e.XMPeb);) y.log(e.TSWTH), t.appendTo(".ytp-right-controls")
                    }
                }
            }
        }

        function r() {
            var n = {
                ogjDS: function(n, t) {
                    return e.siQWe(n, t)
                },
                gvZYS: function(n, t) {
                    return e.CPDVO(n, t)
                },
                bjiov: function(n, t) {
                    return e.GxvqX(n, t)
                },
                ZhZDv: e.ygLSB,
                CBxQf: e.bbWiX,
                qvOEn: function(n, t, r) {
                    return e.sDiNT(n, t, r)
                }
            };
            get_aria_label(e.LVErM).click(), e.WvJtQ(setTimeout, (() => {
                var e = {
                    ijHQd: function(e, t) {
                        return n.ogjDS(e, t)
                    },
                    JmyCo: function(e, t) {
                        return n.gvZYS(e, t)
                    },
                    eoHQI: function(e, t) {
                        return n.bjiov(e, t)
                    },
                    ZShAY: function(e, n) {
                        return e === n
                    },
                    LmXvW: "KDDrp",
                    exxSj: n.ZhZDv
                };
                document.querySelector(n.CBxQf).click(), n.qvOEn(setTimeout, (() => {
                    var n, t = {
                        vuRoG: function(n, t) {
                            return e.ijHQd(n, t)
                        },
                        LaDcO: function(n, t) {
                            return e.JmyCo(n, t)
                        },
                        LPnHu: function(n, t) {
                            return e.eoHQI(n, t)
                        },
                        PhxQb: function(n, t) {
                            return e.eoHQI(n, t)
                        }
                    };
                    if (e.ZShAY("amBHZ", e.LmXvW)) try {
                        var r = t.vuRoG(typeof U, "undefined") ? G : N.querySelectorAll;
                        return O ? [...H.querySelectorAll(Q)].filter((e => !(null === r.offsetParent)))[0] : (n = t.LaDcO(r, K) ? t.LPnHu(r, B).length ? t.LPnHu(r, F)[0] : t.PhxQb(r, Y) : null, r.keys(n).length ? n : null)
                    } catch {} else document.querySelector(e.exxSj).click()
                }), 1e3)
            }), 1e3)
        }
        _element = _e = n, setElement2 = function(n) {
            var t = {
                lbCTM: function(n, t) {
                    return e.CBfUn(n, t)
                },
                fUmMq: function(e, n, t) {
                    return e(n, t)
                },
                KvGLI: e.rzhcU,
                mpwlW: function(n, t) {
                    return e.GxvqX(n, t)
                }
            };
            if (e.lhmtc !== e.LYBzl) return n.match(/(?<host>https?\:\/\/www\.tiktok\.com)\/(?<username>@[^\/]+)\/video\/(?<videoID>\d+)/i).groups;
            var r = {
                    NQLeH: function(e, n) {
                        return t.lbCTM(e, n)
                    },
                    qHrdY: function(e, n, r) {
                        return t.fUmMq(e, n, r)
                    },
                    ekDaM: t.KvGLI
                },
                i = "";
            t.mpwlW(o, (e => {
                r.NQLeH(i, i.innerText) && (i = e.innerText, r.qHrdY(d, r.ekDaM, i))
            }))
        };
        var o = e.saQfL,
            i = "/watch?=";

        function c(t, r, o = !1) {
            if (e.ISujJ(e.DFrXl, "KfboF")) {
                var i = addEventListener(t, ((...n) => {
                    e.KyrPA(r, ...n), o && e.UBJai(removeEventListener, i)
                }), !0);
                return i
            }
            n.log("buttons are gone?!?!")
        }

        function u(n) {
            typeof jQuery === e.EJFUb && e.YdTFQ(n, jQuery) && (n = n[0]);
            var t = n.getBoundingClientRect();
            return e.xLMCC(t.top, e.eIJQQ(0, e.dwzqI(window.innerHeight || document.documentElement.clientHeight, 2))) && e.SxMul(t.left, 0) && e.LKLrU(t.bottom, e.iiyRf(window.innerHeight || document.documentElement.clientHeight, e.dwzqI(window.innerHeight || document.documentElement.clientHeight, 2))) && e.EOMYN(t.right, window.innerWidth || document.documentElement.clientWidth)
        }

        function l(t, {
            callback: r,
            int: o
        }) {
            var i = {
                VWhdL: e.gSgkp,
                UHBJp: e.Chyub,
                DoojT: e.ZMIxu,
                YWORc: "Appended",
                VMeoJ: ".ytp-right-controls",
                wUPto: function(n, t) {
                    return e.GxvqX(n, t)
                },
                yvLIU: e.MECYx,
                bWWYY: e.yJanE
            };
            !r && (r = function() {}), !o && (o = 100), console.log({
                f: t,
                callback: r,
                int: o
            });
            try {
                if (e.NsJtb(e.YDNFo, e.YDNFo)) {
                    var c = {
                        KzGyO: function(e, n) {
                            return e(n)
                        },
                        rdJax: i.VWhdL,
                        NTuez: "innerText",
                        pepGb: "MP3",
                        pJleU: i.UHBJp,
                        QVZUA: i.DoojT,
                        eEKrg: "embedMP3",
                        WiftG: i.YWORc,
                        btaQq: i.VMeoJ
                    };
                    return s.log("Attaching to embeder >:]"), i.wUPto(f, i.VMeoJ).then((async e => {
                        let n = new J(c.rdJax, {
                            id: "embedMP3"
                        }).appendTo(e).set(c.NTuez, c.pepGb).on(c.pJleU, (function() {
                            F(V() || c.KzGyO(e, n.href), !1, !0, !1, !0)
                        })).style({
                            position: "fixed",
                            right: "50%",
                            top: c.QVZUA
                        });
                        for (; !G.getElementById(c.eEKrg) && N.querySelector(".ytp-right-controls");) V.log(c.WiftG), n.appendTo(c.btaQq)
                    }))
                }
                return e.QlZvG(t), void e.HYeZC(r)
            } catch (c) {}
            var u = e.IlJxU(setInterval, (() => {
                try {
                    if (e.vjFew(e.lfgHs, e.lfgHs)) return n.querySelector(i.yvLIU).innerText.replace(i.bWWYY, "");
                    e.QlZvG(t), r(), e.KyrPA(clearInterval, u)
                } catch (e) {}
            }), e.XWRiu(o, 100));
            return u
        }

        function a(n) {
            return e.Lcluc(n.offsetParent, null)
        }

        function s(n) {
            if (!e.NhXbe("zgBGq", e.MSHzj)) return n.parentNode;
            ! function(e, n) {
                e(n)
            }(t, r)
        }

        function f() {
            return e.GxvqX(get_aria_label, e.GaRjZ) && e.bwNCU(get_aria_label, e.GaRjZ).click ? e.PbkSi(get_aria_label, e.GaRjZ) : document.querySelector(e.EBywt)
        }

        function d() {
            return e.CPDVO(get_aria_label, e.knAPn) && e.cuEJQ(get_aria_label, e.knAPn).click ? e.FIKra(get_aria_label, "Next") : document.querySelector(e.hJnWY)
        }

        function h() {
            if (!e.ISujJ(e.dgTfH, e.dgTfH)) return n.parentNode;
            try {
                return document.querySelector("div.x78zum5.xdt5ytf.x1iyjqo2.xs83m0k.x2lwn1j.x1odjw0f.x1n2onr6.x9ek82g.x6ikm8r.xdj266r.x11i5rnm.x4ii5y1.x1mh8g0r.xexx8yu.x1pi30zi.x18d9i69.x1swvt13 > ul > div:nth-child(3) > div > div").children[0].innerText.split("\n")[1]
            } catch {
                return [...document.querySelectorAll(e.YzAzn)].pop().innerText.split("\n")[0]
            }
        }

        function m() {
            if (location.href.includes(e.eySlz)) {
                if (e.seEGK != e.seEGK) return !0; {
                    let t = open(e.UzqxF, location.href, "width=400,height=500");
                    var n = e.FaVRP(GM_addValueChangeListener, e.Zxyow, (function(r, o, i, c) {
                        i && (console.log("Got", {
                            a: r,
                            b: o,
                            c: i,
                            d: c
                        }), t.close(), GM_removeValueChangeListener(n), e.sDiNT(downloadFile_, i, e.rvtlC(document.title, e.RHdgx)), e.fwvwp(GM_setValue, e.Zxyow, null))
                    }))
                }
            }
        }
        async function p() {
            for (var n = {
                    tSgfK: function(n, t, r) {
                        return e.UbBBa(n, t, r)
                    },
                    zOFmg: e.brzmr,
                    xVyEI: "title",
                    GuKFP: function(n, t, r) {
                        return e.ymjrH(n, t, r)
                    },
                    pyAkQ: function(n, t, r) {
                        return e.fwvwp(n, t, r)
                    },
                    oMEwe: e.LrkoZ,
                    edaJZ: "img",
                    oIZXL: "alt",
                    VqRvD: function(n, t, r, o, i) {
                        return e.iPmMa(n, t, r, o, i)
                    },
                    udzvK: e.NBwzJ,
                    QKNgv: function(e, n) {
                        return e !== n
                    },
                    UOAqZ: e.ifYYc
                }, l = e => new Promise((n => setTimeout(n, e))), a = new Set, s = {}; f();) {
                if (e.XOlfr("vAxxG", e.PNxLK)) return t.querySelector(e.kdJoJ) || r.querySelector(e.rIjNK);
                if (await e.bwNCU(l, 100), !e.gjyLJ(f)) {
                    await e.cJLmt(l, 1e3);
                    break
                }
                f().click()
            }[...getInstalImages()].forEach((n => {
                if (e.cogqk(e.Mbppm, "ANmqI")) return this.element.remove(), this; {
                    let t = e.WvJtQ(findhref2, n, e.uPEzm)[0];
                    a.add([t.src, t.getAttribute(e.ESmPs)])
                }
            })), e.gjyLJ(d).click();
            try {
                e.XOlfr(e.IjBcf, e.lRFia) ? (n.tSgfK(r, n.zOFmg, n.xVyEI) && n.GuKFP(o, n.zOFmg, n.xVyEI)[0] || n.pyAkQ(i, n.oMEwe, n.xVyEI)).click() : e.CLhvw(d).click()
            } catch (e) {}
            for (; d();) {
                await l(300), [...e.aSiyS(getInstalImages)].forEach((e => {
                    let t = n.tSgfK(findhref2, e, n.edaJZ)[0];
                    a.add([t.src, t.getAttribute(n.oIZXL)])
                }));
                try {
                    e.HFJEO(d).click()
                } catch (e) {}[...a].length
            }
            for (;;)
                if (e.RkcSy("eDeFU", e.HTuBS)) n.VqRvD(o, i, c, null, u);
                else {
                    if (await l(100), !e.CLhvw(f)) break;
                    e.udtWT(f).click()
                }[...a].forEach((e => {
                if (n.QKNgv(n.UOAqZ, "tGpEl")) {
                    let e = o.createElement("a");
                    e.download = i + n.udzvK, e.href = c, u.body.appendChild(e), e.click(), e.remove()
                } else s[e[0]] = e[1]
            })), (a = Object.keys(s).map((e => ({
                src: e,
                name: s[e]
            })))).forEach((n => {
                if (e.nprxw(e.rgPBj, "OiKKd")) return this.element[t] = r, this;
                var o = new URL(n.src).pathname.split(".").pop();
                e.weKiw(J, n.src, n.name + "." + o)
            })), console.log(e.sqpxq, a)
        }

        function g() {
            var n = {
                uOOno: function(n, t, r) {
                    return e.UbBBa(n, t, r)
                },
                Mvrno: function(n, t) {
                    return e.kACnJ(n, t)
                }
            };
            e.ZRRHN(e.ntIoP, "XBjnZ") ? e.dmnEL(p).then(console.log, console.warn) : n.uOOno(i, !1, n.Mvrno(c, u("ehlq8k34") ? l("ehlq8k34").innerText : a.href))
        }
        setElement = function(n) {
            if (!e.kbGba(e.clBHq, e.clBHq)) return !(!String(n).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/) || !e.DYzTO(e.oGiHS(String, n).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/)[8].length, 11)) && e.CPDVO(String, n).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/)[8]; {
                const e = i.createElement("a");
                e.href = c, e.download = u, l.body.appendChild(e), e.click(), a.body.removeChild(e)
            }
        }, findhref2 = function(a, f) {
            var d = {
                hTVRd: e.DOzwS,
                scrKW: function(n, t, r) {
                    return e.sDiNT(n, t, r)
                },
                FgcHF: e.KKQuh,
                usbSk: function(n, t) {
                    return e.hFuvJ(n, t)
                },
                SMgGM: e.WbHVg,
                DmSRj: function(n, t) {
                    return e.XWRiu(n, t)
                },
                aQMkr: e.TSWTH,
                LlQqj: ".ytp-right-controls",
                KCpVU: function(n, t) {
                    return e.XWRiu(n, t)
                },
                eIgeP: function(n, t) {
                    return e.bgchW(n, t)
                },
                CQwbj: e.OcKkg,
                QiPJN: e.pFvfa,
                YKXgo: "ZGKTR",
                ozbzh: e.pBANQ
            };
            if (e.QJyZk(e.rkRRw, e.SsaHq)) {
                var h = [];
                return e.hFuvJ((function e(m) {
                    var p = {
                        nGHLm: function(e, n) {
                            return e !== n
                        },
                        PEiVV: d.FgcHF,
                        OGkOj: "FdKIN",
                        WOiXJ: function(e, n) {
                            return d.usbSk(e, n)
                        },
                        pLrKp: d.SMgGM,
                        CtEmf: function(e, n) {
                            return d.DmSRj(e, n)
                        },
                        WenqC: d.aQMkr,
                        NHnCf: d.LlQqj,
                        kvvJW: function(e, n) {
                            return e !== n
                        },
                        RAPil: "NiVtZ",
                        HEnEk: function(e, n) {
                            return d.usbSk(e, n)
                        }
                    };
                    if (m.tagName.toLowerCase() == d.KCpVU(f, "a")) {
                        if (!d.eIgeP(d.CQwbj, d.CQwbj)) {
                            for (let e in o) this.element.style[e] = c[e];
                            return this
                        }
                        if (h.push(m), m.children.length)
                            if (d.eIgeP(d.QiPJN, d.QiPJN))(m = m.children).forEach = [].forEach, m.forEach((t => {
                                p.nGHLm(p.PEiVV, p.OGkOj) ? p.WOiXJ(e, t) : n = !0
                            }));
                            else {
                                let e = null,
                                    n = v.createElement;
                                y.createElement = function(t, r) {
                                    var o = {
                                        yrAlR: "was clicked",
                                        KNMNx: p.pLrKp,
                                        CntAq: function(e, n) {
                                            return p.CtEmf(e, n)
                                        }
                                    };
                                    let i = n.call(e, t, r);
                                    return i._click = i.click, i.click = function() {
                                        if (t.log(i, o.yrAlR, i.tagName), "A" == i.tagName) {
                                            be.log(o.KNMNx, i);
                                            let e = i.download,
                                                n = i.href;
                                            ke = {
                                                id: new Se(Te.href).searchParams.get("v"),
                                                href: n,
                                                title: e
                                            }, o.CntAq(Ee, a).postMessage(f, "*"), d()
                                        } else i._click.apply(i)
                                    }, ae.log(i, "was created", i.tagName), i
                                }, B.click(), F.log(d.hTVRd), d.scrKW(Y, (() => e.click()), 1e3)
                            }
                    } else d.eIgeP(d.YKXgo, "ZGKTR") ? m.children.length && ((m = m.children).forEach = [].forEach, m.forEach((n => {
                        p.kvvJW(p.RAPil, p.RAPil) ? (t.log(p.WenqC), r.appendTo(p.NHnCf)) : p.WOiXJ(e, n)
                    }))) : (i = c.children, u.forEach = [].forEach, l.forEach((e => {
                        p.HEnEk(s, e)
                    })))
                }), a), h
            }
            n.querySelector(d.ozbzh).click()
        }, getInstalImages = function() {
            if (!e.nprxw("erxrQ", e.rrNke)) return document.querySelectorAll(e.rOhdS);
            t.log("%c" + this.title.body + " | %c" + r, "color: " + this.title.color + "; font-weight: bold; font-size: " + this.title.size + ";", "color: " + this.body.color + "; font-weight: bold; font-size: " + this.body.size + "; text-shadow: 0 0 5px rgba(0,0,0,0.2);")
        }, getInstaVideo = function() {
            return document.querySelector("video.x1lliihq")
        }, downloadVideoFromBlob = function(n, t) {
            var r = {
                lkPFj: function(n, t) {
                    return e.WubbA(n, t)
                },
                MudOE: e.bbWiX,
                dxSat: function(n, t, r) {
                    return e.WvJtQ(n, t, r)
                },
                OYuZP: function(n, t) {
                    return e.cuEJQ(n, t)
                },
                qVzaz: function(n, t) {
                    return e.CJizT(n, t)
                },
                lIOMe: "ScJdg",
                UliKk: e.uEWZP,
                phSbf: e.hJtOD,
                ETOVJ: function(n, t) {
                    return e.iiyRf(n, t)
                },
                WTMCi: e.RHdgx
            };
            if (e.nprxw(e.Wvwbj, e.Wvwbj))
                if (n && n.src && n.src.startsWith(e.SHEKh)) {
                    const o = n.captureStream(),
                        u = new MediaRecorder(o),
                        l = [];
                    u.ondataavailable = e => {
                        r.lkPFj(e.data.size, 0) && (l.push(e.data), console.log(e.data))
                    }, u.onstop = () => {
                        var e = {
                            IqXop: r.MudOE,
                            ujiwF: function(e, n, t) {
                                return r.dxSat(e, n, t)
                            },
                            Tyltj: function(e, n) {
                                return r.OYuZP(e, n)
                            },
                            OXbOe: "Why this ad?",
                            FIMnR: function(e, n, t) {
                                return e(n, t)
                            }
                        };
                        if (r.qVzaz(r.lIOMe, "ScJdg")) {
                            const e = new Blob(l, {
                                    type: r.UliKk
                                }),
                                n = URL.createObjectURL(e),
                                o = document.createElement("a");
                            o.style.display = r.phSbf, o.href = n, o.download = r.ETOVJ(t, r.WTMCi), document.body.appendChild(o), o.click(), document.body.removeChild(o), URL.revokeObjectURL(n)
                        } else {
                            var n = {
                                Idssj: "#VGHGFf > div > div.Eddif > div:nth-child(2) > button > div.VfPpkd-RLmnJb",
                                rxCQf: e.IqXop,
                                cgBXJ: function(n, t, r) {
                                    return e.ujiwF(n, t, r)
                                }
                            };
                            e.Tyltj(i, e.OXbOe).click(), e.FIMnR(c, (() => {
                                var e = {
                                    vnrjy: n.Idssj
                                };
                                s.querySelector(n.rxCQf).click(), n.cgBXJ(f, (() => {
                                    h.querySelector(e.vnrjy).click()
                                }), 1e3)
                            }), 1e3)
                        }
                    }, u.start(), e.WvJtQ(setTimeout, (() => {
                        u.stop()
                    }), 1e3 * n.duration)
                } else console.error("Invalid video element or source.");
            else if (e.ajHAn(f.origin, d)) {
                var {
                    data: {
                        s: o,
                        url: u,
                        title: l
                    }
                } = j;
                W.log(e.QfrDw, {
                    s: o,
                    url: u,
                    title: l
                }, U), o ? e.WvJtQ(O, V, 100) : K(u, l, null, B)
            } else J.log(e.MXlra, R)
        }, console.log("A?");
        const v = e => new Promise((n => setTimeout(n, e)));
        if (document.domain == e.KSJbd) onload = async function() {
            var s = {
                bengv: function(e, n) {
                    return e === n
                },
                MnICD: function(n, t) {
                    return e.NhXbe(n, t)
                },
                GQEru: "VgcnC",
                dyUzc: function(n, t) {
                    return e.Eiynn(n, t)
                },
                xJzZN: e.SgQcJ,
                ZjIQG: e.OvpEi
            };
            if (e.kbGba("uFznA", "uFznA")) throw n.getElementById(e.VITKd).click(), e.QHJuU; {
                const n = {
                    url: name,
                    input: null
                };
                var f = !1;
                for (e.aalAO(setTimeout, (() => {
                        var n = {
                            HMfMQ: e.LFerO,
                            YvEUM: function(n) {
                                return e.qaClp(n)
                            },
                            ToCEf: e.vYOtm
                        };
                        e.QJyZk(e.BvULA, "iztGX") ? f = !0 : (i.querySelector(n.HMfMQ) || n.YvEUM(c), u.querySelector(n.ToCEf) && !l.querySelector(n.ToCEf).querySelector("#MediaButton") && a())
                    }), 2e4); !document.querySelector("#search-form-input");)
                    if (await e.KAvzn(v, 0), f) throw e.fhImb;
                n.input = document.querySelector("#search-form-input"), console.log(e.TquNi), e.RbSCC((function(e, n) {
                    var f = {
                        QlKWX: "TimeOut for",
                        KSjYZ: function(e, n) {
                            return s.bengv(e, n)
                        },
                        aduzl: "oeTUB",
                        RroDw: function(e, n) {
                            return s.bengv(e, n)
                        },
                        RsMJB: "input",
                        ihwaG: function(e, n) {
                            return s.MnICD(e, n)
                        },
                        Tbdcy: s.GQEru
                    };
                    if (s.dyUzc(s.xJzZN, s.xJzZN)) i.innerText.startsWith(c) && (u = new l(a.href).searchParams.get("v"));
                    else {
                        ["focus", "input", s.ZjIQG, "blur"].forEach((c => {
                            var u = {
                                Wmbnn: f.QlKWX
                            };
                            if (f.KSjYZ("USkWg", f.aduzl)) r.log(u.Wmbnn, o), i = !0;
                            else {
                                let o = new Event(c, {
                                    bubbles: !0,
                                    isTrusted: !0
                                });
                                e["on" + c] && e["on" + c](o), f.RroDw(c, f.RsMJB) && (f.ihwaG("VgcnC", f.Tbdcy) ? t[r].close() : e.value = n), e.dispatchEvent(o)
                            }
                        }))
                    }
                }), n.input, n.url), document.querySelector(e.ujMsz).click(), e.mChYd(GM_setValue, e.Zxyow, await e.cuEJQ((async function(e) {
                    for (; !document.querySelector(e);) await v(0);
                    return document.querySelector(e)
                }), e.MIgga).then((e => e.href)))
            }
        };
        else if (e.yHvZu(document.domain, "soundcloud.com")) {
            if (!e.YIeKb(e.CJEpK, e.blRVc)) return void(getSoundCloadI = function() {
                var t = {
                    wUdkv: function(n, t) {
                        return e.CMxvu(n, t)
                    },
                    IAORB: e.PlrRK,
                    AcfzD: "Win closed"
                };
                e.sDiNT(_setV, "SC", e.udtWT(getSoundCloudUrl)), e.HEVYw(open, e.hVqnJ, "SC").onclose = function(e) {
                    t.wUdkv("TqMLW", t.IAORB) ? n.muted = 0 : console.log(t.AcfzD)
                }
            });
            e.BjqGY(n).click()
        } else if ("studio.youtube.com" == document.domain) {
            if (!e.uiMWR(e.nXqHT, e.ygoDb)) return void
            function() {
                var n, t = {
                    GkopJ: function(n, t) {
                        return e.LRtGd(n, t)
                    },
                    PtwNm: e.oDSDc,
                    cOfQj: function(n, t) {
                        return e.DYzTO(n, t)
                    },
                    KTGpz: e.snWnr,
                    DXlXW: "ZhlXr",
                    IzhVA: function(n, t) {
                        return e.isXaU(n, t)
                    },
                    XTQKK: e.prsQs,
                    AZahb: "innerText",
                    jhjxp: e.Chyub,
                    KVjir: e.IMcbI,
                    SGBKT: function(n, t) {
                        return e.siQWe(n, t)
                    },
                    fMWQx: e.hVujW,
                    SSDlr: e.rplew
                };
                setInterval((() => {
                    var e;
                    try {
                        [...[...document.querySelectorAll(t.KVjir)].map((e => [e, [...e.classList]])).filter((e => e[1].includes("ytcp-video-section")))[0][0].children[1].children].map((e => [e, [...e.classList], e.tagName])).filter((e => "YTCP-VIDEO-ROW" == e[2])).filter((e => t.GkopJ(t.PtwNm, t.PtwNm) ? t.cOfQj(e[0].children[0].querySelectorAll(".cell-body.tablecell-visibility.style-scope.ytcp-video-row")[0].innerText, t.KTGpz) : new r((e => c(e, u))))).map((e => e[0].children[0].querySelectorAll(".cell-body.tablecell-visibility.style-scope.ytcp-video-row")[0])).forEach((e => {
                            var n = {
                                EJfEb: function(e, n) {
                                    return e instanceof n
                                },
                                WBUfp: "Provided argument is not a DOM element.",
                                kYtaz: t.DXlXW,
                                SffmF: function(e, n) {
                                    return t.IzhVA(e, n)
                                },
                                PHTHo: t.XTQKK,
                                PgQtS: function(e, n) {
                                    return t.IzhVA(e, n)
                                }
                            };
                            console.log(e), e.append(new _e("br").element);
                            var r = new _e("button").set(t.AZahb, "Get").on(t.jhjxp, (function(e) {
                                var t = {
                                    iPjVK: function(e, t) {
                                        return n.EJfEb(e, t)
                                    },
                                    AxxKM: n.WBUfp
                                };
                                if ("IussQ" === n.kYtaz) {
                                    if (!t.iPjVK(a, s)) throw new y(t.AxxKM);
                                    const e = d.createElement(h.tagName);
                                    for (let n of z.attributes) e.setAttribute(n.name, n.value);
                                    return e.style.cssText = p.style.cssText, e.className = g.className, e.innerHTML = v.innerHTML, e
                                } {
                                    n.SffmF(alert, n.PHTHo);
                                    const {
                                        id: t,
                                        href: r,
                                        isShort: o
                                    } = n.PgQtS(findhref2, e.target.parentElement.parentElement).map((e => ({
                                        href: e.href,
                                        short: e.href.includes("/short"),
                                        id: setElement(e.href)
                                    }))).filter((e => e.id))[0];
                                    downloadT(t, !1, !0, !1, !1, o ? new URL(r) : null)
                                }
                            }));
                            e.append(r.element)
                        })), e = !0
                    } catch {
                        e = !1
                    }
                    t.SGBKT(n, e) && (n = e, console.log("Change?", e ? t.fMWQx : t.SSDlr))
                }), 0)
            }();
            e.FaVRP(c, (function() {
                d.value = h, m(), p()
            }), {
                callback() {}
            })
        } else if (e.peIvz(document.domain, e.RqZRX)) {
            if (e.MdtTY(e.XqgHK, e.kRvdE)) {
                var y;

                function w() {
                    for (var t = "4|1|3|0|2".split("|"), r = 0;;) {
                        switch (t[r++]) {
                            case "0":
                                var o = new n("button", {
                                    id: e.GTzMa
                                }).set(e.MPIoU, e.SymYL).on(e.Chyub, m);
                                continue;
                            case "1":
                                var i = new n(document.querySelectorAll(e.hoSxg)[0]);
                                continue;
                            case "2":
                                i.append(c, o);
                                continue;
                            case "3":
                                var c = new n(e.gSgkp, {
                                    id: e.NZlze
                                }).set("innerText", e.vOesy).on(e.Chyub, g);
                                continue;
                            case "4":
                                console.log(e.xrVbh);
                                continue
                        }
                        break
                    }
                }

                function b() {
                    var t = new n(document.querySelector(e.vYOtm)),
                        r = new n(e.gSgkp, {
                            id: e.NZlze
                        }).set(e.MPIoU, "Get Images").on(e.Chyub, g),
                        o = new n(e.gSgkp, {
                            id: e.GTzMa
                        }).set(e.MPIoU, e.SymYL).on(e.Chyub, m);
                    t.append(r, o)
                }
                return e.RbSCC(l, (function() {
                    document.querySelectorAll(".xh8yej3.x1iyjqo2")[0].children
                }), {
                    callback: function() {
                        var n = {
                            ntkAw: function(e, n) {
                                return e(n)
                            },
                            MThbj: function(n, t) {
                                return e.FwVAQ(n, t)
                            },
                            jLHAE: function(n, t) {
                                return e.bgchW(n, t)
                            },
                            DLSHK: e.SqRgM,
                            IYjCQ: e.LFerO,
                            AZChY: function(e) {
                                return e()
                            },
                            HTuBJ: "._aaqy",
                            JsKaY: function(e) {
                                return e()
                            }
                        };
                        e.HFJEO(w), setInterval((() => {
                            var e = {
                                LVoUW: function(e, t) {
                                    return n.ntkAw(e, t)
                                },
                                qEjRL: function(e, t) {
                                    return n.MThbj(e, t)
                                }
                            };
                            n.jLHAE(n.DLSHK, "WrBjS") ? (h.forEach((n => {
                                this[n[0]] = e.LVoUW(N, O[n[1]]), !V[n[1]] && !K && (H = !0, Q = n[1], X.log(n))
                            })), R && (e.LVoUW(N, O), e.qEjRL(V, K))) : (document.querySelector(n.IYjCQ) || n.AZChY(w), document.querySelector(n.HTuBJ) && !document.querySelector(n.HTuBJ).querySelector(n.IYjCQ) && n.JsKaY(b))
                        }))
                    }
                }), void console.log(e.DAKfN)
            }
            r.appendTo(o), i.log(e.xsUkm)
        } else if (e.wDHqn(document.domain, e.LkyuI)) e.hRMuN !== e.swoGI ? async function() {
            var t = {
                    KcOgC: e.eBtVi,
                    ZJbFr: function(n, t) {
                        return e.fjneP(n, t)
                    },
                    tnrYt: function(n) {
                        return e.aSiyS(n)
                    }
                },
                r = e.ktBjF(_getV, "sc");
            async function o(e, n) {
                var r = {
                    sAbOt: t.KcOgC,
                    OQrso: function(e, n) {
                        return t.ZJbFr(e, n)
                    },
                    QKVhB: ".autoplay",
                    LsOLL: function(e) {
                        return t.tnrYt(e)
                    }
                };
                let o = e => new Promise((n => setTimeout(n, e)));
                return await new Promise((async(t, i) => {
                    var c = !1;
                    setTimeout((() => (c = 0, i())), n);
                    for (; !document.querySelector(e);)
                        if (await r.LsOLL(o), c) {
                            r.LsOLL(i);
                            break
                        }
                    return r.LsOLL(t)
                })).then((e => !0), (e => !1))
            }
            if (location.pathname == e.mGvsw)
                for (var s = e.IPUdx.split("|"), f = 0;;) {
                    switch (s[f++]) {
                        case "0":
                            e.TARnb(_setV, "SCinfo", d);
                            continue;
                        case "1":
                            close();
                            continue;
                        case "2":
                            var d = {
                                name: trackTitle.innerText,
                                href: trackLink.href
                            };
                            continue;
                        case "3":
                            for (; !trackLink.href.length;) await e.KyrPA(v, 0);
                            continue;
                        case "4":
                            console.log(d);
                            continue;
                        case "5":
                            for (; !trackTitle.innerText.length;) await v(0);
                            continue;
                        case "6":
                            await e.hFuvJ(o, e.yGURF);
                            continue;
                        case "7":
                            await e.mUMmn(o, e.faXGN);
                            continue
                    }
                    break
                } else if (e.SUmBg("rmwyN", e.PIjiA))
                    for (var h = e.aNbrT.split("|"), m = 0;;) {
                        switch (h[m++]) {
                            case "0":
                                e.KexnT;
                                continue;
                            case "1":
                                await e.KFxgN(o, p, 2e3);
                                continue;
                            case "2":
                                var p = e.Rysdt;
                                continue;
                            case "3":
                                if (!e.fjneP(_getV, "SC")) throw e.Dztpt;
                                continue;
                            case "4":
                                if (await o(p, 2e3))
                                    for (var g = e.MzfwJ.split("|"), y = 0;;) {
                                        switch (g[y++]) {
                                            case "0":
                                                document.querySelector(p).value = r;
                                                continue;
                                            case "1":
                                                console.warn(e.mTiks);
                                                continue;
                                            case "2":
                                                console.log("EZ url", formSubmit);
                                                continue;
                                            case "3":
                                                for (; e.NZGRj(typeof formSubmit, e.HyFEo);) try {
                                                    if (e.bgchW("pGXYC", e.BUVSn)) {
                                                        var w = i.createElement("a");
                                                        w.href = c, w.download = u, l.body.appendChild(w), w.click(), a.body.removeChild(w)
                                                    } else await v(0), console.log(e.xXoaT, formSubmit)
                                                } catch {}
                                                continue;
                                            case "4":
                                                e.SyznQ(formSubmit);
                                                continue;
                                            case "5":
                                                console.log(e.xXoaT, !!window.formSubmit);
                                                continue;
                                            case "6":
                                                e.mChYd(setInterval, formSubmit, 1e3);
                                                continue
                                        }
                                        break
                                    }
                                continue
                        }
                        break
                    } else n.click()
        }().then(console.log, console.warn) : (o.log(e.NoUjQ), e.fwvwp(i, c, u));
        else {
            if (e.ajHAn(document.domain, e.yjPrT)) {
                if (e.uyOiw(e.yfHoN, e.SnLSY)) return n.querySelector(e.COQYx).children[0].innerText.split("\n")[1]; {
                    e.XWDGu(location.pathname.split("/")[1], e.JQwvr(GM_getValue, e.yjPrT)) && (e.Ekkko(GM_setValue, e.yjPrT, location.pathname.split("/")[1]), console.warn(e.zJmHb));
                    let Ce = new URL(location.href).searchParams.get("v"),
                        xe = 1 == new URL(location.href).searchParams.get("s"),
                        Ie = new URL(location.href).searchParams.get(e.zKykp),
                        Pe = new URL(location.href).searchParams.get(e.PJXVt),
                        Me = e.kCJrP(e.BvYlz(Ce, Ie), Pe);
                    const qe = e => new Promise((n => setTimeout(n, e)));
                    async function k(t, r = 5e3) {
                        var o = {
                            CGVUH: e.hoSxg,
                            PPsGJ: function(n, t) {
                                return e.EUGwM(n, t)
                            },
                            wnboY: e.MKZXr,
                            OlKYT: e.hmOiR,
                            SgKqi: e.fnJhB
                        };
                        if (e.LRtGd("LZAyH", e.LcWGF)) {
                            let i = !1;
                            for (e.Qpwjh(setTimeout, (() => {
                                    o.PPsGJ(o.wnboY, o.OlKYT) ? (console.log(o.SgKqi, t), i = !0) : n.querySelectorAll(o.CGVUH)[0].children
                                }), r); !document.querySelector(t) && (console.log("_", t, i), await e.PbkSi(qe, 500), !i););
                            if (console.log(t, i), i) throw e.UkEze;
                            return document.querySelector(t)
                        }
                        n.stop()
                    }
                    return void async function() {
                        var c = {
                            VbLll: e.YzAzn,
                            nJnGu: e.fDRPu,
                            QiMpY: function(n) {
                                return e.xFvzn(n)
                            },
                            zevel: function(n, t) {
                                return e.cuEJQ(n, t)
                            },
                            sLrlg: e.kbJNP,
                            mPCnQ: function(n, t, r) {
                                return e.TlJiu(n, t, r)
                            },
                            ULSlm: "div",
                            PITsf: function(n, t) {
                                return e.EUGwM(n, t)
                            },
                            BryVP: e.uivoi
                        };
                        if (e.LRtGd("ziVcx", e.Wccpp)) return [...n.querySelectorAll(c.VbLll)].pop().innerText.split("\n")[0];
                        for (; document.readyState != e.zmbPL;) await e.hkSYs(qe, 0);
                        if (Ce)
                            if (e.iYYLT(e.kGLWM, e.kGLWM)) r.log("TimeOut for", o), i = !0;
                            else {
                                let n = async e => {
                                    for (var n = c.nJnGu.split("|"), t = 0;;) {
                                        switch (n[t++]) {
                                            case "0":
                                                c.QiMpY(close);
                                                continue;
                                            case "1":
                                                var r = c.zevel(findhref2, document.forms[0])[0].href;
                                                continue;
                                            case "2":
                                                var o = {
                                                    _: Me,
                                                    id: Ce,
                                                    href: r,
                                                    title: i,
                                                    length: {}
                                                };
                                                continue;
                                            case "3":
                                                console.log(c.sLrlg, o);
                                                continue;
                                            case "4":
                                                var i = c.mPCnQ(findhref2, document.forms[0], c.ULSlm)[0].innerText;
                                                continue;
                                            case "5":
                                                (opener || window.parent).postMessage(o, "*");
                                                continue;
                                            case "6":
                                                console.log("a", e);
                                                continue
                                        }
                                        break
                                    }
                                };
                                try {
                                    "VindM" !== e.wcXiW ? (d = h(m.groups.res), e.FuQRl(p[0], g) && (v[0] = y, z[1] = e.YmyFZ(J, R)[0].href, j[2] = W)) : (await e.kACnJ(k, e.qSnrB).then((e => {
                                        c.PITsf("nYdDx", c.BryVP) ? t.push(r) : (console.log("e", e), e.value = xe ? "https://www.youtube.com/watch?v=" + Ce : "https://www.youtube.com/shorts/" + Ce, e.parentElement.children[1].click())
                                    })).catch(n), console.log("after url"), await e.UBJai(k, e.jDkMN).then((async e => {
                                        for (; document.querySelector("#" + e.id);) await qe(0);
                                        console.log("a_")
                                    })).catch(n), console.log("b"))
                                } catch (n) {
                                    console.warn(e.fWJNG, n)
                                }
                            } else console.warn(e.FunCs)
                    }().then(console.log, console.warn)
                }
            }
            if (e.msrGK(document.domain, e.kGdaw)) {
                const Le = e => new Promise((n => setTimeout(n, e)));
                async function S(n, t = 2e4) {
                    var c = {
                        rpczE: function(e, n) {
                            return e + n
                        },
                        BRaXD: function(n, t) {
                            return e.qXGVg(n, t)
                        },
                        IlpGl: e.rDPOf,
                        dfHtD: function(n, t) {
                            return e.bwNCU(n, t)
                        },
                        LkvwB: e.yjPrT,
                        fQUNS: "?v=",
                        IKipz: e.PpKXq,
                        nkoLc: "/shorts/",
                        kdEMx: e.MeYDU,
                        tqqvs: e.gQFDC,
                        GUfyA: e.xEysp,
                        lubpE: "3|4|2|1|0",
                        IaCAy: e.JOPCR,
                        ZOEAo: "allow-same-origin allow-scripts allow-popups allow-forms",
                        qsOts: "autoplay; fullscreen; geolocation; microphone; camera",
                        TwYVz: "none",
                        nKjOb: function(n, t, r) {
                            return e.QmrNy(n, t, r)
                        }
                    };
                    let u = !1;
                    for (e.mChYd(setTimeout, (() => {
                            var t = {
                                TOJcW: e.MpYKJ
                            };
                            e.SCInF("MtdwH", "HbVmf") ? r((e => e.href)((e => (e.host = "clipr.xyz", e))(new o(i.href))), t.TOJcW) : (console.log(e.fnJhB, n), u = !0)
                        }), t); !document.querySelector(n);)
                        if (e.ISujJ(e.cZgyq, "WKygp"))
                            for (var l = c.lubpE.split("|"), a = 0;;) {
                                switch (l[a++]) {
                                    case "0":
                                        return s;
                                    case "1":
                                        s.closed = !1;
                                        continue;
                                    case "2":
                                        s.appendTo(O.body);
                                        continue;
                                    case "3":
                                        var s = new m("iframe", {
                                            src: p.join(""),
                                            id: g,
                                            useT: v,
                                            loading: "lazy",
                                            referrerpolicy: c.IaCAy,
                                            allowfullscreen: !0,
                                            sandbox: c.ZOEAo,
                                            allow: c.qsOts
                                        }).style({
                                            border: 0,
                                            position: "absolute",
                                            width: 0,
                                            height: 0,
                                            "pointer-events": c.TwYVz,
                                            opacity: 1
                                        });
                                        continue;
                                    case "4":
                                        y = c.nKjOb(z, c.LkvwB, (function(e, n, t, r) {
                                            (s = [c.rpczE(c.BRaXD(c.IlpGl, c.dfHtD(K, c.LkvwB) || "0HzX"), "/"), c.fQUNS, B, c.IKipz, F.pathname.startsWith(c.nkoLc) ? 1 : 0, c.kdEMx, Y ? "mp4" : c.tqqvs, "&useT=", H]).set(c.GUfyA, Q.join(""))
                                        }));
                                        continue
                                }
                                break
                            } else if (console.log("_", n, u), await e.eNdtX(Le, 500), u) break;
                    if (console.log(n, u), u) throw e.UkEze;
                    return document.querySelector(n)
                }

                function T(t, r) {
                    if (e.RVGAS(e.zjaac, e.vFeYj)) {
                        [e.uNQzo, e.rvtFe, e.OvpEi, e.OwbkF].forEach((n => {
                            let o = new Event(n, {
                                bubbles: !0,
                                isTrusted: !0
                            });
                            t["on" + n] && t["on" + n](o), n === e.rvtFe && (t.value = r), t.dispatchEvent(o)
                        }))
                    } else n.error(e.eITFR)
                }
                let Ae = document.createElement;
                document._createElement = function(n, t) {
                    let r = Ae.call(document, n, t);
                    return r._click = r.click, r.click = function() {
                        if (console.log(r, e.umoDS, r.tagName), e.DYzTO("A", r.tagName)) {
                            console.log(e.WbHVg, r);
                            let n = r.download,
                                t = r.href;
                            W = {
                                id: new URL(location.href).searchParams.get("v"),
                                href: t,
                                title: n
                            }
                        } else r._click.apply(r)
                    }, console.log(r, e.saXvc, r.tagName), r
                }, async function() {
                    if (location.href.includes(e.PvhkI)) throw e.PvhkI;
                    e.TARnb(GM_setValue, e.rzhcU, ""), e.UbBBa(GM_addValueChangeListener, e.rzhcU, (async function(o, i, c, u) {
                        var l = {
                            ayyJJ: function(n) {
                                return e.SyznQ(n)
                            }
                        };
                        e.Lcluc(e.jmdia, e.alkbw) ? t.push(r) : (console.log({
                            a: o,
                            b: i,
                            c: c,
                            d: u
                        }), c.includes(e.ifiHC) && (e.NsJtb("mHsjK", "mHsjK") ? l.ayyJJ(n) : (await e.KAvzn(Le, 1e3), e.udtWT(close))))
                    }));
                    let o = await e.fjneP(S, e.qSnrB),
                        i = await e.cJLmt(S, e.oifRs);
                    id_ = new URL(location.href).searchParams.get("v");
                    let c = "https://www.youtube.com/watch?v=" + id_;
                    e.sDiNT(T, o, c), i.click()
                }().then(console.log, (async t => {
                    var r = {
                        lENds: e.uwxhO,
                        vWiHC: e.RHdgx,
                        fAaPy: e.mTiks,
                        JTCvg: function(n, t) {
                            return e.kACnJ(n, t)
                        },
                        btEuQ: e.Zxyow,
                        SCKMv: function(n, t) {
                            return e.RVGAS(n, t)
                        },
                        RJEGn: e.WSWSU,
                        zToXV: function(n, t) {
                            return e.FIKra(n, t)
                        },
                        NqIfc: function(n, t) {
                            return e.cogqk(n, t)
                        },
                        KnItc: e.KZYym,
                        OulTx: function(n, t) {
                            return e.jJciW(n, t)
                        },
                        tPxnj: "woEFJ",
                        Mxpbu: function(n, t, r) {
                            return e.RbSCC(n, t, r)
                        },
                        OAHGr: e.rzhcU,
                        OSjiE: function(n, t) {
                            return e.wvzqz(n, t)
                        },
                        NetXZ: function(n, t) {
                            return e.bQTon(n, t)
                        },
                        VbZKg: e.JspMu
                    };
                    if (e.JCLGf(t, e.PvhkI))
                        if (e.ZRRHN(e.lwHQL, e.lwHQL))
                            for (var o = r.lENds.split("|"), s = 0;;) {
                                switch (o[s++]) {
                                    case "0":
                                        v.close();
                                        continue;
                                    case "1":
                                        J(R, j.title + r.vWiHC);
                                        continue;
                                    case "2":
                                        d.log(r.fAaPy, {
                                            a: h,
                                            b: m,
                                            c: p,
                                            d: g
                                        });
                                        continue;
                                    case "3":
                                        r.JTCvg(y, z);
                                        continue;
                                    case "4":
                                        W(r.btEuQ, null);
                                        continue
                                }
                                break
                            } else console.log("Best Quality Video"), await e.XDLiT(S, "#height").then((e => {
                                var t = {
                                    mkKod: function(e, n, t, r) {
                                        return e(n, t, r)
                                    },
                                    nGBMY: function(e, n) {
                                        return r.NqIfc(e, n)
                                    },
                                    iLiHU: r.KnItc,
                                    kLJkm: function(e, n) {
                                        return r.OulTx(e, n)
                                    },
                                    EyJGJ: function(e, n) {
                                        return e === n
                                    },
                                    ebGcj: r.tPxnj,
                                    rCFWU: function(e, n, t) {
                                        return r.Mxpbu(e, n, t)
                                    },
                                    Ohdtm: r.OAHGr
                                };
                                height.selectedIndex = r.OSjiE(height.options.length, 1), dlbutton.click(), open = window.open, window.open = function(e, n, t) {
                                    console.log({
                                        a: e,
                                        b: n,
                                        c: t
                                    })
                                }, r.NetXZ(S, r.VbZKg).then((o => {
                                    var s = {
                                        hjAkJ: function(e, n) {
                                            return r.JTCvg(e, n)
                                        },
                                        hvqYu: "Fixed playBack"
                                    };
                                    if (r.SCKMv(r.RJEGn, r.RJEGn)) {
                                        var f = t.mkKod(i, c, ((...n) => {
                                            f(...n), e && s.hjAkJ(d, f)
                                        }), !0);
                                        return f
                                    }
                                    var h = "";
                                    r.zToXV(setInterval, (e => {
                                        if (!t.nGBMY(t.iLiHU, "xiLYg")) return this.title.body = n, this;
                                        t.kLJkm(h, o.innerText) && (t.EyJGJ(t.ebGcj, "WXNWx") ? (i = 0, c = 1, u.playbackRate = l, a.log(s.hvqYu)) : (h = o.innerText, t.rCFWU(GM_setValue, t.Ohdtm, h)))
                                    }))
                                }))
                            }))
                }))
            } else {
                if (e.SnzAd(document.domain, "snapsave.io")) {
                    async function E(n, t = 2e4) {
                        var r = {
                            bkYJm: function(e, n) {
                                return e == n
                            },
                            VUwMM: e.TbdxN,
                            mjUJR: e.snWnr,
                            CAlEz: function(e, n) {
                                return e(n)
                            },
                            fvzgC: e.prsQs,
                            ealUU: e.gSgkp,
                            Rtufy: e.lByUC
                        };
                        let o = !1;
                        for (setTimeout((() => {
                                console.log(e.fnJhB, n), o = !0
                            }), t); !document.querySelector(n);)
                            if (e.hQVbW(e.AWGGV, "sHKAP")) {
                                var i = [...s.querySelectorAll(e.IMcbI)].map((e => [e, [...e.classList]])).filter((e => e[1].includes("ytcp-video-section")))[0][0],
                                    c = [...i.children[1].children].map((e => [e, [...e.classList], e.tagName])).filter((e => "YTCP-VIDEO-ROW" == e[2]));
                                c.filter((e => r.bkYJm(e[0].children[0].querySelectorAll(r.VUwMM)[0].innerText, r.mjUJR))).map((e => e[0].children[0].querySelectorAll(".cell-body.tablecell-visibility.style-scope.ytcp-video-row")[0])).forEach((e => {
                                    var t = {
                                        wQaPG: function(e, n) {
                                            return r.CAlEz(e, n)
                                        },
                                        oWUZG: r.fvzgC
                                    };
                                    i.log(e), e.append(new c("br").element);
                                    var o = new n(r.ealUU).set("innerText", r.Rtufy).on("click", (function(n) {
                                        t.wQaPG(e, t.oWUZG);
                                        const {
                                            id: r,
                                            href: i,
                                            isShort: c
                                        } = t.wQaPG(o, n.target.parentElement.parentElement).map((e => ({
                                            href: e.href,
                                            short: e.href.includes("/short"),
                                            id: n(e.href)
                                        }))).filter((e => e.id))[0];
                                        F(r, !1, !0, !1, !1, c ? new Y(i) : null)
                                    }));
                                    e.append(o.element)
                                })), z = !0
                            } else if (console.log("_", n, o), await e.KfOBT(v, 500), o) break;
                        if (console.log(n, o), o) throw "NotFound";
                        return document.querySelector(n)
                    }
                    return _wfs = E, void async function() {
                        var n = {
                                nsfPb: function(n, t) {
                                    return e.podYV(n, t)
                                }
                            },
                            o = await e.QJzXD(E, "#s_input", 3e4);
                        if (o)
                            if (e.YIeKb(e.XxwyY, e.upatZ)) n.nsfPb(t, r);
                            else {
                                console.log("Converting"), id_ = new URL(location.href).searchParams.get("v"), o.value = "https://www.youtube.com/watch?v=" + id_, ksearchvideo(), e.TlJiu(setTimeout, e.CLhvw(ksearchvideo), 1e3);
                                var i = await e.ktBjF(E, "#formatSelect");
                                await e.CPDVO(E, e.QGAFq);
                                i.selectedIndex = 0, i.options[0].selected = !0;
                                for (var c = await E(e.qFIpE); !(c = await e.UBJai(E, e.qFIpE));) await e.gxRln(v, 0);
                                for (convertFile(0); e.XMgRZ(c.getAttribute(e.wiaVl), "#");) await e.KyrPA(v, 0), c = await E("#asuccess");
                                console.log(c.href);
                                var u = (await e.KsDzg(_wfs, ".clearfix")).querySelector("h3").innerText,
                                    l = {
                                        id: id_,
                                        href: c.href,
                                        title: u,
                                        length: {}
                                    };
                                console.log("Posted", l), e.seBBc(opener, window).postMessage(l, "*")
                            } else alert("Input was not Found"), console.warn(e.QvQWH)
                    }().then(console.log).catch(console.warn)
                }
                if (e.XMgRZ(document.domain, e.kESzP))
                    if (e.iYYLT(e.RsiBq, e.RsiBq)) c[u] = null, l(a), s.log(f, e.oiaRl);
                    else {
                        const ze = e => new Promise((n => setTimeout(n, e)));
                        _wfs = async function(n, t = 2e4) {
                            let r = !1;
                            for (setTimeout((() => {
                                    console.log(e.fnJhB, n), r = !0
                                }), t); !document.querySelector(n);)
                                if (e.ZVWGy(e.lnlQZ, e.PlFxC)) {
                                    if (console.log("_", n, r), await e.lyfxr(ze, 500), r) break
                                } else o = i.innerText, e.TlJiu(c, e.rzhcU, u);
                            if (console.log(n, r), r) throw e.UkEze;
                            return document.querySelector(n)
                        }, _copyElm = function(o) {
                            var i = {
                                KRidB: function(e) {
                                    return e()
                                }
                            };
                            if (e.TTwXO !== e.JsaNj) {
                                if (!e.GKNWn(o, Element)) throw new Error("Provided argument is not a DOM element.");
                                const t = document.createElement(o.tagName);
                                for (let r of o.attributes) e.LxfbG(e.RsphX, "QEgeh") ? t.setAttribute(r.name, r.value) : i.KRidB(n);
                                return t.style.cssText = o.style.cssText, t.className = o.className, t.innerHTML = o.innerHTML, t
                            }
                            t = r[0]
                        }, async function() {
                            var n = {
                                EEEwm: function(n, t, r) {
                                    return e.mChYd(n, t, r)
                                },
                                XORPG: e.vJYJY
                            };
                            if (e.Bwkxy === e.qyYxX) !["INPUT", e.WCjgf].includes(u) && !l && !a && s && f == e.bsXwh && (e.zbmKN(m, e.qjghg) || e.PbkSi(p, e.ainFu)[1]).click();
                            else {
                                location.href;
                                let t = (await e.XDLiT(_wfs, ".ScCoreButtonLabel-sc-s7h2b7-0")).parentElement.parentElement.parentElement.parentElement;
                                new _e(e.cATfD(_copyElm, t)).on("click", (function() {
                                    var e;
                                    open((e => e.href)(((e = new URL(location.href)).host = "clipr.xyz", e)), "1080")
                                })).appendTo(t.parentNode).element.querySelector(e.VdUda).innerText = e.vXDHk, new _e(e.podYV(_copyElm, t)).on(e.Chyub, (function() {
                                    var n;
                                    e.HEVYw(open, (e => e.href)(((n = new URL(location.href)).host = "clipr.xyz", n)), e.IwTKl)
                                })).appendTo(t.parentNode).element.querySelector(".ScCoreButtonLabel-sc-s7h2b7-0").innerText = e.WuaaK, new _e(e.zbmKN(_copyElm, t)).on(e.Chyub, (function() {
                                    var e;
                                    n.EEEwm(open, (e => e.href)(((e = new URL(location.href)).host = "clipr.xyz", e)), n.XORPG)
                                })).appendTo(t.parentNode).element.querySelector(e.VdUda).innerText = e.UHDVH, new _e(_copyElm(t)).on("click", (function() {
                                    var e;
                                    n.EEEwm(open, (e => e.href)(((e = new URL(location.href)).host = "clipr.xyz", e)), "360")
                                })).appendTo(t.parentNode).element.querySelector(".ScCoreButtonLabel-sc-s7h2b7-0").innerText = e.wYyVB, new _e(e.OdCjp(_copyElm, t)).on(e.Chyub, (function() {
                                    var n;
                                    open((e => e.href)(((n = new URL(location.href)).host = "clipr.xyz", n)), e.bmenz)
                                })).appendTo(t.parentNode).element.querySelector(".ScCoreButtonLabel-sc-s7h2b7-0").innerText = e.bmenz
                            }
                        }().catch(console.warn)
                    } else {
                    if (e.qeGJp(document.domain, e.PoXlC)) {
                        let [Je, Re, je, We] = location.pathname.split("/");
                        if (e.XWDGu(je, e.yTvhy)) return console.warn(e.tPuAb);
                        console.log(e.rhzqM);
                        const Ue = e => new Promise((n => setTimeout(n, e)));
                        async function C(n, t = 2e4) {
                            var r = {
                                aNduL: e.fnJhB
                            };
                            let o = !1;
                            for (setTimeout((() => {
                                    console.log(r.aNduL, n), o = !0
                                }), t); !document.querySelector(n) && (console.log("_", n, o), await e.KAvzn(Ue, 500), !o););
                            if (console.log(n, o), o) throw e.UkEze;
                            return document.querySelector(n)
                        }
                        return _wfs = C, _wfs_ = C, _copyElm = function(n) {
                            if (!e.uWedv(n, Element)) throw new Error(e.ZyPwZ);
                            const t = document.createElement(n.tagName);
                            for (let e of n.attributes) t.setAttribute(e.name, e.value);
                            return t.style.cssText = n.style.cssText, t.className = n.className, t.innerHTML = n.innerHTML, t
                        }, void async function() {
                            var n = {
                                vNUYq: e.ofUIp,
                                YCXLe: function(e, n) {
                                    return e === n
                                },
                                Fphjv: "function",
                                fatYO: function(n, t) {
                                    return e.uWedv(n, t)
                                },
                                oBSfy: function(n, t) {
                                    return e.Ekwwn(n, t)
                                },
                                MEmWg: function(n, t) {
                                    return e.OSATA(n, t)
                                },
                                ItciZ: function(n, t) {
                                    return e.dwzqI(n, t)
                                },
                                sdxaj: function(n, t) {
                                    return e.MRqcJ(n, t)
                                },
                                Fuemc: function(n, t) {
                                    return e.BvYlz(n, t)
                                },
                                QmRMH: e.kdkoH,
                                fsKhT: function(e, n) {
                                    return e !== n
                                },
                                AziDv: "syPFR",
                                Mqxde: function(n, t) {
                                    return e.Lcluc(n, t)
                                },
                                qXYkF: "VOD",
                                UQdpE: ".ScCoreButtonLabel-sc-s7h2b7-0"
                            };
                            let t = location.href;
                            await e.CPILc(_wfs, e.mSZQY);
                            let c = [...document.querySelectorAll(e.ECHvd)].filter((e => e.querySelector("button") && !e.querySelector("button").disabled))[0],
                                u = e.mtuhP;
                            [{
                                label: e.vXDHk,
                                resolution: e.KfvNj
                            }, {
                                label: "720P",
                                resolution: e.IwTKl
                            }, {
                                label: "480P",
                                resolution: "480"
                            }, {
                                label: e.wYyVB,
                                resolution: e.MpYKJ
                            }, {
                                label: e.bmenz,
                                resolution: "VOD"
                            }].forEach((({
                                label: e,
                                resolution: l
                            }) => {
                                var a = {
                                    CXeqp: function(e, t) {
                                        return n.YCXLe(e, t)
                                    },
                                    ESihX: n.Fphjv,
                                    TouLJ: function(e, t) {
                                        return n.fatYO(e, t)
                                    },
                                    gslIv: function(e, t) {
                                        return n.oBSfy(e, t)
                                    },
                                    eWfln: function(e, t) {
                                        return n.MEmWg(e, t)
                                    },
                                    aYbys: function(e, t) {
                                        return n.ItciZ(e, t)
                                    },
                                    HxQhE: function(e, t) {
                                        return n.sdxaj(e, t)
                                    },
                                    VSEoY: function(e, t) {
                                        return n.Fuemc(e, t)
                                    },
                                    mjNoy: n.QmRMH,
                                    qNCPW: "JGoiu",
                                    gFaFY: function(e, n, t) {
                                        return e(n, t)
                                    }
                                };
                                if (n.fsKhT(n.AziDv, n.AziDv)) r = 1, o.playbackRate = 16, i.log(n.vNUYq);
                                else {
                                    let r = new _e(_copyElm(c)).on("click", (function() {
                                        if (a.CXeqp(a.mjNoy, a.qNCPW)) {
                                            a.CXeqp(typeof m, a.ESihX) && a.TouLJ(p, g) && (t = K[0]);
                                            var e = z.getBoundingClientRect();
                                            return a.gslIv(e.top, a.eWfln(0, a.aYbys(J.innerHeight || R.documentElement.clientHeight, 2))) && a.gslIv(e.left, 0) && a.HxQhE(e.bottom, a.VSEoY(j.innerHeight || W.documentElement.clientHeight, a.aYbys(U.innerHeight || G.documentElement.clientHeight, 2))) && e.right <= (N.innerWidth || O.documentElement.clientWidth)
                                        }[Je, Re, je, We] = location.pathname.split("/"), a.gFaFY(open, (e => e.href)((e => (e.host = "clipr.xyz", e))(new URL(location.href))), l)
                                    })).appendTo(c.parentNode);
                                    n.Mqxde(l, n.qXYkF) ? r.element.querySelector(n.UQdpE).innerText = e : r.element.querySelector(u).innerText = e
                                }
                            }))
                        }().catch(console.warn)
                    }
                    if (e.fSUzL(document.domain, "clipr.xyz")) {
                        async function x() {
                            var n = {
                                ZLrsh: e.prsQs,
                                WwrQU: function(n, t) {
                                    return e.RmcMd(n, t)
                                },
                                yrYmw: function(e, n, t, r, o, i, c) {
                                    return e(n, t, r, o, i, c)
                                }
                            };
                            if (e.XOlfr(e.STkjP, "UMOUA")) {
                                for (; document.readyState != e.zmbPL;) e.zoZab === e.JxpsI ? arguments[0].setAttribute(t, arguments[1][r]) : await I(0);
                                return !0
                            } {
                                c(n.ZLrsh);
                                const {
                                    id: e,
                                    href: t,
                                    isShort: r
                                } = n.WwrQU(u, l.target.parentElement.parentElement).map((e => ({
                                    href: e.href,
                                    short: e.href.includes("/short"),
                                    id: d(e.href)
                                }))).filter((e => e.id))[0];
                                n.yrYmw(s, e, !1, !0, !1, !1, r ? new f(t) : null)
                            }
                        }

                        function I(e) {
                            return new Promise((n => setTimeout(n, e)))
                        }
                        return void async function() {
                            var t = {
                                JYAcB: function(n, t) {
                                    return e.IYqPF(n, t)
                                },
                                NDSEj: "VKLdG",
                                Bojie: e.bVWQG,
                                OymhC: function(n, t) {
                                    return e.gxRln(n, t)
                                }
                            };
                            let r = name;
                            await e.nDvjf(x), logger.log("Loaded");
                            let o = ((r = {}) => {
                                var o = {
                                    ywBwP: function(e, n) {
                                        return e(n)
                                    }
                                };
                                return [...document.querySelectorAll(e.JKbyr)].filter((e => findhref2(e)[0])).filter((e => findhref2(e)[0].href.includes("clips.twitchcdn.net"))).forEach((e => {
                                    if (t.JYAcB(t.NDSEj, t.NDSEj)) throw o.ywBwP(n, "These button dont work on youtube music yet"), ".";
                                    r[e.querySelector(t.Bojie).innerText.replace("p", "")] = t.OymhC(findhref2, e)[0].href
                                })), r
                            })()[r];
                            logger.log(1);
                            let i = document.querySelector(e.hBKNJ).innerText;
                            logger.log(2);
                            let c = document.querySelector(e.itXyp).innerText;
                            logger.log(3);
                            let u = "@" + i + " on Twitch | " + c + " - " + r + "P.mp4";
                            logger.log("Downloading file as: " + u), e.PbkSi(open, o), logger.log(4), await e.mUMmn(I, 4e3), e.BjqGY(close)
                        }().catch(console.warn)
                    }
                    if (location.href.includes(e.cNsXO))
                        if (e.SCInF("Mwhnl", "htmEX"))
                            for (var P = e.vYHgt.split("|"), M = 0;;) {
                                switch (P[M++]) {
                                    case "0":
                                        var q = c(".media-heading")[0].innerText;
                                        continue;
                                    case "1":
                                        var L = u.href;
                                        continue;
                                    case "2":
                                        (s || f).postMessage(A, "*");
                                        continue;
                                    case "3":
                                        var A = {
                                            id: l,
                                            href: L,
                                            title: q,
                                            length: {}
                                        };
                                        continue;
                                    case "4":
                                        a.log(e.kbJNP);
                                        continue
                                }
                                break
                            } else {
                                async function P(n, o = 3e4) {
                                    var i = {
                                        cSKMv: function(e) {
                                            return e()
                                        }
                                    };
                                    if (!e.ISujJ(e.sjTaZ, "QnqOm")) {
                                        var d;
                                        for (e.hkSYs(v, o).then((e => d = !0)); !document.querySelector(n);) {
                                            if (e.ofPWO != e.ofPWO) return this.element["on" + t] = r, this;
                                            if (await e.MWiYN(v, 0), d) break
                                        }
                                        return document.querySelector(n)
                                    }
                                    i.cSKMv(c).append(u.br.element), i.cSKMv(l).append(a.element), s().append(f.element)
                                }
                                console.log("ok"), P("#u").then((async t => {
                                    var c = {
                                        guBLu: function(n, t, r) {
                                            return e.eFctY(n, t, r)
                                        },
                                        EdiJa: e.GFuwY
                                    };
                                    e.EJzIf === e.qOtWL ? c.guBLu(n, {
                                        log: !1
                                    }, c.EdiJa) : (t.value = "https://www.youtube.com/watch?v=" + new URL(location.href).searchParams.get("v"), convert.click(), await e.pQRGh(v, 200), (await e.eNdtX(P, e.oOMJU)).click(), (await e.SkbGI(P, e.BYSfa)).click(), e.YmyFZ(P, ".download-button").then((n => {
                                        var t = {
                                            uyrKz: e.bVMoo,
                                            AqyWX: e.RBiSW,
                                            lZUXd: e.NBwzJ,
                                            kLJtf: function(n, t) {
                                                return e.iiyRf(n, t)
                                            },
                                            lRjqV: function(n, t) {
                                                return e.JTjzr(n, t)
                                            },
                                            gNCBe: function(n, t) {
                                                return e.ZVWGy(n, t)
                                            },
                                            EioOn: e.EqDHY,
                                            rWQPv: e.PieKY,
                                            CTiLq: e.umoDS,
                                            GdTiP: function(n, t) {
                                                return e.ajHAn(n, t)
                                            },
                                            myNPG: "Caught",
                                            PhWmF: function(n, t) {
                                                return e.yozZo(n, t)
                                            },
                                            Lqzeg: function(n) {
                                                return e.aSiyS(n)
                                            }
                                        };
                                        let c = document.createElement;
                                        document.createElement = function(e, n) {
                                            if (t.gNCBe("tnjBF", "NAOND")) {
                                                let r = c.call(document, e, n);
                                                return r._click = r.click, r.click = function() {
                                                    var e = {
                                                        dzHqV: "Handled",
                                                        tkwKo: function(e, n) {
                                                            return e == n
                                                        },
                                                        bLKSl: t.uyrKz,
                                                        NdWzv: function(e, n) {
                                                            return e + n
                                                        },
                                                        CDcCt: function(e, n) {
                                                            return e + n
                                                        },
                                                        CaBMD: t.AqyWX,
                                                        QrcqK: ".mp4",
                                                        gnfEu: t.lZUXd,
                                                        IgprG: function(e, n) {
                                                            return t.kLJtf(e, n)
                                                        },
                                                        lmdya: function(e, n) {
                                                            return t.lRjqV(e, n)
                                                        }
                                                    };
                                                    if (t.gNCBe(t.EioOn, t.rWQPv))
                                                        if (console.log(r, t.CTiLq, r.tagName), t.GdTiP("A", r.tagName)) {
                                                            console.log(t.myNPG, r);
                                                            let e = r.download,
                                                                n = r.href;
                                                            W = {
                                                                id: new URL(location.href).searchParams.get("v"),
                                                                href: n,
                                                                title: e
                                                            }, t.PhWmF(opener, window).postMessage(W, "*"), t.Lqzeg(close)
                                                        } else r._click.apply(r);
                                                    else {
                                                        var {
                                                            data: {
                                                                href: n,
                                                                links: o,
                                                                title: i,
                                                                length: c,
                                                                id: u,
                                                                mp4: l,
                                                                info: {
                                                                    username: a
                                                                }
                                                            }
                                                        } = h;
                                                        if (m.log(e.dzHqV, {
                                                                href: n,
                                                                title: i,
                                                                length: c,
                                                                id: u,
                                                                links: o,
                                                                mp4: l
                                                            }, p), e.tkwKo(g.origin, e.bLKSl)) i = N, r(l ? o[0] : o.pop(), e.NdWzv(e.CDcCt(e.NdWzv(a, e.CaBMD), i), l ? e.QrcqK : e.gnfEu), V);
                                                        else {
                                                            if (K) {
                                                                let t = X.createElement("a");
                                                                t.download = e.IgprG(i, e.gnfEu), t.href = n, Z.body.appendChild(t), t.click(), t.remove()
                                                            } else e.lmdya(Y, n);
                                                            H[Q] = n
                                                        }
                                                    }
                                                }, console.log(r, "was created", r.tagName), r
                                            }
                                            r(o, i)
                                        }, n.click(), console.log(e.DOzwS), e.dayVo(setTimeout, (() => n.click()), 1e3)
                                    })))
                                })).then(console.log, console.warn)
                            }
                }
            }
        }

        function z() {
            if (e.QJyZk("FuJTK", e.KsaqP)) {
                if (document.domain.includes(e.ZGfzd)) throw e.SkbGI(alert, e.CUuuV), ".";
                var n = [...document.getElementsByTagName("ytd-playlist-panel-renderer")].filter(u).filter((e => !a(e)))[0],
                    t = e.IlJxU(findhref2, n, "span").filter((e => !a(e))).filter(u).filter((e => "video-title" == e.id)).map(s).map(s).map((e => ({
                        id: setElement(findhref2(s(e))[0].href),
                        e: e
                    })));
                return t
            } {
                const e = i.createElement("a");
                e.href = c, e.download = u, l.body.appendChild(e), e.click(), a.body.removeChild(e)
            }
        }

        function J(e, n) {
            const t = document.createElement("a");
            t.href = e, t.download = n, document.body.appendChild(t), t.click(), document.body.removeChild(t)
        }
        var R, j;
        async function W() {
            if (e.QJyZk(e.wHwel, e.YrbGY)) {
                for (; j && !j.closed;) await e.XZAbU(v, 0);
                return 1
            }
            return n.getElementsByClassName("ehlq8k34")[0]
        }

        function U(n, t = "aria-label", r = document.body) {
            var o = [];
            return e.CPILc((function r(i) {
                if ("kBJeX" === e.DodIp) this[d[0]] = h(m[p[1]]), !g[v[1]] && !y && (U = !0, G = N[1], O.log(V));
                else {
                    var c = !1;
                    if (t) i.getAttribute(t) == n && (o.push(i), c = 1);
                    else if (e.fethI != e.fethI) {
                        let e = new s(i, {
                            bubbles: !0,
                            isTrusted: !0
                        });
                        d["on" + h] && m["on" + p](e), "input" === g && (J.value = R), z.dispatchEvent(e)
                    } else [...i.attributes].map((e => {
                        const {
                            name: n,
                            value: t
                        } = e;
                        return {
                            name: n,
                            value: t
                        }
                    })).filter((e => e.value == n)).length && (o.push(i), c = 1);
                    i.children.length && !c && ((i = i.children).forEach = [].forEach, i.forEach((e => {
                        r(e)
                    })))
                }
            }), r), o.length ? e.AZfOD(o.length, 1) ? o[0] : o || !1 : null
        }

        function G(n, o = "aria-label", i = document.body) {
            var c = {
                    MgWwg: function(n, t) {
                        return e.GxvqX(n, t)
                    },
                    AQIzT: function(n, t) {
                        return e.AZfOD(n, t)
                    },
                    PAuuI: function(n, t) {
                        return e.lBplt(n, t)
                    },
                    OOTIJ: e.tHRqi
                },
                u = [];
            return e.KfOBT((function e(i) {
                c.AQIzT(i.getAttribute(o), n) ? c.PAuuI(c.OOTIJ, c.OOTIJ) ? t[r].close() : u.push(i) : i.children.length && ((i = i.children).forEach = [].forEach, i.forEach((n => {
                    c.MgWwg(e, n)
                })))
            }), i), e.XMgRZ(u.length, 1) ? u[0] : u || !1
        }

        function N() {
            document.querySelector(e.pBANQ).click()
        }

        function O() {
            e.jjcJu("qLRhH", e.FvDRw) ? ([a, s, f, d] = h.pathname.split("/"), m((e => {
                e.href
            })((e => (e.host = "clipr.xyz", e))(new p(g.href))))) : (e.PeefU(U, e.brzmr, e.HOSvE) && e.weKiw(U, e.brzmr, e.HOSvE)[0] || e.GbvlN(U, e.LrkoZ, e.HOSvE)).click()
        }

        function V() {
            var n = {
                GKsXl: e.mTiks,
                sigta: function(e, n, t) {
                    return e(n, t)
                },
                BqNLc: e.RHdgx,
                pQdMv: e.UzqxF,
                USCkG: e.Zxyow
            };
            if (e.DxRgp("woXcb", e.pghSg))(e.wbOWn(query, e.CGIII) && e.peIvz(e.XDLiT(query, e.CGIII).querySelectorAll(e.zrDLG)[0].getAttribute("d"), UnmutePath) && e.RbSCC(U, e.brzmr, "title")[0] || U("Unmute", e.HOSvE) || e.BIcas(U, e.pZfHj, e.HOSvE)).click();
            else {
                var t = {
                    uIDlI: n.GKsXl,
                    YRQAj: function(e, t, r) {
                        return n.sigta(e, t, r)
                    },
                    XgAfh: n.BqNLc,
                    qgsYR: "instaURL"
                };
                let e = l(n.pQdMv, a.href);
                var r = n.sigta(s, n.USCkG, (function(n, o, i, c) {
                    i && (R.log(t.uIDlI, {
                        a: n,
                        b: o,
                        c: i,
                        d: c
                    }), e.close(), n(r), t.YRQAj(W, i, U.title + t.XgAfh), t.YRQAj(G, t.qgsYR, null))
                }))
            }
        }
        console.log("B?"), _getIds = z, info = {}, downloadT = function(t, r = !1, i = !0, f = !1, m = !1, p = "") {
            var g = {
                FmOiA: function(e, n) {
                    return e === n
                },
                vwlsS: function(n, t) {
                    return e.BvYlz(n, t)
                },
                QIPDB: e.rDPOf,
                mDEwa: function(n, t) {
                    return e.KAvzn(n, t)
                },
                HoHPo: e.UMLcA,
                areNk: "&s=",
                Pemrn: e.sFXcm,
                AGFax: "&mp4=",
                EfVMo: e.zKykp,
                MslAs: "mp3",
                ggksy: e.zsOKV,
                OvonU: function(n, t) {
                    return e.oexJR(n, t)
                },
                kpXUu: e.Rxjui,
                ALVbI: e.rAGxL,
                lmdov: "no-referrer",
                GIBfP: "allow-same-origin allow-scripts allow-popups allow-forms",
                IXJFU: e.CtPhI,
                WIPSP: e.hJtOD
            };
            let v = e.mnbgn(t, f ? e.zKykp : e.gQFDC) + i;
            var y;
            if (!(y = document.getElementById(v)) || y.remove(), localStorage[v] && !r && (!m || !e.KsDzg(confirm, "You have already download this video as ." + (f ? e.zKykp : e.gQFDC) + "\nStill download?"))) return;
            let w = e.yozZo(p, location);
            var b = new URL(location.href);
            b.host = b.host.replace(".com", e.ZRLZd), console.log("o", b);
            let k = [e.quNkO(e.PTzMm("https://y2mate.nu/", e.pQRGh(GM_getValue, e.yjPrT) || e.UMLcA), "/"), "?v=", t, "&s=", b.pathname.startsWith("/shorts/") ? 1 : 0, e.MeYDU, f ? "mp4" : e.gQFDC, e.zsOKV, i];
            console.log(v, k);
            return e.YWMaZ(c, e.cBGJi, (function() {
                if (!e.wIGNy("ZHvpL", e.hnADN)) return g.FmOiA(n.offsetParent, null);
                info[t].close()
            }), !0), onmessage = function(n) {
                var t, r = {
                    QlgdU: e.WbHVg
                };
                if (n.origin == o || n.origin.match(/https?:\/{2}onlymp3\.to/) || n.origin.match(/https?:\/{2}en\.onlymp3\.to/) || n.origin.match(/https?:\/{2}en(\d)\.onlinevideoconverter\.pro/) || n.origin == e.mTYGm || e.bmivW(n.origin, "https://y2mate.nu") || e.zcpsk(n.origin, e.mIPWU) || e.kEtov(n.origin, e.KaCML))
                    if (e.Lcluc("LaxSk", e.rwDek)) {
                        const {
                            data: {
                                href: r,
                                title: o,
                                length: c,
                                id: u,
                                _: l
                            }
                        } = n;
                        let a = e.naoFe(o, f ? e.RHdgx : e.NBwzJ);
                        (t = document.getElementById(l)) && t.remove(), console.log(e.QfrDw, {
                            href: r,
                            title: o,
                            length: c,
                            id: u,
                            _: l
                        }, n), H.set(e.MPIoU, e.aWAOK), H.set(e.zfMte, !1), i ? (console.log(e.NoUjQ), e.ugnJO(J, r, a)) : open(r), localStorage[l] = r
                    } else {
                        u.log(r.QlgdU, l);
                        let e = a.download,
                            t = s.href;
                        n = {
                            id: new d(h.href).searchParams.get("v"),
                            href: t,
                            title: e
                        }
                    } else console.log(e.MXlra, n)
            }, info[t] = f ? e.YWMaZ(open, w.pathname.startsWith(e.sFXcm) ? e.sjHWo : "https://qdownloader.cc/youtube-video-downloader.html?v=" + t, [t, w.pathname.startsWith(e.sFXcm) ? 1 : 0, e.kCJrP(f, !1)], "width=400,height=500") : ! function() {
                if (g.OvonU(g.kpXUu, g.kpXUu)) return new n("br");
                var e = new _e("iframe", {
                    src: k.join(""),
                    id: v,
                    useT: i,
                    loading: g.ALVbI,
                    referrerpolicy: g.lmdov,
                    allowfullscreen: !0,
                    sandbox: g.GIBfP,
                    allow: g.IXJFU
                }).style({
                    border: 0,
                    position: "absolute",
                    width: 0,
                    height: 0,
                    "pointer-events": g.WIPSP,
                    opacity: 1
                });
                return R = GM_addValueChangeListener("y2mate.nu", (function(n, r, o, c) {
                    k = [g.vwlsS(g.QIPDB, g.mDEwa(GM_getValue, "y2mate.nu") || g.HoHPo) + "/", "?v=", t, g.areNk, b.pathname.startsWith(g.Pemrn) ? 1 : 0, g.AGFax, f ? g.EfVMo : g.MslAs, g.ggksy, i], e.set("src", k.join(""))
                })), e.appendTo(document.body), e.closed = !1, e
            }()
        }, downloadTikTok = function(n, r) {
            var d = {
                sOXsH: function(n) {
                    return e.qaClp(n)
                },
                XJuXo: function(e, n, t) {
                    return e(n, t)
                },
                FVpIh: e.NbEbr,
                jbXvj: function(e, n) {
                    return e == n
                },
                YrcSu: function(n, t) {
                    return e.LxfbG(n, t)
                },
                hoWWl: e.SfjTB,
                MfvFH: "Handled",
                jsTon: function(n, t) {
                    return e.kEtov(n, t)
                },
                tebrc: e.bVMoo,
                xEmwc: function(n, t, r, o) {
                    return e.GSyIi(n, t, r, o)
                },
                tXqBs: function(e, n) {
                    return e + n
                },
                flEHO: function(e, n) {
                    return e + n
                },
                XRDcT: e.RBiSW,
                glDNg: e.NBwzJ,
                RLfdM: e.ZvIrz,
                SJKSg: "rNnCf",
                jqeTB: function(n, t) {
                    return e.hIdFl(n, t)
                },
                yrlwg: "Unhandled Post"
            };
            e.vEoMl(e.ScBJA, e.QnOsh) ? (d.sOXsH(c).append(u.br.element), l().append(a.element), d.sOXsH(s).append(f.element)) : async function(n, r) {
                await W(), console.log("ez");
                let s = r.videoID,
                    f = r.username,
                    h = t();
                onmessage = function(e) {
                    var n = {
                        wySgQ: function(e, n, t) {
                            return d.XJuXo(e, n, t)
                        },
                        aLaZS: function(e, n) {
                            return e(n)
                        },
                        vxQYm: d.FVpIh
                    };
                    if (d.jbXvj(e.origin, o) || e.origin.match(/https?:\/{2}savetik\.csavetik.coo/) || e.origin.match(/https?:\/{2}en\.onlymp3\.to/) || e.origin.match(/https?:\/{2}en(\d)\.onlinevideoconverter\.pro/) || d.jbXvj(e.origin, "https://savetik.co"))
                        if (d.YrcSu(d.hoWWl, "RTgOH")) o.push(i.data), c.log(u.data);
                        else {
                            var {
                                data: {
                                    href: t,
                                    links: r,
                                    title: s,
                                    length: f,
                                    id: m,
                                    mp4: p,
                                    info: {
                                        username: g
                                    }
                                }
                            } = e;
                            if (console.log(d.MfvFH, {
                                    href: t,
                                    title: s,
                                    length: f,
                                    id: m,
                                    links: r,
                                    mp4: p
                                }, e), d.jsTon(e.origin, d.tebrc)) s = h, d.xEmwc(J, p ? r[0] : r.pop(), d.tXqBs(d.flEHO(d.tXqBs(g, d.XRDcT), s), p ? ".mp4" : d.glDNg), j);
                            else {
                                if (d.RLfdM != d.RLfdM) {
                                    for (let e in arguments[1]) arguments[0].setAttribute(e, arguments[1][e]);
                                    return arguments[0]
                                }
                                if (useT)
                                    if (d.YrcSu(d.SJKSg, "rNnCf")) {
                                        let e = document.createElement("a");
                                        e.download = s + ".mp3", e.href = t, document.body.appendChild(e), e.click(), e.remove()
                                    } else n.wySgQ(i, !0, c(n.aLaZS(u, n.vxQYm) ? n.aLaZS(l, n.vxQYm).innerText : a.href));
                                else d.jqeTB(open, t);
                                localStorage[_] = t
                            }
                        } else console.log(d.yrlwg, e)
                }, j = open("https://savetik.co/en", ["https://www.tiktok.com/" + f + "/video/" + s, e.rvtlC(n, !1)], "width=400,height=500")
            }(n, r).then(console.log, console.warn)
        }, abc_ = U, U = O, Um = V;
        var K = 0;

        function B(n) {
            if (!e.cPCjT(e.oZPxJ, "PKyts")) return !!n && !n.closed;
            for (var t = e.brRit.split("|"), r = 0;;) {
                switch (t[r++]) {
                    case "0":
                        (n || j.parent).postMessage(c, "*");
                        continue;
                    case "1":
                        d.log("a", h);
                        continue;
                    case "2":
                        var o = e.lVtJZ(m, p.forms[0])[0].href;
                        continue;
                    case "3":
                        e.mNsEl(c);
                        continue;
                    case "4":
                        J.log(e.kbJNP, c);
                        continue;
                    case "5":
                        var i = e.JVuQG(g, v.forms[0], e.CypRX)[0].innerText;
                        continue;
                    case "6":
                        var c = {
                            _: y,
                            id: z,
                            href: o,
                            title: i,
                            length: {}
                        };
                        continue
                }
                break
            }
        }
        async function F(n = [
            ["w1", "win1"],
            ["w2", "win2"],
            ["w3", "win3"],
            ["w4", "win4"]
        ]) {
            var t, r = {
                    xuSgg: function(e, n) {
                        return e !== n
                    },
                    sjRgJ: e.zkYRP,
                    FIiKV: e.YDrnW,
                    zFMNA: function(e, n) {
                        return e(n)
                    },
                    EMdEk: function(n, t, r) {
                        return e.GidzD(n, t, r)
                    }
                },
                o = !1;
            return await new Promise(((e, i) => {
                var c = {
                        iCOSR: function(e, n) {
                            return r.xuSgg(e, n)
                        },
                        DWIld: r.sjRgJ,
                        hLNRQ: r.FIiKV,
                        NXKhX: function(e, n) {
                            return r.zFMNA(e, n)
                        }
                    },
                    u = r.EMdEk(setInterval, (r => {
                        if (n.forEach((e => {
                                this[e[0]] = B(window[e[1]]), !window[e[1]] && !o && (o = !0, t = e[1], console.log(e))
                            })), t) {
                            if (!c.iCOSR(c.DWIld, c.hLNRQ)) return !1;
                            c.NXKhX(e, t), clearInterval(u)
                        }
                    }), 500)
            })), t
        }

        function Y(t, r, o) {
            var i = {
                akptM: function(n, t) {
                    return e.xeMCD(n, t)
                },
                phZuc: e.Nckwb,
                ZyGMx: function(n, t) {
                    return e.MWiYN(n, t)
                },
                GYiZp: "YVRGK",
                uKxPp: e.yAQXr,
                cVueq: "unload",
                rHqyx: function(n, t, r) {
                    return e.uSsbS(n, t, r)
                },
                IVObz: e.ZyPwZ
            };
            if (!r) return alert(e.UgWkA);
            var d = e.dmnEL(_getIds),
                h = [];
            for (let n = 0; e.Nioem(n, t); n++) {
                if (e.iMumP(e.iQNqt, "NlGbO")) return e.iMumP(c, u) && (this.body.color = l), e.hmRxG(a, s) && (this.body.size = f), this;
                h.push([e.mnbgn("w", n), e.kCJrP(e.BHcPH, n)])
            }
            d.forEach((({
                id: e
            }, t) => {
                var c = {
                    vmvop: i.IVObz
                };
                i.ZyGMx(F, h).then((u => {
                    var l = {
                        FpJrP: function(e, n) {
                            return i.akptM(e, n)
                        },
                        mwlqp: i.phZuc,
                        yAmNp: function(e, n) {
                            return i.ZyGMx(e, n)
                        },
                        psrEA: "isclosed"
                    };
                    if (i.akptM("YVRGK", i.GYiZp)) throw new n(c.vmvop);
                    if (!info[e] && !localStorage[e] || o) {
                        console.log(i.uKxPp, e, t), window[u] = downloadT(e, o, !0, !!r), window.addEventListener(i.cVueq, (function(e) {
                            window[u].close()
                        }));
                        var a = i.rHqyx(setInterval, (e => {
                            l.FpJrP(l.mwlqp, "PsfFI") ? (!window[u] || window[u].closed) && (window[u] = null, l.yAmNp(clearInterval, a), console.log(u, l.psrEA)) : n(2, !0, !1)
                        }), 300)
                    }
                }))
            }))
        }
        window.ch3 = B, window.getWin = F, WIP_ = Y;
        var D, H = new n(e.gSgkp).set(e.MPIoU, e.aWAOK).on("click", (function(n) {
                H.set(e.MPIoU, "Wait..."), H.set(e.zfMte, !0), e.wCZtn(downloadT, setElement(location.href), !0, !0, !1, !0)
            })),
            Q = new n("button").set(e.MPIoU, "Get MP4").on(e.Chyub, (function(e) {
                downloadT(setElement(location.href), !0, !0, !0, !0)
            })),
            X = new n(e.gSgkp).set(e.MPIoU, e.BwmXz).on(e.Chyub, (function(n) {
                e.WKQDI("mjGBf", e.lXjwc) ? e.LOhWa(t, r) : e.VVVTT(WIP_, 2, !1, !1)
            })),
            Z = new n(e.gSgkp).set(e.MPIoU, e.VMnJk).on("click", (function(n) {
                e.YWMaZ(WIP_, 2, !0, !1)
            })),
            ee = new n(e.gSgkp).set(e.MPIoU, e.UCLHE).on(e.Chyub, (function(n) {
                e.gVnmH(downloadTikTok, !0, e.HJggu(setElement2, e.CGzpn(getClass, e.NbEbr) ? e.gxRln(getClass, e.NbEbr).innerText : location.href))
            })).style({
                color: e.wTVBD
            }),
            ne = new n(e.gSgkp, {
                id: "tt1"
            }).set(e.MPIoU, e.UCLHE).on("click", (function(n) {
                var t = {
                    PKROn: function(n, t, r) {
                        return e.WvJtQ(n, t, r)
                    },
                    BZZHB: e.ESmPs
                };
                if (e.SltAo === e.uIyuZ) {
                    let e = t.PKROn(r, o, "img")[0];
                    i.add([e.src, e.getAttribute(t.BZZHB)])
                } else downloadTikTok(!0, e.rjzfD(setElement2, getClass(e.NbEbr) ? e.FwVAQ(getClass, e.NbEbr).innerText : location.href))
            })).style({
                color: e.wTVBD
            }),
            te = new n("button").set(e.MPIoU, "Get MP3").on(e.Chyub, (function(n) {
                if (e.kbGba("NfZdd", e.LhbPV)) {
                    var t = {
                        LjyJY: function(n, t) {
                            return e.BCCtC(n, t)
                        }
                    };
                    c.children.length && (d = h.children, m.forEach = [].forEach, p.forEach((e => {
                        t.LjyJY(v, e)
                    })))
                } else e.SdGlk(downloadTikTok, !1, e.aCVxK(setElement2, e.XZAbU(getClass, e.NbEbr) ? e.dSQLf(getClass, e.NbEbr).innerText : location.href))
            })).style({
                color: "blue"
            });

        function re() {
            return document.querySelector("#end") || document.querySelector(e.rIjNK)
        }

        function oe() {
            var c = {
                Uapwc: e.queVY,
                nSRou: function(n, t) {
                    return e.cJLmt(n, t)
                },
                fukhz: e.fdAqL,
                UGFQS: e.eBtVi,
                QyCcw: function(n, t) {
                    return e.FIKra(n, t)
                },
                dZnfC: e.nLTUJ,
                htHCE: function(n, t) {
                    return e.WKQDI(n, t)
                },
                XVUei: e.IlCDF,
                aaMvL: function(e) {
                    return e()
                },
                tIBts: function(n) {
                    return e.dmnEL(n)
                },
                GIwce: e.jBeVO,
                HgYor: function(n, t) {
                    return e.DxRgp(n, t)
                },
                vuzbD: e.Qrjre,
                nqStb: function(n, t) {
                    return e.jJciW(n, t)
                },
                KfiXj: function(n) {
                    return e.YgPBL(n)
                },
                auEkO: e.VbNmk,
                LHMHO: function(n, t, r) {
                    return e.SdGlk(n, t, r)
                },
                eKIMH: function(e, n) {
                    return e !== n
                },
                UICjm: e.rOdND,
                JlfiN: e.KrgYg
            };
            if (e.yxBul(e.UBJuq, "ZBiHj")) n.warn("using loader.to api");
            else {
                const y = re();

                function g() {
                    var e = {
                        iBITg: c.Uapwc,
                        VVeck: function(e, n) {
                            return e(n)
                        },
                        qOQsT: function(e, n) {
                            return c.nSRou(e, n)
                        },
                        RPzJC: function(e, n) {
                            return e || n
                        }
                    };
                    try {
                        if (c.fukhz == c.fukhz) return !(![...document.querySelectorAll(c.UGFQS)].filter(u).filter((e => !a(e)))[0] && !c.nSRou(query, ".autoplay")) && ([...document.querySelectorAll(c.UGFQS)].filter(u).filter((e => !a(e)))[0] || c.QyCcw(query, c.dZnfC));
                        var n = l.innerText.split("\n"),
                            t = n.map((e => e.match(/[:\d]+/gi))).filter((e => !!e)).pop().pop(),
                            g = n[0].split(e.iBITg)[1],
                            v = e.VVeck(a, s.parentNode)[0].href,
                            y = {
                                id: e.qOQsT(f, d.href),
                                href: v,
                                title: g,
                                length: t
                            };
                        e.RPzJC(h, m).postMessage(y, "*"), p.log("Poasted")
                    } catch (n) {
                        if (!c.htHCE("AdCfR", c.XVUei)) return !1;
                        r.log("TimeOut for " + o), i = !0
                    }
                }
                console.log(y), H.appendTo(y), Q.appendTo(y), console.log(e.Pyuuy);
                var v = !1;
                setInterval((() => {
                    var e = {
                        gMuwT: function(e, n) {
                            return e(n)
                        },
                        QGBDR: c.GIwce,
                        LBoDC: function(e, n) {
                            return e(n)
                        }
                    };
                    if (c.HgYor("JjQmS", c.vuzbD)) return e.gMuwT(t, r.querySelector(e.QGBDR))[0].href;
                    c.nqStb(v, c.KfiXj(g)) && c.KfiXj(g) ? (console.log(c.auEkO), c.LHMHO(setTimeout, (() => {
                        c.aaMvL(g).append(n.br.element), c.tIBts(g).append(X.element), g().append(Z.element)
                    }), 100)) : c.nqStb(v, c.KfiXj(g)) && !g() && (c.eKIMH("wipFl", c.UICjm) ? e.LBoDC(t, r) : console.log(c.JlfiN)), v = c.tIBts(g)
                }), 100)
            }
        }
        if (console.log(e.KYauD), a1 = [
                ["youtube", function() {
                    var n = {
                        SSKIJ: function(e) {
                            return e()
                        },
                        UogxC: e.ruFau,
                        ezZIB: function(e) {
                            return e()
                        }
                    };
                    e.LqfMU !== e.ocqmR ? e.QJzXD(l, (function() {
                        re();
                        if (!n.SSKIJ(re)) throw n.UogxC;
                        return console.log("Posting"), n.ezZIB(oe)
                    }), {
                        callback: function() {}
                    }) : (i.getElementById("texturl").value = "https://www.youtube.com/" + ("1" == c ? e.HaGIk : e.uFDPA) + u, l.getElementById(e.VITKd).click(), a.log(e.bzPin))
                }],
                ["tiktok", function() {
                    var d = {
                        RjuOL: function(n, t) {
                            return e.UMrDE(n, t)
                        },
                        xOCeS: e.Chyub,
                        gcKfA: e.bmenz,
                        Weetl: e.VdUda,
                        siFAO: function(n, t, r) {
                            return e.mChYd(n, t, r)
                        },
                        DDLvn: e.oakID,
                        Rwqmx: e.tJfwW,
                        SuLZz: e.MECfh,
                        hmjfs: "data-e2e",
                        BNsag: e.rWHgK,
                        urlZJ: function(n, t) {
                            return e.VAKKP(n, t)
                        },
                        HhKhr: e.zceiE,
                        Vpiwp: "e13wiwn60"
                    };
                    if ("ygDAp" !== e.JxFYc) {
                        if (h.domain.includes(e.ZGfzd)) throw e.JQwvr(N, e.CUuuV), ".";
                        var m = [...p.getElementsByTagName(e.vsRmy)].filter(g).filter((e => !m(e)))[0],
                            w = e.ooAzz(y, m, e.muWnb).filter((e => !m(e))).filter(J).filter((e => "video-title" == e.id)).map(R).map(j).map((e => ({
                                id: m(w(K(e))[0].href),
                                e: e
                            })));
                        return w
                    }
                    e.OlYdI(addEventListener, "load", (function() {
                        var h = {
                            lVRnu: function(n, t) {
                                return e.siQWe(n, t)
                            },
                            kMJZC: function(n) {
                                return e.YgPBL(n)
                            },
                            NvbhJ: function(n, t) {
                                return e.SUmBg(n, t)
                            },
                            lsTte: e.MFoDE,
                            tfSsJ: e.VbcAt,
                            zgZzl: "Added playlist buttons",
                            AvCsS: function(n, t, r) {
                                return e.uSsbS(n, t, r)
                            }
                        };
                        if (e.AReqT(e.vJUCQ, e.taIKc)) {
                            var m = new v(d.RjuOL(y, z)).on(d.xOCeS, (function() {
                                var e;
                                [Q, X, Z, m] = ne.pathname.split("/"), te((e => e.href)(((e = new re(oe.href)).host = "clipr.xyz", e)), ue)
                            })).appendTo(K.parentNode);
                            B === d.gcKfA ? m.element.querySelector(d.Weetl).innerText = Q : m.element.querySelector(X).innerText = Z
                        } else e.sDiNT(l, (function() {
                            if (!d.siFAO(abc_, d.DDLvn, "data-e2e")) throw d.Rwqmx;
                            ee.appendTo(document.querySelectorAll(".e1mecfx011")), te.appendTo(document.querySelectorAll(d.SuLZz))
                        }), {
                            callback: function() {}
                        }), e.EMwOI(l, (function() {
                            var e = {
                                wwxOZ: function(e, n, t) {
                                    return d.siFAO(e, n, t)
                                },
                                FBsmH: "browse-copy",
                                izsek: function(e, n, t) {
                                    return e(n, t)
                                },
                                MrnrW: d.hmjfs,
                                LlOcI: d.BNsag
                            };
                            if (d.urlZJ("jrROq", d.HhKhr)) t.element.querySelector(".ScCoreButtonLabel-sc-s7h2b7-0").innerText = r;
                            else {
                                if (!document.getElementsByClassName(d.Vpiwp)[0]) throw d.Rwqmx;

                                function m() {
                                    var n = {
                                        nTPbw: function(n, t, r) {
                                            return e.wwxOZ(n, t, r)
                                        }
                                    };
                                    try {
                                        return !!abc_(e.FBsmH, "data-e2e").parentNode && e.izsek(abc_, "browse-copy", e.MrnrW).parentNode
                                    } catch (t) {
                                        return "XJDHj" === e.LlOcI && (c(u) || (n.nTPbw(l, a, s), f))
                                    }
                                }
                                ee.appendTo(document.getElementsByClassName("e13wiwn60")[0]), te.appendTo(document.getElementsByClassName(d.Vpiwp)[0]), console.log("Posted Buttons");
                                var p = !1;
                                d.siFAO(setInterval, (() => {
                                    var e = {
                                        uRIMH: function(e) {
                                            return e()
                                        }
                                    };
                                    h.lVRnu(p, m()) && h.kMJZC(m) ? h.NvbhJ(h.lsTte, h.tfSsJ) ? (console.log(h.zgZzl), h.AvCsS(setTimeout, (() => {
                                        m().append(n.br.element), m().append(ee.element), e.uRIMH(m).append(te.element)
                                    }), 100)) : (r.log("TimeOut for", o), i = !0) : h.lVRnu(p, h.kMJZC(m)) && !m() && console.log("buttons are gone?!?!"), p = h.kMJZC(m)
                                }), 100)
                            }
                        }), {
                            callback: function() {}
                        })
                    }))
                }]
            ].filter((e => location.host.includes(e[0])))[0], a1 && a1[1] && a1[1](), console.log(a1), delete a1, __ex_ = re, location.href.includes(e.hEqcx) || location.href.includes(e.jqeLj)) {
            if ("imyKM" !== e.uYUtj) return new r((e => c(e, u))); {
                console.log(e.hEqcx);

                function L() {
                    var [n, t] = name.split(",");
                    txtUrl.value = "https://www.youtube.com/" + (e.JCLGf(t, "1") ? "shorts/" : e.uFDPA) + n, getListFormats()
                }

                function A() {
                    var n = videoTitle.innerText.split("\n"),
                        t = n.map((e => e.match(/[:\d]+/gi))).filter((e => !!e)).pop().pop(),
                        r = n[0].split(e.queVY)[1],
                        o = e.BBdWt(findhref2, videoTitle.parentNode)[0].href,
                        i = {
                            id: e.cuEJQ(setElement, location.href),
                            href: o,
                            title: r,
                            length: t
                        };
                    e.yozZo(opener, window).postMessage(i, "*"), console.log("Poasted")
                }
                return e.qXgoA(setInterval, (() => {
                    var n = {
                        VFZVd: function(n, t) {
                            return e.bQTon(n, t)
                        }
                    };
                    if (e.hITmQ("spzhc", e.mdNqC)) {
                        var t = {
                            sudpD: function(e, t) {
                                return n.VFZVd(e, t)
                            }
                        };
                        l.push(a), s.children.length && (g = v.children, y.forEach = [].forEach, z.forEach((e => {
                            t.sudpD(R, e)
                        })))
                    } else e.WubbA(document.getElementById(e.SalPR).innerText.length, 5) && location.reload()
                }), 2e4), console.log(e.qVWsv), void e.aalAO(l, (function(n = function() {}) {
                    e.jLQAr(L), l((function(e = function() {}) {
                        A()
                    }), {
                        callback: close
                    })
                }), {
                    callback: function() {}
                })
            }
        }
        if (location.href.includes(e.IbdYl))
            if ("gBKAs" !== e.xSIVo) e.GxFIz(r, (e => e.href)(((D = new o(i.href)).host = "clipr.xyz", D)), e.vJYJY);
            else {
                console.log(e.iMmle);
                let [Ge, Ne] = name.split(",");
                e.XFoic(l, (function(n = function() {}) {
                    if (e.OfYlq(e.Pnmte, "lFHbG")) {
                        var t = {
                            dbkfT: function(e) {
                                return e()
                            }
                        };
                        v != e.DcbZs(y) && e.DcbZs(z) ? (Q.log(e.VbNmk), e.LjFIR(X, (() => {
                            t.dbkfT(ue).append(le.br.element), ae().append(fe.element), t.dbkfT(de).append(he.element)
                        }), 100)) : e.hmNKy(V, e.YgPBL(K)) && !e.jYtIM(B) && ue.log(e.KrgYg), Y = e.rRhjU(H)
                    } else {
                        document.getElementById(e.EjZmU).value = "https://www.youtube.com/" + (e.DYzTO(Ne, "1") ? e.HaGIk : e.uFDPA) + Ge, document.getElementById(e.fxUcR).click(), console.log(Ge, Ne)
                    }
                }), {
                    callback: function() {}
                }), e.rdPhh(l, (function(n = function() {}) {
                    if (console.log(result.children.length), !result.children.length) throw document.getElementById("btn-submit").click(), e.QbDTt
                }), {
                    int: 1e3,
                    callback: function() {}
                }), e.kXgeZ(l, (function() {
                    document.getElementById("btn-download").click()
                }), {
                    callback: function() {}
                }), e.XFoic(l, (function() {
                    var n = $(".media-heading")[0].innerText,
                        t = downloadbtn.href,
                        r = {
                            id: Ge,
                            href: t,
                            title: n,
                            length: {}
                        };
                    console.log("Posted"), e.seBBc(opener, window).postMessage(r, "*")
                }), {
                    callback: close
                })
            } else if (location.href.includes(e.AUxsK)) {
            async function ie(n) {
                for (; !document.querySelector(n);) await e.JQwvr(v, 0);
                return !0
            }(async function() {
                let [t, r] = name.split(",");
                if (!t.length || !r.length) return console.warn(e.PFXMM);
                var o = "https://www.youtube.com/" + (e.UAMup(r, "1") ? e.HaGIk : "watch?v=") + t;
                await e.FwVAQ(ie, e.WfvAA), console.log("Input Loaded"), document.querySelector("#txt-url").value = o, await ie(e.ijCny), console.log(e.zFNAj), await e.XoGoM(v, 100), document.querySelector(e.ijCny).click(), await e.TqjkH(ie, "#video_title"), console.log(e.wKncV);
                var s = document.querySelector(e.FZDit).innerText,
                    f = [0];
                return [...document.querySelector(e.vhEfV).querySelector(e.mPyLM).querySelectorAll("tr")].forEach((t => {
                    if (e.VpJse(e.QTmsV, e.QTmsV)) {
                        var r = t.innerText.match(/(?<res>\d+)(p|P)/i) || {};
                        if (r.groups)
                            if (e.NhXbe("mLJxd", e.BuUkV)) r = e.MWiYN(Number, r.groups.res), e.hlQDx(f[0], r) && (f[0] = r, f[1] = e.wPKfL(findhref2, t)[0].href, f[2] = t);
                            else {
                                const e = i.createElement("a");
                                e.href = c, e.download = u, l.body.appendChild(e), e.click(), a.body.removeChild(e)
                            }
                    } else n(2, !1, !1)
                })), {
                    id: t,
                    title: s,
                    href: f[1],
                    mp4: !0,
                    res: f[0]
                }
            })().then((function(n) {
                e.vYOWC(opener, window).postMessage(n, "*"), location.href = n.href
            }), console.warn)
        } else if (location.href.includes("sss.instasaverpro.com"))
            if (e.WboxK(e.gKiAc, e.gKiAc))(async function() {
                var n = {
                    GigeC: e.mTiks,
                    KKlAu: function(n, t) {
                        return e.ueWXc(n, t)
                    },
                    JTOew: e.RHdgx,
                    buMVC: function(e, n, t) {
                        return e(n, t)
                    },
                    yBuQF: e.Zxyow,
                    jSqnw: e.sXksi,
                    FgsoI: "mInAf",
                    Ihixd: "PUSIM",
                    HlQBP: function(n, t) {
                        return e.lBplt(n, t)
                    },
                    HuwlS: e.jNJEw,
                    XzMdm: function(n, t) {
                        return e.XREym(n, t)
                    }
                };
                for (await e.KfOBT((async function(e) {
                        var o = {
                            SHyUR: n.jSqnw
                        };
                        if (n.FgsoI !== n.Ihixd) {
                            for (; !document.querySelector(e);) n.HlQBP(n.HuwlS, "tCogC") ? await n.XzMdm(v, 0) : h && (N.log(n.GigeC, {
                                a: O,
                                b: V,
                                c: K,
                                d: B
                            }), F.close(), n.KKlAu(Y, H), Q(X, Z.title + n.JTOew), n.buMVC(ee, n.yBuQF, null));
                            return !0
                        }
                        t.click(), r.log(o.SHyUR)
                    }), e.kQtBO); !document.querySelector(e.kQtBO).href.length;) await e.UMrDE(v, 0);
                console.log(e.rTvim);
                var o = document.querySelector(e.VGOQh).innerText,
                    i = {
                        href: document.querySelector(e.kQtBO).href,
                        title: o
                    };
                e.HmWtE(opener, window).postMessage(i, "*")
            })().then(close, console.warn);
            else {
                var ce = {
                    YXpAz: function(n) {
                        return e.jLQAr(n)
                    }
                };
                l.log(e.VbNmk), e.mNDYK(a, (() => {
                    ce.YXpAz(g).append(v.br.element), y().append(z.element), J().append(R.element)
                }), 100)
            } else if (location.href.includes("en3.onlinevideoconverter.pro")) {
            let [Oe, Ve] = name.split(",");
            if (!Oe.length || !Ve.length) return console.Warn(e.lptXv);
            var ue = "https://www.youtube.com/" + (e.ZxYPk(Ve, "1") ? e.HaGIk : e.uFDPA) + Oe;
            let Ke = function() {};
            e.aalAO(l, (function(t = function() {}) {
                e.hITmQ(e.RoAyd, e.qFkJZ) ? n.classList.remove("collapse-frame") : (document.getElementById(e.UuPAp).value = "https://www.youtube.com/" + (e.ajHAn(Ve, "1") ? "shorts/" : e.uFDPA) + Oe, document.getElementById(e.VITKd).click(), console.log(e.bzPin))
            }), {
                callback: Ke
            }), e.YaKtO(l, (function() {
                if (e.fSUzL(stepProcess.style.display, e.hJtOD)) throw document.getElementById(e.VITKd).click(), "this";
                console.log(e.YhzbJ)
            }), {
                callback: Ke
            }), l((function() {
                var n = {
                    zyeHP: "was clicked",
                    UrwNz: function(e, n) {
                        return e == n
                    },
                    WUbOZ: "was created"
                };
                if (e.bgchW(e.RMdZs, e.IZxVd)) {
                    var t = {
                        obcVs: n.zyeHP,
                        pkcjh: function(e, t) {
                            return n.UrwNz(e, t)
                        }
                    };
                    let e = s.call(f, d, h);
                    return e._click = e.click, e.click = function() {
                        if (e.log(e, t.obcVs, e.tagName), t.pkcjh("A", e.tagName)) {
                            G.log("Caught", e);
                            let n = e.download,
                                t = e.href;
                            N = {
                                id: new e(V.href).searchParams.get("v"),
                                href: t,
                                title: n
                            }
                        } else e._click.apply(e)
                    }, z.log(e, n.WUbOZ, e.tagName), e
                }
                for (var r = e.EUSLG.split("|"), o = 0;;) {
                    switch (r[o++]) {
                        case "0":
                            e.HmWtE(opener, window).postMessage(u, "*");
                            continue;
                        case "1":
                            if (e.fZFjJ(document.getElementById(e.RTuju).children.length, 0)) throw "";
                            continue;
                        case "2":
                            var {
                                title: i,
                                href: c
                            } = $(e.LaYdI) ? e.jWRHN($, e.LaYdI)[0] ? e.cwluY($, "#download-720-MP4")[0] : $(e.LaYdI) : e.rjzfD($, e.LaYdI);
                            continue;
                        case "3":
                            console.log(e.kbJNP);
                            continue;
                        case "4":
                            var u = {
                                id: Oe,
                                href: c,
                                title: i,
                                length: {}
                            };
                            continue;
                        case "5":
                            console.log("loaded");
                            continue
                    }
                    break
                }
            }), {
                callback: close
            })
        } else if (location.href.includes(e.Tdcnt)) {
            var [le, ae] = name.split(",");

            function se() {
                var n = {
                    VSEcJ: function(n, t) {
                        return e.ZwJSm(n, t)
                    },
                    OGoMv: e.GaRjZ,
                    iJRTh: e.EBywt
                };
                if (e.lEElP != e.lEElP) return n.VSEcJ(i, n.OGoMv) ? c(n.OGoMv).click ? u(n.OGoMv) : l.querySelector(n.iJRTh) : a.querySelector(n.iJRTh); {
                    console.log(e.hVujW);
                    let n = {
                            title: document.getElementsByClassName(e.JuDMC)[0].innerText,
                            links: findhref2(document.getElementsByClassName("tik-video")[0]).map((e => e.href)),
                            mp4: e.UAMup(ae, 1),
                            info: e.rjzfD(setElement2, le)
                        },
                        t = e.hjCTs;
                    onmessage = function(r) {
                        if (e.NZGRj(r.origin, t))
                            if (e.pSjae(e.erLOn, e.mWfrx))(!s[r] || d[h].closed) && (J[R] = null, j(n), U.log(G, "isclosed"));
                            else {
                                var {
                                    data: {
                                        s: o,
                                        url: i,
                                        title: c
                                    }
                                } = r;
                                console.log(e.QfrDw, {
                                    s: o,
                                    url: i,
                                    title: c
                                }, r), o ? e.PXlvf(setTimeout, close, 100) : e.FnrTb(J, i, c, null, close)
                            } else console.log("Unhandled Post", r)
                    }, e.Wgqka(opener, window).postMessage(n, "*")
                }
            }
            addEventListener("load", (function() {
                var n = {
                    qJKeL: "video/mp4",
                    elyem: e.RHdgx
                };
                e.RbSCC(l, (function() {
                    if (e.qlctO == e.qlctO) s_input.value = le, ksearchvideo(), setTimeout(ksearchvideo, 1e3);
                    else {
                        var t = new l(a, {
                                type: n.qJKeL
                            }),
                            r = s.createObjectURL(t),
                            o = f.createElement("a");
                        o.style.display = "none", o.href = r, o.download = d + n.elyem, h.body.appendChild(o), o.click(), m.body.removeChild(o), p.revokeObjectURL(r)
                    }
                }), {
                    callback() {}
                })
            })), l((function() {
                document.getElementsByClassName("clearfix")[0].innerText, e.jLQAr(se)
            }), {
                callback() {}
            })
        } else document.domain.includes(e.ZGfzd) ? (console.log(e.EutQA), e.jOIav(addEventListener, e.zMgJj, (function({
            isTrusted: n,
            ctrlKey: t,
            shiftKey: r,
            code: o,
            target: i,
            target: {
                tagName: c
            }
        }) {
            var u = {
                aBAyF: function(n, t) {
                    return e.dSQLf(n, t)
                },
                jaeOK: e.prsQs,
                ODBqi: function(n, t) {
                    return e.VJLkF(n, t)
                }
            };
            if (![e.LUJgj, e.WCjgf].includes(c) && !t && !r && n && e.eMBbA(o, e.bsXwh))
                if ("EnBTH" !== e.ouvTb) {
                    f.log(d), h.append(new m("br").element);
                    var l = new p(e.gSgkp).set(e.MPIoU, e.lByUC).on(e.Chyub, (function(e) {
                        u.aBAyF(l, u.jaeOK);
                        var {
                            id: n,
                            href: t,
                            isShort: r
                        } = u.ODBqi(W, e.target.parentElement.parentElement).map((n => ({
                            href: n.href,
                            short: n.href.includes("/short"),
                            id: e(n.href)
                        }))).filter((e => e.id))[0];
                        G(n, !1, !0, !1, !1, r ? new N(t) : null)
                    }));
                    R.append(l.element)
                } else(e.CGzpn(abc_, "Close player page") || e.OdCjp(abc_, e.ainFu)[1]).click()
        }))) : document.domain.includes(e.MfTtY) && location.href.includes(e.tNdhC) && (e.AXmVU("BVQMv", "LbQPN") ? n = !1 : console.warn(e.qNYFH));
        const fe = window.trustedTypes && trustedTypes.createPolicy("trustedHTMLPolicy", {
                createHTML: e => e,
                createScriptURL: e => e
            }),
            de = "\n    /* Default iframe styles */\n    #cardApiIframe {\n        width: 100%;\n        height: 100%;\n        transition: all 2.5s ease-in-out;\n    }\n\n    /* Collapse animation when the class is toggled */\n    .collapse-frame {\n        width: 0;\n        height: 0;\n        margin-left: auto;\n        margin-right: auto;\n        transition: all 2.5s ease-in-out;\n    }\n",
            he = document.createElement(e.tWOti);

        function me(n) {
            e.FQeRx;
            const t = ve.element;
            n ? t.classList.add(e.FQeRx) : t.classList.remove(e.FQeRx)
        }
        he.type = "text/css", he.appendChild(document.createTextNode(fe ? fe.createHTML(de) : de));
        var pe = "https://www.youtube.com/watch?v=" + e.SIiTW(setElement, location.href) + "&adUrl=https://www.youtube.com/channel/UCOA8lE9-0XnEIdHqjfQUz1A?sub_confirm=1",
            ge = fe ? fe.createScriptURL(e.iiyRf("https://loader.to/api/card2/?url=", pe)) : e.iiyRf(e.Iqbaw, pe);
        const ve = new _element(e.fprnN, {
                id: e.UGHKU,
                scrolling: "no",
                width: e.lKEpf,
                height: "100%",
                allowtransparency: e.lbDVr,
                style: e.SemSf,
                src: ge
            }),
            ye = new _element(e.yxpCf, {
                src: fe ? fe.createScriptURL(e.YIlqZ) : e.YIlqZ
            });
        ye.element.addEventListener(e.ALDWX, (() => {
            if (e.CMxvu(typeof iFrameResize, e.EJFUb)) {
                if (!e.BbRsH("UXNxk", "YirTB")) return !n.closed;
                iFrameResize({
                    log: !1
                }, "#cardApiIframe")
            } else console.error(e.eITFR)
        }));
        const we = new _element("div").append(ve, ye),
            be = document.querySelector(e.MqsIT);
        var ke = e.vmCAb(setElement, location.href);
        ve.element.addEventListener(e.ALDWX, (() => {
            console.log("Iframe is fully loaded"), e.CGzpn(me, !1)
        })), e.GxvqX(me, !0);
        var Se = 0,
            Te = 1,
            Ee = 0;
        e.LmGKF(setInterval, (n => {
            var t = document.querySelector("video"),
                f = document.querySelector(e.MqsIT);
            pe = "https://www.youtube.com/watch?v=" + e.XDLiT(setElement, location.href) + "&adUrl=https://www.youtube.com/channel/UCOA8lE9-0XnEIdHqjfQUz1A?sub_confirm=1", ge = fe ? fe.createScriptURL(e.rvtlC(e.Iqbaw, pe)) : e.kCJrP(e.Iqbaw, pe), f && (e.FWPQy(e.dsgea, "OQLhG") ? (!f.querySelector("#cardApiIframe") && (me(!0), f.parentNode.prepend(he), f.prepend(we.element), console.log(e.ujsuz)), e.LKrJC(e.isXaU(setElement, location.href), ke) && (e.isXaU(me, !0), ve.set(e.xEysp, ge), console.log(e.xzTtd), ke = e.VlakV(setElement, location.href))) : this[r] = o[i]);
            var m = e.YmyFZ(query, e.fCpWi);
            m && !e.OdCjp(a, m) && m.click();
            var p = document.getElementsByClassName(e.IFnYX)[0];
            try {
                if (p && !K) e.YIeKb("EoIHE", e.oGDrZ) ? (console.log(e.AKGgV), K = 1, t.muted = 1) : (o(i), c(u));
                else if (!p && K)
                    if (e.LxfbG(e.DAbvM, e.DAbvM)) {
                        console.log(e.aWWYs);
                        try {
                            t.muted = 0
                        } catch (n) {
                            console.warn(e.QnKHd)
                        }
                        K = 0
                    } else u.error(e.VDbxs, l), (a || s || n).postMessage({
                        url: d,
                        title: h,
                        s: !1
                    }, "*")
            } catch {}
            var g = [...document.querySelectorAll(e.GJSYp), ...document.querySelectorAll(e.RgAig)].map((e => [...e.querySelectorAll("button")].filter((e => e.className.includes("skip")))[0])).filter((e => !!e))[0];
            g ? ((!Ee || e.WWISr(t.playbackRate, 16)) && (Ee = 1, t.playbackRate = 16, console.log(e.ofUIp)), g.click(), Te = 0) : !Te && t ? (Ee = 0, Te = 1, t.playbackRate = Se, console.log("Fixed playBack")) : t && (Ee = 0, Se = t.playbackRate);
            var v = document.getElementsByClassName("ytp-ad-overlay-close-button")[2];
            if (v)
                if (e.pONBC != e.pONBC) {
                    var y = {
                        XSLwJ: e.ygLSB
                    };
                    r.querySelector("#yDmH0d > c-wiz > div > div > div:nth-child(2) > div.LLEp8b > div > div.rTq3hb > div:nth-child(1) > div > div.ofmULb > div:nth-child(2) > div > button").click(), e.Iwyeu(o, (() => {
                        c.querySelector(y.XSLwJ).click()
                    }), 1e3)
                } else v.click(), console.log("Closed ad card");
            var w = [...document.querySelectorAll(e.KseYa)].filter((e => e.innerText.includes("Ads")))[0];
            w && (w.click(), location.href.includes(e.pqVUA) && location.reload())
        }), 10)
    }();