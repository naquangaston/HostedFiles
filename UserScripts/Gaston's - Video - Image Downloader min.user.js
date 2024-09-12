// ==UserScript==
// @name Gaston's - Video/Image Downloader
// @namespace http://tampermonkey.net/
// @version 5.7
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
const logger = new CustomLog("Script Logger");

function downloadFileAsTitle(e, t) {
    const o = document.createElement("a");
    o.href = e, o.download = t, document.body.appendChild(o), o.click(), document.body.removeChild(o)
}
var sleep = e => new Promise((t => setTimeout(t, e)));
console.log("ok");
var adev, set_, CurrentPlayingSymbol = "▶";

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
    return [...document.getElementsByClassName("ytp-video-menu-item ytp-button")].forEach(((t, o) => {
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
        var o;
        for (sleep(t).then((e => o = !0)); !document.querySelector(e) && (await sleep(0), !o););
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
        let o = new _e("button", {
            id: "GetAudio"
        }).appendTo(t).set("innerText", "Download MP3").on("click", (function() {
            downloadSC()
        }), (e => e));
        for (;;) !document.getElementById("GetAudio") && await e(".playbackSoundBadge__actions", 5e3) && await e(".playbackSoundBadge__actions", 5e3).then((e => {
            o.appendTo(e), console.log("Added Button")
        })), await sleep(0)
    })))
}().then(console.log, console.warn), downloadSC = function() {
    GM_setValue("SCinfo", null), GM_setValue("sc", getSoundCloudUrl()), !set_ && (set_ = 1, GM_addValueChangeListener("SCinfo", (function(e, t, o, n) {
        console.log({
            a: e,
            b: t,
            c: o,
            d: n
        }), o && o.name && _downloadFileAsTitle(o.href, o.name)
    }))), open("https://sclouddownloader.net/")
}, GM_setValue_ = GM_setValue, GM_getValue_ = GM_getValue, GM_info_ = GM_info;
var UnmutePath = "M3.15,3.85l4.17,4.17L6.16,9H3v6h3.16L12,19.93v-7.22l2.45,2.45c-0.15,0.07-0.3,0.13-0.45,0.18v1.04 c0.43-0.1,0.83-0.27,1.2-0.48l1.81,1.81c-0.88,0.62-1.9,1.04-3.01,1.2v1.01c1.39-0.17,2.66-0.71,3.73-1.49l2.42,2.42l0.71-0.71 l-17-17L3.15,3.85z M11,11.71v6.07L6.52,14H4v-4h2.52l1.5-1.27L11,11.71z M10.33,6.79L9.62,6.08L12,4.07v4.39l-1-1V6.22L10.33,6.79 z M14,8.66V7.62c2,0.46,3.5,2.24,3.5,4.38c0,0.58-0.13,1.13-0.33,1.64l-0.79-0.79c0.07-0.27,0.12-0.55,0.12-0.85 C16.5,10.42,15.44,9.1,14,8.66z M14,5.08V4.07c3.95,0.49,7,3.85,7,7.93c0,1.56-0.46,3.01-1.23,4.24l-0.73-0.73 C19.65,14.48,20,13.28,20,12C20,8.48,17.39,5.57,14,5.08z",
    mutePath = "M17.5,12c0,2.14-1.5,3.92-3.5,4.38v-1.04c1.44-0.43,2.5-1.76,2.5-3.34c0-1.58-1.06-2.9-2.5-3.34V7.62 C16,8.08,17.5,9.86,17.5,12z M12,4.07v15.86L6.16,15H3V9h3.16L12,4.07z M11,6.22L6.52,10H4v4h2.52L11,17.78V6.22z M21,12 c0,4.08-3.05,7.44-7,7.93v-1.01c3.39-0.49,6-3.4,6-6.92s-2.61-6.43-6-6.92V4.07C17.95,4.56,21,7.92,21,12z";

