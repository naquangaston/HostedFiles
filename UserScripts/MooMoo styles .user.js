// ==UserScript==
// @name MooMoo styles
// @namespace http://tampermonkey.net/
// @version 3.3
// @description Moomoo/sploop mod [MUSIC PLAYER/HET KEYBINDS/MUSIC VISUALIZER/SKIN SWITCHER/ANTI-KICK]
// @author Gaston
// @match *://moomoo.io/*
// @match *://dev.moomoo.io/*
// @match *://sploop.io/*
// @match *://sandbox.moomoo.io/*
// @match *://tjmoomoo.ml/*
// @icon https://www.google.com/s2/favicons?sz=64&domain=moomoo.io
// @require http://code.jquery.com/jquery-3.3.1.min.js
// @require https://code.jquery.com/ui/1.12.0/jquery-ui.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.0/jquery-confirm.min.js
// @require https://raw.githubusercontent.com/naquangaston/HostedFiles/main/UserScripts/Updater.js
// @grant GM_getValue
// @grant GM_setValue
// @grant GM_addValueChangeListener
// @license MIT
// ==/UserScript==
console.log("00");
let keybinds = GM_getValue("keybinds") || {};
const styleUrl = "https://raw.githubusercontent.com/naquangaston/HostedFiles/main/moostyle.js",
    wordWurl = "https://raw.githubusercontent.com/naquangaston/HostedFiles/main/moomooWords.json",
    useChat = !1;
var badWords = GM_getValue("moowords") || [],
    reg = new RegExp(`(${[...new Set(badWords.join(" ").match(/[\w\d]+/gi))].join("|")})`, "gi");
