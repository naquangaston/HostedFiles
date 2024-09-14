// ==UserScript==
// @name Gaston's - Video/Image Downloader
// @namespace http://tampermonkey.net/
// @version 6.4
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
// @name:en Gaston's - Video/Image Downloader
// @name:zh Gaston's - Video/Image Downloader
// @name:ar Gaston's - Video/Image Downloader Gaston's - Video/Image Downloader
// @name:de Gaston's - Video/Image Downloader
// @name:hi गैस्टन - वीडियो/छवि डाउनलोडर gaistan - veediyo/chhavi daunalodar
// @name:ru Gaston's - Video/Image Скачатель Gaston's - Video/Image Skachatel'
// @name:pt Gaston's - Downloader de vídeo/imagem
// @name:fr Gaston's - téléchargeur vidéo / image
// @name:ja Gaston's -Video/Image Downloader Gaston' s - vu~ideo/ Image daunrōdā
// @name:es Gaston's - Video/Image Descarger
// @name:vi Gaston's - Trình tải xuống video/hình ảnh
// @name:nl Gaston's - Video/Image Downloader
// @name:it Gaston's - Downloader di video/immagine
// @name:tr Gaston's - Video/Resim İndirici
// @name:ko Gaston 's- 비디오/이미지 다운로더 Gaston 's- bidio/imiji daunlodeo
// @name:id Gaston's - Video/Image Downloader
// @name:th Gaston's - Video/Image Downloader Gaston's - Video/Image Downloader
// @name:ro Gaston's - descărcător video/imagini
// @name:uk GASTON'S - Відео/зображення завантажувача GASTON'S - Video/zobrazhennya zavantazhuvacha
// @name:pl Gaston - pobierca wideo/obrazu
// @name:el Gaston's - Video/Image Downloader Gaston's - Video/Image Downloader
// @name:fi Gaston's - Video/kuvan lataaja
// @name:hu Gaston's - Videó/kép letöltő
// @name:cs Gaston's - Video/Image Downloader
// @name:da Gastons - Video/Image Downloader
// @name:sk Gaston's - Video/Image Downloader
// @name:bg Gaston's - видео/изтегляне на изображения Gaston's - video/izteglyane na izobrazheniya
// @name:no Gaston's - Video/Image Downloader
// @name:he Gaston's - הורדת וידאו/תמונה
// @name:sv Gaston's - Video/Image Downloader
// @description:zh Instagram/Twitch/Youtube/tiktok Video/Audio Downloader alwayts updated
// @description:en Instagram/Twitch/Youtube/tiktok Video/Audio Downloader alwayts updated
// @description:fr Instagram / twitch / youtube / tiktok vidéo / téléchargeur audio toujours mis à jour
// @description:pt Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader sempre atualizado
// @description:de Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader Alwayts Aktualisiert
// @description:es Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader Alwayts Actualizado
// @description:ar Instagram/twitch/youtube/tiktok video/audio downloader alwayts updated Instagram/twitch/youtube/tiktok video/audio downloader alwayts updated
// @description:ru Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader Allwayts Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader Allwayts
// @description:ja Instagram/Twitch/YouTube/Tiktokビデオ/オーディオダウンローダーAlwayts更新 Instagram/ Twitch/ yūchūbu/ Tiktok bideo/ ōdio daunrōdā Alwayts kōshin
// @description:hi Instagram/Twitch/YouTube/Tiktok वीडियो/ऑडियो डाउनलोडर Alwayts अपडेट किया गया instagram/twitchh/youtubai/tiktok veediyo/odiyo daunalodar alwayts apadet kiya gaya
// @description:id Instagram/twitch/youtube/tiktok video/audio downloader alwayts diperbarui
// @description:ro Instagram/Twitch/YouTube/Tiktok Video/Descărcător audio Alwayts Actualizat
// @description:th Instagram/twitch/youtube/tiktok วิดีโอ/ดาวน์โหลดเสียงดาวน์โหลดทุกครั้งอัปเดต Instagram/twitch/youtube/tiktok widīxo/dāwn̒h̄old s̄eīyng dāwn̒h̄old thuk khrậng xạpdet
// @description:tr Instagram/Twitch/YouTube/Tiktok Video/Ses Downloader Alwayts Güncellendi
// @description:pl Instagram/twitch/youtube/tiktok wideo/audio pobrań
// @description:nl Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader Ally Wayts bijgewerkt
// @description:uk Instagram/twitch/youtube/tiktok video/audio завантажувач Alwayts оновлений Instagram/twitch/youtube/tiktok video/audio zavantazhuvach Alwayts onovlenyy
// @description:ko Instagram/Twitch/YouTube/Tiktok 비디오/오디오 다운로더 Alwayts 업데이트 Instagram/Twitch/YouTube/Tiktok bidio/odio daunlodeo Alwayts eobdeiteu
// @description:it Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader Alwayts Aggiornato
// @description:vi Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader đã cập nhật
// @description:fi Instagram/twitch/youtube/tiktok -video/äänen latausohjelma ALWAYTS
// @description:hu Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader alwayts frissítve
// @description:he אינסטגרם/טוויץ
// @description:cs Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader Alwayts Aktualizováno
// @description:el Ενημέρωση Instagram/Twitch/YouTube/Tiktok/Audio Downloader Alwealts Ενημερώθηκε Enimérosi Instagram/Twitch/YouTube/Tiktok/Audio Downloader Alwealts Enimeróthike
// @description:sk Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader Alwayts Aktualizovaný
// @description:sv Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader Always uppdaterad
// @description:da Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader Alwats Opdateret
// @description:no Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader Alwayyts Oppdatert
// @description:bg Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader Always Актуализиран Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader Always Aktualiziran
// @license MIT
// ==/UserScript==
(function(e, n) {
    for (var t = 310, r = 301, o = "wSS!", i = 313, c = "6bT!", u = 305, l = 318, a = 314, s = 309, d = Q, h = Q, m = R, p = R, g = f();;) try {
        if (339351 === parseInt(m(302)) / 1 + parseInt(p(304)) / 2 * (parseInt(m(t)) / 3) + parseInt(d(r, o)) / 4 * (parseInt(d(i, "KcnD")) / 5) + -parseInt(d(317, "6bT!")) / 6 + -parseInt(d(311, c)) / 7 * (parseInt(m(u)) / 8) + -parseInt(h(l, "&rfa")) / 9 * (parseInt(p(a)) / 10) + parseInt(m(307)) / 11 * (parseInt(p(s)) / 12)) break;
        g.push(g.shift())
    } catch (e) {
        g.push(g.shift())
    }
})(),
function() {
    var e = {
        ovjfK: function(e, n) {
            return e || n
        },
        zLnLq: "1rem",
        IsfGk: "#008f68",
        PaTFX: function(e, n) {
            return e !== n
        },
        vZZXW: function(e, n) {
            return e !== n
        },
        nDRlJ: function(e, n) {
            return e !== n
        },
        nxvjV: function(e, n) {
            return e !== n
        }
    };
    Object.assign(this || arguments[0], {
        CustomLog: class {
            constructor(n) {
                this.title = {
                    body: e.ovjfK(n, "---"),
                    color: "darkgrey",
                    size: e.zLnLq
                }, this.body = {
                    color: e.IsfGk,
                    size: e.zLnLq
                }
            }
            setTitleBody(e) {
                return this.title.body = e, this
            }
            setTitleStyle({
                color: n,
                size: t
            }) {
                return e.PaTFX(n, void 0) && (this.title.color = n), e.vZZXW(t, void 0) && (this.title.size = t), this
            }
            setBodyStyle({
                color: n,
                size: t
            }) {
                return e.nDRlJ(n, void 0) && (this.body.color = n), e.nxvjV(t, void 0) && (this.body.size = t), this
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

function R(e, n) {
    var t = f();
    return R = function(n, r) {
        var o = t[n -= 300];
        if (void 0 === R.EnyNBY) {
            R.XvbyZF = function(e) {
                for (var n, t, r = "", o = "", i = 0, c = 0; t = e.charAt(c++); ~t && (n = i % 4 ? 64 * n + t : t, i++ % 4) ? r += String.fromCharCode(255 & n >> (-2 * i & 6)) : 0) t = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(t);
                for (var u = 0, l = r.length; u < l; u++) o += "%" + ("00" + r.charCodeAt(u).toString(16)).slice(-2);
                return decodeURIComponent(o)
            }, e = arguments, R.EnyNBY = !0
        }
        var i = n + t[0],
            c = e[i];
        return c ? o = c : (o = R.XvbyZF(o), e[i] = o), o
    }, R(e, n)
}

function getV(e, n) {
    var t = {
        siizI: function(e, n) {
            return e(n)
        },
        qWoQL: function(e, n, t) {
            return e(n, t)
        }
    };
    return t.siizI(GM_getValue, e) || (t.qWoQL(GM_setValue, e, n), n)
}

function setV(e, n) {
    ! function(e, n, t) {
        e(n, t)
    }(GM_setValue, e, n)
}
async function getFinalUrlFromServer(e) {
    var n = {
        EhJrj: function(e, n, t) {
            return e(n, t)
        },
        AQqpQ: "dlbutton",
        QYGAi: function(e, n) {
            return e(n)
        },
        cjlJb: function(e, n) {
            return e === n
        },
        uwFDL: "frlus",
        uvuVu: "WSpvV",
        hPyWD: "http://localhost:3000/get-final-url",
        KwfNb: "POST",
        FWofH: "application/json",
        JeAor: "Failed to fetch final URL",
        UdrPB: function(e, n) {
            return e === n
        },
        QZaoQ: "XycNC",
        DjmXM: "Error:"
    };
    try {
        if (!n.cjlJb(n.uwFDL, n.uvuVu)) {
            const t = await fetch(n.hPyWD, {
                method: n.KwfNb,
                headers: {
                    "Content-Type": n.FWofH
                },
                body: JSON.stringify({
                    url: e
                })
            });
            if (!t.ok) throw new Error(n.JeAor);
            return (await t.json()).finalUrl
        } {
            const e = A.createElement("a");
            e.href = r, e.download = t, Y.body.appendChild(e), e.click(), o.body.removeChild(e)
        }
    } catch (e) {
        if (n.UdrPB(n.QZaoQ, n.QZaoQ)) return console.error(n.DjmXM, e), null;
        var t = {
                MCvPh: function(e, t, r) {
                    return n.EhJrj(e, t, r)
                },
                zZmMs: n.AQqpQ
            },
            i = "",
            c = n.QYGAi(z, (e => {
                i != i.innerText && (i = c.innerText, t.MCvPh(N, t.zZmMs, i))
            }))
    }
}

function getCurrentVideoID() {
    var e, n = {
        fupyz: "ytp-video-menu-item ytp-button",
        OiSlc: "Opening",
        mLsxz: "ytp-playlist-menu-button ytp-button",
        EGjva: "Closiung",
        YBTmO: "Not Found!"
    };
    return [...document.getElementsByClassName(n.fupyz)].forEach(((n, t) => {
        n.innerText.startsWith(CurrentPlayingSymbol) && (e = new URL(n.href).searchParams.get("v"))
    })), !e && document.getElementsByClassName("ytp-playlist-menu-button ytp-button")[0] ? (console.log(n.OiSlc), document.getElementsByClassName(n.mLsxz)[0].click(), getCurrentVideoID()) : e ? (console.log(n.EGjva), document.getElementsByClassName("ytp-playlist-menu-button ytp-button")[0].click(), e) : console.warn(n.YBTmO)
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
        kJRfk: function(e, n) {
            return e(n)
        },
        FTJhv: "collapse-frame",
        DfrFC: function(e) {
            return e()
        },
        YRELw: function(e, n, t, r, o, i) {
            return e(n, t, r, o, i)
        },
        gefsl: function(e, n) {
            return e === n
        },
        JPAQy: "WpiCL",
        rpZdC: "embedMP3",
        KUDtO: "innerText",
        qWDBT: "fixed",
        mKusD: "50%",
        mdxiX: ".ytp-right-controls",
        aBzaa: "hSOGJ",
        Kejfp: "Appended",
        ncxkm: "Added Button",
        CPCIe: "button",
        SzeWO: "GetAudio",
        ipPVL: "click",
        XVRQE: function(e, n, t) {
            return e(n, t)
        },
        YmHsS: "Attaching to embeder >:]",
        UqTIl: function(e, n) {
            return e(n)
        },
        syjLg: ".playbackSoundBadge__actions"
    };
    async function n(n, t = 3e4) {
        var r;
        for (sleep(t).then((e => r = !0)); !document.querySelector(n) && (await e.kJRfk(sleep, 0), !r););
        return document.querySelector(n)
    }
    return location.href.includes("/embed/") ? (console.log(e.YmHsS), e.UqTIl(n, e.mdxiX).then((async n => {
        if (!e.gefsl(e.JPAQy, "pMjpv")) {
            let t = new _e("button", {
                id: e.rpZdC
            }).appendTo(n).set(e.KUDtO, "MP3").on("click", (function() {
                let n = e.DfrFC(getCurrentVideoID) || e.kJRfk(setElement, location.href);
                e.YRELw(downloadT, n, !1, !0, !1, !0)
            })).style({
                position: e.qWDBT,
                right: e.mKusD,
                top: "80%"
            });
            for (; !document.getElementById(e.rpZdC) && document.querySelector(e.mdxiX);) e.gefsl("hSOGJ", e.aBzaa) ? (console.log(e.Kejfp), t.appendTo(e.mdxiX)) : (n.push(z), t = 1)
        }
    }))) : (document.querySelector(e.mdxiX), await n(e.syjLg, 5e3).then((async t => {
        var r = {
            CppwP: function(n) {
                return e.DfrFC(n)
            }
        };
        let o = new _e(e.CPCIe, {
            id: e.SzeWO
        }).appendTo(t).set(e.KUDtO, "Download MP3").on(e.ipPVL, (function() {
            r.CppwP(downloadSC)
        }), (e => e));
        for (;;) !document.getElementById(e.SzeWO) && await e.XVRQE(n, ".playbackSoundBadge__actions", 5e3) && await e.XVRQE(n, ".playbackSoundBadge__actions", 5e3).then((n => {
            o.appendTo(n), console.log(e.ncxkm)
        })), await e.kJRfk(sleep, 0)
    })))
}().then(console.log, console.warn), downloadSC = function() {
    var n = {
        ysiiB: "Error downloading file:",
        tJTqP: function(e) {
            return e()
        },
        keTOj: function(e, n) {
            return e !== n
        },
        HUJpS: "iHrCj",
        EDxLC: "cFtOE",
        sUHHk: "UrEeh",
        YipBz: "IhxKt",
        vuGgI: function(e, n, t) {
            return e(n, t)
        },
        yZvYr: "SCinfo",
        uzcjs: function(e, n, t) {
            return e(n, t)
        },
        VJcDI: function(e) {
            return e()
        },
        lXGkQ: function(e, n, t) {
            return e(n, t)
        },
        GyJvY: function(e, n) {
            return e(n)
        },
        yPbuu: "https://sclouddownloader.net/"
    };
    n.vuGgI(GM_setValue, n.yZvYr, null), n.uzcjs(GM_setValue, "sc", n.VJcDI(getSoundCloudUrl)), set_ || (set_ = 1, n.lXGkQ(GM_addValueChangeListener, n.yZvYr, (function(t, i, c, u) {
        var l = {
            HXguw: function(e) {
                return n.tJTqP(e)
            },
            FcYqU: function(e, n) {
                return e(n)
            }
        };
        n.keTOj(n.HUJpS, n.EDxLC) ? (console.log({
            a: t,
            b: i,
            c: c,
            d: u
        }), c && c.name && (n.sUHHk === n.YipBz ? (P.error(n.ysiiB, Y), (o || e || K).postMessage({
            url: N,
            title: O,
            s: !1
        }, "*")) : _downloadFileAsTitle(c.href, c.name))) : (l.HXguw(u), l.HXguw(l), l.FcYqU(r, P))
    }))), n.GyJvY(open, n.yPbuu)
}, GM_setValue_ = GM_setValue, GM_getValue_ = GM_getValue, GM_info_ = GM_info;
var UnmutePath = "M3.15,3.85l4.17,4.17L6.16,9H3v6h3.16L12,19.93v-7.22l2.45,2.45c-0.15,0.07-0.3,0.13-0.45,0.18v1.04 c0.43-0.1,0.83-0.27,1.2-0.48l1.81,1.81c-0.88,0.62-1.9,1.04-3.01,1.2v1.01c1.39-0.17,2.66-0.71,3.73-1.49l2.42,2.42l0.71-0.71 l-17-17L3.15,3.85z M11,11.71v6.07L6.52,14H4v-4h2.52l1.5-1.27L11,11.71z M10.33,6.79L9.62,6.08L12,4.07v4.39l-1-1V6.22L10.33,6.79 z M14,8.66V7.62c2,0.46,3.5,2.24,3.5,4.38c0,0.58-0.13,1.13-0.33,1.64l-0.79-0.79c0.07-0.27,0.12-0.55,0.12-0.85 C16.5,10.42,15.44,9.1,14,8.66z M14,5.08V4.07c3.95,0.49,7,3.85,7,7.93c0,1.56-0.46,3.01-1.23,4.24l-0.73-0.73 C19.65,14.48,20,13.28,20,12C20,8.48,17.39,5.57,14,5.08z",
    mutePath = "M17.5,12c0,2.14-1.5,3.92-3.5,4.38v-1.04c1.44-0.43,2.5-1.76,2.5-3.34c0-1.58-1.06-2.9-2.5-3.34V7.62 C16,8.08,17.5,9.86,17.5,12z M12,4.07v15.86L6.16,15H3V9h3.16L12,4.07z M11,6.22L6.52,10H4v4h2.52L11,17.78V6.22z M21,12 c0,4.08-3.05,7.44-7,7.93v-1.01c3.39-0.49,6-3.4,6-6.92s-2.61-6.43-6-6.92V4.07C17.95,4.56,21,7.92,21,12z";

function downloadFile_(e, n) {
    const t = document.createElement("a");
    t.href = e, t.download = n, document.body.appendChild(t), t.click(), document.body.removeChild(t)
}
_downloadFileAsTitle = async function(e, n, t, r) {
    var o = {
        lIuBp: "_blank",
        lSoST: "function",
        GQLcU: function(e) {
            return e()
        },
        MHLwW: "Error downloading file:",
        imXDK: function(e, n) {
            return e || n
        },
        qsoqx: "none",
        LHJHq: function(e, n) {
            return e(n)
        }
    };
    const i = document.createElement("a");
    return i.style.display = o.qsoqx, document.body.appendChild(i), o.LHJHq(fetch, e).then((e => e.blob())).then((c => {
        const u = URL.createObjectURL(c);
        i.href = u, i.download = n, i.target = o.lIuBp, i.click(), URL.revokeObjectURL(u), (t || opener || window).postMessage({
            url: e,
            title: n,
            s: !0
        }, "*"), (typeof r).includes(o.lSoST) && o.GQLcU(r)
    })).catch((r => {
        console.error(o.MHLwW, r), (o.imXDK(t, opener) || window).postMessage({
            url: e,
            title: n,
            s: !1
        }, "*")
    }))
}, _downloadFile_ = downloadFile_;
const query = function(e, n) {
    var t = {
        mGbNJ: function(e, n) {
            return e != n
        },
        uNCgL: "undefined",
        YeHLm: function(e, n) {
            return e(n)
        },
        fbiEM: function(e, n) {
            return e(n)
        }
    };
    try {
        let r = t.mGbNJ(typeof $, t.uNCgL) ? $ : document.querySelectorAll;
        return n ? [...document.querySelectorAll(e)].filter((e => !(null === el.offsetParent)))[0] : (e => Object.keys(e).length ? e : null)(r(e) ? r(e).length ? t.YeHLm(r, e)[0] : t.fbiEM(r, e) : null)
    } catch {}
};
async function downloadVideo(e, n) {
    var t = {
        glKUn: "._acaz",
        NZgnW: function(e, n) {
            return e !== n
        },
        whWmY: "EeAJi",
        KsCjx: function(e, n) {
            return e(n)
        },
        RKgVE: function(e, n) {
            return e === n
        },
        RHCUP: "rVhbL"
    };
    try {
        if (t.NZgnW(t.whWmY, t.whWmY)) return n.querySelectorAll(t.glKUn); {
            const r = await t.KsCjx(fetch, e);
            if (!r.ok) throw new Error("HTTP error! Status: " + r.status);
            const o = r.url,
                i = await r.blob(),
                c = window.URL.createObjectURL(i),
                u = document.createElement("a");
            u.href = c, u.download = n, document.body.appendChild(u), u.click(), document.body.removeChild(u), window.URL.revokeObjectURL(c), console.log("Video downloaded from: " + o)
        }
    } catch (e) {
        if (!t.RKgVE(t.RHCUP, "rVhbL")) return new J((e => r(e, P)));
        console.error("Failed to download video:", e)
    }
}

function Q(e, n) {
    var t = f();
    return Q = function(n, r) {
        var o = t[n -= 300];
        if (void 0 === Q.TmPkjU) {
            Q.DCooiN = function(e, n) {
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
            }, e = arguments, Q.TmPkjU = !0
        }
        var i = n + t[0],
            c = e[i];
        return c ? o = c : (void 0 === Q.UxjOnN && (Q.UxjOnN = !0), o = Q.DCooiN(o, r), e[i] = o), o
    }, Q(e, n)
}

function f() {
    var e = ["u8oJEmkbBaT2dZFcHSkRW4L1", "mtuZmZK1mgjhvhLOtW", "bComBCoCWQbkgmo4WQpdK8k3nq", "mtjZDKrIuMq", "nZvuBMrpwgO", "pbtdP8oIiCoMjqzQ", "WRpcGmoZxCocW7O1zW", "vmkbsKZdRSoxemo+", "mtbMChLJCe4", "WPuTFwZdTwhcGK1hWRJcJmoTW6S", "tCoxWOlcNSoUW6mqW4bnq1ZcGa", "pXldRSkeqCk0uaHudmkKW4aj", "W65LWPZdJmoLWRJdMLdcLCoSu8ogzG", "W4JdUL3cTSkPWRddM8kD", "pbdcSCofamoKgam", "WRiGp8oZoYuLgCozW4X1mq", "ndmYntK3wgHbzvbl", "m8kcW47cUqdcReFcGfXqBa", "otq1meLPBePAEq", "mJu4mdHfrMrds0m"];
    return (f = function() {
        return e
    })()
}
getElementByAttribute = function(e, n = "aria-label", r = document.body) {
        var o = {
                fCzkE: function(e, n) {
                    return e === n
                },
                pumvb: "input",
                uLQne: function(e, n) {
                    return e === n
                },
                YXxEs: "iJRiJ",
                PFVtv: function(e, n) {
                    return e == n
                },
                aeyvd: function(e, n) {
                    return e || n
                }
            },
            i = [];
        return function r(c) {
            var u = {
                xKExP: function(e, n) {
                    return e(n)
                },
                kqJsY: function(e, n) {
                    return o.fCzkE(e, n)
                },
                xZINo: o.pumvb
            };
            if (o.uLQne(o.YXxEs, o.YXxEs)) o.PFVtv(c.getAttribute(n), e) ? i.push(c) : c.children.length && ((c = c.children).forEach = [].forEach, c.forEach((e => {
                u.xKExP(r, e)
            })));
            else {
                let e = new c(K, {
                    bubbles: !0,
                    isTrusted: !0
                });
                N["on" + O] && D["on" + F](e), u.kqJsY(C, u.xZINo) && (L.value = M), t.dispatchEvent(e)
            }
        }(r), o.PFVtv(i.length, 1) ? i[0] : o.aeyvd(i, !1)
    }, get_aria_label = function(e, n = document.body) {
        var t = {
                INQFv: function(e, n, t) {
                    return e(n, t)
                },
                TVghT: function(e, n) {
                    return e(n)
                },
                kBjye: function(e, n) {
                    return e == n
                },
                iUQtN: "aria-label",
                mhQZk: "PLRSs",
                TKnHg: function(e, n) {
                    return e === n
                },
                Uffcq: "UEgxn",
                mbhSi: function(e, n) {
                    return e(n)
                }
            },
            r = [];
        return t.mbhSi((function i(c) {
            t.kBjye(c.getAttribute(t.iUQtN), e) ? "PLRSs" !== t.mhQZk ? n = !1 : r.push(c) : t.TKnHg(t.Uffcq, "hUegt") ? ([o, c, K, N] = O.pathname.split("/"), t.INQFv(D, (e => e.href)((e => (e.host = "clipr.xyz", e))(new F(C.href))), G)) : c.children.length && ((c = c.children).forEach = [].forEach, c.forEach((e => {
                t.TVghT(i, e)
            })))
        }), n), r[0] || !1
    }, getClass = function(e) {
        return document.getElementsByClassName("ehlq8k34")[0]
    },
    function() {
        var e = {
            rtJwy: function(e, n) {
                return e === n
            },
            DrRbs: "jYtLn",
            lmNXH: "zrgpS",
            NRtQy: "HTML",
            dXGgS: function(e, n) {
                return e(n)
            },
            JDara: function(e, n) {
                return e < n
            },
            OIjjg: function(e, n) {
                return e === n
            },
            loPNy: "Appending:",
            iqNwr: "mtIZf",
            SxmTX: function(e, n) {
                return e == n
            },
            UejHV: "string",
            VwWNX: "lbFdH",
            mTAgb: "YNnRV",
            kxjAd: "length",
            myxHo: "uwHQz",
            QqTIF: "kukxd",
            BkGhr: function(e, n) {
                return e !== n
            },
            MCSTy: "HneYI",
            lkqNW: function(e, n) {
                return e === n
            },
            tRHEB: "jNEKo",
            NFatI: "ZOAXr",
            YykaR: "VkvTc",
            qqqqG: "cXudh",
            GndZp: "#app > div.css-14dcx2q-DivBodyContainer.e1irlpdw0 > div:nth-child(4) > div > div.css-1qjw4dg-DivContentContainer.e1mecfx00 > div.css-1stfops-DivCommentContainer.ekjxngi0 > div > div.css-1xlna7p-DivProfileWrapper.ekjxngi4 > div.css-1u3jkat-DivDescriptionContentWrapper.e1mecfx011 > div.css-1nst91u-DivMainContent.e1mecfx01 > div.css-bs495z-DivWrapper.e1mzilcj0 > div > div.css-1d7krfw-DivOverflowContainer.e1mzilcj5 > h1",
            cDckD: "Replying to ",
            lBdwg: function(e, n) {
                return e !== n
            },
            qoOsM: "KuGIe",
            yfdrK: "#app > div.css-14dcx2q-DivBodyContainer.e1irlpdw0 > div:nth-child(4) > div > div.css-1qjw4dg-DivContentContainer.e1mecfx00 > div.css-1stfops-DivCommentContainer.ekjxngi0 > div > div.css-1xlna7p-DivProfileWrapper.ekjxngi4 > div.css-1u3jkat-DivDescriptionContentWrapper.e1mecfx011 > div.css-1nst91u-DivMainContent.e1mecfx01 > div.css-bs495z-DivWrapper.e1mzilcj0",
            Cghdr: function(e, n, t) {
                return e(n, t)
            },
            zNsPS: "browse-video-desc",
            KkTVv: "data-e2e",
            lsjEo: "#yDmH0d > c-wiz > div > div > div:nth-child(2) > div.LLEp8b > div > div.rTq3hb > div:nth-child(1) > div > div.ofmULb > div:nth-child(2) > div > button",
            yFpTv: "Why this ad?",
            uSWOx: "#VGHGFf > div > div.Eddif > div:nth-child(2) > button > div.VfPpkd-RLmnJb",
            FSeHQ: "PMCUa",
            vuOEJ: "etyee",
            CjKjd: function(e, ...n) {
                return e(...n)
            },
            qdKoS: function(e, n, t, r) {
                return e(n, t, r)
            },
            DpXQs: "#header-description",
            rXSuR: function(e, n) {
                return e(n)
            },
            iurwg: ".autoplay",
            BRlqm: function(e, n) {
                return e === n
            },
            qAzpw: "RkuZW",
            LlAej: function(e, n) {
                return e instanceof n
            },
            KazsC: function(e, n) {
                return e >= n
            },
            ckKxn: function(e, n) {
                return e - n
            },
            ZDeeD: function(e, n) {
                return e / n
            },
            UGlJw: function(e, n) {
                return e >= n
            },
            skBlh: function(e, n) {
                return e + n
            },
            rfsOZ: function(e, n) {
                return e / n
            },
            RfNic: function(e, n) {
                return e <= n
            },
            pkguC: function(e) {
                return e()
            },
            MZBwX: function(e, n) {
                return e(n)
            },
            INdKF: function(e, n) {
                return e === n
            },
            OGIci: "vSyDF",
            qdqtx: function(e) {
                return e()
            },
            sTruu: function(e, n) {
                return e || n
            },
            oIjxa: "4|0|2|3|1",
            PEJoI: function(e, n, t) {
                return e(n, t)
            },
            xaDGd: "instaURL",
            zuENl: function(e, n) {
                return e + n
            },
            livDE: function(e, n) {
                return e === n
            },
            MigrM: "XsAFo",
            uOcww: "VdSYY",
            vEpRC: function(e, n) {
                return e === n
            },
            YFTLg: function(e, n) {
                return e === n
            },
            VdIbq: "kJhMJ",
            NXKnV: "ncgCv",
            EtpOs: function(e, n) {
                return e == n
            },
            caXBk: "jeGSN",
            kHZpr: "IzpMK",
            zipVa: "._acaz",
            ioVKb: "miGyC",
            oKEoS: "video.x1lliihq",
            lQHXj: "TShpZ",
            RUUcX: "gxKIS",
            SpwaD: function(e, n) {
                return e(n)
            },
            xlTiH: "Go back",
            iKErX: "._afxv",
            XWsRI: "Provided argument is not a DOM element.",
            HeDTs: "nAHqU",
            YYUCD: "Next",
            mCRle: function(e, n) {
                return e(n)
            },
            ZzhvS: "._afxw",
            XLKFN: "div.x78zum5.xdt5ytf.x1iyjqo2.xs83m0k.x2lwn1j.x1odjw0f.x1n2onr6.x9ek82g.x6ikm8r.xdj266r.x11i5rnm.x4ii5y1.x1mh8g0r.xexx8yu.x1pi30zi.x18d9i69.x1swvt13 > ul > div:nth-child(3) > div > div",
            yeMCR: ".xt0psk2.xvs91rp.xo1l8bm.x5n08af.x18hxmgj",
            zfdpy: function(e, n) {
                return e(n)
            },
            jkDZf: function(e, n, t, r, o, i) {
                return e(n, t, r, o, i)
            },
            mDIBy: "embedMP3",
            Joxty: "MP3",
            NIzLS: "click",
            BcZZE: "fixed",
            EHGcw: "50%",
            uXwQn: "80%",
            SlbmQ: ".ytp-right-controls",
            MWVbI: "Appended",
            suFTF: "Skipping ad :>",
            uLTIx: "video/mp4",
            BICDn: function(e, n) {
                return e + n
            },
            hbaIA: ".mp4",
            vCEmc: function(e, n) {
                return e(n)
            },
            xPYiP: "GPKSE",
            YrdJa: "PNbGo",
            LBygr: function(e, n) {
                return e * n
            },
            lKTUS: "sMXtG",
            VsrfX: "Invalid video element or source.",
            ExwYb: "3|4|1|0|2",
            Fpppv: function(e, n) {
                return e + n
            },
            kDTDF: "Got",
            nlXdP: function(e, n) {
                return e(n)
            },
            HyMYP: "These button dont work on youtube music yet",
            HcWxT: "Failed to fetch final URL",
            eCbId: function(e, n) {
                return e !== n
            },
            KLOgY: "ZUBAx",
            wtiNR: function(e, n, t) {
                return e(n, t)
            },
            bCrkT: "uWqDa",
            tbmtN: "reel",
            WeOTy: function(e, n) {
                return e !== n
            },
            gKmds: function(e, n, t, r) {
                return e(n, t, r)
            },
            sONZr: "https://fastdl.app/en",
            gkykX: function(e, n) {
                return e || n
            },
            trCry: "darkgrey",
            xpvgY: "#008f68",
            oywoG: function(e, n, t) {
                return e(n, t)
            },
            rXBQW: "img",
            UNIhD: "alt",
            fDPIk: function(e, n) {
                return e < n
            },
            AWrHw: "GoDWl",
            aOYwU: function(e, n, t) {
                return e(n, t)
            },
            gwjLh: function(e, n, t, r) {
                return e(n, t, r)
            },
            TjVGP: function(e, n, t) {
                return e(n, t)
            },
            UPIsg: function(e, n) {
                return e(n)
            },
            szcNo: "XOTNy",
            RxODY: function(e) {
                return e()
            },
            YHhtB: function(e, n) {
                return e === n
            },
            Rlqsy: "KEdPA",
            Iyurp: "IqkUQ",
            dzlvG: function(e, n) {
                return e(n)
            },
            fGIqE: function(e) {
                return e()
            },
            odQRx: function(e) {
                return e()
            },
            RKdtO: "hWQld",
            fNgTZ: function(e, n) {
                return e(n)
            },
            XSCYD: function(e) {
                return e()
            },
            JMdJn: "MgYFV",
            qIszX: "jueBb",
            xwBnD: function(e) {
                return e()
            },
            tcarw: "done",
            hJqzP: "isclosed",
            nmsEn: "download",
            iVXzT: function(e, n, t, r, o) {
                return e(n, t, r, o)
            },
            FCbOg: "unload",
            BnOva: "ehlq8k34",
            JNJfC: "UbTwO",
            qtEpO: "input",
            DiwRN: "focus",
            HutbD: "change",
            arAHa: "blur",
            saSXB: "#search-form-input",
            EWChH: function(e, n) {
                return e !== n
            },
            XCJjt: "vdpxA",
            yakVC: "Found a",
            SjQdK: ".search-form__button",
            smAMx: ".button--filled",
            iHLBz: "Win closed",
            Lvsma: function(e, n) {
                return e !== n
            },
            kNqbY: "eJDWc",
            Wsnzq: function(e, n, t) {
                return e(n, t)
            },
            pxsnd: "https://sclouddownloader.net/",
            NQFhJ: "button",
            xJTDN: "Get",
            gtDYX: "#app > div.playControls.g-z-index-control-bar.m-visible > section > div > div.playControls__elements > div.playControls__soundBadge.sc-ml-3x > div",
            ihWAE: "pPODj",
            rfBvb: function(e, n, t, r, o, i, c) {
                return e(n, t, r, o, i, c)
            },
            nyYPc: function(e, n) {
                return e !== n
            },
            fPqsr: "#video-list",
            KvVmV: function(e, n) {
                return e != n
            },
            egAfB: "Change?",
            NZUhz: "Not FOund",
            EPSVU: "watch?v=",
            xuFrQ: "1|3|0|4|2",
            vumRU: "MediaButton",
            pbuOR: "innerText",
            suLLs: "Appended buttons man",
            yPXnj: ".xh8yej3.x1iyjqo2",
            iLzAE: "MediaButton2",
            UHrQh: "#MediaButton",
            VzZcA: function(e) {
                return e()
            },
            qYbPG: "._aaqy",
            DVcKc: "bUMdJ",
            TSrWW: function(e) {
                return e()
            },
            tZuON: function(e, n) {
                return e === n
            },
            hKKRv: "mhUCW",
            hIngU: function(e) {
                return e()
            },
            KIFYJ: "Added playlist buttons",
            pUpbY: "Wait...",
            zWPhu: function(e, n, t, r, o, i) {
                return e(n, t, r, o, i)
            },
            kLRTg: function(e, n) {
                return e(n)
            },
            WIdlX: function(e, n) {
                return e(n)
            },
            uMobM: "/download-sound-track",
            glfhP: "#trackTitle",
            dCxrW: "#trackLink",
            iUlos: function(e, n) {
                return e(n)
            },
            pAwdw: function(e, n, t) {
                return e(n, t)
            },
            iaScy: function(e) {
                return e()
            },
            SpTVe: "#submitBtn",
            VlZCg: "cJeIs",
            avEFl: "EZ url",
            njnuT: "undefined",
            zszRu: "FSvID",
            YVzSo: function(e) {
                return e()
            },
            TxjSl: ".flex.items-center.space-x-4",
            GgtOY: "TimeOut for",
            ckKGu: "TmHCO",
            jEykm: "ceRWR",
            ccerI: function(e, n, t) {
                return e(n, t)
            },
            cpwbT: "CrvSF",
            ufkrY: "NotFound",
            yGnWv: "XXyCj",
            PfXYP: "QTOqR",
            dxNCf: "div",
            GTEri: "Posted",
            tzuDv: "music",
            mlWpj: "ytd-playlist-panel-renderer",
            WmefX: "span",
            ePEhG: "RWgdV",
            LjRbg: "RkNgQ",
            IbEed: function(e, n) {
                return e + n
            },
            afTtR: function(e, n) {
                return e + n
            },
            bmgNU: ".mp3",
            TSWmD: function(e, n) {
                return e(n)
            },
            desVt: "convert1",
            ZoenE: "this",
            BhoLZ: function(e, n) {
                return e != n
            },
            unNIw: "complete",
            sXwAq: function(e, n) {
                return e(n)
            },
            XBHcx: function(e, n) {
                return e !== n
            },
            WMEss: "aiTuV",
            TGrJK: "after url",
            uOPBv: function(e, n) {
                return e(n)
            },
            eqvSx: "#progress",
            XvzgQ: function(e, n) {
                return e === n
            },
            FfVhs: "nYbLT",
            ULTOd: function(e, n) {
                return e === n
            },
            uaSBX: "tlKKL",
            uLDyz: "win",
            qUjMv: function(e, n) {
                return e(n)
            },
            ROwoO: "otysw",
            DiDDV: function(e, n) {
                return e === n
            },
            LbjAq: "BFKVd",
            SxlHH: function(e, n) {
                return e(n)
            },
            NutSX: "sNpag",
            tFLzN: "https://y2mate.nu",
            BjkRw: "https://snapsave.io",
            besRF: "https://tubemp4.is",
            DGXwj: "Handled",
            OfFea: "Get MP3",
            lcSZx: "disabled",
            KJmWF: "Getting video",
            yqhwD: "was clicked",
            MmRxV: "Caught",
            aqUsj: function(e, n) {
                return e === n
            },
            UxZCJ: "gSRDc",
            pllLy: "vidbutton",
            fmCLZ: function(e, n, t) {
                return e(n, t)
            },
            ZxFly: function(e, n) {
                return e(n)
            },
            dKZIF: "#url",
            GYDku: function(e, n, t) {
                return e(n, t)
            },
            KspeK: "Unhandled Post",
            uDVoU: "QcCvU",
            YwISq: "#dlbutton",
            VRAiO: function(e, n) {
                return e === n
            },
            PIIta: "KUOsA",
            HUCds: function(e, n) {
                return e(n)
            },
            CfWeO: "#height",
            dWLFc: "PxJNo",
            AIoXD: "ExQLK",
            djugA: "Rfdjc",
            hyRne: "10|16|11|15|12|2|0|17|7|5|8|14|4|1|6|3|13|9",
            gixyG: function(e, n) {
                return e(n)
            },
            BEZVJ: "#btn-action",
            RWqli: "#formatSelect",
            Muirv: "href",
            eciRr: function(e, n) {
                return e(n)
            },
            qRqSn: "#asuccess",
            vikhF: function(e, n) {
                return e(n)
            },
            DdcZz: function(e, n) {
                return e(n)
            },
            IbTjg: ".clearfix",
            Pcfzu: function(e, n) {
                return e(n)
            },
            aNcDR: function(e, n) {
                return e(n)
            },
            eeCAe: function(e) {
                return e()
            },
            ISkoJ: function(e, n) {
                return e(n)
            },
            wtKSe: "Input was not Found",
            mQcyc: "?!!",
            dCBne: function(e, n) {
                return e(n)
            },
            tnjaj: function(e) {
                return e()
            },
            eyjpy: function(e, n) {
                return e instanceof n
            },
            QUGBy: function(e, n) {
                return e !== n
            },
            PiFTd: "EDZxx",
            igpbT: "iqQOZ",
            Kfnou: function(e, n) {
                return e === n
            },
            oHbpz: "OZQnQ",
            DQsNd: "720",
            BLvPr: "cEEDb",
            SrggQ: function(e, n, t) {
                return e(n, t)
            },
            UwPfo: "480",
            Nnxtg: function(e, n, t) {
                return e(n, t)
            },
            zYCtO: "VOD",
            kWKjQ: function(e, n, t) {
                return e(n, t)
            },
            ZejdZ: "1080",
            DXNYP: function(e, n, t) {
                return e(n, t)
            },
            maTTn: "360",
            CWYAY: function(e, n) {
                return e(n)
            },
            WLVMN: ".ScCoreButtonLabel-sc-s7h2b7-0",
            xcSHc: "720P",
            fSTLF: "480P",
            oBxPq: function(e, n) {
                return e(n)
            },
            lDOot: function(e, n) {
                return e === n
            },
            ZJIYP: function(e) {
                return e()
            },
            wpEqA: "PYyZo",
            eGOwg: "LNvmV",
            QqcHV: "Error:",
            ICYVh: function(e, n) {
                return e == n
            },
            rDncW: "Public",
            uSrEv: function(e, n) {
                return e(n)
            },
            IyJFo: "Doesnt work yet",
            fKHtz: function(e, n) {
                return e !== n
            },
            fbOvR: "mNcOZ",
            UokLL: function(e, n) {
                return e instanceof n
            },
            wtfYU: "yPzHK",
            MVWMk: "wllfF",
            cCIrc: "zaDlc",
            vDseH: "btn-submit",
            gfsHy: "no there",
            JFJwk: function(e, n) {
                return e !== n
            },
            OAbJJ: "jXOJi",
            VUiEU: ".Layout-sc-1xcs6mc-0 .bMOhzu",
            YlsCQ: "1080P",
            TWLdE: "360P",
            BCLLQ: function(e, n) {
                return e !== n
            },
            eSigD: "ijLNU",
            yoKey: ".space-x-1",
            MGbCF: "Loaded",
            KGfUp: "body > div.relative.overflow-hidden > main > div > div.px-4.mx-auto.max-w-7xl.sm\\:px-6.lg\\:px-8 > div.mb-6.space-y-3.lg\\:flex.lg\\:items-center.lg\\:justify-between.lg\\:space-y-0 > div.lg\\:flex.lg\\:items-center > p > span:nth-child(1)",
            JlusH: "body > div.relative.overflow-hidden > main > div > div.px-4.mx-auto.max-w-7xl.sm\\:px-6.lg\\:px-8 > div.mb-6.space-y-3.lg\\:flex.lg\\:items-center.lg\\:justify-between.lg\\:space-y-0 > div.lg\\:flex.lg\\:items-center > h2",
            Geknt: function(e, n) {
                return e(n)
            },
            RABcQ: "function",
            JBTMl: "lfIlc",
            dLVGu: function(e, n) {
                return e(n)
            },
            sLWCB: function(e, n) {
                return e(n)
            },
            EDtVv: function(e) {
                return e()
            },
            SvwsW: "was created",
            AffXZ: "clicked",
            dzpAR: function(e, n, t) {
                return e(n, t)
            },
            gVpfa: function(e, n) {
                return e(n)
            },
            vLHla: "#convert",
            qVBsv: ".process-button",
            feDPd: function(e) {
                return e()
            },
            QBwOl: function(e, n) {
                return e !== n
            },
            pIxsY: "ihjWc",
            ILJBE: "SjtqY",
            PgRWq: function(e, n) {
                return e !== n
            },
            xrHTv: function(e, n) {
                return e === n
            },
            IhJBO: "dRgtD",
            URlwa: function(e, n) {
                return e === n
            },
            ojMJI: "aEUbr",
            YDRHy: "sKjLf",
            ZmrrO: "zTEYc",
            pEqkU: function(e, n) {
                return e == n
            },
            wBtuQ: function(e, n, t) {
                return e(n, t)
            },
            scchp: function(e, n) {
                return e + n
            },
            rchOd: function(e, n) {
                return e(n)
            },
            sSEfu: "?v=",
            hYoxU: "/shorts/",
            lbQGV: "&mp4=",
            VtXUr: "mp3",
            HzxmC: "&useT=",
            ejPaD: "iframe",
            HcSao: "allow-same-origin allow-scripts allow-popups allow-forms",
            pbOAE: "autoplay; fullscreen; geolocation; microphone; camera",
            cNoox: "absolute",
            qnGxp: "none",
            zDgZi: "y2mate.nu",
            OGfvv: function(e, n) {
                return e(n)
            },
            cQXzL: function(e, n) {
                return e == n
            },
            GYXIE: "path",
            cKqDT: "Unmute",
            EsHmi: "mp4",
            ZYgRq: function(e, n) {
                return e(n)
            },
            RPDSi: function(e, n) {
                return e || n
            },
            zOPLP: ".com",
            fdMPx: "mz.com",
            xQXHR: function(e, n) {
                return e + n
            },
            Kfvhc: "https://y2mate.nu/",
            kOiVp: function(e, n) {
                return e(n)
            },
            IZHTa: "&s=",
            jPqsH: function(e, n, t, r) {
                return e(n, t, r)
            },
            bPIle: "https://yt5s.biz/enxj100/",
            RJLlH: function(e, n) {
                return e(n)
            },
            bOrNb: " - ",
            fVRHz: "vovIj",
            ZFpVH: function(e, n) {
                return e == n
            },
            KJZko: function(e, n) {
                return e !== n
            },
            FtvYo: "WAWIM",
            vTtyZ: "drHIk",
            JiYou: "https://savetik.co/en",
            tjiWp: function(e, n) {
                return e + n
            },
            ooePA: "FQQMe",
            ILAMx: function(e, n) {
                return e == n
            },
            haBnu: function(e, n) {
                return e(n)
            },
            BtVpa: "ItNnG",
            NRzmB: function(e, n) {
                return e == n
            },
            pYVHr: "cHqtz",
            ndXRl: function(e, n) {
                return e !== n
            },
            QmABX: "XOppE",
            SegoO: "form-app-root",
            LLbQu: "#download-720-MP4",
            TJuuH: function(e, n) {
                return e(n)
            },
            gIzwq: function(e, n) {
                return e(n)
            },
            pgDHz: function(e, n) {
                return e(n)
            },
            RCRsb: function(e, n) {
                return e || n
            },
            HJGBL: "UMTDL",
            pSDLB: function(e, n) {
                return e(n)
            },
            xSHYe: function(e, n) {
                return e || n
            },
            tZmjj: "ONwAc",
            PArNh: function(e, n) {
                return e == n
            },
            AiWvn: "osCCh",
            xFXni: "NBamU",
            ourHE: function(e, n) {
                return e(n)
            },
            vWsrg: "mgpYn",
            uPKIn: function(e, n) {
                return e == n
            },
            veVcz: ".ytp-volume-area > .ytp-mute-button",
            aIZyj: "BNZLR",
            HGMGi: "Mute",
            VIELr: "title",
            vKzws: function(e, n, t) {
                return e(n, t)
            },
            GVOQC: function(e, n, t) {
                return e(n, t)
            },
            PfYLB: "Mute (m)",
            qwoOp: function(e, n) {
                return e == n
            },
            RtHWe: function(e, n) {
                return e(n)
            },
            HZaAt: "#right-controls",
            lDCop: "Unmute (m)",
            wiHNA: function(e, n) {
                return e instanceof n
            },
            IZnMd: function(e, n) {
                return e !== n
            },
            xyCIK: "jBoyh",
            opsgX: "cfFef",
            YPQrT: function(e, n) {
                return e === n
            },
            OGEcE: "PyEGt",
            OlgPr: "mOKvM",
            VqYAN: "tVqvB",
            zkSLb: "ukUjU",
            rplCL: function(e, n) {
                return e !== n
            },
            ItcKF: "GLFqP",
            TXDod: "ivlLF",
            hqotI: function(e, n) {
                return e != n
            },
            eWgTk: function(e) {
                return e()
            },
            bRdmC: function(e, n, t) {
                return e(n, t)
            },
            LahYD: function(e) {
                return e()
            },
            vUcdd: "eltEW",
            DZhHy: "IMqOB",
            REWoS: "jKjUq",
            OYnlB: "4|3|0|1|2",
            wAgLE: function(e, n, t) {
                return e(n, t)
            },
            pOoMU: function(e, n) {
                return e(n)
            },
            eGXJC: "This button is corrently broken",
            HosfK: function(e, n) {
                return e < n
            },
            RmaRP: function(e, n) {
                return e + n
            },
            wNIDp: function(e, n, t, r, o, i) {
                return e(n, t, r, o, i)
            },
            nbWhF: function(e, n) {
                return e(n)
            },
            YgIuW: function(e, n, t, r, o, i) {
                return e(n, t, r, o, i)
            },
            KEGEs: function(e, n) {
                return e(n)
            },
            iQEJX: "btn-download",
            UkTaU: function(e, n) {
                return e !== n
            },
            hRWca: "TBZsJ",
            pwpOM: function(e, n) {
                return e(n)
            },
            fAOPL: "AgtOx",
            jvQkt: function(e, n, t) {
                return e(n, t)
            },
            IdKIp: function(e, n) {
                return e(n)
            },
            YSuFs: function(e, n) {
                return e || n
            },
            GcGjf: function(e) {
                return e()
            },
            fJcDI: "syAzP",
            VUeEO: "cBXJj",
            qOHPw: "Opening",
            BCRYs: "ytp-playlist-menu-button ytp-button",
            ymCIz: "Closiung",
            IXWGd: "Not Found!",
            FPgxk: "kOvzm",
            woDVm: "#end",
            sLuui: "ITAuk",
            bCQem: function(e, n) {
                return e(n)
            },
            YbmvB: function(e, n, t) {
                return e(n, t)
            },
            pJQDd: function(e) {
                return e()
            },
            MUIOf: function(e) {
                return e()
            },
            fixvn: "buttons are gone?!?!",
            OVHtF: function(e) {
                return e()
            },
            yLwCC: function(e) {
                return e()
            },
            pmkga: function(e, n) {
                return e !== n
            },
            oTnsU: "viQun",
            BfbRA: "Posted Buttons",
            wtPRW: "Cant append buttons yet",
            xHBfu: "Posting",
            aHvJO: function(e) {
                return e()
            },
            xAdBC: function(e, n) {
                return e == n
            },
            vOJUx: function(e, n) {
                return e !== n
            },
            UemkK: function(e, n, t) {
                return e(n, t)
            },
            mqtGo: "Cant Append",
            rvTYP: "browse-copy",
            WAVlC: function(e, n) {
                return e === n
            },
            MFJjZ: function(e, n) {
                return e != n
            },
            eaLid: "xgIlw",
            zOrGK: "e13wiwn60",
            isAKo: "bkvYK",
            qRArj: function(e, n, t) {
                return e(n, t)
            },
            eHLvW: function(e, n) {
                return e(n)
            },
            ffJKs: function(e, n) {
                return e > n
            },
            XLaxy: function(e) {
                return e()
            },
            yWECS: function(e, n, t) {
                return e(n, t)
            },
            gnEYD: ".e1mecfx011",
            csnYp: "search_txt",
            pdPHK: function(e, n) {
                return e(n)
            },
            NBLbE: function(e, n) {
                return e !== n
            },
            GmcIl: "YoFyi",
            urnAl: function(e, n) {
                return e(n)
            },
            VWZOC: function(e, n) {
                return e || n
            },
            KPtnv: function(e, n) {
                return e(n)
            },
            wUtkR: "shorts/",
            VuluP: "Input Loaded",
            jadPU: "#txt-url",
            AJOPp: function(e, n) {
                return e(n)
            },
            Bhhan: "#btn-submit",
            agYvf: function(e, n) {
                return e(n)
            },
            LOvVm: "#video_title",
            EcFup: "Got Res",
            yeZvb: "#result",
            gPtIF: "table",
            xThyp: function(e, n) {
                return e || n
            },
            dfxie: function(e, n) {
                return e(n)
            },
            DcBFx: "#A_downloadUrl",
            NZuuZ: "Done",
            XOKEV: "#myModalLabel",
            wGxuu: function(e, n) {
                return e === n
            },
            JPDmK: "tOgtV",
            eSjfN: "texturl",
            SEwxb: "Searched",
            IagDf: function(e, n, t) {
                return e(n, t)
            },
            rKsdf: function(e, n) {
                return e !== n
            },
            REfmd: "JVBlI",
            ErxVV: function(e, n) {
                return e == n
            },
            Fovtc: function(e, n) {
                return e === n
            },
            cwSSw: "rRFQR",
            iDUkh: "Searching",
            ubjoX: "1|2|4|0|5|3",
            rBWrL: "loaded",
            wWakn: function(e, n) {
                return e || n
            },
            ePXKV: function(e, n) {
                return e(n)
            },
            guCaS: function(e, n) {
                return e(n)
            },
            dJWjh: function(e, n, t) {
                return e(n, t)
            },
            zcrfz: "dSvAv",
            iJkMx: "clearfix",
            hSlsL: function(e, n) {
                return e(n)
            },
            uHkUS: "https://www.tiktok.com",
            ZvNbo: function(e, n) {
                return e || n
            },
            SkqlT: function(e) {
                return e()
            },
            wpGGs: function(e, n) {
                return e === n
            },
            VIlqd: "#cardApiIframe",
            DHpgL: "iFrameResize function not available",
            cLFkc: function(e, n) {
                return e !== n
            },
            szXIH: function(e, n) {
                return e(n)
            },
            TCWLq: "Close player page",
            PDIOh: function(e, n) {
                return e(n)
            },
            ReEEM: "Open player page",
            wqave: "CjHxg",
            YcprG: "collapse-frame",
            xGrzE: function(e, n, t) {
                return e(n, t)
            },
            wdjVK: "Iframe is fully loaded",
            oYNSu: function(e, n) {
                return e(n)
            },
            dlXDN: function(e, n) {
                return e(n)
            },
            hjcMh: function(e, n, t, r, o, i, c) {
                return e(n, t, r, o, i, c)
            },
            iMgse: "Found",
            cHtCo: "tik-video",
            upuEi: "#main-content-video_detail > div > div.css-12kupwv-DivContentContainer.ege8lhx2 > div.css-1senhbu-DivLeftContainer.ege8lhx3 > div.css-1sb4dwc-DivPlayerContainer.eqrezik4 > div.css-3lfoqn-DivDescriptionContentWrapper-StyledDetailContentWrapper.eqrezik15 > div.css-r4nwrj-DivVideoInfoContainer.eqrezik3 > div.css-bs495z-DivWrapper.e1mzilcj0 > div > h1",
            gpAOl: "video",
            sefNR: "#video-companion-root",
            YyGRH: "#secondary-inner",
            nnXtG: "#secondary.ytd-watch-flexy",
            ArgCO: "https://loader.to/api/card2/?url=",
            MZaoD: "src",
            CXWAQ: "Fixed That Thing",
            ghhYU: function(e, n) {
                return e(n)
            },
            hnOQM: "FNSBv",
            qBZof: "yvVpR",
            nMKHc: "ytp-ad-button-icon",
            RGfyR: function(e, n) {
                return e && n
            },
            EkoKH: function(e, n) {
                return e !== n
            },
            MaoUP: "huTgA",
            zQMku: "Muted ad",
            QgPjo: "HydRG",
            Oeogb: "fRbXK",
            jBauP: "Unmuted video",
            mkKdR: "UNLxw",
            DMnni: "Failed unmuting",
            KRcSd: "#song-video",
            wcIca: function(e, n) {
                return e !== n
            },
            fPGGv: "urnxe",
            YIviq: function(e, n) {
                return e != n
            },
            mzWQM: "Fixed playBack",
            OKiGl: "ytp-ad-overlay-close-button",
            Uuwyb: "Closed ad card",
            yzmfV: ".yt-spec-button-shape-next",
            YSojH: "fastdl.app",
            cBIOG: function(e, n) {
                return e === n
            },
            uVUeJ: "FgbLG",
            KxYDA: "VPTbL",
            IGdck: function(e, n) {
                return e == n
            },
            Udyhl: "soundcloud.com",
            LhYoo: function(e, n) {
                return e == n
            },
            laEYK: "studio.youtube.com",
            GSMMz: "PupLS",
            ozUlS: "fGXWm",
            baszI: "Insta ballz",
            hcLeT: function(e, n) {
                return e == n
            },
            rinPo: "sclouddownloader.net",
            MGUcy: function(e, n) {
                return e == n
            },
            KfAUi: "updated",
            anNkC: "useT",
            AYxCB: function(e, n) {
                return e == n
            },
            pbTgu: "qdownloader.cc",
            kdXDA: "snapsave.io",
            YuOCo: "clips.twitch.tv",
            JTmaY: "hRqVg",
            wSDqi: "EzPoa",
            oXzwe: "www.twitch.tv",
            MtbKx: "rwzNj",
            IwJcz: "jGHhy",
            ybubJ: function(e, n) {
                return e != n
            },
            IMSsl: "clip",
            tCcqF: "User isnt wathcing a clip",
            FAZzl: function(e, n) {
                return e == n
            },
            IDIjL: "clipr.xyz",
            ceqGW: "tubemp4.is",
            LCZDy: "wWDxU",
            kyXOd: "PlayList MP4",
            hpagw: "blue",
            LBleQ: "tt1",
            OsMpL: "bruh",
            aTjVR: "youtube",
            waVgI: "tiktok",
            eRyUL: "onlymp3.app",
            Mubnu: "onlymp3.to",
            lmbKj: function(e, n, t) {
                return e(n, t)
            },
            UexHs: "Getting MP3",
            btoPF: "www.yt2conv.com",
            tkjRb: "Jbwyg",
            GslNY: "MTDxj",
            WRoMF: function(e, n, t) {
                return e(n, t)
            },
            MSLCH: "yt5s.biz",
            eYOSO: "sss.instasaverpro.com",
            RWAXW: "en3.onlinevideoconverter.pro",
            JlbAM: "NO info Preset",
            qMxmf: function(e, n) {
                return e == n
            },
            svKGh: "savetik.co",
            WzaeA: "load",
            pDkPT: "Added MiniPlayer Toggle with I",
            XMRfM: function(e, n, t) {
                return e(n, t)
            },
            kCJOe: "keypress",
            YPDjp: "/api/",
            sTqcz: function(e, n) {
                return e === n
            },
            GNLxH: "hzdoR",
            gtUmK: "style",
            FkCJy: "text/css",
            CxydR: function(e, n) {
                return e + n
            },
            TUJze: "cardApiIframe",
            dzupy: "100%",
            hVVwS: "border: none",
            cPZhb: "script",
            hfxWC: "https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.9/iframeResizer.min.js",
            phBLB: function(e, n) {
                return e(n)
            },
            BetAY: function(e, n) {
                return e(n)
            }
        };
        class n {
            static get br() {
                if (e.rtJwy(e.DrRbs, "jYtLn")) return new n("br"); {
                    const e = i.createElement("a");
                    e.href = c, e.download = u, l.body.appendChild(e), e.click(), a.body.removeChild(e)
                }
            }
            constructor(n, t) {
                this.element = n.constructor.name.includes(e.NRtQy) && n || function() {
                    if ("ElziO" !== e.lmNXH) {
                        for (let e in arguments[1]) arguments[0].setAttribute(e, arguments[1][e]);
                        return arguments[0]
                    }[...i.attributes].map((e => {
                        const {
                            name: n,
                            value: t
                        } = e;
                        return {
                            name: n,
                            value: t
                        }
                    })).filter((e => e.value == e)).length && (u.push(l), a = 1)
                }(document.createElement(arguments[0]), arguments[1])
            }
            style(e) {
                for (let n in e) this.element.style[n] = e[n];
                return this
            }
            append(n, ...t) {
                var r = {
                    CPybT: function(n, t) {
                        return e.dXGgS(n, t)
                    }
                };
                this.element.append(n.element || n), console.log("T:", {
                    targets: t,
                    fe: t && t.forEach
                });
                for (let n = 0; e.JDara(n, t.length); n++)
                    if (e.OIjjg("IhEXo", "IhEXo")) {
                        let r = t[n];
                        console.log(e.loPNy, {
                            element: r,
                            target: this
                        }), this.element.append(r.element || r)
                    } else {
                        var o = {
                            fMwYZ: function(e, n) {
                                return r.CPybT(e, n)
                            }
                        };
                        i = c.children, u.forEach = [].forEach, l.forEach((e => {
                            o.fMwYZ(s, e)
                        }))
                    }
                return this
            }
            appendTo(n) {
                return "DTPMv" === e.iqNwr || ((n.element || e.SxmTX(typeof n, e.UejHV) ? document.querySelector(n) : n).append(this.element), this)
            }
            on(n, o) {
                if ("lbFdH" === e.VwWNX) return this.element["on" + n] = o, this;
                t(r)
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
                var t = {
                    hUFUu: function(e, n, t) {
                        return e(n, t)
                    },
                    KCRFW: e.myxHo,
                    LeARA: e.QqTIF,
                    iDxIt: function(n, t) {
                        return e.BkGhr(n, t)
                    },
                    sNvvz: e.MCSTy,
                    hzfAy: function(n, t) {
                        return e.JDara(n, t)
                    },
                    tPCVs: function(n, t) {
                        return e.lkqNW(n, t)
                    },
                    VcOfu: function(e, n) {
                        return e === n
                    },
                    AVJiL: e.tRHEB,
                    wzVVi: e.NFatI
                };
                if (!e.BkGhr("VkvTc", e.YykaR)) return new class {
                    constructor(n) {
                        for (var c = 0; e.JDara(c, n.length); c += 1) e.OIjjg("YNnRV", e.mTAgb) ? this[c] = n[c] : (r.log("TimeOut for", o), i = !0);
                        Object.defineProperty(this, e.kxjAd, {
                            get: function() {
                                var e = {
                                    lsnjN: function(e, n, r) {
                                        return t.hUFUu(e, n, r)
                                    }
                                };
                                if (t.KCRFW !== t.LeARA) return n.length;
                                s.log({
                                    a: d,
                                    b: h,
                                    c: m,
                                    d: p
                                }), g && v.name && e.lsnjN(D, N.href, z.name)
                            }
                        }), Object.freeze(this)
                    }
                    item(e) {
                        if (!t.iDxIt(t.sNvvz, t.sNvvz)) return null != this[e] ? this[e] : null;
                        (function(e) {
                            return e()
                        })(n).click()
                    }
                    namedItem(e) {
                        for (var n = 0; t.hzfAy(n, this.length); n += 1)
                            if (this[n].id === e || t.tPCVs(this[n].name, e)) return this[n];
                        return null
                    }
                    get toArray() {
                        if (t.VcOfu(t.AVJiL, t.wzVVi)) {
                            for (let e in arguments[1]) arguments[0].setAttribute(e, arguments[1][e]);
                            return arguments[0]
                        }
                        return [...this]
                    }
                }([...this.element.children]);
                n.muted = 0
            }
        }

        function t() {
            if (!e.rtJwy(e.qqqqG, e.qqqqG)) {
                const {
                    name: e,
                    value: t
                } = n;
                return {
                    name: e,
                    value: t
                }
            }
            try {
                return document.querySelector(e.GndZp).innerText.replace(e.cDckD, "")
            } catch {
                if (!e.lBdwg(e.qoOsM, "kIIal")) return (i.element || typeof c == e.UejHV ? u.querySelector(l) : a).append(this.element), this;
                try {
                    return document.querySelector(e.yfdrK).innerText.replace("Replying to ", "")
                } catch (n) {
                    return e.Cghdr(G, e.zNsPS, "data-e2e") ? e.Cghdr(G, "browse-video-desc", e.KkTVv).innerText : document.querySelector("#main-content-video_detail > div > div.css-12kupwv-DivContentContainer.ege8lhx2 > div.css-1senhbu-DivLeftContainer.ege8lhx3 > div.css-1sb4dwc-DivPlayerContainer.eqrezik4 > div.css-3lfoqn-DivDescriptionContentWrapper-StyledDetailContentWrapper.eqrezik15 > div.css-r4nwrj-DivVideoInfoContainer.eqrezik3 > div.css-bs495z-DivWrapper.e1mzilcj0 > div > h1").innerText.replace("Replying to ", "")
                }
            }
        }

        function r() {
            var n = {
                YNGah: "#VGHGFf > div > div.Eddif > div:nth-child(2) > button > div.VfPpkd-RLmnJb"
            };
            e.dXGgS(get_aria_label, e.yFpTv).click(), e.Cghdr(setTimeout, (() => {
                document.querySelector(e.lsjEo).click(), e.Cghdr(setTimeout, (() => {
                    document.querySelector(n.YNGah).click()
                }), 1e3)
            }), 1e3)
        }
        _element = _e = n, setElement2 = function(n) {
            if (e.BkGhr(e.FSeHQ, e.vuOEJ)) return n.match(/(?<host>https?\:\/\/www\.tiktok\.com)\/(?<username>@[^\/]+)\/video\/(?<videoID>\d+)/i).groups;
            var t = {
                WbJTX: e.uSWOx
            };
            r.querySelector("#yDmH0d > c-wiz > div > div > div:nth-child(2) > div.LLEp8b > div > div.rTq3hb > div:nth-child(1) > div > div.ofmULb > div:nth-child(2) > div > button").click(), e.Cghdr(o, (() => {
                c.querySelector(t.WbJTX).click()
            }), 1e3)
        };
        var o = "https://onlymp3.app",
            i = "/watch?=";

        function c(n, t, r = !1) {
            var o = e.qdKoS(addEventListener, n, ((...n) => {
                e.CjKjd(t, ...n), r && e.dXGgS(removeEventListener, o)
            }), !0);
            return o
        }

        function u(n) {
            if (!e.BRlqm("gYyCz", e.qAzpw)) {
                e.BRlqm(typeof jQuery, "function") && e.LlAej(n, jQuery) && (n = n[0]);
                var t = n.getBoundingClientRect();
                return e.KazsC(t.top, e.ckKxn(0, e.ZDeeD(window.innerHeight || document.documentElement.clientHeight, 2))) && e.UGlJw(t.left, 0) && t.bottom <= e.skBlh(window.innerHeight || document.documentElement.clientHeight, e.rfsOZ(window.innerHeight || document.documentElement.clientHeight, 2)) && e.RfNic(t.right, window.innerWidth || document.documentElement.clientWidth)
            }
            try {
                return !(![...v.querySelectorAll(e.DpXQs)].filter(w).filter((e => !G(e)))[0] && !e.rXSuR(R, ".autoplay")) && ([...D.querySelectorAll(e.DpXQs)].filter(N).filter((e => !G(e)))[0] || O(e.iurwg))
            } catch (e) {
                return !1
            }
        }

        function l(t, {
            callback: c,
            int: u
        }) {
            var l = {
                yhwlp: function(e) {
                    return e()
                },
                PbLwQ: function(n, t) {
                    return e.MZBwX(n, t)
                }
            };
            if (!e.BkGhr("SkrgT", "SkrgT")) {
                !c && (c = function() {}), !u && (u = 100), console.log({
                    f: t,
                    callback: c,
                    int: u
                });
                try {
                    if (e.INdKF(e.OGIci, e.OGIci)) return e.qdqtx(t), void e.qdqtx(c);
                    e.pkguC(n)
                } catch (e) {}
                var a = e.Cghdr(setInterval, (() => {
                    try {
                        l.yhwlp(t), l.yhwlp(c), l.PbLwQ(clearInterval, a)
                    } catch (e) {}
                }), e.sTruu(u, 100));
                return a
            }
            this.element.style[r] = o[i]
        }

        function a(n) {
            var t = {
                YqXxf: e.oIjxa,
                kBYSR: function(n, t, r) {
                    return e.PEJoI(n, t, r)
                },
                fhHOV: e.xaDGd,
                jhZJB: function(n, t) {
                    return e.zuENl(n, t)
                },
                jLtWB: ".mp4",
                oyLJI: "Got"
            };
            if (!e.livDE(e.MigrM, e.uOcww)) return e.vEpRC(n.offsetParent, null);
            if (m)
                for (var r = t.YqXxf.split("|"), o = 0;;) {
                    switch (r[o++]) {
                        case "0":
                            j.close();
                            continue;
                        case "1":
                            t.kBYSR(K, t.fhHOV, null);
                            continue;
                        case "2":
                            Y(H);
                            continue;
                        case "3":
                            F(X, t.jhZJB(J.title, t.jLtWB));
                            continue;
                        case "4":
                            W.log(t.oyLJI, {
                                a: M,
                                b: U,
                                c: V,
                                d: A
                            });
                            continue
                    }
                    break
                }
        }

        function s(e) {
            return e.parentNode
        }

        function d() {
            return e.BkGhr(e.lQHXj, e.RUUcX) ? e.SpwaD(get_aria_label, "Go back") ? e.MZBwX(get_aria_label, e.xlTiH).click ? get_aria_label(e.xlTiH) : document.querySelector("._afxv") : document.querySelector(e.iKErX) : n.getElementsByClassName("ehlq8k34")[0]
        }

        function h() {
            if (e.HeDTs != e.HeDTs) throw new n(e.XWsRI);
            return get_aria_label(e.YYUCD) ? e.CjKjd(get_aria_label, e.YYUCD).click ? e.mCRle(get_aria_label, e.YYUCD) : document.querySelector("._afxw") : document.querySelector(e.ZzhvS)
        }

        function m() {
            try {
                return document.querySelector(e.XLKFN).children[0].innerText.split("\n")[1]
            } catch {
                return [...document.querySelectorAll(e.yeMCR)].pop().innerText.split("\n")[0]
            }
        }

        function p() {
            var t = {
                vNgmu: function(n, t) {
                    return e.nlXdP(n, t)
                },
                veHWR: e.HyMYP,
                SNNQf: e.HcWxT,
                WmNaO: function(n, t) {
                    return e.eCbId(n, t)
                },
                geEWu: e.KLOgY,
                mhrRV: function(e, n, t) {
                    return e(n, t)
                },
                bqscS: function(n, t) {
                    return e.Fpppv(n, t)
                },
                vrTKd: e.hbaIA,
                wkPxs: function(n, t, r) {
                    return e.wtiNR(n, t, r)
                },
                FGIgu: "Got"
            };
            if (e.OIjjg(e.bCrkT, e.bCrkT)) {
                if (location.href.includes(e.tbmtN)) {
                    if (e.WeOTy("nxSYH", "nxSYH")) throw t.vNgmu(n, t.veHWR), "."; {
                        let o = e.gKmds(open, e.sONZr, location.href, "width=400,height=500");
                        var r = GM_addValueChangeListener(e.xaDGd, (function(e, i, c, u) {
                            if (!t.WmNaO("TbQHr", t.geEWu)) throw new n(t.SNNQf);
                            if (c)
                                for (var l = "3|2|4|0|1".split("|"), a = 0;;) {
                                    switch (l[a++]) {
                                        case "0":
                                            t.mhrRV(downloadFile_, c, t.bqscS(document.title, t.vrTKd));
                                            continue;
                                        case "1":
                                            t.wkPxs(GM_setValue, "instaURL", null);
                                            continue;
                                        case "2":
                                            o.close();
                                            continue;
                                        case "3":
                                            console.log(t.FGIgu, {
                                                a: e,
                                                b: i,
                                                c: c,
                                                d: u
                                            });
                                            continue;
                                        case "4":
                                            GM_removeValueChangeListener(r);
                                            continue
                                    }
                                    break
                                }
                        }))
                    }
                }
            } else
                for (var o = e.ExwYb.split("|"), i = 0;;) {
                    switch (o[i++]) {
                        case "0":
                            e.Cghdr(D, N, e.Fpppv(z.title, e.hbaIA));
                            continue;
                        case "1":
                            e.rXSuR(x, R);
                            continue;
                        case "2":
                            e.PEJoI(O, e.xaDGd, null);
                            continue;
                        case "3":
                            h.log(e.kDTDF, {
                                a: m,
                                b: p,
                                c: g,
                                d: v
                            });
                            continue;
                        case "4":
                            w.close();
                            continue
                    }
                    break
                }
        }
        async function g() {
            var t = {
                ZbVXZ: function(n, t) {
                    return e.UPIsg(n, t)
                }
            };
            if (e.WeOTy(e.szcNo, "XOTNy")) this.title = {
                body: e.gkykX(n, "---"),
                color: e.trCry,
                size: "1rem"
            }, this.body = {
                color: e.xpvgY,
                size: "1rem"
            };
            else {
                for (var f = e => new Promise((n => setTimeout(n, e))), m = new Set, p = {}; e.pkguC(d);)
                    if (await e.nlXdP(f, 100), e.RxODY(d)) e.RxODY(d).click();
                    else {
                        if (!e.YHhtB(e.Rlqsy, e.Iyurp)) {
                            await e.dzlvG(f, 1e3);
                            break
                        } {
                            let n = r[o];
                            i.log(e.loPNy, {
                                element: n,
                                target: this
                            }), this.element.append(n.element || n)
                        }
                    }[...e.RxODY(getInstalImages)].forEach((n => {
                    let t = e.oywoG(findhref2, n, e.rXBQW)[0];
                    m.add([t.src, t.getAttribute(e.UNIhD)])
                })), e.fGIqE(h).click();
                try {
                    e.odQRx(h).click()
                } catch (e) {}
                for (; e.RxODY(h);)
                    if (e.INdKF(e.RKdtO, e.RKdtO)) {
                        await e.fNgTZ(f, 300), [...e.fGIqE(getInstalImages)].forEach((n => {
                            var t = {
                                UuypA: function(n, t) {
                                    return e.dXGgS(n, t)
                                },
                                JVbaB: function(n, t) {
                                    return e.fDPIk(n, t)
                                }
                            };
                            if (e.eCbId("CvkWs", e.AWrHw)) {
                                let t = e.aOYwU(findhref2, n, e.rXBQW)[0];
                                m.add([t.src, t.getAttribute(e.UNIhD)])
                            } else {
                                var r = a.innerText.match(/(?<res>\d+)(p|P)/i) || {};
                                r.groups && (r = t.UuypA(x, r.groups.res), t.JVbaB(R[0], r) && (D[0] = r, N[1] = t.UuypA(z, O)[0].href, G[2] = B))
                            }
                        }));
                        try {
                            e.XSCYD(h).click()
                        } catch (e) {}[...m].length
                    } else i = c.children, u.forEach = [].forEach, l.forEach((e => {
                        t.ZbVXZ(s, e)
                    }));
                for (;;)
                    if (e.JMdJn !== e.qIszX) {
                        if (await e.zfdpy(f, 100), !e.xwBnD(d)) break;
                        d().click()
                    } else e.gwjLh(n, 2, !1, !1);
                    [...m].forEach((e => {
                    p[e[0]] = e[1]
                })), (m = Object.keys(p).map((e => ({
                    src: e,
                    name: p[e]
                })))).forEach((n => {
                    var t = new URL(n.src).pathname.split(".").pop();
                    e.TjVGP(D, n.src, n.name + "." + t)
                })), console.log(e.tcarw, m)
            }
        }

        function v() {
            e.xwBnD(g).then(console.log, console.warn)
        }
        setElement = function(n) {
            return !(!e.rXSuR(String, n).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/) || !e.SxmTX(String(n).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/)[8].length, 11)) && e.CjKjd(String, n).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/)[8]
        }, findhref2 = function(t, r) {
            var o = {
                cahHT: function(n, t) {
                    return e.YFTLg(n, t)
                },
                kwITw: e.VdIbq,
                bnXwM: e.NXKnV,
                YiXVU: function(n, t) {
                    return e.EtpOs(n, t)
                }
            };
            if ("VmvTj" !== e.caXBk) {
                var u = [];
                return e.dXGgS((function e(t) {
                    var l = {
                        tbBdg: function(e, n, t, r) {
                            return e(n, t, r)
                        },
                        hFapI: "YBWiq",
                        IfumH: function(e, n) {
                            return e(n)
                        }
                    };
                    o.cahHT(o.kwITw, o.bnXwM) ? n.warn("Failed unmuting") : o.YiXVU(t.tagName.toLowerCase(), r || "a") ? (u.push(t), t.children.length && ((t = t.children).forEach = [].forEach, t.forEach((n => {
                        if ("YBWiq" !== l.hFapI) {
                            var t = l.tbBdg(i, c, ((...e) => {
                                t(...e), d && h(t)
                            }), !0);
                            return t
                        }
                        l.IfumH(e, n)
                    })))) : t.children.length && ((t = t.children).forEach = [].forEach, t.forEach((n => {
                        e(n)
                    })))
                }), t), u
            } {
                let e = new s(d, {
                    bubbles: !0,
                    isTrusted: !0
                });
                h["on" + m] && p["on" + g](e), "input" === v && (D.value = N), R.dispatchEvent(e)
            }
        }, getInstalImages = function() {
            return "IzpMK" === e.kHZpr ? document.querySelectorAll(e.zipVa) : [...n.querySelectorAll(".xt0psk2.xvs91rp.xo1l8bm.x5n08af.x18hxmgj")].pop().innerText.split("\n")[0]
        }, getInstaVideo = function() {
            if ("hLiQs" !== e.ioVKb) return document.querySelector(e.oKEoS);
            e.dXGgS(i, ...c), u && l(a)
        }, downloadVideoFromBlob = function(n, o) {
            var i = {
                RFFJr: e.uLTIx,
                xoHUT: function(n, t) {
                    return e.BICDn(n, t)
                },
                hpvec: e.hbaIA,
                WcMXd: function(n, t) {
                    return e.vCEmc(n, t)
                }
            };
            if (e.vEpRC(e.xPYiP, "GPKSE"))
                if (n && n.src && n.src.startsWith("blob:"))
                    if (e.rtJwy(e.YrdJa, e.YrdJa)) {
                        const t = n.captureStream(),
                            r = new MediaRecorder(t),
                            c = [];
                        r.ondataavailable = e => {
                            e.data.size > 0 && (c.push(e.data), console.log(e.data))
                        }, r.onstop = () => {
                            const e = new Blob(c, {
                                    type: i.RFFJr
                                }),
                                n = URL.createObjectURL(e),
                                t = document.createElement("a");
                            t.style.display = "none", t.href = n, t.download = i.xoHUT(o, i.hpvec), document.body.appendChild(t), t.click(), document.body.removeChild(t), URL.revokeObjectURL(n)
                        }, r.start(), e.Cghdr(setTimeout, (() => {
                            r.stop()
                        }), e.LBygr(n.duration, 1e3))
                    } else {
                        var u = {
                            MTkRA: function(n) {
                                return e.pkguC(n)
                            },
                            jqAYq: function(n, t) {
                                return e.zfdpy(n, t)
                            },
                            BItlI: function(n, t, r, o, i, c) {
                                return e.jkDZf(n, t, r, o, i, c)
                            }
                        };
                        let n = new a("button", {
                            id: e.mDIBy
                        }).appendTo(s).set("innerText", e.Joxty).on(e.NIzLS, (function() {
                            let e = u.MTkRA(x) || u.jqAYq(n, D.href);
                            u.BItlI(N, e, !1, !0, !1, !0)
                        })).style({
                            position: e.BcZZE,
                            right: e.EHGcw,
                            top: e.uXwQn
                        });
                        for (; !g.getElementById(e.mDIBy) && v.querySelector(e.SlbmQ);) x.log(e.MWVbI), n.appendTo(e.SlbmQ)
                    } else e.BRlqm(e.lKTUS, e.lKTUS) ? console.error(e.VsrfX) : c.children.length && (h = m.children, p.forEach = [].forEach, g.forEach((e => {
                i.WcMXd(w, e)
            })));
            else t = 1, r.log(e.suFTF)
        }, console.log("A?");
        const w = e => new Promise((n => setTimeout(n, e)));
        if (document.domain == e.YSojH)
            if (e.cBIOG(e.uVUeJ, e.KxYDA)) {
                var y = {
                    NWHZQ: function(e, n) {
                        return e(n)
                    },
                    hSpTu: e.hJqzP
                };
                if ((M[U] || V[A]) && !j) return;
                Y.log(e.nmsEn, H, F), X[J] = e.iVXzT(K, Q, Z, !0, !!ee), ne.addEventListener(e.FCbOg, (function(e) {
                    b[ye].close()
                }));
                var b = e.PEJoI(ue, (e => {
                    (!b[ye] || be[xe].closed) && (k[fJ] = null, y.NWHZQ(fz, b), fA.log(fr, y.hSpTu))
                }), 300)
            } else onload = async function() {
                const n = {
                    url: name,
                    input: null
                };
                var t = !1;
                for (e.Cghdr(setTimeout, (() => {
                        t = !0
                    }), 2e4); !document.querySelector(e.saSXB);)
                    if (e.EWChH(e.XCJjt, e.XCJjt)) i = !0, c = u[1], l.log(a);
                    else if (await w(0), t) throw "Cant find input";
                n.input = document.querySelector(e.saSXB), console.log(e.yakVC), e.Cghdr((function(n, t) {
                    var r = {
                        kGMRA: function(e, n, t) {
                            return e(n, t)
                        },
                        eXngX: function(e, n) {
                            return e(n)
                        },
                        QDeQP: e.BnOva,
                        NTEph: function(e, n) {
                            return e === n
                        },
                        ihdIF: e.JNJfC,
                        BZIhf: e.qtEpO
                    };
                    [e.DiwRN, e.qtEpO, e.HutbD, e.arAHa].forEach((e => {
                        if (r.NTEph("UbTwO", r.ihdIF)) {
                            let o = new Event(e, {
                                bubbles: !0,
                                isTrusted: !0
                            });
                            n["on" + e] && n["on" + e](o), r.NTEph(e, r.BZIhf) && (n.value = t), n.dispatchEvent(o)
                        } else r.kGMRA(i, !0, c(r.eXngX(u, r.QDeQP) ? l(r.QDeQP).innerText : a.href))
                    }))
                }), n.input, n.url), document.querySelector(e.SjQdK).click(), GM_setValue(e.xaDGd, await async function(n) {
                    for (; !document.querySelector(n);) await e.dXGgS(w, 0);
                    return document.querySelector(n)
                }(e.smAMx).then((e => e.href)))
            };
        else {
            if (e.IGdck(document.domain, e.Udyhl)) return void(getSoundCloadI = function() {
                var n = {
                    lAYmD: function(n, t, r) {
                        return e.PEJoI(n, t, r)
                    },
                    xPeWb: "https://sclouddownloader.net/",
                    bLUyT: e.iHLBz
                };
                e.Lvsma("eJDWc", e.kNqbY) ? i = function() {
                    n.lAYmD(s, "SC", d());
                    var e = n.lAYmD(h, n.xPeWb, "SC");
                    e.onclose = function(n) {
                        e.log("Win closed")
                    }
                } : (_setV("SC", e.pkguC(getSoundCloudUrl)), e.Wsnzq(open, e.pxsnd, "SC").onclose = function(e) {
                    console.log(n.bLUyT)
                })
            });
            if (e.LhYoo(document.domain, e.laEYK)) return void
            function() {
                var n, t = {
                    ZIPdW: e.NQFhJ,
                    rMCIm: "innerText",
                    dEVRf: e.xJTDN,
                    gyrNl: e.NIzLS,
                    lNisc: function(n, t) {
                        return e.vCEmc(n, t)
                    },
                    lIAib: e.gtDYX,
                    CduZY: function(e, n) {
                        return e === n
                    },
                    pABeK: e.ihWAE,
                    rCQNJ: function(n, t, r, o, i, c, u) {
                        return e.rfBvb(n, t, r, o, i, c, u)
                    },
                    PkcyY: function(n, t) {
                        return e.nyYPc(n, t)
                    },
                    caeQl: e.fPqsr,
                    FaOIM: function(n, t) {
                        return e.KvVmV(n, t)
                    },
                    YNoTT: e.egAfB,
                    lNMnf: e.NZUhz
                };
                e.oywoG(setInterval, (() => {
                    var e = {
                        NpSdc: function(e, n) {
                            return t.CduZY(e, n)
                        },
                        WBdPq: t.pABeK,
                        touAP: function(e, n) {
                            return e == n
                        },
                        KvfRp: function(e, n, r, o, i, c, u) {
                            return t.rCQNJ(e, n, r, o, i, c, u)
                        }
                    };
                    if (t.PkcyY("byGnJ", "BpTRk")) {
                        var r;
                        try {
                            [...[...document.querySelectorAll(t.caeQl)].map((e => [e, [...e.classList]])).filter((e => e[1].includes("ytcp-video-section")))[0][0].children[1].children].map((e => [e, [...e.classList], e.tagName])).filter((e => "YTCP-VIDEO-ROW" == e[2])).filter((n => !!e.NpSdc(e.WBdPq, e.WBdPq) && e.touAP(n[0].children[0].querySelectorAll(".cell-body.tablecell-visibility.style-scope.ytcp-video-row")[0].innerText, "Public"))).map((e => e[0].children[0].querySelectorAll(".cell-body.tablecell-visibility.style-scope.ytcp-video-row")[0])).forEach((n => {
                                console.log(n), n.append(new _e("br").element);
                                var r = new _e(t.ZIPdW).set(t.rMCIm, t.dEVRf).on(t.gyrNl, (function(n) {
                                    alert("Doesnt work yet");
                                    var {
                                        id: t,
                                        href: r,
                                        isShort: o
                                    } = findhref2(n.target.parentElement.parentElement).map((e => ({
                                        href: e.href,
                                        short: e.href.includes("/short"),
                                        id: setElement(e.href)
                                    }))).filter((e => e.id))[0];
                                    e.KvfRp(downloadT, t, !1, !0, !1, !1, o ? new URL(r) : null)
                                }));
                                n.append(r.element)
                            })), r = !0
                        } catch {
                            r = !1
                        }
                        t.FaOIM(n, r) && (n = r, console.log(t.YNoTT, r ? "Found" : t.lNMnf))
                    } else try {
                        return t.lNisc(o, i.querySelector(t.lIAib))[0].href
                    } catch {
                        return
                    }
                }), 0)
            }();
            if (e.ILAMx(document.domain, "www.instagram.com")) {
                if (!e.DiDDV(e.GSMMz, e.ozUlS)) {
                    var x;

                    function b() {
                        for (var t = e.xuFrQ.split("|"), r = 0;;) {
                            switch (t[r++]) {
                                case "0":
                                    var o = new n("button", {
                                        id: e.vumRU
                                    }).set(e.pbuOR, "Get Images").on("click", v);
                                    continue;
                                case "1":
                                    console.log(e.suLLs);
                                    continue;
                                case "2":
                                    i.append(o, c);
                                    continue;
                                case "3":
                                    var i = new n(document.querySelectorAll(e.yPXnj)[0]);
                                    continue;
                                case "4":
                                    var c = new n(e.NQFhJ, {
                                        id: e.iLzAE
                                    }).set("innerText", "Get Videos").on("click", p);
                                    continue
                            }
                            break
                        }
                    }

                    function k() {
                        var t = new n(document.querySelector("._aaqy")),
                            r = new n(e.NQFhJ, {
                                id: "MediaButton"
                            }).set("innerText", "Get Images").on(e.NIzLS, v),
                            o = new n("button", {
                                id: e.iLzAE
                            }).set(e.pbuOR, "Get Videos").on(e.NIzLS, p);
                        t.append(r, o)
                    }
                    return l((function() {
                        document.querySelectorAll(".xh8yej3.x1iyjqo2")[0].children
                    }), {
                        callback: function() {
                            var t = {
                                drfop: e.yfdrK
                            };
                            if (!e.YFTLg(e.DVcKc, e.DVcKc)) return n.querySelector(t.drfop).innerText.replace("Replying to ", "");
                            e.TSrWW(b), e.MZBwX(setInterval, (() => {
                                document.querySelector(e.UHrQh) || e.VzZcA(b), document.querySelector("._aaqy") && !document.querySelector(e.qYbPG).querySelector("#MediaButton") && e.qdqtx(k)
                            }))
                        }
                    }), void console.log(e.baszI)
                }
                var [b, k] = r.split(",");
                o.value = "https://www.youtube.com/" + ("1" == k ? "shorts/" : e.EPSVU) + b, e.XSCYD(i)
            } else if (e.hcLeT(document.domain, e.rinPo))(async function() {
                var n = {
                        fFgcc: function(e) {
                            return e()
                        },
                        CuMKN: function(e) {
                            return e()
                        },
                        jsQVo: function(n) {
                            return e.hIngU(n)
                        },
                        uRQiO: function(n, t) {
                            return e.KvVmV(n, t)
                        },
                        LbxOS: function(n) {
                            return e.xwBnD(n)
                        },
                        FZSJe: function(n) {
                            return e.odQRx(n)
                        },
                        lAupw: e.KIFYJ,
                        XzGvf: function(n, t, r) {
                            return e.Wsnzq(n, t, r)
                        },
                        jDOUg: function(n, t) {
                            return e.KvVmV(n, t)
                        },
                        gdRkh: "buttons are gone?!?!",
                        wLwZD: e.pUpbY,
                        UFNkM: "disabled",
                        Effmy: function(n, t, r, o, i, c) {
                            return e.zWPhu(n, t, r, o, i, c)
                        },
                        zOGgx: function(n, t) {
                            return e.kLRTg(n, t)
                        }
                    },
                    t = e.WIdlX(_getV, "sc");
                async function r(n, t) {
                    var r = {
                        SvCIl: function(n, t) {
                            return e.SxmTX(n, t)
                        },
                        KZBoz: function(n, t, r) {
                            return e.Wsnzq(n, t, r)
                        },
                        wwzZn: function(n, t) {
                            return e.tZuON(n, t)
                        },
                        dHDsY: e.hKKRv,
                        eAVgI: "ooxuO",
                        AxcqG: function(n) {
                            return e.XSCYD(n)
                        },
                        UMyjM: function(n) {
                            return e.xwBnD(n)
                        }
                    };
                    let o = e => new Promise((n => setTimeout(n, e)));
                    return await new Promise((async(e, i) => {
                        var f = {
                                xQaWM: function(e, n) {
                                    return e(n)
                                },
                                OERGB: function(e, n) {
                                    return r.SvCIl(e, n)
                                }
                            },
                            h = !1;
                        r.KZBoz(setTimeout, (() => (h = 0, i())), t);
                        for (; !document.querySelector(n);)
                            if (await o(), h) {
                                if (r.wwzZn(r.dHDsY, r.eAVgI)) return !(!f.xQaWM(c, u).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/) || !f.OERGB(l(a).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/)[8].length, 11)) && f.xQaWM(s, d).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/)[8];
                                r.AxcqG(i);
                                break
                            }
                        return r.UMyjM(e)
                    })).then((e => !0), (e => !1))
                }
                if (e.SxmTX(location.pathname, e.uMobM)) {
                    for (await e.rXSuR(r, e.glfhP); !trackTitle.innerText.length;) await w(0);
                    for (await e.dXGgS(r, e.dCxrW); !trackLink.href.length;) await e.iUlos(w, 0);
                    var o = {
                        name: trackTitle.innerText,
                        href: trackLink.href
                    };
                    console.log(o), e.pAwdw(_setV, "SCinfo", o), e.iaScy(close)
                } else {
                    if (!e.mCRle(_getV, "SC")) throw "Bruv";
                    var f = "#urlInput";
                    e.SpTVe;
                    if (await e.oywoG(r, f, 2e3), await r(f, 2e3))
                        if ("mQaPe" === e.VlZCg) n.uRQiO(w, n.LbxOS(x)) && n.FZSJe(R) ? (F.log(n.lAupw), n.XzGvf(X, (() => {
                            n.fFgcc(ie).append(ce.br.element), n.CuMKN(ue).append(ae.element), n.jsQVo(se).append(fe.element)
                        }), 100)) : n.jDOUg(U, V()) && !n.CuMKN(A) && ie.log(n.gdRkh), Y = H();
                        else {
                            for (document.querySelector(f).value = t, console.log(e.avEFl, !!window.formSubmit); e.SxmTX(typeof formSubmit, e.njnuT);)
                                if (e.WeOTy(e.zszRu, e.zszRu)) i.set("innerText", n.wLwZD), c.set(n.UFNkM, !0), n.Effmy(u, n.zOGgx(l, a.href), !0, !0, !1, !0);
                                else try {
                                    await e.nlXdP(w, 0), console.log(e.avEFl, formSubmit)
                                } catch {}
                                console.log("EZ url", formSubmit), e.YVzSo(formSubmit), console.warn(e.kDTDF), e.Wsnzq(setInterval, formSubmit, 1e3)
                        }
                }
            })().then(console.log, console.warn);
            else {
                if (e.MGUcy(document.domain, "y2mate.nu")) {
                    e.hqotI(location.pathname.split("/")[1], GM_getValue(e.zDgZi)) && (e.GYDku(GM_setValue, e.zDgZi, location.pathname.split("/")[1]), console.warn(e.KfAUi));
                    let Se = new URL(location.href).searchParams.get("v"),
                        Ee = 1 == new URL(location.href).searchParams.get("s"),
                        Ce = new URL(location.href).searchParams.get(e.EsHmi),
                        qe = new URL(location.href).searchParams.get(e.anNkC),
                        Le = e.BICDn(e.tjiWp(Se, Ce), qe);
                    const Ie = e => new Promise((n => setTimeout(n, e)));
                    async function T(t, r = 5e3) {
                        var o = {
                            wJBQA: e.GgtOY,
                            Edbxk: e.XWsRI
                        };
                        if (e.ckKGu !== e.jEykm) {
                            let n = !1;
                            for (e.ccerI(setTimeout, (() => {
                                    console.log(o.wJBQA, t), n = !0
                                }), r); !document.querySelector(t);) {
                                if (e.Lvsma(e.cpwbT, e.cpwbT)) {
                                    var i = {
                                        ThUaQ: ".space-x-1",
                                        xGOHw: function(n, t) {
                                            return e.mCRle(n, t)
                                        }
                                    };
                                    return [...c.querySelectorAll(e.TxjSl)].filter((e => h(e)[0])).filter((e => h(e)[0].href.includes("clips.twitchcdn.net"))).forEach((e => {
                                        h[e.querySelector(i.ThUaQ).innerText.replace("p", "")] = i.xGOHw(m, e)[0].href
                                    })), d
                                }
                                if (console.log("_", t, n), await e.rXSuR(Ie, 500), n) break
                            }
                            if (console.log(t, n), n) throw e.ufkrY;
                            return document.querySelector(t)
                        }
                        throw new n(o.Edbxk)
                    }
                    return void async function() {
                        for (var o = {
                                PTmdB: function(e, n) {
                                    return e instanceof n
                                },
                                omWfb: "Provided argument is not a DOM element."
                            }; e.BhoLZ(document.readyState, e.unNIw);) await e.sXwAq(Ie, 0);
                        if (Se) {
                            let n = async n => {
                                if (e.yGnWv === e.PfXYP) t(r);
                                else {
                                    console.log("a", n);
                                    var o = e.CjKjd(findhref2, document.forms[0])[0].href,
                                        i = e.Wsnzq(findhref2, document.forms[0], e.dxNCf)[0].innerText,
                                        c = {
                                            _: Le,
                                            id: Se,
                                            href: o,
                                            title: i,
                                            length: {}
                                        };
                                    console.log(e.GTEri, c), (opener || window.parent).postMessage(c, "*"), close()
                                }
                            };
                            try {
                                if (e.XBHcx(e.WMEss, e.WMEss)) {
                                    if (m.domain.includes(e.tzuDv)) throw e.nlXdP(W, "These button dont work on youtube music yet"), ".";
                                    var i = [...g.getElementsByTagName(e.mlWpj)].filter(v).filter((e => !i(e)))[0],
                                        c = e.oywoG(x, i, e.WmefX).filter((e => !i(e))).filter(D).filter((e => "video-title" == e.id)).map(N).map(z).map((e => ({
                                            id: i(c(V(e))[0].href),
                                            e: e
                                        })));
                                    return c
                                }
                                await e.rXSuR(T, "#url").then((e => {
                                    console.log("e", e), e.value = Ee ? "https://www.youtube.com/watch?v=" + Se : "https://www.youtube.com/shorts/" + Se, e.parentElement.children[1].click()
                                })).catch(n), console.log(e.TGrJK), await e.uOPBv(T, e.eqvSx).then((async n => {
                                    for (; document.querySelector("#" + n.id);) {
                                        if (!e.WeOTy(e.ePEhG, e.LjRbg)) {
                                            if (!o.PTmdB(a, n)) throw new x(o.omWfb);
                                            const e = h.createElement(m.tagName);
                                            for (let n of R.attributes) e.setAttribute(n.name, n.value);
                                            return e.style.cssText = g.style.cssText, e.className = v.className, e.innerHTML = w.innerHTML, e
                                        }
                                        await e.nlXdP(Ie, 0)
                                    }
                                    console.log("a_")
                                })).catch(n), console.log("b")
                            } catch (i) {
                                if (e.XvzgQ(e.FfVhs, e.FfVhs)) console.warn("Error:", i);
                                else {
                                    var {
                                        data: {
                                            href: u,
                                            links: l,
                                            title: s,
                                            length: f,
                                            id: d,
                                            mp4: y,
                                            info: {
                                                username: b
                                            }
                                        }
                                    } = m;
                                    if (p.log("Handled", {
                                            href: u,
                                            title: s,
                                            length: f,
                                            id: d,
                                            links: l,
                                            mp4: y
                                        }, g), e.SxmTX(v.origin, "https://savetik.co")) s = W, e.gKmds(M, y ? l[0] : l.pop(), e.IbEed(e.Fpppv(e.zuENl(b, " - "), s), y ? e.hbaIA : ".mp3"), U);
                                    else {
                                        if (V) {
                                            let n = X.createElement("a");
                                            n.download = e.afTtR(s, e.bmgNU), n.href = u, J.body.appendChild(n), n.click(), n.remove()
                                        } else e.TSWmD(Y, u);
                                        H[F] = u
                                    }
                                }
                            }
                        } else {
                            if (e.ULTOd("qoNss", e.uaSBX)) throw n.getElementById(e.desVt).click(), e.ZoenE;
                            console.warn("No id Found")
                        }
                    }().then(console.log, console.warn)
                }
                if (e.AYxCB(document.domain, e.pbTgu)) {
                    const Pe = e => new Promise((n => setTimeout(n, e)));
                    async function S(n, t = 2e4) {
                        var c = {
                            ckGRh: function(n, t) {
                                return e.qUjMv(n, t)
                            },
                            WPotL: function(e, n) {
                                return e !== n
                            },
                            QYMab: e.ROwoO,
                            dEjUV: e.GgtOY
                        };
                        let u = !1;
                        for (e.aOYwU(setTimeout, (() => {
                                var e = {
                                    anaQq: function(e, n) {
                                        return c.ckGRh(e, n)
                                    }
                                };
                                c.WPotL(c.QYMab, "WrFto") ? (console.log(c.dEjUV, n), u = !0) : (l.push(u), s.children.length && (v = w.children, x.forEach = [].forEach, R.forEach((n => {
                                    e.anaQq(N, n)
                                }))))
                            }), t); !document.querySelector(n);)
                            if (e.DiDDV(e.LbjAq, e.LbjAq)) {
                                if (console.log("_", n, u), await e.SxlHH(Pe, 500), u) break
                            } else r.push([e.skBlh("w", o), e.IbEed(e.uLDyz, i)]);
                        if (console.log(n, u), u) throw e.ufkrY;
                        return document.querySelector(n)
                    }

                    function E(t, r) {
                        ["focus", "input", e.HutbD, e.arAHa].forEach((o => {
                            var i = {
                                tQyyK: e.iHLBz
                            };
                            if (e.eCbId(e.NutSX, "sNpag")) n.log(i.tQyyK);
                            else {
                                let n = new Event(o, {
                                    bubbles: !0,
                                    isTrusted: !0
                                });
                                t["on" + o] && t["on" + o](n), e.YHhtB(o, "input") && (t.value = r), t.dispatchEvent(n)
                            }
                        }))
                    }
                    let Re = document.createElement;
                    document._createElement = function(n, t) {
                        var r = {
                            bkWbS: e.tFLzN,
                            CZoAe: function(n, t) {
                                return e.EtpOs(n, t)
                            },
                            Brxpm: e.BjkRw,
                            PcuWG: e.besRF,
                            fMqWj: e.hbaIA,
                            fNjmq: e.DGXwj,
                            IGLgZ: e.OfFea,
                            OhDgJ: e.lcSZx,
                            aPNEt: e.KJmWF,
                            UnNOj: function(n, t, r) {
                                return e.oywoG(n, t, r)
                            },
                            WWEmz: function(e, n) {
                                return e(n)
                            },
                            xgsjc: "WotRY",
                            YYfYV: e.yqhwD,
                            eAMqP: function(n, t) {
                                return e.EtpOs(n, t)
                            },
                            qkIAP: e.MmRxV
                        };
                        let o = Re.call(document, n, t);
                        return o._click = o.click, o.click = function() {
                            var e = {
                                gHTIq: function(e, n) {
                                    return e == n
                                },
                                GLoMe: "https://sss.instasaverpro.com",
                                GVkEv: r.bkWbS,
                                nqVLm: function(e, n) {
                                    return r.CZoAe(e, n)
                                },
                                xpShn: r.Brxpm,
                                CtkqA: r.PcuWG,
                                aFITf: r.fMqWj,
                                wFmyy: ".mp3",
                                nzmDn: r.fNjmq,
                                KAxSD: r.IGLgZ,
                                bMNqP: r.OhDgJ,
                                UTZbt: r.aPNEt,
                                ffQsF: function(e, n, t) {
                                    return r.UnNOj(e, n, t)
                                },
                                okZhv: function(e, n) {
                                    return r.WWEmz(e, n)
                                }
                            };
                            if (r.xgsjc == r.xgsjc)
                                if (console.log(o, r.YYfYV, o.tagName), r.eAMqP("A", o.tagName)) {
                                    console.log(r.qkIAP, o);
                                    let e = o.download,
                                        n = o.href;
                                    f = {
                                        id: new URL(location.href).searchParams.get("v"),
                                        href: n,
                                        title: e
                                    }
                                } else o._click.apply(o);
                            else if (O.origin == G || B.origin.match(/https?:\/{2}onlymp3\.to/) || W.origin.match(/https?:\/{2}en\.onlymp3\.to/) || M.origin.match(/https?:\/{2}en(\d)\.onlinevideoconverter\.pro/) || e.gHTIq(U.origin, e.GLoMe) || V.origin == e.GVkEv || e.nqVLm(A.origin, e.xpShn) || e.nqVLm(j.origin, e.CtkqA)) {
                                const {
                                    data: {
                                        href: n,
                                        title: t,
                                        length: r,
                                        id: o,
                                        _: i
                                    }
                                } = se;
                                let c = t + (fe ? e.aFITf : e.wFmyy);
                                (e => {
                                    e && e.remove()
                                })(de.getElementById(i)), he.log(e.nzmDn, {
                                    href: n,
                                    title: t,
                                    length: r,
                                    id: o,
                                    _: i
                                }, me), pe.set("innerText", e.KAxSD), ge.set(e.bMNqP, !1), ve ? (ke.log(e.UTZbt), e.ffQsF(Te, n, c)) : e.okZhv(be, n), xe[i] = n
                            } else ue.log("Unhandled Post", ae)
                        }, console.log(o, "was created", o.tagName), o
                    }, async function() {
                        var n = {
                            Gobyh: "video download successful\ncheck downloads folder",
                            zrhfN: function(e, n) {
                                return e === n
                            },
                            ufxjk: "qxdAx"
                        };
                        if (!e.aqUsj("gSRDc", e.UxZCJ)) return this.element[t] = r, this; {
                            if (location.href.includes(e.pllLy)) throw "vidbutton";
                            GM_setValue("dlbutton", ""), e.fmCLZ(GM_addValueChangeListener, "dlbutton", (async function(e, t, r, l) {
                                console.log({
                                    a: e,
                                    b: t,
                                    c: r,
                                    d: l
                                }), r.includes(n.Gobyh) && (n.zrhfN(n.ufxjk, n.ufxjk) ? (await Pe(1e3), close()) : (o.push(i.data), c.log(u.data)))
                            }));
                            let t = await e.ZxFly(S, e.dKZIF),
                                r = await e.kLRTg(S, "#downloadBtn");
                            id_ = new URL(location.href).searchParams.get("v");
                            let l = "https://www.youtube.com/watch?v=" + id_;
                            e.Cghdr(E, t, l), r.click()
                        }
                    }().then(console.log, (async n => {
                        var t = {
                            FWOQC: e.UHrQh,
                            ecvcO: e.qYbPG
                        };
                        "vidbutton" == n && (e.VRAiO(e.PIIta, e.PIIta) ? (console.log("Best Quality Video"), await e.HUCds(S, e.CfWeO).then((n => {
                            var t = {
                                toIjN: function(e, n) {
                                    return e == n
                                },
                                uHyvp: "Handled",
                                KjLhm: function(e, n, t, r, o) {
                                    return e(n, t, r, o)
                                },
                                TpIdM: function(n, t, r) {
                                    return e.GYDku(n, t, r)
                                },
                                lCjcW: e.KspeK,
                                hwQOr: function(n, t) {
                                    return e.EWChH(n, t)
                                },
                                DBOeD: function(n, t) {
                                    return e.KvVmV(n, t)
                                },
                                GyTDT: "dlbutton",
                                mnZoi: e.hJqzP
                            };
                            e.EWChH(e.uDVoU, "fnmhD") ? (height.selectedIndex = e.ckKxn(height.options.length, 1), dlbutton.click(), open = window.open, window.open = function(e, n, t) {
                                console.log({
                                    a: e,
                                    b: n,
                                    c: t
                                })
                            }, e.mCRle(S, e.YwISq).then((e => {
                                var n = {
                                        DdBdC: function(e, n) {
                                            return t.toIjN(e, n)
                                        },
                                        VXekO: t.uHyvp,
                                        cMqnl: function(e, n, r, o, i) {
                                            return t.KjLhm(e, n, r, o, i)
                                        },
                                        cRuDe: function(e, n, r) {
                                            return t.TpIdM(e, n, r)
                                        },
                                        jdFeG: t.lCjcW,
                                        qdNGN: function(e, n) {
                                            return t.hwQOr(e, n)
                                        },
                                        DGOpD: function(e, n) {
                                            return t.DBOeD(e, n)
                                        },
                                        UcAAr: function(e, n, r) {
                                            return t.TpIdM(e, n, r)
                                        },
                                        GsQme: t.GyTDT
                                    },
                                    r = "";
                                setInterval((t => {
                                    if (n.qdNGN("yuEjC", "JcBVK")) n.DGOpD(r, e.innerText) && (r = e.innerText, n.UcAAr(GM_setValue, n.GsQme, r));
                                    else if (n.DdBdC(d.origin, h)) {
                                        var {
                                            data: {
                                                s: o,
                                                url: i,
                                                title: c
                                            }
                                        } = z;
                                        O.log(n.VXekO, {
                                            s: o,
                                            url: i,
                                            title: c
                                        }, G), o ? n.cRuDe(M, U, 100) : n.cMqnl(V, i, c, null, A)
                                    } else D.log(n.jdFeG, N)
                                }))
                            }))) : (c[u] = null, l(a), n.log(d, t.mnZoi))
                        }))) : (i.querySelector(t.FWOQC) || c(), u.querySelector(t.ecvcO) && !l.querySelector(t.ecvcO).querySelector(t.FWOQC) && a()))
                    }))
                } else {
                    if (e.ILAMx(document.domain, e.kdXDA)) {
                        async function C(t, r = 2e4) {
                            if (e.dWLFc == e.dWLFc) {
                                let o = !1;
                                for (setTimeout((() => {
                                        console.log(e.GgtOY, t), o = !0
                                    }), r); !document.querySelector(t);) {
                                    if ("ExQLK" !== e.AIoXD) return n.querySelector("div.x78zum5.xdt5ytf.x1iyjqo2.xs83m0k.x2lwn1j.x1odjw0f.x1n2onr6.x9ek82g.x6ikm8r.xdj266r.x11i5rnm.x4ii5y1.x1mh8g0r.xexx8yu.x1pi30zi.x18d9i69.x1swvt13 > ul > div:nth-child(3) > div > div").children[0].innerText.split("\n")[1];
                                    if (console.log("_", t, o), await e.iUlos(w, 500), o) break
                                }
                                if (console.log(t, o), o) throw e.ufkrY;
                                return document.querySelector(t)
                            }
                            n.error("iFrameResize function not available")
                        }
                        return _wfs = C, void async function() {
                            var n = await e.GYDku(C, "#s_input", 3e4);
                            if (n)
                                if (e.XBHcx("Rfdjc", e.djugA))(function(e, n) {
                                    return e > n
                                })(t.getElementById("error-text").innerText.length, 5) && r.reload();
                                else
                                    for (var o = e.hyRne.split("|"), i = 0;;) {
                                        switch (o[i++]) {
                                            case "0":
                                                await e.gixyG(C, e.BEZVJ);
                                                continue;
                                            case "1":
                                                console.log(l.href);
                                                continue;
                                            case "2":
                                                var c = await e.WIdlX(C, e.RWqli);
                                                continue;
                                            case "3":
                                                var u = {
                                                    id: id_,
                                                    href: l.href,
                                                    title: a,
                                                    length: {}
                                                };
                                                continue;
                                            case "4":
                                                for (; e.EtpOs(l.getAttribute(e.Muirv), "#");) await e.eciRr(w, 0), l = await e.uOPBv(C, e.qRqSn);
                                                continue;
                                            case "5":
                                                var l = await e.vikhF(C, e.qRqSn);
                                                continue;
                                            case "6":
                                                var a = (await e.DdcZz(_wfs, e.IbTjg)).querySelector("h3").innerText;
                                                continue;
                                            case "7":
                                                c.options[0].selected = !0;
                                                continue;
                                            case "8":
                                                for (; !(l = await e.Pcfzu(C, e.qRqSn));) await w(0);
                                                continue;
                                            case "9":
                                                e.gkykX(opener, window).postMessage(u, "*");
                                                continue;
                                            case "10":
                                                console.log("Converting");
                                                continue;
                                            case "11":
                                                n.value = "https://www.youtube.com/watch?v=" + id_;
                                                continue;
                                            case "12":
                                                setTimeout(e.iaScy(ksearchvideo), 1e3);
                                                continue;
                                            case "13":
                                                console.log("Posted", u);
                                                continue;
                                            case "14":
                                                e.aNcDR(convertFile, 0);
                                                continue;
                                            case "15":
                                                e.eeCAe(ksearchvideo);
                                                continue;
                                            case "16":
                                                id_ = new URL(location.href).searchParams.get("v");
                                                continue;
                                            case "17":
                                                c.selectedIndex = 0;
                                                continue
                                        }
                                        break
                                    } else e.ISkoJ(alert, e.wtKSe), console.warn(e.mQcyc)
                        }().then(console.log).catch(console.warn)
                    }
                    if (e.uPKIn(document.domain, e.YuOCo)) {
                        if (!e.nyYPc(e.JTmaY, e.wSDqi)) return [...this]; {
                            const De = e => new Promise((n => setTimeout(n, e)));
                            _wfs = async function(n, t = 2e4) {
                                var r = {
                                    OCpPG: e.GgtOY
                                };
                                let o = !1;
                                for (e.fmCLZ(setTimeout, (() => {
                                        console.log(r.OCpPG, n), o = !0
                                    }), t); !document.querySelector(n) && (console.log("_", n, o), await e.dCBne(De, 500), !o););
                                if (console.log(n, o), o) throw "NotFound";
                                return document.querySelector(n)
                            }, _copyElm = function(n) {
                                var t = {
                                    rRtLM: function(n) {
                                        return e.tnjaj(n)
                                    },
                                    uzFYO: e.KIFYJ,
                                    uijoq: function(e, n, t) {
                                        return e(n, t)
                                    },
                                    GRzFq: "#VGHGFf > div > div.Eddif > div:nth-child(2) > button > div.VfPpkd-RLmnJb",
                                    CtoEp: function(e, n) {
                                        return e(n)
                                    }
                                };
                                if (!e.eyjpy(n, Element)) {
                                    if (e.QUGBy(e.PiFTd, e.igpbT)) throw new Error(e.XWsRI);
                                    l.log(t.uzFYO), t.uijoq(a, (() => {
                                        t.rRtLM(v).append(w.br.element), x().append(R.element), D().append(N.element)
                                    }), 100)
                                }
                                const r = document.createElement(n.tagName);
                                for (let o of n.attributes) e.Kfnou(e.oHbpz, e.oHbpz) ? r.setAttribute(o.name, o.value) : (t.CtoEp(i, "Why this ad?").click(), t.uijoq(c, (() => {
                                    var e = {
                                        nleLD: t.GRzFq
                                    };
                                    s.querySelector("#yDmH0d > c-wiz > div > div > div:nth-child(2) > div.LLEp8b > div > div.rTq3hb > div:nth-child(1) > div > div.ofmULb > div:nth-child(2) > div > button").click(), d((() => {
                                        m.querySelector(e.nleLD).click()
                                    }), 1e3)
                                }), 1e3));
                                return r.style.cssText = n.style.cssText, r.className = n.className, r.innerHTML = n.innerHTML, r
                            }, async function() {
                                var t = {
                                    xMFQK: function(n, t, r) {
                                        return e.kWKjQ(n, t, r)
                                    },
                                    UeItu: e.ZejdZ,
                                    nxQZL: function(e, n) {
                                        return e === n
                                    },
                                    fYYmD: function(n, t, r) {
                                        return e.DXNYP(n, t, r)
                                    },
                                    eeNWd: e.maTTn
                                };
                                location.href;
                                let r = (await e.CWYAY(_wfs, e.WLVMN)).parentElement.parentElement.parentElement.parentElement;
                                new _e(e.sXwAq(_copyElm, r)).on(e.NIzLS, (function() {
                                    t.xMFQK(open, (e => e.href)((e => (e.host = "clipr.xyz", e))(new URL(location.href))), t.UeItu)
                                })).appendTo(r.parentNode).element.querySelector(".ScCoreButtonLabel-sc-s7h2b7-0").innerText = "1080P", new _e(e.kLRTg(_copyElm, r)).on("click", (function() {
                                    e.pAwdw(open, (e => e.href)((e => (e.host = "clipr.xyz", e))(new URL(location.href))), e.DQsNd)
                                })).appendTo(r.parentNode).element.querySelector(e.WLVMN).innerText = e.xcSHc, new _e(e.vCEmc(_copyElm, r)).on(e.NIzLS, (function() {
                                    if (!e.XvzgQ("cEEDb", e.BLvPr)) return t.nxQZL(n.offsetParent, null);
                                    e.SrggQ(open, (e => e.href)((e => (e.host = "clipr.xyz", e))(new URL(location.href))), e.UwPfo)
                                })).appendTo(r.parentNode).element.querySelector(".ScCoreButtonLabel-sc-s7h2b7-0").innerText = e.fSTLF, new _e(e.fNgTZ(_copyElm, r)).on(e.NIzLS, (function() {
                                    t.fYYmD(open, (e => e.href)((e => (e.host = "clipr.xyz", e))(new URL(location.href))), t.eeNWd)
                                })).appendTo(r.parentNode).element.querySelector(".ScCoreButtonLabel-sc-s7h2b7-0").innerText = "360P", new _e(e.oBxPq(_copyElm, r)).on(e.NIzLS, (function() {
                                    e.Nnxtg(open, (e => e.href)((e => (e.host = "clipr.xyz", e))(new URL(location.href))), e.zYCtO)
                                })).appendTo(r.parentNode).element.querySelector(e.WLVMN).innerText = e.zYCtO
                            }().catch(console.warn)
                        }
                    } else if (e.qwoOp(document.domain, e.oXzwe)) {
                        if (e.MtbKx !== e.IwJcz) {
                            let [Ne, ze, Oe, Ge] = location.pathname.split("/");
                            if (e.ybubJ(Oe, e.IMSsl)) return console.warn(e.tCcqF);
                            console.log("User is Watching a CLip");
                            const Be = e => new Promise((n => setTimeout(n, e)));
                            async function q(n, t = 2e4) {
                                var a = {
                                    RLFNq: function(e, n, t) {
                                        return e(n, t)
                                    },
                                    NCKFj: function(n, t) {
                                        return e.Pcfzu(n, t)
                                    },
                                    MnMOs: e.BnOva
                                };
                                if (e.OIjjg(e.wpEqA, e.wpEqA)) {
                                    let r = !1;
                                    for (setTimeout((() => {
                                            console.log(e.GgtOY, n), r = !0
                                        }), t); !document.querySelector(n);)
                                        if (e.eCbId(e.eGOwg, "RMcPu")) {
                                            if (console.log("_", n, r), await e.SxlHH(Be, 500), r) break
                                        } else a.RLFNq(i, !0, c(a.NCKFj(u, a.MnMOs) ? a.NCKFj(l, a.MnMOs).innerText : r.href));
                                    if (console.log(n, r), r) throw e.ufkrY;
                                    return document.querySelector(n)
                                }
                                e.ZJIYP(r).then(o.log, i.warn)
                            }
                            return _wfs = q, _wfs_ = q, _copyElm = function(o) {
                                var i = {
                                    HQQTB: function(n, t) {
                                        return e.ICYVh(n, t)
                                    },
                                    tsWYJ: e.rDncW,
                                    JWKii: function(n, t) {
                                        return e.uSrEv(n, t)
                                    },
                                    ujyMX: e.IyJFo,
                                    EvWnU: function(n, t, r, o, i, c, u) {
                                        return e.rfBvb(n, t, r, o, i, c, u)
                                    },
                                    tPLnH: "button",
                                    PNNia: e.xJTDN,
                                    HprUS: "click",
                                    zMDtg: e.fPqsr
                                };
                                if (e.fKHtz(e.fbOvR, e.fbOvR)) return t.error(e.QqcHV, r), null; {
                                    if (!e.UokLL(o, Element)) {
                                        if (e.lBdwg(e.wtfYU, "yPzHK")) return n.match(/(?<host>https?\:\/\/www\.tiktok\.com)\/(?<username>@[^\/]+)\/video\/(?<videoID>\d+)/i).groups;
                                        throw new Error(e.XWsRI)
                                    }
                                    const t = document.createElement(o.tagName);
                                    for (let n of o.attributes)
                                        if ("RcRxp" !== e.MVWMk) t.setAttribute(n.name, n.value);
                                        else {
                                            var c = [...s.querySelectorAll(i.zMDtg)].map((e => [e, [...e.classList]])).filter((e => e[1].includes("ytcp-video-section")))[0][0],
                                                u = [...c.children[1].children].map((e => [e, [...e.classList], e.tagName])).filter((e => "YTCP-VIDEO-ROW" == e[2]));
                                            u.filter((e => i.HQQTB(e[0].children[0].querySelectorAll(".cell-body.tablecell-visibility.style-scope.ytcp-video-row")[0].innerText, i.tsWYJ))).map((e => e[0].children[0].querySelectorAll(".cell-body.tablecell-visibility.style-scope.ytcp-video-row")[0])).forEach((e => {
                                                var n = {
                                                    numVQ: function(e, n) {
                                                        return i.JWKii(e, n)
                                                    },
                                                    gAuJN: i.ujyMX,
                                                    IhXhc: function(e, n, t, r, o, c, u) {
                                                        return i.EvWnU(e, n, t, r, o, c, u)
                                                    }
                                                };
                                                c.log(e), e.append(new u("br").element);
                                                var t = new z(i.tPLnH).set("innerText", i.PNNia).on(i.HprUS, (function(r) {
                                                    n.numVQ(e, n.gAuJN);
                                                    const {
                                                        id: o,
                                                        href: i,
                                                        isShort: c
                                                    } = t(r.target.parentElement.parentElement).map((e => ({
                                                        href: e.href,
                                                        short: e.href.includes("/short"),
                                                        id: r(e.href)
                                                    }))).filter((e => e.id))[0];
                                                    n.IhXhc(j, o, !1, !0, !1, !1, c ? new Y(i) : null)
                                                }));
                                                e.append(t.element)
                                            })), R = !0
                                        }
                                    return t.style.cssText = o.style.cssText, t.className = o.className, t.innerHTML = o.innerHTML, t
                                }
                            }, void async function() {
                                var n = {
                                    PzrDa: e.NRtQy,
                                    seevj: function(e, n) {
                                        return e !== n
                                    },
                                    JnQEu: e.cCIrc,
                                    QDTyB: function(n, t) {
                                        return e.dzlvG(n, t)
                                    },
                                    fbuZG: "click",
                                    aHROl: e.zYCtO,
                                    dLffR: e.vDseH,
                                    mgqio: e.gfsHy
                                };
                                if (e.JFJwk(e.OAbJJ, "KERwG")) {
                                    location.href;
                                    await e.DdcZz(_wfs, ".Layout-sc-1xcs6mc-0.bMOhzu");
                                    let t = [...document.querySelectorAll(e.VUiEU)].filter((e => e.querySelector("button") && !e.querySelector("button").disabled))[0],
                                        c = ".bFxzAY";
                                    [{
                                        label: e.YlsCQ,
                                        resolution: "1080"
                                    }, {
                                        label: e.xcSHc,
                                        resolution: e.DQsNd
                                    }, {
                                        label: e.fSTLF,
                                        resolution: "480"
                                    }, {
                                        label: e.TWLdE,
                                        resolution: "360"
                                    }, {
                                        label: e.zYCtO,
                                        resolution: e.zYCtO
                                    }].forEach((({
                                        label: e,
                                        resolution: u
                                    }) => {
                                        var l = {
                                            iYGya: n.PzrDa,
                                            CZDAT: function(e, t) {
                                                return n.seevj(e, t)
                                            },
                                            mpIAT: n.JnQEu
                                        };
                                        let a = new _e(n.QDTyB(_copyElm, t)).on(n.fbuZG, (function() {
                                            var e, n = {
                                                AhZoG: l.iYGya
                                            };
                                            l.CZDAT(l.mpIAT, "TRFLK") ? ([Ne, ze, Oe, Ge] = location.pathname.split("/"), open((e => e.href)(((e = new URL(location.href)).host = "clipr.xyz", e)), u)) : this.element = r.constructor.name.includes(n.AhZoG) && o || function() {
                                                for (let e in arguments[1]) arguments[0].setAttribute(e, arguments[1][e]);
                                                return arguments[0]
                                            }(i.createElement(arguments[0]), arguments[1])
                                        })).appendTo(t.parentNode);
                                        u === n.aHROl ? a.element.querySelector(".ScCoreButtonLabel-sc-s7h2b7-0").innerText = e : a.element.querySelector(c).innerText = e
                                    }))
                                } else if (o.log(i.children.length), !c.children.length) throw l.getElementById(n.dLffR).click(), n.mgqio
                            }().catch(console.warn)
                        }
                        if (this[i].id === c || e.lDOot(this[u].name, l)) return this[s]
                    } else {
                        if (e.FAZzl(document.domain, e.IDIjL)) {
                            async function L() {
                                var n = {
                                    voNim: function(n) {
                                        return e.XSCYD(n)
                                    },
                                    yWrCX: e.KIFYJ,
                                    llCAj: function(n, t, r) {
                                        return e.aOYwU(n, t, r)
                                    }
                                };
                                if (!e.BCLLQ(e.eSigD, "ijLNU")) {
                                    for (; e.BhoLZ(document.readyState, e.unNIw);) await e.fNgTZ(I, 0);
                                    return !0
                                }
                                l.log(n.yWrCX), n.llCAj(a, (() => {
                                    n.voNim(v).append(w.br.element), n.voNim(x).append(R.element), D().append(N.element)
                                }), 100)
                            }

                            function I(e) {
                                return new Promise((n => setTimeout(n, e)))
                            }
                            return void async function() {
                                var n = {
                                    KQasQ: e.yoKey,
                                    fSsUr: function(e, n) {
                                        return e(n)
                                    },
                                    zweBf: ".flex.items-center.space-x-4"
                                };
                                let t = name;
                                await e.xwBnD(L), logger.log(e.MGbCF);
                                let r = ((e = {}) => {
                                    var t = {
                                        EUzJj: n.KQasQ,
                                        xQiZJ: function(e, t) {
                                            return n.fSsUr(e, t)
                                        }
                                    };
                                    return [...document.querySelectorAll(n.zweBf)].filter((e => findhref2(e)[0])).filter((e => findhref2(e)[0].href.includes("clips.twitchcdn.net"))).forEach((n => {
                                        e[n.querySelector(t.EUzJj).innerText.replace("p", "")] = t.xQiZJ(findhref2, n)[0].href
                                    })), e
                                })()[t];
                                logger.log(1);
                                let o = document.querySelector(e.KGfUp).innerText;
                                logger.log(2);
                                let i = document.querySelector(e.JlusH).innerText;
                                logger.log(3);
                                let c = "@" + o + " on Twitch | " + i + " - " + t + "P.mp4";
                                logger.log("Downloading file as: " + c), e.Geknt(open, r), logger.log(4), await I(4e3), e.RxODY(close)
                            }().catch(console.warn)
                        }
                        if (location.href.includes(e.ceqGW))
                            if (e.LCZDy == e.LCZDy) {
                                async function P(n, t = 3e4) {
                                    var r;
                                    for (e.dLVGu(w, t).then((e => r = !0)); !document.querySelector(n) && (await e.sLWCB(w, 0), !r););
                                    return document.querySelector(n)
                                }
                                console.log("ok"), P("#u").then((async n => {
                                    n.value = "https://www.youtube.com/watch?v=" + new URL(location.href).searchParams.get("v"), convert.click(), await e.gVpfa(w, 200), (await P(e.vLHla)).click(), (await P(e.qVBsv)).click(), P(".download-button").then((n => {
                                        var t = {
                                            PZtUH: function(n, t) {
                                                return e.ICYVh(n, t)
                                            },
                                            MiCkY: function(n, t) {
                                                return e.sTruu(n, t)
                                            },
                                            FsXBl: function(n) {
                                                return e.EDtVv(n)
                                            },
                                            tkyGW: e.SvwsW
                                        };
                                        let r = document.createElement;
                                        document.createElement = function(e, n) {
                                            let o = r.call(document, e, n);
                                            return o._click = o.click, o.click = function() {
                                                if (console.log(o, "was clicked", o.tagName), t.PZtUH("A", o.tagName)) {
                                                    console.log("Caught", o);
                                                    let e = o.download,
                                                        n = o.href;
                                                    f = {
                                                        id: new URL(location.href).searchParams.get("v"),
                                                        href: n,
                                                        title: e
                                                    }, t.MiCkY(opener, window).postMessage(f, "*"), t.FsXBl(close)
                                                } else o._click.apply(o)
                                            }, console.log(o, t.tkyGW, o.tagName), o
                                        }, n.click(), console.log(e.AffXZ), e.dzpAR(setTimeout, (() => n.click()), 1e3)
                                    }))
                                })).then(console.log, console.warn)
                            } else r.setAttribute(o.name, i.value)
                    }
                }
            }
        }

        function R() {
            if (document.domain.includes(e.tzuDv)) {
                if (e.QBwOl(e.pIxsY, e.ILJBE)) throw e.zfdpy(alert, "These button dont work on youtube music yet"), ".";
                e.feDPd(n).click()
            }
            var t = [...document.getElementsByTagName("ytd-playlist-panel-renderer")].filter(u).filter((e => !a(e)))[0];
            return findhref2(t, "span").filter((e => !a(e))).filter(u).filter((e => "video-title" == e.id)).map(s).map(s).map((e => ({
                id: setElement(findhref2(s(e))[0].href),
                e: e
            })))
        }

        function D(n, t) {
            if (!e.xrHTv("dRgtD", e.IhJBO)) return c !== u && (this.body.color = l), e.PgRWq(a, s) && (this.body.size = d), this; {
                const e = document.createElement("a");
                e.href = n, e.download = t, document.body.appendChild(e), e.click(), document.body.removeChild(e)
            }
        }
        var N, z;
        async function O() {
            for (; z && !z.closed;) await e.RJLlH(w, 0);
            return 1
        }

        function G(o, i = "aria-label", c = document.body) {
            var u = {
                aWflJ: e.SegoO,
                rOYQQ: e.LLbQu,
                HdAfd: function(n, t) {
                    return e.TJuuH(n, t)
                },
                swPGa: function(n, t) {
                    return e.gIzwq(n, t)
                },
                PUzmB: function(n, t) {
                    return e.pgDHz(n, t)
                },
                TXish: e.GTEri,
                FaDvW: function(n, t) {
                    return e.RCRsb(n, t)
                },
                asFKb: e.GndZp
            };
            if (!e.DiDDV("mOybz", e.HJGBL)) {
                var l = [];
                return e.pSDLB((function t(r) {
                    var c = {
                            KPYTi: e.DiwRN,
                            WpzQC: e.qtEpO,
                            PkGmX: function(n, t) {
                                return e.xrHTv(n, t)
                            },
                            rjnYB: e.ooePA,
                            RKdar: "YCUdM",
                            HmlgS: function(n, t) {
                                return e.ILAMx(n, t)
                            },
                            VgIHs: e.rDncW,
                            qFOMK: function(n, t) {
                                return e.haBnu(n, t)
                            }
                        },
                        a = !1;
                    if (i) {
                        if (e.NRzmB(r.getAttribute(i), o)) {
                            if (e.QBwOl(e.pYVHr, e.pYVHr)) return n.querySelector(u.asFKb).innerText.replace("Replying to ", "");
                            l.push(r), a = 1
                        }
                    } else if (e.DiDDV(e.BtVpa, "gXNYz")) {
                        if (0 == d.getElementById(u.aWflJ).children.length) throw "";
                        h.log("loaded");
                        var {
                            title: s,
                            href: f
                        } = m(u.rOYQQ) ? u.HdAfd(p, u.rOYQQ)[0] ? u.swPGa(g, u.rOYQQ)[0] : u.swPGa(v, u.rOYQQ) : u.PUzmB(w, "#download-720-MP4"), y = {
                            id: x,
                            href: f,
                            title: s,
                            length: {}
                        };
                        R.log(u.TXish), u.FaDvW(D, N).postMessage(y, "*")
                    } else [...r.attributes].map((e => {
                        var n = {
                            nLUzN: function(e, n) {
                                return e === n
                            },
                            STnNb: c.KPYTi,
                            zieUh: c.WpzQC,
                            qVvPw: "change"
                        };
                        if (!c.PkGmX(c.rjnYB, c.RKdar)) {
                            const {
                                name: n,
                                value: t
                            } = e;
                            return {
                                name: n,
                                value: t
                            }
                        } {
                            var t = {
                                REYcs: function(e, t) {
                                    return n.nLUzN(e, t)
                                }
                            };
                            const e = [n.STnNb, n.zieUh, n.qVvPw, "blur"];
                            e.forEach((n => {
                                let r = new e(n, {
                                    bubbles: !0,
                                    isTrusted: !0
                                });
                                m["on" + n] && p["on" + n](r), t.REYcs(n, "input") && (x.value = R), w.dispatchEvent(r)
                            }))
                        }
                    })).filter((e => e.value == o)).length && (l.push(r), a = 1);
                    if (r.children.length && !a) {
                        if (e.ndXRl(e.QmABX, "XOppE")) return c.HmlgS(n[0].children[0].querySelectorAll(".cell-body.tablecell-visibility.style-scope.ytcp-video-row")[0].innerText, c.VgIHs);
                        (r = r.children).forEach = [].forEach, r.forEach((e => {
                            c.qFOMK(t, e)
                        }))
                    }
                }), c), l.length ? 1 == l.length ? l[0] : e.xSHYe(l, !1) : null
            }
            t.getElementsByClassName("clearfix")[0].innerText, e.iaScy(r)
        }

        function B(n, o = "aria-label", i = document.body) {
            var c = {
                HvTxv: function(e, n) {
                    return e + n
                },
                fawbZ: ".mp4",
                kMNHQ: e.kDTDF,
                WwRBm: function(n, t, r) {
                    return e.wBtuQ(n, t, r)
                },
                jDbVf: function(n, t) {
                    return e.ourHE(n, t)
                },
                LWyoZ: function(e, n, t, r) {
                    return e(n, t, r)
                },
                hNstc: e.sONZr,
                wdznP: "instaURL",
                AfSsP: function(e, n) {
                    return e(n)
                }
            };
            if (!e.YHhtB(e.vWsrg, "pOfzk")) {
                var u = [];
                return function i(l) {
                    var a = {
                        FrgTl: function(e, n, t) {
                            return e(n, t)
                        },
                        tSSIj: e.KkTVv,
                        bDPPe: function(n, t) {
                            return e.afTtR(n, t)
                        },
                        lZokX: function(n, t) {
                            return e.TJuuH(n, t)
                        }
                    };
                    if (e.vEpRC(e.tZmjj, e.tZmjj))
                        if (e.PArNh(l.getAttribute(o), n)) {
                            if (e.VRAiO(e.AiWvn, "swHMh")) return !!t("browse-copy", "data-e2e").parentNode && a.FrgTl(r, "browse-copy", a.tSSIj).parentNode;
                            u.push(l)
                        } else if (e.EWChH(e.xFXni, "NBamU")) {
                        if (l) {
                            let e = D.createElement("a");
                            e.download = a.bDPPe(N, ".mp3"), e.href = z, O.body.appendChild(e), e.click(), e.remove()
                        } else a.lZokX(g, v);
                        w[x] = R
                    } else l.children.length && ((l = l.children).forEach = [].forEach, l.forEach((e => {
                        c.AfSsP(i, e)
                    })));
                    else t[r].close()
                }(i), e.uPKIn(u.length, 1) ? u[0] : u || !1
            }
            c.LWyoZ(l, c.hNstc, a.href, "width=400,height=500");
            s(c.wdznP)
        }

        function W() {
            document.querySelector(e.veVcz).click()
        }

        function M() {
            e.URlwa(e.aIZyj, "BNZLR") ? (G(e.HGMGi, e.VIELr) && e.vKzws(G, e.HGMGi, e.VIELr)[0] || e.GVOQC(G, e.PfYLB, "title")).click() : n.click()
        }

        function U() {
            (e.rchOd(query, "#right-controls") && e.qwoOp(e.RtHWe(query, e.HZaAt).querySelectorAll("path")[0].getAttribute("d"), UnmutePath) && G(e.HGMGi, e.VIELr)[0] || G(e.cKqDT, "title") || e.pAwdw(G, e.lDCop, "title")).click()
        }
        console.log("B?"), _getIds = R, info = {}, downloadT = function(n, t = !1, a = !0, f = !1, h = !1, m = "") {
            var p = {
                FfmUc: function(n, t) {
                    return e.OGfvv(n, t)
                },
                NLQba: "#right-controls",
                YeBnJ: function(n, t) {
                    return e.cQXzL(n, t)
                },
                YAwZe: e.GYXIE,
                szgum: function(e, n, t) {
                    return e(n, t)
                },
                PisoU: function(n, t, r) {
                    return e.fmCLZ(n, t, r)
                },
                DnHGz: e.cKqDT,
                VJkTc: "title",
                cyslb: "Unmute (m)",
                UtshO: e.GgtOY
            };
            let g = e.IbEed(n, f ? e.EsHmi : e.VtXUr) + a;
            var v;
            if (!(v = document.getElementById(g)) || v.remove(), localStorage[g] && !t && (!h || !e.ZYgRq(confirm, "You have already download this video as ." + (f ? e.EsHmi : e.VtXUr) + "\nStill download?"))) return;
            let w = e.RPDSi(m, location);
            var y = new URL(location.href);
            y.host = y.host.replace(e.zOPLP, e.fdMPx), console.log("o", y);
            let b = [e.xQXHR(e.zuENl(e.Kfvhc, e.kOiVp(GM_getValue, e.zDgZi) || "0HzX"), "/"), e.sSEfu, n, e.IZHTa, y.pathname.startsWith(e.hYoxU) ? 1 : 0, e.lbQGV, f ? "mp4" : "mp3", "&useT=", a];
            console.log(g, b);
            return e.jPqsH(c, e.FCbOg, (function() {
                e.URlwa("PgzNl", e.ojMJI) ? (p.FfmUc(c, p.NLQba) && p.YeBnJ(p.FfmUc(u, p.NLQba).querySelectorAll(p.YAwZe)[0].getAttribute("d"), l) && p.szgum(y, "Mute", "title")[0] || p.PisoU(s, p.DnHGz, p.VJkTc) || p.szgum(d, p.cyslb, p.VJkTc)).click() : info[n].close()
            }), !0), onmessage = function(n) {
                if (e.URlwa(e.YDRHy, e.ZmrrO)) r.log(p.UtshO, o), i = !0;
                else if (e.EtpOs(n.origin, o) || n.origin.match(/https?:\/{2}onlymp3\.to/) || n.origin.match(/https?:\/{2}en\.onlymp3\.to/) || n.origin.match(/https?:\/{2}en(\d)\.onlinevideoconverter\.pro/) || e.pEqkU(n.origin, "https://sss.instasaverpro.com") || n.origin == e.tFLzN || "https://snapsave.io" == n.origin || e.ICYVh(n.origin, "https://tubemp4.is")) {
                    const {
                        data: {
                            href: r,
                            title: o,
                            length: i,
                            id: c,
                            _: u
                        }
                    } = n;
                    let l = o + (f ? e.hbaIA : ".mp3");
                    (t = document.getElementById(u)) && t.remove(), console.log(e.DGXwj, {
                        href: r,
                        title: o,
                        length: i,
                        id: c,
                        _: u
                    }, n), H.set(e.pbuOR, e.OfFea), H.set(e.lcSZx, !1), a ? (console.log(e.KJmWF), e.wBtuQ(D, r, l)) : open(r), localStorage[u] = r
                } else console.log(e.KspeK, n);
                var t
            }, info[n] = f ? open(w.pathname.startsWith("/shorts/") ? e.bPIle : "https://qdownloader.cc/youtube-video-downloader.html?v=" + n, [n, w.pathname.startsWith(e.hYoxU) ? 1 : 0, e.IbEed(f, !1)], "width=400,height=500") : ! function() {
                var t = {
                        BNByi: function(n, t) {
                            return e.scchp(n, t)
                        },
                        LYzIG: function(e, n) {
                            return e + n
                        },
                        aoIIX: function(n, t) {
                            return e.rchOd(n, t)
                        },
                        bPENd: "0HzX",
                        wASJf: e.sSEfu,
                        fSPTm: e.hYoxU,
                        woyWb: e.lbQGV,
                        sYoeE: "mp4",
                        FLdFx: e.VtXUr,
                        aTzGQ: e.HzxmC
                    },
                    r = new _e(e.ejPaD, {
                        src: b.join(""),
                        id: g,
                        useT: a,
                        loading: "lazy",
                        referrerpolicy: "no-referrer",
                        allowfullscreen: !0,
                        sandbox: e.HcSao,
                        allow: e.pbOAE
                    }).style({
                        border: 0,
                        position: e.cNoox,
                        width: 0,
                        height: 0,
                        "pointer-events": e.qnGxp,
                        opacity: 1
                    });
                return N = GM_addValueChangeListener(e.zDgZi, (function(e, o, i, c) {
                    b = [t.BNByi(t.LYzIG("https://y2mate.nu/", t.aoIIX(GM_getValue, "y2mate.nu") || t.bPENd), "/"), t.wASJf, n, "&s=", y.pathname.startsWith(t.fSPTm) ? 1 : 0, t.woyWb, f ? t.sYoeE : t.FLdFx, t.aTzGQ, a], r.set("src", b.join(""))
                })), r.appendTo(document.body), r.closed = !1, r
            }()
        }, downloadTikTok = function(n, c) {
            var u = {
                tEhDO: function(n, t, r, o, i, c) {
                    return e.zWPhu(n, t, r, o, i, c)
                },
                Cqnif: e.NQFhJ,
                nUpNZ: "MP3",
                MOJGD: e.EHGcw,
                DvXhk: e.uXwQn,
                oWnkX: ".ytp-right-controls",
                aJPAe: function(e, n) {
                    return e(n)
                },
                ttnCa: function(n, t, r, o) {
                    return e.gwjLh(n, t, r, o)
                },
                ACJiS: function(n, t) {
                    return e.afTtR(n, t)
                },
                NbaRu: e.bOrNb,
                MSXBE: e.hbaIA,
                uwVAj: "360",
                HZWFi: function(e, n) {
                    return e !== n
                },
                SwCvY: e.fVRHz,
                kfFwn: function(n, t) {
                    return e.ZFpVH(n, t)
                },
                BjqpC: "Handled",
                FiXVK: function(n, t) {
                    return e.EtpOs(n, t)
                },
                rEMqI: function(n, t, r, o) {
                    return e.jPqsH(n, t, r, o)
                },
                lejoF: function(n, t) {
                    return e.skBlh(n, t)
                },
                iTmTy: e.bmgNU,
                HjLzW: function(n, t) {
                    return e.KJZko(n, t)
                },
                LssQm: e.FtvYo,
                mvKuF: e.vTtyZ,
                mnTMy: "RWRte",
                VOYOt: e.KspeK,
                iwFjR: function(n) {
                    return e.iaScy(n)
                },
                kMdIo: e.JiYou,
                CEJTP: function(n, t) {
                    return e.tjiWp(n, t)
                }
            };
            (async function(e, n) {
                await u.iwFjR(O), console.log("ez");
                let c = n.videoID,
                    l = n.username,
                    a = u.iwFjR(t);
                onmessage = function(e) {
                    var n, t = {
                        BhljT: function(e, n, t, r, o, i) {
                            return u.tEhDO(e, n, t, r, o, i)
                        },
                        DSzaf: u.Cqnif,
                        WxMMz: "embedMP3",
                        jAQaz: u.nUpNZ,
                        ynXWe: "click",
                        YigVP: u.MOJGD,
                        cKeuF: u.DvXhk,
                        OQqGB: u.oWnkX,
                        gvJVM: "Appended",
                        FTYLV: function(e, n) {
                            return u.aJPAe(e, n)
                        },
                        IsRjS: function(e, n, t, r) {
                            return u.ttnCa(e, n, t, r)
                        },
                        GlNfB: function(e, n) {
                            return u.ACJiS(e, n)
                        },
                        EcEqt: u.NbaRu,
                        nHJIC: u.MSXBE,
                        hziBs: function(e, n, t) {
                            return e(n, t)
                        },
                        RAnrr: u.uwVAj
                    };
                    if (u.HZWFi(u.SwCvY, "OfyHj"))
                        if (e.origin == o || e.origin.match(/https?:\/{2}savetik\.csavetik.coo/) || e.origin.match(/https?:\/{2}en\.onlymp3\.to/) || e.origin.match(/https?:\/{2}en(\d)\.onlinevideoconverter\.pro/) || u.kfFwn(e.origin, "https://savetik.co")) {
                            var {
                                data: {
                                    href: c,
                                    links: l,
                                    title: s,
                                    length: f,
                                    id: y,
                                    mp4: b,
                                    info: {
                                        username: k
                                    }
                                }
                            } = e;
                            if (console.log(u.BjqpC, {
                                    href: c,
                                    title: s,
                                    length: f,
                                    id: y,
                                    links: l,
                                    mp4: b
                                }, e), u.FiXVK(e.origin, "https://savetik.co")) s = a, u.rEMqI(D, b ? l[0] : l.pop(), u.lejoF(k + u.NbaRu, s) + (b ? u.MSXBE : u.iTmTy), z);
                            else if (u.HjLzW(u.LssQm, "bxmPC")) {
                                if (useT) {
                                    if (u.mvKuF === u.mnTMy) return e.log("Attaching to embeder >:]"), t.FTYLV(d, t.OQqGB).then((async e => {
                                        var n = {
                                            KFZnC: function(e, n) {
                                                return e(n)
                                            },
                                            GTbZC: function(e, n, r, o, i, c) {
                                                return t.BhljT(e, n, r, o, i, c)
                                            }
                                        };
                                        let r = new D(t.DSzaf, {
                                            id: t.WxMMz
                                        }).appendTo(e).set("innerText", t.jAQaz).on(t.ynXWe, (function() {
                                            let t = U() || n.KFZnC(e, r.href);
                                            n.GTbZC(j, t, !1, !0, !1, !0)
                                        })).style({
                                            position: "fixed",
                                            right: t.YigVP,
                                            top: t.cKeuF
                                        });
                                        for (; !B.getElementById(t.WxMMz) && W.querySelector(t.OQqGB);) U.log(t.gvJVM), r.appendTo(".ytp-right-controls")
                                    })); {
                                        let e = document.createElement("a");
                                        e.download = u.ACJiS(s, ".mp3"), e.href = c, document.body.appendChild(e), e.click(), e.remove()
                                    }
                                } else u.aJPAe(open, c);
                                localStorage[_] = c
                            } else e = d, t.IsRjS(h, m ? p[0] : g.pop(), t.GlNfB(v, t.EcEqt) + w + (x ? t.nHJIC : ".mp3"), R)
                        } else console.log(u.VOYOt, e);
                    else t.hziBs(r, (e => e.href)(((n = new o(i.href)).host = "clipr.xyz", n)), t.RAnrr)
                }, z = open(u.kMdIo, ["https://www.tiktok.com/" + l + "/video/" + c, u.CEJTP(e, !1)], "width=400,height=500")
            })(n, c).then(console.log, console.warn)
        }, abc_ = G, N = M, Um = U;
        var V = 0;

        function A(n) {
            var o = {
                ARWrf: function(n, t) {
                    return e.BhoLZ(n, t)
                },
                HHfFB: "Skipping ad :>"
            };
            if (e.IZnMd(e.xyCIK, e.xyCIK))(!c || o.ARWrf(u.playbackRate, 16)) && (h = 1, m.log(o.HHfFB)), s.click(), d = 0;
            else {
                if (!n) return !1;
                if (!n.closed) {
                    if (e.YFTLg(e.opsgX, e.opsgX)) return !0; {
                        if (!e.wiHNA(a, s)) throw new x("Provided argument is not a DOM element.");
                        const n = h.createElement(m.tagName);
                        for (let e of R.attributes) n.setAttribute(e.name, e.value);
                        return n.style.cssText = g.style.cssText, n.className = v.className, n.innerHTML = w.innerHTML, n
                    }
                }
                if (!e.YPQrT(e.OGEcE, e.OlgPr)) return !1;
                t.value = r
            }
        }
        async function j(n = [
            ["w1", "win1"],
            ["w2", "win2"],
            ["w3", "win3"],
            ["w4", "win4"]
        ]) {
            var t = {
                ScKdR: "vUlyb",
                cNUKE: e.VqYAN,
                GpCLJ: function(e, n) {
                    return e(n)
                },
                IYpsa: function(n, t) {
                    return e.lDOot(n, t)
                },
                jbiWf: e.zkSLb,
                fIkKi: function(e, n) {
                    return e(n)
                },
                gdtmn: function(n, t, r) {
                    return e.Cghdr(n, t, r)
                }
            };
            if (e.rplCL(e.ItcKF, e.TXDod)) {
                var r, o = !1;
                return await new Promise(((e, s) => {
                    var f = t.gdtmn(setInterval, (s => {
                        var d = {
                            PKbzx: t.ScKdR,
                            cyqMN: t.cNUKE,
                            zWpdR: function(e, n) {
                                return t.GpCLJ(e, n)
                            },
                            pKZUG: function(e, n) {
                                return t.IYpsa(e, n)
                            },
                            SJUhZ: t.jbiWf
                        };
                        n.forEach((e => {
                            if (d.PKbzx === d.cyqMN) return !e.closed;
                            if (this[e[0]] = d.zWpdR(A, window[e[1]]), !window[e[1]] && !o)
                                if (d.pKZUG(d.SJUhZ, "MCBDF")) {
                                    new i(c.src).pathname.split(".").pop();
                                    u(l.src, a.name)
                                } else o = !0, r = e[1], console.log(e)
                        })), r && (t.GpCLJ(e, r), t.fIkKi(clearInterval, f))
                    }), 500)
                })), r
            }
            if (w.log(x, "was clicked", R.tagName), e.PArNh("A", D.tagName)) {
                F.log(e.MmRxV, X);
                let n = J.download,
                    t = K.href;
                Q = {
                    id: new Z(ee.href).searchParams.get("v"),
                    href: t,
                    title: n
                }, e.RPDSi(ne, ie).postMessage(ce, "*"), e.VzZcA(ue)
            } else Y._click.apply(H)
        }

        function Y(t, r, o) {
            var i = {
                Zmcne: function(e, n) {
                    return e === n
                },
                QMutW: e.REWoS,
                Zdzmb: e.OYnlB,
                NCDMg: function(n, t, r) {
                    return e.wAgLE(n, t, r)
                },
                CluIc: e.nmsEn
            };
            if (!r) return e.pOoMU(alert, e.eGXJC);
            var c = e.EDtVv(_getIds),
                u = [];
            for (let n = 0; e.HosfK(n, t); n++) u.push([e.RmaRP("w", n), e.uLDyz + n]);
            c.forEach((({
                id: t
            }, c) => {
                var l = {
                    cUVmD: e.hJqzP,
                    foTeq: function(n) {
                        return e.EDtVv(n)
                    },
                    GYMTw: function(e) {
                        return e()
                    },
                    lfDQf: function(n, t) {
                        return e.hqotI(n, t)
                    },
                    XbZui: function(n) {
                        return e.eWgTk(n)
                    },
                    ufyWX: e.KIFYJ,
                    BkckE: function(n, t, r) {
                        return e.bRdmC(n, t, r)
                    },
                    ragGT: "buttons are gone?!?!",
                    YIsra: function(n) {
                        return e.LahYD(n)
                    }
                };
                if (e.XBHcx(e.vUcdd, e.DZhHy)) e.WIdlX(j, u).then((e => {
                    if (!i.Zmcne(i.QMutW, "jKjUq")) return n.querySelector("video.x1lliihq");
                    for (var u = i.Zdzmb.split("|"), a = 0;;) {
                        switch (u[a++]) {
                            case "0":
                                window[e] = downloadT(t, o, !0, !!r);
                                continue;
                            case "1":
                                window.addEventListener("unload", (function(n) {
                                    window[e].close()
                                }));
                                continue;
                            case "2":
                                var s = i.NCDMg(setInterval, (n => {
                                    (!window[e] || window[e].closed) && (window[e] = null, clearInterval(s), console.log(e, l.cUVmD))
                                }), 300);
                                continue;
                            case "3":
                                console.log(i.CluIc, t, c);
                                continue;
                            case "4":
                                if ((info[t] || localStorage[t]) && !o) return;
                                continue
                        }
                        break
                    }
                }));
                else {
                    var a = {
                        JdmaP: function(e) {
                            return l.foTeq(e)
                        },
                        tWeQV: function(e) {
                            return l.GYMTw(e)
                        }
                    };
                    l.lfDQf(w, l.foTeq(x)) && l.XbZui(R) ? (F.log(l.ufyWX), l.BkckE(X, (() => {
                        a.JdmaP(ie).append(ce.br.element), a.tWeQV(ue).append(ae.element), se().append(fe.element)
                    }), 100)) : U != l.GYMTw(V) && !l.foTeq(A) && ie.log(l.ragGT), Y = l.YIsra(H)
                }
            }))
        }
        window.ch3 = A, window.getWin = j, WIP_ = Y;
        var H = new n(e.NQFhJ).set(e.pbuOR, "Get MP3").on(e.NIzLS, (function(n) {
                H.set("innerText", e.pUpbY), H.set(e.lcSZx, !0), e.wNIDp(downloadT, e.nbWhF(setElement, location.href), !0, !0, !1, !0)
            })),
            F = new n(e.NQFhJ).set("innerText", "Get MP4").on(e.NIzLS, (function(n) {
                e.YgIuW(downloadT, e.KEGEs(setElement, location.href), !0, !0, !0, !0)
            })),
            X = new n(e.NQFhJ).set("innerText", "PlayList MP3").on("click", (function(n) {
                e.gwjLh(WIP_, 2, !1, !1)
            })),
            J = new n("button").set("innerText", e.kyXOd).on("click", (function(t) {
                var r = {
                    BPGdM: e.iQEJX
                };
                e.UkTaU(e.hRWca, e.hRWca) ? n.getElementById(r.BPGdM).click() : WIP_(2, !0, !1)
            })),
            K = new n(e.NQFhJ).set(e.pbuOR, "Get MP4").on(e.NIzLS, (function(n) {
                e.vKzws(downloadTikTok, !0, e.SxlHH(setElement2, getClass(e.BnOva) ? e.pwpOM(getClass, e.BnOva).innerText : location.href))
            })).style({
                color: e.hpagw
            }),
            Q = new n(e.NQFhJ, {
                id: e.LBleQ
            }).set(e.pbuOR, "Get MP4").on(e.NIzLS, (function(t) {
                if (e.nyYPc("AgtOx", e.fAOPL)) return this.title.body = n, this;
                e.jvQkt(downloadTikTok, !0, setElement2(e.IdKIp(getClass, e.BnOva) ? getClass(e.BnOva).innerText : location.href))
            })).style({
                color: "blue"
            }),
            Z = new n(e.NQFhJ).set(e.pbuOR, e.OfFea).on(e.NIzLS, (function(n) {
                var t = {
                    JSLDX: e.yqhwD,
                    LOUxB: e.MmRxV,
                    TMKCo: function(n, t) {
                        return e.YSuFs(n, t)
                    },
                    cuztt: function(n) {
                        return e.GcGjf(n)
                    },
                    hFred: e.SvwsW
                };
                if (e.fJcDI === e.VUeEO) {
                    let e = p.call(g, v, w);
                    return e._click = e.click, e.click = function() {
                        if (e.log(e, t.JSLDX, e.tagName), "A" == e.tagName) {
                            K.log(t.LOUxB, e);
                            let n = e.download,
                                r = e.href;
                            Q = {
                                id: new Z(ee.href).searchParams.get("v"),
                                href: r,
                                title: n
                            }, t.TMKCo(ne, ie).postMessage(ce, "*"), t.cuztt(ue)
                        } else e._click.apply(e)
                    }, M.log(e, t.hFred, e.tagName), e
                }
                e.vKzws(downloadTikTok, !1, setElement2(getClass(e.BnOva) ? e.pOoMU(getClass, "ehlq8k34").innerText : location.href))
            })).style({
                color: e.hpagw
            });

        function ee() {
            return e.OIjjg(e.FPgxk, "kOvzm") ? document.querySelector(e.woDVm) || document.querySelector("#right-content") : ([...s.getElementsByClassName("ytp-video-menu-item ytp-button")].forEach(((e, t) => {
                e.innerText.startsWith(D) && (n = new N(e.href).searchParams.get("v"))
            })), !n && m.getElementsByClassName("ytp-playlist-menu-button ytp-button")[0] ? (D.log(e.qOHPw), N.getElementsByClassName(e.BCRYs)[0].click(), z()) : n ? (w.log(e.ymCIz), x.getElementsByClassName("ytp-playlist-menu-button ytp-button")[0].click(), n) : R.warn(e.IXWGd));
            var n
        }

        function ne() {
            var o = {
                xQQhP: function(n) {
                    return e.yLwCC(n)
                },
                dpDhi: function(n) {
                    return e.TSrWW(n)
                }
            };
            if (e.pmkga(e.oTnsU, e.oTnsU)) return t(this.toFixed(r)); {
                const l = e.fGIqE(ee);

                function i() {
                    var n = {
                        nxEna: function(n, t) {
                            return e.iUlos(n, t)
                        }
                    };
                    try {
                        if (e.sLuui == e.sLuui) return !(![...document.querySelectorAll(e.DpXQs)].filter(u).filter((e => !a(e)))[0] && !e.bCQem(query, e.iurwg)) && ([...document.querySelectorAll("#header-description")].filter(u).filter((e => !a(e)))[0] || query(e.iurwg));
                        n.nxEna(t, "Input was not Found"), r.warn("?!!")
                    } catch (e) {
                        return !1
                    }
                }
                console.log(l), H.appendTo(l), F.appendTo(l), console.log(e.BfbRA);
                var c = !1;
                e.GYDku(setInterval, (() => {
                    e.KvVmV(c, i()) && e.fGIqE(i) ? (console.log(e.KIFYJ), e.YbmvB(setTimeout, (() => {
                        i().append(n.br.element), o.xQQhP(i).append(X.element), o.dpDhi(i).append(J.element)
                    }), 100)) : c != e.pJQDd(i) && !e.MUIOf(i) && console.log(e.fixvn), c = e.OVHtF(i)
                }), 100)
            }
        }
        if (console.log(e.OsMpL), a1 = [
                [e.aTjVR, function() {
                    var n = {
                        XqxxX: e.wtPRW,
                        BDkWW: e.xHBfu,
                        hLXSp: function(n) {
                            return e.aHvJO(n)
                        }
                    };
                    l((function() {
                        ee();
                        if (!ee()) throw n.XqxxX;
                        return console.log(n.BDkWW), n.hLXSp(ne)
                    }), {
                        callback: function() {}
                    })
                }],
                [e.waVgI, function() {
                    var t = {
                        VQPJO: function(n, t) {
                            return e.vOJUx(n, t)
                        },
                        kLBtt: "zaGAJ",
                        wuxZV: function(n, t, r) {
                            return e.UemkK(n, t, r)
                        },
                        uDOvA: e.mqtGo,
                        XeEQL: ".e1mecfx011",
                        oHGij: function(e, n) {
                            return e(n)
                        },
                        JHTiU: e.DGXwj,
                        BLObP: e.rvTYP,
                        xLiwW: function(n, t) {
                            return e.WAVlC(n, t)
                        },
                        MbBeO: function(n) {
                            return e.XSCYD(n)
                        },
                        jSLdu: function(n, t) {
                            return e.MFJjZ(n, t)
                        },
                        bcPbN: e.KIFYJ,
                        GSzkC: e.eaLid,
                        mbVqv: e.zOrGK,
                        rTiFX: e.BfbRA
                    };
                    if (!e.vOJUx("HwNzW", e.isAKo)) return new n("br");
                    e.qRArj(addEventListener, "load", (function() {
                        var r = {
                            oClRR: function(n, t) {
                                return e.xAdBC(n, t)
                            },
                            SIQDX: "Caught"
                        };
                        e.aOYwU(l, (function() {
                            if (t.VQPJO(t.kLBtt, t.kLBtt))
                                if (m.log(p, "was clicked", g.tagName), r.oClRR("A", v.tagName)) {
                                    W.log(r.SIQDX, M);
                                    var e = U.download,
                                        n = V.href;
                                    A = {
                                        id: new j(Y.href).searchParams.get("v"),
                                        href: n,
                                        title: e
                                    }
                                } else G._click.apply(B);
                            else {
                                if (!t.wuxZV(abc_, "browse-copy", "data-e2e")) throw t.uDOvA;
                                K.appendTo(document.querySelectorAll(t.XeEQL)), Z.appendTo(document.querySelectorAll(".e1mecfx011"))
                            }
                        }), {
                            callback: function() {}
                        }), e.dzpAR(l, (function() {
                            var e = {
                                wnVmn: function(e, n) {
                                    return t.oHGij(e, n)
                                },
                                NzpBy: t.JHTiU,
                                IbFdF: function(e, n, t, r, o) {
                                    return e(n, t, r, o)
                                },
                                Dlobd: "Gkiwq",
                                YRUey: function(e, n, t) {
                                    return e(n, t)
                                },
                                VIZDk: t.BLObP,
                                KHMPE: "data-e2e",
                                bvugt: function(e, n) {
                                    return t.xLiwW(e, n)
                                },
                                EoUDr: "OFlot",
                                iCWuW: function(e, n) {
                                    return e(n)
                                },
                                kuFPH: function(e) {
                                    return t.MbBeO(e)
                                },
                                oVQTU: function(e, n) {
                                    return t.jSLdu(e, n)
                                },
                                VCSoF: function(e) {
                                    return t.MbBeO(e)
                                },
                                IIywh: t.bcPbN,
                                SfTIq: function(e, n, t) {
                                    return e(n, t)
                                },
                                EguGF: function(e) {
                                    return e()
                                },
                                zoTXk: function(e) {
                                    return t.MbBeO(e)
                                },
                                VSUwF: t.GSzkC,
                                YlRgg: "buttons are gone?!?!"
                            };
                            if (!document.getElementsByClassName(t.mbVqv)[0]) throw t.uDOvA;

                            function r() {
                                var n = {
                                    AJWYu: e.NzpBy,
                                    AfYdJ: function(n, t, r, o, i) {
                                        return e.IbFdF(n, t, r, o, i)
                                    }
                                };
                                if ("jjFyN" === e.Dlobd) {
                                    var t = {
                                        TffdA: function(n, t) {
                                            return e.wnVmn(n, t)
                                        }
                                    };
                                    i = c.children, u.forEach = [].forEach, l.forEach((e => {
                                        t.TffdA(s, e)
                                    }))
                                } else try {
                                    return !!e.YRUey(abc_, e.VIZDk, e.KHMPE).parentNode && e.YRUey(abc_, e.VIZDk, e.KHMPE).parentNode
                                } catch (t) {
                                    if (!e.bvugt("DQIyo", e.EoUDr)) return !1;
                                    var {
                                        data: {
                                            s: r,
                                            url: o,
                                            title: f
                                        }
                                    } = u;
                                    l.log(n.AJWYu, {
                                        s: r,
                                        url: o,
                                        title: f
                                    }, a), r ? h(m, 100) : n.AfYdJ(p, o, f, null, g)
                                }
                            }
                            K.appendTo(document.getElementsByClassName(t.mbVqv)[0]), Z.appendTo(document.getElementsByClassName(t.mbVqv)[0]), console.log(t.rTiFX);
                            var o = !1;
                            t.wuxZV(setInterval, (() => {
                                var t = {
                                    SJQah: function(n) {
                                        return e.kuFPH(n)
                                    }
                                };
                                if (e.oVQTU(o, e.VCSoF(r)) && e.VCSoF(r)) console.log(e.IIywh), e.SfTIq(setTimeout, (() => {
                                    t.SJQah(r).append(n.br.element), r().append(K.element), t.SJQah(r).append(Z.element)
                                }), 100);
                                else if (o != e.EguGF(r) && !e.zoTXk(r))
                                    if ("xgIlw" === e.VSUwF) console.log(e.YlRgg);
                                    else {
                                        var a = {
                                            KSJwU: function(n, t) {
                                                return e.iCWuW(n, t)
                                            }
                                        };
                                        i = c.children, u.forEach = [].forEach, l.forEach((e => {
                                            a.KSJwU(s, e)
                                        }))
                                    }
                                o = r()
                            }), 100)
                        }), {
                            callback: function() {}
                        })
                    }))
                }]
            ].filter((e => location.host.includes(e[0])))[0], a1 && a1[1] && a1[1](), console.log(a1), delete a1, __ex_ = ee, location.href.includes(e.eRyUL) || location.href.includes(e.Mubnu)) {
            console.log(e.eRyUL);

            function te() {
                var [n, t] = name.split(",");
                txtUrl.value = "https://www.youtube.com/" + ("1" == t ? "shorts/" : e.EPSVU) + n, e.yLwCC(getListFormats)
            }

            function re() {
                var n = videoTitle.innerText.split("\n"),
                    t = n.map((e => e.match(/[:\d]+/gi))).filter((e => !!e)).pop().pop(),
                    r = n[0].split("Title: ")[1],
                    o = e.eHLvW(findhref2, videoTitle.parentNode)[0].href,
                    i = {
                        id: e.mCRle(setElement, location.href),
                        href: o,
                        title: r,
                        length: t
                    };
                e.gkykX(opener, window).postMessage(i, "*"), console.log("Poasted")
            }
            return e.lmbKj(setInterval, (() => {
                e.ffJKs(document.getElementById("error-text").innerText.length, 5) && location.reload()
            }), 2e4), console.log(e.UexHs), void l((function(n = function() {}) {
                var t = {
                    RjwTi: function(n, t) {
                        return e.lkqNW(n, t)
                    },
                    gqapC: "zjItJ",
                    NUEuD: function(n) {
                        return e.VzZcA(n)
                    }
                };
                e.XLaxy(te), l((function(e = function() {}) {
                    t.RjwTi(t.gqapC, "zjItJ") ? t.NUEuD(re) : (i = 0, c = 1, u.playbackRate = l, a.log("Fixed playBack"))
                }), {
                    callback: close
                })
            }), {
                callback: function() {}
            })
        }
        if (location.href.includes(e.btoPF))
            if (e.tkjRb === e.GslNY) {
                if (!e.yWECS(i, e.rvTYP, "data-e2e")) throw e.mqtGo;
                c.appendTo(u.querySelectorAll(".e1mecfx011")), l.appendTo(a.querySelectorAll(e.gnEYD))
            } else {
                console.log("Getting MP4");
                let [We, Me] = name.split(",");
                l((function(n = function() {}) {
                    document.getElementById(e.csnYp).value = "https://www.youtube.com/" + ("1" == Me ? "shorts/" : "watch?v=") + We, document.getElementById("btn-submit").click(), console.log(We, Me)
                }), {
                    callback: function() {}
                }), e.GYDku(l, (function(n = function() {}) {
                    if (e.NBLbE(e.GmcIl, "nuOQe")) {
                        if (console.log(result.children.length), !result.children.length) throw document.getElementById(e.vDseH).click(), "no there"
                    } else
                        for (var t = "3|2|6|5|1|4|0".split("|"), r = 0;;) {
                            switch (t[r++]) {
                                case "0":
                                    e.ZJIYP(O);
                                    continue;
                                case "1":
                                    D.log("Posted", i);
                                    continue;
                                case "2":
                                    var o = e.pdPHK(p, g.forms[0])[0].href;
                                    continue;
                                case "3":
                                    h.log("a", m);
                                    continue;
                                case "4":
                                    (N || z.parent).postMessage(i, "*");
                                    continue;
                                case "5":
                                    var i = {
                                        _: x,
                                        id: R,
                                        href: o,
                                        title: c,
                                        length: {}
                                    };
                                    continue;
                                case "6":
                                    var c = e.PEJoI(v, w.forms[0], "div")[0].innerText;
                                    continue
                            }
                            break
                        }
                }), {
                    int: 1e3,
                    callback: function() {}
                }), e.DXNYP(l, (function() {
                    document.getElementById(e.iQEJX).click()
                }), {
                    callback: function() {}
                }), e.WRoMF(l, (function() {
                    for (var n = "2|0|1|3|4".split("|"), t = 0;;) {
                        switch (n[t++]) {
                            case "0":
                                var r = downloadbtn.href;
                                continue;
                            case "1":
                                var o = {
                                    id: We,
                                    href: r,
                                    title: i,
                                    length: {}
                                };
                                continue;
                            case "2":
                                var i = e.urnAl($, ".media-heading")[0].innerText;
                                continue;
                            case "3":
                                console.log(e.GTEri);
                                continue;
                            case "4":
                                e.VWZOC(opener, window).postMessage(o, "*");
                                continue
                        }
                        break
                    }
                }), {
                    callback: close
                })
            } else if (location.href.includes(e.MSLCH)) {
            async function oe(n) {
                for (; !document.querySelector(n);) await e.KPtnv(w, 0);
                return !0
            }(async function() {
                var n = {
                    ESRFN: function(n, t) {
                        return e.SxlHH(n, t)
                    },
                    EnPqj: function(e, n) {
                        return e(n)
                    }
                };
                let [t, r] = name.split(",");
                if (!t.length || !r.length) return console.warn("No info Preset");
                var o = "https://www.youtube.com/" + ("1" == r ? e.wUtkR : e.EPSVU) + t;
                await e.qUjMv(oe, "#txt-url"), console.log(e.VuluP), document.querySelector(e.jadPU).value = o, await e.AJOPp(oe, e.Bhhan), console.log("GEtting res"), await e.Pcfzu(w, 100), document.querySelector(e.Bhhan).click(), await e.agYvf(oe, e.LOvVm), console.log(e.EcFup);
                var i = document.querySelector(e.LOvVm).innerText,
                    c = [0];
                return [...document.querySelector(e.yeZvb).querySelector(e.gPtIF).querySelectorAll("tr")].forEach((e => {
                    var t = e.innerText.match(/(?<res>\d+)(p|P)/i) || {};
                    t.groups && (t = n.ESRFN(Number, t.groups.res), c[0] < t && (c[0] = t, c[1] = n.EnPqj(findhref2, e)[0].href, c[2] = e))
                })), {
                    id: t,
                    title: i,
                    href: c[1],
                    mp4: !0,
                    res: c[0]
                }
            })().then((function(n) {
                e.xThyp(opener, window).postMessage(n, "*"), location.href = n.href
            }), console.warn)
        } else if (location.href.includes(e.eYOSO))(async function() {
            var n = {
                uQbzO: function(n, t) {
                    return e.WIdlX(n, t)
                }
            };
            for (await e.dfxie((async function(e) {
                    for (; !document.querySelector(e);) await n.uQbzO(w, 0);
                    return !0
                }), e.DcBFx); !document.querySelector("#A_downloadUrl").href.length;) await w(0);
            console.log(e.NZuuZ);
            var t = document.querySelector(e.XOKEV).innerText,
                r = {
                    href: document.querySelector(e.DcBFx).href,
                    title: t
                };
            (opener || window).postMessage(r, "*")
        })().then(close, console.warn);
        else if (location.href.includes(e.RWAXW)) {
            let [Ue, Ve] = name.split(",");
            if (!Ue.length || !Ve.length) return console.Warn(e.JlbAM);
            var ie = "https://www.youtube.com/" + (e.qMxmf(Ve, "1") ? "shorts/" : "watch?v=") + Ue;
            let Ae = function() {};
            e.WRoMF(l, (function(n = function() {}) {
                if (e.wGxuu(e.JPDmK, "tOgtV")) {
                    document.getElementById(e.eSjfN).value = "https://www.youtube.com/" + ("1" == Ve ? e.wUtkR : "watch?v=") + Ue, document.getElementById(e.desVt).click(), console.log(e.SEwxb)
                } else {
                    var t = i.createElement("a");
                    t.href = c, t.download = u, l.body.appendChild(t), t.click(), a.body.removeChild(t)
                }
            }), {
                callback: Ae
            }), e.oywoG(l, (function() {
                var t = {
                    AXdXe: e.veVcz,
                    RqdVH: "was clicked",
                    pmZEc: function(n, t) {
                        return e.cQXzL(n, t)
                    },
                    uuOqG: e.MmRxV,
                    fHGsR: function(n, t) {
                        return e.RPDSi(n, t)
                    },
                    yZKdx: function(n) {
                        return e.GcGjf(n)
                    },
                    lCFBZ: e.SvwsW,
                    RlUQo: e.AffXZ,
                    XCqxr: function(n, t, r) {
                        return e.IagDf(n, t, r)
                    }
                };
                if (e.rKsdf(e.REfmd, e.REfmd)) n.querySelector(t.AXdXe).click();
                else {
                    if (e.ErxVV(stepProcess.style.display, e.qnGxp)) {
                        if (e.Fovtc(e.cwSSw, "rRFQR")) throw document.getElementById(e.desVt).click(), e.ZoenE;
                        var r = w.createElement;
                        x.createElement = function(e, n) {
                            var o = {
                                    piJYi: t.RqdVH,
                                    YWESH: function(e, n) {
                                        return t.pmZEc(e, n)
                                    },
                                    AXpNn: t.uuOqG,
                                    oJWAH: function(e, n) {
                                        return t.fHGsR(e, n)
                                    },
                                    pEjKa: function(e) {
                                        return t.yZKdx(e)
                                    }
                                },
                                i = r.call(null, e, n);
                            return i._click = i.click, i.click = function() {
                                if (e.log(i, o.piJYi, i.tagName), o.YWESH("A", i.tagName)) {
                                    we.log(o.AXpNn, i);
                                    var n = i.download,
                                        t = i.href;
                                    ye = {
                                        id: new be(xe.href).searchParams.get("v"),
                                        href: t,
                                        title: n
                                    }, o.oJWAH(ke, Te).postMessage(fQ, "*"), o.pEjKa(y)
                                } else i._click.apply(i)
                            }, ue.log(i, t.lCFBZ, i.tagName), i
                        }, A.click(), j.log(t.RlUQo), t.XCqxr(Y, (() => null.click()), 1e3)
                    }
                    console.log(e.iDUkh)
                }
            }), {
                callback: Ae
            }), l((function() {
                for (var n = e.ubjoX.split("|"), t = 0;;) {
                    switch (n[t++]) {
                        case "0":
                            var r = {
                                id: Ue,
                                href: i,
                                title: o,
                                length: {}
                            };
                            continue;
                        case "1":
                            if (0 == document.getElementById(e.SegoO).children.length) throw "";
                            continue;
                        case "2":
                            console.log(e.rBWrL);
                            continue;
                        case "3":
                            e.wWakn(opener, window).postMessage(r, "*");
                            continue;
                        case "4":
                            var {
                                title: o,
                                href: i
                            } = e.ZxFly($, e.LLbQu) ? $(e.LLbQu)[0] ? e.ePXKV($, e.LLbQu)[0] : e.guCaS($, e.LLbQu) : $(e.LLbQu);
                            continue;
                        case "5":
                            console.log(e.GTEri);
                            continue
                    }
                    break
                }
            }), {
                callback: close
            })
        } else if (location.href.includes(e.svKGh)) {
            var [ce, ue] = name.split(",");

            function le() {
                if (!e.eCbId("ccUXR", e.zcrfz)) return n.length; {
                    console.log("Found");
                    let n = {
                            title: document.getElementsByClassName(e.iJkMx)[0].innerText,
                            links: e.hSlsL(findhref2, document.getElementsByClassName("tik-video")[0]).map((e => e.href)),
                            mp4: 1 == ue,
                            info: e.iUlos(setElement2, ce)
                        },
                        t = e.uHkUS;
                    onmessage = function(n) {
                        if (e.ICYVh(n.origin, t)) {
                            var {
                                data: {
                                    s: r,
                                    url: o,
                                    title: i
                                }
                            } = n;
                            console.log("Handled", {
                                s: r,
                                url: o,
                                title: i
                            }, n), r ? setTimeout(close, 100) : e.iVXzT(D, o, i, null, close)
                        } else console.log(e.KspeK, n)
                    }, e.ZvNbo(opener, window).postMessage(n, "*")
                }
            }
            addEventListener(e.WzaeA, (function() {
                var n = {
                    HwudP: function(n) {
                        return e.yLwCC(n)
                    },
                    aJTDq: function(n, t, r) {
                        return e.PEJoI(n, t, r)
                    }
                };
                e.dJWjh(l, (function() {
                    s_input.value = ce, n.HwudP(ksearchvideo), n.aJTDq(setTimeout, ksearchvideo, 1e3)
                }), {
                    callback() {}
                })
            })), e.SrggQ(l, (function() {
                document.getElementsByClassName(e.iJkMx)[0].innerText, e.SkqlT(le)
            }), {
                callback() {}
            })
        } else if (document.domain.includes("music")) console.log(e.pDkPT), e.XMRfM(addEventListener, e.kCJOe, (function({
            isTrusted: n,
            ctrlKey: t,
            shiftKey: o,
            code: i,
            target: l,
            target: {
                tagName: a
            }
        }) {
            e.cLFkc("LiXbo", "WoIOI") ? !["INPUT", "TEXTAREA"].includes(a) && !t && !o && n && "KeyI" == i && (e.szXIH(abc_, e.TCWLq) || e.PDIOh(abc_, e.ReEEM)[1]).click() : e.wpGGs(typeof r, e.RABcQ) ? e.IagDf(c, {
                log: !1
            }, e.VIlqd) : u.error(e.DHpgL)
        }));
        else if (document.domain.includes("loader.to") && location.href.includes(e.YPDjp)) {
            if (!e.sTqcz(e.GNLxH, "hzdoR")) throw n.getElementById(e.vDseH).click(), e.gfsHy;
            console.warn("using loader.to api")
        }
        const ae = window.trustedTypes && trustedTypes.createPolicy("trustedHTMLPolicy", {
                createHTML: e => e,
                createScriptURL: e => e
            }),
            se = "\n    /* Default iframe styles */\n    #cardApiIframe {\n        width: 100%;\n        height: 100%;\n        transition: all 2.5s ease-in-out;\n    }\n\n    /* Collapse animation when the class is toggled */\n    .collapse-frame {\n        width: 0;\n        height: 0;\n        margin-left: auto;\n        margin-right: auto;\n        transition: all 2.5s ease-in-out;\n    }\n",
            fe = document.createElement(e.gtUmK);

        function de(t) {
            const r = pe.element;
            t ? e.JFJwk(e.wqave, e.wqave) ? n.querySelectorAll(".xh8yej3.x1iyjqo2")[0].children : r.classList.add(e.YcprG) : r.classList.remove(e.YcprG)
        }
        fe.type = e.FkCJy, fe.appendChild(document.createTextNode(ae ? ae.createHTML(se) : se));
        var he = "https://www.youtube.com/watch?v=" + setElement(location.href) + "&adUrl=https://www.youtube.com/channel/UCOA8lE9-0XnEIdHqjfQUz1A?sub_confirm=1",
            me = ae ? ae.createScriptURL(e.ArgCO + he) : e.CxydR(e.ArgCO, he);
        const pe = new _element(e.ejPaD, {
                id: e.TUJze,
                scrolling: "no",
                width: "100%",
                height: e.dzupy,
                allowtransparency: "true",
                style: e.hVVwS,
                src: me
            }),
            ge = new _element(e.cPZhb, {
                src: ae ? ae.createScriptURL(e.hfxWC) : e.hfxWC
            });
        ge.element.addEventListener(e.WzaeA, (() => {
            "function" == typeof iFrameResize ? e.xGrzE(iFrameResize, {
                log: !1
            }, e.VIlqd) : console.error(e.DHpgL)
        }));
        const ve = new _element("div").append(pe, ge),
            we = document.querySelector(e.nnXtG);
        var ye = e.phBLB(setElement, location.href);
        pe.element.addEventListener(e.WzaeA, (() => {
            console.log(e.wdjVK), e.oYNSu(de, !1)
        })), e.BetAY(de, !0);
        var be = 0,
            xe = 1,
            ke = 0,
            Te = 0;
        e.qRArj(setInterval, (t => {
            var r = {
                    ojXSF: e.yfdrK,
                    VmKMa: e.cDckD,
                    tarbO: function(n, t, r) {
                        return e.xGrzE(n, t, r)
                    },
                    HumPr: "browse-video-desc",
                    HhoQI: "data-e2e",
                    vUsmr: e.upuEi,
                    AKNEv: function(n, t) {
                        return e.NRzmB(n, t)
                    },
                    RMtEY: "Handled",
                    qRUGZ: function(e, n, t, r, o) {
                        return e(n, t, r, o)
                    },
                    WtasZ: function(e, n, t) {
                        return e(n, t)
                    },
                    JtPXM: "Unhandled Post"
                },
                o = document.querySelector(e.gpAOl),
                i = document.querySelector(e.sefNR) || document.querySelector(e.YyGRH) || document.querySelector(e.nnXtG);
            he = "https://www.youtube.com/watch?v=" + setElement(location.href) + "&adUrl=https://www.youtube.com/channel/UCOA8lE9-0XnEIdHqjfQUz1A?sub_confirm=1", me = ae ? ae.createScriptURL(e.ArgCO + he) : e.ArgCO + he, i && (!i.querySelector(e.VIlqd) && (e.agYvf(de, !0), i.parentNode.prepend(fe), i.prepend(ve.element), console.log("Added That Thing")), e.pdPHK(setElement, location.href) != ye && (e.Geknt(de, !0), pe.set(e.MZaoD, me), console.log(e.CXWAQ), ye = e.ghhYU(setElement, location.href)));
            var s = e.HUCds(query, "yt-button-view-model#dismiss-button");
            if (s && !e.gVpfa(a, s))
                if (e.hnOQM !== e.qBZof) s.click();
                else {
                    c(e.IyJFo);
                    var {
                        id: f,
                        href: g,
                        isShort: y
                    } = e.dlXDN(u, l.target.parentElement.parentElement).map((e => ({
                        href: e.href,
                        short: e.href.includes("/short"),
                        id: h(e.href)
                    }))).filter((e => e.id))[0];
                    e.hjcMh(t, f, !1, !0, !1, !1, y ? new d(g) : null)
                }
            var b = document.getElementsByClassName(e.nMKHc)[0];
            try {
                if (e.RGfyR(b, !V)) e.EkoKH(e.MaoUP, "chCZg") ? (console.log(e.zQMku), V = 1, o.playbackRate = 16, o.muted = 1) : n.warn("using loader.to api");
                else if (e.RGfyR(!b, V))
                    if (e.YFTLg(e.QgPjo, e.Oeogb)) try {
                        return l.querySelector(r.ojXSF).innerText.replace(r.VmKMa, "")
                    } catch (y) {
                        return r.tarbO(h, r.HumPr, r.HhoQI) ? m(r.HumPr, r.HhoQI).innerText : p.querySelector(r.vUsmr).innerText.replace("Replying to ", "")
                    } else {
                        console.log(e.jBauP);
                        try {
                            e.ULTOd("UNLxw", e.mkKdR) ? o.muted = 0 : n.log(e.fixvn)
                        } catch (n) {
                            console.warn(e.DMnni)
                        }
                        V = 0
                    }
            } catch {}
            var k = [...document.querySelectorAll(e.KRcSd), ...document.querySelectorAll("#ytd-player")].map((e => [...e.querySelectorAll("button")].filter((e => e.className.includes("skip")))[0])).filter((e => !!e))[0];
            if (k)
                if (e.wcIca(e.fPGGv, e.fPGGv)) {
                    v.log(e.iMgse);
                    var T = {
                            title: w.getElementsByClassName(e.iJkMx)[0].innerText,
                            links: e.dfxie(x, R.getElementsByClassName(e.cHtCo)[0]).map((e => e.href)),
                            mp4: e.qwoOp(D, 1),
                            info: N(z)
                        },
                        S = e.uHkUS;
                    O = function(e) {
                        if (r.AKNEv(e.origin, S)) {
                            var {
                                data: {
                                    s: n,
                                    url: t,
                                    title: o
                                }
                            } = e;
                            Q.log(r.RMtEY, {
                                s: n,
                                url: t,
                                title: o
                            }, e), n ? r.WtasZ(ne, ie, 100) : r.qRUGZ(ce, t, o, null, ue)
                        } else K.log(r.JtPXM, e)
                    }, e.xSHYe(A, j).postMessage(T, "*")
                } else(!ke || e.YIviq(o.playbackRate, 16)) && (ke = 1, console.log("Skipping ad :>")), k.click(), xe = 0;
            else e.RGfyR(!xe, o) ? (ke = 0, xe = 1, o.playbackRate = be, console.log(e.mzWQM)) : o && (ke = 0, be = o.playbackRate);
            var E = document.getElementsByClassName(e.OKiGl)[2];
            E && (E.click(), console.log(e.Uuwyb));
            var C = [...document.querySelectorAll(e.yzmfV)].filter((e => e.innerText.includes("Ads")))[0];
            C && (C.click(), !Te && location.href.includes("watch") && (Te = 1, location.reload()))
        }), 10)
    }();