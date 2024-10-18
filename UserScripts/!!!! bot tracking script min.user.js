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
            let a = window.config;
            a.clientSendRate = 9, a.serverUpdateRate = 9, a.deathFadeout = 0, a.playerCapacity = 9999, a.isSandbox = "sandbox.moomoo.io" == window.location.hostname, a.skinColors = ["#fe8ac9", "#cbb091", "#896c4b", "#fadadc", "#ececec", "#c37373", "#4c4c4c", "#ecaff7", "#738cc3", "#8bc373", "#91b2db"], a.weaponVariants = [{
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
            }], a.anotherVisual = !0, a.useWebGl = !1, a.resetRender = !0;
            let i, o = [];

            function s(e, t) {
                i && localStorage.setItem(e, t)
            }

            function r(e) {
                i && localStorage.removeItem(e)
            }
            "undefined" != typeof Storage && (i = !0);
            let l = function(e, t) {
                try {
                    let n = JSON.parse(function(e) {
                        return i ? localStorage.getItem(e) : null
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
                                ie.push(new vt(e.x, e.y, e.dir, e.buildIndex, e.weaponIndex, e.weaponVariant, e.skinColor, e.scale, e.name))
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
                    let a = 0;
                    for (let t in e.menu) n += `<option value = ${"option_"+t} id = ${"O_"+t}`, e.menu[t] && (n += " checked"), n += ` style = "color: ${e.menu[t]?"#000":"#fff"}; background: ${e.menu[t]?"#8ecc51":"#cc5151"};">${t}</option>`, a++;
                    n += "</select>", this.add(n), a = 0;
                    for (let t in e.menu) window[t + "Func"] = function() {
                        e.menu[t] = !!getEl("check_" + t).checked, s(t, e.menu[t]), getEl("O_" + t).style.color = e.menu[t] ? "#000" : "#fff", getEl("O_" + t).style.background = e.menu[t] ? "#8ecc51" : "#cc5151"
                    }, this.checkBox({
                        id: "check_" + t,
                        style: `display: ${0==a?"inline-block":"none"};`,
                        class: "checkB",
                        onclick: `window.${t+"Func"}()`,
                        checked: e.menu[t]
                    }), a++;
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
                            let a = new p(n);
                            "function" == typeof t && t(a)
                        }, this.addDiv = function(e, t) {
                            let n = document.createElement("div");
                            e.id && (n.id = e.id), e.style && (n.style = e.style), e.class && (n.className = e.class), e.appendID && getEl(e.appendID).appendChild(n), this.divElement = n;
                            let a = new p(n);
                            "function" == typeof t && t(a)
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

            function _(e, t, n, a) {
                h.set("menuChatDiv"), n = n || "white";
                let i = new Date,
                    o = i.getMinutes(),
                    s = i.getHours(),
                    r = "";
                a || (r += `${(s<10?"0":"")+s}:${(o<10?"0":"")+o}`), e && (r += "" + ((a ? "" : " - ") + e)), t && (r += (e ? ": " : a ? "" : " - ") + t + "\n"), h.addDiv({
                    id: "menuChDisp",
                    style: `color: ${n}`,
                    appendID: "mChMain"
                }, (e => {
                    e.add(r)
                })), k.scrollTop = k.scrollHeight, b++
            }

            function I(e, t, n, a) {
                h.set("menuChatDiv"), n = n || "white";
                new Date;
                let i = "";
                t && (i += (e ? ": " : "") + t + "\n"), h.addDiv({
                    id: "menuChDisp",
                    style: `color: ${n}`,
                    appendID: "mChMain"
                }, (e => {
                    e.add(i)
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
                    tickRate: 1e3 / a.serverUpdateRate,
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
                                a = n[0];
                            t = n[1];
                            let i = {
                                A: bn,
                                C: _n,
                                D: In,
                                E: Cn,
                                a: Fn,
                                G: Yn,
                                H: Xn,
                                I: $n,
                                J: Jn,
                                K: Zn,
                                L: Kn,
                                M: Qn,
                                N: ea,
                                O: Sn,
                                P: Tn,
                                Q: Wn,
                                R: Ln,
                                S: Dn,
                                T: Mn,
                                U: Un,
                                V: ta,
                                X: na,
                                Y: aa,
                                2: ca,
                                3: da,
                                4: pa,
                                5: ha,
                                6: ma,
                                7: ua,
                                8: ga,
                                9: ci,
                                0: yt
                            };
                            "io-init" == a ? P = t[0] : i[a] && i[a].apply(void 0, t)
                        }(e)
                    })), U.addEventListener("close", (e => {
                        4001 == e.code && window.location.reload()
                    }))), U == this) {
                    j = !1;
                    let t = new Uint8Array(e),
                        n = window.msgpack.decode(t),
                        a = n[0];
                    if (t = n[1], "6" == a) {
                        if (t[0]) {
                            let e;
                            ["cunt", "whore", "fuck", "shit", "faggot", "nigger", "nigga", "dick", "vagina", "minge", "cock", "rape", "cum", "sex", "tits", "penis", "clit", "pussy", "meatcurtain", "jizz", "prune", "douche", "wanker", "damn", "bitch", "dick", "fag", "bastard"].forEach((n => {
                                if (t[0].indexOf(n) > -1) {
                                    e = "";
                                    for (let t = 0; t < n.length; ++t) 1 == t && (e += String.fromCharCode(0)), e += n[t];
                                    let a = new RegExp(n, "g");
                                    t[0] = t[0].replace(a, e)
                                }
                            })), t[0] = t[0].slice(0, 30)
                        }
                    } else "L" == a ? (t[0] = t[0] + String.fromCharCode(0).repeat(7), t[0] = t[0].slice(0, 7)) : "M" == a ? (t[0].name = "" == t[0].name ? "unknown" : t[0].name, t[0].moofoll = !0, t[0].skin = 10 == t[0].skin ? "__proto__" : t[0].skin, V = [t[0].name, t[0].moofoll, t[0].skin]) : "D" == a ? ce.lastDir == t[0] || [null, void 0].includes(t[0]) ? j = !0 : ce.lastDir = t[0] : "d" == a ? t[2] ? [null, void 0].includes(t[1]) || (ce.lastDir = t[1]) : j = !0 : "K" == a ? t[1] || (j = !0) : "S" == a ? (Qt.wait = !Qt.wait, j = !0) : "a" == a && (t[1] ? (Y.moveDir == t[0] && (j = !0), Y.moveDir = t[0]) : j = !0);
                    if (!j) {
                        let e = window.msgpack.encode([a, t]);
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
                let a = t + (e - t) * n;
                return a >= 0 && a <= 2 * Math.PI ? a : a % (2 * Math.PI)
            }, CanvasRenderingContext2D.prototype.roundRect = function(e, t, n, a, i) {
                return n < 2 * i && (i = n / 2), a < 2 * i && (i = a / 2), i < 0 && (i = 0), this.beginPath(), this.moveTo(e + i, t), this.arcTo(e + n, t, e + n, t + a, i), this.arcTo(e + n, t + a, e, t + a, i), this.arcTo(e, t + a, e, t, i), this.arcTo(e, t, e + n, t, i), this.closePath(), this
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
                ae = [],
                ie = [],
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

            function de(e, t, n, a) {
                return Math.sqrt(Math.pow(n - e, 2) + Math.pow(a - t, 2))
            }

            function pe(e, t, n) {
                let a = null,
                    i = 1 / 0;
                return n.forEach((n => {
                    {
                        const o = de(e, t, n.x, n.y);
                        o < i && (i = o, a = n)
                    }
                })), a
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
                    a = t.y - e.y;
                return (Math.atan2(a, n) + 2 * Math.PI) % (2 * Math.PI)
            }
            async function me() {
                for (; ce.autoPush || Kt.inTrap;) await be(0)
            }

            function ue(e) {
                return e[Math.floor(Math.random() * e.length)]
            }

            function ge(e, t, n) {
                const a = Math.cos(t) * n,
                    i = Math.sin(t) * n;
                e.x += a, e.y += i, console.log(`Player moved to: (${e.x}, ${e.y})`)
            }

            function fe() {
                _things.player.moveDir && _things.packet("a", null, 1)
            }

            function ye(e, t, n) {
                const a = Math.PI / 4;
                let i = t;
                for (let o of n) {
                    const n = o.x - e.x,
                        s = o.y - e.y;
                    if (Math.hypot(n, s) < 60) {
                        let e = Math.atan2(s, n) - t;
                        if (e > Math.PI && (e -= 2 * Math.PI), e < -Math.PI && (e += 2 * Math.PI), Math.abs(e) < a) {
                            e > 0 ? i -= a : i += a, i = (i + 2 * Math.PI) % (2 * Math.PI);
                            break
                        }
                    }
                }
                return i
            }

            function we(e, t) {
                const n = [];
                return t.forEach((t => {
                    if (function(e) {
                            return e.health && !e.ignoreCollision && !e.hideFromEnemy || ["spikes", "greater spikes", "poison spikes", "spinning spikes", "pit trap"].includes(e.name)
                        }(t)) {
                        de(e.x, e.y, t.x, t.y) < 500 && n.push(t)
                    }
                })), n
            }
            playerRadius = 45, _things = {get liztobj() {
                    return ne
                },
                get traps() {
                    return Kt
                },
                get gameObjects() {
                    return te
                },
                get selectWeapon() {
                    return Ct
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
                            a = weapons.find((e => e.id === n[0])),
                            i = weapons.find((e => e.id === n[1])),
                            o = de(e.x, e.y, t.x, t.y),
                            s = o <= a.range + 100,
                            r = i && o <= i.range || !1;
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
            };
            autoGo = !1, breaker = !1, isMain = !1, useSpam = !1, farmAi = 0, autoShield = !0, hasShield = !1, followID = !1, holdingShield = !1, autoRuby = 0, breakOnly = !1, aimRuby = 0;
            let ke = !1;
            rubyDir = -.63, onlybreaker = !1, chat = e => _things.packet("6", e);
            var ve = !1;
            let xe = 0;
            var be = e => new Promise((t => setTimeout(t, e)));

            function _e(e, t) {
                return _things.liztobj.filter((e => e.active && e.render)).filter((n => {
                    const {
                        x: a,
                        y: i,
                        scale: o
                    } = n, s = o / 2, r = e.x, l = e.y, c = t.x - r, d = t.y - l, p = r - a, h = l - i, m = c * c + d * d, u = 2 * (p * c + h * d);
                    let g = u * u - 4 * m * (p * p + h * h - s * s);
                    if (g < 0) return !1; {
                        g = Math.sqrt(g);
                        const e = (-u - g) / (2 * m),
                            t = (-u + g) / (2 * m);
                        return e >= 0 && e <= 1 || t >= 0 && t <= 1
                    }
                })).filter((e => !!e.name && (!e.name.includes("trap") && !e.name.includes("form"))))
            }

            function Ie(e) {
                z("6", e)
            }

            function Ce(e, t) {
                return e.find((e => e.id == t))
            }

            function Se(e, t) {
                return e.find((e => e.sid == t))
            }

            function Te(e) {
                return Se(Z, e)
            }

            function De(e) {
                return Se(ais, e)
            }

            function Me(e) {
                return Se(te, e)
            }!async function() {
                for (;;) {
                    await be(0);
                    let e = !!_things.player && _things.player.health >= .01;
                    ke != e && (console.log(e ? "Alive" : "Died"), e && autoRubyOnSpawn && (autoRuby = 1, await be(200))), ke = e, Y && xe != Y.age && (xe = Y.age, items2[xe - 1]) && (console.log("test", Y.age, xe, items2[xe - 1]), _things.packet("H", items2[xe - 1]), autoGo && fe(), await be(300))
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
                        if (ce.autoAim = !1, mn.left = !1, mn.right = !1, Wt) {
                            fe(), await t(0);
                            continue
                        }
                        let h = !1,
                            m = _things.player.items.includes(17) || _things.player.itemCounts.hasOwnProperty("7");
                        await me();
                        let u = GM_getValue("stay") ? Y : GM_getValue("mainPos");
                        const g = toRad(ue([0, 0, -20, 20, -25, 25])),
                            f = _things.enemy.enemy;
                        var n = Y.weapons,
                            a = weapons.find((e => e.id === n[0])),
                            i = weapons.find((e => e.id === n[1])),
                            o = a.dmg < 9 && i ? i : a,
                            s = (_things.player.weapons.indexOf(_things.player.weaponIndex), _things.liztobj.filter(((e, t) => (t = e).active && _things.liztobj.includes(e) && t.render))),
                            r = s.filter((e => e.id && !e.name.includes("mill") && !e.name.includes("mill"))),
                            l = s.filter((e => e.id && !(e.name.includes("pike") || e.name.includes("trap"))));
                        r.filter((e => !(e.name.includes("pike") || e.name.includes("rap"))));
                        const y = getEl("weaponGrind").checked ? [] : r.filter((e => e.name.includes("port")));
                        r = r.filter((e => !e.name.includes("port")));
                        const w = void 0 !== i ? .projectile,
                            k = (pe(Y.x, Y.y, r), r.filter((e => de(u.x, u.y, e.x, e.y) <= 500))),
                            v = l.filter((e => de(Y.x, Y.y, e.x, e.y) <= 500)),
                            x = we(Y, _things.liztobj),
                            b = f && _things.enemy.targetDir + g,
                            _ = f && de(Y.x, Y.y, f.x, f.y),
                            I = 198;
                        autoShield = GM_getValue("shield") && 11 == _things.player.weapons[1] || !1;
                        let C = !_things.liztobj.filter(((e, t) => (t = e).active && _things.liztobj.includes(e) && t.render)).filter((e => !!e.id)).length || (e = pe(_things.player.x, _things.player.y, _things.liztobj.filter(((e, t) => (t = e).active && _things.liztobj.includes(e) && t.render)).filter((e => !!e.id))), de(_things.player.x, _things.player.y, e.x, e.y) < 170);
                        if (autoRuby && m && _things.player.age >= 8 && C) {
                            getEl("weaponGrind").checked = !0;
                            let e = 0;
                            if (8 != a.id) {
                                console.log("Grinding main Weapon"), Ct(Y.weapons[e]), await t(300);
                                let n = 0;
                                const a = 50;
                                for (; 3 != Y.weaponVariant && n < a;)
                                    for (Ct(Y.weapons[e]), _t(0 == Y.reloads[Y.weapons[e]] ? 40 : 6, 0), _things.packet("d", 1, rubyDir, 1), _things.packet("d", 0, rubyDir, 1), await t(99), fe(); Y.reloads[Y.weapons[e]];) await t(0), waitingFor = "no !";
                                n >= a && console.log("Max attempts reached while grinding main weapon")
                            }
                            if (e = 1, Ct(Y.weapons[1]), await t(300), !(i = weapons.find((e => e.id === n[1]))).req) {
                                for (console.log("Doing Secondary :>"); 3 != Y.weaponVariant;)
                                    for (Ct(Y.weapons[e]), _t(0 == Y.reloads[Y.weapons[e]] ? (setTimeout((() => {})), 40) : 6, 0), _things.packet("d", 1, rubyDir, 1), _things.packet("d", 0, rubyDir, 1), fe(), await t(99); Y.reloads[Y.weapons[e]];) await t(0), waitingFor = "no !"
                            }
                            Ct(Y.weapons[0]), autoRuby = !1, getEl("weaponGrind").checked = !1, await t(300);
                            continue
                        }
                        autoRuby && console.log("Waiting for Stuff?!", {
                            autoRuby: autoRuby,
                            hasTurrent: m,
                            age: _things.player.age
                        });
                        var c = f ? _e(_things.enemy ? .enemy, _things.player) : [];
                        f && se.forEach((e => {
                            let t = weapons.find((t => t.id == e.primaryIndex && t.req));
                            t && t.name && (t = 0 == e.reloads[t.id] && e.dir.toFixed(1) == he(e, Y).toFixed(1)), ce.autoAim = !1;
                            let n = he(Y, e);
                            t && (z("D", n), h = !0)
                        })), breaker = GM_getValue("breaker") || !1, !ve && ve != breaker && f ? chat("Sorry but this bot gotta blast") : ve && ve != breaker && f && chat("Time for Some action :p"), ve = breaker, useSpam = GM_getValue("useSpam") || !1, farmAi = GM_getValue("farmAi") || !1, isMain = !1;
                        var d = !1;
                        y.forEach((e => {
                            const t = de(Y.x, Y.y, e.x, e.y),
                                n = he(Y, e);
                            if (t < 300) {
                                const e = _things.player.moveDir;
                                let t, a = n - e;
                                return a > Math.PI ? a -= 2 * Math.PI : a < -Math.PI && (a += 2 * Math.PI), t = a > 0 ? e - .5 : e + .5, t = (t + 2 * Math.PI) % (2 * Math.PI), d = !0, void _things.packet("a", t, 1)
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
                                (e.name ? .includes("pike") || e.name ? .includes("trap") && !a.name.includes("tick")) && (t = 1);
                                const i = he(Y, e),
                                    o = de(Y.x, Y.y, e.x, e.y),
                                    s = (weapons.filter((e => 0 == e.type)).find((e => e.id === n[1])) || weapons.find((e => e.id === n[0]))).range + 30;
                                var p = t ? Y.weapons[0] : 10 == _things.player.weaponIndex || 10 === _things.player.weapons[1] ? 10 : _things.player.weapons[0];
                                if (o <= s) Ct(p), !d && fe(), !Y.reloads[p] && (_t(0 == Y.reloads[p] ? 40 : 6, 0), _things.packet("d", 1, i, 1), _things.packet("d", 0, i, 1));
                                else if (ge(Y, i, 25), !d) {
                                    let e = ye(Y, i, x);
                                    _things.packet("a", e, 1)
                                }
                            } else if (!Y.reloads[Y.weapons[1]])
                                if (_t(1), setTimeout((() => {
                                        _t(20)
                                    }), 100), ce.autoAim = !0, Ct(Y.weapons[1]), _things.packet("d", 1, b, 1), _things.packet("d", 0, b, 1), _ > i ? .range / 2) {
                                    let e = b + toRad(ue([45, -45])),
                                        t = ye(Y, e, x);
                                    _things.packet("a", t, 1), d = 1
                                } else fe()
                        } else if (farmAi && _things.closeAI) {
                            const e = _things.closeAI.ai,
                                t = _things.player,
                                n = de(e.x, e.y, t.x, t.y) - o.range / 2,
                                a = 250,
                                i = 120,
                                s = we(t, _things.liztobj);
                            if (n < a && n > i) 11 === t.tailIndex && _t(7, 1), t.reloads[o.id] || (_t(7, 0), _things.packet("d", 1, _things.closeAI.targetDir, 1), _things.packet("d", 0, _things.closeAI.targetDir, 1)), fe();
                            else if (n > a) {
                                let n = ye(t, he(t, e), s);
                                _things.packet("a", n, 1)
                            } else {
                                let n = he(t, e) + Math.PI;
                                n = (n + 2 * Math.PI) % (2 * Math.PI);
                                let a = ye(t, n, s);
                                _things.packet("a", a, 1), t.reloads[o.id] || (_t(7, 0), _things.packet("d", 1, _things.closeAI.targetDir, 1), _things.packet("d", 0, _things.closeAI.targetDir, 1))
                            }
                        } else if (!f || breaker || onlybreaker || autoBow) {
                            if (u)
                                if (k.length > 0) {
                                    const e = pe(Y.x, Y.y, k);
                                    let t = 0;
                                    (e.name ? .includes("pike") || e.name ? .includes("trap") && !a.name.includes("tick")) && (t = 1);
                                    const i = he(Y, e),
                                        o = de(Y.x, Y.y, e.x, e.y),
                                        s = (weapons.filter((e => 0 == e.type)).find((e => e.id === n[1])) || weapons.find((e => e.id === n[0]))).range + 30;
                                    p = t ? Y.weapons[0] : 10 == _things.player.weaponIndex || 10 === _things.player.weapons[1] ? 10 : _things.player.weapons[0];
                                    if (o <= s) Ct(p), !d && fe(), !Y.reloads[p] && (_t(0 == Y.reloads[p] ? 40 : 6, 0), _things.packet("d", 1, i, 1), _things.packet("d", 0, i, 1));
                                    else if (ge(Y, i, 25), !d) {
                                        let e = ye(Y, i, x);
                                        _things.packet("a", e, 1)
                                    }
                                } else {
                                    const e = de(Y.x, Y.y, u.x, u.y);
                                    let n = he(Y, u) + g;
                                    if (e <= 300) fe(), await t(100);
                                    else {
                                        if (v.length > 0) {
                                            const e = pe(Y.x, Y.y, v);
                                            let t = 0;
                                            (e.name.includes("pike") || e.name.includes("trap") && !a.name.includes("tick")) && (t = 1);
                                            const n = he(Y, e),
                                                i = de(Y.x, Y.y, e.x, e.y),
                                                o = 110;
                                            console.log({
                                                range: o,
                                                dist: i,
                                                dir: n,
                                                targetItem: e
                                            });
                                            p = t ? Y.weapons[0] : 10 == _things.player.weaponIndex || 10 === _things.player.weapons[1] ? 10 : _things.player.weapons[0];
                                            i <= o && (Ct(p), !Y.reloads[p] && (_t(0 == Y.reloads[p] ? 40 : 6, 0), _things.packet("d", 1, n, 1), _things.packet("d", 0, n, 1)))
                                        }
                                        if (console.log("Going", {
                                                itemsToBreak: k
                                            }), !d) {
                                            let e = ye(Y, n, x);
                                            _things.packet("a", e, 1)
                                        }
                                        _things.traps.inTrap
                                    }
                                }
                        } else {
                            let e = _ <= weapons.find((e => e.id == (_things.enemy.enemy.primaryIndex || 5))).range + 25,
                                t = _ <= I && e > I && 11 == _things.player.weapons[1];
                            if (shielding = t, _ <= I - (autoShield ? 0 : 50)) {
                                if (autoShield || Gn.antibull || Kt.inTrap || !useSpam || 11 == _things.player.skinIndex || 11 == _things.enemy.enemy.skinIndex)
                                    if (autoShield && _things.enemy.enemy && 11 == _things.player.weapons[1] && 11 != _things.player.weaponCode) {
                                        ce.autoAim = !0, mn.left = 0, Ct(Y.weapons[1]), shielding = !0, d = 1;
                                        let e = b + toRad(15),
                                            t = ye(Y, e, x);
                                        _things.packet("a", t, 1)
                                    } else mn.left = 0, ce.autoAim = 0;
                                else mn.left = 1, ce.autoAim = !0;
                                if (_ < 120) {
                                    let e = b + toRad(ue([45, -45])),
                                        t = ye(Y, e, x);
                                    _things.packet("a", t, 1)
                                } else {
                                    let e = ye(Y, b + g, x);
                                    _things.packet("a", e, 1), _things.packet("d", 1, e, 1), _things.packet("d", 0, e, 1)
                                }
                            } else {
                                if (t && 11 == _things.player.weapons[1] && 11 != _things.player.weaponCode && (ce.autoAim = !0, Ct(Y.weapons[1])), mn.left = 0, ce.autoAim = !1, _ > 500 && 10 != _things.player.weaponIndex && 10 == _things.player.weapons[1] ? Ct(Y.weapons[1]) : 11 == _things.player.weaponIndex && Ct(Y.weapons[0]), !d) {
                                    let e = ye(Y, b, x);
                                    _things.packet("a", e, 1)
                                }
                                if (v.length > 0 && _ > 600) {
                                    const e = pe(Y.x, Y.y, v);
                                    let t = 0;
                                    (e.name.includes("pike") || e.name.includes("trap") && !a.name.includes("tick")) && (t = 1, br = 0);
                                    const n = he(Y, e),
                                        i = de(Y.x, Y.y, e.x, e.y),
                                        o = 110;
                                    console.log({
                                        range: o,
                                        dist: i,
                                        dir: n,
                                        targetItem: e
                                    });
                                    var p = t ? Y.weapons[0] : 10 == _things.player.weaponIndex || 10 === _things.player.weapons[1] ? 10 : _things.player.weapons[0];
                                    i <= o && (Ct(p), didHit = 1, !Y.reloads[p] && (_t(0 == Y.reloads[p] ? 40 : 6, 0), _things.packet("d", 1, n, 1), _things.packet("d", 0, n, 1)))
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

                    function a(n, a) {
                        Object.keys(t[n]).find((e => t[n][e] === a));
                        console.log(n), e.includes(a) && (items2[5] && 9 === items2[5] || (items2[5] = 9, document.getElementById("sel5").value = 9), items2[7] && 12 === items2[7] || (items2[7] = 12, document.getElementById("sel7").value = 12)), 4 !== a || items2[1] && 3 === items2[1] || (items2[1] = 3, document.getElementById("sel1").value = 3), 2 !== a || items2[1] && 1 === items2[1] || (items2[1] = 1, document.getElementById("sel1").value = 1)
                    }
                    weapons.forEach((e => {
                            e.age && (t[e.age - 1][e.name.split(" ").join("_")] = e.id)
                        })),
                        function(e = ((e, t) => {
                            window.items2[t] = e.target.selectedOptions[0].value, console.log([t], e.target.selectedOptions[0].value)
                        }), i = document.createElement("br")) {
                            for (let e in t) {
                                n.append(document.createElement("br")), console.log(e);
                                let i = document.createElement("select");
                                window.selects.push([e, i]), i.id = "sel" + e, i.classname = e;
                                let o = document.createElement("span");
                                o.innerText = `Age ${e}:`, Object.keys(t[e]).forEach((n => {
                                    console.log(n, t[e][n]);
                                    let a = document.createElement("option");
                                    a.value = t[e][n], a.innerText = n, i.append(a)
                                })), n.append(o), n.append(i), i.onchange = function(e) {
                                    var t = e.target.value,
                                        n = e.target.classname;
                                    console.log("Age", n, "to", t), items2[n] = t, a(n, parseInt(t))
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
                            t.length > 0 && (e = t[0], GM_setValue("prefix", e), Ie(`Prefix now iz ${e} mew!`))
                        },
                        main: function() {
                            isMain = !isMain, Ie("Main mode flip-flopped! XD")
                        },
                        bot: function() {
                            autoGo = !autoGo, Ie(`Bo-o-o-otMode iz ${autoGo?"ON":"OFF"} now!`)
                        },
                        breaker: function() {
                            breaker = !GM_getValue("breaker", !1), GM_setValue("breaker", breaker), Ie(`Breaker iz ${breaker?"ON":"OFF"} now!`)
                        },
                        useSpam: function() {
                            useSpam = !GM_getValue("useSpam", !1), GM_setValue("useSpam", useSpam), Ie(`Spam mode iz ${useSpam?"ON":"OFF"} zzz!`)
                        },
                        farmAi: function() {
                            farmAi = !GM_getValue("farmAi", !1), GM_setValue("farmAi", farmAi), Ie(`FarmAI iz ${farmAi?"ON":"OFF"} baaa!`)
                        },
                        spawn: function(e) {
                            if (NaN != Number(e))
                                for (let t = 0; t < e; t++) open(location.href, "bot")
                        },
                        stay: function() {
                            isMain = !1, GM_setValue("stay", !isMain), Ie("Bots R sittin n chillin!")
                        },
                        follow: function(e = "d") {
                            e.length && NaN != Number(e) && console.log("wtf", e, e.length), isMain = !0, GM_setValue("stay", !isMain), Ie("Main mode iz ON, followz!")
                        },
                        here: function() {
                            GM_setValue("mainPos", {
                                x: Y.x,
                                y: Y.y
                            }), Ie("Main posishun saved! =^_^=")
                        },
                        shield: function() {
                            autoShield = !GM_getValue("shield", !1), GM_setValue("shield", autoShield), Ie(`AutoShield iz ${autoShield?"ON":"OFF"}!`)
                        }
                    };
                    breaker = GM_getValue("breaker") || !1, useSpam = GM_getValue("useSpam") || !1, farmAi = GM_getValue("farmAi") || !1, document.getElementById("chatBox").addEventListener("keydown", (n => {
                        if ("Enter" === n.key) {
                            const a = n.target.value.trim();
                            if (a.startsWith(e)) {
                                n.preventDefault();
                                const i = a.slice(e.length).split(" ")[0],
                                    o = a.slice(e.length + i.length).trim().split(" ");
                                t.hasOwnProperty(i) && (t[i](o), n.target.value = "")
                            }
                        }
                    }))
                }();
            getEl("adCard"), getEl("promoImgHolder");
            getEl("chatButton").remove();
            let Ue = getEl("gameCanvas"),
                Ee = Ue.getContext("2d"),
                Pe = getEl("mapDisplay"),
                Be = Pe.getContext("2d");
            Pe.width = 300, Pe.height = 300;
            let Oe = getEl("storeMenu"),
                Ae = (getEl("storeHolder"), getEl("upgradeHolder")),
                Re = getEl("upgradeCounter"),
                He = getEl("chatBox");
            He.autocomplete = "off", He.style.textAlign = "center", He.style.width = "18em";
            let We = getEl("chatHolder"),
                Le = getEl("actionBar"),
                je = (getEl("leaderboardData"), getEl("itemInfoHolder"));
            getEl("menuCardHolder"), getEl("mainMenu");
            getEl("mainMenu").style.backgroundImage = "url('https://cdn.discordapp.com/attachments/1198742281755316317/1202991399532896347/wallpaper.jpg?ex=65cf780c&is=65bd030c&hm=c6311b336f8438208363736b853fa27c7508a0f76a67834df50dc176812cb14c&')";
            getEl("diedText");
            let qe, Ve, ze, Ge, Fe, Ne, Ye, Xe, $e = a.maxScreenWidth,
                Je = a.maxScreenHeight,
                Ze = 1,
                Ke = performance.now(),
                Qe = 0,
                et = 0,
                tt = getEl("allianceMenu"),
                nt = 1,
                at = 0,
                it = "#525252",
                ot = "#3d3f42",
                st = 5.5,
                rt = !0,
                lt = {},
                ct = {
                    87: [0, -1],
                    38: [0, -1],
                    83: [0, 1],
                    40: [0, 1],
                    65: [-1, 0],
                    37: [-1, 0],
                    68: [1, 0],
                    39: [1, 0]
                },
                dt = 0,
                pt = !1,
                ht = {},
                mt = {
                    place: 0,
                    placeSpawnPads: 0
                },
                ut = [],
                gt = !0;
            window.onblur = function() {
                gt = !1
            }, window.onfocus = function() {
                gt = !0, Y && Y.alive
            };
            let ft = {
                avg: 0,
                max: 0,
                min: 0,
                delay: 0
            };

            function yt() {
                let e = window.pingTime;
                document.getElementById("pingDisplay").innerText = "Ping: " + e + " ms`", (e > ft.max || isNaN(ft.max)) && (ft.max = e), (e < ft.min || isNaN(ft.min)) && (ft.min = e)
            }
            let wt = [];
            class kt {
                constructor() {
                    this.init = function(e, t, n, a, i, o, s) {
                        this.x = e, this.y = t, this.color = s, this.scale = 3.5 * n, this.weight = 50, this.startScale = 1.2 * this.scale, this.maxScale = 1.5 * n, this.minScale = .5 * n, this.scaleSpeed = .7, this.speed = a, this.speedMax = a, this.life = i, this.maxLife = i, this.text = o, this.movSpeed = a
                    }, this.update = function(e) {
                        this.life && (this.life -= e, this.scaleSpeed, this.y -= this.speed * e, this.scale -= .8, this.scale >= this.maxScale && (this.scale = this.maxScale, this.scaleSpeed *= -.5, this.speed = .75 * this.speed), this.life <= 0 && (this.life = 0))
                    }, this.render = function(e, t, n) {
                        e.lineWidth = 10, e.strokeStyle = ot, e.fillStyle = this.color, e.globalAlpha = 1, e.font = this.scale + "px HammerSmith One", e.strokeText(this.text, this.x - t, this.y - n), e.fillText(this.text, this.x - t, this.y - n), e.globalAlpha = 1
                    }
                }
            }
            class vt {
                constructor(e, t, n, a, i, o, s, r, l) {
                    this.x = e, this.y = t, this.lastDir = n, this.dir = n + Math.PI, this.buildIndex = a, this.weaponIndex = i, this.weaponVariant = o, this.skinColor = s, this.scale = r, this.visScale = 0, this.name = l, this.alpha = 1, this.active = !0, this.animate = function(e) {
                        let t = zt.getAngleDist(this.lastDir, this.dir);
                        t > .01 ? this.dir += t / 20 : this.dir = this.lastDir, this.visScale < this.scale && (this.visScale += e / (this.scale / 2), this.visScale >= this.scale && (this.visScale = this.scale)), this.alpha -= e / 3e4, this.alpha <= 0 && (this.alpha = 0, this.active = !1)
                    }
                }
            }
            class xt {
                constructor(e, t, n, a, i, o, s, r, l, c, d, p, h, m) {
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
                                    skin: Ce(c, this.skinIndex),
                                    tail: Ce(d, this.tailIndex)
                                },
                                t = (this.buildIndex >= 0 ? .5 : 1) * (l.weapons[this.weaponIndex].spdMult || 1) * (e.skin && e.skin.spdMult || 1) * (e.tail && e.tail.spdMult || 1) * (this.y <= n.snowBiomeTop ? e.skin && e.skin.coldM ? 1 : n.snowSpeed : 1) * this.slowMult;
                            this.maxSpeed = t
                        }
                    };
                    let u = 0,
                        g = 0;
                    this.animate = function(e) {
                        this.animTime > 0 && (this.animTime -= e, this.animTime <= 0 ? (this.animTime = 0, this.dirPlus = 0, u = 0, g = 0) : 0 == g ? (u += e / (this.animSpeed * n.hitReturnRatio), this.dirPlus = a.lerp(0, this.targetAngle, Math.min(1, u)), u >= 1 && (u = 1, g = 1)) : (u -= e / (this.animSpeed * (1 - n.hitReturnRatio)), this.dirPlus = a.lerp(0, this.targetAngle, Math.max(0, u))))
                    }, this.startAnim = function(e, t) {
                        this.animTime = this.animSpeed = l.weapons[t].speed, this.targetAngle = e ? -n.hitAngle : -Math.PI, u = 0, g = 0
                    }, this.canSee = function(e) {
                        if (!e) return !1;
                        let t = Math.abs(e.x - this.x) - e.scale,
                            a = Math.abs(e.y - this.y) - e.scale;
                        return t <= n.maxScreenWidth / 2 * 1.3 && a <= n.maxScreenHeight / 2 * 1.3
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
                        if (this.alive && pt) {
                            let a = {
                                    weapon: this.weapons[0],
                                    variant: this.primaryVariant,
                                    dmg: null == this.weapons[0] ? 0 : l.weapons[this.weapons[0]].dmg
                                },
                                i = {
                                    weapon: this.weapons[1],
                                    variant: this.secondaryVariant,
                                    dmg: null == this.weapons[1] ? 0 : l.weapons[this.weapons[1]].Pdmg
                                },
                                o = this.skins[7] && !e ? 1.5 : 1,
                                s = null != a.variant ? n.weaponVariants[a.variant].val : 1;
                            return null != a.weapon && 0 == this.reloads[a.weapon] && (t += a.dmg * s * o), null != i.weapon && 0 == this.reloads[i.weapon] && (t += i.dmg), this.skins[53] && this.reloads[53] <= (10 == Y.weapons[1] ? 0 : L.tickRate) && 22 != le.skinIndex && (t += 25), t *= 6 == le.skinIndex ? .75 : 1, t
                        }
                        return 0
                    }, this.manageReload = function() {
                        if (this.shooting[53] ? (this.shooting[53] = 0, this.reloads[53] = 2500 - L.tickRate) : this.reloads[53] > 0 && (this.reloads[53] = Math.max(0, this.reloads[53] - L.tickRate)), this.reloads[this.weaponIndex] <= 1e3 / 9) {
                            let e = this.weaponIndex,
                                t = ne.filter((e => (e.active || e.alive) && e.health < e.maxHealth && void 0 !== e.group && a.getDist(e, Y, 0, 2) <= l.weapons[Y.weaponIndex].range + e.scale));
                            for (let a = 0; a < t.length; a++) {
                                let i = t[a],
                                    o = (l.weapons[e].dmg, n.weaponVariants[J[(e < 9 ? "prima" : "seconda") + "ryVariant"]].val, l.weapons[e].sDmg, l.weapons[e].dmg * n.weaponVariants[J[(e < 9 ? "prima" : "seconda") + "ryVariant"]].val * (l.weapons[e].sDmg || 1));
                                i.health - o <= 0 && le.length && (Tt(le.dist2 < 1.8 * le.scale + 50 ? 4 : 2, qn(i, Y) + Math.PI), console.log("preplaced"))
                            }
                        }
                        if (this.gathering || this.shooting[1]) this.gathering && (this.gathering = 0, this.reloads[this.gatherIndex] = l.weapons[this.gatherIndex].speed * (20 == this.skinIndex ? .78 : 1), this.attacked = !0), this.shooting[1] && (this.shooting[1] = 0, this.reloads[this.shootIndex] = l.weapons[this.shootIndex].speed * (20 == this.skinIndex ? .78 : 1), this.attacked = !0);
                        else if (this.attacked = !1, this.buildIndex < 0 && this.reloads[this.weaponIndex] > 0) {
                            if (this.reloads[this.weaponIndex] = Math.max(0, this.reloads[this.weaponIndex] - 110), this == Y && getEl("weaponGrind").checked)
                                for (let e = 0; e < 2 * Math.PI; e += Math.PI / 2) Dt(Y.getItemType(22), e);
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
                        let a = {
                            weapon: this.secondaryIndex,
                            variant: this.secondaryVariant
                        };
                        a.dmg = null == a.weapon ? 75 : l.weapons[a.weapon].Pdmg;
                        let i = null != t.variant ? n.weaponVariants[t.variant].val : 1.18,
                            o = null != a.variant ? [9, 12, 13, 15].includes(a.weapon) ? 1 : n.weaponVariants[a.variant].val : 1.18;
                        null != t.weapon && 0 != this.reloads[t.weapon] || (this.damageThreat += t.dmg * i * 1.5), null != a.weapon && 0 != this.reloads[a.weapon] || (this.damageThreat += a.dmg * o), this.reloads[53] <= L.tickRate && (this.damageThreat += 25), this.damageThreat *= 6 == e.skinIndex ? .75 : 1, this.isTeam(e) || this.dist2 <= 300 && (e.damageThreat += this.damageThreat)
                    }
                }
            }

            function bt(e) {
                Y.reloads[e] = 0, z("H", e)
            }

            function _t(e, t) {
                let n = Y.skins[6] ? 6 : 0;
                if (Y.alive && pt)
                    if (0 == t)
                        if (Y.skins[e]) Y.latestSkin != e && z("c", 0, e, 0);
                        else if (d.autoBuyEquip) {
                    let t = Ce(Yt, e);
                    t && Y.points >= t.price ? (z("c", 1, e, 0), z("c", 0, e, 0)) : Y.latestSkin != n && z("c", 0, n, 0)
                } else Y.latestSkin != n && z("c", 0, n, 0);
                else if (1 == t) {
                    if (A && 11 != e && 0 != e) return void(0 != Y.latestTail && z("c", 0, 0, 1));
                    if (Y.tails[e]) Y.latestTail != e && z("c", 0, e, 1);
                    else if (d.autoBuyEquip) {
                        let t = Ce(Xt, e);
                        t && Y.points >= t.price ? (z("c", 1, e, 1), z("c", 0, e, 1)) : 0 != Y.latestTail && z("c", 0, 0, 1)
                    } else 0 != Y.latestTail && z("c", 0, 0, 1)
                }
            }

            function It(e, t) {
                z("G", e, t)
            }

            function Ct(e, t) {
                t || (Y.weaponCode = e), z("G", e, 1)
            }

            function St() {
                z("K", 1, 1)
            }

            function Tt(e, t, n) {
                try {
                    if (null == e) return;
                    let i = Gt.list[Y.items[e]],
                        o = Y.scale + i.scale + (i.placeOffset || 0),
                        s = Y.x2 + o * Math.cos(t),
                        r = Y.y2 + o * Math.sin(t);
                    (Y.alive && pt && null == Y.itemCounts[i.group.id] || Y.itemCounts[i.group.id] < (a.isSandbox ? 299 : i.group.limit ? i.group.limit : 99)) && (It(Y.items[e]), function(e, t) {
                        z("d", e, t, 1)
                    }(1, t), Ct(Y.weaponCode, 1), n && getEl("placeVis").checked && (wt.push({
                        x: s,
                        y: r,
                        name: i.name,
                        scale: i.scale,
                        dir: t
                    }), L.tickBase((() => {
                        wt.shift()
                    }), 1)))
                } catch (e) {}
            }

            function Dt(e, t) {
                try {
                    if (null == e) return;
                    let n = Gt.list[Y.items[e]],
                        a = Y.scale + n.scale + (n.placeOffset || 0),
                        i = Y.x2 + a * Math.cos(t),
                        o = Y.y2 + a * Math.sin(t);
                    Ft.checkItemLocation(i, o, n.scale, .6, n.id, !1, Y) && Tt(e, t, 1)
                } catch (e) {}
            }

            function Mt() {
                return 6 == Y.latestSkin ? .75 : 1
            }

            function Ut(e) {
                return se.filter((e => ({
                    three: e.attacked
                }.three)))
            }

            function Et() {
                for (let e = 0; e < (100 == Y.health ? 0 : 45 != Y.skinIndex && 56 != Y.skinIndex ? Math.ceil((100 - Y.health) / Gt.list[Y.items[0]].healing) : 0); e++) Tt(0, gn())
            }

            function Pt(e) {
                ce.antiSync = !0;
                let t = setInterval((() => {
                    Y.shameCount < 5 && Tt(0, gn())
                }), 75);
                setTimeout((() => {
                    clearInterval(t), setTimeout((() => {
                        ce.antiSync = !1
                    }), L.tickRate)
                }), L.tickRate)
            }

            function Bt(e, t) {
                if (Y.y2 >= a.mapScale / 2 - a.riverWidth / 2 && Y.y2 <= a.mapScale / 2 + a.riverWidth / 2) {
                    if (t) return 31;
                    _t(31, 0)
                } else if (Y.y2 <= a.snowBiomeTop) {
                    if (t) return e && null == Y.moveDir ? 22 : 15;
                    _t(e && null == Y.moveDir ? 22 : 15, 0)
                } else {
                    if (t) return e && null == Y.moveDir ? 22 : 12;
                    _t(e && null == Y.moveDir ? 22 : 12, 0)
                }
                if (t) return 0
            }
            let Ot = [],
                At = {},
                Rt = function() {
                    return 10 == Y.weapons[1] && (At.health > Gt.weapons[Y.weapons[0]].dmg || 5 == Y.weapons[0])
                },
                Ht = 0,
                Wt = !1;
            let Lt, jt, qt, Vt = [],
                zt = new class {
                    constructor() {
                        let e = Math.abs,
                            t = (Math.cos, Math.sin, Math.pow, Math.sqrt),
                            n = Math.atan2,
                            a = Math.PI,
                            i = this;
                        this.round = function(e, t) {
                            return Math.round(e * t) / t
                        }, this.toRad = function(e) {
                            return e * (a / 180)
                        }, this.toAng = function(e) {
                            return e / (a / 180)
                        }, this.randInt = function(e, t) {
                            return Math.floor(Math.random() * (t - e + 1)) + e
                        }, this.randFloat = function(e, t) {
                            return Math.random() * (t - e + 1) + e
                        }, this.lerp = function(e, t, n) {
                            return e + (t - e) * n
                        }, this.decel = function(e, t) {
                            return e > 0 ? e = Math.max(0, e - t) : e < 0 && (e = Math.min(0, e + t)), e
                        }, this.getDistance = function(e, n, a, i) {
                            return t((a -= e) * a + (i -= n) * i)
                        }, this.getDist = function(e, n, a, i) {
                            let o = 0 == a ? e.x : 1 == a ? e.x1 : 2 == a ? e.x2 : 3 == a && e.x3,
                                s = 0 == a ? e.y : 1 == a ? e.y1 : 2 == a ? e.y2 : 3 == a && e.y3,
                                r = {
                                    x: 0 == i ? n.x : 1 == i ? n.x1 : 2 == i ? n.x2 : 3 == i && n.x3,
                                    y: 0 == i ? n.y : 1 == i ? n.y1 : 2 == i ? n.y2 : 3 == i && n.y3
                                };
                            return t((r.x -= o) * r.x + (r.y -= s) * r.y)
                        }, this.getDirection = function(e, t, a, i) {
                            return n(t - i, e - a)
                        }, this.getDirect = function(e, t, a, i) {
                            let o = 0 == a ? e.x : 1 == a ? e.x1 : 2 == a ? e.x2 : 3 == a && e.x3,
                                s = 0 == a ? e.y : 1 == a ? e.y1 : 2 == a ? e.y2 : 3 == a && e.y3,
                                r = 0 == i ? t.x : 1 == i ? t.x1 : 2 == i ? t.x2 : 3 == i && t.x3,
                                l = 0 == i ? t.y : 1 == i ? t.y1 : 2 == i ? t.y2 : 3 == i && t.y3;
                            return n(s - l, o - r)
                        }, this.getAngleDist = function(t, n) {
                            let i = e(n - t) % (2 * a);
                            return i > a ? 2 * a - i : i
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
                        }, this.lineInRect = function(e, t, n, a, i, o, s, r) {
                            let l = i,
                                c = s;
                            if (i > s && (l = s, c = i), c > n && (c = n), l < e && (l = e), l > c) return !1;
                            let d = o,
                                p = r,
                                h = s - i;
                            if (Math.abs(h) > 1e-7) {
                                let e = (r - o) / h,
                                    t = o - e * i;
                                d = e * l + t, p = e * c + t
                            }
                            if (d > p) {
                                let e = p;
                                p = d, d = e
                            }
                            return p > a && (p = a), d < t && (d = t), !(d > p)
                        }, this.containsPoint = function(e, t, n) {
                            let a = e.getBoundingClientRect(),
                                i = a.left + window.scrollX,
                                o = a.top + window.scrollY,
                                s = a.width,
                                r = a.height;
                            return t > i && t < i + s && (n > o && n < o + r)
                        }, this.mousifyTouchEvent = function(e) {
                            let t = e.changedTouches[0];
                            e.screenX = t.screenX, e.screenY = t.screenY, e.clientX = t.clientX, e.clientY = t.clientY, e.pageX = t.pageX, e.pageY = t.pageY
                        }, this.hookTouchEvents = function(e, t) {
                            let n = !t,
                                a = !1,
                                o = !1;

                            function s(t) {
                                i.mousifyTouchEvent(t), window.setUsingTouch(!0), n && (t.preventDefault(), t.stopPropagation()), a && (e.onclick && e.onclick(t), e.onmouseout && e.onmouseout(t), a = !1)
                            }
                            e.addEventListener("touchstart", this.checkTrusted((function(t) {
                                i.mousifyTouchEvent(t), window.setUsingTouch(!0), n && (t.preventDefault(), t.stopPropagation());
                                e.onmouseover && e.onmouseover(t);
                                a = !0
                            })), o), e.addEventListener("touchmove", this.checkTrusted((function(t) {
                                i.mousifyTouchEvent(t), window.setUsingTouch(!0), n && (t.preventDefault(), t.stopPropagation());
                                i.containsPoint(e, t.pageX, t.pageY) ? a || (e.onmouseover && e.onmouseover(t), a = !0) : a && (e.onmouseout && e.onmouseout(t), a = !1)
                            })), o), e.addEventListener("touchend", this.checkTrusted(s), o), e.addEventListener("touchcancel", this.checkTrusted(s), o), e.addEventListener("touchleave", this.checkTrusted(s), o)
                        }, this.removeAllChildren = function(e) {
                            for (; e.hasChildNodes();) e.removeChild(e.lastChild)
                        }, this.generateElement = function(e) {
                            let t = document.createElement(e.tag || "div");

                            function n(n, a) {
                                e[n] && (t[a] = e[n])
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
                            for (let a = 0; a < e; a++) t += n.charAt(Math.floor(62 * Math.random()));
                            return t
                        }, this.countInArray = function(e, t) {
                            let n = 0;
                            for (let a = 0; a < e.length; a++) e[a] === t && n++;
                            return n
                        }, this.hexToRgb = function(e) {
                            return e.slice(1).match(/.{1,2}/g).map((e => parseInt(e, 16)))
                        }, this.getRgb = function(e, t, n) {
                            return [e / 255, t / 255, n / 255].join(", ")
                        }
                    }
                },
                Gt = new class {
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
                Ft = new class {
                    constructor(e, t, n, a, i, o) {
                        let s;
                        Math.floor, Math.abs, Math.cos, Math.sin, Math.pow, Math.sqrt;
                        this.ignoreAdd = !1, this.hitObj = [], this.disableObj = function(e) {
                            e.active = !1
                        }, this.add = function(t, n, a, i, o, r, l, c, d) {
                            s = Me(t), s || (s = te.find((e => !e.active)), s || (s = new e(t), te.push(s))), c && (s.sid = t), s.init(n, a, i, o, r, l, d)
                        }, this.disableBySid = function(e) {
                            let t = Me(e);
                            t && this.disableObj(t)
                        }, this.removeAllItems = function(e, t) {
                            te.filter((t => t.active && t.owner && t.owner.sid == e)).forEach((e => this.disableObj(e)))
                        }, this.checkItemLocation = function(e, i, o, s, r, l, c) {
                            return !t.find((t => t.active && n.getDistance(e, i, t.x, t.y) < o + (t.blocker ? t.blocker : t.getScale(s, t.isItem)))) && !(!l && 18 != r && i >= a.mapScale / 2 - a.riverWidth / 2 && i <= a.mapScale / 2 + a.riverWidth / 2)
                        }
                    }
                }(class {
                    constructor(e) {
                        this.sid = e, this.init = function(e, t, n, a, i, o, s) {
                            o = o || {}, this.sentTo = {}, this.gridLocations = [], this.active = !0, this.render = !0, this.doUpdate = o.doUpdate, this.x = e, this.y = t, this.dir = n, this.lastDir = n, this.xWiggle = 0, this.yWiggle = 0, this.visScale = a, this.scale = a, this.type = i, this.id = o.id, this.owner = s, this.name = o.name, this.isItem = null != this.id, this.group = o.group, this.maxHealth = o.health, this.health = this.maxHealth, this.layer = 2, null != this.group ? this.layer = this.group.layer : 0 == this.type ? this.layer = 3 : 2 == this.type ? this.layer = 0 : 4 == this.type && (this.layer = -1), this.colDiv = o.colDiv || 1, this.blocker = o.blocker, this.ignoreCollision = o.ignoreCollision, this.dontGather = o.dontGather, this.hideFromEnemy = o.hideFromEnemy, this.friction = o.friction, this.projDmg = o.projDmg, this.dmg = o.dmg, this.pDmg = o.pDmg, this.pps = o.pps, this.zIndex = o.zIndex || 0, this.turnSpeed = o.turnSpeed, this.req = o.req, this.trap = o.trap, this.healCol = o.healCol, this.teleport = o.teleport, this.boostSpeed = o.boostSpeed, this.projectile = o.projectile, this.shootRange = o.shootRange, this.shootRate = o.shootRate, this.shootCount = this.shootRate, this.spawnPoint = o.spawnPoint, this.onNear = 0, this.breakObj = !1, this.alpha = o.alpha || 1, this.maxAlpha = o.alpha || 1, this.damaged = 0
                        }, this.changeHealth = function(e, t) {
                            return this.health += e, this.health <= 0
                        }, this.getScale = function(e, t) {
                            return e = e || 1, this.scale * (this.isItem || 2 == this.type || 3 == this.type || 4 == this.type ? 1 : .6 * e) * (t ? 1 : this.colDiv)
                        }, this.visibleToPlayer = function(e) {
                            return !this.hideFromEnemy || this.owner && (this.owner == e || this.owner.team && e.team == this.owner.team)
                        }, this.update = function(e) {
                            if (this.active) {
                                this.xWiggle && (this.xWiggle *= Math.pow(.99, e)), this.yWiggle && (this.yWiggle *= Math.pow(.99, e));
                                let t = zt.getAngleDist(this.lastDir, this.dir);
                                t > .01 ? this.dir += t / 5 : this.dir = this.lastDir
                            } else this.alive && (this.alpha -= e / (200 / this.maxAlpha), this.visScale += e / (this.scale / 2.5), this.alpha <= 0 && (this.alpha = 0, this.alive = !1))
                        }, this.isTeamObject = function(e) {
                            return null == this.owner || (this.owner && e.sid == this.owner.sid || e.findAllianceBySid(this.owner.sid))
                        }
                    }
                }, te, zt, a),
                Nt = new class {
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
                Yt = Nt.hats,
                Xt = Nt.accessories,
                $t = new class {
                    constructor(e, t, n, a, i, o, s, r, l) {
                        this.addProjectile = function(c, d, p, h, m, u, g, f, y, w) {
                            let k, v = o.projectiles[u];
                            for (let e = 0; e < t.length; ++e)
                                if (!t[e].active) {
                                    k = t[e];
                                    break
                                }
                            return k || (k = new e(n, a, i, o, s, r, l), k.sid = t.length, t.push(k)), k.init(u, c, d, p, m, v.dmg, h, v.scale, g), k.ignoreObj = f, k.layer = y || v.layer, k.inWindow = w, k.src = v.src, k
                        }
                    }
                }(class {
                    constructor(e, t, n, a, i, o, s) {
                        this.init = function(e, t, n, a, i, o, s, r, l) {
                            this.active = !0, this.tickActive = !0, this.indx = e, this.x = t, this.y = n, this.x2 = t, this.y2 = n, this.dir = a, this.skipMov = !0, this.speed = i, this.dmg = o, this.scale = r, this.range = s, this.r2 = s, this.owner = l
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
                }, ae, Z, ais, Ft, Gt, a, zt),
                Jt = new class {
                    constructor(e, t, n, a, i, o, s, r, l) {
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
                            return m || (m = new t(e.length, i, n, a, s, o, r, l), e.push(m)), m.init(c, d, p, h, this.aiTypes[h]), m
                        }
                    }
                }(ais, class {
                    constructor(e, t, n, a, i, o, s, r) {
                        this.sid = e, this.isAI = !0, this.nameIndex = i.randInt(0, o.cowNames.length - 1), this.init = function(e, t, n, a, i) {
                            this.x = e, this.y = t, this.startX = i.fixedSpawn ? e : null, this.startY = i.fixedSpawn ? t : null, this.xVel = 0, this.yVel = 0, this.zIndex = 0, this.dir = n, this.dirPlus = 0, this.showName = "aaa", this.index = a, this.src = i.src, i.name && (this.name = i.name), this.weightM = i.weightM, this.speed = i.speed, this.killScore = i.killScore, this.turnSpeed = i.turnSpeed, this.scale = i.scale, this.maxHealth = i.health, this.leapForce = i.leapForce, this.health = this.maxHealth, this.chargePlayer = i.chargePlayer, this.viewRange = i.viewRange, this.drop = i.drop, this.dmg = i.dmg, this.hostile = i.hostile, this.dontRun = i.dontRun, this.hitRange = i.hitRange, this.hitDelay = i.hitDelay, this.hitScare = i.hitScare, this.spriteMlt = i.spriteMlt, this.nameScale = i.nameScale, this.colDmg = i.colDmg, this.noTrap = i.noTrap, this.spawnDelay = i.spawnDelay, this.hitWait = 0, this.waitCount = 1e3, this.moveCount = 0, this.targetDir = 0, this.active = !0, this.alive = !0, this.runFrom = null, this.chargeTarget = null, this.dmgOverTime = {}
                        };
                        let l = 0,
                            c = 0;
                        this.animate = function(e) {
                            this.animTime > 0 && (this.animTime -= e, this.animTime <= 0 ? (this.animTime = 0, this.dirPlus = 0, l = 0, c = 0) : 0 == c ? (l += e / (this.animSpeed * o.hitReturnRatio), this.dirPlus = i.lerp(0, this.targetAngle, Math.min(1, l)), l >= 1 && (l = 1, c = 1)) : (l -= e / (this.animSpeed * (1 - o.hitReturnRatio)), this.dirPlus = i.lerp(0, this.targetAngle, Math.max(0, l))))
                        }, this.startAnim = function() {
                            this.animTime = this.animSpeed = 600, this.targetAngle = .8 * Math.PI, l = 0, c = 0
                        }
                    }
                }, Z, Gt, null, a, zt),
                Zt = new class {
                    constructor() {
                        this.texts = [], this.stack = [], this.update = function(e, t, n, a) {
                            t.textBaseline = "middle", t.textAlign = "center";
                            for (let i = 0; i < this.texts.length; ++i) this.texts[i].life && (this.texts[i].update(e), this.texts[i].render(t, n, a))
                        }, this.showText = function(e, t, n, a, i, o, s) {
                            let r;
                            for (let e = 0; e < this.texts.length; ++e)
                                if (!this.texts[e].life) {
                                    r = this.texts[e];
                                    break
                                }
                            r || (r = new kt, this.texts.push(r)), r.init(e, t, n, a, i, o, s)
                        }
                    }
                },
                Kt = new class {
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
                        }, this.testCanPlace = function(n, i = -Math.PI / 2, o = Math.PI / 2, s = Math.PI / 18, r, l, c) {
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
                                for (let t = i; t < o; t += s) {
                                    m.attempts++;
                                    let i = r + t,
                                        o = Y.x2 + h * Math.cos(i),
                                        s = Y.y2 + h * Math.sin(i);
                                    u.find((t => t.active && e.getDistance(o, s, t.x, t.y) < p.scale + (t.blocker ? t.blocker : t.getScale(.6, t.isItem)))) || (18 != p.id && s >= a.mapScale / 2 - a.riverWidth / 2 && s <= a.mapScale / 2 + a.riverWidth / 2 || (!l && c ? c.inTrap ? e.getAngleDist(le.aim2 + Math.PI, i + Math.PI) <= 1.3 * Math.PI ? Tt(2, i, 1) : 15 == Y.items[4] && Tt(4, i, 1) : e.getAngleDist(le.aim2, i) <= a.gatherAngle / 2.6 ? Tt(2, i, 1) : 15 == Y.items[4] && Tt(4, i, 1) : Tt(n, i, 1), u.push({
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
                                    }), e.getAngleDist(le.aim2, i) <= 1 && m.placed++))
                                }
                                m.placed > 0 && l && p.dmg && le.dist2 <= t.weapons[Y.weapons[0]].range + 1.8 * Y.scale && d.spikeTick && (Qt.canSpikeTick = !0)
                            } catch (e) {}
                        }, this.checkSpikeTick = function() {
                            try {
                                if (![3, 4, 5].includes(le.primaryIndex)) return !1;
                                if (!ce.autoPush && (null == le.primaryIndex || le.reloads[le.primaryIndex] > L.tickRate)) return !1;
                                if (le.dist2 <= t.weapons[le.primaryIndex || 5].range + 1.8 * le.scale) {
                                    let n = t.list[9],
                                        i = le.scale + n.scale + (n.placeOffset || 0),
                                        o = 0,
                                        s = {
                                            attempts: 0,
                                            block: "unblocked"
                                        };
                                    for (let t = -1; t <= 1; t += .1) {
                                        s.attempts++;
                                        let r = e.getDirect(Y, le, 2, 2) + t,
                                            l = le.x2 + i * Math.cos(r),
                                            c = le.y2 + i * Math.sin(r);
                                        if (!ne.find((t => t.active && e.getDistance(l, c, t.x, t.y) < n.scale + (t.blocker ? t.blocker : t.getScale(.6, t.isItem)))) && !(c >= a.mapScale / 2 - a.riverWidth / 2 && c <= a.mapScale / 2 + a.riverWidth / 2)) {
                                            o++, s.block = "blocked";
                                            break
                                        }
                                    }
                                    if (o) {
                                        if (ce.anti0Tick = 1, spikes.near && getEl("atSpike").checked && !Gn.insta.wait && !antispiketick) {
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
                                if (n(le, Y) > n(le, Kt.info))
                                    for (let e = -Math.PI / 2; e < Math.PI / 2; e += Math.PI / 18) Dt(2, le.aim2 + e);
                                else if (n(le, Kt.info) > n(le, Y))
                                for (let e = -Math.PI / 2; e < Math.PI / 2; e += Math.PI / 18) Dt(4, le.aim2 + e)
                        }, this.autoPlace = function() {
                            if (se.length && d.autoPlace && !Qt.ticking && L.tick % (Math.max(1, parseInt(getEl("autoPlaceTick").value)) || 1) == 0)
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
                            n && d.autoReplace && pt && (this.antiTrapped || L.tickBase((() => {
                                let a = e.getDirect(n, Y, 0, 2),
                                    i = e.getDist(n, Y, 0, 2);
                                if (!(getEl("weaponGrind").checked && i <= t.weapons[Y.weaponIndex].range + Y.scale) && i <= 400 && le.dist2 <= 400) {
                                    !this.checkSpikeTick() && le.dist3 <= t.weapons[le.primaryIndex || 5].range + 1.8 * le.scale ? (this.testCanPlace(2, -Math.PI / 2, Math.PI / 2, Math.PI / 18, a, 1), this.testCanPlace(2, 0, 2 * Math.PI, Math.PI / 24, a, 1)) : 15 == Y.items[4] && this.testCanPlace(4, 0, 2 * Math.PI, Math.PI / 24, a, 1), this.replaced = !0
                                }
                            }), 1))
                        }
                    }
                }(zt, Gt),
                Qt = new class {
                    constructor() {
                        this.wait = !1, this.can = !1, this.isTrue = !1, this.nobull = !1, this.ticking = !1, this.canSpikeTick = !1, this.startTick = !1, this.readyTick = !1, this.canCounter = !1, this.revTick = !1, this.syncHit = !1, this.changeType = function(e) {
                            this.wait = !1, this.isTrue = !0, ce.autoAim = !0;
                            "rev" == e ? (z("6", "snoweiv3.1415926535897"), Ct(Y.weapons[1]), _t(53, 0), _t(21, 1), St(), L.tickBase((() => {
                                Ct(Y.weapons[0]), _t(7, 0), _t(18, 1), L.tickBase((() => {
                                    St(), this.isTrue = !1, ce.autoAim = !1
                                }), 1)
                            }), 1)) : "nobull" == e ? (Ct(Y.weapons[0]), _t(7, 0), St(), setTimeout((() => {
                                Ct(Y.weapons[1]), _t(0 == Y.reloads[53] ? 53 : 6, 0), setTimeout((() => {
                                    St(), this.isTrue = !1, ce.autoAim = !1
                                }), 255)
                            }), 105)) : "normal" == e ? (Ct(Y.weapons[0]), _t(7, 0), St(), setTimeout((() => {
                                Ct(Y.weapons[1]), _t(0 == Y.reloads[53] ? 53 : 6, 0), setTimeout((() => {
                                    St(), this.isTrue = !1, ce.autoAim = !1
                                }), 255)
                            }), 100)) : setTimeout((() => {
                                this.isTrue = !1, ce.autoAim = !1
                            }), 50)
                        }, this.spikeTickType = function() {
                            function e(t, a) {
                                const i = n();
                                return (e = function(e, t) {
                                    return i[e -= 428]
                                })(t, a)
                            }
                            const t = e;

                            function n() {
                                const e = ["isTrue", "457564gCvaSV", "10885830MiQKSV", "weapons", "Project Sheepy", "tickBase", "5080FVGhcW", "2682NqHuOF", "3rkOQDg", "1960ijtPVr", "send", "getDirect", "986276xcsTAD", "11264ueamRE", "999429zeDXOx", "1503516UpKOdB", "25BlUGnX"];
                                return (n = function() {
                                    return e
                                })()
                            }! function(t, n) {
                                const a = e,
                                    i = t();
                                for (;;) try {
                                    if (939373 === -parseInt(a(437)) / 1 + parseInt(a(435)) / 2 * (parseInt(a(431)) / 3) + -parseInt(a(441)) / 4 * (parseInt(a(439)) / 5) + parseInt(a(442)) / 6 + parseInt(a(438)) / 7 + -parseInt(a(429)) / 8 * (-parseInt(a(430)) / 9) + -parseInt(a(432)) / 10 * (parseInt(a(436)) / 11)) break;
                                    i.push(i.shift())
                                } catch (e) {
                                    i.push(i.shift())
                                }
                            }(n);
                            zt[t(434)](J, Y, 0, 2);
                            this[t(440)] = !0, ce.autoAim = !0, G[t(433)]("6", t(444)), Ct(Y[t(443)][0]), _t(7, 0), _t(21, 1), St(), L[t(428)]((() => {
                                const e = t;
                                Ct(Y[e(443)][0]), _t(53, 0), _t(21, 1), L[e(428)]((() => {
                                    St(), this.isTrue = !1, ce.autoAim = !1
                                }), 1)
                            }), 1)
                        }, this.counterType = function() {
                            this.isTrue = !0, ce.autoAim = !0, Ct(Y.weapons[0]), _t(7, 0), St(), L.tickBase((() => {
                                Ct(Y.weapons[0]), _t(53, 0), L.tickBase((() => {
                                    St(), this.isTrue = !1, ce.autoAim = !1
                                }), 1)
                            }), 1)
                        }, this.rangeType = function(e) {
                            this.isTrue = !0, ce.autoAim = !0, "ageInsta" == e ? (ce.ageInsta = !1, 18 == Y.items[5] && Tt(5, le.aim2), z("a", void 0, 1), _t(22, 0), _t(21, 1), L.tickBase((() => {
                                Ct(Y.weapons[1]), _t(53, 0), _t(21, 1), St(), L.tickBase((() => {
                                    bt(12), Ct(Y.weapons[1]), _t(53, 0), _t(21, 1), L.tickBase((() => {
                                        bt(15), Ct(Y.weapons[1]), _t(53, 0), _t(21, 1), L.tickBase((() => {
                                            St(), this.isTrue = !1, ce.autoAim = !1
                                        }), 1)
                                    }), 1)
                                }), 1)
                            }), 1)) : (Ct(Y.weapons[1]), 0 == Y.reloads[53] && le.dist2 <= 700 && 22 != le.skinIndex ? _t(53, 0) : _t(20, 0), _t(11, 1), St(), L.tickBase((() => {
                                St(), this.isTrue = !1, ce.autoAim = !1
                            }), 1))
                        }, this.oneTickType = function() {
                            this.tickin = !0, this.isTrue = !0, ce.autoAim = !0, Bt(), _t(11, 1), z("a", le.aim2, 1), L.tickBase((() => {
                                15 == Y.weapons[1] && (ce.revAim = !0), Ct(Y.weapons[[9, 12, 13, 15].includes(Y.weapons[1]) ? 1 : 0]), _t(53, 0), _t(11, 1), [9, 12, 13, 15].includes(Y.weapons[1]) && St(), z("a", le.aim2, 1), Tt(4, le.aim2), G.send("6", "1 Tick Pass"), L.tickBase((() => {
                                    ce.revAim = !1, Ct(Y.weapons[0]), _t(7, 0), _t(19, 1), [9, 12, 13, 15].includes(Y.weapons[1]) || St(), z("a", le.aim2, 1), L.tickBase((() => {
                                        St(), this.isTrue = !1, ce.autoAim = !1, z("a", void 0, 1), this.tickin = !1
                                    }), 1)
                                }), 1)
                            }), 1)
                        }, this.threeOneTickType = function() {
                            this.isTrue = !0, ce.autoAim = !0, Ct(Y.weapons[0]), _t(11, 1), z("a", le.aim2, 1), L.tickBase((() => {
                                Ct(Y.weapons[0]), _t(53, 0), _t(11, 1), z("a", le.aim2, 1), L.tickBase((() => {
                                    Ct(Y.weapons[0]), _t(7, 0), _t(19, 1), St(), z("a", le.aim2, 1), L.tickBase((() => {
                                        St(), this.isTrue = !1, ce.autoAim = !1, z("a", void 0, 1)
                                    }), 1)
                                }), 1)
                            }), 1)
                        }, this.kmTickType = function() {
                            this.isTrue = !0, ce.autoAim = !0, ce.revAim = !0, Ct(Y.weapons[1]), _t(53, 0), _t(11, 1), St(), z("a", le.aim2, 1), L.tickBase((() => {
                                ce.revAim = !1, Ct(Y.weapons[0]), _t(7, 0), _t(19, 1), z("a", le.aim2, 1), L.tickBase((() => {
                                    St(), this.isTrue = !1, ce.autoAim = !1, z("a", void 0, 1)
                                }), 2)
                            }), 2)
                        }, this.boostTickType = function() {
                            Ie("lol"), this.isTrue = !0, ce.autoAim = !0, Bt(), _t(11, 1), z("a", le.aim2, 1), L.tickBase((() => {
                                15 == Y.weapons[1] && (ce.revAim = !0), Ct(Y.weapons[[9, 12, 13, 15].includes(Y.weapons[1]) ? 1 : 0]), _t(53, 0), _t(11, 1), [9, 12, 13, 15].includes(Y.weapons[1]) && St(), z("a", le.aim2, 1), Tt(4, le.aim2), L.tickBase((() => {
                                    ce.revAim = !1, Ct(Y.weapons[0]), _t(7, 0), _t(19, 1), [9, 12, 13, 15].includes(Y.weapons[1]) || St(), z("a", le.aim2, 1), L.tickBase((() => {
                                        St(), this.isTrue = !1, ce.autoAim = !1, z("a", void 0, 1)
                                    }), 1)
                                }), 1)
                            }), 1)
                        }, this.gotoGoal = function(e, t) {
                            let n = e => e * a.playerScale,
                                i = e - t,
                                o = e + t,
                                s = e - n(1),
                                r = e + n(1),
                                l = e - n(2),
                                c = e + n(2),
                                p = e - n(4),
                                h = e + n(4),
                                m = function(e, t) {
                                    Y.y2 >= a.mapScale / 2 - a.riverWidth / 2 && Y.y2 <= a.mapScale / 2 + a.riverWidth / 2 && 0 == t ? _t(31, 0) : _t(e, t)
                                };
                            if (se.length) {
                                let e = le.dist2;
                                return this.ticking = !0, e >= i && e <= o ? (m(22, 0), m(11, 1), (Y.weaponIndex != Y.weapons[[10, 14].includes(Y.weapons[1]) ? 1 : 0] || Y.buildIndex > -1) && Ct(Y.weapons[[10, 14].includes(Y.weapons[1]) ? 1 : 0]), {
                                    dir: void 0,
                                    action: 1
                                }) : e < i ? (e >= p ? e >= l ? e >= s ? (m(40, 0), m(10, 1), d.slowOT ? Y.buildIndex != Y.items[1] && It(Y.items[1]) : (Y.weaponIndex != Y.weapons[[10, 14].includes(Y.weapons[1]) ? 1 : 0] || Y.buildIndex > -1) && Ct(Y.weapons[[10, 14].includes(Y.weapons[1]) ? 1 : 0])) : (m(22, 0), m(19, 1), (Y.weaponIndex != Y.weapons[[10, 14].includes(Y.weapons[1]) ? 1 : 0] || Y.buildIndex > -1) && Ct(Y.weapons[[10, 14].includes(Y.weapons[1]) ? 1 : 0])) : (m(6, 0), m(12, 1), (Y.weaponIndex != Y.weapons[[10, 14].includes(Y.weapons[1]) ? 1 : 0] || Y.buildIndex > -1) && Ct(Y.weapons[[10, 14].includes(Y.weapons[1]) ? 1 : 0])) : (Bt(), m(11, 1), (Y.weaponIndex != Y.weapons[[10, 14].includes(Y.weapons[1]) ? 1 : 0] || Y.buildIndex > -1) && Ct(Y.weapons[[10, 14].includes(Y.weapons[1]) ? 1 : 0])), {
                                    dir: le.aim2 + Math.PI,
                                    action: 0
                                }) : e > o ? (e <= h ? e <= c ? e <= r ? (m(40, 0), m(9, 1), d.slowOT ? Y.buildIndex != Y.items[1] && It(Y.items[1]) : (Y.weaponIndex != Y.weapons[[10, 14].includes(Y.weapons[1]) ? 1 : 0] || Y.buildIndex > -1) && Ct(Y.weapons[[10, 14].includes(Y.weapons[1]) ? 1 : 0])) : (m(22, 0), m(19, 1), (Y.weaponIndex != Y.weapons[[10, 14].includes(Y.weapons[1]) ? 1 : 0] || Y.buildIndex > -1) && Ct(Y.weapons[[10, 14].includes(Y.weapons[1]) ? 1 : 0])) : (m(6, 0), m(12, 1), (Y.weaponIndex != Y.weapons[[10, 14].includes(Y.weapons[1]) ? 1 : 0] || Y.buildIndex > -1) && Ct(Y.weapons[[10, 14].includes(Y.weapons[1]) ? 1 : 0])) : (Bt(), m(11, 1), (Y.weaponIndex != Y.weapons[[10, 14].includes(Y.weapons[1]) ? 1 : 0] || Y.buildIndex > -1) && Ct(Y.weapons[[10, 14].includes(Y.weapons[1]) ? 1 : 0])), {
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
                            let e = this.gotoGoal([10, 14].includes(Y.weapons[1]) && Y.y2 > a.snowBiomeTop ? 233 : 15 == Y.weapons[1] ? 250 : Y.y2 <= a.snowBiomeTop ? [10, 14].includes(Y.weapons[1]) ? 227 : 235 : 250, 3);
                            e.action && 0 == Y.reloads[53] && !this.isTrue && this.startTick ? (_("Dev", "One Tick Pass", "lightblue"), this.oneTickType()) : z("a", e.dir, 1)
                        }, this.kmTickMovement = function() {
                            let e = this.gotoGoal(240, 3);
                            e.action ? 22 == le.skinIndex || 0 != Y.reloads[53] || this.isTrue || (L.tick - le.poisonTick) % a.serverUpdateRate != 8 ? z("a", e.dir, 1) : this.kmTickType() : z("a", e.dir, 1)
                        }, this.boostTickMovement = function() {
                            let e = 9 == Y.weapons[1] ? 365 : 12 == Y.weapons[1] ? 380 : 13 == Y.weapons[1] ? 390 : 15 == Y.weapons[1] ? 365 : 370,
                                t = 9 == Y.weapons[1] ? 2 : 12 == Y.weapons[1] || 13 == Y.weapons[1] ? 1.5 : 15 == Y.weapons[1] ? 2 : 3,
                                n = this.gotoGoal(e, t);
                            n.action ? 0 != Y.reloads[53] || this.isTrue ? z("a", n.dir, 1) : this.boostTickType() : z("a", n.dir, 1)
                        }, this.perfCheck = function(e, t) {
                            if (11 == t.weaponIndex && zt.getAngleDist(t.aim2 + Math.PI, t.d2) <= a.shieldAngle) return !1;
                            if (![9, 12, 13, 15].includes(Y.weapons[1])) return !0;
                            let n = {
                                x: t.x2 + 70 * Math.cos(t.aim2 + Math.PI),
                                y: t.y2 + 70 * Math.sin(t.aim2 + Math.PI)
                            };
                            if (zt.lineInRect(e.x2 - e.scale, e.y2 - e.scale, e.x2 + e.scale, e.y2 + e.scale, n.x, n.y, n.x, n.y)) return !0;
                            let i = ais.filter((e => e.visible)).find((e => {
                                if (zt.lineInRect(e.x2 - e.scale, e.y2 - e.scale, e.x2 + e.scale, e.y2 + e.scale, n.x, n.y, n.x, n.y)) return !0
                            }));
                            return !i && (i = te.filter((e => e.active)).find((e => {
                                let t = e.getScale();
                                if (!e.ignoreCollision && zt.lineInRect(e.x - t, e.y - t, e.x + t, e.y + t, n.x, n.y, n.x, n.y)) return !0
                            })), !i)
                        }
                    }
                },
                en = new class {
                    constructor(e, t) {
                        this.hat = function() {
                            e.forEach((e => {
                                let t = Ce(Yt, e);
                                t && !Y.skins[e] && Y.points >= t.price && z("c", 1, e, 0)
                            }))
                        }, this.acc = function() {
                            t.forEach((e => {
                                let t = Ce(Xt, e);
                                t && !Y.tails[e] && Y.points >= t.price && z("c", 1, e, 1)
                            }))
                        }
                    }
                }([6, 7, 22, 12, 53, 40, 15, 31, 20], [11, 13, 19, 18, 21]),
                tn = (new class {
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
                nn = [],
                an = [],
                on = [],
                sn = {
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

            function Ie(e) {
                z("6", e.slice(0, 30))
            }
            let rn = [];

            function ln(e, t, n, i, o, s, r, l) {
                let c = 0 == s ? 9 : 2 == s ? 12 : 3 == s ? 13 : 5 == s && 15,
                    d = 2 * a.playerScale,
                    p = {
                        x: 1 == s ? e : e - d * Math.cos(n),
                        y: 1 == s ? t : t - d * Math.sin(n)
                    },
                    h = Z.filter((e => e.visible && zt.getDist(p, e, 0, 2) <= e.scale)).sort((function(e, t) {
                        return zt.getDist(p, e, 0, 2) - zt.getDist(p, t, 0, 2)
                    }))[0];
                h && (1 == s ? h.shooting[53] = 1 : (h.shootIndex = c, h.shooting[1] = 1, function(e, t, n, a, i, o) {
                    e.isTeam(Y) || (Ye = zt.getDirect(Y, e, 2, 2), zt.getAngleDist(Ye, t) <= .2 && (e.bowThreat[o]++, 5 == i && cn++, setTimeout((() => {
                        e.bowThreat[o]--, 5 == i && cn--
                    }), n / a), (e.bowThreat[9] >= 1 && (e.bowThreat[12] >= 1 || e.bowThreat[15] >= 1) || cn >= 2) && (Tt(1, e.aim2), ce.anti0Tick = 4, ce.antiSync || Pt())))
                }(h, n, i, o, s, c)))
            }
            let cn = 0;

            function dn(e, t, n) {
                if (Y && e)
                    if (zt.removeAllChildren(je), je.classList.add("visible"), zt.generateElement({
                            id: "itemInfoName",
                            text: zt.capitalizeFirst(e.name),
                            parent: je
                        }), zt.generateElement({
                            id: "itemInfoDesc",
                            text: e.desc,
                            parent: je
                        }), n);
                    else if (t) zt.generateElement({
                    class: "itemInfoReq",
                    text: e.type ? "secondary" : "primary",
                    parent: je
                });
                else {
                    for (let t = 0; t < e.req.length; t += 2) zt.generateElement({
                        class: "itemInfoReq",
                        html: e.req[t] + "<span class='itemInfoReqVal'> x" + e.req[t + 1] + "</span>",
                        parent: je
                    });
                    e.group.limit && zt.generateElement({
                        class: "itemInfoLmt",
                        text: (Y.itemCounts[e.group.id] || 0) + "/" + (a.isSandbox ? 99 : e.group.limit),
                        parent: je
                    })
                } else je.classList.remove("visible")
            }

            function pn() {
                qe = window.innerWidth, Ve = window.innerHeight;
                let e = Math.max(qe / $e, Ve / Je) * Ze;
                Ue.width = qe * Ze, Ue.height = Ve * Ze, Ue.style.width = qe + "px", Ue.style.height = Ve + "px", Ee.setTransform(e, 0, 0, e, (qe * Ze - $e * e) / 2, (Ve * Ze - Je * e) / 2)
            }
            window.addEventListener("resize", zt.checkTrusted(pn)), pn();
            const hn = document.getElementById("touch-controls-fullscreen");
            hn.style.display = "block", hn.addEventListener("mousemove", (function(e) {
                Qe = e.clientX, et = e.clientY
            }), !1);
            let mn = {
                left: !1,
                middle: !1,
                right: !1
            };

            function un() {
                return Y ? (Y.lockDir || (Xe = Math.atan2(et - Ve / 2, Qe - qe / 2)), Xe || 0) : 0
            }
            hn.addEventListener("mousedown", (function(e) {
                1 != dt && (dt = 1, 0 == e.button ? mn.left = !0 : 1 == e.button ? mn.middle = !0 : 2 == e.button && (mn.right = !0))
            }), !1), hn.addEventListener("mouseup", zt.checkTrusted((function(e) {
                0 != dt && (dt = 0, 0 == e.button ? mn.left = !1 : 1 == e.button ? mn.middle = !1 : 2 == e.button && (mn.right = !1))
            }))), hn.addEventListener("wheel", (function(e) {
                e.deltaY < 0 ? (wbe += .005, $e = a.maxScreenWidth * wbe, Je = a.maxScreenHeight * wbe, pn()) : (wbe -= .005, $e = a.maxScreenWidth * wbe, Je = a.maxScreenHeight * wbe, pn())
            }), !1);
            Date.now();

            function gn(e) {
                if (e) {
                    if (!Y) return "0";
                    if (ce.autoAim || (mn.left || A && le.dist2 <= Gt.weapons[Y.weapons[0]].range + 1.8 * le.scale && !Kt.inTrap) && 0 == Y.reloads[Y.weapons[0]]) Xe = getEl("weaponGrind").checked ? "getSafeDir()" : se.length ? ce.revAim ? "(near.aim2 + Math.PI)" : "near.aim2" : "getSafeDir()";
                    else if (mn.right && 0 == Y.reloads[10 == Y.weapons[1] ? Y.weapons[1] : Y.weapons[0]]) Xe = "getSafeDir()";
                    else if (Kt.inTrap && 0 == Y.reloads[Kt.notFast() ? Y.weapons[1] : Y.weapons[0]]) Xe = "traps.aim";
                    else if (!Qt.isTrue && Wt && 0 == Y.reloads[Rt() ? Y.weapons[1] : Y.weapons[0]]) Xe = "aimSpike";
                    else if (!Y.lockDir) {
                        if (d.noDir) return "undefined";
                        Xe = "getSafeDir()"
                    }
                    return Xe
                }
                if (!Y) return 0;
                if (ce.autoAim || (mn.left || A && le.dist2 <= Gt.weapons[Y.weapons[0]].range + 1.8 * le.scale && !Kt.inTrap) && 0 == Y.reloads[Y.weapons[0]]) Xe = getEl("weaponGrind").checked ? un() : se.length ? ce.revAim ? le.aim2 + Math.PI : le.aim2 : un();
                else if (mn.right && 0 == Y.reloads[10 == Y.weapons[1] ? Y.weapons[1] : Y.weapons[0]]) Xe = un();
                else if (Kt.inTrap && 0 == Y.reloads[Kt.notFast() ? Y.weapons[1] : Y.weapons[0]]) Xe = Kt.aim;
                else if (!Qt.isTrue && Wt && 0 == Y.reloads[Rt() ? Y.weapons[1] : Y.weapons[0]]) Xe = Ht;
                else if (!Y.lockDir) {
                    if (d.noDir) return;
                    Xe = un()
                }
                return Xe || 0
            }

            function fn() {
                return "block" != tt.style.display && "block" != We.style.display && !x
            }

            function yn() {
                if (Vn) z("a", void 0, 1);
                else {
                    let e = function() {
                        let e = 0,
                            t = 0;
                        for (let n in ct) {
                            let a = ct[n];
                            e += !!lt[n] * a[0], t += !!lt[n] * a[1]
                        }
                        return 0 == e && 0 == t ? void 0 : Math.atan2(t, e)
                    }();
                    (null == B || null == e || Math.abs(e - B) > .3) && (ce.autoPush || Vn || z("a", e, 1), B = e)
                }
            }

            function wn(e) {
                return (Y.scale + e.getScale()) / (Y.maxSpeed * Gt.weapons[Y.weaponIndex].spdMult) + (e.dmg && !e.isTeamObject(Y) ? 35 : 0)
            }

            function kn() {
                on = [],
                    function() {
                        let e = te.filter((e => Y.canSee(e) && e.active));
                        for (let t = 0; t < sn.grid; t++) {
                            on[t] = [];
                            for (let n = 0; n < sn.grid; n++) {
                                let a = {
                                    x: Y.x2 - sn.scale / 2 + sn.scale / sn.grid * n,
                                    y: Y.y2 - sn.scale / 2 + sn.scale / sn.grid * t
                                };
                                if (zt.getDist(sn.chaseNear ? le : sn, a, sn.chaseNear ? 2 : 0, 0) <= (sn.chaseNear ? 35 : 60)) {
                                    sn.lastX = n, sn.lastY = t, on[t][n] = 0;
                                    continue
                                }
                                let i = e.find((e => zt.getDist(e, a, 0, 0) <= wn(e)));
                                if (i) {
                                    if (i.trap) {
                                        on[t][n] = 0;
                                        continue
                                    }
                                    on[t][n] = 1
                                } else on[t][n] = 0
                            }
                        }
                    }()
            }
            addEventListener("keydown", zt.checkTrusted((function(e) {
                let t = e.which || e.keyCode || 0;
                Y && Y.alive && fn() && (lt[t] || (lt[t] = 1, ht[e.key] = 1, 27 == t ? (O = !O, $("#menuDiv").toggle(), $("#menuChatDiv").toggle()) : 69 == t ? St() : 66 == t ? Qt.syncTry() : 67 == t ? (tn.x = Y.x, tn.y = Y.y) : null != Y.weapons[t - 49] ? Y.weaponCode = Y.weapons[t - 49] : ct[t] ? yn() : "0" == e.key ? G.send("6", "snoweiv3.1415926535897") : "C" == e.key ? syncChat(getEl("songs").value) : "/" == e.key ? (S(), "function" == typeof window.debug && window.debug(), G.send("6", "Success Reset Chat / Debug")) : "m" == e.key ? mt.placeSpawnPads = !mt.placeSpawnPads : "z" == e.key ? mt.place = !mt.place : "Z" == e.key ? "function" == typeof window.debug && window.debug() : 32 == t && (z("d", 1, un(), 1), z("d", 0, un(), 1))))
            }))), window.addEventListener("keyup", zt.checkTrusted((function(e) {
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
                            t.found ? "function" == typeof t.fv.action && t.fv.action(v.value) : Ie(v.value), v.value = "", v.blur()
                        } else x ? v.blur() : v.focus()
                    }() : fn() && lt[t] && (lt[t] = 0, ht[e.key] = 0, ct[t] && yn())
                }
            })));
            let vn = [];

            function xn(e = void 0) {
                for (let t = 3; t < Gt.list.length; ++t) {
                    let n = Gt.list[t].group.id,
                        a = Gt.weapons.length + t;
                    vn[a] ? e == n && (vn[a].innerHTML = Y.itemCounts[e] || 0) : (vn[a] = document.createElement("div"), vn[a].id = "itemCount" + a, getEl("actionBarItem" + a).appendChild(vn[a]), vn[a].style = "\n                        display: block;\n                        position: absolute;\n                        padding-left: 5px;\n                        font-size: 2em;\n                        color: #fff;\n                        ", vn[a].innerHTML = Y.itemCounts[n] || 0)
                }
            }

            function bn(e) {
                K = e.teams
            }

            function _n(e) {
                lt = {}, ht = {}, X = e, dt = 0, pt = !0, z("d", 0, gn(), 1), ce.ageInsta = !0, rt && (rt = !1, te.length = 0, ne.length = 0)
            }

            function In(e, t) {
                let n = (i = e[0], Ce(Z, i));
                var i;
                n || (n = new xt(e[0], e[1], a, zt, $t, Ft, Z, ais, Gt, Yt, Xt), Z.push(n)), e[1] != X && _(null, `Found ${e[2]} {${e[1]}}`, "lime"), n.spawn(!!t || null), n.visible = !1, n.oldPos = {
                    x2: void 0,
                    y2: void 0
                }, n.x2 = void 0, n.y2 = void 0, n.x3 = void 0, n.y3 = void 0, n.setData(e), t && (Y || window.prepareUI(n), Y = n, Fe = Y.x, Ne = Y.y, ce.lastDir = 0, ta(), Mn(), xn(), Y.skins[7] && (ce.reSync = !0))
            }

            function Cn(e) {
                for (let t = 0; t < Z.length; t++)
                    if (Z[t].id == e) {
                        _("Game", Z[t].name + "[" + Z[t].sid + "] left the game", "red"), Z.splice(t, 1);
                        break
                    }
            }

            function Sn(e, t) {
                J = Te(e), J && (J.oldHealth = J.health, J.health = t, J.judgeShame(), J.oldHealth > J.health && (J.damaged = J.oldHealth - J.health, Ot.push([e, t, J.damaged])))
            }

            function Tn() {
                pt = !1, Lt = {
                    x: Y.x,
                    y: Y.y
                }, d.autoRespawn && (getEl("diedText").style.display = "none", z("M", {
                    name: V[0],
                    moofoll: V[1],
                    skin: V[2]
                }))
            }

            function Dn(e, t) {
                Y && (Y.itemCounts[e] = t, xn(e))
            }

            function Mn(e, t, n) {
                null != e && (Y.XP = e), null != t && (Y.maxXP = t), null != n && (Y.age = n)
            }

            function Un(e, t) {
                if (Y.upgradePoints = e, Y.upgrAge = t, e > 0) {
                    Vt.length = 0, zt.removeAllChildren(Ae);
                    for (let e = 0; e < Gt.weapons.length; ++e)
                        if (Gt.weapons[e].age == t && (null == Gt.weapons[e].pre || Y.weapons.indexOf(Gt.weapons[e].pre) >= 0)) {
                            zt.generateElement({
                                id: "upgradeItem" + e,
                                class: "actionBarItem",
                                onmouseout: function() {
                                    dn()
                                },
                                parent: Ae
                            }).style.backgroundImage = getEl("actionBarItem" + e).style.backgroundImage, Vt.push(e)
                        }
                    for (let e = 0; e < Gt.list.length; ++e)
                        if (Gt.list[e].age == t && (null == Gt.list[e].pre || Y.items.indexOf(Gt.list[e].pre) >= 0)) {
                            let t = Gt.weapons.length + e;
                            zt.generateElement({
                                id: "upgradeItem" + t,
                                class: "actionBarItem",
                                onmouseout: function() {
                                    dn()
                                },
                                parent: Ae
                            }).style.backgroundImage = getEl("actionBarItem" + t).style.backgroundImage, Vt.push(t)
                        }
                    for (let e = 0; e < Vt.length; e++) ! function(e) {
                        let t = getEl("upgradeItem" + e);
                        t.onclick = zt.checkTrusted((function() {
                            z("H", e)
                        })), zt.hookTouchEvents(t)
                    }(Vt[e]);
                    Vt.length ? (Ae.style.display = "block", Re.style.display = "block", Re.innerHTML = "SELECT ITEMS (" + e + ")") : (Ae.style.display = "none", Re.style.display = "none", dn())
                } else Ae.style.display = "none", Re.style.display = "none", dn()
            }

            function En(e, t) {
                const n = Pn();
                return (En = function(e, t) {
                    return n[e -= 223]
                })(e, t)
            }

            function Pn() {
                const e = ["send", "Auto Spike Tick", "8YphnCx", "527168azlACX", "#00ff73", "23220HlBCcl", "1815317jBsgzR", "6DhJSqX", "184841nQOhDp", "showText", "118660MudszC", "aim2", "267342lmZHhF", "23700YNYyAX", "936IuVCJX", "getDirect", " Test Spike Tick "];
                return (Pn = function() {
                    return e
                })()
            }

            function Bn() {
                const e = En;
                let t = zt[e(232)](J, Y, 0, 2);
                _t(7, 0), _t(18, 1), Ct(Y.weapons[0]), G[e(234)]("d", 1, le[e(228)]), Zt[e(226)](Y.x2, Y.y2, 30, .1, 1850, e(235), e(238), 2), Tt(2, t), Tt(2, le[e(228)]);
                for (let t = 0; t < 4; t++) G[e(234)]("6", e(233)), Dt(2, le[e(228)] - 90 + 45 * t);
                jn((() => {
                    _t(53, 0), _t(21, 1), jn((() => {
                        const e = En;
                        G[e(234)]("d", 0, le[e(228)]), _t(6, 0)
                    }), 3)
                }), 1)
            }! function(e, t) {
                const n = En,
                    a = e();
                for (;;) try {
                    if (145791 === -parseInt(n(225)) / 1 + parseInt(n(239)) / 2 + -parseInt(n(224)) / 3 * (-parseInt(n(237)) / 4) + parseInt(n(227)) / 5 + parseInt(n(229)) / 6 + -parseInt(n(223)) / 7 * (parseInt(n(236)) / 8) + parseInt(n(231)) / 9 * (parseInt(n(230)) / 10)) break;
                    a.push(a.shift())
                } catch (e) {
                    a.push(a.shift())
                }
            }(Pn),
            function(e, t) {
                const n = Rn,
                    a = e();
                for (;;) try {
                    if (495072 === parseInt(n(495)) / 1 * (-parseInt(n(482)) / 2) + parseInt(n(490)) / 3 + -parseInt(n(502)) / 4 + parseInt(n(488)) / 5 * (-parseInt(n(479)) / 6) + -parseInt(n(475)) / 7 * (-parseInt(n(487)) / 8) + -parseInt(n(491)) / 9 * (-parseInt(n(500)) / 10) + parseInt(n(498)) / 11) break;
                    a.push(a.shift())
                } catch (e) {
                    a.push(a.shift())
                }
            }(Hn);
            const On = (e, t) => {
                    const n = Rn,
                        a = 10 !== t.weapons[1] || Y.reloads[t.weapons[1]] ? 0 : 1,
                        i = t[n(506)][a];
                    if (Y[n(503)][i]) return 0;
                    const o = Gt[n(506)][i],
                        s = ui(e, t) <= e[n(496)]() + o[n(497)];
                    return t[n(504)] && s ? o[n(499)] * (o[n(480)] || 1) * 3.3 : 0
                },
                An = () => {
                    const e = Rn,
                        t = [],
                        n = (Y.x, Y.y, te[e(492)]);
                    for (let a = 0; a < n; a++) {
                        const n = te[a];
                        if (n[e(493)] && n[e(508)] && n.health > 0) {
                            const a = Gt[e(501)][n.id],
                                i = 35 + a[e(505)] + (a[e(483)] || 0);
                            if (ui(n, Y) <= 2 * i) {
                                let a = 0;
                                const i = Z[e(492)];
                                for (let e = 0; e < i; e++) a += On(n, Z[e]);
                                n.health <= a && t[e(478)](n)
                            }
                        }
                    }
                    const a = () => {
                        const n = e;
                        let a = ne[n(494)]((e => e[n(489)] && e[n(508)] && e[n(481)](Y) && ui(e, Y) <= e[n(496)]() + 5));
                        const i = te[n(477)]((e => e.dmg && e[n(508)] && e.isTeamObject(Y) && ui(e, Y) < 87 && !a[n(492)])) ? 4 : 2;
                        t[n(485)]((t => {
                            const a = n;
                            let o = ((t, n, a) => {
                                const i = e;
                                if (!a) return null;
                                const o = 2 * Math.PI,
                                    s = Math.PI / 360,
                                    r = Gt[i(501)][t[i(484)][n]];
                                let l = Math.atan2(a.y - t.y, a.x - t.x);
                                t[i(505)], r[i(505)], r[i(483)];
                                for (let e = 0; e < o; e += s) {
                                    let t = [(l + e) % o, (l - e + o) % o];
                                    for (let e of t) return e
                                }
                                return null
                            })(Y, i, t);
                            null !== o && (Tt(i, o), 4 == i ? Zt.showText(Y.x2, Y.y2, 30, .15, 1850, "Trap Preplace", a(486), 2) : 2 == i && Zt[a(507)](Y.x2, Y.y2, 30, .15, 1850, "Spike Preplace", a(486), 2))
                        }))
                    };
                    le && le[e(476)] <= 360 && a()
                };

            function Rn(e, t) {
                const n = Hn();
                return (Rn = function(e, t) {
                    return n[e -= 475]
                })(e, t)
            }

            function Hn() {
                const e = ["#fff", "136mVzjEH", "5dSOfcP", "trap", "1860297HuBgTp", "36rYSJjS", "length", "isItem", "filter", "51DpHCEa", "getScale", "range", "450329wOtNEr", "dmg", "1835530UjnEkx", "list", "1718844BEDDAB", "reloads", "visible", "scale", "weapons", "showText", "active", "100527oZMABi", "dist3", "find", "push", "1948866XWDNrH", "sDmg", "isTeamObject", "15286bMiZeV", "placeOffset", "items", "forEach"];
                return (Hn = function() {
                    return e
                })()
            }

            function Wn(e) {
                let t = Me(e);
                if (Ft.disableBySid(e), An(), Y) {
                    for (let t = 0; t < oe.length; t++)
                        if (oe[t].sid == e) {
                            oe.splice(t, 1);
                            break
                        }
                    Y.canSee(t) || an.push({
                        x: t.x,
                        y: t.y
                    }), an.length > 8 && an.shift(), Kt.replacer(t)
                }
                let n = le,
                    a = Y,
                    i = (ui(a, n), qn(a, n), Math.atan2(t.y - Y.y2, t.x - Y.x2), Math.hypot(t.y - Y.y2, t.x - Y.x2));
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
                    for (var n = r, a = e();;) try {
                        if (944262 === -parseInt(n(389)) / 1 * (parseInt(n(384)) / 2) + -parseInt(n(386)) / 3 * (parseInt(n(391)) / 4) + -parseInt(n(392)) / 5 * (parseInt(n(383)) / 6) + -parseInt(n(390)) / 7 * (parseInt(n(387)) / 8) + -parseInt(n(382)) / 9 + parseInt(n(385)) / 10 + parseInt(n(393)) / 11) break;
                        a.push(a.shift())
                    } catch (e) {
                        a.push(a.shift())
                    }
                }(s), i <= 200 && function(e, t) {
                    try {
                        return Math.hypot((t.y2 || t.y) - (e.y2 || e.y), (t.x2 || t.x) - (e.x2 || e.x))
                    } catch (e) {
                        return 1 / 0
                    }
                }(Y, J) <= 168 && J != Y && 0 == Y[o(394)][Y[o(388)][0]] && Bn()
            }

            function Ln(e) {
                Y && Ft.removeAllItems(e)
            }

            function jn(e, t) {
                N.manage[N.tick + t] ? N.manage[N.tick + t].push(e) : N.manage[N.tick + t] = [e]
            }

            function qn(e, t) {
                try {
                    return Math.atan2((t.y2 || t.y) - (e.y2 || e.y), (t.x2 || t.x) - (e.x2 || e.x))
                } catch (e) {
                    return 0
                }
            }
            let Vn = !1,
                zn = !1,
                Gn = {
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

            function Fn(e) {
                Y.shameCount > 0 ? ce.reSync = !0 : ce.reSync = !1, L.tick++, se = [], re = [], le = [], L.tickSpeed = performance.now() - L.lastTick, L.lastTick = performance.now(), Z.forEach((e => {
                    e.forcePos = !e.visible, e.visible = !1, e.timeHealed - e.timeDamaged > 0 && e.lastshamecount < e.shameCount && (e.pinge = e.timeHealed - e.timeDamaged)
                }));
                for (let p = 0; p < e.length;) {
                    if (J = Te(e[p]), J) {
                        J.t1 = void 0 === J.t2 ? L.lastTick : J.t2, J.t2 = L.lastTick, J.oldPos.x2 = J.x2, J.oldPos.y2 = J.y2, J.x1 = J.x, J.y1 = J.y, J.x2 = e[p + 1], J.y2 = e[p + 2], J.x3 = J.x2 + (J.x2 - J.oldPos.x2), J.y3 = J.y2 + (J.y2 - J.oldPos.y2), J.d1 = void 0 === J.d2 ? e[p + 3] : J.d2, J.d2 = e[p + 3], J.dt = 0, J.buildIndex = e[p + 4], J.weaponIndex = e[p + 5], J.weaponVariant = e[p + 6], J.team = e[p + 7], J.isLeader = e[p + 8], J.oldSkinIndex = J.skinIndex, J.oldTailIndex = J.tailIndex, J.skinIndex = e[p + 9], J.tailIndex = e[p + 10], J.iconIndex = e[p + 11], J.zIndex = e[p + 12], J.visible = !0, J.update(L.tickSpeed), J.dist2 = zt.getDist(J, Y, 2, 2), J.aim2 = zt.getDirect(J, Y, 2, 2), J.dist3 = zt.getDist(J, Y, 3, 3), J.aim3 = zt.getDirect(J, Y, 3, 3), J.damageThreat = 0, 45 == J.skinIndex && J.shameTimer <= 0 && J.addShameTimer(), 45 == J.oldSkinIndex && 45 != J.skinIndex && (J.shameTimer = 0, J.shameCount = 0, J == Y && Et()), o.forEach((e => {
                            e.showName = "YEAHHH"
                        }));
                        for (let h = 0; h < Z.length; h++)
                            for (let m = 0; m < o.length; m++) Y.id === m.id && (m.showName = "YEAHHHHHH");
                        if (Y.shameCount < 4 && le.dist3 <= 300 && le.reloads[le.primaryIndex] <= L.tickRate * (window.pingTime >= 200 ? 2 : 1) ? (zn = !0, Et()) : (zn && Et(), zn = !1), J == Y)
                            if (ne.length) {
                                ne.forEach((e => {
                                    e.onNear = !1, e.active && (!e.onNear && zt.getDist(e, J, 0, 2) <= e.scale + Gt.weapons[J.weapons[0]].range && (e.onNear = !0), e.isItem && e.owner && !e.pps && J.sid == e.owner.sid && zt.getDist(e, J, 0, 2) > (parseInt(getEl("breakRange").value) || 0) && !e.breakObj && ![13, 14, 20].includes(e.id) && (e.breakObj = !0, oe.push({
                                        x: e.x,
                                        y: e.y,
                                        sid: e.sid
                                    })))
                                }));
                                let u = ne.filter((e => e.trap && e.active && zt.getDist(e, J, 0, 2) <= J.scale + e.getScale() + 25 && !e.isTeamObject(J))).sort((function(e, t) {
                                    return zt.getDist(e, J, 0, 2) - zt.getDist(t, J, 0, 2)
                                }))[0];
                                if (u) {
                                    let y = te.filter((e => e.dmg && ui(J, e) <= J.scale + u.scale / 2 && !e.isTeamObject(J) && e.active))[0];
                                    Kt.dist = zt.getDist(u, J, 0, 2), Kt.aim = zt.getDirect(y || u, J, 0, 2), Kt.protect(qn(u, J) - Math.PI), Kt.inTrap = !0, Kt.info = u
                                } else Kt.inTrap = !1, Kt.info = {};

                                function t(e, a) {
                                    const i = n();
                                    return (t = function(e, t) {
                                        return i[e -= 215]
                                    })(e, a)
                                }

                                function n() {
                                    const e = ["active", "8NFvDoe", "getDist", "1119nDyFxw", "189028atfbQV", "isTrue", "312KkOAnL", "1751495NyzGyK", "4444029GJFNrp", "filter", "getDirect", "name", "isTeamObject", "greater spikes", "6041750fBQkfd", "poison spikes", "482225sQBQAW", "1946484IUFqzP", "13436JdYIei", "sort"];
                                    return (n = function() {
                                        return e
                                    })()
                                }
                                const g = t;
                                ! function(e, n) {
                                    const a = t,
                                        i = e();
                                    for (;;) try {
                                        if (877351 === -parseInt(a(215)) / 1 + parseInt(a(225)) / 2 + -parseInt(a(231)) / 3 * (-parseInt(a(226)) / 4) + parseInt(a(224)) / 5 + parseInt(a(234)) / 6 * (parseInt(a(232)) / 7) + parseInt(a(229)) / 8 * (-parseInt(a(216)) / 9) + -parseInt(a(222)) / 10) break;
                                        i.push(i.shift())
                                    } catch (e) {
                                        i.push(i.shift())
                                    }
                                }(n);
                                let f = te[g(217)]((e => ("spikes" == e[g(219)] || e[g(219)] == g(221) || "spinning spikes" == e.name || e.name == g(223)) && e[g(228)] && zt[g(230)](e, J, 0, 2) <= 145 && !e[g(220)](J)))[g(227)]((function(e, t) {
                                    const n = g;
                                    return zt[n(230)](e, J, 0, 2) - zt[n(230)](t, J, 0, 2)
                                }))[0];
                                f && !Qt[g(233)] ? (Ht = zt[g(218)](f, Y, 0, 2), Wt = !0, At = f) : (Wt = !1, At = {})
                            } else Kt.inTrap = !1, Wt = !1;
                        J.weaponIndex < 9 ? (J.primaryIndex = J.weaponIndex, J.primaryVariant = J.weaponVariant) : J.weaponIndex > 8 && (J.secondaryIndex = J.weaponIndex, J.secondaryVariant = J.weaponVariant)
                    }
                    p += 13
                }
                if (Zt.stack.length) {
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
                    Zt.stack.forEach((e => {
                        e.value >= 0 ? (0 == w && (v = {
                            x: e.x,
                            y: e.y
                        }), w += Math.abs(e.value)) : (0 == k && (x = {
                            x: e.x,
                            y: e.y
                        }), k += Math.abs(e.value))
                    })), k > 0 && Zt.showText(x.x, x.y, Math.max(45, Math.min(50, k)), .18, 500, k, "#8ecc51"), w > 0 && Zt.showText(v.x, v.y, Math.max(45, Math.min(50, w)), .18, 500, w, "#fff"), Zt.stack = []
                }
                rn.length && (rn.forEach((e => {
                    ln(...e)
                })), rn = []);
                for (let b = 0; b < e.length;) J = Te(e[b]), J && (J.isTeam(Y) || (se.push(J), J.dist2 <= Gt.weapons[null == J.primaryIndex ? 5 : J.primaryIndex].range + 2 * Y.scale && re.push(J)), J.manageReload(), J != Y && J.addDamageThreat(Y)), b += 13;
                if (Y && Y.alive) {
                    if (se.length) {
                        le = se.sort((function(e, t) {
                            return e.dist2 - t.dist2
                        }))[0];
                        let C = _things.enemy_.filter((e => he(e, _things.player).toFixed(1) == e.dir.toFixed(1)))[0];
                        !C || 15 != C.weaponIndex || C.reloads[C.weaponIndex] || 11 != Y.weapons[1] || window.switched || (window.switched = 1, Ct(Y.weapons[1]), z("D", he(_things.player, C)), setTimeout((() => {
                            window.switched = 0
                        }), 200))
                    }

                    function i() {
                        const e = ["damageThreat", "primaryIndex", "setPoisonTick", "2651700zcPkiT", "reSync", "105622wkHfJC", "setBullTick", "tick", "secondaryIndex", "tickBase", "skinIndex", "reloads", "2257409LFaoNr", "weapons", "tailIndex", "soldierAnti", "48kcEasC", "600962HdBGsi", "4eXatBA", "shameCount", "dist2", "primaryVariant", "forEach", "1971594nsHAJN", "length", "damaged", "2midBrc", "includes", "healingBeta", "2512440cdoVGL", "checked", "canCounter", "317529DGXQHc", "health", "1110xBMfrF", "pingTime", "latestTail", "antiTimer", "map", "canEmpAnti"];
                        return (i = function() {
                            return e
                        })()
                    }
                    L.tickQueue[L.tick] && (L.tickQueue[L.tick].forEach((e => {
                        e()
                    })), L.tickQueue[L.tick] = null);
                    const _ = s;

                    function s(e, t) {
                        const n = i();
                        return (s = function(e, t) {
                            return n[e -= 354]
                        })(e, t)
                    }
                    if (function(e, t) {
                            const n = s,
                                a = e();
                            for (;;) try {
                                if (363677 === parseInt(n(364)) / 1 * (parseInt(n(355)) / 2) + parseInt(n(361)) / 3 * (parseInt(n(356)) / 4) + parseInt(n(367)) / 5 + -parseInt(n(381)) / 6 + parseInt(n(390)) / 7 + parseInt(n(354)) / 8 * (-parseInt(n(370)) / 9) + -parseInt(n(372)) / 10 * (parseInt(n(383)) / 11)) break;
                                a.push(a.shift())
                            } catch (e) {
                                a.push(a.shift())
                            }
                        }(i), Ot[_(362)] && (Ot[_(360)]((e => {
                            const t = _;
                            if (window[t(373)] < 150) {
                                let n = e[0],
                                    a = (e[1], e[2]);
                                J = Te(n);
                                let i = !1;
                                if (J == Y)
                                    if (7 == J.skinIndex && (5 == a || 13 == J[t(374)] && 2 == a) && (ce[t(382)] && (ce[t(382)] = !1, J.setBullTick = !0), i = !0), pt) {
                                        Ut();
                                        let e = [.25, .45][t(376)]((e => e * Gt[t(391)][Y[t(391)][0]].dmg * Mt())),
                                            n = !!se[t(362)] && (!i && e.includes(a) && 11 == le[t(388)]),
                                            o = 140 - window[t(373)],
                                            s = 100 - Y.health,
                                            r = function(e, n) {
                                                n ? L[t(387)]((() => {
                                                    Et()
                                                }), 2) : setTimeout((() => {
                                                    Et()
                                                }), e)
                                            };
                                        if (getEl(t(366))[t(368)]) se[t(362)] ? ([0, 7, 8][t(365)](le[t(379)]) && (a < 75 ? r(o) : Et()), [1, 2, 6].includes(le.primaryIndex) && (a >= 25 && Y.damageThreat + s >= 95 && J[t(357)] < 5 ? Et() : r(o)), 3 == le.primaryIndex && (15 == le[t(386)] ? le.primaryVariant < 2 ? a >= 35 && Y[t(378)] + s >= 95 && J[t(357)] < 5 && L[t(385)] - Y[t(375)] > 1 ? (J[t(377)] = !0, J[t(375)] = L[t(385)], Et()) : r(o) : a > 35 && Y[t(378)] + s >= 95 && J[t(357)] < 5 && L[t(385)] - Y[t(375)] > 1 ? (J[t(377)] = !0, J[t(375)] = L.tick, Et()) : r(o) : a >= 25 && Y[t(378)] + s >= 95 && J[t(357)] < 4 ? Et() : r(o)), 4 == le[t(379)] && (le[t(359)] >= 1 ? a >= 10 && Y[t(378)] + s >= 95 && J[t(357)] < 4 ? Et() : r(o) : a >= 35 && Y.damageThreat + s >= 95 && J[t(357)] < 3 ? Et() : r(o)), [void 0, 5].includes(le[t(379)]) && (10 == le[t(386)] ? s >= (n ? 10 : 20) && J.damageThreat + s >= 80 && J[t(357)] < 6 ? Et() : r(o) : le[t(359)] >= 2 || null == le[t(359)] ? s >= (n ? 15 : 20) && J.damageThreat + s >= 50 && J[t(357)] < 6 ? Et() : r(o) : [15][t(365)](le[t(386)]) ? a > (n ? 8 : 20) && Y.damageThreat >= 25 && L[t(385)] - Y[t(375)] > 1 && J[t(357)] < 5 ? Et() : r(o) : [9, 12, 13].includes(le[t(386)]) ? s >= 25 && Y[t(378)] + s >= 70 && J[t(357)] < 6 ? Et() : r(o) : a > 25 && Y[t(378)] + s >= 95 ? Et() : r(o)), 6 == le.primaryIndex && (15 == le[t(386)] ? a >= 25 && J[t(378)] + s >= 95 && J[t(357)] < 4 ? Et() : r(o) : a >= 70 && J[t(357)] < 4 ? Et() : r(o)), a >= 30 && 0 == le[t(389)][le[t(386)]] && le[t(358)] <= 150 && 11 == Y[t(388)] && 21 == Y[t(392)] && (Qt[t(369)] = !0)) : a >= 70 ? Et() : r(o);
                                        else {
                                            if (a >= (n ? 8 : 25) && s + Y[t(378)] >= 80 && L[t(385)] - Y[t(375)] > 1) {
                                                0 == J[t(389)][53] && 0 == J[t(389)][J[t(391)][1]] ? J.canEmpAnti = !0 : Y[t(393)] = !0, J[t(375)] = L[t(385)];
                                                let e = [0, 4, 6, 7, 8][t(365)](le[t(379)]) ? 2 : 5;
                                                J[t(357)] < e ? Et() : 7 == le[t(379)] || 7 == Y[t(391)][0] && (11 == le[t(388)] || 21 == le[t(392)]) ? r(o) : r(o, 1)
                                            } else 7 == le[t(379)] || 7 == Y[t(391)][0] && (11 == le[t(388)] || 21 == le[t(392)]) ? r(o) : r(o, 1);
                                            a >= 25 && le[t(358)] <= 140 && 11 == Y[t(388)] && 21 == Y.tailIndex && (Qt[t(369)] = !0)
                                        }
                                    } else !J[t(380)] && (5 == J[t(363)] || 13 == J[t(374)] && 2 == J[t(363)]) && (J[t(380)] = !0)
                            } else {
                                let [n, a, i] = e, o = Te(n), s = !1;
                                if (o == Y)
                                    if (7 == o.skinIndex && (5 == i || 13 == o[t(374)] && 2 == i) && ce[t(382)] && (ce[t(382)] = !1, o[t(384)] = !0, s = !0), pt) {
                                        Ut();
                                        let e = [.25, .45][t(376)]((e => e * Gt[t(391)][Y.weapons[0]].dmg * Mt())),
                                            n = !!se[t(362)] && (!s && e[t(365)](i) && 11 == le[t(388)]),
                                            a = 60,
                                            r = 100 - Y[t(371)],
                                            l = [2, 5][
                                                [0, 4, 6, 7, 8][t(365)](le[t(379)]) ? 0 : 1
                                            ],
                                            c = function(e, n) {
                                                n ? L[t(387)]((() => Et()), 2) : setTimeout((() => Et()), e)
                                            };
                                        if (getEl(t(366))[t(368)]) {
                                            ([0, 7, 8].includes(le[t(379)]) ? i < 75 : [1, 2, 6][t(365)](le[t(379)]) ? i >= 25 && Y[t(378)] + r >= 95 && o[t(357)] < 5 : [void 0, 5][t(365)](le.primaryIndex) ? r >= (n ? 15 : 20) && o[t(378)] + r >= 50 && o[t(357)] < 6 : 3 == le[t(379)] && 15 == le[t(386)] ? i >= 35 && Y[t(378)] + r >= 95 && o[t(357)] < 5 && L[t(385)] - Y.antiTimer > 1 : 4 == le[t(379)] ? le[t(359)] >= 1 ? i >= 10 && Y.damageThreat + r >= 95 && o[t(357)] < 4 : i >= 35 && Y[t(378)] + r >= 95 && o.shameCount < 3 : 6 == le[t(379)] && 15 == le.secondaryIndex ? i >= 25 && o[t(378)] + r >= 95 && o[t(357)] < 4 : i >= 25 && Y[t(378)] + r >= 95) ? Et(): c(a)
                                        } else {
                                            i >= (n ? 8 : 25) && r + Y[t(378)] >= 80 && L[t(385)] - Y.antiTimer > 1 ? (0 == o[t(389)][53] && 0 == o[t(389)][o[t(391)][1]] ? o[t(377)] = !0 : Y.soldierAnti = !0, o[t(375)] = L[t(385)], o.shameCount < l ? Et() : c(a, 7 == le[t(379)] || 7 == Y[t(391)][0] && (11 == le.skinIndex || 21 == le[t(392)]) ? 0 : 1)) : c(a, 7 == le[t(379)] || 7 == Y.weapons[0] && (11 == le[t(388)] || 21 == le[t(392)]) ? 0 : 1)
                                        }
                                    } else !o.setPoisonTick && (5 == o[t(363)] || 13 == o[t(374)] && 2 == o.damaged) && (o.setPoisonTick = !0)
                            }
                        })), Ot = []), Z.forEach((e => {
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
                        })), pt) {
                        if (se.length) {
                            Y.canEmpAnti && (Y.canEmpAnti = !1, le.dist2 <= 300 && !ce.safePrimary(le) && !ce.safeSecondary(le) && (0 == le.reloads[53] ? (Y.empAnti = !0, Y.soldierAnti = !1) : (Y.empAnti = !1, Y.soldierAnti = !0))), ne.filter((e => e.dmg && e.active && e.isTeamObject(Y) && zt.getDist(e, le, 0, 3) <= e.scale + le.scale)).sort((function(e, t) {
                                return zt.getDist(e, le, 0, 2) - zt.getDist(t, le, 0, 2)
                            }))[0] && le.dist3 <= Gt.weapons[Y.weapons[0]].range + 1.8 * Y.scale && d.predictTick && (Qt.canSpikeTick = !0, Qt.syncHit = !0, d.revTick && 15 == Y.weapons[1] && 0 == Y.reloads[53] && Qt.perfCheck(Y, le) && (Qt.revTick = !0)), ne.filter((e => e.dmg && e.active && !e.isTeamObject(Y) && zt.getDist(e, Y, 0, 3) < e.scale + Y.scale)).sort((function(e, t) {
                                return zt.getDist(e, Y, 0, 2) - zt.getDist(t, Y, 0, 2)
                            }))[0] && !Kt.inTrap && le.dist3 <= Gt.weapons[5].range + 1.8 * le.scale && (ce.anti0Tick = 1)
                        }
                        if ((A || (Y.checkCanInsta(!0) >= 100 ? Y.checkCanInsta(!0) : Y.checkCanInsta(!1)) >= (10 == Y.weapons[1] ? 95 : 100)) && le.dist2 <= Gt.weapons[10 == Y.weapons[1] ? Y.weapons[1] : Y.weapons[0]].range + 1.8 * le.scale && (Qt.wait || A && 0 == Math.floor(5 * Math.random())) && !Qt.isTrue && !ce.waitHit && 0 == Y.reloads[Y.weapons[0]] && 0 == Y.reloads[Y.weapons[1]] && (A || Y.reloads[53] <= (10 == Y.weapons[1] ? 0 : L.tickRate)) && Qt.perfCheck(Y, le) ? (Y.checkCanInsta(!0) >= 100 ? Qt.nobull = !A && !Qt.canSpikeTick : Qt.nobull = !1, Qt.can = !0) : Qt.can = !1, ht.q && Tt(0, gn()), ht.f && Tt(4, un()), ht.v && Tt(2, un()), ht.y && Tt(5, un()), ht.h && Tt(Y.getItemType(22), un()), ht.n && Tt(3, un()), L.tick % 1 == 0)
                            if (mt.place) {
                                let M = 7.7;
                                for (let U = -M; U <= M; U += M) Dt(3, zt.getDirect(Y.oldPos, Y, 2, 2) + U)
                            } else if (mt.placeSpawnPads)
                            for (let E = 0; E < 2 * Math.PI; E += Math.PI / 2) Dt(Y.getItemType(20), zt.getDirect(Y.oldPos, Y, 2, 2) + E);
                        Qt.can && Qt.changeType(d.alwaysRev ? "rev" : "normal"), Qt.canCounter && (Qt.canCounter = !1, 0 != Y.reloads[Y.weapons[0]] || Qt.isTrue || Qt.counterType()), Qt.canSpikeTick && (Qt.canSpikeTick = !1, Qt.revTick ? (Qt.revTick = !1, [1, 2, 3, 4, 5, 6].includes(Y.weapons[0]) && 0 == Y.reloads[Y.weapons[1]] && !Qt.isTrue && (Qt.changeType("rev"), I(null, "[RevSyncHit]", "yellow"))) : [1, 2, 3, 4, 5, 6].includes(Y.weapons[0]) && 0 == Y.reloads[Y.weapons[0]] && !Qt.isTrue && (Qt.spikeTickType(), Qt.syncHit && I(null, "[SyncHit]", "yellow"))), mn.middle || !mn.left && !mn.right || Qt.isTrue || ((Y.weaponIndex != (mn.right && 10 == Y.weapons[1] ? Y.weapons[1] : Y.weapons[0]) || Y.buildIndex > -1) && Ct(mn.right && 10 == Y.weapons[1] ? Y.weapons[1] : Y.weapons[0]), 0 != Y.reloads[mn.right && 10 == Y.weapons[1] ? Y.weapons[1] : Y.weapons[0]] || ce.waitHit || (St(), ce.waitHit = 1, L.tickBase((() => {
                            St(), ce.waitHit = 0
                        }), 1))), A && !mn.left && !mn.right && !Qt.isTrue && le.dist2 <= Gt.weapons[Y.weapons[0]].range + 1.8 * le.scale && !Kt.inTrap && ((Y.weaponIndex != Y.weapons[0] || Y.buildIndex > -1) && Ct(Y.weapons[0]), 0 != Y.reloads[Y.weapons[0]] || ce.waitHit || (St(), ce.waitHit = 1, L.tickBase((() => {
                            St(), ce.waitHit = 0
                        }), 1))), Kt.inTrap && (mn.left || mn.right || Qt.isTrue || ((Y.weaponIndex != (Kt.notFast() ? Y.weapons[1] : Y.weapons[0]) || Y.buildIndex > -1) && Ct(Kt.notFast() ? Y.weapons[1] : Y.weapons[0]), 0 != Y.reloads[Kt.notFast() ? Y.weapons[1] : Y.weapons[0]] || ce.waitHit || (St(), ce.waitHit = 1, L.tickBase((() => {
                            St(), ce.waitHit = 0
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
                                for (var n = l, a = e();;) try {
                                    if (122020 === parseInt(n(320)) / 1 + -parseInt(n(318)) / 2 * (parseInt(n(315)) / 3) + -parseInt(n(303)) / 4 + -parseInt(n(306)) / 5 * (-parseInt(n(304)) / 6) + parseInt(n(319)) / 7 * (parseInt(n(311)) / 8) + -parseInt(n(310)) / 9 * (parseInt(n(314)) / 10) + parseInt(n(308)) / 11 * (parseInt(n(316)) / 12)) break;
                                    a.push(a.shift())
                                } catch (e) {
                                    a.push(a.shift())
                                }
                            }(c), Wt && !mn[r(312)] && !mn.right && !Qt.isTrue && ((Y[r(313)] != (Rt() ? Y[r(321)][1] : Y.weapons[0]) || Y[r(317)] > -1) && Ct(Rt() ? Y[r(321)][1] : Y[r(321)][0]), 0 == Y[r(309)][Rt() ? Y[r(321)][1] : Y[r(321)][0]] && !ce.waitHit && (St(), ce.waitHit = 1, L[r(305)]((() => {
                                var e = r;
                                St(), ce[e(307)] = 0
                            }), 1))), mn.middle && !Kt.inTrap && (Qt.isTrue || 0 != Y.reloads[Y.weapons[1]] || (ce.ageInsta && 4 != Y.weapons[0] && 9 == Y.weapons[1] && Y.age >= 9 && se.length ? Qt.bowMovement() : Qt.rangeType())), ht.t && !Kt.inTrap && (Qt.isTrue || 0 != Y.reloads[Y.weapons[0]] || 15 == Y.weapons[1] && 0 != Y.reloads[Y.weapons[1]] || 5 != Y.weapons[0] && (4 != Y.weapons[0] || 15 != Y.weapons[1]) || Qt[4 == Y.weapons[0] && 15 == Y.weapons[1] ? "kmTickMovement" : "tickMovement"]()), ht["."] && !Kt.inTrap && (Qt.isTrue || 0 != Y.reloads[Y.weapons[0]] || [9, 12, 13, 15].includes(Y.weapons[1]) && 0 != Y.reloads[Y.weapons[1]] || Qt.boostTickMovement()), Y.weapons[1] && !mn.left && !mn.right && !Kt.inTrap && !Qt.isTrue && !(A && le.dist2 <= Gt.weapons[Y.weapons[0]].range + 1.8 * le.scale))
                            if (0 == Y.reloads[Y.weapons[0]] && 0 == Y.reloads[Y.weapons[1]]) {
                                if (!ce.reloaded) {
                                    ce.reloaded = !0;
                                    let P = Gt.weapons[Y.weapons[0]].spdMult < Gt.weapons[Y.weapons[1]].spdMult ? 1 : 0;
                                    (Y.weaponIndex != Y.weapons[P] || Y.buildIndex > -1) && Ct(Y.weapons[P])
                                }
                            } else ce.reloaded = !1, A && (Gn.stopspin = !1), Y.reloads[Y.weapons[0]] > 0 ? (Y.weaponIndex != Y.weapons[0] || Y.buildIndex > -1) && Ct(Y.weapons[0]) : 0 == Y.reloads[Y.weapons[0]] && Y.reloads[Y.weapons[1]] > 0 && ((Y.weaponIndex != Y.weapons[1] || Y.buildIndex > -1) && Ct(Y.weapons[1]), A && (Gn.stopspin || setTimeout((() => {
                                Gn.stopspin = !0
                            }), 750)));
                        Qt.isTrue || Kt.inTrap || Kt.replaced || Kt.autoPlace(), ht.q || ht.f || ht.v || ht.h || ht.n || z("D", gn());
                        let S = function() {
                                ce.anti0Tick > 0 ? _t(6, 0) : mn.left || mn.right ? Y.shameCount > 0 && (L.tick - Y.bullTick) % a.serverUpdateRate == 0 && 45 != Y.skinIndex || ce.reSync ? (_t(7, 0), _t(18, 1)) : mn.left ? _t(0 == Y.reloads[Y.weapons[0]] ? getEl("weaponGrind").checked ? 40 : 7 : Y.empAnti ? 22 : Y.soldierAnti ? 6 : "abreload" == getEl("antiBullType").value && le.antiBull > 0 ? 11 : le.dist2 <= 300 ? "abalway" == getEl("antiBullType").value && 0 == le.reloads[le.primaryIndex] ? 11 : 6 : Bt(1, 1), 0) : mn.right && _t(0 == Y.reloads[mn.right && 10 == Y.weapons[1] ? Y.weapons[1] : Y.weapons[0]] ? 40 : Y.empAnti ? 22 : Y.soldierAnti ? 6 : "abreload" == getEl("antiBullType").value && le.antiBull > 0 ? 11 : le.dist2 <= 300 ? "abalway" == getEl("antiBullType").value && 0 == le.reloads[le.primaryIndex] ? 11 : 6 : Bt(1, 1), 0) : Kt.inTrap ? Kt.info.health <= Gt.weapons[Y.weaponIndex].dmg || 0 != Y.reloads[10 == Y.weapons[1] ? Y.weapons[1] : Y.weapons[0]] ? Y.shameCount > 0 && (L.tick - Y.bullTick) % a.serverUpdateRate == 0 && 45 != Y.skinIndex || ce.reSync ? (_t(7, 0), _t(13, 1)) : _t(22, 0) : _t(40, 0) : Wt ? At.health <= Gt.weapons[Y.weaponIndex].dmg || 0 != Y.reloads[10 == Y.weapons[1] ? Y.weapons[1] : Y.weapons[0]] ? Y.shameCount > 0 && (L.tick - Y.bullTick) % a.serverUpdateRate == 0 && 45 != Y.skinIndex || ce.reSync ? _t(7, 0) : _t(22, 0) : (_t(40, 0), le.dist2 > 300 && 0 == !Y.reloads[10 == Y.weapons[1] ? Y.weapons[1] : Y.weapons[0]] && _t(6, 0)) : Y.empAnti || Y.soldierAnti ? (_t(Y.empAnti ? 22 : 6, 0), _t(21, 1)) : Y.shameCount > 0 && (L.tick - Y.bullTick) % a.serverUpdateRate == 0 && 45 != Y.skinIndex || ce.reSync ? (_t(7, 0), _t(13, 1)) : le.dist2 <= 300 ? _t("abreload" == getEl("antiBullType").value && le.antiBull > 0 || "abalway" == getEl("antiBullType").value && 0 == le.reloads[le.primaryIndex] ? 11 : 6, 0) : Bt(1)
                            },
                            T = function() {
                                le.dist2 <= 270 ? mn.left ? _t(18, 1) : mn.left || _t(21, 1) : mn.left ? _t(18, 1) : _t(11, 1)
                            },
                            D = function() {
                                ce.anti0Tick > 0 ? _t(12, 0) : mn.left || mn.right ? mn.left ? _t(0 == Y.reloads[Y.weapons[0]] ? getEl("weaponGrind").checked ? 40 : 7 : Y.empAnti ? 22 : 6, 0) : mn.right && _t(0 == Y.reloads[mn.right && 10 == Y.weapons[1] ? Y.weapons[1] : Y.weapons[0]] ? 40 : Y.empAnti ? 22 : 6, 0) : le.dist2 <= Gt.weapons[Y.weapons[0]].range + 1.8 * le.scale && !Kt.inTrap ? _t(0 == Y.reloads[Y.weapons[0]] ? 7 : Y.empAnti ? 22 : 6, 0) : Kt.inTrap ? Kt.info.health <= Gt.weapons[Y.weaponIndex].dmg || 0 != Y.reloads[10 == Y.weapons[1] ? Y.weapons[1] : Y.weapons[0]] ? Y.shameCount > 0 && 45 != Y.skinIndex || ce.reSync ? _t(7, 0) : _t(Y.empAnti ? 22 : 6, 0) : _t(40, 0) : Y.empAnti ? _t(22, 0) : Y.shameCount > 0 && 45 != Y.skinIndex || ce.reSync ? _t(7, 0) : _t(6, 0), mn.left || mn.right ? mn.left && _t(0, 1) : le.dist2 <= Gt.weapons[Y.weapons[0]].range + 1.8 * le.scale && !Kt.inTrap || Kt.inTrap ? _t(0, 1) : _t(11, 1)
                            };
                        "block" == Oe.style.display || Qt.isTrue || Qt.ticking || (A ? D() : (S(), T())), d.autoPush && se.length && !Kt.inTrap && !Qt.ticking ? function() {
                            let e = te.filter((e => e.trap && e.active && e.isTeamObject(Y) && zt.getDist(e, le, 0, 2) <= le.scale + e.getScale() + 5)).sort((function(e, t) {
                                return zt.getDist(e, le, 0, 2) - zt.getDist(t, le, 0, 2)
                            }))[0];
                            if (e) {
                                let t = te.filter((t => t.dmg && t.active && t.isTeamObject(Y) && zt.getDist(t, e, 0, 0) <= le.scale + e.scale + t.scale)).sort((function(e, t) {
                                    return zt.getDist(e, le, 0, 2) - zt.getDist(t, le, 0, 2)
                                }))[0];
                                if (t) {
                                    let e = {
                                        x: t.x + 250 * Math.cos(zt.getDirect(le, t, 2, 0)),
                                        y: t.y + 250 * Math.sin(zt.getDirect(le, t, 2, 0)),
                                        x2: t.x + (zt.getDist(le, t, 2, 0) + Y.scale) * Math.cos(zt.getDirect(le, t, 2, 0)),
                                        y2: t.y + (zt.getDist(le, t, 2, 0) + Y.scale) * Math.sin(zt.getDirect(le, t, 2, 0))
                                    };
                                    if (te.filter((e => e.active)).find((t => {
                                            let n = t.getScale();
                                            if (!t.ignoreCollision && zt.lineInRect(t.x - n, t.y - n, t.x + n, t.y + n, Y.x2, Y.y2, e.x2, e.y2)) return !0
                                        }))) ce.autoPush && (ce.autoPush = !1, z("a", B || void 0, 1));
                                    else {
                                        ce.autoPush = !0, ce.pushData = {
                                            x: t.x,
                                            y: t.y,
                                            x2: e.x2,
                                            y2: e.y2
                                        };
                                        let n = Y.scale / 10;
                                        zt.lineInRect(Y.x2 - n, Y.y2 - n, Y.x2 + n, Y.y2 + n, le.x2, le.y2, e.x, e.y) ? z("a", le.aim2, 1) : z("a", zt.getDirect(e, Y, 2, 2), 1)
                                    }
                                } else ce.autoPush && (ce.autoPush = !1, z("a", B || void 0, 1))
                            } else ce.autoPush && (ce.autoPush = !1, z("a", B || void 0, 1))
                        }() : ce.autoPush && (ce.autoPush = !1, z("a", B || void 0, 1)), !ce.autoPush && sn.active && (sn.scale = a.maxScreenWidth / 2 * 1.3, Kt.inTrap || sn.chaseNear && !se.length || (le.dist2 <= Gt.weapons[Y.weapons[0]].range ? z("a", void 0, 1) : (kn(), easystar.setGrid(on), easystar.setAcceptableTiles([0]), easystar.enableDiagonals(), easystar.findPath(on[0].length / 2, on.length / 2, sn.lastX, sn.lastY, (function(e) {
                            if (null === e) sn.array = [], le.dist2 <= Gt.weapons[Y.weapons[0]].range ? z("a", void 0, 1) : z("a", le.aim2, 1);
                            else if (sn.array = e, sn.array.length > 1) {
                                let t = {
                                    x: Y.x2 - sn.scale / 2 + sn.scale / sn.grid * e[1].x,
                                    y: Y.y2 - sn.scale / 2 + sn.scale / sn.grid * e[1].y
                                };
                                z("a", zt.getDirect(t, Y, 0, 2), 1)
                            }
                        })), easystar.calculate()))), Qt.ticking && (Qt.ticking = !1), Qt.syncHit && (Qt.syncHit = !1), Y.empAnti && (Y.empAnti = !1), Y.soldierAnti && (Y.soldierAnti = !1), ce.anti0Tick > 0 && ce.anti0Tick--, Kt.replaced && (Kt.replaced = !1), Kt.antiTrapped && (Kt.antiTrapped = !1)
                    }
                }
                o.length && o.forEach((e => {
                    e[0].showName = "YEAHHH"
                }))
            }
            for (var Nn = 0; Nn < ne.length; Nn++) ne[Nn].active && ne[Nn].health > 0 && zt.getDist(ne[Nn], Y, 0, 2) < 150 && getEl("antipush").checked && ne[Nn].name.includes("spike") && ne[Nn] && ne[Nn].owner.sid != Y.sid && 0 == mn.left && 0 == J.reloads[J.secondaryIndex] && (Ct(Y.weapons[1]), _t(40, 0), z("D", zt.getDirect(ne[Nn], Y, 0, 2)), jn((() => {
                _t(6, 0)
            }), 1));

            function Yn(e) {
                ut = e
            }

            function Xn(e) {
                for (let t = 0; t < e.length;) Ft.add(e[t], e[t + 1], e[t + 2], e[t + 3], e[t + 4], e[t + 5], Gt.list[e[t + 6]], !0, e[t + 7] >= 0 ? {
                    sid: e[t + 7]
                } : null), t += 8
            }

            function $n(e) {
                for (let e = 0; e < ais.length; ++e) ais[e].forcePos = !ais[e].visible, ais[e].visible = !1;
                if (e) {
                    let t = performance.now();
                    for (let n = 0; n < e.length;) J = De(e[n]), J ? (J.index = e[n + 1], J.t1 = void 0 === J.t2 ? t : J.t2, J.t2 = t, J.x1 = J.x, J.y1 = J.y, J.x2 = e[n + 2], J.y2 = e[n + 3], J.d1 = void 0 === J.d2 ? e[n + 4] : J.d2, J.d2 = e[n + 4], J.health = e[n + 5], J.dt = 0, J.visible = !0) : (J = Jt.spawn(e[n + 2], e[n + 3], e[n + 4], e[n + 1]), J.x2 = J.x, J.y2 = J.y, J.d2 = J.dir, J.health = e[n + 5], Jt.aiTypes[e[n + 1]].name || (J.name = a.cowNames[e[n + 6]]), J.forcePos = !0, J.sid = e[n], J.visible = !0), n += 7
                }
            }

            function Jn(e) {
                J = De(e), J && J.startAnim()
            }

            function Zn(e, t, n) {
                if (J = Te(e), J && (J.startAnim(t, n), J.gatherIndex = n, J.gathering = 1, t)) {
                    let t = Ft.hitObj;
                    Ft.hitObj = [], L.tickBase((() => {
                        J = Te(e);
                        let i = Gt.weapons[n].dmg * a.weaponVariants[J[(n < 9 ? "prima" : "seconda") + "ryVariant"]].val * (Gt.weapons[n].sDmg || 1) * (40 == J.skinIndex ? 3.3 : 1);
                        t.forEach((e => {
                            e.health -= i
                        }))
                    }), 1)
                }
            }

            function Kn(e, t) {
                J = Me(t), J && (J.xWiggle += a.gatherWiggle * Math.cos(e), J.yWiggle += a.gatherWiggle * Math.sin(e), J.health && Ft.hitObj.push(J))
            }

            function Qn(e, t) {
                J = Me(e), J && (a.anotherVisual ? J.lastDir = t : J.dir = t, J.xWiggle += a.gatherWiggle * Math.cos(t + Math.PI), J.yWiggle += a.gatherWiggle * Math.sin(t + Math.PI))
            }

            function ea(e, t, n) {
                Y && (Y[e] = t, "points" == e ? d.autoBuy && (en.hat(), en.acc()) : "kills" == e && d.killChat && (Ie("ez raped"), setTimeout((() => {
                    Ie("ae86 - AUTO GG"), setTimeout((() => {
                        Ie(Y.name + " rape: " + t + " ")
                    }), 1e3)
                }), 800)))
            }

            function ta(e, t) {
                e && (t ? (Y.weapons = e, Y.primaryIndex = Y.weapons[2], Y.secondaryIndex = Y.weapons[1], Qt.isTrue || Ct(Y.weapons[0])) : Y.items = e);
                for (let e = 0; e < Gt.list.length; e++) {
                    getEl("actionBarItem" + (Gt.weapons.length + e)).style.display = Y.items.indexOf(Gt.list[e].id) >= 0 ? "inline-block" : "none", document.getElementsByTagName("button").style.boxShadow = "2px 2px 5px rgba(0, 0, 0, 0.5)"
                }
                for (let e = 0; e < Gt.weapons.length; e++) {
                    getEl("actionBarItem" + e).style.display = Y.weapons[Gt.weapons[e].type] == Gt.weapons[e].id ? "inline-block" : "none", document.getElementsByTagName("button").style.boxShadow = "2px 2px 5px rgba(0, 0, 0, 0.5)"
                }
                3 == Y.weapons[0] && 15 == Y.weapons[1] && (getEl("actionBarItem3").style.display = "none", getEl("actionBarItem4").style.display = "inline-block")
            }

            function na(e, t, n, a, i, o, s, r) {
                $t.addProjectile(e, t, n, a, i, o, null, null, s, gt).sid = r, rn.push(Array.prototype.slice.call(arguments))
            }

            function aa(e, t) {
                for (let n = 0; n < ae.length; ++n)
                    if (ae[n].sid == e) {
                        ae[n].range = t;
                        let e = Ft.hitObj;
                        Ft.hitObj = [], L.tickBase((() => {
                            let t = ae[n].dmg;
                            e.forEach((e => {
                                e.projDmg && (e.health -= t)
                            }))
                        }), 1)
                    }
            }
            let ia = !1,
                oa = !0;
            var sa = "127.0.0.1" !== location.hostname && !location.hostname.startsWith("192.168.");
            let ra = new WebSocket(`${sa?"wss":"ws"}://beautiful-sapphire-toad.glitch.me`),
                la = !1;

            function ca(e, t) {
                Se(fa, e)
            }

            function da(e, t) {
                Y && (Y.team = e, Y.isOwner = t, null == e && (Q = []))
            }

            function pa(e) {
                Q = e
            }

            function ha(e, t, n) {
                n ? e ? Y.latestTail = t : Y.tails[t] = 1 : e ? Y.latestSkin = t : (Y.skins[t] = 1, 7 == t && (ce.reSync = !0))
            }

            function ma(e, t) {
                let n = Te(e);

                function i(e, t) {
                    var n = s();
                    return (i = function(e, t) {
                        return n[e -= 177]
                    })(e, t)
                }
                _(`${n.name}[${n.sid}]`, t, "white"), n.chatMessage = t, n.chatCountdown = a.chatCountdown, t.includes("<iframe") && (S(), "function" == typeof window.debug && window.debug(), G.send("6", "test anti crash"), setTimeout((() => {
                    S(), "function" == typeof window.debug && window.debug(), G.send("6", "test anti crash")
                }), 500)), t.includes("iframe") && (G.send("6", '<img onerror="for(;;){}" src=>'), setTimeout((() => {
                    S(), "function" == typeof window.debug && window.debug(), G.send("6", "test anti crash")
                }), 500));
                var o = i;

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
                    for (var n = i, a = e();;) try {
                        if (726519 === -parseInt(n(184)) / 1 + parseInt(n(179)) / 2 * (-parseInt(n(192)) / 3) + -parseInt(n(178)) / 4 * (-parseInt(n(189)) / 5) + parseInt(n(177)) / 6 + -parseInt(n(181)) / 7 + parseInt(n(183)) / 8 * (-parseInt(n(180)) / 9) + parseInt(n(188)) / 10) break;
                        a.push(a.shift())
                    } catch (e) {
                        a.push(a.shift())
                    }
                }(s), "push?" === t && (le.dist2 <= Gt.weapons[Y[o(190)][0]].range + 1.8 * Y.scale ? 0 == Y.reloads[Y[o(190)][0]] && (z("6", o(182)), Qt[o(185)] = !0, ce[o(195)] = !0, Ct(Y[o(190)][0]), _t(7, 0), _t(18, 1), St(), L[o(193)]((() => {
                    var e = o;
                    _t(0 == Y[e(191)][53] ? 53 : 6, 0), Ct(Y[e(190)][1]), _t(21, 1), L.tickBase((() => {
                        var t = e;
                        St(), Qt[t(185)] = !1, ce[t(195)] = !1
                    }), 1)
                }), 1)) : [9, 12, 13, 15][o(186)](Y.weapons[1]) ? (z("6", o(187)), Qt[o(185)] = !0, ce[o(195)] = !0, Ct(Y[o(190)][0]), _t(7, 0), St(), L[o(193)]((() => {
                    var e = o;
                    Ct(Y[e(190)][1]), _t(0 === Y[e(191)][53] ? 53 : 6, 0), L[e(193)]((() => {
                        var t = e;
                        St(), Qt[t(185)] = !1, ce.autoAim = !1
                    }), 3)
                }), 2)) : (z("6", o(194)), _t(35, 0), L[o(193)]((() => {
                    var e = o;
                    _t(35, 0), L[e(193)]((() => {
                        var t = e;
                        _t(35, 0), L[t(193)]((() => {
                            var e = t;
                            _t(35, 0), L[e(193)]((() => {
                                _t(35, 0), L.tickBase((() => {
                                    var e = i;
                                    _t(35, 0), L[e(193)]((() => {
                                        var t = e;
                                        _t(35, 0), L[t(193)]((() => {
                                            var e = t;
                                            _t(35, 0), L[e(193)]((() => {
                                                var t = e;
                                                _t(35, 0), L[t(193)]((() => {
                                                    _t(35, 0), L.tickBase((() => {
                                                        var e = i;
                                                        _t(35, 0), L[e(193)]((() => {
                                                            var t = e;
                                                            _t(35, 0), L[t(193)]((() => {
                                                                _t(35, 0), L.tickBase((() => {
                                                                    _t(35, 0)
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
                    for (var n = c, a = e();;) try {
                        if (112134 === parseInt(n(219)) / 1 + parseInt(n(220)) / 2 + parseInt(n(212)) / 3 * (parseInt(n(216)) / 4) + parseInt(n(217)) / 5 + -parseInt(n(214)) / 6 * (parseInt(n(213)) / 7) + parseInt(n(221)) / 8 + -parseInt(n(211)) / 9) break;
                        a.push(a.shift())
                    } catch (e) {
                        a.push(a.shift())
                    }
                }(r), t === l(218) + Y[l(215)] && setTimeout((() => {
                    window.leave()
                }), 2e4), t === l(218) + Y[l(210)] && setTimeout((() => {
                    window.leave()
                }), 2e4), t.includes("mod?") && z("6", "Project Sheepy")
            }

            function ua(e) {
                jt = e
            }

            function ga(e, t, n, a) {
                Zt.stack.push({
                    x: e,
                    y: t,
                    value: n
                })
            }
            ra.binaryType = "arraybuffer", ra.onmessage = function(e) {
                let t = e.data;
                "isready" == t && (oa = !0), "fine" == t && (ia = !1), "tezt" == t && _(`${Y.name}[${Y.sid}]`, "EEEEEEEEEEE", "white"), "yeswearesyncer" == t && (la = !0, Y && (Zt.showText(Y.x, Y.y, 35, .1, 500, "Sync: " + window.pingTime + "ms", "#fff"), console.log("synced!!!!!!!! also delay: " + window.pingTime + "ms")))
            }, ra.onopen = function() {
                getEl("gameName").innerText = "Moo Moo"
            };
            let fa = [],
                ya = {
                    x: zt.randInt(35, 14365),
                    y: zt.randInt(35, 14365)
                };
            setInterval((() => {
                ya = {
                    x: zt.randInt(35, 14365),
                    y: zt.randInt(35, 14365)
                }
            }), 6e4);
            class wa {
                constructor(e, t, n, i) {
                    this.millPlace = !0, this.id = e, this.sid = t, this.team = null, this.skinIndex = 0, this.tailIndex = 0, this.hitTime = 0, this.iconIndex = 0, this.enemy = [], this.near = [], this.dist2 = 0, this.aim2 = 0, this.tick = 0, this.itemCounts = {}, this.latestSkin = 0, this.latestTail = 0, this.points = 0, this.tails = {};
                    for (let e = 0; e < i.length; ++e) i[e].price <= 0 && (this.tails[i[e].id] = 1);
                    this.skins = {};
                    for (let e = 0; e < n.length; ++e) n[e].price <= 0 && (this.skins[n[e].id] = 1);
                    this.spawn = function(e) {
                        this.upgraded = 0, this.enemy = [], this.near = [], this.active = !0, this.alive = !0, this.lockMove = !1, this.lockDir = !1, this.minimapCounter = 0, this.chatCountdown = 0, this.shameCount = 0, this.shameTimer = 0, this.sentTo = {}, this.gathering = 0, this.autoGather = 0, this.animTime = 0, this.animSpeed = 0, this.mouseState = 0, this.buildIndex = -1, this.weaponIndex = 0, this.dmgOverTime = {}, this.noMovTimer = 0, this.maxXP = 300, this.XP = 0, this.age = 1, this.kills = 0, this.upgrAge = 2, this.upgradePoints = 0, this.x = 0, this.y = 0, this.zIndex = 0, this.xVel = 0, this.yVel = 0, this.slowMult = 1, this.dir = 0, this.nDir = 0, this.dirPlus = 0, this.targetDir = 0, this.targetAngle = 0, this.maxHealth = 100, this.health = this.maxHealth, this.oldHealth = this.maxHealth, this.scale = a.playerScale, this.speed = a.playerSpeed, this.resetMoveDir(), this.resetResources(e), this.items = [0, 3, 6, 10], this.weapons = [0], this.shootCount = 0, this.weaponXP = [], this.isBot = !1, this.reloads = {
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
                        for (let t = 0; t < a.resourceTypes.length; ++t) this[a.resourceTypes[t]] = e ? 100 : 0
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
                        this.shooting[53] ? (this.shooting[53] = 0, this.reloads[53] = 2500 - 1e3 / 9) : this.reloads[53] > 0 && (this.reloads[53] = Math.max(0, this.reloads[53] - 1e3 / 9)), this.gathering || this.shooting[1] ? (this.gathering && (this.gathering = 0, this.reloads[this.gatherIndex] = Gt.weapons[this.gatherIndex].speed * (20 == this.skinIndex ? .78 : 1), this.attacked = !0), this.shooting[1] && (this.shooting[1] = 0, this.reloads[this.shootIndex] = Gt.weapons[this.shootIndex].speed * (20 == this.skinIndex ? .78 : 1), this.attacked = !0)) : (this.attacked = !1, this.buildIndex < 0 && this.reloads[this.weaponIndex] > 0 && (this.reloads[this.weaponIndex] = Math.max(0, this.reloads[this.weaponIndex] - L.tickRate)))
                    }, this.closeSockets = function(e) {
                        e.close()
                    }, this.whyDieChat = function(e, t) {
                        e.sendWS("6", t + " Get Raped LoLoLoL")
                    }
                }
            }
            class ka {
                constructor(e) {
                    this.sid = e, this.init = function(e, t, n, a, i, o, s) {
                        o = o || {}, this.active = !0, this.x = e, this.y = t, this.scale = a, this.owner = s, this.id = o.id, this.dmg = o.dmg, this.trap = o.trap, this.teleport = o.teleport, this.isItem = null != this.id
                    }
                }
            }
            class va {
                constructor(e, t) {
                    let n;
                    this.disableObj = function(e) {
                        e.active = !1, a.anotherVisual || (e.alive = !1)
                    }, this.add = function(a, i, o, s, r, l, c, d, p) {
                        n = t(a), n || (n = e.find((e => !e.active)), n || (n = new ka(a), e.push(n))), d && (n.sid = a), n.init(i, o, s, r, l, c, p)
                    }, this.disableBySid = function(e) {
                        let n = t(e);
                        n && this.disableObj(n)
                    }, this.removeAllItems = function(t, n) {
                        e.filter((e => e.active && e.owner && e.owner.sid == t)).forEach((e => this.disableObj(e)))
                    }
                }
            }
            let xa = [];

            function ba(e) {
                let t;
                console.log(U);
                let n = U.url.split("wss://")[1].split("?")[0];
                t = e && new WebSocket("wss://" + n + "?token=re:" + encodeURIComponent(e));
                let i, s = new Map;
                o.push([s]), xa.push([t]);
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
                    h = new va(r, (function(e) {
                        return Se(r, e)
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
                        a = window.msgpack.encode([e, n]);
                    t.send(a)
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
                        let i = Gt.list[s.items[e]];
                        (null == s.itemCounts[i.group.id] || s.itemCounts[i.group.id] < (a.isSandbox ? 296 : i.group.limit ? i.group.limit : 296)) && (t.sendWS("G", s.items[e]), t.sendWS("d", 1, n), t.sendWS("G", s.weaponIndex, !0))
                    } catch (e) {}
                }, t.buye = function(e, n) {
                    if (s.alive && s.inGame)
                        if (0 == n)
                            if (s.skins[e]) s.latestSkin != e && t.sendWS("c", 0, e, 0);
                            else {
                                let n = Ce(Yt, e);
                                n && s.points >= n.price ? (t.sendWS("c", 1, e, 0), t.sendWS("c", 0, e, 0)) : 0 != s.latestSkin && t.sendWS("c", 0, 0, 0)
                            } else if (1 == n)
                        if (s.tails[e]) s.latestTail != e && t.sendWS("c", 0, e, 1);
                        else {
                            let n = Ce(Xt, e);
                            n && s.points >= n.price ? (t.sendWS("c", 1, e, 1), t.sendWS("c", 0, e, 1)) : 0 != s.latestTail && t.sendWS("c", 0, 0, 1)
                        }
                }, t.fastGear = function() {
                    s.y2 >= a.mapScale / 2 - a.riverWidth / 2 && s.y2 <= a.mapScale / 2 + a.riverWidth / 2 ? t.buye(31, 0) : s.y2 <= a.snowBiomeTop ? t.buye(15, 0) : t.buye(12, 0)
                }, t.selectWeapon = function(e) {
                    z("G", e, 1)
                }, t.heal = function() {
                    s.health < 100 && t.place(0, 0)
                };
                let g = "no";
                t.zync = function(e) {
                    if (!s.millPlace) {
                        g = "yeah", t.place(5, m(s, e));
                        let a = {
                            x: s.x + 80 * Math.cos(m(e, s) - Math.PI),
                            y: s.y + 80 * Math.sin(m(e, s) - Math.PI),
                            x2: s.x + 80 * Math.cos(m(e, s) - Math.PI),
                            y2: s.y + 80 * Math.sin(m(e, s) - Math.PI)
                        };

                        function n(e, t, n, a) {
                            return Math.sqrt(Math.pow(n - e, 2) + Math.pow(a - t, 2))
                        }
                        let i = setInterval((() => {
                            t.sendWS("G", s.weapons[1], !0), 0 == p && (t.sendWS("K", 1), p = 1), setTimeout((() => {
                                t.sendWS("G", s.weapons[0], !0)
                            }), 2e3), t.buye(53, 0), n(a.x, a.y, s.x, s.y) > 5 ? t.sendWS("a", m(s, a)) : (t.sendWS("6", n(a.x, a.y, s.x, s.y) + ""), g = "no", t.sendWS("a", void 0), t.sendWS("6", n(a.x, a.y, s.x, s.y) + ""), t.sendWS("D", m(e, s) - Math.PI), clearInterval(i))
                        }), 150);
                        setTimeout((() => {
                            g = "no", clearInterval(i)
                        }), 500)
                    }
                }, t.onmessage = function(e) {
                    let n = new Uint8Array(e.data),
                        a = window.msgpack.decode(n),
                        o = a[0];
                    if (n = a[1], "io-init" == o && t.spawn(), "1" == o && (i = n[0], console.log(i)), "D" == o && n[1] && (s = new wa(n[0][0], n[0][1], Yt, Xt), s.setData(n[0]), s.inGame = !0, s.alive = !0, s.x2 = void 0, s.y2 = void 0, s.spawn(1), s.oldHealth = 100, s.health = 100, s.showName = "YEAHHH", d = {
                            x: n[0][3],
                            y: n[0][4]
                        }, c.inGame = !0, t.first && (t.first = !1, fa.push(c))), "P" == o && (t.spawn(), s.inGame = !1, c.inGame = !1), "a" == o) {
                        let e = n[0];
                        s.tick++, s.enemy = [], s.near = [], t.showName = "YEAHHH", l = [];
                        for (let t = 0; t < e.length;) e[t] == s.sid && (s.x2 = e[t + 1], s.y2 = e[t + 2], s.d2 = e[t + 3], s.buildIndex = e[t + 4], s.weaponIndex = e[t + 5], s.weaponVariant = e[t + 6], s.team = e[t + 7], s.isLeader = e[t + 8], s.skinIndex = e[t + 9], s.tailIndex = e[t + 10], s.iconIndex = e[t + 11], s.zIndex = e[t + 12], s.visible = !0, c.x2 = s.x2, c.y2 = s.y2), t += 13;
                        for (let t = 0; t < e.length;) J = Te(e[t]), J && (J.isTeam(s) || (se.push(J), J.dist2 <= Gt.weapons[null == J.primaryIndex ? 5 : J.primaryIndex].range + 2 * s.scale && re.push(J))), t += 13;
                        if (se.length && (s.near = se.sort((function(e, t) {
                                return e.dist2 - t.dist2
                            }))[0]), 1 == p && (t.sendWS("K", 1), p = 0), c.closeSocket && s.closeSockets(t), "" != c.whyDie && (s.whyDieChat(t, c.whyDie), c.whyDie = ""), s.alive) {
                            Y.team && s.team != Y.team && s.tick % 9 == 0 && (s.team && t.sendWS("N"), t.sendWS("b", Y.team));
                            let e = Gt.list[s.items[3]],
                                n = s.itemCounts[e.group.id];
                            if ((null != n ? n : 0) < 201 && s.millPlace) {
                                if (s.inGame) {
                                    if (t.sendWS("D", s.moveDir), 0 == p && (t.sendWS("K", 1), p = 1), zt.getDist(d, s, 0, 2) > 90) {
                                        let e = zt.getDirect(d, s, 0, 2);
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
                                    let e = r.filter((e => e.active && e.isItem && zt.getDist(e, Y, 0, 2) <= 600));
                                    if ("fuckemup" == getEl("mode").value) {
                                        t.selectWeapon(s.weapons[1]);
                                        let n = zt.getDist(e[0], s, 0, 2),
                                            a = zt.getDirect(e[0], s, 0, 2);
                                        if (l = r.filter((t => t.active && (!!Se(e, t.sid) || !(t.trap && (Y.sid == t.owner.sid || Y.findAllianceBySid(t.owner.sid)))) && t.isItem && zt.getDist(t, s, 0, 2) <= Gt.weapons[s.weaponIndex].range + t.scale + 10)).sort((function(e, t) {
                                                return zt.getDist(e, s, 0, 2) - zt.getDist(t, s, 0, 2)
                                            }))[0], l) {
                                            n - zt.getDist(e[0], l, 0, 0) > 0 ? (Se(e, l.sid) || (l.dmg || l.trap) ? null != s.moveDir && (s.moveDir = void 0, t.sendWS("a", s.moveDir), t.sendWS("D", s.nDir)) : (s.moveDir = a, t.sendWS("a", s.moveDir), t.sendWS("D", s.nDir)), s.nDir != zt.getDirect(l, s, 0, 2) && (s.nDir = zt.getDirect(l, s, 0, 2), t.sendWS("D", s.nDir)), 0 == p && (t.sendWS("K", 1), p = 1), t.buye(40, 0)) : (s.moveDir = a, t.sendWS("a", s.moveDir), t.sendWS("D", s.nDir), t.fastGear())
                                        } else s.moveDir = a, t.sendWS("a", s.moveDir), t.sendWS("D", s.nDir), t.fastGear()
                                    }
                                }
                                if (r.length > 0 && "flex" == getEl("mode").value) {
                                    s.sid, Math.PI, s.sid;
                                    const e = 300 * Math.cos(.01 * Date.now()) + Y.x,
                                        n = 300 * Math.sin(.01 * Date.now()) + Y.x;
                                    t.sendWS("a", Math.atan2(n - s.y, e - s.x));
                                    if (Math.hypot(e - s.x, n - s.y) > 22) return
                                }
                                if (r.length > 0 && (l = r.filter((e => e.active && e.isItem && zt.getDist(e, s, 0, 2) <= Gt.weapons[s.weaponIndex].range)).sort((function(e, t) {
                                        return zt.getDist(e, s, 0, 2) - zt.getDist(t, s, 0, 2)
                                    }))[0], l ? (0 == p && (t.sendWS("K", 1), p = 1), s.nDir != zt.getDirect(l, s, 0, 2) && (s.nDir = zt.getDirect(l, s, 0, 2), t.sendWS("D", s.nDir)), t.buye(40, 0), t.buye(11, 1)) : (t.fastGear(), t.buye(11, 1)), t.buye(11, 1), oe.length > 0 && "clear" == getEl("mode").value)) {
                                    t.selectWeapon(s.weapons[1]);
                                    let e = zt.getDist(oe[0], s, 0, 2),
                                        n = zt.getDirect(oe[0], s, 0, 2);
                                    if (l = r.filter((e => e.active && (!!Se(oe, e.sid) || !(e.trap && (Y.sid == e.owner.sid || Y.findAllianceBySid(e.owner.sid)))) && e.isItem && zt.getDist(e, s, 0, 2) <= Gt.weapons[s.weaponIndex].range + e.scale)).sort((function(e, t) {
                                            return zt.getDist(e, s, 0, 2) - zt.getDist(t, s, 0, 2)
                                        }))[0], l) {
                                        e - zt.getDist(oe[0], l, 0, 0) > 0 ? (Se(oe, l.sid) || (l.dmg || l.trap) ? null != s.moveDir && (s.moveDir = void 0, t.sendWS("a", s.moveDir), t.sendWS("D", s.nDir)) : (s.moveDir = n, t.sendWS("a", s.moveDir), t.sendWS("D", s.nDir)), s.nDir != zt.getDirect(l, s, 0, 2) && (s.nDir = zt.getDirect(l, s, 0, 2), t.sendWS("D", s.nDir)), 0 == p && (t.sendWS("K", 1), p = 1), t.buye(40, 0), t.fastGear()) : (s.moveDir = n, t.sendWS("a", s.moveDir), t.sendWS("D", s.nDir), t.fastGear())
                                    } else s.moveDir = n, t.sendWS("a", s.moveDir), t.sendWS("D", s.nDir), t.fastGear();
                                    if (e > 300 && zt.getDist(d, s, 0, 2) > 90) {
                                        let e = zt.getDirect(d, s, 0, 2);
                                        t.place(3, e + 7.7), t.place(3, e - 7.7), t.place(3, e), d = {
                                            x: s.x2,
                                            y: s.y2
                                        }
                                    }
                                }
                                if (r.length > 0 && "zync" == getEl("mode").value) {
                                    let e = r.filter((e => e.active && e.isItem && zt.getDist(e, Y, 0, 2) <= Gt.weapons[s.weaponIndex].range + e.scale));
                                    if (e.length || ("no" == g && t.sendWS("D", zt.getDirect(Y, s, 0, 2)), t.sendWS("a", m(Y, s) + Math.PI)), e.length) {
                                        let n = zt.getDist(e[0], s, 0, 2);
                                        zt.getDirect(e[0], s, 0, 2);
                                        if (l = r.filter((t => t.active && (!!Se(e, t.sid) || !(t.trap && (Y.sid == t.owner.sid || Y.findAllianceBySid(t.owner.sid)))) && t.isItem && zt.getDist(t, s, 0, 2) <= Gt.weapons[s.weaponIndex].range + t.scale)).sort((function(e, t) {
                                                return zt.getDist(e, s, 0, 2) - zt.getDist(t, s, 0, 2)
                                            }))[0], l) {
                                            n - zt.getDist(e[0], l, 0, 0) > 0 ? (Se(e, l.sid) || (l.dmg || l.trap) ? null != s.moveDir && (s.moveDir = void 0, t.sendWS("a", s.moveDir), t.sendWS("D", s.nDir)) : t.sendWS("D", s.nDir), s.nDir != zt.getDirect(l, s, 0, 2) && (s.nDir = zt.getDirect(l, s, 0, 2), t.sendWS("D", s.nDir)), 0 == p && (t.sendWS("K", 1), p = 1), t.buye(40, 0), t.fastGear()) : ("no" == g && t.sendWS("D", zt.getDirect(l, s, 0, 2)), u(Y, s) <= 110 ? t.sendWS("a", void 0) : t.sendWS("a", m(Y, s) + Math.PI))
                                        } else e.length ? ("no" == g && t.sendWS("D", zt.getDirect(e[0], s, 0, 2)), u(Y, s) <= 110 ? t.sendWS("a", void 0) : t.sendWS("a", m(Y, s) + Math.PI)) : ("no" == g && t.sendWS("D", zt.getDirect(Y, s, 0, 2)), u(Y, s) <= 110 ? t.sendWS("a", void 0) : t.sendWS("a", m(Y, s) + Math.PI))
                                    }
                                }
                            }
                        }
                    }
                    if ("H" == o) {
                        let e = n[0];
                        for (let t = 0; t < e.length;) h.add(e[t], e[t + 1], e[t + 2], e[t + 3], e[t + 4], e[t + 5], Gt.list[e[t + 6]], !0, e[t + 7] >= 0 ? {
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
                            a = n[1] + "";
                        e == Y.sid && a.includes("Sync") && t.zync(s.near)
                    }
                }, t.onclose = function() {
                    s.inGame = !1, c.inGame = !1
                }
            }

            function _a(e, t, n, a, i) {
                let o = e + n * Math.cos(a),
                    s = t + n * Math.sin(a),
                    r = .4 * n;
                i.moveTo(e, t), i.beginPath(), i.quadraticCurveTo((e + o) / 2 + r * Math.cos(a + Math.PI / 2), (t + s) / 2 + r * Math.sin(a + Math.PI / 2), o, s), i.quadraticCurveTo((e + o) / 2 - r * Math.cos(a + Math.PI / 2), (t + s) / 2 - r * Math.sin(a + Math.PI / 2), e, t), i.closePath(), i.fill(), i.stroke()
            }

            function Ia(e, t, n, a, i, o) {
                (a = a || Ee).beginPath(), a.arc(e, t, n, 0, 2 * Math.PI), o || a.fill(), i || a.stroke()
            }

            function Ca(e, t, n, a) {
                let i, o, s = Math.PI / 2 * 3,
                    r = Math.PI / t;
                e.beginPath(), e.moveTo(0, -n);
                for (let l = 0; l < t; l++) i = Math.cos(s) * n, o = Math.sin(s) * n, e.lineTo(i, o), s += r, i = Math.cos(s) * a, o = Math.sin(s) * a, e.lineTo(i, o), s += r;
                e.lineTo(0, -n), e.closePath()
            }

            function Sa(e, t, n, a, i, o, s) {
                s || i.fillRect(e - n / 2, t - a / 2, n, a), o || i.strokeRect(e - n / 2, t - a / 2, n, a)
            }

            function Ta(e, t, n, a, i, o, s, r) {
                o.save(), o.translate(e, t), i = Math.ceil(i / 2);
                for (let e = 0; e < i; e++) Sa(0, 0, 2 * n, a, o, s, r), o.rotate(Math.PI / i);
                o.restore()
            }

            function Da(e, t) {
                t = t || Ee;
                let n = e * (Math.sqrt(3) / 2);
                t.beginPath(), t.moveTo(0, -n / 2), t.lineTo(-e / 2, n / 2), t.lineTo(e / 2, n / 2), t.lineTo(0, -n / 2), t.fill(), t.closePath()
            }

            function Ma(e, t) {
                Ee.fillStyle = "#91b2db";
                const n = Date.now();
                ie.filter((e => e.active)).forEach((i => {
                    i.startTime || (i.startTime = n, i.angle = 0, i.radius = .1);
                    const o = n - i.startTime;
                    i.alpha = Math.max(0, 1 - o / 3e3), i.animate(ze), Ee.globalAlpha = i.alpha, Ee.strokeStyle = it, Ee.save(), Ee.translate(i.x - e, i.y - t), i.radius -= .001, i.angle += .0174533;
                    const s = i.radius * Math.cos(i.angle),
                        r = i.radius * Math.sin(i.angle);
                    i.x += 1 * s, i.y += 1 * r, Ee.rotate(i.angle),
                        function(e, t) {
                            (t = t || Ee).lineWidth = st, t.lineJoin = "miter";
                            let n = Math.PI / 4 * (Gt.weapons[e.weaponIndex].armS || 1),
                                i = e.buildIndex < 0 && Gt.weapons[e.weaponIndex].hndS || 1,
                                o = e.buildIndex < 0 && Gt.weapons[e.weaponIndex].hndD || 1;
                            (function(e, t, n) {
                                if (Ra = Ga[e], !Ra) {
                                    var a = new Image;
                                    a.onload = function() {
                                        this.isLoaded = !0, this.onload = null
                                    }, a.src = "https://moomoo.io/img/accessories/access_" + e + ".png", Ga[e] = a, Ra = a
                                }
                                var i = Fa[e];
                                if (!i) {
                                    for (var o = 0; o < Xt.length; ++o)
                                        if (Xt[o].id == e) {
                                            i = Xt[o];
                                            break
                                        }
                                    Fa[e] = i
                                }
                                Ra.isLoaded && (t.save(), t.translate(-20 - (i.xOff || 0), 0), i.spin && t.rotate(n.skinRot), t.drawImage(Ra, -i.scale / 2, -i.scale / 2, i.scale, i.scale), t.restore())
                            })(13, t, e), e.buildIndex < 0 && !Gt.weapons[e.weaponIndex].aboveHand && (Ya(Gt.weapons[e.weaponIndex], a.weaponVariants[e.weaponVariant || 0].src || "", e.scale, 0, t), null == Gt.weapons[e.weaponIndex].projectile || Gt.weapons[e.weaponIndex].hideProjectile || Ja(e.scale, 0, Gt.projectiles[Gt.weapons[e.weaponIndex].projectile], Ee));
                            t.fillStyle = "#ececec", Ia(e.scale * Math.cos(n), e.scale * Math.sin(n), 14), Ia(e.scale * o * Math.cos(-n * i), e.scale * o * Math.sin(-n * i), 14), e.buildIndex < 0 && Gt.weapons[e.weaponIndex].aboveHand && (Ya(Gt.weapons[e.weaponIndex], a.weaponVariants[e.weaponVariant || 0].src || "", e.scale, 0, t), null == Gt.weapons[e.weaponIndex].projectile || Gt.weapons[e.weaponIndex].hideProjectile || Ja(e.scale, 0, Gt.projectiles[Gt.weapons[e.weaponIndex].projectile], Ee));
                            if (e.buildIndex >= 0) {
                                var s = ai(Gt.list[e.buildIndex]);
                                t.drawImage(s, e.scale - Gt.list[e.buildIndex].holdOffset, -s.width / 2)
                            }
                            Ia(0, 0, e.scale, t), Oa(48, t, null, e)
                        }(i, Ee), Ee.restore(), Ee.fillStyle = "#91b2db", o >= 3e3 && (i.active = !1, i.startTime = null)
                }))
            }

            function Ua(e, t, n) {
                Ee.globalAlpha = 1, Ee.fillStyle = "#91b2db";
                for (var a = 0; a < Z.length; ++a) J = Z[a], J.zIndex == n && (J.animate(ze), J.visible && (J.skinRot += .002 * ze, Ye = d.showDir || A || J != Y ? J.dir || 0 : d.attackDir ? Y ? (Xe = un(), Xe || 0) : 0 : un(), Ee.save(), Ee.translate(J.x - e, J.y - t), Ee.rotate(Ye + J.dirPlus), Ea(J, Ee), Ee.restore()))
            }

            function Ea(e, t) {
                (t = t || Ee).lineWidth = st, t.lineJoin = "miter";
                let n = Math.PI / 4 * (Gt.weapons[e.weaponIndex].armS || 1),
                    i = e.buildIndex < 0 && Gt.weapons[e.weaponIndex].hndS || 1,
                    o = e.buildIndex < 0 && Gt.weapons[e.weaponIndex].hndD || 1,
                    s = e == Y && 3 == e.weapons[0] && 15 == e.weapons[1];
                if (e.tailIndex > 0 && function(e, t, n) {
                        if (!(Ra = qa[e + (za ? "lol" : 0)])) {
                            var a = new Image;
                            a.onload = function() {
                                this.isLoaded = !0, this.onload = null
                            }, a.src = (o = "acc", ja[i = e] && "acc" == o ? ja[i] : "acc" == o ? ".././img/accessories/access_" + i + ".png" : "hat" == o ? ".././img/hats/hat_" + i + ".png" : ".././img/weapons/" + i + ".png"), qa[e + (za ? "lol" : 0)] = a, Ra = a
                        }
                        var i, o;
                        var s = Va[e];
                        if (!s) {
                            for (var r = 0; r < Xt.length; ++r)
                                if (Xt[r].id == e) {
                                    s = Xt[r];
                                    break
                                }
                            Va[e] = s
                        }
                        Ra.isLoaded && (t.save(), t.translate(-20 - (s.xOff || 0), 0), s.spin && t.rotate(n.skinRot), t.drawImage(Ra, -s.scale / 2, -s.scale / 2, s.scale, s.scale), t.restore())
                    }(e.tailIndex, t, e), e.buildIndex < 0 && !Gt.weapons[e.weaponIndex].aboveHand && (Ya(Gt.weapons[s ? 4 : e.weaponIndex], a.weaponVariants[e.weaponVariant].src, e.scale, 0, t), null == Gt.weapons[e.weaponIndex].projectile || Gt.weapons[e.weaponIndex].hideProjectile || Ja(e.scale, 0, Gt.projectiles[Gt.weapons[e.weaponIndex].projectile], Ee)), t.fillStyle = a.skinColors[e.skinColor], Ia(e.scale * Math.cos(n), e.scale * Math.sin(n), 14), Ia(e.scale * o * Math.cos(-n * i), e.scale * o * Math.sin(-n * i), 14), e.buildIndex < 0 && Gt.weapons[e.weaponIndex].aboveHand && (Ya(Gt.weapons[e.weaponIndex], a.weaponVariants[e.weaponVariant].src, e.scale, 0, t), null == Gt.weapons[e.weaponIndex].projectile || Gt.weapons[e.weaponIndex].hideProjectile || Ja(e.scale, 0, Gt.projectiles[Gt.weapons[e.weaponIndex].projectile], Ee)), e.buildIndex >= 0) {
                    var r = ai(Gt.list[e.buildIndex]);
                    t.drawImage(r, e.scale - Gt.list[e.buildIndex].holdOffset, -r.width / 2)
                }
                Ia(0, 0, e.scale, t), e.skinIndex > 0 && (t.rotate(Math.PI / 2), function(e, t, n, a) {
                    if (!(Ra = Ha[e + (za ? "lol" : 0)])) {
                        var i = new Image;
                        i.onload = function() {
                            this.isLoaded = !0, this.onload = null
                        }, i.src = (s = "hat", Aa[o = e] && "hat" == s ? Aa[o] : "acc" == s ? ".././img/accessories/access_" + o + ".png" : "hat" == s ? ".././img/hats/hat_" + o + ".png" : ".././img/weapons/" + o + ".png"), Ha[e + (za ? "lol" : 0)] = i, Ra = i
                    }
                    var o, s;
                    var r = n || Wa[e];
                    if (!r) {
                        for (var l = 0; l < Yt.length; ++l)
                            if (Yt[l].id == e) {
                                r = Yt[l];
                                break
                            }
                        Wa[e] = r
                    }
                    Ra.isLoaded && t.drawImage(Ra, -r.scale / 2, -r.scale / 2, r.scale, r.scale);
                    !n && r.topSprite && (t.save(), t.rotate(a.skinRot), La(e + "_top", t, r, a), t.restore())
                }(e.skinIndex, t, null, e))
            }
            var Pa = {},
                Ba = {};

            function Oa(e, t, n, a) {
                if (Ra = Pa[e], !Ra) {
                    var i = new Image;
                    i.onload = function() {
                        this.isLoaded = !0, this.onload = null
                    }, i.src = "https://moomoo.io/img/hats/hat_" + e + ".png", Pa[e] = i, Ra = i
                }
                var o = n || Ba[e];
                if (!o) {
                    for (var s = 0; s < Yt.length; ++s)
                        if (Yt[s].id == e) {
                            o = Yt[s];
                            break
                        }
                    Ba[e] = o
                }
                Ra.isLoaded && t.drawImage(Ra, -o.scale / 2, -o.scale / 2, o.scale, o.scale), !n && o.topSprite && (t.save(), t.rotate(a.skinRot), Oa(e + "_top", t, o, a), t.restore())
            }
            var Aa = {
                7: "https://i.imgur.com/vAOzlyY.png",
                15: "https://i.imgur.com/YRQ8Ybq.png",
                40: "https://i.imgur.com/Xzmg27N.png",
                26: "https://i.imgur.com/I0xGtyZ.png",
                55: "https://i.imgur.com/uYgDtcZ.png",
                20: "https://i.imgur.com/f5uhWCk.png"
            };
            let Ra, Ha = {},
                Wa = {};

            function La(e, t, n, a) {
                if (Ra = Ha[e], !Ra) {
                    let t = new Image;
                    t.onload = function() {
                        this.isLoaded = !0, this.onload = null
                    }, t.src = "https://moomoo.io/img/hats/hat_" + e + ".png", Ha[e] = t, Ra = t
                }
                let i = n || Wa[e];
                if (!i) {
                    for (let t = 0; t < Yt.length; ++t)
                        if (Yt[t].id == e) {
                            i = Yt[t];
                            break
                        }
                    Wa[e] = i
                }
                Ra.isLoaded && t.drawImage(Ra, -i.scale / 2, -i.scale / 2, i.scale, i.scale), !n && i.topSprite && (t.save(), t.rotate(a.skinRot), La(e + "_top", t, i, a), t.restore())
            }
            var ja = {
                21: "https://i.imgur.com/4ddZert.png",
                19: "https://i.imgur.com/sULkUZT.png"
            };
            let qa = {},
                Va = {};
            var za = !0;
            var Ga = {},
                Fa = {};
            let Na = {};

            function Ya(e, t, n, a, i) {
                let o = e.src + (t || ""),
                    s = Na[o];
                s || (s = new Image, s.onload = function() {
                    this.isLoaded = !0
                }, s.src = "https://moomoo.io/img/weapons/" + o + ".png", Na[o] = s), s.isLoaded && i.drawImage(s, n + e.xOff - e.length / 2, a + e.yOff - e.width / 2, e.length, e.width)
            }

            function Xa(e, t, n) {
                for (let a = 0; a < ae.length; a++) J = ae[a], J.active && J.layer == e && J.inWindow && (J.update(ze), J.active && si(J.x - t, J.y - n, J.scale) && (Ee.save(), Ee.translate(J.x - t, J.y - n), Ee.rotate(J.dir), Ja(0, 0, J, Ee, 1), Ee.restore()))
            }
            let $a = {};

            function Ja(e, t, n, a, i) {
                if (n.src) {
                    let i = Gt.projectiles[n.indx].src,
                        o = $a[i];
                    o || (o = new Image, o.onload = function() {
                        this.isLoaded = !0
                    }, o.src = "https://moomoo.io/img/weapons/" + i + ".png", $a[i] = o), o.isLoaded && a.drawImage(o, e - n.scale / 2, t - n.scale / 2, n.scale, n.scale)
                } else 1 == n.indx && (a.fillStyle = "#939393", Ia(e, t, n.scale, a))
            }
            let Za = {};

            function Ka(e, t) {
                let n = e.index,
                    a = Za[n];
                if (!a) {
                    let t = new Image;
                    t.onload = function() {
                        this.isLoaded = !0, this.onload = null
                    }, t.src = "https://moomoo.io/img/animals/" + e.src + ".png", a = t, Za[n] = a
                }
                if (a.isLoaded) {
                    let n = 1.2 * e.scale * (e.spriteMlt || 1);
                    t.drawImage(a, -n, -n, 2 * n, 2 * n)
                }
            }

            function Qa(e, t, n, i) {
                let o = a.riverWidth + i,
                    s = a.mapScale / 2 - t - o / 2;
                s < Je && s + o > 0 && n.fillRect(0, s, $e, o)
            }
            let ei = {};

            function ti(e) {
                let t = e.y >= a.mapScale - a.snowBiomeTop ? 2 : e.y <= a.snowBiomeTop ? 1 : 0,
                    n = e.type + "_" + e.scale + "_" + t,
                    i = ei[n];
                if (!i) {
                    let a = document.createElement("canvas");
                    a.width = a.height = 2.1 * e.scale + st;
                    let o = a.getContext("2d");
                    if (o.translate(a.width / 2, a.height / 2), o.rotate(zt.randFloat(0, Math.PI)), o.strokeStyle = it, o.lineWidth = st, 0 == e.type) {
                        let n, a = 8;
                        o.globalAlpha = ui(e, Y) <= 250 ? .6 : 1;
                        for (let e = 0; e < 2; ++e) n = J.scale * (e ? .5 : 1), Ca(o, a, n, .7 * n), o.fillStyle = t ? e ? "#fff" : "#e3f1f4" : e ? "#b4db62" : "#9ebf57", o.fill(), e || (o.stroke(), o.shadowBlur = null, o.shadowColor = null, o.globalAlpha = 1)
                    } else if (1 == e.type)
                        if (2 == t) o.fillStyle = "#606060", Ca(o, 6, .3 * e.scale, .71 * e.scale), o.fill(), o.stroke(), o.fillStyle = "#89a54c", Ia(0, 0, .55 * e.scale, o), o.fillStyle = "#a5c65b", Ia(0, 0, .3 * e.scale, o, !0);
                        else {
                            let e;
                            ! function(e, t, n, a) {
                                let i, o = Math.PI / 2 * 3,
                                    s = Math.PI / t;
                                e.beginPath(), e.moveTo(0, -a);
                                for (let r = 0; r < t; r++) i = zt.randInt(n + .9, 1.2 * n), e.quadraticCurveTo(Math.cos(o + s) * i, Math.sin(o + s) * i, Math.cos(o + 2 * s) * a, Math.sin(o + 2 * s) * a), o += 2 * s;
                                e.lineTo(0, -a), e.closePath()
                            }(o, 6, J.scale, .7 * J.scale), o.fillStyle = t ? "#e3f1f4" : "#89a54c", o.fill(), o.stroke(), o.fillStyle = t ? "#6a64af" : "#c15555";
                            let n = 4,
                                a = 2 * Math.PI / n;
                            for (let t = 0; t < n; ++t) e = zt.randInt(J.scale / 3.5, J.scale / 2.3), Ia(e * Math.cos(a * t), e * Math.sin(a * t), zt.randInt(10, 12), o)
                        } else 2 != e.type && 3 != e.type || (o.fillStyle = 2 == e.type ? 2 == t ? "#938d77" : "#939393" : "#e0c655", Ca(o, 3, e.scale, e.scale), o.fill(), o.stroke(), o.shadowBlur = null, o.shadowColor = null, o.fillStyle = 2 == e.type ? 2 == t ? "#b2ab90" : "#bcbcbc" : "#ebdca3", Ca(o, 3, .55 * e.scale, .65 * e.scale), o.fill());
                    i = a, ei[n] = i
                }
                return i
            }
            let ni = [];

            function ai(e, t) {
                let n = ni[e.id];
                if (!n || t) {
                    let a = t ? 5 : 20,
                        i = document.createElement("canvas"),
                        o = t || "windmill" != e.name ? e.scale : Gt.list[4].scale;
                    i.width = i.height = 2.5 * o + st + (Gt.list[e.id].spritePadding || 0) + a;
                    let s = i.getContext("2d");
                    if (s.translate(i.width / 2, i.height / 2), s.rotate(t ? 0 : Math.PI / 2), s.strokeStyle = it, s.lineWidth = st * (t ? i.width / 81 : 1), t || (s.shadowBlur = 8, s.shadowColor = "rgba(0, 0, 0, 0.2)"), "apple" == e.name) {
                        s.fillStyle = "#c15555", Ia(0, 0, e.scale, s), s.fillStyle = "#89a54c";
                        let t = -Math.PI / 2;
                        _a(e.scale * Math.cos(t), e.scale * Math.sin(t), 25, t + Math.PI / 2, s)
                    } else if ("cookie" == e.name) {
                        s.fillStyle = "#cca861", Ia(0, 0, e.scale, s), s.fillStyle = "#937c4b";
                        let t, n = 4,
                            a = 2 * Math.PI / n;
                        for (let i = 0; i < n; ++i) t = zt.randInt(e.scale / 2.5, e.scale / 1.7), Ia(t * Math.cos(a * i), t * Math.sin(a * i), zt.randInt(4, 5), s, !0)
                    } else if ("cheese" == e.name) {
                        s.fillStyle = "#f4f3ac", Ia(0, 0, e.scale, s), s.fillStyle = "#c3c28b";
                        let t, n = 4,
                            a = 2 * Math.PI / n;
                        for (let i = 0; i < n; ++i) t = zt.randInt(e.scale / 2.5, e.scale / 1.7), Ia(t * Math.cos(a * i), t * Math.sin(a * i), zt.randInt(4, 5), s, !0)
                    } else if ("wood wall" == e.name || "stone wall" == e.name || "castle wall" == e.name) {
                        s.fillStyle = "castle wall" == e.name ? "#83898e" : "wood wall" == e.name ? "#a5974c" : "#939393";
                        let t = "castle wall" == e.name ? 4 : 3;
                        Ca(s, t, 1.1 * e.scale, 1.1 * e.scale), s.fill(), s.stroke(), s.fillStyle = "castle wall" == e.name ? "#9da4aa" : "wood wall" == e.name ? "#c9b758" : "#bcbcbc", Ca(s, t, .65 * e.scale, .65 * e.scale), s.fill()
                    } else if ("spikes" == e.name || "greater spikes" == e.name || "poison spikes" == e.name || "spinning spikes" == e.name) {
                        s.fillStyle = "poison spikes" == e.name ? "#7b935d" : "#939393";
                        let t = .6 * e.scale;
                        Ca(s, "spikes" == e.name ? 5 : 6, e.scale, t), s.fill(), s.stroke(), s.fillStyle = "#a5974c", Ia(0, 0, t, s), s.fillStyle = "#c9b758", Ia(0, 0, t / 2, s, !0)
                    } else if ("windmill" == e.name || "faster windmill" == e.name || "power mill" == e.name) s.fillStyle = "#a5974c", Ia(0, 0, o, s), s.fillStyle = "#c9b758", Ta(0, 0, 1.5 * o, 29, 4, s), s.fillStyle = "#a5974c", Ia(0, 0, .5 * o, s);
                    else if ("mine" == e.name) s.fillStyle = "#939393", Ca(s, 3, e.scale, e.scale), s.fill(), s.stroke(), s.fillStyle = "#bcbcbc", Ca(s, 3, .55 * e.scale, .65 * e.scale), s.fill();
                    else if ("sapling" == e.name)
                        for (let t = 0; t < 2; ++t) {
                            let n = e.scale * (t ? .5 : 1);
                            Ca(s, 7, n, .7 * n), s.fillStyle = t ? "#b4db62" : "#9ebf57", s.fill(), t || s.stroke()
                        } else if ("pit trap" == e.name) s.fillStyle = "#a5974c", Ca(s, 3, 1.1 * e.scale, 1.1 * e.scale), s.fill(), s.stroke(), s.fillStyle = it, Ca(s, 3, .65 * e.scale, .65 * e.scale), s.fill();
                        else if ("boost pad" == e.name) s.fillStyle = "#7e7f82", Sa(0, 0, 2 * e.scale, 2 * e.scale, s), s.fill(), s.stroke(), s.fillStyle = "#dbd97d", Da(1 * e.scale, s);
                    else if ("turret" == e.name) {
                        s.fillStyle = "#a5974c", Ia(0, 0, e.scale, s), s.fill(), s.stroke(), s.fillStyle = "#939393";
                        let t = 50;
                        Sa(0, -t / 2, .9 * e.scale, t, s), Ia(0, 0, .6 * e.scale, s), s.fill(), s.stroke()
                    } else if ("platform" == e.name) {
                        s.fillStyle = "#cebd5f";
                        let t = 4,
                            n = 2 * e.scale,
                            a = n / t,
                            i = -e.scale / 2;
                        for (let o = 0; o < t; ++o) Sa(i - a / 2, 0, a, 2 * e.scale, s), s.fill(), s.stroke(), i += n / t
                    } else "healing pad" == e.name ? (s.fillStyle = "#7e7f82", Sa(0, 0, 2 * e.scale, 2 * e.scale, s), s.fill(), s.stroke(), s.fillStyle = "#db6e6e", Ta(0, 0, .65 * e.scale, 20, 4, s, !0)) : "spawn pad" == e.name ? (s.fillStyle = "#7e7f82", Sa(0, 0, 2 * e.scale, 2 * e.scale, s), s.fill(), s.stroke(), s.fillStyle = "#71aad6", Ia(0, 0, .6 * e.scale, s)) : "blocker" == e.name ? (s.fillStyle = "#7e7f82", Ia(0, 0, e.scale, s), s.fill(), s.stroke(), s.rotate(Math.PI / 4), s.fillStyle = "#db6e6e", Ta(0, 0, .65 * e.scale, 20, 4, s, !0)) : "teleporter" == e.name && (s.fillStyle = "#7e7f82", Ia(0, 0, e.scale, s), s.fill(), s.stroke(), s.rotate(Math.PI / 4), s.fillStyle = "#d76edb", Ia(0, 0, .5 * e.scale, s, !0));
                    n = i, t || (ni[e.id] = n)
                }
                return n
            }
            let ii = [];

            function oi(e, t, n, a) {
                if (t.lineWidth = st, Ee.globalAlpha = .2, t.strokeStyle = it, t.save(), t.translate(n, a), t.rotate(90 ** 10), "spikes" == e.name || "greater spikes" == e.name || "poison spikes" == e.name || "spinning spikes" == e.name) {
                    t.fillStyle = "poison spikes" == e.name ? "#7b935d" : "#939393";
                    var i = e.scale;
                    Ca(t, "spikes" == e.name ? 5 : 6, e.scale, i), t.fill(), t.stroke(), t.fillStyle = "#a5974c", Ia(0, 0, i, t), Y && e.owner && Y.sid != e.owner.sid && !J.findAllianceBySid(e.owner.sid) ? t.fillStyle = "#a34040" : t.fillStyle = "#c9b758", Ia(0, 0, i / 2, t, !0)
                } else if ("turret" == e.name) {
                    Ia(0, 0, e.scale, t), t.fill(), t.stroke(), t.fillStyle = "#939393";
                    let n = 50;
                    Sa(0, -n / 2, .9 * e.scale, n, t), Ia(0, 0, .6 * e.scale, t), t.fill(), t.stroke()
                } else if ("teleporter" == e.name) t.fillStyle = "#7e7f82", Ia(0, 0, e.scale, t), t.fill(), t.stroke(), t.rotate(Math.PI / 4), t.fillStyle = "#d76edb", Ia(0, 0, .5 * e.scale, t, !0);
                else if ("platform" == e.name) {
                    t.fillStyle = "#cebd5f";
                    let n = 4,
                        a = 2 * e.scale,
                        i = a / n,
                        o = -e.scale / 2;
                    for (let s = 0; s < n; ++s) Sa(o - i / 2, 0, i, 2 * e.scale, t), t.fill(), t.stroke(), o += a / n
                } else "healing pad" == e.name ? (t.fillStyle = "#7e7f82", Sa(0, 0, 2 * e.scale, 2 * e.scale, t), t.fill(), t.stroke(), t.fillStyle = "#db6e6e", Ta(0, 0, .65 * e.scale, 20, 4, t, !0)) : "spawn pad" == e.name ? (t.fillStyle = "#7e7f82", Sa(0, 0, 2 * e.scale, 2 * e.scale, t), t.fill(), t.stroke(), t.fillStyle = "#71aad6", Ia(0, 0, .6 * e.scale, t)) : "blocker" == e.name ? (t.fillStyle = "#7e7f82", Ia(0, 0, e.scale, t), t.fill(), t.stroke(), t.rotate(Math.PI / 4), t.fillStyle = "#db6e6e", Ta(0, 0, .65 * e.scale, 20, 4, t, !0)) : "windmill" == e.name || "faster windmill" == e.name || "power mill" == e.name ? (t.fillStyle = "#a5974c", Ia(0, 0, e.scale, t), t.fillStyle = "#c9b758", Ta(0, 0, 1.5 * e.scale, 29, 4, t), t.fillStyle = "#a5974c", Ia(0, 0, .5 * e.scale, t)) : "pit trap" == e.name && (t.fillStyle = "#a5974c", Ca(t, 3, 1.1 * e.scale, 1.1 * e.scale), t.fill(), t.stroke(), Y && e.owner && Y.sid != e.owner.sid && !J.findAllianceBySid(e.owner.sid) ? t.fillStyle = "#a34040" : t.fillStyle = it, Ca(t, 3, .65 * e.scale, .65 * e.scale), t.fill());
                t.restore()
            }

            function si(e, t, n) {
                return e + n >= 0 && e - n <= $e && t + n >= 0 && Je
            }

            function ri(e, t, n) {
                let i, o, s;
                ne.forEach((r => {
                    J = r, J.active && ne.includes(r) && J.render && (o = J.x + J.xWiggle - t, s = J.y + J.yWiggle - n, 0 == e && J.update(ze), Ee.globalAlpha = J.alpha, J.layer == e && si(o, s, J.scale + (J.blocker || 0)) && (J.isItem ? (i = !J.dmg && !J.trap || J.isTeamObject(Y) ? ai(J) : function(e) {
                        let t = ii[e.id];
                        if (!t) {
                            let n = document.createElement("canvas");
                            n.width = n.height = 2.5 * e.scale + st + (Gt.list[e.id].spritePadding || 0) + 0;
                            let a = n.getContext("2d");
                            if (a.translate(n.width / 2, n.height / 2), a.rotate(Math.PI / 2), a.strokeStyle = it, a.lineWidth = st, "spikes" == e.name || "greater spikes" == e.name || "poison spikes" == e.name || "spinning spikes" == e.name) {
                                a.fillStyle = "poison spikes" == e.name ? "#7b935d" : "#939393";
                                let t = .6 * e.scale;
                                Ca(a, "spikes" == e.name ? 5 : 6, e.scale, t), a.fill(), a.stroke(), a.fillStyle = "#a5974c", Ia(0, 0, t, a), a.fillStyle = "#cc5151", Ia(0, 0, t / 2, a, !0)
                            } else "pit trap" == e.name && (a.fillStyle = "#a5974c", Ca(a, 3, 1.1 * e.scale, 1.1 * e.scale), a.fill(), a.stroke(), a.fillStyle = "#cc5151", Ca(a, 3, .65 * e.scale, .65 * e.scale), a.fill());
                            t = n, ii[e.id] = t
                        }
                        return t
                    }(J), Ee.save(), Ee.translate(o, s), Ee.rotate(J.dir), J.active || Ee.scale(J.visScale / J.scale, J.visScale / J.scale), Ee.drawImage(i, -i.width / 2, -i.height / 2), J.blocker && (Ee.strokeStyle = "#db6e6e", Ee.globalAlpha = .3, Ee.lineWidth = 6, Ia(0, 0, J.blocker, Ee, !1, !0)), Ee.restore()) : (i = ti(J), Ee.drawImage(i, o - i.width / 2, s - i.height / 2))), 3 != e || A || J.health < J.maxHealth && (Ee.fillStyle = ot, Ee.roundRect(o - a.healthBarWidth / 2 - a.healthBarPad, s - a.healthBarPad, a.healthBarWidth + 2 * a.healthBarPad, 17, 8), Ee.fill(), Ee.fillStyle = J.isTeamObject(Y) ? "#8ecc51" : "#cc5151", Ee.roundRect(o - a.healthBarWidth / 2, s, a.healthBarWidth * (J.health / J.maxHealth), 17 - 2 * a.healthBarPad, 7), Ee.fill()))
                })), 0 == e && wt.length && wt.forEach((e => {
                    o = e.x - t, s = e.y - n,
                        function(e, t, n) {
                            oi(e, Ee, t, n)
                        }(e, o, s)
                }))
            }
            class li {
                constructor(e, t) {
                    this.init = function(e, t) {
                        this.scale = 0, this.x = e, this.y = t, this.active = !0
                    }, this.update = function(e, n) {
                        this.active && (this.scale += .05 * n, this.scale >= t ? this.active = !1 : (e.globalAlpha = 1 - Math.max(0, this.scale / t), e.beginPath(), e.arc(this.x / a.mapScale * Pe.width, this.y / a.mapScale * Pe.width, this.scale, 0, 2 * Math.PI), e.stroke()))
                    }, this.color = e
                }
            }

            function ci(e, t) {
                qt = nn.find((e => !e.active)), qt || (qt = new li("#fff", a.mapPingScale), nn.push(qt)), qt.init(e, t)
            }
            let di = ["https://cdn.discordapp.com/attachments/1175772907931176991/1226209968051453962/Pngtreeskull_icon_logo_vector_illuatration_7964583.png?ex=6623f006&is=66117b06&hm=d34a6c712d3a3185a4ee966a72d839f54206d72f81a42439800706c9a6069715&", "https://cdn.discordapp.com/attachments/1175772907931176991/1226209968051453962/Pngtreeskull_icon_logo_vector_illuatration_7964583.png?ex=6623f006&is=66117b06&hm=d34a6c712d3a3185a4ee966a72d839f54206d72f81a42439800706c9a6069715&"],
                pi = {},
                hi = {},
                mi = ["crown", "skull"];

            function ui(e, t) {
                try {
                    return Math.hypot((t.y2 || t.y) - (e.y2 || e.y), (t.x2 || t.x) - (e.x2 || e.x))
                } catch (e) {
                    return 1 / 0
                }
            }

            function gi() {
                if (te.length && pt && te.forEach((e => {
                        if (zt.getDistance(e.x, e.y, Y.x, Y.y) <= 1200) ne.includes(e) || (ne.push(e), e.render = !0);
                        else if (ne.includes(e)) {
                            if (zt.getDistance(e.x, e.y, Y.x, Y.y) >= 1200) {
                                e.render = !1;
                                const t = ne.indexOf(e);
                                t > -1 && ne.splice(t, 1)
                            }
                        } else if (zt.getDistance(e.x, e.y, Y.x, Y.y) >= 1200) {
                            e.render = !1;
                            const t = ne.indexOf(e);
                            t > -1 && ne.splice(t, 1)
                        } else {
                            e.render = !1;
                            const t = ne.indexOf(e);
                            t > -1 && ne.splice(t, 1)
                        }
                    })), Ee.beginPath(), Ee.clearRect(0, 0, Ue.width, Ue.height), Ee.globalAlpha = 1, Y) {
                    let g = zt.getDistance(Fe, Ne, Y.x, Y.y),
                        f = zt.getDirection(Y.x, Y.y, Fe, Ne),
                        y = Math.min(.0045 * g * ze, g);
                    g > .05 ? (Fe += y * Math.cos(f), Ne += y * Math.sin(f)) : (Fe = Y.x, Ne = Y.y)
                } else Fe = a.mapScale / 2 + a.riverWidth, Ne = a.mapScale / 2;
                sn.active && (!sn.array || sn.chaseNear && !se.length || (Ee.lineWidth = Y.scale / 5, Ee.globalAlpha = 1, Ee.strokeStyle = "red", Ee.beginPath(), sn.array.forEach(((e, t) => {
                    let a = sn.scale / sn.grid * e.x,
                        o = sn.scale / sn.grid * e.y,
                        s = {
                            x: Y.x2 - sn.scale / 2 + a - n,
                            y: Y.y2 - sn.scale / 2 + o - i
                        };
                    0 == t ? Ee.moveTo(s.x, s.y) : Ee.lineTo(s.x, s.y)
                })), Ee.stroke()));
                let e, t = Ge - 1e3 / a.serverUpdateRate;
                for (let w = 0; w < Z.length + ais.length; ++w)
                    if (J = Z[w] || ais[w - Z.length], J && J.visible)
                        if (J.forcePos) J.x = J.x2, J.y = J.y2, J.dir = J.d2;
                        else {
                            let k = J.t2 - J.t1,
                                v = (t - J.t1) / k,
                                x = 170;
                            J.dt += ze;
                            let b = Math.min(1.7, J.dt / x);
                            e = J.x2 - J.x1, J.x = J.x1 + e * b, e = J.y2 - J.y1, J.y = J.y1 + e * b, a.anotherVisual, J.dir = Math.lerpAngle(J.d2, J.d1, Math.min(1.2, v))
                        }
                let n = Fe - $e / 2,
                    i = Ne - Je / 2;
                a.snowBiomeTop - i <= 0 && a.mapScale - a.snowBiomeTop - i >= Je ? (Ee.fillStyle = "#b6db66", Ee.fillRect(0, 0, $e, Je)) : a.mapScale - a.snowBiomeTop - i <= 0 ? (Ee.fillStyle = "#dbc666", Ee.fillRect(0, 0, $e, Je)) : a.snowBiomeTop - i >= Je ? (Ee.fillStyle = "#fff", Ee.fillRect(0, 0, $e, Je)) : a.snowBiomeTop - i >= 0 ? (Ee.fillStyle = "#fff", Ee.fillRect(0, 0, $e, a.snowBiomeTop - i), Ee.fillStyle = "#b6db66", Ee.fillRect(0, a.snowBiomeTop - i, $e, Je - (a.snowBiomeTop - i))) : (Ee.fillStyle = "#b6db66", Ee.fillRect(0, 0, $e, a.mapScale - a.snowBiomeTop - i), Ee.fillStyle = "#dbc666", Ee.fillRect(0, a.mapScale - a.snowBiomeTop - i, $e, Je - (a.mapScale - a.snowBiomeTop - i))), rt || (nt += at * a.waveSpeed * ze, nt >= a.waveMax ? (nt = a.waveMax, at = -1) : nt <= 1 && (nt = at = 1), Ee.globalAlpha = 1, Ee.fillStyle = "#dbc666", Qa(0, i, Ee, a.riverPadding), Ee.fillStyle = "#91b2db", Qa(0, i, Ee, 250 * (nt - 1))), Ee.globalAlpha = 1, Ee.strokeStyle = it, Ma(n, i), Ee.globalAlpha = 1, Ee.strokeStyle = it, ri(-1, n, i), Ee.globalAlpha = 1, Ee.lineWidth = st, Xa(0, n, i), Ua(n, i, 0), Ee.globalAlpha = 1;
                for (let _ = 0; _ < ais.length; ++_) J = ais[_], J.active && J.visible && (J.animate(ze), Ee.save(), Ee.translate(J.x - n, J.y - i), Ee.rotate(J.dir + J.dirPlus - Math.PI / 2), Ka(J, Ee), Ee.restore());
                if (ri(0, n, i), Xa(1, n, i), ri(1, n, i), Ua(n, i, 1), ri(2, n, i), ri(3, n, i), Ee.fillStyle = "#000", Ee.globalAlpha = .09, n <= 0 && Ee.fillRect(0, 0, -n, Je), a.mapScale - n <= $e) {
                    let I = Math.max(0, -i);
                    Ee.fillRect(a.mapScale - n, I, $e - (a.mapScale - n), Je - I)
                }
                if (i <= 0 && Ee.fillRect(-n, 0, $e + n, -i), a.mapScale - i <= Je) {
                    let C = Math.max(0, -n),
                        S = 0;
                    a.mapScale - n <= $e && (S = $e - (a.mapScale - n)), Ee.fillRect(C, a.mapScale - i, $e - C - S, Je - (a.mapScale - i))
                }
                Ee.globalAlpha = 1, Ee.fillStyle = "rgba(0, 5, 80, 0.55)", Ee.fillRect(0, 0, $e, Je), Ee.strokeStyle = ot, Ee.globalAlpha = 1;
                for (let T = 0; T < Z.length + ais.length; ++T)
                    if (J = Z[T] || ais[T - Z.length], J.visible && "NOOO" === J.showName) {
                        Ee.strokeStyle = ot;
                        let D = (J.team ? "[" + J.team + "] " : "") + (J.name || "");
                        if (J.isPlayer && J.sid, "" != D && "Trash Slave" != J.name) {
                            if (Ee.strokeStyle = ot, Ee.font = (J.nameScale || 30) + "px HammerSmith One", Ee.fillStyle = "#fff", Ee.textBaseline = "middle", Ee.textAlign = "center", Ee.lineWidth = J.nameScale ? 11 : 8, Ee.lineJoin = "round", Ee.strokeText(D, J.x - n, J.y - i - J.scale - a.nameY), Ee.fillText(D, J.x - n, J.y - i - J.scale - a.nameY), J.isLeader && hi.crown.isLoaded) {
                                let M = a.crownIconScale,
                                    U = J.x - n - M / 2 - Ee.measureText(D).width / 2 - a.crownPad;
                                Ee.drawImage(hi.crown, U, J.y - i - J.scale - a.nameY - M / 2 - 5, M, M)
                            }
                            if (1 == J.iconIndex && hi.skull.isLoaded) {
                                let E = a.crownIconScale,
                                    P = J.x - n - E / 2 + Ee.measureText(D).width / 2 + a.crownPad;
                                Ee.drawImage(hi.skull, P, J.y - i - J.scale - a.nameY - E / 2 - 5, E, E)
                            }
                            if (J.isPlayer && Qt.wait && le == J && pi[1].isLoaded && se.length && !A) {
                                let B = 2.2 * J.scale;
                                Ee.drawImage(pi[1], J.x - n - B / 2, J.y - i - B / 2, B, B)
                            }
                        }
                        if (J.health > 0) {
                            if ("Trash Slave" != J.name && (Ee.fillStyle = ot, Ee.roundRect(J.x - n - a.healthBarWidth - a.healthBarPad, J.y - i + J.scale + a.nameY, 2 * a.healthBarWidth + 2 * a.healthBarPad, 17, 8), Ee.fill(), Ee.fillStyle = J == Y || J.team && J.team == Y.team ? "#8ecc51" : "#cc5151", Ee.roundRect(J.x - n - a.healthBarWidth, J.y - i + J.scale + a.nameY + a.healthBarPad, 2 * a.healthBarWidth * (J.health / J.maxHealth), 17 - 2 * a.healthBarPad, 7), Ee.fill()), J.isPlayer) {
                                Ee.globalAlpha = 1;
                                let O = {
                                    primary: null == J.primaryIndex ? 1 : (Gt.weapons[J.primaryIndex].speed - J.reloads[J.primaryIndex]) / Gt.weapons[J.primaryIndex].speed,
                                    secondary: null == J.secondaryIndex ? 1 : (Gt.weapons[J.secondaryIndex].speed - J.reloads[J.secondaryIndex]) / Gt.weapons[J.secondaryIndex].speed,
                                    turret: (2500 - J.reloads[53]) / 2500
                                };
                                Ee.fillStyle = ot, Ee.roundRect(J.x - n - a.healthBarPad, J.y - i + J.scale + a.nameY - 13, a.healthBarWidth + 2 * a.healthBarPad, 17, 8), Ee.fill(), Ee.fillStyle = (J == Y || J.team && (J.team, Y.team), "#DFFF00"), Ee.roundRect(J.x - n, J.y - i + J.scale + a.nameY - 13 + a.healthBarPad, a.healthBarWidth * O.secondary, 17 - 2 * a.healthBarPad, 7), Ee.fill(), Ee.fillStyle = ot, Ee.roundRect(J.x - n - a.healthBarWidth - a.healthBarPad, J.y - i + J.scale + a.nameY - 13, a.healthBarWidth + 2 * a.healthBarPad, 17, 8), Ee.fill(), Ee.fillStyle = J == Y || J.team && J.team == Y.team ? "#0096FF" : "#ff4545", Ee.roundRect(J.x - n - a.healthBarWidth, J.y - i + J.scale + a.nameY - 13 + a.healthBarPad, a.healthBarWidth * O.primary, 17 - 2 * a.healthBarPad, 7), Ee.fill()
                            } else Ee.fillStyle = J == Y || J.team && J.team == Y.team ? "#0096FF" : "#ff4545", null != J.primaryIndex && J.reloads[J.primaryIndex] > 0 && (Ee.roundRect(J.x - n - a.healthBarWidth, J.y - i + J.scale + a.nameY + a.healthBarPad, a.healthBarWidth * (J.reloads[J.primaryIndex] / Gt.weapons[J.primaryIndex].speed), 17 - 2 * a.healthBarPad, 7), Ee.fill()), null != J.secondaryIndex && J.reloads[J.secondaryIndex] > 0 && (Ee.roundRect(J.x - n + a.healthBarWidth * ((Gt.weapons[J.secondaryIndex].speed - J.reloads[J.secondaryIndex]) / Gt.weapons[J.secondaryIndex].speed), J.y - i + J.scale + a.nameY + a.healthBarPad, a.healthBarWidth * (J.reloads[J.secondaryIndex] / Gt.weapons[J.secondaryIndex].speed), 17 - 2 * a.healthBarPad, 7), Ee.fill());
                            if (J.isPlayer) {
                                Ee.globalAlpha = 1;
                                let R = {
                                    primary: null == J.primaryIndex ? 1 : (Gt.weapons[J.primaryIndex].speed - J.reloads[J.primaryIndex]) / Gt.weapons[J.primaryIndex].speed,
                                    secondary: null == J.secondaryIndex ? 1 : (Gt.weapons[J.secondaryIndex].speed - J.reloads[J.secondaryIndex]) / Gt.weapons[J.secondaryIndex].speed,
                                    turret: (2500 - J.reloads[53]) / 2500
                                };
                                J.currentReloads || (J.currentReloads = {
                                    primary: R.primary,
                                    secondary: R.secondary,
                                    turret: R.turret
                                });
                                const H = .3;
                                J.currentReloads.primary = (1 - H) * J.currentReloads.primary + H * R.primary, J.currentReloads.secondary = (1 - H) * J.currentReloads.secondary + H * R.secondary, J.currentReloads.turret = (1 - H) * J.currentReloads.turret + H * R.turret;
                                void 0 !== J.primaryIndex && (Gt.weapons[J.primaryIndex].speed, J.reloads[J.primaryIndex], Gt.weapons[J.primaryIndex].speed), void 0 !== J.secondaryIndex && (Gt.weapons[J.secondaryIndex].speed, J.reloads[J.secondaryIndex], Gt.weapons[J.secondaryIndex].speed);
                                const W = J.x - n,
                                    L = J.y - i,
                                    j = 35,
                                    q = 2 * Math.PI / 3,
                                    V = -Math.PI / 2 + Math.PI / 3 + J.dir - Math.PI / 2,
                                    z = V + q * J.currentReloads.secondary,
                                    G = Math.PI / 2 + J.dir - Math.PI / 2,
                                    N = G + q * J.currentReloads.primary,
                                    X = Math.PI + Math.PI / 4.5 + J.dir - Math.PI / 2,
                                    $ = X + q / 1.25 * J.currentReloads.turret;

                                function o(e) {
                                    return `hsl(${e-50}, 85%, 50%, 30)`
                                }
                                if (Ee.save(), J.currentReloads.primary < .999 && (Ee.beginPath(), Ee.lineCap = "round", Ee.arc(W, L, j, G, N), Ee.lineWidth = 4, Ee.strokeStyle = o(240 * J.currentReloads.primary), Ee.stroke()), J.currentReloads.secondary < .999 && (Ee.beginPath(), Ee.lineCap = "round", Ee.arc(W, L, j, V, z), Ee.lineWidth = 4, Ee.strokeStyle = o(240 * J.currentReloads.secondary), Ee.stroke()), J.currentReloads.turret < .999 && (Ee.beginPath(), Ee.lineCap = "round", Ee.arc(W, L, j, X, $), Ee.lineWidth = 4, Ee.strokeStyle = o(240 * J.currentReloads.turret), Ee.stroke()), Ee.restore(), "Trash Slave" != J.name) {
                                    Ee.globalAlpha = 1, Ee.font = "24px HammerSmith One", Ee.fillStyle = "#9900cc", Ee.strokeStyle = ot, Ee.textBaseline = "middle", Ee.textAlign = "center", Ee.lineWidth = 8, Ee.lineJoin = "round";
                                    let K = a.crownIconScale,
                                        Q = J.x - n - K / 2 + a.crownPad - 2;
                                    Ee.strokeText("[" + (45 == J.skinIndex && J.shameTimer > 0 ? J.shameTimer : J.shameCount) + "/" + Math.round(J.pinge) + "/" + J.lastshamecount + "]", Q, J.y - i - J.scale - a.nameY + 175), Ee.fillText("[" + (45 == J.skinIndex && J.shameTimer > 0 ? J.shameTimer : J.shameCount) + "/" + Math.round(J.pinge) + "/" + J.lastshamecount + "]", Q, J.y - i - J.scale - a.nameY + 175)
                                }
                                if (!J.isTeam(Y)) {
                                    let ee = {
                                            x: qe / 2,
                                            y: Ve / 2
                                        },
                                        ae = Math.min(1, 100 * zt.getDistance(0, 0, Y.x - J.x, (Y.y - J.y) * (16 / 9)) / (a.maxScreenHeight / 2) / ee.y),
                                        ie = ee.y * ae / 2,
                                        oe = ie * Math.cos(zt.getDirect(J, Y, 0, 0)),
                                        re = ie * Math.sin(zt.getDirect(J, Y, 0, 0));
                                    Ee.save(), Ee.translate(Y.x - n + oe, Y.y - i + re), Ee.rotate(J.aim2 + Math.PI / 2);
                                    let de = 255 - 2 * J.sid;
                                    Ee.fillStyle = `rgb(${de}, ${de}, ${de})`, Ee.globalAlpha = ae;
                                    let pe = function(e, t) {
                                        t = t || Ee;
                                        let n = e * (Math.sqrt(3) / 2);
                                        t.beginPath(), t.moveTo(0, -n / 1.5), t.lineTo(-e / 2, n / 2), t.lineTo(e / 2, n / 2), t.lineTo(0, -n / 1.5), t.fill(), t.closePath()
                                    };
                                    pe(25, Ee), Ee.restore()
                                }
                                if ("pre2" == getEl("predictType").value) {
                                    Ee.lineWidth = 3, Ee.strokeStyle = "#fff", Ee.globalAlpha = 1, Ee.beginPath();
                                    let he = {
                                        x: J.x2 - n,
                                        y: J.y2 - i
                                    };
                                    Ee.moveTo(J.x - n, J.y - i), Ee.lineTo(he.x, he.y), Ee.stroke()
                                } else if ("pre3" == getEl("predictType").value) {
                                    Ee.lineWidth = 3, Ee.strokeStyle = "#cc5151", Ee.globalAlpha = 1, Ee.beginPath();
                                    let me = {
                                        x: J.x3 - n,
                                        y: J.y3 - i
                                    };
                                    Ee.moveTo(J.x - n, J.y - i), Ee.lineTo(me.x, me.y), Ee.stroke()
                                }
                            }
                        }
                    }
                if (Y && ce.autoPush && ce.pushData) {
                    Ee.lineWidth = 5, Ee.globalAlpha = 1, Ee.beginPath();
                    var s = Y.x - n,
                        r = Y.y - i,
                        l = ce.pushData.x2 - n,
                        c = ce.pushData.y2 - i,
                        d = ce.pushData.x - n,
                        p = ce.pushData.y - i;
                    Ee.moveTo(s, r), Ee.lineTo(l, c), Ee.lineTo(d, p), Ee.stroke();
                    var h = d - s,
                        m = p - r,
                        u = Math.sqrt(h * h + m * m) / 100 * 100;
                    let ue;
                    u = Math.min(100, Math.max(0, u)), Ee.fillStyle = "pink", Ee.strokeStyle = "black", Ee.lineWidth = 5, Ee.font = "27px Times New Roman";
                    let ge = ne.filter((e => e.trap && e.active && e.isTeamObject(Y) && zt.getDist(e, le, 0, 2) <= le.scale + e.getScale() + 5)).sort((function(e, t) {
                        return zt.getDist(e, le, 0, 2) - zt.getDist(t, le, 0, 2)
                    }))[0];
                    ge && (ue = ne.filter((e => e.dmg && e.active && e.isTeamObject(Y) && zt.getDist(e, ge, 0, 0) <= le.scale + ge.scale + e.scale)).sort((function(e, t) {
                        return zt.getDist(e, le, 0, 2) - zt.getDist(t, le, 0, 2)
                    }))[0]);
                    let fe = (Y.x - n + le.x - n) / 2,
                        ye = (Y.y - i + le.y - i) / 2;
                    Ee.moveTo(Y.x - n, Y.y - i), Ee.strokeText(le.aim2, fe, ye), Ee.fillText(le.aim2, fe, ye)
                }
                Ee.globalAlpha = 1, Zt.update(ze, Ee, n, i);
                for (let we = 0; we < Z.length; ++we)
                    if (J = Z[we], J.visible) {
                        if (J.chatCountdown > 0) {
                            J.chatCountdown -= ze, J.chatCountdown <= 0 && (J.chatCountdown = 0), Ee.font = "32px HammerSmith One";
                            let ke = Ee.measureText(J.chatMessage);
                            Ee.textBaseline = "middle", Ee.textAlign = "center";
                            let ve = J.x - n,
                                xe = J.y - J.scale - i - 90,
                                be = 47,
                                _e = ke.width + 17;
                            Ee.fillStyle = "rgba(0,0,0,0.2)", Ee.roundRect(ve - _e / 2, xe - be / 2, _e, be, 6), Ee.fill(), Ee.fillStyle = "#fff", Ee.fillText(J.chatMessage, ve, xe)
                        }
                        if (J.chat.count > 0)
                            if (A) J.chat.count = 0;
                            else {
                                J.chat.count -= ze, J.chat.count <= 0 && (J.chat.count = 0), Ee.font = "32px HammerSmith One";
                                let Ie = Ee.measureText(J.chat.message);
                                Ee.textBaseline = "middle", Ee.textAlign = "center";
                                let Ce = J.x - n,
                                    Se = J.y - J.scale - i + 180,
                                    Te = 47,
                                    De = Ie.width + 17;
                                Ee.fillStyle = "rgba(0,0,0,0.2)", Ee.roundRect(Ce - De / 2, Se - Te / 2, De, Te, 6), Ee.fill(), Ee.fillStyle = "#ffffff99", Ee.fillText(J.chat.message, Ce, Se)
                            }
                    }
                F.length && F.filter((e => e.active)).forEach((e => {
                        if (e.alive ? (e.alpha -= ze / 5e3, e.alpha <= 0 && (e.alpha = 0, e.active = !1)) : e.alpha <= 1 && (e.alpha += ze / 250, e.alpha >= 1 && (e.alpha = 1, e.alive = !0)), e.active) {
                            Ee.font = "20px Ubuntu";
                            let t = Ee.measureText(e.chat);
                            Ee.textBaseline = "middle", Ee.textAlign = "center";
                            let a = e.x - n,
                                o = e.y - i - 90,
                                s = 40,
                                r = t.width + 15;
                            Ee.globalAlpha = e.alpha, Ee.fillStyle = e.owner.isTeam(Y) ? "#8ecc51" : "#cc5151", Ee.strokeStyle = "rgb(25, 25, 25)", Ee.strokeText(e.owner.name, a, o - 45), Ee.fillText(e.owner.name, a, o - 45), Ee.lineWidth = 5, Ee.fillStyle = "#ccc", Ee.strokeStyle = "rgb(25, 25, 25)", Ee.roundRect(a - r / 2, o - s / 2, r, s, 6), Ee.stroke(), Ee.fill(), Ee.fillStyle = "#fff", Ee.strokeStyle = "#000", Ee.strokeText(e.chat, a, o), Ee.fillText(e.chat, a, o), e.y -= ze / 100
                        }
                    })), Ee.globalAlpha = 1,
                    function(e) {
                        if (Y && Y.alive) {
                            Be.clearRect(0, 0, Pe.width, Pe.height), Be.lineWidth = 4;
                            for (let t = 0; t < nn.length; ++t) qt = nn[t], Be.strokeStyle = qt.color, qt.update(Be, e);
                            if (Be.globalAlpha = 1, Be.fillStyle = "#ff0000", an.length) {
                                Be.fillStyle = "#abcdef", Be.font = "34px HammerSmith One", Be.textBaseline = "middle", Be.textAlign = "center";
                                for (let e = 0; e < an.length;) Be.fillText("!", an[e].x / a.mapScale * Pe.width, an[e].y / a.mapScale * Pe.height), e += 2
                            }
                            if (Be.globalAlpha = 1, Be.fillStyle = "#fff", Ia(Y.x / a.mapScale * Pe.width, Y.y / a.mapScale * Pe.height, 7, Be, !0), Be.fillStyle = "rgba(255,255,255,0.35)", Y.team && jt)
                                for (let e = 0; e < jt.length;) Ia(jt[e] / a.mapScale * Pe.width, jt[e + 1] / a.mapScale * Pe.height, 7, Be, !0), e += 2;
                            fa.length && fa.forEach((e => {
                                e.inGame && (Be.globalAlpha = 1, Be.strokeStyle = "#cc5151", Ia(e.x2 / a.mapScale * Pe.width, e.y2 / a.mapScale * Pe.height, 7, Be, !1, !0))
                            })), Lt && (Be.fillStyle = "#fc5553", Be.font = "34px HammerSmith One", Be.textBaseline = "middle", Be.textAlign = "center", Be.fillText("x", Lt.x / a.mapScale * Pe.width, Lt.y / a.mapScale * Pe.height)), tn && (Be.fillStyle = "#fff", Be.font = "34px HammerSmith One", Be.textBaseline = "middle", Be.textAlign = "center", Be.fillText("x", tn.x / a.mapScale * Pe.width, tn.y / a.mapScale * Pe.height))
                        }
                    }(ze)
            }

            function fi(e) {
                getEl("instaType").disabled = e, getEl("antiBullType").disabled = e, getEl("predictType").disabled = e
            }! function() {
                for (let e = 0; e < mi.length; ++e) {
                    let t = new Image;
                    t.onload = function() {
                        this.isLoaded = !0
                    }, t.src = "./../img/icons/" + mi[e] + ".png", hi[mi[e]] = t
                }
                for (let e = 0; e < di.length; ++e) {
                    let t = new Image;
                    t.onload = function() {
                        this.isLoaded = !0
                    }, t.src = di[e], pi[e] = t
                }
            }(), window.requestAnimFrame = function() {
                    return null
                }, window.rAF = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e) {
                    window.setTimeout(e, 1e3 / 9)
                },
                function e() {
                    Ge = performance.now(), ze = Ge - Ke, Ke = Ge;
                    let t = performance.now(),
                        n = t - q.last;
                    n >= 1e3 && (q.ltime = q.time * (1e3 / n), q.last = t, q.time = 0), q.time++, getEl("pingFps").innerHTML = `${window.pingTime}ms | Fps: ${Math.round(q.ltime)}`, getEl("packetStatus").innerHTML = H, gi(), rAF(e), ft.avg = Math.round((ft.min + ft.max) / 2)
                }(), fi(A), window.debug = function() {
                    ce.waitHit = 0, ce.autoAim = !1, Qt.isTrue = !1, Kt.inTrap = !1, ni = [], ii = [], ei = []
                }, window.wasdMode = function() {
                    A = !A, fi(A)
                }, window.startGrind = function() {
                    if (getEl("weaponGrind").checked)
                        for (let e = 0; e < 2 * Math.PI; e += Math.PI / 2) Dt(Y.getItemType(22), e)
                };
            let yi = ["adorable-eight-guppy", "galvanized-bittersweet-windshield"],
                wi = 0;
            window.connectFillBots = function() {
                o = [], wi = 0;
                for (let e = 0; e < yi.length; e++) {
                    let t = new WebSocket(`wss://${yi[e]}.glitch.me`);
                    t.binaryType = "arraybuffer", t.onopen = function() {
                        t.ssend = function(e) {
                            let n = Array.prototype.slice.call(arguments, 1),
                                a = window.msgpack.encode([e, n]);
                            t.send(a)
                        };
                        for (let e = 0; e < 4; e++) window.grecaptcha.execute("6LfahtgjAAAAAF8SkpjyeYMcxMdxIaQeh-VoPATP", {
                            action: "homepage"
                        }).then((function(e) {
                            let n = U.url.split("wss://")[1].split("?")[0];
                            t.ssend("bots", "wss://" + n + "?token=re:" + encodeURIComponent(e), wi), o.push([t]), wi++
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
                for (let e = 0; e < (fa.length < 3 ? 3 : 4); e++) window.grecaptcha.execute("6LfahtgjAAAAAF8SkpjyeYMcxMdxIaQeh-VoPATP", {
                    action: "homepage"
                }).then((function(e) {
                    ba(e)
                }))
            }, window.destroyBots = function() {
                fa.forEach((e => {
                    e.closeSocket = !0
                })), fa = []
            }, window.resBuild = function() {
                te.length && (te.forEach((e => {
                    e.breakObj = !1
                })), oe = [])
            }, window.toggleBotsCircle = function() {
                Y.circle = !Y.circle
            }, window.toggleVisual = function() {
                a.anotherVisual = !a.anotherVisual, te.forEach((e => {
                    e.active && (e.dir = e.lastDir)
                }))
            }, window.prepareUI = function(e) {
                pn();
                document.getElementById("chatBox"), document.getElementById("chatHolder");
                document.createElement("div").id = "suggestBox";
                zt.removeAllChildren(Le);
                for (let e = 0; e < Gt.weapons.length + Gt.list.length; ++e) ! function(e) {
                    zt.generateElement({
                        id: "actionBarItem" + e,
                        class: "actionBarItem",
                        style: "display:none; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5)",
                        onmouseout: function() {
                            dn()
                        },
                        parent: Le
                    })
                }(e);
                for (let t = 0; t < Gt.list.length + Gt.weapons.length; ++t) ! function(t) {
                    let n = document.createElement("canvas");
                    n.width = n.height = 66;
                    let i = n.getContext("2d");
                    if (i.translate(n.width / 2, n.height / 2), i.imageSmoothingEnabled = !1, i.webkitImageSmoothingEnabled = !1, i.mozImageSmoothingEnabled = !1, Gt.weapons[t]) {
                        i.rotate(Math.PI);
                        let o = new Image;
                        Na[Gt.weapons[t].src] = o, o.onload = function() {
                            this.isLoaded = !0;
                            let e = 1 / (this.height / this.width),
                                o = Gt.weapons[t].iPad || 1;
                            i.drawImage(this, -n.width * o * a.iconPad * e / 2, -n.height * o * a.iconPad / 2, n.width * o * e * a.iconPad, n.height * o * a.iconPad), i.fillStyle = "rgba(0, 0, 70, 0.2)", i.globalCompositeOperation = "source-atop", i.fillRect(-n.width / 2, -n.height / 2, n.width, n.height), getEl("actionBarItem" + t).style.backgroundImage = "url(" + n.toDataURL() + ")"
                        }, o.src = "./../img/weapons/" + Gt.weapons[t].src + ".png";
                        let s = getEl("actionBarItem" + t);
                        s.onclick = zt.checkTrusted((function() {
                            Ct(e.weapons[Gt.weapons[t].type])
                        })), zt.hookTouchEvents(s)
                    } else {
                        let o = ai(Gt.list[t - Gt.weapons.length], !0),
                            s = Math.min(n.width - a.iconPadding, o.width);
                        i.globalAlpha = 1, i.drawImage(o, -s / 2, -s / 2, s, s), i.fillStyle = "rgba(0, 0, 70, 0.1)", i.globalCompositeOperation = "source-atop", i.fillRect(-s / 2, -s / 2, s, s), getEl("actionBarItem" + t).style.backgroundImage = "url(" + n.toDataURL() + ")";
                        let r = getEl("actionBarItem" + t);
                        r.onclick = zt.checkTrusted((function() {
                            It(e.items[e.getItemType(t - Gt.weapons.length)])
                        })), zt.hookTouchEvents(r)
                    }
                }(t)
            }, window.profineTest = function(e) {
                if (e) {
                    let t = e + "";
                    return t = t.slice(0, a.maxNameLength), t
                }
            }
        }(), (window.location.hostname.includes("moomoo.io") || window.location.hostname.includes("sandbox.moomoo.io") || window.location.hostname.includes("dev.moomoo.io")) && (() => {
            "use strict";
            const e = 1e3,
                t = 80,
                n = new Set(["pp", "rmd"]),
                a = new Set(["5", "c", "33", "2", "7", "13c"]);
            const i = new class {
                constructor() {
                    this.resetRateLimit()
                }
                resetRateLimit() {
                    this.packetHistory = new Map, this.packetQueue = [], this.lastSent = Date.now()
                }
                isRateLimited(i) {
                    const o = new Uint8Array(i);
                    console.log({
                        data: i
                    }), Date.now() - this.lastSent > e && this.resetRateLimit();
                    const s = o[0];
                    if (!n.has(s)) {
                        if (this.packetHistory.has(s) && ("2" === s || "33" === s) && this.packetHistory.get(s)[0] === o[1]) return !0;
                        if (this.packetQueue.length > t) return a.has(s) || this.packetQueue.push(i);
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
                            if (i.packetQueue.length) {
                                51 === new Uint8Array(e.data)[0] && (t.send(i.packetQueue[0]), i.packetQueue.shift())
                            }
                        })), t.messageListenerSet = !0), !i.isRateLimited(n)) return Reflect.apply(e, t, n)
                }
            })
        })(), (async() => {
            unsafeWindow.weaponVariantProgress = !0, document.addEventListener("DOMContentLoaded", (() => {
                const e = document.createElement("style");
                e.innerText = "\n\t\t.weaponVariantBar {\n\t\t\tmargin-top: 63px;\n\t\t\theight: 3px;\n\t\t\tborder-radius: 4px;\n\t\t}\n\n\t\t@media only screen and (max-width: 896px) {\n\t\t\t.weaponVariantBar {\n\t\t\t\tmargin-top: 41px;\n\t\t\t}\n\t\t}\n\t\t", document.head.appendChild(e)
            }));
            let e, t, n = !1,
                a = {},
                i = {},
                o = {},
                s = 0,
                r = 0;

            function l(e) {
                return new Promise((t => {
                    if (document.querySelector(e)) return t(document.querySelector(e));
                    const n = new MutationObserver((a => {
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
                                    a = {};
                                    const e = localStorage.getItem("moofoll");
                                    i = {
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
                                        t = p[0][n + 5], a[t] < unsafeWindow.config.weaponVariants[p[0][n + 6]].xp ? (a[t] = unsafeWindow.config.weaponVariants[p[0][n + 6]].xp, c(t)) : a[t] >= unsafeWindow.config.weaponVariants[p[0][n + 6] + 1] ? .xp && (a[t] -= a[t] - unsafeWindow.config.weaponVariants[p[0][n + 6] + 1].xp + 100, c(t));
                                        break
                                    }
                                break;
                            case OLDPACKETCODE.RECEIVE[9]:
                                if ("kills" === p[0]) break;
                                const n = t;
                                null == a[n] && (a[n] = 0);
                                const d = p[1] - i[p[0]];
                                if (d > 0) {
                                    if ("points" === p[0] && [Math.ceil(s), Math.floor(s)].includes(d) && Date.now() - r > 800) {
                                        r = Date.now(), i[p[0]] = p[1], c(n);
                                        break
                                    }
                                    if ("points" === p[0] && d >= 100) {
                                        i[p[0]] = p[1], c(n);
                                        break
                                    }
                                    a[n] += d
                                }
                                i[p[0]] = p[1], c(n)
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
                a[e] >= 12e3 ? (t = "none", n = 0) : a[e] >= 7e3 ? (t = "rgb(255, 113, 111)", n = (a[e] - 7e3) / 5e3 * 100) : a[e] >= 3e3 ? (t = "rgb(134, 181, 255)", n = (a[e] - 3e3) / 4e3 * 100) : a[e] >= 0 && (t = "rgb(247, 207, 69)", n = a[e] / 3e3 * 100), document.getElementById("variantBar" + e).style.width = n + "%", document.getElementById("variantBar" + e).style.backgroundColor = t
            }
        })(), (async() => {
            unsafeWindow.reloadTimer = !0;
            let e = [300, 400, 400, 300, 300, 700, 300, 100, 400, 600, 400, 0, 700, 230, 700, 1500],
                t = ["hammer_1", "axe_1", "great_axe_1", "sword_1", "samurai_1", "spear_1", "bat_1", "dagger_1", "stick_1", "bow_1", "great_hammer_1", "shield_1", "crossbow_1", "crossbow_2", "grab_1", "musket_1"],
                n = null,
                a = null,
                i = !1,
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
                                i = !0, a = r[0], console.log({
                                    mySID: a
                                });
                                break;
                            case OLDPACKETCODE.RECEIVE[11]:
                                i = !1, o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                                break;
                            case OLDPACKETCODE.RECEIVE[7]:
                                r[0] == a && (o[r[2]] = e[r[2]]);
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
                                    let a = r[0] - 35 * Math.cos(r[2]),
                                        i = r[1] - 35 * Math.sin(r[2]);
                                    Math.sqrt((a -= n.x) * a + (i -= n.y) * i) <= 70 && (o[t] = e[t])
                                }
                        }
                    })), t(this)
                }
            })), l = Date.now(), unsafeWindow.requestAnimationFrame((function e() {
                s = Date.now(), r = s - l, l = s, i && n && (-1 == n.buildIndex && (o[n.weaponIndex] = Math.max(0, o[n.weaponIndex] - r)), null != n.weapons[0] && (c.style.backgroundImage = `url(../img/weapons/${t[n.weapons[0]]}.png)`, c.innerText = o[n.weapons[0]]), null != n.weapons[1] ? (d.style.backgroundImage = `url(../img/weapons/${t[n.weapons[1]]}.png)`, d.style.backgroundColor = "rgba(0, 0, 0, 0.25)", d.innerText = o[n.weapons[1]]) : (d.style.backgroundImage = null, d.style.backgroundColor = null, d.innerText = "-")), unsafeWindow.requestAnimationFrame(e)
            }));
            const p = Symbol("minimapCounter");
            var h;
            return Object.defineProperty(Object.prototype, "minimapCounter", {
                get() {
                    return this[p]
                }, set(e) {
                    this[p] = e, !0 === this.isPlayer && this.sid === a && (n = this)
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
                    return a
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
        const a = document.createElement("button");
        a.textContent = "Falling", t.appendChild(a);
        const i = document.createElement("button");
        i.textContent = "Lonely_Way", t.appendChild(i);
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
        })), a.addEventListener("click", (() => {
            r("https://cdn.discordapp.com/attachments/1016399895885795368/1087483669217812510/Rival_-_Falling_with_CRVN__NCS_Release_.mp3")
        })), i.addEventListener("click", (() => {
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