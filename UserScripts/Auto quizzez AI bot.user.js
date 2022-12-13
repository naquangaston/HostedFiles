// ==UserScript==
// @name Auto quizzez AI bot
// @namespace http://tampermonkey.net/
// @version 1.62
// @description this bot saves all right question and rembers the Q&A for later Q&A's are now stored;so it does not have to learn the same quiz again
// @author You
// @match *://quizizz.com/*
// @grant GM_info
// @grant GM_getValue
// @grant GM_setValue
// @license MIT
// ==/UserScript==
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
        a = "setting guesanswer", win1.scrollBy(0, 100), p = document.getElementsByClassName("option-inner"), m = document.getElementsByClassName("resizeable question-text-color"), p.length && (g = p[Math.floor(Math.random() * p.length)]);
        try {
            h = m[0].innerText, g.innerText
        } catch (e) {}
    }

    function t() {
        if (d = document.getElementsByClassName("powerup-icon control-center-btn")) {
            for (let e = 0; e < d.length; e++) d[e].click(), console.log("click on power up");
            setTimeout((function() {
                for (let e = 0; e < document.getElementsByClassName("apply-powerup-button").length; e++) document.getElementsByClassName("apply-powerup-button")[e].click(), console.log("activating power up"), a = "using powerup"
            }), 200)
        }
    }

    function n() {
        a = "trying redeem", (u = document.getElementsByClassName("gradient-container")).length && u[Math.floor(Math.random() * u.length)].click()
    }

    function o() {
        ! function(e = this.win1) {
            return e ? e.closed ? 0 : 1 : 0
        }(this.win1) ? (this.win1 = open("", "PROFILES", "width=256,height=305"), setTimeout((function() {
            win1.resizeTo(305, "1000"), win1.document.head.innerHTML = "\n<style>\nspan {\ncolor:white\n}\nbody {\n    background-color: rgb(54, 57, 63);\n    }\nimg\n   {\n  border: 2px solid red;\n  border-radius: 8px;\n  border-style: solid;\n  border-width: medium;\n}\n</style>\n", win1.write = function(e) {
                win1.document.body.innerHTML += e
            }
        }), 2e3)) : (win1 = open("", "PROFILES", "width=256,height=305"), win1.document.body.innerHTML = "")
    }

    function r() {}

    function i() {
        var e = findhref(document.body, "img").reverse();
        return (e.filter((e => {
            var t = {};
            return e.getAttributeNames().forEach((n => t[n] = e.getAttribute(n))), t.alt && "Question image" == t.alt
        }))[0] || e[0]).src
    }

    function s(e) {
        var t = findhref(e, "div").reverse();
        let n = (t.filter((e => {
            var t = {};
            return e.getAttributeNames().forEach((n => t[n] = e.getAttribute(n))), t.class && "option-image" == t.class
        })) || t)[0];
        return n ? (n = n.style.backgroundImage.split(""), n.splice(5, n.length - 7).join("")) : ""
    }

    function l() {
        if (C = 0, clearTimeout(T), !v && (v = 1, y)) {
            y = 0;
            var e = get(i() + "; " + h),
                t = [...document.getElementsByClassName("option")].map((e => ({
                    iscurrentquestion: e.getAttribute("iscurrentquestioncurrentattemptevaluated"),
                    Attr: e.getAttributeNames().reduce(((t, n) => ({
                        ...t,
                        [n]: e.getAttribute(n)
                    })), {}),
                    e: e,
                    index: e.getAttribute("tabindex")
                }))).filter((t => s(t.e) + "; " + t.e.children[0].children[0].children[1].innerText == e));
            if (e && t.length) return console.log("Answer Found"), console.log("Downed"), N--, t[0].e.children[0].children[0].click(), C = 1, v = 0, y = 1;
            console.log("Answer not found:Choosing random"), p[Math.floor(Math.random() * p.length)].click(), v = 0, N--, console.log("Subbed")
        }
    }

    function c(e) {
        console.log("opt", e, {
            this_: this,
            text: this.innerText
        }), k = this.innerText, h, setTimeout((() => {
            var e = [...document.getElementsByClassName("option")].map((e => ({
                iscurrentquestion: e.getAttribute("iscurrentquestioncurrentattemptevaluated"),
                Attr: e.getAttributeNames().reduce(((t, n) => ({
                    ...t,
                    [n]: e.getAttribute(n),
                    target: e
                })), {}),
                e: e,
                index: e.getAttribute("tabindex")
            }))).filter((e => e.Attr.class.includes("correct")));
            1 != e.length ? console.log("Wrong!") : console.log("Correct!");
            var t = e.filter((e => !e.Attr.class.includes("incorrect")))[0],
                n = {
                    qtext: h,
                    atext: t.e.innerText
                };
            console.log(e), n.src = findhref(document.body, "img").map((e => e.src))[0], console.log(n), get(i() + "; " + n.qtext, s(t.e) + "; " + n.atext), console.log("Saved!", {
                t: [i() + "; " + n.qtext, s(t.e) + "; " + n.atext]
            }, N)
        }), 300)
    }
    var a;
    ag = 1, get = function(e, t) {
        return null == t ? localStorage.getItem(e) : localStorage.setItem(e, t)
    };
    var u, d, g, m, h, p = [];
    window.win1 = null, o(), o(), setInterval((function() {
        try {
            document.getElementsByClassName("right-navigator")[0].click(), a = "skipping_"
        } catch (e) {
            r()
        }
    }), 0);
    var f, w, b;
    setInterval((o => {
        e(), n(), t(), h
    }), 10), setInterval((function() {
        document.getElementsByClassName("container incorrect-container").length > 0 && document.getElementsByClassName("container incorrect-container")[0].children.length > 1 && 1 * document.getElementsByClassName("container incorrect-container")[0].children[1].innerText && (document.getElementsByClassName("primary-action-btn")[0].click(), a = "trying again", o())
    }), 500), setInterval((function() {
        a != b && win1.write("<span>" + a + "</span><br>"), b = a, f = 1 * document.getElementsByClassName("rank")[0].innerText.split("rd")[0].split("th")[0].split("nd")[0], w != f && (f > w && console.log("when up ", f - w), f < w && console.log("when down ", f - w))
    }), 0), findhref = function(e, t) {
        var n = [];
        return function e(o) {
            o.tagName.toLowerCase() == (t || "a") ? (n.push(o), o.children.length && ((o = o.children).forEach = [].forEach, o.forEach((t => {
                e(t)
            })))) : o.children.length && ((o = o.children).forEach = [].forEach, o.forEach((t => {
                e(t)
            })))
        }(e), n
    };
    Number(document.getElementsByClassName("score-title"));
    var v, y = 0,
        E = {},
        x = function() {
            function e() {
                E = {}
            }
            console.log("Updated powerUps"), e(), [...document.getElementsByClassName("powerup-belt flex-view flex-row horizontal")[0].children].map((e => ({
                target: e,
                name: e.innerText
            }))).filter((e => e.name)).forEach((t => {
                E[t.name] = {
                    disabled: t.target.children[0].getAttribute("aria-label").includes("disabled"),
                    use: function() {
                        return e(), setTimeout(x, 500), this.disabled ? 0 : (t.target.children[0].click(), 1)
                    }
                }
            }))
        },
        N = 0;
    let T, C = 0;
    var A = function() {
        x(), console.log("Updated choices"), [...p].forEach(((e, t) => {
            var n = e.addEventListener("click", (function() {
                N++, console.log("Added"), e.removeEventListener(n), c.apply(this, [t, ...arguments])
            }))
        })), console.log("Updated score"), Number(document.getElementsByClassName("score-title").legnth?document.getElementsByClassName("score-title")[0].innerText:"0"), clearTimeout(T), y && (console.log("Getting answer"), T = setTimeout(l, 3e3))
    };
    let k = "";
    setInterval((() => {
        try {
            let e = i() + "; " + h;
            k != e && (console.clear(),console.log({k,e}), y = 1, v = 0, A());k = e
        } catch (e) {console.log(e)}
    }));
    setInterval((() => {
        for (let e in E)
            if (!E[e].disabled) {
                console.log("Power:", e), E[e].use();
                break
            }
    }), 1e3)
}.apply(window), e();