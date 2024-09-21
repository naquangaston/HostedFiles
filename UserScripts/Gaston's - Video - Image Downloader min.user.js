// ==UserScript==
// @name Gaston's - Video/Image Downloader
// @namespace http://tampermonkey.net/
// @version 6.6
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
// @name:zh Gaston's - Video/Image Downloader
// @name:en Gaston's - Video/Image Downloader
// @name:ru Gaston's - Video/Image Скачатель Gaston's - Video/Image Skachatel'
// @name:fr Gaston's - téléchargeur vidéo / image
// @name:ja Gaston's -Video/Image Downloader Gaston' s - vu~ideo/ Image daunrōdā
// @name:pt Gaston's - Downloader de vídeo/imagem
// @name:ar Gaston's - Video/Image Downloader Gaston's - Video/Image Downloader
// @name:de Gaston's - Video/Image Downloader
// @name:es Gaston's - Video/Image Descarger
// @name:hi गैस्टन - वीडियो/छवि डाउनलोडर gaistan - veediyo/chhavi daunalodar
// @name:id Gaston's - Video/Image Downloader
// @name:pl Gaston - pobierca wideo/obrazu
// @name:nl Gaston's - Video/Image Downloader
// @name:ko Gaston 's- 비디오/이미지 다운로더 Gaston 's- bidio/imiji daunlodeo
// @name:vi Gaston's - Trình tải xuống video/hình ảnh
// @name:uk GASTON'S - Відео/зображення завантажувача GASTON'S - Video/zobrazhennya zavantazhuvacha
// @name:it Gaston's - Downloader di video/immagine
// @name:th Gaston's - Video/Image Downloader Gaston's - Video/Image Downloader
// @name:ro Gaston's - descărcător video/imagini
// @name:tr Gaston's - Video/Resim İndirici
// @name:no Gaston's - Video/Image Downloader
// @name:bg Gaston's - видео/изтегляне на изображения Gaston's - video/izteglyane na izobrazheniya
// @name:sk Gaston's - Video/Image Downloader
// @name:fi Gaston's - Video/kuvan lataaja
// @name:hu Gaston's - Videó/kép letöltő
// @name:he Gaston's - הורדת וידאו/תמונה
// @name:da Gastons - Video/Image Downloader
// @name:cs Gaston's - Video/Image Downloader
// @name:sv Gaston's - Video/Image Downloader
// @name:el Gaston's - Video/Image Downloader Gaston's - Video/Image Downloader
// @description:es Instagram/Twitch/YouTube/Tiktok Video/Audio Descarger (frecuentemente actualizado)
// @description:en Instagram/Twitch/YouTube/TikTok Video/Audio Downloader (frequently updated)
// @description:zh Instagram/Twitch/YouTube/TikTok Video/Audio Downloader (frequently updated)
// @description:hi Instagram/Twitch/YouTube/Tiktok वीडियो/ऑडियो डाउनलोडर (अक्सर अपडेट किया गया) instagram/twitchh/youtubai/tiktok veediyo/odiyo daunalodar (aksar apadet kiya gaya)
// @description:ru Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (часто обновляется) Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (chasto obnovlyayetsya)
// @description:de Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (häufig aktualisiert)
// @description:ja Instagram/Twitch/YouTube/Tiktokビデオ/オーディオダウンローダー（頻繁に更新） Instagram/ Twitch/ yūchūbu/ Tiktok bideo/ ōdio daunrōdā (hinpan ni kōshin)
// @description:ar Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (تم تحديثه بشكل متكرر) Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (tama tahdithuh bishakl mutakariri)
// @description:fr Instagram / twitch / youtube / tiktok vidéo / téléchargeur audio (fréquemment mis à jour)
// @description:pt Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (atualizado com frequência)
// @description:it Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (frequentemente aggiornato)
// @description:ko Instagram/Twitch/YouTube/Tiktok 비디오/오디오 다운로더 (자주 업데이트) Instagram/Twitch/YouTube/Tiktok bidio/odio daunlodeo (jaju eobdeiteu)
// @description:nl Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (vaak bijgewerkt)
// @description:th Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (อัปเดตบ่อยครั้ง) Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (xạpdet b̀xy khrậng)
// @description:pl Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (często aktualizowany)
// @description:uk Instagram/twitch/youtube/tiktok відео/аудіо завантажувач (часто оновлений) Instagram/twitch/youtube/tiktok video/audio zavantazhuvach (chasto onovlenyy)
// @description:id Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (sering diperbarui)
// @description:ro Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (actualizat frecvent)
// @description:tr Instagram/Twitch/YouTube/Tiktok Video/Ses Downloader (sıklıkla güncellendi)
// @description:vi Instagram/twitch/youtube/tiktok video/trình tải xuống âm thanh (thường xuyên được cập nhật)
// @description:da Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (ofte opdateret)
// @description:sk Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (často aktualizované)
// @description:fi Instagram/twitch/youtube/tiktok video/äänen lataus (päivitetty usein)
// @description:no Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (ofte oppdatert)
// @description:cs Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (často aktualizováno)
// @description:sv Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (ofta uppdaterad)
// @description:hu Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (gyakran frissítve)
// @description:bg Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (често актуализиран) Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (chesto aktualiziran)
// @description:he אינסטגרם/טוויץ '/YouTube/Tiktok וידאו/הורדת שמע (מעודכן לעתים קרובות)
// @description:el Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (συχνά ενημερωμένο) Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (sychná enimeroméno)
// @license MIT
// ==/UserScript==
! function() {
    ! function() {
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
    }(globalThis);
    const e = new CustomLog("Script Logger");
    var t = e => new Promise((t => setTimeout(t, e)));
    console.log("ok");
    var n;

    function o() {
        var e;
        return [...document.getElementsByClassName("ytp-video-menu-item ytp-button")].forEach(((t, n) => {
            t.innerText.startsWith("▶") && (e = new URL(t.href).searchParams.get("v"))
        })), !e && document.getElementsByClassName("ytp-playlist-menu-button ytp-button")[0] ? (console.log("Opening"), document.getElementsByClassName("ytp-playlist-menu-button ytp-button")[0].click(), o()) : e ? (console.log("Closiung"), document.getElementsByClassName("ytp-playlist-menu-button ytp-button")[0].click(), e) : console.warn("Not Found!")
    }

    function t(e) {
        return new Promise((t => setTimeout(t, e)))
    }
    _getV = function(e, t) {
        return GM_getValue(e) || (GM_setValue(e, t), t)
    }, _setV = function(e, t) {
        GM_setValue(e, t)
    }, Number.prototype.decimal = function(e) {
        return Number(this.toFixed(e))
    }, getSoundCloudUrl = () => {
        try {
            return findhref2(document.querySelector("#app > div.playControls.g-z-index-control-bar.m-visible > section > div > div.playControls__elements > div.playControls__soundBadge.sc-ml-3x > div"))[0].href
        } catch {
            return
        }
    }, async function() {
        async function e(e, n = 3e4) {
            var o;
            for (t(n).then((e => o = !0)); !document.querySelector(e) && (await t(0), !o););
            return document.querySelector(e)
        }
        return location.href.includes("/embed/") ? (console.log("Attaching to embeder >:]"), e(".ytp-right-controls").then((async e => {
            let t = new _e("button", {
                id: "embedMP3"
            }).appendTo(e).set("innerText", "MP3").on("click", (function() {
                let e = o() || setElement(location.href);
                downloadT(e, !1, !0, !1, !0)
            })).style({
                position: "fixed",
                right: "50%",
                top: "80%"
            });
            for (; !document.getElementById("embedMP3") && document.querySelector(".ytp-right-controls");) console.log("Appended"), t.appendTo(".ytp-right-controls")
        }))) : (document.querySelector(".ytp-right-controls"), await e(".playbackSoundBadge__actions", 5e3).then((async n => {
            let o = new _e("button", {
                id: "GetAudio"
            }).appendTo(n).set("innerText", "Download MP3").on("click", (function() {
                downloadSC()
            }), (e => e));
            for (;;) !document.getElementById("GetAudio") && await e(".playbackSoundBadge__actions", 5e3) && await e(".playbackSoundBadge__actions", 5e3).then((e => {
                o.appendTo(e), console.log("Added Button")
            })), await t(0)
        })))
    }().then(console.log, console.warn), downloadSC = function() {
        GM_setValue("SCinfo", null), GM_setValue("sc", getSoundCloudUrl()), !n && (n = 1, GM_addValueChangeListener("SCinfo", (function(e, t, n, o) {
            console.log({
                a: e,
                b: t,
                c: n,
                d: o
            }), n && n.name && _downloadFileAsTitle(n.href, n.name)
        }))), open("https://sclouddownloader.net/")
    }, GM_setValue_ = GM_setValue, GM_getValue_ = GM_getValue, GM_info_ = GM_info;

    function l(e, t) {
        const n = document.createElement("a");
        n.href = e, n.download = t, document.body.appendChild(n), n.click(), document.body.removeChild(n)
    }
    _downloadFileAsTitle = async function(e, t, n, o) {
        const l = document.createElement("a");
        return l.style.display = "none", document.body.appendChild(l), fetch(e).then((e => e.blob())).then((c => {
            const i = URL.createObjectURL(c);
            l.href = i, l.download = t, l.target = "_blank", l.click(), URL.revokeObjectURL(i), (n || opener || window).postMessage({
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
    }, _downloadFile_ = l;
    const c = function(e, t) {
        try {
            let o = "undefined" != typeof $ ? $ : document.querySelectorAll;
            return t ? [...document.querySelectorAll(e)].filter((e => !(null === el.offsetParent)))[0] : (n = o(e) ? o(e).length ? o(e)[0] : o(e) : null, Object.keys(n).length ? n : null)
        } catch {}
        var n
    };
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
            class t {
                static get br() {
                    return new t("br")
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
            _element = _e = t, setElement2 = function(e) {
                return e.match(/(?<host>https?\:\/\/www\.tiktok\.com)\/(?<username>@[^\/]+)\/video\/(?<videoID>\d+)/i).groups
            };
            var n = "https://onlymp3.app";

            function o(e) {
                "function" == typeof jQuery && e instanceof jQuery && (e = e[0]);
                var t = e.getBoundingClientRect();
                return t.top >= 0 - (window.innerHeight || document.documentElement.clientHeight) / 2 && t.left >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight) + (window.innerHeight || document.documentElement.clientHeight) / 2 && t.right <= (window.innerWidth || document.documentElement.clientWidth)
            }

            function i(e, {
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

            function r(e) {
                return null === e.offsetParent
            }

            function a(e) {
                return e.parentNode
            }

            function s() {
                return get_aria_label("Go back") && get_aria_label("Go back").click ? get_aria_label("Go back") : document.querySelector("._afxv")
            }

            function u() {
                return get_aria_label("Next") && get_aria_label("Next").click ? get_aria_label("Next") : document.querySelector("._afxw")
            }

            function d() {
                if (location.href.includes("reel")) {
                    let t = open("https://fastdl.app/en", location.href, "width=400,height=500");
                    var e = GM_addValueChangeListener("instaURL", (function(n, o, c, i) {
                        c && (console.log("Got", {
                            a: n,
                            b: o,
                            c: c,
                            d: i
                        }), t.close(), GM_removeValueChangeListener(e), l(c, document.title + ".mp4"), GM_setValue("instaURL", null))
                    }))
                }
            }

            function m() {
                (async function() {
                    for (var e = e => new Promise((t => setTimeout(t, e))), t = new Set, n = {}; s();) {
                        if (await e(100), !s()) {
                            await e(1e3);
                            break
                        }
                        s().click()
                    }[...getInstalImages()].forEach((e => {
                        let n = findhref2(e, "img")[0];
                        t.add([n.src, n.getAttribute("alt")])
                    })), u().click();
                    try {
                        u().click()
                    } catch (e) {}
                    for (; u();) {
                        await e(300), [...getInstalImages()].forEach((e => {
                            let n = findhref2(e, "img")[0];
                            t.add([n.src, n.getAttribute("alt")])
                        }));
                        try {
                            u().click()
                        } catch (e) {}
                    }
                    for (; await e(100), s();) s().click();
                    [...t].forEach((e => {
                        n[e[0]] = e[1]
                    })), (t = Object.keys(n).map((e => ({
                        src: e,
                        name: n[e]
                    })))).forEach((e => {
                        var t = new URL(e.src).pathname.split(".").pop();
                        y(e.src, `${e.name}.${t}`)
                    })), console.log("done", t)
                })().then(console.log, console.warn)
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
            const h = e => new Promise((t => setTimeout(t, e)));
            if ("fastdl.app" == document.domain) onload = async function() {
                const e = {
                    url: name,
                    input: null
                };
                var t = !1;
                for (setTimeout((() => {
                        t = !0
                    }), 2e4); !document.querySelector("#search-form-input");)
                    if (await h(0), t) throw "Cant find input";
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
                        for (; !document.querySelector(e);) await h(0);
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
                    v != e && (v = e, console.log("Change?", e ? "Found" : "Not FOund"))
                }), 0);
                if ("www.instagram.com" == document.domain) {
                    function p() {
                        console.log("Appended buttons man");
                        var e = new t(document.querySelectorAll(".xh8yej3.x1iyjqo2")[0]),
                            n = new t("button", {
                                id: "MediaButton"
                            }).set("innerText", "Get Images").on("click", m),
                            o = new t("button", {
                                id: "MediaButton2"
                            }).set("innerText", "Get Videos").on("click", d);
                        e.append(n, o)
                    }
                    return i((function() {
                        document.querySelectorAll(".xh8yej3.x1iyjqo2")[0].children
                    }), {
                        callback: function() {
                            p(), setInterval((() => {
                                document.querySelector("#MediaButton") || p(), document.querySelector("._aaqy") && !document.querySelector("._aaqy").querySelector("#MediaButton") && function() {
                                    var e = new t(document.querySelector("._aaqy")),
                                        n = new t("button", {
                                            id: "MediaButton"
                                        }).set("innerText", "Get Images").on("click", m),
                                        o = new t("button", {
                                            id: "MediaButton2"
                                        }).set("innerText", "Get Videos").on("click", d);
                                    e.append(n, o)
                                }()
                            }))
                        }
                    }), void console.log("Insta ballz")
                }
                if ("sclouddownloader.net" == document.domain)(async function() {
                    var e = _getV("sc");
                    async function t(e, t) {
                        let n = e => new Promise((t => setTimeout(t, e)));
                        return await new Promise((async(o, l) => {
                            var c = !1;
                            setTimeout((() => (c = 0, l())), t);
                            for (; !document.querySelector(e);)
                                if (await n(), c) {
                                    l();
                                    break
                                }
                            return o()
                        })).then((e => !0), (e => !1))
                    }
                    if ("/download-sound-track" == location.pathname) {
                        for (await t("#trackTitle"); !trackTitle.innerText.length;) await h(0);
                        for (await t("#trackLink"); !trackLink.href.length;) await h(0);
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
                                "undefined" == typeof formSubmit;) try {
                                await h(0), console.log("EZ url", formSubmit)
                            } catch {}
                            console.log("EZ url", formSubmit), formSubmit(), console.warn("Got"), setInterval(formSubmit, 1e3)
                        }
                    }
                })().then(console.log, console.warn);
                else {
                    if ("y2mate.nu" == document.domain) {
                        location.pathname.split("/")[1] != GM_getValue("y2mate.nu") && (GM_setValue("y2mate.nu", location.pathname.split("/")[1]), console.warn("updated"));
                        let K = new URL(location.href).searchParams.get("v"),
                            Y = 1 == new URL(location.href).searchParams.get("s"),
                            J = new URL(location.href).searchParams.get("mp4"),
                            ee = new URL(location.href).searchParams.get("useT"),
                            te = K + J + ee;
                        const ne = e => new Promise((t => setTimeout(t, e)));
                        async function w(e, t = 5e3) {
                            let n = !1;
                            for (setTimeout((() => {
                                    console.log("TimeOut for", e), n = !0
                                }), t); !document.querySelector(e) && (console.log("_", e, n), await ne(500), !n););
                            if (console.log(e, n), n) throw "NotFound";
                            return document.querySelector(e)
                        }
                        return void async function() {
                            for (;
                                "complete" != document.readyState;) await ne(0);
                            if (K) {
                                let e = async e => {
                                    console.log("a", e);
                                    var t = findhref2(document.forms[0])[0].href,
                                        n = findhref2(document.forms[0], "div")[0].innerText,
                                        o = {
                                            _: te,
                                            id: K,
                                            href: t,
                                            title: n,
                                            length: {}
                                        };
                                    console.log("Posted", o), (opener || window.parent).postMessage(o, "*"), close()
                                };
                                try {
                                    await w("#url").then((e => {
                                        console.log("e", e), e.value = Y ? `https://www.youtube.com/watch?v=${K}` : `https://www.youtube.com/shorts/${K}`, e.parentElement.children[1].click()
                                    })).catch(e), console.log("after url"), await w("#progress").then((async e => {
                                        for (; document.querySelector(`#${e.id}`);) await ne(0);
                                        console.log("a_")
                                    })).catch(e), console.log("b")
                                } catch (e) {
                                    console.warn("Error:", e)
                                }
                            } else console.warn("No id Found")
                        }().then(console.log, console.warn)
                    }
                    if ("qdownloader.cc" == document.domain) {
                        const oe = e => new Promise((t => setTimeout(t, e)));
                        async function w(e, t = 2e4) {
                            let n = !1;
                            for (setTimeout((() => {
                                    console.log("TimeOut for", e), n = !0
                                }), t); !document.querySelector(e) && (console.log("_", e, n), await oe(500), !n););
                            if (console.log(e, n), n) throw "NotFound";
                            return document.querySelector(e)
                        }
                        let le = document.createElement;
                        document._createElement = function(e, t) {
                            let n = le.call(document, e, t);
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
                                }), n.includes("video download successful\ncheck downloads folder") && (await oe(1e3), close())
                            }));
                            let e = await w("#url"),
                                t = await w("#downloadBtn");
                            id_ = new URL(location.href).searchParams.get("v"),
                                function(e, t) {
                                    ["focus", "input", "change", "blur"].forEach((n => {
                                        let o = new Event(n, {
                                            bubbles: !0,
                                            isTrusted: !0
                                        });
                                        e[`on${n}`] && e[`on${n}`](o), "input" === n && (e.value = t), e.dispatchEvent(o)
                                    }))
                                }(e, `https://www.youtube.com/watch?v=${id_}`), t.click()
                        }().then(console.log, (async e => {
                            "vidbutton" == e && (console.log("Best Quality Video"), await w("#height").then((e => {
                                height.selectedIndex = height.options.length - 1, dlbutton.click(), open = window.open, window.open = function(e, t, n) {
                                    console.log({
                                        a: e,
                                        b: t,
                                        c: n
                                    })
                                }, w("#dlbutton").then((e => {
                                    var t = "";
                                    setInterval((n => {
                                        t != e.innerText && (t = e.innerText, GM_setValue("dlbutton", t))
                                    }))
                                }))
                            })))
                        }))
                    } else {
                        if ("snapsave.io" == document.domain) {
                            async function w(e, t = 2e4) {
                                let n = !1;
                                for (setTimeout((() => {
                                        console.log("TimeOut for", e), n = !0
                                    }), t); !document.querySelector(e) && (console.log("_", e, n), await h(500), !n););
                                if (console.log(e, n), n) throw "NotFound";
                                return document.querySelector(e)
                            }
                            return _wfs = w, void async function() {
                                var e = await w("#s_input");
                                if (e) {
                                    console.log("Converting"), id_ = new URL(location.href).searchParams.get("v"), e.value = `https://www.youtube.com/watch?v=${id_}`, ksearchvideo(), setTimeout(ksearchvideo(), 1e3);
                                    var t = await w("#formatSelect");
                                    await w("#btn-action");
                                    t.selectedIndex = 0, t.options[0].selected = !0;
                                    for (var n = await w("#asuccess"); !(n = await w("#asuccess"));) await h(0);
                                    for (convertFile(0);
                                        "#" == n.getAttribute("href");) await h(0), n = await w("#asuccess");
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
                        if ("clips.twitch.tv" == document.domain) {
                            let ce = 1;
                            const ie = e => new Promise((t => setTimeout(t, e)));
                            async function w(e, t = 2e4) {
                                let n = !1;
                                for (setTimeout((() => {
                                        console.log("TimeOut for", e), n = !0
                                    }), t); !document.querySelector(e) && (console.log("_", e, n), await ie(500), !n););
                                if (console.log(e, n), n) throw "NotFound";
                                return document.querySelector(e)
                            }
                            _wfs = w, _copyElm = function(e) {
                                if (!(e instanceof Element)) throw new Error("Provided argument is not a DOM element.");
                                const t = document.createElement(e.tagName);
                                for (let n of e.attributes) t.setAttribute(n.name, n.value);
                                return t.style.cssText = e.style.cssText, t.className = e.className, t.innerHTML = e.innerHTML, t
                            }, async function() {
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
                                ce && (setTimeout((() => {
                                    close
                                }), 200), open((e => e.href)(((t = new URL(location.href)).host = "clipr.xyz", t)), "1080"))
                            }().catch(console.warn)
                        } else {
                            if ("www.twitch.tv" == document.domain) {
                                var g;
                                return void setInterval((() => {
                                    g != location.href && async function() {
                                        let [e, t, n, o] = location.pathname.split("/");
                                        if ("clip" != n) return console.warn("User isnt wathcing a clip");
                                        console.log("User is Watching a CLip");
                                        const l = e => new Promise((t => setTimeout(t, e)));
                                        async function c(e, t = 2e4) {
                                            let n = !1;
                                            for (setTimeout((() => {
                                                    console.log("TimeOut for", e), n = !0
                                                }), t); !document.querySelector(e) && (console.log("_", e, n), await l(500), !n););
                                            if (console.log(e, n), n) throw "NotFound";
                                            return document.querySelector(e)
                                        }
                                        _wfs = c, _wfs_ = c, _copyElm = function(e) {
                                            if (!(e instanceof Element)) throw new Error("Provided argument is not a DOM element.");
                                            const t = document.createElement(e.tagName);
                                            for (let n of e.attributes) t.setAttribute(n.name, n.value);
                                            return t.style.cssText = e.style.cssText, t.className = e.className, t.innerHTML = e.innerHTML, t
                                        }, await async function() {
                                            location.href, await _wfs(".Layout-sc-1xcs6mc-0.bMOhzu");
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
                                                label: c,
                                                resolution: i
                                            }) => {
                                                let r = new _e(_copyElm(l)).on("click", (function() {
                                                    var l;
                                                    [e, t, n, o] = location.pathname.split("/"), open((e => e.href)(((l = new URL(location.href)).host = "clipr.xyz", l)), i)
                                                })).appendTo(document.querySelector(".Layout-sc-1xcs6mc-0.hZUoPp"));
                                                "VOD" === i ? r.element.querySelector(".ScCoreButtonLabel-sc-s7h2b7-0").innerText = c : r.element.querySelector(".bFxzAY").innerText = c
                                            }))
                                        }().catch(console.warn)
                                    }(), g = location.href
                                }), 100)
                            }
                            if ("clipr.xyz" == document.domain) {
                                async function w(t, n = 2e4) {
                                    let o = !1;
                                    for (setTimeout((() => {
                                            e.log(`TimeOut for ${t}`), o = !0
                                        }), n); !document.querySelector(t) && (e.log(`_ ${t} ${o}`), await h(500), !o););
                                    if (e.log(`${t} ${o}`), o) throw "NotFound";
                                    return document.querySelector(t)
                                }

                                function h(e) {
                                    return new Promise((t => setTimeout(t, e)))
                                }

                                function y(e, t) {
                                    const n = document.createElement("a");
                                    n.href = e, n.download = t, document.body.appendChild(n), n.click(), document.body.removeChild(n)
                                }
                                return void async function() {
                                    let t = name;
                                    await async function() {
                                        for (;
                                            "complete" != document.readyState;) await h(0);
                                        return !0
                                    }(), e.log("Loaded");
                                    let n = ((e = {}) => ([...document.querySelectorAll(".flex.items-center.space-x-4")].filter((e => findhref2(e)[0])).filter((e => findhref2(e)[0].href.includes("clips.twitchcdn.net"))).forEach((t => {
                                        e[t.querySelector(".space-x-1").innerText.replace("p", "")] = findhref2(t)[0].href
                                    })), e))()[t];
                                    e.log(1);
                                    let o = document.querySelector("body > div.relative.overflow-hidden > main > div > div.px-4.mx-auto.max-w-7xl.sm\\:px-6.lg\\:px-8 > div.mb-6.space-y-3.lg\\:flex.lg\\:items-center.lg\\:justify-between.lg\\:space-y-0 > div.lg\\:flex.lg\\:items-center > p > span:nth-child(1)").innerText;
                                    e.log(2);
                                    let l = document.querySelector("body > div.relative.overflow-hidden > main > div > div.px-4.mx-auto.max-w-7xl.sm\\:px-6.lg\\:px-8 > div.mb-6.space-y-3.lg\\:flex.lg\\:items-center.lg\\:justify-between.lg\\:space-y-0 > div.lg\\:flex.lg\\:items-center > h2").innerText;
                                    e.log(3);
                                    let c = `@${o} on Twitch | ${l} - ${t}P.mp4`;
                                    e.log(`Downloading file as: ${c}`), open(n), e.log(4), await h(4e3), close()
                                }().catch(console.warn)
                            }
                            if (location.href.includes("tubemp4.is")) {
                                async function w(e, t = 3e4) {
                                    var n;
                                    for (h(t).then((e => n = !0)); !document.querySelector(e) && (await h(0), !n););
                                    return document.querySelector(e)
                                }
                                console.log("ok"), w("#u").then((async e => {
                                    e.value = `https://www.youtube.com/watch?v=${new URL(location.href).searchParams.get("v")}`, convert.click(), await h(200), (await w("#convert")).click(), (await w(".process-button")).click(), w(".download-button").then((e => {
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
            var v, b;

            function y(e, t) {
                const n = document.createElement("a");
                n.href = e, n.download = t, document.body.appendChild(n), n.click(), document.body.removeChild(n)
            }

            function k(e, t = "aria-label", n = document.body) {
                var o = [];
                return function n(l) {
                    var c = !1;
                    t ? l.getAttribute(t) == e && (o.push(l), c = 1) : [...l.attributes].map((e => {
                        const {
                            name: t,
                            value: n
                        } = e;
                        return {
                            name: t,
                            value: n
                        }
                    })).filter((t => t.value == e)).length && (o.push(l), c = 1), l.children.length && !c && ((l = l.children).forEach = [].forEach, l.forEach((e => {
                        n(e)
                    })))
                }(n), o.length ? 1 == o.length ? o[0] : o || !1 : null
            }
            console.log("B?"), _getIds = function() {
                if (document.domain.includes("music")) throw alert("These button dont work on youtube music yet"), ".";
                var e = [...document.getElementsByTagName("ytd-playlist-panel-renderer")].filter(o).filter((e => !r(e)))[0];
                return findhref2(e, "span").filter((e => !r(e))).filter(o).filter((e => "video-title" == e.id)).map(a).map(a).map((e => ({
                    id: setElement(findhref2(a(e))[0].href),
                    e: e
                })))
            }, info = {}, downloadT = function(e, t = !1, o = !0, l = !1, c = !1, i = "") {
                let r = e + (l ? "mp4" : "mp3") + o;
                var a;
                if (!(a = document.getElementById(r)) || a.remove(), localStorage[r] && !t && (!c || !confirm(`You have already download this video as .${l?"mp4":"mp3"}\nStill download?`))) return;
                let s = i || location;
                var u = new URL(location.href);
                u.host = u.host.replace(".com", "mz.com"), console.log("o", u);
                let d = ["https://y2mate.nu/" + (GM_getValue("y2mate.nu") || "0HzX") + "/", "?v=", e, "&s=", u.pathname.startsWith("/shorts/") ? 1 : 0, "&mp4=", l ? "mp4" : "mp3", "&useT=", o];
                console.log(r, d);
                var m;
                return function(e, t, n = !1) {
                    var o = addEventListener(e, ((...e) => {
                        t(...e), n && removeEventListener(o)
                    }), !0)
                }("unload", (function() {
                    info[e].close()
                }), !0), onmessage = function(e) {
                    if (e.origin == n || e.origin.match(/https?:\/{2}onlymp3\.to/) || e.origin.match(/https?:\/{2}en\.onlymp3\.to/) || e.origin.match(/https?:\/{2}en(\d)\.onlinevideoconverter\.pro/) || "https://sss.instasaverpro.com" == e.origin || "https://y2mate.nu" == e.origin || "https://snapsave.io" == e.origin || "https://tubemp4.is" == e.origin) {
                        const {
                            data: {
                                href: t,
                                title: n,
                                length: c,
                                id: i,
                                _: r
                            }
                        } = e;
                        let a = n + (l ? ".mp4" : ".mp3");
                        (e => {
                            e && e.remove()
                        })(document.getElementById(r)), console.log("Handled", {
                            href: t,
                            title: n,
                            length: c,
                            id: i,
                            _: r
                        }, e), E.set("innerText", "Get MP3"), E.set("disabled", !1), o ? (console.log("Getting video"), y(t, a)) : open(t), localStorage[r] = t
                    } else console.log("Unhandled Post", e)
                }, info[e] = l ? open(s.pathname.startsWith("/shorts/") ? "https://yt5s.biz/enxj100/" : `https://qdownloader.cc/youtube-video-downloader.html?v=${e}`, [e, s.pathname.startsWith("/shorts/") ? 1 : 0, l + !1], "width=400,height=500") : (m = new _e("iframe", {
                    src: d.join(""),
                    id: r,
                    useT: o,
                    loading: "lazy",
                    referrerpolicy: "no-referrer",
                    allowfullscreen: !0,
                    sandbox: "allow-same-origin allow-scripts allow-popups allow-forms",
                    allow: "autoplay; fullscreen; geolocation; microphone; camera"
                }).style({
                    border: 0,
                    position: "absolute",
                    width: 0,
                    height: 0,
                    "pointer-events": "none",
                    opacity: 1
                }), GM_addValueChangeListener("y2mate.nu", (function(t, n, c, i) {
                    d = ["https://y2mate.nu/" + (GM_getValue("y2mate.nu") || "0HzX") + "/", "?v=", e, "&s=", u.pathname.startsWith("/shorts/") ? 1 : 0, "&mp4=", l ? "mp4" : "mp3", "&useT=", o], m.set("src", d.join(""))
                })), m.appendTo(document.body), m.closed = !1, !m)
            }, downloadTikTok = function(e, t) {
                (async function(e, t) {
                    await async function() {
                        for (; b && !b.closed;) await h(0);
                        return 1
                    }(), console.log("ez");
                    let o = t.videoID,
                        l = t.username,
                        c = function() {
                            try {
                                return document.querySelector("#app > div.css-14dcx2q-DivBodyContainer.e1irlpdw0 > div:nth-child(4) > div > div.css-1qjw4dg-DivContentContainer.e1mecfx00 > div.css-1stfops-DivCommentContainer.ekjxngi0 > div > div.css-1xlna7p-DivProfileWrapper.ekjxngi4 > div.css-1u3jkat-DivDescriptionContentWrapper.e1mecfx011 > div.css-1nst91u-DivMainContent.e1mecfx01 > div.css-bs495z-DivWrapper.e1mzilcj0 > div > div.css-1d7krfw-DivOverflowContainer.e1mzilcj5 > h1").innerText.replace("Replying to ", "")
                            } catch {
                                try {
                                    return document.querySelector("#app > div.css-14dcx2q-DivBodyContainer.e1irlpdw0 > div:nth-child(4) > div > div.css-1qjw4dg-DivContentContainer.e1mecfx00 > div.css-1stfops-DivCommentContainer.ekjxngi0 > div > div.css-1xlna7p-DivProfileWrapper.ekjxngi4 > div.css-1u3jkat-DivDescriptionContentWrapper.e1mecfx011 > div.css-1nst91u-DivMainContent.e1mecfx01 > div.css-bs495z-DivWrapper.e1mzilcj0").innerText.replace("Replying to ", "")
                                } catch (e) {
                                    return k("browse-video-desc", "data-e2e") ? k("browse-video-desc", "data-e2e").innerText : document.querySelector("#main-content-video_detail > div > div.css-12kupwv-DivContentContainer.ege8lhx2 > div.css-1senhbu-DivLeftContainer.ege8lhx3 > div.css-1sb4dwc-DivPlayerContainer.eqrezik4 > div.css-3lfoqn-DivDescriptionContentWrapper-StyledDetailContentWrapper.eqrezik15 > div.css-r4nwrj-DivVideoInfoContainer.eqrezik3 > div.css-bs495z-DivWrapper.e1mzilcj0 > div > h1").innerText.replace("Replying to ", "")
                                }
                            }
                        }();
                    onmessage = function(e) {
                        if (e.origin == n || e.origin.match(/https?:\/{2}savetik\.csavetik.coo/) || e.origin.match(/https?:\/{2}en\.onlymp3\.to/) || e.origin.match(/https?:\/{2}en(\d)\.onlinevideoconverter\.pro/) || "https://savetik.co" == e.origin) {
                            var {
                                data: {
                                    href: t,
                                    links: o,
                                    title: l,
                                    length: i,
                                    id: r,
                                    mp4: a,
                                    info: {
                                        username: s
                                    }
                                }
                            } = e;
                            if (console.log("Handled", {
                                    href: t,
                                    title: l,
                                    length: i,
                                    id: r,
                                    links: o,
                                    mp4: a
                                }, e), "https://savetik.co" == e.origin) l = c, y(a ? o[0] : o.pop(), s + " - " + l + (a ? ".mp4" : ".mp3"), b);
                            else {
                                if (useT) {
                                    let e = document.createElement("a");
                                    e.download = l + ".mp3", e.href = t, document.body.appendChild(e), e.click(), e.remove()
                                } else open(t);
                                localStorage[_] = t
                            }
                        } else console.log("Unhandled Post", e)
                    }, b = open("https://savetik.co/en", [`https://www.tiktok.com/${l}/video/${o}`, e + !1], "width=400,height=500")
                })(e, t).then(console.log, console.warn)
            }, abc_ = k, M = function() {
                (k("Mute", "title") && k("Mute", "title")[0] || k("Mute (m)", "title")).click()
            }, Um = function() {
                (c("#right-controls") && "M3.15,3.85l4.17,4.17L6.16,9H3v6h3.16L12,19.93v-7.22l2.45,2.45c-0.15,0.07-0.3,0.13-0.45,0.18v1.04 c0.43-0.1,0.83-0.27,1.2-0.48l1.81,1.81c-0.88,0.62-1.9,1.04-3.01,1.2v1.01c1.39-0.17,2.66-0.71,3.73-1.49l2.42,2.42l0.71-0.71 l-17-17L3.15,3.85z M11,11.71v6.07L6.52,14H4v-4h2.52l1.5-1.27L11,11.71z M10.33,6.79L9.62,6.08L12,4.07v4.39l-1-1V6.22L10.33,6.79 z M14,8.66V7.62c2,0.46,3.5,2.24,3.5,4.38c0,0.58-0.13,1.13-0.33,1.64l-0.79-0.79c0.07-0.27,0.12-0.55,0.12-0.85 C16.5,10.42,15.44,9.1,14,8.66z M14,5.08V4.07c3.95,0.49,7,3.85,7,7.93c0,1.56-0.46,3.01-1.23,4.24l-0.73-0.73 C19.65,14.48,20,13.28,20,12C20,8.48,17.39,5.57,14,5.08z" == c("#right-controls").querySelectorAll("path")[0].getAttribute("d") && k("Mute", "title")[0] || k("Unmute", "title") || k("Unmute (m)", "title")).click()
            };
            var T = 0;

            function S(e) {
                return !!e && !e.closed
            }
            async function x(e = [
                ["w1", "win1"],
                ["w2", "win2"],
                ["w3", "win3"],
                ["w4", "win4"]
            ]) {
                var t, n = !1;
                return await new Promise(((o, l) => {
                    var c = setInterval((l => {
                        e.forEach((e => {
                            this[e[0]] = S(window[e[1]]), window[e[1]] || n || (n = !0, t = e[1], console.log(e))
                        })), t && (o(t), clearInterval(c))
                    }), 500)
                })), t
            }
            window.ch3 = S, window.getWin = x, WIP_ = function(e, t, n) {
                if (!t) return alert("This button is corrently broken");
                var o = _getIds(),
                    l = [];
                for (let t = 0; t < e; t++) l.push(["w" + t, "win" + t]);
                o.forEach((({
                    id: e
                }, o) => {
                    x(l).then((l => {
                        if (!info[e] && !localStorage[e] || n) {
                            console.log("download", e, o), window[l] = downloadT(e, n, !0, !!t), window.addEventListener("unload", (function(e) {
                                window[l].close()
                            }));
                            var c = setInterval((e => {
                                window[l] && !window[l].closed || (window[l] = null, clearInterval(c), console.log(l, "isclosed"))
                            }), 300)
                        }
                    }))
                }))
            };
            var E = new t("button").set("innerText", "Get MP3").on("click", (function(e) {
                    E.set("innerText", "Wait..."), E.set("disabled", !0), downloadT(setElement(location.href), !0, !0, !1, !0)
                })),
                q = new t("button").set("innerText", "Get MP4").on("click", (function(e) {
                    downloadT(setElement(location.href), !0, !0, !0, !0)
                })),
                C = new t("button").set("innerText", "PlayList MP3").on("click", (function(e) {
                    WIP_(2, !1, !1)
                })),
                L = new t("button").set("innerText", "PlayList MP4").on("click", (function(e) {
                    WIP_(2, !0, !1)
                })),
                P = new t("button").set("innerText", "Get MP4").on("click", (function(e) {
                    downloadTikTok(!0, setElement2(getClass("ehlq8k34") ? getClass("ehlq8k34").innerText : location.href))
                })).style({
                    color: "blue"
                }),
                A = (new t("button", {
                    id: "tt1"
                }).set("innerText", "Get MP4").on("click", (function(e) {
                    downloadTikTok(!0, setElement2(getClass("ehlq8k34") ? getClass("ehlq8k34").innerText : location.href))
                })).style({
                    color: "blue"
                }), new t("button").set("innerText", "Get MP3").on("click", (function(e) {
                    downloadTikTok(!1, setElement2(getClass("ehlq8k34") ? getClass("ehlq8k34").innerText : location.href))
                })).style({
                    color: "blue"
                }));

            function I() {
                return document.querySelector("#end") || document.querySelector("#right-content")
            }
            if (console.log("bruh"), a1 = [
                    ["youtube", function() {
                        i((function() {
                            I();
                            if (!I()) throw "Cant append buttons yet";
                            return console.log("Posting"),
                                function() {
                                    const e = I();

                                    function n() {
                                        try {
                                            return !(![...document.querySelectorAll("#header-description")].filter(o).filter((e => !r(e)))[0] && !c(".autoplay")) && ([...document.querySelectorAll("#header-description")].filter(o).filter((e => !r(e)))[0] || c(".autoplay"))
                                        } catch (e) {
                                            return !1
                                        }
                                    }
                                    console.log(e), E.appendTo(e), q.appendTo(e), console.log("Posted Buttons");
                                    var l = !1;
                                    setInterval((() => {
                                        l != n() && n() ? (console.log("Added playlist buttons"), setTimeout((() => {
                                            n().append(t.br.element), n().append(C.element), n().append(L.element)
                                        }), 100)) : l == n() || n() || console.log("buttons are gone?!?!"), l = n()
                                    }), 100)
                                }()
                        }), {
                            callback: function() {}
                        })
                    }],
                    ["tiktok", function() {
                        addEventListener("load", (function() {
                            i((function() {
                                if (!abc_("browse-copy", "data-e2e")) throw "Cant Append";
                                P.appendTo(document.querySelectorAll(".e1mecfx011")), A.appendTo(document.querySelectorAll(".e1mecfx011"))
                            }), {
                                callback: function() {}
                            }), i((function() {
                                if (!document.getElementsByClassName("e13wiwn60")[0]) throw "Cant Append";

                                function e() {
                                    try {
                                        return !!abc_("browse-copy", "data-e2e").parentNode && abc_("browse-copy", "data-e2e").parentNode
                                    } catch (e) {
                                        return !1
                                    }
                                }
                                P.appendTo(document.getElementsByClassName("e13wiwn60")[0]), A.appendTo(document.getElementsByClassName("e13wiwn60")[0]), console.log("Posted Buttons");
                                var n = !1;
                                setInterval((() => {
                                    n != e() && e() ? (console.log("Added playlist buttons"), setTimeout((() => {
                                        e().append(t.br.element), e().append(P.element), e().append(A.element)
                                    }), 100)) : n == e() || e() || console.log("buttons are gone?!?!"), n = e()
                                }), 100)
                            }), {
                                callback: function() {}
                            })
                        }))
                    }]
                ].filter((e => location.host.includes(e[0])))[0], a1 && a1[1] && a1[1](), console.log(a1), delete a1, __ex_ = I, location.href.includes("onlymp3.app") || location.href.includes("onlymp3.to")) {
                console.log("onlymp3.app");
                return setInterval((() => {
                    document.getElementById("error-text").innerText.length > 5 && location.reload()
                }), 2e4), console.log("Getting MP3"), void i((function(e = function() {}) {
                    ! function() {
                        var [e, t] = name.split(",");
                        txtUrl.value = `https://www.youtube.com/${"1"==t?"shorts/":"watch?v="}${e}`, getListFormats()
                    }(), i((function(e = function() {}) {
                        ! function() {
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
                        }()
                    }), {
                        callback: close
                    })
                }), {
                    callback: function() {}
                })
            }
            if (location.href.includes("www.yt2conv.com")) {
                console.log("Getting MP4");
                let [re, ae] = name.split(",");
                i((function(e = function() {}) {
                    document.getElementById("search_txt").value = `https://www.youtube.com/${"1"==ae?"shorts/":"watch?v="}${re}`, document.getElementById("btn-submit").click(), console.log(re, ae)
                }), {
                    callback: function() {}
                }), i((function(e = function() {}) {
                    if (console.log(result.children.length), !result.children.length) throw document.getElementById("btn-submit").click(), "no there"
                }), {
                    int: 1e3,
                    callback: function() {}
                }), i((function() {
                    document.getElementById("btn-download").click()
                }), {
                    callback: function() {}
                }), i((function() {
                    var e = $(".media-heading")[0].innerText,
                        t = downloadbtn.href,
                        n = {
                            id: re,
                            href: t,
                            title: e,
                            length: {}
                        };
                    console.log("Posted"), (opener || window).postMessage(n, "*")
                }), {
                    callback: close
                })
            } else if (location.href.includes("yt5s.biz")) {
                async function w(e) {
                    for (; !document.querySelector(e);) await h(0);
                    return !0
                }(async function() {
                    let [e, t] = name.split(",");
                    if (!e.length || !t.length) return console.warn("No info Preset");
                    var n = `https://www.youtube.com/${"1"==t?"shorts/":"watch?v="}${e}`;
                    await w("#txt-url"), console.log("Input Loaded"), document.querySelector("#txt-url").value = n, await w("#btn-submit"), console.log("GEtting res"), await h(100), document.querySelector("#btn-submit").click(), await w("#video_title"), console.log("Got Res");
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
                        for (; !document.querySelector(e);) await h(0);
                        return !0
                    }("#A_downloadUrl"); !document.querySelector("#A_downloadUrl").href.length;) await h(0);
                console.log("Done");
                var e = document.querySelector("#myModalLabel").innerText,
                    t = {
                        href: document.querySelector("#A_downloadUrl").href,
                        title: e
                    };
                (opener || window).postMessage(t, "*")
            })().then(close, console.warn);
            else if (location.href.includes("en3.onlinevideoconverter.pro")) {
                let [se, ue] = name.split(",");
                if (!se.length || !ue.length) return console.Warn("NO info Preset");
                let de = function() {};
                i((function(e = function() {}) {
                    document.getElementById("texturl").value = `https://www.youtube.com/${"1"==ue?"shorts/":"watch?v="}${se}`, document.getElementById("convert1").click(), console.log("Searched")
                }), {
                    callback: de
                }), i((function() {
                    if ("none" == stepProcess.style.display) throw document.getElementById("convert1").click(), "this";
                    console.log("Searching")
                }), {
                    callback: de
                }), i((function() {
                    if (0 == document.getElementById("form-app-root").children.length) throw "";
                    console.log("loaded");
                    var {
                        title: e,
                        href: t
                    } = $("#download-720-MP4") && $("#download-720-MP4")[0] ? $("#download-720-MP4")[0] : $("#download-720-MP4"), n = {
                        id: se,
                        href: t,
                        title: e,
                        length: {}
                    };
                    console.log("Posted"), (opener || window).postMessage(n, "*")
                }), {
                    callback: close
                })
            } else if (location.href.includes("savetik.co")) {
                var [B, N] = name.split(",");
                addEventListener("load", (function() {
                    i((function() {
                        s_input.value = B, ksearchvideo(), setTimeout(ksearchvideo, 1e3)
                    }), {
                        callback() {}
                    })
                })), i((function() {
                    document.getElementsByClassName("clearfix")[0].innerText,
                        function() {
                            console.log("Found");
                            let e = {
                                title: document.getElementsByClassName("clearfix")[0].innerText,
                                links: findhref2(document.getElementsByClassName("tik-video")[0]).map((e => e.href)),
                                mp4: 1 == N,
                                info: setElement2(B)
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
                                    }, e), t ? setTimeout(close, 100) : y(n, o, null, close)
                                } else console.log("Unhandled Post", e)
                            }, (opener || window).postMessage(e, "*")
                        }()
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
                    tagName: c
                }
            }) {
                ["INPUT", "TEXTAREA"].includes(c) || t || n || !e || "KeyI" != o || (abc_("Close player page") || abc_("Open player page")[1]).click()
            }))) : document.domain.includes("loader.to") && location.href.includes("/api/") && console.warn("using loader.to api");
            const U = window.trustedTypes && trustedTypes.createPolicy("trustedHTMLPolicy", {
                    createHTML: e => e,
                    createScriptURL: e => e
                }),
                z = "\n    /* Default iframe styles */\n    #cardApiIframe {\n        width: 100%;\n        height: 100%;\n        transition: all 2.5s ease-in-out;\n    }\n\n    /* Collapse animation when the class is toggled */\n    .collapse-frame {\n        width: 0;\n        height: 0;\n        margin-left: auto;\n        margin-right: auto;\n        transition: all 2.5s ease-in-out;\n    }\n",
                R = document.createElement("style");

            function G(e) {
                const t = D.element;
                e ? t.classList.add("collapse-frame") : t.classList.remove("collapse-frame")
            }
            R.type = "text/css", R.appendChild(document.createTextNode(U ? U.createHTML(z) : z));
            var V = `https://www.youtube.com/watch?v=${setElement(location.href)}&adUrl=https://www.youtube.com/channel/UCOA8lE9-0XnEIdHqjfQUz1A?sub_confirm=1`,
                j = U ? U.createScriptURL("https://loader.to/api/card2/?url=" + V) : "https://loader.to/api/card2/?url=" + V;
            const D = new _element("iframe", {
                    id: "cardApiIframe",
                    scrolling: "no",
                    width: "100%",
                    height: "100%",
                    allowtransparency: "true",
                    style: "border: none",
                    src: j
                }),
                O = new _element("script", {
                    src: U ? U.createScriptURL("https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.9/iframeResizer.min.js") : "https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.9/iframeResizer.min.js"
                });
            O.element.addEventListener("load", (() => {
                "function" == typeof iFrameResize ? iFrameResize({
                    log: !1
                }, "#cardApiIframe") : console.error("iFrameResize function not available")
            }));
            const F = new _element("div").append(D, O);
            document.querySelector("#secondary.ytd-watch-flexy");
            var W = setElement(location.href);
            D.element.addEventListener("load", (() => {
                console.log("Iframe is fully loaded"), G(!1)
            })), G(!0);
            var H = 0,
                Q = 1,
                X = 0,
                Z = 0;
            setInterval((e => {
                const t = document.querySelector("video"),
                    n = document.querySelector("#video-companion-root") || document.querySelector("#secondary-inner") || document.querySelector("#secondary.ytd-watch-flexy");
                V = `https://www.youtube.com/watch?v=${setElement(location.href)}&adUrl=https://www.youtube.com/channel/UCOA8lE9-0XnEIdHqjfQUz1A?sub_confirm=1`, j = U ? U.createScriptURL("https://loader.to/api/card2/?url=" + V) : "https://loader.to/api/card2/?url=" + V, n && (!n.querySelector("#cardApiIframe") && (G(!0), n.parentNode.prepend(R), n.prepend(F.element), console.log("Added That Thing")), setElement(location.href) != W && (G(!0), D.set("src", j), console.log("Fixed That Thing"), W = setElement(location.href)));
                const o = c("yt-button-view-model#dismiss-button");
                o && !r(o) && o.click();
                const l = document.getElementsByClassName("ytp-ad-button-icon")[0];
                try {
                    if (l && !T) console.log("Muted ad"), T = 1, t.playbackRate = 12, t.muted = 1;
                    else if (!l && T) {
                        console.log("Unmuted video");
                        try {
                            t.muted = 0
                        } catch (e) {
                            console.warn("Failed unmuting")
                        }
                        T = 0
                    }
                } catch {}
                const i = [...document.querySelectorAll("#song-video"), ...document.querySelectorAll("#ytd-player")].map((e => [...e.querySelectorAll("button")].filter((e => e.className.includes("skip")))[0])).filter((e => !!e))[0];
                i ? (X && 16 == t.playbackRate || (X = 1, console.log("Skipping ad :>")), i.click(), Q = 0) : !Q && t ? (X = 0, Q = 1, t.playbackRate = H, console.log("Fixed playBack")) : t && (X = 0, H = t.playbackRate);
                const a = document.getElementsByClassName("ytp-ad-overlay-close-button")[2];
                a && (a.click(), console.log("Closed ad card"));
                let s = [...document.querySelectorAll(".yt-spec-button-shape-next")].filter((e => e.innerText.includes("Ads")))[0];
                s && (s.click(), !Z && location.href.includes("watch") && (Z = 1, location.reload()))
            }), 10)
        }()
}();