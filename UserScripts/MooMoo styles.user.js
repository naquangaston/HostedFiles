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
function isHidden(a) {
    return null === a.offsetParent
}

function random(a) {
    var e = a8;
    return a[Math.floor(Math.random() * a[e(412)])]
}

function dispatchAllMouseEvents(a) {
    var e = a8;
    [e(813), e(1410), "mouseenter", e(308), e(517), e(406), e(1112), e(834)][e(1341)]((e => {
        let t = new Event(e, {
            bubbles: !0,
            isTrusted: !0
        });
        a["on" + e] && a["on" + e](t), a.dispatchEvent(t)
    }))
}

function dispatchAllInputEvents(a, e) {
    var t = a8;
    [t(577), t(424), t(558), t(492)].forEach((n => {
        var o = t;
        let r = new Event(n, {
            bubbles: !0,
            isTrusted: !0
        });
        a["on" + n] && a["on" + n](r), "input" === n && (a[o(816)] = e), a.dispatchEvent(r)
    }))
}

function add_Style(a) {
    var e = a8,
        [t, n, o, r] = [e(757), "textContent", "head", e(1356)],
        i = {get k() {
                return document
            }
        },
        s = i.k[t](e(244));
    s[n] = a, i.k[o][r](s)
}

function SetUpSploop() {
    function a(a) {
        return /^[0-9a-zA-Z]$/.test(a) && 1 == a.length
    }

    function e(a = 0, e = 0, n = 0) {
        var o = k;
        t(0);
        try {
            !Number[o(1306)](a) && findhref2(id(o(531)), o(659))[o(1084)]((e => e[o(299)][o(226)](o(1096) + a)))[0][o(813)]()
        } catch (r) {}
        t(1);
        try {
            !Number[o(1306)](e) && findhref2(id(o(531)), "img")[o(1084)]((a => a[o(299)].includes("accessory" + e)))[0].click()
        } catch (i) {}
        t(2), !Number[o(1306)](n) && findhref2(id(o(531)), o(659))[o(1084)]((a => a[o(299)][o(226)](o(1088) + n)))[0][o(813)](), t(0)
    }

    function t(a) {
        var e = k;
        findhref2(id("skins-categories"), e(659))[a].click()
    }
    async function n(a, e = 3e3) {
        return await new Promise(((t, n) => {
            var o = b;
            let r = performance[o(845)]();
            ! function i() {
                var s = o;
                document[s(1403)](a) ? t(document[s(1403)](a)) : performance.now() - r >= e ? n(new Error(s(673))) : requestAnimationFrame(i)
            }()
        }))
    }

    function o() {
        var a = k;
        dispatchAllInputEvents(nickname, GM_getValue("nn")), t(0), !Number[a(1306)](GM_getValue(a(1096))) && findhref2(id(a(531)), "img").filter((e => e[a(299)][a(226)](a(1096) + GM_getValue("skin"))))[0][a(813)](), t(1), !Number[a(1306)](GM_getValue("accessory")) && findhref2(id(a(531)), "img").filter((e => e[a(299)][a(226)]("accessory" + GM_getValue(a(649)))))[0][a(813)](), t(2), !Number[a(1306)](GM_getValue(a(1088))) && findhref2(id(a(531)), a(659))[a(1084)]((e => e[a(299)].includes(a(1088) + GM_getValue(a(1088)))))[0][a(813)](), t(0)
    }
    async function r() {
        var a, e = k;
        await n(e(619)), (a = id(e(1431))).style[e(435)] = e(582), x[e(292)] ? (!u && (u = (await n(e(680)))[e(742)]), (await n("#nickname-value"))[e(742)] = "streamerMode", (await n(e(553)))[e(244)][e(435)] = "none") : u && ((await n("#nickname-value"))[e(742)] = u, (await n(e(553)))[e(244)][e(435)] = e(648)), a[e(244)][e(435)] = e(892)
    }
    var i, s, c, l, u, p, d, m, f, k = a8;
    const g = new bool,
        h = new bool,
        w = ({
            target: a
        }) => {
            var e = b;
            g[e(292)] && (a[e(816)] = filter1(a[e(816)]))
        },
        v = ({
            target: a
        }) => {
            var e = b;
            h[e(292)] && (a[e(816)] = filter2(a.value))
        };
    if (n("#chat")[k(894)]((e => {
            var t = k;
            e.addEventListener("keypress", (({
                target: e,
                key: t
            }) => {
                var n = b;
                a(t) && [w][n(1341)]((a => a({
                    target: e
                })))
            })), e[t(490)](t(622), (e => {
                var n = t;
                const {
                    target: o,
                    key: r,
                    code: i
                } = e;
                a(r) && i != n(879) && [w, v][n(1341)]((a => a({
                    target: o
                })))
            })), e.addEventListener(t(1032), (({
                target: e,
                key: n
            }) => {
                var o = t;
                a(n) && [w][o(1341)]((a => a({
                    target: e
                })))
            }))
        })), alt) {
        typeof GM_getValue("alts") == k(1104) && GM_setValue("alts", {});
        for (let a = 1;; a++) {
            if (!GM_getValue(k(410))[a]) {
                i = a;
                let e = GM_getValue("alts");
                e[a] = !0, GM_setValue("alts", e);
                break
            }
        }
        addEventListener(k(617), (function() {
            var a = k;
            if (alt) {
                let e = GM_getValue(a(410));
                e[i] = !1, GM_setValue(a(410), e)
            }
        }))
    }
    if (s = null, _loadFit = e, _GM_setValue = GM_setValue, _GM_getValue = GM_getValue, new Promise(((a, e) => e = setInterval((() => findhref2(id(k(531)), "img")[k(412)] && (clearInterval(e), a())), 100)))[k(894)]((async a => {
            var t = k;
            await c(1e3), !alt && e(GM_getValue(t(1096)), GM_getValue(t(294)), GM_getValue(t(1066)))
        })), id(k(1132)).style.overflow = k(1042), id(k(298)).parentNode[k(244)][k(1034)] = k(1042), _setUp) {
        return
    }
    add_Style(k(677));
    const y = new bool,
        x = new bool;
    GM_getValue("sm") && x[k(322)]();
    let _ = id("clan-menu");
    game_[k(352)] = !0, game_.timeOut = 5e3, game_[k(1071)] = function() {
        return !isHidden(play)
    }, game_.spawnFunc = function() {
        var a = k;
        if (alt) {
            dispatchAllInputEvents(nickname, a(413) + i + a(1093) + GM_getValue("nn")), randomFit[a(806)][a(813)]();
            const {
                t: e,
                back: t,
                o: n
            } = localStorage;
            s = {
                skin: e,
                back: t,
                accessory: n
            }
        } else {
            const {
                t: a,
                back: t,
                o: n
            } = s;
            e(a, n, t)
        }
        play[a(813)](), setTimeout(o, 200)
    }, c = a => new Promise((e => setTimeout(e, a))), _game_ = game_, _setUp = !0;
    let M = id(k(1132)),
        F = [k(1418), "#game-right-content-main"];
    ! function() {
        var a = k,
            [e, t, n, o, r, i] = ["map", "forEach", a(672), "length", a(462), "remove"],
            s = {get sn() {
                    return console
                }
            };
        F[e]($)[t]((a => {
            s.sn[n]({
                s: a
            }), a[o] && [...a[0][r]][t]((a => a[i]()))
        }))
    }(), l = id("da-right");
    new element(k(980))[k(244)]({
        padding: k(511),
        backgroundColor: "rgba(0, 0, 0, 0)",
        color: k(809),
        border: k(237),
        marginBottom: k(511)
    })[k(369)](new element("h2")[k(1082)](k(742), k(640))).append(new element("p")[k(1082)](k(742), "This script can:")).append(new element("ul")[k(369)](new element("li")[k(1082)](k(742), k(506)))[k(369)](new element("li")[k(1082)](k(742), "Add a built-in YouTube embed video player"))[k(369)](new element("li")[k(1082)](k(742), "Include a random fit generator button")).append(new element("li")[k(1082)](k(742), k(908)))[k(369)](new element("li")[k(1082)](k(742), k(1175))).append(new element("li").set("innerText", "Automatically join the game and turn on antikick for alts")))[k(1273)](l);
    const S = new element(k(980))[k(244)]({
        padding: k(511),
        backgroundColor: k(797),
        color: k(716),
        border: k(754),
        borderRadius: k(485),
        cursor: "pointer"
    })[k(1082)](k(742), k(1282)).on(k(813), (function() {
        var a = k;
        this.remove(), localStorage[a(494)] = 1
    })).appendTo(k(1418));
    if (1 == localStorage.seen && S[k(806)].remove(), id(k(260))[k(524)](), new element("br")[k(1273)](M), async function() {
            for (;;) {
                await c(0), await r()
            }
        }(), p = new element(k(763))[k(1082)](k(742), "AntiKick:false").on("click", (function(a) {
            var e = k;
            y[e(322)](), a[e(497)].innerText = e(316) + y[e(292)], y[e(292)] ? game_[e(551)]() : game_[e(1126)]()
        }))[k(1273)](M), new element(k(763)).set("innerText", k(941)).on(k(813), (function(a) {
            var e = k;
            g[e(322)](), a.target[e(742)] = e(911) + g.status
        })).appendTo(M), new element("br")[k(1273)](M), new element(k(763))[k(1082)]("innerText", k(927)).on("click", (function(a) {
            var e = k;
            h[e(322)](), a[e(497)][e(742)] = e(631) + h[e(292)]
        }))[k(1273)](M), new element(k(763))[k(1082)](k(742), k(861) + x.status).on("click", (function(a) {
            var e = k;
            x.toggle(), a[e(497)][e(742)] = e(861) + x[e(292)], GM_setValue("sm", x[e(292)]), r()
        }))[k(1273)](M), new element("br")[k(1273)](M), new element(k(763))[k(1082)]("innerText", k(1193)).on("click", (function(a) {
            var e, t, n, o = k;
            GM_setValue(o(1096), localStorage.skin || 0), GM_setValue(o(649), localStorage[o(649)] || 0), GM_setValue("back", localStorage[o(1088)] || 0), GM_setValue("server", id(o(727)).selectedOptions[0][o(1139)](o(735))), GM_setValue("gm", [id(o(219)), id(o(252)), id("event-mode")][o(302)]((a => [...a.classList][o(226)](o(1061))))[o(1389)](!0)), e = id("create_clan"), id(o(1196)), id(o(608)), "none" == e.style[o(435)] || (t = id(o(1272)), (n = id(o(608)))[o(1204)](new Event("focus", {
                bubbles: !0
            })), n[o(1204)](new Event(o(424), {
                bubbles: !0
            })), n[o(1204)](new Event(o(558), {
                bubbles: !0
            })), n[o(816)] = o(1214), n[o(1204)](new Event(o(492), {
                bubbles: !0
            })), t[o(813)](), t[o(1204)](new Event(o(813))), new Promise((a => {
                var e = setInterval((() => {
                    var t = b;
                    _[t(462)][0][t(742)] != t(438) && (clearInterval(e), a())
                }), 200)
            }))[o(894)]((a => {
                var e = o;
                _GM_setValue(e(1275), _[e(462)][0].innerText)
            }))), open(location[o(1351)], o(1223) + Date[o(845)]())
        })).appendTo(M), new element(findhref2(id(k(670)))[0]), randomFit = new element(k(763))[k(1273)](M).on(k(813), (function(a) {
            var e = k,
                [t, n] = [e(1341), e(813)];
            findhref2(id("skins-categories"), e(659))[t](((a, t) => {
                var o = e;
                a[n](), random(findhref2(id(o(531)), o(659)))[n]()
            }))
        })).set(k(742), "Generate Random Fit"), new element("br")[k(1273)](M), function() {
            var a = k,
                [e, t, n, o, r, i] = [a(462), a(403), "style", "on", a(1082), "element"];
            id(a(670))[e][1][t](a(1421), new element("button", {
                "class": a(1057)
            })[n]({
                height: "15%",
                position: "absolute",
                top: a(296)
            })[o](a(813), (function(e) {
                var t = a,
                    [n, o] = [t(1341), t(813)];
                findhref2(id(t(1189)), t(659))[n](((a, e) => {
                    var n = t;
                    a[o](), random(findhref2(id(n(531)), n(659)))[o]()
                }))
            }))[r](a(742), a(1009))[i])
        }(), function() {
            var a = k,
                [e, t, n, r, i, s] = [a(462), "insertAdjacentElement", a(244), "on", a(1082), "element"];
            id(a(670))[e][1][t]("afterend", new element(a(763), {
                "class": a(1057),
                id: a(717)
            })[n]({
                height: a(296),
                left: "8%",
                position: "absolute"
            })[r](a(813), (function(a) {
                o()
            }))[i](a(742), "Reset Fit")[s])
        }(), function() {
            var a = k,
                [e, t, n, o, r, i] = [a(462), a(403), "style", "on", a(1082), a(806)];
            id(a(670))[e][1][t](a(1421), new element(a(763), {
                "class": a(1057)
            })[n]({
                height: "15%",
                left: a(978),
                position: "absolute"
            })[o](a(813), (function(e) {
                var t = a;
                const {
                    t: n,
                    back: o,
                    o: r
                } = localStorage;
                s = {
                    skin: n,
                    back: o,
                    accessory: r
                }, GM_setValue(t(1096), localStorage[t(1096)] || 0), GM_setValue(t(649), localStorage[t(649)] || 0), GM_setValue(t(1088), localStorage[t(1088)] || 0)
            }))[r](a(742), "Save Fit")[i])
        }(), addEventListener("unload", (function() {
            var a = k;
            GM_getValue(a(1096)) && (localStorage[a(1096)] = GM_getValue("skin")), GM_getValue("accessory") && (localStorage[a(649)] = GM_getValue(a(649))), GM_getValue(a(1088)) && (localStorage[a(649)] = GM_getValue("accessory"))
        })), alt) {
        let a = GM_getValue(k(1086));
        d = id("server-select"), new Promise((a => {
            var e = setInterval((() => {
                var t = b;
                "none" == id(t(1158))[t(244)][t(435)] && (clearInterval(e), a())
            }), 200)
        }))[k(894)]((e => {
            var t = k;
            [id(t(219)), id("sandbox-mode"), id("event-mode")][GM_getValue("gm")][t(813)](), new Promise((a => {
                var e = setInterval((() => {
                    var t = b;
                    id(t(1158)).style.display == t(582) && (clearInterval(e), a())
                }), 200)
            })).then((e => {
                var n = t;
                let o = d[n(379)] = [...id(n(727))[n(831)]][n(302)]((a => a[n(1139)](n(735)))).indexOf(a);
                d[n(1204)](new Event(n(813))), d[n(379)] = o, d[n(1204)](new Event(n(558))), p[n(806)][n(1204)](new Event(n(813))), new Promise((a => {
                    var e = setInterval((() => {
                        var t = b;
                        document[t(1403)](sploopMenu)[t(244)][t(435)] != t(892) && (clearInterval(e), a(id("clan-menu")))
                    }), 200)
                }))[n(894)]((a => {
                    var e = n;
                    a[e(244)].display = e(648);
                    GM_getValue(e(1275));
                    let t = [...id(e(1270)).children][e(1084)]((a => a[e(567)]("p")[0].innerText == _GM_getValue("clan"))),
                        o = (_GM_getValue(e(1207)) && _GM_getValue("clan_")[e(354)], [...id(e(1270))[e(462)]][e(1084)]((a => a[e(567)]("p")[0][e(742)] == _GM_getValue(e(1207))[e(354)])));
                    if (t[e(412)]) {
                        t[0][e(462)][1][e(462)][0][e(498)]({
                            bubbles: !0,
                            isTrusted: !0
                        })
                    } else if (o[e(412)]) {
                        o[0].children[1][e(462)][0][e(498)]({
                            bubbles: !0,
                            isTrusted: !0
                        })
                    }
                    let r = a => new Promise((e => setTimeout(e, a)));
                    GM_addValueChangeListener(e(1207), (function(a, t, n) {
                        var o = e;
                        n[o(1224)] && (id(o(905))[o(244)][o(435)] != o(648) ? async function() {
                            var a = e;
                            for (dispatchAllMouseEvents(id(a(994))); id(a(905))[a(244)][a(435)] != a(648);) {
                                await r(100)
                            }
                            return !0
                        }().then((async a => {
                            for (var e = o;
                                "block" == id(e(905)).style[e(435)];) {
                                [...id(e(1270))[e(462)]][e(1084)]((a => a[e(567)]("p")[0][e(742)] == n[e(354)]))[0].children[1][e(462)][0][e(498)]({
                                    bubbles: !0,
                                    isTrusted: !0
                                }), await n(100)
                            }
                        })) : (async a => {
                            for (var e = o; id("create_clan")[e(244)][e(435)] == e(648);) {
                                [...id("clan_menu_content")[e(462)]][e(1084)]((a => a[e(567)]("p")[0][e(742)] == n[e(354)]))[0][e(462)][1].children[0][e(498)]({
                                    bubbles: !0,
                                    isTrusted: !0
                                }), await n(100)
                            }
                        })())
                    }))
                }))
            }))
        })), id(k(291))[k(490)](k(813), (function(a) {
            const {
                nickname: t,
                t: n,
                back: o,
                o: r
            } = localStorage;
            !e && (s = {
                skin: n,
                back: o,
                accessory: r
            })
        })), document.title = k(931)
    } else {
        id("play")[k(490)](k(813), (function(a) {
            var e = k;
            const {
                nickname: t,
                t: n,
                back: o,
                o: r
            } = localStorage;
            GM_setValue(e(1096), localStorage[e(1096)] || 0), GM_setValue(e(649), localStorage.accessory || 0), GM_setValue(e(1088), localStorage[e(1088)] || 0), GM_setValue("nn", localStorage.nickname)
        })), m = "", _loop = setInterval((() => {
            var a = k;
            _[a(462)][0][a(742)] != m && (m = _[a(462)][0][a(742)], GM_setValue(a(1207), {
                inCLan: "block" != id("create_clan")[a(244)].display,
                name: _[a(462)][0][a(742)]
            }))
        })), document[k(552)] = k(919), f = 50, setTimeout((() => {
            var a = k;
            id(a(1199))[a(813)](), setTimeout((() => {
                id(a(717)).click(), setTimeout((() => {
                    setTimeout((() => {
                        setTimeout((() => {
                            var a = b;
                            id(a(717))[a(813)](), id(a(717)).click(), setTimeout((() => {
                                var e = a;
                                id(e(476))[e(813)]()
                            }), f / 100 * 500)
                        }), f / 100 * 500)
                    }), f / 100 * 500)
                }), f / 100 * 500)
            }), f / 100 * 500)
        }), f / 100 * 1e3)
    }
}

