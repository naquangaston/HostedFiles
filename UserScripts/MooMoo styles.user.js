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

function add_Style(e) {
    var t, [n, o, a, r] = ["createElement", "textContent", "head", "appendChild"],
        i = {get t() {
                return document
            }
        };
    (t = i.k[n]("style"))[o] = e, i.k[a][r](t)
}

function SetUpSploop() {
    function e(e) {
        return /^[0-9a-zA-Z]$/.test(e) && 1 == e.length
    }

    function t(e = 0, t = 0, o = 0) {
        n(0);
        try {
            !Number.isNaN(e) && findhref2(id("skins-middle-main"), "img").filter((t => t.src.includes(`skin${e}`)))[0].click()
        } catch (a) {}
        n(1);
        try {
            !Number.isNaN(t) && findhref2(id("skins-middle-main"), "img").filter((e => e.src.includes(`accessory${t}`)))[0].click()
        } catch (a) {}
        n(2), !Number.isNaN(o) && findhref2(id("skins-middle-main"), "img").filter((e => e.src.includes(`back${o}`)))[0].click(), n(0)
    }

    function n(e) {
        findhref2(id("skins-categories"), "img")[e].click()
    }
    async function o(e, t = 3e3) {
        return await new Promise(((n, o) => {
            let a = performance.now();
            ! function r() {
                document.querySelector(e) ? n(document.querySelector(e)) : performance.now() - a >= t ? o(new Error("Timeout waiting for selector")) : requestAnimationFrame(r)
            }()
        }))
    }

    function a() {
        dispatchAllInputEvents(nickname, GM_getValue("nn")), n(0), !Number.isNaN(GM_getValue("skin")) && findhref2(id("skins-middle-main"), "img").filter((e => e.src.includes(`skin${GM_getValue("skin")}`)))[0].click(), n(1), !Number.isNaN(GM_getValue("accessory")) && findhref2(id("skins-middle-main"), "img").filter((e => e.src.includes(`accessory${GM_getValue("accessory")}`)))[0].click(), n(2), !Number.isNaN(GM_getValue("back")) && findhref2(id("skins-middle-main"), "img").filter((e => e.src.includes(`back${GM_getValue("back")}`)))[0].click(), n(0)
    }
    async function r() {
        await o("#player-container");
        var e = id("player-container");
        e.style.display = "none", x.status ? (!u && (u = (await o("#nickname-value")).innerText), (await o("#nickname-value")).innerText = "streamerMode", (await o("#change-username")).style.display = "none") : u && ((await o("#nickname-value")).innerText = u, (await o("#change-username")).style.display = "block"), e.style.display = "flex"
    }
    var i, s, c, l, u, d, m, k;
    const f = new bool,
        p = new bool,
        g = ({
            target: e
        }) => {
            f.status && (e.value = filter1(e.value))
        },
        h = ({
            target: e
        }) => {
            p.status && (e.value = filter2(e.value))
        };
    o("#chat").then((t => {
        t.addEventListener("keypress", (({
            target: t,
            key: n
        }) => {
            e(n) && [g].forEach((e => e({
                target: t
            })))
        })), t.addEventListener("keyup", (t => {
            const {
                target: n,
                key: o,
                code: a
            } = t;
            e(o) && "KeyL" != a && [g, h].forEach((e => e({
                target: n
            })))
        })), t.addEventListener("keydown", (({
            target: t,
            key: n
        }) => {
            e(n) && [g].forEach((e => e({
                target: t
            })))
        }))
    })), alt && "number" == typeof GM_getValue("alts") && GM_setValue("alts", {});
    for (let e = 1;; e++) {
        if (!GM_getValue("alts")[e]) {
            i = e;
            let t = GM_getValue("alts");
            t[e] = !0, GM_setValue("alts", t);
            break
        }
    }
    if (onbeforeunload = function() {
            if (alt) {
                let e = GM_getValue("alts");
                e[i] = !1, GM_setValue("alts", e)
            }
        }, addEventListener("unload", (function() {
            if (alt) {
                let e = GM_getValue("alts");
                e[i] = !1, GM_setValue("alts", e)
            }
        })), s = null, _loadFit = t, _GM_setValue = GM_setValue, _GM_getValue = GM_getValue, new Promise(((e, t) => t = setInterval((() => findhref2(id("skins-middle-main"), "img").length && (clearInterval(t), e())), 100))).then((async e => {
            await c(1e3), alt || t(GM_getValue("skin"), GM_getValue("accessory$"), GM_getValue("BACK"))
        })), id("game-left-content-main").style.overflow = "scroll", id("da-right").parentNode.style.overflow = "scroll", _setUp) {
        return
    }
    add_Style("\n#log{\n    background-color: rgba(0,0,0,0);\n    color: lightgreen;\n}\n.empty{\n    content: attr(value);\n}\nselect,select:focus{\n    background-color: rgba(0,0,0,0);\n    outline: none;\n    border: none;\n    color: rgb(255, 136, 0);\n}\nbutton{\n    background-color: rgba(0,0,0,0);\n    outline: none;\n    border: 2px solid rgb(208, 255, 0);\n    color: rgb(94, 255, 0);\n}\nbutton:hover,input:focus{\n    background-color: rgba(0,0,0,0);\n    outline: none;\n    border: 2px solid rgb(255, 0, 0);\n    color: rgb(0, 132, 255);\n}\n#skin-message{\n\tborder: 2px solid red;\n    background-color: rgba(0,0,0,0);\n}\n.green{border: 2px solid green;}\n.red{border: 2px solid blue;}\n::-webkit-scrollbar{\n    display:none;\n}\nspan.first{\n    border-top: 1px solid white;\n    border-bottom: 1px solid white;\n    border-left: 1px solid white;\n}\nspan.middle{\n    border-top: 1px solid white;\n    border-bottom: 1px solid white;\n}\nspan.last{\n    border-top: 1px solid white;\n    border-bottom: 1px solid white;\n    border-right: 1px solid white;\n}\ndel{\n    text-decoration: line-through;\n    color: red;\n    border-radius: 3px;\n    border: 1px solid coral;\n    background-color: rgba(111,8,8,1);\n}\nins{\n    background-color: rgba(7,92,7,1);\n    color: rgba(56,233,56,1);\n    border-radius: 3px;\n    border: 1px solid lightgreen;\n}\ntextarea{\n    text-overflow: clip;\n\n}");
    const b = new bool,
        x = new bool;
    GM_getValue("sm") && x.toggle();
    let w = id("clan-menu");
    game_.o = !0, game_.i = 5e3, game_.l = function() {
        return !isHidden(play)
    }, game_.u = function() {
        if (alt) {
            dispatchAllInputEvents(nickname, `alt:${i} - ${GM_getValue("nn")}`), randomFit.element.click();
            const {
                m: e,
                back: t,
                k: n
            } = localStorage;
            s = {
                m: e,
                back: t,
                k: n
            }
        } else {
            const {
                m: e,
                back: n,
                k: o
            } = s;
            t(e, o, n)
        }
        play.click(), setTimeout(a, 200)
    }, c = e => new Promise((t => setTimeout(t, e))), _game_ = game_, _setUp = !0;
    let _ = id("game-left-content-main"),
        y = ["#game-bottom-content", "#game-right-content-main"];
    ! function() {
        var [e, t, n, o, a, r] = ["map", "forEach", "log", "length", "children", "remove"], i = {get p() {
                return console
            }
        };
        y[e]($)[t]((e => {
            i.sn[n]({
                s: e
            }), e[o] && [...e[0][a]][t]((e => e[r]()))
        }))
    }(), l = id("da-right");
    new element("div").style({
        padding: "10px",
        backgroundColor: "rgba(0, 0, 0, 0)",
        color: "#000",
        border: "1px solid #ddd",
        marginBottom: "10px"
    }).append(new element("h2").set("innerText", "MooMoo/Sploop styles")).append(new element("p").set("innerText", "This script can:")).append(new element("ul").append(new element("li").set("innerText", "Change the game's look")).append(new element("li").set("innerText", "Add a built-in YouTube embed video player")).append(new element("li").set("innerText", "Include a random fit generator button")).append(new element("li").set("innerText", "Implement anti-kick functionality from being AFK")).append(new element("li").set("innerText", "Create alts")).append(new element("li").set("innerText", "Automatically join the game and turn on antikick for alts"))).h(l);
    const v = new element("div").style({
        padding: "10px",
        backgroundColor: "#f8d7da",
        color: "#721c24",
        border: "1px solid #f5c6cb",
        borderRadius: "5px",
        cursor: "pointer"
    }).set("innerText", "Using this script may have consequences, including but not limited to account banning. Use at your own risk. Click to hide.").on("click", (function() {
        this.remove(), localStorage.seen = 1
    })).h("#game-bottom-content");
    if (1 == localStorage.seen && v.element.remove(), id("lostworld-io_300x250_2").remove(), new element("br").h(_), async function() {
            for (;;) {
                await c(0), await r()
            }
        }(), d = new element("button").set("innerText", "AntiKick:false").on("click", (function(e) {
            b.toggle(), e.target.innerText = `AntiKick:${b.status}`, b.status ? game_.start() : game_.stop()
        })).h(_), new element("button").set("innerText", "chatFilter:false").on("click", (function(e) {
            f.toggle(), e.target.innerText = `chatFilter:${f.status}`
        })).h(_), new element("br").h(_), new element("button").set("innerText", "lolFilter:false").on("click", (function(e) {
            p.toggle(), e.target.innerText = `lolFilter:${p.status}`
        })).h(_), new element("button").set("innerText", `StreamerMode:${x.status}`).on("click", (function(e) {
            x.toggle(), e.target.innerText = `StreamerMode:${x.status}`, GM_setValue("sm", x.status), r()
        })).h(_), new element("br").h(_), new element("button").set("innerText", "SpawnAlt").on("click", (function(e) {
            var t, n, o;
            GM_setValue("skin", localStorage.m || 0), GM_setValue("accessory", localStorage.k || 0), GM_setValue("back", localStorage.back || 0), GM_setValue("server", id("server-select").selectedOptions[0].getAttribute("region")), GM_setValue("gm", [id("ffa-mode"), id("sandbox-mode"), id("event-mode")].map((e => [...e.classList].includes("dark-blue-button-3-active"))).indexOf(!0)), t = id("create_clan"), id("leave_clan"), id("clan-menu-clan-name-input"), "none" == t.style.display || (n = id("create-clan-button"), (o = id("clan-menu-clan-name-input")).dispatchEvent(new Event("focus", {
                bubbles: !0
            })), o.dispatchEvent(new Event("input", {
                bubbles: !0
            })), o.dispatchEvent(new Event("change", {
                bubbles: !0
            })), o.value = "Alts", o.dispatchEvent(new Event("blur", {
                bubbles: !0
            })), n.click(), n.dispatchEvent(new Event("click")), new Promise((e => {
                var t = setInterval((() => {
                    "Clans" != w.children[0].innerText && (clearInterval(t), e())
                }), 200)
            })).then((e => {
                _GM_setValue("clan", w.children[0].innerText)
            }))), open(location.href, "alt" + Date.now())
        })).h(_), new element(findhref2(id("skin-message"))[0]), randomFit = new element("button").h(_).on("click", (function(e) {
            var [t, n] = ["forEach", "click"];
            findhref2(id("skins-categories"), "img")[t](((e, t) => {
                e[n](), random(findhref2(id("skins-middle-main"), "img"))[n]()
            }))
        })).set("innerText", "Generate Random Fit"), new element("br").h(_), function() {
            var [e, t, n, o, a, r] = ["children", "insertAdjacentElement", "style", "on", "set", "element"];
            id("skin-message")[e][1][t]("afterend", new element("button", {
                _: "button-type-1 blue-discord-button text-shadowed-3"
            })[n]({
                height: "15%",
                position: "absolute",
                top: "15%"
            })[o]("click", (function(e) {
                var [t, n] = ["forEach", "click"];
                findhref2(id("skins-categories"), "img")[t](((e, t) => {
                    e[n](), random(findhref2(id("skins-middle-main"), "img"))[n]()
                }))
            }))[a]("innerText", "Generate Random Fit")[r])
        }(), function() {
            var [e, t, n, o, r, i] = ["children", "insertAdjacentElement", "style", "on", "set", "element"];
            id("skin-message")[e][1][t]("afterend", new element("button", {
                _: "button-type-1 blue-discord-button text-shadowed-3",
                id: "reset-button"
            })[n]({
                height: "15%",
                left: "8%",
                position: "absolute"
            })[o]("click", (function(e) {
                a()
            }))[r]("innerText", "Reset Fit")[i])
        }(), function() {
            var [e, t, n, o, a, r] = ["children", "insertAdjacentElement", "style", "on", "set", "element"];
            id("skin-message")[e][1][t]("afterend", new element("button", {
                _: "button-type-1 blue-discord-button text-shadowed-3"
            })[n]({
                height: "15%",
                left: "50%",
                position: "absolute"
            })[o]("click", (function(e) {
                const {
                    m: t,
                    back: n,
                    k: o
                } = localStorage;
                s = {
                    m: t,
                    back: n,
                    k: o
                }, GM_setValue("skin", localStorage.m || 0), GM_setValue("accessory", localStorage.k || 0), GM_setValue("back", localStorage.back || 0)
            }))[a]("innerText", "Save Fit")[r])
        }(), addEventListener("unload", (function() {
            GM_getValue("skin") && (localStorage.m = GM_getValue("skin")), GM_getValue("accessory") && (localStorage.k = GM_getValue("accessory")), GM_getValue("back") && (localStorage.k = GM_getValue("accessory"))
        })), alt) {
        let e = GM_getValue("server");
        m = id("server-select"), new Promise((e => {
            var t = setInterval((() => {
                "none" == id("small-waiting").style.display && (clearInterval(t), e())
            }), 200)
        })).then((t => {
            [id("ffa-mode"), id("sandbox-mode"), id("event-mode")][GM_getValue("gm")].click(), new Promise((e => {
                var t = setInterval((() => {
                    "none" == id("small-waiting").style.display && (clearInterval(t), e())
                }), 200)
            })).then((t => {
                let n = m.selectedIndex = [...id("server-select").options].map((e => e.getAttribute("region"))).indexOf(e);
                m.dispatchEvent(new Event("click")), m.selectedIndex = n, m.dispatchEvent(new Event("change")), d.element.dispatchEvent(new Event("click")), new Promise((e => {
                    var t = setInterval((() => {
                        "flex" != document.querySelector(sploopMenu).style.display && (clearInterval(t), e(id("clan-menu")))
                    }), 200)
                })).then((e => {
                    async function t() {
                        for (dispatchAllMouseEvents(id("leave-clan-button"));
                            "block" != id("create_clan").style.display;) {
                            await a(100)
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
                    let a = e => new Promise((t => setTimeout(t, e)));
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
        })), id("play").addEventListener("click", (function(e) {
            const {
                nickname: n,
                m: o,
                back: a,
                k: r
            } = localStorage;
            !t && (s = {
                m: o,
                back: a,
                k: r
            })
        }))
    } else {
        id("play").addEventListener("click", (function(e) {
            const {
                nickname: t,
                m: n,
                back: o,
                k: a
            } = localStorage;
            GM_setValue("skin", localStorage.m || 0), GM_setValue("accessory", localStorage.k || 0), GM_setValue("back", localStorage.back || 0), GM_setValue("nn", localStorage.nickname)
        })), k = "", _loop = setInterval((() => {
            w.children[0].innerText != k && (k = w.children[0].innerText, GM_setValue("clan_", {
                v: "block" != id("create_clan").style.display,
                name: w.children[0].innerText
            }))
        })), setTimeout((() => {
            id("nav-skins").click(), setTimeout((() => {
                id("reset-button").click(), setTimeout((() => {
                    setTimeout((() => {
                        setTimeout((() => {
                            id("reset-button").click(), setTimeout((() => {
                                id("nav-game").click()
                            }), 500)
                        }), 1e3)
                    }), 100)
                }), 500)
            }), 1e3)
        }), 4e3)
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
            a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
            r = a[n(479)];
        for (t = 0; t < e; t++) {
            o += a[n(439)](Math[n(491)](Math[n(631)]() * r))
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
                a = [],
                r = {},
                i = [];
            return todo = document[o(545)](n || "*"), todo.forEach = [][o(540)], todo[o(540)]((n => {
                var s = o;
                i = [], typeof e == s(526) ? r.i = e == n.id : r.i = !0, typeof t == s(526) ? r.c = t == n[s(685)] : r.c = !0, i = [r.c, r.i], (i = allEqual(i, !0)) && a[s(416)](n)
            })), a
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
                a = document[o(613)](e);
            return a[o(456)] = n, t && t[o(479)] && (a.id = t), a
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
            var t = `https://www.youtube.com/embed/${setElement(id("insert").value)}?${[...new URL(id("insert").value).searchParams].map((e=>e.join("="))).join("&")}&autoplay=1`;
            localStorage_.setItem("LP", t), frame.src = t
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
                        var e, t, n, o, a, r, i = _0x587f;
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
                        }), $(i(431)).html(), i(512), i(504), i(417), i(486), i(500), i(378), i(369), i(418), i(621), i(528), i(669), e = "#rightCardHolder {display: block!important}", document[i(415)] || document.getElementsByTagName(i(415))[0], (t = document[i(613)](i(681)))[i(518)] = i(625), t.styleSheet ? t[i(708)][i(488)] = e : t[i(404)](document.createTextNode(e)), promoImgHolder.remove(), r = [(a = i)(694), a(387), a(658), a(651), a(596), a(544), a(686), "", a(482), a(611), a(527), a(568), a(560), a(649), a(686), a(635), a(406), a(686), "", a(433), a(620), a(686), "", a(452), a(426), "    background: rgba(0,0,0,0.6);", a(584), a(523), a(634), a(568), "    position: absolute;", a(372), "  }", "", a(426), a(435), "    min-width: 160px;", a(706), a(559), a(686), "", a(354), "    min-height: 200px;", a(350), a(535), "  }", "", "  #linksContainer2 {", a(350), a(559), a(570), "  }", "", "  .menuCard {", a(427), a(523), "    border: 10px solid rgba(0,0,0,0.9);", "    box-shadow: none;", "    overflow:auto;", a(698), a(686), "", a(678), a(630), "    border-right: 2px solid #ec0e0ed6;", "  }", "", a(522), "    border: 2px solid #ffeb3b;", a(686), "", "  ::-webkit-scrollbar-thumb:hover {", a(502), a(686), "", a(573), a(364), a(676), a(686), "", a(412), a(705), a(513), a(395), a(562), a(686), "", a(373), a(460), a(686), "", "  .menuText {", a(664), a(455), a(494), a(686), "", a(566), a(389), "    font-size: 24px;", "    text-decoration: none;", a(649), a(686), "", a(575), a(372), a(485), a(489), "    position: relative;", a(368), a(410), a(532), a(413), "    overflow: hidden;", a(661), a(365), a(686), "", "  .menuButton:hover {", "    font-family: monospace;", a(428), "    border: 5px solid #ff0000;", a(446), a(485), a(686), "", "  .menuButton:before {", "    content: '';", "    position: absolute;", a(695), a(436), a(536), a(442), a(601), a(670), a(603), a(492), a(593), a(671), a(686), "", a(466), a(428), a(498), a(686), "", "  .menuCard span {", a(689), "  }", "", a(641), a(660), "    height: 94px;", "  }", "", a(701), "    max-height: 282px;", "  }", "", a(524), "    transition: 1s;", a(577), a(674), a(583), a(686), "", a(697), a(699), a(624), a(531), "    margin-bottom: 10px;", "    color: #fff;", "    transition: 0.5s;", a(686), "", "  select:hover {", a(386), "    border: 3px solid #B20E0E;", "  }", "", a(384), a(539), a(686), "", a(348), a(672), a(700), "    border-radius: 15px !important;", a(649), a(686), "", "  .actionBarItem:hover {", a(516), a(579), a(537), a(686), "", a(383), a(672), "    border: 3px solid rgba(234,0,255,1);", "    border-radius: 50px !important;", a(649), a(686), "", "  .uiElement:hover {", a(516), "    border: 3px solid rgba(0,95,255,1);", a(555), a(686), "", a(391), a(672), "    border: 3px solid rgba(255,255,0,0.9);", a(537), a(680), a(649), a(686), "", a(503), "    background-color: rgba(0,0,0,0.6) !important;", a(584), a(361), "    color: #FF0000;", a(686), "", "  #itemInfoHolder { ", a(606), "  }", "", a(382), a(356), a(469), a(534), a(686), "", a(525), "    font-size: 30px !important;", a(614), "  }", "", a(376), a(487), "    border: 1px solid #fff", "  }", "", "  #ageBar {", a(672), "    border: 1px solid rgba(0,0,0,0.9);", "    height: 5px;", a(565), a(686), "", a(348), a(477), a(360), "    background-position: center; ", a(437), a(686), "", a(556), "    color: #FF8C00!important;", a(649), a(686), "", a(687), a(662), "  }", "", "  #chatBox:hover {", "    background: rgba(0,0,0,0.5)!important;", a(686), "", "  #chatBox:hover::placeholder {", a(366), a(686), "", a(646), a(467), "  }", "", a(461), a(617), a(622), a(649), a(686), "", a(443), a(688), "    transition: 0.5s;", "  }", "", "  #nameInput:hover {", a(421), a(372), a(686), "", "  #nameInput:hover::placeholder {", "    background: #4ACA1A;", a(372), "  }", "", a(691), a(422), a(607), "  }", "", a(440), "    display:table-cell;", a(402), a(462), a(352), "  }", "  ", a(677), a(543), a(420), a(587), a(589), a(427), a(584), a(686), "", a(407), a(677), a(644), a(484), a(542), a(552), a(686), "", "  .storeItem, ", a(677), a(644), a(484), "  .allianceItem, ", a(409), a(709), a(686), "", "  .storeItem:hover, ", a(666), a(638), a(619), a(659), a(475), a(686), "", "  #allianceInput, ", a(389), a(686), "  ", a(367), "    background: rgba(0,0,0,0.5);", "    color: #fc9f9f;", "  }", "", a(675), "    color: #fc9f9f;", a(686), "", "  #linksContainer2 > *:first-child {", a(623), a(686), "", a(615), "    position: absolute;", a(464), a(574), "    width: 3%;", a(602), a(423), "    border: 3px solid rgba(100,0,255,0.9);", "    border-top-right-radius: 30px;", a(463), "    transition: 1s;", "    z-index: 999;", a(686), "", a(520), a(519), a(686), "", a(668), a(359), "    border-bottom: 3px solid #0030ff;", a(645), a(548), "    white-space: nowrap;", a(363), a(430), a(686), "", a(592), "    transform: rotate(0deg) translate(0,-1580%)", a(686), "", "", "  .text {", a(582), a(598), a(444), a(568), a(529), "    display: none;", "    transition: 1s;", "  }", "", a(599), "    font-size: 20px;", a(355), a(686), "", "  b:hover { ", "    color: #ff0000;", a(686), "", a(693), "    top: 5.5%;", "  }", "", a(692), a(388), a(686), "", a(682), a(449), "  }", "", "  .four > .text {", a(636), a(686), "", a(478), "    top: 57.5%;", a(686), "", a(510), a(445), "  }", "", a(571), a(703), a(686), "", "  .eight > .text {", a(643), "  }", "", "", "", a(667), a(609), a(686), "", a(465), a(640), a(686), "", "", a(557), a(598), "    cursor: pointer;", "    background-color: #888;", a(702), "    transition: .4s;", a(686), "", a(618), "    position: absolute;", a(665), a(702), a(588), a(686), "", a(594), a(530), a(686), "  ", a(390), a(567), a(686), "", "  input:checked + .slider:before {", a(353), a(553), a(605), "  }", "", "  .slider.round {", "    border-radius: 34px;", a(686), "", "  .slider.round:before {", a(648), a(686)][a(506)]("\n"), typeof GM_addStyle != a(558) ? GM_addStyle(r) : typeof PRO_addStyle != a(558) ? PRO_addStyle(r) : typeof addStyle != a(558) ? addStyle(r) : ((n = document.createElement(a(681)))[a(518)] = a(625), n[a(404)](document[a(458)](r)), (o = document[a(545)](a(415)))[a(479)] > 0 ? o[0][a(404)](n) : document[a(563)][a(404)](n))
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
                    }, o = CE(r(578), r(633)), pendto[r(404)](o), (pendto = centy)[r(404)](br), pendto.appendChild(frame), pendto.appendChild(br), pendto.appendChild(br), pendto.appendChild(inputm), pendto.appendChild(br), pendto[r(404)](br), clearInterval(a), t[r(404)](br), t[r(404)](hb), t[r(404)](br), t[r(404)](hb2), e[r(404)](t), add_styles(), id("play") && SetUpSploop())
                } catch (i) {
                    window.lastError = i
                }
            }), 0)) : (clearInterval(a), a = setInterval((function() {
                var e, t = n;
                try {
                    pendto && (clearInterval(a), e = pendto, (pendto = CE("div", "centy2"))[t(404)](br), pendto[t(404)](frame), frame[t(612)] = localStorage_.getItem("LP"), window.onunload = function(e) {
                        var n = t;
                        localStorage_[n(655)]("LP", frame[n(612)])
                    }, pendto[t(404)](br), pendto.appendChild(br), pendto[t(404)](inputm), e[t(404)](pendto), e[t(404)](br), e.appendChild(hb), e.appendChild(br), e.appendChild(hb2), add_styles(), id("play") && SetUpSploop())
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
                    F: 3,
                    S: 5,
                    j: 7,
                    I: 8,
                    G: 6
                },
                2: {
                    cookie: 17,
                    C: 20
                },
                3: {
                    T: 31,
                    V: 32
                },
                4: {
                    B: 23,
                    $: 29,
                    P: 30,
                    A: 27
                },
                5: {
                    H: 0,
                    L: 10,
                    D: 14,
                    q: 11
                },
                6: {
                    R: 18,
                    N: 21,
                    O: 33,
                    platform: 34,
                    U: 35,
                    K: 37,
                    J: 38
                },
                7: {
                    X: 2,
                    Y: 12,
                    W: 4,
                    Z: 28
                },
                8: {
                    ee: 13,
                    te: 15,
                    ne: 24,
                    oe: 25,
                    ae: 36
                }
            },
            t = document.createElement("div");
        ! function(n = ((e, t) => {
            window.items2[t] = e.target.selectedOptions[0].value
        }), o = document.createElement("br")) {
            for (let n in e) {
                t.append(document.createElement("br"));
                let o = document.createElement("select");
                window.selects.push([n, o]), o.id = "sel" + n, o.re = n;
                let a = document.createElement("span");
                a.innerText = `Age ${n}:`, Object.keys(e[n]).forEach((t => {
                    let a = document.createElement("option");
                    a.value = e[n][t], a.innerText = t, o.append(a)
                })), t.append(a), t.append(o)
            }
            setupCard.append(t), sel1.onchange = function(e) {
                var t = e.target.value,
                    n = e.target.re;
                items2[n] = t
            }, sel2.onchange = function(e) {
                var t = e.target.value,
                    n = e.target.re;
                items2[n] = t
            }, sel3.onchange = function(e) {
                var t = e.target.value,
                    n = e.target.re;
                items2[n] = t
            }, sel4.onchange = function(e) {
                var t = e.target.value,
                    n = e.target.re;
                items2[n] = t
            }, sel5.onchange = function(e) {
                var t = e.target.value,
                    n = e.target.re;
                items2[n] = t
            }, sel6.onchange = function(e) {
                var t = e.target.value,
                    n = e.target.re;
                items2[n] = t
            }, sel7.onchange = function(e) {
                var t = e.target.value,
                    n = e.target.re;
                items2[n] = t
            }, sel8.onchange = function(e) {
                var t = e.target.value,
                    n = e.target.re;
                items2[n] = t
            }
        }(), window.spikes = [25, 23, 24, 6, 7, 9], info2.ie = e, info2.ie[0] = {
            se: 19,
            ce: 6,
            le: 10
        };
        let n = document.createElement("input");
        n.value = 150, n.id = "Hspeed", n.style.backgroundColor = "rgb(0,0,0,0)", n.style.color = "white", n.onchange = function(e) {
            window.defH = 1 * n.value, chat("Healspeed " + n.value)
        };
        let o = document.createElement("input");
        o.value = i2, o.id = "instaspeed", o.style.backgroundColor = "rgb(0,0,0,0)", o.style.color = "white";
        let a = document.createElement("span");
        a.innerText = "Insta speed ", a.style.color = "red";
        let r = document.createElement("span");
        r.innerText = "Heal speed ", r.style.color = "red", setupCard.append(document.createElement("br")), setupCard.append(r), setupCard.append(n), setupCard.append(document.createElement("br")), setupCard.append(a), setupCard.append(o), o.onchange = function(e) {
            i2 = 1 * o.value, chat("Insta speed " + o.value)
        }, setupCard.style.overflow = "auto", setupCard.style.height = "180px", window.stoped = 1
    }
}
var _setUp;
const badWords = [...new Set(["4r5e", "5h1t", "5hit", "fuck", "a55", "anal", "anus", "ar5e", "arrse", "arse", "ass", "ass-fucker", "asses", "assfucker", "assfukka", "asshole", "assholes", "asswhole", "a_s_s", "b!tch", "b00bs", "b17ch", "b1tch", "ballbag", "balls", "ballsack", "bastard", "beastial", "beastiality", "bellend", "bestial", "bestiality", "bi+ch", "biatch", "bitch", "bitcher", "bitchers", "bitches", "bitchin", "bitching", "bloody", "blow job", "blowjob", "blowjobs", "boiolas", "bollock", "bollok", "boner", "boob", "boobs", "booobs", "boooobs", "booooobs", "booooooobs", "breasts", "buceta", "bugger", "bum", "bunny fucker", "butt", "butthole", "buttmuch", "buttplug", "c0ck", "c0cksucker", "carpet muncher", "cawk", "chink", "cipa", "cl1t", "clit", "clitoris", "clits", "cnut", "cock", "cock-sucker", "cockface", "cockhead", "cockmunch", "cockmuncher", "cocks", "cocksuck", "cocksucked", "cocksucker", "cocksucking", "cocksucks", "cocksuka", "cocksukka", "cok", "cokmuncher", "coksucka", "coon", "cox", "crap", "cum", "cummer", "cumming", "cums", "cumshot", "cunilingus", "cunillingus", "cunnilingus", "cunt", "cuntlick", "cuntlicker", "cuntlicking", "cunts", "cyalis", "cyberfuc", "cyberfuck", "cyberfucked", "cyberfucker", "cyberfuckers", "cyberfucking", "d1ck", "damn", "dick", "dickhead", "dildo", "dildos", "dink", "dinks", "dirsa", "dlck", "dog-fucker", "doggin", "dogging", "donkeyribber", "doosh", "duche", "dyke", "ejaculate", "ejaculated", "ejaculates", "ejaculating", "ejaculatings", "ejaculation", "ejakulate", "f u c k", "f u c k e r", "f4nny", "fag", "fagging", "faggitt", "faggot", "faggs", "fagot", "fagots", "fags", "fanny", "fannyflaps", "fannyfucker", "fanyy", "fatass", "fcuk", "fcuker", "fcuking", "feck", "fecker", "felching", "fellate", "fellatio", "fingerfuck", "fingerfucked", "fingerfucker", "fingerfuckers", "fingerfucking", "fingerfucks", "fistfuck", "fistfucked", "fistfucker", "fistfuckers", "fistfucking", "fistfuckings", "fistfucks", "flange", "fook", "fooker", "fuck", "fucka", "fucked", "fucker", "fuckers", "fuckhead", "fuckheads", "fuckin", "fucking", "fuckings", "fuckingshitmotherfucker", "fuckme", "fucks", "fuckwhit", "fuckwit", "fudge packer", "fudgepacker", "fuk", "fuker", "fukker", "fukkin", "fuks", "fukwhit", "fukwit", "fux", "fux0r", "f_u_c_k", "gangbang", "gangbanged", "gangbangs", "gaylord", "gaysex", "goatse", "God", "god-dam", "god-damned", "goddamn", "goddamned", "hardcoresex", "hell", "heshe", "hoar", "hoare", "hoer", "homo", "hore", "horniest", "horny", "hotsex", "jack-off", "jackoff", "jap", "jerk-off", "jism", "jiz", "jizm", "jizz", "kawk", "knob", "knobead", "knobed", "knobend", "knobhead", "knobjocky", "knobjokey", "kock", "kondum", "kondums", "kum", "kummer", "kumming", "kums", "kunilingus", "l3i+ch", "l3itch", "labia", "lust", "lusting", "m0f0", "m0fo", "m45terbate", "ma5terb8", "ma5terbate", "masochist", "master-bate", "masterb8", "masterbat*", "masterbat3", "masterbate", "masterbation", "masterbations", "masturbate", "mo-fo", "mof0", "mofo", "mothafuck", "mothafucka", "mothafuckas", "mothafuckaz", "mothafucked", "mothafucker", "mothafuckers", "mothafuckin", "mothafucking", "mothafuckings", "mothafucks", "mother fucker", "motherfuck", "motherfucked", "motherfucker", "motherfuckers", "motherfuckin", "motherfucking", "motherfuckings", "motherfuckka", "motherfucks", "muff", "mutha", "muthafecker", "muthafuckker", "muther", "mutherfucker", "n1gga", "n1gger", "nazi", "nigg3r", "nigg4h", "nigga", "niggah", "niggas", "niggaz", "nigger", "niggers", "nob", "nob jokey", "nobhead", "nobjocky", "nobjokey", "numbnuts", "nutsack", "orgasim", "orgasims", "orgasm", "orgasms", "p0rn", "pawn", "pecker", "penis", "penisfucker", "phonesex", "phuck", "phuk", "phuked", "phuking", "phukked", "phukking", "phuks", "phuq", "pigfucker", "pimpis", "piss", "pissed", "pisser", "pissers", "pisses", "pissflaps", "pissin", "pissing", "pissoff", "poop", "porn", "porno", "pornography", "pornos", "prick", "pricks", "pron", "pube", "pusse", "pussi", "pussies", "pussy", "pussys", "rectum", "retard", "rimjaw", "rimming", "s hit", "s.o.b.", "sadist", "schlong", "screwing", "scroat", "scrote", "scrotum", "semen", "sex", "sh!+", "sh!t", "sh1t", "shag", "shagger", "shaggin", "shagging", "shemale", "shi+", "shit", "shitdick", "shite", "shited", "shitey", "shitfuck", "shitfull", "shithead", "shiting", "shitings", "shits", "shitted", "shitter", "shitters", "shitting", "shittings", "shitty", "skank", "slut", "sluts", "smegma", "smut", "snatch", "son-of-a-bitch", "spac", "spunk", "s_h_i_t", "t1tt1e5", "t1tties", "teets", "teez", "testical", "testicle", "tit", "titfuck", "tits", "titt", "tittie5", "tittiefucker", "titties", "tittyfuck", "tittywank", "titwank", "tosser", "turd", "tw4t", "twat", "twathead", "twatty", "twunt", "twunter", "v14gra", "v1gra", "vagina", "viagra", "vulva", "w00se", "wang", "wank", "wanker", "wanky", "whoar", "whore", "willies", "willy", "xrated", "xxx", "4r5e", "5h1t", "5hit", "a55", "anal", "anus", "ar5e", "arrse", "arse", "ass", "ass-fucker", "asses", "assfucker", "assfukka", "asshole", "assholes", "asswhole", "a_s_s", "b!tch", "b00bs", "b17ch", "b1tch", "ballbag", "balls", "ballsack", "bastard", "beastial", "beastiality", "bellend", "bestial", "bestiality", "bi+ch", "biatch", "bitch", "bitcher", "bitchers", "bitches", "bitchin", "bitching", "bloody", "blow job", "blowjob", "blowjobs", "boiolas", "bollock", "bollok", "boner", "boob", "boobs", "booobs", "boooobs", "booooobs", "booooooobs", "breasts", "buceta", "bugger", "bum", "bunny fucker", "butt", "butthole", "buttmuch", "buttplug", "c0ck", "c0cksucker", "carpet muncher", "cawk", "chink", "cipa", "cl1t", "clit", "clitoris", "clits", "cnut", "cock", "cock-sucker", "cockface", "cockhead", "cockmunch", "cockmuncher", "cocks", "cocksuck", "cocksucked", "cocksucker", "cocksucking", "cocksucks", "cocksuka", "cocksukka", "cok", "cokmuncher", "coksucka", "coon", "cox", "crap", "cum", "cummer", "cumming", "cums", "cumshot", "cunilingus", "cunillingus", "cunnilingus", "cunt", "cuntlick", "cuntlicker", "cuntlicking", "cunts", "cyalis", "cyberfuc", "cyberfuck", "cyberfucked", "cyberfucker", "cyberfuckers", "cyberfucking", "d1ck", "damn", "dick", "dickhead", "dildo", "dildos", "dink", "dinks", "dirsa", "dlck", "dog-fucker", "doggin", "dogging", "donkeyribber", "doosh", "duche", "dyke", "ejaculate", "ejaculated", "ejaculates", "ejaculating", "ejaculatings", "ejaculation", "ejakulate", "f u c k", "f u c k e r", "f4nny", "fag", "fagging", "faggitt", "faggot", "faggs", "fagot", "fagots", "fags", "fanny", "fannyflaps", "fannyfucker", "fanyy", "fatass", "fcuk", "fcuker", "fcuking", "feck", "fecker", "felching", "fellate", "fellatio", "fingerfuck", "fingerfucked", "fingerfucker", "fingerfuckers", "fingerfucking", "fingerfucks", "fistfuck", "fistfucked", "fistfucker", "fistfuckers", "fistfucking", "fistfuckings", "fistfucks", "flange", "fook", "fooker", "fuck", "fucka", "fucked", "fucker", "fuckers", "fuckhead", "fuckheads", "fuckin", "fucking", "fuckings", "fuckingshitmotherfucker", "fuckme", "fucks", "fuckwhit", "fuckwit", "fudge packer", "fudgepacker", "fuk", "fuker", "fukker", "fukkin", "fuks", "fukwhit", "fukwit", "fux", "fux0r", "f_u_c_k", "gangbang", "gangbanged", "gangbangs", "gaylord", "gaysex", "goatse", "God", "god-dam", "god-damned", "goddamn", "goddamned", "hardcoresex", "hell", "heshe", "hoar", "hoare", "hoer", "homo", "hore", "horniest", "horny", "hotsex", "jack-off", "jackoff", "jap", "jerk-off", "jism", "jiz", "jizm", "jizz", "kawk", "knob", "knobead", "knobed", "knobend", "knobhead", "knobjocky", "knobjokey", "kock", "kondum", "kondums", "kum", "kummer", "kumming", "kums", "kunilingus", "l3i+ch", "l3itch", "labia", "lust", "lusting", "m0f0", "m0fo", "m45terbate", "ma5terb8", "ma5terbate", "masochist", "master-bate", "masterb8", "masterbat*", "masterbat3", "masterbate", "masterbation", "masterbations", "masturbate", "mo-fo", "mof0", "mofo", "mothafuck", "mothafucka", "mothafuckas", "mothafuckaz", "mothafucked", "mothafucker", "mothafuckers", "mothafuckin", "mothafucking", "mothafuckings", "mothafucks", "mother fucker", "motherfuck", "motherfucked", "motherfucker", "motherfuckers", "motherfuckin", "motherfucking", "motherfuckings", "motherfuckka", "motherfucks", "muff", "mutha", "muthafecker", "muthafuckker", "muther", "mutherfucker", "n1gga", "n1gger", "nazi", "nigg3r", "nigg4h", "nigga", "niggah", "niggas", "niggaz", "nigger", "niggers", "nob", "nob jokey", "nobhead", "nobjocky", "nobjokey", "numbnuts", "nutsack", "orgasim", "orgasims", "orgasm", "orgasms", "p0rn", "pawn", "pecker", "penis", "penisfucker", "phonesex", "phuck", "phuk", "phuked", "phuking", "phukked", "phukking", "phuks", "phuq", "pigfucker", "pimpis", "piss", "pissed", "pisser", "pissers", "pisses", "pissflaps", "pissin", "pissing", "pissoff", "poop", "porn", "porno", "pornography", "pornos", "prick", "pricks", "pron", "pube", "pusse", "pussi", "pussies", "pussy", "pussys", "rectum", "retard", "rimjaw", "rimming", "s hit", "s.o.b.", "sadist", "schlong", "screwing", "scroat", "scrote", "scrotum", "semen", "sex", "sh!+", "sh!t", "sh1t", "shag", "shagger", "shaggin", "shagging", "shemale", "shi+", "shit", "shitdick", "shite", "shited", "shitey", "shitfuck", "shitfull", "shithead", "shiting", "shitings", "shits", "shitted", "shitter", "shitters", "shitting", "shittings", "shitty", "skank", "slut", "sluts", "smegma", "smut", "snatch", "son-of-a-bitch", "spac", "spunk", "s_h_i_t", "t1tt1e5", "t1tties", "teets", "teez", "testical", "testicle", "tit", "titfuck", "tits", "titt", "tittie5", "tittiefucker", "titties", "tittyfuck", "tittywank", "titwank", "tosser", "turd", "tw4t", "twat", "twathead", "twatty", "twunt", "twunter", "v14gra", "v1gra", "vagina", "viagra", "vulva", "w00se", "wang", "wank", "wanker", "wanky", "whoar", "whore", "willies", "willy", "xrated", "xxx", "ahole", "anus", "ash0le", "ash0les", "asholes", "ass", "Ass Monkey", "Assface", "assh0le", "assh0lez", "asshole", "assholes", "assholz", "asswipe", "azzhole", "bassterds", "bastard", "bastards", "bastardz", "basterds", "basterdz", "Biatch", "bitch", "bitches", "Blow Job", "boffing", "butthole", "buttwipe", "c0ck", "c0cks", "c0k", "Carpet Muncher", "cawk", "cawks", "Clit", "cnts", "cntz", "cock", "cockhead", "cock-head", "cocks", "CockSucker", "cock-sucker", "crap", "cum", "cunt", "cunts", "cuntz", "dick", "dild0", "dild0s", "dildo", "dildos", "dilld0", "dilld0s", "dominatricks", "dominatrics", "dominatrix", "dyke", "enema", "f u c k", "f u c k e r", "fag", "fag1t", "faget", "fagg1t", "faggit", "faggot", "fagg0t", "fagit", "fags", "fagz", "faig", "faigs", "fart", "flipping the bird", "fuck", "fucker", "fuckin", "fucking", "fucks", "Fudge Packer", "fuk", "Fukah", "Fuken", "fuker", "Fukin", "Fukk", "Fukkah", "Fukken", "Fukker", "Fukkin", "g00k", "God-damned", "h00r", "h0ar", "h0re", "hells", "hoar", "hoor", "hoore", "jackoff", "jap", "japs", "jerk-off", "jisim", "jiss", "jizm", "jizz", "knob", "knobs", "knobz", "kunt", "kunts", "kuntz", "Lezzian", "Lipshits", "Lipshitz", "masochist", "masokist", "massterbait", "masstrbait", "masstrbate", "masterbaiter", "masterbate", "masterbates", "Motha Fucker", "Motha Fuker", "Motha Fukkah", "Motha Fukker", "Mother Fucker", "Mother Fukah", "Mother Fuker", "Mother Fukkah", "Mother Fukker", "mother-fucker", "Mutha Fucker", "Mutha Fukah", "Mutha Fuker", "Mutha Fukkah", "Mutha Fukker", "n1gr", "nastt", "nigger;", "nigur;", "niiger;", "niigr;", "orafis", "orgasim;", "orgasm", "orgasum", "oriface", "orifice", "orifiss", "packi", "packie", "packy", "paki", "pakie", "paky", "pecker", "peeenus", "peeenusss", "peenus", "peinus", "pen1s", "penas", "penis", "penis-breath", "penus", "penuus", "Phuc", "Phuck", "Phuk", "Phuker", "Phukker", "polac", "polack", "polak", "Poonani", "pr1c", "pr1ck", "pr1k", "pusse", "pussee", "pussy", "puuke", "puuker", "queer", "queers", "queerz", "qweers", "qweerz", "qweir", "recktum", "rectum", "retard", "sadist", "scank", "schlong", "screwing", "semen", "sex", "sexy", "Sh!t", "sh1t", "sh1ter", "sh1ts", "sh1tter", "sh1tz", "shit", "shits", "shitter", "Shitty", "Shity", "shitz", "Shyt", "Shyte", "Shytty", "Shyty", "skanck", "skank", "skankee", "skankey", "skanks", "Skanky", "slag", "slut", "sluts", "Slutty", "slutz", "son-of-a-bitch", "tit", "turd", "va1jina", "vag1na", "vagiina", "vagina", "vaj1na", "vajina", "vullva", "vulva", "w0p", "wh00r", "wh0re", "whore", "xrated", "xxx", "b!+ch", "bitch", "blowjob", "clit", "arschloch", "fuck", "shit", "ass", "asshole", "b!tch", "b17ch", "b1tch", "bastard", "bi+ch", "boiolas", "buceta", "c0ck", "cawk", "chink", "cipa", "clits", "cock", "cum", "cunt", "dildo", "dirsa", "ejakulate", "fatass", "fcuk", "fuk", "fux0r", "hoer", "hore", "jism", "kawk", "l3itch", "l3i+ch", "lesbian", "masturbate", "masterbat*", "masterbat3", "motherfucker", "s.o.b.", "mofo", "nazi", "nigga", "nigger", "nutsack", "phuck", "pimpis", "pusse", "pussy", "scrotum", "sh!t", "shemale", "shi+", "sh!+", "slut", "smut", "teets", "tits", "boobs", "b00bs", "teez", "testical", "testicle", "titt", "w00se", "jackoff", "wank", "whoar", "whore", "*damn", "*dyke", "*fuck*", "*shit*", "@$$", "amcik", "andskota", "arse*", "assrammer", "ayir", "bi7ch", "bitch*", "bollock*", "breasts", "butt-pirate", "cabron", "cazzo", "chraa", "chuj", "Cock*", "cunt*", "d4mn", "daygo", "dego", "dick*", "dike*", "dupa", "dziwka", "ejackulate", "Ekrem*", "Ekto", "enculer", "faen", "fag*", "fanculo", "fanny", "feces", "feg", "Felcher", "ficken", "fitt*", "Flikker", "foreskin", "Fotze", "Fu(*", "fuk*", "futkretzn", "gook", "guiena", "h0r", "h4x0r", "hell", "helvete", "hoer*", "honkey", "Huevon", "hui", "injun", "jizz", "kanker*", "kike", "klootzak", "kraut", "knulle", "kuk", "kuksuger", "Kurac", "kurwa", "kusi*", "kyrpa*", "lesbo", "mamhoon", "masturbat*", "merd*", "mibun", "monkleigh", "mouliewop", "muie", "mulkku", "muschi", "nazis", "nepesaurio", "nigger*", "orospu", "paska*", "perse", "picka", "pierdol*", "pillu*", "pimmel", "piss*", "pizda", "poontsee", "poop", "porn", "p0rn", "pr0n", "preteen", "pula", "pule", "puta", "puto", "qahbeh", "queef*", "rautenberg", "schaffer", "scheiss*", "schlampe", "schmuck", "screw", "sh!t*", "sharmuta", "sharmute", "shipal", "shiz", "skribz", "skurwysyn", "sphencter", "spic", "spierdalaj", "splooge", "suka", "b00b*", "testicle*", "titt*", "twat", "vittu", "wank*", "wetback*", "wichser", "wop*", "yed", "zabourah"])],
    reg = new RegExp(`(${[...new Set(badWords.join(" ").match(/[\w\d]+/gi))].join("|")})`, "gi"),
    filter1 = e => e.replaceAll(reg, (function(e, t, n) {
        return e.length > 1 ? e.split(/[aeiou]+/gi).join("*") : e
    })),
    filter2 = e => "oh" === (e = e.toLowerCase()) ? random(["owo", "OwO"]) : e.replaceAll(/l/g, "w").replaceAll(/[le]+/g, (function(e) {
        return {
            l: "w",
            e: "ee"
        }[e[0]] || e
    })).replace(/r/g, "z").replace(/s/g, "z").replace(/t/g, "t(t)").replace(/e/g, (function(e, t, n) {
        return n.slice(t - 1, t + 1), "e"
    }));
"".replaceAll(/e{3,}/gi, "ee");
const game_ = new class {#
    e = function() {};#
    t = function() {};#
    n = !1;#
    o = 1e3;#
    a = function(e) {
        return new Promise((t => setTimeout(t, e)))
    };#
    r = 0;#
    i = 0;#
    s = async function() {
        for (;;) {
            let e = this.#a,
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
        this.#s()
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
    c = !1;
    toggle() {
        this.#c = !this.#c
    }
    get status() {
        return this.#c
    }
    set status(e) {
        this.#c = !!e
    }
}
class element {
    static get ue() {
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