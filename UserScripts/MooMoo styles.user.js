// @name MooMoo styles
// @namespace http://tampermonkey.net/
// @version 2024-04-23
// @description try to take over the world!
// @author You
// @match *://moomoo.io/*
// @match *://dev.moomoo.io/*
// @match *://sploop.io/*
// @match *://sandbox.moomoo.io/*
// @match *://tjmoomoo.ml/*
// @icon https://www.google.com/s2/favicons?sz=64&domain=moomoo.io
// @require https://ksw2-center.glitch.me/users/fzb/antiinvis_1
// @require http://code.jquery.com/jquery-3.3.1.min.js
// @require https://code.jquery.com/ui/1.12.0/jquery-ui.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.0/jquery-confirm.min.js
// @require https://raw.githubusercontent.com/naquangaston/HostedFiles/main/UserScripts/Updater.js
// @grant GM_getValue
// @grant GM_setValue
// @grant GM_addValueChangeListener
function random(e) {
    return e[Math.floor(Math.random() * e.length)]
}

function dispatchAllMouseEvents(e) {
    ["click", "mouseover", "mouseenter", "mousemove", "mousedown", "mouseup", "mouseout", "mouseleave"].forEach((t => {
        e.dispatchEvent(new MouseEvent(t, {
            bubbles: !0,
            isTrusted: !0
        }))
    }))
}

function dispatchAllInputEvents(e, t) {
    ["focus", "input", "change", "blur"].forEach((n => {
        e.dispatchEvent(new Event(n, {
            bubbles: !0,
            isTrusted: !0
        })), "input" === n && (e.value = t)
    }))
}

function add_Style(e) {
    var t, [n, o, r, a] = ["createElement", "textContent", "head", "appendChild"],
        i = {get t() {
                return document
            }
        };
    (t = i.k[n]("style"))[o] = e, i.k[r][a](t)
}