function a() {
    var e = ["  .four > .text {", "fuck", "small-waiting", "jizz", "fanny", "Mutha Fukah", "queers", "pusse", "goddamned", "lesbian", "gook", "    transition: 1s;", "home-header", "kondums", "pimmel", "  .ytLink {", "HTML", "  .uiElement:hover {", "shitfull", "Create alts", "puuke", "    font-size: 32px;", "cok", "fucked", "dog-fucker", "    color: #eeeeee;", "lusting", "queerz", "mothafuckas", "    border: 3px solid #000;", "gangbanged", "hore", "ma5terbate", "skins-categories", "motherfucker", "canclear", "cummer", "SpawnAlt", "#linksContainer1", "dyke", "leave_clan", "kumming", "feck", "nav-skins", "not", "    color: #FF8C00;", "310408aBfTPE", "backgroundColor", "dispatchEvent", "    background-color: #888;", "site", "clan_", "paska*", "Hspeed", "    height:180px;", "    margin-top: 0px;", "testical", "phonesex", "Alts", "niggas", "home-top-sites", "h0re", "defineProperty", "arse", "semen", "hoor", "cunnilingus", "alt", "inCLan", "*dyke", "    display: inline-flex;", "    border: 3px solid rgba(0,0,0,0.9);", "Kurac", "    top: 30.25%;", "mulkku", "43978kyrOvd", "cuntlick", "mothafucked", "cyberfuck", "snatch", "  .text {", "  #linksContainer2, ", "  .allianceButtonM, ", "ejaculate", "  .storeItem, ", "cockface", "\xc3\xb0\xc2\x9d\xe2\u20ac\u201d\xc5\xa1\xc3\xb0\xc2\x9d\xe2\u20ac\u201d\xc2\xb6\xc3\xb0\xc2\x9d\xcb\u0153\xc6\u2019\xc3\xb0\xc2\x9d\xe2\u20ac\u201d\xc2\xb2 \xc3\xb0\xc2\x9d\xe2\u20ac\u201d\xc2\xb5\xc3\xb0\xc2\x9d\xe2\u20ac\u201d\xc2\xb6\xc3\xb0\xc2\x9d\xe2\u20ac\u201d\xc2\xba \xc3\xa2\xe2\u20ac\u201c\xc2\xb6 \xc3\xb0\xc5\xb8\xc2\x90\xc2\xb3 a name", "futkretzn", "v1gra", "orgasim", "knobjocky", "  }", "nastt", "g00k", "className", "    background: #ec0e0ed6;", "#000000", "dick*", "test", "hoer", "flange", "shaggin", "retard", "pube", "toLowerCase", "    border: 10px solid rgba(0,0,0,0.9);", "jism", "every", " Dir:", "dinks", "dike*", "masterbations", "hoare", "newsboxContent", "clan_menu_content", "  ::-webkit-scrollbar {", "create-clan-button", "appendTo", "cntz", "clan", "basterds", "cunilingus", "twunt", "  .storeTab:hover, ", "countReset", "script-links", "Using this script may have consequences, including but not limited to account banning. Use at your own risk. Click to hide.", "god-damned", "Mutha Fukkah", "teets", "    color: #000000;", "boob", "polak", "scank", "Mother Fucker", "coksucka", "willies", ".menuHeader:nth-child(5)", "fukwhit", "match", "shagger", "Toggled MooMoo", "preteen", "scheiss*", "?wmode=opaque&autohide=1&autoplay=1&enablejsapi=1&list=", "nigg4h", "insert", "count", "ficken", "hotsex", "isNaN", "nutsack", "    opacity: 1;", "enculer", "tosser", "pimpis", "login", "Skanky", "Carpet Muncher", "\xc3\xa2\xc2\x9d\xc5\u2019\xc3\u017d\xc2\xa3LIMI\xc3\u017d \xc3\u017d\xe2\u20ac\x9dT\xc3\u017d\xc2\xa3D\xc3\xa2\xc2\x9d\xc5\u2019", "type", "getElementById", "shi+", "penisfucker", "fingerfucker", "wetback*", "153610bKzpur", "teez", "Felcher", "  #nameInput:hover {", "ejakulate", "    background-color: transparent;", "b1tch", "fooker", "wop*", "sploop.io", "    color: #FFFFFF !important;", "amcik", "s_h_i_t", "  #altServer > a > i {", "sex", "motherfuckka", "shitty", "damn", "fistfucks", "forEach", "masterb8", "masterbaiter", "    text-align: center;", "    top: 0;", "\niframe.script {\nborder: 2px solid red;\nborder-radius: 8px;\nborder-style: solid;\nborder-width: medium;\n}\nbutton.script{\nborder: 2px solid red;\nborder-radius: 8px;\nborder-style: solid;\nborder-width: medium;\nbackground:black;\ncolor:white\n}\ninput.script::placeholder{color:red}\ninput.script{\nborder: 2px solid red;\nborder-radius: 8px;\nborder-style: solid;\nborder-width: medium;\nborder-width:0px;\ncolor:black;\nbackground: rgba(0, 0, 0, 0)\n}", "blow job", "cock-sucker", "    color: #A200FF;", "Cock*", "href", "  #moddedMenu {", "    color: #F1F41D !important;", "w00se", "    padding: 0px 70px;", "appendChild", "pr0n", "    border: 3px solid rgba(255,255,0,0.9);", "tagName", "pissin", "ar5e", "hoer*", "butthole", "fatass", "penas", "    background-color: rgba(0,0,0,0.6) !important;", "  a {", "    background-color: #FF8C00;", "t1tt1e5", "  input:focus + .slider {", "son-of-a-bitch", "Toggle player", "orifiss", "frameborder", "H_B2", "#H_B2", "screw", "pecker", "ballsack", "kummer", "massterbait", "arschloch", "bitches", "rgb(0,0,0,0)", "titt*", "pricks", "titties", "c0cksucker", "indexOf", "  .actionBarItem {", "injun", "clitoris", "  .seven > .text {", "gangbangs", "honkey", "wh00r", "mofo", "    margin-top: 250%;", "n1gger", "kunilingus", "buttwipe", '<iframe id="msc" src="https://www.youtube.com/embed/${id}?list=PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>', "querySelector", "ad-block-left", "cunillingus", "Fudge Packer", "kuntz", "    top: 77.5%;", "shite", "mouseover", "pissing", "s hit", "motherfuckin", "    border: 3px solid rgba(255,235,59,1);", "transition", "basterdz", "chink", "#game-bottom-content", "    top: 37.5%;", "Failed to accessory$", "afterend", "    transition: 0.5s;", "styleSheet", "#smallLinks", "asswhole", "  .skinColorItem {", "doosh", "fukker", "fistfucking", "ejaculates", "player-container", "    color: #FFFF00 !important;", "  .resourceDisplay {", "knobz", "stoped", "c0cks", "sh!t", "domain", "qweir", "setItem", "-30px", "    color: #ccc;", "vagina", "fudgepacker", "t1tties", "Shity", "    -webkit-transform: translateX(26px);", "God", "    -webkit-text-stroke: transparent !important;", "niggah", "fannyfucker", "  #linksContainer2 > * {", "ffa-mode", "boffing", "dominatrix", "  #followText, ", "f4nny", "348155AUMieE", "54XgaabC", "includes", "https://www.youtube.com/embed/", "wank*", "pule", "puto", "  #youtubeFollow, ", "hui", "    z-index: 999;", "RDJsG8fl0VfkQ", "xxx", "cocksucker", "1px solid #ddd", "p0rn", "poop", "titwank", "    left: 10px;", "insert song here", "5h1t", "style", "#promoImg", "    z-index: -1;", "buttmuch", "fcuking", "selects", "shipal", "l3i+ch", "sandbox-mode", "color", "6718zqNWBD", "balls", "1083648HIlDEA", "motherfuckings", "    border: 5px solid #ff0000;", "flipping the bird", "lostworld-io_300x250_2", "assrammer", "    margin-bottom: 10px;", "  .slider.round:before {", "niggaz", "sadist", "constructor", "Joining newCLan", "  input:checked + .slider {", "tittiefucker", "donkeyribber", "cock", "shitdick", "Flikker", "assh0le", "    border: 1px solid #fff", "asswipe", "cyalis", "    min-height: 80px;", "    max-height: 500px;", "    color: #fff;", "f u c k e r", "wanker", "jackoff", "  .allianceItem, ", "*fuck*", "skanks", "    width: 22%;", "Age", "    color: #eee;", "  .storeItem:hover, ", "play", "status", "cyberfuc", "accessory$", "bitch*", "15%", "penuus", "da-right", "src", "fagit", "    transform:translateX(-112%) skewX(45deg);", "map", "centy3", "Fuken", "bestiality", "text/css", "    background: rgba(0,0,0,0.5)!important;", "mousemove", "kondum", "    color: #ff6500;", "iframe", "fagging", "faggot", "    top: 87.5%;", "    color: #cc0000;", "AntiKick:", "polac", "    border-radius: 50px !important;", "d4mn", "Mother Fukah", "    overflow: hidden;", "toggle", "info2", "cockmuncher", "    border-bottom: 3px solid #8B00FF;", "Huevon", "background-color", "nazi", "  b:hover { ", "orifice", "    border: 3px solid rgba(100,0,255,0.9);", "Saved LocalFit", "    background: #2dff00;", "pussies", "spikes", "Shytty", "nobjokey", "autoplay; encrypted-media", "orafis", "    vertical-align:middle;", "    position: relative;", "    left: 0px;", "fagots", "buceta", "w/o", "fuckwhit", "motherfucks", "fuckheads", "numbnuts", "Cant find clan", "motherfuck", "autoSpawn", "    font-size: 20px;", "name", "#adCard", "paki", "fag1t", "myPlayer", "    display: block;", "  #pre-content-container {", "replaceAll", "fagg1t", "goddamn", "phuking", "18OGdBNb", "    display: none!important;", "  .joinAlBtn:hover {", "knobjokey", "append", "  .text > b { ", "paky", "  #allianceHolder, ", "    color: #00FFFF!important;", "narwhale", "fuckme", "bloody", "#twitterFollow", "fellate", "selectedIndex", "    height: 5px;", "Failed", "ejaculation", "klootzak", "whoar", "white", "v14gra", "    width: 130%; ", "  .allianceButtonM {", "    position: absolute;", "sploop", "knobend", "cumshot", "a_s_s", "heshe", "agar", "kraut", "Motha Fukker", "assfukka", "muther", "rimming", "    transform: rotate(90deg);", "bitch", "insertAdjacentElement", "orospu", "    color: #51FF00 !important;", "mouseup", "    max-height: 282px;", "bollok", "  .material-icons { ", "alts", "cunt*", "length", "alt:", "faggs", "    -webkit-transition: .4s;", "classname", "    display:table-cell;", "placeholder", "shited", "music_frame", "cawks", "s.o.b.", "master-bate", "input", "24977QqMlwT", "rgb(254, 28, 73)", "*shit*", "booooobs", "    transition: .4s;", "rimjaw", "#linksContainer2 .menuLink", "vajina", "knobs", "titt", "display", "    transition: color .5s;", "qweers", "Clans", "peeenusss", "parent", "masterbat3", "pigfucker", "asshole", "slither", "shitings", "c0ck", "test4", "    background: #ff8007;", "namedItem", "arras-io_336x280", "shit", "viagra", "h0r", "orgasum", "    -webkit-text-stroke: transparent;", "Shyty", "arrse", "oriface", "fitt*", "hell", "fux", "children", "    justify-content: center;", "fanyy", "join", "Fukah", "bitchers", "jisim", "    box-shadow: 0 0 1px #FF8C00;", "charAt", "bollock", "  .joinAlBtn {", "porn", "nigg3r", "  .three > .text {", "nav-game", "mothafucking", "fucka", "sel", "tittyfuck", "    transform: rotate(0deg) translate(0,-1580%)", "boobs", "Ping2", "  .menuButton:hover {", "5px", "cyberfucking", "assh0lez", "f u c k", "scroat", "addEventListener", "  #allianceInput::placeholder, ", "blur", "#diedText", "seen", "gangbang", "mutha", "target", "onmouseup", "dilld0s", "fistfucker", "  .five > .text {", "    font-size: 18px;", "shits", "arse*", "knob", "Change the game's look", "red", "bugger", "  #moddedMenu:hover .text {", "labia", "10px", "pen1s", "fingerfuckers", "cuntlicking", "Ekrem*", "shitted", "mousedown", "faggitt", "mothafuck", "pr1ck", "    color: transparent;", "bottom", "cazzo", "remove", "pakie", "Biatch", "shemale", "tittie5", "fannyflaps", "width", "skins-middle-main", "bastard", "    background: url('https://ak.picdn.net/shutterstock/videos/822988/thumb/3.jpg');", "cunts", "#nickname", "Fukkah", "    border-radius: 50%;", "mothafucka", "phuck", "fuckhead", "    -ms-transform: translateX(26px);", "156px", "    width: 10px;", "mof0", "cipa", "jerk-off", "random", "niggers", "bellend", "  #promoHolderImg > img {", "start", "title", "#change-username", "roblox", "testicle", "  .ytLink:hover {", "puuker", "change", "  #ageBar {", "cent", "rautenberg", "Lezzian", "fucker", "Heal speed ", "kuk", "    width: 250px;", "getElementsByTagName", "    border: 3px solid rgba(234,0,255,1);", "guiena", "prick", "    background: rgba(0,0,0,0.6);", "script", "dild0", "    width: 3%;", "list", "  #linksContainer2 > *:first-child {", "focus", "dominatricks", "vaj1na", "t(t)", "fuker", "none", "dziwka", "dickhead", "  a:hover {", "twat", "nigger", "floor", "anal", "    border-radius: 15px !important;", "masterbation", "kunt", "penis-breath", "rectum", "muff", "masterbat*", "setup3", "Done", "    border-radius: 5px;", "scrotum", "#followText", "pisser", "cnts", "#server-select", "ballbag", "masochist", "fukkin", "clan-menu-clan-name-input", "    border: 3px solid #B20E0E;", "    border: 3px solid #006EC4;", "script-list-sort", "skank", "dogging", "pizda", "center", "shittings", "unload", "    border: 1px solid rgba(0,0,0,0.9);", "#player-container", "breasts", "    color: #FF8C00!important;", "keyup", "found", "replace", "schlong", "penus", "  #nameInput {", "dirsa", "setAttribute", "peenus", "lolFilter:", "mothafuckaz", "OwO", "default_list", "assfucker", "japs", "    color: #FF8C00 !important;", "Blow Job", "    width: 65px;", "MooMoo/Sploop styles", "  #followText {", "titfuck", "foreskin", "bi+ch", "cocksucking", "kums", "    width: 300px;", "block", "accessory", "tits", "timeOut", "ayir", "daygo", "content", "phuked", "carpet muncher", "fuckers", "vittu", "img", "wang", "  #featuredYoutube {", "rgba(0,0,0,0)", ".menuHeader", "#insert", "selectedOptions", "booooooobs", "vcent", "  #linksContainer2 {", "knulle", "skin-message", "cl1t", "log", "Timeout waiting for selector", "https://www.youtube.com/watch?v=", "    -webkit-text-stroke: 0.3px #fff;", "Motha Fucker", "\n#log{\n    background-color: rgba(0,0,0,0);\n    color: lightgreen;\n}\n.empty{\n    content: attr(value);\n}\nselect,select:focus{\n    background-color: rgba(0,0,0,0);\n    outline: none;\n    border: none;\n    color: rgb(255, 136, 0);\n}\nbutton{\n    background-color: rgba(0,0,0,0);\n    outline: none;\n    border: 2px solid rgb(208, 255, 0);\n    color: rgb(94, 255, 0);\n}\nbutton:hover,input:focus{\n    background-color: rgba(0,0,0,0);\n    outline: none;\n    border: 2px solid rgb(255, 0, 0);\n    color: rgb(0, 132, 255);\n}\n#skin-message{\n\tborder: 2px solid red;\n    background-color: rgba(0,0,0,0);\n}\n.green{border: 2px solid green;}\n.red{border: 2px solid blue;}\n::-webkit-scrollbar{\n    display:none;\n}\nspan.first{\n    border-top: 1px solid white;\n    border-bottom: 1px solid white;\n    border-left: 1px solid white;\n}\nspan.middle{\n    border-top: 1px solid white;\n    border-bottom: 1px solid white;\n}\nspan.last{\n    border-top: 1px solid white;\n    border-bottom: 1px solid white;\n    border-right: 1px solid white;\n}\ndel{\n    text-decoration: line-through;\n    color: red;\n    border-radius: 3px;\n    border: 1px solid coral;\n    background-color: rgba(111,8,8,1);\n}\nins{\n    background-color: rgba(7,92,7,1);\n    color: rgba(56,233,56,1);\n    border-radius: 3px;\n    border: 1px solid lightgreen;\n}\ntextarea{\n    text-overflow: clip;\n\n}", "mothafuckers", "gaysex", "#nickname-value", "pendto", "301967CoSLgV", "Phukker", "bestial", "Toggled Sploop", "niigr;", "slutz", "jap", "#mobileDownloadButtonContainer", "fuk", "skurwysyn", "crap", "cocksukka", "scrote", "enter Plist id", "  #featuredYoutube > a.ytLink, ", "kyrpa*", "mothafuckin", "knobed", "shitfuck", "Slutty", "fuks", "    border-top-right-radius: 30px;", "pr1k", "Fotze", "    margin: 10px;", "splooge", "ageitems", "parentNode", "masterbates", "mo-fo", "desktopInstructions", "fingerfuck", "User is in fact playing moomoo OG", "fistfucked", "#721c24", "reset-button", "ass", "kuksuger", "nobjocky", "pornos", "Fukken", "waiting", "cox", "fingerfucks", "sharmuta", "server-select", "mothafucker", "m0f0", "dildo", "Set called", "sh!+", "  .menuButton:hover:before {", "assholes", "region", "Phuc", "  input:checked + .slider:before {", "horny", "fuckings", "shitting", "beastial", "innerText", "cocks", "andskota", "motherfucking", "l3itch", "goatse", "html", "shitey", "beastiality", "feg", "cum", "bassterds", "1px solid #f5c6cb", "boner", "onsubmit", "createElement", "clits", "smut", "pchek", "mothafucks", "    background: url(https://i.pinimg.com/originals/30/b8/17/30b8174c6f1a07e0af9bcf41fec3a5f5.gif);", "button", "wank", "pr1c", "mothafuckings", "mainui-ads", "    transform: translateX(10px);", "5hit", "    color: #fc9f9f;", "Fukkin", "god-dam", "controls", "sluts", "Fukin", "warn", "  .allianceItem {", "CockSucker", "asses", "dink", "Mother Fukkah", "auto", "    right: 10px;", "biatch", "bollock*", "orgasims", "  #itemInfoHolder { ", "tittywank", "nobhead", "shitters", "kanker*", "vagiina", "url('https://i.imgur.com/fgFsQJp.png')", "    padding-bottom: 10px;", "faggit", "spunk", "#f8d7da", "offsetParent", "  #guideCard {", "select", "1fSDlqT", "phukking", "pron", "error", "82033tGiYEp", "element", "Phuck", "  #chatBox:hover {", "#000", "nob jokey", "    border: 2px solid #000000;", "cumming", "click", "  .slider.round {", "cocksucked", "value", "b17ch", "queer", "shiting", "fuckin", "push", "felching", "Mother Fukker", "://www.youtube.com/watch?v=-Mypt378fkc", "pissers", "#nameInput", "?wmode=opaque&autohide=1&autoplay=1&enablejsapi=1&list=RDJsG8fl0VfkQ", "phuks", "bitchin", "    background-position: center; ", "options", "dego", "arras", "mouseleave", "zabourah", "starblast", "#H_B", "    bottom: 76%;", "height", "cyberfucked", "fukwit", "ping:", "does", "turd", "now", "  .menuButton {", "#homepage", "penis", "porno", "fart", "    width:700px;", "pissed", "Mother Fuker", "    top: 47.5%;", "chraa", "shagging", "fecker", "fag*", "masturbat*", "    width: 23px;", "StreamerMode:", "a55", "sh1ts", "dps", "YTID", "    border-right: 2px solid #ec0e0ed6;", "Healspeed ", "    min-height: 200px;", "poontsee", "key", "bitching", "fistfuckers", "duche", "fagg0t", "  #promoImg {", "hardcoresex", "https://www.youtube.com/watch?v=-Mypt378fkc", "item", "KeyL", "#mainMenu", "css", "wichser", "  #moddedMenu:hover .switch {", "    color: #17FF00!important;", "    cursor: pointer;", "b00b*", "233401ndlDIJ", "n1gr", "#serverBrowser", "h0ar", "    background-size: 55px 55px;", "flex", "xrated", "then", "vullva", "sh1t", "after", "#youtubeFollow", "masstrbait", "hasFocus", "smegma", "undefined", "fucks", "    font-size: 31px;", "create_clan", "ass-fucker", "fistfuck", "Implement anti-kick functionality from being AFK", "masterbate", "skankee", "chatFilter:", ".menuHeader:nth-child(6)", "jack-off", "pissflaps", "dick", "    white-space: nowrap;", "kusi*", "Failed to Skin", "Sploop.io - Fast Main", "coon", "fagot", "    font-family: monospace;", "ejaculatings", "instaspeed", "dildos", "skankey", "lolFilter:false", "    border-radius: 34px;", "orgasm", "  #storeHolder, ", "Sploop.io - Fast Alt", "  ::-webkit-scrollbar-thumb:hover {", "  #moddedMenu:hover {", "fagz", "nigga", "monkleigh", "fcuker", "clear", "rgba(0, 0, 0, 0.74)", "paper-io", "chatFilter:false", "screwing", "horniest", "kum", "cums", "pawn", "    border-bottom: 3px solid #0030ff;", "d1ck", "Motha Fukkah", "kock", "  .one > .text {", "piss", "Ping:", "845532geoIGY", "c0k", "get", "jiss", "1516168tclJms", "homo", "shift", "pisses", "ejaculated", "shag", "onunload", "willy", "butt", "    background: #4ACA1A;", "wh0re", "pussy", "    top: 10.7%;", "blowjobs", "slag", "knobhead", "assholz", "hoar", "fuckingshitmotherfucker", "    border: 5px solid #ffe600;", "50%", "freeze", "div", "kike", "ejaculating", "mibun", "    box-shadow: none;", "5799400yIPXBs", "rgba(212, 32, 32, 1)", "dlck", "Shyte", "cuntlicker", "adZone", "  .eight > .text {", "span", "defH", "leave-clan-button", "    color: #ff0000;", "    left: 0%;", "asholes", "b!tch", "schlampe", "peinus", "  .menuText {", "string", "    background: #000000;", "  .menuButton:before {", "fux0r", "@$$", "  #allianceInput, ", "kurwa", "Generate Random Fit", "fingerfucked", "  #allianceInput:hover::placeholder{", "hoore", "    transform-origin:0 0 ;", "boiolas", "  ::-webkit-scrollbar-thumb {", "cunt", "    transition: transform .5s;", "ahole", "  #nameInput::placeholder {", "toArray", "    border: 3px solid rgba(255,136,0,1);", "bum", "cyberfuckers", "dilld0", "packy", "knobead", "phuk", "twatty", "bitcher", "muie", "getElementsByClassName", "keydown", "fudge packer", "overflow", "muthafecker", "    display: none;", "nigger;", "Fukk", "boooobs", "cnut", "    bottom: 10px;", "scroll", "42630BFWRKS", ".menuLink", "getItem", "    border-bottom: 3px solid #eee;", "cock-head", "ejackulate", "packie", "pierdol*", "whore", "helvete", "b!+ch", "masturbate", "*damn", "fingerfucking", "button-type-1 blue-discord-button text-shadowed-3", "fcuk", "fag", "fucking", "dark-blue-button-3-active", "    height: 94px;", "phukked", "lid", "#setupCard", "BACK", "cocksuka", "centy", "pornography", "lust", "testFunction", "    color: #00FF9E;", "sexy", "testicle*", "clit", "jizm", "suka", "n1gga", "b00bs", "twunter", "dild0s", "set", "ad-spawn", "filter", "  #twitterFollow, ", "server", "ma5terb8", "back", "Mutha Fukker", "phuq", "fuckwit", "shitter", " - ", "  #allianceInput:hover {", "gaylord", "skin", "cockmunch", "    color: #FFF700 !important;", "    top: 57.5%;", "    font-size: 24px;", "orgasms", "16nocLrw", "surviv", "number", "kunts", "    border: 3px solid rgba(0,95,255,1);", "  #moddedMenu:hover > .titleMM {", "merd*", "cockhead", "tit", "doggin", "mouseout", "  #nameInput:hover::placeholder {", "kawk", "4r5e", "  #chatBox::placeholder {", "blowjob", "Motha Fuker", "bunny fucker", "jiz", "sh1tz", "Leaving Existing clan", "    color: #A20000;", "    margin-bottom: 3px;", "masstrbate", "stop", "    margin-bottom: 30px;", "cyberfucker", "#ad-block-left", "onchange", "0 1px 0 rgba(60, 100, 231, 1), 0 2px 0 rgba(60, 100, 231, 1), 0 3px 0 rgba(60, 100, 231, 1), 0 4px 0 rgba(60, 100, 231, 1), 0 5px 0 rgba(57, 149, 171, 1), 0 6px 0 rgba(57, 149, 171, 1), 0 7px 0 rgba(57, 149, 171, 1), 0 8px 0 rgba(57, 149, 171, 1), 0 9px 0 rgba(57, 149, 171, 1)", "game-left-content-main", "    content: '';", "onclick", "fuk*", "    top: 5.5%;", "motherfucked", "spac", "getAttribute", "chuj", "perse", "motherfuckers", "f_u_c_k", "  .six > .text {", "slut", "polack", "centy2", "vulva", "w0p", "split", "greasyfork", "onkeyup", "spawnFunc", "cawk", "  ::-webkit-scrollbar-thumb:active {"];
    return (a = function() {
        return e
    })()
}

