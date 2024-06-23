// ==UserScript==
// @name Gaston's - Video/Image Downloader
// @namespace http://tampermonkey.net/
// @version 3.1
// @description Instagram/Youtube/tiktok Video/Audio Downloader alwayts updated
// @author gaston1799
// @match *://www.youtube.com/*
// @match *://www.instagram.com/*
// @match *://music.youtube.com/*
// @match *://onlymp3.app/*
// @match *://onlymp3.to/*
// @match *://fastdl.app/*
// @match *://en.onlymp3.app/*
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
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
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
function getV(e, t) {
    return GM_getValue(e) || (GM_setValue(e, t), t)
}

function setV(e, t) {
    GM_setValue(e, t)
}
var adev, set_;

function sleep(e) {
    return new Promise((t => setTimeout(t, e)))
}
_getV = getV, _setV = setV, Number.prototype.decimal = function(e) {
    return Number(this.toFixed(places))
}, getSoundCloudUrl = () => {
    try {
        return findhref2(document.querySelector("#app > div.playControls.g-z-index-control-bar.m-visible > section > div > div.playControls__elements > div.playControls__soundBadge.sc-ml-3x > div"))[0].href
    } catch {
        return
    }
}, downloadSC = function() {
    GM_setValue("tdl", null), GM_setValue("sc", getSoundCloudUrl()), !set_ && (set_ = 1, GM_addValueChangeListener("tldl", (function(e, t, n, o) {
        n && n.title && downloadFile_(n.url, n.title)
    }))), open("https://sclouddownloader.net/")
}, GM_setValue_ = GM_setValue, GM_getValue_ = GM_getValue, GM_info_ = GM_info;
var UnmutePath = "M3.15,3.85l4.17,4.17L6.16,9H3v6h3.16L12,19.93v-7.22l2.45,2.45c-0.15,0.07-0.3,0.13-0.45,0.18v1.04 c0.43-0.1,0.83-0.27,1.2-0.48l1.81,1.81c-0.88,0.62-1.9,1.04-3.01,1.2v1.01c1.39-0.17,2.66-0.71,3.73-1.49l2.42,2.42l0.71-0.71 l-17-17L3.15,3.85z M11,11.71v6.07L6.52,14H4v-4h2.52l1.5-1.27L11,11.71z M10.33,6.79L9.62,6.08L12,4.07v4.39l-1-1V6.22L10.33,6.79 z M14,8.66V7.62c2,0.46,3.5,2.24,3.5,4.38c0,0.58-0.13,1.13-0.33,1.64l-0.79-0.79c0.07-0.27,0.12-0.55,0.12-0.85 C16.5,10.42,15.44,9.1,14,8.66z M14,5.08V4.07c3.95,0.49,7,3.85,7,7.93c0,1.56-0.46,3.01-1.23,4.24l-0.73-0.73 C19.65,14.48,20,13.28,20,12C20,8.48,17.39,5.57,14,5.08z",
    mutePath = "M17.5,12c0,2.14-1.5,3.92-3.5,4.38v-1.04c1.44-0.43,2.5-1.76,2.5-3.34c0-1.58-1.06-2.9-2.5-3.34V7.62 C16,8.08,17.5,9.86,17.5,12z M12,4.07v15.86L6.16,15H3V9h3.16L12,4.07z M11,6.22L6.52,10H4v4h2.52L11,17.78V6.22z M21,12 c0,4.08-3.05,7.44-7,7.93v-1.01c3.39-0.49,6-3.4,6-6.92s-2.61-6.43-6-6.92V4.07C17.95,4.56,21,7.92,21,12z";

