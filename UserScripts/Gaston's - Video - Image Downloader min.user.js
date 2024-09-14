// ==UserScript==
// @name Gaston's - Video/Image Downloader
// @namespace http://tampermonkey.net/
// @version 6.0
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
    return K = function(n, o) {
        var r = t[n -= 402];
        if (void 0 === K.OKebHQ) {
            K.MwIbEq = function(e, n) {
                var t, o, r = [],
                    i = 0,
                    c = "";
                for (e = function(e) {
                        for (var n, t, o = "", r = "", i = 0, c = 0; t = e.charAt(c++); ~t && (n = i % 4 ? 64 * n + t : t, i++ % 4) ? o += String.fromCharCode(255 & n >> (-2 * i & 6)) : 0) t = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(t);
                        for (var u = 0, l = o.length; u < l; u++) r += "%" + ("00" + o.charCodeAt(u).toString(16)).slice(-2);
                        return decodeURIComponent(r)
                    }(e), o = 0; o < 256; o++) r[o] = o;
                for (o = 0; o < 256; o++) i = (i + r[o] + n.charCodeAt(o % n.length)) % 256, t = r[o], r[o] = r[i], r[i] = t;
                o = 0, i = 0;
                for (var u = 0; u < e.length; u++) i = (i + r[o = (o + 1) % 256]) % 256, t = r[o], r[o] = r[i], r[i] = t, c += String.fromCharCode(e.charCodeAt(u) ^ r[(r[o] + r[i]) % 256]);
                return c
            }, e = arguments, K.OKebHQ = !0
        }
        var i = n + t[0],
            c = e[i];
        return c ? r = c : (void 0 === K.cSPDcs && (K.cSPDcs = !0), r = K.MwIbEq(r, o), e[i] = r), r
    }, K(e, n)
}(function(e, n) {
    for (var t = 406, o = 419, r = 403, i = "iXAz", c = 417, u = "H@QT", l = "cu@T", a = "cu@T", s = "ItwT", f = V, d = K, m = K, p = K, g = h();;) try {
        if (949840 === parseInt(d(t, "9IM0")) / 1 * (parseInt(d(413, "o2ZJ")) / 2) + -parseInt(m(o, "iJgM")) / 3 + parseInt(d(r, i)) / 4 + -parseInt(p(c, u)) / 5 * (parseInt(m(414, l)) / 6) + parseInt(f(404)) / 7 * (parseInt(m(407, a)) / 8) + -parseInt(d(418, s)) / 9 + -parseInt(d(412, "qP@U")) / 10 * (-parseInt(f(416)) / 11)) break;
        g.push(g.shift())
    } catch (e) {
        g.push(g.shift())
    }
})(),
function() {
    var e = {
        bATYt: function(e, n) {
            return e || n
        },
        Rrlno: "darkgrey",
        IAnAg: "1rem",
        jwhTn: "#008f68",
        RHwbM: function(e, n) {
            return e || n
        },
        lvtUy: "ewLYR",
        tlvtV: "YWLIl",
        FlYJw: function(e, n) {
            return e === n
        },
        ysXaT: function(e, n) {
            return e !== n
        },
        Orhnq: function(e, n) {
            return e !== n
        },
        aBxRk: function(e, n) {
            return e !== n
        },
        CjIFs: function(e, n) {
            return e !== n
        },
        VUZOP: function(e, n) {
            return e === n
        },
        bIqST: "jGXyp"
    };
    Object.assign(this || arguments[0], {
        CustomLog: class {
            constructor(n) {
                this.title = {
                    body: e.bATYt(n, "---"),
                    color: e.Rrlno,
                    size: e.IAnAg
                }, this.body = {
                    color: e.jwhTn,
                    size: e.IAnAg
                }
            }
            setTitleBody(t) {
                if (e.lvtUy !== e.tlvtV) return this.title.body = t, this;
                e.RHwbM(r, x).postMessage(Z, "*"), F.href = n.href
            }
            setTitleStyle({
                color: n,
                size: t
            }) {
                if (!e.FlYJw("bbwmd", "lUKng")) return e.ysXaT(n, void 0) && (this.title.color = n), e.Orhnq(t, void 0) && (this.title.size = t), this;
                n.value = t
            }
            setBodyStyle({
                color: n,
                size: t
            }) {
                return e.aBxRk(n, void 0) && (this.body.color = n), e.CjIFs(t, void 0) && (this.body.size = t), this
            }
            log(n = "") {
                e.VUZOP(e.bIqST, "meBPQ") ? n = S[0] : console.log("%c" + this.title.body + " | %c" + n, "color: " + this.title.color + "; font-weight: bold; font-size: " + this.title.size + ";", "color: " + this.body.color + "; font-weight: bold; font-size: " + this.body.size + "; text-shadow: 0 0 5px rgba(0,0,0,0.2);")
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
        xoFNH: function(e, n) {
            return e(n)
        },
        YBmAS: function(e, n, t) {
            return e(n, t)
        }
    };
    return t.xoFNH(GM_getValue, e) || (t.YBmAS(GM_setValue, e, n), n)
}

function setV(e, n) {
    GM_setValue(e, n)
}
async function getFinalUrlFromServer(e) {
    var n = {
        eNeMG: "btn-submit",
        roqJl: "no there",
        sLgDU: function(e, n) {
            return e(n)
        },
        uuqZU: function(e, n, t) {
            return e(n, t)
        },
        Sqxtp: "POST",
        hBykm: function(e, n) {
            return e === n
        },
        deDfn: "JBrrs",
        ZtnlW: "Failed to fetch final URL",
        MJrxF: "BXUwX"
    };
    try {
        const t = await n.uuqZU(fetch, "http://localhost:3000/get-final-url", {
            method: n.Sqxtp,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                url: e
            })
        });
        if (!t.ok) throw n.hBykm(n.deDfn, "zqSwK") ? (n.getElementById(n.eNeMG).click(), n.roqJl) : new Error(n.ZtnlW);
        return (await t.json()).finalUrl
    } catch (e) {
        return n.hBykm(n.MJrxF, n.MJrxF) ? (console.error("Error:", e), null) : n.sLgDU(k, this.toFixed(S))
    }
}

function getCurrentVideoID() {
    var e, n = {
        UtzhX: "VOD",
        OgolW: "ytp-video-menu-item ytp-button",
        THauW: "ytp-playlist-menu-button ytp-button",
        NFnAa: "AERem",
        raJFP: "xkOrL",
        vLXBh: "Opening",
        LnnnK: "Closiung",
        bFGlv: "Not Found!"
    };
    return [...document.getElementsByClassName(n.OgolW)].forEach(((n, t) => {
        n.innerText.startsWith(CurrentPlayingSymbol) && (e = new URL(n.href).searchParams.get("v"))
    })), e || !document.getElementsByClassName(n.THauW)[0] ? e ? (console.log(n.LnnnK), document.getElementsByClassName(n.THauW)[0].click(), e) : console.warn(n.bFGlv) : n.NFnAa !== n.raJFP ? (console.log(n.vLXBh), document.getElementsByClassName("ytp-playlist-menu-button ytp-button")[0].click(), getCurrentVideoID()) : void X((e => (e.host = "clipr.xyz", e.pathname = e.pathname.replace("/" + F + "/clip", ""), e.search = "", e))(new x(Z.href)).href, n.UtzhX)
}

function sleep(e) {
    return new Promise((n => setTimeout(n, e)))
}

function h() {
    var e = ["mZaYuurJA0vp", "WP44uNZdGCoMW5VdOrOD", "WPldHCoPWQ9suSoZW6u", "WQFcUqK+W4BcRx09xG", "WQD5W5HiqGBdLCo+W6/cTq", "W4OFW7hdQSogW7nCpqeEnG", "mtuYmtGWmZHkBenvzei", "WPTmW5dcL8kuWOCQBmk4WRZcKW", "WPStW6BdV2vEW4D/aSoDdmkpjmki", "W4/cQ1dcO8oeWQpdPmoYs8krwIiM", "mtbiwerIzuq", "WPigAILFnCoeyGvG", "WOqVhCoWWRtcSL5UxSkKW6xcR8kX", "mtaWmufvyxLSyq", "mJe5mZu2nff6DvP1uq", "Amofy8kfwexdPuCqWQm", "WQXWW5TimWFdKCo7W6xcHXK", "mZqXmtK2ouvPsKzmsa", "mtaWmZC3ndvhr1jsyNG"];
    return (h = function() {
        return e
    })()
}
_getV = getV, _setV = setV, Number.prototype.decimal = function(e) {
    return Number(this.toFixed(e))
}, getSoundCloudUrl = () => {
    var e = {
        gGIQu: function(e, n) {
            return e(n)
        },
        qzrvF: "#app > div.playControls.g-z-index-control-bar.m-visible > section > div > div.playControls__elements > div.playControls__soundBadge.sc-ml-3x > div"
    };
    try {
        return e.gGIQu(findhref2, document.querySelector(e.qzrvF))[0].href
    } catch {
        return
    }
}, async function() {
    var e = {
        CArcx: "INPUT",
        CINzX: "TEXTAREA",
        sjunl: function(e, n) {
            return e == n
        },
        oDyoo: function(e, n) {
            return e(n)
        },
        zaNAm: "keypress",
        MDqkM: function(e, n) {
            return e === n
        },
        UxOhI: "WzWFk",
        pGMPS: "eIYls",
        qOEOy: "Rrmag",
        lWAAQ: function(e, n) {
            return e(n)
        },
        HvngG: function(e, n) {
            return e != n
        },
        XzEwx: function(e, n, t) {
            return e(n, t)
        },
        glAmq: function(e) {
            return e()
        },
        Fxokk: "innerText",
        FSbPU: "MP3",
        tDZwm: "fixed",
        NoMZI: "50%",
        lJxxi: "80%",
        hNeNN: "embedMP3",
        kxtqj: ".ytp-right-controls",
        VhHaF: "Appended",
        PAKft: "Got",
        sskIN: function(e, n) {
            return e + n
        },
        dYBSb: ".mp4",
        oXLXG: function(e, n, t) {
            return e(n, t)
        },
        YljHM: "Added Button",
        QmJtZ: function(e, n, t, o) {
            return e(n, t, o)
        },
        YCCTo: "https://fastdl.app/en",
        NnAQE: "instaURL",
        lqyKG: "GetAudio",
        QooWa: "Download MP3",
        HUNdg: "click",
        fZCFo: function(e, n) {
            return e !== n
        },
        hKgwN: "ojHYp",
        kTjfS: "avNEK",
        EwjEa: function(e, n, t) {
            return e(n, t)
        },
        wyzzi: ".playbackSoundBadge__actions",
        uwbZe: "/embed/",
        iLivQ: "jiYyk",
        tRVVl: "Attaching to embeder >:]"
    };
    async function n(t, o = 3e4) {
        if (!e.MDqkM(e.UxOhI, e.pGMPS)) {
            var i;
            for (sleep(o).then((e => i = !0)); !document.querySelector(t);)
                if (e.MDqkM("PnWJZ", e.qOEOy)) n.warn("No id Found");
                else if (await e.lWAAQ(sleep, 0), i) break;
            return document.querySelector(t)
        }
        var c = {
            ImzIW: e.CArcx,
            pFZJH: e.CINzX,
            vPCQC: function(n, t) {
                return e.sjunl(n, t)
            },
            kpGSq: "KeyI",
            lMdVZ: function(n, t) {
                return e.oDyoo(n, t)
            }
        };
        i.log("Added MiniPlayer Toggle with I"), r(e.zaNAm, (function({
            isTrusted: e,
            ctrlKey: n,
            shiftKey: t,
            code: o,
            target: r,
            target: {
                tagName: i
            }
        }) {
            ![c.ImzIW, c.pFZJH].includes(i) && !n && !t && e && c.vPCQC(o, c.kpGSq) && (E("Close player page") || c.lMdVZ(v, "Open player page")[1]).click()
        }))
    }
    if (location.href.includes(e.uwbZe)) {
        if (!e.fZCFo(e.iLivQ, "jiYyk")) return console.log(e.tRVVl), n(e.kxtqj).then((async n => {
            var t = {
                prJkJ: function(n) {
                    return e.glAmq(n)
                },
                BjkDh: function(e, n, t, o, r, i) {
                    return e(n, t, o, r, i)
                }
            };
            let o = new _e("button", {
                id: "embedMP3"
            }).appendTo(n).set(e.Fxokk, e.FSbPU).on("click", (function() {
                let e = t.prJkJ(getCurrentVideoID) || setElement(location.href);
                t.BjkDh(downloadT, e, !1, !0, !1, !0)
            })).style({
                position: e.tDZwm,
                right: e.NoMZI,
                top: e.lJxxi
            });
            for (; !document.getElementById(e.hNeNN) && document.querySelector(e.kxtqj);) console.log(e.VhHaF), o.appendTo(".ytp-right-controls")
        }));
        e.HvngG(x, Z.innerText) && (B = T.innerText, e.XzEwx(i, "dlbutton", q))
    }
    return document.querySelector(e.kxtqj), await e.oXLXG(n, ".playbackSoundBadge__actions", 5e3).then((async t => {
        var o = {
            AqxYP: function(n, t, o, r) {
                return e.QmJtZ(n, t, o, r)
            },
            lJKUO: e.YCCTo,
            ogviy: function(n, t, o) {
                return e.XzEwx(n, t, o)
            },
            VxDOq: e.NnAQE
        };
        let r = new _e("button", {
            id: e.lqyKG
        }).appendTo(t).set(e.Fxokk, e.QooWa).on(e.HUNdg, (function() {
            e.glAmq(downloadSC)
        }), (e => e));
        for (;;) e.fZCFo(e.hKgwN, e.kTjfS) ? (!document.getElementById(e.lqyKG) && await e.EwjEa(n, ".playbackSoundBadge__actions", 5e3) && await e.XzEwx(n, e.wyzzi, 5e3).then((n => {
            var t = {
                UukAO: e.PAKft,
                wQOqu: function(n, t) {
                    return e.sskIN(n, t)
                },
                XAHNm: e.dYBSb,
                mzOzO: function(n, t, o) {
                    return e.oXLXG(n, t, o)
                },
                lDfEu: "instaURL"
            };
            if (e.MDqkM("rTYsT", "rTYsT")) r.appendTo(n), console.log(e.YljHM);
            else {
                let e = o.AqxYP(F, o.lJKUO, e.href, "width=400,height=500");
                var i = o.ogviy(i, o.VxDOq, (function(n, o, r, c) {
                    r && (o.log(t.UukAO, {
                        a: n,
                        b: o,
                        c: r,
                        d: c
                    }), e.close(), I(i), p(r, t.wQOqu(f.title, t.XAHNm)), t.mzOzO(M, t.lDfEu, null))
                }))
            }
        })), await e.oDyoo(sleep, 0)) : n(2, !0)
    }))
}().then(console.log, console.warn), downloadSC = function() {
    for (var e = {
            hMZNq: "0|2|1|4|3",
            gBTpY: function(e, n, t) {
                return e(n, t)
            },
            whHLk: function(e) {
                return e()
            },
            lPlsS: function(e, n, t) {
                return e(n, t)
            },
            cgCBz: "SCinfo",
            dNXEQ: function(e, n) {
                return e(n)
            },
            Ugdem: "https://sclouddownloader.net/"
        }, n = e.hMZNq.split("|"), t = 0;;) {
        switch (n[t++]) {
            case "0":
                var o = {
                    yGqgC: function(n, t, o) {
                        return e.gBTpY(n, t, o)
                    }
                };
                continue;
            case "1":
                e.gBTpY(GM_setValue, "sc", e.whHLk(getSoundCloudUrl));
                continue;
            case "2":
                e.lPlsS(GM_setValue, e.cgCBz, null);
                continue;
            case "3":
                e.dNXEQ(open, e.Ugdem);
                continue;
            case "4":
                !set_ && (set_ = 1, e.gBTpY(GM_addValueChangeListener, e.cgCBz, (function(e, n, t, r) {
                    console.log({
                        a: e,
                        b: n,
                        c: t,
                        d: r
                    }), t && t.name && o.yGqgC(_downloadFileAsTitle, t.href, t.name)
                })));
                continue
        }
        break
    }
}, GM_setValue_ = GM_setValue, GM_getValue_ = GM_getValue, GM_info_ = GM_info;
var UnmutePath = "M3.15,3.85l4.17,4.17L6.16,9H3v6h3.16L12,19.93v-7.22l2.45,2.45c-0.15,0.07-0.3,0.13-0.45,0.18v1.04 c0.43-0.1,0.83-0.27,1.2-0.48l1.81,1.81c-0.88,0.62-1.9,1.04-3.01,1.2v1.01c1.39-0.17,2.66-0.71,3.73-1.49l2.42,2.42l0.71-0.71 l-17-17L3.15,3.85z M11,11.71v6.07L6.52,14H4v-4h2.52l1.5-1.27L11,11.71z M10.33,6.79L9.62,6.08L12,4.07v4.39l-1-1V6.22L10.33,6.79 z M14,8.66V7.62c2,0.46,3.5,2.24,3.5,4.38c0,0.58-0.13,1.13-0.33,1.64l-0.79-0.79c0.07-0.27,0.12-0.55,0.12-0.85 C16.5,10.42,15.44,9.1,14,8.66z M14,5.08V4.07c3.95,0.49,7,3.85,7,7.93c0,1.56-0.46,3.01-1.23,4.24l-0.73-0.73 C19.65,14.48,20,13.28,20,12C20,8.48,17.39,5.57,14,5.08z",
    mutePath = "M17.5,12c0,2.14-1.5,3.92-3.5,4.38v-1.04c1.44-0.43,2.5-1.76,2.5-3.34c0-1.58-1.06-2.9-2.5-3.34V7.62 C16,8.08,17.5,9.86,17.5,12z M12,4.07v15.86L6.16,15H3V9h3.16L12,4.07z M11,6.22L6.52,10H4v4h2.52L11,17.78V6.22z M21,12 c0,4.08-3.05,7.44-7,7.93v-1.01c3.39-0.49,6-3.4,6-6.92s-2.61-6.43-6-6.92V4.07C17.95,4.56,21,7.92,21,12z";

function downloadFile_(e, n) {
    const t = document.createElement("a");
    t.href = e, t.download = n, document.body.appendChild(t), t.click(), document.body.removeChild(t)
}

function V(e, n) {
    var t = h();
    return V = function(n, o) {
        var r = t[n -= 402];
        if (void 0 === V.SGeQbd) {
            V.kTUfzF = function(e) {
                for (var n, t, o = "", r = "", i = 0, c = 0; t = e.charAt(c++); ~t && (n = i % 4 ? 64 * n + t : t, i++ % 4) ? o += String.fromCharCode(255 & n >> (-2 * i & 6)) : 0) t = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(t);
                for (var u = 0, l = o.length; u < l; u++) r += "%" + ("00" + o.charCodeAt(u).toString(16)).slice(-2);
                return decodeURIComponent(r)
            }, e = arguments, V.SGeQbd = !0
        }
        var i = n + t[0],
            c = e[i];
        return c ? r = c : (r = V.kTUfzF(r), e[i] = r), r
    }, V(e, n)
}
async function downloadVideo(e, n) {
    var t = {
        oOoxj: function(e) {
            return e()
        },
        NbOXy: function(e, n) {
            return e(n)
        },
        KgISY: function(e, n) {
            return e === n
        },
        jntwT: "eKsYO",
        LUcvJ: "Failed to download video:"
    };
    try {
        if (t.KgISY("FGOKT", t.jntwT)) t.oOoxj(X), r(), t.NbOXy(x, Z);
        else {
            const o = await t.NbOXy(fetch, e);
            if (!o.ok) throw new Error("HTTP error! Status: " + o.status);
            const r = o.url,
                i = await o.blob(),
                c = window.URL.createObjectURL(i),
                u = document.createElement("a");
            u.href = c, u.download = n, document.body.appendChild(u), u.click(), document.body.removeChild(u), window.URL.revokeObjectURL(c), console.log("Video downloaded from: " + r)
        }
    } catch (e) {
        console.error(t.LUcvJ, e)
    }
}
_downloadFileAsTitle = async function(e, n, o, r) {
        var i = {
            fFyHd: "_blank",
            VygkA: function(e, n) {
                return e || n
            },
            rqGgh: "function",
            RHwjk: function(e) {
                return e()
            },
            WWOfr: "hCgue",
            HGFYU: "Error downloading file:",
            MDQUy: "none",
            EYECj: function(e, n) {
                return e(n)
            }
        };
        const c = document.createElement("a");
        return c.style.display = i.MDQUy, document.body.appendChild(c), i.EYECj(fetch, e).then((e => e.blob())).then((u => {
            if ("hCgue" === i.WWOfr) {
                const t = URL.createObjectURL(u);
                c.href = t, c.download = n, c.target = "_blank", c.click(), URL.revokeObjectURL(t), (o || opener || window).postMessage({
                    url: e,
                    title: n,
                    s: !0
                }, "*"), (typeof r).includes(i.rqGgh) && r()
            } else {
                const e = q.createObjectURL(d);
                H.href = e, w.download = t, C.target = i.fFyHd, b.click(), I.revokeObjectURL(e), (i.VygkA(p, f) || M).postMessage({
                    url: j,
                    title: Q,
                    s: !0
                }, "*"), (typeof g).includes(i.rqGgh) && i.RHwjk(J)
            }
        })).catch((t => {
            console.error(i.HGFYU, t), (i.VygkA(o, opener) || window).postMessage({
                url: e,
                title: n,
                s: !1
            }, "*")
        }))
    }, _downloadFile_ = downloadFile_, query = function(e, n) {
        var t = {
            OSxNh: function(e, n) {
                return e != n
            },
            xMgne: "undefined",
            iJNGW: function(e, n) {
                return e(n)
            }
        };
        try {
            let o = t.OSxNh(typeof $, t.xMgne) ? $ : document.querySelectorAll;
            return n ? [...document.querySelectorAll(e)].filter((e => !(null === el.offsetParent)))[0] : (e => Object.keys(e).length ? e : null)(o(e) ? t.iJNGW(o, e).length ? t.iJNGW(o, e)[0] : o(e) : null)
        } catch {}
    }, getElementByAttribute = function(e, n = "aria-label", t = document.body) {
        var o = {
                iOKIB: function(e, n) {
                    return e(n)
                },
                dhUtd: function(e, n) {
                    return e !== n
                },
                sxKfz: "GjOtq",
                vUSvf: function(e, n) {
                    return e(n)
                },
                vIaGS: function(e, n) {
                    return e == n
                }
            },
            r = [];
        return o.vUSvf((function t(i) {
            var c = {
                BkhdG: function(e, n) {
                    return o.iOKIB(e, n)
                }
            };
            i.getAttribute(n) == e ? r.push(i) : o.dhUtd("GjOtq", o.sxKfz) ? n = !1 : i.children.length && ((i = i.children).forEach = [].forEach, i.forEach((e => {
                c.BkhdG(t, e)
            })))
        }), t), o.vIaGS(r.length, 1) ? r[0] : r || !1
    }, get_aria_label = function(e, n = document.body) {
        var t = {
                qClDq: function(e, n) {
                    return e(n)
                },
                yojaT: function(e, n) {
                    return e == n
                }
            },
            o = [];
        return function n(r) {
            var i = {
                oAEHx: function(e, n) {
                    return t.qClDq(e, n)
                }
            };
            t.yojaT(r.getAttribute("aria-label"), e) ? o.push(r) : r.children.length && ((r = r.children).forEach = [].forEach, r.forEach((e => {
                i.oAEHx(n, e)
            })))
        }(n), o[0] || !1
    }, getClass = function(e) {
        return document.getElementsByClassName("ehlq8k34")[0]
    },
    function() {
        var e = {
            Bhcsj: function(e, n) {
                return e !== n
            },
            PwouF: "hzVuY",
            eEvNO: function(e, n, t) {
                return e(n, t)
            },
            PcGZs: "720",
            EWTee: function(e, n) {
                return e(n)
            },
            wfUVb: function(e, n) {
                return e === n
            },
            vQvdz: "sdbvy",
            qpHbi: function(e, n) {
                return e < n
            },
            jROds: "wjFWg",
            fCADQ: function(e, n) {
                return e == n
            },
            ckWHX: function(e, n) {
                return e != n
            },
            PTxKF: function(e, n) {
                return e < n
            },
            lGOhR: "Failed to download video:",
            VbXCo: "uwaMo",
            eJXyF: "length",
            TYhvR: function(e, n) {
                return e(n)
            },
            rTyNf: "Next",
            REiqu: function(e, n) {
                return e(n)
            },
            jCheq: "._afxw",
            FBFuw: "was created",
            PSfFK: "embedMP3",
            hnCrN: "innerText",
            ZsYoZ: "MP3",
            LTFQG: "fixed",
            kIDeO: ".ytp-right-controls",
            BDYDS: function(e, n, t, o, r, i) {
                return e(n, t, o, r, i)
            },
            VdyHm: "Attaching to embeder >:]",
            xmjBn: function(e, n) {
                return e(n)
            },
            ahFXP: function(e, n) {
                return e == n
            },
            KYQjv: "Caught",
            BpBvj: function(e, n) {
                return e || n
            },
            HnZzr: function(e, n) {
                return e === n
            },
            AJeph: "LVcMy",
            ZCmFl: "WvUpU",
            uAoFM: "#app > div.css-14dcx2q-DivBodyContainer.e1irlpdw0 > div:nth-child(4) > div > div.css-1qjw4dg-DivContentContainer.e1mecfx00 > div.css-1stfops-DivCommentContainer.ekjxngi0 > div > div.css-1xlna7p-DivProfileWrapper.ekjxngi4 > div.css-1u3jkat-DivDescriptionContentWrapper.e1mecfx011 > div.css-1nst91u-DivMainContent.e1mecfx01 > div.css-bs495z-DivWrapper.e1mzilcj0 > div > div.css-1d7krfw-DivOverflowContainer.e1mzilcj5 > h1",
            HHWQW: "Replying to ",
            CHRKg: "TXDpr",
            ZAZIZ: function(e, n) {
                return e === n
            },
            JxCPQ: "ZewkF",
            XolHY: "tBuCx",
            muEdw: "#app > div.css-14dcx2q-DivBodyContainer.e1irlpdw0 > div:nth-child(4) > div > div.css-1qjw4dg-DivContentContainer.e1mecfx00 > div.css-1stfops-DivCommentContainer.ekjxngi0 > div > div.css-1xlna7p-DivProfileWrapper.ekjxngi4 > div.css-1u3jkat-DivDescriptionContentWrapper.e1mecfx011 > div.css-1nst91u-DivMainContent.e1mecfx01 > div.css-bs495z-DivWrapper.e1mzilcj0",
            uAfBH: "browse-video-desc",
            rpQsC: "data-e2e",
            kFZVc: function(e, n, t) {
                return e(n, t)
            },
            amIMf: "#main-content-video_detail > div > div.css-12kupwv-DivContentContainer.ege8lhx2 > div.css-1senhbu-DivLeftContainer.ege8lhx3 > div.css-1sb4dwc-DivPlayerContainer.eqrezik4 > div.css-3lfoqn-DivDescriptionContentWrapper-StyledDetailContentWrapper.eqrezik15 > div.css-r4nwrj-DivVideoInfoContainer.eqrezik3 > div.css-bs495z-DivWrapper.e1mzilcj0 > div > h1",
            bVsGv: "#yDmH0d > c-wiz > div > div > div:nth-child(2) > div.LLEp8b > div > div.rTq3hb > div:nth-child(1) > div > div.ofmULb > div:nth-child(2) > div > button",
            hHiMW: function(e, n, t) {
                return e(n, t)
            },
            GiLDy: function(e, n) {
                return e(n)
            },
            VQKow: function(e, n, t) {
                return e(n, t)
            },
            eEGCv: function(e, ...n) {
                return e(...n)
            },
            Shrqg: function(e, n, t, o) {
                return e(n, t, o)
            },
            pHvYy: "function",
            hNpUW: function(e, n) {
                return e instanceof n
            },
            tJcjJ: function(e, n) {
                return e >= n
            },
            DISPr: function(e, n) {
                return e - n
            },
            kxSZV: function(e, n) {
                return e <= n
            },
            jZnUc: function(e, n) {
                return e + n
            },
            jskVK: function(e, n) {
                return e / n
            },
            vDjWB: "PFUiw",
            xOlck: function(e) {
                return e()
            },
            PhZiw: function(e, n, t) {
                return e(n, t)
            },
            iPPXf: function(e, n) {
                return e instanceof n
            },
            vJulb: function(e, n) {
                return e / n
            },
            jvWpv: function(e, n) {
                return e >= n
            },
            vkwMl: "PPAuT",
            CpSvC: function(e, n) {
                return e == n
            },
            mWwii: function(e, n) {
                return e(n)
            },
            rHnMf: "eZSEa",
            QgWYj: "KKqwF",
            OtaUM: "aMIBK",
            QXvpQ: "wnZvD",
            nMtkm: "._acaz",
            tYtFg: "._aaqy",
            mpqmG: "button",
            EnKJu: "MediaButton2",
            BRICD: "Get Videos",
            EklNt: "click",
            HIxdI: "video.x1lliihq",
            iePBa: "Go back",
            yLvbD: "._afxv",
            ifWPy: function(e, n) {
                return e(n)
            },
            MTAQN: function(e, n) {
                return e(n)
            },
            WfIRI: "was clicked",
            TAOPT: function(e, n) {
                return e == n
            },
            ofVgc: function(e) {
                return e()
            },
            IJZSk: function(e, n) {
                return e !== n
            },
            ohMfY: "ENpZr",
            kyfHS: "div.x78zum5.xdt5ytf.x1iyjqo2.xs83m0k.x2lwn1j.x1odjw0f.x1n2onr6.x9ek82g.x6ikm8r.xdj266r.x11i5rnm.x4ii5y1.x1mh8g0r.xexx8yu.x1pi30zi.x18d9i69.x1swvt13 > ul > div:nth-child(3) > div > div",
            KBIQt: ".xt0psk2.xvs91rp.xo1l8bm.x5n08af.x18hxmgj",
            AFNza: "video/mp4",
            HGanZ: "none",
            sMJQZ: ".mp4",
            ZWdJN: "Unmuted video",
            VdddD: "instaURL",
            kTREN: "blob:",
            yyYTi: "WCibp",
            cWWHU: "mXABw",
            JlcKm: function(e, n) {
                return e * n
            },
            TFSkt: "tUCJb",
            YgNNp: "Invalid video element or source.",
            PlFUO: "EkQef",
            rLfji: "pDoOR",
            vCQJk: function(e, n, t) {
                return e(n, t)
            },
            DMUsa: function(e, n, t) {
                return e(n, t)
            },
            PkClK: function(e, n) {
                return e + n
            },
            DWtvd: "reel",
            UEWUY: "https://fastdl.app/en",
            OtRGq: function(e, n, t) {
                return e(n, t)
            },
            pmsyf: function(e, n) {
                return e !== n
            },
            aJRfj: "iKFfT",
            TzEaj: "alt",
            ZHIfI: "img",
            VsnPB: "INPUT",
            TFTuG: "TEXTAREA",
            ZhZQL: "KeyI",
            EERKG: "Open player page",
            NQWGO: function(e, n) {
                return e === n
            },
            nvIbJ: "dxsRp",
            ymWPo: "Doesnt work yet",
            jNkYI: function(e, n, t, o, r, i, c) {
                return e(n, t, o, r, i, c)
            },
            gPhMT: function(e, n) {
                return e === n
            },
            RUlix: "vGxxM",
            pOHJd: function(e) {
                return e()
            },
            LAoKc: function(e, n) {
                return e(n)
            },
            WDnYt: function(e, n) {
                return e(n)
            },
            lDSoY: function(e) {
                return e()
            },
            HhgkM: function(e) {
                return e()
            },
            dHztA: function(e) {
                return e()
            },
            MORzw: function(e, n) {
                return e(n)
            },
            YUyuh: function(e) {
                return e()
            },
            TewTQ: function(e) {
                return e()
            },
            ppHqN: "GmyaU",
            shqZy: "ldOzE",
            ExmSL: function(e) {
                return e()
            },
            aeDdJ: "TKHZa",
            ztIwg: function(e, n) {
                return e === n
            },
            Qesqz: "input",
            NvlHL: "change",
            ZnhhS: "CHfIJ",
            tnKQw: "focus",
            wlWNX: function(e, n) {
                return e === n
            },
            qjIOz: "wZUsa",
            MZPCa: function(e, n) {
                return e(n)
            },
            yueDk: "Cant find input",
            asoXd: function(e, n, t) {
                return e(n, t)
            },
            nsyOc: ".search-form__button",
            euglC: ".button--filled",
            bvxOZ: "SCinfo",
            ZZKeJ: function(e) {
                return e()
            },
            HFuNM: "https://sclouddownloader.net/",
            RRJdT: "Error downloading file:",
            pLTim: "TCWMl",
            FNTID: function(e, n) {
                return e === n
            },
            bfiEc: "mdvym",
            tlFDa: "sOKZF",
            ADrkO: function(e, n, t) {
                return e(n, t)
            },
            MuGXs: function(e, n) {
                return e === n
            },
            jHrvB: ".cell-body.tablecell-visibility.style-scope.ytcp-video-row",
            xKasd: function(e, n) {
                return e(n)
            },
            SbyZz: "Get",
            lSGog: "#video-list",
            XiFoo: "Change?",
            wPwRo: "Not FOund",
            ZbLwv: "OdtFr",
            HNDgh: "jYwWq",
            ibWVV: "2|0|1|4|3",
            sipfR: ".xh8yej3.x1iyjqo2",
            FQLxc: "MediaButton",
            zZclc: "Appended buttons man",
            WPBXA: "Get Images",
            DbCiX: function(e, n) {
                return e(n)
            },
            NrwOR: function(e, n, t) {
                return e(n, t)
            },
            kKcYe: "RRmYq",
            eVzts: "XaEOM",
            sUTlX: function(e, n, t) {
                return e(n, t)
            },
            oTRvZ: function(e) {
                return e()
            },
            qgkXw: "Xravx",
            iaCds: function(e, n) {
                return e(n)
            },
            vOulh: "/download-sound-track",
            KFAxZ: "0|5|2|3|4|6|7|1",
            ypYde: "#trackTitle",
            vmurO: "#trackLink",
            EaUPI: "Bruv",
            XiBHF: "#urlInput",
            Pyval: "#submitBtn",
            cVFIn: function(e, n, t) {
                return e(n, t)
            },
            gvrQd: function(e, n, t) {
                return e(n, t)
            },
            gBBbw: "hrmvG",
            MaZCu: function(e, n) {
                return e == n
            },
            xpDhu: "EZ url",
            jDgKt: function(e, n, t) {
                return e(n, t)
            },
            RjoCF: "TimeOut for",
            RkqgA: "NotFound",
            bQRcw: "yfYxn",
            iJIxZ: "1080",
            xRCqf: function(e, n) {
                return e(n)
            },
            GMYat: "path",
            gWRVj: function(e, n, t) {
                return e(n, t)
            },
            XBfde: "title",
            DEIfH: "5|0|1|6|3|4|2",
            kaOfZ: "div",
            cwZxZ: function(e) {
                return e()
            },
            kWnzM: "Posted",
            OoSRG: "PCTec",
            MTcWd: function(e, n) {
                return e === n
            },
            nBmyu: "iNvmN",
            cttpy: "lNpKE",
            KuXHd: "#url",
            clPpJ: "#progress",
            gsLWF: function(e, n) {
                return e === n
            },
            DGywR: "No id Found",
            HeFSj: "TyQQU",
            lENsA: "#end",
            xPukj: function(e, n) {
                return e !== n
            },
            zFZBv: "LnzwS",
            pVDWG: "blur",
            SmESr: function(e, n) {
                return e == n
            },
            LLgYj: "video download successful\ncheck downloads folder",
            VEMxA: function(e, n) {
                return e(n)
            },
            oduVp: function(e, n) {
                return e !== n
            },
            LQhxs: "lqmHM",
            wMiYU: "vidbutton",
            Aqeuv: "dlbutton",
            SMndU: function(e, n, t) {
                return e(n, t)
            },
            GSDDU: function(e, n) {
                return e(n)
            },
            HyVBc: function(e, n) {
                return e(n)
            },
            ZolvP: "#downloadBtn",
            bCutb: function(e, n, t) {
                return e(n, t)
            },
            TdYBY: "#dlbutton",
            TUbow: function(e, n) {
                return e === n
            },
            Bwghm: function(e, n) {
                return e == n
            },
            oHTSF: "Best Quality Video",
            MUgKp: "#height",
            hwQJY: "win",
            RjxUY: "Tvskb",
            zEkCN: "FHSgX",
            SfIfX: "Appending:",
            oyVRI: function(e, n, t) {
                return e(n, t)
            },
            mNJfU: function(e, n) {
                return e !== n
            },
            ZEyAY: "JNTpC",
            FqQkq: "KvFEn",
            qjNuX: function(e, n, t) {
                return e(n, t)
            },
            RAHZE: "#s_input",
            ZjTgS: "Converting",
            vidKT: "#btn-action",
            JKTHm: "#asuccess",
            BiPNx: function(e, n) {
                return e(n)
            },
            ZOkaV: function(e, n) {
                return e(n)
            },
            leYbR: "href",
            fxzIB: function(e, n) {
                return e(n)
            },
            bLUTf: "Input was not Found",
            kKAAR: "?!!",
            stOVo: "Added playlist buttons",
            qiFXb: function(e) {
                return e()
            },
            NKMhK: function(e) {
                return e()
            },
            IJXTt: "Provided argument is not a DOM element.",
            UthDj: "oxWZE",
            cAPhR: function(e, n, t) {
                return e(n, t)
            },
            QLCpL: "480",
            GgqhR: "IyzUH",
            UHGMX: "RWxJl",
            yUltb: "360",
            uLnom: function(e, n, t) {
                return e(n, t)
            },
            SjvIQ: "VOD",
            CbZQA: "PMrnF",
            vgvWp: "Win closed",
            IevPv: function(e, n, t) {
                return e(n, t)
            },
            WBsZW: ".ScCoreButtonLabel-sc-s7h2b7-0",
            YMGTQ: "1080P",
            coMAd: "720P",
            iofhW: "480P",
            oocqy: function(e, n) {
                return e(n)
            },
            TOBlQ: "360P",
            uCwQk: "buttons are gone?!?!",
            TXpIJ: function(e, n) {
                return e === n
            },
            cZhrJ: "MYPBS",
            TnNKp: "ocaZv",
            UrpAO: function(e, n, t) {
                return e(n, t)
            },
            DFbhX: "CwvRz",
            Xnhuy: "uIGBB",
            zfqAK: function(e) {
                return e()
            },
            nNMqw: "texturl",
            GcDNY: "shorts/",
            sczbe: "convert1",
            GlPjF: "Searched",
            YAyJz: function(e, n) {
                return e === n
            },
            UXoZl: function(e, n) {
                return e instanceof n
            },
            bUMqt: "KzTib",
            ciKuT: function(e, n) {
                return e === n
            },
            npcPN: "#cardApiIframe",
            jLOPl: "Added That Thing",
            bpdam: function(e, n) {
                return e(n)
            },
            YGIXE: "Fixed That Thing",
            aHPmk: function(e, n) {
                return e === n
            },
            thpac: "BEphy",
            aBtIM: function(e, n) {
                return e(n)
            },
            aZWYk: ".Layout-sc-1xcs6mc-0 .bMOhzu",
            UChPC: function(e, n) {
                return e(n)
            },
            QqpyM: function(e, n) {
                return e(n)
            },
            vgPmw: "IrpNA",
            gtQTe: "rYlqQ",
            IWSTf: function(e, n) {
                return e(n)
            },
            qbUJs: function(e) {
                return e()
            },
            JFQTg: "body > div.relative.overflow-hidden > main > div > div.px-4.mx-auto.max-w-7xl.sm\\:px-6.lg\\:px-8 > div.overflow-hidden.bg-white.rounded-xl.shadow > div > div > div:nth-child(2) > ul > div > li:nth-child(1) > div:nth-child(3) > a",
            AvFYQ: "body > div.relative.overflow-hidden > main > div > div.px-4.mx-auto.max-w-7xl.sm\\:px-6.lg\\:px-8 > div.overflow-hidden.bg-white.rounded-xl.shadow > div > div > div:nth-child(2) > ul > div > li:nth-child(2) > div:nth-child(3) > a",
            FaLaj: "body > div.relative.overflow-hidden > main > div > div.px-4.mx-auto.max-w-7xl.sm\\:px-6.lg\\:px-8 > div.overflow-hidden.bg-white.rounded-xl.shadow > div > div > div:nth-child(2) > ul > div > li:nth-child(3) > div:nth-child(3) > a",
            yBSkh: "body > div.relative.overflow-hidden > main > div > div.px-4.mx-auto.max-w-7xl.sm\\:px-6.lg\\:px-8 > div.mb-6.space-y-3.lg\\:flex.lg\\:items-center.lg\\:justify-between.lg\\:space-y-0 > div.lg\\:flex.lg\\:items-center > h2",
            yHPtg: function(e, n) {
                return e(n)
            },
            FXsKF: function(e, n) {
                return e != n
            },
            qmtaT: function(e, n) {
                return e(n)
            },
            SvNQt: "bNvSD",
            qpemZ: function(e, n) {
                return e(n)
            },
            fVgnM: "clicked",
            IOTIr: "GZEwy",
            WuoHe: function(e) {
                return e()
            },
            AZVel: "#convert",
            UbXat: function(e, n) {
                return e(n)
            },
            uNwpd: ".download-button",
            diPpV: function(e, n) {
                return e === n
            },
            FHgKT: "wJBbD",
            enwjT: "VCrQd",
            CflPH: "music",
            vzmpk: "These button dont work on youtube music yet",
            DQIbu: "ytd-playlist-panel-renderer",
            KaPTh: function(e, n, t) {
                return e(n, t)
            },
            klcRA: "span",
            BLhyd: "https://y2mate.nu/",
            nCloS: function(e, n) {
                return e(n)
            },
            zOXtc: "y2mate.nu",
            JWAAe: "0HzX",
            cePOk: "/shorts/",
            CZMKo: "mp4",
            QYfnA: "mp3",
            xeDzd: "src",
            LcKnw: "iframe",
            FOPaU: "lazy",
            bdinj: "no-referrer",
            FsRxg: "allow-same-origin allow-scripts allow-popups allow-forms",
            MkTtE: "absolute",
            CsmBg: function(e, n) {
                return e !== n
            },
            MvckC: "YXwHb",
            zVDHc: "Handled",
            PCMRu: "Get MP3",
            SaNfF: function(e, n, t) {
                return e(n, t)
            },
            YXxGl: "Unhandled Post",
            UMpjT: function(e, n) {
                return e + n
            },
            JqYxs: function(e, n) {
                return e(n)
            },
            EwHYi: ".com",
            RoCXA: "mz.com",
            tGwhu: "unload",
            doHGq: "https://yt5s.biz/enxj100/",
            avWXX: function(e, n, t, o) {
                return e(n, t, o)
            },
            grdxX: function(e, n) {
                return e === n
            },
            gkFxI: "CZREo",
            UTzpv: "UfDUr",
            QTSCL: function(e, n) {
                return e(n)
            },
            UJqaI: function(e, n) {
                return e(n)
            },
            pxbui: "https://savetik.co",
            bNhXQ: function(e, n) {
                return e !== n
            },
            yvnEo: "IEpZO",
            WCWOq: "AuTbf",
            hafKP: function(e, n) {
                return e == n
            },
            TRbZP: "oFUAz",
            QJlkY: " - ",
            NNYsz: ".mp3",
            svBfd: function(e, n) {
                return e + n
            },
            tQYtv: "browse-copy",
            gAkmA: ".e1mecfx011",
            bZXdR: function(e, n) {
                return e !== n
            },
            sIvnd: "pRqcD",
            XHRiK: function(e) {
                return e()
            },
            WfHZV: "https://savetik.co/en",
            JRVfJ: "sjcLt",
            bXhyA: "zOwaM",
            SwAtc: function(e, n) {
                return e === n
            },
            dYkWB: "DQKvQ",
            thoFc: "Title: ",
            oniMB: function(e, n) {
                return e(n)
            },
            ETldo: function(e, n) {
                return e || n
            },
            meiDk: "Poasted",
            HteRb: "WoEps",
            FBBsW: "rBOQT",
            FVTnn: function(e, n) {
                return e !== n
            },
            zGOGj: "nhCzG",
            lfuOG: "bFbAP",
            ejeJh: "bXLtf",
            epbmo: "sROVY",
            MpeEq: "jZAZv",
            zdyge: function(e, n) {
                return e == n
            },
            VJtPb: function(e, n) {
                return e || n
            },
            QnHOE: "Mute",
            omqSh: function(e, n, t) {
                return e(n, t)
            },
            Absqz: "#VGHGFf > div > div.Eddif > div:nth-child(2) > button > div.VfPpkd-RLmnJb",
            gelxH: "CXGLt",
            rVatw: function(e, n, t) {
                return e(n, t)
            },
            UhUwR: "Unmute",
            nOYbs: "Unmute (m)",
            RAqhG: "1|3|0|4|2",
            qWZLb: function(e, n) {
                return e !== n
            },
            MrPiq: "SyKfZ",
            ZNEmI: "tOfCu",
            ZlvIw: "hgAOM",
            Cvdql: "GeADU",
            gPPCh: "Cant append buttons yet",
            RgCGj: "nLKQw",
            liifC: "iieDt",
            bxtPR: function(e, n) {
                return e(n)
            },
            OSppX: "This button is corrently broken",
            oczeU: function(e, n) {
                return e + n
            },
            glIHf: function(e, n) {
                return e(n)
            },
            AFJYy: function(e, n) {
                return e(n)
            },
            kPMmi: function(e, n) {
                return e !== n
            },
            ZpoIw: "DmSrr",
            yNAbK: function(e, n, t, o, r, i) {
                return e(n, t, o, r, i)
            },
            rztnD: function(e, n) {
                return e(n)
            },
            CnNgH: function(e, n, t, o) {
                return e(n, t, o)
            },
            UxHEd: "Searching",
            LQZuG: "YvkGr",
            qSXBZ: function(e, n, t) {
                return e(n, t)
            },
            oKYdn: "ehlq8k34",
            ZaFbY: function(e, n) {
                return e !== n
            },
            EFwQE: "nSjCt",
            ZxQuM: function(e, n, t) {
                return e(n, t)
            },
            dNlBs: function(e, n) {
                return e(n)
            },
            RfzQJ: "#right-content",
            rBwLi: "#header-description",
            OjojD: function(e) {
                return e()
            },
            oahlv: function(e) {
                return e()
            },
            kYXzd: "ytp-playlist-menu-button ytp-button",
            XksRZ: function(e) {
                return e()
            },
            eIEJI: function(e, n, t) {
                return e(n, t)
            },
            LclVM: "ZkbPO",
            BQlCn: "EkzNp",
            voAfT: "Posted Buttons",
            jWpDv: function(e, n, t) {
                return e(n, t)
            },
            gicCs: function(e, n) {
                return e === n
            },
            CaXGC: "vMtox",
            WmPih: function(e) {
                return e()
            },
            KTqgt: "Posting",
            LSojF: function(e, n) {
                return e(n)
            },
            gkzGF: ".autoplay",
            mRMdH: "QGNZl",
            IQibT: "LuwGC",
            Mfefl: "Cant Append",
            HsyhN: "jCoNl",
            jwJob: function(e, n) {
                return e !== n
            },
            kAUdH: "ICOGG",
            BsqlJ: "e13wiwn60",
            VEKta: "RSdFU",
            SurfS: function(e, n, t) {
                return e(n, t)
            },
            sEFtD: "load",
            FESpM: "watch?v=",
            YfYfX: function(e) {
                return e()
            },
            uFopE: "btn-submit",
            qYhgV: "no there",
            FAAuJ: "ZAOAE",
            rTjmq: "EkjLo",
            MbVGH: function(e, n) {
                return e > n
            },
            vAnSF: function(e, n) {
                return e(n)
            },
            lrISy: function(e, n) {
                return e === n
            },
            DmzOe: "AIcFQ",
            DfcwL: "NKYty",
            AjZNl: function(e, n) {
                return e === n
            },
            tpQnX: "hDPco",
            kjamt: "btn-download",
            hjdYZ: "1|4|0|3|2",
            BFLbk: ".media-heading",
            mLZTi: function(e, n) {
                return e || n
            },
            ljITm: "FqSuB",
            VolSB: "JBxqr",
            HlBim: function(e, n) {
                return e !== n
            },
            WBmQN: "myLpk",
            LytVE: function(e, n, t) {
                return e(n, t)
            },
            gtQVi: "Dcnnn",
            WalJM: "ZbfJU",
            dqkUb: function(e, n) {
                return e(n)
            },
            YfIbq: function(e, n) {
                return e === n
            },
            yYjKH: "hpECV",
            Hadlz: "No info Preset",
            vogmi: function(e, n) {
                return e(n)
            },
            BAajQ: "#txt-url",
            NVyvR: "GEtting res",
            jWVYL: function(e, n) {
                return e(n)
            },
            QEOQG: "#btn-submit",
            eQnTH: "#video_title",
            rAlKI: "Got Res",
            XFtAf: "#result",
            rZgFE: "table",
            vFJQb: function(e, n) {
                return e(n)
            },
            YsMUA: function(e, n) {
                return e(n)
            },
            ahFGq: "#A_downloadUrl",
            bilGx: "Done",
            MMgaI: function(e, n) {
                return e(n)
            },
            EBiKK: function(e, n) {
                return e < n
            },
            pKahZ: function(e, n) {
                return e(n)
            },
            EGjpD: function(e, n) {
                return e !== n
            },
            Qxabt: "qGePj",
            WglHb: "this",
            xznuo: "xtLxi",
            EvpWD: "form-app-root",
            bvUFw: "loaded",
            RtDLO: "#download-720-MP4",
            PBqgg: function(e, n) {
                return e(n)
            },
            KHfzT: function(e, n) {
                return e === n
            },
            lPtNc: "oaNcx",
            tkFMw: function(e) {
                return e()
            },
            VekAn: function(e, n, t) {
                return e(n, t)
            },
            DkcvW: "xYROM",
            FUnbn: function(e, n, t) {
                return e(n, t)
            },
            fvuFV: function(e, n) {
                return e == n
            },
            SQGQD: "YgYli",
            SCftN: "clearfix",
            sFSDm: "tik-video",
            ECgzi: "https://www.tiktok.com",
            URyDr: function(e, n) {
                return e || n
            },
            GKCaQ: function(e) {
                return e()
            },
            wCInQ: function(e, n) {
                return e == n
            },
            JuMEY: "Close player page",
            erkOJ: "collapse-frame",
            ixRoY: "undefined",
            kyaKZ: function(e, n) {
                return e(n)
            },
            DCtgd: function(e, n) {
                return e(n)
            },
            ECPxG: function(e, n) {
                return e(n)
            },
            NQMZo: function(e, n) {
                return e !== n
            },
            KfcZs: function(e, n) {
                return e === n
            },
            bfOXZ: "IMciV",
            Dmrsg: "zKmUu",
            ubYXP: "iFrameResize function not available",
            UrVjb: "hhtQs",
            TgcEj: function(e) {
                return e()
            },
            qJtYE: "Skipping ad :>",
            LNvbP: function(e, n) {
                return e(n)
            },
            JAujo: "search_txt",
            wljpQ: function(e, n) {
                return e == n
            },
            UGxrp: "video",
            rxFQe: "https://loader.to/api/card2/?url=",
            JxNjB: function(e, n) {
                return e(n)
            },
            eKfoc: function(e, n) {
                return e(n)
            },
            JchPb: "eCrrC",
            iVvky: function(e, n) {
                return e && n
            },
            dvnrP: "zRSqT",
            NCgxR: "xvkCS",
            tcLsZ: "Muted ad",
            cnSLc: function(e, n) {
                return e && n
            },
            mOjPH: "SkOoZ",
            uVsWz: "Failed unmuting",
            mcDjl: "#song-video",
            GXZXC: "#ytd-player",
            gIlUr: function(e, n) {
                return e != n
            },
            nretb: function(e, n) {
                return e === n
            },
            naSUM: "wTCBS",
            HaDAc: "RKukz",
            zWfiJ: function(e, n) {
                return e && n
            },
            kZOGU: "JZgst",
            UMOAq: "Fixed playBack",
            wgcQi: "ytp-ad-overlay-close-button",
            CqfhK: ".yt-spec-button-shape-next",
            IXmjT: "https://onlymp3.app",
            UWnan: "otaym",
            lgGeS: "soundcloud.com",
            aoqDk: function(e, n) {
                return e == n
            },
            zypHG: "zFhgy",
            sqUHY: function(e, n) {
                return e == n
            },
            HOUZq: "sclouddownloader.net",
            AAwAG: "CvYSg",
            OAWfe: "dfXsG",
            JxZxG: function(e, n, t) {
                return e(n, t)
            },
            GwhPo: "updated",
            aMrBC: "useT",
            LqOjT: function(e, n) {
                return e + n
            },
            lbMuQ: function(e, n) {
                return e + n
            },
            FVBQT: function(e, n) {
                return e == n
            },
            EIuwJ: "snapsave.io",
            wkpVT: function(e, n) {
                return e == n
            },
            JTDrr: "clips.twitch.tv",
            jcMCp: "www.twitch.tv",
            fSTMf: "clip",
            FYQzG: "User isnt wathcing a clip",
            EDOzg: function(e, n) {
                return e == n
            },
            jPDXg: "tubemp4.is",
            Mzryt: "Get MP4",
            IFTiX: "PlayList MP3",
            USkdO: "PlayList MP4",
            GbBYI: "white",
            NZXuS: "tt1",
            RArHg: "bruh",
            rjDyj: "youtube",
            RCvki: "onlymp3.app",
            nTCrB: "onlymp3.to",
            cWjyV: "Getting MP3",
            EwYvf: "www.yt2conv.com",
            vgZHM: function(e, n, t) {
                return e(n, t)
            },
            zSzFz: function(e, n, t) {
                return e(n, t)
            },
            Rwfoa: function(e, n, t) {
                return e(n, t)
            },
            ubUDU: "lXxBG",
            PManh: "en3.onlinevideoconverter.pro",
            QYtEQ: "NO info Preset",
            yFnOI: function(e, n, t) {
                return e(n, t)
            },
            cJdRc: function(e, n) {
                return e === n
            },
            djLzE: "lfWFd",
            tiqZC: "vQZeN",
            DqUoI: "Added MiniPlayer Toggle with I",
            cguMA: function(e, n, t) {
                return e(n, t)
            },
            oJdyl: "loader.to",
            acPwT: "/api/",
            LKwuZ: "using loader.to api",
            kSTLQ: "trustedHTMLPolicy",
            uuqZm: "style",
            CHBJi: "100%",
            wUiJl: "true",
            qoPdV: "script",
            yoxkW: "https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.9/iframeResizer.min.js",
            GZaKG: "#secondary.ytd-watch-flexy",
            CrAlp: function(e, n) {
                return e(n)
            },
            LyqCo: function(e, n) {
                return e(n)
            }
        };
        class n {
            static get br() {
                return new n("br")
            }
            constructor(n, t) {
                this.element = n.constructor.name.includes("HTML") && n || function() {
                    for (let n in arguments[1]) e.Bhcsj(e.PwouF, "weQjF") ? arguments[0].setAttribute(n, arguments[1][n]) : o[r[0]] = i[1];
                    return arguments[0]
                }(document.createElement(arguments[0]), arguments[1])
            }
            style(e) {
                for (let n in e) this.element.style[n] = e[n];
                return this
            }
            append(n, ...t) {
                var a, f = {
                    OZicZ: function(n, t) {
                        return e.EWTee(n, t)
                    }
                };
                if (e.wfUVb("sdbvy", e.vQvdz)) {
                    this.element.append(n.element || n), console.log("T:", {
                        targets: t,
                        fe: t && t.forEach
                    });
                    for (let n = 0; e.qpHbi(n, t.length); n++)
                        if (e.wfUVb("epGhQ", e.jROds)) e.eEvNO(o, (e => e.href)(((a = new r(i.href)).host = "clipr.xyz", a)), e.PcGZs);
                        else {
                            let e = t[n];
                            console.log("Appending:", {
                                element: e,
                                target: this
                            }), this.element.append(e.element || e)
                        }
                    return this
                }
                i = c.children, u.forEach = [].forEach, l.forEach((e => {
                    f.OZicZ(s, e)
                }))
            }
            appendTo(n) {
                return (n.element || e.fCADQ(typeof n, "string") ? document.querySelector(n) : n).append(this.element), this
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
                return this.element[arguments[0]]
            }
            get children() {
                var n = {
                    LZOzy: function(n, t) {
                        return e.PTxKF(n, t)
                    },
                    lPjww: e.eJXyF
                };
                return new class {
                    constructor(e) {
                        for (var t = 0; n.LZOzy(t, e.length); t += 1) this[t] = e[t];
                        Object.defineProperty(this, n.lPjww, {
                            get: function() {
                                return e.length
                            }
                        }), Object.freeze(this)
                    }
                    item(n) {
                        return e.ckWHX(this[n], null) ? this[n] : null
                    }
                    namedItem(n) {
                        for (var t = 0; e.PTxKF(t, this.length); t += 1)
                            if (e.wfUVb(this[t].id, n) || this[t].name === n) return this[t];
                        return null
                    }
                    get toArray() {
                        var n = {
                            RPOzB: e.lGOhR
                        };
                        if ("uwaMo" === e.VbXCo) return [...this];
                        t.error(n.RPOzB, o)
                    }
                }([...this.element.children])
            }
        }

        function t() {
            var n = {
                FEboH: e.PSfFK,
                CMLRi: e.hnCrN,
                OBdqG: e.ZsYoZ,
                eSrvc: e.LTFQG,
                pmjGo: "50%",
                yDOgu: e.kIDeO,
                aIMBB: function(e) {
                    return e()
                },
                ihFic: function(e, n) {
                    return e(n)
                },
                yXBYG: function(n, t, o, r, i, c) {
                    return e.BDYDS(n, t, o, r, i, c)
                },
                SjOLP: e.VdyHm,
                MiyHB: function(n, t) {
                    return e.xmjBn(n, t)
                },
                jdHXn: "was clicked",
                prdLl: function(n, t) {
                    return e.ahFXP(n, t)
                },
                QbjNw: e.KYQjv,
                RovUY: function(n, t) {
                    return e.BpBvj(n, t)
                }
            };
            try {
                return e.HnZzr(e.AJeph, e.ZCmFl) ? e.TYhvR(i, e.rTyNf) ? e.TYhvR(c, "Next").click ? e.REiqu(u, "Next") : l.querySelector("._afxw") : a.querySelector(e.jCheq) : document.querySelector(e.uAoFM).innerText.replace(e.HHWQW, "")
            } catch {
                if (e.CHRKg != e.CHRKg) {
                    let t = m.call(p, g, v);
                    return t._click = t.click, t.click = function() {
                        if (t.log(t, n.jdHXn, t.tagName), n.prdLl("A", t.tagName)) {
                            V.log(n.QbjNw, t);
                            let e = t.download,
                                o = t.href;
                            ({
                                id: new K(Y.href).searchParams.get("v"),
                                href: o,
                                title: e
                            }), n.RovUY(X, ne).postMessage(te, "*"), n.aIMBB(oe)
                        } else t._click.apply(t)
                    }, U.log(t, e.FBFuw, t.tagName), t
                }
                try {
                    if (e.ZAZIZ(e.JxCPQ, e.XolHY)) {
                        var t = {
                            DdTgB: function(e) {
                                return n.aIMBB(e)
                            },
                            HIZGQ: function(e, t) {
                                return n.ihFic(e, t)
                            },
                            vwMAv: function(e, t, o, r, i, c) {
                                return n.yXBYG(e, t, o, r, i, c)
                            }
                        };
                        return s.log(n.SjOLP), n.MiyHB(f, n.yDOgu).then((async e => {
                            let o = new N("button", {
                                id: n.FEboH
                            }).appendTo(e).set(n.CMLRi, n.OBdqG).on("click", (function() {
                                let n = t.DdTgB(F) || t.HIZGQ(e, e.href);
                                t.vwMAv(L, n, !1, !0, !1, !0)
                            })).style({
                                position: n.eSrvc,
                                right: n.pmjGo,
                                top: "80%"
                            });
                            for (; !W.getElementById(n.FEboH) && I.querySelector(n.yDOgu);) F.log("Appended"), o.appendTo(n.yDOgu)
                        }))
                    }
                    return document.querySelector(e.muEdw).innerText.replace("Replying to ", "")
                } catch (t) {
                    return G(e.uAfBH, e.rpQsC) ? e.kFZVc(G, e.uAfBH, "data-e2e").innerText : document.querySelector(e.amIMf).innerText.replace(e.HHWQW, "")
                }
            }
        }

        function o() {
            var n = {
                lKfgY: "#VGHGFf > div > div.Eddif > div:nth-child(2) > button > div.VfPpkd-RLmnJb",
                PpxWv: e.bVsGv,
                mjSIy: function(n, t, o) {
                    return e.hHiMW(n, t, o)
                }
            };
            e.GiLDy(get_aria_label, "Why this ad?").click(), e.VQKow(setTimeout, (() => {
                document.querySelector(n.PpxWv).click(), n.mjSIy(setTimeout, (() => {
                    document.querySelector(n.lKfgY).click()
                }), 1e3)
            }), 1e3)
        }
        _element = _e = n, setElement2 = function(e) {
            return e.match(/(?<host>https?\:\/\/www\.tiktok\.com)\/(?<username>@[^\/]+)\/video\/(?<videoID>\d+)/i).groups
        };
        var r = e.IXmjT,
            i = "/watch?=";

        function c(n, t, o = !1) {
            var r = {
                    zkeNj: function(n, ...t) {
                        return e.eEGCv(n, ...t)
                    }
                },
                i = e.Shrqg(addEventListener, n, ((...e) => {
                    r.zkeNj(t, ...e), o && r.zkeNj(removeEventListener, i)
                }), !0);
            return i
        }

        function u(n) {
            e.ZAZIZ(typeof jQuery, e.pHvYy) && e.hNpUW(n, jQuery) && (n = n[0]);
            var t = n.getBoundingClientRect();
            return e.tJcjJ(t.top, e.DISPr(0, (window.innerHeight || document.documentElement.clientHeight) / 2)) && t.left >= 0 && e.kxSZV(t.bottom, e.jZnUc(window.innerHeight || document.documentElement.clientHeight, e.jskVK(window.innerHeight || document.documentElement.clientHeight, 2))) && e.kxSZV(t.right, window.innerWidth || document.documentElement.clientWidth)
        }

        function l(n, {
            callback: r,
            int: i
        }) {
            var d = {
                SFbOd: function(e, n) {
                    return e(n)
                },
                pQzYR: "AqRtU",
                BtEed: e.vDjWB,
                gUBuL: function(e, n) {
                    return e !== n
                },
                dXvzR: "FkVsQ",
                lmijP: function(n) {
                    return e.xOlck(n)
                }
            };
            !r && (r = function() {}), !i && (i = 100), console.log({
                f: n,
                callback: r,
                int: i
            });
            try {
                return n(), void r()
            } catch (e) {}
            var h = e.PhZiw(setInterval, (() => {
                var e = {
                    HkaGr: function(e, n) {
                        return d.SFbOd(e, n)
                    },
                    NbmSB: "isclosed"
                };
                if (d.pQzYR === d.BtEed) c[u] = null, e.HkaGr(l, a), s.log(f, e.NbmSB);
                else try {
                    d.gUBuL(d.dXvzR, d.dXvzR) ? t[o].close() : (d.lmijP(n), r(), d.SFbOd(clearInterval, h))
                } catch (e) {}
            }), i || 100);
            return h
        }

        function a(n) {
            if (e.Bhcsj(e.vkwMl, "rFOSh")) return null === n.offsetParent;
            typeof m === e.pHvYy && e.iPPXf(p, g) && (F = D[0]);
            var t = P.getBoundingClientRect();
            return e.tJcjJ(t.top, 0 - e.vJulb(N.innerHeight || A.documentElement.clientHeight, 2)) && e.jvWpv(t.left, 0) && e.kxSZV(t.bottom, (j.innerHeight || Z.documentElement.clientHeight) + (G.innerHeight || W.documentElement.clientHeight) / 2) && e.kxSZV(t.right, I.innerWidth || U.documentElement.clientWidth)
        }

        function s(e) {
            return e.parentNode
        }

        function f() {
            return e.eEGCv(get_aria_label, "Go back") && e.eEGCv(get_aria_label, e.iePBa).click ? e.mWwii(get_aria_label, "Go back") : document.querySelector(e.yLvbD)
        }

        function d() {
            return get_aria_label(e.rTyNf) && e.ifWPy(get_aria_label, e.rTyNf).click ? e.MTAQN(get_aria_label, e.rTyNf) : document.querySelector(e.jCheq)
        }

        function h() {
            var n = {
                yxmnu: e.WfIRI,
                mPact: function(n, t) {
                    return e.TAOPT(n, t)
                },
                rYZsE: function(e, n) {
                    return e || n
                },
                rrgQz: function(n) {
                    return e.ofVgc(n)
                }
            };
            if (e.IJZSk("ENpZr", e.ohMfY))
                if (v.log(w, n.yxmnu, P.tagName), n.mPact("A", N.tagName)) {
                    Q.log("Caught", O);
                    let e = z.download,
                        t = V.href;
                    ({
                        id: new K(Y.href).searchParams.get("v"),
                        href: t,
                        title: e
                    }), n.rYZsE(X, ne).postMessage(te, "*"), n.rrgQz(oe)
                } else B._click.apply(R);
            else try {
                return document.querySelector(e.kyfHS).children[0].innerText.split("\n")[1]
            } catch {
                return [...document.querySelectorAll(e.KBIQt)].pop().innerText.split("\n")[0]
            }
        }

        function m() {
            var n = {
                ZFgUB: "MediaButton",
                ZnPKU: "Get Images",
                hlMms: e.EnKJu,
                ufPVA: e.hnCrN,
                DCobq: e.BRICD,
                NAoZl: ".xh8yej3.x1iyjqo2"
            };
            if (location.href.includes(e.DWtvd)) {
                let o = e.Shrqg(open, e.UEWUY, location.href, "width=400,height=500");
                var t = e.OtRGq(GM_addValueChangeListener, "instaURL", (function(r, i, c, m) {
                    if (c)
                        if (e.Bhcsj(e.PlFUO, e.rLfji))
                            for (var p = "0|3|2|4|1".split("|"), g = 0;;) {
                                switch (p[g++]) {
                                    case "0":
                                        console.log("Got", {
                                            a: r,
                                            b: i,
                                            c: c,
                                            d: m
                                        });
                                        continue;
                                    case "1":
                                        e.vCQJk(GM_setValue, "instaURL", null);
                                        continue;
                                    case "2":
                                        e.mWwii(GM_removeValueChangeListener, t);
                                        continue;
                                    case "3":
                                        o.close();
                                        continue;
                                    case "4":
                                        e.DMUsa(downloadFile_, c, e.PkClK(document.title, e.sMJQZ));
                                        continue
                                }
                                break
                            } else
                                for (var v = "3|4|0|2|1".split("|"), w = 0;;) {
                                    switch (v[w++]) {
                                        case "0":
                                            var y = new s("button", {
                                                id: n.ZFgUB
                                            }).set("innerText", n.ZnPKU).on("click", f);
                                            continue;
                                        case "1":
                                            k.append(y, b);
                                            continue;
                                        case "2":
                                            var b = new d("button", {
                                                id: n.hlMms
                                            }).set(n.ufPVA, n.DCobq).on("click", h);
                                            continue;
                                        case "3":
                                            u.log("Appended buttons man");
                                            continue;
                                        case "4":
                                            var k = new l(a.querySelectorAll(n.NAoZl)[0]);
                                            continue
                                    }
                                    break
                                }
                }))
            }
        }
        async function p() {
            var n = {
                ujuPq: function(e, n) {
                    return e(n)
                },
                tZQHf: e.ymWPo,
                ACNQh: function(n, t) {
                    return e.REiqu(n, t)
                },
                PNNCy: function(n, t, o, r, i, c, u) {
                    return e.jNkYI(n, t, o, r, i, c, u)
                },
                agFxh: function(n, t, o) {
                    return e.eEvNO(n, t, o)
                }
            };
            if (e.gPhMT("SlimK", e.RUlix)) o(r, i);
            else {
                for (var t = e => new Promise((n => setTimeout(n, e))), h = new Set, g = {}; e.pOHJd(f);) {
                    if (await e.LAoKc(t, 100), !f()) {
                        await e.WDnYt(t, 1e3);
                        break
                    }
                    f().click()
                }[...e.ofVgc(getInstalImages)].forEach((n => {
                    if (e.pmsyf(e.aJRfj, "WDbYH")) {
                        let t = findhref2(n, "img")[0];
                        h.add([t.src, t.getAttribute(e.TzEaj)])
                    } else {
                        var t = {
                                diIws: function(e, n, t) {
                                    return e(n, t)
                                },
                                hlpkC: "dlbutton"
                            },
                            o = "";
                        r((e => {
                            o != o.innerText && (o = f.innerText, t.diIws(d, t.hlpkC, o))
                        }))
                    }
                })), e.lDSoY(d).click();
                try {
                    e.HhgkM(d).click()
                } catch (e) {}
                for (; e.dHztA(d);) {
                    await e.MORzw(t, 300), [...e.YUyuh(getInstalImages)].forEach((n => {
                        let t = e.hHiMW(findhref2, n, e.ZHIfI)[0];
                        h.add([t.src, t.getAttribute("alt")])
                    }));
                    try {
                        e.TewTQ(d).click()
                    } catch (e) {}[...h].length
                }
                for (;;)
                    if (e.wfUVb(e.ppHqN, e.shqZy)) {
                        n.ujuPq(c, n.tZQHf);
                        const {
                            id: e,
                            href: t,
                            isShort: o
                        } = n.ACNQh(u, l.target.parentElement.parentElement).map((e => ({
                            href: e.href,
                            short: e.href.includes("/short"),
                            id: d(e.href)
                        }))).filter((e => e.id))[0];
                        n.PNNCy(s, e, !1, !0, !1, !1, o ? new f(t) : null)
                    } else {
                        if (await t(100), !e.ExmSL(f)) break;
                        f().click()
                    }[...h].forEach((n => {
                    var t = {
                        jxYnE: e.VsnPB,
                        jIIef: e.TFTuG,
                        GZxje: function(n, t) {
                            return e.TAOPT(n, t)
                        },
                        dBUrO: e.ZhZQL,
                        NTgEG: function(n, t) {
                            return e.xmjBn(n, t)
                        },
                        RDcVr: e.EERKG
                    };
                    e.NQWGO(e.nvIbJ, e.nvIbJ) ? g[n[0]] = n[1] : ![t.jxYnE, t.jIIef].includes(u) && !l && !a && s && t.GZxje(f, t.dBUrO) && (t.NTgEG(m, "Close player page") || t.NTgEG(p, t.RDcVr)[1]).click()
                })), (h = Object.keys(g).map((e => ({
                    src: e,
                    name: g[e]
                })))).forEach((e => {
                    var t = new URL(e.src).pathname.split(".").pop();
                    n.agFxh(N, e.src, e.name + "." + t)
                })), console.log("done", h)
            }
        }

        function g() {
            p().then(console.log, console.warn)
        }
        setElement = function(n) {
            return !(!String(n).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/) || !e.CpSvC(e.GiLDy(String, n).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/)[8].length, 11)) && e.TYhvR(String, n).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/)[8]
        }, findhref2 = function(n, t) {
            var l = {
                wNoDr: ".mp3",
                nGGcQ: "Added Button",
                hDNqE: function(e, n, t) {
                    return e(n, t)
                },
                FLVhI: function(n, t) {
                    return e.mWwii(n, t)
                },
                Iyonv: function(e, n) {
                    return e !== n
                },
                vKSAb: e.rHnMf,
                fKxJI: e.QgWYj
            };
            if (!e.wfUVb(e.OtaUM, e.QXvpQ)) {
                var a = [];
                return e.eEGCv((function e(n) {
                    var c;
                    l.Iyonv(l.vKSAb, l.vKSAb) ? (o.appendTo(r), i.log(l.nGGcQ)) : n.tagName.toLowerCase() == (t || "a") ? "eDxZE" !== l.fKxJI ? (a.push(n), n.children.length && ((n = n.children).forEach = [].forEach, n.forEach((n => {
                        e(n)
                    })))) : l.hDNqE(o, (e => e.href)(((c = new r(i.href)).host = "clipr.xyz", c)), "480") : n.children.length && ((n = n.children).forEach = [].forEach, n.forEach((n => {
                        l.FLVhI(e, n)
                    })))
                }), n), a
            } {
                let e = r.createElement("a");
                e.download = i + l.wNoDr, e.href = c, u.body.appendChild(e), e.click(), e.remove()
            }
        }, getInstalImages = function() {
            return document.querySelectorAll(e.nMtkm)
        }, getInstaVideo = function() {
            var n = {
                igLFb: e.tYtFg,
                PZDvS: e.mpqmG,
                gwIde: e.EnKJu,
                apxZv: e.hnCrN,
                UDWJl: e.BRICD,
                jPVEv: e.EklNt
            };
            if (!e.Bhcsj("hpFvd", "hpFvd")) return document.querySelector(e.HIxdI);
            var t = new c(u.querySelector(n.igLFb)),
                o = new l(n.PZDvS, {
                    id: "MediaButton"
                }).set("innerText", "Get Images").on("click", a),
                r = new s(n.PZDvS, {
                    id: n.gwIde
                }).set(n.apxZv, n.UDWJl).on(n.jPVEv, f);
            t.append(o, r)
        }, downloadVideoFromBlob = function(n, t) {
            var o = {
                flCGH: "Got",
                CDiPO: function(e, n) {
                    return e + n
                },
                iiBdv: e.sMJQZ,
                CCZUi: function(e, n, t) {
                    return e(n, t)
                },
                QBXhv: e.VdddD,
                tLGiA: function(e, n) {
                    return e > n
                }
            };
            if (n && n.src && n.src.startsWith(e.kTREN))
                if (e.HnZzr(e.yyYTi, e.cWWHU)) h && (I.log(o.flCGH, {
                    a: U,
                    b: F,
                    c: D,
                    d: H
                }), L.close(), B(R), Q(O, o.CDiPO(z.title, o.iiBdv)), o.CCZUi(V, o.QBXhv, null));
                else {
                    const r = n.captureStream(),
                        i = new MediaRecorder(r),
                        c = [];
                    i.ondataavailable = e => {
                        o.tLGiA(e.data.size, 0) && (c.push(e.data), console.log(e.data))
                    }, i.onstop = () => {
                        const n = new Blob(c, {
                                type: e.AFNza
                            }),
                            o = URL.createObjectURL(n),
                            r = document.createElement("a");
                        r.style.display = e.HGanZ, r.href = o, r.download = e.jZnUc(t, e.sMJQZ), document.body.appendChild(r), r.click(), document.body.removeChild(r), URL.revokeObjectURL(o)
                    }, i.start(), e.kFZVc(setTimeout, (() => {
                        i.stop()
                    }), e.JlcKm(n.duration, 1e3))
                } else if (e.Bhcsj(e.TFSkt, "KFtyV")) console.error(e.YgNNp);
            else {
                r.log(e.ZWdJN);
                try {
                    l.muted = 0
                } catch (e) {
                    s.warn("Failed unmuting")
                }
                u = 0
            }
        }, console.log("A?");
        const v = e => new Promise((n => setTimeout(n, e)));
        if (e.fCADQ(document.domain, "fastdl.app")) e.UWnan != e.UWnan ? n.classList.add("collapse-frame") : onload = async function() {
            var n = {
                uEFMq: function(e, n) {
                    return e === n
                },
                OGagn: "input",
                SHIke: function(e, n) {
                    return e > n
                },
                gHcpD: "XzKYu"
            };
            const t = {
                url: name,
                input: null
            };
            var o = !1;
            for (setTimeout((() => {
                    var e = {
                        cDtpe: function(e, t) {
                            return n.SHIke(e, t)
                        }
                    };
                    "XzKYu" === n.gHcpD ? o = !0 : e.cDtpe(i.data.size, 0) && (s.push(f.data), d.log(h.data))
                }), 2e4); !document.querySelector("#search-form-input");) {
                if (!e.wlWNX("wZUsa", e.qjIOz)) {
                    for (let e in r) this.element.style[e] = c[e];
                    return this
                }
                if (await e.MZPCa(v, 0), o) throw e.yueDk
            }
            t.input = document.querySelector("#search-form-input"), console.log("Found a"), e.asoXd((function(t, o) {
                var r = {
                    NbGlB: function(n, t) {
                        return e.ztIwg(n, t)
                    },
                    axEpT: e.Qesqz,
                    yWgSj: e.NvlHL
                };
                if (e.IJZSk("CHfIJ", e.ZnhhS)) {
                    var i = {
                        iWtVg: function(e, n) {
                            return r.NbGlB(e, n)
                        },
                        EigsS: r.axEpT
                    };
                    const e = ["focus", r.axEpT, r.yWgSj, "blur"];
                    e.forEach((n => {
                        let t = new e(n, {
                            bubbles: !0,
                            isTrusted: !0
                        });
                        h["on" + n] && m["on" + n](t), i.iWtVg(n, i.EigsS) && (w.value = P), v.dispatchEvent(t)
                    }))
                } else {
                    [e.tnKQw, e.Qesqz, e.NvlHL, "blur"].forEach((e => {
                        let r = new Event(e, {
                            bubbles: !0,
                            isTrusted: !0
                        });
                        t["on" + e] && t["on" + e](r), n.uEFMq(e, n.OGagn) && (t.value = o), t.dispatchEvent(r)
                    }))
                }
            }), t.input, t.url), document.querySelector(e.nsyOc).click(), e.vCQJk(GM_setValue, e.VdddD, await async function(n) {
                if (e.ZAZIZ(e.aeDdJ, e.aeDdJ)) {
                    for (; !document.querySelector(n);) await e.mWwii(v, 0);
                    return document.querySelector(n)
                }
                var t;
                r((t = new c(u.href), t.host = "clipr.xyz", t.pathname = t.pathname.replace("/" + l + "/clip", ""), t.search = "", t).href, "1080")
            }(e.euglC).then((e => e.href)))
        };
        else {
            if (e.ahFXP(document.domain, e.lgGeS)) return void(getSoundCloadI = function() {
                var n = {
                    IwDlm: e.RRJdT,
                    tpCBQ: function(n, t) {
                        return e.HnZzr(n, t)
                    },
                    PMhBJ: e.pLTim,
                    ZFhZb: "Win closed"
                };
                e.FNTID(e.bfiEc, e.tlFDa) ? (e.vCQJk(a, e.bvxOZ, null), e.asoXd(s, "sc", e.ZZKeJ(f)), d || (h = 1, e.asoXd(m, e.bvxOZ, (function(e, n, t, o) {
                    w.log({
                        a: e,
                        b: n,
                        c: t,
                        d: o
                    }), t && t.name && N(t.href, t.name)
                }))), e.xmjBn(v, e.HFuNM)) : (e.asoXd(_setV, "SC", getSoundCloudUrl()), e.ADrkO(open, e.HFuNM, "SC").onclose = function(e) {
                    var t = {
                        edLOq: n.IwDlm,
                        HtSic: function(e, n) {
                            return e || n
                        }
                    };
                    n.tpCBQ(n.PMhBJ, "TCWMl") ? console.log(n.ZFhZb) : (u.error(t.edLOq, l), (t.HtSic(a, s) || f).postMessage({
                        url: d,
                        title: h,
                        s: !1
                    }, "*"))
                })
            });
            if (e.wljpQ(document.domain, "studio.youtube.com")) return void
            function() {
                if (e.wlWNX(e.ZbLwv, e.HNDgh)) r.log({
                    a: i,
                    b: c,
                    c: u
                });
                else {
                    var t;
                    setInterval((() => {
                        var o, r = {
                            QkzaB: function(n, t) {
                                return e.MuGXs(n, t)
                            },
                            BmuPg: e.jHrvB,
                            GpDdx: function(n, t) {
                                return e.xKasd(n, t)
                            },
                            lMWYq: e.ymWPo,
                            fpmgd: function(n, t, o, r, i, c, u) {
                                return e.jNkYI(n, t, o, r, i, c, u)
                            },
                            JdggL: e.mpqmG,
                            qRAmM: e.hnCrN,
                            WoAyl: e.SbyZz
                        };
                        try {
                            var i = [...document.querySelectorAll(e.lSGog)].map((e => [e, [...e.classList]])).filter((e => e[1].includes("ytcp-video-section")))[0][0],
                                c = [...i.children[1].children].map((e => [e, [...e.classList], e.tagName])).filter((e => "YTCP-VIDEO-ROW" == e[2]));
                            c.filter((e => {
                                if (r.QkzaB("VUlko", "VUlko")) return "Public" == e[0].children[0].querySelectorAll(r.BmuPg)[0].innerText;
                                n()
                            })).map((e => e[0].children[0].querySelectorAll(".cell-body.tablecell-visibility.style-scope.ytcp-video-row")[0])).forEach((e => {
                                var n = {
                                    DkFhJ: function(e, n) {
                                        return r.GpDdx(e, n)
                                    },
                                    uUShs: r.lMWYq,
                                    GqQuu: function(e, n, t, o, i, c, u) {
                                        return r.fpmgd(e, n, t, o, i, c, u)
                                    }
                                };
                                console.log(e), e.append(new _e("br").element);
                                var t = new _e(r.JdggL).set(r.qRAmM, r.WoAyl).on("click", (function(e) {
                                    n.DkFhJ(alert, n.uUShs);
                                    const {
                                        id: t,
                                        href: o,
                                        isShort: r
                                    } = n.DkFhJ(findhref2, e.target.parentElement.parentElement).map((e => ({
                                        href: e.href,
                                        short: e.href.includes("/short"),
                                        id: setElement(e.href)
                                    }))).filter((e => e.id))[0];
                                    n.GqQuu(downloadT, t, !1, !0, !1, !1, r ? new URL(o) : null)
                                }));
                                e.append(t.element)
                            })), o = !0
                        } catch {
                            o = !1
                        }
                        t != o && (t = o, console.log(e.XiFoo, o ? "Found" : e.wPwRo))
                    }), 0)
                }
            }();
            if (e.aoqDk(document.domain, "www.instagram.com")) {
                if (e.TUbow("zFhgy", e.zypHG)) {
                    var w;

                    function y() {
                        for (var t = e.ibWVV.split("|"), o = 0;;) {
                            switch (t[o++]) {
                                case "0":
                                    var r = new n(document.querySelectorAll(e.sipfR)[0]);
                                    continue;
                                case "1":
                                    var i = new n(e.mpqmG, {
                                        id: e.FQLxc
                                    }).set("innerText", "Get Images").on(e.EklNt, g);
                                    continue;
                                case "2":
                                    console.log(e.zZclc);
                                    continue;
                                case "3":
                                    r.append(i, c);
                                    continue;
                                case "4":
                                    var c = new n(e.mpqmG, {
                                        id: "MediaButton2"
                                    }).set("innerText", e.BRICD).on("click", m);
                                    continue
                            }
                            break
                        }
                    }

                    function b() {
                        var t = new n(document.querySelector("._aaqy")),
                            o = new n("button", {
                                id: "MediaButton"
                            }).set(e.hnCrN, e.WPBXA).on(e.EklNt, g),
                            r = new n(e.mpqmG, {
                                id: "MediaButton2"
                            }).set(e.hnCrN, "Get Videos").on(e.EklNt, m);
                        t.append(o, r)
                    }
                    return e.eEvNO(l, (function() {
                        document.querySelectorAll(".xh8yej3.x1iyjqo2")[0].children
                    }), {
                        callback: function() {
                            var n = {
                                suWpU: "#MediaButton",
                                Ajhkb: "._aaqy"
                            };
                            y(), e.DbCiX(setInterval, (() => {
                                document.querySelector(n.suWpU) || y(), document.querySelector(n.Ajhkb) && !document.querySelector(n.Ajhkb).querySelector("#MediaButton") && b()
                            }))
                        }
                    }), void console.log("Insta ballz")
                }
                return this[n]
            }
            if (e.sqUHY(document.domain, e.HOUZq)) {
                if (e.AAwAG === e.OAWfe) return c(u) || (l(a, s), f);
                (async function() {
                    if (e.Bhcsj(e.qgkXw, e.qgkXw)) e.NrwOR(o, (e => e.href)((e => (e.host = "clipr.xyz", e))(new r(i.href))), "VOD");
                    else {
                        var t = e.iaCds(_getV, "sc");
                        async function u(t, o) {
                            var r = {
                                SYsne: function(n, t) {
                                    return e.ztIwg(n, t)
                                },
                                KDMCc: e.kKcYe,
                                okDyz: e.eVzts,
                                qqQGX: function(n, t, o) {
                                    return e.sUTlX(n, t, o)
                                },
                                iYPei: function(n) {
                                    return e.oTRvZ(n)
                                }
                            };
                            let i = e => new Promise((n => setTimeout(n, e)));
                            return await new Promise((async(e, c) => {
                                if (r.SYsne(r.KDMCc, r.okDyz)) return n.length;
                                var u = !1;
                                r.qqQGX(setTimeout, (() => (u = 0, c())), o);
                                for (; !document.querySelector(t);)
                                    if (await r.iYPei(i), u) {
                                        c();
                                        break
                                    }
                                return e()
                            })).then((e => !0), (e => !1))
                        }
                        if (e.CpSvC(location.pathname, e.vOulh))
                            for (var l = e.KFAxZ.split("|"), a = 0;;) {
                                switch (l[a++]) {
                                    case "0":
                                        await u(e.ypYde);
                                        continue;
                                    case "1":
                                        close();
                                        continue;
                                    case "2":
                                        await e.GiLDy(u, e.vmurO);
                                        continue;
                                    case "3":
                                        for (; !trackLink.href.length;) await e.xmjBn(v, 0);
                                        continue;
                                    case "4":
                                        var s = {
                                            name: trackTitle.innerText,
                                            href: trackLink.href
                                        };
                                        continue;
                                    case "5":
                                        for (; !trackTitle.innerText.length;) await e.MTAQN(v, 0);
                                        continue;
                                    case "6":
                                        console.log(s);
                                        continue;
                                    case "7":
                                        _setV(e.bvxOZ, s);
                                        continue
                                }
                                break
                            } else {
                                if (!_getV("SC")) throw e.EaUPI;
                                var f = e.XiBHF;
                                e.Pyval;
                                if (await e.cVFIn(u, f, 2e3), await e.gvrQd(u, f, 2e3))
                                    if (e.NQWGO(e.gBBbw, "hrmvG")) {
                                        for (document.querySelector(f).value = t, console.log("EZ url", !!window.formSubmit); e.MaZCu(typeof formSubmit, "undefined");) try {
                                            await v(0), console.log(e.xpDhu, formSubmit)
                                        } catch {}
                                        console.log(e.xpDhu, formSubmit), formSubmit(), console.warn("Got"), e.jDgKt(setInterval, formSubmit, 1e3)
                                    } else {
                                        var g = {
                                            euDnU: function(e, n) {
                                                return e(n)
                                            }
                                        };
                                        c.children.length && (d = h.children, m.forEach = [].forEach, p.forEach((e => {
                                            g.euDnU(v, e)
                                        })))
                                    }
                            }
                    }
                })().then(console.log, console.warn)
            } else {
                if ("y2mate.nu" == document.domain) {
                    e.FXsKF(location.pathname.split("/")[1], GM_getValue(e.zOXtc)) && (e.JxZxG(GM_setValue, e.zOXtc, location.pathname.split("/")[1]), console.warn(e.GwhPo));
                    let ye = new URL(location.href).searchParams.get("v"),
                        be = 1 == new URL(location.href).searchParams.get("s"),
                        ke = new URL(location.href).searchParams.get("mp4"),
                        xe = new URL(location.href).searchParams.get(e.aMrBC),
                        Ee = e.LqOjT(e.lbMuQ(ye, ke), xe);
                    const Se = e => new Promise((n => setTimeout(n, e)));
                    async function k(n, t = 5e3) {
                        let o = !1;
                        for (setTimeout((() => {
                                console.log(e.RjoCF, n), o = !0
                            }), t); !document.querySelector(n) && (console.log("_", n, o), await Se(500), !o););
                        if (console.log(n, o), o) throw e.RkqgA;
                        return document.querySelector(n)
                    }
                    return void async function() {
                        var n = {
                            tIPjv: function(e, n) {
                                return e(n)
                            },
                            SWQLL: function(n, t) {
                                return e.EWTee(n, t)
                            },
                            mxYkc: e.GMYat,
                            qLRqb: function(n, t, o) {
                                return e.gWRVj(n, t, o)
                            },
                            frwFZ: "Mute",
                            DLmtJ: e.XBfde,
                            PUetA: e.DEIfH,
                            lqZGm: function(e, n) {
                                return e(n)
                            },
                            uxRUw: e.kaOfZ,
                            EfEmd: function(n) {
                                return e.cwZxZ(n)
                            },
                            cdFEh: e.kWnzM,
                            DVdkE: "Closed ad card"
                        };
                        if ("lqAJi" === e.OoSRG)(n.tIPjv(c, "#right-controls") && n.SWQLL(u, "#right-controls").querySelectorAll(n.mxYkc)[0].getAttribute("d") == l && n.qLRqb(a, n.frwFZ, "title")[0] || n.qLRqb(s, "Unmute", n.DLmtJ) || n.qLRqb(f, "Unmute (m)", n.DLmtJ)).click();
                        else {
                            for (; e.ckWHX(document.readyState, "complete");) await Se(0);
                            if (ye)
                                if (e.MTcWd(e.nBmyu, "iNvmN")) {
                                    let t = async e => {
                                        for (var t = n.PUetA.split("|"), o = 0;;) {
                                            switch (t[o++]) {
                                                case "0":
                                                    var r = n.lqZGm(findhref2, document.forms[0])[0].href;
                                                    continue;
                                                case "1":
                                                    var i = n.qLRqb(findhref2, document.forms[0], n.uxRUw)[0].innerText;
                                                    continue;
                                                case "2":
                                                    n.EfEmd(close);
                                                    continue;
                                                case "3":
                                                    console.log(n.cdFEh, c);
                                                    continue;
                                                case "4":
                                                    (opener || window.parent).postMessage(c, "*");
                                                    continue;
                                                case "5":
                                                    console.log("a", e);
                                                    continue;
                                                case "6":
                                                    var c = {
                                                        _: Ee,
                                                        id: ye,
                                                        href: r,
                                                        title: i,
                                                        length: {}
                                                    };
                                                    continue
                                            }
                                            break
                                        }
                                    };
                                    try {
                                        "nXFrZ" !== e.cttpy ? (await k(e.KuXHd).then((e => {
                                            console.log("e", e), e.value = be ? "https://www.youtube.com/watch?v=" + ye : "https://www.youtube.com/shorts/" + ye, e.parentElement.children[1].click()
                                        })).catch(t), console.log("after url"), await k(e.clPpJ).then((async t => {
                                            if ("xmhXm" === e.bQRcw) n.qLRqb(o, r.href, i.name);
                                            else {
                                                for (; document.querySelector("#" + t.id);) await e.ifWPy(Se, 0);
                                                console.log("a_")
                                            }
                                        })).catch(t), console.log("b")) : o((e => e.href)((e => (e.host = "clipr.xyz", e))(new r(i.href))), e.iJIxZ)
                                    } catch (e) {
                                        console.warn("Error:", e)
                                    }
                                } else t.click(), o.log(n.DVdkE);
                            else e.gsLWF("dyXsc", "dyXsc") ? console.warn(e.DGywR) : (this[d[0]] = e.xRCqf(h, m[p[1]]), !g[v[1]] && !w && (G = !0, W = I[1], U.log(F)))
                        }
                    }().then(console.log, console.warn)
                }
                if (e.FVBQT(document.domain, "qdownloader.cc")) {
                    const Te = e => new Promise((n => setTimeout(n, e)));
                    async function x(n, t = 2e4) {
                        if ("TyQQU" === e.HeFSj) {
                            let o = !1;
                            for (e.VQKow(setTimeout, (() => {
                                    console.log(e.RjoCF, n), o = !0
                                }), t); !document.querySelector(n) && (console.log("_", n, o), await e.xKasd(Te, 500), !o););
                            if (console.log(n, o), o) throw e.RkqgA;
                            return document.querySelector(n)
                        }
                        var o = new i(c.src).pathname.split(".").pop();
                        e.cVFIn(u, l.src, a.name + "." + o)
                    }

                    function E(n, r) {
                        var i = {
                            PYagw: e.lENsA,
                            jaqGG: "input",
                            lhMya: function(n, t) {
                                return e.xPukj(n, t)
                            },
                            EVIYA: e.zFZBv
                        };
                        [e.tnKQw, "input", "change", e.pVDWG].forEach((e => {
                            let c = new Event(e, {
                                bubbles: !0,
                                isTrusted: !0
                            });
                            if (n["on" + e] && n["on" + e](c), e === i.jaqGG) {
                                if (i.lhMya(i.EVIYA, "LnzwS")) return t.querySelector(i.PYagw) || o.querySelector("#right-content");
                                n.value = r
                            }
                            n.dispatchEvent(c)
                        }))
                    }
                    let qe = document.createElement;
                    document._createElement = function(n, t) {
                        let o = qe.call(document, n, t);
                        return o._click = o.click, o.click = function() {
                            if (console.log(o, e.WfIRI, o.tagName), e.SmESr("A", o.tagName)) {
                                console.log("Caught", o);
                                let e = o.download,
                                    n = o.href;
                                G = {
                                    id: new URL(location.href).searchParams.get("v"),
                                    href: n,
                                    title: e
                                }
                            } else o._click.apply(o)
                        }, console.log(o, e.FBFuw, o.tagName), o
                    }, async function() {
                        var n = {
                            oMFeU: "HTML"
                        };
                        if (e.oduVp(e.LQhxs, e.LQhxs)) o.log("TimeOut for " + r), i = !0;
                        else {
                            if (location.href.includes(e.wMiYU)) throw e.wMiYU;
                            e.asoXd(GM_setValue, e.Aqeuv, ""), e.SMndU(GM_addValueChangeListener, "dlbutton", (async function(t, c, u, l) {
                                e.Bhcsj("qpaPd", "BdWmE") ? (console.log({
                                    a: t,
                                    b: c,
                                    c: u,
                                    d: l
                                }), u.includes(e.LLgYj) && (await e.VEMxA(Te, 1e3), e.dHztA(close))) : this.element = o.constructor.name.includes(n.oMFeU) && r || function() {
                                    for (var e in arguments[1]) arguments[0].setAttribute(e, arguments[1][e]);
                                    return arguments[0]
                                }(i.createElement(arguments[0]), arguments[1])
                            }));
                            let t = await e.GSDDU(x, e.KuXHd),
                                c = await e.HyVBc(x, e.ZolvP);
                            id_ = new URL(location.href).searchParams.get("v");
                            let u = "https://www.youtube.com/watch?v=" + id_;
                            e.bCutb(E, t, u), c.click()
                        }
                    }().then(console.log, (async r => {
                        var i = {
                            ERTWm: function(n, t) {
                                return e.TUbow(n, t)
                            },
                            PMNcA: "tTHOh",
                            WbMIW: function(e, n) {
                                return e(n)
                            }
                        };
                        e.Bwghm(r, e.wMiYU) && (console.log(e.oHTSF), await x(e.MUgKp).then((r => {
                            height.selectedIndex = e.DISPr(height.options.length, 1), dlbutton.click(), open = window.open, window.open = function(e, n, t) {
                                console.log({
                                    a: e,
                                    b: n,
                                    c: t
                                })
                            }, e.EWTee(x, e.TdYBY).then((e => {
                                var r = {
                                    qOGfQ: function(e, n) {
                                        return e(n)
                                    },
                                    jaEcm: function(e, n) {
                                        return i.ERTWm(e, n)
                                    },
                                    cWIWV: function(e, n) {
                                        return e != n
                                    },
                                    wkEgN: function(e, n) {
                                        return e === n
                                    },
                                    xaSko: "qGbuv",
                                    WjVVn: function(e, n, t) {
                                        return e(n, t)
                                    },
                                    EevJe: "dlbutton"
                                };
                                if ("tTHOh" !== i.PMNcA) return new n("br");
                                var u = "";
                                i.WbMIW(setInterval, (n => {
                                    var i = {
                                        fPSsG: function(e, n) {
                                            return r.qOGfQ(e, n)
                                        }
                                    };
                                    if (r.jaEcm("yxkXw", "yxkXw")) {
                                        if (r.cWIWV(u, e.innerText)) {
                                            if (!r.wkEgN("qGbuv", r.xaSko)) return this.element[t] = o, this;
                                            u = e.innerText, r.WjVVn(GM_setValue, r.EevJe, u)
                                        }
                                    } else {
                                        var l = {
                                            qjClN: function(e, n) {
                                                return i.fPSsG(e, n)
                                            }
                                        };
                                        c.children.length && (d = h.children, m.forEach = [].forEach, p.forEach((e => {
                                            l.qjClN(v, e)
                                        })))
                                    }
                                }))
                            }))
                        })))
                    }))
                } else {
                    if (document.domain == e.EIuwJ) {
                        async function S(n, t = 2e4) {
                            var c = {
                                OGEIP: e.SfIfX
                            };
                            let u = !1;
                            for (e.oyVRI(setTimeout, (() => {
                                    var t = {
                                        XHeLt: function(n, t) {
                                            return e.jZnUc(n, t)
                                        },
                                        RCpJZ: e.hwQJY
                                    };
                                    e.ZAZIZ(e.RjxUY, e.zEkCN) ? o.push([t.XHeLt("w", r), t.XHeLt(t.RCpJZ, i)]) : (console.log(e.RjoCF, n), u = !0)
                                }), t); !document.querySelector(n);)
                                if (e.mNJfU(e.ZEyAY, e.FqQkq)) {
                                    if (console.log("_", n, u), await v(500), u) break
                                } else {
                                    let e = o[r];
                                    i.log(c.OGEIP, {
                                        element: e,
                                        target: this
                                    }), this.element.append(e.element || e)
                                }
                            if (console.log(n, u), u) throw e.RkqgA;
                            return document.querySelector(n)
                        }
                        return _wfs = S, void async function() {
                            var n = await e.qjNuX(S, e.RAHZE, 3e4);
                            if (n) {
                                console.log(e.ZjTgS), id_ = new URL(location.href).searchParams.get("v"), n.value = "https://www.youtube.com/watch?v=" + id_, e.TewTQ(ksearchvideo), e.jDgKt(setTimeout, ksearchvideo(), 1e3);
                                var t = await e.EWTee(S, "#formatSelect");
                                await e.GSDDU(S, e.vidKT);
                                t.selectedIndex = 0, t.options[0].selected = !0;
                                for (var o = await e.mWwii(S, e.JKTHm); !(o = await e.BiPNx(S, e.JKTHm));) await e.ZOkaV(v, 0);
                                for (e.mWwii(convertFile, 0); e.MaZCu(o.getAttribute(e.leYbR), "#");) await v(0), o = await e.GSDDU(S, e.JKTHm);
                                console.log(o.href);
                                var r = (await e.VEMxA(_wfs, ".clearfix")).querySelector("h3").innerText,
                                    i = {
                                        id: id_,
                                        href: o.href,
                                        title: r,
                                        length: {}
                                    };
                                console.log(e.kWnzM, i), (opener || window).postMessage(i, "*")
                            } else e.fxzIB(alert, e.bLUTf), console.warn(e.kKAAR)
                        }().then(console.log).catch(console.warn)
                    }
                    if (e.wkpVT(document.domain, e.JTDrr)) {
                        const Ce = e => new Promise((n => setTimeout(n, e)));
                        _wfs = async function(n, t = 2e4) {
                            let o = !1;
                            for (e.gvrQd(setTimeout, (() => {
                                    console.log(e.RjoCF, n), o = !0
                                }), t); !document.querySelector(n) && (console.log("_", n, o), await e.REiqu(Ce, 500), !o););
                            if (console.log(n, o), o) throw e.RkqgA;
                            return document.querySelector(n)
                        }, _copyElm = function(t) {
                            var o = {
                                jGLWj: function(n) {
                                    return e.NKMhK(n)
                                }
                            };
                            if (!e.MTcWd("CNqCW", "jrBIE")) {
                                if (!(t instanceof Element)) throw new Error(e.IJXTt);
                                const o = document.createElement(t.tagName);
                                for (let r of t.attributes) e.wfUVb(e.UthDj, e.UthDj) ? o.setAttribute(r.name, r.value) : n.click();
                                return o.style.cssText = t.style.cssText, o.className = t.className, o.innerHTML = t.innerHTML, o
                            }
                            e.ckWHX(v, e.ZZKeJ(w)) && P() ? (Q.log(e.stOVo), e.DMUsa(O, (() => {
                                o.jGLWj(ne).append(te.br.element), oe().append(ie.element), o.jGLWj(ce).append(ue.element)
                            }), 100)) : F != D() && !e.qiFXb(H) && ne.log("buttons are gone?!?!"), B = e.dHztA(R)
                        }, async function() {
                            var r = {
                                HOHBf: function(n, t) {
                                    return e.LAoKc(n, t)
                                },
                                ZPWCf: "#app > div.playControls.g-z-index-control-bar.m-visible > section > div > div.playControls__elements > div.playControls__soundBadge.sc-ml-3x > div",
                                lSepA: function(n, t) {
                                    return e.IJZSk(n, t)
                                },
                                qslnv: e.CbZQA,
                                SPPjS: function(n, t, o) {
                                    return e.cVFIn(n, t, o)
                                },
                                grQkX: "720",
                                zyWdr: e.vgvWp,
                                Abijp: function(n, t, o) {
                                    return e.IevPv(n, t, o)
                                },
                                lCFHo: function(e) {
                                    return e()
                                },
                                gIxNZ: function(n, t, o) {
                                    return e.hHiMW(n, t, o)
                                },
                                pRwqk: e.HFuNM
                            };
                            location.href;
                            let i = (await _wfs(e.WBsZW)).parentElement.parentElement.parentElement.parentElement;
                            new _e(e.xmjBn(_copyElm, i)).on(e.EklNt, (function() {
                                open((e => e.href)((e => (e.host = "clipr.xyz", e))(new URL(location.href))), e.iJIxZ)
                            })).appendTo(i.parentNode).element.querySelector(e.WBsZW).innerText = e.YMGTQ, new _e(e.MTAQN(_copyElm, i)).on(e.EklNt, (function() {
                                if (!r.lSepA(r.qslnv, "JVSKz")) return r.HOHBf(t, o.querySelector(r.ZPWCf))[0].href;
                                r.SPPjS(open, (e => e.href)((e => (e.host = "clipr.xyz", e))(new URL(location.href))), r.grQkX)
                            })).appendTo(i.parentNode).element.querySelector(e.WBsZW).innerText = e.coMAd, new _e(e.ifWPy(_copyElm, i)).on(e.EklNt, (function() {
                                e.cAPhR(open, (e => e.href)((e => (e.host = "clipr.xyz", e))(new URL(location.href))), e.QLCpL)
                            })).appendTo(i.parentNode).element.querySelector(e.WBsZW).innerText = e.iofhW, new _e(e.oocqy(_copyElm, i)).on(e.EklNt, (function() {
                                var t = {
                                    CgacL: e.nMtkm
                                };
                                if (e.GgqhR === e.UHGMX) return n.querySelectorAll(t.CgacL);
                                e.gWRVj(open, (e => e.href)((e => (e.host = "clipr.xyz", e))(new URL(location.href))), e.yUltb)
                            })).appendTo(i.parentNode).element.querySelector(".ScCoreButtonLabel-sc-s7h2b7-0").innerText = e.TOBlQ, new _e(e.xmjBn(_copyElm, i)).on(e.EklNt, (function() {
                                e.uLnom(open, (e => e.href)((e => (e.host = "clipr.xyz", e))(new URL(location.href))), e.SjvIQ)
                            })).appendTo(i.parentNode).element.querySelector(e.WBsZW).innerText = e.SjvIQ
                        }().catch(console.warn)
                    } else if (document.domain == e.jcMCp) {
                        let [Me, Pe, Ne, Ae] = location.pathname.split("/");
                        if (Ne != e.fSTMf) return console.warn(e.FYQzG);
                        console.log("User is Watching a CLip");
                        const je = e => new Promise((n => setTimeout(n, e)));
                        async function T(r, i = 2e4) {
                            var u = {
                                lFCnC: function(e, n) {
                                    return e(n)
                                },
                                fopvV: function(n, t) {
                                    return e.MORzw(n, t)
                                },
                                mEINj: function(n, t) {
                                    return e.TXpIJ(n, t)
                                },
                                uASrx: e.cZhrJ,
                                AfEmW: "TimeOut for"
                            };
                            if (!e.gPhMT(e.TnNKp, "dTdwT")) {
                                let t = !1;
                                for (e.UrpAO(setTimeout, (() => {
                                        var e = {
                                            HjQSC: function(e, n) {
                                                return u.fopvV(e, n)
                                            }
                                        };
                                        u.mEINj(u.uASrx, "aTMgU") ? c.children.length && (d = h.children, m.forEach = [].forEach, p.forEach((n => {
                                            e.HjQSC(v, n)
                                        }))) : (console.log(u.AfEmW, r), t = !0)
                                    }), i); !document.querySelector(r);)
                                    if (e.DFbhX === e.Xnhuy) n.log(e.uCwQk);
                                    else if (console.log("_", r, t), await e.GSDDU(je, 500), t) break;
                                if (console.log(r, t), t) throw e.RkqgA;
                                return document.querySelector(r)
                            }
                            u.lFCnC(t, o)
                        }
                        _wfs = T, _wfs_ = T, _copyElm = function(t) {
                            if (!e.YAyJz("EqqfN", "UiGLT")) {
                                if (!e.UXoZl(t, Element)) {
                                    if (e.TUbow(e.bUMqt, e.bUMqt)) throw new Error(e.IJXTt);
                                    i.getElementById(e.nNMqw).value = "https://www.youtube.com/" + ("1" == c ? e.GcDNY : "watch?v=") + u, l.getElementById(e.sczbe).click(), a.log(e.GlPjF)
                                }
                                const n = document.createElement(t.tagName);
                                for (let e of t.attributes) n.setAttribute(e.name, e.value);
                                return n.style.cssText = t.style.cssText, n.className = t.className, n.innerHTML = t.innerHTML, n
                            }
                            e.zfqAK(n).click()
                        }, async function() {
                            var n = {
                                jlGzH: function(n, t, o) {
                                    return e.kFZVc(n, t, o)
                                },
                                IrLhT: function(n) {
                                    return e.pOHJd(n)
                                },
                                XbuJn: function(n, t) {
                                    return e.ciKuT(n, t)
                                },
                                UrrQe: "VxhsO",
                                YwZDP: e.PcGZs,
                                LcTJt: e.QLCpL,
                                XrPau: e.SjvIQ,
                                gHwyX: e.npcPN,
                                MKzBq: e.jLOPl,
                                rrbWS: function(e, n) {
                                    return e != n
                                },
                                EFGPx: function(n, t) {
                                    return e.bpdam(n, t)
                                },
                                uLyCz: "src",
                                mUTnu: e.YGIXE
                            };
                            if (e.aHPmk("BEphy", e.thpac)) {
                                location.href;
                                await e.aBtIM(_wfs, e.aZWYk);
                                let t = document.querySelectorAll(e.aZWYk)[1],
                                    o = "a";
                                new _e(e.UChPC(_copyElm, t)).on(e.EklNt, (function() {
                                    var n;
                                    e.sUTlX(open, (n = new URL(location.href), n.host = "clipr.xyz", n.pathname = n.pathname.replace("/" + Pe + "/clip", ""), n.search = "", n).href, e.iJIxZ)
                                })).appendTo(t.parentNode).element.querySelector(o).innerText = e.YMGTQ, new _e(e.xmjBn(_copyElm, t)).on("click", (function() {
                                    var e, t = {
                                        vcsom: function(e) {
                                            return n.IrLhT(e)
                                        },
                                        ZEAkK: function(e) {
                                            return n.IrLhT(e)
                                        }
                                    };
                                    n.XbuJn(n.UrrQe, "VxhsO") ? n.jlGzH(open, (e = new URL(location.href), e.host = "clipr.xyz", e.pathname = e.pathname.replace("/" + Pe + "/clip", ""), e.search = "", e).href, n.YwZDP) : (l.log("Added playlist buttons"), n.jlGzH(a, (() => {
                                        t.vcsom(g).append(v.br.element), t.ZEAkK(w).append(P.element), t.ZEAkK(N).append(A.element)
                                    }), 100))
                                })).appendTo(t.parentNode).element.querySelector(o).innerText = e.coMAd, new _e(e.HyVBc(_copyElm, t)).on(e.EklNt, (function() {
                                    var e;
                                    open((e = new URL(location.href), e.host = "clipr.xyz", e.pathname = e.pathname.replace("/" + Pe + "/clip", ""), e.search = "", e).href, n.LcTJt)
                                })).appendTo(t.parentNode).element.querySelector(o).innerText = e.iofhW, new _e(e.QqpyM(_copyElm, t)).on(e.EklNt, (function() {
                                    var n;
                                    e.UrpAO(open, (n = new URL(location.href), n.host = "clipr.xyz", n.pathname = n.pathname.replace("/" + Pe + "/clip", ""), n.search = "", n).href, e.yUltb)
                                })).appendTo(t.parentNode).element.querySelector(o).innerText = e.TOBlQ, new _e(e.REiqu(_copyElm, t)).on("click", (function() {
                                    var e;
                                    n.jlGzH(open, (e = new URL(location.href), e.host = "clipr.xyz", e.pathname = e.pathname.replace("/" + Pe + "/clip", ""), e.search = "", e).href, n.XrPau)
                                })).appendTo(t.parentNode).element.querySelector(e.WBsZW).innerText = e.SjvIQ
                            } else !v.querySelector(n.gHwyX) && (w(!0), P.parentNode.prepend(N), A.prepend(j.element), Z.log(n.MKzBq)), n.rrbWS(G(W.href), I) && (n.EFGPx(U, !0), F.set(n.uLyCz, D), H.log(n.mUTnu), L = n.EFGPx(B, R.href))
                        }().catch(console.warn)
                    } else {
                        if (e.EDOzg(document.domain, "clipr.xyz")) {
                            async function q() {
                                for (;
                                    "complete" != document.readyState;) await e.IWSTf(C, 0);
                                return !0
                            }

                            function C(e) {
                                return new Promise((n => setTimeout(n, e)))
                            }
                            return void async function() {
                                let n = name;
                                await e.qbUJs(q), logger.log("Loaded");
                                let t = {
                                    1080: document.querySelector(e.JFQTg).href,
                                    720: document.querySelector(e.AvFYQ).href,
                                    480: document.querySelector(e.FaLaj).href,
                                    360: document.querySelector("body > div.relative.overflow-hidden > main > div > div.px-4.mx-auto.max-w-7xl.sm\\:px-6.lg\\:px-8 > div.overflow-hidden.bg-white.rounded-xl.shadow > div > div > div:nth-child(2) > ul > div > li:nth-child(4) > div:nth-child(3) > a").href,
                                    VOD: document.querySelector("body > div.relative.overflow-hidden > main > div > div.px-4.mx-auto.max-w-7xl.sm\\:px-6.lg\\:px-8 > div.overflow-hidden.bg-white.rounded-xl.shadow > div > div > div:nth-child(2) > ul > div > li:nth-child(5) > div:nth-child(3) > a").href
                                }[n];
                                logger.log(1);
                                let o = document.querySelector("body > div.relative.overflow-hidden > main > div > div.px-4.mx-auto.max-w-7xl.sm\\:px-6.lg\\:px-8 > div.mb-6.space-y-3.lg\\:flex.lg\\:items-center.lg\\:justify-between.lg\\:space-y-0 > div.lg\\:flex.lg\\:items-center > p > span:nth-child(1)").innerText;
                                logger.log(2);
                                let r = document.querySelector(e.yBSkh).innerText;
                                logger.log(3);
                                let i = "@" + o + " on Twitch | " + r + " - " + n + "P.mp4";
                                logger.log("Downloading file as: " + i), e.MZPCa(open, t), logger.log(4), await e.yHPtg(C, 4e3), close()
                            }().catch(console.warn)
                        }
                        if (location.href.includes(e.jPDXg)) {
                            async function M(n, r = 3e4) {
                                var i;
                                for (e.qmtaT(v, r).then((e => i = !0)); !document.querySelector(n);) {
                                    if (!e.ciKuT(e.SvNQt, "bNvSD")) return e.FXsKF(this[t], null) ? this[o] : null;
                                    if (await e.qpemZ(v, 0), i) break
                                }
                                return document.querySelector(n)
                            }
                            console.log("ok"), e.glIHf(M, "#u").then((async t => {
                                var o = {
                                    QzKAj: e.IOTIr,
                                    wtmhL: e.KYQjv,
                                    NZBCr: function(n, t) {
                                        return e.BpBvj(n, t)
                                    },
                                    MvMgC: function(n) {
                                        return e.WuoHe(n)
                                    },
                                    bMhup: e.FBFuw
                                };
                                t.value = "https://www.youtube.com/watch?v=" + new URL(location.href).searchParams.get("v"), convert.click(), await e.MZPCa(v, 200), (await e.ifWPy(M, e.AZVel)).click(), (await M(".process-button")).click(), e.UbXat(M, e.uNwpd).then((t => {
                                    let r = document.createElement;
                                    document.createElement = function(e, t) {
                                        var i = {
                                            RMFxy: "YMOaU",
                                            wvsrc: o.QzKAj,
                                            fqDNk: o.wtmhL,
                                            JfhrW: function(e, n) {
                                                return o.NZBCr(e, n)
                                            },
                                            mXEOT: function(e) {
                                                return o.MvMgC(e)
                                            }
                                        };
                                        let c = r.call(document, e, t);
                                        return c._click = c.click, c.click = function() {
                                            if (console.log(c, "was clicked", c.tagName), "A" == c.tagName)
                                                if (i.RMFxy !== i.wvsrc) {
                                                    console.log(i.fqDNk, c);
                                                    let e = c.download,
                                                        n = c.href;
                                                    G = {
                                                        id: new URL(location.href).searchParams.get("v"),
                                                        href: n,
                                                        title: e
                                                    }, i.JfhrW(opener, window).postMessage(G, "*"), i.mXEOT(close)
                                                } else n.muted = 0;
                                            else c._click.apply(c)
                                        }, console.log(c, o.bMhup, c.tagName), c
                                    }, t.click(), console.log(e.fVgnM), e.SMndU(setTimeout, (() => t.click()), 1e3)
                                }))
                            })).then(console.log, console.warn)
                        }
                    }
                }
            }
        }

        function P() {
            if (!e.diPpV(e.FHgKT, e.enwjT)) {
                if (document.domain.includes(e.CflPH)) throw e.UChPC(alert, e.vzmpk), ".";
                var n = [...document.getElementsByTagName(e.DQIbu)].filter(u).filter((e => !a(e)))[0];
                return e.KaPTh(findhref2, n, e.klcRA).filter((e => !a(e))).filter(u).filter((e => "video-title" == e.id)).map(s).map(s).map((e => ({
                    id: setElement(findhref2(s(e))[0].href),
                    e: e
                })))
            }
            i(...c), u && l(a)
        }

        function N(e, n) {
            const t = document.createElement("a");
            t.href = e, t.download = n, document.body.appendChild(t), t.click(), document.body.removeChild(t)
        }
        var A, j;
        async function Z() {
            var t = {
                iZJWq: function(n, t, o, r) {
                    return e.avWXX(n, t, o, r)
                }
            };
            if (!e.grdxX(e.gkFxI, e.UTzpv)) {
                for (; j && !j.closed;) await e.QTSCL(v, 0);
                return 1
            }
            t.iZJWq(n, 2, !1, !1)
        }

        function G(t, o = "aria-label", i = document.body) {
            var y = {
                    OdoHo: function(n, t) {
                        return e.iPPXf(n, t)
                    },
                    jFdRz: function(n, t) {
                        return e.SwAtc(n, t)
                    },
                    gUvqs: e.dYkWB,
                    etjVl: function(n, t, o) {
                        return e.qjNuX(n, t, o)
                    },
                    HcybG: e.thoFc,
                    QdHfX: function(n, t) {
                        return e.oniMB(n, t)
                    },
                    PeTix: function(n, t) {
                        return e.ETldo(n, t)
                    },
                    AqEVV: e.meiDk,
                    vMtPL: e.HteRb,
                    ctqXa: e.FBBsW,
                    BlPDh: function(e, n) {
                        return e !== n
                    },
                    huYwi: "AhUke",
                    lJSFN: function(n, t) {
                        return e.FVTnn(n, t)
                    },
                    wIRkV: e.zGOGj,
                    cpiJU: e.lfuOG,
                    CuVml: function(n, t) {
                        return e.ahFXP(n, t)
                    },
                    uPZAS: e.ejeJh
                },
                b = [];
            return e.qmtaT((function e(i) {
                if (y.BlPDh(y.huYwi, "AhUke")) return this.title.body = n, this;
                var k = !1;
                if (o) {
                    if (y.CuVml(i.getAttribute(o), t))
                        if ("bXLtf" !== y.uPZAS) {
                            var x = l.innerText.split("\n"),
                                E = x.map((e => e.match(/[:\d]+/gi))).filter((e => !!e)).pop().pop(),
                                S = x[0].split(y.HcybG)[1],
                                T = y.QdHfX(a, s.parentNode)[0].href,
                                q = {
                                    id: y.QdHfX(f, d.href),
                                    href: T,
                                    title: S,
                                    length: E
                                };
                            y.PeTix(h, m).postMessage(q, "*"), p.log(y.AqEVV)
                        } else b.push(i), k = 1
                } else y.lJSFN(y.wIRkV, y.cpiJU) ? [...i.attributes].map((e => {
                    var n = {
                        zdwvF: function(e, n) {
                            return y.OdoHo(e, n)
                        }
                    };
                    if (y.jFdRz("DQKvQ", y.gUvqs)) {
                        const {
                            name: n,
                            value: t
                        } = e;
                        return {
                            name: n,
                            value: t
                        }
                    } {
                        if (!n.zdwvF(a, s)) throw new w("Provided argument is not a DOM element.");
                        const e = d.createElement(h.tagName);
                        for (let n of P.attributes) e.setAttribute(n.name, n.value);
                        return e.style.cssText = p.style.cssText, e.className = g.className, e.innerHTML = v.innerHTML, e
                    }
                })).filter((e => e.value == t)).length && (b.push(i), k = 1) : y.etjVl(r, (e => (e.host = "clipr.xyz", e.pathname = e.pathname.replace("/" + l + "/clip", ""), e.search = "", e))(new c(u.href)).href, "480");
                i.children.length && !k && ((i = i.children).forEach = [].forEach, i.forEach((t => {
                    y.jFdRz(y.vMtPL, y.ctqXa) ? n = !0 : y.QdHfX(e, t)
                })))
            }), i), b.length ? e.CpSvC(b.length, 1) ? b[0] : b || !1 : null
        }

        function W(t, o = "aria-label", r = document.body) {
            var i = [];
            return e.QqpyM((function r(c) {
                var u = {
                    EoQvG: e.YgNNp
                };
                c.getAttribute(o) == t ? i.push(c) : c.children.length && (e.epbmo === e.MpeEq ? n.error(u.EoQvG) : ((c = c.children).forEach = [].forEach, c.forEach((e => {
                    r(e)
                }))))
            }), r), e.zdyge(i.length, 1) ? i[0] : e.VJtPb(i, !1)
        }

        function I() {
            document.querySelector(".ytp-volume-area > .ytp-mute-button").click()
        }

        function U() {
            (e.hHiMW(G, e.QnHOE, "title") && e.omqSh(G, e.QnHOE, e.XBfde)[0] || e.vCQJk(G, "Mute (m)", e.XBfde)).click()
        }

        function F() {
            var t = {
                YwvRl: e.Absqz
            };
            e.gelxH == e.gelxH ? (e.xRCqf(query, "#right-controls") && e.SmESr(e.oocqy(query, "#right-controls").querySelectorAll("path")[0].getAttribute("d"), UnmutePath) && e.rVatw(G, e.QnHOE, e.XBfde)[0] || e.VQKow(G, e.UhUwR, e.XBfde) || G(e.nOYbs, "title")).click() : n.querySelector(t.YwvRl).click()
        }
        console.log("B?"), _getIds = P, info = {}, downloadT = function(i, u = !1, l = !0, a = !1, s = !1, f = "") {
            var d = {
                coIjx: function(n, t) {
                    return e.CsmBg(n, t)
                },
                MfbkG: e.MvckC,
                QBaXv: "https://sss.instasaverpro.com",
                sORnA: function(n, t) {
                    return e.CpSvC(n, t)
                },
                hNzqT: "https://y2mate.nu",
                lNYrA: function(e, n) {
                    return e == n
                },
                zzRCT: function(n, t) {
                    return e.jZnUc(n, t)
                },
                WXrDr: e.sMJQZ,
                zwVVw: ".mp3",
                yxBuq: e.zVDHc,
                WZvVk: e.hnCrN,
                lOprU: e.PCMRu,
                KgDdd: "disabled",
                PPWcN: "Getting video",
                STNqg: function(n, t, o) {
                    return e.SaNfF(n, t, o)
                },
                NGNuC: function(e, n) {
                    return e(n)
                },
                GIxOp: e.YXxGl
            };
            let h = e.UMpjT(e.PkClK(i, a ? "mp4" : e.QYfnA), l);
            var m;
            if (!(m = document.getElementById(h)) || m.remove(), localStorage[h] && !u && (!s || !e.JqYxs(confirm, "You have already download this video as ." + (a ? e.CZMKo : e.QYfnA) + "\nStill download?"))) return;
            let p = f || location;
            var g = new URL(location.href);
            g.host = g.host.replace(e.EwHYi, e.RoCXA), console.log("o", g);
            let v = ["https://y2mate.nu/" + (e.UChPC(GM_getValue, e.zOXtc) || "0HzX") + "/", "?v=", i, "&s=", g.pathname.startsWith(e.cePOk) ? 1 : 0, "&mp4=", a ? e.CZMKo : e.QYfnA, "&useT=", l];
            console.log(h, v);
            return c(e.tGwhu, (function() {
                info[i].close()
            }), !0), onmessage = function(e) {
                if (d.coIjx("YXwHb", d.MfbkG)) t.log("%c" + this.title.body + " | %c" + o, "color: " + this.title.color + "; font-weight: bold; font-size: " + this.title.size + ";", "color: " + this.body.color + "; font-weight: bold; font-size: " + this.body.size + "; text-shadow: 0 0 5px rgba(0,0,0,0.2);");
                else if (e.origin == r || e.origin.match(/https?:\/{2}onlymp3\.to/) || e.origin.match(/https?:\/{2}en\.onlymp3\.to/) || e.origin.match(/https?:\/{2}en(\d)\.onlinevideoconverter\.pro/) || e.origin == d.QBaXv || d.sORnA(e.origin, d.hNzqT) || d.sORnA(e.origin, "https://snapsave.io") || d.lNYrA(e.origin, "https://tubemp4.is")) {
                    const {
                        data: {
                            href: t,
                            title: o,
                            length: r,
                            id: i,
                            _: c
                        }
                    } = e;
                    let u = d.zzRCT(o, a ? d.WXrDr : d.zwVVw);
                    (n = document.getElementById(c)) && n.remove(), console.log(d.yxBuq, {
                        href: t,
                        title: o,
                        length: r,
                        id: i,
                        _: c
                    }, e), R.set(d.WZvVk, d.lOprU), R.set(d.KgDdd, !1), l ? (console.log(d.PPWcN), d.STNqg(N, t, u)) : d.NGNuC(open, t), localStorage[c] = t
                } else console.log(d.GIxOp, e);
                var n
            }, info[i] = a ? e.Shrqg(open, p.pathname.startsWith(e.cePOk) ? e.doHGq : "https://qdownloader.cc/youtube-video-downloader.html?v=" + i, [i, p.pathname.startsWith(e.cePOk) ? 1 : 0, e.jZnUc(a, !1)], "width=400,height=500") : ! function() {
                var t = {
                        Tlpll: function(e, n) {
                            return e !== n
                        },
                        ymBEZ: function(n, t) {
                            return e.PkClK(n, t)
                        },
                        wVtBP: e.BLhyd,
                        EcbJw: function(n, t) {
                            return e.nCloS(n, t)
                        },
                        hDWkx: e.zOXtc,
                        WamOk: e.JWAAe,
                        ghfTa: "?v=",
                        bfXOb: e.cePOk,
                        riLib: e.CZMKo,
                        VyLdP: e.QYfnA,
                        LtZNL: "&useT=",
                        OMSKG: e.xeDzd
                    },
                    o = new _e(e.LcKnw, {
                        src: v.join(""),
                        id: h,
                        useT: l,
                        loading: e.FOPaU,
                        referrerpolicy: e.bdinj,
                        allowfullscreen: !0,
                        sandbox: e.FsRxg,
                        allow: "autoplay; fullscreen; geolocation; microphone; camera"
                    }).style({
                        border: 0,
                        position: e.MkTtE,
                        width: 0,
                        height: 0,
                        "pointer-events": e.HGanZ,
                        opacity: 1
                    });
                return A = e.OtRGq(GM_addValueChangeListener, e.zOXtc, (function(e, r, c, u) {
                    if (!t.Tlpll("HxMzq", "aIaWW")) throw new n("Failed to fetch final URL");
                    v = [t.ymBEZ(t.wVtBP + (t.EcbJw(GM_getValue, t.hDWkx) || t.WamOk), "/"), t.ghfTa, i, "&s=", g.pathname.startsWith(t.bfXOb) ? 1 : 0, "&mp4=", a ? t.riLib : t.VyLdP, t.LtZNL, l], o.set(t.OMSKG, v.join(""))
                })), o.appendTo(document.body), o.closed = !1, o
            }()
        }, downloadTikTok = function(o, g) {
            var v = {
                HxSVJ: function(n, t) {
                    return e.UJqaI(n, t)
                },
                agLJK: "Doesnt work yet",
                vRAHX: function(e, n) {
                    return e(n)
                },
                RVown: function(e, n) {
                    return e == n
                },
                yKkCp: function(n, t) {
                    return e.diPpV(n, t)
                },
                lkZBy: "rbEQJ",
                egAst: function(n, t) {
                    return e.TAOPT(n, t)
                },
                yDOhF: e.pxbui,
                vXLIN: function(n, t) {
                    return e.bNhXQ(n, t)
                },
                dqKqP: e.yvnEo,
                cCSmN: e.WCWOq,
                mgmkD: function(n, t) {
                    return e.hafKP(n, t)
                },
                RAloj: function(e, n) {
                    return e === n
                },
                GpvwQ: e.TRbZP,
                KkYGg: function(n, t, o, r) {
                    return e.avWXX(n, t, o, r)
                },
                aoeLX: function(n, t) {
                    return e.UMpjT(n, t)
                },
                jgkCw: e.QJlkY,
                hWNqQ: e.NNYsz,
                QAvfn: "NGBhy",
                AAoUZ: function(n, t) {
                    return e.svBfd(n, t)
                },
                AkYjS: function(n, t) {
                    return e.JqYxs(n, t)
                },
                blexA: e.tQYtv,
                fcFYm: e.rpQsC,
                nDqGe: e.gAkmA,
                mWqPD: e.mpqmG,
                JnFRi: "click",
                Lhhcf: function(n, t) {
                    return e.bZXdR(n, t)
                },
                scIkg: e.sIvnd,
                mxZpP: function(n) {
                    return e.XHRiK(n)
                },
                dRKiW: function(e, n, t, o) {
                    return e(n, t, o)
                },
                fWWxL: e.WfHZV,
                hUEOJ: function(n, t) {
                    return e.jZnUc(n, t)
                }
            };
            e.ciKuT(e.JRVfJ, e.bXhyA) ? (i = c.children, u.forEach = [].forEach, l.forEach((e => {
                s(e)
            }))) : async function(e, o) {
                var s = {
                    tQnGr: function(e, n, t) {
                        return e(n, t)
                    },
                    osJYX: v.blexA,
                    MWLtq: v.fcFYm,
                    tMlVY: v.nDqGe,
                    WFXjB: v.mWqPD,
                    nswwZ: v.JnFRi
                };
                if (v.Lhhcf(v.scIkg, "pRqcD")) {
                    if (!s.tQnGr(i, s.osJYX, s.MWLtq)) throw "Cant Append";
                    c.appendTo(u.querySelectorAll(s.tMlVY)), l.appendTo(a.querySelectorAll(s.tMlVY))
                } else {
                    await v.mxZpP(Z), console.log("ez");
                    let g = o.videoID,
                        w = o.username,
                        y = t();
                    onmessage = function(e) {
                        var t = {
                            tNpMK: function(e, n) {
                                return v.HxSVJ(e, n)
                            },
                            oYjfH: v.agLJK,
                            lwxeH: function(e, n) {
                                return v.vRAHX(e, n)
                            },
                            lIpRV: function(e, n, t, o, r, i, c) {
                                return e(n, t, o, r, i, c)
                            },
                            ZKOSU: function(e, n) {
                                return v.RVown(e, n)
                            },
                            vMxex: "string",
                            QgDmA: ".xt0psk2.xvs91rp.xo1l8bm.x5n08af.x18hxmgj"
                        };
                        if (v.yKkCp("WGPxz", v.lkZBy)) {
                            f.log(d), h.append(new m("br").element);
                            var o = new p(s.WFXjB).set("innerText", "Get").on(s.nswwZ, (function(e) {
                                t.tNpMK(o, t.oYjfH);
                                const {
                                    id: n,
                                    href: r,
                                    isShort: i
                                } = t.lwxeH(Z, e.target.parentElement.parentElement).map((n => ({
                                    href: n.href,
                                    short: n.href.includes("/short"),
                                    id: e(n.href)
                                }))).filter((e => e.id))[0];
                                t.lIpRV(W, n, !1, !0, !1, !1, i ? new I(r) : null)
                            }));
                            o.append(o.element)
                        } else if (v.egAst(e.origin, r) || e.origin.match(/https?:\/{2}savetik\.csavetik.coo/) || e.origin.match(/https?:\/{2}en\.onlymp3\.to/) || e.origin.match(/https?:\/{2}en(\d)\.onlinevideoconverter\.pro/) || v.egAst(e.origin, v.yDOhF))
                            if (v.vXLIN(v.dqKqP, v.cCSmN)) {
                                var {
                                    data: {
                                        href: g,
                                        links: w,
                                        title: b,
                                        length: k,
                                        id: x,
                                        mp4: E,
                                        info: {
                                            username: S
                                        }
                                    }
                                } = e;
                                if (console.log("Handled", {
                                        href: g,
                                        title: b,
                                        length: k,
                                        id: x,
                                        links: w,
                                        mp4: E
                                    }, e), v.mgmkD(e.origin, v.yDOhF)) {
                                    if (!v.RAloj(v.GpvwQ, v.GpvwQ)) {
                                        const {
                                            name: e,
                                            value: t
                                        } = n;
                                        return {
                                            name: e,
                                            value: t
                                        }
                                    }
                                    b = y, v.KkYGg(N, E ? w[0] : w.pop(), v.aoeLX(v.aoeLX(S, v.jgkCw) + b, E ? ".mp4" : v.hWNqQ), j)
                                } else {
                                    if (useT) {
                                        if (!v.RAloj(v.QAvfn, v.QAvfn)) return (i.element || t.ZKOSU(typeof c, t.vMxex) ? u.querySelector(l) : a).append(this.element), this; {
                                            let e = document.createElement("a");
                                            e.download = v.AAoUZ(b, v.hWNqQ), e.href = g, document.body.appendChild(e), e.click(), e.remove()
                                        }
                                    } else v.AkYjS(open, g);
                                    localStorage[_] = g
                                }
                            } else try {
                                return r.querySelector("div.x78zum5.xdt5ytf.x1iyjqo2.xs83m0k.x2lwn1j.x1odjw0f.x1n2onr6.x9ek82g.x6ikm8r.xdj266r.x11i5rnm.x4ii5y1.x1mh8g0r.xexx8yu.x1pi30zi.x18d9i69.x1swvt13 > ul > div:nth-child(3) > div > div").children[0].innerText.split("\n")[1]
                            } catch {
                                return [...c.querySelectorAll(t.QgDmA)].pop().innerText.split("\n")[0]
                            } else console.log("Unhandled Post", e)
                    }, j = v.dRKiW(open, v.fWWxL, ["https://www.tiktok.com/" + w + "/video/" + g, v.hUEOJ(e, !1)], "width=400,height=500")
                }
            }(o, g).then(console.log, console.warn)
        }, abc_ = G, W = U, Um = F;
        var D = 0;

        function H(n) {
            var t = {
                dSTTr: e.RAqhG,
                RrCRH: function(n, t) {
                    return e.bpdam(n, t)
                },
                mULlE: ".media-heading",
                MzEUp: function(n, t) {
                    return e.ETldo(n, t)
                }
            };
            if (e.qWZLb(e.MrPiq, e.ZNEmI)) {
                if (n) return e.CsmBg(e.Cvdql, "GeADU") ? new o((e => c(e, u))) : !n.closed;
                if (!e.FVTnn("hgAOM", e.ZlvIw)) return !1; {
                    const e = i.createElement("a");
                    e.href = c, e.download = u, l.body.appendChild(e), e.click(), a.body.removeChild(e)
                }
            } else
                for (var r = t.dSTTr.split("|"), d = 0;;) {
                    switch (r[d++]) {
                        case "0":
                            var h = {
                                id: l,
                                href: p,
                                title: m,
                                length: {}
                            };
                            continue;
                        case "1":
                            var m = t.RrCRH(c, t.mULlE)[0].innerText;
                            continue;
                        case "2":
                            t.MzEUp(s, f).postMessage(h, "*");
                            continue;
                        case "3":
                            var p = u.href;
                            continue;
                        case "4":
                            a.log("Posted");
                            continue
                    }
                    break
                }
        }
        async function L(n = [
            ["w1", "win1"],
            ["w2", "win2"],
            ["w3", "win3"],
            ["w4", "win4"]
        ]) {
            var t, o = {
                    KOIlb: e.gPPCh,
                    SjGSj: function(n, t) {
                        return e.REiqu(n, t)
                    },
                    kkbtz: function(e, n, t) {
                        return e(n, t)
                    }
                },
                r = !1;
            return await new Promise(((e, c) => {
                var u = {
                        CSHyS: function(e, n) {
                            return e(n)
                        },
                        cnhTN: o.KOIlb,
                        cMbOJ: function(e, n) {
                            return e === n
                        },
                        ioFIT: "unpIv",
                        glbWR: function(e, n) {
                            return o.SjGSj(e, n)
                        }
                    },
                    l = o.kkbtz(setInterval, (o => {
                        var c = {
                            mQPDv: function(e, n) {
                                return u.CSHyS(e, n)
                            },
                            olnpb: u.cnhTN,
                            BDGxv: "Posting",
                            Tdfsg: function(e) {
                                return e()
                            }
                        };
                        if (n.forEach((e => {
                                this[e[0]] = c.mQPDv(H, window[e[1]]), !window[e[1]] && !r && (r = !0, t = e[1], console.log(e))
                            })), t)
                            if (u.cMbOJ(u.ioFIT, "bmqFj")) {
                                var a = {
                                    miuyh: function(e) {
                                        return e()
                                    },
                                    gBCPt: c.olnpb,
                                    drvsf: c.BDGxv,
                                    IrLtV: function(e) {
                                        return c.Tdfsg(e)
                                    }
                                };
                                i((function() {
                                    a.miuyh(s);
                                    if (!f()) throw a.gBCPt;
                                    return d.log(a.drvsf), a.IrLtV(h)
                                }), {
                                    callback: function() {}
                                })
                            } else u.glbWR(e, t), clearInterval(l)
                    }), 500)
            })), t
        }

        function B(t, o, c) {
            if ("iieDt" !== e.liifC) return n.match(/(?<host>https?\:\/\/www\.tiktok\.com)\/(?<username>@[^\/]+)\/video\/(?<videoID>\d+)/i).groups;
            if (!o) return e.bxtPR(alert, e.OSppX);
            var u = e.oTRvZ(_getIds),
                l = [];
            for (let n = 0; n < t; n++) l.push([e.oczeU("w", n), e.svBfd("win", n)]);
            u.forEach((({
                id: n
            }, t) => {
                var u = {
                    HPSas: function(e, n, t) {
                        return e(n, t)
                    },
                    rYGzP: e.RgCGj,
                    seRoJ: function(n, t) {
                        return e.VEMxA(n, t)
                    },
                    xnvgT: "isclosed",
                    COJHf: "download",
                    cPztm: function(e, n, t, o, r) {
                        return e(n, t, o, r)
                    },
                    PIVaE: e.tGwhu
                };
                e.GiLDy(L, l).then((e => {
                    var l = {
                        NnZXS: function(e, n, t) {
                            return u.HPSas(e, n, t)
                        },
                        UIqhb: "browse-copy",
                        LZSee: u.rYGzP,
                        LHNAS: function(e, n) {
                            return u.seRoJ(e, n)
                        },
                        BZGSN: u.xnvgT
                    };
                    if (!info[n] && !localStorage[n] || c) {
                        console.log(u.COJHf, n, t), window[e] = u.cPztm(downloadT, n, c, !0, !!o), window.addEventListener(u.PIVaE, (function(n) {
                            window[e].close()
                        }));
                        var a = u.HPSas(setInterval, (n => {
                            var t = {
                                Fkitb: function(e, n, t) {
                                    return l.NnZXS(e, n, t)
                                },
                                NqvYS: l.UIqhb,
                                YQhdm: "data-e2e",
                                qaGgw: function(e, n, t) {
                                    return e(n, t)
                                }
                            };
                            if (!window[e] || window[e].closed)
                                if ("nrhyu" !== l.LZSee) window[e] = null, l.LHNAS(clearInterval, a), console.log(e, l.BZGSN);
                                else try {
                                    return !!t.Fkitb(r, t.NqvYS, t.YQhdm).parentNode && t.qaGgw(i, "browse-copy", t.YQhdm).parentNode
                                } catch (e) {
                                    return !1
                                }
                        }), 300)
                    }
                }))
            }))
        }
        window.ch3 = H, window.getWin = L, WIP_ = B;
        var R = new n(e.mpqmG).set(e.hnCrN, e.PCMRu).on(e.EklNt, (function(n) {
                if (e.xPukj("ufsXh", "ufsXh")) return e.iaCds(i, "Go back") ? c(e.iePBa).click ? e.glIHf(u, e.iePBa) : l.querySelector(e.yLvbD) : a.querySelector("._afxv");
                R.set(e.hnCrN, "Wait..."), R.set("disabled", !0), e.BDYDS(downloadT, e.AFJYy(setElement, location.href), !0, !0, !1, !0)
            })),
            Q = new n(e.mpqmG).set(e.hnCrN, e.Mzryt).on(e.EklNt, (function(n) {
                e.kPMmi(e.ZpoIw, e.ZpoIw) ? (o.log("TimeOut for", r), i = !0) : e.yNAbK(downloadT, e.rztnD(setElement, location.href), !0, !0, !0, !0)
            })),
            O = new n(e.mpqmG).set(e.hnCrN, e.IFTiX).on(e.EklNt, (function(n) {
                e.CnNgH(WIP_, 2, !1, !1)
            })),
            z = new n(e.mpqmG).set("innerText", e.USkdO).on("click", (function(n) {
                if ("YvkGr" !== e.LQZuG) {
                    if (e.CpSvC(o.style.display, "none")) throw c.getElementById(e.sczbe).click(), "this";
                    i.log(e.UxHEd)
                } else e.avWXX(WIP_, 2, !0, !1)
            })),
            V = new n("button").set(e.hnCrN, e.Mzryt).on("click", (function(n) {
                e.qSXBZ(downloadTikTok, !0, setElement2(e.TYhvR(getClass, e.oKYdn) ? e.qpemZ(getClass, e.oKYdn).innerText : location.href))
            })).style({
                color: e.GbBYI
            }),
            K = (new n("button", {
                id: e.NZXuS
            }).set("innerText", e.Mzryt).on(e.EklNt, (function(t) {
                e.ZaFbY("nSjCt", e.EFwQE) ? n.stop() : e.PhZiw(downloadTikTok, !0, e.yHPtg(setElement2, e.GiLDy(getClass, e.oKYdn) ? e.ZOkaV(getClass, e.oKYdn).innerText : location.href))
            })).style({
                color: e.GbBYI
            }), new n(e.mpqmG).set("innerText", e.PCMRu).on(e.EklNt, (function(n) {
                e.ZxQuM(downloadTikTok, !1, e.glIHf(setElement2, e.UbXat(getClass, e.oKYdn) ? e.dNlBs(getClass, "ehlq8k34").innerText : location.href))
            })).style({
                color: e.GbBYI
            }));

        function Y() {
            return document.querySelector(e.lENsA) || document.querySelector(e.RfzQJ)
        }

        function X() {
            var t = {
                jmpXr: function(n, t) {
                    return e.UbXat(n, t)
                },
                ZoywD: ".autoplay",
                PMOyZ: e.rBwLi,
                eTeDb: function(n) {
                    return e.XHRiK(n)
                },
                CPthK: function(n) {
                    return e.OjojD(n)
                },
                lGywU: function(n) {
                    return e.oahlv(n)
                },
                VSFLt: "Opening",
                PUWzm: e.kYXzd,
                zsaKd: function(n) {
                    return e.XksRZ(n)
                },
                lraIb: function(n, t, o) {
                    return e.eIEJI(n, t, o)
                },
                UEZLp: e.QnHOE,
                emVbQ: function(e, n) {
                    return e != n
                },
                BcQGM: function(n) {
                    return e.xOlck(n)
                },
                djptb: e.LclVM,
                qucwv: e.stOVo,
                VWKsD: function(n) {
                    return e.dHztA(n)
                },
                MfDrG: function(n, t) {
                    return e.wfUVb(n, t)
                },
                HTSZR: e.BQlCn
            };
            const c = Y();

            function l() {
                try {
                    return !(![...document.querySelectorAll("#header-description")].filter(u).filter((e => !a(e)))[0] && !t.jmpXr(query, t.ZoywD)) && ([...document.querySelectorAll(t.PMOyZ)].filter(u).filter((e => !a(e)))[0] || query(t.ZoywD))
                } catch (e) {
                    return !1
                }
            }
            console.log(c), R.appendTo(c), Q.appendTo(c), console.log(e.voAfT);
            var s = !1;
            e.jWpDv(setInterval, (() => {
                var e = {
                    aqfSb: function(e, n, o) {
                        return t.lraIb(e, n, o)
                    },
                    bUTyk: t.UEZLp,
                    CMztu: "title",
                    zWWmm: "Mute (m)"
                };
                if (t.emVbQ(s, t.BcQGM(l)) && t.CPthK(l)) {
                    if (t.djptb != t.djptb) return o.log(t.VSFLt), r.getElementsByClassName(t.PUWzm)[0].click(), t.zsaKd(i);
                    console.log(t.qucwv), t.lraIb(setTimeout, (() => {
                        t.eTeDb(l).append(n.br.element), t.CPthK(l).append(O.element), t.lGywU(l).append(z.element)
                    }), 100)
                } else s != t.VWKsD(l) && !t.lGywU(l) && (t.MfDrG("EkzNp", t.HTSZR) ? console.log("buttons are gone?!?!") : (e.aqfSb(o, e.bUTyk, e.CMztu) && r(e.bUTyk, "title")[0] || i(e.zWWmm, e.CMztu)).click());
                s = t.CPthK(l)
            }), 100)
        }
        if (console.log(e.RArHg), a1 = [
                [e.rjDyj, function() {
                    if (e.mRMdH !== e.IQibT) e.SaNfF(l, (function() {
                        if (e.gicCs(e.CaXGC, e.CaXGC)) {
                            e.WmPih(Y);
                            if (!Y()) throw "Cant append buttons yet";
                            return console.log(e.KTqgt), e.OjojD(X)
                        }
                        return !n.closed
                    }), {
                        callback: function() {}
                    });
                    else try {
                        return !(![...g.querySelectorAll(e.rBwLi)].filter(v).filter((e => !G(e)))[0] && !e.LSojF(P, e.gkzGF)) && ([...N.querySelectorAll(e.rBwLi)].filter(A).filter((e => !G(e)))[0] || e.rztnD(Z, e.gkzGF))
                    } catch (e) {
                        return !1
                    }
                }],
                ["tiktok", function() {
                    var u = {
                        xCiAc: function(e, n, t) {
                            return e(n, t)
                        },
                        HPcsW: e.Mfefl,
                        DWSiV: ".e1mecfx011",
                        kNayt: function(e) {
                            return e()
                        },
                        dCbkM: function(n) {
                            return e.zfqAK(n)
                        },
                        GMWjJ: "Added playlist buttons",
                        KijXu: function(n) {
                            return e.dHztA(n)
                        },
                        DHLhy: function(e) {
                            return e()
                        },
                        jebRm: "img",
                        IvUnr: e.TzEaj,
                        SNbeC: "data-e2e",
                        xpUDQ: function(e, n, t) {
                            return e(n, t)
                        },
                        WXCWU: e.HsyhN,
                        EuSJt: function(e, n) {
                            return e === n
                        },
                        WWmeu: function(n, t) {
                            return e.jwJob(n, t)
                        },
                        KtdIF: e.kAUdH,
                        hXiGl: e.BsqlJ,
                        NhITS: e.voAfT,
                        TVGKu: "xgglK",
                        HDgWA: "zxFKP",
                        PJYHD: e.tQYtv,
                        gZWqM: e.VEKta
                    };
                    e.SurfS(addEventListener, e.sEFtD, (function() {
                        var e = {
                            MRYIf: function(e, n) {
                                return e(n)
                            },
                            KbEPi: function(e, n) {
                                return u.EuSJt(e, n)
                            },
                            jguzq: u.TVGKu,
                            tGtZB: u.HDgWA,
                            ieNZw: function(e, n, t) {
                                return u.xpUDQ(e, n, t)
                            },
                            rHIMJ: u.PJYHD,
                            qwsWi: u.SNbeC,
                            Qmwjm: function(e, n) {
                                return e !== n
                            },
                            OspMg: u.gZWqM
                        };
                        u.xCiAc(l, (function() {
                            if (!u.xCiAc(abc_, "browse-copy", "data-e2e")) throw u.HPcsW;
                            V.appendTo(document.querySelectorAll(u.DWSiV)), K.appendTo(document.querySelectorAll(".e1mecfx011"))
                        }), {
                            callback: function() {}
                        }), u.xpUDQ(l, (function() {
                            var l = {
                                Fegdk: function(e) {
                                    return u.kNayt(e)
                                },
                                MJhKe: function(e, n) {
                                    return e != n
                                },
                                uyNFV: function(e) {
                                    return u.dCbkM(e)
                                },
                                hYqpC: u.GMWjJ,
                                UgsRw: function(e, n, t) {
                                    return e(n, t)
                                },
                                xWHqD: function(e) {
                                    return u.KijXu(e)
                                },
                                LrdGs: function(e) {
                                    return u.DHLhy(e)
                                },
                                LyjvC: function(e) {
                                    return u.kNayt(e)
                                },
                                wQRuQ: function(e) {
                                    return e()
                                },
                                GytIP: function(e, n, t) {
                                    return u.xCiAc(e, n, t)
                                },
                                kxRdj: u.jebRm,
                                nJWTt: u.IvUnr,
                                iGYEu: "browse-copy",
                                rOLCe: u.SNbeC,
                                WZSlx: function(e, n, t) {
                                    return u.xpUDQ(e, n, t)
                                },
                                RLiMo: u.WXCWU,
                                ezNIC: "eSyOn",
                                SEuBi: function(e, n) {
                                    return u.EuSJt(e, n)
                                },
                                dzQRN: "ssUHu",
                                upxOT: "buttons are gone?!?!"
                            };
                            if (u.WWmeu(u.KtdIF, u.KtdIF)) n.log("buttons are gone?!?!");
                            else {
                                if (!document.getElementsByClassName("e13wiwn60")[0]) throw "Cant Append";

                                function a() {
                                    var t = {
                                        EYwWo: function(n, t) {
                                            return e.MRYIf(n, t)
                                        }
                                    };
                                    if (e.KbEPi(e.jguzq, e.tGtZB)) c.children.length && (d = h.children, m.forEach = [].forEach, p.forEach((e => {
                                        t.EYwWo(v, e)
                                    })));
                                    else try {
                                        return !!e.ieNZw(abc_, e.rHIMJ, "data-e2e").parentNode && e.ieNZw(abc_, e.rHIMJ, e.qwsWi).parentNode
                                    } catch (t) {
                                        if (e.Qmwjm("RSdFU", e.OspMg)) throw new n("Provided argument is not a DOM element.");
                                        return !1
                                    }
                                }
                                V.appendTo(document.getElementsByClassName(u.hXiGl)[0]), K.appendTo(document.getElementsByClassName("e13wiwn60")[0]), console.log(u.NhITS);
                                var s = !1;
                                u.xpUDQ(setInterval, (() => {
                                    var e = {
                                        oIJkv: l.iGYEu,
                                        OHcQj: l.rOLCe,
                                        sjowM: function(e, n, t) {
                                            return l.WZSlx(e, n, t)
                                        }
                                    };
                                    if (l.RLiMo != l.RLiMo) {
                                        var c = {
                                            RRWuS: function(e) {
                                                return l.Fegdk(e)
                                            }
                                        };
                                        l.MJhKe(v, l.Fegdk(w)) && l.uyNFV(P) ? (Q.log(l.hYqpC), l.UgsRw(O, (() => {
                                            ne().append(te.br.element), c.RRWuS(oe).append(ie.element), c.RRWuS(ce).append(ue.element)
                                        }), 100)) : F != D() && !H() && ne.log("buttons are gone?!?!"), B = l.xWHqD(R)
                                    } else {
                                        if (l.MJhKe(s, a()) && a()) {
                                            if (l.ezNIC != l.ezNIC) return !!t(e.oIJkv, e.OHcQj).parentNode && e.sjowM(o, e.oIJkv, e.OHcQj).parentNode;
                                            console.log(l.hYqpC), l.UgsRw(setTimeout, (() => {
                                                l.LrdGs(a).append(n.br.element), l.LyjvC(a).append(V.element), l.wQRuQ(a).append(K.element)
                                            }), 100)
                                        } else if (s != l.wQRuQ(a) && !a())
                                            if (l.SEuBi(l.dzQRN, "rpnju")) {
                                                var u = l.GytIP(o, r, l.kxRdj)[0];
                                                i.add([u.src, u.getAttribute(l.nJWTt)])
                                            } else console.log(l.upxOT);
                                        s = a()
                                    }
                                }), 100)
                            }
                        }), {
                            callback: function() {}
                        })
                    }))
                }]
            ].filter((e => location.host.includes(e[0])))[0], a1 && a1[1] && a1[1](), console.log(a1), delete a1, __ex_ = Y, location.href.includes(e.RCvki) || location.href.includes(e.nTCrB)) {
            console.log(e.RCvki);

            function J() {
                if (e.NQWGO(e.FAAuJ, "ZAOAE")) {
                    var n = videoTitle.innerText.split("\n"),
                        t = n.map((e => e.match(/[:\d]+/gi))).filter((e => !!e)).pop().pop(),
                        o = n[0].split(e.thoFc)[1],
                        u = findhref2(videoTitle.parentNode)[0].href,
                        a = {
                            id: setElement(location.href),
                            href: u,
                            title: o,
                            length: t
                        };
                    (opener || window).postMessage(a, "*"), console.log(e.meiDk)
                } else if (r.log(i.children.length), !c.children.length) throw l.getElementById(e.uFopE).click(), e.qYhgV
            }
            return e.jWpDv(setInterval, (() => {
                if (e.MTcWd(e.rTjmq, "qPLXC")) return this.element["on" + t] = o, this;
                e.MbVGH(document.getElementById("error-text").innerText.length, 5) && location.reload()
            }), 2e4), console.log(e.cWjyV), void e.cAPhR(l, (function(n = function() {}) {
                var t = {
                    NXDPC: function(e) {
                        return e()
                    }
                };
                (function() {
                    var [n, t] = name.split(",");
                    txtUrl.value = "https://www.youtube.com/" + (e.TAOPT(t, "1") ? e.GcDNY : e.FESpM) + n, e.YfYfX(getListFormats)
                })(), e.kFZVc(l, (function(e = function() {}) {
                    t.NXDPC(J)
                }), {
                    callback: close
                })
            }), {
                callback: function() {}
            })
        }
        if (location.href.includes(e.EwYvf)) {
            console.log("Getting MP4");
            let [Ze, Ge] = name.split(",");
            e.vgZHM(l, (function(n = function() {}) {
                if (e.lrISy(e.DmzOe, e.DfcwL)) try {
                    e.ZZKeJ(l), a(), e.vAnSF(s, f)
                } catch (e) {} else document.getElementById("search_txt").value = "https://www.youtube.com/" + ("1" == Ge ? "shorts/" : e.FESpM) + Ze, document.getElementById(e.uFopE).click(), console.log(Ze, Ge)
            }), {
                callback: function() {}
            }), e.zSzFz(l, (function(n = function() {}) {
                if (console.log(result.children.length), !result.children.length) throw document.getElementById(e.uFopE).click(), "no there"
            }), {
                int: 1e3,
                callback: function() {}
            }), l((function() {
                e.AjZNl("nulnz", e.tpQnX) ? t() : document.getElementById(e.kjamt).click()
            }), {
                callback: function() {}
            }), e.Rwfoa(l, (function() {
                for (var n = e.hjdYZ.split("|"), t = 0;;) {
                    switch (n[t++]) {
                        case "0":
                            var o = {
                                id: Ze,
                                href: i,
                                title: r,
                                length: {}
                            };
                            continue;
                        case "1":
                            var r = e.GSDDU($, e.BFLbk)[0].innerText;
                            continue;
                        case "2":
                            e.mLZTi(opener, window).postMessage(o, "*");
                            continue;
                        case "3":
                            console.log(e.kWnzM);
                            continue;
                        case "4":
                            var i = downloadbtn.href;
                            continue
                    }
                    break
                }
            }), {
                callback: close
            })
        } else if (location.href.includes("yt5s.biz")) {
            async function ee(n) {
                if (e.FVTnn(e.ljITm, e.VolSB)) {
                    for (; !document.querySelector(n);) e.HlBim(e.WBmQN, e.WBmQN) ? t() : await e.VEMxA(v, 0);
                    return !0
                }
                return !1
            }(async function() {
                var n = {
                    QmPVk: function(n) {
                        return e.lDSoY(n)
                    }
                };
                if (e.YfIbq("hpECV", e.yYjKH)) {
                    let [n, r] = name.split(",");
                    if (!n.length || !r.length) return console.warn(e.Hadlz);
                    var t = "https://www.youtube.com/" + (e.SmESr(r, "1") ? e.GcDNY : e.FESpM) + n;
                    await e.vogmi(ee, e.BAajQ), console.log("Input Loaded"), document.querySelector(e.BAajQ).value = t, await e.vAnSF(ee, "#btn-submit"), console.log(e.NVyvR), await e.jWVYL(v, 100), document.querySelector(e.QEOQG).click(), await e.GSDDU(ee, e.eQnTH), console.log(e.rAlKI);
                    var o = document.querySelector("#video_title").innerText,
                        c = [0];
                    return [...document.querySelector(e.XFtAf).querySelector(e.rZgFE).querySelectorAll("tr")].forEach((n => {
                        var t = {
                            GDfZF: e.zVDHc,
                            ybaoN: function(e, n, t, o, r) {
                                return e(n, t, o, r)
                            },
                            aGEEu: function(n, t, o) {
                                return e.LytVE(n, t, o)
                            }
                        };
                        if (e.mNJfU(e.gtQVi, e.WalJM)) {
                            var o = n.innerText.match(/(?<res>\d+)(p|P)/i) || {};
                            o.groups && (o = e.dqkUb(Number, o.groups.res), c[0] < o && (c[0] = o, c[1] = findhref2(n)[0].href, c[2] = n))
                        } else {
                            var {
                                data: {
                                    s: r,
                                    url: i,
                                    title: s
                                }
                            } = u;
                            l.log(t.GDfZF, {
                                s: r,
                                url: i,
                                title: s
                            }, a), r ? t.aGEEu(d, h, 100) : t.ybaoN(m, i, s, null, p)
                        }
                    })), {
                        id: n,
                        title: o,
                        href: c[1],
                        mp4: !0,
                        res: c[0]
                    }
                }
                r(), e.SaNfF(i, (function(e = function() {}) {
                    n.QmPVk(l)
                }), {
                    callback: u
                })
            })().then((function(n) {
                e.ZAZIZ("mcQkg", "mcQkg") ? ((opener || window).postMessage(n, "*"), location.href = n.href) : (t.log("Iframe is fully loaded"), e.vFJQb(o, !1))
            }), console.warn)
        } else if (location.href.includes("sss.instasaverpro.com")) e.ubUDU != e.ubUDU ? (o.log(e.RjoCF, r), i = !0) : async function() {
            for (await e.yHPtg((async function(n) {
                    for (; !document.querySelector(n);) await e.YsMUA(v, 0);
                    return !0
                }), e.ahFGq); !document.querySelector(e.ahFGq).href.length;) await v(0);
            console.log(e.bilGx);
            var n = document.querySelector("#myModalLabel").innerText,
                t = {
                    href: document.querySelector("#A_downloadUrl").href,
                    title: n
                };
            e.VJtPb(opener, window).postMessage(t, "*")
        }().then(close, console.warn);
        else if (location.href.includes(e.PManh)) {
            let [We, Ie] = name.split(",");
            if (!We.length || !Ie.length) return console.Warn(e.QYtEQ);
            var ne = "https://www.youtube.com/" + (e.fCADQ(Ie, "1") ? "shorts/" : e.FESpM) + We;
            let Ue = function() {};
            e.asoXd(l, (function(n = function() {}) {
                document.getElementById(e.nNMqw).value = "https://www.youtube.com/" + ("1" == Ie ? "shorts/" : "watch?v=") + We, document.getElementById("convert1").click(), console.log(e.GlPjF)
            }), {
                callback: Ue
            }), e.IevPv(l, (function() {
                if (e.SmESr(stepProcess.style.display, "none")) {
                    if (e.EGjpD(e.Qxabt, "ObpVo")) throw document.getElementById(e.sczbe).click(), e.WglHb;
                    d = e.MMgaI(h, m.groups.res), e.EBiKK(p[0], g) && (v[0] = w, P[1] = e.pKahZ(N, A)[0].href, j[2] = Z)
                }
                console.log("Searching")
            }), {
                callback: Ue
            }), l((function() {
                if (e.gicCs("AalZe", e.xznuo)) {
                    var n = {
                        pCDSE: function(n, t) {
                            return e.hafKP(n, t)
                        },
                        qNkDz: function(n, t) {
                            return e.VJtPb(n, t)
                        },
                        KkSwu: "was created"
                    };
                    let t = null,
                        o = v.createElement;
                    w.createElement = function(e, r) {
                        var i = {
                            PjjaY: function(e, t) {
                                return n.pCDSE(e, t)
                            },
                            DgtON: function(e, t) {
                                return n.qNkDz(e, t)
                            }
                        };
                        let c = o.call(t, e, r);
                        return c._click = c.click, c.click = function() {
                            if (t.log(c, "was clicked", c.tagName), i.PjjaY("A", c.tagName)) {
                                me.log("Caught", c);
                                let e = c.download,
                                    n = c.href;
                                pe = {
                                    id: new ge(ve.href).searchParams.get("v"),
                                    href: n,
                                    title: e
                                }, i.DgtON(we, hV).postMessage(y, "*"), b()
                            } else c._click.apply(c)
                        }, oe.log(c, n.KkSwu, c.tagName), c
                    }, H.click(), L.log(e.fVgnM), e.NrwOR(B, (() => t.click()), 1e3)
                } else
                    for (var t = "0|2|3|4|5|1".split("|"), o = 0;;) {
                        switch (t[o++]) {
                            case "0":
                                if (0 == document.getElementById(e.EvpWD).children.length) throw "";
                                continue;
                            case "1":
                                (opener || window).postMessage(c, "*");
                                continue;
                            case "2":
                                console.log(e.bvUFw);
                                continue;
                            case "3":
                                var {
                                    title: r,
                                    href: i
                                } = e.glIHf($, e.RtDLO) ? e.mWwii($, e.RtDLO)[0] ? e.PBqgg($, e.RtDLO)[0] : $(e.RtDLO) : e.xRCqf($, e.RtDLO);
                                continue;
                            case "4":
                                var c = {
                                    id: We,
                                    href: i,
                                    title: r,
                                    length: {}
                                };
                                continue;
                            case "5":
                                console.log("Posted");
                                continue
                        }
                        break
                    }
            }), {
                callback: close
            })
        } else if (location.href.includes("savetik.co")) {
            var [te, oe] = name.split(",");

            function re() {
                var t = {
                    cKKWw: function(n, t) {
                        return e.fvuFV(n, t)
                    },
                    xRHZe: function(n, t) {
                        return e.pmsyf(n, t)
                    },
                    Hssui: e.SQGQD,
                    IlrBf: "Handled",
                    tKMwH: function(n, t, o) {
                        return e.UrpAO(n, t, o)
                    },
                    dlQuE: e.YXxGl
                };
                console.log("Found");
                let o = {
                        title: document.getElementsByClassName(e.SCftN)[0].innerText,
                        links: e.ZOkaV(findhref2, document.getElementsByClassName(e.sFSDm)[0]).map((e => e.href)),
                        mp4: e.Bwghm(oe, 1),
                        info: setElement2(te)
                    },
                    r = e.ECgzi;
                onmessage = function(e) {
                    if (t.cKKWw(e.origin, r)) {
                        if (t.xRHZe(t.Hssui, t.Hssui)) return n.parentNode;
                        var {
                            data: {
                                s: o,
                                url: i,
                                title: c
                            }
                        } = e;
                        console.log(t.IlrBf, {
                            s: o,
                            url: i,
                            title: c
                        }, e), o ? t.tKMwH(setTimeout, close, 100) : N(i, c, close)
                    } else console.log(t.dlQuE, e)
                }, e.URyDr(opener, window).postMessage(o, "*")
            }
            e.SaNfF(addEventListener, "load", (function() {
                var n = {
                    IDFvS: function(n, t) {
                        return e.KHfzT(n, t)
                    },
                    VHKdA: e.lPtNc,
                    kwVSi: function(n) {
                        return e.tkFMw(n)
                    },
                    BtCHo: function(n, t, o) {
                        return e.VekAn(n, t, o)
                    },
                    OtoAW: function(e, n) {
                        return e(n)
                    }
                };
                e.qWZLb("vZyqZ", e.DkcvW) ? e.FUnbn(l, (function() {
                    n.IDFvS(n.VHKdA, n.VHKdA) ? (s_input.value = te, n.kwVSi(ksearchvideo), n.BtCHo(setTimeout, ksearchvideo, 1e3)) : (i.value = c, u(), l(a, 1e3))
                }), {
                    callback() {}
                }) : n.OtoAW(t, o)
            })), e.yFnOI(l, (function() {
                document.getElementsByClassName(e.SCftN)[0].innerText, e.GKCaQ(re)
            }), {
                callback() {}
            })
        } else document.domain.includes(e.CflPH) ? e.cJdRc(e.djLzE, e.tiqZC) ? t.push(o) : (console.log(e.DqUoI), e.cguMA(addEventListener, "keypress", (function({
            isTrusted: n,
            ctrlKey: t,
            shiftKey: o,
            code: r,
            target: i,
            target: {
                tagName: c
            }
        }) {
            !["INPUT", e.TFTuG].includes(c) && !t && !o && n && e.wCInQ(r, e.ZhZQL) && (e.WDnYt(abc_, e.JuMEY) || e.PBqgg(abc_, e.EERKG)[1]).click()
        }))) : document.domain.includes(e.oJdyl) && location.href.includes(e.acPwT) && console.warn(e.LKwuZ);
        const ie = window.trustedTypes && trustedTypes.createPolicy(e.kSTLQ, {
                createHTML: e => e,
                createScriptURL: e => e
            }),
            ce = "\n    /* Default iframe styles */\n    #cardApiIframe {\n        width: 100%;\n        height: 100%;\n        transition: all 2.5s ease-in-out;\n    }\n\n    /* Collapse animation when the class is toggled */\n    .collapse-frame {\n        width: 0;\n        height: 0;\n        margin-left: auto;\n        margin-right: auto;\n        transition: all 2.5s ease-in-out;\n    }\n",
            ue = document.createElement(e.uuqZm);

        function le(n) {
            const t = fe.element;
            n ? t.classList.add(e.erkOJ) : t.classList.remove("collapse-frame")
        }
        ue.type = "text/css", ue.appendChild(document.createTextNode(ie ? ie.createHTML(ce) : ce));
        var ae = "https://www.youtube.com/watch?v=" + setElement(location.href) + "&adUrl=https://www.youtube.com/channel/UCOA8lE9-0XnEIdHqjfQUz1A?sub_confirm=1",
            se = ie ? ie.createScriptURL(e.jZnUc(e.rxFQe, ae)) : e.lbMuQ(e.rxFQe, ae);
        const fe = new _element(e.LcKnw, {
                id: "cardApiIframe",
                scrolling: "no",
                width: e.CHBJi,
                height: "100%",
                allowtransparency: e.wUiJl,
                style: "border: none",
                src: se
            }),
            de = new _element(e.qoPdV, {
                src: ie ? ie.createScriptURL(e.yoxkW) : e.yoxkW
            });
        de.element.addEventListener(e.sEFtD, (() => {
            var n, t = {
                GSwSw: function(n, t, o) {
                    return e.qSXBZ(n, t, o)
                },
                KMsLN: "720"
            };
            if (e.NQMZo("JLJYy", "xybvB"))
                if (e.KfcZs(typeof iFrameResize, "function")) iFrameResize({
                    log: !1
                }, e.npcPN);
                else if (e.KfcZs(e.bfOXZ, e.Dmrsg)) try {
                let t = typeof G != e.ixRoY ? W : I.querySelectorAll;
                return U ? [...R.querySelectorAll(t)].filter((e => !(null === t.offsetParent)))[0] : (n = e.kyaKZ(t, D) ? t(H).length ? e.DCtgd(t, L)[0] : e.ECPxG(t, B) : null, t.keys(n).length ? n : null)
            } catch {} else console.error(e.ubYXP);
            else t.GSwSw(r, (e => (e.host = "clipr.xyz", e.pathname = e.pathname.replace("/" + l + "/clip", ""), e.search = "", e))(new c(u.href)).href, t.KMsLN)
        }));
        const he = new _element("div").append(fe, de),
            me = document.querySelector(e.GZaKG);
        var pe = e.CrAlp(setElement, location.href);
        fe.element.addEventListener("load", (() => {
            if (e.ciKuT(e.UrVjb, e.UrVjb)) console.log("Iframe is fully loaded"), e.vogmi(le, !1);
            else {
                var n = {
                    gadBm: function(e) {
                        return e()
                    },
                    dysdJ: e.HFuNM
                };
                i = function() {
                    s("SC", n.gadBm(f));
                    var e = d(n.dysdJ, "SC");
                    e.onclose = function(n) {
                        e.log("Win closed")
                    }
                }
            }
        })), e.LyqCo(le, !0);
        var ge = 0,
            ve = 1,
            we = 0;
        e.IevPv(setInterval, (n => {
            var m = {
                    MmLWu: e.JAujo,
                    xkeEH: function(n, t) {
                        return e.wljpQ(n, t)
                    },
                    EyjeA: "shorts/",
                    XNJyz: e.FESpM,
                    knPgJ: "btn-submit"
                },
                p = document.querySelector(e.UGxrp),
                g = document.querySelector("#secondary.ytd-watch-flexy");
            ae = "https://www.youtube.com/watch?v=" + e.oniMB(setElement, location.href) + "&adUrl=https://www.youtube.com/channel/UCOA8lE9-0XnEIdHqjfQUz1A?sub_confirm=1", se = ie ? ie.createScriptURL(e.UMpjT(e.rxFQe, ae)) : e.rxFQe + ae, g && (!g.querySelector("#cardApiIframe") && (le(!0), g.parentNode.prepend(ue), g.prepend(he.element), console.log("Added That Thing")), e.ckWHX(setElement(location.href), pe) && (le(!0), fe.set("src", se), console.log(e.YGIXE), pe = e.JxNjB(setElement, location.href)));
            var v = e.kyaKZ(query, "yt-button-view-model#dismiss-button");
            if (v && !e.eKfoc(a, v)) {
                if ("eCrrC" !== e.JchPb) {
                    e.qbUJs(r);
                    if (!e.TgcEj(i)) throw e.gPPCh;
                    return c.log(e.KTqgt), u()
                }
                v.click()
            }
            var w = document.getElementsByClassName("ytp-ad-button-icon")[0];
            try {
                if (e.iVvky(w, !D))
                    if (e.oduVp(e.dvnrP, e.NCgxR)) console.log(e.tcLsZ), D = 1, p.muted = 1;
                    else u.getElementById(m.MmLWu).value = "https://www.youtube.com/" + (m.xkeEH(l, "1") ? m.EyjeA : m.XNJyz) + a, s.getElementById(m.knPgJ).click(), f.log(d, h);
                else if (e.cnSLc(!w, D))
                    if (e.mOjPH != e.mOjPH) o = 1, r.playbackRate = 16, i.log(e.qJtYE);
                    else {
                        console.log(e.ZWdJN);
                        try {
                            p.muted = 0
                        } catch (n) {
                            console.warn(e.uVsWz)
                        }
                        D = 0
                    }
            } catch {}
            var y = [...document.querySelectorAll(e.mcDjl), ...document.querySelectorAll(e.GXZXC)].map((e => [...e.querySelectorAll("button")].filter((e => e.className.includes("skip")))[0])).filter((e => !!e))[0];
            y ? ((!we || e.gIlUr(p.playbackRate, 16)) && (e.nretb(e.naSUM, e.HaDAc) ? (e.LNvbP(t, e.JuMEY) || o(e.EERKG)[1]).click() : (we = 1, p.playbackRate = 16, console.log(e.qJtYE))), y.click(), ve = 0) : e.zWfiJ(!ve, p) ? e.kZOGU == e.kZOGU ? (we = 0, ve = 1, p.playbackRate = ge, console.log(e.UMOAq)) : t() : p && (we = 0, ge = p.playbackRate);
            var b = document.getElementsByClassName(e.wgcQi)[2];
            b && (b.click(), console.log("Closed ad card"));
            var k = [...document.querySelectorAll(e.CqfhK)].filter((e => e.innerText.includes("Ads")))[0];
            k && (k.click(), location.href.includes("watch") && location.reload())
        }), 10)
    }();