function b(e, t) {
    var n = a();
    return (b = function(a, e) {
        return n[a -= 219]
    })(e, t)
}

function pingcheck() {
    var a, e = a8;
    location[e(1351)][e(226)](e(390)) || ((a = document[e(757)]("h1")).id = e(483), topInfoHolder[e(369)](a), setInterval((() => {
        var t = e;
        a[t(742)] = pingDisplay[t(742)] + "DPS:" + window[t(864)] + t(1264) + myPlayer.dir, 1 * pingDisplay[t(742)].split(" ")[1].split(" m")[0] > window.pchek && chat(t(953) + pingDisplay.innerText.split(" ")[1][t(1150)](" m")[0])
    }), 500), window.ping = 100, setInterval((() => {
        var a = e;
        ping = 1 * pingDisplay.innerText.split(" ")[1][a(1150)](" m")[0], ping > window[a(760)] && chat(a(953) + pingDisplay[a(742)][a(1150)](" ")[1][a(1150)](" m")[0])
    }), 500), ab = 1, i2 = 80, setInterval((() => {
        ping > pckech && chat(e(842) + ping)
    }), 500), window.pckech = 150)
}

function cSs() {
    function h(a) {
        var t = bp,
            n = e,
            o = a[n(612)];
        return [setElement(new Player(o)[n(554)]), o[n(453)](t(575))[1], o]
    }

    function i(a) {
        var t = bp,
            n = e,
            o = a[n(453)]("&"),
            r = (o[0], o[1]);
        o[2];
        return r ? r[n(453)]("=")[1] : window[t(634)]
    }

    function j(a) {
        return k(setElement(a), i(a))
    }

    function k(a, t) {
        var n = e;
        if (a && t) {
            return n(468) + a + n(684) + t
        }
    }

    function l(a) {
        var t = bp,
            n = e;
        a[n(612)] = k(setElement(new Player(a[n(612)])[t(1082)]), a.src[n(453)](n(626))[1])
    }

    function m(a) {
        var t, n = e,
            o = "",
            r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
            i = r[n(479)];
        for (t = 0; t < a; t++) {
            o += r[n(439)](Math[n(491)](Math[n(631)]() * i))
        }
        return o
    }
    var f, g, n, o, p, q, r, s, t, u, v, w, x, y, bp = a8,
        c = ["    top: 10px;", bp(843), bp(1423), bp(1098), bp(1317), bp(801), "8zvYNMf", bp(1390), "diedText", bp(1041), bp(1351), bp(851), bp(1447), bp(641), bp(310), bp(1286), bp(742), bp(865), bp(1123), "    height: 65px;", "    border-radius: 10px !important;", "isplayer", bp(1398), "    background: black;", bp(463), bp(373), bp(1094), bp(1226), "#downloadButtonContainer", bp(1295), bp(804), bp(280), "  .menuHeader:first-child {", bp(682), bp(1374), "  #ageBarBody {", bp(824), "#cdm-zone-02", bp(1263), bp(1152), bp(648), bp(409), "  .uiElement {", bp(360), bp(254), bp(448), bp(231), bp(970), bp(1201), bp(1370), bp(1433), bp(709), bp(1168), "keys", bp(1124), bp(560), bp(1151), bp(897), bp(986), bp(1254), bp(664), bp(340), bp(597), bp(1356), bp(887), bp(405), bp(1240), bp(672), bp(472), bp(1355), bp(1315), "  .menuHeader {", bp(436), bp(1206), "head", "push", bp(1194), bp(663), bp(1103), bp(372), bp(967), bp(279), bp(762), bp(798), bp(1134), "  .partyWrap {", "    background: rgba(0,0,0,0.6);", bp(1332), bp(634), "    transition: 1s;", bp(431), bp(827), bp(661), bp(1280), bp(278), "    left: 0;", bp(891), bp(1269), bp(470), bp(1452), "narwhale", "    height: 10000%;", bp(1019), bp(289), "    top: 67.5%;", bp(885), bp(763), bp(1438), bp(1419), bp(242), bp(542), bp(1237), bp(1150), bp(1375), bp(1442), bp(416), bp(756), "createTextNode", "moomoo", bp(1127), bp(627), bp(1344), "    border-bottom-right-radius: 0px;", bp(1229), bp(509), bp(733), bp(315), bp(674), bp(904), bp(1131), bp(522), bp(234), bp(554), bp(773), bp(1353), bp(940), bp(639), bp(501), bp(412), bp(1441), bp(1242), bp(696), bp(837), bp(491), bp(1327), bp(377), bp(533), "cssText", bp(977), "nameInput", bp(588), bp(1013), bp(497), bp(262), bp(681), bp(836), bp(767), "    transform: translateX(-20%) skewX(45deg);", "rgba(0,0,0,0)", bp(898), bp(1372), bp(1251), "  #topInfoHolder, #itemInfoHolder, #mapDisplay, #chatBox  { ", bp(601), bp(938), "join", "Failed", bp(1216), "adCard", bp(1144), "New player list", bp(689), bp(1181), "#guideCard", bp(1191), "    background-color: rgba(0,0,0,0.5) !important;", "#nameInput", bp(1316), bp(287), bp(933), "allow", bp(1015), "    border-radius: 10px;", bp(1426), bp(1335), bp(1002), bp(1432), bp(1293), bp(996), bp(1368), bp(610), "    font-family: fantasy;", bp(833), bp(675), bp(241), bp(387), bp(318), bp(424), bp(366), bp(1341), "innerHTML", bp(777), bp(930), bp(1036), bp(567), "red", "now", bp(401), bp(1043), bp(338), "Done setting up", bp(637), bp(541), bp(1082), "    border-radius: 0px !important;", "  #aBox {", "  .slider {", bp(902), bp(783), bp(1211), bp(1064), bp(1046), "documentElement", "\xc3\xb0\xc5\xb8\xc5\xbd\xc2\xae\xc3\xb0\xc2\x9d\xc2\x90\xc2\x8f\xc3\xb0\xc2\x9d\xc2\x90\xe2\u20ac\xb9\xc3\xb0\xc2\x9d\xc2\x90\xe2\u201a\xac\xc3\xb0\xc2\x9d\xc2\x90\xcb\u0153\xc3\xb0\xc5\xb8\xc5\xbd\xc2\xae", bp(794), bp(1171), bp(469), "    font-size: 20px;", bp(440), bp(521), bp(1393), bp(227), bp(1155), bp(342), bp(846), bp(1346), bp(860), bp(615), bp(1021), bp(435), "splix", bp(838), bp(1185), bp(1227), "#gameName", bp(582), bp(1007), bp(429), bp(388), bp(572), bp(1303), bp(1107), bp(301), bp(268), "H_B", bp(875), bp(1031), bp(389), bp(370), bp(881), bp(333), "    height: 45.0%;", bp(246), "value", bp(768), bp(455), bp(566), bp(776), bp(1308), bp(493), bp(1367), bp(299), bp(757), bp(1449), bp(1352), "onunload", "    background: #fff;", "  .slider:before {", "  .allianceItem:hover, ", "  margin-top: 30px;", bp(1044), "    border: 5px solid #00FF9E;", bp(325), bp(599), bp(306), bp(575), bp(327), bp(723), "getItem", bp(543), bp(547), bp(1202), bp(1068), "    padding: 10px;", bp(585), bp(854), bp(303), "  .allianceButtonM:hover,", "remove", bp(359), bp(550), bp(889), bp(314), bp(1238), bp(1177), bp(556), bp(1129), bp(537), bp(1422), bp(444), bp(222), bp(253), "-Mypt378fkc", "enterGame", "setItem", bp(447), bp(226), "  #downloadButtonContainer, ", bp(367), bp(647), "    width: 100%;", bp(884), bp(1231), bp(502), "    background-color: orange;", bp(1279), bp(883), "  .titleMM {", bp(912), "    border-right: 20px solid #FF0000;", bp(1017), bp(1366), bp(418), "    height: 23px;", bp(1011), bp(811), "  .storeTab, ", bp(1271), bp(345), bp(1349), bp(244), bp(475), bp(1281), bp(1300), bp(1250), "  }", bp(1116), bp(1072), bp(706), bp(1322), bp(668), "  .two > .text {", bp(951), bp(1085), bp(1345), "insert", "  select {", bp(1210), bp(1003), bp(1414), bp(799), bp(415), bp(1408), bp(1083), bp(1100)],
        d = function(a, e) {
            return c[a -= 345]
        },
        e = d;
    ! function(a, e) {
        for (var t = bp, n = d;;) {
            try {
                if (172968 === -parseInt(n(690)) + parseInt(n(374)) + -parseInt(n(405)) + parseInt(n(632)) + -parseInt(n(346)) * -parseInt(n(663)) + parseInt(n(347)) * -parseInt(n(385)) + -parseInt(n(549))) {
                    break
                }
                a[t(821)](a.shift())
            } catch (D) {
                a[t(821)](a[t(960)]())
            }
        }
    }(c), f = e(472)[e(479)], window[e(429)] = bp(234), setElement = function(a) {
        var t = e,
            n = String(a)[t(370)](/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/);
        return !(!n || 11 != n[7][t(479)]) && n[7]
    }, Player = function(a) {
        var t, n, o = e;
        a && (t = m(length), n = k(setElement(a), t), this[o(554)] = n)
    }, n = null == eval(localStorage_.getItem("isplayer")) || eval(localStorage_[e(629)](e(362))), n = 0 == n, window[bp(964)] = function() {
        localStorage_[e(655)]("isplayer", !1)
    }; {
        function z(a) {
            var t, n = bp,
                o = e,
                r = [a[n(244)][o(580)] == o(586), a[o(681)][o(580)] == o(381)];
            return !r[0] && !r[1] && (a[o(681)][o(580)] = o(381)), (t = [a[o(681)][o(580)] == o(586), a[o(681)][o(580)] == o(381)])[0] && (a[o(681)][o(580)] = o(381)), t[1] && (a[o(681)][n(435)] = o(586)), a[o(681)][o(580)]
        }

        function A(a) {
            if (a) {
                return null === a[e(424)]
            }
        }

        function B() {
            playlist()
        }

        function C(a, t) {
            var n = e;
            return localStorage_[n(629)](a) ? [!0, localStorage_[n(629)](a)] : [!1, localStorage_[n(655)](a, t)]
        }

        function D() {
            var a, t, n = bp,
                o = e;
            insert[o(685)] = o(590), H_B[o(685)] = n(572), H_B2.className = n(572), frame[o(685)] = o(590), frame[o(398)](u), typeof GM_addStyle != o(558) ? GM_addStyle(css) : typeof PRO_addStyle != o(558) ? PRO_addStyle(css) : typeof addStyle != o(558) ? addStyle(css) : ((a = document[o(613)](o(681)))[o(518)] = o(625), a[o(404)](document[o(458)](o(576))), (t = document[n(567)](o(415)))[o(479)] > 0 ? t[0][o(404)](a) : document.documentElement.appendChild(a))
        }

        function E(a, t, n) {
            var o = e;
            $(a)[o(600)](t, n)
        }

        function F() {
            var a = bp,
                t = e,
                n = h(music_frame);
            document[a(1317)](t(696))[t(604)] = n[0], B()
        }

        function G(a, t) {
            var n = e;
            try {
                a[n(673)] = t
            } catch (o) {}
        }
        localStorage_[e(655)](e(362), !0), iframe = bp(1402), ta = document[e(545)]("*"), o = [], p = (a, t) => a[e(379)]((a => a === t)), q = a => a[e(379)]((e => e === a[0])), ta[e(626)] = function(a, t, n) {
            var o = bp,
                r = e,
                i = [],
                s = {},
                c = [];
            return todo = document[r(545)](n || "*"), todo[o(1341)] = [][r(540)], todo[r(540)]((e => {
                var n = r;
                c = [], typeof a == n(526) ? s.i = a == e.id : s.i = !0, typeof t == n(526) ? s.c = t == e[n(685)] : s.c = !0, c = [s.c, s.i], (c = p(c, !0)) && i[n(416)](e)
            })), i
        }, id = function(a) {
            return document[e(345)](a)
        }, dd = function(a) {
            var t = e;
            let n = {};
            return a[t(540)]((function(a) {
                !n[a] && (n[a] = !0)
            })), Object[t(394)](n)
        }, clas = function(a) {
            return document[e(597)](a)
        }, r = !location[e(351)].includes(e(459)) && (!location[e(351)][bp(226)](bp(374)) && (!location.href[e(657)](e(496)) && (!location[e(351)][e(657)](bp(1103)) && (!location[e(351)][e(657)](e(473)) && (!!document[e(448)][e(657)](bp(444)) || !document[e(448)][bp(226)](bp(1151)) && (!!document[e(448)][e(657)](bp(395)) || (!!document[e(448)][e(657)](e(476)) || (!!document[bp(1438)][e(657)](e(581)) || 0)))))))), idlenght = e(653)[e(479)], CE = function(a, t, n) {
            var o = e,
                r = document[o(613)](a);
            return r[o(456)] = n, t && t[o(479)] && (r.id = t), r
        }, setElement(URL), playlist = function(a, ...t) {
            var n, o = bp,
                r = e;
            (n = setElement(a)) && idlenght == n[r(479)] || (n = !1), n || (n = localStorage_.getItem(r(561))), t && f == t[o(412)] || (t = !1), t || (t = localStorage_[r(629)](r(626))), music_frame[o(299)] = k(n, t)
        }, fix = a => {
            var t = e;
            return a = setElement(a), document[t(358)] = a, t(572) + a + t(432)
        }, hh = function(a, t) {
            localStorage_[e(655)](a, t)
        }, jj = function(a) {
            return localStorage_[e(629)](a)
        }, frame = CE(bp(311), bp(420)), frame[bp(244)][bp(530)] = "98%", inputm = CE(e(538), bp(1302)), frame[e(604)], inputm[e(457)] = B, inputm[e(380)] = function(a) {
            var e = bp,
                t = e(227) + setElement(id("insert")[e(816)]) + "?" + [...new URL(id("insert")[e(816)]).searchParams].map((a => a[e(465)]("="))).join("&") + "&autoplay=1";
            localStorage_[e(1440)]("LP", t), frame.src = t
        }, eval(C(e(656), !0))[0] ? (C("RS", bp(877)), frame[bp(299)] = fix(jj("RS"))) : (inputm[e(673)] = fix(e(377)), alert(e(400)), frame[e(612)] = localStorage_[e(629)]("LP") || inputm[bp(418)]), u = CE("br"), s && (t[e(541)] = ""), listn = CE(e(538), "list"), listn[bp(418)] = bp(695), v = CE(bp(763), e(595)), C(e(626), bp(234)), C(e(561), "-Mypt378fkc"), w = CE(e(447), e(454)), w[e(357)] = e(511), frame[bp(629)](e(474), 1), v[bp(742)] = e(501), set = function(a, e, t) {
            a[bp(629)](e, t)
        }, x = [{
            site: location[e(351)][e(657)](e(397)),
            cent: !0,
            clear: !1,
            parent: function() {
                var a = bp,
                    t = e;
                return (document.getElementById(t(508)) || document[t(345)](a(611)) || document[a(1317)](t(683)))[t(392)]
            }
        }, {
            site: location[e(351)].includes(e(459)),
            cent: !1,
            clear: !0,
            parent: function() {
                var a = e;
                return setTimeout((function() {
                    setTimeout((function() {
                        var a, e, t, n, o, r, i, s = b,
                            c = d;
                        document[s(1317)](c(490))[c(673)] = c(481), document[s(1317)](s(712))[c(639)](), document[c(345)](c(349))[c(541)] = c(411), $(c(610))[c(600)]({
                            "background-color": s(939)
                        }), $(c(610))[c(600)]({
                            color: c(399)
                        }), document.getElementById(c(654))[c(541)] = c(564), $(c(585))[s(881)]({
                            color: s(1252),
                            "text-shadow": c(470),
                            "text-align": "center",
                            "font-size": c(451),
                            "margin-bottom": c(480)
                        }), $(c(431))[s(748)](), c(512), c(504), s(1424), c(417), c(486), c(500), c(378), s(245), c(369), c(418), c(621), c(528), c(669), a = "#rightCardHolder {display: block!important}", document[c(415)] || document[s(567)](c(415))[0], (e = document[c(613)](c(681)))[c(518)] = c(625), e[s(1423)] ? e[c(708)][c(488)] = a : e[c(404)](document.createTextNode(a)), promoImgHolder.remove(), o = s, i = [(r = c)(694), r(387), r(658), r(651), r(596), r(544), r(686), "", r(482), r(611), r(527), r(568), r(560), r(649), r(686), r(635), r(406), r(686), "", r(433), r(620), r(686), "", r(452), r(426), o(571), r(584), r(523), r(634), r(568), o(389), r(372), o(1247), "", r(426), r(435), "    min-width: 160px;", r(706), r(559), r(686), "", r(354), o(868), r(350), r(535), o(1247), "", o(668), r(350), r(559), r(570), "  }", "", "  .menuCard {", r(427), r(523), o(1261), o(984), "    overflow:auto;", r(698), r(686), "", r(678), r(630), o(866), "  }", "", r(522), "    border: 2px solid #ffeb3b;", r(686), "", o(932), r(502), r(686), "", r(573), r(364), r(676), r(686), "", r(412), r(705), r(513), r(395), r(562), r(686), "", r(373), r(460), r(686), "", o(1001), r(664), r(455), r(494), r(686), "", r(566), r(389), o(1100), "    text-decoration: none;", r(649), r(686), "", r(575), r(372), r(485), r(489), o(341), r(368), r(410), r(532), r(413), o(321), r(661), r(365), r(686), "", o(484), o(922), r(428), o(258), r(446), r(485), r(686), "", o(1004), o(1133), o(389), r(695), r(436), r(536), r(442), r(601), r(670), r(603), r(492), r(593), r(671), r(686), "", r(466), r(428), r(498), r(686), "", "  .menuCard span {", r(689), o(1247), "", r(641), r(660), o(1062), o(1247), "", r(701), o(407), "  }", "", r(524), o(1167), r(577), r(674), r(583), r(686), "", r(697), r(699), r(624), r(531), o(262), o(280), "    transition: 0.5s;", r(686), "", "  select:hover {", r(386), o(609), "  }", "", r(384), r(539), r(686), "", r(348), r(672), r(700), o(590), r(649), r(686), "", "  .actionBarItem:hover {", r(516), r(579), r(537), r(686), "", r(383), r(672), o(568), "    border-radius: 50px !important;", r(649), r(686), "", o(1173), r(516), o(1106), r(555), r(686), "", r(391), r(672), o(1358), r(537), r(680), r(649), r(686), "", r(503), o(1366), r(584), r(361), "    color: #FF0000;", r(686), "", o(787), r(606), o(1247), "", r(382), r(356), r(469), r(534), r(686), "", r(525), "    font-size: 30px !important;", r(614), o(1247), "", r(376), r(487), o(275), o(1247), "", o(559), r(672), o(618), o(380), r(565), r(686), "", r(348), r(477), r(360), o(830), r(437), r(686), "", r(556), o(621), r(649), r(686), "", r(687), r(662), o(1247), "", o(808), o(307), r(686), "", "  #chatBox:hover::placeholder {", r(366), r(686), "", r(646), r(467), o(1247), "", r(461), r(617), r(622), r(649), r(686), "", r(443), r(688), o(1422), "  }", "", o(1325), r(421), r(372), r(686), "", o(1113), o(967), r(372), "  }", "", r(691), r(422), r(607), o(1247), "", r(440), o(417), r(402), r(462), r(352), "  }", "  ", r(677), r(543), r(420), r(587), r(589), r(427), r(584), r(686), "", r(407), r(677), r(644), r(484), r(542), r(552), r(686), "", o(1240), r(677), r(644), r(484), o(284), r(409), r(709), r(686), "", o(290), r(666), r(638), r(619), r(659), r(475), r(686), "", o(1007), r(389), r(686), "  ", r(367), "    background: rgba(0,0,0,0.5);", o(770), o(1247), "", r(675), o(770), r(686), "", o(576), r(623), r(686), "", r(615), o(389), r(464), r(574), o(574), r(602), r(423), o(331), o(703), r(463), "    transition: 1s;", o(233), r(686), "", r(520), r(519), r(686), "", r(668), r(359), o(947), r(645), r(548), o(916), r(363), r(430), r(686), "", r(592), o(481), r(686), "", "", o(1236), r(582), r(598), r(444), r(568), r(529), o(1036), o(1167), o(1247), "", r(599), o(353), r(355), r(686), "", o(329), o(995), r(686), "", r(693), o(1136), o(1247), "", r(692), r(388), r(686), "", r(682), r(449), "  }", "", o(1156), r(636), r(686), "", r(478), o(1099), r(686), "", r(510), r(445), o(1247), "", r(571), r(703), r(686), "", o(991), r(643), "  }", "", "", "", r(667), r(609), r(686), "", r(465), r(640), r(686), "", "", r(557), r(598), "    cursor: pointer;", o(1205), r(702), o(429), r(686), "", r(618), o(389), r(665), r(702), r(588), r(686), "", r(594), r(530), r(686), "  ", r(390), r(567), r(686), "", o(737), r(353), r(553), r(605), o(1247), "", o(814), o(928), r(686), "", o(263), r(648), r(686)][r(506)]("\n"), typeof GM_addStyle != r(558) ? GM_addStyle(i) : typeof PRO_addStyle != r(558) ? PRO_addStyle(i) : typeof addStyle != r(558) ? addStyle(i) : ((t = document.createElement(r(681)))[r(518)] = r(625), t[r(404)](document[r(458)](i)), (n = document[r(545)](r(415)))[r(479)] > 0 ? n[0][r(404)](t) : document[r(563)][r(404)](t))
                    }), 100)
                }), 1e3), id(a(509))
            },
            css: [
                [bp(355), e(627), e(499)],
                [bp(664), e(627), e(499)],
                [e(483), e(652), e(546)],
                [e(642), bp(327), e(499)],
                [e(514), e(627), e(499)],
                [bp(1065), e(627), bp(662)],
                [bp(826), e(627), e(499)],
                [e(517), e(652), bp(426)]
            ]
        }, {
            site: location[e(351)][bp(226)](e(650)),
            cent: !0,
            clear: !0,
            parent: function() {
                return id(bp(1312))
            }
        }, {
            site: location[e(351)][bp(226)](bp(1331)),
            cent: !0,
            clear: !0,
            parent: function() {
                return id(bp(1132))
            },
            css: [
                [bp(1418), e(627), e(499)],
                [bp(664), e(627), e(499)],
                [e(483), e(652), e(546)],
                [bp(1376), e(652), e(546)],
                [bp(604), bp(327), e(499)],
                [e(514), e(627), e(499)],
                ["#game-middle-main", e(627), "rgba(0,0,0,0)"],
                ["#nickname", e(627), e(499)],
                [bp(535), e(652), bp(426)]
            ]
        }, {
            site: location[bp(1351)].includes(e(441)),
            cent: !1,
            clear: !1,
            parent: function() {
                return id(bp(990))
            }
        }, {
            site: location[e(351)][bp(226)](e(496)),
            cent: !1,
            clear: !1,
            parent: function() {
                return id(bp(654))
            }
        }, {
            site: location[e(351)][e(657)](e(419)),
            cent: !0,
            clear: !0,
            parent: function() {
                return id(bp(1404))
            },
            css: [
                [e(483), e(627), e(499)],
                [e(401), bp(327), e(499)],
                ["#H_B", e(652), e(546)],
                [e(647), e(627), e(499)]
            ]
        }, {
            site: location[e(351)][e(657)](e(473)),
            cent: !1,
            clear: !1,
            parent: function() {
                return clas(e(393))[0]
            }
        }, {
            site: location[e(351)][e(657)]("agar"),
            cent: !0,
            clear: !0,
            parent: function() {
                return id(e(497))
            }
        }, {
            site: location[e(351)][e(657)](e(476)),
            cent: !0,
            clear: !0,
            parent: function() {
                return id(e(471))
            }
        }, {
            site: location[e(351)][e(657)](e(581)),
            cent: !0,
            clear: !0,
            parent: function() {
                return id(e(438))
            }
        }, {
            site: location[e(351)].includes(e(533)),
            cent: !0,
            clear: !0,
            parent: function() {
                var a = bp,
                    t = e;
                return id(t(704)).remove(), id(a(450))[t(639)](), document[t(597)]("referral")[0]
            }
        }], window.br = document[e(613)]("br"), v[bp(1134)] = function() {
            try {
                z(centy2)
            } catch (a) {}
            try {
                z(centy)
            } catch (e) {}
        }, w[e(425)] = F, window[e(403)] = function(a) {
            var n, o = e;
            set(frame, o(521), o(550)), set(frame, o(375), "0"), n = CE(o(578), o(637)), s && (t[o(541)] = ""), r ? (clearInterval(y), y = setInterval((function() {
                var a, e, r = b,
                    i = o;
                try {
                    t && (clearInterval(y), a = t, frame[i(612)] = localStorage_[r(1045)]("LP"), window[i(616)] = function(a) {
                        localStorage_[r(1440)]("LP", frame.src)
                    }, e = CE(i(578), i(633)), t[i(404)](e), (t = centy)[i(404)](u), t[r(1356)](frame), t[r(1356)](u), t[r(1356)](u), t[r(1356)](inputm), t.appendChild(u), t[i(404)](u), clearInterval(y), n[i(404)](u), n[i(404)](v), n[i(404)](u), n[i(404)](w), a[i(404)](n), D(), id("play") && SetUpSploop())
                } catch (s) {
                    window.lastError = s
                }
            }), 0)) : (clearInterval(y), y = setInterval((function() {
                var a, e = b,
                    n = o;
                try {
                    t && (clearInterval(y), a = t, (t = CE(e(980), e(1147)))[n(404)](u), t[n(404)](frame), frame[n(612)] = localStorage_[e(1045)]("LP"), window.onunload = function(a) {
                        var e = n;
                        localStorage_[e(655)]("LP", frame[e(612)])
                    }, t[n(404)](u), t[e(1356)](u), t[n(404)](inputm), a[n(404)](t), a[n(404)](u), a[e(1356)](v), a[e(1356)](u), a[e(1356)](w), D(), id(e(291)) && SetUpSploop())
                } catch (r) {}
            }), 0)), setTimeout((function() {
                var e = o;
                a && a[e(540)]((a => {
                    E(a[0], a[1], a[2])
                })), G(id(e(696)), e(450))
            }), 1e3)
        }, x[e(540)]((a => {
            var n = bp,
                o = e;
            a[o(414)] && (t = window[o(495)] = a[o(569)](), r = window[n(667)] = a[o(396)], s = window[o(515)] = a[o(505)], a[n(881)] ? setup3(a[o(600)]) : setTimeout(window[o(403)], 100))
        }))
    }
}

