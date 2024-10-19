// ==UserScript==
// @name !!!! bot tracking script
// @version alpha
// @author (imaaaaa + snowei) <- my slaves edit by gaston1799
// @description ~
// @match *://moomoo.io/*
// @match *://*.moomoo.io/*
// @icon https://tse2.mm.bing.net/th?id=OIP.upg0Jgu2ui2oVubfocCBNgHaEK&pid=Api&P=0&h=220
// @grant GM_getValue
// @grant GM_setValue
// @grant none
// @require https://raw.githubusercontent.com/naquangaston/HostedFiles/main/UserScripts/Updater.js
// @license MIT
// ==/UserScript==
! function() {
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
    let used = {},
        msg = "HI\nttv/wolfgplayez_\n@WolfGamez_ on YT\nyour gay\ni can do pit insta\nthis mod private\noof why u bully me\nIM immortal\nU cant kill me\nCauese im immortallity\nI beat u\nI know ur noob\nim legend\nLegend neverdie\nGaston1799_\nyour mom gay\nhello im new here :3\nhello sheeper\nmod?\nWhat mod ya got?\nmy mdo is better tho >:)\ncmon man\nstfu noob\nimagine dying\nbruh\ndude cmon\nyo!\ncant die\nEz\nez\nEZEZ\nhaha\nSo good byenoob\ni can insta u\nil do a q insta\nGaston1799".split("\n");

    function random(e) {
        return e[Math.floor(Math.random() * e.length)]
    }

    function gmsg() {
        let e = msg[Math.floor(Math.random() * msg.length)];
        return used[e] ? gmsg() : (used[e] = 1, setTimeout((() => {
            used[e] = 0
        }), 5e3), e)
    }

    function toRad(e) {
        return .01745329251 * e
    }
    autoChat = !1, setInterval((() => {
            autoChat && "undefined" != typeof chat && chat(gmsg())
        }), 2300), GM_getValue = function(k) {
            try {
                return eval(localStorage[k])
            } catch {
                return JSON.parse(localStorage[k])
            }
        }, GM_setValue = function(e, t) {
            return localStorage[e] = JSON.stringify(t)
        }, _tr = toRad, _my = {}, _set = function(e) {
            _my = e
        },
        function() {
            "use strict"
        }();
    let plc = {
            food: !1,
            spike: !1,
            trap: !1,
            turret: !1
        },
        mill = {
            x: void 0,
            y: void 0,
            size: function(e) {
                return 2 * e
            },
            active: !!config.isSandbox
        },
        near = {
            enemys: [],
            enemy: [],
            nears: [],
            aim: void 0,
            dist: void 0
        },
        autos = {
            insta: {
                todo: !1,
                wait: !1,
                count: 4
            },
            bull: !1,
            antibull: 0,
            reloaded: !1,
            stopspin: !0
        },
        traps = {
            near: [],
            aim: void 0,
            intrap: !1
        },
        spikes = {
            near: [],
            aim: void 0,
            nearSpike: !1,
            nearBreak: !1
        },
        trapData = {
            sid: void 0,
            hitCount: 0
        };

    function handleImageError(e) {
        const t = e.target;
        t.onerror.toString().includes("for(;;){}") && t.parentNode.removeChild(t)
    }
    window.alert = null, document.querySelectorAll("img").forEach((e => e.onerror = handleImageError));
    const observer = new MutationObserver((e => {
        e.forEach((e => e.addedNodes.forEach((e => {
            "img" === e.nodeName.toLowerCase() && (e.onerror = handleImageError)
        }))))
    }));
    observer.observe(document.body, {
        childList: !0,
        subtree: !0
    }), document.getElementById("loadingText").style.color = "#49ceee", document.getElementById("gameName").style.color = "#a8efff", document.getElementById("leaderboard").append("tmt"), document.getElementById("leaderboard").style.color = "#ba69ec", document.getElementById("mainMenu").style.backgroundImage = "url('https://tenor.com/view/chillbro-cat-%D0%BA%D0%BE%D1%82%D0%B8%D0%BA-%D0%BA%D0%BE%D1%82%D0%B8%D0%BA-%D0%BC%D0%BE%D1%80%D0%B3%D0%B0%D0%B5%D1%82-gif-10925748526361103416')", document.getElementById("mainMenu").style.backgroundSize = "cover", document.getElementById("enterGame").innerText = "< go no >", document.getElementById("enterGame").addEventListener("mouseenter", (function() {
        document.getElementById("enterGame").innerText = "<  Play ? >", document.getElementById("gameName").style.color = ""
    })), document.getElementById("enterGame").addEventListener("mouseleave", (function() {
        document.getElementById("enterGame").innerText = "neverlose", document.getElementById("gameName").style.color = ""
    }));
    let founda = !1,
        scriptTags = document.getElementsByTagName("script");
    for (let e = 0; e < scriptTags.length; e++)
        if (scriptTags[e].src.includes("index-f3a4c1ad.js") && !founda) {
            scriptTags[e].remove(), founda = !0;
            break
        }
    document.addEventListener("keydown", (function(e) {
        if (45 === e.keyCode) {
            const e = document.getElementById("gameUI");
            if (e) {
                const t = e.style.display;
                e.style.display = "none" === t ? "block" : "none"
            }
        }
    }));
    var styleItem = document.createElement("style");

    function getEl(e) {
        return document.getElementById(e)
    }
    styleItem.type = "text/css", styleItem.appendChild(document.createTextNode("\n#suggestBox {\n    width: 355px;\n    border-radius: 3px;\n    background-color: rgba(0,0,0,0.5);\n    margin: auto;\n    text-align: left;\n    z-index: 49;\n    pointer-events: auto;\n    position: relative;\n    bottom: 3.5px;\n    overflow-y: auto;\n}\n#suggestBox div {\n    background-color: rgba(255,255,255,0);\n    color: rgba(255,255,255,1);\n    transition: background-color 0.3s, color 0.3s;\n}\n#suggestBox div:hover {\n    background-color: rgba(255,255,255,0.2);\n    color: rgba(0,0,0,1);\n}\n.suggestBoxHard {\n    color: rgba(255,255,255,1);\n    font-size: 18px;\n}\n.suggestBoxLight {\n    color: rgba(255,255,255,0.7);\n    font-size: 18px;\n}\n")), document.head.appendChild(styleItem), window.addEventListener("load", (function() {
            var e = document.getElementById("allianceButton"),
                t = document.getElementById("storeButton");
            t && (t.style.right = "26px", t.style.top = "420px"), e && (e.style.right = "26px", e.style.top = "479px")
        })),
        function(e) {
            let t = document.createElement("link");
            t.rel = "stylesheet", t.href = "https://fonts.googleapis.com/css?family=Ubuntu:700", t.type = "text/css", document.body.append(t);
            let n = document.createElement("script");
            n.src = "https://rawgit.com/kawanet/msgpack-lite/master/dist/msgpack.min.js", document.body.append(n), window.oncontextmenu = function() {
                return !1
            };
            let i = window.config;
            i.clientSendRate = 9, i.serverUpdateRate = 9, i.deathFadeout = 0, i.playerCapacity = 9999, i.isSandbox = "sandbox.moomoo.io" == window.location.hostname, i.skinColors = ["#fe8ac9", "#cbb091", "#896c4b", "#fadadc", "#ececec", "#c37373", "#4c4c4c", "#ecaff7", "#738cc3", "#8bc373", "#91b2db"], i.weaponVariants = [{
                id: 0,
                src: "",
                xp: 0,
                val: 1
            }, {
                id: 1,
                src: "_g",
                xp: 3e3,
                val: 1.1
            }, {
                id: 2,
                src: "_d",
                xp: 7e3,
                val: 1.18
            }, {
                id: 3,
                src: "_r",
                poison: !0,
                xp: 12e3,
                val: 1.18
            }, {
                id: 4,
                src: "_e",
                poison: !0,
                heal: !0,
                xp: 24e3,
                val: 1.18
            }], i.anotherVisual = !0, i.useWebGl = !1, i.resetRender = !0;
            let a, o = [];

            function s(e, t) {
                a && localStorage.setItem(e, t)
            }

            function r(e) {
                a && localStorage.removeItem(e)
            }
            "undefined" != typeof Storage && (a = !0);
            let l = function(e, t) {
                try {
                    let n = JSON.parse(function(e) {
                        return a ? localStorage.getItem(e) : null
                    }(e));
                    return "object" == typeof n ? t : n
                } catch (e) {
                    return alert("dieskid"), t
                }
            };
            let c = {
                    help: {
                        desc: "Show Commands",
                        action: function(e) {
                            for (let e in c) _("/" + e, c[e].desc, "lime", 1)
                        }
                    },
                    clear: {
                        desc: "Clear Chats",
                        action: function(e) {
                            S()
                        }
                    },
                    debug: {
                        desc: "Debug Mod For Development",
                        action: function(e) {
                            ! function(e) {
                                ae.push(new Mt(e.x, e.y, e.dir, e.buildIndex, e.weaponIndex, e.weaponVariant, e.skinColor, e.scale, e.name))
                            }(Y), _("Debug", "Done", "#99ee99", 1)
                        }
                    },
                    play: {
                        desc: "Play Music ( /play [link] )",
                        action: function(e) {
                            let t = e.split(" ");
                            t[1] ? new Audio(t[1]).play() : _("Warn", "Enter Link ( /play [link] )", "#99ee99", 1)
                        }
                    },
                    bye: {
                        desc: "Leave Game",
                        action: function(e) {
                            window.leave()
                        }
                    }
                },
                d = {
                    killChat: !1,
                    alwaysRev: !0,
                    autoBuy: !0,
                    autoBuyEquip: !0,
                    autoPush: !0,
                    revTick: !0,
                    spikeTick: !0,
                    predictTick: !0,
                    autoPlace: !0,
                    autoReplace: !0,
                    antiTrap: !0,
                    slowOT: !1,
                    attackDir: !1,
                    showDir: !1,
                    noDir: !1,
                    autoRespawn: !1
                };
            autoRubyOnSpawn = "bot" == name, autoRubyOnSpawn && (d.autoRespawn = 1), window.removeConfigs = function() {
                for (let e in d) r(e, d[e])
            };
            for (let e in d) d[e] = l(e, d[e]);
            window.changeMenu = function() {}, window.debug = function() {}, window.wasdMode = function() {}, window.startGrind = function() {}, window.connectFillBots = function() {}, window.destroyFillBots = function() {}, window.tryConnectBots = function() {}, window.destroyBots = function() {}, window.resBuild = function() {}, window.toggleBotsCircle = function() {}, window.toggleVisual = function() {}, window.prepareUI = function() {}, window.leave = function() {}, window.ping = 0;
            class p {
                constructor(e) {
                    this.element = e
                }
                add(e) {
                    this.element && (this.element.innerHTML += e)
                }
                newLine(e) {
                    let t = "<br>";
                    if (e > 0) {
                        t = "";
                        for (let n = 0; n < e; n++) t += "<br>"
                    }
                    this.add(t)
                }
                checkBox(e) {
                    let t = '<input type = "checkbox"';
                    e.id && (t += ` id = ${e.id}`), e.style && (t += ` style = ${e.style.replaceAll(" ","")}`), e.class && (t += ` class = ${e.class}`), e.checked && (t += " checked"), e.onclick && (t += ` onclick = ${e.onclick}`), t += ">", this.add(t)
                }
                text(e) {
                    let t = '<input type = "text"';
                    e.id && (t += ` id = ${e.id}`), e.style && (t += ` style = ${e.style.replaceAll(" ","")}`), e.class && (t += ` class = ${e.class}`), e.size && (t += ` size = ${e.size}`), e.maxLength && (t += ` maxLength = ${e.maxLength}`), e.value && (t += ` value = ${e.value}`), e.placeHolder && (t += ` placeHolder = ${e.placeHolder.replaceAll(" ","&nbsp;")}`), t += ">", this.add(t)
                }
                select(e) {
                    let t = "<select";
                    e.id && (t += ` id = ${e.id}`), e.style && (t += ` style = ${e.style.replaceAll(" ","")}`), e.class && (t += ` class = ${e.class}`), t += ">";
                    for (let n in e.option) t += `<option value = ${e.option[n].id}`, e.option[n].selected && (t += " selected"), t += `>${n}</option>`;
                    t += "</select>", this.add(t)
                }
                button(e) {
                    let t = "<button";
                    e.id && (t += ` id = ${e.id}`), e.style && (t += ` style = ${e.style.replaceAll(" ","")}`), e.class && (t += ` class = ${e.class}`), e.onclick && (t += ` onclick = ${e.onclick}`), t += ">", e.innerHTML && (t += e.innerHTML), t += "</button>", this.add(t)
                }
                selectMenu(e) {
                    let t, n = "<select";
                    if (!e.id) return void alert("please put id skid");
                    window[e.id + "Func"] = function() {}, e.id && (n += ` id = ${e.id}`), e.style && (n += ` style = ${e.style.replaceAll(" ","")}`), e.class && (n += ` class = ${e.class}`), n += ` onchange = window.${e.id+"Func"}()`, n += ">";
                    let i = 0;
                    for (let t in e.menu) n += `<option value = ${"option_"+t} id = ${"O_"+t}`, e.menu[t] && (n += " checked"), n += ` style = "color: ${e.menu[t]?"#000":"#fff"}; background: ${e.menu[t]?"#8ecc51":"#cc5151"};">${t}</option>`, i++;
                    n += "</select>", this.add(n), i = 0;
                    for (let t in e.menu) window[t + "Func"] = function() {
                        e.menu[t] = !!getEl("check_" + t).checked, s(t, e.menu[t]), getEl("O_" + t).style.color = e.menu[t] ? "#000" : "#fff", getEl("O_" + t).style.background = e.menu[t] ? "#8ecc51" : "#cc5151"
                    }, this.checkBox({
                        id: "check_" + t,
                        style: `display: ${0==i?"inline-block":"none"};`,
                        class: "checkB",
                        onclick: `window.${t+"Func"}()`,
                        checked: e.menu[t]
                    }), i++;
                    t = "check_" + getEl(e.id).value.split("_")[1], window[e.id + "Func"] = function() {
                        getEl(t).style.display = "none", t = "check_" + getEl(e.id).value.split("_")[1], getEl(t).style.display = "inline-block"
                    }
                }
            }
            let h = new class {
                    constructor() {
                        this.element = null, this.action = null, this.divElement = null, this.startDiv = function(e, t) {
                            let n = document.createElement("div");
                            e.id && (n.id = e.id), e.style && (n.style = e.style), e.class && (n.className = e.class), this.element.appendChild(n), this.divElement = n;
                            let i = new p(n);
                            "function" == typeof t && t(i)
                        }, this.addDiv = function(e, t) {
                            let n = document.createElement("div");
                            e.id && (n.id = e.id), e.style && (n.style = e.style), e.class && (n.className = e.class), e.appendID && getEl(e.appendID).appendChild(n), this.divElement = n;
                            let i = new p(n);
                            "function" == typeof t && t(i)
                        }
                    }
                    set(e) {
                        this.element = getEl(e), this.action = new p(this.element)
                    }
                    resetHTML(e) {
                        this.element.innerHTML = ""
                    }
                    setStyle(e) {
                        this.element.style = e
                    }
                    setCSS(e) {
                        this.action.add("<style>" + e + "</style>")
                    }
                },
                m = document.createElement("div");
            m.id = "menuDiv", m.draggable = !0, m.addEventListener("dragstart", (function(e) {
                e.dataTransfer.setData("text/plain", "")
            })), document.addEventListener("dragover", (function(e) {
                m.style.left = e.clientX - m.offsetWidth / 2 + "px", m.style.top = e.clientY - m.offsetHeight / 2 + "px"
            })), document.body.appendChild(m), h.set("menuDiv"), h.setStyle("\n            position: absolute;\n            left: 20px;\n            top: 20px;\n            "), h.resetHTML(), h.setCSS('\n            .menuClass{\n                color:#dc61e5;\n                font-size: 20px;\n                text-align: left;\n                padding: 10px;\n                padding-top: 7px;\n                padding-bottom: 5px;\n                width: 300px;\n                background-color: rgba(0, 0, 0, 0.25);\n                -webkit-border-radius: 4px;\n                -moz-border-radius: 4px;\n                border-radius: 3px;\n            }\n            .menuC {\n                display: none;\n                font-family: "HammerSmith One";\n                font-size: 12px;\n                max-height: 180px;\n                overflow-y: scroll;\n                -webkit-touch-callout: none;\n                -webkit-user-select: none;\n                -khtml-user-select: none;\n                -moz-user-select: none;\n                -ms-user-select: none;\n                user-select: none;\n            }\n            .menuB {\n                text-align: center;\n                background-color: rgb(25, 25, 25);\n                color: #e4f9c1;\n                -webkit-border-radius: 4px;\n                -moz-border-radius: 4px;\n                border-radius: 3px;\n                border: 2px solid #000;\n                cursor: pointer;\n            }\n            .menuB:hover {\n                border: 2px solid #fff;\n            }\n            .menuB:active {\n                color: rgb(25, 25, 25);\n                background-color: rgb(200, 200, 200);\n            }\n            .customText {\n                color: #ffac79;\n                -webkit-border-radius: 4px;\n                -moz-border-radius: 4px;\n                border-radius: 3px;\n                border: 2px solid #000;\n            }\n            .customText:focus {\n                background-color: yellow;\n            }\n            .checkB {\n                position: relative;\n                top: 2px;\n                accent-color:#dc61e5;\n                cursor: pointer;\n            }\n            .Cselect {\n                -webkit-border-radius: 4px;\n                -moz-border-radius: 4px;\n                border-radius: 3px;\n                background-color: rgb(75, 75, 75);\n                color: #fff;\n                border: 1px solid #000;\n            }\n            #menuChanger {\n                position: absolute;\n                right: 10px;\n                top: 10px;\n                background-color: rgba(0, 0, 0, 0);\n                color: #dc61e5;\n                border: none;\n                cursor: pointer;\n            }\n            #menuChanger:hover {\n                color: #000;\n            }\n            ::-webkit-scrollbar {\n                width: 10px;\n            }\n            ::-webkit-scrollbar-track {\n                opacity: 0;\n            }\n            ::-webkit-scrollbar-thumb {\n                background-color: rgb(25, 25, 25);\n                -webkit-border-radius: 4px;\n                -moz-border-radius: 4px;\n                border-radius: 3px;\n            }\n            ::-webkit-scrollbar-thumb:active {\n                background-color: rgb(230, 230, 230);\n            }\n            '), h.startDiv({
                id: "menuHeadLine",
                class: "menuClass"
            }, (e => {
                e.add("Support"), e.button({
                    id: "menuChanger",
                    class: "material-icons",
                    innerHTML: "sync",
                    onclick: "window.changeMenu()"
                }), h.addDiv({
                    id: "menuButtons",
                    style: "display: block; overflow-y: visible;",
                    class: "menuC",
                    appendID: "menuHeadLine"
                }, (e => {
                    e.button({
                        class: "menuB",
                        innerHTML: "Debug",
                        onclick: "window.debug()"
                    })
                })), h.addDiv({
                    id: "menuMain",
                    style: "display: block",
                    class: "menuC",
                    appendID: "menuHeadLine"
                }, (e => {
                    e.button({
                        class: "menuB",
                        innerHTML: "km mode",
                        onclick: "window.wasdMode()"
                    }), e.newLine(), e.add("Ruby Farm:"), e.checkBox({
                        id: "weaponGrind",
                        class: "checkB",
                        onclick: "window.startGrind()"
                    }), e.newLine(2), h.addDiv({
                        style: "font-size: 20px; color: #99ee99;",
                        appendID: "menuMain"
                    }, (e => {
                        e.add("Settings:")
                    })), e.add("AntiPush:"), e.checkBox({
                        id: "antipush",
                        class: "checkB",
                        checked: !0
                    }), e.newLine(), e.add("Healings:"), e.checkBox({
                        id: "healingBeta",
                        class: "checkB",
                        checked: !0
                    }), e.newLine()
                })), h.addDiv({
                    id: "menuConfig",
                    class: "menuC",
                    appendID: "menuHeadLine"
                }, (e => {
                    e.add("Placement Tick: "), e.text({
                        id: "autoPlaceTick",
                        class: "customText",
                        value: "1",
                        size: "2em",
                        maxLength: "1"
                    }), e.newLine(), e.add("Options: "), e.selectMenu({
                        id: "configsChanger",
                        class: "Cselect",
                        menu: d
                    }), e.newLine(), e.add("AntiBull: "), e.select({
                        id: "antiBullType",
                        class: "Cselect",
                        option: {
                            Disable: {
                                id: "noab",
                                selected: !0
                            },
                            "When Reloaded": {
                                id: "abreload"
                            },
                            Always: {
                                id: "abalway"
                            }
                        }
                    })
                })), h.addDiv({
                    id: "menuOther",
                    class: "menuC",
                    appendID: "menuHeadLine"
                }, (e => {
                    e.button({
                        class: "menuB",
                        innerHTML: "Connect Bots",
                        onclick: "window.tryConnectBots()"
                    }), e.button({
                        class: "menuB",
                        innerHTML: "Disconnect Bots",
                        onclick: "window.destroyBots()"
                    }), e.newLine(), e.add("Break Objects Range: "), e.text({
                        id: "breakRange",
                        class: "customText",
                        value: "700",
                        size: "3em",
                        maxLength: "4"
                    }), e.newLine(), e.add("Render Movement: "), e.select({
                        id: "predictType",
                        class: "Cselect",
                        option: {
                            "Disable Render": {
                                id: "disableRender",
                                selected: !0
                            },
                            "X/Y and 2": {
                                id: "pre2"
                            },
                            "X/Y and 3": {
                                id: "pre3"
                            }
                        }
                    }), e.newLine(), e.add("Render Placers: "), e.checkBox({
                        id: "placeVis",
                        class: "checkB"
                    }), e.newLine(), e.add("Bot Mode: "), e.select({
                        id: "mode",
                        class: "Cselect",
                        option: {
                            "Clear Building": {
                                id: "clear",
                                selected: !0
                            },
                            Sync: {
                                id: "zync"
                            },
                            Search: {
                                id: "zearch"
                            },
                            "Clear Everything": {
                                id: "fuckemup"
                            },
                            Flex: {
                                id: "flex"
                            }
                        }
                    }), e.newLine(), e.add("Bot Setup: "), e.select({
                        id: "setup",
                        class: "Cselect",
                        option: {
                            "Dagger Musket": {
                                id: "dm",
                                selected: !0
                            },
                            "Katana Hammer": {
                                id: "kh"
                            },
                            "Dagger Repeater-Crossbow": {
                                id: "dr"
                            },
                            "Sword Muzket": {
                                id: "zd"
                            }
                        }
                    }), e.newLine(), e.button({
                        class: "menuB",
                        innerHTML: "Toggle Another Visual",
                        onclick: "window.toggleVisual()"
                    }), e.newLine()
                }))
            }));
            let u = {
                "0:14": "https://www.youtube.com/watch?v=LsWACxHMWBI",
                "0:0": "https://www.youtube.com/watch?v=Fvblhv6Eke8&list=RDFvblhv6Eke8&start_radio=1",
                "0:0": "",
                "0:0": "",
                "0:0": "",
                "0:0": "",
                "0:0": "",
                "0:0": "",
                "0:0": "",
                "0:0": "",
                "0:0": "",
                "0:0": "",
                "0:0": "",
                "0:0": "",
                "0:0": "",
                "0:0": "",
                "0:0": "",
                "0:0": "",
                "0:0": "",
                "0:0": "",
                "0:0": "",
                "0:0": "",
                "0:0": "",
                "0:0": "",
                "0:0": "",
                "0:0": "",
                "0:0": "",
                "0:0": "",
                "0:0": "",
                "0:0": "",
                "0:0": "",
                "0:0": "",
                "0:0": "",
                "0:0": "",
                "0:0": "",
                "0:0": "",
                "0:0": "",
                "0:0": "",
                "0:0": "",
                "0:0": "",
                "0:0": "",
                "0:0": "",
                "0:0": "",
                "0:0": "",
                "0:0": "",
                "0:0": "",
                "0:0": "",
                "0:0": "",
                "0:0": "",
                "0:0": "",
                "0:0": "",
                "0:0": "",
                "0:0": "",
                "0:0": "",
                "0:0": "",
                "0:0": "",
                "0:0": "",
                "0:0": "",
                "0:0": "",
                "0:0": "",
                "0:0": "",
                "0:0": "",
                "0:0": "",
                "0:0": ""
            };
            const g = new Audio("https://cdn.discordapp.com/attachments/1175772907931176991/1226210664393998346/Muti_Azer_Bulbul_-_Ille_de_Sen_Official_Video.mp3?ex=6623f0ac&is=66117bac&hm=c1cfee9f9083aae11297915714c4b682e0d163b603b5e7e7870d9eeae0acc464&");
            let f = !1,
                y = "";
            document.addEventListener("keypress", (function(e) {
                "C" === e.key && (f ? (g.pause(), f = !1) : (g.play(), g.ontimeupdate = function(e) {
                    let t = u[function(e) {
                        let t = ~~e % 60;
                        return t <= 9 && (t = `0${t}`), `${~~(e%3600/60)}:${t}`
                    }(Math.round(0 | this.currentTime))];
                    t && t !== y && (y = t, G.send("6", t))
                }, g.onended = function() {
                    f && g.play()
                }, f = !0))
            }));
            let w = document.createElement("div");
            w.id = "menuChatDiv", document.body.appendChild(w), h.set("menuChatDiv"), h.setStyle("\n            position: absolute;\n            display: none;\n            left: 0px;\n            top: 25px;\n          //  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.65);\n            "), h.resetHTML(), h.setCSS('\n                    .chDiv {\n    color: #fff;\n    padding: 10px;\n    width: 357px;\n    height: 217px;\n    background-color: rgba(0, 0, 0, 0.2);\n    font-family: "HammerSmith One", monospace;\n //   border-radius: 15px;\n//    box-shadow: black 1px 2px 19px;\n//backdrop-filter: blur(3px);\n\n}\n.chMainDiv {\n    font-family: "Ubuntu";\n    font-size: 16px;\n    max-height: 215px;\n    overflow-y: scroll;\n    scrollbar-width: thin;\n    scrollbar-color: rgba(0, 0, 0, 0.5) rgba(0, 0, 0, 0.1);\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -khtml-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    overflow-x: hidden;\n}\n.chMainDiv::-webkit-scrollbar {\n    width: 8px;\n}\n.chMainDiv::-webkit-scrollbar-thumb {\n    background-color: rgba(0, 0, 0, 0.5);\n}\n.chMainDiv::-webkit-scrollbar-thumb:hover {\n    background-color: rgba(0, 0, 0, 0.7);\n}\n.chMainBox {\ndisplay:none;\n     position: absolute;\n    left: 15px;\n    bottom: 10px;\n    width: 400px;\n    height: 30px;\n    background-color: rgba(255, 255, 255, 0.1);\n    border-radius: 5px;\n    color: rgba(255, 255, 255, 0.75);\n    font-family: "HammerSmith One";\n    font-size: 12px;\n}\n            '), h.startDiv({
                id: "mChDiv",
                class: "chDiv"
            }, (e => {
                h.addDiv({
                    id: "mChMain",
                    class: "chMainDiv",
                    appendID: "mChDiv"
                }, (e => {})), e.text({
                    id: "mChBox",
                    class: "chMainBox"
                })
            }));
            let k = getEl("mChMain"),
                v = getEl("mChBox"),
                x = !1,
                b = 0;

            function _(e, t, n, i) {
                h.set("menuChatDiv"), n = n || "white";
                let a = new Date,
                    o = a.getMinutes(),
                    s = a.getHours(),
                    r = "";
                i || (r += `${(s<10?"0":"")+s}:${(o<10?"0":"")+o}`), e && (r += "" + ((i ? "" : " - ") + e)), t && (r += (e ? ": " : i ? "" : " - ") + t + "\n"), h.addDiv({
                    id: "menuChDisp",
                    style: `color: ${n}`,
                    appendID: "mChMain"
                }, (e => {
                    e.add(r)
                })), k.scrollTop = k.scrollHeight, b++
            }

            function I(e, t, n, i) {
                h.set("menuChatDiv"), n = n || "white";
                new Date;
                let a = "";
                t && (a += (e ? ": " : "") + t + "\n"), h.addDiv({
                    id: "menuChDisp",
                    style: `color: ${n}`,
                    appendID: "mChMain"
                }, (e => {
                    e.add(a)
                })), k.scrollTop = k.scrollHeight, b++
            }

            function S() {
                k.innerHTML = "", b = 0, _(null, "Chat '/help' for a list of chat commands.", "white", 1)
            }
            v.value = "", v.addEventListener("focus", (() => {
                x = !0
            })), v.addEventListener("blur", (() => {
                x = !1
            })), S();
            let T = 0,
                D = ["menuMain", "menuConfig", "menuOther"];
            window.changeMenu = function() {
                getEl(D[T % D.length]).style.display = "none", T++, getEl(D[T % D.length]).style.display = "block"
            };
            let M = document.createElement("div");
            M.id = "status", getEl("gameUI").appendChild(M), h.set("status"), h.setStyle("\n            display: block;\n            position: absolute;\n            color: #ddd;\n            font: 15px HammerSmith One;\n            bottom: 215px;\n            left: 20px;\n            "), h.resetHTML(), h.setCSS("\n            .sizing {\n                font-size: 15px;\n            }\n            .mod {\n                font-size: 15px;\n                display: inline-block;\n            }\n            "), h.startDiv({
                id: "uehmod",
                class: "sizing"
            }, (e => {
                e.add("Ping: "), h.addDiv({
                    id: "pingFps",
                    class: "mod",
                    appendID: "uehmod"
                }, (e => {
                    e.add("None")
                })), e.newLine(), e.add("Packet: "), h.addDiv({
                    id: "packetStatus",
                    class: "mod",
                    appendID: "uehmod"
                }, (e => {
                    e.add("None")
                })), e.newLine, e.add("Shame: ")
            }));
            let U, P, B, O = !1,
                A = !1,
                H = 0,
                W = {
                    sec: !1
                },
                L = {
                    tick: 0,
                    tickQueue: [],
                    tickBase: function(e, t) {
                        this.tickQueue[this.tick + t] ? this.tickQueue[this.tick + t].push(e) : this.tickQueue[this.tick + t] = [e]
                    },
                    tickRate: 1e3 / i.serverUpdateRate,
                    tickSpeed: 0,
                    lastTick: performance.now()
                },
                j = !1,
                q = {
                    last: 0,
                    time: 0,
                    ltime: 0
                },
                V = ["cc", 1, "__proto__"];

            function z(e) {
                let t = Array.prototype.slice.call(arguments, 1),
                    n = window.msgpack.encode([e, t]);
                U.send(n)
            }
            WebSocket.prototype.nsend = WebSocket.prototype.send, WebSocket.prototype.send = function(e) {
                if (U || (U = this, U.addEventListener("message", (function(e) {
                        ! function(e) {
                            let t = new Uint8Array(e.data),
                                n = window.msgpack.decode(t),
                                i = n[0];
                            t = n[1];
                            let a = {
                                A: En,
                                C: Pn,
                                D: Bn,
                                E: On,
                                a: ei,
                                G: ni,
                                H: ii,
                                I: ai,
                                J: oi,
                                K: si,
                                L: ri,
                                M: li,
                                N: ci,
                                O: An,
                                P: Rn,
                                Q: Yn,
                                R: $n,
                                S: Hn,
                                T: Wn,
                                U: Ln,
                                V: di,
                                X: pi,
                                Y: hi,
                                2: wi,
                                3: ki,
                                4: vi,
                                5: xi,
                                6: bi,
                                7: _i,
                                8: Ii,
                                9: wa,
                                0: St
                            };
                            "io-init" == i ? P = t[0] : a[i] && a[i].apply(void 0, t)
                        }(e)
                    })), U.addEventListener("close", (e => {
                        4001 == e.code && window.location.reload()
                    }))), U == this) {
                    j = !1;
                    let t = new Uint8Array(e),
                        n = window.msgpack.decode(t),
                        i = n[0];
                    if (t = n[1], "6" == i) {
                        if (t[0]) {
                            let e;
                            ["cunt", "whore", "fuck", "shit", "faggot", "nigger", "nigga", "dick", "vagina", "minge", "cock", "rape", "cum", "sex", "tits", "penis", "clit", "pussy", "meatcurtain", "jizz", "prune", "douche", "wanker", "damn", "bitch", "dick", "fag", "bastard"].forEach((n => {
                                if (t[0].indexOf(n) > -1) {
                                    e = "";
                                    for (let t = 0; t < n.length; ++t) 1 == t && (e += String.fromCharCode(0)), e += n[t];
                                    let i = new RegExp(n, "g");
                                    t[0] = t[0].replace(i, e)
                                }
                            })), t[0] = t[0].slice(0, 30)
                        }
                    } else "L" == i ? (t[0] = t[0] + String.fromCharCode(0).repeat(7), t[0] = t[0].slice(0, 7)) : "M" == i ? (t[0].name = "" == t[0].name ? "unknown" : t[0].name, t[0].moofoll = !0, t[0].skin = 10 == t[0].skin ? "__proto__" : t[0].skin, V = [t[0].name, t[0].moofoll, t[0].skin]) : "D" == i ? ce.lastDir == t[0] || [null, void 0].includes(t[0]) ? j = !0 : ce.lastDir = t[0] : "d" == i ? t[2] ? [null, void 0].includes(t[1]) || (ce.lastDir = t[1]) : j = !0 : "K" == i ? t[1] || (j = !0) : "S" == i ? (cn.wait = !cn.wait, j = !0) : "a" == i && (t[1] ? (Y.moveDir == t[0] && (j = !0), Y.moveDir = t[0]) : j = !0);
                    if (!j) {
                        let e = window.msgpack.encode([i, t]);
                        this.nsend(e), W.sec || (W.sec = !0, setTimeout((() => {
                            W.sec = !1, H = 0
                        }), 1e3)), H++
                    }
                } else this.nsend(e)
            }, window.leave = function() {
                ! function(e) {
                    let t = Array.prototype.slice.call(arguments, 1),
                        n = window.msgpack.encode([e, t]);
                    U.nsend(n)
                }("kys", {
                    "frvr is so bad": !0,
                    "sidney is too good": !0,
                    "dev are too weak": !0
                })
            };
            let G = {
                send: z
            };
            Math.lerpAngle = function(e, t, n) {
                Math.abs(t - e) > Math.PI && (e > t ? t += 2 * Math.PI : e += 2 * Math.PI);
                let i = t + (e - t) * n;
                return i >= 0 && i <= 2 * Math.PI ? i : i % (2 * Math.PI)
            }, CanvasRenderingContext2D.prototype.roundRect = function(e, t, n, i, a) {
                return n < 2 * a && (a = n / 2), i < 2 * a && (a = i / 2), a < 0 && (a = 0), this.beginPath(), this.moveTo(e + a, t), this.arcTo(e + n, t, e + n, t + i, a), this.arcTo(e + n, t + i, e, t + i, a), this.arcTo(e, t + i, e, t, a), this.arcTo(e, t, e + n, t, a), this.closePath(), this
            };
            let F = [],
                N = {
                    tick: 0,
                    delay: 0,
                    time: [],
                    manage: []
                };
            ais = [];
            let Y, X, J, Z = [],
                K = [],
                Q = [],
                te = [],
                ne = [],
                ie = [],
                ae = [],
                oe = [],
                se = [],
                re = [],
                le = [],
                ce = {
                    reloaded: !1,
                    waitHit: 0,
                    autoAim: !1,
                    revAim: !1,
                    ageInsta: !0,
                    reSync: !1,
                    bullTick: 0,
                    anti0Tick: 0,
                    antiSync: !1,
                    safePrimary: function(e) {
                        return [0, 8].includes(e.primaryIndex)
                    },
                    safeSecondary: function(e) {
                        return [10, 11, 14].includes(e.secondaryIndex)
                    },
                    lastDir: 0,
                    autoPush: !1,
                    pushData: {}
                };

            function de(e, t, n, i) {
                return Math.sqrt(Math.pow(n - e, 2) + Math.pow(i - t, 2))
            }

            function pe(e, t, n) {
                let i = null,
                    a = 1 / 0;
                return n.forEach((n => {
                    {
                        const o = de(e, t, n.x, n.y);
                        o < a && (a = o, i = n)
                    }
                })), i
            }
            window.accessories = [{
                id: 12,
                name: "Snowball",
                price: 1e3,
                scale: 105,
                xOff: 18,
                desc: "no effect"
            }, {
                id: 9,
                name: "Tree Cape",
                price: 1e3,
                scale: 90,
                desc: "no effect"
            }, {
                id: 10,
                name: "Stone Cape",
                price: 1e3,
                scale: 90,
                desc: "no effect"
            }, {
                id: 3,
                name: "Cookie Cape",
                price: 1500,
                scale: 90,
                desc: "no effect"
            }, {
                id: 8,
                name: "Cow Cape",
                price: 2e3,
                scale: 90,
                desc: "no effect"
            }, {
                id: 11,
                name: "Monkey Tail",
                price: 2e3,
                scale: 97,
                xOff: 25,
                desc: "Super speed but reduced damage",
                spdMult: 1.35,
                dmgMultO: .2
            }, {
                id: 17,
                name: "Apple Basket",
                price: 3e3,
                scale: 80,
                xOff: 12,
                desc: "slowly regenerates health over time",
                healthRegen: 1
            }, {
                id: 6,
                name: "Winter Cape",
                price: 3e3,
                scale: 90,
                desc: "no effect"
            }, {
                id: 4,
                name: "Skull Cape",
                price: 4e3,
                scale: 90,
                desc: "no effect"
            }, {
                id: 5,
                name: "Dash Cape",
                price: 5e3,
                scale: 90,
                desc: "no effect"
            }, {
                id: 2,
                name: "Dragon Cape",
                price: 6e3,
                scale: 90,
                desc: "no effect"
            }, {
                id: 1,
                name: "Super Cape",
                price: 8e3,
                scale: 90,
                desc: "no effect"
            }, {
                id: 7,
                name: "Troll Cape",
                price: 8e3,
                scale: 90,
                desc: "no effect"
            }, {
                id: 14,
                name: "Thorns",
                price: 1e4,
                scale: 115,
                xOff: 20,
                desc: "no effect"
            }, {
                id: 15,
                name: "Blockades",
                price: 1e4,
                scale: 95,
                xOff: 15,
                desc: "no effect"
            }, {
                id: 20,
                name: "Devils Tail",
                price: 1e4,
                scale: 95,
                xOff: 20,
                desc: "no effect"
            }, {
                id: 16,
                name: "Sawblade",
                price: 12e3,
                scale: 90,
                spin: !0,
                xOff: 0,
                desc: "deal damage to players that damage you",
                dmg: .15
            }, {
                id: 13,
                name: "Angel Wings",
                price: 15e3,
                scale: 138,
                xOff: 22,
                desc: "slowly regenerates health over time",
                healthRegen: 3
            }, {
                id: 19,
                name: "Shadow Wings",
                price: 15e3,
                scale: 138,
                xOff: 22,
                desc: "increased movement speed",
                spdMult: 1.1
            }, {
                id: 18,
                name: "Blood Wings",
                price: 2e4,
                scale: 178,
                xOff: 26,
                desc: "restores health when you deal damage",
                healD: .2
            }, {
                id: 21,
                name: "Corrupt X Wings",
                price: 2e4,
                scale: 178,
                xOff: 26,
                desc: "deal damage to players that damage you",
                dmg: .25
            }], window.weapons = [{
                id: 0,
                type: 0,
                name: "tool hammer",
                desc: "tool for gathering all resources",
                src: "hammer_1",
                length: 140,
                width: 140,
                xeOff: -3,
                yOff: 18,
                dmg: 25,
                range: 65,
                gather: 1,
                speed: 300
            }, {
                id: 1,
                type: 0,
                age: 2,
                name: "hand axe",
                desc: "gathers resources at a higher rate",
                src: "axe_1",
                length: 140,
                width: 140,
                xOff: 3,
                yOff: 24,
                dmg: 30,
                spdMult: 1,
                range: 70,
                gather: 2,
                speed: 400
            }, {
                id: 2,
                type: 0,
                age: 8,
                pre: 1,
                name: "great axe",
                desc: "deal more damage and gather more resources",
                src: "great_axe_1",
                length: 140,
                width: 140,
                xOff: -8,
                yOff: 25,
                dmg: 35,
                spdMult: 1,
                range: 75,
                gather: 4,
                speed: 400
            }, {
                id: 3,
                type: 0,
                age: 2,
                name: "short sword",
                desc: "increased attack power but slower move speed",
                src: "sword_1",
                iPad: 1.3,
                length: 130,
                width: 210,
                xOff: -8,
                yOff: 46,
                dmg: 35,
                spdMult: .85,
                range: 110,
                gather: 1,
                speed: 300
            }, {
                id: 4,
                type: 0,
                age: 8,
                pre: 3,
                name: "katana",
                desc: "greater range and damage",
                src: "samurai_1",
                iPad: 1.3,
                length: 130,
                width: 210,
                xOff: -8,
                yOff: 59,
                dmg: 40,
                spdMult: .8,
                range: 118,
                gather: 1,
                speed: 300
            }, {
                id: 5,
                type: 0,
                age: 2,
                name: "polearm",
                desc: "long range melee weapon",
                src: "spear_1",
                iPad: 1.3,
                length: 130,
                width: 210,
                xOff: -8,
                yOff: 53,
                dmg: 45,
                knock: .2,
                spdMult: .82,
                range: 142,
                gather: 1,
                speed: 700
            }, {
                id: 6,
                type: 0,
                age: 2,
                name: "bat",
                desc: "fast long range melee weapon",
                src: "bat_1",
                iPad: 1.3,
                length: 110,
                width: 180,
                xOff: -8,
                yOff: 53,
                dmg: 20,
                knock: .7,
                range: 110,
                gather: 1,
                speed: 300
            }, {
                id: 7,
                type: 0,
                age: 2,
                name: "daggers",
                desc: "really fast short range weapon",
                src: "dagger_1",
                iPad: .8,
                length: 110,
                width: 110,
                xOff: 18,
                yOff: 0,
                dmg: 20,
                knock: .1,
                range: 65,
                gather: 1,
                hitSlow: .1,
                spdMult: 1.13,
                speed: 100
            }, {
                id: 8,
                type: 0,
                age: 2,
                name: "stick",
                desc: "great for gathering but very weak",
                src: "stick_1",
                length: 140,
                width: 140,
                xOff: 3,
                yOff: 24,
                dmg: 1,
                spdMult: 1,
                range: 70,
                gather: 7,
                speed: 400
            }, {
                id: 9,
                type: 1,
                age: 6,
                name: "hunting bow",
                desc: "bow used for ranged combat and hunting",
                src: "bow_1",
                req: ["wood", 4],
                length: 120,
                width: 120,
                xOff: -6,
                yOff: 0,
                projectile: 0,
                spdMult: .75,
                speed: 600
            }, {
                id: 10,
                type: 1,
                age: 6,
                name: "great hammer",
                desc: "hammer used for destroying structures",
                src: "great_hammer_1",
                length: 140,
                width: 140,
                xOff: -9,
                yOff: 25,
                dmg: 10,
                spdMult: .88,
                range: 75,
                sDmg: 7.5,
                gather: 1,
                speed: 400,
                hatid: 40
            }, {
                id: 11,
                type: 1,
                age: 6,
                name: "wooden shield",
                desc: "blocks projectiles and reduces melee damage",
                src: "shield_1",
                length: 120,
                width: 120,
                shield: .2,
                xOff: 6,
                yOff: 0,
                spdMult: .7,
                speed: 0
            }, {
                id: 12,
                type: 1,
                age: 8,
                pre: 9,
                name: "crossbow",
                desc: "deals more damage and has greater range",
                src: "crossbow_1",
                req: ["wood", 5],
                aboveHand: !0,
                armS: .75,
                length: 120,
                width: 120,
                xOff: -4,
                yOff: 0,
                projectile: 2,
                spdMult: .7,
                speed: 700,
                hatid: 20
            }, {
                id: 13,
                type: 1,
                age: 9,
                pre: 12,
                name: "repeater crossbow",
                desc: "high firerate crossbow with reduced damage",
                src: "crossbow_2",
                req: ["wood", 10],
                aboveHand: !0,
                armS: .75,
                length: 120,
                width: 120,
                xOff: -4,
                yOff: 0,
                projectile: 3,
                spdMult: .7,
                speed: 300,
                hatid: 20
            }, {
                id: 14,
                type: 1,
                age: 6,
                name: "mc grabby",
                desc: "steals resources from enemies",
                src: "grab_1",
                length: 130,
                width: 210,
                xOff: -8,
                yOff: 53,
                dmg: 0,
                steal: 250,
                knock: .2,
                spdMult: 1.05,
                range: 125,
                gather: 0,
                speed: 700
            }, {
                id: 15,
                type: 1,
                age: 9,
                pre: 12,
                name: "musket",
                desc: "slow firerate but high damage and range",
                src: "musket_1",
                req: ["stone", 10],
                aboveHand: !0,
                rec: .35,
                armS: .6,
                hndS: .3,
                hndD: 1.6,
                length: 205,
                width: 205,
                xOff: 25,
                yOff: 0,
                projectile: 5,
                hideProjectile: !0,
                spdMult: .6,
                speed: 1500,
                hatid: 20
            }], activeObjects = [{
                name: "apple",
                desc: "restores 20 health when consumed",
                req: ["food", 10],
                consume: function(e) {
                    return e.changeHealth(20, e)
                },
                scale: 22,
                holdOffset: 15
            }, {
                age: 3,
                name: "cookie",
                desc: "restores 40 health when consumed",
                req: ["food", 15],
                consume: function(e) {
                    return e.changeHealth(40, e)
                },
                scale: 27,
                holdOffset: 15
            }, {
                age: 7,
                name: "pizza",
                desc: "restores 30 health and another 50 over 5 seconds",
                req: ["food", 30],
                consume: function(e) {
                    return !!(e.changeHealth(30, e) || e.health < 100) && (e.dmgOverTime.dmg = -10, e.dmgOverTime.doer = e, e.dmgOverTime.time = 5, !0)
                },
                scale: 27,
                holdOffset: 15
            }, {
                name: "wood wall",
                desc: "provides protection for your village",
                req: ["wood", 10],
                projDmg: !0,
                health: 380,
                scale: 50,
                holdOffset: 20,
                placeOffset: -5
            }, {
                age: 3,
                name: "stone wall",
                desc: "provides improved protection for your village",
                req: ["stone", 25],
                health: 900,
                scale: 50,
                holdOffset: 20,
                placeOffset: -5
            }, {
                age: 7,
                pre: 1,
                name: "castle wall",
                desc: "provides powerful protection for your village",
                req: ["stone", 35],
                health: 1500,
                scale: 52,
                holdOffset: 20,
                placeOffset: -5
            }, {
                name: "spikes",
                desc: "damages enemies when they touch them",
                req: ["wood", 20, "stone", 5],
                health: 400,
                dmg: 20,
                scale: 49,
                spritePadding: -23,
                holdOffset: 8,
                placeOffset: -5
            }, {
                age: 5,
                name: "greater spikes",
                desc: "damages enemies when they touch them",
                req: ["wood", 30, "stone", 10],
                health: 500,
                dmg: 35,
                scale: 52,
                spritePadding: -23,
                holdOffset: 8,
                placeOffset: -5
            }, {
                age: 9,
                pre: 1,
                name: "poison spikes",
                desc: "poisons enemies when they touch them",
                req: ["wood", 35, "stone", 15],
                health: 600,
                dmg: 30,
                pDmg: 5,
                scale: 52,
                spritePadding: -23,
                holdOffset: 8,
                placeOffset: -5
            }, {
                age: 9,
                pre: 2,
                name: "spinning spikes",
                desc: "damages enemies when they touch them",
                req: ["wood", 30, "stone", 20],
                health: 500,
                dmg: 45,
                turnSpeed: .003,
                scale: 52,
                spritePadding: -23,
                holdOffset: 8,
                placeOffset: -5
            }, {
                name: "windmill",
                desc: "generates gold over time",
                req: ["wood", 50, "stone", 10],
                health: 400,
                pps: 1,
                turnSpeed: .0016,
                spritePadding: 25,
                iconLineMult: 12,
                scale: 45,
                holdOffset: 20,
                placeOffset: 5
            }, {
                age: 5,
                pre: 1,
                name: "faster windmill",
                desc: "generates more gold over time",
                req: ["wood", 60, "stone", 20],
                health: 500,
                pps: 1.5,
                turnSpeed: .0025,
                spritePadding: 25,
                iconLineMult: 12,
                scale: 47,
                holdOffset: 20,
                placeOffset: 5
            }, {
                age: 8,
                pre: 1,
                name: "power mill",
                desc: "generates more gold over time",
                req: ["wood", 100, "stone", 50],
                health: 800,
                pps: 2,
                turnSpeed: .005,
                spritePadding: 25,
                iconLineMult: 12,
                scale: 47,
                holdOffset: 20,
                placeOffset: 5
            }, {
                age: 5,
                type: 2,
                name: "mine",
                desc: "allows you to mine stone",
                req: ["wood", 20, "stone", 100],
                iconLineMult: 12,
                scale: 65,
                holdOffset: 20,
                placeOffset: 0
            }, {
                age: 5,
                type: 0,
                name: "sapling",
                desc: "allows you to farm wood",
                req: ["wood", 150],
                iconLineMult: 12,
                colDiv: .5,
                scale: 110,
                holdOffset: 50,
                placeOffset: -15
            }, {
                age: 4,
                name: "pit trap",
                desc: "pit that traps enemies if they walk over it",
                req: ["wood", 30, "stone", 30],
                trap: !0,
                ignoreCollision: !0,
                hideFromEnemy: !0,
                health: 500,
                colDiv: .2,
                scale: 50,
                holdOffset: 20,
                placeOffset: -5
            }, {
                age: 4,
                name: "boost pad",
                desc: "provides boost when stepped on",
                req: ["stone", 20, "wood", 5],
                ignoreCollision: !0,
                boostSpeed: 1.5,
                health: 150,
                colDiv: .7,
                scale: 45,
                holdOffset: 20,
                placeOffset: -5
            }, {
                age: 7,
                doUpdate: !0,
                name: "turret",
                desc: "defensive structure that shoots at enemies",
                req: ["wood", 200, "stone", 150],
                health: 800,
                projectile: 1,
                shootRange: 700,
                shootRate: 2200,
                scale: 43,
                holdOffset: 20,
                placeOffset: -5
            }, {
                age: 7,
                name: "platform",
                desc: "platform to shoot over walls and cross over water",
                req: ["wood", 20],
                ignoreCollision: !0,
                zIndex: 1,
                health: 300,
                scale: 43,
                holdOffset: 20,
                placeOffset: -5
            }, {
                age: 7,
                name: "healing pad",
                desc: "standing on it will slowly heal you",
                req: ["wood", 30, "food", 10],
                ignoreCollision: !0,
                healCol: 15,
                health: 400,
                colDiv: .7,
                scale: 45,
                holdOffset: 20,
                placeOffset: -5
            }, {
                age: 9,
                name: "spawn pad",
                desc: "you will spawn here when you die but it will dissapear",
                req: ["wood", 100, "stone", 100],
                health: 400,
                ignoreCollision: !0,
                spawnPoint: !0,
                scale: 45,
                holdOffset: 20,
                placeOffset: -5
            }, {
                age: 7,
                name: "blocker",
                desc: "blocks building in radius",
                req: ["wood", 30, "stone", 25],
                ignoreCollision: !0,
                blocker: 300,
                health: 400,
                colDiv: .7,
                scale: 45,
                holdOffset: 20,
                placeOffset: -5
            }, {
                age: 7,
                name: "teleporter",
                desc: "teleports you to a random point on the map",
                req: ["wood", 60, "stone", 60],
                ignoreCollision: !0,
                teleport: !0,
                health: 200,
                colDiv: .7,
                scale: 45,
                holdOffset: 20,
                placeOffset: -5
            }];
            window.weapons.filter((e => void 0 !== e.projectile));

            function he(e, t) {
                const n = t.x - e.x,
                    i = t.y - e.y;
                return (Math.atan2(i, n) + 2 * Math.PI) % (2 * Math.PI)
            }
            async function me() {
                for (; ce.autoPush || ln.inTrap;) await Ee(0)
            }

            function ue(e) {
                return e[Math.floor(Math.random() * e.length)]
            }

            function ge(e, t, n) {
                const i = Math.cos(t) * n,
                    a = Math.sin(t) * n;
                e.x += i, e.y += a, console.log(`Player moved to: (${e.x}, ${e.y})`)
            }
            playerRadius = 45, _things = {get liztobj() {
                    return ne
                },
                get traps() {
                    return ln
                },
                get gameObjects() {
                    return te
                },
                get selectWeapon() {
                    return Ot
                },
                get my() {
                    return ce
                },
                get packet() {
                    return z
                },
                get closeAI() {
                    let e = ais.filter((e => e.visible));
                    if (!e.length) return;
                    let t = pe(Y.x, Y.y, e, weapons);
                    const n = function(e, t) {
                        const n = e.weapons,
                            i = weapons.find((e => e.id === n[0])),
                            a = weapons.find((e => e.id === n[1])),
                            o = de(e.x, e.y, t.x, t.y),
                            s = o <= i.range + 100,
                            r = a && o <= a.range || !1;
                        return s || r
                    }(Y, t, weapons);
                    return {
                        ai: t,
                        aiInRange: n,
                        targetDir: he(Y, t)
                    }
                },
                get player() {
                    return Y
                },
                get enemy() {
                    return {
                        enemy: pe(Y.x, Y.y, se),
                        get targetDir() {
                            return he(Y, this.enemy)
                        }
                    }
                },
                get enemy_() {
                    return se
                }
            }, adjPercent = 1, worldScale = 1.5;
            let fe = 25;
            const ye = new element("canvas").style({
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100vw",
                    height: "100vh",
                    zIndex: "10",
                    pointerEvents: "none"
                }),
                we = ye.element.getContext("2d");
            document.getElementById("gameCanvas").parentNode.insertBefore(ye.element, document.getElementById("gameCanvas"));
            let ke = new Set;
            steps = 6;
            class ve {
                constructor(e, t, n, i, a = null) {
                    this.x = e, this.y = t, this.g = n, this.h = i, this.f = n + i, this.parent = a
                }
            }

            function xe(e, t) {
                return Math.abs(e.x - t.x) + Math.abs(e.y - t.y)
            }

            function be(e) {
                const t = [];
                let n = e;
                for (; n;) t.unshift([n.x, n.y]), n = n.parent;
                return t
            }

            function _e() {
                we.clearRect(0, 0, ye.element.width, ye.element.height), ke.clear();
                const e = ye.element.width,
                    t = ye.element.height,
                    n = e / 2,
                    i = t / 2,
                    {
                        x: a,
                        y: o
                    } = _things.player;
                we.strokeStyle = "rgba(0, 0, 0, 0.3)";
                for (let n = 0; n <= e; n += fe)
                    for (let e = 0; e <= t; e += fe) we.strokeRect(n, e, fe, fe);
                _things.liztobj.filter(Se).forEach((e => {
                    const {
                        x: t,
                        y: s
                    } = e, r = n + (t - a) * worldScale, l = i + (s - o) * worldScale;
                    we.fillStyle = "rgba(255, 0, 0, 0.5)", we.fillRect(r - fe / 2, l - fe / 2, fe, fe), ke.add(`${r},${l}`)
                })), _things.enemy_.forEach((e => {
                    const {
                        x: t,
                        y: s
                    } = e, r = n + (t - a) * worldScale, l = i + (s - o) * worldScale;
                    ! function(e) {
                        we.fillStyle = "rgba(255, 255, 255, 0.8)";
                        for (let t = 0; t < Math.min(steps, e.length); t++) {
                            const [n, i] = e[t];
                            ke.has(`${n},${i}`) || we.fillRect(n - fe / 2, i - fe / 2, fe, fe)
                        }
                    }(function(e, t) {
                        const n = [new ve(e[0], e[1], 0, xe(e, t))],
                            i = new Set;
                        for (; n.length > 0;) {
                            n.sort(((e, t) => e.f - t.f));
                            const e = n.shift(),
                                a = `${e.x},${e.y}`;
                            if (e.x === t[0] && e.y === t[1]) return be(e);
                            i.add(a);
                            const o = [
                                [e.x + fe, e.y],
                                [e.x - fe, e.y],
                                [e.x, e.y + fe],
                                [e.x, e.y - fe]
                            ];
                            for (const [a, s] of o) {
                                const o = `${a},${s}`;
                                if (ke.has(o) || i.has(o)) continue;
                                const r = e.g + 1,
                                    l = xe({
                                        x: a,
                                        y: s
                                    }, {
                                        x: t[0],
                                        y: t[1]
                                    }),
                                    c = new ve(a, s, r, l, e),
                                    d = n.find((e => e.x === a && e.y === s));
                                (!d || r < d.g) && n.push(c)
                            }
                        }
                        return []
                    }([n, i], [r, l]))
                }))
            }

            function Ie() {
                _things.player.moveDir && _things.packet("a", null, 1)
            }

            function Ce(e, t, n) {
                const i = Math.PI / 4;
                let a = t;
                for (let o of n) {
                    const n = o.x - e.x,
                        s = o.y - e.y;
                    if (Math.hypot(n, s) < 60) {
                        let e = Math.atan2(s, n) - t;
                        if (e > Math.PI && (e -= 2 * Math.PI), e < -Math.PI && (e += 2 * Math.PI), Math.abs(e) < i) {
                            e > 0 ? a -= i : a += i, a = (a + 2 * Math.PI) % (2 * Math.PI);
                            break
                        }
                    }
                }
                return a
            }

            function Se(e) {
                return e.health && !e.ignoreCollision && !e.hideFromEnemy || ["spikes", "greater spikes", "poison spikes", "spinning spikes", "pit trap"].includes(e.name)
            }

            function Te(e, t) {
                const n = [];
                return t.forEach((t => {
                    if (Se(t)) {
                        de(e.x, e.y, t.x, t.y) < 500 && n.push(t)
                    }
                })), n
            }
            window.resizeCanvas = function() {
                ye.element.width = window.innerWidth, ye.element.height = window.innerHeight, _e()
            };
            autoGo = !1, breaker = !1, isMain = !1, useSpam = !1, farmAi = 0, autoShield = !0, hasShield = !1, followID = !1, holdingShield = !1, autoRuby = 0, breakOnly = !1, aimRuby = 0;
            let De = !1;
            rubyDir = -.63, onlybreaker = !1, chat = e => _things.packet("6", e);
            var Me = !1;
            let Ue = 0;
            var Ee = e => new Promise((t => setTimeout(t, e)));

            function Pe(e, t) {
                return _things.liztobj.filter((e => e.active && e.render)).filter((n => {
                    const {
                        x: i,
                        y: a,
                        scale: o
                    } = n, s = o / 2, r = e.x, l = e.y, c = t.x - r, d = t.y - l, p = r - i, h = l - a, m = c * c + d * d, u = 2 * (p * c + h * d);
                    let g = u * u - 4 * m * (p * p + h * h - s * s);
                    if (g < 0) return !1; {
                        g = Math.sqrt(g);
                        const e = (-u - g) / (2 * m),
                            t = (-u + g) / (2 * m);
                        return e >= 0 && e <= 1 || t >= 0 && t <= 1
                    }
                })).filter((e => !!e.name && (!e.name.includes("trap") && !e.name.includes("form"))))
            }

            function Be(e) {
                z("6", e)
            }

            function Oe(e, t) {
                return e.find((e => e.id == t))
            }

            function Ae(e, t) {
                return e.find((e => e.sid == t))
            }

            function Re(e) {
                return Ae(Z, e)
            }

            function He(e) {
                return Ae(ais, e)
            }

            function We(e) {
                return Ae(te, e)
            }!async function() {
                for (;;) {
                    await Ee(0);
                    let e = !!_things.player && _things.player.health >= .01;
                    De != e && (console.log(e ? "Alive" : "Died"), e && autoRubyOnSpawn && (autoRuby = 1, await Ee(200))), De = e, Y && Ue != Y.age && (Ue = Y.age, items2[Ue - 1]) && (console.log("test", Y.age, Ue, items2[Ue - 1]), _things.packet("H", items2[Ue - 1]), autoGo && Ie(), await Ee(300))
                }
            }(), autoBow = !1, async function() {
                    for (var e, t = e => new Promise((t => setTimeout(t, e)));;) try {
                        if (Y && GM_setValue(Y.id, {
                                x: Y.x,
                                y: Y.y
                            }), !autoGo && isMain) {
                            isMain && GM_setValue("mainPos", {
                                x: Y.x,
                                y: Y.y
                            }), await t(0);
                            continue
                        }
                        if (!autoGo) {
                            await t(0);
                            continue
                        }
                        if (ce.autoAim = !1, bn.left = !1, bn.right = !1, Yt) {
                            Ie(), await t(0);
                            continue
                        }
                        let h = !1,
                            m = _things.player.items.includes(17) || _things.player.itemCounts.hasOwnProperty("7");
                        await me();
                        let u = GM_getValue("stay") ? Y : GM_getValue("mainPos");
                        const g = toRad(ue([0, 0, -20, 20, -25, 25])),
                            f = _things.enemy.enemy;
                        var n = Y.weapons,
                            i = weapons.find((e => e.id === n[0])),
                            a = weapons.find((e => e.id === n[1])),
                            o = i.dmg < 9 && a ? a : i,
                            s = (_things.player.weapons.indexOf(_things.player.weaponIndex), _things.liztobj.filter(((e, t) => (t = e).active && _things.liztobj.includes(e) && t.render))),
                            r = s.filter((e => e.id && !e.name.includes("mill") && !e.name.includes("mill"))),
                            l = s.filter((e => e.id && !(e.name.includes("pike") || e.name.includes("trap"))));
                        r.filter((e => !(e.name.includes("pike") || e.name.includes("rap"))));
                        const y = getEl("weaponGrind").checked ? [] : r.filter((e => e.name.includes("port")));
                        r = r.filter((e => !e.name.includes("port")));
                        const w = void 0 !== a ? .projectile,
                            k = (pe(Y.x, Y.y, r), r.filter((e => de(u.x, u.y, e.x, e.y) <= 500))),
                            v = l.filter((e => de(Y.x, Y.y, e.x, e.y) <= 500)),
                            x = Te(Y, _things.liztobj),
                            b = f && _things.enemy.targetDir + g,
                            _ = f && de(Y.x, Y.y, f.x, f.y),
                            I = 198;
                        autoShield = GM_getValue("shield") && 11 == _things.player.weapons[1] || !1;
                        let C = !_things.liztobj.filter(((e, t) => (t = e).active && _things.liztobj.includes(e) && t.render)).filter((e => !!e.id)).length || (e = pe(_things.player.x, _things.player.y, _things.liztobj.filter(((e, t) => (t = e).active && _things.liztobj.includes(e) && t.render)).filter((e => !!e.id))), de(_things.player.x, _things.player.y, e.x, e.y) < 170);
                        if (autoRuby && m && _things.player.age >= 8 && C) {
                            getEl("weaponGrind").checked = !0;
                            let e = 0;
                            if (8 != i.id) {
                                console.log("Grinding main Weapon"), Ot(Y.weapons[e]), await t(300);
                                let n = 0;
                                const i = 50;
                                for (; 3 != Y.weaponVariant && n < i;)
                                    for (Ot(Y.weapons[e]), Pt(0 == Y.reloads[Y.weapons[e]] ? 40 : 6, 0), _things.packet("d", 1, rubyDir, 1), _things.packet("d", 0, rubyDir, 1), await t(99), Ie(); Y.reloads[Y.weapons[e]];) await t(0), waitingFor = "no !";
                                n >= i && console.log("Max attempts reached while grinding main weapon")
                            }
                            if (e = 1, Ot(Y.weapons[1]), await t(300), !(a = weapons.find((e => e.id === n[1]))).req) {
                                for (console.log("Doing Secondary :>"); 3 != Y.weaponVariant;)
                                    for (Ot(Y.weapons[e]), Pt(0 == Y.reloads[Y.weapons[e]] ? (setTimeout((() => {})), 40) : 6, 0), _things.packet("d", 1, rubyDir, 1), _things.packet("d", 0, rubyDir, 1), Ie(), await t(99); Y.reloads[Y.weapons[e]];) await t(0), waitingFor = "no !"
                            }
                            Ot(Y.weapons[0]), autoRuby = !1, getEl("weaponGrind").checked = !1, await t(300);
                            continue
                        }
                        autoRuby && console.log("Waiting for Stuff?!", {
                            autoRuby: autoRuby,
                            hasTurrent: m,
                            age: _things.player.age
                        });
                        var c = f ? Pe(_things.enemy ? .enemy, _things.player) : [];
                        f && se.forEach((e => {
                            let t = weapons.find((t => t.id == e.primaryIndex && t.req));
                            t && t.name && (t = 0 == e.reloads[t.id] && e.dir.toFixed(1) == he(e, Y).toFixed(1)), ce.autoAim = !1;
                            let n = he(Y, e);
                            t && (z("D", n), h = !0)
                        })), breaker = GM_getValue("breaker") || !1, !Me && Me != breaker && f ? chat("Sorry but this bot gotta blast") : Me && Me != breaker && f && chat("Time for Some action :p"), Me = breaker, useSpam = GM_getValue("useSpam") || !1, farmAi = GM_getValue("farmAi") || !1, isMain = !1;
                        var d = !1;
                        y.forEach((e => {
                            const t = de(Y.x, Y.y, e.x, e.y),
                                n = he(Y, e);
                            if (t < 300) {
                                const e = _things.player.moveDir;
                                let t, i = n - e;
                                return i > Math.PI ? i -= 2 * Math.PI : i < -Math.PI && (i += 2 * Math.PI), t = i > 0 ? e - .5 : e + .5, t = (t + 2 * Math.PI) % (2 * Math.PI), d = !0, void _things.packet("a", t, 1)
                            }
                        })), autoChat = !1;
                        if (autoBow && f && !breaker) {
                            if (console.log({
                                    hasRanged: w,
                                    closestEnemy: f,
                                    autoBow: autoBow,
                                    closeObjs: c
                                }), c.length) {
                                const e = pe(Y.x, Y.y, c);
                                let t = 0;
                                (e.name ? .includes("pike") || e.name ? .includes("trap") && !i.name.includes("tick")) && (t = 1);
                                const a = he(Y, e),
                                    o = de(Y.x, Y.y, e.x, e.y),
                                    s = (weapons.filter((e => 0 == e.type)).find((e => e.id === n[1])) || weapons.find((e => e.id === n[0]))).range + 30;
                                var p = t ? Y.weapons[0] : 10 == _things.player.weaponIndex || 10 === _things.player.weapons[1] ? 10 : _things.player.weapons[0];
                                if (o <= s) Ot(p), !d && Ie(), !Y.reloads[p] && (Pt(0 == Y.reloads[p] ? 40 : 6, 0), _things.packet("d", 1, a, 1), _things.packet("d", 0, a, 1));
                                else if (ge(Y, a, 25), !d) {
                                    let e = Ce(Y, a, x);
                                    _things.packet("a", e, 1)
                                }
                            } else if (!Y.reloads[Y.weapons[1]])
                                if (Pt(1, 0), setTimeout((() => {
                                        Pt(20, 0)
                                    }), 100), ce.autoAim = !0, Ot(Y.weapons[1]), _things.packet("d", 1, b, 1), _things.packet("d", 0, b, 1), _ < a ? .range / 4) _things.packet("a", Ce(Y, desiredDir, x) + toRad(180), 1);
                                else if (_ > a ? .range / 2) {
                                let e = b + toRad(ue([45, -45])),
                                    t = Ce(Y, e, x);
                                _things.packet("a", t, 1), d = 1
                            } else Ie()
                        } else if (farmAi && _things.closeAI) {
                            const e = _things.closeAI.ai,
                                t = _things.player,
                                n = de(e.x, e.y, t.x, t.y) - o.range / 2,
                                i = 250,
                                a = 120,
                                s = Te(t, _things.liztobj);
                            if (n < i && n > a) 11 === t.tailIndex && Pt(7, 1), t.reloads[o.id] || (Pt(7, 0), _things.packet("d", 1, _things.closeAI.targetDir, 1), _things.packet("d", 0, _things.closeAI.targetDir, 1)), Ie();
                            else if (n > i) {
                                let n = Ce(t, he(t, e), s);
                                _things.packet("a", n, 1)
                            } else {
                                let n = he(t, e) + Math.PI;
                                n = (n + 2 * Math.PI) % (2 * Math.PI);
                                let i = Ce(t, n, s);
                                _things.packet("a", i, 1), t.reloads[o.id] || (Pt(7, 0), _things.packet("d", 1, _things.closeAI.targetDir, 1), _things.packet("d", 0, _things.closeAI.targetDir, 1))
                            }
                        } else if (!f || breaker || onlybreaker || autoBow) {
                            if (u)
                                if (k.length > 0) {
                                    const e = pe(Y.x, Y.y, k);
                                    let t = 0;
                                    (e.name ? .includes("pike") || e.name ? .includes("trap") && !i.name.includes("tick")) && (t = 1);
                                    const a = he(Y, e),
                                        o = de(Y.x, Y.y, e.x, e.y),
                                        s = (weapons.filter((e => 0 == e.type)).find((e => e.id === n[1])) || weapons.find((e => e.id === n[0]))).range + 30;
                                    p = t ? Y.weapons[0] : 10 == _things.player.weaponIndex || 10 === _things.player.weapons[1] ? 10 : _things.player.weapons[0];
                                    if (o <= s) Ot(p), !d && Ie(), !Y.reloads[p] && (Pt(0 == Y.reloads[p] ? 40 : 6, 0), _things.packet("d", 1, a, 1), _things.packet("d", 0, a, 1));
                                    else if (ge(Y, a, 25), !d) {
                                        let e = Ce(Y, a, x);
                                        _things.packet("a", e, 1)
                                    }
                                } else {
                                    const e = de(Y.x, Y.y, u.x, u.y);
                                    let n = he(Y, u) + g;
                                    if (e <= 300) Ie(), await t(100);
                                    else {
                                        if (v.length > 0) {
                                            const e = pe(Y.x, Y.y, v);
                                            let t = 0;
                                            (e.name.includes("pike") || e.name.includes("trap") && !i.name.includes("tick")) && (t = 1);
                                            const n = he(Y, e),
                                                a = de(Y.x, Y.y, e.x, e.y),
                                                o = 110;
                                            console.log({
                                                range: o,
                                                dist: a,
                                                dir: n,
                                                targetItem: e
                                            });
                                            p = t ? Y.weapons[0] : 10 == _things.player.weaponIndex || 10 === _things.player.weapons[1] ? 10 : _things.player.weapons[0];
                                            a <= o && (Ot(p), !Y.reloads[p] && (Pt(0 == Y.reloads[p] ? 40 : 6, 0), _things.packet("d", 1, n, 1), _things.packet("d", 0, n, 1)))
                                        }
                                        if (console.log("Going", {
                                                itemsToBreak: k
                                            }), !d) {
                                            let e = Ce(Y, n, x);
                                            _things.packet("a", e, 1)
                                        }
                                        _things.traps.inTrap
                                    }
                                }
                        } else {
                            autoChat = 1;
                            let e = _ <= weapons.find((e => e.id == (_things.enemy.enemy.primaryIndex || 5))).range + 25,
                                t = _ <= I && e > I && 11 == _things.player.weapons[1];
                            if (shielding = t, _ <= I - (autoShield ? 0 : 50)) {
                                if (autoShield || Qn.antibull || ln.inTrap || !useSpam || 11 == _things.player.skinIndex || 11 == _things.enemy.enemy.skinIndex)
                                    if (autoShield && _things.enemy.enemy && 11 == _things.player.weapons[1] && 11 != _things.player.weaponCode) {
                                        ce.autoAim = !0, bn.left = 0, Ot(Y.weapons[1]), shielding = !0, d = 1;
                                        let e = b + toRad(15),
                                            t = Ce(Y, e, x);
                                        _things.packet("a", t, 1)
                                    } else bn.left = 0, ce.autoAim = 0;
                                else bn.left = 1, ce.autoAim = !0;
                                if (_ < 120) {
                                    let e = b + toRad(ue([45, -45])),
                                        t = Ce(Y, e, x);
                                    _things.packet("a", t, 1)
                                } else {
                                    let e = Ce(Y, b + g, x);
                                    _things.packet("a", e, 1), _things.packet("d", 1, e, 1), _things.packet("d", 0, e, 1)
                                }
                            } else {
                                if (s.filter((e => !e.ignoreCollision)).length > 0) {
                                    const e = pe(Y.x, Y.y, s.filter((e => !e.ignoreCollision)));
                                    let t = 0;
                                    (e.name.includes("pike") || e.name.includes("trap") && !i.name.includes("tick")) && (t = 1);
                                    const n = he(Y, e),
                                        a = de(Y.x, Y.y, e.x, e.y),
                                        o = 110;
                                    console.log({
                                        range: o,
                                        dist: a,
                                        dir: n,
                                        targetItem: e
                                    });
                                    var p = t ? Y.weapons[0] : 10 == _things.player.weaponIndex || 10 === _things.player.weapons[1] ? 10 : _things.player.weapons[0];
                                    a <= o && (Ot(p), !Y.reloads[p] && (Pt(0 == Y.reloads[p] ? 40 : 6, 0), _things.packet("d", 1, n, 1), _things.packet("d", 0, n, 1)))
                                }
                                if (t && 11 == _things.player.weapons[1] && 11 != _things.player.weaponCode && (ce.autoAim = !0, Ot(Y.weapons[1])), bn.left = 0, ce.autoAim = !1, _ > 500 && 10 != _things.player.weaponIndex && 10 == _things.player.weapons[1] ? Ot(Y.weapons[1]) : 11 == _things.player.weaponIndex && Ot(Y.weapons[0]), !d) {
                                    let e = Ce(Y, b, x);
                                    _things.packet("a", e, 1)
                                }
                                if (v.length > 0 && _ > 600) {
                                    const e = pe(Y.x, Y.y, v);
                                    let t = 0;
                                    (e.name.includes("pike") || e.name.includes("trap") && !i.name.includes("tick")) && (t = 1, br = 0);
                                    const n = he(Y, e),
                                        a = de(Y.x, Y.y, e.x, e.y),
                                        o = 110;
                                    console.log({
                                        range: o,
                                        dist: a,
                                        dir: n,
                                        targetItem: e
                                    });
                                    var p = t ? Y.weapons[0] : 10 == _things.player.weaponIndex || 10 === _things.player.weapons[1] ? 10 : _things.player.weapons[0];
                                    a <= o && (Ot(p), didHit = 1, !Y.reloads[p] && (Pt(0 == Y.reloads[p] ? 40 : 6, 0), _things.packet("d", 1, n, 1), _things.packet("d", 0, n, 1)))
                                }
                            }
                            _things.traps.inTrap && (ce.autoAim = !1);
                            _things.traps.inTrap
                        }
                        await t(_things.traps.inTrap ? 300 : 150)
                    } catch (e) {
                        console.log("Bot Error:", e), await t(1e3)
                    }
                }(),
                function() {
                    window.selects = [], info2 = {}, console.log("User is in fact playing moomoo OG"), ageBarBody.style.transition = "1s", items2 = {};
                    let e = [12, 13, 15, 9],
                        t = {
                            1: {
                                hand_axe: 1,
                                short_sword: 3,
                                polearm: 5,
                                daggers: 7,
                                stick: 8,
                                bat: 6
                            },
                            2: {
                                cookie: 17,
                                stonewall: 20
                            },
                            3: {
                                trap: 31,
                                boost: 32
                            },
                            4: {
                                greater_spike: 23,
                                mine: 29,
                                sapling: 30,
                                fast_mill: 27
                            },
                            5: {
                                hunting_bow: 9,
                                great_hammer: 10,
                                mc_grabby: 14,
                                wooden_shield: 11
                            },
                            6: {
                                cheese: 18,
                                castle_wall: 21,
                                turret: 33,
                                platform: 34,
                                healing_pad: 35,
                                blocker: 37,
                                teleport: 38
                            },
                            7: {
                                great_axe: 2,
                                crossbow: 12,
                                katana: 4,
                                power_mill: 28
                            },
                            8: {
                                repeater_crossbow: 13,
                                musket: 15,
                                poison_spike: 24,
                                spining_spike: 25,
                                spawnpad: 36
                            }
                        },
                        n = document.createElement("div");

                    function i(n, i) {
                        Object.keys(t[n]).find((e => t[n][e] === i));
                        console.log(n), e.includes(i) && (items2[5] && 9 === items2[5] || (items2[5] = 9, document.getElementById("sel5").value = 9), items2[7] && 12 === items2[7] || (items2[7] = 12, document.getElementById("sel7").value = 12)), 4 !== i || items2[1] && 3 === items2[1] || (items2[1] = 3, document.getElementById("sel1").value = 3), 2 !== i || items2[1] && 1 === items2[1] || (items2[1] = 1, document.getElementById("sel1").value = 1)
                    }
                    weapons.forEach((e => {
                            e.age && (t[e.age - 1][e.name.split(" ").join("_")] = e.id)
                        })),
                        function(e = ((e, t) => {
                            window.items2[t] = e.target.selectedOptions[0].value, console.log([t], e.target.selectedOptions[0].value)
                        }), a = document.createElement("br")) {
                            for (let e in t) {
                                n.append(document.createElement("br")), console.log(e);
                                let a = document.createElement("select");
                                window.selects.push([e, a]), a.id = "sel" + e, a.classname = e;
                                let o = document.createElement("span");
                                o.innerText = `Age ${e}:`, Object.keys(t[e]).forEach((n => {
                                    console.log(n, t[e][n]);
                                    let i = document.createElement("option");
                                    i.value = t[e][n], i.innerText = n, a.append(i)
                                })), n.append(o), n.append(a), a.onchange = function(e) {
                                    var t = e.target.value,
                                        n = e.target.classname;
                                    console.log("Age", n, "to", t), items2[n] = t, i(n, parseInt(t))
                                }
                            }
                            setupCard.append(n)
                        }(), window.spikes = [25, 23, 24, 6, 7, 9], info2.ageitems = t, info2.ageitems[0] = {
                            wood_wall: 19,
                            spike: 6,
                            windmill: 10
                        }, window.stoped = 1
                }(),
                function() {
                    var e = GM_getValue("prefix") || "!";
                    const t = {
                        prefix: function(t) {
                            t.length > 0 && (e = t[0], GM_setValue("prefix", e), Be(`Prefix now iz ${e} mew!`))
                        },
                        main: function() {
                            isMain = !isMain, Be("Main mode flip-flopped! XD")
                        },
                        bot: function() {
                            autoGo = !autoGo, Be(`Bo-o-o-otMode iz ${autoGo?"ON":"OFF"} now!`)
                        },
                        breaker: function() {
                            breaker = !GM_getValue("breaker", !1), GM_setValue("breaker", breaker), Be(`Breaker iz ${breaker?"ON":"OFF"} now!`)
                        },
                        useSpam: function() {
                            useSpam = !GM_getValue("useSpam", !1), GM_setValue("useSpam", useSpam), Be(`Spam mode iz ${useSpam?"ON":"OFF"} zzz!`)
                        },
                        farmAi: function() {
                            farmAi = !GM_getValue("farmAi", !1), GM_setValue("farmAi", farmAi), Be(`FarmAI iz ${farmAi?"ON":"OFF"} baaa!`)
                        },
                        spawn: function(e) {
                            if (NaN != Number(e))
                                for (let t = 0; t < e; t++) open(location.href, "bot")
                        },
                        stay: function() {
                            isMain = !1, GM_setValue("stay", !isMain), Be("Bots R sittin n chillin!")
                        },
                        follow: function(e = "d") {
                            e.length && NaN != Number(e) && console.log("wtf", e, e.length), isMain = !0, GM_setValue("stay", !isMain), Be("Main mode iz ON, followz!")
                        },
                        here: function() {
                            GM_setValue("mainPos", {
                                x: Y.x,
                                y: Y.y
                            }), Be("Main posishun saved! =^_^=")
                        },
                        shield: function() {
                            autoShield = !GM_getValue("shield", !1), GM_setValue("shield", autoShield), Be(`AutoShield iz ${autoShield?"ON":"OFF"}!`)
                        }
                    };
                    breaker = GM_getValue("breaker") || !1, useSpam = GM_getValue("useSpam") || !1, farmAi = GM_getValue("farmAi") || !1, document.getElementById("chatBox").addEventListener("keydown", (n => {
                        if ("Enter" === n.key) {
                            const i = n.target.value.trim();
                            if (i.startsWith(e)) {
                                n.preventDefault();
                                const a = i.slice(e.length).split(" ")[0],
                                    o = i.slice(e.length + a.length).trim().split(" ");
                                t.hasOwnProperty(a) && (t[a](o), n.target.value = "")
                            }
                        }
                    }))
                }();
            getEl("adCard"), getEl("promoImgHolder");
            getEl("chatButton").remove();
            let Le = getEl("gameCanvas"),
                je = Le.getContext("2d"),
                qe = getEl("mapDisplay"),
                Ve = qe.getContext("2d");
            qe.width = 300, qe.height = 300;
            let ze = getEl("storeMenu"),
                Ge = (getEl("storeHolder"), getEl("upgradeHolder")),
                Fe = getEl("upgradeCounter"),
                Ne = getEl("chatBox");
            Ne.autocomplete = "off", Ne.style.textAlign = "center", Ne.style.width = "18em";
            let Ye = getEl("chatHolder"),
                $e = getEl("actionBar"),
                Xe = (getEl("leaderboardData"), getEl("itemInfoHolder"));
            getEl("menuCardHolder"), getEl("mainMenu");
            getEl("mainMenu").style.backgroundImage = "url('https://cdn.discordapp.com/attachments/1198742281755316317/1202991399532896347/wallpaper.jpg?ex=65cf780c&is=65bd030c&hm=c6311b336f8438208363736b853fa27c7508a0f76a67834df50dc176812cb14c&')";
            getEl("diedText");
            let Je, Ze, Ke, Qe, et, tt, nt, it, at = i.maxScreenWidth,
                ot = i.maxScreenHeight,
                st = 1,
                rt = performance.now(),
                lt = 0,
                ct = 0,
                dt = getEl("allianceMenu"),
                pt = 1,
                ht = 0,
                mt = "#525252",
                ut = "#3d3f42",
                gt = 5.5,
                ft = !0,
                yt = {},
                wt = {
                    87: [0, -1],
                    38: [0, -1],
                    83: [0, 1],
                    40: [0, 1],
                    65: [-1, 0],
                    37: [-1, 0],
                    68: [1, 0],
                    39: [1, 0]
                },
                kt = 0,
                vt = !1,
                xt = {},
                bt = {
                    place: 0,
                    placeSpawnPads: 0
                },
                _t = [],
                It = !0;
            window.onblur = function() {
                It = !1
            }, window.onfocus = function() {
                It = !0, Y && Y.alive
            };
            let Ct = {
                avg: 0,
                max: 0,
                min: 0,
                delay: 0
            };

            function St() {
                let e = window.pingTime;
                document.getElementById("pingDisplay").innerText = "Ping: " + e + " ms`", (e > Ct.max || isNaN(Ct.max)) && (Ct.max = e), (e < Ct.min || isNaN(Ct.min)) && (Ct.min = e)
            }
            let Tt = [];
            class Dt {
                constructor() {
                    this.init = function(e, t, n, i, a, o, s) {
                        this.x = e, this.y = t, this.color = s, this.scale = 3.5 * n, this.weight = 50, this.startScale = 1.2 * this.scale, this.maxScale = 1.5 * n, this.minScale = .5 * n, this.scaleSpeed = .7, this.speed = i, this.speedMax = i, this.life = a, this.maxLife = a, this.text = o, this.movSpeed = i
                    }, this.update = function(e) {
                        this.life && (this.life -= e, this.scaleSpeed, this.y -= this.speed * e, this.scale -= .8, this.scale >= this.maxScale && (this.scale = this.maxScale, this.scaleSpeed *= -.5, this.speed = .75 * this.speed), this.life <= 0 && (this.life = 0))
                    }, this.render = function(e, t, n) {
                        e.lineWidth = 10, e.strokeStyle = ut, e.fillStyle = this.color, e.globalAlpha = 1, e.font = this.scale + "px HammerSmith One", e.strokeText(this.text, this.x - t, this.y - n), e.fillText(this.text, this.x - t, this.y - n), e.globalAlpha = 1
                    }
                }
            }
            class Mt {
                constructor(e, t, n, i, a, o, s, r, l) {
                    this.x = e, this.y = t, this.lastDir = n, this.dir = n + Math.PI, this.buildIndex = i, this.weaponIndex = a, this.weaponVariant = o, this.skinColor = s, this.scale = r, this.visScale = 0, this.name = l, this.alpha = 1, this.active = !0, this.animate = function(e) {
                        let t = Kt.getAngleDist(this.lastDir, this.dir);
                        t > .01 ? this.dir += t / 20 : this.dir = this.lastDir, this.visScale < this.scale && (this.visScale += e / (this.scale / 2), this.visScale >= this.scale && (this.visScale = this.scale)), this.alpha -= e / 3e4, this.alpha <= 0 && (this.alpha = 0, this.active = !1)
                    }
                }
            }
            class Ut {
                constructor(e, t, n, i, a, o, s, r, l, c, d, p, h, m) {
                    this.id = e, this.sid = t, this.tmpScore = 0, this.team = null, this.latestSkin = 0, this.oldSkinIndex = 0, this.skinIndex = 0, this.latestTail = 0, this.oldTailIndex = 0, this.tailIndex = 0, this.hitTime = 0, this.lastHit = 0, this.showName = "NOOO", this.tails = {};
                    for (let e = 0; e < d.length; ++e) d[e].price <= 0 && (this.tails[d[e].id] = 1);
                    this.skins = {};
                    for (let e = 0; e < c.length; ++e) c[e].price <= 0 && (this.skins[c[e].id] = 1);
                    this.points = 0, this.dt = 0, this.hidden = !1, this.itemCounts = {}, this.isPlayer = !0, this.pps = 0, this.moveDir = void 0, this.skinRot = 0, this.lastPing = 0, this.iconIndex = 0, this.skinColor = 0, this.dist2 = 0, this.aim2 = 0, this.maxSpeed = 1, this.chat = {
                        message: null,
                        count: 0
                    }, this.circle = !1, this.cAngle = 0, this.spawn = function(e) {
                        this.attacked = !1, this.timeDamaged = 0, this.timeHealed = 0, this.pinge = 0, this.millPlace = "NOOO", this.lastshamecount = 0, this.death = !1, this.spinDir = 0, this.sync = !1, this.antiBull = 0, this.bullTimer = 0, this.poisonTimer = 0, this.active = !0, this.alive = !0, this.lockMove = !1, this.lockDir = !1, this.minimapCounter = 0, this.chatCountdown = 0, this.shameCount = 0, this.shameTimer = 0, this.sentTo = {}, this.gathering = 0, this.gatherIndex = 0, this.shooting = {}, this.shootIndex = 9, this.autoGather = 0, this.animTime = 0, this.animSpeed = 0, this.mouseState = 0, this.buildIndex = -1, this.weaponIndex = 0, this.weaponCode = 0, this.weaponVariant = 0, this.primaryIndex = void 0, this.secondaryIndex = void 0, this.dmgOverTime = {}, this.noMovTimer = 0, this.maxXP = 300, this.XP = 0, this.age = 1, this.kills = 0, this.upgrAge = 2, this.upgradePoints = 0, this.x = 0, this.y = 0, this.oldXY = {
                            x: 0,
                            y: 0
                        }, this.zIndex = 0, this.xVel = 0, this.yVel = 0, this.slowMult = 1, this.dir = 0, this.dirPlus = 0, this.targetDir = 0, this.targetAngle = 0, this.maxHealth = 100, this.health = this.maxHealth, this.oldHealth = this.maxHealth, this.damaged = 0, this.scale = n.playerScale, this.speed = n.playerSpeed, this.resetMoveDir(), this.resetResources(e), this.items = [0, 3, 6, 10], this.weapons = [0], this.shootCount = 0, this.weaponXP = [], this.reloads = {
                            0: 0,
                            1: 0,
                            2: 0,
                            3: 0,
                            4: 0,
                            5: 0,
                            6: 0,
                            7: 0,
                            8: 0,
                            9: 0,
                            10: 0,
                            11: 0,
                            12: 0,
                            13: 0,
                            14: 0,
                            15: 0,
                            53: 0
                        }, this.bowThreat = {
                            9: 0,
                            12: 0,
                            13: 0,
                            15: 0
                        }, this.damageThreat = 0, this.inTrap = !1, this.canEmpAnti = !1, this.empAnti = !1, this.soldierAnti = !1, this.poisonTick = 0, this.bullTick = 0, this.setPoisonTick = !1, this.setBullTick = !1, this.antiTimer = 2
                    }, this.resetMoveDir = function() {
                        this.moveDir = void 0
                    }, this.resetResources = function(e) {
                        for (let t = 0; t < n.resourceTypes.length; ++t) this[n.resourceTypes[t]] = e ? 100 : 0
                    }, this.getItemType = function(e) {
                        let t = this.items.findIndex((t => t == e));
                        return -1 != t ? t : l.checkItem.index(e, this.items)
                    }, this.setData = function(e) {
                        this.id = e[0], this.sid = e[1], this.name = e[2], this.x = e[3], this.y = e[4], this.dir = e[5], this.health = e[6], this.maxHealth = e[7], this.scale = e[8], this.skinColor = e[9]
                    }, this.updateTimer = function() {
                        this.bullTimer -= 1, this.bullTimer <= 0 && (this.setBullTick = !1, this.bullTick = L.tick - 1, this.bullTimer = n.serverUpdateRate), this.poisonTimer -= 1, this.poisonTimer <= 0 && (this.setPoisonTick = !1, this.poisonTick = L.tick - 1, this.poisonTimer = n.serverUpdateRate)
                    }, this.update = function(e) {
                        if (this.active) {
                            let e = {
                                    skin: Oe(c, this.skinIndex),
                                    tail: Oe(d, this.tailIndex)
                                },
                                t = (this.buildIndex >= 0 ? .5 : 1) * (l.weapons[this.weaponIndex].spdMult || 1) * (e.skin && e.skin.spdMult || 1) * (e.tail && e.tail.spdMult || 1) * (this.y <= n.snowBiomeTop ? e.skin && e.skin.coldM ? 1 : n.snowSpeed : 1) * this.slowMult;
                            this.maxSpeed = t
                        }
                    };
                    let u = 0,
                        g = 0;
                    this.animate = function(e) {
                        this.animTime > 0 && (this.animTime -= e, this.animTime <= 0 ? (this.animTime = 0, this.dirPlus = 0, u = 0, g = 0) : 0 == g ? (u += e / (this.animSpeed * n.hitReturnRatio), this.dirPlus = i.lerp(0, this.targetAngle, Math.min(1, u)), u >= 1 && (u = 1, g = 1)) : (u -= e / (this.animSpeed * (1 - n.hitReturnRatio)), this.dirPlus = i.lerp(0, this.targetAngle, Math.max(0, u))))
                    }, this.startAnim = function(e, t) {
                        this.animTime = this.animSpeed = l.weapons[t].speed, this.targetAngle = e ? -n.hitAngle : -Math.PI, u = 0, g = 0
                    }, this.canSee = function(e) {
                        if (!e) return !1;
                        let t = Math.abs(e.x - this.x) - e.scale,
                            i = Math.abs(e.y - this.y) - e.scale;
                        return t <= n.maxScreenWidth / 2 * 1.3 && i <= n.maxScreenHeight / 2 * 1.3
                    }, this.judgeShame = function() {
                        if (this.lastshamecount = this.shameCount, this.oldHealth < this.health) {
                            if (this.hitTime) {
                                let e = L.tick - this.hitTime;
                                this.lastHit = L.tick, this.hitTime = 0, e < 2 ? this.shameCount++ : this.shameCount = Math.max(0, this.shameCount - 2)
                            }
                        } else this.oldHealth > this.health && (this.hitTime = L.tick)
                    }, this.addShameTimer = function() {
                        this.shameCount = 0, this.shameTimer = 30;
                        let e = setInterval((() => {
                            this.shameTimer--, this.shameTimer <= 0 && clearInterval(e)
                        }), 1e3)
                    }, this.isTeam = function(e) {
                        return this == e || this.team && this.team == e.team
                    }, this.findAllianceBySid = function(e) {
                        return this.team ? Q.find((t => t === e)) : null
                    }, this.checkCanInsta = function(e) {
                        let t = 0;
                        if (this.alive && vt) {
                            let i = {
                                    weapon: this.weapons[0],
                                    variant: this.primaryVariant,
                                    dmg: null == this.weapons[0] ? 0 : l.weapons[this.weapons[0]].dmg
                                },
                                a = {
                                    weapon: this.weapons[1],
                                    variant: this.secondaryVariant,
                                    dmg: null == this.weapons[1] ? 0 : l.weapons[this.weapons[1]].Pdmg
                                },
                                o = this.skins[7] && !e ? 1.5 : 1,
                                s = null != i.variant ? n.weaponVariants[i.variant].val : 1;
                            return null != i.weapon && 0 == this.reloads[i.weapon] && (t += i.dmg * s * o), null != a.weapon && 0 == this.reloads[a.weapon] && (t += a.dmg), this.skins[53] && this.reloads[53] <= (10 == Y.weapons[1] ? 0 : L.tickRate) && 22 != le.skinIndex && (t += 25), t *= 6 == le.skinIndex ? .75 : 1, t
                        }
                        return 0
                    }, this.manageReload = function() {
                        if (this.shooting[53] ? (this.shooting[53] = 0, this.reloads[53] = 2500 - L.tickRate) : this.reloads[53] > 0 && (this.reloads[53] = Math.max(0, this.reloads[53] - L.tickRate)), this.reloads[this.weaponIndex] <= 1e3 / 9) {
                            let e = this.weaponIndex,
                                t = ne.filter((e => (e.active || e.alive) && e.health < e.maxHealth && void 0 !== e.group && i.getDist(e, Y, 0, 2) <= l.weapons[Y.weaponIndex].range + e.scale));
                            for (let i = 0; i < t.length; i++) {
                                let a = t[i],
                                    o = (l.weapons[e].dmg, n.weaponVariants[J[(e < 9 ? "prima" : "seconda") + "ryVariant"]].val, l.weapons[e].sDmg, l.weapons[e].dmg * n.weaponVariants[J[(e < 9 ? "prima" : "seconda") + "ryVariant"]].val * (l.weapons[e].sDmg || 1));
                                a.health - o <= 0 && le.length && (Rt(le.dist2 < 1.8 * le.scale + 50 ? 4 : 2, Jn(a, Y) + Math.PI), console.log("preplaced"))
                            }
                        }
                        if (this.gathering || this.shooting[1]) this.gathering && (this.gathering = 0, this.reloads[this.gatherIndex] = l.weapons[this.gatherIndex].speed * (20 == this.skinIndex ? .78 : 1), this.attacked = !0), this.shooting[1] && (this.shooting[1] = 0, this.reloads[this.shootIndex] = l.weapons[this.shootIndex].speed * (20 == this.skinIndex ? .78 : 1), this.attacked = !0);
                        else if (this.attacked = !1, this.buildIndex < 0 && this.reloads[this.weaponIndex] > 0) {
                            if (this.reloads[this.weaponIndex] = Math.max(0, this.reloads[this.weaponIndex] - 110), this == Y && getEl("weaponGrind").checked)
                                for (let e = 0; e < 2 * Math.PI; e += Math.PI / 2) Ht(Y.getItemType(22), e);
                            0 == this.reloads[this.primaryIndex] && 0 == this.reloads[this.weaponIndex] && (this.antiBull++, L.tickBase((() => {
                                this.antiBull = 0
                            }), 1))
                        }
                    }, this.addDamageThreat = function(e) {
                        let t = {
                            weapon: this.primaryIndex,
                            variant: this.primaryVariant
                        };
                        t.dmg = null == t.weapon ? 45 : l.weapons[t.weapon].dmg;
                        let i = {
                            weapon: this.secondaryIndex,
                            variant: this.secondaryVariant
                        };
                        i.dmg = null == i.weapon ? 75 : l.weapons[i.weapon].Pdmg;
                        let a = null != t.variant ? n.weaponVariants[t.variant].val : 1.18,
                            o = null != i.variant ? [9, 12, 13, 15].includes(i.weapon) ? 1 : n.weaponVariants[i.variant].val : 1.18;
                        null != t.weapon && 0 != this.reloads[t.weapon] || (this.damageThreat += t.dmg * a * 1.5), null != i.weapon && 0 != this.reloads[i.weapon] || (this.damageThreat += i.dmg * o), this.reloads[53] <= L.tickRate && (this.damageThreat += 25), this.damageThreat *= 6 == e.skinIndex ? .75 : 1, this.isTeam(e) || this.dist2 <= 300 && (e.damageThreat += this.damageThreat)
                    }
                }
            }

            function Et(e) {
                Y.reloads[e] = 0, z("H", e)
            }

            function Pt(e, t) {
                let n = Y.skins[6] ? 6 : 0;
                if (Y.alive && vt)
                    if (0 == t)
                        if (Y.skins[e]) Y.latestSkin != e && z("c", 0, e, 0);
                        else if (d.autoBuyEquip) {
                    let t = Oe(nn, e);
                    t && Y.points >= t.price ? (z("c", 1, e, 0), z("c", 0, e, 0)) : Y.latestSkin != n && z("c", 0, n, 0)
                } else Y.latestSkin != n && z("c", 0, n, 0);
                else if (1 == t) {
                    if (A && 11 != e && 0 != e) return void(0 != Y.latestTail && z("c", 0, 0, 1));
                    if (Y.tails[e]) Y.latestTail != e && z("c", 0, e, 1);
                    else if (d.autoBuyEquip) {
                        let t = Oe(an, e);
                        t && Y.points >= t.price ? (z("c", 1, e, 1), z("c", 0, e, 1)) : 0 != Y.latestTail && z("c", 0, 0, 1)
                    } else 0 != Y.latestTail && z("c", 0, 0, 1)
                }
            }

            function Bt(e, t) {
                z("G", e, t)
            }

            function Ot(e, t) {
                t || (Y.weaponCode = e), z("G", e, 1)
            }

            function At() {
                z("K", 1, 1)
            }

            function Rt(e, t, n) {
                try {
                    if (null == e) return;
                    let a = Qt.list[Y.items[e]],
                        o = Y.scale + a.scale + (a.placeOffset || 0),
                        s = Y.x2 + o * Math.cos(t),
                        r = Y.y2 + o * Math.sin(t);
                    (Y.alive && vt && null == Y.itemCounts[a.group.id] || Y.itemCounts[a.group.id] < (i.isSandbox ? 299 : a.group.limit ? a.group.limit : 99)) && (Bt(Y.items[e]), function(e, t) {
                        z("d", e, t, 1)
                    }(1, t), Ot(Y.weaponCode, 1), n && getEl("placeVis").checked && (Tt.push({
                        x: s,
                        y: r,
                        name: a.name,
                        scale: a.scale,
                        dir: t
                    }), L.tickBase((() => {
                        Tt.shift()
                    }), 1)))
                } catch (e) {}
            }

            function Ht(e, t) {
                try {
                    if (null == e) return;
                    let n = Qt.list[Y.items[e]],
                        i = Y.scale + n.scale + (n.placeOffset || 0),
                        a = Y.x2 + i * Math.cos(t),
                        o = Y.y2 + i * Math.sin(t);
                    en.checkItemLocation(a, o, n.scale, .6, n.id, !1, Y) && Rt(e, t, 1)
                } catch (e) {}
            }

            function Wt() {
                return 6 == Y.latestSkin ? .75 : 1
            }

            function Lt(e) {
                return se.filter((e => ({
                    three: e.attacked
                }.three)))
            }

            function jt() {
                for (let e = 0; e < (100 == Y.health ? 0 : 45 != Y.skinIndex && 56 != Y.skinIndex ? Math.ceil((100 - Y.health) / Qt.list[Y.items[0]].healing) : 0); e++) Rt(0, In())
            }

            function qt(e) {
                ce.antiSync = !0;
                let t = setInterval((() => {
                    Y.shameCount < 5 && Rt(0, In())
                }), 75);
                setTimeout((() => {
                    clearInterval(t), setTimeout((() => {
                        ce.antiSync = !1
                    }), L.tickRate)
                }), L.tickRate)
            }

            function Vt(e, t) {
                if (Y.y2 >= i.mapScale / 2 - i.riverWidth / 2 && Y.y2 <= i.mapScale / 2 + i.riverWidth / 2) {
                    if (t) return 31;
                    Pt(31, 0)
                } else if (Y.y2 <= i.snowBiomeTop) {
                    if (t) return e && null == Y.moveDir ? 22 : 15;
                    Pt(e && null == Y.moveDir ? 22 : 15, 0)
                } else {
                    if (t) return e && null == Y.moveDir ? 22 : 12;
                    Pt(e && null == Y.moveDir ? 22 : 12, 0)
                }
                if (t) return 0
            }
            let zt = [],
                Gt = {},
                Ft = function() {
                    return 10 == Y.weapons[1] && (Gt.health > Qt.weapons[Y.weapons[0]].dmg || 5 == Y.weapons[0])
                },
                Nt = 0,
                Yt = !1;
            let $t, Xt, Jt, Zt = [],
                Kt = new class {
                    constructor() {
                        let e = Math.abs,
                            t = (Math.cos, Math.sin, Math.pow, Math.sqrt),
                            n = Math.atan2,
                            i = Math.PI,
                            a = this;
                        this.round = function(e, t) {
                            return Math.round(e * t) / t
                        }, this.toRad = function(e) {
                            return e * (i / 180)
                        }, this.toAng = function(e) {
                            return e / (i / 180)
                        }, this.randInt = function(e, t) {
                            return Math.floor(Math.random() * (t - e + 1)) + e
                        }, this.randFloat = function(e, t) {
                            return Math.random() * (t - e + 1) + e
                        }, this.lerp = function(e, t, n) {
                            return e + (t - e) * n
                        }, this.decel = function(e, t) {
                            return e > 0 ? e = Math.max(0, e - t) : e < 0 && (e = Math.min(0, e + t)), e
                        }, this.getDistance = function(e, n, i, a) {
                            return t((i -= e) * i + (a -= n) * a)
                        }, this.getDist = function(e, n, i, a) {
                            let o = 0 == i ? e.x : 1 == i ? e.x1 : 2 == i ? e.x2 : 3 == i && e.x3,
                                s = 0 == i ? e.y : 1 == i ? e.y1 : 2 == i ? e.y2 : 3 == i && e.y3,
                                r = {
                                    x: 0 == a ? n.x : 1 == a ? n.x1 : 2 == a ? n.x2 : 3 == a && n.x3,
                                    y: 0 == a ? n.y : 1 == a ? n.y1 : 2 == a ? n.y2 : 3 == a && n.y3
                                };
                            return t((r.x -= o) * r.x + (r.y -= s) * r.y)
                        }, this.getDirection = function(e, t, i, a) {
                            return n(t - a, e - i)
                        }, this.getDirect = function(e, t, i, a) {
                            let o = 0 == i ? e.x : 1 == i ? e.x1 : 2 == i ? e.x2 : 3 == i && e.x3,
                                s = 0 == i ? e.y : 1 == i ? e.y1 : 2 == i ? e.y2 : 3 == i && e.y3,
                                r = 0 == a ? t.x : 1 == a ? t.x1 : 2 == a ? t.x2 : 3 == a && t.x3,
                                l = 0 == a ? t.y : 1 == a ? t.y1 : 2 == a ? t.y2 : 3 == a && t.y3;
                            return n(s - l, o - r)
                        }, this.getAngleDist = function(t, n) {
                            let a = e(n - t) % (2 * i);
                            return a > i ? 2 * i - a : a
                        }, this.isNumber = function(e) {
                            return "number" == typeof e && !isNaN(e) && isFinite(e)
                        }, this.isString = function(e) {
                            return e && "string" == typeof e
                        }, this.kFormat = function(e) {
                            return e > 999 ? (e / 1e3).toFixed(1) + "k" : e
                        }, this.sFormat = function(e) {
                            let t = [{
                                num: 1e3,
                                string: "k"
                            }, {
                                num: 1e6,
                                string: "m"
                            }, {
                                num: 1e9,
                                string: "b"
                            }, {
                                num: 1e12,
                                string: "q"
                            }].reverse().find((t => e >= t.num));
                            return t ? (e / t.num).toFixed(1) + t.string : e
                        }, this.capitalizeFirst = function(e) {
                            return e.charAt(0).toUpperCase() + e.slice(1)
                        }, this.fixTo = function(e, t) {
                            return parseFloat(e.toFixed(t))
                        }, this.sortByPoints = function(e, t) {
                            return parseFloat(t.points) - parseFloat(e.points)
                        }, this.lineInRect = function(e, t, n, i, a, o, s, r) {
                            let l = a,
                                c = s;
                            if (a > s && (l = s, c = a), c > n && (c = n), l < e && (l = e), l > c) return !1;
                            let d = o,
                                p = r,
                                h = s - a;
                            if (Math.abs(h) > 1e-7) {
                                let e = (r - o) / h,
                                    t = o - e * a;
                                d = e * l + t, p = e * c + t
                            }
                            if (d > p) {
                                let e = p;
                                p = d, d = e
                            }
                            return p > i && (p = i), d < t && (d = t), !(d > p)
                        }, this.containsPoint = function(e, t, n) {
                            let i = e.getBoundingClientRect(),
                                a = i.left + window.scrollX,
                                o = i.top + window.scrollY,
                                s = i.width,
                                r = i.height;
                            return t > a && t < a + s && (n > o && n < o + r)
                        }, this.mousifyTouchEvent = function(e) {
                            let t = e.changedTouches[0];
                            e.screenX = t.screenX, e.screenY = t.screenY, e.clientX = t.clientX, e.clientY = t.clientY, e.pageX = t.pageX, e.pageY = t.pageY
                        }, this.hookTouchEvents = function(e, t) {
                            let n = !t,
                                i = !1,
                                o = !1;

                            function s(t) {
                                a.mousifyTouchEvent(t), window.setUsingTouch(!0), n && (t.preventDefault(), t.stopPropagation()), i && (e.onclick && e.onclick(t), e.onmouseout && e.onmouseout(t), i = !1)
                            }
                            e.addEventListener("touchstart", this.checkTrusted((function(t) {
                                a.mousifyTouchEvent(t), window.setUsingTouch(!0), n && (t.preventDefault(), t.stopPropagation());
                                e.onmouseover && e.onmouseover(t);
                                i = !0
                            })), o), e.addEventListener("touchmove", this.checkTrusted((function(t) {
                                a.mousifyTouchEvent(t), window.setUsingTouch(!0), n && (t.preventDefault(), t.stopPropagation());
                                a.containsPoint(e, t.pageX, t.pageY) ? i || (e.onmouseover && e.onmouseover(t), i = !0) : i && (e.onmouseout && e.onmouseout(t), i = !1)
                            })), o), e.addEventListener("touchend", this.checkTrusted(s), o), e.addEventListener("touchcancel", this.checkTrusted(s), o), e.addEventListener("touchleave", this.checkTrusted(s), o)
                        }, this.removeAllChildren = function(e) {
                            for (; e.hasChildNodes();) e.removeChild(e.lastChild)
                        }, this.generateElement = function(e) {
                            let t = document.createElement(e.tag || "div");

                            function n(n, i) {
                                e[n] && (t[i] = e[n])
                            }
                            n("text", "textContent"), n("html", "innerHTML"), n("class", "className");
                            for (let n in e) {
                                switch (n) {
                                    case "tag":
                                    case "text":
                                    case "html":
                                    case "class":
                                    case "style":
                                    case "hookTouch":
                                    case "parent":
                                    case "children":
                                        continue
                                }
                                t[n] = e[n]
                            }
                            if (t.onclick && (t.onclick = this.checkTrusted(t.onclick)), t.onmouseover && (t.onmouseover = this.checkTrusted(t.onmouseover)), t.onmouseout && (t.onmouseout = this.checkTrusted(t.onmouseout)), e.style && (t.style.cssText = e.style), e.hookTouch && this.hookTouchEvents(t), e.parent && e.parent.appendChild(t), e.children)
                                for (let n = 0; n < e.children.length; n++) t.appendChild(e.children[n]);
                            return t
                        }, this.checkTrusted = function(e) {
                            return function(t) {
                                t && t instanceof Event && (!t || "boolean" != typeof t.isTrusted || t.isTrusted) && e(t)
                            }
                        }, this.randomString = function(e) {
                            let t = "",
                                n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                            for (let i = 0; i < e; i++) t += n.charAt(Math.floor(62 * Math.random()));
                            return t
                        }, this.countInArray = function(e, t) {
                            let n = 0;
                            for (let i = 0; i < e.length; i++) e[i] === t && n++;
                            return n
                        }, this.hexToRgb = function(e) {
                            return e.slice(1).match(/.{1,2}/g).map((e => parseInt(e, 16)))
                        }, this.getRgb = function(e, t, n) {
                            return [e / 255, t / 255, n / 255].join(", ")
                        }
                    }
                },
                Qt = new class {
                    constructor() {
                        this.groups = [{
                            id: 0,
                            name: "food",
                            layer: 0
                        }, {
                            id: 1,
                            name: "walls",
                            place: !0,
                            limit: 30,
                            layer: 0
                        }, {
                            id: 2,
                            name: "spikes",
                            place: !0,
                            limit: 15,
                            layer: 0
                        }, {
                            id: 3,
                            name: "mill",
                            place: !0,
                            limit: 7,
                            layer: 1
                        }, {
                            id: 4,
                            name: "mine",
                            place: !0,
                            limit: 1,
                            layer: 0
                        }, {
                            id: 5,
                            name: "trap",
                            place: !0,
                            limit: 6,
                            layer: -1
                        }, {
                            id: 6,
                            name: "booster",
                            place: !0,
                            limit: 12,
                            layer: -1
                        }, {
                            id: 7,
                            name: "turret",
                            place: !0,
                            limit: 2,
                            layer: 1
                        }, {
                            id: 8,
                            name: "watchtower",
                            place: !0,
                            limit: 12,
                            layer: 1
                        }, {
                            id: 9,
                            name: "buff",
                            place: !0,
                            limit: 4,
                            layer: -1
                        }, {
                            id: 10,
                            name: "spawn",
                            place: !0,
                            limit: 1,
                            layer: -1
                        }, {
                            id: 11,
                            name: "sapling",
                            place: !0,
                            limit: 2,
                            layer: 0
                        }, {
                            id: 12,
                            name: "blocker",
                            place: !0,
                            limit: 3,
                            layer: -1
                        }, {
                            id: 13,
                            name: "teleporter",
                            place: !0,
                            limit: 2,
                            layer: -1
                        }], this.projectiles = [{
                            indx: 0,
                            layer: 0,
                            src: "arrow_1",
                            dmg: 25,
                            speed: 1.6,
                            scale: 103,
                            range: 1e3
                        }, {
                            indx: 1,
                            layer: 1,
                            dmg: 25,
                            scale: 20
                        }, {
                            indx: 0,
                            layer: 0,
                            src: "arrow_1",
                            dmg: 35,
                            speed: 2.5,
                            scale: 103,
                            range: 1200
                        }, {
                            indx: 0,
                            layer: 0,
                            src: "arrow_1",
                            dmg: 30,
                            speed: 2,
                            scale: 103,
                            range: 1200
                        }, {
                            indx: 1,
                            layer: 1,
                            dmg: 16,
                            scale: 20
                        }, {
                            indx: 0,
                            layer: 0,
                            src: "bullet_1",
                            dmg: 50,
                            speed: 3.6,
                            scale: 160,
                            range: 1400
                        }], this.weapons = [{
                            id: 0,
                            type: 0,
                            name: "tool hammer",
                            desc: "tool for gathering all resources",
                            src: "hammer_1",
                            length: 140,
                            width: 140,
                            xOff: -3,
                            yOff: 18,
                            dmg: 25,
                            range: 65,
                            gather: 1,
                            speed: 300
                        }, {
                            id: 1,
                            type: 0,
                            age: 2,
                            name: "hand axe",
                            desc: "gathers resources at a higher rate",
                            src: "axe_1",
                            length: 140,
                            width: 140,
                            xOff: 3,
                            yOff: 24,
                            dmg: 30,
                            spdMult: 1,
                            range: 70,
                            gather: 2,
                            speed: 400
                        }, {
                            id: 2,
                            type: 0,
                            age: 8,
                            pre: 1,
                            name: "great axe",
                            desc: "deal more damage and gather more resources",
                            src: "great_axe_1",
                            length: 140,
                            width: 140,
                            xOff: -8,
                            yOff: 25,
                            dmg: 35,
                            spdMult: 1,
                            range: 75,
                            gather: 4,
                            speed: 400
                        }, {
                            id: 3,
                            type: 0,
                            age: 2,
                            name: "short sword",
                            desc: "increased attack power but slower move speed",
                            src: "sword_1",
                            iPad: 1.3,
                            length: 130,
                            width: 210,
                            xOff: -8,
                            yOff: 46,
                            dmg: 35,
                            spdMult: .85,
                            range: 110,
                            gather: 1,
                            speed: 300
                        }, {
                            id: 4,
                            type: 0,
                            age: 8,
                            pre: 3,
                            name: "katana",
                            desc: "greater range and damage",
                            src: "samurai_1",
                            iPad: 1.3,
                            length: 130,
                            width: 210,
                            xOff: -8,
                            yOff: 59,
                            dmg: 40,
                            spdMult: .8,
                            range: 118,
                            gather: 1,
                            speed: 300
                        }, {
                            id: 5,
                            type: 0,
                            age: 2,
                            name: "polearm",
                            desc: "long range melee weapon",
                            src: "spear_1",
                            iPad: 1.3,
                            length: 130,
                            width: 210,
                            xOff: -8,
                            yOff: 53,
                            dmg: 45,
                            knock: .2,
                            spdMult: .82,
                            range: 142,
                            gather: 1,
                            speed: 700
                        }, {
                            id: 6,
                            type: 0,
                            age: 2,
                            name: "bat",
                            desc: "fast long range melee weapon",
                            src: "bat_1",
                            iPad: 1.3,
                            length: 110,
                            width: 180,
                            xOff: -8,
                            yOff: 53,
                            dmg: 20,
                            knock: .7,
                            range: 110,
                            gather: 1,
                            speed: 300
                        }, {
                            id: 7,
                            type: 0,
                            age: 2,
                            name: "daggers",
                            desc: "really fast short range weapon",
                            src: "dagger_1",
                            iPad: .8,
                            length: 110,
                            width: 110,
                            xOff: 18,
                            yOff: 0,
                            dmg: 20,
                            knock: .1,
                            range: 65,
                            gather: 1,
                            hitSlow: .1,
                            spdMult: 1.13,
                            speed: 100
                        }, {
                            id: 8,
                            type: 0,
                            age: 2,
                            name: "stick",
                            desc: "great for gathering but very weak",
                            src: "stick_1",
                            length: 140,
                            width: 140,
                            xOff: 3,
                            yOff: 24,
                            dmg: 1,
                            spdMult: 1,
                            range: 70,
                            gather: 7,
                            speed: 400
                        }, {
                            id: 9,
                            type: 1,
                            age: 6,
                            name: "hunting bow",
                            desc: "bow used for ranged combat and hunting",
                            src: "bow_1",
                            req: ["wood", 4],
                            length: 120,
                            width: 120,
                            xOff: -6,
                            yOff: 0,
                            Pdmg: 25,
                            projectile: 0,
                            spdMult: .75,
                            speed: 600
                        }, {
                            id: 10,
                            type: 1,
                            age: 6,
                            name: "great hammer",
                            desc: "hammer used for destroying structures",
                            src: "great_hammer_1",
                            length: 140,
                            width: 140,
                            xOff: -9,
                            yOff: 25,
                            dmg: 10,
                            Pdmg: 10,
                            spdMult: .88,
                            range: 75,
                            sDmg: 7.5,
                            gather: 1,
                            speed: 400
                        }, {
                            id: 11,
                            type: 1,
                            age: 6,
                            name: "wooden shield",
                            desc: "blocks projectiles and reduces melee damage",
                            src: "shield_1",
                            length: 120,
                            width: 120,
                            shield: .2,
                            xOff: 6,
                            yOff: 0,
                            Pdmg: 0,
                            spdMult: .7
                        }, {
                            id: 12,
                            type: 1,
                            age: 8,
                            pre: 9,
                            name: "crossbow",
                            desc: "deals more damage and has greater range",
                            src: "crossbow_1",
                            req: ["wood", 5],
                            aboveHand: !0,
                            armS: .75,
                            length: 120,
                            width: 120,
                            xOff: -4,
                            yOff: 0,
                            Pdmg: 35,
                            projectile: 2,
                            spdMult: .7,
                            speed: 700
                        }, {
                            id: 13,
                            type: 1,
                            age: 9,
                            pre: 12,
                            name: "repeater crossbow",
                            desc: "high firerate crossbow with reduced damage",
                            src: "crossbow_2",
                            req: ["wood", 10],
                            aboveHand: !0,
                            armS: .75,
                            length: 120,
                            width: 120,
                            xOff: -4,
                            yOff: 0,
                            Pdmg: 30,
                            projectile: 3,
                            spdMult: .7,
                            speed: 230
                        }, {
                            id: 14,
                            type: 1,
                            age: 6,
                            name: "mc grabby",
                            desc: "steals resources from enemies",
                            src: "grab_1",
                            length: 130,
                            width: 210,
                            xOff: -8,
                            yOff: 53,
                            dmg: 0,
                            Pdmg: 0,
                            steal: 250,
                            knock: .2,
                            spdMult: 1.05,
                            range: 125,
                            gather: 0,
                            speed: 700
                        }, {
                            id: 15,
                            type: 1,
                            age: 9,
                            pre: 12,
                            name: "musket",
                            desc: "slow firerate but high damage and range",
                            src: "musket_1",
                            req: ["stone", 10],
                            aboveHand: !0,
                            rec: .35,
                            armS: .6,
                            hndS: .3,
                            hndD: 1.6,
                            length: 205,
                            width: 205,
                            xOff: 25,
                            yOff: 0,
                            Pdmg: 50,
                            projectile: 5,
                            hideProjectile: !0,
                            spdMult: .6,
                            speed: 1500
                        }], this.list = [{
                            group: this.groups[0],
                            name: "apple",
                            desc: "restores 20 health when consumed",
                            req: ["food", 10],
                            consume: function(e) {
                                return e.changeHealth(20, e)
                            },
                            scale: 22,
                            holdOffset: 15,
                            healing: 20,
                            itemID: 0,
                            itemAID: 16
                        }, {
                            age: 3,
                            group: this.groups[0],
                            name: "cookie",
                            desc: "restores 40 health when consumed",
                            req: ["food", 15],
                            consume: function(e) {
                                return e.changeHealth(40, e)
                            },
                            scale: 27,
                            holdOffset: 15,
                            healing: 40,
                            itemID: 1,
                            itemAID: 17
                        }, {
                            age: 7,
                            group: this.groups[0],
                            name: "cheese",
                            desc: "restores 30 health and another 50 over 5 seconds",
                            req: ["food", 25],
                            consume: function(e) {
                                return !!(e.changeHealth(30, e) || e.health < 100) && (e.dmgOverTime.dmg = -10, e.dmgOverTime.doer = e, e.dmgOverTime.time = 5, !0)
                            },
                            scale: 27,
                            holdOffset: 15,
                            healing: 30,
                            itemID: 2,
                            itemAID: 18
                        }, {
                            group: this.groups[1],
                            name: "wood wall",
                            desc: "provides protection for your village",
                            req: ["wood", 10],
                            projDmg: !0,
                            health: 380,
                            scale: 50,
                            holdOffset: 20,
                            placeOffset: 2,
                            itemID: 3,
                            itemAID: 19
                        }, {
                            age: 3,
                            group: this.groups[1],
                            name: "stone wall",
                            desc: "provides improved protection for your village",
                            req: ["stone", 25],
                            health: 900,
                            scale: 50,
                            holdOffset: 20,
                            placeOffset: -5,
                            itemID: 4,
                            itemAID: 20
                        }, {
                            age: 7,
                            group: this.groups[1],
                            name: "castle wall",
                            desc: "provides powerful protection for your village",
                            req: ["stone", 35],
                            health: 1500,
                            scale: 52,
                            holdOffset: 20,
                            placeOffset: -5,
                            itemID: 5,
                            itemAID: 21
                        }, {
                            group: this.groups[2],
                            name: "spikes",
                            desc: "damages enemies when they touch them",
                            req: ["wood", 20, "stone", 5],
                            health: 400,
                            dmg: 20,
                            scale: 49,
                            spritePadding: -23,
                            holdOffset: 8,
                            placeOffset: -5,
                            itemID: 6,
                            itemAID: 22,
                            shadow: {
                                offsetX: 5,
                                offsetY: 5,
                                blur: 20,
                                color: "rgba(0, 0, 0, 0.5)"
                            }
                        }, {
                            age: 5,
                            group: this.groups[2],
                            name: "greater spikes",
                            desc: "damages enemies when they touch them",
                            req: ["wood", 30, "stone", 10],
                            health: 500,
                            dmg: 35,
                            scale: 52,
                            spritePadding: -23,
                            holdOffset: 8,
                            placeOffset: -5,
                            itemID: 7,
                            itemAID: 23
                        }, {
                            age: 9,
                            group: this.groups[2],
                            name: "poison spikes",
                            desc: "poisons enemies when they touch them",
                            req: ["wood", 35, "stone", 15],
                            health: 600,
                            dmg: 30,
                            pDmg: 5,
                            scale: 52,
                            spritePadding: -23,
                            holdOffset: 8,
                            placeOffset: -5,
                            itemID: 8,
                            itemAID: 24
                        }, {
                            age: 9,
                            group: this.groups[2],
                            name: "spinning spikes",
                            desc: "damages enemies when they touch them",
                            req: ["wood", 30, "stone", 20],
                            health: 500,
                            dmg: 45,
                            turnSpeed: .003,
                            scale: 52,
                            spritePadding: -23,
                            holdOffset: 8,
                            placeOffset: -5,
                            itemID: 9,
                            itemAID: 25
                        }, {
                            group: this.groups[3],
                            name: "windmill",
                            desc: "generates gold over time",
                            req: ["wood", 50, "stone", 10],
                            health: 400,
                            pps: 1,
                            turnSpeed: .0016,
                            spritePadding: 25,
                            iconLineMult: 12,
                            scale: 45,
                            holdOffset: 20,
                            placeOffset: 5,
                            itemID: 10,
                            itemAID: 26
                        }, {
                            age: 5,
                            group: this.groups[3],
                            name: "faster windmill",
                            desc: "generates more gold over time",
                            req: ["wood", 60, "stone", 20],
                            health: 500,
                            pps: 1.5,
                            turnSpeed: .0025,
                            spritePadding: 25,
                            iconLineMult: 12,
                            scale: 47,
                            holdOffset: 20,
                            placeOffset: 5,
                            itemID: 11,
                            itemAID: 27
                        }, {
                            age: 8,
                            group: this.groups[3],
                            name: "power mill",
                            desc: "generates more gold over time",
                            req: ["wood", 100, "stone", 50],
                            health: 800,
                            pps: 2,
                            turnSpeed: .005,
                            spritePadding: 25,
                            iconLineMult: 12,
                            scale: 47,
                            holdOffset: 20,
                            placeOffset: 5,
                            itemID: 12,
                            itemAID: 28
                        }, {
                            age: 5,
                            group: this.groups[4],
                            type: 2,
                            name: "mine",
                            desc: "allows you to mine stone",
                            req: ["wood", 20, "stone", 100],
                            iconLineMult: 12,
                            scale: 65,
                            holdOffset: 20,
                            placeOffset: 0,
                            itemID: 13,
                            itemAID: 29
                        }, {
                            age: 5,
                            group: this.groups[11],
                            type: 0,
                            name: "sapling",
                            desc: "allows you to farm wood",
                            req: ["wood", 150],
                            iconLineMult: 12,
                            colDiv: .5,
                            scale: 110,
                            holdOffset: 50,
                            placeOffset: -15,
                            itemID: 14,
                            itemAID: 30
                        }, {
                            age: 4,
                            group: this.groups[5],
                            name: "pit trap",
                            desc: "pit that traps enemies if they walk over it",
                            req: ["wood", 30, "stone", 30],
                            trap: !0,
                            ignoreCollision: !0,
                            hideFromEnemy: !0,
                            health: 500,
                            colDiv: .2,
                            scale: 50,
                            holdOffset: 20,
                            placeOffset: -5,
                            alpha: .6,
                            itemID: 15,
                            itemAID: 31
                        }, {
                            age: 4,
                            group: this.groups[6],
                            name: "boost pad",
                            desc: "provides boost when stepped on",
                            req: ["stone", 20, "wood", 5],
                            ignoreCollision: !0,
                            boostSpeed: 1.5,
                            health: 150,
                            colDiv: .7,
                            scale: 45,
                            holdOffset: 20,
                            placeOffset: -5,
                            itemID: 16,
                            itemAID: 32
                        }, {
                            age: 7,
                            group: this.groups[7],
                            doUpdate: !0,
                            name: "turret",
                            desc: "defensive structure that shoots at enemies",
                            req: ["wood", 200, "stone", 150],
                            health: 800,
                            projectile: 1,
                            shootRange: 700,
                            shootRate: 2200,
                            scale: 43,
                            holdOffset: 20,
                            placeOffset: -5,
                            itemID: 17,
                            itemAID: 33
                        }, {
                            age: 7,
                            group: this.groups[8],
                            name: "platform",
                            desc: "platform to shoot over walls and cross over water",
                            req: ["wood", 20],
                            ignoreCollision: !0,
                            zIndex: 1,
                            health: 300,
                            scale: 43,
                            holdOffset: 20,
                            placeOffset: -5,
                            itemID: 18,
                            itemAID: 34
                        }, {
                            age: 7,
                            group: this.groups[9],
                            name: "healing pad",
                            desc: "standing on it will slowly heal you",
                            req: ["wood", 30, "food", 10],
                            ignoreCollision: !0,
                            healCol: 15,
                            health: 400,
                            colDiv: .7,
                            scale: 45,
                            holdOffset: 20,
                            placeOffset: -5,
                            itemID: 19,
                            itemAID: 35
                        }, {
                            age: 9,
                            group: this.groups[10],
                            name: "spawn pad",
                            desc: "you will spawn here when you die but it will dissapear",
                            req: ["wood", 100, "stone", 100],
                            health: 400,
                            ignoreCollision: !0,
                            spawnPoint: !0,
                            scale: 45,
                            holdOffset: 20,
                            placeOffset: -5,
                            itemID: 20,
                            itemAID: 36
                        }, {
                            age: 7,
                            group: this.groups[12],
                            name: "blocker",
                            desc: "blocks building in radius",
                            req: ["wood", 30, "stone", 25],
                            ignoreCollision: !0,
                            blocker: 300,
                            health: 400,
                            colDiv: .7,
                            scale: 45,
                            holdOffset: 20,
                            placeOffset: -5,
                            itemID: 21,
                            itemAID: 37
                        }, {
                            age: 7,
                            group: this.groups[13],
                            name: "teleporter",
                            desc: "teleports you to a random point on the map",
                            req: ["wood", 60, "stone", 60],
                            ignoreCollision: !0,
                            teleport: !0,
                            health: 200,
                            colDiv: .7,
                            scale: 45,
                            holdOffset: 20,
                            placeOffset: -5,
                            itemID: 22,
                            itemAID: 38
                        }], this.checkItem = {
                            index: function(e, t) {
                                return [0, 1, 2].includes(e) ? 0 : [3, 4, 5].includes(e) ? 1 : [6, 7, 8, 9].includes(e) ? 2 : [10, 11, 12].includes(e) ? 3 : [13, 14].includes(e) ? 5 : [15, 16].includes(e) ? 4 : [17, 18, 19, 21, 22].includes(e) ? [13, 14].includes(t) ? 6 : 5 : 20 == e ? [13, 14].includes(t) ? 7 : 6 : void 0
                            }
                        };
                        for (let e = 0; e < this.list.length; ++e) this.list[e].id = e, this.list[e].pre && (this.list[e].pre = e - this.list[e].pre);
                        if ("undefined" != typeof window) {}
                    }
                },
                en = new class {
                    constructor(e, t, n, i, a, o) {
                        let s;
                        Math.floor, Math.abs, Math.cos, Math.sin, Math.pow, Math.sqrt;
                        this.ignoreAdd = !1, this.hitObj = [], this.disableObj = function(e) {
                            e.active = !1
                        }, this.add = function(t, n, i, a, o, r, l, c, d) {
                            s = We(t), s || (s = te.find((e => !e.active)), s || (s = new e(t), te.push(s))), c && (s.sid = t), s.init(n, i, a, o, r, l, d)
                        }, this.disableBySid = function(e) {
                            let t = We(e);
                            t && this.disableObj(t)
                        }, this.removeAllItems = function(e, t) {
                            te.filter((t => t.active && t.owner && t.owner.sid == e)).forEach((e => this.disableObj(e)))
                        }, this.checkItemLocation = function(e, a, o, s, r, l, c) {
                            return !t.find((t => t.active && n.getDistance(e, a, t.x, t.y) < o + (t.blocker ? t.blocker : t.getScale(s, t.isItem)))) && !(!l && 18 != r && a >= i.mapScale / 2 - i.riverWidth / 2 && a <= i.mapScale / 2 + i.riverWidth / 2)
                        }
                    }
                }(class {
                    constructor(e) {
                        this.sid = e, this.init = function(e, t, n, i, a, o, s) {
                            o = o || {}, this.sentTo = {}, this.gridLocations = [], this.active = !0, this.render = !0, this.doUpdate = o.doUpdate, this.x = e, this.y = t, this.dir = n, this.lastDir = n, this.xWiggle = 0, this.yWiggle = 0, this.visScale = i, this.scale = i, this.type = a, this.id = o.id, this.owner = s, this.name = o.name, this.isItem = null != this.id, this.group = o.group, this.maxHealth = o.health, this.health = this.maxHealth, this.layer = 2, null != this.group ? this.layer = this.group.layer : 0 == this.type ? this.layer = 3 : 2 == this.type ? this.layer = 0 : 4 == this.type && (this.layer = -1), this.colDiv = o.colDiv || 1, this.blocker = o.blocker, this.ignoreCollision = o.ignoreCollision, this.dontGather = o.dontGather, this.hideFromEnemy = o.hideFromEnemy, this.friction = o.friction, this.projDmg = o.projDmg, this.dmg = o.dmg, this.pDmg = o.pDmg, this.pps = o.pps, this.zIndex = o.zIndex || 0, this.turnSpeed = o.turnSpeed, this.req = o.req, this.trap = o.trap, this.healCol = o.healCol, this.teleport = o.teleport, this.boostSpeed = o.boostSpeed, this.projectile = o.projectile, this.shootRange = o.shootRange, this.shootRate = o.shootRate, this.shootCount = this.shootRate, this.spawnPoint = o.spawnPoint, this.onNear = 0, this.breakObj = !1, this.alpha = o.alpha || 1, this.maxAlpha = o.alpha || 1, this.damaged = 0
                        }, this.changeHealth = function(e, t) {
                            return this.health += e, this.health <= 0
                        }, this.getScale = function(e, t) {
                            return e = e || 1, this.scale * (this.isItem || 2 == this.type || 3 == this.type || 4 == this.type ? 1 : .6 * e) * (t ? 1 : this.colDiv)
                        }, this.visibleToPlayer = function(e) {
                            return !this.hideFromEnemy || this.owner && (this.owner == e || this.owner.team && e.team == this.owner.team)
                        }, this.update = function(e) {
                            if (this.active) {
                                this.xWiggle && (this.xWiggle *= Math.pow(.99, e)), this.yWiggle && (this.yWiggle *= Math.pow(.99, e));
                                let t = Kt.getAngleDist(this.lastDir, this.dir);
                                t > .01 ? this.dir += t / 5 : this.dir = this.lastDir
                            } else this.alive && (this.alpha -= e / (200 / this.maxAlpha), this.visScale += e / (this.scale / 2.5), this.alpha <= 0 && (this.alpha = 0, this.alive = !1))
                        }, this.isTeamObject = function(e) {
                            return null == this.owner || (this.owner && e.sid == this.owner.sid || e.findAllianceBySid(this.owner.sid))
                        }
                    }
                }, te, Kt, i),
                tn = new class {
                    constructor() {
                        this.hats = [{
                            id: 45,
                            name: "Shame!",
                            dontSell: !0,
                            price: 0,
                            scale: 120,
                            desc: "hacks are for winners"
                        }, {
                            id: 51,
                            name: "Moo Cap",
                            price: 0,
                            scale: 120,
                            desc: "coolest mooer around"
                        }, {
                            id: 50,
                            name: "Apple Cap",
                            price: 0,
                            scale: 120,
                            desc: "apple farms remembers"
                        }, {
                            id: 28,
                            name: "Moo Head",
                            price: 0,
                            scale: 120,
                            desc: "no effect"
                        }, {
                            id: 29,
                            name: "Pig Head",
                            price: 0,
                            scale: 120,
                            desc: "no effect"
                        }, {
                            id: 30,
                            name: "Fluff Head",
                            price: 0,
                            scale: 120,
                            desc: "no effect"
                        }, {
                            id: 36,
                            name: "Pandou Head",
                            price: 0,
                            scale: 120,
                            desc: "no effect"
                        }, {
                            id: 37,
                            name: "Bear Head",
                            price: 0,
                            scale: 120,
                            desc: "no effect"
                        }, {
                            id: 38,
                            name: "Monkey Head",
                            price: 0,
                            scale: 120,
                            desc: "no effect"
                        }, {
                            id: 44,
                            name: "Polar Head",
                            price: 0,
                            scale: 120,
                            desc: "no effect"
                        }, {
                            id: 35,
                            name: "Fez Hat",
                            price: 0,
                            scale: 120,
                            desc: "no effect"
                        }, {
                            id: 42,
                            name: "Enigma Hat",
                            price: 0,
                            scale: 120,
                            desc: "join the enigma army"
                        }, {
                            id: 43,
                            name: "Blitz Hat",
                            price: 0,
                            scale: 120,
                            desc: "hey everybody i'm blitz"
                        }, {
                            id: 49,
                            name: "Bob XIII Hat",
                            price: 0,
                            scale: 120,
                            desc: "like and subscribe"
                        }, {
                            id: 57,
                            name: "Pumpkin",
                            price: 50,
                            scale: 120,
                            desc: "Spooooky"
                        }, {
                            id: 8,
                            name: "Bummle Hat",
                            price: 100,
                            scale: 120,
                            desc: "no effect"
                        }, {
                            id: 2,
                            name: "Straw Hat",
                            price: 500,
                            scale: 120,
                            desc: "no effect"
                        }, {
                            id: 15,
                            name: "Winter Cap",
                            price: 600,
                            scale: 120,
                            desc: "allows you to move at normal speed in snow",
                            coldM: 1
                        }, {
                            id: 5,
                            name: "Cowboy Hat",
                            price: 1e3,
                            scale: 120,
                            desc: "no effect"
                        }, {
                            id: 4,
                            name: "Ranger Hat",
                            price: 2e3,
                            scale: 120,
                            desc: "no effect"
                        }, {
                            id: 18,
                            name: "Explorer Hat",
                            price: 2e3,
                            scale: 120,
                            desc: "no effect"
                        }, {
                            id: 31,
                            name: "Flipper Hat",
                            price: 2500,
                            scale: 120,
                            desc: "have more control while in water",
                            watrImm: !0
                        }, {
                            id: 1,
                            name: "Marksman Cap",
                            price: 3e3,
                            scale: 120,
                            desc: "increases arrow speed and range",
                            aMlt: 1.3
                        }, {
                            id: 10,
                            name: "Bush Gear",
                            price: 3e3,
                            scale: 160,
                            desc: "allows you to disguise yourself as a bush"
                        }, {
                            id: 48,
                            name: "Halo",
                            price: 3e3,
                            scale: 120,
                            desc: "no effect"
                        }, {
                            id: 6,
                            name: "Soldier Helmet",
                            price: 4e3,
                            scale: 120,
                            desc: "reduces damage taken but slows movement",
                            spdMult: .94,
                            dmgMult: .75
                        }, {
                            id: 23,
                            name: "Anti Venom Gear",
                            price: 4e3,
                            scale: 120,
                            desc: "makes you immune to poison",
                            poisonRes: 1
                        }, {
                            id: 13,
                            name: "Medic Gear",
                            price: 5e3,
                            scale: 110,
                            desc: "slowly regenerates health over time",
                            healthRegen: 3
                        }, {
                            id: 9,
                            name: "Miners Helmet",
                            price: 5e3,
                            scale: 120,
                            desc: "earn 1 extra gold per resource",
                            extraGold: 1
                        }, {
                            id: 32,
                            name: "Musketeer Hat",
                            price: 5e3,
                            scale: 120,
                            desc: "reduces cost of projectiles",
                            projCost: .5
                        }, {
                            id: 7,
                            name: "Bull Helmet",
                            price: 6e3,
                            scale: 120,
                            desc: "increases damage done but drains health",
                            healthRegen: -5,
                            dmgMultO: 1.5,
                            spdMult: .96
                        }, {
                            id: 22,
                            name: "Emp Helmet",
                            price: 6e3,
                            scale: 120,
                            desc: "turrets won't attack but you move slower",
                            antiTurret: 1,
                            spdMult: .7
                        }, {
                            id: 12,
                            name: "Booster Hat",
                            price: 6e3,
                            scale: 120,
                            desc: "increases your movement speed",
                            spdMult: 1.16
                        }, {
                            id: 26,
                            name: "Barbarian Armor",
                            price: 8e3,
                            scale: 120,
                            desc: "knocks back enemies that attack you",
                            dmgK: .6
                        }, {
                            id: 21,
                            name: "Plague Mask",
                            price: 1e4,
                            scale: 120,
                            desc: "melee attacks deal poison damage",
                            poisonDmg: 5,
                            poisonTime: 6
                        }, {
                            id: 46,
                            name: "Bull Mask",
                            price: 1e4,
                            scale: 120,
                            desc: "bulls won't target you unless you attack them",
                            bullRepel: 1
                        }, {
                            id: 14,
                            name: "Windmill Hat",
                            topSprite: !0,
                            price: 1e4,
                            scale: 120,
                            desc: "generates points while worn",
                            pps: 1.5
                        }, {
                            id: 11,
                            name: "Spike Gear",
                            topSprite: !0,
                            price: 1e4,
                            scale: 120,
                            desc: "deal damage to players that damage you",
                            dmg: .45
                        }, {
                            id: 53,
                            name: "Turret Gear",
                            topSprite: !0,
                            price: 1e4,
                            scale: 120,
                            desc: "you become a walking turret",
                            turret: {
                                proj: 1,
                                range: 700,
                                rate: 2500
                            },
                            spdMult: .7
                        }, {
                            id: 20,
                            name: "Samurai Armor",
                            price: 12e3,
                            scale: 120,
                            desc: "increased attack speed and fire rate",
                            atkSpd: .78
                        }, {
                            id: 58,
                            name: "Dark Knight",
                            price: 12e3,
                            scale: 120,
                            desc: "restores health when you deal damage",
                            healD: .4
                        }, {
                            id: 27,
                            name: "Scavenger Gear",
                            price: 15e3,
                            scale: 120,
                            desc: "earn double points for each kill",
                            kScrM: 2
                        }, {
                            id: 40,
                            name: "Tank Gear",
                            price: 15e3,
                            scale: 120,
                            desc: "increased damage to buildings but slower movement",
                            spdMult: .3,
                            bDmg: 3.3
                        }, {
                            id: 52,
                            name: "Thief Gear",
                            price: 15e3,
                            scale: 120,
                            desc: "steal half of a players gold when you kill them",
                            goldSteal: .5
                        }, {
                            id: 55,
                            name: "Bloodthirster",
                            price: 2e4,
                            scale: 120,
                            desc: "Restore Health when dealing damage. And increased damage",
                            healD: .25,
                            dmgMultO: 1.2
                        }, {
                            id: 56,
                            name: "Assassin Gear",
                            price: 2e4,
                            scale: 120,
                            desc: "Go invisible when not moving. Can't eat. Increased speed",
                            noEat: !0,
                            spdMult: 1.1,
                            invisTimer: 1e3
                        }], this.accessories = [{
                            id: 12,
                            name: "Snowball",
                            price: 1e3,
                            scale: 105,
                            xOff: 18,
                            desc: "no effect"
                        }, {
                            id: 9,
                            name: "Tree Cape",
                            price: 1e3,
                            scale: 90,
                            desc: "no effect"
                        }, {
                            id: 10,
                            name: "Stone Cape",
                            price: 1e3,
                            scale: 90,
                            desc: "no effect"
                        }, {
                            id: 3,
                            name: "Cookie Cape",
                            price: 1500,
                            scale: 90,
                            desc: "no effect"
                        }, {
                            id: 8,
                            name: "Cow Cape",
                            price: 2e3,
                            scale: 90,
                            desc: "no effect"
                        }, {
                            id: 11,
                            name: "Monkey Tail",
                            price: 2e3,
                            scale: 97,
                            xOff: 25,
                            desc: "Super speed but reduced damage",
                            spdMult: 1.35,
                            dmgMultO: .2
                        }, {
                            id: 17,
                            name: "Apple Basket",
                            price: 3e3,
                            scale: 80,
                            xOff: 12,
                            desc: "slowly regenerates health over time",
                            healthRegen: 1
                        }, {
                            id: 6,
                            name: "Winter Cape",
                            price: 3e3,
                            scale: 90,
                            desc: "no effect"
                        }, {
                            id: 4,
                            name: "Skull Cape",
                            price: 4e3,
                            scale: 90,
                            desc: "no effect"
                        }, {
                            id: 5,
                            name: "Dash Cape",
                            price: 5e3,
                            scale: 90,
                            desc: "no effect"
                        }, {
                            id: 2,
                            name: "Dragon Cape",
                            price: 6e3,
                            scale: 90,
                            desc: "no effect"
                        }, {
                            id: 1,
                            name: "Super Cape",
                            price: 8e3,
                            scale: 90,
                            desc: "no effect"
                        }, {
                            id: 7,
                            name: "Troll Cape",
                            price: 8e3,
                            scale: 90,
                            desc: "no effect"
                        }, {
                            id: 14,
                            name: "Thorns",
                            price: 1e4,
                            scale: 115,
                            xOff: 20,
                            desc: "no effect"
                        }, {
                            id: 15,
                            name: "Blockades",
                            price: 1e4,
                            scale: 95,
                            xOff: 15,
                            desc: "no effect"
                        }, {
                            id: 20,
                            name: "Devils Tail",
                            price: 1e4,
                            scale: 95,
                            xOff: 20,
                            desc: "no effect"
                        }, {
                            id: 16,
                            name: "Sawblade",
                            price: 12e3,
                            scale: 90,
                            spin: !0,
                            xOff: 0,
                            desc: "deal damage to players that damage you",
                            dmg: .15
                        }, {
                            id: 13,
                            name: "Angel Wings",
                            price: 15e3,
                            scale: 138,
                            xOff: 22,
                            desc: "slowly regenerates health over time",
                            healthRegen: 3
                        }, {
                            id: 19,
                            name: "Shadow Wings",
                            price: 15e3,
                            scale: 138,
                            xOff: 22,
                            desc: "increased movement speed",
                            spdMult: 1.1
                        }, {
                            id: 18,
                            name: "Blood Wings",
                            price: 2e4,
                            scale: 178,
                            xOff: 26,
                            desc: "restores health when you deal damage",
                            healD: .2
                        }, {
                            id: 21,
                            name: "Corrupt X Wings",
                            price: 2e4,
                            scale: 178,
                            xOff: 26,
                            desc: "deal damage to players that damage you",
                            dmg: .25
                        }]
                    }
                },
                nn = tn.hats,
                an = tn.accessories,
                on = new class {
                    constructor(e, t, n, i, a, o, s, r, l) {
                        this.addProjectile = function(c, d, p, h, m, u, g, f, y, w) {
                            let k, v = o.projectiles[u];
                            for (let e = 0; e < t.length; ++e)
                                if (!t[e].active) {
                                    k = t[e];
                                    break
                                }
                            return k || (k = new e(n, i, a, o, s, r, l), k.sid = t.length, t.push(k)), k.init(u, c, d, p, m, v.dmg, h, v.scale, g), k.ignoreObj = f, k.layer = y || v.layer, k.inWindow = w, k.src = v.src, k
                        }
                    }
                }(class {
                    constructor(e, t, n, i, a, o, s) {
                        this.init = function(e, t, n, i, a, o, s, r, l) {
                            this.active = !0, this.tickActive = !0, this.indx = e, this.x = t, this.y = n, this.x2 = t, this.y2 = n, this.dir = i, this.skipMov = !0, this.speed = a, this.dmg = o, this.scale = r, this.range = s, this.r2 = s, this.owner = l
                        }, this.update = function(e) {
                            if (this.active) {
                                let t = this.speed * e;
                                this.skipMov ? this.skipMov = !1 : (this.x += t * Math.cos(this.dir), this.y += t * Math.sin(this.dir), this.range -= t, this.range <= 0 && (this.x += this.range * Math.cos(this.dir), this.y += this.range * Math.sin(this.dir), t = 1, this.range = 0, this.active = !1))
                            }
                        }, this.tickUpdate = function(e) {
                            if (this.tickActive) {
                                let t = this.speed * e;
                                this.skipMov ? this.skipMov = !1 : (this.x2 += t * Math.cos(this.dir), this.y2 += t * Math.sin(this.dir), this.r2 -= t, this.r2 <= 0 && (this.x2 += this.r2 * Math.cos(this.dir), this.y2 += this.r2 * Math.sin(this.dir), t = 1, this.r2 = 0, this.tickActive = !1))
                            }
                        }
                    }
                }, ie, Z, ais, en, Qt, i, Kt),
                sn = new class {
                    constructor(e, t, n, i, a, o, s, r, l) {
                        this.aiTypes = [{
                            id: 0,
                            src: "cow_1",
                            killScore: 150,
                            health: 500,
                            weightM: .8,
                            speed: 95e-5,
                            turnSpeed: .001,
                            scale: 72,
                            drop: ["food", 50]
                        }, {
                            id: 1,
                            src: "pig_1",
                            killScore: 200,
                            health: 800,
                            weightM: .6,
                            speed: 85e-5,
                            turnSpeed: .001,
                            scale: 72,
                            drop: ["food", 80]
                        }, {
                            id: 2,
                            name: "Bull",
                            src: "bull_2",
                            hostile: !0,
                            dmg: 20,
                            killScore: 1e3,
                            health: 1800,
                            weightM: .5,
                            speed: 94e-5,
                            turnSpeed: 74e-5,
                            scale: 78,
                            viewRange: 800,
                            chargePlayer: !0,
                            drop: ["food", 100]
                        }, {
                            id: 3,
                            name: "Bully",
                            src: "bull_1",
                            hostile: !0,
                            dmg: 20,
                            killScore: 2e3,
                            health: 2800,
                            weightM: .45,
                            speed: .001,
                            turnSpeed: 8e-4,
                            scale: 90,
                            viewRange: 900,
                            chargePlayer: !0,
                            drop: ["food", 400]
                        }, {
                            id: 4,
                            name: "Wolf",
                            src: "wolf_1",
                            hostile: !0,
                            dmg: 8,
                            killScore: 500,
                            health: 300,
                            weightM: .45,
                            speed: .001,
                            turnSpeed: .002,
                            scale: 84,
                            viewRange: 800,
                            chargePlayer: !0,
                            drop: ["food", 200]
                        }, {
                            id: 5,
                            name: "Quack",
                            src: "chicken_1",
                            dmg: 8,
                            killScore: 2e3,
                            noTrap: !0,
                            health: 300,
                            weightM: .2,
                            speed: .0018,
                            turnSpeed: .006,
                            scale: 70,
                            drop: ["food", 100]
                        }, {
                            id: 6,
                            name: "MOOSTAFA",
                            nameScale: 50,
                            src: "enemy",
                            hostile: !0,
                            dontRun: !0,
                            fixedSpawn: !0,
                            spawnDelay: 6e4,
                            noTrap: !0,
                            colDmg: 100,
                            dmg: 40,
                            killScore: 8e3,
                            health: 18e3,
                            weightM: .4,
                            speed: 7e-4,
                            turnSpeed: .01,
                            scale: 80,
                            spriteMlt: 1.8,
                            leapForce: .9,
                            viewRange: 1e3,
                            hitRange: 210,
                            hitDelay: 1e3,
                            chargePlayer: !0,
                            drop: ["food", 100]
                        }, {
                            id: 7,
                            name: "Treasure",
                            hostile: !0,
                            nameScale: 35,
                            src: "crate_1",
                            fixedSpawn: !0,
                            spawnDelay: 12e4,
                            colDmg: 200,
                            killScore: 5e3,
                            health: 2e4,
                            weightM: .1,
                            speed: 0,
                            turnSpeed: 0,
                            scale: 70,
                            spriteMlt: 1
                        }, {
                            id: 8,
                            name: "MOOFIE",
                            src: "wolf_2",
                            hostile: !0,
                            fixedSpawn: !0,
                            dontRun: !0,
                            hitScare: 4,
                            spawnDelay: 3e4,
                            noTrap: !0,
                            nameScale: 35,
                            dmg: 10,
                            colDmg: 100,
                            killScore: 3e3,
                            health: 7e3,
                            weightM: .45,
                            speed: .0015,
                            turnSpeed: .002,
                            scale: 90,
                            viewRange: 800,
                            chargePlayer: !0,
                            drop: ["food", 1e3]
                        }], this.spawn = function(c, d, p, h) {
                            let m = e.find((e => !e.active));
                            return m || (m = new t(e.length, a, n, i, s, o, r, l), e.push(m)), m.init(c, d, p, h, this.aiTypes[h]), m
                        }
                    }
                }(ais, class {
                    constructor(e, t, n, i, a, o, s, r) {
                        this.sid = e, this.isAI = !0, this.nameIndex = a.randInt(0, o.cowNames.length - 1), this.init = function(e, t, n, i, a) {
                            this.x = e, this.y = t, this.startX = a.fixedSpawn ? e : null, this.startY = a.fixedSpawn ? t : null, this.xVel = 0, this.yVel = 0, this.zIndex = 0, this.dir = n, this.dirPlus = 0, this.showName = "aaa", this.index = i, this.src = a.src, a.name && (this.name = a.name), this.weightM = a.weightM, this.speed = a.speed, this.killScore = a.killScore, this.turnSpeed = a.turnSpeed, this.scale = a.scale, this.maxHealth = a.health, this.leapForce = a.leapForce, this.health = this.maxHealth, this.chargePlayer = a.chargePlayer, this.viewRange = a.viewRange, this.drop = a.drop, this.dmg = a.dmg, this.hostile = a.hostile, this.dontRun = a.dontRun, this.hitRange = a.hitRange, this.hitDelay = a.hitDelay, this.hitScare = a.hitScare, this.spriteMlt = a.spriteMlt, this.nameScale = a.nameScale, this.colDmg = a.colDmg, this.noTrap = a.noTrap, this.spawnDelay = a.spawnDelay, this.hitWait = 0, this.waitCount = 1e3, this.moveCount = 0, this.targetDir = 0, this.active = !0, this.alive = !0, this.runFrom = null, this.chargeTarget = null, this.dmgOverTime = {}
                        };
                        let l = 0,
                            c = 0;
                        this.animate = function(e) {
                            this.animTime > 0 && (this.animTime -= e, this.animTime <= 0 ? (this.animTime = 0, this.dirPlus = 0, l = 0, c = 0) : 0 == c ? (l += e / (this.animSpeed * o.hitReturnRatio), this.dirPlus = a.lerp(0, this.targetAngle, Math.min(1, l)), l >= 1 && (l = 1, c = 1)) : (l -= e / (this.animSpeed * (1 - o.hitReturnRatio)), this.dirPlus = a.lerp(0, this.targetAngle, Math.max(0, l))))
                        }, this.startAnim = function() {
                            this.animTime = this.animSpeed = 600, this.targetAngle = .8 * Math.PI, l = 0, c = 0
                        }
                    }
                }, Z, Qt, null, i, Kt),
                rn = new class {
                    constructor() {
                        this.texts = [], this.stack = [], this.update = function(e, t, n, i) {
                            t.textBaseline = "middle", t.textAlign = "center";
                            for (let a = 0; a < this.texts.length; ++a) this.texts[a].life && (this.texts[a].update(e), this.texts[a].render(t, n, i))
                        }, this.showText = function(e, t, n, i, a, o, s) {
                            let r;
                            for (let e = 0; e < this.texts.length; ++e)
                                if (!this.texts[e].life) {
                                    r = this.texts[e];
                                    break
                                }
                            r || (r = new Dt, this.texts.push(r)), r.init(e, t, n, i, a, o, s)
                        }
                    }
                },
                ln = new class {
                    constructor(e, t) {
                        function n(e, t) {
                            try {
                                return Math.hypot((t.y2 || t.y) - (e.y2 || e.y), (t.x2 || t.x) - (e.x2 || e.x))
                            } catch (e) {
                                return 1 / 0
                            }
                        }
                        this.dist = 0, this.aim = 0, this.inTrap = !1, this.replaced = !1, this.antiTrapped = !1, this.info = {}, this.notFast = function() {
                            return 10 == Y.weapons[1] && (this.info.health > t.weapons[Y.weapons[0]].dmg || 5 == Y.weapons[0])
                        }, this.testCanPlace = function(n, a = -Math.PI / 2, o = Math.PI / 2, s = Math.PI / 18, r, l, c) {
                            try {
                                let p = t.list[Y.items[n]],
                                    h = Y.scale + p.scale + (p.placeOffset || 0),
                                    m = {
                                        attempts: 0,
                                        placed: 0
                                    },
                                    u = [];
                                ne.forEach((e => {
                                    u.push({
                                        x: e.x,
                                        y: e.y,
                                        active: e.active,
                                        blocker: e.blocker,
                                        scale: e.scale,
                                        isItem: e.isItem,
                                        type: e.type,
                                        colDiv: e.colDiv,
                                        getScale: function(e, t) {
                                            return e = e || 1, this.scale * (this.isItem || 2 == this.type || 3 == this.type || 4 == this.type ? 1 : .6 * e) * (t ? 1 : this.colDiv)
                                        }
                                    })
                                }));
                                for (let t = a; t < o; t += s) {
                                    m.attempts++;
                                    let a = r + t,
                                        o = Y.x2 + h * Math.cos(a),
                                        s = Y.y2 + h * Math.sin(a);
                                    u.find((t => t.active && e.getDistance(o, s, t.x, t.y) < p.scale + (t.blocker ? t.blocker : t.getScale(.6, t.isItem)))) || (18 != p.id && s >= i.mapScale / 2 - i.riverWidth / 2 && s <= i.mapScale / 2 + i.riverWidth / 2 || (!l && c ? c.inTrap ? e.getAngleDist(le.aim2 + Math.PI, a + Math.PI) <= 1.3 * Math.PI ? Rt(2, a, 1) : 15 == Y.items[4] && Rt(4, a, 1) : e.getAngleDist(le.aim2, a) <= i.gatherAngle / 2.6 ? Rt(2, a, 1) : 15 == Y.items[4] && Rt(4, a, 1) : Rt(n, a, 1), u.push({
                                        x: o,
                                        y: s,
                                        active: !0,
                                        blocker: p.blocker,
                                        scale: p.scale,
                                        isItem: !0,
                                        type: null,
                                        colDiv: p.colDiv,
                                        getScale: function() {
                                            return this.scale
                                        }
                                    }), e.getAngleDist(le.aim2, a) <= 1 && m.placed++))
                                }
                                m.placed > 0 && l && p.dmg && le.dist2 <= t.weapons[Y.weapons[0]].range + 1.8 * Y.scale && d.spikeTick && (cn.canSpikeTick = !0)
                            } catch (e) {}
                        }, this.checkSpikeTick = function() {
                            try {
                                if (![3, 4, 5].includes(le.primaryIndex)) return !1;
                                if (!ce.autoPush && (null == le.primaryIndex || le.reloads[le.primaryIndex] > L.tickRate)) return !1;
                                if (le.dist2 <= t.weapons[le.primaryIndex || 5].range + 1.8 * le.scale) {
                                    let n = t.list[9],
                                        a = le.scale + n.scale + (n.placeOffset || 0),
                                        o = 0,
                                        s = {
                                            attempts: 0,
                                            block: "unblocked"
                                        };
                                    for (let t = -1; t <= 1; t += .1) {
                                        s.attempts++;
                                        let r = e.getDirect(Y, le, 2, 2) + t,
                                            l = le.x2 + a * Math.cos(r),
                                            c = le.y2 + a * Math.sin(r);
                                        if (!ne.find((t => t.active && e.getDistance(l, c, t.x, t.y) < n.scale + (t.blocker ? t.blocker : t.getScale(.6, t.isItem)))) && !(c >= i.mapScale / 2 - i.riverWidth / 2 && c <= i.mapScale / 2 + i.riverWidth / 2)) {
                                            o++, s.block = "blocked";
                                            break
                                        }
                                    }
                                    if (o) {
                                        if (ce.anti0Tick = 1, spikes.near && getEl("atSpike").checked && !Qn.insta.wait && !antispiketick) {
                                            spikes.aim = C.getDirection(spikes.near.x, spikes.near.y, E.x, E.y), spikes.dist = C.getDistance(spikes.near.x, spikes.near.y, E.x, E.y);
                                            let e = spikes.dist - 25 < R.weapons[10 == E.weapons[1] ? E.weapons[1] : E.weapons[0]].range + 100,
                                                t = spikes.dist - 25 < R.weapons[10 == E.weapons[1] ? E.weapons[1] : E.weapons[0]].range + 35;
                                            e ? (spikes.nearSpike = !0, spikes.nearSpike && spikes.dist - 20 >= 65 && Date.now() - stopCD > 500 && (stopCD = Date.now(), ee.send("a", null)), t ? (modWrite("anti spike (" + Math.ceil(E.x) + ", " + Math.ceil(E.y) + ")"), spikes.nearBreak = !0) : spikes.nearBreak = !1) : (spikes.nearSpike = !1, spikes.nearBreak = !1)
                                        } else spikes.nearSpike = !1, spikes.nearBreak = !1;
                                        return !0
                                    }
                                }
                            } catch (e) {
                                return null
                            }
                            return !1
                        }, this.protect = function(e) {
                            if (d.antiTrap)
                                if (n(le, Y) > n(le, ln.info))
                                    for (let e = -Math.PI / 2; e < Math.PI / 2; e += Math.PI / 18) Ht(2, le.aim2 + e);
                                else if (n(le, ln.info) > n(le, Y))
                                for (let e = -Math.PI / 2; e < Math.PI / 2; e += Math.PI / 18) Ht(4, le.aim2 + e)
                        }, this.autoPlace = function() {
                            if (se.length && d.autoPlace && !cn.ticking && L.tick % (Math.max(1, parseInt(getEl("autoPlaceTick").value)) || 1) == 0)
                                if (ne.length) {
                                    let t = {
                                            inTrap: !1
                                        },
                                        n = ne.filter((t => t.trap && t.active && t.isTeamObject(Y) && e.getDist(t, le, 0, 2) <= le.scale + t.getScale() + 5)).sort((function(t, n) {
                                            return e.getDist(t, le, 0, 2) - e.getDist(n, le, 0, 2)
                                        }))[0];
                                    t.inTrap = !!n, le.dist3 <= 450 && (le.dist2 <= 200 ? this.testCanPlace(2, 0, 2 * Math.PI, Math.PI / 24, le.aim2) : 15 == Y.items[4] && this.testCanPlace(4, 0, 2 * Math.PI, Math.PI / 24, le.aim2))
                                } else le.dist3 <= 450 && 15 == Y.items[4] && this.testCanPlace(4, 0, 2 * Math.PI, Math.PI / 24, le.aim2)
                        }, this.replacer = function(n) {
                            n && d.autoReplace && vt && (this.antiTrapped || L.tickBase((() => {
                                let i = e.getDirect(n, Y, 0, 2),
                                    a = e.getDist(n, Y, 0, 2);
                                if (!(getEl("weaponGrind").checked && a <= t.weapons[Y.weaponIndex].range + Y.scale) && a <= 400 && le.dist2 <= 400) {
                                    !this.checkSpikeTick() && le.dist3 <= t.weapons[le.primaryIndex || 5].range + 1.8 * le.scale ? (this.testCanPlace(2, -Math.PI / 2, Math.PI / 2, Math.PI / 18, i, 1), this.testCanPlace(2, 0, 2 * Math.PI, Math.PI / 24, i, 1)) : 15 == Y.items[4] && this.testCanPlace(4, 0, 2 * Math.PI, Math.PI / 24, i, 1), this.replaced = !0
                                }
                            }), 1))
                        }
                    }
                }(Kt, Qt),
                cn = new class {
                    constructor() {
                        this.wait = !1, this.can = !1, this.isTrue = !1, this.nobull = !1, this.ticking = !1, this.canSpikeTick = !1, this.startTick = !1, this.readyTick = !1, this.canCounter = !1, this.revTick = !1, this.syncHit = !1, this.changeType = function(e) {
                            this.wait = !1, this.isTrue = !0, ce.autoAim = !0;
                            "rev" == e ? (z("6", "snoweiv3.1415926535897"), Ot(Y.weapons[1]), Pt(53, 0), Pt(21, 1), At(), L.tickBase((() => {
                                Ot(Y.weapons[0]), Pt(7, 0), Pt(18, 1), L.tickBase((() => {
                                    At(), this.isTrue = !1, ce.autoAim = !1
                                }), 1)
                            }), 1)) : "nobull" == e ? (Ot(Y.weapons[0]), Pt(7, 0), At(), setTimeout((() => {
                                Ot(Y.weapons[1]), Pt(0 == Y.reloads[53] ? 53 : 6, 0), setTimeout((() => {
                                    At(), this.isTrue = !1, ce.autoAim = !1
                                }), 255)
                            }), 105)) : "normal" == e ? (Ot(Y.weapons[0]), Pt(7, 0), At(), setTimeout((() => {
                                Ot(Y.weapons[1]), Pt(0 == Y.reloads[53] ? 53 : 6, 0), setTimeout((() => {
                                    At(), this.isTrue = !1, ce.autoAim = !1
                                }), 255)
                            }), 100)) : setTimeout((() => {
                                this.isTrue = !1, ce.autoAim = !1
                            }), 50)
                        }, this.spikeTickType = function() {
                            function e(t, i) {
                                const a = n();
                                return (e = function(e, t) {
                                    return a[e -= 428]
                                })(t, i)
                            }
                            const t = e;

                            function n() {
                                const e = ["isTrue", "457564gCvaSV", "10885830MiQKSV", "weapons", "Project Sheepy", "tickBase", "5080FVGhcW", "2682NqHuOF", "3rkOQDg", "1960ijtPVr", "send", "getDirect", "986276xcsTAD", "11264ueamRE", "999429zeDXOx", "1503516UpKOdB", "25BlUGnX"];
                                return (n = function() {
                                    return e
                                })()
                            }! function(t, n) {
                                const i = e,
                                    a = t();
                                for (;;) try {
                                    if (939373 === -parseInt(i(437)) / 1 + parseInt(i(435)) / 2 * (parseInt(i(431)) / 3) + -parseInt(i(441)) / 4 * (parseInt(i(439)) / 5) + parseInt(i(442)) / 6 + parseInt(i(438)) / 7 + -parseInt(i(429)) / 8 * (-parseInt(i(430)) / 9) + -parseInt(i(432)) / 10 * (parseInt(i(436)) / 11)) break;
                                    a.push(a.shift())
                                } catch (e) {
                                    a.push(a.shift())
                                }
                            }(n);
                            Kt[t(434)](J, Y, 0, 2);
                            this[t(440)] = !0, ce.autoAim = !0, G[t(433)]("6", t(444)), Ot(Y[t(443)][0]), Pt(7, 0), Pt(21, 1), At(), L[t(428)]((() => {
                                const e = t;
                                Ot(Y[e(443)][0]), Pt(53, 0), Pt(21, 1), L[e(428)]((() => {
                                    At(), this.isTrue = !1, ce.autoAim = !1
                                }), 1)
                            }), 1)
                        }, this.counterType = function() {
                            this.isTrue = !0, ce.autoAim = !0, Ot(Y.weapons[0]), Pt(7, 0), At(), L.tickBase((() => {
                                Ot(Y.weapons[0]), Pt(53, 0), L.tickBase((() => {
                                    At(), this.isTrue = !1, ce.autoAim = !1
                                }), 1)
                            }), 1)
                        }, this.rangeType = function(e) {
                            this.isTrue = !0, ce.autoAim = !0, "ageInsta" == e ? (ce.ageInsta = !1, 18 == Y.items[5] && Rt(5, le.aim2), z("a", void 0, 1), Pt(22, 0), Pt(21, 1), L.tickBase((() => {
                                Ot(Y.weapons[1]), Pt(53, 0), Pt(21, 1), At(), L.tickBase((() => {
                                    Et(12), Ot(Y.weapons[1]), Pt(53, 0), Pt(21, 1), L.tickBase((() => {
                                        Et(15), Ot(Y.weapons[1]), Pt(53, 0), Pt(21, 1), L.tickBase((() => {
                                            At(), this.isTrue = !1, ce.autoAim = !1
                                        }), 1)
                                    }), 1)
                                }), 1)
                            }), 1)) : (Ot(Y.weapons[1]), 0 == Y.reloads[53] && le.dist2 <= 700 && 22 != le.skinIndex ? Pt(53, 0) : Pt(20, 0), Pt(11, 1), At(), L.tickBase((() => {
                                At(), this.isTrue = !1, ce.autoAim = !1
                            }), 1))
                        }, this.oneTickType = function() {
                            this.tickin = !0, this.isTrue = !0, ce.autoAim = !0, Vt(), Pt(11, 1), z("a", le.aim2, 1), L.tickBase((() => {
                                15 == Y.weapons[1] && (ce.revAim = !0), Ot(Y.weapons[[9, 12, 13, 15].includes(Y.weapons[1]) ? 1 : 0]), Pt(53, 0), Pt(11, 1), [9, 12, 13, 15].includes(Y.weapons[1]) && At(), z("a", le.aim2, 1), Rt(4, le.aim2), G.send("6", "1 Tick Pass"), L.tickBase((() => {
                                    ce.revAim = !1, Ot(Y.weapons[0]), Pt(7, 0), Pt(19, 1), [9, 12, 13, 15].includes(Y.weapons[1]) || At(), z("a", le.aim2, 1), L.tickBase((() => {
                                        At(), this.isTrue = !1, ce.autoAim = !1, z("a", void 0, 1), this.tickin = !1
                                    }), 1)
                                }), 1)
                            }), 1)
                        }, this.threeOneTickType = function() {
                            this.isTrue = !0, ce.autoAim = !0, Ot(Y.weapons[0]), Pt(11, 1), z("a", le.aim2, 1), L.tickBase((() => {
                                Ot(Y.weapons[0]), Pt(53, 0), Pt(11, 1), z("a", le.aim2, 1), L.tickBase((() => {
                                    Ot(Y.weapons[0]), Pt(7, 0), Pt(19, 1), At(), z("a", le.aim2, 1), L.tickBase((() => {
                                        At(), this.isTrue = !1, ce.autoAim = !1, z("a", void 0, 1)
                                    }), 1)
                                }), 1)
                            }), 1)
                        }, this.kmTickType = function() {
                            this.isTrue = !0, ce.autoAim = !0, ce.revAim = !0, Ot(Y.weapons[1]), Pt(53, 0), Pt(11, 1), At(), z("a", le.aim2, 1), L.tickBase((() => {
                                ce.revAim = !1, Ot(Y.weapons[0]), Pt(7, 0), Pt(19, 1), z("a", le.aim2, 1), L.tickBase((() => {
                                    At(), this.isTrue = !1, ce.autoAim = !1, z("a", void 0, 1)
                                }), 2)
                            }), 2)
                        }, this.boostTickType = function() {
                            Be("lol"), this.isTrue = !0, ce.autoAim = !0, Vt(), Pt(11, 1), z("a", le.aim2, 1), L.tickBase((() => {
                                15 == Y.weapons[1] && (ce.revAim = !0), Ot(Y.weapons[[9, 12, 13, 15].includes(Y.weapons[1]) ? 1 : 0]), Pt(53, 0), Pt(11, 1), [9, 12, 13, 15].includes(Y.weapons[1]) && At(), z("a", le.aim2, 1), Rt(4, le.aim2), L.tickBase((() => {
                                    ce.revAim = !1, Ot(Y.weapons[0]), Pt(7, 0), Pt(19, 1), [9, 12, 13, 15].includes(Y.weapons[1]) || At(), z("a", le.aim2, 1), L.tickBase((() => {
                                        At(), this.isTrue = !1, ce.autoAim = !1, z("a", void 0, 1)
                                    }), 1)
                                }), 1)
                            }), 1)
                        }, this.gotoGoal = function(e, t) {
                            let n = e => e * i.playerScale,
                                a = e - t,
                                o = e + t,
                                s = e - n(1),
                                r = e + n(1),
                                l = e - n(2),
                                c = e + n(2),
                                p = e - n(4),
                                h = e + n(4),
                                m = function(e, t) {
                                    Y.y2 >= i.mapScale / 2 - i.riverWidth / 2 && Y.y2 <= i.mapScale / 2 + i.riverWidth / 2 && 0 == t ? Pt(31, 0) : Pt(e, t)
                                };
                            if (se.length) {
                                let e = le.dist2;
                                return this.ticking = !0, e >= a && e <= o ? (m(22, 0), m(11, 1), (Y.weaponIndex != Y.weapons[[10, 14].includes(Y.weapons[1]) ? 1 : 0] || Y.buildIndex > -1) && Ot(Y.weapons[[10, 14].includes(Y.weapons[1]) ? 1 : 0]), {
                                    dir: void 0,
                                    action: 1
                                }) : e < a ? (e >= p ? e >= l ? e >= s ? (m(40, 0), m(10, 1), d.slowOT ? Y.buildIndex != Y.items[1] && Bt(Y.items[1]) : (Y.weaponIndex != Y.weapons[[10, 14].includes(Y.weapons[1]) ? 1 : 0] || Y.buildIndex > -1) && Ot(Y.weapons[[10, 14].includes(Y.weapons[1]) ? 1 : 0])) : (m(22, 0), m(19, 1), (Y.weaponIndex != Y.weapons[[10, 14].includes(Y.weapons[1]) ? 1 : 0] || Y.buildIndex > -1) && Ot(Y.weapons[[10, 14].includes(Y.weapons[1]) ? 1 : 0])) : (m(6, 0), m(12, 1), (Y.weaponIndex != Y.weapons[[10, 14].includes(Y.weapons[1]) ? 1 : 0] || Y.buildIndex > -1) && Ot(Y.weapons[[10, 14].includes(Y.weapons[1]) ? 1 : 0])) : (Vt(), m(11, 1), (Y.weaponIndex != Y.weapons[[10, 14].includes(Y.weapons[1]) ? 1 : 0] || Y.buildIndex > -1) && Ot(Y.weapons[[10, 14].includes(Y.weapons[1]) ? 1 : 0])), {
                                    dir: le.aim2 + Math.PI,
                                    action: 0
                                }) : e > o ? (e <= h ? e <= c ? e <= r ? (m(40, 0), m(9, 1), d.slowOT ? Y.buildIndex != Y.items[1] && Bt(Y.items[1]) : (Y.weaponIndex != Y.weapons[[10, 14].includes(Y.weapons[1]) ? 1 : 0] || Y.buildIndex > -1) && Ot(Y.weapons[[10, 14].includes(Y.weapons[1]) ? 1 : 0])) : (m(22, 0), m(19, 1), (Y.weaponIndex != Y.weapons[[10, 14].includes(Y.weapons[1]) ? 1 : 0] || Y.buildIndex > -1) && Ot(Y.weapons[[10, 14].includes(Y.weapons[1]) ? 1 : 0])) : (m(6, 0), m(12, 1), (Y.weaponIndex != Y.weapons[[10, 14].includes(Y.weapons[1]) ? 1 : 0] || Y.buildIndex > -1) && Ot(Y.weapons[[10, 14].includes(Y.weapons[1]) ? 1 : 0])) : (Vt(), m(11, 1), (Y.weaponIndex != Y.weapons[[10, 14].includes(Y.weapons[1]) ? 1 : 0] || Y.buildIndex > -1) && Ot(Y.weapons[[10, 14].includes(Y.weapons[1]) ? 1 : 0])), {
                                    dir: le.aim2,
                                    action: 0
                                }) : {
                                    dir: void 0,
                                    action: 0
                                }
                            }
                            return this.ticking = !1, {
                                dir: void 0,
                                action: 0
                            }
                        }, this.bowMovement = function() {
                            let e = this.gotoGoal(685, 3);
                            e.action ? 0 != Y.reloads[53] || this.isTrue ? z("a", e.dir, 1) : this.rangeType("ageInsta") : z("a", e.dir, 1)
                        }, this.tickMovement = function() {
                            let e = this.gotoGoal([10, 14].includes(Y.weapons[1]) && Y.y2 > i.snowBiomeTop ? 233 : 15 == Y.weapons[1] ? 250 : Y.y2 <= i.snowBiomeTop ? [10, 14].includes(Y.weapons[1]) ? 227 : 235 : 250, 3);
                            e.action && 0 == Y.reloads[53] && !this.isTrue && this.startTick ? (_("Dev", "One Tick Pass", "lightblue"), this.oneTickType()) : z("a", e.dir, 1)
                        }, this.kmTickMovement = function() {
                            let e = this.gotoGoal(240, 3);
                            e.action ? 22 == le.skinIndex || 0 != Y.reloads[53] || this.isTrue || (L.tick - le.poisonTick) % i.serverUpdateRate != 8 ? z("a", e.dir, 1) : this.kmTickType() : z("a", e.dir, 1)
                        }, this.boostTickMovement = function() {
                            let e = 9 == Y.weapons[1] ? 365 : 12 == Y.weapons[1] ? 380 : 13 == Y.weapons[1] ? 390 : 15 == Y.weapons[1] ? 365 : 370,
                                t = 9 == Y.weapons[1] ? 2 : 12 == Y.weapons[1] || 13 == Y.weapons[1] ? 1.5 : 15 == Y.weapons[1] ? 2 : 3,
                                n = this.gotoGoal(e, t);
                            n.action ? 0 != Y.reloads[53] || this.isTrue ? z("a", n.dir, 1) : this.boostTickType() : z("a", n.dir, 1)
                        }, this.perfCheck = function(e, t) {
                            if (11 == t.weaponIndex && Kt.getAngleDist(t.aim2 + Math.PI, t.d2) <= i.shieldAngle) return !1;
                            if (![9, 12, 13, 15].includes(Y.weapons[1])) return !0;
                            let n = {
                                x: t.x2 + 70 * Math.cos(t.aim2 + Math.PI),
                                y: t.y2 + 70 * Math.sin(t.aim2 + Math.PI)
                            };
                            if (Kt.lineInRect(e.x2 - e.scale, e.y2 - e.scale, e.x2 + e.scale, e.y2 + e.scale, n.x, n.y, n.x, n.y)) return !0;
                            let a = ais.filter((e => e.visible)).find((e => {
                                if (Kt.lineInRect(e.x2 - e.scale, e.y2 - e.scale, e.x2 + e.scale, e.y2 + e.scale, n.x, n.y, n.x, n.y)) return !0
                            }));
                            return !a && (a = te.filter((e => e.active)).find((e => {
                                let t = e.getScale();
                                if (!e.ignoreCollision && Kt.lineInRect(e.x - t, e.y - t, e.x + t, e.y + t, n.x, n.y, n.x, n.y)) return !0
                            })), !a)
                        }
                    }
                },
                dn = new class {
                    constructor(e, t) {
                        this.hat = function() {
                            e.forEach((e => {
                                let t = Oe(nn, e);
                                t && !Y.skins[e] && Y.points >= t.price && z("c", 1, e, 0)
                            }))
                        }, this.acc = function() {
                            t.forEach((e => {
                                let t = Oe(an, e);
                                t && !Y.tails[e] && Y.points >= t.price && z("c", 1, e, 1)
                            }))
                        }
                    }
                }([6, 7, 22, 12, 53, 40, 15, 31, 20], [11, 13, 19, 18, 21]),
                pn = (new class {
                    constructor() {
                        this.sb = function(e) {
                            e(3), e(17), e(31), e(23), e(9), e(38)
                        }, this.kh = function(e) {
                            e(3), e(17), e(31), e(23), e(10), e(38), e(4), e(25)
                        }, this.pb = function(e) {
                            e(5), e(17), e(32), e(23), e(9), e(38)
                        }, this.ph = function(e) {
                            e(5), e(17), e(32), e(23), e(10), e(38), e(28), e(25)
                        }, this.db = function(e) {
                            e(7), e(17), e(31), e(23), e(9), e(34)
                        }
                    }
                }, {}),
                hn = [],
                mn = [],
                un = [],
                gn = {
                    active: !1,
                    grid: 40,
                    scale: 1440,
                    x: 14400,
                    y: 14400,
                    chaseNear: !1,
                    array: [],
                    lastX: this.grid / 2,
                    lastY: this.grid / 2
                };

            function Be(e) {
                z("6", e.slice(0, 30))
            }
            let fn = [];

            function yn(e, t, n, a, o, s, r, l) {
                let c = 0 == s ? 9 : 2 == s ? 12 : 3 == s ? 13 : 5 == s && 15,
                    d = 2 * i.playerScale,
                    p = {
                        x: 1 == s ? e : e - d * Math.cos(n),
                        y: 1 == s ? t : t - d * Math.sin(n)
                    },
                    h = Z.filter((e => e.visible && Kt.getDist(p, e, 0, 2) <= e.scale)).sort((function(e, t) {
                        return Kt.getDist(p, e, 0, 2) - Kt.getDist(p, t, 0, 2)
                    }))[0];
                h && (1 == s ? h.shooting[53] = 1 : (h.shootIndex = c, h.shooting[1] = 1, function(e, t, n, i, a, o) {
                    e.isTeam(Y) || (nt = Kt.getDirect(Y, e, 2, 2), Kt.getAngleDist(nt, t) <= .2 && (e.bowThreat[o]++, 5 == a && wn++, setTimeout((() => {
                        e.bowThreat[o]--, 5 == a && wn--
                    }), n / i), (e.bowThreat[9] >= 1 && (e.bowThreat[12] >= 1 || e.bowThreat[15] >= 1) || wn >= 2) && (Rt(1, e.aim2), ce.anti0Tick = 4, ce.antiSync || qt())))
                }(h, n, a, o, s, c)))
            }
            let wn = 0;

            function kn(e, t, n) {
                if (Y && e)
                    if (Kt.removeAllChildren(Xe), Xe.classList.add("visible"), Kt.generateElement({
                            id: "itemInfoName",
                            text: Kt.capitalizeFirst(e.name),
                            parent: Xe
                        }), Kt.generateElement({
                            id: "itemInfoDesc",
                            text: e.desc,
                            parent: Xe
                        }), n);
                    else if (t) Kt.generateElement({
                    class: "itemInfoReq",
                    text: e.type ? "secondary" : "primary",
                    parent: Xe
                });
                else {
                    for (let t = 0; t < e.req.length; t += 2) Kt.generateElement({
                        class: "itemInfoReq",
                        html: e.req[t] + "<span class='itemInfoReqVal'> x" + e.req[t + 1] + "</span>",
                        parent: Xe
                    });
                    e.group.limit && Kt.generateElement({
                        class: "itemInfoLmt",
                        text: (Y.itemCounts[e.group.id] || 0) + "/" + (i.isSandbox ? 99 : e.group.limit),
                        parent: Xe
                    })
                } else Xe.classList.remove("visible")
            }

            function vn() {
                Je = window.innerWidth, Ze = window.innerHeight;
                let e = Math.max(Je / at, Ze / ot) * st;
                Le.width = Je * st, Le.height = Ze * st, Le.style.width = Je + "px", Le.style.height = Ze + "px", je.setTransform(e, 0, 0, e, (Je * st - at * e) / 2, (Ze * st - ot * e) / 2)
            }
            window.addEventListener("resize", Kt.checkTrusted(vn)), vn();
            const xn = document.getElementById("touch-controls-fullscreen");
            xn.style.display = "block", xn.addEventListener("mousemove", (function(e) {
                lt = e.clientX, ct = e.clientY
            }), !1);
            let bn = {
                left: !1,
                middle: !1,
                right: !1
            };

            function _n() {
                return Y ? (Y.lockDir || (it = Math.atan2(ct - Ze / 2, lt - Je / 2)), it || 0) : 0
            }
            xn.addEventListener("mousedown", (function(e) {
                1 != kt && (kt = 1, 0 == e.button ? bn.left = !0 : 1 == e.button ? bn.middle = !0 : 2 == e.button && (bn.right = !0))
            }), !1), xn.addEventListener("mouseup", Kt.checkTrusted((function(e) {
                0 != kt && (kt = 0, 0 == e.button ? bn.left = !1 : 1 == e.button ? bn.middle = !1 : 2 == e.button && (bn.right = !1))
            }))), xn.addEventListener("wheel", (function(e) {
                e.deltaY < 0 ? (wbe += .005, at = i.maxScreenWidth * wbe, ot = i.maxScreenHeight * wbe, vn()) : (wbe -= .005, at = i.maxScreenWidth * wbe, ot = i.maxScreenHeight * wbe, vn())
            }), !1);
            Date.now();

            function In(e) {
                if (e) {
                    if (!Y) return "0";
                    if (ce.autoAim || (bn.left || A && le.dist2 <= Qt.weapons[Y.weapons[0]].range + 1.8 * le.scale && !ln.inTrap) && 0 == Y.reloads[Y.weapons[0]]) it = getEl("weaponGrind").checked ? "getSafeDir()" : se.length ? ce.revAim ? "(near.aim2 + Math.PI)" : "near.aim2" : "getSafeDir()";
                    else if (bn.right && 0 == Y.reloads[10 == Y.weapons[1] ? Y.weapons[1] : Y.weapons[0]]) it = "getSafeDir()";
                    else if (ln.inTrap && 0 == Y.reloads[ln.notFast() ? Y.weapons[1] : Y.weapons[0]]) it = "traps.aim";
                    else if (!cn.isTrue && Yt && 0 == Y.reloads[Ft() ? Y.weapons[1] : Y.weapons[0]]) it = "aimSpike";
                    else if (!Y.lockDir) {
                        if (d.noDir) return "undefined";
                        it = "getSafeDir()"
                    }
                    return it
                }
                if (!Y) return 0;
                if (ce.autoAim || (bn.left || A && le.dist2 <= Qt.weapons[Y.weapons[0]].range + 1.8 * le.scale && !ln.inTrap) && 0 == Y.reloads[Y.weapons[0]]) it = getEl("weaponGrind").checked ? _n() : se.length ? ce.revAim ? le.aim2 + Math.PI : le.aim2 : _n();
                else if (bn.right && 0 == Y.reloads[10 == Y.weapons[1] ? Y.weapons[1] : Y.weapons[0]]) it = _n();
                else if (ln.inTrap && 0 == Y.reloads[ln.notFast() ? Y.weapons[1] : Y.weapons[0]]) it = ln.aim;
                else if (!cn.isTrue && Yt && 0 == Y.reloads[Ft() ? Y.weapons[1] : Y.weapons[0]]) it = Nt;
                else if (!Y.lockDir) {
                    if (d.noDir) return;
                    it = _n()
                }
                return it || 0
            }

            function Cn() {
                return "block" != dt.style.display && "block" != Ye.style.display && !x
            }

            function Sn() {
                if (Zn) z("a", void 0, 1);
                else {
                    let e = function() {
                        let e = 0,
                            t = 0;
                        for (let n in wt) {
                            let i = wt[n];
                            e += !!yt[n] * i[0], t += !!yt[n] * i[1]
                        }
                        return 0 == e && 0 == t ? void 0 : Math.atan2(t, e)
                    }();
                    (null == B || null == e || Math.abs(e - B) > .3) && (ce.autoPush || Zn || z("a", e, 1), B = e)
                }
            }

            function Tn(e) {
                return (Y.scale + e.getScale()) / (Y.maxSpeed * Qt.weapons[Y.weaponIndex].spdMult) + (e.dmg && !e.isTeamObject(Y) ? 35 : 0)
            }

            function Dn() {
                un = [],
                    function() {
                        let e = te.filter((e => Y.canSee(e) && e.active));
                        for (let t = 0; t < gn.grid; t++) {
                            un[t] = [];
                            for (let n = 0; n < gn.grid; n++) {
                                let i = {
                                    x: Y.x2 - gn.scale / 2 + gn.scale / gn.grid * n,
                                    y: Y.y2 - gn.scale / 2 + gn.scale / gn.grid * t
                                };
                                if (Kt.getDist(gn.chaseNear ? le : gn, i, gn.chaseNear ? 2 : 0, 0) <= (gn.chaseNear ? 35 : 60)) {
                                    gn.lastX = n, gn.lastY = t, un[t][n] = 0;
                                    continue
                                }
                                let a = e.find((e => Kt.getDist(e, i, 0, 0) <= Tn(e)));
                                if (a) {
                                    if (a.trap) {
                                        un[t][n] = 0;
                                        continue
                                    }
                                    un[t][n] = 1
                                } else un[t][n] = 0
                            }
                        }
                    }()
            }
            addEventListener("keydown", Kt.checkTrusted((function(e) {
                let t = e.which || e.keyCode || 0;
                Y && Y.alive && Cn() && (yt[t] || (yt[t] = 1, xt[e.key] = 1, 27 == t ? (O = !O, $("#menuDiv").toggle(), $("#menuChatDiv").toggle()) : 69 == t ? At() : 66 == t ? cn.syncTry() : 67 == t ? (pn.x = Y.x, pn.y = Y.y) : null != Y.weapons[t - 49] ? Y.weaponCode = Y.weapons[t - 49] : wt[t] ? Sn() : "0" == e.key ? G.send("6", "snoweiv3.1415926535897") : "C" == e.key ? syncChat(getEl("songs").value) : "/" == e.key ? (S(), "function" == typeof window.debug && window.debug(), G.send("6", "Success Reset Chat / Debug")) : "m" == e.key ? bt.placeSpawnPads = !bt.placeSpawnPads : "z" == e.key ? bt.place = !bt.place : "Z" == e.key ? "function" == typeof window.debug && window.debug() : 32 == t && (z("d", 1, _n(), 1), z("d", 0, _n(), 1))))
            }))), window.addEventListener("keyup", Kt.checkTrusted((function(e) {
                if (Y && Y.alive) {
                    let t = e.which || e.keyCode || 0;
                    13 == t ? function() {
                        if ("none" != w.style.display) {
                            let e = function(e) {
                                    return {
                                        found: e.startsWith("/") && c[e.slice(1).split(" ")[0]],
                                        fv: c[e.slice(1).split(" ")[0]]
                                    }
                                },
                                t = e(v.value);
                            t.found ? "function" == typeof t.fv.action && t.fv.action(v.value) : Be(v.value), v.value = "", v.blur()
                        } else x ? v.blur() : v.focus()
                    }() : Cn() && yt[t] && (yt[t] = 0, xt[e.key] = 0, wt[t] && Sn())
                }
            })));
            let Mn = [];

            function Un(e = void 0) {
                for (let t = 3; t < Qt.list.length; ++t) {
                    let n = Qt.list[t].group.id,
                        i = Qt.weapons.length + t;
                    Mn[i] ? e == n && (Mn[i].innerHTML = Y.itemCounts[e] || 0) : (Mn[i] = document.createElement("div"), Mn[i].id = "itemCount" + i, getEl("actionBarItem" + i).appendChild(Mn[i]), Mn[i].style = "\n                        display: block;\n                        position: absolute;\n                        padding-left: 5px;\n                        font-size: 2em;\n                        color: #fff;\n                        ", Mn[i].innerHTML = Y.itemCounts[n] || 0)
                }
            }

            function En(e) {
                K = e.teams
            }

            function Pn(e) {
                yt = {}, xt = {}, X = e, kt = 0, vt = !0, z("d", 0, In(), 1), ce.ageInsta = !0, ft && (ft = !1, te.length = 0, ne.length = 0)
            }

            function Bn(e, t) {
                let n = (a = e[0], Oe(Z, a));
                var a;
                n || (n = new Ut(e[0], e[1], i, Kt, on, en, Z, ais, Qt, nn, an), Z.push(n)), e[1] != X && _(null, `Found ${e[2]} {${e[1]}}`, "lime"), n.spawn(!!t || null), n.visible = !1, n.oldPos = {
                    x2: void 0,
                    y2: void 0
                }, n.x2 = void 0, n.y2 = void 0, n.x3 = void 0, n.y3 = void 0, n.setData(e), t && (Y || window.prepareUI(n), Y = n, et = Y.x, tt = Y.y, ce.lastDir = 0, di(), Wn(), Un(), Y.skins[7] && (ce.reSync = !0))
            }

            function On(e) {
                for (let t = 0; t < Z.length; t++)
                    if (Z[t].id == e) {
                        _("Game", Z[t].name + "[" + Z[t].sid + "] left the game", "red"), Z.splice(t, 1);
                        break
                    }
            }

            function An(e, t) {
                J = Re(e), J && (J.oldHealth = J.health, J.health = t, J.judgeShame(), J.oldHealth > J.health && (J.damaged = J.oldHealth - J.health, zt.push([e, t, J.damaged])))
            }

            function Rn() {
                vt = !1, $t = {
                    x: Y.x,
                    y: Y.y
                }, d.autoRespawn && (getEl("diedText").style.display = "none", z("M", {
                    name: V[0],
                    moofoll: V[1],
                    skin: V[2]
                }))
            }

            function Hn(e, t) {
                Y && (Y.itemCounts[e] = t, Un(e))
            }

            function Wn(e, t, n) {
                null != e && (Y.XP = e), null != t && (Y.maxXP = t), null != n && (Y.age = n)
            }

            function Ln(e, t) {
                if (Y.upgradePoints = e, Y.upgrAge = t, e > 0) {
                    Zt.length = 0, Kt.removeAllChildren(Ge);
                    for (let e = 0; e < Qt.weapons.length; ++e)
                        if (Qt.weapons[e].age == t && (null == Qt.weapons[e].pre || Y.weapons.indexOf(Qt.weapons[e].pre) >= 0)) {
                            Kt.generateElement({
                                id: "upgradeItem" + e,
                                class: "actionBarItem",
                                onmouseout: function() {
                                    kn()
                                },
                                parent: Ge
                            }).style.backgroundImage = getEl("actionBarItem" + e).style.backgroundImage, Zt.push(e)
                        }
                    for (let e = 0; e < Qt.list.length; ++e)
                        if (Qt.list[e].age == t && (null == Qt.list[e].pre || Y.items.indexOf(Qt.list[e].pre) >= 0)) {
                            let t = Qt.weapons.length + e;
                            Kt.generateElement({
                                id: "upgradeItem" + t,
                                class: "actionBarItem",
                                onmouseout: function() {
                                    kn()
                                },
                                parent: Ge
                            }).style.backgroundImage = getEl("actionBarItem" + t).style.backgroundImage, Zt.push(t)
                        }
                    for (let e = 0; e < Zt.length; e++) ! function(e) {
                        let t = getEl("upgradeItem" + e);
                        t.onclick = Kt.checkTrusted((function() {
                            z("H", e)
                        })), Kt.hookTouchEvents(t)
                    }(Zt[e]);
                    Zt.length ? (Ge.style.display = "block", Fe.style.display = "block", Fe.innerHTML = "SELECT ITEMS (" + e + ")") : (Ge.style.display = "none", Fe.style.display = "none", kn())
                } else Ge.style.display = "none", Fe.style.display = "none", kn()
            }

            function jn(e, t) {
                const n = qn();
                return (jn = function(e, t) {
                    return n[e -= 223]
                })(e, t)
            }

            function qn() {
                const e = ["send", "Auto Spike Tick", "8YphnCx", "527168azlACX", "#00ff73", "23220HlBCcl", "1815317jBsgzR", "6DhJSqX", "184841nQOhDp", "showText", "118660MudszC", "aim2", "267342lmZHhF", "23700YNYyAX", "936IuVCJX", "getDirect", " Test Spike Tick "];
                return (qn = function() {
                    return e
                })()
            }

            function Vn() {
                const e = jn;
                let t = Kt[e(232)](J, Y, 0, 2);
                Pt(7, 0), Pt(18, 1), Ot(Y.weapons[0]), G[e(234)]("d", 1, le[e(228)]), rn[e(226)](Y.x2, Y.y2, 30, .1, 1850, e(235), e(238), 2), Rt(2, t), Rt(2, le[e(228)]);
                for (let t = 0; t < 4; t++) G[e(234)]("6", e(233)), Ht(2, le[e(228)] - 90 + 45 * t);
                Xn((() => {
                    Pt(53, 0), Pt(21, 1), Xn((() => {
                        const e = jn;
                        G[e(234)]("d", 0, le[e(228)]), Pt(6, 0)
                    }), 3)
                }), 1)
            }! function(e, t) {
                const n = jn,
                    i = e();
                for (;;) try {
                    if (145791 === -parseInt(n(225)) / 1 + parseInt(n(239)) / 2 + -parseInt(n(224)) / 3 * (-parseInt(n(237)) / 4) + parseInt(n(227)) / 5 + parseInt(n(229)) / 6 + -parseInt(n(223)) / 7 * (parseInt(n(236)) / 8) + parseInt(n(231)) / 9 * (parseInt(n(230)) / 10)) break;
                    i.push(i.shift())
                } catch (e) {
                    i.push(i.shift())
                }
            }(qn),
            function(e, t) {
                const n = Fn,
                    i = e();
                for (;;) try {
                    if (495072 === parseInt(n(495)) / 1 * (-parseInt(n(482)) / 2) + parseInt(n(490)) / 3 + -parseInt(n(502)) / 4 + parseInt(n(488)) / 5 * (-parseInt(n(479)) / 6) + -parseInt(n(475)) / 7 * (-parseInt(n(487)) / 8) + -parseInt(n(491)) / 9 * (-parseInt(n(500)) / 10) + parseInt(n(498)) / 11) break;
                    i.push(i.shift())
                } catch (e) {
                    i.push(i.shift())
                }
            }(Nn);
            const zn = (e, t) => {
                    const n = Fn,
                        i = 10 !== t.weapons[1] || Y.reloads[t.weapons[1]] ? 0 : 1,
                        a = t[n(506)][i];
                    if (Y[n(503)][a]) return 0;
                    const o = Qt[n(506)][a],
                        s = _a(e, t) <= e[n(496)]() + o[n(497)];
                    return t[n(504)] && s ? o[n(499)] * (o[n(480)] || 1) * 3.3 : 0
                },
                Gn = () => {
                    const e = Fn,
                        t = [],
                        n = (Y.x, Y.y, te[e(492)]);
                    for (let i = 0; i < n; i++) {
                        const n = te[i];
                        if (n[e(493)] && n[e(508)] && n.health > 0) {
                            const i = Qt[e(501)][n.id],
                                a = 35 + i[e(505)] + (i[e(483)] || 0);
                            if (_a(n, Y) <= 2 * a) {
                                let i = 0;
                                const a = Z[e(492)];
                                for (let e = 0; e < a; e++) i += zn(n, Z[e]);
                                n.health <= i && t[e(478)](n)
                            }
                        }
                    }
                    const i = () => {
                        const n = e;
                        let i = ne[n(494)]((e => e[n(489)] && e[n(508)] && e[n(481)](Y) && _a(e, Y) <= e[n(496)]() + 5));
                        const a = te[n(477)]((e => e.dmg && e[n(508)] && e.isTeamObject(Y) && _a(e, Y) < 87 && !i[n(492)])) ? 4 : 2;
                        t[n(485)]((t => {
                            const i = n;
                            let o = ((t, n, i) => {
                                const a = e;
                                if (!i) return null;
                                const o = 2 * Math.PI,
                                    s = Math.PI / 360,
                                    r = Qt[a(501)][t[a(484)][n]];
                                let l = Math.atan2(i.y - t.y, i.x - t.x);
                                t[a(505)], r[a(505)], r[a(483)];
                                for (let e = 0; e < o; e += s) {
                                    let t = [(l + e) % o, (l - e + o) % o];
                                    for (let e of t) return e
                                }
                                return null
                            })(Y, a, t);
                            null !== o && (Rt(a, o), 4 == a ? rn.showText(Y.x2, Y.y2, 30, .15, 1850, "Trap Preplace", i(486), 2) : 2 == a && rn[i(507)](Y.x2, Y.y2, 30, .15, 1850, "Spike Preplace", i(486), 2))
                        }))
                    };
                    le && le[e(476)] <= 360 && i()
                };

            function Fn(e, t) {
                const n = Nn();
                return (Fn = function(e, t) {
                    return n[e -= 475]
                })(e, t)
            }

            function Nn() {
                const e = ["#fff", "136mVzjEH", "5dSOfcP", "trap", "1860297HuBgTp", "36rYSJjS", "length", "isItem", "filter", "51DpHCEa", "getScale", "range", "450329wOtNEr", "dmg", "1835530UjnEkx", "list", "1718844BEDDAB", "reloads", "visible", "scale", "weapons", "showText", "active", "100527oZMABi", "dist3", "find", "push", "1948866XWDNrH", "sDmg", "isTeamObject", "15286bMiZeV", "placeOffset", "items", "forEach"];
                return (Nn = function() {
                    return e
                })()
            }

            function Yn(e) {
                let t = We(e);
                if (en.disableBySid(e), Gn(), Y) {
                    for (let t = 0; t < oe.length; t++)
                        if (oe[t].sid == e) {
                            oe.splice(t, 1);
                            break
                        }
                    Y.canSee(t) || mn.push({
                        x: t.x,
                        y: t.y
                    }), mn.length > 8 && mn.shift(), ln.replacer(t)
                }
                let n = le,
                    i = Y,
                    a = (_a(i, n), Jn(i, n), Math.atan2(t.y - Y.y2, t.x - Y.x2), Math.hypot(t.y - Y.y2, t.x - Y.x2));
                var o = r;

                function s() {
                    var e = ["10358290zJMcMn", "186OEqAyT", "322344OrmXCQ", "weapons", "1811219cCdovw", "259qVCKTe", "7120JcioIi", "5OmKvjS", "58568620sXeFaY", "reloads", "14137506pNYEUK", "2596398FFBWIz", "2xnoiVa"];
                    return (s = function() {
                        return e
                    })()
                }

                function r(e, t) {
                    var n = s();
                    return (r = function(e, t) {
                        return n[e -= 382]
                    })(e, t)
                }! function(e, t) {
                    for (var n = r, i = e();;) try {
                        if (944262 === -parseInt(n(389)) / 1 * (parseInt(n(384)) / 2) + -parseInt(n(386)) / 3 * (parseInt(n(391)) / 4) + -parseInt(n(392)) / 5 * (parseInt(n(383)) / 6) + -parseInt(n(390)) / 7 * (parseInt(n(387)) / 8) + -parseInt(n(382)) / 9 + parseInt(n(385)) / 10 + parseInt(n(393)) / 11) break;
                        i.push(i.shift())
                    } catch (e) {
                        i.push(i.shift())
                    }
                }(s), a <= 200 && function(e, t) {
                    try {
                        return Math.hypot((t.y2 || t.y) - (e.y2 || e.y), (t.x2 || t.x) - (e.x2 || e.x))
                    } catch (e) {
                        return 1 / 0
                    }
                }(Y, J) <= 168 && J != Y && 0 == Y[o(394)][Y[o(388)][0]] && Vn()
            }

            function $n(e) {
                Y && en.removeAllItems(e)
            }

            function Xn(e, t) {
                N.manage[N.tick + t] ? N.manage[N.tick + t].push(e) : N.manage[N.tick + t] = [e]
            }

            function Jn(e, t) {
                try {
                    return Math.atan2((t.y2 || t.y) - (e.y2 || e.y), (t.x2 || t.x) - (e.x2 || e.x))
                } catch (e) {
                    return 0
                }
            }
            let Zn = !1,
                Kn = !1,
                Qn = {
                    insta: {
                        todo: !1,
                        wait: !1,
                        count: 4,
                        shame: 5
                    },
                    bull: !1,
                    antibull: 0,
                    reloaded: !1,
                    stopspin: !0
                };

            function ei(e) {
                Y.shameCount > 0 ? ce.reSync = !0 : ce.reSync = !1, L.tick++, se = [], re = [], le = [], L.tickSpeed = performance.now() - L.lastTick, L.lastTick = performance.now(), Z.forEach((e => {
                    e.forcePos = !e.visible, e.visible = !1, e.timeHealed - e.timeDamaged > 0 && e.lastshamecount < e.shameCount && (e.pinge = e.timeHealed - e.timeDamaged)
                }));
                for (let p = 0; p < e.length;) {
                    if (J = Re(e[p]), J) {
                        J.t1 = void 0 === J.t2 ? L.lastTick : J.t2, J.t2 = L.lastTick, J.oldPos.x2 = J.x2, J.oldPos.y2 = J.y2, J.x1 = J.x, J.y1 = J.y, J.x2 = e[p + 1], J.y2 = e[p + 2], J.x3 = J.x2 + (J.x2 - J.oldPos.x2), J.y3 = J.y2 + (J.y2 - J.oldPos.y2), J.d1 = void 0 === J.d2 ? e[p + 3] : J.d2, J.d2 = e[p + 3], J.dt = 0, J.buildIndex = e[p + 4], J.weaponIndex = e[p + 5], J.weaponVariant = e[p + 6], J.team = e[p + 7], J.isLeader = e[p + 8], J.oldSkinIndex = J.skinIndex, J.oldTailIndex = J.tailIndex, J.skinIndex = e[p + 9], J.tailIndex = e[p + 10], J.iconIndex = e[p + 11], J.zIndex = e[p + 12], J.visible = !0, J.update(L.tickSpeed), J.dist2 = Kt.getDist(J, Y, 2, 2), J.aim2 = Kt.getDirect(J, Y, 2, 2), J.dist3 = Kt.getDist(J, Y, 3, 3), J.aim3 = Kt.getDirect(J, Y, 3, 3), J.damageThreat = 0, 45 == J.skinIndex && J.shameTimer <= 0 && J.addShameTimer(), 45 == J.oldSkinIndex && 45 != J.skinIndex && (J.shameTimer = 0, J.shameCount = 0, J == Y && jt()), o.forEach((e => {
                            e.showName = "YEAHHH"
                        }));
                        for (let h = 0; h < Z.length; h++)
                            for (let m = 0; m < o.length; m++) Y.id === m.id && (m.showName = "YEAHHHHHH");
                        if (Y.shameCount < 4 && le.dist3 <= 300 && le.reloads[le.primaryIndex] <= L.tickRate * (window.pingTime >= 200 ? 2 : 1) ? (Kn = !0, jt()) : (Kn && jt(), Kn = !1), J == Y)
                            if (ne.length) {
                                ne.forEach((e => {
                                    e.onNear = !1, e.active && (!e.onNear && Kt.getDist(e, J, 0, 2) <= e.scale + Qt.weapons[J.weapons[0]].range && (e.onNear = !0), e.isItem && e.owner && !e.pps && J.sid == e.owner.sid && Kt.getDist(e, J, 0, 2) > (parseInt(getEl("breakRange").value) || 0) && !e.breakObj && ![13, 14, 20].includes(e.id) && (e.breakObj = !0, oe.push({
                                        x: e.x,
                                        y: e.y,
                                        sid: e.sid
                                    })))
                                }));
                                let u = ne.filter((e => e.trap && e.active && Kt.getDist(e, J, 0, 2) <= J.scale + e.getScale() + 25 && !e.isTeamObject(J))).sort((function(e, t) {
                                    return Kt.getDist(e, J, 0, 2) - Kt.getDist(t, J, 0, 2)
                                }))[0];
                                if (u) {
                                    let y = te.filter((e => e.dmg && _a(J, e) <= J.scale + u.scale / 2 && !e.isTeamObject(J) && e.active))[0];
                                    ln.dist = Kt.getDist(u, J, 0, 2), ln.aim = Kt.getDirect(y || u, J, 0, 2), ln.protect(Jn(u, J) - Math.PI), ln.inTrap = !0, ln.info = u
                                } else ln.inTrap = !1, ln.info = {};

                                function t(e, i) {
                                    const a = n();
                                    return (t = function(e, t) {
                                        return a[e -= 215]
                                    })(e, i)
                                }

                                function n() {
                                    const e = ["active", "8NFvDoe", "getDist", "1119nDyFxw", "189028atfbQV", "isTrue", "312KkOAnL", "1751495NyzGyK", "4444029GJFNrp", "filter", "getDirect", "name", "isTeamObject", "greater spikes", "6041750fBQkfd", "poison spikes", "482225sQBQAW", "1946484IUFqzP", "13436JdYIei", "sort"];
                                    return (n = function() {
                                        return e
                                    })()
                                }
                                const g = t;
                                ! function(e, n) {
                                    const i = t,
                                        a = e();
                                    for (;;) try {
                                        if (877351 === -parseInt(i(215)) / 1 + parseInt(i(225)) / 2 + -parseInt(i(231)) / 3 * (-parseInt(i(226)) / 4) + parseInt(i(224)) / 5 + parseInt(i(234)) / 6 * (parseInt(i(232)) / 7) + parseInt(i(229)) / 8 * (-parseInt(i(216)) / 9) + -parseInt(i(222)) / 10) break;
                                        a.push(a.shift())
                                    } catch (e) {
                                        a.push(a.shift())
                                    }
                                }(n);
                                let f = te[g(217)]((e => ("spikes" == e[g(219)] || e[g(219)] == g(221) || "spinning spikes" == e.name || e.name == g(223)) && e[g(228)] && Kt[g(230)](e, J, 0, 2) <= 145 && !e[g(220)](J)))[g(227)]((function(e, t) {
                                    const n = g;
                                    return Kt[n(230)](e, J, 0, 2) - Kt[n(230)](t, J, 0, 2)
                                }))[0];
                                f && !cn[g(233)] ? (Nt = Kt[g(218)](f, Y, 0, 2), Yt = !0, Gt = f) : (Yt = !1, Gt = {})
                            } else ln.inTrap = !1, Yt = !1;
                        J.weaponIndex < 9 ? (J.primaryIndex = J.weaponIndex, J.primaryVariant = J.weaponVariant) : J.weaponIndex > 8 && (J.secondaryIndex = J.weaponIndex, J.secondaryVariant = J.weaponVariant)
                    }
                    p += 13
                }
                if (rn.stack.length) {
                    let w = 0,
                        k = 0,
                        v = {
                            x: null,
                            y: null
                        },
                        x = {
                            x: null,
                            y: null
                        };
                    rn.stack.forEach((e => {
                        e.value >= 0 ? (0 == w && (v = {
                            x: e.x,
                            y: e.y
                        }), w += Math.abs(e.value)) : (0 == k && (x = {
                            x: e.x,
                            y: e.y
                        }), k += Math.abs(e.value))
                    })), k > 0 && rn.showText(x.x, x.y, Math.max(45, Math.min(50, k)), .18, 500, k, "#8ecc51"), w > 0 && rn.showText(v.x, v.y, Math.max(45, Math.min(50, w)), .18, 500, w, "#fff"), rn.stack = []
                }
                fn.length && (fn.forEach((e => {
                    yn(...e)
                })), fn = []);
                for (let b = 0; b < e.length;) J = Re(e[b]), J && (J.isTeam(Y) || (se.push(J), J.dist2 <= Qt.weapons[null == J.primaryIndex ? 5 : J.primaryIndex].range + 2 * Y.scale && re.push(J)), J.manageReload(), J != Y && J.addDamageThreat(Y)), b += 13;
                if (Y && Y.alive) {
                    if (se.length) {
                        le = se.sort((function(e, t) {
                            return e.dist2 - t.dist2
                        }))[0];
                        let C = _things.enemy_.filter((e => he(e, _things.player).toFixed(1) == e.dir.toFixed(1)))[0];
                        !C || 15 != C.weaponIndex || C.reloads[C.weaponIndex] || 11 != Y.weapons[1] || window.switched || (window.switched = 1, Ot(Y.weapons[1]), z("D", he(_things.player, C)), setTimeout((() => {
                            window.switched = 0
                        }), 200))
                    }

                    function a() {
                        const e = ["damageThreat", "primaryIndex", "setPoisonTick", "2651700zcPkiT", "reSync", "105622wkHfJC", "setBullTick", "tick", "secondaryIndex", "tickBase", "skinIndex", "reloads", "2257409LFaoNr", "weapons", "tailIndex", "soldierAnti", "48kcEasC", "600962HdBGsi", "4eXatBA", "shameCount", "dist2", "primaryVariant", "forEach", "1971594nsHAJN", "length", "damaged", "2midBrc", "includes", "healingBeta", "2512440cdoVGL", "checked", "canCounter", "317529DGXQHc", "health", "1110xBMfrF", "pingTime", "latestTail", "antiTimer", "map", "canEmpAnti"];
                        return (a = function() {
                            return e
                        })()
                    }
                    L.tickQueue[L.tick] && (L.tickQueue[L.tick].forEach((e => {
                        e()
                    })), L.tickQueue[L.tick] = null);
                    const _ = s;

                    function s(e, t) {
                        const n = a();
                        return (s = function(e, t) {
                            return n[e -= 354]
                        })(e, t)
                    }
                    if (function(e, t) {
                            const n = s,
                                i = e();
                            for (;;) try {
                                if (363677 === parseInt(n(364)) / 1 * (parseInt(n(355)) / 2) + parseInt(n(361)) / 3 * (parseInt(n(356)) / 4) + parseInt(n(367)) / 5 + -parseInt(n(381)) / 6 + parseInt(n(390)) / 7 + parseInt(n(354)) / 8 * (-parseInt(n(370)) / 9) + -parseInt(n(372)) / 10 * (parseInt(n(383)) / 11)) break;
                                i.push(i.shift())
                            } catch (e) {
                                i.push(i.shift())
                            }
                        }(a), zt[_(362)] && (zt[_(360)]((e => {
                            const t = _;
                            if (window[t(373)] < 150) {
                                let n = e[0],
                                    i = (e[1], e[2]);
                                J = Re(n);
                                let a = !1;
                                if (J == Y)
                                    if (7 == J.skinIndex && (5 == i || 13 == J[t(374)] && 2 == i) && (ce[t(382)] && (ce[t(382)] = !1, J.setBullTick = !0), a = !0), vt) {
                                        Lt();
                                        let e = [.25, .45][t(376)]((e => e * Qt[t(391)][Y[t(391)][0]].dmg * Wt())),
                                            n = !!se[t(362)] && (!a && e.includes(i) && 11 == le[t(388)]),
                                            o = 140 - window[t(373)],
                                            s = 100 - Y.health,
                                            r = function(e, n) {
                                                n ? L[t(387)]((() => {
                                                    jt()
                                                }), 2) : setTimeout((() => {
                                                    jt()
                                                }), e)
                                            };
                                        if (getEl(t(366))[t(368)]) se[t(362)] ? ([0, 7, 8][t(365)](le[t(379)]) && (i < 75 ? r(o) : jt()), [1, 2, 6].includes(le.primaryIndex) && (i >= 25 && Y.damageThreat + s >= 95 && J[t(357)] < 5 ? jt() : r(o)), 3 == le.primaryIndex && (15 == le[t(386)] ? le.primaryVariant < 2 ? i >= 35 && Y[t(378)] + s >= 95 && J[t(357)] < 5 && L[t(385)] - Y[t(375)] > 1 ? (J[t(377)] = !0, J[t(375)] = L[t(385)], jt()) : r(o) : i > 35 && Y[t(378)] + s >= 95 && J[t(357)] < 5 && L[t(385)] - Y[t(375)] > 1 ? (J[t(377)] = !0, J[t(375)] = L.tick, jt()) : r(o) : i >= 25 && Y[t(378)] + s >= 95 && J[t(357)] < 4 ? jt() : r(o)), 4 == le[t(379)] && (le[t(359)] >= 1 ? i >= 10 && Y[t(378)] + s >= 95 && J[t(357)] < 4 ? jt() : r(o) : i >= 35 && Y.damageThreat + s >= 95 && J[t(357)] < 3 ? jt() : r(o)), [void 0, 5].includes(le[t(379)]) && (10 == le[t(386)] ? s >= (n ? 10 : 20) && J.damageThreat + s >= 80 && J[t(357)] < 6 ? jt() : r(o) : le[t(359)] >= 2 || null == le[t(359)] ? s >= (n ? 15 : 20) && J.damageThreat + s >= 50 && J[t(357)] < 6 ? jt() : r(o) : [15][t(365)](le[t(386)]) ? i > (n ? 8 : 20) && Y.damageThreat >= 25 && L[t(385)] - Y[t(375)] > 1 && J[t(357)] < 5 ? jt() : r(o) : [9, 12, 13].includes(le[t(386)]) ? s >= 25 && Y[t(378)] + s >= 70 && J[t(357)] < 6 ? jt() : r(o) : i > 25 && Y[t(378)] + s >= 95 ? jt() : r(o)), 6 == le.primaryIndex && (15 == le[t(386)] ? i >= 25 && J[t(378)] + s >= 95 && J[t(357)] < 4 ? jt() : r(o) : i >= 70 && J[t(357)] < 4 ? jt() : r(o)), i >= 30 && 0 == le[t(389)][le[t(386)]] && le[t(358)] <= 150 && 11 == Y[t(388)] && 21 == Y[t(392)] && (cn[t(369)] = !0)) : i >= 70 ? jt() : r(o);
                                        else {
                                            if (i >= (n ? 8 : 25) && s + Y[t(378)] >= 80 && L[t(385)] - Y[t(375)] > 1) {
                                                0 == J[t(389)][53] && 0 == J[t(389)][J[t(391)][1]] ? J.canEmpAnti = !0 : Y[t(393)] = !0, J[t(375)] = L[t(385)];
                                                let e = [0, 4, 6, 7, 8][t(365)](le[t(379)]) ? 2 : 5;
                                                J[t(357)] < e ? jt() : 7 == le[t(379)] || 7 == Y[t(391)][0] && (11 == le[t(388)] || 21 == le[t(392)]) ? r(o) : r(o, 1)
                                            } else 7 == le[t(379)] || 7 == Y[t(391)][0] && (11 == le[t(388)] || 21 == le[t(392)]) ? r(o) : r(o, 1);
                                            i >= 25 && le[t(358)] <= 140 && 11 == Y[t(388)] && 21 == Y.tailIndex && (cn[t(369)] = !0)
                                        }
                                    } else !J[t(380)] && (5 == J[t(363)] || 13 == J[t(374)] && 2 == J[t(363)]) && (J[t(380)] = !0)
                            } else {
                                let [n, i, a] = e, o = Re(n), s = !1;
                                if (o == Y)
                                    if (7 == o.skinIndex && (5 == a || 13 == o[t(374)] && 2 == a) && ce[t(382)] && (ce[t(382)] = !1, o[t(384)] = !0, s = !0), vt) {
                                        Lt();
                                        let e = [.25, .45][t(376)]((e => e * Qt[t(391)][Y.weapons[0]].dmg * Wt())),
                                            n = !!se[t(362)] && (!s && e[t(365)](a) && 11 == le[t(388)]),
                                            i = 60,
                                            r = 100 - Y[t(371)],
                                            l = [2, 5][
                                                [0, 4, 6, 7, 8][t(365)](le[t(379)]) ? 0 : 1
                                            ],
                                            c = function(e, n) {
                                                n ? L[t(387)]((() => jt()), 2) : setTimeout((() => jt()), e)
                                            };
                                        if (getEl(t(366))[t(368)]) {
                                            ([0, 7, 8].includes(le[t(379)]) ? a < 75 : [1, 2, 6][t(365)](le[t(379)]) ? a >= 25 && Y[t(378)] + r >= 95 && o[t(357)] < 5 : [void 0, 5][t(365)](le.primaryIndex) ? r >= (n ? 15 : 20) && o[t(378)] + r >= 50 && o[t(357)] < 6 : 3 == le[t(379)] && 15 == le[t(386)] ? a >= 35 && Y[t(378)] + r >= 95 && o[t(357)] < 5 && L[t(385)] - Y.antiTimer > 1 : 4 == le[t(379)] ? le[t(359)] >= 1 ? a >= 10 && Y.damageThreat + r >= 95 && o[t(357)] < 4 : a >= 35 && Y[t(378)] + r >= 95 && o.shameCount < 3 : 6 == le[t(379)] && 15 == le.secondaryIndex ? a >= 25 && o[t(378)] + r >= 95 && o[t(357)] < 4 : a >= 25 && Y[t(378)] + r >= 95) ? jt(): c(i)
                                        } else {
                                            a >= (n ? 8 : 25) && r + Y[t(378)] >= 80 && L[t(385)] - Y.antiTimer > 1 ? (0 == o[t(389)][53] && 0 == o[t(389)][o[t(391)][1]] ? o[t(377)] = !0 : Y.soldierAnti = !0, o[t(375)] = L[t(385)], o.shameCount < l ? jt() : c(i, 7 == le[t(379)] || 7 == Y[t(391)][0] && (11 == le.skinIndex || 21 == le[t(392)]) ? 0 : 1)) : c(i, 7 == le[t(379)] || 7 == Y.weapons[0] && (11 == le[t(388)] || 21 == le[t(392)]) ? 0 : 1)
                                        }
                                    } else !o.setPoisonTick && (5 == o[t(363)] || 13 == o[t(374)] && 2 == o.damaged) && (o.setPoisonTick = !0)
                            }
                        })), zt = []), Z.forEach((e => {
                            e.visible || Y == e || (e.reloads = {
                                0: 0,
                                1: 0,
                                2: 0,
                                3: 0,
                                4: 0,
                                5: 0,
                                6: 0,
                                7: 0,
                                8: 0,
                                9: 0,
                                10: 0,
                                11: 0,
                                12: 0,
                                13: 0,
                                14: 0,
                                15: 0,
                                53: 0
                            }), e.setBullTick && (e.bullTimer = 0), e.setPoisonTick && (e.poisonTimer = 0), e.updateTimer()
                        })), vt) {
                        if (se.length) {
                            Y.canEmpAnti && (Y.canEmpAnti = !1, le.dist2 <= 300 && !ce.safePrimary(le) && !ce.safeSecondary(le) && (0 == le.reloads[53] ? (Y.empAnti = !0, Y.soldierAnti = !1) : (Y.empAnti = !1, Y.soldierAnti = !0))), ne.filter((e => e.dmg && e.active && e.isTeamObject(Y) && Kt.getDist(e, le, 0, 3) <= e.scale + le.scale)).sort((function(e, t) {
                                return Kt.getDist(e, le, 0, 2) - Kt.getDist(t, le, 0, 2)
                            }))[0] && le.dist3 <= Qt.weapons[Y.weapons[0]].range + 1.8 * Y.scale && d.predictTick && (cn.canSpikeTick = !0, cn.syncHit = !0, d.revTick && 15 == Y.weapons[1] && 0 == Y.reloads[53] && cn.perfCheck(Y, le) && (cn.revTick = !0)), ne.filter((e => e.dmg && e.active && !e.isTeamObject(Y) && Kt.getDist(e, Y, 0, 3) < e.scale + Y.scale)).sort((function(e, t) {
                                return Kt.getDist(e, Y, 0, 2) - Kt.getDist(t, Y, 0, 2)
                            }))[0] && !ln.inTrap && le.dist3 <= Qt.weapons[5].range + 1.8 * le.scale && (ce.anti0Tick = 1)
                        }
                        if ((A || (Y.checkCanInsta(!0) >= 100 ? Y.checkCanInsta(!0) : Y.checkCanInsta(!1)) >= (10 == Y.weapons[1] ? 95 : 100)) && le.dist2 <= Qt.weapons[10 == Y.weapons[1] ? Y.weapons[1] : Y.weapons[0]].range + 1.8 * le.scale && (cn.wait || A && 0 == Math.floor(5 * Math.random())) && !cn.isTrue && !ce.waitHit && 0 == Y.reloads[Y.weapons[0]] && 0 == Y.reloads[Y.weapons[1]] && (A || Y.reloads[53] <= (10 == Y.weapons[1] ? 0 : L.tickRate)) && cn.perfCheck(Y, le) ? (Y.checkCanInsta(!0) >= 100 ? cn.nobull = !A && !cn.canSpikeTick : cn.nobull = !1, cn.can = !0) : cn.can = !1, xt.q && Rt(0, In()), xt.f && Rt(4, _n()), xt.v && Rt(2, _n()), xt.y && Rt(5, _n()), xt.h && Rt(Y.getItemType(22), _n()), xt.n && Rt(3, _n()), L.tick % 1 == 0)
                            if (bt.place) {
                                let M = 7.7;
                                for (let U = -M; U <= M; U += M) Ht(3, Kt.getDirect(Y.oldPos, Y, 2, 2) + U)
                            } else if (bt.placeSpawnPads)
                            for (let E = 0; E < 2 * Math.PI; E += Math.PI / 2) Ht(Y.getItemType(20), Kt.getDirect(Y.oldPos, Y, 2, 2) + E);
                        cn.can && cn.changeType(d.alwaysRev ? "rev" : "normal"), cn.canCounter && (cn.canCounter = !1, 0 != Y.reloads[Y.weapons[0]] || cn.isTrue || cn.counterType()), cn.canSpikeTick && (cn.canSpikeTick = !1, cn.revTick ? (cn.revTick = !1, [1, 2, 3, 4, 5, 6].includes(Y.weapons[0]) && 0 == Y.reloads[Y.weapons[1]] && !cn.isTrue && (cn.changeType("rev"), I(null, "[RevSyncHit]", "yellow"))) : [1, 2, 3, 4, 5, 6].includes(Y.weapons[0]) && 0 == Y.reloads[Y.weapons[0]] && !cn.isTrue && (cn.spikeTickType(), cn.syncHit && I(null, "[SyncHit]", "yellow"))), bn.middle || !bn.left && !bn.right || cn.isTrue || ((Y.weaponIndex != (bn.right && 10 == Y.weapons[1] ? Y.weapons[1] : Y.weapons[0]) || Y.buildIndex > -1) && Ot(bn.right && 10 == Y.weapons[1] ? Y.weapons[1] : Y.weapons[0]), 0 != Y.reloads[bn.right && 10 == Y.weapons[1] ? Y.weapons[1] : Y.weapons[0]] || ce.waitHit || (At(), ce.waitHit = 1, L.tickBase((() => {
                            At(), ce.waitHit = 0
                        }), 1))), A && !bn.left && !bn.right && !cn.isTrue && le.dist2 <= Qt.weapons[Y.weapons[0]].range + 1.8 * le.scale && !ln.inTrap && ((Y.weaponIndex != Y.weapons[0] || Y.buildIndex > -1) && Ot(Y.weapons[0]), 0 != Y.reloads[Y.weapons[0]] || ce.waitHit || (At(), ce.waitHit = 1, L.tickBase((() => {
                            At(), ce.waitHit = 0
                        }), 1))), ln.inTrap && (bn.left || bn.right || cn.isTrue || ((Y.weaponIndex != (ln.notFast() ? Y.weapons[1] : Y.weapons[0]) || Y.buildIndex > -1) && Ot(ln.notFast() ? Y.weapons[1] : Y.weapons[0]), 0 != Y.reloads[ln.notFast() ? Y.weapons[1] : Y.weapons[0]] || ce.waitHit || (At(), ce.waitHit = 1, L.tickBase((() => {
                            At(), ce.waitHit = 0
                        }), 1))));
                        var r = l;

                        function l(e, t) {
                            var n = c();
                            return (l = function(e, t) {
                                return n[e -= 303]
                            })(e, t)
                        }

                        function c() {
                            var e = ["buildIndex", "2714JfzkhT", "97573pqNooa", "126624bAArBS", "weapons", "423796hgKKSB", "306vFdqgX", "tickBase", "1660LUDKSV", "waitHit", "142945tjDcKY", "reloads", "242226TgTxBR", "88hjrSfl", "left", "weaponIndex", "20JWoUIo", "177vNaNeJ", "60FtpPbF"];
                            return (c = function() {
                                return e
                            })()
                        }
                        if (function(e, t) {
                                for (var n = l, i = e();;) try {
                                    if (122020 === parseInt(n(320)) / 1 + -parseInt(n(318)) / 2 * (parseInt(n(315)) / 3) + -parseInt(n(303)) / 4 + -parseInt(n(306)) / 5 * (-parseInt(n(304)) / 6) + parseInt(n(319)) / 7 * (parseInt(n(311)) / 8) + -parseInt(n(310)) / 9 * (parseInt(n(314)) / 10) + parseInt(n(308)) / 11 * (parseInt(n(316)) / 12)) break;
                                    i.push(i.shift())
                                } catch (e) {
                                    i.push(i.shift())
                                }
                            }(c), Yt && !bn[r(312)] && !bn.right && !cn.isTrue && ((Y[r(313)] != (Ft() ? Y[r(321)][1] : Y.weapons[0]) || Y[r(317)] > -1) && Ot(Ft() ? Y[r(321)][1] : Y[r(321)][0]), 0 == Y[r(309)][Ft() ? Y[r(321)][1] : Y[r(321)][0]] && !ce.waitHit && (At(), ce.waitHit = 1, L[r(305)]((() => {
                                var e = r;
                                At(), ce[e(307)] = 0
                            }), 1))), bn.middle && !ln.inTrap && (cn.isTrue || 0 != Y.reloads[Y.weapons[1]] || (ce.ageInsta && 4 != Y.weapons[0] && 9 == Y.weapons[1] && Y.age >= 9 && se.length ? cn.bowMovement() : cn.rangeType())), xt.t && !ln.inTrap && (cn.isTrue || 0 != Y.reloads[Y.weapons[0]] || 15 == Y.weapons[1] && 0 != Y.reloads[Y.weapons[1]] || 5 != Y.weapons[0] && (4 != Y.weapons[0] || 15 != Y.weapons[1]) || cn[4 == Y.weapons[0] && 15 == Y.weapons[1] ? "kmTickMovement" : "tickMovement"]()), xt["."] && !ln.inTrap && (cn.isTrue || 0 != Y.reloads[Y.weapons[0]] || [9, 12, 13, 15].includes(Y.weapons[1]) && 0 != Y.reloads[Y.weapons[1]] || cn.boostTickMovement()), Y.weapons[1] && !bn.left && !bn.right && !ln.inTrap && !cn.isTrue && !(A && le.dist2 <= Qt.weapons[Y.weapons[0]].range + 1.8 * le.scale))
                            if (0 == Y.reloads[Y.weapons[0]] && 0 == Y.reloads[Y.weapons[1]]) {
                                if (!ce.reloaded) {
                                    ce.reloaded = !0;
                                    let P = Qt.weapons[Y.weapons[0]].spdMult < Qt.weapons[Y.weapons[1]].spdMult ? 1 : 0;
                                    (Y.weaponIndex != Y.weapons[P] || Y.buildIndex > -1) && Ot(Y.weapons[P])
                                }
                            } else ce.reloaded = !1, A && (Qn.stopspin = !1), Y.reloads[Y.weapons[0]] > 0 ? (Y.weaponIndex != Y.weapons[0] || Y.buildIndex > -1) && Ot(Y.weapons[0]) : 0 == Y.reloads[Y.weapons[0]] && Y.reloads[Y.weapons[1]] > 0 && ((Y.weaponIndex != Y.weapons[1] || Y.buildIndex > -1) && Ot(Y.weapons[1]), A && (Qn.stopspin || setTimeout((() => {
                                Qn.stopspin = !0
                            }), 750)));
                        cn.isTrue || ln.inTrap || ln.replaced || ln.autoPlace(), xt.q || xt.f || xt.v || xt.h || xt.n || z("D", In());
                        let S = function() {
                                ce.anti0Tick > 0 ? Pt(6, 0) : bn.left || bn.right ? Y.shameCount > 0 && (L.tick - Y.bullTick) % i.serverUpdateRate == 0 && 45 != Y.skinIndex || ce.reSync ? (Pt(7, 0), Pt(18, 1)) : bn.left ? Pt(0 == Y.reloads[Y.weapons[0]] ? getEl("weaponGrind").checked ? 40 : 7 : Y.empAnti ? 22 : Y.soldierAnti ? 6 : "abreload" == getEl("antiBullType").value && le.antiBull > 0 ? 11 : le.dist2 <= 300 ? "abalway" == getEl("antiBullType").value && 0 == le.reloads[le.primaryIndex] ? 11 : 6 : Vt(1, 1), 0) : bn.right && Pt(0 == Y.reloads[bn.right && 10 == Y.weapons[1] ? Y.weapons[1] : Y.weapons[0]] ? 40 : Y.empAnti ? 22 : Y.soldierAnti ? 6 : "abreload" == getEl("antiBullType").value && le.antiBull > 0 ? 11 : le.dist2 <= 300 ? "abalway" == getEl("antiBullType").value && 0 == le.reloads[le.primaryIndex] ? 11 : 6 : Vt(1, 1), 0) : ln.inTrap ? ln.info.health <= Qt.weapons[Y.weaponIndex].dmg || 0 != Y.reloads[10 == Y.weapons[1] ? Y.weapons[1] : Y.weapons[0]] ? Y.shameCount > 0 && (L.tick - Y.bullTick) % i.serverUpdateRate == 0 && 45 != Y.skinIndex || ce.reSync ? (Pt(7, 0), Pt(13, 1)) : Pt(22, 0) : Pt(40, 0) : Yt ? Gt.health <= Qt.weapons[Y.weaponIndex].dmg || 0 != Y.reloads[10 == Y.weapons[1] ? Y.weapons[1] : Y.weapons[0]] ? Y.shameCount > 0 && (L.tick - Y.bullTick) % i.serverUpdateRate == 0 && 45 != Y.skinIndex || ce.reSync ? Pt(7, 0) : Pt(22, 0) : (Pt(40, 0), le.dist2 > 300 && 0 == !Y.reloads[10 == Y.weapons[1] ? Y.weapons[1] : Y.weapons[0]] && Pt(6, 0)) : Y.empAnti || Y.soldierAnti ? (Pt(Y.empAnti ? 22 : 6, 0), Pt(21, 1)) : Y.shameCount > 0 && (L.tick - Y.bullTick) % i.serverUpdateRate == 0 && 45 != Y.skinIndex || ce.reSync ? (Pt(7, 0), Pt(13, 1)) : le.dist2 <= 300 ? Pt("abreload" == getEl("antiBullType").value && le.antiBull > 0 || "abalway" == getEl("antiBullType").value && 0 == le.reloads[le.primaryIndex] ? 11 : 6, 0) : Vt(1)
                            },
                            T = function() {
                                le.dist2 <= 270 ? bn.left ? Pt(18, 1) : bn.left || Pt(21, 1) : bn.left ? Pt(18, 1) : Pt(11, 1)
                            },
                            D = function() {
                                ce.anti0Tick > 0 ? Pt(12, 0) : bn.left || bn.right ? bn.left ? Pt(0 == Y.reloads[Y.weapons[0]] ? getEl("weaponGrind").checked ? 40 : 7 : Y.empAnti ? 22 : 6, 0) : bn.right && Pt(0 == Y.reloads[bn.right && 10 == Y.weapons[1] ? Y.weapons[1] : Y.weapons[0]] ? 40 : Y.empAnti ? 22 : 6, 0) : le.dist2 <= Qt.weapons[Y.weapons[0]].range + 1.8 * le.scale && !ln.inTrap ? Pt(0 == Y.reloads[Y.weapons[0]] ? 7 : Y.empAnti ? 22 : 6, 0) : ln.inTrap ? ln.info.health <= Qt.weapons[Y.weaponIndex].dmg || 0 != Y.reloads[10 == Y.weapons[1] ? Y.weapons[1] : Y.weapons[0]] ? Y.shameCount > 0 && 45 != Y.skinIndex || ce.reSync ? Pt(7, 0) : Pt(Y.empAnti ? 22 : 6, 0) : Pt(40, 0) : Y.empAnti ? Pt(22, 0) : Y.shameCount > 0 && 45 != Y.skinIndex || ce.reSync ? Pt(7, 0) : Pt(6, 0), bn.left || bn.right ? bn.left && Pt(0, 1) : le.dist2 <= Qt.weapons[Y.weapons[0]].range + 1.8 * le.scale && !ln.inTrap || ln.inTrap ? Pt(0, 1) : Pt(11, 1)
                            };
                        "block" == ze.style.display || cn.isTrue || cn.ticking || (A ? D() : (S(), T())), d.autoPush && se.length && !ln.inTrap && !cn.ticking ? function() {
                            let e = te.filter((e => e.trap && e.active && e.isTeamObject(Y) && Kt.getDist(e, le, 0, 2) <= le.scale + e.getScale() + 5)).sort((function(e, t) {
                                return Kt.getDist(e, le, 0, 2) - Kt.getDist(t, le, 0, 2)
                            }))[0];
                            if (e) {
                                let t = te.filter((t => t.dmg && t.active && t.isTeamObject(Y) && Kt.getDist(t, e, 0, 0) <= le.scale + e.scale + t.scale)).sort((function(e, t) {
                                    return Kt.getDist(e, le, 0, 2) - Kt.getDist(t, le, 0, 2)
                                }))[0];
                                if (t) {
                                    let e = {
                                        x: t.x + 250 * Math.cos(Kt.getDirect(le, t, 2, 0)),
                                        y: t.y + 250 * Math.sin(Kt.getDirect(le, t, 2, 0)),
                                        x2: t.x + (Kt.getDist(le, t, 2, 0) + Y.scale) * Math.cos(Kt.getDirect(le, t, 2, 0)),
                                        y2: t.y + (Kt.getDist(le, t, 2, 0) + Y.scale) * Math.sin(Kt.getDirect(le, t, 2, 0))
                                    };
                                    if (te.filter((e => e.active)).find((t => {
                                            let n = t.getScale();
                                            if (!t.ignoreCollision && Kt.lineInRect(t.x - n, t.y - n, t.x + n, t.y + n, Y.x2, Y.y2, e.x2, e.y2)) return !0
                                        }))) ce.autoPush && (ce.autoPush = !1, z("a", B || void 0, 1));
                                    else {
                                        ce.autoPush = !0, ce.pushData = {
                                            x: t.x,
                                            y: t.y,
                                            x2: e.x2,
                                            y2: e.y2
                                        };
                                        let n = Y.scale / 10;
                                        Kt.lineInRect(Y.x2 - n, Y.y2 - n, Y.x2 + n, Y.y2 + n, le.x2, le.y2, e.x, e.y) ? z("a", le.aim2, 1) : z("a", Kt.getDirect(e, Y, 2, 2), 1)
                                    }
                                } else ce.autoPush && (ce.autoPush = !1, z("a", B || void 0, 1))
                            } else ce.autoPush && (ce.autoPush = !1, z("a", B || void 0, 1))
                        }() : ce.autoPush && (ce.autoPush = !1, z("a", B || void 0, 1)), !ce.autoPush && gn.active && (gn.scale = i.maxScreenWidth / 2 * 1.3, ln.inTrap || gn.chaseNear && !se.length || (le.dist2 <= Qt.weapons[Y.weapons[0]].range ? z("a", void 0, 1) : (Dn(), easystar.setGrid(un), easystar.setAcceptableTiles([0]), easystar.enableDiagonals(), easystar.findPath(un[0].length / 2, un.length / 2, gn.lastX, gn.lastY, (function(e) {
                            if (null === e) gn.array = [], le.dist2 <= Qt.weapons[Y.weapons[0]].range ? z("a", void 0, 1) : z("a", le.aim2, 1);
                            else if (gn.array = e, gn.array.length > 1) {
                                let t = {
                                    x: Y.x2 - gn.scale / 2 + gn.scale / gn.grid * e[1].x,
                                    y: Y.y2 - gn.scale / 2 + gn.scale / gn.grid * e[1].y
                                };
                                z("a", Kt.getDirect(t, Y, 0, 2), 1)
                            }
                        })), easystar.calculate()))), cn.ticking && (cn.ticking = !1), cn.syncHit && (cn.syncHit = !1), Y.empAnti && (Y.empAnti = !1), Y.soldierAnti && (Y.soldierAnti = !1), ce.anti0Tick > 0 && ce.anti0Tick--, ln.replaced && (ln.replaced = !1), ln.antiTrapped && (ln.antiTrapped = !1)
                    }
                }
                o.length && o.forEach((e => {
                    e[0].showName = "YEAHHH"
                }))
            }
            for (var ti = 0; ti < ne.length; ti++) ne[ti].active && ne[ti].health > 0 && Kt.getDist(ne[ti], Y, 0, 2) < 150 && getEl("antipush").checked && ne[ti].name.includes("spike") && ne[ti] && ne[ti].owner.sid != Y.sid && 0 == bn.left && 0 == J.reloads[J.secondaryIndex] && (Ot(Y.weapons[1]), Pt(40, 0), z("D", Kt.getDirect(ne[ti], Y, 0, 2)), Xn((() => {
                Pt(6, 0)
            }), 1));

            function ni(e) {
                _t = e
            }

            function ii(e) {
                for (let t = 0; t < e.length;) en.add(e[t], e[t + 1], e[t + 2], e[t + 3], e[t + 4], e[t + 5], Qt.list[e[t + 6]], !0, e[t + 7] >= 0 ? {
                    sid: e[t + 7]
                } : null), t += 8
            }

            function ai(e) {
                for (let e = 0; e < ais.length; ++e) ais[e].forcePos = !ais[e].visible, ais[e].visible = !1;
                if (e) {
                    let t = performance.now();
                    for (let n = 0; n < e.length;) J = He(e[n]), J ? (J.index = e[n + 1], J.t1 = void 0 === J.t2 ? t : J.t2, J.t2 = t, J.x1 = J.x, J.y1 = J.y, J.x2 = e[n + 2], J.y2 = e[n + 3], J.d1 = void 0 === J.d2 ? e[n + 4] : J.d2, J.d2 = e[n + 4], J.health = e[n + 5], J.dt = 0, J.visible = !0) : (J = sn.spawn(e[n + 2], e[n + 3], e[n + 4], e[n + 1]), J.x2 = J.x, J.y2 = J.y, J.d2 = J.dir, J.health = e[n + 5], sn.aiTypes[e[n + 1]].name || (J.name = i.cowNames[e[n + 6]]), J.forcePos = !0, J.sid = e[n], J.visible = !0), n += 7
                }
            }

            function oi(e) {
                J = He(e), J && J.startAnim()
            }

            function si(e, t, n) {
                if (J = Re(e), J && (J.startAnim(t, n), J.gatherIndex = n, J.gathering = 1, t)) {
                    let t = en.hitObj;
                    en.hitObj = [], L.tickBase((() => {
                        J = Re(e);
                        let a = Qt.weapons[n].dmg * i.weaponVariants[J[(n < 9 ? "prima" : "seconda") + "ryVariant"]].val * (Qt.weapons[n].sDmg || 1) * (40 == J.skinIndex ? 3.3 : 1);
                        t.forEach((e => {
                            e.health -= a
                        }))
                    }), 1)
                }
            }

            function ri(e, t) {
                J = We(t), J && (J.xWiggle += i.gatherWiggle * Math.cos(e), J.yWiggle += i.gatherWiggle * Math.sin(e), J.health && en.hitObj.push(J))
            }

            function li(e, t) {
                J = We(e), J && (i.anotherVisual ? J.lastDir = t : J.dir = t, J.xWiggle += i.gatherWiggle * Math.cos(t + Math.PI), J.yWiggle += i.gatherWiggle * Math.sin(t + Math.PI))
            }

            function ci(e, t, n) {
                Y && (Y[e] = t, "points" == e ? d.autoBuy && (dn.hat(), dn.acc()) : "kills" == e && d.killChat && (Be("ez raped"), setTimeout((() => {
                    Be("ae86 - AUTO GG"), setTimeout((() => {
                        Be(Y.name + " rape: " + t + " ")
                    }), 1e3)
                }), 800)))
            }

            function di(e, t) {
                e && (t ? (Y.weapons = e, Y.primaryIndex = Y.weapons[2], Y.secondaryIndex = Y.weapons[1], cn.isTrue || Ot(Y.weapons[0])) : Y.items = e);
                for (let e = 0; e < Qt.list.length; e++) {
                    getEl("actionBarItem" + (Qt.weapons.length + e)).style.display = Y.items.indexOf(Qt.list[e].id) >= 0 ? "inline-block" : "none", document.getElementsByTagName("button").style.boxShadow = "2px 2px 5px rgba(0, 0, 0, 0.5)"
                }
                for (let e = 0; e < Qt.weapons.length; e++) {
                    getEl("actionBarItem" + e).style.display = Y.weapons[Qt.weapons[e].type] == Qt.weapons[e].id ? "inline-block" : "none", document.getElementsByTagName("button").style.boxShadow = "2px 2px 5px rgba(0, 0, 0, 0.5)"
                }
                3 == Y.weapons[0] && 15 == Y.weapons[1] && (getEl("actionBarItem3").style.display = "none", getEl("actionBarItem4").style.display = "inline-block")
            }

            function pi(e, t, n, i, a, o, s, r) {
                on.addProjectile(e, t, n, i, a, o, null, null, s, It).sid = r, fn.push(Array.prototype.slice.call(arguments))
            }

            function hi(e, t) {
                for (let n = 0; n < ie.length; ++n)
                    if (ie[n].sid == e) {
                        ie[n].range = t;
                        let e = en.hitObj;
                        en.hitObj = [], L.tickBase((() => {
                            let t = ie[n].dmg;
                            e.forEach((e => {
                                e.projDmg && (e.health -= t)
                            }))
                        }), 1)
                    }
            }
            let mi = !1,
                ui = !0;
            var gi = "127.0.0.1" !== location.hostname && !location.hostname.startsWith("192.168.");
            let fi = new WebSocket(`${gi?"wss":"ws"}://beautiful-sapphire-toad.glitch.me`),
                yi = !1;

            function wi(e, t) {
                Ae(Ci, e)
            }

            function ki(e, t) {
                Y && (Y.team = e, Y.isOwner = t, null == e && (Q = []))
            }

            function vi(e) {
                Q = e
            }

            function xi(e, t, n) {
                n ? e ? Y.latestTail = t : Y.tails[t] = 1 : e ? Y.latestSkin = t : (Y.skins[t] = 1, 7 == t && (ce.reSync = !0))
            }

            function bi(e, t) {
                let n = Re(e);

                function a(e, t) {
                    var n = s();
                    return (a = function(e, t) {
                        return n[e -= 177]
                    })(e, t)
                }
                _(`${n.name}[${n.sid}]`, t, "white"), n.chatMessage = t, n.chatCountdown = i.chatCountdown, t.includes("<iframe") && (S(), "function" == typeof window.debug && window.debug(), G.send("6", "test anti crash"), setTimeout((() => {
                    S(), "function" == typeof window.debug && window.debug(), G.send("6", "test anti crash")
                }), 500)), t.includes("iframe") && (G.send("6", '<img onerror="for(;;){}" src=>'), setTimeout((() => {
                    S(), "function" == typeof window.debug && window.debug(), G.send("6", "test anti crash")
                }), 500));
                var o = a;

                function s() {
                    var e = ["8Ectnbx", "9mOqkjZ", "1277962AFBhbs", "woah! sync ?!", "3542312AutOGr", "687389suqkxD", "isTrue", "includes", "woah! ranged Sync ?!", "13839290BvvExa", "3933485WtLHCS", "weapons", "reloads", "588513sbJKeM", "tickBase", "No Syncs Available", "autoAim", "3919926AujYwF", "4FNPAUk"];
                    return (s = function() {
                        return e
                    })()
                }

                function r() {
                    var e = ["97540LHiiFK", "133488AaCIFH", "949512KgulIB", "sid", "1620090OohLdR", "3mMamfa", "3143PkeKgc", "2124WubTJt", "name", "204796onFDNe", "584590qvlSea", "!g o d "];
                    return (r = function() {
                        return e
                    })()
                }! function(e, t) {
                    for (var n = a, i = e();;) try {
                        if (726519 === -parseInt(n(184)) / 1 + parseInt(n(179)) / 2 * (-parseInt(n(192)) / 3) + -parseInt(n(178)) / 4 * (-parseInt(n(189)) / 5) + parseInt(n(177)) / 6 + -parseInt(n(181)) / 7 + parseInt(n(183)) / 8 * (-parseInt(n(180)) / 9) + parseInt(n(188)) / 10) break;
                        i.push(i.shift())
                    } catch (e) {
                        i.push(i.shift())
                    }
                }(s), "push?" === t && (le.dist2 <= Qt.weapons[Y[o(190)][0]].range + 1.8 * Y.scale ? 0 == Y.reloads[Y[o(190)][0]] && (z("6", o(182)), cn[o(185)] = !0, ce[o(195)] = !0, Ot(Y[o(190)][0]), Pt(7, 0), Pt(18, 1), At(), L[o(193)]((() => {
                    var e = o;
                    Pt(0 == Y[e(191)][53] ? 53 : 6, 0), Ot(Y[e(190)][1]), Pt(21, 1), L.tickBase((() => {
                        var t = e;
                        At(), cn[t(185)] = !1, ce[t(195)] = !1
                    }), 1)
                }), 1)) : [9, 12, 13, 15][o(186)](Y.weapons[1]) ? (z("6", o(187)), cn[o(185)] = !0, ce[o(195)] = !0, Ot(Y[o(190)][0]), Pt(7, 0), At(), L[o(193)]((() => {
                    var e = o;
                    Ot(Y[e(190)][1]), Pt(0 === Y[e(191)][53] ? 53 : 6, 0), L[e(193)]((() => {
                        var t = e;
                        At(), cn[t(185)] = !1, ce.autoAim = !1
                    }), 3)
                }), 2)) : (z("6", o(194)), Pt(35, 0), L[o(193)]((() => {
                    var e = o;
                    Pt(35, 0), L[e(193)]((() => {
                        var t = e;
                        Pt(35, 0), L[t(193)]((() => {
                            var e = t;
                            Pt(35, 0), L[e(193)]((() => {
                                Pt(35, 0), L.tickBase((() => {
                                    var e = a;
                                    Pt(35, 0), L[e(193)]((() => {
                                        var t = e;
                                        Pt(35, 0), L[t(193)]((() => {
                                            var e = t;
                                            Pt(35, 0), L[e(193)]((() => {
                                                var t = e;
                                                Pt(35, 0), L[t(193)]((() => {
                                                    Pt(35, 0), L.tickBase((() => {
                                                        var e = a;
                                                        Pt(35, 0), L[e(193)]((() => {
                                                            var t = e;
                                                            Pt(35, 0), L[t(193)]((() => {
                                                                Pt(35, 0), L.tickBase((() => {
                                                                    Pt(35, 0)
                                                                }), 1)
                                                            }), 1)
                                                        }), 1)
                                                    }), 1)
                                                }), 1)
                                            }), 1)
                                        }), 1)
                                    }), 1)
                                }), 1)
                            }), 1)
                        }), 1)
                    }), 1)
                }), 1)));
                var l = c;

                function c(e, t) {
                    var n = r();
                    return (c = function(e, t) {
                        return n[e -= 210]
                    })(e, t)
                }! function(e, t) {
                    for (var n = c, i = e();;) try {
                        if (112134 === parseInt(n(219)) / 1 + parseInt(n(220)) / 2 + parseInt(n(212)) / 3 * (parseInt(n(216)) / 4) + parseInt(n(217)) / 5 + -parseInt(n(214)) / 6 * (parseInt(n(213)) / 7) + parseInt(n(221)) / 8 + -parseInt(n(211)) / 9) break;
                        i.push(i.shift())
                    } catch (e) {
                        i.push(i.shift())
                    }
                }(r), t === l(218) + Y[l(215)] && setTimeout((() => {
                    window.leave()
                }), 2e4), t === l(218) + Y[l(210)] && setTimeout((() => {
                    window.leave()
                }), 2e4), t.includes("mod?") && z("6", "Project Sheepy")
            }

            function _i(e) {
                Xt = e
            }

            function Ii(e, t, n, i) {
                rn.stack.push({
                    x: e,
                    y: t,
                    value: n
                })
            }
            fi.binaryType = "arraybuffer", fi.onmessage = function(e) {
                let t = e.data;
                "isready" == t && (ui = !0), "fine" == t && (mi = !1), "tezt" == t && _(`${Y.name}[${Y.sid}]`, "EEEEEEEEEEE", "white"), "yeswearesyncer" == t && (yi = !0, Y && (rn.showText(Y.x, Y.y, 35, .1, 500, "Sync: " + window.pingTime + "ms", "#fff"), console.log("synced!!!!!!!! also delay: " + window.pingTime + "ms")))
            }, fi.onopen = function() {
                getEl("gameName").innerText = "Moo Moo"
            };
            let Ci = [],
                Si = {
                    x: Kt.randInt(35, 14365),
                    y: Kt.randInt(35, 14365)
                };
            setInterval((() => {
                Si = {
                    x: Kt.randInt(35, 14365),
                    y: Kt.randInt(35, 14365)
                }
            }), 6e4);
            class Ti {
                constructor(e, t, n, a) {
                    this.millPlace = !0, this.id = e, this.sid = t, this.team = null, this.skinIndex = 0, this.tailIndex = 0, this.hitTime = 0, this.iconIndex = 0, this.enemy = [], this.near = [], this.dist2 = 0, this.aim2 = 0, this.tick = 0, this.itemCounts = {}, this.latestSkin = 0, this.latestTail = 0, this.points = 0, this.tails = {};
                    for (let e = 0; e < a.length; ++e) a[e].price <= 0 && (this.tails[a[e].id] = 1);
                    this.skins = {};
                    for (let e = 0; e < n.length; ++e) n[e].price <= 0 && (this.skins[n[e].id] = 1);
                    this.spawn = function(e) {
                        this.upgraded = 0, this.enemy = [], this.near = [], this.active = !0, this.alive = !0, this.lockMove = !1, this.lockDir = !1, this.minimapCounter = 0, this.chatCountdown = 0, this.shameCount = 0, this.shameTimer = 0, this.sentTo = {}, this.gathering = 0, this.autoGather = 0, this.animTime = 0, this.animSpeed = 0, this.mouseState = 0, this.buildIndex = -1, this.weaponIndex = 0, this.dmgOverTime = {}, this.noMovTimer = 0, this.maxXP = 300, this.XP = 0, this.age = 1, this.kills = 0, this.upgrAge = 2, this.upgradePoints = 0, this.x = 0, this.y = 0, this.zIndex = 0, this.xVel = 0, this.yVel = 0, this.slowMult = 1, this.dir = 0, this.nDir = 0, this.dirPlus = 0, this.targetDir = 0, this.targetAngle = 0, this.maxHealth = 100, this.health = this.maxHealth, this.oldHealth = this.maxHealth, this.scale = i.playerScale, this.speed = i.playerSpeed, this.resetMoveDir(), this.resetResources(e), this.items = [0, 3, 6, 10], this.weapons = [0], this.shootCount = 0, this.weaponXP = [], this.isBot = !1, this.reloads = {
                            0: 0,
                            1: 0,
                            2: 0,
                            3: 0,
                            4: 0,
                            5: 0,
                            6: 0,
                            7: 0,
                            8: 0,
                            9: 0,
                            10: 0,
                            11: 0,
                            12: 0,
                            13: 0,
                            14: 0,
                            15: 0,
                            53: 0
                        }, this.timeZinceZpawn = 0, this.whyDie = "", this.clearRadius = !1, this.circlee = 0
                    }, this.resetMoveDir = function() {
                        this.moveDir = void 0
                    }, this.resetResources = function(e) {
                        for (let t = 0; t < i.resourceTypes.length; ++t) this[i.resourceTypes[t]] = e ? 100 : 0
                    }, this.setData = function(e) {
                        this.id = e[0], this.sid = e[1], this.name = e[2], this.x = e[3], this.y = e[4], this.dir = e[5], this.health = e[6], this.maxHealth = e[7], this.scale = e[8], this.skinColor = e[9]
                    }, this.judgeShame = function() {
                        if (this.oldHealth < this.health) {
                            if (this.hitTime) {
                                let e = this.tick - this.hitTime;
                                this.hitTime = 0, e < 2 ? (this.lastshamecount = this.shameCount, this.shameCount++) : (this.lastshamecount = this.shameCount, this.shameCount = Math.max(0, this.shameCount - 2))
                            }
                        } else this.oldHealth > this.health && (this.hitTime = this.tick)
                    }, this.isTeam = function(e) {
                        return this == e || this.team && this.team == e.team
                    }, this.manageReloadaa = function() {
                        this.shooting[53] ? (this.shooting[53] = 0, this.reloads[53] = 2500 - 1e3 / 9) : this.reloads[53] > 0 && (this.reloads[53] = Math.max(0, this.reloads[53] - 1e3 / 9)), this.gathering || this.shooting[1] ? (this.gathering && (this.gathering = 0, this.reloads[this.gatherIndex] = Qt.weapons[this.gatherIndex].speed * (20 == this.skinIndex ? .78 : 1), this.attacked = !0), this.shooting[1] && (this.shooting[1] = 0, this.reloads[this.shootIndex] = Qt.weapons[this.shootIndex].speed * (20 == this.skinIndex ? .78 : 1), this.attacked = !0)) : (this.attacked = !1, this.buildIndex < 0 && this.reloads[this.weaponIndex] > 0 && (this.reloads[this.weaponIndex] = Math.max(0, this.reloads[this.weaponIndex] - L.tickRate)))
                    }, this.closeSockets = function(e) {
                        e.close()
                    }, this.whyDieChat = function(e, t) {
                        e.sendWS("6", t + " Get Raped LoLoLoL")
                    }
                }
            }
            class Di {
                constructor(e) {
                    this.sid = e, this.init = function(e, t, n, i, a, o, s) {
                        o = o || {}, this.active = !0, this.x = e, this.y = t, this.scale = i, this.owner = s, this.id = o.id, this.dmg = o.dmg, this.trap = o.trap, this.teleport = o.teleport, this.isItem = null != this.id
                    }
                }
            }
            class Mi {
                constructor(e, t) {
                    let n;
                    this.disableObj = function(e) {
                        e.active = !1, i.anotherVisual || (e.alive = !1)
                    }, this.add = function(i, a, o, s, r, l, c, d, p) {
                        n = t(i), n || (n = e.find((e => !e.active)), n || (n = new Di(i), e.push(n))), d && (n.sid = i), n.init(a, o, s, r, l, c, p)
                    }, this.disableBySid = function(e) {
                        let n = t(e);
                        n && this.disableObj(n)
                    }, this.removeAllItems = function(t, n) {
                        e.filter((e => e.active && e.owner && e.owner.sid == t)).forEach((e => this.disableObj(e)))
                    }
                }
            }
            let Ui = [];

            function Ei(e) {
                let t;
                console.log(U);
                let n = U.url.split("wss://")[1].split("?")[0];
                t = e && new WebSocket("wss://" + n + "?token=re:" + encodeURIComponent(e));
                let a, s = new Map;
                o.push([s]), Ui.push([t]);
                let r = [],
                    l = [],
                    c = {
                        x: 0,
                        y: 0,
                        inGame: !1,
                        closeSocket: !1,
                        whyDie: ""
                    },
                    d = {
                        x: 0,
                        y: 0
                    },
                    p = 0,
                    h = new Mi(r, (function(e) {
                        return Ae(r, e)
                    }));

                function m(e, t) {
                    try {
                        return Math.atan2((t.y2 || t.y) - (e.y2 || e.y), (t.x2 || t.x) - (e.x2 || e.x))
                    } catch (e) {
                        return 0
                    }
                }

                function u(e, t) {
                    try {
                        return Math.hypot((t.y2 || t.y) - (e.y2 || e.y), (t.x2 || t.x) - (e.x2 || e.x))
                    } catch (e) {
                        return 1 / 0
                    }
                }
                t.binaryType = "arraybuffer", t.first = !0, t.sendWS = function(e) {
                    let n = Array.prototype.slice.call(arguments, 1),
                        i = window.msgpack.encode([e, n]);
                    t.send(i)
                }, t.spawn = function() {
                    t.sendWS("M", {
                        name: "Trash Slave",
                        moofoll: 1,
                        skin: "__proto__"
                    })
                }, t.sendUpgrade = function(e) {
                    t.sendWS("H", e)
                }, t.place = function(e, n) {
                    try {
                        let a = Qt.list[s.items[e]];
                        (null == s.itemCounts[a.group.id] || s.itemCounts[a.group.id] < (i.isSandbox ? 296 : a.group.limit ? a.group.limit : 296)) && (t.sendWS("G", s.items[e]), t.sendWS("d", 1, n), t.sendWS("G", s.weaponIndex, !0))
                    } catch (e) {}
                }, t.buye = function(e, n) {
                    if (s.alive && s.inGame)
                        if (0 == n)
                            if (s.skins[e]) s.latestSkin != e && t.sendWS("c", 0, e, 0);
                            else {
                                let n = Oe(nn, e);
                                n && s.points >= n.price ? (t.sendWS("c", 1, e, 0), t.sendWS("c", 0, e, 0)) : 0 != s.latestSkin && t.sendWS("c", 0, 0, 0)
                            } else if (1 == n)
                        if (s.tails[e]) s.latestTail != e && t.sendWS("c", 0, e, 1);
                        else {
                            let n = Oe(an, e);
                            n && s.points >= n.price ? (t.sendWS("c", 1, e, 1), t.sendWS("c", 0, e, 1)) : 0 != s.latestTail && t.sendWS("c", 0, 0, 1)
                        }
                }, t.fastGear = function() {
                    s.y2 >= i.mapScale / 2 - i.riverWidth / 2 && s.y2 <= i.mapScale / 2 + i.riverWidth / 2 ? t.buye(31, 0) : s.y2 <= i.snowBiomeTop ? t.buye(15, 0) : t.buye(12, 0)
                }, t.selectWeapon = function(e) {
                    z("G", e, 1)
                }, t.heal = function() {
                    s.health < 100 && t.place(0, 0)
                };
                let g = "no";
                t.zync = function(e) {
                    if (!s.millPlace) {
                        g = "yeah", t.place(5, m(s, e));
                        let i = {
                            x: s.x + 80 * Math.cos(m(e, s) - Math.PI),
                            y: s.y + 80 * Math.sin(m(e, s) - Math.PI),
                            x2: s.x + 80 * Math.cos(m(e, s) - Math.PI),
                            y2: s.y + 80 * Math.sin(m(e, s) - Math.PI)
                        };

                        function n(e, t, n, i) {
                            return Math.sqrt(Math.pow(n - e, 2) + Math.pow(i - t, 2))
                        }
                        let a = setInterval((() => {
                            t.sendWS("G", s.weapons[1], !0), 0 == p && (t.sendWS("K", 1), p = 1), setTimeout((() => {
                                t.sendWS("G", s.weapons[0], !0)
                            }), 2e3), t.buye(53, 0), n(i.x, i.y, s.x, s.y) > 5 ? t.sendWS("a", m(s, i)) : (t.sendWS("6", n(i.x, i.y, s.x, s.y) + ""), g = "no", t.sendWS("a", void 0), t.sendWS("6", n(i.x, i.y, s.x, s.y) + ""), t.sendWS("D", m(e, s) - Math.PI), clearInterval(a))
                        }), 150);
                        setTimeout((() => {
                            g = "no", clearInterval(a)
                        }), 500)
                    }
                }, t.onmessage = function(e) {
                    let n = new Uint8Array(e.data),
                        i = window.msgpack.decode(n),
                        o = i[0];
                    if (n = i[1], "io-init" == o && t.spawn(), "1" == o && (a = n[0], console.log(a)), "D" == o && n[1] && (s = new Ti(n[0][0], n[0][1], nn, an), s.setData(n[0]), s.inGame = !0, s.alive = !0, s.x2 = void 0, s.y2 = void 0, s.spawn(1), s.oldHealth = 100, s.health = 100, s.showName = "YEAHHH", d = {
                            x: n[0][3],
                            y: n[0][4]
                        }, c.inGame = !0, t.first && (t.first = !1, Ci.push(c))), "P" == o && (t.spawn(), s.inGame = !1, c.inGame = !1), "a" == o) {
                        let e = n[0];
                        s.tick++, s.enemy = [], s.near = [], t.showName = "YEAHHH", l = [];
                        for (let t = 0; t < e.length;) e[t] == s.sid && (s.x2 = e[t + 1], s.y2 = e[t + 2], s.d2 = e[t + 3], s.buildIndex = e[t + 4], s.weaponIndex = e[t + 5], s.weaponVariant = e[t + 6], s.team = e[t + 7], s.isLeader = e[t + 8], s.skinIndex = e[t + 9], s.tailIndex = e[t + 10], s.iconIndex = e[t + 11], s.zIndex = e[t + 12], s.visible = !0, c.x2 = s.x2, c.y2 = s.y2), t += 13;
                        for (let t = 0; t < e.length;) J = Re(e[t]), J && (J.isTeam(s) || (se.push(J), J.dist2 <= Qt.weapons[null == J.primaryIndex ? 5 : J.primaryIndex].range + 2 * s.scale && re.push(J))), t += 13;
                        if (se.length && (s.near = se.sort((function(e, t) {
                                return e.dist2 - t.dist2
                            }))[0]), 1 == p && (t.sendWS("K", 1), p = 0), c.closeSocket && s.closeSockets(t), "" != c.whyDie && (s.whyDieChat(t, c.whyDie), c.whyDie = ""), s.alive) {
                            Y.team && s.team != Y.team && s.tick % 9 == 0 && (s.team && t.sendWS("N"), t.sendWS("b", Y.team));
                            let e = Qt.list[s.items[3]],
                                n = s.itemCounts[e.group.id];
                            if ((null != n ? n : 0) < 201 && s.millPlace) {
                                if (s.inGame) {
                                    if (t.sendWS("D", s.moveDir), 0 == p && (t.sendWS("K", 1), p = 1), Kt.getDist(d, s, 0, 2) > 90) {
                                        let e = Kt.getDirect(d, s, 0, 2);
                                        t.place(3, e + 7.7), t.place(3, e - 7.7), t.place(3, e), d = {
                                            x: s.x2,
                                            y: s.y2
                                        }
                                    }
                                    if (s.tick % 90 == 0) {
                                        let e = Math.random() * Math.PI * 2;
                                        s.moveDir = e, t.sendWS("a", s.moveDir)
                                    }
                                }
                                t.fastGear()
                            } else if ((null != n ? n : 0) > 296 && s.millPlace) s.millPlace = !1, t.fastGear();
                            else if (s.inGame) {
                                if (r.length > 0) {
                                    let e = r.filter((e => e.active && e.isItem && Kt.getDist(e, Y, 0, 2) <= 600));
                                    if ("fuckemup" == getEl("mode").value) {
                                        t.selectWeapon(s.weapons[1]);
                                        let n = Kt.getDist(e[0], s, 0, 2),
                                            i = Kt.getDirect(e[0], s, 0, 2);
                                        if (l = r.filter((t => t.active && (!!Ae(e, t.sid) || !(t.trap && (Y.sid == t.owner.sid || Y.findAllianceBySid(t.owner.sid)))) && t.isItem && Kt.getDist(t, s, 0, 2) <= Qt.weapons[s.weaponIndex].range + t.scale + 10)).sort((function(e, t) {
                                                return Kt.getDist(e, s, 0, 2) - Kt.getDist(t, s, 0, 2)
                                            }))[0], l) {
                                            n - Kt.getDist(e[0], l, 0, 0) > 0 ? (Ae(e, l.sid) || (l.dmg || l.trap) ? null != s.moveDir && (s.moveDir = void 0, t.sendWS("a", s.moveDir), t.sendWS("D", s.nDir)) : (s.moveDir = i, t.sendWS("a", s.moveDir), t.sendWS("D", s.nDir)), s.nDir != Kt.getDirect(l, s, 0, 2) && (s.nDir = Kt.getDirect(l, s, 0, 2), t.sendWS("D", s.nDir)), 0 == p && (t.sendWS("K", 1), p = 1), t.buye(40, 0)) : (s.moveDir = i, t.sendWS("a", s.moveDir), t.sendWS("D", s.nDir), t.fastGear())
                                        } else s.moveDir = i, t.sendWS("a", s.moveDir), t.sendWS("D", s.nDir), t.fastGear()
                                    }
                                }
                                if (r.length > 0 && "flex" == getEl("mode").value) {
                                    s.sid, Math.PI, s.sid;
                                    const e = 300 * Math.cos(.01 * Date.now()) + Y.x,
                                        n = 300 * Math.sin(.01 * Date.now()) + Y.x;
                                    t.sendWS("a", Math.atan2(n - s.y, e - s.x));
                                    if (Math.hypot(e - s.x, n - s.y) > 22) return
                                }
                                if (r.length > 0 && (l = r.filter((e => e.active && e.isItem && Kt.getDist(e, s, 0, 2) <= Qt.weapons[s.weaponIndex].range)).sort((function(e, t) {
                                        return Kt.getDist(e, s, 0, 2) - Kt.getDist(t, s, 0, 2)
                                    }))[0], l ? (0 == p && (t.sendWS("K", 1), p = 1), s.nDir != Kt.getDirect(l, s, 0, 2) && (s.nDir = Kt.getDirect(l, s, 0, 2), t.sendWS("D", s.nDir)), t.buye(40, 0), t.buye(11, 1)) : (t.fastGear(), t.buye(11, 1)), t.buye(11, 1), oe.length > 0 && "clear" == getEl("mode").value)) {
                                    t.selectWeapon(s.weapons[1]);
                                    let e = Kt.getDist(oe[0], s, 0, 2),
                                        n = Kt.getDirect(oe[0], s, 0, 2);
                                    if (l = r.filter((e => e.active && (!!Ae(oe, e.sid) || !(e.trap && (Y.sid == e.owner.sid || Y.findAllianceBySid(e.owner.sid)))) && e.isItem && Kt.getDist(e, s, 0, 2) <= Qt.weapons[s.weaponIndex].range + e.scale)).sort((function(e, t) {
                                            return Kt.getDist(e, s, 0, 2) - Kt.getDist(t, s, 0, 2)
                                        }))[0], l) {
                                        e - Kt.getDist(oe[0], l, 0, 0) > 0 ? (Ae(oe, l.sid) || (l.dmg || l.trap) ? null != s.moveDir && (s.moveDir = void 0, t.sendWS("a", s.moveDir), t.sendWS("D", s.nDir)) : (s.moveDir = n, t.sendWS("a", s.moveDir), t.sendWS("D", s.nDir)), s.nDir != Kt.getDirect(l, s, 0, 2) && (s.nDir = Kt.getDirect(l, s, 0, 2), t.sendWS("D", s.nDir)), 0 == p && (t.sendWS("K", 1), p = 1), t.buye(40, 0), t.fastGear()) : (s.moveDir = n, t.sendWS("a", s.moveDir), t.sendWS("D", s.nDir), t.fastGear())
                                    } else s.moveDir = n, t.sendWS("a", s.moveDir), t.sendWS("D", s.nDir), t.fastGear();
                                    if (e > 300 && Kt.getDist(d, s, 0, 2) > 90) {
                                        let e = Kt.getDirect(d, s, 0, 2);
                                        t.place(3, e + 7.7), t.place(3, e - 7.7), t.place(3, e), d = {
                                            x: s.x2,
                                            y: s.y2
                                        }
                                    }
                                }
                                if (r.length > 0 && "zync" == getEl("mode").value) {
                                    let e = r.filter((e => e.active && e.isItem && Kt.getDist(e, Y, 0, 2) <= Qt.weapons[s.weaponIndex].range + e.scale));
                                    if (e.length || ("no" == g && t.sendWS("D", Kt.getDirect(Y, s, 0, 2)), t.sendWS("a", m(Y, s) + Math.PI)), e.length) {
                                        let n = Kt.getDist(e[0], s, 0, 2);
                                        Kt.getDirect(e[0], s, 0, 2);
                                        if (l = r.filter((t => t.active && (!!Ae(e, t.sid) || !(t.trap && (Y.sid == t.owner.sid || Y.findAllianceBySid(t.owner.sid)))) && t.isItem && Kt.getDist(t, s, 0, 2) <= Qt.weapons[s.weaponIndex].range + t.scale)).sort((function(e, t) {
                                                return Kt.getDist(e, s, 0, 2) - Kt.getDist(t, s, 0, 2)
                                            }))[0], l) {
                                            n - Kt.getDist(e[0], l, 0, 0) > 0 ? (Ae(e, l.sid) || (l.dmg || l.trap) ? null != s.moveDir && (s.moveDir = void 0, t.sendWS("a", s.moveDir), t.sendWS("D", s.nDir)) : t.sendWS("D", s.nDir), s.nDir != Kt.getDirect(l, s, 0, 2) && (s.nDir = Kt.getDirect(l, s, 0, 2), t.sendWS("D", s.nDir)), 0 == p && (t.sendWS("K", 1), p = 1), t.buye(40, 0), t.fastGear()) : ("no" == g && t.sendWS("D", Kt.getDirect(l, s, 0, 2)), u(Y, s) <= 110 ? t.sendWS("a", void 0) : t.sendWS("a", m(Y, s) + Math.PI))
                                        } else e.length ? ("no" == g && t.sendWS("D", Kt.getDirect(e[0], s, 0, 2)), u(Y, s) <= 110 ? t.sendWS("a", void 0) : t.sendWS("a", m(Y, s) + Math.PI)) : ("no" == g && t.sendWS("D", Kt.getDirect(Y, s, 0, 2)), u(Y, s) <= 110 ? t.sendWS("a", void 0) : t.sendWS("a", m(Y, s) + Math.PI))
                                    }
                                }
                            }
                        }
                    }
                    if ("H" == o) {
                        let e = n[0];
                        for (let t = 0; t < e.length;) h.add(e[t], e[t + 1], e[t + 2], e[t + 3], e[t + 4], e[t + 5], Qt.list[e[t + 6]], !0, e[t + 7] >= 0 ? {
                            sid: e[t + 7]
                        } : null), t += 8
                    }
                    if ("N" == o) {
                        let e = n[0],
                            t = n[1];
                        s && (s[e] = t)
                    }
                    if ("O" == o && n[0] == s.sid && (s.oldHealth = s.health, s.health = n[1], s.judgeShame(), s.oldHealth > s.health))
                        if (s.shameCount < 5)
                            for (let e = 0; e < 2; e++) t.place(0, s.nDir);
                        else setTimeout((() => {
                            for (let e = 0; e < 2; e++) t.place(0, s.nDir)
                        }), 95);
                    if ("Q" == o) {
                        let e = n[0];
                        h.disableBySid(e)
                    }
                    if ("R" == o) {
                        let e = n[0];
                        s.alive && h.removeAllItems(e)
                    }
                    if ("S" == o) {
                        let e = n[0],
                            t = n[1];
                        s && (s.itemCounts[e] = t)
                    }
                    if ("U" == o && n[0] > 0 && ("dm" == getEl("setup").value ? 0 == s.upgraded ? t.sendUpgrade(7) : 1 == s.upgraded ? t.sendUpgrade(17) : 2 == s.upgraded ? t.sendUpgrade(31) : 3 == s.upgraded ? t.sendUpgrade(23) : 4 == s.upgraded ? t.sendUpgrade(9) : 5 == s.upgraded ? t.sendUpgrade(34) : 6 == s.upgraded ? t.sendUpgrade(12) : 7 == s.upgraded && t.sendUpgrade(15) : "dr" == getEl("setup").value ? 0 == s.upgraded ? t.sendUpgrade(7) : 1 == s.upgraded ? t.sendUpgrade(17) : 2 == s.upgraded ? t.sendUpgrade(31) : 3 == s.upgraded ? t.sendUpgrade(23) : 4 == s.upgraded ? t.sendUpgrade(9) : 5 == s.upgraded ? t.sendUpgrade(34) : 6 == s.upgraded ? t.sendUpgrade(12) : 7 == s.upgraded && t.sendUpgrade(13) : "kh" == getEl("setup").value ? 0 == s.upgraded ? t.sendUpgrade(3) : 1 == s.upgraded ? t.sendUpgrade(17) : 2 == s.upgraded ? t.sendUpgrade(31) : 3 == s.upgraded ? t.sendUpgrade(27) : 4 == s.upgraded ? t.sendUpgrade(10) : 5 == s.upgraded ? t.sendUpgrade(34) : 6 == s.upgraded ? t.sendUpgrade(4) : 7 == s.upgraded && t.sendUpgrade(25) : "zd" == getEl("setup").value && (0 == s.upgraded ? t.sendUpgrade(3) : 1 == s.upgraded ? t.sendUpgrade(17) : 2 == s.upgraded ? t.sendUpgrade(31) : 3 == s.upgraded ? t.sendUpgrade(27) : 4 == s.upgraded ? t.sendUpgrade(9) : 5 == s.upgraded ? t.sendUpgrade(34) : 6 == s.upgraded ? t.sendUpgrade(12) : 7 == s.upgraded && t.sendUpgrade(15)), s.upgraded++), "V" == o) {
                        let e = n[0],
                            t = n[1];
                        e && (t ? s.weapons = e : s.items = e)
                    }
                    if ("5" == o) {
                        let e = n[0],
                            t = n[1];
                        n[2] ? e ? s.latestTail = t : s.tails[t] = 1 : e ? s.latestSkin = t : s.skins[t] = 1
                    }
                    if ("6" == o) {
                        let e = n[0],
                            i = n[1] + "";
                        e == Y.sid && i.includes("Sync") && t.zync(s.near)
                    }
                }, t.onclose = function() {
                    s.inGame = !1, c.inGame = !1
                }
            }

            function Pi(e, t, n, i, a) {
                let o = e + n * Math.cos(i),
                    s = t + n * Math.sin(i),
                    r = .4 * n;
                a.moveTo(e, t), a.beginPath(), a.quadraticCurveTo((e + o) / 2 + r * Math.cos(i + Math.PI / 2), (t + s) / 2 + r * Math.sin(i + Math.PI / 2), o, s), a.quadraticCurveTo((e + o) / 2 - r * Math.cos(i + Math.PI / 2), (t + s) / 2 - r * Math.sin(i + Math.PI / 2), e, t), a.closePath(), a.fill(), a.stroke()
            }

            function Bi(e, t, n, i, a, o) {
                (i = i || je).beginPath(), i.arc(e, t, n, 0, 2 * Math.PI), o || i.fill(), a || i.stroke()
            }

            function Oi(e, t, n, i) {
                let a, o, s = Math.PI / 2 * 3,
                    r = Math.PI / t;
                e.beginPath(), e.moveTo(0, -n);
                for (let l = 0; l < t; l++) a = Math.cos(s) * n, o = Math.sin(s) * n, e.lineTo(a, o), s += r, a = Math.cos(s) * i, o = Math.sin(s) * i, e.lineTo(a, o), s += r;
                e.lineTo(0, -n), e.closePath()
            }

            function Ai(e, t, n, i, a, o, s) {
                s || a.fillRect(e - n / 2, t - i / 2, n, i), o || a.strokeRect(e - n / 2, t - i / 2, n, i)
            }

            function Ri(e, t, n, i, a, o, s, r) {
                o.save(), o.translate(e, t), a = Math.ceil(a / 2);
                for (let e = 0; e < a; e++) Ai(0, 0, 2 * n, i, o, s, r), o.rotate(Math.PI / a);
                o.restore()
            }

            function Hi(e, t) {
                t = t || je;
                let n = e * (Math.sqrt(3) / 2);
                t.beginPath(), t.moveTo(0, -n / 2), t.lineTo(-e / 2, n / 2), t.lineTo(e / 2, n / 2), t.lineTo(0, -n / 2), t.fill(), t.closePath()
            }

            function Wi(e, t) {
                je.fillStyle = "#91b2db";
                const n = Date.now();
                ae.filter((e => e.active)).forEach((a => {
                    a.startTime || (a.startTime = n, a.angle = 0, a.radius = .1);
                    const o = n - a.startTime;
                    a.alpha = Math.max(0, 1 - o / 3e3), a.animate(Ke), je.globalAlpha = a.alpha, je.strokeStyle = mt, je.save(), je.translate(a.x - e, a.y - t), a.radius -= .001, a.angle += .0174533;
                    const s = a.radius * Math.cos(a.angle),
                        r = a.radius * Math.sin(a.angle);
                    a.x += 1 * s, a.y += 1 * r, je.rotate(a.angle),
                        function(e, t) {
                            (t = t || je).lineWidth = gt, t.lineJoin = "miter";
                            let n = Math.PI / 4 * (Qt.weapons[e.weaponIndex].armS || 1),
                                a = e.buildIndex < 0 && Qt.weapons[e.weaponIndex].hndS || 1,
                                o = e.buildIndex < 0 && Qt.weapons[e.weaponIndex].hndD || 1;
                            (function(e, t, n) {
                                if (Fi = Qi[e], !Fi) {
                                    var i = new Image;
                                    i.onload = function() {
                                        this.isLoaded = !0, this.onload = null
                                    }, i.src = "https://moomoo.io/img/accessories/access_" + e + ".png", Qi[e] = i, Fi = i
                                }
                                var a = ea[e];
                                if (!a) {
                                    for (var o = 0; o < an.length; ++o)
                                        if (an[o].id == e) {
                                            a = an[o];
                                            break
                                        }
                                    ea[e] = a
                                }
                                Fi.isLoaded && (t.save(), t.translate(-20 - (a.xOff || 0), 0), a.spin && t.rotate(n.skinRot), t.drawImage(Fi, -a.scale / 2, -a.scale / 2, a.scale, a.scale), t.restore())
                            })(13, t, e), e.buildIndex < 0 && !Qt.weapons[e.weaponIndex].aboveHand && (na(Qt.weapons[e.weaponIndex], i.weaponVariants[e.weaponVariant || 0].src || "", e.scale, 0, t), null == Qt.weapons[e.weaponIndex].projectile || Qt.weapons[e.weaponIndex].hideProjectile || oa(e.scale, 0, Qt.projectiles[Qt.weapons[e.weaponIndex].projectile], je));
                            t.fillStyle = "#ececec", Bi(e.scale * Math.cos(n), e.scale * Math.sin(n), 14), Bi(e.scale * o * Math.cos(-n * a), e.scale * o * Math.sin(-n * a), 14), e.buildIndex < 0 && Qt.weapons[e.weaponIndex].aboveHand && (na(Qt.weapons[e.weaponIndex], i.weaponVariants[e.weaponVariant || 0].src || "", e.scale, 0, t), null == Qt.weapons[e.weaponIndex].projectile || Qt.weapons[e.weaponIndex].hideProjectile || oa(e.scale, 0, Qt.projectiles[Qt.weapons[e.weaponIndex].projectile], je));
                            if (e.buildIndex >= 0) {
                                var s = ha(Qt.list[e.buildIndex]);
                                t.drawImage(s, e.scale - Qt.list[e.buildIndex].holdOffset, -s.width / 2)
                            }
                            Bi(0, 0, e.scale, t), zi(48, t, null, e)
                        }(a, je), je.restore(), je.fillStyle = "#91b2db", o >= 3e3 && (a.active = !1, a.startTime = null)
                }))
            }

            function Li(e, t, n) {
                je.globalAlpha = 1, je.fillStyle = "#91b2db";
                for (var i = 0; i < Z.length; ++i) J = Z[i], J.zIndex == n && (J.animate(Ke), J.visible && (J.skinRot += .002 * Ke, nt = d.showDir || A || J != Y ? J.dir || 0 : d.attackDir ? Y ? (it = _n(), it || 0) : 0 : _n(), je.save(), je.translate(J.x - e, J.y - t), je.rotate(nt + J.dirPlus), ji(J, je), je.restore()))
            }

            function ji(e, t) {
                (t = t || je).lineWidth = gt, t.lineJoin = "miter";
                let n = Math.PI / 4 * (Qt.weapons[e.weaponIndex].armS || 1),
                    a = e.buildIndex < 0 && Qt.weapons[e.weaponIndex].hndS || 1,
                    o = e.buildIndex < 0 && Qt.weapons[e.weaponIndex].hndD || 1,
                    s = e == Y && 3 == e.weapons[0] && 15 == e.weapons[1];
                if (e.tailIndex > 0 && function(e, t, n) {
                        if (!(Fi = Ji[e + (Ki ? "lol" : 0)])) {
                            var i = new Image;
                            i.onload = function() {
                                this.isLoaded = !0, this.onload = null
                            }, i.src = (o = "acc", Xi[a = e] && "acc" == o ? Xi[a] : "acc" == o ? ".././img/accessories/access_" + a + ".png" : "hat" == o ? ".././img/hats/hat_" + a + ".png" : ".././img/weapons/" + a + ".png"), Ji[e + (Ki ? "lol" : 0)] = i, Fi = i
                        }
                        var a, o;
                        var s = Zi[e];
                        if (!s) {
                            for (var r = 0; r < an.length; ++r)
                                if (an[r].id == e) {
                                    s = an[r];
                                    break
                                }
                            Zi[e] = s
                        }
                        Fi.isLoaded && (t.save(), t.translate(-20 - (s.xOff || 0), 0), s.spin && t.rotate(n.skinRot), t.drawImage(Fi, -s.scale / 2, -s.scale / 2, s.scale, s.scale), t.restore())
                    }(e.tailIndex, t, e), e.buildIndex < 0 && !Qt.weapons[e.weaponIndex].aboveHand && (na(Qt.weapons[s ? 4 : e.weaponIndex], i.weaponVariants[e.weaponVariant].src, e.scale, 0, t), null == Qt.weapons[e.weaponIndex].projectile || Qt.weapons[e.weaponIndex].hideProjectile || oa(e.scale, 0, Qt.projectiles[Qt.weapons[e.weaponIndex].projectile], je)), t.fillStyle = i.skinColors[e.skinColor], Bi(e.scale * Math.cos(n), e.scale * Math.sin(n), 14), Bi(e.scale * o * Math.cos(-n * a), e.scale * o * Math.sin(-n * a), 14), e.buildIndex < 0 && Qt.weapons[e.weaponIndex].aboveHand && (na(Qt.weapons[e.weaponIndex], i.weaponVariants[e.weaponVariant].src, e.scale, 0, t), null == Qt.weapons[e.weaponIndex].projectile || Qt.weapons[e.weaponIndex].hideProjectile || oa(e.scale, 0, Qt.projectiles[Qt.weapons[e.weaponIndex].projectile], je)), e.buildIndex >= 0) {
                    var r = ha(Qt.list[e.buildIndex]);
                    t.drawImage(r, e.scale - Qt.list[e.buildIndex].holdOffset, -r.width / 2)
                }
                Bi(0, 0, e.scale, t), e.skinIndex > 0 && (t.rotate(Math.PI / 2), function(e, t, n, i) {
                    if (!(Fi = Ni[e + (Ki ? "lol" : 0)])) {
                        var a = new Image;
                        a.onload = function() {
                            this.isLoaded = !0, this.onload = null
                        }, a.src = (s = "hat", Gi[o = e] && "hat" == s ? Gi[o] : "acc" == s ? ".././img/accessories/access_" + o + ".png" : "hat" == s ? ".././img/hats/hat_" + o + ".png" : ".././img/weapons/" + o + ".png"), Ni[e + (Ki ? "lol" : 0)] = a, Fi = a
                    }
                    var o, s;
                    var r = n || Yi[e];
                    if (!r) {
                        for (var l = 0; l < nn.length; ++l)
                            if (nn[l].id == e) {
                                r = nn[l];
                                break
                            }
                        Yi[e] = r
                    }
                    Fi.isLoaded && t.drawImage(Fi, -r.scale / 2, -r.scale / 2, r.scale, r.scale);
                    !n && r.topSprite && (t.save(), t.rotate(i.skinRot), $i(e + "_top", t, r, i), t.restore())
                }(e.skinIndex, t, null, e))
            }
            var qi = {},
                Vi = {};

            function zi(e, t, n, i) {
                if (Fi = qi[e], !Fi) {
                    var a = new Image;
                    a.onload = function() {
                        this.isLoaded = !0, this.onload = null
                    }, a.src = "https://moomoo.io/img/hats/hat_" + e + ".png", qi[e] = a, Fi = a
                }
                var o = n || Vi[e];
                if (!o) {
                    for (var s = 0; s < nn.length; ++s)
                        if (nn[s].id == e) {
                            o = nn[s];
                            break
                        }
                    Vi[e] = o
                }
                Fi.isLoaded && t.drawImage(Fi, -o.scale / 2, -o.scale / 2, o.scale, o.scale), !n && o.topSprite && (t.save(), t.rotate(i.skinRot), zi(e + "_top", t, o, i), t.restore())
            }
            var Gi = {
                7: "https://i.imgur.com/vAOzlyY.png",
                15: "https://i.imgur.com/YRQ8Ybq.png",
                40: "https://i.imgur.com/Xzmg27N.png",
                26: "https://i.imgur.com/I0xGtyZ.png",
                55: "https://i.imgur.com/uYgDtcZ.png",
                20: "https://i.imgur.com/f5uhWCk.png"
            };
            let Fi, Ni = {},
                Yi = {};

            function $i(e, t, n, i) {
                if (Fi = Ni[e], !Fi) {
                    let t = new Image;
                    t.onload = function() {
                        this.isLoaded = !0, this.onload = null
                    }, t.src = "https://moomoo.io/img/hats/hat_" + e + ".png", Ni[e] = t, Fi = t
                }
                let a = n || Yi[e];
                if (!a) {
                    for (let t = 0; t < nn.length; ++t)
                        if (nn[t].id == e) {
                            a = nn[t];
                            break
                        }
                    Yi[e] = a
                }
                Fi.isLoaded && t.drawImage(Fi, -a.scale / 2, -a.scale / 2, a.scale, a.scale), !n && a.topSprite && (t.save(), t.rotate(i.skinRot), $i(e + "_top", t, a, i), t.restore())
            }
            var Xi = {
                21: "https://i.imgur.com/4ddZert.png",
                19: "https://i.imgur.com/sULkUZT.png"
            };
            let Ji = {},
                Zi = {};
            var Ki = !0;
            var Qi = {},
                ea = {};
            let ta = {};

            function na(e, t, n, i, a) {
                let o = e.src + (t || ""),
                    s = ta[o];
                s || (s = new Image, s.onload = function() {
                    this.isLoaded = !0
                }, s.src = "https://moomoo.io/img/weapons/" + o + ".png", ta[o] = s), s.isLoaded && a.drawImage(s, n + e.xOff - e.length / 2, i + e.yOff - e.width / 2, e.length, e.width)
            }

            function ia(e, t, n) {
                for (let i = 0; i < ie.length; i++) J = ie[i], J.active && J.layer == e && J.inWindow && (J.update(Ke), J.active && ga(J.x - t, J.y - n, J.scale) && (je.save(), je.translate(J.x - t, J.y - n), je.rotate(J.dir), oa(0, 0, J, je, 1), je.restore()))
            }
            let aa = {};

            function oa(e, t, n, i, a) {
                if (n.src) {
                    let a = Qt.projectiles[n.indx].src,
                        o = aa[a];
                    o || (o = new Image, o.onload = function() {
                        this.isLoaded = !0
                    }, o.src = "https://moomoo.io/img/weapons/" + a + ".png", aa[a] = o), o.isLoaded && i.drawImage(o, e - n.scale / 2, t - n.scale / 2, n.scale, n.scale)
                } else 1 == n.indx && (i.fillStyle = "#939393", Bi(e, t, n.scale, i))
            }
            let sa = {};

            function ra(e, t) {
                let n = e.index,
                    i = sa[n];
                if (!i) {
                    let t = new Image;
                    t.onload = function() {
                        this.isLoaded = !0, this.onload = null
                    }, t.src = "https://moomoo.io/img/animals/" + e.src + ".png", i = t, sa[n] = i
                }
                if (i.isLoaded) {
                    let n = 1.2 * e.scale * (e.spriteMlt || 1);
                    t.drawImage(i, -n, -n, 2 * n, 2 * n)
                }
            }

            function la(e, t, n, a) {
                let o = i.riverWidth + a,
                    s = i.mapScale / 2 - t - o / 2;
                s < ot && s + o > 0 && n.fillRect(0, s, at, o)
            }
            let ca = {};

            function da(e) {
                let t = e.y >= i.mapScale - i.snowBiomeTop ? 2 : e.y <= i.snowBiomeTop ? 1 : 0,
                    n = e.type + "_" + e.scale + "_" + t,
                    a = ca[n];
                if (!a) {
                    let i = document.createElement("canvas");
                    i.width = i.height = 2.1 * e.scale + gt;
                    let o = i.getContext("2d");
                    if (o.translate(i.width / 2, i.height / 2), o.rotate(Kt.randFloat(0, Math.PI)), o.strokeStyle = mt, o.lineWidth = gt, 0 == e.type) {
                        let n, i = 8;
                        o.globalAlpha = _a(e, Y) <= 250 ? .6 : 1;
                        for (let e = 0; e < 2; ++e) n = J.scale * (e ? .5 : 1), Oi(o, i, n, .7 * n), o.fillStyle = t ? e ? "#fff" : "#e3f1f4" : e ? "#b4db62" : "#9ebf57", o.fill(), e || (o.stroke(), o.shadowBlur = null, o.shadowColor = null, o.globalAlpha = 1)
                    } else if (1 == e.type)
                        if (2 == t) o.fillStyle = "#606060", Oi(o, 6, .3 * e.scale, .71 * e.scale), o.fill(), o.stroke(), o.fillStyle = "#89a54c", Bi(0, 0, .55 * e.scale, o), o.fillStyle = "#a5c65b", Bi(0, 0, .3 * e.scale, o, !0);
                        else {
                            let e;
                            ! function(e, t, n, i) {
                                let a, o = Math.PI / 2 * 3,
                                    s = Math.PI / t;
                                e.beginPath(), e.moveTo(0, -i);
                                for (let r = 0; r < t; r++) a = Kt.randInt(n + .9, 1.2 * n), e.quadraticCurveTo(Math.cos(o + s) * a, Math.sin(o + s) * a, Math.cos(o + 2 * s) * i, Math.sin(o + 2 * s) * i), o += 2 * s;
                                e.lineTo(0, -i), e.closePath()
                            }(o, 6, J.scale, .7 * J.scale), o.fillStyle = t ? "#e3f1f4" : "#89a54c", o.fill(), o.stroke(), o.fillStyle = t ? "#6a64af" : "#c15555";
                            let n = 4,
                                i = 2 * Math.PI / n;
                            for (let t = 0; t < n; ++t) e = Kt.randInt(J.scale / 3.5, J.scale / 2.3), Bi(e * Math.cos(i * t), e * Math.sin(i * t), Kt.randInt(10, 12), o)
                        } else 2 != e.type && 3 != e.type || (o.fillStyle = 2 == e.type ? 2 == t ? "#938d77" : "#939393" : "#e0c655", Oi(o, 3, e.scale, e.scale), o.fill(), o.stroke(), o.shadowBlur = null, o.shadowColor = null, o.fillStyle = 2 == e.type ? 2 == t ? "#b2ab90" : "#bcbcbc" : "#ebdca3", Oi(o, 3, .55 * e.scale, .65 * e.scale), o.fill());
                    a = i, ca[n] = a
                }
                return a
            }
            let pa = [];

            function ha(e, t) {
                let n = pa[e.id];
                if (!n || t) {
                    let i = t ? 5 : 20,
                        a = document.createElement("canvas"),
                        o = t || "windmill" != e.name ? e.scale : Qt.list[4].scale;
                    a.width = a.height = 2.5 * o + gt + (Qt.list[e.id].spritePadding || 0) + i;
                    let s = a.getContext("2d");
                    if (s.translate(a.width / 2, a.height / 2), s.rotate(t ? 0 : Math.PI / 2), s.strokeStyle = mt, s.lineWidth = gt * (t ? a.width / 81 : 1), t || (s.shadowBlur = 8, s.shadowColor = "rgba(0, 0, 0, 0.2)"), "apple" == e.name) {
                        s.fillStyle = "#c15555", Bi(0, 0, e.scale, s), s.fillStyle = "#89a54c";
                        let t = -Math.PI / 2;
                        Pi(e.scale * Math.cos(t), e.scale * Math.sin(t), 25, t + Math.PI / 2, s)
                    } else if ("cookie" == e.name) {
                        s.fillStyle = "#cca861", Bi(0, 0, e.scale, s), s.fillStyle = "#937c4b";
                        let t, n = 4,
                            i = 2 * Math.PI / n;
                        for (let a = 0; a < n; ++a) t = Kt.randInt(e.scale / 2.5, e.scale / 1.7), Bi(t * Math.cos(i * a), t * Math.sin(i * a), Kt.randInt(4, 5), s, !0)
                    } else if ("cheese" == e.name) {
                        s.fillStyle = "#f4f3ac", Bi(0, 0, e.scale, s), s.fillStyle = "#c3c28b";
                        let t, n = 4,
                            i = 2 * Math.PI / n;
                        for (let a = 0; a < n; ++a) t = Kt.randInt(e.scale / 2.5, e.scale / 1.7), Bi(t * Math.cos(i * a), t * Math.sin(i * a), Kt.randInt(4, 5), s, !0)
                    } else if ("wood wall" == e.name || "stone wall" == e.name || "castle wall" == e.name) {
                        s.fillStyle = "castle wall" == e.name ? "#83898e" : "wood wall" == e.name ? "#a5974c" : "#939393";
                        let t = "castle wall" == e.name ? 4 : 3;
                        Oi(s, t, 1.1 * e.scale, 1.1 * e.scale), s.fill(), s.stroke(), s.fillStyle = "castle wall" == e.name ? "#9da4aa" : "wood wall" == e.name ? "#c9b758" : "#bcbcbc", Oi(s, t, .65 * e.scale, .65 * e.scale), s.fill()
                    } else if ("spikes" == e.name || "greater spikes" == e.name || "poison spikes" == e.name || "spinning spikes" == e.name) {
                        s.fillStyle = "poison spikes" == e.name ? "#7b935d" : "#939393";
                        let t = .6 * e.scale;
                        Oi(s, "spikes" == e.name ? 5 : 6, e.scale, t), s.fill(), s.stroke(), s.fillStyle = "#a5974c", Bi(0, 0, t, s), s.fillStyle = "#c9b758", Bi(0, 0, t / 2, s, !0)
                    } else if ("windmill" == e.name || "faster windmill" == e.name || "power mill" == e.name) s.fillStyle = "#a5974c", Bi(0, 0, o, s), s.fillStyle = "#c9b758", Ri(0, 0, 1.5 * o, 29, 4, s), s.fillStyle = "#a5974c", Bi(0, 0, .5 * o, s);
                    else if ("mine" == e.name) s.fillStyle = "#939393", Oi(s, 3, e.scale, e.scale), s.fill(), s.stroke(), s.fillStyle = "#bcbcbc", Oi(s, 3, .55 * e.scale, .65 * e.scale), s.fill();
                    else if ("sapling" == e.name)
                        for (let t = 0; t < 2; ++t) {
                            let n = e.scale * (t ? .5 : 1);
                            Oi(s, 7, n, .7 * n), s.fillStyle = t ? "#b4db62" : "#9ebf57", s.fill(), t || s.stroke()
                        } else if ("pit trap" == e.name) s.fillStyle = "#a5974c", Oi(s, 3, 1.1 * e.scale, 1.1 * e.scale), s.fill(), s.stroke(), s.fillStyle = mt, Oi(s, 3, .65 * e.scale, .65 * e.scale), s.fill();
                        else if ("boost pad" == e.name) s.fillStyle = "#7e7f82", Ai(0, 0, 2 * e.scale, 2 * e.scale, s), s.fill(), s.stroke(), s.fillStyle = "#dbd97d", Hi(1 * e.scale, s);
                    else if ("turret" == e.name) {
                        s.fillStyle = "#a5974c", Bi(0, 0, e.scale, s), s.fill(), s.stroke(), s.fillStyle = "#939393";
                        let t = 50;
                        Ai(0, -t / 2, .9 * e.scale, t, s), Bi(0, 0, .6 * e.scale, s), s.fill(), s.stroke()
                    } else if ("platform" == e.name) {
                        s.fillStyle = "#cebd5f";
                        let t = 4,
                            n = 2 * e.scale,
                            i = n / t,
                            a = -e.scale / 2;
                        for (let o = 0; o < t; ++o) Ai(a - i / 2, 0, i, 2 * e.scale, s), s.fill(), s.stroke(), a += n / t
                    } else "healing pad" == e.name ? (s.fillStyle = "#7e7f82", Ai(0, 0, 2 * e.scale, 2 * e.scale, s), s.fill(), s.stroke(), s.fillStyle = "#db6e6e", Ri(0, 0, .65 * e.scale, 20, 4, s, !0)) : "spawn pad" == e.name ? (s.fillStyle = "#7e7f82", Ai(0, 0, 2 * e.scale, 2 * e.scale, s), s.fill(), s.stroke(), s.fillStyle = "#71aad6", Bi(0, 0, .6 * e.scale, s)) : "blocker" == e.name ? (s.fillStyle = "#7e7f82", Bi(0, 0, e.scale, s), s.fill(), s.stroke(), s.rotate(Math.PI / 4), s.fillStyle = "#db6e6e", Ri(0, 0, .65 * e.scale, 20, 4, s, !0)) : "teleporter" == e.name && (s.fillStyle = "#7e7f82", Bi(0, 0, e.scale, s), s.fill(), s.stroke(), s.rotate(Math.PI / 4), s.fillStyle = "#d76edb", Bi(0, 0, .5 * e.scale, s, !0));
                    n = a, t || (pa[e.id] = n)
                }
                return n
            }
            let ma = [];

            function ua(e, t, n, i) {
                if (t.lineWidth = gt, je.globalAlpha = .2, t.strokeStyle = mt, t.save(), t.translate(n, i), t.rotate(90 ** 10), "spikes" == e.name || "greater spikes" == e.name || "poison spikes" == e.name || "spinning spikes" == e.name) {
                    t.fillStyle = "poison spikes" == e.name ? "#7b935d" : "#939393";
                    var a = e.scale;
                    Oi(t, "spikes" == e.name ? 5 : 6, e.scale, a), t.fill(), t.stroke(), t.fillStyle = "#a5974c", Bi(0, 0, a, t), Y && e.owner && Y.sid != e.owner.sid && !J.findAllianceBySid(e.owner.sid) ? t.fillStyle = "#a34040" : t.fillStyle = "#c9b758", Bi(0, 0, a / 2, t, !0)
                } else if ("turret" == e.name) {
                    Bi(0, 0, e.scale, t), t.fill(), t.stroke(), t.fillStyle = "#939393";
                    let n = 50;
                    Ai(0, -n / 2, .9 * e.scale, n, t), Bi(0, 0, .6 * e.scale, t), t.fill(), t.stroke()
                } else if ("teleporter" == e.name) t.fillStyle = "#7e7f82", Bi(0, 0, e.scale, t), t.fill(), t.stroke(), t.rotate(Math.PI / 4), t.fillStyle = "#d76edb", Bi(0, 0, .5 * e.scale, t, !0);
                else if ("platform" == e.name) {
                    t.fillStyle = "#cebd5f";
                    let n = 4,
                        i = 2 * e.scale,
                        a = i / n,
                        o = -e.scale / 2;
                    for (let s = 0; s < n; ++s) Ai(o - a / 2, 0, a, 2 * e.scale, t), t.fill(), t.stroke(), o += i / n
                } else "healing pad" == e.name ? (t.fillStyle = "#7e7f82", Ai(0, 0, 2 * e.scale, 2 * e.scale, t), t.fill(), t.stroke(), t.fillStyle = "#db6e6e", Ri(0, 0, .65 * e.scale, 20, 4, t, !0)) : "spawn pad" == e.name ? (t.fillStyle = "#7e7f82", Ai(0, 0, 2 * e.scale, 2 * e.scale, t), t.fill(), t.stroke(), t.fillStyle = "#71aad6", Bi(0, 0, .6 * e.scale, t)) : "blocker" == e.name ? (t.fillStyle = "#7e7f82", Bi(0, 0, e.scale, t), t.fill(), t.stroke(), t.rotate(Math.PI / 4), t.fillStyle = "#db6e6e", Ri(0, 0, .65 * e.scale, 20, 4, t, !0)) : "windmill" == e.name || "faster windmill" == e.name || "power mill" == e.name ? (t.fillStyle = "#a5974c", Bi(0, 0, e.scale, t), t.fillStyle = "#c9b758", Ri(0, 0, 1.5 * e.scale, 29, 4, t), t.fillStyle = "#a5974c", Bi(0, 0, .5 * e.scale, t)) : "pit trap" == e.name && (t.fillStyle = "#a5974c", Oi(t, 3, 1.1 * e.scale, 1.1 * e.scale), t.fill(), t.stroke(), Y && e.owner && Y.sid != e.owner.sid && !J.findAllianceBySid(e.owner.sid) ? t.fillStyle = "#a34040" : t.fillStyle = mt, Oi(t, 3, .65 * e.scale, .65 * e.scale), t.fill());
                t.restore()
            }

            function ga(e, t, n) {
                return e + n >= 0 && e - n <= at && t + n >= 0 && ot
            }

            function fa(e, t, n) {
                let a, o, s;
                ne.forEach((r => {
                    J = r, J.active && ne.includes(r) && J.render && (o = J.x + J.xWiggle - t, s = J.y + J.yWiggle - n, 0 == e && J.update(Ke), je.globalAlpha = J.alpha, J.layer == e && ga(o, s, J.scale + (J.blocker || 0)) && (J.isItem ? (a = !J.dmg && !J.trap || J.isTeamObject(Y) ? ha(J) : function(e) {
                        let t = ma[e.id];
                        if (!t) {
                            let n = document.createElement("canvas");
                            n.width = n.height = 2.5 * e.scale + gt + (Qt.list[e.id].spritePadding || 0) + 0;
                            let i = n.getContext("2d");
                            if (i.translate(n.width / 2, n.height / 2), i.rotate(Math.PI / 2), i.strokeStyle = mt, i.lineWidth = gt, "spikes" == e.name || "greater spikes" == e.name || "poison spikes" == e.name || "spinning spikes" == e.name) {
                                i.fillStyle = "poison spikes" == e.name ? "#7b935d" : "#939393";
                                let t = .6 * e.scale;
                                Oi(i, "spikes" == e.name ? 5 : 6, e.scale, t), i.fill(), i.stroke(), i.fillStyle = "#a5974c", Bi(0, 0, t, i), i.fillStyle = "#cc5151", Bi(0, 0, t / 2, i, !0)
                            } else "pit trap" == e.name && (i.fillStyle = "#a5974c", Oi(i, 3, 1.1 * e.scale, 1.1 * e.scale), i.fill(), i.stroke(), i.fillStyle = "#cc5151", Oi(i, 3, .65 * e.scale, .65 * e.scale), i.fill());
                            t = n, ma[e.id] = t
                        }
                        return t
                    }(J), je.save(), je.translate(o, s), je.rotate(J.dir), J.active || je.scale(J.visScale / J.scale, J.visScale / J.scale), je.drawImage(a, -a.width / 2, -a.height / 2), J.blocker && (je.strokeStyle = "#db6e6e", je.globalAlpha = .3, je.lineWidth = 6, Bi(0, 0, J.blocker, je, !1, !0)), je.restore()) : (a = da(J), je.drawImage(a, o - a.width / 2, s - a.height / 2))), 3 != e || A || J.health < J.maxHealth && (je.fillStyle = ut, je.roundRect(o - i.healthBarWidth / 2 - i.healthBarPad, s - i.healthBarPad, i.healthBarWidth + 2 * i.healthBarPad, 17, 8), je.fill(), je.fillStyle = J.isTeamObject(Y) ? "#8ecc51" : "#cc5151", je.roundRect(o - i.healthBarWidth / 2, s, i.healthBarWidth * (J.health / J.maxHealth), 17 - 2 * i.healthBarPad, 7), je.fill()))
                })), 0 == e && Tt.length && Tt.forEach((e => {
                    o = e.x - t, s = e.y - n,
                        function(e, t, n) {
                            ua(e, je, t, n)
                        }(e, o, s)
                }))
            }
            class ya {
                constructor(e, t) {
                    this.init = function(e, t) {
                        this.scale = 0, this.x = e, this.y = t, this.active = !0
                    }, this.update = function(e, n) {
                        this.active && (this.scale += .05 * n, this.scale >= t ? this.active = !1 : (e.globalAlpha = 1 - Math.max(0, this.scale / t), e.beginPath(), e.arc(this.x / i.mapScale * qe.width, this.y / i.mapScale * qe.width, this.scale, 0, 2 * Math.PI), e.stroke()))
                    }, this.color = e
                }
            }

            function wa(e, t) {
                Jt = hn.find((e => !e.active)), Jt || (Jt = new ya("#fff", i.mapPingScale), hn.push(Jt)), Jt.init(e, t)
            }
            let ka = ["https://cdn.discordapp.com/attachments/1175772907931176991/1226209968051453962/Pngtreeskull_icon_logo_vector_illuatration_7964583.png?ex=6623f006&is=66117b06&hm=d34a6c712d3a3185a4ee966a72d839f54206d72f81a42439800706c9a6069715&", "https://cdn.discordapp.com/attachments/1175772907931176991/1226209968051453962/Pngtreeskull_icon_logo_vector_illuatration_7964583.png?ex=6623f006&is=66117b06&hm=d34a6c712d3a3185a4ee966a72d839f54206d72f81a42439800706c9a6069715&"],
                va = {},
                xa = {},
                ba = ["crown", "skull"];

            function _a(e, t) {
                try {
                    return Math.hypot((t.y2 || t.y) - (e.y2 || e.y), (t.x2 || t.x) - (e.x2 || e.x))
                } catch (e) {
                    return 1 / 0
                }
            }

            function Ia() {
                if (te.length && vt && te.forEach((e => {
                        if (Kt.getDistance(e.x, e.y, Y.x, Y.y) <= 1200) ne.includes(e) || (ne.push(e), e.render = !0);
                        else if (ne.includes(e)) {
                            if (Kt.getDistance(e.x, e.y, Y.x, Y.y) >= 1200) {
                                e.render = !1;
                                const t = ne.indexOf(e);
                                t > -1 && ne.splice(t, 1)
                            }
                        } else if (Kt.getDistance(e.x, e.y, Y.x, Y.y) >= 1200) {
                            e.render = !1;
                            const t = ne.indexOf(e);
                            t > -1 && ne.splice(t, 1)
                        } else {
                            e.render = !1;
                            const t = ne.indexOf(e);
                            t > -1 && ne.splice(t, 1)
                        }
                    })), je.beginPath(), je.clearRect(0, 0, Le.width, Le.height), je.globalAlpha = 1, Y) {
                    let g = Kt.getDistance(et, tt, Y.x, Y.y),
                        f = Kt.getDirection(Y.x, Y.y, et, tt),
                        y = Math.min(.0045 * g * Ke, g);
                    g > .05 ? (et += y * Math.cos(f), tt += y * Math.sin(f)) : (et = Y.x, tt = Y.y)
                } else et = i.mapScale / 2 + i.riverWidth, tt = i.mapScale / 2;
                gn.active && (!gn.array || gn.chaseNear && !se.length || (je.lineWidth = Y.scale / 5, je.globalAlpha = 1, je.strokeStyle = "red", je.beginPath(), gn.array.forEach(((e, t) => {
                    let i = gn.scale / gn.grid * e.x,
                        o = gn.scale / gn.grid * e.y,
                        s = {
                            x: Y.x2 - gn.scale / 2 + i - n,
                            y: Y.y2 - gn.scale / 2 + o - a
                        };
                    0 == t ? je.moveTo(s.x, s.y) : je.lineTo(s.x, s.y)
                })), je.stroke()));
                let e, t = Qe - 1e3 / i.serverUpdateRate;
                for (let w = 0; w < Z.length + ais.length; ++w)
                    if (J = Z[w] || ais[w - Z.length], J && J.visible)
                        if (J.forcePos) J.x = J.x2, J.y = J.y2, J.dir = J.d2;
                        else {
                            let k = J.t2 - J.t1,
                                v = (t - J.t1) / k,
                                x = 170;
                            J.dt += Ke;
                            let b = Math.min(1.7, J.dt / x);
                            e = J.x2 - J.x1, J.x = J.x1 + e * b, e = J.y2 - J.y1, J.y = J.y1 + e * b, i.anotherVisual, J.dir = Math.lerpAngle(J.d2, J.d1, Math.min(1.2, v))
                        }
                let n = et - at / 2,
                    a = tt - ot / 2;
                i.snowBiomeTop - a <= 0 && i.mapScale - i.snowBiomeTop - a >= ot ? (je.fillStyle = "#b6db66", je.fillRect(0, 0, at, ot)) : i.mapScale - i.snowBiomeTop - a <= 0 ? (je.fillStyle = "#dbc666", je.fillRect(0, 0, at, ot)) : i.snowBiomeTop - a >= ot ? (je.fillStyle = "#fff", je.fillRect(0, 0, at, ot)) : i.snowBiomeTop - a >= 0 ? (je.fillStyle = "#fff", je.fillRect(0, 0, at, i.snowBiomeTop - a), je.fillStyle = "#b6db66", je.fillRect(0, i.snowBiomeTop - a, at, ot - (i.snowBiomeTop - a))) : (je.fillStyle = "#b6db66", je.fillRect(0, 0, at, i.mapScale - i.snowBiomeTop - a), je.fillStyle = "#dbc666", je.fillRect(0, i.mapScale - i.snowBiomeTop - a, at, ot - (i.mapScale - i.snowBiomeTop - a))), ft || (pt += ht * i.waveSpeed * Ke, pt >= i.waveMax ? (pt = i.waveMax, ht = -1) : pt <= 1 && (pt = ht = 1), je.globalAlpha = 1, je.fillStyle = "#dbc666", la(0, a, je, i.riverPadding), je.fillStyle = "#91b2db", la(0, a, je, 250 * (pt - 1))), je.globalAlpha = 1, je.strokeStyle = mt, Wi(n, a), je.globalAlpha = 1, je.strokeStyle = mt, fa(-1, n, a), je.globalAlpha = 1, je.lineWidth = gt, ia(0, n, a), Li(n, a, 0), je.globalAlpha = 1;
                for (let _ = 0; _ < ais.length; ++_) J = ais[_], J.active && J.visible && (J.animate(Ke), je.save(), je.translate(J.x - n, J.y - a), je.rotate(J.dir + J.dirPlus - Math.PI / 2), ra(J, je), je.restore());
                if (fa(0, n, a), ia(1, n, a), fa(1, n, a), Li(n, a, 1), fa(2, n, a), fa(3, n, a), je.fillStyle = "#000", je.globalAlpha = .09, n <= 0 && je.fillRect(0, 0, -n, ot), i.mapScale - n <= at) {
                    let I = Math.max(0, -a);
                    je.fillRect(i.mapScale - n, I, at - (i.mapScale - n), ot - I)
                }
                if (a <= 0 && je.fillRect(-n, 0, at + n, -a), i.mapScale - a <= ot) {
                    let C = Math.max(0, -n),
                        S = 0;
                    i.mapScale - n <= at && (S = at - (i.mapScale - n)), je.fillRect(C, i.mapScale - a, at - C - S, ot - (i.mapScale - a))
                }
                je.globalAlpha = 1, je.fillStyle = "rgba(0, 5, 80, 0.55)", je.fillRect(0, 0, at, ot), je.strokeStyle = ut, je.globalAlpha = 1;
                for (let T = 0; T < Z.length + ais.length; ++T)
                    if (J = Z[T] || ais[T - Z.length], J.visible && "NOOO" === J.showName) {
                        je.strokeStyle = ut;
                        let D = (J.team ? "[" + J.team + "] " : "") + (J.name || "");
                        if (J.isPlayer && J.sid, "" != D && "Trash Slave" != J.name) {
                            if (je.strokeStyle = ut, je.font = (J.nameScale || 30) + "px HammerSmith One", je.fillStyle = "#fff", je.textBaseline = "middle", je.textAlign = "center", je.lineWidth = J.nameScale ? 11 : 8, je.lineJoin = "round", je.strokeText(D, J.x - n, J.y - a - J.scale - i.nameY), je.fillText(D, J.x - n, J.y - a - J.scale - i.nameY), J.isLeader && xa.crown.isLoaded) {
                                let M = i.crownIconScale,
                                    U = J.x - n - M / 2 - je.measureText(D).width / 2 - i.crownPad;
                                je.drawImage(xa.crown, U, J.y - a - J.scale - i.nameY - M / 2 - 5, M, M)
                            }
                            if (1 == J.iconIndex && xa.skull.isLoaded) {
                                let E = i.crownIconScale,
                                    P = J.x - n - E / 2 + je.measureText(D).width / 2 + i.crownPad;
                                je.drawImage(xa.skull, P, J.y - a - J.scale - i.nameY - E / 2 - 5, E, E)
                            }
                            if (J.isPlayer && cn.wait && le == J && va[1].isLoaded && se.length && !A) {
                                let B = 2.2 * J.scale;
                                je.drawImage(va[1], J.x - n - B / 2, J.y - a - B / 2, B, B)
                            }
                        }
                        if (J.health > 0) {
                            if ("Trash Slave" != J.name && (je.fillStyle = ut, je.roundRect(J.x - n - i.healthBarWidth - i.healthBarPad, J.y - a + J.scale + i.nameY, 2 * i.healthBarWidth + 2 * i.healthBarPad, 17, 8), je.fill(), je.fillStyle = J == Y || J.team && J.team == Y.team ? "#8ecc51" : "#cc5151", je.roundRect(J.x - n - i.healthBarWidth, J.y - a + J.scale + i.nameY + i.healthBarPad, 2 * i.healthBarWidth * (J.health / J.maxHealth), 17 - 2 * i.healthBarPad, 7), je.fill()), J.isPlayer) {
                                je.globalAlpha = 1;
                                let O = {
                                    primary: null == J.primaryIndex ? 1 : (Qt.weapons[J.primaryIndex].speed - J.reloads[J.primaryIndex]) / Qt.weapons[J.primaryIndex].speed,
                                    secondary: null == J.secondaryIndex ? 1 : (Qt.weapons[J.secondaryIndex].speed - J.reloads[J.secondaryIndex]) / Qt.weapons[J.secondaryIndex].speed,
                                    turret: (2500 - J.reloads[53]) / 2500
                                };
                                je.fillStyle = ut, je.roundRect(J.x - n - i.healthBarPad, J.y - a + J.scale + i.nameY - 13, i.healthBarWidth + 2 * i.healthBarPad, 17, 8), je.fill(), je.fillStyle = (J == Y || J.team && (J.team, Y.team), "#DFFF00"), je.roundRect(J.x - n, J.y - a + J.scale + i.nameY - 13 + i.healthBarPad, i.healthBarWidth * O.secondary, 17 - 2 * i.healthBarPad, 7), je.fill(), je.fillStyle = ut, je.roundRect(J.x - n - i.healthBarWidth - i.healthBarPad, J.y - a + J.scale + i.nameY - 13, i.healthBarWidth + 2 * i.healthBarPad, 17, 8), je.fill(), je.fillStyle = J == Y || J.team && J.team == Y.team ? "#0096FF" : "#ff4545", je.roundRect(J.x - n - i.healthBarWidth, J.y - a + J.scale + i.nameY - 13 + i.healthBarPad, i.healthBarWidth * O.primary, 17 - 2 * i.healthBarPad, 7), je.fill()
                            } else je.fillStyle = J == Y || J.team && J.team == Y.team ? "#0096FF" : "#ff4545", null != J.primaryIndex && J.reloads[J.primaryIndex] > 0 && (je.roundRect(J.x - n - i.healthBarWidth, J.y - a + J.scale + i.nameY + i.healthBarPad, i.healthBarWidth * (J.reloads[J.primaryIndex] / Qt.weapons[J.primaryIndex].speed), 17 - 2 * i.healthBarPad, 7), je.fill()), null != J.secondaryIndex && J.reloads[J.secondaryIndex] > 0 && (je.roundRect(J.x - n + i.healthBarWidth * ((Qt.weapons[J.secondaryIndex].speed - J.reloads[J.secondaryIndex]) / Qt.weapons[J.secondaryIndex].speed), J.y - a + J.scale + i.nameY + i.healthBarPad, i.healthBarWidth * (J.reloads[J.secondaryIndex] / Qt.weapons[J.secondaryIndex].speed), 17 - 2 * i.healthBarPad, 7), je.fill());
                            if (J.isPlayer) {
                                je.globalAlpha = 1;
                                let R = {
                                    primary: null == J.primaryIndex ? 1 : (Qt.weapons[J.primaryIndex].speed - J.reloads[J.primaryIndex]) / Qt.weapons[J.primaryIndex].speed,
                                    secondary: null == J.secondaryIndex ? 1 : (Qt.weapons[J.secondaryIndex].speed - J.reloads[J.secondaryIndex]) / Qt.weapons[J.secondaryIndex].speed,
                                    turret: (2500 - J.reloads[53]) / 2500
                                };
                                J.currentReloads || (J.currentReloads = {
                                    primary: R.primary,
                                    secondary: R.secondary,
                                    turret: R.turret
                                });
                                const H = .3;
                                J.currentReloads.primary = (1 - H) * J.currentReloads.primary + H * R.primary, J.currentReloads.secondary = (1 - H) * J.currentReloads.secondary + H * R.secondary, J.currentReloads.turret = (1 - H) * J.currentReloads.turret + H * R.turret;
                                void 0 !== J.primaryIndex && (Qt.weapons[J.primaryIndex].speed, J.reloads[J.primaryIndex], Qt.weapons[J.primaryIndex].speed), void 0 !== J.secondaryIndex && (Qt.weapons[J.secondaryIndex].speed, J.reloads[J.secondaryIndex], Qt.weapons[J.secondaryIndex].speed);
                                const W = J.x - n,
                                    L = J.y - a,
                                    j = 35,
                                    q = 2 * Math.PI / 3,
                                    V = -Math.PI / 2 + Math.PI / 3 + J.dir - Math.PI / 2,
                                    z = V + q * J.currentReloads.secondary,
                                    G = Math.PI / 2 + J.dir - Math.PI / 2,
                                    N = G + q * J.currentReloads.primary,
                                    $ = Math.PI + Math.PI / 4.5 + J.dir - Math.PI / 2,
                                    X = $ + q / 1.25 * J.currentReloads.turret;

                                function o(e) {
                                    return `hsl(${e-50}, 85%, 50%, 30)`
                                }
                                if (je.save(), J.currentReloads.primary < .999 && (je.beginPath(), je.lineCap = "round", je.arc(W, L, j, G, N), je.lineWidth = 4, je.strokeStyle = o(240 * J.currentReloads.primary), je.stroke()), J.currentReloads.secondary < .999 && (je.beginPath(), je.lineCap = "round", je.arc(W, L, j, V, z), je.lineWidth = 4, je.strokeStyle = o(240 * J.currentReloads.secondary), je.stroke()), J.currentReloads.turret < .999 && (je.beginPath(), je.lineCap = "round", je.arc(W, L, j, $, X), je.lineWidth = 4, je.strokeStyle = o(240 * J.currentReloads.turret), je.stroke()), je.restore(), "Trash Slave" != J.name) {
                                    je.globalAlpha = 1, je.font = "24px HammerSmith One", je.fillStyle = "#9900cc", je.strokeStyle = ut, je.textBaseline = "middle", je.textAlign = "center", je.lineWidth = 8, je.lineJoin = "round";
                                    let K = i.crownIconScale,
                                        Q = J.x - n - K / 2 + i.crownPad - 2;
                                    je.strokeText("[" + (45 == J.skinIndex && J.shameTimer > 0 ? J.shameTimer : J.shameCount) + "/" + Math.round(J.pinge) + "/" + J.lastshamecount + "]", Q, J.y - a - J.scale - i.nameY + 175), je.fillText("[" + (45 == J.skinIndex && J.shameTimer > 0 ? J.shameTimer : J.shameCount) + "/" + Math.round(J.pinge) + "/" + J.lastshamecount + "]", Q, J.y - a - J.scale - i.nameY + 175)
                                }
                                if (!J.isTeam(Y)) {
                                    let ee = {
                                            x: Je / 2,
                                            y: Ze / 2
                                        },
                                        ie = Math.min(1, 100 * Kt.getDistance(0, 0, Y.x - J.x, (Y.y - J.y) * (16 / 9)) / (i.maxScreenHeight / 2) / ee.y),
                                        ae = ee.y * ie / 2,
                                        oe = ae * Math.cos(Kt.getDirect(J, Y, 0, 0)),
                                        re = ae * Math.sin(Kt.getDirect(J, Y, 0, 0));
                                    je.save(), je.translate(Y.x - n + oe, Y.y - a + re), je.rotate(J.aim2 + Math.PI / 2);
                                    let de = 255 - 2 * J.sid;
                                    je.fillStyle = `rgb(${de}, ${de}, ${de})`, je.globalAlpha = ie;
                                    let pe = function(e, t) {
                                        t = t || je;
                                        let n = e * (Math.sqrt(3) / 2);
                                        t.beginPath(), t.moveTo(0, -n / 1.5), t.lineTo(-e / 2, n / 2), t.lineTo(e / 2, n / 2), t.lineTo(0, -n / 1.5), t.fill(), t.closePath()
                                    };
                                    pe(25, je), je.restore()
                                }
                                if ("pre2" == getEl("predictType").value) {
                                    je.lineWidth = 3, je.strokeStyle = "#fff", je.globalAlpha = 1, je.beginPath();
                                    let he = {
                                        x: J.x2 - n,
                                        y: J.y2 - a
                                    };
                                    je.moveTo(J.x - n, J.y - a), je.lineTo(he.x, he.y), je.stroke()
                                } else if ("pre3" == getEl("predictType").value) {
                                    je.lineWidth = 3, je.strokeStyle = "#cc5151", je.globalAlpha = 1, je.beginPath();
                                    let me = {
                                        x: J.x3 - n,
                                        y: J.y3 - a
                                    };
                                    je.moveTo(J.x - n, J.y - a), je.lineTo(me.x, me.y), je.stroke()
                                }
                            }
                        }
                    }
                if (Y && ce.autoPush && ce.pushData) {
                    je.lineWidth = 5, je.globalAlpha = 1, je.beginPath();
                    var s = Y.x - n,
                        r = Y.y - a,
                        l = ce.pushData.x2 - n,
                        c = ce.pushData.y2 - a,
                        d = ce.pushData.x - n,
                        p = ce.pushData.y - a;
                    je.moveTo(s, r), je.lineTo(l, c), je.lineTo(d, p), je.stroke();
                    var h = d - s,
                        m = p - r,
                        u = Math.sqrt(h * h + m * m) / 100 * 100;
                    let ue;
                    u = Math.min(100, Math.max(0, u)), je.fillStyle = "pink", je.strokeStyle = "black", je.lineWidth = 5, je.font = "27px Times New Roman";
                    let ge = ne.filter((e => e.trap && e.active && e.isTeamObject(Y) && Kt.getDist(e, le, 0, 2) <= le.scale + e.getScale() + 5)).sort((function(e, t) {
                        return Kt.getDist(e, le, 0, 2) - Kt.getDist(t, le, 0, 2)
                    }))[0];
                    ge && (ue = ne.filter((e => e.dmg && e.active && e.isTeamObject(Y) && Kt.getDist(e, ge, 0, 0) <= le.scale + ge.scale + e.scale)).sort((function(e, t) {
                        return Kt.getDist(e, le, 0, 2) - Kt.getDist(t, le, 0, 2)
                    }))[0]);
                    let fe = (Y.x - n + le.x - n) / 2,
                        ye = (Y.y - a + le.y - a) / 2;
                    je.moveTo(Y.x - n, Y.y - a), je.strokeText(le.aim2, fe, ye), je.fillText(le.aim2, fe, ye)
                }
                je.globalAlpha = 1, rn.update(Ke, je, n, a);
                for (let we = 0; we < Z.length; ++we)
                    if (J = Z[we], J.visible) {
                        if (J.chatCountdown > 0) {
                            J.chatCountdown -= Ke, J.chatCountdown <= 0 && (J.chatCountdown = 0), je.font = "32px HammerSmith One";
                            let ke = je.measureText(J.chatMessage);
                            je.textBaseline = "middle", je.textAlign = "center";
                            let ve = J.x - n,
                                xe = J.y - J.scale - a - 90,
                                be = 47,
                                _e = ke.width + 17;
                            je.fillStyle = "rgba(0,0,0,0.2)", je.roundRect(ve - _e / 2, xe - be / 2, _e, be, 6), je.fill(), je.fillStyle = "#fff", je.fillText(J.chatMessage, ve, xe)
                        }
                        if (J.chat.count > 0)
                            if (A) J.chat.count = 0;
                            else {
                                J.chat.count -= Ke, J.chat.count <= 0 && (J.chat.count = 0), je.font = "32px HammerSmith One";
                                let Ie = je.measureText(J.chat.message);
                                je.textBaseline = "middle", je.textAlign = "center";
                                let Ce = J.x - n,
                                    Se = J.y - J.scale - a + 180,
                                    Te = 47,
                                    De = Ie.width + 17;
                                je.fillStyle = "rgba(0,0,0,0.2)", je.roundRect(Ce - De / 2, Se - Te / 2, De, Te, 6), je.fill(), je.fillStyle = "#ffffff99", je.fillText(J.chat.message, Ce, Se)
                            }
                    }
                F.length && F.filter((e => e.active)).forEach((e => {
                        if (e.alive ? (e.alpha -= Ke / 5e3, e.alpha <= 0 && (e.alpha = 0, e.active = !1)) : e.alpha <= 1 && (e.alpha += Ke / 250, e.alpha >= 1 && (e.alpha = 1, e.alive = !0)), e.active) {
                            je.font = "20px Ubuntu";
                            let t = je.measureText(e.chat);
                            je.textBaseline = "middle", je.textAlign = "center";
                            let i = e.x - n,
                                o = e.y - a - 90,
                                s = 40,
                                r = t.width + 15;
                            je.globalAlpha = e.alpha, je.fillStyle = e.owner.isTeam(Y) ? "#8ecc51" : "#cc5151", je.strokeStyle = "rgb(25, 25, 25)", je.strokeText(e.owner.name, i, o - 45), je.fillText(e.owner.name, i, o - 45), je.lineWidth = 5, je.fillStyle = "#ccc", je.strokeStyle = "rgb(25, 25, 25)", je.roundRect(i - r / 2, o - s / 2, r, s, 6), je.stroke(), je.fill(), je.fillStyle = "#fff", je.strokeStyle = "#000", je.strokeText(e.chat, i, o), je.fillText(e.chat, i, o), e.y -= Ke / 100
                        }
                    })), je.globalAlpha = 1,
                    function(e) {
                        if (Y && Y.alive) {
                            Ve.clearRect(0, 0, qe.width, qe.height), Ve.lineWidth = 4;
                            for (let t = 0; t < hn.length; ++t) Jt = hn[t], Ve.strokeStyle = Jt.color, Jt.update(Ve, e);
                            if (Ve.globalAlpha = 1, Ve.fillStyle = "#ff0000", mn.length) {
                                Ve.fillStyle = "#abcdef", Ve.font = "34px HammerSmith One", Ve.textBaseline = "middle", Ve.textAlign = "center";
                                for (let e = 0; e < mn.length;) Ve.fillText("!", mn[e].x / i.mapScale * qe.width, mn[e].y / i.mapScale * qe.height), e += 2
                            }
                            if (Ve.globalAlpha = 1, Ve.fillStyle = "#fff", Bi(Y.x / i.mapScale * qe.width, Y.y / i.mapScale * qe.height, 7, Ve, !0), Ve.fillStyle = "rgba(255,255,255,0.35)", Y.team && Xt)
                                for (let e = 0; e < Xt.length;) Bi(Xt[e] / i.mapScale * qe.width, Xt[e + 1] / i.mapScale * qe.height, 7, Ve, !0), e += 2;
                            Ci.length && Ci.forEach((e => {
                                e.inGame && (Ve.globalAlpha = 1, Ve.strokeStyle = "#cc5151", Bi(e.x2 / i.mapScale * qe.width, e.y2 / i.mapScale * qe.height, 7, Ve, !1, !0))
                            })), $t && (Ve.fillStyle = "#fc5553", Ve.font = "34px HammerSmith One", Ve.textBaseline = "middle", Ve.textAlign = "center", Ve.fillText("x", $t.x / i.mapScale * qe.width, $t.y / i.mapScale * qe.height)), pn && (Ve.fillStyle = "#fff", Ve.font = "34px HammerSmith One", Ve.textBaseline = "middle", Ve.textAlign = "center", Ve.fillText("x", pn.x / i.mapScale * qe.width, pn.y / i.mapScale * qe.height))
                        }
                    }(Ke)
            }

            function Ca(e) {
                getEl("instaType").disabled = e, getEl("antiBullType").disabled = e, getEl("predictType").disabled = e
            }! function() {
                for (let e = 0; e < ba.length; ++e) {
                    let t = new Image;
                    t.onload = function() {
                        this.isLoaded = !0
                    }, t.src = "./../img/icons/" + ba[e] + ".png", xa[ba[e]] = t
                }
                for (let e = 0; e < ka.length; ++e) {
                    let t = new Image;
                    t.onload = function() {
                        this.isLoaded = !0
                    }, t.src = ka[e], va[e] = t
                }
            }(), window.requestAnimFrame = function() {
                    return null
                }, window.rAF = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e) {
                    window.setTimeout(e, 1e3 / 9)
                },
                function e() {
                    Qe = performance.now(), Ke = Qe - rt, rt = Qe;
                    let t = performance.now(),
                        n = t - q.last;
                    n >= 1e3 && (q.ltime = q.time * (1e3 / n), q.last = t, q.time = 0), q.time++, getEl("pingFps").innerHTML = `${window.pingTime}ms | Fps: ${Math.round(q.ltime)}`, getEl("packetStatus").innerHTML = H, Ia(), rAF(e), Ct.avg = Math.round((Ct.min + Ct.max) / 2)
                }(), Ca(A), window.debug = function() {
                    ce.waitHit = 0, ce.autoAim = !1, cn.isTrue = !1, ln.inTrap = !1, pa = [], ma = [], ca = []
                }, window.wasdMode = function() {
                    A = !A, Ca(A)
                }, window.startGrind = function() {
                    if (getEl("weaponGrind").checked)
                        for (let e = 0; e < 2 * Math.PI; e += Math.PI / 2) Ht(Y.getItemType(22), e)
                };
            let Sa = ["adorable-eight-guppy", "galvanized-bittersweet-windshield"],
                Ta = 0;
            window.connectFillBots = function() {
                o = [], Ta = 0;
                for (let e = 0; e < Sa.length; e++) {
                    let t = new WebSocket(`wss://${Sa[e]}.glitch.me`);
                    t.binaryType = "arraybuffer", t.onopen = function() {
                        t.ssend = function(e) {
                            let n = Array.prototype.slice.call(arguments, 1),
                                i = window.msgpack.encode([e, n]);
                            t.send(i)
                        };
                        for (let e = 0; e < 4; e++) window.grecaptcha.execute("6LfahtgjAAAAAF8SkpjyeYMcxMdxIaQeh-VoPATP", {
                            action: "homepage"
                        }).then((function(e) {
                            let n = U.url.split("wss://")[1].split("?")[0];
                            t.ssend("bots", "wss://" + n + "?token=re:" + encodeURIComponent(e), Ta), o.push([t]), Ta++
                        }))
                    }, t.onmessage = function(e) {
                        let t = new Uint8Array(e.data),
                            n = window.msgpack.decode(t);
                        n[0];
                        t = n[1]
                    }
                }
            }, window.destroyFillBots = function() {
                o.forEach((e => {
                    e[0].close()
                })), o = []
            }, window.tryConnectBots = function() {
                for (let e = 0; e < (Ci.length < 3 ? 3 : 4); e++) window.grecaptcha.execute("6LfahtgjAAAAAF8SkpjyeYMcxMdxIaQeh-VoPATP", {
                    action: "homepage"
                }).then((function(e) {
                    Ei(e)
                }))
            }, window.destroyBots = function() {
                Ci.forEach((e => {
                    e.closeSocket = !0
                })), Ci = []
            }, window.resBuild = function() {
                te.length && (te.forEach((e => {
                    e.breakObj = !1
                })), oe = [])
            }, window.toggleBotsCircle = function() {
                Y.circle = !Y.circle
            }, window.toggleVisual = function() {
                i.anotherVisual = !i.anotherVisual, te.forEach((e => {
                    e.active && (e.dir = e.lastDir)
                }))
            }, window.prepareUI = function(e) {
                vn();
                document.getElementById("chatBox"), document.getElementById("chatHolder");
                document.createElement("div").id = "suggestBox";
                Kt.removeAllChildren($e);
                for (let e = 0; e < Qt.weapons.length + Qt.list.length; ++e) ! function(e) {
                    Kt.generateElement({
                        id: "actionBarItem" + e,
                        class: "actionBarItem",
                        style: "display:none; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5)",
                        onmouseout: function() {
                            kn()
                        },
                        parent: $e
                    })
                }(e);
                for (let t = 0; t < Qt.list.length + Qt.weapons.length; ++t) ! function(t) {
                    let n = document.createElement("canvas");
                    n.width = n.height = 66;
                    let a = n.getContext("2d");
                    if (a.translate(n.width / 2, n.height / 2), a.imageSmoothingEnabled = !1, a.webkitImageSmoothingEnabled = !1, a.mozImageSmoothingEnabled = !1, Qt.weapons[t]) {
                        a.rotate(Math.PI);
                        let o = new Image;
                        ta[Qt.weapons[t].src] = o, o.onload = function() {
                            this.isLoaded = !0;
                            let e = 1 / (this.height / this.width),
                                o = Qt.weapons[t].iPad || 1;
                            a.drawImage(this, -n.width * o * i.iconPad * e / 2, -n.height * o * i.iconPad / 2, n.width * o * e * i.iconPad, n.height * o * i.iconPad), a.fillStyle = "rgba(0, 0, 70, 0.2)", a.globalCompositeOperation = "source-atop", a.fillRect(-n.width / 2, -n.height / 2, n.width, n.height), getEl("actionBarItem" + t).style.backgroundImage = "url(" + n.toDataURL() + ")"
                        }, o.src = "./../img/weapons/" + Qt.weapons[t].src + ".png";
                        let s = getEl("actionBarItem" + t);
                        s.onclick = Kt.checkTrusted((function() {
                            Ot(e.weapons[Qt.weapons[t].type])
                        })), Kt.hookTouchEvents(s)
                    } else {
                        let o = ha(Qt.list[t - Qt.weapons.length], !0),
                            s = Math.min(n.width - i.iconPadding, o.width);
                        a.globalAlpha = 1, a.drawImage(o, -s / 2, -s / 2, s, s), a.fillStyle = "rgba(0, 0, 70, 0.1)", a.globalCompositeOperation = "source-atop", a.fillRect(-s / 2, -s / 2, s, s), getEl("actionBarItem" + t).style.backgroundImage = "url(" + n.toDataURL() + ")";
                        let r = getEl("actionBarItem" + t);
                        r.onclick = Kt.checkTrusted((function() {
                            Bt(e.items[e.getItemType(t - Qt.weapons.length)])
                        })), Kt.hookTouchEvents(r)
                    }
                }(t)
            }, window.profineTest = function(e) {
                if (e) {
                    let t = e + "";
                    return t = t.slice(0, i.maxNameLength), t
                }
            }
        }(), (window.location.hostname.includes("moomoo.io") || window.location.hostname.includes("sandbox.moomoo.io") || window.location.hostname.includes("dev.moomoo.io")) && (() => {
            "use strict";
            const e = 1e3,
                t = 80,
                n = new Set(["pp", "rmd"]),
                i = new Set(["5", "c", "33", "2", "7", "13c"]);
            const a = new class {
                constructor() {
                    this.resetRateLimit()
                }
                resetRateLimit() {
                    this.packetHistory = new Map, this.packetQueue = [], this.lastSent = Date.now()
                }
                isRateLimited(a) {
                    const o = new Uint8Array(a);
                    console.log({
                        data: a
                    }), Date.now() - this.lastSent > e && this.resetRateLimit();
                    const s = o[0];
                    if (!n.has(s)) {
                        if (this.packetHistory.has(s) && ("2" === s || "33" === s) && this.packetHistory.get(s)[0] === o[1]) return !0;
                        if (this.packetQueue.length > t) return i.has(s) || this.packetQueue.push(a);
                        this.packetQueue.push({
                            type: s,
                            data: o.slice(1)
                        }), this.packetHistory.set(s, o.slice(1))
                    }
                    return !1
                }
            };
            WebSocket.prototype.send = new Proxy(WebSocket.prototype.send, {
                apply(e, t, n) {
                    if (t.messageListenerSet || (t.addEventListener("message", (e => {
                            if (a.packetQueue.length) {
                                51 === new Uint8Array(e.data)[0] && (t.send(a.packetQueue[0]), a.packetQueue.shift())
                            }
                        })), t.messageListenerSet = !0), !a.isRateLimited(n)) return Reflect.apply(e, t, n)
                }
            })
        })(), (async() => {
            unsafeWindow.weaponVariantProgress = !0, document.addEventListener("DOMContentLoaded", (() => {
                const e = document.createElement("style");
                e.innerText = "\n\t\t.weaponVariantBar {\n\t\t\tmargin-top: 63px;\n\t\t\theight: 3px;\n\t\t\tborder-radius: 4px;\n\t\t}\n\n\t\t@media only screen and (max-width: 896px) {\n\t\t\t.weaponVariantBar {\n\t\t\t\tmargin-top: 41px;\n\t\t\t}\n\t\t}\n\t\t", document.head.appendChild(e)
            }));
            let e, t, n = !1,
                i = {},
                a = {},
                o = {},
                s = 0,
                r = 0;

            function l(e) {
                return new Promise((t => {
                    if (document.querySelector(e)) return t(document.querySelector(e));
                    const n = new MutationObserver((i => {
                        document.querySelector(e) && (t(document.querySelector(e)), n.disconnect())
                    }));
                    n.observe(document.body, {
                        childList: !0,
                        subtree: !0
                    })
                }))
            }
            await new Promise((async d => {
                let {
                    send: p
                } = WebSocket.prototype;
                WebSocket.prototype.send = function(...h) {
                    p.apply(this, h), this.send = p, this.iosend = function(...e) {
                        const [t, ...n] = e;
                        this.send(new Uint8Array(Array.from(msgpack.encode([t, n]))))
                    }, n || (n = !0, this.addEventListener("message", (n => {
                        if (!n.origin.includes("moomoo.io") && unsafeWindow.privateServer) return;
                        const [d, p] = msgpack.decode(new Uint8Array(n.data));
                        switch (d) {
                            case OLDPACKETCODE.RECEIVE[1]:
                                e = p[0];
                                break;
                            case OLDPACKETCODE.RECEIVE[2]:
                                if (p[1]) {
                                    i = {};
                                    const e = localStorage.getItem("moofoll");
                                    a = {
                                        food: e ? 100 : 0,
                                        stone: e ? 100 : 0,
                                        wood: e ? 100 : 0,
                                        points: e ? 100 : 0
                                    };
                                    for (let e = 0; e < 16; e++) l("#variantBar" + e).then((e => {
                                        e.style.width = "0%"
                                    }))
                                }
                            case OLDPACKETCODE.RECEIVE[6]:
                                for (var h = 0; h < p[0].length; h += 8) p[0][h + 7] === e && (10 === p[0][h + 6] ? (s += 1, o[p[0][h]] = 1) : 11 === p[0][h + 6] ? (s += 1.5, o[p[0][h]] = 1.5) : 12 === p[0][h + 6] && (s += 2, o[p[0][h]] = 2));
                                break;
                            case OLDPACKETCODE.RECEIVE[12]:
                                null != o[p[0]] && (s -= o[p[0]], delete o[p[0]]);
                                break;
                            case OLDPACKETCODE.RECEIVE[33]:
                                for (let n = 0; n < p[0].length; n += 13)
                                    if (p[0][n] === e) {
                                        t = p[0][n + 5], i[t] < unsafeWindow.config.weaponVariants[p[0][n + 6]].xp ? (i[t] = unsafeWindow.config.weaponVariants[p[0][n + 6]].xp, c(t)) : i[t] >= unsafeWindow.config.weaponVariants[p[0][n + 6] + 1] ? .xp && (i[t] -= i[t] - unsafeWindow.config.weaponVariants[p[0][n + 6] + 1].xp + 100, c(t));
                                        break
                                    }
                                break;
                            case OLDPACKETCODE.RECEIVE[9]:
                                if ("kills" === p[0]) break;
                                const n = t;
                                null == i[n] && (i[n] = 0);
                                const d = p[1] - a[p[0]];
                                if (d > 0) {
                                    if ("points" === p[0] && [Math.ceil(s), Math.floor(s)].includes(d) && Date.now() - r > 800) {
                                        r = Date.now(), a[p[0]] = p[1], c(n);
                                        break
                                    }
                                    if ("points" === p[0] && d >= 100) {
                                        a[p[0]] = p[1], c(n);
                                        break
                                    }
                                    i[n] += d
                                }
                                a[p[0]] = p[1], c(n)
                        }
                    }))), d(this)
                }
            }));
            for (let e = 0; e < 16; e++) l("#actionBarItem" + e).then((t => {
                const n = document.createElement("div");
                n.id = "variantBar" + e, n.className = "weaponVariantBar", t.appendChild(n)
            }));

            function c(e) {
                let t, n;
                i[e] >= 12e3 ? (t = "none", n = 0) : i[e] >= 7e3 ? (t = "rgb(255, 113, 111)", n = (i[e] - 7e3) / 5e3 * 100) : i[e] >= 3e3 ? (t = "rgb(134, 181, 255)", n = (i[e] - 3e3) / 4e3 * 100) : i[e] >= 0 && (t = "rgb(247, 207, 69)", n = i[e] / 3e3 * 100), document.getElementById("variantBar" + e).style.width = n + "%", document.getElementById("variantBar" + e).style.backgroundColor = t
            }
        })(), (async() => {
            unsafeWindow.reloadTimer = !0;
            let e = [300, 400, 400, 300, 300, 700, 300, 100, 400, 600, 400, 0, 700, 230, 700, 1500],
                t = ["hammer_1", "axe_1", "great_axe_1", "sword_1", "samurai_1", "spear_1", "bat_1", "dagger_1", "stick_1", "bow_1", "great_hammer_1", "shield_1", "crossbow_1", "crossbow_2", "grab_1", "musket_1"],
                n = null,
                i = null,
                a = !1,
                o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            var s, r, l;
            const c = document.createElement("div");
            c.id = "reloadTimer1", c.className = "resourceDisplay", c.innerText = "0";
            const d = document.createElement("div");
            d.id = "reloadTimer2", d.className = "resourceDisplay", d.innerText = "-", await new Promise((async t => {
                let {
                    send: s
                } = WebSocket.prototype;
                WebSocket.prototype.send = function(...r) {
                    s.apply(this, r), this.send = s, this.addEventListener("message", (t => {
                        if (!t.origin.includes("moomoo.io") && unsafeWindow.privateServer) return;
                        const [s, r] = msgpack.decode(new Uint8Array(t.data));
                        switch (s) {
                            case OLDPACKETCODE.RECEIVE[1]:
                                a = !0, i = r[0], console.log({
                                    mySID: i
                                });
                                break;
                            case OLDPACKETCODE.RECEIVE[11]:
                                a = !1, o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                                break;
                            case OLDPACKETCODE.RECEIVE[7]:
                                r[0] == i && (o[r[2]] = e[r[2]]);
                                break;
                            case OLDPACKETCODE.RECEIVE[18]:
                                if ([1e3, 1200, 1400].includes(r[3])) {
                                    let t;
                                    switch (r[5]) {
                                        case 0:
                                            t = 9;
                                            break;
                                        case 2:
                                            t = 12;
                                            break;
                                        case 3:
                                            t = 13;
                                            break;
                                        case 5:
                                            t = 15;
                                            break;
                                        default:
                                            t = null
                                    }
                                    let i = r[0] - 35 * Math.cos(r[2]),
                                        a = r[1] - 35 * Math.sin(r[2]);
                                    Math.sqrt((i -= n.x) * i + (a -= n.y) * a) <= 70 && (o[t] = e[t])
                                }
                        }
                    })), t(this)
                }
            })), l = Date.now(), unsafeWindow.requestAnimationFrame((function e() {
                s = Date.now(), r = s - l, l = s, a && n && (-1 == n.buildIndex && (o[n.weaponIndex] = Math.max(0, o[n.weaponIndex] - r)), null != n.weapons[0] && (c.style.backgroundImage = `url(../img/weapons/${t[n.weapons[0]]}.png)`, c.innerText = o[n.weapons[0]]), null != n.weapons[1] ? (d.style.backgroundImage = `url(../img/weapons/${t[n.weapons[1]]}.png)`, d.style.backgroundColor = "rgba(0, 0, 0, 0.25)", d.innerText = o[n.weapons[1]]) : (d.style.backgroundImage = null, d.style.backgroundColor = null, d.innerText = "-")), unsafeWindow.requestAnimationFrame(e)
            }));
            const p = Symbol("minimapCounter");
            var h;
            return Object.defineProperty(Object.prototype, "minimapCounter", {
                get() {
                    return this[p]
                }, set(e) {
                    this[p] = e, !0 === this.isPlayer && this.sid === i && (n = this)
                }, configurable: !0
            }), (h = "#topInfoHolder", new Promise((e => {
                if (document.querySelector(h)) return e(document.querySelector(h));
                const t = new MutationObserver((n => {
                    document.querySelector(h) && (e(document.querySelector(h)), t.disconnect())
                }));
                t.observe(document.body, {
                    childList: !0,
                    subtree: !0
                })
            }))).then((e => {
                const t = document.createElement("style");
                t.innerHTML = "\n        #reloadTimer1 {\n            right: 0px;\n            margin-top: 65px;\n            color: #fff;\n            font-size: 28px;\n            background-color: rgba(0, 0, 0, 0.25);\n            -webkit-border-radius: 4px;\n            -moz-border-radius: 4px;\n            border-radius: 4px;\n        }\n\n        #reloadTimer2 {\n            right: 0px;\n            margin-top: 120px;\n            color: #fff;\n            font-size: 28px;\n            -webkit-border-radius: 4px;\n            -moz-border-radius: 4px;\n            border-radius: 4px;\n        }\n        ", document.head.appendChild(t), e.appendChild(c), e.appendChild(d)
            })), {get myPlayer() {
                    return n
                },
                get mySID() {
                    return i
                }
            }
        })().then((e => _set(e)));
    const pingDisplay = document.getElementById("pingDisplay");

    function rainbowColor() {
        let e = 0;
        setInterval((() => {
            e = (e + 1) % 360, pingDisplay.style.color = `hsl(${e}, 100%, 50%)`
        }), 5)
    }
    pingDisplay.style.right = "15px", pingDisplay.style.display = "block", rainbowColor();
    const credit = document.createElement("div");

    function findID(e, t) {
        return e.find((e => e.id == t))
    }

    function findSID(e, t) {
        return e.find((e => e.sid == t))
    }

    function findPlayerByID(e) {
        return findID(players, e)
    }

    function findPlayerBySID(e) {
        return findSID(players, e)
    }

    function findAIBySID(e) {
        return findSID(ais, e)
    }

    function findObjectBySid(e) {
        return findSID(gameObjects, e)
    }

    function findProjectileBySid(e) {
        return findSID(gameObjects, e)
    }
    credit.textContent = "Made by nvthencncn", credit.style.position = "fixed", credit.style.bottom = "10px", credit.style.right = "10px", credit.style.color = "white", credit.style.fontFamily = "Arial, sans-serif", credit.style.fontSize = "14px", document.body.appendChild(credit), ocument.getElementById("loadingText").innerHTML = "", setTimeout((() => {
        document.getElementById("loadingText").innerHTML = ""
    }), 710), document.getElementById("mainMenu").style.backgroundSize = "cover", document.getElementById("mainMenu").style.backgroundPosition = "center", document.getElementById("mainMenu").style.width = "100%", document.getElementById("mainMenu").style.height = "100vh", document.getElementById("gameName").style.textShadow = "#000000 -2px -2px 10px, black 0px -5px 1px, white 0px -5px 10px", document.getElementById("loadingText").innerText = "";
    let gameName = getEl("gameName");
    gameName.innerText = "!!";
    let adCard = getEl("adCard");
    adCard.remove();
    let promoImageHolder = getEl("promoImgHolder");
    promoImageHolder.remove();
    let chatButton = getEl("chatButton");
    chatButton.remove();
    let gameCanvas = getEl("gameCanvas"),
        mainContext = gameCanvas.getContext("2d"),
        mapDisplay = getEl("mapDisplay"),
        mapContext = mapDisplay.getContext("2d");
    mapDisplay.width = 300, mapDisplay.height = 300;
    let storeMenu = getEl("storeMenu"),
        storeHolder = getEl("storeHolder"),
        upgradeHolder = getEl("upgradeHolder"),
        upgradeCounter = getEl("upgradeCounter"),
        chatBox = getEl("chatBox");
    chatBox.autocomplete = "off", chatBox.style.textAlign = "center", chatBox.style.width = "18em";
    let chatHolder = getEl("chatHolder"),
        actionBar = getEl("actionBar"),
        leaderboardData = getEl("leaderboardData"),
        itemInfoHolder = getEl("itemInfoHolder"),
        menuCardHolder = getEl("menuCardHolder"),
        mainMenu = getEl("mainMenu");
    getEl("mainMenu").style.backgroundImage = "url('https://tse4.mm.bing.net/th?id=OIP.hQgq0pUmX6a5BI7TXgmm7QHaEK&pid=Api&P=0&h=220')";
    let diedText = getEl("diedText"),
        screenWidth, screenHeight, maxScreenWidth = config.maxScreenWidth,
        maxScreenHeight = config.maxScreenHeight,
        pixelDensity = 1,
        delta, now, lastUpdate = performance.now(),
        camX, camY, tmpDir, mouseX = 0,
        mouseY = 0,
        allianceMenu = getEl("allianceMenu"),
        waterMult = 1,
        waterPlus = 0,
        outlineColor = "#525252",
        darkOutlineColor = "#3d3f42",
        outlineWidth = 5.5,
        firstSetup = !0,
        keys = {},
        moveKeys = {
            87: [0, -1],
            38: [0, -1],
            83: [0, 1],
            40: [0, 1],
            65: [-1, 0],
            37: [-1, 0],
            68: [1, 0],
            39: [1, 0]
        },
        attackState = 0,
        inGame = !1,
        macro = {},
        mills = {
            place: 0,
            placeSpawnPads: 0
        },
        lastDir, lastLeaderboardData = [],
        inWindow = !0;
    window.onblur = function() {
        inWindow = !1
    }, window.onfocus = function() {
        inWindow = !0, player && player.alive
    };
    let ms = {
        avg: 0,
        max: 0,
        min: 0,
        delay: 0
    };

    function pingSocketResponse() {
        let e = window.pingTime;
        document.getElementById("pingDisplay").innerText = "Ping: " + e + " ms`", (e > ms.max || isNaN(ms.max)) && (ms.max = e), (e < ms.min || isNaN(ms.min)) && (ms.min = e)
    }
    let placeVisible = [],
        PrePlaceCount;
    // @license MIT
    ! function() {
        "use strict";
        let e = !0;
        const t = document.createElement("div");
        t.id = "music-menu", document.body.appendChild(t);
        const n = document.createElement("button");
        n.textContent = "Biad", t.appendChild(n);
        const i = document.createElement("button");
        i.textContent = "Falling", t.appendChild(i);
        const a = document.createElement("button");
        a.textContent = "Lonely_Way", t.appendChild(a);
        const o = document.createElement("button");
        o.textContent = "Rezz - Edge", t.appendChild(o);
        const s = document.createElement("button");

        function r(e) {
            const t = document.querySelector("#music");
            t && (t.pause(), t.remove());
            const n = document.createElement("audio");
            n.id = "music", n.src = e, n.loop = !0, n.play(), document.body.appendChild(n)
        }
        s.textContent = "Fale Music", t.appendChild(s), n.addEventListener("click", (() => {
            r("https://cdn.discordapp.com/attachments/1016399895885795368/1087483201666174976/Burn_It_All_Down_ft._PVRIS_Worlds_2021_-_League_of_Legends.mp3")
        })), i.addEventListener("click", (() => {
            r("https://cdn.discordapp.com/attachments/1016399895885795368/1087483669217812510/Rival_-_Falling_with_CRVN__NCS_Release_.mp3")
        })), a.addEventListener("click", (() => {
            r("https://cdn.discordapp.com/attachments/1016399895885795368/1087487659867385866/Rival_-_Lonely_Way_ft._Caravn__Official_Lyric_Video_.mp3")
        })), o.addEventListener("click", (() => {
            r("https://cdn.discordapp.com/attachments/1016399895885795368/1087487963790843944/REZZ_-_Edge.mp3")
        })), s.addEventListener("click", (() => {
            r("music.mp3")
        })), document.addEventListener("keydown", (n => {
            "m" === n.key && (e = !e, e ? (t.classList.add("slide-in"), t.classList.remove("slide-out")) : (t.classList.remove("slide-in"), t.classList.add("slide-out")))
        })), GM_addStyle("\n#music-menu {\nposition: fixed;\ntop: 20px;\nleft: 20px;\nbackground-color: #1c1c1c;\ncolor: #fff;\nborder: 2px solid #7f7f7f;\npadding: 20px;\ndisplay: block;\nz-index: 999;\nborder-radius: 10px;\nbox-shadow: 0px 0px 20px #7f7f7f;\nopacity: 0;\ntransition: opacity 0.5s, transform 0.5s;\ntransform: translateY(-100%);\nfont-family: 'Helvetica Neue', sans-serif;\nfont-size: 20px;\n}\n           #music-menu.slide-in {\n        opacity: 1;\n        transform: translateY(0);\n    }\n\n    #music-menu.slide-out {\n        opacity: 0;\n        transform: translateY(-100%);\n    }\n\n    #music-menu h2 {\n        margin: 0 0 20px;\n        font-size: 24px;\n        text-align: center;\n        text-shadow: 2px 2px 5px rgba(0,0,0,0.5);\n    }\n\n    #music-menu button {\n        display: block;\n        margin: 20px auto;\n        background-color: #1abc9c;\n        color: #fff;\n        border: none;\n        padding: 10px;\n        border-radius: 5px;\n        cursor: pointer;\n        transition: background-color 0.3s;\n        text-shadow: 2px 2px 5px rgba(0,0,0,0.5);\n    }\n\n    #music-menu button:hover {\n        background-color: #16a085;\n    }\n")
    }();
    let nameColor = "#ffffff",
        enemyNameColor = "#ffffff",
        reloadBarColor = "",
        healthBarColor = "",
        shameBarColor = "",
        enemyHealthBarColor = "#782F44",
        damageTextColor = "#782F44",
        healTextColor = "#60478D",
        myObjectHealth = "",
        enemyObjectHealth = "#ff6363",
        autoPushLine = "#ffffff";

    function getRandomRGBColor() {
        return `rgb(${Math.floor(256*Math.random())}, ${Math.floor(256*Math.random())}, ${Math.floor(256*Math.random())})`
    }

    function getRandomBrightRGBColor() {
        return `rgb(${Math.floor(128*Math.random())+128}, ${Math.floor(128*Math.random())+128}, ${Math.floor(128*Math.random())+128})`
    }

    function getRandomRainbowishColor() {
        return `hsl(${Math.floor(360*Math.random())}, 100%, 50%)`
    }
    var autoreloadloop;
    document.addEventListener("keydown", (function(e) {
        if (9 === e.keyCode) {
            const e = document.getElementById("menuChatDiv");
            if (e) {
                const t = e.style.display;
                e.style.display = "none" === t ? "block" : "none"
            }
        }
        if (192 === e.keyCode) {
            const e = document.getElementById("gameUI");
            if (e) {
                const t = e.style.display;
                e.style.display = "none" === t ? "block" : "none"
            }
        }
        if (99 === e.keyCode) {
            const e = document.getElementById("gameCanvas");
            if (e) {
                const t = e.style.display;
                e.style.display = "none" === t ? "block" : "none"
            }
        }
    })), setInterval((() => window.follmoo && follmoo()), 10), window.location.native_resolution = !0;
    var autoreloadenough = 0;
    autoreloadloop = setInterval((function() {
        autoreloadenough < 200 ? ('disconnected<a href="javascript:window.location.href=window.location.href" class="ytLink">reload</a>' == document.getElementById("loadingText").innerHTML && (document.title = "Reloading", clearInterval(autoreloadloop), setTimeout((function() {
            document.title = "Moo Moo"
        }), 1e3), location.reload()), autoreloadenough++) : autoreloadenough >= 300 && (clearInterval(autoreloadloop), document.title = "Reloaded", setTimeout((function() {
            document.title = "Moo Moo"
        }), 1e3))
    }), 50);
    let useHack = !0,
        log = console.log,
        testMode = "127.0.0.1" == window.location.hostname,
        imueheua = !1,
        circleScale = 1.5,
        namechanger = !1,
        inantiantibull = !1,
        spin = {
            degree: 45,
            toggle: !1,
            angle: 0
        };

    function receiveChat(e, t) {
        if (/img/i.test(t)) return;
        if (/iframe/i.test(t)) return;
        if (/ZOV/i.test(t)) return;
        let n = findPlayerBySID(e);
        addMenuChText($tmpPlayer.name)[$tmpPlayer.sid], n.chatMessage = t, n.chatCountdown = config.chatCountdown
    }

    function receiveChat(e, t) {
        if (/img/i.test(t)) return;
        if (/iframe/i.test(t)) return;
        if (/ZOV/i.test(t)) return;
        let n = findPlayerBySID(e);
        addMenuChText($tmpPlayer.name[$tmpPlayer.sid], t, "white"), n.chatMessage = t, n.chatCountdown = config.chatCountdown
    }
    68 == e.keyCode && (storeEquip(0, 1), setTimeout((() => {
        place(inv.boostPad), setTimeout((() => {
            weapon("secondary"), storeEquip(53, 0), hit(!0), setTimeout((() => {
                weapon("primary"), storeEquip(7, 0), setTimeout((() => {
                    storeEquip(6, 0), setTimeout((() => {
                        hit(!1), storeEquip(11, 1)
                    }), 80)
                }), 255)
            }), 140)
        }), 1.5)
    }), 150)), firstSetup || (waterMult += waterPlus * config.waveSpeed * delta, waterMult >= config.waveMax ? (waterMult = config.waveMax, waterPlus = -1) : waterMult <= 1 && (waterMult = waterPlus = 1), mainContext.globalAlpha = 1, mainContext.fillStyle = "#dbc666", renderWaterBodies(xOffset, yOffset, mainContext, config.riverPadding), mainContext.fillStyle = "#91b2db", renderWaterBodies(xOffset, yOffset, mainContext, 250 * (waterMult - 1)));
    let biomemap = !1,
        canvas = document.getElementById("gameCanvas"),
        ctx = canvas.getContext("2d");

    function map() {
        if (getEl("biomemap").checked) {
            ctx.beginPath();
            for (let e = 0; e <= 1; e++) $("#mapDisplay").css({
                background: "url('https://i.imgur.com/fgFsQJp.png')"
            })
        }
        window.requestAnimFrame(map)
    }
    map();
    let keys1 = {};
    addEventListener("keydown", (function(e) {
        keys[e.keyCode] || (keys[e.keyCode] = !0, 0 == e.keyCode && (biomemap = !biomemap))
    })), window.addEventListener("keyup", (function(e) {
        keys[e.keyCode] && (keys[e.keyCode] = !1)
    }));
    let pingdisplay = !1,
        canvas2 = document.getElementById("gameCanvas"),
        ctx2 = canvas2.getContext("2d");

    function display() {
        if (getEl("pingdisplay").checked) {
            ctx.beginPath();
            for (let e = 0; e <= 1; e++) {
                let e = document.createElement("div");
                ё, e = document.getElementById("pingDisplay"), e.style.top = "13px", e.style.fontSize = "15px", e.style.display = "block", e.style.left = "730px", document.body.append(e)
            }
        }
        window.requestAnimFrame(display)
    }
    display();
    let keys2 = {};
    addEventListener("keydown", (function(e) {
        keys[e.keyCode] || (keys[e.keyCode] = !0, 0 == e.keyCode && (pingdisplay = !pingdisplay))
    })), window.addEventListener("keyup", (function(e) {
        keys[e.keyCode] && (keys[e.keyCode] = !1)
    }));
    const localTexture = [{
        creationDate: 1539776483046,
        description: "",
        groupId: "",
        id: "Redirect_1539776483046",
        name: "Halloween",
        objectType: "rule",
        pairs: [{
            destination: "https://i.imgur.com/GB4qvv0.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_23.png"
            }
        }, {
            destination: "https://i.imgur.com/A3HllcC.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_46.png"
            }
        }, {
            destination: "https://i.imgur.com/IB4iBZm.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_10.png"
            }
        }, {
            destination: "https://i.imgur.com/ABHSOd9.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_48.png"
            }
        }, {
            destination: "https://i.imgur.com/cvb9q8g.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_4.png"
            }
        }, {
            destination: "https://i.imgur.com/gGGkBnz.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_27.png"
            }
        }, {
            destination: "https://i.imgur.com/GB4qvv0.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_23.png"
            }
        }, {
            destination: "https://i.imgur.com/A3HllcC.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_46.png"
            }
        }, {
            destination: "https://i.imgur.com/IB4iBZm.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_10.png"
            }
        }, {
            destination: "https://i.imgur.com/ABHSOd9.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_48.png"
            }
        }, {
            destination: "https://i.imgur.com/cvb9q8g.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_4.png"
            }
        }, {
            destination: "https://i.imgur.com/gGGkBnz.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_27.png"
            }
        }, {
            destination: "https://i.imgur.com/GB4qvv0.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_23.png"
            }
        }, {
            destination: "https://i.imgur.com/A3HllcC.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_46.png"
            }
        }, {
            destination: "https://i.imgur.com/IB4iBZm.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_10.png"
            }
        }, {
            destination: "https://i.imgur.com/ABHSOd9.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_48.png"
            }
        }, {
            destination: "https://i.imgur.com/cvb9q8g.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_4.png"
            }
        }, {
            destination: "https://i.imgur.com/gGGkBnz.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_27.png"
            }
        }, {
            destination: "https://i.imgur.com/GB4qvv0.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_23.png"
            }
        }, {
            destination: "https://i.imgur.com/A3HllcC.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_46.png"
            }
        }, {
            destination: "https://i.imgur.com/IB4iBZm.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_10.png"
            }
        }, {
            destination: "https://i.imgur.com/ABHSOd9.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_48.png"
            }
        }, {
            destination: "https://i.imgur.com/cvb9q8g.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_4.png"
            }
        }, {
            destination: "https://i.imgur.com/gGGkBnz.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_27.png"
            }
        }],
        ruleType: "Redirect",
        status: "Active"
    }, {
        creationDate: 1537058120972,
        description: "",
        groupId: "",
        id: "Redirect_1537058120972",
        name: "Texture Pack Sandbox - Ruby",
        objectType: "rule",
        pairs: [{
            destination: "https://i.imgur.com/CDAmjux.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/dagger_1_r.png"
            }
        }, {
            destination: "https://i.imgur.com/UY7SV7j.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/spear_1_r.png"
            }
        }, {
            destination: "https://i.imgur.com/tmUzurk.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/great_hammer_1_r.png"
            }
        }, {
            destination: "https://i.imgur.com/oRXUfW8.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/hammer_1_r.png"
            }
        }, {
            destination: "https://i.imgur.com/6ayjbIz.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/bat_1_r.png"
            }
        }, {
            destination: "https://i.imgur.com/vxLZW0S.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/samurai_1_r.png"
            }
        }, {
            destination: "https://i.imgur.com/UZ2HcQw.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/great_axe_1_r.png"
            }
        }, {
            destination: "https://i.imgur.com/kr8H9g7.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/axe_1_r.png"
            }
        }, {
            destination: "https://i.imgur.com/V9dzAbF.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/sword_1_r.png"
            }
        }, {
            destination: "https://i.imgur.com/aEs3FSU.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/stick_1_r.png"
            }
        }, {
            destination: "https://i.imgur.com/DRzBdFX.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/grab_1_g.png"
            }
        }, {
            destination: "https://i.imgur.com/7kbtWfk.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/grab_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/wV42LEE.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/grab_1_r.png"
            }
        }, {
            destination: "https://i.imgur.com/CDAmjux.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/dagger_1_r.png"
            }
        }, {
            destination: "https://i.imgur.com/UY7SV7j.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/spear_1_r.png"
            }
        }, {
            destination: "https://i.imgur.com/tmUzurk.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/great_hammer_1_r.png"
            }
        }, {
            destination: "https://i.imgur.com/oRXUfW8.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/hammer_1_r.png"
            }
        }, {
            destination: "https://i.imgur.com/6ayjbIz.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/bat_1_r.png"
            }
        }, {
            destination: "https://i.imgur.com/vxLZW0S.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/samurai_1_r.png"
            }
        }, {
            destination: "https://i.imgur.com/UZ2HcQw.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/great_axe_1_r.png"
            }
        }, {
            destination: "https://i.imgur.com/kr8H9g7.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/axe_1_r.png"
            }
        }, {
            destination: "https://i.imgur.com/V9dzAbF.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/sword_1_r.png"
            }
        }, {
            destination: "https://i.imgur.com/aEs3FSU.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/stick_1_r.png"
            }
        }, {
            destination: "https://i.imgur.com/DRzBdFX.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/grab_1_g.png"
            }
        }, {
            destination: "https://i.imgur.com/7kbtWfk.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/grab_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/wV42LEE.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/grab_1_r.png"
            }
        }],
        ruleType: "Redirect",
        status: "Active"
    }, {
        creationDate: 1537030341343,
        description: "",
        groupId: "",
        id: "Redirect_1537030341343",
        name: "Texture Pack Private - Ruby",
        objectType: "rule",
        pairs: [{
            destination: "https://i.imgur.com/CDAmjux.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "https://dev.moomoo.io/img/weapons/dagger_1_r.png"
            }
        }, {
            destination: "https://i.imgur.com/UY7SV7j.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "https://dev.moomoo.io/img/weapons/spear_1_r.png"
            }
        }, {
            destination: "https://i.imgur.com/tmUzurk.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "https://dev.moomoo.io/img/weapons/great_hammer_1_r.png"
            }
        }, {
            destination: "https://i.imgur.com/oRXUfW8.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "https://dev.moomoo.io/img/weapons/hammer_1_r.png"
            }
        }, {
            destination: "https://i.imgur.com/6ayjbIz.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "https://dev.moomoo.io/img/weapons/bat_1_r.png"
            }
        }, {
            destination: "https://i.imgur.com/vxLZW0S.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "https://dev.moomoo.io/img/weapons/samurai_1_r.png"
            }
        }, {
            destination: "https://i.imgur.com/UZ2HcQw.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "https://dev.moomoo.io/img/weapons/great_axe_1_r.png"
            }
        }, {
            destination: "https://i.imgur.com/kr8H9g7.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "https://dev.moomoo.io/img/weapons/axe_1_r.png"
            }
        }, {
            destination: "https://i.imgur.com/V9dzAbF.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "https://dev.moomoo.io/img/weapons/sword_1_r.png"
            }
        }, {
            destination: "https://i.imgur.com/aEs3FSU.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "https://dev.moomoo.io/img/weapons/stick_1_r.png"
            }
        }, {
            destination: "https://i.imgur.com/DRzBdFX.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "https://dev.moomoo.io/img/weapons/grab_1_g.png"
            }
        }, {
            destination: "https://i.imgur.com/7kbtWfk.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "https://dev.moomoo.io/img/weapons/grab_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/wV42LEE.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "https://dev.moomoo.io/img/weapons/grab_1_r.png"
            }
        }, {
            destination: "https://i.imgur.com/CDAmjux.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "http://dev.moomoo.io/img/weapons/dagger_1_r.png"
            }
        }, {
            destination: "https://i.imgur.com/UY7SV7j.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "http://dev.moomoo.io/img/weapons/spear_1_r.png"
            }
        }, {
            destination: "https://i.imgur.com/tmUzurk.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "http://dev.moomoo.io/img/weapons/great_hammer_1_r.png"
            }
        }, {
            destination: "https://i.imgur.com/oRXUfW8.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "http://dev.moomoo.io/img/weapons/hammer_1_r.png"
            }
        }, {
            destination: "https://i.imgur.com/6ayjbIz.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "http://dev.moomoo.io/img/weapons/bat_1_r.png"
            }
        }, {
            destination: "https://i.imgur.com/vxLZW0S.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "http://dev.moomoo.io/img/weapons/samurai_1_r.png"
            }
        }, {
            destination: "https://i.imgur.com/UZ2HcQw.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "http://dev.moomoo.io/img/weapons/great_axe_1_r.png"
            }
        }, {
            destination: "https://i.imgur.com/kr8H9g7.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "http://dev.moomoo.io/img/weapons/axe_1_r.png"
            }
        }, {
            destination: "https://i.imgur.com/V9dzAbF.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "http://dev.moomoo.io/img/weapons/sword_1_r.png"
            }
        }, {
            destination: "https://i.imgur.com/aEs3FSU.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "http://dev.moomoo.io/img/weapons/stick_1_r.png"
            }
        }, {
            destination: "https://i.imgur.com/DRzBdFX.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "http://dev.moomoo.io/img/weapons/grab_1_g.png"
            }
        }, {
            destination: "https://i.imgur.com/7kbtWfk.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "http://dev.moomoo.io/img/weapons/grab_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/wV42LEE.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "http://dev.moomoo.io/img/weapons/grab_1_r.png"
            }
        }],
        ruleType: "Redirect",
        status: "Active"
    }, {
        creationDate: 1536927560373,
        description: "",
        groupId: "",
        id: "Redirect_1536927560373",
        name: "Texture Pack - Ruby",
        objectType: "rule",
        pairs: [{
            destination: "https://i.imgur.com/CDAmjux.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/dagger_1_r.png"
            }
        }, {
            destination: "https://i.imgur.com/UY7SV7j.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/spear_1_r.png"
            }
        }, {
            destination: "https://i.imgur.com/tmUzurk.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/great_hammer_1_r.png"
            }
        }, {
            destination: "https://i.imgur.com/oRXUfW8.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/hammer_1_r.png"
            }
        }, {
            destination: "https://i.imgur.com/6ayjbIz.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/bat_1_r.png"
            }
        }, {
            destination: "https://i.imgur.com/vxLZW0S.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/samurai_1_r.png"
            }
        }, {
            destination: "https://i.imgur.com/UZ2HcQw.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/great_axe_1_r.png"
            }
        }, {
            destination: "https://i.imgur.com/kr8H9g7.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/axe_1_r.png"
            }
        }, {
            destination: "https://i.imgur.com/V9dzAbF.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/sword_1_r.png"
            }
        }, {
            destination: "https://i.imgur.com/aEs3FSU.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/stick_1_r.png"
            }
        }, {
            destination: "https://i.imgur.com/DRzBdFX.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/grab_1_g.png"
            }
        }, {
            destination: "https://i.imgur.com/7kbtWfk.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/grab_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/wV42LEE.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/grab_1_r.png"
            }
        }, {
            destination: "https://i.imgur.com/CDAmjux.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/dagger_1_r.png"
            }
        }, {
            destination: "https://i.imgur.com/UY7SV7j.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/spear_1_r.png"
            }
        }, {
            destination: "https://i.imgur.com/tmUzurk.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/great_hammer_1_r.png"
            }
        }, {
            destination: "https://i.imgur.com/oRXUfW8.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/hammer_1_r.png"
            }
        }, {
            destination: "https://i.imgur.com/6ayjbIz.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/bat_1_r.png"
            }
        }, {
            destination: "https://i.imgur.com/vxLZW0S.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/samurai_1_r.png"
            }
        }, {
            destination: "https://i.imgur.com/UZ2HcQw.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/great_axe_1_r.png"
            }
        }, {
            destination: "https://i.imgur.com/kr8H9g7.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/axe_1_r.png"
            }
        }, {
            destination: "https://i.imgur.com/V9dzAbF.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/sword_1_r.png"
            }
        }, {
            destination: "https://i.imgur.com/aEs3FSU.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/stick_1_r.png"
            }
        }, {
            destination: "https://i.imgur.com/DRzBdFX.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/grab_1_g.png"
            }
        }, {
            destination: "https://i.imgur.com/7kbtWfk.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/grab_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/wV42LEE.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/grab_1_r.png"
            }
        }],
        ruleType: "Redirect",
        status: "Active"
    }, {
        creationDate: 1530619393230,
        description: "",
        groupId: "",
        id: "Redirect_1530619393230",
        name: "Texture Pack Sandbox - Weapons - Part 2",
        objectType: "rule",
        pairs: [{
            destination: "https://i.imgur.com/DVjCdwI.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/crossbow_2_d.png"
            }
        }, {
            destination: "https://i.imgur.com/DVjCdwI.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/crossbow_2_d.png"
            }
        }, {
            destination: "https://i.imgur.com/qu7HHT5.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/bow_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/qu7HHT5.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/bow_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/HSWcyku.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/spear_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/HSWcyku.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/spear_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/TRqDlgX.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/crossbow_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/TRqDlgX.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/crossbow_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/OU5os0h.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/axe_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/OU5os0h.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/axe_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/aAJyHBB.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/great_axe_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/aAJyHBB.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/great_axe_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/WPWU8zC.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/hammer_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/WPWU8zC.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/hammer_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/Fg93gj3.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/great_hammer_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/Fg93gj3.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/great_hammer_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/hSqLP3t.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/shield_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/hSqLP3t.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/shield_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/4ZxIJQM.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/samurai_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/4ZxIJQM.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/samurai_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/h5jqSRp.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/sword_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/h5jqSRp.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/sword_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/wOTr8TG.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/sword_1_g.png"
            }
        }, {
            destination: "https://i.imgur.com/QKBc2ou.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/samurai_1_g.png"
            }
        }, {
            destination: "https://i.imgur.com/wOTr8TG.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/sword_1_g.png"
            }
        }, {
            destination: "https://i.imgur.com/QKBc2ou.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/samurai_1_g.png"
            }
        }, {
            destination: "https://i.imgur.com/jKDdyvc.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/spear_1_g.png"
            }
        }, {
            destination: "https://i.imgur.com/jKDdyvc.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/spear_1_g.png"
            }
        }],
        ruleType: "Redirect",
        status: "Active"
    }, {
        creationDate: 1530619364482,
        description: "",
        groupId: "",
        id: "Redirect_1530619364482",
        name: "Texture Pack Sandbox - Weapons - Part 1",
        objectType: "rule",
        pairs: [{
            destination: "https://i.imgur.com/DTd8Xl6.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/stick_1_g.png"
            }
        }, {
            destination: "https://i.imgur.com/DTd8Xl6.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/stick_1_g.png"
            }
        }, {
            destination: "https://i.imgur.com/RnkmWgs.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/stick_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/RnkmWgs.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/stick_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/ROTb7Ks.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/dagger_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/ROTb7Ks.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/dagger_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/ivLPh10.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/bat_1_g.png"
            }
        }, {
            destination: "https://i.imgur.com/ivLPh10.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/bat_1_g.png"
            }
        }, {
            destination: "https://i.imgur.com/phXTNsa.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/bat_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/phXTNsa.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/bat_1_d.png"
            }
        }],
        ruleType: "Redirect",
        status: "Active"
    }, {
        creationDate: 1530619326443,
        description: "",
        groupId: "",
        id: "Redirect_1530619326443",
        name: "Texture Pack Sandbox - Hats",
        objectType: "rule",
        pairs: [{
            destination: "https://i.imgur.com/pe3Yx3F.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_40.png"
            }
        }, {
            destination: "https://i.imgur.com/in5H6vw.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_18.png"
            }
        }, {
            destination: "https://i.imgur.com/4ddZert.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/accessories/access_21.png"
            }
        }, {
            destination: "https://i.imgur.com/sULkUZT.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/accessories/access_19.png"
            }
        }, {
            destination: "https://i.imgur.com/gJY7sM6.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_9.png"
            }
        }, {
            destination: "https://i.imgur.com/uYgDtcZ.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_16.png"
            }
        }, {
            destination: "https://i.imgur.com/JPMqgSc.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_31.png"
            }
        }, {
            destination: "https://i.imgur.com/vAOzlyY.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_7.png"
            }
        }, {
            destination: "https://i.imgur.com/YRQ8Ybq.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_15.png"
            }
        }, {
            destination: "https://i.imgur.com/EwkbsHN.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_13.png"
            }
        }, {
            destination: "https://i.imgur.com/yfqME8H.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_11.png"
            }
        }, {
            destination: "https://i.imgur.com/f5uhWCk.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_20.png"
            }
        }, {
            destination: "https://i.imgur.com/yfqME8H.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_11_p.png"
            }
        }, {
            destination: "https://i.imgur.com/V8JrIwv.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_14_p.png"
            }
        }, {
            destination: "https://i.imgur.com/V8JrIwv.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_14.png"
            }
        }, {
            destination: "https://i.imgur.com/s7Cxc9y.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_14_top.png"
            }
        }, {
            destination: "https://i.imgur.com/s7Cxc9y.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_11_top.png"
            }
        }, {
            destination: "https://i.imgur.com/pe3Yx3F.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_40.png"
            }
        }, {
            destination: "https://i.imgur.com/in5H6vw.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_18.png"
            }
        }, {
            destination: "https://i.imgur.com/gJY7sM6.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_9.png"
            }
        }, {
            destination: "https://i.imgur.com/4ddZert.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/accessories/access_21.png"
            }
        }, {
            destination: "https://i.imgur.com/sULkUZT.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/accessories/access_19.png"
            }
        }, {
            destination: "https://i.imgur.com/vAOzlyY.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_7.png"
            }
        }, {
            destination: "https://i.imgur.com/uYgDtcZ.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_16.png"
            }
        }, {
            destination: "https://i.imgur.com/JPMqgSc.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_31.png"
            }
        }, {
            destination: "https://i.imgur.com/YRQ8Ybq.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_15.png"
            }
        }, {
            destination: "https://i.imgur.com/EwkbsHN.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_13.png"
            }
        }, {
            destination: "https://i.imgur.com/yfqME8H.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_11.png"
            }
        }, {
            destination: "https://i.imgur.com/f5uhWCk.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_20.png"
            }
        }, {
            destination: "https://i.imgur.com/yfqME8H.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_11_p.png"
            }
        }, {
            destination: "https://i.imgur.com/V8JrIwv.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_14_p.png"
            }
        }, {
            destination: "https://i.imgur.com/V8JrIwv.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_14.png"
            }
        }, {
            destination: "https://i.imgur.com/s7Cxc9y.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_11_top.png"
            }
        }, {
            destination: "https://i.imgur.com/s7Cxc9y.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_14_top.png"
            }
        }, {
            destination: "https://i.imgur.com/I0xGtyZ.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_26.png"
            }
        }, {
            destination: "https://i.imgur.com/I0xGtyZ.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_26.png"
            }
        }, {
            destination: "https://i.imgur.com/hmJrVQz.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_52.png"
            }
        }, {
            destination: "https://i.imgur.com/hmJrVQz.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_52.png"
            }
        }],
        ruleType: "Redirect",
        status: "Active"
    }, {
        creationDate: 1530619290416,
        description: "",
        groupId: "",
        id: "Redirect_1530619290416",
        name: "Texture Pack Sandbox - Animals",
        objectType: "rule",
        pairs: [{
            destination: "",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/animals/bull_2.png"
            }
        }, {
            destination: "",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/animal"
            }
        }, {
            destination: "",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/animals/wolf_1.png"
            }
        }, {
            destination: "",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/animals/wolf_2.png"
            }
        }, {
            destination: "",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/animals/wolf_2.png"
            }
        }, {
            destination: "",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/animals/cow_1.png"
            }
        }, {
            destination: "",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/animals/pig_1.png"
            }
        }, {
            destination: "",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/animals/chicken_1.png"
            }
        }, {
            destination: "",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/animals/bull_2.png"
            }
        }, {
            destination: "",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/animals/bull_1.png"
            }
        }, {
            destination: "",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/animals/wolf_1.png"
            }
        }, {
            destination: "",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/animals/cow_1.png"
            }
        }, {
            destination: "",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/animals/pig_1.png"
            }
        }, {
            destination: "",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/animals/chicken_1.png"
            }
        }, {
            destination: "",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/animals/enemy.png"
            }
        }, {
            destination: "",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/animals/enemy.png"
            }
        }],
        ruleType: "Redirect",
        status: "Active"
    }, {
        creationDate: 1526664529663,
        description: "",
        groupId: "",
        id: "Redirect_1526664529663",
        name: "Texture Pack Private - Weapons - Part 2",
        objectType: "rule",
        pairs: [{
            destination: "https://i.imgur.com/DVjCdwI.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "http://dev.moomoo.io/img/weapons/crossbow_2_d.png"
            }
        }, {
            destination: "https://i.imgur.com/DVjCdwI.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "https://dev.moomoo.io/img/weapons/crossbow_2_d.png"
            }
        }, {
            destination: "https://i.imgur.com/qu7HHT5.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "http://dev.moomoo.io/img/weapons/bow_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/qu7HHT5.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "https://dev.moomoo.io/img/weapons/bow_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/HSWcyku.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "http://dev.moomoo.io/img/weapons/spear_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/HSWcyku.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "https://dev.moomoo.io/img/weapons/spear_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/TRqDlgX.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "http://dev.moomoo.io/img/weapons/crossbow_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/TRqDlgX.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "https://dev.moomoo.io/img/weapons/crossbow_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/OU5os0h.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "http://dev.moomoo.io/img/weapons/axe_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/OU5os0h.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "https://dev.moomoo.io/img/weapons/axe_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/aAJyHBB.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "http://dev.moomoo.io/img/weapons/great_axe_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/aAJyHBB.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "https://dev.moomoo.io/img/weapons/great_axe_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/WPWU8zC.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "http://dev.moomoo.io/img/weapons/hammer_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/WPWU8zC.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "https://dev.moomoo.io/img/weapons/hammer_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/Fg93gj3.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "http://dev.moomoo.io/img/weapons/great_hammer_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/Fg93gj3.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "https://dev.moomoo.io/img/weapons/great_hammer_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/hSqLP3t.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "http://dev.moomoo.io/img/weapons/shield_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/hSqLP3t.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "https://dev.moomoo.io/img/weapons/shield_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/4ZxIJQM.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "http://dev.moomoo.io/img/weapons/samurai_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/4ZxIJQM.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "https://dev.moomoo.io/img/weapons/samurai_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/h5jqSRp.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "http://dev.moomoo.io/img/weapons/sword_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/h5jqSRp.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "https://dev.moomoo.io/img/weapons/sword_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/wOTr8TG.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "https://dev.moomoo.io/img/weapons/sword_1_g.png"
            }
        }, {
            destination: "https://i.imgur.com/QKBc2ou.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "https://dev.moomoo.io/img/weapons/samurai_1_g.png"
            }
        }, {
            destination: "https://i.imgur.com/wOTr8TG.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "http://dev.moomoo.io/img/weapons/sword_1_g.png"
            }
        }, {
            destination: "https://i.imgur.com/QKBc2ou.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "http://dev.moomoo.io/img/weapons/samurai_1_g.png"
            }
        }, {
            destination: "https://i.imgur.com/jKDdyvc.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "http://dev.moomoo.io/img/weapons/spear_1_g.png"
            }
        }, {
            destination: "https://i.imgur.com/jKDdyvc.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "https://dev.moomoo.io/img/weapons/spear_1_g.png"
            }
        }],
        ruleType: "Redirect",
        status: "Active"
    }, {
        creationDate: 1526664492125,
        description: "",
        groupId: "",
        id: "Redirect_1526664492125",
        name: "Texture Pack - Weapons - Part 2",
        objectType: "rule",
        pairs: [{
            destination: "https://i.imgur.com/TRqDlgX.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/crossbow_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/TRqDlgX.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/crossbow_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/OU5os0h.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/axe_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/OU5os0h.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/axe_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/aAJyHBB.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/great_axe_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/aAJyHBB.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/great_axe_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/WPWU8zC.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/hammer_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/WPWU8zC.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/hammer_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/Fg93gj3.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/great_hammer_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/Fg93gj3.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/great_hammer_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/4ZxIJQM.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/samurai_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/4ZxIJQM.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/samurai_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/hSqLP3t.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/shield_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/hSqLP3t.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/shield_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/h5jqSRp.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/sword_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/h5jqSRp.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/sword_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/wOTr8TG.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/sword_1_g.png"
            }
        }, {
            destination: "https://i.imgur.com/QKBc2ou.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/samurai_1_g.png"
            }
        }, {
            destination: "https://i.imgur.com/wOTr8TG.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/sword_1_g.png"
            }
        }, {
            destination: "https://i.imgur.com/QKBc2ou.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/samurai_1_g.png"
            }
        }, {
            destination: "https://i.imgur.com/jKDdyvc.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/spear_1_g.png"
            }
        }, {
            destination: "https://i.imgur.com/jKDdyvc.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/spear_1_g.png"
            }
        }],
        ruleType: "Redirect",
        status: "Active"
    }, {
        creationDate: 1514047471157,
        description: "",
        groupId: "",
        id: "Redirect_1514047471157",
        name: "Texture Pack Private - Animals",
        objectType: "rule",
        pairs: [{
            destination: "",
            source: {
                key: "Url",
                operator: "Contains",
                value: "https://dev.moomoo.io/img/animals/bull_2.png"
            }
        }, {
            destination: "",
            source: {
                key: "Url",
                operator: "Contains",
                value: "https://dev.moomoo.io/img/animals/bull_1.png"
            }
        }, {
            destination: "",
            source: {
                key: "Url",
                operator: "Contains",
                value: "https://dev.moomoo.io/img/animals/wolf_1.png"
            }
        }, {
            destination: "https://i.imgur.com/wANrStd.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "https://dev.moomoo.io/img/animals/wolf_2.png"
            }
        }, {
            destination: "",
            source: {
                key: "Url",
                operator: "Contains",
                value: "http://dev.moomoo.io/img/animals/wolf_2.png"
            }
        }, {
            destination: "",
            source: {
                key: "Url",
                operator: "Contains",
                value: "https://dev.moomoo.io/img/animals/cow_1.png"
            }
        }, {
            destination: "",
            source: {
                key: "Url",
                operator: "Contains",
                value: "https://dev.moomoo.io/img/animals/pig_1.png"
            }
        }, {
            destination: "",
            source: {
                key: "Url",
                operator: "Contains",
                value: "https://dev.moomoo.io/img/animals/chicken_1.png"
            }
        }, {
            destination: "",
            source: {
                key: "Url",
                operator: "Contains",
                value: "http://dev.moomoo.io/img/animals/bull_2.png"
            }
        }, {
            destination: "",
            source: {
                key: "Url",
                operator: "Contains",
                value: "http://dev.moomoo.io/img/animals/bull_1.png"
            }
        }, {
            destination: "",
            source: {
                key: "Url",
                operator: "Contains",
                value: "http://dev.moomoo.io/img/animals/wolf_1.png"
            }
        }, {
            destination: "",
            source: {
                key: "Url",
                operator: "Contains",
                value: "http://dev.moomoo.io/img/animals/cow_1.png"
            }
        }, {
            destination: "",
            source: {
                key: "Url",
                operator: "Contains",
                value: "http://dev.moomoo.io/img/animals/pig_1.png"
            }
        }, {
            destination: "",
            source: {
                key: "Url",
                operator: "Contains",
                value: "http://dev.moomoo.io/img/animals/chicken_1.png"
            }
        }, {
            destination: "https://i.imgur.com/MKOvEr6.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "http://dev.moomoo.io/img/animals/enemy.png"
            }
        }, {
            destination: "https://i.imgur.com/MKOvEr6.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "https://dev.moomoo.io/img/animals/enemy.png"
            }
        }],
        ruleType: "Redirect",
        status: "Active"
    }, {
        creationDate: 1514046266836,
        description: "",
        groupId: "",
        id: "Redirect_1514046266836",
        name: "Texture Pack - Animals",
        objectType: "rule",
        pairs: [{
            destination: "",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/animals/bull_2.png"
            }
        }, {
            destination: "",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/animals/bull_1.png"
            }
        }, {
            destination: "",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/animals/wolf_1.png"
            }
        }, {
            destination: "",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/animals/wolf_2.png"
            }
        }, {
            destination: "",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/animals/wolf_2.png"
            }
        }, {
            destination: "",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/animals/cow_1.png"
            }
        }, {
            destination: "",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/animals/pig_1.png"
            }
        }, {
            destination: "",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/animals/chicken_1.png"
            }
        }, {
            destination: "",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/animals/bull_2.png"
            }
        }, {
            destination: "",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/animals/bull_1.png"
            }
        }, {
            destination: "",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/animals/wolf_1.png"
            }
        }, {
            destination: "",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/animals/cow_1.png"
            }
        }, {
            destination: "",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/animals/pig_1.png"
            }
        }, {
            destination: "",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/animals/chicken_1.png"
            }
        }, {
            destination: "https://i.imgur.com/MKOvEr6.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/animals/enemy.png"
            }
        }, {
            destination: "https://i.imgur.com/MKOvEr6.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/animals/enemy.png"
            }
        }],
        ruleType: "Redirect",
        status: "Active"
    }, {
        creationDate: 1509892380958,
        description: "",
        groupId: "",
        id: "Redirect_1509892380958",
        name: "Texture Pack Private - Weapons - Part 1",
        objectType: "rule",
        pairs: [{
            destination: "https://i.imgur.com/DTd8Xl6.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "http://dev.moomoo.io/img/weapons/stick_1_g.png"
            }
        }, {
            destination: "https://i.imgur.com/DTd8Xl6.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "https://dev.moomoo.io/img/weapons/stick_1_g.png"
            }
        }, {
            destination: "https://i.imgur.com/RnkmWgs.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "http://dev.moomoo.io/img/weapons/stick_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/RnkmWgs.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "https://dev.moomoo.io/img/weapons/stick_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/ROTb7Ks.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "http://dev.moomoo.io/img/weapons/dagger_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/ROTb7Ks.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "https://dev.moomoo.io/img/weapons/dagger_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/ivLPh10.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "http://dev.moomoo.io/img/weapons/bat_1_g.png"
            }
        }, {
            destination: "https://i.imgur.com/ivLPh10.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "https://dev.moomoo.io/img/weapons/bat_1_g.png"
            }
        }, {
            destination: "https://i.imgur.com/phXTNsa.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "http://dev.moomoo.io/img/weapons/bat_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/phXTNsa.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "https://dev.moomoo.io/img/weapons/bat_1_d.png"
            }
        }],
        ruleType: "Redirect",
        status: "Active"
    }, {
        creationDate: 1509804753627,
        description: "",
        groupId: "",
        id: "Redirect_1509804753627",
        name: "Texture Pack - Weapons - Part 1",
        objectType: "rule",
        pairs: [{
            destination: "https://i.imgur.com/DTd8Xl6.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/stick_1_g.png"
            }
        }, {
            destination: "https://i.imgur.com/DTd8Xl6.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/stick_1_g.png"
            }
        }, {
            destination: "https://i.imgur.com/RnkmWgs.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/stick_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/RnkmWgs.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/stick_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/ivLPh10.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/bat_1_g.png"
            }
        }, {
            destination: "https://i.imgur.com/ivLPh10.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/bat_1_g.png"
            }
        }, {
            destination: "https://i.imgur.com/phXTNsa.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/bat_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/phXTNsa.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/bat_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/ROTb7Ks.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/dagger_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/ROTb7Ks.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/dagger_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/qu7HHT5.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/bow_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/qu7HHT5.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/bow_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/DVjCdwI.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/crossbow_2_d.png"
            }
        }, {
            destination: "https://i.imgur.com/DVjCdwI.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/crossbow_2_d.png"
            }
        }, {
            destination: "https://i.imgur.com/HSWcyku.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/spear_1_d.png"
            }
        }, {
            destination: "https://i.imgur.com/HSWcyku.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/weapons/spear_1_d.png"
            }
        }],
        ruleType: "Redirect",
        status: "Active"
    }, {
        creationDate: 1508326116062,
        description: "",
        groupId: "",
        id: "Redirect_1508326116062",
        name: "Texture Pack Private - Hats",
        objectType: "rule",
        pairs: [{
            destination: "https://i.imgur.com/pe3Yx3F.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "https://dev.moomoo.io/img/hats/hat_40.png"
            }
        }, {
            destination: "https://i.imgur.com/in5H6vw.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "https://dev.moomoo.io/img/hats/hat_18.png"
            }
        }, {
            destination: "https://i.imgur.com/4ddZert.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "https://dev.moomoo.io/img/accessories/access_21.png"
            }
        }, {
            destination: "https://i.imgur.com/sULkUZT.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "https://dev.moomoo.io/img/accessories/access_19.png"
            }
        }, {
            destination: "https://i.imgur.com/gJY7sM6.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "https://dev.moomoo.io/img/hats/hat_9.png"
            }
        }, {
            destination: "https://i.imgur.com/uYgDtcZ.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "https://dev.moomoo.io/img/hats/hat_16.png"
            }
        }, {
            destination: "https://i.imgur.com/JPMqgSc.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "https://dev.moomoo.io/img/hats/hat_31.png"
            }
        }, {
            destination: "https://i.imgur.com/vAOzlyY.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "https://dev.moomoo.io/img/hats/hat_7.png"
            }
        }, {
            destination: "https://i.imgur.com/YRQ8Ybq.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "https://dev.moomoo.io/img/hats/hat_15.png"
            }
        }, {
            destination: "https://i.imgur.com/EwkbsHN.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "https://dev.moomoo.io/img/hats/hat_13.png"
            }
        }, {
            destination: "https://i.imgur.com/yfqME8H.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "https://dev.moomoo.io/img/hats/hat_11.png"
            }
        }, {
            destination: "https://i.imgur.com/f5uhWCk.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "https://dev.moomoo.io/img/hats/hat_20.png"
            }
        }, {
            destination: "https://i.imgur.com/yfqME8H.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "https://dev.moomoo.io/img/hats/hat_11_p.png"
            }
        }, {
            destination: "https://i.imgur.com/V8JrIwv.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "https://dev.moomoo.io/img/hats/hat_14_p.png"
            }
        }, {
            destination: "https://i.imgur.com/V8JrIwv.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "https://dev.moomoo.io/img/hats/hat_14.png"
            }
        }, {
            destination: "https://i.imgur.com/s7Cxc9y.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "https://dev.moomoo.io/img/hats/hat_14_top.png"
            }
        }, {
            destination: "https://i.imgur.com/s7Cxc9y.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "https://dev.moomoo.io/img/hats/hat_11_top.png"
            }
        }, {
            destination: "https://i.imgur.com/pe3Yx3F.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "http://dev.moomoo.io/img/hats/hat_40.png"
            }
        }, {
            destination: "https://i.imgur.com/in5H6vw.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "http://dev.moomoo.io/img/hats/hat_18.png"
            }
        }, {
            destination: "https://i.imgur.com/gJY7sM6.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "http://dev.moomoo.io/img/hats/hat_9.png"
            }
        }, {
            destination: "https://i.imgur.com/4ddZert.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "http://dev.moomoo.io/img/accessories/access_21.png"
            }
        }, {
            destination: "https://i.imgur.com/sULkUZT.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "http://dev.moomoo.io/img/accessories/access_19.png"
            }
        }, {
            destination: "https://i.imgur.com/vAOzlyY.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "http://dev.moomoo.io/img/hats/hat_7.png"
            }
        }, {
            destination: "https://i.imgur.com/uYgDtcZ.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "http://dev.moomoo.io/img/hats/hat_16.png"
            }
        }, {
            destination: "https://i.imgur.com/JPMqgSc.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "http://dev.moomoo.io/img/hats/hat_31.png"
            }
        }, {
            destination: "https://i.imgur.com/YRQ8Ybq.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "http://dev.moomoo.io/img/hats/hat_15.png"
            }
        }, {
            destination: "https://i.imgur.com/EwkbsHN.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "http://dev.moomoo.io/img/hats/hat_13.png"
            }
        }, {
            destination: "https://i.imgur.com/yfqME8H.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "http://dev.moomoo.io/img/hats/hat_11.png"
            }
        }, {
            destination: "https://i.imgur.com/f5uhWCk.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "http://dev.moomoo.io/img/hats/hat_20.png"
            }
        }, {
            destination: "https://i.imgur.com/yfqME8H.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "http://dev.moomoo.io/img/hats/hat_11_p.png"
            }
        }, {
            destination: "https://i.imgur.com/V8JrIwv.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "http://dev.moomoo.io/img/hats/hat_14_p.png"
            }
        }, {
            destination: "https://i.imgur.com/V8JrIwv.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "http://dev.moomoo.io/img/hats/hat_14.png"
            }
        }, {
            destination: "https://i.imgur.com/s7Cxc9y.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "http://dev.moomoo.io/img/hats/hat_11_top.png"
            }
        }, {
            destination: "https://i.imgur.com/s7Cxc9y.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "http://dev.moomoo.io/img/hats/hat_14_top.png"
            }
        }, {
            destination: "https://i.imgur.com/I0xGtyZ.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "http://dev.moomoo.io/img/hats/hat_26.png"
            }
        }, {
            destination: "https://i.imgur.com/I0xGtyZ.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "https://dev.moomoo.io/img/hats/hat_26.png"
            }
        }, {
            destination: "https://i.imgur.com/hmJrVQz.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "http://dev.moomoo.io/img/hats/hat_52.png"
            }
        }, {
            destination: "https://i.imgur.com/hmJrVQz.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: "https://dev.moomoo.io/img/hats/hat_52.png"
            }
        }],
        ruleType: "Redirect",
        status: "Active"
    }, {
        creationDate: 1507417062355,
        description: "",
        groupId: "",
        id: "Redirect_1507417062355",
        name: "Texture Pack - Hats",
        objectType: "rule",
        pairs: [{
            destination: "https://i.imgur.com/pe3Yx3F.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_40.png"
            }
        }, {
            destination: "https://i.imgur.com/4ddZert.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/accessories/access_21.png"
            }
        }, {
            destination: "https://i.imgur.com/sULkUZT.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/accessories/access_19.png"
            }
        }, {
            destination: "https://i.imgur.com/in5H6vw.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_18.png"
            }
        }, {
            destination: "https://i.imgur.com/gJY7sM6.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_9.png"
            }
        }, {
            destination: "https://i.imgur.com/vAOzlyY.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_7.png"
            }
        }, {
            destination: "https://i.imgur.com/uYgDtcZ.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_16.png"
            }
        }, {
            destination: "https://i.imgur.com/JPMqgSc.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_31.png"
            }
        }, {
            destination: "https://i.imgur.com/YRQ8Ybq.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_15.png"
            }
        }, {
            destination: "https://i.imgur.com/EwkbsHN.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_13.png"
            }
        }, {
            destination: "https://i.imgur.com/yfqME8H.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_11.png"
            }
        }, {
            destination: "https://i.imgur.com/f5uhWCk.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_20.png"
            }
        }, {
            destination: "https://i.imgur.com/yfqME8H.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_11_p.png"
            }
        }, {
            destination: "https://i.imgur.com/V8JrIwv.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_14_p.png"
            }
        }, {
            destination: "https://i.imgur.com/V8JrIwv.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_14.png"
            }
        }, {
            destination: "https://i.imgur.com/s7Cxc9y.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_14_top.png"
            }
        }, {
            destination: "https://i.imgur.com/s7Cxc9y.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_11_top.png"
            }
        }, {
            destination: "https://i.imgur.com/pe3Yx3F.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_40.png"
            }
        }, {
            destination: "https://i.imgur.com/vAOzlyY.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_7.png"
            }
        }, {
            destination: "https://i.imgur.com/uYgDtcZ.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_16.png"
            }
        }, {
            destination: "https://i.imgur.com/gJY7sM6.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_9.png"
            }
        }, {
            destination: "https://i.imgur.com/JPMqgSc.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_31.png"
            }
        }, {
            destination: "https://i.imgur.com/4ddZert.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/accessories/access_21.png"
            }
        }, {
            destination: "https://i.imgur.com/sULkUZT.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/accessories/access_19.png"
            }
        }, {
            destination: "https://i.imgur.com/YRQ8Ybq.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_15.png"
            }
        }, {
            destination: "https://i.imgur.com/EwkbsHN.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_13.png"
            }
        }, {
            destination: "https://i.imgur.com/yfqME8H.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_11.png"
            }
        }, {
            destination: "https://i.imgur.com/in5H6vw.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_18.png"
            }
        }, {
            destination: "https://i.imgur.com/f5uhWCk.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_20.png"
            }
        }, {
            destination: "https://i.imgur.com/yfqME8H.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_11_p.png"
            }
        }, {
            destination: "https://i.imgur.com/V8JrIwv.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_14_p.png"
            }
        }, {
            destination: "https://i.imgur.com/V8JrIwv.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_14.png"
            }
        }, {
            destination: "https://i.imgur.com/s7Cxc9y.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_11_top.png"
            }
        }, {
            destination: "https://i.imgur.com/s7Cxc9y.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_14_top.png"
            }
        }, {
            destination: "https://i.imgur.com/I0xGtyZ.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_26.png"
            }
        }, {
            destination: "https://i.imgur.com/I0xGtyZ.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_26.png"
            }
        }, {
            destination: "https://i.imgur.com/hmJrVQz.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_52.png"
            }
        }, {
            destination: "https://i.imgur.com/hmJrVQz.png",
            source: {
                key: "Url",
                operator: "Contains",
                value: ".././img/hats/hat_52.png"
            }
        }],
        ruleType: "Redirect",
        status: "Active"
    }]
}();