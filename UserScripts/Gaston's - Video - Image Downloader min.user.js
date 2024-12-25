// ==UserScript==
// @name Gaston's - Video/Image Downloader
// @namespace http://tampermonkey.net/
// @version 7.9
// @supportURL https://your-support-page.com
// @homepageURL https://greasyfork.org/en/users/689441-gaston2
// @description Instagram/Twitch/YouTube/TikTok Video/Audio Downloader (frequently updated)
// @author gaston1799
// @match *://www.youtube.com/*
// @match *://production.assets.clips.twitchcdn.net/*
// @match *://www.instagram.com/*
// @match *://music.youtube.com/*
// @match *://y2mate.nu/*
// @match *://www.twitch.tv/*
// @match *://snapinsta.app/*
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
// @name:pt Gaston's - Downloader de vídeo/imagem
// @name:ar Gaston's - Video/Image Downloader
// @name:zh Gaston's - Video/Image Downloader
// @name:ru Gaston's - Video/Image Скачатель
// @name:fr Gaston's - téléchargeur vidéo / image
// @name:de Gaston's - Video/Image Downloader
// @name:en Gaston's - Video/Image Downloader
// @name:es Gaston's - Video/Image Descarger
// @name:hi गैस्टन - वीडियो/छवि डाउनलोडर
// @name:ja Gaston's -Video/Image Downloader
// @name:it Gaston's - Downloader di video/immagine
// @name:ko Gaston 's- 비디오/이미지 다운로더
// @name:tr Gaston's - Video/Resim İndirici
// @name:vi Gaston's - Trình tải xuống video/hình ảnh
// @name:uk GASTON'S - Відео/зображення завантажувача
// @name:ro Gaston's - descărcător video/imagini
// @name:pl Gaston - pobierca wideo/obrazu
// @name:nl Gaston's - Video/Image Downloader
// @name:id Gaston's - Video/Image Downloader
// @name:th Gaston's - Video/Image Downloader
// @name:cs Gaston's - Video/Image Downloader
// @name:he Gaston's - הורדת וידאו/תמונה
// @name:bg Gaston's - видео/изтегляне на изображения
// @name:fi Gaston's - Video/kuvan lataaja
// @name:hu Gaston's - Videó/kép letöltő
// @name:el Gaston's - Video/Image Downloader
// @name:sk Gaston's - Video/Image Downloader
// @name:sv Gaston's - Video/Image Downloader
// @name:no Gaston's - Video/Image Downloader
// @name:da Gastons - Video/Image Downloader
// @description:ar Instagram/twitch/youtube/tiktok video/audio downloader (تم تحديثه بشكل متكرر)
// @description:zh Instagram/Twitch/YouTube/TikTok Video/Audio Downloader (frequently updated)
// @description:es Instagram/Twitch/YouTube/Tiktok Video/Audio Descarger (frecuentemente actualizado)
// @description:pt Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (atualizado com frequência)
// @description:fr Instagram / twitch / youtube / tiktok vidéo / téléchargeur audio (fréquemment mis à jour)
// @description:ru Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (часто обновляется)
// @description:ja Instagram/Twitch/YouTube/Tiktokビデオ/オーディオダウンローダー（頻繁に更新）
// @description:en Instagram/Twitch/YouTube/TikTok Video/Audio Downloader (frequently updated)
// @description:de Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (häufig aktualisiert)
// @description:hi Instagram/Twitch/YouTube/Tiktok वीडियो/ऑडियो डाउनलोडर (अक्सर अपडेट किया गया)
// @description:id Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (sering diperbarui)
// @description:ko Instagram/Twitch/YouTube/Tiktok 비디오/오디오 다운로더 (자주 업데이트)
// @description:uk Instagram/twitch/youtube/tiktok відео/аудіо завантажувач (часто оновлений)
// @description:pl Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (często aktualizowany)
// @description:th Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (อัปเดตบ่อยครั้ง)
// @description:nl Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (vaak bijgewerkt)
// @description:tr Instagram/Twitch/YouTube/Tiktok Video/Ses Downloader (sıklıkla güncellendi)
// @description:it Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (frequentemente aggiornato)
// @description:vi Instagram/twitch/youtube/tiktok video/trình tải xuống âm thanh (thường xuyên được cập nhật)
// @description:ro Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (actualizat frecvent)
// @description:hu Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (gyakran frissítve)
// @description:sv Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (ofta uppdaterad)
// @description:da Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (ofte opdateret)
// @description:sk Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (často aktualizované)
// @description:el Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (συχνά ενημερωμένο)
// @description:no Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (ofte oppdatert)
// @description:he אינסטגרם/טוויץ '/YouTube/Tiktok וידאו/הורדת שמע (מעודכן לעתים קרובות)
// @description:bg Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (често актуализиран)
// @description:cs Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (často aktualizováno)
// @description:fi Instagram/twitch/youtube/tiktok video/äänen lataus (päivitetty usein)
// @license MIT
// ==/UserScript==
! function() {
    ! function() {
        "use strict";
        const e = "feedbackPromptLastDate",
            t = "isFirstTimeKey";
        async function n() {
            const t = function() {
                if ("undefined" != typeof GM_info && GM_info.scriptUpdateURL) {
                    const e = GM_info.scriptUpdateURL.match(/\/scripts\/(\d+)\//);
                    if (e && e[1]) return e[1]
                }
                return console.error("Script ID not found in the update URL."), null
            }();
            if (t) {
                const n = `https://greasyfork.org/en/scripts/${t}/feedback`;
                confirm("Are you enjoying this script? Would you like to provide feedback?") && window.open(n, "_blank"), await GM.setValue(e, Date.now())
            }
        }!async function() {
            const o = await GM.getValue(t, !0),
                l = await GM.getValue(e, Date.now());
            Date.now() - l > 12096e5 && (n(), o && GM.setValue(t, !1)), console.log("FirstTime:", o)
        }()
    }(),
    function() {
        Object.assign(this || arguments[0], {
            CustomLog: class {
                constructor(e) {
                    this.title = {
                        body: e || "---",
                        color: "darkgrey",
                        size: "1rem"
                    }, this.body = {
                        color: "#008f68",
                        size: "1rem"
                    }
                }
                setTitleBody(e) {
                    return this.title.body = e, this
                }
                setTitleStyle({
                    color: e,
                    size: t
                }) {
                    return void 0 !== e && (this.title.color = e), void 0 !== t && (this.title.size = t), this
                }
                setBodyStyle({
                    color: e,
                    size: t
                }) {
                    return void 0 !== e && (this.body.color = e), void 0 !== t && (this.body.size = t), this
                }
                log(e = "") {
                    console.log(`%c${this.title.body} | %c${e}`, `color: ${this.title.color}; font-weight: bold; font-size: ${this.title.size};`, `color: ${this.body.color}; font-weight: bold; font-size: ${this.body.size}; text-shadow: 0 0 5px rgba(0,0,0,0.2);`)
                }
            }
        })
    }(top);
    const logger = new CustomLog("Script Logger"),
        consoleLogOriginal = console.log;

    function downloadFileAsTitle(e, t) {
        const n = document.createElement("a");
        n.href = e, n.download = t, document.body.appendChild(n), n.click(), document.body.removeChild(n)
    }
    console.log = function(...e) {
        const t = e.some((e => "object" == typeof e && null !== e));
        let n = "Anonymous";
        try {
            throw new Error
        } catch (e) {
            if (e.stack) {
                const t = e.stack.split("\n");
                if (t.length >= 3) {
                    const e = t[2].match(/at\s+(.*?)\s*\(/);
                    n = e && e[1] ? e[1] : "Anonymous"
                }
            }
        }
        if (t) consoleLogOriginal(`og:[${n}]`, ...e);
        else {
            const t = e.map((e => String(e))).join(" ");
            logger.log(`[${n}]`, t)
        }
    };
    var sleep = e => new Promise((t => setTimeout(t, e)));
    console.log("ok");
    var CurrentPlayingSymbol = "▶",
        adev, set_;

    function getV(e, t) {
        return GM_getValue(e) || (GM_setValue(e, t), t)
    }

    function setV(e, t) {
        GM_setValue(e, t)
    }
    async function getFinalUrlFromServer(e) {
        try {
            const t = await fetch("http://localhost:3000/get-final-url", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    url: e
                })
            });
            if (!t.ok) throw new Error("Failed to fetch final URL");
            return (await t.json()).finalUrl
        } catch (e) {
            return console.error("Error:", e), null
        }
    }

    function getCurrentVideoID() {
        var e;
        return [...document.getElementsByClassName("ytp-video-menu-item ytp-button")].forEach(((t, n) => {
            t.innerText.startsWith(CurrentPlayingSymbol) && (e = new URL(t.href).searchParams.get("v"))
        })), !e && document.getElementsByClassName("ytp-playlist-menu-button ytp-button")[0] ? (console.log("Opening"), document.getElementsByClassName("ytp-playlist-menu-button ytp-button")[0].click(), getCurrentVideoID()) : e ? (console.log("Closiung"), document.getElementsByClassName("ytp-playlist-menu-button ytp-button")[0].click(), e) : console.warn("Not Found!")
    }

    function sleep(e) {
        return new Promise((t => setTimeout(t, e)))
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
        async function e(e, t = 3e4) {
            var n;
            for (sleep(t).then((e => n = !0)); !document.querySelector(e) && (await sleep(0), !n););
            return document.querySelector(e)
        }
        return location.href.includes("/embed/") ? (console.log("Attaching to embeder >:]"), e(".ytp-right-controls").then((async e => {
            let t = new _e("button", {
                id: "embedMP3"
            }).appendTo(e).set("innerText", "MP3").on("click", (function() {
                let e = getCurrentVideoID() || setElement(location.href);
                downloadT(e, !1, !0, !1, !0)
            })).style({
                position: "fixed",
                right: "50%",
                top: "80%"
            });
            for (; !document.getElementById("embedMP3") && document.querySelector(".ytp-right-controls");) console.log("Appended"), t.appendTo(".ytp-right-controls")
        }))) : (document.querySelector(".ytp-right-controls"), await e(".playbackSoundBadge__actions", 5e3).then((async t => {
            let n = new _e("button", {
                id: "GetAudio"
            }).appendTo(t).set("innerText", "Download MP3").on("click", (function() {
                downloadSC()
            }), (e => e));
            for (;;) !document.getElementById("GetAudio") && await e(".playbackSoundBadge__actions", 5e3) && await e(".playbackSoundBadge__actions", 5e3).then((e => {
                n.appendTo(e), console.log("Added Button")
            })), await sleep(0)
        })))
    }().then(console.log, console.warn), downloadSC = function() {
        GM_setValue("SCinfo", null), GM_setValue("sc", getSoundCloudUrl()), !set_ && (set_ = 1, GM_addValueChangeListener("SCinfo", (function(e, t, n, o) {
            console.log({
                a: e,
                b: t,
                c: n,
                d: o
            }), n && n.name && _downloadFileAsTitle(n.href, n.name)
        }))), open("https://sclouddownloader.net/")
    }, GM_setValue_ = GM_setValue, GM_getValue_ = GM_getValue, GM_info_ = GM_info;
    var UnmutePath = "M3.15,3.85l4.17,4.17L6.16,9H3v6h3.16L12,19.93v-7.22l2.45,2.45c-0.15,0.07-0.3,0.13-0.45,0.18v1.04 c0.43-0.1,0.83-0.27,1.2-0.48l1.81,1.81c-0.88,0.62-1.9,1.04-3.01,1.2v1.01c1.39-0.17,2.66-0.71,3.73-1.49l2.42,2.42l0.71-0.71 l-17-17L3.15,3.85z M11,11.71v6.07L6.52,14H4v-4h2.52l1.5-1.27L11,11.71z M10.33,6.79L9.62,6.08L12,4.07v4.39l-1-1V6.22L10.33,6.79 z M14,8.66V7.62c2,0.46,3.5,2.24,3.5,4.38c0,0.58-0.13,1.13-0.33,1.64l-0.79-0.79c0.07-0.27,0.12-0.55,0.12-0.85 C16.5,10.42,15.44,9.1,14,8.66z M14,5.08V4.07c3.95,0.49,7,3.85,7,7.93c0,1.56-0.46,3.01-1.23,4.24l-0.73-0.73 C19.65,14.48,20,13.28,20,12C20,8.48,17.39,5.57,14,5.08z",
        mutePath = "M17.5,12c0,2.14-1.5,3.92-3.5,4.38v-1.04c1.44-0.43,2.5-1.76,2.5-3.34c0-1.58-1.06-2.9-2.5-3.34V7.62 C16,8.08,17.5,9.86,17.5,12z M12,4.07v15.86L6.16,15H3V9h3.16L12,4.07z M11,6.22L6.52,10H4v4h2.52L11,17.78V6.22z M21,12 c0,4.08-3.05,7.44-7,7.93v-1.01c3.39-0.49,6-3.4,6-6.92s-2.61-6.43-6-6.92V4.07C17.95,4.56,21,7.92,21,12z";

    function downloadFile_(e, t) {
        const n = document.createElement("a");
        n.href = e, n.download = t, document.body.appendChild(n), n.click(), document.body.removeChild(n)
    }
    _downloadFileAsTitle = async function(e, t, n, o) {
        const l = document.createElement("a");
        return l.style.display = "none", document.body.appendChild(l), fetch(e).then((e => e.blob())).then((i => {
            const c = URL.createObjectURL(i);
            l.href = c, l.download = t, l.target = "_blank", l.click(), URL.revokeObjectURL(c), (n || opener || window).postMessage({
                url: e,
                title: t,
                s: !0
            }, "*"), (typeof o).includes("function") && o()
        })).catch((o => {
            console.error("Error downloading file:", o), (n || opener || window).postMessage({
                url: e,
                title: t,
                s: !1
            }, "*")
        }))
    }, _downloadFile_ = downloadFile_;
    const query = function(e, t) {
        try {
            let o = "undefined" != typeof $ ? $ : document.querySelectorAll;
            return t ? [...document.querySelectorAll(e)].filter((e => !(null === el.offsetParent)))[0] : (n = o(e) ? o(e).length ? o(e)[0] : o(e) : null, Object.keys(n).length ? n : null)
        } catch {}
        var n
    };
    async function downloadVideo(e, t) {
        try {
            const n = await fetch(e);
            if (!n.ok) throw new Error(`HTTP error! Status: ${n.status}`);
            const o = n.url,
                l = await n.blob(),
                i = window.URL.createObjectURL(l),
                c = document.createElement("a");
            c.href = i, c.download = t, document.body.appendChild(c), c.click(), document.body.removeChild(c), window.URL.revokeObjectURL(i), console.log(`Video downloaded from: ${o}`)
        } catch (e) {
            console.error("Failed to download video:", e)
        }
    }
    getElementByAttribute = function(e, t = "aria-label", n = document.body) {
            var o = [];
            return function n(l) {
                l.getAttribute(t) == e ? o.push(l) : l.children.length && ((l = l.children).forEach = [].forEach, l.forEach((e => {
                    n(e)
                })))
            }(n), 1 == o.length ? o[0] : o || !1
        }, get_aria_label = function(e, t = document.body) {
            var n = [];
            return function t(o) {
                o.getAttribute("aria-label") == e ? n.push(o) : o.children.length && ((o = o.children).forEach = [].forEach, o.forEach((e => {
                    t(e)
                })))
            }(t), n[0] || !1
        }, getClass = function(e) {
            return document.getElementsByClassName("ehlq8k34")[0]
        },
        function() {
            class element {
                static get br() {
                    return new element("br")
                }
                constructor(e, t) {
                    this.element = e.constructor.name.includes("HTML") && e || function() {
                        for (let e in arguments[1]) arguments[0].setAttribute(e, arguments[1][e]);
                        return arguments[0]
                    }(document.createElement(arguments[0]), arguments[1])
                }
                style(e) {
                    for (let t in e) this.element.style[t] = e[t];
                    return this
                }
                append(e, ...t) {
                    this.element.append(e.element || e), console.log("T:", {
                        targets: t,
                        fe: t && t.forEach
                    });
                    for (let e = 0; e < t.length; e++) {
                        let n = t[e];
                        console.log("Appending:", {
                            element: n,
                            target: this
                        }), this.element.append(n.element || n)
                    }
                    return this
                }
                appendTo(e) {
                    return (e.element || "string" == typeof e ? document.querySelector(e) : e).append(this.element), this
                }
                on(e, t) {
                    return this.element[`on${e}`] = t, this
                }
                set(e, t) {
                    return this.element[e] = t, this
                }
                remove() {
                    return this.element.remove(), this
                }
                get() {
                    return this.element[arguments[0]]
                }
                get children() {
                    return new class {
                        constructor(e) {
                            for (var t = 0; t < e.length; t += 1) this[t] = e[t];
                            Object.defineProperty(this, "length", {
                                get: function() {
                                    return e.length
                                }
                            }), Object.freeze(this)
                        }
                        item(e) {
                            return null != this[e] ? this[e] : null
                        }
                        namedItem(e) {
                            for (var t = 0; t < this.length; t += 1)
                                if (this[t].id === e || this[t].name === e) return this[t];
                            return null
                        }
                        get toArray() {
                            return [...this]
                        }
                    }([...this.element.children])
                }
            }

            function getTikTokTittle() {
                try {
                    return document.querySelector("#app > div.css-14dcx2q-DivBodyContainer.e1irlpdw0 > div:nth-child(4) > div > div.css-1qjw4dg-DivContentContainer.e1mecfx00 > div.css-1stfops-DivCommentContainer.ekjxngi0 > div > div.css-1xlna7p-DivProfileWrapper.ekjxngi4 > div.css-1u3jkat-DivDescriptionContentWrapper.e1mecfx011 > div.css-1nst91u-DivMainContent.e1mecfx01 > div.css-bs495z-DivWrapper.e1mzilcj0 > div > div.css-1d7krfw-DivOverflowContainer.e1mzilcj5 > h1").innerText.replace("Replying to ", "")
                } catch {
                    try {
                        return document.querySelector("#app > div.css-14dcx2q-DivBodyContainer.e1irlpdw0 > div:nth-child(4) > div > div.css-1qjw4dg-DivContentContainer.e1mecfx00 > div.css-1stfops-DivCommentContainer.ekjxngi0 > div > div.css-1xlna7p-DivProfileWrapper.ekjxngi4 > div.css-1u3jkat-DivDescriptionContentWrapper.e1mecfx011 > div.css-1nst91u-DivMainContent.e1mecfx01 > div.css-bs495z-DivWrapper.e1mzilcj0").innerText.replace("Replying to ", "")
                    } catch (e) {
                        return abc("browse-video-desc", "data-e2e") ? abc("browse-video-desc", "data-e2e").innerText : document.querySelector("#main-content-video_detail > div > div.css-12kupwv-DivContentContainer.ege8lhx2 > div.css-1senhbu-DivLeftContainer.ege8lhx3 > div.css-1sb4dwc-DivPlayerContainer.eqrezik4 > div.css-3lfoqn-DivDescriptionContentWrapper-StyledDetailContentWrapper.eqrezik15 > div.css-r4nwrj-DivVideoInfoContainer.eqrezik3 > div.css-bs495z-DivWrapper.e1mzilcj0 > div > h1").innerText.replace("Replying to ", "")
                    }
                }
            }

            function sk() {
                get_aria_label("Why this ad?").click(), setTimeout((() => {
                    document.querySelector("#yDmH0d > c-wiz > div > div > div:nth-child(2) > div.LLEp8b > div > div.rTq3hb > div:nth-child(1) > div > div.ofmULb > div:nth-child(2) > div > button").click(), setTimeout((() => {
                        document.querySelector("#VGHGFf > div > div.Eddif > div:nth-child(2) > button > div.VfPpkd-RLmnJb").click()
                    }), 1e3)
                }), 1e3)
            }
            _element = _e = element, setElement2 = function(e) {
                return e.match(/(?<host>https?\:\/\/www\.tiktok\.com)\/(?<username>@[^\/]+)\/video\/(?<videoID>\d+)/i).groups
            };
            var Porigin = "https://onlymp3.app",
                Ppath = "/watch?=";

            function ad(e, t, n = !1) {
                var o = addEventListener(e, ((...e) => {
                    t(...e), n && removeEventListener(o)
                }), !0);
                return o
            }

            function isElementInViewport(e) {
                "function" == typeof jQuery && e instanceof jQuery && (e = e[0]);
                var t = e.getBoundingClientRect();
                return t.top >= 0 - (window.innerHeight || document.documentElement.clientHeight) / 2 && t.left >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight) + (window.innerHeight || document.documentElement.clientHeight) / 2 && t.right <= (window.innerWidth || document.documentElement.clientWidth)
            }

            function tF(e, {
                callback: t,
                int: n
            }) {
                !t && (t = function() {}), !n && (n = 100), console.log({
                    f: e,
                    callback: t,
                    int: n
                });
                try {
                    return e(), void t()
                } catch (e) {}
                var o = setInterval((() => {
                    try {
                        e(), t(), clearInterval(o)
                    } catch (e) {}
                }), n || 100);
                return o
            }

            function isHidden(e) {
                return null === e.offsetParent
            }

            function parent(e) {
                return e.parentNode
            }

            function GP() {
                return get_aria_label("Go back") && get_aria_label("Go back").click ? get_aria_label("Go back") : document.querySelector("._afxv")
            }

            function GN() {
                return get_aria_label("Next") && get_aria_label("Next").click ? get_aria_label("Next") : document.querySelector("._afxw")
            }

            function getTitle() {
                try {
                    return document.querySelector("div.x78zum5.xdt5ytf.x1iyjqo2.xs83m0k.x2lwn1j.x1odjw0f.x1n2onr6.x9ek82g.x6ikm8r.xdj266r.x11i5rnm.x4ii5y1.x1mh8g0r.xexx8yu.x1pi30zi.x18d9i69.x1swvt13 > ul > div:nth-child(3) > div > div").children[0].innerText.split("\n")[1]
                } catch {
                    return [...document.querySelectorAll(".xt0psk2.xvs91rp.xo1l8bm.x5n08af.x18hxmgj")].pop().innerText.split("\n")[0]
                }
            }

            function DIV() {
                if (location.href.includes("reel")) {
                    let t = open("https://fastdl.app/en", location.href, "width=400,height=500");
                    var e = GM_addValueChangeListener("instaURL", (function(n, o, l, i) {
                        l && (console.log("Got", {
                            a: n,
                            b: o,
                            c: l,
                            d: i
                        }), t.close(), GM_removeValueChangeListener(e), downloadFile_(l, document.title + ".mp4"), GM_setValue("instaURL", null))
                    }))
                }
            }
            async function DII_() {
                for (var e = e => new Promise((t => setTimeout(t, e))), t = new Set, n = {}; GP();) {
                    if (await e(100), !GP()) {
                        await e(1e3);
                        break
                    }
                    GP().click()
                }[...getInstalImages()].forEach((e => {
                    let n = findhref2(e, "img")[0];
                    t.add([n.src, n.getAttribute("alt")])
                })), GN().click();
                try {
                    GN().click()
                } catch (e) {}
                for (; GN();) {
                    await e(300), [...getInstalImages()].forEach((e => {
                        let n = findhref2(e, "img")[0];
                        t.add([n.src, n.getAttribute("alt")])
                    }));
                    try {
                        GN().click()
                    } catch (e) {}[...t].length
                }
                for (; await e(100), GP();) GP().click();
                [...t].forEach((e => {
                    n[e[0]] = e[1]
                })), (t = Object.keys(n).map((e => ({
                    src: e,
                    name: n[e]
                })))).forEach((e => {
                    var t = new URL(e.src).pathname.split(".").pop();
                    downloadFileAsTitle(e.src, `${e.name}.${t}`)
                })), console.log("done", t)
            }

            function DII() {
                DII_().then(console.log, console.warn)
            }
            setElement = function(e) {
                return !(!String(e).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/) || 11 != String(e).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/)[8].length) && String(e).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/)[8]
            }, findhref2 = function(e, t) {
                var n = [];
                return function e(o) {
                    o.tagName.toLowerCase() == (t || "a") ? (n.push(o), o.children.length && ((o = o.children).forEach = [].forEach, o.forEach((t => {
                        e(t)
                    })))) : o.children.length && ((o = o.children).forEach = [].forEach, o.forEach((t => {
                        e(t)
                    })))
                }(e), n
            }, getInstalImages = function() {
                return document.querySelectorAll("._acaz")
            }, getInstaVideo = function() {
                return document.querySelector("video.x1lliihq")
            }, downloadVideoFromBlob = function(e, t) {
                if (e && e.src && e.src.startsWith("blob:")) {
                    const n = e.captureStream(),
                        o = new MediaRecorder(n),
                        l = [];
                    o.ondataavailable = e => {
                        e.data.size > 0 && (l.push(e.data), console.log(e.data))
                    }, o.onstop = () => {
                        const e = new Blob(l, {
                                type: "video/mp4"
                            }),
                            n = URL.createObjectURL(e),
                            o = document.createElement("a");
                        o.style.display = "none", o.href = n, o.download = t + ".mp4", document.body.appendChild(o), o.click(), document.body.removeChild(o), URL.revokeObjectURL(n)
                    }, o.start(), setTimeout((() => {
                        o.stop()
                    }), 1e3 * e.duration)
                } else console.error("Invalid video element or source.")
            }, console.log("A?");
            const sleep = e => new Promise((t => setTimeout(t, e)));
            if ("fastdl.app" == document.domain) onload = async function() {
                const e = {
                    url: name,
                    input: null
                };
                var t = !1;
                for (setTimeout((() => {
                        t = !0
                    }), 2e4); !document.querySelector("#search-form-input");)
                    if (await sleep(0), t) throw "Cant find input";
                e.input = document.querySelector("#search-form-input"), console.log("Found a"),
                    function(e, t) {
                        ["focus", "input", "change", "blur"].forEach((n => {
                            let o = new Event(n, {
                                bubbles: !0,
                                isTrusted: !0
                            });
                            e[`on${n}`] && e[`on${n}`](o), "input" === n && (e.value = t), e.dispatchEvent(o)
                        }))
                    }(e.input, e.url), document.querySelector(".search-form__button").click(), GM_setValue("instaURL", await async function(e) {
                        for (; !document.querySelector(e);) await sleep(0);
                        return document.querySelector(e)
                    }(".button--filled").then((e => e.href)))
            };
            else {
                if ("soundcloud.com" == document.domain) return void(getSoundCloadI = function() {
                    _setV("SC", getSoundCloudUrl()), open("https://sclouddownloader.net/", "SC").onclose = function(e) {
                        console.log("Win closed")
                    }
                });
                if ("studio.youtube.com" == document.domain) return void setInterval((() => {
                    var e;
                    try {
                        [...[...document.querySelectorAll("#video-list")].map((e => [e, [...e.classList]])).filter((e => e[1].includes("ytcp-video-section")))[0][0].children[1].children].map((e => [e, [...e.classList], e.tagName])).filter((e => "YTCP-VIDEO-ROW" == e[2])).filter((e => "Public" == e[0].children[0].querySelectorAll(".cell-body.tablecell-visibility.style-scope.ytcp-video-row")[0].innerText)).map((e => e[0].children[0].querySelectorAll(".cell-body.tablecell-visibility.style-scope.ytcp-video-row")[0])).forEach((e => {
                            console.log(e), e.append(new _e("br").element);
                            var t = new _e("button").set("innerText", "Get").on("click", (function(e) {
                                alert("Doesnt work yet");
                                const {
                                    id: t,
                                    href: n,
                                    isShort: o
                                } = findhref2(e.target.parentElement.parentElement).map((e => ({
                                    href: e.href,
                                    short: e.href.includes("/short"),
                                    id: setElement(e.href)
                                }))).filter((e => e.id))[0];
                                downloadT(t, !1, !0, !1, !1, o ? new URL(n) : null)
                            }));
                            e.append(t.element)
                        })), e = !0
                    } catch {
                        e = !1
                    }
                    __ != e && (__ = e, console.log("Change?", e ? "Found" : "Not FOund"))
                }), 0);
                if ("production.assets.clips.twitchcdn.net" == document.domain) {
                    let e = new element("a", {
                        href: document.querySelector('[type="video/mp4"]').src,
                        download: document.querySelector('[type="video/mp4"]').src.split("/")[5] + ".mp4"
                    });
                    return document.body.append(e.element), e.element.click(), void sleep(500).then((t => {
                        e.element.remove(), sleep(500).then((e => {
                            close()
                        }))
                    }))
                }
                if ("snapinsta.app" == document.domain) {
                    const t = e => new Promise((t => setTimeout(t, e)));
                    async function wfs(e, n = 2e4) {
                        let o = !1;
                        for (setTimeout((() => {
                                console.log("TimeOut for", e), o = !0
                            }), n); !document.querySelector(e) && (console.log("_", e, o), await t(500), !o););
                        if (console.log(e, o), o) throw "NotFound";
                        return document.querySelector(e)
                    }
                    async function createBlackOverlayCanvas() {
                        await wfs("body");
                        const e = document.createElement("canvas");
                        e.id = "blackCanvas", Object.assign(e.style, {
                            position: "fixed",
                            top: "0",
                            left: "0",
                            width: "100%",
                            height: "100%",
                            backgroundColor: "black",
                            zIndex: "9999",
                            pointerEvents: "none"
                        }), document.body.appendChild(e);
                        const t = () => {
                            e.width = window.innerWidth, e.height = window.innerHeight
                        };
                        t(), window.addEventListener("resize", t);
                        const n = e.getContext("2d");
                        n.fillStyle = "black", n.fillRect(0, 0, e.width, e.height), console.log("Black overlay canvas created.")
                    }
                    return createBlackOverlayCanvas(), void async function() {
                        let [e, n] = name.split("\n");
                        e && n ? (console.warn("Test2"), wfs("#url").then((o => {
                            console.warn("Test3"), o.value = `https://www.instagram.com/${e}/${n}/`, wfs("#btn-submit").then((e => {
                                e.click(), wfs(".download-bottom").then((async() => {
                                    await t(1e3);
                                    let e = [...document.querySelectorAll('[class="download-bottom"]')].map((e => findhref2(e)[0])).map((({
                                        href: e,
                                        download: t,
                                        target: n
                                    }) => ({
                                        href: e,
                                        download: t,
                                        target: n
                                    })));
                                    (opener || window).postMessage(e, "*"), close()
                                }))
                            }))
                        }))) : console.warn("no")
                    }().then(console.log, console.warn)
                }
                if ("www.instagram.com" == document.domain) {
                    const n = e => new Promise((t => setTimeout(t, e)));

                    function parseInstagramURL(e) {
                        const t = e.match(/https?:\/\/(?:www\.)?instagram\.com\/(?:([^\/]+)\/)?(p|reels|reel)\/([^\/?]+)/);
                        return t ? {
                            username: t[1] || null,
                            a: t[2],
                            id: t[3]
                        } : null
                    }
                    var l;
                    let o = () => (l = parseInstagramURL(location.href), open("https://snapinsta.app/", `${l.a}\n${l.id}`));
                    var int;
                    async function wfs(e, t) {
                        let n = e => new Promise((t => setTimeout(t, e)));
                        return await new Promise((async(o, l) => {
                            var i = !1;
                            setTimeout((() => (i = 0, l())), t);
                            for (; !document.querySelector(e);)
                                if (await n(), i) {
                                    l();
                                    break
                                }
                            return o(document.querySelector(e))
                        })).then((e => e), (e => !1))
                    }

                    function setButtons() {
                        console.log("Appended buttons man");
                        var e = new element(document.querySelectorAll(".xh8yej3.x1iyjqo2")[0]),
                            t = new element("button", {
                                id: "MediaButton"
                            }).set("innerText", "Get Media").on("click", o);
                        e.append(t)
                    }

                    function setButtons2() {
                        var e = new element(document.querySelector("._aaqy")),
                            t = new element("button", {
                                id: "MediaButton"
                            }).set("innerText", "Get Media").on("click", o);
                        e.append(t)
                    }

                    function checkArc() {
                        const e = document.getElementsByTagName("article");
                        var t = new element("button", {
                            id: "MediaButton"
                        }).set("innerText", "Get Media").on("click", o);
                        for (const n of e) n.querySelector("#MediaButton") || n.prepend(t.element)
                    }
                    return onmessage = async function(e) {
                        if ("https://snapinsta.app" != e.origin) return void console.log("UNhandled", e);
                        let t = e.data;
                        for (let e = 0; e < t.length; e++) {
                            let {
                                href: o,
                                download: l,
                                target: i
                            } = t[e];
                            console.log("Got", {
                                href: o,
                                download: l,
                                target: i
                            });
                            let c = new element("a", {
                                href: o,
                                download: l,
                                target: i
                            });
                            document.body.append(c.element), c.element.click(), await n(500), c.element.remove()
                        }
                    }, "/call/" == location.pathname && wfs(".x6s0dn4 .x78zum5 .x5yr21d .xl56j7k.xh8yej3", 1e5).then((e => e.style.backgroundColor = "green")), tF((function() {
                        document.querySelectorAll(".xh8yej3.x1iyjqo2")[0].children
                    }), {
                        callback: function() {
                            setButtons(), setInterval((() => {
                                checkArc(), document.querySelector("#MediaButton") || setButtons(), document.querySelector("._aaqy") && !document.querySelector("._aaqy").querySelector("#MediaButton") && setButtons2()
                            }))
                        }
                    }), void console.log("Insta ballz")
                }
                if ("sclouddownloader.net" == document.domain)(async function() {
                    var e = _getV("sc");
                    async function t(e, t) {
                        let n = e => new Promise((t => setTimeout(t, e)));
                        return await new Promise((async(o, l) => {
                            var i = !1;
                            setTimeout((() => (i = 0, l())), t);
                            for (; !document.querySelector(e);)
                                if (await n(), i) {
                                    l();
                                    break
                                }
                            return o(document.querySelector(e))
                        })).then((e => !0), (e => !1))
                    }
                    if ("/download-sound-track" == location.pathname) {
                        for (await t("#trackTitle"); !trackTitle.innerText.length;) await sleep(0);
                        for (await t("#trackLink"); !trackLink.href.length;) await sleep(0);
                        var n = {
                            name: trackTitle.innerText,
                            href: trackLink.href
                        };
                        console.log(n), _setV("SCinfo", n), close()
                    } else {
                        if (!_getV("SC")) throw "Bruv";
                        var o = "#urlInput";
                        if (await t(o, 2e3), await t(o, 2e3)) {
                            for (document.querySelector(o).value = e, console.log("EZ url", !!window.formSubmit);
                                "undefined" == typeof formSubmit;) {
                                document.querySelector(o).value = e;
                                try {
                                    await sleep(0), console.log("EZ url", formSubmit), formSubmit()
                                } catch {}
                            }
                            console.log("EZ url", formSubmit), formSubmit(), console.warn("Got"), setInterval((() => {
                                document.querySelector(o).value = e, formSubmit()
                            }), 1e3)
                        }
                    }
                })().then(console.log, console.warn);
                else {
                    if ("y2mate.nu" == document.domain) {
                        location.pathname.split("/")[1] != GM_getValue("y2mate.nu") && (GM_setValue("y2mate.nu", location.pathname.split("/")[1]), console.warn("updated"));
                        let id_ = new URL(location.href).searchParams.get("v"),
                            IsShort = 1 == new URL(location.href).searchParams.get("s"),
                            mp4 = new URL(location.href).searchParams.get("mp4"),
                            useT = new URL(location.href).searchParams.get("useT"),
                            _ = id_ + mp4 + useT;
                        id_ || ([id_, IsShort, mp4, useT] = name.split(",").map((e => {
                            try {
                                return !!eval(e)
                            } catch {
                                return String(e)
                            }
                        })));
                        const sleep = e => new Promise((t => setTimeout(t, e)));
                        async function wfs(e, t = 5e3) {
                            let n = !1;
                            for (setTimeout((() => {
                                    console.log("TimeOut for", e), n = !0
                                }), t); !document.querySelector(e) && (console.log("_", e, n), await sleep(500), !n););
                            if (console.log(e, n), n) throw "NotFound";
                            return document.querySelector(e)
                        }
                        let cr = document.createElement;
                        return document.createElement = function(e, t) {
                            let n = cr.call(document, e, t);
                            return n._click = n.click, n.click = function() {
                                if (console.log(n, "was clicked", n.tagName), "A" == n.tagName) {
                                    console.log("Caught", n);
                                    let e = n.download,
                                        t = n.href;
                                    f = {
                                        id: id_,
                                        href: t,
                                        title: e
                                    }, (opener || window).postMessage(f, "*")
                                } else n._click.apply(n)
                            }, console.log(n, "was created", n.tagName), n
                        }, void async function() {
                            for (;
                                "complete" != document.readyState;) await sleep(0);
                            if (id_) {
                                let e = async e => {
                                    console.log("a", e);
                                    var t = findhref2(document.forms[0])[0].href,
                                        n = findhref2(document.forms[0], "div")[0].innerText,
                                        o = {
                                            _: _,
                                            id: id_,
                                            href: t,
                                            title: n,
                                            length: {}
                                        };
                                    console.log("Posted", o), (opener || window.parent).postMessage(o, "*"), close()
                                };
                                try {
                                    await wfs("#video").then((e => {
                                        console.log("e", e), e.value = IsShort ? `https://www.youtube.com/watch?v=${id_}` : `https://www.youtube.com/shorts/${id_}`, document.querySelector('[type="submit"]').click()
                                    })).catch(e), console.log("after url"), dl = download, download = function(e) {
                                        dl(e);
                                        var t = e + "&s=3&v=" + gVideo + "&f=" + gFormat + "&_=" + Math.random();
                                        if (t && t.length) {
                                            console.log("Lets goooo got:", {
                                                url: t
                                            });
                                            let e = {
                                                href: t,
                                                useT: !1,
                                                _: _,
                                                id: id_
                                            };
                                            (opener || window.parent).postMessage(e, "*"), close()
                                        }
                                    }, console.log("b")
                                } catch (e) {
                                    console.warn("Error:", e)
                                }
                            } else console.warn("No id Found")
                        }().then(console.log, console.warn)
                    }
                    if ("qdownloader.cc" == document.domain) {
                        const i = e => new Promise((t => setTimeout(t, e)));
                        async function wfs(e, t = 2e4) {
                            let n = !1;
                            for (setTimeout((() => {
                                    console.log("TimeOut for", e), n = !0
                                }), t); !document.querySelector(e) && (console.log("_", e, n), await i(500), !n););
                            if (console.log(e, n), n) throw "NotFound";
                            return document.querySelector(e)
                        }

                        function dispatchAllInputEvents(e, t) {
                            ["focus", "input", "change", "blur"].forEach((n => {
                                let o = new Event(n, {
                                    bubbles: !0,
                                    isTrusted: !0
                                });
                                e[`on${n}`] && e[`on${n}`](o), "input" === n && (e.value = t), e.dispatchEvent(o)
                            }))
                        }
                        let r = document.createElement;
                        document._createElement = function(e, t) {
                            let n = r.call(document, e, t);
                            return n._click = n.click, n.click = function() {
                                if (console.log(n, "was clicked", n.tagName), "A" == n.tagName) {
                                    console.log("Caught", n);
                                    let e = n.download,
                                        t = n.href;
                                    f = {
                                        id: new URL(location.href).searchParams.get("v"),
                                        href: t,
                                        title: e
                                    }
                                } else n._click.apply(n)
                            }, console.log(n, "was created", n.tagName), n
                        }, async function() {
                            if (location.href.includes("vidbutton")) throw "vidbutton";
                            GM_setValue("dlbutton", ""), GM_addValueChangeListener("dlbutton", (async function(e, t, n, o) {
                                console.log({
                                    a: e,
                                    b: t,
                                    c: n,
                                    d: o
                                }), n.includes("video download successful\ncheck downloads folder") && (await i(1e3), close())
                            }));
                            let e = await wfs("#url"),
                                t = await wfs("#downloadBtn");
                            id_ = new URL(location.href).searchParams.get("v"), dispatchAllInputEvents(e, `https://www.youtube.com/watch?v=${id_}`), t.click()
                        }().then(console.log, (async e => {
                            "vidbutton" == e && (console.log("Best Quality Video"), await wfs("#height").then((e => {
                                height.selectedIndex = height.options.length - 1, dlbutton.click(), open = window.open, window.open = function(e, t, n) {
                                    console.log({
                                        a: e,
                                        b: t,
                                        c: n
                                    })
                                }, wfs("#dlbutton").then((e => {
                                    var t = "";
                                    setInterval((n => {
                                        t != e.innerText && (t = e.innerText, GM_setValue("dlbutton", t))
                                    }))
                                }))
                            })))
                        }))
                    } else {
                        if ("snapsave.io" == document.domain) {
                            async function wfs(e, t = 2e4) {
                                let n = !1;
                                for (setTimeout((() => {
                                        console.log("TimeOut for", e), n = !0
                                    }), t); !document.querySelector(e) && (console.log("_", e, n), await sleep(500), !n););
                                if (console.log(e, n), n) throw "NotFound";
                                return document.querySelector(e)
                            }
                            return _wfs = wfs, void async function() {
                                var e = await wfs("#s_input", 3e4);
                                if (e) {
                                    console.log("Converting"), id_ = new URL(location.href).searchParams.get("v"), e.value = `https://www.youtube.com/watch?v=${id_}`, ksearchvideo(), setTimeout(ksearchvideo(), 1e3);
                                    var t = await wfs("#formatSelect");
                                    await wfs("#btn-action");
                                    t.selectedIndex = 0, t.options[0].selected = !0;
                                    for (var n = await wfs("#asuccess"); !(n = await wfs("#asuccess"));) await sleep(0);
                                    for (convertFile(0);
                                        "#" == n.getAttribute("href");) await sleep(0), n = await wfs("#asuccess");
                                    console.log(n.href);
                                    var o = (await _wfs(".clearfix")).querySelector("h3").innerText,
                                        l = {
                                            id: id_,
                                            href: n.href,
                                            title: o,
                                            length: {}
                                        };
                                    console.log("Posted", l), (opener || window).postMessage(l, "*")
                                } else alert("Input was not Found"), console.warn("?!!")
                            }().then(console.log).catch(console.warn)
                        }
                        if ("clips.twitch.tv" == document.domain && "create" != location.pathname.split("/")[1]) {
                            let a = 0;
                            const s = e => new Promise((t => setTimeout(t, e)));
                            async function wfs(e, t = 2e4) {
                                let n = !1;
                                for (setTimeout((() => {
                                        console.log("TimeOut for", e), n = !0
                                    }), t); !document.querySelector(e) && (console.log("_", e, n), await s(500), !n););
                                if (console.log(e, n), n) throw "NotFound";
                                return document.querySelector(e)
                            }

                            function copyElm(e) {
                                if (!(e instanceof Element)) throw new Error("Provided argument is not a DOM element.");
                                const t = document.createElement(e.tagName);
                                for (let n of e.attributes) t.setAttribute(n.name, n.value);
                                return t.style.cssText = e.style.cssText, t.className = e.className, t.innerHTML = e.innerHTML, t
                            }
                            _wfs = wfs, _copyElm = copyElm, async function() {
                                location.href;
                                let e = (await _wfs(".ScCoreButtonLabel-sc-s7h2b7-0")).parentElement.parentElement.parentElement.parentElement;
                                new _e(_copyElm(e)).on("click", (function() {
                                    var e;
                                    open((e => e.href)(((e = new URL(location.href)).host = "clipr.xyz", e)), "1080")
                                })).appendTo(e.parentNode).element.querySelector(".ScCoreButtonLabel-sc-s7h2b7-0").innerText = "1080P", new _e(_copyElm(e)).on("click", (function() {
                                    var e;
                                    open((e => e.href)(((e = new URL(location.href)).host = "clipr.xyz", e)), "720")
                                })).appendTo(e.parentNode).element.querySelector(".ScCoreButtonLabel-sc-s7h2b7-0").innerText = "720P", new _e(_copyElm(e)).on("click", (function() {
                                    var e;
                                    open((e => e.href)(((e = new URL(location.href)).host = "clipr.xyz", e)), "480")
                                })).appendTo(e.parentNode).element.querySelector(".ScCoreButtonLabel-sc-s7h2b7-0").innerText = "480P", new _e(_copyElm(e)).on("click", (function() {
                                    var e;
                                    open((e => e.href)(((e = new URL(location.href)).host = "clipr.xyz", e)), "360")
                                })).appendTo(e.parentNode).element.querySelector(".ScCoreButtonLabel-sc-s7h2b7-0").innerText = "360P", new _e(_copyElm(e)).on("click", (function() {
                                    var e;
                                    open((e => e.href)(((e = new URL(location.href)).host = "clipr.xyz", e)), "VOD")
                                })).appendTo(e.parentNode).element.querySelector(".ScCoreButtonLabel-sc-s7h2b7-0").innerText = "VOD";
                                var t;
                                a && (setTimeout((() => {
                                    close()
                                }), 200), open((e => e.href)(((t = new URL(location.href)).host = "clipr.xyz", t)), "1080"))
                            }().catch(console.warn)
                        } else {
                            if ("www.twitch.tv" == document.domain) {
                                async function go() {
                                    let [e, t, n, o] = location.pathname.split("/");
                                    if ("clip" != n) return console.warn("User isnt wathcing a clip");
                                    console.log("User is Watching a CLip");
                                    const l = e => new Promise((t => setTimeout(t, e)));
                                    async function i(e, t = 2e4) {
                                        let n = !1;
                                        for (setTimeout((() => {
                                                console.log("TimeOut for", e), n = !0
                                            }), t); !document.querySelector(e) && (console.log("_", e, n), await l(500), !n););
                                        if (console.log(e, n), n) throw "NotFound";
                                        return document.querySelector(e)
                                    }
                                    _wfs = i, _wfs_ = i, _copyElm = function(e) {
                                        if (!(e instanceof Element)) throw new Error("Provided argument is not a DOM element.");
                                        const t = document.createElement(e.tagName);
                                        for (let n of e.attributes) t.setAttribute(n.name, n.value);
                                        return t.style.cssText = e.style.cssText, t.className = e.className, t.innerHTML = e.innerHTML, t
                                    }, await async function() {
                                        location.href;
                                        await _wfs(".Layout-sc-1xcs6mc-0.bMOhzu");
                                        let l = [...document.querySelectorAll(".Layout-sc-1xcs6mc-0 .bMOhzu")].filter((e => e.querySelector("button") && !e.querySelector("button").disabled))[0];
                                        [{
                                            label: "1080P",
                                            resolution: "1080"
                                        }, {
                                            label: "720P",
                                            resolution: "720"
                                        }, {
                                            label: "480P",
                                            resolution: "480"
                                        }, {
                                            label: "360P",
                                            resolution: "360"
                                        }, {
                                            label: "VOD",
                                            resolution: "VOD"
                                        }].forEach((({
                                            label: i,
                                            resolution: c
                                        }) => {
                                            let r = new _e(_copyElm(l)).on("click", (function() {
                                                var l;
                                                [e, t, n, o] = location.pathname.split("/"), open((e => e.href)(((l = new URL(location.href)).host = "clipr.xyz", l)), c)
                                            })).appendTo(document.querySelector(".Layout-sc-1xcs6mc-0.hZUoPp"));
                                            "VOD" === c ? r.element.querySelector(".ScCoreButtonLabel-sc-s7h2b7-0").innerText = i : r.element.querySelector(".bFxzAY").innerText = i
                                        }))
                                    }().catch(console.warn)
                                }
                                var c;
                                return void setInterval((() => {
                                    c != location.href && go(), c = location.href
                                }), 100)
                            }
                            if ("clipr.xyz" == document.domain) {
                                async function wfs(e, t = 2e4) {
                                    let n = !1;
                                    for (setTimeout((() => {
                                            logger.log(`TimeOut for ${e}`), n = !0
                                        }), t); !document.querySelector(e) && (logger.log(`_ ${e} ${n}`), await sleep(500), !n););
                                    if (logger.log(`${e} ${n}`), n) throw "NotFound";
                                    return document.querySelector(e)
                                }
                                async function wfl() {
                                    for (;
                                        "complete" != document.readyState;) await sleep(0);
                                    return !0
                                }
                                const d = wfs;

                                function sleep(e) {
                                    return new Promise((t => setTimeout(t, e)))
                                }

                                function downloadFileAsTitle(e, t) {
                                    const n = document.createElement("a");
                                    n.href = e, n.download = t, document.body.appendChild(n), n.click(), document.body.removeChild(n)
                                }
                                return void async function() {
                                    let e = name;
                                    await wfl(), logger.log("Loaded");
                                    let t = ((e = {}) => ([...document.querySelectorAll(".flex.items-center.space-x-4")].filter((e => findhref2(e)[0])).filter((e => findhref2(e)[0].href.includes("clips.twitchcdn.net"))).forEach((t => {
                                        e[t.querySelector(".space-x-1").innerText.replace("p", "")] = findhref2(t)[0].href
                                    })), e))()[e];
                                    logger.log(1);
                                    let n = document.querySelector("body > div.relative.overflow-hidden > main > div > div.px-4.mx-auto.max-w-7xl.sm\\:px-6.lg\\:px-8 > div.mb-6.space-y-3.lg\\:flex.lg\\:items-center.lg\\:justify-between.lg\\:space-y-0 > div.lg\\:flex.lg\\:items-center > p > span:nth-child(1)").innerText;
                                    logger.log(2);
                                    let o = document.querySelector("body > div.relative.overflow-hidden > main > div > div.px-4.mx-auto.max-w-7xl.sm\\:px-6.lg\\:px-8 > div.mb-6.space-y-3.lg\\:flex.lg\\:items-center.lg\\:justify-between.lg\\:space-y-0 > div.lg\\:flex.lg\\:items-center > h2").innerText;
                                    logger.log(3);
                                    let l = `@${n} on Twitch | ${o} - ${e}P.mp4`;
                                    logger.log(`Downloading file as: ${l}`), open(t), logger.log(4), await sleep(4e3), close()
                                }().catch(console.warn)
                            }
                            if (location.href.includes("tubemp4.is")) {
                                async function wfs(e, t = 3e4) {
                                    var n;
                                    for (sleep(t).then((e => n = !0)); !document.querySelector(e) && (await sleep(0), !n););
                                    return document.querySelector(e)
                                }
                                console.log("ok"), wfs("#u").then((async e => {
                                    e.value = `https://www.youtube.com/watch?v=${new URL(location.href).searchParams.get("v")}`, convert.click(), await sleep(200), (await wfs("#convert")).click(), (await wfs(".process-button")).click(), wfs(".download-button").then((e => {
                                        let t = document.createElement;
                                        document.createElement = function(e, n) {
                                            let o = t.call(document, e, n);
                                            return o._click = o.click, o.click = function() {
                                                if (console.log(o, "was clicked", o.tagName), "A" == o.tagName) {
                                                    console.log("Caught", o);
                                                    let e = o.download,
                                                        t = o.href;
                                                    f = {
                                                        id: new URL(location.href).searchParams.get("v"),
                                                        href: t,
                                                        title: e
                                                    }, (opener || window).postMessage(f, "*"), close()
                                                } else o._click.apply(o)
                                            }, console.log(o, "was created", o.tagName), o
                                        }, e.click(), console.log("clicked"), setTimeout((() => e.click()), 1e3)
                                    }))
                                })).then(console.log, console.warn)
                            }
                        }
                    }
                }
            }
            var __, ev, tiktikWin;

            function getIds() {
                if (document.domain.includes("music")) throw alert("These button dont work on youtube music yet"), ".";
                var e = [...document.getElementsByTagName("ytd-playlist-panel-renderer")].filter(isElementInViewport).filter((e => !isHidden(e)))[0];
                return findhref2(e, "span").filter((e => !isHidden(e))).filter(isElementInViewport).filter((e => "video-title" == e.id)).map(parent).map(parent).map((e => ({
                    id: setElement(findhref2(parent(e))[0].href),
                    e: e
                })))
            }

            function downloadFileAsTitle(e, t) {
                const n = document.createElement("a");
                n.href = e, n.download = t, document.body.appendChild(n), n.click(), document.body.removeChild(n)
            }
            async function waitTT() {
                for (; tiktikWin && !tiktikWin.closed;) await sleep(0);
                return 1
            }

            function abc(e, t = "aria-label", n = document.body) {
                var o = [];
                return function n(l) {
                    var i = !1;
                    t ? l.getAttribute(t) == e && (o.push(l), i = 1) : [...l.attributes].map((e => {
                        const {
                            name: t,
                            value: n
                        } = e;
                        return {
                            name: t,
                            value: n
                        }
                    })).filter((t => t.value == e)).length && (o.push(l), i = 1), l.children.length && !i && ((l = l.children).forEach = [].forEach, l.forEach((e => {
                        n(e)
                    })))
                }(n), o.length ? 1 == o.length ? o[0] : o || !1 : null
            }

            function getElementByAttribute(e, t = "aria-label", n = document.body) {
                var o = [];
                return function n(l) {
                    l.getAttribute(t) == e ? o.push(l) : l.children.length && ((l = l.children).forEach = [].forEach, l.forEach((e => {
                        n(e)
                    })))
                }(n), 1 == o.length ? o[0] : o || !1
            }

            function mtoggle() {
                document.querySelector(".ytp-volume-area > .ytp-mute-button").click()
            }

            function Mute() {
                (abc("Mute", "title") && abc("Mute", "title")[0] || abc("Mute (m)", "title")).click()
            }

            function Unmute() {
                (query("#right-controls") && query("#right-controls").querySelectorAll("path")[0].getAttribute("d") == UnmutePath && abc("Mute", "title")[0] || abc("Unmute", "title") || abc("Unmute (m)", "title")).click()
            }
            console.log("B?"), _getIds = getIds, info = {}, downloadT = function(e, t = !1, n = !0, o = !1, l = !1, i = "") {
                let c = e + (o ? "mp4" : "mp3") + n;
                var r;
                if (!(r = document.getElementById(c)) || r.remove(), localStorage[c] && !t && (!l || !confirm(`You have already download this video as .${o?"mp4":"mp3"}\nStill download?`))) return;
                let a = i || location;
                var s = new URL(location.href);
                s.host = s.host.replace(".com", "mz.com"), console.log("o", s);
                let d = ["https://y2mate.nu/" + (GM_getValue("y2mate.nu") || "0HzX") + "/", "?v=", e, "&s=", s.pathname.startsWith("/shorts/") ? 1 : 0, "&mp4=", o ? "mp4" : "mp3", "&useT=", n];
                console.log(c, d);
                return ad("unload", (function() {
                    info[e].close()
                }), !0), onmessage = function(e) {
                    if (e.origin == Porigin || e.origin.match(/https?:\/{2}onlymp3\.to/) || e.origin.match(/https?:\/{2}en\.onlymp3\.to/) || e.origin.match(/https?:\/{2}en(\d)\.onlinevideoconverter\.pro/) || "https://sss.instasaverpro.com" == e.origin || "https://y2mate.nu" == e.origin || "https://snapsave.io" == e.origin || "https://tubemp4.is" == e.origin) {
                        const {
                            data: {
                                href: t,
                                title: l,
                                length: i,
                                id: c,
                                _: r
                            }
                        } = e;
                        let a = l + (o ? ".mp4" : ".mp3");
                        (e => {
                            e && e.remove()
                        })(document.getElementById(r)), console.log("Handled", {
                            href: t,
                            title: l,
                            length: i,
                            id: c,
                            _: r
                        }, e), button.set("innerText", "Get MP3"), button.set("disabled", !1), n ? (console.log("Getting video"), downloadFileAsTitle(t, a)) : open(t), localStorage[r] = t
                    } else console.log("Unhandled Post", e)
                }, info[e] = o ? open(a.pathname.startsWith("/shorts/") ? "https://yt5s.biz/enxj100/" : `https://qdownloader.cc/youtube-video-downloader.html?v=${e}`, [e, a.pathname.startsWith("/shorts/") ? 1 : 0, o + !1], "width=400,height=500") : !open(d.join(""), [e, a.pathname.startsWith("/shorts/") ? 1 : 0, o + !1, n + !1], "width=400,height=500")
            }, downloadTikTok = function(e, t) {
                (async function(e, t) {
                    await waitTT(), console.log("ez");
                    let n = t.videoID,
                        o = t.username,
                        l = getTikTokTittle();
                    onmessage = function(e) {
                        if (e.origin == Porigin || e.origin.match(/https?:\/{2}savetik\.csavetik.coo/) || e.origin.match(/https?:\/{2}en\.onlymp3\.to/) || e.origin.match(/https?:\/{2}en(\d)\.onlinevideoconverter\.pro/) || "https://savetik.co" == e.origin) {
                            var {
                                data: {
                                    href: t,
                                    links: n,
                                    title: o,
                                    length: i,
                                    id: c,
                                    mp4: r,
                                    info: {
                                        username: a
                                    }
                                }
                            } = e;
                            if (console.log("Handled", {
                                    href: t,
                                    title: o,
                                    length: i,
                                    id: c,
                                    links: n,
                                    mp4: r
                                }, e), "https://savetik.co" == e.origin) o = l, downloadFileAsTitle(r ? n[0] : n.pop(), a + " - " + o + (r ? ".mp4" : ".mp3"), tiktikWin);
                            else {
                                if (useT) {
                                    let e = document.createElement("a");
                                    e.download = o + ".mp3", e.href = t, document.body.appendChild(e), e.click(), e.remove()
                                } else open(t);
                                localStorage[_] = t
                            }
                        } else console.log("Unhandled Post", e)
                    }, tiktikWin = open("https://savetik.co/en", [`https://www.tiktok.com/${o}/video/${n}`, e + !1], "width=400,height=500")
                })(e, t).then(console.log, console.warn)
            }, abc_ = abc, M = Mute, Um = Unmute;
            var didmute = 0;

            function ch3(e) {
                return !!e && !e.closed
            }
            async function getWin(e = [
                ["w1", "win1"],
                ["w2", "win2"],
                ["w3", "win3"],
                ["w4", "win4"]
            ]) {
                var t, n = !1;
                return await new Promise(((o, l) => {
                    var i = setInterval((l => {
                        e.forEach((e => {
                            this[e[0]] = ch3(window[e[1]]), window[e[1]] || n || (n = !0, t = e[1], console.log(e))
                        })), t && (o(t), clearInterval(i))
                    }), 500)
                })), t
            }

            function WIP(e, t, n) {
                if (!t) return alert("This button is corrently broken");
                var o = _getIds(),
                    l = [];
                for (let t = 0; t < e; t++) l.push(["w" + t, "win" + t]);
                o.forEach((({
                    id: e
                }, o) => {
                    getWin(l).then((l => {
                        if (!info[e] && !localStorage[e] || n) {
                            console.log("download", e, o), window[l] = downloadT(e, n, !0, !!t), window.addEventListener("unload", (function(e) {
                                window[l].close()
                            }));
                            var i = setInterval((e => {
                                window[l] && !window[l].closed || (window[l] = null, clearInterval(i), console.log(l, "isclosed"))
                            }), 300)
                        }
                    }))
                }))
            }
            window.ch3 = ch3, window.getWin = getWin, WIP_ = WIP;
            var button = new element("button").set("innerText", "Get MP3").on("click", (function(e) {
                    button.set("innerText", "Wait..."), button.set("disabled", !0), downloadT(setElement(location.href), !0, !0, !1, !0)
                })),
                button2 = new element("button").set("innerText", "Get MP4").on("click", (function(e) {
                    downloadT(setElement(location.href), !0, !0, !0, !0)
                })),
                button3 = new element("button").set("innerText", "PlayList MP3").on("click", (function(e) {
                    WIP_(2, !1, !1)
                })),
                button4 = new element("button").set("innerText", "PlayList MP4").on("click", (function(e) {
                    WIP_(2, !0, !1)
                })),
                tiktokButton = new element("button").set("innerText", "Get MP4").on("click", (function(e) {
                    downloadTikTok(!0, setElement2(getClass("ehlq8k34") ? getClass("ehlq8k34").innerText : location.href))
                })).style({
                    color: "blue"
                }),
                tiktokButton3 = new element("button", {
                    id: "tt1"
                }).set("innerText", "Get MP4").on("click", (function(e) {
                    downloadTikTok(!0, setElement2(getClass("ehlq8k34") ? getClass("ehlq8k34").innerText : location.href))
                })).style({
                    color: "blue"
                }),
                tiktokButton2 = new element("button").set("innerText", "Get MP3").on("click", (function(e) {
                    downloadTikTok(!1, setElement2(getClass("ehlq8k34") ? getClass("ehlq8k34").innerText : location.href))
                })).style({
                    color: "blue"
                });

            function _ex_() {
                return document.querySelector("#end") || document.querySelector("#right-content")
            }

            function appendButtons() {
                const e = _ex_();

                function t() {
                    try {
                        return !(![...document.querySelectorAll("#header-description")].filter(isElementInViewport).filter((e => !isHidden(e)))[0] && !query(".autoplay")) && ([...document.querySelectorAll("#header-description")].filter(isElementInViewport).filter((e => !isHidden(e)))[0] || query(".autoplay"))
                    } catch (e) {
                        return !1
                    }
                }
                console.log(e), button.appendTo(e), button2.appendTo(e), console.log("Posted Buttons");
                var n = !1;
                setInterval((() => {
                    n != t() && t() ? (console.log("Added playlist buttons"), setTimeout((() => {
                        t().append(element.br.element), t().append(button3.element), t().append(button4.element)
                    }), 100)) : n == t() || t() || console.log("buttons are gone?!?!"), n = t()
                }), 100)
            }
            if (console.log("bruh"), a1 = [
                    ["youtube", function() {
                        tF((function() {
                            _ex_();
                            if (!_ex_()) throw "Cant append buttons yet";
                            return console.log("Posting"), appendButtons()
                        }), {
                            callback: function() {}
                        })
                    }],
                    ["tiktok", function() {
                        addEventListener("load", (function() {
                            tF((function() {
                                if (!abc_("browse-copy", "data-e2e")) throw "Cant Append";
                                tiktokButton.appendTo(document.querySelectorAll(".e1mecfx011")), tiktokButton2.appendTo(document.querySelectorAll(".e1mecfx011"))
                            }), {
                                callback: function() {}
                            }), tF((function() {
                                if (!document.getElementsByClassName("e13wiwn60")[0]) throw "Cant Append";

                                function e() {
                                    try {
                                        return !!abc_("browse-copy", "data-e2e").parentNode && abc_("browse-copy", "data-e2e").parentNode
                                    } catch (e) {
                                        return !1
                                    }
                                }
                                tiktokButton.appendTo(document.getElementsByClassName("e13wiwn60")[0]), tiktokButton2.appendTo(document.getElementsByClassName("e13wiwn60")[0]), console.log("Posted Buttons");
                                var t = !1;
                                setInterval((() => {
                                    t != e() && e() ? (console.log("Added playlist buttons"), setTimeout((() => {
                                        e().append(element.br.element), e().append(tiktokButton.element), e().append(tiktokButton2.element)
                                    }), 100)) : t == e() || e() || console.log("buttons are gone?!?!"), t = e()
                                }), 100)
                            }), {
                                callback: function() {}
                            })
                        }))
                    }]
                ].filter((e => location.host.includes(e[0])))[0], a1 && a1[1] && a1[1](), console.log(a1), delete a1, __ex_ = _ex_, location.href.includes("onlymp3.app") || location.href.includes("onlymp3.to")) {
                console.log("onlymp3.app");
                let u = function() {};

                function b_() {
                    var [e, t] = name.split(",");
                    txtUrl.value = `https://www.youtube.com/${"1"==t?"shorts/":"watch?v="}${e}`, getListFormats()
                }

                function a_() {
                    var e = videoTitle.innerText.split("\n"),
                        t = e.map((e => e.match(/[:\d]+/gi))).filter((e => !!e)).pop().pop(),
                        n = e[0].split("Title: ")[1],
                        o = findhref2(videoTitle.parentNode)[0].href,
                        l = {
                            id: setElement(location.href),
                            href: o,
                            title: n,
                            length: t
                        };
                    (opener || window).postMessage(l, "*"), console.log("Poasted")
                }
                return setInterval((() => {
                    document.getElementById("error-text").innerText.length > 5 && location.reload()
                }), 2e4), console.log("Getting MP3"), void tF((function(e = function() {}) {
                    b_(), tF((function(e = function() {}) {
                        a_()
                    }), {
                        callback: close
                    })
                }), {
                    callback: function() {}
                })
            }
            if (location.href.includes("www.yt2conv.com")) {
                console.log("Getting MP4");
                let [m, h] = name.split(",");
                tF((function(e = function() {}) {
                    document.getElementById("search_txt").value = `https://www.youtube.com/${"1"==h?"shorts/":"watch?v="}${m}`, document.getElementById("btn-submit").click(), console.log(m, h)
                }), {
                    callback: function() {}
                }), tF((function(e = function() {}) {
                    if (console.log(result.children.length), !result.children.length) throw document.getElementById("btn-submit").click(), "no there"
                }), {
                    int: 1e3,
                    callback: function() {}
                }), tF((function() {
                    document.getElementById("btn-download").click()
                }), {
                    callback: function() {}
                }), tF((function() {
                    var e = $(".media-heading")[0].innerText,
                        t = downloadbtn.href,
                        n = {
                            id: m,
                            href: t,
                            title: e,
                            length: {}
                        };
                    console.log("Posted"), (opener || window).postMessage(n, "*")
                }), {
                    callback: close
                })
            } else if (location.href.includes("yt5s.biz")) {
                async function wfs(e) {
                    for (; !document.querySelector(e);) await sleep(0);
                    return !0
                }(async function() {
                    let [e, t] = name.split(",");
                    if (!e.length || !t.length) return console.warn("No info Preset");
                    var n = `https://www.youtube.com/${"1"==t?"shorts/":"watch?v="}${e}`;
                    await wfs("#txt-url"), console.log("Input Loaded"), document.querySelector("#txt-url").value = n, await wfs("#btn-submit"), console.log("GEtting res"), await sleep(100), document.querySelector("#btn-submit").click(), await wfs("#video_title"), console.log("Got Res");
                    var o = document.querySelector("#video_title").innerText,
                        l = [0];
                    return [...document.querySelector("#result").querySelector("table").querySelectorAll("tr")].forEach((e => {
                        var t = e.innerText.match(/(?<res>\d+)(p|P)/i) || {};
                        t.groups && (t = Number(t.groups.res), l[0] < t && (l[0] = t, l[1] = findhref2(e)[0].href, l[2] = e))
                    })), {
                        id: e,
                        title: o,
                        href: l[1],
                        mp4: !0,
                        res: l[0]
                    }
                })().then((function(e) {
                    (opener || window).postMessage(e, "*"), location.href = e.href
                }), console.warn)
            } else if (location.href.includes("sss.instasaverpro.com"))(async function() {
                for (await async function(e) {
                        for (; !document.querySelector(e);) await sleep(0);
                        return !0
                    }("#A_downloadUrl"); !document.querySelector("#A_downloadUrl").href.length;) await sleep(0);
                console.log("Done");
                var e = document.querySelector("#myModalLabel").innerText,
                    t = {
                        href: document.querySelector("#A_downloadUrl").href,
                        title: e
                    };
                (opener || window).postMessage(t, "*")
            })().then(close, console.warn);
            else if (location.href.includes("en3.onlinevideoconverter.pro")) {
                let [p, w] = name.split(",");
                if (!p.length || !w.length) return console.Warn("NO info Preset");
                var YTurl = `https://www.youtube.com/${"1"==w?"shorts/":"watch?v="}${p}`;
                let g = function() {};
                tF((function(e = function() {}) {
                    document.getElementById("texturl").value = `https://www.youtube.com/${"1"==w?"shorts/":"watch?v="}${p}`, document.getElementById("convert1").click(), console.log("Searched")
                }), {
                    callback: g
                }), tF((function() {
                    if ("none" == stepProcess.style.display) throw document.getElementById("convert1").click(), "this";
                    console.log("Searching")
                }), {
                    callback: g
                }), tF((function() {
                    if (0 == document.getElementById("form-app-root").children.length) throw "";
                    console.log("loaded");
                    var {
                        title: e,
                        href: t
                    } = $("#download-720-MP4") && $("#download-720-MP4")[0] ? $("#download-720-MP4")[0] : $("#download-720-MP4"), n = {
                        id: p,
                        href: t,
                        title: e,
                        length: {}
                    };
                    console.log("Posted"), (opener || window).postMessage(n, "*")
                }), {
                    callback: close
                })
            } else if (location.href.includes("savetik.co")) {
                var [id, mp4] = name.split(",");

                function Fin() {
                    console.log("Found");
                    let e = {
                        title: document.getElementsByClassName("clearfix")[0].innerText,
                        links: findhref2(document.getElementsByClassName("tik-video")[0]).map((e => e.href)),
                        mp4: 1 == mp4,
                        info: setElement2(id)
                    };
                    onmessage = function(e) {
                        if ("https://www.tiktok.com" == e.origin) {
                            var {
                                data: {
                                    s: t,
                                    url: n,
                                    title: o
                                }
                            } = e;
                            console.log("Handled", {
                                s: t,
                                url: n,
                                title: o
                            }, e), t ? setTimeout(close, 100) : downloadFileAsTitle(n, o, null, close)
                        } else console.log("Unhandled Post", e)
                    }, (opener || window).postMessage(e, "*")
                }
                addEventListener("load", (function() {
                    tF((function() {
                        s_input.value = id, ksearchvideo(), setTimeout(ksearchvideo, 1e3)
                    }), {
                        callback() {}
                    })
                })), tF((function() {
                    document.getElementsByClassName("clearfix")[0].innerText, Fin()
                }), {
                    callback() {}
                })
            } else document.domain.includes("music") ? (console.log("Added MiniPlayer Toggle with I"), addEventListener("keypress", (function({
                isTrusted: e,
                ctrlKey: t,
                shiftKey: n,
                code: o,
                target: l,
                target: {
                    tagName: i
                }
            }) {
                ["INPUT", "TEXTAREA"].includes(i) || t || n || !e || "KeyI" != o || (abc_("Close player page") || abc_("Open player page")[1]).click()
            }))) : document.domain.includes("loader.to") && location.href.includes("/api/") && console.warn("using loader.to api");
            const policy = window.trustedTypes && trustedTypes.createPolicy("trustedHTMLPolicy", {
                    createHTML: e => e,
                    createScriptURL: e => e
                }),
                styleContent = "\n    /* Default iframe styles */\n    #cardApiIframe {\n        width: 100%;\n        height: 100%;\n        transition: all 2.5s ease-in-out;\n    }\n\n    /* Collapse animation when the class is toggled */\n    .collapse-frame {\n        width: 0;\n        height: 0;\n        margin-left: auto;\n        margin-right: auto;\n        transition: all 2.5s ease-in-out;\n    }\n",
                styleElement = document.createElement("style");

            function toggleIframeCollapse(e) {
                const t = iframeElement.element;
                e ? t.classList.add("collapse-frame") : t.classList.remove("collapse-frame")
            }
            styleElement.type = "text/css", styleElement.appendChild(document.createTextNode(policy ? policy.createHTML(styleContent) : styleContent));
            var url = `https://www.youtube.com/watch?v=${setElement(location.href)}&adUrl=https://www.youtube.com/channel/UCOA8lE9-0XnEIdHqjfQUz1A?sub_confirm=1`,
                src = policy ? policy.createScriptURL("https://loader.to/api/card2/?url=" + url) : "https://loader.to/api/card2/?url=" + url;
            const iframeElement = new _element("iframe", {
                    id: "cardApiIframe",
                    scrolling: "no",
                    width: "100%",
                    height: "100%",
                    allowtransparency: "true",
                    style: "border: none",
                    src: src
                }),
                iframeResizerScript = new _element("script", {
                    src: policy ? policy.createScriptURL("https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.9/iframeResizer.min.js") : "https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.9/iframeResizer.min.js"
                });
            iframeResizerScript.element.addEventListener("load", (() => {
                "function" == typeof iFrameResize ? iFrameResize({
                    log: !1
                }, "#cardApiIframe") : console.error("iFrameResize function not available")
            }));
            const containerDiv = new _element("div").append(iframeElement, iframeResizerScript),
                target = document.querySelector("#secondary.ytd-watch-flexy");
            var yedID = setElement(location.href);
            iframeElement.element.addEventListener("load", (() => {
                console.log("Iframe is fully loaded"), toggleIframeCollapse(!1)
            })), toggleIframeCollapse(!0);
            var adPlayTimeInSeconds = 4,
                currentPB = 0,
                setPlayerBack = 1,
                setPlayerBackAd = 0,
                isReloading = 0,
                ts = 0,
                cliked = 0,
                check = (e, t) => e > t ? t : e;
            setInterval((e => {
                const t = document.querySelector("video"),
                    n = document.querySelector("#video-companion-root") || document.querySelector("#secondary-inner") || document.querySelector("#secondary.ytd-watch-flexy");
                url = `https://www.youtube.com/watch?v=${setElement(location.href)}&adUrl=https://www.youtube.com/channel/UCOA8lE9-0XnEIdHqjfQUz1A?sub_confirm=1`, src = policy ? policy.createScriptURL("https://loader.to/api/card2/?url=" + url) : "https://loader.to/api/card2/?url=" + url, n && (!n.querySelector("#cardApiIframe") && (toggleIframeCollapse(!0), n.parentNode.prepend(styleElement), n.prepend(containerDiv.element), console.log("Added That Thing")), setElement(location.href) != yedID && (toggleIframeCollapse(!0), iframeElement.set("src", src), console.log("Fixed That Thing"), yedID = setElement(location.href)));
                const o = query("yt-button-view-model#dismiss-button");
                o && !isHidden(o) && o.click();
                const l = document.getElementsByClassName("ytp-ad-button-icon")[0];
                try {
                    if (l && !didmute) console.log("Muted ad"), console.log("Started at", tr), didmute = 1, t.playbackRate = check(t.duration / adPlayTimeInSeconds, 16), t.muted = 1;
                    else if (!l && didmute) {
                        console.log("Unmuted video");
                        try {
                            t.muted = 0
                        } catch (e) {
                            console.warn("Failed unmuting")
                        }
                        didmute = 0
                    }
                } catch {}!didmute && document.querySelector("video") && (tr = document.querySelector("video") && document.querySelector("video").currentTime.toFixed());
                const i = [...document.querySelectorAll("#song-video"), ...document.querySelectorAll("#ytd-player")].map((e => [...e.querySelectorAll("button")].filter((e => e.className.includes("skip")))[0])).filter((e => !!e))[0];
                i || document.querySelectorAll(".ytp-ad-button-icon")[0] ? (setPlayerBackAd && t.playbackRate == t.duration / 5 || (setPlayerBackAd = 1, console.log("Skipping ad :>")), !cliked && (setTimeout((() => {
                    i && i.click(), cliked = !1
                }), 5e3), cliked = !0), setPlayerBack = 0) : !setPlayerBack && t ? (setPlayerBackAd = 0, setPlayerBack = 1, t.playbackRate = currentPB > 2 ? 1 : currentPB, console.log("Fixed playBack")) : t && (setPlayerBackAd = 0, (currentPB = t.playbackRate) > 2 && (t.playbackRate = 1));
                const c = document.getElementsByClassName("ytp-ad-overlay-close-button")[2];
                c && (c.click(), console.log("Closed ad card"));
                let r = [...document.querySelectorAll(".yt-spec-button-shape-next")].filter((e => e.innerText.includes("Ads")))[0];
                r && (r.click(), !isReloading && location.href.includes("watch") && (isReloading = 1, location.reload()))
            }), 10)
        }()
}();