// ==UserScript==
// @name Diep stuff
// @namespace http://tampermonkey.net/
// @version 2.4
// @description try to take over the world!
// @author You
// @match *://diep.io/*
// @icon https://www.google.com/s2/favicons?sz=64&domain=diep.io
// @grant GM_getValue
// @grant GM_setValue
// @grant GM_info
// @grant GM_addStyle
// @grant GM_addValueChangeListener
// @grant GM_removeValueChangeListener
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @require http://code.createjs.com/easeljs-0.5.0.min.js
// @require https://cdn.jsdelivr.net/gh/naquangaston/HostedFiles@master/JS_obf.js
// @require https://cdn.jsdelivr.net/gh/naquangaston/HostedFiles@master/ResourceLoader_.js
// @require https://cdn.jsdelivr.net/gh/naquangaston/HostedFiles@master/JS_Formatter_.js
// @require https://raw.githubusercontent.com/naquangaston/HostedFiles/main/UserScripts/Updater.js
// ==/UserScript==
infothingy = {}, inf = {}, _upgrade = "";
const Settings = GM_getValue("Settings") || {},
    extended = {
        update: function(e) {}
    },
    getV = function(e, t) {
        return 1 != arguments.length ? (GM_setValue(e, t), t) : GM_getValue(e)
    };

function setElement(e) {
    return !(!String(e).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/) || 11 != String(e).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/)[8].length) && String(e).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/)[8]
}

function sleep(e) {
    return new Promise((t => setTimeout(t, e)))
}

function RemoveAds() {
    return [...document.getElementsByTagName("iframe")].forEach((e => e.remove()))
}

function checkWin(e = this.win1) {
    return !!e && !e.closed
}

function startwin(e, t = null, n, o) {
    var r;
    null == t && (t = e), console.log("attemp the close", e);
    try {
        n && window[e].close()
    } catch (t) {
        window[e] = null, console.warn("attemp the close", e, "Fail")
    }
    try {
        checkWin(window[e]) ? (globalRoot[t] = open("", "PROFILES", "width=256,height=305"), globalRoot[t].window.document.body.innerHTML = "", globalRoot[t].window.document.head.innerHTML = "") : (window[e] = r = open(o, "PROFILES", "width=256,height=305"), console.log("Making", e, "in", t), console.log(window[e]), console.log("writing defalt styles", "to", e, t), r.document.write(htmlContent.element.outerHTML))
    } catch (e) {
        console.warn(e)
    }
    return globalRoot[t] = globalRoot[e], console.log("complete win"), r
}

function get(e, t = document.body) {
    if (t.id === e) return t;
    if (t.shadowRoot) {
        const n = get(e, t.shadowRoot);
        if (n) return n
    }
    for (const n of t.children) {
        const t = get(e, n);
        if (t) return t
    }
    return null
}