function SetUpSploop() {
    function e(e = 0, n = 0, o = 0) {
        t(0), !Number.isNaN(e) && findhref2(id("skins-middle-main"), "img").filter((t => t.src.includes(`skin${e}`))).click(), t(1), !Number.isNaN(n) && findhref2(id("skins-middle-main"), "img").filter((e => e.src.includes(`accessory${n}`))).click(), t(2), !Number.isNaN(o) && findhref2(id("skins-middle-main"), "img").filter((e => e.src.includes(`back${o}`))).click(), t(0)
    }

    function t(e) {
        findhref2(id("skins-categories"), "img")[e].click()
    }

    function n() {
        t(0), !Number.isNaN(GM_getValue("skin")) && findhref2(id("skins-middle-main"), "img").filter((e => e.src.includes(`skin${GM_getValue("skin")}`)))[0].click(), t(1), !Number.isNaN(GM_getValue("accessory")) && findhref2(id("skins-middle-main"), "img").filter((e => e.src.includes(`accessory${GM_getValue("accessory")}`)))[0].click(), t(2), !Number.isNaN(GM_getValue("back")) && findhref2(id("skins-middle-main"), "img").filter((e => e.src.includes(`back${GM_getValue("back")}`)))[0].click(), t(0)
    }
    var o, r, a, i, l, d = null;
    if (_loadFit = e, _GM_setValue = GM_setValue, _GM_getValue = GM_getValue, new Promise(((e, t) => t = setInterval((() => findhref2(id("skins-middle-main"), "img").length && (clearInterval(t), e())), 100))).then((async e => {
            await o(1e3), alt || (!Number.isNaN(GM_getValue("skin")) && findhref2(id("skins-middle-main"), "img").filter((e => e.src.includes(`skin${GM_getValue("skin")}`))).click(), t(1), !Number.isNaN(GM_getValue("accessory")) && findhref2(id("skins-middle-main"), "img").filter((e => e.src.includes(`accessory${GM_getValue("accessory")}`))).click(), t(2), !Number.isNaN(GM_getValue("back")) && findhref2(id("skins-middle-main"), "img").filter((e => e.src.includes(`back${GM_getValue("back")}`))).click(), t(0))
        })), id("game-left-content-main").style.overflow = "scroll", id("da-right").parentNode.style.overflow = "scroll", _setUp) {
        return
    }
    add_Style("\n#log{\n    background-color: rgba(0,0,0,0);\n    color: lightgreen;\n}\n.empty{\n    content: attr(value);\n}\nselect,select:focus{\n    background-color: rgba(0,0,0,0);\n    outline: none;\n    border: none;\n    color: rgb(255, 136, 0);\n}\nbutton{\n    background-color: rgba(0,0,0,0);\n    outline: none;\n    border: 2px solid rgb(208, 255, 0);\n    color: rgb(94, 255, 0);\n}\nbutton:hover,input:focus{\n    background-color: rgba(0,0,0,0);\n    outline: none;\n    border: 2px solid rgb(255, 0, 0);\n    color: rgb(0, 132, 255);\n}\n#skin-message{\n\tborder: 2px solid red;\n    background-color: rgba(0,0,0,0);\n}\n.green{border: 2px solid green;}\n.red{border: 2px solid blue;}\n::-webkit-scrollbar{\n    display:none;\n}\nspan.first{\n    border-top: 1px solid white;\n    border-bottom: 1px solid white;\n    border-left: 1px solid white;\n}\nspan.middle{\n    border-top: 1px solid white;\n    border-bottom: 1px solid white;\n}\nspan.last{\n    border-top: 1px solid white;\n    border-bottom: 1px solid white;\n    border-right: 1px solid white;\n}\ndel{\n    text-decoration: line-through;\n    color: red;\n    border-radius: 3px;\n    border: 1px solid coral;\n    background-color: rgba(111,8,8,1);\n}\nins{\n    background-color: rgba(7,92,7,1);\n    color: rgba(56,233,56,1);\n    border-radius: 3px;\n    border: 1px solid lightgreen;\n}\ntextarea{\n    text-overflow: clip;\n\n}");
    const s = new bool;
    let c = id("clan-menu");
    game_.o = !0, game_.i = 5e3, game_.l = function() {
        return "flex" == document.querySelector(sploopMenu).style.display
    }, game_.u = function() {
        if (alt && !d) {
            randomFit.element.click();
            const {
                p: e,
                back: t,
                m: n
            } = localStorage;
            d = {
                p: e,
                back: t,
                m: n
            }
        } else {
            const {
                p: t,
                back: n,
                m: o
            } = d;
            e(t, o, n)
        }
        play.click(), n()
    }, o = e => new Promise((t => setTimeout(t, e))), _game_ = game_, _setUp = !0;
    let u = id("game-left-content-main"),
        p = ["#game-bottom-content", "#game-right-content-main"];
    ! function() {
        var [e, t, n, o, r, a] = ["map", "forEach", "log", "length", "children", "remove"], i = {get _() {
                return console
            }
        };
        p[e]($)[t]((e => {
            i.sn[n]({
                s: e
            }), e[o] && [...e[0][r]][t]((e => e[a]()))
        }))
    }(), r = id("da-right");
    new element("div").style({
        padding: "10px",
        backgroundColor: "rgba(0, 0, 0, 0)",
        color: "#000",
        border: "1px solid #ddd",
        marginBottom: "10px"
    }).append(new element("h2").set("innerText", "MooMoo/Sploop styles")).append(new element("p").set("innerText", "This script can:")).append(new element("ul").append(new element("li").set("innerText", "Change the game's look")).append(new element("li").set("innerText", "Add a built-in YouTube embed video player")).append(new element("li").set("innerText", "Include a random fit generator button")).append(new element("li").set("innerText", "Implement anti-kick functionality from being AFK")).append(new element("li").set("innerText", "Create alts")).append(new element("li").set("innerText", "Automatically join the game and turn on antikick for alts"))).h(r);
    const m = new element("div").style({
        padding: "10px",
        backgroundColor: "#f8d7da",
        color: "#721c24",
        border: "1px solid #f5c6cb",
        borderRadius: "5px",
        cursor: "pointer"
    }).set("innerText", "Using this script may have consequences, including but not limited to account banning. Use at your own risk. Click to hide.").on("click", (function() {
        this.remove(), localStorage.seen = 1
    })).h("#game-bottom-content");
    if (1 == localStorage.seen && m.element.remove(), id("lostworld-io_300x250_2").remove(), new element("br").h(u), a = new element("button").set("innerText", "AntiKick:false").on("click", (function(e) {
            s.toggle(), e.target.innerText = `AntiKick:${s.status}`, s.status ? game_.start() : game_.stop()
        })).h(u), new element("br").h(u), new element("button").set("innerText", "SpawnAlt").on("click", (function(e) {
            var t, n, o;
            GM_setValue("skin", localStorage.p || 0), GM_setValue("accessory", localStorage.m || 0), GM_setValue("back", localStorage.back || 0), GM_setValue("server", id("server-select").selectedOptions[0].getAttribute("region")), GM_setValue("gm", [id("ffa-mode"), id("sandbox-mode"), id("event-mode")].map((e => [...e.classList].includes("dark-blue-button-3-active"))).indexOf(!0)), t = id("create_clan"), id("leave_clan"), id("clan-menu-clan-name-input"), "none" == t.style.display || (n = id("create-clan-button"), (o = id("clan-menu-clan-name-input")).dispatchEvent(new Event("focus", {
                bubbles: !0
            })), o.dispatchEvent(new Event("input", {
                bubbles: !0
            })), o.dispatchEvent(new Event("change", {
                bubbles: !0
            })), o.value = "Alts", o.dispatchEvent(new Event("blur", {
                bubbles: !0
            })), n.click(), n.dispatchEvent(new Event("click")), new Promise((e => {
                var t = setInterval((() => {
                    "Clans" != c.children[0].innerText && (clearInterval(t), e())
                }), 200)
            })).then((e => {
                _GM_setValue("clan", c.children[0].innerText)
            }))), open(location.href, "alt" + Date.now())
        })).h(u), new element("br").h(u), new element(findhref2(id("skin-message"))[0]), randomFit = new element("button").h(u).on("click", (function(e) {
            var [t, n] = ["forEach", "click"];
            findhref2(id("skins-categories"), "img")[t](((e, t) => {
                e[n](), random(findhref2(id("skins-middle-main"), "img"))[n]()
            }))
        })).set("innerText", "Generate Random Fit"), function() {
            var [e, t, n, o, r, a] = ["children", "insertAdjacentElement", "style", "on", "set", "element"];
            id("skin-message")[e][1][t]("afterend", new element("button", {
                k: "button-type-1 blue-discord-button text-shadowed-3"
            })[n]({
                height: "15%",
                position: "absolute",
                top: "15%"
            })[o]("click", (function(e) {
                var [t, n] = ["forEach", "click"];
                findhref2(id("skins-categories"), "img")[t](((e, t) => {
                    e[n](), random(findhref2(id("skins-middle-main"), "img"))[n]()
                }))
            }))[r]("innerText", "Generate Random Fit")[a])
        }(), function() {
            var [e, t, o, r, a, i] = ["children", "insertAdjacentElement", "style", "on", "set", "element"];
            id("skin-message")[e][1][t]("afterend", new element("button", {
                k: "button-type-1 blue-discord-button text-shadowed-3"
            })[o]({
                height: "15%",
                left: "8%",
                position: "absolute"
            })[r]("click", (function(e) {
                n()
            }))[a]("innerText", "Reset Fit")[i])
        }(), function() {
            var [e, t, n, o, r, a] = ["children", "insertAdjacentElement", "style", "on", "set", "element"];
            id("skin-message")[e][1][t]("afterend", new element("button", {
                k: "button-type-1 blue-discord-button text-shadowed-3"
            })[n]({
                height: "15%",
                left: "50%",
                position: "absolute"
            })[o]("click", (function(e) {
                const {
                    p: t,
                    back: n,
                    m: o
                } = localStorage;
                d = {
                    p: t,
                    back: n,
                    m: o
                }, GM_setValue("skin", localStorage.p || 0), GM_setValue("accessory", localStorage.m || 0), GM_setValue("back", localStorage.back || 0)
            }))[r]("innerText", "Save Fit")[a])
        }(), addEventListener("unload", (function() {
            GM_getValue("skin") && (localStorage.p = GM_getValue("skin")), GM_getValue("accessory") && (localStorage.m = GM_getValue("accessory")), GM_getValue("back") && (localStorage.m = GM_getValue("accessory"))
        })), alt) {
        let t = GM_getValue("server");
        i = id("server-select"), new Promise((e => {
            var t = setInterval((() => {
                "none" == id("small-waiting").style.display && (clearInterval(t), e())
            }), 200)
        })).then((e => {
            [id("ffa-mode"), id("sandbox-mode"), id("event-mode")][GM_getValue("gm")].click(), new Promise((e => {
                var t = setInterval((() => {
                    "none" == id("small-waiting").style.display && (clearInterval(t), e())
                }), 200)
            })).then((e => {
                let n = i.selectedIndex = [...id("server-select").options].map((e => e.getAttribute("region"))).indexOf(t);
                i.dispatchEvent(new Event("click")), i.selectedIndex = n, i.dispatchEvent(new Event("change")), a.element.dispatchEvent(new Event("click")), new Promise((e => {
                    var t = setInterval((() => {
                        "flex" != document.querySelector(sploopMenu).style.display && (clearInterval(t), e(id("clan-menu")))
                    }), 200)
                })).then((e => {
                    async function t() {
                        for (dispatchAllMouseEvents(id("leave-clan-button"));
                            "block" != id("create_clan").style.display;) {
                            await r(100)
                        }
                        return !0
                    }
                    e.style.display = "block";
                    GM_getValue("clan");
                    let n = [...id("clan_menu_content").children].filter((e => e.getElementsByTagName("p")[0].innerText == _GM_getValue("clan"))),
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
                    }
                    let r = e => new Promise((t => setTimeout(t, e)));
                    GM_addValueChangeListener("clan_", (function(e, n, o) {
                        o.v && ("block" != id("create_clan").style.display ? t().then((async e => {
                            for (;
                                "block" == id("create_clan").style.display;) {
                                let e = [...id("clan_menu_content").children].filter((e => e.getElementsByTagName("p")[0].innerText == o.name));
                                e[0].children[1].children[0].onmouseup({
                                    bubbles: !0,
                                    isTrusted: !0
                                }), await o(100)
                            }
                        })) : (async e => {
                            for (;
                                "block" == id("create_clan").style.display;) {
                                let e = [...id("clan_menu_content").children].filter((e => e.getElementsByTagName("p")[0].innerText == o.name));
                                e[0].children[1].children[0].onmouseup({
                                    bubbles: !0,
                                    isTrusted: !0
                                }), await o(100)
                            }
                        })())
                    }))
                }))
            }))
        })), id("play").addEventListener("click", (function(t) {
            const {
                nickname: n,
                p: o,
                back: r,
                m: a
            } = localStorage;
            !e && (d = {
                p: o,
                back: r,
                m: a
            })
        }))
    } else {
        id("play").addEventListener("click", (function(e) {
            const {
                nickname: t,
                p: n,
                back: o,
                m: r
            } = localStorage;
            GM_setValue("skin", localStorage.p || 0), GM_setValue("accessory", localStorage.m || 0), GM_setValue("back", localStorage.back || 0)
        })), l = "", _loop = setInterval((() => {
            c.children[0].innerText != l && (l = c.children[0].innerText, GM_setValue("clan_", {
                v: "block" != id("create_clan").style.display,
                name: c.children[0].innerText
            }))
        }))
    }
}

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

