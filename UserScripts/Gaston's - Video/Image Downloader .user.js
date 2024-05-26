// ==UserScript==
// @name Gaston's - Video/Image Downloader
// @namespace http://tampermonkey.net/
// @version 1.8
// @description Instagram/Youtube/tiktok Video/Audio Downloader alwayts updated
// @author gaston1799
// @match *://www.youtube.com/*
// @match *://www.instagram.com/*
// @match *://music.youtube.com/*
// @match *://onlymp3.app/*
// @match *://onlymp3.to/*
// @match *://en.onlymp3.app/*
// @match *://www.yt2conv.com/*
// @match *://www.tiktok.com/*
// @match *://en3.onlinevideoconverter.pro/*
// @match *://savetik.co/*
// @icon data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @require https://raw.githubusercontent.com/naquangaston/HostedFiles/main/UserScripts/Updater.js
// @grant GM_info
// @grant GM_setValue
// @grant GM_getValue
// @grant GM_xmlhttpRequest
// ==/UserScript==
GM_setValue_ = GM_setValue, GM_getValue_ = GM_getValue, GM_info_ = GM_info;
var UnmutePath = "M3.15,3.85l4.17,4.17L6.16,9H3v6h3.16L12,19.93v-7.22l2.45,2.45c-0.15,0.07-0.3,0.13-0.45,0.18v1.04 c0.43-0.1,0.83-0.27,1.2-0.48l1.81,1.81c-0.88,0.62-1.9,1.04-3.01,1.2v1.01c1.39-0.17,2.66-0.71,3.73-1.49l2.42,2.42l0.71-0.71 l-17-17L3.15,3.85z M11,11.71v6.07L6.52,14H4v-4h2.52l1.5-1.27L11,11.71z M10.33,6.79L9.62,6.08L12,4.07v4.39l-1-1V6.22L10.33,6.79 z M14,8.66V7.62c2,0.46,3.5,2.24,3.5,4.38c0,0.58-0.13,1.13-0.33,1.64l-0.79-0.79c0.07-0.27,0.12-0.55,0.12-0.85 C16.5,10.42,15.44,9.1,14,8.66z M14,5.08V4.07c3.95,0.49,7,3.85,7,7.93c0,1.56-0.46,3.01-1.23,4.24l-0.73-0.73 C19.65,14.48,20,13.28,20,12C20,8.48,17.39,5.57,14,5.08z",
    mutePath = "M17.5,12c0,2.14-1.5,3.92-3.5,4.38v-1.04c1.44-0.43,2.5-1.76,2.5-3.34c0-1.58-1.06-2.9-2.5-3.34V7.62 C16,8.08,17.5,9.86,17.5,12z M12,4.07v15.86L6.16,15H3V9h3.16L12,4.07z M11,6.22L6.52,10H4v4h2.52L11,17.78V6.22z M21,12 c0,4.08-3.05,7.44-7,7.93v-1.01c3.39-0.49,6-3.4,6-6.92s-2.61-6.43-6-6.92V4.07C17.95,4.56,21,7.92,21,12z";
