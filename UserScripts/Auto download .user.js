// ==UserScript==
// @name Auto download
// @namespace http://tampermonkey.net/
// @version 1.7
// @description Youtube/titktok video/audio download alwayts updated
// @author You
// @match *://www.youtube.com/*
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
query = function(e) {
        return t = $(e) ? $(e).length ? $(e)[0] : $(e) : null, Object.keys(t).length ? t : null;
        var t
    }, getElementByAttribute = function(e, t = "aria-label", n = document.body) {
        var o = [];
        return function n(i) {
            i.getAttribute(t) == e ? o.push(i) : i.children.length && ((i = i.children).forEach = [].forEach, i.forEach((e => {
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
                this.element = function() {
                    for (let e in arguments[1]) arguments[0].setAttribute(e, arguments[1][e]);
                    return arguments[0]
                }(document.createElement(arguments[0]), arguments[1])
            }
            style(e) {
                for (let t in e) this.element.style[t] = e[t];
                return this
            }
            append(e) {
                return this.element.append(e.element || e), this
            }
            appendTo(e) {
                return (e.element || e).append(this.element), this
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

        function t(e, t, n, o) {
            const i = document.createElement("a");
            return i.style.display = "none", document.body.appendChild(i), fetch(e).then((e => e.blob())).then((l => {
                const c = URL.createObjectURL(l);
                i.href = c, i.download = t, i.target = "_blank", i.click(), URL.revokeObjectURL(c), (n || opener || window).postMessage({
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
        }
        setElement2 = function(e) {
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

        function l(e) {
            return null === e.offsetParent
        }

        function c(e) {
            return e.parentNode
        }

        function r(e, t = "aria-label", n = document.body) {
            var o = [];
            return function n(i) {
                var l = !1;
                t ? i.getAttribute(t) == e && (o.push(i), l = 1) : [...i.attributes].map((e => {
                    const {
                        name: t,
                        value: n
                    } = e;
                    return {
                        name: t,
                        value: n
                    }
                })).filter((t => t.value == e)).length && (o.push(i), l = 1), i.children.length && !l && ((i = i.children).forEach = [].forEach, i.forEach((e => {
                    n(e)
                })))
            }(n), o.length ? 1 == o.length ? o[0] : o || !1 : null
        }

        function a() {
            (r("Mute", "title")[0] || r("Mute (m)", "title")).click()
        }

        function s() {
            (query("#right-controls").querySelectorAll("path")[0].getAttribute("d") == UnmutePath && r("Mute", "title")[0] || r("Unmute", "title")).click()
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
        }, _getIds = function() {
            if (document.domain.includes("music")) throw alert("These button dont work on youtube music yet"), ".";
            var e = [...document.getElementsByTagName("ytd-playlist-panel-renderer")].filter(o).filter((e => !l(e)))[0];
            return findhref2(e, "span").filter((e => !l(e))).filter(o).filter((e => "video-title" == e.id)).map(c).map(c).map((e => ({
                id: setElement(findhref2(c(e))[0].href),
                e: e
            })))
        }, info = {}, downloadT = function(e, t = !1, o = !0, i = !1, l = !1) {
            let c = e + (i ? "mp4" : "mp3") + o;
            if (!localStorage[c] || t || l && confirm(`You have already download this video as .${i?"mp4":"mp3"}\nStill download?`)) {
                ! function(e, t, n = !1) {
                    var o = addEventListener(e, ((...e) => {
                        t(...e), n && removeEventListener(o)
                    }), !0)
                }("unload", (function() {
                    info[e].close()
                }), !0), onmessage = function(e) {
                    if (e.origin == n || e.origin.match(/https?:\/{2}onlymp3\.to/) || e.origin.match(/https?:\/{2}en\.onlymp3\.to/) || e.origin.match(/https?:\/{2}en(\d)\.onlinevideoconverter\.pro/)) {
                        const {
                            data: {
                                href: n,
                                title: i,
                                length: l,
                                id: r
                            }
                        } = e;
                        if (console.log("Handled", {
                                href: n,
                                title: i,
                                length: l,
                                id: r
                            }, e), o) {
                            var t = document.createElement("a");
                            t.download = i + ".mp4", t.href = n, document.body.appendChild(t), t.click(), t.remove()
                        } else open(n);
                        localStorage[c] = n
                    } else console.log("Unhandled Post", e)
                };
                var r = new URL(location.href);
                return r.host = r.host.replace(".com", "mz.com"), info[e] = i ? open("https://en1.onlinevideoconverter.pro/112Ei/youtube-downloader-mp4", [e, location.pathname.startsWith("/shorts/") ? 1 : 0, i + !1], "width=400,height=500") : open([r.protocol, "//", r.host, r.pathname, "?v=", e].join(""), [e, location.pathname.startsWith("/shorts/") ? 1 : 0], "width=400,height=500")
            }
        }, downloadTikTok = function(e, o) {
            let i = o.videoID,
                l = o.username;
            var c;
            onmessage = function(e) {
                if (e.origin == n || e.origin.match(/https?:\/{2}savetik\.csavetik.coo/) || e.origin.match(/https?:\/{2}en\.onlymp3\.to/) || e.origin.match(/https?:\/{2}en(\d)\.onlinevideoconverter\.pro/) || "https://savetik.co" == e.origin) {
                    var {
                        data: {
                            href: o,
                            links: i,
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
                            href: o,
                            title: l,
                            length: r,
                            id: a,
                            links: i,
                            mp4: s
                        }, e), "https://savetik.co" == e.origin) l = function() {
                        try {
                            return document.querySelector("#app > div.css-14dcx2q-DivBodyContainer.e1irlpdw0 > div:nth-child(4) > div > div.css-1qjw4dg-DivContentContainer.e1mecfx00 > div.css-1stfops-DivCommentContainer.ekjxngi0 > div > div.css-1xlna7p-DivProfileWrapper.ekjxngi4 > div.css-1u3jkat-DivDescriptionContentWrapper.e1mecfx011 > div.css-1nst91u-DivMainContent.e1mecfx01 > div.css-bs495z-DivWrapper.e1mzilcj0 > div > div.css-1d7krfw-DivOverflowContainer.e1mzilcj5 > h1").innerText.replace("Replying to ", "")
                        } catch {
                            try {
                                return document.querySelector("#app > div.css-14dcx2q-DivBodyContainer.e1irlpdw0 > div:nth-child(4) > div > div.css-1qjw4dg-DivContentContainer.e1mecfx00 > div.css-1stfops-DivCommentContainer.ekjxngi0 > div > div.css-1xlna7p-DivProfileWrapper.ekjxngi4 > div.css-1u3jkat-DivDescriptionContentWrapper.e1mecfx011 > div.css-1nst91u-DivMainContent.e1mecfx01 > div.css-bs495z-DivWrapper.e1mzilcj0").innerText.replace("Replying to ", "")
                            } catch (e) {
                                return document.querySelector("#main-content-video_detail > div > div.css-12kupwv-DivContentContainer.ege8lhx2 > div.css-1senhbu-DivLeftContainer.ege8lhx3 > div.css-1sb4dwc-DivPlayerContainer.eqrezik4 > div.css-3lfoqn-DivDescriptionContentWrapper-StyledDetailContentWrapper.eqrezik15 > div.css-r4nwrj-DivVideoInfoContainer.eqrezik3 > div.css-bs495z-DivWrapper.e1mzilcj0 > div > h1").innerText.replace("Replying to ", "")
                            }
                        }
                    }(), t(s ? i[0] : i.pop(), d + " - " + l + (s ? ".mp4" : ".mp3"), c);
                    else {
                        if (useT) {
                            let e = document.createElement("a");
                            e.download = l + ".mp3", e.href = o, document.body.appendChild(e), e.click(), e.remove()
                        } else open(o);
                        localStorage[_] = o
                    }
                } else console.log("Unhandled Post", e)
            }, c = open("https://savetik.co/en", [`https://www.tiktok.com/${l}/video/${i}`, e + !1], "width=400,height=500")
        }, abc_ = r, M = a, Um = s;
        var d = 0;

        function u(e) {
            return !!e && !e.closed
        }
        async function h(e = [
            ["w1", "win1"],
            ["w2", "win2"],
            ["w3", "win3"],
            ["w4", "win4"]
        ]) {
            var t, n = !1;
            return await new Promise(((o, i) => {
                var l = setInterval((i => {
                    e.forEach((e => {
                        this[e[0]] = u(window[e[1]]), window[e[1]] || n || (n = !0, t = e[1], console.log(e))
                    })), t && (o(t), clearInterval(l))
                }), 500)
            })), t
        }
        window.ch3 = u, window.getWin = h, WIP_ = function(e, t, n) {
            var o = _getIds(),
                i = [];
            for (let t = 0; t < e; t++) i.push(["w" + t, "win" + t]);
            o.forEach((({
                id: e
            }, o) => {
                h(i).then((i => {
                    if (!info[e] && !localStorage[e] || n) {
                        console.log("download", e, o), window[i] = downloadT(e, n, !0, !!t), window.addEventListener("unload", (function(e) {
                            window[i].close()
                        }));
                        var l = setInterval((e => {
                            window[i] && !window[i].closed || (window[i] = null, clearInterval(l), console.log(i, "isclosed"))
                        }), 300)
                    }
                }))
            }))
        };
        var m = new e("button").set("innerText", "Get MP3").on("click", (function(e) {
                downloadT(setElement(location.href), !0, !0, !1, !0)
            })),
            f = new e("button").set("innerText", "Get MP4").on("click", (function(e) {
                downloadT(setElement(location.href), !0, !0, !0, !0)
            })),
            p = new e("button").set("innerText", "PlayList MP3").on("click", (function(e) {
                WIP_(2, !1, !1)
            })),
            g = new e("button").set("innerText", "PlayList MP4").on("click", (function(e) {
                WIP_(2, !0, !1)
            })),
            v = new e("button").set("innerText", "Get MP4").on("click", (function(e) {
                downloadTikTok(!0, setElement2(getClass("ehlq8k34") ? getClass("ehlq8k34").innerText : location.href))
            })),
            w = new e("button").set("innerText", "Get MP3").on("click", (function(e) {
                downloadTikTok(!1, setElement2(getClass("ehlq8k34") ? getClass("ehlq8k34").innerText : location.href))
            }));

        function y() {
            return query("#end") || query("#right-content")
        }

        function k() {
            const t = y();

            function n() {
                try {
                    return !(![...document.querySelectorAll("#header-description")].filter(o).filter((e => !l(e)))[0] && !query(".autoplay")) && ([...document.querySelectorAll("#header-description")].filter(o).filter((e => !l(e)))[0] || query(".autoplay"))
                } catch (e) {
                    return !1
                }
            }
            m.appendTo(t), f.appendTo(t), console.log("Posted Buttons");
            var i = !1;
            setInterval((() => {
                i != n() && n() ? (console.log("Added playlist buttons"), setTimeout((() => {
                    n().append(e.br.element), n().append(p.element), n().append(g.element)
                }), 100)) : i == n() || n() || console.log("buttons are gone?!?!"), i = n()
            }), 100)
        }
        if (a1 = [
                ["youtube", function() {
                    i((function() {
                        if (!y()) throw "Cant append buttons yet";
                        return !0
                    }), {
                        callback: k
                    })
                }],
                ["tiktok", function() {
                    addEventListener("load", (function() {
                        i((function() {
                            if (!document.getElementsByClassName("ehlq8k33")[0]) throw "Cant Append";
                            v.appendTo(document.getElementsByClassName("ehlq8k33")[0]), w.appendTo(document.getElementsByClassName("ehlq8k33")[0])
                        }), {
                            callback: function() {}
                        }), i((function() {
                            if (!document.getElementsByClassName("e13wiwn60")[0]) throw "Cant Append";
                            v.appendTo(document.getElementsByClassName("e13wiwn60")[0]), w.appendTo(document.getElementsByClassName("e13wiwn60")[0])
                        }), {
                            callback: function() {}
                        })
                    }))
                }]
            ].filter((e => location.host.includes(e[0])))[0], a1 && a1[1] && a1[1](), delete a1, location.href.includes("onlymp3.app")) {
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
                            i = {
                                id: setElement(location.href),
                                href: o,
                                title: n,
                                length: t
                            };
                        (opener || window).postMessage(i, "*"), console.log("Poasted")
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
            let [e, t] = name.split(",");
            i((function(n = function() {}) {
                document.getElementById("search_txt").value = `https://www.youtube.com/${"1"==t?"shorts/":"watch?v="}${e}`, document.getElementById("btn-submit").click(), console.log(e, t)
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
                var t = $(".media-heading")[0].innerText,
                    n = downloadbtn.href,
                    o = {
                        id: e,
                        href: n,
                        title: t,
                        length: {}
                    };
                console.log("Posted"), (opener || window).postMessage(o, "*")
            }), {
                callback: close
            })
        }
        if (location.href.includes("en3.onlinevideoconverter.pro")) {
            let [e, t] = name.split(","), n = function() {};
            i((function(n = function() {}) {
                document.getElementById("texturl").value = `https://www.youtube.com/${"1"==t?"shorts/":"watch?v="}${e}`, document.getElementById("convert1").click(), console.log("Searched")
            }), {
                callback: n
            }), i((function() {
                if ("none" == stepProcess.style.display) throw document.getElementById("convert1").click(), "this";
                console.log("Searching")
            }), {
                callback: n
            }), i((function() {
                if (0 == document.getElementById("form-app-root").children.length) throw "";
                console.log("loaded");
                var {
                    title: t,
                    href: n
                } = $("#download-720-MP4") && $("#download-720-MP4")[0] ? $("#download-720-MP4")[0] : $("#download-720-MP4"), o = {
                    id: e,
                    href: n,
                    title: t,
                    length: {}
                };
                console.log("Posted"), (opener || window).postMessage(o, "*")
            }), {
                callback: close
            })
        }
        if (location.href.includes("savetik.co")) {
            var [b, E] = name.split(",");
            addEventListener("load", (function() {
                i((function() {
                    s_input.value = b, ksearchvideo(), setTimeout(ksearchvideo, 1e3)
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
                            mp4: 1 == E,
                            info: setElement2(b)
                        };
                        onmessage = function(e) {
                            if ("https://www.tiktok.com" == e.origin) {
                                var {
                                    data: {
                                        s: n,
                                        url: o,
                                        title: i
                                    }
                                } = e;
                                console.log("Handled", {
                                    s: n,
                                    url: o,
                                    title: i
                                }, e), n ? setTimeout(close, 100) : t(o, i, null, close)
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
            target: i,
            target: {
                tagName: l
            }
        }) {
            ["INPUT", "TEXTAREA"].includes(l) || t || n || !e || "KeyI" != o || (abc_("Close player page") || abc_("Open player page")[1]).click()
        }))), setInterval((e => {
            document.getElementsByClassName("ytp-ad-button-icon")[0] && !d && (console.log("muted ad"), d = 1, a()), !document.getElementsByClassName("ytp-ad-button-icon")[0] && d && (console.log("unmuted video"), function() {
                try {
                    s()
                } catch (e) {
                    console.warn("Failed unmuting")
                }
            }(), d = 0), [...document.querySelectorAll("#ytd-player") || document.querySelectorAll("#song-video")].map((e => [...e.querySelectorAll("button")].filter((e => e.className.includes("skip")))[0])).filter((e => !!e))[0] && ([...document.querySelectorAll("#ytd-player")].map((e => [...e.querySelectorAll("button")].filter((e => e.className.includes("skip")))[0])).filter((e => !!e))[0].click(), console.log("Skipped d :>")), document.getElementsByClassName("ytp-ad-overlay-close-button")[2] && (document.getElementsByClassName("ytp-ad-overlay-close-button")[2].click(), console.log("Close ad card"))
        }), 10)
    }();