function cSs() {
    function setplayer_(e) {
        var t = _0x44d661,
            n = e[t(612)];
        return [setElement(new Player(n)[t(554)]), n[t(453)]("list")[1], n]
    }

    function getP(e) {
        var t = _0x44d661,
            n = e[t(453)]("&"),
            o = (n[0], n[1]);
        n[2];
        return o ? o[t(453)]("=")[1] : window.default_list
    }

    function getlink(e) {
        return setup(setElement(e), getP(e))
    }

    function setup(e, t) {
        var n = _0x44d661;
        if (e && t) {
            return n(468) + e + n(684) + t
        }
    }

    function setplayer(e) {
        var t = _0x44d661;
        e[t(612)] = setup(setElement(new Player(e[t(612)]).set), e.src[t(453)](t(626))[1])
    }

    function makeid(e) {
        var t, n = _0x44d661,
            o = "",
            r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
            a = r[n(479)];
        for (t = 0; t < e; t++) {
            o += r[n(439)](Math[n(491)](Math[n(631)]() * a))
        }
        return o
    }
    var llength, default_s, isalready, toaqdd, allEqual, allEqual2, vcent, canclear, pendto, br, hb, hb2, test3, a, _0x2de4 = ["    top: 10px;", "does", "styleSheet", "    color: #FFF700 !important;", "getElementById", "1fSDlqT", "8zvYNMf", "  .actionBarItem {", "diedText", "    bottom: 10px;", "href", "    width:700px;", "    -webkit-transform: translateX(26px);", "  #followText {", "    color: #ff6500;", "    color: #000000;", "innerText", "YTID", "    color: #A20000;", "    height: 65px;", "    border-radius: 10px !important;", "isplayer", "    margin-top: 250%;", "    background: black;", "    justify-content: center;", "    color: #00FFFF!important;", "  #allianceInput:hover {", "    display: inline-flex;", "#downloadButtonContainer", "match", "error", "    color: #fff;", "  .menuHeader:first-child {", "301967CoSLgV", "frameborder", "  #ageBarBody {", "://www.youtube.com/watch?v=-Mypt378fkc", "#cdm-zone-02", "every", "onkeyup", "block", "  .material-icons { ", "  .uiElement {", "  #pre-content-container {", "6718zqNWBD", "    background: #ff8007;", "  #youtubeFollow, ", "    top: 10.7%;", "    color: #FF8C00;", "  input:focus + .slider {", "  .resourceDisplay {", "parentNode", "home-header", "keys", "    margin-bottom: 3px;", "cent", "greasyfork", "after", "rgba(212, 32, 32, 1)", "test", "#insert", "    vertical-align:middle;", "setup3", "appendChild", "233401ndlDIJ", "    color: #51FF00 !important;", "  .storeItem, ", "log", "  .joinAlBtn {", "    padding: 0px 70px;", "\xc3\xa2\xc2\x9d\xc5\u2019\xc3\u017d\xc2\xa3LIMI\xc3\u017d \xc3\u017d\xe2\u20ac\x9dT\xc3\u017d\xc2\xa3D\xc3\xa2\xc2\x9d\xc5\u2019", "  .menuHeader {", "    transition: color .5s;", "site", "head", "push", "#linksContainer1", ".menuHeader", "surviv", "  #allianceHolder, ", "    background: #4ACA1A;", "    max-height: 500px;", "    background: url(https://i.pinimg.com/originals/30/b8/17/30b8174c6f1a07e0af9bcf41fec3a5f5.gif);", "offsetParent", "onclick", "  .partyWrap {", "    background: rgba(0,0,0,0.6);", "    color: #FFFFFF !important;", "default_list", "    transition: 1s;", "#linksContainer2 .menuLink", "?wmode=opaque&autohide=1&autoplay=1&enablejsapi=1&list=RDJsG8fl0VfkQ", "  #featuredYoutube {", "countReset", "    min-height: 80px;", "    left: 0;", "    background-size: 55px 55px;", "newsboxContent", "charAt", "  #linksContainer2 > * {", "narwhale", "    height: 10000%;", "  #nameInput::placeholder {", "    color: #eee;", "    top: 67.5%;", "    cursor: pointer;", "button", "domain", "    top: 37.5%;", "insert song here", "156px", "  #linksContainer2, ", "split", "H_B2", "    color: #ccc;", "classname", "onsubmit", "createTextNode", "moomoo", "    margin-bottom: 30px;", "  #nameInput {", "    text-align: center;", "    border-bottom-right-radius: 0px;", "    top: 30.25%;", "  #moddedMenu:hover .text {", "  .menuButton:hover:before {", "    color: #cc0000;", "https://www.youtube.com/watch?v=", "    font-size: 31px;", "0 1px 0 rgba(60, 100, 231, 1), 0 2px 0 rgba(60, 100, 231, 1), 0 3px 0 rgba(60, 100, 231, 1), 0 4px 0 rgba(60, 100, 231, 1), 0 5px 0 rgba(57, 149, 171, 1), 0 6px 0 rgba(57, 149, 171, 1), 0 7px 0 rgba(57, 149, 171, 1), 0 8px 0 rgba(57, 149, 171, 1), 0 9px 0 rgba(57, 149, 171, 1)", "bottom", "RDJsG8fl0VfkQ", "roblox", "controls", "    color: #F1F41D !important;", "paper-io", "    width: 65px;", "  .five > .text {", "length", "-30px", "\xc3\xb0\xc2\x9d\xe2\u20ac\u201d\xc5\xa1\xc3\xb0\xc2\x9d\xe2\u20ac\u201d\xc2\xb6\xc3\xb0\xc2\x9d\xcb\u0153\xc6\u2019\xc3\xb0\xc2\x9d\xe2\u20ac\u201d\xc2\xb2 \xc3\xb0\xc2\x9d\xe2\u20ac\u201d\xc2\xb5\xc3\xb0\xc2\x9d\xe2\u20ac\u201d\xc2\xb6\xc3\xb0\xc2\x9d\xe2\u20ac\u201d\xc2\xba \xc3\xa2\xe2\u20ac\u201c\xc2\xb6 \xc3\xb0\xc5\xb8\xc2\x90\xc2\xb3 a name", "  #featuredYoutube > a.ytLink, ", "#H_B", "  #allianceInput::placeholder, ", "    background-color: transparent;", "#twitterFollow", "    background: url('https://ak.picdn.net/shutterstock/videos/822988/thumb/3.jpg');", "cssText", "    border: 5px solid #ffe600;", "nameInput", "floor", "    transform-origin:0 0 ;", "target", "    margin-bottom: 10px;", "pendto", "starblast", "mainui-ads", "    transform: translateX(-20%) skewX(45deg);", "rgba(0,0,0,0)", "#youtubeFollow", "Toggle player", "    background: #ec0e0ed6;", "  #topInfoHolder, #itemInfoHolder, #mapDisplay, #chatBox  { ", "#followText", "clear", "join", "Failed", "home-top-sites", "adCard", "  .six > .text {", "New player list", "#mobileDownloadButtonContainer", "    color: #eeeeee;", "#guideCard", "canclear", "    background-color: rgba(0,0,0,0.5) !important;", "#nameInput", "type", "    width: 22%;", "  #moddedMenu:hover {", "allow", "  ::-webkit-scrollbar-thumb {", "    border-radius: 10px;", "  .skinColorItem {", "  #altServer > a > i {", "string", "    color: #FFFF00 !important;", ".menuHeader:nth-child(5)", "    left: 0%;", "    background-color: #FF8C00;", "    border: 3px solid #006EC4;", "    font-family: fantasy;", "arras", "    -webkit-text-stroke: 0.3px #fff;", "    left: 10px;", "    width: 130%; ", "    border-radius: 50px !important;", "input", "    display: none!important;", "forEach", "innerHTML", "  .allianceItem {", "  #storeHolder, ", "    display: none;", "getElementsByTagName", "red", "now", "    transform: rotate(90deg);", "42630BFWRKS", "autoplay; encrypted-media", "Done setting up", "    color: #FF8C00 !important;", "    -ms-transform: translateX(26px);", "set", "    border-radius: 0px !important;", "  #aBox {", "  .slider {", "undefined", "    right: 10px;", "    margin-top: 0px;", "lid", "    border-bottom: 3px solid #eee;", "documentElement", "\xc3\xb0\xc5\xb8\xc5\xbd\xc2\xae\xc3\xb0\xc2\x9d\xc2\x90\xc2\x8f\xc3\xb0\xc2\x9d\xc2\x90\xe2\u20ac\xb9\xc3\xb0\xc2\x9d\xc2\x90\xe2\u201a\xac\xc3\xb0\xc2\x9d\xc2\x90\xcb\u0153\xc3\xb0\xc5\xb8\xc5\xbd\xc2\xae", "    padding-bottom: 10px;", "  .ytLink {", "    box-shadow: 0 0 1px #FF8C00;", "    font-size: 20px;", "parent", "    color: transparent;", "  .seven > .text {", "https://www.youtube.com/embed/", "  ::-webkit-scrollbar-thumb:active {", "    left: 0px;", "  .menuButton {", "\niframe.script {\nborder: 2px solid red;\nborder-radius: 8px;\nborder-style: solid;\nborder-width: medium;\n}\nbutton.script{\nborder: 2px solid red;\nborder-radius: 8px;\nborder-style: solid;\nborder-width: medium;\nbackground:black;\ncolor:white\n}\ninput.script::placeholder{color:red}\ninput.script{\nborder: 2px solid red;\nborder-radius: 8px;\nborder-style: solid;\nborder-width: medium;\nborder-width:0px;\ncolor:black;\nbackground: rgba(0, 0, 0, 0)\n}", "    width: 23px;", "center", "    border: 3px solid rgba(255,136,0,1);", "display", "splix", "    bottom: 76%;", "    border: 3px solid #000;", "    border: 3px solid rgba(0,0,0,0.9);", "#gameName", "none", "  #allianceInput, ", "    transition: .4s;", "  .allianceButtonM {", "script", "count", "  #moddedMenu:hover > .titleMM {", "    transform:translateX(-112%) skewX(45deg);", "  input:checked + .slider {", "H_B", "  #promoImg {", "getElementsByClassName", "    position: absolute;", "  .text > b { ", "css", "    background: #2dff00;", "    height: 45.0%;", "    z-index: -1;", "value", "    transform: translateX(10px);", "    -webkit-text-stroke: transparent;", "    width: 250px;", "warn", "    opacity: 1;", "#diedText", "  a {", "src", "createElement", "    -webkit-text-stroke: transparent !important;", "  #moddedMenu {", "onunload", "    background: #fff;", "  .slider:before {", "  .allianceItem:hover, ", "  margin-top: 30px;", ".menuLink", "    border: 5px solid #00FF9E;", "    border-bottom: 3px solid #8B00FF;", "    border-radius: 5px;", "text/css", "list", "background-color", "waiting", "getItem", "    width: 10px;", "random", "310408aBfTPE", "centy", "    padding: 10px;", "  a:hover {", "    top: 47.5%;", "centy3", "  .allianceButtonM:hover,", "remove", "    display: block;", "  #promoHolderImg > img {", "#serverBrowser", "    top: 87.5%;", "  .allianceButtonM, ", "    font-size: 32px;", "  .ytLink:hover {", "#ad-block-left", "    border-radius: 50%;", "    transition: 0.5s;", "slither", "  #followText, ", "color", "-Mypt378fkc", "enterGame", "setItem", "test4", "includes", "  #downloadButtonContainer, ", "  .joinAlBtn:hover {", "    width: 300px;", "    width: 100%;", "    color: #17FF00!important;", "43978kyrOvd", "    font-size: 18px;", "    background-color: orange;", "  .storeTab:hover, ", "  #moddedMenu:hover .switch {", "  .titleMM {", ".menuHeader:nth-child(6)", "    border-right: 20px solid #FF0000;", "    transition: transform .5s;", "    background-color: rgba(0,0,0,0.6) !important;", "placeholder", "    height: 23px;", "  #allianceInput:hover::placeholder{", "    border: 2px solid #000000;", "  .storeTab, ", "  ::-webkit-scrollbar {", "w/o", "    color: #A200FF;", "style", "  .three > .text {", "script-links", "?wmode=opaque&autohide=1&autoplay=1&enablejsapi=1&list=", "className", "  }", "  #chatBox::placeholder {", "    color: #00FF9E;", "    margin: 10px;", "153610bKzpur", "  #linksContainer2 {", "  .two > .text {", "  .one > .text {", "  #twitterFollow, ", "    top: 0;", "insert", "  select {", "    height:180px;", "    background: #000000;", "    border: 3px solid rgba(255,235,59,1);", "  #guideCard {", "    -webkit-transition: .4s;", "    top: 77.5%;", "ad-spawn", "    font-size: 24px;"],
        _0x587f = function(e, t) {
            return _0x2de4[e -= 345]
        },
        _0x44d661 = _0x587f;
    ! function(e, t) {
        for (var n = _0x587f;;) {
            try {
                if (172968 === -parseInt(n(690)) + parseInt(n(374)) + -parseInt(n(405)) + parseInt(n(632)) + -parseInt(n(346)) * -parseInt(n(663)) + parseInt(n(347)) * -parseInt(n(385)) + -parseInt(n(549))) {
                    break
                }
                e.push(e.shift())
            } catch (o) {
                e.push(e.shift())
            }
        }
    }(_0x2de4), llength = _0x44d661(472)[_0x44d661(479)], window[_0x44d661(429)] = "RDJsG8fl0VfkQ", setElement = function(e) {
        var t = _0x44d661,
            n = String(e)[t(370)](/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/);
        return !(!n || 11 != n[7][t(479)]) && n[7]
    }, Player = function(e) {
        var t, n, o = _0x44d661;
        e && (t = makeid(length), n = setup(setElement(e), t), this[o(554)] = n)
    }, isalready = null == eval(localStorage_.getItem("isplayer")) || eval(localStorage_[_0x44d661(629)](_0x44d661(362))), isalready = 0 == isalready, window.onunload = function() {
        localStorage_[_0x44d661(655)]("isplayer", !1)
    }; {
        function toggled(e) {
            var t, n = _0x44d661,
                o = [e.style[n(580)] == n(586), e[n(681)][n(580)] == n(381)];
            return !o[0] && !o[1] && (e[n(681)][n(580)] = n(381)), (t = [e[n(681)][n(580)] == n(586), e[n(681)][n(580)] == n(381)])[0] && (e[n(681)][n(580)] = n(381)), t[1] && (e[n(681)].display = n(586)), e[n(681)][n(580)]
        }

        function isHidden(e) {
            if (e) {
                return null === e[_0x44d661(424)]
            }
        }

        function imsub() {
            playlist()
        }

        function fix2(e, t) {
            var n = _0x44d661;
            return localStorage_[n(629)](e) ? [!0, localStorage_[n(629)](e)] : [!1, localStorage_[n(655)](e, t)]
        }

        function add_styles() {
            var e, t, n = _0x44d661;
            insert[n(685)] = n(590), H_B[n(685)] = "script", H_B2.className = "script", frame[n(685)] = n(590), frame[n(398)](br), typeof GM_addStyle != n(558) ? GM_addStyle(css) : typeof PRO_addStyle != n(558) ? PRO_addStyle(css) : typeof addStyle != n(558) ? addStyle(css) : ((e = document[n(613)](n(681)))[n(518)] = n(625), e[n(404)](document[n(458)](n(576))), (t = document.getElementsByTagName(n(415)))[n(479)] > 0 ? t[0][n(404)](e) : document.documentElement.appendChild(e))
        }

        function style(e, t, n) {
            var o = _0x44d661;
            $(e)[o(600)](t, n)
        }

        function setup2() {
            var e = _0x44d661,
                t = setplayer_(music_frame);
            document.getElementById(e(696))[e(604)] = t[0], imsub()
        }

        function place(e, t) {
            var n = _0x44d661;
            try {
                e[n(673)] = t
            } catch (o) {}
        }
        localStorage_[_0x44d661(655)](_0x44d661(362), !0), iframe = '<iframe id="msc" src="https://www.youtube.com/embed/${id}?list=PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>', ta = document[_0x44d661(545)]("*"), toaqdd = [], allEqual = (e, t) => e[_0x44d661(379)]((e => e === t)), allEqual2 = e => e[_0x44d661(379)]((t => t === e[0])), ta[_0x44d661(626)] = function(e, t, n) {
            var o = _0x44d661,
                r = [],
                a = {},
                i = [];
            return todo = document[o(545)](n || "*"), todo.forEach = [][o(540)], todo[o(540)]((n => {
                var l = o;
                i = [], typeof e == l(526) ? a.i = e == n.id : a.i = !0, typeof t == l(526) ? a.c = t == n[l(685)] : a.c = !0, i = [a.c, a.i], (i = allEqual(i, !0)) && r[l(416)](n)
            })), r
        }, id = function(e) {
            return document[_0x44d661(345)](e)
        }, dd = function(e) {
            var t = _0x44d661;
            let n = {};
            return e[t(540)]((function(e) {
                !n[e] && (n[e] = !0)
            })), Object[t(394)](n)
        }, clas = function(e) {
            return document[_0x44d661(597)](e)
        }, vcent = !location[_0x44d661(351)].includes(_0x44d661(459)) && (!location[_0x44d661(351)].includes("narwhale") && (!location.href[_0x44d661(657)](_0x44d661(496)) && (!location[_0x44d661(351)][_0x44d661(657)]("surviv") && (!location[_0x44d661(351)][_0x44d661(657)](_0x44d661(473)) && (!!document[_0x44d661(448)][_0x44d661(657)]("slither") || !document[_0x44d661(448)].includes("greasyfork") && (!!document[_0x44d661(448)][_0x44d661(657)]("agar") || (!!document[_0x44d661(448)][_0x44d661(657)](_0x44d661(476)) || (!!document.domain[_0x44d661(657)](_0x44d661(581)) || 0)))))))), idlenght = _0x44d661(653)[_0x44d661(479)], CE = function(e, t, n) {
            var o = _0x44d661,
                r = document[o(613)](e);
            return r[o(456)] = n, t && t[o(479)] && (r.id = t), r
        }, setElement(URL), playlist = function(e, ...t) {
            var n, o = _0x44d661;
            (n = setElement(e)) && idlenght == n[o(479)] || (n = !1), n || (n = localStorage_.getItem(o(561))), t && llength == t.length || (t = !1), t || (t = localStorage_[o(629)](o(626))), music_frame.src = setup(n, t)
        }, fix = e => {
            var t = _0x44d661;
            return e = setElement(e), document[t(358)] = e, t(572) + e + t(432)
        }, hh = function(e, t) {
            localStorage_[_0x44d661(655)](e, t)
        }, jj = function(e) {
            return localStorage_[_0x44d661(629)](e)
        }, frame = CE("iframe", "music_frame"), frame.style.width = "98%", inputm = CE(_0x44d661(538), "insert"), frame[_0x44d661(604)], inputm[_0x44d661(457)] = imsub, inputm[_0x44d661(380)] = function(e) {
            var t, n, o, r = _0x44d661,
                a = (t = e[r(493)][r(604)], function(e, t) {
                    var n = _0x587f;
                    if (e && t) {
                        return n(572) + e + "?list=" + t
                    }
                }(setElement(t), ((n = t[_0x587f(453)]("&"))[0], o = n[1], n[2], o ? o.split("=")[1] : window.default_list)));
            localStorage_.setItem("LP", a), frame.src = a
        }, eval(fix2(_0x44d661(656), !0))[0] ? (fix2("RS", "https://www.youtube.com/watch?v=-Mypt378fkc"), frame.src = fix(jj("RS"))) : (inputm[_0x44d661(673)] = fix(_0x44d661(377)), alert(_0x44d661(400)), frame[_0x44d661(612)] = localStorage_[_0x44d661(629)]("LP") || inputm.placeholder), br = CE("br"), canclear && (pendto[_0x44d661(541)] = ""), listn = CE(_0x44d661(538), "list"), listn.placeholder = "enter Plist id", hb = CE("button", _0x44d661(595)), fix2(_0x44d661(626), "RDJsG8fl0VfkQ"), fix2(_0x44d661(561), "-Mypt378fkc"), hb2 = CE(_0x44d661(447), _0x44d661(454)), hb2[_0x44d661(357)] = _0x44d661(511), frame.setAttribute(_0x44d661(474), 1), hb.innerText = _0x44d661(501), set = function(e, t, n) {
            e.setAttribute(t, n)
        }, test3 = [{
            site: location[_0x44d661(351)][_0x44d661(657)](_0x44d661(397)),
            cent: !0,
            clear: !1,
            parent: function() {
                var e = _0x44d661;
                return (document.getElementById(e(508)) || document[e(345)]("script-list-sort") || document.getElementById(e(683)))[e(392)]
            }
        }, {
            site: location[_0x44d661(351)].includes(_0x44d661(459)),
            cent: !1,
            clear: !0,
            parent: function() {
                var e = _0x44d661;
                return setTimeout((function() {
                    setTimeout((function() {
                        var e, t, n, o, r, a, i = _0x587f;
                        document.getElementById(i(490))[i(673)] = i(481), document.getElementById("desktopInstructions")[i(639)](), document[i(345)](i(349))[i(541)] = i(411), $(i(610))[i(600)]({
                            "background-color": "rgba(0, 0, 0, 0.74)"
                        }), $(i(610))[i(600)]({
                            color: i(399)
                        }), document.getElementById(i(654))[i(541)] = i(564), $(i(585)).css({
                            color: "#000000",
                            "text-shadow": i(470),
                            "text-align": "center",
                            "font-size": i(451),
                            "margin-bottom": i(480)
                        }), $(i(431)).html(), i(512), i(504), i(417), i(486), i(500), i(378), i(369), i(418), i(621), i(528), i(669), e = "#rightCardHolder {display: block!important}", document[i(415)] || document.getElementsByTagName(i(415))[0], (t = document[i(613)](i(681)))[i(518)] = i(625), t.styleSheet ? t[i(708)][i(488)] = e : t[i(404)](document.createTextNode(e)), promoImgHolder.remove(), a = [(r = i)(694), r(387), r(658), r(651), r(596), r(544), r(686), "", r(482), r(611), r(527), r(568), r(560), r(649), r(686), r(635), r(406), r(686), "", r(433), r(620), r(686), "", r(452), r(426), "    background: rgba(0,0,0,0.6);", r(584), r(523), r(634), r(568), "    position: absolute;", r(372), "  }", "", r(426), r(435), "    min-width: 160px;", r(706), r(559), r(686), "", r(354), "    min-height: 200px;", r(350), r(535), "  }", "", "  #linksContainer2 {", r(350), r(559), r(570), "  }", "", "  .menuCard {", r(427), r(523), "    border: 10px solid rgba(0,0,0,0.9);", "    box-shadow: none;", "    overflow:auto;", r(698), r(686), "", r(678), r(630), "    border-right: 2px solid #ec0e0ed6;", "  }", "", r(522), "    border: 2px solid #ffeb3b;", r(686), "", "  ::-webkit-scrollbar-thumb:hover {", r(502), r(686), "", r(573), r(364), r(676), r(686), "", r(412), r(705), r(513), r(395), r(562), r(686), "", r(373), r(460), r(686), "", "  .menuText {", r(664), r(455), r(494), r(686), "", r(566), r(389), "    font-size: 24px;", "    text-decoration: none;", r(649), r(686), "", r(575), r(372), r(485), r(489), "    position: relative;", r(368), r(410), r(532), r(413), "    overflow: hidden;", r(661), r(365), r(686), "", "  .menuButton:hover {", "    font-family: monospace;", r(428), "    border: 5px solid #ff0000;", r(446), r(485), r(686), "", "  .menuButton:before {", "    content: '';", "    position: absolute;", r(695), r(436), r(536), r(442), r(601), r(670), r(603), r(492), r(593), r(671), r(686), "", r(466), r(428), r(498), r(686), "", "  .menuCard span {", r(689), "  }", "", r(641), r(660), "    height: 94px;", "  }", "", r(701), "    max-height: 282px;", "  }", "", r(524), "    transition: 1s;", r(577), r(674), r(583), r(686), "", r(697), r(699), r(624), r(531), "    margin-bottom: 10px;", "    color: #fff;", "    transition: 0.5s;", r(686), "", "  select:hover {", r(386), "    border: 3px solid #B20E0E;", "  }", "", r(384), r(539), r(686), "", r(348), r(672), r(700), "    border-radius: 15px !important;", r(649), r(686), "", "  .actionBarItem:hover {", r(516), r(579), r(537), r(686), "", r(383), r(672), "    border: 3px solid rgba(234,0,255,1);", "    border-radius: 50px !important;", r(649), r(686), "", "  .uiElement:hover {", r(516), "    border: 3px solid rgba(0,95,255,1);", r(555), r(686), "", r(391), r(672), "    border: 3px solid rgba(255,255,0,0.9);", r(537), r(680), r(649), r(686), "", r(503), "    background-color: rgba(0,0,0,0.6) !important;", r(584), r(361), "    color: #FF0000;", r(686), "", "  #itemInfoHolder { ", r(606), "  }", "", r(382), r(356), r(469), r(534), r(686), "", r(525), "    font-size: 30px !important;", r(614), "  }", "", r(376), r(487), "    border: 1px solid #fff", "  }", "", "  #ageBar {", r(672), "    border: 1px solid rgba(0,0,0,0.9);", "    height: 5px;", r(565), r(686), "", r(348), r(477), r(360), "    background-position: center; ", r(437), r(686), "", r(556), "    color: #FF8C00!important;", r(649), r(686), "", r(687), r(662), "  }", "", "  #chatBox:hover {", "    background: rgba(0,0,0,0.5)!important;", r(686), "", "  #chatBox:hover::placeholder {", r(366), r(686), "", r(646), r(467), "  }", "", r(461), r(617), r(622), r(649), r(686), "", r(443), r(688), "    transition: 0.5s;", "  }", "", "  #nameInput:hover {", r(421), r(372), r(686), "", "  #nameInput:hover::placeholder {", "    background: #4ACA1A;", r(372), "  }", "", r(691), r(422), r(607), "  }", "", r(440), "    display:table-cell;", r(402), r(462), r(352), "  }", "  ", r(677), r(543), r(420), r(587), r(589), r(427), r(584), r(686), "", r(407), r(677), r(644), r(484), r(542), r(552), r(686), "", "  .storeItem, ", r(677), r(644), r(484), "  .allianceItem, ", r(409), r(709), r(686), "", "  .storeItem:hover, ", r(666), r(638), r(619), r(659), r(475), r(686), "", "  #allianceInput, ", r(389), r(686), "  ", r(367), "    background: rgba(0,0,0,0.5);", "    color: #fc9f9f;", "  }", "", r(675), "    color: #fc9f9f;", r(686), "", "  #linksContainer2 > *:first-child {", r(623), r(686), "", r(615), "    position: absolute;", r(464), r(574), "    width: 3%;", r(602), r(423), "    border: 3px solid rgba(100,0,255,0.9);", "    border-top-right-radius: 30px;", r(463), "    transition: 1s;", "    z-index: 999;", r(686), "", r(520), r(519), r(686), "", r(668), r(359), "    border-bottom: 3px solid #0030ff;", r(645), r(548), "    white-space: nowrap;", r(363), r(430), r(686), "", r(592), "    transform: rotate(0deg) translate(0,-1580%)", r(686), "", "", "  .text {", r(582), r(598), r(444), r(568), r(529), "    display: none;", "    transition: 1s;", "  }", "", r(599), "    font-size: 20px;", r(355), r(686), "", "  b:hover { ", "    color: #ff0000;", r(686), "", r(693), "    top: 5.5%;", "  }", "", r(692), r(388), r(686), "", r(682), r(449), "  }", "", "  .four > .text {", r(636), r(686), "", r(478), "    top: 57.5%;", r(686), "", r(510), r(445), "  }", "", r(571), r(703), r(686), "", "  .eight > .text {", r(643), "  }", "", "", "", r(667), r(609), r(686), "", r(465), r(640), r(686), "", "", r(557), r(598), "    cursor: pointer;", "    background-color: #888;", r(702), "    transition: .4s;", r(686), "", r(618), "    position: absolute;", r(665), r(702), r(588), r(686), "", r(594), r(530), r(686), "  ", r(390), r(567), r(686), "", "  input:checked + .slider:before {", r(353), r(553), r(605), "  }", "", "  .slider.round {", "    border-radius: 34px;", r(686), "", "  .slider.round:before {", r(648), r(686)][r(506)]("\n"), typeof GM_addStyle != r(558) ? GM_addStyle(a) : typeof PRO_addStyle != r(558) ? PRO_addStyle(a) : typeof addStyle != r(558) ? addStyle(a) : ((n = document.createElement(r(681)))[r(518)] = r(625), n[r(404)](document[r(458)](a)), (o = document[r(545)](r(415)))[r(479)] > 0 ? o[0][r(404)](n) : document[r(563)][r(404)](n))
                    }), 100)
                }), 1e3), id(e(509))
            },
            css: [
                ["#adCard", _0x44d661(627), _0x44d661(499)],
                ["#insert", _0x44d661(627), _0x44d661(499)],
                [_0x44d661(483), _0x44d661(652), _0x44d661(546)],
                [_0x44d661(642), "background-color", _0x44d661(499)],
                [_0x44d661(514), _0x44d661(627), _0x44d661(499)],
                ["#setupCard", _0x44d661(627), "rgba(0,0,0,0)"],
                ["#nameInput", _0x44d661(627), _0x44d661(499)],
                [_0x44d661(517), _0x44d661(652), "rgb(254, 28, 73)"]
            ]
        }, {
            site: location[_0x44d661(351)].includes(_0x44d661(650)),
            cent: !0,
            clear: !0,
            parent: function() {
                return id("login")
            }
        }, {
            site: location[_0x44d661(351)].includes("sploop.io"),
            cent: !0,
            clear: !0,
            parent: function() {
                return id("game-left-content-main")
            },
            css: [
                ["#game-bottom-content", _0x44d661(627), _0x44d661(499)],
                ["#insert", _0x44d661(627), _0x44d661(499)],
                [_0x44d661(483), _0x44d661(652), _0x44d661(546)],
                ["#H_B2", _0x44d661(652), _0x44d661(546)],
                ["#server-select", "background-color", _0x44d661(499)],
                [_0x44d661(514), _0x44d661(627), _0x44d661(499)],
                ["#game-middle-main", _0x44d661(627), "rgba(0,0,0,0)"],
                ["#nickname", _0x44d661(627), _0x44d661(499)],
                ["#nickname", _0x44d661(652), "rgb(254, 28, 73)"]
            ]
        }, {
            site: location.href.includes(_0x44d661(441)),
            cent: !1,
            clear: !1,
            parent: function() {
                return id("adZone")
            }
        }, {
            site: location[_0x44d661(351)].includes(_0x44d661(496)),
            cent: !1,
            clear: !1,
            parent: function() {
                return id("content")
            }
        }, {
            site: location[_0x44d661(351)][_0x44d661(657)](_0x44d661(419)),
            cent: !0,
            clear: !0,
            parent: function() {
                return id("ad-block-left")
            },
            css: [
                [_0x44d661(483), _0x44d661(627), _0x44d661(499)],
                [_0x44d661(401), "background-color", _0x44d661(499)],
                ["#H_B", _0x44d661(652), _0x44d661(546)],
                [_0x44d661(647), _0x44d661(627), _0x44d661(499)]
            ]
        }, {
            site: location[_0x44d661(351)][_0x44d661(657)](_0x44d661(473)),
            cent: !1,
            clear: !1,
            parent: function() {
                return clas(_0x44d661(393))[0]
            }
        }, {
            site: location[_0x44d661(351)][_0x44d661(657)]("agar"),
            cent: !0,
            clear: !0,
            parent: function() {
                return id(_0x44d661(497))
            }
        }, {
            site: location[_0x44d661(351)][_0x44d661(657)](_0x44d661(476)),
            cent: !0,
            clear: !0,
            parent: function() {
                return id(_0x44d661(471))
            }
        }, {
            site: location[_0x44d661(351)][_0x44d661(657)](_0x44d661(581)),
            cent: !0,
            clear: !0,
            parent: function() {
                return id(_0x44d661(438))
            }
        }, {
            site: location[_0x44d661(351)].includes(_0x44d661(533)),
            cent: !0,
            clear: !0,
            parent: function() {
                var e = _0x44d661;
                return id(e(704)).remove(), id("arras-io_336x280")[e(639)](), document[e(597)]("referral")[0]
            }
        }], window.br = document[_0x44d661(613)]("br"), hb.onclick = function() {
            try {
                toggled(centy2)
            } catch (e) {}
            try {
                toggled(centy)
            } catch (t) {}
        }, hb2[_0x44d661(425)] = setup2, window[_0x44d661(403)] = function(e) {
            var t, n = _0x44d661;
            set(frame, n(521), n(550)), set(frame, n(375), "0"), t = CE(n(578), n(637)), canclear && (pendto[n(541)] = ""), vcent ? (clearInterval(a), a = setInterval((function() {
                var e, o, r = n;
                try {
                    pendto && (clearInterval(a), e = pendto, frame[r(612)] = localStorage_.getItem("LP"), window[r(616)] = function(e) {
                        localStorage_.setItem("LP", frame.src)
                    }, o = CE(r(578), r(633)), pendto[r(404)](o), (pendto = centy)[r(404)](br), pendto.appendChild(frame), pendto.appendChild(br), pendto.appendChild(br), pendto.appendChild(inputm), pendto.appendChild(br), pendto[r(404)](br), clearInterval(a), t[r(404)](br), t[r(404)](hb), t[r(404)](br), t[r(404)](hb2), e[r(404)](t), add_styles(), $("#play") && SetUpSploop())
                } catch (i) {
                    window.lastError = i
                }
            }), 0)) : (clearInterval(a), a = setInterval((function() {
                var e, t = n;
                try {
                    pendto && (clearInterval(a), e = pendto, (pendto = CE("div", "centy2"))[t(404)](br), pendto[t(404)](frame), frame[t(612)] = localStorage_.getItem("LP"), window.onunload = function(e) {
                        var n = t;
                        localStorage_[n(655)]("LP", frame[n(612)])
                    }, pendto[t(404)](br), pendto.appendChild(br), pendto[t(404)](inputm), e[t(404)](pendto), e[t(404)](br), e.appendChild(hb), e.appendChild(br), e.appendChild(hb2), add_styles(), $("#play") && SetUpSploop())
                } catch (o) {}
            }), 0)), setTimeout((function() {
                var t = n;
                e && e[t(540)]((e => {
                    style(e[0], e[1], e[2])
                })), place(id(t(696)), t(450))
            }), 1e3)
        }, test3[_0x44d661(540)]((e => {
            var t = _0x44d661;
            e[t(414)] && (pendto = window[t(495)] = e[t(569)](), vcent = window.vcent = e[t(396)], canclear = window[t(515)] = e[t(505)], e.css ? setup3(e[t(600)]) : setTimeout(window[t(403)], 100))
        }))
    }
}

