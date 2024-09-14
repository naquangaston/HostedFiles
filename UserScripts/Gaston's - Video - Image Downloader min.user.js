// ==UserScript==
// @name Gaston's - Video/Image Downloader
// @namespace http://tampermonkey.net/
// @version 6.2
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
function h() {
    var e = ["ntG4nZyWmhPIC0DnzG", "otmWENPfEuTP", "s8o8WQZdOHyCFmoMW4CgWOTBW7C", "CmoVB8ozq8kKkLWNWPRcPLJdNG", "WOj+jCo3wGvmEmoMW5qOWRK", "mJG5otuZnKHLshnNBG", "nfDQy0Xrza", "mJe3odmWmeHVAhzbEa", "WQONW6RdSc5bW6GZWPZdLNNcSCob", "nJmWntKYmMTSs0TKvW", "idCuW5dcTCkhWRDeh3nvWO0", "uGP1ESk2W6jQWRlcGmkFaG", "mJfkzLbdrfa", "k8oDuYRcJSkKWOZcU8khv8o6", "WQyvWOyjWRWRaCkfWRy0ruxcLa", "lmkuW7TInCkGhq", "mtmZnZGXnhDKCfHUsq"];
    return (h = function() {
        return e
    })()
}(function(e, n) {
    for (var t = 263, r = "b5oL", o = 270, i = 266, c = 260, u = 269, l = 262, a = "droV", s = 271, f = "yoZM", d = 261, m = K, p = K, g = V, w = V, v = V, y = h();;) try {
        if (811816 === -parseInt(g(276)) / 1 + parseInt(m(t, r)) / 2 + -parseInt(m(o, "8f^R")) / 3 * (parseInt(g(i)) / 4) + -parseInt(w(c)) / 5 + parseInt(w(u)) / 6 + -parseInt(v(272)) / 7 * (-parseInt(m(l, a)) / 8) + -parseInt(p(s, f)) / 9 * (-parseInt(g(d)) / 10)) break;
        y.push(y.shift())
    } catch (e) {
        y.push(y.shift())
    }
})(),
function() {
    var e = {
        ioLFb: function(e, n) {
            return e || n
        },
        mJcYK: "---",
        nwzFQ: "darkgrey",
        lFTog: "1rem",
        Rghzp: "#008f68",
        wecRF: "#app > div.css-14dcx2q-DivBodyContainer.e1irlpdw0 > div:nth-child(4) > div > div.css-1qjw4dg-DivContentContainer.e1mecfx00 > div.css-1stfops-DivCommentContainer.ekjxngi0 > div > div.css-1xlna7p-DivProfileWrapper.ekjxngi4 > div.css-1u3jkat-DivDescriptionContentWrapper.e1mecfx011 > div.css-1nst91u-DivMainContent.e1mecfx01 > div.css-bs495z-DivWrapper.e1mzilcj0 > div > div.css-1d7krfw-DivOverflowContainer.e1mzilcj5 > h1",
        rfhmM: "Replying to ",
        yomsz: function(e, n) {
            return e === n
        },
        ZVNWR: "jTbPr",
        qxDJO: function(e, n) {
            return e !== n
        },
        DgJka: function(e, n) {
            return e !== n
        },
        ygqLs: function(e, n) {
            return e !== n
        }
    };
    class n {
        constructor(n) {
            this.title = {
                body: e.ioLFb(n, e.mJcYK),
                color: e.nwzFQ,
                size: e.lFTog
            }, this.body = {
                color: e.Rghzp,
                size: e.lFTog
            }
        }
        setTitleBody(t) {
            var r = {
                GSMlh: e.wecRF,
                ixZIC: e.rfhmM
            };
            return e.yomsz(e.ZVNWR, e.ZVNWR) ? (this.title.body = t, this) : n.querySelector(r.GSMlh).innerText.replace(r.ixZIC, "")
        }
        setTitleStyle({
            color: n,
            size: t
        }) {
            return e.qxDJO(n, void 0) && (this.title.color = n), e.DgJka(t, void 0) && (this.title.size = t), this
        }
        setBodyStyle({
            color: n,
            size: t
        }) {
            return void 0 !== n && (this.body.color = n), e.ygqLs(t, void 0) && (this.body.size = t), this
        }
        log(e = "") {
            console.log("%c" + this.title.body + " | %c" + e, "color: " + this.title.color + "; font-weight: bold; font-size: " + this.title.size + ";", "color: " + this.body.color + "; font-weight: bold; font-size: " + this.body.size + "; text-shadow: 0 0 5px rgba(0,0,0,0.2);")
        }
    }
    Object.assign(this || arguments[0], {
        CustomLog: n
    })
}(globalThis);
const logger = new CustomLog("Script Logger");

function downloadFileAsTitle(e, n) {
    const t = document.createElement("a");
    t.href = e, t.download = n, document.body.appendChild(t), t.click(), document.body.removeChild(t)
}

function K(e, n) {
    var t = h();
    return K = function(n, r) {
        var o = t[n -= 260];
        if (void 0 === K.MSpWrE) {
            K.LvXyuf = function(e, n) {
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
            }, e = arguments, K.MSpWrE = !0
        }
        var i = n + t[0],
            c = e[i];
        return c ? o = c : (void 0 === K.JJGGUn && (K.JJGGUn = !0), o = K.LvXyuf(o, r), e[i] = o), o
    }, K(e, n)
}
var sleep = e => new Promise((n => setTimeout(n, e)));
console.log("ok");
var adev, set_, CurrentPlayingSymbol = "▶";

function getV(e, n) {
    var t = {
        JcuzG: function(e, n) {
            return e(n)
        },
        whOQd: function(e, n, t) {
            return e(n, t)
        }
    };
    return t.JcuzG(GM_getValue, e) || (t.whOQd(GM_setValue, e, n), n)
}

function setV(e, n) {
    ! function(e, n, t) {
        e(n, t)
    }(GM_setValue, e, n)
}
async function getFinalUrlFromServer(e) {
    var n = {
        cnccR: function(e, n) {
            return e(n)
        },
        JITcU: function(e, n) {
            return e !== n
        },
        oknOt: "eNHDo",
        GqRFC: function(e, n, t) {
            return e(n, t)
        },
        KskjQ: "application/json",
        JbAjj: "Failed to fetch final URL"
    };
    try {
        if (!n.JITcU(n.oknOt, "eNHDo")) {
            const t = await n.GqRFC(fetch, "http://localhost:3000/get-final-url", {
                method: "POST",
                headers: {
                    "Content-Type": n.KskjQ
                },
                body: JSON.stringify({
                    url: e
                })
            });
            if (!t.ok) throw new Error(n.JbAjj);
            return (await t.json()).finalUrl
        }
        this[B[0]] = n.cnccR(T, i[q[1]]), !d[H[1]] && !w && (f = !0, M = j[1], Q.log(g))
    } catch (e) {
        return console.error("Error:", e), null
    }
}

function getCurrentVideoID() {
    var e, n = {
        nBzJx: function(e, n) {
            return e === n
        },
        cONGz: "OwFMI",
        QwuAn: "ytp-video-menu-item ytp-button",
        eSmow: "ytp-playlist-menu-button ytp-button",
        CRdcT: function(e, n) {
            return e !== n
        },
        rurXb: "trXoZ",
        kyeXq: "XeOID",
        HdnmY: "Opening",
        Rlywa: "Closiung",
        CoHZd: "Not Found!"
    };
    return [...document.getElementsByClassName(n.QwuAn)].forEach(((t, r) => {
        if (!n.nBzJx(n.cONGz, n.cONGz)) return !0;
        t.innerText.startsWith(CurrentPlayingSymbol) && (e = new URL(t.href).searchParams.get("v"))
    })), e || !document.getElementsByClassName(n.eSmow)[0] ? e ? (console.log(n.Rlywa), document.getElementsByClassName(n.eSmow)[0].click(), e) : console.warn(n.CoHZd) : n.CRdcT(n.rurXb, n.kyeXq) ? (console.log(n.HdnmY), document.getElementsByClassName(n.eSmow)[0].click(), getCurrentVideoID()) : (S.log("TimeOut for", X), void(r = !0))
}

function sleep(e) {
    return new Promise((n => setTimeout(n, e)))
}
_getV = getV, _setV = setV, Number.prototype.decimal = function(e) {
    return function(e, n) {
        return e(n)
    }(Number, this.toFixed(e))
}, getSoundCloudUrl = () => {
    try {
        return findhref2(document.querySelector("#app > div.playControls.g-z-index-control-bar.m-visible > section > div > div.playControls__elements > div.playControls__soundBadge.sc-ml-3x > div"))[0].href
    } catch {
        return
    }
}, async function() {
    var e = {
        AisBZ: function(e, n) {
            return e(n)
        },
        aMFzl: function(e, n) {
            return e !== n
        },
        SmyTy: "WkTOq",
        KqOrT: function(e) {
            return e()
        },
        orGjI: function(e) {
            return e()
        },
        miJFa: "Added playlist buttons",
        aYFwm: function(e, n, t) {
            return e(n, t)
        },
        avHkF: function(e, n) {
            return e === n
        },
        pBwpT: "FWdOa",
        hwxqM: "button",
        OHpsW: "embedMP3",
        vbHTu: "innerText",
        eQHJR: "MP3",
        XVOGg: "80%",
        SEZax: ".ytp-right-controls",
        oQGtu: "kFtcg",
        hQojW: "Vjohc",
        JnoFF: "Appended",
        yBlhL: "data-e2e",
        niqGG: function(e, n, t) {
            return e(n, t)
        },
        wKvWv: "#main-content-video_detail > div > div.css-12kupwv-DivContentContainer.ege8lhx2 > div.css-1senhbu-DivLeftContainer.ege8lhx3 > div.css-1sb4dwc-DivPlayerContainer.eqrezik4 > div.css-3lfoqn-DivDescriptionContentWrapper-StyledDetailContentWrapper.eqrezik15 > div.css-r4nwrj-DivVideoInfoContainer.eqrezik3 > div.css-bs495z-DivWrapper.e1mzilcj0 > div > h1",
        UoYsY: "Replying to ",
        shuun: "SpNNl",
        OIRZQ: "BnBUt",
        ZbCFH: "GetAudio",
        Nhpoy: "Download MP3",
        IeVvx: "click",
        THmrp: function(e, n) {
            return e === n
        },
        ELjYQ: "sohFs",
        tirvG: "emtzn",
        bIROh: ".playbackSoundBadge__actions",
        cmsMA: "/embed/",
        vjFYY: function(e, n) {
            return e === n
        },
        TzzST: "WTIha",
        nWDve: "Attaching to embeder >:]",
        iARHF: function(e, n, t) {
            return e(n, t)
        }
    };
    async function o(n, t = 3e4) {
        var o;
        for (e.AisBZ(sleep, t).then((e => o = !0)); !document.querySelector(n);)
            if (e.aMFzl(e.SmyTy, e.SmyTy)) t.appendTo(o), r.log("Added Button");
            else if (await e.AisBZ(sleep, 0), o) break;
        return document.querySelector(n)
    }
    if (location.href.includes(e.cmsMA)) {
        if (!e.vjFYY(e.TzzST, "Udpab")) return console.log(e.nWDve), o(e.SEZax).then((async n => {
            var o = {
                iVsNJ: function(n, t) {
                    return e.AisBZ(n, t)
                },
                OFAFx: function(n, t) {
                    return e.avHkF(n, t)
                },
                HjKRP: e.pBwpT,
                GIFsI: "GguHL",
                qZnAk: function(e, n) {
                    return e || n
                },
                gQBIz: "function",
                GTHZz: function(e) {
                    return e()
                },
                wsqAc: "Getting video",
                lZbHB: function(e, n, t) {
                    return e(n, t)
                }
            };
            if (e.aMFzl("IBTpw", "TndSc")) {
                let r = new _e(e.hwxqM, {
                    id: e.OHpsW
                }).appendTo(n).set(e.vbHTu, e.eQHJR).on("click", (function() {
                    var e = {
                        ZHwqH: function(e, n) {
                            return o.iVsNJ(e, n)
                        }
                    };
                    if (o.OFAFx(o.HjKRP, o.GIFsI)) r = e.children, Z.forEach = [].forEach, F.forEach((n => {
                        e.ZHwqH(E, n)
                    }));
                    else {
                        let e = getCurrentVideoID() || o.iVsNJ(setElement, location.href);
                        downloadT(e, !1, !0, !1, !0)
                    }
                })).style({
                    position: "fixed",
                    right: "50%",
                    top: e.XVOGg
                });
                for (; !document.getElementById(e.OHpsW) && document.querySelector(e.SEZax);)
                    if (e.aMFzl(e.oQGtu, e.hQojW)) console.log(e.JnoFF), r.appendTo(e.SEZax);
                    else {
                        const e = q.createObjectURL(d);
                        H.href = e, w.download = t, C.target = "_blank", b.click(), I.revokeObjectURL(e), (o.qZnAk(p, f) || M).postMessage({
                            url: j,
                            title: Q,
                            s: !0
                        }, "*"), (typeof g).includes(o.gQBIz) && o.GTHZz(J)
                    }
            } else o.log(o.wsqAc), o.lZbHB(r, x, Z)
        }));
        var i = {
            CjgWO: function(n) {
                return e.KqOrT(n)
            },
            LqWbs: function(n) {
                return e.orGjI(n)
            }
        };
        F.log(e.miJFa), e.aYFwm(n, (() => {
            i.CjgWO(d).append(H.br.element), i.LqWbs(w).append(t.element), C().append(b.element)
        }), 100)
    }
    return document.querySelector(e.SEZax), await e.iARHF(o, e.bIROh, 5e3).then((async n => {
        var t = {
            krUrj: function(n, t, r) {
                return e.aYFwm(n, t, r)
            },
            dpppE: "browse-video-desc",
            PENUx: e.yBlhL,
            IORcX: function(n, t, r) {
                return e.niqGG(n, t, r)
            },
            GVRce: e.wKvWv,
            mfxOG: e.UoYsY,
            ClsKY: e.shuun,
            xTMKk: e.OIRZQ
        };
        let r = new _e(e.hwxqM, {
            id: e.ZbCFH
        }).appendTo(n).set(e.vbHTu, e.Nhpoy).on(e.IeVvx, (function() {
            e.orGjI(downloadSC)
        }), (e => e));
        for (;;) {
            if (!document.getElementById(e.ZbCFH) && await o(".playbackSoundBadge__actions", 5e3)) {
                if (e.THmrp(e.ELjYQ, e.tirvG)) return t.krUrj(n, t.dpppE, t.PENUx) ? t.IORcX(t, t.dpppE, t.PENUx).innerText : r.querySelector(t.GVRce).innerText.replace(t.mfxOG, "");
                await o(e.bIROh, 5e3).then((e => {
                    t.ClsKY !== t.xTMKk ? (r.appendTo(e), console.log("Added Button")) : k[n].close()
                }))
            }
            await e.AisBZ(sleep, 0)
        }
    }))
}().then(console.log, console.warn), downloadSC = function() {
    var e = {
        XISdh: "These button dont work on youtube music yet",
        dnXjj: function(e, n) {
            return e !== n
        },
        fupLU: "xUaYS",
        rocsn: function(e, n, t) {
            return e(n, t)
        },
        tZUmE: function(e) {
            return e()
        },
        snVpF: "SCinfo",
        AgUSA: "https://sclouddownloader.net/"
    };
    GM_setValue("SCinfo", null), e.rocsn(GM_setValue, "sc", e.tZUmE(getSoundCloudUrl)), set_ || (set_ = 1, e.rocsn(GM_addValueChangeListener, e.snVpF, (function(n, t, r, o) {
        var i = {
            WeMlm: e.XISdh
        };
        if (!e.dnXjj(e.fupLU, "UTqfo")) throw n(i.WeMlm), ".";
        console.log({
            a: n,
            b: t,
            c: r,
            d: o
        }), r && r.name && e.rocsn(_downloadFileAsTitle, r.href, r.name)
    }))), open(e.AgUSA)
}, GM_setValue_ = GM_setValue, GM_getValue_ = GM_getValue, GM_info_ = GM_info;
var UnmutePath = "M3.15,3.85l4.17,4.17L6.16,9H3v6h3.16L12,19.93v-7.22l2.45,2.45c-0.15,0.07-0.3,0.13-0.45,0.18v1.04 c0.43-0.1,0.83-0.27,1.2-0.48l1.81,1.81c-0.88,0.62-1.9,1.04-3.01,1.2v1.01c1.39-0.17,2.66-0.71,3.73-1.49l2.42,2.42l0.71-0.71 l-17-17L3.15,3.85z M11,11.71v6.07L6.52,14H4v-4h2.52l1.5-1.27L11,11.71z M10.33,6.79L9.62,6.08L12,4.07v4.39l-1-1V6.22L10.33,6.79 z M14,8.66V7.62c2,0.46,3.5,2.24,3.5,4.38c0,0.58-0.13,1.13-0.33,1.64l-0.79-0.79c0.07-0.27,0.12-0.55,0.12-0.85 C16.5,10.42,15.44,9.1,14,8.66z M14,5.08V4.07c3.95,0.49,7,3.85,7,7.93c0,1.56-0.46,3.01-1.23,4.24l-0.73-0.73 C19.65,14.48,20,13.28,20,12C20,8.48,17.39,5.57,14,5.08z",
    mutePath = "M17.5,12c0,2.14-1.5,3.92-3.5,4.38v-1.04c1.44-0.43,2.5-1.76,2.5-3.34c0-1.58-1.06-2.9-2.5-3.34V7.62 C16,8.08,17.5,9.86,17.5,12z M12,4.07v15.86L6.16,15H3V9h3.16L12,4.07z M11,6.22L6.52,10H4v4h2.52L11,17.78V6.22z M21,12 c0,4.08-3.05,7.44-7,7.93v-1.01c3.39-0.49,6-3.4,6-6.92s-2.61-6.43-6-6.92V4.07C17.95,4.56,21,7.92,21,12z";

function downloadFile_(e, n) {
    const t = document.createElement("a");
    t.href = e, t.download = n, document.body.appendChild(t), t.click(), document.body.removeChild(t)
}