const filter1 = e => e.replaceAll(reg, (function(e, t, n) {
        return e.length > 1 ? e.split(/[aeiou]+/gi).join("*") : e
    })),
    filter2 = e => e.toLowerCase().split("l").join("w").replaceAll(/l/g, "w").replaceAll(/(l|e)(?!d)/gi, (function(e) {
        return {
            l: "w"
        }[e[0]] || e
    })).replace(/s/g, "z").replace(/th/g, "d").replace(/e^d/g, (function(e, t, n) {
        return n.slice(t - 1, t + 1), "e"
    })).replace(/w{2,}/g, "wl").replaceAll(/e{2,}/gi, "ee").replaceAll(/.r/gi, (e => e.replace("r", "w"))),
    game_ = new class {#e = function() {};#t = function() {};#n = !1;#o = 1e3;#a = function(e) {
            return new Promise((t => setTimeout(t, e)))
        };#i = 0;#l = 0;#s = async function() {
            for (;;) {
                let e = this.#a,
                    t = this.#t,
                    n = this.#e;
                if (await e(0), this.#l) break;
                t() && (await e(this.#o), console.log("Spawning into game"), n(), await e(this.#o))
            }
            this.#l = !1, console.log("Done", this.#l)
        };
        set timeOut(e) {
            this.#o = Number.isNaN(e) ? 1e3 : Number(e)
        }
        get timeOut() {
            return this.#o
        }
        start() {
            this.#s()
        }
        stop() {
            this.#l = !0
        }
        set autoSpawn(e) {
            this.#n = !!e
        }
        get autoSpawn() {
            return this.#n
        }
        set testFunction(e) {
            this.#t = e
        }
        get testFunction() {
            return this.#t
        }
        set spawnFunc(e) {
            this.#e = e
        }
        get spawnFunc() {
            return this.#e
        }
    };
class bool {
    constructor(e) {
        e && this.toggle()
    }#r = !1;
    toggle() {
        this.#r = !this.#r
    }
    get status() {
        return this.#r
    }
    set status(e) {
        this.#r = !!e
    }
}
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
        try {
            (e.element || "string" == typeof e ? document.querySelector(e) : e).append(this.element)
        } catch {
            (e.element || e).append(this.element)
        } finally {
            console.warn("Failed to appent", {
                this: this,
                target: e
            })
        }
        return this
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
const alt = name.includes("alt");

function isHidden(e) {
    return null === e.offsetParent
}

function random(e) {
    return e[Math.floor(Math.random() * e.length)]
}

function dispatchAllMouseEvents(e) {
    ["click", "mouseover", "mouseenter", "mousemove", "mousedown", "mouseup", "mouseout", "mouseleave"].forEach((t => {
        let n = new Event(t, {
            bubbles: !0,
            isTrusted: !0
        });
        e[`on${t}`] && e[`on${t}`](n), e.dispatchEvent(n)
    }))
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
var _setUp = !1;

function add_Style(e) {
    var [t, n, o, a] = ["createElement", "textContent", "head", "appendChild"], i = {get k() {
            return document
        }
    }, l = i.k[t]("style");
    l[n] = e, i.k[o][a](l)
}

function copyElm(e) {
    if (!(e instanceof Element)) throw new Error("Provided argument is not a DOM element.");
    const t = document.createElement(e.tagName);
    for (let n of e.attributes) t.setAttribute(n.name, n.value);
    return t.style.cssText = e.style.cssText, t.className = e.className, t.innerHTML = e.innerHTML, t
}
async function SetUpSploop() {
    try {
        const e = await _SetUpSploop();
        console.log("Sploop Returned:", e)
    } catch (e) {
        console.error("Sploop Error:", e)
    }
}
async function _SetUpSploop() {
    let e = GM_getValue("rbi") || 100;
    const t = {
        update() {
            [...document.getElementsByClassName("menu-item")].map((e => ({
                name: e.className,
                e: e
            }))).filter((e => "menu-item" == e.name)).map((e => (e.button = findhref2(e.e, "button")[0], e.canBuy = "BUY" == findhref2(e.e, "button")[0].innerText, e))).forEach((e => {
                var n = e.e.children[1].children[0].innerText.split(" ").join("");
                e.bn = findhref2(e.e, "button")[0].innerText, e.equiped = "UNEQUIP" == e.bn, e.buy = function() {
                    t[n].e.scrollIntoView(), t.update(), t[n].canBuy && (t[n].button.onmouseup({
                        target: t[n].button,
                        isTrusted: !0
                    }), t.update())
                }, e.equip = function() {
                    t[n].e.scrollIntoView(), t.update(), e.equiped || (t[n].canBuy && t[n].buy(), t[n].button.onmouseup({
                        target: t[n].button,
                        isTrusted: !0
                    }), setTimeout(t.update, 100))
                }, t[n] = e
            }))
        }
    };
    _hats = t;
    const n = new bool(!!GM_getValue("chatFilter")),
        o = new bool(!!GM_getValue("StaySignedIn")),
        a = new bool(!!GM_getValue("AntiKickTOggle")),
        i = new bool(!!GM_getValue("StreamerMode")),
        l = new bool(!!GM_getValue("lolFilter")),
        s = new bool(!!GM_getValue("rainbowFit")),
        r = (new bool(!!GM_getValue("autoConnectOldServer")), ({
            target: e
        }) => {
            n.status && (e.value = filter1(e.value))
        }),
        c = ({
            target: e
        }) => {
            l.status && (e.value = filter2(e.value))
        };
    let d = id("game-left-content-main"),
        u = ["#game-bottom-content", "#game-right-content-main"];
    var p = await v("#pop-login"),
        m = await v("#main-login-button"),
        g = p.querySelector("#login");
    if (g.addEventListener("click", (() => {
            GM_setValue("PI", {
                p: id("enter-password").value,
                e: id("enter-mail").value
            })
        })), v("#chat").then((e => {
            const t = document.getElementById("chat");
            var n = copyElm(t);
            n.id = "chat2", t.parentNode.append(document.createElement("br")), t.parentNode.append(n), t.onfocus = function(e) {
                useChat && (n.focus(), t.parentElement.style.display = "block", n.focus())
            };
            let o = window.onkeyup,
                a = window.onkeydown;

            function i(e) {
                return /^[a-zA-Z0-9]$/.test(e)
            }
            window.onkeyup = function(e) {
                t !== document.activeElement && n !== document.activeElement && o && o(e)
            }, window.onkeydown = function(e) {
                t !== document.activeElement && n !== document.activeElement && "input" != e.target.tagName && a && a(e)
            }, n.addEventListener("keypress", (({
                target: e,
                key: o
            }) => {
                i(o) && (t.value = e.value, [r].forEach((t => t({
                        target: e
                    })))),
                    function(e) {
                        if ("Enter" === e.key) {
                            console.log("Enter key pressed in chat"), t.focus(), t.value = n.value;
                            const o = new KeyboardEvent(e.type, e);
                            t.dispatchEvent(o)
                        }
                    }(event)
            })), (useChat ? n : t).addEventListener("keyup", (e => {
                const {
                    target: n,
                    key: o,
                    code: a
                } = e;
                console.log(e);
                t.value = n.value, i(o) && [r, c].forEach((e => e({
                    target: t
                })))
            })), (useChat ? n : t).addEventListener("keydown", (({
                target: e,
                key: n
            }) => {
                i(n) && (t.value = e.value, [r].forEach((e => e({
                    target: t
                }))))
            }))
        })).then(console.log, console.warn), alt) {
        var h;
        "number" == typeof GM_getValue("alts") && GM_setValue("alts", {});
        for (let e = 1;; e++)
            if (!GM_getValue("alts")[e]) {
                h = e;
                let t = GM_getValue("alts");
                t[e] = !0, GM_setValue("alts", t);
                break
            }
        console.log("alt:", h), addEventListener("unload", (function() {
            if (alt) {
                let e = GM_getValue("alts");
                e[h] = !1, GM_setValue("alts", e)
            }
        }))
    }
    console.log("Set called", SetUpSploop.callee);
    var b = null;

    function f(e = 0, t = 0, n = 0) {
        w(0);
        try {
            !Number.isNaN(e) && findhref2(id("skins-middle-main"), "img").filter((t => t.src.includes(`skin${e}`)))[0].click()
        } catch (t) {
            console.warn("Failed to Skin", e)
        }
        w(1);
        try {
            !Number.isNaN(t) && findhref2(id("skins-middle-main"), "img").filter((e => e.src.includes(`accessory${t}`)))[0].click()
        } catch (t) {
            console.warn("Failed to accessory$", e)
        }
        w(2), !Number.isNaN(n) && findhref2(id("skins-middle-main"), "img").filter((e => e.src.includes(`back${n}`)))[0].click(), w(0)
    }

    function w(e) {
        findhref2(id("skins-categories"), "img")[e].click()
    }
    if (_loadFit = f, _GM_setValue = GM_setValue, _GM_getValue = GM_getValue, new Promise(((e, t) => t = setInterval((() => findhref2(id("skins-middle-main"), "img").length && (clearInterval(t), e())), 100))).then((async e => {
            await k(1e3), alt || f(GM_getValue("skin"), GM_getValue("accessory$"), GM_getValue("BACK"))
        })), id("game-left-content-main").style.overflow = "scroll", id("da-right").parentNode.style.overflow = "scroll", _setUp) return;
    add_Style("\n#log{\n    background-color: rgba(0,0,0,0);\n    color: lightgreen;\n}\n.empty{\n    content: attr(value);\n}\nselect,select:focus{\n    background-color: rgba(0,0,0,0);\n    outline: none;\n    border: none;\n    color: rgb(255, 136, 0);\n}\nbutton{\n    background-color: rgba(0,0,0,0);\n    outline: none;\n    border: 2px solid rgb(208, 255, 0);\n    color: rgb(94, 255, 0);\n}\nbutton:hover,input:focus{\n    background-color: rgba(0,0,0,0);\n    outline: none;\n    border: 2px solid rgb(255, 0, 0);\n    color: rgb(0, 132, 255);\n}\n#skin-message{\n\tborder: 2px solid red;\n    background-color: rgba(0,0,0,0);\n}\n.green{border: 2px solid green;}\n.red{border: 2px solid blue;}\n::-webkit-scrollbar{\n    display:none;\n}\nspan.first{\n    border-top: 1px solid white;\n    border-bottom: 1px solid white;\n    border-left: 1px solid white;\n}\nspan.middle{\n    border-top: 1px solid white;\n    border-bottom: 1px solid white;\n}\nspan.last{\n    border-top: 1px solid white;\n    border-bottom: 1px solid white;\n    border-right: 1px solid white;\n}\ndel{\n    text-decoration: line-through;\n    color: red;\n    border-radius: 3px;\n    border: 1px solid coral;\n    background-color: rgba(111,8,8,1);\n}\nins{\n    background-color: rgba(7,92,7,1);\n    color: rgba(56,233,56,1);\n    border-radius: 3px;\n    border: 1px solid lightgreen;\n}\ntextarea{\n    text-overflow: clip;\n\n}"), GM_getValue("sm") && i.toggle(), await v("#clan-menu"), await v("#pop-login");
    let y = id("clan-menu");
    game_.autoSpawn = !0, game_.timeOut = 5e3, game_.testFunction = function() {
        return !isHidden(play)
    }, game_.spawnFunc = function() {
        if (alt) {
            dispatchAllInputEvents(nickname, `${GM_getValue("nn")}'s alt${h}`), randomFit.element.click();
            const {
                skin: e,
                back: t,
                accessory: n
            } = localStorage;
            b = {
                skin: e,
                back: t,
                accessory: n
            }, console.log("Got fit", b)
        } else if (b) {
            const {
                skin: e,
                back: t,
                accessory: n
            } = b;
            f(e, n, t)
        }
        play.click(), setTimeout(x, 200)
    };
    var k = e => new Promise((t => setTimeout(t, e)));
    async function v(e, t = 3e3) {
        return await new Promise(((n, o) => {
            let a = performance.now();
            ! function i() {
                document.querySelector(e) ? n(document.querySelector(e)) : performance.now() - a >= t ? o(new Error("Timeout waiting for selector")) : requestAnimationFrame(i)
            }()
        }))
    }
    var _ = !1;
    async function x() {
        dispatchAllInputEvents(nickname, GM_getValue("nn")), w(0), !_ && await k(2e3), !Number.isNaN(GM_getValue("skin")) && findhref2(id("skins-middle-main"), "img").filter((e => e.src.includes(`skin${GM_getValue("skin")}`)))[0].click(), w(1), !_ && await k(100), !Number.isNaN(GM_getValue("accessory")) && findhref2(id("skins-middle-main"), "img").filter((e => e.src.includes(`accessory${GM_getValue("accessory")}`)))[0].click(), !_ && await k(100), w(2), !_ && await k(100), !Number.isNaN(GM_getValue("back")) && findhref2(id("skins-middle-main"), "img").filter((e => e.src.includes(`back${GM_getValue("back")}`)))[0].click(), !_ && await k(100), _ && w(0), _ = 1
    }
    _game_ = game_, _setUp = !0;
    var M = new element(_copyElm(g)).set("id", "login2").set("innerText", `Stay Signed In:${o.status}`).on("click", (e => {
        o.toggle(), e.target.innerText = `Stay Signed In:${o.status}`, GM_setValue("StaySignedIn", o.status)
    })).style({
        display: "inline-block"
    }).element;
    p.children[1].insertBefore(M, g),
        function() {
            var [e, t, n, o, a, i] = ["map", "forEach", "log", "length", "children", "remove"], l = {get sn() {
                    return console
                }
            };
            u[e]($)[t]((e => {
                l.sn[n]({
                    s: e
                }), e[o] && [...e[0][a]][t]((e => e[i]()))
            }))
        }();
    var T = id("da-right");
    new element("div").style({
        padding: "10px",
        backgroundColor: "rgba(0, 0, 0, 0)",
        color: "#000",
        border: "1px solid #ddd",
        marginBottom: "10px"
    }).append(new element("h2").set("innerText", "MooMoo/Sploop styles")).append(new element("p").set("innerText", "This script can:")).append(new element("ul").append(new element("li").set("innerText", "Change the game's look")).append(new element("li").set("innerText", "Add a built-in YouTube embed video player")).append(new element("li").set("innerText", "Include a random fit generator button")).append(new element("li").set("innerText", "Implement anti-kick functionality from being AFK")).append(new element("li").set("innerText", "Create alts")).append(new element("li").set("innerText", "Automatically join the game and turn on antikick for alts")).append(new element("li").set("innerText", "Hat keybinds that are saved locally!"))).appendTo(T);
    const E = new element("div").style({
        padding: "10px",
        backgroundColor: "#f8d7da",
        color: "#721c24",
        border: "1px solid #f5c6cb",
        borderRadius: "5px",
        cursor: "pointer"
    }).set("innerText", "Using this script may have consequences, including but not limited to account banning. Use at your own risk. Click to hide.").on("click", (function() {
        this.remove(), localStorage.seen = 1
    })).appendTo("#game-bottom-content");
    var G;
    async function V() {
        await v("#player-container");
        var e = id("player-container");
        e.style.display = "none", i.status ? (!G && (G = (await v("#nickname-value")).innerText), (await v("#nickname-value")).innerText = "streamerMode", (await v("#change-username")).style.display = "none") : G && ((await v("#nickname-value")).innerText = G, (await v("#change-username")).style.display = "block"), e.style.display = "flex"
    }
    1 == localStorage.seen && E.element.remove(), id("lostworld-io_300x250_2").remove(), new element("br").appendTo(d), async function() {
        for (;;) await k(0), await V()
    }();
    const S = new element("div", {
        id: "keybinds"
    }).style({
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }).appendTo(d);
    var F = new element("button").set("innerText", `AntiKick:${a.status}`).on("click", (function(e) {
        a.toggle(), e.target.innerText = `AntiKick:${a.status}`, a.status ? game_.start() : game_.stop()
    })).appendTo(S);
    new element("button").set("innerText", `chatFilter:${n.status}`).on("click", (function(e) {
        n.toggle(), e.target.innerText = `chatFilter:${n.status}`
    })).appendTo(S), new element("button").set("innerText", `lolFilter:${l.status}`).on("click", (function(e) {
        l.toggle(), e.target.innerText = `lolFilter:${l.status}`
    })).appendTo(S), new element("button").set("innerText", `StreamerMode:${i.status}`).on("click", (function(e) {
        i.toggle(), e.target.innerText = `StreamerMode:${i.status}`, GM_setValue("sm", i.status), V()
    })).appendTo(S), new element("button").set("innerText", "SpawnAlt").on("click", (function(e) {
        GM_setValue("skin", localStorage.skin || 0), GM_setValue("accessory", localStorage.accessory || 0), GM_setValue("back", localStorage.back || 0), GM_setValue("server", id("server-select").selectedOptions[0].getAttribute("region")), GM_setValue("gm", [id("ffa-mode"), id("sandbox-mode"), id("event-mode")].map((e => [...e.classList].includes("dark-blue-button-3-active"))).indexOf(!0));
        var t = id("create_clan");
        id("leave_clan"), id("clan-menu-clan-name-input");
        if (!("none" == t.style.display)) {
            var n = id("create-clan-button"),
                o = id("clan-menu-clan-name-input");
            o.dispatchEvent(new Event("focus", {
                bubbles: !0
            })), o.dispatchEvent(new Event("input", {
                bubbles: !0
            })), o.dispatchEvent(new Event("change", {
                bubbles: !0
            })), o.value = "Alts", o.dispatchEvent(new Event("blur", {
                bubbles: !0
            })), n.click(), n.dispatchEvent(new Event("click")), new Promise((e => {
                var t = setInterval((() => {
                    "Clans" != y.children[0].innerText && (clearInterval(t), e())
                }), 200)
            })).then((e => {
                _GM_setValue("clan", y.children[0].innerText)
            }))
        }
        open(location.href, "alt" + Date.now())
    })).appendTo(S), new element(findhref2(id("skin-message"))[0]);
    randomFit = new element("button").appendTo(S).on("click", (function(e) {
        var [t, n] = ["forEach", "click"];
        findhref2(id("skins-categories"), "img")[t](((e, t) => {
            e[n](), random(findhref2(id("skins-middle-main"), "img"))[n]()
        }))
    })).set("innerText", "Generate Random Fit"), new element("span").set("innerText", "Rainbow Fit Speed:").appendTo(S);
    new element("input", {
        id: "rainbowInt",
        value: e || 1e3,
        size: 3
    }).on("change", (function({
        target: t
    }) {
        let {
            value: n
        } = t;
        e = n
    })).appendTo(S);
    if (new element("br").appendTo(S), new element("br").appendTo(S), function() {
            var [e, t, n, o, a, i] = ["children", "insertAdjacentElement", "style", "on", "set", "element"];
            id("skin-message")[e][1][t]("afterend", new element("button", {
                class: "button-type-1 blue-discord-button text-shadowed-3"
            })[n]({
                height: "15%",
                position: "absolute",
                top: "15%"
            })[o]("click", (function(e) {
                var [t, n] = ["forEach", "click"];
                findhref2(id("skins-categories"), "img")[t](((e, t) => {
                    e[n](), random(findhref2(id("skins-middle-main"), "img"))[n]()
                }))
            }))[a]("innerText", "Generate Random Fit")[i])
        }(), function() {
            var [e, t, n, o, a, i] = ["children", "insertAdjacentElement", "style", "on", "set", "element"];
            let l = new element("button", {
                class: "button-type-1 blue-discord-button text-shadowed-3",
                id: "reset-button"
            })[n]({
                height: "15%",
                left: "8%",
                position: "absolute"
            })[o]("click", (function(e) {
                x()
            }))[a]("innerText", "Reset Fit");
            __a = l, id("skin-message")[e][1][t]("afterend", l[i])
        }(), function() {
            var [e, t, n, o, a, i] = ["children", "insertAdjacentElement", "style", "on", "set", "element"];
            id("skin-message")[e][1][t]("afterend", new element("button", {
                class: "button-type-1 blue-discord-button text-shadowed-3"
            })[n]({
                height: "15%",
                left: "50%",
                position: "absolute"
            })[o]("click", (function(e) {
                const {
                    skin: t,
                    back: n,
                    accessory: o
                } = localStorage;
                b = {
                    skin: t,
                    back: n,
                    accessory: o
                }, GM_setValue("skin", localStorage.skin || 0), GM_setValue("accessory", localStorage.accessory || 0), GM_setValue("back", localStorage.back || 0)
            }))[a]("innerText", "Save Fit")[i])
        }(), function() {
            var [t, n, o, a, i, l, r, c, d] = ["element", "style", "set", "status", "appendTo", "on", "toggle", "innerText", "click"];
            new element(copyElm(__a[t]))[n]({
                left: "19%",
                top: "60%"
            })[o]("innerText", `rainbowFit:${s[a]}`)[i]("#skin-message")[l]("click", (async function({
                target: n
            }) {
                for (s[r](), n[c] = `rainbowFit:${s[a]}`; s[a];) await k(e), randomFit[t][d]()
            }))
        }(), addEventListener("unload", (function() {
            GM_setValue("keybinds", keybinds), GM_setValue("rbi", e), GM_getValue("skin") && (localStorage.skin = GM_getValue("skin")), GM_getValue("accessory") && (localStorage.accessory = GM_getValue("accessory")), GM_getValue("back") && (localStorage.accessory = GM_getValue("accessory"))
        })), alt) {
        let e = GM_getValue("server");
        var I = id("server-select");
        new Promise((e => {
            var t = setInterval((() => {
                "none" == id("small-waiting").style.display && (clearInterval(t), e())
            }), 200)
        })).then((t => {
            [id("ffa-mode"), id("sandbox-mode"), id("event-mode")][GM_getValue("gm")].click(), new Promise((e => {
                var t = setInterval((() => {
                    "none" == id("small-waiting").style.display && (clearInterval(t), e())
                }), 200)
            })).then((t => {
                let n = I.selectedIndex = [...id("server-select").options].map((e => e.getAttribute("region"))).indexOf(e);
                I.dispatchEvent(new Event("click")), I.selectedIndex = n, I.dispatchEvent(new Event("change")), F.element.dispatchEvent(new Event("click")), new Promise((e => {
                    var t = setInterval((() => {
                        "flex" != document.querySelector(sploopMenu).style.display && (clearInterval(t), e(id("clan-menu")))
                    }), 200)
                })).then((e => {
                    e.style.display = "block";
                    let t = GM_getValue("clan"),
                        n = [...id("clan_menu_content").children].filter((e => e.getElementsByTagName("p")[0].innerText == _GM_getValue("clan"))),
                        o = (_GM_getValue("clan_") && _GM_getValue("clan_").name, [...id("clan_menu_content").children].filter((e => e.getElementsByTagName("p")[0].innerText == _GM_getValue("clan_").name)));
                    if (n.length) {
                        n[0].children[1].children[0].onmouseup({
                            bubbles: !0,
                            isTrusted: !0
                        })
                    } else if (o.length) {
                        o[0].children[1].children[0].onmouseup({
                            bubbles: !0,
                            isTrusted: !0
                        })
                    } else console.warn("Cant find clan", t, "Or", _GM_getValue("clan_") ? _GM_getValue("clan_").name : null);
                    let a = e => new Promise((t => setTimeout(t, e)));
                    async function i() {
                        for (dispatchAllMouseEvents(id("leave-clan-button"));
                            "block" != id("create_clan").style.display;) await a(100);
                        return !0
                    }
                    GM_addValueChangeListener("clan_", (function(e, t, n) {
                        console.log({
                            c: n,
                            SelfClan: "block" != id("create_clan").style.display
                        }), n.inCLan && ("block" != id("create_clan").style.display ? (console.log("Leaving Existing clan"), i().then((async e => {
                            for (;
                                "block" == id("create_clan").style.display;) {
                                let e = [...id("clan_menu_content").children].filter((e => e.getElementsByTagName("p")[0].innerText == n.name));
                                e[0].children[1].children[0].onmouseup({
                                    bubbles: !0,
                                    isTrusted: !0
                                }), await n(100)
                            }
                        }))) : (console.log("Joining newCLan"), (async e => {
                            for (;
                                "block" == id("create_clan").style.display;) {
                                let e = [...id("clan_menu_content").children].filter((e => e.getElementsByTagName("p")[0].innerText == n.name));
                                e[0].children[1].children[0].onmouseup({
                                    bubbles: !0,
                                    isTrusted: !0
                                }), await n(100)
                            }
                        })()))
                    }))
                }))
            }))
        })), id("play").addEventListener("click", (function(e) {
            const {
                nickname: t,
                skin: n,
                back: o,
                accessory: a
            } = localStorage;
            !f && (b = {
                skin: n,
                back: o,
                accessory: a
            }, console.log("Saved LocalFit"))
        })), document.title = "Sploop.io - Fast Alt"
    } else {
        id("play").addEventListener("click", (function(e) {
            const {
                nickname: t,
                skin: n,
                back: o,
                accessory: a
            } = localStorage;
            GM_setValue("skin", localStorage.skin || 0), GM_setValue("accessory", localStorage.accessory || 0), GM_setValue("back", localStorage.back || 0), GM_setValue("nn", localStorage.nickname), GM_setValue("gm", [id("ffa-mode"), id("sandbox-mode"), id("event-mode")].map((e => [...e.classList].includes("dark-blue-button-3-active"))).indexOf(!0))
        }));
        var A = "";
        _loop = setInterval((() => {
            y.children[0].innerText != A && (A = y.children[0].innerText, GM_setValue("clan_", {
                inCLan: "block" != id("create_clan").style.display,
                name: y.children[0].innerText
            }))
        })), document.title = "Sploop.io - Fast Main";
        await async function() {
            for (; !Object.keys(t).splice(1).length;) t.update(), await k(0);
            if (console.log("Hidden:", isHidden(m)), !isHidden(m) && o.status)
                if (console.log("Logging in :>"), m.click(), await k(100), GM_getValue("PI")) {
                    let e = GM_getValue("PI");
                    for (dispatchAllInputEvents(id("enter-mail"), e.e), dispatchAllInputEvents(id("enter-password"), e.p), await k(1e3), g.click(); !isHidden(m);) await k(1e3)
                } else alert("You have to login at least once :<");
            console.log("hats loaded"), id("nav-skins").click(), await k(100), id("nav-game").click(), id("reset-button").click();
            const e = Object.keys(t).splice(1);
            return e.forEach((e => {
                const t = new element("span").set("innerText", `Hat ${e} Key: `),
                    n = new element("input", {
                        size: 8,
                        id: `${e}_key`
                    }).set("type", "text").set("value", "").on("keydown", (function(t) {
                        t.preventDefault(), this.value = t.code, keybinds[e] = t.code
                    })).style({
                        "background-color": "rgba(0,0,0,0)",
                        color: "white"
                    }).set("value", keybinds[e] || "Add key..."),
                    o = new element("button", {
                        id: `Remove_${e}_key`
                    }).set("innerText", "Remove X Binding").on("click", (function(t) {
                        delete keybinds[e], n.set("value", "Add key...")
                    }));
                S.append(t, n, o), n.on("blur", (function() {
                    const t = this.value.toLowerCase();
                    t && console.log(`Keybind set for ${e}: ${t}`)
                }))
            })), document.addEventListener("keydown", (function(n) {
                const o = n.code;
                e.forEach((e => {
                    keybinds[e] && keybinds[e] === o && (console.log(`Equipping ${e} with key: ${o}`), t[e].equip())
                }))
            })), "Loaded Hats keys"
        }().then(console.log, console.warn)
    }
    id("game-bottom-content") && (id("game-bottom-content").style.maxWidth = "100%", id("game-bottom-content").style.maxHeight = "100%", id("game-bottom-content").innerHTML = '<iframe height="100%" style="width: 100%;border-top-left-radius: 15px;overflow: hidden;border-top-right-radius: 15px;" scrolling="no" title="Audio Visualizer" src="https://naquangaston.github.io/HostedFiles/vis/" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">\nSee the Pen <a href="https://codepen.io/_Gaston-/pen/YzRRxXB">\nAudio Visualizer</a> by Gaston (<a href="https://codepen.io/_Gaston-">@_Gaston-</a>)\non <a href="https://codepen.io">CodePen</a>.\n</iframe>', id("game-bottom-content").style.width = "80%")
}
findhref2 = function(e, t) {
    var n = [];
    return function e(o) {
        o.tagName.toLowerCase() == (t || "a") ? (n.push(o), o.children.length && ((o = o.children).forEach = [].forEach, o.forEach((t => {
            e(t)
        })))) : o.children.length && ((o = o.children).forEach = [].forEach, o.forEach((t => {
            e(t)
        })))
    }(e), n
}, _copyElm = copyElm;
const localStorage_ = {
    getItem: e => GM_getValue(e),
    setItem(e, t) {
        return GM_setValue(e, t), GM_setValue("LC", this), this.getItem(e)
    }
};
window.once = window.on;
let moomooMenu = "#mainMenu",
    sploopMenu = "#homepage";
document.addEventListener("keydown", (function(e) {
    "`" === e.key && ($(moomooMenu) && $(moomooMenu).toggle && ($(moomooMenu).toggle(), console.log("Toggled MooMoo")), $(sploopMenu) && $(sploopMenu).toggle && (document.querySelector(sploopMenu).style.display = "none" == document.querySelector(sploopMenu).style.display ? "flex" : "none", console.log("Toggled Sploop")))
})), $("#consentBlock").css({
    display: "none"
}), $("#mapDisplay").css({
    background: "url('https://i.imgur.com/fgFsQJp.png')"
});
var [info2, myPlayer] = [window.info2 || {}, window.myPlayer || []];

function pingcheck() {
    if (!location.href.includes("sploop")) {
        var e = document.createElement("h1");
        e.id = "Ping2", topInfoHolder.append(e), setInterval((() => {
            e.innerText = pingDisplay.innerText + `DPS:${window.dps} Dir:${myPlayer.dir}`, 1 * pingDisplay.innerText.split(" ")[1].split(" m")[0] > window.pchek && chat(`Ping:${pingDisplay.innerText.split(" ")[1].split(" m")[0]}`)
        }), 500), window.ping = 100, setInterval((() => {
            ping = 1 * pingDisplay.innerText.split(" ")[1].split(" m")[0], ping > window.pchek && chat(`Ping:${pingDisplay.innerText.split(" ")[1].split(" m")[0]}`)
        }), 500), ab = 1, i2 = 80, setInterval((() => {
            ping > pckech && chat(`ping:${ping}`)
        }), 500), window.pckech = 150
    }
}
window.selects = window.selects || [];
var code_ = GM_getValue("styles.js"),
    excuted = !1;
GM_getValue("styles.js") && (eval(code_), excuted = !0), console.log("Checking for styles updates"), fetch(styleUrl).then((e => e.text())).then((e => (GM_setValue("styles.js", e), e != code_ && console.log("Styles.js as updated"), !excuted && eval(e)))), fetch(wordWurl).then((e => e.json())).then((e => (GM_setValue("moowords", e), e.join() != badWords.join() && console.log("Filtered List updated"), e))).then((e => (badWords = e, reg = new RegExp(`(${[...new Set(badWords.join(" ").match(/[\w\d]+/gi))].join("|")})`, "gi"))));