function Csc2() {
    if (cSs(), pingcheck(), window.ageBarBody) {
        ageBarBody.style.transition = "1s", window.items2 = {};
        let e = {
                1: {
                    M: 1,
                    I: 3,
                    S: 5,
                    F: 7,
                    C: 8,
                    G: 6
                },
                2: {
                    cookie: 17,
                    T: 20
                },
                3: {
                    V: 31,
                    B: 32
                },
                4: {
                    P: 23,
                    $: 29,
                    H: 30,
                    A: 27
                },
                5: {
                    D: 0,
                    L: 10,
                    N: 14,
                    j: 11
                },
                6: {
                    R: 18,
                    q: 21,
                    O: 33,
                    platform: 34,
                    U: 35,
                    X: 37,
                    Y: 38
                },
                7: {
                    J: 2,
                    K: 12,
                    W: 4,
                    Z: 28
                },
                8: {
                    ee: 13,
                    te: 15,
                    ne: 24,
                    oe: 25,
                    re: 36
                }
            },
            t = document.createElement("div");
        ! function(n = ((e, t) => {
            window.items2[t] = e.target.selectedOptions[0].value
        }), o = document.createElement("br")) {
            for (let n in e) {
                t.append(document.createElement("br"));
                let o = document.createElement("select");
                window.selects.push([n, o]), o.id = "sel" + n, o.ae = n;
                let r = document.createElement("span");
                r.innerText = `Age ${n}:`, Object.keys(e[n]).forEach((t => {
                    let r = document.createElement("option");
                    r.value = e[n][t], r.innerText = t, o.append(r)
                })), t.append(r), t.append(o)
            }
            setupCard.append(t), sel1.onchange = function(e) {
                var t = e.target.value,
                    n = e.target.ae;
                items2[n] = t
            }, sel2.onchange = function(e) {
                var t = e.target.value,
                    n = e.target.ae;
                items2[n] = t
            }, sel3.onchange = function(e) {
                var t = e.target.value,
                    n = e.target.ae;
                items2[n] = t
            }, sel4.onchange = function(e) {
                var t = e.target.value,
                    n = e.target.ae;
                items2[n] = t
            }, sel5.onchange = function(e) {
                var t = e.target.value,
                    n = e.target.ae;
                items2[n] = t
            }, sel6.onchange = function(e) {
                var t = e.target.value,
                    n = e.target.ae;
                items2[n] = t
            }, sel7.onchange = function(e) {
                var t = e.target.value,
                    n = e.target.ae;
                items2[n] = t
            }, sel8.onchange = function(e) {
                var t = e.target.value,
                    n = e.target.ae;
                items2[n] = t
            }
        }(), window.spikes = [25, 23, 24, 6, 7, 9], info2.ie = e, info2.ie[0] = {
            le: 19,
            de: 6,
            se: 10
        };
        let n = document.createElement("input");
        n.value = 150, n.id = "Hspeed", n.style.backgroundColor = "rgb(0,0,0,0)", n.style.color = "white", n.onchange = function(e) {
            window.defH = 1 * n.value, chat("Healspeed " + n.value)
        };
        let o = document.createElement("input");
        o.value = i2, o.id = "instaspeed", o.style.backgroundColor = "rgb(0,0,0,0)", o.style.color = "white";
        let r = document.createElement("span");
        r.innerText = "Insta speed ", r.style.color = "red";
        let a = document.createElement("span");
        a.innerText = "Heal speed ", a.style.color = "red", setupCard.append(document.createElement("br")), setupCard.append(a), setupCard.append(n), setupCard.append(document.createElement("br")), setupCard.append(r), setupCard.append(o), o.onchange = function(e) {
            i2 = 1 * o.value, chat("Insta speed " + o.value)
        }, setupCard.style.overflow = "auto", setupCard.style.height = "180px", window.stoped = 1
    }
}
var _setUp;
const game_ = new class {#
    e = function() {};#
    t = function() {};#
    n = !1;#
    o = 1e3;#
    r = function(e) {
        return new Promise((t => setTimeout(t, e)))
    };#
    a = 0;#
    i = 0;#
    l = async function() {
        for (;;) {
            let e = this.#r,
                t = this.#t,
                n = this.#e;
            if (await e(0), this.#i) {
                break
            }
            t() && (await e(this.#o), n(), await e(this.#o))
        }
        this.#i = !1
    };
    set i(e) {
        return this.#o = Number.isNaN(e) ? 1e3 : Number(e)
    }
    get i() {
        return this.#o
    }
    start() {
        this.#l()
    }
    stop() {
        this.#i = !0
    }
    set o(e) {
        return this.#n = !!e
    }
    get o() {
        return this.#n
    }
    set l(e) {
        return this.#t = e
    }
    get l() {
        return this.#t
    }
    set u(e) {
        return this.#e = e
    }
    get u() {
        return this.#e
    }
};
class bool {#
    d = !1;
    toggle() {
        this.#d = !this.#d
    }
    get status() {
        return this.#d
    }
    set status(e) {
        this.#d = !!e
    }
}
class element {
    static get ce() {
        return new element("br")
    }
    constructor(e, t) {
        this.element = e.constructor.name.includes("HTML") && e || function() {
            for (let e in arguments[1]) {
                arguments[0].setAttribute(e, arguments[1][e])
            }
            return arguments[0]
        }(document.createElement(e), t)
    }
    style(e) {
        for (let t in e) {
            this.element.style[t] = e[t]
        }
        return this
    }
    append(e) {
        return this.element.append(e.element || e), this
    }
    h(e) {
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
                for (var t = 0; t < e.length; t += 1) {
                    this[t] = e[t]
                }
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
                for (var t = 0; t < this.length; t += 1) {
                    if (this[t].id === e || this[t].name === e) {
                        return this[t]
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
const alt = name.includes("alt");
_setUp = !1, findhref2 = function(e, t) {
    var n = [];
    return function o(e) {
        e.tagName.toLowerCase() == (t || "a") ? (n.push(e), e.children.length && ((e = e.children).forEach = [].forEach, e.forEach((e => {
            o(e)
        })))) : e.children.length && ((e = e.children).forEach = [].forEach, e.forEach((e => {
            o(e)
        })))
    }(e), n
};
const localStorage_ = {
    getItem: e => GM_getValue(e),
    setItem(e, t) {
        return GM_setValue(e, t), GM_setValue("LC", this), this.getItem(e)
    }
};
window.once = window.on;
const DefaultDisplay = {};
let moomooMenu = "#mainMenu",
    sploopMenu = "#homepage";
document.addEventListener("keydown", (function(e) {
    "`" === e.key && ($(moomooMenu) && $(moomooMenu).toggle && $(moomooMenu).toggle(), $(sploopMenu) && $(sploopMenu).toggle && (document.querySelector(sploopMenu).style.display = "none" == document.querySelector(sploopMenu).style.display ? "flex" : "none"))
})), $("#consentBlock").css({
    display: "none"
}), $("#mapDisplay").css({
    background: "url('https://i.imgur.com/fgFsQJp.png')"
});
var [info2, myPlayer] = [window.info2 || {}, window.myPlayer || []];
window.selects = window.selects || [], document.hasFocus() ? onload = Csc2 : Csc2();