function MySrc() {
    var e = u;

    function t(e) {
        return !!(e || this)[u(233)](/[A-Z_$a-z]/gi)
    }

    function n(e) {
        return !!(e || this)[u(233)](/[\(\{\[]/gi)
    }

    function o(e) {
        return !!(e || this)[u(233)](/[\]\}\)]/gi)
    }

    function r(e) {
        return !!(e || this)[u(233)](/[0-9]/gi)
    }

    function a(e) {
        return !!(e || this).match(/[\r\n]/gi)
    }

    function s(e) {
        return !!(e || this)[u(233)](/ /gi)
    }

    function i() {
        var e = u,
            t = d[l];
        m[e(225)] = t.t, document[e(251)] = t.name, m[e(264)] = function() {
            var n = e;
            m[n(225)] = null, l++, t = d[l], m.src = t.t, document.title = t[n(201)]
        }
    }! function(e, t) {
        for (var n = u, o = e();;) try {
            if (668740 === parseInt(n(277)) / 1 + parseInt(n(199)) / 2 + -parseInt(n(255)) / 3 * (-parseInt(n(295)) / 4) + -parseInt(n(191)) / 5 * (parseInt(n(275)) / 6) + -parseInt(n(180)) / 7 + parseInt(n(274)) / 8 + -parseInt(n(206)) / 9) break;
            o.push(o.shift())
        } catch (e) {
            o.push(o.shift())
        }
    }(h);
    var l, c, d;

    function u(e, t) {
        var n = h();
        return (u = function(e, t) {
            return n[e -= 175]
        })(e, t)
    }(function() {
        var e = u;

        function i(e, t) {
            var n, o = u,
                r = 0,
                a = "",
                s = [typeof String(), o(261), o(261)];
            if (![s[o(265)](typeof this), s[o(265)](typeof e)].filter((e => !(e < 0)))[o(239)]) throw o(248) + o(273) + "de";
            (n = (Array[o(252)](e || this) ? (e || this)[o(269)](t) : (s.indexOf(typeof e) < 0 ? this : e)[o(245)]()[o(282)]("  ")[o(269)]("").split("{").join("{\n")[o(282)]("}").join("\n}")[o(282)]("\n\n")[o(269)]("\n"))[o(282)](""))[o(239)];
            for (let e = 0; e < n[o(239)]; e++) {
                const t = n[e],
                    s = n[e + 1],
                    i = n[e - 1];
                Number((e / n[o(239)] * 100)[o(250)](2)), "\\" != i && ("{" == t && r++, "}" == t && r--), r < 0 && (r = 0), a += "\n" == t ? "}" == s ? t + " ".repeat(r ? r - 1 : r) : t + " " [o(286)](r) : t
            }
            return a
        }

        function l(e) {
            var t = u;
            return (e || this).constructor[t(201)][t(193)](t(183) + "ion")
        }

        function c(e, t = null, n = "") {
            var o = u;
            return this.split(...function() {
                return arguments[0] ? [e, t] : [e]
            }(t))[o(269)](n)
        }

        function d() {
            return !this[u(245)]().includes(".")
        }

        function p(e = []) {
            var t = u;
            return (e[t(239)] ? e : this)[Math[t(231)](Math[t(215)]() * (e.length ? e : this).length)]
        }

        function m(e = []) {
            var t = u;
            for (let n = (e[t(239)] ? e : this)[t(239)] - 1; n > 0; n--) {
                const o = Math[t(231)](Math.random() * (n + 1)),
                    r = (e.length ? e : this)[n];
                (e.length ? e : this)[n] = (e[t(239)] ? e : this)[o], (e.length ? e : this)[o] = r
            }
            return e[t(239)] ? e : this
        }
        var h = function() {
            const e = arguments;
            return function(t) {
                return (t || this)[e[2][0]][e[2][1]][e[2][2]](e[2][3])
            }
        }([], [""], [e(232) + "r", e(201), e(193), e(183) + "ion"], [""], [], {});
        Function[e(257)][e(280)] = i, Function[e(257)][e(179)] = l, Function[e(257)][e(179)] = h, Number[e(257)].isWhole = d, Array[e(257)][e(215)] = p, Array[e(257)][e(229)] = m, String.prototype[e(279) + e(230)] = c, Object[e(291)](Object.prototype, {
            isNumber: r,
            isLetter: t,
            isOpen: n,
            isClose: o,
            isBlank: s,
            isLine: a,
            getType: function(t) {
                var n = e;
                return null == typeof(t || this) ? n(219) : (t || this)[n(232) + "r"][n(201)]
            },
            type_: function() {
                var a = e;
                const i = arguments[0] || this;
                var l = [t, r, n, o, s];
                return l[a(205)]((e => !!e(i)))[a(195)]((e => l[a(195)]((e => e[a(201)]))[a(265)](e[a(201)])))[0]
            }
        }), Object.assign(this, {
            formate: i,
            isAsync: l,
            isWhole: d,
            random: p,
            shuffle: m,
            split_replace: c,
            getError: function(e, ...t) {
                try {
                    e(...t)
                } catch (e) {
                    return e
                }
            }
        }), Object[e(291)](this, {
            debug: function(...t) {
                var n = e;
                Date()[n(233)](/[\d:]+/gi)[2]
            },
            error: function(...t) {
                var n = e;
                Date()[n(233)](/[\d:]+/gi)[2]
            },
            info: function(...e) {
                Date().match(/[\d:]+/gi)[2]
            },
            log: function(...e) {
                Date().match(/[\d:]+/gi)[2]
            },
            warn: function(...t) {
                var n = e;
                Date()[n(233)](/[\d:]+/gi)[2]
            },
            dir: function(...t) {
                var n = e;
                Date()[n(233)](/[\d:]+/gi)[2]
            },
            dirxml: function(...t) {
                var n = e;
                Date()[n(233)](/[\d:]+/gi)[2]
            },
            table: function(...t) {
                var n = e;
                Date()[n(233)](/[\d:]+/gi)[2]
            },
            trace: function(...t) {
                var n = e;
                Date()[n(233)](/[\d:]+/gi)[2]
            },
            group: function(...e) {
                Date().match(/[\d:]+/gi)[2]
            },
            groupCollapsed: function(...t) {
                var n = e;
                Date()[n(233)](/[\d:]+/gi)[2]
            },
            groupEnd: function(...e) {
                Date().match(/[\d:]+/gi)[2]
            },
            clear: function(...t) {
                var n = e;
                Date()[n(233)](/[\d:]+/gi)[2]
            },
            count: function(...e) {
                Date().match(/[\d:]+/gi)[2]
            },
            countReset: function(...t) {
                var n = e;
                Date()[n(233)](/[\d:]+/gi)[2]
            },
            assert: function(...t) {
                var n = e;
                Date()[n(233)](/[\d:]+/gi)[2]
            },
            profile: function(...t) {
                var n = e;
                Date()[n(233)](/[\d:]+/gi)[2]
            },
            profileEnd: function(...e) {
                Date().match(/[\d:]+/gi)[2]
            },
            time: function(...t) {
                var n = e;
                Date()[n(233)](/[\d:]+/gi)[2]
            },
            timeLog: function(...t) {
                var n = e;
                Date()[n(233)](/[\d:]+/gi)[2]
            },
            timeEnd: function(...e) {
                Date().match(/[\d:]+/gi)[2]
            },
            timeStamp: function(...t) {
                var n = e;
                Date()[n(233)](/[\d:]+/gi)[2]
            },
            context: function(...t) {
                var n = e;
                Date()[n(233)](/[\d:]+/gi)[2]
            }
        })
    }).apply(e(219) == typeof exports ? this.i ? exports : e(219) == typeof window ? this : globalThis || self || window || top : this);
    const p = document.getElementById(e(293));
    Array[e(257)][e(197) + "nc"] = async function(t = function() {}) {
        var n = e;
        for (let e = 0; e < this[n(239)]; e++) await t(this[e], e, this[n(239)]);
        return null
    }, Array[e(257)][e(288)] = async function(t = function() {}) {
        var n = e,
            o = this;
        for (let e = 0; e < o[n(239)]; e++) o[e] = await t(o[e], e, o[n(239)]);
        return o
    }, l = 0, c = document.getElementById("Songs_");
    const m = new Audio;

    function h() {
        var e = ["formate", "TED", "split", "innerHTML", "type", "duration", "repeat", "URL", "mapAsync", "audio", "Skip", "assign", "className", "chooseFile", "Enter volu", "40ZrktiR", "rgb(", "fillStyle", "innerWidth", "currentTim", "file", "isAsync", "2873052ihhgmG", "stener", "abort", "AsyncFunct", "NOT SUPPOR", "height", "addEventLi", "size", "forEach", "push", "Shuffle", "5BXcMlF", "ById", "includes", "fftSize", "map", "fillRect", "forEachAsy", "width", "2239692OFlANm", "getContext", "name", "loadend", "off", "progress", "filter", "3228507JKSaSR", "inCount", "volume", "pop", "TextAl", "files", "append", "error", "result", "random", "getByteFre", "button", "frequencyB", "undefined", "innerHeigh", "createMedi", "total", "aElementSo", "loop:", "src", "pause", "hrough", "change", "shuffle", "ace", "floor", "constructo", "match", "quencyData", "input", " file exte", "destinatio", "onclick", "length", '" is not a', "getElement", "span", "load", "createElem", "toString", "then", "href", "Cant forma", "createAnal", "toFixed", "title", "isArray", 'ntsion:\n"', '" button i', "87969ZAwmKG", 'The "', "prototype", "ent", "style", "readAsData", "function", "Previous", "canvas", "onended", "indexOf", "play", "myBar", "connect", "join", " supported", "loop", "innerText", "t given co", "2604776rdqPlh", "3011772XUihlc", "yser", "201188lJwZXE", "oncanplayt", "split_repl"];
        return (h = function() {
            return e
        })()
    }
    d = [], m[e(208)] = .3, [
        [e(190), () => (d[e(229)](), m.pause(), i())],
        ["play all", i],
        [e(290), () => {
            m.currentTime = m.duration - .1
        }],
        [e(262), () => {
            var t = e;
            l -= 2, m[t(177) + "e"] = m[t(285)] - .1
        }],
        [e(266), () => m.play()],
        ["pause", () => m[e(226)]()],
        ["loop", function(t) {
            var n = e;
            m[n(271)] = !m.loop, t.innerText = n(224) + (m[n(271)] ? "on" : n(203))
        }],
        [e(208), () => {
            var t = e;
            m[t(208)] = prompt(t(294) + "me", "50") / 100
        }]
    ][e(188)]((t => {
        var n = e,
            o = n(261) == typeof t[1] ? t[1] : function() {
                var e = n;
                alert(e(256) + t[0] + (e(254) + "s W.I.P"))
            },
            r = document["createElem" + n(258)](n(217));
        r[n(272)] = t[0], r[n(238)] = o, c[n(212)](r)
    })), m[e(278) + e(227)] = t => {
        var n, o, r, a, s, i, l, c, d, u, p, h, f = e;
        m[f(266)]();
        let g = m;
        o = (n = new AudioContext)[f(221) + f(223) + "urce"](g), r = n[f(249) + f(276)](), (a = document[f(241) + "ById"](f(263)))[f(198)] = window[f(176)], a[f(185)] = window[f(220) + "t"], s = a[f(200)]("2d"), o[f(268)](r), r[f(268)](n[f(237) + "n"]), r[f(194)] = 256, i = r[f(218) + f(207)], l = new Uint8Array(i), c = a[f(198)], d = a[f(185)], u = c / i * 2.5, h = 0, g[f(266)](),
            function e() {
                var t, n, o, a = f;
                for (requestAnimationFrame(e), h = 0, r[a(216) + a(234)](l), s[a(175)] = "#000", s[a(196)](0, 0, c, d), t = 0; t < i; t++) n = (p = l[t]) + t / i * 25 - 100, o = t / i * 250, 50, s[a(175)] = a(296) + n + "," + o + ",50)", s[a(196)](h, d - p, u, p), h += u + 1
            }()
    }, p[e(186) + e(181)](e(228), (t => {
        var n = e;
        (async function(e, t, n = function() {
            return !0
        }) {
            var o = u,
                r = new class {
                    constructor() {
                        this[u(211)] = []
                    }[o(189)](...e) {
                        var t = o;
                        this[t(211)][t(189)](...e)
                    }
                };
            const a = (e => {
                var t = o,
                    n = [];
                for (const o of e) {
                    const e = o[t(201)] ? o.name : t(184) + t(281),
                        r = o[t(284)] ? o.type : "NOT SUPPOR" + t(281),
                        a = o[t(187)] ? o.size : t(184) + t(281);
                    n[t(189)]({
                        file: o,
                        name: e,
                        type: r,
                        size: a
                    })
                }
                return n
            })([...(e && e[o(211)] ? e[o(211)] : 0) || p.files]);
            return r[o(211)] = await a[o(205)](n)[o(288)]((async(e, t, n) => {
                var r, a, s, i, l = o;
                const {
                    file: c,
                    name: d,
                    type: p,
                    size: m
                } = e, h = new FileReader;
                return a = (r = await new Promise((e => {
                    var t = u;

                    function n(t) {
                        var n, o = u,
                            r = [d, t[o(284)] + ":", (t.loaded / t[o(222)] * 100)[o(250)](2) + "%"];
                        document[o(241) + o(192)](o(210))[o(283)] = r[0], document[o(241) + "ById"](o(267))[o(259)].width = r[2], t[o(284)], o(243) === t.type && (n = h[o(214)], e(n))
                    }
                    var o, r, a = document[t(244) + t(258)](t(242));
                    a.className = t(178), a.innerHTML = d, a.id = d, (o = document[t(244) + t(258)](t(242)))[t(292)] = "progress", o.innerHTML = "0%", o.id = d + "%", (r = h)[t(186) + t(181)]("loadstart", n), r[t(186) + t(181)](t(243), n), r[t(186) + t(181)](t(202), n), r[t(186) + t(181)](t(204), n), r[t(186) + "stener"](t(213), n), r[t(186) + t(181)](t(182), n), h[t(260) + t(287)](c)
                })))[l(282)](","), s = r.match(/(data):([-\w]+\/[-\w]+);(\w+)/), dt = a, "NOT SUPPOR" + l(281) == p && (i = d[l(282)](".")[l(209)]()[l(282)]("(")[0], new Error(p + (l(236) + l(253)) + i + (l(240) + l(270) + " file extentsion")).name = p), {
                    file: c,
                    name: d,
                    type: p,
                    size: m,
                    data: dt,
                    o: s,
                    b: e
                }
            })), o(261) == typeof t && t(r), {
                files: r
            }
        })(!1, !1, (e => e[n(284)][n(193)](n(289))))[n(246)]((e => {
            var t = n;
            e[t(211)][t(211)][t(188)]((e => {
                var n = t,
                    o = document[n(244) + n(258)](n(242));
                o.innerHTML = e[n(201)], o[n(247)] = "", o[n(238)] = function(t) {
                    var o = n;
                    m.pause(), m.src = e.o[o(235)]
                }, d[n(189)]({
                    name: e[n(201)],
                    t: e.o.input
                })
            }))
        }), console[n(213)])
    }))
}