function downloadFile_(e, t) {
    const n = document.createElement("a");
    n.href = e, n.download = t, document.body.appendChild(n), n.click(), document.body.removeChild(n)
}
downloadFileAsTitle = function(e, t, n, o) {
        const l = document.createElement("a");
        return l.style.display = "none", document.body.appendChild(l), fetch(e).then((e => e.blob())).then((i => {
            const r = URL.createObjectURL(i);
            l.href = r, l.download = t, l.target = "_blank", l.click(), URL.revokeObjectURL(r), (n || opener || window).postMessage({
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
        _e = e, setElement2 = function(e) {
            return e.match(/(?<host>https?\:\/\/www\.tiktok\.com)\/(?<username>@[^\/]+)\/video\/(?<videoID>\d+)/i).groups
        };
        var t, n, o = "https://onlymp3.app";

        function l(e) {
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

        function c(e) {
            return e.parentNode
        }

        function a() {
            return get_aria_label("Go back") && get_aria_label("Go back").click ? get_aria_label("Go back") : document.querySelector("._afxv")
        }

        function s() {
            return get_aria_label("Next") && get_aria_label("Next").click ? get_aria_label("Next") : document.querySelector("._afxw")
        }

        function d() {
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

        function u() {
            (async function() {
                for (var e = e => new Promise((t => setTimeout(t, e))), t = new Set, n = {}; a();) {
                    if (await e(100), !a()) {
                        await e(1e3);
                        break
                    }
                    a().click()
                }[...getInstalImages()].forEach((e => {
                    let n = findhref2(e, "img")[0];
                    t.add([n.src, n.getAttribute("alt")])
                })), s().click();
                try {
                    s().click()
                } catch (e) {}
                for (; s();) {
                    await e(300), [...getInstalImages()].forEach((e => {
                        let n = findhref2(e, "img")[0];
                        t.add([n.src, n.getAttribute("alt")])
                    }));
                    try {
                        s().click()
                    } catch (e) {}
                }
                for (; await e(100), a();) a().click();
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
            }, "fastdl.app" == document.domain) onload = async function() {
            const e = {
                url: name,
                input: null
            };
            var t = !1;
            const n = e => new Promise((t => setTimeout(t, e)));
            var o, l;
            for (setTimeout((() => {
                    t = !0
                }), 2e4); !document.querySelector("#search-form-input");)
                if (await n(0), t) throw "Cant find input";
            e.input = document.querySelector("#search-form-input"), console.log("Found a"), o = e.input, l = e.url, ["focus", "input", "change", "blur"].forEach((e => {
                let t = new Event(e, {
                    bubbles: !0,
                    isTrusted: !0
                });
                o[`on${e}`] && o[`on${e}`](t), "input" === e && (o.value = l), o.dispatchEvent(t)
            })), document.querySelector(".search-form__button").click(), GM_setValue("instaURL", await async function(e) {
                for (; !document.querySelector(e);) await n(0);
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
                        var t = new _e("button").set("innerText", "Get").on("click", (function() {
                            alert("Doesnt work yet")
                        }));
                        e.append(t.element)
                    })), e = !0
                } catch {
                    e = !1
                }
                t != e && (t = e, console.log("Change?", e ? "Found" : "Not FOund"))
            }), 0);
            if ("www.instagram.com" == document.domain) {
                function m() {
                    console.log("Appended buttons man");
                    var t = new e(document.querySelectorAll(".xh8yej3.x1iyjqo2")[0]),
                        n = new e("button", {
                            id: "MediaButton"
                        }).set("innerText", "Get Images").on("click", u),
                        o = new e("button", {
                            id: "MediaButton2"
                        }).set("innerText", "Get Videos").on("click", d);
                    t.append(n, o)
                }
                return i((function() {
                    document.querySelectorAll(".xh8yej3.x1iyjqo2")[0].children
                }), {
                    callback: function() {
                        m(), setInterval((() => {
                            document.querySelector("#MediaButton") || m(), document.querySelector("._aaqy") && !document.querySelector("._aaqy").querySelector("#MediaButton") && function() {
                                var t = new e(document.querySelector("._aaqy")),
                                    n = new e("button", {
                                        id: "MediaButton"
                                    }).set("innerText", "Get Images").on("click", u),
                                    o = new e("button", {
                                        id: "MediaButton2"
                                    }).set("innerText", "Get Videos").on("click", d);
                                t.append(n, o)
                            }()
                        }))
                    }
                }), void console.log("Insta ballz")
            }
            "sclouddownloader.net" == document.domain && async function() {
                var e = _getV("SC");
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
                        return o()
                    })).then((e => !0), (e => !1))
                }
                if ("/download-sound-track" == location.pathname) {
                    for (await t("#trackTitle"); !trackTitle.innerText.length;) await sleep(0);
                    for (await t("#trackLink"); !trackLink.href.length;) await sleep(0);
                    _setV("SCinfo", {
                        name: trackTitle.innerText,
                        href: trackLink.href
                    }), close()
                } else {
                    if (!_getV("SC")) throw "Bruv";
                    var n = "#urlInput";
                    if (await t(n, 2e3), await t(n, 2e3)) {
                        document.querySelector(n).value = e, console.log("EZ url", !!window.formSubmit);
                        try {
                            for (;
                                "undefined" == typeof formSubmit;) await sleep(0), console.log("EZ url", formSubmit)
                        } catch {}
                        console.log("EZ url", formSubmit), formSubmit(), console.warn("Got"), setInterval(formSubmit, 1e3)
                    }
                }
            }().then(console.log, console.warn)
        }

        function h(e, t = "aria-label", n = document.body) {
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

        function f() {
            (h("Mute", "title") && h("Mute", "title")[0] || h("Mute (m)", "title")).click()
        }

        function p() {
            (query("#right-controls") && query("#right-controls").querySelectorAll("path")[0].getAttribute("d") == UnmutePath && h("Mute", "title")[0] || h("Unmute", "title") || h("Unmute (m)", "title")).click()
        }
        _getIds = function() {
            if (document.domain.includes("music")) throw alert("These button dont work on youtube music yet"), ".";
            var e = [...document.getElementsByTagName("ytd-playlist-panel-renderer")].filter(l).filter((e => !r(e)))[0];
            return findhref2(e, "span").filter((e => !r(e))).filter(l).filter((e => "video-title" == e.id)).map(c).map(c).map((e => ({
                id: setElement(findhref2(c(e))[0].href),
                e: e
            })))
        }, info = {}, downloadT = function(e, t = !1, n = !0, l = !1, i = !1) {
            let r = e + (l ? "mp4" : "mp3") + n;
            if (!localStorage[r] || t || i && confirm(`You have already download this video as .${l?"mp4":"mp3"}\nStill download?`)) {
                ! function(e, t, n = !1) {
                    var o = addEventListener(e, ((...e) => {
                        t(...e), n && removeEventListener(o)
                    }), !0)
                }("unload", (function() {
                    info[e].close()
                }), !0), onmessage = function(e) {
                    if (e.origin == o || e.origin.match(/https?:\/{2}onlymp3\.to/) || e.origin.match(/https?:\/{2}en\.onlymp3\.to/) || e.origin.match(/https?:\/{2}en(\d)\.onlinevideoconverter\.pro/) || "https://sss.instasaverpro.com" == e.origin) {
                        const {
                            data: {
                                href: o,
                                title: l,
                                length: i,
                                id: c
                            }
                        } = e;
                        if (console.log("Handled", {
                                href: o,
                                title: l,
                                length: i,
                                id: c
                            }, e), n) {
                            var t = document.createElement("a");
                            t.download = l + ".mp4", t.href = o, document.body.appendChild(t), t.click(), t.remove()
                        } else open(o);
                        localStorage[r] = o
                    } else console.log("Unhandled Post", e)
                };
                var c = new URL(location.href);
                return c.host = c.host.replace(".com", "mz.com"), info[e] = l ? open(location.pathname.startsWith("/shorts/") ? "https://yt5s.biz/enxj100/" : "https://en3.onlinevideoconverter.pro/112Ei/youtube-downloader-mp4", [e, location.pathname.startsWith("/shorts/") ? 1 : 0, l + !1], "width=400,height=500") : open([c.protocol, "//", c.host, c.pathname, "?v=", e].join(""), [e, location.pathname.startsWith("/shorts/") ? 1 : 0], "width=400,height=500")
            }
        }, downloadTikTok = function(e, t) {
            (async function(e, t) {
                await async function() {
                    for (; n && !n.closed;) await sleep(0);
                    return 1
                }(), console.log("ez");
                let l = t.videoID,
                    i = t.username,
                    r = function() {
                        try {
                            return document.querySelector("#app > div.css-14dcx2q-DivBodyContainer.e1irlpdw0 > div:nth-child(4) > div > div.css-1qjw4dg-DivContentContainer.e1mecfx00 > div.css-1stfops-DivCommentContainer.ekjxngi0 > div > div.css-1xlna7p-DivProfileWrapper.ekjxngi4 > div.css-1u3jkat-DivDescriptionContentWrapper.e1mecfx011 > div.css-1nst91u-DivMainContent.e1mecfx01 > div.css-bs495z-DivWrapper.e1mzilcj0 > div > div.css-1d7krfw-DivOverflowContainer.e1mzilcj5 > h1").innerText.replace("Replying to ", "")
                        } catch {
                            try {
                                return document.querySelector("#app > div.css-14dcx2q-DivBodyContainer.e1irlpdw0 > div:nth-child(4) > div > div.css-1qjw4dg-DivContentContainer.e1mecfx00 > div.css-1stfops-DivCommentContainer.ekjxngi0 > div > div.css-1xlna7p-DivProfileWrapper.ekjxngi4 > div.css-1u3jkat-DivDescriptionContentWrapper.e1mecfx011 > div.css-1nst91u-DivMainContent.e1mecfx01 > div.css-bs495z-DivWrapper.e1mzilcj0").innerText.replace("Replying to ", "")
                            } catch (e) {
                                return h("browse-video-desc", "data-e2e") ? h("browse-video-desc", "data-e2e").innerText : document.querySelector("#main-content-video_detail > div > div.css-12kupwv-DivContentContainer.ege8lhx2 > div.css-1senhbu-DivLeftContainer.ege8lhx3 > div.css-1sb4dwc-DivPlayerContainer.eqrezik4 > div.css-3lfoqn-DivDescriptionContentWrapper-StyledDetailContentWrapper.eqrezik15 > div.css-r4nwrj-DivVideoInfoContainer.eqrezik3 > div.css-bs495z-DivWrapper.e1mzilcj0 > div > h1").innerText.replace("Replying to ", "")
                            }
                        }
                    }();
                onmessage = function(e) {
                    if (e.origin == o || e.origin.match(/https?:\/{2}savetik\.csavetik.coo/) || e.origin.match(/https?:\/{2}en\.onlymp3\.to/) || e.origin.match(/https?:\/{2}en(\d)\.onlinevideoconverter\.pro/) || "https://savetik.co" == e.origin) {
                        var {
                            data: {
                                href: t,
                                links: l,
                                title: i,
                                length: c,
                                id: a,
                                mp4: s,
                                info: {
                                    username: d
                                }
                            }
                        } = e;
                        if (console.log("Handled", {
                                href: t,
                                title: i,
                                length: c,
                                id: a,
                                links: l,
                                mp4: s
                            }, e), "https://savetik.co" == e.origin) i = r, downloadFileAsTitle(s ? l[0] : l.pop(), d + " - " + i + (s ? ".mp4" : ".mp3"), n);
                        else {
                            if (useT) {
                                let e = document.createElement("a");
                                e.download = i + ".mp3", e.href = t, document.body.appendChild(e), e.click(), e.remove()
                            } else open(t);
                            localStorage[_] = t
                        }
                    } else console.log("Unhandled Post", e)
                }, n = open("https://savetik.co/en", [`https://www.tiktok.com/${i}/video/${l}`, e + !1], "width=400,height=500")
            })(e, t).then(console.log, console.warn)
        }, abc_ = h, M = f, Um = p;
        var g = 0;

        function w(e) {
            return !!e && !e.closed
        }
        async function v(e = [
            ["w1", "win1"],
            ["w2", "win2"],
            ["w3", "win3"],
            ["w4", "win4"]
        ]) {
            var t, n = !1;
            return await new Promise(((o, l) => {
                var i = setInterval((l => {
                    e.forEach((e => {
                        this[e[0]] = w(window[e[1]]), window[e[1]] || n || (n = !0, t = e[1], console.log(e))
                    })), t && (o(t), clearInterval(i))
                }), 500)
            })), t
        }
        window.ch3 = w, window.getWin = v, WIP_ = function(e, t, n) {
            var o = _getIds(),
                l = [];
            for (let t = 0; t < e; t++) l.push(["w" + t, "win" + t]);
            o.forEach((({
                id: e
            }, o) => {
                v(l).then((l => {
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
        var y = new e("button").set("innerText", "Get MP3").on("click", (function(e) {
                downloadT(setElement(location.href), !0, !0, !1, !0)
            })),
            b = new e("button").set("innerText", "Get MP4").on("click", (function(e) {
                downloadT(setElement(location.href), !0, !0, !0, !0)
            })),
            k = new e("button").set("innerText", "PlayList MP3").on("click", (function(e) {
                WIP_(2, !1, !1)
            })),
            E = new e("button").set("innerText", "PlayList MP4").on("click", (function(e) {
                WIP_(2, !0, !1)
            })),
            T = new e("button").set("innerText", "Get MP4").on("click", (function(e) {
                downloadTikTok(!0, setElement2(getClass("ehlq8k34") ? getClass("ehlq8k34").innerText : location.href))
            })).style({
                color: "white"
            }),
            C = (new e("button", {
                id: "tt1"
            }).set("innerText", "Get MP4").on("click", (function(e) {
                downloadTikTok(!0, setElement2(getClass("ehlq8k34") ? getClass("ehlq8k34").innerText : location.href))
            })).style({
                color: "white"
            }), new e("button").set("innerText", "Get MP3").on("click", (function(e) {
                downloadTikTok(!1, setElement2(getClass("ehlq8k34") ? getClass("ehlq8k34").innerText : location.href))
            })).style({
                color: "white"
            }));

        function S() {
            return query("#end") || query("#right-content")
        }

        function q() {
            const t = S();

            function n() {
                try {
                    return !(![...document.querySelectorAll("#header-description")].filter(l).filter((e => !r(e)))[0] && !query(".autoplay")) && ([...document.querySelectorAll("#header-description")].filter(l).filter((e => !r(e)))[0] || query(".autoplay"))
                } catch (e) {
                    return !1
                }
            }
            y.appendTo(t), b.appendTo(t), console.log("Posted Buttons");
            var o = !1;
            setInterval((() => {
                o != n() && n() ? (console.log("Added playlist buttons"), setTimeout((() => {
                    n().append(e.br.element), n().append(k.element), n().append(E.element)
                }), 100)) : o == n() || n() || console.log("buttons are gone?!?!"), o = n()
            }), 100)
        }
        if (a1 = [
                ["youtube", function() {
                    i((function() {
                        if (!S()) throw "Cant append buttons yet";
                        return !0
                    }), {
                        callback: q
                    })
                }],
                ["tiktok", function() {
                    addEventListener("load", (function() {
                        i((function() {
                            if (!abc_("browse-copy", "data-e2e")) throw "Cant Append";
                            T.appendTo(document.querySelectorAll(".e1mecfx011")), C.appendTo(document.querySelectorAll(".e1mecfx011"))
                        }), {
                            callback: function() {}
                        }), i((function() {
                            if (!document.getElementsByClassName("e13wiwn60")[0]) throw "Cant Append";

                            function t() {
                                try {
                                    return !!abc_("browse-copy", "data-e2e").parentNode && abc_("browse-copy", "data-e2e").parentNode
                                } catch (e) {
                                    return !1
                                }
                            }
                            T.appendTo(document.getElementsByClassName("e13wiwn60")[0]), C.appendTo(document.getElementsByClassName("e13wiwn60")[0]), console.log("Posted Buttons");
                            var n = !1;
                            setInterval((() => {
                                n != t() && t() ? (console.log("Added playlist buttons"), setTimeout((() => {
                                    t().append(e.br.element), t().append(T.element), t().append(C.element)
                                }), 100)) : n == t() || t() || console.log("buttons are gone?!?!"), n = t()
                            }), 100)
                        }), {
                            callback: function() {}
                        })
                    }))
                }]
            ].filter((e => location.host.includes(e[0])))[0], a1 && a1[1] && a1[1](), delete a1, location.href.includes("onlymp3.app") || location.href.includes("onlymp3.to")) {
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
            let [L, A] = name.split(",");
            i((function(e = function() {}) {
                document.getElementById("search_txt").value = `https://www.youtube.com/${"1"==A?"shorts/":"watch?v="}${L}`, document.getElementById("btn-submit").click(), console.log(L, A)
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
                        id: L,
                        href: t,
                        title: e,
                        length: {}
                    };
                console.log("Posted"), (opener || window).postMessage(n, "*")
            }), {
                callback: close
            })
        }
        if (location.href.includes("yt5s.biz")) {
            async function x(e) {
                for (; !document.querySelector(e);) await sleep(0);
                return !0
            }(async function() {
                let [e, t] = name.split(",");
                if (!e.length || !t.length) return console.warn("No info Preset");
                var n = `https://www.youtube.com/${"1"==t?"shorts/":"watch?v="}${e}`;
                await x("#txt-url"), console.log("Input Loaded"), document.querySelector("#txt-url").value = n, await x("#btn-submit"), console.log("GEtting res"), await sleep(100), document.querySelector("#btn-submit").click(), await x("#video_title"), console.log("Got Res");
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
        }
        if (location.href.includes("sss.instasaverpro.com") && async function() {
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
            }().then(close, console.warn), location.href.includes("en3.onlinevideoconverter.pro")) {
            let [B, V] = name.split(",");
            if (!B.length || !V.length) return console.Warn("NO info Preset");
            let G = function() {};
            i((function(e = function() {}) {
                document.getElementById("texturl").value = `https://www.youtube.com/${"1"==V?"shorts/":"watch?v="}${B}`, document.getElementById("convert1").click(), console.log("Searched")
            }), {
                callback: G
            }), i((function() {
                if ("none" == stepProcess.style.display) throw document.getElementById("convert1").click(), "this";
                console.log("Searching")
            }), {
                callback: G
            }), i((function() {
                if (0 == document.getElementById("form-app-root").children.length) throw "";
                console.log("loaded");
                var {
                    title: e,
                    href: t
                } = $("#download-720-MP4") && $("#download-720-MP4")[0] ? $("#download-720-MP4")[0] : $("#download-720-MP4"), n = {
                    id: B,
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
            var [I, P] = name.split(",");
            addEventListener("load", (function() {
                i((function() {
                    s_input.value = I, ksearchvideo(), setTimeout(ksearchvideo, 1e3)
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
                            mp4: 1 == P,
                            info: setElement2(I)
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
            document.getElementsByClassName("ytp-ad-button-icon")[0] && !g && (console.log("muted ad"), g = 1, f()), !document.getElementsByClassName("ytp-ad-button-icon")[0] && g && (console.log("unmuted video"), function() {
                try {
                    p()
                } catch (e) {
                    console.warn("Failed unmuting")
                }
            }(), g = 0), [...document.querySelectorAll("#song-video"), ...document.querySelectorAll("#ytd-player")].map((e => [...e.querySelectorAll("button")].filter((e => e.className.includes("skip")))[0])).filter((e => !!e))[0] && ([...document.querySelectorAll("#song-video"), ...document.querySelectorAll("#ytd-player")].map((e => [...e.querySelectorAll("button")].filter((e => e.className.includes("skip")))[0])).filter((e => !!e))[0].click(), console.log("Skipped d :>")), document.getElementsByClassName("ytp-ad-overlay-close-button")[2] && (document.getElementsByClassName("ytp-ad-overlay-close-button")[2].click(), console.log("Close ad card"))
        }), 10)
    }();