function downloadFile_(e, t) {
    const o = document.createElement("a");
    o.href = e, o.download = t, document.body.appendChild(o), o.click(), document.body.removeChild(o)
}
async function downloadVideo(e, t) {
    try {
        const o = await fetch(e);
        if (!o.ok) throw new Error(`HTTP error! Status: ${o.status}`);
        const n = o.url,
            l = await o.blob(),
            i = window.URL.createObjectURL(l),
            r = document.createElement("a");
        r.href = i, r.download = t, document.body.appendChild(r), r.click(), document.body.removeChild(r), window.URL.revokeObjectURL(i), console.log(`Video downloaded from: ${n}`)
    } catch (e) {
        console.error("Failed to download video:", e)
    }
}
_downloadFileAsTitle = async function(e, t, o, n) {
        const l = document.createElement("a");
        return l.style.display = "none", document.body.appendChild(l), fetch(e).then((e => e.blob())).then((i => {
            const r = URL.createObjectURL(i);
            l.href = r, l.download = t, l.target = "_blank", l.click(), URL.revokeObjectURL(r), (o || opener || window).postMessage({
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
    }, _downloadFile_ = downloadFile_, query = function(e, t) {
        try {
            let n = "undefined" != typeof $ ? $ : document.querySelectorAll;
            return t ? [...document.querySelectorAll(e)].filter((e => !(null === el.offsetParent)))[0] : (o = n(e) ? n(e).length ? n(e)[0] : n(e) : null, Object.keys(o).length ? o : null)
        } catch {}
        var o
    }, getElementByAttribute = function(e, t = "aria-label", o = document.body) {
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
        _element = _e = e, setElement2 = function(e) {
            return e.match(/(?<host>https?\:\/\/www\.tiktok\.com)\/(?<username>@[^\/]+)\/video\/(?<videoID>\d+)/i).groups
        };
        var t = "https://onlymp3.app";

        function o(e) {
            "function" == typeof jQuery && e instanceof jQuery && (e = e[0]);
            var t = e.getBoundingClientRect();
            return t.top >= 0 - (window.innerHeight || document.documentElement.clientHeight) / 2 && t.left >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight) + (window.innerHeight || document.documentElement.clientHeight) / 2 && t.right <= (window.innerWidth || document.documentElement.clientWidth)
        }

        function n(e, {
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

        function l(e) {
            return null === e.offsetParent
        }

        function i(e) {
            return e.parentNode
        }

        function r() {
            return get_aria_label("Go back") && get_aria_label("Go back").click ? get_aria_label("Go back") : document.querySelector("._afxv")
        }

        function c() {
            return get_aria_label("Next") && get_aria_label("Next").click ? get_aria_label("Next") : document.querySelector("._afxw")
        }

        function a() {
            if (location.href.includes("reel")) {
                let t = open("https://fastdl.app/en", location.href, "width=400,height=500");
                var e = GM_addValueChangeListener("instaURL", (function(o, n, l, i) {
                    l && (console.log("Got", {
                        a: o,
                        b: n,
                        c: l,
                        d: i
                    }), t.close(), GM_removeValueChangeListener(e), downloadFile_(l, document.title + ".mp4"), GM_setValue("instaURL", null))
                }))
            }
        }

        function s() {
            (async function() {
                for (var e = e => new Promise((t => setTimeout(t, e))), t = new Set, o = {}; r();) {
                    if (await e(100), !r()) {
                        await e(1e3);
                        break
                    }
                    r().click()
                }[...getInstalImages()].forEach((e => {
                    let o = findhref2(e, "img")[0];
                    t.add([o.src, o.getAttribute("alt")])
                })), c().click();
                try {
                    c().click()
                } catch (e) {}
                for (; c();) {
                    await e(300), [...getInstalImages()].forEach((e => {
                        let o = findhref2(e, "img")[0];
                        t.add([o.src, o.getAttribute("alt")])
                    }));
                    try {
                        c().click()
                    } catch (e) {}
                }
                for (; await e(100), r();) r().click();
                [...t].forEach((e => {
                    o[e[0]] = e[1]
                })), (t = Object.keys(o).map((e => ({
                    src: e,
                    name: o[e]
                })))).forEach((e => {
                    var t = new URL(e.src).pathname.split(".").pop();
                    p(e.src, `${e.name}.${t}`)
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
        const d = e => new Promise((t => setTimeout(t, e)));
        if ("fastdl.app" == document.domain) onload = async function() {
            const e = {
                url: name,
                input: null
            };
            var t = !1;
            for (setTimeout((() => {
                    t = !0
                }), 2e4); !document.querySelector("#search-form-input");)
                if (await d(0), t) throw "Cant find input";
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
                    for (; !document.querySelector(e);) await d(0);
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
                w != e && (w = e, console.log("Change?", e ? "Found" : "Not FOund"))
            }), 0);
            if ("www.instagram.com" == document.domain) {
                function u() {
                    console.log("Appended buttons man");
                    var t = new e(document.querySelectorAll(".xh8yej3.x1iyjqo2")[0]),
                        o = new e("button", {
                            id: "MediaButton"
                        }).set("innerText", "Get Images").on("click", s),
                        n = new e("button", {
                            id: "MediaButton2"
                        }).set("innerText", "Get Videos").on("click", a);
                    t.append(o, n)
                }
                return n((function() {
                    document.querySelectorAll(".xh8yej3.x1iyjqo2")[0].children
                }), {
                    callback: function() {
                        u(), setInterval((() => {
                            document.querySelector("#MediaButton") || u(), document.querySelector("._aaqy") && !document.querySelector("._aaqy").querySelector("#MediaButton") && function() {
                                var t = new e(document.querySelector("._aaqy")),
                                    o = new e("button", {
                                        id: "MediaButton"
                                    }).set("innerText", "Get Images").on("click", s),
                                    n = new e("button", {
                                        id: "MediaButton2"
                                    }).set("innerText", "Get Videos").on("click", a);
                                t.append(o, n)
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
                        var i = !1;
                        setTimeout((() => (i = 0, l())), t);
                        for (; !document.querySelector(e);)
                            if (await o(), i) {
                                l();
                                break
                            }
                        return n()
                    })).then((e => !0), (e => !1))
                }
                if ("/download-sound-track" == location.pathname) {
                    for (await t("#trackTitle"); !trackTitle.innerText.length;) await d(0);
                    for (await t("#trackLink"); !trackLink.href.length;) await d(0);
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
                            "undefined" == typeof formSubmit;) try {
                            await d(0), console.log("EZ url", formSubmit)
                        } catch {}
                        console.log("EZ url", formSubmit), formSubmit(), console.warn("Got"), setInterval(formSubmit, 1e3)
                    }
                }
            })().then(console.log, console.warn);
            else {
                if ("y2mate.nu" == document.domain) {
                    location.pathname.split("/")[1] != GM_getValue("y2mate.nu") && (GM_setValue("y2mate.nu", location.pathname.split("/")[1]), console.warn("updated"));
                    let X = new URL(location.href).searchParams.get("v"),
                        K = 1 == new URL(location.href).searchParams.get("s"),
                        Z = new URL(location.href).searchParams.get("mp4"),
                        Y = new URL(location.href).searchParams.get("useT"),
                        J = X + Z + Y;
                    const ee = e => new Promise((t => setTimeout(t, e)));
                    async function m(e, t = 5e3) {
                        let o = !1;
                        for (setTimeout((() => {
                                console.log("TimeOut for", e), o = !0
                            }), t); !document.querySelector(e) && (console.log("_", e, o), await ee(500), !o););
                        if (console.log(e, o), o) throw "NotFound";
                        return document.querySelector(e)
                    }
                    return void async function() {
                        for (;
                            "complete" != document.readyState;) await ee(0);
                        if (X) {
                            let e = async e => {
                                console.log("a", e);
                                var t = findhref2(document.forms[0])[0].href,
                                    o = findhref2(document.forms[0], "div")[0].innerText,
                                    n = {
                                        _: J,
                                        id: X,
                                        href: t,
                                        title: o,
                                        length: {}
                                    };
                                console.log("Posted", n), (opener || window.parent).postMessage(n, "*"), close()
                            };
                            try {
                                await m("#url").then((e => {
                                    console.log("e", e), e.value = K ? `https://www.youtube.com/watch?v=${X}` : `https://www.youtube.com/shorts/${X}`, e.parentElement.children[1].click()
                                })).catch(e), console.log("after url"), await m("#progress").then((async e => {
                                    for (; document.querySelector(`#${e.id}`);) await ee(0);
                                    console.log("a_")
                                })).catch(e), console.log("b")
                            } catch (e) {
                                console.warn("Error:", e)
                            }
                        } else console.warn("No id Found")
                    }().then(console.log, console.warn)
                }
                if ("qdownloader.cc" == document.domain) {
                    const te = e => new Promise((t => setTimeout(t, e)));
                    async function m(e, t = 2e4) {
                        let o = !1;
                        for (setTimeout((() => {
                                console.log("TimeOut for", e), o = !0
                            }), t); !document.querySelector(e) && (console.log("_", e, o), await te(500), !o););
                        if (console.log(e, o), o) throw "NotFound";
                        return document.querySelector(e)
                    }
                    let oe = document.createElement;
                    document._createElement = function(e, t) {
                        let o = oe.call(document, e, t);
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
                            }), o.includes("video download successful\ncheck downloads folder") && (await te(1e3), close())
                        }));
                        let e = await m("#url"),
                            t = await m("#downloadBtn");
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
                        "vidbutton" == e && (console.log("Best Quality Video"), await m("#height").then((e => {
                            height.selectedIndex = height.options.length - 1, dlbutton.click(), open = window.open, window.open = function(e, t, o) {
                                console.log({
                                    a: e,
                                    b: t,
                                    c: o
                                })
                            }, m("#dlbutton").then((e => {
                                var t = "";
                                setInterval((o => {
                                    t != e.innerText && (t = e.innerText, GM_setValue("dlbutton", t))
                                }))
                            }))
                        })))
                    }))
                } else {
                    if ("snapsave.io" == document.domain) {
                        async function m(e, t = 2e4) {
                            let o = !1;
                            for (setTimeout((() => {
                                    console.log("TimeOut for", e), o = !0
                                }), t); !document.querySelector(e) && (console.log("_", e, o), await d(500), !o););
                            if (console.log(e, o), o) throw "NotFound";
                            return document.querySelector(e)
                        }
                        return _wfs = m, void async function() {
                            var e = await m("#s_input");
                            if (e) {
                                console.log("Converting"), id_ = new URL(location.href).searchParams.get("v"), e.value = `https://www.youtube.com/watch?v=${id_}`, ksearchvideo(), setTimeout(ksearchvideo(), 1e3);
                                var t = await m("#formatSelect");
                                await m("#btn-action");
                                t.selectedIndex = 0, t.options[0].selected = !0;
                                for (var o = await m("#asuccess"); !(o = await m("#asuccess"));) await d(0);
                                for (convertFile(0);
                                    "#" == o.getAttribute("href");) await d(0), o = await m("#asuccess");
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
                        const ne = e => new Promise((t => setTimeout(t, e)));
                        async function m(e, t = 2e4) {
                            let o = !1;
                            for (setTimeout((() => {
                                    console.log("TimeOut for", e), o = !0
                                }), t); !document.querySelector(e) && (console.log("_", e, o), await ne(500), !o););
                            if (console.log(e, o), o) throw "NotFound";
                            return document.querySelector(e)
                        }

                        function h(e) {
                            if (!(e instanceof Element)) throw new Error("Provided argument is not a DOM element.");
                            const t = document.createElement(e.tagName);
                            for (let o of e.attributes) t.setAttribute(o.name, o.value);
                            return t.style.cssText = e.style.cssText, t.className = e.className, t.innerHTML = e.innerHTML, t
                        }
                        _wfs = m, _copyElm = h, async function() {
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
                            })).appendTo(e.parentNode).element.querySelector(".ScCoreButtonLabel-sc-s7h2b7-0").innerText = "VOD"
                        }().catch(console.warn)
                    } else if ("www.twitch.tv" == document.domain) {
                        let [le, ie, re, ce] = location.pathname.split("/");
                        if ("clip" != re) return console.warn("User isnt wathcing a clip");
                        console.log("User is Watching a CLip");
                        const ae = e => new Promise((t => setTimeout(t, e)));
                        async function m(e, t = 2e4) {
                            let o = !1;
                            for (setTimeout((() => {
                                    console.log("TimeOut for", e), o = !0
                                }), t); !document.querySelector(e) && (console.log("_", e, o), await ae(500), !o););
                            if (console.log(e, o), o) throw "NotFound";
                            return document.querySelector(e)
                        }

                        function h(e) {
                            if (!(e instanceof Element)) throw new Error("Provided argument is not a DOM element.");
                            const t = document.createElement(e.tagName);
                            for (let o of e.attributes) t.setAttribute(o.name, o.value);
                            return t.style.cssText = e.style.cssText, t.className = e.className, t.innerHTML = e.innerHTML, t
                        }
                        _wfs = m, _wfs_ = m, _copyElm = h, async function() {
                            location.href;
                            await _wfs(".Layout-sc-1xcs6mc-0 .bMOhzu");
                            let e = document.querySelectorAll(".Layout-sc-1xcs6mc-0 .bMOhzu")[1],
                                t = "a";
                            new _e(_copyElm(e)).on("click", (function() {
                                var e;
                                open((e = new URL(location.href), e.host = "clipr.xyz", e.pathname = e.pathname.replace("/" + ie + "/clip", ""), e.search = "", e).href, "1080")
                            })).appendTo(e.parentNode).element.querySelector(t).innerText = "1080P", new _e(_copyElm(e)).on("click", (function() {
                                var e;
                                open((e = new URL(location.href), e.host = "clipr.xyz", e.pathname = e.pathname.replace("/" + ie + "/clip", ""), e.search = "", e).href, "720")
                            })).appendTo(e.parentNode).element.querySelector(t).innerText = "720P", new _e(_copyElm(e)).on("click", (function() {
                                var e;
                                open((e = new URL(location.href), e.host = "clipr.xyz", e.pathname = e.pathname.replace("/" + ie + "/clip", ""), e.search = "", e).href, "480")
                            })).appendTo(e.parentNode).element.querySelector(t).innerText = "480P", new _e(_copyElm(e)).on("click", (function() {
                                var e;
                                open((e = new URL(location.href), e.host = "clipr.xyz", e.pathname = e.pathname.replace("/" + ie + "/clip", ""), e.search = "", e).href, "360")
                            })).appendTo(e.parentNode).element.querySelector(t).innerText = "360P", new _e(_copyElm(e)).on("click", (function() {
                                var e;
                                open((e = new URL(location.href), e.host = "clipr.xyz", e.pathname = e.pathname.replace("/" + ie + "/clip", ""), e.search = "", e).href, "VOD")
                            })).appendTo(e.parentNode).element.querySelector(".ScCoreButtonLabel-sc-s7h2b7-0").innerText = "VOD"
                        }().catch(console.warn)
                    } else {
                        if ("clipr.xyz" == document.domain) {
                            async function m(e, t = 2e4) {
                                let o = !1;
                                for (setTimeout((() => {
                                        logger.log(`TimeOut for ${e}`), o = !0
                                    }), t); !document.querySelector(e) && (logger.log(`_ ${e} ${o}`), await d(500), !o););
                                if (logger.log(`${e} ${o}`), o) throw "NotFound";
                                return document.querySelector(e)
                            }

                            function d(e) {
                                return new Promise((t => setTimeout(t, e)))
                            }

                            function p(e, t) {
                                const o = document.createElement("a");
                                o.href = e, o.download = t, document.body.appendChild(o), o.click(), document.body.removeChild(o)
                            }
                            return void async function() {
                                let e = name;
                                await async function() {
                                    for (;
                                        "complete" != document.readyState;) await d(0);
                                    return !0
                                }(), logger.log("Loaded");
                                let t = {
                                    1080: document.querySelector("body > div.relative.overflow-hidden > main > div > div.px-4.mx-auto.max-w-7xl.sm\\:px-6.lg\\:px-8 > div.overflow-hidden.bg-white.rounded-xl.shadow > div > div > div:nth-child(2) > ul > div > li:nth-child(1) > div:nth-child(3) > a").href,
                                    720: document.querySelector("body > div.relative.overflow-hidden > main > div > div.px-4.mx-auto.max-w-7xl.sm\\:px-6.lg\\:px-8 > div.overflow-hidden.bg-white.rounded-xl.shadow > div > div > div:nth-child(2) > ul > div > li:nth-child(2) > div:nth-child(3) > a").href,
                                    480: document.querySelector("body > div.relative.overflow-hidden > main > div > div.px-4.mx-auto.max-w-7xl.sm\\:px-6.lg\\:px-8 > div.overflow-hidden.bg-white.rounded-xl.shadow > div > div > div:nth-child(2) > ul > div > li:nth-child(3) > div:nth-child(3) > a").href,
                                    360: document.querySelector("body > div.relative.overflow-hidden > main > div > div.px-4.mx-auto.max-w-7xl.sm\\:px-6.lg\\:px-8 > div.overflow-hidden.bg-white.rounded-xl.shadow > div > div > div:nth-child(2) > ul > div > li:nth-child(4) > div:nth-child(3) > a").href,
                                    VOD: document.querySelector("body > div.relative.overflow-hidden > main > div > div.px-4.mx-auto.max-w-7xl.sm\\:px-6.lg\\:px-8 > div.overflow-hidden.bg-white.rounded-xl.shadow > div > div > div:nth-child(2) > ul > div > li:nth-child(5) > div:nth-child(3) > a").href
                                }[e];
                                logger.log(1);
                                let o = document.querySelector("body > div.relative.overflow-hidden > main > div > div.px-4.mx-auto.max-w-7xl.sm\\:px-6.lg\\:px-8 > div.mb-6.space-y-3.lg\\:flex.lg\\:items-center.lg\\:justify-between.lg\\:space-y-0 > div.lg\\:flex.lg\\:items-center > p > span:nth-child(1)").innerText;
                                logger.log(2);
                                let n = document.querySelector("body > div.relative.overflow-hidden > main > div > div.px-4.mx-auto.max-w-7xl.sm\\:px-6.lg\\:px-8 > div.mb-6.space-y-3.lg\\:flex.lg\\:items-center.lg\\:justify-between.lg\\:space-y-0 > div.lg\\:flex.lg\\:items-center > h2").innerText;
                                logger.log(3);
                                let l = `@${o} on Twitch | ${n} - ${e}P.mp4`;
                                logger.log(`Downloading file as: ${l}`), open(t), logger.log(4), await d(4e3), close()
                            }().catch(console.warn)
                        }
                        if (location.href.includes("tubemp4.is")) {
                            async function m(e, t = 3e4) {
                                var o;
                                for (d(t).then((e => o = !0)); !document.querySelector(e) && (await d(0), !o););
                                return document.querySelector(e)
                            }
                            console.log("ok"), m("#u").then((async e => {
                                e.value = `https://www.youtube.com/watch?v=${new URL(location.href).searchParams.get("v")}`, convert.click(), await d(200), (await m("#convert")).click(), (await m(".process-button")).click(), m(".download-button").then((e => {
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
        var w, g;

        function p(e, t) {
            const o = document.createElement("a");
            o.href = e, o.download = t, document.body.appendChild(o), o.click(), document.body.removeChild(o)
        }

        function y(e, t = "aria-label", o = document.body) {
            var n = [];
            return function o(l) {
                var i = !1;
                t ? l.getAttribute(t) == e && (n.push(l), i = 1) : [...l.attributes].map((e => {
                    const {
                        name: t,
                        value: o
                    } = e;
                    return {
                        name: t,
                        value: o
                    }
                })).filter((t => t.value == e)).length && (n.push(l), i = 1), l.children.length && !i && ((l = l.children).forEach = [].forEach, l.forEach((e => {
                    o(e)
                })))
            }(o), n.length ? 1 == n.length ? n[0] : n || !1 : null
        }

        function v() {
            (y("Mute", "title") && y("Mute", "title")[0] || y("Mute (m)", "title")).click()
        }

        function b() {
            (query("#right-controls") && query("#right-controls").querySelectorAll("path")[0].getAttribute("d") == UnmutePath && y("Mute", "title")[0] || y("Unmute", "title") || y("Unmute (m)", "title")).click()
        }
        console.log("B?"), _getIds = function() {
            if (document.domain.includes("music")) throw alert("These button dont work on youtube music yet"), ".";
            var e = [...document.getElementsByTagName("ytd-playlist-panel-renderer")].filter(o).filter((e => !l(e)))[0];
            return findhref2(e, "span").filter((e => !l(e))).filter(o).filter((e => "video-title" == e.id)).map(i).map(i).map((e => ({
                id: setElement(findhref2(i(e))[0].href),
                e: e
            })))
        }, info = {}, downloadT = function(e, o = !1, n = !0, l = !1, i = !1, r = "") {
            let c = e + (l ? "mp4" : "mp3") + n;
            var a;
            if (!(a = document.getElementById(c)) || a.remove(), localStorage[c] && !o && (!i || !confirm(`You have already download this video as .${l?"mp4":"mp3"}\nStill download?`))) return;
            let s = r || location;
            var d = new URL(location.href);
            d.host = d.host.replace(".com", "mz.com"), console.log("o", d);
            let u = ["https://y2mate.nu/" + (GM_getValue("y2mate.nu") || "0HzX") + "/", "?v=", e, "&s=", d.pathname.startsWith("/shorts/") ? 1 : 0, "&mp4=", l ? "mp4" : "mp3", "&useT=", n];
            console.log(c, u);
            var m;
            return function(e, t, o = !1) {
                var n = addEventListener(e, ((...e) => {
                    t(...e), o && removeEventListener(n)
                }), !0)
            }("unload", (function() {
                info[e].close()
            }), !0), onmessage = function(e) {
                if (e.origin == t || e.origin.match(/https?:\/{2}onlymp3\.to/) || e.origin.match(/https?:\/{2}en\.onlymp3\.to/) || e.origin.match(/https?:\/{2}en(\d)\.onlinevideoconverter\.pro/) || "https://sss.instasaverpro.com" == e.origin || "https://y2mate.nu" == e.origin || "https://snapsave.io" == e.origin || "https://tubemp4.is" == e.origin) {
                    const {
                        data: {
                            href: t,
                            title: o,
                            length: i,
                            id: r,
                            _: c
                        }
                    } = e;
                    let a = o + (l ? ".mp4" : ".mp3");
                    (e => {
                        e && e.remove()
                    })(document.getElementById(c)), console.log("Handled", {
                        href: t,
                        title: o,
                        length: i,
                        id: r,
                        _: c
                    }, e), S.set("innerText", "Get MP3"), S.set("disabled", !1), n ? (console.log("Getting video"), p(t, a)) : open(t), localStorage[c] = t
                } else console.log("Unhandled Post", e)
            }, info[e] = l ? open(s.pathname.startsWith("/shorts/") ? "https://yt5s.biz/enxj100/" : `https://qdownloader.cc/youtube-video-downloader.html?v=${e}`, [e, s.pathname.startsWith("/shorts/") ? 1 : 0, l + !1], "width=400,height=500") : (m = new _e("iframe", {
                src: u.join(""),
                id: c,
                useT: n,
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
            }), GM_addValueChangeListener("y2mate.nu", (function(t, o, i, r) {
                u = ["https://y2mate.nu/" + (GM_getValue("y2mate.nu") || "0HzX") + "/", "?v=", e, "&s=", d.pathname.startsWith("/shorts/") ? 1 : 0, "&mp4=", l ? "mp4" : "mp3", "&useT=", n], m.set("src", u.join(""))
            })), m.appendTo(document.body), m.closed = !1, !m)
        }, downloadTikTok = function(e, o) {
            (async function(e, o) {
                await async function() {
                    for (; g && !g.closed;) await d(0);
                    return 1
                }(), console.log("ez");
                let n = o.videoID,
                    l = o.username,
                    i = function() {
                        try {
                            return document.querySelector("#app > div.css-14dcx2q-DivBodyContainer.e1irlpdw0 > div:nth-child(4) > div > div.css-1qjw4dg-DivContentContainer.e1mecfx00 > div.css-1stfops-DivCommentContainer.ekjxngi0 > div > div.css-1xlna7p-DivProfileWrapper.ekjxngi4 > div.css-1u3jkat-DivDescriptionContentWrapper.e1mecfx011 > div.css-1nst91u-DivMainContent.e1mecfx01 > div.css-bs495z-DivWrapper.e1mzilcj0 > div > div.css-1d7krfw-DivOverflowContainer.e1mzilcj5 > h1").innerText.replace("Replying to ", "")
                        } catch {
                            try {
                                return document.querySelector("#app > div.css-14dcx2q-DivBodyContainer.e1irlpdw0 > div:nth-child(4) > div > div.css-1qjw4dg-DivContentContainer.e1mecfx00 > div.css-1stfops-DivCommentContainer.ekjxngi0 > div > div.css-1xlna7p-DivProfileWrapper.ekjxngi4 > div.css-1u3jkat-DivDescriptionContentWrapper.e1mecfx011 > div.css-1nst91u-DivMainContent.e1mecfx01 > div.css-bs495z-DivWrapper.e1mzilcj0").innerText.replace("Replying to ", "")
                            } catch (e) {
                                return y("browse-video-desc", "data-e2e") ? y("browse-video-desc", "data-e2e").innerText : document.querySelector("#main-content-video_detail > div > div.css-12kupwv-DivContentContainer.ege8lhx2 > div.css-1senhbu-DivLeftContainer.ege8lhx3 > div.css-1sb4dwc-DivPlayerContainer.eqrezik4 > div.css-3lfoqn-DivDescriptionContentWrapper-StyledDetailContentWrapper.eqrezik15 > div.css-r4nwrj-DivVideoInfoContainer.eqrezik3 > div.css-bs495z-DivWrapper.e1mzilcj0 > div > h1").innerText.replace("Replying to ", "")
                            }
                        }
                    }();
                onmessage = function(e) {
                    if (e.origin == t || e.origin.match(/https?:\/{2}savetik\.csavetik.coo/) || e.origin.match(/https?:\/{2}en\.onlymp3\.to/) || e.origin.match(/https?:\/{2}en(\d)\.onlinevideoconverter\.pro/) || "https://savetik.co" == e.origin) {
                        var {
                            data: {
                                href: o,
                                links: n,
                                title: l,
                                length: r,
                                id: c,
                                mp4: a,
                                info: {
                                    username: s
                                }
                            }
                        } = e;
                        if (console.log("Handled", {
                                href: o,
                                title: l,
                                length: r,
                                id: c,
                                links: n,
                                mp4: a
                            }, e), "https://savetik.co" == e.origin) l = i, p(a ? n[0] : n.pop(), s + " - " + l + (a ? ".mp4" : ".mp3"), g);
                        else {
                            if (useT) {
                                let e = document.createElement("a");
                                e.download = l + ".mp3", e.href = o, document.body.appendChild(e), e.click(), e.remove()
                            } else open(o);
                            localStorage[_] = o
                        }
                    } else console.log("Unhandled Post", e)
                }, g = open("https://savetik.co/en", [`https://www.tiktok.com/${l}/video/${n}`, e + !1], "width=400,height=500")
            })(e, o).then(console.log, console.warn)
        }, abc_ = y, M = v, Um = b;
        var k = 0;

        function x(e) {
            return !!e && !e.closed
        }
        async function T(e = [
            ["w1", "win1"],
            ["w2", "win2"],
            ["w3", "win3"],
            ["w4", "win4"]
        ]) {
            var t, o = !1;
            return await new Promise(((n, l) => {
                var i = setInterval((l => {
                    e.forEach((e => {
                        this[e[0]] = x(window[e[1]]), window[e[1]] || o || (o = !0, t = e[1], console.log(e))
                    })), t && (n(t), clearInterval(i))
                }), 500)
            })), t
        }
        window.ch3 = x, window.getWin = T, WIP_ = function(e, t, o) {
            if (!t) return alert("This button is corrently broken");
            var n = _getIds(),
                l = [];
            for (let t = 0; t < e; t++) l.push(["w" + t, "win" + t]);
            n.forEach((({
                id: e
            }, n) => {
                T(l).then((l => {
                    if (!info[e] && !localStorage[e] || o) {
                        console.log("download", e, n), window[l] = downloadT(e, o, !0, !!t), window.addEventListener("unload", (function(e) {
                            window[l].close()
                        }));
                        var i = setInterval((e => {
                            window[l] && !window[l].closed || (window[l] = null, clearInterval(i), console.log(l, "isclosed"))
                        }), 300)
                    }
                }))
            }))
        };
        var S = new e("button").set("innerText", "Get MP3").on("click", (function(e) {
                S.set("innerText", "Wait..."), S.set("disabled", !0), downloadT(setElement(location.href), !0, !0, !1, !0)
            })),
            E = new e("button").set("innerText", "Get MP4").on("click", (function(e) {
                downloadT(setElement(location.href), !0, !0, !0, !0)
            })),
            q = new e("button").set("innerText", "PlayList MP3").on("click", (function(e) {
                WIP_(2, !1, !1)
            })),
            C = new e("button").set("innerText", "PlayList MP4").on("click", (function(e) {
                WIP_(2, !0, !1)
            })),
            L = new e("button").set("innerText", "Get MP4").on("click", (function(e) {
                downloadTikTok(!0, setElement2(getClass("ehlq8k34") ? getClass("ehlq8k34").innerText : location.href))
            })).style({
                color: "white"
            }),
            P = (new e("button", {
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

        function U() {
            return document.querySelector("#end") || document.querySelector("#right-content")
        }
        if (console.log("bruh"), a1 = [
                ["youtube", function() {
                    n((function() {
                        U();
                        if (!U()) throw "Cant append buttons yet";
                        return console.log("Posting"),
                            function() {
                                const t = U();

                                function n() {
                                    try {
                                        return !(![...document.querySelectorAll("#header-description")].filter(o).filter((e => !l(e)))[0] && !query(".autoplay")) && ([...document.querySelectorAll("#header-description")].filter(o).filter((e => !l(e)))[0] || query(".autoplay"))
                                    } catch (e) {
                                        return !1
                                    }
                                }
                                console.log(t), S.appendTo(t), E.appendTo(t), console.log("Posted Buttons");
                                var i = !1;
                                setInterval((() => {
                                    i != n() && n() ? (console.log("Added playlist buttons"), setTimeout((() => {
                                        n().append(e.br.element), n().append(q.element), n().append(C.element)
                                    }), 100)) : i == n() || n() || console.log("buttons are gone?!?!"), i = n()
                                }), 100)
                            }()
                    }), {
                        callback: function() {}
                    })
                }],
                ["tiktok", function() {
                    addEventListener("load", (function() {
                        n((function() {
                            if (!abc_("browse-copy", "data-e2e")) throw "Cant Append";
                            L.appendTo(document.querySelectorAll(".e1mecfx011")), P.appendTo(document.querySelectorAll(".e1mecfx011"))
                        }), {
                            callback: function() {}
                        }), n((function() {
                            if (!document.getElementsByClassName("e13wiwn60")[0]) throw "Cant Append";

                            function t() {
                                try {
                                    return !!abc_("browse-copy", "data-e2e").parentNode && abc_("browse-copy", "data-e2e").parentNode
                                } catch (e) {
                                    return !1
                                }
                            }
                            L.appendTo(document.getElementsByClassName("e13wiwn60")[0]), P.appendTo(document.getElementsByClassName("e13wiwn60")[0]), console.log("Posted Buttons");
                            var o = !1;
                            setInterval((() => {
                                o != t() && t() ? (console.log("Added playlist buttons"), setTimeout((() => {
                                    t().append(e.br.element), t().append(L.element), t().append(P.element)
                                }), 100)) : o == t() || t() || console.log("buttons are gone?!?!"), o = t()
                            }), 100)
                        }), {
                            callback: function() {}
                        })
                    }))
                }]
            ].filter((e => location.host.includes(e[0])))[0], a1 && a1[1] && a1[1](), console.log(a1), delete a1, __ex_ = U, location.href.includes("onlymp3.app") || location.href.includes("onlymp3.to")) {
            console.log("onlymp3.app");
            return setInterval((() => {
                document.getElementById("error-text").innerText.length > 5 && location.reload()
            }), 2e4), console.log("Getting MP3"), void n((function(e = function() {}) {
                ! function() {
                    var [e, t] = name.split(",");
                    txtUrl.value = `https://www.youtube.com/${"1"==t?"shorts/":"watch?v="}${e}`, getListFormats()
                }(), n((function(e = function() {}) {
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
            let [se, de] = name.split(",");
            n((function(e = function() {}) {
                document.getElementById("search_txt").value = `https://www.youtube.com/${"1"==de?"shorts/":"watch?v="}${se}`, document.getElementById("btn-submit").click(), console.log(se, de)
            }), {
                callback: function() {}
            }), n((function(e = function() {}) {
                if (console.log(result.children.length), !result.children.length) throw document.getElementById("btn-submit").click(), "no there"
            }), {
                int: 1e3,
                callback: function() {}
            }), n((function() {
                document.getElementById("btn-download").click()
            }), {
                callback: function() {}
            }), n((function() {
                var e = $(".media-heading")[0].innerText,
                    t = downloadbtn.href,
                    o = {
                        id: se,
                        href: t,
                        title: e,
                        length: {}
                    };
                console.log("Posted"), (opener || window).postMessage(o, "*")
            }), {
                callback: close
            })
        } else if (location.href.includes("yt5s.biz")) {
            async function m(e) {
                for (; !document.querySelector(e);) await d(0);
                return !0
            }(async function() {
                let [e, t] = name.split(",");
                if (!e.length || !t.length) return console.warn("No info Preset");
                var o = `https://www.youtube.com/${"1"==t?"shorts/":"watch?v="}${e}`;
                await m("#txt-url"), console.log("Input Loaded"), document.querySelector("#txt-url").value = o, await m("#btn-submit"), console.log("GEtting res"), await d(100), document.querySelector("#btn-submit").click(), await m("#video_title"), console.log("Got Res");
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
                    for (; !document.querySelector(e);) await d(0);
                    return !0
                }("#A_downloadUrl"); !document.querySelector("#A_downloadUrl").href.length;) await d(0);
            console.log("Done");
            var e = document.querySelector("#myModalLabel").innerText,
                t = {
                    href: document.querySelector("#A_downloadUrl").href,
                    title: e
                };
            (opener || window).postMessage(t, "*")
        })().then(close, console.warn);
        else if (location.href.includes("en3.onlinevideoconverter.pro")) {
            let [ue, me] = name.split(",");
            if (!ue.length || !me.length) return console.Warn("NO info Preset");
            let he = function() {};
            n((function(e = function() {}) {
                document.getElementById("texturl").value = `https://www.youtube.com/${"1"==me?"shorts/":"watch?v="}${ue}`, document.getElementById("convert1").click(), console.log("Searched")
            }), {
                callback: he
            }), n((function() {
                if ("none" == stepProcess.style.display) throw document.getElementById("convert1").click(), "this";
                console.log("Searching")
            }), {
                callback: he
            }), n((function() {
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
            var [I, N] = name.split(",");
            addEventListener("load", (function() {
                n((function() {
                    s_input.value = I, ksearchvideo(), setTimeout(ksearchvideo, 1e3)
                }), {
                    callback() {}
                })
            })), n((function() {
                document.getElementsByClassName("clearfix")[0].innerText,
                    function() {
                        console.log("Found");
                        let e = {
                            title: document.getElementsByClassName("clearfix")[0].innerText,
                            links: findhref2(document.getElementsByClassName("tik-video")[0]).map((e => e.href)),
                            mp4: 1 == N,
                            info: setElement2(I)
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
                                }, e), t ? setTimeout(close, 100) : p(o, n, null, close)
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
                tagName: i
            }
        }) {
            ["INPUT", "TEXTAREA"].includes(i) || t || o || !e || "KeyI" != n || (abc_("Close player page") || abc_("Open player page")[1]).click()
        }))) : document.domain.includes("loader.to") && location.href.includes("/api/") && console.warn("using loader.to api");
        const z = window.trustedTypes && trustedTypes.createPolicy("trustedHTMLPolicy", {
                createHTML: e => e,
                createScriptURL: e => e
            }),
            A = "\n    /* Default iframe styles */\n    #cardApiIframe {\n        width: 100%;\n        height: 100%;\n        transition: all 2.5s ease-in-out;\n    }\n\n    /* Collapse animation when the class is toggled */\n    .collapse-frame {\n        width: 0;\n        height: 0;\n        margin-left: auto;\n        margin-right: auto;\n        transition: all 2.5s ease-in-out;\n    }\n",
            B = document.createElement("style");

        function R(e) {
            const t = j.element;
            e ? t.classList.add("collapse-frame") : t.classList.remove("collapse-frame")
        }
        B.type = "text/css", B.appendChild(document.createTextNode(z ? z.createHTML(A) : A));
        var V = `https://www.youtube.com/watch?v=${setElement(location.href)}&adUrl=https://www.youtube.com/channel/UCOA8lE9-0XnEIdHqjfQUz1A?sub_confirm=1`,
            G = z ? z.createScriptURL("https://loader.to/api/card2/?url=" + V) : "https://loader.to/api/card2/?url=" + V;
        const j = new _element("iframe", {
                id: "cardApiIframe",
                scrolling: "no",
                width: "100%",
                height: "100%",
                allowtransparency: "true",
                style: "border: none",
                src: G
            }),
            D = new _element("script", {
                src: z ? z.createScriptURL("https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.9/iframeResizer.min.js") : "https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.9/iframeResizer.min.js"
            });
        D.element.addEventListener("load", (() => {
            "function" == typeof iFrameResize ? iFrameResize({
                log: !1
            }, "#cardApiIframe") : console.error("iFrameResize function not available")
        }));
        const O = new _element("div").append(j, D);
        document.querySelector("#secondary.ytd-watch-flexy");
        var F = setElement(location.href);
        j.element.addEventListener("load", (() => {
            console.log("Iframe is fully loaded"), R(!1)
        })), R(!0);
        var H = 0,
            W = 1,
            Q = 0;
        setInterval((e => {
            const t = document.querySelector("#secondary.ytd-watch-flexy");
            V = `https://www.youtube.com/watch?v=${setElement(location.href)}&adUrl=https://www.youtube.com/channel/UCOA8lE9-0XnEIdHqjfQUz1A?sub_confirm=1`, G = z ? z.createScriptURL("https://loader.to/api/card2/?url=" + V) : "https://loader.to/api/card2/?url=" + V, t && (!t.querySelector("#cardApiIframe") && (R(!0), t.parentNode.prepend(B), t.prepend(O.element), console.log("Added That Thing")), setElement(location.href) != F && (R(!0), j.set("src", G), console.log("Fixed That Thing"), F = setElement(location.href)));
            const o = query("yt-button-view-model#dismiss-button");
            o && !l(o) && o.click();
            const n = document.getElementsByClassName("ytp-ad-button-icon")[0];
            try {
                if (n && !k) console.log("Muted ad"), k = 1, v();
                else if (!n && k) {
                    console.log("Unmuted video");
                    try {
                        b()
                    } catch (e) {
                        console.warn("Failed unmuting")
                    }
                    k = 0
                }
            } catch {}
            const i = [...document.querySelectorAll("#song-video"), ...document.querySelectorAll("#ytd-player")].map((e => [...e.querySelectorAll("button")].filter((e => e.className.includes("skip")))[0])).filter((e => !!e))[0],
                r = document.querySelector("video");
            i ? (Q || (Q = 1, r.playbackRate = 16, console.log("Skipping ad :>")), i.click(), W = 0) : !W && r ? (Q = 0, W = 1, r.playbackRate = H, console.log("Fixed playBack")) : r && (Q = 0, H = r.playbackRate);
            const c = document.getElementsByClassName("ytp-ad-overlay-close-button")[2];
            c && (c.click(), console.log("Closed ad card"))
        }), 10)
    }();