function log_(e, t) {
    new CustomLog(e).log(t)
}
getClose = function(e) {
        return e.map((e => (e.dist = getDistance(...e._lineTo, canvas.width / 2, canvas.height / 2), e))).sort(((e, t) => e.dist - t.dist))[0]
    }, getMid = function(e = [{
        x: 0,
        y: 0
    }]) {
        var t = e.length,
            [n, o] = [0, 0];
        return e.forEach((e => {
            n += e.x, o += e.y
        })), {
            x: n / t,
            y: o / t
        }
    },
    function() {
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
                    this.title.body = e
                }
                setTitleStyle({
                    color: e,
                    size: t
                }) {
                    void 0 !== e && (this.title.color = e), void 0 !== t && (this.title.size = t)
                }
                setBodyStyle({
                    color: e,
                    size: t
                }) {
                    void 0 !== e && (this.body.color = e), void 0 !== t && (this.body.size = t)
                }
                log(e = "") {
                    console.log(`%c${this.title.body} | %c${e}`, `color: ${this.title.color}; font-weight: bold; font-size: ${this.title.size};`, `color: ${this.body.color}; font-weight: bold; font-size: ${this.body.size}; text-shadow: 0 0 5px rgba(0,0,0,0.2);`)
                }
            }
        })
    }(window.globalRoot || window), draw = function(e) {
        try {
            if (e.shape && "undefined" != e.shape && !e.custom) {
                var {
                    x: t,
                    y: n
                } = getMid(this._lineTo_.map((e => ({
                    x: e[0],
                    y: e[1]
                }))));
                let e = canvas.getContext("2d");
                e.beginPath(), e.custom = !0;
                var o = e.createLinearGradient(0, 0, 170, 0);
                o.addColorStop("0", "magenta"), o.addColorStop("0.5", "blue"), o.addColorStop("1.0", "red"), e.strokeStyle = o, e.lineWidth = 5, e.moveTo(t, n), e.arc(t, n, 50, 0, 2 * Math.PI), e.stroke(), e.custom = !1
            }
        } catch (e) {}
    }, set_convar = function(e, t) {
        console.log("Set", e, t), input.set_convar(e, t)
    }, execute = function(e) {
        var t = (e.match(/(?<name>[\w_]+) ?(?<index>[0-9]+)? ?(?<value>(0x|#)[\w]+)\t?(?<for>.+)?/i) || {
                groups: {}
            }).groups,
            n = (e.split(" "), findColor(t));
        if (null != n) {
            colors[otherStuff.colors[n].for] = "#" + t.value.match(/(0x|#)(?<hex>[\w]+)/i).groups.hex, otherStuff.colors[n].prev = otherStuff.colors[n].new || otherStuff.colors[n].default, otherStuff.colors[n].new = t.value.toUpperCase();
            let e = otherStuff.colors[n];
            console.log("Set", e.for, "from", e.prev, "To", e.new, {
                item: e,
                res: t
            })
        }
        input.execute(e)
    };
class Build {
    buildSet(e) {
        this.Build = e;
        var t = 0;
        this.BuildPath = "";
        var n = e.regen,
            o = e.health,
            r = e.body,
            a = e.bspeed,
            s = e.pen,
            i = e.dmg,
            l = e.reloads,
            c = e.speed;
        for (let e = 0; e <= 7; e++) e < i && t < 34 && (this.BuildPath += "6", t++), e < a && t < 34 && (this.BuildPath += "4", t++), e < s && t < 34 && (this.BuildPath += "5", t++), e < l && t < 34 && (this.BuildPath += "7", t++);
        for (let e = 0; e <= 7; e++) e < c && t < 34 && (this.BuildPath += "8", t++);
        for (let e = 0; e <= 7; e++) e < n && t < 34 && (this.BuildPath += "1", t++), e < o && t < 34 && (this.BuildPath += "2", t++), e < r && t < 34 && (this.BuildPath += "3", t++)
    }
}
class bool {
    constructor(e) {
        e && this.toggle()
    }#
    e = !1;
    toggle() {
        this.#e = !this.#e
    }
    get status() {
        return this.#e
    }
    set status(e) {
        this.#e = !!e
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
const {
    win1: win1,
    win2: win2,
    win3: win3,
    win4: win4,
    hh: hh,
    jj: jj,
    dd: dd
} = [null, null, null, null, function(e, t) {
    localStorage.setItem(e, t)
}, function(e) {
    return localStorage.getItem(e)
}, function(e) {
    let t = {};
    return e.forEach((function(e) {
        t[e] || (t[e] = !0)
    })), Object.keys(t)
}], AutoUpgrade = new bool(1), AutoReload = new bool(1), Firing = new bool, AutoSpawn = new bool(1), A = document.querySelector("d-base"), bootstrapCss = new element("link").set("rel", "stylesheet").set("href", "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"), jqueryUiCss = new element("link").set("rel", "stylesheet").set("href", "https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.css"), jqueryScript = new element("script", {
    integrity: "sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=",
    crossorigin: "anonymous"
}).set("src", "https://code.jquery.com/jquery-3.7.1.js"), jqueryUiScript = new element("script").set("src", "https://code.jquery.com/ui/1.12.1/jquery-ui.js"), bootstrapScript = new element("script").set("src", "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"), jqueryMinScript = new element("script").set("src", "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"), style = new element("style").set("innerHTML", "\n     .stat {\n            height: 100%;\n            width: 10%;\n\t\t\t\t\t\ttransition:width 2s\n        }\n\n        .stats {\n            height: 10px;\n            width: 50%;\n        }\n\n        body {\n            color: white;\n            -ms-overflow-style: none;\n            /* IE and Edge */\n            scrollbar-width: none;\n            /* Firefox */\n            background-color: rgb(54, 57, 63);\n            overflow-x: hidden;\n        }\n\n        img,\n        button,\n        .menu {\n            border: 2px solid red;\n            border-radius: 8px;\n            border-style: solid;\n            border-width: medium;\n        }\n        #MusicPlayer {\n            border-radius: 8px;\n            border-radius: 8px;\n            border-style: solid;\n        }\n        button {\n            color: rgb(27, 51, 99)\n        }\n\n        input {\n            /*border-width: 1px;*/\n            border: 2px dashed rgb(87, 167, 12);\n            color: white;\n            background: rgba(0, 0, 0, 0)\n        }\n\n        .name {\n            color: red\n        }\n\n        .Status {\n            color: blue\n        }\n\n        .server_nick {\n            color: white\n        }\n\n        body::-webkit-scrollbar {\n            display: none;\n        }\n\n        .hidden {\n            display: none;\n        }\n\n        .dropdown {\n            display: inline-block;\n            position: relative;\n        }\n\n        #Songs_2 {\n            max-height: 444px;\n        }\n\n        #thefile {\n            position: fixed;\n            top: 10px;\n            left: 10px;\n            z-index: 100;\n        }\n\n        #canvas {\n            position: fixed;\n            left: 0;\n            top: 0;\n            width: 100%;\n            height: 100%;\n            z-index: -1;\n        }\n\n        audio {\n            position: fixed;\n            left: 10px;\n            bottom: 10px;\n            width: calc(100% - 20px);\n        }\n\n        .center {\n            width: 100%;\n            color: red;\n            align-items: center;\n        }\n\n        input[type=button] {\n            border: 2px solid rgb(255, 255, 255);\n            color: white;\n        }\n\n        * {\n            box-sizing: border-box;\n        }\n\n        #myInput {\n            background-image: url('/css/searchicon.png');\n            background-position: 10px 12px;\n            background-repeat: no-repeat;\n            width: 100%;\n            font-size: 16px;\n            padding: 12px 20px 12px 40px;\n            border: 1px solid #ddd;\n            margin-bottom: 12px;\n        }\n\n        #myUL {\n            list-style-type: none;\n            padding: 0;\n            margin: 0;\n        }\n\n        #myUL li div {\n            border: 1px solid #ddd;\n            margin-top: -1px;\n            /* Prevent double borders */\n            background-color: rgba(238, 238, 238, 0.192);\n            ;\n            padding: 12px;\n            text-decoration: none;\n            font-size: 18px;\n            color: black;\n            display: block\n        }\n\n        #myUL li a {\n            border: 1px solid #ddd;\n            margin-top: -1px;\n            /* Prevent double borders */\n            background-color: rgba(238, 238, 238, 0.192);\n            ;\n            padding: 12px;\n            text-decoration: none;\n            font-size: 18px;\n            color: black;\n            display: block\n        }\n\n        #myUL li div {\n            cursor: pointer;\n            border: 1px solid #ddd;\n            margin-top: -1px;\n            /* Prevent double borders */\n            background-color: rgba(238, 238, 238, 0.192);\n            ;\n            padding: 12px;\n            text-decoration: none;\n            font-size: 18px;\n            color: black;\n            display: block\n        }\n\n        #myUL li a:hover:not(.header) {\n            background-color: rgb(238, 238, 238);\n        }\n        #myUL li div div input[type=button]:hover:not(.header) {\n            background-color: rgb(238, 238, 238);\n            color:black;\n        }\n"), bodyContent = new element("div").set("className", "my-game-container").append(new element("div", {
    id: "CustomSoungs"
}).set("className", "menu").append(new element("a").set("innerText", " "), new element("h2").set("innerText", "play custom songs"), new element("input").set("type", "file").set("multiple", "").set("id", "chooseFile"), new element("br"), new element("br"), new element("div").set("id", "myProgress").append(new element("div").set("id", "myBar").append(new element("span").set("id", "TextAl"))), new element("br"), new element("div").set("id", "Files_"), new element("div").set("id", "Songs_"), new element("div").set("id", "Songs_2"), new element("canvas").set("id", "canvas")), new element("br"), new element("hr"), new element("br"), new element("div", {
    id: "CustomSoungs"
}).set("className", "menu").append(new element("center").append(new element("iframe", {
    id: "MusicPlayer",
    src: getV("LP") || ""
}).set("allowfullscreen", !0), element.br, element.br, new element("input", {
    id: "playlistInput"
}), new element("script").set("innerHTML", `\n             ${setElement.toString()};\n             document.getElementById('playlistInput').onchange=\n             function({target,isTrusted,target:{parentNode:{getElementById}}}){\n                 console.log("Change")\n                 var url=\`https://www.youtube.com/embed/\${setElement(target.value)}?\${[...(new URL(target.value)).searchParams].map(e=>e.join('=')).join('&')}&autoplay=1\`\n                 document.getElementById('MusicPlayer').src=url\n                 window.getV('LP',url)\n             }`))), new element("hr"), new element("div").set("className", "menu").set("id", "menu").append(new element("h2").set("innerText", "Menu-")), new element("br"), new element("hr"), new element("br"), new element("div").set("className", "menu").set("id", "Builds_").append(new element("style").set("innerHTML", "\n            /* CSS styles for .regen, .health, .body, etc. */\n             .regen {\n                background: #EEB690;\n            }\n             .health {\n                background: #EC6CF0;\n            }\n             .body {\n                background: #9A6CF0;\n            }\n             .bspeed {\n                background: #6C96F0;\n            }\n             .pen {\n                background: #F0D96C;\n            }\n             .dmg {\n                background: #F06C6C;\n            }\n             .reloads {\n                background: rgb(152, 240, 108);\n            }\n             .speed {\n                background: #6CF0EC;\n            }\n        "), new element("h2").set("innerText", "Builds-"), new element("div").set("id", "stats_show").append(new element("div").append(new element("span").set("innerText", "Regen:"), new element("span").set("className", "regen_")).append(new element("div").set("className", "stats").append(new element("div").set("className", "stat regen"))), new element("div").append(new element("span").set("innerText", "Health:"), new element("span").set("className", "health_")).append(new element("div").set("className", "stats").append(new element("div").set("className", "stat health"))), new element("div").append(new element("span").set("innerText", "Body:"), new element("span").set("className", "body_")).append(new element("div").set("className", "stats").append(new element("div").set("className", "stat body"))), new element("div").append(new element("span").set("innerText", "BSpeed:"), new element("span").set("className", "bspeed_")).append(new element("div").set("className", "stats").append(new element("div").set("className", "stat bspeed"))), new element("div").append(new element("span").set("innerText", "Pen:"), new element("span").set("className", "pen_")).append(new element("div").set("className", "stats").append(new element("div").set("className", "stat pen"))), new element("div").append(new element("span").set("innerText", "Dmg:"), new element("span").set("className", "dmg_")).append(new element("div").set("className", "stats").append(new element("div").set("className", "stat dmg"))), new element("div").append(new element("span").set("innerText", "Reload:"), new element("span").set("className", "reloads_")).append(new element("div").set("className", "stats").append(new element("div").set("className", "stat reloads"))), new element("div").append(new element("span").set("innerText", "Speed:"), new element("span").set("className", "speed_")).append(new element("div").set("className", "stats").append(new element("div").set("className", "stat speed")))), new element("hr"), new element("input").set("id", "search_").set("placeholder", "Search for names..").set("title", "Type in a name"), new element("br"), new element("br"), new element("ul").set("id", "myUL"))), script = new element("script").set("innerHTML", '\n    console.log(\'Test Passed\')\n    document.getElementById(\'search_\').onkeyup=function () {\n        // Your function code here\n        var input, filter, ul, li, a, i, txtValue;\n        input = document.getElementById("search_");\n        filter = input.value.toUpperCase();\n        ul = document.getElementById("myUL");\n        li = ul.getElementsByTagName("li");\n        for (i = 0; i < li.length; i++) {\n            try{\n                a = li[i].getElementsByTagName("div")[0];\n                txtValue = a.textContent || a.innerText;\n                if (txtValue.toUpperCase().indexOf(filter) > -1) {\n                    li[i].style.display = "";\n                } else {\n                    li[i].style.display = "none";\n                }\n            }catch(err){console.log(a)}\n        }\n    };\n'), htmlContent = new element("html").append(new element("head").append(bootstrapCss, jqueryUiCss, jqueryScript, jqueryUiScript, bootstrapScript, jqueryMinScript, style), new element("body").append(bodyContent, script, new element("script").set("innerHTML", MySrc.toString() + "\nMySrc();")));

function download(e, t) {
    const n = new Blob([e], {
            type: `text/${t}`
        }),
        o = URL.createObjectURL(n),
        r = document.createElement("a");
    r.href = o, r.download = `file.${t}`, document.body.appendChild(r), r.click(), URL.revokeObjectURL(o), document.body.removeChild(r)
}
const _myWin = startwin("myWin_");

function updateFunction() {
    log_("Screen:", A.screen), extended.update && extended.update(A.screen)
}
globalRoot._myWin = _myWin, addEventListener("beforeunload", (function() {
        _myWin.close()
    })), globalRoot.startwin_ = startwin, globalRoot.checkWin_ = checkWin,
    function() {
        let e = "";
        ! function t() {
            const n = A.screen;
            n !== e && (updateFunction(), e = n), requestAnimationFrame(t)
        }()
    }(), updateFunction();
class Player {
    static down(e) {
        input.key_down(e)
    }
    static up(e) {
        input.key_up(e)
    }
    static get A() {
        return document.querySelector("d-base")
    }
    static send(e) {
        input.key_down(e), input.key_up(e)
    }
    static get nickname() {
        return get("username-input").value
    }
    static get onGame() {
        return "game" == this.A.screen
    }
    static get onStats() {
        return "stats" == this.A.screen
    }
    static get canSpawn() {
        return "home" == this.A.screen
    }
    static get screen() {
        return this.A.screen
    }
    static wfs(e) {
        let t = () => this.screen;
        return t == e || new Promise((n => {
            let o = setInterval((() => {
                t() == e && (n(!0), clearInterval(o))
            }), 1)
        }))
    }
    static async spawn(e) {
        return this.onStats && (this.send(13), await this.wfs("home")), input.try_spawn(this.nickname), await this.wfs("game"), !0
    }
}
const keys = e => Object.keys(e || this);

function findColor(e) {
    const t = e.index,
        n = e.name;
    for (let e = 0; e < otherStuff.colors.length; e++) {
        let {
            index: o,
            name: r
        } = otherStuff.colors[e];
        if (o == t && n == r) return e
    }
}
_Player = Player, document.getElementsByClassName("aa left")[0].remove(), document.getElementsByClassName("aa bottom")[0].remove(), otherStuff = {
    toggles: [{
        name: "net_predict_movement",
        bool: "true",
        for: "Enable clientside prediction for movement"
    }, {
        name: "ren_achievements",
        bool: "true",
        for: "Render achievements"
    }, {
        name: "ren_background",
        bool: "true",
        for: "Render background[6]"
    }, {
        name: "ren_cache_grid",
        bool: "true",
        for: "Cache grid on separate canvas"
    }, {
        name: "ren_context_reinitialization",
        bool: "true",
        for: "Reinitialize contexts if FPS is too low[7]"
    }, {
        name: "ren_debug_collisions",
        bool: "false",
        for: "Render collidable debug info[8]"
    }, {
        name: "ren_debug_info",
        bool: "false",
        for: "Render some debug info on the server stats test"
    }, {
        name: "ren_fps",
        bool: "false",
        for: "Render FPS"
    }, {
        name: "ren_health_bars",
        bool: "true",
        for: "Render health bars"
    }, {
        name: "ren_names",
        bool: "true",
        for: "Render names"
    }, {
        name: "ren_pattern_grid",
        bool: "true",
        for: "Use canvas createPattern for grid, it's faster but looks slightly worse"
    }, {
        name: "ren_raw_health_values",
        bool: "false",
        for: "Render raw health bar values"
    }, {
        name: "ren_scoreboard",
        bool: "true",
        for: "Render scoreboard"
    }, {
        name: "ren_scoreboard_names",
        bool: "true",
        for: "Render scoreboard names"
    }, {
        name: "ren_solid_background",
        bool: "true",
        for: "Render background as solid color, without the grid"
    }, {
        name: "ren_stats",
        bool: "true",
        for: "Render stat upgrades"
    }, {
        name: "ren_stroke_soft_color",
        bool: "true",
        for: "Renders strokes as a darker shade of fill color"
    }, {
        name: "ren_ui",
        bool: "true",
        for: "Render UI layer"
    }, {
        name: "ren_upgrades",
        bool: "true",
        for: "Render class upgrades"
    }, {
        name: "ui_prevent_right_click",
        bool: "true",
        for: "Prevent right click from triggering context menu"
    }],
    colors: [{
        name: "net_replace_color",
        index: "0",
        default: "0x555555",
        for: "Smasher and Dominator Bases"
    }, {
        name: "net_replace_color",
        index: "1",
        default: "0x999999",
        for: "Barrels"
    }, {
        name: "net_replace_color",
        index: "2",
        default: "0x00B1DE",
        for: "Body (You)"
    }, {
        name: "net_replace_color",
        index: "3",
        default: "0x00B1DE",
        for: "Blue Team"
    }, {
        name: "net_replace_color",
        index: "4",
        default: "0xF14E54",
        for: "Red Team"
    }, {
        name: "net_replace_color",
        index: "5",
        default: "0xBE7FF5",
        for: "Purple Team"
    }, {
        name: "net_replace_color",
        index: "6",
        default: "0x00F46C",
        for: "Green Team"
    }, {
        name: "net_replace_color",
        index: "6",
        default: "0xD68163",
        for: "Green Team (Making Green Team Brown, like it was formerly)"
    }, {
        name: "net_replace_color",
        index: "7",
        default: "0x89FF69",
        for: "Shiny Polygons"
    }, {
        name: "net_replace_color",
        index: "8",
        default: "0xFFE869",
        for: "Square"
    }, {
        name: "net_replace_color",
        index: "9",
        default: "0xFC7677",
        for: "Triangle"
    }, {
        name: "net_replace_color",
        index: "10",
        default: "0x768DFC",
        for: "Pentagon"
    }, {
        name: "net_replace_color",
        index: "11",
        default: "0xFF77DC",
        for: "Crashers"
    }, {
        name: "net_replace_color",
        index: "12",
        default: "0xFFE869",
        for: "Arena Closers/Neutral Dominators/Defender Ammo"
    }, {
        name: "net_replace_color",
        index: "13",
        default: "0x44FFA0",
        for: "Scoreboard"
    }, {
        name: "net_replace_color",
        index: "14",
        default: "0xBBBBBB",
        for: "Maze Walls"
    }, {
        name: "net_replace_color",
        index: "15",
        default: "0xF14E54",
        for: "Others (FFA)"
    }, {
        name: "net_replace_color",
        index: "16",
        default: "0xFBC477",
        for: "Summoned Squares (Necromancer)"
    }, {
        name: "net_replace_color",
        index: "17",
        default: "0xC0C0C0",
        for: "Fallen Bosses"
    }, {
        name: "ren_background_color",
        default: "0xCDCDCD",
        for: "Base color for the background"
    }, {
        name: "ren_border_color",
        default: "0x000000",
        for: "The area outside the map (overlayed on top of the inside the map color, semi-transparent)"
    }, {
        name: "ren_minimap_background_color",
        default: "0xCDCDCD",
        for: "Minimap"
    }, {
        name: "ren_minimap_border_color",
        default: "0x555555",
        for: "Minimap Border"
    }, {
        name: "ren_health_fill_color",
        default: "0x85E37D",
        for: "Health Bar"
    }, {
        name: "ren_health_background_color",
        default: "0x555555",
        for: "Health Bar Background"
    }, {
        name: "ren_xp_bar_fill_color",
        default: "0xFFDE43",
        for: "EXP Bar"
    }, {
        name: "ren_score_bar_fill_color",
        default: "0x43FF91",
        for: "Score Bar"
    }, {
        name: "ren_bar_background_color",
        default: "0x000000",
        for: "EXP/Score Bar/Scoreboard Background"
    }, {
        name: "ren_stroke_solid_color",
        default: "0x555555",
        for: "Outlines (For ren_stroke_soft_color false)"
    }, {
        name: "ren_grid_color",
        default: "0x000000",
        for: "Grid Lines (Note: Actual Results Vary, seeing as the border is different for each section)"
    }]
}, colors = {}, otherStuff.colors.forEach((e => {
    colors[e.for] = "#" + e.default.split("0x").pop()
})), async function() {
    var e = class {
        constructor({
            type: e,
            default_: t,
            name: n,
            command: o
        }) {
            t = Settings[n] || t;
            var r = "";
            switch (e) {
                case "toggle":
                    r = "checkbox";
                    break;
                case "color":
                    r = "color"
            }
            var a = new element("label").set("for", n).set("innerText", n + ": "),
                s = new element("input", {
                    type: r,
                    id: n,
                    name: o
                }).set("onchange", (function(e) {
                    var t = e.target,
                        a = "checkbox" == r ? t.checked : e.target.value;
                    console.log({
                        name: n,
                        value: a,
                        target: t,
                        e: e,
                        type_: r,
                        command: o
                    }), Settings[n] = {
                        value: a
                    }, execute(`${o} ${a}`)
                }));
            t && ("checkbox" == r && s.set("checked", t), s.set("value", t)), this.input = s, this.label = a
        }
    };
    console.log("Loading builds");
    const t = await fetch("https://raw.githubusercontent.com/naquangaston/HostedFiles/main/builds.json").then((e => e.json())),
        n = Object.keys(t).map((e => [...new Set(Object.keys(t[e]._builds).map((n => t[e]._builds[n].p)))]));

    function o(e = {}) {
        let t = e;
        var n = 0,
            o = [];
        for (let e in t) "MAX" == t[e] && (t[e] = "7"), Number.isNaN(1 * t[e]) ? (o.push(e), console.log("Skipping", e, "key")) : n += 1 * t[e];
        var r = 33 - n,
            a = Math.floor(r / o.length);
        o.forEach((e => {
            t[e] = a
        })), n = 0;
        for (let e in t) Number.isNaN(1 * t[e]) || (n += 1 * t[e]);
        if (0 != (r = 33 - n))
            for (let e = 0; e < r; e++)
                for (let e = 0; e < Object.keys(t).length; e++) {
                    r = 33 - n;
                    var s = Object.keys(t)[e];
                    t[s] < 7 && r && o.includes(s) && (n += 1, t[s] += 1, console.log("Added to", s))
                }
        return Object.keys(t).forEach((e => {
            t[e] = 1 * t[e]
        })), t
    }
    console.log({
            BuildsName: n,
            Builds: t
        }),
        function() {
            var [e, n] = ["map", "build"];
            for (let a in t) {
                var r = t[a];
                for (let s in r) "object" == typeof t[a][s] && (t[a][s] = t[a][s][e]((e => (e[n] = o(e[n]), e))))
            }
        }();

    function r(e, t, {
        desc: n,
        line: o,
        space: r,
        befors: a,
        afters: s
    }) {
        var i = document.createElement("button");
        i.innerText = e, i.onclick = t;
        var l, c = (l = "span", document.createElement(l));
        c.innerText = n || "No description.", c.className = "menuDesc", o && d.append(document.createElement("br")), d.append(i), d.append(c)
    }

    function a(e, t) {
        setTimeout((function() {
            input.key_down(32)
        }), 1e3 * e), setTimeout((function() {
            input.key_up(32)
        }), 1e3 * e + t)
    }

    function s(e, t, {
        defaut: n,
        desc: o,
        line: r,
        space: a,
        befors: s,
        afters: i
    }) {
        var l = document.createElement("label");
        l.innerText = e, l.for = e;
        var c = document.createElement("input");
        c.type = "checkbox", c.name = e, c.onclick = t, c.checked = !!n;
        var u, p = (u = "span", document.createElement(u));
        p.innerText = o || "No description.", p.className = "menuDesc", r && d.append(document.createElement("br")), d.append(l), d.append(c), d.append(p)
    }
    let i = _myWin;
    for (; !i.window.document.getElementById("menu");) await sleep(0);
    _upgrade = GM_getValue("u") || "";
    var l, c, d = i.window.document.getElementById("menu");
    i.window.getV = getV,
        function() {
            Array.prototype.map_ = function(e) {
                const t = ["length"],
                    n = this;
                for (let o = 0; o < this[t[0]]; o++) n[o] = e(this[o], o);
                return n
            }, addEventListener("beforeunload", (function() {
                GM_setValue("Settings", Settings)
            }));
            var t = new element("div", {
                id: "toggles"
            }).append(new element("h1").set("innerText", "Toggles")).append(element.br);
            otherStuff.toggles.map((t => new e({
                name: t.for,
                type: "toggle",
                default_: "true" == t.bool,
                command: `${t.name} `
            }))).forEach((e => {
                t.append(e.label).append(e.input).append(element.br)
            }));
            var n = new element("div", {
                id: "colors"
            }).append(new element("h1").set("innerText", "Styles")).append(element.br);
            otherStuff.colors.map((t => new e({
                name: t.for,
                type: "color",
                default_: "#" + (t.new || t.default).match(/0x(?<o>.+)/i).groups.o,
                command: `${t.name}${t.index?" "+t.index:" "}`
            }))).forEach((e => {
                n.append(e.label).append(e.input).append(element.br)
            })), t.appendTo(d), n.appendTo(d)
        }(), r("Reset stats", (function() {
            GM_setValue("u", "")
        }), {
            desc: "Only use if your (game reloads without finish loading) or if game doesnt load."
        }), r("Fix Game", (function() {
            var e = function({
                gamemode: e,
                name: t
            }) {
                return {
                    gamemode: e,
                    name: t
                }
            }(localStorage);
            for (let e in localStorage) localStorage.removeItem(e);
            localStorage.clear();
            for (let t in e) localStorage.setItem(t, e[t]);
            location.href = location.href
        }), {
            desc: "Only use if your (game reloads without finish loading) or if game doesnt load."
        }), r("Remove-Ads", RemoveAds, {
            line: !0,
            desc: "Use to remove ads that may cause gae lag"
        }), r("Stack", (function() {
            a(0, 100), a(.75, 200), a(1.5, 750), setTimeout((function() {
                input.key_down(69)
            }), 2e3)
        }), {
            line: !0,
            desc: "stack preditor bullets max reload requried"
        }), s("AutoReload", (function() {
            AutoReload.toggle(), log_("AutoReloads", AutoReload.status)
        }), {
            defaut: AutoReload.status,
            line: !0,
            desc: "Auto Reloads page is loading take too long.(10 Seconds)"
        }), s("AutoUpgrade", (function() {
            AutoUpgrade.toggle(), log_("AutoUpgrade", AutoUpgrade.status)
        }), {
            defaut: AutoUpgrade.status,
            line: !0,
            desc: "AutoUpgrade you stats when you spawn into the game"
        }), s("AutoSpawn", (function() {
            AutoSpawn.toggle(), log_("AutoSpawn", AutoSpawn.status)
        }), {
            defaut: AutoSpawn.status,
            line: !0,
            desc: "Just auto respawn"
        }), console.log({
            AutoSpawn: AutoSpawn,
            AutoUpgrade: AutoUpgrade,
            AutoReload: AutoReload
        }), setInterval((() => {
            AutoReload.status && ["loading", "captcha"].includes(Player.screen) && (alert("Auto reload is on\n page will reload in 5 seconds"), setTimeout((() => {
                location.reload()
            }), 5e3))
        }), 1e4), _window = window;
    class u {
        static createCanvas() {
            const e = document.createElement("canvas");
            return e.className = "CanvasKit-bypass", e.style.pointerEvents = "none", e.style.position = "fixed", e.style["z-index"] = 1, e.style.top = "0px", e.style.left = "0px", e.style.right = "0px", e.style.bottom = "0px", e.style.width = "100%", e.style.height = "100%", e
        }
        static hookRAF(e) {
            requestAnimationFrame = new Proxy(requestAnimationFrame, {
                apply: (t, n, o) => (e(), Reflect.apply(t, n, o))
            })
        }
        static hookCtx(e, t) {
            const n = CanvasRenderingContext2D.prototype;
            n[e] = new Proxy(n[e], {
                apply: (e, n, o) => ("CanvasKit-bypass" !== n.canvas.className && t(e, n, o), Reflect.apply(e, n, o))
            })
        }
        static overrideCtx(e, t) {
            const n = CanvasRenderingContext2D.prototype;
            n[e] = new Proxy(n[e], {
                apply: (e, n, o) => "CanvasKit-bypass" !== n.canvas.className ? t(e, n, o) : Reflect.apply(e, n, o)
            })
        }
        static hookPolygon(e, t) {}
    }
    class p extends EventTarget {
        emit(e, ...t) {
            this.dispatchEvent(new CustomEvent(e, {
                detail: t
            }))
        }
        on(e, t) {
            this.addEventListener(e, (e => Reflect.apply(t, this, e.detail)))
        }
        once(e, t) {
            this.addEventListener(e, (e => Reflect.apply(t, this, e.detail)), {
                once: !0
            })
        }
        off(e, t) {
            this.removeEventListener(e, t)
        }
    }
    class m {
        x;
        y;
        constructor(e, t) {
            this.x = e, this.y = t
        }
        static len(e) {
            return Math.sqrt(e.x * * 2 + e.y * * 2)
        }
        static round(e) {
            return new m(Math.round(e.x), Math.round(e.y))
        }
        static scale(e, t) {
            return new m(e * t.x, e * t.y)
        }
        static unscale(e, t) {
            return new m(t.x / e, t.y / e)
        }
        static add(e, t) {
            return new m(e.x + t.x, e.y + t.y)
        }
        static subtract(e, t) {
            return new m(e.x - t.x, e.y - t.y)
        }
        static multiply(e, t) {
            return new m(e.x * t.x, e.y * t.y)
        }
        static divide(e, t) {
            return new m(e.x / t.x, e.y / t.y)
        }
        static distance(e, t) {
            return m.len(m.subtract(e, t))
        }
        static centroid(...e) {
            const t = e.reduce(((e, t) => m.add(e, t)), new m(0, 0));
            return m.scale(1 / e.length, t)
        }
        static radius(...e) {
            const t = m.centroid(...e);
            return e.reduce(((e, n) => e + m.distance(t, n)), 0) / e.length
        }
    }! function(e) {
        e[e.Player = 0] = "Player", e[e.Bullet = 1] = "Bullet", e[e.Drone = 2] = "Drone", e[e.Trap = 3] = "Trap", e[e.Square = 4] = "Square", e[e.Triangle = 5] = "Triangle", e[e.Pentagon = 6] = "Pentagon", e[e.AlphaPentagon = 7] = "AlphaPentagon", e[e.Crasher = 8] = "Crasher", e[e.UNKNOWN = 9] = "UNKNOWN"
    }(l || (l = {})),
    function(e) {
        e.TeamBlue = "#00b2e1", e.TeamRed = "#f14e54", e.TeamPurple = "#bf7ff5", e.TeamGreen = "#00e16e", e.Square = "#ffe869", e.Triangle = "#fc7677", e.Pentagon = "#768dfc", e.AlphaPentagon = "#768dfc", e.Crasher = "#f177dd", e.NecromancerDrone = "#fcc376"
    }(c || (c = {}));
    const h = new class extends p {#
            t = !1;#
            n;
            constructor() {
                super(), u.hookRAF((() => this.#o()))
            }#
            o() {
                this.#t || void 0 === input || (this.#t = !0, this.#r()), super.emit("frame"), super.emit("frame_end")
            }#
            r() {
                setTimeout((() => super.emit("ready")), 100), this.#n = document.querySelector("d-base").shadowRoot, new MutationObserver(((e, t) => {
                    e.forEach((e => {
                        0 !== e.addedNodes.length && (super.emit("state", this.state), super.emit(`s_${this.state}`))
                    }))
                })).observe(this.#n, {
                    childList: !0
                })
            }
            get state() {
                return this.#n.querySelector(".screen").tagName.slice(2).toLowerCase()
            }
            get inHome() {
                return "home" == this.state
            }
            get inGame() {
                return "game" == this.state
            }
            get inStats() {
                return "stats" == this.state
            }
            get inLoading() {
                return "loading" == this.state
            }
            get isCaptcha() {
                return "captcha" == this.state
            }
        },
        f = new class {#
            a = 1;
            constructor() {
                setInterval((() => {
                    const e = m.divide(w.minimapDim, w.viewportDim),
                        t = m.multiply(e, g.screenToCanvas(new m(innerWidth, innerHeight))),
                        n = g.toArenaUnits(t);
                    this.#a = n.x
                }), 16)
            }
            get size() {
                return this.#a
            }
            scale(e) {
                const t = e => Math.round(this.#a * (e - .5));
                return new m(t(e.x), t(e.y))
            }
            unscale(e) {
                const t = e => e / this.#a + .5;
                return new m(t(e.x), t(e.y))
            }
        },
        g = new class {#
            s = 1;#
            i = !1;
            constructor() {
                Player.wfs("home").then((() => {
                    input.set_convar = new Proxy(input.set_convar, {
                        apply: (e, t, n) => {
                            "ren_solid_background" === n[0] ? this.#i = n[1] : Reflect.apply(e, t, n)
                        }
                    })
                }))
            }
            get windowRatio() {
                return Math.max(innerWidth / 1920, innerHeight / 1080)
            }
            get scalingFactor() {
                return this.#s
            }
            get fov() {
                return this.#s / this.windowRatio
            }
            toArenaUnits(e) {
                return m.round(m.unscale(this.#s, e))
            }
            toCanvasUnits(e) {
                return m.round(m.scale(this.#s, e))
            }
            toArenaPos(e) {
                const t = m.subtract(e, this.screenToCanvas(new m(innerWidth / 2, innerHeight / 2))),
                    n = this.toArenaUnits(t);
                return m.add(n, y.position)
            }
            toCanvasPos(e) {
                const t = m.subtract(e, y.position),
                    n = this.toCanvasUnits(t);
                return m.add(n, this.screenToCanvas(new m(innerWidth / 2, innerHeight / 2)))
            }
            screenToCanvasUnits(e) {
                return e * devicePixelRatio
            }
            canvasToScreenUnits(e) {
                return e / devicePixelRatio
            }
            screenToCanvas(e) {
                return m.scale(devicePixelRatio, e)
            }
            canvasToScreen(e) {
                return m.scale(1 / devicePixelRatio, e)
            }
        },
        w = new class {#
            l = new m(1, 1);#
            c = new m(0, 0);#
            d = new m(1, 1);#
            u = new m(1, 1);#
            p = new m(.5, .5);#
            m = !1;
            constructor() {
                Player.wfs("home").then((() => {
                    input.set_convar("ren_minimap_viewport", "true"), input.set_convar = new Proxy(input.set_convar, {
                        apply: (e, t, n) => {
                            if ("ren_minimap_viewport" !== n[0]) return Reflect.apply(e, t, n);
                            this.#m = n[1]
                        }
                    })
                })), this.#h(), this.#f(), this.#g()
            }
            get minimapDim() {
                return this.#l
            }
            get minimapPos() {
                return this.#c
            }
            get viewportDim() {
                return this.#d
            }
            get viewportPos() {
                return this.#u
            }
            get arrowPos() {
                return this.#p
            }#
            h() {
                u.hookCtx("strokeRect", ((e, t, n) => {
                    const o = t.getTransform();
                    this.#l = new m(o.a, o.d), this.#c = new m(o.e, o.f)
                }))
            }#
            f() {
                u.overrideCtx("fillRect", ((e, t, n) => {
                    const o = t.getTransform();
                    return .1 !== t.globalAlpha || Math.abs(o.a / o.d - innerWidth / innerHeight) > innerWidth / innerHeight * 5e-5 ? Reflect.apply(e, t, n) : (this.#d = new m(o.a, o.d), this.#u = new m(o.e, o.f), this.#m ? Reflect.apply(e, t, n) : void 0)
                }))
            }#
            g() {
                u.hookPolygon(3, ((e, t) => {
                    const n = Math.round(m.distance(e[0], e[1])),
                        o = Math.round(m.distance(e[0], e[2])),
                        r = Math.round(m.distance(e[1], e[2]));
                    if (n === o && o === r) return;
                    const a = m.centroid(...e),
                        s = m.subtract(a, this.#c),
                        i = m.divide(s, this.#l);
                    this.#p = i
                }))
            }
        },
        y = new class {#
            w;
            constructor() {
                h.on("frame_end", (() => {
                    const e = m.add(w.viewportPos, m.unscale(2, w.viewportDim)),
                        t = m.subtract(e, w.minimapPos),
                        n = m.divide(t, w.minimapDim);
                    this.#w = f.scale(n)
                }))
            }
            get position() {
                return this.#w
            }
        };
    await Player.wfs("home");
    const b = new Object;
    for (let e in t) try {
        t[e]._builds.forEach((e => {
            var t = e.p;
            const {
                name: n,
                desc: o,
                build: r
            } = e;
            b[t] || (b[t] = []), b[t].push({
                name: n,
                desc: o,
                build: r
            })
        }))
    } catch (e) {}
    var v = window.myWin_.document.getElementById("myUL");
    await new Promise((e => {
            var t = setInterval((() => {
                (v = window.myWin_.document.getElementById("myUL")) && (e(), clearInterval(t))
            }))
        })),
        function({
            obj: e,
            func: t = function() {}
        }) {
            if (!t) throw "func must be property of object";
            for (let n in e || this) t((e || this)[n], n)
        }({
            obj: b,
            func: function(e, t) {
                try {
                    function n(e) {
                        return document.createElement(e)
                    }
                    v = window.myWin_.document.getElementById("myUL");
                    let c = i.window.$;
                    var o = n("span");
                    o.id = `dropDown_${t}`, o.className = "classBuild", o.innerText = t;
                    var r = `dropDown_${t.split(" ").join("_")}_div`;
                    o.onclick = function() {
                        console.log(c(`#dropDown_${t.split(" ").join("_")}_div`)), c(`#dropDown_${t.split(" ").join("_")}_div`).toggle(2e3, "swing")
                    };
                    var a = n("div");
                    a.id = r, console.log({
                        a: e,
                        b: t
                    }), e.forEach((e => {
                        var {
                            name: o,
                            build: r,
                            desc: s
                        } = e, l = n("div"), c = n("input");
                        c.type = "button", c.value = "Select Build";
                        var d = n("span");
                        d.innerText = `Name:${o}\nDesc:${s}`, l.append(c), l.append(n("br")), e.p = t, c.onclick = function() {
                            ! function(e) {
                                var t = new Build;
                                t.buildSet(e.build);
                                var n = "Tank:" + e.p + "\n\nPath:" + t.BuildPath + "\n\nName:" + e.name + "\nBuild:" + Object.keys(e.build).map((t => e.build[t])).join(" / ") + "\n\nDesc:" + e.desc;
                                upgrade = window.upgrade = t.BuildPath, _upgrade = t.BuildPath, console.log(n), console.log(e), console.log({
                                    _upgrade: _upgrade,
                                    upgrade: upgrade
                                }), GM_setValue("u", _upgrade);
                                for (let t in e.build) try {
                                    var o = e.build[t] / 7;
                                    o *= 100, i.document.getElementsByClassName(`${t}_`)[0].innerText = e.build[t], i.document.getElementsByClassName(t)[0].style.width = `${o}%`
                                } catch (e) {
                                    log_("Error", e.message), console.error({
                                        err: e,
                                        i: t,
                                        p: `${o}%`,
                                        text: `${t}_`
                                    })
                                }
                            }(e)
                        }, l.append(d), a.append(l), a.append(n("br"))
                    }));
                    var s = n("li"),
                        l = n("div");
                    l.append(o), s.append(l), s.append(a), v.append(s), c(`#dropDown_${t.split(" ").join("_")}_div`).toggle()
                } catch (d) {
                    log_("Warning", d.message)
                }
            }
        }), set_convar("ren_health_bars", !0), set_convar("ren_raw_health_values", !0), set_convar("ren_stroke_soft_color", !1), set_convar("ren_solid_background", !0), otherStuff.colors.map((e => `${e.name} ${e.index?`
            $ {
                e.index
            }
            $ {
                e.default
            }
            `:e.default}`)).forEach(execute), execute("net_replace_color 0 0x000000"), execute("net_force_secure true"), execute("net_replace_color 1 0x999999"), execute("net_replace_color 2 0x050505"), execute("net_replace_color 3 0x0000FF"), execute("net_replace_color 4 0xFF0000"), execute("net_replace_color 5 0x990099"), execute("net_replace_color 6 0x00FF00"), execute("net_replace_color 8 0xFFFF00"), execute("net_replace_color 9 0xFFBBBB"), execute("net_replace_color 10 0xCCCCFF"), execute("net_replace_color 11 0xFF69B4"), execute("net_replace_color 12 0xFFFF00"), execute("net_replace_color 14 0x888888"), execute("net_replace_color 16 0xBBBB00"), execute("net_replace_color 17 0x777777"), execute("ren_stroke_solid_color 0xFFFFFF"), execute("ren_stroke_soft_color_intensity .5"), execute("ren_health_background_color 0x8c8c8c"), execute("ren_minimap_background_color 0xFFFFFF"), execute("ren_background_color 0x333231"), execute("ren_border_color 0xffffff"), execute("ren_bar_background_color 0x8c8c8c"), execute("net_replace_color 14 0x595959"), execute("ren_stroke_solid_color 0xFFFFFF"), execute("net_replace_color 15 0x8B0000"), shapes = Object.keys(colors).map((e => [colors[e], e]));
    var _ = Player.screen;

    function x(e, t) {
        const n = e[0] - t[0],
            o = e[1] - t[1];
        return [Math.hypot(n, o), n, o]
    }
    extended.update = async function(e) {
        "game" == e && "users" != _ && (AutoUpgrade.status && execute(`game_stats_build ${_upgrade}`), autoPlay && (Player.down(75), await sleep(4e3), Player.up(75))), "stats" == e && Firing.status && (Firing.toggle(), log_("AutoFire", "off")), "stats" == e && AutoSpawn.status && (log_("PlayerStatus", "Spawning into game"), await sleep(5e3), await Player.spawn())
    }, testList = {
        f: {},
        s: {}
    }, Firing.status, aim = function(e, t, n = !1) {
        var o;
        input.mouse(e, t), o = n, !Firing.status && o ? (log_("AutoFire", "on"), Firing.toggle(), Player.send(69)) : !o && Firing.status && (Firing.toggle(), Player.send(69), log_("AutoFire", "off"))
    };
    playerPos = [0, 0], enemies = [], buttlets = [], enemies2 = [], TempotherList = {};
    let S = [],
        k = [],
        P = [];
    squares = [];
    let C = [];
    triangles = [];
    let F = [],
        T = [];
    crashers = [], pentagons = [], sortedShapes = [];
    let B = [];
    autoPlay = !1, setTimeout((function e() {
        window.requestAnimationFrame(e), squares = C, triangles = F, pentagons = B, enemies = S, enemies2 = P, otherList = infothingy, crashers = T, infothingy = {
            text: []
        }, C = [], F = [], B = [], S = [], P = [], T = [], O = 0, q = [], I = [], otherList["Others (FFA)"], sortedShapes = function(e) {
            if (!e.length) return e;

            function t(e) {
                const [t, n] = e[0], o = A.width / 2, r = A.height / 2;
                return Math.sqrt((t - o) * * 2 + (n - r) * * 2)
            }
            const n = e.filter((e => "BARRELS" === e[3].toUpperCase())).sort(((e, n) => t(e) - t(n))),
                o = e.filter((e => "PENTAGON" === e[3].toUpperCase())).sort(((e, n) => t(e) - t(n))),
                r = e.filter((e => "TRIANGLE" === e[3].toUpperCase())).sort(((e, n) => t(e) - t(n))),
                a = e.filter((e => "SQUARE" === e[3].toUpperCase())).sort(((e, n) => t(e) - t(n)));
            return [...n, ...o, ...r, ...a]
        }([...enemies, ...crashers, ...pentagons, ...triangles, ...squares]).filter((e => !e.shape || !e.shape[1].includes("Body (You)")))
    }), 100);
    const A = document.getElementById("canvas");
    A.getContext("2d");

    function E(e, t) {
        window.requestAnimationFrame((function n() {
            window.requestAnimationFrame(n);
            const o = CanvasRenderingContext2D.prototype[e];
            o.toString().includes(e) && (CanvasRenderingContext2D.prototype[e] = new Proxy(o, {
                apply: (e, n, o) => (t(n, o), Reflect.apply(e, n, o))
            }))
        }))
    }

    function R(e, t, n, o) {
        return t.getTransform().transformPoint(new DOMPoint(n, o))
    }
    determineDirection = function(e, t) {
        const [n, o] = e[0];
        innerWidth, innerHeight;
        const r = innerWidth / 2,
            a = innerHeight / 2;
        Math.sqrt((n - r) * * 2 + (o - a) * * 2) <= t ? (n < r && o < a || n > r && o < a ? Player.down(40) : (n < r && o > a || n > r && o > a) && Player.down(38), n < r && o < a ? Player.down(37) : n > r && o < a ? Player.down(39) : n < r && o > a ? Player.down(37) : n > r && o > a && Player.down(39)) : (Player.up(38), Player.up(40), Player.up(37), Player.up(39))
    }, logCtx = !1;
    let N = 0,
        D = [];
    var U = [],
        j = [],
        L = !1,
        M = [],
        I = [],
        O = 0,
        q = [];
    E("beginPath", (function(e, t) {
        I = [], pos_ = [], N = 1, D = [], U = [], j = [], shapes = Object.keys(colors).map((e => [colors[e], e]))
    })), E("fillText", (function(e, t) {
        var n = R(t, e, ...t);
        infothingy.text.push({
            args: t,
            x: n.x,
            y: n.y
        })
    })), E("fillRect", (function(e, t) {
        shapes = Object.keys(colors).map((e => [colors[e], e])), I.push(t)
    })), E("rect", (function(e, t) {
        j.push(t)
    })), E("moveTo", (function(e, t) {
        q.push(t), 1 == N ? (N += 1, D.push(t)) : N = 0, U.push(t)
    })), E("stroke", (function(e, t) {
        var n = {...e
        };
        shapes = Object.keys(colors).map((e => [colors[e], e])), n.x_y = I, n.arcs = O, n.lines = q;
        for (let r = 0; r < shapes.length; r++) {
            let a = shapes[r][0].includes(e.fillStyle) || shapes[r][0].toUpperCase().includes(e.fillStyle.toUpperCase());
            if (shapes[r][0].includes(e.strokeStyle) || shapes[r][0].toUpperCase().includes(e.strokeStyle.toUpperCase()) || a) {
                n.shape = shapes[r][1], n.calls = N;
                var o = R(n.shape, e, ...t);
                n.pos = {
                    x: o.x,
                    y: o.y
                }, "Barrels" != n.shape || 3 != O && 6 != O || (n.pos = M, n.calledEnemyLast = L), "Barrels" == n.shape && logCtx && (console.log({
                    _this: n
                }, n), logCtx = !1), infothingy[n.shape] || (infothingy[n.shape] = []), !n.custom && infothingy[n.shape].push({...n
                });
                break
            }
        }
        L = !1
    })), E("lineTo", (function(e, t) {
        q.push(t), N >= 2 && N <= 6 ? (N += 1, D.push(t)) : N = 0, U.push(t)
    })), E("fill", (function(e, t) {
        if (e.fillStyle, shapes = Object.keys(colors).map((e => [colors[e], e])), N >= 4 && N <= 6) {
            const t = function(e) {
                    let t = [0, 0];
                    return e.forEach((e => {
                        t[0] += e[0], t[1] += e[1]
                    })), t[0] /= e.length, t[1] /= e.length, t
                }(D),
                n = 4 == N ? triangles : 5 == N ? squares : pentagons;
            if (e.globalAlpha < 1) return;
            let o = [
                [0, 0], 0
            ];
            for (let e = 0; e < n.length; e++) {
                const r = x(o[0], t)[0];
                x(n[e][0], t)[0] < r && (o = n[e])
            }
            if (x(o[0], t)[0] < 50 && (o[2] && (o[2] == e.fillStyle ? o[1]++ : o[1] = 0), o[1] > 2)) return;
            let r = [t, o[1], e.fillStyle];
            if (r.shape = shapes.filter((t => t[0].toUpperCase() == e.fillStyle.toUpperCase()))[0], L = !1, 4 == N) {
                if (colors["Body (You)"].toUpperCase() == e.fillStyle.toUpperCase() || "#000000" == e.fillStyle) return;
                colors.Crashers.toUpperCase() == e.fillStyle.toUpperCase() ? (r.push("Crashers"), T.push(r)) : (r.push("triangle"), F.push(r))
            } else 5 == N ? (r.push("square"), C.push(r)) : (r.push("pentagon"), B.push(r))
        } else N = 0
    })), E("arc", (function(e, t) {
        const n = e.getTransform();
        z = new m(n.e, n.f), H = n.a, W = l.Player;
        g.toArenaUnits(new m(H, H)).x;
        O++;
        const o = e.getTransform();
        shapes = Object.keys(colors).map((e => [colors[e], e]));
        let r = [
            [o.e, o.f], 0, e.fillStyle
        ];
        M = r[0], r.arcs = O, r.shape = shapes.filter((t => t[0].toUpperCase() == e.fillStyle.toUpperCase()))[0], r.shape && !r.shape[1].includes("You") && (H < 40 ? k.push([z, H, W, $]) : (r.calls = N, r.push("Barrels"), r.push(H), S.push(r), L = !0))
    }));
    var $, z, H, W;
    return "EZ"
}().then(console.log, console.warn);
var mouseInteraction = 1;
document.onkeydown = function(e) {
    88 == e.keyCode && (mouseInteraction ? (document.body.style.pointerEvents = "none", mouseInteraction = !1) : (document.body.style.pointerEvents = "auto", mouseInteraction = !0))
}, window.s = A;