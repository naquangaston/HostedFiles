// @name Auto download
// @namespace http://tampermonkey.net/
// @version 1.5
// @description try to take over the world!
// @author You
// @match *://www.youtube.com/*
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
GM_setValue_ = GM_setValue, GM_getValue_ = GM_getValue, GM_info_ = GM_info, getElementByAttribute = function(t, n = "aria-label", e = document.body) {
        var o = [];
        return function i(e) {
            e.getAttribute(n) == t ? o.push(e) : e.children.length && ((e = e.children).forEach = [].forEach, e.forEach((t => {
                i(t)
            })))
        }(e), 1 == o.length ? o[0] : o || !1
    }, get_aria_label = function(t, n = document.body) {
        var e = [];
        return function o(n) {
            n.getAttribute("aria-label") == t ? e.push(n) : n.children.length && ((n = n.children).forEach = [].forEach, n.forEach((t => {
                o(t)
            })))
        }(n), e[0] || !1
    }, getClass = function(t) {
        return document.getElementsByClassName("ehlq8k34")[0]
    },
    function() {
        function t(t, n, e, o) {
            const i = document.createElement("a");
            return i.style.display = "none", document.body.appendChild(i), fetch(t).then((t => t.blob())).then((c => {
                const r = URL.createObjectURL(c);
                i.href = r, i.download = n, i.click(), URL.revokeObjectURL(r), (e || opener || window).postMessage({
                    url: t,
                    title: n,
                    s: !0
                }, "*"), (typeof o).includes("function") && o()
            }))["catch"]((o => {
                (e || opener || window).postMessage({
                    url: t,
                    title: n,
                    s: !1
                }, "*")
            }))
        }

        function n(t) {
            "function" == typeof jQuery && t instanceof jQuery && (t = t[0]);
            var n = t.getBoundingClientRect();
            return n.top >= 0 - (window.innerHeight || document.documentElement.clientHeight) / 2 && n.left >= 0 && n.bottom <= (window.innerHeight || document.documentElement.clientHeight) + (window.innerHeight || document.documentElement.clientHeight) / 2 && n.right <= (window.innerWidth || document.documentElement.clientWidth)
        }

        function e(t, {
            t: n,
            o: e
        }) {
            !n && (n = function() {}), !e && (e = 100);
            try {
                return t(), void n()
            } catch (i) {}
            var o = setInterval((() => {
                try {
                    t(), n(), clearInterval(o)
                } catch (i) {}
            }), e || 100);
            return o
        }

        function o(t) {
            return null === t.offsetParent
        }

        function i(t) {
            return t.parentNode
        }

        function c(t, n = "aria-label", e = document.body) {
            var o = [];
            return function i(e) {
                var c = !1;
                n ? e.getAttribute(n) == t && (o.push(e), c = 1) : [...e.attributes].map((t => {
                    const {
                        name: n,
                        value: e
                    } = t;
                    return {
                        name: n,
                        value: e
                    }
                })).filter((n => n.value == t)).length && (o.push(e), c = 1), e.children.length && !c && ((e = e.children).forEach = [].forEach, e.forEach((t => {
                    i(t)
                })))
            }(e), 1 == o.length ? o[0] : o || !1
        }

        function r() {
            c("Mute (m)", "title").click()
        }

        function a() {
            c("Unmute (m)", "title").click()
        }

        function l(t) {
            return !!t && !t.closed
        }
        async function u(t = [
            ["w1", "win1"],
            ["w2", "win2"],
            ["w3", "win3"],
            ["w4", "win4"]
        ]) {
            var n, e = !1;
            return await new Promise(((o, i) => {
                var c = setInterval((i => {
                    t.forEach((t => {
                        this[t[0]] = l(window[t[1]]), window[t[1]] || e || (e = !0, n = t[1])
                    })), n && (o(n), clearInterval(c))
                }), 500)
            })), n
        }

        function d() {
            function t() {
                try {
                    return [...document.getElementsByTagName("ytd-playlist-panel-renderer")].filter(n).filter((t => !o(t)))[0].children[0].children[0].children[0].children[1].children[0].children[0].children[0].children[0], !0
                } catch (t) {
                    return !1
                }
            }
            v.i($("#end")[0]), w.i($("#end")[0]);
            var e = !1;
            setInterval((() => {
                e != t() && t() ? setTimeout((() => {
                    m.i([...document.getElementsByTagName("ytd-playlist-panel-renderer")].filter(n).filter((t => !o(t)))[0].children[0].children[0].children[0].children[1].children[0].children[0].children[0].children[0]), h.i([...document.getElementsByTagName("ytd-playlist-panel-renderer")].filter(n).filter((t => !o(t)))[0].children[0].children[0].children[0].children[1].children[0].children[0].children[0].children[0])
                }), 100) : e != t() && t(), e = t()
            }), 100)
        }
        var s, f, v, w, m, h, p, k;
        class b {
            static get l() {
                return new b("br")
            }
            constructor(t, n) {
                this.element = function() {
                    for (let t in arguments[1]) {
                        arguments[0].setAttribute(t, arguments[1][t])
                    }
                    return arguments[0]
                }(document.createElement(t), n)
            }
            style(t) {
                for (let n in t) {
                    this.element.style[n] = t[n]
                }
                return this
            }
            append(t) {
                return this.element.append(t.element || t), this
            }
            i(t) {
                return (t.element || t).append(this.element), this
            }
            on(t, n) {
                return this.element[`on${t}`] = n, this
            }
            set(t, n) {
                return this.element[t] = n, this
            }
            remove() {
                return this.element.remove(), this
            }
            get() {
                return this.element[arguments[0]]
            }
            get children() {
                return new class {
                    constructor(t) {
                        for (var n = 0; n < t.length; n += 1) {
                            this[n] = t[n]
                        }
                        Object.defineProperty(this, "length", {
                            get: function() {
                                return t.length
                            }
                        }), Object.freeze(this)
                    }
                    item(t) {
                        return null != this[t] ? this[t] : null
                    }
                    namedItem(t) {
                        for (var n = 0; n < this.length; n += 1) {
                            if (this[n].id === t || this[n].name === t) {
                                return this[n]
                            }
                        }
                        return null
                    }
                    get toArray() {
                        return [...this]
                    }
                }([...this.element.children])
            }
        }
        if (setElement2 = function(t) {
                return t.match(/(?<host>https?\:\/\/www\.tiktok\.com)\/(?<username>@[^\/]+)\/video\/(?<videoID>\d+)/i).groups
            }, s = "https://onlymp3.app", "/watch?=", setElement = function(t) {
                return !(!String(t).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/) || 11 != String(t).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/)[8].length) && String(t).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/)[8]
            }, findhref2 = function(t, n) {
                var e = [];
                return function o(t) {
                    t.tagName.toLowerCase() == (n || "a") ? (e.push(t), t.children.length && ((t = t.children).forEach = [].forEach, t.forEach((t => {
                        o(t)
                    })))) : t.children.length && ((t = t.children).forEach = [].forEach, t.forEach((t => {
                        o(t)
                    })))
                }(t), e
            }, _getIds = function() {
                var t = [...document.getElementsByTagName("ytd-playlist-panel-renderer")].filter(n).filter((t => !o(t)))[0],
                    e = findhref2(t, "span").filter((t => !o(t))).filter(n).filter((t => "video-title" == t.id)).map(i).map(i).map((t => ({
                        id: setElement(findhref2(i(t))[0].href),
                        e: t
                    })));
                return e
            }, info = {}, downloadT = function(t, n = !1, e = !0, o = !1, i = !1) {
                var c;
                let r = t + (o ? "mp4" : "mp3") + e;
                if (!localStorage[r] || n || i && confirm(`You have already download this video as .${o?"mp4":"mp3"}\nStill download?`)) {
                    return `#url=https://www.youtube.com/watch?v=${t}`,
                        function(t, n, e = !1) {
                            var o = addEventListener(t, ((...t) => {
                                n(...t), e && removeEventListener(o)
                            }), !0)
                        }("unload", (function() {
                            info[t].close()
                        }), !0), onmessage = function(t) {
                            if (t.origin == s || t.origin.match(/https?:\/{2}onlymp3\.to/) || t.origin.match(/https?:\/{2}en\.onlymp3\.to/) || t.origin.match(/https?:\/{2}en(\d)\.onlinevideoconverter\.pro/)) {
                                const {
                                    data: {
                                        href: o,
                                        title: i,
                                        length: c,
                                        id: a
                                    }
                                } = t;
                                if (e) {
                                    var n = document.createElement("a");
                                    n.download = i + ".mp4", n.href = o, document.body.appendChild(n), n.click(), n.remove()
                                } else {
                                    open(o)
                                }
                                localStorage[r] = o
                            }
                        }, (c = new URL(location.href)).host = c.host.replace(".com", "mz.com"), info[t] = o ? open("https://en1.onlinevideoconverter.pro/112Ei/youtube-downloader-mp4", [t, location.pathname.startsWith("/shorts/") ? 1 : 0, o + !1], "width=400,height=500") : open([c.protocol, "//", c.host, c.pathname, "?v=", t].join(""), [t, location.pathname.startsWith("/shorts/") ? 1 : 0], "width=400,height=500")
                }
            }, downloadTikTok = function(n, e) {
                let o = e.u,
                    i = e.username;
                var c;
                onmessage = function(n) {
                    if (n.origin == s || n.origin.match(/https?:\/{2}savetik\.csavetik.coo/) || n.origin.match(/https?:\/{2}en\.onlymp3\.to/) || n.origin.match(/https?:\/{2}en(\d)\.onlinevideoconverter\.pro/) || "https://savetik.co" == n.origin) {
                        var {
                            data: {
                                href: e,
                                links: o,
                                title: i,
                                length: r,
                                id: a,
                                v: l,
                                info: {
                                    username: u
                                }
                            }
                        } = n;
                        if ("https://savetik.co" == n.origin) {
                            i = function() {
                                try {
                                    return document.querySelector("#app > div.css-14dcx2q-DivBodyContainer.e1irlpdw0 > div:nth-child(4) > div > div.css-1qjw4dg-DivContentContainer.e1mecfx00 > div.css-1stfops-DivCommentContainer.ekjxngi0 > div > div.css-1xlna7p-DivProfileWrapper.ekjxngi4 > div.css-1u3jkat-DivDescriptionContentWrapper.e1mecfx011 > div.css-1nst91u-DivMainContent.e1mecfx01 > div.css-bs495z-DivWrapper.e1mzilcj0 > div > div.css-1d7krfw-DivOverflowContainer.e1mzilcj5 > h1").innerText.replace("Replying to ", "")
                                } catch {
                                    try {
                                        return document.querySelector("#app > div.css-14dcx2q-DivBodyContainer.e1irlpdw0 > div:nth-child(4) > div > div.css-1qjw4dg-DivContentContainer.e1mecfx00 > div.css-1stfops-DivCommentContainer.ekjxngi0 > div > div.css-1xlna7p-DivProfileWrapper.ekjxngi4 > div.css-1u3jkat-DivDescriptionContentWrapper.e1mecfx011 > div.css-1nst91u-DivMainContent.e1mecfx01 > div.css-bs495z-DivWrapper.e1mzilcj0").innerText.replace("Replying to ", "")
                                    } catch (t) {
                                        return document.querySelector("#main-content-video_detail > div > div.css-12kupwv-DivContentContainer.ege8lhx2 > div.css-1senhbu-DivLeftContainer.ege8lhx3 > div.css-1sb4dwc-DivPlayerContainer.eqrezik4 > div.css-3lfoqn-DivDescriptionContentWrapper-StyledDetailContentWrapper.eqrezik15 > div.css-r4nwrj-DivVideoInfoContainer.eqrezik3 > div.css-bs495z-DivWrapper.e1mzilcj0 > div > h1").innerText.replace("Replying to ", "")
                                    }
                                }
                            }(), t(l ? o[0] : o.pop(), u + " - " + i + (l ? ".mp4" : ".mp3"), c)
                        } else {
                            if (useT) {
                                let t = document.createElement("a");
                                t.download = i + ".mp3", t.href = e, document.body.appendChild(t), t.click(), t.remove()
                            } else {
                                open(e)
                            }
                            localStorage[_] = e
                        }
                    }
                }, c = open("https://savetik.co/en", [`https://www.tiktok.com/${i}/video/${o}`, n + !1], "width=400,height=500")
            }, M = r, Um = a, f = 0, window.ch3 = l, window.getWin = u, WIP_ = function(t, n, e) {
                var o, i;
                o = _getIds(), i = [];
                for (let n = 0; n < t; n++) {
                    i.push(["w" + n, "win" + n])
                }
                o.forEach((({
                    id: t
                }, o) => {
                    u(i).then((o => {
                        if (!info[t] && !localStorage[t] || e) {
                            window[o] = downloadT(t, e, !0, !!n), window.addEventListener("unload", (function(t) {
                                window[o].close()
                            }));
                            var i = setInterval((t => {
                                window[o] && !window[o].closed || (window[o] = null, clearInterval(i))
                            }), 300)
                        }
                    }))
                }))
            }, v = new b("button").set("innerText", "Get MP3").on("click", (function(t) {
                downloadT(setElement(location.href), !0, !0, !1, !0)
            })), w = new b("button").set("innerText", "Get MP4").on("click", (function(t) {
                downloadT(setElement(location.href), !0, !0, !0, !0)
            })), m = new b("button").set("innerText", "PlayList MP3").on("click", (function(t) {
                WIP_(2, !1, !1)
            })), h = new b("button").set("innerText", "PlayList MP4").on("click", (function(t) {
                WIP_(2, !0, !1)
            })), p = new b("button").set("innerText", "Get MP4").on("click", (function(t) {
                downloadTikTok(!0, setElement2(getClass() ? getClass().innerText : location.href))
            })), k = new b("button").set("innerText", "Get MP3").on("click", (function(t) {
                downloadTikTok(!1, setElement2(getClass() ? getClass().innerText : location.href))
            })), a1 = [
                ["youtube", function() {
                    e((function() {
                        if (!$("#end")[0]) {
                            throw "Cant append buttons yet"
                        }
                        return !0
                    }), {
                        t: d
                    })
                }],
                ["tiktok", function() {
                    addEventListener("load", (function() {
                        e((function() {
                            if (!document.getElementsByClassName("ehlq8k33")[0]) {
                                throw "Cant Append"
                            }
                            p.i(document.getElementsByClassName("ehlq8k33")[0]), k.i(document.getElementsByClassName("ehlq8k33")[0])
                        }), {
                            t: function() {}
                        }), e((function() {
                            if (!document.getElementsByClassName("e13wiwn60")[0]) {
                                throw "Cant Append"
                            }
                            p.i(document.getElementsByClassName("e13wiwn60")[0]), k.i(document.getElementsByClassName("e13wiwn60")[0])
                        }), {
                            t: function() {}
                        })
                    }))
                }]
            ].filter((t => location.host.includes(t[0])))[0], a1 && a1[1] && a1[1](), delete a1, location.href.includes("onlymp3.app")) {
            return setInterval((() => {
                document.getElementById("error-text").innerText.length > 5 && location.reload()
            }), 2e4), void e((function(t = function() {}) {
                ! function() {
                    var [t, n] = name.split(",");
                    txtUrl.value = `https://www.youtube.com/${"1"==n?"shorts/":"watch?v="}${t}`, getListFormats()
                }(), e((function(t = function() {}) {
                    ! function() {
                        var t = videoTitle.innerText.split("\n"),
                            n = t.map((t => t.match(/[:\d]+/gi))).filter((t => !!t)).pop().pop(),
                            e = t[0].split("Title: ")[1],
                            o = findhref2(videoTitle.parentNode)[0].href,
                            i = {
                                id: setElement(location.href),
                                href: o,
                                title: e,
                                length: n
                            };
                        (opener || window).postMessage(i, "*")
                    }()
                }), {
                    t: close
                })
            }), {
                t: function() {}
            })
        }
        if (location.href.includes("www.yt2conv.com")) {
            let [t, n] = name.split(",");
            e((function(e = function() {}) {
                document.getElementById("search_txt").value = `https://www.youtube.com/${"1"==n?"shorts/":"watch?v="}${t}`, document.getElementById("btn-submit").click()
            }), {
                t: function() {}
            }), e((function(t = function() {}) {
                if (!result.children.length) {
                    throw document.getElementById("btn-submit").click(), "no there"
                }
            }), {
                o: 1e3,
                t: function() {}
            }), e((function() {
                document.getElementById("btn-download").click()
            }), {
                t: function() {}
            }), e((function() {
                var n = $(".media-heading")[0].innerText,
                    e = downloadbtn.href,
                    o = {
                        id: t,
                        href: e,
                        title: n,
                        length: {}
                    };
                (opener || window).postMessage(o, "*")
            }), {
                t: close
            })
        }
        if (location.href.includes("en3.onlinevideoconverter.pro")) {
            let [t, n] = name.split(","), o = function() {};
            e((function(e = function() {}) {
                document.getElementById("texturl").value = `https://www.youtube.com/${"1"==n?"shorts/":"watch?v="}${t}`, document.getElementById("convert1").click()
            }), {
                t: o
            }), e((function() {
                if ("none" == stepProcess.style.display) {
                    throw document.getElementById("convert1").click(), "this"
                }
            }), {
                t: o
            }), e((function() {
                var n;
                if (0 == document.getElementById("form-app-root").children.length) {
                    throw ""
                }
                var {
                    title: e,
                    href: o
                } = $("#download-720-MP4") && $("#download-720-MP4")[0] ? $("#download-720-MP4")[0] : $("#download-720-MP4");
                n = {
                    id: t,
                    href: o,
                    title: e,
                    length: {}
                }, (opener || window).postMessage(n, "*")
            }), {
                t: close
            })
        }
        if (location.href.includes("savetik.co")) {
            var [y, g] = name.split(",");
            addEventListener("load", (function() {
                e((function() {
                    s_input.value = y, ksearchvideo(), setTimeout(ksearchvideo, 1e3)
                }), {
                    t() {}
                })
            })), e((function() {
                document.getElementsByClassName("clearfix")[0].innerText,
                    function() {
                        let n = {
                            title: document.getElementsByClassName("clearfix")[0].innerText,
                            links: findhref2(document.getElementsByClassName("tik-video")[0]).map((t => t.href)),
                            v: 1 == g,
                            info: setElement2(y)
                        };
                        onmessage = function(n) {
                            if ("https://www.tiktok.com" == n.origin) {
                                var {
                                    data: {
                                        s: e,
                                        url: o,
                                        title: i
                                    }
                                } = n;
                                e ? setTimeout(close, 100) : t(o, i, null, close)
                            }
                        }, (opener || window).postMessage(n, "*")
                    }()
            }), {
                t() {}
            })
        }
        setInterval((t => {
            document.getElementsByClassName("ytp-ad-button-icon")[0] && !f && (f = 1, r()), !document.getElementsByClassName("ytp-ad-button-icon")[0] && f && (function() {
                try {
                    a()
                } catch (t) {}
            }(), f = 0), [...document.querySelectorAll("#ytd-player")].map((t => [...t.querySelectorAll("button")].filter((t => t.className.includes("skip")))[0])).filter((t => !!t))[0] && [...document.querySelectorAll("#ytd-player")].map((t => [...t.querySelectorAll("button")].filter((t => t.className.includes("skip")))[0])).filter((t => !!t))[0].click(), document.getElementsByClassName("ytp-ad-overlay-close-button")[2] && document.getElementsByClassName("ytp-ad-overlay-close-button")[2].click()
        }), 10)
    }();