function Csc2() {
    var a = a8;
    if (cSs(), pingcheck(), window.ageBarBody) {
        ageBarBody[a(244)][a(1415)] = "1s", window.items2 = {};
        let e = {
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
                    hunting_bow: 0,
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
            t = document[a(757)](a(980));
        (function(n = ((e, t) => {
            var n = a;
            window.items2[t] = e[n(497)][n(665)][0][n(816)]
        }), o = document[a(757)]("br")) {
            var r = a;
            for (let a in e) {
                t.append(document[r(757)]("br"));
                let n = document.createElement(r(800));
                window[r(249)][r(821)]([a, n]), n.id = r(479) + a, n[r(416)] = a;
                let o = document[r(757)](r(992));
                o[r(742)] = "Age " + a + ":", Object.keys(e[a])[r(1341)]((t => {
                    var o = r;
                    let i = document[o(757)]("option");
                    i[o(816)] = e[a][t], i.innerText = t, n[o(369)](i)
                })), t[r(369)](o), t[r(369)](n)
            }
            setupCard[r(369)](t), sel1[r(1130)] = function(a) {
                var e = r,
                    t = a[e(497)][e(816)],
                    n = a[e(497)].classname;
                items2[n] = t
            }, sel2[r(1130)] = function(a) {
                var e = r,
                    t = a[e(497)].value,
                    n = a[e(497)][e(416)];
                items2[n] = t
            }, sel3[r(1130)] = function(a) {
                var e = r,
                    t = a[e(497)][e(816)],
                    n = a[e(497)][e(416)];
                items2[n] = t
            }, sel4[r(1130)] = function(a) {
                var e = r,
                    t = a[e(497)][e(816)],
                    n = a[e(497)][e(416)];
                items2[n] = t
            }, sel5[r(1130)] = function(a) {
                var e = r,
                    t = a.target.value,
                    n = a[e(497)].classname;
                items2[n] = t
            }, sel6[r(1130)] = function(a) {
                var e = r,
                    t = a[e(497)][e(816)],
                    n = a[e(497)].classname;
                items2[n] = t
            }, sel7.onchange = function(a) {
                var e = r,
                    t = a[e(497)].value,
                    n = a[e(497)][e(416)];
                items2[n] = t
            }, sel8[r(1130)] = function(a) {
                var e = r,
                    t = a[e(497)].value,
                    n = a[e(497)][e(416)];
                items2[n] = t
            }
        })(), window[a(335)] = [25, 23, 24, 6, 7, 9], info2[a(708)] = e, info2[a(708)][0] = {
            wood_wall: 19,
            spike: 6,
            winddmill: 10
        };
        let n = document[a(757)](a(424));
        n[a(816)] = 150, n.id = a(1209), n.style[a(1203)] = a(1384), n[a(244)].color = "white", n[a(1130)] = function(e) {
            var t = a;
            window[t(993)] = 1 * n[t(816)], chat(t(867) + n[t(816)])
        };
        let o = document[a(757)](a(424));
        o[a(816)] = i2, o.id = a(924), o.style[a(1203)] = a(1384), o[a(244)][a(253)] = a(385);
        let r = document.createElement(a(992));
        r.innerText = "Insta speed ", r[a(244)].color = a(507);
        let i = document[a(757)](a(992));
        i[a(742)] = a(564), i.style.color = a(507), setupCard[a(369)](document[a(757)]("br")), setupCard[a(369)](i), setupCard.append(n), setupCard[a(369)](document[a(757)]("br")), setupCard[a(369)](r), setupCard.append(o), o[a(1130)] = function(e) {
            i2 = 1 * o[a(816)], chat("Insta speed " + o.value)
        }, setupCard.style[a(1034)] = a(782), setupCard[a(244)][a(839)] = "180px", window[a(1435)] = 1
    }
}
var _setUp, a8 = b;
! function(e, t) {
    for (var n = b, o = a();;) {
        try {
            if (216531 === parseInt(n(425)) / 1 * (parseInt(n(365)) / 2) + -parseInt(n(256)) / 3 + -parseInt(n(958)) / 4 + parseInt(n(224)) / 5 + parseInt(n(225)) / 6 * (-parseInt(n(805)) / 7) + -parseInt(n(1102)) / 8 * (-parseInt(n(954)) / 9) + parseInt(n(985)) / 10) {
                break
            }
            o.push(o.shift())
        } catch (r) {
            o.push(o.shift())
        }
    }
}();
const badWords = [...new Set([a8(1115), a8(243), a8(769), a8(1157), a8(862), a8(589), "anus", a8(1361), a8(457), a8(1219), "ass", "ass-fucker", "asses", a8(635), a8(398), a8(443), a8(734), a8(1425), "a_s_s", a8(998), a8(1079), "b17ch", a8(1328), "ballbag", a8(255), a8(1379), a8(532), a8(741), a8(750), a8(549), a8(684), a8(305), "bi+ch", a8(784), a8(402), a8(1029), a8(467), a8(1383), a8(829), a8(871), a8(376), "blow job", a8(1117), "blowjobs", a8(1014), a8(471), a8(408), a8(755), a8(1287), a8(482), "booobs", a8(1039), a8(428), a8(666), a8(620), a8(344), "bugger", a8(1022), "bunny fucker", "butt", a8(1363), a8(247), "buttplug", "c0ck", a8(1388), a8(656), "cawk", "chink", a8(545), a8(671), "clit", "clitoris", a8(758), "cnut", a8(271), a8(1348), a8(1241), a8(1109), a8(1097), a8(324), a8(743), "cocksuck", "cocksucked", a8(236), "cocksucking", "cocksucks", a8(1067), a8(693), "cok", "cokmuncher", a8(1291), a8(920), a8(724), a8(692), "cum", "cummer", "cumming", a8(945), a8(392), a8(1277), a8(1405), a8(1222), a8(1016), a8(1232), a8(989), "cuntlicking", "cunts", a8(277), "cyberfuc", a8(1234), "cyberfucked", a8(1128), a8(1023), a8(486), a8(948), a8(1339), a8(915), "dickhead", "dildo", a8(925), a8(780), a8(1265), a8(628), a8(987), "dog-fucker", a8(1111), a8(613), a8(270), a8(1427), a8(873), a8(1195), a8(1239), a8(962), a8(1430), a8(982), "ejaculatings", a8(382), "ejakulate", a8(488), a8(281), "f4nny", a8(1059), a8(312), a8(518), a8(313), a8(414), a8(921), "fagots", "fags", a8(1160), a8(529), "fannyfucker", "fanyy", "fatass", a8(1058), a8(937), "fcuking", a8(1198), a8(857), a8(822), a8(378), "fellatio", a8(713), a8(1010), "fingerfucker", a8(513), "fingerfucking", "fingerfucks", "fistfuck", a8(715), a8(500), a8(872), a8(1429), "fistfuckings", a8(1340), "flange", "fook", a8(1329), a8(1157), a8(478), a8(1179), a8(563), a8(657), a8(540), "fuckheads", a8(820), a8(1060), a8(739), a8(976), a8(375), a8(903), a8(346), a8(1091), a8(1033), a8(1444), "fuk", a8(581), a8(1428), a8(607), a8(702), "fukwhit", a8(841), a8(461), "fux0r", a8(1143), a8(495), a8(1186), a8(1394), a8(1095), a8(679), "goatse", a8(1448), a8(772), "god-damned", a8(363), a8(1164), "hardcoresex", a8(460), a8(394), a8(975), a8(1268), a8(1255), a8(959), "hore", a8(943), a8(738), a8(1305), a8(913), "jackoff", a8(688), a8(546), "jism", a8(1120), a8(1076), a8(1159), a8(1114), "knob", a8(1026), a8(699), "knobend", "knobhead", a8(1246), "knobjokey", a8(950), a8(309), a8(1169), "kum", a8(1380), "kumming", a8(646), a8(1400), a8(251), a8(746), "labia", "lust", a8(1182), "m0f0", "m0fo", "m45terbate", a8(1087), a8(1188), a8(606), "master-bate", a8(1342), "masterbat*", "masterbat3", "masterbate", "masterbation", a8(1267), a8(1054), a8(711), a8(544), a8(1397), a8(519), a8(538), "mothafuckas", a8(632), a8(1233), "mothafucker", a8(678), a8(698), "mothafucking", a8(766), a8(761), "mother fucker", a8(351), a8(1137), a8(1190), a8(1142), a8(1413), a8(745), a8(257), "motherfuckka", a8(347), a8(595), "mutha", a8(1035), "muthafuckker", a8(399), "mutherfucker", a8(1078), a8(1399), "nazi", a8(474), a8(1301), a8(935), a8(1450), a8(1215), a8(264), a8(587), a8(548), "nob", a8(810), a8(789), "nobjocky", a8(337), a8(349), a8(1307), a8(1245), a8(786), "orgasm", a8(1101), "p0rn", a8(946), a8(1378), a8(848), a8(1319), a8(1213), a8(539), a8(1027), "phuked", "phuking", a8(1063), "phukking", a8(828), "phuq", a8(442), a8(1311), a8(952), a8(852), a8(602), a8(825), a8(961), a8(914), "pissin", a8(1411), "pissoff", "poop", a8(473), a8(849), a8(1069), "pornos", a8(570), a8(1386), a8(803), "pube", "pusse", "pussi", a8(334), a8(969), "pussys", a8(594), a8(1258), a8(430), a8(400), a8(1412), a8(422), "sadist", "schlong", "screwing", a8(489), a8(694), a8(600), a8(1220), "sex", a8(732), "sh!t", a8(896), a8(963), a8(1296), "shaggin", a8(856), a8(527), a8(1318), a8(451), a8(272), a8(1409), a8(419), a8(749), a8(700), a8(1174), "shithead", a8(819), a8(445), a8(503), a8(516), a8(1092), a8(790), a8(740), a8(616), "shitty", "skank", "slut", a8(774), a8(901), a8(759), "snatch", a8(1371), a8(1138), "spunk", "s_h_i_t", "t1tt1e5", a8(1445), a8(1285), a8(1323), a8(1212), a8(555), a8(1110), "titfuck", a8(650), a8(434), a8(528), a8(269), "titties", a8(480), a8(788), a8(240), a8(1310), "turd", "tw4t", a8(586), "twathead", a8(1028), a8(1278), "twunter", a8(386), a8(1244), a8(1443), a8(452), a8(1148), a8(1354), "wang", a8(764), a8(282), "wanky", a8(384), a8(1051), "willies", a8(965), a8(893), "xxx", a8(1115), a8(243), "5hit", a8(862), a8(589), "anus", a8(1361), a8(457), a8(1219), a8(718), a8(906), a8(779), a8(635), a8(398), "asshole", a8(734), a8(1425), a8(393), a8(998), a8(1079), a8(817), a8(1328), a8(605), a8(255), a8(1379), a8(532), a8(741), a8(750), "bellend", a8(684), a8(305), "bi+ch", a8(784), a8(402), a8(1029), a8(467), a8(1383), a8(829), "bitching", a8(376), a8(1347), a8(1117), a8(971), a8(1014), "bollock", a8(408), "boner", a8(1287), "boobs", "booobs", a8(1039), a8(428), "booooooobs", a8(620), "buceta", a8(508), a8(1022), a8(1119), a8(966), a8(1363), a8(247), "buttplug", a8(446), "c0cksucker", a8(656), a8(1154), a8(1417), a8(545), a8(671), "clit", a8(1392), a8(758), a8(1040), a8(271), a8(1348), a8(1241), "cockhead", a8(1097), a8(324), a8(743), "cocksuck", a8(815), a8(236), a8(645), "cocksucks", a8(1067), "cocksukka", a8(1178), "cokmuncher", a8(1291), "coon", "cox", a8(692), "cum", a8(1192), a8(812), a8(945), a8(392), a8(1277), a8(1405), a8(1222), a8(1016), "cuntlick", a8(989), a8(514), a8(534), "cyalis", a8(293), a8(1234), a8(840), a8(1128), a8(1023), a8(486), a8(948), "damn", a8(915), a8(584), a8(730), a8(925), a8(780), a8(1265), "dirsa", "dlck", a8(1180), a8(1111), a8(613), a8(270), "doosh", a8(873), "dyke", a8(1239), a8(962), a8(1430), "ejaculating", a8(923), a8(382), a8(1326), a8(488), a8(281), a8(223), a8(1059), a8(312), "faggitt", a8(313), a8(414), a8(921), a8(343), "fags", "fanny", a8(529), a8(1451), a8(464), a8(1364), a8(1058), "fcuker", a8(248), a8(1198), a8(857), "felching", a8(378), "fellatio", "fingerfuck", a8(1010), a8(1320), a8(513), a8(1056), a8(725), a8(907), a8(715), "fistfucker", a8(872), "fistfucking", "fistfuckings", "fistfucks", a8(1256), "fook", a8(1329), a8(1157), a8(478), a8(1179), a8(563), "fuckers", a8(540), a8(348), a8(820), a8(1060), a8(739), a8(976), a8(375), a8(903), a8(346), "fuckwit", a8(1033), a8(1444), "fuk", a8(581), a8(1428), a8(607), a8(702), a8(1294), a8(841), a8(461), "fux0r", a8(1143), a8(495), a8(1186), "gangbangs", a8(1095), a8(679), a8(747), a8(1448), a8(772), a8(1283), a8(363), a8(1164), a8(876), a8(460), a8(394), a8(975), "hoare", a8(1255), a8(959), a8(1187), a8(943), "horny", a8(1305), a8(913), a8(283), a8(688), a8(546), a8(1262), a8(1120), a8(1076), a8(1159), "kawk", a8(505), "knobead", a8(699), a8(391), a8(973), a8(1246), a8(368), a8(950), "kondum", a8(1169), a8(944), a8(1380), a8(1197), "kums", "kunilingus", a8(251), a8(746), a8(510), a8(1070), "lusting", a8(729), "m0fo", "m45terbate", a8(1087), a8(1188), "masochist", a8(423), a8(1342), a8(596), "masterbat3", a8(909), a8(591), a8(1267), a8(1054), a8(711), a8(544), a8(1397), "mothafuck", "mothafucka", a8(1184), "mothafuckaz", a8(1233), a8(728), a8(678), a8(698), a8(477), a8(766), "mothafucks", "mother fucker", a8(351), a8(1137), a8(1190), a8(1142), a8(1413), a8(745), a8(257), a8(1337), a8(347), "muff", a8(496), a8(1035), "muthafuckker", a8(399), "mutherfucker", a8(1078), a8(1399), a8(328), a8(474), a8(1301), a8(935), "niggah", a8(1215), a8(264), a8(587), a8(548), "nob", "nob jokey", "nobhead", a8(720), a8(337), a8(349), a8(1307), "orgasim", a8(786), a8(929), a8(1101), a8(238), a8(946), "pecker", a8(848), "penisfucker", "phonesex", a8(539), a8(1027), a8(655), a8(364), a8(1063), a8(802), "phuks", a8(1090), a8(442), a8(1311), "piss", a8(852), "pisser", a8(825), a8(961), a8(914), a8(1360), a8(1411), "pissoff", "poop", a8(473), a8(849), a8(1069), a8(721), "prick", a8(1386), a8(803), a8(1259), "pusse", "pussi", a8(334), "pussy", "pussys", a8(594), "retard", a8(430), a8(400), a8(1412), a8(422), "sadist", a8(625), "screwing", "scroat", a8(694), a8(600), "semen", a8(1336), "sh!+", a8(1437), "sh1t", a8(963), "shagger", a8(1257), a8(856), "shemale", a8(1318), a8(451), "shitdick", a8(1409), a8(419), a8(749), a8(700), "shitfull", "shithead", a8(819), a8(445), a8(503), a8(516), a8(1092), "shitters", a8(740), "shittings", a8(1338), "skank", a8(1145), a8(774), a8(901), a8(759), a8(1235), a8(1371), a8(1138), a8(796), a8(1334), a8(1369), a8(1445), a8(1285), a8(1323), a8(1212), a8(555), a8(1110), a8(642), "tits", a8(434), a8(528), a8(269), a8(1387), "tittyfuck", a8(788), a8(240), "tosser", a8(844), "tw4t", a8(586), "twathead", a8(1028), a8(1278), a8(1080), a8(386), a8(1244), "vagina", a8(452), "vulva", a8(1354), a8(660), a8(764), a8(282), "wanky", a8(384), a8(1051), a8(1292), "willy", a8(893), a8(235), a8(1018), "anus", "ash0le", "ash0les", a8(997), "ass", "Ass Monkey", "Assface", a8(274), a8(487), a8(443), a8(734), a8(974), a8(276), "azzhole", a8(753), a8(532), "bastards", "bastardz", a8(1276), a8(1416), a8(526), "bitch", a8(1383), a8(638), a8(220), "butthole", a8(1401), a8(446), a8(1436), a8(955), a8(1314), a8(1154), a8(421), "Clit", a8(603), a8(1274), a8(271), a8(1109), a8(1047), a8(743), a8(778), a8(1348), a8(692), "cum", a8(1016), a8(534), "cuntz", "dick", a8(573), a8(1081), a8(730), a8(925), a8(1024), a8(499), a8(578), "dominatrics", a8(221), a8(1195), "enema", a8(488), a8(281), a8(1059), a8(357), "faget", a8(362), a8(795), a8(313), a8(874), a8(300), "fags", a8(934), "faig", "faigs", a8(850), a8(259), a8(1157), "fucker", a8(820), a8(1060), a8(903), a8(1406), a8(690), a8(466), a8(304), "fuker", a8(775), a8(1038), a8(536), a8(722), "Fukker", a8(771), a8(1249), "God-damned", "h00r", a8(890), a8(1217), "hells", a8(975), a8(1221), a8(1012), a8(283), "jap", a8(636), "jerk-off", a8(468), a8(957), a8(1076), a8(1159), a8(505), a8(433), a8(1434), a8(592), a8(1105), a8(1407), a8(562), "Lipshits", "Lipshitz", a8(606), "masokist", a8(1381), a8(899), a8(1125), a8(1343), a8(909), a8(710), a8(676), a8(1118), a8(949), a8(397), a8(1290), a8(320), a8(853), a8(781), a8(823), "mother-fucker", "Mutha Fucker", a8(1161), "Mutha Fuker", a8(1284), a8(1089), a8(888), a8(1248), a8(1037), "nigur;", "niiger;", a8(686), a8(339), "orgasim;", "orgasm", a8(454), a8(458), a8(330), a8(1373), "packi", a8(1049), a8(1025), a8(356), a8(525), a8(371), a8(1378), "peeenus", a8(439), a8(630), a8(1e3), a8(512), a8(1365), a8(848), a8(593), a8(626), a8(297), a8(736), a8(807), "Phuk", "Phuker", a8(683), a8(317), a8(1146), a8(1288), "Poonani", a8(765), a8(520), a8(704), "pusse", "pussee", a8(969), a8(1176), a8(557), a8(818), a8(1162), a8(1183), a8(437), "qweerz", a8(1439), "recktum", a8(594), a8(1258), a8(265), a8(1289), a8(625), a8(942), a8(1220), "sex", a8(1073), "Sh!t", "sh1t", "sh1ter", a8(863), "sh1tter", a8(1121), a8(451), a8(503), a8(1092), "Shitty", a8(1446), "shitz", "Shyt", a8(988), a8(336), a8(456), "skanck", a8(612), a8(910), a8(926), a8(286), a8(1313), a8(972), "slut", a8(774), a8(701), a8(687), a8(1371), a8(1110), a8(844), "va1jina", "vag1na", a8(792), "vagina", a8(579), a8(432), a8(895), "vulva", a8(1149), a8(1396), a8(968), a8(1051), "xrated", a8(235), a8(1053), a8(402), a8(1117), a8(1075), a8(1382), "fuck", "shit", a8(718), a8(443), "b!tch", a8(817), a8(1328), a8(532), a8(644), a8(1014), a8(344), a8(446), a8(1154), a8(1417), "cipa", a8(758), a8(271), a8(752), "cunt", a8(730), a8(628), "ejakulate", "fatass", a8(1058), a8(690), a8(1005), a8(1255), a8(1187), a8(1262), "kawk", a8(746), a8(251), a8(1165), "masturbate", a8(596), a8(441), a8(1190), a8(422), a8(1397), a8(328), a8(935), a8(587), a8(1307), a8(539), a8(1311), a8(1163), a8(969), a8(600), a8(1437), "shemale", "shi+", a8(732), a8(1145), a8(759), a8(1285), "tits", a8(482), a8(1079), a8(1323), a8(1212), "testicle", a8(434), a8(1354), a8(283), "wank", a8(384), a8(1051), a8(1055), a8(1225), a8(285), a8(427), a8(1006), a8(1333), a8(744), a8(504), a8(261), a8(652), "bi7ch", a8(295), a8(785), a8(620), "butt-pirate", "cabron", a8(523), a8(855), a8(1140), a8(1350), a8(411), a8(319), a8(653), a8(832), a8(1253), a8(1266), "dupa", a8(583), a8(1048), a8(515), "Ekto", a8(1309), "faen", a8(858), "fanculo", a8(1160), "feces", a8(751), a8(1324), a8(1304), a8(459), a8(273), a8(643), a8(705), "Fu(*", a8(1135), a8(1243), a8(1166), a8(569), a8(453), "h4x0r", a8(460), a8(1052), a8(1362), a8(1395), a8(326), a8(232), a8(1391), a8(1159), a8(791), a8(981), a8(383), a8(396), a8(669), a8(565), a8(719), a8(1228), a8(1008), a8(917), a8(697), "lesbo", "mamhoon", a8(859), a8(1108), a8(983), a8(936), "mouliewop", a8(1030), a8(1230), "muschi", "nazis", "nepesaurio", "nigger*", a8(404), a8(1208), a8(1141), "picka", a8(1050), "pillu*", a8(1170), "piss*", a8(614), a8(869), a8(239), "porn", a8(238), a8(1357), a8(1298), "pula", a8(229), "puta", a8(230), "qahbeh", "queef*", a8(561), "schaffer", a8(1299), a8(999), "schmuck", a8(1377), "sh!t*", a8(726), "sharmute", a8(250), "shiz", "skribz", a8(691), "sphencter", "spic", "spierdalaj", a8(707), a8(1077), a8(886), a8(1074), a8(1385), a8(586), a8(658), a8(228), a8(1321), a8(882), a8(1330), "yed", a8(835)])],
    reg = new RegExp("(" + [...new Set(badWords[a8(465)](" ")[a8(1295)](/[\w\d]+/gi))][a8(465)]("|") + ")", "gi"),
    filter1 = a => a[a8(361)](reg, (function(a, e, t) {
        var n = a8;
        return a[n(412)] > 1 ? a.split(/[aeiou]+/gi)[n(465)]("*") : a
    })),
    filter2 = a => {
        var e = a8;
        return "oh" === (a = (a = a[e(1260)]())[e(1150)]("l").join("w")) ? random(["owo", e(633)]) : a[e(361)](/l/g, "w").replaceAll(/[le]+/g, (function(a) {
            return {
                l: "w",
                e: "ee"
            }[a[0]] || a
        }))[e(624)](/r/g, "z").replace(/s/g, "z")[e(624)](/t/g, e(580))[e(624)](/e/g, (function(a, e, t) {
            return t.slice(e - 1, e + 1), "e"
        }))
    };
"" [a8(361)](/e{3,}/gi, "ee");
const game_ = new class {#
    a = function() {};#
    e = function() {};#
    t = !1;#
    n = 1e3;#
    o = function(a) {
        return new Promise((e => setTimeout(e, a)))
    };#
    r = 0;#
    i = 0;#
    s = async function() {
        for (;;) {
            let a = this.#o,
                e = this.#e,
                t = this.#a;
            if (await a(0), this.#i) {
                break
            }
            e() && (await a(this.#n), t(), await a(this.#n))
        }
        this.#i = !1
    };
    set[a8(651)](a) {
        var e = a8;
        return this.#n = Number[e(1306)](a) ? 1e3 : Number(a)
    }
    get[a8(651)]() {
        return this.#n
    }[a8(551)]() {
        this.#s()
    }[a8(1126)]() {
        this.#i = !0
    }
    set autoSpawn(a) {
        return this.#t = !!a
    }
    get[a8(352)]() {
        return this.#t
    }
    set[a8(1071)](a) {
        return this.#e = a
    }
    get[a8(1071)]() {
        return this.#e
    }
    set[a8(1153)](a) {
        return this.#a = a
    }
    get[a8(1153)]() {
        return this.#a
    }
};
class bool {#
    c = !1;
    toggle() {
        this.#c = !this.#c
    }
    get[a8(292)]() {
        return this.#c
    }
    set[a8(292)](a) {
        this.#c = !!a
    }
}
class element {
    static get br() {
        return new element("br")
    }
    constructor(a, e) {
        var t = a8;
        this.element = a[t(266)][t(354)][t(226)](t(1172)) && a || function() {
            var a = t;
            for (let e in arguments[1]) {
                arguments[0][a(629)](e, arguments[1][e])
            }
            return arguments[0]
        }(document[t(757)](a), e)
    }[a8(244)](a) {
        var e = a8;
        for (let t in a) {
            this.element[e(244)][t] = a[t]
        }
        return this
    }
    append(a) {
        var e = a8;
        return this[e(806)].append(a[e(806)] || a), this
    }[a8(1273)](a) {
        var e = a8;
        return (a[e(806)] || typeof a == e(1002) ? document[e(1403)](a) : a)[e(369)](this[e(806)]), this
    }
    on(a, e) {
        return this.element["on" + a] = e, this
    }[a8(1082)](a, e) {
        return this.element[a] = e, this
    }[a8(524)]() {
        var a = a8;
        return this[a(806)][a(524)](), this
    }[a8(956)]() {
        return this[a8(806)][arguments[0]]
    }
    get children() {
        var a = a8;
        return new class {
            constructor(a) {
                var e, t = b;
                for (e = 0; e < a[t(412)]; e += 1) {
                    this[e] = a[e]
                }
                Object[t(1218)](this, t(412), {
                    get: function() {
                        return a[t(412)]
                    }
                }), Object[t(979)](this)
            }[a(878)](a) {
                return null != this[a] ? this[a] : null
            }[a(449)](e) {
                var t, n = a;
                for (t = 0; t < this[n(412)]; t += 1) {
                    if (this[t].id === e || this[t][n(354)] === e) {
                        return this[t]
                    }
                }
                return null
            }
            get[a(1020)]() {
                return [...this]
            }
        }([...this[a(806)][a(462)]])
    }
}
const alt = name.includes(a8(1223));
_setUp = !1, findhref2 = function(a, e) {
    var t = [];
    return function n(a) {
        var o = b;
        a[o(1359)].toLowerCase() == (e || "a") ? (t[o(821)](a), a[o(462)][o(412)] && ((a = a[o(462)])[o(1341)] = [][o(1341)], a[o(1341)]((a => {
            n(a)
        })))) : a.children[o(412)] && ((a = a.children)[o(1341)] = [][o(1341)], a[o(1341)]((a => {
            n(a)
        })))
    }(a), t
};
const localStorage_ = {
    getItem: a => GM_getValue(a),
    setItem(a, e) {
        var t = a8;
        return GM_setValue(a, e), GM_setValue("LC", this), this[t(1045)](a)
    }
};
window.once = window.on;
const DefaultDisplay = {};
let moomooMenu = a8(880),
    sploopMenu = a8(847);
document[a8(490)]("keydown", (function(a) {
    var e = a8;
    "`" === a[e(870)] && ($(moomooMenu) && $(moomooMenu)[e(322)] && $(moomooMenu)[e(322)](), $(sploopMenu) && $(sploopMenu).toggle && (document.querySelector(sploopMenu)[e(244)][e(435)] = document[e(1403)](sploopMenu)[e(244)][e(435)] == e(582) ? e(892) : e(582)))
})), $("#consentBlock").css({
    display: a8(582)
}), $("#mapDisplay")[a8(881)]({
    background: a8(793)
});
var [info2, myPlayer] = [window[a8(323)] || {}, window[a8(358)] || []];
window[a8(249)] = window[a8(249)] || [], document[a8(900)]() ? onload = Csc2 : Csc2();