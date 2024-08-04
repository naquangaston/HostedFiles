// ==UserScript==
// @name Auto quizzez AI bot
// @namespace http://tampermonkey.net/
// @version 0.9
// @description this bot saves all right question and rembers the Q&A for later Q&A's are now stored;so it does not have to learn the same quiz again
// @author You
// @match *://quizizz.com/*
// @grant GM_info
// @license MIT
// @downloadURL https://update.greasyfork.org/scripts/444219/Auto%20quizzez%20AI%20bot.user.js
// @updateURL https://update.greasyfork.org/scripts/444219/Auto%20quizzez%20AI%20bot.meta.js
// @require https://raw.githubusercontent.com/naquangaston/HostedFiles/main/UserScripts/Updater.js
// ==/UserScript==
// @license MIT
// @license MIT
async function e() {
    const e = GM_info;
    var t = {};
    e.scriptMetaStr.split("\n").filter((e => e.includes("@"))).forEach((e => {
        let n = e.match(/(@[^ ]+) +(.+)/i),
            o = n[1],
            r = n[2];
        t[o] = r
    })), console.log("Checking for updates"), Number(e.scriptMetaStr.split("\n").filter((e => e.startsWith("// @version")))[0].split(" ").pop()), console.log(t["@name"], "\n", "Version:", t["@version"]);
    var n = await fetch("https://greasyfork.org/en/scripts/IdHere/versions.json").then((e => e.json())).then((e => e));
    n[0].version > t["@version"] ? (fetch("https://greasyfork.org/en/scripts/IdHere.json").then((e => e.json())).then((e => e)).then((e => {
        open(e.code_url)
    })), console.log("New Version avaliable:", n[0].version)) : n[0].version < t["@version"] ? console.log("Script was downgraded") : console.log("No updates")
}
class t {
    constructor(e) {
        const t = new XMLHttpRequest;
        this.responseText = new String, this.responseText.JSON = function() {
            return JSON.parse(String(this))
        }, this.load = async function() {
            t.open("GET", e), t.send();
            var n = 0;
            this.responseText = new String(await new Promise((e => {
                t.onreadystatechange = () => {
                    t.responseText.length && !n && (e(t.responseText), n = 1, this.responseText.JSON = function() {
                        return JSON.parse(String(this))
                    })
                }
            })))
        }
    }
}
setValue = GM_setValue, getValue = GM_getValue, info_ = GM_info, "quizizz.com" == document.domain && function() {
    function e() {
        ! function(e = this.win1) {
            return e ? e.closed ? 0 : 1 : 0
        }(this.win1) ? (this.win1 = open("", "PROFILES", "width=256,height=305"), setTimeout((function() {
            win1.resizeTo(305, "1000"), win1.document.head.innerHTML = "\n<style>\nspan {\ncolor:white\n}\nbody {\n    background-color: rgb(54, 57, 63);\n    }\nimg\n   {\n  border: 2px solid red;\n  border-radius: 8px;\n  border-style: solid;\n  border-width: medium;\n}\n</style>\n", win1.write = function(e) {
                win1.document.body.innerHTML += e
            }
        }), 2e3)) : (win1 = open("", "PROFILES", "width=256,height=305"), win1.document.body.innerHTML = "")
    }

    function t() {
        var e = findhref(document.body, "img").reverse();
        return (e.filter((e => {
            var t = {};
            return e.getAttributeNames().forEach((n => t[n] = e.getAttribute(n))), t.alt && "Question image" == t.alt
        }))[0] || e[0]).src
    }

    function n(e) {
        var t = findhref(e, "div").reverse();
        let n = (t.filter((e => {
            var t = {};
            return e.getAttributeNames().forEach((n => t[n] = e.getAttribute(n))), t.class && "option-image" == t.class
        })) || t)[0];
        return n ? (n = n.style.backgroundImage.split(""), n.splice(5, n.length - 7).join("")) : ""
    }

    function o() {
        if (E = 0, clearTimeout(y), !p && (p = 1, f)) {
            f = 0;
            var e = get(t() + "; " + u),
                o = [...document.getElementsByClassName("option")].map((e => ({
                    iscurrentquestion: e.getAttribute("iscurrentquestioncurrentattemptevaluated"),
                    Attr: e.getAttributeNames().reduce(((t, n) => ({...t, [n]: e.getAttribute(n)
                    })), {}),
                    e: e,
                    index: e.getAttribute("tabindex")
                }))).filter((t => n(t.e) + "; " + t.e.children[0].children[0].children[1].innerText == e));
            if (e && o.length) return console.log("Answer Found"), console.log("Downed"), v--, o[0].e.children[0].children[0].click(), E = 1, p = 0, f = 1;
            console.log("Answer not found:Choosing random"), h[Math.floor(Math.random() * h.length)].click(), p = 0, v--, console.log("Subbed")
        }
    }

    function r(e) {
        console.log("opt", e, {
            this_: this,
            text: this.innerText
        }), x = this.innerText, setTimeout((() => {
            var e = [...document.getElementsByClassName("option")].map((e => ({
                iscurrentquestion: e.getAttribute("iscurrentquestioncurrentattemptevaluated"),
                Attr: e.getAttributeNames().reduce(((t, n) => ({...t, [n]: e.getAttribute(n), target: e
                })), {}),
                e: e,
                index: e.getAttribute("tabindex")
            }))).filter((e => e.Attr.class.includes("correct")));
            1 != e.length ? console.log("Wrong!") : console.log("Correct!");
            var o = e.filter((e => !e.Attr.class.includes("incorrect")))[0],
                r = {
                    qtext: u,
                    atext: o.e.innerText
                };
            console.log(e), r.src = findhref(document.body, "img").map((e => e.src))[0], console.log(r), get(t() + "; " + r.qtext, n(o.e) + "; " + r.atext), console.log("Saved!", {
                t: [t() + "; " + r.qtext, n(o.e) + "; " + r.atext]
            }, v)
        }), 300)
    }
    var i;
    ag = 1, get = function(e, t) {
        return null == t ? localStorage.getItem(e) : localStorage.setItem(e, t)
    };
    var s, l, c, a, u, d, g, m, h = [];
    window.win1 = null, e(), e(), setInterval((function() {
        try {
            document.getElementsByClassName("right-navigator")[0].click(), i = "skipping_"
        } catch (e) {}
    }), 0), setInterval((e => {
        (function() {
            i = "setting guesanswer", win1.scrollBy(0, 100), h = document.getElementsByClassName("option-inner"), a = document.getElementsByClassName("resizeable question-text-color"), h.length && (c = h[Math.floor(Math.random() * h.length)]);
            try {
                u = a[0].innerText, c.innerText
            } catch (e) {}
        })(), i = "trying redeem", (s = document.getElementsByClassName("gradient-container")).length && s[Math.floor(Math.random() * s.length)].click(),
            function() {
                if (l = document.getElementsByClassName("powerup-icon control-center-btn")) {
                    for (let e = 0; e < l.length; e++) l[e].click(), console.log("click on power up");
                    setTimeout((function() {
                        for (let e = 0; e < document.getElementsByClassName("apply-powerup-button").length; e++) document.getElementsByClassName("apply-powerup-button")[e].click(), console.log("activating power up"), i = "using powerup"
                    }), 200)
                }
            }()
    }), 10), setInterval((function() {
        document.getElementsByClassName("container incorrect-container").length > 0 && document.getElementsByClassName("container incorrect-container")[0].children.length > 1 && 1 * document.getElementsByClassName("container incorrect-container")[0].children[1].innerText && (document.getElementsByClassName("primary-action-btn")[0].click(), i = "trying again", e())
    }), 500), setInterval((function() {
        i != m && win1.write("<span>" + i + "</span><br>"), m = i, d = 1 * document.getElementsByClassName("rank")[0].innerText.split("rd")[0].split("th")[0].split("nd")[0], g != d && (d > g && console.log("when up ", d - g), d < g && console.log("when down ", d - g))
    }), 0), findhref = function(e, t) {
        var n = [];
        return function e(o) {
            o.tagName.toLowerCase() == (t || "a") ? (n.push(o), o.children.length && ((o = o.children).forEach = [].forEach, o.forEach((t => {
                e(t)
            })))) : o.children.length && ((o = o.children).forEach = [].forEach, o.forEach((t => {
                e(t)
            })))
        }(e), n
    }, Number(document.getElementsByClassName("score-title"));
    var p, f = 0,
        w = {},
        b = function() {
            function e() {
                w = {}
            }
            console.log("Updated powerUps"), e(), [...document.getElementsByClassName("powerup-belt flex-view flex-row horizontal")[0].children].map((e => ({
                target: e,
                name: e.innerText
            }))).filter((e => e.name)).forEach((t => {
                w[t.name] = {
                    disabled: t.target.children[0].getAttribute("aria-label").includes("disabled"),
                    use: function() {
                        return e(), setTimeout(b, 500), this.disabled ? 0 : (t.target.children[0].click(), 1)
                    }
                }
            }))
        },
        v = 0;
    let y, E = 0;
    let x = "";
    setInterval((() => {
        try {
            let e = t() + "; " + u;
            x != e && (console.clear(), f = 1, p = 0, b(), console.log("Updated choices"), [...h].forEach(((e, t) => {
                var n = e.addEventListener("click", (function() {
                    v++, console.log("Added"), e.removeEventListener(n), r.apply(this, [t, ...arguments])
                }))
            })), console.log("Updated score"), Number(document.getElementsByClassName("score-title")[0].innerText), clearTimeout(y), f && (console.log("Getting answer"), y = setTimeout(o, 3e3))), x = e
        } catch (e) {}
    })), setInterval((() => {
        for (let e in w)
            if (!w[e].disabled) {
                console.log("Power:", e), w[e].use();
                break
            }
    }), 1e3)
}.apply(window), e();