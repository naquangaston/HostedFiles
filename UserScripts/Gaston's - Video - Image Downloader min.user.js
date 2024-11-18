// ==UserScript==
// @name Gaston's - Video/Image Downloader
// @namespace http://tampermonkey.net/
// @version 7.0
// @supportURL https://your-support-page.com
// @homepageURL https://greasyfork.org/en/users/689441-gaston2
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
// @license MIT
// ==/UserScript==
! function() {
    ! function() {
        "use strict";
        const e = "feedbackPromptLastDate",
            t = "isFirstTimeKey";
        async function o() {
            const t = function() {
                if ("undefined" != typeof GM_info && GM_info.scriptUpdateURL) {
                    const e = GM_info.scriptUpdateURL.match(/\/scripts\/(\d+)\//);
                    if (e && e[1]) return e[1]
                }
                return console.error("Script ID not found in the update URL."), null
            }();
            if (t) {
                const o = `https://greasyfork.org/en/scripts/${t}/feedback`;
                confirm("Are you enjoying this script? Would you like to provide feedback?") && window.open(o, "_blank"), await GM.setValue(e, Date.now())
            }
        }!async function() {
            const n = await GM.getValue(t, !1),
                l = await GM.getValue(e, 0);
            console.log("FirstTime:", n), Date.now() - l > 12096e5 && (o(), GM.setValue(t, !0))
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
    }(globalThis);
    const e = new CustomLog("Script Logger");
    var t = e => new Promise((t => setTimeout(t, e)));
    console.log("ok");
    var o;

    function n() {
        var e;
        return [...document.getElementsByClassName("ytp-video-menu-item ytp-button")].forEach(((t, o) => {
            t.innerText.startsWith("▶") && (e = new URL(t.href).searchParams.get("v"))
        })), !e && document.getElementsByClassName("ytp-playlist-menu-button ytp-button")[0] ? (console.log("Opening"), document.getElementsByClassName("ytp-playlist-menu-button ytp-button")[0].click(), n()) : e ? (console.log("Closiung"), document.getElementsByClassName("ytp-playlist-menu-button ytp-button")[0].click(), e) : console.warn("Not Found!")
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
        async function e(e, o = 3e4) {
            var n;
            for (t(o).then((e => n = !0)); !document.querySelector(e) && (await t(0), !n););
            return document.querySelector(e)
        }
        return location.href.includes("/embed/") ? (console.log("Attaching to embeder >:]"), e(".ytp-right-controls").then((async e => {
            let t = new _e("button", {
                id: "embedMP3"
            }).appendTo(e).set("innerText", "MP3").on("click", (function() {
                let e = n() || setElement(location.href);
                downloadT(e, !1, !0, !1, !0)
            })).style({
                position: "fixed",
                right: "50%",
                top: "80%"
            });
            for (; !document.getElementById("embedMP3") && document.querySelector(".ytp-right-controls");) console.log("Appended"), t.appendTo(".ytp-right-controls")
        }))) : (document.querySelector(".ytp-right-controls"), await e(".playbackSoundBadge__actions", 5e3).then((async o => {
            let n = new _e("button", {
                id: "GetAudio"
            }).appendTo(o).set("innerText", "Download MP3").on("click", (function() {
                downloadSC()
            }), (e => e));
            for (;;) !document.getElementById("GetAudio") && await e(".playbackSoundBadge__actions", 5e3) && await e(".playbackSoundBadge__actions", 5e3).then((e => {
                n.appendTo(e), console.log("Added Button")
            })), await t(0)
        })))
    }().then(console.log, console.warn), downloadSC = function() {
        GM_setValue("SCinfo", null), GM_setValue("sc", getSoundCloudUrl()), !o && (o = 1, GM_addValueChangeListener("SCinfo", (function(e, t, o, n) {
            console.log({
                a: e,
                b: t,
                c: o,
                d: n
            }), o && o.name && _downloadFileAsTitle(o.href, o.name)
        }))), open("https://sclouddownloader.net/")
    }, GM_setValue_ = GM_setValue, GM_getValue_ = GM_getValue, GM_info_ = GM_info;

    function l(e, t) {
        const o = document.createElement("a");
        o.href = e, o.download = t, document.body.appendChild(o), o.click(), document.body.removeChild(o)
    }
    _downloadFileAsTitle = async function(e, t, o, n) {
        const l = document.createElement("a");
        return l.style.display = "none", document.body.appendChild(l), fetch(e).then((e => e.blob())).then((c => {
            const i = URL.createObjectURL(c);
            l.href = i, l.download = t, l.target = "_blank", l.click(), URL.revokeObjectURL(i), (o || opener || window).postMessage({
                url: e,
                title: t,
                s: !0
            }, "*"), (typeof n).includes("function") && n()
        })).catch((n => {
            console.error("Error downloading file:", n), (o || opener || window).postMessage({
                url: e,
                title: t,
                s: !1
            }, "*")
        }))
    }, _downloadFile_ = l;
    const c = function(e, t) {
        try {
            let n = "undefined" != typeof $ ? $ : document.querySelectorAll;
            return t ? [...document.querySelectorAll(e)].filter((e => !(null === el.offsetParent)))[0] : (o = n(e) ? n(e).length ? n(e)[0] : n(e) : null, Object.keys(o).length ? o : null)
        } catch {}
        var o
    };
    getElementByAttribute = function(e, t = "aria-label", o = document.body) {
            var n = [];
            return function o(l) {
                l.getAttribute(t) == e ? n.push(l) : l.children.length && ((l = l.children).forEach = [].forEach, l.forEach((e => {
                    o(e)
                })))
            }(o), 1 == n.length ? n[0] : n || !1
        }, get_aria_label = function(e, t = document.body) {
            var o = [];
            return function t(n) {
                n.getAttribute("aria-label") == e ? o.push(n) : n.children.length && ((n = n.children).forEach = [].forEach, n.forEach((e => {
                    t(e)
                })))
            }(t), o[0] || !1
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
                        let o = t[e];
                        console.log("Appending:", {
                            element: o,
                            target: this
                        }), this.element.append(o.element || o)
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
            var o = "https://onlymp3.app";

            function n(e) {
                "function" == typeof jQuery && e instanceof jQuery && (e = e[0]);
                var t = e.getBoundingClientRect();
                return t.top >= 0 - (window.innerHeight || document.documentElement.clientHeight) / 2 && t.left >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight) + (window.innerHeight || document.documentElement.clientHeight) / 2 && t.right <= (window.innerWidth || document.documentElement.clientWidth)
            }

            function i(e, {
                callback: t,
                int: o
            }) {
                !t && (t = function() {}), !o && (o = 100), console.log({
                    f: e,
                    callback: t,
                    int: o
                });
                try {
                    return e(), void t()
                } catch (e) {}
                var n = setInterval((() => {
                    try {
                        e(), t(), clearInterval(n)
                    } catch (e) {}
                }), o || 100);
                return n
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
                    var e = GM_addValueChangeListener("instaURL", (function(o, n, c, i) {
                        c && (console.log("Got", {
                            a: o,
                            b: n,
                            c: c,
                            d: i
                        }), t.close(), GM_removeValueChangeListener(e), l(c, document.title + ".mp4"), GM_setValue("instaURL", null))
                    }))
                }
            }

            function m() {
                (async function() {
                    for (var e = e => new Promise((t => setTimeout(t, e))), t = new Set, o = {}; s();) {
                        if (await e(100), !s()) {
                            await e(1e3);
                            break
                        }
                        s().click()
                    }[...getInstalImages()].forEach((e => {
                        let o = findhref2(e, "img")[0];
                        t.add([o.src, o.getAttribute("alt")])
                    })), u().click();
                    try {
                        u().click()
                    } catch (e) {}
                    for (; u();) {
                        await e(300), [...getInstalImages()].forEach((e => {
                            let o = findhref2(e, "img")[0];
                            t.add([o.src, o.getAttribute("alt")])
                        }));
                        try {
                            u().click()
                        } catch (e) {}
                    }
                    for (; await e(100), s();) s().click();
                    [...t].forEach((e => {
                        o[e[0]] = e[1]
                    })), (t = Object.keys(o).map((e => ({
                        src: e,
                        name: o[e]
                    })))).forEach((e => {
                        var t = new URL(e.src).pathname.split(".").pop();
                        y(e.src, `${e.name}.${t}`)
                    })), console.log("done", t)
                })().then(console.log, console.warn)
            }
            setElement = function(e) {
                return !(!String(e).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/) || 11 != String(e).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/)[8].length) && String(e).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/)[8]
            }, findhref2 = function(e, t) {
                var o = [];
                return function e(n) {
                    n.tagName.toLowerCase() == (t || "a") ? (o.push(n), n.children.length && ((n = n.children).forEach = [].forEach, n.forEach((t => {
                        e(t)
                    })))) : n.children.length && ((n = n.children).forEach = [].forEach, n.forEach((t => {
                        e(t)
                    })))
                }(e), o
            }, getInstalImages = function() {
                return document.querySelectorAll("._acaz")
            }, getInstaVideo = function() {
                return document.querySelector("video.x1lliihq")
            }, downloadVideoFromBlob = function(e, t) {
                if (e && e.src && e.src.startsWith("blob:")) {
                    const o = e.captureStream(),
                        n = new MediaRecorder(o),
                        l = [];
                    n.ondataavailable = e => {
                        e.data.size > 0 && (l.push(e.data), console.log(e.data))
                    }, n.onstop = () => {
                        const e = new Blob(l, {
                                type: "video/mp4"
                            }),
                            o = URL.createObjectURL(e),
                            n = document.createElement("a");
                        n.style.display = "none", n.href = o, n.download = t + ".mp4", document.body.appendChild(n), n.click(), document.body.removeChild(n), URL.revokeObjectURL(o)
                    }, n.start(), setTimeout((() => {
                        n.stop()
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
                        ["focus", "input", "change", "blur"].forEach((o => {
                            let n = new Event(o, {
                                bubbles: !0,
                                isTrusted: !0
                            });
                            e[`on${o}`] && e[`on${o}`](n), "input" === o && (e.value = t), e.dispatchEvent(n)
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
                                    href: o,
                                    isShort: n
                                } = findhref2(e.target.parentElement.parentElement).map((e => ({
                                    href: e.href,
                                    short: e.href.includes("/short"),
                                    id: setElement(e.href)
                                }))).filter((e => e.id))[0];
                                downloadT(t, !1, !0, !1, !1, n ? new URL(o) : null)
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
                            o = new t("button", {
                                id: "MediaButton"
                            }).set("innerText", "Get Images").on("click", m),
                            n = new t("button", {
                                id: "MediaButton2"
                            }).set("innerText", "Get Videos").on("click", d);
                        e.append(o, n)
                    }
                    return i((function() {
                        document.querySelectorAll(".xh8yej3.x1iyjqo2")[0].children
                    }), {
                        callback: function() {
                            p(), setInterval((() => {
                                document.querySelector("#MediaButton") || p(), document.querySelector("._aaqy") && !document.querySelector("._aaqy").querySelector("#MediaButton") && function() {
                                    var e = new t(document.querySelector("._aaqy")),
                                        o = new t("button", {
                                            id: "MediaButton"
                                        }).set("innerText", "Get Images").on("click", m),
                                        n = new t("button", {
                                            id: "MediaButton2"
                                        }).set("innerText", "Get Videos").on("click", d);
                                    e.append(o, n)
                                }()
                            }))
                        }
                    }), void console.log("Insta ballz")
                }
                if ("sclouddownloader.net" == document.domain)(async function() {
                    var e = _getV("sc");
                    async function t(e, t) {
                        let o = e => new Promise((t => setTimeout(t, e)));
                        return await new Promise((async(n, l) => {
                            var c = !1;
                            setTimeout((() => (c = 0, l())), t);
                            for (; !document.querySelector(e);)
                                if (await o(), c) {
                                    l();
                                    break
                                }
                            return n()
                        })).then((e => !0), (e => !1))
                    }
                    if ("/download-sound-track" == location.pathname) {
                        for (await t("#trackTitle"); !trackTitle.innerText.length;) await h(0);
                        for (await t("#trackLink"); !trackLink.href.length;) await h(0);
                        var o = {
                            name: trackTitle.innerText,
                            href: trackLink.href
                        };
                        console.log(o), _setV("SCinfo", o), close()
                    } else {
                        if (!_getV("SC")) throw "Bruv";
                        var n = "#urlInput";
                        if (await t(n, 2e3), await t(n, 2e3)) {
                            for (document.querySelector(n).value = e, console.log("EZ url", !!window.formSubmit);
                                "undefined" == typeof formSubmit;) {
                                document.querySelector(n).value = e;
                                try {
                                    await h(0), console.log("EZ url", formSubmit)
                                } catch {}
                            }
                            console.log("EZ url", formSubmit), formSubmit(), console.warn("Got"), setInterval((() => {
                                document.querySelector(n).value = e, formSubmit()
                            }), 1e3)
                        }
                    }
                })().then(console.log, console.warn);
                else {
                    if ("y2mate.nu" == document.domain) {
                        location.pathname.split("/")[1] != GM_getValue("y2mate.nu") && (GM_setValue("y2mate.nu", location.pathname.split("/")[1]), console.warn("updated"));
                        let Z = new URL(location.href).searchParams.get("v"),
                            Y = 1 == new URL(location.href).searchParams.get("s"),
                            J = new URL(location.href).searchParams.get("mp4"),
                            ee = new URL(location.href).searchParams.get("useT"),
                            te = Z + J + ee;
                        const oe = e => new Promise((t => setTimeout(t, e)));
                        async function g(e, t = 5e3) {
                            let o = !1;
                            for (setTimeout((() => {
                                    console.log("TimeOut for", e), o = !0
                                }), t); !document.querySelector(e) && (console.log("_", e, o), await oe(500), !o););
                            if (console.log(e, o), o) throw "NotFound";
                            return document.querySelector(e)
                        }
                        let ne = document.createElement;
                        return document.createElement = function(e, t) {
                            let o = ne.call(document, e, t);
                            return o._click = o.click, o.click = function() {
                                if (console.log(o, "was clicked", o.tagName), "A" == o.tagName) {
                                    console.log("Caught", o);
                                    let e = o.download,
                                        t = o.href;
                                    f = {
                                        id: Z,
                                        href: t,
                                        title: e
                                    }, (opener || window).postMessage(f, "*")
                                } else o._click.apply(o)
                            }, console.log(o, "was created", o.tagName), o
                        }, void async function() {
                            for (;
                                "complete" != document.readyState;) await oe(0);
                            if (Z) {
                                let e = async e => {
                                    console.log("a", e);
                                    var t = findhref2(document.forms[0])[0].href,
                                        o = findhref2(document.forms[0], "div")[0].innerText,
                                        n = {
                                            _: te,
                                            id: Z,
                                            href: t,
                                            title: o,
                                            length: {}
                                        };
                                    console.log("Posted", n), (opener || window.parent).postMessage(n, "*"), close()
                                };
                                try {
                                    await g("#video").then((e => {
                                        console.log("e", e), e.value = Y ? `https://www.youtube.com/watch?v=${Z}` : `https://www.youtube.com/shorts/${Z}`, document.querySelector('[type="submit"]').click()
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
                                                _: te,
                                                id: Z
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
                        const le = e => new Promise((t => setTimeout(t, e)));
                        async function g(e, t = 2e4) {
                            let o = !1;
                            for (setTimeout((() => {
                                    console.log("TimeOut for", e), o = !0
                                }), t); !document.querySelector(e) && (console.log("_", e, o), await le(500), !o););
                            if (console.log(e, o), o) throw "NotFound";
                            return document.querySelector(e)
                        }
                        let ce = document.createElement;
                        document._createElement = function(e, t) {
                            let o = ce.call(document, e, t);
                            return o._click = o.click, o.click = function() {
                                if (console.log(o, "was clicked", o.tagName), "A" == o.tagName) {
                                    console.log("Caught", o);
                                    let e = o.download,
                                        t = o.href;
                                    f = {
                                        id: new URL(location.href).searchParams.get("v"),
                                        href: t,
                                        title: e
                                    }
                                } else o._click.apply(o)
                            }, console.log(o, "was created", o.tagName), o
                        }, async function() {
                            if (location.href.includes("vidbutton")) throw "vidbutton";
                            GM_setValue("dlbutton", ""), GM_addValueChangeListener("dlbutton", (async function(e, t, o, n) {
                                console.log({
                                    a: e,
                                    b: t,
                                    c: o,
                                    d: n
                                }), o.includes("video download successful\ncheck downloads folder") && (await le(1e3), close())
                            }));
                            let e = await g("#url"),
                                t = await g("#downloadBtn");
                            id_ = new URL(location.href).searchParams.get("v"),
                                function(e, t) {
                                    ["focus", "input", "change", "blur"].forEach((o => {
                                        let n = new Event(o, {
                                            bubbles: !0,
                                            isTrusted: !0
                                        });
                                        e[`on${o}`] && e[`on${o}`](n), "input" === o && (e.value = t), e.dispatchEvent(n)
                                    }))
                                }(e, `https://www.youtube.com/watch?v=${id_}`), t.click()
                        }().then(console.log, (async e => {
                            "vidbutton" == e && (console.log("Best Quality Video"), await g("#height").then((e => {
                                height.selectedIndex = height.options.length - 1, dlbutton.click(), open = window.open, window.open = function(e, t, o) {
                                    console.log({
                                        a: e,
                                        b: t,
                                        c: o
                                    })
                                }, g("#dlbutton").then((e => {
                                    var t = "";
                                    setInterval((o => {
                                        t != e.innerText && (t = e.innerText, GM_setValue("dlbutton", t))
                                    }))
                                }))
                            })))
                        }))
                    } else {
                        if ("snapsave.io" == document.domain) {
                            async function g(e, t = 2e4) {
                                let o = !1;
                                for (setTimeout((() => {
                                        console.log("TimeOut for", e), o = !0
                                    }), t); !document.querySelector(e) && (console.log("_", e, o), await h(500), !o););
                                if (console.log(e, o), o) throw "NotFound";
                                return document.querySelector(e)
                            }
                            return _wfs = g, void async function() {
                                var e = await g("#s_input");
                                if (e) {
                                    console.log("Converting"), id_ = new URL(location.href).searchParams.get("v"), e.value = `https://www.youtube.com/watch?v=${id_}`, ksearchvideo(), setTimeout(ksearchvideo(), 1e3);
                                    var t = await g("#formatSelect");
                                    await g("#btn-action");
                                    t.selectedIndex = 0, t.options[0].selected = !0;
                                    for (var o = await g("#asuccess"); !(o = await g("#asuccess"));) await h(0);
                                    for (convertFile(0);
                                        "#" == o.getAttribute("href");) await h(0), o = await g("#asuccess");
                                    console.log(o.href);
                                    var n = (await _wfs(".clearfix")).querySelector("h3").innerText,
                                        l = {
                                            id: id_,
                                            href: o.href,
                                            title: n,
                                            length: {}
                                        };
                                    console.log("Posted", l), (opener || window).postMessage(l, "*")
                                } else alert("Input was not Found"), console.warn("?!!")
                            }().then(console.log).catch(console.warn)
                        }
                        if ("clips.twitch.tv" == document.domain) {
                            let ie = 1;
                            const re = e => new Promise((t => setTimeout(t, e)));
                            async function g(e, t = 2e4) {
                                let o = !1;
                                for (setTimeout((() => {
                                        console.log("TimeOut for", e), o = !0
                                    }), t); !document.querySelector(e) && (console.log("_", e, o), await re(500), !o););
                                if (console.log(e, o), o) throw "NotFound";
                                return document.querySelector(e)
                            }
                            _wfs = g, _copyElm = function(e) {
                                if (!(e instanceof Element)) throw new Error("Provided argument is not a DOM element.");
                                const t = document.createElement(e.tagName);
                                for (let o of e.attributes) t.setAttribute(o.name, o.value);
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
                                ie && (setTimeout((() => {
                                    close()
                                }), 200), open((e => e.href)(((t = new URL(location.href)).host = "clipr.xyz", t)), "1080"))
                            }().catch(console.warn)
                        } else {
                            if ("www.twitch.tv" == document.domain) {
                                var w;
                                return void setInterval((() => {
                                    w != location.href && async function() {
                                        let [e, t, o, n] = location.pathname.split("/");
                                        if ("clip" != o) return console.warn("User isnt wathcing a clip");
                                        console.log("User is Watching a CLip");
                                        const l = e => new Promise((t => setTimeout(t, e)));
                                        async function c(e, t = 2e4) {
                                            let o = !1;
                                            for (setTimeout((() => {
                                                    console.log("TimeOut for", e), o = !0
                                                }), t); !document.querySelector(e) && (console.log("_", e, o), await l(500), !o););
                                            if (console.log(e, o), o) throw "NotFound";
                                            return document.querySelector(e)
                                        }
                                        _wfs = c, _wfs_ = c, _copyElm = function(e) {
                                            if (!(e instanceof Element)) throw new Error("Provided argument is not a DOM element.");
                                            const t = document.createElement(e.tagName);
                                            for (let o of e.attributes) t.setAttribute(o.name, o.value);
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
                                                    [e, t, o, n] = location.pathname.split("/"), open((e => e.href)(((l = new URL(location.href)).host = "clipr.xyz", l)), i)
                                                })).appendTo(document.querySelector(".Layout-sc-1xcs6mc-0.hZUoPp"));
                                                "VOD" === i ? r.element.querySelector(".ScCoreButtonLabel-sc-s7h2b7-0").innerText = c : r.element.querySelector(".bFxzAY").innerText = c
                                            }))
                                        }().catch(console.warn)
                                    }(), w = location.href
                                }), 100)
                            }
                            if ("clipr.xyz" == document.domain) {
                                async function g(t, o = 2e4) {
                                    let n = !1;
                                    for (setTimeout((() => {
                                            e.log(`TimeOut for ${t}`), n = !0
                                        }), o); !document.querySelector(t) && (e.log(`_ ${t} ${n}`), await h(500), !n););
                                    if (e.log(`${t} ${n}`), n) throw "NotFound";
                                    return document.querySelector(t)
                                }

                                function h(e) {
                                    return new Promise((t => setTimeout(t, e)))
                                }

                                function y(e, t) {
                                    const o = document.createElement("a");
                                    o.href = e, o.download = t, document.body.appendChild(o), o.click(), document.body.removeChild(o)
                                }
                                return void async function() {
                                    let t = name;
                                    await async function() {
                                        for (;
                                            "complete" != document.readyState;) await h(0);
                                        return !0
                                    }(), e.log("Loaded");
                                    let o = ((e = {}) => ([...document.querySelectorAll(".flex.items-center.space-x-4")].filter((e => findhref2(e)[0])).filter((e => findhref2(e)[0].href.includes("clips.twitchcdn.net"))).forEach((t => {
                                        e[t.querySelector(".space-x-1").innerText.replace("p", "")] = findhref2(t)[0].href
                                    })), e))()[t];
                                    e.log(1);
                                    let n = document.querySelector("body > div.relative.overflow-hidden > main > div > div.px-4.mx-auto.max-w-7xl.sm\\:px-6.lg\\:px-8 > div.mb-6.space-y-3.lg\\:flex.lg\\:items-center.lg\\:justify-between.lg\\:space-y-0 > div.lg\\:flex.lg\\:items-center > p > span:nth-child(1)").innerText;
                                    e.log(2);
                                    let l = document.querySelector("body > div.relative.overflow-hidden > main > div > div.px-4.mx-auto.max-w-7xl.sm\\:px-6.lg\\:px-8 > div.mb-6.space-y-3.lg\\:flex.lg\\:items-center.lg\\:justify-between.lg\\:space-y-0 > div.lg\\:flex.lg\\:items-center > h2").innerText;
                                    e.log(3);
                                    let c = `@${n} on Twitch | ${l} - ${t}P.mp4`;
                                    e.log(`Downloading file as: ${c}`), open(o), e.log(4), await h(4e3), close()
                                }().catch(console.warn)
                            }
                            if (location.href.includes("tubemp4.is")) {
                                async function g(e, t = 3e4) {
                                    var o;
                                    for (h(t).then((e => o = !0)); !document.querySelector(e) && (await h(0), !o););
                                    return document.querySelector(e)
                                }
                                console.log("ok"), g("#u").then((async e => {
                                    e.value = `https://www.youtube.com/watch?v=${new URL(location.href).searchParams.get("v")}`, convert.click(), await h(200), (await g("#convert")).click(), (await g(".process-button")).click(), g(".download-button").then((e => {
                                        let t = document.createElement;
                                        document.createElement = function(e, o) {
                                            let n = t.call(document, e, o);
                                            return n._click = n.click, n.click = function() {
                                                if (console.log(n, "was clicked", n.tagName), "A" == n.tagName) {
                                                    console.log("Caught", n);
                                                    let e = n.download,
                                                        t = n.href;
                                                    f = {
                                                        id: new URL(location.href).searchParams.get("v"),
                                                        href: t,
                                                        title: e
                                                    }, (opener || window).postMessage(f, "*"), close()
                                                } else n._click.apply(n)
                                            }, console.log(n, "was created", n.tagName), n
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
                const o = document.createElement("a");
                o.href = e, o.download = t, document.body.appendChild(o), o.click(), document.body.removeChild(o)
            }

            function k(e, t = "aria-label", o = document.body) {
                var n = [];
                return function o(l) {
                    var c = !1;
                    t ? l.getAttribute(t) == e && (n.push(l), c = 1) : [...l.attributes].map((e => {
                        const {
                            name: t,
                            value: o
                        } = e;
                        return {
                            name: t,
                            value: o
                        }
                    })).filter((t => t.value == e)).length && (n.push(l), c = 1), l.children.length && !c && ((l = l.children).forEach = [].forEach, l.forEach((e => {
                        o(e)
                    })))
                }(o), n.length ? 1 == n.length ? n[0] : n || !1 : null
            }
            console.log("B?"), _getIds = function() {
                if (document.domain.includes("music")) throw alert("These button dont work on youtube music yet"), ".";
                var e = [...document.getElementsByTagName("ytd-playlist-panel-renderer")].filter(n).filter((e => !r(e)))[0];
                return findhref2(e, "span").filter((e => !r(e))).filter(n).filter((e => "video-title" == e.id)).map(a).map(a).map((e => ({
                    id: setElement(findhref2(a(e))[0].href),
                    e: e
                })))
            }, info = {}, downloadT = function(e, t = !1, n = !0, l = !1, c = !1, i = "") {
                let r = e + (l ? "mp4" : "mp3") + n;
                var a;
                if (!(a = document.getElementById(r)) || a.remove(), localStorage[r] && !t && (!c || !confirm(`You have already download this video as .${l?"mp4":"mp3"}\nStill download?`))) return;
                let s = i || location;
                var u = new URL(location.href);
                u.host = u.host.replace(".com", "mz.com"), console.log("o", u);
                let d = ["https://y2mate.nu/" + (GM_getValue("y2mate.nu") || "0HzX") + "/", "?v=", e, "&s=", u.pathname.startsWith("/shorts/") ? 1 : 0, "&mp4=", l ? "mp4" : "mp3", "&useT=", n];
                console.log(r, d);
                return function(e, t, o = !1) {
                    var n = addEventListener(e, ((...e) => {
                        t(...e), o && removeEventListener(n)
                    }), !0)
                }("unload", (function() {
                    info[e].close()
                }), !0), onmessage = function(e) {
                    if (e.origin == o || e.origin.match(/https?:\/{2}onlymp3\.to/) || e.origin.match(/https?:\/{2}en\.onlymp3\.to/) || e.origin.match(/https?:\/{2}en(\d)\.onlinevideoconverter\.pro/) || "https://sss.instasaverpro.com" == e.origin || "https://y2mate.nu" == e.origin || "https://snapsave.io" == e.origin || "https://tubemp4.is" == e.origin) {
                        const {
                            data: {
                                href: t,
                                title: o,
                                length: c,
                                id: i,
                                _: r
                            }
                        } = e;
                        let a = o + (l ? ".mp4" : ".mp3");
                        (e => {
                            e && e.remove()
                        })(document.getElementById(r)), console.log("Handled", {
                            href: t,
                            title: o,
                            length: c,
                            id: i,
                            _: r
                        }, e), E.set("innerText", "Get MP3"), E.set("disabled", !1), n ? (console.log("Getting video"), y(t, a)) : open(t), localStorage[r] = t
                    } else console.log("Unhandled Post", e)
                }, info[e] = l ? open(s.pathname.startsWith("/shorts/") ? "https://yt5s.biz/enxj100/" : `https://qdownloader.cc/youtube-video-downloader.html?v=${e}`, [e, s.pathname.startsWith("/shorts/") ? 1 : 0, l + !1], "width=400,height=500") : !open(d.join(""), [e, s.pathname.startsWith("/shorts/") ? 1 : 0, l + !1], "width=400,height=500")
            }, downloadTikTok = function(e, t) {
                (async function(e, t) {
                    await async function() {
                        for (; b && !b.closed;) await h(0);
                        return 1
                    }(), console.log("ez");
                    let n = t.videoID,
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
                        if (e.origin == o || e.origin.match(/https?:\/{2}savetik\.csavetik.coo/) || e.origin.match(/https?:\/{2}en\.onlymp3\.to/) || e.origin.match(/https?:\/{2}en(\d)\.onlinevideoconverter\.pro/) || "https://savetik.co" == e.origin) {
                            var {
                                data: {
                                    href: t,
                                    links: n,
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
                                    links: n,
                                    mp4: a
                                }, e), "https://savetik.co" == e.origin) l = c, y(a ? n[0] : n.pop(), s + " - " + l + (a ? ".mp4" : ".mp3"), b);
                            else {
                                if (useT) {
                                    let e = document.createElement("a");
                                    e.download = l + ".mp3", e.href = t, document.body.appendChild(e), e.click(), e.remove()
                                } else open(t);
                                localStorage[_] = t
                            }
                        } else console.log("Unhandled Post", e)
                    }, b = open("https://savetik.co/en", [`https://www.tiktok.com/${l}/video/${n}`, e + !1], "width=400,height=500")
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
                var t, o = !1;
                return await new Promise(((n, l) => {
                    var c = setInterval((l => {
                        e.forEach((e => {
                            this[e[0]] = S(window[e[1]]), window[e[1]] || o || (o = !0, t = e[1], console.log(e))
                        })), t && (n(t), clearInterval(c))
                    }), 500)
                })), t
            }
            window.ch3 = S, window.getWin = x, WIP_ = function(e, t, o) {
                if (!t) return alert("This button is corrently broken");
                var n = _getIds(),
                    l = [];
                for (let t = 0; t < e; t++) l.push(["w" + t, "win" + t]);
                n.forEach((({
                    id: e
                }, n) => {
                    x(l).then((l => {
                        if (!info[e] && !localStorage[e] || o) {
                            console.log("download", e, n), window[l] = downloadT(e, o, !0, !!t), window.addEventListener("unload", (function(e) {
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

                                    function o() {
                                        try {
                                            return !(![...document.querySelectorAll("#header-description")].filter(n).filter((e => !r(e)))[0] && !c(".autoplay")) && ([...document.querySelectorAll("#header-description")].filter(n).filter((e => !r(e)))[0] || c(".autoplay"))
                                        } catch (e) {
                                            return !1
                                        }
                                    }
                                    console.log(e), E.appendTo(e), q.appendTo(e), console.log("Posted Buttons");
                                    var l = !1;
                                    setInterval((() => {
                                        l != o() && o() ? (console.log("Added playlist buttons"), setTimeout((() => {
                                            o().append(t.br.element), o().append(C.element), o().append(L.element)
                                        }), 100)) : l == o() || o() || console.log("buttons are gone?!?!"), l = o()
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
                                var o = !1;
                                setInterval((() => {
                                    o != e() && e() ? (console.log("Added playlist buttons"), setTimeout((() => {
                                        e().append(t.br.element), e().append(P.element), e().append(A.element)
                                    }), 100)) : o == e() || e() || console.log("buttons are gone?!?!"), o = e()
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
                                o = e[0].split("Title: ")[1],
                                n = findhref2(videoTitle.parentNode)[0].href,
                                l = {
                                    id: setElement(location.href),
                                    href: n,
                                    title: o,
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
                let [ae, se] = name.split(",");
                i((function(e = function() {}) {
                    document.getElementById("search_txt").value = `https://www.youtube.com/${"1"==se?"shorts/":"watch?v="}${ae}`, document.getElementById("btn-submit").click(), console.log(ae, se)
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
                        o = {
                            id: ae,
                            href: t,
                            title: e,
                            length: {}
                        };
                    console.log("Posted"), (opener || window).postMessage(o, "*")
                }), {
                    callback: close
                })
            } else if (location.href.includes("yt5s.biz")) {
                async function g(e) {
                    for (; !document.querySelector(e);) await h(0);
                    return !0
                }(async function() {
                    let [e, t] = name.split(",");
                    if (!e.length || !t.length) return console.warn("No info Preset");
                    var o = `https://www.youtube.com/${"1"==t?"shorts/":"watch?v="}${e}`;
                    await g("#txt-url"), console.log("Input Loaded"), document.querySelector("#txt-url").value = o, await g("#btn-submit"), console.log("GEtting res"), await h(100), document.querySelector("#btn-submit").click(), await g("#video_title"), console.log("Got Res");
                    var n = document.querySelector("#video_title").innerText,
                        l = [0];
                    return [...document.querySelector("#result").querySelector("table").querySelectorAll("tr")].forEach((e => {
                        var t = e.innerText.match(/(?<res>\d+)(p|P)/i) || {};
                        t.groups && (t = Number(t.groups.res), l[0] < t && (l[0] = t, l[1] = findhref2(e)[0].href, l[2] = e))
                    })), {
                        id: e,
                        title: n,
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
                let [ue, de] = name.split(",");
                if (!ue.length || !de.length) return console.Warn("NO info Preset");
                let me = function() {};
                i((function(e = function() {}) {
                    document.getElementById("texturl").value = `https://www.youtube.com/${"1"==de?"shorts/":"watch?v="}${ue}`, document.getElementById("convert1").click(), console.log("Searched")
                }), {
                    callback: me
                }), i((function() {
                    if ("none" == stepProcess.style.display) throw document.getElementById("convert1").click(), "this";
                    console.log("Searching")
                }), {
                    callback: me
                }), i((function() {
                    if (0 == document.getElementById("form-app-root").children.length) throw "";
                    console.log("loaded");
                    var {
                        title: e,
                        href: t
                    } = $("#download-720-MP4") && $("#download-720-MP4")[0] ? $("#download-720-MP4")[0] : $("#download-720-MP4"), o = {
                        id: ue,
                        href: t,
                        title: e,
                        length: {}
                    };
                    console.log("Posted"), (opener || window).postMessage(o, "*")
                }), {
                    callback: close
                })
            } else if (location.href.includes("savetik.co")) {
                var [U, N] = name.split(",");
                addEventListener("load", (function() {
                    i((function() {
                        s_input.value = U, ksearchvideo(), setTimeout(ksearchvideo, 1e3)
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
                                info: setElement2(U)
                            };
                            onmessage = function(e) {
                                if ("https://www.tiktok.com" == e.origin) {
                                    var {
                                        data: {
                                            s: t,
                                            url: o,
                                            title: n
                                        }
                                    } = e;
                                    console.log("Handled", {
                                        s: t,
                                        url: o,
                                        title: n
                                    }, e), t ? setTimeout(close, 100) : y(o, n, null, close)
                                } else console.log("Unhandled Post", e)
                            }, (opener || window).postMessage(e, "*")
                        }()
                }), {
                    callback() {}
                })
            } else document.domain.includes("music") ? (console.log("Added MiniPlayer Toggle with I"), addEventListener("keypress", (function({
                isTrusted: e,
                ctrlKey: t,
                shiftKey: o,
                code: n,
                target: l,
                target: {
                    tagName: c
                }
            }) {
                ["INPUT", "TEXTAREA"].includes(c) || t || o || !e || "KeyI" != n || (abc_("Close player page") || abc_("Open player page")[1]).click()
            }))) : document.domain.includes("loader.to") && location.href.includes("/api/") && console.warn("using loader.to api");
            const B = window.trustedTypes && trustedTypes.createPolicy("trustedHTMLPolicy", {
                    createHTML: e => e,
                    createScriptURL: e => e
                }),
                R = "\n    /* Default iframe styles */\n    #cardApiIframe {\n        width: 100%;\n        height: 100%;\n        transition: all 2.5s ease-in-out;\n    }\n\n    /* Collapse animation when the class is toggled */\n    .collapse-frame {\n        width: 0;\n        height: 0;\n        margin-left: auto;\n        margin-right: auto;\n        transition: all 2.5s ease-in-out;\n    }\n",
                z = document.createElement("style");

            function G(e) {
                const t = j.element;
                e ? t.classList.add("collapse-frame") : t.classList.remove("collapse-frame")
            }
            z.type = "text/css", z.appendChild(document.createTextNode(B ? B.createHTML(R) : R));
            var V = `https://www.youtube.com/watch?v=${setElement(location.href)}&adUrl=https://www.youtube.com/channel/UCOA8lE9-0XnEIdHqjfQUz1A?sub_confirm=1`,
                D = B ? B.createScriptURL("https://loader.to/api/card2/?url=" + V) : "https://loader.to/api/card2/?url=" + V;
            const j = new _element("iframe", {
                    id: "cardApiIframe",
                    scrolling: "no",
                    width: "100%",
                    height: "100%",
                    allowtransparency: "true",
                    style: "border: none",
                    src: D
                }),
                O = new _element("script", {
                    src: B ? B.createScriptURL("https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.9/iframeResizer.min.js") : "https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.9/iframeResizer.min.js"
                });
            O.element.addEventListener("load", (() => {
                "function" == typeof iFrameResize ? iFrameResize({
                    log: !1
                }, "#cardApiIframe") : console.error("iFrameResize function not available")
            }));
            const F = new _element("div").append(j, O);
            document.querySelector("#secondary.ytd-watch-flexy");
            var W = setElement(location.href);
            j.element.addEventListener("load", (() => {
                console.log("Iframe is fully loaded"), G(!1)
            })), G(!0);
            var H = 0,
                Q = 1,
                K = 0,
                X = 0;
            setInterval((e => {
                const t = document.querySelector("video"),
                    o = document.querySelector("#video-companion-root") || document.querySelector("#secondary-inner") || document.querySelector("#secondary.ytd-watch-flexy");
                V = `https://www.youtube.com/watch?v=${setElement(location.href)}&adUrl=https://www.youtube.com/channel/UCOA8lE9-0XnEIdHqjfQUz1A?sub_confirm=1`, D = B ? B.createScriptURL("https://loader.to/api/card2/?url=" + V) : "https://loader.to/api/card2/?url=" + V, o && (!o.querySelector("#cardApiIframe") && (G(!0), o.parentNode.prepend(z), o.prepend(F.element), console.log("Added That Thing")), setElement(location.href) != W && (G(!0), j.set("src", D), console.log("Fixed That Thing"), W = setElement(location.href)));
                const n = c("yt-button-view-model#dismiss-button");
                n && !r(n) && n.click();
                const l = document.getElementsByClassName("ytp-ad-button-icon")[0];
                try {
                    if (l && !T) console.log("Muted ad"), console.log("Started at", tr), T = 1, t.playbackRate = t.duration / 7, t.muted = 1;
                    else if (!l && T) {
                        console.log("Unmuted video");
                        try {
                            t.muted = 0
                        } catch (e) {
                            console.warn("Failed unmuting")
                        }
                        T = 0
                    }
                } catch {}!T && document.querySelector("video") && (tr = document.querySelector("video") && document.querySelector("video").currentTime.toFixed());
                const i = [...document.querySelectorAll("#song-video"), ...document.querySelectorAll("#ytd-player")].map((e => [...e.querySelectorAll("button")].filter((e => e.className.includes("skip")))[0])).filter((e => !!e))[0];
                i ? (K && t.playbackRate == t.duration / 7 || (K = 1, console.log("Skipping ad :>")), i.click(), Q = 0) : !Q && t ? (K = 0, Q = 1, t.playbackRate = H > 2 ? 1 : H, console.log("Fixed playBack")) : t && (K = 0, (H = t.playbackRate) > 2 && (t.playbackRate = 1));
                const a = document.getElementsByClassName("ytp-ad-overlay-close-button")[2];
                a && (a.click(), console.log("Closed ad card"));
                let s = [...document.querySelectorAll(".yt-spec-button-shape-next")].filter((e => e.innerText.includes("Ads")))[0];
                s && (s.click(), !X && location.href.includes("watch") && (X = 1, location.reload()))
            }), 10)
        }()
}();