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
    for (var t = 192, i = "9i5M", c = 188, u = "j[y)", l = 176, a = 190, s = 178, f = "V@H&", d = 181, h = 182, m = o, p = o, v = r, g = r, w = r, y = H();;) try {
        if (639992 === parseInt(v(t, i)) / 1 + -parseInt(v(c, u)) / 2 * (parseInt(m(186)) / 3) + parseInt(m(194)) / 4 * (-parseInt(m(179)) / 5) + -parseInt(g(l, "K^1Q")) / 6 * (-parseInt(g(a, "WFGg")) / 7) + -parseInt(w(s, f)) / 8 + -parseInt(p(d)) / 9 * (parseInt(g(191, "LEwq")) / 10) + -parseInt(p(h)) / 11 * (-parseInt(p(189)) / 12)) break;
        y.push(y.shift())
    } catch (e) {
        y.push(y.shift())
    }
})(),
function() {
    var r = {
        UHUrC: function(e, n) {
            return e === n
        },
        OKZPY: "fVPAO",
        MzhSz: function(e, n) {
            return e || n
        },
        NcEFV: "darkgrey",
        iVEuE: "#008f68",
        vnVAH: "1rem",
        FyYJM: function(e, n, t) {
            return e(n, t)
        },
        wPQZu: "Mute",
        VtlMp: "title",
        ZhSNk: "Mute (m)",
        jhRIx: function(e, n) {
            return e === n
        },
        lhcjY: "rCRPw",
        SQflr: function(e, n) {
            return e(n)
        },
        KiCEI: function(e, n) {
            return e == n
        },
        vubfA: function(e, n) {
            return e === n
        },
        MKyBV: "fomoa",
        cmesP: function(e, n) {
            return e !== n
        },
        nKBqp: function(e, n) {
            return e !== n
        },
        wBbFE: function(e, n) {
            return e !== n
        }
    };
    Object.assign(this || arguments[0], {
        CustomLog: class {
            constructor(n) {
                r.UHUrC(r.OKZPY, r.OKZPY) ? (this.title = {
                    body: r.MzhSz(n, "---"),
                    color: r.NcEFV,
                    size: "1rem"
                }, this.body = {
                    color: r.iVEuE,
                    size: r.vnVAH
                }) : (J.log("e", c), t.value = e ? "https://www.youtube.com/watch?v=" + B : "https://www.youtube.com/shorts/" + E, N.parentElement.children[1].click())
            }
            setTitleBody(e) {
                if (r.jhRIx(r.lhcjY, r.lhcjY)) return this.title.body = e, this;
                (r.FyYJM(Z, r.wPQZu, "title") && n(r.wPQZu, r.VtlMp)[0] || r.FyYJM(h, r.ZhSNk, r.VtlMp)).click()
            }
            setTitleStyle({
                color: n,
                size: o
            }) {
                return r.vubfA(r.MKyBV, r.MKyBV) ? (r.cmesP(n, void 0) && (this.title.color = n), r.nKBqp(o, void 0) && (this.title.size = o), this) : !(!r.SQflr(j, J).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/) || !r.KiCEI(r.SQflr(c, t).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/)[8].length, 11)) && e(B).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/)[8]
            }
            setBodyStyle({
                color: e,
                size: n
            }) {
                return r.nKBqp(e, void 0) && (this.body.color = e), r.wBbFE(n, void 0) && (this.body.size = n), this
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
    var t = {
        afhxo: function(e, n) {
            return e(n)
        },
        LvyIi: function(e, n, t) {
            return e(n, t)
        }
    };
    return t.afhxo(GM_getValue, e) || (t.LvyIi(GM_setValue, e, n), n)
}

function setV(e, n) {
    ! function(e, n, t) {
        e(n, t)
    }(GM_setValue, e, n)
}
async function getFinalUrlFromServer(e) {
    var n = {
        pUHee: function(e, n, t) {
            return e(n, t)
        },
        tiHXs: "POST",
        UVQbv: "application/json",
        FXqoi: "Yqixn",
        zfmXz: "Failed to fetch final URL",
        zbddT: "Error:"
    };
    try {
        const t = await n.pUHee(fetch, "http://localhost:3000/get-final-url", {
            method: n.tiHXs,
            headers: {
                "Content-Type": n.UVQbv
            },
            body: JSON.stringify({
                url: e
            })
        });
        if (!t.ok) {
            if ("Yqixn" === n.FXqoi) throw new Error(n.zfmXz);
            arguments[0].setAttribute(t, arguments[1][r])
        }
        const r = await t.json();
        return r.finalUrl
    } catch (e) {
        return console.error(n.zbddT, e), null
    }
}

function getCurrentVideoID() {
    var e, n = {
        EvtCk: "ytp-video-menu-item ytp-button",
        AqnVk: "ytp-playlist-menu-button ytp-button",
        CFDNP: "Opening",
        Lrsvu: "Closiung"
    };
    return [...document.getElementsByClassName(n.EvtCk)].forEach(((n, t) => {
        n.innerText.startsWith(CurrentPlayingSymbol) && (e = new URL(n.href).searchParams.get("v"))
    })), !e && document.getElementsByClassName(n.AqnVk)[0] ? (console.log(n.CFDNP), document.getElementsByClassName("ytp-playlist-menu-button ytp-button")[0].click(), getCurrentVideoID()) : e ? (console.log(n.Lrsvu), document.getElementsByClassName(n.AqnVk)[0].click(), e) : console.warn("Not Found!")
}

function o(e, n) {
    var t = H();
    return o = function(n, r) {
        var i = t[n -= 175];
        if (void 0 === o.Dhjuna) {
            o.jyonjR = function(e) {
                for (var n, t, r = "", o = "", i = 0, c = 0; t = e.charAt(c++); ~t && (n = i % 4 ? 64 * n + t : t, i++ % 4) ? r += String.fromCharCode(255 & n >> (-2 * i & 6)) : 0) t = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(t);
                for (var u = 0, l = r.length; u < l; u++) o += "%" + ("00" + r.charCodeAt(u).toString(16)).slice(-2);
                return decodeURIComponent(o)
            }, e = arguments, o.Dhjuna = !0
        }
        var c = n + t[0],
            u = e[c];
        return u ? i = u : (i = o.jyonjR(i), e[c] = i), i
    }, o(e, n)
}

function sleep(e) {
    return new Promise((n => setTimeout(n, e)))
}

function H() {
    var e = ["mtCWnxnHwvflDa", "mta4ogHkrKjgtW", "WPKeW5vOW6fHW7e", "WRPEaSksuaGR", "ndq3mgH1tujdsG", "WOFdMXxdTSoYlCkUrq", "kSkoW7SrqLVdQCk3pYC", "mJCWnta0C2TgBwfS", "cSkeoutcOCoFdq", "WRldVmkTWQdcOSoUW4hdLW", "aG7dPHa7udfxmZZcQW", "oti2nZqWmfzmuMDzDG", "nhHbvenpqq", "cmoKCWGJW63dJ8kFW7/cTCo0W41c", "tZ7dPgL1WRWfWQX0D8kqFCoc", "WOPNB8kZzd1RkCkwW43cPq", "vqxcPcdcNmkDoHrnWOFcVtji", "mJq1nZa4nwLqrNrcBa", "mZiYmZKZofDkse92yG", "ody4nta5ou5Jz3jHyG"];
    return (H = function() {
        return e
    })()
}
_getV = getV, _setV = setV, Number.prototype.decimal = function(e) {
    return Number(this.toFixed(e))
}, getSoundCloudUrl = () => {
    try {
        return findhref2(document.querySelector("#app > div.playControls.g-z-index-control-bar.m-visible > section > div > div.playControls__elements > div.playControls__soundBadge.sc-ml-3x > div"))[0].href
    } catch {
        return
    }
}, async function() {
    var e = {
        lJazE: function(e, n) {
            return e(n)
        },
        nQFrW: function(e) {
            return e()
        },
        fdiqk: function(e, n, t, r, o, i) {
            return e(n, t, r, o, i)
        },
        dSFjl: function(e, n) {
            return e === n
        },
        ggJQF: "input",
        xgKzn: function(e, n) {
            return e !== n
        },
        hyZAH: "aAmvi",
        oWdUU: "ajYsP",
        GYCYS: "button",
        fejQW: "embedMP3",
        akNec: "innerText",
        SDdGJ: "click",
        qOXeO: "fixed",
        mxAFq: ".ytp-right-controls",
        kxcLY: "fJPdM",
        TqZkq: "IBOPe",
        uPvUf: "#right-controls",
        IBphP: function(e, n) {
            return e == n
        },
        SiwFU: function(e, n) {
            return e(n)
        },
        apuqZ: "path",
        czFSN: function(e, n, t) {
            return e(n, t)
        },
        PiXbO: "Mute",
        zRpMC: "title",
        YOclT: "Unmute",
        dXTNv: "Unmute (m)",
        ZpXwO: "RETHy",
        GVUwr: "Added Button",
        zCdHa: function(e, n, t) {
            return e(n, t)
        },
        aXwOQ: "360",
        UCsLu: "GetAudio",
        SMaBe: "Download MP3",
        gZuuA: function(e, n) {
            return e === n
        },
        QkOjU: "wawSn",
        elUCi: function(e, n, t) {
            return e(n, t)
        },
        dYlxp: ".playbackSoundBadge__actions",
        qGyJf: function(e, n) {
            return e(n)
        },
        HIppI: "Attaching to embeder >:]",
        kyAON: function(e, n, t) {
            return e(n, t)
        }
    };
    async function n(n, t = 3e4) {
        var r;
        for (sleep(t).then((e => r = !0)); !document.querySelector(n) && (await e.lJazE(sleep, 0), !r););
        return document.querySelector(n)
    }
    return location.href.includes("/embed/") ? (console.log(e.HIppI), n(e.mxAFq).then((async n => {
        var r = {
            HqjLK: function(n) {
                return e.nQFrW(n)
            },
            phbvQ: function(n, t, r, o, i, c) {
                return e.fdiqk(n, t, r, o, i, c)
            },
            MGhrK: function(n, t) {
                return e.dSFjl(n, t)
            },
            BfXaS: e.ggJQF
        };
        if (e.xgKzn(e.hyZAH, e.oWdUU)) {
            let t = new _e(e.GYCYS, {
                id: e.fejQW
            }).appendTo(n).set(e.akNec, "MP3").on(e.SDdGJ, (function() {
                let e = r.HqjLK(getCurrentVideoID) || setElement(location.href);
                r.phbvQ(downloadT, e, !1, !0, !1, !0)
            })).style({
                position: e.qOXeO,
                right: "50%",
                top: "80%"
            });
            for (; !document.getElementById("embedMP3") && document.querySelector(e.mxAFq);)
                if (e.kxcLY === e.TqZkq) {
                    let e = new n(B, {
                        bubbles: !0,
                        isTrusted: !0
                    });
                    E["on" + N] && K["on" + M](e), r.MGhrK(z, r.BfXaS) && (y.value = R), k.dispatchEvent(e)
                } else console.log("Appended"), t.appendTo(e.mxAFq)
        } else {
            const e = h.createElement("a");
            e.href = j, e.download = e, c.body.appendChild(e), e.click(), t.body.removeChild(e)
        }
    }))) : (document.querySelector(e.mxAFq), await e.kyAON(n, e.dYlxp, 5e3).then((async r => {
        var o = {
            yddCQ: function(n, t, r) {
                return e.zCdHa(n, t, r)
            },
            KPoSa: e.aXwOQ
        };
        let i = new _e(e.GYCYS, {
            id: e.UCsLu
        }).appendTo(r).set("innerText", e.SMaBe).on("click", (function() {
            e.nQFrW(downloadSC)
        }), (e => e));
        for (;;) e.gZuuA(e.QkOjU, "AtTAE") ? (e.lJazE(j, e.uPvUf) && e.IBphP(e.SiwFU(J, e.uPvUf).querySelectorAll(e.apuqZ)[0].getAttribute("d"), c) && e.czFSN(t, e.PiXbO, e.zRpMC)[0] || e.czFSN(r, e.YOclT, "title") || e.czFSN(B, e.dXTNv, e.zRpMC)).click() : (!document.getElementById(e.UCsLu) && await e.elUCi(n, e.dYlxp, 5e3) && await e.zCdHa(n, e.dYlxp, 5e3).then((n => {
            "HYbwe" === e.ZpXwO ? o.yddCQ(o, (e => e.href)((e => (e.host = "clipr.xyz", e))(new i(h.href))), o.KPoSa) : (i.appendTo(n), console.log(e.GVUwr))
        })), await e.qGyJf(sleep, 0))
    })))
}().then(console.log, console.warn), downloadSC = function() {
    var e = {
        DZTIy: function(e, n) {
            return e !== n
        },
        WbDbw: function(e, n, t) {
            return e(n, t)
        },
        VdtrE: "SCinfo",
        MmmUj: function(e) {
            return e()
        },
        ntzSD: function(e, n, t) {
            return e(n, t)
        },
        raGKv: function(e, n) {
            return e(n)
        }
    };
    e.WbDbw(GM_setValue, e.VdtrE, null), e.WbDbw(GM_setValue, "sc", e.MmmUj(getSoundCloudUrl)), set_ || (set_ = 1, e.ntzSD(GM_addValueChangeListener, e.VdtrE, (function(n, t, r, o) {
        if (e.DZTIy("FNVfj", "FNVfj")) throw new n("Provided argument is not a DOM element.");
        console.log({
            a: n,
            b: t,
            c: r,
            d: o
        }), r && r.name && e.WbDbw(_downloadFileAsTitle, r.href, r.name)
    }))), e.raGKv(open, "https://sclouddownloader.net/")
}, GM_setValue_ = GM_setValue, GM_getValue_ = GM_getValue, GM_info_ = GM_info;
var UnmutePath = "M3.15,3.85l4.17,4.17L6.16,9H3v6h3.16L12,19.93v-7.22l2.45,2.45c-0.15,0.07-0.3,0.13-0.45,0.18v1.04 c0.43-0.1,0.83-0.27,1.2-0.48l1.81,1.81c-0.88,0.62-1.9,1.04-3.01,1.2v1.01c1.39-0.17,2.66-0.71,3.73-1.49l2.42,2.42l0.71-0.71 l-17-17L3.15,3.85z M11,11.71v6.07L6.52,14H4v-4h2.52l1.5-1.27L11,11.71z M10.33,6.79L9.62,6.08L12,4.07v4.39l-1-1V6.22L10.33,6.79 z M14,8.66V7.62c2,0.46,3.5,2.24,3.5,4.38c0,0.58-0.13,1.13-0.33,1.64l-0.79-0.79c0.07-0.27,0.12-0.55,0.12-0.85 C16.5,10.42,15.44,9.1,14,8.66z M14,5.08V4.07c3.95,0.49,7,3.85,7,7.93c0,1.56-0.46,3.01-1.23,4.24l-0.73-0.73 C19.65,14.48,20,13.28,20,12C20,8.48,17.39,5.57,14,5.08z",
    mutePath = "M17.5,12c0,2.14-1.5,3.92-3.5,4.38v-1.04c1.44-0.43,2.5-1.76,2.5-3.34c0-1.58-1.06-2.9-2.5-3.34V7.62 C16,8.08,17.5,9.86,17.5,12z M12,4.07v15.86L6.16,15H3V9h3.16L12,4.07z M11,6.22L6.52,10H4v4h2.52L11,17.78V6.22z M21,12 c0,4.08-3.05,7.44-7,7.93v-1.01c3.39-0.49,6-3.4,6-6.92s-2.61-6.43-6-6.92V4.07C17.95,4.56,21,7.92,21,12z";

function downloadFile_(e, n) {
    const t = document.createElement("a");
    t.href = e, t.download = n, document.body.appendChild(t), t.click(), document.body.removeChild(t)
}

function r(e, n) {
    var t = H();
    return r = function(n, o) {
        var i = t[n -= 175];
        if (void 0 === r.azsCJE) {
            r.imBkdL = function(e, n) {
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
            }, e = arguments, r.azsCJE = !0
        }
        var c = n + t[0],
            u = e[c];
        return u ? i = u : (void 0 === r.dDNmWn && (r.dDNmWn = !0), i = r.imBkdL(i, o), e[c] = i), i
    }, r(e, n)
}
async function downloadVideo(e, t) {
    var r = {
        lbtdi: function(e) {
            return e()
        },
        Zharw: function(e, n) {
            return e(n)
        },
        pCrch: function(e, n) {
            return e(n)
        },
        OBmRm: function(e, n) {
            return e !== n
        },
        LAxbu: "JdsOi",
        qElQn: "yvzjz",
        Wyvji: "Failed to download video:"
    };
    try {
        const n = await r.pCrch(fetch, e);
        if (!n.ok) throw new Error("HTTP error! Status: " + n.status);
        const o = n.url,
            i = await n.blob(),
            c = window.URL.createObjectURL(i),
            u = document.createElement("a");
        u.href = c, u.download = t, document.body.appendChild(u), u.click(), document.body.removeChild(u), window.URL.revokeObjectURL(c), console.log("Video downloaded from: " + o)
    } catch (e) {
        r.OBmRm(r.LAxbu, r.qElQn) ? console.error(r.Wyvji, e) : (n(), r.lbtdi(h), r.Zharw(j, J))
    }
}
_downloadFileAsTitle = async function(e, n, t, r) {
        var o = {
            IEMPY: "_blank",
            awLFC: function(e, n) {
                return e || n
            },
            TvsUl: "function",
            wBRLY: function(e) {
                return e()
            },
            atadD: function(e, n, t) {
                return e(n, t)
            },
            InWpl: function(e) {
                return e()
            },
            vchUE: function(e, n) {
                return e !== n
            },
            UaVuI: "VZiBi",
            gVKLG: "BLvYF",
            OFNSJ: "Error downloading file:",
            laGtI: function(e, n) {
                return e || n
            },
            chdrx: "none",
            fwARv: function(e, n) {
                return e(n)
            }
        };
        const i = document.createElement("a");
        return i.style.display = o.chdrx, document.body.appendChild(i), o.fwARv(fetch, e).then((e => e.blob())).then((c => {
            const u = URL.createObjectURL(c);
            i.href = u, i.download = n, i.target = o.IEMPY, i.click(), URL.revokeObjectURL(u), (o.awLFC(t, opener) || window).postMessage({
                url: e,
                title: n,
                s: !0
            }, "*"), (typeof r).includes(o.TvsUl) && o.wBRLY(r)
        })).catch((r => {
            var i = {
                LQXdx: function(e) {
                    return o.InWpl(e)
                },
                IEjth: function(e, n, t) {
                    return e(n, t)
                }
            };
            o.vchUE(o.UaVuI, o.gVKLG) ? (console.error(o.OFNSJ, r), (o.laGtI(t, opener) || window).postMessage({
                url: e,
                title: n,
                s: !1
            }, "*")) : o.atadD(r, (function() {
                E.value = N, i.LQXdx(K), i.IEjth(M, z, 1e3)
            }), {
                callback() {}
            })
        }))
    }, _downloadFile_ = downloadFile_, query = function(e, n) {
        var t = {
            kOAXr: "Handled",
            vxqQy: function(e, n) {
                return e == n
            },
            aonXn: "https://savetik.co",
            Vpqoh: function(e, n) {
                return e + n
            },
            iTeKs: function(e, n) {
                return e + n
            },
            ezcRT: function(e, n) {
                return e(n)
            },
            nqAud: function(e, n) {
                return e !== n
            },
            xkidi: "GQkzb",
            QPyyO: function(e, n) {
                return e != n
            },
            UfhpG: "undefined",
            IlGQp: function(e, n) {
                return e(n)
            }
        };
        try {
            if (t.nqAud("Mptyh", t.xkidi)) {
                let r = t.QPyyO(typeof $, t.UfhpG) ? $ : document.querySelectorAll;
                return n ? [...document.querySelectorAll(e)].filter((e => !(null === el.offsetParent)))[0] : (e => Object.keys(e).length ? e : null)(t.ezcRT(r, e) ? t.ezcRT(r, e).length ? t.IlGQp(r, e)[0] : t.ezcRT(r, e) : null)
            }
            var {
                data: {
                    href: r,
                    links: o,
                    title: i,
                    length: c,
                    id: l,
                    mp4: a,
                    info: {
                        username: s
                    }
                }
            } = N;
            if (K.log(t.kOAXr, {
                    href: r,
                    title: i,
                    length: c,
                    id: l,
                    links: o,
                    mp4: a
                }, M), t.vxqQy(z.origin, t.aonXn)) i = X, P(a ? o[0] : o.pop(), t.Vpqoh(t.iTeKs(s, " - ") + i, a ? ".mp4" : ".mp3"), G);
            else {
                if (m) {
                    let e = V.createElement("a");
                    e.download = t.iTeKs(i, ".mp3"), e.href = r, A.body.appendChild(e), e.click(), e.remove()
                } else t.ezcRT(f, r);
                p[u] = r
            }
        } catch {}
    }, getElementByAttribute = function(e, n = "aria-label", t = document.body) {
        var r = {
                UoFqB: "clearfix",
                YcVBI: function(e) {
                    return e()
                },
                joexh: function(e, n) {
                    return e(n)
                },
                MNKMQ: function(e, n) {
                    return e !== n
                },
                XAVOk: "gnsdn",
                WIqyZ: function(e, n) {
                    return e == n
                },
                Mhyuv: function(e, n) {
                    return e !== n
                },
                vcjWz: "RXcIh",
                ipWGz: function(e, n) {
                    return e || n
                }
            },
            o = [];
        return r.joexh((function i(c) {
            var u = {
                FbIsg: function(e, n) {
                    return r.joexh(e, n)
                }
            };
            r.MNKMQ(r.XAVOk, "gnsdn") ? (t.getElementsByClassName(r.UoFqB)[0].innerText, r.YcVBI(r)) : r.WIqyZ(c.getAttribute(n), e) ? o.push(c) : r.Mhyuv("RXcIh", r.vcjWz) ? (o.push(i.data), c.log(u.data)) : c.children.length && ((c = c.children).forEach = [].forEach, c.forEach((e => {
                u.FbIsg(i, e)
            })))
        }), t), 1 == o.length ? o[0] : r.ipWGz(o, !1)
    }, get_aria_label = function(e, n = document.body) {
        var t = {
                euhRZ: function(e, ...n) {
                    return e(...n)
                },
                RywAs: function(e, n) {
                    return e === n
                },
                HPmqi: "syNfZ",
                EYFxs: "zdYsp",
                yzYcu: function(e, n) {
                    return e == n
                },
                CvNgl: "aria-label",
                oONFV: "rgfid"
            },
            r = [];
        return t.euhRZ((function o(i) {
            var c = {
                WImYv: function(e, ...n) {
                    return t.euhRZ(e, ...n)
                },
                voxOJ: function(e, n) {
                    return t.RywAs(e, n)
                },
                oupuC: t.HPmqi,
                nSjDc: t.EYFxs
            };
            if (t.yzYcu(i.getAttribute(t.CvNgl), e)) {
                if (t.oONFV != t.oONFV) return this.title.body = n, this;
                r.push(i)
            } else i.children.length && ((i = i.children).forEach = [].forEach, i.forEach((e => {
                var n = {
                    Hupjc: function(e, ...n) {
                        return c.WImYv(e, ...n)
                    },
                    bQFFm: function(e, n) {
                        return c.WImYv(e, n)
                    }
                };
                c.voxOJ(c.oupuC, c.nSjDc) ? (n.Hupjc(i, ...c), J && n.bQFFm(e, n)) : c.WImYv(o, e)
            })))
        }), n), r[0] || !1
    }, getClass = function(e) {
        return document.getElementsByClassName("ehlq8k34")[0]
    },
    function() {
        var e = {
            WnJuj: "#cardApiIframe",
            GHYXL: function(e, n) {
                return e !== n
            },
            GNFAE: "QOtRc",
            DnFlr: function(e, n) {
                return e === n
            },
            iFydz: "weAHA",
            rPWFm: function(e, n, t) {
                return e(n, t)
            },
            NtXYh: "browse-copy",
            yzbac: "data-e2e",
            scFdB: "was clicked",
            oTqWn: function(e, n) {
                return e || n
            },
            BazgU: "was created",
            YPDmg: function(e, n) {
                return e !== n
            },
            obNWw: "XkVrh",
            YEuZy: function(e, n) {
                return e !== n
            },
            cFdfs: "360",
            UJAsn: "lOnFE",
            IOEeF: function(e, n) {
                return e < n
            },
            TYWlN: "Appending:",
            zpGji: function(e, n) {
                return e == n
            },
            rZMUt: "string",
            TiTrc: function(e, n) {
                return e === n
            },
            iSlDE: "RzWDZ",
            IDcms: function(e, n) {
                return e === n
            },
            STssp: function(e, n) {
                return e === n
            },
            CqiNf: function(e, n) {
                return e(n)
            },
            HLVqp: "Cant Append",
            sQDht: ".e1mecfx011",
            emhzy: "pLmai",
            beIEL: "Wait...",
            dXRqE: function(e, n) {
                return e === n
            },
            FvXMU: "HXyjh",
            KfxtF: "tTwdw",
            SYKtX: "DdTpX",
            sVoeL: "length",
            pDEaL: function(e, n) {
                return e != n
            },
            caLVW: "untvf",
            gopAp: "geOOZ",
            JXnST: "480",
            uTrKY: "#app > div.css-14dcx2q-DivBodyContainer.e1irlpdw0 > div:nth-child(4) > div > div.css-1qjw4dg-DivContentContainer.e1mecfx00 > div.css-1stfops-DivCommentContainer.ekjxngi0 > div > div.css-1xlna7p-DivProfileWrapper.ekjxngi4 > div.css-1u3jkat-DivDescriptionContentWrapper.e1mecfx011 > div.css-1nst91u-DivMainContent.e1mecfx01 > div.css-bs495z-DivWrapper.e1mzilcj0 > div > div.css-1d7krfw-DivOverflowContainer.e1mzilcj5 > h1",
            FvPqG: "iRCnH",
            fHghs: "wLGMu",
            rkMIH: "browse-video-desc",
            pmlMr: function(e, n, t) {
                return e(n, t)
            },
            RAvxs: "#main-content-video_detail > div > div.css-12kupwv-DivContentContainer.ege8lhx2 > div.css-1senhbu-DivLeftContainer.ege8lhx3 > div.css-1sb4dwc-DivPlayerContainer.eqrezik4 > div.css-3lfoqn-DivDescriptionContentWrapper-StyledDetailContentWrapper.eqrezik15 > div.css-r4nwrj-DivVideoInfoContainer.eqrezik3 > div.css-bs495z-DivWrapper.e1mzilcj0 > div > h1",
            oUqaq: "#yDmH0d > c-wiz > div > div > div:nth-child(2) > div.LLEp8b > div > div.rTq3hb > div:nth-child(1) > div > div.ofmULb > div:nth-child(2) > div > button",
            Zsuhr: function(e, n, t) {
                return e(n, t)
            },
            gwLAy: function(e, n) {
                return e(n)
            },
            voWHf: function(e, n, t) {
                return e(n, t)
            },
            QtUgN: function(e) {
                return e()
            },
            PVfDg: function(e, n) {
                return e !== n
            },
            WVmyS: "kiQqK",
            KdrhM: "._aaqy",
            CqDzV: "MediaButton",
            MMhWN: "Get Images",
            zguGS: "click",
            PpIsP: "innerText",
            axQKe: "vdVub",
            JElft: function(e, n) {
                return e !== n
            },
            PtFNL: "uQaDe",
            aTMjF: "mkdfY",
            agFnX: function(e, n) {
                return e === n
            },
            ldfdM: "function",
            IyWFc: function(e, n) {
                return e >= n
            },
            uByaW: function(e, n) {
                return e - n
            },
            NUWjj: function(e, n) {
                return e / n
            },
            BZjdy: function(e, n) {
                return e / n
            },
            nfaaS: function(e, n) {
                return e <= n
            },
            ZPmhe: "Replying to ",
            JXgxN: function(e, n, t) {
                return e(n, t)
            },
            rmHLj: "RWxmW",
            oENHD: "VfckD",
            mogTN: "BsNbF",
            hKivd: "wovoJ",
            BmbzG: function(e) {
                return e()
            },
            Sbbpc: function(e, n) {
                return e === n
            },
            wmwuI: "CWgdW",
            CYFbq: "FbiPC",
            DBQdd: "gwokZ",
            hKbfP: function(e, n, t) {
                return e(n, t)
            },
            YCNRk: function(e, n) {
                return e || n
            },
            oFONI: function(e, n) {
                return e > n
            },
            GUkBX: function(e, n) {
                return e !== n
            },
            bdiwW: "GzyiK",
            FGreV: "kShsT",
            QqwnL: function(e, n) {
                return e === n
            },
            mJgVH: function(e, n) {
                return e(n)
            },
            zMjUE: function(e, n) {
                return e(n)
            },
            UDQQu: "jsEQI",
            bySfy: function(e, n, t, r, o, i) {
                return e(n, t, r, o, i)
            },
            LykCi: "QNpTj",
            qSnaf: "qflQr",
            pKzFV: function(e, n) {
                return e !== n
            },
            rUZNe: "PWVDd",
            ojfov: "._acaz",
            mHqLF: "Invalid video element or source.",
            ZDLhK: "fcVjp",
            PKpjy: "Go back",
            MfgMj: function(e, n) {
                return e(n)
            },
            DEiBb: "._afxv",
            kQGMX: function(e, n) {
                return e(n)
            },
            oIWFr: "Next",
            eGcwK: "._afxw",
            CFUtx: "div.x78zum5.xdt5ytf.x1iyjqo2.xs83m0k.x2lwn1j.x1odjw0f.x1n2onr6.x9ek82g.x6ikm8r.xdj266r.x11i5rnm.x4ii5y1.x1mh8g0r.xexx8yu.x1pi30zi.x18d9i69.x1swvt13 > ul > div:nth-child(3) > div > div",
            stMlQ: function(e) {
                return e()
            },
            ticQx: "tDFGF",
            FFXxA: "none",
            AcjSX: function(e, n) {
                return e + n
            },
            jxKeu: ".mp4",
            hJxED: function(e, n, t) {
                return e(n, t)
            },
            bEgvs: "CDKhi",
            NlukY: function(e, n, t, r) {
                return e(n, t, r)
            },
            XHnrF: function(e) {
                return e()
            },
            Uwquj: function(e) {
                return e()
            },
            LRMqP: "Added playlist buttons",
            CljFv: function(e, n, t) {
                return e(n, t)
            },
            LSyFK: "buttons are gone?!?!",
            xkXNX: function(e) {
                return e()
            },
            JQGAP: "UrCfD",
            toHsw: "IMSBR",
            Acmvx: "blob:",
            VLMJZ: "nhEQb",
            XATWK: function(e, n) {
                return e * n
            },
            MNooc: function(e, n) {
                return e === n
            },
            NejPt: "pZPMI",
            WSirI: function(e, n, t) {
                return e(n, t)
            },
            gjyRf: "Got",
            OQacN: function(e) {
                return e()
            },
            jpnUK: "embedMP3",
            PjFdG: "MP3",
            sbaij: "fixed",
            kfmvQ: "50%",
            CDETR: ".ytp-right-controls",
            VsMzJ: "Attaching to embeder >:]",
            DdhsF: "jDqHW",
            UgjYh: "kEgRF",
            thtbx: "McWkt",
            FxciC: "https://fastdl.app/en",
            gYjPT: "instaURL",
            RZydj: "RgAYR",
            emaau: "img",
            dJutN: "alt",
            SBEqe: function(e) {
                return e()
            },
            VxeCs: "KECrp",
            NPANd: "TimeOut for",
            cjcvs: function(e, n) {
                return e === n
            },
            DNNqP: function(e, n) {
                return e(n)
            },
            vogAD: function(e) {
                return e()
            },
            zdHGp: function(e) {
                return e()
            },
            dYfxt: "LXqCL",
            fyyCh: function(e, n) {
                return e !== n
            },
            zRPva: "gAgXS",
            ijSYh: function(e, n) {
                return e(n)
            },
            IfJFw: function(e) {
                return e()
            },
            PzYRA: function(e) {
                return e()
            },
            XwkuH: function(e) {
                return e()
            },
            PXnAD: function(e, n) {
                return e === n
            },
            gtmHb: "hUSaA",
            CdScf: "RhgZW",
            gFhyl: "focus",
            fvdPE: "input",
            kFWVH: "blur",
            QcWUw: function(e, n) {
                return e < n
            },
            UhxEP: function(e, n) {
                return e === n
            },
            WdFeH: "QpplN",
            cRmsc: function(e, n) {
                return e !== n
            },
            bvwWc: "UcoVt",
            rTEbS: function(e, n) {
                return e === n
            },
            sfTJB: function(e, n) {
                return e === n
            },
            NDegF: "#search-form-input",
            ysuCs: function(e, n) {
                return e(n)
            },
            WxVTL: "Cant find input",
            bYxnz: "Found a",
            PglBd: function(e, n, t) {
                return e(n, t)
            },
            loFSh: ".search-form__button",
            sAzFy: function(e, n) {
                return e(n)
            },
            vGpQD: ".button--filled",
            VaMfo: function(e, n) {
                return e(n)
            },
            SYMvI: "Win closed",
            Qyzuq: "NpqXZ",
            nbKXH: "https://sclouddownloader.net/",
            MvOtU: "#MediaButton",
            MNrLR: function(e) {
                return e()
            },
            allGT: ".cell-body.tablecell-visibility.style-scope.ytcp-video-row",
            AHGCX: "Public",
            avaRE: function(e, n) {
                return e(n)
            },
            rJopB: "aJDbi",
            epPuz: "yPdNz",
            JYLuj: "VisOQ",
            EtnNu: "#video-list",
            jANbP: "Change?",
            gmorN: "Found",
            tLNEs: "Not FOund",
            wTJUJ: "qUsKs",
            inXHu: function(e, n) {
                return e !== n
            },
            bBEvY: "yaxBS",
            bZCQo: "mGzNk",
            MsLUH: "2|1|0|4|3",
            beXwZ: "button",
            kDZFv: ".xh8yej3.x1iyjqo2",
            hDGqx: "Appended buttons man",
            GNMUq: "Get Videos",
            zuVKj: function(e, n) {
                return e === n
            },
            uOkIO: function(e, n) {
                return e === n
            },
            UfKcy: "NeIfw",
            qujJn: "MediaButton2",
            mmrft: "Dnkkf",
            BQGDk: function(e) {
                return e()
            },
            MIVxP: "btn-download",
            pIqKt: function(e, n) {
                return e(n)
            },
            KrTIE: function(e) {
                return e()
            },
            TFhgl: "Error:",
            vrOEA: function(e, n, t, r, o) {
                return e(n, t, r, o)
            },
            tqygT: "1|0|4|3|2",
            ThMei: function(e, n) {
                return e(n)
            },
            FQVfV: "fZNQO",
            TQGGW: function(e, n) {
                return e == n
            },
            oDGRe: "kMKFO",
            qEPTr: "FZuLM",
            ruPxE: "1|7|2|0|6|3|4|5",
            qIZwz: "#trackLink",
            yCHbS: function(e, n, t) {
                return e(n, t)
            },
            tXCAP: "SCinfo",
            XXZnc: "Bruv",
            prKEB: "#urlInput",
            vuROY: "#submitBtn",
            hbMlI: function(e, n, t) {
                return e(n, t)
            },
            dnXGO: "ktTJe",
            sTCYI: function(e, n) {
                return e == n
            },
            FVpjo: "undefined",
            GswPR: function(e, n) {
                return e === n
            },
            GvXTY: "zsgJY",
            KYFnm: "FuFpr",
            oufJL: function(e, n) {
                return e !== n
            },
            elsID: "ePqFI",
            yoCSk: "VOD",
            XFEaL: "MfynY",
            JJmyc: "fQHGx",
            SGaer: "0|6|5|4|2|1|3",
            EXqQD: function(e, n) {
                return e(n)
            },
            NNIoc: "AEccG",
            eUzoN: "iezGr",
            dfeGa: "Input was not Found",
            MaRQx: "?!!",
            tgjey: "wLtmu",
            ChTHm: "EZnIZ",
            ihCJQ: "complete",
            QrHBX: function(e, n) {
                return e(n)
            },
            tmiBd: function(e, n) {
                return e(n)
            },
            QeWjs: "#url",
            ZekWI: "after url",
            rGWlt: function(e, n) {
                return e(n)
            },
            LPxXF: "#progress",
            stVAW: "No id Found",
            sysIe: function(e, ...n) {
                return e(...n)
            },
            cGJGm: function(e, n, t, r) {
                return e(n, t, r)
            },
            FrFNR: function(e, n) {
                return e !== n
            },
            oravn: "cAUYj",
            rsRIE: function(e, n) {
                return e(n)
            },
            yEsCi: function(e) {
                return e()
            },
            YLmXs: function(e, n) {
                return e === n
            },
            cItCz: "NoNRb",
            jYniV: "aBxIR",
            XNUMZ: "NotFound",
            IJovx: function(e, n) {
                return e(n)
            },
            FjEal: "Added That Thing",
            XBEdw: function(e, n) {
                return e != n
            },
            PRiDB: function(e, n) {
                return e(n)
            },
            QDGGF: "src",
            eTzFC: "Fixed That Thing",
            GPafZ: function(e, n) {
                return e(n)
            },
            OIcom: "puHtB",
            mbNxi: function(e, n) {
                return e === n
            },
            pXoaE: "ytp-video-menu-item ytp-button",
            zItof: "Closiung",
            xNHgH: "QvjGg",
            WpWsP: "qopIC",
            LZYPn: "change",
            lkDqN: function(e, n) {
                return e == n
            },
            uUWvM: "FxmHM",
            nbNlR: function(e, n) {
                return e !== n
            },
            hbsTE: "zdTRm",
            wTeea: "video download successful\ncheck downloads folder",
            zkiIY: function(e, n) {
                return e === n
            },
            zUsav: function(e, n) {
                return e(n)
            },
            IpRfv: "vidbutton",
            kESQC: function(e, n, t) {
                return e(n, t)
            },
            xGtQs: "#downloadBtn",
            QroLF: function(e, n, t) {
                return e(n, t)
            },
            sPIGm: "Closed ad card",
            YsuMU: "dlbutton",
            xzTdO: function(e, n) {
                return e(n)
            },
            ssMBL: function(e, n) {
                return e == n
            },
            QlvFP: function(e, n) {
                return e === n
            },
            cZqHr: "SuEgb",
            qDRxg: "Best Quality Video",
            gUwkk: function(e, n) {
                return e(n)
            },
            PUTcb: "#height",
            qwaTo: "#header-description",
            NLqhB: function(e, n) {
                return e(n)
            },
            Txptl: ".autoplay",
            xOkLJ: function(e, n) {
                return e(n)
            },
            ZKnFe: "4|2|1|0|3",
            clSzJ: function(e, n, t) {
                return e(n, t)
            },
            BmwqK: function(e, n) {
                return e + n
            },
            eRQkk: function(e, n) {
                return e(n)
            },
            wSjSP: "#s_input",
            KYWsG: "XSWus",
            OAbmz: "Converting",
            MOpaU: function(e, n, t) {
                return e(n, t)
            },
            SYzJQ: function(e) {
                return e()
            },
            Kyjwi: "#formatSelect",
            hFcLm: function(e, n) {
                return e(n)
            },
            kwUVh: "#btn-action",
            vHsFC: "#asuccess",
            upjGO: function(e, n) {
                return e(n)
            },
            qjeWH: function(e, n) {
                return e == n
            },
            zhnsf: "href",
            VAQbW: ".clearfix",
            JgXwE: "Posted",
            jnLaf: "DOjOs",
            AeiFb: "RRTCR",
            fqSOD: function(e, n) {
                return e == n
            },
            ZFOnU: ".xt0psk2.xvs91rp.xo1l8bm.x5n08af.x18hxmgj",
            IPBFn: function(e, n) {
                return e !== n
            },
            KsGQg: "jitVC",
            ZDIhc: function(e, n, t) {
                return e(n, t)
            },
            qyLyC: "720",
            YqUZy: function(e, n) {
                return e === n
            },
            Xbkbx: "Fpxsr",
            gBVlP: "btn-submit",
            zwrzk: "no there",
            ViYRd: function(e, n) {
                return e instanceof n
            },
            YGOsx: "PvxGz",
            Cflap: "Provided argument is not a DOM element.",
            TXyGg: function(e, n, t) {
                return e(n, t)
            },
            oYzCO: "1080",
            UXqtc: function(e, n, t) {
                return e(n, t)
            },
            qPzzH: function(e, n) {
                return e(n)
            },
            ZhLSK: ".ScCoreButtonLabel-sc-s7h2b7-0",
            qtoNN: "1080P",
            FCujU: "720P",
            Ojvzq: function(e, n) {
                return e(n)
            },
            VNSjv: "480P",
            LBMGV: function(e) {
                return e()
            },
            opFZv: "CdifD",
            nQUlW: ".Layout-sc-1xcs6mc-0 .bMOhzu",
            IkIvB: function(e, n) {
                return e(n)
            },
            ruxiw: function(e, n) {
                return e(n)
            },
            iJnjz: function(e, n) {
                return e(n)
            },
            ALDDH: "BHMYE",
            Vlljd: function(e, n) {
                return e(n)
            },
            iwpps: function(e) {
                return e()
            },
            homZk: "Loaded",
            dXMEx: "body > div.relative.overflow-hidden > main > div > div.px-4.mx-auto.max-w-7xl.sm\\:px-6.lg\\:px-8 > div.overflow-hidden.bg-white.rounded-xl.shadow > div > div > div:nth-child(2) > ul > div > li:nth-child(2) > div:nth-child(3) > a",
            LZkFm: "body > div.relative.overflow-hidden > main > div > div.px-4.mx-auto.max-w-7xl.sm\\:px-6.lg\\:px-8 > div.overflow-hidden.bg-white.rounded-xl.shadow > div > div > div:nth-child(2) > ul > div > li:nth-child(3) > div:nth-child(3) > a",
            KDruC: "body > div.relative.overflow-hidden > main > div > div.px-4.mx-auto.max-w-7xl.sm\\:px-6.lg\\:px-8 > div.overflow-hidden.bg-white.rounded-xl.shadow > div > div > div:nth-child(2) > ul > div > li:nth-child(4) > div:nth-child(3) > a",
            IFGpB: "body > div.relative.overflow-hidden > main > div > div.px-4.mx-auto.max-w-7xl.sm\\:px-6.lg\\:px-8 > div.overflow-hidden.bg-white.rounded-xl.shadow > div > div > div:nth-child(2) > ul > div > li:nth-child(5) > div:nth-child(3) > a",
            cxpgi: "body > div.relative.overflow-hidden > main > div > div.px-4.mx-auto.max-w-7xl.sm\\:px-6.lg\\:px-8 > div.mb-6.space-y-3.lg\\:flex.lg\\:items-center.lg\\:justify-between.lg\\:space-y-0 > div.lg\\:flex.lg\\:items-center > p > span:nth-child(1)",
            gTzWZ: "body > div.relative.overflow-hidden > main > div > div.px-4.mx-auto.max-w-7xl.sm\\:px-6.lg\\:px-8 > div.mb-6.space-y-3.lg\\:flex.lg\\:items-center.lg\\:justify-between.lg\\:space-y-0 > div.lg\\:flex.lg\\:items-center > h2",
            DInmr: function(e, n) {
                return e(n)
            },
            TkbZa: function(e, n, t) {
                return e(n, t)
            },
            lHfFT: "1|3|0|4|2",
            fdSgZ: function(e) {
                return e()
            },
            GnIuB: function(e, n, t) {
                return e(n, t)
            },
            NnSBs: function(e, n) {
                return e !== n
            },
            lROvK: "pYmvk",
            qFirA: "Failed to download video:",
            YfFKa: "oUCdU",
            WfWXw: "Caught",
            pREkO: "convert1",
            YaWCl: "this",
            bDXjM: "DWOrT",
            Hkmou: "PCOcA",
            fDaxK: "clicked",
            glVuM: "Jfnbo",
            UJdoz: function(e, n) {
                return e(n)
            },
            hQQMz: "#convert",
            fXhFj: ".process-button",
            ncWoF: ".download-button",
            ejDBF: "music",
            dpfXQ: function(e, n) {
                return e(n)
            },
            QNJse: "These button dont work on youtube music yet",
            TQkEK: "ytd-playlist-panel-renderer",
            hKnwe: "span",
            JJDXp: "isclosed",
            ifPyP: function(e, n) {
                return e == n
            },
            UHtsu: "https://snapsave.io",
            AHHQW: function(e, n) {
                return e == n
            },
            cjLoh: "https://tubemp4.is",
            rrEDZ: function(e, n) {
                return e !== n
            },
            BPAOw: "NDQtf",
            DatIY: ".mp3",
            asPZH: "Handled",
            MhmYS: "Get MP3",
            nEAII: "pSaDB",
            nczzk: "CkWjz",
            ivnOF: "Getting video",
            iDUbN: function(e, n) {
                return e(n)
            },
            GJopN: "Unhandled Post",
            cHnaE: function(e, n) {
                return e + n
            },
            zIJvg: "y2mate.nu",
            Jwmzg: "/shorts/",
            KvmEc: "mp4",
            vwDIe: "mp3",
            MsTzl: "&useT=",
            EOgnj: "lazy",
            kfbPG: "allow-same-origin allow-scripts allow-popups allow-forms",
            gBecH: "absolute",
            GyAGT: function(e, n, t) {
                return e(n, t)
            },
            tyIhx: "NjSWS",
            atYpZ: "Pocxd",
            RIMkY: function(e, n) {
                return e + n
            },
            kDRkL: function(e, n) {
                return e || n
            },
            Eumpf: ".com",
            EFiJg: function(e, n) {
                return e + n
            },
            mwjTv: function(e, n) {
                return e + n
            },
            MCQFN: "https://y2mate.nu/",
            ecYiC: "&s=",
            yQNRV: "&mp4=",
            EeKNM: function(e, n, t, r) {
                return e(n, t, r)
            },
            FusAm: function(e) {
                return e()
            },
            kDrPQ: "YAOUA",
            GTjQQ: "https://savetik.co",
            SFiDv: "BSFzl",
            QZUvd: " - ",
            YmzRH: "FmTTc",
            RzQKl: "OSWPh",
            nmfwm: function(e, n) {
                return e !== n
            },
            ZkufU: "Unmuted video",
            WcyKS: "Failed unmuting",
            VpQKA: "jTagF",
            Zsvae: function(e, n) {
                return e(n)
            },
            hLmNB: function(e, n) {
                return e !== n
            },
            FmwjX: "MncUP",
            mbLyA: "CBIGq",
            QoFOo: "BGpYw",
            BcmZh: function(e, n) {
                return e == n
            },
            dYKFY: "0HzX",
            auNkw: "?v=",
            tdmoZ: function(e, n) {
                return e !== n
            },
            fgIFb: "Mute",
            pBuqs: "Mute (m)",
            sRHUU: "title",
            kVJtd: "#right-controls",
            cVjaQ: function(e, n) {
                return e == n
            },
            SCvQk: "path",
            TiUhH: function(e, n, t) {
                return e(n, t)
            },
            PcWfp: function(e, n, t) {
                return e(n, t)
            },
            UGAOB: "Unmute (m)",
            yxTso: function(e, n) {
                return e(n)
            },
            VxtHm: "PvaSK",
            NBHUj: function(e, n) {
                return e === n
            },
            RBQtu: "iFrameResize function not available",
            VJfxJ: function(e, n) {
                return e(n)
            },
            OBnfx: function(e, n) {
                return e(n)
            },
            LQTbh: "YBHfK",
            xDziT: "HzoBD",
            rmbAi: "EBjky",
            mvdET: function(e, n) {
                return e(n)
            },
            oZUqj: "ZaMbg",
            Zbhsx: function(e, n, t) {
                return e(n, t)
            },
            bmPus: "hMaMw",
            UMJMX: "0|1|2|3|4",
            xXYxz: "#end",
            TuVBq: "#right-content",
            MpxsI: "SrKpx",
            OSQCi: "hCGQQ",
            tblbE: "unload",
            XGoDL: "vBNXH",
            ejlSY: "win",
            Lmxmq: "4|2|3|5|0|1",
            mChXo: "iframe",
            oHdjF: "autoplay; fullscreen; geolocation; microphone; camera",
            bZqSN: function(e, n) {
                return e(n)
            },
            tuMkO: function(e, n) {
                return e !== n
            },
            tlCnJ: "Mueux",
            fsoTZ: "MddkQ",
            dvYub: function(e, n, t, r, o, i) {
                return e(n, t, r, o, i)
            },
            YMIuy: function(e, n) {
                return e !== n
            },
            PqFan: "ZIGgh",
            pBECj: "oDQSE",
            vckmC: function(e, n) {
                return e(n)
            },
            kTBZs: function(e, n) {
                return e(n)
            },
            mEujg: "ehlq8k34",
            TNGOj: function(e, n, t) {
                return e(n, t)
            },
            Pjfie: function(e, n) {
                return e(n)
            },
            EkUsH: function(e, n) {
                return e !== n
            },
            NjZyc: "zvArH",
            KiNvX: function(e, n) {
                return e !== n
            },
            Ycqxy: "YRfYg",
            ZCKNn: "rUSBQ",
            ZalVO: function(e, n, t, r) {
                return e(n, t, r)
            },
            swNcI: function(e, n) {
                return e !== n
            },
            VqxrS: "ShCzZ",
            zKfng: function(e, n) {
                return e(n)
            },
            FIrDD: "lnkBl",
            WqNxd: "yeeAG",
            tuSby: "Posted Buttons",
            darXO: function(e, n) {
                return e(n)
            },
            rGMeV: "iChii",
            Dtssr: "JQLCw",
            kHzag: "Cant append buttons yet",
            XlWWU: function(e) {
                return e()
            },
            SNtYf: function(e, n) {
                return e !== n
            },
            edgqQ: "JUMaA",
            ZgrfA: "vvaaZ",
            NXJxo: function(e, n, t) {
                return e(n, t)
            },
            EtdIR: function(e, n, t) {
                return e(n, t)
            },
            jYGLn: function(e) {
                return e()
            },
            FGoLW: function(e, n) {
                return e(n)
            },
            tjTjb: "wTawN",
            YurTY: "_blank",
            IULyV: function(e, n) {
                return e === n
            },
            aHhyr: "sYrfP",
            dfckR: "disabled",
            hgZvH: "VVmde",
            nvYjS: function(e, n, t) {
                return e(n, t)
            },
            uDYqU: "CYacF",
            qfcQc: "sjtqj",
            HLvdp: function(e, n, t) {
                return e(n, t)
            },
            bzYLx: "watch?v=",
            CXIyQ: "Title: ",
            OqMdx: function(e, n) {
                return e || n
            },
            VIxhg: "Poasted",
            CeWQW: "error-text",
            nweIC: function(e, n, t) {
                return e(n, t)
            },
            MNIJt: function(e) {
                return e()
            },
            CfgKB: function(e, n) {
                return e === n
            },
            NwbHy: "zrxeF",
            OEADH: "ecHlr",
            mzBzR: function(e) {
                return e()
            },
            MSMgU: "search_txt",
            Fkflq: ".media-heading",
            AlODj: function(e, n, t) {
                return e(n, t)
            },
            IjNKu: function(e, n) {
                return e(n)
            },
            VJsYC: function(e, n) {
                return e(n)
            },
            lnmMZ: "euLgG",
            gNqkm: "OXLoa",
            aABli: function(e, n) {
                return e(n)
            },
            GffzW: "No info Preset",
            bWwDh: function(e, n) {
                return e(n)
            },
            RpNjt: "#txt-url",
            oSTFs: "Input Loaded",
            RlnCz: function(e, n) {
                return e(n)
            },
            MVlwc: "#btn-submit",
            uaFuj: "GEtting res",
            aWOVH: function(e, n) {
                return e(n)
            },
            hENZk: "#video_title",
            bcrQO: "Got Res",
            proik: "#result",
            iUJha: "table",
            iBSLA: function(e, n, t) {
                return e(n, t)
            },
            edlmw: "OvPSf",
            rhMjV: "AwCvb",
            LPNfL: "XmCaX",
            XkzNd: function(e, n) {
                return e(n)
            },
            yBRfB: "#A_downloadUrl",
            oNlno: function(e, n) {
                return e(n)
            },
            oPbPU: "Done",
            PHbpb: function(e, n) {
                return e || n
            },
            wktnj: "texturl",
            ILfRF: function(e, n) {
                return e == n
            },
            ncGWA: "Searched",
            pFVbV: function(e, n) {
                return e(n)
            },
            vxhKA: function(e, n) {
                return e == n
            },
            QVEkg: "NxTJV",
            CcSjd: "Searching",
            PGSHc: "loaded",
            dcwaB: function(e, n) {
                return e == n
            },
            heVuR: "#download-720-MP4",
            OsEKI: function(e, n) {
                return e(n)
            },
            QGrqR: function(e, n) {
                return e(n)
            },
            vTLeW: function(e) {
                return e()
            },
            iHdTm: function(e, n, t) {
                return e(n, t)
            },
            rJfhd: function(e, n) {
                return e !== n
            },
            UcRKW: function(e, n, t) {
                return e(n, t)
            },
            fxDuK: function(e, n, t) {
                return e(n, t)
            },
            iOTVK: "apXnz",
            TGDnP: function(e, n) {
                return e(n)
            },
            McfQA: "tik-video",
            EpvFL: function(e, n) {
                return e(n)
            },
            NKPbO: "https://www.tiktok.com",
            Eigad: "clearfix",
            YmYej: function(e) {
                return e()
            },
            REtqh: function(e, n) {
                return e(n)
            },
            wDakT: "#app > div.playControls.g-z-index-control-bar.m-visible > section > div > div.playControls__elements > div.playControls__soundBadge.sc-ml-3x > div",
            bvYVo: "wdLcD",
            UyTWL: "TEXTAREA",
            bHIKk: function(e, n) {
                return e == n
            },
            ZqSmC: "KeyI",
            XLPRv: function(e, n) {
                return e(n)
            },
            AhXwP: "Open player page",
            OKECl: function(e, n) {
                return e == n
            },
            wWdAs: "form-app-root",
            DvnCs: function(e, n) {
                return e(n)
            },
            Jhwrz: function(e, n) {
                return e(n)
            },
            iFqqg: function(e, n) {
                return e(n)
            },
            GbLGB: function(e, n) {
                return e(n)
            },
            ZJaRo: function(e, n) {
                return e || n
            },
            JTQyb: "etxXw",
            BBotG: "collapse-frame",
            nQDly: function(e, n) {
                return e === n
            },
            GjmIV: "cyJPU",
            TAQrV: "vKPlT",
            bmJUL: "VHiXb",
            lTbWm: function(e) {
                return e()
            },
            lWlrY: function(e, n) {
                return e !== n
            },
            AzbXM: "Error downloading file:",
            SRFpw: "Doesnt work yet",
            xHved: "Get",
            WscEv: "cyjPV",
            OipCG: "video",
            oMSQI: "https://loader.to/api/card2/?url=",
            LoiZz: function(e, n) {
                return e !== n
            },
            Rrltk: "tOjuR",
            zaSss: "iAaVI",
            VPlwY: function(e, n) {
                return e(n)
            },
            zfPFB: function(e, n) {
                return e != n
            },
            HreTF: function(e, n) {
                return e(n)
            },
            ktRiO: "yt-button-view-model#dismiss-button",
            aXthS: "RKLnK",
            PqQqz: "RgLiN",
            SMTve: "ytp-ad-button-icon",
            Fooxe: function(e, n) {
                return e !== n
            },
            SyDbZ: "VtPib",
            mwAGz: "Muted ad",
            Olwcz: function(e, n) {
                return e && n
            },
            EcqnI: "iSuKa",
            WtvTg: "pNTaa",
            mcplN: "#song-video",
            uprFp: "#ytd-player",
            GnsrT: "Skipping ad :>",
            KhEZh: function(e, n) {
                return e && n
            },
            mRmbo: "GkKVJ",
            rBDzF: "NxqyS",
            rIXUD: "Fixed playBack",
            cxLdD: "SSnHX",
            lgVCK: "https://onlymp3.app",
            DtrxR: "/watch?=",
            VOzdd: function(e, n) {
                return e == n
            },
            UqOoT: "fastdl.app",
            gmCWT: "soundcloud.com",
            KtJLl: function(e, n) {
                return e === n
            },
            cOnVZ: "rPBZJ",
            bhbHh: function(e, n) {
                return e == n
            },
            zIEDw: "studio.youtube.com",
            xTKBf: "pqprN",
            bgIeu: "gzKgI",
            QdzLj: "www.instagram.com",
            fQfdc: "olkKh",
            ofpoK: function(e, n, t) {
                return e(n, t)
            },
            cbjiY: "sclouddownloader.net",
            xxZNh: "useT",
            tTUQt: function(e, n) {
                return e + n
            },
            srCLC: "qdownloader.cc",
            oyqdf: "JXlUq",
            RbEQh: "UlyUE",
            lWMzi: function(e, n) {
                return e == n
            },
            DzHmY: "snapsave.io",
            RtcWU: "FDaQe",
            oBtpD: "clips.twitch.tv",
            PNyDG: "AVAkq",
            TAErF: "www.twitch.tv",
            VeJfq: "clip",
            vuAWi: "User isnt wathcing a clip",
            NZQuD: "User is Watching a CLip",
            xHvQa: "clipr.xyz",
            CwmQw: function(e, n) {
                return e(n)
            },
            etZrA: "Get MP4",
            FnRpi: "PlayList MP4",
            oQEtW: "white",
            dfkit: "tt1",
            wKiTf: "bruh",
            eIbAe: "youtube",
            rsiDo: "tiktok",
            rQZjS: "onlymp3.app",
            FkDSN: "onlymp3.to",
            DnOHX: "Getting MP3",
            AwBZe: function(e, n, t) {
                return e(n, t)
            },
            qwkmI: "www.yt2conv.com",
            CcEsw: "Getting MP4",
            GbNMu: "yt5s.biz",
            NpJgj: "sss.instasaverpro.com",
            WxnUf: "en3.onlinevideoconverter.pro",
            LpQSE: "NO info Preset",
            iZcsc: function(e, n) {
                return e == n
            },
            OmBbT: "shorts/",
            yWPDl: function(e, n, t) {
                return e(n, t)
            },
            Ajhuw: "savetik.co",
            OKboL: function(e, n) {
                return e !== n
            },
            Jkbni: "tkzIJ",
            smKpx: "brlVQ",
            jCgcF: function(e, n, t) {
                return e(n, t)
            },
            sUPMO: "Added MiniPlayer Toggle with I",
            WjLlR: "keypress",
            Kzudl: "loader.to",
            XAXMP: "using loader.to api",
            CsdqJ: "trustedHTMLPolicy",
            TwWFt: "style",
            PConx: function(e, n) {
                return e + n
            },
            ulFmn: "cardApiIframe",
            TpWwk: "100%",
            SxYun: "true",
            JJHyM: "script",
            gqeZs: "https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.9/iframeResizer.min.js",
            jPRAw: "load",
            CLAhL: "div",
            BHwDd: "#secondary.ytd-watch-flexy",
            DWrjK: function(e, n) {
                return e(n)
            }
        };
        class n {
            static get br() {
                var t = {
                    GvUku: function(e, n, t) {
                        return e(n, t)
                    },
                    iJbdp: e.WnJuj
                };
                if (!e.GHYXL(e.GNFAE, e.GNFAE)) return new n("br");
                t.GvUku(n, {
                    log: !1
                }, t.iJbdp)
            }
            constructor(n, t) {
                var r = {
                    EsWSJ: function(n, t) {
                        return e.DnFlr(n, t)
                    },
                    dosuX: e.iFydz
                };
                this.element = n.constructor.name.includes("HTML") && n || function() {
                    for (let e in arguments[1]) {
                        if (r.EsWSJ(r.dosuX, "BLiKv")) return !1;
                        arguments[0].setAttribute(e, arguments[1][e])
                    }
                    return arguments[0]
                }(document.createElement(arguments[0]), arguments[1])
            }
            style(n) {
                var o = {
                    RIHUu: e.scFdB,
                    hKscP: "Caught",
                    Pfvzo: function(n, t) {
                        return e.oTqWn(n, t)
                    },
                    ncUUM: e.BazgU,
                    djjuc: "clicked"
                };
                if (!e.YPDmg(e.obNWw, e.obNWw)) {
                    for (let o in n) {
                        if (!e.YEuZy("iQQNe", "EgxSb")) return !!e.rPWFm(t, e.NtXYh, e.yzbac).parentNode && e.rPWFm(r, e.NtXYh, e.yzbac).parentNode;
                        this.element.style[o] = n[o]
                    }
                    return this
                } {
                    var i = {
                        BtQPt: o.RIHUu,
                        tORBP: o.hKscP,
                        BgtQl: function(e, n) {
                            return o.Pfvzo(e, n)
                        },
                        NQkhM: o.ncUUM
                    };
                    let e = null,
                        t = g.createElement;
                    w.createElement = function(r, c) {
                        var u = {
                            MXDnF: i.BtQPt,
                            UGEKO: i.tORBP,
                            tsJwe: function(e, n) {
                                return i.BgtQl(e, n)
                            },
                            MoUfZ: function(e) {
                                return e()
                            }
                        };
                        let l = t.call(e, r, c);
                        return l._click = l.click, l.click = function() {
                            if (e.log(l, u.MXDnF, l.tagName), "A" == l.tagName) {
                                ve.log(u.UGEKO, l);
                                let e = l.download,
                                    t = l.href;
                                ge = {
                                    id: new we(ye.href).searchParams.get("v"),
                                    href: t,
                                    title: e
                                }, u.tsJwe(be, n).postMessage(o, "*"), u.MoUfZ(y)
                            } else l._click.apply(l)
                        }, ie.log(l, i.NQkhM, l.tagName), l
                    }, W.click(), Q.log(o.djjuc), V((() => e.click()), 1e3)
                }
            }
            append(n, ...t) {
                var r, i = {
                    jRrtt: function(n, t, r) {
                        return e.rPWFm(n, t, r)
                    },
                    qxhOR: e.cFdfs
                };
                if (e.UJAsn == e.UJAsn) {
                    this.element.append(n.element || n), console.log("T:", {
                        targets: t,
                        fe: t && t.forEach
                    });
                    for (let n = 0; e.IOEeF(n, t.length); n++) {
                        let r = t[n];
                        console.log(e.TYWlN, {
                            element: r,
                            target: this
                        }), this.element.append(r.element || r)
                    }
                    return this
                }
                i.jRrtt(o, (r = new c(u.href), r.host = "clipr.xyz", r.pathname = r.pathname.replace("/" + l + "/clip", ""), r.search = "", r).href, i.qxhOR)
            }
            appendTo(n) {
                return (n.element || e.zpGji(typeof n, e.rZMUt) ? document.querySelector(n) : n).append(this.element), this
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
                    aYgDP: function(n, t) {
                        return e.CqiNf(n, t)
                    },
                    Bddpl: function(n, t) {
                        return e.CqiNf(n, t)
                    },
                    RhwxW: function(e, n, t) {
                        return e(n, t)
                    },
                    yDxWb: e.NtXYh,
                    crTny: "data-e2e",
                    GrZSG: e.HLVqp,
                    ljluE: e.sQDht,
                    wCgIJ: function(n, t) {
                        return e.STssp(n, t)
                    },
                    LmGsH: e.emhzy,
                    ayGTP: e.beIEL,
                    ATqUy: function(n, t) {
                        return e.dXRqE(n, t)
                    },
                    BpiZs: e.FvXMU,
                    vtEPx: function(n, t) {
                        return e.IOEeF(n, t)
                    },
                    EZXQf: e.KfxtF,
                    sTyLd: e.SYKtX,
                    CPwrv: e.sVoeL,
                    HfSkh: function(n, t) {
                        return e.pDEaL(n, t)
                    },
                    zJXXR: "video/mp4",
                    rJLej: e.caLVW
                };
                if (e.gopAp == e.gopAp) return new class {
                    constructor(e) {
                        var t = {
                            yEoIC: "innerText",
                            agbCe: n.ayGTP,
                            XnLel: "disabled",
                            XzXjN: function(e, n) {
                                return e(n)
                            }
                        };
                        if (n.ATqUy("OIWPq", n.BpiZs)) {
                            var r = a.innerText.match(/(?<res>\d+)(p|P)/i) || {};
                            r.groups && (r = n.aYgDP(w, r.groups.res), z[0] < r && (N[0] = r, F[1] = n.Bddpl(j, M)[0].href, G[2] = I))
                        } else {
                            for (var o = 0; n.vtEPx(o, e.length); o += 1)
                                if (n.wCgIJ(n.EZXQf, n.sTyLd)) {
                                    if (!n.RhwxW(i, n.yDxWb, n.crTny)) throw n.GrZSG;
                                    c.appendTo(u.querySelectorAll(".e1mecfx011")), l.appendTo(a.querySelectorAll(n.ljluE))
                                } else this[o] = e[o];
                            Object.defineProperty(this, n.CPwrv, {
                                get: function() {
                                    if (n.wCgIJ(n.LmGsH, "pLmai")) return e.length;
                                    i.set(t.yEoIC, t.agbCe), c.set(t.XnLel, !0), u(t.XzXjN(l, a.href), !0, !0, !1, !0)
                                }
                            }), Object.freeze(this)
                        }
                    }
                    item(e) {
                        return n.HfSkh(this[e], null) ? this[e] : null
                    }
                    namedItem(n) {
                        if (e.TiTrc("SnGkU", e.iSlDE)) return !1;
                        for (var t = 0; t < this.length; t += 1)
                            if (e.IDcms(this[t].id, n) || e.STssp(this[t].name, n)) return this[t];
                        return null
                    }
                    get toArray() {
                        if (n.ATqUy(n.rJLej, n.rJLej)) return [...this]; {
                            const e = new l(a, {
                                    type: n.zJXXR
                                }),
                                t = s.createObjectURL(e),
                                r = f.createElement("a");
                            r.style.display = "none", r.href = t, r.download = d + ".mp4", h.body.appendChild(r), r.click(), m.body.removeChild(r), p.revokeObjectURL(t)
                        }
                    }
                }([...this.element.children]);
                r.appendTo(o), i.log("Added Button")
            }
        }

        function t() {
            try {
                return document.querySelector(e.uTrKY).innerText.replace("Replying to ", "")
            } catch {
                if (e.GHYXL(e.FvPqG, e.fHghs)) try {
                    return document.querySelector("#app > div.css-14dcx2q-DivBodyContainer.e1irlpdw0 > div:nth-child(4) > div > div.css-1qjw4dg-DivContentContainer.e1mecfx00 > div.css-1stfops-DivCommentContainer.ekjxngi0 > div > div.css-1xlna7p-DivProfileWrapper.ekjxngi4 > div.css-1u3jkat-DivDescriptionContentWrapper.e1mecfx011 > div.css-1nst91u-DivMainContent.e1mecfx01 > div.css-bs495z-DivWrapper.e1mzilcj0").innerText.replace("Replying to ", "")
                } catch (n) {
                    return G(e.rkMIH, "data-e2e") ? e.pmlMr(G, e.rkMIH, e.yzbac).innerText : document.querySelector(e.RAvxs).innerText.replace("Replying to ", "")
                } else r((e => e.href)((e => (e.host = "clipr.xyz", e))(new o(i.href))), e.JXnST)
            }
        }

        function r() {
            var n = {
                HBokj: "#VGHGFf > div > div.Eddif > div:nth-child(2) > button > div.VfPpkd-RLmnJb",
                dqgMY: e.oUqaq,
                pmHAm: function(n, t, r) {
                    return e.Zsuhr(n, t, r)
                }
            };
            e.gwLAy(get_aria_label, "Why this ad?").click(), e.voWHf(setTimeout, (() => {
                document.querySelector(n.dqgMY).click(), n.pmHAm(setTimeout, (() => {
                    document.querySelector(n.HBokj).click()
                }), 1e3)
            }), 1e3)
        }
        _element = _e = n, setElement2 = function(n) {
            var t = {
                UAYuq: function(n) {
                    return e.QtUgN(n)
                },
                Snlql: function(n) {
                    return e.QtUgN(n)
                },
                tVzZt: function(n, t, r) {
                    return e.Zsuhr(n, t, r)
                }
            };
            if (e.PVfDg(e.WVmyS, "EYzcc")) return n.match(/(?<host>https?\:\/\/www\.tiktok\.com)\/(?<username>@[^\/]+)\/video\/(?<videoID>\d+)/i).groups;
            t.tVzZt(i, (function() {
                t.UAYuq(s);
                if (!f()) throw "Cant append buttons yet";
                return d.log("Posting"), t.Snlql(h)
            }), {
                callback: function() {}
            })
        };
        var o = e.lgVCK,
            i = e.DtrxR;

        function c(n, t, r = !1) {
            var o = {
                iyIET: e.KdrhM,
                LBGbV: "button",
                bfsph: e.CqDzV,
                AOfxi: e.MMhWN,
                LrHvW: e.zguGS,
                WQBHi: e.PpIsP,
                qMfLJ: function(n, ...t) {
                    return e.gwLAy(n, ...t)
                }
            };
            if ("EgFvO" !== e.axQKe) {
                var i = addEventListener(n, ((...e) => {
                    o.qMfLJ(t, ...e), r && removeEventListener(i)
                }), !0);
                return i
            }
            var d = new c(u.querySelector(o.iyIET)),
                h = new l(o.LBGbV, {
                    id: o.bfsph
                }).set("innerText", o.AOfxi).on(o.LrHvW, a),
                m = new s("button", {
                    id: "MediaButton2"
                }).set(o.WQBHi, "Get Videos").on("click", f);
            d.append(h, m)
        }

        function u(n) {
            if (e.JElft(e.PtFNL, e.aTMjF)) {
                e.agFnX(typeof jQuery, e.ldfdM) && n instanceof jQuery && (n = n[0]);
                var t = n.getBoundingClientRect();
                return e.IyWFc(t.top, e.uByaW(0, e.NUWjj(window.innerHeight || document.documentElement.clientHeight, 2))) && t.left >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight) + e.BZjdy(window.innerHeight || document.documentElement.clientHeight, 2) && e.nfaaS(t.right, window.innerWidth || document.documentElement.clientWidth)
            }
            var r = {
                iUoyQ: function(n, t) {
                    return e.CqiNf(n, t)
                }
            };
            c.children.length && (d = h.children, m.forEach = [].forEach, p.forEach((e => {
                r.iUoyQ(g, e)
            })))
        }

        function l(l, {
            callback: a,
            int: s
        }) {
            var f = {
                omfHQ: function(n, t) {
                    return e.gwLAy(n, t)
                }
            };
            if (e.Sbbpc(e.wmwuI, e.CYFbq)) return n.querySelector("#app > div.css-14dcx2q-DivBodyContainer.e1irlpdw0 > div:nth-child(4) > div > div.css-1qjw4dg-DivContentContainer.e1mecfx00 > div.css-1stfops-DivCommentContainer.ekjxngi0 > div > div.css-1xlna7p-DivProfileWrapper.ekjxngi4 > div.css-1u3jkat-DivDescriptionContentWrapper.e1mecfx011 > div.css-1nst91u-DivMainContent.e1mecfx01 > div.css-bs495z-DivWrapper.e1mzilcj0 > div > div.css-1d7krfw-DivOverflowContainer.e1mzilcj5 > h1").innerText.replace(e.ZPmhe, "");
            !a && (a = function() {}), !s && (s = 100), console.log({
                f: l,
                callback: a,
                int: s
            });
            try {
                if (!e.YPDmg(e.DBQdd, "gwokZ")) return l(), void a();
                t.log("Iframe is fully loaded"), f.omfHQ(r, !1)
            } catch (e) {}
            var d = e.hKbfP(setInterval, (() => {
                var t = {
                    xvIkX: "Getting video",
                    kOqzL: function(n, t, r) {
                        return e.JXgxN(n, t, r)
                    },
                    lYpjz: "No id Found"
                };
                if (e.JElft(e.rmHLj, e.oENHD)) try {
                    e.STssp(e.mogTN, e.hKivd) ? (o.log(t.xvIkX), t.kOqzL(i, c, u)) : (l(), e.BmbzG(a), clearInterval(d))
                } catch (e) {} else n.warn(t.lYpjz)
            }), e.YCNRk(s, 100));
            return d
        }

        function a(n) {
            if (e.GUkBX(e.bdiwW, e.FGreV)) return e.QqwnL(n.offsetParent, null);
            e.oFONI(i.data.size, 0) && (s.push(f.data), d.log(h.data))
        }

        function s(t) {
            if (e.pKzFV("vnwBn", e.rUZNe)) return t.parentNode;
            n = !1
        }

        function f() {
            return e.zMjUE(get_aria_label, e.PKpjy) && e.MfgMj(get_aria_label, e.PKpjy).click ? e.MfgMj(get_aria_label, e.PKpjy) : document.querySelector(e.DEiBb)
        }

        function d() {
            return e.kQGMX(get_aria_label, "Next") && get_aria_label(e.oIWFr).click ? get_aria_label(e.oIWFr) : document.querySelector(e.eGcwK)
        }

        function h() {
            try {
                return document.querySelector(e.CFUtx).children[0].innerText.split("\n")[1]
            } catch {
                return [...document.querySelectorAll(".xt0psk2.xvs91rp.xo1l8bm.x5n08af.x18hxmgj")].pop().innerText.split("\n")[0]
            }
        }

        function m() {
            var n = {
                snfrP: function(e, n) {
                    return e(n)
                },
                zKndH: "4|2|0|3|1",
                BpyQL: function(n, t, r) {
                    return e.WSirI(n, t, r)
                },
                Ebanq: "instaURL",
                GZeZP: function(n, t) {
                    return e.AcjSX(n, t)
                },
                PPklG: e.jxKeu,
                OqaYX: e.gjyRf,
                aMdMj: function(n) {
                    return e.OQacN(n)
                },
                vZwaO: e.jpnUK,
                ghmlS: "innerText",
                uiBNC: e.PjFdG,
                laQai: e.zguGS,
                SbXkl: e.sbaij,
                jfRsw: e.kfmvQ,
                vogbI: "80%",
                TDrlG: e.CDETR,
                HZKSQ: e.VsMzJ
            };
            if (!e.JElft(e.DdhsF, e.UgjYh)) {
                var o = {
                    PPehD: function(e) {
                        return n.aMdMj(e)
                    },
                    uwEVt: function(e, t) {
                        return n.snfrP(e, t)
                    },
                    HSMWr: n.vZwaO,
                    wJKVT: n.ghmlS,
                    OkQIz: n.uiBNC,
                    MfSvx: n.laQai,
                    HipkG: n.SbXkl,
                    fqWhc: n.jfRsw,
                    Rrwwo: n.vogbI,
                    Fgeuy: n.TDrlG,
                    FOLoW: "Appended"
                };
                return s.log(n.HZKSQ), n.snfrP(f, n.TDrlG).then((async e => {
                    let n = new N("button", {
                        id: o.HSMWr
                    }).appendTo(e).set(o.wJKVT, o.OkQIz).on(o.MfSvx, (function() {
                        Q(o.PPehD(R) || o.uwEVt(e, n.href), !1, !0, !1, !0)
                    })).style({
                        position: o.HipkG,
                        right: o.fqWhc,
                        top: o.Rrwwo
                    });
                    for (; !I.getElementById(o.HSMWr) && B.querySelector(o.Fgeuy);) R.log(o.FOLoW), n.appendTo(o.Fgeuy)
                }))
            }
            if (location.href.includes("reel"))
                if (e.YEuZy(e.thtbx, e.thtbx)) n.snfrP(t, r);
                else {
                    let t = open(e.FxciC, location.href, "width=400,height=500");
                    var i = e.pmlMr(GM_addValueChangeListener, e.gYjPT, (function(e, r, o, c) {
                        if (o)
                            for (var u = n.zKndH.split("|"), l = 0;;) {
                                switch (u[l++]) {
                                    case "0":
                                        GM_removeValueChangeListener(i);
                                        continue;
                                    case "1":
                                        n.BpyQL(GM_setValue, n.Ebanq, null);
                                        continue;
                                    case "2":
                                        t.close();
                                        continue;
                                    case "3":
                                        n.BpyQL(downloadFile_, o, n.GZeZP(document.title, n.PPklG));
                                        continue;
                                    case "4":
                                        console.log(n.OqaYX, {
                                            a: e,
                                            b: r,
                                            c: o,
                                            d: c
                                        });
                                        continue
                                }
                                break
                            }
                    }))
                }
        }
        async function p() {
            for (var n = {
                    vyVLJ: "Error downloading file:",
                    lYMbm: "Skipping ad :>",
                    bzaGT: function(n, t) {
                        return e.gwLAy(n, t)
                    },
                    qPIhB: function(n, t) {
                        return e.GUkBX(n, t)
                    },
                    jVRWZ: e.VxeCs,
                    dtSap: function(e, n, t) {
                        return e(n, t)
                    },
                    yCypq: e.dJutN,
                    CsIzt: e.NPANd,
                    sivqk: function(n, t) {
                        return e.cjcvs(n, t)
                    },
                    mHbTn: "ooevR",
                    aZnNy: "WSgmd"
                }, m = e => new Promise((n => setTimeout(n, e))), p = new Set, v = {}; e.OQacN(f);) {
                if (await e.zMjUE(m, 100), !e.stMlQ(f)) {
                    await e.DNNqP(m, 1e3);
                    break
                }
                e.xkXNX(f).click()
            }[...e.vogAD(getInstalImages)].forEach((t => {
                if (e.JElft("VPOXI", e.RZydj)) {
                    let n = findhref2(t, e.emaau)[0];
                    p.add([n.src, n.getAttribute(e.dJutN)])
                } else u.error(n.vyVLJ, l), (a || t || f).postMessage({
                    url: d,
                    title: h,
                    s: !1
                }, "*")
            })), e.zdHGp(d).click();
            try {
                e.STssp(e.dYfxt, "PlcTf") ? (r = 1, o.playbackRate = 16, i.log(n.lYMbm)) : d().click()
            } catch (e) {}
            for (; d();)
                if (e.fyyCh("gAgXS", e.zRPva)) e.OQacN(c).append(u.br.element), l().append(a.element), e.SBEqe(s).append(f.element);
                else {
                    await e.ijSYh(m, 300), [...getInstalImages()].forEach((e => {
                        var o = {
                            tAmRL: function(e, t) {
                                return n.bzaGT(e, t)
                            }
                        };
                        if (n.qPIhB(n.jVRWZ, n.jVRWZ)) o.tAmRL(t, r);
                        else {
                            let t = n.dtSap(findhref2, e, "img")[0];
                            p.add([t.src, t.getAttribute(n.yCypq)])
                        }
                    }));
                    try {
                        e.IfJFw(d).click()
                    } catch (e) {}[...p].length
                }
            for (; await e.gwLAy(m, 100), e.Uwquj(f);) e.PzYRA(f).click();
            [...p].forEach((e => {
                n.sivqk(n.mHbTn, n.aZnNy) ? (r.log(n.CsIzt, o), i = !0) : v[e[0]] = e[1]
            })), (p = Object.keys(v).map((e => ({
                src: e,
                name: v[e]
            })))).forEach((e => {
                var n = new URL(e.src).pathname.split(".").pop();
                N(e.src, e.name + "." + n)
            })), console.log("done", p)
        }

        function v() {
            e.XwkuH(p).then(console.log, console.warn)
        }
        setElement = function(n) {
            return !(!e.CqiNf(String, n).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/) || 11 != e.mJgVH(String, n).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/)[8].length) && e.zMjUE(String, n).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/)[8]
        }, findhref2 = function(n, t) {
            var l = {
                    LIyQy: function(n, t, r, o, i, c) {
                        return e.bySfy(n, t, r, o, i, c)
                    },
                    ddZum: e.LykCi,
                    XwBVj: e.qSnaf
                },
                a = [];
            return function n(s) {
                var f = {
                    LTCiD: function(n) {
                        return e.BmbzG(n)
                    },
                    ykbYu: function(e, n) {
                        return e !== n
                    },
                    wvkKe: "ngdDz",
                    xprzS: e.UDQQu,
                    nXCdo: function(n, t) {
                        return e.mJgVH(n, t)
                    }
                };
                e.zpGji(s.tagName.toLowerCase(), e.YCNRk(t, "a")) ? (a.push(s), s.children.length && ((s = s.children).forEach = [].forEach, s.forEach((e => {
                    var t = {
                        WYLfT: "Opening",
                        uZFwB: "ytp-playlist-menu-button ytp-button",
                        LxBdj: function(e) {
                            return f.LTCiD(e)
                        }
                    };
                    if (!f.ykbYu(f.wvkKe, f.xprzS)) return r.log(t.WYLfT), o.getElementsByClassName(t.uZFwB)[0].click(), t.LxBdj(i);
                    f.nXCdo(n, e)
                })))) : s.children.length && ((s = s.children).forEach = [].forEach, s.forEach((e => {
                    var t = {
                        QpFxl: function(e, n, t, r, o, i) {
                            return l.LIyQy(e, n, t, r, o, i)
                        }
                    };
                    if (l.ddZum !== l.XwBVj) n(e);
                    else {
                        let e = o() || i(c.href);
                        t.QpFxl(u, e, !1, !0, !1, !0)
                    }
                })))
            }(n), a
        }, getInstalImages = function() {
            return document.querySelectorAll(e.ojfov)
        }, getInstaVideo = function() {
            if (e.ZDLhK == e.ZDLhK) return document.querySelector("video.x1lliihq");
            n.error(e.mHqLF)
        }, downloadVideoFromBlob = function(t, r) {
            var o = {
                JbYpJ: function(n) {
                    return e.xkXNX(n)
                },
                Jlrtx: function(e) {
                    return e()
                },
                Jkepq: function(n) {
                    return e.xkXNX(n)
                }
            };
            if (e.PVfDg(e.JQGAP, e.toHsw))
                if (t && t.src && t.src.startsWith(e.Acmvx))
                    if (e.YPDmg("nhEQb", e.VLMJZ)) e.stMlQ(n);
                    else {
                        const n = t.captureStream(),
                            o = new MediaRecorder(n),
                            i = [];
                        o.ondataavailable = n => {
                            e.oFONI(n.data.size, 0) && (i.push(n.data), console.log(n.data))
                        }, o.onstop = () => {
                            var n = {
                                ZcEgg: function(e, n) {
                                    return e !== n
                                },
                                aOuOc: function(e, n) {
                                    return e !== n
                                }
                            };
                            if (!e.STssp(e.ticQx, e.ticQx)) return n.ZcEgg(c, u) && (this.body.color = l), n.aOuOc(a, s) && (this.body.size = f), this; {
                                const n = new Blob(i, {
                                        type: "video/mp4"
                                    }),
                                    t = URL.createObjectURL(n),
                                    o = document.createElement("a");
                                o.style.display = e.FFXxA, o.href = t, o.download = e.AcjSX(r, e.jxKeu), document.body.appendChild(o), o.click(), document.body.removeChild(o), URL.revokeObjectURL(t)
                            }
                        }, o.start(), e.hJxED(setTimeout, (() => {
                            var n = {
                                CDcKR: "Replying to ",
                                RUUSQ: function(n, t, r) {
                                    return e.hJxED(n, t, r)
                                },
                                NYVEs: e.yzbac,
                                SkxCQ: e.rkMIH,
                                nSjMd: "#main-content-video_detail > div > div.css-12kupwv-DivContentContainer.ege8lhx2 > div.css-1senhbu-DivLeftContainer.ege8lhx3 > div.css-1sb4dwc-DivPlayerContainer.eqrezik4 > div.css-3lfoqn-DivDescriptionContentWrapper-StyledDetailContentWrapper.eqrezik15 > div.css-r4nwrj-DivVideoInfoContainer.eqrezik3 > div.css-bs495z-DivWrapper.e1mzilcj0 > div > h1"
                            };
                            if ("CDKhi" !== e.bEgvs) try {
                                return l.querySelector("#app > div.css-14dcx2q-DivBodyContainer.e1irlpdw0 > div:nth-child(4) > div > div.css-1qjw4dg-DivContentContainer.e1mecfx00 > div.css-1stfops-DivCommentContainer.ekjxngi0 > div > div.css-1xlna7p-DivProfileWrapper.ekjxngi4 > div.css-1u3jkat-DivDescriptionContentWrapper.e1mecfx011 > div.css-1nst91u-DivMainContent.e1mecfx01 > div.css-bs495z-DivWrapper.e1mzilcj0").innerText.replace(n.CDcKR, "")
                            } catch (e) {
                                return n.RUUSQ(d, "browse-video-desc", n.NYVEs) ? n.RUUSQ(h, n.SkxCQ, "data-e2e").innerText : m.querySelector(n.nSjMd).innerText.replace(n.CDcKR, "")
                            } else o.stop()
                        }), e.XATWK(t.duration, 1e3))
                    } else e.MNooc(e.NejPt, "pZPMI") ? console.error("Invalid video element or source.") : e.NlukY(n, 2, !1, !1);
            else e.pDEaL(g, e.XHnrF(w)) && e.Uwquj(z) ? (Y.log(e.LRMqP), e.CljFv(A, (() => {
                o.JbYpJ(re).append(oe.br.element), o.Jlrtx(ie).append(ue.element), o.Jkepq(le).append(ae.element)
            }), 100)) : e.pDEaL(R, e.XHnrF(D)) && !e.stMlQ(W) && re.log(e.LSyFK), V = e.xkXNX(X)
        }, console.log("A?");
        const g = e => new Promise((n => setTimeout(n, e)));
        if (e.VOzdd(document.domain, e.UqOoT)) onload = async function() {
            var i = {
                RfCxS: function(n, t) {
                    return e.cRmsc(n, t)
                },
                sgWVB: e.bvwWc,
                RTxKY: function(n, t) {
                    return e.rTEbS(n, t)
                },
                jkYzp: e.fvdPE,
                VTZLd: function(n, t) {
                    return e.sfTJB(n, t)
                },
                PmBeI: "UwPlX"
            };
            const p = {
                url: name,
                input: null
            };
            var v = !1;
            for (e.rPWFm(setTimeout, (() => {
                    var n = {
                        devLQ: function(n, t) {
                            return e.QcWUw(n, t)
                        },
                        rAeFE: e.TYWlN
                    };
                    if (e.UhxEP("iMvpm", e.WdFeH)) {
                        this.element.append(a.element || s), f.log("T:", {
                            targets: d,
                            fe: h && m.forEach
                        });
                        for (var t = 0; n.devLQ(t, w.length); t++) {
                            var r = F[t];
                            j.log(n.rAeFE, {
                                element: r,
                                target: this
                            }), this.element.append(r.element || r)
                        }
                        return this
                    }
                    v = !0
                }), 2e4); !document.querySelector(e.NDegF);)
                if (await e.ysuCs(g, 0), v) throw e.WxVTL;
            p.input = document.querySelector(e.NDegF), console.log(e.bYxnz), e.PglBd((function(a, s) {
                var f = {
                    ihXBP: function(e, n, t) {
                        return e(n, t)
                    }
                };
                if (e.PXnAD(e.gtmHb, e.CdScf)) n.log("buttons are gone?!?!");
                else {
                    [e.gFhyl, e.fvdPE, "change", e.kFWVH].forEach((e => {
                        if (i.RfCxS(i.sgWVB, i.sgWVB)) f.ihXBP(o, (e => (e.host = "clipr.xyz", e.pathname = e.pathname.replace("/" + l + "/clip", ""), e.search = "", e))(new c(u.href)).href, "480");
                        else {
                            let n = new Event(e, {
                                bubbles: !0,
                                isTrusted: !0
                            });
                            a["on" + e] && a["on" + e](n), i.RTxKY(e, i.jkYzp) && (i.VTZLd(i.PmBeI, i.PmBeI) ? a.value = s : t(r)), a.dispatchEvent(n)
                        }
                    }))
                }
            }), p.input, p.url), document.querySelector(e.loFSh).click(), GM_setValue(e.gYjPT, await e.sAzFy((async function(e) {
                for (; !document.querySelector(e);) await g(0);
                return document.querySelector(e)
            }), e.vGpQD).then((e => e.href)))
        };
        else {
            if (e.qjeWH(document.domain, e.gmCWT)) return e.KtJLl(e.cOnVZ, "Txsrp") ? e.VaMfo(i, e.oIWFr) ? e.zMjUE(c, e.oIWFr).click ? e.gwLAy(u, "Next") : l.querySelector(e.eGcwK) : a.querySelector(e.eGcwK) : void(getSoundCloadI = function() {
                var t = {
                    VeQCB: e.SYMvI
                };
                e.QqwnL(e.Qyzuq, e.Qyzuq) ? (e.hJxED(_setV, "SC", e.BmbzG(getSoundCloudUrl)), open(e.nbKXH, "SC").onclose = function(e) {
                    console.log(t.VeQCB)
                }) : e.stMlQ(n).click()
            });
            if (e.bhbHh(document.domain, e.zIEDw)) {
                if (!e.NBHUj(e.xTKBf, e.bgIeu)) return void
                function() {
                    if ("zFcMI" === e.wTJUJ) return this.element.remove(), this;
                    var t;
                    e.JXgxN(setInterval, (() => {
                        var r, o = {
                            iUdLy: function(n, t) {
                                return e.zpGji(n, t)
                            },
                            ZLAHz: e.BazgU,
                            kIisE: e.allGT,
                            CtZhO: e.AHGCX,
                            UnRFL: e.zguGS,
                            koEcA: function(n, t) {
                                return e.avaRE(n, t)
                            },
                            BHZTN: e.rJopB,
                            pUgvB: function(e, n, t, r, o, i, c) {
                                return e(n, t, r, o, i, c)
                            },
                            zlgHZ: function(n, t) {
                                return e.GHYXL(n, t)
                            },
                            ijWQt: e.epPuz,
                            pbDCV: "button",
                            BzyLV: "Get"
                        };
                        if ("oyHBi" === e.JYLuj) {
                            var i = s.call(f, d, h);
                            return i._click = i.click, i.click = function() {
                                if (i.log(i, "was clicked", i.tagName), o.iUdLy("A", i.tagName)) {
                                    I.log("Caught", i);
                                    var e = i.download,
                                        n = i.href;
                                    B = {
                                        id: new U(R.href).searchParams.get("v"),
                                        href: n,
                                        title: e
                                    }
                                } else i._click.apply(i)
                            }, z.log(i, o.ZLAHz, i.tagName), i
                        }
                        try {
                            var c = [...document.querySelectorAll(e.EtnNu)].map((e => [e, [...e.classList]])).filter((e => e[1].includes("ytcp-video-section")))[0][0],
                                u = [...c.children[1].children].map((e => [e, [...e.classList], e.tagName])).filter((e => "YTCP-VIDEO-ROW" == e[2]));
                            u.filter((e => o.iUdLy(e[0].children[0].querySelectorAll(o.kIisE)[0].innerText, o.CtZhO))).map((e => e[0].children[0].querySelectorAll(".cell-body.tablecell-visibility.style-scope.ytcp-video-row")[0])).forEach((e => {
                                var t = {
                                    mLNqX: function(e) {
                                        return e()
                                    },
                                    FBOSB: o.UnRFL,
                                    GGhbK: function(e, n) {
                                        return e(n)
                                    },
                                    DOcjb: function(e, n) {
                                        return o.koEcA(e, n)
                                    },
                                    xFPDf: "NNntj",
                                    doGBT: o.BHZTN,
                                    EEsyd: function(e, n, t, r, i, c, u) {
                                        return o.pUgvB(e, n, t, r, i, c, u)
                                    }
                                };
                                if (o.zlgHZ(o.ijWQt, o.ijWQt)) t.mLNqX(n).click();
                                else {
                                    console.log(e), e.append(new _e("br").element);
                                    var r = new _e(o.pbDCV).set("innerText", o.BzyLV).on("click", (function(e) {
                                        var n = {
                                            SVSQt: function(e, n) {
                                                return t.GGhbK(e, n)
                                            },
                                            EssTL: "Doesnt work yet",
                                            AmkXW: function(e, n) {
                                                return t.DOcjb(e, n)
                                            }
                                        };
                                        if (t.xFPDf === t.doGBT) {
                                            f.log(d), h.append(new m("br").element);
                                            var r = new p("button").set("innerText", "Get").on(t.FBOSB, (function(e) {
                                                n.SVSQt(r, n.EssTL);
                                                var {
                                                    id: t,
                                                    href: o,
                                                    isShort: i
                                                } = n.AmkXW(M, e.target.parentElement.parentElement).map((n => ({
                                                    href: n.href,
                                                    short: n.href.includes("/short"),
                                                    id: e(n.href)
                                                }))).filter((e => e.id))[0];
                                                I(t, !1, !0, i && new B(o))
                                            }));
                                            F.append(r.element)
                                        } else {
                                            t.GGhbK(alert, "Doesnt work yet");
                                            var {
                                                id: o,
                                                href: i,
                                                isShort: c
                                            } = t.DOcjb(findhref2, e.target.parentElement.parentElement).map((e => ({
                                                href: e.href,
                                                short: e.href.includes("/short"),
                                                id: setElement(e.href)
                                            }))).filter((e => e.id))[0];
                                            t.EEsyd(downloadT, o, !1, !0, !1, !1, c ? new URL(i) : null)
                                        }
                                    }));
                                    e.append(r.element)
                                }
                            })), r = !0
                        } catch {
                            r = !1
                        }
                        e.pDEaL(t, r) && (t = r, console.log(e.jANbP, r ? e.gmorN : e.tLNEs))
                    }), 0)
                }();
                i.querySelector(e.MvOtU) || c(), u.querySelector(e.KdrhM) && !l.querySelector(e.KdrhM).querySelector("#MediaButton") && e.MNrLR(a)
            } else if (e.ifPyP(document.domain, e.QdzLj)) {
                if (e.fQfdc == e.fQfdc) {
                    var w;

                    function y() {
                        if (e.inXHu(e.bBEvY, e.bZCQo))
                            for (var o = e.MsLUH.split("|"), i = 0;;) {
                                switch (o[i++]) {
                                    case "0":
                                        var c = new n(e.beXwZ, {
                                            id: "MediaButton"
                                        }).set(e.PpIsP, e.MMhWN).on(e.zguGS, v);
                                        continue;
                                    case "1":
                                        var u = new n(document.querySelectorAll(e.kDZFv)[0]);
                                        continue;
                                    case "2":
                                        console.log(e.hDGqx);
                                        continue;
                                    case "3":
                                        u.append(c, l);
                                        continue;
                                    case "4":
                                        var l = new n(e.beXwZ, {
                                            id: "MediaButton2"
                                        }).set(e.PpIsP, e.GNMUq).on(e.zguGS, m);
                                        continue
                                }
                                break
                            } else t.log("Appended"), r.appendTo(e.CDETR)
                    }

                    function b() {
                        if (!e.fyyCh(e.UfKcy, "DwRjE")) {
                            for (var t = 0; e.IOEeF(t, this.length); t += 1)
                                if (e.zuVKj(this[t].id, o) || e.uOkIO(this[t].name, i)) return this[t];
                            return null
                        }
                        var r = new n(document.querySelector("._aaqy")),
                            c = new n(e.beXwZ, {
                                id: e.CqDzV
                            }).set(e.PpIsP, e.MMhWN).on(e.zguGS, v),
                            u = new n(e.beXwZ, {
                                id: e.qujJn
                            }).set("innerText", e.GNMUq).on(e.zguGS, m);
                        r.append(c, u)
                    }
                    return e.ofpoK(l, (function() {
                        document.querySelectorAll(e.kDZFv)[0].children
                    }), {
                        callback: function() {
                            var t = {
                                hVPJd: e.MIVxP
                            };
                            y(), e.pIqKt(setInterval, (() => {
                                e.mmrft == e.mmrft ? (document.querySelector(e.MvOtU) || e.BQGDk(y), document.querySelector(e.KdrhM) && !document.querySelector(e.KdrhM).querySelector(e.MvOtU) && e.BmbzG(b)) : n.getElementById(t.hVPJd).click()
                            }))
                        }
                    }), void console.log("Insta ballz")
                }
                n.querySelector("#VGHGFf > div > div.Eddif > div:nth-child(2) > button > div.VfPpkd-RLmnJb").click()
            } else if (document.domain == e.cbjiY)(async function() {
                var n = {
                    DPRaf: e.tqygT,
                    rYlwP: function(n, t) {
                        return e.ThMei(n, t)
                    },
                    FPPyA: ".media-heading",
                    OQBzZ: function(n, t) {
                        return e.YCNRk(n, t)
                    },
                    FVYKz: "Posted"
                };
                if (e.Sbbpc(e.FQVfV, e.FQVfV)) {
                    var p = e.kQGMX(_getV, "sc");
                    async function v(n, t) {
                        var r = {
                            LQYsw: function(n) {
                                return e.MNrLR(n)
                            },
                            HrYRc: function(n) {
                                return e.IfJFw(n)
                            },
                            eDfkI: function(n) {
                                return e.KrTIE(n)
                            }
                        };
                        let o = e => new Promise((n => setTimeout(n, e)));
                        return await new Promise((async(e, i) => {
                            var c = !1;
                            setTimeout((() => (c = 0, i())), t);
                            for (; !document.querySelector(n);)
                                if (await r.LQYsw(o), c) {
                                    r.HrYRc(i);
                                    break
                                }
                            return r.eDfkI(e)
                        })).then((e => !0), (e => !1))
                    }
                    if (e.TQGGW(location.pathname, "/download-sound-track"))
                        if (e.pKzFV(e.oDGRe, e.qEPTr))
                            for (var w = e.ruPxE.split("|"), y = 0;;) {
                                switch (w[y++]) {
                                    case "0":
                                        for (; !trackLink.href.length;) await e.gwLAy(g, 0);
                                        continue;
                                    case "1":
                                        await e.pIqKt(v, "#trackTitle");
                                        continue;
                                    case "2":
                                        await v(e.qIZwz);
                                        continue;
                                    case "3":
                                        console.log(b);
                                        continue;
                                    case "4":
                                        e.yCHbS(_setV, e.tXCAP, b);
                                        continue;
                                    case "5":
                                        close();
                                        continue;
                                    case "6":
                                        var b = {
                                            name: trackTitle.innerText,
                                            href: trackLink.href
                                        };
                                        continue;
                                    case "7":
                                        for (; !trackTitle.innerText.length;) await e.DNNqP(g, 0);
                                        continue
                                }
                                break
                            } else t.warn(e.TFhgl, r);
                        else {
                            if (!e.avaRE(_getV, "SC")) throw e.XXZnc;
                            var k = e.prKEB;
                            e.vuROY;
                            if (await e.hbMlI(v, k, 2e3), await v(k, 2e3))
                                if (e.YPDmg(e.dnXGO, e.dnXGO)) e.vrOEA(o, i, c, null, u);
                                else {
                                    for (document.querySelector(k).value = p, console.log("EZ url", !!window.formSubmit); e.sTCYI(typeof formSubmit, e.FVpjo);)
                                        if (e.GswPR(e.GvXTY, "UKDQh")) t.push(r);
                                        else try {
                                            e.PVfDg(e.KYFnm, "FuFpr") ? (!c && (d = 1, h.playbackRate = 16, m.log("Skipping ad :>")), s.click(), f = 0) : (await g(0), console.log("EZ url", formSubmit))
                                        } catch {}
                                        console.log("EZ url", formSubmit), formSubmit(), console.warn("Got"), e.WSirI(setInterval, formSubmit, 1e3)
                                }
                        }
                } else
                    for (var x = n.DPRaf.split("|"), T = 0;;) {
                        switch (x[T++]) {
                            case "0":
                                var E = u.href;
                                continue;
                            case "1":
                                var q = n.rYlwP(c, n.FPPyA)[0].innerText;
                                continue;
                            case "2":
                                n.OQBzZ(s, f).postMessage(S, "*");
                                continue;
                            case "3":
                                a.log(n.FVYKz);
                                continue;
                            case "4":
                                var S = {
                                    id: l,
                                    href: E,
                                    title: q,
                                    length: {}
                                };
                                continue
                        }
                        break
                    }
            })().then(console.log, console.warn);
            else {
                if (document.domain == e.zIJvg) {
                    e.zfPFB(location.pathname.split("/")[1], e.aWOVH(GM_getValue, e.zIJvg)) && (GM_setValue(e.zIJvg, location.pathname.split("/")[1]), console.warn("updated"));
                    let ke = new URL(location.href).searchParams.get("v"),
                        xe = e.bHIKk(new URL(location.href).searchParams.get("s"), 1),
                        Te = new URL(location.href).searchParams.get(e.KvmEc),
                        Ee = new URL(location.href).searchParams.get(e.xxZNh),
                        qe = e.tTUQt(ke, Te) + Ee;
                    const Se = e => new Promise((n => setTimeout(n, e)));
                    async function k(n, t = 5e3) {
                        var c = {
                            LhwXy: "TimeOut for"
                        };
                        let u = !1;
                        for (e.yCHbS(setTimeout, (() => {
                                console.log(c.LhwXy, n), u = !0
                            }), t); !document.querySelector(n);)
                            if (e.oufJL(e.elsID, e.elsID)) r.setAttribute(o.name, i.value);
                            else if (console.log("_", n, u), await e.zMjUE(Se, 500), u) break;
                        if (console.log(n, u), u) throw "NotFound";
                        return document.querySelector(n)
                    }
                    return void async function() {
                        for (var n = {
                                RtmJZ: e.NPANd
                            }; document.readyState != e.ihCJQ;) await e.QrHBX(Se, 0);
                        if (ke) {
                            let c = async n => {
                                var t, c = {
                                    nUVpr: function(e, n, t) {
                                        return e(n, t)
                                    },
                                    BKtZv: e.yoCSk
                                };
                                if (e.XFEaL !== e.JJmyc)
                                    for (var u = e.SGaer.split("|"), l = 0;;) {
                                        switch (u[l++]) {
                                            case "0":
                                                console.log("a", n);
                                                continue;
                                            case "1":
                                                (opener || window.parent).postMessage(a, "*");
                                                continue;
                                            case "2":
                                                console.log("Posted", a);
                                                continue;
                                            case "3":
                                                e.QtUgN(close);
                                                continue;
                                            case "4":
                                                var a = {
                                                    _: qe,
                                                    id: ke,
                                                    href: f,
                                                    title: s,
                                                    length: {}
                                                };
                                                continue;
                                            case "5":
                                                var s = findhref2(document.forms[0], "div")[0].innerText;
                                                continue;
                                            case "6":
                                                var f = e.EXqQD(findhref2, document.forms[0])[0].href;
                                                continue
                                        }
                                        break
                                    } else c.nUVpr(r, (e => e.href)(((t = new o(i.href)).host = "clipr.xyz", t)), c.BKtZv)
                            };
                            try {
                                await e.tmiBd(k, e.QeWjs).then((t => {
                                    e.NNIoc === e.eUzoN ? (r.log(n.RtmJZ, o), i = !0) : (console.log("e", t), t.value = xe ? "https://www.youtube.com/watch?v=" + ke : "https://www.youtube.com/shorts/" + ke, t.parentElement.children[1].click())
                                })).catch(c), console.log(e.ZekWI), await e.rGWlt(k, e.LPxXF).then((async n => {
                                    var o = {
                                        KKYsK: function(n, t) {
                                            return e.pIqKt(n, t)
                                        },
                                        goVNI: e.dfeGa,
                                        tKNXM: e.MaRQx
                                    };
                                    if (e.MNooc(e.tgjey, e.ChTHm)) o.KKYsK(t, o.goVNI), r.warn(o.tKNXM);
                                    else {
                                        for (; document.querySelector("#" + n.id);) await Se(0);
                                        console.log("a_")
                                    }
                                })).catch(c), console.log("b")
                            } catch (n) {
                                console.warn(e.TFhgl, n)
                            }
                        } else console.warn(e.stVAW)
                    }().then(console.log, console.warn)
                }
                if (document.domain == e.srCLC)
                    if (e.oyqdf !== e.RbEQh) {
                        const Pe = e => new Promise((n => setTimeout(n, e)));
                        async function x(n, t = 2e4) {
                            var a = {
                                SvPsL: e.KdrhM,
                                sHOot: e.MvOtU,
                                QxhTO: function(n) {
                                    return e.yEsCi(n)
                                }
                            };
                            if (e.YLmXs(e.cItCz, "YqyrE")) {
                                var s = {
                                        ZuyRn: function(n, ...t) {
                                            return e.sysIe(n, ...t)
                                        },
                                        ebZWF: function(n, t) {
                                            return e.rGWlt(n, t)
                                        }
                                    },
                                    h = e.cGJGm(i, c, ((...e) => {
                                        s.ZuyRn(h, ...e), f && s.ebZWF(d, h)
                                    }), !0);
                                return h
                            } {
                                let c = !1;
                                for (setTimeout((() => {
                                        var t = {
                                            OcHpq: function(n, t, r) {
                                                return e.voWHf(n, t, r)
                                            },
                                            jnfQC: e.emaau,
                                            RkZuQ: e.dJutN
                                        };
                                        if (e.FrFNR(e.oravn, "cAUYj")) {
                                            let e = t.OcHpq(r, o, t.jnfQC)[0];
                                            i.add([e.src, e.getAttribute(t.RkZuQ)])
                                        } else console.log("TimeOut for", n), c = !0
                                    }), t); !document.querySelector(n);)
                                    if (e.dXRqE(e.jYniV, e.jYniV)) {
                                        if (console.log("_", n, c), await Pe(500), c) break
                                    } else e.XwkuH(u), e.rsRIE(l, (() => {
                                        m.querySelector("#MediaButton") || p(), v.querySelector(a.SvPsL) && !g.querySelector(a.SvPsL).querySelector(a.sHOot) && a.QxhTO(w)
                                    }));
                                if (console.log(n, c), c) throw e.XNUMZ;
                                return document.querySelector(n)
                            }
                        }

                        function T(n, t) {
                            e.pXoaE, e.zItof;
                            if (e.xNHgH === e.WpWsP) !g.querySelector(e.WnJuj) && (e.IJovx(w, !0), z.parentNode.prepend(N), F.prepend(j.element), M.log(e.FjEal)), e.XBEdw(e.PRiDB(G, I.href), B) && (e.ijSYh(U, !0), R.set(e.QDGGF, D), W.log(e.eTzFC), Q = e.GPafZ(V, X.href));
                            else {
                                [e.gFhyl, e.fvdPE, e.LZYPn, e.kFWVH].forEach((r => {
                                    var o = {
                                        MICGP: function(e) {
                                            return e()
                                        },
                                        QYNBP: function(n, t) {
                                            return e.EXqQD(n, t)
                                        }
                                    };
                                    if (e.OIcom != e.OIcom) try {
                                        l(), o.MICGP(a), o.QYNBP(s, f)
                                    } catch (e) {} else {
                                        let o = new Event(r, {
                                            bubbles: !0,
                                            isTrusted: !0
                                        });
                                        if (n["on" + r] && n["on" + r](o), e.mbNxi(r, e.fvdPE)) n.value = t;
                                        n.dispatchEvent(o)
                                    }
                                }))
                            }
                        }
                        let Ce = document.createElement;
                        document._createElement = function(t, c) {
                            var u = {
                                fIXdb: e.NPANd,
                                kAmXc: e.scFdB,
                                CoGmQ: function(n, t) {
                                    return e.lkDqN(n, t)
                                },
                                RvoBU: function(n, t) {
                                    return e.PVfDg(n, t)
                                },
                                oleAQ: e.uUWvM,
                                xzSzc: "GGpir",
                                dbXZK: "Caught"
                            };
                            if (!e.nbNlR(e.hbsTE, e.hbsTE)) {
                                let r = Ce.call(document, t, c);
                                return r._click = r.click, r.click = function() {
                                    if (console.log(r, u.kAmXc, r.tagName), u.CoGmQ("A", r.tagName)) {
                                        if (!u.RvoBU(u.oleAQ, u.xzSzc)) return this[n]; {
                                            console.log(u.dbXZK, r);
                                            let e = r.download,
                                                n = r.href;
                                            V = {
                                                id: new URL(location.href).searchParams.get("v"),
                                                href: n,
                                                title: e
                                            }
                                        }
                                    } else r._click.apply(r)
                                }, console.log(r, e.BazgU, r.tagName), r
                            }
                            r.log(u.fIXdb, o), i = !0
                        }, async function() {
                            var n = {
                                HOBGD: e.wTeea,
                                IlSqM: function(n, t) {
                                    return e.zkiIY(n, t)
                                },
                                MhPXZ: "yhcId",
                                Fspeh: function(n, t) {
                                    return e.zUsav(n, t)
                                },
                                oZTMM: function(e) {
                                    return e()
                                }
                            };
                            if (location.href.includes("vidbutton")) throw e.IpRfv;
                            e.kESQC(GM_setValue, "dlbutton", ""), e.hKbfP(GM_addValueChangeListener, "dlbutton", (async function(e, t, c, u) {
                                console.log({
                                    a: e,
                                    b: t,
                                    c: c,
                                    d: u
                                }), c.includes(n.HOBGD) && (n.IlSqM(n.MhPXZ, n.MhPXZ) ? (await n.Fspeh(Pe, 1e3), n.oZTMM(close)) : this.element.style[r] = o[i])
                            }));
                            let t = await e.avaRE(x, e.QeWjs),
                                c = await x(e.xGtQs);
                            id_ = new URL(location.href).searchParams.get("v");
                            let u = "https://www.youtube.com/watch?v=" + id_;
                            e.QroLF(T, t, u), c.click()
                        }().then(console.log, (async n => {
                            var c = {
                                UiOJn: function(n, t, r) {
                                    return e.rPWFm(n, t, r)
                                },
                                GQOsW: e.YsuMU,
                                GgEXQ: function(n, t) {
                                    return e.uByaW(n, t)
                                },
                                SXBus: function(n, t) {
                                    return e.xzTdO(n, t)
                                },
                                uauAX: "#dlbutton"
                            };
                            e.YEuZy("LNvnv", "LNvnv") ? (t.click(), r.log(e.sPIGm)) : e.ssMBL(n, "vidbutton") && (e.QlvFP(e.cZqHr, "yRIIF") ? (r = 0, o = i.playbackRate) : (console.log(e.qDRxg), await e.gUwkk(x, e.PUTcb).then((e => {
                                var n = {
                                    YGKYg: function(e, n, t) {
                                        return c.UiOJn(e, n, t)
                                    },
                                    KvXoc: c.GQOsW
                                };
                                height.selectedIndex = c.GgEXQ(height.options.length, 1), dlbutton.click(), open = window.open, window.open = function(e, n, t) {
                                    console.log({
                                        a: e,
                                        b: n,
                                        c: t
                                    })
                                }, c.SXBus(x, c.uauAX).then((e => {
                                    var t = {
                                            nsJsJ: function(e, t, r) {
                                                return n.YGKYg(e, t, r)
                                            },
                                            uyxsy: n.KvXoc
                                        },
                                        r = "";
                                    setInterval((n => {
                                        r != e.innerText && (r = e.innerText, t.nsJsJ(GM_setValue, t.uyxsy, r))
                                    }))
                                }))
                            }))))
                        }))
                    } else try {
                        return !(![...v.querySelectorAll(e.qwaTo)].filter(g).filter((e => !G(e)))[0] && !e.NLqhB(z, e.Txptl)) && ([...N.querySelectorAll(e.qwaTo)].filter(F).filter((e => !G(e)))[0] || e.VaMfo(M, ".autoplay"))
                    } catch (E) {
                        return !1
                    } else {
                        if (e.lWMzi(document.domain, e.DzHmY)) {
                            if (e.RtcWU == e.RtcWU) {
                                async function E(n, t = 2e4) {
                                    let r = !1;
                                    for (e.hbMlI(setTimeout, (() => {
                                            console.log("TimeOut for", n), r = !0
                                        }), t); !document.querySelector(n) && (console.log("_", n, r), await e.xOkLJ(g, 500), !r););
                                    if (console.log(n, r), r) throw e.XNUMZ;
                                    return document.querySelector(n)
                                }
                                return _wfs = E, void async function() {
                                    var n = await e.hKbfP(E, e.wSjSP, 3e4);
                                    if (n)
                                        if ("XSWus" !== e.KYWsG)
                                            for (var t = e.ZKnFe.split("|"), r = 0;;) {
                                                switch (t[r++]) {
                                                    case "0":
                                                        e.clSzJ(N, F, e.BmwqK(j.title, ".mp4"));
                                                        continue;
                                                    case "1":
                                                        e.eRQkk(w, z);
                                                        continue;
                                                    case "2":
                                                        g.close();
                                                        continue;
                                                    case "3":
                                                        e.WSirI(M, e.gYjPT, null);
                                                        continue;
                                                    case "4":
                                                        d.log(e.gjyRf, {
                                                            a: h,
                                                            b: m,
                                                            c: p,
                                                            d: v
                                                        });
                                                        continue
                                                }
                                                break
                                            } else {
                                                console.log(e.OAbmz), id_ = new URL(location.href).searchParams.get("v"), n.value = "https://www.youtube.com/watch?v=" + id_, e.vogAD(ksearchvideo), e.MOpaU(setTimeout, e.SYzJQ(ksearchvideo), 1e3);
                                                var o = await e.CqiNf(E, e.Kyjwi);
                                                await e.hFcLm(E, e.kwUVh);
                                                o.selectedIndex = 0, o.options[0].selected = !0;
                                                for (var i = await E(e.vHsFC); !(i = await e.zUsav(E, e.vHsFC));) await e.upjGO(g, 0);
                                                for (e.xOkLJ(convertFile, 0); e.qjeWH(i.getAttribute(e.zhnsf), "#");) await e.tmiBd(g, 0), i = await e.rsRIE(E, e.vHsFC);
                                                console.log(i.href);
                                                var c = (await _wfs(e.VAQbW)).querySelector("h3").innerText,
                                                    u = {
                                                        id: id_,
                                                        href: i.href,
                                                        title: c,
                                                        length: {}
                                                    };
                                                console.log(e.JgXwE, u), e.YCNRk(opener, window).postMessage(u, "*")
                                            } else {
                                                if (e.GswPR(e.jnLaf, e.AeiFb)) {
                                                    for (let e in arguments[1]) arguments[0].setAttribute(e, arguments[1][e]);
                                                    return arguments[0]
                                                }
                                                alert(e.dfeGa), console.warn(e.MaRQx)
                                            }
                                }().then(console.log).catch(console.warn)
                            } {
                                var q = {
                                    rzZLc: e.scFdB,
                                    rmgYq: function(n, t) {
                                        return e.fqSOD(n, t)
                                    },
                                    fLRoe: "Caught",
                                    JRYMG: function(n, t) {
                                        return e.YCNRk(n, t)
                                    },
                                    xyJkU: function(n) {
                                        return e.OQacN(n)
                                    }
                                };
                                let Le = m.call(p, v, g);
                                return Le._click = Le.click, Le.click = function() {
                                    if (Le.log(Le, q.rzZLc, Le.tagName), q.rmgYq("A", Le.tagName)) {
                                        O.log(q.fLRoe, Le);
                                        let e = Le.download,
                                            n = Le.href;
                                        ({
                                            id: new K(Z.href).searchParams.get("v"),
                                            href: n,
                                            title: e
                                        }), q.JRYMG(J, re).postMessage(oe, "*"), q.xyJkU(ie)
                                    } else Le._click.apply(Le)
                                }, U.log(Le, e.BazgU, Le.tagName), Le
                            }
                        }
                        if (e.ssMBL(document.domain, e.oBtpD))
                            if (e.dXRqE(e.PNyDG, e.PNyDG)) {
                                const ze = e => new Promise((n => setTimeout(n, e)));
                                _wfs = async function(t, c = 2e4) {
                                    if (e.YqUZy(e.Xbkbx, e.Xbkbx)) {
                                        let r = !1;
                                        for (setTimeout((() => {
                                                var o = {
                                                    zQMbV: e.ZFOnU
                                                };
                                                if (e.IPBFn(e.KsGQg, e.KsGQg)) return [...n.querySelectorAll(o.zQMbV)].pop().innerText.split("\n")[0];
                                                console.log(e.NPANd, t), r = !0
                                            }), c); !document.querySelector(t) && (console.log("_", t, r), await e.pIqKt(ze, 500), !r););
                                        if (console.log(t, r), r) throw e.XNUMZ;
                                        return document.querySelector(t)
                                    }
                                    var u;
                                    e.ZDIhc(r, (e => e.href)(((u = new o(i.href)).host = "clipr.xyz", u)), e.qyLyC)
                                }, _copyElm = function(n) {
                                    var t = {
                                        cCxRA: e.gBVlP,
                                        McJti: e.zwrzk
                                    };
                                    if (!e.ViYRd(n, Element)) {
                                        if (e.YGOsx == e.YGOsx) throw new Error(e.Cflap);
                                        if (o.log(i.children.length), !c.children.length) throw l.getElementById(t.cCxRA).click(), t.McJti
                                    }
                                    const r = document.createElement(n.tagName);
                                    for (let e of n.attributes) r.setAttribute(e.name, e.value);
                                    return r.style.cssText = n.style.cssText, r.className = n.className, r.innerHTML = n.innerHTML, r
                                }, async function() {
                                    var n = {
                                        Utict: e.oYzCO,
                                        tijGx: function(n, t, r) {
                                            return e.UXqtc(n, t, r)
                                        },
                                        jUqKP: e.yoCSk
                                    };
                                    location.href;
                                    let t = (await e.qPzzH(_wfs, e.ZhLSK)).parentElement.parentElement.parentElement.parentElement;
                                    new _e(e.rGWlt(_copyElm, t)).on(e.zguGS, (function() {
                                        open((e => e.href)((e => (e.host = "clipr.xyz", e))(new URL(location.href))), n.Utict)
                                    })).appendTo(t.parentNode).element.querySelector(".ScCoreButtonLabel-sc-s7h2b7-0").innerText = e.qtoNN, new _e(e.NLqhB(_copyElm, t)).on(e.zguGS, (function() {
                                        e.CljFv(open, (e => e.href)((e => (e.host = "clipr.xyz", e))(new URL(location.href))), e.qyLyC)
                                    })).appendTo(t.parentNode).element.querySelector(".ScCoreButtonLabel-sc-s7h2b7-0").innerText = e.FCujU, new _e(e.Ojvzq(_copyElm, t)).on("click", (function() {
                                        e.TXyGg(open, (e => e.href)((e => (e.host = "clipr.xyz", e))(new URL(location.href))), e.JXnST)
                                    })).appendTo(t.parentNode).element.querySelector(e.ZhLSK).innerText = e.VNSjv, new _e(e.DNNqP(_copyElm, t)).on(e.zguGS, (function() {
                                        open((e => e.href)((e => (e.host = "clipr.xyz", e))(new URL(location.href))), e.cFdfs)
                                    })).appendTo(t.parentNode).element.querySelector(e.ZhLSK).innerText = "360P", new _e(e.ijSYh(_copyElm, t)).on(e.zguGS, (function() {
                                        n.tijGx(open, (e => e.href)((e => (e.host = "clipr.xyz", e))(new URL(location.href))), n.jUqKP)
                                    })).appendTo(t.parentNode).element.querySelector(e.ZhLSK).innerText = "VOD"
                                }().catch(console.warn)
                            } else s.log({
                                a: f,
                                b: d,
                                c: h,
                                d: m
                            }), p && v.name && N(F.href, j.name);
                        else if (e.cVjaQ(document.domain, e.TAErF)) {
                            let [Ne, Fe, je, Me] = location.pathname.split("/");
                            if (je != e.VeJfq) return console.warn(e.vuAWi);
                            console.log(e.NZQuD);
                            const Ge = e => new Promise((n => setTimeout(n, e)));
                            async function S(n, t = 2e4) {
                                var r = {
                                    TmJXB: "TimeOut for"
                                };
                                let o = !1;
                                for (setTimeout((() => {
                                        console.log(r.TmJXB, n), o = !0
                                    }), t); !document.querySelector(n) && (console.log("_", n, o), await e.sAzFy(Ge, 500), !o););
                                if (console.log(n, o), o) throw e.XNUMZ;
                                return document.querySelector(n)
                            }
                            _wfs = S, _wfs_ = S, _copyElm = function(n) {
                                var t = {
                                    YyPbU: "Win closed"
                                };
                                if (!(n instanceof Element)) throw new Error(e.Cflap);
                                const r = document.createElement(n.tagName);
                                for (let l of n.attributes)
                                    if (e.sfTJB(e.opFZv, e.opFZv)) r.setAttribute(l.name, l.value);
                                    else {
                                        e.JXgxN(o, "SC", e.LBMGV(i));
                                        var u = e.QroLF(c, "https://sclouddownloader.net/", "SC");
                                        u.onclose = function(e) {
                                            u.log(t.YyPbU)
                                        }
                                    }
                                return r.style.cssText = n.style.cssText, r.className = n.className, r.innerHTML = n.innerHTML, r
                            }, async function() {
                                var n = {
                                    WfuGB: function(e, n, t) {
                                        return e(n, t)
                                    },
                                    vOZtw: "720",
                                    JQOJS: function(e, n, t) {
                                        return e(n, t)
                                    },
                                    ISNmD: e.JXnST,
                                    YmOeU: e.cFdfs,
                                    cONdM: e.yoCSk
                                };
                                location.href;
                                await e.pIqKt(_wfs, e.nQUlW);
                                let t = document.querySelectorAll(e.nQUlW)[1],
                                    r = "a";
                                new _e(e.IkIvB(_copyElm, t)).on(e.zguGS, (function() {
                                    var e;
                                    open((e = new URL(location.href), e.host = "clipr.xyz", e.pathname = e.pathname.replace("/" + Fe + "/clip", ""), e.search = "", e).href, "1080")
                                })).appendTo(t.parentNode).element.querySelector(r).innerText = e.qtoNN, new _e(e.GPafZ(_copyElm, t)).on(e.zguGS, (function() {
                                    var e;
                                    n.WfuGB(open, (e = new URL(location.href), e.host = "clipr.xyz", e.pathname = e.pathname.replace("/" + Fe + "/clip", ""), e.search = "", e).href, n.vOZtw)
                                })).appendTo(t.parentNode).element.querySelector(r).innerText = e.FCujU, new _e(e.ruxiw(_copyElm, t)).on(e.zguGS, (function() {
                                    var e;
                                    n.JQOJS(open, (e = new URL(location.href), e.host = "clipr.xyz", e.pathname = e.pathname.replace("/" + Fe + "/clip", ""), e.search = "", e).href, n.ISNmD)
                                })).appendTo(t.parentNode).element.querySelector(r).innerText = e.VNSjv, new _e(e.iJnjz(_copyElm, t)).on(e.zguGS, (function() {
                                    var e;
                                    n.WfuGB(open, (e = new URL(location.href), e.host = "clipr.xyz", e.pathname = e.pathname.replace("/" + Fe + "/clip", ""), e.search = "", e).href, n.YmOeU)
                                })).appendTo(t.parentNode).element.querySelector(r).innerText = "360P", new _e(_copyElm(t)).on("click", (function() {
                                    var e;
                                    n.WfuGB(open, (e = new URL(location.href), e.host = "clipr.xyz", e.pathname = e.pathname.replace("/" + Fe + "/clip", ""), e.search = "", e).href, n.cONdM)
                                })).appendTo(t.parentNode).element.querySelector(e.ZhLSK).innerText = e.yoCSk
                            }().catch(console.warn)
                        } else {
                            if (document.domain == e.xHvQa) {
                                async function P() {
                                    for (; e.XBEdw(document.readyState, "complete");) await C(0);
                                    return !0
                                }

                                function C(n) {
                                    e.jxKeu;
                                    return new Promise((e => setTimeout(e, n)))
                                }
                                return void async function() {
                                    let n = name;
                                    await e.iwpps(P), logger.log(e.homZk);
                                    let t = {
                                        1080: document.querySelector("body > div.relative.overflow-hidden > main > div > div.px-4.mx-auto.max-w-7xl.sm\\:px-6.lg\\:px-8 > div.overflow-hidden.bg-white.rounded-xl.shadow > div > div > div:nth-child(2) > ul > div > li:nth-child(1) > div:nth-child(3) > a").href,
                                        720: document.querySelector(e.dXMEx).href,
                                        480: document.querySelector(e.LZkFm).href,
                                        360: document.querySelector(e.KDruC).href,
                                        VOD: document.querySelector(e.IFGpB).href
                                    }[n];
                                    logger.log(1);
                                    let r = document.querySelector(e.cxpgi).innerText;
                                    logger.log(2);
                                    let o = document.querySelector(e.gTzWZ).innerText;
                                    logger.log(3);
                                    let i = "@" + r + " on Twitch | " + o + " - " + n + "P.mp4";
                                    logger.log("Downloading file as: " + i), e.DInmr(open, t), logger.log(4), await C(4e3), e.zdHGp(close)
                                }().catch(console.warn)
                            }
                            if (location.href.includes("tubemp4.is")) {
                                async function L(n, t = 3e4) {
                                    for (var r = e.lHfFT.split("|"), o = 0;;) {
                                        switch (r[o++]) {
                                            case "0":
                                                e.sysIe(g, t).then((e => c = !0));
                                                continue;
                                            case "1":
                                                var i = {
                                                    KRvmA: function(n) {
                                                        return e.fdSgZ(n)
                                                    },
                                                    rqlbC: function(e) {
                                                        return e()
                                                    },
                                                    IGRfr: e.LRMqP,
                                                    AkoFB: function(n, t, r) {
                                                        return e.GnIuB(n, t, r)
                                                    }
                                                };
                                                continue;
                                            case "2":
                                                return document.querySelector(n);
                                            case "3":
                                                var c;
                                                continue;
                                            case "4":
                                                for (; !document.querySelector(n);)
                                                    if (e.NnSBs("pYmvk", e.lROvK)) l.log(i.IGRfr), i.AkoFB(a, (() => {
                                                        i.KRvmA(v).append(g.br.element), w().append(z.element), i.rqlbC(N).append(F.element)
                                                    }), 100);
                                                    else if (await e.zMjUE(g, 0), c) break;
                                                continue
                                        }
                                        break
                                    }
                                }
                                console.log("ok"), e.CwmQw(L, "#u").then((async o => {
                                    var i = {
                                        HILEA: e.qFirA,
                                        qgzeN: function(e, n) {
                                            return e === n
                                        },
                                        YJbyJ: e.YfFKa,
                                        hHtnj: "was clicked",
                                        gxlJw: e.WfWXw,
                                        GmFgW: function(e, n) {
                                            return e || n
                                        },
                                        cFGEU: e.PjFdG,
                                        tzTEq: e.pREkO,
                                        pLGER: e.YaWCl,
                                        qGypD: e.bDXjM,
                                        Wlmzb: e.Hkmou,
                                        LiRyC: e.BazgU,
                                        SYkNC: e.fDaxK,
                                        ZTFOv: function(e, n, t) {
                                            return e(n, t)
                                        }
                                    };
                                    e.QqwnL(e.glVuM, "RJZgX") ? t.error(i.HILEA, r) : (o.value = "https://www.youtube.com/watch?v=" + new URL(location.href).searchParams.get("v"), convert.click(), await e.eRQkk(g, 200), (await e.UJdoz(L, e.hQQMz)).click(), (await e.QrHBX(L, e.fXhFj)).click(), L(e.ncWoF).then((e => {
                                        var t = {
                                            oJxaf: function(e, n) {
                                                return i.qgzeN(e, n)
                                            },
                                            wlzgs: i.YJbyJ,
                                            RdWiu: i.hHtnj,
                                            cOOKi: i.gxlJw,
                                            vTtGt: function(e, n) {
                                                return i.GmFgW(e, n)
                                            },
                                            hwAbk: i.cFGEU,
                                            GlPij: i.tzTEq,
                                            onxKf: i.pLGER,
                                            JQENV: i.qGypD,
                                            oLfwx: i.Wlmzb,
                                            UjRIk: i.LiRyC
                                        };
                                        let r = document.createElement;
                                        document.createElement = function(o, i) {
                                            var c = {
                                                tUpGj: function(e, n) {
                                                    return e(n)
                                                },
                                                sTYqU: function(e, n, t, r, o, i) {
                                                    return e(n, t, r, o, i)
                                                },
                                                SkeKJ: "embedMP3",
                                                MWkYp: t.hwAbk,
                                                DfXNE: "fixed",
                                                pcgKJ: "50%",
                                                UGpAC: t.GlPij,
                                                svYKZ: t.onxKf
                                            };
                                            if (!t.oJxaf(t.JQENV, t.oLfwx)) {
                                                let e = r.call(document, o, i);
                                                return e._click = e.click, e.click = function() {
                                                    if (!t.oJxaf(t.wlzgs, "oUCdU")) throw n.getElementById(c.UGpAC).click(), c.svYKZ;
                                                    if (console.log(e, t.RdWiu, e.tagName), "A" == e.tagName) {
                                                        console.log(t.cOOKi, e);
                                                        let n = e.download,
                                                            r = e.href;
                                                        V = {
                                                            id: new URL(location.href).searchParams.get("v"),
                                                            href: r,
                                                            title: n
                                                        }, t.vTtGt(opener, window).postMessage(V, "*"), close()
                                                    } else e._click.apply(e)
                                                }, console.log(e, t.UjRIk, e.tagName), e
                                            } {
                                                var u = {
                                                    byPkW: function(e, n) {
                                                        return c.tUpGj(e, n)
                                                    },
                                                    QcENE: function(e, n, t, r, o, i) {
                                                        return c.sTYqU(e, n, t, r, o, i)
                                                    }
                                                };
                                                let n = new a("button", {
                                                    id: c.SkeKJ
                                                }).appendTo(e).set("innerText", c.MWkYp).on("click", (function() {
                                                    let e = w() || u.byPkW(n, N.href);
                                                    u.QcENE(F, e, !1, !0, !1, !0)
                                                })).style({
                                                    position: c.DfXNE,
                                                    right: c.pcgKJ,
                                                    top: "80%"
                                                });
                                                for (; !p.getElementById("embedMP3") && v.querySelector(".ytp-right-controls");) w.log("Appended"), n.appendTo(".ytp-right-controls")
                                            }
                                        }, e.click(), console.log(i.SYkNC), i.ZTFOv(setTimeout, (() => e.click()), 1e3)
                                    })))
                                })).then(console.log, console.warn)
                            }
                        }
                    }
            }
        }

        function z() {
            if (document.domain.includes(e.ejDBF)) throw e.dpfXQ(alert, e.QNJse), ".";
            var n = [...document.getElementsByTagName(e.TQkEK)].filter(u).filter((e => !a(e)))[0],
                t = findhref2(n, e.hKnwe).filter((e => !a(e))).filter(u).filter((e => "video-title" == e.id)).map(s).map(s).map((e => ({
                    id: setElement(findhref2(s(e))[0].href),
                    e: e
                })));
            return t
        }

        function N(e, n) {
            const t = document.createElement("a");
            t.href = e, t.download = n, document.body.appendChild(t), t.click(), document.body.removeChild(t)
        }
        var F, j;
        async function M() {
            for (; j && !j.closed;) await g(0);
            return 1
        }

        function G(t, r = "aria-label", i = document.body) {
            var c = [];
            return e.PRiDB((function i(a) {
                var s = {
                        UyMTY: function(n, t) {
                            return e.nmfwm(n, t)
                        },
                        YYfSJ: "TwkiX",
                        qDjHr: e.ZkufU,
                        NmsNw: e.WcyKS,
                        CLoYA: function(e, n) {
                            return e !== n
                        },
                        xFsCE: e.VpQKA,
                        HHLAz: function(n, t) {
                            return e.Zsvae(n, t)
                        }
                    },
                    f = !1;
                if (r) {
                    if (a.getAttribute(r) == t) {
                        if (!e.hLmNB(e.FmwjX, e.mbLyA)) return n.length;
                        c.push(a), f = 1
                    }
                } else [...a.attributes].map((e => {
                    if (s.UyMTY("IbKmg", s.YYfSJ)) {
                        const {
                            name: n,
                            value: t
                        } = e;
                        return {
                            name: n,
                            value: t
                        }
                    }
                    return this.element[arguments[0]]
                })).filter((e => e.value == t)).length && (c.push(a), f = 1);
                a.children.length && !f && ((a = a.children).forEach = [].forEach, a.forEach((e => {
                    var n = {
                        LCEdN: s.qDjHr,
                        XhFql: s.NmsNw
                    };
                    if (s.CLoYA("jTagF", s.xFsCE)) {
                        o.log(n.LCEdN);
                        try {
                            l.muted = 0
                        } catch (e) {
                            a.warn(n.XhFql)
                        }
                        u = 0
                    } else s.HHLAz(i, e)
                })))
            }), i), c.length ? e.sTCYI(c.length, 1) ? c[0] : c || !1 : null
        }

        function I(n, t = "aria-label", s = document.body) {
            var f = {
                    bsqVP: function(n, t) {
                        return e.gwLAy(n, t)
                    },
                    Lyvpe: function(e, n) {
                        return e == n
                    },
                    uhYFi: "kJFtc",
                    tgMvU: function(n, t) {
                        return e.nbNlR(n, t)
                    },
                    bDGRQ: e.QoFOo,
                    PTKTw: "qDRHU"
                },
                d = [];
            return function e(s) {
                var h = {
                    TtTbs: function(e, n) {
                        return f.bsqVP(e, n)
                    },
                    hjWvg: "Fixed playBack"
                };
                f.Lyvpe(s.getAttribute(t), n) ? f.uhYFi == f.uhYFi ? d.push(s) : r[o[0]] = i[1] : f.tgMvU(f.bDGRQ, "WCRbC") ? s.children.length && (f.tgMvU(f.PTKTw, f.PTKTw) ? (i = c.children, u.forEach = [].forEach, l.forEach((e => {
                    s(e)
                }))) : ((s = s.children).forEach = [].forEach, s.forEach((n => {
                    h.TtTbs(e, n)
                })))) : (i = 0, c = 1, u.playbackRate = l, a.log(h.hjWvg))
            }(s), e.BcmZh(d.length, 1) ? d[0] : e.YCNRk(d, !1)
        }

        function B() {
            e.tdmoZ("mlaWl", "mlaWl") ? (l = [e.RIMkY(e.MCQFN, e.gwLAy(a, e.zIJvg) || e.dYKFY) + "/", e.auNkw, s, e.ecYiC, f.pathname.startsWith("/shorts/") ? 1 : 0, "&mp4=", d ? e.KvmEc : "mp3", e.MsTzl, h], m.set(e.QDGGF, p.join(""))) : document.querySelector(".ytp-volume-area > .ytp-mute-button").click()
        }

        function U() {
            (e.voWHf(G, e.fgIFb, "title") && e.PglBd(G, e.fgIFb, "title")[0] || e.GnIuB(G, e.pBuqs, e.sRHUU)).click()
        }

        function R() {
            (query(e.kVJtd) && e.cVjaQ(e.rsRIE(query, e.kVJtd).querySelectorAll(e.SCvQk)[0].getAttribute("d"), UnmutePath) && e.TiUhH(G, e.fgIFb, "title")[0] || e.TiUhH(G, "Unmute", e.sRHUU) || e.PcWfp(G, e.UGAOB, e.sRHUU)).click()
        }
        console.log("B?"), _getIds = z, info = {}, downloadT = function(t, r = !1, s = !0, m = !1, p = !1, v = "") {
            var g, w = {
                VHXTo: function(n, t) {
                    return e.cHnaE(n, t)
                },
                CHoBF: function(n, t) {
                    return e.MfgMj(n, t)
                },
                SoZfB: e.zIJvg,
                gknHU: e.Jwmzg,
                hLOhZ: e.KvmEc,
                VLlkA: e.vwDIe,
                YtAzU: e.MsTzl,
                gnlRh: e.EOgnj,
                qGSVa: "no-referrer",
                gvBMJ: e.kfbPG,
                NXvYR: "autoplay; fullscreen; geolocation; microphone; camera",
                cHdfF: e.gBecH,
                MNCCV: e.FFXxA,
                tDKqg: function(n, t, r) {
                    return e.GyAGT(n, t, r)
                }
            };
            if (!e.sfTJB(e.tyIhx, e.atYpZ)) {
                let i = e.cHnaE(e.RIMkY(t, m ? e.KvmEc : e.vwDIe), s);
                if (!(g = document.getElementById(i)) || g.remove(), localStorage[i] && !r && (!p || !confirm("You have already download this video as ." + (m ? "mp4" : e.vwDIe) + "\nStill download?"))) return;
                let u = e.kDRkL(v, location);
                var y = new URL(location.href);
                y.host = y.host.replace(e.Eumpf, "mz.com"), console.log("o", y);
                let l = [e.EFiJg(e.mwjTv(e.MCQFN, e.CqiNf(GM_getValue, e.zIJvg) || "0HzX"), "/"), "?v=", t, e.ecYiC, y.pathname.startsWith("/shorts/") ? 1 : 0, e.yQNRV, m ? e.KvmEc : e.vwDIe, e.MsTzl, s];
                console.log(i, l);
                return e.EeKNM(c, "unload", (function() {
                    info[t].close()
                }), !0), onmessage = function(t) {
                    var r, i = {
                        fFBHd: e.JJDXp
                    };
                    if (e.lkDqN(t.origin, o) || t.origin.match(/https?:\/{2}onlymp3\.to/) || t.origin.match(/https?:\/{2}en\.onlymp3\.to/) || t.origin.match(/https?:\/{2}en(\d)\.onlinevideoconverter\.pro/) || "https://sss.instasaverpro.com" == t.origin || e.ssMBL(t.origin, "https://y2mate.nu") || e.ifPyP(t.origin, e.UHtsu) || e.AHHQW(t.origin, e.cjLoh))
                        if (e.rrEDZ("NDQtf", e.BPAOw)) n.click();
                        else {
                            const {
                                data: {
                                    href: n,
                                    title: o,
                                    length: c,
                                    id: u,
                                    _: l
                                }
                            } = t;
                            let a = e.AcjSX(o, m ? ".mp4" : e.DatIY);
                            (r = document.getElementById(l)) && r.remove(), console.log(e.asPZH, {
                                href: n,
                                title: o,
                                length: c,
                                id: u,
                                _: l
                            }, t), X.set(e.PpIsP, e.MhmYS), X.set("disabled", !1), s ? e.QqwnL(e.nEAII, e.nczzk) ? (!t[f] || d[h].closed) && (N[F] = null, j(M), G.log(I, i.fFBHd)) : (console.log(e.ivnOF), N(n, a)) : e.iDUbN(open, n), localStorage[l] = n
                        } else console.log(e.GJopN, t)
                }, info[t] = m ? e.NlukY(open, u.pathname.startsWith("/shorts/") ? "https://yt5s.biz/enxj100/" : "https://qdownloader.cc/youtube-video-downloader.html?v=" + t, [t, u.pathname.startsWith(e.Jwmzg) ? 1 : 0, e.BmwqK(m, !1)], "width=400,height=500") : ! function() {
                    var e = {
                            XzwYC: function(e, n) {
                                return w.VHXTo(e, n)
                            },
                            iYVXu: function(e, n) {
                                return w.VHXTo(e, n)
                            },
                            qOJGe: "https://y2mate.nu/",
                            CCFgz: function(e, n) {
                                return w.CHoBF(e, n)
                            },
                            lzpXb: w.SoZfB,
                            DLKgJ: w.gknHU,
                            BshgH: "&mp4=",
                            GIIGT: w.hLOhZ,
                            SrdIk: w.VLlkA,
                            ZqFHY: w.YtAzU,
                            ldYWx: "src"
                        },
                        n = new _e("iframe", {
                            src: l.join(""),
                            id: i,
                            useT: s,
                            loading: w.gnlRh,
                            referrerpolicy: w.qGSVa,
                            allowfullscreen: !0,
                            sandbox: w.gvBMJ,
                            allow: w.NXvYR
                        }).style({
                            border: 0,
                            position: w.cHdfF,
                            width: 0,
                            height: 0,
                            "pointer-events": w.MNCCV,
                            opacity: 1
                        });
                    return F = w.tDKqg(GM_addValueChangeListener, w.SoZfB, (function(r, o, i, c) {
                        l = [e.XzwYC(e.iYVXu(e.qOJGe, e.CCFgz(GM_getValue, e.lzpXb) || "0HzX"), "/"), "?v=", t, "&s=", y.pathname.startsWith(e.DLKgJ) ? 1 : 0, e.BshgH, m ? e.GIIGT : e.SrdIk, e.ZqFHY, s], n.set(e.ldYWx, l.join(""))
                    })), n.appendTo(document.body), n.closed = !1, n
                }()
            }
            i = !0, c = u[1], l.log(a)
        }, downloadTikTok = function(r, s) {
            var d = {
                fTbdb: function(n) {
                    return e.FusAm(n)
                },
                iBPQO: e.CFUtx,
                zqWJL: e.kDrPQ,
                jTDAa: e.GTjQQ,
                bZuqU: e.SFiDv,
                hcZsN: function(e, n, t, r) {
                    return e(n, t, r)
                },
                JeruM: function(n, t) {
                    return e.EFiJg(n, t)
                },
                BzAiy: e.QZUvd,
                LhmYS: e.DatIY,
                xLhyf: function(n, t) {
                    return e.IDcms(n, t)
                },
                iJlpM: e.YmzRH,
                AGpql: e.RzQKl,
                muQVx: function(n, t, r, o) {
                    return e.NlukY(n, t, r, o)
                },
                yOqPg: "https://savetik.co/en"
            };
            (async function(e, r) {
                var s = {
                    aVIvv: function(e) {
                        return d.fTbdb(e)
                    },
                    HPjqX: d.iBPQO,
                    BGAnp: function(e) {
                        return d.fTbdb(e)
                    },
                    bkYeB: function(e, n) {
                        return e == n
                    },
                    CSnwW: d.zqWJL,
                    yYVQN: d.jTDAa,
                    gLyeI: function(e, n) {
                        return e === n
                    },
                    xLgsc: d.bZuqU,
                    srGfs: "fUvaZ",
                    wmMnd: function(e, n, t, r) {
                        return d.hcZsN(e, n, t, r)
                    },
                    YfkQk: function(e, n) {
                        return e + n
                    },
                    gQMJt: function(e, n) {
                        return d.JeruM(e, n)
                    },
                    cOfmW: d.BzAiy,
                    CKtZG: d.LhmYS,
                    xRXtE: function(e, n) {
                        return d.xLhyf(e, n)
                    },
                    hesbF: d.iJlpM,
                    KYIPI: function(e, n) {
                        return e !== n
                    },
                    NVGbG: d.AGpql
                };
                await d.fTbdb(M), console.log("ez");
                let h = r.videoID,
                    m = r.username,
                    p = d.fTbdb(t);
                onmessage = function(e) {
                    var t = {
                        BSeEM: function(e) {
                            return s.aVIvv(e)
                        },
                        rOaVu: s.HPjqX,
                        CbRFu: function(e) {
                            return s.BGAnp(e)
                        }
                    };
                    if (e.origin == o || e.origin.match(/https?:\/{2}savetik\.csavetik.coo/) || e.origin.match(/https?:\/{2}en\.onlymp3\.to/) || e.origin.match(/https?:\/{2}en(\d)\.onlinevideoconverter\.pro/) || s.bkYeB(e.origin, "https://savetik.co"))
                        if (s.CSnwW != s.CSnwW) i.value = c, t.BSeEM(u), l(a, 1e3);
                        else {
                            var {
                                data: {
                                    href: r,
                                    links: d,
                                    title: h,
                                    length: m,
                                    id: v,
                                    mp4: g,
                                    info: {
                                        username: w
                                    }
                                }
                            } = e;
                            if (console.log("Handled", {
                                    href: r,
                                    title: h,
                                    length: m,
                                    id: v,
                                    links: d,
                                    mp4: g
                                }, e), s.bkYeB(e.origin, s.yYVQN)) {
                                if (s.gLyeI(s.xLgsc, s.srGfs)) return n.querySelector(t.rOaVu).children[0].innerText.split("\n")[1];
                                h = p, s.wmMnd(N, g ? d[0] : d.pop(), s.YfkQk(s.gQMJt(w + s.cOfmW, h), g ? ".mp4" : s.CKtZG), j)
                            } else if (s.xRXtE(s.hesbF, s.hesbF)) {
                                if (useT) {
                                    if (s.KYIPI(s.NVGbG, s.NVGbG)) return !1; {
                                        let e = document.createElement("a");
                                        e.download = s.YfkQk(h, s.CKtZG), e.href = r, document.body.appendChild(e), e.click(), e.remove()
                                    }
                                } else open(r);
                                localStorage[_] = r
                            } else t.CbRFu(c).append(u.br.element), t.BSeEM(l).append(a.element), t.BSeEM(e).append(f.element)
                        } else console.log("Unhandled Post", e)
                }, j = d.muQVx(open, d.yOqPg, ["https://www.tiktok.com/" + m + "/video/" + h, e + !1], "width=400,height=500")
            })(r, s).then(console.log, console.warn)
        }, abc_ = G, p = U, Um = R;
        var D = 0;

        function W(n) {
            var t = {
                BkPCs: function(n, t) {
                    return e.yxTso(n, t)
                }
            };
            if (e.VxtHm == e.VxtHm) return !!n && !n.closed;
            var r = {
                ZguNh: function(e, n) {
                    return t.BkPCs(e, n)
                }
            };
            l.push(a), s.children.length && (v = g.children, w.forEach = [].forEach, z.forEach((e => {
                r.ZguNh(F, e)
            })))
        }
        async function Q(n = [
            ["w1", "win1"],
            ["w2", "win2"],
            ["w3", "win3"],
            ["w4", "win4"]
        ]) {
            if (!e.GUkBX(e.bmPus, e.bmPus)) {
                var i, a = !1;
                return await new Promise(((s, f) => {
                    var d = {
                        SXsWK: function(e, n, t) {
                            return e(n, t)
                        },
                        bwTqk: e.oYzCO,
                        EYneE: function(n, t) {
                            return e.VJfxJ(n, t)
                        },
                        pxIZL: function(n, t) {
                            return e.OBnfx(n, t)
                        },
                        OoyKE: function(e, n) {
                            return e(n)
                        },
                        RlZDC: e.LQTbh,
                        nRypG: function(e, n) {
                            return e === n
                        },
                        CQSLJ: e.xDziT,
                        dJEwf: e.rmbAi,
                        ezRUE: function(n, t) {
                            return e.mvdET(n, t)
                        }
                    };
                    if ("ZaMbg" !== e.oZUqj) d.SXsWK(o, (e => (e.host = "clipr.xyz", e.pathname = e.pathname.replace("/" + l + "/clip", ""), e.search = "", e))(new c(u.href)).href, d.bwTqk);
                    else var h = e.Zbhsx(setInterval, (e => {
                        var o, c = {
                            PEaPW: function(e, n) {
                                return d.pxIZL(e, n)
                            },
                            tfwsB: function(e, n) {
                                return d.OoyKE(e, n)
                            }
                        };
                        if ("YBHfK" === d.RlZDC) n.forEach((e => {
                            this[e[0]] = d.EYneE(W, window[e[1]]), !window[e[1]] && !a && (a = !0, i = e[1], console.log(e))
                        })), i && (d.nRypG(d.CQSLJ, d.dJEwf) ? t.value = r : (d.ezRUE(s, i), clearInterval(h)));
                        else try {
                            var u = void 0 !== G ? I : B.querySelectorAll;
                            return U ? [...X.querySelectorAll(Y)].filter((e => !(null === u.offsetParent)))[0] : (o = c.PEaPW(u, D) ? c.PEaPW(u, s).length ? u(Q)[0] : c.tfwsB(u, i) : null, u.keys(o).length ? o : null)
                        } catch {}
                    }), 500)
                })), i
            }
            e.NBHUj(typeof r, e.ldfdM) ? c({
                log: !1
            }, e.WnJuj) : u.error(e.RBQtu)
        }

        function V(i, m, p) {
            var v = {
                QXtpT: e.xXYxz,
                SJPIF: e.TuVBq,
                dKPjV: function(n, t) {
                    return e.TiTrc(n, t)
                },
                nnRZb: e.MpxsI,
                mGNik: e.JJDXp,
                RotKW: e.OSQCi,
                ElsqT: function(e, n, t, r, o) {
                    return e(n, t, r, o)
                },
                qAMjl: e.tblbE,
                ekoPc: function(n, t, r) {
                    return e.hKbfP(n, t, r)
                },
                WcjMi: "qQSju",
                VXaFi: "HUgII"
            };
            if (!m) return e.avaRE(alert, "This button is corrently broken");
            var g = e.LBMGV(_getIds),
                w = [];
            for (let n = 0; e.IOEeF(n, i); n++)
                if (e.XGoDL == e.XGoDL) w.push([e.cHnaE("w", n), e.ejlSY + n]);
                else
                    for (var y = e.UMJMX.split("|"), b = 0;;) {
                        switch (y[b++]) {
                            case "0":
                                u.log("Appended buttons man");
                                continue;
                            case "1":
                                var k = new l(a.querySelectorAll(e.kDZFv)[0]);
                                continue;
                            case "2":
                                var x = new s(e.beXwZ, {
                                    id: "MediaButton"
                                }).set(e.PpIsP, e.MMhWN).on("click", f);
                                continue;
                            case "3":
                                var T = new d(e.beXwZ, {
                                    id: "MediaButton2"
                                }).set(e.PpIsP, e.GNMUq).on(e.zguGS, h);
                                continue;
                            case "4":
                                k.append(x, T);
                                continue
                        }
                        break
                    }
                g.forEach((({
                id: e
            }, i) => {
                var u = {
                    NnuPW: v.QXtpT,
                    YeTZy: v.SJPIF,
                    HOIHo: function(e, n) {
                        return e === n
                    },
                    oPDiS: function(e, n) {
                        return v.dKPjV(e, n)
                    },
                    eGWhh: v.nnRZb,
                    aKIZO: "EOiLl",
                    kUpnu: v.mGNik,
                    exQCC: v.RotKW,
                    TRyjl: "download",
                    DgOYb: function(e, n, t, r, o) {
                        return v.ElsqT(e, n, t, r, o)
                    },
                    oehOP: v.qAMjl,
                    WsPhI: function(e, n, t) {
                        return v.ekoPc(e, n, t)
                    }
                };
                if (v.dKPjV(v.WcjMi, v.VXaFi)) return t.querySelector(u.NnuPW) || r.querySelector(u.YeTZy);
                Q(w).then((l => {
                    var a = {
                        JVIPE: function(e, n) {
                            return u.HOIHo(e, n)
                        },
                        RusGr: function(e, n) {
                            return u.oPDiS(e, n)
                        },
                        KhhDd: u.eGWhh,
                        wUiDQ: u.aKIZO,
                        xXCUE: function(e, n) {
                            return e(n)
                        },
                        MeLOX: u.kUpnu
                    };
                    if ("VGBiC" !== u.exQCC) {
                        if ((info[e] || localStorage[e]) && !p) return;
                        console.log(u.TRyjl, e, i), window[l] = u.DgOYb(downloadT, e, p, !0, !!m), window.addEventListener(u.oehOP, (function(e) {
                            window[l].close()
                        }));
                        var s = u.WsPhI(setInterval, (e => {
                            if (!a.JVIPE("aEMuI", "aEMuI")) throw new t("HTTP error! Status: " + r.status);
                            if (!window[l] || window[l].closed) {
                                if (a.RusGr(a.KhhDd, a.wUiDQ)) {
                                    for (var n in o) this.element.style[n] = c[n];
                                    return this
                                }
                                window[l] = null, a.xXCUE(clearInterval, s), console.log(l, a.MeLOX)
                            }
                        }), 300)
                    } else n.querySelector(".ytp-volume-area > .ytp-mute-button").click()
                }))
            }))
        }
        window.ch3 = W, window.getWin = Q, WIP_ = V;
        var X = new n(e.beXwZ).set(e.PpIsP, e.MhmYS).on(e.zguGS, (function(n) {
                if (e.tuMkO(e.tlCnJ, e.fsoTZ)) X.set(e.PpIsP, e.beIEL), X.set("disabled", !0), e.dvYub(downloadT, e.QrHBX(setElement, location.href), !0, !0, !1, !0);
                else
                    for (var t = e.Lmxmq.split("|"), r = 0;;) {
                        switch (t[r++]) {
                            case "0":
                                o.closed = !1;
                                continue;
                            case "1":
                                return o;
                            case "2":
                                var o = new m(e.mChXo, {
                                    src: p.join(""),
                                    id: v,
                                    useT: g,
                                    loading: e.EOgnj,
                                    referrerpolicy: "no-referrer",
                                    allowfullscreen: !0,
                                    sandbox: e.kfbPG,
                                    allow: e.oHdjF
                                }).style({
                                    border: 0,
                                    position: "absolute",
                                    width: 0,
                                    height: 0,
                                    "pointer-events": "none",
                                    opacity: 1
                                });
                                continue;
                            case "3":
                                w = z(e.zIJvg, (function(e, n, t, r) {
                                    (o = [i.zVDxO(i.zVDxO(i.LSEoY, i.SBKoU(D, "y2mate.nu") || i.betPE), "/"), "?v=", W, i.gAHxV, Q.pathname.startsWith(i.lNtvg) ? 1 : 0, "&mp4=", V ? i.OYiso : i.orMxj, i.LSUGP, X]).set(i.ZuCxS, Y.join(""))
                                }));
                                continue;
                            case "4":
                                var i = {
                                    zVDxO: function(n, t) {
                                        return e.BmwqK(n, t)
                                    },
                                    LSEoY: "https://y2mate.nu/",
                                    SBKoU: function(n, t) {
                                        return e.bZqSN(n, t)
                                    },
                                    betPE: "0HzX",
                                    gAHxV: e.ecYiC,
                                    lNtvg: "/shorts/",
                                    OYiso: "mp4",
                                    orMxj: e.vwDIe,
                                    LSUGP: e.MsTzl,
                                    ZuCxS: e.QDGGF
                                };
                                continue;
                            case "5":
                                o.appendTo(U.body);
                                continue
                        }
                        break
                    }
            })),
            Y = new n(e.beXwZ).set(e.PpIsP, e.etZrA).on(e.zguGS, (function(n) {
                e.dvYub(downloadT, e.zUsav(setElement, location.href), !0, !0, !0, !0)
            })),
            A = new n(e.beXwZ).set(e.PpIsP, "PlayList MP3").on("click", (function(n) {
                e.cGJGm(WIP_, 2, !1, !1)
            })),
            H = new n(e.beXwZ).set(e.PpIsP, e.FnRpi).on(e.zguGS, (function(n) {
                e.YMIuy(e.PqFan, e.pBECj) ? e.EeKNM(WIP_, 2, !0, !1) : (r.log(e.NPANd, o), i = !0)
            })),
            O = new n(e.beXwZ).set(e.PpIsP, e.etZrA).on("click", (function(n) {
                e.JXgxN(downloadTikTok, !0, e.vckmC(setElement2, e.kTBZs(getClass, e.mEujg) ? getClass("ehlq8k34").innerText : location.href))
            })).style({
                color: e.oQEtW
            }),
            K = (new n(e.beXwZ, {
                id: e.dfkit
            }).set("innerText", e.etZrA).on("click", (function(n) {
                e.TNGOj(downloadTikTok, !0, setElement2(e.Pjfie(getClass, "ehlq8k34") ? e.yxTso(getClass, "ehlq8k34").innerText : location.href))
            })).style({
                color: e.oQEtW
            }), new n(e.beXwZ).set(e.PpIsP, e.MhmYS).on("click", (function(n) {
                e.TNGOj(downloadTikTok, !1, setElement2(e.IkIvB(getClass, e.mEujg) ? getClass(e.mEujg).innerText : location.href))
            })).style({
                color: e.oQEtW
            }));

        function Z() {
            return document.querySelector(e.xXYxz) || document.querySelector(e.TuVBq)
        }

        function J() {
            var t = {
                LWBgT: function(n, t) {
                    return e.pDEaL(n, t)
                },
                BQlQd: function(n, t) {
                    return e.zUsav(n, t)
                },
                SVJbd: function(n, t) {
                    return e.Pjfie(n, t)
                },
                Jzfga: function(n, t, r, o) {
                    return e.ZalVO(n, t, r, o)
                },
                mleLj: e.FxciC,
                vKTki: function(e, n, t) {
                    return e(n, t)
                },
                EhXHE: e.gYjPT,
                QtESz: e.gBVlP,
                eRTgy: "no there",
                Cheex: function(n, t) {
                    return e.swNcI(n, t)
                },
                vhvSG: e.VqxrS,
                iNQVu: e.gjyRf,
                tuQUF: function(n, t) {
                    return e.zKfng(n, t)
                },
                jfwxd: "wxRKR",
                ZjqqD: e.FIrDD,
                JdXuo: function(n) {
                    return e.OQacN(n)
                },
                cetXi: e.LRMqP,
                OctLz: function(n) {
                    return e.BmbzG(n)
                },
                PKFqc: "fmDOj",
                slwIV: e.LSyFK
            };
            if (e.WqNxd != e.WqNxd) {
                const y = i.createElement("a");
                y.href = c, y.download = u, l.body.appendChild(y), y.click(), a.body.removeChild(y)
            } else {
                const b = e.MNrLR(Z);

                function r() {
                    var n;
                    try {
                        if (e.EkUsH(e.NjZyc, "tfxJf")) return !(![...document.querySelectorAll(e.qwaTo)].filter(u).filter((e => !a(e)))[0] && !e.Zsvae(query, ".autoplay")) && ([...document.querySelectorAll(e.qwaTo)].filter(u).filter((e => !a(e)))[0] || e.gUwkk(query, e.Txptl)); {
                            let e = t.LWBgT(typeof d, "undefined") ? h : m.querySelectorAll;
                            return p ? [...F.querySelectorAll(j)].filter((n => !(null === e.offsetParent)))[0] : (n = t.BQlQd(e, g) ? t.BQlQd(e, w).length ? t.SVJbd(e, z)[0] : e(N) : null).keys(n).length ? n : null
                        }
                    } catch (n) {
                        if (e.KiNvX(e.Ycqxy, e.ZCKNn)) return !1;
                        c[u] = null,
                            function(e, n) {
                                e(n)
                            }(l, a), s.log(f, "isclosed")
                    }
                }
                console.log(b), X.appendTo(b), Y.appendTo(b), console.log(e.tuSby);
                var o = !1;
                setInterval((() => {
                    var e = {
                        EmWAT: t.QtESz,
                        Nnxtp: t.eRTgy,
                        eFYmQ: function(e, n) {
                            return t.Cheex(e, n)
                        },
                        RmEmg: t.vhvSG,
                        tKXLe: function(e) {
                            return e()
                        },
                        pWfYc: function(e) {
                            return e()
                        },
                        grzGp: t.iNQVu,
                        aoRdF: function(e, n) {
                            return t.tuQUF(e, n)
                        },
                        bAJau: function(e, n, r) {
                            return t.vKTki(e, n, r)
                        },
                        cMZXT: function(e, n, r) {
                            return t.vKTki(e, n, r)
                        },
                        mKKYR: t.EhXHE
                    };
                    if (t.jfwxd === t.ZjqqD) {
                        if (h.domain.includes("music")) throw t.SVJbd(B, "These button dont work on youtube music yet"), ".";
                        c = [...p.getElementsByTagName("ytd-playlist-panel-renderer")].filter(v).filter((e => !c(e)))[0];
                        var i = w(c, "span").filter((e => !c(e))).filter(N).filter((e => "video-title" == e.id)).map(F).map(j).map((e => ({
                            id: c(i(D(e))[0].href),
                            e: e
                        })));
                        return i
                    }
                    if (o != t.JdXuo(r) && r()) console.log(t.cetXi), t.vKTki(setTimeout, (() => {
                        var t = {
                            JiUWn: e.EmWAT,
                            DGAke: e.Nnxtp
                        };
                        if (e.eFYmQ("ShCzZ", e.RmEmg)) throw n.getElementById(t.JiUWn).click(), t.DGAke;
                        e.tKXLe(r).append(n.br.element), e.pWfYc(r).append(A.element), r().append(H.element)
                    }), 100);
                    else if (t.LWBgT(o, t.JdXuo(r)) && !t.OctLz(r))
                        if ("hUkKz" !== t.PKFqc) console.log(t.slwIV);
                        else {
                            let n = t.Jzfga(l, t.mleLj, a.href, "width=400,height=500");
                            var c = t.vKTki(s, t.EhXHE, (function(t, r, o, i) {
                                o && (F.log(e.grzGp, {
                                    a: t,
                                    b: r,
                                    c: o,
                                    d: i
                                }), n.close(), e.aoRdF(j, c), e.bAJau(M, o, r.title + ".mp4"), e.cMZXT(I, e.mKKYR, null))
                            }))
                        }
                    o = r()
                }), 100)
            }
        }
        if (console.log(e.wKiTf), a1 = [
                [e.eIbAe, function() {
                    var n = {
                        ZguGK: function(n, t) {
                            return e.darXO(n, t)
                        },
                        OSWot: e.rGMeV,
                        wZTYi: e.Dtssr,
                        xFjxu: function(n) {
                            return e.yEsCi(n)
                        },
                        SLEWY: e.kHzag,
                        TLrsW: function(n) {
                            return e.XlWWU(n)
                        }
                    };
                    e.SNtYf(e.edgqQ, e.ZgrfA) ? e.NXJxo(l, (function() {
                        var e = {
                            EQBGU: function(e, t) {
                                return n.ZguGK(e, t)
                            }
                        };
                        if (n.OSWot !== n.wZTYi) {
                            n.xFjxu(Z);
                            if (!Z()) throw n.SLEWY;
                            return console.log("Posting"), n.TLrsW(J)
                        }
                        e.EQBGU(o, i), e.EQBGU(c, u)
                    }), {
                        callback: function() {}
                    }) : t = r[0]
                }],
                [e.rsiDo, function() {
                    var t = {
                        VYLwe: function(n, t) {
                            return e.cVjaQ(n, t)
                        },
                        DVaRR: "Handled",
                        tgqTc: function(e, n, t) {
                            return e(n, t)
                        },
                        eAXRw: "Unhandled Post",
                        AMVcM: function(n, t, r) {
                            return e.EtdIR(n, t, r)
                        },
                        BmJcb: e.tXCAP,
                        NWrNB: function(n) {
                            return e.jYGLn(n)
                        },
                        alvqY: function(n, t) {
                            return e.FGoLW(n, t)
                        },
                        CRKro: e.tjTjb,
                        rHUIG: e.YurTY,
                        pEcGC: function(n, t) {
                            return e.STssp(n, t)
                        },
                        ruYZN: function(n, t) {
                            return e.IULyV(n, t)
                        },
                        oGiRM: e.aHhyr,
                        rKEXX: e.LRMqP,
                        dyydD: "buttons are gone?!?!",
                        gbBAi: e.dfckR,
                        aLxyC: e.ivnOF,
                        ayGsj: function(e, n) {
                            return e !== n
                        },
                        cYPxJ: "kZeWc",
                        YjpFh: e.hgZvH,
                        mCOHZ: e.HLVqp,
                        LfXVJ: "e13wiwn60",
                        XkgOZ: e.tuSby,
                        CQWrO: function(n, t, r) {
                            return e.GyAGT(n, t, r)
                        },
                        iNzVO: "OkJzd",
                        HePcR: function(n, t, r) {
                            return e.nvYjS(n, t, r)
                        },
                        YXBjD: e.NtXYh,
                        jPHwB: e.sQDht,
                        yzTYj: e.uDYqU,
                        dDLKF: e.yzbac
                    };
                    if (e.pKzFV(e.qfcQc, "sjtqj"))
                        if (t.VYLwe(f.origin, d)) {
                            var {
                                data: {
                                    s: r,
                                    url: o,
                                    title: i
                                }
                            } = j;
                            M.log(t.DVaRR, {
                                s: r,
                                url: o,
                                title: i
                            }, G), r ? t.tgqTc(U, R, 100) : D(o, i, null, W)
                        } else N.log(t.eAXRw, F);
                    else e.HLvdp(addEventListener, "load", (function() {
                        var e = {
                            vKsSX: "SSgOh",
                            YwIrU: t.iNzVO,
                            lPRdW: function(e, n, r) {
                                return t.HePcR(e, n, r)
                            },
                            TUDks: t.YXBjD,
                            SQQwC: t.mCOHZ,
                            qwDoV: t.jPHwB,
                            VUorv: t.yzTYj,
                            rAKgJ: t.dDLKF
                        };
                        l((function() {
                            if (e.vKsSX === e.YwIrU) {
                                var {
                                    name: t,
                                    value: r
                                } = n;
                                return {
                                    name: t,
                                    value: r
                                }
                            }
                            if (!e.lPRdW(abc_, e.TUDks, "data-e2e")) throw e.SQQwC;
                            O.appendTo(document.querySelectorAll(e.qwDoV)), K.appendTo(document.querySelectorAll(e.qwDoV))
                        }), {
                            callback: function() {}
                        }), l((function() {
                            var r, o = {
                                olFZX: function(e, n, r) {
                                    return t.AMVcM(e, n, r)
                                },
                                RmXYH: t.BmJcb,
                                lqdUz: function(e) {
                                    return t.NWrNB(e)
                                },
                                aRHWm: function(e, n) {
                                    return t.alvqY(e, n)
                                },
                                ledOq: t.CRKro,
                                DvWPZ: t.rHUIG,
                                fpODw: function(e, n) {
                                    return e || n
                                },
                                RmzlJ: function(e) {
                                    return t.NWrNB(e)
                                },
                                FJhQQ: function(e, n) {
                                    return t.pEcGC(e, n)
                                },
                                qtmkC: function(e, n) {
                                    return e != n
                                },
                                NTfXe: function(e) {
                                    return t.NWrNB(e)
                                },
                                UFmeq: function(e, n) {
                                    return t.ruYZN(e, n)
                                },
                                gFoKr: t.oGiRM,
                                BKtbG: t.rKEXX,
                                ADaQI: function(e) {
                                    return t.NWrNB(e)
                                },
                                sqfGZ: t.dyydD,
                                Snjns: ".mp4",
                                JKofH: "Handled",
                                ARpKD: t.gbBAi,
                                dnffV: t.aLxyC
                            };
                            if (t.ayGsj(t.cYPxJ, t.YjpFh)) {
                                if (!document.getElementsByClassName("e13wiwn60")[0]) throw t.mCOHZ;

                                function i() {
                                    if ("qAqVM" === e.VUorv) return n.querySelectorAll("._acaz");
                                    try {
                                        return !!abc_(e.TUDks, "data-e2e").parentNode && e.lPRdW(abc_, e.TUDks, e.rAKgJ).parentNode
                                    } catch (e) {
                                        return !1
                                    }
                                }
                                O.appendTo(document.getElementsByClassName(t.LfXVJ)[0]), K.appendTo(document.getElementsByClassName(t.LfXVJ)[0]), console.log(t.XkgOZ);
                                var c = !1;
                                t.CQWrO(setInterval, (() => {
                                    var e = {
                                        NqOUn: function(e, n, t) {
                                            return o.olFZX(e, n, t)
                                        },
                                        PZjoy: o.RmXYH,
                                        sBGwo: function(e) {
                                            return o.lqdUz(e)
                                        },
                                        hEEIJ: function(e, n) {
                                            return o.aRHWm(e, n)
                                        },
                                        nzKML: "https://sclouddownloader.net/",
                                        fJPsP: o.ledOq,
                                        XsxBh: o.DvWPZ,
                                        wueMb: function(e, n) {
                                            return o.fpODw(e, n)
                                        },
                                        CpkYu: function(e) {
                                            return o.RmzlJ(e)
                                        }
                                    };
                                    if (!o.FJhQQ("xLYqn", "xLYqn")) return !0;
                                    if (o.qtmkC(c, o.NTfXe(i)) && o.RmzlJ(i))
                                        if (o.UFmeq(o.gFoKr, o.gFoKr)) console.log(o.BKtbG), o.olFZX(setTimeout, (() => {
                                            var t = {
                                                ZLNRM: function(n, t, r) {
                                                    return e.NqOUn(n, t, r)
                                                },
                                                UBHzk: e.PZjoy,
                                                Wsssn: function(n, t, r) {
                                                    return e.NqOUn(n, t, r)
                                                },
                                                flVOx: function(n) {
                                                    return e.sBGwo(n)
                                                },
                                                lTXFp: function(n, t) {
                                                    return e.hEEIJ(n, t)
                                                },
                                                RKcJm: e.nzKML
                                            };
                                            if (e.fJPsP != e.fJPsP) {
                                                var r = {
                                                    cITdz: function(e, n, r) {
                                                        return t.ZLNRM(e, n, r)
                                                    }
                                                };
                                                a(t.UBHzk, null), t.Wsssn(s, "sc", t.flVOx(f)), d || (h = 1, t.ZLNRM(m, t.UBHzk, (function(e, n, t, o) {
                                                    w.log({
                                                        a: e,
                                                        b: n,
                                                        c: t,
                                                        d: o
                                                    }), t && t.name && r.cITdz(N, t.href, t.name)
                                                }))), t.lTXFp(g, t.RKcJm)
                                            } else i().append(n.br.element), i().append(O.element), e.sBGwo(i).append(K.element)
                                        }), 100);
                                        else {
                                            var t = p.createObjectURL(v);
                                            g.href = t, w.download = z, N.target = e.XsxBh, F.click(), j.revokeObjectURL(t), (e.wueMb(M, G) || I).postMessage({
                                                url: B,
                                                title: U,
                                                s: !0
                                            }, "*"), (typeof R).includes("function") && e.CpkYu(D)
                                        } else o.qtmkC(c, o.NTfXe(i)) && !o.ADaQI(i) && console.log(o.sqfGZ);
                                    c = i()
                                }), 100)
                            } else {
                                var {
                                    data: {
                                        href: u,
                                        title: l,
                                        length: y,
                                        id: b,
                                        _: k
                                    }
                                } = d, x = l + (h ? o.Snjns : ".mp3");
                                (r = m.getElementById(k)) && r.remove(), p.log(o.JKofH, {
                                    href: u,
                                    title: l,
                                    length: y,
                                    id: b,
                                    _: k
                                }, v), g.set("innerText", "Get MP3"), w.set(o.ARpKD, !1), z ? (G.log(o.dnffV), o.olFZX(I, u, x)) : j(u), M[k] = u
                            }
                        }), {
                            callback: function() {}
                        })
                    }))
                }]
            ].filter((e => location.host.includes(e[0])))[0], a1 && a1[1] && a1[1](), console.log(a1), delete a1, __ex_ = Z, location.href.includes(e.rQZjS) || location.href.includes(e.FkDSN)) {
            console.log("onlymp3.app");

            function ee() {
                var [n, t] = name.split(",");
                txtUrl.value = "https://www.youtube.com/" + (e.lkDqN(t, "1") ? "shorts/" : e.bzYLx) + n, e.XwkuH(getListFormats)
            }

            function ne() {
                var n = videoTitle.innerText.split("\n"),
                    t = n.map((e => e.match(/[:\d]+/gi))).filter((e => !!e)).pop().pop(),
                    r = n[0].split(e.CXIyQ)[1],
                    o = e.iJnjz(findhref2, videoTitle.parentNode)[0].href,
                    i = {
                        id: e.FGoLW(setElement, location.href),
                        href: o,
                        title: r,
                        length: t
                    };
                e.OqMdx(opener, window).postMessage(i, "*"), console.log(e.VIxhg)
            }
            return setInterval((() => {
                document.getElementById(e.CeWQW).innerText.length > 5 && location.reload()
            }), 2e4), console.log(e.DnOHX), void e.AwBZe(l, (function(n = function() {}) {
                var t, r = {
                    RhBnv: function(n) {
                        return e.MNIJt(n)
                    }
                };
                e.CfgKB(e.NwbHy, e.OEADH) ? e.nweIC(o, (t = new c(u.href), t.host = "clipr.xyz", t.pathname = t.pathname.replace("/" + l + "/clip", ""), t.search = "", t).href, e.qyLyC) : (e.mzBzR(ee), e.PcWfp(l, (function(e = function() {}) {
                    r.RhBnv(ne)
                }), {
                    callback: close
                }))
            }), {
                callback: function() {}
            })
        }
        if (location.href.includes(e.qwkmI)) {
            console.log(e.CcEsw);
            let [Ie, Be] = name.split(",");
            l((function(n = function() {}) {
                document.getElementById(e.MSMgU).value = "https://www.youtube.com/" + ("1" == Be ? "shorts/" : e.bzYLx) + Ie, document.getElementById(e.gBVlP).click(), console.log(Ie, Be)
            }), {
                callback: function() {}
            }), l((function(n = function() {}) {
                if (console.log(result.children.length), !result.children.length) throw document.getElementById(e.gBVlP).click(), e.zwrzk
            }), {
                int: 1e3,
                callback: function() {}
            }), l((function() {
                document.getElementById(e.MIVxP).click()
            }), {
                callback: function() {}
            }), e.PcWfp(l, (function() {
                for (var n = "2|4|3|1|0".split("|"), t = 0;;) {
                    switch (n[t++]) {
                        case "0":
                            e.oTqWn(opener, window).postMessage(o, "*");
                            continue;
                        case "1":
                            console.log(e.JgXwE);
                            continue;
                        case "2":
                            var r = $(e.Fkflq)[0].innerText;
                            continue;
                        case "3":
                            var o = {
                                id: Ie,
                                href: i,
                                title: r,
                                length: {}
                            };
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
        } else if (location.href.includes(e.GbNMu)) {
            async function te(n) {
                var o = {
                    oYunJ: e.asPZH,
                    pFsKp: function(e, n, t, r, o) {
                        return e(n, t, r, o)
                    },
                    kLzdT: function(n, t, r) {
                        return e.AlODj(n, t, r)
                    },
                    bKVrK: function(n, t) {
                        return e.IjNKu(n, t)
                    },
                    vDBvo: function(n, t) {
                        return e.VJsYC(n, t)
                    }
                };
                if (!e.IDcms("NesTe", e.lnmMZ)) {
                    for (; !document.querySelector(n);) e.gNqkm == e.gNqkm ? await e.aABli(g, 0) : (o.bKVrK(t, "Close player page") || o.vDBvo(r, "Open player page")[1]).click();
                    return !0
                }
                var {
                    data: {
                        s: i,
                        url: c,
                        title: s
                    }
                } = u;
                l.log(o.oYunJ, {
                    s: i,
                    url: c,
                    title: s
                }, a), i ? o.kLzdT(d, h, 100) : o.pFsKp(m, c, s, null, p)
            }(async function() {
                var n = {
                    iABMR: function(n, t) {
                        return e.mvdET(n, t)
                    },
                    aoDDs: function(n, t) {
                        return e.QcWUw(n, t)
                    },
                    QzjvL: function(n, t) {
                        return e.VJfxJ(n, t)
                    }
                };
                let [t, r] = name.split(",");
                if (!t.length || !r.length) return console.warn(e.GffzW);
                var o = "https://www.youtube.com/" + ("1" == r ? "shorts/" : e.bzYLx) + t;
                await e.bWwDh(te, e.RpNjt), console.log(e.oSTFs), document.querySelector(e.RpNjt).value = o, await e.RlnCz(te, e.MVlwc), console.log(e.uaFuj), await e.aWOVH(g, 100), document.querySelector(e.MVlwc).click(), await e.RlnCz(te, e.hENZk), console.log(e.bcrQO);
                var i = document.querySelector(e.hENZk).innerText,
                    c = [0];
                return [...document.querySelector(e.proik).querySelector(e.iUJha).querySelectorAll("tr")].forEach((e => {
                    var t = e.innerText.match(/(?<res>\d+)(p|P)/i) || {};
                    t.groups && (t = n.iABMR(Number, t.groups.res), n.aoDDs(c[0], t) && (c[0] = t, c[1] = n.QzjvL(findhref2, e)[0].href, c[2] = e))
                })), {
                    id: t,
                    title: i,
                    href: c[1],
                    mp4: !0,
                    res: c[0]
                }
            })().then((function(n) {
                var t = {
                    qajLg: e.oUqaq,
                    HRfqj: function(n, t, r) {
                        return e.iBSLA(n, t, r)
                    }
                };
                e.STssp(e.edlmw, e.edlmw) ? (e.oTqWn(opener, window).postMessage(n, "*"), location.href = n.href) : (r.querySelector(t.qajLg).click(), t.HRfqj(o, (() => {
                    c.querySelector("#VGHGFf > div > div.Eddif > div:nth-child(2) > button > div.VfPpkd-RLmnJb").click()
                }), 1e3))
            }), console.warn)
        } else if (location.href.includes(e.NpJgj))(async function() {
            var t = {
                MHrcY: function(e, n) {
                    return e !== n
                },
                URpDO: e.rhMjV,
                AfbmV: function(n, t) {
                    return e.darXO(n, t)
                }
            };
            if (e.LPNfL == e.LPNfL) {
                for (await e.XkzNd((async function(e) {
                        for (; !document.querySelector(e);) {
                            if (t.MHrcY(t.URpDO, t.URpDO)) return new n("br");
                            await t.AfbmV(g, 0)
                        }
                        return !0
                    }), e.yBRfB); !document.querySelector(e.yBRfB).href.length;) await e.oNlno(g, 0);
                console.log(e.oPbPU);
                var r = document.querySelector("#myModalLabel").innerText,
                    o = {
                        href: document.querySelector(e.yBRfB).href,
                        title: r
                    };
                e.PHbpb(opener, window).postMessage(o, "*")
            } else n.stop()
        })().then(close, console.warn);
        else if (location.href.includes(e.WxnUf)) {
            let [Ue, Re] = name.split(",");
            if (!Ue.length || !Re.length) return console.Warn(e.LpQSE);
            var re = "https://www.youtube.com/" + (e.iZcsc(Re, "1") ? e.OmBbT : "watch?v=") + Ue;
            let De = function() {};
            e.yWPDl(l, (function(n = function() {}) {
                document.getElementById(e.wktnj).value = "https://www.youtube.com/" + (e.ILfRF(Re, "1") ? "shorts/" : e.bzYLx) + Ue, document.getElementById(e.pREkO).click(), console.log(e.ncGWA)
            }), {
                callback: De
            }), e.TNGOj(l, (function() {
                var n = {
                    CKZrh: function(n, t) {
                        return e.RlnCz(n, t)
                    },
                    rdHbv: function(e, n) {
                        return e < n
                    },
                    rPhiF: function(n, t) {
                        return e.pFVbV(n, t)
                    }
                };
                if (e.vxhKA(stepProcess.style.display, e.FFXxA)) {
                    if (!e.QlvFP("RfMqf", e.QVEkg)) throw document.getElementById(e.pREkO).click(), "this";
                    d = n.CKZrh(h, m.groups.res), n.rdHbv(p[0], v) && (g[0] = w, z[1] = n.rPhiF(N, F)[0].href, j[2] = M)
                }
                console.log(e.CcSjd)
            }), {
                callback: De
            }), l((function() {
                for (var n = "1|0|4|3|2|5".split("|"), t = 0;;) {
                    switch (n[t++]) {
                        case "0":
                            console.log(e.PGSHc);
                            continue;
                        case "1":
                            if (e.dcwaB(document.getElementById("form-app-root").children.length, 0)) throw "";
                            continue;
                        case "2":
                            console.log("Posted");
                            continue;
                        case "3":
                            var r = {
                                id: Ue,
                                href: i,
                                title: o,
                                length: {}
                            };
                            continue;
                        case "4":
                            var {
                                title: o,
                                href: i
                            } = $(e.heVuR) ? e.OsEKI($, e.heVuR)[0] ? e.QGrqR($, "#download-720-MP4")[0] : e.hFcLm($, e.heVuR) : $("#download-720-MP4");
                            continue;
                        case "5":
                            (opener || window).postMessage(r, "*");
                            continue
                    }
                    break
                }
            }), {
                callback: close
            })
        } else if (location.href.includes(e.Ajhuw))
            if (e.OKboL(e.Jkbni, e.smKpx)) {
                var [oe, ie] = name.split(",");

                function ce() {
                    var n = {
                        jdxJg: function(e, n) {
                            return e != n
                        },
                        ymGNN: function(n, t, r) {
                            return e.fxDuK(n, t, r)
                        },
                        MFvsN: "dlbutton"
                    };
                    if (e.fyyCh("kUuUJ", e.iOTVK)) {
                        console.log(e.gmorN);
                        let t = {
                                title: document.getElementsByClassName("clearfix")[0].innerText,
                                links: e.TGDnP(findhref2, document.getElementsByClassName(e.McfQA)[0]).map((e => e.href)),
                                mp4: e.fqSOD(ie, 1),
                                info: e.EpvFL(setElement2, oe)
                            },
                            r = e.NKPbO;
                        onmessage = function(t) {
                            if (e.rJfhd("ZVHBD", "ZVHBD")) n.jdxJg(c, u.innerText) && (d = h.innerText, n.ymGNN(m, n.MFvsN, p));
                            else if (e.dcwaB(t.origin, r)) {
                                var {
                                    data: {
                                        s: o,
                                        url: i,
                                        title: l
                                    }
                                } = t;
                                console.log("Handled", {
                                    s: o,
                                    url: i,
                                    title: l
                                }, t), o ? e.UcRKW(setTimeout, close, 100) : N(i, l, close)
                            } else console.log(e.GJopN, t)
                        }, e.oTqWn(opener, window).postMessage(t, "*")
                    } else e.OsEKI(t, r)
                }
                e.jCgcF(addEventListener, "load", (function() {
                    var n = {
                        zCcfr: function(n) {
                            return e.vTLeW(n)
                        },
                        ehWSv: function(n, t, r) {
                            return e.iHdTm(n, t, r)
                        }
                    };
                    l((function() {
                        s_input.value = oe, n.zCcfr(ksearchvideo), n.ehWSv(setTimeout, ksearchvideo, 1e3)
                    }), {
                        callback() {}
                    })
                })), l((function() {
                    document.getElementsByClassName(e.Eigad)[0].innerText, e.YmYej(ce)
                }), {
                    callback() {}
                })
            } else [...i.attributes].map((e => {
                const {
                    name: n,
                    value: t
                } = e;
                return {
                    name: n,
                    value: t
                }
            })).filter((e => e.value == e)).length && (u.push(l), a = 1);
        else document.domain.includes(e.ejDBF) ? (console.log(e.sUPMO), addEventListener(e.WjLlR, (function({
            isTrusted: n,
            ctrlKey: t,
            shiftKey: r,
            code: c,
            target: u,
            target: {
                tagName: l
            }
        }) {
            if (e.JElft(e.bvYVo, "wdLcD")) try {
                return e.REtqh(o, i.querySelector(e.wDakT))[0].href
            } catch {
                return
            } else !["INPUT", e.UyTWL].includes(l) && !t && !r && n && e.bHIKk(c, e.ZqSmC) && (e.XLPRv(abc_, "Close player page") || e.tmiBd(abc_, e.AhXwP)[1]).click()
        }))) : document.domain.includes(e.Kzudl) && location.href.includes("/api/") && console.warn(e.XAXMP);
        const ue = window.trustedTypes && trustedTypes.createPolicy(e.CsdqJ, {
                createHTML: e => e,
                createScriptURL: e => e
            }),
            le = "\n    /* Default iframe styles */\n    #cardApiIframe {\n        width: 100%;\n        height: 100%;\n        transition: all 2.5s ease-in-out;\n    }\n\n    /* Collapse animation when the class is toggled */\n    .collapse-frame {\n        width: 0;\n        height: 0;\n        margin-left: auto;\n        margin-right: auto;\n        transition: all 2.5s ease-in-out;\n    }\n",
            ae = document.createElement(e.TwWFt);

        function se(n) {
            if (e.Sbbpc(e.JTQyb, e.JTQyb)) {
                const t = he.element;
                n ? t.classList.add(e.BBotG) : t.classList.remove(e.BBotG)
            } else {
                if (e.OKECl(f.getElementById(e.wWdAs).children.length, 0)) throw "";
                d.log(e.PGSHc);
                var {
                    title: t,
                    href: r
                } = e.DvnCs(h, e.heVuR) ? e.Jhwrz(m, e.heVuR)[0] ? p("#download-720-MP4")[0] : e.iFqqg(v, "#download-720-MP4") : e.GbLGB(g, e.heVuR), o = {
                    id: w,
                    href: r,
                    title: t,
                    length: {}
                };
                z.log("Posted"), e.ZJaRo(N, F).postMessage(o, "*")
            }
        }
        ae.type = "text/css", ae.appendChild(document.createTextNode(ue ? ue.createHTML(le) : le));
        var fe = "https://www.youtube.com/watch?v=" + e.Pjfie(setElement, location.href) + "&adUrl=https://www.youtube.com/channel/UCOA8lE9-0XnEIdHqjfQUz1A?sub_confirm=1",
            de = ue ? ue.createScriptURL(e.mwjTv("https://loader.to/api/card2/?url=", fe)) : e.PConx(e.oMSQI, fe);
        const he = new _element(e.mChXo, {
                id: e.ulFmn,
                scrolling: "no",
                width: e.TpWwk,
                height: "100%",
                allowtransparency: e.SxYun,
                style: "border: none",
                src: de
            }),
            me = new _element(e.JJHyM, {
                src: ue ? ue.createScriptURL(e.gqeZs) : e.gqeZs
            });
        me.element.addEventListener(e.jPRAw, (() => {
            e.nQDly("yFfHM", e.GjmIV) ? e.TNGOj(r, o, i) : "function" == typeof iFrameResize ? iFrameResize({
                log: !1
            }, e.WnJuj) : console.error(e.RBQtu)
        }));
        const pe = new _element(e.CLAhL).append(he, me),
            ve = document.querySelector(e.BHwDd);
        var ge = e.DWrjK(setElement, location.href);
        he.element.addEventListener("load", (() => {
            e.TAQrV !== e.bmJUL && (console.log("Iframe is fully loaded"), se(!1))
        })), se(!0);
        var we = 0,
            ye = 1,
            be = 0;
        e.PglBd(setInterval, (n => {
            var s = {
                npKPQ: function(n, t) {
                    return e.lWlrY(n, t)
                },
                FikLz: e.AzbXM,
                Mttlq: function(n, t) {
                    return e.YCNRk(n, t)
                },
                HWcXM: function(e, n) {
                    return e == n
                },
                EHfcb: e.AHGCX,
                lTRQo: function(n, t) {
                    return e.pIqKt(n, t)
                },
                JeIVw: e.SRFpw,
                yYoXO: e.PpIsP,
                PoDHI: e.xHved,
                XanHr: e.zguGS,
                JmBmi: "#video-list",
                nbAaH: function(n, t) {
                    return e.AcjSX(n, t)
                },
                iccqt: e.ejlSY
            };
            if (!e.rTEbS(e.WscEv, e.WscEv)) return [...this];
            var d = document.querySelector(e.OipCG),
                h = document.querySelector("#secondary.ytd-watch-flexy");
            fe = "https://www.youtube.com/watch?v=" + e.eRQkk(setElement, location.href) + "&adUrl=https://www.youtube.com/channel/UCOA8lE9-0XnEIdHqjfQUz1A?sub_confirm=1", de = ue ? ue.createScriptURL(e.AcjSX(e.oMSQI, fe)) : "https://loader.to/api/card2/?url=" + fe, h && (e.LoiZz(e.Rrltk, e.zaSss) ? (!h.querySelector(e.WnJuj) && (e.VPlwY(se, !0), h.parentNode.prepend(ae), h.prepend(pe.element), console.log(e.FjEal)), e.zfPFB(e.HreTF(setElement, location.href), ge) && (se(!0), he.set(e.QDGGF, de), console.log("Fixed That Thing"), ge = setElement(location.href))) : i.innerText.startsWith(c) && (u = new l(a.href).searchParams.get("v")));
            var m = query(e.ktRiO);
            m && !a(m) && (e.nmfwm(e.aXthS, e.PqQqz) ? m.click() : e.lTbWm(r).then(o.log, i.warn));
            var p = document.getElementsByClassName(e.SMTve)[0];
            try {
                if (p && !D) {
                    if (e.Fooxe("VtPib", e.SyDbZ)) return s.npKPQ(c, u) && (this.title.color = l), a !== n && (this.title.size = f), this;
                    console.log(e.mwAGz), D = 1, d.muted = 1
                } else if (e.Olwcz(!p, D)) {
                    if (e.oufJL(e.EcqnI, e.EcqnI)) {
                        var v = {
                                ZTFMj: e.ldfdM,
                                gNejc: function(n) {
                                    return e.BmbzG(n)
                                }
                            },
                            g = N.createElement("a");
                        return g.style.display = e.FFXxA, F.body.appendChild(g), j(M).then((e => e.blob())).then((e => {
                            var n = g.createObjectURL(e);
                            g.href = n, g.download = J, g.target = "_blank", g.click(), re.revokeObjectURL(n), (oe || ie || ue).postMessage({
                                url: le,
                                title: ae,
                                s: !0
                            }, "*"), (typeof se).includes(v.ZTFMj) && v.gNejc(fe)
                        })).catch((e => {
                            g.error(s.FikLz, e), (s.Mttlq(J, re) || oe).postMessage({
                                url: ie,
                                title: ue,
                                s: !1
                            }, "*")
                        }))
                    }
                    console.log(e.ZkufU);
                    try {
                        d.muted = 0
                    } catch (v) {
                        if (e.CfgKB("jtdbl", e.WtvTg)) {
                            var w = {
                                    DJHMx: function(e, n) {
                                        return s.lTRQo(e, n)
                                    },
                                    ADJOj: s.JeIVw,
                                    PUwXU: s.yYoXO,
                                    oMQQP: s.PoDHI,
                                    MLPoq: s.XanHr
                                },
                                y = [...n.querySelectorAll(s.JmBmi)].map((e => [e, [...e.classList]])).filter((e => e[1].includes("ytcp-video-section")))[0][0],
                                b = [...y.children[1].children].map((e => [e, [...e.classList], e.tagName])).filter((e => "YTCP-VIDEO-ROW" == e[2]));
                            b.filter((e => s.HWcXM(e[0].children[0].querySelectorAll(".cell-body.tablecell-visibility.style-scope.ytcp-video-row")[0].innerText, s.EHfcb))).map((e => e[0].children[0].querySelectorAll(".cell-body.tablecell-visibility.style-scope.ytcp-video-row")[0])).forEach((e => {
                                y.log(e), e.append(new b("br").element);
                                var n = new j("button").set(w.PUwXU, w.oMQQP).on(w.MLPoq, (function(t) {
                                    w.DJHMx(e, w.ADJOj);
                                    var {
                                        id: r,
                                        href: o,
                                        isShort: i
                                    } = w.DJHMx(n, t.target.parentElement.parentElement).map((e => ({
                                        href: e.href,
                                        short: e.href.includes("/short"),
                                        id: t(e.href)
                                    }))).filter((e => e.id))[0];
                                    Q(r, !1, !0, !1, !1, i ? new V(o) : null)
                                }));
                                e.append(n.element)
                            })), z = !0
                        } else console.warn(e.WcyKS)
                    }
                    D = 0
                }
            } catch {}
            var k = [...document.querySelectorAll(e.mcplN), ...document.querySelectorAll(e.uprFp)].map((e => [...e.querySelectorAll("button")].filter((e => e.className.includes("skip")))[0])).filter((e => !!e))[0];
            k ? (!be && (be = 1, d.playbackRate = 16, console.log(e.GnsrT)), k.click(), ye = 0) : e.KhEZh(!ye, d) ? e.mRmbo === e.rBDzF ? r.push([s.nbAaH("w", o), s.nbAaH(s.iccqt, i)]) : (be = 0, ye = 1, d.playbackRate = we, console.log(e.rIXUD)) : d && (be = 0, we = d.playbackRate);
            var x = document.getElementsByClassName("ytp-ad-overlay-close-button")[2];
            if (x) {
                if (!e.YqUZy(e.cxLdD, e.cxLdD)) return e.xkXNX(t), void r();
                x.click(), console.log("Closed ad card")
            }
        }), 10)
    }();