downloadFileAsTitle = function(e, t, n, o) {
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
    }, query = function(e) {
        return t = $(e) ? $(e).length ? $(e)[0] : $(e) : null, Object.keys(t).length ? t : null;
        var t
    }, getElementByAttribute = function(e, t = "aria-label", n = document.body) {
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
        class e {
            static get br() {
                return new e("br")
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
        setElement2 = function(e) {
            return e.match(/(?<host>https?\:\/\/www\.tiktok\.com)\/(?<username>@[^\/]+)\/video\/(?<videoID>\d+)/i).groups
        };
        var t = "https://onlymp3.app";

        function n(e) {
            "function" == typeof jQuery && e instanceof jQuery && (e = e[0]);
            var t = e.getBoundingClientRect();
            return t.top >= 0 - (window.innerHeight || document.documentElement.clientHeight) / 2 && t.left >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight) + (window.innerHeight || document.documentElement.clientHeight) / 2 && t.right <= (window.innerWidth || document.documentElement.clientWidth)
        }

        function o(e, {
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

        function l(e) {
            return null === e.offsetParent
        }

        function i(e) {
            return e.parentNode
        }

        function c() {
            return get_aria_label("Go back") && get_aria_label("Go back").click ? get_aria_label("Go back") : document.querySelector("._afxv")
        }

        function r() {
            return get_aria_label("Next") && get_aria_label("Next").click ? get_aria_label("Next") : document.querySelector("._afxw")
        }

        function a() {
            alert("This button doenst work yet")
        }

        function s() {
            (async function() {
                for (var e = e => new Promise((t => setTimeout(t, e))), t = new Set, n = {}; c();) {
                    if (await e(100), !c()) {
                        await e(1e3);
                        break
                    }
                    c().click()
                }[...getInstalImages()].forEach((e => {
                    let n = findhref2(e, "img")[0];
                    t.add([n.src, n.getAttribute("alt")])
                })), r().click();
                try {
                    r().click()
                } catch (e) {}
                for (; r();) {
                    await e(300), [...getInstalImages()].forEach((e => {
                        let n = findhref2(e, "img")[0];
                        t.add([n.src, n.getAttribute("alt")])
                    }));
                    try {
                        r().click()
                    } catch (e) {}
                }
                for (; await e(100), c();) c().click();
                [...t].forEach((e => {
                    n[e[0]] = e[1]
                })), (t = Object.keys(n).map((e => ({
                    src: e,
                    name: n[e]
                })))).forEach((e => {
                    var t = new URL(e.src).pathname.split(".").pop();
                    downloadFileAsTitle(e.src, `${e.name}.${t}`)
                })), console.log("done", t)
            })().then(console.log, console.warn)
        }
        if (setElement = function(e) {
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
            }, "www.instagram.com" == document.domain) {
            function d() {
                console.log("Appended buttons man");
                var t = new e(document.querySelectorAll(".xh8yej3.x1iyjqo2")[0]),
                    n = new e("button", {
                        id: "MediaButton"
                    }).set("innerText", "Get Images").on("click", s),
                    o = new e("button", {
                        id: "MediaButton2"
                    }).set("innerText", "Get Videos").on("click", a);
                t.append(n, o)
            }
            return o((function() {
                document.querySelectorAll(".xh8yej3.x1iyjqo2")[0].children
            }), {
                callback: function() {
                    d(), setInterval((() => {
                        document.querySelector("#MediaButton") || d(), document.querySelector("._aaqy") && !document.querySelector("._aaqy").querySelector("#MediaButton") && function() {
                            var t = new e(document.querySelector("._aaqy")),
                                n = new e("button", {
                                    id: "MediaButton"
                                }).set("innerText", "Get Images").on("click", s),
                                o = new e("button", {
                                    id: "MediaButton2"
                                }).set("innerText", "Get Videos").on("click", a);
                            t.append(n, o)
                        }()
                    }))
                }
            }), void console.log("Insta ballz")
        }

        function u(e, t = "aria-label", n = document.body) {
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

        function m() {
            (u("Mute", "title") && u("Mute", "title")[0] || u("Mute (m)", "title")).click()
        }

        function h() {
            (query("#right-controls") && query("#right-controls").querySelectorAll("path")[0].getAttribute("d") == UnmutePath && u("Mute", "title")[0] || u("Unmute", "title") || u("Unmute (m)", "title")).click()
        }
        _getIds = function() {
            if (document.domain.includes("music")) throw alert("These button dont work on youtube music yet"), ".";
            var e = [...document.getElementsByTagName("ytd-playlist-panel-renderer")].filter(n).filter((e => !l(e)))[0];
            return findhref2(e, "span").filter((e => !l(e))).filter(n).filter((e => "video-title" == e.id)).map(i).map(i).map((e => ({
                id: setElement(findhref2(i(e))[0].href),
                e: e
            })))
        }, info = {}, downloadT = function(e, n = !1, o = !0, l = !1, i = !1) {
            let c = e + (l ? "mp4" : "mp3") + o;
            if (!localStorage[c] || n || i && confirm(`You have already download this video as .${l?"mp4":"mp3"}\nStill download?`)) {
                ! function(e, t, n = !1) {
                    var o = addEventListener(e, ((...e) => {
                        t(...e), n && removeEventListener(o)
                    }), !0)
                }("unload", (function() {
                    info[e].close()
                }), !0), onmessage = function(e) {
                    if (e.origin == t || e.origin.match(/https?:\/{2}onlymp3\.to/) || e.origin.match(/https?:\/{2}en\.onlymp3\.to/) || e.origin.match(/https?:\/{2}en(\d)\.onlinevideoconverter\.pro/)) {
                        const {
                            data: {
                                href: t,
                                title: l,
                                length: i,
                                id: r
                            }
                        } = e;
                        if (console.log("Handled", {
                                href: t,
                                title: l,
                                length: i,
                                id: r
                            }, e), o) {
                            var n = document.createElement("a");
                            n.download = l + ".mp4", n.href = t, document.body.appendChild(n), n.click(), n.remove()
                        } else open(t);
                        localStorage[c] = t
                    } else console.log("Unhandled Post", e)
                };
                var r = new URL(location.href);
                return r.host = r.host.replace(".com", "mz.com"), info[e] = l ? open("https://en1.onlinevideoconverter.pro/112Ei/youtube-downloader-mp4", [e, location.pathname.startsWith("/shorts/") ? 1 : 0, l + !1], "width=400,height=500") : open([r.protocol, "//", r.host, r.pathname, "?v=", e].join(""), [e, location.pathname.startsWith("/shorts/") ? 1 : 0], "width=400,height=500")
            }
        }, downloadTikTok = function(e, n) {
            let o = n.videoID,
                l = n.username,
                i = function() {
                    try {
                        return document.querySelector("#app > div.css-14dcx2q-DivBodyContainer.e1irlpdw0 > div:nth-child(4) > div > div.css-1qjw4dg-DivContentContainer.e1mecfx00 > div.css-1stfops-DivCommentContainer.ekjxngi0 > div > div.css-1xlna7p-DivProfileWrapper.ekjxngi4 > div.css-1u3jkat-DivDescriptionContentWrapper.e1mecfx011 > div.css-1nst91u-DivMainContent.e1mecfx01 > div.css-bs495z-DivWrapper.e1mzilcj0 > div > div.css-1d7krfw-DivOverflowContainer.e1mzilcj5 > h1").innerText.replace("Replying to ", "")
                    } catch {
                        try {
                            return document.querySelector("#app > div.css-14dcx2q-DivBodyContainer.e1irlpdw0 > div:nth-child(4) > div > div.css-1qjw4dg-DivContentContainer.e1mecfx00 > div.css-1stfops-DivCommentContainer.ekjxngi0 > div > div.css-1xlna7p-DivProfileWrapper.ekjxngi4 > div.css-1u3jkat-DivDescriptionContentWrapper.e1mecfx011 > div.css-1nst91u-DivMainContent.e1mecfx01 > div.css-bs495z-DivWrapper.e1mzilcj0").innerText.replace("Replying to ", "")
                        } catch (e) {
                            return document.querySelector("#main-content-video_detail > div > div.css-12kupwv-DivContentContainer.ege8lhx2 > div.css-1senhbu-DivLeftContainer.ege8lhx3 > div.css-1sb4dwc-DivPlayerContainer.eqrezik4 > div.css-3lfoqn-DivDescriptionContentWrapper-StyledDetailContentWrapper.eqrezik15 > div.css-r4nwrj-DivVideoInfoContainer.eqrezik3 > div.css-bs495z-DivWrapper.e1mzilcj0 > div > h1").innerText.replace("Replying to ", "")
                        }
                    }
                }();
            var c;
            onmessage = function(e) {
                if (e.origin == t || e.origin.match(/https?:\/{2}savetik\.csavetik.coo/) || e.origin.match(/https?:\/{2}en\.onlymp3\.to/) || e.origin.match(/https?:\/{2}en(\d)\.onlinevideoconverter\.pro/) || "https://savetik.co" == e.origin) {
                    var {
                        data: {
                            href: n,
                            links: o,
                            title: l,
                            length: r,
                            id: a,
                            mp4: s,
                            info: {
                                username: d
                            }
                        }
                    } = e;
                    if (console.log("Handled", {
                            href: n,
                            title: l,
                            length: r,
                            id: a,
                            links: o,
                            mp4: s
                        }, e), "https://savetik.co" == e.origin) l = i, downloadFileAsTitle(s ? o[0] : o.pop(), d + " - " + l + (s ? ".mp4" : ".mp3"), c);
                    else {
                        if (useT) {
                            let e = document.createElement("a");
                            e.download = l + ".mp3", e.href = n, document.body.appendChild(e), e.click(), e.remove()
                        } else open(n);
                        localStorage[_] = n
                    }
                } else console.log("Unhandled Post", e)
            }, c = open("https://savetik.co/en", [`https://www.tiktok.com/${l}/video/${o}`, e + !1], "width=400,height=500")
        }, abc_ = u, M = m, Um = h;
        var f = 0;

        function p(e) {
            return !!e && !e.closed
        }
        async function g(e = [
            ["w1", "win1"],
            ["w2", "win2"],
            ["w3", "win3"],
            ["w4", "win4"]
        ]) {
            var t, n = !1;
            return await new Promise(((o, l) => {
                var i = setInterval((l => {
                    e.forEach((e => {
                        this[e[0]] = p(window[e[1]]), window[e[1]] || n || (n = !0, t = e[1], console.log(e))
                    })), t && (o(t), clearInterval(i))
                }), 500)
            })), t
        }
        window.ch3 = p, window.getWin = g, WIP_ = function(e, t, n) {
            var o = _getIds(),
                l = [];
            for (let t = 0; t < e; t++) l.push(["w" + t, "win" + t]);
            o.forEach((({
                id: e
            }, o) => {
                g(l).then((l => {
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
        };
        var v = new e("button").set("innerText", "Get MP3").on("click", (function(e) {
                downloadT(setElement(location.href), !0, !0, !1, !0)
            })),
            w = new e("button").set("innerText", "Get MP4").on("click", (function(e) {
                downloadT(setElement(location.href), !0, !0, !0, !0)
            })),
            y = new e("button").set("innerText", "PlayList MP3").on("click", (function(e) {
                WIP_(2, !1, !1)
            })),
            b = new e("button").set("innerText", "PlayList MP4").on("click", (function(e) {
                WIP_(2, !0, !1)
            })),
            k = new e("button").set("innerText", "Get MP4").on("click", (function(e) {
                downloadTikTok(!0, setElement2(getClass("ehlq8k34") ? getClass("ehlq8k34").innerText : location.href))
            })),
            E = (new e("button", {
                id: "tt1"
            }).set("innerText", "Get MP4").on("click", (function(e) {
                downloadTikTok(!0, setElement2(getClass("ehlq8k34") ? getClass("ehlq8k34").innerText : location.href))
            })), new e("button").set("innerText", "Get MP3").on("click", (function(e) {
                downloadTikTok(!1, setElement2(getClass("ehlq8k34") ? getClass("ehlq8k34").innerText : location.href))
            })));

        function T() {
            return query("#end") || query("#right-content")
        }

        function C() {
            const t = T();

            function o() {
                try {
                    return !(![...document.querySelectorAll("#header-description")].filter(n).filter((e => !l(e)))[0] && !query(".autoplay")) && ([...document.querySelectorAll("#header-description")].filter(n).filter((e => !l(e)))[0] || query(".autoplay"))
                } catch (e) {
                    return !1
                }
            }
            v.appendTo(t), w.appendTo(t), console.log("Posted Buttons");
            var i = !1;
            setInterval((() => {
                i != o() && o() ? (console.log("Added playlist buttons"), setTimeout((() => {
                    o().append(e.br.element), o().append(y.element), o().append(b.element)
                }), 100)) : i == o() || o() || console.log("buttons are gone?!?!"), i = o()
            }), 100)
        }
        if (a1 = [
                ["youtube", function() {
                    o((function() {
                        if (!T()) throw "Cant append buttons yet";
                        return !0
                    }), {
                        callback: C
                    })
                }],
                ["tiktok", function() {
                    addEventListener("load", (function() {
                        o((function() {
                            if (!abc_("browse-copy", "data-e2e")) throw "Cant Append";
                            k.appendTo(document.querySelectorAll(".e1mecfx011")), E.appendTo(document.querySelectorAll(".e1mecfx011"))
                        }), {
                            callback: function() {}
                        }), o((function() {
                            if (!document.getElementsByClassName("e13wiwn60")[0]) throw "Cant Append";

                            function t() {
                                try {
                                    return !!abc_("browse-copy", "data-e2e").parentNode && abc_("browse-copy", "data-e2e").parentNode
                                } catch (e) {
                                    return !1
                                }
                            }
                            k.appendTo(document.getElementsByClassName("e13wiwn60")[0]), E.appendTo(document.getElementsByClassName("e13wiwn60")[0]), console.log("Posted Buttons");
                            var n = !1;
                            setInterval((() => {
                                n != t() && t() ? (console.log("Added playlist buttons"), setTimeout((() => {
                                    t().append(e.br.element), t().append(k.element), t().append(E.element)
                                }), 100)) : n == t() || t() || console.log("buttons are gone?!?!"), n = t()
                            }), 100)
                        }), {
                            callback: function() {}
                        })
                    }))
                }]
            ].filter((e => location.host.includes(e[0])))[0], a1 && a1[1] && a1[1](), delete a1, location.href.includes("onlymp3.app")) {
            return setInterval((() => {
                document.getElementById("error-text").innerText.length > 5 && location.reload()
            }), 2e4), console.log("Getting MP3"), void o((function(e = function() {}) {
                ! function() {
                    var [e, t] = name.split(",");
                    txtUrl.value = `https://www.youtube.com/${"1"==t?"shorts/":"watch?v="}${e}`, getListFormats()
                }(), o((function(e = function() {}) {
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
            let [I, S] = name.split(",");
            o((function(e = function() {}) {
                document.getElementById("search_txt").value = `https://www.youtube.com/${"1"==S?"shorts/":"watch?v="}${I}`, document.getElementById("btn-submit").click(), console.log(I, S)
            }), {
                callback: function() {}
            }), o((function(e = function() {}) {
                if (console.log(result.children.length), !result.children.length) throw document.getElementById("btn-submit").click(), "no there"
            }), {
                int: 1e3,
                callback: function() {}
            }), o((function() {
                document.getElementById("btn-download").click()
            }), {
                callback: function() {}
            }), o((function() {
                var e = $(".media-heading")[0].innerText,
                    t = downloadbtn.href,
                    n = {
                        id: I,
                        href: t,
                        title: e,
                        length: {}
                    };
                console.log("Posted"), (opener || window).postMessage(n, "*")
            }), {
                callback: close
            })
        }
        if (location.href.includes("en3.onlinevideoconverter.pro")) {
            let [P, A] = name.split(","), B = function() {};
            o((function(e = function() {}) {
                document.getElementById("texturl").value = `https://www.youtube.com/${"1"==A?"shorts/":"watch?v="}${P}`, document.getElementById("convert1").click(), console.log("Searched")
            }), {
                callback: B
            }), o((function() {
                if ("none" == stepProcess.style.display) throw document.getElementById("convert1").click(), "this";
                console.log("Searching")
            }), {
                callback: B
            }), o((function() {
                if (0 == document.getElementById("form-app-root").children.length) throw "";
                console.log("loaded");
                var {
                    title: e,
                    href: t
                } = $("#download-720-MP4") && $("#download-720-MP4")[0] ? $("#download-720-MP4")[0] : $("#download-720-MP4"), n = {
                    id: P,
                    href: t,
                    title: e,
                    length: {}
                };
                console.log("Posted"), (opener || window).postMessage(n, "*")
            }), {
                callback: close
            })
        }
        if (location.href.includes("savetik.co")) {
            var [x, q] = name.split(",");
            addEventListener("load", (function() {
                o((function() {
                    s_input.value = x, ksearchvideo(), setTimeout(ksearchvideo, 1e3)
                }), {
                    callback() {}
                })
            })), o((function() {
                document.getElementsByClassName("clearfix")[0].innerText,
                    function() {
                        console.log("Found");
                        let e = {
                            title: document.getElementsByClassName("clearfix")[0].innerText,
                            links: findhref2(document.getElementsByClassName("tik-video")[0]).map((e => e.href)),
                            mp4: 1 == q,
                            info: setElement2(x)
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
                    }()
            }), {
                callback() {}
            })
        }
        document.domain.includes("music") && (console.log("Added MiniPlayer Toggle with I"), addEventListener("keypress", (function({
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
        }))), setInterval((e => {
            document.getElementsByClassName("ytp-ad-button-icon")[0] && !f && (console.log("muted ad"), f = 1, m()), !document.getElementsByClassName("ytp-ad-button-icon")[0] && f && (console.log("unmuted video"), function() {
                try {
                    h()
                } catch (e) {
                    console.warn("Failed unmuting")
                }
            }(), f = 0), [...document.querySelectorAll("#song-video"), ...document.querySelectorAll("#ytd-player")].map((e => [...e.querySelectorAll("button")].filter((e => e.className.includes("skip")))[0])).filter((e => !!e))[0] && ([...document.querySelectorAll("#song-video"), ...document.querySelectorAll("#ytd-player")].map((e => [...e.querySelectorAll("button")].filter((e => e.className.includes("skip")))[0])).filter((e => !!e))[0].click(), console.log("Skipped d :>")), document.getElementsByClassName("ytp-ad-overlay-close-button")[2] && (document.getElementsByClassName("ytp-ad-overlay-close-button")[2].click(), console.log("Close ad card"))
        }), 10)
    }();