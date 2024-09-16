// ==UserScript==
// @name Gaston's - Video/Image Downloader
// @namespace http://tampermonkey.net/
// @version 6.5
// @description Instagram/Twitch/YouTube/TikTok Video/Audio Downloader (frequently updated)
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
// @name:pt Gaston's - Downloader de vídeo/imagem
// @name:fr Gaston's - téléchargeur vidéo / image
// @name:ja Gaston's -Video/Image Downloader Gaston' s - vu~ideo/ Image daunrōdā
// @name:ru Gaston's - Video/Image Скачатель Gaston's - Video/Image Skachatel'
// @name:hi गैस्टन - वीडियो/छवि डाउनलोडर gaistan - veediyo/chhavi daunalodar
// @name:de Gaston's - Video/Image Downloader
// @name:es Gaston's - Video/Image Descarger
// @name:it Gaston's - Downloader di video/immagine
// @name:pl Gaston - pobierca wideo/obrazu
// @name:tr Gaston's - Video/Resim İndirici
// @name:ko Gaston 's- 비디오/이미지 다운로더 Gaston 's- bidio/imiji daunlodeo
// @name:uk GASTON'S - Відео/зображення завантажувача GASTON'S - Video/zobrazhennya zavantazhuvacha
// @name:nl Gaston's - Video/Image Downloader
// @name:ro Gaston's - descărcător video/imagini
// @name:th Gaston's - Video/Image Downloader Gaston's - Video/Image Downloader
// @name:id Gaston's - Video/Image Downloader
// @name:vi Gaston's - Trình tải xuống video/hình ảnh
// @name:bg Gaston's - видео/изтегляне на изображения Gaston's - video/izteglyane na izobrazheniya
// @name:sv Gaston's - Video/Image Downloader
// @name:el Gaston's - Video/Image Downloader Gaston's - Video/Image Downloader
// @name:da Gastons - Video/Image Downloader
// @name:he Gaston's - הורדת וידאו/תמונה
// @name:cs Gaston's - Video/Image Downloader
// @name:no Gaston's - Video/Image Downloader
// @name:hu Gaston's - Videó/kép letöltő
// @name:sk Gaston's - Video/Image Downloader
// @name:fi Gaston's - Video/kuvan lataaja
// @description:en Instagram/Twitch/YouTube/TikTok Video/Audio Downloader (frequently updated)
// @description:de Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (häufig aktualisiert)
// @description:zh Instagram/Twitch/YouTube/TikTok Video/Audio Downloader (frequently updated)
// @description:es Instagram/Twitch/YouTube/Tiktok Video/Audio Descarger (frecuentemente actualizado)
// @description:fr Instagram / twitch / youtube / tiktok vidéo / téléchargeur audio (fréquemment mis à jour)
// @description:ru Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (часто обновляется) Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (chasto obnovlyayetsya)
// @description:ar Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (تم تحديثه بشكل متكرر) Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (tama tahdithuh bishakl mutakariri)
// @description:pt Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (atualizado com frequência)
// @description:hi Instagram/Twitch/YouTube/Tiktok वीडियो/ऑडियो डाउनलोडर (अक्सर अपडेट किया गया) instagram/twitchh/youtubai/tiktok veediyo/odiyo daunalodar (aksar apadet kiya gaya)
// @description:ja Instagram/Twitch/YouTube/Tiktokビデオ/オーディオダウンローダー（頻繁に更新） Instagram/ Twitch/ yūchūbu/ Tiktok bideo/ ōdio daunrōdā (hinpan ni kōshin)
// @description:ko Instagram/Twitch/YouTube/Tiktok 비디오/오디오 다운로더 (자주 업데이트) Instagram/Twitch/YouTube/Tiktok bidio/odio daunlodeo (jaju eobdeiteu)
// @description:vi Instagram/twitch/youtube/tiktok video/trình tải xuống âm thanh (thường xuyên được cập nhật)
// @description:tr Instagram/Twitch/YouTube/Tiktok Video/Ses Downloader (sıklıkla güncellendi)
// @description:nl Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (vaak bijgewerkt)
// @description:id Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (sering diperbarui)
// @description:it Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (frequentemente aggiornato)
// @description:uk Instagram/twitch/youtube/tiktok відео/аудіо завантажувач (часто оновлений) Instagram/twitch/youtube/tiktok video/audio zavantazhuvach (chasto onovlenyy)
// @description:pl Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (często aktualizowany)
// @description:ro Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (actualizat frecvent)
// @description:th Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (อัปเดตบ่อยครั้ง) Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (xạpdet b̀xy khrậng)
// @description:cs Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (často aktualizováno)
// @description:hu Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (gyakran frissítve)
// @description:da Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (ofte opdateret)
// @description:sk Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (často aktualizované)
// @description:fi Instagram/twitch/youtube/tiktok video/äänen lataus (päivitetty usein)
// @description:bg Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (често актуализиран) Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (chesto aktualiziran)
// @description:he אינסטגרם/טוויץ '/YouTube/Tiktok וידאו/הורדת שמע (מעודכן לעתים קרובות)
// @description:sv Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (ofta uppdaterad)
// @description:no Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (ofte oppdatert)
// @description:el Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (συχνά ενημερωμένο) Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (sychná enimeroméno)
// @license MIT
// ==/UserScript==
function A(e, n) {
    var t = u();
    return A = function(n, r) {
        var o = t[n -= 173];
        if (void 0 === A.ADdPBh) {
            A.BgFbEM = function(e) {
                for (var n, t, r = "", o = "", i = 0, c = 0; t = e.charAt(c++); ~t && (n = i % 4 ? 64 * n + t : t, i++ % 4) ? r += String.fromCharCode(255 & n >> (-2 * i & 6)) : 0) t = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(t);
                for (var u = 0, l = r.length; u < l; u++) o += "%" + ("00" + r.charCodeAt(u).toString(16)).slice(-2);
                return decodeURIComponent(o)
            }, e = arguments, A.ADdPBh = !0
        }
        var i = n + t[0],
            c = e[i];
        return c ? o = c : (o = A.BgFbEM(o), e[i] = o), o
    }, A(e, n)
}(function(e, n) {
    for (var t = 183, r = "gN&x", o = "1l3v", i = "Y^[A", c = 179, l = "bV(X", a = A, s = A, f = G, d = G, h = G, m = u();;) try {
        if (495387 === parseInt(f(178, "1l3v")) / 1 + parseInt(d(176, "X#XJ")) / 2 + -parseInt(d(t, r)) / 3 + -parseInt(d(177, o)) / 4 * (-parseInt(a(181)) / 5) + parseInt(d(184, i)) / 6 + -parseInt(a(173)) / 7 * (parseInt(h(c, l)) / 8) + -parseInt(s(180)) / 9) break;
        m.push(m.shift())
    } catch (e) {
        m.push(m.shift())
    }
})(),
function() {
    var e = {
        zLzmZ: "Replying to ",
        lxLIZ: "CyWdu",
        WWuYM: "nuFZt",
        lxmRs: "---",
        HOPeH: "darkgrey",
        IpgHf: "1rem",
        amwfY: "#008f68",
        lVQXq: function(e, n) {
            return e !== n
        },
        SeCxg: function(e, n) {
            return e !== n
        },
        DSqmo: "AhPVS",
        OdSrU: "PpRKq",
        eVwvP: function(e, n) {
            return e !== n
        },
        Aeeaw: function(e, n) {
            return e === n
        },
        yEbtS: function(e, n) {
            return e !== n
        },
        MrtcH: function(e) {
            return e()
        },
        VCsXo: function(e) {
            return e()
        },
        woOJk: "Added playlist buttons",
        APOne: function(e, n, t) {
            return e(n, t)
        },
        dLvdI: "gPPPl"
    };
    class n {
        constructor(t) {
            var r = {
                WTvmG: e.zLzmZ
            };
            if (e.lxLIZ === e.WWuYM) return n.querySelector("#app > div.css-14dcx2q-DivBodyContainer.e1irlpdw0 > div:nth-child(4) > div > div.css-1qjw4dg-DivContentContainer.e1mecfx00 > div.css-1stfops-DivCommentContainer.ekjxngi0 > div > div.css-1xlna7p-DivProfileWrapper.ekjxngi4 > div.css-1u3jkat-DivDescriptionContentWrapper.e1mecfx011 > div.css-1nst91u-DivMainContent.e1mecfx01 > div.css-bs495z-DivWrapper.e1mzilcj0").innerText.replace(r.WTvmG, "");
            this.title = {
                body: t || e.lxmRs,
                color: e.HOPeH,
                size: e.IpgHf
            }, this.body = {
                color: e.amwfY,
                size: e.IpgHf
            }
        }
        setTitleBody(n) {
            return e.SeCxg(e.DSqmo, e.OdSrU) ? (this.title.body = n, this) : (t !== I && (this.body.color = S), e.lVQXq(p, J) && (this.body.size = k), this)
        }
        setTitleStyle({
            color: n,
            size: t
        }) {
            return void 0 !== n && (this.title.color = n), e.eVwvP(t, void 0) && (this.title.size = t), this
        }
        setBodyStyle({
            color: n,
            size: t
        }) {
            if (e.Aeeaw("AQTsf", "AQTsf")) return void 0 !== n && (this.body.color = n), e.yEbtS(t, void 0) && (this.body.size = t), this;
            t.setAttribute(P.name, x.value)
        }
        log(n = "") {
            var t = {
                LFMKQ: function(n) {
                    return e.MrtcH(n)
                },
                YrOgm: function(n) {
                    return e.VCsXo(n)
                },
                fvbpT: e.woOJk,
                gnfwW: function(n, t, r) {
                    return e.APOne(n, t, r)
                }
            };
            e.Aeeaw(e.dLvdI, "ZKPIl") ? (S.log(t.fvbpT), t.gnfwW(p, (() => {
                t.LFMKQ(f).append(y.br.element), Q().append(l.element), t.YrOgm(B).append(v.element)
            }), 100)) : console.log("%c" + this.title.body + " | %c" + n, "color: " + this.title.color + "; font-weight: bold; font-size: " + this.title.size + ";", "color: " + this.body.color + "; font-weight: bold; font-size: " + this.body.size + "; text-shadow: 0 0 5px rgba(0,0,0,0.2);")
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

function u() {
    var e = ["WRdcPHOKkCk0w8oqEsS", "WR3cOX0LDmoYvCoiyXddRMa", "W7fhc8ooW6ZcLhpdLq", "mtqWmdG4nJL4rgDnEg4", "mtGZmgTrv0PoCG", "WRpcMCktrehcUCoDsCo0lW", "F8kGyYhdLCk6FCkdWPLLW4ioW78", "WRO8e8oGWQBdVSo/yJaYW5tcSZy", "mta5mZa4oxvLr0LvEq", "ntaYmtfOtMPut3u", "EYbEqMldTtVdMHhcHmk3DKa", "W4/dSmoqBIpdRaTF", "W43dUSk8hvNcVf5IsrWenmkZ"];
    return (u = function() {
        return e
    })()
}

function G(e, n) {
    var t = u();
    return G = function(n, r) {
        var o = t[n -= 173];
        if (void 0 === G.XMoJbo) {
            G.sUmFUE = function(e, n) {
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
            }, e = arguments, G.XMoJbo = !0
        }
        var i = n + t[0],
            c = e[i];
        return c ? o = c : (void 0 === G.JKlVxK && (G.JKlVxK = !0), o = G.sUmFUE(o, r), e[i] = o), o
    }, G(e, n)
}
var sleep = e => new Promise((n => setTimeout(n, e)));
console.log("ok");
var adev, set_, CurrentPlayingSymbol = "▶";

function getV(e, n) {
    var t = {
        sMzvS: function(e, n) {
            return e(n)
        },
        tQlMS: function(e, n, t) {
            return e(n, t)
        }
    };
    return t.sMzvS(GM_getValue, e) || (t.tQlMS(GM_setValue, e, n), n)
}

function setV(e, n) {
    ! function(e, n, t) {
        e(n, t)
    }(GM_setValue, e, n)
}
async function getFinalUrlFromServer(e) {
    var n = {
        qcFsF: function(e, n) {
            return e(n)
        },
        XpXRt: "COACx",
        elLOw: "http://localhost:3000/get-final-url",
        pwjxm: "POST",
        JkfFM: "application/json",
        oxUex: "Failed to fetch final URL",
        cLBLv: "Error:"
    };
    try {
        if ("COACx" === n.XpXRt) {
            const t = await fetch(n.elLOw, {
                method: n.pwjxm,
                headers: {
                    "Content-Type": n.JkfFM
                },
                body: JSON.stringify({
                    url: e
                })
            });
            if (!t.ok) throw new Error(n.oxUex);
            return (await t.json()).finalUrl
        }
        n.qcFsF(N, z)
    } catch (e) {
        return console.error(n.cLBLv, e), null
    }
}

function getCurrentVideoID() {
    var e, n = {
        XqRcc: "ytp-video-menu-item ytp-button",
        euLKY: "Opening",
        YhZrF: "ytp-playlist-menu-button ytp-button",
        qAjZv: function(e) {
            return e()
        },
        nGwiA: "Closiung",
        koGtK: "Not Found!"
    };
    return [...document.getElementsByClassName(n.XqRcc)].forEach(((n, t) => {
        n.innerText.startsWith(CurrentPlayingSymbol) && (e = new URL(n.href).searchParams.get("v"))
    })), !e && document.getElementsByClassName("ytp-playlist-menu-button ytp-button")[0] ? (console.log(n.euLKY), document.getElementsByClassName(n.YhZrF)[0].click(), n.qAjZv(getCurrentVideoID)) : e ? (console.log(n.nGwiA), document.getElementsByClassName("ytp-playlist-menu-button ytp-button")[0].click(), e) : console.warn(n.koGtK)
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
        bpNQI: "btn-submit",
        hMvyM: "no there",
        EJriT: function(e, n) {
            return e !== n
        },
        vBMvp: "wQVQr",
        MmMQA: "#app > div.playControls.g-z-index-control-bar.m-visible > section > div > div.playControls__elements > div.playControls__soundBadge.sc-ml-3x > div"
    };
    try {
        if (e.EJriT(e.vBMvp, e.vBMvp)) throw Y.getElementById(e.bpNQI).click(), e.hMvyM;
        return findhref2(document.querySelector(e.MmMQA))[0].href
    } catch {
        return
    }
}, async function() {
    var e = {
        mQuhX: function(e, n) {
            return e(n)
        },
        nwxvL: function(e, n) {
            return e(n)
        },
        krqVn: function(e, n) {
            return e != n
        },
        iCRXa: "undefined",
        OVoov: function(e, n) {
            return e(n)
        },
        oMMNc: function(e) {
            return e()
        },
        qTNEZ: function(e, n, t, r, o, i) {
            return e(n, t, r, o, i)
        },
        vwLeV: function(e, n) {
            return e === n
        },
        BzNsh: "IfUXS",
        ybdjq: "PIDZp",
        pYdJq: "button",
        TZZwu: "embedMP3",
        GidvU: "innerText",
        Uftcw: "MP3",
        ujRLV: "fixed",
        OWZRL: "50%",
        VUrEr: "80%",
        CEYsU: "Appended",
        vcQHV: ".ytp-right-controls",
        teTmi: "#right-controls",
        BalBy: function(e, n) {
            return e == n
        },
        hGPck: "path",
        jiJwn: function(e, n, t) {
            return e(n, t)
        },
        EpJme: "Mute",
        KinJN: "title",
        rheRo: function(e, n, t) {
            return e(n, t)
        },
        DEiIB: "Unmute",
        QlmKK: function(e, n, t) {
            return e(n, t)
        },
        pUxRa: "TimeOut for",
        AUBqK: function(e, n) {
            return e !== n
        },
        YCaps: "YUxcx",
        bjgLN: "fOdGI",
        NFzKg: function(e, n) {
            return e(n)
        },
        aJRqG: function(e, n) {
            return e !== n
        },
        fmcau: "piXNF",
        WrsAj: "GetAudio",
        TEvdo: "Download MP3",
        nTzzk: "click",
        nhZqE: function(e, n) {
            return e !== n
        },
        pAoqI: "XLgzU",
        QxFCn: "Zigah",
        DlMYd: function(e, n, t) {
            return e(n, t)
        },
        GmOEY: ".playbackSoundBadge__actions",
        rdWLm: function(e, n) {
            return e(n)
        },
        KZesU: "/embed/",
        symnK: "NpysK",
        EPuGi: "Attaching to embeder >:]"
    };
    async function n(n, t = 3e4) {
        var r;
        for (e.mQuhX(sleep, t).then((e => r = !0)); !document.querySelector(n) && (await e.nwxvL(sleep, 0), !r););
        return document.querySelector(n)
    }
    if (location.href.includes(e.KZesU)) {
        if (e.vwLeV(e.symnK, "NpysK")) return console.log(e.EPuGi), e.rdWLm(n, e.vcQHV).then((async n => {
            var t, r = {
                QLBNK: function(n) {
                    return e.oMMNc(n)
                },
                zLROx: function(n, t, r, o, i, c) {
                    return e.qTNEZ(n, t, r, o, i, c)
                }
            };
            if (e.vwLeV(e.BzNsh, e.ybdjq)) try {
                let r = e.krqVn(typeof g, e.iCRXa) ? O : D.querySelectorAll;
                return H ? [...n.querySelectorAll(M)].filter((e => !(null === r.offsetParent)))[0] : (t = r(Z) ? r(F).length ? e.mQuhX(r, X)[0] : e.OVoov(r, h) : null, r.keys(t).length ? t : null)
            } catch {} else {
                let t = new _e(e.pYdJq, {
                    id: e.TZZwu
                }).appendTo(n).set(e.GidvU, e.Uftcw).on("click", (function() {
                    let e = r.QLBNK(getCurrentVideoID) || setElement(location.href);
                    r.zLROx(downloadT, e, !1, !0, !1, !0)
                })).style({
                    position: e.ujRLV,
                    right: e.OWZRL,
                    top: e.VUrEr
                });
                for (; !document.getElementById(e.TZZwu) && document.querySelector(".ytp-right-controls");) console.log(e.CEYsU), t.appendTo(e.vcQHV)
            }
        }));
        (e.OVoov(t, e.teTmi) && e.BalBy(I("#right-controls").querySelectorAll(e.hGPck)[0].getAttribute("d"), S) && e.jiJwn(p, e.EpJme, e.KinJN)[0] || e.rheRo(J, e.DEiIB, "title") || e.QlmKK(k, "Unmute (m)", e.KinJN)).click()
    }
    return document.querySelector(".ytp-right-controls"), await n(e.GmOEY, 5e3).then((async t => {
        var r = {
            geZpd: function(n, t) {
                return e.AUBqK(n, t)
            },
            prukM: e.bjgLN,
            WpEGi: function(n, t, r) {
                return e.QlmKK(n, t, r)
            },
            WpShW: function(n, t) {
                return e.NFzKg(n, t)
            },
            NqIUp: function(n, t) {
                return e.NFzKg(n, t)
            },
            DkpRK: "ehlq8k34"
        };
        if (e.aJRqG(e.fmcau, e.fmcau)) N.value = t;
        else {
            let o = new _e(e.pYdJq, {
                id: e.WrsAj
            }).appendTo(t).set(e.GidvU, e.TEvdo).on(e.nTzzk, (function() {
                var n = {
                    qDmXl: e.pUxRa
                };
                e.AUBqK(e.YCaps, "ybCDk") ? downloadSC() : (t.log(n.qDmXl, r), x = !0)
            }), (e => e));
            for (;;) !document.getElementById(e.WrsAj) && await n(".playbackSoundBadge__actions", 5e3) && (e.nhZqE(e.pAoqI, e.QxFCn) ? await e.DlMYd(n, e.GmOEY, 5e3).then((e => {
                r.geZpd(r.prukM, r.prukM) ? n = !0 : (o.appendTo(e), console.log("Added Button"))
            })) : r.WpEGi(x, !0, r.WpShW(o, r.NqIUp(I, r.DkpRK) ? r.NqIUp(S, r.DkpRK).innerText : p.href))), await e.rdWLm(sleep, 0)
        }
    }))
}().then(console.log, console.warn), downloadSC = function() {
    var e = {
        eutBE: function(e, n, t) {
            return e(n, t)
        },
        bPmYr: "SCinfo",
        bDbSb: function(e) {
            return e()
        },
        KFEJZ: function(e, n, t) {
            return e(n, t)
        },
        XSIpg: function(e, n) {
            return e(n)
        },
        wJVaG: "https://sclouddownloader.net/"
    };
    e.eutBE(GM_setValue, e.bPmYr, null), e.eutBE(GM_setValue, "sc", e.bDbSb(getSoundCloudUrl)), set_ || (set_ = 1, e.KFEJZ(GM_addValueChangeListener, e.bPmYr, (function(e, n, t, r) {
        console.log({
            a: e,
            b: n,
            c: t,
            d: r
        }), t && t.name && _downloadFileAsTitle(t.href, t.name)
    }))), e.XSIpg(open, e.wJVaG)
}, GM_setValue_ = GM_setValue, GM_getValue_ = GM_getValue, GM_info_ = GM_info;
var UnmutePath = "M3.15,3.85l4.17,4.17L6.16,9H3v6h3.16L12,19.93v-7.22l2.45,2.45c-0.15,0.07-0.3,0.13-0.45,0.18v1.04 c0.43-0.1,0.83-0.27,1.2-0.48l1.81,1.81c-0.88,0.62-1.9,1.04-3.01,1.2v1.01c1.39-0.17,2.66-0.71,3.73-1.49l2.42,2.42l0.71-0.71 l-17-17L3.15,3.85z M11,11.71v6.07L6.52,14H4v-4h2.52l1.5-1.27L11,11.71z M10.33,6.79L9.62,6.08L12,4.07v4.39l-1-1V6.22L10.33,6.79 z M14,8.66V7.62c2,0.46,3.5,2.24,3.5,4.38c0,0.58-0.13,1.13-0.33,1.64l-0.79-0.79c0.07-0.27,0.12-0.55,0.12-0.85 C16.5,10.42,15.44,9.1,14,8.66z M14,5.08V4.07c3.95,0.49,7,3.85,7,7.93c0,1.56-0.46,3.01-1.23,4.24l-0.73-0.73 C19.65,14.48,20,13.28,20,12C20,8.48,17.39,5.57,14,5.08z",
    mutePath = "M17.5,12c0,2.14-1.5,3.92-3.5,4.38v-1.04c1.44-0.43,2.5-1.76,2.5-3.34c0-1.58-1.06-2.9-2.5-3.34V7.62 C16,8.08,17.5,9.86,17.5,12z M12,4.07v15.86L6.16,15H3V9h3.16L12,4.07z M11,6.22L6.52,10H4v4h2.52L11,17.78V6.22z M21,12 c0,4.08-3.05,7.44-7,7.93v-1.01c3.39-0.49,6-3.4,6-6.92s-2.61-6.43-6-6.92V4.07C17.95,4.56,21,7.92,21,12z";

function downloadFile_(e, n) {
    const t = document.createElement("a");
    t.href = e, t.download = n, document.body.appendChild(t), t.click(), document.body.removeChild(t)
}
_downloadFileAsTitle = async function(e, n, t, r) {
    var o = {
        cKSwh: "_blank",
        JWfzh: function(e, n) {
            return e || n
        },
        zhyzS: "function",
        EENgx: function(e) {
            return e()
        },
        VeJcN: "#VGHGFf > div > div.Eddif > div:nth-child(2) > button > div.VfPpkd-RLmnJb",
        lBldb: function(e, n) {
            return e === n
        },
        WqLHV: "WZyUq",
        rRgve: "Error downloading file:",
        jfQqP: function(e, n) {
            return e(n)
        }
    };
    const i = document.createElement("a");
    return i.style.display = "none", document.body.appendChild(i), o.jfQqP(fetch, e).then((e => e.blob())).then((c => {
        const u = URL.createObjectURL(c);
        i.href = u, i.download = n, i.target = o.cKSwh, i.click(), URL.revokeObjectURL(u), (o.JWfzh(t, opener) || window).postMessage({
            url: e,
            title: n,
            s: !0
        }, "*"), (typeof r).includes(o.zhyzS) && o.EENgx(r)
    })).catch((r => {
        var i = {
            jPZry: o.VeJcN
        };
        o.lBldb("lqNwv", o.WqLHV) ? n.querySelector(i.jPZry).click() : (console.error(o.rRgve, r), (o.JWfzh(t, opener) || window).postMessage({
            url: e,
            title: n,
            s: !1
        }, "*"))
    }))
}, _downloadFile_ = downloadFile_;
const query = function(e, n) {
    var t = {
        QYHck: function(e, n) {
            return e === n
        },
        givsW: "function",
        ikpKN: function(e, n) {
            return e instanceof n
        },
        QhLfe: function(e, n) {
            return e / n
        },
        jHVQx: function(e, n) {
            return e >= n
        },
        tjiEu: function(e, n) {
            return e <= n
        },
        TajSe: function(e, n) {
            return e + n
        },
        JrdLH: "pVCYL",
        YJyLB: "oGEIF",
        QdzxV: function(e, n) {
            return e != n
        },
        GAQwX: "undefined",
        ZWQVt: function(e, n) {
            return e(n)
        },
        qLYfp: function(e, n) {
            return e(n)
        },
        oAtbw: function(e, n) {
            return e(n)
        }
    };
    try {
        if (t.JrdLH === t.YJyLB) {
            t.QYHck(typeof L, t.givsW) && t.ikpKN(m, f) && (j = Z[0]);
            var r = l.getBoundingClientRect();
            return r.top >= 0 - t.QhLfe(B.innerHeight || v.documentElement.clientHeight, 2) && t.jHVQx(r.left, 0) && t.tjiEu(r.bottom, t.TajSe(E.innerHeight || b.documentElement.clientHeight, (g.innerHeight || O.documentElement.clientHeight) / 2)) && r.right <= (D.innerWidth || H.documentElement.clientWidth)
        } {
            let r = t.QdzxV(typeof $, t.GAQwX) ? $ : document.querySelectorAll;
            return n ? [...document.querySelectorAll(e)].filter((e => !(null === el.offsetParent)))[0] : (e => Object.keys(e).length ? e : null)(t.ZWQVt(r, e) ? t.qLYfp(r, e).length ? t.oAtbw(r, e)[0] : t.oAtbw(r, e) : null)
        }
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
getElementByAttribute = function(e, t = "aria-label", i = document.body) {
        var c = {
                YbYJh: function(e, n) {
                    return e(n)
                },
                TqdGp: function(e, n, t) {
                    return e(n, t)
                },
                YrJiV: function(e, n) {
                    return e + n
                },
                AbPlG: ".mp4",
                XpQpU: function(e, n) {
                    return e !== n
                },
                ESESZ: "CmfUg",
                LLoUO: "was created",
                WsmHi: "was clicked",
                Xgafn: "Caught",
                rWwYb: "vSOYM",
                ARZUA: "AgvDP",
                rRnXV: function(e, n) {
                    return e == n
                },
                DpKiq: "FVbBR",
                wzqBn: function(e, n) {
                    return e === n
                },
                AjBqB: function(e, n) {
                    return e == n
                }
            },
            u = [];
        return function i(s) {
            var f = {
                qVEmA: function(e, n, t) {
                    return e(n, t)
                },
                zPDyr: c.WsmHi,
                CDzQl: c.Xgafn
            };
            if (c.XpQpU(c.rWwYb, c.ARZUA))
                if (c.rRnXV(s.getAttribute(t), e)) "FVbBR" === c.DpKiq ? u.push(s) : f.qVEmA(c, (e => e.href)((e => (e.host = "clipr.xyz", e))(new u(i.href))), "720");
                else {
                    if (!c.wzqBn("HPKnu", "HPKnu")) {
                        let e = e.call(k, n, a);
                        return e._click = e.click, e.click = function() {
                            if (e.log(e, f.zPDyr, e.tagName), "A" == e.tagName) {
                                O.log(f.CDzQl, e);
                                let n = e.download,
                                    t = e.href;
                                D = {
                                    id: new H(j.href).searchParams.get("v"),
                                    href: t,
                                    title: n
                                }
                            } else e._click.apply(e)
                        }, l.log(e, c.LLoUO, e.tagName), e
                    }
                    s.children.length && ((s = s.children).forEach = [].forEach, s.forEach((e => {
                        var n = {
                            BhDRl: function(e, n) {
                                return c.YbYJh(e, n)
                            },
                            LPfkY: function(e, n, t) {
                                return c.TqdGp(e, n, t)
                            },
                            FJFDt: function(e, n) {
                                return c.YrJiV(e, n)
                            },
                            lCMUx: c.AbPlG,
                            BvWUQ: function(e, n, t) {
                                return c.TqdGp(e, n, t)
                            },
                            xhkxp: "instaURL"
                        };
                        c.XpQpU(c.ESESZ, c.ESESZ) ? a && (D.log("Got", {
                            a: H,
                            b: j,
                            c: Z,
                            d: F
                        }), X.close(), n.BhDRl(h, s), n.LPfkY(M, o, n.FJFDt(r.title, n.lCMUx)), n.BvWUQ(q, n.xhkxp, null)) : i(e)
                    })))
                } else c.element.querySelector(u).innerText = i
        }(i), c.AjBqB(u.length, 1) ? u[0] : u || !1
    }, get_aria_label = function(e, n = document.body) {
        var t = {
                bPnEZ: function(e, n) {
                    return e == n
                },
                BPKaf: "aria-label"
            },
            r = [];
        return function n(o) {
            var i = {
                XSKAk: function(e, n) {
                    return e(n)
                }
            };
            t.bPnEZ(o.getAttribute(t.BPKaf), e) ? r.push(o) : o.children.length && ((o = o.children).forEach = [].forEach, o.forEach((e => {
                i.XSKAk(n, e)
            })))
        }(n), r[0] || !1
    }, getClass = function(e) {
        return document.getElementsByClassName("ehlq8k34")[0]
    },
    function() {
        var e = {
            mVrOy: "Added Button",
            SVgdm: function(e, n) {
                return e !== n
            },
            ASfRu: "RkXOH",
            edOsc: "HTML",
            uQMoz: function(e, n) {
                return e < n
            },
            xfgpg: function(e, n) {
                return e === n
            },
            ACSTq: "Win closed",
            gYiDT: "Nitir",
            AjExi: "Appending:",
            rHDPr: function(e, n) {
                return e == n
            },
            KHUQO: function(e, n) {
                return e(n)
            },
            sfszn: "jnIwM",
            MqvJP: function(e, n) {
                return e !== n
            },
            IMMWr: "UuSSt",
            tBjCe: "LLEsX",
            fSWaL: "PSwdB",
            qTYrr: "length",
            BvyhP: function(e, n) {
                return e == n
            },
            IznvV: "shorts/",
            jflxQ: "watch?v=",
            uUSzJ: "#MediaButton",
            lExoY: function(e) {
                return e()
            },
            nwDEs: "undefined",
            rHaVz: function(e, n) {
                return e === n
            },
            QBKpR: "UvDVj",
            AUIgk: "fCyVt",
            mefHu: "#app > div.css-14dcx2q-DivBodyContainer.e1irlpdw0 > div:nth-child(4) > div > div.css-1qjw4dg-DivContentContainer.e1mecfx00 > div.css-1stfops-DivCommentContainer.ekjxngi0 > div > div.css-1xlna7p-DivProfileWrapper.ekjxngi4 > div.css-1u3jkat-DivDescriptionContentWrapper.e1mecfx011 > div.css-1nst91u-DivMainContent.e1mecfx01 > div.css-bs495z-DivWrapper.e1mzilcj0 > div > div.css-1d7krfw-DivOverflowContainer.e1mzilcj5 > h1",
            fOGOh: "Replying to ",
            rzZVm: function(e, n) {
                return e === n
            },
            EApMQ: "YsQMB",
            ldtZS: "qcxPY",
            BZzzS: "mvpMU",
            whiHv: "#app > div.css-14dcx2q-DivBodyContainer.e1irlpdw0 > div:nth-child(4) > div > div.css-1qjw4dg-DivContentContainer.e1mecfx00 > div.css-1stfops-DivCommentContainer.ekjxngi0 > div > div.css-1xlna7p-DivProfileWrapper.ekjxngi4 > div.css-1u3jkat-DivDescriptionContentWrapper.e1mecfx011 > div.css-1nst91u-DivMainContent.e1mecfx01 > div.css-bs495z-DivWrapper.e1mzilcj0",
            EJImx: function(e, n, t) {
                return e(n, t)
            },
            AHOcS: "browse-video-desc",
            XBExl: "data-e2e",
            EYjio: function(e, n, t) {
                return e(n, t)
            },
            oWuTs: "#main-content-video_detail > div > div.css-12kupwv-DivContentContainer.ege8lhx2 > div.css-1senhbu-DivLeftContainer.ege8lhx3 > div.css-1sb4dwc-DivPlayerContainer.eqrezik4 > div.css-3lfoqn-DivDescriptionContentWrapper-StyledDetailContentWrapper.eqrezik15 > div.css-r4nwrj-DivVideoInfoContainer.eqrezik3 > div.css-bs495z-DivWrapper.e1mzilcj0 > div > h1",
            fgLJv: "video.x1lliihq",
            wGzeh: "rjRKp",
            BKtGK: "PIhQP",
            IEskl: "RWtcX",
            WlBpp: "Why this ad?",
            shFRg: function(e, n, t, r) {
                return e(n, t, r)
            },
            UPMxZ: function(e, n) {
                return e === n
            },
            pTcQA: function(e, n) {
                return e instanceof n
            },
            GNDsu: "FZGgh",
            jXRte: "uzwHl",
            FDfhr: function(e, n) {
                return e >= n
            },
            kgrcU: function(e, n) {
                return e - n
            },
            cCBir: function(e, n) {
                return e / n
            },
            CmJHF: function(e, n) {
                return e >= n
            },
            EDjYF: function(e, n) {
                return e <= n
            },
            ccGoR: function(e, n) {
                return e + n
            },
            DjJNR: "Caught",
            IFfIK: "was created",
            wAwYM: "INPUT",
            LqDfv: "KeyI",
            UHtXF: "Close player page",
            ivsHv: function(e, n) {
                return e(n)
            },
            pCbBI: "Added MiniPlayer Toggle with I",
            xZAVh: "keypress",
            sVoCo: "AMSEA",
            nMnuP: "cJdGN",
            onAdr: function(e, n) {
                return e(n)
            },
            srAhx: function(e, n) {
                return e === n
            },
            WDrJj: "HAcbW",
            RjZYj: "pCRVC",
            drAoA: "tPTqk",
            KzgpF: function(e, n) {
                return e(n)
            },
            cgdHu: "jMyyx",
            daWyU: "NgYQn",
            nHPRt: ".mp3",
            GCnRh: function(e, n) {
                return e || n
            },
            vxZjo: "CmSnu",
            OgYRX: function(e, n) {
                return e(n)
            },
            PQvfc: function(e, n) {
                return e !== n
            },
            AduFz: "RvVjn",
            mAZsX: "._acaz",
            DWEos: "Go back",
            quUoU: function(e, n) {
                return e(n)
            },
            Ylvjh: "._afxv",
            RGfLL: function(e, n) {
                return e(n)
            },
            iXscW: "Next",
            lncgf: "._afxw",
            lYntd: "anCaU",
            hqZgO: function(e, n) {
                return e === n
            },
            GllHO: "MofOU",
            DcgiN: "cAAkX",
            Hryio: "video/mp4",
            HBIWz: "none",
            JCkXw: ".mp4",
            UkJgH: function(e, n) {
                return e !== n
            },
            RkQTJ: "rOZTj",
            fZgXw: function(e, n) {
                return e * n
            },
            UiwRy: "Invalid video element or source.",
            ZGSpV: function(e, n) {
                return e(n)
            },
            knqcv: function(e) {
                return e()
            },
            zDImO: function(e, n) {
                return e || n
            },
            ccaKj: function(e, ...n) {
                return e(...n)
            },
            LNDZs: "cNxDN",
            gfMOl: "gZfkQ",
            HGiLj: function(e, n) {
                return e + n
            },
            QUMqJ: "instaURL",
            EDBbs: function(e, n) {
                return e !== n
            },
            TcGXy: "YhOUR",
            zRafM: "SDKiC",
            mIWjB: "reel",
            HZSoV: "MzQMa",
            cbkhU: "YUIFU",
            ZEhyn: "https://fastdl.app/en",
            nrOOf: function(e, n, t) {
                return e(n, t)
            },
            SBJfM: "alt",
            KIfWB: "isclosed",
            loVLb: function(e, n, t) {
                return e(n, t)
            },
            vhPCc: "GLAbs",
            afvgo: function(e) {
                return e()
            },
            GdHVr: "YWmty",
            ZWqbD: function(e) {
                return e()
            },
            hBQRJ: function(e) {
                return e()
            },
            GlbLh: "GeIIv",
            bTTDH: function(e, n) {
                return e(n)
            },
            qaaxV: function(e) {
                return e()
            },
            GKKfl: "vSzkz",
            aCJBY: "done",
            YcmMg: function(e) {
                return e()
            },
            xOXHC: function(e, n) {
                return e(n)
            },
            KoKRu: "input",
            TkAVQ: function(e, n) {
                return e !== n
            },
            nSvjK: "focus",
            MdgDg: "change",
            NZOkb: "#search-form-input",
            JyImx: "Cant find input",
            zVHXR: function(e, n, t) {
                return e(n, t)
            },
            XQPvD: ".search-form__button",
            ubHnc: ".button--filled",
            argcw: function(e, n) {
                return e === n
            },
            MhDsL: "pCMGa",
            pPJFK: function(e, n, t) {
                return e(n, t)
            },
            qFSzF: function(e) {
                return e()
            },
            jkzWv: "ikaAx",
            KCPET: "button",
            mgsjM: "innerText",
            WRZEw: "Get",
            dUPhR: function(e, n) {
                return e != n
            },
            OcazL: "dlbutton",
            jGfzE: function(e, n) {
                return e(n)
            },
            yKvUq: "src",
            QeTYn: "Fixed That Thing",
            xxNqL: "GgtZr",
            iVEZE: "Public",
            ZiLDU: "sFrEu",
            TSKrb: "DjNUY",
            mIWeF: "Change?",
            sdbyM: function(e, n, t) {
                return e(n, t)
            },
            kPEnX: "ECjBS",
            WxZmP: "QOPeB",
            rGozN: "0|1|2|4|3",
            bzLDa: "Appended buttons man",
            dhXNf: ".xh8yej3.x1iyjqo2",
            BSPAe: "MediaButton",
            RzCYw: "Get Images",
            YmpZv: "MediaButton2",
            ygVJA: "click",
            FolBl: "._aaqy",
            OhLDW: function(e, n) {
                return e(n)
            },
            Plqvv: function(e, n) {
                return e || n
            },
            suBoZ: "TimeOut for",
            jDOFs: function(e) {
                return e()
            },
            FZRHL: "TxOXE",
            gueZO: "tzRhN",
            xgZVA: "/download-sound-track",
            TFsph: "6|5|0|2|4|3|1|7",
            ycXxr: function(e, n) {
                return e(n)
            },
            rABFj: "SCinfo",
            YJmgc: function(e, n) {
                return e(n)
            },
            lclUo: function(e, n) {
                return e(n)
            },
            GZBDj: "#trackTitle",
            GioGp: function(e) {
                return e()
            },
            nxFbH: function(e, n) {
                return e(n)
            },
            YdfCy: "#submitBtn",
            xzXqE: "LUNdh",
            Kpklr: function(e, n, t) {
                return e(n, t)
            },
            WMJBI: function(e, n) {
                return e === n
            },
            EVzcH: "ZDUVJ",
            trRdx: function(e, n) {
                return e(n)
            },
            tfGMF: "EZ url",
            AwIys: "Got",
            CVFmv: ".ytp-volume-area > .ytp-mute-button",
            NWxjb: function(e, n, t) {
                return e(n, t)
            },
            lhHgb: "eOhkC",
            EDrTK: "shJIB",
            xaiyt: "ErwBA",
            jWDvX: "NotFound",
            tHSIh: function(e, n) {
                return e instanceof n
            },
            vijop: "Provided argument is not a DOM element.",
            TBAJd: "div",
            jNJsl: function(e, n) {
                return e(n)
            },
            brSPv: "Posted",
            NOwCU: function(e, n) {
                return e == n
            },
            drtuE: "https://sss.instasaverpro.com",
            AWLOP: "https://tubemp4.is",
            IDAPx: "Handled",
            oHxWz: "disabled",
            jtSpc: "vKYVn",
            KVMSH: function(e, n) {
                return e(n)
            },
            cWgfk: "aJBLG",
            LobjM: "#url",
            ABEmb: "after url",
            MnEKh: function(e, n) {
                return e(n)
            },
            LiOVt: "#progress",
            MDdny: "Error:",
            aZgNI: function(e, n) {
                return e !== n
            },
            PxAop: "NSTtK",
            kpphH: "No id Found",
            TRzjX: function(e) {
                return e()
            },
            wjgxH: "_blank",
            IbKhm: "function",
            awAPg: "YKPNL",
            DwtaV: function(e, n) {
                return e === n
            },
            qIeLs: function(e, n) {
                return e !== n
            },
            pfLJJ: "ndJts",
            JQpsC: function(e, n) {
                return e == n
            },
            nBJrx: function(e, n) {
                return e(n)
            },
            laNsH: "Open player page",
            JgDbe: "QFJjc",
            smvjT: "ZhvXu",
            HkgJT: "blur",
            sMHUh: "was clicked",
            nclov: function(e, n) {
                return e === n
            },
            rCxFl: "oPHbr",
            QfpnQ: "hsHfi",
            RfJFx: function(e, n) {
                return e(n)
            },
            EYqiY: "peubz",
            QawzO: "idfWp",
            EtmHQ: "vidbutton",
            ZyaZG: function(e, n) {
                return e(n)
            },
            uKqlw: "#downloadBtn",
            QrJAw: function(e, n) {
                return e < n
            },
            Qetrk: function(e, n) {
                return e != n
            },
            tOjUQ: "rBJuq",
            ndDxt: function(e, n, t) {
                return e(n, t)
            },
            fotTD: "btn-download",
            YbhbU: "upVQi",
            WieMf: "hlaSo",
            uUqrB: "gbDhI",
            NNOAx: function(e, n) {
                return e(n)
            },
            XEfRE: "oSfnC",
            QZOul: "Best Quality Video",
            tGbBv: function(e, n) {
                return e(n)
            },
            KPoNI: "5|0|4|1|3|2",
            ZocKc: function(e, n, t, r, o) {
                return e(n, t, r, o)
            },
            wVcXd: function(e, n, t) {
                return e(n, t)
            },
            eedAU: "unload",
            tWCEb: "download",
            OCioy: function(e, n) {
                return e !== n
            },
            rxVmJ: "prKrM",
            DfJQU: ".space-x-1",
            FitXg: function(e, n, t) {
                return e(n, t)
            },
            RHruF: "#s_input",
            ckFWI: "Converting",
            dPdqG: function(e) {
                return e()
            },
            mFcwk: function(e, n, t) {
                return e(n, t)
            },
            YqqrP: function(e, n) {
                return e(n)
            },
            QtDlG: "#formatSelect",
            CNxKn: function(e, n) {
                return e(n)
            },
            eWLvk: "#btn-action",
            jkWfg: "#asuccess",
            YUvQz: function(e, n) {
                return e(n)
            },
            oYDRd: "href",
            vTuJe: function(e, n) {
                return e(n)
            },
            mKfHI: function(e, n) {
                return e(n)
            },
            JXNIa: ".clearfix",
            zVnoz: function(e, n) {
                return e || n
            },
            ObOkz: function(e, n) {
                return e === n
            },
            dylgS: "uaAfz",
            kOuZq: function(e, n) {
                return e(n)
            },
            sFNWK: "Input was not Found",
            utmLF: "?!!",
            qsnJE: "no there",
            DzETI: "ZnDVs",
            TVTKW: "VqvsA",
            SanUu: function(e, n) {
                return e instanceof n
            },
            cwQUx: "480",
            KuHsz: function(e, n) {
                return e !== n
            },
            OlyhE: "dgZaW",
            RaxSx: "VOD",
            WXkfZ: "Unhandled Post",
            jkbys: "jALkY",
            WVWgq: "zYRWi",
            IgdXb: "using loader.to api",
            fUIVd: "xCpbk",
            VIhPJ: "360",
            SCGZN: function(e, n) {
                return e(n)
            },
            QKHxY: ".ScCoreButtonLabel-sc-s7h2b7-0",
            NpyZk: "1080P",
            QDTXu: "720P",
            qETIW: function(e, n) {
                return e(n)
            },
            GpCHF: "OWFMa",
            JXtRX: function(e, n, t) {
                return e(n, t)
            },
            VltNs: function(e, n) {
                return e(n)
            },
            EipSw: function(e, n, t) {
                return e(n, t)
            },
            VhBXy: "Mute",
            Tymmf: "title",
            hJYND: "Mute (m)",
            pZnvL: "pjtUy",
            BRCig: function(e, n) {
                return e instanceof n
            },
            toILY: function(e, n, t) {
                return e(n, t)
            },
            AYeQE: "DfBYq",
            WcfzH: function(e, n) {
                return e === n
            },
            XgVgV: "mhfUT",
            GpRCg: "dlmmD",
            nKLbb: function(e, n) {
                return e !== n
            },
            aXUSY: "hpMlC",
            UOCfo: "collapse-frame",
            AMJuv: function(e, n) {
                return e(n)
            },
            YTUhM: "1080",
            ZXimN: "360P",
            GuwFh: function(e, n, t) {
                return e(n, t)
            },
            KnTry: function(e, n) {
                return e !== n
            },
            SufBb: function(e, n, t) {
                return e(n, t)
            },
            KqgZz: function(e, n) {
                return e != n
            },
            zmHRs: "complete",
            yLelD: ".flex.items-center.space-x-4",
            dBlFq: function(e, n) {
                return e === n
            },
            VIifd: "hDTKm",
            AKzxQ: function(e) {
                return e()
            },
            YMETH: "Loaded",
            txiiR: "body > div.relative.overflow-hidden > main > div > div.px-4.mx-auto.max-w-7xl.sm\\:px-6.lg\\:px-8 > div.mb-6.space-y-3.lg\\:flex.lg\\:items-center.lg\\:justify-between.lg\\:space-y-0 > div.lg\\:flex.lg\\:items-center > p > span:nth-child(1)",
            oNlph: function(e, n) {
                return e(n)
            },
            FITUK: function(e) {
                return e()
            },
            ekKJo: "#app > div.playControls.g-z-index-control-bar.m-visible > section > div > div.playControls__elements > div.playControls__soundBadge.sc-ml-3x > div",
            pbwVF: "oGuth",
            ypeoi: function(e, n) {
                return e > n
            },
            ONBfY: "tQuft",
            VMeKr: function(e, n) {
                return e !== n
            },
            mbBfG: "gizeu",
            kMdwz: function(e, n) {
                return e(n)
            },
            VIeAN: "clicked",
            fBNBy: function(e, n, t) {
                return e(n, t)
            },
            ixyTt: "buttons are gone?!?!",
            QGjRO: "NBxPs",
            xCJWn: function(e, n) {
                return e === n
            },
            UxYXb: function(e, n) {
                return e || n
            },
            mrDad: function(e) {
                return e()
            },
            YOYJK: "#convert",
            uYYfU: function(e, n) {
                return e(n)
            },
            akEMu: ".process-button",
            cbhln: ".download-button",
            ghqbz: function(e, n) {
                return e == n
            },
            XBKvp: "loaded",
            jXbxI: function(e, n) {
                return e(n)
            },
            pSSQQ: "#download-720-MP4",
            uBMWg: function(e, n) {
                return e(n)
            },
            QieMt: function(e, n) {
                return e(n)
            },
            ZXSTc: function(e, n) {
                return e(n)
            },
            tUccU: function(e, n) {
                return e(n)
            },
            zngxl: "ivQuk",
            ArQLU: "rarAf",
            ryIiu: "music",
            KjjtD: function(e, n) {
                return e === n
            },
            bnHZV: "rHEKk",
            vGQFS: "zujvY",
            ntIku: "These button dont work on youtube music yet",
            pAInJ: "ytd-playlist-panel-renderer",
            Sfhcc: "span",
            OEsrV: function(e, n) {
                return e == n
            },
            IfpPL: function(e, n) {
                return e + n
            },
            QVXJj: "Get MP3",
            kQlbJ: function(e, n) {
                return e !== n
            },
            ZpuFU: "PiMzK",
            iYJkd: "aMoYC",
            edDon: "Getting video",
            RRtbb: function(e, n) {
                return e + n
            },
            OApED: "y2mate.nu",
            zSLLd: "?v=",
            eEcet: "&s=",
            zEExw: "/shorts/",
            ljbLe: "&mp4=",
            gKvfH: "mp3",
            YOekn: "&useT=",
            zPDGs: "iframe",
            HkKiu: "lazy",
            ARMqj: "no-referrer",
            NgZuN: "allow-same-origin allow-scripts allow-popups allow-forms",
            zOckN: "autoplay; fullscreen; geolocation; microphone; camera",
            WEMrZ: "absolute",
            BZuqf: "WnOqR",
            kHbub: function(e, n) {
                return e + n
            },
            FeMzu: "mp4",
            ZQFOU: function(e, n) {
                return e(n)
            },
            ddIuQ: function(e, n) {
                return e || n
            },
            pwehV: function(e, n) {
                return e + n
            },
            BgZjF: "https://y2mate.nu/",
            RUAlu: "0HzX",
            WjzRp: function(e, n, t, r) {
                return e(n, t, r)
            },
            IVzvx: function(e, n, t, r) {
                return e(n, t, r)
            },
            VyfHw: "Searching",
            zZQoN: "Error downloading file:",
            mJbtU: function(e, n) {
                return e === n
            },
            YjPWn: "ZFDUd",
            mmWvK: function(e, n) {
                return e + n
            },
            XpoTv: "ehlq8k34",
            JHmak: "QtMJv",
            TuYdh: "https://savetik.co",
            oUxbY: "gQAZK",
            PSOwA: "slipr",
            gNJIx: " - ",
            vEGYd: "pLKBL",
            MRRib: "jKjSs",
            cswQd: "LekoA",
            YxWDS: function(e) {
                return e()
            },
            EUSxz: function(e, n) {
                return e(n)
            },
            RaRtq: function(e, n) {
                return e == n
            },
            OxHIv: "yAMTN",
            CebEe: function(e, n) {
                return e == n
            },
            shRrS: function(e, n) {
                return e || n
            },
            fKDlh: function(e, n, t) {
                return e(n, t)
            },
            wLSSp: "GltcW",
            DfyXY: "jnQJt",
            CBfDx: "cCrBU",
            beduz: "hulvT",
            iAlwR: function(e, n) {
                return e || n
            },
            ARrpp: function(e) {
                return e()
            },
            HztCV: function(e, n, t) {
                return e(n, t)
            },
            JqGDZ: function(e, n) {
                return e(n)
            },
            pYnyK: "#right-controls",
            ldSqQ: "path",
            tPWRQ: function(e, n, t) {
                return e(n, t)
            },
            pMoKh: function(e, n, t) {
                return e(n, t)
            },
            pFXcS: function(e, n, t) {
                return e(n, t)
            },
            wwqCt: "browse-copy",
            NOcCa: function(e, n) {
                return e !== n
            },
            UVJVC: "XuVFy",
            KqoAQ: "fPBBa",
            rOTiW: function(e, n) {
                return e === n
            },
            HbgJq: "cNuZg",
            jQtcL: function(e, n) {
                return e === n
            },
            eGZET: "WxGAK",
            WjChG: function(e, n) {
                return e(n)
            },
            BFAjG: function(e, n) {
                return e(n)
            },
            SpDSf: function(e, n) {
                return e !== n
            },
            xWSLl: "TcAzr",
            nYQbE: "HwSkt",
            vrHhH: function(e, n) {
                return e === n
            },
            IliGp: "FaNzg",
            EAoXW: function(e, n, t, r, o) {
                return e(n, t, r, o)
            },
            wFXed: function(e, n) {
                return e(n)
            },
            YmUil: function(e, n) {
                return e(n)
            },
            rvlMk: function(e, n) {
                return e < n
            },
            XohHI: function(e, n) {
                return e + n
            },
            WuEvQ: function(e, n) {
                return e + n
            },
            dJtBd: "win",
            YtUbe: function(e, n, t, r, o, i) {
                return e(n, t, r, o, i)
            },
            uhMaD: ".cell-body.tablecell-visibility.style-scope.ytcp-video-row",
            vQnzj: function(e, n) {
                return e !== n
            },
            HLpkD: "MwwyG",
            iwzgO: function(e, n) {
                return e !== n
            },
            JCRNm: "FVgIC",
            swqQE: function(e, n, t, r) {
                return e(n, t, r)
            },
            Qmncb: function(e, n, t) {
                return e(n, t)
            },
            LqMXX: function(e, n) {
                return e(n)
            },
            YzZns: function(e, n) {
                return e(n)
            },
            WUhvb: function(e, n) {
                return e === n
            },
            viAzk: "MWLqU",
            tFHzT: function(e, n) {
                return e(n)
            },
            QfXgs: function(e, n) {
                return e(n)
            },
            dtXqw: "#end",
            ANtoF: "#right-content",
            FcHiv: function(e) {
                return e()
            },
            mojLv: "oWURG",
            OUoux: "FDJHE",
            GGVxo: "Added playlist buttons",
            cxJlf: function(e, n, t) {
                return e(n, t)
            },
            LjJyO: function(e, n) {
                return e != n
            },
            ZLHaV: "#header-description",
            PFnXD: ".autoplay",
            BqofB: function(e, n) {
                return e + n
            },
            MYFgP: "expyI",
            vElLD: "MOdJA",
            iLKuK: function(e) {
                return e()
            },
            WWeDR: function(e, n, t) {
                return e(n, t)
            },
            cmpyS: "Cant Append",
            uisgJ: "nTYwy",
            AsFBc: "e13wiwn60",
            BbEsO: "Posted Buttons",
            Vklnv: "PxONT",
            npmOD: "load",
            yqEqC: function(e, n) {
                return e > n
            },
            UwELa: "Title: ",
            GVPkr: function(e, n) {
                return e > n
            },
            Xrhwm: "error-text",
            fRSEw: "dMiPp",
            bCIyg: "VASFr",
            jvSzJ: function(e, n) {
                return e(n)
            },
            hRlYL: "YRVkM",
            EaDys: "NyWor",
            nWXQT: "search_txt",
            yqeAi: function(e, n) {
                return e(n)
            },
            MAshv: function(e, n, t, r, o, i, c) {
                return e(n, t, r, o, i, c)
            },
            gUqRW: "Azbxr",
            jVCwB: "1|3|2|0|4",
            QbTKb: function(e, n) {
                return e || n
            },
            Zstkz: function(e, n) {
                return e(n)
            },
            KhEuF: function(e) {
                return e()
            },
            WaHLB: function(e, n) {
                return e != n
            },
            aNTYR: function(e, n) {
                return e === n
            },
            nwRJf: "cnJJe",
            cqamk: function(e, n) {
                return e(n)
            },
            aZLXD: "No info Preset",
            WEQyq: function(e, n) {
                return e == n
            },
            qHNkL: function(e, n) {
                return e(n)
            },
            cIbkN: "#txt-url",
            aVUPS: "Input Loaded",
            ksApE: "#btn-submit",
            dNMvK: "GEtting res",
            NmrRO: function(e, n) {
                return e(n)
            },
            gixbI: "#video_title",
            odYEn: "Got Res",
            XXPrM: "#result",
            zekpy: "#video-list",
            VoewD: "ekWzP",
            oweBe: "TEVmP",
            IklvS: function(e, n) {
                return e(n)
            },
            efYPR: "#A_downloadUrl",
            sungu: function(e, n) {
                return e(n)
            },
            asCor: "#myModalLabel",
            WTSoV: "#cardApiIframe",
            gaqmB: "iFrameResize function not available",
            YkGeY: "texturl",
            gMkid: "convert1",
            fWUqT: "Searched",
            bELNM: "this",
            QxNUA: "2|0|5|1|3|4",
            Cwxqs: function(e, n) {
                return e == n
            },
            EvdVa: "form-app-root",
            IuxWC: function(e, n) {
                return e(n)
            },
            XqOtN: function(e, n) {
                return e(n)
            },
            ApUkP: function(e, n) {
                return e(n)
            },
            QvSKQ: "#VGHGFf > div > div.Eddif > div:nth-child(2) > button > div.VfPpkd-RLmnJb",
            zvxbZ: "#yDmH0d > c-wiz > div > div > div:nth-child(2) > div.LLEp8b > div > div.rTq3hb > div:nth-child(1) > div > div.ofmULb > div:nth-child(2) > div > button",
            etYmz: function(e) {
                return e()
            },
            diKhy: "avNsl",
            RtPpf: function(e, n) {
                return e == n
            },
            ooJhs: function(e, n) {
                return e !== n
            },
            eVYxL: "gOwJu",
            cNoqo: "Wait...",
            JLahG: function(e, n, t, r, o, i) {
                return e(n, t, r, o, i)
            },
            LyQXE: function(e, n) {
                return e(n)
            },
            bpUYG: "oQoAn",
            WxxjF: function(e, n) {
                return e(n)
            },
            jCmaN: "RBulZ",
            HXihp: "clearfix",
            geobo: function(e, n) {
                return e === n
            },
            FdaMg: "OGAbd",
            hBzyR: "TEXTAREA",
            FFtlT: function(e, n) {
                return e == n
            },
            SeGZg: function(e, n) {
                return e(n)
            },
            QPcaV: function(e, n) {
                return e(n)
            },
            RfZxf: function(e, n, t) {
                return e(n, t)
            },
            uiQOM: function(e, n) {
                return e(n)
            },
            ZSkNQ: "https://sclouddownloader.net/",
            NRJyo: "QyZaH",
            peNKG: function(e, n) {
                return e === n
            },
            eBoGy: function(e, n) {
                return e(n)
            },
            vskSs: "video",
            xmpFB: "#video-companion-root",
            SItUS: "#secondary-inner",
            enCdj: "#secondary.ytd-watch-flexy",
            JVpYd: "https://loader.to/api/card2/?url=",
            HUhkU: function(e, n) {
                return e(n)
            },
            stltL: "Added That Thing",
            hNUwA: function(e, n) {
                return e(n)
            },
            fCwXK: "yt-button-view-model#dismiss-button",
            IWBNF: function(e, n) {
                return e(n)
            },
            yapIs: "tdCtV",
            YMvnX: "KDffm",
            gYxPR: "ytp-ad-button-icon",
            bUHsT: function(e, n) {
                return e && n
            },
            zLuFR: "Muted ad",
            BlDnS: "Unmuted video",
            uGhGJ: "Failed unmuting",
            PNyxS: "#song-video",
            dCUDK: function(e, n) {
                return e != n
            },
            GOFHQ: "Skipping ad :>",
            lHuvu: "ytp-ad-overlay-close-button",
            xcenL: ".yt-spec-button-shape-next",
            CEYVJ: "watch",
            uUlUn: "https://onlymp3.app",
            HHZZQ: "/watch?=",
            cZSBc: function(e, n) {
                return e == n
            },
            HcRdO: "fastdl.app",
            lYjhi: function(e, n) {
                return e == n
            },
            jYncz: "soundcloud.com",
            kBYcQ: "studio.youtube.com",
            ruPww: "www.instagram.com",
            dfNZO: "Insta ballz",
            FCcVV: "Gguzi",
            yPuBG: function(e, n) {
                return e !== n
            },
            wzeoy: "WRBui",
            sfoBw: "NjLXw",
            dBmRF: function(e, n) {
                return e(n)
            },
            hAPRE: function(e, n) {
                return e == n
            },
            VEoVg: "useT",
            yHFoB: function(e, n) {
                return e + n
            },
            icdyQ: "LZmTT",
            RDEXL: "snapsave.io",
            gCHDK: function(e, n) {
                return e === n
            },
            rTtOj: "wFUAm",
            fjUGT: function(e, n) {
                return e == n
            },
            qMTdZ: "clips.twitch.tv",
            SQlmo: function(e, n) {
                return e == n
            },
            ipktl: "clip",
            ZeNEF: function(e, n) {
                return e == n
            },
            JRUdV: function(e, n) {
                return e(n)
            },
            aSWeh: "Get MP4",
            TDwkY: "PlayList MP3",
            TKptI: "PlayList MP4",
            aSTjT: "blue",
            sLwUt: "bruh",
            XPDWY: "youtube",
            GYVXI: "tiktok",
            jAWHE: "onlymp3.to",
            WihxW: function(e, n) {
                return e !== n
            },
            LURcV: "LstCM",
            eJYxt: "Getting MP3",
            cTsts: "Getting MP4",
            XBUEn: function(e, n, t) {
                return e(n, t)
            },
            wGNQG: "yt5s.biz",
            KTKLx: function(e, n) {
                return e !== n
            },
            DXQtJ: "qJKAu",
            gYqJp: "sss.instasaverpro.com",
            yqkUV: "MevfH",
            TrMHI: function(e, n) {
                return e === n
            },
            FIdeE: "DQudG",
            TLKpr: "NO info Preset",
            VTxJD: function(e, n) {
                return e == n
            },
            Drxii: function(e, n, t) {
                return e(n, t)
            },
            gBPKe: "savetik.co",
            lvFvn: function(e, n) {
                return e !== n
            },
            zNTAm: "UwYYb",
            FIeLa: "ASGLa",
            aLRIE: function(e, n, t) {
                return e(n, t)
            },
            hCLgh: "loader.to",
            uwbvr: "/api/",
            TSKUS: "trustedHTMLPolicy",
            ciKZx: "style",
            tYlqi: function(e, n) {
                return e(n)
            },
            oMAeq: function(e, n) {
                return e + n
            },
            OPtbh: "cardApiIframe",
            IWsbi: "100%",
            dPPNE: "border: none",
            wnTmr: "script",
            FttXH: "https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.9/iframeResizer.min.js",
            ZIaMU: function(e, n) {
                return e(n)
            }
        };
        class n {
            static get br() {
                return new n("br")
            }
            constructor(n, t) {
                this.element = n.constructor.name.includes(e.edOsc) && n || function() {
                    var n = {
                        YXwPk: e.mVrOy
                    };
                    for (let t in arguments[1]) e.SVgdm(e.ASfRu, "RVjJQ") ? arguments[0].setAttribute(t, arguments[1][t]) : (r.appendTo(o), i.log(n.YXwPk));
                    return arguments[0]
                }(document.createElement(arguments[0]), arguments[1])
            }
            style(n) {
                for (let r in n) {
                    if (!e.xfgpg("bvGbP", "bvGbP")) {
                        for (var t = 0; e.uQMoz(t, this.length); t += 1)
                            if (e.xfgpg(this[t].id, o) || e.xfgpg(this[t].name, i)) return this[t];
                        return null
                    }
                    this.element.style[r] = n[r]
                }
                return this
            }
            append(t, ...r) {
                var o = {
                    dIYQZ: e.ACSTq
                };
                this.element.append(t.element || t), console.log("T:", {
                    targets: r,
                    fe: r && r.forEach
                });
                for (let t = 0; t < r.length; t++)
                    if ("eQBEC" === e.gYiDT) n.log(o.dIYQZ);
                    else {
                        let n = r[t];
                        console.log(e.AjExi, {
                            element: n,
                            target: this
                        }), this.element.append(n.element || n)
                    }
                return this
            }
            appendTo(n) {
                return (n.element || e.rHDPr(typeof n, "string") ? document.querySelector(n) : n).append(this.element), this
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
                var n = {
                    hACef: function(n, t) {
                        return e.KHUQO(n, t)
                    }
                };
                if ("jnIwM" === e.sfszn) return this.element[arguments[0]];
                i = c.children, u.forEach = [].forEach, l.forEach((e => {
                    n.hACef(s, e)
                }))
            }
            get children() {
                var c = {
                    Xpmqg: function(e, n) {
                        return e < n
                    },
                    JxzVq: e.fSWaL,
                    irMUG: e.qTYrr,
                    vKaYQ: function(n, t) {
                        return e.BvyhP(n, t)
                    },
                    iRAPI: e.IznvV,
                    OBRaa: e.jflxQ
                };
                return new class {
                    constructor(e) {
                        for (var n = 0; c.Xpmqg(n, e.length); n += 1) c.JxzVq == c.JxzVq ? this[n] = e[n] : arguments[0].setAttribute(t, arguments[1][r]);
                        Object.defineProperty(this, c.irMUG, {
                            get: function() {
                                return e.length
                            }
                        }), Object.freeze(this)
                    }
                    item(e) {
                        return null != this[e] ? this[e] : null
                    }
                    namedItem(t) {
                        for (var u = {
                                nvBSz: ".xh8yej3.x1iyjqo2"
                            }, l = 0; l < this.length; l += 1)
                            if (e.MqvJP(e.IMMWr, e.IMMWr)) {
                                var [a, s] = r.split(",");
                                o.value = "https://www.youtube.com/" + (c.vKaYQ(s, "1") ? c.iRAPI : c.OBRaa) + a, i()
                            } else if (this[l].id === t || this[l].name === t) {
                            if (e.xfgpg(e.tBjCe, "LLEsX")) return this[l];
                            n.querySelectorAll(u.nvBSz)[0].children
                        }
                        return null
                    }
                    get toArray() {
                        return [...this]
                    }
                }([...this.element.children])
            }
        }

        function t() {
            var n = {
                EfSpA: e.uUSzJ,
                uSIQV: function(n) {
                    return e.lExoY(n)
                },
                EofAq: "._aaqy",
                ZAwdF: function(n) {
                    return e.lExoY(n)
                },
                AOFRd: function(e, n) {
                    return e != n
                },
                frQDn: e.nwDEs,
                GNIJs: function(e, n) {
                    return e(n)
                },
                qplsw: function(e, n) {
                    return e(n)
                },
                RfjyN: function(e, n) {
                    return e(n)
                }
            };
            try {
                if (!e.rHaVz(e.QBKpR, e.AUIgk)) return document.querySelector(e.mefHu).innerText.replace(e.fOGOh, "");
                t = 1, r.log("Skipping ad :>")
            } catch {
                if (e.rzZVm(e.EApMQ, e.ldtZS)) i.querySelector(n.EfSpA) || n.uSIQV(c), u.querySelector(n.EofAq) && !l.querySelector(n.EofAq).querySelector(n.EfSpA) && n.ZAwdF(a);
                else try {
                    if ("SQzym" === e.BZzzS) {
                        let e = n.AOFRd(typeof d, n.frQDn) ? h : m.querySelectorAll;
                        return p ? [...M.querySelectorAll(I)].filter((n => !(null === e.offsetParent)))[0] : (n => e.keys(n).length ? n : null)(n.GNIJs(e, v) ? n.qplsw(e, w).length ? n.RfjyN(e, C)[0] : n.RfjyN(e, z) : null)
                    }
                    return document.querySelector(e.whiHv).innerText.replace(e.fOGOh, "")
                } catch (n) {
                    return e.EJImx(D, e.AHOcS, e.XBExl) ? e.EYjio(D, e.AHOcS, e.XBExl).innerText : document.querySelector(e.oWuTs).innerText.replace(e.fOGOh, "")
                }
            }
        }

        function r() {
            var t = {
                kqygB: "These button dont work on youtube music yet"
            };
            if (e.rHaVz(e.BKtGK, e.IEskl)) return n.querySelector(e.fgLJv);
            e.KHUQO(get_aria_label, e.WlBpp).click(), setTimeout((() => {
                if ("UbUkl" === e.wGzeh) throw n(t.kqygB), ".";
                document.querySelector("#yDmH0d > c-wiz > div > div > div:nth-child(2) > div.LLEp8b > div > div.rTq3hb > div:nth-child(1) > div > div.ofmULb > div:nth-child(2) > div > button").click(), e.EJImx(setTimeout, (() => {
                    document.querySelector("#VGHGFf > div > div.Eddif > div:nth-child(2) > button > div.VfPpkd-RLmnJb").click()
                }), 1e3)
            }), 1e3)
        }
        _element = _e = n, setElement2 = function(e) {
            return e.match(/(?<host>https?\:\/\/www\.tiktok\.com)\/(?<username>@[^\/]+)\/video\/(?<videoID>\d+)/i).groups
        };
        var o = e.uUlUn,
            i = e.HHZZQ;

        function c(n, t, r = !1) {
            var o = {
                    NfzcX: function(n, ...t) {
                        return e.KHUQO(n, ...t)
                    }
                },
                i = e.shFRg(addEventListener, n, ((...e) => {
                    o.NfzcX(t, ...e), r && o.NfzcX(removeEventListener, i)
                }), !0);
            return i
        }

        function u(n) {
            if (e.UPMxZ(typeof jQuery, "function") && e.pTcQA(n, jQuery)) {
                if (e.UPMxZ(e.GNDsu, e.jXRte)) return e.KHUQO(t, this.toFixed(r));
                n = n[0]
            }
            var o = n.getBoundingClientRect();
            return e.FDfhr(o.top, e.kgrcU(0, e.cCBir(window.innerHeight || document.documentElement.clientHeight, 2))) && e.CmJHF(o.left, 0) && e.EDjYF(o.bottom, e.ccGoR(window.innerHeight || document.documentElement.clientHeight, e.cCBir(window.innerHeight || document.documentElement.clientHeight, 2))) && e.EDjYF(o.right, window.innerWidth || document.documentElement.clientWidth)
        }

        function l(t, {
            callback: r,
            int: c
        }) {
            var g = {
                lIfNo: e.DjJNR,
                usnyL: e.IFfIK,
                SdSOE: e.wAwYM,
                fJmTP: "TEXTAREA",
                oPBxH: function(e, n) {
                    return e == n
                },
                jlbNa: e.LqDfv,
                MqOnm: e.UHtXF,
                sBOdU: function(n, t) {
                    return e.ivsHv(n, t)
                },
                rdkAX: "Open player page",
                bWOoj: e.pCbBI,
                YHull: function(n, t, r) {
                    return e.EYjio(n, t, r)
                },
                KTuLW: e.xZAVh,
                oXUAi: function(e, n, t, r) {
                    return e(n, t, r)
                },
                Xmpth: e.IznvV,
                TyHTV: e.jflxQ,
                daYyr: function(n, t) {
                    return e.MqvJP(n, t)
                },
                dCJFJ: e.sVoCo,
                hsInX: e.nMnuP,
                jfKEU: "BSlDj",
                ZDEEM: function(e) {
                    return e()
                },
                erVYX: function(n) {
                    return e.lExoY(n)
                },
                BFKaZ: function(n, t) {
                    return e.onAdr(n, t)
                }
            };
            if (e.srAhx(e.WDrJj, e.RjZYj)) {
                var w = {
                    KSITq: function(e, n) {
                        return e == n
                    },
                    TPrme: g.lIfNo,
                    HVgLZ: function(e, n) {
                        return e || n
                    }
                };
                let e = m.call(p, t, v);
                return e._click = e.click, e.click = function() {
                    if (e.log(e, "was clicked", e.tagName), w.KSITq("A", e.tagName)) {
                        Z.log(w.TPrme, e);
                        let n = e.download,
                            t = e.href;
                        X = {
                            id: new ee(ne.href).searchParams.get("v"),
                            href: t,
                            title: n
                        }, w.HVgLZ(te, ce).postMessage(ue, "*"), le()
                    } else e._click.apply(e)
                }, j.log(e, g.usnyL, e.tagName), e
            }!r && (r = function() {}), !c && (c = 100), console.log({
                f: t,
                callback: r,
                int: c
            });
            try {
                if (e.drAoA == e.drAoA) return e.lExoY(t), void e.lExoY(r);
                var y = {
                    XfxwQ: g.SdSOE,
                    HwGNb: g.fJmTP,
                    UtRUy: function(e, n) {
                        return g.oPBxH(e, n)
                    },
                    NPpbz: g.jlbNa,
                    OSVDr: g.MqOnm,
                    dQyGV: function(e, n) {
                        return g.sBOdU(e, n)
                    },
                    MtSjb: g.rdkAX
                };
                o.log(g.bWOoj), g.YHull(i, g.KTuLW, (function({
                    isTrusted: e,
                    ctrlKey: n,
                    shiftKey: t,
                    code: r,
                    target: o,
                    target: {
                        tagName: i
                    }
                }) {
                    ![y.XfxwQ, y.HwGNb].includes(i) && !n && !t && e && y.UtRUy(r, y.NPpbz) && (s(y.OSVDr) || y.dQyGV(f, y.MtSjb)[1]).click()
                }))
            } catch (y) {}
            var b = e.EYjio(setInterval, (() => {
                var e = {
                    EOzuO: function(e, n, t, r) {
                        return g.oXUAi(e, n, t, r)
                    },
                    UULKe: "search_txt",
                    sAXpB: function(e, n) {
                        return g.oPBxH(e, n)
                    },
                    IYOLJ: g.Xmpth,
                    LNINe: g.TyHTV,
                    wtYeV: "btn-submit"
                };
                if (g.daYyr(g.dCJFJ, g.hsInX)) try {
                    g.daYyr("BSlDj", g.jfKEU) ? e.EOzuO(n, 2, !0, !1) : (g.ZDEEM(t), g.erVYX(r), g.BFKaZ(clearInterval, b))
                } catch (e) {} else u.getElementById(e.UULKe).value = "https://www.youtube.com/" + (e.sAXpB(l, "1") ? e.IYOLJ : e.LNINe) + a, s.getElementById(e.wtYeV).click(), f.log(d, h)
            }), c || 100);
            return b
        }

        function a(e) {
            return null === e.offsetParent
        }

        function s(e) {
            return e.parentNode
        }

        function f() {
            return get_aria_label(e.DWEos) ? e.OgYRX(get_aria_label, e.DWEos).click ? e.quUoU(get_aria_label, e.DWEos) : document.querySelector("._afxv") : document.querySelector(e.Ylvjh)
        }

        function d() {
            return get_aria_label("Next") ? e.RGfLL(get_aria_label, e.iXscW).click ? get_aria_label(e.iXscW) : document.querySelector("._afxw") : document.querySelector(e.lncgf)
        }

        function h() {
            var t = {
                DnFIG: function(n, t) {
                    return e.KzgpF(n, t)
                }
            };
            try {
                if (!e.srAhx(e.lYntd, "UmqPH")) return document.querySelector("div.x78zum5.xdt5ytf.x1iyjqo2.xs83m0k.x2lwn1j.x1odjw0f.x1n2onr6.x9ek82g.x6ikm8r.xdj266r.x11i5rnm.x4ii5y1.x1mh8g0r.xexx8yu.x1pi30zi.x18d9i69.x1swvt13 > ul > div:nth-child(3) > div > div").children[0].innerText.split("\n")[1];
                l.push(a), s.children.length && (g = v.children, w.forEach = [].forEach, C.forEach((e => {
                    t.DnFIG(M, e)
                })))
            } catch {
                return e.hqZgO(e.GllHO, e.DcgiN) ? n.length : [...document.querySelectorAll(".xt0psk2.xvs91rp.xo1l8bm.x5n08af.x18hxmgj")].pop().innerText.split("\n")[0]
            }
        }

        function m() {
            var t = {
                YXNwN: ".media-heading",
                TaHVL: function(n, t) {
                    return e.zDImO(n, t)
                },
                IfEYA: function(n, ...t) {
                    return e.ccaKj(n, ...t)
                },
                ruidm: function(n, t) {
                    return e.MqvJP(n, t)
                },
                PTCwi: "jHFsf",
                Gdoyp: e.LNDZs,
                zyTkU: "fJavW",
                bxpez: e.gfMOl,
                bjBJP: "Got",
                eDukr: function(n, t, r) {
                    return e.EJImx(n, t, r)
                },
                piKDm: function(n, t) {
                    return e.HGiLj(n, t)
                },
                UoEim: e.JCkXw,
                muYgH: e.QUMqJ
            };
            if (e.EDBbs(e.TcGXy, e.zRafM)) {
                if (location.href.includes(e.mIWjB))
                    if (e.HZSoV === e.cbkhU) {
                        d.log("a", h);
                        var r = e.ZGSpV(m, p.forms[0])[0].href,
                            o = e.EYjio(g, v.forms[0], "div")[0].innerText,
                            g = {
                                _: w,
                                id: C,
                                href: r,
                                title: o,
                                length: {}
                            };
                        z.log("Posted", g), (M || I.parent).postMessage(g, "*"), e.knqcv(H)
                    } else {
                        let n = open(e.ZEhyn, location.href, "width=400,height=500");
                        var y = e.EJImx(GM_addValueChangeListener, e.QUMqJ, (function(e, r, o, d) {
                            var h = {
                                IQfwv: t.YXNwN,
                                oUyZa: function(e, n) {
                                    return t.TaHVL(e, n)
                                },
                                OJuqx: function(e, ...n) {
                                    return t.IfEYA(e, ...n)
                                }
                            };
                            if (t.ruidm(t.PTCwi, t.Gdoyp)) {
                                if (o)
                                    if (t.zyTkU === t.bxpez)
                                        for (var m = "0|1|2|3|4".split("|"), p = 0;;) {
                                            switch (m[p++]) {
                                                case "0":
                                                    var g = c(h.IQfwv)[0].innerText;
                                                    continue;
                                                case "1":
                                                    var v = u.href;
                                                    continue;
                                                case "2":
                                                    var w = {
                                                        id: l,
                                                        href: v,
                                                        title: g,
                                                        length: {}
                                                    };
                                                    continue;
                                                case "3":
                                                    a.log("Posted");
                                                    continue;
                                                case "4":
                                                    h.oUyZa(s, f).postMessage(w, "*");
                                                    continue
                                            }
                                            break
                                        } else console.log(t.bjBJP, {
                                            a: e,
                                            b: r,
                                            c: o,
                                            d: d
                                        }), n.close(), GM_removeValueChangeListener(y), t.eDukr(downloadFile_, o, t.piKDm(document.title, t.UoEim)), t.eDukr(GM_setValue, t.muYgH, null)
                            } else h.OJuqx(i, ...c), u && h.OJuqx(l, a)
                        }))
                    }
            } else n.stop()
        }
        async function p() {
            var t = {
                Klfdl: function(n, t, r) {
                    return e.nrOOf(n, t, r)
                },
                uGnOp: "img",
                PkAOe: e.SBJfM,
                gFtDi: e.KIfWB,
                lrrjB: function(n, t, r) {
                    return e.nrOOf(n, t, r)
                },
                GDvdy: function(n, t, r) {
                    return e.loVLb(n, t, r)
                }
            };
            if ("QFkLT" === e.vhPCc) return n.parentNode;
            for (var r = e => new Promise((n => setTimeout(n, e))), o = new Set, i = {}; e.knqcv(f);) {
                if (await e.ivsHv(r, 100), !e.knqcv(f)) {
                    await r(1e3);
                    break
                }
                e.lExoY(f).click()
            }[...e.afvgo(getInstalImages)].forEach((e => {
                let n = t.Klfdl(findhref2, e, t.uGnOp)[0];
                o.add([n.src, n.getAttribute(t.PkAOe)])
            })), e.afvgo(d).click();
            try {
                e.MqvJP(e.GdHVr, e.GdHVr) ? (!s[f] || d[h].closed) && (z[M] = null, I(H), D.log(R, t.gFtDi)) : e.ZWqbD(d).click()
            } catch (e) {}
            for (; e.hBQRJ(d);)
                if (e.rHaVz("Jkmbf", e.GlbLh)) n();
                else {
                    await e.bTTDH(r, 300), [...getInstalImages()].forEach((e => {
                        let n = t.lrrjB(findhref2, e, "img")[0];
                        o.add([n.src, n.getAttribute(t.PkAOe)])
                    }));
                    try {
                        e.qaaxV(d).click()
                    } catch (e) {}[...o].length
                }
            for (;;) {
                if ("vSzkz" !== e.GKKfl) return this.element[arguments[0]];
                if (await e.ZGSpV(r, 100), !e.ZWqbD(f)) break;
                f().click()
            }[...o].forEach((e => {
                i[e[0]] = e[1]
            })), (o = Object.keys(i).map((e => ({
                src: e,
                name: i[e]
            })))).forEach((e => {
                var n = new URL(e.src).pathname.split(".").pop();
                t.GDvdy(z, e.src, e.name + "." + n)
            })), console.log(e.aCJBY, o)
        }

        function g() {
            e.YcmMg(p).then(console.log, console.warn)
        }
        setElement = function(n) {
            return !(!e.KzgpF(String, n).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/) || 11 != e.KHUQO(String, n).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/)[8].length) && String(n).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/)[8]
        }, findhref2 = function(n, t) {
            var r = {
                    EjoLQ: function(e, n) {
                        return e === n
                    },
                    AFoXG: e.cgdHu,
                    pTLiR: e.daWyU,
                    efDEF: function(n, t) {
                        return e.ivsHv(n, t)
                    },
                    DQuza: e.nHPRt,
                    LYYcb: function(n, t) {
                        return e.BvyhP(n, t)
                    },
                    dFxaJ: function(n, t) {
                        return e.GCnRh(n, t)
                    },
                    LwWto: function(e, n) {
                        return e !== n
                    },
                    cCzIT: e.vxZjo
                },
                o = [];
            return e.OgYRX((function e(n) {
                var c = {
                    SgSzp: r.DQuza,
                    FsAGb: function(e, n) {
                        return r.efDEF(e, n)
                    }
                };
                r.LYYcb(n.tagName.toLowerCase(), r.dFxaJ(t, "a")) ? (o.push(n), n.children.length && ((n = n.children).forEach = [].forEach, n.forEach((n => {
                    if (r.EjoLQ(r.AFoXG, r.pTLiR)) {
                        if (s) {
                            let e = z.createElement("a");
                            e.download = M + c.SgSzp, e.href = I, t.body.appendChild(e), e.click(), e.remove()
                        } else c.FsAGb(p, g);
                        v[w] = C
                    } else r.efDEF(e, n)
                })))) : r.LwWto(r.cCzIT, "XhiJr") ? n.children.length && ((n = n.children).forEach = [].forEach, n.forEach((n => {
                    r.efDEF(e, n)
                }))) : [...i.attributes].map((e => {
                    const {
                        name: n,
                        value: t
                    } = e;
                    return {
                        name: n,
                        value: t
                    }
                })).filter((e => e.value == s)).length && (u.push(l), a = 1)
            }), n), o
        }, getInstalImages = function() {
            if (!e.PQvfc(e.AduFz, e.AduFz)) return document.querySelectorAll(e.mAZsX); {
                const e = i.createElement("a");
                e.href = c, e.download = u, l.body.appendChild(e), e.click(), a.body.removeChild(e)
            }
        }, getInstaVideo = function() {
            return document.querySelector(e.fgLJv)
        }, downloadVideoFromBlob = function(n, t) {
            var r = {
                KLukm: e.Hryio,
                sGZhT: e.HBIWz,
                aaSXL: e.JCkXw
            };
            if (!e.UkJgH(e.RkQTJ, "DZiQm")) {
                for (let e in arguments[1]) arguments[0].setAttribute(e, arguments[1][e]);
                return arguments[0]
            }
            if (n && n.src && n.src.startsWith("blob:")) {
                const o = n.captureStream(),
                    i = new MediaRecorder(o),
                    c = [];
                i.ondataavailable = e => {
                    e.data.size > 0 && (c.push(e.data), console.log(e.data))
                }, i.onstop = () => {
                    const e = new Blob(c, {
                            type: r.KLukm
                        }),
                        n = URL.createObjectURL(e),
                        o = document.createElement("a");
                    o.style.display = r.sGZhT, o.href = n, o.download = t + r.aaSXL, document.body.appendChild(o), o.click(), document.body.removeChild(o), URL.revokeObjectURL(n)
                }, i.start(), setTimeout((() => {
                    i.stop()
                }), e.fZgXw(n.duration, 1e3))
            } else console.error(e.UiwRy)
        }, console.log("A?");
        const v = e => new Promise((n => setTimeout(n, e)));
        if (e.cZSBc(document.domain, e.HcRdO)) onload = async function() {
            var n = {
                FFZeD: function(n, t) {
                    return e.ivsHv(n, t)
                },
                Uczmz: function(e, n) {
                    return e < n
                },
                ffMyt: e.KoKRu,
                BgtkS: function(n, t) {
                    return e.TkAVQ(n, t)
                },
                pvrFC: e.nSvjK,
                xITdH: e.MdgDg,
                sinmf: "blur"
            };
            const t = {
                url: name,
                input: null
            };
            var r = !1;
            for (setTimeout((() => {
                    r = !0
                }), 2e4); !document.querySelector(e.NZOkb);)
                if (await e.ZGSpV(v, 0), r) throw e.JyImx;
            t.input = document.querySelector(e.NZOkb), console.log("Found a"), e.zVHXR((function(e, t) {
                var r = {
                    qaKcR: function(e, t) {
                        return n.FFZeD(e, t)
                    },
                    TFfjJ: function(e, t) {
                        return n.Uczmz(e, t)
                    },
                    VubkZ: n.ffMyt
                };
                if (n.BgtkS("sFVqY", "eaujc")) {
                    [n.pvrFC, n.ffMyt, n.xITdH, n.sinmf].forEach((n => {
                        let o = new Event(n, {
                            bubbles: !0,
                            isTrusted: !0
                        });
                        e["on" + n] && e["on" + n](o), n === r.VubkZ && (e.value = t), e.dispatchEvent(o)
                    }))
                } else i.innerText.startsWith(c) && (u = new l(a.href).searchParams.get("v"))
            }), t.input, t.url), document.querySelector(e.XQPvD).click(), GM_setValue(e.QUMqJ, await async function(n) {
                for (; !document.querySelector(n);) await e.xOXHC(v, 0);
                return document.querySelector(n)
            }(e.ubHnc).then((e => e.href)))
        };
        else {
            if (e.lYjhi(document.domain, e.jYncz)) return void(getSoundCloadI = function() {
                var t = {
                    vHocI: function(n, t) {
                        return e.argcw(n, t)
                    },
                    bLLlO: e.MhDsL,
                    XzMwc: e.ACSTq
                };
                e.pPJFK(_setV, "SC", e.qFSzF(getSoundCloudUrl)), e.pPJFK(open, "https://sclouddownloader.net/", "SC").onclose = function(e) {
                    if (t.vHocI("HjqNv", t.bLLlO)) return new n("br");
                    console.log(t.XzMwc)
                }
            });
            if (document.domain == e.kBYcQ) return void
            function() {
                var t, o = {
                    dMytP: function(n, t) {
                        return e.UkJgH(n, t)
                    },
                    NfZgi: e.jkzWv,
                    jsHND: e.KCPET,
                    mtpIx: e.mgsjM,
                    whaKZ: e.WRZEw,
                    oAxhw: "click",
                    TiKjr: function(n, t) {
                        return e.dUPhR(n, t)
                    },
                    vFQHr: function(n, t, r) {
                        return e.zVHXR(n, t, r)
                    },
                    SrrLs: e.OcazL,
                    UTSUG: "#cardApiIframe",
                    vrIrm: "Added That Thing",
                    pmrPj: function(n, t) {
                        return e.jGfzE(n, t)
                    },
                    MbvDI: e.yKvUq,
                    DDiJK: e.QeTYn,
                    VwHPi: e.xxNqL,
                    INATn: function(n, t) {
                        return e.rHDPr(n, t)
                    },
                    WQXbI: e.iVEZE,
                    mdUre: function(n, t) {
                        return e.rHaVz(n, t)
                    },
                    MzNQj: e.ZiLDU,
                    vzbzs: e.TSKrb,
                    TgpsL: function(e, n) {
                        return e === n
                    },
                    GBGMC: "iskcq",
                    HSjuo: "#video-list",
                    wUafp: e.mIWeF,
                    GAgse: "Not FOund"
                };
                e.sdbyM(setInterval, (() => {
                    var e, i = {
                        LCDNg: o.UTSUG,
                        XhMnw: o.vrIrm,
                        HallL: function(e, n) {
                            return o.TiKjr(e, n)
                        },
                        PRFuY: function(e, n) {
                            return o.pmrPj(e, n)
                        },
                        nOtcz: o.MbvDI,
                        okfKX: o.DDiJK,
                        efuGO: o.VwHPi,
                        aCRAi: function(e, n) {
                            return o.INATn(e, n)
                        },
                        USpJZ: o.WQXbI,
                        RLATr: function(e, n) {
                            return o.mdUre(e, n)
                        },
                        kiCvf: o.MzNQj,
                        szzvj: "Doesnt work yet",
                        VQPGx: function(e, n) {
                            return o.pmrPj(e, n)
                        },
                        PoPvo: function(e, n, t, r, o, i, c) {
                            return e(n, t, r, o, i, c)
                        }
                    };
                    if (o.dMytP("DjNUY", o.vzbzs)) return n.match(/(?<host>https?\:\/\/www\.tiktok\.com)\/(?<username>@[^\/]+)\/video\/(?<videoID>\d+)/i).groups;
                    try {
                        if (o.TgpsL("iskcq", o.GBGMC))[...[...document.querySelectorAll(o.HSjuo)].map((e => [e, [...e.classList]])).filter((e => e[1].includes("ytcp-video-section")))[0][0].children[1].children].map((e => [e, [...e.classList], e.tagName])).filter((e => "YTCP-VIDEO-ROW" == e[2])).filter((n => {
                            if ("tIoxC" !== i.efuGO) return i.aCRAi(n[0].children[0].querySelectorAll(".cell-body.tablecell-visibility.style-scope.ytcp-video-row")[0].innerText, i.USpJZ);
                            !v.querySelector(i.LCDNg) && (w(!0), e.parentNode.prepend(z), M.prepend(I.element), H.log(i.XhMnw)), i.HallL(D(R.href), B) && (i.PRFuY(j, !0), O.set(i.nOtcz, N), Q.log(i.okfKX), K = i.PRFuY(W, n.href))
                        })).map((e => e[0].children[0].querySelectorAll(".cell-body.tablecell-visibility.style-scope.ytcp-video-row")[0])).forEach((e => {
                            if (o.dMytP(o.NfZgi, o.NfZgi)) n.warn("Failed unmuting");
                            else {
                                console.log(e), e.append(new _e("br").element);
                                var t = new _e(o.jsHND).set(o.mtpIx, o.whaKZ).on(o.oAxhw, (function(e) {
                                    if (!i.RLATr(i.kiCvf, i.kiCvf)) return new r((e => c(e, u)));
                                    alert(i.szzvj);
                                    var {
                                        id: n,
                                        href: t,
                                        isShort: o
                                    } = i.VQPGx(findhref2, e.target.parentElement.parentElement).map((e => ({
                                        href: e.href,
                                        short: e.href.includes("/short"),
                                        id: setElement(e.href)
                                    }))).filter((e => e.id))[0];
                                    i.PoPvo(downloadT, n, !1, !0, !1, !1, o ? new URL(t) : null)
                                }));
                                e.append(t.element)
                            }
                        })), e = !0;
                        else o.TiKjr(c, u.innerText) && (d = h.innerText, o.vFQHr(m, o.SrrLs, p))
                    } catch {
                        e = !1
                    }
                    t != e && (t = e, console.log(o.wUafp, e ? "Found" : o.GAgse))
                }), 0)
            }();
            if (document.domain == e.ruPww) {
                var w;

                function y() {
                    var t = {
                        iEkMi: function(n, t) {
                            return e.bTTDH(n, t)
                        },
                        MdPnq: function(e, n) {
                            return e == n
                        },
                        yEpDn: function(e, n) {
                            return e(n)
                        }
                    };
                    if (!e.MqvJP(e.kPEnX, e.WxZmP)) return !(!t.iEkMi(c, u).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/) || !t.MdPnq(l(a).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/)[8].length, 11)) && t.yEpDn(s, f).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/)[8];
                    for (var r = e.rGozN.split("|"), o = 0;;) {
                        switch (r[o++]) {
                            case "0":
                                console.log(e.bzLDa);
                                continue;
                            case "1":
                                var i = new n(document.querySelectorAll(e.dhXNf)[0]);
                                continue;
                            case "2":
                                var d = new n(e.KCPET, {
                                    id: e.BSPAe
                                }).set(e.mgsjM, e.RzCYw).on("click", g);
                                continue;
                            case "3":
                                i.append(d, h);
                                continue;
                            case "4":
                                var h = new n(e.KCPET, {
                                    id: e.YmpZv
                                }).set(e.mgsjM, "Get Videos").on(e.ygVJA, m);
                                continue
                        }
                        break
                    }
                }

                function b() {
                    var t = new n(document.querySelector(e.FolBl)),
                        r = new n("button", {
                            id: e.BSPAe
                        }).set(e.mgsjM, "Get Images").on("click", g),
                        o = new n(e.KCPET, {
                            id: "MediaButton2"
                        }).set(e.mgsjM, "Get Videos").on("click", m);
                    t.append(r, o)
                }
                return l((function() {
                    document.querySelectorAll(e.dhXNf)[0].children
                }), {
                    callback: function() {
                        var n = {
                            JuKob: e.uUSzJ,
                            jVssL: function(e) {
                                return e()
                            },
                            PwAoD: e.FolBl
                        };
                        y(), e.OhLDW(setInterval, (() => {
                            document.querySelector(n.JuKob) || n.jVssL(y), document.querySelector(n.PwAoD) && !document.querySelector(n.PwAoD).querySelector(n.JuKob) && n.jVssL(b)
                        }))
                    }
                }), void console.log(e.dfNZO)
            }
            if (e.OEsrV(document.domain, "sclouddownloader.net")) e.FCcVV == e.FCcVV ? async function() {
                var n = {
                        kewTR: e.suBoZ,
                        uDpXO: function(n) {
                            return e.jDOFs(n)
                        },
                        TSXKe: function(n, t, r) {
                            return e.zVHXR(n, t, r)
                        },
                        vtDxM: e.FZRHL,
                        JHasj: e.gueZO
                    },
                    d = e.KHUQO(_getV, "sc");
                async function h(e, c) {
                    var d = {
                        Lxgdq: n.kewTR,
                        WviSx: function(e) {
                            return e()
                        },
                        ZarAo: function(e) {
                            return n.uDpXO(e)
                        },
                        ANwJO: function(e, n) {
                            return e !== n
                        },
                        WuHXA: function(e, t, r) {
                            return n.TSXKe(e, t, r)
                        },
                        Luuyx: "OVpSB",
                        MxKFV: n.vtDxM,
                        AAfSt: n.JHasj
                    };
                    let h = e => new Promise((n => setTimeout(n, e)));
                    return await new Promise((async(n, m) => {
                        var p = {
                            lMWAt: function(e) {
                                return e()
                            },
                            Gvacb: function(e) {
                                return d.WviSx(e)
                            },
                            uxTES: function(e) {
                                return d.ZarAo(e)
                            }
                        };
                        if (d.ANwJO("jZuOX", "DQtDe")) {
                            var g = !1;
                            d.WuHXA(setTimeout, (() => (g = 0, m())), c);
                            for (; !document.querySelector(e);)
                                if (d.Luuyx !== d.MxKFV) {
                                    if (await h(), g) {
                                        if ("tzRhN" === d.AAfSt) {
                                            m();
                                            break
                                        }
                                        p.lMWAt(c).append(u.br.element), p.Gvacb(l).append(a.element), p.uxTES(s).append(f.element)
                                    }
                                } else t.element.querySelector(".ScCoreButtonLabel-sc-s7h2b7-0").innerText = r;
                            return d.WviSx(n)
                        }
                        r.log(d.Lxgdq, o), i = !0
                    })).then((e => !0), (e => !1))
                }
                if (e.rHDPr(location.pathname, e.xgZVA))
                    for (var m = e.TFsph.split("|"), p = 0;;) {
                        switch (m[p++]) {
                            case "0":
                                await e.ycXxr(h, "#trackLink");
                                continue;
                            case "1":
                                _setV(e.rABFj, g);
                                continue;
                            case "2":
                                for (; !trackLink.href.length;) await e.YJmgc(v, 0);
                                continue;
                            case "3":
                                console.log(g);
                                continue;
                            case "4":
                                var g = {
                                    name: trackTitle.innerText,
                                    href: trackLink.href
                                };
                                continue;
                            case "5":
                                for (; !trackTitle.innerText.length;) await e.lclUo(v, 0);
                                continue;
                            case "6":
                                await e.OhLDW(h, e.GZBDj);
                                continue;
                            case "7":
                                e.GioGp(close);
                                continue
                        }
                        break
                    } else {
                        if (!e.nxFbH(_getV, "SC")) throw "Bruv";
                        var w = "#urlInput";
                        e.YdfCy;
                        if (await h(w, 2e3), await h(w, 2e3))
                            if ("LUNdh" !== e.xzXqE) e.Plqvv(i, c).postMessage(u, "*"), l.href = a.href;
                            else
                                for (var y = "4|5|2|6|1|3|0".split("|"), b = 0;;) {
                                    switch (y[b++]) {
                                        case "0":
                                            e.Kpklr(setInterval, formSubmit, 1e3);
                                            continue;
                                        case "1":
                                            formSubmit();
                                            continue;
                                        case "2":
                                            for (; e.rHDPr(typeof formSubmit, "undefined");) try {
                                                e.WMJBI("ZDUVJ", e.EVzcH) ? (await e.trRdx(v, 0), console.log(e.tfGMF, formSubmit)) : t = r[0]
                                            } catch {}
                                            continue;
                                        case "3":
                                            console.warn(e.AwIys);
                                            continue;
                                        case "4":
                                            document.querySelector(w).value = d;
                                            continue;
                                        case "5":
                                            console.log("EZ url", !!window.formSubmit);
                                            continue;
                                        case "6":
                                            console.log(e.tfGMF, formSubmit);
                                            continue
                                    }
                                    break
                                }
                    }
            }().then(console.log, console.warn) : n.querySelector(e.CVFmv).click();
            else if (document.domain == e.OApED) {
                if (e.yPuBG(e.wzeoy, e.sfoBw)) {
                    e.dCUDK(location.pathname.split("/")[1], e.dBmRF(GM_getValue, e.OApED)) && (e.loVLb(GM_setValue, e.OApED, location.pathname.split("/")[1]), console.warn("updated"));
                    let Se = new URL(location.href).searchParams.get("v"),
                        Te = e.hAPRE(new URL(location.href).searchParams.get("s"), 1),
                        qe = new URL(location.href).searchParams.get(e.FeMzu),
                        Ae = new URL(location.href).searchParams.get(e.VEoVg),
                        Le = e.yHFoB(e.pwehV(Se, qe), Ae);
                    const Ue = e => new Promise((n => setTimeout(n, e)));
                    async function x(n, t = 5e3) {
                        var r = {
                            EjIpf: function(e, n) {
                                return e !== n
                            },
                            rwUeM: function(n, t, r) {
                                return e.NWxjb(n, t, r)
                            }
                        };
                        if ("aUPgk" !== e.lhHgb) {
                            let a = !1;
                            for (setTimeout((() => {
                                    r.EjIpf("OmtwZ", "OmtwZ") || (console.log("TimeOut for", n), a = !0)
                                }), t); !document.querySelector(n);)
                                if (e.EDrTK !== e.xaiyt) {
                                    if (console.log("_", n, a), await e.YJmgc(Ue, 500), a) break
                                } else {
                                    var o = {
                                        glpZO: function(e, n) {
                                            return e(n)
                                        }
                                    };
                                    i = c.children, u.forEach = [].forEach, l.forEach((e => {
                                        o.glpZO(s, e)
                                    }))
                                }
                            if (console.log(n, a), a) throw e.jWDvX;
                            return document.querySelector(n)
                        }
                        r.rwUeM(c, (function() {
                            d.value = n, m(), p(g, 1e3)
                        }), {
                            callback() {}
                        })
                    }
                    return void async function() {
                        for (var t = {
                                mwumm: "3|1|0|6|5|2|4",
                                WILUA: function(n, t, r) {
                                    return e.EYjio(n, t, r)
                                },
                                CtNml: e.TBAJd,
                                sATpX: function(n, t) {
                                    return e.jNJsl(n, t)
                                },
                                iIHCx: e.brSPv,
                                bNtOa: function(n, t) {
                                    return e.NOwCU(n, t)
                                },
                                KhpKp: function(e, n) {
                                    return e == n
                                },
                                UjAdn: e.drtuE,
                                TdDtz: function(e, n) {
                                    return e == n
                                },
                                LxGAy: e.AWLOP,
                                HWnmA: function(n, t) {
                                    return e.ccGoR(n, t)
                                },
                                ANAvA: e.nHPRt,
                                FpGsH: e.IDAPx,
                                sHcUr: e.mgsjM,
                                kBHJZ: "Get MP3",
                                ePxwn: e.oHxWz,
                                CFjTR: "Getting video",
                                PsuWW: function(e, n) {
                                    return e !== n
                                },
                                YlRiI: "EPepS",
                                ZOqBa: e.jtSpc,
                                QopOR: function(n, t) {
                                    return e.KVMSH(n, t)
                                },
                                CWZyW: "convert1"
                            }; e.dUPhR(document.readyState, "complete");) await e.RGfLL(Ue, 0);
                        if (Se) {
                            if ("aJBLG" !== e.cWgfk) {
                                if (!e.tHSIh(a, s)) throw new w(e.vijop);
                                const n = d.createElement(h.tagName);
                                for (let e of C.attributes) n.setAttribute(e.name, e.value);
                                return n.style.cssText = p.style.cssText, n.className = g.className, n.innerHTML = v.innerHTML, n
                            } {
                                let n = async e => {
                                    for (var n = t.mwumm.split("|"), r = 0;;) {
                                        switch (n[r++]) {
                                            case "0":
                                                var o = t.WILUA(findhref2, document.forms[0], t.CtNml)[0].innerText;
                                                continue;
                                            case "1":
                                                var i = t.sATpX(findhref2, document.forms[0])[0].href;
                                                continue;
                                            case "2":
                                                (opener || window.parent).postMessage(c, "*");
                                                continue;
                                            case "3":
                                                console.log("a", e);
                                                continue;
                                            case "4":
                                                close();
                                                continue;
                                            case "5":
                                                console.log(t.iIHCx, c);
                                                continue;
                                            case "6":
                                                var c = {
                                                    _: Le,
                                                    id: Se,
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
                                    await x(e.LobjM).then((e => {
                                        console.log("e", e), e.value = Te ? "https://www.youtube.com/watch?v=" + Se : "https://www.youtube.com/shorts/" + Se, e.parentElement.children[1].click()
                                    })).catch(n), console.log(e.ABEmb), await e.MnEKh(x, e.LiOVt).then((async e => {
                                        if (t.PsuWW(t.YlRiI, t.ZOqBa)) {
                                            for (; document.querySelector("#" + e.id);) await t.QopOR(Ue, 0);
                                            console.log("a_")
                                        } else if (t.bNtOa(H.origin, D) || R.origin.match(/https?:\/{2}onlymp3\.to/) || B.origin.match(/https?:\/{2}en\.onlymp3\.to/) || j.origin.match(/https?:\/{2}en(\d)\.onlinevideoconverter\.pro/) || t.KhpKp(O.origin, t.UjAdn) || t.bNtOa(N.origin, "https://y2mate.nu") || t.TdDtz(Q.origin, "https://snapsave.io") || K.origin == t.LxGAy) {
                                            const {
                                                data: {
                                                    href: e,
                                                    title: n,
                                                    length: r,
                                                    id: o,
                                                    _: i
                                                }
                                            } = fe;
                                            let c = t.HWnmA(n, de ? ".mp4" : t.ANAvA);
                                            (e => {
                                                e && e.remove()
                                            })(he.getElementById(i)), me.log(t.FpGsH, {
                                                href: e,
                                                title: n,
                                                length: r,
                                                id: o,
                                                _: i
                                            }, pe), ge.set(t.sHcUr, t.kBHJZ), ve.set(t.ePxwn, !1), we ? (Ee.log(t.CFjTR), t.WILUA(ke, e, c)) : t.sATpX(be, e), xe[i] = e
                                        } else le.log("Unhandled Post", se)
                                    })).catch(n), console.log("b")
                                } catch (n) {
                                    console.warn(e.MDdny, n)
                                }
                            }
                        } else {
                            if (e.aZgNI(e.PxAop, e.PxAop)) throw n.getElementById(t.CWZyW).click(), "this";
                            console.warn(e.kpphH)
                        }
                    }().then(console.log, console.warn)
                }
                try {
                    e.GioGp(l), e.TRzjX(a), e.lclUo(s, f)
                } catch (Pe) {}
            } else if (e.cZSBc(document.domain, "qdownloader.cc"))
                if (e.mJbtU(e.icdyQ, e.icdyQ)) {
                    const Ve = e => new Promise((n => setTimeout(n, e)));
                    async function E(n, t = 2e4) {
                        var r = {
                            JDavM: e.wjgxH,
                            lQclx: e.IbKhm,
                            rAPTG: function(e) {
                                return e()
                            }
                        };
                        let o = !1;
                        for (e.sdbyM(setTimeout, (() => {
                                console.log(e.suBoZ, n), o = !0
                            }), t); !document.querySelector(n);)
                            if (e.rHaVz("YKPNL", e.awAPg)) {
                                if (console.log("_", n, o), await Ve(500), o) break
                            } else {
                                const e = p.createObjectURL(g);
                                v.href = e, w.download = C, z.target = r.JDavM, M.click(), I.revokeObjectURL(e), (H || D || R).postMessage({
                                    url: B,
                                    title: j,
                                    s: !0
                                }, "*"), (typeof O).includes(r.lQclx) && r.rAPTG(N)
                            }
                        if (console.log(n, o), o) throw e.jWDvX;
                        return document.querySelector(n)
                    }

                    function k(n, t) {
                        var r = {
                            fDhUI: e.wAwYM,
                            siwgI: function(n, t) {
                                return e.JQpsC(n, t)
                            },
                            VFUbR: e.LqDfv,
                            gGNhK: function(e, n) {
                                return e(n)
                            },
                            NYZrC: e.UHtXF,
                            NSGJq: function(n, t) {
                                return e.nBJrx(n, t)
                            },
                            ybWOg: e.laNsH
                        };
                        if (e.TkAVQ(e.JgDbe, e.smvjT)) {
                            [e.nSvjK, e.KoKRu, e.MdgDg, e.HkgJT].forEach((r => {
                                let o = new Event(r, {
                                    bubbles: !0,
                                    isTrusted: !0
                                });
                                if (n["on" + r] && n["on" + r](o), e.DwtaV(r, e.KoKRu))
                                    if (e.qIeLs("LZvzw", e.pfLJJ)) n.value = t;
                                    else {
                                        var s = new i(c.src).pathname.split(".").pop();
                                        u(l.src, a.name + "." + s)
                                    }
                                n.dispatchEvent(o)
                            }))
                        } else ![r.fDhUI, "TEXTAREA"].includes(u) && !l && !a && s && r.siwgI(f, r.VFUbR) && (r.gGNhK(m, r.NYZrC) || r.NSGJq(p, r.ybWOg)[1]).click()
                    }
                    let Ce = document.createElement;
                    document._createElement = function(n, t) {
                        var r = {
                            UlJqC: e.sMHUh,
                            FIUTE: function(n, t) {
                                return e.JQpsC(n, t)
                            },
                            GNXPH: e.DjJNR
                        };
                        if (!e.nclov(e.rCxFl, e.QfpnQ)) {
                            let o = Ce.call(document, n, t);
                            return o._click = o.click, o.click = function() {
                                if (console.log(o, r.UlJqC, o.tagName), r.FIUTE("A", o.tagName)) {
                                    console.log(r.GNXPH, o);
                                    let e = o.download,
                                        n = o.href;
                                    g = {
                                        id: new URL(location.href).searchParams.get("v"),
                                        href: n,
                                        title: e
                                    }
                                } else o._click.apply(o)
                            }, console.log(o, e.IFfIK, o.tagName), o
                        }
                        this[d[0]] = h(m[p[1]]), !g[v[1]] && !w && (D = !0, R = B[1], j.log(O))
                    }, async function() {
                        if (e.WMJBI(e.EYqiY, e.QawzO))[a, s, f, d] = h.pathname.split("/"), e.loVLb(m, (e => e.href)((e => (e.host = "clipr.xyz", e))(new p(g.href))), v);
                        else {
                            if (location.href.includes(e.EtmHQ)) throw "vidbutton";
                            GM_setValue(e.OcazL, ""), GM_addValueChangeListener(e.OcazL, (async function(n, t, r, o) {
                                console.log({
                                    a: n,
                                    b: t,
                                    c: r,
                                    d: o
                                }), r.includes("video download successful\ncheck downloads folder") && (await e.RfJFx(Ve, 1e3), close())
                            }));
                            let n = await e.ZyaZG(E, e.LobjM),
                                t = await E(e.uKqlw);
                            id_ = new URL(location.href).searchParams.get("v");
                            let r = "https://www.youtube.com/watch?v=" + id_;
                            e.pPJFK(k, n, r), t.click()
                        }
                    }().then(console.log, (async o => {
                        e.MqvJP(e.XEfRE, e.XEfRE) ? n.classList.add("collapse-frame") : o == e.EtmHQ && (console.log(e.QZOul), await e.tGbBv(E, "#height").then((o => {
                            var i = {
                                oyriq: function(n, t) {
                                    return e.QrJAw(n, t)
                                },
                                cTlGV: e.AjExi,
                                Umrhk: function(n, t) {
                                    return e.Qetrk(n, t)
                                },
                                Dkirc: function(n, t) {
                                    return e.UkJgH(n, t)
                                },
                                CRdmp: e.tOjUQ,
                                JITJi: function(n, t, r) {
                                    return e.ndDxt(n, t, r)
                                },
                                mberk: e.OcazL,
                                DaysO: e.fotTD,
                                fxIOh: e.YbhbU,
                                WVUvT: e.WieMf,
                                nMDtu: function(e, n) {
                                    return e(n)
                                }
                            };
                            if ("ZYqiV" === e.uUqrB) {
                                this.element.append(a.element || s), f.log("T:", {
                                    targets: d,
                                    fe: h && m.forEach
                                });
                                for (let e = 0; i.oyriq(e, w.length); e++) {
                                    let n = M[e];
                                    I.log(i.cTlGV, {
                                        element: n,
                                        target: this
                                    }), this.element.append(n.element || n)
                                }
                                return this
                            }
                            height.selectedIndex = e.kgrcU(height.options.length, 1), dlbutton.click(), open = window.open, window.open = function(e, n, t) {
                                console.log({
                                    a: e,
                                    b: n,
                                    c: t
                                })
                            }, e.NNOAx(E, "#dlbutton").then((e => {
                                var o = {
                                    WtfNm: i.DaysO
                                };
                                if (!i.Dkirc(i.fxIOh, i.WVUvT)) throw new t("HTTP error! Status: " + r.status);
                                var c = "";
                                i.nMDtu(setInterval, (t => {
                                    i.Umrhk(c, e.innerText) && (i.Dkirc(i.CRdmp, "rBJuq") ? n.getElementById(o.WtfNm).click() : (c = e.innerText, i.JITJi(GM_setValue, i.mberk, c)))
                                }))
                            }))
                        })))
                    }))
                } else
                    for (var S = e.KPoNI.split("|"), T = 0;;) {
                        switch (S[T++]) {
                            case "0":
                                if ((j[O] || N[Q]) && !K) return;
                                continue;
                            case "1":
                                F[Y] = e.ZocKc(Z, X, ee, !0, !!ne);
                                continue;
                            case "2":
                                var q = e.wVcXd(le, (e => {
                                    (!q[ye] || be[xe].closed) && (uN[uz] = null, A.ZPRPf(uP, q), us.log(ux, A.XUeRf))
                                }), 300);
                                continue;
                            case "3":
                                te.addEventListener(e.eedAU, (function(e) {
                                    q[ye].close()
                                }));
                                continue;
                            case "4":
                                W.log(e.tWCEb, J, G);
                                continue;
                            case "5":
                                var A = {
                                    ZPRPf: function(n, t) {
                                        return e.ZGSpV(n, t)
                                    },
                                    XUeRf: e.KIfWB
                                };
                                continue
                        }
                        break
                    } else if (e.Cwxqs(document.domain, e.RDEXL)) {
                        if (!e.gCHDK(e.rTtOj, "WhMXw")) {
                            async function T(n, t = 2e4) {
                                var c = {
                                    lCbOW: function(n, t) {
                                        return e.OCioy(n, t)
                                    },
                                    doxQT: "rjzXU",
                                    KMhDY: e.rxVmJ,
                                    XLQZy: "TimeOut for"
                                };
                                let u = !1;
                                for (e.NWxjb(setTimeout, (() => {
                                        c.lCbOW(c.doxQT, c.KMhDY) ? (console.log(c.XLQZy, n), u = !0) : this[r] = o[i]
                                    }), t); !document.querySelector(n) && (console.log("_", n, u), await v(500), !u););
                                if (console.log(n, u), u) throw e.jWDvX;
                                return document.querySelector(n)
                            }
                            return _wfs = T, void async function() {
                                var n = {
                                        OCWuI: e.DfJQU,
                                        NUAET: ".flex.items-center.space-x-4"
                                    },
                                    t = await e.FitXg(T, e.RHruF, 3e4);
                                if (t) {
                                    console.log(e.ckFWI), id_ = new URL(location.href).searchParams.get("v"), t.value = "https://www.youtube.com/watch?v=" + id_, e.dPdqG(ksearchvideo), e.mFcwk(setTimeout, e.qFSzF(ksearchvideo), 1e3);
                                    var r = await e.YqqrP(T, e.QtDlG);
                                    await e.CNxKn(T, e.eWLvk);
                                    r.selectedIndex = 0, r.options[0].selected = !0;
                                    for (var o = await e.jNJsl(T, e.jkWfg); !(o = await e.jNJsl(T, e.jkWfg));) await e.ZyaZG(v, 0);
                                    for (e.YUvQz(convertFile, 0);
                                        "#" == o.getAttribute(e.oYDRd);) await e.quUoU(v, 0), o = await e.vTuJe(T, e.jkWfg);
                                    console.log(o.href);
                                    var i = (await e.mKfHI(_wfs, e.JXNIa)).querySelector("h3").innerText,
                                        u = {
                                            id: id_,
                                            href: o.href,
                                            title: i,
                                            length: {}
                                        };
                                    console.log("Posted", u), e.zVnoz(opener, window).postMessage(u, "*")
                                } else {
                                    if (e.ObOkz("bcOHW", e.dylgS)) {
                                        var l = {
                                            ndpPg: n.OCWuI
                                        };
                                        return [...c.querySelectorAll(n.NUAET)].filter((e => d(e)[0])).filter((e => d(e)[0].href.includes("clips.twitchcdn.net"))).forEach((e => {
                                            d[e.querySelector(l.ndpPg).innerText.replace("p", "")] = h(e)[0].href
                                        })), f
                                    }
                                    e.kOuZq(alert, e.sFNWK), console.warn(e.utmLF)
                                }
                            }().then(console.log).catch(console.warn)
                        }
                        if (this[i].id === c || e.rzZVm(this[u].name, l)) return this[s]
                    } else if (e.fjUGT(document.domain, e.qMTdZ)) {
                const ze = e => new Promise((n => setTimeout(n, e)));
                async function A(n, u = 2e4) {
                    var a = {
                        OdWqC: "Closed ad card",
                        NPbgM: e.suBoZ
                    };
                    if (!e.hqZgO("usumj", e.DzETI)) {
                        let t = !1;
                        for (e.wVcXd(setTimeout, (() => {
                                console.log(a.NPbgM, n), t = !0
                            }), u); !document.querySelector(n);)
                            if (e.rzZVm("XtEII", e.TVTKW)) {
                                if (o.log(i.children.length), !c.children.length) throw l.getElementById("btn-submit").click(), e.qsnJE
                            } else if (console.log("_", n, t), await e.xOXHC(ze, 500), t) break;
                        if (console.log(n, t), t) throw e.jWDvX;
                        return document.querySelector(n)
                    }
                    t.click(), r.log(a.OdWqC)
                }
                _wfs = A, _copyElm = function(n) {
                    if (!e.SanUu(n, Element)) throw new Error("Provided argument is not a DOM element.");
                    const t = document.createElement(n.tagName);
                    for (let e of n.attributes) t.setAttribute(e.name, e.value);
                    return t.style.cssText = n.style.cssText, t.className = n.className, t.innerHTML = n.innerHTML, t
                }, async function() {
                    var t = {
                        wmvPz: e.IDAPx,
                        IsroF: e.WXkfZ,
                        PhQUe: e.jkbys,
                        BTnVi: e.WVWgq,
                        gACpj: function(n, t, r) {
                            return e.ndDxt(n, t, r)
                        },
                        pqtqG: "1080",
                        yPaGs: e.IgdXb,
                        pVGpK: function(e, n) {
                            return e === n
                        },
                        Kwybo: e.fUIVd,
                        NobBi: function(n, t, r) {
                            return e.pPJFK(n, t, r)
                        },
                        evRng: e.VIhPJ
                    };
                    location.href;
                    let r = (await e.SCGZN(_wfs, e.QKHxY)).parentElement.parentElement.parentElement.parentElement;
                    new _e(e.nxFbH(_copyElm, r)).on("click", (function() {
                        if (t.PhQUe === t.BTnVi)
                            if (f.origin == d) {
                                var {
                                    data: {
                                        s: e,
                                        url: n,
                                        title: r
                                    }
                                } = I;
                                H.log(t.wmvPz, {
                                    s: e,
                                    url: n,
                                    title: r
                                }, D), e ? j() : N(n, r, null, Q)
                            } else z.log(t.IsroF, M);
                        else t.gACpj(open, (e => e.href)((e => (e.host = "clipr.xyz", e))(new URL(location.href))), t.pqtqG)
                    })).appendTo(r.parentNode).element.querySelector(e.QKHxY).innerText = e.NpyZk, new _e(_copyElm(r)).on(e.ygVJA, (function() {
                        var e, r = {
                            EfOjO: t.yPaGs
                        };
                        t.pVGpK(t.Kwybo, t.Kwybo) ? t.gACpj(open, (e => e.href)(((e = new URL(location.href)).host = "clipr.xyz", e)), "720") : n.warn(r.EfOjO)
                    })).appendTo(r.parentNode).element.querySelector(".ScCoreButtonLabel-sc-s7h2b7-0").innerText = e.QDTXu, new _e(e.CNxKn(_copyElm, r)).on(e.ygVJA, (function() {
                        e.loVLb(open, (e => e.href)((e => (e.host = "clipr.xyz", e))(new URL(location.href))), e.cwQUx)
                    })).appendTo(r.parentNode).element.querySelector(".ScCoreButtonLabel-sc-s7h2b7-0").innerText = "480P", new _e(e.qETIW(_copyElm, r)).on(e.ygVJA, (function() {
                        t.NobBi(open, (e => e.href)((e => (e.host = "clipr.xyz", e))(new URL(location.href))), t.evRng)
                    })).appendTo(r.parentNode).element.querySelector(e.QKHxY).innerText = "360P", new _e(_copyElm(r)).on(e.ygVJA, (function() {
                        var n = {
                            MwYkc: function(n, t, r) {
                                return e.EYjio(n, t, r)
                            },
                            xqtzs: e.OcazL
                        };
                        e.KuHsz(e.OlyhE, e.OlyhE) ? (o = i.innerText, n.MwYkc(c, n.xqtzs, u)) : open((e => e.href)((e => (e.host = "clipr.xyz", e))(new URL(location.href))), e.RaxSx)
                    })).appendTo(r.parentNode).element.querySelector(e.QKHxY).innerText = "VOD"
                }().catch(console.warn)
            } else {
                if (e.SQlmo(document.domain, "www.twitch.tv")) {
                    let [Me, Ie, He, De] = location.pathname.split("/");
                    if (e.Qetrk(He, e.ipktl)) return console.warn("User isnt wathcing a clip");
                    console.log("User is Watching a CLip");
                    const Re = e => new Promise((n => setTimeout(n, e)));
                    async function L(t, r = 2e4) {
                        var o = {
                            bcaus: "MbnOh",
                            nPgVX: e.GpCHF
                        };
                        let i = !1;
                        for (e.JXtRX(setTimeout, (() => {
                                o.bcaus !== o.nPgVX ? (console.log("TimeOut for", t), i = !0) : n.warn("No id Found")
                            }), r); !document.querySelector(t) && (console.log("_", t, i), await e.VltNs(Re, 500), !i););
                        if (console.log(t, i), i) throw "NotFound";
                        return document.querySelector(t)
                    }
                    return _wfs = L, _wfs_ = L, _copyElm = function(n) {
                        if (!e.UkJgH("pjtUy", e.pZnvL)) {
                            if (!e.BRCig(n, Element)) throw new Error(e.vijop);
                            const t = document.createElement(n.tagName);
                            for (let e of n.attributes) t.setAttribute(e.name, e.value);
                            return t.style.cssText = n.style.cssText, t.className = n.className, t.innerHTML = n.innerHTML, t
                        }(e.EipSw(r, "Mute", "title") && e.Kpklr(o, e.VhBXy, e.Tymmf)[0] || e.FitXg(i, e.hJYND, e.Tymmf)).click()
                    }, void async function() {
                        var c = {
                            mAhid: e.UOCfo
                        };
                        location.href;
                        await e.AMJuv(_wfs, ".Layout-sc-1xcs6mc-0.bMOhzu");
                        let u = [...document.querySelectorAll(".Layout-sc-1xcs6mc-0 .bMOhzu")].filter((e => e.querySelector("button") && !e.querySelector("button").disabled))[0];
                        [{
                            label: "1080P",
                            resolution: e.YTUhM
                        }, {
                            label: "720P",
                            resolution: "720"
                        }, {
                            label: "480P",
                            resolution: e.cwQUx
                        }, {
                            label: e.ZXimN,
                            resolution: e.VIhPJ
                        }, {
                            label: e.RaxSx,
                            resolution: "VOD"
                        }].forEach((({
                            label: l,
                            resolution: a
                        }) => {
                            var s = {
                                IlEou: function(n, t, r) {
                                    return e.toILY(n, t, r)
                                }
                            };
                            if (!e.rzZVm(e.AYeQE, e.AYeQE)) return this.element["on" + t] = r, this; {
                                let t = new _e(e.RfJFx(_copyElm, u)).on(e.ygVJA, (function() {
                                    [Me, Ie, He, De] = location.pathname.split("/"), s.IlEou(open, (e => e.href)((e => (e.host = "clipr.xyz", e))(new URL(location.href))), a)
                                })).appendTo(u.parentNode);
                                e.WcfzH(a, e.RaxSx) ? e.XgVgV !== e.GpRCg ? t.element.querySelector(e.QKHxY).innerText = l : (r.push(o), i = 1) : e.nKLbb(e.aXUSY, e.aXUSY) ? n.classList.remove(c.mAhid) : t.element.querySelector(".bFxzAY").innerText = l
                            }
                        }))
                    }().catch(console.warn)
                }
                if (e.ZeNEF(document.domain, "clipr.xyz")) {
                    async function U() {
                        for (; e.KqgZz(document.readyState, e.zmHRs);) await e.ivsHv(P, 0);
                        return !0
                    }

                    function P(n) {
                        var o = {
                            tpOfU: function(e, n) {
                                return e(n)
                            },
                            knFeu: e.ekKJo
                        };
                        return "VEeCh" === e.pbwVF ? o.tpOfU(t, r.querySelector(o.knFeu))[0].href : new Promise((e => setTimeout(e, n)))
                    }
                    return void async function() {
                        if (e.dBlFq(e.VIifd, "bYpmo")) o.push(i.data), c.log(u.data);
                        else {
                            let n = name;
                            await e.AKzxQ(U), logger.log(e.YMETH);
                            let t = ((n = {}) => {
                                var t = {
                                    yajkK: e.DfJQU,
                                    pIsxC: function(n, t) {
                                        return e.nBJrx(n, t)
                                    }
                                };
                                return [...document.querySelectorAll(e.yLelD)].filter((e => findhref2(e)[0])).filter((e => findhref2(e)[0].href.includes("clips.twitchcdn.net"))).forEach((e => {
                                    n[e.querySelector(t.yajkK).innerText.replace("p", "")] = t.pIsxC(findhref2, e)[0].href
                                })), n
                            })()[n];
                            logger.log(1);
                            let r = document.querySelector(e.txiiR).innerText;
                            logger.log(2);
                            let o = document.querySelector("body > div.relative.overflow-hidden > main > div > div.px-4.mx-auto.max-w-7xl.sm\\:px-6.lg\\:px-8 > div.mb-6.space-y-3.lg\\:flex.lg\\:items-center.lg\\:justify-between.lg\\:space-y-0 > div.lg\\:flex.lg\\:items-center > h2").innerText;
                            logger.log(3);
                            let i = "@" + r + " on Twitch | " + o + " - " + n + "P.mp4";
                            logger.log("Downloading file as: " + i), e.xOXHC(open, t), logger.log(4), await e.oNlph(P, 4e3), e.FITUK(close)
                        }
                    }().catch(console.warn)
                }
                if (location.href.includes("tubemp4.is")) {
                    async function V(n, t = 3e4) {
                        var r, l = {
                            plAAu: function(n) {
                                return e.qFSzF(n)
                            },
                            QraOB: function(n, t) {
                                return e.MnEKh(n, t)
                            }
                        };
                        for (v(t).then((e => r = !0)); !document.querySelector(n);)
                            if (e.VMeKr(e.mbBfG, "gizeu")) l.plAAu(o), i(), l.QraOB(c, u);
                            else if (await e.kMdwz(v, 0), r) break;
                        return document.querySelector(n)
                    }
                    console.log("ok"), e.JRUdV(V, "#u").then((async t => {
                        var r = {
                            yoYrX: e.ixyTt,
                            uMPnn: e.QGjRO,
                            VlSmo: function(e, n) {
                                return e == n
                            },
                            OXeim: function(n, t) {
                                return e.xCJWn(n, t)
                            },
                            BbOVz: function(n, t) {
                                return e.UxYXb(n, t)
                            },
                            JxhZa: function(n) {
                                return e.mrDad(n)
                            },
                            fUlpF: e.IFfIK
                        };
                        t.value = "https://www.youtube.com/watch?v=" + new URL(location.href).searchParams.get("v"), convert.click(), await e.kOuZq(v, 200), (await V(e.YOYJK)).click(), (await e.uYYfU(V, e.akEMu)).click(), V(e.cbhln).then((t => {
                            let o = document.createElement;
                            document.createElement = function(e, t) {
                                var i = {
                                    MYdQj: r.yoYrX,
                                    xmdZX: r.uMPnn,
                                    HtVtQ: function(e, n) {
                                        return r.VlSmo(e, n)
                                    },
                                    aCvPg: function(e, n) {
                                        return r.OXeim(e, n)
                                    },
                                    NgMxq: "kClxu",
                                    qsmAr: function(e, n) {
                                        return r.BbOVz(e, n)
                                    },
                                    PNABB: function(e) {
                                        return r.JxhZa(e)
                                    }
                                };
                                let c = o.call(document, e, t);
                                return c._click = c.click, c.click = function() {
                                    var e = {
                                        IBSVi: i.MYdQj
                                    };
                                    if (i.xmdZX != i.xmdZX) return this.title.body = n, this;
                                    if (console.log(c, "was clicked", c.tagName), i.HtVtQ("A", c.tagName))
                                        if (i.aCvPg("kClxu", i.NgMxq)) {
                                            console.log("Caught", c);
                                            let e = c.download,
                                                n = c.href;
                                            g = {
                                                id: new URL(location.href).searchParams.get("v"),
                                                href: n,
                                                title: e
                                            }, i.qsmAr(opener, window).postMessage(g, "*"), i.PNABB(close)
                                        } else n.log(e.IBSVi);
                                    else c._click.apply(c)
                                }, console.log(c, r.fUlpF, c.tagName), c
                            }, t.click(), console.log(e.VIeAN), e.fBNBy(setTimeout, (() => t.click()), 1e3)
                        }))
                    })).then(console.log, console.warn)
                }
            }
        }

        function C() {
            if (!e.argcw(e.zngxl, e.ArQLU)) {
                if (document.domain.includes(e.ryIiu)) {
                    if (!e.KjjtD(e.bnHZV, e.vGQFS)) throw e.ZyaZG(alert, e.ntIku), ".";
                    if (e.ghqbz(f.getElementById("form-app-root").children.length, 0)) throw "";
                    d.log(e.XBKvp);
                    var {
                        title: n,
                        href: t
                    } = e.jXbxI(h, e.pSSQQ) ? e.uBMWg(m, e.pSSQQ)[0] ? e.QieMt(p, "#download-720-MP4")[0] : e.ZXSTc(r, e.pSSQQ) : e.tUccU(v, e.pSSQQ), r = {
                        id: w,
                        href: t,
                        title: n,
                        length: {}
                    };
                    C.log(e.brSPv), e.Plqvv(z, M).postMessage(r, "*")
                }
                var o = [...document.getElementsByTagName(e.pAInJ)].filter(u).filter((e => !a(e)))[0],
                    g = e.FitXg(findhref2, o, e.Sfhcc).filter((e => !a(e))).filter(u).filter((e => "video-title" == e.id)).map(s).map(s).map((e => ({
                        id: setElement(findhref2(s(e))[0].href),
                        e: e
                    })));
                return g
            }
            i = !0, c = u[1], l.log(a)
        }

        function z(e, n) {
            const t = document.createElement("a");
            t.href = e, t.download = n, document.body.appendChild(t), t.click(), document.body.removeChild(t)
        }
        var M, I;
        async function H() {
            for (; I && !I.closed;) await e.ivsHv(v, 0);
            return 1
        }

        function D(n, t = "aria-label", r = document.body) {
            var o = [];
            return e.kOuZq((function r(i) {
                var d = {
                        PBlmZ: function(n) {
                            return e.YxWDS(n)
                        },
                        CvdLo: function(n) {
                            return e.knqcv(n)
                        },
                        VjnKu: function(e) {
                            return e()
                        },
                        wqTxV: function(n, t) {
                            return e.EUSxz(n, t)
                        }
                    },
                    h = !1;
                t ? e.RaRtq(i.getAttribute(t), n) && (e.KnTry(e.OxHIv, e.OxHIv) ? (d.PBlmZ(c).append(u.br.element), d.CvdLo(l).append(a.element), d.VjnKu(s).append(f.element)) : (o.push(i), h = 1)) : [...i.attributes].map((e => {
                    const {
                        name: n,
                        value: t
                    } = e;
                    return {
                        name: n,
                        value: t
                    }
                })).filter((e => e.value == n)).length && (o.push(i), h = 1), i.children.length && !h && ((i = i.children).forEach = [].forEach, i.forEach((e => {
                    d.wqTxV(r, e)
                })))
            }), r), o.length ? e.CebEe(o.length, 1) ? o[0] : e.shRrS(o, !1) : null
        }

        function R(n, t = "aria-label", c = document.body) {
            var u = [];
            return e.KVMSH((function c(l) {
                var a = {
                    wZcfy: function(n, t, r) {
                        return e.fKDlh(n, t, r)
                    }
                };
                l.getAttribute(t) == n ? u.push(l) : e.hqZgO(e.wLSSp, e.DfyXY) ? a.wZcfy(r, (e => e.href)((e => (e.host = "clipr.xyz", e))(new o(i.href))), "360") : l.children.length && (e.CBfDx === e.beduz ? r[o[0]] = i[1] : ((l = l.children).forEach = [].forEach, l.forEach((e => {
                    c(e)
                }))))
            }), c), e.NOwCU(u.length, 1) ? u[0] : e.iAlwR(u, !1)
        }

        function B() {
            document.querySelector(".ytp-volume-area > .ytp-mute-button").click()
        }

        function j() {
            var n = {
                aZsop: function(n) {
                    return e.ARrpp(n)
                },
                SgiGb: function(e) {
                    return e()
                }
            };
            if (e.argcw("ZxoiG", "fNfXO")) return n.aZsop(t), void n.SgiGb(r);
            (D(e.VhBXy, "title") && D(e.VhBXy, e.Tymmf)[0] || e.HztCV(D, e.hJYND, "title")).click()
        }

        function O() {
            (e.JqGDZ(query, e.pYnyK) && e.vTuJe(query, e.pYnyK).querySelectorAll(e.ldSqQ)[0].getAttribute("d") == UnmutePath && D("Mute", e.Tymmf)[0] || e.tPWRQ(D, "Unmute", e.Tymmf) || D("Unmute (m)", "title")).click()
        }
        console.log("B?"), _getIds = C, info = {}, downloadT = function(u, l = !1, a = !0, m = !1, p = !1, g = "") {
            var v = {
                vrdho: function(n, t) {
                    return e.OEsrV(n, t)
                },
                BnreI: e.drtuE,
                XVzIt: function(n, t) {
                    return e.BvyhP(n, t)
                },
                yLFpb: "https://y2mate.nu",
                gWqkx: "https://tubemp4.is",
                TSrkq: function(n, t) {
                    return e.IfpPL(n, t)
                },
                TcASf: e.nHPRt,
                ETQFL: e.IDAPx,
                FmfeS: e.mgsjM,
                YprkW: e.QVXJj,
                lKEwS: e.oHxWz,
                Vbawo: function(n, t) {
                    return e.kQlbJ(n, t)
                },
                kvWpo: e.ZpuFU,
                IoMgh: e.iYJkd,
                pSkDG: e.edDon,
                leYwP: function(e, n, t) {
                    return e(n, t)
                },
                zXOKz: e.WXkfZ,
                xCFPQ: function(e, n) {
                    return e + n
                },
                mCXJE: function(n, t) {
                    return e.RRtbb(n, t)
                },
                maacN: e.OApED,
                ftvib: e.zSLLd,
                AlLpw: e.eEcet,
                unQDg: e.zEExw,
                MPjNa: e.ljbLe,
                hQoOf: "mp4",
                dxtMH: e.gKvfH,
                RSMeu: e.YOekn,
                TWOQi: e.yKvUq,
                tijRE: function(n, t) {
                    return e.rzZVm(n, t)
                },
                jNOoM: "PVqhq",
                aburF: "IRxtT",
                IYwrx: "4|3|1|0|2",
                tIjSu: e.zPDGs,
                QqxZT: e.HkKiu,
                LMdFS: e.ARMqj,
                UiFzV: e.NgZuN,
                UqZAk: e.zOckN,
                ywSDQ: e.WEMrZ,
                aeOwa: e.HBIWz,
                TVmKI: function(e) {
                    return e()
                },
                xVmpy: "Cant append buttons yet",
                JZFJE: function(e) {
                    return e()
                }
            };
            if ("WnOqR" === e.BZuqf) {
                let i = e.kHbub(u, m ? e.FeMzu : e.gKvfH) + a;
                if ((e => {
                        e && e.remove()
                    })(document.getElementById(i)), localStorage[i] && !l && (!p || !e.ZQFOU(confirm, "You have already download this video as ." + (m ? "mp4" : e.gKvfH) + "\nStill download?"))) return;
                let s = e.ddIuQ(g, location);
                var w = new URL(location.href);
                w.host = w.host.replace(".com", "mz.com"), console.log("o", w);
                let f = [e.RRtbb(e.pwehV(e.BgZjF, e.tUccU(GM_getValue, "y2mate.nu") || e.RUAlu), "/"), e.zSLLd, u, e.eEcet, w.pathname.startsWith(e.zEExw) ? 1 : 0, e.ljbLe, m ? "mp4" : e.gKvfH, e.YOekn, a];
                console.log(i, f);
                return e.WjzRp(c, e.eedAU, (function() {
                    info[u].close()
                }), !0), onmessage = function(e) {
                    if (e.origin == o || e.origin.match(/https?:\/{2}onlymp3\.to/) || e.origin.match(/https?:\/{2}en\.onlymp3\.to/) || e.origin.match(/https?:\/{2}en(\d)\.onlinevideoconverter\.pro/) || v.vrdho(e.origin, v.BnreI) || v.XVzIt(e.origin, v.yLFpb) || v.XVzIt(e.origin, "https://snapsave.io") || e.origin == v.gWqkx) {
                        const {
                            data: {
                                href: o,
                                title: i,
                                length: c,
                                id: u,
                                _: l
                            }
                        } = e;
                        let s = v.TSrkq(i, m ? ".mp4" : v.TcASf);
                        (n = document.getElementById(l)) && n.remove(), console.log(v.ETQFL, {
                            href: o,
                            title: i,
                            length: c,
                            id: u,
                            _: l
                        }, e), J.set(v.FmfeS, v.YprkW), J.set(v.lKEwS, !1), a ? v.Vbawo(v.kvWpo, v.IoMgh) ? (console.log(v.pSkDG), v.leYwP(z, o, s)) : t.value = r : open(o), localStorage[l] = o
                    } else console.log(v.zXOKz, e);
                    var n
                }, info[u] = m ? e.IVzvx(open, s.pathname.startsWith(e.zEExw) ? "https://yt5s.biz/enxj100/" : "https://qdownloader.cc/youtube-video-downloader.html?v=" + u, [u, s.pathname.startsWith(e.zEExw) ? 1 : 0, e.kHbub(m, !1)], "width=400,height=500") : ! function() {
                    if (v.tijRE(v.jNOoM, v.aburF)) return !n.closed;
                    for (var e = v.IYwrx.split("|"), t = 0;;) {
                        switch (e[t++]) {
                            case "0":
                                r.closed = !1;
                                continue;
                            case "1":
                                r.appendTo(document.body);
                                continue;
                            case "2":
                                return r;
                            case "3":
                                M = GM_addValueChangeListener(v.maacN, (function(e, n, t, o) {
                                    f = [v.xCFPQ(v.mCXJE("https://y2mate.nu/", GM_getValue(v.maacN) || "0HzX"), "/"), v.ftvib, u, v.AlLpw, w.pathname.startsWith(v.unQDg) ? 1 : 0, v.MPjNa, m ? v.hQoOf : v.dxtMH, v.RSMeu, a], r.set(v.TWOQi, f.join(""))
                                }));
                                continue;
                            case "4":
                                var r = new _e(v.tIjSu, {
                                    src: f.join(""),
                                    id: i,
                                    useT: a,
                                    loading: v.QqxZT,
                                    referrerpolicy: v.LMdFS,
                                    allowfullscreen: !0,
                                    sandbox: v.UiFzV,
                                    allow: v.UqZAk
                                }).style({
                                    border: 0,
                                    position: v.ywSDQ,
                                    width: 0,
                                    height: 0,
                                    "pointer-events": v.aeOwa,
                                    opacity: 1
                                });
                                continue
                        }
                        break
                    }
                }()
            }
            i((function() {
                v.TVmKI(s);
                if (!v.TVmKI(f)) throw v.xVmpy;
                return d.log("Posting"), v.JZFJE(h)
            }), {
                callback: function() {}
            })
        }, downloadTikTok = function(n, h) {
            var m = {
                uUCiu: function(n, t, r) {
                    return e.NWxjb(n, t, r)
                },
                jPcHH: e.XpoTv,
                tQzke: function(n, t) {
                    return e.CNxKn(n, t)
                },
                qoRQl: function(e, n) {
                    return e === n
                },
                ZTsyB: e.JHmak,
                UogeR: function(n, t) {
                    return e.OEsrV(n, t)
                },
                oSOzl: e.TuYdh,
                AVXKI: function(e, n) {
                    return e !== n
                },
                sYsfx: e.oUxbY,
                hyJDt: e.PSOwA,
                Lqgus: function(n, t, r, o) {
                    return e.shFRg(n, t, r, o)
                },
                HKgDp: function(e, n) {
                    return e + n
                },
                PTDYl: function(e, n) {
                    return e + n
                },
                MOWHL: e.gNJIx,
                hAVGh: e.JCkXw,
                oTdBf: ".mp3",
                glvnQ: e.vEGYd,
                PhLfk: "Unhandled Post"
            };
            if (e.MRRib === e.cswQd) return null != this[t] ? this[r] : null;
            (async function(h, p) {
                var g = {
                    PQkKd: function(n, t) {
                        return e.OEsrV(n, t)
                    },
                    vesRX: "none",
                    SXAhS: "convert1",
                    VNpEl: e.VyfHw,
                    HorZq: e.zZQoN,
                    yKUCl: function(e, n) {
                        return e || n
                    },
                    ANINU: function(e, n) {
                        return e < n
                    },
                    qjQIn: e.qTYrr
                };
                if (e.mJbtU("YXljh", e.YjPWn)) {
                    if (g.PQkKd(r.style.display, g.vesRX)) throw c.getElementById(g.SXAhS).click(), "this";
                    i.log(g.VNpEl)
                } else {
                    await e.AKzxQ(H), console.log("ez");
                    let r = p.videoID,
                        v = p.username,
                        w = t();
                    onmessage = function(e) {
                        var t = {
                            jPXfR: function(e, n, t) {
                                return m.uUCiu(e, n, t)
                            },
                            DeFuE: function(e, n) {
                                return e(n)
                            },
                            HKyDy: m.jPcHH,
                            zeTcR: function(e, n) {
                                return m.tQzke(e, n)
                            }
                        };
                        if (m.qoRQl(m.ZTsyB, "QtMJv"))
                            if (m.UogeR(e.origin, o) || e.origin.match(/https?:\/{2}savetik\.csavetik.coo/) || e.origin.match(/https?:\/{2}en\.onlymp3\.to/) || e.origin.match(/https?:\/{2}en(\d)\.onlinevideoconverter\.pro/) || m.UogeR(e.origin, m.oSOzl)) {
                                var {
                                    data: {
                                        href: r,
                                        links: h,
                                        title: p,
                                        length: v,
                                        id: y,
                                        mp4: b,
                                        info: {
                                            username: x
                                        }
                                    }
                                } = e;
                                if (console.log("Handled", {
                                        href: r,
                                        title: p,
                                        length: v,
                                        id: y,
                                        links: h,
                                        mp4: b
                                    }, e), m.UogeR(e.origin, "https://savetik.co")) m.AVXKI(m.sYsfx, m.hyJDt) ? (p = w, m.Lqgus(z, b ? h[0] : h.pop(), m.HKgDp(m.PTDYl(m.HKgDp(x, m.MOWHL), p), b ? m.hAVGh : m.oTdBf), I)) : (u.error(g.HorZq, l), (g.yKUCl(a, s) || f).postMessage({
                                    url: d,
                                    title: n,
                                    s: !1
                                }, "*"));
                                else {
                                    if (useT)
                                        if ("pLKBL" !== m.glvnQ) {
                                            for (var E = 0; g.ANINU(E, i.length); E += 1) this[E] = s[E];
                                            u.defineProperty(this, g.qjQIn, {
                                                get: function() {
                                                    return E.length
                                                }
                                            }), a.freeze(this)
                                        } else {
                                            let e = document.createElement("a");
                                            e.download = p + m.oTdBf, e.href = r, document.body.appendChild(e), e.click(), e.remove()
                                        } else open(r);
                                    localStorage[_] = r
                                }
                            } else console.log(m.PhLfk, e);
                        else t.jPXfR(i, !1, t.DeFuE(c, u(t.HKyDy) ? t.zeTcR(l, t.HKyDy).innerText : a.href))
                    }, I = open("https://savetik.co/en", ["https://www.tiktok.com/" + v + "/video/" + r, e.mmWvK(h, !1)], "width=400,height=500")
                }
            })(n, h).then(console.log, console.warn)
        }, abc_ = D, G = j, Um = O;
        var N = 0;

        function Q(c) {
            if (!e.NOcCa(e.UVJVC, e.KqoAQ)) return this[n];
            if (!c) return !1;
            if (e.rOTiW(e.HbgJq, e.HbgJq)) {
                if (!c.closed) return !0;
                if (e.jQtcL(e.eGZET, "WxGAK")) return !1;
                t(r)
            } else try {
                return !!e.pMoKh(o, "browse-copy", e.XBExl).parentNode && e.pFXcS(i, e.wwqCt, "data-e2e").parentNode
            } catch (e) {
                return !1
            }
        }
        async function K(t = [
            ["w1", "win1"],
            ["w2", "win2"],
            ["w3", "win3"],
            ["w4", "win4"]
        ]) {
            if (!e.EDBbs(e.nYQbE, e.nYQbE)) {
                var r, o = !1;
                return await new Promise(((n, s) => {
                    var f = {
                        hKixn: function(n, t) {
                            return e.WjChG(n, t)
                        },
                        XQQil: function(n, t) {
                            return e.BFAjG(n, t)
                        },
                        tfEcW: function(n, t) {
                            return e.KHUQO(n, t)
                        },
                        yUbiR: e.iXscW,
                        rVdAP: e.lncgf
                    };
                    if (!e.SpDSf("PmjBx", e.xWSLl)) return f.tfEcW(i, f.yUbiR) ? f.hKixn(c, f.yUbiR).click ? u(f.yUbiR) : l.querySelector(f.rVdAP) : a.querySelector(f.rVdAP);
                    var d = setInterval((e => {
                        t.forEach((e => {
                            this[e[0]] = Q(window[e[1]]), !window[e[1]] && !o && (o = !0, r = e[1], console.log(e))
                        })), r && (f.hKixn(n, r), f.XQQil(clearInterval, d))
                    }), 500)
                })), r
            }
            e.GioGp(n).click()
        }

        function W(n, o, i) {
            if (!o) return e.YmUil(alert, "This button is corrently broken");
            var c = e.qFSzF(_getIds),
                u = [];
            for (let t = 0; e.rvlMk(t, n); t++) u.push([e.XohHI("w", t), e.WuEvQ(e.dJtBd, t)]);
            c.forEach((({
                id: n
            }, c) => {
                var l = {
                    wGZiC: function(n, t) {
                        return e.vrHhH(n, t)
                    },
                    GANLb: e.IliGp,
                    GxHbl: function(e, n) {
                        return e(n)
                    },
                    aRwEN: e.tWCEb,
                    odUbf: function(n, t, r, o, i) {
                        return e.EAoXW(n, t, r, o, i)
                    },
                    GEZrM: function(n, t, r) {
                        return e.SufBb(n, t, r)
                    }
                };
                e.wFXed(K, u).then((e => {
                    if (!info[n] && !localStorage[n] || i) {
                        console.log(l.aRwEN, n, c), window[e] = l.odUbf(downloadT, n, i, !0, !!o), window.addEventListener("unload", (function(n) {
                            window[e].close()
                        }));
                        var u = l.GEZrM(setInterval, (n => {
                            (!window[e] || window[e].closed) && (l.wGZiC(l.GANLb, l.GANLb) ? (window[e] = null, l.GxHbl(clearInterval, u), console.log(e, "isclosed")) : t.log("%c" + this.title.body + " | %c" + r, "color: " + this.title.color + "; font-weight: bold; font-size: " + this.title.size + ";", "color: " + this.body.color + "; font-weight: bold; font-size: " + this.body.size + "; text-shadow: 0 0 5px rgba(0,0,0,0.2);"))
                        }), 300)
                    }
                }))
            }))
        }
        window.ch3 = Q, window.getWin = K, WIP_ = W;
        var J = new n(e.KCPET).set("innerText", e.QVXJj).on("click", (function(n) {
                J.set(e.mgsjM, "Wait..."), J.set(e.oHxWz, !0), e.YtUbe(downloadT, setElement(location.href), !0, !0, !1, !0)
            })),
            G = new n(e.KCPET).set(e.mgsjM, e.aSWeh).on(e.ygVJA, (function(t) {
                if (e.vQnzj(e.HLpkD, e.HLpkD)) return n[0].children[0].querySelectorAll(e.uhMaD)[0].innerText == e.iVEZE;
                downloadT(setElement(location.href), !0, !0, !0, !0)
            })),
            F = new n(e.KCPET).set("innerText", e.TDwkY).on("click", (function(n) {
                e.shFRg(WIP_, 2, !1, !1)
            })),
            Y = new n("button").set(e.mgsjM, e.TKptI).on("click", (function(t) {
                if (e.iwzgO("FVgIC", e.JCRNm)) return n.querySelector("div.x78zum5.xdt5ytf.x1iyjqo2.xs83m0k.x2lwn1j.x1odjw0f.x1n2onr6.x9ek82g.x6ikm8r.xdj266r.x11i5rnm.x4ii5y1.x1mh8g0r.xexx8yu.x1pi30zi.x18d9i69.x1swvt13 > ul > div:nth-child(3) > div > div").children[0].innerText.split("\n")[1];
                e.swqQE(WIP_, 2, !0, !1)
            })),
            Z = new n("button").set(e.mgsjM, e.aSWeh).on(e.ygVJA, (function(n) {
                e.Qmncb(downloadTikTok, !0, e.mKfHI(setElement2, e.LqMXX(getClass, e.XpoTv) ? e.YzZns(getClass, "ehlq8k34").innerText : location.href))
            })).style({
                color: "blue"
            }),
            X = new n(e.KCPET, {
                id: "tt1"
            }).set(e.mgsjM, e.aSWeh).on("click", (function(n) {
                if (e.WUhvb(e.viAzk, e.viAzk)) e.ndDxt(downloadTikTok, !0, e.tFHzT(setElement2, e.ZQFOU(getClass, e.XpoTv) ? e.OhLDW(getClass, e.XpoTv).innerText : location.href));
                else {
                    let n = r[o];
                    i.log(e.AjExi, {
                        element: n,
                        target: this
                    }), this.element.append(n.element || n)
                }
            })).style({
                color: e.aSTjT
            }),
            ee = new n(e.KCPET).set(e.mgsjM, e.QVXJj).on(e.ygVJA, (function(n) {
                e.EJImx(downloadTikTok, !1, setElement2(e.YmUil(getClass, e.XpoTv) ? e.QfXgs(getClass, e.XpoTv).innerText : location.href))
            })).style({
                color: "blue"
            });

        function ne() {
            return document.querySelector(e.dtXqw) || document.querySelector(e.ANtoF)
        }

        function te() {
            var t = {
                HBjJs: ".space-x-1",
                WEPya: function(e, n) {
                    return e(n)
                },
                MtQNp: e.ZLHaV,
                OBraz: e.PFnXD,
                DXQRT: e.Hryio,
                recZc: e.HBIWz,
                BJvZL: function(n, t) {
                    return e.BqofB(n, t)
                },
                iMleh: e.JCkXw
            };
            const r = e.mrDad(ne);

            function o() {
                t.HBjJs;
                try {
                    return !(![...document.querySelectorAll(t.MtQNp)].filter(u).filter((e => !a(e)))[0] && !t.WEPya(query, ".autoplay")) && ([...document.querySelectorAll(t.MtQNp)].filter(u).filter((e => !a(e)))[0] || query(t.OBraz))
                } catch (e) {
                    return !1
                }
            }
            console.log(r), J.appendTo(r), G.appendTo(r), console.log("Posted Buttons");
            var i = !1;
            e.EYjio(setInterval, (() => {
                var r = {
                    tRPMR: function(n) {
                        return e.knqcv(n)
                    }
                };
                if (e.KqgZz(i, e.afvgo(o)) && e.FcHiv(o))
                    if (e.rHaVz(e.mojLv, e.OUoux)) {
                        var c = new l(a, {
                                type: t.DXQRT
                            }),
                            u = s.createObjectURL(c),
                            h = f.createElement("a");
                        h.style.display = t.recZc, h.href = u, h.download = t.BJvZL(d, t.iMleh), h.body.appendChild(h), h.click(), m.body.removeChild(h), p.revokeObjectURL(u)
                    } else console.log(e.GGVxo), e.cxJlf(setTimeout, (() => {
                        r.tRPMR(o).append(n.br.element), o().append(F.element), o().append(Y.element)
                    }), 100);
                else e.LjJyO(i, o()) && !e.ARrpp(o) && console.log(e.ixyTt);
                i = e.FITUK(o)
            }), 100)
        }
        if (console.log(e.sLwUt), a1 = [
                [e.XPDWY, function() {
                    var n = {
                        ZmErG: function(e, n) {
                            return e !== n
                        },
                        nbkHD: function(e, n) {
                            return e !== n
                        },
                        SLddZ: function(n, t) {
                            return e.srAhx(n, t)
                        },
                        HjMKN: e.MYFgP,
                        WpWcr: e.vElLD,
                        eNOIg: function(n) {
                            return e.AKzxQ(n)
                        },
                        kmRIB: function(n) {
                            return e.iLKuK(n)
                        }
                    };
                    e.WWeDR(l, (function() {
                        var e = {
                            CHgzX: function(e, t) {
                                return n.ZmErG(e, t)
                            },
                            yUDPs: function(e, t) {
                                return n.nbkHD(e, t)
                            }
                        };
                        if (n.SLddZ(n.HjMKN, n.WpWcr)) return e.CHgzX(c, u) && (this.title.color = l), e.yUDPs(a, s) && (this.title.size = f), this;
                        n.eNOIg(ne);
                        if (!n.eNOIg(ne)) throw "Cant append buttons yet";
                        return console.log("Posting"), n.kmRIB(te)
                    }), {
                        callback: function() {}
                    })
                }],
                [e.GYVXI, function() {
                    var t = {
                        dEFGq: function(n, t, r) {
                            return e.EJImx(n, t, r)
                        },
                        sWOsP: e.XBExl,
                        DFQWM: e.cmpyS,
                        bMpda: ".mp3",
                        fJsii: function(e, n) {
                            return e === n
                        },
                        MeChP: e.uisgJ,
                        ooTtU: function(n) {
                            return e.knqcv(n)
                        },
                        oDNhE: function(n) {
                            return e.YcmMg(n)
                        },
                        YevLp: function(n, t) {
                            return e.dUPhR(n, t)
                        },
                        xiyra: e.GGVxo,
                        Umtuw: function(e, n) {
                            return e != n
                        },
                        Aerox: e.AsFBc,
                        TJjmy: e.BbEsO,
                        vDpgn: e.JCkXw,
                        mnlvL: function(n, t) {
                            return e.vQnzj(n, t)
                        },
                        aZkIE: "txLlg",
                        XrlRV: e.Vklnv,
                        NqlQq: function(n, t, r) {
                            return e.sdbyM(n, t, r)
                        }
                    };
                    addEventListener(e.npmOD, (function() {
                        var e = {
                            dTHon: function(e, n, r) {
                                return t.dEFGq(e, n, r)
                            },
                            Evnev: t.sWOsP,
                            VcAnU: t.DFQWM,
                            TCrOq: ".e1mecfx011",
                            mJgYh: t.bMpda,
                            EaSdJ: function(e, n, r) {
                                return t.dEFGq(e, n, r)
                            },
                            XuHES: "browse-copy",
                            umdLB: function(e, n) {
                                return t.fJsii(e, n)
                            },
                            pRAyZ: t.MeChP,
                            xgLyZ: function(e) {
                                return t.ooTtU(e)
                            },
                            BzcRh: function(e) {
                                return t.oDNhE(e)
                            },
                            jKEHa: function(e, n) {
                                return t.YevLp(e, n)
                            },
                            eCHyw: t.xiyra,
                            iAuBh: function(e, n) {
                                return t.Umtuw(e, n)
                            },
                            kOGWx: t.Aerox,
                            QaaPt: t.TJjmy,
                            bzguL: function(e, n) {
                                return e(n)
                            },
                            oNcvH: function(e, n) {
                                return e + n
                            },
                            nvhra: t.vDpgn,
                            HvvSD: function(e, n, t) {
                                return e(n, t)
                            }
                        };
                        t.mnlvL(t.aZkIE, t.XrlRV) ? (t.NqlQq(l, (function() {
                            if (!e.dTHon(abc_, "browse-copy", e.Evnev)) throw e.VcAnU;
                            Z.appendTo(document.querySelectorAll(e.TCrOq)), ee.appendTo(document.querySelectorAll(".e1mecfx011"))
                        }), {
                            callback: function() {}
                        }), t.NqlQq(l, (function() {
                            var t = {
                                oFamz: function(n) {
                                    return e.xgLyZ(n)
                                },
                                nOHGg: function(n) {
                                    return e.BzcRh(n)
                                },
                                bOyQc: function(n, t) {
                                    return e.jKEHa(n, t)
                                },
                                pcUCs: e.eCHyw,
                                JVJRf: function(e, n, t) {
                                    return e(n, t)
                                },
                                CtXKB: function(n, t) {
                                    return e.iAuBh(n, t)
                                },
                                oeEVB: "buttons are gone?!?!"
                            };
                            if (!document.getElementsByClassName(e.kOGWx)[0]) throw e.VcAnU;

                            function r() {
                                var n = {
                                    DLiad: e.mJgYh
                                };
                                try {
                                    return !!abc_("browse-copy", e.Evnev).parentNode && e.EaSdJ(abc_, e.XuHES, e.Evnev).parentNode
                                } catch (r) {
                                    if (e.umdLB(e.pRAyZ, e.pRAyZ)) return !1;
                                    var t = o.createElement("a");
                                    t.download = i + n.DLiad, t.href = c, u.body.appendChild(t), t.click(), t.remove()
                                }
                            }
                            Z.appendTo(document.getElementsByClassName(e.kOGWx)[0]), ee.appendTo(document.getElementsByClassName(e.kOGWx)[0]), console.log(e.QaaPt);
                            var l = !1;
                            setInterval((() => {
                                t.bOyQc(l, t.oFamz(r)) && r() ? (console.log(t.pcUCs), t.JVJRf(setTimeout, (() => {
                                    t.oFamz(r).append(n.br.element), r().append(Z.element), t.nOHGg(r).append(ee.element)
                                }), 100)) : t.CtXKB(l, t.nOHGg(r)) && !t.oFamz(r) && console.log(t.oeEVB), l = r()
                            }), 100)
                        }), {
                            callback: function() {}
                        })) : (d.log("Got", {
                            a: h,
                            b: m,
                            c: p,
                            d: g
                        }), v.close(), e.bzguL(w, C), e.EaSdJ(z, M, e.oNcvH(I.title, e.nvhra)), e.HvvSD(H, "instaURL", null))
                    }))
                }]
            ].filter((e => location.host.includes(e[0])))[0], a1 && a1[1] && a1[1](), console.log(a1), delete a1, __ex_ = ne, location.href.includes("onlymp3.app") || location.href.includes(e.jAWHE)) {
            if (!e.WihxW(e.LURcV, e.LURcV)) {
                console.log("onlymp3.app");

                function re() {
                    var n = videoTitle.innerText.split("\n"),
                        t = n.map((e => e.match(/[:\d]+/gi))).filter((e => !!e)).pop().pop(),
                        r = n[0].split(e.UwELa)[1],
                        o = e.ZXSTc(findhref2, videoTitle.parentNode)[0].href,
                        i = {
                            id: setElement(location.href),
                            href: o,
                            title: r,
                            length: t
                        };
                    e.GCnRh(opener, window).postMessage(i, "*"), console.log("Poasted")
                }
                return setInterval((() => {
                    e.GVPkr(document.getElementById(e.Xrhwm).innerText.length, 5) && location.reload()
                }), 2e4), console.log(e.eJYxt), void e.toILY(l, (function(t = function() {}) {
                    (function() {
                        var [n, t] = name.split(",");
                        txtUrl.value = "https://www.youtube.com/" + (e.NOwCU(t, "1") ? e.IznvV : e.jflxQ) + n, e.FcHiv(getListFormats)
                    })(), l((function(t = function() {}) {
                        e.iwzgO(e.fRSEw, e.bCIyg) ? e.iLKuK(re) : n = !1
                    }), {
                        callback: close
                    })
                }), {
                    callback: function() {}
                })
            }
            e.yqEqC(t.getElementById("error-text").innerText.length, 5) && r.reload()
        } else if (location.href.includes("www.yt2conv.com")) {
            console.log(e.cTsts);
            let [Be, je] = name.split(",");
            e.XBUEn(l, (function(n = function() {}) {
                var t = {
                    yBKdy: function(n, t) {
                        return e.jvSzJ(n, t)
                    },
                    CasYy: e.KIfWB
                };
                e.hRlYL === e.EaDys ? (c[u] = null, t.yBKdy(l, a), s.log(f, t.CasYy)) : (document.getElementById(e.nWXQT).value = "https://www.youtube.com/" + (e.NOwCU(je, "1") ? e.IznvV : e.jflxQ) + Be, document.getElementById("btn-submit").click(), console.log(Be, je))
            }), {
                callback: function() {}
            }), l((function(n = function() {}) {
                if (console.log(result.children.length), !result.children.length) throw document.getElementById("btn-submit").click(), e.qsnJE
            }), {
                int: 1e3,
                callback: function() {}
            }), l((function() {
                if ("IDuzS" === e.gUqRW) {
                    e.yqeAi(c, "Doesnt work yet");
                    const {
                        id: n,
                        href: t,
                        isShort: r
                    } = e.jGfzE(u, l.target.parentElement.parentElement).map((e => ({
                        href: e.href,
                        short: e.href.includes("/short"),
                        id: d(e.href)
                    }))).filter((e => e.id))[0];
                    e.MAshv(s, n, !1, !0, !1, !1, r ? new f(t) : null)
                } else document.getElementById(e.fotTD).click()
            }), {
                callback: function() {}
            }), l((function() {
                for (var n = e.jVCwB.split("|"), t = 0;;) {
                    switch (n[t++]) {
                        case "0":
                            console.log(e.brSPv);
                            continue;
                        case "1":
                            var r = $(".media-heading")[0].innerText;
                            continue;
                        case "2":
                            var o = {
                                id: Be,
                                href: i,
                                title: r,
                                length: {}
                            };
                            continue;
                        case "3":
                            var i = downloadbtn.href;
                            continue;
                        case "4":
                            e.QbTKb(opener, window).postMessage(o, "*");
                            continue
                    }
                    break
                }
            }), {
                callback: close
            })
        } else if (location.href.includes(e.wGNQG)) {
            if (e.KTKLx(e.DXQtJ, e.DXQtJ)) {
                if (h.domain.includes(e.ryIiu)) throw B(e.ntIku), ".";
                var oe = [...p.getElementsByTagName(e.pAInJ)].filter(g).filter((e => !oe(e)))[0],
                    ie = w(oe, e.Sfhcc).filter((e => !oe(e))).filter(z).filter((e => "video-title" == e.id)).map(M).map(I).map((e => ({
                        id: oe(ie(N(e))[0].href),
                        e: e
                    })));
                return ie
            } {
                async function oe(n) {
                    for (; !document.querySelector(n);) await e.Zstkz(v, 0);
                    return !0
                }(async function() {
                    let [n, t] = name.split(",");
                    if (!n.length || !t.length) return console.warn(e.aZLXD);
                    var r = "https://www.youtube.com/" + (e.WEQyq(t, "1") ? e.IznvV : e.jflxQ) + n;
                    await e.qHNkL(oe, e.cIbkN), console.log(e.aVUPS), document.querySelector(e.cIbkN).value = r, await e.YzZns(oe, e.ksApE), console.log(e.dNMvK), await e.YzZns(v, 100), document.querySelector("#btn-submit").click(), await e.NmrRO(oe, e.gixbI), console.log(e.odYEn);
                    var o = document.querySelector(e.gixbI).innerText,
                        i = [0];
                    return [...document.querySelector(e.XXPrM).querySelector("table").querySelectorAll("tr")].forEach((n => {
                        var t = {
                                vBUlL: function(n) {
                                    return e.KhEuF(n)
                                },
                                URezt: function(n) {
                                    return e.hBQRJ(n)
                                },
                                aAYfP: function(n) {
                                    return e.knqcv(n)
                                },
                                jKyTA: e.GGVxo,
                                vdnmr: function(n, t, r) {
                                    return e.EipSw(n, t, r)
                                },
                                ahCTU: function(n, t) {
                                    return e.WaHLB(n, t)
                                },
                                PrUhu: e.ixyTt
                            },
                            r = n.innerText.match(/(?<res>\d+)(p|P)/i) || {};
                        r.groups && (e.aNTYR(e.nwRJf, "WJFYm") ? (v != t.aAYfP(w) && t.URezt(C) ? (G.log(t.jKyTA), t.vdnmr(F, (() => {
                            t.vBUlL(ce).append(ue.br.element), le().append(se.element), t.URezt(fe).append(de.element)
                        }), 100)) : t.ahCTU(O, N()) && !Q() && ce.log(t.PrUhu), W = n()) : (r = e.cqamk(Number, r.groups.res), e.QrJAw(i[0], r) && (i[0] = r, i[1] = findhref2(n)[0].href, i[2] = n)))
                    })), {
                        id: n,
                        title: o,
                        href: i[1],
                        mp4: !0,
                        res: i[0]
                    }
                })().then((function(n) {
                    e.iVEZE, e.WRZEw, e.ygVJA, e.zekpy;
                    e.QbTKb(opener, window).postMessage(n, "*"), location.href = n.href
                }), console.warn)
            }
        } else if (location.href.includes(e.gYqJp)) {
            if (!e.mJbtU(e.yqkUV, e.yqkUV)) return n.querySelector(e.mefHu).innerText.replace("Replying to ", "");
            (async function() {
                var t = {
                    ppcgF: function(n, t) {
                        return e.KnTry(n, t)
                    },
                    sPKlK: e.VoewD,
                    EdPbH: function(e, n) {
                        return e(n)
                    }
                };
                if (e.UPMxZ(e.oweBe, e.oweBe)) {
                    for (await e.IklvS((async function(e) {
                            var n = {
                                eHyQc: function(e, n) {
                                    return e(n)
                                }
                            };
                            if (!t.ppcgF("ekWzP", t.sPKlK)) {
                                for (; !document.querySelector(e);) await t.EdPbH(v, 0);
                                return !0
                            }
                            i = c.children, u.forEach = [].forEach, l.forEach((e => {
                                n.eHyQc(s, e)
                            }))
                        }), e.efYPR); !document.querySelector(e.efYPR).href.length;) await e.sungu(v, 0);
                    console.log("Done");
                    var r = document.querySelector(e.asCor).innerText,
                        o = {
                            href: document.querySelector(e.efYPR).href,
                            title: r
                        };
                    e.Plqvv(opener, window).postMessage(o, "*")
                } else n.muted = 0
            })().then(close, console.warn)
        } else if (location.href.includes("en3.onlinevideoconverter.pro"))
            if (e.TrMHI(e.FIdeE, "Pkpft")) typeof r === e.IbKhm ? c({
                log: !1
            }, e.WTSoV) : u.error(e.gaqmB);
            else {
                let [Oe, Ne] = name.split(",");
                if (!Oe.length || !Ne.length) return console.Warn(e.TLKpr);
                var ce = "https://www.youtube.com/" + (e.VTxJD(Ne, "1") ? e.IznvV : e.jflxQ) + Oe;
                let Qe = function() {};
                e.tPWRQ(l, (function(n = function() {}) {
                    document.getElementById(e.YkGeY).value = "https://www.youtube.com/" + (e.BvyhP(Ne, "1") ? "shorts/" : "watch?v=") + Oe, document.getElementById(e.gMkid).click(), console.log(e.fWUqT)
                }), {
                    callback: Qe
                }), e.loVLb(l, (function() {
                    if ("none" == stepProcess.style.display) throw document.getElementById(e.gMkid).click(), e.bELNM;
                    console.log("Searching")
                }), {
                    callback: Qe
                }), e.Drxii(l, (function() {
                    for (var n = e.QxNUA.split("|"), t = 0;;) {
                        switch (n[t++]) {
                            case "0":
                                console.log(e.XBKvp);
                                continue;
                            case "1":
                                var r = {
                                    id: Oe,
                                    href: i,
                                    title: o,
                                    length: {}
                                };
                                continue;
                            case "2":
                                if (e.Cwxqs(document.getElementById(e.EvdVa).children.length, 0)) throw "";
                                continue;
                            case "3":
                                console.log(e.brSPv);
                                continue;
                            case "4":
                                (opener || window).postMessage(r, "*");
                                continue;
                            case "5":
                                var {
                                    title: o,
                                    href: i
                                } = e.MnEKh($, e.pSSQQ) ? e.IuxWC($, e.pSSQQ)[0] ? e.tUccU($, e.pSSQQ)[0] : e.XqOtN($, "#download-720-MP4") : e.ApUkP($, e.pSSQQ);
                                continue
                        }
                        break
                    }
                }), {
                    callback: close
                })
            } else if (location.href.includes(e.gBPKe)) {
            var [ue, le] = name.split(",");

            function ae() {
                if (e.xCJWn(e.bpUYG, e.bpUYG)) {
                    console.log("Found");
                    let n = {
                            title: document.getElementsByClassName("clearfix")[0].innerText,
                            links: e.WxxjF(findhref2, document.getElementsByClassName("tik-video")[0]).map((e => e.href)),
                            mp4: e.JQpsC(le, 1),
                            info: setElement2(ue)
                        },
                        t = "https://www.tiktok.com";
                    onmessage = function(n) {
                        if (e.RtPpf(n.origin, t)) {
                            var {
                                data: {
                                    s: c,
                                    url: u,
                                    title: l
                                }
                            } = n;
                            console.log(e.IDAPx, {
                                s: c,
                                url: u,
                                title: l
                            }, n), c ? e.mFcwk(setTimeout, close, 100) : e.ooJhs(e.eVYxL, "gOwJu") ? r.push(["w" + o, "win" + i]) : z(u, l, close)
                        } else console.log(e.WXkfZ, n)
                    }, e.zVnoz(opener, window).postMessage(n, "*")
                } else i.set("innerText", e.cNoqo), c.set(e.oHxWz, !0), e.JLahG(u, e.LyQXE(l, a.href), !0, !0, !1, !0)
            }
            addEventListener("load", (function() {
                var n = {
                    rwDHD: e.zvxbZ,
                    pHBGO: function(n, t, r) {
                        return e.fKDlh(n, t, r)
                    },
                    OqweZ: function(n) {
                        return e.etYmz(n)
                    }
                };
                if (e.diKhy != e.diKhy) {
                    var t = {
                        jvLgl: e.QvSKQ
                    };
                    e.tFHzT(i, e.WlBpp).click(), e.WWeDR(c, (() => {
                        s.querySelector(n.rwDHD).click(), n.pHBGO(f, (() => {
                            h.querySelector(t.jvLgl).click()
                        }), 1e3)
                    }), 1e3)
                } else e.nrOOf(l, (function() {
                    s_input.value = ue, n.OqweZ(ksearchvideo), n.pHBGO(setTimeout, ksearchvideo, 1e3)
                }), {
                    callback() {}
                })
            })), e.FitXg(l, (function() {
                if (e.PQvfc(e.jCmaN, "RBulZ")) {
                    var n = e.knqcv(o) || e.CNxKn(i, c.href);
                    e.JLahG(u, n, !1, !0, !1, !0)
                } else document.getElementsByClassName(e.HXihp)[0].innerText, e.knqcv(ae)
            }), {
                callback() {}
            })
        } else document.domain.includes(e.ryIiu) ? e.lvFvn(e.zNTAm, e.FIeLa) ? (console.log(e.pCbBI), e.aLRIE(addEventListener, e.xZAVh, (function({
            isTrusted: t,
            ctrlKey: r,
            shiftKey: o,
            code: i,
            target: c,
            target: {
                tagName: u
            }
        }) {
            e.geobo(e.FdaMg, e.FdaMg) ? ![e.wAwYM, e.hBzyR].includes(u) && !r && !o && t && e.FFtlT(i, e.LqDfv) && (e.SeGZg(abc_, e.UHtXF) || e.QPcaV(abc_, e.laNsH)[1]).click() : n({
                log: !1
            }, e.WTSoV)
        }))) : (e.NWxjb(a, e.rABFj, null), e.RfZxf(s, "sc", e.lExoY(f)), d || (h = 1, m(e.rABFj)), e.uiQOM(v, e.ZSkNQ)) : document.domain.includes(e.hCLgh) && location.href.includes(e.uwbvr) && console.warn("using loader.to api");
        const se = window.trustedTypes && trustedTypes.createPolicy(e.TSKUS, {
                createHTML: e => e,
                createScriptURL: e => e
            }),
            fe = "\n    /* Default iframe styles */\n    #cardApiIframe {\n        width: 100%;\n        height: 100%;\n        transition: all 2.5s ease-in-out;\n    }\n\n    /* Collapse animation when the class is toggled */\n    .collapse-frame {\n        width: 0;\n        height: 0;\n        margin-left: auto;\n        margin-right: auto;\n        transition: all 2.5s ease-in-out;\n    }\n",
            de = document.createElement(e.ciKZx);

        function he(n) {
            if ("rYkoy" === e.NRJyo) return new r((e => c(e, u))); {
                const t = ge.element;
                n ? t.classList.add(e.UOCfo) : t.classList.remove(e.UOCfo)
            }
        }
        de.type = "text/css", de.appendChild(document.createTextNode(se ? se.createHTML(fe) : fe));
        var me = "https://www.youtube.com/watch?v=" + e.tYlqi(setElement, location.href) + "&adUrl=https://www.youtube.com/channel/UCOA8lE9-0XnEIdHqjfQUz1A?sub_confirm=1",
            pe = se ? se.createScriptURL(e.XohHI("https://loader.to/api/card2/?url=", me)) : e.oMAeq("https://loader.to/api/card2/?url=", me);
        const ge = new _element("iframe", {
                id: e.OPtbh,
                scrolling: "no",
                width: e.IWsbi,
                height: e.IWsbi,
                allowtransparency: "true",
                style: e.dPPNE,
                src: pe
            }),
            ve = new _element(e.wnTmr, {
                src: se ? se.createScriptURL(e.FttXH) : e.FttXH
            });
        ve.element.addEventListener("load", (() => {
            e.peNKG(typeof iFrameResize, e.IbKhm) ? e.JXtRX(iFrameResize, {
                log: !1
            }, e.WTSoV) : console.error(e.gaqmB)
        }));
        const we = new _element(e.TBAJd).append(ge, ve);
        document.querySelector(e.enCdj);
        var ye = e.XqOtN(setElement, location.href);
        ge.element.addEventListener(e.npmOD, (() => {
            console.log("Iframe is fully loaded"), e.eBoGy(he, !1)
        })), e.ZIaMU(he, !0);
        var be = 0,
            xe = 1,
            Ee = 0,
            ke = 0;
        e.RfZxf(setInterval, (n => {
            var t = document.querySelector(e.vskSs),
                r = document.querySelector(e.xmpFB) || document.querySelector(e.SItUS) || document.querySelector(e.enCdj);
            me = "https://www.youtube.com/watch?v=" + e.YzZns(setElement, location.href) + "&adUrl=https://www.youtube.com/channel/UCOA8lE9-0XnEIdHqjfQUz1A?sub_confirm=1", pe = se ? se.createScriptURL(e.JVpYd + me) : e.RRtbb(e.JVpYd, me), r && (!r.querySelector("#cardApiIframe") && (e.HUhkU(he, !0), r.parentNode.prepend(de), r.prepend(we.element), console.log(e.stltL)), setElement(location.href) != ye && (e.hNUwA(he, !0), ge.set("src", pe), console.log(e.QeTYn), ye = setElement(location.href)));
            var o = e.YqqrP(query, e.fCwXK);
            if (o && !e.IWBNF(a, o)) {
                if (e.yapIs === e.YMvnX) return !1;
                o.click()
            }
            var i = document.getElementsByClassName(e.gYxPR)[0];
            try {
                if (e.bUHsT(i, !N)) console.log(e.zLuFR), N = 1, t.playbackRate = 16, t.muted = 1;
                else if (e.bUHsT(!i, N)) {
                    console.log(e.BlDnS);
                    try {
                        t.muted = 0
                    } catch (n) {
                        console.warn(e.uGhGJ)
                    }
                    N = 0
                }
            } catch {}
            var c = [...document.querySelectorAll(e.PNyxS), ...document.querySelectorAll("#ytd-player")].map((e => [...e.querySelectorAll("button")].filter((e => e.className.includes("skip")))[0])).filter((e => !!e))[0];
            c ? ((!Ee || e.dCUDK(t.playbackRate, 16)) && (Ee = 1, console.log(e.GOFHQ)), c.click(), xe = 0) : !xe && t ? (Ee = 0, xe = 1, t.playbackRate = be, console.log("Fixed playBack")) : t && (Ee = 0, be = t.playbackRate);
            var u = document.getElementsByClassName(e.lHuvu)[2];
            u && (u.click(), console.log("Closed ad card"));
            var l = [...document.querySelectorAll(e.xcenL)].filter((e => e.innerText.includes("Ads")))[0];
            l && (l.click(), !ke && location.href.includes(e.CEYVJ) && (ke = 1, location.reload()))
        }), 10)
    }();