function V(e, n) {
    var t = h();
    return V = function(n, r) {
        var o = t[n -= 260];
        if (void 0 === V.OzhZIb) {
            V.ETINjf = function(e) {
                for (var n, t, r = "", o = "", i = 0, c = 0; t = e.charAt(c++); ~t && (n = i % 4 ? 64 * n + t : t, i++ % 4) ? r += String.fromCharCode(255 & n >> (-2 * i & 6)) : 0) t = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(t);
                for (var u = 0, l = r.length; u < l; u++) o += "%" + ("00" + r.charCodeAt(u).toString(16)).slice(-2);
                return decodeURIComponent(o)
            }, e = arguments, V.OzhZIb = !0
        }
        var i = n + t[0],
            c = e[i];
        return c ? o = c : (o = V.ETINjf(o), e[i] = o), o
    }, V(e, n)
}
_downloadFileAsTitle = async function(e, n, t, r) {
    var o = {
        oELGU: "music",
        kUAcV: function(e, n) {
            return e(n)
        },
        yEtmW: "These button dont work on youtube music yet",
        eLSPB: "ytd-playlist-panel-renderer",
        qfKLX: function(e, n, t) {
            return e(n, t)
        },
        uVRSB: "span",
        IRIxr: "dxpMh",
        TIqId: "TenUh",
        lMoOC: function(e, n) {
            return e || n
        },
        JqMPw: "function",
        KCdVG: "Error downloading file:"
    };
    const i = document.createElement("a");
    return i.style.display = "none", document.body.appendChild(i), fetch(e).then((e => e.blob())).then((c => {
        if (o.IRIxr === o.TIqId) {
            if (T.domain.includes(o.oELGU)) throw o.kUAcV(j, o.yEtmW), ".";
            var u = [...q.getElementsByTagName(o.eLSPB)].filter(d).filter((e => !u(e)))[0],
                l = o.qfKLX(w, u, o.uVRSB).filter((e => !u(e))).filter(C).filter((e => "video-title" == e.id)).map(b).map(I).map((e => ({
                    id: u(l(J(e))[0].href),
                    e: e
                })));
            return l
        } {
            const u = URL.createObjectURL(c);
            i.href = u, i.download = n, i.target = "_blank", i.click(), URL.revokeObjectURL(u), (o.lMoOC(t, opener) || window).postMessage({
                url: e,
                title: n,
                s: !0
            }, "*"), (typeof r).includes(o.JqMPw) && r()
        }
    })).catch((r => {
        console.error(o.KCdVG, r), (o.lMoOC(t, opener) || window).postMessage({
            url: e,
            title: n,
            s: !1
        }, "*")
    }))
}, _downloadFile_ = downloadFile_;
const query = function(e, n) {
    var t = {
        aYxxK: function(e, n) {
            return e(n)
        },
        OXPXj: "CWqDT",
        njBpB: function(e, n) {
            return e != n
        },
        OpsCc: "undefined",
        HPhGn: function(e, n) {
            return e(n)
        }
    };
    try {
        if (t.OXPXj == t.OXPXj) {
            let r = t.njBpB(typeof $, t.OpsCc) ? $ : document.querySelectorAll;
            return n ? [...document.querySelectorAll(e)].filter((e => !(null === el.offsetParent)))[0] : (e => Object.keys(e).length ? e : null)(t.HPhGn(r, e) ? r(e).length ? t.aYxxK(r, e)[0] : r(e) : null)
        }
        x.children.length && (B = T.children, i.forEach = [].forEach, q.forEach((e => {
            t.aYxxK(H, e)
        })))
    } catch {}
};
async function downloadVideo(e, t) {
    var r = {
        YxlRY: function(e, n, t) {
            return e(n, t)
        },
        PwNmk: function(e, n) {
            return e === n
        },
        XChds: "xrYFW",
        ARcBE: "Failed to download video:"
    };
    try {
        const n = await fetch(e);
        if (!n.ok) throw new Error("HTTP error! Status: " + n.status);
        const r = n.url,
            o = await n.blob(),
            i = window.URL.createObjectURL(o),
            c = document.createElement("a");
        c.href = i, c.download = t, document.body.appendChild(c), c.click(), document.body.removeChild(c), window.URL.revokeObjectURL(i), console.log("Video downloaded from: " + r)
    } catch (e) {
        r.PwNmk(r.XChds, r.XChds) ? console.error(r.ARcBE, e) : ([n, E, v, B] = T.pathname.split("/"), r.YxlRY(i, (e => e.href)((e => (e.host = "clipr.xyz", e))(new q(d.href))), H))
    }
}
getElementByAttribute = function(e, n = "aria-label", t = document.body) {
        var r = {
                LxHBO: function(e, n) {
                    return e(n)
                },
                lZrFH: function(e, n) {
                    return e == n
                },
                GTgYk: function(e, n) {
                    return e(n)
                },
                GTrPy: function(e, n) {
                    return e || n
                }
            },
            o = [];
        return r.GTgYk((function t(i) {
            r.lZrFH(i.getAttribute(n), e) ? o.push(i) : i.children.length && ((i = i.children).forEach = [].forEach, i.forEach((e => {
                r.LxHBO(t, e)
            })))
        }), t), r.lZrFH(o.length, 1) ? o[0] : r.GTrPy(o, !1)
    }, get_aria_label = function(e, n = document.body) {
        var r = {
                GMQex: function(e, n, t) {
                    return e(n, t)
                },
                bJaAn: "Unhandled Post",
                mQNzY: "Found",
                HduTr: "clearfix",
                KoBqX: function(e, n) {
                    return e(n)
                },
                Vtixy: "tik-video",
                ghcii: function(e, n) {
                    return e == n
                },
                uHAFP: "https://www.tiktok.com",
                WmhBv: function(e, n) {
                    return e || n
                },
                ysJdC: function(e, n, t) {
                    return e(n, t)
                },
                Hyjnw: "data-e2e",
                iExTx: "browse-copy",
                nDKSY: function(e, n) {
                    return e === n
                },
                IWsny: "fWKAD",
                ZyWFU: "goMDp"
            },
            o = [];
        return function n(i) {
            if (r.ghcii(i.getAttribute("aria-label"), e))
                if (r.nDKSY(r.ZyWFU, r.ZyWFU)) o.push(i);
                else {
                    var c = {
                        DaILB: function(e, n, t) {
                            return r.GMQex(e, n, t)
                        },
                        NhlrT: r.bJaAn
                    };
                    d.log(r.mQNzY);
                    let e = {
                            title: H.getElementsByClassName(r.HduTr)[0].innerText,
                            links: r.KoBqX(w, t.getElementsByClassName(r.Vtixy)[0]).map((e => e.href)),
                            mp4: r.ghcii(C, 1),
                            info: r.KoBqX(b, I)
                        },
                        n = r.uHAFP;
                    p = function(e) {
                        if (e.origin == n) {
                            var {
                                data: {
                                    s: t,
                                    url: r,
                                    title: o
                                }
                            } = e;
                            l.log("Handled", {
                                s: t,
                                url: r,
                                title: o
                            }, e), t ? c.DaILB(O, L, 100) : W(r, o, null, G)
                        } else U.log(c.NhlrT, e)
                    }, r.WmhBv(i, u).postMessage(e, "*")
                } else i.children.length && ((i = i.children).forEach = [].forEach, i.forEach((e => {
                var t = {
                    LavcK: function(e, n, t) {
                        return r.ysJdC(e, n, t)
                    },
                    ODUcu: r.Hyjnw,
                    Uccjg: r.iExTx
                };
                if (r.nDKSY(r.IWsny, "fWKAD")) r.KoBqX(n, e);
                else try {
                    return !!t.LavcK(n, "browse-copy", t.ODUcu).parentNode && t.LavcK(i, t.Uccjg, t.ODUcu).parentNode
                } catch (e) {
                    return !1
                }
            })))
        }(n), o[0] || !1
    }, getClass = function(e) {
        return document.getElementsByClassName("ehlq8k34")[0]
    },
    function() {
        var e = {
            lbblM: function(e, n, t, r, o) {
                return e(n, t, r, o)
            },
            hSNSq: "unload",
            pNOAz: function(e, n, t) {
                return e(n, t)
            },
            TUjun: function(e, n) {
                return e(n)
            },
            Tgtwm: "isclosed",
            SBuMd: function(e, n) {
                return e !== n
            },
            YglwH: "RVREK",
            hUkLH: function(e) {
                return e()
            },
            SjXmj: "TnuyG",
            GSnuW: "KQxlF",
            QtefJ: function(e, n) {
                return e < n
            },
            HISDq: function(e, n) {
                return e == n
            },
            OmSeH: function(e, n, t) {
                return e(n, t)
            },
            JHCYI: function(e) {
                return e()
            },
            nsUei: "Cant append buttons yet",
            xdVlk: "Posting",
            nWMJv: function(e, n) {
                return e === n
            },
            GaJJP: "iUngx",
            OOcLg: "rXxTP",
            UAYaP: function(e, n) {
                return e === n
            },
            nlBWK: "wRpDg",
            tKcvk: "oWMSo",
            HEXPy: "length",
            vCpsh: "Provided argument is not a DOM element.",
            fFPFr: "Appending:",
            NZRvO: "xWqmM",
            PDRja: "hkfWS",
            GFyDf: "fqLhZ",
            qAEhH: "XgkEt",
            mfFyD: "Replying to ",
            bmVzD: "#app > div.css-14dcx2q-DivBodyContainer.e1irlpdw0 > div:nth-child(4) > div > div.css-1qjw4dg-DivContentContainer.e1mecfx00 > div.css-1stfops-DivCommentContainer.ekjxngi0 > div > div.css-1xlna7p-DivProfileWrapper.ekjxngi4 > div.css-1u3jkat-DivDescriptionContentWrapper.e1mecfx011 > div.css-1nst91u-DivMainContent.e1mecfx01 > div.css-bs495z-DivWrapper.e1mzilcj0",
            SDWed: "uDiRR",
            DjnIE: function(e, n, t) {
                return e(n, t)
            },
            JogJd: "browse-video-desc",
            smFXB: "data-e2e",
            YZxED: "#main-content-video_detail > div > div.css-12kupwv-DivContentContainer.ege8lhx2 > div.css-1senhbu-DivLeftContainer.ege8lhx3 > div.css-1sb4dwc-DivPlayerContainer.eqrezik4 > div.css-3lfoqn-DivDescriptionContentWrapper-StyledDetailContentWrapper.eqrezik15 > div.css-r4nwrj-DivVideoInfoContainer.eqrezik3 > div.css-bs495z-DivWrapper.e1mzilcj0 > div > h1",
            BJeQI: function(e, n) {
                return e !== n
            },
            eWnXA: "CLnnU",
            MCaBl: "#yDmH0d > c-wiz > div > div > div:nth-child(2) > div.LLEp8b > div > div.rTq3hb > div:nth-child(1) > div > div.ofmULb > div:nth-child(2) > div > button",
            QMznx: "#VGHGFf > div > div.Eddif > div:nth-child(2) > button > div.VfPpkd-RLmnJb",
            lHDbE: "GInTQ",
            CHRPe: "using loader.to api",
            xgHFH: function(e, n) {
                return e === n
            },
            fcDKt: "._aaqy",
            fmjiF: "button",
            rdUhO: "MediaButton",
            ljusf: "Get Images",
            vmRmN: "MediaButton2",
            YAgnf: "innerText",
            bmUZH: "Get Videos",
            GnSuj: "click",
            wbnUg: function(e, n) {
                return e != n
            },
            JvIDR: function(e) {
                return e()
            },
            FEDVq: "tYCmz",
            hvFYW: "TNtcs",
            XoPfq: function(e, n) {
                return e === n
            },
            HYYyU: "dFXmn",
            WUnif: function(e, n) {
                return e === n
            },
            gwXZM: "function",
            yQKYs: function(e, n) {
                return e instanceof n
            },
            IwheX: function(e, n) {
                return e >= n
            },
            ffrEz: function(e, n) {
                return e - n
            },
            gbNLd: function(e, n) {
                return e <= n
            },
            EOdSa: function(e, n) {
                return e + n
            },
            auPWy: function(e, n) {
                return e / n
            },
            NXoOC: function(e, n) {
                return e <= n
            },
            yzCzA: function(e, n, t, r) {
                return e(n, t, r)
            },
            zrwhY: function(e, ...n) {
                return e(...n)
            },
            fqFUu: function(e, n) {
                return e === n
            },
            fbuRW: "FkxDI",
            uTgof: function(e) {
                return e()
            },
            mItum: function(e, n) {
                return e === n
            },
            PpJAg: "cEopM",
            AMVZl: function(e) {
                return e()
            },
            SHaYP: function(e, n, t) {
                return e(n, t)
            },
            zjGmE: function(e, n) {
                return e || n
            },
            EhpTn: function(e, n) {
                return e(n)
            },
            kviCd: function(e, n) {
                return e === n
            },
            tgrNQ: function(e, n) {
                return e == n
            },
            ZKKOy: function(e, n) {
                return e || n
            },
            bTvbO: "hlIJn",
            MABcq: function(e, n) {
                return e !== n
            },
            wYMog: "vmsYq",
            wmTDb: "._acaz",
            hhzuu: "video.x1lliihq",
            QAXrV: function(e, n) {
                return e(n)
            },
            Tqlob: "Go back",
            VEKNt: function(e, n) {
                return e(n)
            },
            OrXEz: "._afxv",
            YVZfC: function(e, n) {
                return e(n)
            },
            hxCsa: "Next",
            xYHGO: function(e, n) {
                return e(n)
            },
            cNeCh: "._afxw",
            mnBgI: "VOD",
            Cipxq: "sPcin",
            JAfDi: "div.x78zum5.xdt5ytf.x1iyjqo2.xs83m0k.x2lwn1j.x1odjw0f.x1n2onr6.x9ek82g.x6ikm8r.xdj266r.x11i5rnm.x4ii5y1.x1mh8g0r.xexx8yu.x1pi30zi.x18d9i69.x1swvt13 > ul > div:nth-child(3) > div > div",
            Ddaxv: ".xt0psk2.xvs91rp.xo1l8bm.x5n08af.x18hxmgj",
            HOFLT: "Doesnt work yet",
            xyujS: "Get",
            bSLzU: "VuXJc",
            dqckL: function(e, n) {
                return e instanceof n
            },
            QqDPj: "GHrdG",
            ThBLh: "gHqGn",
            hUizc: "none",
            CuIZa: "No id Found",
            vAHpw: "blob:",
            pwZWD: function(e, n) {
                return e * n
            },
            bisGG: "LJCpx",
            avqNG: function(e, n) {
                return e === n
            },
            VkbRc: "PJMuV",
            hEpdG: "3|4|2|1|0",
            URcmU: "instaURL",
            OGZEJ: ".mp4",
            uXxpu: "MiFfj",
            UHyYQ: "bvZvK",
            FkHvo: "reel",
            hRIGD: function(e, n, t, r) {
                return e(n, t, r)
            },
            DOUjg: "https://fastdl.app/en",
            vLyoS: function(e, n, t, r, o) {
                return e(n, t, r, o)
            },
            WVOry: function(e, n) {
                return e !== n
            },
            FRBth: "wXXTz",
            gjdXK: "fgHPs",
            qztwp: "img",
            yRmQY: "alt",
            SuMsE: function(e, n) {
                return e !== n
            },
            yfFiv: "#cardApiIframe",
            XMQYu: function(e, n) {
                return e != n
            },
            vPUXY: "Fixed That Thing",
            BpgPv: function(e, n) {
                return e(n)
            },
            bbFoZ: function(e, n) {
                return e(n)
            },
            cnoPV: "Handled",
            VdoLn: " - ",
            dfEsB: ".mp3",
            bAxHG: "qutml",
            LGyhO: "weXCi",
            FnGhB: function(e, n, t) {
                return e(n, t)
            },
            ZHRwM: function(e, n) {
                return e === n
            },
            LpyzL: "kksRo",
            VYAfo: function(e, n) {
                return e !== n
            },
            QUWsT: "FUoJc",
            yaTVR: function(e) {
                return e()
            },
            USxzA: function(e) {
                return e()
            },
            nONvg: "EprEn",
            puCJT: function(e) {
                return e()
            },
            SCQqC: function(e) {
                return e()
            },
            vfSyn: function(e, n) {
                return e === n
            },
            Aayak: "sRZRa",
            OMQZJ: "QNHqW",
            lRCOe: function(e, n) {
                return e(n)
            },
            fEsAx: function(e) {
                return e()
            },
            fcPTg: function(e, n) {
                return e(n)
            },
            PBWYM: function(e) {
                return e()
            },
            sfMKN: function(e, n) {
                return e(n)
            },
            siyEc: "change",
            VOFiq: "blur",
            laXAu: function(e, n, t) {
                return e(n, t)
            },
            ItDgo: "#search-form-input",
            KHfvX: function(e, n) {
                return e(n)
            },
            Xuoui: "Found a",
            WptIS: ".search-form__button",
            JsLgH: function(e, n) {
                return e(n)
            },
            hmmNo: ".button--filled",
            ARJRq: function(e, n) {
                return e === n
            },
            EwJEr: "Cgiph",
            Zekcn: "Win closed",
            iuDuo: function(e) {
                return e()
            },
            GaAQx: "https://sclouddownloader.net/",
            SypvE: function(e, n) {
                return e == n
            },
            TeNsD: ".cell-body.tablecell-visibility.style-scope.ytcp-video-row",
            rWTuw: function(e, n) {
                return e === n
            },
            NGKrK: "ytp-playlist-menu-button ytp-button",
            eFaUG: "#video-list",
            FUmYt: "Change?",
            qTZUf: "Found",
            mKBYX: "iFrameResize function not available",
            mgdNS: "FWHpq",
            pDdVG: "btn-submit",
            FCpFe: "no there",
            aKUQo: "3|2|1|0|4",
            iHYhL: ".xh8yej3.x1iyjqo2",
            lyJSh: "Appended buttons man",
            xypKq: ".ScCoreButtonLabel-sc-s7h2b7-0",
            uhZGO: "qGleU",
            ywrxt: "#MediaButton",
            NtMIf: function(e) {
                return e()
            },
            aVHzE: function(e) {
                return e()
            },
            LdLYB: "Caught",
            WvhFY: "ySILY",
            kDKaj: function(e, n, t) {
                return e(n, t)
            },
            rjGdU: function(e, n) {
                return e === n
            },
            gyooN: "jzCAS",
            MTmvy: "PHWED",
            xKBAF: function(e, n) {
                return e(n)
            },
            QnFTE: "/download-sound-track",
            uwKuM: "0|2|3|4|7|1|6|5",
            VHDPu: function(e) {
                return e()
            },
            eUECM: "SCinfo",
            GuOVB: function(e, n) {
                return e(n)
            },
            jzZkS: "#urlInput",
            fQiye: "#submitBtn",
            oeiBl: "LRLIS",
            rTnyy: "EZ url",
            DCLEQ: function(e, n) {
                return e == n
            },
            YHeRh: function(e, n) {
                return e !== n
            },
            DnaMv: "XzHjs",
            VxQBl: "QGmVi",
            FtJpz: function(e) {
                return e()
            },
            TcBTg: "Got",
            RAQKJ: function(e, n, t) {
                return e(n, t)
            },
            tlHMw: function(e, n) {
                return e !== n
            },
            NnMpG: "VMCAp",
            vjMjY: "rrKyf",
            hZtfp: "5|2|1|3|6|4|0",
            phfRg: function(e) {
                return e()
            },
            iVqSL: function(e, n, t) {
                return e(n, t)
            },
            TtFAa: "Posted",
            yKEBb: function(e, n) {
                return e != n
            },
            KIvbS: "#url",
            EpabR: "after url",
            Sygxc: "#progress",
            hPIpv: "Error:",
            yaMfR: "MxjxQ",
            LpChq: "TimeOut for",
            djcnn: function(e, n) {
                return e === n
            },
            drspk: "xGAAe",
            yAVDr: "EnyQA",
            HvMYF: "vjanU",
            tkeMf: "hjfGf",
            cLRFd: "NotFound",
            XxKeZ: "input",
            aNmEe: "gbxCS",
            UzVQv: function(e, n) {
                return e === n
            },
            AlJAP: "sgzWi",
            xSNTz: ".ytp-right-controls",
            txrDu: "was clicked",
            xsWZc: "YjKat",
            TaONZ: function(e, n) {
                return e(n)
            },
            ojoDW: function(e) {
                return e()
            },
            TZkes: "ehlq8k34",
            ZCYbB: function(e, n) {
                return e !== n
            },
            BkJKu: "YqGVh",
            FjLbv: "vidbutton",
            lFzyV: "dlbutton",
            WtFQT: function(e, n, t) {
                return e(n, t)
            },
            ZadFw: "#downloadBtn",
            vCfSS: function(e, n, t) {
                return e(n, t)
            },
            gUAFS: function(e, n, t) {
                return e(n, t)
            },
            USfYy: "NbAhB",
            WNKPq: "#dlbutton",
            GMOWz: function(e, n) {
                return e !== n
            },
            rTmDa: "gopLN",
            wVfGP: "rynzg",
            CEPZW: "#height",
            KqULf: function(e, n, t) {
                return e(n, t)
            },
            dvpSY: "480",
            RXLeg: function(e, n) {
                return e !== n
            },
            DeUEa: "ukdtd",
            GcGaO: function(e, n, t) {
                return e(n, t)
            },
            PMgCh: "#s_input",
            FUGEw: "eDBhz",
            ANJpm: "Converting",
            yECLe: function(e, n, t) {
                return e(n, t)
            },
            ywKzh: "#formatSelect",
            gpjFK: "#btn-action",
            asaKF: function(e, n) {
                return e(n)
            },
            nEHpu: "#asuccess",
            AKQfQ: function(e, n) {
                return e(n)
            },
            RMmMI: ".clearfix",
            KpFIb: function(e, n) {
                return e || n
            },
            BUouT: "Input was not Found",
            KCaIx: "?!!",
            oxeKX: "was created",
            maLKg: function(e, n) {
                return e == n
            },
            aacsP: function(e, n) {
                return e(n)
            },
            HneZn: "nUeVe",
            ffOHW: function(e, n) {
                return e == n
            },
            yCZxt: function(e, n) {
                return e == n
            },
            UmcYV: function(e, n) {
                return e == n
            },
            MDtQK: "https://y2mate.nu",
            OOFXG: function(e, n) {
                return e == n
            },
            GxcKi: "https://snapsave.io",
            DMYTJ: "https://tubemp4.is",
            Hleex: function(e, n) {
                return e + n
            },
            gNHFL: "Get MP3",
            UAwBo: "disabled",
            kuGbj: "Getting video",
            qUTId: function(e, n) {
                return e(n)
            },
            URpKr: function(e, n) {
                return e !== n
            },
            SRpfU: "gGnih",
            Flfsz: "BPLRo",
            zNLuF: "1080",
            lMxaw: "720",
            gsfYM: "360",
            WHrss: function(e, n) {
                return e(n)
            },
            CIHbm: "1080P",
            OpdKj: "720P",
            JUYat: "360P",
            EGjKi: function(e, n) {
                return e(n)
            },
            gtysz: "sKaEx",
            FRxOQ: "IiSYr",
            YvmwT: "WxTzi",
            CMPJN: function(e, n) {
                return e !== n
            },
            XcbGw: "EHVLL",
            afUdJ: "zzVkD",
            JuWyr: function(e, n) {
                return e === n
            },
            poAoy: function(e, n) {
                return e(n)
            },
            xrTWG: ".Layout-sc-1xcs6mc-0 .bMOhzu",
            gvSVZ: ".bFxzAY",
            ZbflC: "480P",
            hFrGa: "zKyed",
            hwNxh: function(e, n, t) {
                return e(n, t)
            },
            mraGH: "complete",
            aODBW: ".space-x-1",
            QrRSt: "Fztni",
            UFwmF: ".flex.items-center.space-x-4",
            aXsfV: "body > div.relative.overflow-hidden > main > div > div.px-4.mx-auto.max-w-7xl.sm\\:px-6.lg\\:px-8 > div.mb-6.space-y-3.lg\\:flex.lg\\:items-center.lg\\:justify-between.lg\\:space-y-0 > div.lg\\:flex.lg\\:items-center > h2",
            bWOca: function(e, n) {
                return e(n)
            },
            Rhgaa: function(e, n) {
                return e === n
            },
            vyhzk: "WTpkL",
            MpJYV: function(e, n) {
                return e + n
            },
            FvAxL: "sZvcl",
            jCrpn: function(e, n) {
                return e !== n
            },
            Gaudc: "yRgoH",
            OGcCO: function(e, n) {
                return e(n)
            },
            YMPsv: "collapse-frame",
            eDWQs: function(e, n) {
                return e > n
            },
            mcCMb: function(e, n) {
                return e == n
            },
            LpdRK: "GIACj",
            ElGTC: "ivaRI",
            zOift: function(e, n) {
                return e === n
            },
            AtMry: "LxcJb",
            BxGpX: "lCFbw",
            ZzbHV: "clicked",
            gtmLq: function(e, n) {
                return e(n)
            },
            jCWsY: "#convert",
            LKjvJ: function(e, n) {
                return e(n)
            },
            AADyR: ".process-button",
            aBBGS: function(e, n) {
                return e(n)
            },
            UHCXz: ".download-button",
            fEdeh: "ytp-video-menu-item ytp-button",
            dINEN: "Opening",
            hQRDA: function(e) {
                return e()
            },
            VjLot: "Closiung",
            PMiOk: "Not Found!",
            WBlUO: function(e, n) {
                return e === n
            },
            SDYJr: "GntUe",
            McKAV: "music",
            jqTgx: "GEKEg",
            PySbY: "ytd-playlist-panel-renderer",
            TtmUD: function(e, n, t) {
                return e(n, t)
            },
            TfxkI: function(e, n) {
                return e !== n
            },
            YMElD: "XAZYO",
            uTqmh: function(e, n) {
                return e == n
            },
            HsQmX: "https://sss.instasaverpro.com",
            qqEUe: function(e, n) {
                return e(n)
            },
            ZBaki: "iframe",
            ceeOu: "lazy",
            HDeUi: "no-referrer",
            kfrZR: "allow-same-origin allow-scripts allow-popups allow-forms",
            Iqkbe: "autoplay; fullscreen; geolocation; microphone; camera",
            eNuqf: "absolute",
            zbTLS: function(e, n, t) {
                return e(n, t)
            },
            wfFFv: "rZkAy",
            mpjTd: "FCqaP",
            bzuYS: function(e, n) {
                return e !== n
            },
            xEwcF: "HRwtg",
            EOvZj: function(e, n) {
                return e(n)
            },
            ckpTy: "y2mate.nu",
            jCeZU: "&s=",
            AmlAM: "/shorts/",
            wdyRp: "&mp4=",
            wZNXn: "mp3",
            aGaXd: "&useT=",
            fzcTW: "src",
            rGSBV: function(e, n) {
                return e + n
            },
            jCSgR: function(e, n) {
                return e + n
            },
            OoAIO: "mp4",
            jNSWv: ".com",
            zKVut: "mz.com",
            RqwNc: function(e, n) {
                return e + n
            },
            OyxuJ: "https://y2mate.nu/",
            DhIOj: function(e, n) {
                return e(n)
            },
            zccrA: "0HzX",
            WkjQo: "?v=",
            JIscO: function(e, n, t, r) {
                return e(n, t, r)
            },
            DZpli: "https://yt5s.biz/enxj100/",
            hWvKG: "rHEdx",
            yxGlg: "TEXTAREA",
            qbOVT: "KeyI",
            PVCYw: "Open player page",
            PkPlc: "Added MiniPlayer Toggle with I",
            WtExj: "bsaQL",
            uhTKj: "ICMhd",
            xsQYm: "Unhandled Post",
            HGBrj: "https://savetik.co/en",
            chLJK: function(e, n) {
                return e !== n
            },
            rcgqj: "EpDKs",
            PpDgd: "fiXxm",
            HTXXo: "JqczA",
            XaxBq: "gOMsv",
            QsKUg: function(e, n) {
                return e(n)
            },
            hQJlH: function(e, n, t) {
                return e(n, t)
            },
            KPMoR: function(e, n) {
                return e(n)
            },
            VTTXp: function(e, n) {
                return e == n
            },
            bwrTF: function(e, n) {
                return e(n)
            },
            nLCwR: function(e, n) {
                return e == n
            },
            ZLiIn: "XYMFx",
            JbDAH: "rHCBp",
            PYBwx: ".ytp-volume-area > .ytp-mute-button",
            SZrTD: function(e, n, t) {
                return e(n, t)
            },
            YuirM: "Mute",
            MJBcr: "title",
            cGtZc: function(e, n, t) {
                return e(n, t)
            },
            WOjmD: function(e, n, t) {
                return e(n, t)
            },
            TieJY: "Mute (m)",
            ngWJy: function(e, n) {
                return e(n)
            },
            JXpjL: function(e, n) {
                return e == n
            },
            NdXaT: "path",
            NgeES: function(e, n, t) {
                return e(n, t)
            },
            uwFMe: "Unmute",
            HvyJo: function(e, n, t) {
                return e(n, t)
            },
            gPfvT: "Unmute (m)",
            BASnl: "string",
            PIpJi: "emCAo",
            MFOFG: "Ajhwd",
            oWXSe: function(e, n) {
                return e !== n
            },
            QXnvA: "jnkdU",
            nmjYL: "itdYl",
            glfwU: "embedMP3",
            srZTD: "MP3",
            vDrIU: "fixed",
            HVzHr: "50%",
            kYXWN: "80%",
            LuSwq: function(e, n) {
                return e === n
            },
            VadvC: "OYSwz",
            hxdbi: function(e, n) {
                return e !== n
            },
            VUaxz: "EOIto",
            Lgliz: ".e1mecfx011",
            EPItv: function(e, n) {
                return e !== n
            },
            FEAwf: "DyHht",
            buXnJ: "JTeJF",
            ViSol: "download",
            bLOHM: function(e, n) {
                return e(n)
            },
            pwSUm: "This button is corrently broken",
            JbmmI: function(e) {
                return e()
            },
            vApMQ: function(e, n) {
                return e < n
            },
            MGUfs: function(e, n) {
                return e + n
            },
            tFMou: "win",
            GFrFa: function(e, n) {
                return e === n
            },
            kfLuk: "cXBri",
            wkAyW: "rpkQH",
            ITddc: "Wait...",
            lRtQL: function(e, n) {
                return e == n
            },
            ZjRDI: "shorts/",
            CYjkz: "watch?v=",
            SrwkT: "HFarR",
            PYWtw: function(e, n, t, r, o, i) {
                return e(n, t, r, o, i)
            },
            oMjoW: function(e, n, t, r) {
                return e(n, t, r)
            },
            zhobR: function(e, n) {
                return e(n)
            },
            ZTlmb: function(e, n) {
                return e(n)
            },
            lMXhO: function(e, n) {
                return e(n)
            },
            rLnvI: function(e, n) {
                return e === n
            },
            wAQRh: function(e, n, t) {
                return e(n, t)
            },
            ytlzs: function(e, n) {
                return e(n)
            },
            aizvX: function(e, n, t, r, o) {
                return e(n, t, r, o)
            },
            EPEHE: function(e, n, t) {
                return e(n, t)
            },
            ZRtyh: "bpPjx",
            NiUaB: "#end",
            EIDIm: "#right-content",
            ESHFW: "#header-description",
            zHRoH: ".autoplay",
            fEYyV: function(e, n) {
                return e(n)
            },
            cmlQi: function(e, n) {
                return e === n
            },
            OXoYW: "tpeBb",
            nrCWP: "gQyqo",
            PFDcF: function(e, n) {
                return e != n
            },
            FVYRe: function(e) {
                return e()
            },
            hOfbT: "YJjeI",
            OsVwq: "Added playlist buttons",
            HrePi: "SygnU",
            pmylD: "KqJlW",
            SCurB: "buttons are gone?!?!",
            nBRWP: "GMHtP",
            bmZSt: function(e, n, t) {
                return e(n, t)
            },
            JoHAY: "Iozdi",
            jIopr: "mcmok",
            kYiBE: "vGAKv",
            zNRXZ: "browse-copy",
            rISxc: function(e, n) {
                return e === n
            },
            mWJAp: "tDJGJ",
            BoSQx: "aTnUu",
            vnhJm: "Posted Buttons",
            hngbE: function(e, n, t) {
                return e(n, t)
            },
            gaRPG: function(e, n, t) {
                return e(n, t)
            },
            TYEML: "load",
            nyQgB: "lmXbl",
            FODxQ: function(e, n) {
                return e(n)
            },
            sWXyu: function(e, n) {
                return e || n
            },
            aLJCT: "Poasted",
            PfeVg: "error-text",
            pTkzA: function(e, n) {
                return e !== n
            },
            vrYco: "oHdmi",
            QfQmt: function(e, n, t) {
                return e(n, t)
            },
            CKugu: "search_txt",
            fLCTi: function(e, n) {
                return e(n)
            },
            Jisrr: "iSKyK",
            VTpKm: "btn-download",
            vLhoz: "1|4|3|0|2",
            Yxylx: ".media-heading",
            sfvdg: "No info Preset",
            NMwvL: "#txt-url",
            GICiL: function(e, n) {
                return e(n)
            },
            xklyA: "GEtting res",
            LiCUk: function(e, n) {
                return e(n)
            },
            KdfAm: "#btn-submit",
            Zcter: function(e, n) {
                return e(n)
            },
            NBtPO: "Got Res",
            MxnLc: "#video_title",
            eGeNK: "table",
            rMiyI: function(e, n) {
                return e(n)
            },
            AKyLq: "#A_downloadUrl",
            JDSCx: function(e, n) {
                return e(n)
            },
            TNepv: "Done",
            uxlwP: "#myModalLabel",
            kYoNc: function(e, n) {
                return e !== n
            },
            cFKoE: "mRtqy",
            UzTKA: "texturl",
            WPvXN: "convert1",
            sMcYn: "this",
            ROLvY: "Searching",
            YyXdY: function(e, n) {
                return e == n
            },
            AzLhT: "form-app-root",
            HSFIj: "loaded",
            FEsvJ: function(e, n) {
                return e(n)
            },
            vLiHO: "#download-720-MP4",
            AvRDP: function(e, n) {
                return e(n)
            },
            ahaME: function(e, n) {
                return e(n)
            },
            UFNjk: "mkgvl",
            YPhgx: function(e, n, t) {
                return e(n, t)
            },
            QxZav: function(e, n, t) {
                return e(n, t)
            },
            WEXVM: function(e, n, t, r, o) {
                return e(n, t, r, o)
            },
            KSncV: function(e, n, t) {
                return e(n, t)
            },
            hQmbV: function(e, n) {
                return e(n)
            },
            JWfTN: function(e, n) {
                return e || n
            },
            BUkdJ: function(e, n) {
                return e(n)
            },
            rUosi: "KusiM",
            dxWot: "wakMq",
            eKhif: "clearfix",
            OvIEE: function(e, n) {
                return e != n
            },
            cMImP: "DxbvQ",
            zgkyv: "INPUT",
            wVTYE: "IgcLR",
            sQvWa: "Close player page",
            jWgiJ: function(e, n, t) {
                return e(n, t)
            },
            LgnHf: "Skipping ad :>",
            qrelv: "stYeX",
            UoJol: function(e, n) {
                return e + n
            },
            KiyDW: "sFDSD",
            uRFoR: function(e, n) {
                return e(n)
            },
            wFdDq: "DvGUN",
            fYRYR: "VvVFS",
            erQUJ: "#secondary.ytd-watch-flexy",
            froYx: function(e, n) {
                return e + n
            },
            PJFOo: "https://loader.to/api/card2/?url=",
            OAJbe: "Added That Thing",
            kvtas: function(e, n) {
                return e(n)
            },
            tFejm: function(e, n) {
                return e(n)
            },
            CaDBr: "yt-button-view-model#dismiss-button",
            OQHIh: "ytp-ad-button-icon",
            XjZyd: "Unmuted video",
            njEoL: function(e, n) {
                return e !== n
            },
            IMXpH: "xTTpu",
            kZZKD: "BovVH",
            hMVNI: "Failed unmuting",
            wMOmA: "#song-video",
            VCprb: "#ytd-player",
            fRAui: function(e, n) {
                return e && n
            },
            zzztT: "Fixed playBack",
            HLmmB: "watch",
            VHXcN: "https://onlymp3.app",
            JHrCp: "/watch?=",
            edOHx: function(e, n) {
                return e == n
            },
            RYzCg: "fastdl.app",
            CWInR: function(e, n) {
                return e == n
            },
            zJJKD: "soundcloud.com",
            KIcKa: function(e, n) {
                return e == n
            },
            uXOZh: "studio.youtube.com",
            kTcJD: function(e, n) {
                return e === n
            },
            TCJib: "ZFSfH",
            LfzrV: function(e, n) {
                return e == n
            },
            oqXFN: "Insta ballz",
            eQXnh: "sclouddownloader.net",
            LHwGW: function(e, n) {
                return e != n
            },
            VECLO: function(e, n) {
                return e(n)
            },
            TIvba: function(e, n, t) {
                return e(n, t)
            },
            RkszN: "updated",
            wnyjW: function(e, n) {
                return e == n
            },
            CtIyT: function(e, n) {
                return e + n
            },
            dDtgi: function(e, n) {
                return e == n
            },
            zrJjA: "qdownloader.cc",
            uJSBy: function(e, n) {
                return e == n
            },
            nKxAg: "snapsave.io",
            FUpDG: "ajXVW",
            mUbKM: function(e, n) {
                return e == n
            },
            GplFX: "clips.twitch.tv",
            XkeqW: function(e, n) {
                return e !== n
            },
            RhuvL: "bOwXu",
            sMTwM: function(e, n) {
                return e != n
            },
            oTPmW: "clip",
            vjcJP: "User isnt wathcing a clip",
            dNzcc: function(e, n) {
                return e == n
            },
            hHczb: "clipr.xyz",
            TAeQR: "tubemp4.is",
            zvVuc: function(e, n) {
                return e(n)
            },
            DmYpW: "PlayList MP3",
            vEAHR: "PlayList MP4",
            gclrG: "Get MP4",
            MAotK: "white",
            XwEjS: "tt1",
            oqhmM: "tiktok",
            VTYTY: "onlymp3.app",
            JUjpr: "onlymp3.to",
            WWNgx: "www.yt2conv.com",
            rBhym: "Getting MP4",
            VzsYf: function(e, n, t) {
                return e(n, t)
            },
            qtqLF: "yt5s.biz",
            NGnNm: "sss.instasaverpro.com",
            rsCjY: "en3.onlinevideoconverter.pro",
            amfYr: function(e, n, t) {
                return e(n, t)
            },
            EJaFx: function(e, n, t) {
                return e(n, t)
            },
            auybN: function(e, n) {
                return e !== n
            },
            WRBoy: "MKyXv",
            sfshf: function(e, n, t) {
                return e(n, t)
            },
            qAZSx: "qGswr",
            lzxBd: function(e, n, t) {
                return e(n, t)
            },
            tFcsQ: "keypress",
            srZyw: "/api/",
            sibRi: "MDpXP",
            gVvtW: "trustedHTMLPolicy",
            WnXZw: "text/css",
            Nsphz: function(e, n) {
                return e + n
            },
            icZVJ: "cardApiIframe",
            NlCYZ: "100%",
            AYmWF: "script",
            FzUwV: "https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.9/iframeResizer.min.js",
            HdGtx: "div",
            WfJwN: function(e, n) {
                return e(n)
            },
            WRbSs: function(e, n) {
                return e(n)
            },
            LOFgK: function(e, n, t) {
                return e(n, t)
            }
        };
        class n {
            static get br() {
                var t = {
                    TKnsr: function(n, t) {
                        return e.TUjun(n, t)
                    },
                    AMCIC: e.Tgtwm
                };
                if (!e.SBuMd(e.YglwH, "RVREK")) return new n("br");
                if (!U[H] && !I[P] || N) {
                    Y.log("download", D, V), R[B] = e.lbblM(K, J, Z, !0, !!X), Q.addEventListener(e.hSNSq, (function(e) {
                        r[ve].close()
                    }));
                    var r = e.pNOAz(ie, (e => {
                        (!r[ve] || ye[be].closed) && (hk[hS] = null, t.TKnsr(hX, r), hr.log(hx, t.AMCIC))
                    }), 300)
                }
            }
            constructor(n, o) {
                this.element = n.constructor.name.includes("HTML") && n || function() {
                    var n = {
                        mlTjk: function(n) {
                            return e.hUkLH(n)
                        }
                    };
                    if ("TnuyG" === e.SjXmj) {
                        for (let e in arguments[1]) arguments[0].setAttribute(e, arguments[1][e]);
                        return arguments[0]
                    }
                    return t(), void n.mlTjk(r)
                }(document.createElement(arguments[0]), arguments[1])
            }
            style(n) {
                for (let t in n)
                    if (e.GSnuW == e.GSnuW) this.element.style[t] = n[t];
                    else try {
                        return o.querySelector("div.x78zum5.xdt5ytf.x1iyjqo2.xs83m0k.x2lwn1j.x1odjw0f.x1n2onr6.x9ek82g.x6ikm8r.xdj266r.x11i5rnm.x4ii5y1.x1mh8g0r.xexx8yu.x1pi30zi.x18d9i69.x1swvt13 > ul > div:nth-child(3) > div > div").children[0].innerText.split("\n")[1]
                    } catch {
                        return [...c.querySelectorAll(".xt0psk2.xvs91rp.xo1l8bm.x5n08af.x18hxmgj")].pop().innerText.split("\n")[0]
                    }
                    return this
            }
            append(n, ...t) {
                this.element.append(n.element || n), console.log("T:", {
                    targets: t,
                    fe: t && t.forEach
                });
                for (let n = 0; e.QtefJ(n, t.length); n++) {
                    let e = t[n];
                    console.log("Appending:", {
                        element: e,
                        target: this
                    }), this.element.append(e.element || e)
                }
                return this
            }
            appendTo(n) {
                return (n.element || e.HISDq(typeof n, "string") ? document.querySelector(n) : n).append(this.element), this
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
                if (!e.SBuMd("otpZa", "otpZa")) return this.element[arguments[0]];
                e.OmSeH(r, o.href, i.name)
            }
            get children() {
                var t = {
                    woWUW: "btn-download",
                    uolsM: e.vCpsh,
                    qlhYh: function(e, n) {
                        return e < n
                    },
                    HsWDF: e.fFPFr,
                    fkNRj: function(e, n) {
                        return e !== n
                    },
                    ZcKET: e.NZRvO,
                    zNVqg: e.PDRja,
                    dXYwZ: function(n, t) {
                        return e.UAYaP(n, t)
                    },
                    ioeXH: e.GFyDf
                };
                if ("XgkEt" === e.qAEhH) return new class {
                    constructor(r) {
                        var l = {
                            DUYPJ: function(n) {
                                return e.JHCYI(n)
                            },
                            dfzTP: e.nsUei,
                            atFKB: e.xdVlk,
                            CvVsj: function(n, t, r) {
                                return e.pNOAz(n, t, r)
                            },
                            APzUW: function(n, t) {
                                return e.nWMJv(n, t)
                            },
                            iWqOu: e.GaJJP
                        };
                        if (e.OOcLg != e.OOcLg) {
                            o();
                            if (!l.DUYPJ(i)) throw l.dfzTP;
                            return c.log(l.atFKB), u()
                        }
                        for (var a = 0; a < r.length; a += 1) {
                            if (e.UAYaP(e.nlBWK, e.tKcvk)) throw new n(t.uolsM);
                            this[a] = r[a]
                        }
                        Object.defineProperty(this, e.HEXPy, {
                            get: function() {
                                if (l.APzUW(l.iWqOu, "iUngx")) return r.length;
                                var e = {
                                    ZqAfy: function(e) {
                                        return l.DUYPJ(e)
                                    }
                                };
                                l.CvVsj(c, (function() {
                                    d.value = h, e.ZqAfy(a), p()
                                }), {
                                    callback() {}
                                })
                            }
                        }), Object.freeze(this)
                    }
                    item(e) {
                        return null != this[e] ? this[e] : null
                    }
                    namedItem(e) {
                        var n = {
                            tFcvj: function(e, n) {
                                return t.qlhYh(e, n)
                            },
                            nAphy: t.HsWDF
                        };
                        if (t.fkNRj(t.ZcKET, t.zNVqg)) {
                            for (var r = 0; t.qlhYh(r, this.length); r += 1)
                                if (t.dXYwZ(this[r].id, e) || t.dXYwZ(this[r].name, e)) return this[r];
                            return null
                        }
                        this.element.append(a.element || s), f.log("T:", {
                            targets: d,
                            fe: h && r.forEach
                        });
                        for (let e = 0; n.tFcvj(e, v.length); e++) {
                            let t = A[e];
                            j.log(n.nAphy, {
                                element: t,
                                target: this
                            }), this.element.append(t.element || t)
                        }
                        return this
                    }
                    get toArray() {
                        if (!t.fkNRj(t.ioeXH, t.ioeXH)) return [...this];
                        r.setAttribute(o.name, i.value)
                    }
                }([...this.element.children]);
                n.getElementById(t.woWUW).click()
            }
        }

        function t() {
            try {
                return document.querySelector("#app > div.css-14dcx2q-DivBodyContainer.e1irlpdw0 > div:nth-child(4) > div > div.css-1qjw4dg-DivContentContainer.e1mecfx00 > div.css-1stfops-DivCommentContainer.ekjxngi0 > div > div.css-1xlna7p-DivProfileWrapper.ekjxngi4 > div.css-1u3jkat-DivDescriptionContentWrapper.e1mecfx011 > div.css-1nst91u-DivMainContent.e1mecfx01 > div.css-bs495z-DivWrapper.e1mzilcj0 > div > div.css-1d7krfw-DivOverflowContainer.e1mzilcj5 > h1").innerText.replace(e.mfFyD, "")
            } catch {
                try {
                    return document.querySelector(e.bmVzD).innerText.replace(e.mfFyD, "")
                } catch (n) {
                    return "uDiRR" === e.SDWed && (e.DjnIE(O, e.JogJd, e.smFXB) ? O(e.JogJd, e.smFXB).innerText : document.querySelector(e.YZxED).innerText.replace(e.mfFyD, ""))
                }
            }
        }

        function r() {
            var t = {
                LIHVK: e.QMznx,
                zulQR: ".mp3"
            };
            e.BJeQI(e.lHDbE, e.lHDbE) ? n.log("buttons are gone?!?!") : (e.TUjun(get_aria_label, "Why this ad?").click(), setTimeout((() => {
                if (e.BJeQI("wNBNT", e.eWnXA)) document.querySelector(e.MCaBl).click(), e.OmSeH(setTimeout, (() => {
                    document.querySelector(t.LIHVK).click()
                }), 1e3);
                else {
                    let e = o.createElement("a");
                    e.download = i + t.zulQR, e.href = c, u.body.appendChild(e), e.click(), e.remove()
                }
            }), 1e3))
        }
        _element = _e = n, setElement2 = function(t) {
            var r = {
                YKDQo: e.CHRPe
            };
            if (!e.xgHFH("iYhpS", "jGRMO")) return t.match(/(?<host>https?\:\/\/www\.tiktok\.com)\/(?<username>@[^\/]+)\/video\/(?<videoID>\d+)/i).groups;
            n.warn(r.YKDQo)
        };
        var o = e.VHXcN,
            i = e.JHrCp;

        function c(n, t, r = !1) {
            var o = {
                dfdrC: function(n, t) {
                    return e.wbnUg(n, t)
                },
                LzoyH: function(n) {
                    return e.hUkLH(n)
                },
                owZFn: function(n, t) {
                    return e.wbnUg(n, t)
                },
                Tezfx: "buttons are gone?!?!",
                cotgZ: function(n) {
                    return e.JHCYI(n)
                },
                bJBwE: function(e) {
                    return e()
                },
                TtoIR: function(n) {
                    return e.JvIDR(n)
                },
                AeYXQ: function(n, t) {
                    return e.UAYaP(n, t)
                },
                McdSD: e.FEDVq,
                WPxKp: e.hvFYW,
                mgJcj: function(e, n) {
                    return e(n)
                }
            };
            if (e.XoPfq(e.HYYyU, "dFXmn")) {
                var i = addEventListener(n, ((...e) => {
                    var n = {
                        QJmty: function(e) {
                            return o.bJBwE(e)
                        },
                        fDqfy: function(e) {
                            return o.TtoIR(e)
                        }
                    };
                    o.AeYXQ(o.McdSD, o.WPxKp) ? (o.dfdrC(w, o.LzoyH(v)) && F() ? (V.log("Added playlist buttons"), R((() => {
                        n.QJmty(re).append(oe.br.element), n.fDqfy(ie).append(ae.element), se().append(fe.element)
                    }), 100)) : o.owZFn(H, o.LzoyH(I)) && !P() && re.log(o.Tezfx), Y = o.cotgZ(D)) : (t(...e), r && o.mgJcj(removeEventListener, i))
                }), !0);
                return i
            }
            var d = new c(u.querySelector(e.fcDKt)),
                h = new l(e.fmjiF, {
                    id: e.rdUhO
                }).set("innerText", e.ljusf).on("click", a),
                m = new s(e.fmjiF, {
                    id: e.vmRmN
                }).set(e.YAgnf, e.bmUZH).on(e.GnSuj, f);
            d.append(h, m)
        }

        function u(n) {
            e.WUnif(typeof jQuery, e.gwXZM) && e.yQKYs(n, jQuery) && (n = n[0]);
            var t = n.getBoundingClientRect();
            return e.IwheX(t.top, e.ffrEz(0, (window.innerHeight || document.documentElement.clientHeight) / 2)) && e.IwheX(t.left, 0) && e.gbNLd(t.bottom, e.EOdSa(window.innerHeight || document.documentElement.clientHeight, e.auPWy(window.innerHeight || document.documentElement.clientHeight, 2))) && e.NXoOC(t.right, window.innerWidth || document.documentElement.clientWidth)
        }

        function l(n, {
            callback: t,
            int: r
        }) {
            var o = {
                GQWmf: function(n, ...t) {
                    return e.zrwhY(n, ...t)
                },
                KeYgW: function(e, n) {
                    return e === n
                },
                eNvno: function(n, t) {
                    return e.fqFUu(n, t)
                },
                mtKKH: e.fbuRW,
                XGVDn: function(n) {
                    return e.uTgof(n)
                }
            };
            !t && (t = function() {}), !r && (r = 100), console.log({
                f: n,
                callback: t,
                int: r
            });
            try {
                if (e.mItum(e.PpJAg, "AOvzn")) {
                    var u = e.yzCzA(i, c, ((...e) => {
                        o.GQWmf(u, ...e), f && o.GQWmf(d, u)
                    }), !0);
                    return u
                }
                return e.AMVZl(n), void e.JvIDR(t)
            } catch (u) {}
            var l = e.SHaYP(setInterval, (() => {
                var e = {
                    QPGVX: function(e, n) {
                        return o.KeYgW(e, n)
                    },
                    uIMgf: "input"
                };
                try {
                    if (o.eNvno(o.mtKKH, o.mtKKH)) n(), o.XGVDn(t), o.GQWmf(clearInterval, l);
                    else {
                        var r = new s(f, {
                            bubbles: !0,
                            isTrusted: !0
                        });
                        d["on" + h] && m["on" + p](r), e.QPGVX(g, e.uIMgf) && (L.value = A), F.dispatchEvent(r)
                    }
                } catch (r) {}
            }), e.zjGmE(r, 100));
            return l
        }

        function a(n) {
            return e.xgHFH(n.offsetParent, null)
        }

        function s(n) {
            return e.MABcq(e.wYMog, e.wYMog) ? [...this] : n.parentNode
        }

        function f() {
            return e.EhpTn(get_aria_label, "Go back") ? e.QAXrV(get_aria_label, e.Tqlob).click ? e.VEKNt(get_aria_label, e.Tqlob) : document.querySelector("._afxv") : document.querySelector(e.OrXEz)
        }

        function d() {
            return e.YVZfC(get_aria_label, e.hxCsa) && e.EhpTn(get_aria_label, "Next").click ? e.xYHGO(get_aria_label, e.hxCsa) : document.querySelector(e.cNeCh)
        }

        function h() {
            if ("sPcin" !== e.Cipxq) e.OmSeH(r, (e => e.href)((e => (e.host = "clipr.xyz", e))(new o(i.href))), e.mnBgI);
            else try {
                return document.querySelector(e.JAfDi).children[0].innerText.split("\n")[1]
            } catch {
                return [...document.querySelectorAll(e.Ddaxv)].pop().innerText.split("\n")[0]
            }
        }

        function m() {
            var n = {
                JrZKf: "undefined",
                TlILX: function(n, t) {
                    return e.xYHGO(n, t)
                },
                WQMnl: function(n, t) {
                    return e.zrwhY(n, t)
                },
                nuRNg: function(e, n) {
                    return e === n
                },
                KsdbZ: e.VkbRc,
                nuESf: e.hEpdG,
                sNOGT: e.URcmU,
                ssxOG: function(n, t, r) {
                    return e.DjnIE(n, t, r)
                },
                qPPjI: function(n, t) {
                    return e.EOdSa(n, t)
                },
                rblFP: e.OGZEJ,
                ZBrdi: function(n, t) {
                    return e.zrwhY(n, t)
                },
                JkUWC: "Got"
            };
            if (e.uXxpu === e.UHyYQ) {
                for (var t = 0; e.QtefJ(t, this.length); t += 1)
                    if (e.avqNG(this[t].id, o) || e.WUnif(this[t].name, i)) return this[t];
                return null
            }
            if (location.href.includes(e.FkHvo)) {
                let t = e.hRIGD(open, e.DOUjg, location.href, "width=400,height=500");
                var r = GM_addValueChangeListener("instaURL", (function(e, o, i, c) {
                    if (!n.nuRNg("PJMuV", n.KsdbZ)) {
                        let e = typeof d != n.JrZKf ? h : m.querySelectorAll;
                        return p ? [...o.querySelectorAll(j)].filter((n => !(null === e.offsetParent)))[0] : (n => e.keys(n).length ? n : null)(n.TlILX(e, w) ? n.TlILX(e, v).length ? n.WQMnl(e, F)[0] : e(L) : null)
                    }
                    if (i)
                        for (var u = n.nuESf.split("|"), l = 0;;) {
                            switch (u[l++]) {
                                case "0":
                                    GM_setValue(n.sNOGT, null);
                                    continue;
                                case "1":
                                    n.ssxOG(downloadFile_, i, n.qPPjI(document.title, n.rblFP));
                                    continue;
                                case "2":
                                    n.ZBrdi(GM_removeValueChangeListener, r);
                                    continue;
                                case "3":
                                    console.log(n.JkUWC, {
                                        a: e,
                                        b: o,
                                        c: i,
                                        d: c
                                    });
                                    continue;
                                case "4":
                                    t.close();
                                    continue
                            }
                            break
                        }
                }))
            }
        }
        async function p() {
            var s = {
                QrReq: e.yfFiv,
                FVXLi: function(e, n) {
                    return e(n)
                },
                STqMn: function(n, t) {
                    return e.XMQYu(n, t)
                },
                rhAtd: function(n, t) {
                    return e.xYHGO(n, t)
                },
                Zxvbg: e.vPUXY,
                qMjzV: function(n, t) {
                    return e.BpgPv(n, t)
                },
                IOzEo: function(n, t) {
                    return e.bbFoZ(n, t)
                },
                qhAZY: e.cnoPV,
                QQkbT: function(n, t, r, o) {
                    return e.yzCzA(n, t, r, o)
                },
                CwhnL: function(e, n) {
                    return e + n
                },
                KNoLC: e.VdoLn,
                EUWzo: e.OGZEJ,
                NZNwV: e.dfEsB,
                orLcf: function(e, n) {
                    return e + n
                },
                QykId: function(n, t) {
                    return e.mItum(n, t)
                },
                tlIED: e.bAxHG,
                zCqlO: e.LGyhO,
                HeNjM: function(n, t, r) {
                    return e.FnGhB(n, t, r)
                },
                lrEtV: e.qztwp,
                fOnvs: e.yRmQY
            };
            if (e.ZHRwM("kksRo", e.LpyzL)) {
                for (var y = e => new Promise((n => setTimeout(n, e))), b = new Set, T = {}; f();)
                    if (e.VYAfo(e.QUWsT, e.QUWsT)) !w.querySelector(s.QrReq) && (s.FVXLi(v, !0), F.parentNode.prepend(L), A.prepend(j.element), z.log("Added That Thing")), s.STqMn(O(G.href), W) && (s.rhAtd(U, !0), H.set("src", I), P.log(s.Zxvbg), N = s.rhAtd(Y, D.href));
                    else if (await y(100), e.yaTVR(f)) e.USxzA(f).click();
                else {
                    if (!e.VYAfo(e.nONvg, e.nONvg)) {
                        await y(1e3);
                        break
                    }
                    s.qMjzV(o, i), s.IOzEo(c, u)
                }[...e.hUkLH(getInstalImages)].forEach((e => {
                    if (s.QykId(s.tlIED, s.zCqlO)) {
                        var {
                            data: {
                                href: n,
                                links: t,
                                title: r,
                                length: o,
                                id: i,
                                mp4: c,
                                info: {
                                    username: u
                                }
                            }
                        } = h;
                        if (m.log(s.qhAZY, {
                                href: n,
                                title: r,
                                length: o,
                                id: i,
                                links: t,
                                mp4: c
                            }, p), "https://savetik.co" == g.origin) r = W, s.QQkbT(U, c ? t[0] : t.pop(), s.CwhnL(s.CwhnL(s.CwhnL(u, s.KNoLC), r), c ? s.EUWzo : s.NZNwV), H);
                        else {
                            if (I) {
                                let e = R.createElement("a");
                                e.download = s.orLcf(r, s.NZNwV), e.href = n, B.body.appendChild(e), e.click(), e.remove()
                            } else Y(n);
                            D[V] = n
                        }
                    } else {
                        let n = s.HeNjM(findhref2, e, s.lrEtV)[0];
                        b.add([n.src, n.getAttribute(s.fOnvs)])
                    }
                })), e.JHCYI(d).click();
                try {
                    e.puCJT(d).click()
                } catch (e) {}
                for (; e.SCQqC(d);)
                    if (e.vfSyn(e.Aayak, e.OMQZJ)) e.vLyoS(o, i, c, null, u);
                    else {
                        await e.lRCOe(y, 300), [...e.fEsAx(getInstalImages)].forEach((t => {
                            if (!e.WVOry(e.FRBth, e.gjdXK)) return new n("br"); {
                                let n = e.SHaYP(findhref2, t, e.qztwp)[0];
                                b.add([n.src, n.getAttribute(e.yRmQY)])
                            }
                        }));
                        try {
                            e.JHCYI(d).click()
                        } catch (e) {}[...b].length
                    }
                for (; await e.fcPTg(y, 100), e.SCQqC(f);) e.uTgof(f).click();
                [...b].forEach((e => {
                    T[e[0]] = e[1]
                })), (b = Object.keys(T).map((e => ({
                    src: e,
                    name: T[e]
                })))).forEach((n => {
                    if (!e.SuMsE("FKetQ", "gJAXi")) return this.element["on" + t] = r, this;
                    var o = new URL(n.src).pathname.split(".").pop();
                    e.DjnIE(L, n.src, n.name + "." + o)
                })), console.log("done", b)
            } else {
                const e = i.createElement("a");
                e.href = c, e.download = u, l.body.appendChild(e), e.click(), a.body.removeChild(e)
            }
        }

        function g() {
            e.PBWYM(p).then(console.log, console.warn)
        }
        setElement = function(n) {
            return !(!e.TUjun(String, n).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/) || !e.HISDq(e.EhpTn(String, n).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/)[8].length, 11)) && e.TUjun(String, n).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/)[8]
        }, findhref2 = function(n, t) {
            var r = {
                    aXpPw: function(n, t) {
                        return e.kviCd(n, t)
                    },
                    WMDBa: ".media-heading",
                    yzZwS: "Posted",
                    BIMoF: function(n, t) {
                        return e.zjGmE(n, t)
                    },
                    YYzwa: function(n, t) {
                        return e.tgrNQ(n, t)
                    },
                    aUpJO: function(n, t) {
                        return e.ZKKOy(n, t)
                    },
                    Bjplz: function(n, t) {
                        return e.SBuMd(n, t)
                    },
                    wpWVF: "OAZxo",
                    jVWfW: e.bTvbO
                },
                d = [];
            return function e(n) {
                var h = {
                    vugmo: function(e, n) {
                        return r.aXpPw(e, n)
                    },
                    FeOFk: "jbwXd",
                    rBrdC: r.WMDBa,
                    oQSEF: r.yzZwS,
                    GIBKE: function(e, n) {
                        return r.BIMoF(e, n)
                    },
                    wwgHQ: function(e, n) {
                        return e(n)
                    }
                };
                if (r.YYzwa(n.tagName.toLowerCase(), r.aUpJO(t, "a"))) {
                    if (d.push(n), n.children.length)
                        if (r.Bjplz(r.wpWVF, "lcNQV"))(n = n.children).forEach = [].forEach, n.forEach((n => {
                            h.vugmo(h.FeOFk, "PGDNe") ? o.log({
                                a: i,
                                b: c,
                                c: u
                            }) : e(n)
                        }));
                        else {
                            var m = c(h.rBrdC)[0].innerText,
                                p = {
                                    id: l,
                                    href: u.href,
                                    title: m,
                                    length: {}
                                };
                            a.log(h.oQSEF), h.GIBKE(s, f).postMessage(p, "*")
                        }
                } else if (n.children.length) {
                    if (r.Bjplz(r.jVWfW, r.jVWfW)) return this.element[arguments[0]];
                    (n = n.children).forEach = [].forEach, n.forEach((n => {
                        h.wwgHQ(e, n)
                    }))
                }
            }(n), d
        }, getInstalImages = function() {
            return document.querySelectorAll(e.wmTDb)
        }, getInstaVideo = function() {
            return document.querySelector(e.hhzuu)
        }, downloadVideoFromBlob = function(t, r) {
            var o = {
                LJkpk: e.HOFLT,
                QOafp: e.fmjiF,
                GoYFc: e.YAgnf,
                cdOqR: e.xyujS,
                ZjiAT: "click",
                MjEtp: function(e, n) {
                    return e !== n
                },
                StXqw: e.bSLzU,
                XWeqI: function(n, t) {
                    return e.dqckL(n, t)
                },
                tnkDy: e.vCpsh,
                hiPAh: e.QqDPj,
                wtlhe: e.ThBLh,
                FZSiL: e.hUizc,
                WihrI: function(e, n) {
                    return e + n
                },
                SBdVs: ".mp4",
                CAsso: e.CuIZa
            };
            if (t && t.src && t.src.startsWith(e.vAHpw)) {
                const n = t.captureStream(),
                    i = new MediaRecorder(n),
                    c = [];
                i.ondataavailable = e => {
                    if (o.MjEtp(o.StXqw, "LxloI")) e.data.size > 0 && (c.push(e.data), console.log(e.data));
                    else {
                        var n = {
                            KZFje: function(e, n) {
                                return e(n)
                            },
                            sAWNI: o.LJkpk,
                            kdTqV: function(e, n, t, r, o, i, c) {
                                return e(n, t, r, o, i, c)
                            }
                        };
                        f.log(d), h.append(new m("br").element);
                        var t = new p(o.QOafp).set(o.GoYFc, o.cdOqR).on(o.ZjiAT, (function(e) {
                            n.KZFje(t, n.sAWNI);
                            const {
                                id: r,
                                href: o,
                                isShort: i
                            } = n.KZFje(z, e.target.parentElement.parentElement).map((n => ({
                                href: n.href,
                                short: n.href.includes("/short"),
                                id: e(n.href)
                            }))).filter((e => e.id))[0];
                            n.kdTqV(G, r, !1, !0, !1, !1, i ? new W(o) : null)
                        }));
                        t.append(t.element)
                    }
                }, i.onstop = () => {
                    if (o.hiPAh === o.wtlhe) {
                        if (!o.XWeqI(a, s)) throw new v(o.tnkDy);
                        const e = d.createElement(h.tagName);
                        for (let n of F.attributes) e.setAttribute(n.name, n.value);
                        return e.style.cssText = p.style.cssText, e.className = g.className, e.innerHTML = w.innerHTML, e
                    } {
                        const e = new Blob(c, {
                                type: "video/mp4"
                            }),
                            n = URL.createObjectURL(e),
                            t = document.createElement("a");
                        t.style.display = o.FZSiL, t.href = n, t.download = o.WihrI(r, o.SBdVs), document.body.appendChild(t), t.click(), document.body.removeChild(t), URL.revokeObjectURL(n)
                    }
                }, i.start(), setTimeout((() => {
                    i.stop()
                }), e.pwZWD(t.duration, 1e3))
            } else e.fqFUu("FMTyr", e.bisGG) ? n.warn(o.CAsso) : console.error("Invalid video element or source.")
        }, console.log("A?");
        const w = e => new Promise((n => setTimeout(n, e)));
        if (e.edOHx(document.domain, e.RYzCg)) onload = async function() {
            var n = {
                NGCQw: function(n, t) {
                    return e.sfMKN(n, t)
                },
                jLhUY: function(e, n) {
                    return e === n
                },
                XsmGt: "focus",
                rFBHU: e.siyEc,
                RfhzY: e.VOFiq
            };
            if (e.MABcq("sKyxi", "sKyxi")) t.value = r;
            else {
                const t = {
                    url: name,
                    input: null
                };
                var o = !1;
                for (e.laXAu(setTimeout, (() => {
                        o = !0
                    }), 2e4); !document.querySelector(e.ItDgo);)
                    if (await e.KHfvX(w, 0), o) throw "Cant find input";
                t.input = document.querySelector(e.ItDgo), console.log(e.Xuoui), e.pNOAz((function(e, t) {
                    [n.XsmGt, "input", n.rFBHU, n.RfhzY].forEach((r => {
                        let o = new Event(r, {
                            bubbles: !0,
                            isTrusted: !0
                        });
                        e["on" + r] && e["on" + r](o), n.jLhUY(r, "input") && (e.value = t), e.dispatchEvent(o)
                    }))
                }), t.input, t.url), document.querySelector(e.WptIS).click(), e.SHaYP(GM_setValue, e.URcmU, await e.JsLgH((async function(e) {
                    for (; !document.querySelector(e);) await n.NGCQw(w, 0);
                    return document.querySelector(e)
                }), e.hmmNo).then((e => e.href)))
            }
        };
        else {
            if (e.CWInR(document.domain, e.zJJKD)) return void(getSoundCloadI = function() {
                var n = {
                    oeOWc: function(e, n) {
                        return e instanceof n
                    },
                    rLCJa: e.vCpsh
                };
                _setV("SC", e.iuDuo(getSoundCloudUrl)), open(e.GaAQx, "SC").onclose = function(t) {
                    if (e.ARJRq("KbjQR", e.EwJEr)) {
                        if (!n.oeOWc(a, s)) throw new v(n.rLCJa);
                        const e = d.createElement(h.tagName);
                        for (let n of F.attributes) e.setAttribute(n.name, n.value);
                        return e.style.cssText = p.style.cssText, e.className = g.className, e.innerHTML = w.innerHTML, e
                    }
                    console.log(e.Zekcn)
                }
            });
            if (e.KIcKa(document.domain, e.uXOZh)) {
                if (e.kTcJD(e.TCJib, e.TCJib)) return void
                function() {
                    var t = {
                        wXcrV: e.mKBYX
                    };
                    if ("FWHpq" === e.mgdNS) {
                        var s;
                        e.FnGhB(setInterval, (() => {
                            var n, t = {
                                mVcjN: function(n, t) {
                                    return e.SypvE(n, t)
                                },
                                Vlhdi: e.TeNsD,
                                NVefu: "Public",
                                mKSYG: "Go back",
                                gnMCs: e.OrXEz,
                                WSJXW: function(n, t) {
                                    return e.rWTuw(n, t)
                                },
                                zUxYf: function(e, n) {
                                    return e(n)
                                },
                                ctMwg: e.HOFLT,
                                yONPE: function(e, n) {
                                    return e(n)
                                },
                                NCscw: function(e, n, t, r, o, i, c) {
                                    return e(n, t, r, o, i, c)
                                },
                                kitFU: e.NGKrK,
                                WwETE: function(n) {
                                    return e.fEsAx(n)
                                },
                                sBgLL: function(e, n) {
                                    return e !== n
                                },
                                VARdf: "yhqie",
                                KlOab: "button",
                                BrfrF: "innerText",
                                dHTrm: e.GnSuj
                            };
                            try {
                                [...[...document.querySelectorAll(e.eFaUG)].map((e => [e, [...e.classList]])).filter((e => e[1].includes("ytcp-video-section")))[0][0].children[1].children].map((e => [e, [...e.classList], e.tagName])).filter((e => "YTCP-VIDEO-ROW" == e[2])).filter((e => t.mVcjN(e[0].children[0].querySelectorAll(t.Vlhdi)[0].innerText, t.NVefu))).map((e => e[0].children[0].querySelectorAll(".cell-body.tablecell-visibility.style-scope.ytcp-video-row")[0])).forEach((e => {
                                    var n = {
                                        wBXzU: t.kitFU,
                                        nhEMq: function(e) {
                                            return t.WwETE(e)
                                        }
                                    };
                                    if (t.sBgLL(t.VARdf, t.VARdf)) return r.log("Opening"), o.getElementsByClassName(n.wBXzU)[0].click(), n.nhEMq(i);
                                    console.log(e), e.append(new _e("br").element);
                                    var s = new _e(t.KlOab).set(t.BrfrF, "Get").on(t.dHTrm, (function(e) {
                                        var n = {
                                            mkaiD: function(e, n) {
                                                return e(n)
                                            },
                                            nLYoC: t.mKSYG,
                                            pEdWZ: t.gnMCs
                                        };
                                        if (t.WSJXW("AocRo", "NULKy")) return n.mkaiD(i, n.nLYoC) ? n.mkaiD(c, n.nLYoC).click ? n.mkaiD(u, "Go back") : l.querySelector("._afxv") : a.querySelector(n.pEdWZ);
                                        t.zUxYf(alert, t.ctMwg);
                                        var {
                                            id: r,
                                            href: o,
                                            isShort: s
                                        } = t.yONPE(findhref2, e.target.parentElement.parentElement).map((e => ({
                                            href: e.href,
                                            short: e.href.includes("/short"),
                                            id: setElement(e.href)
                                        }))).filter((e => e.id))[0];
                                        t.NCscw(downloadT, r, !1, !0, !1, !1, s ? new URL(o) : null)
                                    }));
                                    e.append(s.element)
                                })), n = !0
                            } catch {
                                n = !1
                            }
                            s != n && (s = n, console.log(e.FUmYt, n ? e.qTZUf : "Not FOund"))
                        }), 0)
                    } else n.error(t.wXcrV)
                }();
                throw n.getElementById(e.pDdVG).click(), e.FCpFe
            }
            if (e.LfzrV(document.domain, "www.instagram.com")) {
                var v;

                function y() {
                    for (var t = e.aKUQo.split("|"), r = 0;;) {
                        switch (t[r++]) {
                            case "0":
                                var o = new n("button", {
                                    id: e.vmRmN
                                }).set(e.YAgnf, e.bmUZH).on(e.GnSuj, m);
                                continue;
                            case "1":
                                var i = new n(e.fmjiF, {
                                    id: e.rdUhO
                                }).set(e.YAgnf, "Get Images").on("click", g);
                                continue;
                            case "2":
                                var c = new n(document.querySelectorAll(e.iHYhL)[0]);
                                continue;
                            case "3":
                                console.log(e.lyJSh);
                                continue;
                            case "4":
                                c.append(i, o);
                                continue
                        }
                        break
                    }
                }
                return l((function() {
                    e.UAYaP(e.uhZGO, "qGleU") ? document.querySelectorAll(e.iHYhL)[0].children : t.element.querySelector(e.xypKq).innerText = r
                }), {
                    callback: function() {
                        var t = {
                            LkJPG: e.ywrxt,
                            GaESV: function(n) {
                                return e.NtMIf(n)
                            },
                            aVUiw: "._aaqy"
                        };
                        e.aVHzE(y), e.BpgPv(setInterval, (() => {
                            document.querySelector(t.LkJPG) || t.GaESV(y), document.querySelector(t.aVUiw) && !document.querySelector(t.aVUiw).querySelector("#MediaButton") && function() {
                                var t = new n(document.querySelector(e.fcDKt)),
                                    r = new n("button", {
                                        id: e.rdUhO
                                    }).set(e.YAgnf, "Get Images").on(e.GnSuj, g),
                                    o = new n(e.fmjiF, {
                                        id: "MediaButton2"
                                    }).set(e.YAgnf, e.bmUZH).on(e.GnSuj, m);
                                t.append(r, o)
                            }()
                        }))
                    }
                }), void console.log(e.oqXFN)
            }
            if (document.domain == e.eQXnh)(async function() {
                var o = {
                    gHxla: function(n) {
                        return e.JHCYI(n)
                    },
                    HxnCI: function(e, n, t) {
                        return e(n, t)
                    },
                    xNJiK: e.GaAQx,
                    JEgvE: "was clicked",
                    jiKNl: e.LdLYB,
                    Ndxlg: function(e, n) {
                        return e || n
                    },
                    TJLQf: function(e, n) {
                        return e !== n
                    },
                    nSszi: e.WvhFY,
                    Dnerh: function(n, t, r) {
                        return e.kDKaj(n, t, r)
                    },
                    gAGIc: "gwbQW",
                    SMrlc: function(e) {
                        return e()
                    },
                    fAWpQ: function(e, n) {
                        return e(n)
                    },
                    eXDqG: function(n, t) {
                        return e.rjGdU(n, t)
                    },
                    NPwuZ: e.gyooN
                };
                if (e.WVOry(e.MTmvy, e.MTmvy)) i = function() {
                    var e = {
                        xqXjI: "Win closed"
                    };
                    s("SC", o.gHxla(f));
                    var n = o.HxnCI(d, o.xNJiK, "SC");
                    n.onclose = function(t) {
                        n.log(e.xqXjI)
                    }
                };
                else {
                    var h = e.xKBAF(_getV, "sc");
                    async function g(e, i) {
                        var c = {
                            SLzdX: function(e, n) {
                                return o.fAWpQ(e, n)
                            }
                        };
                        if (o.eXDqG(o.NPwuZ, "jzCAS")) {
                            let t = e => new Promise((n => setTimeout(n, e)));
                            return await new Promise((async(r, c) => {
                                var u = {
                                    sRCIk: o.JEgvE,
                                    QVGOc: o.jiKNl,
                                    ipGDD: function(e, n) {
                                        return o.Ndxlg(e, n)
                                    },
                                    IOOwA: "was created"
                                };
                                if (o.TJLQf("rGzzX", o.nSszi)) {
                                    var l = !1;
                                    o.Dnerh(setTimeout, (() => (l = 0, c())), i);
                                    for (; !document.querySelector(e);)
                                        if (await o.gHxla(t), l) {
                                            if ("MmXPD" === o.gAGIc) {
                                                const {
                                                    name: e,
                                                    value: t
                                                } = n;
                                                return {
                                                    name: e,
                                                    value: t
                                                }
                                            }
                                            o.SMrlc(c);
                                            break
                                        }
                                    return o.SMrlc(r)
                                } {
                                    let e = m.call(p, l, w);
                                    return e._click = e.click, e.click = function() {
                                        if (e.log(e, u.sRCIk, e.tagName), "A" == e.tagName) {
                                            K.log(u.QVGOc, e);
                                            let n = e.download,
                                                t = e.href;
                                            J = {
                                                id: new Z(X.href).searchParams.get("v"),
                                                href: t,
                                                title: n
                                            }, u.ipGDD(Q, re).postMessage(oe, "*"), ie()
                                        } else e._click.apply(e)
                                    }, U.log(e, u.IOOwA, e.tagName), e
                                }
                            })).then((e => !0), (e => !1))
                        }
                        c.SLzdX(t, r)
                    }
                    if (e.SypvE(location.pathname, e.QnFTE))
                        for (var v = e.uwKuM.split("|"), y = 0;;) {
                            switch (v[y++]) {
                                case "0":
                                    await e.sfMKN(g, "#trackTitle");
                                    continue;
                                case "1":
                                    console.log(b);
                                    continue;
                                case "2":
                                    for (; !trackTitle.innerText.length;) await e.JsLgH(w, 0);
                                    continue;
                                case "3":
                                    await g("#trackLink");
                                    continue;
                                case "4":
                                    for (; !trackLink.href.length;) await w(0);
                                    continue;
                                case "5":
                                    e.VHDPu(close);
                                    continue;
                                case "6":
                                    e.FnGhB(_setV, e.eUECM, b);
                                    continue;
                                case "7":
                                    var b = {
                                        name: trackTitle.innerText,
                                        href: trackLink.href
                                    };
                                    continue
                            }
                            break
                        } else {
                            if (!e.GuOVB(_getV, "SC")) throw "Bruv";
                            var T = e.jzZkS;
                            e.fQiye;
                            if (await e.laXAu(g, T, 2e3), await g(T, 2e3))
                                if (e.oeiBl == e.oeiBl) {
                                    for (document.querySelector(T).value = h, console.log(e.rTnyy, !!window.formSubmit); e.DCLEQ(typeof formSubmit, "undefined");)
                                        if (e.YHeRh(e.DnaMv, e.VxQBl)) try {
                                            await e.KHfvX(w, 0), console.log(e.rTnyy, formSubmit)
                                        } catch {} else i = !0, c = u[1], l.log(a);
                                    console.log(e.rTnyy, formSubmit), e.FtJpz(formSubmit), console.warn(e.TcBTg), e.SHaYP(setInterval, formSubmit, 1e3)
                                } else n()
                        }
                }
            })().then(console.log, console.warn);
            else {
                if (document.domain == e.ckpTy) {
                    e.LHwGW(location.pathname.split("/")[1], e.VECLO(GM_getValue, "y2mate.nu")) && (e.TIvba(GM_setValue, e.ckpTy, location.pathname.split("/")[1]), console.warn(e.RkszN));
                    let xe = new URL(location.href).searchParams.get("v"),
                        Se = e.wnyjW(new URL(location.href).searchParams.get("s"), 1),
                        Ee = new URL(location.href).searchParams.get(e.OoAIO),
                        ke = new URL(location.href).searchParams.get("useT"),
                        Ce = e.MpJYV(e.CtIyT(xe, Ee), ke);
                    const Me = e => new Promise((n => setTimeout(n, e)));
                    async function b(n, t = 5e3) {
                        let r = !1;
                        for (e.RAQKJ(setTimeout, (() => {
                                console.log("TimeOut for", n), r = !0
                            }), t); !document.querySelector(n) && (console.log("_", n, r), await e.QAXrV(Me, 500), !r););
                        if (console.log(n, r), r) throw "NotFound";
                        return document.querySelector(n)
                    }
                    return void async function() {
                        for (var n = {
                                GIfBW: function(n, t) {
                                    return e.tlHMw(n, t)
                                },
                                mpncG: e.NnMpG,
                                RwPNd: e.vjMjY,
                                vXTXP: e.hZtfp,
                                klSzN: function(n) {
                                    return e.phfRg(n)
                                },
                                FAOlW: function(n, t, r) {
                                    return e.iVqSL(n, t, r)
                                },
                                kyPML: "div",
                                cbPBU: function(e, n) {
                                    return e(n)
                                },
                                pRFaA: e.TtFAa
                            }; e.yKEBb(document.readyState, "complete");) await Me(0);
                        if (xe) {
                            let o = async e => {
                                if (n.GIfBW(n.mpncG, n.RwPNd))
                                    for (var o = n.vXTXP.split("|"), i = 0;;) {
                                        switch (o[i++]) {
                                            case "0":
                                                n.klSzN(close);
                                                continue;
                                            case "1":
                                                var c = n.FAOlW(findhref2, document.forms[0], n.kyPML)[0].innerText;
                                                continue;
                                            case "2":
                                                var u = n.cbPBU(findhref2, document.forms[0])[0].href;
                                                continue;
                                            case "3":
                                                var l = {
                                                    _: Ce,
                                                    id: xe,
                                                    href: u,
                                                    title: c,
                                                    length: {}
                                                };
                                                continue;
                                            case "4":
                                                (opener || window.parent).postMessage(l, "*");
                                                continue;
                                            case "5":
                                                console.log("a", e);
                                                continue;
                                            case "6":
                                                console.log(n.pRFaA, l);
                                                continue
                                        }
                                        break
                                    } else t.value = r
                            };
                            try {
                                await b(e.KIvbS).then((e => {
                                    console.log("e", e), e.value = Se ? "https://www.youtube.com/watch?v=" + xe : "https://www.youtube.com/shorts/" + xe, e.parentElement.children[1].click()
                                })).catch(o), console.log(e.EpabR), await b(e.Sygxc).then((async n => {
                                    for (; document.querySelector("#" + n.id);) await e.EhpTn(Me, 0);
                                    console.log("a_")
                                })).catch(o), console.log("b")
                            } catch (n) {
                                console.warn(e.hPIpv, n)
                            }
                        } else console.warn("No id Found")
                    }().then(console.log, console.warn)
                }
                if (e.dDtgi(document.domain, e.zrJjA)) {
                    const qe = e => new Promise((n => setTimeout(n, e)));
                    async function T(t, r = 2e4) {
                        if (e.djcnn(e.drspk, e.yAVDr)) return c(u) || (function(e, n, t) {
                            e(n, t)
                        }(l, a, s), f); {
                            let o = !1;
                            for (e.FnGhB(setTimeout, (() => {
                                    "MxjxQ" !== e.yaMfR ? n.log("Win closed") : (console.log(e.LpChq, t), o = !0)
                                }), r); !document.querySelector(t);)
                                if (e.HvMYF !== e.tkeMf) {
                                    if (console.log("_", t, o), await e.sfMKN(qe, 500), o) break
                                } else n = !0;
                            if (console.log(t, o), o) throw e.cLRFd;
                            return document.querySelector(t)
                        }
                    }

                    function x(n, o) {
                        var i = {
                            kYZCZ: function(n, t) {
                                return e.VYAfo(n, t)
                            },
                            uelvz: function(n, t) {
                                return e.xgHFH(n, t)
                            },
                            mmnOg: e.XxKeZ,
                            eFWeS: e.aNmEe
                        };
                        if (e.UzVQv("TIOGW", e.AlJAP)) return t(this.toFixed(r));
                        ["focus", e.XxKeZ, e.siyEc, "blur"].forEach((e => {
                            var t = {
                                QJpNX: function(e, n) {
                                    return i.kYZCZ(e, n)
                                }
                            };
                            let r = new Event(e, {
                                bubbles: !0,
                                isTrusted: !0
                            });
                            if (n["on" + e] && n["on" + e](r), i.uelvz(e, i.mmnOg)) {
                                if (i.eFWeS != i.eFWeS) return t.QJpNX(c, u) && (this.body.color = l), a !== s && (this.body.size = f), this;
                                n.value = o
                            }
                            n.dispatchEvent(r)
                        }))
                    }
                    let Fe = document.createElement;
                    document._createElement = function(n, o) {
                        var i = {
                            ymjOs: e.xSNTz,
                            bjBht: e.txrDu,
                            fMnpd: function(n, t) {
                                return e.tgrNQ(n, t)
                            },
                            IHENr: function(n, t) {
                                return e.WVOry(n, t)
                            },
                            Yotdg: e.xsWZc
                        };
                        let c = Fe.call(document, n, o);
                        return c._click = c.click, c.click = function() {
                            if (console.log(c, i.bjBht, c.tagName), i.fMnpd("A", c.tagName))
                                if (i.IHENr(i.Yotdg, i.Yotdg)) t.log("Appended"), r.appendTo(i.ymjOs);
                                else {
                                    console.log("Caught", c);
                                    let e = c.download,
                                        n = c.href;
                                    O = {
                                        id: new URL(location.href).searchParams.get("v"),
                                        href: n,
                                        title: e
                                    }
                                } else c._click.apply(c)
                        }, console.log(c, "was created", c.tagName), c
                    }, async function() {
                        var t = {
                            rEVoQ: e.TZkes
                        };
                        if (!e.ZCYbB(e.BkJKu, "wZmke")) return n.getElementsByClassName(t.rEVoQ)[0]; {
                            if (location.href.includes(e.FjLbv)) throw e.FjLbv;
                            GM_setValue(e.lFzyV, ""), e.WtFQT(GM_addValueChangeListener, e.lFzyV, (async function(n, t, r, o) {
                                console.log({
                                    a: n,
                                    b: t,
                                    c: r,
                                    d: o
                                }), r.includes("video download successful\ncheck downloads folder") && (await e.TaONZ(qe, 1e3), e.ojoDW(close))
                            }));
                            let n = await e.YVZfC(T, "#url"),
                                t = await T(e.ZadFw);
                            id_ = new URL(location.href).searchParams.get("v");
                            let r = "https://www.youtube.com/watch?v=" + id_;
                            e.vCfSS(x, n, r), t.click()
                        }
                    }().then(console.log, (async n => {
                        var t = {
                            Wjgrb: function(n, t, r) {
                                return e.SHaYP(n, t, r)
                            },
                            obyio: "TimeOut for",
                            nCejf: function(n, t) {
                                return e.QAXrV(n, t)
                            },
                            NoriC: function(n, t) {
                                return e.ZCYbB(n, t)
                            },
                            VOkwT: e.USfYy,
                            OWEhF: function(n, t) {
                                return e.yKEBb(n, t)
                            },
                            neKwd: "dlbutton",
                            MwCDp: function(e, n) {
                                return e !== n
                            },
                            YIXMg: "JljKI",
                            kOVPg: function(n, t) {
                                return e.TUjun(n, t)
                            },
                            SeQMh: e.WNKPq
                        };
                        e.GMOWz(e.rTmDa, e.wVfGP) ? n == e.FjLbv && (console.log("Best Quality Video"), await e.lRCOe(T, e.CEPZW).then((e => {
                            var n = {
                                lYrwJ: function(e, n) {
                                    return e < n
                                },
                                nLlPY: "length",
                                QVMZP: function(e, n) {
                                    return t.NoriC(e, n)
                                },
                                bBPZb: t.VOkwT,
                                QSdGQ: function(e, n) {
                                    return t.OWEhF(e, n)
                                },
                                PNlwe: "lPLHu",
                                VSshl: function(e, n, t) {
                                    return e(n, t)
                                },
                                MHqjA: t.neKwd
                            };
                            if (t.MwCDp(t.YIXMg, "JljKI")) {
                                for (var f = 0; n.lYrwJ(f, i.length); f += 1) this[f] = s[f];
                                u.defineProperty(this, n.nLlPY, {
                                    get: function() {
                                        return f.length
                                    }
                                }), a.freeze(this)
                            } else height.selectedIndex = height.options.length - 1, dlbutton.click(), open = window.open, window.open = function(e, n, t) {
                                console.log({
                                    a: e,
                                    b: n,
                                    c: t
                                })
                            }, t.kOVPg(T, t.SeQMh).then((e => {
                                var s = {
                                        yzFsv: function(e, n, r) {
                                            return t.Wjgrb(e, n, r)
                                        },
                                        iHeOw: t.obyio
                                    },
                                    f = "";
                                t.nCejf(setInterval, (t => {
                                    if (n.QVMZP(n.bBPZb, n.bBPZb)) {
                                        var d = new i(c.src).pathname.split(".").pop();
                                        s.yzFsv(u, l.src, a.name + "." + d)
                                    } else n.QSdGQ(f, e.innerText) && (n.QVMZP(n.PNlwe, n.PNlwe) ? (r.log(s.iHeOw, o), i = !0) : (f = e.innerText, n.VSshl(GM_setValue, n.MHqjA, f)))
                                }))
                            }))
                        }))) : (a(e.eUECM), e.gUAFS(s, "sc", e.FtJpz(f)), d || (h = 1, e.pNOAz(m, e.eUECM, (function(e, n, r, o) {
                            v.log({
                                a: e,
                                b: n,
                                c: r,
                                d: o
                            }), r && r.name && t.Wjgrb(L, r.href, r.name)
                        }))), w("https://sclouddownloader.net/"))
                    }))
                } else {
                    if (e.uJSBy(document.domain, e.nKxAg)) {
                        if ("ajXVW" !== e.FUpDG) return !n.closed; {
                            async function S(n, t = 2e4) {
                                var r = {
                                    sDdza: e.LpChq
                                };
                                let o = !1;
                                for (setTimeout((() => {
                                        console.log(r.sDdza, n), o = !0
                                    }), t); !document.querySelector(n) && (console.log("_", n, o), await e.TUjun(w, 500), !o););
                                if (console.log(n, o), o) throw e.cLRFd;
                                return document.querySelector(n)
                            }
                            return _wfs = S, void async function() {
                                if (e.RXLeg(e.DeUEa, e.DeUEa)) {
                                    const e = i.createElement("a");
                                    e.href = c, e.download = u, l.body.appendChild(e), e.click(), a.body.removeChild(e)
                                } else {
                                    var n = await e.GcGaO(S, e.PMgCh, 3e4);
                                    if (n)
                                        if ("OEpvy" !== e.FUGEw) {
                                            console.log(e.ANJpm), id_ = new URL(location.href).searchParams.get("v"), n.value = "https://www.youtube.com/watch?v=" + id_, ksearchvideo(), e.yECLe(setTimeout, ksearchvideo(), 1e3);
                                            var t = await S(e.ywKzh);
                                            await e.YVZfC(S, e.gpjFK);
                                            t.selectedIndex = 0, t.options[0].selected = !0;
                                            for (var s = await e.asaKF(S, e.nEHpu); !(s = await S(e.nEHpu));) await e.TUjun(w, 0);
                                            for (e.xYHGO(convertFile, 0); e.HISDq(s.getAttribute("href"), "#");) await e.AKQfQ(w, 0), s = await S(e.nEHpu);
                                            console.log(s.href);
                                            var f = (await _wfs(e.RMmMI)).querySelector("h3").innerText,
                                                d = {
                                                    id: id_,
                                                    href: s.href,
                                                    title: f,
                                                    length: {}
                                                };
                                            console.log(e.TtFAa, d), e.KpFIb(opener, window).postMessage(d, "*")
                                        } else e.KqULf(r, (e => e.href)(((h = new o(i.href)).host = "clipr.xyz", h)), e.dvpSY);
                                    else e.QAXrV(alert, e.BUouT), console.warn(e.KCaIx)
                                }
                                var h
                            }().then(console.log).catch(console.warn)
                        }
                    }
                    if (e.mUbKM(document.domain, e.GplFX)) {
                        if (e.XkeqW("bOwXu", e.RhuvL)) {
                            var E = {
                                MDRzp: function(n, t) {
                                    return e.HISDq(n, t)
                                },
                                Ytqjd: "Caught"
                            };
                            let Le = s.call(f, d, h);
                            return Le._click = Le.click, Le.click = function() {
                                if (Le.log(Le, "was clicked", Le.tagName), E.MDRzp("A", Le.tagName)) {
                                    G.log(E.Ytqjd, Le);
                                    let e = Le.download,
                                        n = Le.href;
                                    W = {
                                        id: new U(H.href).searchParams.get("v"),
                                        href: n,
                                        title: e
                                    }
                                } else Le._click.apply(Le)
                            }, F.log(Le, e.oxeKX, Le.tagName), Le
                        } {
                            const Ae = e => new Promise((n => setTimeout(n, e)));
                            _wfs = async function(n, t = 2e4) {
                                let r = !1;
                                for (e.RAQKJ(setTimeout, (() => {
                                        var t = {
                                            YNvwR: function(e, n) {
                                                return e(n)
                                            },
                                            ZZOif: function(n, t) {
                                                return e.maLKg(n, t)
                                            },
                                            jjJeM: function(n, t) {
                                                return e.aacsP(n, t)
                                            }
                                        };
                                        if (!e.avqNG(e.HneZn, e.HneZn)) return !(!t.YNvwR(c, u).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/) || !t.ZZOif(t.jjJeM(l, a).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/)[8].length, 11)) && s(f).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/)[8];
                                        console.log(e.LpChq, n), r = !0
                                    }), t); !document.querySelector(n) && (console.log("_", n, r), await e.TaONZ(Ae, 500), !r););
                                if (console.log(n, r), r) throw e.cLRFd;
                                return document.querySelector(n)
                            }, _copyElm = function(n) {
                                if (!e.yQKYs(n, Element)) {
                                    if (e.URpKr(e.SRpfU, e.Flfsz)) throw new Error(e.vCpsh);
                                    if (e.ffOHW(z.origin, O) || G.origin.match(/https?:\/{2}onlymp3\.to/) || W.origin.match(/https?:\/{2}en\.onlymp3\.to/) || U.origin.match(/https?:\/{2}en(\d)\.onlinevideoconverter\.pro/) || e.yCZxt(H.origin, "https://sss.instasaverpro.com") || e.UmcYV(I.origin, e.MDtQK) || e.OOFXG(P.origin, e.GxcKi) || e.yCZxt(N.origin, e.DMYTJ)) {
                                        const {
                                            data: {
                                                href: n,
                                                title: r,
                                                length: o,
                                                id: i,
                                                _: c
                                            }
                                        } = se;
                                        let u = e.Hleex(r, fe ? e.OGZEJ : e.dfEsB);
                                        (t = de.getElementById(c)) && t.remove(), he.log(e.cnoPV, {
                                            href: n,
                                            title: r,
                                            length: o,
                                            id: i,
                                            _: c
                                        }, me), pe.set(e.YAgnf, e.gNHFL), ge.set(e.UAwBo, !1), we ? (Te.log(e.kuGbj), e.kDKaj(hV, n, u)) : e.qUTId(ye, n), be[c] = n
                                    } else ie.log("Unhandled Post", ae)
                                }
                                var t;
                                const r = document.createElement(n.tagName);
                                for (let e of n.attributes) r.setAttribute(e.name, e.value);
                                return r.style.cssText = n.style.cssText, r.className = n.className, r.innerHTML = n.innerHTML, r
                            }, async function() {
                                var n = {
                                    AeHPH: "NCMXR",
                                    cGEen: e.zNLuF,
                                    oWTjF: e.lMxaw,
                                    Cznnw: function(n, t, r) {
                                        return e.kDKaj(n, t, r)
                                    },
                                    NJsOr: e.dvpSY,
                                    qSpeR: function(n, t) {
                                        return e.QAXrV(n, t)
                                    },
                                    SfLjK: "div",
                                    SFyKH: function(n) {
                                        return e.fEsAx(n)
                                    },
                                    sqkGN: function(n, t) {
                                        return e.BJeQI(n, t)
                                    },
                                    yDkap: function(e, n, t) {
                                        return e(n, t)
                                    },
                                    VJoDF: e.gsfYM
                                };
                                location.href;
                                let t = (await e.aacsP(_wfs, ".ScCoreButtonLabel-sc-s7h2b7-0")).parentElement.parentElement.parentElement.parentElement;
                                new _e(e.WHrss(_copyElm, t)).on(e.GnSuj, (function() {
                                    var e;
                                    "GFPlV" === n.AeHPH ? (i = 0, c = 1, u.playbackRate = l, a.log("Fixed playBack")) : open((e => e.href)(((e = new URL(location.href)).host = "clipr.xyz", e)), n.cGEen)
                                })).appendTo(t.parentNode).element.querySelector(e.xypKq).innerText = e.CIHbm, new _e(e.TaONZ(_copyElm, t)).on("click", (function() {
                                    open((e => e.href)((e => (e.host = "clipr.xyz", e))(new URL(location.href))), n.oWTjF)
                                })).appendTo(t.parentNode).element.querySelector(e.xypKq).innerText = e.OpdKj, new _e(_copyElm(t)).on(e.GnSuj, (function() {
                                    n.Cznnw(open, (e => e.href)((e => (e.host = "clipr.xyz", e))(new URL(location.href))), n.NJsOr)
                                })).appendTo(t.parentNode).element.querySelector(e.xypKq).innerText = "480P", new _e(e.aacsP(_copyElm, t)).on(e.GnSuj, (function() {
                                    var e = {
                                        dYyoh: function(e, t) {
                                            return n.qSpeR(e, t)
                                        },
                                        vyBnV: function(e, t, r) {
                                            return n.Cznnw(e, t, r)
                                        },
                                        YrhGT: n.SfLjK,
                                        tgpIN: "Posted",
                                        FIsEb: function(e) {
                                            return n.SFyKH(e)
                                        }
                                    };
                                    if (n.sqkGN("UeOvn", "UeOvn")) {
                                        d.log("a", h);
                                        var t = e.dYyoh(m, p.forms[0])[0].href,
                                            r = e.vyBnV(g, w.forms[0], e.YrhGT)[0].innerText,
                                            o = {
                                                _: v,
                                                id: F,
                                                href: t,
                                                title: r,
                                                length: {}
                                            };
                                        L.log(e.tgpIN, o), (A || j.parent).postMessage(o, "*"), e.FIsEb(z)
                                    } else n.yDkap(open, (e => e.href)((e => (e.host = "clipr.xyz", e))(new URL(location.href))), n.VJoDF)
                                })).appendTo(t.parentNode).element.querySelector(e.xypKq).innerText = e.JUYat, new _e(e.EGjKi(_copyElm, t)).on(e.GnSuj, (function() {
                                    n.Cznnw(open, (e => e.href)((e => (e.host = "clipr.xyz", e))(new URL(location.href))), "VOD")
                                })).appendTo(t.parentNode).element.querySelector(e.xypKq).innerText = e.mnBgI
                            }().catch(console.warn)
                        }
                    } else {
                        if (e.SypvE(document.domain, "www.twitch.tv")) {
                            let [je, ze, Oe, Ge] = location.pathname.split("/");
                            if (e.sMTwM(Oe, e.oTPmW)) return console.warn(e.vjcJP);
                            console.log("User is Watching a CLip");
                            const We = e => new Promise((n => setTimeout(n, e)));
                            async function k(n, t = 2e4) {
                                let r = !1;
                                for (e.DjnIE(setTimeout, (() => {
                                        console.log(e.LpChq, n), r = !0
                                    }), t); !document.querySelector(n) && (console.log("_", n, r), await e.bbFoZ(We, 500), !r););
                                if (console.log(n, r), r) throw e.cLRFd;
                                return document.querySelector(n)
                            }
                            return _wfs = k, _wfs_ = k, _copyElm = function(n) {
                                if (e.GMOWz("QHjAE", e.gtysz)) {
                                    if (!(n instanceof Element)) throw new Error(e.vCpsh);
                                    const o = document.createElement(n.tagName);
                                    for (let i of n.attributes) e.FRxOQ === e.YvmwT ? t.push(r) : o.setAttribute(i.name, i.value);
                                    return o.style.cssText = n.style.cssText, o.className = n.className, o.innerHTML = n.innerHTML, o
                                }
                                t.push(r)
                            }, void async function() {
                                var n = {
                                    yStfi: function(n, t) {
                                        return e.tgrNQ(n, t)
                                    },
                                    ETSzH: function(n, t) {
                                        return e.KpFIb(n, t)
                                    },
                                    ctWEk: function(n, t) {
                                        return e.CMPJN(n, t)
                                    },
                                    qLWnL: e.XcbGw,
                                    ohNDQ: e.afUdJ,
                                    WtQVB: function(n, t, r) {
                                        return e.KqULf(n, t, r)
                                    },
                                    UqZhG: function(n) {
                                        return e.USxzA(n)
                                    },
                                    RGFAy: e.fcDKt,
                                    DtJjq: function(e, n) {
                                        return e(n)
                                    },
                                    whNTg: e.GnSuj,
                                    bxyUW: e.mnBgI,
                                    BLvhJ: function(n, t) {
                                        return e.JuWyr(n, t)
                                    },
                                    OGnmi: "bvhIP",
                                    ERanT: e.xypKq
                                };
                                let t = location.href;
                                await e.poAoy(_wfs, ".Layout-sc-1xcs6mc-0.bMOhzu");
                                let r = [...document.querySelectorAll(e.xrTWG)].filter((e => e.querySelector("button") && !e.querySelector("button").disabled))[0],
                                    o = e.gvSVZ;
                                [{
                                    label: e.CIHbm,
                                    resolution: e.zNLuF
                                }, {
                                    label: e.OpdKj,
                                    resolution: "720"
                                }, {
                                    label: e.ZbflC,
                                    resolution: "480"
                                }, {
                                    label: e.JUYat,
                                    resolution: "360"
                                }, {
                                    label: e.mnBgI,
                                    resolution: e.mnBgI
                                }].forEach((({
                                    label: e,
                                    resolution: i
                                }) => {
                                    var c = {
                                        SRMuS: "#MediaButton",
                                        bAUhd: function(e) {
                                            return n.UqZhG(e)
                                        },
                                        nzzip: n.RGFAy,
                                        Pwguq: function(e) {
                                            return e()
                                        },
                                        xbMkA: function(e, t) {
                                            return n.DtJjq(e, t)
                                        }
                                    };
                                    let a = new _e(_copyElm(r)).on(n.whNTg, (function() {
                                        var e, r = {
                                            bQinn: "was clicked",
                                            JAPtd: function(e, t) {
                                                return n.yStfi(e, t)
                                            },
                                            NESbW: function(e, t) {
                                                return n.ETSzH(e, t)
                                            },
                                            CqFBJ: function(e) {
                                                return e()
                                            }
                                        };
                                        if (n.ctWEk(n.qLWnL, n.ohNDQ))[je, ze, Oe, Ge] = location.pathname.split("/"), n.WtQVB(open, (e => e.href)(((e = new URL(location.href)).host = "clipr.xyz", e)), i);
                                        else if (w.log(v, r.bQinn, F.tagName), r.JAPtd("A", L.tagName)) {
                                            V.log("Caught", R);
                                            let e = B.download,
                                                n = K.href;
                                            t = {
                                                id: new Z(X.href).searchParams.get("v"),
                                                href: n,
                                                title: e
                                            }, r.NESbW(Q, re).postMessage(oe, "*"), r.CqFBJ(ie)
                                        } else Y._click.apply(D)
                                    })).appendTo(r.parentNode);
                                    i === n.bxyUW ? n.BLvhJ("rATbi", n.OGnmi) ? (c.Pwguq(u), c.xbMkA(l, (() => {
                                        m.querySelector(c.SRMuS) || c.bAUhd(p), g.querySelector(c.nzzip) && !w.querySelector(c.nzzip).querySelector(c.SRMuS) && c.bAUhd(v)
                                    }))) : a.element.querySelector(n.ERanT).innerText = e : a.element.querySelector(o).innerText = e
                                }))
                            }().catch(console.warn)
                        }
                        if (e.dNzcc(document.domain, e.hHczb)) {
                            async function C() {
                                for (; document.readyState != e.mraGH;) await e.aacsP(M, 0);
                                return !0
                            }

                            function M(t) {
                                if (e.Rhgaa(e.vyhzk, e.vyhzk)) return new Promise((e => setTimeout(e, t)));
                                n.querySelectorAll(".xh8yej3.x1iyjqo2")[0].children
                            }
                            return void async function() {
                                var n = {
                                    uoQhE: function(n, t) {
                                        return e.KHfvX(n, t)
                                    },
                                    LWTuJ: e.aODBW,
                                    tjkMS: function(n, t) {
                                        return e.GMOWz(n, t)
                                    },
                                    RRmHc: e.QrRSt,
                                    MWWkJ: e.UFwmF
                                };
                                let t = name;
                                await e.aVHzE(C), logger.log("Loaded");
                                let r = ((e = {}) => {
                                    var t = {
                                        lMppo: n.LWTuJ,
                                        hvCNH: function(e, t) {
                                            return n.uoQhE(e, t)
                                        }
                                    };
                                    if (!n.tjkMS(n.RRmHc, "Fztni")) return [...document.querySelectorAll(n.MWWkJ)].filter((e => findhref2(e)[0])).filter((e => findhref2(e)[0].href.includes("clips.twitchcdn.net"))).forEach((n => {
                                        e[n.querySelector(t.lMppo).innerText.replace("p", "")] = t.hvCNH(findhref2, n)[0].href
                                    })), e;
                                    var r = {
                                        PWnhH: function(e, t) {
                                            return n.uoQhE(e, t)
                                        }
                                    };
                                    c.children.length && (d = h.children, m.forEach = [].forEach, p.forEach((e => {
                                        r.PWnhH(w, e)
                                    })))
                                })()[t];
                                logger.log(1);
                                let o = document.querySelector("body > div.relative.overflow-hidden > main > div > div.px-4.mx-auto.max-w-7xl.sm\\:px-6.lg\\:px-8 > div.mb-6.space-y-3.lg\\:flex.lg\\:items-center.lg\\:justify-between.lg\\:space-y-0 > div.lg\\:flex.lg\\:items-center > p > span:nth-child(1)").innerText;
                                logger.log(2);
                                let i = document.querySelector(e.aXsfV).innerText;
                                logger.log(3);
                                let u = "@" + o + " on Twitch | " + i + " - " + t + "P.mp4";
                                logger.log("Downloading file as: " + u), e.bWOca(open, r), logger.log(4), await M(4e3), e.USxzA(close)
                            }().catch(console.warn)
                        }
                        if (location.href.includes(e.TAeQR)) {
                            async function q(n, t = 3e4) {
                                var c = {
                                    nCxLs: e.fFPFr
                                };
                                if (e.jCrpn("hhXSC", e.Gaudc)) {
                                    var u;
                                    for (w(t).then((e => u = !0)); !document.querySelector(n) && (await e.OGcCO(w, 0), !u););
                                    return document.querySelector(n)
                                } {
                                    let e = r[o];
                                    i.log(c.nCxLs, {
                                        element: e,
                                        target: this
                                    }), this.element.append(e.element || e)
                                }
                            }
                            console.log("ok"), e.zvVuc(q, "#u").then((async t => {
                                t.value = "https://www.youtube.com/watch?v=" + new URL(location.href).searchParams.get("v"), convert.click(), await w(200), (await e.gtmLq(q, e.jCWsY)).click(), (await e.LKjvJ(q, e.AADyR)).click(), e.aBBGS(q, e.UHCXz).then((t => {
                                    var i = {
                                        VDkSs: e.QMznx,
                                        nsrAS: e.MCaBl,
                                        JSTVH: function(e, n, t) {
                                            return e(n, t)
                                        },
                                        OhArZ: e.YMPsv,
                                        NncoD: function(n, t) {
                                            return e.eDWQs(n, t)
                                        },
                                        CJBFx: function(n, t) {
                                            return e.mcCMb(n, t)
                                        },
                                        xlYnT: function(n, t) {
                                            return e.GMOWz(n, t)
                                        },
                                        ywCJy: e.LpdRK,
                                        wHEjs: function(n, t) {
                                            return e.KpFIb(n, t)
                                        },
                                        qZhTI: e.ElGTC,
                                        LbeyM: "sGShx",
                                        AjsFP: e.oxeKX
                                    };
                                    if (e.zOift(e.AtMry, e.BxGpX)) r.querySelector(i.nsrAS).click(), i.JSTVH(o, (() => {
                                        c.querySelector(i.VDkSs).click()
                                    }), 1e3);
                                    else {
                                        let r = document.createElement;
                                        document.createElement = function(e, t) {
                                            var o = {
                                                ewTIC: function(e, n) {
                                                    return i.NncoD(e, n)
                                                },
                                                DyKZT: function(e, n) {
                                                    return i.CJBFx(e, n)
                                                },
                                                UGAsb: function(e, n) {
                                                    return i.xlYnT(e, n)
                                                },
                                                jeYYg: i.ywCJy,
                                                Optli: function(e, n) {
                                                    return i.wHEjs(e, n)
                                                },
                                                kjYcA: function(e) {
                                                    return e()
                                                }
                                            };
                                            if (i.qZhTI !== i.LbeyM) {
                                                let n = r.call(document, e, t);
                                                return n._click = n.click, n.click = function() {
                                                    if (console.log(n, "was clicked", n.tagName), o.DyKZT("A", n.tagName))
                                                        if (o.UGAsb("cdNen", o.jeYYg)) {
                                                            console.log("Caught", n);
                                                            let e = n.download,
                                                                t = n.href;
                                                            O = {
                                                                id: new URL(location.href).searchParams.get("v"),
                                                                href: t,
                                                                title: e
                                                            }, o.Optli(opener, window).postMessage(O, "*"), o.kjYcA(close)
                                                        } else o.ewTIC(n.data.size, 0) && (s.push(f.data), d.log(h.data));
                                                    else n._click.apply(n)
                                                }, console.log(n, i.AjsFP, n.tagName), n
                                            }
                                            n.classList.add(i.OhArZ)
                                        }, t.click(), console.log(e.ZzbHV), e.kDKaj(setTimeout, (() => t.click()), 1e3)
                                    }
                                }))
                            })).then(console.log, console.warn)
                        }
                    }
                }
            }
        }

        function F() {
            var n = {
                WkTcq: e.LpChq
            };
            if (e.WBlUO(e.SDYJr, e.SDYJr)) {
                if (document.domain.includes(e.McKAV)) {
                    var t;
                    if (e.mItum("lzUOo", e.jqTgx)) return [...s.getElementsByClassName(e.fEdeh)].forEach(((e, n) => {
                        e.innerText.startsWith(L) && (t = new A(e.href).searchParams.get("v"))
                    })), !t && h.getElementsByClassName("ytp-playlist-menu-button ytp-button")[0] ? (L.log(e.dINEN), A.getElementsByClassName("ytp-playlist-menu-button ytp-button")[0].click(), e.hQRDA(j)) : t ? (w.log(e.VjLot), v.getElementsByClassName("ytp-playlist-menu-button ytp-button")[0].click(), t) : F.warn(e.PMiOk);
                    throw e.asaKF(alert, "These button dont work on youtube music yet"), "."
                }
                var c = [...document.getElementsByTagName(e.PySbY)].filter(u).filter((e => !a(e)))[0],
                    l = e.TtmUD(findhref2, c, "span").filter((e => !a(e))).filter(u).filter((e => "video-title" == e.id)).map(s).map(s).map((e => ({
                        id: setElement(findhref2(s(e))[0].href),
                        e: e
                    })));
                return l
            }
            r.log(n.WkTcq, o), i = !0
        }

        function L(e, n) {
            const t = document.createElement("a");
            t.href = e, t.download = n, document.body.appendChild(t), t.click(), document.body.removeChild(t)
        }
        var A, j;
        async function z() {
            if (e.UAYaP(e.hWvKG, e.hWvKG)) {
                for (; j && !j.closed;) await e.EOvZj(w, 0);
                return 1
            }
            return n.match(/(?<host>https?\:\/\/www\.tiktok\.com)\/(?<username>@[^\/]+)\/video\/(?<videoID>\d+)/i).groups
        }

        function O(n, t = "aria-label", r = document.body) {
            var o = {
                    LkFBz: function(n, t) {
                        return e.QsKUg(n, t)
                    },
                    SpRjt: "Got",
                    gWmCW: function(e, n) {
                        return e + n
                    },
                    sBRfd: e.OGZEJ,
                    UwgOF: function(e, n, t) {
                        return e(n, t)
                    },
                    pRuzC: e.FkHvo,
                    klUIi: function(n, t, r) {
                        return e.hQJlH(n, t, r)
                    },
                    NwBpo: e.URcmU
                },
                f = [];
            return function r(d) {
                if (e.WVOry(e.PpDgd, e.HTXXo)) {
                    var h = !1;
                    if (t ? d.getAttribute(t) == n && (f.push(d), h = 1) : [...d.attributes].map((e => {
                            const {
                                name: n,
                                value: t
                            } = e;
                            return {
                                name: n,
                                value: t
                            }
                        })).filter((e => e.value == n)).length && (f.push(d), h = 1), d.children.length && !h)
                        if ("gOMsv" === e.XaxBq)(d = d.children).forEach = [].forEach, d.forEach((e => {
                            o.LkFBz(r, e)
                        }));
                        else {
                            var m = {
                                MQsLg: o.SpRjt,
                                CqvJw: function(e, n) {
                                    return o.LkFBz(e, n)
                                },
                                SbUBT: function(e, n) {
                                    return o.gWmCW(e, n)
                                },
                                aBgvU: o.sBRfd,
                                hyQGO: function(e, n, t) {
                                    return o.UwgOF(e, n, t)
                                }
                            };
                            if (a.href.includes(o.pRuzC)) {
                                let e = v("https://fastdl.app/en", F.href, "width=400,height=500");
                                var p = o.klUIi(L, o.NwBpo, (function(n, t, r, o) {
                                    r && (N.log(m.MQsLg, {
                                        a: n,
                                        b: t,
                                        c: r,
                                        d: o
                                    }), e.close(), m.CqvJw(Y, p), D(r, m.SbUBT(r.title, m.aBgvU)), m.hyQGO(R, "instaURL", null))
                                }))
                            }
                        }
                } else i = c.children, u.forEach = [].forEach, l.forEach((e => {
                    s(e)
                }))
            }(r), f.length ? e.SypvE(f.length, 1) ? f[0] : e.KpFIb(f, !1) : null
        }

        function G(n, t = "aria-label", c = document.body) {
            var u = {
                    VGKnA: function(n, t) {
                        return e.KPMoR(n, t)
                    },
                    aPAHK: e.LpChq,
                    BLftH: "RYazs",
                    IgtBL: "cmTXs",
                    gWwKG: function(n, t) {
                        return e.VTTXp(n, t)
                    }
                },
                l = [];
            return e.bwrTF((function e(c) {
                u.BLftH !== u.IgtBL ? u.gWwKG(c.getAttribute(t), n) ? l.push(c) : c.children.length && ((c = c.children).forEach = [].forEach, c.forEach((n => {
                    u.VGKnA(e, n)
                }))) : (r.log(u.aPAHK, o), i = !0)
            }), c), e.nLCwR(l.length, 1) ? l[0] : e.KpFIb(l, !1)
        }

        function W() {
            e.Rhgaa(e.ZLiIn, e.JbDAH) ? n.muted = 0 : document.querySelector(e.PYBwx).click()
        }

        function U() {
            (e.SZrTD(O, e.YuirM, e.MJBcr) && e.cGtZc(O, "Mute", e.MJBcr)[0] || e.WOjmD(O, e.TieJY, e.MJBcr)).click()
        }

        function H() {
            (e.ngWJy(query, "#right-controls") && e.JXpjL(e.TaONZ(query, "#right-controls").querySelectorAll(e.NdXaT)[0].getAttribute("d"), UnmutePath) && e.DjnIE(O, "Mute", e.MJBcr)[0] || e.NgeES(O, e.uwFMe, e.MJBcr) || e.HvyJo(O, e.gPfvT, e.MJBcr)).click()
        }
        console.log("B?"), _getIds = F, info = {}, downloadT = function(t, r = !1, s = !0, f = !1, d = !1, h = "") {
            var m = {
                SOTYi: function(e, n, t) {
                    return e(n, t)
                },
                bBkEr: function(e, n) {
                    return e(n)
                },
                WMTwE: "ehlq8k34",
                bUgCq: function(e, n) {
                    return e === n
                },
                Kksqc: e.wfFFv,
                ubjAp: e.mpjTd,
                SgrbW: function(n, t) {
                    return e.bzuYS(n, t)
                },
                SiFAG: e.xEwcF,
                stTNl: function(e, n) {
                    return e + n
                },
                phOnX: "https://y2mate.nu/",
                bzzFh: function(n, t) {
                    return e.EOvZj(n, t)
                },
                bRqpo: e.ckpTy,
                ElGOF: "0HzX",
                cUBlO: "?v=",
                SWgPB: e.jCeZU,
                lhAKf: e.AmlAM,
                pIcvM: e.wdyRp,
                nyqSe: e.wZNXn,
                STwao: e.aGaXd,
                nLoOs: e.fzcTW
            };
            let p = e.rGSBV(e.jCSgR(t, f ? e.OoAIO : e.wZNXn), s);
            if ((e => {
                    e && e.remove()
                })(document.getElementById(p)), localStorage[p] && !r && (!d || !e.bbFoZ(confirm, "You have already download this video as ." + (f ? e.OoAIO : "mp3") + "\nStill download?"))) return;
            let g = h || location;
            var w = new URL(location.href);
            w.host = w.host.replace(e.jNSWv, e.zKVut), console.log("o", w);
            let v = [e.RqwNc(e.RqwNc(e.OyxuJ, e.DhIOj(GM_getValue, "y2mate.nu") || e.zccrA), "/"), e.WkjQo, t, e.jCeZU, w.pathname.startsWith(e.AmlAM) ? 1 : 0, e.wdyRp, f ? e.OoAIO : e.wZNXn, e.aGaXd, s];
            console.log(p, v);
            return c(e.hSNSq, (function() {
                var e = {
                    FsaFh: function(e, n, t) {
                        return m.SOTYi(e, n, t)
                    },
                    iSlyx: function(e, n) {
                        return m.bBkEr(e, n)
                    },
                    KWRkH: m.WMTwE
                };
                m.bUgCq(m.Kksqc, m.ubjAp) ? e.FsaFh(i, !0, c(e.iSlyx(u, e.KWRkH) ? l(e.KWRkH).innerText : a.href)) : info[t].close()
            }), !0), onmessage = function(n) {
                var t, r = {
                    VTmqA: e.Zekcn,
                    wtDaO: function(e, n, t) {
                        return e(n, t)
                    }
                };
                if (e.TfxkI(e.YMElD, "XAZYO")) {
                    r.wtDaO(o, "SC", i());
                    var u = c("https://sclouddownloader.net/", "SC");
                    u.onclose = function(e) {
                        u.log(r.VTmqA)
                    }
                } else if (e.uTqmh(n.origin, o) || n.origin.match(/https?:\/{2}onlymp3\.to/) || n.origin.match(/https?:\/{2}en\.onlymp3\.to/) || n.origin.match(/https?:\/{2}en(\d)\.onlinevideoconverter\.pro/) || e.yCZxt(n.origin, e.HsQmX) || e.mcCMb(n.origin, e.MDtQK) || e.maLKg(n.origin, e.GxcKi) || e.UmcYV(n.origin, e.DMYTJ)) {
                    const {
                        data: {
                            href: r,
                            title: o,
                            length: i,
                            id: c,
                            _: u
                        }
                    } = n;
                    let l = o + (f ? ".mp4" : e.dfEsB);
                    (t = document.getElementById(u)) && t.remove(), console.log("Handled", {
                        href: r,
                        title: o,
                        length: i,
                        id: c,
                        _: u
                    }, n), D.set(e.YAgnf, e.gNHFL), D.set(e.UAwBo, !1), s ? (console.log(e.kuGbj), e.KqULf(L, r, l)) : e.qqEUe(open, r), localStorage[u] = r
                } else console.log("Unhandled Post", n)
            }, info[t] = f ? e.JIscO(open, g.pathname.startsWith(e.AmlAM) ? e.DZpli : "https://qdownloader.cc/youtube-video-downloader.html?v=" + t, [t, g.pathname.startsWith("/shorts/") ? 1 : 0, e.MpJYV(f, !1)], "width=400,height=500") : ! function() {
                var r = {
                        tourB: "#VGHGFf > div > div.Eddif > div:nth-child(2) > button > div.VfPpkd-RLmnJb"
                    },
                    o = new _e(e.ZBaki, {
                        src: v.join(""),
                        id: p,
                        useT: s,
                        loading: e.ceeOu,
                        referrerpolicy: e.HDeUi,
                        allowfullscreen: !0,
                        sandbox: e.kfrZR,
                        allow: e.Iqkbe
                    }).style({
                        border: 0,
                        position: e.eNuqf,
                        width: 0,
                        height: 0,
                        "pointer-events": e.hUizc,
                        opacity: 1
                    });
                return A = e.zbTLS(GM_addValueChangeListener, "y2mate.nu", (function(e, i, c, u) {
                    m.SgrbW(m.SiFAG, "HRwtg") ? n.querySelector(r.tourB).click() : (v = [m.stTNl(m.phOnX + (m.bzzFh(GM_getValue, m.bRqpo) || m.ElGOF), "/"), m.cUBlO, t, m.SWgPB, w.pathname.startsWith(m.lhAKf) ? 1 : 0, m.pIcvM, f ? "mp4" : m.nyqSe, m.STwao, s], o.set(m.nLoOs, v.join("")))
                })), o.appendTo(document.body), o.closed = !1, o
            }()
        }, downloadTikTok = function(n, c) {
            var u = {
                jKjRy: e.yxGlg,
                FdOot: function(e, n) {
                    return e == n
                },
                nEVIa: e.qbOVT,
                GFvFC: function(e, n) {
                    return e(n)
                },
                gSqiN: e.PVCYw,
                fZVpQ: e.PkPlc,
                isFqC: function(e, n, t) {
                    return e(n, t)
                },
                pIviM: "keypress",
                TxZow: function(n) {
                    return e.hUkLH(n)
                },
                iEgMy: e.cnoPV,
                tIThG: function(e, n) {
                    return e == n
                },
                HHePM: function(n, t) {
                    return e.jCrpn(n, t)
                },
                NNfba: e.WtExj,
                yDDOH: function(e, n, t, r) {
                    return e(n, t, r)
                },
                GeDIo: function(n, t) {
                    return e.jCSgR(n, t)
                },
                aMhGQ: e.VdoLn,
                EaQoF: e.dfEsB,
                dswYc: e.uhTKj,
                LMePa: e.xsQYm,
                wMrem: function(n) {
                    return e.VHDPu(n)
                },
                iLnjw: e.HGBrj
            };
            e.chLJK("EpDKs", e.rcgqj) ? (o.log(u.fZVpQ), u.isFqC(i, u.pIviM, (function({
                isTrusted: e,
                ctrlKey: n,
                shiftKey: t,
                code: r,
                target: o,
                target: {
                    tagName: i
                }
            }) {
                !["INPUT", u.jKjRy].includes(i) && !n && !t && e && u.FdOot(r, u.nEVIa) && (u.GFvFC(s, "Close player page") || f(u.gSqiN)[1]).click()
            }))) : async function(e, n) {
                var i = {
                    vxrnT: function(e) {
                        return u.TxZow(e)
                    },
                    GTtDo: function(e, n) {
                        return u.FdOot(e, n)
                    },
                    LAUrx: "https://savetik.co",
                    TdSMW: u.iEgMy,
                    kNCtw: function(e, n) {
                        return u.tIThG(e, n)
                    },
                    jTdrj: function(e, n) {
                        return u.HHePM(e, n)
                    },
                    yvFcp: u.NNfba,
                    foDjr: function(e, n, t, r) {
                        return u.yDDOH(e, n, t, r)
                    },
                    neMcM: function(e, n) {
                        return u.GeDIo(e, n)
                    },
                    EPhUx: function(e, n) {
                        return u.GeDIo(e, n)
                    },
                    dKhAm: u.aMhGQ,
                    trwxn: ".mp4",
                    dOxMK: u.EaQoF,
                    dqbzZ: u.dswYc,
                    Ctafm: u.LMePa
                };
                await u.wMrem(z), console.log("ez");
                let s = n.videoID,
                    f = n.username,
                    d = u.TxZow(t);
                onmessage = function(e) {
                    if (e.origin == o || e.origin.match(/https?:\/{2}savetik\.csavetik.coo/) || e.origin.match(/https?:\/{2}en\.onlymp3\.to/) || e.origin.match(/https?:\/{2}en(\d)\.onlinevideoconverter\.pro/) || i.GTtDo(e.origin, i.LAUrx)) {
                        var {
                            data: {
                                href: n,
                                links: u,
                                title: s,
                                length: f,
                                id: h,
                                mp4: m,
                                info: {
                                    username: p
                                }
                            }
                        } = e;
                        if (console.log(i.TdSMW, {
                                href: n,
                                title: s,
                                length: f,
                                id: h,
                                links: u,
                                mp4: m
                            }, e), i.kNCtw(e.origin, i.LAUrx)) i.jTdrj(i.yvFcp, i.yvFcp) ? t = r[0] : (s = d, i.foDjr(L, m ? u[0] : u.pop(), i.neMcM(i.EPhUx(i.neMcM(p, i.dKhAm), s), m ? i.trwxn : i.dOxMK), j));
                        else {
                            if (useT)
                                if (i.dqbzZ != i.dqbzZ) {
                                    var y = {
                                        EWRuD: function(e) {
                                            return i.vxrnT(e)
                                        }
                                    };
                                    l.log("Added playlist buttons"), a((() => {
                                        y.EWRuD(g).append(w.br.element), v().append(F.element), y.EWRuD(L).append(c.element)
                                    }))
                                } else {
                                    let e = document.createElement("a");
                                    e.download = i.EPhUx(s, i.dOxMK), e.href = n, document.body.appendChild(e), e.click(), e.remove()
                                } else open(n);
                            localStorage[_] = n
                        }
                    } else console.log(i.Ctafm, e)
                }, j = open(u.iLnjw, ["https://www.tiktok.com/" + f + "/video/" + s, u.GeDIo(e, !1)], "width=400,height=500")
            }(n, c).then(console.log, console.warn)
        }, abc_ = O, G = U, Um = H;
        var I = 0;

        function P(t) {
            var r = {
                ipTPH: function(n, t) {
                    return e.maLKg(n, t)
                },
                kpLFI: e.BASnl
            };
            return t ? !t.closed && (!e.GMOWz(e.MFOFG, e.MFOFG) || ((i.element || r.ipTPH(typeof c, r.kpLFI) ? u.querySelector(l) : a).append(this.element), this)) : e.PIpJi != e.PIpJi && void n(2, !0, !1)
        }
        async function N(t = [
            ["w1", "win1"],
            ["w2", "win2"],
            ["w3", "win3"],
            ["w4", "win4"]
        ]) {
            if (e.hxdbi("yQmTe", e.VUaxz)) {
                var r, o = !1;
                return await new Promise(((i, d) => {
                    var h = {
                        ZRFfI: function(e, n) {
                            return e(n)
                        },
                        yPfcc: function(n, t) {
                            return e.oWXSe(n, t)
                        },
                        DHkkZ: e.QXnvA,
                        HGqtb: e.Tgtwm,
                        XxhOC: function(n, t) {
                            return e.ARJRq(n, t)
                        },
                        ajtzq: e.nmjYL,
                        CDapp: function(n, t) {
                            return e.QAXrV(n, t)
                        },
                        WmaFv: function(e, n) {
                            return e(n)
                        },
                        SUUgT: function(e, n, t, r, o, i) {
                            return e(n, t, r, o, i)
                        },
                        XMYYq: "button",
                        EzPZU: e.glfwU,
                        HEIex: e.YAgnf,
                        epyaw: e.srZTD,
                        aqjcw: e.GnSuj,
                        AhazP: e.vDrIU,
                        UQmdB: e.HVzHr,
                        qtmSp: e.kYXWN,
                        BqMVD: e.xSNTz
                    };
                    if (e.LuSwq("OYSwz", e.VadvC)) var m = e.KqULf(setInterval, (e => {
                        t.forEach((e => {
                            if (this[e[0]] = h.ZRFfI(P, window[e[1]]), !window[e[1]] && !o) {
                                if (h.yPfcc(h.DHkkZ, h.DHkkZ)) return this[n];
                                o = !0, r = e[1], console.log(e)
                            }
                        })), r && (h.XxhOC("itdYl", h.ajtzq) ? (h.CDapp(i, r), clearInterval(m)) : (c[u] = null, l(a), s.log(f, h.HGqtb)))
                    }), 500);
                    else {
                        var w = {
                            KeRbm: function(e, n) {
                                return h.WmaFv(e, n)
                            },
                            zXjTt: function(e, n, t, r, o, i) {
                                return h.SUUgT(e, n, t, r, o, i)
                            }
                        };
                        let e = new a(h.XMYYq, {
                            id: h.EzPZU
                        }).appendTo(s).set(h.HEIex, h.epyaw).on(h.aqjcw, (function() {
                            let n = v() || w.KeRbm(e, L.href);
                            w.zXjTt(A, n, !1, !0, !1, !0)
                        })).style({
                            position: h.AhazP,
                            right: h.UQmdB,
                            top: h.qtmSp
                        });
                        for (; !p.getElementById("embedMP3") && g.querySelector(h.BqMVD);) v.log("Appended"), e.appendTo(h.BqMVD)
                    }
                })), r
            }
            return n.length
        }

        function Y(n, t, r) {
            if (!t) return e.bLOHM(alert, e.pwSUm);
            var s = e.JbmmI(_getIds),
                f = [];
            for (let t = 0; e.vApMQ(t, n); t++) f.push(["w" + t, e.MGUfs(e.tFMou, t)]);
            s.forEach((({
                id: n
            }, s) => {
                var d = {
                    SiFUG: e.smFXB,
                    jMNUB: "Cant Append",
                    VLtTf: e.Lgliz,
                    NiWxW: function(n, t) {
                        return e.EPItv(n, t)
                    },
                    Gvkal: e.FEAwf,
                    lBDof: e.buXnJ,
                    PLMCU: function(n, t) {
                        return e.bwrTF(n, t)
                    },
                    IZgZi: e.Tgtwm,
                    ThMeF: "BehAr",
                    HuQdM: e.ViSol,
                    wqUnN: function(e, n, t, r, o) {
                        return e(n, t, r, o)
                    },
                    IccOV: "unload"
                };
                N(f).then((e => {
                    if ("SUxkZ" === d.ThMeF) o.push(i.data), c.log(u.data);
                    else {
                        if ((info[n] || localStorage[n]) && !r) return;
                        console.log(d.HuQdM, n, s), window[e] = d.wqUnN(downloadT, n, r, !0, !!t), window.addEventListener(d.IccOV, (function(n) {
                            window[e].close()
                        }));
                        var f = setInterval((n => {
                            var t = {
                                PvPEX: d.SiFUG,
                                dvXZe: d.jMNUB,
                                xOyUW: d.VLtTf
                            };
                            if (d.NiWxW(d.Gvkal, d.lBDof))(!window[e] || window[e].closed) && (window[e] = null, d.PLMCU(clearInterval, f), console.log(e, d.IZgZi));
                            else {
                                if (!i("browse-copy", t.PvPEX)) throw t.dvXZe;
                                c.appendTo(u.querySelectorAll(t.xOyUW)), l.appendTo(a.querySelectorAll(".e1mecfx011"))
                            }
                        }), 300)
                    }
                }))
            }))
        }
        window.ch3 = P, window.getWin = N, WIP_ = Y;
        var D = new n("button").set(e.YAgnf, e.gNHFL).on(e.GnSuj, (function(t) {
                e.GFrFa(e.kfLuk, e.wkAyW) ? n(2, !1, !1) : (D.set("innerText", e.ITddc), D.set("disabled", !0), downloadT(e.sfMKN(setElement, location.href), !0, !0, !1, !0))
            })),
            V = new n(e.fmjiF).set(e.YAgnf, "Get MP4").on(e.GnSuj, (function(n) {
                var t = {
                    kqaSm: function(n, t) {
                        return e.lRtQL(n, t)
                    },
                    mApsR: e.ZjRDI,
                    ZRmfi: e.CYjkz,
                    SeLUd: function(e) {
                        return e()
                    }
                };
                if (e.SrwkT == e.SrwkT) e.PYWtw(downloadT, e.xKBAF(setElement, location.href), !0, !0, !0, !0);
                else {
                    var [c, u] = r.split(",");
                    o.value = "https://www.youtube.com/" + (t.kqaSm(u, "1") ? t.mApsR : t.ZRmfi) + c, t.SeLUd(i)
                }
            })),
            R = new n("button").set(e.YAgnf, e.DmYpW).on(e.GnSuj, (function(n) {
                e.oMjoW(WIP_, 2, !1, !1)
            })),
            B = new n(e.fmjiF).set(e.YAgnf, e.vEAHR).on("click", (function(n) {
                e.JIscO(WIP_, 2, !0, !1)
            })),
            K = new n("button").set(e.YAgnf, e.gclrG).on("click", (function(n) {
                e.WOjmD(downloadTikTok, !0, e.zhobR(setElement2, e.ZTlmb(getClass, e.TZkes) ? e.ngWJy(getClass, e.TZkes).innerText : location.href))
            })).style({
                color: e.MAotK
            }),
            J = new n(e.fmjiF, {
                id: e.XwEjS
            }).set(e.YAgnf, e.gclrG).on(e.GnSuj, (function(n) {
                e.SHaYP(downloadTikTok, !0, e.bbFoZ(setElement2, e.lMXhO(getClass, e.TZkes) ? getClass(e.TZkes).innerText : location.href))
            })).style({
                color: e.MAotK
            }),
            Z = new n(e.fmjiF).set(e.YAgnf, "Get MP3").on("click", (function(n) {
                e.rLnvI("nZmYz", "KhvrN") ? (o = i.innerText, e.laXAu(c, e.lFzyV, u)) : e.wAQRh(downloadTikTok, !1, e.AKQfQ(setElement2, e.gtmLq(getClass, "ehlq8k34") ? e.ytlzs(getClass, e.TZkes).innerText : location.href))
            })).style({
                color: e.MAotK
            });

        function X() {
            var n = {
                uNXpM: function(n, t) {
                    return e.maLKg(n, t)
                },
                aDweg: e.cnoPV,
                iCbXN: function(n, t, r, o, i) {
                    return e.aizvX(n, t, r, o, i)
                },
                mtwFI: function(n, t, r) {
                    return e.EPEHE(n, t, r)
                },
                PrfTd: e.xsQYm
            };
            if (!e.YHeRh(e.ZRtyh, "bpPjx")) return document.querySelector(e.NiUaB) || document.querySelector(e.EIDIm);
            if (n.uNXpM(f.origin, d)) {
                var {
                    data: {
                        s: t,
                        url: r,
                        title: o
                    }
                } = j;
                z.log(n.aDweg, {
                    s: t,
                    url: r,
                    title: o
                }, O), t ? n.mtwFI(U, H, 100) : n.iCbXN(I, r, o, null, P)
            } else L.log(n.PrfTd, A)
        }

        function Q() {
            var o = {
                udImX: function(e, n) {
                    return e !== n
                },
                VfDIq: e.nBRWP,
                NKfgm: function(n) {
                    return e.aVHzE(n)
                },
                LTqYd: function(n) {
                    return e.FtJpz(n)
                },
                SUJiX: function(e, n) {
                    return e(n)
                }
            };
            const i = e.FtJpz(X);

            function g() {
                try {
                    return !(![...document.querySelectorAll(e.ESHFW)].filter(u).filter((e => !a(e)))[0] && !query(e.zHRoH)) && ([...document.querySelectorAll(e.ESHFW)].filter(u).filter((e => !a(e)))[0] || e.fEYyV(query, ".autoplay"))
                } catch (n) {
                    if (e.cmlQi(e.OXoYW, e.OXoYW)) return !1;
                    u.log("e", l), a.value = s ? "https://www.youtube.com/watch?v=" + f : "https://www.youtube.com/shorts/" + d, h.parentElement.children[1].click()
                }
            }
            console.log(i), D.appendTo(i), V.appendTo(i), console.log("Posted Buttons");
            var v = !1;
            e.bmZSt(setInterval, (() => {
                var i = {
                    SzNCg: function(n, t) {
                        return e.aacsP(n, t)
                    }
                };
                "gQyqo" === e.nrCWP ? (e.PFDcF(v, e.FVYRe(g)) && g() ? e.fqFUu(e.hOfbT, e.hOfbT) ? (console.log(e.OsVwq), setTimeout((() => {
                    if (o.udImX(o.VfDIq, "tWSPk")) o.NKfgm(g).append(n.br.element), o.LTqYd(g).append(R.element), o.LTqYd(g).append(B.element);
                    else {
                        var e = {
                            qlJms: function(e, n) {
                                return e(n)
                            }
                        };
                        c.children.length && (d = h.children, m.forEach = [].forEach, p.forEach((n => {
                            e.qlJms(w, n)
                        })))
                    }
                }), 100)) : t.push(r) : v != e.puCJT(g) && !e.AMVZl(g) && (e.XoPfq(e.HrePi, e.pmylD) ? (!s[f] || d[h].closed) && (L[A] = null, i.SzNCg(j, z), O.log(G, "isclosed")) : console.log(e.SCurB)), v = g()) : o.SUJiX(t, r)
            }), 100)
        }
        if (console.log("bruh"), a1 = [
                ["youtube", function() {
                    var n, t = {
                        LWKih: function(e) {
                            return e()
                        },
                        PLaGE: e.nsUei,
                        ZIGdl: function(n, t) {
                            return e.wbnUg(n, t)
                        },
                        wpGGz: "undefined",
                        MtmBQ: function(n, t) {
                            return e.GuOVB(n, t)
                        }
                    };
                    if (e.MABcq(e.JoHAY, "BeWWF")) e.NgeES(l, (function() {
                        t.LWKih(X);
                        if (!t.LWKih(X)) throw t.PLaGE;
                        return console.log("Posting"), Q()
                    }), {
                        callback: function() {}
                    });
                    else try {
                        let e = t.ZIGdl(typeof O, t.wpGGz) ? G : W.querySelectorAll;
                        return U ? [...D.querySelectorAll(e)].filter((n => !(null === e.offsetParent)))[0] : (n = e(I) ? t.MtmBQ(e, P).length ? t.MtmBQ(e, N)[0] : e(Y) : null, e.keys(n).length ? n : null)
                    } catch {}
                }],
                [e.oqhmM, function() {
                    var t = {
                        SvfsZ: function(n, t) {
                            return e.lMXhO(n, t)
                        },
                        THUap: e.jIopr,
                        EhDYi: e.kYiBE,
                        DtsVk: e.zNRXZ,
                        uHjCc: e.smFXB,
                        QqqYa: "Cant Append",
                        mwHqV: function(n, t) {
                            return e.rISxc(n, t)
                        },
                        xjGyC: e.mWJAp,
                        WJIYL: function(n) {
                            return e.USxzA(n)
                        },
                        Ytney: function(n, t, r, o, i, c) {
                            return e.PYWtw(n, t, r, o, i, c)
                        },
                        gtDHj: function(n, t) {
                            return e.hxdbi(n, t)
                        },
                        xfEfu: "qiHjp",
                        wKIpk: "zOtBu",
                        fsLSH: e.BoSQx,
                        DLzgD: function(n, t, r) {
                            return e.cGtZc(n, t, r)
                        },
                        CwUyG: function(n, t) {
                            return e.yKEBb(n, t)
                        },
                        IncIZ: e.SCurB,
                        QqQpT: e.vnhJm,
                        CZEpz: function(n, t, r) {
                            return e.hngbE(n, t, r)
                        },
                        wOtQy: function(n, t, r) {
                            return e.gaRPG(n, t, r)
                        }
                    };
                    addEventListener(e.TYEML, (function() {
                        var e = {
                            UqGeM: "innerText",
                            qVOTw: "disabled",
                            UuLQK: function(e, n) {
                                return t.SvfsZ(e, n)
                            },
                            KDjfO: function(e, n) {
                                return e !== n
                            },
                            ZgeZr: t.THUap,
                            sVizL: t.EhDYi,
                            avGMi: function(e, n, t) {
                                return e(n, t)
                            },
                            FuUxs: t.DtsVk,
                            FtoOF: t.uHjCc,
                            DzEOT: t.QqqYa,
                            cxBRJ: ".e1mecfx011",
                            SXrsq: function(e, n) {
                                return t.mwHqV(e, n)
                            },
                            QVGPv: t.xjGyC,
                            jcxlm: function(e) {
                                return t.WJIYL(e)
                            },
                            BIMnE: function(e) {
                                return e()
                            },
                            YIUrP: function(e, n, r, o, i, c) {
                                return t.Ytney(e, n, r, o, i, c)
                            },
                            OUjqj: function(e, n) {
                                return t.gtDHj(e, n)
                            },
                            ERHyb: t.xfEfu,
                            uCexc: function(e, n) {
                                return e != n
                            },
                            ODQvb: function(e, n) {
                                return t.gtDHj(e, n)
                            },
                            DBOiS: t.wKIpk,
                            GGKIc: t.fsLSH,
                            nTriT: "Added playlist buttons",
                            NqtSb: function(e, n, r) {
                                return t.DLzgD(e, n, r)
                            },
                            Dsyjw: function(e, n) {
                                return t.CwUyG(e, n)
                            },
                            MZwjr: t.IncIZ,
                            ODhcm: "e13wiwn60",
                            POCDy: t.QqQpT
                        };
                        t.CZEpz(l, (function() {
                            var n = {
                                YNiLn: e.UqGeM,
                                ToTBb: e.qVOTw,
                                ctwqw: function(n, t) {
                                    return e.UuLQK(n, t)
                                }
                            };
                            if (e.KDjfO(e.ZgeZr, e.sVizL)) {
                                if (!e.avGMi(abc_, e.FuUxs, e.FtoOF)) throw e.DzEOT;
                                K.appendTo(document.querySelectorAll(e.cxBRJ)), Z.appendTo(document.querySelectorAll(e.cxBRJ))
                            } else i.set(n.YNiLn, "Wait..."), c.set(n.ToTBb, !0), u(n.ctwqw(l, a.href))
                        }), {
                            callback: function() {}
                        }), t.wOtQy(l, (function() {
                            var t = {
                                FXpxn: function(n) {
                                    return e.jcxlm(n)
                                },
                                upqly: function(n) {
                                    return e.BIMnE(n)
                                },
                                RTKiU: function(e, n) {
                                    return e(n)
                                },
                                VCzZH: function(n, t, r, o, i, c) {
                                    return e.YIUrP(n, t, r, o, i, c)
                                },
                                QjkIz: function(n, t) {
                                    return e.OUjqj(n, t)
                                },
                                MofSF: e.ERHyb,
                                KKrUe: function(n, t) {
                                    return e.uCexc(n, t)
                                },
                                FswCg: function(n, t) {
                                    return e.ODQvb(n, t)
                                },
                                WJSck: e.DBOiS,
                                eZJAK: e.GGKIc,
                                voVCp: e.nTriT,
                                ipABj: function(n, t, r) {
                                    return e.NqtSb(n, t, r)
                                },
                                aXNCT: function(n, t) {
                                    return e.Dsyjw(n, t)
                                },
                                JwsTO: function(n) {
                                    return e.jcxlm(n)
                                },
                                LuXFw: e.MZwjr
                            };
                            if (!document.getElementsByClassName(e.ODhcm)[0]) throw e.DzEOT;

                            function a() {
                                if (e.SXrsq(e.QVGPv, "MWuBa")) i = c.children, u.forEach = [].forEach, l.forEach((e => {
                                    s(e)
                                }));
                                else try {
                                    return !!e.avGMi(abc_, e.FuUxs, e.FtoOF).parentNode && e.avGMi(abc_, e.FuUxs, e.FtoOF).parentNode
                                } catch (e) {
                                    return !1
                                }
                            }
                            K.appendTo(document.getElementsByClassName("e13wiwn60")[0]), Z.appendTo(document.getElementsByClassName(e.ODhcm)[0]), console.log(e.POCDy);
                            var f = !1;
                            setInterval((() => {
                                var e = {
                                    MJvBG: function(e) {
                                        return t.FXpxn(e)
                                    },
                                    QHvYa: function(e, n) {
                                        return t.RTKiU(e, n)
                                    },
                                    DSQOz: function(e, n, r, o, i, c) {
                                        return t.VCzZH(e, n, r, o, i, c)
                                    }
                                };
                                if (t.QjkIz(t.MofSF, "qiHjp")) r[o[0]] = i[1];
                                else {
                                    if (t.KKrUe(f, t.FXpxn(a)) && t.upqly(a))
                                        if (t.FswCg(t.WJSck, t.eZJAK)) console.log(t.voVCp), t.ipABj(setTimeout, (() => {
                                            t.FXpxn(a).append(n.br.element), a().append(K.element), t.upqly(a).append(Z.element)
                                        }), 100);
                                        else {
                                            var l = e.MJvBG(o) || e.QHvYa(i, c.href);
                                            e.DSQOz(u, l, !1, !0, !1, !0)
                                        } else t.aXNCT(f, t.JwsTO(a)) && !t.JwsTO(a) && console.log(t.LuXFw);
                                    f = a()
                                }
                            }), 100)
                        }), {
                            callback: function() {}
                        })
                    }))
                }]
            ].filter((e => location.host.includes(e[0])))[0], a1 && a1[1] && a1[1](), console.log(a1), delete a1, __ex_ = X, location.href.includes(e.VTYTY) || location.href.includes(e.JUjpr)) {
            console.log("onlymp3.app");

            function ee() {
                if (e.chLJK("wJCmN", e.nyQgB)) {
                    var [n, t] = name.split(",");
                    txtUrl.value = "https://www.youtube.com/" + (e.OOFXG(t, "1") ? "shorts/" : e.CYjkz) + n, e.USxzA(getListFormats)
                } else r.setAttribute(o.name, i.value)
            }

            function ne() {
                var n = videoTitle.innerText.split("\n"),
                    t = n.map((e => e.match(/[:\d]+/gi))).filter((e => !!e)).pop().pop(),
                    r = n[0].split("Title: ")[1],
                    o = e.FODxQ(findhref2, videoTitle.parentNode)[0].href,
                    i = {
                        id: setElement(location.href),
                        href: o,
                        title: r,
                        length: t
                    };
                e.sWXyu(opener, window).postMessage(i, "*"), console.log(e.aLJCT)
            }
            return e.zbTLS(setInterval, (() => {
                document.getElementById(e.PfeVg).innerText.length > 5 && location.reload()
            }), 2e4), console.log("Getting MP3"), void e.cGtZc(l, (function(t = function() {}) {
                var r = {
                    dctfM: function(e) {
                        return e()
                    }
                };
                e.pTkzA(e.vrYco, e.vrYco) ? e.aVHzE(n) : (e.FVYRe(ee), e.QfQmt(l, (function(e = function() {}) {
                    r.dctfM(ne)
                }), {
                    callback: close
                }))
            }), {
                callback: function() {}
            })
        }
        if (location.href.includes(e.WWNgx)) {
            console.log(e.rBhym);
            let [Ue, He] = name.split(",");
            l((function(n = function() {}) {
                document.getElementById(e.CKugu).value = "https://www.youtube.com/" + (e.nLCwR(He, "1") ? e.ZjRDI : e.CYjkz) + Ue, document.getElementById(e.pDdVG).click(), console.log(Ue, He)
            }), {
                callback: function() {}
            }), l((function(n = function() {}) {
                var c = {
                    uKQrU: function(n, t) {
                        return e.fLCTi(n, t)
                    },
                    wElGM: e.BUouT,
                    sMsTn: e.KCaIx
                };
                if (e.oWXSe("jLOlg", "jLOlg")) c.uKQrU(t, c.wElGM), r.warn(c.sMsTn);
                else if (console.log(result.children.length), !result.children.length) {
                    if (e.Jisrr == e.Jisrr) throw document.getElementById("btn-submit").click(), "no there";
                    r.element.querySelector(o).innerText = i
                }
            }), {
                int: 1e3,
                callback: function() {}
            }), e.VzsYf(l, (function() {
                document.getElementById(e.VTpKm).click()
            }), {
                callback: function() {}
            }), l((function() {
                for (var n = e.vLhoz.split("|"), t = 0;;) {
                    switch (n[t++]) {
                        case "0":
                            console.log(e.TtFAa);
                            continue;
                        case "1":
                            var r = $(e.Yxylx)[0].innerText;
                            continue;
                        case "2":
                            (opener || window).postMessage(o, "*");
                            continue;
                        case "3":
                            var o = {
                                id: Ue,
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
        } else if (location.href.includes(e.qtqLF)) {
            async function te(n) {
                for (; !document.querySelector(n);) await e.zhobR(w, 0);
                return !0
            }(async function() {
                var n = {
                    Qhnaz: function(n, t) {
                        return e.QtefJ(n, t)
                    }
                };
                let [t, r] = name.split(",");
                if (!t.length || !r.length) return console.warn(e.sfvdg);
                var o = "https://www.youtube.com/" + (e.UmcYV(r, "1") ? e.ZjRDI : e.CYjkz) + t;
                await te("#txt-url"), console.log("Input Loaded"), document.querySelector(e.NMwvL).value = o, await e.GICiL(te, "#btn-submit"), console.log(e.xklyA), await e.LiCUk(w, 100), document.querySelector(e.KdfAm).click(), await e.Zcter(te, "#video_title"), console.log(e.NBtPO);
                var i = document.querySelector(e.MxnLc).innerText,
                    c = [0];
                return [...document.querySelector("#result").querySelector(e.eGeNK).querySelectorAll("tr")].forEach((e => {
                    var t = e.innerText.match(/(?<res>\d+)(p|P)/i) || {};
                    t.groups && (t = Number(t.groups.res), n.Qhnaz(c[0], t) && (c[0] = t, c[1] = findhref2(e)[0].href, c[2] = e))
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
        } else if (location.href.includes(e.NGnNm))(async function() {
            for (await async function(n) {
                    for (; !document.querySelector(n);) await e.rMiyI(w, 0);
                    return !0
                }(e.AKyLq); !document.querySelector(e.AKyLq).href.length;) await e.JDSCx(w, 0);
            console.log(e.TNepv);
            var n = document.querySelector(e.uxlwP).innerText,
                t = {
                    href: document.querySelector("#A_downloadUrl").href,
                    title: n
                };
            e.sWXyu(opener, window).postMessage(t, "*")
        })().then(close, console.warn);
        else if (location.href.includes(e.rsCjY)) {
            let [Ie, Pe] = name.split(",");
            if (!Ie.length || !Pe.length) return console.Warn("NO info Preset");
            var re = "https://www.youtube.com/" + ("1" == Pe ? e.ZjRDI : e.CYjkz) + Ie;
            let Ne = function() {};
            e.amfYr(l, (function(n = function() {}) {
                var o = {
                    QNyTr: function(e, n, t) {
                        return e(n, t)
                    },
                    YTBiP: e.zNRXZ,
                    kLacS: "data-e2e"
                };
                if (e.kYoNc(e.cFKoE, e.cFKoE)) return !!o.QNyTr(t, o.YTBiP, o.kLacS).parentNode && r(o.YTBiP, o.kLacS).parentNode;
                document.getElementById(e.UzTKA).value = "https://www.youtube.com/" + ("1" == Pe ? e.ZjRDI : e.CYjkz) + Ie, document.getElementById(e.WPvXN).click(), console.log("Searched")
            }), {
                callback: Ne
            }), l((function() {
                if (e.DCLEQ(stepProcess.style.display, e.hUizc)) throw document.getElementById(e.WPvXN).click(), e.sMcYn;
                console.log(e.ROLvY)
            }), {
                callback: Ne
            }), e.EJaFx(l, (function() {
                if (e.YyXdY(document.getElementById(e.AzLhT).children.length, 0)) throw "";
                console.log(e.HSFIj);
                var {
                    title: n,
                    href: t
                } = e.FEsvJ($, e.vLiHO) ? e.AvRDP($, "#download-720-MP4")[0] ? e.ngWJy($, "#download-720-MP4")[0] : e.ahaME($, e.vLiHO) : e.KHfvX($, e.vLiHO), r = {
                    id: Ie,
                    href: t,
                    title: n,
                    length: {}
                };
                console.log(e.TtFAa), (opener || window).postMessage(r, "*")
            }), {
                callback: close
            })
        } else if (location.href.includes("savetik.co"))
            if (e.auybN("CiehL", e.WRBoy)) {
                var [oe, ie] = name.split(",");
                e.sfshf(addEventListener, e.TYEML, (function() {
                    var n = {
                        nDFsb: function(e, n) {
                            return e === n
                        },
                        kmzqu: e.UFNjk,
                        HibmV: function(n) {
                            return e.uTgof(n)
                        },
                        lSWrT: function(n, t, r) {
                            return e.YPhgx(n, t, r)
                        }
                    };
                    e.QxZav(l, (function() {
                        if (!n.nDFsb(n.kmzqu, n.kmzqu)) return this.element[t] = r, this;
                        s_input.value = oe, n.HibmV(ksearchvideo), n.lSWrT(setTimeout, ksearchvideo, 1e3)
                    }), {
                        callback() {}
                    })
                })), e.pNOAz(l, (function() {
                    if (e.rUosi === e.dxWot) {
                        e.BUkdJ(c, e.HOFLT);
                        var {
                            id: n,
                            href: t,
                            isShort: r
                        } = e.JsLgH(u, l.target.parentElement.parentElement).map((e => ({
                            href: e.href,
                            short: e.href.includes("/short"),
                            id: d(e.href)
                        }))).filter((e => e.id))[0];
                        s(n, r && new f(t))
                    } else document.getElementsByClassName(e.eKhif)[0].innerText,
                        function() {
                            console.log(e.qTZUf);
                            let n = {
                                title: document.getElementsByClassName("clearfix")[0].innerText,
                                links: e.hQmbV(findhref2, document.getElementsByClassName("tik-video")[0]).map((e => e.href)),
                                mp4: e.UmcYV(ie, 1),
                                info: e.fEYyV(setElement2, oe)
                            };
                            onmessage = function(n) {
                                if (e.maLKg(n.origin, "https://www.tiktok.com")) {
                                    var {
                                        data: {
                                            s: t,
                                            url: r,
                                            title: o
                                        }
                                    } = n;
                                    console.log("Handled", {
                                        s: t,
                                        url: r,
                                        title: o
                                    }, n), t ? e.KSncV(setTimeout, close, 100) : e.WEXVM(L, r, o, null, close)
                                } else console.log(e.xsQYm, n)
                            }, e.JWfTN(opener, window).postMessage(n, "*")
                        }()
                }), {
                    callback() {}
                })
            } else var ce = "",
                ue = o((n => {
                    e.OvIEE(ce, ce.innerText) && (ce = f.innerText, d(e.lFzyV, ce))
                }));
        else if (document.domain.includes(e.McKAV))
            if (e.JuWyr(e.qAZSx, "qGswr")) console.log("Added MiniPlayer Toggle with I"), e.lzxBd(addEventListener, e.tFcsQ, (function({
                isTrusted: n,
                ctrlKey: c,
                shiftKey: u,
                code: l,
                target: a,
                target: {
                    tagName: s
                }
            }) {
                if ("jQEOM" === e.cMImP) {
                    var f = e.hngbE(r, o, e.qztwp)[0];
                    i.add([f.src, f.getAttribute(e.yRmQY)])
                } else ![e.zgkyv, "TEXTAREA"].includes(s) && !c && !u && n && e.tgrNQ(l, e.qbOVT) && (e.CMPJN(e.wVTYE, e.wVTYE) ? t[r].close() : (abc_(e.sQvWa) || e.FODxQ(abc_, e.PVCYw)[1]).click())
            }));
            else {
                ue = "1|0|2|4|3".split("|");
                for (var le = 0;;) {
                    switch (ue[le++]) {
                        case "0":
                            w.close();
                            continue;
                        case "1":
                            d.log(e.TcBTg, {
                                a: h,
                                b: m,
                                c: p,
                                d: g
                            });
                            continue;
                        case "2":
                            e.LiCUk(v, F);
                            continue;
                        case "3":
                            e.gaRPG(z, e.URcmU, null);
                            continue;
                        case "4":
                            e.jWgiJ(L, A, j.title + e.OGZEJ);
                            continue
                    }
                    break
                }
            } else document.domain.includes("loader.to") && location.href.includes(e.srZyw) && (e.GMOWz("kvJGz", e.sibRi) ? console.warn(e.CHRPe) : c.children.length && (d = h.children, m.forEach = [].forEach, p.forEach((n => {
            e.bwrTF(w, n)
        }))));
        const ae = window.trustedTypes && trustedTypes.createPolicy(e.gVvtW, {
                createHTML: e => e,
                createScriptURL: e => e
            }),
            se = "\n    /* Default iframe styles */\n    #cardApiIframe {\n        width: 100%;\n        height: 100%;\n        transition: all 2.5s ease-in-out;\n    }\n\n    /* Collapse animation when the class is toggled */\n    .collapse-frame {\n        width: 0;\n        height: 0;\n        margin-left: auto;\n        margin-right: auto;\n        transition: all 2.5s ease-in-out;\n    }\n",
            fe = document.createElement("style");

        function de(n) {
            if (e.qrelv != e.qrelv) r = 1, o.playbackRate = 16, i.log(e.LgnHf);
            else {
                const t = pe.element;
                n ? t.classList.add(e.YMPsv) : e.URpKr("pjYum", "IbEuo") ? t.classList.remove(e.YMPsv) : (i = c.children, u.forEach = [].forEach, l.forEach((e => {
                    s(e)
                })))
            }
        }
        fe.type = e.WnXZw, fe.appendChild(document.createTextNode(ae ? ae.createHTML(se) : se));
        var he = "https://www.youtube.com/watch?v=" + e.fEYyV(setElement, location.href) + "&adUrl=https://www.youtube.com/channel/UCOA8lE9-0XnEIdHqjfQUz1A?sub_confirm=1",
            me = ae ? ae.createScriptURL(e.MGUfs(e.PJFOo, he)) : e.Nsphz(e.PJFOo, he);
        const pe = new _element(e.ZBaki, {
                id: e.icZVJ,
                scrolling: "no",
                width: e.NlCYZ,
                height: "100%",
                allowtransparency: "true",
                style: "border: none",
                src: me
            }),
            ge = new _element(e.AYmWF, {
                src: ae ? ae.createScriptURL(e.FzUwV) : e.FzUwV
            });
        ge.element.addEventListener(e.TYEML, (() => {
            var n = {
                JKuKi: function(n, t, r) {
                    return e.hQJlH(n, t, r)
                },
                wjLPn: e.ckpTy,
                TJaZZ: function(n, t) {
                    return e.UoJol(n, t)
                },
                wTgde: e.OyxuJ,
                TYnVS: e.zccrA,
                ZpCQu: e.WkjQo,
                CEIzq: e.AmlAM,
                sePte: e.wdyRp,
                wijbv: e.aGaXd,
                AYdLP: e.fzcTW,
                KlBCM: e.ceeOu,
                mEtNB: e.HDeUi,
                sTReE: "allow-same-origin allow-scripts allow-popups allow-forms",
                BPoiq: "autoplay; fullscreen; geolocation; microphone; camera",
                BhWrA: e.hUizc
            };
            if (typeof iFrameResize === e.gwXZM)
                if (e.KiyDW == e.KiyDW) e.laXAu(iFrameResize, {
                    log: !1
                }, e.yfFiv);
                else
                    for (var t = "4|5|1|3|2|0".split("|"), r = 0;;) {
                        switch (t[r++]) {
                            case "0":
                                return i;
                            case "1":
                                v = n.JKuKi(F, n.wjLPn, (function(e, n, t, r) {
                                    (i = [o.MrXik(o.MrXik(o.eaZVD, o.iuble(I, "y2mate.nu") || o.ZZMXb), "/"), o.UDVZL, P, o.YmoJd, N.pathname.startsWith(o.PtTlL) ? 1 : 0, o.juaaA, Y ? "mp4" : "mp3", o.gEFTu, D]).set(o.RMriV, t.join(""))
                                }));
                                continue;
                            case "2":
                                i.closed = !1;
                                continue;
                            case "3":
                                i.appendTo(U.body);
                                continue;
                            case "4":
                                var o = {
                                    MrXik: function(e, t) {
                                        return n.TJaZZ(e, t)
                                    },
                                    eaZVD: n.wTgde,
                                    iuble: function(e, n) {
                                        return e(n)
                                    },
                                    ZZMXb: n.TYnVS,
                                    UDVZL: n.ZpCQu,
                                    YmoJd: "&s=",
                                    PtTlL: n.CEIzq,
                                    juaaA: n.sePte,
                                    gEFTu: n.wijbv,
                                    RMriV: n.AYdLP
                                };
                                continue;
                            case "5":
                                var i = new m("iframe", {
                                    src: p.join(""),
                                    id: g,
                                    useT: w,
                                    loading: n.KlBCM,
                                    referrerpolicy: n.mEtNB,
                                    allowfullscreen: !0,
                                    sandbox: n.sTReE,
                                    allow: n.BPoiq
                                }).style({
                                    border: 0,
                                    position: "absolute",
                                    width: 0,
                                    height: 0,
                                    "pointer-events": n.BhWrA,
                                    opacity: 1
                                });
                                continue
                        }
                        break
                    } else console.error("iFrameResize function not available")
        }));
        const we = new _element(e.HdGtx).append(pe, ge);
        document.querySelector(e.erQUJ);
        var ve = e.WfJwN(setElement, location.href);
        pe.element.addEventListener(e.TYEML, (() => {
            console.log("Iframe is fully loaded"), e.uRFoR(de, !1)
        })), e.WRbSs(de, !0);
        var ye = 0,
            be = 1,
            Te = 0;
        e.LOFgK(setInterval, (n => {
            if (e.cmlQi(e.wFdDq, e.fYRYR)) t.log("%c" + this.title.body + " | %c" + r, "color: " + this.title.color + "; font-weight: bold; font-size: " + this.title.size + ";", "color: " + this.body.color + "; font-weight: bold; font-size: " + this.body.size + "; text-shadow: 0 0 5px rgba(0,0,0,0.2);");
            else {
                var o = document.querySelector("video"),
                    i = document.querySelector(e.erQUJ);
                he = "https://www.youtube.com/watch?v=" + e.aacsP(setElement, location.href) + "&adUrl=https://www.youtube.com/channel/UCOA8lE9-0XnEIdHqjfQUz1A?sub_confirm=1", me = ae ? ae.createScriptURL(e.froYx(e.PJFOo, he)) : e.rGSBV(e.PJFOo, he), i && (!i.querySelector(e.yfFiv) && (e.aacsP(de, !0), i.parentNode.prepend(fe), i.prepend(we.element), console.log(e.OAJbe)), e.EGjKi(setElement, location.href) != ve && (e.asaKF(de, !0), pe.set(e.fzcTW, me), console.log(e.vPUXY), ve = e.kvtas(setElement, location.href)));
                var l = e.tFejm(query, e.CaDBr);
                l && !e.VEKNt(a, l) && l.click();
                var s = document.getElementsByClassName(e.OQHIh)[0];
                try {
                    if (s && !I) console.log("Muted ad"), I = 1, o.muted = 1;
                    else if (!s && I) {
                        console.log(e.XjZyd);
                        try {
                            o.muted = 0
                        } catch (n) {
                            e.njEoL(e.IMXpH, e.kZZKD) ? console.warn(e.hMVNI) : e.XMQYu(c, u.innerText) && (d = h.innerText, e.pNOAz(m, e.lFzyV, p))
                        }
                        I = 0
                    }
                } catch {}
                var f = [...document.querySelectorAll(e.wMOmA), ...document.querySelectorAll(e.VCprb)].map((e => [...e.querySelectorAll("button")].filter((e => e.className.includes("skip")))[0])).filter((e => !!e))[0];
                f ? ((!Te || e.XMQYu(o.playbackRate, 16)) && (Te = 1, o.playbackRate = 16, console.log(e.LgnHf)), f.click(), be = 0) : e.fRAui(!be, o) ? (Te = 0, be = 1, o.playbackRate = ye, console.log(e.zzztT)) : o && (Te = 0, ye = o.playbackRate);
                var g = document.getElementsByClassName("ytp-ad-overlay-close-button")[2];
                g && (g.click(), console.log("Closed ad card"));
                var w = [...document.querySelectorAll(".yt-spec-button-shape-next")].filter((e => e.innerText.includes("Ads")))[0];
                w && (w.click(), location.href.includes(e.HLmmB) && location.reload())
            }
        }), 10)
    }();