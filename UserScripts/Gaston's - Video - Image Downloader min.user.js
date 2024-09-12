// ==UserScript==
// @name Gaston's - Video/Image Downloader
// @namespace http://tampermonkey.net/
// @version 5.9
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
(function(e, n) {
    for (var t = 259, r = 260, o = "$^zq", i = 256, c = 262, u = 250, l = Y, a = Y, s = I, f = I, d = I, h = T();;) try {
        if (126817 === -parseInt(s(t, "pRDA")) / 1 * (-parseInt(s(258, "@5pX")) / 2) + parseInt(l(248)) / 3 + parseInt(f(263, "@UCF")) / 4 * (parseInt(s(255, "D7s7")) / 5) + -parseInt(a(r)) / 6 + -parseInt(d(261, o)) / 7 * (parseInt(a(i)) / 8) + parseInt(a(c)) / 9 + parseInt(a(251)) / 10 * (-parseInt(l(u)) / 11)) break;
        h.push(h.shift())
    } catch (e) {
        h.push(h.shift())
    }
})(),
function() {
    var e = {
        TDtYG: "---",
        MjejA: "darkgrey",
        RlOLU: "1rem",
        BaXxv: function(e, n) {
            return e !== n
        },
        eIFaU: function(e, n, t) {
            return e(n, t)
        },
        ZEWon: "1080",
        ECwjT: function(e, n) {
            return e !== n
        },
        EdjPE: function(e, n) {
            return e(n)
        },
        KkITL: "NPoTT"
    };
    Object.assign(this || arguments[0], {
        CustomLog: class {
            constructor(n) {
                this.title = {
                    body: n || e.TDtYG,
                    color: e.MjejA,
                    size: e.RlOLU
                }, this.body = {
                    color: "#008f68",
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
                return e.BaXxv(n, void 0) && (this.title.color = n), void 0 !== t && (this.title.size = t), this
            }
            setBodyStyle({
                color: n,
                size: t
            }) {
                return e.BaXxv(n, void 0) && (this.body.color = n), e.ECwjT(t, void 0) && (this.body.size = t), this
            }
            log(n = "") {
                if (e.ECwjT(e.KkITL, e.KkITL)) {
                    var t = {
                        txyzV: function(n, t) {
                            return e.EdjPE(n, t)
                        }
                    };
                    A.children.length && (N = H.children, Z.forEach = [].forEach, J.forEach((e => {
                        t.txyzV(X, e)
                    })))
                } else console.log("%c" + this.title.body + " | %c" + n, "color: " + this.title.color + "; font-weight: bold; font-size: " + this.title.size + ";", "color: " + this.body.color + "; font-weight: bold; font-size: " + this.body.size + "; text-shadow: 0 0 5px rgba(0,0,0,0.2);")
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

function T() {
    var e = ["mtbhu3zKtKi", "ntu2nZH6EKf0D1G", "WPv2tSoRzgWLFW", "mJmWodjzuMXJzeO", "WOSDsNNdVSoWW7X1W7a", "nZjTy0PIrKq", "W6vYW6ldS1pdIZNcNa", "WPBdQmkHdmooEspdQ8kerLm", "fw9Cf8ktW5JdUWy", "mJmYnZu4tuX3ALbo", "WRFdHYhdMmkjW5qxW4FcUmoaWQC", "mty3mtmWmevmqNfovW", "obxdVSkiW7DLFSkkWQZcKq", "nJq4oda3ueTKqMPr", "WQ/dV8koWQ/cR8oqWP/cHCow", "ntmZntuZovrLD05Lua"];
    return (T = function() {
        return e
    })()
}
console.log("ok");
var adev, set_, CurrentPlayingSymbol = "▶";

function getV(e, n) {
    var t = {
        TRSCO: function(e, n) {
            return e(n)
        },
        uMXDr: function(e, n, t) {
            return e(n, t)
        }
    };
    return t.TRSCO(GM_getValue, e) || (t.uMXDr(GM_setValue, e, n), n)
}

function setV(e, n) {
    ! function(e, n, t) {
        e(n, t)
    }(GM_setValue, e, n)
}
async function getFinalUrlFromServer(e) {
    var n = {
        NheTO: function(e, n) {
            return e(n)
        },
        Nvmog: ".autoplay",
        KdKjl: "#header-description",
        CzVjX: function(e, n, t) {
            return e(n, t)
        },
        geQdN: "http://localhost:3000/get-final-url",
        PjQFx: "POST",
        fbrNn: "application/json",
        LAGxY: function(e, n) {
            return e !== n
        },
        xTQQT: "LyYIa",
        RRoKi: "Failed to fetch final URL",
        NiMLS: "LKega"
    };
    try {
        const t = await n.CzVjX(fetch, n.geQdN, {
            method: n.PjQFx,
            headers: {
                "Content-Type": n.fbrNn
            },
            body: JSON.stringify({
                url: e
            })
        });
        if (!t.ok) {
            if (!n.LAGxY(n.xTQQT, n.xTQQT)) throw new Error(n.RRoKi);
            t.push(r)
        }
        const r = await t.json();
        return r.finalUrl
    } catch (e) {
        return n.LAGxY(n.NiMLS, "LKega") ? !(![...O.querySelectorAll("#header-description")].filter(w).filter((e => !a(e)))[0] && !n.NheTO(p, n.Nvmog)) && ([...N.querySelectorAll(n.KdKjl)].filter(H).filter((e => !a(e)))[0] || n.NheTO(J, n.Nvmog)) : (console.error("Error:", e), null)
    }
}

function I(e, n) {
    var t = T();
    return I = function(n, r) {
        var o = t[n -= 248];
        if (void 0 === I.XaIaEi) {
            I.AvPKwe = function(e, n) {
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
            }, e = arguments, I.XaIaEi = !0
        }
        var i = n + t[0],
            c = e[i];
        return c ? o = c : (void 0 === I.YGozqn && (I.YGozqn = !0), o = I.AvPKwe(o, r), e[i] = o), o
    }, I(e, n)
}

function getCurrentVideoID() {
    var e, n = {
        FQVqn: "INPUT",
        LeRfC: function(e, n) {
            return e == n
        },
        vFIAk: function(e, n) {
            return e(n)
        },
        qqYEK: "keypress",
        vwoVl: function(e, n) {
            return e === n
        },
        nNNty: "Opening",
        zrUsX: function(e) {
            return e()
        },
        TiIFR: "Closiung",
        VLvhA: "ytp-playlist-menu-button ytp-button",
        XkzkR: "Not Found!"
    };
    return [...document.getElementsByClassName("ytp-video-menu-item ytp-button")].forEach(((t, r) => {
        var o = {
            YIluG: n.FQVqn,
            EtHcw: function(e, t) {
                return n.LeRfC(e, t)
            },
            SHCzg: function(e, t) {
                return n.vFIAk(e, t)
            },
            sIXpk: n.qqYEK
        };
        if (n.vwoVl("iwTyZ", "iwTyZ")) t.innerText.startsWith(CurrentPlayingSymbol) && (e = new URL(t.href).searchParams.get("v"));
        else {
            var i = {
                AamaR: o.YIluG,
                WWdvI: function(e, n) {
                    return o.EtHcw(e, n)
                },
                Brxcu: function(e, n) {
                    return o.SHCzg(e, n)
                },
                ytRif: "Close player page"
            };
            o.log("Added MiniPlayer Toggle with I"), V(o.sIXpk, (function({
                isTrusted: e,
                ctrlKey: n,
                shiftKey: t,
                code: r,
                target: o,
                target: {
                    tagName: c
                }
            }) {
                ![i.AamaR, "TEXTAREA"].includes(c) && !n && !t && e && i.WWdvI(r, "KeyI") && (i.Brxcu(P, i.ytRif) || i.Brxcu(p, "Open player page")[1]).click()
            }))
        }
    })), !e && document.getElementsByClassName("ytp-playlist-menu-button ytp-button")[0] ? (console.log(n.nNNty), document.getElementsByClassName("ytp-playlist-menu-button ytp-button")[0].click(), n.zrUsX(getCurrentVideoID)) : e ? (console.log(n.TiIFR), document.getElementsByClassName(n.VLvhA)[0].click(), e) : console.warn(n.XkzkR)
}

function Y(e, n) {
    var t = T();
    return Y = function(n, r) {
        var o = t[n -= 248];
        if (void 0 === Y.yLFTVo) {
            Y.PogOIu = function(e) {
                for (var n, t, r = "", o = "", i = 0, c = 0; t = e.charAt(c++); ~t && (n = i % 4 ? 64 * n + t : t, i++ % 4) ? r += String.fromCharCode(255 & n >> (-2 * i & 6)) : 0) t = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(t);
                for (var u = 0, l = r.length; u < l; u++) o += "%" + ("00" + r.charCodeAt(u).toString(16)).slice(-2);
                return decodeURIComponent(o)
            }, e = arguments, Y.yLFTVo = !0
        }
        var i = n + t[0],
            c = e[i];
        return c ? o = c : (o = Y.PogOIu(o), e[i] = o), o
    }, Y(e, n)
}

function sleep(e) {
    return new Promise((n => setTimeout(n, e)))
}
_getV = getV, _setV = setV, Number.prototype.decimal = function(e) {
    return Number(this.toFixed(e))
}, getSoundCloudUrl = () => {
    var e = {
        ZlRrF: "Fixed playBack",
        WvYKu: function(e, n) {
            return e(n)
        },
        rYTCg: "#app > div.playControls.g-z-index-control-bar.m-visible > section > div > div.playControls__elements > div.playControls__soundBadge.sc-ml-3x > div",
        WUByY: function(e, n) {
            return e !== n
        },
        QLGwr: "GVfQM",
        euoqQ: "suEAd"
    };
    try {
        return e.WvYKu(findhref2, document.querySelector(e.rYTCg))[0].href
    } catch {
        if (e.WUByY(e.QLGwr, e.euoqQ)) return;
        V = 0, A = 1, B.playbackRate = O, w.log(e.ZlRrF)
    }
}, async function() {
    var e = {
        iobbI: function(e, n) {
            return e(n)
        },
        gzSOh: function(e, n) {
            return e !== n
        },
        rueRr: "WZFwp",
        xLoXl: "jnRpA",
        bDaxn: function(e) {
            return e()
        },
        CFeQk: function(e, n, t, r, o, i) {
            return e(n, t, r, o, i)
        },
        nxzRC: "was clicked",
        jbeqO: function(e, n) {
            return e == n
        },
        QPLqu: function(e, n) {
            return e || n
        },
        dYtxY: "embedMP3",
        yVGYE: "innerText",
        QGdfq: "fixed",
        bdnhD: "80%",
        cSOxN: ".ytp-right-controls",
        xvyWQ: function(e, n) {
            return e === n
        },
        cJXpl: "ShYjF",
        PKONU: "button",
        IMSsF: "GetAudio",
        HnnTu: "Download MP3",
        XYWLi: "click",
        ZedGy: function(e, n, t) {
            return e(n, t)
        },
        UicFU: ".playbackSoundBadge__actions",
        ppslQ: function(e, n) {
            return e(n)
        },
        lTzJs: "/embed/",
        DNsie: "Attaching to embeder >:]"
    };
    async function i(n, t = 3e4) {
        var r;
        for (sleep(t).then((e => r = !0)); !document.querySelector(n) && (await e.iobbI(sleep, 0), !r););
        return document.querySelector(n)
    }
    return location.href.includes(e.lTzJs) ? (console.log(e.DNsie), e.ppslQ(i, ".ytp-right-controls").then((async c => {
        var u = {
            ttkoZ: function(n, t) {
                return e.gzSOh(n, t)
            },
            BnfCM: e.rueRr,
            XMijE: e.xLoXl,
            Ufogw: function(n) {
                return e.bDaxn(n)
            },
            Ojemb: function(n, t) {
                return e.iobbI(n, t)
            },
            kGGRG: function(n, t, r, o, i, c) {
                return e.CFeQk(n, t, r, o, i, c)
            },
            dSjGt: e.nxzRC,
            rkAkr: function(n, t) {
                return e.jbeqO(n, t)
            },
            cxVhG: "Caught",
            NEhUQ: function(n, t) {
                return e.QPLqu(n, t)
            }
        };
        let a = new _e("button", {
            id: e.dYtxY
        }).appendTo(c).set(e.yVGYE, "MP3").on("click", (function() {
            if (u.ttkoZ(u.BnfCM, u.XMijE)) {
                let e = u.Ufogw(getCurrentVideoID) || u.Ojemb(setElement, location.href);
                u.kGGRG(downloadT, e, !1, !0, !1, !0)
            } else i().click()
        })).style({
            position: e.QGdfq,
            right: "50%",
            top: e.bdnhD
        });
        for (; !document.getElementById(e.dYtxY) && document.querySelector(e.cSOxN);)
            if (e.xvyWQ(e.cJXpl, e.cJXpl)) console.log("Appended"), a.appendTo(e.cSOxN);
            else if (X.log(x, u.dSjGt, S.tagName), u.rkAkr("A", t.tagName)) {
            r.log(u.cxVhG, o);
            let e = h.download,
                t = U.href;
            Q = {
                id: new n(j.href).searchParams.get("v"),
                href: t,
                title: e
            }, u.NEhUQ(C, K).postMessage(l, "*"), u.Ufogw(b)
        } else D._click.apply(m)
    }))) : (document.querySelector(e.cSOxN), await e.ZedGy(i, e.UicFU, 5e3).then((async n => {
        let t = new _e(e.PKONU, {
            id: e.IMSsF
        }).appendTo(n).set(e.yVGYE, e.HnnTu).on(e.XYWLi, (function() {
            downloadSC()
        }), (e => e));
        for (;;) !document.getElementById(e.IMSsF) && await e.ZedGy(i, e.UicFU, 5e3) && await e.ZedGy(i, ".playbackSoundBadge__actions", 5e3).then((e => {
            t.appendTo(e), console.log("Added Button")
        })), await e.ppslQ(sleep, 0)
    })))
}().then(console.log, console.warn), downloadSC = function() {
    var e = {
        BhFMr: function(e, n, t) {
            return e(n, t)
        },
        GnaWT: "SCinfo",
        JhcRn: function(e, n, t) {
            return e(n, t)
        },
        vNGsm: function(e, n) {
            return e(n)
        },
        vFxvp: "https://sclouddownloader.net/"
    };
    e.BhFMr(GM_setValue, e.GnaWT, null), e.BhFMr(GM_setValue, "sc", getSoundCloudUrl()), set_ || (set_ = 1, e.JhcRn(GM_addValueChangeListener, "SCinfo", (function(e, n, t, r) {
        console.log({
            a: e,
            b: n,
            c: t,
            d: r
        }), t && t.name && _downloadFileAsTitle(t.href, t.name)
    }))), e.vNGsm(open, e.vFxvp)
}, GM_setValue_ = GM_setValue, GM_getValue_ = GM_getValue, GM_info_ = GM_info;
var UnmutePath = "M3.15,3.85l4.17,4.17L6.16,9H3v6h3.16L12,19.93v-7.22l2.45,2.45c-0.15,0.07-0.3,0.13-0.45,0.18v1.04 c0.43-0.1,0.83-0.27,1.2-0.48l1.81,1.81c-0.88,0.62-1.9,1.04-3.01,1.2v1.01c1.39-0.17,2.66-0.71,3.73-1.49l2.42,2.42l0.71-0.71 l-17-17L3.15,3.85z M11,11.71v6.07L6.52,14H4v-4h2.52l1.5-1.27L11,11.71z M10.33,6.79L9.62,6.08L12,4.07v4.39l-1-1V6.22L10.33,6.79 z M14,8.66V7.62c2,0.46,3.5,2.24,3.5,4.38c0,0.58-0.13,1.13-0.33,1.64l-0.79-0.79c0.07-0.27,0.12-0.55,0.12-0.85 C16.5,10.42,15.44,9.1,14,8.66z M14,5.08V4.07c3.95,0.49,7,3.85,7,7.93c0,1.56-0.46,3.01-1.23,4.24l-0.73-0.73 C19.65,14.48,20,13.28,20,12C20,8.48,17.39,5.57,14,5.08z",
    mutePath = "M17.5,12c0,2.14-1.5,3.92-3.5,4.38v-1.04c1.44-0.43,2.5-1.76,2.5-3.34c0-1.58-1.06-2.9-2.5-3.34V7.62 C16,8.08,17.5,9.86,17.5,12z M12,4.07v15.86L6.16,15H3V9h3.16L12,4.07z M11,6.22L6.52,10H4v4h2.52L11,17.78V6.22z M21,12 c0,4.08-3.05,7.44-7,7.93v-1.01c3.39-0.49,6-3.4,6-6.92s-2.61-6.43-6-6.92V4.07C17.95,4.56,21,7.92,21,12z";

function downloadFile_(e, n) {
    const t = document.createElement("a");
    t.href = e, t.download = n, document.body.appendChild(t), t.click(), document.body.removeChild(t)
}
async function downloadVideo(n, r) {
    var o = {
        aVjLz: function(e, n) {
            return e != n
        },
        LajzM: "undefined",
        VqTlH: function(e, n) {
            return e(n)
        },
        iPalL: function(e, n) {
            return e(n)
        },
        khsqw: function(e, n) {
            return e === n
        },
        hehgt: function(e, n) {
            return e instanceof n
        },
        Uruhy: function(e, n) {
            return e >= n
        },
        VKLDF: function(e, n) {
            return e - n
        },
        uxpUm: function(e, n) {
            return e >= n
        },
        mDOXi: function(e, n) {
            return e <= n
        },
        Oacrc: function(e, n) {
            return e + n
        },
        kjome: function(e, n) {
            return e / n
        },
        PanAP: function(e, n) {
            return e <= n
        },
        mfOBl: function(e, n) {
            return e(n)
        },
        oqCoM: function(e, n) {
            return e === n
        },
        sIlGD: "wOsPP",
        xAXzM: "ZLCIh",
        kJvSV: "Failed to download video:"
    };
    try {
        const e = await o.mfOBl(fetch, n);
        if (!e.ok) {
            if (o.oqCoM(o.sIlGD, o.sIlGD)) throw new Error("HTTP error! Status: " + e.status); {
                let e = o.aVjLz(typeof N, o.LajzM) ? H : Z.querySelectorAll;
                return J ? [...G.querySelectorAll(q)].filter((n => !(null === e.offsetParent)))[0] : (n => e.keys(n).length ? n : null)(o.VqTlH(e, X) ? e(x).length ? o.VqTlH(e, S)[0] : o.iPalL(e, t) : null)
            }
        }
        const i = e.url,
            c = await e.blob(),
            u = window.URL.createObjectURL(c),
            l = document.createElement("a");
        l.href = u, l.download = r, document.body.appendChild(l), l.click(), document.body.removeChild(l), window.URL.revokeObjectURL(u), console.log("Video downloaded from: " + i)
    } catch (n) {
        if ("ZLCIh" !== o.xAXzM) {
            o.khsqw(typeof Z, "function") && o.hehgt(J, a) && (f = c[0]);
            var i = S.getBoundingClientRect();
            return o.Uruhy(i.top, o.VKLDF(0, (t.innerHeight || G.documentElement.clientHeight) / 2)) && o.uxpUm(i.left, 0) && o.mDOXi(i.bottom, o.Oacrc(q.innerHeight || d.documentElement.clientHeight, o.kjome(W.innerHeight || e.documentElement.clientHeight, 2))) && o.PanAP(i.right, u.innerWidth || L.documentElement.clientWidth)
        }
        console.error(o.kJvSV, n)
    }
}
_downloadFileAsTitle = async function(e, n, r, o) {
        var i = {
            MzaHR: function(e, n, t, r, o, i) {
                return e(n, t, r, o, i)
            },
            afXPr: "MP3",
            kHfmf: "click",
            ATvuV: "50%",
            HRPbD: "80%",
            MYhfH: ".ytp-right-controls",
            fwPyO: "Attaching to embeder >:]",
            IwhZd: function(e, n) {
                return e(n)
            },
            whyVJ: function(e, n) {
                return e === n
            },
            zgTCS: "HEqUc",
            rZwhK: "_blank",
            UHkCU: function(e, n) {
                return e || n
            },
            IeycH: "function",
            qkVFG: function(e) {
                return e()
            },
            mHuno: function(e) {
                return e()
            },
            BClBJ: "QPjCs",
            sSWhn: "none"
        };
        const c = document.createElement("a");
        return c.style.display = i.sSWhn, document.body.appendChild(c), fetch(e).then((e => e.blob())).then((l => {
            if (i.whyVJ(i.zgTCS, "YtGcO")) {
                var a = {
                    KZPQv: function(e, n) {
                        return e(n)
                    },
                    JNeoK: function(e, n, t, r, o, c) {
                        return i.MzaHR(e, n, t, r, o, c)
                    },
                    pzMwE: "button",
                    nnIQl: "embedMP3",
                    mmBGp: i.afXPr,
                    fEGaA: i.kHfmf,
                    YjxPY: "fixed",
                    gqpAS: i.ATvuV,
                    dqIPd: i.HRPbD,
                    VCdux: i.MYhfH
                };
                return P.log(i.fwPyO), i.IwhZd(p, i.MYhfH).then((async e => {
                    let n = new t(a.pzMwE, {
                        id: a.nnIQl
                    }).appendTo(e).set("innerText", a.mmBGp).on(a.fEGaA, (function() {
                        let t = f() || a.KZPQv(e, n.href);
                        a.JNeoK(e, t, !1, !0, !1, !0)
                    })).style({
                        position: a.YjxPY,
                        right: a.gqpAS,
                        top: a.dqIPd
                    });
                    for (; !e.getElementById(a.nnIQl) && u.querySelector(a.VCdux);) f.log("Appended"), n.appendTo(a.VCdux)
                }))
            } {
                const t = URL.createObjectURL(l);
                c.href = t, c.download = n, c.target = i.rZwhK, c.click(), URL.revokeObjectURL(t), (i.UHkCU(r, opener) || window).postMessage({
                    url: e,
                    title: n,
                    s: !0
                }, "*"), (typeof o).includes(i.IeycH) && i.qkVFG(o)
            }
        })).catch((t => {
            i.BClBJ == i.BClBJ ? (console.error("Error downloading file:", t), (i.UHkCU(r, opener) || window).postMessage({
                url: e,
                title: n,
                s: !1
            }, "*")) : i.mHuno(n)
        }))
    }, _downloadFile_ = downloadFile_, query = function(e, n) {
        var t = {
            SCUKP: function(e, n) {
                return e != n
            },
            WtFJZ: function(e, n) {
                return e(n)
            },
            dNowr: function(e, n) {
                return e(n)
            }
        };
        try {
            let r = t.SCUKP(typeof $, "undefined") ? $ : document.querySelectorAll;
            return n ? [...document.querySelectorAll(e)].filter((e => !(null === el.offsetParent)))[0] : (e => Object.keys(e).length ? e : null)(t.WtFJZ(r, e) ? t.dNowr(r, e).length ? r(e)[0] : r(e) : null)
        } catch {}
    }, getElementByAttribute = function(e, n = "aria-label", t = document.body) {
        var r = {
                LMdhH: function(e, n) {
                    return e !== n
                },
                VdqUK: "dzcmT",
                sIFqg: function(e, n) {
                    return e(n)
                },
                jKQBZ: function(e, n) {
                    return e != n
                },
                Zjcaz: function(e, n) {
                    return e !== n
                },
                jQpzD: "UcopH",
                NQrmj: function(e, n) {
                    return e == n
                },
                FZPYe: function(e, n) {
                    return e === n
                },
                EquFa: "kmnYP",
                BJmkb: function(e, n) {
                    return e === n
                },
                JOpCy: "obYse",
                onfxC: function(e, n) {
                    return e == n
                }
            },
            o = [];
        return function i(c) {
            var u = {
                bbkNi: function(e, n) {
                    return r.LMdhH(e, n)
                },
                ZcJoA: "KVQLp",
                lgqZc: r.VdqUK,
                GlpJt: function(e, n) {
                    return e(n)
                },
                CqXzl: function(e, n) {
                    return r.sIFqg(e, n)
                },
                NQvrS: function(e, n) {
                    return r.jKQBZ(e, n)
                }
            };
            if (r.Zjcaz("UcopH", r.jQpzD)) n.click();
            else if (r.NQrmj(c.getAttribute(n), e)) o.push(c);
            else if (r.FZPYe(r.EquFa, r.EquFa)) c.children.length && (r.BJmkb(r.JOpCy, "obYse") ? ((c = c.children).forEach = [].forEach, c.forEach((e => {
                u.bbkNi(u.ZcJoA, u.lgqZc) ? u.GlpJt(i, e) : this.element.style[r] = o[i]
            }))) : u.CqXzl(t, r));
            else var l = "",
                a = u.CqXzl(o, (e => {
                    u.NQvrS(l, l.innerText) && (l = l.innerText, a("dlbutton", l))
                }))
        }(t), r.onfxC(o.length, 1) ? o[0] : o || !1
    }, get_aria_label = function(e, n = document.body) {
        var t = {
                wfczA: function(e, n) {
                    return e(n)
                },
                vPGGL: function(e, n) {
                    return e == n
                },
                XmvDu: "aria-label",
                NXARj: function(e, n) {
                    return e !== n
                },
                tinae: "tpRoH"
            },
            r = [];
        return t.wfczA((function o(i) {
            if (t.vPGGL(i.getAttribute(t.XmvDu), e)) r.push(i);
            else {
                if (t.NXARj("tpRoH", t.tinae)) return n.querySelectorAll("._acaz");
                i.children.length && ((i = i.children).forEach = [].forEach, i.forEach((e => {
                    t.wfczA(o, e)
                })))
            }
        }), n), r[0] || !1
    }, getClass = function(e) {
        return document.getElementsByClassName("ehlq8k34")[0]
    },
    function() {
        var e = {
            ybErN: function(e, n) {
                return e(n)
            },
            DoJuB: function(e, n) {
                return e < n
            },
            GSQjf: function(e, n, t) {
                return e(n, t)
            },
            KloSK: function(e, n) {
                return e === n
            },
            zEtmy: "dAqxy",
            LqOGh: "ynAnN",
            Uxjjv: "Caught",
            hqqJQ: function(e, n) {
                return e || n
            },
            waJDg: function(e, n) {
                return e !== n
            },
            hmCQL: "CsENf",
            TNEHo: "MCvFt",
            Wdveu: function(e, n) {
                return e < n
            },
            wbxCJ: "QjRou",
            xUtKE: "Appending:",
            rKCay: function(e, n) {
                return e !== n
            },
            turFd: "LwLzt",
            xQbHp: "LyPMT",
            mKUxB: function(e, n) {
                return e > n
            },
            lQDme: "VcscB",
            cXjMM: "UogdJ",
            XtAYH: "input",
            AxRbs: "focus",
            gXiDC: "change",
            wCgYV: "blur",
            pRrvZ: function(e, n) {
                return e === n
            },
            hircz: "yUvaY",
            tjuxK: "Handled",
            MmtyJ: function(e, n, t) {
                return e(n, t)
            },
            grRvS: function(e) {
                return e()
            },
            nWfJp: "IKmDv",
            gEEww: function(e, n, t) {
                return e(n, t)
            },
            GDEwt: "xPvLG",
            pQLAU: "LqwNn",
            hHSGz: function(e, n) {
                return e !== n
            },
            znTSJ: "QYiNv",
            MFfMx: "zGIkB",
            OWQDR: "Replying to ",
            liEPR: function(e, n, t) {
                return e(n, t)
            },
            ZdpSe: "data-e2e",
            rHqGX: function(e, n, t) {
                return e(n, t)
            },
            mvVdb: "browse-video-desc",
            uHnKr: "#main-content-video_detail > div > div.css-12kupwv-DivContentContainer.ege8lhx2 > div.css-1senhbu-DivLeftContainer.ege8lhx3 > div.css-1sb4dwc-DivPlayerContainer.eqrezik4 > div.css-3lfoqn-DivDescriptionContentWrapper-StyledDetailContentWrapper.eqrezik15 > div.css-r4nwrj-DivVideoInfoContainer.eqrezik3 > div.css-bs495z-DivWrapper.e1mzilcj0 > div > h1",
            qbdws: "#yDmH0d > c-wiz > div > div > div:nth-child(2) > div.LLEp8b > div > div.rTq3hb > div:nth-child(1) > div > div.ofmULb > div:nth-child(2) > div > button",
            EdMFM: function(e, n, t) {
                return e(n, t)
            },
            KJnKy: "Why this ad?",
            aqzwi: function(e, ...n) {
                return e(...n)
            },
            KrHnZ: function(e, n) {
                return e(n)
            },
            rHKop: function(e, n, t, r) {
                return e(n, t, r)
            },
            IegRA: "dMgqh",
            eXIAg: function(e, n) {
                return e === n
            },
            USSGl: "function",
            FoSDU: function(e, n) {
                return e instanceof n
            },
            bRXJa: "FVHDs",
            pPrRa: function(e, n) {
                return e >= n
            },
            tYqoh: function(e, n) {
                return e - n
            },
            tzDvJ: function(e, n) {
                return e / n
            },
            NUeOH: function(e, n) {
                return e + n
            },
            EsmZF: function(e, n) {
                return e <= n
            },
            ivXmI: "xSIQg",
            BmtNV: function(e) {
                return e()
            },
            PQxdi: "btn-download",
            OCslP: function(e, n) {
                return e === n
            },
            ZCYHk: "DNyDG",
            rgHCy: "MHkTH",
            bYHou: function(e, n) {
                return e !== n
            },
            CAFbK: "zKUgY",
            jnAXo: function(e, n) {
                return e < n
            },
            jSImj: "vzgpt",
            vAXvs: function(e, n) {
                return e === n
            },
            vDwWz: function(e, n) {
                return e == n
            },
            spcQl: function(e, n) {
                return e === n
            },
            eNYRO: "RMWgP",
            riQPP: "bIgew",
            LvOvX: function(e, n) {
                return e(n)
            },
            CCcby: "Qmhft",
            ZgZey: "UCrLU",
            iDlsY: "aubKf",
            YOyGU: function(e, n) {
                return e == n
            },
            zgwLL: function(e, n) {
                return e !== n
            },
            vcEgY: "zdYyJ",
            WLCwA: "tQVyM",
            AtdPU: function(e, n) {
                return e(n)
            },
            ihLMp: function(e) {
                return e()
            },
            xhsAv: "Added playlist buttons",
            sHLWL: "buttons are gone?!?!",
            pzhNR: "button",
            fbuiw: "MediaButton",
            yhUGr: "innerText",
            rTcFc: "Get Images",
            pWcls: "MediaButton2",
            IwoWS: "Get Videos",
            miQHM: "click",
            YNYIJ: "._aaqy",
            HMRTe: "rpQZr",
            ptcar: function(e, n) {
                return e(n)
            },
            VBKcb: "._acaz",
            tnzla: "video.x1lliihq",
            UhzHp: "Go back",
            EjpNr: "._afxv",
            JbKXo: function(e, n) {
                return e(n)
            },
            ATqur: "Next",
            mcEMf: "._afxw",
            NvmBG: "was clicked",
            dTQeR: "VVWhu",
            YmMQM: "bpGVQ",
            zjAmy: ".xt0psk2.xvs91rp.xo1l8bm.x5n08af.x18hxmgj",
            Lpqyy: function(e, n) {
                return e < n
            },
            pOLYp: function(e, n) {
                return e === n
            },
            EFpnn: "video/mp4",
            TMvDl: "none",
            Tsmkd: ".mp4",
            Tecjo: "tcHvr",
            lNrCf: "blob:",
            bhehN: function(e, n) {
                return e * n
            },
            fRUeL: "Invalid video element or source.",
            jfyOz: "2|3|0|1|4",
            PbADO: "Got",
            mnyqP: "reel",
            LkGci: "https://fastdl.app/en",
            IcGbm: "instaURL",
            pvBkN: function(e, n, t) {
                return e(n, t)
            },
            ItiaJ: "img",
            oEliw: "alt",
            cOJzL: "oOSlq",
            WoXnP: function(e) {
                return e()
            },
            PnCaM: function(e, n) {
                return e(n)
            },
            PKoig: "OHtBB",
            rqeLV: function(e) {
                return e()
            },
            YyQxy: function(e, n) {
                return e(n)
            },
            bBjxX: function(e, n) {
                return e !== n
            },
            yhyHz: "dkrIL",
            eRBWD: "Closed ad card",
            hgeyS: function(e, n) {
                return e == n
            },
            vKcfx: function(e, n) {
                return e == n
            },
            vmJqd: "https://sss.instasaverpro.com",
            waihc: function(e, n) {
                return e == n
            },
            QKjXk: "https://y2mate.nu",
            XnpER: function(e, n) {
                return e == n
            },
            nOLNf: function(e, n) {
                return e + n
            },
            HxnMc: ".mp3",
            ymhTn: "Get MP3",
            ycvPE: "disabled",
            mCRnO: "Getting video",
            fAERX: function(e, n) {
                return e(n)
            },
            FPuXc: "Unhandled Post",
            QAmnU: function(e, n, t) {
                return e(n, t)
            },
            PfQHn: function(e, n) {
                return e === n
            },
            dCZVQ: function(e, n) {
                return e !== n
            },
            fzkap: function(e, n) {
                return e(n)
            },
            cwFBx: "#search-form-input",
            fAkxx: "dfcbV",
            wwghA: "pPsAM",
            zdVmY: "Cant find input",
            nEhaW: function(e, n, t) {
                return e(n, t)
            },
            iNJDt: ".search-form__button",
            DRqXG: ".button--filled",
            qckyT: "Win closed",
            BTuJP: function(e) {
                return e()
            },
            ceMsv: function(e, n) {
                return e === n
            },
            KelkD: "ZuqqW",
            OvORc: function(e, n) {
                return e(n)
            },
            TKBRo: function(e, n, t, r, o, i, c) {
                return e(n, t, r, o, i, c)
            },
            clAyG: "UDjxy",
            PAMBV: "Get",
            FmNnX: "ZRsNe",
            jTjid: "#video-list",
            JJgCj: function(e, n) {
                return e != n
            },
            BFEoK: "Change?",
            kzXYK: "Found",
            sZtVk: "Not FOund",
            jLloR: ".cell-body.tablecell-visibility.style-scope.ytcp-video-row",
            umxqv: "Public",
            Pciao: function(e, n) {
                return e(n)
            },
            RSesk: "4|3|2|1|0",
            RdIdF: ".xh8yej3.x1iyjqo2",
            hVxOw: "Appended buttons man",
            yyGyM: function(e, n) {
                return e !== n
            },
            TlnvM: "syMpy",
            lkEkq: "collapse-frame",
            qewFU: function(e, n) {
                return e === n
            },
            wCtNX: "ktoTU",
            tNnfs: "govPz",
            ebAyG: "#MediaButton",
            cgCoy: function(e) {
                return e()
            },
            ifmYy: function(e) {
                return e()
            },
            hutaz: function(e, n) {
                return e(n)
            },
            drsFb: "2|3|1|0|4",
            Ahcss: function(e, n, t) {
                return e(n, t)
            },
            aCJZS: "UmnXi",
            ezRSe: "EUGLv",
            cKZkz: function(e, n) {
                return e == n
            },
            JTeqS: "/download-sound-track",
            pERkx: "KZsYz",
            oJoof: "#trackTitle",
            yzPdH: "#trackLink",
            ckPEy: function(e, n) {
                return e(n)
            },
            WkTZA: "Bruv",
            bEnGZ: "#urlInput",
            MGQvT: "#submitBtn",
            ycwJF: function(e, n, t) {
                return e(n, t)
            },
            oCzYd: function(e, n) {
                return e === n
            },
            AMJwJ: "wLYFB",
            BVEfT: "Juuof",
            igrFF: "1|0|3|4|6|2|5",
            sexvh: "EZ url",
            xxMRD: "undefined",
            DbAzS: function(e) {
                return e()
            },
            eflhG: "lazy",
            HJNve: "no-referrer",
            TsARU: "allow-same-origin allow-scripts allow-popups allow-forms",
            ilJpC: "absolute",
            vdREi: function(e, n, t) {
                return e(n, t)
            },
            UdOVX: "y2mate.nu",
            vwUcE: "TimeOut for",
            npueh: function(e, n) {
                return e + n
            },
            cURWJ: "?v=",
            Vxgrf: "&s=",
            XtPAZ: "/shorts/",
            SEzRT: "&mp4=",
            IepOF: "mp4",
            oZTrh: "&useT=",
            QQWsv: "src",
            yhCoT: "Myzrs",
            HQhBX: "GDOlc",
            SeLmF: "YfwfQ",
            pYfcp: "CaTon",
            vyHQL: "NotFound",
            eNCXG: "Error downloading file:",
            ZcBZs: "wOgot",
            joOCl: "yBPVT",
            ZSHZl: "Posted",
            hHxdy: function(e, n, t) {
                return e(n, t)
            },
            oiWae: "div",
            lSvTl: function(e) {
                return e()
            },
            PpELB: function(e, n) {
                return e !== n
            },
            wXipF: "ziJAN",
            JQAMi: function(e, n) {
                return e === n
            },
            hretb: "TSozq",
            oGBwH: function(e, n) {
                return e != n
            },
            XKeIw: "complete",
            hCyGm: function(e, n) {
                return e(n)
            },
            DLQLK: "NGyTK",
            caRXd: function(e, n) {
                return e(n)
            },
            massW: "#url",
            RoLOK: "after url",
            sCBKJ: function(e, n) {
                return e(n)
            },
            AimBi: "#progress",
            rZxbE: "Error:",
            XrIfi: function(e, n) {
                return e === n
            },
            Qhfgt: "rTLSf",
            sDjKn: "No id Found",
            nDlsw: function(e, n) {
                return e(n)
            },
            DcfRh: function(e, n) {
                return e !== n
            },
            JGqGr: "HogIf",
            svluP: "Muted ad",
            qbJGe: function(e, n) {
                return e === n
            },
            DRBPE: "rYAnK",
            amLot: "was created",
            BYFHB: "div.x78zum5.xdt5ytf.x1iyjqo2.xs83m0k.x2lwn1j.x1odjw0f.x1n2onr6.x9ek82g.x6ikm8r.xdj266r.x11i5rnm.x4ii5y1.x1mh8g0r.xexx8yu.x1pi30zi.x18d9i69.x1swvt13 > ul > div:nth-child(3) > div > div",
            EUJJN: "iFrameResize function not available",
            IAhxv: "hcFig",
            ndEop: "ooWsX",
            amdeU: "KSvKT",
            wjwXf: "vidbutton",
            hwOfl: function(e, n, t) {
                return e(n, t)
            },
            pJQcW: "dlbutton",
            KWOIg: function(e, n, t) {
                return e(n, t)
            },
            CzCxK: "#downloadBtn",
            uRumf: function(e, n) {
                return e - n
            },
            zTrgj: function(e, n) {
                return e != n
            },
            VpFXo: function(e) {
                return e()
            },
            KBghF: "fRWOd",
            zchqh: "Best Quality Video",
            NTzBu: "#height",
            GsPbc: function(e, n, t) {
                return e(n, t)
            },
            WJqXV: "?!!",
            YswZH: function(e, n) {
                return e instanceof n
            },
            rlJaP: "Provided argument is not a DOM element.",
            wMHLX: function(e, n, t) {
                return e(n, t)
            },
            HujVk: "#s_input",
            daYAW: function(e, n) {
                return e !== n
            },
            dKHJM: "KRCnh",
            RyYuw: "tmSSu",
            Otzjq: "4|12|11|0|10|6|1|3|15|14|5|13|16|9|7|2|8|17",
            xWZoJ: "Converting",
            SXCEL: "#asuccess",
            dkYlj: function(e, n) {
                return e(n)
            },
            TvwLA: "#formatSelect",
            DoQhs: function(e, n) {
                return e(n)
            },
            PvzIv: ".clearfix",
            wfZfF: function(e, n, t) {
                return e(n, t)
            },
            UApyr: function(e) {
                return e()
            },
            epoaV: "href",
            FMbyE: function(e, n) {
                return e || n
            },
            ntnQj: function(e, n) {
                return e !== n
            },
            ohKzi: "QOTbS",
            BJKDz: "gzvcG",
            YIzbl: "Input was not Found",
            mLvkY: function(e, n, t) {
                return e(n, t)
            },
            QUjFV: "RQbXp",
            XFBwU: "yRNlD",
            pJpSs: function(e, n, t, r, o, i, c) {
                return e(n, t, r, o, i, c)
            },
            uIrcC: "miIal",
            gTTJF: "PSeQr",
            pegJe: function(e, n) {
                return e === n
            },
            kHvnX: "PfxfN",
            fokud: "nXTGd",
            JdSAa: "720",
            czdeB: function(e, n, t) {
                return e(n, t)
            },
            fuPzp: "360",
            xfUOR: function(e, n, t) {
                return e(n, t)
            },
            htDaA: function(e, n, t) {
                return e(n, t)
            },
            HFzTw: function(e, n) {
                return e === n
            },
            abloR: function(e) {
                return e()
            },
            sAVRd: function(e, n) {
                return e(n)
            },
            YQncT: "TkNxR",
            xfrGi: function(e, n) {
                return e(n)
            },
            CQANg: ".ScCoreButtonLabel-sc-s7h2b7-0",
            mftnv: "720P",
            mLMGk: "480P",
            oxGJJ: "360P",
            kruZF: "VOD",
            nyhew: "UtZHu",
            IwWje: "wdMsd",
            pMQnP: function(e, n) {
                return e instanceof n
            },
            REjVU: function(e, n, t) {
                return e(n, t)
            },
            CKssF: function(e, n) {
                return e(n)
            },
            ykAbc: "1080P",
            remAL: function(e, n) {
                return e(n)
            },
            FiRgQ: function(e, n) {
                return e(n)
            },
            wRiCi: function(e, n) {
                return e(n)
            },
            ukMjC: function(e, n, t) {
                return e(n, t)
            },
            cxpGj: "480",
            QwlPc: "CTbYS",
            jztwA: function(e, n) {
                return e(n)
            },
            JORdh: function(e, n) {
                return e(n)
            },
            FdReq: function(e, n) {
                return e === n
            },
            Jncwd: "jIGie",
            VpuSx: "SHEIF",
            AKVJL: function(e, n) {
                return e != n
            },
            ONLgI: "QzJay",
            wwYJC: function(e) {
                return e()
            },
            hdHJa: "body > div.relative.overflow-hidden > main > div > div.px-4.mx-auto.max-w-7xl.sm\\:px-6.lg\\:px-8 > div.overflow-hidden.bg-white.rounded-xl.shadow > div > div > div:nth-child(2) > ul > div > li:nth-child(1) > div:nth-child(3) > a",
            mLAjS: "body > div.relative.overflow-hidden > main > div > div.px-4.mx-auto.max-w-7xl.sm\\:px-6.lg\\:px-8 > div.overflow-hidden.bg-white.rounded-xl.shadow > div > div > div:nth-child(2) > ul > div > li:nth-child(2) > div:nth-child(3) > a",
            AZpeH: "body > div.relative.overflow-hidden > main > div > div.px-4.mx-auto.max-w-7xl.sm\\:px-6.lg\\:px-8 > div.overflow-hidden.bg-white.rounded-xl.shadow > div > div > div:nth-child(2) > ul > div > li:nth-child(3) > div:nth-child(3) > a",
            sLKGK: "body > div.relative.overflow-hidden > main > div > div.px-4.mx-auto.max-w-7xl.sm\\:px-6.lg\\:px-8 > div.overflow-hidden.bg-white.rounded-xl.shadow > div > div > div:nth-child(2) > ul > div > li:nth-child(4) > div:nth-child(3) > a",
            olmRF: "body > div.relative.overflow-hidden > main > div > div.px-4.mx-auto.max-w-7xl.sm\\:px-6.lg\\:px-8 > div.mb-6.space-y-3.lg\\:flex.lg\\:items-center.lg\\:justify-between.lg\\:space-y-0 > div.lg\\:flex.lg\\:items-center > h2",
            hjrGw: function(e, n) {
                return e(n)
            },
            MRxTE: function(e, n) {
                return e(n)
            },
            OljDu: function(e, n) {
                return e + n
            },
            sNcfJ: function(e, n) {
                return e + n
            },
            GDfVl: "win",
            wMQDN: "AOtnK",
            wwkCl: function(e, n) {
                return e(n)
            },
            SezGr: "bAuVB",
            TdcmE: function(e, n) {
                return e || n
            },
            BUyVg: "XJicl",
            JoDVq: "XbIlB",
            RaqGm: function(e, n) {
                return e(n)
            },
            eStDR: "#convert",
            dUwUl: function(e, n) {
                return e(n)
            },
            uetDW: ".download-button",
            yKHOZ: "OVUXF",
            GnWkJ: "UEvdI",
            Edhql: "music",
            UvrhH: "These button dont work on youtube music yet",
            zpgIL: "ytd-playlist-panel-renderer",
            kNcOD: function(e, n, t) {
                return e(n, t)
            },
            ncLQs: "span",
            swSvf: function(e, n) {
                return e === n
            },
            kGDUU: "sMmOz",
            JndyF: "https://tubemp4.is",
            JkcIr: function(e, n) {
                return e !== n
            },
            qcvsY: "OyKhq",
            vMPCR: "https://y2mate.nu/",
            OshYI: "mp3",
            AMmrw: "YYBkR",
            bywkw: "autoplay; fullscreen; geolocation; microphone; camera",
            KiMsm: function(e, n, t) {
                return e(n, t)
            },
            EHSqb: function(e, n) {
                return e || n
            },
            ZSgUH: ".com",
            aTEfA: "mz.com",
            zsFvi: "0HzX",
            OHYIG: function(e, n, t, r) {
                return e(n, t, r)
            },
            IYGwI: "unload",
            hFXol: function(e, n, t, r) {
                return e(n, t, r)
            },
            pernU: "https://yt5s.biz/enxj100/",
            URPlP: "SOpyC",
            xhaNi: function(e, n) {
                return e(n)
            },
            BXtfn: "#cardApiIframe",
            szGmJ: function(e, n) {
                return e != n
            },
            QJptI: "Fixed That Thing",
            APfGP: "rJjlN",
            byDlk: function(e) {
                return e()
            },
            zkboR: "https://savetik.co/en",
            LFPRg: function(e, n) {
                return e + n
            },
            DRRHy: "isclosed",
            LWZWE: "https://savetik.co",
            jTZGV: "BhvCT",
            ICBgk: " - ",
            SXBpg: "UVFYG",
            RuqwD: "dfcKq",
            mtOwV: "PPLHj",
            XKSvB: "ewaIO",
            llaPY: "sAtCW",
            DGkNF: "Searching",
            SEneh: "uNFvK",
            ZsOes: "tVfOJ",
            HUGmx: function(e, n) {
                return e(n)
            },
            Rsxnm: function(e, n) {
                return e || n
            },
            DOZVE: ".ytp-volume-area > .ytp-mute-button",
            DlatF: "Mute",
            tuEdB: "title",
            MqWTi: "#right-controls",
            oGFZx: "Unmute",
            NjwPm: function(e, n, t) {
                return e(n, t)
            },
            ijeoh: "Unmute (m)",
            HRfGs: function(e, n) {
                return e(n)
            },
            mvQlk: function(e, n) {
                return e(n)
            },
            utWCz: "convert1",
            zzsue: "bxkCY",
            gbzMM: "TDbOI",
            qkkIF: "aEwnp",
            fAJpf: function(e, n) {
                return e === n
            },
            EDcsI: "rBQBB",
            TJKbD: "cVLZU",
            kJoqz: function(e, n) {
                return e(n)
            },
            uawZz: "jImcv",
            Pbyxa: function(e, n) {
                return e !== n
            },
            Vwokg: "RfzPo",
            mYlwH: function(e, n) {
                return e(n)
            },
            FLzGv: function(e, n, t, r, o) {
                return e(n, t, r, o)
            },
            CqTsC: function(e, n) {
                return e(n)
            },
            KjdFo: function(e, n) {
                return e === n
            },
            lBVoH: "cynAe",
            WtSmO: "UMEfm",
            UoJvE: "bTkzt",
            reEQk: "Wait...",
            pfFRo: function(e, n, t, r, o, i) {
                return e(n, t, r, o, i)
            },
            jAVTA: function(e, n) {
                return e(n)
            },
            idoho: function(e, n, t, r) {
                return e(n, t, r)
            },
            xmigU: function(e, n, t, r) {
                return e(n, t, r)
            },
            kUOjS: function(e, n) {
                return e === n
            },
            lSSZn: "vvSEd",
            ISqDg: function(e, n, t) {
                return e(n, t)
            },
            xTcvh: function(e, n) {
                return e(n)
            },
            GVMaX: "ehlq8k34",
            wEItl: function(e, n) {
                return e(n)
            },
            fZtTU: function(e, n) {
                return e(n)
            },
            TOkhm: function(e, n) {
                return e === n
            },
            nUoPJ: "RvNAn",
            nfQTG: "#end",
            KvBEO: "#right-content",
            UeCeY: "#header-description",
            lOBnU: ".autoplay",
            XIOqn: "JPGzS",
            iHJIw: function(e, n) {
                return e === n
            },
            RDgeE: "LapAv",
            jbDHx: function(e, n) {
                return e != n
            },
            DFjJG: function(e) {
                return e()
            },
            OHizq: "qTtgf",
            IGCyG: "ArohV",
            ouhtT: function(e, n, t) {
                return e(n, t)
            },
            uodaQ: function(e) {
                return e()
            },
            PXnug: function(e, n, t) {
                return e(n, t)
            },
            viMgK: "error-text",
            nxYKL: "clearfix",
            EcSVj: "https://www.tiktok.com",
            ARfUz: "PeumC",
            PmNsW: "Posted Buttons",
            BiCBO: function(e, n, t) {
                return e(n, t)
            },
            pOUcV: function(e, n) {
                return e !== n
            },
            hEqgD: "owkJx",
            iTkcH: function(e) {
                return e()
            },
            TIhbw: "hHpkT",
            vFlng: "WOQsV",
            tSqcB: function(e, n, t) {
                return e(n, t)
            },
            gNdbg: ".e1mecfx011",
            ufDjg: "Added Button",
            MJbRd: "WyKdL",
            WFDhF: "jIUip",
            TGzMt: function(e) {
                return e()
            },
            OZliL: "kqUvx",
            djUQg: function(e) {
                return e()
            },
            FUEYa: function(e) {
                return e()
            },
            EFJlr: function(e, n, t) {
                return e(n, t)
            },
            uYKye: "kiytb",
            VAGcq: "ytp-video-menu-item ytp-button",
            aSbvo: "ytp-playlist-menu-button ytp-button",
            jYSPd: "Closiung",
            GSlAa: function(e) {
                return e()
            },
            BCdVz: "e13wiwn60",
            FugUT: "load",
            clhzi: "jwuHY",
            MidEX: "shorts/",
            omngB: "watch?v=",
            NeXps: function(e) {
                return e()
            },
            hMhqg: "Title: ",
            GtyRm: function(e, n) {
                return e(n)
            },
            GwvdT: function(e, n) {
                return e || n
            },
            HCCYY: "Poasted",
            MpMnZ: function(e, n) {
                return e > n
            },
            rLKTe: "#app > div.css-14dcx2q-DivBodyContainer.e1irlpdw0 > div:nth-child(4) > div > div.css-1qjw4dg-DivContentContainer.e1mecfx00 > div.css-1stfops-DivCommentContainer.ekjxngi0 > div > div.css-1xlna7p-DivProfileWrapper.ekjxngi4 > div.css-1u3jkat-DivDescriptionContentWrapper.e1mecfx011 > div.css-1nst91u-DivMainContent.e1mecfx01 > div.css-bs495z-DivWrapper.e1mzilcj0",
            QvXna: "QfHxH",
            NNFer: "UZDpn",
            SOOzJ: function(e, n, t) {
                return e(n, t)
            },
            LNUEF: "search_txt",
            PLRwj: "btn-submit",
            Vqyep: function(e, n, t) {
                return e(n, t)
            },
            cEuDH: "browse-copy",
            bdsrU: "no there",
            bszML: "LrupK",
            xNOCn: "4|2|1|3|0",
            icnCx: ".media-heading",
            EOaBp: function(e, n) {
                return e === n
            },
            xexan: "OiEIC",
            TWocj: function(e, n) {
                return e !== n
            },
            hOVvC: "qTmrP",
            ArhLU: "xQXDb",
            QAaub: "rEtRJ",
            ISSOm: function(e, n) {
                return e(n)
            },
            Hpjqs: function(e, n) {
                return e < n
            },
            JmcSm: function(e, n) {
                return e(n)
            },
            JFuaD: "No info Preset",
            vDghh: "Input Loaded",
            rrkdo: "#txt-url",
            NYeJv: "GEtting res",
            GVfYh: "#btn-submit",
            XKXMa: "#video_title",
            mcDNu: "Got Res",
            skKDj: "#result",
            Yirkf: "table",
            WeYVc: function(e, n) {
                return e === n
            },
            TPTut: "lmGih",
            xRXLU: function(e, n) {
                return e || n
            },
            VnjaR: function(e, n) {
                return e == n
            },
            QNWfp: "LRTlL",
            afKVQ: "ekLpC",
            jqgay: function(e, n) {
                return e === n
            },
            tORfc: "DraRd",
            GlRph: "wNGYx",
            PcqSo: "#A_downloadUrl",
            oQlhl: "Done",
            xUhih: "#myModalLabel",
            LOLZC: function(e, n) {
                return e || n
            },
            HrJNR: function(e, n) {
                return e(n)
            },
            KzYYw: "XGpPH",
            UgRev: "XKpCR",
            cnXSJ: "texturl",
            YNrrA: function(e, n) {
                return e == n
            },
            tYJtY: "Searched",
            MPLNb: "this",
            VWCYn: "1|5|0|4|3|2",
            Wqjxj: "#download-720-MP4",
            GVUjA: function(e, n) {
                return e(n)
            },
            OeKxb: function(e, n) {
                return e(n)
            },
            Skagu: function(e, n) {
                return e == n
            },
            BZIMc: "form-app-root",
            CnDXY: "kpEWN",
            CZYqO: "uruXG",
            aPGHO: function(e, n) {
                return e == n
            },
            iRdjV: function(e, n, t) {
                return e(n, t)
            },
            KuDNr: function(e) {
                return e()
            },
            UcPWR: "INPUT",
            LDYJu: "TEXTAREA",
            OHTfs: function(e, n) {
                return e == n
            },
            bFwvq: "KeyI",
            swMjB: "Smcdg",
            dCblO: function(e, n) {
                return e(n)
            },
            qSfRK: "Open player page",
            Mjsin: "#app > div.playControls.g-z-index-control-bar.m-visible > section > div > div.playControls__elements > div.playControls__soundBadge.sc-ml-3x > div",
            muAqz: "cWgaL",
            Edsid: "XUOgb",
            kDlqk: "xhaAV",
            DtKBa: "UDHLI",
            VhSRH: "FUUsB",
            wKSaT: function(e, n) {
                return e === n
            },
            rOhTA: function(e, n, t) {
                return e(n, t)
            },
            TdjzA: "Iframe is fully loaded",
            rmbYT: function(e, n) {
                return e(n)
            },
            Hyzmc: "Doesnt work yet",
            LZQVA: function(e, n, t, r, o, i, c) {
                return e(n, t, r, o, i, c)
            },
            BnXVV: function(e, n) {
                return e(n)
            },
            akzjk: function(e, n, t, r, o, i) {
                return e(n, t, r, o, i)
            },
            PBfCh: function(e) {
                return e()
            },
            KwPDZ: function(e, n) {
                return e(n)
            },
            GkUKD: "embedMP3",
            QAOjc: "MP3",
            QoMGS: "80%",
            uCoYP: "#secondary.ytd-watch-flexy",
            AlNHv: function(e, n) {
                return e(n)
            },
            NDvdX: "https://loader.to/api/card2/?url=",
            nKyHp: function(e, n) {
                return e === n
            },
            rlcOf: "EiEaa",
            mbWHW: "Added That Thing",
            jRUSC: function(e, n) {
                return e(n)
            },
            wuVgd: function(e, n) {
                return e(n)
            },
            jlWtA: function(e, n) {
                return e(n)
            },
            ZlzVF: function(e, n) {
                return e(n)
            },
            ahQaQ: "ytp-ad-button-icon",
            QzjeM: function(e, n) {
                return e && n
            },
            TGKYs: function(e, n) {
                return e === n
            },
            DNFiI: "wzlfn",
            mCsmX: "ixbIW",
            HVVFj: "IRTnh",
            jSMmW: "Unmuted video",
            RugCt: "eZbCl",
            jnwMv: "Failed unmuting",
            EBJwl: "#song-video",
            PcOWB: "#ytd-player",
            ZAUHS: "VsWLI",
            IMxTG: "cfLwY",
            OmqWv: "Skipping ad :>",
            mlsJy: "DKPws",
            EaHUn: "ytp-ad-overlay-close-button",
            OhHOM: "https://onlymp3.app",
            mihnP: "/watch?=",
            oJuqX: "fastdl.app",
            JlUyM: function(e, n) {
                return e === n
            },
            dBzMJ: "FbLtc",
            OTfQx: "yRdmU",
            pVyVY: function(e, n) {
                return e == n
            },
            IRMJH: "soundcloud.com",
            VRorr: function(e, n) {
                return e == n
            },
            mvIqt: "studio.youtube.com",
            AiOpc: function(e, n) {
                return e == n
            },
            DIcLo: "amQzl",
            hObVv: "ZOxly",
            OZiyo: function(e, n, t) {
                return e(n, t)
            },
            kfCUt: "Insta ballz",
            SaJxH: function(e, n) {
                return e == n
            },
            CVdXH: "sclouddownloader.net",
            Nugkw: function(e, n) {
                return e == n
            },
            yhqWt: function(e, n, t) {
                return e(n, t)
            },
            rZhqB: function(e, n) {
                return e == n
            },
            qRsDk: "useT",
            JgjWq: function(e, n) {
                return e + n
            },
            iWzlJ: "qdownloader.cc",
            fVezk: function(e, n) {
                return e == n
            },
            mAYHy: "GVOtg",
            dDCvB: function(e, n) {
                return e == n
            },
            ILAre: "clips.twitch.tv",
            bTDdV: "www.twitch.tv",
            RsnQl: function(e, n) {
                return e === n
            },
            pPeuG: "pziFe",
            QQKtN: function(e, n) {
                return e != n
            },
            IYNJU: "User isnt wathcing a clip",
            RXKCu: "User is Watching a CLip",
            FmhzL: function(e, n) {
                return e == n
            },
            xHNlo: "tubemp4.is",
            nEJpH: "IlSyT",
            AFLpk: "Get MP4",
            zbyqs: "PlayList MP4",
            oyVwJ: "tt1",
            apiXZ: "white",
            IBmAG: "bruh",
            uSlRX: "youtube",
            xvpnB: "onlymp3.to",
            UqPlQ: "kCTtx",
            YkwUp: "Getting MP3",
            UXvWf: "www.yt2conv.com",
            SnPZe: "Getting MP4",
            vtOjK: function(e, n, t) {
                return e(n, t)
            },
            IZslL: "yt5s.biz",
            YFdLD: "sss.instasaverpro.com",
            ksoBS: "en3.onlinevideoconverter.pro",
            tkCJz: "NO info Preset",
            CuUWG: function(e, n) {
                return e == n
            },
            tZXAA: function(e, n, t) {
                return e(n, t)
            },
            DePVA: function(e, n, t) {
                return e(n, t)
            },
            VfyPa: "savetik.co",
            TOGYh: "Added MiniPlayer Toggle with I",
            Aaupm: function(e, n, t) {
                return e(n, t)
            },
            cTAST: "keypress",
            RlsgK: "loader.to",
            FnlSx: "/api/",
            TyVcr: "using loader.to api",
            pTgpJ: function(e, n) {
                return e(n)
            },
            RSwhP: function(e, n) {
                return e + n
            },
            tRvZC: "iframe",
            KbONs: "cardApiIframe",
            sIlBK: "100%",
            MOlfS: "true",
            XrWZk: "border: none",
            ICXfC: "script",
            dnEcl: "https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.9/iframeResizer.min.js",
            KwEfv: function(e, n, t) {
                return e(n, t)
            }
        };
        class n {
            static get br() {
                return new n("br")
            }
            constructor(n, t) {
                var r = {
                    TvtAr: function(n, t) {
                        return e.ybErN(n, t)
                    },
                    IQqCg: function(n, t) {
                        return e.DoJuB(n, t)
                    },
                    NMSem: function(n, t, r) {
                        return e.GSQjf(n, t, r)
                    },
                    cDAqq: function(n, t) {
                        return e.KloSK(n, t)
                    },
                    fVGAU: e.zEtmy,
                    MHVAZ: e.LqOGh,
                    PdZlT: "JGDhg"
                };
                this.element = n.constructor.name.includes("HTML") && n || function() {
                    var e = {
                        HTVWf: function(e, n) {
                            return r.TvtAr(e, n)
                        },
                        rpuRB: function(e, n) {
                            return r.IQqCg(e, n)
                        },
                        wegOn: function(e, n, t) {
                            return r.NMSem(e, n, t)
                        }
                    };
                    if (!r.cDAqq(r.fVGAU, r.MHVAZ)) {
                        for (let n in arguments[1]) r.PdZlT == r.PdZlT ? arguments[0].setAttribute(n, arguments[1][n]) : (s.log({
                            a: f,
                            b: d,
                            c: h,
                            d: m
                        }), p && v.name && e.wegOn(P, z.href, L.name));
                        return arguments[0]
                    }
                    var n = a.innerText.match(/(?<res>\d+)(p|P)/i) || {};
                    n.groups && (n = e.HTVWf(w, n.groups.res), e.rpuRB(U[0], n) && (P[0] = n, z[1] = e.HTVWf(L, G)[0].href, D[2] = j))
                }(document.createElement(arguments[0]), arguments[1])
            }
            style(e) {
                for (let n in e) this.element.style[n] = e[n];
                return this
            }
            append(n, ...t) {
                var c = {
                    UFCck: e.Uxjjv,
                    kLShX: function(n, t) {
                        return e.hqqJQ(n, t)
                    },
                    mhzpi: function(e) {
                        return e()
                    },
                    enFpH: "was created"
                };
                if (e.waJDg(e.hmCQL, e.TNEHo)) {
                    this.element.append(n.element || n), console.log("T:", {
                        targets: t,
                        fe: t && t.forEach
                    });
                    for (let n = 0; e.Wdveu(n, t.length); n++) {
                        if (e.KloSK("bWIvY", e.wbxCJ)) {
                            let e = m.call(p, v, g);
                            return e._click = e.click, e.click = function() {
                                if (e.log(e, "was clicked", e.tagName), "A" == e.tagName) {
                                    W.log(c.UFCck, e);
                                    let n = e.download,
                                        t = e.href;
                                    K = {
                                        id: new Z(ee.href).searchParams.get("v"),
                                        href: t,
                                        title: n
                                    }, c.kLShX(ne, oe).postMessage(ie, "*"), c.mhzpi(ce)
                                } else e._click.apply(e)
                            }, I.log(e, c.enFpH, e.tagName), e
                        } {
                            let r = t[n];
                            console.log(e.xUtKE, {
                                element: r,
                                target: this
                            }), this.element.append(r.element || r)
                        }
                    }
                    return this
                }
                r.push(o), i = 1
            }
            appendTo(n) {
                if (e.rKCay(e.turFd, e.xQbHp)) return (n.element || "string" == typeof n ? document.querySelector(n) : n).append(this.element), this;
                arguments[0].setAttribute(t, arguments[1][r])
            }
            on(n, t) {
                if (e.lQDme !== e.cXjMM) return this.element["on" + n] = t, this;
                e.mKUxB(i.data.size, 0) && (s.push(f.data), d.log(h.data))
            }
            set(e, n) {
                return this.element[e] = n, this
            }
            remove() {
                if (!e.pRrvZ(e.hircz, "QXAuz")) return this.element.remove(), this; {
                    var n = {
                        lAYSX: function(n, t) {
                            return e.KloSK(n, t)
                        },
                        hoVOd: e.XtAYH
                    };
                    const t = [e.AxRbs, e.XtAYH, e.gXiDC, e.wCgYV];
                    t.forEach((e => {
                        let r = new t(e, {
                            bubbles: !0,
                            isTrusted: !0
                        });
                        h["on" + e] && m["on" + e](r), n.lAYSX(e, n.hoVOd) && (w.value = U), g.dispatchEvent(r)
                    }))
                }
            }
            get() {
                e.tjuxK;
                return this.element[arguments[0]]
            }
            get children() {
                var t = {
                    lqcrt: function(e, n) {
                        return e < n
                    },
                    NRhtn: function(n) {
                        return e.grRvS(n)
                    },
                    FrNuC: function(n, t, r) {
                        return e.MmtyJ(n, t, r)
                    },
                    qSZqr: function(n, t) {
                        return e.KloSK(n, t)
                    },
                    jExoj: "xTQnb",
                    ATIuW: e.nWfJp,
                    TNhUq: function(n, t, r) {
                        return e.gEEww(n, t, r)
                    },
                    tqmgF: e.GDEwt,
                    GuQWi: e.pQLAU,
                    uFvZh: function(n, t) {
                        return e.Wdveu(n, t)
                    },
                    FzUFL: function(n, t) {
                        return e.KloSK(n, t)
                    }
                };
                if (e.hHSGz(e.znTSJ, "DCBjo")) return new class {
                    constructor(e) {
                        for (var n = 0; t.lqcrt(n, e.length); n += 1) this[n] = e[n];
                        Object.defineProperty(this, "length", {
                            get: function() {
                                return e.length
                            }
                        }), Object.freeze(this)
                    }
                    item(e) {
                        var n = {
                            iYWYw: function(e) {
                                return t.NRhtn(e)
                            },
                            xKIIF: "Added playlist buttons",
                            zhwTk: function(e, n, r) {
                                return t.FrNuC(e, n, r)
                            }
                        };
                        if (!t.qSZqr(t.jExoj, t.ATIuW)) return null != this[e] ? this[e] : null;
                        var r = {
                            khbrv: function(e) {
                                return n.iYWYw(e)
                            },
                            wuFeI: function(e) {
                                return e()
                            }
                        };
                        l.log(n.xKIIF), n.zhwTk(a, (() => {
                            r.khbrv(v).append(g.br.element), r.khbrv(w).append(U.element), r.wuFeI(P).append(z.element)
                        }), 100)
                    }
                    namedItem(e) {
                        var n, c = {
                            CrObz: function(e, n, r) {
                                return t.TNhUq(e, n, r)
                            }
                        };
                        if (t.tqmgF !== t.GuQWi) {
                            for (var u = 0; t.uFvZh(u, this.length); u += 1)
                                if (t.qSZqr(this[u].id, e) || t.FzUFL(this[u].name, e)) return this[u];
                            return null
                        }
                        c.CrObz(r, (e => e.href)(((n = new o(i.href)).host = "clipr.xyz", n)), "480")
                    }
                    get toArray() {
                        return [...this]
                    }
                }([...this.element.children]);
                throw new n("Provided argument is not a DOM element.")
            }
        }

        function t() {
            if (e.pRrvZ("zGIkB", e.MFfMx)) try {
                return document.querySelector("#app > div.css-14dcx2q-DivBodyContainer.e1irlpdw0 > div:nth-child(4) > div > div.css-1qjw4dg-DivContentContainer.e1mecfx00 > div.css-1stfops-DivCommentContainer.ekjxngi0 > div > div.css-1xlna7p-DivProfileWrapper.ekjxngi4 > div.css-1u3jkat-DivDescriptionContentWrapper.e1mecfx011 > div.css-1nst91u-DivMainContent.e1mecfx01 > div.css-bs495z-DivWrapper.e1mzilcj0 > div > div.css-1d7krfw-DivOverflowContainer.e1mzilcj5 > h1").innerText.replace(e.OWQDR, "")
            } catch {
                try {
                    return document.querySelector("#app > div.css-14dcx2q-DivBodyContainer.e1irlpdw0 > div:nth-child(4) > div > div.css-1qjw4dg-DivContentContainer.e1mecfx00 > div.css-1stfops-DivCommentContainer.ekjxngi0 > div > div.css-1xlna7p-DivProfileWrapper.ekjxngi4 > div.css-1u3jkat-DivDescriptionContentWrapper.e1mecfx011 > div.css-1nst91u-DivMainContent.e1mecfx01 > div.css-bs495z-DivWrapper.e1mzilcj0").innerText.replace(e.OWQDR, "")
                } catch (n) {
                    return e.liEPR(D, "browse-video-desc", e.ZdpSe) ? e.rHqGX(D, e.mvVdb, e.ZdpSe).innerText : document.querySelector(e.uHnKr).innerText.replace(e.OWQDR, "")
                }
            } else {
                let e = new s(f, {
                    bubbles: !0,
                    isTrusted: !0
                });
                d["on" + h] && m["on" + p](e),
                    function(e, n) {
                        return e === n
                    }(v, "input") && (P.value = z), U.dispatchEvent(e)
            }
        }

        function r() {
            var n = {
                SEnUF: "#VGHGFf > div > div.Eddif > div:nth-child(2) > button > div.VfPpkd-RLmnJb",
                SxQpk: e.qbdws,
                qaXtZ: function(n, t, r) {
                    return e.EdMFM(n, t, r)
                }
            };
            e.ybErN(get_aria_label, e.KJnKy).click(), e.rHqGX(setTimeout, (() => {
                var e = {
                    CvvHL: n.SEnUF
                };
                document.querySelector(n.SxQpk).click(), n.qaXtZ(setTimeout, (() => {
                    document.querySelector(e.CvvHL).click()
                }), 1e3)
            }), 1e3)
        }
        _element = _e = n, setElement2 = function(e) {
            return e.match(/(?<host>https?\:\/\/www\.tiktok\.com)\/(?<username>@[^\/]+)\/video\/(?<videoID>\d+)/i).groups
        };
        var o = e.OhHOM,
            i = e.mihnP;

        function c(t, r, o = !1) {
            if (e.KloSK("dMgqh", e.IegRA)) {
                var i = e.rHKop(addEventListener, t, ((...n) => {
                    e.aqzwi(r, ...n), o && e.KrHnZ(removeEventListener, i)
                }), !0);
                return i
            }
            e.rHKop(n, 2, !0, !1)
        }

        function u(t) {
            e.eXIAg(typeof jQuery, e.USSGl) && e.FoSDU(t, jQuery) && (e.KloSK("FVHDs", e.bRXJa) ? t = t[0] : n.warn("Failed unmuting"));
            var r = t.getBoundingClientRect();
            return e.pPrRa(r.top, e.tYqoh(0, e.tzDvJ(window.innerHeight || document.documentElement.clientHeight, 2))) && e.pPrRa(r.left, 0) && r.bottom <= e.NUeOH(window.innerHeight || document.documentElement.clientHeight, e.tzDvJ(window.innerHeight || document.documentElement.clientHeight, 2)) && e.EsmZF(r.right, window.innerWidth || document.documentElement.clientWidth)
        }

        function l(o, {
            callback: i,
            int: c
        }) {
            var u = {
                YsRiY: "Error:",
                AALkD: e.PQxdi
            };
            if (!e.OCslP(e.ZCYHk, e.rgHCy)) {
                !i && (i = function() {}), !c && (c = 100), console.log({
                    f: o,
                    callback: i,
                    int: c
                });
                try {
                    if (e.bYHou(e.CAFbK, "FCmFr")) return e.BmtNV(o), void e.BmtNV(i);
                    n.getElementById(u.AALkD).click()
                } catch (e) {}
                var l = e.liEPR(setInterval, (() => {
                    try {
                        if (e.rKCay(e.ivXmI, "xSIQg")) return new n("br");
                        e.BmtNV(o), e.grRvS(i), clearInterval(l)
                    } catch (e) {}
                }), c || 100);
                return l
            }
            t.warn(u.YsRiY, r)
        }

        function a(n) {
            var t = {
                CDDjM: function(n, t) {
                    return e.jnAXo(n, t)
                },
                rKLnI: "Appending:"
            };
            if (e.KloSK("vzgpt", e.jSImj)) return e.vAXvs(n.offsetParent, null);
            this.element.append(a.element || s), f.log("T:", {
                targets: d,
                fe: h && m.forEach
            });
            for (let e = 0; t.CDDjM(e, w.length); e++) {
                let n = z[e];
                L.log(t.rKLnI, {
                    element: n,
                    target: this
                }), this.element.append(n.element || n)
            }
            return this
        }

        function s(e) {
            return e.parentNode
        }

        function f() {
            return e.AtdPU(get_aria_label, "Go back") && e.LvOvX(get_aria_label, e.UhzHp).click ? get_aria_label(e.UhzHp) : document.querySelector(e.EjpNr)
        }

        function d() {
            return e.JbKXo(get_aria_label, e.ATqur) ? get_aria_label(e.ATqur).click ? e.LvOvX(get_aria_label, e.ATqur) : document.querySelector(e.mcEMf) : document.querySelector("._afxw")
        }

        function h() {
            var n = {
                RZffo: e.NvmBG,
                lxybU: function(e, n) {
                    return e == n
                },
                MoiGn: "Caught"
            };
            try {
                return document.querySelector("div.x78zum5.xdt5ytf.x1iyjqo2.xs83m0k.x2lwn1j.x1odjw0f.x1n2onr6.x9ek82g.x6ikm8r.xdj266r.x11i5rnm.x4ii5y1.x1mh8g0r.xexx8yu.x1pi30zi.x18d9i69.x1swvt13 > ul > div:nth-child(3) > div > div").children[0].innerText.split("\n")[1]
            } catch {
                if (e.zgwLL(e.dTQeR, e.YmMQM)) return [...document.querySelectorAll(e.zjAmy)].pop().innerText.split("\n")[0];
                if (h.log(m, n.RZffo, p.tagName), n.lxybU("A", v.tagName)) {
                    F.log(n.MoiGn, I);
                    let e = O.download,
                        t = H.href;
                    V = {
                        id: new N(Q.href).searchParams.get("v"),
                        href: t,
                        title: e
                    }
                } else D._click.apply(j)
            }
        }

        function m() {
            var n = {
                scyfA: e.jfyOz,
                BYHYw: function(e, n) {
                    return e(n)
                },
                VqeFg: function(n, t, r) {
                    return e.EdMFM(n, t, r)
                },
                uvhSp: function(e, n) {
                    return e + n
                },
                uFTbH: e.Tsmkd,
                tZXOz: e.PbADO
            };
            if (location.href.includes(e.mnyqP)) {
                let r = open(e.LkGci, location.href, "width=400,height=500");
                var t = GM_addValueChangeListener(e.IcGbm, (function(e, o, i, c) {
                    if (i)
                        for (var u = n.scyfA.split("|"), l = 0;;) {
                            switch (u[l++]) {
                                case "0":
                                    n.BYHYw(GM_removeValueChangeListener, t);
                                    continue;
                                case "1":
                                    n.VqeFg(downloadFile_, i, n.uvhSp(document.title, n.uFTbH));
                                    continue;
                                case "2":
                                    console.log(n.tZXOz, {
                                        a: e,
                                        b: o,
                                        c: i,
                                        d: c
                                    });
                                    continue;
                                case "3":
                                    r.close();
                                    continue;
                                case "4":
                                    GM_setValue("instaURL", null);
                                    continue
                            }
                            break
                        }
                }))
            }
        }
        async function p() {
            var n = {
                pGafC: function(n, t) {
                    return e.ybErN(n, t)
                },
                Hsxyz: function(e, n, t) {
                    return e(n, t)
                },
                cWAny: e.ItiaJ,
                suxXI: "alt"
            };
            if (e.bYHou(e.cOJzL, e.cOJzL)) h && (F.log("Got", {
                a: I,
                b: O,
                c: H,
                d: V
            }), N.close(), Q(J), X(B, Y.title + ".mp4"), e.pvBkN(W, e.IcGbm, null));
            else {
                for (var t = e => new Promise((n => setTimeout(n, e))), r = new Set, o = {}; e.WoXnP(f);)
                    if (await e.PnCaM(t, 100), e.WoXnP(f)) e.WoXnP(f).click();
                    else {
                        if ("OHtBB" === e.PKoig) {
                            await e.ptcar(t, 1e3);
                            break
                        }
                        i = c.children, u.forEach = [].forEach, l.forEach((e => {
                            n.pGafC(s, e)
                        }))
                    }[...e.grRvS(getInstalImages)].forEach((n => {
                    let t = e.MmtyJ(findhref2, n, e.ItiaJ)[0];
                    r.add([t.src, t.getAttribute(e.oEliw)])
                })), d().click();
                try {
                    e.ihLMp(d).click()
                } catch (e) {}
                for (; e.rqeLV(d);) {
                    await e.KrHnZ(t, 300), [...e.ihLMp(getInstalImages)].forEach((e => {
                        let t = n.Hsxyz(findhref2, e, n.cWAny)[0];
                        r.add([t.src, t.getAttribute(n.suxXI)])
                    }));
                    try {
                        e.WoXnP(d).click()
                    } catch (e) {}[...r].length
                }
                for (; await e.YyQxy(t, 100), e.grRvS(f);) e.rqeLV(f).click();
                [...r].forEach((e => {
                    o[e[0]] = e[1]
                })), (r = Object.keys(o).map((e => ({
                    src: e,
                    name: o[e]
                })))).forEach((e => {
                    var t = new URL(e.src).pathname.split(".").pop();
                    n.Hsxyz(P, e.src, e.name + "." + t)
                })), console.log("done", r)
            }
        }

        function v() {
            if (!e.bBjxX(e.yhyHz, "rVwbe")) return this.element["on" + t] = r, this;
            e.WoXnP(p).then(console.log, console.warn)
        }
        setElement = function(n) {
            return !(!String(n).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/) || !e.vDwWz(String(n).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/)[8].length, 11)) && String(n).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/)[8]
        }, findhref2 = function(t, d) {
            var h = {
                sLYbp: function(n) {
                    return e.ihLMp(n)
                },
                JBuic: e.xhsAv,
                IMwyv: e.sHLWL,
                XHkyA: e.pzhNR,
                QZjEY: e.fbuiw,
                IuPdC: e.yhUGr,
                DYMcM: e.rTcFc,
                vOqGT: e.pWcls,
                NQLKn: e.IwoWS,
                PeGEC: e.miQHM,
                ArEJi: "#MediaButton",
                pzLqS: e.YNYIJ
            };
            if (e.hHSGz("gKVQl", e.HMRTe)) {
                var v = [];
                return e.ptcar((function t(m) {
                    var p = {
                        Ydmvk: function(n, t) {
                            return e.spcQl(n, t)
                        },
                        iakDQ: e.eNYRO,
                        RjZnW: e.riQPP,
                        gzOTY: function(n, t) {
                            return e.LvOvX(n, t)
                        },
                        DFAIP: e.CCcby,
                        YxASG: function(n, t) {
                            return e.aqzwi(n, t)
                        }
                    };
                    if (e.vAXvs(e.ZgZey, e.iDlsY)) {
                        var y = {
                            BCBFH: function(e) {
                                return h.sLYbp(e)
                            }
                        };
                        g != h.sLYbp(w) && U() ? (X.log(h.JBuic), B((() => {
                            oe().append(ie.br.element), y.BCBFH(d).append(le.element), ae().append(se.element)
                        }), 100)) : O != h.sLYbp(H) && !h.sLYbp(V) && oe.log(h.IMwyv), Q = J()
                    } else if (e.YOyGU(m.tagName.toLowerCase(), d || "a")) {
                        if (v.push(m), m.children.length)
                            if (e.zgwLL(e.vcEgY, "nUsAy"))(m = m.children).forEach = [].forEach, m.forEach((e => {
                                p.Ydmvk(p.iakDQ, p.RjZnW) ? this.element = r.constructor.name.includes("HTML") && o || function() {
                                    for (let e in arguments[1]) arguments[0].setAttribute(e, arguments[1][e]);
                                    return arguments[0]
                                }(i.createElement(arguments[0]), arguments[1]) : p.gzOTY(t, e)
                            }));
                            else {
                                var b = new c(u.querySelector("._aaqy")),
                                    x = new l(h.XHkyA, {
                                        id: h.QZjEY
                                    }).set(h.IuPdC, h.DYMcM).on("click", a),
                                    k = new s(h.XHkyA, {
                                        id: h.vOqGT
                                    }).set(h.IuPdC, h.NQLKn).on(h.PeGEC, f);
                                b.append(x, k)
                            }
                    } else {
                        if (e.WLCwA != e.WLCwA) return this[n];
                        m.children.length && ((m = m.children).forEach = [].forEach, m.forEach((e => {
                            if (p.Ydmvk(p.DFAIP, "Qmhft")) p.YxASG(t, e);
                            else {
                                const e = i.createElement("a");
                                e.href = c, e.download = u, l.body.appendChild(e), e.click(), a.body.removeChild(e)
                            }
                        })))
                    }
                }), t), v
            }
            u(), e.AtdPU(l, (() => {
                m.querySelector(h.ArEJi) || p(), t.querySelector(h.pzLqS) && !g.querySelector(h.pzLqS).querySelector(h.ArEJi) && h.sLYbp(w)
            }))
        }, getInstalImages = function() {
            return document.querySelectorAll(e.VBKcb)
        }, getInstaVideo = function() {
            return document.querySelector(e.tnzla)
        }, downloadVideoFromBlob = function(n, t) {
            var r = {
                IsBSR: e.EFpnn,
                NVzqy: e.TMvDl,
                UEcrp: function(n, t) {
                    return e.NUeOH(n, t)
                },
                rflFX: e.Tsmkd
            };
            if (e.bYHou(e.Tecjo, "tcHvr")) {
                for (var c = 0; e.Lpqyy(c, this.length); c += 1)
                    if (e.KloSK(this[c].id, o) || e.pOLYp(this[c].name, i)) return this[c];
                return null
            }
            if (n && n.src && n.src.startsWith(e.lNrCf)) {
                const o = n.captureStream(),
                    i = new MediaRecorder(o),
                    c = [];
                i.ondataavailable = n => {
                    e.mKUxB(n.data.size, 0) && (c.push(n.data), console.log(n.data))
                }, i.onstop = () => {
                    const e = new Blob(c, {
                            type: r.IsBSR
                        }),
                        n = URL.createObjectURL(e),
                        o = document.createElement("a");
                    o.style.display = r.NVzqy, o.href = n, o.download = r.UEcrp(t, r.rflFX), document.body.appendChild(o), o.click(), document.body.removeChild(o), URL.revokeObjectURL(n)
                }, i.start(), e.EdMFM(setTimeout, (() => {
                    i.stop()
                }), e.bhehN(n.duration, 1e3))
            } else console.error(e.fRUeL)
        }, console.log("A?");
        const g = e => new Promise((n => setTimeout(n, e)));
        if (e.OHTfs(document.domain, e.oJuqX)) e.JlUyM(e.dBzMJ, e.OTfQx) ? (t.click(), r.log(e.eRBWD)) : onload = async function() {
            var n = {
                RTqLg: function(n, t, r) {
                    return e.QAmnU(n, t, r)
                },
                WaJaw: e.ZdpSe,
                DdmSW: "#main-content-video_detail > div > div.css-12kupwv-DivContentContainer.ege8lhx2 > div.css-1senhbu-DivLeftContainer.ege8lhx3 > div.css-1sb4dwc-DivPlayerContainer.eqrezik4 > div.css-3lfoqn-DivDescriptionContentWrapper-StyledDetailContentWrapper.eqrezik15 > div.css-r4nwrj-DivVideoInfoContainer.eqrezik3 > div.css-bs495z-DivWrapper.e1mzilcj0 > div > h1",
                cmmba: function(n, t) {
                    return e.PfQHn(n, t)
                },
                ANAzb: function(n, t) {
                    return e.dCZVQ(n, t)
                },
                fGwyA: "dzbGp",
                oMzhn: e.AxRbs,
                wshZb: e.XtAYH,
                sqtxR: "change",
                NLyjM: e.wCgYV,
                oNwrA: function(e, n) {
                    return e(n)
                },
                XvAOv: e.UhzHp,
                YtskU: function(n, t) {
                    return e.fzkap(n, t)
                },
                zIkZa: e.EjpNr,
                CRDpi: function(n, t) {
                    return e.pRrvZ(n, t)
                }
            };
            const t = {
                url: name,
                input: null
            };
            var r, o = !1;
            for (e.QAmnU(setTimeout, (() => {
                    var e = {
                        viZvT: function(e, t) {
                            return n.oNwrA(e, t)
                        },
                        jDcvo: n.XvAOv,
                        MQiUK: function(e, t) {
                            return n.YtskU(e, t)
                        },
                        DgFdg: n.zIkZa
                    };
                    if (!n.CRDpi("qOoap", "qOoap")) return e.viZvT(i, e.jDcvo) ? c(e.jDcvo).click ? e.MQiUK(u, e.jDcvo) : l.querySelector(e.DgFdg) : a.querySelector(e.DgFdg);
                    o = !0
                }), 2e4); !document.querySelector(e.cwFBx);)
                if (e.hHSGz(e.fAkxx, e.wwghA)) {
                    if (await e.ptcar(g, 0), o) throw e.zdVmY
                } else if (e.hgeyS(G.origin, D) || j.origin.match(/https?:\/{2}onlymp3\.to/) || F.origin.match(/https?:\/{2}en\.onlymp3\.to/) || I.origin.match(/https?:\/{2}en(\d)\.onlinevideoconverter\.pro/) || e.vKcfx(O.origin, e.vmJqd) || e.waihc(H.origin, e.QKjXk) || e.hgeyS(V.origin, "https://snapsave.io") || e.XnpER(N.origin, "https://tubemp4.is")) {
                const {
                    data: {
                        href: n,
                        title: t,
                        length: o,
                        id: i,
                        _: c
                    }
                } = ae;
                let u = e.nOLNf(t, se ? e.Tsmkd : e.HxnMc);
                (r = fe.getElementById(c)) && r.remove(), de.log(e.tjuxK, {
                    href: n,
                    title: t,
                    length: o,
                    id: i,
                    _: c
                }, he), me.set(e.yhUGr, e.ymhTn), pe.set(e.ycvPE, !1), ve ? (be.log(e.mCRnO), e.liEPR(TY, n, u)) : e.fAERX(we, n), ye[c] = n
            } else ce.log(e.FPuXc, le);
            t.input = document.querySelector("#search-form-input"), console.log("Found a"), e.nEhaW((function(e, t) {
                var r = {
                    IkZBQ: function(e, t, r) {
                        return n.RTqLg(e, t, r)
                    },
                    OtIcs: "browse-video-desc",
                    tZUQw: n.WaJaw,
                    VuGMm: n.DdmSW,
                    rDOgV: function(e, t) {
                        return n.cmmba(e, t)
                    },
                    Xrkls: function(e, t) {
                        return n.ANAzb(e, t)
                    },
                    RnrZk: "LRFlr",
                    MyVcm: n.fGwyA
                };
                [n.oMzhn, n.wshZb, n.sqtxR, n.NLyjM].forEach((n => {
                    var o = {
                        eSaCp: "#app > div.css-14dcx2q-DivBodyContainer.e1irlpdw0 > div:nth-child(4) > div > div.css-1qjw4dg-DivContentContainer.e1mecfx00 > div.css-1stfops-DivCommentContainer.ekjxngi0 > div > div.css-1xlna7p-DivProfileWrapper.ekjxngi4 > div.css-1u3jkat-DivDescriptionContentWrapper.e1mecfx011 > div.css-1nst91u-DivMainContent.e1mecfx01 > div.css-bs495z-DivWrapper.e1mzilcj0",
                        ODjnq: "Replying to ",
                        pUROk: function(e, n, t) {
                            return r.IkZBQ(e, n, t)
                        },
                        YgBwr: r.OtIcs,
                        UBvme: r.tZUQw,
                        peEBd: r.VuGMm
                    };
                    let i = new Event(n, {
                        bubbles: !0,
                        isTrusted: !0
                    });
                    if (e["on" + n] && e["on" + n](i), r.rDOgV(n, "input"))
                        if (r.Xrkls(r.RnrZk, r.MyVcm)) e.value = t;
                        else try {
                            return l.querySelector(o.eSaCp).innerText.replace(o.ODjnq, "")
                        } catch (e) {
                            return o.pUROk(d, o.YgBwr, o.UBvme) ? o.pUROk(h, o.YgBwr, "data-e2e").innerText : m.querySelector(o.peEBd).innerText.replace(o.ODjnq, "")
                        }
                        e.dispatchEvent(i)
                }))
            }), t.input, t.url), document.querySelector(e.iNJDt).click(), e.liEPR(GM_setValue, "instaURL", await e.YyQxy((async function(e) {
                for (; !document.querySelector(e);) await g(0);
                return document.querySelector(e)
            }), e.DRqXG).then((e => e.href)))
        };
        else {
            if (e.pVyVY(document.domain, e.IRMJH)) return void(getSoundCloadI = function() {
                e.rHqGX(_setV, "SC", e.BTuJP(getSoundCloudUrl)), e.rHqGX(open, "https://sclouddownloader.net/", "SC").onclose = function(n) {
                    console.log(e.qckyT)
                }
            });
            if (e.VRorr(document.domain, e.mvIqt)) return R = {
                esilD: e.jLloR,
                MxfFD: e.umxqv
            }, void e.QAmnU(setInterval, (() => {
                var n, t = {
                    tMfMv: function(n, t) {
                        return e.ceMsv(n, t)
                    },
                    ZHdbB: e.KelkD,
                    IMJGF: function(n, t) {
                        return e.OvORc(n, t)
                    },
                    DjiUM: "Doesnt work yet",
                    IQdRD: function(n, t, r, o, i, c, u) {
                        return e.TKBRo(n, t, r, o, i, c, u)
                    },
                    MBQJE: "sUdkV",
                    fPFsg: e.clAyG,
                    elBCZ: e.pzhNR,
                    MvtpO: e.yhUGr,
                    ZavIT: e.PAMBV,
                    IVVcf: e.miQHM
                };
                try {
                    if ("sglRO" === e.FmNnX) r.setAttribute(o.name, i.value);
                    else {
                        var c = [...document.querySelectorAll(e.jTjid)].map((e => [e, [...e.classList]])).filter((e => e[1].includes("ytcp-video-section")))[0][0],
                            u = [...c.children[1].children].map((e => [e, [...e.classList], e.tagName])).filter((e => "YTCP-VIDEO-ROW" == e[2]));
                        u.filter((e => e[0].children[0].querySelectorAll(R.esilD)[0].innerText == R.MxfFD)).map((e => e[0].children[0].querySelectorAll(".cell-body.tablecell-visibility.style-scope.ytcp-video-row")[0])).forEach((e => {
                            if (t.MBQJE === t.fPFsg) return !1;
                            console.log(e), e.append(new _e("br").element);
                            var n = new _e(t.elBCZ).set(t.MvtpO, t.ZavIT).on(t.IVVcf, (function(e) {
                                if (!t.tMfMv(t.ZHdbB, t.ZHdbB)) return this.element[arguments[0]];
                                t.IMJGF(alert, t.DjiUM);
                                var {
                                    id: n,
                                    href: r,
                                    isShort: o
                                } = findhref2(e.target.parentElement.parentElement).map((e => ({
                                    href: e.href,
                                    short: e.href.includes("/short"),
                                    id: setElement(e.href)
                                }))).filter((e => e.id))[0];
                                t.IQdRD(downloadT, n, !1, !0, !1, !1, o ? new URL(r) : null)
                            }));
                            e.append(n.element)
                        })), n = !0
                    }
                } catch {
                    n = !1
                }
                e.JJgCj(A, n) && (A = n, console.log(e.BFEoK, n ? e.kzXYK : e.sZtVk))
            }), 0);
            if (e.AiOpc(document.domain, "www.instagram.com")) {
                if (!e.iHJIw(e.DIcLo, e.hObVv)) {
                    var w;

                    function y() {
                        for (var t = e.RSesk.split("|"), r = 0;;) {
                            switch (t[r++]) {
                                case "0":
                                    c.append(i, o);
                                    continue;
                                case "1":
                                    var o = new n("button", {
                                        id: e.pWcls
                                    }).set(e.yhUGr, e.IwoWS).on(e.miQHM, m);
                                    continue;
                                case "2":
                                    var i = new n("button", {
                                        id: e.fbuiw
                                    }).set(e.yhUGr, e.rTcFc).on("click", v);
                                    continue;
                                case "3":
                                    var c = new n(document.querySelectorAll(e.RdIdF)[0]);
                                    continue;
                                case "4":
                                    console.log(e.hVxOw);
                                    continue
                            }
                            break
                        }
                    }

                    function b() {
                        if (e.yyGyM("syMpy", e.TlnvM)) {
                            for (var t = 0; t < i.length; t += 1) this[t] = s[t];
                            u.defineProperty(this, "length", {
                                get: function() {
                                    return t.length
                                }
                            }), a.freeze(this)
                        } else {
                            var r = new n(document.querySelector(e.YNYIJ)),
                                o = new n(e.pzhNR, {
                                    id: e.fbuiw
                                }).set("innerText", "Get Images").on("click", v),
                                c = new n("button", {
                                    id: e.pWcls
                                }).set(e.yhUGr, e.IwoWS).on(e.miQHM, m);
                            r.append(o, c)
                        }
                    }
                    return e.OZiyo(l, (function() {
                        if (e.qewFU("GEWMg", "GEWMg")) document.querySelectorAll(".xh8yej3.x1iyjqo2")[0].children;
                        else {
                            var n = t.element;
                            r ? n.classList.add(e.lkEkq) : n.classList.remove("collapse-frame")
                        }
                    }), {
                        callback: function() {
                            y(), e.hutaz(setInterval, (() => {
                                if (e.wCtNX !== e.tNnfs) document.querySelector(e.ebAyG) || e.cgCoy(y), document.querySelector(e.YNYIJ) && !document.querySelector(e.YNYIJ).querySelector(e.ebAyG) && e.ifmYy(b);
                                else {
                                    var n = i.createElement("a");
                                    n.href = c, n.download = u, l.body.appendChild(n), n.click(), a.body.removeChild(n)
                                }
                            }))
                        }
                    }), void console.log(e.kfCUt)
                }
                for (var y = "2|0|4|3|1".split("|"), b = 0;;) {
                    switch (y[b++]) {
                        case "0":
                            g.close();
                            continue;
                        case "1":
                            G(e.IcGbm, null);
                            continue;
                        case "2":
                            d.log(e.PbADO, {
                                a: h,
                                b: m,
                                c: p,
                                d: v
                            });
                            continue;
                        case "3":
                            e.rHqGX(P, z, e.nOLNf(L.title, ".mp4"));
                            continue;
                        case "4":
                            e.Pciao(w, U);
                            continue
                    }
                    break
                }
            } else if (e.SaJxH(document.domain, e.CVdXH))(async function() {
                var t = e.JbKXo(_getV, "sc");
                async function f(t, r) {
                    var o = {
                        KoLnn: e.drsFb,
                        vaUdU: function(n, t, r) {
                            return e.Ahcss(n, t, r)
                        },
                        fRdnz: e.Tsmkd,
                        vfnEw: "reel",
                        DCLGH: e.fRUeL,
                        QCKOL: function(n, t) {
                            return e.zgwLL(n, t)
                        },
                        zvhCP: "EQMZA",
                        sQIlm: function(n, t) {
                            return e.bBjxX(n, t)
                        },
                        rlVgF: e.aCJZS,
                        NgtGv: e.ezRSe,
                        ojiuy: function(n) {
                            return e.ihLMp(n)
                        }
                    };
                    let i = e => new Promise((n => setTimeout(n, e)));
                    return await new Promise((async(e, c) => {
                        var u = {
                            EbVJR: o.KoLnn,
                            HfwLR: function(e, n, t) {
                                return o.vaUdU(e, n, t)
                            },
                            yZswe: o.fRdnz,
                            qnsKH: o.vfnEw,
                            uEOGy: function(e, n, t) {
                                return e(n, t)
                            },
                            bjYlp: o.DCLGH
                        };
                        if (o.QCKOL(o.zvhCP, "PWMAB")) {
                            var l = !1;
                            setTimeout((() => (l = 0, c())), r);
                            for (; !document.querySelector(t);)
                                if (o.sQIlm(o.rlVgF, o.NgtGv)) {
                                    if (await i(), l) {
                                        o.ojiuy(c);
                                        break
                                    }
                                } else {
                                    var s = {
                                        motiT: u.EbVJR,
                                        FXUED: function(e, n, t) {
                                            return u.HfwLR(e, n, t)
                                        },
                                        zojOt: function(e, n) {
                                            return e + n
                                        },
                                        RLeVi: u.yZswe,
                                        tBYdm: function(e, n) {
                                            return e(n)
                                        },
                                        ISvXC: "instaURL"
                                    };
                                    if (a.href.includes(u.qnsKH)) {
                                        let e = w("https://fastdl.app/en", U.href, "width=400,height=500");
                                        var f = u.uEOGy(r, "instaURL", (function(n, t, r, o) {
                                            if (r)
                                                for (var i = s.motiT.split("|"), c = 0;;) {
                                                    switch (i[c++]) {
                                                        case "0":
                                                            s.FXUED(J, r, s.zojOt(X.title, s.RLeVi));
                                                            continue;
                                                        case "1":
                                                            s.tBYdm(Q, f);
                                                            continue;
                                                        case "2":
                                                            N.log("Got", {
                                                                a: n,
                                                                b: t,
                                                                c: r,
                                                                d: o
                                                            });
                                                            continue;
                                                        case "3":
                                                            e.close();
                                                            continue;
                                                        case "4":
                                                            B(s.ISvXC, null);
                                                            continue
                                                    }
                                                    break
                                                }
                                        }))
                                    }
                                }
                            return o.ojiuy(e)
                        }
                        n.error(u.bjYlp)
                    })).then((e => !0), (e => !1))
                }
                if (e.cKZkz(location.pathname, e.JTeqS))
                    if (e.waJDg(e.pERkx, e.pERkx)) {
                        var d = {
                            tATWI: function(n, t) {
                                return e.hutaz(n, t)
                            }
                        };
                        i = c.children, u.forEach = [].forEach, l.forEach((e => {
                            d.tATWI(s, e)
                        }))
                    } else {
                        for (await e.fzkap(f, e.oJoof); !trackTitle.innerText.length;) await e.PnCaM(g, 0);
                        for (await e.LvOvX(f, e.yzPdH); !trackLink.href.length;) await e.ckPEy(g, 0);
                        var h = {
                            name: trackTitle.innerText,
                            href: trackLink.href
                        };
                        console.log(h), e.MmtyJ(_setV, "SCinfo", h), close()
                    } else {
                    if (!_getV("SC")) throw e.WkTZA;
                    var m = e.bEnGZ;
                    e.MGQvT;
                    if (await e.nEhaW(f, m, 2e3), await e.ycwJF(f, m, 2e3))
                        if (e.oCzYd(e.AMJwJ, e.BVEfT)) e.nEhaW(r, o, i);
                        else
                            for (var p = e.igrFF.split("|"), v = 0;;) {
                                switch (p[v++]) {
                                    case "0":
                                        console.log(e.sexvh, !!window.formSubmit);
                                        continue;
                                    case "1":
                                        document.querySelector(m).value = t;
                                        continue;
                                    case "2":
                                        console.warn(e.PbADO);
                                        continue;
                                    case "3":
                                        for (; typeof formSubmit == e.xxMRD;) try {
                                            await g(0), console.log(e.sexvh, formSubmit)
                                        } catch {}
                                        continue;
                                    case "4":
                                        console.log(e.sexvh, formSubmit);
                                        continue;
                                    case "5":
                                        setInterval(formSubmit, 1e3);
                                        continue;
                                    case "6":
                                        e.DbAzS(formSubmit);
                                        continue
                                }
                                break
                            }
                }
            })().then(console.log, console.warn);
            else {
                if (e.Nugkw(document.domain, e.UdOVX)) {
                    location.pathname.split("/")[1] != e.ptcar(GM_getValue, "y2mate.nu") && (e.yhqWt(GM_setValue, e.UdOVX, location.pathname.split("/")[1]), console.warn("updated"));
                    let xe = new URL(location.href).searchParams.get("v"),
                        ke = e.rZhqB(new URL(location.href).searchParams.get("s"), 1),
                        Te = new URL(location.href).searchParams.get(e.IepOF),
                        Ee = new URL(location.href).searchParams.get(e.qRsDk),
                        Se = e.OljDu(e.JgjWq(xe, Te), Ee);
                    const Ce = e => new Promise((n => setTimeout(n, e)));
                    async function x(t, r = 5e3) {
                        var o = {
                            qccFT: "#app > div.css-14dcx2q-DivBodyContainer.e1irlpdw0 > div:nth-child(4) > div > div.css-1qjw4dg-DivContentContainer.e1mecfx00 > div.css-1stfops-DivCommentContainer.ekjxngi0 > div > div.css-1xlna7p-DivProfileWrapper.ekjxngi4 > div.css-1u3jkat-DivDescriptionContentWrapper.e1mecfx011 > div.css-1nst91u-DivMainContent.e1mecfx01 > div.css-bs495z-DivWrapper.e1mzilcj0 > div > div.css-1d7krfw-DivOverflowContainer.e1mzilcj5 > h1",
                            PsieX: e.OWQDR,
                            LNZKh: e.vwUcE,
                            nGllX: function(n, t) {
                                return e.npueh(n, t)
                            },
                            ELzhE: function(e, n) {
                                return e + n
                            },
                            eTCPU: "0HzX",
                            tFCtd: e.cURWJ,
                            ZQkMU: e.Vxgrf,
                            pHtlC: e.XtPAZ,
                            ecOnQ: e.SEzRT,
                            dzXEK: e.IepOF,
                            YFeLP: "mp3",
                            KJaDy: e.oZTrh,
                            bAmxG: e.QQWsv
                        };
                        if (e.vAXvs(e.yhCoT, e.HQhBX)) return n.querySelector(o.qccFT).innerText.replace(o.PsieX, ""); {
                            let n = !1;
                            for (e.ycwJF(setTimeout, (() => {
                                    console.log(o.LNZKh, t), n = !0
                                }), r); !document.querySelector(t);)
                                if (e.pRrvZ(e.SeLmF, e.pYfcp))
                                    for (var i = "0|2|3|4|1".split("|"), c = 0;;) {
                                        switch (i[c++]) {
                                            case "0":
                                                var u = new m("iframe", {
                                                    src: p.join(""),
                                                    id: t,
                                                    useT: g,
                                                    loading: e.eflhG,
                                                    referrerpolicy: e.HJNve,
                                                    allowfullscreen: !0,
                                                    sandbox: e.TsARU,
                                                    allow: "autoplay; fullscreen; geolocation; microphone; camera"
                                                }).style({
                                                    border: 0,
                                                    position: e.ilJpC,
                                                    width: 0,
                                                    height: 0,
                                                    "pointer-events": "none",
                                                    opacity: 1
                                                });
                                                continue;
                                            case "1":
                                                return u;
                                            case "2":
                                                w = e.vdREi(U, e.UdOVX, (function(e, n, t, r) {
                                                    (u = [o.nGllX(o.ELzhE("https://y2mate.nu/", t("y2mate.nu") || o.eTCPU), "/"), o.tFCtd, V, o.ZQkMU, N.pathname.startsWith(o.pHtlC) ? 1 : 0, o.ecOnQ, Q ? o.dzXEK : o.YFeLP, o.KJaDy, J]).set(o.bAmxG, X.join(""))
                                                }));
                                                continue;
                                            case "3":
                                                u.appendTo(I.body);
                                                continue;
                                            case "4":
                                                u.closed = !1;
                                                continue
                                        }
                                        break
                                    } else if (console.log("_", t, n), await Ce(500), n) break;
                            if (console.log(t, n), n) throw e.vyHQL;
                            return document.querySelector(t)
                        }
                    }
                    return void async function() {
                        if (!e.JQAMi(e.hretb, e.hretb)) throw new n("Provided argument is not a DOM element.");
                        for (; e.oGBwH(document.readyState, e.XKeIw);) await e.hCyGm(Ce, 0);
                        if (xe)
                            if (e.zgwLL(e.DLQLK, e.DLQLK)) o.log({
                                a: i,
                                b: c,
                                c: u
                            });
                            else {
                                let n = async n => {
                                    var t = {
                                        EWFbY: function(e, n) {
                                            return e || n
                                        },
                                        gnroL: e.USSGl,
                                        LXMjr: function(n) {
                                            return e.grRvS(n)
                                        },
                                        BdaOV: e.eNCXG,
                                        xZxeS: e.TMvDl,
                                        HtMns: function(e, n) {
                                            return e(n)
                                        }
                                    };
                                    if (!e.zgwLL(e.ZcBZs, e.joOCl)) {
                                        const e = P.createElement("a");
                                        return e.style.display = t.xZxeS, z.body.appendChild(e), t.HtMns(L, G).then((e => e.blob())).then((n => {
                                            const r = e.createObjectURL(n);
                                            e.href = r, e.download = ne, e.target = "_blank", e.click(), oe.revokeObjectURL(r), (t.EWFbY(ie, ce) || le).postMessage({
                                                url: ae,
                                                title: se,
                                                s: !0
                                            }, "*"), (typeof fe).includes(t.gnroL) && t.LXMjr(de)
                                        })).catch((n => {
                                            e.error(t.BdaOV, n), (t.EWFbY(ne, oe) || ie).postMessage({
                                                url: ce,
                                                title: le,
                                                s: !1
                                            }, "*")
                                        }))
                                    }
                                    for (var r = "6|5|1|4|0|3|2".split("|"), o = 0;;) {
                                        switch (r[o++]) {
                                            case "0":
                                                console.log(e.ZSHZl, c);
                                                continue;
                                            case "1":
                                                var i = e.hHxdy(findhref2, document.forms[0], e.oiWae)[0].innerText;
                                                continue;
                                            case "2":
                                                e.lSvTl(close);
                                                continue;
                                            case "3":
                                                (opener || window.parent).postMessage(c, "*");
                                                continue;
                                            case "4":
                                                var c = {
                                                    _: Se,
                                                    id: xe,
                                                    href: u,
                                                    title: i,
                                                    length: {}
                                                };
                                                continue;
                                            case "5":
                                                var u = e.hutaz(findhref2, document.forms[0])[0].href;
                                                continue;
                                            case "6":
                                                console.log("a", n);
                                                continue
                                        }
                                        break
                                    }
                                };
                                try {
                                    await e.caRXd(x, e.massW).then((e => {
                                        console.log("e", e), e.value = ke ? "https://www.youtube.com/watch?v=" + xe : "https://www.youtube.com/shorts/" + xe, e.parentElement.children[1].click()
                                    })).catch(n), console.log(e.RoLOK), await e.sCBKJ(x, e.AimBi).then((async n => {
                                        if (e.PpELB(e.wXipF, e.wXipF)) r = 1, o.playbackRate = 16, i.log("Skipping ad :>");
                                        else {
                                            for (; document.querySelector("#" + n.id);) await e.PnCaM(Ce, 0);
                                            console.log("a_")
                                        }
                                    })).catch(n), console.log("b")
                                } catch (n) {
                                    console.warn(e.rZxbE, n)
                                }
                            } else e.XrIfi(e.Qhfgt, e.Qhfgt) ? console.warn(e.sDjKn) : e.ifmYy(r).then(o.log, i.warn)
                    }().then(console.log, console.warn)
                }
                if (e.YNrrA(document.domain, e.iWzlJ)) {
                    const qe = e => new Promise((n => setTimeout(n, e)));
                    async function k(n, t = 2e4) {
                        let r = !1;
                        for (setTimeout((() => {
                                console.log(e.vwUcE, n), r = !0
                            }), t); !document.querySelector(n) && (console.log("_", n, r), await e.nDlsw(qe, 500), !r););
                        if (console.log(n, r), r) throw e.vyHQL;
                        return document.querySelector(n)
                    }
                    let Me = document.createElement;
                    document._createElement = function(n, t) {
                        var r = {
                            yjQte: "was clicked",
                            fqgHa: function(n, t) {
                                return e.waihc(n, t)
                            },
                            sYVKT: "Caught"
                        };
                        let o = Me.call(document, n, t);
                        return o._click = o.click, o.click = function() {
                            if (console.log(o, r.yjQte, o.tagName), r.fqgHa("A", o.tagName)) {
                                console.log(r.sYVKT, o);
                                let e = o.download,
                                    n = o.href;
                                O = {
                                    id: new URL(location.href).searchParams.get("v"),
                                    href: n,
                                    title: e
                                }
                            } else o._click.apply(o)
                        }, console.log(o, e.amLot, o.tagName), o
                    }, async function() {
                        var t = {
                            SicxR: e.EUJJN,
                            lQTPj: e.IAhxv,
                            KyutG: function(n, t) {
                                return e.PnCaM(n, t)
                            },
                            jWEyE: function(e) {
                                return e()
                            }
                        };
                        if (!e.bBjxX(e.ndEop, e.amdeU)) return n.querySelector(e.BYFHB).children[0].innerText.split("\n")[1]; {
                            if (location.href.includes(e.wjwXf)) throw e.wjwXf;
                            e.hwOfl(GM_setValue, e.pJQcW, ""), e.KWOIg(GM_addValueChangeListener, e.pJQcW, (async function(e, r, o, i) {
                                console.log({
                                    a: e,
                                    b: r,
                                    c: o,
                                    d: i
                                }), o.includes("video download successful\ncheck downloads folder") && (t.lQTPj != t.lQTPj ? n.error(t.SicxR) : (await t.KyutG(qe, 1e3), t.jWEyE(close)))
                            }));
                            let c = await e.fAERX(k, e.massW),
                                u = await e.JbKXo(k, e.CzCxK);
                            id_ = new URL(location.href).searchParams.get("v"),
                                function(n, t) {
                                    var c = {
                                        EpXLE: function(n, t, r) {
                                            return e.QAmnU(n, t, r)
                                        },
                                        lIzrb: "browse-video-desc",
                                        MHJws: e.ZdpSe,
                                        dXHBt: "#main-content-video_detail > div > div.css-12kupwv-DivContentContainer.ege8lhx2 > div.css-1senhbu-DivLeftContainer.ege8lhx3 > div.css-1sb4dwc-DivPlayerContainer.eqrezik4 > div.css-3lfoqn-DivDescriptionContentWrapper-StyledDetailContentWrapper.eqrezik15 > div.css-r4nwrj-DivVideoInfoContainer.eqrezik3 > div.css-bs495z-DivWrapper.e1mzilcj0 > div > h1",
                                        kpBxY: e.OWQDR,
                                        nqRwf: function(n, t) {
                                            return e.DcfRh(n, t)
                                        },
                                        slqzX: e.JGqGr,
                                        dUIFf: "efsEf",
                                        lYaET: function(e, n) {
                                            return e === n
                                        },
                                        PNqDA: e.svluP
                                    };
                                    e.qbJGe(e.DRBPE, "rYAnK") ? ["focus", e.XtAYH, e.gXiDC, e.wCgYV].forEach((e => {
                                        var u = {
                                            XMMel: function(e, n, t) {
                                                return c.EpXLE(e, n, t)
                                            },
                                            pcRSK: c.lIzrb,
                                            gMqLu: c.MHJws,
                                            UWGti: function(e, n, t) {
                                                return c.EpXLE(e, n, t)
                                            },
                                            TllUh: c.dXHBt,
                                            ClYyc: c.kpBxY
                                        };
                                        if (!c.nqRwf(c.slqzX, c.dUIFf)) return u.XMMel(r, u.pcRSK, u.gMqLu) ? u.UWGti(o, u.pcRSK, u.gMqLu).innerText : i.querySelector(u.TllUh).innerText.replace(u.ClYyc, ""); {
                                            let r = new Event(e, {
                                                bubbles: !0,
                                                isTrusted: !0
                                            });
                                            n["on" + e] && n["on" + e](r), c.lYaET(e, "input") && (n.value = t), n.dispatchEvent(r)
                                        }
                                    })) : (r.log(c.PNqDA), o = 1, i.muted = 1)
                                }(c, "https://www.youtube.com/watch?v=" + id_), u.click()
                        }
                    }().then(console.log, (async t => {
                        var r = {
                            HVSdH: function(n, t) {
                                return e.zTrgj(n, t)
                            },
                            QDyWo: "Added playlist buttons",
                            vxeqU: function(n) {
                                return e.VpFXo(n)
                            },
                            CcgGT: "glaeK",
                            FJqZZ: e.KBghF,
                            rOuMS: "dlbutton"
                        };
                        e.vDwWz(t, e.wjwXf) && (console.log(e.zchqh), await k(e.NTzBu).then((t => {
                            height.selectedIndex = e.uRumf(height.options.length, 1), dlbutton.click(), open = window.open, window.open = function(e, n, t) {
                                console.log({
                                    a: e,
                                    b: n,
                                    c: t
                                })
                            }, e.ybErN(k, "#dlbutton").then((e => {
                                var t = {
                                        QEMsY: ".xt0psk2.xvs91rp.xo1l8bm.x5n08af.x18hxmgj",
                                        RRzQh: function(e, n) {
                                            return r.HVSdH(e, n)
                                        },
                                        JLJJM: r.QDyWo,
                                        lIVNP: function(e) {
                                            return r.vxeqU(e)
                                        },
                                        bwjoE: function(e, n) {
                                            return e !== n
                                        },
                                        lmwhr: r.CcgGT,
                                        MBqWN: function(e, n) {
                                            return r.HVSdH(e, n)
                                        },
                                        estHC: function(e, n) {
                                            return e !== n
                                        },
                                        GbVkM: r.FJqZZ,
                                        rJYQq: r.rOuMS
                                    },
                                    o = "";
                                setInterval((r => {
                                    var i = {
                                        coYeD: function(e) {
                                            return e()
                                        },
                                        yrlzn: function(e, n) {
                                            return t.RRzQh(e, n)
                                        },
                                        TdKPJ: function(e) {
                                            return e()
                                        },
                                        JshCp: t.JLJJM,
                                        nPzSq: function(e, n, t) {
                                            return e(n, t)
                                        },
                                        xQEpG: "buttons are gone?!?!",
                                        phGxb: function(e) {
                                            return t.lIVNP(e)
                                        }
                                    };
                                    if (t.bwjoE(t.lmwhr, "JiHIj")) {
                                        if (t.MBqWN(o, e.innerText)) {
                                            if (t.estHC(t.GbVkM, t.GbVkM)) return [...n.querySelectorAll(t.QEMsY)].pop().innerText.split("\n")[0];
                                            o = e.innerText, GM_setValue(t.rJYQq, o)
                                        }
                                    } else i.yrlzn(g, i.TdKPJ(w)) && U() ? (X.log(i.JshCp), i.nPzSq(B, (() => {
                                        oe().append(ie.br.element), i.coYeD(ce).append(le.element), ae().append(se.element)
                                    }), 100)) : O != i.coYeD(H) && !V() && oe.log(i.xQEpG), Q = i.phGxb(J)
                                }))
                            }))
                        })))
                    }))
                } else if (e.fVezk(document.domain, "snapsave.io")) {
                    if (!e.pOUcV(e.mAYHy, "GVOtg")) {
                        async function T(n, t = 2e4) {
                            var r = {
                                mNdzG: e.vwUcE
                            };
                            let o = !1;
                            for (e.GsPbc(setTimeout, (() => {
                                    console.log(r.mNdzG, n), o = !0
                                }), t); !document.querySelector(n) && (console.log("_", n, o), await e.aqzwi(g, 500), !o););
                            if (console.log(n, o), o) throw e.vyHQL;
                            return document.querySelector(n)
                        }
                        return _wfs = T, void async function() {
                            var n = await e.wMHLX(T, e.HujVk, 3e4);
                            if (n)
                                if (e.daYAW(e.dKHJM, e.RyYuw))
                                    for (var o = e.Otzjq.split("|"), i = 0;;) {
                                        switch (o[i++]) {
                                            case "0":
                                                ksearchvideo();
                                                continue;
                                            case "1":
                                                await e.fAERX(T, "#btn-action");
                                                continue;
                                            case "2":
                                                var c = {
                                                    id: id_,
                                                    href: f.href,
                                                    title: l,
                                                    length: {}
                                                };
                                                continue;
                                            case "3":
                                                u.selectedIndex = 0;
                                                continue;
                                            case "4":
                                                console.log(e.xWZoJ);
                                                continue;
                                            case "5":
                                                for (; !(f = await e.ptcar(T, e.SXCEL));) await e.dkYlj(g, 0);
                                                continue;
                                            case "6":
                                                var u = await e.aqzwi(T, e.TvwLA);
                                                continue;
                                            case "7":
                                                var l = (await e.DoQhs(_wfs, e.PvzIv)).querySelector("h3").innerText;
                                                continue;
                                            case "8":
                                                console.log(e.ZSHZl, c);
                                                continue;
                                            case "9":
                                                console.log(f.href);
                                                continue;
                                            case "10":
                                                e.wfZfF(setTimeout, e.UApyr(ksearchvideo), 1e3);
                                                continue;
                                            case "11":
                                                n.value = "https://www.youtube.com/watch?v=" + id_;
                                                continue;
                                            case "12":
                                                id_ = new URL(location.href).searchParams.get("v");
                                                continue;
                                            case "13":
                                                e.fAERX(convertFile, 0);
                                                continue;
                                            case "14":
                                                var f = await e.fzkap(T, e.SXCEL);
                                                continue;
                                            case "15":
                                                u.options[0].selected = !0;
                                                continue;
                                            case "16":
                                                for (;
                                                    "#" == f.getAttribute(e.epoaV);) await e.AtdPU(g, 0), f = await e.nDlsw(T, e.SXCEL);
                                                continue;
                                            case "17":
                                                e.FMbyE(opener, window).postMessage(c, "*");
                                                continue
                                        }
                                        break
                                    } else t(), r.warn(e.WJqXV);
                                else {
                                    if (!e.ntnQj(e.ohKzi, e.BJKDz)) {
                                        if (!e.YswZH(a, s)) throw new w(e.rlJaP);
                                        const n = d.createElement(h.tagName);
                                        for (let e of U.attributes) n.setAttribute(e.name, e.value);
                                        return n.style.cssText = p.style.cssText, n.className = v.className, n.innerHTML = g.innerHTML, n
                                    }
                                    e.caRXd(alert, e.YIzbl), console.warn(e.WJqXV)
                                }
                        }().then(console.log).catch(console.warn)
                    }
                    i = c.children, u.forEach = [].forEach, l.forEach((n => {
                        e.AtdPU(s, n)
                    }))
                } else if (e.dDCvB(document.domain, e.ILAre)) {
                    const Ae = e => new Promise((n => setTimeout(n, e)));
                    _wfs = async function(t, r = 2e4) {
                        var o = {
                            kYVLd: e.vwUcE
                        };
                        let i = !1;
                        for (e.mLvkY(setTimeout, (() => {
                                console.log(o.kYVLd, t), i = !0
                            }), r); !document.querySelector(t);)
                            if (e.QUjFV !== e.XFBwU) {
                                if (console.log("_", t, i), await Ae(500), i) break
                            } else n().click();
                        if (console.log(t, i), i) throw e.vyHQL;
                        return document.querySelector(t)
                    }, _copyElm = function(n) {
                        if (!e.JQAMi(e.uIrcC, e.gTTJF)) {
                            if (!(n instanceof Element)) {
                                if (e.pegJe(e.kHvnX, e.kHvnX)) throw new Error(e.rlJaP);
                                return e.aqzwi(t, this.toFixed(r))
                            }
                            const o = document.createElement(n.tagName);
                            for (let e of n.attributes) o.setAttribute(e.name, e.value);
                            return o.style.cssText = n.style.cssText, o.className = n.className, o.innerHTML = n.innerHTML, o
                        } {
                            c("Doesnt work yet");
                            const {
                                id: n,
                                href: t,
                                isShort: r
                            } = e.fAERX(u, l.target.parentElement.parentElement).map((e => ({
                                href: e.href,
                                short: e.href.includes("/short"),
                                id: d(e.href)
                            }))).filter((e => e.id))[0];
                            e.pJpSs(s, n, !1, !0, !1, !1, r ? new f(t) : null)
                        }
                    }, async function() {
                        var o = {
                            FOFaZ: function(n, t, r) {
                                return e.htDaA(n, t, r)
                            },
                            HzjHC: "1080",
                            kgfro: function(n, t) {
                                return e.HFzTw(n, t)
                            },
                            WJRPS: "NnMpD",
                            TxCta: "480",
                            Wxhjw: function(n) {
                                return e.abloR(n)
                            },
                            rDATE: function(n, t) {
                                return e.sAVRd(n, t)
                            }
                        };
                        if (e.YQncT == e.YQncT) {
                            location.href;
                            let i = (await e.xfrGi(_wfs, e.CQANg)).parentElement.parentElement.parentElement.parentElement;
                            new _e(e.hCyGm(_copyElm, i)).on(e.miQHM, (function() {
                                o.FOFaZ(open, (e => e.href)((e => (e.host = "clipr.xyz", e))(new URL(location.href))), o.HzjHC)
                            })).appendTo(i.parentNode).element.querySelector(".ScCoreButtonLabel-sc-s7h2b7-0").innerText = "1080P", new _e(e.nDlsw(_copyElm, i)).on("click", (function() {
                                if (e.PpELB(e.fokud, e.fokud)) return n.getElementsByClassName("ehlq8k34")[0];
                                open((e => e.href)((e => (e.host = "clipr.xyz", e))(new URL(location.href))), e.JdSAa)
                            })).appendTo(i.parentNode).element.querySelector(e.CQANg).innerText = e.mftnv, new _e(_copyElm(i)).on(e.miQHM, (function() {
                                o.kgfro(o.WJRPS, o.WJRPS) ? open((e => e.href)((e => (e.host = "clipr.xyz", e))(new URL(location.href))), o.TxCta) : t.value = r
                            })).appendTo(i.parentNode).element.querySelector(e.CQANg).innerText = e.mLMGk, new _e(e.PnCaM(_copyElm, i)).on(e.miQHM, (function() {
                                e.czdeB(open, (e => e.href)((e => (e.host = "clipr.xyz", e))(new URL(location.href))), e.fuPzp)
                            })).appendTo(i.parentNode).element.querySelector(e.CQANg).innerText = e.oxGJJ, new _e(e.PnCaM(_copyElm, i)).on(e.miQHM, (function() {
                                e.xfUOR(open, (e => e.href)((e => (e.host = "clipr.xyz", e))(new URL(location.href))), "VOD")
                            })).appendTo(i.parentNode).element.querySelector(e.CQANg).innerText = e.kruZF
                        } else try {
                            o.Wxhjw(l), o.Wxhjw(a), o.rDATE(s, f)
                        } catch (e) {}
                    }().catch(console.warn)
                } else if (e.VnjaR(document.domain, e.bTDdV))
                    if (e.RsnQl(e.pPeuG, e.pPeuG)) {
                        let [Re, ze, Le, Ue] = location.pathname.split("/");
                        if (e.QQKtN(Le, "clip")) return console.warn(e.IYNJU);
                        console.log(e.RXKCu);
                        const Pe = e => new Promise((n => setTimeout(n, e)));
                        async function E(n, t = 2e4) {
                            let r = !1;
                            for (e.GSQjf(setTimeout, (() => {
                                    if (e.nyhew === e.IwWje) return [...this];
                                    console.log(e.vwUcE, n), r = !0
                                }), t); !document.querySelector(n) && (console.log("_", n, r), await e.xfrGi(Pe, 500), !r););
                            if (console.log(n, r), r) throw "NotFound";
                            return document.querySelector(n)
                        }
                        _wfs = E, _wfs_ = E, _copyElm = function(n) {
                            if (!e.pMQnP(n, Element)) throw new Error(e.rlJaP);
                            const t = document.createElement(n.tagName);
                            for (let e of n.attributes) t.setAttribute(e.name, e.value);
                            return t.style.cssText = n.style.cssText, t.className = n.className, t.innerHTML = n.innerHTML, t
                        }, async function() {
                            var n = {
                                GIAxP: function(e, n, t) {
                                    return e(n, t)
                                },
                                LvoUT: "720",
                                bhcKU: function(n, t, r) {
                                    return e.REjVU(n, t, r)
                                }
                            };
                            location.href;
                            await e.CKssF(_wfs, ".Layout-sc-1xcs6mc-0 .bMOhzu");
                            let t = document.querySelectorAll(".Layout-sc-1xcs6mc-0 .bMOhzu")[1],
                                r = "a";
                            new _e(e.ptcar(_copyElm, t)).on(e.miQHM, (function() {
                                e.QAmnU(open, (e => (e.host = "clipr.xyz", e.pathname = e.pathname.replace("/" + ze + "/clip", ""), e.search = "", e))(new URL(location.href)).href, "1080")
                            })).appendTo(t.parentNode).element.querySelector(r).innerText = e.ykAbc, new _e(e.remAL(_copyElm, t)).on("click", (function() {
                                n.GIAxP(open, (e => (e.host = "clipr.xyz", e.pathname = e.pathname.replace("/" + ze + "/clip", ""), e.search = "", e))(new URL(location.href)).href, n.LvoUT)
                            })).appendTo(t.parentNode).element.querySelector(r).innerText = e.mftnv, new _e(e.FiRgQ(_copyElm, t)).on(e.miQHM, (function() {
                                n.bhcKU(open, (e => (e.host = "clipr.xyz", e.pathname = e.pathname.replace("/" + ze + "/clip", ""), e.search = "", e))(new URL(location.href)).href, "480")
                            })).appendTo(t.parentNode).element.querySelector(r).innerText = "480P", new _e(e.wRiCi(_copyElm, t)).on("click", (function() {
                                e.rHqGX(open, (e => (e.host = "clipr.xyz", e.pathname = e.pathname.replace("/" + ze + "/clip", ""), e.search = "", e))(new URL(location.href)).href, e.fuPzp)
                            })).appendTo(t.parentNode).element.querySelector(r).innerText = e.oxGJJ, new _e(_copyElm(t)).on(e.miQHM, (function() {
                                e.Ahcss(open, (e => (e.host = "clipr.xyz", e.pathname = e.pathname.replace("/" + ze + "/clip", ""), e.search = "", e))(new URL(location.href)).href, e.kruZF)
                            })).appendTo(t.parentNode).element.querySelector(e.CQANg).innerText = "VOD"
                        }().catch(console.warn)
                    } else e.ukMjC(o, (e => (e.host = "clipr.xyz", e.pathname = e.pathname.replace("/" + l + "/clip", ""), e.search = "", e))(new c(u.href)).href, e.cxpGj);
                else {
                    if (e.FmhzL(document.domain, "clipr.xyz")) {
                        async function S() {
                            var n = {
                                UbXww: function(n, t) {
                                    return e.JORdh(n, t)
                                }
                            };
                            if (!e.FdReq(e.Jncwd, e.VpuSx)) {
                                for (; e.AKVJL(document.readyState, e.XKeIw);) e.yyGyM("GdVFi", e.ONLgI) ? await e.ybErN(C, 0) : (i = c.children, u.forEach = [].forEach, l.forEach((e => {
                                    n.UbXww(s, e)
                                })));
                                return !0
                            }
                            t.value = r
                        }

                        function C(n) {
                            if ("wLXft" !== e.wMQDN) return new Promise((e => setTimeout(e, n)));
                            r.push([e.OljDu("w", o), e.sNcfJ(e.GDfVl, i)])
                        }
                        return void async function() {
                            let n = name;
                            await e.wwYJC(S), logger.log("Loaded");
                            let t = {
                                1080: document.querySelector(e.hdHJa).href,
                                720: document.querySelector(e.mLAjS).href,
                                480: document.querySelector(e.AZpeH).href,
                                360: document.querySelector(e.sLKGK).href,
                                VOD: document.querySelector("body > div.relative.overflow-hidden > main > div > div.px-4.mx-auto.max-w-7xl.sm\\:px-6.lg\\:px-8 > div.overflow-hidden.bg-white.rounded-xl.shadow > div > div > div:nth-child(2) > ul > div > li:nth-child(5) > div:nth-child(3) > a").href
                            }[n];
                            logger.log(1);
                            let r = document.querySelector("body > div.relative.overflow-hidden > main > div > div.px-4.mx-auto.max-w-7xl.sm\\:px-6.lg\\:px-8 > div.mb-6.space-y-3.lg\\:flex.lg\\:items-center.lg\\:justify-between.lg\\:space-y-0 > div.lg\\:flex.lg\\:items-center > p > span:nth-child(1)").innerText;
                            logger.log(2);
                            let o = document.querySelector(e.olmRF).innerText;
                            logger.log(3);
                            let i = "@" + r + " on Twitch | " + o + " - " + n + "P.mp4";
                            logger.log("Downloading file as: " + i), e.hjrGw(open, t), logger.log(4), await e.MRxTE(C, 4e3), e.grRvS(close)
                        }().catch(console.warn)
                    }
                    if (location.href.includes(e.xHNlo))
                        if (e.dCZVQ(e.nEJpH, "joVQu")) {
                            async function q(n, t = 3e4) {
                                var r;
                                for (e.remAL(g, t).then((e => r = !0)); !document.querySelector(n) && (await e.wwkCl(g, 0), !r););
                                return document.querySelector(n)
                            }
                            console.log("ok"), q("#u").then((async n => {
                                var t = {
                                    KRyHD: function(n, t) {
                                        return e.vAXvs(n, t)
                                    },
                                    jJZRe: e.SezGr,
                                    hqdxp: e.NvmBG,
                                    pDefH: function(e, n) {
                                        return e == n
                                    },
                                    rmQAq: function(n, t) {
                                        return e.TdcmE(n, t)
                                    },
                                    YHvje: e.amLot
                                };
                                if (e.JQAMi(e.BUyVg, e.JoDVq)) return this.element.remove(), this;
                                n.value = "https://www.youtube.com/watch?v=" + new URL(location.href).searchParams.get("v"), convert.click(), await e.RaqGm(g, 200), (await e.xfrGi(q, e.eStDR)).click(), (await e.dUwUl(q, ".process-button")).click(), q(e.uetDW).then((e => {
                                    var n = {
                                        edQQn: function(e, n) {
                                            return t.KRyHD(e, n)
                                        },
                                        zVqUJ: t.jJZRe,
                                        tMcJM: t.hqdxp,
                                        mVuzM: function(e, n) {
                                            return t.pDefH(e, n)
                                        },
                                        DZgWk: function(e, n) {
                                            return t.rmQAq(e, n)
                                        },
                                        oaYWp: function(e) {
                                            return e()
                                        },
                                        mXAcm: t.YHvje
                                    };
                                    let r = document.createElement;
                                    document.createElement = function(e, t) {
                                        let o = r.call(document, e, t);
                                        return o._click = o.click, o.click = function() {
                                            if (n.edQQn("bAuVB", n.zVqUJ))
                                                if (console.log(o, n.tMcJM, o.tagName), n.mVuzM("A", o.tagName)) {
                                                    console.log("Caught", o);
                                                    let e = o.download,
                                                        t = o.href;
                                                    O = {
                                                        id: new URL(location.href).searchParams.get("v"),
                                                        href: t,
                                                        title: e
                                                    }, n.DZgWk(opener, window).postMessage(O, "*"), n.oaYWp(close)
                                                } else o._click.apply(o)
                                        }, console.log(o, n.mXAcm, o.tagName), o
                                    }, e.click(), console.log("clicked"), setTimeout((() => e.click()), 1e3)
                                }))
                            })).then(console.log, console.warn)
                        } else e.vdREi(o, (M = new c(u.href), M.host = "clipr.xyz", M.pathname = M.pathname.replace("/" + l + "/clip", ""), M.search = "", M).href, e.kruZF)
                }
            }
        }
        var M, A, R, z, L;

        function U() {
            if (e.bBjxX(e.yKHOZ, e.GnWkJ)) {
                if (document.domain.includes(e.Edhql)) throw alert(e.UvrhH), ".";
                var t = [...document.getElementsByTagName(e.zpgIL)].filter(u).filter((e => !a(e)))[0],
                    r = e.kNcOD(findhref2, t, e.ncLQs).filter((e => !a(e))).filter(u).filter((e => "video-title" == e.id)).map(s).map(s).map((e => ({
                        id: setElement(findhref2(s(e))[0].href),
                        e: e
                    })));
                return r
            } {
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

        function P(n, o) {
            if (e.swSvf("sMmOz", e.kGDUU)) {
                const e = document.createElement("a");
                e.href = n, e.download = o, document.body.appendChild(e), e.click(), document.body.removeChild(e)
            } else t.push(r)
        }
        async function G() {
            if (!e.bYHou("SOpyC", e.URPlP)) {
                for (; L && !L.closed;) await e.xhaNi(g, 0);
                return 1
            }
            r.log("TimeOut for", o), i = !0
        }

        function D(n, t = "aria-label", d = document.body) {
            var h = {
                ozjkc: function(n, t) {
                    return e.rKCay(n, t)
                },
                TVEjG: e.RuqwD,
                wpGNQ: e.mtOwV,
                GeUpB: function(e) {
                    return e()
                },
                CQezI: function(e) {
                    return e()
                },
                tSKvQ: e.XKSvB,
                ZgwJa: function(n, t) {
                    return e.daYAW(n, t)
                },
                EUaZy: e.llaPY,
                GDncD: function(n, t) {
                    return e.waihc(n, t)
                },
                qiRKc: "convert1",
                UYFOa: "this",
                zOhVH: e.DGkNF
            };
            if (e.yyGyM(e.SEneh, e.ZsOes)) {
                var m = [];
                return e.YyQxy((function e(r) {
                    var d = {
                        yOpfo: "browse-copy",
                        bBPPk: function(e) {
                            return h.GeUpB(e)
                        },
                        ftMsF: function(e) {
                            return h.CQezI(e)
                        }
                    };
                    if (h.ozjkc(h.tSKvQ, h.tSKvQ)) try {
                        return !!o("browse-copy", "data-e2e").parentNode && i(d.yOpfo, "data-e2e").parentNode
                    } catch (e) {
                        return !1
                    } else {
                        var p = !1;
                        if (t) {
                            if (r.getAttribute(t) == n) {
                                if (h.ZgwJa(h.EUaZy, h.EUaZy)) {
                                    for (let e in arguments[1]) arguments[0].setAttribute(e, arguments[1][e]);
                                    return arguments[0]
                                }
                                m.push(r), p = 1
                            }
                        } else [...r.attributes].map((e => {
                            if (h.ozjkc(h.TVEjG, h.wpGNQ)) {
                                const {
                                    name: n,
                                    value: t
                                } = e;
                                return {
                                    name: n,
                                    value: t
                                }
                            }
                            d.bBPPk(c).append(u.br.element), d.bBPPk(l).append(a.element), d.ftMsF(s).append(f.element)
                        })).filter((e => e.value == n)).length && (m.push(r), p = 1);
                        r.children.length && !p && ((r = r.children).forEach = [].forEach, r.forEach((n => {
                            e(n)
                        })))
                    }
                }), d), m.length ? e.YOyGU(m.length, 1) ? m[0] : m || !1 : null
            }
            if (h.GDncD(r.style.display, "none")) throw c.getElementById(h.qiRKc).click(), h.UYFOa;
            i.log(h.zOhVH)
        }

        function j(n, t = "aria-label", r = document.body) {
            var o = {
                    iKMMd: function(n, t) {
                        return e.HUGmx(n, t)
                    },
                    jBXxH: function(e, n) {
                        return e == n
                    }
                },
                i = [];
            return e.xfrGi((function e(r) {
                o.jBXxH(r.getAttribute(t), n) ? i.push(r) : r.children.length && ((r = r.children).forEach = [].forEach, r.forEach((n => {
                    o.iKMMd(e, n)
                })))
            }), r), e.XnpER(i.length, 1) ? i[0] : e.Rsxnm(i, !1)
        }

        function F() {
            document.querySelector(e.DOZVE).click()
        }

        function I() {
            (e.czdeB(D, e.DlatF, "title") && e.czdeB(D, "Mute", "title")[0] || D("Mute (m)", e.tuEdB)).click()
        }

        function O() {
            (query(e.MqWTi) && e.ptcar(query, "#right-controls").querySelectorAll("path")[0].getAttribute("d") == UnmutePath && e.KWOIg(D, "Mute", e.tuEdB)[0] || D(e.oGFZx, "title") || e.NjwPm(D, e.ijeoh, e.tuEdB)).click()
        }
        console.log("B?"), _getIds = U, info = {}, downloadT = function(t, r = !1, i = !0, u = !1, l = !1, a = "") {
            var s = {
                FhfuL: ".ytp-volume-area > .ytp-mute-button",
                jLeWC: function(n, t) {
                    return e.ceMsv(n, t)
                },
                IcqPl: function(n, t, r) {
                    return e.GSQjf(n, t, r)
                },
                rdUOU: function(n, t) {
                    return e.vKcfx(n, t)
                },
                WVEPF: e.vmJqd,
                QYxDI: "https://y2mate.nu",
                CqSer: function(n, t) {
                    return e.vKcfx(n, t)
                },
                auPDc: e.JndyF,
                nKdBN: function(n, t) {
                    return e.JkcIr(n, t)
                },
                lPljh: e.qcvsY,
                ZanfG: function(n, t) {
                    return e.NUeOH(n, t)
                },
                TnAlt: ".mp4",
                GFTVU: e.HxnMc,
                telBB: e.tjuxK,
                TmgEl: e.ycvPE,
                POwGm: e.mCRnO,
                JuZXz: function(e, n, t) {
                    return e(n, t)
                },
                QyGSX: function(n, t) {
                    return e.JbKXo(n, t)
                },
                dWLKe: e.FPuXc,
                JoGZE: e.RdIdF,
                ZWoMX: function(n, t) {
                    return e.MRxTE(n, t)
                },
                EGqsq: "zOhao",
                IoDqB: e.vMPCR,
                RRqXQ: e.UdOVX,
                rwzGO: e.cURWJ,
                AbOtG: e.XtPAZ,
                xemWa: e.SEzRT,
                cbJnV: e.OshYI,
                yhMvy: "&useT=",
                Nysfb: e.QQWsv,
                ISBAU: e.AMmrw,
                oljjj: "iframe",
                sFunt: e.eflhG,
                AvdEK: e.TsARU,
                iMVVA: e.bywkw,
                OoWgy: e.ilJpC,
                nOkTW: e.TMvDl,
                aKVXw: function(n, t, r) {
                    return e.KiMsm(n, t, r)
                }
            };
            let f = e.NUeOH(e.sNcfJ(t, u ? "mp4" : "mp3"), i);
            var y;
            if (!(y = document.getElementById(f)) || y.remove(), localStorage[f] && !r && (!l || !e.aqzwi(confirm, "You have already download this video as ." + (u ? e.IepOF : e.OshYI) + "\nStill download?"))) return;
            let b = e.EHSqb(a, location);
            var x = new URL(location.href);
            x.host = x.host.replace(e.ZSgUH, e.aTEfA), console.log("o", x);
            let k = [e.OljDu(e.sNcfJ(e.vMPCR, e.sAVRd(GM_getValue, e.UdOVX) || e.zsFvi), "/"), e.cURWJ, t, e.Vxgrf, x.pathname.startsWith(e.XtPAZ) ? 1 : 0, "&mp4=", u ? e.IepOF : e.OshYI, e.oZTrh, i];
            console.log(f, k);
            return e.OHYIG(c, e.IYGwI, (function() {
                var e = {
                    IrKbU: s.FhfuL
                };
                s.jLeWC("uiBGU", "UqllS") ? n.querySelector(e.IrKbU).click() : info[t].close()
            }), !0), onmessage = function(e) {
                if (s.rdUOU(e.origin, o) || e.origin.match(/https?:\/{2}onlymp3\.to/) || e.origin.match(/https?:\/{2}en\.onlymp3\.to/) || e.origin.match(/https?:\/{2}en(\d)\.onlinevideoconverter\.pro/) || s.rdUOU(e.origin, s.WVEPF) || s.rdUOU(e.origin, s.QYxDI) || s.CqSer(e.origin, "https://snapsave.io") || s.CqSer(e.origin, s.auPDc))
                    if (s.nKdBN(s.lPljh, "OyKhq")) {
                        var n = {
                            eiIGF: function(e) {
                                return e()
                            },
                            EvMup: function(e, n, t) {
                                return s.IcqPl(e, n, t)
                            }
                        };
                        c((function() {
                            d.value = h, n.eiIGF(m), n.EvMup(p, v, 1e3)
                        }), {
                            callback() {}
                        })
                    } else {
                        const {
                            data: {
                                href: n,
                                title: r,
                                length: o,
                                id: c,
                                _: l
                            }
                        } = e;
                        let a = s.ZanfG(r, u ? s.TnAlt : s.GFTVU);
                        (t = document.getElementById(l)) && t.remove(), console.log(s.telBB, {
                            href: n,
                            title: r,
                            length: o,
                            id: c,
                            _: l
                        }, e), J.set("innerText", "Get MP3"), J.set(s.TmgEl, !1), i ? (console.log(s.POwGm), s.JuZXz(P, n, a)) : s.QyGSX(open, n), localStorage[l] = n
                    } else console.log(s.dWLKe, e);
                var t
            }, info[t] = u ? e.hFXol(open, b.pathname.startsWith(e.XtPAZ) ? e.pernU : "https://qdownloader.cc/youtube-video-downloader.html?v=" + t, [t, b.pathname.startsWith(e.XtPAZ) ? 1 : 0, e.NUeOH(u, !1)], "width=400,height=500") : ! function() {
                var e = {
                    uImFO: function(e, n) {
                        return s.ZWoMX(e, n)
                    },
                    wXlOx: function(e, n) {
                        return s.jLeWC(e, n)
                    },
                    PuWPA: s.EGqsq,
                    VcDVo: function(e, n) {
                        return s.ZanfG(e, n)
                    },
                    bFzzj: s.IoDqB,
                    wYljn: function(e, n) {
                        return e(n)
                    },
                    JQcLE: s.RRqXQ,
                    GQTyg: "0HzX",
                    aWFKQ: s.rwzGO,
                    AKdlu: "&s=",
                    HctAS: s.AbOtG,
                    fFrHJ: s.xemWa,
                    EQzaF: s.cbJnV,
                    KCsFQ: s.yhMvy,
                    awuMS: s.Nysfb
                };
                if (!s.jLeWC(s.ISBAU, "nvXoI")) {
                    var r = new _e(s.oljjj, {
                        src: k.join(""),
                        id: f,
                        useT: i,
                        loading: s.sFunt,
                        referrerpolicy: "no-referrer",
                        allowfullscreen: !0,
                        sandbox: s.AvdEK,
                        allow: s.iMVVA
                    }).style({
                        border: 0,
                        position: s.OoWgy,
                        width: 0,
                        height: 0,
                        "pointer-events": s.nOkTW,
                        opacity: 1
                    });
                    return z = s.aKVXw(GM_addValueChangeListener, s.RRqXQ, (function(n, o, c, l) {
                        var a = {
                            qJLNr: function(n, t) {
                                return e.uImFO(n, t)
                            }
                        };
                        e.wXlOx(e.PuWPA, e.PuWPA) ? (k = [e.VcDVo(e.bFzzj + (e.wYljn(GM_getValue, e.JQcLE) || e.GQTyg), "/"), e.aWFKQ, t, e.AKdlu, x.pathname.startsWith(e.HctAS) ? 1 : 0, e.fFrHJ, u ? "mp4" : e.EQzaF, e.KCsFQ, i], r.set(e.awuMS, k.join(""))) : (this[d[0]] = a.qJLNr(h, m[p[1]]), !n[g[1]] && !w && (D = !0, j = F[1], I.log(O)))
                    })), r.appendTo(document.body), r.closed = !1, r
                }
                n.querySelectorAll(s.JoGZE)[0].children
            }()
        }, downloadTikTok = function(c, u) {
            var l = {
                mOQpC: function(e, n) {
                    return e(n)
                },
                oyMqI: e.DRRHy,
                IAQMa: "xzFGn",
                kNTkS: function(e, n) {
                    return e == n
                },
                kLCgM: e.LWZWE,
                irFIk: e.jTZGV,
                KPeYR: function(n, t, r, o) {
                    return e.hFXol(n, t, r, o)
                },
                fVmxz: function(n, t) {
                    return e.nOLNf(n, t)
                },
                CiMPG: e.ICBgk,
                xEJgS: e.Tsmkd,
                RMmwD: e.HxnMc,
                jNFDF: function(n, t) {
                    return e.pegJe(n, t)
                },
                QZNLl: e.SXBpg,
                gZpmA: function(n, t) {
                    return e.NUeOH(n, t)
                }
            };
            (async function(c, u) {
                var a = {
                    yonIJ: e.BXtfn,
                    ksDQT: function(e, n) {
                        return e(n)
                    },
                    SAWqy: "Added That Thing",
                    GBjWZ: function(n, t) {
                        return e.szGmJ(n, t)
                    },
                    niwHf: function(e, n) {
                        return e(n)
                    },
                    QAjon: e.QJptI,
                    VJeoU: function(e, n) {
                        return e(n)
                    }
                };
                if (e.FdReq("FHSaW", e.APfGP))(!s[f] || d[h].closed) && (P[z] = null, l.mOQpC(L, G), D.log(j, l.oyMqI));
                else {
                    await e.abloR(G), console.log("ez");
                    let s = u.videoID,
                        f = u.username,
                        d = e.byDlk(t);
                    onmessage = function(e) {
                        if (l.IAQMa != l.IAQMa) r.setAttribute(o.name, i.value);
                        else if (l.kNTkS(e.origin, o) || e.origin.match(/https?:\/{2}savetik\.csavetik.coo/) || e.origin.match(/https?:\/{2}en\.onlymp3\.to/) || e.origin.match(/https?:\/{2}en(\d)\.onlinevideoconverter\.pro/) || e.origin == l.kLCgM) {
                            var {
                                data: {
                                    href: t,
                                    links: c,
                                    title: u,
                                    length: s,
                                    id: f,
                                    mp4: h,
                                    info: {
                                        username: m
                                    }
                                }
                            } = e;
                            if (console.log("Handled", {
                                    href: t,
                                    title: u,
                                    length: s,
                                    id: f,
                                    links: c,
                                    mp4: h
                                }, e), "https://savetik.co" == e.origin) "BhvCT" !== l.irFIk ? n.querySelector("#VGHGFf > div > div.Eddif > div:nth-child(2) > button > div.VfPpkd-RLmnJb").click() : (u = d, l.KPeYR(P, h ? c[0] : c.pop(), l.fVmxz(l.fVmxz(m, l.CiMPG), u) + (h ? l.xEJgS : l.RMmwD), L));
                            else if (l.jNFDF(l.QZNLl, "UVFYG")) {
                                if (useT) {
                                    let e = document.createElement("a");
                                    e.download = l.gZpmA(u, l.RMmwD), e.href = t, document.body.appendChild(e), e.click(), e.remove()
                                } else l.mOQpC(open, t);
                                localStorage[_] = t
                            } else !g.querySelector(a.yonIJ) && (a.ksDQT(w, !0), U.parentNode.prepend(P), z.prepend(L.element), G.log(a.SAWqy)), a.GBjWZ(a.ksDQT(D, e.href), F) && (a.niwHf(I, !0), O.set("src", H), V.log(a.QAjon), N = a.VJeoU(Q, J.href))
                        } else console.log("Unhandled Post", e)
                    }, L = open(e.zkboR, ["https://www.tiktok.com/" + f + "/video/" + s, e.LFPRg(c, !1)], "width=400,height=500")
                }
            })(c, u).then(console.log, console.warn)
        }, abc_ = D, se = I, Um = O;
        var H = 0;

        function V(t) {
            var r, o = {
                lncOx: e.utWCz,
                DydqN: "this"
            };
            if (!t) {
                if (e.zzsue !== e.gbzMM) return !1;
                throw n.getElementById(o.lncOx).click(), o.DydqN
            }
            if ("aEwnp" === e.qkkIF) {
                if (!t.closed) return !0;
                if (!e.fAJpf(e.EDcsI, e.TJKbD)) return !1;
                try {
                    let n = e.szGmJ(typeof D, "undefined") ? j : F.querySelectorAll;
                    return I ? [...J.querySelectorAll(X)].filter((e => !(null === n.offsetParent)))[0] : (r = n(n) ? e.HRfGs(n, V).length ? e.hCyGm(n, t)[0] : e.mvQlk(n, Q) : null, n.keys(r).length ? r : null)
                } catch {}
            } else n.muted = 0
        }
        async function N(n = [
            ["w1", "win1"],
            ["w2", "win2"],
            ["w3", "win3"],
            ["w4", "win4"]
        ]) {
            var t = {
                YaFXk: e.mCRnO,
                kFZLf: function(e, n, t) {
                    return e(n, t)
                },
                YKZTN: function(n, t) {
                    return e.kJoqz(n, t)
                },
                NFPKD: e.uawZz,
                nLBYW: "PcolN"
            };
            if (!e.Pbyxa(e.Vwokg, e.Vwokg)) {
                var r, l = !1;
                return await new Promise(((o, i) => {
                    var c = e.hHxdy(setInterval, (e => {
                        var i = {
                            YgJBq: function(e, n) {
                                return t.YKZTN(e, n)
                            }
                        };
                        if (n.forEach((e => {
                                this[e[0]] = i.YgJBq(V, window[e[1]]), !window[e[1]] && !l && (l = !0, r = e[1], console.log(e))
                            })), r) {
                            if (t.NFPKD === t.nLBYW) return !0;
                            t.YKZTN(o, r), clearInterval(c)
                        }
                    }), 500)
                })), r
            }
            o.log(t.YaFXk), t.kFZLf(i, c, u)
        }

        function Q(n, t, r) {
            var o = {
                vkLCK: "4|3|2|0|1",
                FGHgy: function(n, t, r, o, i) {
                    return e.FLzGv(n, t, r, o, i)
                },
                AjpKE: function(n, t) {
                    return e.CqTsC(n, t)
                }
            };
            if (!t) return e.LvOvX(alert, "This button is corrently broken");
            var s = e.BmtNV(_getIds),
                f = [];
            for (let t = 0; e.jnAXo(t, n); t++) {
                if (e.KjdFo(e.lBVoH, e.WtSmO)) return i(e.ATqur) ? e.mYlwH(c, e.ATqur).click ? e.OvORc(u, e.ATqur) : l.querySelector(e.mcEMf) : a.querySelector("._afxw");
                f.push([e.sNcfJ("w", t), e.OljDu(e.GDfVl, t)])
            }
            s.forEach((({
                id: e
            }, n) => {
                var i = {
                    HXsXb: function(e, n) {
                        return e(n)
                    },
                    hOCqo: "isclosed",
                    DTanf: o.vkLCK,
                    rSpsj: function(e, n, t) {
                        return e(n, t)
                    },
                    PwKmQ: function(e, n, t, r, i) {
                        return o.FGHgy(e, n, t, r, i)
                    },
                    lqyrf: "download"
                };
                o.AjpKE(N, f).then((o => {
                    for (var c = i.DTanf.split("|"), u = 0;;) {
                        switch (c[u++]) {
                            case "0":
                                window.addEventListener("unload", (function(e) {
                                    window[o].close()
                                }));
                                continue;
                            case "1":
                                var l = i.rSpsj(setInterval, (e => {
                                    (!window[o] || window[o].closed) && (window[o] = null, i.HXsXb(clearInterval, l), console.log(o, i.hOCqo))
                                }), 300);
                                continue;
                            case "2":
                                window[o] = i.PwKmQ(downloadT, e, r, !0, !!t);
                                continue;
                            case "3":
                                console.log(i.lqyrf, e, n);
                                continue;
                            case "4":
                                if ((info[e] || localStorage[e]) && !r) return;
                                continue
                        }
                        break
                    }
                }))
            }))
        }
        window.ch3 = V, window.getWin = N, WIP_ = Q;
        var J = new n("button").set(e.yhUGr, "Get MP3").on("click", (function(n) {
                var t = {
                    qqURV: e.qckyT,
                    coMFa: function(n, t, r) {
                        return e.MmtyJ(n, t, r)
                    },
                    RfZUY: function(n) {
                        return e.rqeLV(n)
                    }
                };
                if (e.UoJvE == e.UoJvE) J.set(e.yhUGr, e.reEQk), J.set(e.ycvPE, !0), e.pfFRo(downloadT, e.jAVTA(setElement, location.href), !0, !0, !1, !0);
                else {
                    var r = {
                        eiWWC: t.qqURV,
                        IXtxd: function(e, n, r) {
                            return t.coMFa(e, n, r)
                        },
                        Cbcwb: function(e) {
                            return t.RfZUY(e)
                        }
                    };
                    i = function() {
                        r.IXtxd(s, "SC", r.Cbcwb(f));
                        var e = d();
                        e.onclose = function(n) {
                            e.log(r.eiWWC)
                        }
                    }
                }
            })),
            X = new n(e.pzhNR).set("innerText", e.AFLpk).on(e.miQHM, (function(n) {
                e.pfFRo(downloadT, e.YyQxy(setElement, location.href), !0, !0, !0, !0)
            })),
            B = new n(e.pzhNR).set("innerText", "PlayList MP3").on(e.miQHM, (function(n) {
                e.idoho(WIP_, 2, !1, !1)
            })),
            Y = new n(e.pzhNR).set(e.yhUGr, e.zbyqs).on(e.miQHM, (function(n) {
                e.xmigU(WIP_, 2, !0, !1)
            })),
            W = new n(e.pzhNR).set(e.yhUGr, e.AFLpk).on("click", (function(t) {
                var r = {
                    PEuDN: e.lkEkq
                };
                e.kUOjS(e.lSSZn, "YURwR") ? n.classList.remove(r.PEuDN) : e.ISqDg(downloadTikTok, !0, e.caRXd(setElement2, e.xTcvh(getClass, e.GVMaX) ? getClass(e.GVMaX).innerText : location.href))
            })).style({
                color: "white"
            }),
            K = new n("button", {
                id: e.oyVwJ
            }).set(e.yhUGr, e.AFLpk).on("click", (function(n) {
                e.xfUOR(downloadTikTok, !0, setElement2(e.wEItl(getClass, e.GVMaX) ? e.CKssF(getClass, "ehlq8k34").innerText : location.href))
            })).style({
                color: e.apiXZ
            }),
            Z = new n(e.pzhNR).set(e.yhUGr, "Get MP3").on(e.miQHM, (function(n) {
                downloadTikTok(!1, setElement2(e.DoQhs(getClass, e.GVMaX) ? e.fZtTU(getClass, "ehlq8k34").innerText : location.href))
            })).style({
                color: e.apiXZ
            });

        function ee() {
            return e.TOkhm(e.nUoPJ, e.nUoPJ) ? document.querySelector(e.nfQTG) || document.querySelector(e.KvBEO) : n.querySelector(e.tnzla)
        }

        function ne() {
            var c = {
                GcFdd: function(n, t, r) {
                    return e.PXnug(n, t, r)
                },
                oNcYO: e.ItiaJ,
                zXAHQ: e.oEliw,
                AOdLe: e.viMgK,
                MRSUr: function(n, t, r, o, i) {
                    return e.FLzGv(n, t, r, o, i)
                },
                aFlQB: e.nxYKL,
                bwpZd: "tik-video",
                KGiGe: e.EcSVj
            };
            if (e.PfQHn("mcHLd", e.ARfUz)) {
                let f = c.GcFdd(r, o, c.oNcYO)[0];
                i.add([f.src, f.getAttribute(c.zXAHQ)])
            } else {
                const d = ee();

                function l() {
                    try {
                        return !(![...document.querySelectorAll(e.UeCeY)].filter(u).filter((e => !a(e)))[0] && !query(e.lOBnU)) && ([...document.querySelectorAll(e.UeCeY)].filter(u).filter((e => !a(e)))[0] || e.hutaz(query, e.lOBnU))
                    } catch (e) {
                        return !1
                    }
                }
                console.log(d), J.appendTo(d), X.appendTo(d), console.log(e.PmNsW);
                var s = !1;
                e.BiCBO(setInterval, (() => {
                    var o = {
                        qTJYc: function(n, t) {
                            return e.JQAMi(n, t)
                        },
                        DrDFd: e.XIOqn,
                        DQHth: function(n) {
                            return e.wwYJC(n)
                        }
                    };
                    if (e.iHJIw(e.RDgeE, "FJZUl")) t.getElementById(c.AOdLe).innerText.length > 5 && r.reload();
                    else {
                        if (e.jbDHx(s, l()) && e.DFjJG(l))
                            if (e.OHizq !== e.IGCyG) console.log(e.xhsAv), e.ouhtT(setTimeout, (() => {
                                o.qTJYc(o.DrDFd, "JPGzS") ? (o.DQHth(l).append(n.br.element), o.DQHth(l).append(B.element), o.DQHth(l).append(Y.element)) : n = !0
                            }), 100);
                            else {
                                var i = {
                                    jBjDF: function(e, n) {
                                        return e == n
                                    },
                                    KnuWw: "Handled",
                                    XOEuB: function(e, n, t, r, o) {
                                        return c.MRSUr(e, n, t, r, o)
                                    },
                                    ebHfg: function(e, n, t) {
                                        return c.GcFdd(e, n, t)
                                    },
                                    ewhOP: "Unhandled Post"
                                };
                                v.log("Found");
                                var u = {
                                        title: g.getElementsByClassName(c.aFlQB)[0].innerText,
                                        links: w(U.getElementsByClassName(c.bwpZd)[0]).map((e => e.href)),
                                        mp4: 1 == P,
                                        info: z(L)
                                    },
                                    a = c.KGiGe;
                                G = function(e) {
                                    if (i.jBjDF(e.origin, a)) {
                                        var {
                                            data: {
                                                s: n,
                                                url: t,
                                                title: r
                                            }
                                        } = e;
                                        K.log(i.KnuWw, {
                                            s: n,
                                            url: t,
                                            title: r
                                        }, e), n ? i.ebHfg(ne, oe, 100) : i.XOEuB(ie, t, r, null, ce)
                                    } else W.log(i.ewhOP, e)
                                }, (V || N).postMessage(u, "*")
                            } else s != e.uodaQ(l) && !l() && console.log("buttons are gone?!?!");
                        s = e.VpFXo(l)
                    }
                }), 100)
            }
        }
        if (console.log(e.IBmAG), a1 = [
                [e.uSlRX, function() {
                    var n = {
                        RbeLT: e.eNCXG,
                        eXKsm: function(e, n) {
                            return e || n
                        }
                    };
                    e.TIhbw !== e.vFlng ? e.tSqcB(l, (function() {
                        if (e.pOUcV("CdIrd", e.hEqgD)) {
                            e.DFjJG(ee);
                            if (!e.lSvTl(ee)) throw "Cant append buttons yet";
                            return console.log("Posting"), e.iTkcH(ne)
                        }
                        u.error(n.RbeLT, l), (n.eXKsm(a, s) || f).postMessage({
                            url: d,
                            title: h,
                            s: !1
                        }, "*")
                    }), {
                        callback: function() {}
                    }) : t.log("%c" + this.title.body + " | %c" + r, "color: " + this.title.color + "; font-weight: bold; font-size: " + this.title.size + ";", "color: " + this.body.color + "; font-weight: bold; font-size: " + this.body.size + "; text-shadow: 0 0 5px rgba(0,0,0,0.2);")
                }],
                ["tiktok", function() {
                    var t = {
                        DqjrN: function(n, t) {
                            return e.pOUcV(n, t)
                        },
                        MuNzW: "xezsO",
                        sRjkW: e.ZdpSe,
                        iczYk: function(n, t) {
                            return e.TOkhm(n, t)
                        },
                        xHYMl: e.uYKye,
                        cxsMs: e.VAGcq,
                        wSubX: e.aSbvo,
                        HWaMC: "Opening",
                        YbtOc: e.jYSPd,
                        oHHkF: function(e, n) {
                            return e === n
                        },
                        OMLaG: "EYfVP",
                        zxCgI: function(n) {
                            return e.GSlAa(n)
                        },
                        Ijtrd: e.BCdVz,
                        syswT: e.PmNsW,
                        RIXTo: function(n, t, r) {
                            return e.EdMFM(n, t, r)
                        }
                    };
                    addEventListener(e.FugUT, (function() {
                        var a = {
                            ogiUa: function(e, n, t) {
                                return e(n, t)
                            },
                            MPexP: "Cant Append",
                            cLGRF: e.gNdbg,
                            kOkKD: e.ufDjg,
                            xqMOk: "720",
                            StSvi: e.MJbRd,
                            Cpyfo: e.WFDhF,
                            eQSVM: function(n, t) {
                                return e.zTrgj(n, t)
                            },
                            iAATu: function(n) {
                                return e.TGzMt(n)
                            },
                            YApzd: e.OZliL,
                            QcvJE: e.xhsAv,
                            JRbbv: function(n, t, r) {
                                return e.vdREi(n, t, r)
                            },
                            gsiFq: function(n) {
                                return e.djUQg(n)
                            },
                            cOkRo: function(n) {
                                return e.FUEYa(n)
                            },
                            AGTKx: e.sHLWL
                        };
                        e.EdMFM(l, (function() {
                            if (!a.ogiUa(abc_, "browse-copy", "data-e2e")) throw a.MPexP;
                            W.appendTo(document.querySelectorAll(".e1mecfx011")), Z.appendTo(document.querySelectorAll(a.cLGRF))
                        }), {
                            callback: function() {}
                        }), e.EFJlr(l, (function() {
                            var e = {
                                hbCsG: function(e, n) {
                                    return t.DqjrN(e, n)
                                },
                                mHNRS: t.MuNzW,
                                hMOfa: "IlsKv",
                                FEren: function(e, n) {
                                    return e !== n
                                },
                                nyKuR: function(e, n, t) {
                                    return e(n, t)
                                },
                                lSOrn: "browse-copy",
                                MjZSl: t.sRjkW,
                                PaUNR: function(e, n) {
                                    return t.iczYk(e, n)
                                },
                                JxUIx: t.xHYMl,
                                UNvoZ: "YGfIU",
                                pafza: t.cxsMs,
                                nwgPT: t.wSubX,
                                CCbkg: t.HWaMC,
                                dkguN: function(e) {
                                    return e()
                                },
                                nXopS: t.YbtOc,
                                uAvch: function(e, n) {
                                    return t.oHHkF(e, n)
                                },
                                tlsQT: t.OMLaG,
                                oTAdo: function(e) {
                                    return t.zxCgI(e)
                                }
                            };
                            if (!document.getElementsByClassName("e13wiwn60")[0]) throw "Cant Append";

                            function f() {
                                var n, t = {
                                    fmyDM: function(e, n, t) {
                                        return e(n, t)
                                    },
                                    SPpNT: "360"
                                };
                                if (!e.hbCsG(e.mHNRS, e.hMOfa)) return !1;
                                try {
                                    return !e.FEren("LZptt", "LZptt") && (!!e.nyKuR(abc_, e.lSOrn, e.MjZSl).parentNode && abc_(e.lSOrn, e.MjZSl).parentNode)
                                } catch (r) {
                                    if (!e.PaUNR(e.JxUIx, e.UNvoZ)) return !1;
                                    t.fmyDM(o, (n = new c(u.href), n.host = "clipr.xyz", n.pathname = n.pathname.replace("/" + l + "/clip", ""), n.search = "", n).href, t.SPpNT)
                                }
                            }
                            W.appendTo(document.getElementsByClassName(t.Ijtrd)[0]), Z.appendTo(document.getElementsByClassName(t.Ijtrd)[0]), console.log(t.syswT);
                            var d = !1;
                            t.RIXTo(setInterval, (() => {
                                var t, m = {
                                    ASosl: a.kOkKD,
                                    PBmMo: function(e, n, t) {
                                        return e(n, t)
                                    },
                                    SyALb: a.xqMOk
                                };
                                if (a.StSvi !== a.Cpyfo) {
                                    if (a.eQSVM(d, a.iAATu(f)) && a.iAATu(f)) {
                                        var p;
                                        if ("heMGE" === a.YApzd) return [...s.getElementsByClassName(e.pafza)].forEach(((e, n) => {
                                            e.innerText.startsWith(n) && (p = new z(e.href).searchParams.get("v"))
                                        })), !p && h.getElementsByClassName(e.nwgPT)[0] ? (P.log(e.CCbkg), z.getElementsByClassName(e.nwgPT)[0].click(), e.dkguN(L)) : p ? (g.log(e.nXopS), w.getElementsByClassName(e.nwgPT)[0].click(), p) : U.warn("Not Found!");
                                        console.log(a.QcvJE), a.JRbbv(setTimeout, (() => {
                                            e.uAvch(e.tlsQT, "EYfVP") ? (f().append(n.br.element), e.oTAdo(f).append(W.element), e.dkguN(f).append(Z.element)) : (r.appendTo(o), i.log(m.ASosl))
                                        }), 100)
                                    } else a.eQSVM(d, a.gsiFq(f)) && !a.cOkRo(f) && console.log(a.AGTKx);
                                    d = a.iAATu(f)
                                } else m.PBmMo(o, (t = new c(u.href), t.host = "clipr.xyz", t.pathname = t.pathname.replace("/" + l + "/clip", ""), t.search = "", t).href, m.SyALb)
                            }), 100)
                        }), {
                            callback: function() {}
                        })
                    }))
                }]
            ].filter((e => location.host.includes(e[0])))[0], a1 && a1[1] && a1[1](), console.log(a1), delete a1, __ex_ = ee, location.href.includes("onlymp3.app") || location.href.includes(e.xvpnB)) {
            if (e.nKyHp(e.UqPlQ, e.UqPlQ)) {
                console.log("onlymp3.app");

                function te() {
                    if ("NcsVo" === e.clhzi) return n.parentNode;
                    var [t, r] = name.split(",");
                    txtUrl.value = "https://www.youtube.com/" + (e.YOyGU(r, "1") ? e.MidEX : e.omngB) + t, e.NeXps(getListFormats)
                }
                return e.rOhTA(setInterval, (() => {
                    e.MpMnZ(document.getElementById("error-text").innerText.length, 5) && location.reload()
                }), 2e4), console.log(e.YkwUp), void e.hHxdy(l, (function(t = function() {}) {
                    if (e.QvXna === e.NNFer) return n.querySelector(e.rLKTe).innerText.replace("Replying to ", "");
                    e.NeXps(te), e.SOOzJ(l, (function(n = function() {}) {
                        ! function() {
                            var n = videoTitle.innerText.split("\n"),
                                t = n.map((e => e.match(/[:\d]+/gi))).filter((e => !!e)).pop().pop(),
                                r = n[0].split(e.hMhqg)[1],
                                o = e.GtyRm(findhref2, videoTitle.parentNode)[0].href,
                                i = {
                                    id: e.kJoqz(setElement, location.href),
                                    href: o,
                                    title: r,
                                    length: t
                                };
                            e.GwvdT(opener, window).postMessage(i, "*"), console.log(e.HCCYY)
                        }()
                    }), {
                        callback: close
                    })
                }), {
                    callback: function() {}
                })
            }
            i = c.children, u.forEach = [].forEach, l.forEach((n => {
                e.fAERX(s, n)
            }))
        } else if (location.href.includes(e.UXvWf))
            if (e.ceMsv("bzXys", "bzXys")) {
                console.log(e.SnPZe);
                let [Ge, De] = name.split(",");
                l((function(n = function() {}) {
                    document.getElementById(e.LNUEF).value = "https://www.youtube.com/" + ("1" == De ? e.MidEX : "watch?v=") + Ge, document.getElementById(e.PLRwj).click(), console.log(Ge, De)
                }), {
                    callback: function() {}
                }), l((function(n = function() {}) {
                    e.cEuDH;
                    if (console.log(result.children.length), !result.children.length) throw document.getElementById(e.PLRwj).click(), e.bdsrU
                }), {
                    int: 1e3,
                    callback: function() {}
                }), e.vtOjK(l, (function() {
                    document.getElementById(e.PQxdi).click()
                }), {
                    callback: function() {}
                }), e.ukMjC(l, (function() {
                    if (e.bszML != e.bszML) this[r] = o[i];
                    else
                        for (var n = e.xNOCn.split("|"), t = 0;;) {
                            switch (n[t++]) {
                                case "0":
                                    e.FMbyE(opener, window).postMessage(c, "*");
                                    continue;
                                case "1":
                                    var c = {
                                        id: Ge,
                                        href: u,
                                        title: l,
                                        length: {}
                                    };
                                    continue;
                                case "2":
                                    var u = downloadbtn.href;
                                    continue;
                                case "3":
                                    console.log("Posted");
                                    continue;
                                case "4":
                                    var l = $(e.icnCx)[0].innerText;
                                    continue
                            }
                            break
                        }
                }), {
                    callback: close
                })
            } else n.warn("No id Found");
        else if (location.href.includes(e.IZslL)) {
            async function re(n) {
                var t = {
                    GTzVT: e.vwUcE
                };
                if (e.EOaBp(e.xexan, e.xexan)) {
                    for (; !document.querySelector(n);) await e.remAL(g, 0);
                    return !0
                }
                r.log(t.GTzVT, o), i = !0
            }(async function() {
                var n = {
                    NjpLz: e.xUtKE
                };
                let [t, a] = name.split(",");
                if (!t.length || !a.length) return console.warn(e.JFuaD);
                var f = "https://www.youtube.com/" + ("1" == a ? e.MidEX : "watch?v=") + t;
                await e.mvQlk(re, "#txt-url"), console.log(e.vDghh), document.querySelector(e.rrkdo).value = f, await re("#btn-submit"), console.log(e.NYeJv), await e.CqTsC(g, 100), document.querySelector(e.GVfYh).click(), await e.wRiCi(re, e.XKXMa), console.log(e.mcDNu);
                var d = document.querySelector(e.XKXMa).innerText,
                    h = [0];
                return [...document.querySelector(e.skKDj).querySelector(e.Yirkf).querySelectorAll("tr")].forEach((t => {
                    if (e.TWocj("qThdb", e.hOVvC)) {
                        var a = t.innerText.match(/(?<res>\d+)(p|P)/i) || {};
                        if (a.groups)
                            if (e.daYAW(e.ArhLU, e.QAaub)) a = e.ISSOm(Number, a.groups.res), e.Hpjqs(h[0], a) && (h[0] = a, h[1] = e.JmcSm(findhref2, t)[0].href, h[2] = t);
                            else if (this[i].id === c || this[u].name === l) return this[s]
                    } else {
                        let e = r[o];
                        i.log(n.NjpLz, {
                            element: e,
                            target: this
                        }), this.element.append(e.element || e)
                    }
                })), {
                    id: t,
                    title: d,
                    href: h[1],
                    mp4: !0,
                    res: h[0]
                }
            })().then((function(t) {
                e.WeYVc(e.TPTut, "lmGih") ? (e.xRXLU(opener, window).postMessage(t, "*"), location.href = t.href) : n.classList.add("collapse-frame")
            }), console.warn)
        } else if (location.href.includes(e.YFdLD))(async function() {
            var t = {
                sZZFH: function(e, n) {
                    return e(n)
                },
                wBKcB: e.GVMaX,
                Ohrfw: function(e, n) {
                    return e === n
                },
                JTOYU: "ZAzIx",
                wQMnJ: e.QNWfp,
                FXROr: e.afKVQ,
                iQjMi: function(n, t) {
                    return e.PnCaM(n, t)
                }
            };
            if (e.jqgay(e.tORfc, e.GlRph)) return e.VnjaR(n[0].children[0].querySelectorAll(e.jLloR)[0].innerText, e.umxqv);
            for (await e.mvQlk((async function(e) {
                    var n = {
                        USdlT: function(e, n) {
                            return t.sZZFH(e, n)
                        },
                        dFIEq: t.wBKcB
                    };
                    if (t.Ohrfw(t.JTOYU, "ZAzIx")) {
                        for (; !document.querySelector(e);) t.wQMnJ !== t.FXROr ? await t.iQjMi(g, 0) : i(!1, c(n.USdlT(u, n.dFIEq) ? n.USdlT(l, n.dFIEq).innerText : a.href));
                        return !0
                    }
                    o.push(i.data), c.log(u.data)
                }), e.PcqSo); !document.querySelector("#A_downloadUrl").href.length;) await e.FiRgQ(g, 0);
            console.log(e.oQlhl);
            var r = document.querySelector(e.xUhih).innerText,
                s = {
                    href: document.querySelector(e.PcqSo).href,
                    title: r
                };
            e.LOLZC(opener, window).postMessage(s, "*")
        })().then(close, console.warn);
        else if (location.href.includes(e.ksoBS)) {
            let [je, Fe] = name.split(",");
            if (!je.length || !Fe.length) return console.Warn(e.tkCJz);
            var oe = "https://www.youtube.com/" + (e.CuUWG(Fe, "1") ? e.MidEX : e.omngB) + je;
            let Ie = function() {};
            e.tZXAA(l, (function(n = function() {}) {
                if (e.yyGyM(e.KzYYw, e.UgRev)) {
                    document.getElementById(e.cnXSJ).value = "https://www.youtube.com/" + (e.YNrrA(Fe, "1") ? e.MidEX : e.omngB) + je, document.getElementById(e.utWCz).click(), console.log(e.tYJtY)
                } else {
                    if (s) {
                        var t = P.createElement("a");
                        t.download = e.OljDu(z, e.HxnMc), t.href = L, G.body.appendChild(t), t.click(), t.remove()
                    } else e.HrJNR(p, v);
                    g[w] = U
                }
            }), {
                callback: Ie
            }), e.DePVA(l, (function() {
                if ("none" == stepProcess.style.display) throw document.getElementById(e.utWCz).click(), e.MPLNb;
                console.log("Searching")
            }), {
                callback: Ie
            }), l((function() {
                for (var n = e.VWCYn.split("|"), t = 0;;) {
                    switch (n[t++]) {
                        case "0":
                            var {
                                title: r,
                                href: o
                            } = $(e.Wqjxj) ? e.GVUjA($, e.Wqjxj)[0] ? $(e.Wqjxj)[0] : e.GtyRm($, "#download-720-MP4") : e.OeKxb($, "#download-720-MP4");
                            continue;
                        case "1":
                            if (e.Skagu(document.getElementById(e.BZIMc).children.length, 0)) throw "";
                            continue;
                        case "2":
                            (opener || window).postMessage(i, "*");
                            continue;
                        case "3":
                            console.log("Posted");
                            continue;
                        case "4":
                            var i = {
                                id: je,
                                href: o,
                                title: r,
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
        } else if (location.href.includes(e.VfyPa)) {
            var [ie, ce] = name.split(",");

            function ue() {
                console.log("Found");
                let n = {
                        title: document.getElementsByClassName(e.nxYKL)[0].innerText,
                        links: findhref2(document.getElementsByClassName("tik-video")[0]).map((e => e.href)),
                        mp4: e.cKZkz(ce, 1),
                        info: setElement2(ie)
                    },
                    t = e.EcSVj;
                onmessage = function(n) {
                    if (e.aPGHO(n.origin, t)) {
                        var {
                            data: {
                                s: r,
                                url: o,
                                title: i
                            }
                        } = n;
                        console.log(e.tjuxK, {
                            s: r,
                            url: o,
                            title: i
                        }, n), r ? e.iRdjV(setTimeout, close, 100) : e.FLzGv(P, o, i, null, close)
                    } else console.log(e.FPuXc, n)
                }, (opener || window).postMessage(n, "*")
            }
            addEventListener(e.FugUT, (function() {
                if (e.CnDXY === e.CZYqO) return c !== u && (this.body.color = l), a !== s && (this.body.size = f), this;
                e.Ahcss(l, (function() {
                    s_input.value = ie, e.grRvS(ksearchvideo), e.czdeB(setTimeout, ksearchvideo, 1e3)
                }), {
                    callback() {}
                })
            })), l((function() {
                document.getElementsByClassName(e.nxYKL)[0].innerText, e.KuDNr(ue)
            }), {
                callback() {}
            })
        } else document.domain.includes(e.Edhql) ? (console.log(e.TOGYh), e.Aaupm(addEventListener, e.cTAST, (function({
            isTrusted: n,
            ctrlKey: o,
            shiftKey: i,
            code: c,
            target: u,
            target: {
                tagName: l
            }
        }) {
            ![e.UcPWR, e.LDYJu].includes(l) && !o && !i && n && e.OHTfs(c, e.bFwvq) && (e.qbJGe(e.swMjB, e.swMjB) ? (e.dCblO(abc_, "Close player page") || e.ISSOm(abc_, e.qSfRK)[1]).click() : e.HRfGs(t, r))
        }))) : document.domain.includes(e.RlsgK) && location.href.includes(e.FnlSx) && console.warn(e.TyVcr);
        const le = window.trustedTypes && trustedTypes.createPolicy("trustedHTMLPolicy", {
                createHTML: e => e,
                createScriptURL: e => e
            }),
            ae = "\n    /* Default iframe styles */\n    #cardApiIframe {\n        width: 100%;\n        height: 100%;\n        transition: all 2.5s ease-in-out;\n    }\n\n    /* Collapse animation when the class is toggled */\n    .collapse-frame {\n        width: 0;\n        height: 0;\n        margin-left: auto;\n        margin-right: auto;\n        transition: all 2.5s ease-in-out;\n    }\n",
            se = document.createElement("style");

        function fe(n) {
            var t = {
                rpIDp: function(e, n) {
                    return e(n)
                },
                hfVHl: e.Mjsin
            };
            if (e.Pbyxa(e.muAqz, e.muAqz)) {
                let e = new s(f, {
                    bubbles: !0,
                    isTrusted: !0
                });
                d["on" + h] && m["on" + p](e), "input" === v && (P.value = z), U.dispatchEvent(e)
            } else {
                const r = me.element;
                if (n)
                    if (e.Pbyxa(e.Edsid, e.kDlqk)) r.classList.add(e.lkEkq);
                    else try {
                        return t.rpIDp(o, i.querySelector(t.hfVHl))[0].href
                    } catch {
                        return
                    } else r.classList.remove(e.lkEkq)
            }
        }
        se.type = "text/css", se.appendChild(document.createTextNode(le ? le.createHTML(ae) : ae));
        var de = "https://www.youtube.com/watch?v=" + e.pTgpJ(setElement, location.href) + "&adUrl=https://www.youtube.com/channel/UCOA8lE9-0XnEIdHqjfQUz1A?sub_confirm=1",
            he = le ? le.createScriptURL(e.JgjWq(e.NDvdX, de)) : e.RSwhP("https://loader.to/api/card2/?url=", de);
        const me = new _element(e.tRvZC, {
                id: e.KbONs,
                scrolling: "no",
                width: e.sIlBK,
                height: "100%",
                allowtransparency: e.MOlfS,
                style: e.XrWZk,
                src: he
            }),
            pe = new _element(e.ICXfC, {
                src: le ? le.createScriptURL(e.dnEcl) : e.dnEcl
            });
        pe.element.addEventListener(e.FugUT, (() => {
            e.XrIfi(e.DtKBa, e.VhSRH) ? i.innerText.startsWith(c) && (u = new l(a.href).searchParams.get("v")) : e.wKSaT(typeof iFrameResize, "function") ? e.rOhTA(iFrameResize, {
                log: !1
            }, e.BXtfn) : console.error(e.EUJJN)
        }));
        const ve = new _element(e.oiWae).append(me, pe);
        document.querySelector("#secondary.ytd-watch-flexy");
        var ge = setElement(location.href);
        me.element.addEventListener(e.FugUT, (() => {
            console.log(e.TdjzA), e.rmbYT(fe, !1)
        })), e.CKssF(fe, !0);
        var we = 0,
            ye = 1,
            be = 0;
        e.KwEfv(setInterval, (n => {
            var v = {
                    Inycf: function(e, n) {
                        return e + n
                    },
                    VPfkc: e.vMPCR,
                    IbMdp: function(e, n) {
                        return e(n)
                    },
                    aQHcp: "y2mate.nu",
                    Govac: e.zsFvi,
                    WLpDB: e.cURWJ,
                    NMdNo: "&mp4=",
                    aPXSp: "mp4",
                    JkALW: e.OshYI,
                    kmHQb: e.oZTrh,
                    yBoUe: e.QQWsv,
                    WFKhI: function(n) {
                        return e.PBfCh(n)
                    },
                    lqlHK: function(n, t) {
                        return e.KwPDZ(n, t)
                    },
                    gDJZD: function(n, t, r, o, i, c) {
                        return e.akzjk(n, t, r, o, i, c)
                    },
                    fxBAR: e.GkUKD,
                    kcFYg: e.QAOjc,
                    zAoPZ: e.miQHM,
                    rzmfx: "fixed",
                    JHIpR: e.QoMGS,
                    aiLwW: ".ytp-right-controls"
                },
                g = document.querySelector("video"),
                y = document.querySelector(e.uCoYP);
            if (de = "https://www.youtube.com/watch?v=" + e.AlNHv(setElement, location.href) + "&adUrl=https://www.youtube.com/channel/UCOA8lE9-0XnEIdHqjfQUz1A?sub_confirm=1", he = le ? le.createScriptURL(e.NDvdX + de) : e.NDvdX + de, y)
                if (e.nKyHp(e.rlcOf, e.rlcOf)) !y.querySelector("#cardApiIframe") && (e.jAVTA(fe, !0), y.parentNode.prepend(se), y.prepend(ve.element), console.log(e.mbWHW)), e.AKVJL(e.jRUSC(setElement, location.href), ge) && (e.wuVgd(fe, !0), me.set(e.QQWsv, he), console.log(e.QJptI), ge = e.jlWtA(setElement, location.href));
                else {
                    u.log("Caught", l);
                    var b = a.download,
                        x = s.href;
                    f = {
                        id: new d(h.href).searchParams.get("v"),
                        href: x,
                        title: b
                    }
                }
            var k = e.ZlzVF(query, "yt-button-view-model#dismiss-button");
            k && !e.jlWtA(a, k) && k.click();
            var T = document.getElementsByClassName(e.ahQaQ)[0];
            try {
                if (e.QzjeM(T, !H)) e.TGKYs(e.DNFiI, e.DNFiI) ? (console.log(e.svluP), H = 1, g.muted = 1) : (l = [v.Inycf(v.Inycf(v.VPfkc, v.IbMdp(a, v.aQHcp) || v.Govac), "/"), v.WLpDB, s, "&s=", f.pathname.startsWith("/shorts/") ? 1 : 0, v.NMdNo, d ? v.aPXSp : v.JkALW, v.kmHQb, h], m.set(v.yBoUe, p.join("")));
                else if (!T && H)
                    if (e.ntnQj(e.mCsmX, e.HVVFj)) {
                        console.log(e.jSMmW);
                        try {
                            g.muted = 0
                        } catch (x) {
                            if (e.FdReq(e.RugCt, "eZbCl")) console.warn(e.jnwMv);
                            else
                                for (var E = new a("button", {
                                        id: v.fxBAR
                                    }).appendTo(s).set("innerText", v.kcFYg).on(v.zAoPZ, (function() {
                                        var e = v.WFKhI(w) || v.lqlHK(E, P.href);
                                        v.gDJZD(z, e, !1, !0, !1, !0)
                                    })).style({
                                        position: v.rzmfx,
                                        right: "50%",
                                        top: v.JHIpR
                                    }); !p.getElementById(v.fxBAR) && E.querySelector(v.aiLwW);) w.log("Appended"), E.appendTo(v.aiLwW)
                        }
                        H = 0
                    } else {
                        var S = {
                            hAlxK: function(n, t) {
                                return e.nDlsw(n, t)
                            },
                            eCSWj: e.Hyzmc,
                            FSEDg: function(n, t, r, o, i, c, u) {
                                return e.LZQVA(n, t, r, o, i, c, u)
                            }
                        };
                        f.log(d), h.append(new m("br").element);
                        var C = new p(e.pzhNR).set(e.yhUGr, e.PAMBV).on(e.miQHM, (function(e) {
                            S.hAlxK(C, S.eCSWj);
                            var {
                                id: n,
                                href: t,
                                isShort: r
                            } = S.hAlxK(G, e.target.parentElement.parentElement).map((n => ({
                                href: n.href,
                                short: n.href.includes("/short"),
                                id: e(n.href)
                            }))).filter((e => e.id))[0];
                            S.FSEDg(e, n, !1, !0, !1, !1, r ? new F(t) : null)
                        }));
                        z.append(C.element)
                    }
            } catch {}
            var q = [...document.querySelectorAll(e.EBJwl), ...document.querySelectorAll(e.PcOWB)].map((e => [...e.querySelectorAll("button")].filter((e => e.className.includes("skip")))[0])).filter((e => !!e))[0];
            if (q)
                if (e.ZAUHS !== e.IMxTG) !be && (be = 1, g.playbackRate = 16, console.log(e.OmqWv)), q.click(), ye = 0;
                else {
                    C = o() || e.BnXVV(i, c.href);
                    e.akzjk(u, C, !1, !0, !1, !0)
                } else if (e.QzjeM(!ye, g)) {
                if ("ynVio" === e.mlsJy) return this.element[t] = r, this;
                be = 0, ye = 1, g.playbackRate = we, console.log("Fixed playBack")
            } else g && (be = 0, we = g.playbackRate);
            var M = document.getElementsByClassName(e.EaHUn)[2];
            M && (M.click(), console.log(e.eRBWD))
        }), 10)
    }();